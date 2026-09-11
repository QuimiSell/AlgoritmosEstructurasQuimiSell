#!/usr/bin/env python3
"""Restaura content/description limpios desde originales; conserva quizzes actuales (12 preguntas)."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scratch"))

from enrich_theory import (  # noqa: E402
    FILES,
    clean_description,
    extract_quoted,
    find_modules_region,
    replace_quoted,
    split_module_objects,
)

ORIG_MAP: dict[Path, Path] = {
    ROOT / "constants.tsx": Path("/tmp/orig_constants.tsx"),
    ROOT / "courses" / "mathCourse.ts": Path("/tmp/orig_mathCourse.ts"),
    ROOT / "courses" / "cleanCodeCourse.ts": Path("/tmp/orig_cleanCodeCourse.ts"),
    ROOT / "courses" / "automataCompilerCourse.ts": Path("/tmp/orig_automataCompilerCourse.ts"),
    ROOT / "courses" / "aiEngineerCourse.ts": Path("/tmp/orig_aiEngineerCourse.ts"),
    ROOT / "courses" / "kaliLinuxCourse.ts": Path("/tmp/orig_kaliLinuxCourse.ts"),
    ROOT / "courses" / "algorithmicComplexityCourse.ts": Path("/tmp/orig_algorithmicComplexityCourse.ts"),
}

THEORY_TAIL = re.compile(
    r"\s*En la práctica profesional, este tema exige.*?(?:"
    r"grabar tu clase|avanzar al siguiente módulo"
    r")\.\s*",
    re.DOTALL | re.IGNORECASE,
)

AUTO_EXPANDED = re.compile(
    r"\s*Clase autocontenida[^.]*\.?\s*",
    re.IGNORECASE,
)
RECORDING = re.compile(r"\s*guía para grabar[^.\n]*\.?\s*", re.IGNORECASE)
GENERATED = re.compile(
    r"\n\n## (?:Panorama del tema|📘 Clase completa|Qué aprenderás).*",
    re.DOTALL,
)


def strip_generated_sections(text: str) -> str:
    text = GENERATED.sub("", text)
    for marker in (
        "## 📘 Clase completa",
        "Duración sugerida al grabar",
        "Guía para grabar",
        "Tiempo sugerido al grabar",
    ):
        if marker in text:
            text = text.split(marker)[0].strip()
    return text.strip()


def clean_content(text: str) -> str:
    text = text.replace("\\n", "\n")
    text = strip_generated_sections(text)
    text = THEORY_TAIL.sub(" ", text)
    text = AUTO_EXPANDED.sub(" ", text)
    text = RECORDING.sub(" ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def module_id(module: str) -> int:
    return int(re.search(r"\bid:\s*(\d+)", module).group(1))


def index_modules(text: str) -> dict[int, str]:
    region = find_modules_region(text)
    if not region:
        return {}
    start, end = region
    mods = split_module_objects(text[start:end])
    return {module_id(m): m for m in mods}


def restore_file(path: Path, orig_path: Path) -> None:
    if not orig_path.exists():
        print(f"SKIP {path.name}: missing {orig_path}")
        return

    current = path.read_text(encoding="utf-8")
    original = orig_path.read_text(encoding="utf-8")
    region = find_modules_region(current)
    if not region:
        print(f"SKIP {path.name}: no modules region")
        return

    start, end = region
    cur_by_id = index_modules(current)
    orig_by_id = index_modules(original)
    restored: list[str] = []

    for mid in sorted(cur_by_id.keys()):
        cur = cur_by_id[mid]
        orig = orig_by_id.get(mid)
        if not orig:
            restored.append(cur)
            continue

        content = extract_quoted(orig, "content") or ""
        desc = extract_quoted(orig, "description") or extract_quoted(cur, "description") or ""
        title = extract_quoted(orig, "title") or extract_quoted(cur, "title") or ""

        content = clean_content(content)
        desc = clean_description(desc, title.split(": ", 1)[-1] if ": " in title else title)

        cur = replace_quoted(cur, "content", content)
        cur = replace_quoted(cur, "description", desc)
        restored.append(cur)

    new_text = current[:start] + ",\n".join(restored) + current[end:]
    path.write_text(new_text, encoding="utf-8")
    print(f"{path.name}: restored {len(restored)} modules")


def main() -> None:
    for path, _domain in FILES:
        orig = ORIG_MAP.get(path)
        if path.exists() and orig:
            restore_file(path, orig)
    print("Done — base content restored.")


if __name__ == "__main__":
    main()
