import { Course } from '../domain/models';

export const ALGORITHMIC_COMPLEXITY_COURSE: Course = {
  id: 'complejidad_algoritmica',
  title: 'Complejidad Algorítmica: Big-O Puro y Big-O en Inteligencia Artificial',
  shortTitle: 'Complejidad Big-O',
  badge: 'Ciencias de la Computación & IA',
  icon: '📊',
  description: '20 módulos dedicados exclusivamente a la notación Big-O: 15 módulos de análisis algorítmico puro (O, Ω, Θ, bucles, recursión, clases clásicas, amortizado) y 5 módulos aplicados a IA (FLOPs en redes neuronales, por qué Gauss-Jordan no se usa en GPUs, backprop, atención cuadrática y optimizaciones de inferencia).',
  whyStudyTitle: '🧠 ¿Por qué dominar Big-O antes de escribir código?',
  whyStudyText: 'Big-O no es un ejercicio académico abstracto: es el contrato de escalabilidad que firmas con cada función, API y modelo de IA que despliegas. Un bucle O(n²) invisible en un dashboard puede tumbar producción con 50,000 usuarios. Un Transformer sin KV-cache puede hacer imposible contextos largos. Este curso te forma para leer código, diseñar sistemas y auditar pipelines de machine learning con el mismo lenguaje que usan Google, Meta y OpenAI en sus revisiones de rendimiento.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Fundamentos del Análisis",
      why: "Establece el lenguaje matemático para medir eficiencia antes de codificar."
    },
    {
      id: 2,
      title: "Notación O, Ω y Θ",
      why: "Domina cotas superiores, inferiores y ajustadas para garantías formales."
    },
    {
      id: 3,
      title: "Casos y Simplificación",
      why: "Best/worst/average case y reglas algebraicas de simplificación."
    },
    {
      id: 4,
      title: "Bucles y Recursión",
      why: "Patrones iterativos, recurrencias y Teorema Maestro."
    },
    {
      id: 5,
      title: "Clases Clásicas O(1) a O(n!)",
      why: "Catálogo completo de complejidades con ejemplos reales."
    },
    {
      id: 6,
      title: "Amortizado y Trade-offs",
      why: "Dynamic arrays, tiempo vs espacio y selección de algoritmos."
    },
    {
      id: 7,
      title: "Big-O en Redes Neuronales",
      why: "FLOPs en capas densas, convoluciones y forward pass."
    },
    {
      id: 8,
      title: "GPUs y Álgebra Lineal",
      why: "Por qué GEMM gana sobre Gauss-Jordan en entrenamiento masivo."
    },
    {
      id: 9,
      title: "Transformers y Optimización",
      why: "Atención cuadrática, KV-cache, cuantización y paralelismo."
    }
  ],
  labChallenge: {
    title: "Auditor de Complejidad: Detector Big-O + Estimador FLOPs de Capa Densa",
    badge: "Laboratorio de Complejidad Algorítmica",
    description: "Construye una herramienta (CLI o React) que analice fragmentos de código Python y clasifique su complejidad temporal (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)) mediante heurísticas de bucles y recursión. Incluye un módulo extra que, dado batch, in_features y out_features, calcule FLOPs de una capa densa y estime memoria de activaciones para forward + backward (×3).",
    requirements: [
      "• Analizador heurístico: detectar bucles simples, anidados y while con división (n//=2).",
      "• Clasificador Big-O: mostrar la clase detectada y justificación en texto.",
      "• Calculadora FLOPs: capa densa batch×in×out con regla ×3 para entrenamiento.",
      "• Tabla comparativa: Gauss-Jordan O(n³) secuencial vs GEMM O(n³) paralelo (explicación textual)."
    ],
    cleanCodeRules: [
      "• Separar parser/heurísticas de la UI (SOLID).",
      "• Funciones puras para cálculo de FLOPs y clasificación.",
      "• Lenguajes: React (TypeScript) o Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Auditor Big-O - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio con la solución al Reto Auditor de Complejidad Algorítmica (Detector Big-O + Estimador FLOPs).\n\nEnlace: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología (React o Python):\n- \n\nExplicación breve:\n- \n\nSaludos cordiales.`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS",
      description: "Por qué medimos eficiencia con matemáticas y no con cronómetros. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.",
      items: [
      "Definición formal de algoritmo y costo computacional.",
      "Entrada n y crecimiento asintótico: la variable que importa.",
      "Tiempo de CPU vs número de operaciones elementales.",
      "Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.",
      "Por qué el análisis previo al código evita deuda técnica en producción.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nPor qué medimos eficiencia con matemáticas y no con cronómetros. Antes de escribir una sola línea de código, un ingeniero debe responder: ¿qué pasa si mañana los datos crecen 100 veces? El análisis de algoritmos no mide segundos en tu laptop; mide cómo crece el número de operaciones elementales (comparaciones, asignaciones, accesos a memoria) en función del tamaño de entrada n. Un algoritmo que tarda 0.001 s con 1,000 registros pero 400 s con 100,000 registros tiene un problema de escalabilidad, no de hardware. Este curso entero se dedica a dominar esa lenguaje matemático: la notación Big-O y sus aplicaciones, desde bucles en Python hasta kernels en GPUs de Inteligencia Artificial.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Definición formal de algoritmo y costo computacional.\n· Entrada n y crecimiento asintótico: la variable que importa.\n· Tiempo de CPU vs número de operaciones elementales.\n· Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.\n· Por qué el análisis previo al código evita deuda técnica en producción.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Definición formal de algoritmo y costo computacional.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Definición formal de algoritmo y costo computacional.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Definición formal de algoritmo y costo computacional.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Entrada n y crecimiento asintótico: la variable que importa.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Entrada n y crecimiento asintótico: la variable que importa.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Entrada n y crecimiento asintótico: la variable que importa.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Tiempo de CPU vs número de operaciones elementales.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Tiempo de CPU vs número de operaciones elementales.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Tiempo de CPU vs número de operaciones elementales.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Por qué el análisis previo al código evita deuda técnica en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Por qué el análisis previo al código evita deuda técnica en producción.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Por qué el análisis previo al código evita deuda técnica en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Comparación empírica vs análisis teórico
import time

def suma_lineal(arr):
    total = 0
    for x in arr:          # O(n) operaciones
        total += x
    return total

n_pequeno = list(range(10_000))
n_grande  = list(range(1_000_000))

# El análisis Big-O predice: 100x datos ≈ 100x operaciones (O(n))
# Sin importar si la CPU es Intel o Apple Silicon`,
      quiz: [
        {
          question: "¿Qué mide principalmente el análisis de algoritmos con notación Big-O?",
          options: ["Segundos exactos en un procesador específico", "Crecimiento del número de operaciones respecto al tamaño de entrada n", "Líneas de código del programa"],
          answerIndex: 1,
          explanation: "Big-O describe el comportamiento asintótico (cuando n tiende a infinito), no el tiempo absoluto en un hardware concreto."
        },
        {
          question: "Si duplicamos n en un algoritmo O(n), ¿cómo crece el trabajo teórico?",
          options: ["Se cuadruplica", "Se duplica aproximadamente", "Permanece igual"],
          answerIndex: 1,
          explanation: "En O(n) el costo es proporcional a n; duplicar la entrada duplica las operaciones."
        },
        {
          question: "¿Por qué descartamos constantes como 3n → O(n)?",
          options: ["Porque Python las optimiza automáticamente", "Porque para n muy grande solo importa el término dominante", "Porque las constantes son ilegales en notación Big-O"],
          answerIndex: 1,
          explanation: "Asintóticamente, 3n y n crecen con la misma forma; la constante no cambia la clase de complejidad."
        },
        {
          question: "¿Cuál es la unidad típica que contamos en análisis de tiempo?",
          options: ["Megabytes de RAM", "Operaciones elementales (comparaciones, asignaciones)", "Número de archivos abiertos"],
          answerIndex: 1,
          explanation: "Contamos operaciones primitivas del modelo RAM, independientes del lenguaje."
        },
        {
          question: "Un algoritmo O(1) significa que...",
          options: ["Nunca usa memoria", "El costo no crece con n (tiempo constante)", "Solo funciona con arreglos"],
          answerIndex: 1,
          explanation: "O(1) indica que el número de operaciones permanece acotado aunque n aumente."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Definición formal de algoritmo y costo computacional?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición formal de algoritmo y costo computacional", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición formal de algoritmo y costo computacional. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Entrada n y crecimiento asintótico: la variable que importa?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Entrada n y crecimiento asintótico: la variable que importa", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Entrada n y crecimiento asintótico: la variable que importa. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Tiempo de CPU vs número de operaciones elementales?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Tiempo de CPU vs número de operaciones elementales", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tiempo de CPU vs número de operaciones elementales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Por qué el análisis previo al código evita deuda técnica en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Por qué el análisis previo al código evita deuda técnica en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Por qué el análisis previo al código evita deuda técnica en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR",
      description: "La definición formal de O(f(n)): el peor escenario que garantizamos. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar NOTACIÓN O — LÍMITE SUPERIOR.",
      items: [
      "Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.",
      "O como cota superior: prometemos que nunca será peor que esto.",
      "Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).",
      "Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).",
      "Errores comunes: confundir O con '=' exacto.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de NOTACIÓN O — LÍMITE SUPERIOR.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — NOTACIÓN O — LÍMITE SUPERIOR\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nLa definición formal de O(f(n)): el peor escenario que garantizamos. La notación O (Big-O) responde a la pregunta del jefe de ingeniería: ¿cuál es lo PEOR que puede pasar? Formalmente, decimos que T(n) ∈ O(f(n)) si existe una constante c y un umbral n₀ a partir del cual T(n) nunca supera c·f(n). Esto es una cota superior, no una igualdad exacta. Decir que un algoritmo es O(n²) no significa que siempre ejecute exactamente n² pasos; significa que está acotado por algo proporcional a n². En entrevistas técnicas y diseño de sistemas, O representa la garantía de escalabilidad.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.\n· O como cota superior: prometemos que nunca será peor que esto.\n· Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).\n· Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).\n· Errores comunes: confundir O con '=' exacto.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de NOTACIÓN O — LÍMITE SUPERIOR.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — O como cota superior: prometemos que nunca será peor que esto.\n\nTiempo sugerido al grabar: **7–9 minutos**. «O como cota superior: prometemos que nunca será peor que esto.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «O como cota superior: prometemos que nunca será peor que esto.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Errores comunes: confundir O con '=' exacto.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores comunes: confundir O con '=' exacto.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores comunes: confundir O con '=' exacto.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de NOTACIÓN O — LÍMITE SUPERIOR.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de NOTACIÓN O — LÍMITE SUPERIOR.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de NOTACIÓN O — LÍMITE SUPERIOR.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en NOTACIÓN O — LÍMITE SUPERIOR dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume NOTACIÓN O — LÍMITE SUPERIOR en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar NOTACIÓN O — LÍMITE SUPERIOR es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Demostración intuitiva: 3n + 10 ∈ O(n)
def T(n):
    return 3 * n + 10

# Para n >= 1, T(n) <= 4*n  →  c=4, n0=1
# Por tanto T(n) ∈ O(n)

def ejemplo_cuadratico(arr):
    n = len(arr)
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1   # exactamente n² iteraciones → O(n²)
    return count`,
      quiz: [
        {
          question: "¿Qué representa la notación O(f(n))?",
          options: ["Igualdad exacta T(n) = f(n)", "Cota superior asintótica del costo", "Cota inferior del costo"],
          answerIndex: 1,
          explanation: "O(f(n)) significa que T(n) crece como máximo como f(n) multiplicado por una constante."
        },
        {
          question: "¿T(n) = 5n + 200 pertenece a O(n)?",
          options: ["Sí", "No, es O(5n)", "No, es O(200)"],
          answerIndex: 0,
          explanation: "5n + 200 ≤ 6n para n ≥ 200, por lo tanto es O(n)."
        },
        {
          question: "¿Cuál crece más rápido asintóticamente?",
          options: ["O(n log n)", "O(n²)", "O(log n)"],
          answerIndex: 1,
          explanation: "n² supera a n log n y log n para n grande."
        },
        {
          question: "Si T(n) ≤ 2n² + 3n para todo n ≥ 1, ¿cuál es la notación más ajustada como cota superior típica?",
          options: ["O(n)", "O(n²)", "O(2n² + 3n)"],
          answerIndex: 1,
          explanation: "El término dominante es n²; simplificamos a O(n²)."
        },
        {
          question: "¿Por qué usamos O en lugar de tiempo en segundos?",
          options: ["Porque los segundos no existen en computadoras", "Porque es independiente del hardware y permite comparar algoritmos", "Porque Python no tiene reloj"],
          answerIndex: 1,
          explanation: "Big-O abstrae el hardware y permite comparación objetiva entre algoritmos."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: O como cota superior: prometemos que nunca será peor que esto?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: O como cota superior: prometemos que nunca será peor que esto", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que O como cota superior: prometemos que nunca será peor que esto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Errores comunes: confundir O con '=' exacto?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores comunes: confundir O con '=' exacto", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores comunes: confundir O con '=' exacto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO",
      description: "Completando el panorama: peor caso, mejor caso y costo exacto asintótico. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.",
      items: [
      "Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.",
      "Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).",
      "Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).",
      "Ejemplo: Merge Sort es Θ(n log n) en todos los casos.",
      "Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nCompletando el panorama: peor caso, mejor caso y costo exacto asintótico. Big-O solo cuenta la mitad de la historia. La notación Ω (Omega) describe la cota inferior: ningún input puede forzar al algoritmo a hacer menos trabajo que Ω(f(n)) en el peor análisis dual. La notación Θ (Theta) es el caso perfecto: el algoritmo crece tanto por arriba como por abajo como f(n). Por ejemplo, recorrer un arreglo para encontrar el máximo es Θ(n) porque siempre debes mirar cada elemento (Ω(n)) y nunca haces más de n comparaciones (O(n)). En teoría de algoritmos, demostrar que un problema de ordenamiento por comparaciones requiere Ω(n log n) operaciones es un resultado fundamental que explica por qué Merge Sort y Heap Sort son óptimos.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.\n· Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).\n· Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).\n· Ejemplo: Merge Sort es Θ(n log n) en todos los casos.\n· Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Ejemplo: Merge Sort es Θ(n log n) en todos los casos.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Ejemplo: Merge Sort es Θ(n log n) en todos los casos.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Ejemplo: Merge Sort es Θ(n log n) en todos los casos.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)).» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Búsqueda lineal del máximo: Θ(n)
def maximo(arr):
    if not arr:
        return None
    m = arr[0]
    for x in arr[1:]:      # siempre n-1 comparaciones
        if x > m:
            m = x
    return m

# Límite teórico: cualquier algoritmo que examine
# un arreglo desordenado para encontrar el max
# necesita Ω(n) comparaciones en el peor caso`,
      quiz: [
        {
          question: "¿Qué significa T(n) ∈ Ω(f(n))?",
          options: ["T(n) crece al menos tan rápido como f(n)", "T(n) es siempre menor que f(n)", "T(n) es exactamente f(n)"],
          answerIndex: 0,
          explanation: "Ω es cota inferior: T(n) ≥ c·f(n) para n grande."
        },
        {
          question: "Si un algoritmo es O(n) y Ω(n), entonces es...",
          options: ["O(n²)", "Θ(n)", "O(1)"],
          answerIndex: 1,
          explanation: "Cuando coinciden cota superior e inferior, tenemos Θ."
        },
        {
          question: "Merge Sort tiene complejidad...",
          options: ["O(n) peor caso", "Θ(n log n) en peor, mejor y promedio", "Ω(n²)"],
          answerIndex: 1,
          explanation: "Merge Sort siempre divide y combina en n log n."
        },
        {
          question: "¿Qué establece el límite Ω(n log n) para ordenamiento por comparación?",
          options: ["Que Quick Sort es imposible", "Que ningún algoritmo basado solo en comparaciones puede hacer mejor que n log n", "Que Bubble Sort es óptimo"],
          answerIndex: 1,
          explanation: "Es un teorema clásico: comparar elementos requiere al menos n log n comparaciones."
        },
        {
          question: "Un algoritmo con mejor caso O(1) y peor caso O(n) puede tener...",
          options: ["Θ(1)", "Ω(1) y O(n) sin ser Θ de ninguno solo", "Siempre Θ(n)"],
          answerIndex: 1,
          explanation: "Las cotas pueden diferir; Θ requiere mismo orden arriba y abajo en todos los casos analizados."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a ...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n))?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n))", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Ejemplo: Merge Sort es Θ(n log n) en todos los casos?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo: Merge Sort es Θ(n log n) en todos los casos", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo: Merge Sort es Θ(n log n) en todos los casos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Cuándo importa Ω: límites teóricos de problemas (ordenamiento por c...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: BEST, WORST Y AVERAGE CASE",
      description: "Tres escenarios de entrada y cuál elige la industria para garantías reales. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar BEST, WORST Y AVERAGE CASE.",
      items: [
      "Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).",
      "Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).",
      "Average Case: expectativa matemática sobre entradas aleatorias.",
      "Amortized vs Average: promedios sobre secuencias de operaciones.",
      "Por qué contratos SLA y sistemas críticos exigen análisis de peor caso.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de BEST, WORST Y AVERAGE CASE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — BEST, WORST Y AVERAGE CASE\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nTres escenarios de entrada y cuál elige la industria para garantías reales. Un mismo algoritmo puede comportarse muy distinto según la entrada. Quick Sort promedio O(n log n) pero peor caso O(n²) si el pivote es siempre el mínimo. Insertion Sort es O(n) en el mejor caso (casi ordenado) pero O(n²) en el peor. En producción, los ingenieros de Google, AWS o bancos diseñan para el PEOR caso porque un atacante o un pico de tráfico puede empujar exactamente ese escenario. El caso promedio es útil en simulaciones probabilísticas, pero nunca sustituye la garantía de peor caso cuando la fiabilidad es crítica.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).\n· Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).\n· Average Case: expectativa matemática sobre entradas aleatorias.\n· Amortized vs Average: promedios sobre secuencias de operaciones.\n· Por qué contratos SLA y sistemas críticos exigen análisis de peor caso.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de BEST, WORST Y AVERAGE CASE.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Average Case: expectativa matemática sobre entradas aleatorias.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Average Case: expectativa matemática sobre entradas aleatorias.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Average Case: expectativa matemática sobre entradas aleatorias.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Amortized vs Average: promedios sobre secuencias de operaciones.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Amortized vs Average: promedios sobre secuencias de operaciones.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Amortized vs Average: promedios sobre secuencias de operaciones.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Por qué contratos SLA y sistemas críticos exigen análisis de peor caso.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Por qué contratos SLA y sistemas críticos exigen análisis de peor caso.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Por qué contratos SLA y sistemas críticos exigen análisis de peor caso.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de BEST, WORST Y AVERAGE CASE.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de BEST, WORST Y AVERAGE CASE.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de BEST, WORST Y AVERAGE CASE.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en BEST, WORST Y AVERAGE CASE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume BEST, WORST Y AVERAGE CASE en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar BEST, WORST Y AVERAGE CASE es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Quick Sort: peor caso O(n²), promedio O(n log n)
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivote = arr[0]           # mala elección → peor caso
    menores = [x for x in arr[1:] if x <= pivote]
    mayores = [x for x in arr[1:] if x > pivote]
    return quicksort(menores) + [pivote] + quicksort(mayores)

# Entrada adversa: [1,2,3,4,5] con pivote arr[0]
# genera particiones desbalanceadas → O(n²)`,
      quiz: [
        {
          question: "¿Qué caso analiza la industria para SLAs de latencia máxima?",
          options: ["Best case", "Worst case", "Solo average case"],
          answerIndex: 1,
          explanation: "Los SLAs garantizan límites superiores; eso es peor caso."
        },
        {
          question: "Insertion Sort en arreglo ya ordenado es...",
          options: ["O(n²)", "O(n log n)", "O(n)"],
          answerIndex: 2,
          explanation: "Cada elemento se compara una vez y no hay desplazamientos grandes."
        },
        {
          question: "Quick Sort sin randomización puede degradarse a O(n²) cuando...",
          options: ["El arreglo es aleatorio", "El pivote siempre es el extremo mínimo o máximo", "Usa memoria extra"],
          answerIndex: 1,
          explanation: "Particiones desbalanceadas en cada nivel producen recursión profunda n."
        },
        {
          question: "El average case requiere...",
          options: ["Una sola entrada fija", "Un modelo de distribución de entradas (ej. uniforme)", "Ignorar probabilidades"],
          answerIndex: 1,
          explanation: "Se calcula E[T(n)] sobre un espacio de entradas con probabilidades."
        },
        {
          question: "Bubble Sort best case con flag de 'swapped' puede ser...",
          options: ["O(n) si ya está ordenado", "O(1) siempre", "O(n log n)"],
          answerIndex: 0,
          explanation: "Una pasada detecta que no hubo intercambios y termina."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Average Case: expectativa matemática sobre entradas aleatorias?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Average Case: expectativa matemática sobre entradas aleatorias", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Average Case: expectativa matemática sobre entradas aleatorias. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Amortized vs Average: promedios sobre secuencias de operaciones?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Amortized vs Average: promedios sobre secuencias de operaciones", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Amortized vs Average: promedios sobre secuencias de operaciones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Por qué contratos SLA y sistemas críticos exigen análisis de peor caso?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Por qué contratos SLA y sistemas críticos exigen análisis de peor caso", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Por qué contratos SLA y sistemas críticos exigen análisis de peor caso. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: BEST, WORST Y AVERAGE CASE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA",
      description: "Eliminar constantes, términos menores y dominar el análisis en minutos. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.",
      items: [
      "Regla 1: descartar coeficientes (4n² → O(n²)).",
      "Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).",
      "Regla 3: suma de complejidades = máximo de los sumandos.",
      "Regla 4: producto de bucles anidados = producto de rangos.",
      "Regla 5: logaritmos de distinta base difieren solo por constante → O(log n).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — REGLAS DE SIMPLIFICACIÓN ASINTÓTICA\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nEliminar constantes, términos menores y dominar el análisis en minutos. El análisis asintótico tiene reglas algebraicas simples que aceleran el trabajo diario. Si T(n) = 7n³ + 2n² + 999, el término dominante es 7n³ y la complejidad es O(n³). Si tienes un bucle O(n) seguido de otro O(n²), el total es O(n²) porque el segundo domina. Si tienes bucles anidados de n y m iteraciones, obtienes O(n·m). Estas reglas evitan perder horas contando instrucciones máquina y permiten leer código ajeno con velocidad profesional.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Regla 1: descartar coeficientes (4n² → O(n²)).\n· Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).\n· Regla 3: suma de complejidades = máximo de los sumandos.\n· Regla 4: producto de bucles anidados = producto de rangos.\n· Regla 5: logaritmos de distinta base difieren solo por constante → O(log n).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Regla 1: descartar coeficientes (4n² → O(n²)).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Regla 1: descartar coeficientes (4n² → O(n²)).» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Regla 1: descartar coeficientes (4n² → O(n²)).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Regla 3: suma de complejidades = máximo de los sumandos.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Regla 3: suma de complejidades = máximo de los sumandos.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Regla 3: suma de complejidades = máximo de los sumandos.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Regla 4: producto de bucles anidados = producto de rangos.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Regla 4: producto de bucles anidados = producto de rangos.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Regla 4: producto de bucles anidados = producto de rangos.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Regla 5: logaritmos de distinta base difieren solo por constante → O(log n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Regla 5: logaritmos de distinta base difieren solo por constante → O(log n).» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Regla 5: logaritmos de distinta base difieren solo por constante → O(log n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de REGLAS DE SIMPLIFICACIÓN ASINTÓTICA.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en REGLAS DE SIMPLIFICACIÓN ASINTÓTICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume REGLAS DE SIMPLIFICACIÓN ASINTÓTICA en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar REGLAS DE SIMPLIFICACIÓN ASINTÓTICA es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Ejemplo: simplificar T(n) = 2n² + 50n + log(n) + 1000
# Dominante: n² → O(n²)

def ejemplo_mixto(n):
    # O(n)
    for i in range(n):
        pass
    # O(n²)
    for i in range(n):
        for j in range(n):
            pass
    # Total: O(n²) — el término cuadrático domina

# log₂(n) y log₁₀(n) son ambos O(log n)`,
      quiz: [
        {
          question: "T(n) = 10n⁴ + n² + 5000 es...",
          options: ["O(n²)", "O(n⁴)", "O(5000)"],
          answerIndex: 1,
          explanation: "El término de mayor grado es n⁴."
        },
        {
          question: "Secuencia: bucle O(n) + bucle O(n log n) = ?",
          options: ["O(n)", "O(n log n)", "O(n² log n)"],
          answerIndex: 1,
          explanation: "Se toma el máximo: n log n domina a n."
        },
        {
          question: "Bucles anidados: for i in n, for j in n, for k in n →",
          options: ["O(n)", "O(n³)", "O(3n)"],
          answerIndex: 1,
          explanation: "Producto de tres factores n: n³."
        },
        {
          question: "¿2ⁿ + n¹⁰⁰ pertenece a O(2ⁿ)?",
          options: ["Sí", "No, es O(n¹⁰⁰)", "No, es O(1)"],
          answerIndex: 0,
          explanation: "Exponencial domina cualquier polinomio."
        },
        {
          question: "log₂(n) y log₁₀(n) en Big-O son...",
          options: ["O(log n) ambos", "O(log n) y O(1) respectivamente", "Incomparables"],
          answerIndex: 0,
          explanation: "Cambiar base del logaritmo solo multiplica por constante."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Regla 1: descartar coeficientes (4n² → O(n²))?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Regla 1: descartar coeficientes (4n² → O(n²))", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Regla 1: descartar coeficientes (4n² → O(n²)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²))?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²))", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Regla 3: suma de complejidades = máximo de los sumandos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Regla 3: suma de complejidades = máximo de los sumandos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Regla 3: suma de complejidades = máximo de los sumandos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Regla 4: producto de bucles anidados = producto de rangos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Regla 4: producto de bucles anidados = producto de rangos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Regla 4: producto de bucles anidados = producto de rangos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Regla 5: logaritmos de distinta base difieren solo por constante → O(log n)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Regla 5: logaritmos de distinta base difieren solo por constante → ...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Regla 5: logaritmos de distinta base difieren solo por constante → O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS",
      description: "Contar iteraciones: simples, anidados, dependientes y con saltos. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar ANÁLISIS DE BUCLES ITERATIVOS.",
      items: [
      "Bucle simple for i in range(n): → O(n).",
      "Bucles anidados independientes: O(n·k) o O(n²).",
      "Bucle dependiente: for i in range(n): for j in range(i): → O(n²).",
      "Bucle con división: while n > 1: n //= 2 → O(log n).",
      "Patrones híbridos: dos punteros, ventana deslizante O(n).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de ANÁLISIS DE BUCLES ITERATIVOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — ANÁLISIS DE BUCLES ITERATIVOS\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nContar iteraciones: simples, anidados, dependientes y con saltos. La mayoría del código imperativo se analiza contando cuántas veces se ejecuta el cuerpo del bucle. Un solo bucle sobre n elementos es O(n). Dos bucles anidados completos son O(n²). Pero cuidado: un bucle interno que corre i veces (triangular) suma 0+1+2+...+(n-1) = n(n-1)/2, que sigue siendo O(n²). Un while que divide n entre 2 en cada paso ejecuta O(log n) iteraciones. Dominar estos patrones permite auditar pull requests en segundos.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Bucle simple for i in range(n): → O(n).\n· Bucles anidados independientes: O(n·k) o O(n²).\n· Bucle dependiente: for i in range(n): for j in range(i): → O(n²).\n· Bucle con división: while n > 1: n //= 2 → O(log n).\n· Patrones híbridos: dos punteros, ventana deslizante O(n).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de ANÁLISIS DE BUCLES ITERATIVOS.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Bucle simple for i in range(n): → O(n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Bucle simple for i in range(n): → O(n).» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Bucle simple for i in range(n): → O(n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Bucles anidados independientes: O(n·k) o O(n²).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Bucles anidados independientes: O(n·k) o O(n²).» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Bucles anidados independientes: O(n·k) o O(n²).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Bucle dependiente: for i in range(n): for j in range(i): → O(n²).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Bucle dependiente: for i in range(n): for j in range(i): → O(n²).» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Bucle dependiente: for i in range(n): for j in range(i): → O(n²).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Bucle con división: while n > 1: n //= 2 → O(log n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Bucle con división: while n > 1: n //= 2 → O(log n).» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Bucle con división: while n > 1: n //= 2 → O(log n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Patrones híbridos: dos punteros, ventana deslizante O(n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Patrones híbridos: dos punteros, ventana deslizante O(n).» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Patrones híbridos: dos punteros, ventana deslizante O(n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de ANÁLISIS DE BUCLES ITERATIVOS.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de ANÁLISIS DE BUCLES ITERATIVOS.» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de ANÁLISIS DE BUCLES ITERATIVOS.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en ANÁLISIS DE BUCLES ITERATIVOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 2:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 3:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume ANÁLISIS DE BUCLES ITERATIVOS en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar ANÁLISIS DE BUCLES ITERATIVOS es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Triangular: O(n²)
def triangular(n):
    count = 0
    for i in range(n):
        for j in range(i):   # 0 + 1 + ... + (n-1)
            count += 1
    return count             # ≈ n²/2 → O(n²)

# Logarítmico: O(log n)
def potencia_dos(n):
    ops = 0
    while n > 1:
        n //= 2
        ops += 1
    return ops`,
      quiz: [
        {
          question: "for i in range(n): for j in range(n): →",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 1,
          explanation: "n × n iteraciones."
        },
        {
          question: "for i in range(n): for j in range(i): →",
          options: ["O(n)", "O(n²)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Suma triangular n(n-1)/2 ∈ O(n²)."
        },
        {
          question: "while n > 1: n = n // 2 →",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "n se reduce a la mitad cada iteración."
        },
        {
          question: "Dos bucles consecutivos, cada uno O(n), total...",
          options: ["O(n)", "O(n²)", "O(2n) simplificado a O(n)"],
          answerIndex: 2,
          explanation: "Secuencia: máximo O(n); 2n sigue siendo O(n)."
        },
        {
          question: "Técnica de dos punteros en arreglo ordenado típicamente es...",
          options: ["O(n²)", "O(n)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Cada puntero avanza como máximo n veces en total."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Bucle simple for i in range(n): → O(n)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Bucle simple for i in range(n): → O(n)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bucle simple for i in range(n): → O(n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Bucles anidados independientes: O(n·k) o O(n²)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Bucles anidados independientes: O(n·k) o O(n²)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bucles anidados independientes: O(n·k) o O(n²). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Bucle dependiente: for i in range(n): for j in range(i): → O(n²)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Bucle dependiente: for i in range(n): for j in range(i): → O(n²)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bucle dependiente: for i in range(n): for j in range(i): → O(n²). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Bucle con división: while n > 1: n //= 2 → O(log n)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Bucle con división: while n > 1: n //= 2 → O(log n)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bucle con división: while n > 1: n //= 2 → O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Patrones híbridos: dos punteros, ventana deslizante O(n)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Patrones híbridos: dos punteros, ventana deslizante O(n)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrones híbridos: dos punteros, ventana deslizante O(n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA",
      description: "Árboles de llamadas, profundidad de pila y el Teorema Maestro. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar RECURSIÓN Y ECUACIONES DE RECURRENCIA.",
      items: [
      "Cada llamada recursiva consume espacio de pila O(profundidad).",
      "Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).",
      "Divide y vencerás: T(n) = aT(n/b) + f(n).",
      "Teorema Maestro: casos según comparar f(n) con n^(log_b a).",
      "Recursión de cola vs recursión estándar y TCO.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de RECURSIÓN Y ECUACIONES DE RECURRENCIA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — RECURSIÓN Y ECUACIONES DE RECURRENCIA\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nÁrboles de llamadas, profundidad de pila y el Teorema Maestro. La recursión duplica el análisis: tiempo y espacio. Cada activación de función guarda frames en la pila; una recursión de profundidad n puede agotar el stack. Fibonacci recursivo sin memo repite trabajo exponencialmente. Merge Sort define T(n) = 2T(n/2) + O(n), resuelto por el Teorema Maestro como Θ(n log n). Entender recurrencias es puente hacia algoritmos avanzados y hacia el análisis de backtracking en IA (búsqueda en árboles de decisión).\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Cada llamada recursiva consume espacio de pila O(profundidad).\n· Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).\n· Divide y vencerás: T(n) = aT(n/b) + f(n).\n· Teorema Maestro: casos según comparar f(n) con n^(log_b a).\n· Recursión de cola vs recursión estándar y TCO.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de RECURSIÓN Y ECUACIONES DE RECURRENCIA.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Cada llamada recursiva consume espacio de pila O(profundidad).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Cada llamada recursiva consume espacio de pila O(profundidad).» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Cada llamada recursiva consume espacio de pila O(profundidad).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Divide y vencerás: T(n) = aT(n/b) + f(n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Divide y vencerás: T(n) = aT(n/b) + f(n).» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Divide y vencerás: T(n) = aT(n/b) + f(n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Teorema Maestro: casos según comparar f(n) con n^(log_b a).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Teorema Maestro: casos según comparar f(n) con n^(log_b a).» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Teorema Maestro: casos según comparar f(n) con n^(log_b a).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Recursión de cola vs recursión estándar y TCO.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Recursión de cola vs recursión estándar y TCO.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Recursión de cola vs recursión estándar y TCO.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de RECURSIÓN Y ECUACIONES DE RECURRENCIA.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de RECURSIÓN Y ECUACIONES DE RECURRENCIA.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de RECURSIÓN Y ECUACIONES DE RECURRENCIA.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en RECURSIÓN Y ECUACIONES DE RECURRENCIA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume RECURSIÓN Y ECUACIONES DE RECURRENCIA en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar RECURSIÓN Y ECUACIONES DE RECURRENCIA es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Fibonacci ingenuo: O(2ⁿ) tiempo, O(n) espacio de pila
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Merge Sort: T(n) = 2T(n/2) + O(n) → Θ(n log n)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    L = merge_sort(arr[:mid])
    R = merge_sort(arr[mid:])
    return merge(L, R)  # merge lineal O(n)`,
      quiz: [
        {
          question: "Fibonacci recursivo sin memoización tiene complejidad temporal...",
          options: ["O(n)", "O(2ⁿ)", "O(log n)"],
          answerIndex: 1,
          explanation: "El árbol de llamadas se ramifica exponencialmente."
        },
        {
          question: "Merge Sort satisface T(n) = 2T(n/2) + O(n). Por Teorema Maestro es...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 1,
          explanation: "Caso clásico del teorema: f(n)=n, log_b a = 1."
        },
        {
          question: "La profundidad de recursión de binary search en n elementos es...",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "Se divide el espacio a la mitad cada llamada."
        },
        {
          question: "¿Qué problema tiene fib(1000) recursivo ingenuo?",
          options: ["Usa poca memoria", "Stack overflow y tiempo prohibitivo", "Es O(1)"],
          answerIndex: 1,
          explanation: "Profundidad n y tiempo exponencial."
        },
        {
          question: "Memoización convierte fib de O(2ⁿ) a...",
          options: ["O(n) tiempo y O(n) espacio", "O(1)", "O(n²)"],
          answerIndex: 0,
          explanation: "Cada subproblema se calcula una sola vez."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Cada llamada recursiva consume espacio de pila O(profundidad)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Cada llamada recursiva consume espacio de pila O(profundidad)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cada llamada recursiva consume espacio de pila O(profundidad). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Divide y vencerás: T(n) = aT(n/b) + f(n)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Divide y vencerás: T(n) = aT(n/b) + f(n)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Divide y vencerás: T(n) = aT(n/b) + f(n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Teorema Maestro: casos según comparar f(n) con n^(log_b a)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Teorema Maestro: casos según comparar f(n) con n^(log_b a)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Teorema Maestro: casos según comparar f(n) con n^(log_b a). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Recursión de cola vs recursión estándar y TCO?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Recursión de cola vs recursión estándar y TCO", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recursión de cola vs recursión estándar y TCO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: O(1) — TIEMPO CONSTANTE",
      description: "La clase más deseada: operaciones instantáneas independientes de n. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(1) — TIEMPO CONSTANTE.",
      items: [
      "Acceso indexado a arreglos y strings en O(1).",
      "Operaciones aritméticas, comparaciones y asignaciones simples.",
      "Hash tables: inserción/búsqueda O(1) promedio.",
      "Operaciones en extremos de deque y push/pop de stack.",
      "Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(1) — TIEMPO CONSTANTE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(1) — TIEMPO CONSTANTE\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nLa clase más deseada: operaciones instantáneas independientes de n. O(1) es el santo grial de estructuras de datos: el costo no aumenta cuando crece la entrada. Acceder a arr[i] calcula dirección base + i × tamaño_elemento en una operación. Las tablas hash bien dimensionadas ofrecen O(1) promedio para get/set. En sistemas de alto rendimiento (cachés Redis, CDN edge lookups), diseñar para O(1) es prioritario. Ojo: O(1) con constante gigante (copiar 1 GB fijo) sigue siendo O(1) asintóticamente pero lento en práctica.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Acceso indexado a arreglos y strings en O(1).\n· Operaciones aritméticas, comparaciones y asignaciones simples.\n· Hash tables: inserción/búsqueda O(1) promedio.\n· Operaciones en extremos de deque y push/pop de stack.\n· Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(1) — TIEMPO CONSTANTE.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Acceso indexado a arreglos y strings en O(1).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Acceso indexado a arreglos y strings en O(1).» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Acceso indexado a arreglos y strings en O(1).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Operaciones aritméticas, comparaciones y asignaciones simples.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Operaciones aritméticas, comparaciones y asignaciones simples.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Operaciones aritméticas, comparaciones y asignaciones simples.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Hash tables: inserción/búsqueda O(1) promedio.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Hash tables: inserción/búsqueda O(1) promedio.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Hash tables: inserción/búsqueda O(1) promedio.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Operaciones en extremos de deque y push/pop de stack.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Operaciones en extremos de deque y push/pop de stack.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Operaciones en extremos de deque y push/pop de stack.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(1) — TIEMPO CONSTANTE.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(1) — TIEMPO CONSTANTE.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(1) — TIEMPO CONSTANTE.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(1) — TIEMPO CONSTANTE dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n· Confundir best case con peor caso al estimar rendimiento.\n· No vincular el tema con un proyecto real que el estudiante recuerde.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(1) — TIEMPO CONSTANTE en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(1) — TIEMPO CONSTANTE es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Operaciones O(1) clásicas
def acceso_directo(datos, indice):
    return datos[indice]       # O(1)

class Stack:
    def __init__(self):
        self.items = []
    def push(self, x):
        self.items.append(x)   # O(1) amortizado
    def pop(self):
        return self.items.pop()  # O(1)

# dict en Python: get/set promedio O(1)
cache = {"user:42": "QuimiSell"}
cache["user:42"]`,
      quiz: [
        {
          question: "Acceder a arr[k] en un arreglo de tamaño n es...",
          options: ["O(n)", "O(1)", "O(log n)"],
          answerIndex: 1,
          explanation: "Direccionamiento directo por índice."
        },
        {
          question: "push/pop en stack (lista Python) es...",
          options: ["O(n) siempre", "O(1) amortizado", "O(log n)"],
          answerIndex: 1,
          explanation: "append/pop al final son constantes amortizadas."
        },
        {
          question: "O(1) significa que el algoritmo...",
          options: ["No usa memoria", "Hace trabajo acotado independiente de n", "Siempre tarda nanosegundos"],
          answerIndex: 1,
          explanation: "Acotado, no necesariamente microscópico."
        },
        {
          question: "¿Cuál operación NO es O(1) en lista Python?",
          options: ["arr[0]", "arr.append(x)", "arr.insert(0, x)"],
          answerIndex: 2,
          explanation: "Insertar al inicio desplaza n elementos → O(n)."
        },
        {
          question: "Tabla hash con buena función y load factor bajo: búsqueda promedio...",
          options: ["O(1)", "O(n)", "O(log n)"],
          answerIndex: 0,
          explanation: "Dispersión uniforme minimiza colisiones."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Acceso indexado a arreglos y strings en O(1)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Acceso indexado a arreglos y strings en O(1)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Acceso indexado a arreglos y strings en O(1). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Operaciones aritméticas, comparaciones y asignaciones simples?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Operaciones aritméticas, comparaciones y asignaciones simples", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operaciones aritméticas, comparaciones y asignaciones simples. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Hash tables: inserción/búsqueda O(1) promedio?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Hash tables: inserción/búsqueda O(1) promedio", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Hash tables: inserción/búsqueda O(1) promedio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Operaciones en extremos de deque y push/pop de stack?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Operaciones en extremos de deque y push/pop de stack", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operaciones en extremos de deque y push/pop de stack. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: O(1) — TIEMPO CONSTANTE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: O(log n) — LOGARÍTMICA",
      description: "Divide y reduce: la magia de partir el problema a la mitad. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(log n) — LOGARÍTMICA.",
      items: [
      "Definición: duplicar n añade solo 1 paso extra.",
      "Búsqueda binaria en arreglo ordenado: Θ(log n).",
      "Árboles balanceados (AVL, Red-Black): altura O(log n).",
      "Exponentiación rápida: x^n en O(log n) multiplicaciones.",
      "Relación con log₂(n): ~20 pasos para n = 1,000,000.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(log n) — LOGARÍTMICA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(log n) — LOGARÍTMICA\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nDivide y reduce: la magia de partir el problema a la mitad. Los algoritmos O(log n) explotan la reducción exponencial del espacio de búsqueda. Búsqueda binaria descarta la mitad de elementos en cada comparación: para un millón de elementos, solo ~20 comparaciones. Los árboles auto-balanceados mantienen altura logarítmica garantizando operaciones eficientes. En bases de datos, los índices B+ Tree buscan claves en O(log n) accesos a disco. Esta clase separa sistemas que escalan de sistemas que colapsan.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Definición: duplicar n añade solo 1 paso extra.\n· Búsqueda binaria en arreglo ordenado: Θ(log n).\n· Árboles balanceados (AVL, Red-Black): altura O(log n).\n· Exponentiación rápida: x^n en O(log n) multiplicaciones.\n· Relación con log₂(n): ~20 pasos para n = 1,000,000.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(log n) — LOGARÍTMICA.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Definición: duplicar n añade solo 1 paso extra.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Definición: duplicar n añade solo 1 paso extra.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Definición: duplicar n añade solo 1 paso extra.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Búsqueda binaria en arreglo ordenado: Θ(log n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Búsqueda binaria en arreglo ordenado: Θ(log n).» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Búsqueda binaria en arreglo ordenado: Θ(log n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Árboles balanceados (AVL, Red-Black): altura O(log n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Árboles balanceados (AVL, Red-Black): altura O(log n).» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Árboles balanceados (AVL, Red-Black): altura O(log n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Exponentiación rápida: x^n en O(log n) multiplicaciones.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Exponentiación rápida: x^n en O(log n) multiplicaciones.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Exponentiación rápida: x^n en O(log n) multiplicaciones.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Relación con log₂(n): ~20 pasos para n = 1,000,000.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Relación con log₂(n): ~20 pasos para n = 1,000,000.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Relación con log₂(n): ~20 pasos para n = 1,000,000.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(log n) — LOGARÍTMICA.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(log n) — LOGARÍTMICA.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(log n) — LOGARÍTMICA.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(log n) — LOGARÍTMICA dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(log n) — LOGARÍTMICA en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(log n) — LOGARÍTMICA es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `def busqueda_binaria(arr, objetivo):
    izq, der = 0, len(arr) - 1
    pasos = 0
    while izq <= der:
        pasos += 1
        mid = (izq + der) // 2
        if arr[mid] == objetivo:
            return mid, pasos      # O(log n) comparaciones
        elif arr[mid] < objetivo:
            izq = mid + 1
        else:
            der = mid - 1
    return -1, pasos

# n=1_000_000 → pasos ≈ log2(1e6) ≈ 20`,
      quiz: [
        {
          question: "Búsqueda binaria requiere que el arreglo esté...",
          options: ["Ordenado", "Sin duplicados obligatoriamente", "En lista enlazada"],
          answerIndex: 0,
          explanation: "La monotonicidad permite descartar mitades."
        },
        {
          question: "Para n = 1,048,576 (2²⁰), búsqueda binaria hace como máximo ~...",
          options: ["20 comparaciones", "1 millón de comparaciones", "2 comparaciones"],
          answerIndex: 0,
          explanation: "log₂(2²⁰) = 20."
        },
        {
          question: "Inserción en AVL tree balanceado es...",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "Altura del árbol es O(log n)."
        },
        {
          question: "Duplicar n en algoritmo O(log n) agrega...",
          options: ["El doble de pasos", "Un paso constante extra", "n pasos extra"],
          answerIndex: 1,
          explanation: "log(2n) = log(n) + 1."
        },
        {
          question: "¿Cuál NO es típicamente O(log n)?",
          options: ["Búsqueda binaria", "Recorrido completo de arreglo", "Búsqueda en BST balanceado"],
          answerIndex: 1,
          explanation: "Recorrer todo el arreglo es O(n)."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Definición: duplicar n añade solo 1 paso extra?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición: duplicar n añade solo 1 paso extra", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición: duplicar n añade solo 1 paso extra. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Búsqueda binaria en arreglo ordenado: Θ(log n)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Búsqueda binaria en arreglo ordenado: Θ(log n)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda binaria en arreglo ordenado: Θ(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Árboles balanceados (AVL, Red-Black): altura O(log n)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Árboles balanceados (AVL, Red-Black): altura O(log n)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Árboles balanceados (AVL, Red-Black): altura O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Exponentiación rápida: x^n en O(log n) multiplicaciones?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Exponentiación rápida: x^n en O(log n) multiplicaciones", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Exponentiación rápida: x^n en O(log n) multiplicaciones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Relación con log₂(n): ~20 pasos para n = 1,000,000?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Relación con log₂(n): ~20 pasos para n = 1,000,000", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Relación con log₂(n): ~20 pasos para n = 1,000,000. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: O(log n) — LOGARÍTMICA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: O(n) — LINEAL",
      description: "Un paso por elemento: el baseline de la mayoría de procesamiento de datos. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(n) — LINEAL.",
      items: [
      "Recorridos: for x in arr, map/filter en una pasada.",
      "Búsqueda lineal en datos no ordenados: O(n) peor caso.",
      "Copiar arreglo completo: O(n) tiempo y espacio.",
      "Two-sum con hash: O(n) vs O(n²) con fuerza bruta.",
      "Streaming y procesamiento de logs en una pasada.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(n) — LINEAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(n) — LINEAL\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nUn paso por elemento: el baseline de la mayoría de procesamiento de datos. O(n) significa trabajo proporcional al tamaño de entrada: inevitable cuando debes examinar cada dato al menos una vez (encontrar máximo, calcular suma, validar formato). Muchos pipelines ETL, parsers y validadores son lineales por naturaleza. La optimización consiste en evitar pasadas redundantes: combinar dos bucles O(n) en uno solo sigue siendo O(n), no O(2n) en notación asintótica, pero reduce constantes reales importantes en producción.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Recorridos: for x in arr, map/filter en una pasada.\n· Búsqueda lineal en datos no ordenados: O(n) peor caso.\n· Copiar arreglo completo: O(n) tiempo y espacio.\n· Two-sum con hash: O(n) vs O(n²) con fuerza bruta.\n· Streaming y procesamiento de logs en una pasada.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(n) — LINEAL.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Recorridos: for x in arr, map/filter en una pasada.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Recorridos: for x in arr, map/filter en una pasada.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Recorridos: for x in arr, map/filter en una pasada.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Búsqueda lineal en datos no ordenados: O(n) peor caso.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Búsqueda lineal en datos no ordenados: O(n) peor caso.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Búsqueda lineal en datos no ordenados: O(n) peor caso.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Copiar arreglo completo: O(n) tiempo y espacio.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Copiar arreglo completo: O(n) tiempo y espacio.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Copiar arreglo completo: O(n) tiempo y espacio.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Two-sum con hash: O(n) vs O(n²) con fuerza bruta.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Two-sum con hash: O(n) vs O(n²) con fuerza bruta.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Two-sum con hash: O(n) vs O(n²) con fuerza bruta.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Streaming y procesamiento de logs en una pasada.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Streaming y procesamiento de logs en una pasada.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Streaming y procesamiento de logs en una pasada.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(n) — LINEAL.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(n) — LINEAL.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(n) — LINEAL.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(n) — LINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(n) — LINEAL en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(n) — LINEAL es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Two Sum O(n) con hash set
def two_sum(nums, target):
    vistos = {}
    for i, x in enumerate(nums):
        complemento = target - x
        if complemento in vistos:
            return vistos[complemento], i
        vistos[x] = i
    return None

# vs fuerza bruta O(n²):
# for i in range(n):
#     for j in range(i+1, n): ...`,
      quiz: [
        {
          question: "Encontrar el máximo de un arreglo desordenado es...",
          options: ["O(1)", "O(n)", "O(log n)"],
          answerIndex: 1,
          explanation: "Debes inspeccionar cada elemento al menos una vez (Ω(n))."
        },
        {
          question: "Copiar un arreglo de n elementos cuesta...",
          options: ["O(1)", "O(n)", "O(n²)"],
          answerIndex: 1,
          explanation: "n asignaciones individuales."
        },
        {
          question: "Two-sum con diccionario es O(n) porque...",
          options: ["Usa recursión", "Una pasada con lookup O(1) promedio", "Ordena primero"],
          answerIndex: 1,
          explanation: "Un bucle + hash evita el par anidado."
        },
        {
          question: "Tres bucles secuenciales O(n) cada uno = ...",
          options: ["O(n)", "O(n³)", "O(3n) = O(n)"],
          answerIndex: 0,
          explanation: "Secuencia: sigue siendo O(n)."
        },
        {
          question: "Procesar un archivo de n líneas línea a línea es...",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 0,
          explanation: "Una operación por línea."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Recorridos: for x in arr, map/filter en una pasada?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Recorridos: for x in arr, map/filter en una pasada", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recorridos: for x in arr, map/filter en una pasada. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Búsqueda lineal en datos no ordenados: O(n) peor caso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Búsqueda lineal en datos no ordenados: O(n) peor caso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda lineal en datos no ordenados: O(n) peor caso. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Copiar arreglo completo: O(n) tiempo y espacio?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Copiar arreglo completo: O(n) tiempo y espacio", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Copiar arreglo completo: O(n) tiempo y espacio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Two-sum con hash: O(n) vs O(n²) con fuerza bruta?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Two-sum con hash: O(n) vs O(n²) con fuerza bruta", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Two-sum con hash: O(n) vs O(n²) con fuerza bruta. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Streaming y procesamiento de logs en una pasada?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Streaming y procesamiento de logs en una pasada", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Streaming y procesamiento de logs en una pasada. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: O(n) — LINEAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 11,
      title: "MÓDULO 11: O(n log n) — CUASILINEAL",
      description: "El techo eficiente del ordenamiento por comparación y muchos algoritmos óptimos. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(n log n) — CUASILINEAL.",
      items: [
      "Merge Sort, Heap Sort: Θ(n log n) garantizado.",
      "Quick Sort promedio O(n log n), peor O(n²).",
      "Introsort en C++ std::sort: híbrido optimizado.",
      "Construcción de heap: O(n) pero heapify por elemento O(log n).",
      "Aparece en: ordenamiento, closest pair, algunos divide-and-conquer.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(n log n) — CUASILINEAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(n log n) — CUASILINEAL\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nEl techo eficiente del ordenamiento por comparación y muchos algoritmos óptimos. O(n log n) es el punto dulce entre eficiencia y generalidad. Ningún algoritmo de ordenamiento basado en comparaciones puede hacer mejor que Ω(n log n), y Merge Sort lo alcanza. Aparece cuando divides en log n niveles y haces O(n) trabajo por nivel. En la práctica, Quick Sort con pivote aleatorio y Introsort son los workhorses de lenguajes de producción. Reconocer O(n log n) en un diseño te dice: 'este es probablemente óptimo para comparaciones'.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Merge Sort, Heap Sort: Θ(n log n) garantizado.\n· Quick Sort promedio O(n log n), peor O(n²).\n· Introsort en C++ std::sort: híbrido optimizado.\n· Construcción de heap: O(n) pero heapify por elemento O(log n).\n· Aparece en: ordenamiento, closest pair, algunos divide-and-conquer.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(n log n) — CUASILINEAL.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Merge Sort, Heap Sort: Θ(n log n) garantizado.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Merge Sort, Heap Sort: Θ(n log n) garantizado.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Merge Sort, Heap Sort: Θ(n log n) garantizado.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Quick Sort promedio O(n log n), peor O(n²).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Quick Sort promedio O(n log n), peor O(n²).» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Quick Sort promedio O(n log n), peor O(n²).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Introsort en C++ std::sort: híbrido optimizado.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Introsort en C++ std::sort: híbrido optimizado.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Introsort en C++ std::sort: híbrido optimizado.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Construcción de heap: O(n) pero heapify por elemento O(log n).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Construcción de heap: O(n) pero heapify por elemento O(log n).» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Construcción de heap: O(n) pero heapify por elemento O(log n).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Aparece en: ordenamiento, closest pair, algunos divide-and-conquer.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aparece en: ordenamiento, closest pair, algunos divide-and-conquer.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aparece en: ordenamiento, closest pair, algunos divide-and-conquer.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(n log n) — CUASILINEAL.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(n log n) — CUASILINEAL.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(n log n) — CUASILINEAL.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(n log n) — CUASILINEAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(n log n) — CUASILINEAL en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(n log n) — CUASILINEAL es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `def merge(L, R):
    resultado, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            resultado.append(L[i]); i += 1
        else:
            resultado.append(R[j]); j += 1
    return resultado + L[i:] + R[j:]  # O(len(L)+len(R))

# Merge Sort total: O(n log n)
# log n niveles × O(n) merge por nivel`,
      quiz: [
        {
          question: "¿Cuál ordenamiento garantiza O(n log n) en peor caso?",
          options: ["Quick Sort básico", "Merge Sort", "Bubble Sort"],
          answerIndex: 1,
          explanation: "Merge Sort no depende del orden de entrada."
        },
        {
          question: "¿Por qué Merge Sort es O(n log n)?",
          options: ["Un solo bucle n", "log n niveles de división × O(n) merge", "n bucles anidados"],
          answerIndex: 1,
          explanation: "Estructura clásica divide y vencerás."
        },
        {
          question: "El límite Ω(n log n) para sorting por comparación implica...",
          options: ["Merge Sort es óptimo en ese modelo", "O(n) sorting es posible siempre", "Solo aplica a enteros"],
          answerIndex: 0,
          explanation: "No se puede comparar menos en el peor caso."
        },
        {
          question: "Quick Sort en producción suele ser O(n log n) promedio porque...",
          options: ["Siempre elige pivote mediano exacto", "Pivote aleatorio evita entradas adversas típicas", "No usa recursión"],
          answerIndex: 1,
          explanation: "Randomización reduce probabilidad de peor caso."
        },
        {
          question: "Heap Sort tiene complejidad...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 1,
          explanation: "n extracciones × O(log n) cada una."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Merge Sort, Heap Sort: Θ(n log n) garantizado?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Merge Sort, Heap Sort: Θ(n log n) garantizado", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Merge Sort, Heap Sort: Θ(n log n) garantizado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Quick Sort promedio O(n log n), peor O(n²)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Quick Sort promedio O(n log n), peor O(n²)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Quick Sort promedio O(n log n), peor O(n²). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Introsort en C++ std::sort: híbrido optimizado?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Introsort en C++ std::sort: híbrido optimizado", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Introsort en C++ std::sort: híbrido optimizado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Construcción de heap: O(n) pero heapify por elemento O(log n)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Construcción de heap: O(n) pero heapify por elemento O(log n)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Construcción de heap: O(n) pero heapify por elemento O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Aparece en: ordenamiento, closest pair, algunos divide-and-conquer?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aparece en: ordenamiento, closest pair, algunos divide-and-conquer", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aparece en: ordenamiento, closest pair, algunos divide-and-conquer. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: O(n log n) — CUASILINEAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 12,
      title: "MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL",
      description: "Bucles anidados: cuando el crecimiento se vuelve peligroso rápidamente. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(n²) Y O(n³) — POLINOMIAL.",
      items: [
      "Bubble, Selection, Insertion Sort peor caso: O(n²).",
      "Matrices densas n×n: multiplicación ingenua O(n³).",
      "Grafos: Floyd-Warshall O(V³).",
      "n=10,000 → n²=100 millones operaciones (límite práctico).",
      "Cuándo aceptar O(n²): n pequeño y constante (< 500).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(n²) Y O(n³) — POLINOMIAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(n²) Y O(n³) — POLINOMIAL\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nBucles anidados: cuando el crecimiento se vuelve peligroso rápidamente. Las complejidades polinómicas son manejables para n pequeño pero explotan en producción. O(n²) con n=100,000 son 10 mil millones de operaciones — segundos o minutos. Muchos algoritmos ingenuos de grafos y DP sin optimizar caen aquí. La ingeniería consiste en reconocer el patrón de bucles anidados y refactorizar hacia O(n log n) o O(n) con estructuras auxiliares (hash, árboles, ordenamiento previo).\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Bubble, Selection, Insertion Sort peor caso: O(n²).\n· Matrices densas n×n: multiplicación ingenua O(n³).\n· Grafos: Floyd-Warshall O(V³).\n· n=10,000 → n²=100 millones operaciones (límite práctico).\n· Cuándo aceptar O(n²): n pequeño y constante (< 500).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(n²) Y O(n³) — POLINOMIAL.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Bubble, Selection, Insertion Sort peor caso: O(n²).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Bubble, Selection, Insertion Sort peor caso: O(n²).» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Bubble, Selection, Insertion Sort peor caso: O(n²).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Matrices densas n×n: multiplicación ingenua O(n³).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Matrices densas n×n: multiplicación ingenua O(n³).» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Matrices densas n×n: multiplicación ingenua O(n³).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Grafos: Floyd-Warshall O(V³).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Grafos: Floyd-Warshall O(V³).» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Grafos: Floyd-Warshall O(V³).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — n=10,000 → n²=100 millones operaciones (límite práctico).\n\nTiempo sugerido al grabar: **7–9 minutos**. «n=10,000 → n²=100 millones operaciones (límite práctico).» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «n=10,000 → n²=100 millones operaciones (límite práctico).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Cuándo aceptar O(n²): n pequeño y constante (< 500).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Cuándo aceptar O(n²): n pequeño y constante (< 500).» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Cuándo aceptar O(n²): n pequeño y constante (< 500).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(n²) Y O(n³) — POLINOMIAL.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(n²) Y O(n³) — POLINOMIAL.» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(n²) Y O(n³) — POLINOMIAL.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(n²) Y O(n³) — POLINOMIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 2:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 3:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(n²) Y O(n³) — POLINOMIAL en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(n²) Y O(n³) — POLINOMIAL es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Bubble Sort: O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Matriz n×n multiplicación ingenua: O(n³)
def matmul(A, B):
    n = len(A)
    C = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]`,
      quiz: [
        {
          question: "Bubble Sort peor caso es...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 2,
          explanation: "Dos bucles anidados sobre n."
        },
        {
          question: "Multiplicación matricial n×n ingenua es...",
          options: ["O(n²)", "O(n³)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Tres bucles i, j, k."
        },
        {
          question: "Con n=20,000, O(n²) implica del orden de...",
          options: ["400 millones de operaciones", "20,000 operaciones", "20 operaciones"],
          answerIndex: 0,
          explanation: "(2×10⁴)² = 4×10⁸."
        },
        {
          question: "¿Cuándo O(n²) puede ser aceptable?",
          options: ["n siempre > 1 millón", "n acotado pequeño (ej. ≤ 500)", "Nunca"],
          answerIndex: 1,
          explanation: "Constantes pequeñas y n limitado."
        },
        {
          question: "Floyd-Warshall para caminos mínimos en grafo denso es...",
          options: ["O(V²)", "O(V³)", "O(V log V)"],
          answerIndex: 1,
          explanation: "Triple bucle sobre vértices."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Bubble, Selection, Insertion Sort peor caso: O(n²)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Bubble, Selection, Insertion Sort peor caso: O(n²)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bubble, Selection, Insertion Sort peor caso: O(n²). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Matrices densas n×n: multiplicación ingenua O(n³)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Matrices densas n×n: multiplicación ingenua O(n³)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Matrices densas n×n: multiplicación ingenua O(n³). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Grafos: Floyd-Warshall O(V³)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Grafos: Floyd-Warshall O(V³)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Grafos: Floyd-Warshall O(V³). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: n=10,000 → n²=100 millones operaciones (límite práctico)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: n=10,000 → n²=100 millones operaciones (límite práctico)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que n=10,000 → n²=100 millones operaciones (límite práctico). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Cuándo aceptar O(n²): n pequeño y constante (< 500)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Cuándo aceptar O(n²): n pequeño y constante (< 500)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cuándo aceptar O(n²): n pequeño y constante (< 500). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 13,
      title: "MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL",
      description: "Explosión combinatoria: problemas NP-hard y backtracking ingenuo. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.",
      items: [
      "Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.",
      "Fibonacci recursivo sin memo: O(2ⁿ).",
      "Traveling Salesman fuerza bruta: O(n!).",
      "n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).",
      "Técnicas de escape: DP, poda, heurísticas, aproximación.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nExplosión combinatoria: problemas NP-hard y backtracking ingenuo. Exponencial y factorial marcan la frontera de lo tratable exactamente. Generar todos los subconjuntos de n elementos son 2ⁿ; todas las permutaciones son n!. El problema del viajante (TSP) con fuerza bruta es O(n!). Estos algoritmos sirven para n muy pequeño (≤ 20) o como baseline teórico. En IA, búsqueda en espacio de configuraciones sin poda cae aquí. La solución profesional es reformular: programación dinámica, branch & bound, simulated annealing o algoritmos de aproximación.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.\n· Fibonacci recursivo sin memo: O(2ⁿ).\n· Traveling Salesman fuerza bruta: O(n!).\n· n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).\n· Técnicas de escape: DP, poda, heurísticas, aproximación.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Fibonacci recursivo sin memo: O(2ⁿ).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Fibonacci recursivo sin memo: O(2ⁿ).» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Fibonacci recursivo sin memo: O(2ⁿ).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Traveling Salesman fuerza bruta: O(n!).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Traveling Salesman fuerza bruta: O(n!).» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Traveling Salesman fuerza bruta: O(n!).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).\n\nTiempo sugerido al grabar: **7–9 minutos**. «n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Técnicas de escape: DP, poda, heurísticas, aproximación.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Técnicas de escape: DP, poda, heurísticas, aproximación.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Técnicas de escape: DP, poda, heurísticas, aproximación.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Generar todos los subconjuntos: O(2ⁿ)
def subconjuntos(arr):
    n = len(arr)
    resultados = []
    for mascara in range(1 << n):   # 2^n máscaras
        subset = [arr[i] for i in range(n) if mascara & (1 << i)]
        resultados.append(subset)
    return resultados

# n=25 → 2^25 ≈ 33 millones (límite)
# n=40 → 2^40 ≈ 1 billón (imposible)`,
      quiz: [
        {
          question: "Generar todos los subconjuntos de n elementos es...",
          options: ["O(n)", "O(2ⁿ)", "O(n²)"],
          answerIndex: 1,
          explanation: "2ⁿ combinaciones posibles."
        },
        {
          question: "Permutaciones de n elementos son...",
          options: ["O(n!)", "O(2ⁿ)", "O(n log n)"],
          answerIndex: 0,
          explanation: "n! ordenamientos distintos."
        },
        {
          question: "Fibonacci recursivo sin memo es O(2ⁿ) porque...",
          options: ["Cada llamada hace dos subllamadas", "Usa un bucle", "Es divide and conquer log"],
          answerIndex: 0,
          explanation: "Árbol binario de llamadas."
        },
        {
          question: "TSP fuerza bruta con n ciudades es...",
          options: ["O(n²)", "O(n!)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Debe evaluar permutaciones de rutas."
        },
        {
          question: "Para n=35, 2ⁿ es aproximadamente...",
          options: ["35 operaciones", "34 mil millones", "Imposible de calcular en tiempo humano razonable"],
          answerIndex: 1,
          explanation: "2³⁵ ≈ 34×10⁹."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Subconjuntos: 2ⁿ combinaciones; permutaciones: n!?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Subconjuntos: 2ⁿ combinaciones; permutaciones: n!", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Subconjuntos: 2ⁿ combinaciones; permutaciones: n!. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Fibonacci recursivo sin memo: O(2ⁿ)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Fibonacci recursivo sin memo: O(2ⁿ)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fibonacci recursivo sin memo: O(2ⁿ). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Traveling Salesman fuerza bruta: O(n!)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Traveling Salesman fuerza bruta: O(n!)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Traveling Salesman fuerza bruta: O(n!). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Técnicas de escape: DP, poda, heurísticas, aproximación?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Técnicas de escape: DP, poda, heurísticas, aproximación", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Técnicas de escape: DP, poda, heurísticas, aproximación. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 14,
      title: "MÓDULO 14: ANÁLISIS AMORTIZADO",
      description: "Costo promedio por operación en secuencias largas: dynamic arrays y Union-Find. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar ANÁLISIS AMORTIZADO.",
      items: [
      "Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.",
      "Dynamic array append: O(1) amortizado (doblar capacidad).",
      "Aggregate method: n inserciones O(n) total → O(1) cada una.",
      "Accounting method y potential method (introducción).",
      "Union-Find con compresión de caminos: casi O(1) amortizado.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de ANÁLISIS AMORTIZADO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — ANÁLISIS AMORTIZADO\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nCosto promedio por operación en secuencias largas: dynamic arrays y Union-Find. El análisis amortizado responde: 'si hago n operaciones seguidas, ¿cuánto cuesta cada una en promedio?' Un arreglo dinámico ocasionalmente copia todos los elementos al redimensionar (O(n) esa vez), pero si duplica capacidad, las copias son raras y el costo promedio por append es O(1). Union-Find con path compression y rank tiene operaciones casi constantes amortizadas. Este análisis es esencial para estructuras en stdlib de C++, Java y Python.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.\n· Dynamic array append: O(1) amortizado (doblar capacidad).\n· Aggregate method: n inserciones O(n) total → O(1) cada una.\n· Accounting method y potential method (introducción).\n· Union-Find con compresión de caminos: casi O(1) amortizado.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de ANÁLISIS AMORTIZADO.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Dynamic array append: O(1) amortizado (doblar capacidad).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Dynamic array append: O(1) amortizado (doblar capacidad).» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Dynamic array append: O(1) amortizado (doblar capacidad).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Aggregate method: n inserciones O(n) total → O(1) cada una.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aggregate method: n inserciones O(n) total → O(1) cada una.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aggregate method: n inserciones O(n) total → O(1) cada una.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Accounting method y potential method (introducción).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Accounting method y potential method (introducción).» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Accounting method y potential method (introducción).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Union-Find con compresión de caminos: casi O(1) amortizado.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Union-Find con compresión de caminos: casi O(1) amortizado.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Union-Find con compresión de caminos: casi O(1) amortizado.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de ANÁLISIS AMORTIZADO.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de ANÁLISIS AMORTIZADO.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de ANÁLISIS AMORTIZADO.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en ANÁLISIS AMORTIZADO dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume ANÁLISIS AMORTIZADO en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar ANÁLISIS AMORTIZADO es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `class DynamicArray:
    def __init__(self):
        self.data = [None] * 1
        self.size = 0
        self.capacity = 1

    def append(self, val):          # O(1) amortizado
        if self.size == self.capacity:
            self._resize(self.capacity * 2)  # O(n) ocasional
        self.data[self.size] = val
        self.size += 1

    def _resize(self, new_cap):
        nuevo = [None] * new_cap
        for i in range(self.size):
            nuevo[i] = self.data[i]
        self.data = nuevo
        self.capacity = new_cap`,
      quiz: [
        {
          question: "Append en dynamic array con duplicación es...",
          options: ["O(n) siempre", "O(1) amortizado", "O(log n)"],
          answerIndex: 1,
          explanation: "Copias raras; n appends cuestan O(n) total."
        },
        {
          question: "Análisis amortizado estudia...",
          options: ["Solo una operación aislada", "Costo promedio por operación en secuencia larga", "Solo best case"],
          answerIndex: 1,
          explanation: "Promedio sobre secuencia, no expectativa aleatoria."
        },
        {
          question: "¿Una operación amortizada O(1) puede costar O(n) una vez?",
          options: ["Sí, ocasionalmente", "No, nunca", "Solo en best case"],
          answerIndex: 0,
          explanation: "El peor caso puntual puede ser alto; el promedio bajo."
        },
        {
          question: "Union-Find con path compression tiene find casi...",
          options: ["O(1) amortizado", "O(n!) siempre", "O(n²)"],
          answerIndex: 0,
          explanation: "Estructura clásica de amortización."
        },
        {
          question: "Si n appends cuestan O(n) total, cada append es...",
          options: ["O(1) amortizado", "O(n) amortizado", "O(n²)"],
          answerIndex: 0,
          explanation: "O(n)/n = O(1) por operación."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Amortizado ≠ promedio probabilístico: peor caso por operación puede...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Dynamic array append: O(1) amortizado (doblar capacidad)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Dynamic array append: O(1) amortizado (doblar capacidad)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dynamic array append: O(1) amortizado (doblar capacidad). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Aggregate method: n inserciones O(n) total → O(1) cada una?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Aggregate method: n inserciones O(n) total → O(1) cada una", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aggregate method: n inserciones O(n) total → O(1) cada una. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Accounting method y potential method (introducción)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Accounting method y potential method (introducción)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Accounting method y potential method (introducción). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Union-Find con compresión de caminos: casi O(1) amortizado?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Union-Find con compresión de caminos: casi O(1) amortizado", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Union-Find con compresión de caminos: casi O(1) amortizado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: ANÁLISIS AMORTIZADO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 15,
      title: "MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS",
      description: "Trade-offs, límites de memoria y criterios de decisión en ingeniería real. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.",
      items: [
      "Complejidad espacial: auxiliar vs total (in-place vs extra array).",
      "Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.",
      "Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.",
      "Tabla de decisión: restricciones n, memoria, latencia, paralelismo.",
      "Benchmarking complementa pero no reemplaza Big-O.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nTrade-offs, límites de memoria y criterios de decisión en ingeniería real. Todo algoritmo negocia tiempo por espacio. Merge Sort usa O(n) memoria extra para lograr O(n log n) estable. Quick Sort es in-place pero peor caso O(n²). Memoización en DP almacena subproblemas: más RAM, menos CPU. En dispositivos móviles o embedded, O(n) espacio puede ser inaceptable. En servidores con 512 GB RAM, prefetch y caché importan más que Big-O en papel. El ingeniero combina análisis asintótico, perfilado real y restricciones del dominio.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Complejidad espacial: auxiliar vs total (in-place vs extra array).\n· Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.\n· Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.\n· Tabla de decisión: restricciones n, memoria, latencia, paralelismo.\n· Benchmarking complementa pero no reemplaza Big-O.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Complejidad espacial: auxiliar vs total (in-place vs extra array).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Complejidad espacial: auxiliar vs total (in-place vs extra array).» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Complejidad espacial: auxiliar vs total (in-place vs extra array).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Tabla de decisión: restricciones n, memoria, latencia, paralelismo.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Tabla de decisión: restricciones n, memoria, latencia, paralelismo.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Tabla de decisión: restricciones n, memoria, latencia, paralelismo.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Benchmarking complementa pero no reemplaza Big-O.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Benchmarking complementa pero no reemplaza Big-O.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Benchmarking complementa pero no reemplaza Big-O.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Fibonacci: trade-off tiempo vs espacio
def fib_memo(n, cache={}):
    if n in cache:
        return cache[n]       # O(1) lookup, ahorra recomputación
    if n <= 1:
        return n
    cache[n] = fib_memo(n-1) + fib_memo(n-2)
    return cache[n]           # O(n) tiempo, O(n) espacio

# vs iterativo O(n) tiempo, O(1) espacio:
def fib_iter(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      quiz: [
        {
          question: "Merge Sort usa espacio auxiliar...",
          options: ["O(1)", "O(n)", "O(n²)"],
          answerIndex: 1,
          explanation: "Array temporal para merge."
        },
        {
          question: "Memoización típicamente intercambia...",
          options: ["Tiempo por más espacio", "Espacio por más tiempo", "Nada"],
          answerIndex: 0,
          explanation: "Guarda resultados para evitar recomputar."
        },
        {
          question: "fib iterativo vs memo: el iterativo usa espacio...",
          options: ["O(1)", "O(2ⁿ)", "O(n log n)"],
          answerIndex: 0,
          explanation: "Solo dos variables."
        },
        {
          question: "¿Big-O reemplaza profiling en producción?",
          options: ["Sí, siempre", "No, se complementan", "Solo para Python"],
          answerIndex: 1,
          explanation: "Constantes y caché importan en hardware real."
        },
        {
          question: "Quick Sort in-place tiene stack recursivo...",
          options: ["O(n) peor caso", "O(1) siempre", "O(n²) espacio"],
          answerIndex: 0,
          explanation: "Recursión profunda en peor caso."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Complejidad espacial: auxiliar vs total (in-place vs extra array)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Complejidad espacial: auxiliar vs total (in-place vs extra array)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Complejidad espacial: auxiliar vs total (in-place vs extra array). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Tabla de decisión: restricciones n, memoria, latencia, paralelismo?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Tabla de decisión: restricciones n, memoria, latencia, paralelismo", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tabla de decisión: restricciones n, memoria, latencia, paralelismo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Benchmarking complementa pero no reemplaza Big-O?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Benchmarking complementa pero no reemplaza Big-O", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Benchmarking complementa pero no reemplaza Big-O. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 16,
      title: "MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS",
      description: "Contando operaciones en capas densas, convoluciones y activaciones. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar BIG-O EN REDES NEURONALES — FORWARD PASS.",
      items: [
      "Capa densa: O(batch · in · out) multiplicaciones.",
      "Convolución: O(batch · H · W · C_in · C_out · k²).",
      "Activaciones (ReLU, GELU): O(n) elemento a elemento.",
      "Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.",
      "Batch size multiplica costo linealmente.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de BIG-O EN REDES NEURONALES — FORWARD PASS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — BIG-O EN REDES NEURONALES — FORWARD PASS\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nContando operaciones en capas densas, convoluciones y activaciones. En deep learning, Big-O se traduce a FLOPs (floating point operations). Una capa fully-connected con entrada d_in y salida d_out realiza O(d_in · d_out) multiplicaciones por muestra. Una convolución 2D agrega dimensiones espaciales y del kernel. El forward pass de un LLM con L capas, dimensión d y secuencia n escala aproximadamente O(L · n · d²) en atención clásica. Entender esto permite estimar latencia de inferencia antes de desplegar en producción.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Capa densa: O(batch · in · out) multiplicaciones.\n· Convolución: O(batch · H · W · C_in · C_out · k²).\n· Activaciones (ReLU, GELU): O(n) elemento a elemento.\n· Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.\n· Batch size multiplica costo linealmente.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de BIG-O EN REDES NEURONALES — FORWARD PASS.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Capa densa: O(batch · in · out) multiplicaciones.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Capa densa: O(batch · in · out) multiplicaciones.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Capa densa: O(batch · in · out) multiplicaciones.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Convolución: O(batch · H · W · C_in · C_out · k²).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Convolución: O(batch · H · W · C_in · C_out · k²).» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Convolución: O(batch · H · W · C_in · C_out · k²).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Activaciones (ReLU, GELU): O(n) elemento a elemento.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Activaciones (ReLU, GELU): O(n) elemento a elemento.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Activaciones (ReLU, GELU): O(n) elemento a elemento.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Batch size multiplica costo linealmente.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Batch size multiplica costo linealmente.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Batch size multiplica costo linealmente.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de BIG-O EN REDES NEURONALES — FORWARD PASS.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de BIG-O EN REDES NEURONALES — FORWARD PASS.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de BIG-O EN REDES NEURONALES — FORWARD PASS.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en BIG-O EN REDES NEURONALES — FORWARD PASS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume BIG-O EN REDES NEURONALES — FORWARD PASS en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar BIG-O EN REDES NEURONALES — FORWARD PASS es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Capa densa: y = x @ W + b
# x: (batch, in_features), W: (in, out)
# FLOPs ≈ batch * in * out * 2 (mul + add)

def capa_densa_flops(batch, in_f, out_f):
    return batch * in_f * out_f * 2

# Ejemplo: batch=32, in=768, out=3072 (FFN típico)
print(capa_densa_flops(32, 768, 3072))  # ~151 millones FLOPs`,
      quiz: [
        {
          question: "Capa densa batch×in×out tiene complejidad de multiplicaciones...",
          options: ["O(batch · in · out)", "O(in + out)", "O(1)"],
          answerIndex: 0,
          explanation: "Producto de dimensiones de la matriz."
        },
        {
          question: "Duplicar batch size en inferencia duplica...",
          options: ["Solo memoria, no FLOPs", "FLOPs linealmente", "FLOPs cuadráticamente"],
          answerIndex: 1,
          explanation: "Costo proporcional al batch."
        },
        {
          question: "ReLU sobre tensor de n elementos es...",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 0,
          explanation: "Una operación por elemento."
        },
        {
          question: "¿Más parámetros siempre implica más FLOPs por token?",
          options: ["Sí siempre", "Depende de arquitectura y capas activas", "No, nunca"],
          answerIndex: 1,
          explanation: "MoE activa subconjuntos; depth vs width importa."
        },
        {
          question: "FLOPs miden...",
          options: ["Operaciones de punto flotante", "Bytes transferidos", "Solo memoria GPU"],
          answerIndex: 0,
          explanation: "Métrica estándar de costo computacional en IA."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Capa densa: O(batch · in · out) multiplicaciones?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Capa densa: O(batch · in · out) multiplicaciones", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Capa densa: O(batch · in · out) multiplicaciones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Convolución: O(batch · H · W · C_in · C_out · k²)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Convolución: O(batch · H · W · C_in · C_out · k²)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Convolución: O(batch · H · W · C_in · C_out · k²). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Activaciones (ReLU, GELU): O(n) elemento a elemento?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Activaciones (ReLU, GELU): O(n) elemento a elemento", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Activaciones (ReLU, GELU): O(n) elemento a elemento. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Batch size multiplica costo linealmente?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Batch size multiplica costo linealmente", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Batch size multiplica costo linealmente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 17,
      title: "MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs",
      description: "Por qué eliminación gaussiana no alimenta el entrenamiento de redes en GPU. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.",
      items: [
      "Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.",
      "Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.",
      "GPUs optimizadas para throughput masivo de ops independientes.",
      "Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.",
      "cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nPor qué eliminación gaussiana no alimenta el entrenamiento de redes en GPU. ¿Por qué no usamos Gauss-Jordan para entrenar redes en GPU? Porque las GPUs (CUDA) están diseñadas para miles de hilos ejecutando la MISMA operación sobre datos independientes (SIMT). La eliminación gaussiana tiene dependencias secuenciales en filas: el pivote de la fila k afecta todas las filas k+1 antes de continuar. Aunque ambos son O(n³), GEMM (General Matrix Multiply) reorganiza el trabajo en bloques independientes explotando cache L1/shared memory y Tensor Cores. PyTorch y TensorFlow nunca invierten matrices con Gauss-Jordan en el hot path del entrenamiento; usan multiplicación masiva y autodiff.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.\n· Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.\n· GPUs optimizadas para throughput masivo de ops independientes.\n· Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.\n· cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — GPUs optimizadas para throughput masivo de ops independientes.\n\nTiempo sugerido al grabar: **7–9 minutos**. «GPUs optimizadas para throughput masivo de ops independientes.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «GPUs optimizadas para throughput masivo de ops independientes.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores.\n\nTiempo sugerido al grabar: **7–9 minutos**. «cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# ❌ Gauss-Jordan: difícil de paralelizar (dependencias fila a fila)
# O(n³) secuencial en peor caso de paralelismo

# ✅ Entrenamiento NN: y = X @ W  (GEMM)
# GPUs ejecutan millones de MACs en paralelo
# PyTorch: torch.matmul(X, W) → cuBLAS

import torch
X = torch.randn(1024, 768, device='cuda')
W = torch.randn(768, 768, device='cuda')
Y = X @ W   # O(batch·in·out) pero paralelismo masivo`,
      quiz: [
        {
          question: "¿Por qué Gauss-Jordan es malo en GPUs para entrenamiento?",
          options: ["Es O(n²)", "Tiene dependencias secuenciales entre filas difíciles de paralelizar", "No existe en matemáticas"],
          answerIndex: 1,
          explanation: "SIMT requiere operaciones independientes masivas."
        },
        {
          question: "El hot path del entrenamiento de redes usa principalmente...",
          options: ["Multiplicación matricial GEMM", "Eliminación gaussiana", "Ordenamiento burbuja"],
          answerIndex: 0,
          explanation: "Forward/backward son cadenas de matmul."
        },
        {
          question: "GEMM y Gauss-Jordan para n×n son ambos O(n³), pero GEMM gana porque...",
          options: ["Tiene mejor paralelismo y kernels optimizados", "Usa menos memoria siempre", "Es O(n²)"],
          answerIndex: 0,
          explanation: "Constantes y paralelismo, no solo exponente."
        },
        {
          question: "Tensor Cores en NVIDIA aceleran especialmente...",
          options: ["Operaciones matriciales mix-precision", "Parsing JSON", "I/O de disco"],
          answerIndex: 0,
          explanation: "Diseñados para GEMM en FP16/BF16."
        },
        {
          question: "PyTorch invierte matrices ocasionalmente con métodos numéricos estables, pero el entrenamiento masivo usa...",
          options: ["CuBLAS GEMM", "Gauss-Jordan manual en Python puro", "Búsqueda lineal"],
          answerIndex: 0,
          explanation: "Librerías BLAS/CUDA optimizadas."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero ...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: GPUs optimizadas para throughput masivo de ops independientes?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: GPUs optimizadas para throughput masivo de ops independientes", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que GPUs optimizadas para throughput masivo de ops independientes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Backprop = cadena de multiplicaciones matriciales, no resolver sist...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 18,
      title: "MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP",
      description: "Por qué entrenar cuesta ~3× inferencia y cómo escala el backward pass. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar ENTRENAMIENTO VS INFERENCIA — BACKPROP.",
      items: [
      "Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).",
      "Entrenamiento total ≈ 3× FLOPs de inferencia por step.",
      "Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).",
      "Optimizador (Adam): O(parámetros) extra por step.",
      "Inferencia solo forward: despliegue en edge y batch=1.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de ENTRENAMIENTO VS INFERENCIA — BACKPROP.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — ENTRENAMIENTO VS INFERENCIA — BACKPROP\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nPor qué entrenar cuesta ~3× inferencia y cómo escala el backward pass. Entrenar una red es más caro que usarla. En backpropagation, cada operación del forward debe derivarse en reverse mode autodiff: típicamente ~2× FLOPs extra. Además hay que guardar activaciones intermedias para calcular gradientes (memoria). Adam mantiene dos momentos por parámetro (más memoria y ops). Por eso entrenar GPT-scale requiere clusters de miles de GPUs, pero inferencia puede correr en una sola con cuantización. Big-O del entrenamiento por epoch: O(epochs · batches · 3F).\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).\n· Entrenamiento total ≈ 3× FLOPs de inferencia por step.\n· Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).\n· Optimizador (Adam): O(parámetros) extra por step.\n· Inferencia solo forward: despliegue en edge y batch=1.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de ENTRENAMIENTO VS INFERENCIA — BACKPROP.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Entrenamiento total ≈ 3× FLOPs de inferencia por step.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Entrenamiento total ≈ 3× FLOPs de inferencia por step.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Entrenamiento total ≈ 3× FLOPs de inferencia por step.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Optimizador (Adam): O(parámetros) extra por step.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Optimizador (Adam): O(parámetros) extra por step.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Optimizador (Adam): O(parámetros) extra por step.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Inferencia solo forward: despliegue en edge y batch=1.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Inferencia solo forward: despliegue en edge y batch=1.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Inferencia solo forward: despliegue en edge y batch=1.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de ENTRENAMIENTO VS INFERENCIA — BACKPROP.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de ENTRENAMIENTO VS INFERENCIA — BACKPROP.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de ENTRENAMIENTO VS INFERENCIA — BACKPROP.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en ENTRENAMIENTO VS INFERENCIA — BACKPROP dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 2:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\n**Caso 3:** Meta/Google perfilan servicios buscando cuellos O(n²) antes de lanzar features.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume ENTRENAMIENTO VS INFERENCIA — BACKPROP en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar ENTRENAMIENTO VS INFERENCIA — BACKPROP es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Regla práctica: FLOPs entrenamiento ≈ 3 × FLOPs inferencia
def estimar_flops(step):
    forward = step['forward_flops']
    backward = forward * 2      # autodiff reverse mode
    optim = step['params'] * 2  # Adam aprox
    return forward + backward + optim

# Memoria activaciones: O(layers * batch * seq * hidden)
# Gradient checkpointing trade-off: menos memoria, más recomputación`,
      quiz: [
        {
          question: "Backpropagation agrega aproximadamente...",
          options: ["0× FLOPs", "2× FLOPs del forward", "100× FLOPs"],
          answerIndex: 1,
          explanation: "Derivadas vía regla de la cadena."
        },
        {
          question: "Entrenamiento por step ≈ ... × inferencia forward",
          options: ["1×", "3×", "100×"],
          answerIndex: 1,
          explanation: "Forward + backward + optimizer."
        },
        {
          question: "Activaciones intermedias se guardan para...",
          options: ["Calcular gradientes en backward", "Solo visualización", "Comprimir el modelo"],
          answerIndex: 0,
          explanation: "Reverse mode necesita valores del forward."
        },
        {
          question: "Inferencia en producción típicamente ejecuta...",
          options: ["Solo forward pass", "Forward + backward + optimizer", "Solo backward"],
          answerIndex: 0,
          explanation: "No hay gradientes en despliegue."
        },
        {
          question: "Gradient checkpointing intercambia...",
          options: ["Memoria por recomputación (más FLOPs)", "Precisión por velocidad siempre", "GPU por CPU"],
          answerIndex: 0,
          explanation: "Recalcula activaciones para ahorrar RAM."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Entrenamiento total ≈ 3× FLOPs de inferencia por step?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Entrenamiento total ≈ 3× FLOPs de inferencia por step", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Entrenamiento total ≈ 3× FLOPs de inferencia por step. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·a...?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Gradientes requieren almacenar activaciones: costo de memoria O(bat...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Optimizador (Adam): O(parámetros) extra por step?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Optimizador (Adam): O(parámetros) extra por step", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Optimizador (Adam): O(parámetros) extra por step. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Inferencia solo forward: despliegue en edge y batch=1?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Inferencia solo forward: despliegue en edge y batch=1", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Inferencia solo forward: despliegue en edge y batch=1. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 19,
      title: "MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS",
      description: "La cuadraticidad en longitud de secuencia y sus implicaciones en LLMs. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar SELF-ATTENTION O(n²·d) EN TRANSFORMERS.",
      items: [
      "Scores QK^T: matriz n×n → O(n²·d).",
      "Softmax @ V: otro O(n²·d).",
      "Memoria de atención: O(n²) por cabeza (problema con contexto largo).",
      "FlashAttention: mismo Big-O pero IO-aware reduce constantes.",
      "Alternativas: sparse, linear attention, sliding window (Longformer).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de SELF-ATTENTION O(n²·d) EN TRANSFORMERS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — SELF-ATTENTION O(n²·d) EN TRANSFORMERS\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nLa cuadraticidad en longitud de secuencia y sus implicaciones en LLMs. El cuello de botella de Transformers clásicos es la atención cuadrática en la longitud de secuencia n. Calcular QK^T produce una matriz n×n por cabeza: O(n²·d) tiempo y O(n²) memoria. Para n=128K tokens, n²=16 mil millones entradas — prohibitivo. FlashAttention no cambia el Big-O pero reduce accesos a HBM mediante tiling en SRAM. Investigación activa busca atención subcuadrática (Performers, Mamba/SSM) para contextos largos.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Scores QK^T: matriz n×n → O(n²·d).\n· Softmax @ V: otro O(n²·d).\n· Memoria de atención: O(n²) por cabeza (problema con contexto largo).\n· FlashAttention: mismo Big-O pero IO-aware reduce constantes.\n· Alternativas: sparse, linear attention, sliding window (Longformer).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de SELF-ATTENTION O(n²·d) EN TRANSFORMERS.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Scores QK^T: matriz n×n → O(n²·d).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Scores QK^T: matriz n×n → O(n²·d).» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Scores QK^T: matriz n×n → O(n²·d).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — Softmax @ V: otro O(n²·d).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Softmax @ V: otro O(n²·d).» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Softmax @ V: otro O(n²·d).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Memoria de atención: O(n²) por cabeza (problema con contexto largo).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Memoria de atención: O(n²) por cabeza (problema con contexto largo).» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Memoria de atención: O(n²) por cabeza (problema con contexto largo).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — FlashAttention: mismo Big-O pero IO-aware reduce constantes.\n\nTiempo sugerido al grabar: **7–9 minutos**. «FlashAttention: mismo Big-O pero IO-aware reduce constantes.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «FlashAttention: mismo Big-O pero IO-aware reduce constantes.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Alternativas: sparse, linear attention, sliding window (Longformer).\n\nTiempo sugerido al grabar: **7–9 minutos**. «Alternativas: sparse, linear attention, sliding window (Longformer).» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Alternativas: sparse, linear attention, sliding window (Longformer).» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de SELF-ATTENTION O(n²·d) EN TRANSFORMERS.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de SELF-ATTENTION O(n²·d) EN TRANSFORMERS.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de SELF-ATTENTION O(n²·d) EN TRANSFORMERS.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en SELF-ATTENTION O(n²·d) EN TRANSFORMERS dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 2:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\n**Caso 3:** KV-cache en inferencia evita recomputar atención: mismo Big-O, mejor constante.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n· Copiar snippets sin saber qué patrón o complejidad demuestran.\n· Memorizar sin implementar ni medir en código o terminal.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume SELF-ATTENTION O(n²·d) EN TRANSFORMERS en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar SELF-ATTENTION O(n²·d) EN TRANSFORMERS es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Self-Attention simplificado
# Q, K, V: (batch, heads, n, d_head)
# scores = Q @ K.T  → (batch, heads, n, n)  O(n²·d)
# attn = softmax(scores) @ V              O(n²·d)

def attention_flops(n, d, heads):
    d_head = d // heads
    qk = n * n * d_head * heads * 2   # QK^T
    av = n * n * d_head * heads * 2   # Attn @ V
    return qk + av

# n=4096 → n²=16M por cabeza; multiplicar por L capas`,
      quiz: [
        {
          question: "Self-attention clásica en secuencia n tiene complejidad...",
          options: ["O(n)", "O(n log n)", "O(n²·d)"],
          answerIndex: 2,
          explanation: "Matriz de scores n×n por dimensión."
        },
        {
          question: "¿Por qué contexto 128K es caro en Transformers vanilla?",
          options: ["O(n) lineal", "Memoria y compute O(n²)", "O(1)"],
          answerIndex: 1,
          explanation: "n² crece explosivamente."
        },
        {
          question: "FlashAttention mejora principalmente...",
          options: ["Constantes IO y memoria HBM, no el exponente de n", "Cambia O(n²) a O(n)", "Elimina softmax"],
          answerIndex: 0,
          explanation: "IO-aware; sigue siendo cuadrático."
        },
        {
          question: "Sliding window attention reduce complejidad a...",
          options: ["O(n·w) con ventana w", "O(n²)", "O(1)"],
          answerIndex: 0,
          explanation: "Cada token atiende solo w vecinos."
        },
        {
          question: "QK^T produce matriz de forma...",
          options: ["(n, n)", "(d, d)", "(n, d) solo"],
          answerIndex: 0,
          explanation: "Scores entre todos los pares de tokens."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Scores QK^T: matriz n×n → O(n²·d)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Scores QK^T: matriz n×n → O(n²·d)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Scores QK^T: matriz n×n → O(n²·d). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Softmax @ V: otro O(n²·d)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Softmax @ V: otro O(n²·d)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Softmax @ V: otro O(n²·d). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Memoria de atención: O(n²) por cabeza (problema con contexto largo)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Memoria de atención: O(n²) por cabeza (problema con contexto largo)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Memoria de atención: O(n²) por cabeza (problema con contexto largo). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: FlashAttention: mismo Big-O pero IO-aware reduce constantes?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: FlashAttention: mismo Big-O pero IO-aware reduce constantes", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que FlashAttention: mismo Big-O pero IO-aware reduce constantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Alternativas: sparse, linear attention, sliding window (Longformer)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Alternativas: sparse, linear attention, sliding window (Longformer)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Alternativas: sparse, linear attention, sliding window (Longformer). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 20,
      title: "MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN",
      description: "Reducir constantes reales sin cambiar Big-O: cómo escalan los LLMs en producción. Clase autocontenida (~60 min): teoría ampliada, código, 12 preguntas y guía para grabar OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.",
      items: [
      "Batching: throughput ↑, latencia por request puede ↑.",
      "KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.",
      "Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.",
      "Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.",
      "Speculative decoding: amortizar forward passes.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Checklist de repaso previo a evaluación o grabación de clase.",
      "Mapa mental de OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## 📘 Clase completa — OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN\n**Duración sugerida al grabar:** 55–65 minutos (intro + 10 bloques + industria + cierre + quiz).\n\n## Introducción (8–10 min)\n\nReducir constantes reales sin cambiar Big-O: cómo escalan los LLMs en producción. La ingeniería de IA moderna ataca las constantes del Big-O. En generación autoregresiva, recomputar atención completa por cada token nuevo sería O(n²) por token; el KV-cache almacena keys/values previos reduciendo a O(n) por token incremental. Cuantización FP16→INT4 reduce ancho de banda de memoria (cuello de botella real en inferencia). Tensor parallelism divide matrices grandes en múltiples GPUs. Estas técnicas no cambian el exponente teórico pero hacen viable desplegar modelos de 70B parámetros.\n\nMaterial **gratuito y autocontenido** QuimiSell: estudia, repasa y graba sin pagar plataformas externas. Trata este módulo como un **micro-curso** completo sobre el tema.\n\n## Objetivos de aprendizaje\n\n· Batching: throughput ↑, latencia por request puede ↑.\n· KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.\n· Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.\n· Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.\n· Speculative decoding: amortizar forward passes.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Checklist de repaso previo a evaluación o grabación de clase.\n· Mapa mental de OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.\n· Preguntas tipo entrevista técnica.\n· Explicar el tema en 3 minutos sin apuntes (Feynman).\n· Aprobar ≥70% de la autoevaluación (12 preguntas).\n· Conectar con un caso real de industria o proyecto propio.\n\n## Bloque 1 — Batching: throughput ↑, latencia por request puede ↑.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Batching: throughput ↑, latencia por request puede ↑.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Batching: throughput ↑, latencia por request puede ↑.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 2 — KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.\n\nTiempo sugerido al grabar: **7–9 minutos**. «KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 3 — Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 4 — Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 5 — Speculative decoding: amortizar forward passes.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Speculative decoding: amortizar forward passes.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Speculative decoding: amortizar forward passes.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 6 — Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 7 — Errores frecuentes de principiantes y cómo evitarlos en producción.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Errores frecuentes de principiantes y cómo evitarlos en producción.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Errores frecuentes de principiantes y cómo evitarlos en producción.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 8 — Checklist de repaso previo a evaluación o grabación de clase.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Checklist de repaso previo a evaluación o grabación de clase.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Checklist de repaso previo a evaluación o grabación de clase.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 9 — Mapa mental de OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Mapa mental de OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Mapa mental de OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN.» a un sistema conocido (API, app, red, BD).\n\n## Bloque 10 — Preguntas tipo entrevista técnica.\n\nTiempo sugerido al grabar: **7–9 minutos**. «Preguntas tipo entrevista técnica.» es esencial en OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN dentro de análisis asintótico Big-O aplicado a algoritmos e Inteligencia Artificial.\n\n**Qué debes dominar:** definición clara, cuándo aplica, cuándo no, y alternativas. En entrevistas técnicas suelen preguntar variaciones de este punto.\n\n**Cómo enseñarlo:** (1) intuición con ejemplo en pizarra; (2) demo con el snippet del módulo; (3) discusión de trade-offs (tiempo, memoria, seguridad, mantenibilidad). Haz una pausa y plantea una pregunta antes de responderla — mantiene el ritmo de una hora de clase.\n\n**Pausa activa:** el estudiante escribe una frase aplicando «Preguntas tipo entrevista técnica.» a un sistema conocido (API, app, red, BD).\n\n## Aplicación en la industria (10 min)\n\n**Caso 1:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 2:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\n**Caso 3:** Costo LLM se estima en FLOPs; batching reduce latencia sin cambiar el exponente.\n\nAl grabar, desarrolla **un** caso con contexto, problema, solución y consecuencias de ignorar la teoría.\n\n## Errores frecuentes (5 min)\n\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n· Grabar leyendo texto plano en lugar de explicar con ejemplos propios.\n· Saltarse la autoevaluación y avanzar sin dominar el 70% de aciertos.\n\n## Guía para grabar (5 min)\n\n1. Hook (30 s) · 2. Objetivos (1 min) · 3. Bloques teóricos (35–40 min) · 4. Caso industria (8 min) · 5. Errores (4 min) · 6. Cierre + quiz (3 min).\n\nUsa estos apuntes como guion; no leas literal. Tu claridad y ejemplos valen más que producción cara.\n\n## Cierre (5 min)\n\nResume OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN en cinco frases. Completa la autoevaluación. Repasa en 7 días (repaso espaciado). «Dominar OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN es saber cuándo aplicarlo en sistemas reales — aquí tienes teoría, código y práctica gratis.»",
      codeSnippet: `# Autoregresión CON KV-cache (estándar en vLLM, llama.cpp)
# Token t: solo calcula Q_t @ K_{1:t}^T → O(t·d) no O(t²·d) total

# Sin cache: recomputar atención 1..t cada vez → suma O(t²)

# Cuantización: pesos FP32 (4 bytes) → INT4 (0.5 bytes)
# 70B params: 280 GB → ~35 GB (ideal teórico)`,
      quiz: [
        {
          question: "KV-cache en inferencia LLM evita...",
          options: ["Recomputar keys/values de tokens anteriores", "Usar GPU", "El forward pass"],
          answerIndex: 0,
          explanation: "Solo calcula Q del token nuevo contra K,V cacheados."
        },
        {
          question: "Cuantización INT4 reduce principalmente...",
          options: ["Uso de memoria y bandwidth", "Big-O de atención de n² a n", "Número de capas"],
          answerIndex: 0,
          explanation: "Menos bytes por peso; mismo algoritmo."
        },
        {
          question: "Batching en inferencia aumenta throughput porque...",
          options: ["Amortiza overhead kernel sobre muchas secuencias", "Cambia O(n²) a O(n)", "Elimina softmax"],
          answerIndex: 0,
          explanation: "GPUs prefieren operaciones grandes."
        },
        {
          question: "Tensor parallelism divide...",
          options: ["Matrices grandes entre GPUs", "Solo el dataset", "La loss function"],
          answerIndex: 0,
          explanation: "Shard de capas d×d en múltiples dispositivos."
        },
        {
          question: "Speculative decoding usa modelo pequeño para...",
          options: ["Proponer tokens verificados por modelo grande", "Entrenar desde cero", "Eliminar atención"],
          answerIndex: 0,
          explanation: "Reduce forward passes del modelo grande."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Batching: throughput ↑, latencia por request puede ↑?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Batching: throughput ↑, latencia por request puede ↑", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Batching: throughput ↑, latencia por request puede ↑. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Cuantización INT8/INT4: 2-4× menos memoria y bandwidth?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Cuantización INT8/INT4: 2-4× menos memoria y bandwidth", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cuantización INT8/INT4: 2-4× menos memoria y bandwidth. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Speculative decoding: amortizar forward passes?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Speculative decoding: amortizar forward passes", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Speculative decoding: amortizar forward passes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
