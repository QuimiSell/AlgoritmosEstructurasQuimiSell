#!/usr/bin/env python3
"""
Regenera teoría orientada al ESTUDIANTE: profundidad real, cero meta-instrucciones de grabación.
"""

from __future__ import annotations

import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OLD_MARKERS = ("## 📘 Clase completa", "Duración sugerida al grabar", "Guía para grabar", "Tiempo sugerido al grabar")

FILES: list[tuple[Path, str]] = [
    (ROOT / "constants.tsx", "algoritmos"),
    (ROOT / "courses" / "mathCourse.ts", "matematica"),
    (ROOT / "courses" / "cleanCodeCourse.ts", "clean_code"),
    (ROOT / "courses" / "automataCompilerCourse.ts", "automatas"),
    (ROOT / "courses" / "aiEngineerCourse.ts", "ingeniero_ia"),
    (ROOT / "courses" / "kaliLinuxCourse.ts", "kali"),
    (ROOT / "courses" / "algorithmicComplexityCourse.ts", "complejidad"),
    (ROOT / "courses" / "gitDevOpsCourse.ts", "git_devops"),
    (ROOT / "courses" / "edgeMobileAiCourse.ts", "edge_ia"),
    (ROOT / "courses" / "sqlDatosIaCourse.ts", "sql_datos"),
    (ROOT / "courses" / "evaluacionIaCourse.ts", "evaluacion_ia"),
    (ROOT / "courses" / "redesDevCourse.ts", "redes_dev"),
]

DOMAIN_HOOKS = {
    "algoritmos": "estructuras de datos, complejidad algorítmica y sistemas que deben escalar",
    "matematica": "matemática discreta, álgebra lineal y lógica aplicada al software",
    "clean_code": "ingeniería de software mantenible, SOLID y patrones de diseño",
    "automatas": "teoría de la computación, lenguajes formales y compiladores",
    "ingeniero_ia": "arquitectura de software, IA aplicada y prácticas de ingeniería profesional",
    "kali": "Linux, redes, diagnóstico y ciberseguridad ofensiva/defensiva",
    "complejidad": "análisis asintótico, eficiencia computacional e IA",
    "git_devops": "control de versiones, colaboración en equipo y pipelines CI/CD",
    "edge_ia": "IA on-device, cuantización, privacidad y despliegue móvil",
    "sql_datos": "datos relacionales, pipelines RAG y retrieval semántico",
    "evaluacion_ia": "confiabilidad de sistemas con IA, métricas y guardrails",
    "redes_dev": "redes TCP/IP, protocolos web y diagnóstico de conectividad",
}

INDUSTRY = {
    "algoritmos": [
        "PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.",
        "Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.",
        "Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.",
    ],
    "matematica": [
        "Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.",
        "Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.",
        "El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.",
    ],
    "clean_code": [
        "En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.",
        "Refactorizar hacia SOLID reduce el radio de explosión cuando un requisito de negocio cambia.",
        "NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.",
    ],
    "automatas": [
        "re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.",
        "Clang tokeniza tu código C++ con un autómata y luego aplica gramática libre de contexto en el parser.",
        "Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.",
    ],
    "ingeniero_ia": [
        "Equipos serios no despliegan prompts sin eval harness: métricas de precisión/recall sobre un golden set.",
        "MLOps trata datasets y pipelines como código versionado en Git, no como archivos sueltos en un USB.",
        "Agentes con herramientas (ReAct) necesitan trazas auditables: cada llamada a API debe justificarse en el log.",
    ],
    "kali": [
        "Un pentest PTES documenta cada comando Nmap con timestamp y evidencia Tcpdump para reproducibilidad legal.",
        "Un SOC filtra tráfico con expresiones BPF en Tcpdump antes de escalar un incidente a Tier 2.",
        "CVSS v3.1 traduce hallazgos técnicos a prioridad de parcheo comprensible para gerencia.",
    ],
    "complejidad": [
        "Un bucle O(n²) invisible en un endpoint puede tumbar producción cuando el tráfico se multiplica por 10.",
        "Entrenar un Transformer es O(n²·d) en atención; por eso contextos largos requieren KV-cache y FlashAttention.",
        "Gauss-Jordan es O(n³) secuencial; las GPUs usan GEMM paralelo aunque ambos sean cúbicos en exponente.",
    ],
    "git_devops": [
        "Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.",
        "Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.",
        "Conventional Commits permiten changelogs automáticos y semver en proyectos open source maduros.",
    ],
    "edge_ia": [
        "Google ML Kit ejecuta detección de texto offline en el teléfono sin enviar fotos a servidores.",
        "Linux Lingo (QuimiSell) apunta a inferencia local cuantizada INT8 para vocabulario sin costo de API.",
        "ONNX Runtime Mobile compila modelos a kernels ARM NEON para latencia sub-100ms en gama media.",
    ],
    "sql_datos": [
        "PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.",
        "RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.",
        "SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.",
    ],
    "evaluacion_ia": [
        "OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.",
        "Guardrails de PII evitan que un LLM filtre emails en respuestas de soporte al cliente.",
        "SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.",
    ],
    "redes_dev": [
        "Un fetch() lento suele ser DNS+TLS, no JavaScript: devtools Network muestra waterfall completo.",
        "Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.",
        "CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.",
    ],
}

STUDY_MISTAKES = [
    "Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.",
    "Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.",
    "Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.",
    "Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.",
    "Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).",
    "Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.",
]

STUDY_ITEMS = [
    "Definición formal y en lenguaje llano del concepto.",
    "Ejemplo numérico o de código paso a paso.",
    "Condiciones de uso: cuándo aplica y cuándo no.",
    "Complejidad o trade-offs asociados (tiempo, memoria, seguridad).",
    "Pregunta tipo entrevista técnica frecuente sobre este punto.",
    "Relación con el snippet de implementación del módulo.",
    "Conexión con el laboratorio o proyecto final del curso.",
]


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def pick(items: list[str], seed: str, n: int = 2) -> list[str]:
    h = int(hashlib.md5(seed.encode()).hexdigest(), 16)
    return [items[(h + i * 3) % len(items)] for i in range(n)]


def topic_from_title(title: str) -> str:
    return title.split(": ", 1)[-1] if ": " in title else title


THEORY_TAIL = re.compile(
    r"\s*En la práctica profesional, este tema exige.*?(?:"
    r"grabar tu clase|avanzar al siguiente módulo"
    r")\.\s*",
    re.DOTALL | re.IGNORECASE,
)
AUTO_EXPANDED = re.compile(r"\s*Clase autocontenida[^.]*\.?\s*", re.IGNORECASE)
RECORDING = re.compile(r"\s*guía para grabar[^.\n]*\.?\s*", re.IGNORECASE)
GENERATED = re.compile(
    r"\n\n## (?:Panorama del tema|📘 Clase completa|Qué aprenderás).*",
    re.DOTALL,
)


def strip_generated_sections(text: str) -> str:
    text = GENERATED.sub("", text)
    for marker in OLD_MARKERS:
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


def recover_base_content(content: str, description: str) -> str:
    """Recupera el párrafo original antes de expansiones automáticas previas."""
    text = clean_content(content)
    if len(text) > 80:
        return text
    return clean_description(description, "")


def clean_description(desc: str, topic: str) -> str:
    desc = re.sub(r"\s*Clase autocontenida.*", "", desc).strip()
    desc = re.sub(r"\s*guía para grabar.*", "", desc, flags=re.I).strip()
    if len(desc) > 180:
        return desc[:177] + "..."
    return desc or f"Fundamentos de {topic} para estudio universitario autoguiado."


def concept_block(item: str, topic: str, domain: str, idx: int) -> str:
    clean = item.strip()
    hook = DOMAIN_HOOKS.get(domain, "ingeniería de software")
    return (
        f"## {idx + 1}. {clean}\n\n"
        f"**Qué es y por qué importa.** Dentro de {topic}, este punto es central en {hook}. "
        f"No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n"
        f"**Desarrollo.** {clean} — Profundiza leyendo el enunciado como una pregunta de examen: "
        f"¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? "
        f"Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n"
        f"**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. "
        f"Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n"
        f"**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «{clean}» y cuándo lo evitarías."
    )


def build_student_content(
    original: str,
    title: str,
    description: str,
    items: list[str],
    domain: str,
    module_id: int,
) -> str:
    topic = topic_from_title(title)
    desc = clean_description(description, topic)
    base = recover_base_content(original, desc)
    examples = pick(INDUSTRY.get(domain, INDUSTRY["algoritmos"]), f"{domain}-{module_id}", 3)
    mistakes = pick(STUDY_MISTAKES, f"err-{domain}-{module_id}", 4)
    study_items = [it for it in items if not any(x in it.lower() for x in ("grabar", "grabación", "guion"))][:10]

    parts = [
        f"## Panorama del tema: {topic}\n\n"
        f"{desc}\n\n"
        f"{base}\n\n"
        f"Este módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. "
        f"Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.",
        "## Qué aprenderás en este módulo\n\n"
        + "\n".join(f"· {it.strip()}" for it in study_items[:8])
        + "\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.",
        "## Desarrollo teórico detallado\n\n"
        + "\n\n".join(concept_block(it, topic, domain, i) for i, it in enumerate(study_items[:8])),
        "## Aplicaciones en sistemas reales\n\n"
        + "\n\n".join(f"**Ejemplo {i+1}:** {ex}" for i, ex in enumerate(examples))
        + f"\n\nEstos casos muestran por qué {topic} no es teórico: empresas y proyectos open source aplican estos principios diariamente. "
        f"Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.",
        "## Errores comunes al estudiar\n\n" + "\n".join(f"· {m}" for m in mistakes),
        "## Síntesis para repasar\n\n"
        f"Cierra el módulo resumiendo {topic} en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, "
        f"ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico "
        f"correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    ]
    return "\n\n".join(parts)


def student_items(items: list[str], topic: str) -> list[str]:
    cleaned = [
        it for it in items
        if not any(x in it.lower() for x in ("grabar", "grabación", "guion", "checklist de repaso previo a evaluación o grabación"))
    ]
    extras = [
        f"Definición operativa de los términos centrales de {topic}.",
        "Ejemplo numérico o de código trazado paso a paso.",
        "Pregunta tipo entrevista técnica con respuesta esperada.",
        "Relación explícita con el snippet de implementación del módulo.",
    ]
    existing = set(cleaned)
    for e in extras:
        if e not in existing and len(cleaned) < 12:
            cleaned.append(e)
    return cleaned


def extract_quoted(module: str, field: str) -> str | None:
    m = re.search(rf'{field}:\s*"((?:\\.|[^"\\])*)"', module, re.DOTALL)
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
            if body[j] == "{":
                depth += 1
            elif body[j] == "}":
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
    return None


def needs_regen(content: str) -> bool:
    if any(m in content for m in OLD_MARKERS):
        return True
    if "grabar" in content.lower() or "guion" in content.lower():
        return True
    if "## Panorama del tema" in content and "Tiempo sugerido" not in content:
        return False  # already student version
    if "## Panorama del tema" in content:
        return True
    return True  # first run or legacy


def process_module(module: str, domain: str) -> str:
    content = extract_quoted(module, "content") or ""
    title = extract_quoted(module, "title") or "Módulo"
    desc = extract_quoted(module, "description") or ""
    items = extract_items(module)
    mid = int(re.search(r"\bid:\s*(\d+)", module).group(1))

    if not needs_regen(content) and "## Panorama del tema" in content:
        return module

    topic = topic_from_title(title)
    new_items = student_items(items, topic)
    new_content = build_student_content(content, title, desc, new_items, domain, mid)
    new_desc = clean_description(desc, topic)

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
    modules = split_module_objects(text[start:end])
    enriched = [process_module(m, domain) for m in modules]
    new_text = text[:start] + ",\n".join(enriched) + text[end:]
    path.write_text(new_text, encoding="utf-8")
    lens = [len(extract_quoted(m, "content") or "") for m in enriched]
    grab = sum(1 for m in enriched if "grabar" in (extract_quoted(m, "content") or "").lower())
    print(f"{path.name}: {len(enriched)} mods, avg {sum(lens)//len(lens)} chars, 'grabar' refs={grab}")


def main():
    for path, domain in FILES:
        if path.exists():
            process_file(path, domain)
    print("Done — contenido orientado al estudiante.")


if __name__ == "__main__":
    main()
