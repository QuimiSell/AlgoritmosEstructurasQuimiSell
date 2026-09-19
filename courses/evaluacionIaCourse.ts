import { Course } from '../domain/models';

export const EVALUACION_IA_COURSE: Course = {
  id: 'evaluacion_ia',
  title: 'Evaluación y Confiabilidad de Sistemas con IA',
  shortTitle: 'Evaluación IA',
  badge: 'MLOps & Calidad',
  icon: '✅',
  description: '10 módulos: métricas, leakage, eval LLM, guardrails, observabilidad, red team, FinOps, HITL y SLOs de producción.',
  whyStudyTitle: '🎯 ¿Por qué evaluar IA como ingeniería?',
  whyStudyText: 'Un LLM no pasa tests con assert. Sin eval no sabes si tu RAG mejoró, si el guardrail funciona o cuánto cuesta cada feature. Evaluar es confiabilidad: la diferencia entre demo y producto QuimiSell.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Por qué Evaluar IA",
      why: "Sistemas probabilísticos requieren métricas distintas."
    },
    {
      id: 2,
      title: "Métricas Clásicas",
      why: "Accuracy, precision, recall, F1, ROC-AUC."
    },
    {
      id: 3,
      title: "Datasets y Leakage",
      why: "Train/val/test split y contaminación."
    },
    {
      id: 4,
      title: "Evaluación de LLMs",
      why: "Benchmarks, LLM-as-judge, rubricas."
    },
    {
      id: 5,
      title: "Guardrails",
      why: "Validación de output y políticas de contenido."
    },
    {
      id: 6,
      title: "Observabilidad",
      why: "Logs, traces y dashboards de calidad."
    },
    {
      id: 7,
      title: "Red Teaming",
      why: "Pruebas adversariales sistemáticas."
    },
    {
      id: 8,
      title: "FinOps de IA",
      why: "Costo por token, batching y caching."
    },
    {
      id: 9,
      title: "Human-in-the-Loop",
      why: "Feedback, RLHF y mejora continua."
    },
    {
      id: 10,
      title: "SLOs en Producción",
      why: "SLI, SLO, error budgets para IA."
    }
  ],
  labChallenge: {
    title: "Suite de Evaluación Tutor/RAG QuimiSell",
    badge: "Laboratorio Evaluación IA",
    description: "Golden dataset 20+ preguntas, eval automático multidimensional, reporte 5 fallos con fix propuesto y SLI/SLO documentado.",
    requirements: [
      "• Golden JSON con rubric.",
      "• Script eval agregado.",
      "• 3 dimensiones: relevancia, factualidad, completitud.",
      "• 5 fallos analizados.",
      "• SLI/SLO en README."
    ],
    cleanCodeRules: [
      "• Versionar golden en Git.",
      "• Sin PII en logs.",
      "• Reproducible.",
      "• Enviar a quimicabless2020@gmail.com."
    ],
    emailSubject: "Laboratorio QuimiSell: Eval IA - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,

Repo: [ENLACE]
Score: [X]%

(quimicabless2020@gmail.com)`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA",
      description: "Los sistemas probabilísticos fallan diferente al software determinista.",
      items: [
        
      "Software clásico: input → output predecible.",
      "IA/ML: output con incertidumbre y drift.",
      "Evaluación continua vs test único pre-deploy.",
      "Costo de fallo: alucinación, sesgo, seguridad.",
      "Evaluar es diseño, no fase final.",
      "Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería."
      ],
      content: "## Panorama del tema: POR QUÉ EVALUAR SISTEMAS CON IA\\n\\nLos sistemas probabilísticos fallan diferente al software determinista.\\n\\nUn if/else siempre produce el mismo resultado; un LLM puede variar con temperatura, prompt o contexto. Evaluar IA no es opcional: es ingeniería de confiabilidad. Sin métricas, no sabes si tu RAG mejoró o empeoró tras un cambio de chunking. El costo de fallo incluye reputación, legal y financiero. En QuimiSell, evaluar el tutor offline antes de escalar es requisito de calidad.\\n\\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\\n\\n## Qué aprenderás en este módulo\\n\\n· Software clásico: input → output predecible.\\n· IA/ML: output con incertidumbre y drift.\\n· Evaluación continua vs test único pre-deploy.\\n· Costo de fallo: alucinación, sesgo, seguridad.\\n· Evaluar es diseño, no fase final.\\n· Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA.\\n· Ejemplo numérico o de código trazado paso a paso.\\n· Pregunta tipo entrevista técnica con respuesta esperada.\\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\\n\\n## Desarrollo teórico detallado\\n\\n## 1. Software clásico: input → output predecible.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Software clásico: input → output predecible. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Software clásico: input → output predecible.» y cuándo lo evitarías.\\n\\n## 2. IA/ML: output con incertidumbre y drift.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** IA/ML: output con incertidumbre y drift. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «IA/ML: output con incertidumbre y drift.» y cuándo lo evitarías.\\n\\n## 3. Evaluación continua vs test único pre-deploy.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Evaluación continua vs test único pre-deploy. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evaluación continua vs test único pre-deploy.» y cuándo lo evitarías.\\n\\n## 4. Costo de fallo: alucinación, sesgo, seguridad.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Costo de fallo: alucinación, sesgo, seguridad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Costo de fallo: alucinación, sesgo, seguridad.» y cuándo lo evitarías.\\n\\n## 5. Evaluar es diseño, no fase final.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Evaluar es diseño, no fase final. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evaluar es diseño, no fase final.» y cuándo lo evitarías.\\n\\n## 6. Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA.» y cuándo lo evitarías.\\n\\n## 7. Ejemplo numérico o de código trazado paso a paso.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\\n\\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\\n\\n**Qué es y por qué importa.** Dentro de POR QUÉ EVALUAR SISTEMAS CON IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\\n\\n## Aplicaciones en sistemas reales\\n\\n**Ejemplo 1:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\\n\\n**Ejemplo 2:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\\n\\n**Ejemplo 3:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\\n\\nEstos casos muestran por qué POR QUÉ EVALUAR SISTEMAS CON IA no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\\n\\n## Errores comunes al estudiar\\n\\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\\n\\n## Síntesis para repasar\\n\\nCierra el módulo resumiendo POR QUÉ EVALUAR SISTEMAS CON IA en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación antes de avanzar al siguiente módulo.",
      codeSnippet: `# eval_llm(prompt) → distribución → necesitas métricas`,
      quiz: [
        {
          question: "IA vs software clásico...",
          options: ["Igual de predecibles", "IA tiene incertidumbre en outputs", "IA nunca falla"],
          answerIndex: 1,
          explanation: "Modelos probabilísticos."
        },
        {
          question: "Evaluar IA es...",
          options: ["Opcional post-lanzamiento", "Parte del diseño continuo", "Solo académico"],
          answerIndex: 1,
          explanation: "Quality engineering."
        },
        {
          question: "Drift significa...",
          options: ["Modelo degrada con datos nuevos", "Git conflict", "Solo GPU"],
          answerIndex: 0,
          explanation: "Distribución cambia."
        },
        {
          question: "Sin métricas tras cambiar RAG...",
          options: ["Sabes si mejoró", "No puedes comparar versiones", "Git lo detecta"],
          answerIndex: 1,
          explanation: "Eval cuantitativa necesaria."
        },
        {
          question: "Alucinación LLM...",
          options: ["Sin riesgo real", "Puede dañar decisiones", "Solo estética"],
          answerIndex: 1,
          explanation: "Respuestas inventadas."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Software clásico: input → output predecible?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Software clásico: input → output predecible", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Software clásico: input → output predecible. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: IA/ML: output con incertidumbre y drift?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: IA/ML: output con incertidumbre y drift", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IA/ML: output con incertidumbre y drift. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Evaluación continua vs test único pre-deploy?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Evaluación continua vs test único pre-deploy", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evaluación continua vs test único pre-deploy. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Costo de fallo: alucinación, sesgo, seguridad?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Costo de fallo: alucinación, sesgo, seguridad", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Costo de fallo: alucinación, sesgo, seguridad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Evaluar es diseño, no fase final?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Evaluar es diseño, no fase final", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evaluar es diseño, no fase final. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CO...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de POR QUÉ EVALUAR S...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de POR QUÉ EVALUAR SISTEMAS CON IA. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1",
      description: "Matriz de confusión y trade-offs en clasificación.",
      items: [
      "TP, TN, FP, FN.",
      "Accuracy engañosa con desbalance.",
      "Precision = TP/(TP+FP).",
      "Recall = TP/(TP+FN).",
      "F1 = media armónica P y R.",
      "Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1\n\nMatriz de confusión y trade-offs en clasificación.\n\nAccuracy alta puede ocultar modelo inútil con clases desbalanceadas. Precision mide falsos positivos; recall mide falsos negativos. F1 balancea ambos. Elige métrica según costo de error: spam (precision) vs diagnóstico médico (recall).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· TP, TN, FP, FN.\n· Accuracy engañosa con desbalance.\n· Precision = TP/(TP+FP).\n· Recall = TP/(TP+FN).\n· F1 = media armónica P y R.\n· Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. TP, TN, FP, FN.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** TP, TN, FP, FN. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «TP, TN, FP, FN.» y cuándo lo evitarías.\n\n## 2. Accuracy engañosa con desbalance.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Accuracy engañosa con desbalance. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Accuracy engañosa con desbalance.» y cuándo lo evitarías.\n\n## 3. Precision = TP/(TP+FP).\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Precision = TP/(TP+FP). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Precision = TP/(TP+FP).» y cuándo lo evitarías.\n\n## 4. Recall = TP/(TP+FN).\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Recall = TP/(TP+FN). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Recall = TP/(TP+FN).» y cuándo lo evitarías.\n\n## 5. F1 = media armónica P y R.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** F1 = media armónica P y R. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «F1 = media armónica P y R.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué MÉTRICAS — ACCURACY, PRECISION, RECALL, F1 no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo MÉTRICAS — ACCURACY, PRECISION, RECALL, F1 en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# F1 = 2*(P*R)/(P+R)`,
      quiz: [
        {
          question: "Accuracy engañosa si...",
          options: ["Clases balanceadas", "Desbalance fuerte", "Usas F1"],
          answerIndex: 1,
          explanation: "Mayoría domina."
        },
        {
          question: "Precision mide...",
          options: ["Positivos reales detectados", "Predichos positivos correctos", "Solo TN"],
          answerIndex: 1,
          explanation: "Calidad predicciones +."
        },
        {
          question: "Recall mide...",
          options: ["Falsos positivos", "Positivos reales detectados", "Accuracy"],
          answerIndex: 1,
          explanation: "Cobertura."
        },
        {
          question: "F1 es...",
          options: ["Media armónica P y R", "Suma P+R", "Accuracy"],
          answerIndex: 0,
          explanation: "Balance P/R."
        },
        {
          question: "Diagnóstico médico prioriza...",
          options: ["Recall alto", "Solo precision", "BLEU"],
          answerIndex: 0,
          explanation: "FN costoso."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: TP, TN, FP, FN?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: TP, TN, FP, FN", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que TP, TN, FP, FN. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: Accuracy engañosa con desbalance?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Accuracy engañosa con desbalance", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Accuracy engañosa con desbalance. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: Precision = TP/(TP+FP)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Precision = TP/(TP+FP)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Precision = TP/(TP+FP). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: Recall = TP/(TP+FN)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Recall = TP/(TP+FN)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recall = TP/(TP+FN). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: F1 = media armónica P y R?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: F1 = media armónica P y R", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que F1 = media armónica P y R. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECIS...?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Definición operativa de los términos centrales de MÉTRICAS — ACCURA...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de MÉTRICAS — ACCURACY, PRECISION, RECALL, F1. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE",
      description: "Datos de evaluación sagrados e independientes.",
      items: [
      "Train/val/test split.",
      "K-fold para datasets pequeños.",
      "Leakage: test contamina train.",
      "Split temporal en series.",
      "Synthetic data con cautela.",
      "Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: DATASETS, SPLITS Y DATA LEAKAGE\n\nDatos de evaluación sagrados e independientes.\n\nLeakage es error #1: normalizar con stats del test, duplicar filas, target leakage. Test se toca una vez al final. Time-series: split temporal. LLMs: contaminación de benchmarks en training corpus.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Train/val/test split.\n· K-fold para datasets pequeños.\n· Leakage: test contamina train.\n· Split temporal en series.\n· Synthetic data con cautela.\n· Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Train/val/test split.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Train/val/test split. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Train/val/test split.» y cuándo lo evitarías.\n\n## 2. K-fold para datasets pequeños.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** K-fold para datasets pequeños. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «K-fold para datasets pequeños.» y cuándo lo evitarías.\n\n## 3. Leakage: test contamina train.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Leakage: test contamina train. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Leakage: test contamina train.» y cuándo lo evitarías.\n\n## 4. Split temporal en series.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Split temporal en series. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Split temporal en series.» y cuándo lo evitarías.\n\n## 5. Synthetic data con cautela.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Synthetic data con cautela. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Synthetic data con cautela.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de DATASETS, SPLITS Y DATA LEAKAGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\n**Ejemplo 2:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\n**Ejemplo 3:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\nEstos casos muestran por qué DATASETS, SPLITS Y DATA LEAKAGE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo DATASETS, SPLITS Y DATA LEAKAGE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# train: 2020-2023, test: 2024+ (temporal)`,
      quiz: [
        {
          question: "Data leakage...",
          options: ["Test independiente", "Test contamina train", "Solo validation"],
          answerIndex: 1,
          explanation: "Contaminación."
        },
        {
          question: "Test set para...",
          options: ["Tuning diario", "Eval final una vez", "Train"],
          answerIndex: 1,
          explanation: "Generalización honesta."
        },
        {
          question: "Validation para...",
          options: ["Tuning sin tocar test", "Reemplazar test", "Deploy"],
          answerIndex: 0,
          explanation: "Selección hparams."
        },
        {
          question: "Time-series split...",
          options: ["Shuffle aleatorio", "Temporal pasado→futuro", "Solo train"],
          answerIndex: 1,
          explanation: "No futuro en train."
        },
        {
          question: "Target leakage...",
          options: ["Feature con la respuesta", "Normalizar train", "K-fold"],
          answerIndex: 0,
          explanation: "Feature filtra target."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Train/val/test split?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Train/val/test split", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Train/val/test split. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: K-fold para datasets pequeños?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: K-fold para datasets pequeños", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que K-fold para datasets pequeños. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Leakage: test contamina train?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Leakage: test contamina train", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Leakage: test contamina train. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Split temporal en series?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Split temporal en series", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Split temporal en series. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Synthetic data con cautela?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Synthetic data con cautela", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Synthetic data con cautela. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEA...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Definición operativa de los términos centrales de DATASETS, SPLITS ...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de DATASETS, SPLITS Y DATA LEAKAGE. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE",
      description: "Calidad de texto generado más allá de accuracy.",
      items: [
      "Benchmarks: MMLU, HumanEval.",
      "BLEU/ROUGE limitados.",
      "LLM-as-judge con rubrica.",
      "Golden dataset custom.",
      "Evals: relevancia, factualidad, seguridad.",
      "Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE\n\nCalidad de texto generado más allá de accuracy.\n\nBLEU mide n-gram overlap — pobre para respuestas válidas distintas. LLM-as-judge escala eval con rubrica. Golden set de 50-200 preguntas de tu dominio. QuimiSell: keywords + judge factual.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Benchmarks: MMLU, HumanEval.\n· BLEU/ROUGE limitados.\n· LLM-as-judge con rubrica.\n· Golden dataset custom.\n· Evals: relevancia, factualidad, seguridad.\n· Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Benchmarks: MMLU, HumanEval.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Benchmarks: MMLU, HumanEval. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Benchmarks: MMLU, HumanEval.» y cuándo lo evitarías.\n\n## 2. BLEU/ROUGE limitados.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** BLEU/ROUGE limitados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «BLEU/ROUGE limitados.» y cuándo lo evitarías.\n\n## 3. LLM-as-judge con rubrica.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** LLM-as-judge con rubrica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «LLM-as-judge con rubrica.» y cuándo lo evitarías.\n\n## 4. Golden dataset custom.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Golden dataset custom. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Golden dataset custom.» y cuándo lo evitarías.\n\n## 5. Evals: relevancia, factualidad, seguridad.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Evals: relevancia, factualidad, seguridad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evals: relevancia, factualidad, seguridad.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué EVALUACIÓN DE LLMs Y LLM-AS-JUDGE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo EVALUACIÓN DE LLMs Y LLM-AS-JUDGE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# golden=[{q, must_include, rubric}]`,
      quiz: [
        {
          question: "BLEU limitado porque...",
          options: ["Mide overlap no semántica", "Perfecto LLM", "Evalúa GPU"],
          answerIndex: 0,
          explanation: "n-gram overlap."
        },
        {
          question: "LLM-as-judge...",
          options: ["LLM evalúa con rubrica", "Reemplaza humanos 100%", "Solo SQL"],
          answerIndex: 0,
          explanation: "Eval escalable."
        },
        {
          question: "Golden dataset...",
          options: ["Preguntas de tu dominio", "Solo benchmarks", "Opcional"],
          answerIndex: 0,
          explanation: "Eval relevante."
        },
        {
          question: "MMLU evalúa...",
          options: ["Conocimiento multi-dominio", "GPU", "Git"],
          answerIndex: 0,
          explanation: "Multitask understanding."
        },
        {
          question: "Evals incluyen...",
          options: ["Relevancia y factualidad", "Solo longitud", "Solo temp"],
          answerIndex: 0,
          explanation: "Multidimensional."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: Benchmarks: MMLU, HumanEval?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Benchmarks: MMLU, HumanEval", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Benchmarks: MMLU, HumanEval. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: BLEU/ROUGE limitados?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: BLEU/ROUGE limitados", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que BLEU/ROUGE limitados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: LLM-as-judge con rubrica?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: LLM-as-judge con rubrica", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que LLM-as-judge con rubrica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: Golden dataset custom?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Golden dataset custom", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Golden dataset custom. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: Evals: relevancia, factualidad, seguridad?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Evals: relevancia, factualidad, seguridad", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evals: relevancia, factualidad, seguridad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Definición operativa de los términos centrales de EVALUACIÓN DE LLM...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de EVALUACIÓN DE LLMs Y LLM-AS-JUDGE. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT",
      description: "Barreras entre LLM y usuario.",
      items: [
      "Input sanitization.",
      "Output schema JSON.",
      "Content policy toxicidad/PII.",
      "Structured output.",
      "Fallback seguro.",
      "Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: GUARDRAILS Y VALIDACIÓN DE OUTPUT\n\nBarreras entre LLM y usuario.\n\nValidar input/output, forzar JSON, detectar PII/toxicidad. Prompt injection evade system prompt. Código generado → sandbox. QuimiSell: no inventar teoremas.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Input sanitization.\n· Output schema JSON.\n· Content policy toxicidad/PII.\n· Structured output.\n· Fallback seguro.\n· Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Input sanitization.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Input sanitization. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Input sanitization.» y cuándo lo evitarías.\n\n## 2. Output schema JSON.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Output schema JSON. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Output schema JSON.» y cuándo lo evitarías.\n\n## 3. Content policy toxicidad/PII.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Content policy toxicidad/PII. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Content policy toxicidad/PII.» y cuándo lo evitarías.\n\n## 4. Structured output.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Structured output. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Structured output.» y cuándo lo evitarías.\n\n## 5. Fallback seguro.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Fallback seguro. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Fallback seguro.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de GUARDRAILS Y VALIDACIÓN DE OUTPUT, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué GUARDRAILS Y VALIDACIÓN DE OUTPUT no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo GUARDRAILS Y VALIDACIÓN DE OUTPUT en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# if detect_pii(r): redact(r)`,
      quiz: [
        {
          question: "Guardrails...",
          options: ["Capas input/output", "Solo GPU", "Git"],
          answerIndex: 0,
          explanation: "Defensa en capas."
        },
        {
          question: "Prompt injection...",
          options: ["Evade system prompt", "Mejora recall", "SQL"],
          answerIndex: 0,
          explanation: "Ataque prompt."
        },
        {
          question: "JSON mode...",
          options: ["Parsing predecible", "Elimina eval", "GPT-2"],
          answerIndex: 0,
          explanation: "Structured output."
        },
        {
          question: "PII detectada...",
          options: ["Redactar/rechazar", "Publicar", "Ignorar"],
          answerIndex: 0,
          explanation: "Privacidad."
        },
        {
          question: "Código LLM...",
          options: ["Sandbox primero", "Ejecutar prod", "No validar"],
          answerIndex: 0,
          explanation: "DevSecOps."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Input sanitization?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Input sanitization", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Input sanitization. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Output schema JSON?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Output schema JSON", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Output schema JSON. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Content policy toxicidad/PII?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Content policy toxicidad/PII", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Content policy toxicidad/PII. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Structured output?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Structured output", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Structured output. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Fallback seguro?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Fallback seguro", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fallback seguro. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE ...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de GUARDRAILS Y VALI...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de GUARDRAILS Y VALIDACIÓN DE OUTPUT. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS",
      description: "Ver producción a escala.",
      items: [
      "Logging JSON estructurado.",
      "OpenTelemetry traces.",
      "p50/p95 latency.",
      "LangSmith/Langfuse.",
      "Alertas SLO.",
      "Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS\n\nVer producción a escala.\n\nLog request_id, tokens, latency, eval score. p95 > promedio. Alert si error >1%. QuimiSell offline: log exportable.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Logging JSON estructurado.\n· OpenTelemetry traces.\n· p50/p95 latency.\n· LangSmith/Langfuse.\n· Alertas SLO.\n· Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Logging JSON estructurado.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Logging JSON estructurado. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Logging JSON estructurado.» y cuándo lo evitarías.\n\n## 2. OpenTelemetry traces.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** OpenTelemetry traces. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «OpenTelemetry traces.» y cuándo lo evitarías.\n\n## 3. p50/p95 latency.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** p50/p95 latency. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «p50/p95 latency.» y cuándo lo evitarías.\n\n## 4. LangSmith/Langfuse.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** LangSmith/Langfuse. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «LangSmith/Langfuse.» y cuándo lo evitarías.\n\n## 5. Alertas SLO.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Alertas SLO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Alertas SLO.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\n**Ejemplo 2:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\n**Ejemplo 3:** SLO de factualidad ≥90% en 7 días es contrato medible entre equipo de producto e ingeniería.\n\nEstos casos muestran por qué OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `{"request_id":"x","latency_ms":890,"tokens_out":340}`,
      quiz: [
        {
          question: "Log estructurado...",
          options: ["JSON consistente", "print()", "Binario"],
          answerIndex: 0,
          explanation: "Parseable."
        },
        {
          question: "p95 latency...",
          options: ["95% más rápidos que valor", "Promedio", "Peor ever"],
          answerIndex: 0,
          explanation: "Percentil."
        },
        {
          question: "OpenTelemetry...",
          options: ["Tracing estándar", "Git", "CSS"],
          answerIndex: 0,
          explanation: "Observabilidad."
        },
        {
          question: "LangSmith...",
          options: ["Observabilidad LLM", "SQL", "PWA"],
          answerIndex: 0,
          explanation: "LLM ops."
        },
        {
          question: "No loguear prompt si...",
          options: ["Tiene PII", "Siempre OK", "Obligatorio"],
          answerIndex: 0,
          explanation: "Privacidad."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: Logging JSON estructurado?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Logging JSON estructurado", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Logging JSON estructurado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: OpenTelemetry traces?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: OpenTelemetry traces", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que OpenTelemetry traces. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: p50/p95 latency?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: p50/p95 latency", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que p50/p95 latency. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: LangSmith/Langfuse?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: LangSmith/Langfuse", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que LangSmith/Langfuse. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: Alertas SLO?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Alertas SLO", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Alertas SLO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRAC...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición operativa de los términos centrales de OBSERVABILIDAD — ...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES",
      description: "Atacar antes que otros.",
      items: [
      "Red team sistemático.",
      "Jailbreaks e injection.",
      "FGSM/PGD clásico.",
      "Auto red team LLM.",
      "Find-fix-verify.",
      "Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: RED TEAMING Y PRUEBAS ADVERSARIALES\n\nAtacar antes que otros.\n\nProbar jailbreak, exfiltración system prompt, RAG envenenado. Automated red team a escala. QuimiSell: prompts adversariales pre-release.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Red team sistemático.\n· Jailbreaks e injection.\n· FGSM/PGD clásico.\n· Auto red team LLM.\n· Find-fix-verify.\n· Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Red team sistemático.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Red team sistemático. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Red team sistemático.» y cuándo lo evitarías.\n\n## 2. Jailbreaks e injection.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Jailbreaks e injection. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Jailbreaks e injection.» y cuándo lo evitarías.\n\n## 3. FGSM/PGD clásico.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** FGSM/PGD clásico. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «FGSM/PGD clásico.» y cuándo lo evitarías.\n\n## 4. Auto red team LLM.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Auto red team LLM. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Auto red team LLM.» y cuándo lo evitarías.\n\n## 5. Find-fix-verify.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Find-fix-verify. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Find-fix-verify.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de RED TEAMING Y PRUEBAS ADVERSARIALES, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué RED TEAMING Y PRUEBAS ADVERSARIALES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo RED TEAMING Y PRUEBAS ADVERSARIALES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# categorías: jailbreak, injection, exfil`,
      quiz: [
        {
          question: "Red teaming...",
          options: ["Ataque proactivo propio", "Marketing", "Deploy"],
          answerIndex: 0,
          explanation: "Seguridad ofensiva."
        },
        {
          question: "Jailbreak...",
          options: ["Evade restricciones", "Mejora recall", "SQL"],
          answerIndex: 0,
          explanation: "Bypass safety."
        },
        {
          question: "RAG injection...",
          options: ["Chunk malicioso", "Mejora retrieval", "Git"],
          answerIndex: 0,
          explanation: "Doc envenenado."
        },
        {
          question: "Auto red team...",
          options: ["LLM genera ataques", "Solo manual", "N/A"],
          answerIndex: 0,
          explanation: "Escala."
        },
        {
          question: "Findings...",
          options: ["Documentar y remediar", "Ignorar", "Publicar"],
          answerIndex: 0,
          explanation: "Ciclo seguridad."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Red team sistemático?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Red team sistemático", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Red team sistemático. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Jailbreaks e injection?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Jailbreaks e injection", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Jailbreaks e injection. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: FGSM/PGD clásico?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: FGSM/PGD clásico", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que FGSM/PGD clásico. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Auto red team LLM?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Auto red team LLM", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Auto red team LLM. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Find-fix-verify?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Find-fix-verify", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Find-fix-verify. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVER...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Definición operativa de los términos centrales de RED TEAMING Y PRU...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de RED TEAMING Y PRUEBAS ADVERSARIALES. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: FinOps DE IA",
      description: "Cada token tiene precio.",
      items: [
      "Input vs output pricing.",
      "Model routing.",
      "Prompt caching.",
      "Batching.",
      "Edge elimina API cost.",
      "Definición operativa de los términos centrales de FinOps DE IA.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: FinOps DE IA\n\nCada token tiene precio.\n\nGPT-4o-mini para tareas simples; cache system prompt; batch API. QuimiSell edge = FinOps $0.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Input vs output pricing.\n· Model routing.\n· Prompt caching.\n· Batching.\n· Edge elimina API cost.\n· Definición operativa de los términos centrales de FinOps DE IA.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Input vs output pricing.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Input vs output pricing. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Input vs output pricing.» y cuándo lo evitarías.\n\n## 2. Model routing.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Model routing. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Model routing.» y cuándo lo evitarías.\n\n## 3. Prompt caching.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Prompt caching. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Prompt caching.» y cuándo lo evitarías.\n\n## 4. Batching.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Batching. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Batching.» y cuándo lo evitarías.\n\n## 5. Edge elimina API cost.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Edge elimina API cost. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Edge elimina API cost.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de FinOps DE IA.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de FinOps DE IA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de FinOps DE IA.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de FinOps DE IA, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué FinOps DE IA no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo FinOps DE IA en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# cost = tokens_in*pin + tokens_out*pout`,
      quiz: [
        {
          question: "Output tokens...",
          options: ["Más caros que input", "Gratis", "Igual siempre"],
          answerIndex: 0,
          explanation: "Generación cara."
        },
        {
          question: "Model routing...",
          options: ["Modelo barato tareas simples", "Siempre grande", "Sin ahorro"],
          answerIndex: 0,
          explanation: "Right-size."
        },
        {
          question: "Prompt caching...",
          options: ["Reutiliza prefix", "Elimina eval", "SQL"],
          answerIndex: 0,
          explanation: "Ahorro tokens."
        },
        {
          question: "Edge/on-device...",
          options: ["Elimina costo API", "Elimina eval", "Elimina HW"],
          answerIndex: 0,
          explanation: "FinOps $0."
        },
        {
          question: "Budget alerts...",
          options: ["Avisan umbral gasto", "Decorativos", "Guardrails"],
          answerIndex: 0,
          explanation: "Control fin."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Input vs output pricing?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Input vs output pricing", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Input vs output pricing. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Model routing?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Model routing", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Model routing. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Prompt caching?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Prompt caching", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Prompt caching. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Batching?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Batching", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Batching. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Edge elimina API cost?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Edge elimina API cost", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Edge elimina API cost. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de FinOps DE IA?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de FinOps DE IA", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de FinOps DE IA. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: FinOps DE IA', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: HUMAN-IN-THE-LOOP",
      description: "Humanos en puntos críticos.",
      items: [
      "HITL baja confianza.",
      "Thumbs feedback.",
      "RLHF.",
      "Active learning.",
      "Flywheel datos.",
      "Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: HUMAN-IN-THE-LOOP\n\nHumanos en puntos críticos.\n\nConfidence <0.7 → revisión humana. RLHF alinea preferencias. QuimiSell quizzes = signal local.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· HITL baja confianza.\n· Thumbs feedback.\n· RLHF.\n· Active learning.\n· Flywheel datos.\n· Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. HITL baja confianza.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** HITL baja confianza. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «HITL baja confianza.» y cuándo lo evitarías.\n\n## 2. Thumbs feedback.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Thumbs feedback. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Thumbs feedback.» y cuándo lo evitarías.\n\n## 3. RLHF.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** RLHF. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «RLHF.» y cuándo lo evitarías.\n\n## 4. Active learning.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Active learning. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Active learning.» y cuándo lo evitarías.\n\n## 5. Flywheel datos.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Flywheel datos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Flywheel datos.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de HUMAN-IN-THE-LOOP, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 2:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\n**Ejemplo 3:** OpenAI evals y LangSmith rastrean regresiones cuando cambias prompt o modelo en producción.\n\nEstos casos muestran por qué HUMAN-IN-THE-LOOP no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo HUMAN-IN-THE-LOOP en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# if conf<0.7: human_review()`,
      quiz: [
        {
          question: "HITL...",
          options: ["Human-In-The-Loop", "Hardware", "Solo auto"],
          answerIndex: 0,
          explanation: "Supervisión selectiva."
        },
        {
          question: "RLHF...",
          options: ["Feedback humano alinea", "SQL joins", "Git"],
          answerIndex: 0,
          explanation: "Preferencias humanas."
        },
        {
          question: "Active learning...",
          options: ["Casos inciertos primero", "Aleatorio", "Test only"],
          answerIndex: 0,
          explanation: "Etiquetado eficiente."
        },
        {
          question: "Thumbs down...",
          options: ["Signal mejora", "Inútil", "Elimina modelo"],
          answerIndex: 0,
          explanation: "Feedback loop."
        },
        {
          question: "Flywheel...",
          options: ["Usuarios→datos→mejor modelo", "Marketing", "Sin mejora"],
          answerIndex: 0,
          explanation: "Ciclo virtuoso."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: HITL baja confianza?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: HITL baja confianza", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que HITL baja confianza. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: Thumbs feedback?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Thumbs feedback", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Thumbs feedback. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: RLHF?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: RLHF", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que RLHF. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: Active learning?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Active learning", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Active learning. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: Flywheel datos?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Flywheel datos", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Flywheel datos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de HUMAN-IN-THE-LOOP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: HUMAN-IN-THE-LOOP', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN",
      description: "Definir 'funciona bien' para IA.",
      items: [
      "SLI medible.",
      "SLO objetivo.",
      "Error budget.",
      "Feature flags.",
      "Postmortem blameless.",
      "Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: SLOs, SLIs Y PRODUCCIÓN\n\nDefinir 'funciona bien' para IA.\n\nSLO: 95% respuestas pasan eval factual. Error budget permite innovar. Feature flags rollback sin redeploy.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· SLI medible.\n· SLO objetivo.\n· Error budget.\n· Feature flags.\n· Postmortem blameless.\n· Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. SLI medible.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** SLI medible. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SLI medible.» y cuándo lo evitarías.\n\n## 2. SLO objetivo.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** SLO objetivo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SLO objetivo.» y cuándo lo evitarías.\n\n## 3. Error budget.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Error budget. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Error budget.» y cuándo lo evitarías.\n\n## 4. Feature flags.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Feature flags. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Feature flags.» y cuándo lo evitarías.\n\n## 5. Postmortem blameless.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Postmortem blameless. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Postmortem blameless.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de SLOs, SLIs Y PRODUCCIÓN, este punto es central en confiabilidad de sistemas con IA, métricas y guardrails. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Guardrails de PII evitan que un LLM filtre emails en respuestas de soporte al cliente.\n\n**Ejemplo 2:** Guardrails de PII evitan que un LLM filtre emails en respuestas de soporte al cliente.\n\n**Ejemplo 3:** Guardrails de PII evitan que un LLM filtre emails en respuestas de soporte al cliente.\n\nEstos casos muestran por qué SLOs, SLIs Y PRODUCCIÓN no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo SLOs, SLIs Y PRODUCCIÓN en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# SLO: 90% eval>=0.8 over 7d`,
      quiz: [
        {
          question: "SLI...",
          options: ["Indicador medible", "Objetivo", "SQL"],
          answerIndex: 0,
          explanation: "Indicator."
        },
        {
          question: "SLO...",
          options: ["Objetivo sobre SLI", "Log", "Branch"],
          answerIndex: 0,
          explanation: "Objective."
        },
        {
          question: "Error budget...",
          options: ["Fallo permitido antes freeze", "Dinero cloud", "Solo Google"],
          answerIndex: 0,
          explanation: "Innovación vs estabilidad."
        },
        {
          question: "Feature flags...",
          options: ["Desactivar sin redeploy", "CSS", "Eliminar eval"],
          answerIndex: 0,
          explanation: "Rollback rápido."
        },
        {
          question: "Postmortem blameless...",
          options: ["Aprender sin culpar", "Marketing", "Opcional"],
          answerIndex: 0,
          explanation: "Cultura."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: SLI medible?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: SLI medible", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SLI medible. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: SLO objetivo?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: SLO objetivo", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SLO objetivo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: Error budget?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Error budget", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Error budget. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: Feature flags?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Feature flags", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Feature flags. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: Postmortem blameless?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Postmortem blameless", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Postmortem blameless. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de SLOs, SLIs Y PROD...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de SLOs, SLIs Y PRODUCCIÓN. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
