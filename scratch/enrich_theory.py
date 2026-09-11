#!/usr/bin/env python3
"""
Enriquece la teoría de TODOS los módulos para equivaler a una clase completa (~60 min).
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MARKER = "## 📘 Clase completa"

FILES: list[tuple[Path, str]] = [
    (ROOT / "constants.tsx", "algoritmos"),
    (ROOT / "courses" / "mathCourse.ts", "matematica"),
    (ROOT / "courses" / "cleanCodeCourse.ts", "clean_code"),
    (ROOT / "courses" / "automataCompilerCourse.ts", "automatas"),
    (ROOT / "courses" / "aiEngineerCourse.ts", "ingeniero_ia"),
    (ROOT / "courses" / "kaliLinuxCourse.ts", "kali"),
    (ROOT / "courses" / "algorithmicComplexityCourse.ts", "complejidad"),
]

DOMAIN_HOOKS = {
    "algoritmos": "estructuras de datos, complejidad y diseño de algoritmos escalables",
    "matematica": "fundamentos matemáticos aplicados a software, bases de datos e IA",
    "clean_code": "código mantenible, SOLID y patrones de diseño profesional",
    "automatas": "teoría de la computación, lenguajes formales y compiladores",
    "ingeniero_ia": "ingeniería de software en la era de la IA, arquitectura y DevSecOps",
    "kali": "auditoría de redes, diagnóstico Linux y ciberseguridad práctica",
    "complejidad": "análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial",
}

INDUSTRY_EXAMPLES = {
    "algoritmos": [
        "PostgreSQL y MySQL indexan con B+ Trees: búsquedas O(log n) en tablas gigantes.",
        "Redis elige estructuras (hash, zset) según la complejidad requerida por operación.",
        "Google Maps modela grafos urbanos; Dijkstra/A* calculan rutas en tiempo real.",
    ],
    "matematica": [
        "SQL es álgebra relacional: JOIN, GROUP BY y agregaciones tienen fundamento en conjuntos.",
        "Motores 3D aplican matrices de rotación/escala en cada frame de renderizado.",
        "Backpropagation en redes neuronales es la regla de la cadena del cálculo multivariado.",
    ],
    "clean_code": [
        "Code reviews en Big Tech penalizan nombres crípticos y funciones de 200 líneas.",
        "Refactors SOLID reducen incidentes y aceleran onboarding en equipos grandes.",
        "Spring y NestJS implementan inversión de dependencias de forma nativa.",
    ],
    "automatas": [
        "Regex en Python compilan a autómatas finitos deterministas optimizados.",
        "GCC/Clang tokenizan con autómatas y parsean con gramáticas libres de contexto.",
        "LLVM optimiza IR intermedio antes de generar código máquina.",
    ],
    "ingeniero_ia": [
        "Equipos de IA evalúan prompts y modelos con harness de tests antes de producción.",
        "MLOps versiona datasets, métricas y pipelines como código en Git.",
        "Agentes ReAct combinan razonamiento y herramientas con trazas auditables.",
    ],
    "kali": [
        "Pentests PTES documentan hallazgos con Nmap, Nikto y evidencia Tcpdump.",
        "SOCs usan filtros BPF para aislar tráfico malicioso en incident response.",
        "Red teams reportan severidad con CVSS v3.1 para priorizar parches.",
    ],
    "complejidad": [
        "Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.",
        "Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.",
        "KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.",
    ],
}

MISTAKES = [
    "Memorizar sin implementar ni medir en código o terminal.",
    "Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.",
    "Confundir best case con peor caso al estimar rendimiento.",
    "Copiar snippets sin saber qué patrón o complejidad demuestran.",
    "Grabar leyendo texto plano en lugar de explicar con ejemplos propios.",
    "No vincular el tema con un proyecto real que el estudiante recuerde.",
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def pick(items: list[str], seed: str, n: int = 2) -> list[str]:
    h = int(hashlib.md5(seed.encode()).hexdigest(), 16)
    return [items[(h + i * 3) % len(items)] for i in range(n)]


def topic_from_title(title: str) -> str:
    return title.split(": ", 1)[-1] if ": " in title else title


def block_item(item: str, topic: str, domain: str, idx: int) -> str:
    hook = DOMAIN_HOOKS.get(domain, "ingeniería de software")
    clean = item.strip()
    return (
        f"## Bloque {idx + 1} — {clean}\n\n"
        f"Tiempo sugerido al grabar: **7–9 minutos**. "
        f"«{clean}» es esencial en {topic} dentro de {hook}.\n\n"
        f"**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. "
        f"En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n"
        f"**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; "
        f"(3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). "
        f"Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n"
        f"**Pausa activa:** el estudiante escribe una frase aplicando «{clean}» a un sistema conocido (API, app, red, BD)."
    )


def build_content(original: str, title: str, description: str, items: list[str], domain: str, module_id: int) -> str:
    topic = topic_from_title(title)
    examples = pick(INDUSTRY_EXAMPLES.get(domain, INDUSTRY_EXAMPLES["algoritmos"]), f"{domain}-{module_id}", 3)
    mistakes = pick(MISTAKES, f"m-{domain}-{module_id}", 4)

    # Strip previous auto-expansion suffix if present
    orig = original.split(" En la práctica profesional, este tema exige")[0].strip()

    parts = [
        f"{MARKER} — {topic}\n"
        f"**Duración sugerida al grabar:** 55–65 minutos (intro + {min(len(items), 10)} bloques + industria + cierre + quiz).",
        "## Introducción (8–10 min)\n\n"
        f"{description.strip()} {orig}\n\n"
        "Material **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. "
        "Trata este módulo como un **micro-curso** completo sobre el tema.",
        "## Objetivos de aprendizaje\n\n"
        + "\n".join(f"· {it.strip()}" for it in items[:10])
        + "\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n"
        "· Aprobar ≥70% de la autoevaluación (12 preguntas).\n"
        "· Conectar con un caso real de industria o proyecto propio.",
        "\n\n".join(block_item(it, topic, domain, i) for i, it in enumerate(items[:10])),
        "## Aplicación en la industria (10 min)\n\n"
        + "\n\n".join(f"**Caso {i+1}:** {ex}" for i, ex in enumerate(examples))
        + "\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.",
        "## Errores frecuentes (5 min)\n\n"
        + "\n".join(f"· {m}" for m in mistakes),
        "## Guía para grabar (5 min)\n\n"
        "1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · "
        "4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\n"
        "Usa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.",
        "## Cierre (5 min)\n\n"
        f"Resume {topic} en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). "
        f"«Dominar {topic} es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
    ]
    return "\n\n".join(parts)


def extra_items(items: list[str], topic: str) -> list[str]:
    extras = [
        f"Mapa mental de {topic}.",
        "Preguntas tipo entrevista técnica.",
        "Glosario: 5 términos que defines sin diccionario.",
        "Conexión con el laboratorio del curso.",
        "Repaso offline sin internet ni APIs de pago.",
    ]
    existing = set(items)
    return items + [e for e in extras if e not in existing][: min(5, 14 - len(items))]


def extract_quoted(module: str, field: str) -> str | None:
    pat = rf'{field}:\s*"((?:\\.|[^"\\])*)"'
    m = re.search(pat, module, re.DOTALL)
    if not m:
        return None
    return m.group(1).replace("\\n", "\n").replace('\\"', '"')


def extract_items(module: str) -> list[str]:
    m = re.search(r"items:\s*\[(.*?)\]", module, re.DOTALL)
    if not m:
        return []
    return [x.replace("\\n", " ") for x in re.findall(r'"((?:\\.|[^"\\])*)"', m.group(1))]


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


def replace_items(module: str, items: list[str]) -> str:
    indent = "        " if "        " in module.split("items:")[0].split("\n")[-1] else "      "
    body = f",\n{indent}".join(f'"{esc(it)}"' for it in items)
    return re.sub(
        r"items:\s*\[(.*?)\]",
        f"items: [\n{indent}{body}\n{indent.rstrip()}]",
        module,
        count=1,
        flags=re.DOTALL,
    )


def split_module_objects(body: str) -> list[str]:
    modules: list[str] = []
    pos = 0
    while pos < len(body):
        m = re.search(r"\bid:\s*\d+\s*,", body[pos:])
        if not m:
            break
        id_pos = pos + m.start()
        brace = body.rfind("{", pos, id_pos)
        if brace == -1:
            pos = id_pos + 1
            continue
        depth = 0
        j = brace
        while j < len(body):
            ch = body[j]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    modules.append(body[brace : j + 1])
                    pos = j + 1
                    break
            j += 1
        else:
            break
    return modules


def find_modules_region(text: str) -> tuple[int, int] | None:
    for pat in (r"export const COURSE_MODULES:\s*Module\[\]\s*=\s*\[", r"modules:\s*\["):
        m = re.search(pat, text)
        if m:
            start = m.end()  # position right after opening [
            depth = 1
            i = start
            while i < len(text) and depth > 0:
                if text[i] == "[":
                    depth += 1
                elif text[i] == "]":
                    depth -= 1
                i += 1
            return start, i - 1
    return None


def process_module(module: str, domain: str) -> str:
    content = extract_quoted(module, "content") or ""
    if MARKER in content:
        return module

    title = extract_quoted(module, "title") or "Módulo"
    desc = extract_quoted(module, "description") or ""
    items = extract_items(module)
    mid = int(re.search(r"\bid:\s*(\d+)", module).group(1))

    topic = topic_from_title(title)
    new_items = extra_items(items, topic)
    new_content = build_content(content, title, desc, new_items, domain, mid)
    new_desc = desc if "Clase autocontenida" in desc else (
        f"{desc.strip()} Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar {topic}."
    )

    module = replace_quoted(module, "description", new_desc)
    module = replace_quoted(module, "content", new_content)
    module = replace_items(module, new_items)
    return module


def process_file(path: Path, domain: str) -> None:
    text = path.read_text(encoding="utf-8")
    region = find_modules_region(text)
    if not region:
        print(f"SKIP {path.name}")
        return

    start, end = region
    body = text[start:end]
    modules = split_module_objects(body)
    if not modules:
        print(f"SKIP {path.name}: 0 modules")
        return

    enriched = [process_module(m, domain) for m in modules]
    new_body = ",\n".join(enriched)
    new_text = text[:start] + new_body + text[end:]
    path.write_text(new_text, encoding="utf-8")

    lens = [len(extract_quoted(m, "content") or "") for m in enriched]
    avg = sum(lens) // len(lens)
    print(f"{path.name}: {len(enriched)} modules, avg {avg} chars (~{avg//850} min lectura)")


def main():
    for path, domain in FILES:
        if path.exists():
            process_file(path, domain)
    print("Done.")


if __name__ == "__main__":
    main()
