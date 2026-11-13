import { Course, TutorExercise } from '../domain/models';

export const SQL_DATOS_IA_COURSE: Course = {
  "id": "sql_datos_ia",
  "title": "SQL Avanzado, Modelado Relacional, Indexación B+ Tree y Bases Vectoriales para IA",
  "shortTitle": "SQL & Bases de Datos para IA",
  "badge": "Datos & Vector DBs · 20 Módulos",
  "icon": "🗄️",
  "description": "De la teoría de Codd a la memoria de la IA: álgebra relacional, normalización 1NF-3NF, optimización con EXPLAIN ANALYZE, anatomía de árboles B+ e índices GIN, transacciones ACID, concurrencia, particionamiento y búsqueda vectorial semántica con pgvector y HNSW.",
  "whyStudyTitle": "🗄️ ¿Por qué dominar SQL Avanzado e Indexación Vectorial es indispensable para cualquier Ingeniero de Software?",
  "whyStudyText": "Los datos son el activo más valioso de cualquier organización. Un código de backend perfectamente escrito colapsa en segundos si la base de datos ejecuta escaneos secuenciales lentos o sufre bloqueos por deadlocks. En la era de la Inteligencia Artificial, los ingenieros no solo deben modelar esquemas normalizados y optimizar consultas con Window Functions y CTEs, sino también dominar la representación geométrica de embeddings, la indexación aproximada HNSW y las arquitecturas RAG híbridas para alimentar a los modelos de lenguaje con datos precisos y sin alucinaciones.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "FUNDAMENTOS DEL MODELO RELACIONAL Y ÁLGEBRA RELACIONAL",
      "why": "Las bases matemáticas de las bases de datos: el modelo relacional de Edgar F. Codd (1970), tuplas, relaciones, dominios y operaciones del álgebra relacional."
    },
    {
      "id": 2,
      "title": "ARQUITECTURA DE MOTORES DE BD: BUFFER POOL Y WAL",
      "why": "Cómo funciona un motor relacional (PostgreSQL/MySQL) por dentro: Buffer Pool en memoria RAM, páginas de 8KB, Write-Ahead Logging (WAL) y Checkpoints."
    },
    {
      "id": 3,
      "title": "MODELADO DE DATOS Y NORMALIZACIÓN: 1NF A 3NF Y BCNF",
      "why": "Diseño de esquemas relacionales sin redundancia: Primera Forma Normal (1NF), Segunda Forma Normal (2NF), Tercera Forma Normal (3NF) y BCNF."
    },
    {
      "id": 4,
      "title": "CONSULTAS SQL AVANZADAS I: JOINS Y AGREGACIONES",
      "why": "Dominio relacional: Inner Join, Left Join, Right Join, Full Outer Join, Cross Join, agrupaciones con GROUP BY y filtros HAVING."
    },
    {
      "id": 5,
      "title": "CONSULTAS SQL AVANZADAS II: CTES Y CTES RECURSIVOS",
      "why": "Modularidad en SQL: Common Table Expressions (`WITH`), subconsultas correlacionadas, legibilidad y recorrido de jerarquías con CTEs recursivos."
    },
    {
      "id": 6,
      "title": "CONSULTAS SQL AVANZADAS III: WINDOW FUNCTIONS",
      "why": "Cálculo analítico sin colapsar filas: funciones de ventana (`OVER (PARTITION BY ... ORDER BY ...)`), `ROW_NUMBER`, `RANK`, `LAG`, `LEAD` y sumas acumuladas."
    },
    {
      "id": 7,
      "title": "ANATOMÍA INTERNA DE ÍNDICES: ÁRBOLES B+ VS BRIN VS HASH",
      "why": "Estructuras de datos en el motor de base de datos: por qué los Árboles B+ dominan los índices relacionales, complejidad $O(\\log n)$ e índices BRIN masivos."
    },
    {
      "id": 8,
      "title": "ÍNDICES INVERTIDOS Y FULL-TEXT SEARCH: GIN Y GIST",
      "why": "Indexación de datos no estructurados: Generalized Inverted Index (GIN), búsqueda de texto completo con `tsvector` y `tsquery`, e indexación de JSONB en PostgreSQL."
    },
    {
      "id": 9,
      "title": "ANÁLISIS DE CONSULTAS CON EXPLAIN ANALYZE: SEQ SCAN VS INDEX SCAN",
      "why": "La herramienta suprema de optimización: interpretación de planes de ejecución, Seq Scan, Index Scan, Index Only Scan, Bitmap Index Scan y costos de CPU/I/O."
    },
    {
      "id": 10,
      "title": "ESTADÍSTICAS DEL PLANIFICADOR, BLOAT Y VACUUM",
      "why": "Mantenimiento del motor: estadísticas de `pg_statistic`, bloat (hinchazón de tablas), tuplas muertas por MVCC y configuración de Autovacuum."
    },
    {
      "id": 11,
      "title": "TRANSACCIONES Y PROPIEDADES ACID EN PROFUNDIDAD",
      "why": "Las garantías sagradas de las bases de datos: Atomicidad (todo o nada), Consistencia (invariantes), Aislamiento (concurrencia) y Durabilidad (WAL)."
    },
    {
      "id": 12,
      "title": "NIVELES DE AISLAMIENTO TRANSACCIONAL Y ANOMALÍAS",
      "why": "Los 4 niveles de aislamiento SQL: Read Uncommitted, Read Committed, Repeatable Read y Serializable, y las anomalías que previenen."
    },
    {
      "id": 13,
      "title": "CONCURRENCIA, BLOQUEOS Y DEADLOCKS",
      "why": "El control de concurrencia: bloqueos a nivel de fila (`SELECT FOR UPDATE`), bloqueos de tabla, detección de Deadlocks y resolución matemática."
    },
    {
      "id": 14,
      "title": "BASES DE DATOS NOSQL VS RELACIONALES: REDIS Y DOCUMENTOS",
      "why": "El panorama políglota: bases de datos Clave-Valor (Redis en memoria), Documentales (MongoDB), Columnares (ClickHouse) y el Teorema CAP."
    },
    {
      "id": 15,
      "title": "PARTICIONAMIENTO DE TABLAS Y SHARDING A GRAN ESCALA",
      "why": "Escalabilidad horizontal y vertical de datos: particionamiento declarativo en PostgreSQL (Range, List, Hash), poda de particiones (Partition Pruning) y Sharding."
    },
    {
      "id": 16,
      "title": "INTRODUCCIÓN A BASES VECTORIALES Y EMBEDDINGS PARA IA",
      "why": "La memoria de los modelos de Inteligencia Artificial: de palabras a vectores en espacios euclidianos de alta dimensión (1536 dimensiones), embeddings semánticos y bases vectoriales."
    },
    {
      "id": 17,
      "title": "MÉTRICAS DE DISTANCIA VECTORIAL: COSENO, L2 Y PRODUCTO PUNTO",
      "why": "Geometría multidimensional para IA: Similitud Coseno (Cosine Similarity), Distancia Euclidiana (L2), Producto Punto (Dot Product) y su costo computacional."
    },
    {
      "id": 18,
      "title": "INDEXACIÓN VECTORIAL: HNSW VS IVFFLAT CON PGVECTOR",
      "why": "Búsqueda de vecinos más cercanos aproximados (ANN): la extensión `pgvector` en PostgreSQL, índices IVFFlat y el grafo HNSW (Hierarchical Navigable Small World)."
    },
    {
      "id": 19,
      "title": "ARQUITECTURA RAG HÍBRIDA: VECTORIAL + LÉXICA (BM25)",
      "why": "Generación Aumentada por Recuperación de nivel producción: RAG Híbrido, fusión de búsqueda vectorial con BM25 léxico, Reciprocal Rank Fusion (RRF) y Cross-Encoders."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: ARQUITECTURA DE DATOS A GRAN ESCALA CON RAG",
      "why": "Diseño y despliegue del sistema de datos empresarial definitivo: esquema 3NF, particionamiento por fecha, índices B+ y GIN, y motor de búsqueda vectorial híbrida para agentes de IA."
    }
  ],
  "labChallenge": {
    "title": "Arquitectura Empresarial de Datos: Esquema Normalizado 3NF + Particionamiento + Búsqueda Vectorial RAG con pgvector",
    "badge": "Laboratorio de SQL Avanzado & Bases Vectoriales",
    "description": "Tu objetivo es diseñar e implementar el esquema completo de base de datos para una plataforma de atención al cliente potenciada por IA: diseñarás tablas normalizadas en 3NF con constraints estrictos, particionamiento declarativo por fecha, optimización de queries con EXPLAIN ANALYZE para lograr Index Only Scans y un índice HNSW con pgvector para búsqueda semántica híbrida combinada con Full-Text Search.",
    "requirements": [
      "• Modelo 3NF: Diseñar tablas de clientes, pedidos e interacciones con claves foráneas e integridad referencial.",
      "• Particionamiento: Crear tabla de auditoría particionada por rangos mensuales.",
      "• EXPLAIN ANALYZE: Demostrar la transición de un Seq Scan de 400ms a un Index Scan de menos de 2ms.",
      "• Concurrencia ACID: Implementar una transacción con `SELECT FOR UPDATE` protegida contra deadlocks.",
      "• pgvector HNSW: Crear un índice HNSW para embeddings de 1536 dimensiones y formular la query RAG híbrida."
    ],
    "cleanCodeRules": [
      "• Sin Consultas N+1: Utilizar JOINs o agregaciones en lugar de bucles de consultas en el backend.",
      "• Nombres en Minúsculas y Snake_case: Estandarizar nombres de tablas y columnas.",
      "• Constraints de Validación: Todo campo numérico o de estado debe incluir reglas CHECK pertinentes."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto SQL & Vector DBs - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio con la solución al Reto de SQL Avanzado y Bases Vectoriales para IA.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nResumen del diseño de datos:\\n- Particionamiento y optimización EXPLAIN: \\n- Configuración de pgvector & HNSW: \\n- Consulta RAG Híbrida implementada: \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: FUNDAMENTOS DEL MODELO RELACIONAL Y ÁLGEBRA RELACIONAL",
      "description": "Las bases matemáticas de las bases de datos: el modelo relacional de Edgar F. Codd (1970), tuplas, relaciones, dominios y operaciones del álgebra relacional.",
      "items": [
        "El paper fundacional de Edgar F. Codd: Separar la representación lógica de la física.",
        "Definición formal: Relación (tabla), Tupla (fila), Atributo (columna) y Dominio (tipo de dato).",
        "Operaciones Fundamentales del Álgebra Relacional: Selección ($\\sigma$), Proyección ($\\pi$), Unión ($\\cup$), Diferencia ($-$), Producto Cartesiano ($\\times$).",
        "Operaciones Derivadas: Join Natural ($\\bowtie$), Theta Join, Intersección y División.",
        "De la teoría matemática al lenguaje SQL: Cómo el motor traduce una query SQL a un árbol de álgebra relacional."
      ],
      "content": "## El Modelo Relacional y el Álgebra Relacional\n\nEn 1970, Edgar F. Codd revolucionó la informática al demostrar que los datos podían gestionarse mediante teoría matemática de conjuntos y lógica de predicados de primer orden, en lugar de punteros físicos en disco (modelos jerárquicos y de red anteriores).\n\n### Operadores del Álgebra Relacional\n1. **Selección ($\\sigma_{p}(R)$):** Filtra tuplas que cumplen un predicado (equivale a `WHERE`).\n2. **Proyección ($\\pi_{a1, a2}(R)$):** Extrae un subconjunto de columnas (equivale a `SELECT col1, col2`).\n3. **Join Natural ($R \\bowtie S$):** Combina tuplas de dos relaciones donde los atributos con el mismo nombre tienen valores idénticos.",
      "codeSnippet": "-- Demostración de Álgebra Relacional en SQL\n-- Proyección (pi) y Selección (sigma)\nSELECT id, nombre, email -- Proyección (pi)\nFROM usuarios            -- Relación (R)\nWHERE esta_activo = true -- Selección (sigma)\n  AND saldo > 100;",
      "quiz": [
        {
          "question": "¿A qué cláusula de SQL equivale matemáticamente la operación de 'Selección' ($\\sigma$) del álgebra relacional?",
          "options": [
            "A la cláusula `WHERE` (filtra filas según una condición)",
            "A la cláusula `SELECT`",
            "A la cláusula `ORDER BY`"
          ],
          "answerIndex": 0,
          "explanation": "La Selección ($\\sigma$) filtra tuplas completas basándose en un predicado lógico booleano, exactamente lo que hace `WHERE`."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: ARQUITECTURA DE MOTORES DE BD: BUFFER POOL Y WAL",
      "description": "Cómo funciona un motor relacional (PostgreSQL/MySQL) por dentro: Buffer Pool en memoria RAM, páginas de 8KB, Write-Ahead Logging (WAL) y Checkpoints.",
      "items": [
        "El abismo de latencia: Memoria RAM (~100ns) vs Disco SSD NVMe (~50µs) vs HDD mecánico (~10ms).",
        "Buffer Pool / Shared Buffers: Gestión de páginas de disco en memoria RAM mediante algoritmos LRU.",
        "Páginas de disco (Pages/Blocks): La unidad atómica de I/O (8KB en PostgreSQL, 16KB en InnoDB de MySQL).",
        "Write-Ahead Logging (WAL): La regla de oro de la durabilidad (los cambios se escriben secuencialmente en el WAL antes de tocar las tablas).",
        "Páginas Sucias (Dirty Pages) y el proceso de Checkpoint: Volcado periódico de memoria a disco.",
        "Recuperación ante caídas (Crash Recovery): Replay del WAL tras un apagón repentino."
      ],
      "content": "## Arquitectura Interna de Motores: Buffer Pool y WAL\n\nUna base de datos no lee ni escribe registros individuales en el disco duro. Lee y escribe **Páginas completas de 8KB**.\n\n### El Buffer Pool\nCuando consultas un registro, el motor carga la página completa de 8KB a la memoria RAM (el **Buffer Pool**). Si consultas otro registro en la misma página, el acceso ocurre a velocidad de memoria (nanosegundos).\n\n### Write-Ahead Logging (WAL)\nModificar páginas en disco al azar (**Random I/O**) es lentísimo. Por eso, el motor:\n1. Modifica la página en la memoria RAM (se convierte en una **Dirty Page**).\n2. Escribe una pequeña entrada secuencial al archivo **WAL (Write-Ahead Log)** en disco (**Sequential I/O** ultrarrápido).\n3. Confirma la transacción con éxito al cliente.\nSi la luz se corta, al reiniciar el motor lee el WAL y reconstruye las páginas que estaban en RAM sin perder ningún dato confirmado.",
      "codeSnippet": "-- Inspección del estado del Buffer Pool en PostgreSQL\nSELECT \n  count(*) * 8 / 1024 AS buffer_cache_mb,\n  usagecount\nFROM pg_buffercache\nGROUP BY usagecount\nORDER BY usagecount DESC;\n\n-- Ver estadísticas de escritura de WAL y checkpoints\nSELECT * FROM pg_stat_bgwriter;",
      "quiz": [
        {
          "question": "¿Por qué un motor como PostgreSQL escribe en el WAL (Write-Ahead Log) antes de escribir en las tablas de la base de datos?",
          "options": [
            "Porque escribir secuencialmente en el WAL es órdenes de magnitud más rápido que escribir en páginas aleatorias del disco, garantizando durabilidad inmediata ante caídas",
            "Porque el disco duro solo acepta archivos de texto",
            "Porque las tablas se borran todos los días"
          ],
          "answerIndex": 0,
          "explanation": "El WAL convierte escrituras aleatorias lentas en una escritura secuencial rápida en disco; si el servidor se apaga, el log permite reproducir los cambios."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: MODELADO DE DATOS Y NORMALIZACIÓN: 1NF A 3NF Y BCNF",
      "description": "Diseño de esquemas relacionales sin redundancia: Primera Forma Normal (1NF), Segunda Forma Normal (2NF), Tercera Forma Normal (3NF) y BCNF.",
      "items": [
        "El costo de la redundancia: Anomalías de Inserción, Actualización y Borrado.",
        "Primera Forma Normal (1NF): Atomicidad absoluta de atributos (sin listas ni JSONs en columnas relacionales puras) y clave primaria.",
        "Segunda Forma Normal (2NF): Dependencia funcional completa (ningún atributo no clave depende de una parte de una clave compuesta).",
        "Tercera Forma Normal (3NF): Eliminación de dependencias transitivas (ningún atributo no clave depende de otro atributo no clave).",
        "Forma Normal de Boyce-Codd (BCNF): Toda determinante funcional debe ser una superclave.",
        "Desnormalización Estratégica: Cuándo romper 3NF a propósito para optimizar lecturas masivas en analítica."
      ],
      "content": "## Formas Normales: Erradicando Anomalías\n\nDiseñar una base de datos sin normalizar provoca que al actualizar la dirección de un cliente tengas que modificar 10,000 filas de pedidos. Si una falla, la base de datos queda corrupta e incoherente.\n\n### Las 3 Reglas de Oro\n1. **1NF (Atomicidad):** Cada celda contiene un único valor escalar. Nada de `telefonos: \"555-1234, 555-5678\"`.\n2. **2NF (Sin dependencias parciales):** Si la clave primaria es `(pedido_id, producto_id)`, el `nombre_producto` no puede vivir en esa tabla porque depende solo de `producto_id`, no del pedido.\n3. **3NF (Sin dependencias transitivas):** Si tienes `cliente_id ➔ codigo_postal ➔ ciudad`, la `ciudad` debe irse a una tabla de códigos postales porque depende transitivamente de `cliente_id` a través del código postal.",
      "codeSnippet": "-- Esquema Normalizado en 3NF (Sin redundancia ni anomalías)\nCREATE TABLE clientes (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  nombre VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL\n);\n\nCREATE TABLE pedidos (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  cliente_id UUID NOT NULL REFERENCES clientes(id),\n  creado_en TIMESTAMPTZ DEFAULT NOW(),\n  total_centavos BIGINT NOT NULL CHECK (total_centavos >= 0)\n);\n\nCREATE TABLE items_pedido (\n  pedido_id UUID REFERENCES pedidos(id) ON DELETE CASCADE,\n  producto_id UUID NOT NULL,\n  cantidad INT NOT NULL CHECK (cantidad > 0),\n  precio_unitario_centavos BIGINT NOT NULL,\n  PRIMARY KEY (pedido_id, producto_id)\n);",
      "quiz": [
        {
          "question": "¿Qué problema resuelve la Tercera Forma Normal (3NF)?",
          "options": [
            "Elimina las dependencias transitivas, asegurando que las columnas no clave dependan exclusivamente de la clave primaria y de nada más",
            "Cifra las columnas con contraseñas",
            "Borra los registros antiguos automáticamente"
          ],
          "answerIndex": 0,
          "explanation": "3NF asegura que no existan atributos que dependan de otros atributos secundarios; cada dato reside en una sola tabla sin duplicidad."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: CONSULTAS SQL AVANZADAS I: JOINS Y AGREGACIONES",
      "description": "Dominio relacional: Inner Join, Left Join, Right Join, Full Outer Join, Cross Join, agrupaciones con GROUP BY y filtros HAVING.",
      "items": [
        "Álgebra de Joins: INNER JOIN (intersección), LEFT JOIN (preservar izquierda), FULL JOIN (preservar ambos), CROSS JOIN (producto cartesiano).",
        "Manejo de valores `NULL` generados por Outer Joins y la función `COALESCE`.",
        "Agrupaciones complejas: `GROUP BY`, funciones agregadas (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`).",
        "Diferencia fundamental entre `WHERE` (filtra filas antes de agrupar) y `HAVING` (filtra grupos después de agregar).",
        "Agrupaciones multidimensionales avanzadas: `GROUPING SETS`, `ROLLUP` y `CUBE`."
      ],
      "content": "## Consultas Avanzadas: Joins y Agrupaciones\n\nUn error frecuente de principiantes es intentar filtrar el resultado de una función agregada usando `WHERE`:\n```sql\n-- ERROR DE SINTAXIS:\nSELECT cliente_id, COUNT(*) FROM pedidos WHERE COUNT(*) > 5 GROUP BY cliente_id;\n```\nEl motor ejecuta `WHERE` **antes** de agrupar. Para filtrar sobre el resultado agrupado, se utiliza **`HAVING`**:\n```sql\nSELECT cliente_id, COUNT(*) AS total_pedidos\nFROM pedidos\nGROUP BY cliente_id\nHAVING COUNT(*) > 5;\n```",
      "codeSnippet": "-- Consulta analítica: Total gastado por cliente con LEFT JOIN y HAVING\nSELECT \n  c.id AS cliente_id,\n  c.nombre,\n  COUNT(p.id) AS pedidos_completados,\n  COALESCE(SUM(p.total_centavos), 0) AS total_gastado_centavos\nFROM clientes c\nLEFT JOIN pedidos p ON c.id = p.cliente_id AND p.estado = 'PAGADO'\nGROUP BY c.id, c.nombre\nHAVING COALESCE(SUM(p.total_centavos), 0) > 100000 -- Más de $1,000 gastados\nORDER BY total_gastado_centavos DESC;",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia de ejecución entre la cláusula `WHERE` y la cláusula `HAVING`?",
          "options": [
            "`WHERE` filtra las filas individuales antes de que se realice la agregación; `HAVING` filtra los grupos resultantes después de calcular las funciones agregadas",
            "`HAVING` solo sirve para tablas temporales",
            "No hay diferencia, son intercambiables"
          ],
          "answerIndex": 0,
          "explanation": "`WHERE` opera sobre filas base del almacenamiento; `HAVING` opera sobre los grupos consolidados producidos por `GROUP BY`."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: CONSULTAS SQL AVANZADAS II: CTES Y CTES RECURSIVOS",
      "description": "Modularidad en SQL: Common Table Expressions (`WITH`), subconsultas correlacionadas, legibilidad y recorrido de jerarquías con CTEs recursivos.",
      "items": [
        "El problema de las subconsultas anidadas ilegibles y no optimizables.",
        "Common Table Expressions (CTEs) con la cláusula `WITH`: Nombrando tablas temporales lógicas para modularizar queries.",
        "Subconsultas correlacionadas vs Joins: Costo $O(n \\times m)$ y cómo descorrelacionarlas.",
        "CTEs Recursivos (`WITH RECURSIVE`): La herramienta matemática para recorrer árboles, grafos y estructuras organizacionales.",
        "Anatomía del CTE Recursivo: Miembro Ancla (Anchor Member) + `UNION ALL` + Miembro Recursivo con condición de terminación.",
        "Prevención de bucles infinitos en grafos cíclicos usando arrays de control de visita (`visited_ids`)."
      ],
      "content": "## Common Table Expressions (CTEs) y Recursión\n\nLas consultas complejas con 5 subconsultas anidadas son imposibles de mantener. Las **CTEs** permiten estructurar el código SQL como si declararas variables intermedias en un lenguaje de programación.\n\n### CTEs Recursivos\nPermiten recorrer jerarquías completas (como categorías con subcategorías infinitas o árboles genealógicos) en una sola consulta:\n1. **Ancla:** Selecciona los nodos raíz (ej. `parent_id IS NULL`).\n2. **Recursión:** Hace JOIN de la tabla con el resultado del paso anterior hasta que no queden hijos.",
      "codeSnippet": "-- CTE Recursivo para recorrer el organigrama de una empresa (Árbol Jerárquico)\nWITH RECURSIVE jerarquia_empleados AS (\n  -- 1. Miembro Ancla: El CEO (no tiene jefe)\n  SELECT id, nombre, jefe_id, 1 AS nivel\n  FROM empleados\n  WHERE jefe_id IS NULL\n\n  UNION ALL\n\n  -- 2. Miembro Recursivo: Empleados que reportan al nivel anterior\n  SELECT e.id, e.nombre, e.jefe_id, j.nivel + 1\n  FROM empleados e\n  INNER JOIN jerarquia_empleados j ON e.jefe_id = j.id\n)\nSELECT * FROM jerarquia_empleados ORDER BY nivel, nombre;",
      "quiz": [
        {
          "question": "¿Cuáles son los dos componentes esenciales que componen una consulta con `WITH RECURSIVE` en SQL?",
          "options": [
            "El Miembro Ancla (caso base no recursivo) y el Miembro Recursivo unidos mediante `UNION ALL`",
            "Un bucle for y un bucle while",
            "Un trigger y un procedimiento almacenado"
          ],
          "answerIndex": 0,
          "explanation": "El miembro ancla define el punto de partida (raíz); el miembro recursivo define cómo avanzar al siguiente nivel hasta agotar los datos."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: CONSULTAS SQL AVANZADAS III: WINDOW FUNCTIONS",
      "description": "Cálculo analítico sin colapsar filas: funciones de ventana (`OVER (PARTITION BY ... ORDER BY ...)`), `ROW_NUMBER`, `RANK`, `LAG`, `LEAD` y sumas acumuladas.",
      "items": [
        "La diferencia crucial entre `GROUP BY` (colapsa múltiples filas en una) y Window Functions (calcula agregados manteniendo cada fila visible).",
        "La cláusula `OVER()`: Particionado lógico (`PARTITION BY`) y ordenamiento interno (`ORDER BY`).",
        "Funciones de Ranking: `ROW_NUMBER()` (secuencia estricta), `RANK()` (con empates y saltos), `DENSE_RANK()` (con empates sin saltos).",
        "Funciones de Navegación: `LAG()` (valor de la fila anterior) y `LEAD()` (valor de la fila siguiente) para calcular crecimiento mes a mes.",
        "Marcos de Ventana (Window Frames): `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` para sumas móviles y saldos acumulados.",
        "Técnica para obtener el 'Top-N elementos por categoría' en una sola query limpia."
      ],
      "content": "## Window Functions: El Superpoder Analítico de SQL\n\nLas **Window Functions** operan sobre un conjunto de filas relacionadas pero **conservan la identidad de cada fila individual en el resultado final**.\n\n### Caso Clásico: Los 3 Productos Más Caros por Categoría\nAntes de las Window Functions, esto requería bucles procedimentales en el backend. Con `DENSE_RANK()` se resuelve en una sola consulta declarativa:\n```sql\nWITH ranking_productos AS (\n  SELECT \n    categoria_id,\n    nombre,\n    precio,\n    DENSE_RANK() OVER (PARTITION BY categoria_id ORDER BY precio DESC) as ranking\n  FROM productos\n)\nSELECT * FROM ranking_productos WHERE ranking <= 3;\n```",
      "codeSnippet": "-- Análisis financiero: Crecimiento mes a mes usando LAG()\nSELECT \n  mes,\n  ingresos,\n  LAG(ingresos, 1) OVER (ORDER BY mes) AS ingresos_mes_anterior,\n  ROUND(\n    ((ingresos - LAG(ingresos, 1) OVER (ORDER BY mes))::numeric / \n     NULLIF(LAG(ingresos, 1) OVER (ORDER BY mes), 0)) * 100, \n    2\n  ) AS porcentaje_crecimiento\nFROM ventas_mensuales\nORDER BY mes;",
      "quiz": [
        {
          "question": "¿En qué se diferencia fundamentalmente una función de ventana (Window Function) de una consulta con `GROUP BY`?",
          "options": [
            "La función de ventana calcula agregados o rankings sobre particiones sin colapsar las filas, devolviendo el mismo número de filas de entrada",
            "Las Window Functions solo funcionan en MySQL",
            "Las Window Functions borran los datos duplicados"
          ],
          "answerIndex": 0,
          "explanation": "`GROUP BY` colapsa las filas del grupo en una sola; las Window Functions mantienen cada fila intacta, adjuntando el cálculo como una columna adicional."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: ANATOMÍA INTERNA DE ÍNDICES: ÁRBOLES B+ VS BRIN VS HASH",
      "description": "Estructuras de datos en el motor de base de datos: por qué los Árboles B+ dominan los índices relacionales, complejidad $O(\\log n)$ e índices BRIN masivos.",
      "items": [
        "Por qué un escaneo secuencial (Sequential Scan / Table Scan) es $O(n)$ y destruye el rendimiento en tablas millonarias.",
        "Anatomía del Árbol B+ (B+ Tree): Nodos raíz, nodos internos y hojas con punteros secuenciales enlazados.",
        "Búsquedas de igualdad y búsquedas por rango ($O(\\log n)$) en hojas enlazadas bidireccionalmente.",
        "Índices Hash: Búsquedas de igualdad exacta $O(1)$, pero incapaces de manejar rangos (`<`, `>`, `BETWEEN`).",
        "Índices BRIN (Block Range Index): Índices ultraligeros para datos cronológicos masivos (ahorro de 99% de espacio en disco).",
        "El costo oculto de los índices: Penalización en escrituras (`INSERT`, `UPDATE`, `DELETE`) y consumo de memoria RAM."
      ],
      "content": "## Anatomía de Índices: Por qué los Árboles B+ son el Estándar\n\nEn un libro de 1,000 páginas, si buscas una palabra sin índice tendrías que leer las 1,000 páginas una por una ($O(n)$). El índice temático al final te dice la página exacta en 2 segundos ($O(\\log n)$).\n\n### ¿Por qué B+ Tree y no un Árbol Binario (AVL/Red-Black)?\n1. **Factor de Ramificación Masivo (High Fan-out):** Un nodo de B+ Tree coincide con una página de 8KB y puede almacenar cientos de claves. Con una altura de apenas 3 niveles, un árbol B+ indexa decenas de millones de registros (solo 3 lecturas de página).\n2. **Hojas Enlazadas:** Todas las hojas están conectadas en una lista doblemente enlazada, haciendo que consultas por rango (`WHERE fecha BETWEEN '2026-01-01' AND '2026-01-31'`) recorran las hojas secuencialmente a máxima velocidad sin subir por el árbol.",
      "codeSnippet": "-- Creación de índices según el patrón de acceso\n-- 1. B+ Tree estándar (por defecto) para rangos e igualdades\nCREATE INDEX idx_pedidos_cliente_fecha ON pedidos (cliente_id, creado_en DESC);\n\n-- 2. Índice BRIN para series temporales masivas (millones de filas ordenadas físicamente)\n-- Ocupa KB en lugar de cientos de MB\nCREATE INDEX idx_logs_fecha_brin ON logs_servidor USING brin (timestamp);\n\n-- 3. Índice Parcial: Indexar únicamente los registros activos (Ahorro de espacio)\nCREATE INDEX idx_pedidos_pendientes ON pedidos (creado_en) \nWHERE estado = 'PENDIENTE';",
      "quiz": [
        {
          "question": "¿Por qué los motores de base de datos utilizan Árboles B+ en lugar de Árboles Binarios de Búsqueda para sus índices en disco?",
          "options": [
            "Porque los nodos de un B+ Tree coinciden con el tamaño de página del disco (8KB) y tienen un factor de ramificación masivo, logrando árboles muy planos (altura 3-4) que minimizan las operaciones de I/O",
            "Porque los árboles binarios no son compatibles con C++",
            "Porque los árboles B+ no ocupan espacio en disco"
          ],
          "answerIndex": 0,
          "explanation": "El alto factor de ramificación del B+ Tree reduce la altura del árbol a 3 o 4 niveles para millones de filas, requiriendo solo 3 o 4 lecturas de bloque para hallar cualquier registro."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: ÍNDICES INVERTIDOS Y FULL-TEXT SEARCH: GIN Y GIST",
      "description": "Indexación de datos no estructurados: Generalized Inverted Index (GIN), búsqueda de texto completo con `tsvector` y `tsquery`, e indexación de JSONB en PostgreSQL.",
      "items": [
        "Limitaciones de los índices B+ Tree con operadores comodín (`WHERE texto LIKE '%algoritmo%'` fuerza Seq Scan).",
        "Concepto de Índice Invertido: Mapear términos/lexemas individuales a listas de IDs de documentos donde aparecen.",
        "Índices GIN (Generalized Inverted Index) en PostgreSQL: Aceleración de consultas sobre arrays, JSONB y texto.",
        "Índices GiST (Generalized Search Tree): Estructuras de balanceo para datos geométricos (PostGIS) y rangos.",
        "Full-Text Search nativo en PostgreSQL: Normalización con `to_tsvector()` (Stemming, Stop words) y coincidencia con `to_tsquery()`.",
        "Indexación profunda de documentos JSONB con operadores de existencia (`?`) y contención (`@>`)."
      ],
      "content": "## Índices Invertidos (GIN) y Full-Text Search\n\nCuando buscas una palabra dentro de millones de artículos o buscas claves dentro de documentos JSONB:\n* Un índice B+ Tree no sirve porque no puede indexar el interior de una cadena con comodines al inicio (`%palabra`).\n\n### Cómo funciona GIN\nUn **Índice GIN (Generalized Inverted Index)** descompone el contenido en elementos atómicos (lexemas en texto o claves en JSONB) y crea una tabla invertida:\n* Término `\"algoritmo\"` ➔ Documentos [4, 12, 89, 502]\n* Término `\"grafo\"` ➔ Documentos [12, 45, 89]\nSi buscas `\"algoritmo AND grafo\"`, el motor simplemente hace la intersección de las dos listas de IDs en memoria en microsegundos.",
      "codeSnippet": "-- Full-Text Search con GIN en PostgreSQL\n-- 1. Añadir columna tsvector generada automáticamente\nALTER TABLE articulos ADD COLUMN search_vector tsvector \nGENERATED ALWAYS AS (to_tsvector('spanish', coalesce(titulo, '') || ' ' || coalesce(cuerpo, ''))) STORED;\n\n-- 2. Crear índice GIN sobre el vector de búsqueda\nCREATE INDEX idx_articulos_search_gin ON articulos USING gin(search_vector);\n\n-- 3. Búsqueda semántica de texto completo ultraoptimizada\nSELECT id, titulo, ts_rank(search_vector, query) AS relevancia\nFROM articulos, to_tsquery('spanish', 'algoritmos & estructuras') query\nWHERE search_vector @@ query\nORDER BY relevancia DESC;",
      "quiz": [
        {
          "question": "¿Por qué un índice B+ Tree no puede optimizar una consulta con `WHERE titulo LIKE '%quimisell%'`?",
          "options": [
            "Porque el comodín `%` al inicio impide usar la propiedad ordenada del árbol, obligando al motor a escanear toda la tabla fila por fila (Seq Scan)",
            "Porque SQL no soporta el símbolo `%`",
            "Porque las palabras con Q están prohibidas en índices"
          ],
          "answerIndex": 0,
          "explanation": "Los árboles B+ ordenan cadenas de izquierda a derecha. Si el inicio de la palabra es desconocido (`%`), el índice no puede bifurcar y se descarta."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: ANÁLISIS DE CONSULTAS CON EXPLAIN ANALYZE: SEQ SCAN VS INDEX SCAN",
      "description": "La herramienta suprema de optimización: interpretación de planes de ejecución, Seq Scan, Index Scan, Index Only Scan, Bitmap Index Scan y costos de CPU/I/O.",
      "items": [
        "El Planificador y Optimizador de Consultas: Cómo el motor decide el camino más barato.",
        "Diferencia entre `EXPLAIN` (estimación matemática teórica) y `EXPLAIN ANALYZE` (ejecución real midiendo tiempos).",
        "Métricas clave del plan: `cost=min..max`, `rows`, `width`, `actual time=inicio..fin`, `loops`.",
        "Tipos de Escaneo de Tablas: Sequential Scan ($O(n)$), Index Scan ($O(\\log n)$), Index Only Scan (Cero acceso al Heap de tabla) y Bitmap Index Scan.",
        "Tipos de Joins internos: Nested Loop Join (para conjuntos pequeños con índice), Hash Join (para tablas grandes en memoria) y Merge Join (para entradas preordenadas).",
        "Diagnóstico de estimaciones erróneas causadas por estadísticas desactualizadas (`ANALYZE`)."
      ],
      "content": "## Dominando EXPLAIN ANALYZE\n\nNunca adivines por qué una consulta es lenta. Ejecuta `EXPLAIN (ANALYZE, BUFFERS)` para que el motor te muestre su plan de ejecución:\n\n### Tipos de Escaneo Fundamentales\n1. **Seq Scan (Sequential Scan):** Lee todas las páginas de la tabla de inicio a fin. Bueno para tablas de 100 filas; catastrófico para tablas de 10 millones de filas.\n2. **Index Scan:** Recorre el B+ Tree para encontrar los punteros de tupla y luego salta a la tabla en disco para leer el resto de columnas.\n3. **Index Only Scan (El Santo Grial):** Todas las columnas solicitadas en el `SELECT` residen dentro del propio índice. **¡Cero lecturas a la tabla principal!**\n4. **Bitmap Index Scan:** Lee el índice construyendo un mapa de bits en memoria de las páginas relevantes y las lee en orden secuencial físico, reduciendo el I/O aleatorio.",
      "codeSnippet": "-- Análisis del plan de ejecución real en PostgreSQL\nEXPLAIN (ANALYZE, BUFFERS, VERBOSE)\nSELECT c.nombre, count(p.id)\nFROM clientes c\nJOIN pedidos p ON c.id = p.cliente_id\nWHERE p.creado_en >= '2026-01-01'\nGROUP BY c.nombre;\n\n-- Lectura de salida típica:\n-- HashAggregate (cost=120.40..122.40 rows=200 actual time=1.820..1.850)\n--   -> Hash Join (cost=45.20..115.10 rows=1050 actual time=0.450..1.200)\n--        -> Index Scan using idx_pedidos_fecha on pedidos p (actual time=0.040..0.350)\n--        -> Hash ...",
      "quiz": [
        {
          "question": "¿Qué representa un 'Index Only Scan' en el resultado de un `EXPLAIN ANALYZE`?",
          "options": [
            "Que todas las columnas solicitadas por la consulta se encontraban directamente en el índice, permitiendo responder sin tener que leer la tabla principal en disco",
            "Que la consulta falló porque el índice está roto",
            "Que se usó un índice de solo lectura"
          ],
          "answerIndex": 0,
          "explanation": "Index Only Scan es la operación más rápida posible: el motor satisface toda la consulta leyendo únicamente las hojas del índice en memoria RAM."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: ESTADÍSTICAS DEL PLANIFICADOR, BLOAT Y VACUUM",
      "description": "Mantenimiento del motor: estadísticas de `pg_statistic`, bloat (hinchazón de tablas), tuplas muertas por MVCC y configuración de Autovacuum.",
      "items": [
        "El Optimizador basado en costos (CBO): Por qué el motor a veces decide hacer Seq Scan aunque exista un índice.",
        "El Catálogo `pg_stats`: Histogramas de distribución, frecuencias relativas (MCVs) y correlación física.",
        "Multi-Version Concurrency Control (MVCC) y la creación de Tuplas Muertas (Dead Tuples) con cada `UPDATE` y `DELETE`.",
        "Table Bloat (Hinchazón): Desperdicio masivo de disco y RAM por páginas llenas de registros muertos.",
        "El proceso `VACUUM` y `VACUUM FULL`: Limpieza de tuplas muertas y defragmentación física.",
        "Configuración y monitoreo de `autovacuum` para evitar degradaciones repentinas de producción."
      ],
      "content": "## MVCC, Tuplas Muertas y el Proceso VACUUM\n\nPostgreSQL implementa concurrencia mediante **MVCC (Multi-Version Concurrency Control)**:\n* Cuando ejecutas `UPDATE usuarios SET saldo = 50 WHERE id = 1`:\n  * El motor **no sobrescribe** el registro original.\n  * Marca el registro viejo como muerto (`xmax` asignado) e inserta una tupla completamente nueva con el nuevo saldo.\n* Con el tiempo, una tabla con muchas actualizaciones acumula millones de **Dead Tuples (Tuplas Muertas)**.\n\n### El Rol de VACUUM\nSi no se ejecuta `VACUUM`, las tablas se inflan (**Bloat**), las páginas consumen gigabytes de memoria inútil y las consultas se vuelven lentas. `VACUUM` recorre las páginas y marca el espacio de las tuplas muertas como disponible para futuras inserciones.",
      "codeSnippet": "-- Monitorear tuplas muertas y bloat en PostgreSQL\nSELECT \n  relname AS tabla,\n  n_live_tup AS tuplas_vivas,\n  n_dead_tup AS tuplas_muertas,\n  ROUND(n_dead_tup::numeric / NULLIF(n_live_tup + n_dead_tup, 0) * 100, 2) AS porcentaje_muerto,\n  last_vacuum,\n  last_autovacuum\nFROM pg_stat_user_tables\nORDER BY n_dead_tup DESC;\n\n-- Forzar limpieza y actualización de estadísticas del planificador\nVACUUM ANALYZE pedidos;",
      "quiz": [
        {
          "question": "¿Por qué un comando `UPDATE` en PostgreSQL genera una 'Tupla Muerta' (Dead Tuple)?",
          "options": [
            "Porque debido al modelo MVCC, PostgreSQL no sobrescribe la fila existente; crea una nueva versión de la tupla y marca la versión previa como obsoleta",
            "Porque borra el disco duro",
            "Porque las actualizaciones fallan siempre"
          ],
          "answerIndex": 0,
          "explanation": "MVCC permite que otros lectores sigan leyendo la versión anterior sin bloquearse; la tupla obsoleta debe ser reciclada posteriormente por VACUUM."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: TRANSACCIONES Y PROPIEDADES ACID EN PROFUNDIDAD",
      "description": "Las garantías sagradas de las bases de datos: Atomicidad (todo o nada), Consistencia (invariantes), Aislamiento (concurrencia) y Durabilidad (WAL).",
      "items": [
        "Definición formal del estándar ACID formulado por Jim Gray.",
        "Atomicidad: Una transacción es indivisible; si falla un paso, se revierten todos los cambios (`ROLLBACK`).",
        "Consistencia: Transición válida de un estado coherente a otro respetando constraints (`CHECK`, `FOREIGN KEY`, `UNIQUE`).",
        "Aislamiento: Transacciones concurrentes no deben interferir entre sí de forma destructiva.",
        "Durabilidad: Una vez confirmada (`COMMIT`), los datos sobrevivirán a cualquier apagón o caída del sistema.",
        "Anatomía de una transacción con Savepoints (`SAVEPOINT punto1`, `ROLLBACK TO SAVEPOINT punto1`)."
      ],
      "content": "## Las Propiedades ACID\n\nEl acrónimo **ACID** define las 4 garantías que diferencian a un motor relacional corporativo de un simple archivo de texto:\n\n1. **Atomicidad (A):** Principio de todo o nada. Si estás transfiriendo $100 de la cuenta A a la cuenta B, no puede ocurrir que se reste de A pero no se sume a B.\n2. **Consistencia (C):** El estado de la base de datos satisface todas las reglas del negocio e invariantes relacionales antes y después de la transacción.\n3. **Aislamiento (I):** Dos transacciones ejecutándose al mismo tiempo deben producir un resultado equivalente a si se hubieran ejecutado de forma estrictamente secuencial.\n4. **Durabilidad (D):** Los datos confirmados están seguros en almacenamiento persistente antes de devolver éxito al cliente.",
      "codeSnippet": "-- Transacción Bancaria Atómica con Savepoint\nBEGIN;\n\n-- Paso 1: Debitar de la cuenta origen\nUPDATE cuentas \nSET saldo_centavos = saldo_centavos - 10000 \nWHERE id = 'origen-uuid' AND saldo_centavos >= 10000;\n\nSAVEPOINT saldo_debitado;\n\n-- Paso 2: Acreditar a la cuenta destino\nUPDATE cuentas \nSET saldo_centavos = saldo_centavos + 10000 \nWHERE id = 'destino-uuid';\n\n-- Si todo es correcto, confirmar cambios永久\nCOMMIT;\n-- En caso de error inesperado: ROLLBACK;",
      "quiz": [
        {
          "question": "¿Qué propiedad ACID garantiza que si el servidor pierde el suministro eléctrico 1 milisegundo después de confirmar un `COMMIT`, la transacción persistirá intacta?",
          "options": [
            "Durabilidad (Durability)",
            "Atomicidad (Atomicity)",
            "Aislamiento (Isolation)"
          ],
          "answerIndex": 0,
          "explanation": "La Durabilidad garantiza que los cambios confirmados residen en almacenamiento persistente no volátil (WAL) y no se perderán ante caídas de hardware."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: NIVELES DE AISLAMIENTO TRANSACCIONAL Y ANOMALÍAS",
      "description": "Los 4 niveles de aislamiento SQL: Read Uncommitted, Read Committed, Repeatable Read y Serializable, y las anomalías que previenen.",
      "items": [
        "El balance entre Concurrencia (velocidad) y Aislamiento (seguridad matemática).",
        "Anomalías de Concurrencia del estándar ANSI SQL: Lectura Sucia (Dirty Read), Lectura No Repetible (Non-Repeatable Read) y Lectura Fantasma (Phantom Read).",
        "Nivel 1: Read Uncommitted (permite lecturas sucias de transacciones no confirmadas).",
        "Nivel 2: Read Committed (el estándar por defecto en PostgreSQL y Oracle).",
        "Nivel 3: Repeatable Read (instantánea congelada al inicio de la transacción mediante Snapshot Isolation).",
        "Nivel 4: Serializable (Aislamiento perfecto mediante SSI - Serializable Snapshot Isolation con detección de anomalías de sesgo de escritura).",
        "Write Skew (Sesgo de Escritura): La anomalía sutil que solo Serializable puede prevenir."
      ],
      "content": "## Niveles de Aislamiento y Anomalías de Concurrencia\n\n| Nivel de Aislamiento | Lectura Sucia | Lectura No Repetible | Lectura Fantasma | Serialization Anomaly |\n|---|---|---|---|---|\n| **Read Uncommitted** | ⚠️ Ocurre | ⚠️ Ocurre | ⚠️ Ocurre | ⚠️ Ocurre |\n| **Read Committed** (Default) | ❌ Prevenida | ⚠️ Ocurre | ⚠️ Ocurre | ⚠️ Ocurre |\n| **Repeatable Read** | ❌ Prevenida | ❌ Prevenida | ❌ Prevenida en PG | ⚠️ Write Skew |\n| **Serializable** | ❌ Prevenida | ❌ Prevenida | ❌ Prevenida | ❌ Prevenida |\n\n### ¿Qué es una Lectura Fantasma (Phantom Read)?\nTransacción 1 cuenta los usuarios activos: encuentra 10. Mientras tanto, Transacción 2 inserta un nuevo usuario activo y hace `COMMIT`. Si la Transacción 1 vuelve a contar, ahora encuentra 11 usuarios (apareció un \"fantasma\").",
      "codeSnippet": "-- Configurar el nivel de aislamiento para una transacción sensible\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\n-- Verificación de invariante compleja (evita Write Skew)\nSELECT count(*) FROM medicos_de_guardia WHERE hospital_id = 1;\n\n-- Si hay al menos 2, el médico puede pedir baja\nUPDATE medicos_de_guardia SET esta_de_guardia = false WHERE medico_id = 42;\n\nCOMMIT;\n-- Si otra transacción concurrente intentó lo mismo simultáneamente,\n-- PostgreSQL abortará una de ellas con el error: \n-- \"could not serialize access due to read/write dependencies\".",
      "quiz": [
        {
          "question": "¿Qué anomalía ocurre cuando una transacción lee datos modificados por otra transacción que aún no ha hecho `COMMIT` y que posteriormente hace `ROLLBACK`?",
          "options": [
            "Lectura Sucia (Dirty Read)",
            "Lectura Fantasma (Phantom Read)",
            "Lectura No Repetible"
          ],
          "answerIndex": 0,
          "explanation": "Una Lectura Sucia lee datos efímeros que nunca existieron formalmente en la base de datos porque la transacción que los mutó fue abortada."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: CONCURRENCIA, BLOQUEOS Y DEADLOCKS",
      "description": "El control de concurrencia: bloqueos a nivel de fila (`SELECT FOR UPDATE`), bloqueos de tabla, detección de Deadlocks y resolución matemática.",
      "items": [
        "Bloqueos Compartidos (Shared Locks / S) vs Bloqueos Exclusivos (Exclusive Locks / X).",
        "Bloqueo pesimista a nivel de fila: `SELECT ... FOR UPDATE` y `SELECT ... FOR SHARE`.",
        "Opciones de control de concurrencia no bloqueante: `NOWAIT` y `SKIP LOCKED` (la base de los sistemas de colas de alta velocidad).",
        "¿Qué es un Deadlock (Bloqueo Mutuo)?: La condición matemática de interbloqueo circular (Transacción A espera a B, y B espera a A).",
        "El algoritmo de detección de Deadlocks mediante Grafos de Espera (Wait-For Graph) en PostgreSQL.",
        "Estrategia de prevención de Deadlocks: Ordenamiento determinista de recursos en todo el código de aplicación."
      ],
      "content": "## Bloqueos y Deadlocks\n\nCuando dos transacciones necesitan modificar los mismos registros al mismo tiempo, el motor aplica **Locks (Bloqueos)** para garantizar la integridad.\n\n### El Fenómeno del Deadlock\n```\nTransacción 1                          Transacción 2\n     │                                      │\nBloquea Fila A                         Bloquea Fila B\n     │                                      │\nIntenta bloquear Fila B                Intenta bloquear Fila A\n(Se queda esperando a T2...)           (Se queda esperando a T1...)\n     ▼                                      ▼\n     └──────────── DEADLOCK DETECTADO ──────┘\n```\nAmbas transacciones se congelan esperando a la otra. El motor detecta el ciclo en su **Grafo de Esperas**, aborta una de las dos transacciones con error `40P01 (deadlock_detected)` y permite que la otra continúe.",
      "codeSnippet": "-- 1. Bloqueo pesimista seguro para evitar condiciones de carrera\nBEGIN;\nSELECT saldo_centavos \nFROM cuentas \nWHERE id = 'cuenta-1' \nFOR UPDATE; -- Bloquea la fila hasta que termine la transacción\n\nUPDATE cuentas SET saldo_centavos = saldo_centavos - 500 WHERE id = 'cuenta-1';\nCOMMIT;\n\n-- 2. Consumo de colas ultraescalable sin contención con SKIP LOCKED\nSELECT * FROM cola_trabajos \nWHERE estado = 'PENDIENTE' \nORDER BY prioridad DESC \nLIMIT 1 \nFOR UPDATE SKIP LOCKED; -- Los trabajadores concurrentes se saltan las filas tomadas sin bloquearse",
      "quiz": [
        {
          "question": "¿Cómo se previene arquitectónicamente la ocurrencia de Deadlocks al modificar múltiples registros en transacciones concurrentes?",
          "options": [
            "Bloqueando y modificando los registros siempre en el mismo orden determinista (por ejemplo, ordenados por su ID ascendente) en todas las transacciones",
            "Aumentando el tiempo de espera a 1 hora",
            "Desactivando las transacciones"
          ],
          "answerIndex": 0,
          "explanation": "Si todas las transacciones bloquean los recursos en el mismo orden (ej. primero el ID 1 y luego el ID 2), es matemáticamente imposible que se forme un ciclo de espera."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: BASES DE DATOS NOSQL VS RELACIONALES: REDIS Y DOCUMENTOS",
      "description": "El panorama políglota: bases de datos Clave-Valor (Redis en memoria), Documentales (MongoDB), Columnares (ClickHouse) y el Teorema CAP.",
      "items": [
        "El mito de 'SQL vs NoSQL': Persistencia políglota (usar la herramienta adecuada para cada problema).",
        "El Teorema CAP de Eric Brewer: Consistencia (C), Disponibilidad (A) y Tolerancia a Particiones (P).",
        "Redis: Estructuras de datos puras en memoria (Strings, Hashes, Lists, Sets, Sorted Sets, Bitmaps).",
        "Patrones de Caché con Redis: Cache-Aside, Write-Through, Write-Behind y políticas de expiración TTL (LRU/LFU).",
        "Bases de datos Documentales (MongoDB): Ventajas para catálogos dinámicos y desventajas en transacciones complejas.",
        "Bases de datos Columnares (ClickHouse / Snowflake): Procesamiento analítico masivo (OLAP) vs transaccional (OLTP)."
      ],
      "content": "## Persistencia Políglota y Teorema CAP\n\nUna arquitectura de software moderna no usa un solo motor de base de datos para todo:\n* **PostgreSQL (OLTP):** Para datos transaccionales de negocio, usuarios, compras y balances contables donde ACID es innegociable.\n* **Redis (Caché / Sesiones):** Base de datos clave-valor en memoria RAM con latencias de microsegundos (<1ms) para sesiones, rate limiting y rankings con Sorted Sets.\n* **ClickHouse (OLAP):** Almacenamiento columnar comprimido para procesar miles de millones de eventos analíticos por segundo.",
      "codeSnippet": "// Ejemplo: Patrón Cache-Aside con Redis en TypeScript\nimport { createClient } from 'redis';\nconst redis = createClient();\n\nexport async function obtenerUsuarioConCache(userId: string): Promise<Usuario> {\n  const claveCache = \\`usuario:\\${userId}\\`;\n\n  // 1. Intentar leer de Redis (Memoria RAM < 1ms)\n  const cached = await redis.get(claveCache);\n  if (cached) {\n    return JSON.parse(cached); // Cache Hit\n  }\n\n  // 2. Cache Miss: Consultar la base de datos PostgreSQL\n  const usuario = await db.query('SELECT * FROM usuarios WHERE id = $1', [userId]);\n\n  // 3. Guardar en Redis con expiración de 1 hora (TTL)\n  await redis.setEx(claveCache, 3600, JSON.stringify(usuario));\n\n  return usuario;\n}",
      "quiz": [
        {
          "question": "Según el Teorema CAP, ¿qué combinación es físicamente imposible de garantizar en un sistema de base de datos distribuido ante una falla de red?",
          "options": [
            "Garantizar simultáneamente Consistencia estricta (C) y Disponibilidad total (A) durante una Partición de Red (P)",
            "Guardar más de 1 terabyte de datos",
            "Usar contraseñas alfanuméricas"
          ],
          "answerIndex": 0,
          "explanation": "Si la red se particiona (P), el sistema debe elegir entre devolver datos inconsistentes para estar disponible (AP) o rechazar la petición para mantener consistencia (CP)."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: PARTICIONAMIENTO DE TABLAS Y SHARDING A GRAN ESCALA",
      "description": "Escalabilidad horizontal y vertical de datos: particionamiento declarativo en PostgreSQL (Range, List, Hash), poda de particiones (Partition Pruning) y Sharding.",
      "items": [
        "El límite de una tabla única: Cuando un índice B+ Tree ya no cabe en la memoria RAM.",
        "Particionamiento Declarativo en PostgreSQL: División lógica de una tabla en tablas hijas físicas transparentes para la aplicación.",
        "Estrategias de Particionamiento: Por Rango (fechas/años), Por Lista (países/regiones) y Por Hash (distribución uniforme).",
        "Poda de Particiones (Partition Pruning): Cómo el planificador salta el 95% de las tablas que no contienen los datos buscados.",
        "Diferencia entre Particionamiento (un solo servidor, múltiples tablas) y Sharding (múltiples servidores de base de datos distribuidos).",
        "Estrategias de migración y rotación de particiones históricas a almacenamiento frío (Cold Storage)."
      ],
      "content": "## Particionamiento Declarativo de Tablas\n\nCuando una tabla de transacciones alcanza 500 millones de registros, el índice B+ Tree supera los 64GB de RAM y las consultas se degradan drásticamente.\n\n### Particionamiento por Rango\nCon **Particionamiento**, la aplicación sigue haciendo `SELECT * FROM transacciones WHERE fecha >= '2026-03-01'`:\n* El motor aplica **Partition Pruning (Poda)**: sabe que los datos de marzo residen exclusivamente en la tabla física `transacciones_2026_03`.\n* Lee únicamente esa pequeña tabla y su índice compacto, ignorando los otros 10 años de historia sin sobrecargar la RAM.",
      "codeSnippet": "-- Particionamiento Declarativo por Rango en PostgreSQL\n-- 1. Tabla maestra particionada\nCREATE TABLE eventos_sistema (\n  id UUID NOT NULL,\n  creado_en TIMESTAMPTZ NOT NULL,\n  evento VARCHAR(50) NOT NULL,\n  metadata JSONB,\n  PRIMARY KEY (id, creado_en)\n) PARTITION BY RANGE (creado_en);\n\n-- 2. Crear particiones hijas para cada mes\nCREATE TABLE eventos_2026_01 PARTITION OF eventos_sistema\n  FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');\n\nCREATE TABLE eventos_2026_02 PARTITION OF eventos_sistema\n  FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');\n\n-- La consulta poda las particiones irrelevantes en microsegundos\nEXPLAIN SELECT * FROM eventos_sistema \nWHERE creado_en >= '2026-01-15' AND creado_en < '2026-01-20';",
      "quiz": [
        {
          "question": "¿En qué consiste la técnica de 'Partition Pruning' (Poda de Particiones)?",
          "options": [
            "El optimizador analiza la cláusula WHERE y descarta de inmediato las particiones que matemáticamente no pueden contener los datos buscados, leyendo solo las tablas necesarias",
            "Borra los datos de la base de datos automáticamente",
            "Comprime los índices en formato zip"
          ],
          "answerIndex": 0,
          "explanation": "La poda de particiones evita escanear toda la estructura histórica, accediendo únicamente a la partición física relevante."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: INTRODUCCIÓN A BASES VECTORIALES Y EMBEDDINGS PARA IA",
      "description": "La memoria de los modelos de Inteligencia Artificial: de palabras a vectores en espacios euclidianos de alta dimensión (1536 dimensiones), embeddings semánticos y bases vectoriales.",
      "items": [
        "El problema de la búsqueda léxica tradicional: La computadora busca letras exactas, pero no entiende conceptos ni sinónimos.",
        "¿Qué es un Embedding?: Representación matemática densa de significado en un espacio vectorial n-dimensional.",
        "Modelos de Embeddings (OpenAI text-embedding-3, Voyage, BGE): Transformando párrafos de texto en arreglos de números flotantes.",
        "La hipótesis semántica distributiva: Textos con significados similares tienen vectores cercanos en el espacio vectorial.",
        "Bases de Datos Vectoriales: Almacenamiento, indexación y recuperación de vectores de alta dimensión (Pinecone, Qdrant, Chroma, Weaviate y pgvector)."
      ],
      "content": "## Embeddings y Bases de Datos Vectoriales\n\nLas bases de datos relacionales tradicionales comparan cadenas con `WHERE texto = 'gato'`. Si el usuario busca `\"felino doméstico\"`, la base de datos relacional devuelve 0 resultados.\n\n### ¿Qué es un Embedding?\nUn modelo de lenguaje mapea cualquier fragmento de texto a una lista de números flotantes (por ejemplo, 1536 números entre -1 y 1):\n* `\"gato\"` ➔ `[0.021, -0.891, 0.453, ...]`\n* `\"felino\"` ➔ `[0.023, -0.887, 0.449, ...]`\n* `\"computadora\"` ➔ `[-0.781, 0.123, -0.654, ...]`\n\nLos vectores de `\"gato\"` y `\"felino\"` apuntan prácticamente en la misma dirección en el espacio multidimensional. Una base vectorial permite buscar por **significado conceptual** en lugar de coincidencia exacta de letras.",
      "codeSnippet": "// Estructura de un Embedding vectorial en TypeScript\nexport interface DocumentoVectorial {\n  id: string;\n  contenido: string;\n  // Vector denso de 1536 dimensiones generado por OpenAI text-embedding-3-small\n  embedding: number[]; \n}\n\n// Ejemplo conceptual de vector de 3 dimensiones\nconst vectorRey    = [0.95, 0.10, 0.85];\nconst vectorHombre = [0.80, 0.05, 0.80];\nconst vectorReina  = [0.93, 0.90, 0.84];\n// Famosa propiedad matemática: Rey - Hombre + Mujer ≈ Reina",
      "quiz": [
        {
          "question": "¿Cuál es la función primordial de un modelo de Embeddings en Inteligencia Artificial?",
          "options": [
            "Convertir texto no estructurado en un vector numérico denso en un espacio de alta dimensión donde la distancia geométrica representa cercanía semántica de significado",
            "Comprimir archivos PDF",
            "Traducir código de Python a JavaScript"
          ],
          "answerIndex": 0,
          "explanation": "Los embeddings capturan el significado semántico en coordenadas matemáticas, permitiendo comparar conceptos mediante operaciones geométricas."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: MÉTRICAS DE DISTANCIA VECTORIAL: COSENO, L2 Y PRODUCTO PUNTO",
      "description": "Geometría multidimensional para IA: Similitud Coseno (Cosine Similarity), Distancia Euclidiana (L2), Producto Punto (Dot Product) y su costo computacional.",
      "items": [
        "La pregunta geométrica: ¿Cómo medimos la cercanía entre dos vectores en 1536 dimensiones?",
        "Similitud Coseno (Cosine Similarity): Medir el ángulo entre dos vectores independientemente de su magnitud (longitud del texto).",
        "Fórmula matemática del Coseno: $\\cos(\\theta) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}$.",
        "Distancia Euclidiana ($L_2$): La distancia en línea recta en el hiperespacio multidimensional.",
        "Producto Punto (Dot Product / Inner Product): La métrica más rápida en hardware (GPUs/AVX-512) cuando los vectores están normalizados a longitud 1.",
        "Cuándo utilizar cada métrica según el modelo de embeddings."
      ],
      "content": "## Métricas de Distancia Vectorial\n\n### 1. Similitud Coseno (Cosine Similarity)\nMide el ángulo entre dos vectores:\n* Valor `1.0`: Vectores apuntan exactamente en la misma dirección (significado idéntico).\n* Valor `0.0`: Vectores ortogonales (sin relación semántica).\n* Valor `-1.0`: Vectores diametralmente opuestos.\nEl Coseno es insensible a la longitud del documento (no penaliza si un texto es un resumen corto y el otro un capítulo largo).\n\n### 2. Producto Punto con Vectores Normalizados\nSi los vectores están normalizados ($\\|\\mathbf{A}\\| = 1$), la fórmula del Coseno se simplifica al **Producto Punto**:\n$$\\mathbf{A} \\cdot \\mathbf{B} = \\sum_{i=1}^{n} A_i B_i$$\nLas GPUs y CPUs modernas ejecutan productos punto a miles de millones de operaciones por segundo mediante instrucciones vectoriales SIMD.",
      "codeSnippet": "// Implementación pura de Similitud Coseno en TypeScript\nexport function similitudCoseno(vecA: number[], vecB: number[]): number {\n  if (vecA.length !== vecB.length) throw new Error('Dimensiones incompatibles');\n\n  let productoPunto = 0;\n  let normaA = 0;\n  let normaB = 0;\n\n  for (let i = 0; i < vecA.length; i++) {\n    productoPunto += vecA[i] * vecB[i];\n    normaA += vecA[i] * vecA[i];\n    normaB += vecB[i] * vecB[i];\n  }\n\n  const magnitud = Math.sqrt(normaA) * Math.sqrt(normaB);\n  if (magnitud === 0) return 0;\n  return productoPunto / magnitud;\n}",
      "quiz": [
        {
          "question": "¿Por qué la Similitud Coseno es la métrica predilecta para comparar embeddings de texto en aplicaciones de IA?",
          "options": [
            "Porque evalúa la dirección conceptual del vector en lugar de su magnitud, evitando que un documento largo sea considerado diferente de un resumen corto del mismo tema",
            "Porque solo usa números enteros",
            "Porque no requiere matemáticas"
          ],
          "answerIndex": 0,
          "explanation": "El Coseno aísla el ángulo semántico de la longitud del texto, permitiendo comparar textos cortos con párrafos extensos de manera justa."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: INDEXACIÓN VECTORIAL: HNSW VS IVFFLAT CON PGVECTOR",
      "description": "Búsqueda de vecinos más cercanos aproximados (ANN): la extensión `pgvector` en PostgreSQL, índices IVFFlat y el grafo HNSW (Hierarchical Navigable Small World).",
      "items": [
        "El problema de la búsqueda exacta (k-NN exhaustiva): Comparar contra millones de vectores es $O(n \\times d)$ y toma segundos.",
        "Búsqueda Aproximada de Vecinos Más Cercanos (ANN): Sacrificar 1% de precisión a cambio de 1000x más velocidad.",
        "Índice IVFFlat (Inverted File Flat): Agrupamiento de vectores en centroides mediante K-Means y búsqueda en listas invertidas.",
        "Índice HNSW (Hierarchical Navigable Small World): Grafos navegables multicapa estilo Skip-Lists multidimensionales.",
        "Comparativa técnica: HNSW (altísima velocidad y precisión, consume más RAM) vs IVFFlat (mínimo consumo de RAM, requiere reindexar periódicamente).",
        "Configuración y operadores de `pgvector`: `<=>` (Coseno), `<->` (L2), `<#>` (Producto punto negativo)."
      ],
      "content": "## pgvector: PostgreSQL como Base de Datos Vectorial\n\nNo necesitas pagar una base de datos vectorial externa si ya tienes PostgreSQL. Con la extensión oficial **`pgvector`**, conviertes tus tablas relacionales en un almacén vectorial de alta velocidad.\n\n### El Algoritmo HNSW (El Estándar de la Industria)\nHNSW construye un grafo navegable multicapa:\n* En las capas superiores, los enlaces recorren distancias enormes en el espacio vectorial (búsqueda rápida global).\n* A medida que desciende de capa, los enlaces se vuelven más densos y locales, aterrizando en los vecinos más cercanos en menos de 5 milisegundos sobre millones de vectores.",
      "codeSnippet": "-- Uso de pgvector en PostgreSQL con índice HNSW\nCREATE EXTENSION IF NOT EXISTS vector;\n\n-- Tabla que combina datos relacionales clásicos con embeddings de IA\nCREATE TABLE documentos_empresa (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  titulo TEXT NOT NULL,\n  contenido TEXT NOT NULL,\n  categoria VARCHAR(50) NOT NULL,\n  embedding vector(1536) NOT NULL -- Vector de 1536 dimensiones\n);\n\n-- Creación del índice HNSW con métrica de Similitud Coseno\nCREATE INDEX idx_documentos_hnsw ON documentos_empresa \nUSING hnsw (embedding vector_cosine_ops)\nWITH (m = 16, ef_construction = 64);\n\n-- Búsqueda semántica de los 5 documentos más cercanos al vector consultado\nSELECT id, titulo, 1 - (embedding <=> '[0.012, -0.892, ...]'::vector) AS similitud\nFROM documentos_empresa\nORDER BY embedding <=> '[0.012, -0.892, ...]'::vector\nLIMIT 5;",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja del índice vectorial HNSW frente a la búsqueda exhaustiva plana?",
          "options": [
            "Permite encontrar los vectores más cercanos en milisegundos mediante un grafo navegable multicapa sin tener que calcular la distancia contra cada fila de la tabla",
            "Borra los vectores duplicados de la base de datos",
            "No consume memoria RAM"
          ],
          "answerIndex": 0,
          "explanation": "HNSW navega por un grafo conectando vectores similares, reduciendo la búsqueda de $O(n)$ a una navegación logarítmica ultrarrápida."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: ARQUITECTURA RAG HÍBRIDA: VECTORIAL + LÉXICA (BM25)",
      "description": "Generación Aumentada por Recuperación de nivel producción: RAG Híbrido, fusión de búsqueda vectorial con BM25 léxico, Reciprocal Rank Fusion (RRF) y Cross-Encoders.",
      "items": [
        "Por qué la búsqueda vectorial pura falla en producción: Nombres propios, códigos de error y números de factura.",
        "Arquitectura RAG Híbrida: Búsqueda Semántica Vectorial (pgvector) + Búsqueda Léxica de Palabras Clave (Full-Text Search / BM25).",
        "Algoritmo de Fusión: Reciprocal Rank Fusion (RRF) para combinar listas de resultados dispares sin calibrar puntajes arbitrarios.",
        "Re-ranking con Cross-Encoders: Reordenar los 20 mejores candidatos con un modelo de atención cruzada profundo.",
        "Chunking Estratégico: División de documentos por párrafos semánticos con solapamiento (Overlap) vs división arbitraria por caracteres.",
        "Mitigación de alucinaciones en LLMs proporcionando contexto preciso de base de datos."
      ],
      "content": "## Arquitectura RAG Híbrida: Lo Mejor de Dos Mundos\n\n* **Búsqueda Vectorial Pura:** Entiende conceptos (\"cómo renovar mi membresía\"), pero fracasa estrepitosamente si buscas un código exacto como `\"ERROR-409-CONFLICT\"` o un nombre propio específico.\n* **Búsqueda Léxica (BM25 / Full-Text):** Excelente para palabras clave exactas, pero ciega ante sinónimos.\n\n### La Solución: RAG Híbrido con Reciprocal Rank Fusion (RRF)\n1. Ejecutas la búsqueda vectorial en `pgvector` y obtienes el Top 20.\n2. Ejecutas la búsqueda léxica Full-Text con `to_tsquery` y obtienes el Top 20.\n3. El algoritmo **RRF** combina ambas clasificaciones calculando un puntaje unificado:\n   $$RRF(d) = \\sum_{m \\in M} \\frac{1}{k + \\text{rank}_m(d)}$$\n4. Un modelo **Cross-Encoder** reordena los 5 mejores fragmentos finales para alimentar al LLM.",
      "codeSnippet": "-- Búsqueda Híbrida en PostgreSQL (Full-Text Search + Vectorial con RRF)\nWITH busqueda_lexica AS (\n  SELECT id, ROW_NUMBER() OVER (ORDER BY ts_rank_cd(search_vector, query) DESC) AS rank_lexico\n  FROM documentos_empresa, to_tsquery('spanish', 'factura & error & 500') query\n  WHERE search_vector @@ query\n  LIMIT 20\n),\nbusqueda_vectorial AS (\n  SELECT id, ROW_NUMBER() OVER (ORDER BY embedding <=> '[0.012, -0.45, ...]'::vector) AS rank_vector\n  FROM documentos_empresa\n  LIMIT 20\n)\nSELECT \n  COALESCE(l.id, v.id) AS documento_id,\n  -- Fórmula Reciprocal Rank Fusion (k=60 estándar)\n  COALESCE(1.0 / (60 + l.rank_lexico), 0.0) + \n  COALESCE(1.0 / (60 + v.rank_vector), 0.0) AS puntaje_rrf\nFROM busqueda_lexica l\nFULL OUTER JOIN busqueda_vectorial v ON l.id = v.id\nORDER BY puntaje_rrf DESC\nLIMIT 5;",
      "quiz": [
        {
          "question": "¿Por qué las aplicaciones profesionales de IA prefieren RAG Híbrido (Vectorial + Léxico) sobre la búsqueda vectorial pura?",
          "options": [
            "Porque combina la comprensión semántica de conceptos abstractos con la precisión exacta de búsqueda de nombres propios, números de serie y códigos técnicos",
            "Porque la búsqueda vectorial es ilegal en bases de datos relacionales",
            "Porque consume menos electricidad"
          ],
          "answerIndex": 0,
          "explanation": "El RAG Híbrido elimina los puntos ciegos de ambas tecnologías: encuentra tanto conceptos similares como identificadores exactos sin fallar."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: ARQUITECTURA DE DATOS A GRAN ESCALA CON RAG",
      "description": "Diseño y despliegue del sistema de datos empresarial definitivo: esquema 3NF, particionamiento por fecha, índices B+ y GIN, y motor de búsqueda vectorial híbrida para agentes de IA.",
      "items": [
        "Integración de todas las disciplinas de modelado relacional, indexación y bases vectoriales.",
        "Diseño del esquema de base de datos corporativo con particionamiento mensual.",
        "Optimización de consultas críticas con EXPLAIN ANALYZE garantizando Index Only Scans.",
        "Aislamiento transaccional estricto con bloqueos pesimistas para operaciones financieras concurrentes.",
        "Canalización de documentos empresariales con embeddings normalizados en `pgvector`.",
        "Endpoint de consulta RAG híbrido que responde con citas exactas y latencia sub-50ms."
      ],
      "content": "## Proyecto Integrador: El Sistema de Datos Empresarial\n\nEn este módulo final, ensamblamos la arquitectura integral de almacenamiento que sustenta a las empresas modernas:\n\n```\n┌─────────────────────────────────────────────────────────────┐\n│                 PostgreSQL 16 Corporativo                   │\n│                                                             │\n│ ┌───────────────────────────┐   ┌─────────────────────────┐ │\n│ │  Capa Relacional (ACID)   │   │ Capa Analítica / Part.  │ │\n│ │  - Clientes (UUID, 3NF)   │   │ - Transacciones Part.   │ │\n│ │  - Pedidos & Cuentas      │   │ - Índices BRIN / B+     │ │\n│ └─────────────┬─────────────┘   └────────────┬────────────┘ │\n│               │                              │              │\n│               ▼                              ▼              │\n│ ┌─────────────────────────────────────────────────────────┐ │\n│ │        Capa de Inteligencia Artificial (pgvector)       │ │\n│ │  - Documentos / Chunks (1536 dimensiones)               │ │\n│ │  - Índice HNSW (M=16, ef_construction=64)              │ │\n│ │  - Búsqueda Híbrida RRF (Léxica GIN + Semántica Vector) │ │\n│ └─────────────────────────────────────────────────────────┘ │\n└─────────────────────────────────────────────────────────────┘\n```",
      "codeSnippet": "// Ejemplo del Proyecto Integrador: Pipeline RAG en TypeScript con PostgreSQL\nexport class MotorBusquedaRAG {\n  constructor(private pool: any, private llmEmbeddings: any) {}\n\n  async buscarContexto(consultaUsuario: string): Promise<string[]> {\n    // 1. Generar embedding de la consulta del usuario\n    const vectorConsulta = await this.llmEmbeddings.generar(consultaUsuario);\n\n    // 2. Ejecutar búsqueda híbrida en PostgreSQL (Full-Text + HNSW)\n    const query = \\`\n      WITH lexica AS (\n        SELECT id, ROW_NUMBER() OVER (ORDER BY ts_rank_cd(search_vector, plainto_tsquery('spanish', $1)) DESC) as r_lex\n        FROM base_conocimiento WHERE search_vector @@ plainto_tsquery('spanish', $1) LIMIT 10\n      ),\n      vectorial AS (\n        SELECT id, ROW_NUMBER() OVER (ORDER BY embedding <=> $2::vector) as r_vec\n        FROM base_conocimiento ORDER BY embedding <=> $2::vector LIMIT 10\n      )\n      SELECT b.contenido\n      FROM lexica l\n      FULL OUTER JOIN vectorial v ON l.id = v.id\n      JOIN base_conocimiento b ON b.id = COALESCE(l.id, v.id)\n      ORDER BY (COALESCE(1.0 / (60 + l.r_lex), 0.0) + COALESCE(1.0 / (60 + v.r_vec), 0.0)) DESC\n      LIMIT 3;\n    \\`;\n\n    const res = await this.pool.query(query, [consultaUsuario, JSON.stringify(vectorConsulta)]);\n    return res.rows.map((r: any) => r.contenido);\n  }\n}",
      "quiz": [
        {
          "question": "¿Por qué unificar la capa relacional y la capa vectorial en PostgreSQL con `pgvector` simplifica radicalmente la arquitectura de una empresa?",
          "options": [
            "Porque elimina la necesidad de sincronizar dos bases de datos distintas (evitando inconsistencias entre la BD principal y una base vectorial externa), manteniendo ACID completo y copias de seguridad unificadas",
            "Porque no requiere hacer respaldos",
            "Porque PostgreSQL es gratuito y las otras están prohibidas"
          ],
          "answerIndex": 0,
          "explanation": "Tener datos relacionales y vectoriales en el mismo motor simplifica la infraestructura, permite JOINs directos entre metadatos y vectores, y preserva la coherencia transaccional."
        }
      ]
    }
  ]
};

export const SQL_DATOS_IA_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 1: FUNDAMENTOS DEL MODELO RELACIONAL Y ÁLGEBRA RELACIONAL.",
      "placeholder": "-- Demostración de Álgebra Relacional en SQL\n-- Proyección (pi) y Selección (sigma)\nSELECT id, nombre, email -- Proyección (pi)\nFROM usuarios            -- Relación (R)\nWHERE esta_activo = true -- Selección (sigma)\n  AND saldo > 100;",
      "expectedKeywords": [
        "fundamentos"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 2: ARQUITECTURA DE MOTORES DE BD: BUFFER POOL Y WAL.",
      "placeholder": "-- Inspección del estado del Buffer Pool en PostgreSQL\nSELECT \n  count(*) * 8 / 1024 AS buffer_cache_mb,\n  usagecount\nFROM pg_buffercache\nGROUP BY usagecount\nORDER BY usagecount DESC;\n\n-- Ver estadísticas de escritura de WAL y checkpoints\nSELECT * FROM pg_stat_bgwriter;",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 3: MODELADO DE DATOS Y NORMALIZACIÓN: 1NF A 3NF Y BCNF.",
      "placeholder": "-- Esquema Normalizado en 3NF (Sin redundancia ni anomalías)\nCREATE TABLE clientes (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  nombre VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL\n);\n\nCREATE TABLE pedidos (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  cliente_id UUID NOT NULL REFERENCES clientes(id),\n  creado_en TIMESTAMPTZ DEFAULT NOW(),\n  total_centavos BIGINT NOT NULL CHECK (total_centavos >= 0)\n);\n\nCREATE TABLE items_pedido (\n  pedido_id UUID REFERENCES pedidos(id) ON DELETE CASCADE,\n  producto_id UUID NOT NULL,\n  cantidad INT NOT NULL CHECK (cantidad > 0),\n  precio_unitario_centavos BIGINT NOT NULL,\n  PRIMARY KEY (pedido_id, producto_id)\n);",
      "expectedKeywords": [
        "modelado"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 4: CONSULTAS SQL AVANZADAS I: JOINS Y AGREGACIONES.",
      "placeholder": "-- Consulta analítica: Total gastado por cliente con LEFT JOIN y HAVING\nSELECT \n  c.id AS cliente_id,\n  c.nombre,\n  COUNT(p.id) AS pedidos_completados,\n  COALESCE(SUM(p.total_centavos), 0) AS total_gastado_centavos\nFROM clientes c\nLEFT JOIN pedidos p ON c.id = p.cliente_id AND p.estado = 'PAGADO'\nGROUP BY c.id, c.nombre\nHAVING COALESCE(SUM(p.total_centavos), 0) > 100000 -- Más de $1,000 gastados\nORDER BY total_gastado_centavos DESC;",
      "expectedKeywords": [
        "consultas"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 5: CONSULTAS SQL AVANZADAS II: CTES Y CTES RECURSIVOS.",
      "placeholder": "-- CTE Recursivo para recorrer el organigrama de una empresa (Árbol Jerárquico)\nWITH RECURSIVE jerarquia_empleados AS (\n  -- 1. Miembro Ancla: El CEO (no tiene jefe)\n  SELECT id, nombre, jefe_id, 1 AS nivel\n  FROM empleados\n  WHERE jefe_id IS NULL\n\n  UNION ALL\n\n  -- 2. Miembro Recursivo: Empleados que reportan al nivel anterior\n  SELECT e.id, e.nombre, e.jefe_id, j.nivel + 1\n  FROM empleados e\n  INNER JOIN jerarquia_empleados j ON e.jefe_id = j.id\n)\nSELECT * FROM jerarquia_empleados ORDER BY nivel, nombre;",
      "expectedKeywords": [
        "consultas"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 6: CONSULTAS SQL AVANZADAS III: WINDOW FUNCTIONS.",
      "placeholder": "-- Análisis financiero: Crecimiento mes a mes usando LAG()\nSELECT \n  mes,\n  ingresos,\n  LAG(ingresos, 1) OVER (ORDER BY mes) AS ingresos_mes_anterior,\n  ROUND(\n    ((ingresos - LAG(ingresos, 1) OVER (ORDER BY mes))::numeric / \n     NULLIF(LAG(ingresos, 1) OVER (ORDER BY mes), 0)) * 100, \n    2\n  ) AS porcentaje_crecimiento\nFROM ventas_mensuales\nORDER BY mes;",
      "expectedKeywords": [
        "consultas"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 7: ANATOMÍA INTERNA DE ÍNDICES: ÁRBOLES B+ VS BRIN VS HASH.",
      "placeholder": "-- Creación de índices según el patrón de acceso\n-- 1. B+ Tree estándar (por defecto) para rangos e igualdades\nCREATE INDEX idx_pedidos_cliente_fecha ON pedidos (cliente_id, creado_en DESC);\n\n-- 2. Índice BRIN para series temporales masivas (millones de filas ordenadas físicamente)\n-- Ocupa KB en lugar de cientos de MB\nCREATE INDEX idx_logs_fecha_brin ON logs_servidor USING brin (timestamp);\n\n-- 3. Índice Parcial: Indexar únicamente los registros activos (Ahorro de espacio)\nCREATE INDEX idx_pedidos_pendientes ON pedidos (creado_en) \nWHERE estado = 'PENDIENTE';",
      "expectedKeywords": [
        "anatomía"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 8: ÍNDICES INVERTIDOS Y FULL-TEXT SEARCH: GIN Y GIST.",
      "placeholder": "-- Full-Text Search con GIN en PostgreSQL\n-- 1. Añadir columna tsvector generada automáticamente\nALTER TABLE articulos ADD COLUMN search_vector tsvector \nGENERATED ALWAYS AS (to_tsvector('spanish', coalesce(titulo, '') || ' ' || coalesce(cuerpo, ''))) STORED;\n\n-- 2. Crear índice GIN sobre el vector de búsqueda\nCREATE INDEX idx_articulos_search_gin ON articulos USING gin(search_vector);\n\n-- 3. Búsqueda semántica de texto completo ultraoptimizada\nSELECT id, titulo, ts_rank(search_vector, query) AS relevancia\nFROM articulos, to_tsquery('spanish', 'algoritmos & estructuras') query\nWHERE search_vector @@ query\nORDER BY relevancia DESC;",
      "expectedKeywords": [
        "índices"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 9: ANÁLISIS DE CONSULTAS CON EXPLAIN ANALYZE: SEQ SCAN VS INDEX SCAN.",
      "placeholder": "-- Análisis del plan de ejecución real en PostgreSQL\nEXPLAIN (ANALYZE, BUFFERS, VERBOSE)\nSELECT c.nombre, count(p.id)\nFROM clientes c\nJOIN pedidos p ON c.id = p.cliente_id\nWHERE p.creado_en >= '2026-01-01'\nGROUP BY c.nombre;\n\n-- Lectura de salida típica:\n-- HashAggregate (cost=120.40..122.40 rows=200 actual time=1.820..1.850)\n--   -> Hash Join (cost=45.20..115.10 rows=1050 actual time=0.450..1.200)\n--        -> Index Scan using idx_pedidos_fecha on pedidos p (actual time=0.040..0.350)\n--        -> Hash ...",
      "expectedKeywords": [
        "análisis"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 10: ESTADÍSTICAS DEL PLANIFICADOR, BLOAT Y VACUUM.",
      "placeholder": "-- Monitorear tuplas muertas y bloat en PostgreSQL\nSELECT \n  relname AS tabla,\n  n_live_tup AS tuplas_vivas,\n  n_dead_tup AS tuplas_muertas,\n  ROUND(n_dead_tup::numeric / NULLIF(n_live_tup + n_dead_tup, 0) * 100, 2) AS porcentaje_muerto,\n  last_vacuum,\n  last_autovacuum\nFROM pg_stat_user_tables\nORDER BY n_dead_tup DESC;\n\n-- Forzar limpieza y actualización de estadísticas del planificador\nVACUUM ANALYZE pedidos;",
      "expectedKeywords": [
        "estadísticas"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 11: TRANSACCIONES Y PROPIEDADES ACID EN PROFUNDIDAD.",
      "placeholder": "-- Transacción Bancaria Atómica con Savepoint\nBEGIN;\n\n-- Paso 1: Debitar de la cuenta origen\nUPDATE cuentas \nSET saldo_centavos = saldo_centavos - 10000 \nWHERE id = 'origen-uuid' AND saldo_centavos >= 10000;\n\nSAVEPOINT saldo_debitado;\n\n-- Paso 2: Acreditar a la cuenta destino\nUPDATE cuentas \nSET saldo_centavos = saldo_centavos + 10000 \nWHERE id = 'destino-uuid';\n\n-- Si todo es correcto, confirmar cambios永久\nCOMMIT;\n-- En caso de error inesperado: ROLLBACK;",
      "expectedKeywords": [
        "transacciones"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 12: NIVELES DE AISLAMIENTO TRANSACCIONAL Y ANOMALÍAS.",
      "placeholder": "-- Configurar el nivel de aislamiento para una transacción sensible\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\n-- Verificación de invariante compleja (evita Write Skew)\nSELECT count(*) FROM medicos_de_guardia WHERE hospital_id = 1;\n\n-- Si hay al menos 2, el médico puede pedir baja\nUPDATE medicos_de_guardia SET esta_de_guardia = false WHERE medico_id = 42;\n\nCOMMIT;\n-- Si otra transacción concurrente intentó lo mismo simultáneamente,\n-- PostgreSQL abortará una de ellas con el error: \n-- \"could not serialize access due to read/write dependencies\".",
      "expectedKeywords": [
        "niveles"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 13: CONCURRENCIA, BLOQUEOS Y DEADLOCKS.",
      "placeholder": "-- 1. Bloqueo pesimista seguro para evitar condiciones de carrera\nBEGIN;\nSELECT saldo_centavos \nFROM cuentas \nWHERE id = 'cuenta-1' \nFOR UPDATE; -- Bloquea la fila hasta que termine la transacción\n\nUPDATE cuentas SET saldo_centavos = saldo_centavos - 500 WHERE id = 'cuenta-1';\nCOMMIT;\n\n-- 2. Consumo de colas ultraescalable sin contención con SKIP LOCKED\nSELECT * FROM cola_trabajos \nWHERE estado = 'PENDIENTE' \nORDER BY prioridad DESC \nLIMIT 1 \nFOR UPDATE SKIP LOCKED; -- Los trabajadores concurrentes se saltan las filas tomadas sin bloquearse",
      "expectedKeywords": [
        "concurrencia,"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 14: BASES DE DATOS NOSQL VS RELACIONALES: REDIS Y DOCUMENTOS.",
      "placeholder": "// Ejemplo: Patrón Cache-Aside con Redis en TypeScript\nimport { createClient } from 'redis';\nconst redis = createClient();\n\nexport async function obtenerUsuarioConCache(userId: string): Promise<Usuario> {\n  const claveCache = \\`usuario:\\${userId}\\`;\n\n  // 1. Intentar leer de Redis (Memoria RAM < 1ms)\n  const cached = await redis.get(claveCache);\n  if (cached) {\n    return JSON.parse(cached); // Cache Hit\n  }\n\n  // 2. Cache Miss: Consultar la base de datos PostgreSQL\n  const usuario = await db.query('SELECT * FROM usuarios WHERE id = $1', [userId]);\n\n  // 3. Guardar en Redis con expiración de 1 hora (TTL)\n  await redis.setEx(claveCache, 3600, JSON.stringify(usuario));\n\n  return usuario;\n}",
      "expectedKeywords": [
        "bases"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 15: PARTICIONAMIENTO DE TABLAS Y SHARDING A GRAN ESCALA.",
      "placeholder": "-- Particionamiento Declarativo por Rango en PostgreSQL\n-- 1. Tabla maestra particionada\nCREATE TABLE eventos_sistema (\n  id UUID NOT NULL,\n  creado_en TIMESTAMPTZ NOT NULL,\n  evento VARCHAR(50) NOT NULL,\n  metadata JSONB,\n  PRIMARY KEY (id, creado_en)\n) PARTITION BY RANGE (creado_en);\n\n-- 2. Crear particiones hijas para cada mes\nCREATE TABLE eventos_2026_01 PARTITION OF eventos_sistema\n  FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');\n\nCREATE TABLE eventos_2026_02 PARTITION OF eventos_sistema\n  FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');\n\n-- La consulta poda las particiones irrelevantes en microsegundos\nEXPLAIN SELECT * FROM eventos_sistema \nWHERE creado_en >= '2026-01-15' AND creado_en < '2026-01-20';",
      "expectedKeywords": [
        "particionamiento"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 16: INTRODUCCIÓN A BASES VECTORIALES Y EMBEDDINGS PARA IA.",
      "placeholder": "// Estructura de un Embedding vectorial en TypeScript\nexport interface DocumentoVectorial {\n  id: string;\n  contenido: string;\n  // Vector denso de 1536 dimensiones generado por OpenAI text-embedding-3-small\n  embedding: number[]; \n}\n\n// Ejemplo conceptual de vector de 3 dimensiones\nconst vectorRey    = [0.95, 0.10, 0.85];\nconst vectorHombre = [0.80, 0.05, 0.80];\nconst vectorReina  = [0.93, 0.90, 0.84];\n// Famosa propiedad matemática: Rey - Hombre + Mujer ≈ Reina",
      "expectedKeywords": [
        "introducción"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 17: MÉTRICAS DE DISTANCIA VECTORIAL: COSENO, L2 Y PRODUCTO PUNTO.",
      "placeholder": "// Implementación pura de Similitud Coseno en TypeScript\nexport function similitudCoseno(vecA: number[], vecB: number[]): number {\n  if (vecA.length !== vecB.length) throw new Error('Dimensiones incompatibles');\n\n  let productoPunto = 0;\n  let normaA = 0;\n  let normaB = 0;\n\n  for (let i = 0; i < vecA.length; i++) {\n    productoPunto += vecA[i] * vecB[i];\n    normaA += vecA[i] * vecA[i];\n    normaB += vecB[i] * vecB[i];\n  }\n\n  const magnitud = Math.sqrt(normaA) * Math.sqrt(normaB);\n  if (magnitud === 0) return 0;\n  return productoPunto / magnitud;\n}",
      "expectedKeywords": [
        "métricas"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 18: INDEXACIÓN VECTORIAL: HNSW VS IVFFLAT CON PGVECTOR.",
      "placeholder": "-- Uso de pgvector en PostgreSQL con índice HNSW\nCREATE EXTENSION IF NOT EXISTS vector;\n\n-- Tabla que combina datos relacionales clásicos con embeddings de IA\nCREATE TABLE documentos_empresa (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  titulo TEXT NOT NULL,\n  contenido TEXT NOT NULL,\n  categoria VARCHAR(50) NOT NULL,\n  embedding vector(1536) NOT NULL -- Vector de 1536 dimensiones\n);\n\n-- Creación del índice HNSW con métrica de Similitud Coseno\nCREATE INDEX idx_documentos_hnsw ON documentos_empresa \nUSING hnsw (embedding vector_cosine_ops)\nWITH (m = 16, ef_construction = 64);\n\n-- Búsqueda semántica de los 5 documentos más cercanos al vector consultado\nSELECT id, titulo, 1 - (embedding <=> '[0.012, -0.892, ...]'::vector) AS similitud\nFROM documentos_empresa\nORDER BY embedding <=> '[0.012, -0.892, ...]'::vector\nLIMIT 5;",
      "expectedKeywords": [
        "indexación"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 19: ARQUITECTURA RAG HÍBRIDA: VECTORIAL + LÉXICA (BM25).",
      "placeholder": "-- Búsqueda Híbrida en PostgreSQL (Full-Text Search + Vectorial con RRF)\nWITH busqueda_lexica AS (\n  SELECT id, ROW_NUMBER() OVER (ORDER BY ts_rank_cd(search_vector, query) DESC) AS rank_lexico\n  FROM documentos_empresa, to_tsquery('spanish', 'factura & error & 500') query\n  WHERE search_vector @@ query\n  LIMIT 20\n),\nbusqueda_vectorial AS (\n  SELECT id, ROW_NUMBER() OVER (ORDER BY embedding <=> '[0.012, -0.45, ...]'::vector) AS rank_vector\n  FROM documentos_empresa\n  LIMIT 20\n)\nSELECT \n  COALESCE(l.id, v.id) AS documento_id,\n  -- Fórmula Reciprocal Rank Fusion (k=60 estándar)\n  COALESCE(1.0 / (60 + l.rank_lexico), 0.0) + \n  COALESCE(1.0 / (60 + v.rank_vector), 0.0) AS puntaje_rrf\nFROM busqueda_lexica l\nFULL OUTER JOIN busqueda_vectorial v ON l.id = v.id\nORDER BY puntaje_rrf DESC\nLIMIT 5;",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Escribe la consulta o configuración de base de datos correspondiente al MÓDULO 20: PROYECTO INTEGRADOR: ARQUITECTURA DE DATOS A GRAN ESCALA CON RAG.",
      "placeholder": "// Ejemplo del Proyecto Integrador: Pipeline RAG en TypeScript con PostgreSQL\nexport class MotorBusquedaRAG {\n  constructor(private pool: any, private llmEmbeddings: any) {}\n\n  async buscarContexto(consultaUsuario: string): Promise<string[]> {\n    // 1. Generar embedding de la consulta del usuario\n    const vectorConsulta = await this.llmEmbeddings.generar(consultaUsuario);\n\n    // 2. Ejecutar búsqueda híbrida en PostgreSQL (Full-Text + HNSW)\n    const query = \\`\n      WITH lexica AS (\n        SELECT id, ROW_NUMBER() OVER (ORDER BY ts_rank_cd(search_vector, plainto_tsquery('spanish', $1)) DESC) as r_lex\n        FROM base_conocimiento WHERE search_vector @@ plainto_tsquery('spanish', $1) LIMIT 10\n      ),\n      vectorial AS (\n        SELECT id, ROW_NUMBER() OVER (ORDER BY embedding <=> $2::vector) as r_vec\n        FROM base_conocimiento ORDER BY embedding <=> $2::vector LIMIT 10\n      )\n      SELECT b.contenido\n      FROM lexica l\n      FULL OUTER JOIN vectorial v ON l.id = v.id\n      JOIN base_conocimiento b ON b.id = COALESCE(l.id, v.id)\n      ORDER BY (COALESCE(1.0 / (60 + l.r_lex), 0.0) + COALESCE(1.0 / (60 + v.r_vec), 0.0)) DESC\n      LIMIT 3;\n    \\`;\n\n    const res = await this.pool.query(query, [consultaUsuario, JSON.stringify(vectorConsulta)]);\n    return res.rows.map((r: any) => r.contenido);\n  }\n}",
      "expectedKeywords": [
        "proyecto"
      ],
      "hint": "Revisa los conceptos y sintaxis SQL/PostgreSQL explicados en el módulo.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de SQL & Datos para IA
SQL_DATOS_IA_COURSE.modules.forEach((mod) => {
  if (SQL_DATOS_IA_EXERCISES[mod.id]) {
    mod.exercises = SQL_DATOS_IA_EXERCISES[mod.id];
  }
});
