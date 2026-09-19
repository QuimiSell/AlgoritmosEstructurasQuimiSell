import { Course } from '../domain/models';

export const SQL_DATOS_IA_COURSE: Course = {
  id: 'sql_datos_ia',
  title: 'SQL, Datos y RAG para IA ($0 Local)',
  shortTitle: 'SQL & Datos IA',
  badge: 'Datos & Retrieval',
  icon: '🗄️',
  description: '10 módulos: SQL relacional, JOINs, índices, SQLite, JSON, embeddings, pipeline RAG y estrategia de datos $0 para IA QuimiSell.',
  whyStudyTitle: '📊 ¿Por qué SQL y datos antes de RAG?',
  whyStudyText: 'RAG sin datos limpios es alucinación estructurada. SQL organiza metadata, progreso y chunks; los embeddings buscan semántica; el pipeline conecta ambos. Dominar JOINs, índices O(log n) y chunking te separa de quien solo llama API sin entender qué hay debajo.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Modelo Relacional",
      why: "Tablas, filas, claves primarias y foráneas."
    },
    {
      id: 2,
      title: "Consultas SELECT",
      why: "Filtrar, ordenar y agregar datos."
    },
    {
      id: 3,
      title: "JOINs",
      why: "Relacionar tablas sin duplicar lógica en código."
    },
    {
      id: 4,
      title: "Índices y EXPLAIN",
      why: "Rendimiento y planes de ejecución."
    },
    {
      id: 5,
      title: "Normalización",
      why: "1FN–3FN vs desnormalización pragmática."
    },
    {
      id: 6,
      title: "SQLite Local",
      why: "Base embebida $0 para prototipos y apps."
    },
    {
      id: 7,
      title: "JSON en SQL",
      why: "Semi-estructurado sin NoSQL obligatorio."
    },
    {
      id: 8,
      title: "Embeddings y Vectores",
      why: "Fundamentos de búsqueda semántica."
    },
    {
      id: 9,
      title: "Pipeline RAG",
      why: "Chunking, metadata y retrieval."
    },
    {
      id: 10,
      title: "Datos para IA $0",
      why: "Estrategias locales sin factura cloud."
    }
  ],
  labChallenge: {
    title: "Mini Pipeline RAG Local con SQLite y Embeddings",
    badge: "Laboratorio SQL y Datos para IA",
    description: "Construye un script Python o notebook que: (1) ingeste 5+ documentos de texto, (2) los chunkee con metadata, (3) genere embeddings, (4) almacene en SQLite o Chroma local, (5) responda 3 preguntas con retrieval top-3 + respuesta citando fuentes.",
    requirements: [
      "• Esquema SQL o Chroma con al menos: chunks(id, text, metadata JSON, embedding).",
      "• Chunking documentado: tamaño, overlap y justificación.",
      "• Función search(query, k=3) con similaridad coseno.",
      "• 3 preguntas de prueba con respuestas que citen chunk_id o metadata.source.",
      "• README con diagrama del pipeline y complejidad Big-O de búsqueda naive vs indexada."
    ],
    cleanCodeRules: [
      "• Separar ingesta, chunking, embedding y retrieval en funciones.",
      "• No hardcodear API keys; embeddings locales preferidos (sentence-transformers).",
      "• SQL parametrizado (?) — nunca concatenar input usuario.",
      "• Enviar repo/notebook a quimicabless2020@gmail.com."
    ],
    emailSubject: "Laboratorio QuimiSell: SQL y RAG Local - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,

Adjunto mi pipeline RAG local con SQL/Chroma.

Repositorio: [ENLACE GITHUB]
Chunks indexados: [N]
Modelo embedding: [nombre]

Preguntas de prueba:
1. [pregunta] → fuente: [chunk_id]
2. ...
3. ...

Saludos cordiales.
(quimicabless2020@gmail.com)`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL",
      description: "Por qué los datos estructurados siguen siendo el cimiento de sistemas con IA.",
      items: [
        
      "Tablas, columnas, filas y esquemas.",
      "Clave primaria (PK) e integridad.",
      "Clave foránea (FK) y relaciones 1:N.",
      "ACID: atomicidad, consistencia, aislamiento, durabilidad.",
      "SQL como lenguaje declarativo vs imperativo.",
      "Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería."
      ],
      content: "## Panorama del tema: MODELO RELACIONAL Y FILOSOFÍA SQL\\n\\nPor qué los datos estructurados siguen siendo el cimiento de sistemas con IA.\\n\\nLas bases relacionales organizan datos en tablas con reglas estrictas de integridad. Una clave primaria identifica cada fila de forma única; las claves foráneas conectan tablas sin duplicar información. ACID garantiza que transacciones complejas no dejen el sistema inconsistente. Para IA, tus datasets de entrenamiento, logs de evaluación y metadata de documentos RAG suelen vivir en SQL o derivados (CSV exportado de SQL). Dominar el modelo relacional te permite diseñar pipelines de datos limpios antes de tocar embeddings o LLMs.\\n\\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\\n\\n## Qué aprenderás en este módulo\\n\\n· Tablas, columnas, filas y esquemas.\\n· Clave primaria (PK) e integridad.\\n· Clave foránea (FK) y relaciones 1:N.\\n· ACID: atomicidad, consistencia, aislamiento, durabilidad.\\n· SQL como lenguaje declarativo vs imperativo.\\n· Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL.\\n· Ejemplo numérico o de código trazado paso a paso.\\n· Pregunta tipo entrevista técnica con respuesta esperada.\\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\\n\\n## Desarrollo teórico detallado\\n\\n## 1. Tablas, columnas, filas y esquemas.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Tablas, columnas, filas y esquemas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tablas, columnas, filas y esquemas.» y cuándo lo evitarías.\\n\\n## 2. Clave primaria (PK) e integridad.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Clave primaria (PK) e integridad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Clave primaria (PK) e integridad.» y cuándo lo evitarías.\\n\\n## 3. Clave foránea (FK) y relaciones 1:N.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Clave foránea (FK) y relaciones 1:N. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Clave foránea (FK) y relaciones 1:N.» y cuándo lo evitarías.\\n\\n## 4. ACID: atomicidad, consistencia, aislamiento, durabilidad.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** ACID: atomicidad, consistencia, aislamiento, durabilidad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «ACID: atomicidad, consistencia, aislamiento, durabilidad.» y cuándo lo evitarías.\\n\\n## 5. SQL como lenguaje declarativo vs imperativo.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** SQL como lenguaje declarativo vs imperativo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SQL como lenguaje declarativo vs imperativo.» y cuándo lo evitarías.\\n\\n## 6. Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL.» y cuándo lo evitarías.\\n\\n## 7. Ejemplo numérico o de código trazado paso a paso.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\\n\\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\\n\\n**Qué es y por qué importa.** Dentro de MODELO RELACIONAL Y FILOSOFÍA SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\\n\\n## Aplicaciones en sistemas reales\\n\\n**Ejemplo 1:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\\n\\n**Ejemplo 2:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\\n\\n**Ejemplo 3:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\\n\\nEstos casos muestran por qué MODELO RELACIONAL Y FILOSOFÍA SQL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\\n\\n## Errores comunes al estudiar\\n\\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\\n\\n## Síntesis para repasar\\n\\nCierra el módulo resumiendo MODELO RELACIONAL Y FILOSOFÍA SQL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación antes de avanzar al siguiente módulo.",
      codeSnippet: `-- Esquema mínimo para usuarios y progreso de curso
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);
CREATE TABLE progress (
  user_id INTEGER REFERENCES users(id),
  module_id INTEGER NOT NULL,
  score INTEGER,
  PRIMARY KEY (user_id, module_id)
);`,
      quiz: [
        {
          question: "Una clave primaria...",
          options: ["Puede repetirse en varias filas", "Identifica de forma única cada fila", "Solo existe en NoSQL"],
          answerIndex: 1,
          explanation: "PK garantiza unicidad por fila."
        },
        {
          question: "Una clave foránea...",
          options: ["Elimina la tabla padre", "Referencia la PK de otra tabla", "Solo sirve para índices"],
          answerIndex: 1,
          explanation: "FK mantiene integridad referencial."
        },
        {
          question: "ACID garantiza...",
          options: ["Solo velocidad", "Transacciones consistentes y duraderas", "Solo funciona en la nube"],
          answerIndex: 1,
          explanation: "Atomicidad y consistencia protegen datos."
        },
        {
          question: "SQL es declarativo porque...",
          options: ["Defines QUÉ quieres, no CÓMO iterar", "Solo funciona en Python", "No permite JOINs"],
          answerIndex: 0,
          explanation: "Describes el resultado deseado."
        },
        {
          question: "Para IA, SQL ayuda a...",
          options: ["Organizar datasets y metadata limpia", "Entrenar GPUs directamente", "Reemplazar todos los LLMs"],
          answerIndex: 0,
          explanation: "Datos estructurados alimentan pipelines ML/RAG."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: Tablas, columnas, filas y esquemas?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Tablas, columnas, filas y esquemas", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tablas, columnas, filas y esquemas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: Clave primaria (PK) e integridad?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Clave primaria (PK) e integridad", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Clave primaria (PK) e integridad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: Clave foránea (FK) y relaciones 1:N?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Clave foránea (FK) y relaciones 1:N", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Clave foránea (FK) y relaciones 1:N. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: ACID: atomicidad, consistencia, aislamiento, durabilidad?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: ACID: atomicidad, consistencia, aislamiento, durabilidad", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que ACID: atomicidad, consistencia, aislamiento, durabilidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: SQL como lenguaje declarativo vs imperativo?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: SQL como lenguaje declarativo vs imperativo", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SQL como lenguaje declarativo vs imperativo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOF...?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Definición operativa de los términos centrales de MODELO RELACIONAL...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de MODELO RELACIONAL Y FILOSOFÍA SQL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES",
      description: "El 80% del trabajo diario con datos: consultar, filtrar y resumir.",
      items: [
      "SELECT columnas vs SELECT *.",
      "WHERE con operadores (=, <>, IN, LIKE, BETWEEN).",
      "ORDER BY ASC/DESC y LIMIT.",
      "COUNT, SUM, AVG, MIN, MAX.",
      "GROUP BY y HAVING para agregaciones filtradas.",
      "Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: SELECT, WHERE, ORDER BY Y AGREGACIONES\n\nEl 80% del trabajo diario con datos: consultar, filtrar y resumir.\n\nSELECT es la puerta de entrada a cualquier análisis de datos. Filtra con WHERE antes de agregar; usa ORDER BY y LIMIT para paginar resultados grandes. Las funciones de agregación resumen millones de filas en una sola respuesta — esencial para dashboards de evaluación de modelos (accuracy promedio por día, tokens consumidos por usuario). GROUP BY segmenta agregaciones; HAVING filtra grupos ya agregados (distinto de WHERE que filtra filas individuales).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· SELECT columnas vs SELECT *.\n· WHERE con operadores (=, <>, IN, LIKE, BETWEEN).\n· ORDER BY ASC/DESC y LIMIT.\n· COUNT, SUM, AVG, MIN, MAX.\n· GROUP BY y HAVING para agregaciones filtradas.\n· Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. SELECT columnas vs SELECT *.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** SELECT columnas vs SELECT *. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SELECT columnas vs SELECT *.» y cuándo lo evitarías.\n\n## 2. WHERE con operadores (=, <>, IN, LIKE, BETWEEN).\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** WHERE con operadores (=, <>, IN, LIKE, BETWEEN). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «WHERE con operadores (=, <>, IN, LIKE, BETWEEN).» y cuándo lo evitarías.\n\n## 3. ORDER BY ASC/DESC y LIMIT.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** ORDER BY ASC/DESC y LIMIT. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «ORDER BY ASC/DESC y LIMIT.» y cuándo lo evitarías.\n\n## 4. COUNT, SUM, AVG, MIN, MAX.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** COUNT, SUM, AVG, MIN, MAX. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «COUNT, SUM, AVG, MIN, MAX.» y cuándo lo evitarías.\n\n## 5. GROUP BY y HAVING para agregaciones filtradas.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** GROUP BY y HAVING para agregaciones filtradas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «GROUP BY y HAVING para agregaciones filtradas.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de SELECT, WHERE, ORDER BY Y AGREGACIONES, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué SELECT, WHERE, ORDER BY Y AGREGACIONES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo SELECT, WHERE, ORDER BY Y AGREGACIONES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `SELECT course_id, COUNT(*) AS completions, AVG(score) AS avg_score
FROM progress
WHERE score >= 70
GROUP BY course_id
HAVING COUNT(*) >= 5
ORDER BY avg_score DESC
LIMIT 10;`,
      quiz: [
        {
          question: "WHERE filtra...",
          options: ["Filas antes de agregar", "Grupos después de GROUP BY", "Solo índices"],
          answerIndex: 0,
          explanation: "WHERE actúa sobre filas individuales."
        },
        {
          question: "HAVING se usa con...",
          options: ["ORDER BY solamente", "GROUP BY para filtrar grupos", "CREATE TABLE"],
          answerIndex: 1,
          explanation: "HAVING filtra resultados agregados."
        },
        {
          question: "COUNT(*) cuenta...",
          options: ["Solo valores no nulos de una columna", "Todas las filas del grupo", "Solo claves primarias duplicadas"],
          answerIndex: 1,
          explanation: "COUNT(*) incluye todas las filas."
        },
        {
          question: "LIMIT 10...",
          options: ["Crea 10 tablas", "Restringe filas devueltas", "Añade 10 columnas"],
          answerIndex: 1,
          explanation: "Paginación y top-N queries."
        },
        {
          question: "AVG(score) devuelve...",
          options: ["La fila con score máximo", "El promedio de score", "La suma de scores"],
          answerIndex: 1,
          explanation: "Función de agregación promedio."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: SELECT columnas vs SELECT *?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: SELECT columnas vs SELECT *", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SELECT columnas vs SELECT *. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: WHERE con operadores (=, <>, IN, LIKE, BETWEEN)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: WHERE con operadores (=, <>, IN, LIKE, BETWEEN)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que WHERE con operadores (=, <>, IN, LIKE, BETWEEN). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: ORDER BY ASC/DESC y LIMIT?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: ORDER BY ASC/DESC y LIMIT", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que ORDER BY ASC/DESC y LIMIT. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: COUNT, SUM, AVG, MIN, MAX?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: COUNT, SUM, AVG, MIN, MAX", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que COUNT, SUM, AVG, MIN, MAX. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: GROUP BY y HAVING para agregaciones filtradas?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: GROUP BY y HAVING para agregaciones filtradas", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que GROUP BY y HAVING para agregaciones filtradas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y A...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de SELECT, WHERE, OR...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de SELECT, WHERE, ORDER BY Y AGREGACIONES. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL",
      description: "Combinar tablas relacionadas sin duplicar datos en application code.",
      items: [
      "INNER JOIN: solo coincidencias en ambas tablas.",
      "LEFT JOIN: todas las filas izquierdas + match derecho.",
      "RIGHT JOIN y FULL OUTER (según motor).",
      "Aliases de tabla (u, p) para legibilidad.",
      "Evitar producto cartesiano sin ON.",
      "Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: JOINs — INNER, LEFT, RIGHT Y FULL\n\nCombinar tablas relacionadas sin duplicar datos en application code.\n\nLos JOINs expresan relaciones entre entidades: usuarios con sus progresos, documentos con sus chunks RAG, evaluaciones con sus preguntas. INNER JOIN devuelve solo filas con match en ambos lados; LEFT JOIN conserva todos los registros de la tabla izquierda aunque no tengan match (útil para 'usuarios sin progreso'). Olvidar la cláusula ON genera producto cartesiano — explosión combinatoria O(n×m) que destruye rendimiento.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· INNER JOIN: solo coincidencias en ambas tablas.\n· LEFT JOIN: todas las filas izquierdas + match derecho.\n· RIGHT JOIN y FULL OUTER (según motor).\n· Aliases de tabla (u, p) para legibilidad.\n· Evitar producto cartesiano sin ON.\n· Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. INNER JOIN: solo coincidencias en ambas tablas.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** INNER JOIN: solo coincidencias en ambas tablas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «INNER JOIN: solo coincidencias en ambas tablas.» y cuándo lo evitarías.\n\n## 2. LEFT JOIN: todas las filas izquierdas + match derecho.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** LEFT JOIN: todas las filas izquierdas + match derecho. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «LEFT JOIN: todas las filas izquierdas + match derecho.» y cuándo lo evitarías.\n\n## 3. RIGHT JOIN y FULL OUTER (según motor).\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** RIGHT JOIN y FULL OUTER (según motor). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «RIGHT JOIN y FULL OUTER (según motor).» y cuándo lo evitarías.\n\n## 4. Aliases de tabla (u, p) para legibilidad.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aliases de tabla (u, p) para legibilidad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aliases de tabla (u, p) para legibilidad.» y cuándo lo evitarías.\n\n## 5. Evitar producto cartesiano sin ON.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Evitar producto cartesiano sin ON. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evitar producto cartesiano sin ON.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de JOINs — INNER, LEFT, RIGHT Y FULL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué JOINs — INNER, LEFT, RIGHT Y FULL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo JOINs — INNER, LEFT, RIGHT Y FULL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `SELECT u.email, p.module_id, p.score
FROM users u
LEFT JOIN progress p ON p.user_id = u.id
WHERE u.email LIKE '%@quimisell.com';`,
      quiz: [
        {
          question: "INNER JOIN devuelve...",
          options: ["Todas las filas de ambas tablas siempre", "Solo filas con match en ambas", "Solo la tabla izquierda"],
          answerIndex: 1,
          explanation: "Intersección de claves relacionadas."
        },
        {
          question: "LEFT JOIN conserva...",
          options: ["Solo matches", "Todas las filas de la tabla izquierda", "Ninguna fila sin score"],
          answerIndex: 1,
          explanation: "Filas izq. + match der. o NULL."
        },
        {
          question: "Producto cartesiano ocurre cuando...",
          options: ["Falta cláusula ON/WHERE de join", "Usas LIMIT", "Hay índice"],
          answerIndex: 0,
          explanation: "Cada fila × cada fila = disaster."
        },
        {
          question: "Alias u.email significa...",
          options: ["Tabla users renombrada u", "Columna universal", "Unión de tablas"],
          answerIndex: 0,
          explanation: "Aliases mejoran legibilidad."
        },
        {
          question: "JOINs son O(n×m) peor caso sin índice porque...",
          options: ["SQL es lento por diseño", "Nested loop compare cada par de filas", "JOINs no usan memoria"],
          answerIndex: 1,
          explanation: "Por eso índices en FK son críticos."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: INNER JOIN: solo coincidencias en ambas tablas?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: INNER JOIN: solo coincidencias en ambas tablas", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que INNER JOIN: solo coincidencias en ambas tablas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: LEFT JOIN: todas las filas izquierdas + match derecho?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: LEFT JOIN: todas las filas izquierdas + match derecho", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que LEFT JOIN: todas las filas izquierdas + match derecho. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: RIGHT JOIN y FULL OUTER (según motor)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: RIGHT JOIN y FULL OUTER (según motor)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que RIGHT JOIN y FULL OUTER (según motor). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: Aliases de tabla (u, p) para legibilidad?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aliases de tabla (u, p) para legibilidad", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aliases de tabla (u, p) para legibilidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: Evitar producto cartesiano sin ON?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Evitar producto cartesiano sin ON", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evitar producto cartesiano sin ON. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT ...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición operativa de los términos centrales de JOINs — INNER, LE...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de JOINs — INNER, LEFT, RIGHT Y FULL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO",
      description: "Big-O en bases de datos: de full table scan a lookup O(log n).",
      items: [
      "B-tree index: búsqueda logarítmica típica.",
      "Índices en columnas de WHERE y JOIN.",
      "EXPLAIN / EXPLAIN ANALYZE lee el plan.",
      "Full table scan O(n) vs index scan O(log n).",
      "Trade-off: índices aceleran lectura, ralentizan escritura.",
      "Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: ÍNDICES, EXPLAIN Y RENDIMIENTO\n\nBig-O en bases de datos: de full table scan a lookup O(log n).\n\nSin índice, cada SELECT recorre todas las filas — O(n). Un índice B-tree reduce búsquedas a O(log n). EXPLAIN muestra si el optimizador usa index scan o seq scan. Para RAG con millones de chunks, índices en metadata (document_id, page) son obligatorios; los índices vectoriales (HNSW, IVF) son capa adicional sobre embeddings. No indexes everything: cada índice cuesta espacio y ralentiza INSERT/UPDATE.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· B-tree index: búsqueda logarítmica típica.\n· Índices en columnas de WHERE y JOIN.\n· EXPLAIN / EXPLAIN ANALYZE lee el plan.\n· Full table scan O(n) vs index scan O(log n).\n· Trade-off: índices aceleran lectura, ralentizan escritura.\n· Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. B-tree index: búsqueda logarítmica típica.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** B-tree index: búsqueda logarítmica típica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «B-tree index: búsqueda logarítmica típica.» y cuándo lo evitarías.\n\n## 2. Índices en columnas de WHERE y JOIN.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Índices en columnas de WHERE y JOIN. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Índices en columnas de WHERE y JOIN.» y cuándo lo evitarías.\n\n## 3. EXPLAIN / EXPLAIN ANALYZE lee el plan.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** EXPLAIN / EXPLAIN ANALYZE lee el plan. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «EXPLAIN / EXPLAIN ANALYZE lee el plan.» y cuándo lo evitarías.\n\n## 4. Full table scan O(n) vs index scan O(log n).\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Full table scan O(n) vs index scan O(log n). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Full table scan O(n) vs index scan O(log n).» y cuándo lo evitarías.\n\n## 5. Trade-off: índices aceleran lectura, ralentizan escritura.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Trade-off: índices aceleran lectura, ralentizan escritura. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Trade-off: índices aceleran lectura, ralentizan escritura.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de ÍNDICES, EXPLAIN Y RENDIMIENTO, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué ÍNDICES, EXPLAIN Y RENDIMIENTO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ÍNDICES, EXPLAIN Y RENDIMIENTO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `CREATE INDEX idx_progress_user ON progress(user_id);
EXPLAIN QUERY PLAN
SELECT * FROM progress WHERE user_id = 42;`,
      quiz: [
        {
          question: "Full table scan es...",
          options: ["O(log n)", "O(n) — recorre todas las filas", "O(1) siempre"],
          answerIndex: 1,
          explanation: "Peor caso lineal en tamaño de tabla."
        },
        {
          question: "Índice B-tree típico acelerca búsquedas a...",
          options: ["O(n²)", "O(log n)", "O(1) exacto siempre"],
          answerIndex: 1,
          explanation: "Estructura balanceada logarítmica."
        },
        {
          question: "EXPLAIN sirve para...",
          options: ["Insertar datos", "Ver plan de ejecución del optimizador", "Crear usuarios"],
          answerIndex: 1,
          explanation: "Diagnóstico de rendimiento."
        },
        {
          question: "Demasiados índices...",
          options: ["Siempre mejoran todo", "Ralentizan escrituras y ocupan disco", "Eliminan JOINs"],
          answerIndex: 1,
          explanation: "Trade-off lectura vs escritura."
        },
        {
          question: "Indexar columnas en WHERE/JOIN...",
          options: ["Es anti-patrón", "Reduce scans innecesarios", "Solo en SQLite"],
          answerIndex: 1,
          explanation: "Columnas de filtro frecuente."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: B-tree index: búsqueda logarítmica típica?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: B-tree index: búsqueda logarítmica típica", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que B-tree index: búsqueda logarítmica típica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: Índices en columnas de WHERE y JOIN?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Índices en columnas de WHERE y JOIN", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Índices en columnas de WHERE y JOIN. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: EXPLAIN / EXPLAIN ANALYZE lee el plan?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: EXPLAIN / EXPLAIN ANALYZE lee el plan", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que EXPLAIN / EXPLAIN ANALYZE lee el plan. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: Full table scan O(n) vs index scan O(log n)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Full table scan O(n) vs index scan O(log n)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Full table scan O(n) vs index scan O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: Trade-off: índices aceleran lectura, ralentizan escritura?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Trade-off: índices aceleran lectura, ralentizan escritura", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Trade-off: índices aceleran lectura, ralentizan escritura. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Definición operativa de los términos centrales de ÍNDICES, EXPLAIN ...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de ÍNDICES, EXPLAIN Y RENDIMIENTO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS",
      description: "Eliminar redundancia sin perder flexibilidad para analytics e IA.",
      items: [
      "1FN: valores atómicos, sin listas en celdas.",
      "2FN: dependencia completa de PK.",
      "3FN: sin dependencias transitivas.",
      "Desnormalización controlada para lecturas hot.",
      "Star schema para data warehouses.",
      "Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS\n\nEliminar redundancia sin perder flexibilidad para analytics e IA.\n\nNormalizar reduce anomalías de actualización: si el nombre del curso se repite en 10.000 filas de progreso, un cambio requiere 10.000 UPDATEs. 3FN separa entidades en tablas relacionadas. En analytics e IA, a veces desnormalizas deliberadamente (columnas calculadas, JSON embebido) para evitar JOINs costosos en inferencia batch. El arte está en saber cuándo normalizar (OLTP) y cuándo desnormalizar (OLAP, feature stores).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· 1FN: valores atómicos, sin listas en celdas.\n· 2FN: dependencia completa de PK.\n· 3FN: sin dependencias transitivas.\n· Desnormalización controlada para lecturas hot.\n· Star schema para data warehouses.\n· Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. 1FN: valores atómicos, sin listas en celdas.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** 1FN: valores atómicos, sin listas en celdas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «1FN: valores atómicos, sin listas en celdas.» y cuándo lo evitarías.\n\n## 2. 2FN: dependencia completa de PK.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** 2FN: dependencia completa de PK. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «2FN: dependencia completa de PK.» y cuándo lo evitarías.\n\n## 3. 3FN: sin dependencias transitivas.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** 3FN: sin dependencias transitivas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «3FN: sin dependencias transitivas.» y cuándo lo evitarías.\n\n## 4. Desnormalización controlada para lecturas hot.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Desnormalización controlada para lecturas hot. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Desnormalización controlada para lecturas hot.» y cuándo lo evitarías.\n\n## 5. Star schema para data warehouses.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Star schema para data warehouses. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Star schema para data warehouses.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué NORMALIZACIÓN Y DISEÑO DE ESQUEMAS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo NORMALIZACIÓN Y DISEÑO DE ESQUEMAS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `-- Anti-patrón: curso_title repetido en cada fila
-- Correcto: FK a courses(id)
CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT);
CREATE TABLE progress (user_id INT, course_id INT REFERENCES courses(id), score INT);`,
      quiz: [
        {
          question: "1FN exige...",
          options: ["Valores atómicos por celda", "Solo claves compuestas", "JSON obligatorio"],
          answerIndex: 0,
          explanation: "No arrays ni listas en una celda."
        },
        {
          question: "3FN elimina...",
          options: ["Claves primarias", "Dependencias transitivas", "Todos los JOINs"],
          answerIndex: 1,
          explanation: "Columnas que dependen de no-PK vía otra no-PK."
        },
        {
          question: "Desnormalización se usa cuando...",
          options: ["Lecturas hot necesitan menos JOINs", "Nunca es válida", "Solo en Excel"],
          answerIndex: 0,
          explanation: "Trade-off con consistencia."
        },
        {
          question: "Redundancia de datos causa...",
          options: ["Anomalías de actualización", "Siempre mejor rendimiento", "Más integridad automática"],
          answerIndex: 0,
          explanation: "Datos duplicados se desincronizan."
        },
        {
          question: "Star schema es común en...",
          options: ["OLTP transaccional", "Data warehouses y BI", "Solo Redis"],
          answerIndex: 1,
          explanation: "Hechos + dimensiones para analytics."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: 1FN: valores atómicos, sin listas en celdas?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: 1FN: valores atómicos, sin listas en celdas", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que 1FN: valores atómicos, sin listas en celdas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: 2FN: dependencia completa de PK?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: 2FN: dependencia completa de PK", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que 2FN: dependencia completa de PK. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: 3FN: sin dependencias transitivas?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: 3FN: sin dependencias transitivas", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que 3FN: sin dependencias transitivas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: Desnormalización controlada para lecturas hot?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Desnormalización controlada para lecturas hot", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Desnormalización controlada para lecturas hot. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: Star schema para data warehouses?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Star schema para data warehouses", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Star schema para data warehouses. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE E...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de NORMALIZACIÓN Y D...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de NORMALIZACIÓN Y DISEÑO DE ESQUEMAS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: SQLITE — BASE EMBEBIDA $0",
      description: "Prototipos, apps móviles y edge sin servidor de base de datos.",
      items: [
      "SQLite: archivo .db, cero configuración.",
      "WAL mode para concurrencia lectura/escritura.",
      "Ideal para apps offline-first.",
      "Límite: no reemplaza Postgres en multi-tenant grande.",
      "Integración: better-sqlite3, SQLAlchemy, Room (Android).",
      "Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: SQLITE — BASE EMBEBIDA $0\n\nPrototipos, apps móviles y edge sin servidor de base de datos.\n\nSQLite es la base más desplegada del mundo: cada smartphone, browser y app embebida. Un solo archivo .db, sin daemon, perfecto para QuimiSell offline-first cuando exportas progreso a JSON pero quieres queries locales complejas. WAL (Write-Ahead Logging) permite lecturas concurrentes durante escrituras. Para Linux Lingo APK, Room (Android) usa SQLite bajo el capó. Límite: escrituras concurrentes heavy → considera Postgres; para MVPs y edge, SQLite gana.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· SQLite: archivo .db, cero configuración.\n· WAL mode para concurrencia lectura/escritura.\n· Ideal para apps offline-first.\n· Límite: no reemplaza Postgres en multi-tenant grande.\n· Integración: better-sqlite3, SQLAlchemy, Room (Android).\n· Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. SQLite: archivo .db, cero configuración.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** SQLite: archivo .db, cero configuración. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SQLite: archivo .db, cero configuración.» y cuándo lo evitarías.\n\n## 2. WAL mode para concurrencia lectura/escritura.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** WAL mode para concurrencia lectura/escritura. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «WAL mode para concurrencia lectura/escritura.» y cuándo lo evitarías.\n\n## 3. Ideal para apps offline-first.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ideal para apps offline-first. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ideal para apps offline-first.» y cuándo lo evitarías.\n\n## 4. Límite: no reemplaza Postgres en multi-tenant grande.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Límite: no reemplaza Postgres en multi-tenant grande. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Límite: no reemplaza Postgres en multi-tenant grande.» y cuándo lo evitarías.\n\n## 5. Integración: better-sqlite3, SQLAlchemy, Room (Android).\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Integración: better-sqlite3, SQLAlchemy, Room (Android). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Integración: better-sqlite3, SQLAlchemy, Room (Android).» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de SQLITE — BASE EMBEBIDA $0, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\n**Ejemplo 2:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\n**Ejemplo 3:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\nEstos casos muestran por qué SQLITE — BASE EMBEBIDA $0 no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo SQLITE — BASE EMBEBIDA $0 en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `-- SQLite CLI
.open quimisell.db
CREATE TABLE modules (id INTEGER PRIMARY KEY, title TEXT);
INSERT INTO modules VALUES (1, 'Git Fundamentals');
SELECT * FROM modules;`,
      quiz: [
        {
          question: "SQLite almacena datos en...",
          options: ["Servidor remoto obligatorio", "Un archivo local .db", "Solo memoria volátil"],
          answerIndex: 1,
          explanation: "Base embebida sin daemon."
        },
        {
          question: "WAL mode mejora...",
          options: ["Concurrencia lectura/escritura", "Encriptación automática", "Solo backups"],
          answerIndex: 0,
          explanation: "Write-Ahead Logging."
        },
        {
          question: "SQLite es ideal para...",
          options: ["Apps offline-first y prototipos", "Cluster multi-master global", "Solo data centers"],
          answerIndex: 0,
          explanation: "Edge y mobile first."
        },
        {
          question: "Room en Android usa...",
          options: ["MongoDB", "SQLite", "Firebase obligatorio"],
          answerIndex: 1,
          explanation: "ORM sobre SQLite."
        },
        {
          question: "SQLite no reemplaza Postgres cuando...",
          options: ["Multi-tenant con alta concurrencia write", "Prototipas local", "App móvil offline"],
          answerIndex: 0,
          explanation: "Escalabilidad write-heavy."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: SQLite: archivo .db, cero configuración?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: SQLite: archivo .db, cero configuración", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SQLite: archivo .db, cero configuración. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: WAL mode para concurrencia lectura/escritura?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: WAL mode para concurrencia lectura/escritura", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que WAL mode para concurrencia lectura/escritura. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: Ideal para apps offline-first?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Ideal para apps offline-first", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ideal para apps offline-first. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: Límite: no reemplaza Postgres en multi-tenant grande?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Límite: no reemplaza Postgres en multi-tenant grande", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Límite: no reemplaza Postgres en multi-tenant grande. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: Integración: better-sqlite3, SQLAlchemy, Room (Android)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Integración: better-sqlite3, SQLAlchemy, Room (Android)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Integración: better-sqlite3, SQLAlchemy, Room (Android). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de SQLITE — BASE EMB...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de SQLITE — BASE EMBEBIDA $0. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: SQLITE — BASE EMBEBIDA $0', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL",
      description: "Flexibilidad NoSQL dentro del ecosistema relacional.",
      items: [
      "JSON/JSONB columns (Postgres, SQLite 3.38+).",
      "Operadores -> y ->> para extracción.",
      "Indexar campos JSON con expresiones.",
      "Cuándo JSON vs columnas normalizadas.",
      "Schema-on-read vs schema-on-write.",
      "Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL\n\nFlexibilidad NoSQL dentro del ecosistema relacional.\n\nNo todo encaja en columnas fijas: metadata de chunks RAG, hyperparameters de modelos, respuestas de LLM con estructura variable. JSON en SQL da flexibilidad sin abandonar ACID. Postgres JSONB es binario e indexable; SQLite soporta funciones json_extract. Anti-patrón: meter todo en un blob JSON sin índices — pierdes ventajas relacionales. Regla: normaliza entidades core; JSON para extensiones y metadata evolutiva.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· JSON/JSONB columns (Postgres, SQLite 3.38+).\n· Operadores -> y ->> para extracción.\n· Indexar campos JSON con expresiones.\n· Cuándo JSON vs columnas normalizadas.\n· Schema-on-read vs schema-on-write.\n· Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. JSON/JSONB columns (Postgres, SQLite 3.38+).\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** JSON/JSONB columns (Postgres, SQLite 3.38+). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «JSON/JSONB columns (Postgres, SQLite 3.38+).» y cuándo lo evitarías.\n\n## 2. Operadores -> y ->> para extracción.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Operadores -> y ->> para extracción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Operadores -> y ->> para extracción.» y cuándo lo evitarías.\n\n## 3. Indexar campos JSON con expresiones.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Indexar campos JSON con expresiones. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Indexar campos JSON con expresiones.» y cuándo lo evitarías.\n\n## 4. Cuándo JSON vs columnas normalizadas.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cuándo JSON vs columnas normalizadas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cuándo JSON vs columnas normalizadas.» y cuándo lo evitarías.\n\n## 5. Schema-on-read vs schema-on-write.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Schema-on-read vs schema-on-write. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Schema-on-read vs schema-on-write.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `SELECT id, json_extract(metadata, '$.page') AS page
FROM document_chunks
WHERE json_extract(metadata, '$.lang') = 'es';`,
      quiz: [
        {
          question: "JSONB en Postgres es...",
          options: ["Solo texto plano", "Formato binario optimizado e indexable", "No queryable"],
          answerIndex: 1,
          explanation: "JSON binario con operadores."
        },
        {
          question: "json_extract en SQLite...",
          options: ["Elimina la tabla", "Lee campos anidados del JSON", "Solo funciona en MySQL"],
          answerIndex: 1,
          explanation: "Extracción de paths JSON."
        },
        {
          question: "Schema-on-read significa...",
          options: ["Estructura al consultar, flexible al escribir", "Esquema fijo al insertar", "Sin validación nunca"],
          answerIndex: 0,
          explanation: "Flexibilidad diferida."
        },
        {
          question: "JSON para metadata RAG guarda...",
          options: ["Solo embeddings", "page, source, lang, timestamps", "Solo imágenes"],
          answerIndex: 1,
          explanation: "Contexto del chunk."
        },
        {
          question: "Anti-patrón: todo en JSON sin índices...",
          options: ["Siempre óptimo", "Full scan en cada query JSON", "Mejora normalización"],
          answerIndex: 1,
          explanation: "Indexa campos query frecuentes."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: JSON/JSONB columns (Postgres, SQLite 3.38+)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: JSON/JSONB columns (Postgres, SQLite 3.38+)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que JSON/JSONB columns (Postgres, SQLite 3.38+). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Operadores -> y ->> para extracción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Operadores -> y ->> para extracción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operadores -> y ->> para extracción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Indexar campos JSON con expresiones?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Indexar campos JSON con expresiones", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Indexar campos JSON con expresiones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Cuándo JSON vs columnas normalizadas?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Cuándo JSON vs columnas normalizadas", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cuándo JSON vs columnas normalizadas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Schema-on-read vs schema-on-write?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Schema-on-read vs schema-on-write", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Schema-on-read vs schema-on-write. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTUR...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de JSON Y DATOS SEMI...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL",
      description: "Fundamentos matemáticos del retrieval semántico para RAG.",
      items: [
      "Embedding: vector denso que captura significado.",
      "Similaridad coseno vs distancia euclídea.",
      "k-NN: encontrar k vectores más cercanos.",
      "Índices ANN: HNSW, IVF (O(log n) aprox).",
      "pgvector, Chroma, FAISS, sqlite-vec.",
      "Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: EMBEDDINGS Y BÚSQUEDA VECTORIAL\n\nFundamentos matemáticos del retrieval semántico para RAG.\n\nUn embedding convierte texto en vector R^d (384, 768, 1536 dims). Búsqueda semántica encuentra chunks similares por coseno, no por keyword match. k-NN naive es O(n×d) — inviable con millones de vectores. Índices ANN (HNSW) aproximan nearest neighbors en O(log n) con recall >95%. Para QuimiSell $0: sqlite-vec o Chroma local; en producción pgvector. Los embeddings se generan offline; la DB vectorial solo almacena y busca.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Embedding: vector denso que captura significado.\n· Similaridad coseno vs distancia euclídea.\n· k-NN: encontrar k vectores más cercanos.\n· Índices ANN: HNSW, IVF (O(log n) aprox).\n· pgvector, Chroma, FAISS, sqlite-vec.\n· Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Embedding: vector denso que captura significado.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Embedding: vector denso que captura significado. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Embedding: vector denso que captura significado.» y cuándo lo evitarías.\n\n## 2. Similaridad coseno vs distancia euclídea.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Similaridad coseno vs distancia euclídea. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Similaridad coseno vs distancia euclídea.» y cuándo lo evitarías.\n\n## 3. k-NN: encontrar k vectores más cercanos.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** k-NN: encontrar k vectores más cercanos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «k-NN: encontrar k vectores más cercanos.» y cuándo lo evitarías.\n\n## 4. Índices ANN: HNSW, IVF (O(log n) aprox).\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Índices ANN: HNSW, IVF (O(log n) aprox). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Índices ANN: HNSW, IVF (O(log n) aprox).» y cuándo lo evitarías.\n\n## 5. pgvector, Chroma, FAISS, sqlite-vec.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** pgvector, Chroma, FAISS, sqlite-vec. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «pgvector, Chroma, FAISS, sqlite-vec.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de EMBEDDINGS Y BÚSQUEDA VECTORIAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 2:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\n**Ejemplo 3:** RAG en producción chunk documentos con metadata page/source para citas verificables al usuario.\n\nEstos casos muestran por qué EMBEDDINGS Y BÚSQUEDA VECTORIAL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo EMBEDDINGS Y BÚSQUEDA VECTORIAL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Similaridad coseno (concepto)
# cos(a,b) = dot(a,b) / (||a|| * ||b||)
# k-NN: ordenar por cos desc, tomar top-k chunks`,
      quiz: [
        {
          question: "Un embedding es...",
          options: ["Un hash MD5 del texto", "Vector denso que captura significado", "Solo un entero"],
          answerIndex: 1,
          explanation: "Representación numérica semántica."
        },
        {
          question: "Similaridad coseno mide...",
          options: ["Ángulo entre vectores (semántica)", "Solo longitud de texto", "Frecuencia de palabras"],
          answerIndex: 0,
          explanation: "Independiente de magnitud."
        },
        {
          question: "k-NN naive es O(n) porque...",
          options: ["Compara query con cada vector almacenado", "Usa solo índices B-tree", "Es O(1) con GPU"],
          answerIndex: 0,
          explanation: "Linear scan sin índice ANN."
        },
        {
          question: "HNSW es un índice...",
          options: ["ANN aproximado para vectores", "Solo para SQL joins", "De normalización"],
          answerIndex: 0,
          explanation: "Hierarchical Navigable Small World."
        },
        {
          question: "pgvector extiende...",
          options: ["Excel", "Postgres con columnas vector", "Git"],
          answerIndex: 1,
          explanation: "Tipo vector + operadores en Postgres."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: Embedding: vector denso que captura significado?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Embedding: vector denso que captura significado", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Embedding: vector denso que captura significado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: Similaridad coseno vs distancia euclídea?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Similaridad coseno vs distancia euclídea", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Similaridad coseno vs distancia euclídea. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: k-NN: encontrar k vectores más cercanos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: k-NN: encontrar k vectores más cercanos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que k-NN: encontrar k vectores más cercanos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: Índices ANN: HNSW, IVF (O(log n) aprox)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Índices ANN: HNSW, IVF (O(log n) aprox)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Índices ANN: HNSW, IVF (O(log n) aprox). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: pgvector, Chroma, FAISS, sqlite-vec?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: pgvector, Chroma, FAISS, sqlite-vec", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que pgvector, Chroma, FAISS, sqlite-vec. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTO...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQ...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de EMBEDDINGS Y BÚSQUEDA VECTORIAL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL",
      description: "Arquitectura completa de Retrieval-Augmented Generation.",
      items: [
      "Ingesta: PDF/HTML → texto limpio.",
      "Chunking: tamaño, overlap, separadores.",
      "Metadata: source, page, section para citas.",
      "Retrieval: top-k + reranking opcional.",
      "Augment: prompt = context + pregunta usuario.",
      "Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL\n\nArquitectura completa de Retrieval-Augmented Generation.\n\nRAG combina búsqueda vectorial con LLM: retrieve chunks relevantes, inyecta en prompt, genera respuesta anclada en datos reales. Chunking crítico: muy pequeño pierde contexto; muy grande diluye relevancia. Overlap 10-20% evita cortar frases. Metadata permite citar fuentes ('según módulo 4...'). Reranking (cross-encoder) mejora precision@k. Sin retrieval de calidad, el LLM alucina — garbage in, garbage out.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Ingesta: PDF/HTML → texto limpio.\n· Chunking: tamaño, overlap, separadores.\n· Metadata: source, page, section para citas.\n· Retrieval: top-k + reranking opcional.\n· Augment: prompt = context + pregunta usuario.\n· Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Ingesta: PDF/HTML → texto limpio.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ingesta: PDF/HTML → texto limpio. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ingesta: PDF/HTML → texto limpio.» y cuándo lo evitarías.\n\n## 2. Chunking: tamaño, overlap, separadores.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Chunking: tamaño, overlap, separadores. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Chunking: tamaño, overlap, separadores.» y cuándo lo evitarías.\n\n## 3. Metadata: source, page, section para citas.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Metadata: source, page, section para citas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Metadata: source, page, section para citas.» y cuándo lo evitarías.\n\n## 4. Retrieval: top-k + reranking opcional.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Retrieval: top-k + reranking opcional. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Retrieval: top-k + reranking opcional.» y cuándo lo evitarías.\n\n## 5. Augment: prompt = context + pregunta usuario.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Augment: prompt = context + pregunta usuario. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Augment: prompt = context + pregunta usuario.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\n**Ejemplo 2:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\n**Ejemplo 3:** SQLite en Android (Room) persiste progreso offline — mismo patrón que localStorage en esta plataforma.\n\nEstos casos muestran por qué PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Pipeline RAG simplificado
# 1. chunk(document) → [{text, metadata}, ...]
# 2. embed(chunks) → vectors
# 3. store(vectors, metadata) in vector DB
# 4. query → embed(query) → top_k → prompt → LLM`,
      quiz: [
        {
          question: "RAG significa...",
          options: ["Retrieval-Augmented Generation", "Random Access Git", "Recurrent Auto Gradient"],
          answerIndex: 0,
          explanation: "Generación aumentada con retrieval."
        },
        {
          question: "Chunk overlap evita...",
          options: ["Cortar contexto en límites de chunk", "Usar embeddings", "Guardar metadata"],
          answerIndex: 0,
          explanation: "Continuidad entre fragmentos."
        },
        {
          question: "Metadata en chunks permite...",
          options: ["Citar fuentes en respuestas", "Eliminar el LLM", "Solo decoración"],
          answerIndex: 0,
          explanation: "Trazabilidad y confianza."
        },
        {
          question: "Reranking mejora...",
          options: ["Precision del top-k recuperado", "Solo velocidad de GPU", "Encriptación"],
          answerIndex: 0,
          explanation: "Cross-encoder reordena candidatos."
        },
        {
          question: "Sin retrieval de calidad...",
          options: ["El LLM siempre acierta", "Aumenta alucinaciones", "No afecta respuestas"],
          answerIndex: 1,
          explanation: "Garbage in, garbage out."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Ingesta: PDF/HTML → texto limpio?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ingesta: PDF/HTML → texto limpio", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ingesta: PDF/HTML → texto limpio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Chunking: tamaño, overlap, separadores?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Chunking: tamaño, overlap, separadores", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Chunking: tamaño, overlap, separadores. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Metadata: source, page, section para citas?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Metadata: source, page, section para citas", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Metadata: source, page, section para citas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Retrieval: top-k + reranking opcional?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Retrieval: top-k + reranking opcional", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Retrieval: top-k + reranking opcional. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Augment: prompt = context + pregunta usuario?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Augment: prompt = context + pregunta usuario", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Augment: prompt = context + pregunta usuario. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, ME...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición operativa de los términos centrales de PIPELINE RAG — CH...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL",
      description: "localStorage, SQLite, export JSON y cuándo escalar sin factura.",
      items: [
      "localStorage: progreso web sin backend (esta plataforma).",
      "Export/import JSON para backup portable.",
      "SQLite en APK para datos offline.",
      "Supabase free tier / Turso cuando crezcas.",
      "Principio: datos locales primero, sync opcional.",
      "Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL\n\nlocalStorage, SQLite, export JSON y cuándo escalar sin factura.\n\nQuimiSell opera $0: esta Master Class guarda progreso en localStorage; export JSON para backup. Linux Lingo APK usará SQLite/Room para vocabulario y progreso on-device. RAG local con sqlite-vec + modelo embebido evita APIs pagas. Cuando escales: Supabase Postgres free tier o Turso (SQLite edge). Regla de oro: no pagues cloud hasta que localStorage/SQLite no basten. Privacidad y costo cero alineados con el manifiesto on-device.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· localStorage: progreso web sin backend (esta plataforma).\n· Export/import JSON para backup portable.\n· SQLite en APK para datos offline.\n· Supabase free tier / Turso cuando crezcas.\n· Principio: datos locales primero, sync opcional.\n· Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. localStorage: progreso web sin backend (esta plataforma).\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** localStorage: progreso web sin backend (esta plataforma). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «localStorage: progreso web sin backend (esta plataforma).» y cuándo lo evitarías.\n\n## 2. Export/import JSON para backup portable.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Export/import JSON para backup portable. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Export/import JSON para backup portable.» y cuándo lo evitarías.\n\n## 3. SQLite en APK para datos offline.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** SQLite en APK para datos offline. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SQLite en APK para datos offline.» y cuándo lo evitarías.\n\n## 4. Supabase free tier / Turso cuando crezcas.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Supabase free tier / Turso cuando crezcas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Supabase free tier / Turso cuando crezcas.» y cuándo lo evitarías.\n\n## 5. Principio: datos locales primero, sync opcional.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Principio: datos locales primero, sync opcional. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Principio: datos locales primero, sync opcional.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL, este punto es central en datos relacionales, pipelines RAG y retrieval semántico. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\n\n**Ejemplo 2:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\n\n**Ejemplo 3:** PostgreSQL con pgvector indexa millones de embeddings; k-NN naive O(n) colapsa sin índice HNSW.\n\nEstos casos muestran por qué ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `// Progreso QuimiSell (localStorage, O(1) read/write por clave)
localStorage.setItem('quimisell-progress', JSON.stringify({
  git_devops_vercel: { completedModules: [1, 2, 3] }
}));`,
      quiz: [
        {
          question: "Esta plataforma QuimiSell guarda progreso en...",
          options: ["MongoDB Atlas pago", "localStorage sin backend", "Oracle Enterprise"],
          answerIndex: 1,
          explanation: "Offline-first $0."
        },
        {
          question: "Export JSON permite...",
          options: ["Backup portable del progreso", "Entrenar GPT-4 automáticamente", "Eliminar quizzes"],
          answerIndex: 0,
          explanation: "Portabilidad sin servidor."
        },
        {
          question: "Linux Lingo APK debería usar...",
          options: ["SQLite/Room on-device", "Solo APIs OpenAI", "Excel en la nube"],
          answerIndex: 0,
          explanation: "Datos locales en el teléfono."
        },
        {
          question: "RAG local evita...",
          options: ["Costos por token de API y fuga de datos", "Todo procesamiento", "Embeddings"],
          answerIndex: 0,
          explanation: "Privacidad + $0 API."
        },
        {
          question: "Escalar datos cuando...",
          options: ["localStorage/SQLite ya no bastan", "Siempre el día 1", "Nunca"],
          answerIndex: 0,
          explanation: "Pragmatismo QuimiSell."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: localStorage: progreso web sin backend (esta plataforma)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: localStorage: progreso web sin backend (esta plataforma)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que localStorage: progreso web sin backend (esta plataforma). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: Export/import JSON para backup portable?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Export/import JSON para backup portable", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Export/import JSON para backup portable. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: SQLite en APK para datos offline?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: SQLite en APK para datos offline", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SQLite en APK para datos offline. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: Supabase free tier / Turso cuando crezcas?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Supabase free tier / Turso cuando crezcas", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Supabase free tier / Turso cuando crezcas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: Principio: datos locales primero, sync opcional?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Principio: datos locales primero, sync opcional", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Principio: datos locales primero, sync opcional. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de ESTRATEGIA DE DAT...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
