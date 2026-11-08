#!/usr/bin/env python3
"""Inyecta lecciones maestras (markdown) y ejercicios tutor en automataCompilerCourse.ts."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSE = ROOT / "courses" / "automataCompilerCourse.ts"
LECTURES_DIR = ROOT / "courses" / "automataCompiler" / "lectures"
EXERCISES = ROOT / "courses" / "automataCompiler" / "tutorExercises.json"


def esc(s: str) -> str:
    s = s.replace("\r\n", "\n").replace("\r", "")
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


MODULE_START = re.compile(
    r'\{\s*\n\s+id:\s*\d+\s*,\s*\n\s+title:\s*"MÓDULO',
)


def split_module_objects(body: str) -> list[str]:
    starts = [m.start() for m in MODULE_START.finditer(body)]
    if not starts:
        return []
    modules: list[str] = []
    for i, start in enumerate(starts):
        end = starts[i + 1] if i + 1 < len(starts) else len(body)
        chunk = body[start:end].rstrip().removesuffix(",").rstrip()
        modules.append(chunk)
    return modules


def find_modules_region(text: str) -> tuple[int, int] | None:
    m = re.search(r"modules:\s*\[", text)
    if not m:
        return None
    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        if text[i] == "[":
            depth += 1
        elif text[i] == "]":
            depth -= 1
        i += 1
    return start, i - 1


def extract_quoted(module: str, field: str) -> str | None:
    m = re.search(rf'{field}:\s*"((?:\\.|[^"\\])*)"', module, re.DOTALL)
    if not m:
        return None
    return m.group(1).replace("\\n", "\n").replace('\\"', '"')


def replace_quoted(module: str, field: str, value: str) -> str:
    escaped = esc(value)

    def repl(_: re.Match) -> str:
        return f'{field}: "{escaped}"'

    return re.sub(
        rf'{field}:\s*"((?:\\.|[^"\\])*)"',
        repl,
        module,
        count=1,
        flags=re.DOTALL,
    )


def module_id(module: str) -> int:
    m = re.search(r"^\s+id:\s*(\d+)\s*,\s*\n\s+title:", module, re.MULTILINE)
    if not m:
        raise ValueError("module id/title not found")
    return int(m.group(1))


def exercises_block_bounds(module: str) -> tuple[int, int] | None:
    m = re.search(r"^\s{4,8}exercises:\s*\[", module, re.MULTILINE)
    if not m:
        return None
    open_idx = m.end() - 1
    close_idx = find_matching_bracket(module, open_idx)
    if close_idx is None:
        return None
    return m.start(), close_idx + 1


def strip_exercises(module: str) -> str:
    bounds = exercises_block_bounds(module)
    if bounds is None:
        return module
    start, end = bounds
    if start > 0 and module[start - 1] == ",":
        start -= 1
    return module[:start] + module[end:]


def find_matching_bracket(s: str, open_bracket_index: int) -> int | None:
    depth = 0
    i = open_bracket_index
    in_str = False
    esc = False
    while i < len(s):
        ch = s[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
            i += 1
            continue
        if ch == '"':
            in_str = True
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return None


def quiz_insertion_index(module: str) -> int | None:
    m = re.search(r"^\s{4,8}quiz:\s*\[", module, re.MULTILINE)
    if not m:
        return None
    open_idx = m.end() - 1
    close_idx = find_matching_bracket(module, open_idx)
    if close_idx is None:
        return None
    return close_idx + 1


def inject_exercises(module: str, exercises: list) -> str:
    module = strip_exercises(module)
    if not exercises:
        return module
    insert_at = quiz_insertion_index(module)
    if insert_at is None:
        return module
    lines = []
    for ex in exercises:
        lines.append(
            "        {\n"
            f'          id: {ex["id"]},\n'
            f'          instruction: "{esc(ex["instruction"])}",\n'
            f'          placeholder: "{esc(ex["placeholder"])}",\n'
            f'          expectedKeywords: [{", ".join(json.dumps(k) for k in ex["expectedKeywords"])}],\n'
            f'          hint: "{esc(ex["hint"])}",\n'
            f'          isEmailSubmission: {"true" if ex.get("isEmailSubmission") else "false"}\n'
            "        }"
        )
    block = ",\n".join(lines)
    insertion = f",\n      exercises: [\n{block}\n      ]"
    return module[:insert_at] + insertion + module[insert_at:]


def main(*, content_only: bool = False) -> None:
    text = COURSE.read_text(encoding="utf-8")
    region = find_modules_region(text)
    if not region:
        raise SystemExit("modules region not found")
    start, end = region
    modules = split_module_objects(text[start:end])
    exercises_map: dict[str, list] = {}
    if EXERCISES.exists():
        exercises_map = {str(k): v for k, v in json.loads(EXERCISES.read_text(encoding="utf-8")).items()}

    updated: list[str] = []
    for module in modules:
        mid = module_id(module)
        lecture_path = LECTURES_DIR / f"module-{mid:02d}.md"
        if lecture_path.exists():
            content = lecture_path.read_text(encoding="utf-8").strip()
            module = replace_quoted(module, "content", content)
        if not content_only and str(mid) in exercises_map:
            module = inject_exercises(module, exercises_map[str(mid)])
        updated.append(module)

    new_text = text[:start] + ",\n".join(updated) + text[end:]
    COURSE.write_text(new_text, encoding="utf-8")
    applied = sum(1 for mid in range(1, 30) if (LECTURES_DIR / f"module-{mid:02d}.md").exists())
    print(f"Applied {applied} lectures to {COURSE.name}")


if __name__ == "__main__":
    main()
