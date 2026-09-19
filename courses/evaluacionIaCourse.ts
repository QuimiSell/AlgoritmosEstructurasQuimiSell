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
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA",
      description: "Los sistemas probabilísticos fallan diferente al software determinista.",
      items: [
        "Software clásico: input → output predecible.",
        "IA/ML: output con incertidumbre y drift.",
        "Evaluación continua vs test único pre-deploy.",
        "Costo de fallo: alucinación, sesgo, seguridad.",
        "Evaluar es diseño, no fase final."
      ],
      content: "Un if/else siempre produce el mismo resultado; un LLM puede variar con temperatura, prompt o contexto. Evaluar IA no es opcional: es ingeniería de confiabilidad. Sin métricas, no sabes si tu RAG mejoró o empeoró tras un cambio de chunking. El costo de fallo incluye reputación, legal y financiero. En QuimiSell, evaluar el tutor offline antes de escalar es requisito de calidad.",
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
        "F1 = media armónica P y R."
      ],
      content: "Accuracy alta puede ocultar modelo inútil con clases desbalanceadas. Precision mide falsos positivos; recall mide falsos negativos. F1 balancea ambos. Elige métrica según costo de error: spam (precision) vs diagnóstico médico (recall).",
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
        "Synthetic data con cautela."
      ],
      content: "Leakage es error #1: normalizar con stats del test, duplicar filas, target leakage. Test se toca una vez al final. Time-series: split temporal. LLMs: contaminación de benchmarks en training corpus.",
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
        "Evals: relevancia, factualidad, seguridad."
      ],
      content: "BLEU mide n-gram overlap — pobre para respuestas válidas distintas. LLM-as-judge escala eval con rubrica. Golden set de 50-200 preguntas de tu dominio. QuimiSell: keywords + judge factual.",
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
        "Fallback seguro."
      ],
      content: "Validar input/output, forzar JSON, detectar PII/toxicidad. Prompt injection evade system prompt. Código generado → sandbox. QuimiSell: no inventar teoremas.",
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
        "Alertas SLO."
      ],
      content: "Log request_id, tokens, latency, eval score. p95 > promedio. Alert si error >1%. QuimiSell offline: log exportable.",
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
        "Find-fix-verify."
      ],
      content: "Probar jailbreak, exfiltración system prompt, RAG envenenado. Automated red team a escala. QuimiSell: prompts adversariales pre-release.",
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
        "Edge elimina API cost."
      ],
      content: "GPT-4o-mini para tareas simples; cache system prompt; batch API. QuimiSell edge = FinOps $0.",
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
        "Flywheel datos."
      ],
      content: "Confidence <0.7 → revisión humana. RLHF alinea preferencias. QuimiSell quizzes = signal local.",
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
        "Postmortem blameless."
      ],
      content: "SLO: 95% respuestas pasan eval factual. Error budget permite innovar. Feature flags rollback sin redeploy.",
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
      ]
    }
  ]
};
