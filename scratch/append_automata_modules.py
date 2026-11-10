#!/usr/bin/env python3
"""Inserta módulos 16–18 en automataCompilerCourse.ts y regenera contenido/evaluación."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSE = ROOT / "courses" / "automataCompilerCourse.ts"

NEW_MODULES = [
    {
        "id": 16,
        "title": "MÓDULO 16: MINIMIZACIÓN DE DFA Y TEOREMA DE MYHILL-NERODE",
        "description": "Estados equivalentes, algoritmo de particiones y DFA mínimo para tablas lexer compactas.",
        "codeSnippet": """# Minimización de DFA por particiones (esquema educativo)
from collections import defaultdict

def minimize_dfa(states, sigma, delta, q0, F):
    # Estado inicial: separar finales vs no finales
    P = [frozenset(F), frozenset(states - set(F))]
    P = [p for p in P if p]
    changed = True
    while changed:
        changed = False
        new_P = []
        for group in P:
            buckets = defaultdict(set)
            for q in group:
                sig = tuple(delta.get((q, a), None) for a in sorted(sigma))
                buckets[sig].add(q)
            for part in buckets.values():
                if len(part) < len(group):
                    changed = True
                new_P.append(frozenset(part))
        P = new_P
    # Construir DFA reducido (representante = min del bloque)
    rep = {q: min(block) for block in P for q in block}
    print("Bloques:", [set(b) for b in P])
    return rep""",
    },
    {
        "id": 17,
        "title": "MÓDULO 17: ANÁLISIS LL(1) — FIRST, FOLLOW Y TABLA PREDICTIVA",
        "description": "Cálculo algorítmico de conjuntos, gramáticas LL(1) y resolución de conflictos.",
        "codeSnippet": """# Cálculo de FIRST y FOLLOW (recursión izquierda eliminada)
GRAMMAR = {
    "E": [["T", "E'"]],
    "E'": [["+", "T", "E'"], ["ε"]],
    "T": [["F", "T'"]],
    "T'": [["*", "F", "T'"], ["ε"]],
    "F": [["(", "E", ")"], ["id"]],
}

def first(symbol, cache=None):
    cache = cache or {}
    if symbol in cache:
        return cache[symbol]
    if symbol == "ε":
        return {"ε"}
    if symbol not in GRAMMAR:  # terminal
        return {symbol}
    result = set()
    for prod in GRAMMAR[symbol]:
        seq = iter_prod(prod)
        for t in seq:
            ft = first(t, cache)
            result |= ft - {"ε"}
            if "ε" not in ft:
                break
        else:
            result.add("ε")
    cache[symbol] = result
    return result

def iter_prod(prod):
    for x in prod:
        yield x

print("FIRST(E) =", first("E"))
print("FIRST(F) =", first("F"))""",
    },
    {
        "id": 18,
        "title": "MÓDULO 18: LR(1), LALR(1) Y GENERADORES YACC/BISON",
        "description": "Ítems LR, tablas ACTION/GOTO, conflictos y precedencia en Bison.",
        "codeSnippet": """# Ítem LR y detección de conflictos en log de Bison
ITEMS = ["S' -> . S", "S -> a .", "S -> ( S ) ."]

def parse_bison_conflicts(log: str) -> list[str]:
    return [ln.strip() for ln in log.splitlines() if "conflict" in ln.lower()]

LOG = (
    "state 42: shift/reduce conflict on token '+' resolved as shift\\n"
    "state 17: reduce/reduce conflict on token ')'"
)
print(parse_bison_conflicts(LOG))""",
    },
]

STUDY_REASONS = [
    {
        "id": 16,
        "title": "Minimización de DFA",
        "why": "Autómatas equivalentes con el mínimo número de estados para lexers eficientes.",
    },
    {
        "id": 17,
        "title": "Análisis LL(1) profundo",
        "why": "Tablas predictivas FIRST/FOLLOW para parsers descendientes sin ambigüedad.",
    },
    {
        "id": 18,
        "title": "LR/LALR y Bison",
        "why": "Parsers ascendientes industriales y resolución de conflictos shift/reduce.",
    },
]


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def shell_module(mod: dict, placeholder_content: str) -> str:
    return f"""{{
      id: {mod["id"]},
      title: {ts_str(mod["title"])},
      description: {ts_str(mod["description"])},
      items: [
      "PLACEHOLDER_ITEMS"
],
      content: {ts_str(placeholder_content)},
      codeSnippet: `{mod["codeSnippet"]}`,
      quiz: [
        {{
          question: "PLACEHOLDER_QUIZ",
          options: ["a", "b", "c", "d"],
          answerIndex: 0,
          explanation: "PLACEHOLDER"
        }}
      ],
      exercises: []
    }}"""


def main() -> None:
    text = COURSE.read_text(encoding="utf-8")
    if 'id: 16,' in text or 'MÓDULO 16:' in text:
        print("Módulos 16+ ya presentes; aplicando solo pipeline.")
    else:
        # cerrar último módulo: `    }]` -> `    },\n{ new ... }\n]`
        marker = "\n    }]"
        idx = text.rfind(marker)
        if idx == -1:
            raise SystemExit("fin de modules[] no encontrado")
        blocks = []
        for mod in NEW_MODULES:
            blocks.append(
                shell_module(
                    mod,
                    f"Contenido se inyecta desde lectures/module-{mod['id']:02d}.md",
                )
            )
        insertion = ",\n".join(blocks)
        tail = "\n    },\n" + insertion + "\n    }]"
        text = text[:idx] + tail + text[idx + len(marker) :]
        # studyPlanReasons
        for reason in STUDY_REASONS:
            entry = (
                f'    {{ id: {reason["id"]}, title: {ts_str(reason["title"])}, '
                f'why: {ts_str(reason["why"])} }}'
            )
            text = text.replace(
                '    { id: 15, title: "Generación de Código Objeto"',
                entry + ',\n    { id: 15, title: "Generación de Código Objeto"',
            )
        text = text.replace(
            "Curso magistral de 15 módulos",
            "Curso magistral de 18 módulos",
        )
        text = text.replace(
            "flujo de flujo de tokens",
            "flujo de tokens",
        )
        COURSE.write_text(text, encoding="utf-8")
        print("Insertados módulos 16–18")

    sys.path.insert(0, str(ROOT / "scratch"))
    import polish_automata_engineering

    polish_automata_engineering.main()
    print("Pipeline polish completado")


if __name__ == "__main__":
    main()
