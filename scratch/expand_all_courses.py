#!/usr/bin/env python3
"""
Expand all QuimiSell course modules:
- Quiz: target 12 questions per module (10-15 range)
- Theory: enrich content + add supplementary items
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path

TARGET_QUIZ = 12
MIN_QUIZ = 10

THEORY_SUFFIX = (
    " En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: "
    "qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. "
    "Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación "
    "extendida antes de grabar tu clase o avanzar al siguiente módulo."
)

EXTRA_ITEMS = [
    "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
    "Errores frecuentes de principiantes y cómo evitarlos en producción.",
    "Checklist de repaso previo a evaluación o grabación de clase.",
    "Conexión con otros módulos del plan de estudios QuimiSell.",
    "Ejercicio recomendado: explicar el concepto en voz alta en menos de 2 minutos (técnica Feynman).",
]

DISTRACTOR_POOL = [
    "Confundir el concepto con una técnica ortogonal no relacionada.",
    "Aplicar la regla solo en el best case ignorando el peor escenario.",
    "Asumir que más líneas de código siempre implican mayor eficiencia.",
    "Descartar el análisis asintótico por constantes de hardware.",
    "Implementar la solución más rápida de escribir sin medir escalabilidad.",
    "Mezclar responsabilidades en una sola función o módulo monolítico.",
    "Ignorar casos borde y entradas vacías en el diseño.",
    "Optimizar prematuramente sin perfilar el cuello de botella real.",
]

ROOT = Path(__file__).resolve().parent.parent
FILES = [
    ROOT / "constants.tsx",
    ROOT / "courses" / "mathCourse.ts",
    ROOT / "courses" / "cleanCodeCourse.ts",
    ROOT / "courses" / "automataCompilerCourse.ts",
    ROOT / "courses" / "aiEngineerCourse.ts",
    ROOT / "courses" / "kaliLinuxCourse.ts",
    ROOT / "courses" / "algorithmicComplexityCourse.ts",
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def short_topic(item: str, max_len: int = 90) -> str:
    text = item.strip().rstrip(".")
    if len(text) > max_len:
        text = text[: max_len - 3] + "..."
    return text


def pick_distractors(seed: str, n: int = 2) -> list[str]:
    h = int(hashlib.md5(seed.encode()).hexdigest(), 16)
    pool = list(DISTRACTOR_POOL)
    out = []
    for i in range(n):
        out.append(pool[(h + i * 7) % len(pool)])
    return out


def make_questions_from_item(item: str, module_title: str, idx: int) -> dict:
    topic = short_topic(item, 80)
    correct = f"Describe correctamente el concepto: {short_topic(item, 70)}"
    d1, d2 = pick_distractors(f"{module_title}-{idx}-{item}")
    return {
        "question": f"Según el temario de '{module_title}', ¿cuál afirmación es correcta sobre: {topic}?",
        "options": [d1, correct, d2],
        "answerIndex": 1,
        "explanation": f"El ítem del módulo establece que {short_topic(item, 120)}. Las otras opciones representan malentendidos típicos.",
    }


def make_synthesis_question(module_title: str, items: list[str]) -> dict:
    topic = module_title.split(": ", 1)[-1] if ": " in module_title else module_title
    correct = f"Integrar los conceptos de {topic} con práctica, autoevaluación y aplicación profesional"
    return {
        "question": f"¿Cuál es la mejor estrategia de estudio para dominar '{topic}' según QuimiSell?",
        "options": [
            "Memorizar definiciones sin implementar ni autoevaluarse",
            correct,
            "Saltar el cuestionario y avanzar al siguiente módulo",
        ],
        "answerIndex": 1,
        "explanation": "El plan QuimiSell combina teoría ampliada, código de referencia, ejercicios y 10-15 preguntas de autoevaluación por módulo.",
    }


def question_block(q: dict, indent: str = "        ") -> str:
    opts = ", ".join(f'"{esc(o)}"' for o in q["options"])
    return (
        f"{indent}{{\n"
        f'{indent}  question: "{esc(q["question"])}",\n'
        f"{indent}  options: [{opts}],\n"
        f'{indent}  answerIndex: {q["answerIndex"]},\n'
        f'{indent}  explanation: "{esc(q["explanation"])}"\n'
        f"{indent}}}"
    )


def extract_items(module_text: str) -> list[str]:
    m = re.search(r"items:\s*\[(.*?)\]", module_text, re.DOTALL)
    if not m:
        return []
    return re.findall(r'"((?:\\.|[^"\\])*)"', m.group(1))


def extract_title(module_text: str) -> str:
    m = re.search(r'title:\s*"((?:\\.|[^"\\])*)"', module_text)
    return m.group(1) if m else "Módulo"


def count_questions(module_text: str) -> int:
    quiz_m = re.search(r"quiz:\s*\[", module_text)
    if not quiz_m:
        return 0
    start = quiz_m.start()
    depth = 0
    i = module_text.find("[", start)
    while i < len(module_text):
        if module_text[i] == "[":
            depth += 1
        elif module_text[i] == "]":
            depth -= 1
            if depth == 0:
                return module_text[start : i + 1].count("question:")
        i += 1
    return module_text.count("question:")


def enrich_content(module_text: str) -> str:
    if THEORY_SUFFIX.strip()[:40] in module_text:
        return module_text

    def repl(m: re.Match) -> str:
        content = m.group(1)
        if THEORY_SUFFIX.strip()[:30] in content:
            return m.group(0)
        return f'content: "{esc(content + THEORY_SUFFIX)}"'

    return re.sub(
        r'content:\s*"((?:\\.|[^"\\])*)"',
        repl,
        module_text,
        count=1,
    )


def enrich_items(module_text: str) -> str:
    existing = extract_items(module_text)
    to_add = []
    for extra in EXTRA_ITEMS:
        if extra not in existing and len(existing) + len(to_add) < 10:
            to_add.append(extra)
        if len(to_add) >= 3:
            break
    if not to_add:
        return module_text

    def repl(m: re.Match) -> str:
        body = m.group(1).rstrip()
        additions = ",\n        ".join(f'"{esc(x)}"' for x in to_add)
        if body.strip():
            return f"items: [\n        {body},\n        {additions}\n      ]"
        return f"items: [\n        {additions}\n      ]"

    return re.sub(r"items:\s*\[(.*?)\]", repl, module_text, count=1, flags=re.DOTALL)


def expand_quiz(module_text: str) -> str:
    current = count_questions(module_text)
    if current >= MIN_QUIZ:
        return module_text

    title = extract_title(module_text)
    items = extract_items(module_text)
    needed = TARGET_QUIZ - current
    new_qs = []

    for i, item in enumerate(items):
        if len(new_qs) >= needed:
            break
        new_qs.append(make_questions_from_item(item, title, i))

    qi = 0
    while len(new_qs) < needed:
        if items:
            new_qs.append(make_questions_from_item(items[qi % len(items)], title, qi + 100))
        else:
            new_qs.append(make_synthesis_question(title, items))
        qi += 1

    if len(new_qs) < needed:
        new_qs.append(make_synthesis_question(title, items))

    new_qs = new_qs[:needed]
    blocks = ",\n".join(question_block(q) for q in new_qs)

    # Insert before closing bracket of quiz array
    quiz_start = module_text.find("quiz:")
    if quiz_start == -1:
        return module_text
    bracket = module_text.rfind("]", 0, module_text.find("}", quiz_start) + 5000)
    # find quiz closing bracket more precisely
    i = module_text.find("[", quiz_start)
    depth = 0
    close_idx = -1
    while i < len(module_text):
        if module_text[i] == "[":
            depth += 1
        elif module_text[i] == "]":
            depth -= 1
            if depth == 0:
                close_idx = i
                break
        i += 1
    if close_idx == -1:
        return module_text

    return module_text[:close_idx] + ",\n" + blocks + "\n      " + module_text[close_idx:]


def split_modules(text: str) -> tuple[str, list[str], str]:
    """Split modules array into prefix, module chunks, suffix."""
    marker = "modules: ["
    idx = text.find(marker)
    if idx == -1 and "COURSE_MODULES" in text:
        marker = "export const COURSE_MODULES: Module[] = ["
        idx = text.find(marker)
    if idx == -1:
        return text, [], ""

    start = text.find("[", idx) + 1
    prefix = text[:start]
    rest = text[start:]

    modules = []
    depth = 0
    chunk_start = 0
    i = 0
    while i < len(rest):
        if rest[i : i + 4] == "id: " and depth == 0:
            if modules:
                chunk_start = i
        if rest[i] == "{":
            if depth == 0:
                chunk_start = i
            depth += 1
        elif rest[i] == "}":
            depth -= 1
            if depth == 0:
                modules.append(rest[chunk_start : i + 1])
        i += 1

    # suffix after last module
    last_end = rest.rfind("}")
    suffix = rest[last_end + 1 :]
    return prefix, modules, suffix


def process_constants(text: str) -> str:
    marker = "export const COURSE_MODULES: Module[] = ["
    idx = text.find(marker)
    if idx == -1:
        return text
    start = idx + len(marker)
    # find matching closing ];
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        if text[i] == "[":
            depth += 1
        elif text[i] == "]":
            depth -= 1
        i += 1
    body = text[start : i - 1]
    prefix = text[:start]
    suffix = text[i - 1 :]

    modules_raw = re.split(r"\n  \},\n  \{", body)
    if len(modules_raw) == 1:
        modules_raw = re.split(r"(?=\n  \{)", body)
        modules_raw = [m for m in modules_raw if "id:" in m]

    processed = []
    for j, mod in enumerate(modules_raw):
        chunk = mod
        if not chunk.strip().startswith("{"):
            chunk = "  {" + chunk
        if not chunk.strip().endswith("}"):
            chunk = chunk + "\n  }"
        chunk = enrich_items(chunk)
        chunk = enrich_content(chunk)
        chunk = expand_quiz(chunk)
        processed.append(chunk)

    joined = ",\n  ".join(processed)
    return prefix + joined + suffix


def process_course_file(text: str) -> str:
    if "export const COURSE_MODULES" in text:
        return process_constants(text)

    m = re.search(r"(modules:\s*\[)", text)
    if not m:
        return text

    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth > 0:
        if text[i] == "[":
            depth += 1
        elif text[i] == "]":
            depth -= 1
        i += 1
    body = text[start : i - 1]
    prefix = text[:start]
    suffix = text[i - 1 :]

    parts = re.split(r"\n    \},\n    \{", body)
    processed = []
    for mod in parts:
        chunk = mod
        if not chunk.strip().startswith("{"):
            chunk = "    {" + chunk
        if not chunk.strip().endswith("}"):
            chunk = chunk + "\n    }"
        chunk = enrich_items(chunk)
        chunk = enrich_content(chunk)
        chunk = expand_quiz(chunk)
        processed.append(chunk)

    joined = ",\n    ".join(processed)
    return prefix + joined + suffix


def main():
    stats = []
    for path in FILES:
        if not path.exists():
            print(f"SKIP missing {path}")
            continue
        original = path.read_text(encoding="utf-8")
        before = original.count("question:")
        updated = process_course_file(original)
        after = updated.count("question:")
        path.write_text(updated, encoding="utf-8")
        stats.append((path.name, before, after))
        print(f"{path.name}: {before} -> {after} questions")

    print("\nDone. Target ~12 questions per module.")


if __name__ == "__main__":
    main()
