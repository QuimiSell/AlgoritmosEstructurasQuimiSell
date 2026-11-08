#!/usr/bin/env python3
"""Pulido nivel ingeniería: LaTeX, ítems, quiz sin plantillas."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LECTURES = ROOT / "courses" / "automataCompiler" / "lectures"
ITEMS_PATH = ROOT / "courses" / "automataCompiler" / "moduleItems.json"
QUIZ_PATH = ROOT / "courses" / "automataCompiler" / "proQuiz.json"
COURSE = ROOT / "courses" / "automataCompilerCourse.ts"

# Reutilizar utilidades del apply script
import sys

sys.path.insert(0, str(ROOT / "scratch"))
from apply_automata_lectures import (  # noqa: E402
    find_modules_region,
    split_module_objects,
    module_id,
    esc,
    find_matching_bracket,
)


def replace_items(module: str, items: list[str]) -> str:
    indent = "      "
    body = f",\n{indent}".join(f'"{esc(it)}"' for it in items)
    return re.sub(
        r"items:\s*\[(.*?)\]",
        f"items: [\n{indent}{body}\n{indent.rstrip()}]",
        module,
        count=1,
        flags=re.DOTALL,
    )


def fix_latex_in_markdown(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "")
    text = re.sub(r"\\\s*\n?\s*ightarrow", r"\\rightarrow", text)
    text = re.sub(r"(?<=[\s$({\\])ightarrow", r"\\rightarrow", text)
    text = text.replace("\\nightarrow", "\\rightarrow")
    return text


def polish_lectures() -> None:
    for path in sorted(LECTURES.glob("module-*.md")):
        raw = path.read_text(encoding="utf-8")
        fixed = fix_latex_in_markdown(raw)
        if fixed != raw:
            path.write_text(fixed, encoding="utf-8")
            print(f"fixed latex: {path.name}")


def extract_quiz_block(module: str) -> tuple[int, int, str] | None:
    m = re.search(r"^\s{4,8}quiz:\s*\[", module, re.MULTILINE)
    if not m:
        return None
    start = m.start()
    open_idx = m.end() - 1
    close_idx = find_matching_bracket(module, open_idx)
    if close_idx is None:
        return None
    end = close_idx + 1
    return start, end, module[start:end]


def quiz_entries_to_ts(questions: list[dict]) -> str:
    lines = ["      quiz: ["]
    for i, q in enumerate(questions):
        opts = ",\n          ".join(json.dumps(o, ensure_ascii=False) for o in q["options"])
        lines.append(
            "        {\n"
            f'          question: "{esc(q["question"])}",\n'
            f"          options: [{opts}],\n"
            f'          answerIndex: {q["answerIndex"]},\n'
            f'          explanation: "{esc(q["explanation"])}"\n'
            "        }"
        )
        if i < len(questions) - 1:
            lines[-1] += ","
    lines.append("      ]")
    return "\n".join(lines)


def merge_quizzes(module: str, pro: dict[str, list]) -> str:
    mid = str(module_id(module))
    if mid not in pro:
        return module
    region = extract_quiz_block(module)
    if not region:
        return module
    start, end, _block = region
    new_block = quiz_entries_to_ts(pro[mid])
    return module[:start] + new_block + module[end:]


def main() -> None:
    polish_lectures()

    import apply_automata_lectures

    apply_automata_lectures.main(content_only=True)

    items = json.loads(ITEMS_PATH.read_text(encoding="utf-8"))
    quiz = json.loads(QUIZ_PATH.read_text(encoding="utf-8"))

    text = COURSE.read_text(encoding="utf-8")
    region = find_modules_region(text)
    if not region:
        raise SystemExit("modules region not found")
    start, end = region
    modules = split_module_objects(text[start:end])
    updated = []
    for module in modules:
        mid = str(module_id(module))
        if mid in items:
            module = replace_items(module, items[mid])
        module = merge_quizzes(module, quiz)
        updated.append(module)
    text = text[:start] + ",\n".join(updated) + text[end:]

    text = text.replace(
        "Tokens de tokens mediante Regex",
        "flujo de tokens mediante autómatas y regex",
    )
    COURSE.write_text(text, encoding="utf-8")
    print("Polished items and quizzes in", COURSE.name)


if __name__ == "__main__":
    main()
