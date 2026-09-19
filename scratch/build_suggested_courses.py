#!/usr/bin/env python3
"""Genera los 3 cursos sugeridos que faltaban: SQL, Evaluación IA y Redes."""

from pathlib import Path

from build_platform_courses import EMAIL, gen_course

# --- Helpers compactos para definir módulos ---
def mod(mid, title, desc, items, content, code, quiz):
    return {
        "id": mid,
        "title": title,
        "description": desc,
        "items": items,
        "content": content,
        "code": code,
        "quiz": quiz,
    }


def q(question, options, answer, explanation):
    return (question, options, answer, explanation)


# ═══════════════════════════════════════════════════════════════════════════════
# CURSO 1: SQL Y DATOS PARA IA (10 módulos)
# ═══════════════════════════════════════════════════════════════════════════════

SQL_STUDY_PLAN = [
    (1, "Modelo Relacional", "Tablas, filas, claves primarias y foráneas."),
    (2, "Consultas SELECT", "Filtrar, ordenar y agregar datos."),
    (3, "JOINs", "Relacionar tablas sin duplicar lógica en código."),
    (4, "Índices y EXPLAIN", "Rendimiento y planes de ejecución."),
    (5, "Normalización", "1FN–3FN vs desnormalización pragmática."),
    (6, "SQLite Local", "Base embebida $0 para prototipos y apps."),
    (7, "JSON en SQL", "Semi-estructurado sin NoSQL obligatorio."),
    (8, "Embeddings y Vectores", "Fundamentos de búsqueda semántica."),
    (9, "Pipeline RAG", "Chunking, metadata y retrieval."),
    (10, "Datos para IA $0", "Estrategias locales sin factura cloud."),
]

SQL_MODULES = [
    mod(1, "MÓDULO 1: MODELO RELACIONAL Y FILOSOFÍA SQL",
        "Por qué los datos estructurados siguen siendo el cimiento de sistemas con IA.",
        ["Tablas, columnas, filas y esquemas.", "Clave primaria (PK) e integridad.", "Clave foránea (FK) y relaciones 1:N.", "ACID: atomicidad, consistencia, aislamiento, durabilidad.", "SQL como lenguaje declarativo vs imperativo."],
        "Las bases relacionales organizan datos en tablas con reglas estrictas de integridad. Una clave primaria identifica cada fila de forma única; las claves foráneas conectan tablas sin duplicar información. ACID garantiza que transacciones complejas no dejen el sistema inconsistente. Para IA, tus datasets de entrenamiento, logs de evaluación y metadata de documentos RAG suelen vivir en SQL o derivados (CSV exportado de SQL). Dominar el modelo relacional te permite diseñar pipelines de datos limpios antes de tocar embeddings o LLMs.",
        """-- Esquema mínimo para usuarios y progreso de curso
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);
CREATE TABLE progress (
  user_id INTEGER REFERENCES users(id),
  module_id INTEGER NOT NULL,
  score INTEGER,
  PRIMARY KEY (user_id, module_id)
);""",
        [q("Una clave primaria...", ["Puede repetirse en varias filas", "Identifica de forma única cada fila", "Solo existe en NoSQL"], 1, "PK garantiza unicidad por fila."),
         q("Una clave foránea...", ["Elimina la tabla padre", "Referencia la PK de otra tabla", "Solo sirve para índices"], 1, "FK mantiene integridad referencial."),
         q("ACID garantiza...", ["Solo velocidad", "Transacciones consistentes y duraderas", "Solo funciona en la nube"], 1, "Atomicidad y consistencia protegen datos."),
         q("SQL es declarativo porque...", ["Defines QUÉ quieres, no CÓMO iterar", "Solo funciona en Python", "No permite JOINs"], 0, "Describes el resultado deseado."),
         q("Para IA, SQL ayuda a...", ["Organizar datasets y metadata limpia", "Entrenar GPUs directamente", "Reemplazar todos los LLMs"], 0, "Datos estructurados alimentan pipelines ML/RAG.")]),

    mod(2, "MÓDULO 2: SELECT, WHERE, ORDER BY Y AGREGACIONES",
        "El 80% del trabajo diario con datos: consultar, filtrar y resumir.",
        ["SELECT columnas vs SELECT *.", "WHERE con operadores (=, <>, IN, LIKE, BETWEEN).", "ORDER BY ASC/DESC y LIMIT.", "COUNT, SUM, AVG, MIN, MAX.", "GROUP BY y HAVING para agregaciones filtradas."],
        "SELECT es la puerta de entrada a cualquier análisis de datos. Filtra con WHERE antes de agregar; usa ORDER BY y LIMIT para paginar resultados grandes. Las funciones de agregación resumen millones de filas en una sola respuesta — esencial para dashboards de evaluación de modelos (accuracy promedio por día, tokens consumidos por usuario). GROUP BY segmenta agregaciones; HAVING filtra grupos ya agregados (distinto de WHERE que filtra filas individuales).",
        """SELECT course_id, COUNT(*) AS completions, AVG(score) AS avg_score
FROM progress
WHERE score >= 70
GROUP BY course_id
HAVING COUNT(*) >= 5
ORDER BY avg_score DESC
LIMIT 10;""",
        [q("WHERE filtra...", ["Filas antes de agregar", "Grupos después de GROUP BY", "Solo índices"], 0, "WHERE actúa sobre filas individuales."),
         q("HAVING se usa con...", ["ORDER BY solamente", "GROUP BY para filtrar grupos", "CREATE TABLE"], 1, "HAVING filtra resultados agregados."),
         q("COUNT(*) cuenta...", ["Solo valores no nulos de una columna", "Todas las filas del grupo", "Solo claves primarias duplicadas"], 1, "COUNT(*) incluye todas las filas."),
         q("LIMIT 10...", ["Crea 10 tablas", "Restringe filas devueltas", "Añade 10 columnas"], 1, "Paginación y top-N queries."),
         q("AVG(score) devuelve...", ["La fila con score máximo", "El promedio de score", "La suma de scores"], 1, "Función de agregación promedio.")]),

    mod(3, "MÓDULO 3: JOINs — INNER, LEFT, RIGHT Y FULL",
        "Combinar tablas relacionadas sin duplicar datos en application code.",
        ["INNER JOIN: solo coincidencias en ambas tablas.", "LEFT JOIN: todas las filas izquierdas + match derecho.", "RIGHT JOIN y FULL OUTER (según motor).", "Aliases de tabla (u, p) para legibilidad.", "Evitar producto cartesiano sin ON."],
        "Los JOINs expresan relaciones entre entidades: usuarios con sus progresos, documentos con sus chunks RAG, evaluaciones con sus preguntas. INNER JOIN devuelve solo filas con match en ambos lados; LEFT JOIN conserva todos los registros de la tabla izquierda aunque no tengan match (útil para 'usuarios sin progreso'). Olvidar la cláusula ON genera producto cartesiano — explosión combinatoria O(n×m) que destruye rendimiento.",
        """SELECT u.email, p.module_id, p.score
FROM users u
LEFT JOIN progress p ON p.user_id = u.id
WHERE u.email LIKE '%@quimisell.com';""",
        [q("INNER JOIN devuelve...", ["Todas las filas de ambas tablas siempre", "Solo filas con match en ambas", "Solo la tabla izquierda"], 1, "Intersección de claves relacionadas."),
         q("LEFT JOIN conserva...", ["Solo matches", "Todas las filas de la tabla izquierda", "Ninguna fila sin score"], 1, "Filas izq. + match der. o NULL."),
         q("Producto cartesiano ocurre cuando...", ["Falta cláusula ON/WHERE de join", "Usas LIMIT", "Hay índice"], 0, "Cada fila × cada fila = disaster."),
         q("Alias u.email significa...", ["Tabla users renombrada u", "Columna universal", "Unión de tablas"], 0, "Aliases mejoran legibilidad."),
         q("JOINs son O(n×m) peor caso sin índice porque...", ["SQL es lento por diseño", "Nested loop compare cada par de filas", "JOINs no usan memoria"], 1, "Por eso índices en FK son críticos.")]),

    mod(4, "MÓDULO 4: ÍNDICES, EXPLAIN Y RENDIMIENTO",
        "Big-O en bases de datos: de full table scan a lookup O(log n).",
        ["B-tree index: búsqueda logarítmica típica.", "Índices en columnas de WHERE y JOIN.", "EXPLAIN / EXPLAIN ANALYZE lee el plan.", "Full table scan O(n) vs index scan O(log n).", "Trade-off: índices aceleran lectura, ralentizan escritura."],
        "Sin índice, cada SELECT recorre todas las filas — O(n). Un índice B-tree reduce búsquedas a O(log n). EXPLAIN muestra si el optimizador usa index scan o seq scan. Para RAG con millones de chunks, índices en metadata (document_id, page) son obligatorios; los índices vectoriales (HNSW, IVF) son capa adicional sobre embeddings. No indexes everything: cada índice cuesta espacio y ralentiza INSERT/UPDATE.",
        """CREATE INDEX idx_progress_user ON progress(user_id);
EXPLAIN QUERY PLAN
SELECT * FROM progress WHERE user_id = 42;""",
        [q("Full table scan es...", ["O(log n)", "O(n) — recorre todas las filas", "O(1) siempre"], 1, "Peor caso lineal en tamaño de tabla."),
         q("Índice B-tree típico acelerca búsquedas a...", ["O(n²)", "O(log n)", "O(1) exacto siempre"], 1, "Estructura balanceada logarítmica."),
         q("EXPLAIN sirve para...", ["Insertar datos", "Ver plan de ejecución del optimizador", "Crear usuarios"], 1, "Diagnóstico de rendimiento."),
         q("Demasiados índices...", ["Siempre mejoran todo", "Ralentizan escrituras y ocupan disco", "Eliminan JOINs"], 1, "Trade-off lectura vs escritura."),
         q("Indexar columnas en WHERE/JOIN...", ["Es anti-patrón", "Reduce scans innecesarios", "Solo en SQLite"], 1, "Columnas de filtro frecuente.")]),

    mod(5, "MÓDULO 5: NORMALIZACIÓN Y DISEÑO DE ESQUEMAS",
        "Eliminar redundancia sin perder flexibilidad para analytics e IA.",
        ["1FN: valores atómicos, sin listas en celdas.", "2FN: dependencia completa de PK.", "3FN: sin dependencias transitivas.", "Desnormalización controlada para lecturas hot.", "Star schema para data warehouses."],
        "Normalizar reduce anomalías de actualización: si el nombre del curso se repite en 10.000 filas de progreso, un cambio requiere 10.000 UPDATEs. 3FN separa entidades en tablas relacionadas. En analytics e IA, a veces desnormalizas deliberadamente (columnas calculadas, JSON embebido) para evitar JOINs costosos en inferencia batch. El arte está en saber cuándo normalizar (OLTP) y cuándo desnormalizar (OLAP, feature stores).",
        """-- Anti-patrón: curso_title repetido en cada fila
-- Correcto: FK a courses(id)
CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT);
CREATE TABLE progress (user_id INT, course_id INT REFERENCES courses(id), score INT);""",
        [q("1FN exige...", ["Valores atómicos por celda", "Solo claves compuestas", "JSON obligatorio"], 0, "No arrays ni listas en una celda."),
         q("3FN elimina...", ["Claves primarias", "Dependencias transitivas", "Todos los JOINs"], 1, "Columnas que dependen de no-PK vía otra no-PK."),
         q("Desnormalización se usa cuando...", ["Lecturas hot necesitan menos JOINs", "Nunca es válida", "Solo en Excel"], 0, "Trade-off con consistencia."),
         q("Redundancia de datos causa...", ["Anomalías de actualización", "Siempre mejor rendimiento", "Más integridad automática"], 0, "Datos duplicados se desincronizan."),
         q("Star schema es común en...", ["OLTP transaccional", "Data warehouses y BI", "Solo Redis"], 1, "Hechos + dimensiones para analytics.")]),

    mod(6, "MÓDULO 6: SQLITE — BASE EMBEBIDA $0",
        "Prototipos, apps móviles y edge sin servidor de base de datos.",
        ["SQLite: archivo .db, cero configuración.", "WAL mode para concurrencia lectura/escritura.", "Ideal para apps offline-first.", "Límite: no reemplaza Postgres en multi-tenant grande.", "Integración: better-sqlite3, SQLAlchemy, Room (Android)."],
        "SQLite es la base más desplegada del mundo: cada smartphone, browser y app embebida. Un solo archivo .db, sin daemon, perfecto para QuimiSell offline-first cuando exportas progreso a JSON pero quieres queries locales complejas. WAL (Write-Ahead Logging) permite lecturas concurrentes durante escrituras. Para Linux Lingo APK, Room (Android) usa SQLite bajo el capó. Límite: escrituras concurrentes heavy → considera Postgres; para MVPs y edge, SQLite gana.",
        """-- SQLite CLI
.open quimisell.db
CREATE TABLE modules (id INTEGER PRIMARY KEY, title TEXT);
INSERT INTO modules VALUES (1, 'Git Fundamentals');
SELECT * FROM modules;""",
        [q("SQLite almacena datos en...", ["Servidor remoto obligatorio", "Un archivo local .db", "Solo memoria volátil"], 1, "Base embebida sin daemon."),
         q("WAL mode mejora...", ["Concurrencia lectura/escritura", "Encriptación automática", "Solo backups"], 0, "Write-Ahead Logging."),
         q("SQLite es ideal para...", ["Apps offline-first y prototipos", "Cluster multi-master global", "Solo data centers"], 0, "Edge y mobile first."),
         q("Room en Android usa...", ["MongoDB", "SQLite", "Firebase obligatorio"], 1, "ORM sobre SQLite."),
         q("SQLite no reemplaza Postgres cuando...", ["Multi-tenant con alta concurrencia write", "Prototipas local", "App móvil offline"], 0, "Escalabilidad write-heavy.")]),

    mod(7, "MÓDULO 7: JSON Y DATOS SEMI-ESTRUCTURADOS EN SQL",
        "Flexibilidad NoSQL dentro del ecosistema relacional.",
        ["JSON/JSONB columns (Postgres, SQLite 3.38+).", "Operadores -> y ->> para extracción.", "Indexar campos JSON con expresiones.", "Cuándo JSON vs columnas normalizadas.", "Schema-on-read vs schema-on-write."],
        "No todo encaja en columnas fijas: metadata de chunks RAG, hyperparameters de modelos, respuestas de LLM con estructura variable. JSON en SQL da flexibilidad sin abandonar ACID. Postgres JSONB es binario e indexable; SQLite soporta funciones json_extract. Anti-patrón: meter todo en un blob JSON sin índices — pierdes ventajas relacionales. Regla: normaliza entidades core; JSON para extensiones y metadata evolutiva.",
        """SELECT id, json_extract(metadata, '$.page') AS page
FROM document_chunks
WHERE json_extract(metadata, '$.lang') = 'es';""",
        [q("JSONB en Postgres es...", ["Solo texto plano", "Formato binario optimizado e indexable", "No queryable"], 1, "JSON binario con operadores."),
         q("json_extract en SQLite...", ["Elimina la tabla", "Lee campos anidados del JSON", "Solo funciona en MySQL"], 1, "Extracción de paths JSON."),
         q("Schema-on-read significa...", ["Estructura al consultar, flexible al escribir", "Esquema fijo al insertar", "Sin validación nunca"], 0, "Flexibilidad diferida."),
         q("JSON para metadata RAG guarda...", ["Solo embeddings", "page, source, lang, timestamps", "Solo imágenes"], 1, "Contexto del chunk."),
         q("Anti-patrón: todo en JSON sin índices...", ["Siempre óptimo", "Full scan en cada query JSON", "Mejora normalización"], 1, "Indexa campos query frecuentes.")]),

    mod(8, "MÓDULO 8: EMBEDDINGS Y BÚSQUEDA VECTORIAL",
        "Fundamentos matemáticos del retrieval semántico para RAG.",
        ["Embedding: vector denso que captura significado.", "Similaridad coseno vs distancia euclídea.", "k-NN: encontrar k vectores más cercanos.", "Índices ANN: HNSW, IVF (O(log n) aprox).", "pgvector, Chroma, FAISS, sqlite-vec."],
        "Un embedding convierte texto en vector R^d (384, 768, 1536 dims). Búsqueda semántica encuentra chunks similares por coseno, no por keyword match. k-NN naive es O(n×d) — inviable con millones de vectores. Índices ANN (HNSW) aproximan nearest neighbors en O(log n) con recall >95%. Para QuimiSell $0: sqlite-vec o Chroma local; en producción pgvector. Los embeddings se generan offline; la DB vectorial solo almacena y busca.",
        """# Similaridad coseno (concepto)
# cos(a,b) = dot(a,b) / (||a|| * ||b||)
# k-NN: ordenar por cos desc, tomar top-k chunks""",
        [q("Un embedding es...", ["Un hash MD5 del texto", "Vector denso que captura significado", "Solo un entero"], 1, "Representación numérica semántica."),
         q("Similaridad coseno mide...", ["Ángulo entre vectores (semántica)", "Solo longitud de texto", "Frecuencia de palabras"], 0, "Independiente de magnitud."),
         q("k-NN naive es O(n) porque...", ["Compara query con cada vector almacenado", "Usa solo índices B-tree", "Es O(1) con GPU"], 0, "Linear scan sin índice ANN."),
         q("HNSW es un índice...", ["ANN aproximado para vectores", "Solo para SQL joins", "De normalización"], 0, "Hierarchical Navigable Small World."),
         q("pgvector extiende...", ["Excel", "Postgres con columnas vector", "Git"], 1, "Tipo vector + operadores en Postgres.")]),

    mod(9, "MÓDULO 9: PIPELINE RAG — CHUNKING, METADATA Y RETRIEVAL",
        "Arquitectura completa de Retrieval-Augmented Generation.",
        ["Ingesta: PDF/HTML → texto limpio.", "Chunking: tamaño, overlap, separadores.", "Metadata: source, page, section para citas.", "Retrieval: top-k + reranking opcional.", "Augment: prompt = context + pregunta usuario."],
        "RAG combina búsqueda vectorial con LLM: retrieve chunks relevantes, inyecta en prompt, genera respuesta anclada en datos reales. Chunking crítico: muy pequeño pierde contexto; muy grande diluye relevancia. Overlap 10-20% evita cortar frases. Metadata permite citar fuentes ('según módulo 4...'). Reranking (cross-encoder) mejora precision@k. Sin retrieval de calidad, el LLM alucina — garbage in, garbage out.",
        """# Pipeline RAG simplificado
# 1. chunk(document) → [{text, metadata}, ...]
# 2. embed(chunks) → vectors
# 3. store(vectors, metadata) in vector DB
# 4. query → embed(query) → top_k → prompt → LLM""",
        [q("RAG significa...", ["Retrieval-Augmented Generation", "Random Access Git", "Recurrent Auto Gradient"], 0, "Generación aumentada con retrieval."),
         q("Chunk overlap evita...", ["Cortar contexto en límites de chunk", "Usar embeddings", "Guardar metadata"], 0, "Continuidad entre fragmentos."),
         q("Metadata en chunks permite...", ["Citar fuentes en respuestas", "Eliminar el LLM", "Solo decoración"], 0, "Trazabilidad y confianza."),
         q("Reranking mejora...", ["Precision del top-k recuperado", "Solo velocidad de GPU", "Encriptación"], 0, "Cross-encoder reordena candidatos."),
         q("Sin retrieval de calidad...", ["El LLM siempre acierta", "Aumenta alucinaciones", "No afecta respuestas"], 1, "Garbage in, garbage out.")]),

    mod(10, "MÓDULO 10: ESTRATEGIA DE DATOS $0 PARA IA QUIMISELL",
        "localStorage, SQLite, export JSON y cuándo escalar sin factura.",
        ["localStorage: progreso web sin backend (esta plataforma).", "Export/import JSON para backup portable.", "SQLite en APK para datos offline.", "Supabase free tier / Turso cuando crezcas.", "Principio: datos locales primero, sync opcional."],
        "QuimiSell opera $0: esta Master Class guarda progreso en localStorage; export JSON para backup. Linux Lingo APK usará SQLite/Room para vocabulario y progreso on-device. RAG local con sqlite-vec + modelo embebido evita APIs pagas. Cuando escales: Supabase Postgres free tier o Turso (SQLite edge). Regla de oro: no pagues cloud hasta que localStorage/SQLite no basten. Privacidad y costo cero alineados con el manifiesto on-device.",
        """// Progreso QuimiSell (localStorage, O(1) read/write por clave)
localStorage.setItem('quimisell-progress', JSON.stringify({
  git_devops_vercel: { completedModules: [1, 2, 3] }
}));""",
        [q("Esta plataforma QuimiSell guarda progreso en...", ["MongoDB Atlas pago", "localStorage sin backend", "Oracle Enterprise"], 1, "Offline-first $0."),
         q("Export JSON permite...", ["Backup portable del progreso", "Entrenar GPT-4 automáticamente", "Eliminar quizzes"], 0, "Portabilidad sin servidor."),
         q("Linux Lingo APK debería usar...", ["SQLite/Room on-device", "Solo APIs OpenAI", "Excel en la nube"], 0, "Datos locales en el teléfono."),
         q("RAG local evita...", ["Costos por token de API y fuga de datos", "Todo procesamiento", "Embeddings"], 0, "Privacidad + $0 API."),
         q("Escalar datos cuando...", ["localStorage/SQLite ya no bastan", "Siempre el día 1", "Nunca"], 0, "Pragmatismo QuimiSell.")]),
]

SQL_LAB = {
    "title": "Mini Pipeline RAG Local con SQLite y Embeddings",
    "badge": "Laboratorio SQL y Datos para IA",
    "description": "Construye un script Python o notebook que: (1) ingeste 5+ documentos de texto, (2) los chunkee con metadata, (3) genere embeddings, (4) almacene en SQLite o Chroma local, (5) responda 3 preguntas con retrieval top-3 + respuesta citando fuentes.",
    "requirements": [
        "• Esquema SQL o Chroma con al menos: chunks(id, text, metadata JSON, embedding).",
        "• Chunking documentado: tamaño, overlap y justificación.",
        "• Función search(query, k=3) con similaridad coseno.",
        "• 3 preguntas de prueba con respuestas que citen chunk_id o metadata.source.",
        "• README con diagrama del pipeline y complejidad Big-O de búsqueda naive vs indexada."
    ],
    "cleanCodeRules": [
        "• Separar ingesta, chunking, embedding y retrieval en funciones.",
        "• No hardcodear API keys; embeddings locales preferidos (sentence-transformers).",
        "• SQL parametrizado (?) — nunca concatenar input usuario.",
        "• Enviar repo/notebook a quimicabless2020@gmail.com."
    ],
    "emailSubject": "Laboratorio QuimiSell: SQL y RAG Local - [Tu Nombre]",
    "emailBodyTemplate": f"""Hola Profesor QuimiSell,

Adjunto mi pipeline RAG local con SQL/Chroma.

Repositorio: [ENLACE GITHUB]
Chunks indexados: [N]
Modelo embedding: [nombre]

Preguntas de prueba:
1. [pregunta] → fuente: [chunk_id]
2. ...
3. ...

Saludos cordiales.
({EMAIL})""",
}

# ═══════════════════════════════════════════════════════════════════════════════
# CURSO 2: EVALUACIÓN Y CONFIABILIDAD DE IA (10 módulos)
# ═══════════════════════════════════════════════════════════════════════════════

EVAL_STUDY_PLAN = [
    (1, "Por qué Evaluar IA", "Sistemas probabilísticos requieren métricas distintas."),
    (2, "Métricas Clásicas", "Accuracy, precision, recall, F1, ROC-AUC."),
    (3, "Datasets y Leakage", "Train/val/test split y contaminación."),
    (4, "Evaluación de LLMs", "Benchmarks, LLM-as-judge, rubricas."),
    (5, "Guardrails", "Validación de output y políticas de contenido."),
    (6, "Observabilidad", "Logs, traces y dashboards de calidad."),
    (7, "Red Teaming", "Pruebas adversariales sistemáticas."),
    (8, "FinOps de IA", "Costo por token, batching y caching."),
    (9, "Human-in-the-Loop", "Feedback, RLHF y mejora continua."),
    (10, "SLOs en Producción", "SLI, SLO, error budgets para IA."),
]

EVAL_MODULES = [
    mod(1, "MÓDULO 1: POR QUÉ EVALUAR SISTEMAS CON IA",
        "Los sistemas probabilísticos fallan diferente al software determinista.",
        ["Software clásico: input → output predecible.", "IA/ML: output con incertidumbre y drift.", "Evaluación continua vs test único pre-deploy.", "Costo de fallo: alucinación, sesgo, seguridad.", "Evaluar es diseño, no fase final."],
        "Un if/else siempre produce el mismo resultado; un LLM puede variar con temperatura, prompt o contexto. Evaluar IA no es opcional: es ingeniería de confiabilidad. Sin métricas, no sabes si tu RAG mejoró o empeoró tras un cambio de chunking. El costo de fallo incluye reputación, legal y financiero. En QuimiSell, evaluar el tutor offline antes de escalar es requisito de calidad.",
        "# eval_llm(prompt) → distribución → necesitas métricas",
        [q("IA vs software clásico...", ["Igual de predecibles", "IA tiene incertidumbre en outputs", "IA nunca falla"], 1, "Modelos probabilísticos."),
         q("Evaluar IA es...", ["Opcional post-lanzamiento", "Parte del diseño continuo", "Solo académico"], 1, "Quality engineering."),
         q("Drift significa...", ["Modelo degrada con datos nuevos", "Git conflict", "Solo GPU"], 0, "Distribución cambia."),
         q("Sin métricas tras cambiar RAG...", ["Sabes si mejoró", "No puedes comparar versiones", "Git lo detecta"], 1, "Eval cuantitativa necesaria."),
         q("Alucinación LLM...", ["Sin riesgo real", "Puede dañar decisiones", "Solo estética"], 1, "Respuestas inventadas.")]),
    mod(2, "MÓDULO 2: MÉTRICAS — ACCURACY, PRECISION, RECALL, F1",
        "Matriz de confusión y trade-offs en clasificación.",
        ["TP, TN, FP, FN.", "Accuracy engañosa con desbalance.", "Precision = TP/(TP+FP).", "Recall = TP/(TP+FN).", "F1 = media armónica P y R."],
        "Accuracy alta puede ocultar modelo inútil con clases desbalanceadas. Precision mide falsos positivos; recall mide falsos negativos. F1 balancea ambos. Elige métrica según costo de error: spam (precision) vs diagnóstico médico (recall).",
        "# F1 = 2*(P*R)/(P+R)",
        [q("Accuracy engañosa si...", ["Clases balanceadas", "Desbalance fuerte", "Usas F1"], 1, "Mayoría domina."),
         q("Precision mide...", ["Positivos reales detectados", "Predichos positivos correctos", "Solo TN"], 1, "Calidad predicciones +."),
         q("Recall mide...", ["Falsos positivos", "Positivos reales detectados", "Accuracy"], 1, "Cobertura."),
         q("F1 es...", ["Media armónica P y R", "Suma P+R", "Accuracy"], 0, "Balance P/R."),
         q("Diagnóstico médico prioriza...", ["Recall alto", "Solo precision", "BLEU"], 0, "FN costoso.")]),
    mod(3, "MÓDULO 3: DATASETS, SPLITS Y DATA LEAKAGE",
        "Datos de evaluación sagrados e independientes.",
        ["Train/val/test split.", "K-fold para datasets pequeños.", "Leakage: test contamina train.", "Split temporal en series.", "Synthetic data con cautela."],
        "Leakage es error #1: normalizar con stats del test, duplicar filas, target leakage. Test se toca una vez al final. Time-series: split temporal. LLMs: contaminación de benchmarks en training corpus.",
        "# train: 2020-2023, test: 2024+ (temporal)",
        [q("Data leakage...", ["Test independiente", "Test contamina train", "Solo validation"], 1, "Contaminación."),
         q("Test set para...", ["Tuning diario", "Eval final una vez", "Train"], 1, "Generalización honesta."),
         q("Validation para...", ["Tuning sin tocar test", "Reemplazar test", "Deploy"], 0, "Selección hparams."),
         q("Time-series split...", ["Shuffle aleatorio", "Temporal pasado→futuro", "Solo train"], 1, "No futuro en train."),
         q("Target leakage...", ["Feature con la respuesta", "Normalizar train", "K-fold"], 0, "Feature filtra target.")]),
    mod(4, "MÓDULO 4: EVALUACIÓN DE LLMs Y LLM-AS-JUDGE",
        "Calidad de texto generado más allá de accuracy.",
        ["Benchmarks: MMLU, HumanEval.", "BLEU/ROUGE limitados.", "LLM-as-judge con rubrica.", "Golden dataset custom.", "Evals: relevancia, factualidad, seguridad."],
        "BLEU mide n-gram overlap — pobre para respuestas válidas distintas. LLM-as-judge escala eval con rubrica. Golden set de 50-200 preguntas de tu dominio. QuimiSell: keywords + judge factual.",
        "# golden=[{q, must_include, rubric}]",
        [q("BLEU limitado porque...", ["Mide overlap no semántica", "Perfecto LLM", "Evalúa GPU"], 0, "n-gram overlap."),
         q("LLM-as-judge...", ["LLM evalúa con rubrica", "Reemplaza humanos 100%", "Solo SQL"], 0, "Eval escalable."),
         q("Golden dataset...", ["Preguntas de tu dominio", "Solo benchmarks", "Opcional"], 0, "Eval relevante."),
         q("MMLU evalúa...", ["Conocimiento multi-dominio", "GPU", "Git"], 0, "Multitask understanding."),
         q("Evals incluyen...", ["Relevancia y factualidad", "Solo longitud", "Solo temp"], 0, "Multidimensional.")]),
    mod(5, "MÓDULO 5: GUARDRAILS Y VALIDACIÓN DE OUTPUT",
        "Barreras entre LLM y usuario.",
        ["Input sanitization.", "Output schema JSON.", "Content policy toxicidad/PII.", "Structured output.", "Fallback seguro."],
        "Validar input/output, forzar JSON, detectar PII/toxicidad. Prompt injection evade system prompt. Código generado → sandbox. QuimiSell: no inventar teoremas.",
        "# if detect_pii(r): redact(r)",
        [q("Guardrails...", ["Capas input/output", "Solo GPU", "Git"], 0, "Defensa en capas."),
         q("Prompt injection...", ["Evade system prompt", "Mejora recall", "SQL"], 0, "Ataque prompt."),
         q("JSON mode...", ["Parsing predecible", "Elimina eval", "GPT-2"], 0, "Structured output."),
         q("PII detectada...", ["Redactar/rechazar", "Publicar", "Ignorar"], 0, "Privacidad."),
         q("Código LLM...", ["Sandbox primero", "Ejecutar prod", "No validar"], 0, "DevSecOps.")]),
    mod(6, "MÓDULO 6: OBSERVABILIDAD — LOGS, TRACES, DASHBOARDS",
        "Ver producción a escala.",
        ["Logging JSON estructurado.", "OpenTelemetry traces.", "p50/p95 latency.", "LangSmith/Langfuse.", "Alertas SLO."],
        "Log request_id, tokens, latency, eval score. p95 > promedio. Alert si error >1%. QuimiSell offline: log exportable.",
        '{"request_id":"x","latency_ms":890,"tokens_out":340}',
        [q("Log estructurado...", ["JSON consistente", "print()", "Binario"], 0, "Parseable."),
         q("p95 latency...", ["95% más rápidos que valor", "Promedio", "Peor ever"], 0, "Percentil."),
         q("OpenTelemetry...", ["Tracing estándar", "Git", "CSS"], 0, "Observabilidad."),
         q("LangSmith...", ["Observabilidad LLM", "SQL", "PWA"], 0, "LLM ops."),
         q("No loguear prompt si...", ["Tiene PII", "Siempre OK", "Obligatorio"], 0, "Privacidad.")]),
    mod(7, "MÓDULO 7: RED TEAMING Y PRUEBAS ADVERSARIALES",
        "Atacar antes que otros.",
        ["Red team sistemático.", "Jailbreaks e injection.", "FGSM/PGD clásico.", "Auto red team LLM.", "Find-fix-verify."],
        "Probar jailbreak, exfiltración system prompt, RAG envenenado. Automated red team a escala. QuimiSell: prompts adversariales pre-release.",
        "# categorías: jailbreak, injection, exfil",
        [q("Red teaming...", ["Ataque proactivo propio", "Marketing", "Deploy"], 0, "Seguridad ofensiva."),
         q("Jailbreak...", ["Evade restricciones", "Mejora recall", "SQL"], 0, "Bypass safety."),
         q("RAG injection...", ["Chunk malicioso", "Mejora retrieval", "Git"], 0, "Doc envenenado."),
         q("Auto red team...", ["LLM genera ataques", "Solo manual", "N/A"], 0, "Escala."),
         q("Findings...", ["Documentar y remediar", "Ignorar", "Publicar"], 0, "Ciclo seguridad.")]),
    mod(8, "MÓDULO 8: FinOps DE IA",
        "Cada token tiene precio.",
        ["Input vs output pricing.", "Model routing.", "Prompt caching.", "Batching.", "Edge elimina API cost."],
        "GPT-4o-mini para tareas simples; cache system prompt; batch API. QuimiSell edge = FinOps $0.",
        "# cost = tokens_in*pin + tokens_out*pout",
        [q("Output tokens...", ["Más caros que input", "Gratis", "Igual siempre"], 0, "Generación cara."),
         q("Model routing...", ["Modelo barato tareas simples", "Siempre grande", "Sin ahorro"], 0, "Right-size."),
         q("Prompt caching...", ["Reutiliza prefix", "Elimina eval", "SQL"], 0, "Ahorro tokens."),
         q("Edge/on-device...", ["Elimina costo API", "Elimina eval", "Elimina HW"], 0, "FinOps $0."),
         q("Budget alerts...", ["Avisan umbral gasto", "Decorativos", "Guardrails"], 0, "Control fin.")]),
    mod(9, "MÓDULO 9: HUMAN-IN-THE-LOOP",
        "Humanos en puntos críticos.",
        ["HITL baja confianza.", "Thumbs feedback.", "RLHF.", "Active learning.", "Flywheel datos."],
        "Confidence <0.7 → revisión humana. RLHF alinea preferencias. QuimiSell quizzes = signal local.",
        "# if conf<0.7: human_review()",
        [q("HITL...", ["Human-In-The-Loop", "Hardware", "Solo auto"], 0, "Supervisión selectiva."),
         q("RLHF...", ["Feedback humano alinea", "SQL joins", "Git"], 0, "Preferencias humanas."),
         q("Active learning...", ["Casos inciertos primero", "Aleatorio", "Test only"], 0, "Etiquetado eficiente."),
         q("Thumbs down...", ["Signal mejora", "Inútil", "Elimina modelo"], 0, "Feedback loop."),
         q("Flywheel...", ["Usuarios→datos→mejor modelo", "Marketing", "Sin mejora"], 0, "Ciclo virtuoso.")]),
    mod(10, "MÓDULO 10: SLOs, SLIs Y PRODUCCIÓN",
        "Definir 'funciona bien' para IA.",
        ["SLI medible.", "SLO objetivo.", "Error budget.", "Feature flags.", "Postmortem blameless."],
        "SLO: 95% respuestas pasan eval factual. Error budget permite innovar. Feature flags rollback sin redeploy.",
        "# SLO: 90% eval>=0.8 over 7d",
        [q("SLI...", ["Indicador medible", "Objetivo", "SQL"], 0, "Indicator."),
         q("SLO...", ["Objetivo sobre SLI", "Log", "Branch"], 0, "Objective."),
         q("Error budget...", ["Fallo permitido antes freeze", "Dinero cloud", "Solo Google"], 0, "Innovación vs estabilidad."),
         q("Feature flags...", ["Desactivar sin redeploy", "CSS", "Eliminar eval"], 0, "Rollback rápido."),
         q("Postmortem blameless...", ["Aprender sin culpar", "Marketing", "Opcional"], 0, "Cultura.")]),
]

EVAL_LAB = {
    "title": "Suite de Evaluación Tutor/RAG QuimiSell",
    "badge": "Laboratorio Evaluación IA",
    "description": "Golden dataset 20+ preguntas, eval automático multidimensional, reporte 5 fallos con fix propuesto y SLI/SLO documentado.",
    "requirements": ["• Golden JSON con rubric.", "• Script eval agregado.", "• 3 dimensiones: relevancia, factualidad, completitud.", "• 5 fallos analizados.", "• SLI/SLO en README."],
    "cleanCodeRules": ["• Versionar golden en Git.", "• Sin PII en logs.", "• Reproducible.", "• Enviar a quimicabless2020@gmail.com."],
    "emailSubject": "Laboratorio QuimiSell: Eval IA - [Tu Nombre]",
    "emailBodyTemplate": f"Hola Profesor QuimiSell,\n\nRepo: [ENLACE]\nScore: [X]%\n\n({EMAIL})",
}

# ═══════════════════════════════════════════════════════════════════════════════
# CURSO 3: REDES PARA DESARROLLADORES (10 módulos)
# ═══════════════════════════════════════════════════════════════════════════════

REDES_STUDY_PLAN = [
    (1, "Modelo de Capas", "OSI y TCP/IP simplificado para devs."),
    (2, "IP y Subnetting", "Direcciones, CIDR y routing básico."),
    (3, "DNS", "Resolución de nombres y registros."),
    (4, "HTTP/HTTPS", "Protocolo web y evolución."),
    (5, "TLS y Certificados", "Cifrado en tránsito."),
    (6, "REST y WebSockets", "APIs modernas."),
    (7, "Latencia y CDN", "Caching y performance web."),
    (8, "CORS y Sesiones", "Seguridad del navegador."),
    (9, "Diagnóstico de Red", "ping, curl, traceroute, Wireshark intro."),
    (10, "Puente a Kali", "Fundamentos antes de pentesting."),
]

REDES_MODULES = [
    mod(1, "MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES",
        "Las capas que conectan tu código con internet.",
        ["OSI 7 capas vs TCP/IP 4 capas.", "Capa aplicación: HTTP, DNS, TLS.", "Transporte: TCP vs UDP.", "Red: IP, routing.", "Enlace/física: Ethernet, WiFi."],
        "Como desarrollador no necesitas memorizar OSI entero, pero sí entender dónde vive tu problema: ¿es DNS? ¿TLS? ¿timeout TCP? TCP/IP es el stack real de internet: aplicación → transporte (TCP/UDP) → internet (IP) → enlace. HTTP vive en aplicación sobre TCP. UDP en video streaming y DNS. Saber esto acelera debug: un fetch() lento puede ser DNS lento, no JavaScript lento.",
        "# Stack simplificado\n# App (HTTP) → TCP → IP → Ethernet",
        [q("HTTP vive en capa...", ["Aplicación", "Física", "Enlace"], 0, "Capa 7 / Application."),
         q("TCP vs UDP: TCP...", ["Confiable orientado conexión", "Sin garantía orden", "Solo video"], 0, "Reliable delivery."),
         q("IP maneja...", ["Direccionamiento y routing", "Solo HTML", "Certificados SSL"], 0, "Capa de red."),
         q("Debug fetch lento: revisar...", ["DNS, TLS, TCP además de JS", "Solo React", "Solo Git"], 0, "Toda la stack."),
         q("TCP/IP tiene...", ["4 capas prácticas", "7 capas OSI exactas", "2 capas"], 0, "Modelo práctico internet.")]),
    mod(2, "MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO",
        "Direcciones que identifican cada máquina en la red.",
        ["IPv4: 32 bits (192.168.1.1).", "IPv6: 128 bits, adopción creciente.", "CIDR /24, /16 — máscara de subred.", "IP privada vs pública (NAT).", "Router reenvía entre subredes."],
        "IPv4 agotó espacio; IPv6 lo resuelve con 2^128 direcciones. CIDR /24 = 256 IPs (254 usables). 192.168.x.x es privada (NAT a internet). Tu router traduce IP privada → pública. Routing: cada router decide siguiente salto hacia destino. Para devs: localhost=127.0.0.1, docker networks usan subnets aisladas, Vercel edge tiene IPs globales.",
        "# Privadas RFC1918: 10.x, 172.16-31.x, 192.168.x\n# /24 = 255.255.255.0",
        [q("192.168.1.1 es IP...", ["Privada", "Pública global", "IPv6"], 0, "RFC1918 privada."),
         q("CIDR /24 permite...", ["~256 direcciones", "2 direcciones", "Millones"], 0, "256 IPs en subnet."),
         q("NAT traduce...", ["Privada a pública", "DNS a IP", "HTTP a TCP"], 0, "Home router NAT."),
         q("127.0.0.1 es...", ["localhost", "Broadcast", "Gateway"], 0, "Loopback local."),
         q("IPv6 resuelve...", ["Agotamiento IPv4", "Solo WiFi", "Git"], 0, "Espacio de direcciones.")]),
    mod(3, "MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES",
        "De quimisell.com a dirección IP.",
        ["Jerarquía: root → TLD → autoritativo.", "Registros A, AAAA, CNAME, MX, TXT.", "TTL: tiempo de cache.", "Resolver recursivo (8.8.8.8).", "DNS propagation y debugging."],
        "DNS traduce nombres humanos a IPs. Consulta recursiva: tu OS → resolver ISP/Google → root → .com → servidor autoritativo. A record → IPv4; AAAA → IPv6; CNAME alias; TXT para verificación (Vercel, email SPF). TTL bajo = cambios rápidos pero más queries. nslookup/dig diagnostican. Vercel deploy requiere DNS apuntando o CNAME.",
        "dig quimisell.com A\nnslookup github.com",
        [q("DNS traduce...", ["Nombre a IP", "IP a HTML", "TCP a UDP"], 0, "Resolución de nombres."),
         q("Registro A...", ["Nombre a IPv4", "Nombre a IPv6", "Email"], 0, "Address record."),
         q("CNAME...", ["Alias a otro nombre", "Mail exchange", "Solo IPv6"], 0, "Canonical name alias."),
         q("TTL controla...", ["Tiempo cache del registro", "Velocidad TCP", "Tamaño paquete"], 0, "Time To Live cache."),
         q("dig/nslookup...", ["Diagnostican DNS", "Escanean puertos", "Compilan TS"], 0, "Herramientas DNS.")]),
    mod(4, "MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS",
        "El protocolo que mueve la web.",
        ["Request: method, path, headers, body.", "Response: status code, headers, body.", "HTTP/2: multiplexing, header compression.", "HTTPS = HTTP + TLS.", "Status: 2xx ok, 3xx redirect, 4xx client, 5xx server."],
        "HTTP es texto (HTTP/1.1) o binario (HTTP/2) sobre TCP. GET idempotente, POST crea, PUT actualiza, DELETE elimina. Headers: Content-Type, Authorization, Cache-Control. HTTP/2 multiplexa requests en una conexión TCP. HTTPS obligatorio en producción (SEO, seguridad). 404 Not Found, 500 Internal Error — conoce códigos para debug API.",
        "curl -I https://api.github.com\ncurl -X POST -H 'Content-Type: application/json' -d '{}' URL",
        [q("GET es...", ["Idempotente lectura", "Siempre crea recurso", "Solo WebSocket"], 0, "Read sin side effects."),
         q("HTTPS es...", ["HTTP + TLS", "HTTP sin TCP", "Solo HTTP/2"], 0, "Cifrado en tránsito."),
         q("404 significa...", ["Recurso no encontrado", "Server error", "Redirect"], 0, "Client error not found."),
         q("HTTP/2 mejora...", ["Multiplexing en una conexión", "Elimina TCP", "Solo DNS"], 0, "Performance conexión."),
         q("Content-Type header...", ["Tipo de body", "IP destino", "Certificado"], 0, "MIME type del body.")]),
    mod(5, "MÓDULO 5: TLS, SSL Y CERTIFICADOS",
        "Cifrado que protege datos en tránsito.",
        ["Handshake TLS: acuerdo de claves.", "Certificado X.509: identidad del servidor.", "CA (Let's Encrypt) firma certificados.", "HTTPS padlock = TLS activo.", "Certificate pinning en mobile."],
        "TLS negocia cifrado simétrico tras intercambio asimétrico en handshake. Certificado prueba que quimisell.com es quien dice ser (firmado por CA). Let's Encrypt gratis vía ACME. Mixed content (HTTP en HTTPS page) bloqueado por browser. Dev: mkcert para certs locales. Vercel provisiona TLS automático.",
        "# TLS 1.3: handshake más rápido, ciphers seguros",
        [q("TLS handshake...", ["Negocia claves de cifrado", "Resuelve DNS", "Compila JS"], 0, "Acuerdo seguro."),
         q("Certificado X.509...", ["Identidad del servidor", "Contraseña usuario", "IP privada"], 0, "Prueba identidad."),
         q("Let's Encrypt...", ["CA gratuita", "Solo pago", "Protocolo HTTP"], 0, "Certs gratis ACME."),
         q("Mixed content...", ["HTTP recursos en HTTPS page", "Siempre seguro", "Solo mobile"], 0, "Browser lo bloquea."),
         q("Vercel TLS...", ["Automático en deploy", "Manual siempre", "No soportado"], 0, "HTTPS out of box.")]),
    mod(6, "MÓDULO 6: REST, WEBSOCKETS Y APIS",
        "Comunicación cliente-servidor moderna.",
        ["REST: recursos como URLs, verbs HTTP.", "JSON como formato dominante.", "WebSocket: conexión bidireccional persistente.", "GraphQL: query flexible.", "Rate limiting y paginación."],
        "REST mapea entidades a URLs: GET /users/1, POST /users. Stateless: cada request lleva auth. WebSockets para chat, gaming, live updates — conexión persistente vs polling HTTP. GraphQL un endpoint, cliente elige campos. API design: versionado (/v1/), paginación (cursor/offset), rate limits (429 Too Many Requests).",
        "# REST: GET /api/courses/1\n# WebSocket: ws://host/chat",
        [q("REST es...", ["Recursos + HTTP verbs", "Solo WebSocket", "Solo TCP"], 0, "Architectural style."),
         q("WebSocket vs HTTP polling...", ["Conexión persistente bidireccional", "Solo request-response", "Sin estado"], 0, "Real-time eficiente."),
         q("429 status...", ["Rate limit exceeded", "Not found", "Server error"], 0, "Too Many Requests."),
         q("JSON en APIs...", ["Formato dominante", "Solo XML", "Prohibido"], 0, "Estándar moderno."),
         q("Paginación evita...", ["Responses gigantes O(n)", "TLS", "DNS"], 0, "Transferir todo de golpe.")]),
    mod(7, "MÓDULO 7: LATENCIA, CDN Y CACHING HTTP",
        "Performance web más allá del código.",
        ["RTT: round-trip time.", "CDN: contenido cerca del usuario.", "Cache-Control, ETag, max-age.", "Vercel Edge Network.", "Compresión gzip/brotli."],
        "Latencia = distancia + procesamiento. CDN (Cloudflare, Vercel Edge) cachea estáticos en PoPs globales — O(1) lookup vs O(distancia) transcontinental. Cache-Control: max-age=31536000 para assets hashed. ETag valida freshness. brotli comprime mejor que gzip. Para QuimiSell PWA: service worker cache + CDN Vercel = offline + rápido.",
        "Cache-Control: public, max-age=31536000, immutable",
        [q("CDN acerca...", ["Contenido al usuario geográficamente", "Solo DNS", "Solo API"], 0, "Edge caching."),
         q("RTT es...", ["Round-trip time ida y vuelta", "Solo download", "Tamaño archivo"], 0, "Latencia de red."),
         q("max-age en Cache-Control...", ["Segundos de cache válido", "Tamaño máximo", "IP máxima"], 0, "Freshness duration."),
         q("Vercel Edge...", ["CDN global incluido", "Solo localhost", "Sin HTTPS"], 0, "Deploy global."),
         q("brotli vs gzip...", ["Mejor compresión brotli", "Igual siempre", "gzip más nuevo"], 0, "Compresión moderna.")]),
    mod(8, "MÓDULO 8: CORS, COOKIES Y SESIONES",
        "Seguridad del navegador que todo dev debe conocer.",
        ["Same-Origin Policy.", "CORS headers: Access-Control-Allow-Origin.", "Preflight OPTIONS request.", "Cookies: HttpOnly, Secure, SameSite.", "JWT en header vs cookie session."],
        "Browsers bloquean requests cross-origin por seguridad. CORS permite excepciones via headers del servidor. Preflight OPTIONS para methods no simples. Cookies HttpOnly no accesibles desde JS (XSS protection). SameSite=Lax mitiga CSRF. JWT stateless en Authorization header vs session cookie en servidor.",
        "# Access-Control-Allow-Origin: https://quimisell.com",
        [q("Same-Origin Policy...", ["Restringe cross-origin por seguridad", "Permite todo", "Solo DNS"], 0, "Protección browser."),
         q("CORS header clave...", ["Access-Control-Allow-Origin", "Content-Length", "ETag"], 0, "Orígenes permitidos."),
         q("Preflight es request...", ["OPTIONS antes de POST cross-origin", "GET siempre", "DNS query"], 0, "Verifica permisos."),
         q("HttpOnly cookie...", ["No accesible desde JS", "Siempre pública", "Sin HTTPS"], 0, "Mitiga XSS."),
         q("SameSite cookie...", ["Mitiga CSRF", "Acelera DNS", "Reemplaza TLS"], 0, "Cross-site request.")]),
    mod(9, "MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE",
        "Herramientas esenciales cuando algo no conecta.",
        ["ping: ICMP echo, latencia básica.", "traceroute: saltos hasta destino.", "curl: HTTP client CLI completo.", "netstat/ss: conexiones activas.", "Wireshark intro: captura paquetes."],
        "ping mide latencia y reachability. traceroute muestra cada router intermedio. curl debuggea APIs (-v verbose, -I headers only). ss -tuln lista puertos escuchando. Wireshark captura paquetes para análisis profundo — base de Kali. Antes de pentesting, domina diagnóstico legal en tu propia red.",
        "ping google.com\ntraceroute github.com\ncurl -v https://api.github.com",
        [q("ping usa...", ["ICMP echo", "HTTP GET", "DNS TXT"], 0, "Echo request/reply."),
         q("traceroute muestra...", ["Saltos routers al destino", "Solo IP local", "HTML response"], 0, "Path discovery."),
         q("curl -v...", ["Verbose HTTP debug", "Solo ping", "Compila C"], 0, "Ver headers y TLS."),
         q("ss -tuln lista...", ["Puertos escuchando", "Solo DNS", "Archivos"], 0, "Socket statistics."),
         q("Wireshark...", ["Captura y analiza paquetes", "Solo escanea puertos", "Deploy Vercel"], 0, "Packet analyzer.")]),
    mod(10, "MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING",
        "Fundamentos éticos y legales antes del curso Kali.",
        ["Entender la red que vas a auditar.", "Puertos: 80 HTTP, 443 HTTPS, 22 SSH.", "Recon pasivo vs activo (legal).", "Tu propia red/lab primero.", "Conecta con Nmap del curso Kali."],
        "Kali enseña Nmap, Wireshark, Metasploit — pero sin fundamentos de red es ruido. Saber qué es un puerto, SYN scan, y por qué HTTPS protege antes de intentar bypass. Recon pasivo (OSINT, DNS público) vs activo (port scan) tiene implicaciones legales. Practica SOLO en redes propias o labs autorizados (TryHackMe, HTB). QuimiSell: redes dev → Kali → ciber defensiva.",
        "# Puertos comunes: 22 SSH, 80 HTTP, 443 HTTPS, 53 DNS\n# Siguiente: Curso Kali Linux Nmap",
        [q("Antes de Kali domina...", ["Fundamentos de red y puertos", "Solo Metasploit", "Solo Python"], 0, "Base teórica."),
         q("Puerto 443...", ["HTTPS", "SSH", "DNS"], 0, "TLS web."),
         q("Recon activo (port scan)...", ["Implicaciones legales", "Siempre legal", "Solo OSINT"], 0, "Autorización necesaria."),
         q("Practica pentest en...", ["Red propia o lab autorizado", "Cualquier sitio", "Bancos"], 0, "Ética y legalidad."),
         q("Tras este curso sigue...", ["Kali Linux & Nmap QuimiSell", "Solo matemática", "Autómatas"], 0, "Puente curricular.")]),
]

REDES_LAB = {
    "title": "Mapa de Red y Diagnóstico Web QuimiSell",
    "badge": "Laboratorio Redes para Devs",
    "description": "Documenta el path DNS→TLS→HTTP de quimisell.com o tu deploy Vercel: dig, curl -v, traceroute, diagrama de capas, y explica cada status header. Incluye propuesta CORS/cookies si tuvieras API.",
    "requirements": ["• Output dig + curl -v comentado.", "• Diagrama OSI/TCP-IP del request.", "• Tabla puertos comunes.", "• Análisis latencia RTT.", "• Puente escrito hacia módulo Nmap Kali."],
    "cleanCodeRules": ["• Solo targets autorizados (tuyos o QuimiSell).", "• No port scan sin permiso.", "• Documentar herramientas usadas.", "• Enviar a quimicabless2020@gmail.com."],
    "emailSubject": "Laboratorio QuimiSell: Redes Dev - [Tu Nombre]",
    "emailBodyTemplate": f"Hola Profesor QuimiSell,\n\nRepo/reporte: [ENLACE]\n\n({EMAIL})",
}


def main():
    courses_dir = Path(__file__).resolve().parent.parent / "courses"

    specs = [
        ("SQL_DATOS_IA_COURSE", "sqlDatosIaCourse.ts", "sql_datos_ia",
         "SQL, Datos y RAG para IA ($0 Local)", "SQL & Datos IA", "Datos & Retrieval",
         "🗄️", "10 módulos: SQL relacional, JOINs, índices, SQLite, JSON, embeddings, pipeline RAG y estrategia de datos $0 para IA QuimiSell.",
         "📊 ¿Por qué SQL y datos antes de RAG?",
         "RAG sin datos limpios es alucinación estructurada. SQL organiza metadata, progreso y chunks; los embeddings buscan semántica; el pipeline conecta ambos. Dominar JOINs, índices O(log n) y chunking te separa de quien solo llama API sin entender qué hay debajo.",
         SQL_STUDY_PLAN, SQL_LAB, SQL_MODULES),
        ("EVALUACION_IA_COURSE", "evaluacionIaCourse.ts", "evaluacion_ia",
         "Evaluación y Confiabilidad de Sistemas con IA", "Evaluación IA", "MLOps & Calidad",
         "✅", "10 módulos: métricas, leakage, eval LLM, guardrails, observabilidad, red team, FinOps, HITL y SLOs de producción.",
         "🎯 ¿Por qué evaluar IA como ingeniería?",
         "Un LLM no pasa tests con assert. Sin eval no sabes si tu RAG mejoró, si el guardrail funciona o cuánto cuesta cada feature. Evaluar es confiabilidad: la diferencia entre demo y producto QuimiSell.",
         EVAL_STUDY_PLAN, EVAL_LAB, EVAL_MODULES),
        ("REDES_DEV_COURSE", "redesDevCourse.ts", "redes_desarrolladores",
         "Redes para Desarrolladores (TCP/IP, DNS, HTTP, TLS)", "Redes Dev", "Fundamentos de Red",
         "🌐", "10 módulos: OSI/TCP-IP, IP, DNS, HTTP/HTTPS, TLS, REST, CDN, CORS, diagnóstico y puente hacia Kali Linux.",
         "🔌 ¿Por qué redes antes de Kali y APIs?",
         "Sin entender DNS, TLS y HTTP, Nmap y pentesting son botones sin contexto. Todo dev que despliega en Vercel o construye APIs móviles necesita esta base — especialmente en ciberseguridad defensiva QuimiSell.",
         REDES_STUDY_PLAN, REDES_LAB, REDES_MODULES),
    ]

    for export, filename, cid, title, short, badge, icon, desc, why_t, why_x, plan, lab, modules in specs:
        ts = gen_course(export, cid, title, short, badge, icon, desc, why_t, why_x, plan, lab, modules)
        path = courses_dir / filename
        path.write_text(ts, encoding="utf-8")
        print(f"Written {path} ({len(modules)} modules)")


if __name__ == "__main__":
    main()
