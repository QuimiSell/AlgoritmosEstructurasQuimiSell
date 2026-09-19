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
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL",
      description: "Por qué los datos estructurados siguen siendo el cimiento de sistemas con IA.",
      items: [
        "Tablas, columnas, filas y esquemas.",
        "Clave primaria (PK) e integridad.",
        "Clave foránea (FK) y relaciones 1:N.",
        "ACID: atomicidad, consistencia, aislamiento, durabilidad.",
        "SQL como lenguaje declarativo vs imperativo."
      ],
      content: "Las bases relacionales organizan datos en tablas con reglas estrictas de integridad. Una clave primaria identifica cada fila de forma única; las claves foráneas conectan tablas sin duplicar información. ACID garantiza que transacciones complejas no dejen el sistema inconsistente. Para IA, tus datasets de entrenamiento, logs de evaluación y metadata de documentos RAG suelen vivir en SQL o derivados (CSV exportado de SQL). Dominar el modelo relacional te permite diseñar pipelines de datos limpios antes de tocar embeddings o LLMs.",
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
        "GROUP BY y HAVING para agregaciones filtradas."
      ],
      content: "SELECT es la puerta de entrada a cualquier análisis de datos. Filtra con WHERE antes de agregar; usa ORDER BY y LIMIT para paginar resultados grandes. Las funciones de agregación resumen millones de filas en una sola respuesta — esencial para dashboards de evaluación de modelos (accuracy promedio por día, tokens consumidos por usuario). GROUP BY segmenta agregaciones; HAVING filtra grupos ya agregados (distinto de WHERE que filtra filas individuales).",
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
        "Evitar producto cartesiano sin ON."
      ],
      content: "Los JOINs expresan relaciones entre entidades: usuarios con sus progresos, documentos con sus chunks RAG, evaluaciones con sus preguntas. INNER JOIN devuelve solo filas con match en ambos lados; LEFT JOIN conserva todos los registros de la tabla izquierda aunque no tengan match (útil para 'usuarios sin progreso'). Olvidar la cláusula ON genera producto cartesiano — explosión combinatoria O(n×m) que destruye rendimiento.",
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
        "Trade-off: índices aceleran lectura, ralentizan escritura."
      ],
      content: "Sin índice, cada SELECT recorre todas las filas — O(n). Un índice B-tree reduce búsquedas a O(log n). EXPLAIN muestra si el optimizador usa index scan o seq scan. Para RAG con millones de chunks, índices en metadata (document_id, page) son obligatorios; los índices vectoriales (HNSW, IVF) son capa adicional sobre embeddings. No indexes everything: cada índice cuesta espacio y ralentiza INSERT/UPDATE.",
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
        "Star schema para data warehouses."
      ],
      content: "Normalizar reduce anomalías de actualización: si el nombre del curso se repite en 10.000 filas de progreso, un cambio requiere 10.000 UPDATEs. 3FN separa entidades en tablas relacionadas. En analytics e IA, a veces desnormalizas deliberadamente (columnas calculadas, JSON embebido) para evitar JOINs costosos en inferencia batch. El arte está en saber cuándo normalizar (OLTP) y cuándo desnormalizar (OLAP, feature stores).",
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
        "Integración: better-sqlite3, SQLAlchemy, Room (Android)."
      ],
      content: "SQLite es la base más desplegada del mundo: cada smartphone, browser y app embebida. Un solo archivo .db, sin daemon, perfecto para QuimiSell offline-first cuando exportas progreso a JSON pero quieres queries locales complejas. WAL (Write-Ahead Logging) permite lecturas concurrentes durante escrituras. Para Linux Lingo APK, Room (Android) usa SQLite bajo el capó. Límite: escrituras concurrentes heavy → considera Postgres; para MVPs y edge, SQLite gana.",
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
        "Schema-on-read vs schema-on-write."
      ],
      content: "No todo encaja en columnas fijas: metadata de chunks RAG, hyperparameters de modelos, respuestas de LLM con estructura variable. JSON en SQL da flexibilidad sin abandonar ACID. Postgres JSONB es binario e indexable; SQLite soporta funciones json_extract. Anti-patrón: meter todo en un blob JSON sin índices — pierdes ventajas relacionales. Regla: normaliza entidades core; JSON para extensiones y metadata evolutiva.",
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
        "pgvector, Chroma, FAISS, sqlite-vec."
      ],
      content: "Un embedding convierte texto en vector R^d (384, 768, 1536 dims). Búsqueda semántica encuentra chunks similares por coseno, no por keyword match. k-NN naive es O(n×d) — inviable con millones de vectores. Índices ANN (HNSW) aproximan nearest neighbors en O(log n) con recall >95%. Para QuimiSell $0: sqlite-vec o Chroma local; en producción pgvector. Los embeddings se generan offline; la DB vectorial solo almacena y busca.",
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
        "Augment: prompt = context + pregunta usuario."
      ],
      content: "RAG combina búsqueda vectorial con LLM: retrieve chunks relevantes, inyecta en prompt, genera respuesta anclada en datos reales. Chunking crítico: muy pequeño pierde contexto; muy grande diluye relevancia. Overlap 10-20% evita cortar frases. Metadata permite citar fuentes ('según módulo 4...'). Reranking (cross-encoder) mejora precision@k. Sin retrieval de calidad, el LLM alucina — garbage in, garbage out.",
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
        "Principio: datos locales primero, sync opcional."
      ],
      content: "QuimiSell opera $0: esta Master Class guarda progreso en localStorage; export JSON para backup. Linux Lingo APK usará SQLite/Room para vocabulario y progreso on-device. RAG local con sqlite-vec + modelo embebido evita APIs pagas. Cuando escales: Supabase Postgres free tier o Turso (SQLite edge). Regla de oro: no pagues cloud hasta que localStorage/SQLite no basten. Privacidad y costo cero alineados con el manifiesto on-device.",
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
      ]
    }
  ]
};
