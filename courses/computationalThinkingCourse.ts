import { Course, TutorExercise } from '../domain/models';

export const COMPUTATIONAL_THINKING_COURSE: Course = {
  "id": "pensamiento_computacional",
  "title": "Pensamiento de Ingeniería, Resolución de Problemas y Data Path de la CPU (Paso 0)",
  "shortTitle": "Pensamiento & Data Path",
  "badge": "Fundamento Absoluto · 20 Módulos",
  "icon": "🧩",
  "description": "De la intuición a la ingeniería: resolución sistemática de problemas, pseudocódigo agnóstico, variables y memoria, control de flujo, el Data Path de la CPU, latencias físicas (Stack vs Heap) y manejo defensivo de errores en la era de la IA.",
  "whyStudyTitle": "🧠 ¿Por qué este curso es el Paso 0 obligatorio para cualquier programador?",
  "whyStudyText": "Cualquiera puede pedirle a una Inteligencia Artificial que escriba 50 líneas de código, pero solo un verdadero ingeniero entiende qué problema está resolviendo, si la solución es robusta, y cómo viajan los datos físicamente a través de la CPU, la memoria RAM y el bus de datos. Este curso construye los cimientos mentales indispensables: pensar en procesos antes de escribir código, estructurar la lógica con pseudocódigo, entender la realidad del hardware y auditar soluciones para no introducir errores en producción.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "FILOSOFÍA DE LA INGENIERÍA Y RESOLUCIÓN DE PROBLEMAS",
      "why": "La esencia de la ingeniería: el pensamiento sistémico, la descomposición de problemas en entradas, procesos y salidas, y la mejora continua."
    },
    {
      "id": 2,
      "title": "EL MÉTODO DE DESCOMPOSICIÓN EN PROCESOS ATÓMICOS",
      "why": "Divide y vencerás: descomposición funcional (Top-Down Decomposition), diseño modular y diagramación de flujos de control."
    },
    {
      "id": 3,
      "title": "PSEUDOCÓDIGO UNIVERSAL: NOTACIÓN AGNÓSTICA",
      "why": "El idioma universal de los algoritmos: diseñar lógica en español estructurado antes de enredarse con la sintaxis de un lenguaje."
    },
    {
      "id": 4,
      "title": "VARIABLES, TIPOS DE DATOS Y REPRESENTACIÓN EN MEMORIA",
      "why": "Qué es una variable en la memoria física: enteros en complemento a dos, números flotantes IEEE 754 y booleanos."
    },
    {
      "id": 5,
      "title": "CADENAS DE TEXTO Y CODIFICACIÓN: ASCII, UNICODE Y UTF-8",
      "why": "Texto bajo el capó: de la tabla ASCII de 7 bits al estándar Unicode universal y la genialidad de la codificación UTF-8 de longitud variable."
    },
    {
      "id": 6,
      "title": "CONTROL DE FLUJO LÓGICO: CONDICIONALES Y CORTOCIRCUITO",
      "why": "Toma de decisiones en el silicio: operadores relacionales, lógica booleana (AND, OR, NOT), tablas de verdad y evaluación cortocircuito."
    },
    {
      "id": 7,
      "title": "VALIDACIÓN DEFENSIVA Y EL PATRÓN GUARD CLAUSES",
      "why": "Programación sin pirámides de condicionales: el patrón Guard Clauses, inversión de condiciones lógicas y retorno anticipado."
    },
    {
      "id": 8,
      "title": "CICLOS E ITERACIÓN I: BUCLE PARA (FOR) Y ACUMULADORES",
      "why": "Automatización de tareas repetitivas: el bucle Para (for), variables contadoras, variables acumuladoras y recorridos de secuencias."
    },
    {
      "id": 9,
      "title": "CICLOS E ITERACIÓN II: BUCLE MIENTRAS (WHILE) Y BUCLES INFINITOS",
      "why": "Repetición condicional: el bucle Mientras (while), condiciones de terminación, sentencias break/continue y prevención de cuelgues."
    },
    {
      "id": 10,
      "title": "FUNCIONES, MODULARIDAD Y ÁMBITO (SCOPE)",
      "why": "La piedra angular de la ingeniería de software: funciones puras, parámetros por valor vs por referencia, ámbito local vs global y pila de llamadas."
    },
    {
      "id": 11,
      "title": "COLECCIONES ELEMENTALES I: ARREGLOS UNIDIMENSIONALES",
      "why": "Estructuras de datos básicas: el arreglo (Array), almacenamiento contiguo en memoria, indexación en base cero y operaciones de recorrido."
    },
    {
      "id": 12,
      "title": "COLECCIONES ELEMENTALES II: MATRICES BIDIMENSIONALES",
      "why": "Datos en 2 dimensiones: matrices, cuadrículas, coordenadas $(x, y)$, filas y columnas, y bucles anidados de recorrido."
    },
    {
      "id": 13,
      "title": "COLECCIONES ASOCIATIVAS: DICCIONARIOS Y MAPAS",
      "why": "Búsqueda por clave: Diccionarios, Mapas clave-valor, tablas hash elementales y acceso asociativo $O(1)$."
    },
    {
      "id": 14,
      "title": "MANEJO DEFENSIVO DE ERRORES: TRY/CATCH Y RESILIENCIA",
      "why": "Software a prueba de fallos: excepciones, el bloque try/catch/finally, tipos de errores en tiempo de ejecución y diseño de software resiliente."
    },
    {
      "id": 15,
      "title": "ARQUITECTURA DE COMPUTADORAS: EL MODELO DE VON NEUMANN",
      "why": "Las entrañas del hardware: la arquitectura de Von Neumann, CPU, memoria RAM compartida, bus de datos y el ciclo de reloj."
    },
    {
      "id": 16,
      "title": "EL DATA PATH DE LA CPU: ALU, REGISTROS Y BUSES",
      "why": "El camino físico del dato: Program Counter (PC), Instruction Register (IR), Registros de propósito general (R0-R3), la ALU y el ciclo Fetch-Decode-Execute."
    },
    {
      "id": 17,
      "title": "JERARQUÍA DE MEMORIA Y LA ESCALA HUMANA DE LATENCIAS",
      "why": "Comprendiendo el costo del tiempo en hardware: Registros (0.5ns), Caché L1/L2/L3 (1-10ns), Memoria RAM (100ns) y Discos SSD (50µs)."
    },
    {
      "id": 18,
      "title": "LA PILA DE LLAMADAS (CALL STACK) VS EL MONTÍCULO (HEAP)",
      "why": "Gestión de memoria de variables: el Call Stack para ejecución y variables locales LIFO, el Heap para objetos dinámicos y el Stack Overflow."
    },
    {
      "id": 19,
      "title": "ALGORITMIA FUNDAMENTAL Y DEPURACIÓN SISTEMÁTICA",
      "why": "Búsqueda y ordenamiento elemental: Búsqueda Lineal $O(n)$ vs Búsqueda Binaria $O(\\log n)$, técnica de Dry Run (Traza Mental) y depuración científica."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: AUDITORÍA DE SISTEMAS Y BRECHAS DE IA",
      "why": "Integración completa de fundamentos: diseño defensivo de un sistema de facturación, simulación de su paso por el Data Path y auditoría crítica contra alucinaciones de IA."
    }
  ],
  "labChallenge": {
    "title": "Sistema de Facturación y Validación Defensiva con Auditoría Anti-IA y Análisis del Data Path",
    "badge": "Desafío de Laboratorio · Nivel Fundamentos",
    "description": "Tu objetivo es diseñar e implementar un módulo de cálculo y facturación de pedidos con validación defensiva estricta: auditarás un script generado por IA para eliminar sus errores de redondeo por punto flotante, estructurarás la lógica con Guard Clauses y explicarás en un reporte técnico cómo viajan los datos a través del Data Path de la CPU durante el cálculo.",
    "requirements": [
      "• Pseudocódigo Previo: Redactar la lógica en pseudocódigo antes de la implementación.",
      "• Cálculos Exactos: Manejar montos monetarios en centavos enteros para evitar errores IEEE 754.",
      "• Guard Clauses: Validar entradas y estados al inicio de cada función.",
      "• Análisis de Hardware: Identificar qué variables residen en el Stack y cuáles en el Heap."
    ],
    "cleanCodeRules": [
      "• Cero Comentarios Redundantes: Nombres autoexplicativos que comuniquen la intención del negocio.",
      "• Funciones Atómicas: Cada función debe tener una única responsabilidad bien definida.",
      "• Sin Nulos: Retornar estructuras válidas o lanzar excepciones descriptivas."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto Pensamiento & Data Path - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio con la solución al Reto del Laboratorio de Pensamiento Computacional y Data Path.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nExplicación de las auditorías aplicadas al código de IA:\\n- \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: FILOSOFÍA DE LA INGENIERÍA Y RESOLUCIÓN DE PROBLEMAS",
      "description": "La esencia de la ingeniería: el pensamiento sistémico, la descomposición de problemas en entradas, procesos y salidas, y la mejora continua.",
      "items": [
        "¿Qué es la ingeniería?: Resolver problemas del mundo real mediante procesos sistemáticos y predecibles.",
        "El modelo de Caja Negra (Black Box): Entradas (Inputs), Procesamiento y Salidas (Outputs).",
        "La falacia de saltar a programar sin entender el problema: 'Pensar antes de teclear'.",
        "Identificación de restricciones, precondiciones y casos límite desde el día cero.",
        "El ciclo de Deming (PDCA): Planificar, Hacer, Verificar y Actuar en ingeniería de software."
      ],
      "content": "## Filosofía de la Ingeniería y Resolución de Problemas\n\nUn programador aficionado abre el editor de código e intenta improvisar sintaxis. Un **Ingeniero de Software** no toca el teclado hasta haber descompuesto el problema en su estructura matemática y lógica fundamental.\n\n### El Modelo IPO (Input - Process - Output)\nTodo sistema computacional, desde una calculadora de bolsillo hasta un modelo de lenguaje de Inteligencia Artificial, se rige por el modelo IPO:\n1. **Entradas (Inputs):** ¿Qué datos exactos entran? ¿Qué tipos de datos son? ¿Qué restricciones tienen?\n2. **Procesamiento:** ¿Qué transformaciones matemáticas o lógicas atómicas deben aplicarse?\n3. **Salidas (Outputs):** ¿Cuál es el resultado observable esperado?",
      "codeSnippet": "# Planteamiento de Ingeniería: Análisis IPO antes del código\n# Problema: Calcular el costo de envío con recargo por distancia\n\n# 1. ENTRADAS:\n#   - peso_kg: Flotante positivo > 0\n#   - distancia_km: Entero positivo > 0\n# 2. PROCESAMIENTO:\n#   - tarifa_base = $5.00\n#   - costo_peso = peso_kg * 1.50\n#   - recargo_distancia = 0 si distancia <= 50 else (distancia - 50) * 0.20\n#   - total = tarifa_base + costo_peso + recargo_distancia\n# 3. SALIDA:\n#   - total_envio: Flotante con 2 decimales\n\ndef calcular_envio(peso_kg: float, distancia_km: int) -> float:\n    assert peso_kg > 0, \"El peso debe ser estrictamente positivo\"\n    assert distancia_km > 0, \"La distancia debe ser estrictamente positiva\"\n    \n    tarifa_base = 5.00\n    costo_peso = peso_kg * 1.50\n    recargo_distancia = 0.0 if distancia_km <= 50 else (distancia_km - 50) * 0.20\n    \n    return round(tarifa_base + costo_peso + recargo_distancia, 2)",
      "quiz": [
        {
          "question": "¿Cuál es la primera acción que debe tomar un ingeniero antes de escribir una sola línea de código?",
          "options": [
            "Analizar formalmente las entradas, salidas esperadas, restricciones y casos límite del problema",
            "Elegir el framework web más popular",
            "Comprar más memoria RAM"
          ],
          "answerIndex": 0,
          "explanation": "Comprender a fondo el problema y sus restricciones evita reescrituras costosas y código defectuoso."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: EL MÉTODO DE DESCOMPOSICIÓN EN PROCESOS ATÓMICOS",
      "description": "Divide y vencerás: descomposición funcional (Top-Down Decomposition), diseño modular y diagramación de flujos de control.",
      "items": [
        "La técnica 'Divide y Vencerás' aplicada a la arquitectura de procesos mentales.",
        "Descomposición Top-Down: Desarmar un problema gigante en 3 a 5 subproblemas independientes.",
        "Procesos Atómicos: Unidades lógicas que no pueden simplificarse más sin perder significado.",
        "Diagramas de Flujo Estructurados: Símbolos estándar (Inicio/Fin, Proceso, Decisión, E/S).",
        "Manejo de la complejidad cognitiva: La regla mágica de Miller ($7 \\pm 2$ piezas de información)."
      ],
      "content": "## Descomposición en Procesos Atómicos\n\nCuando un problema parece inabarcable, la mente humana colapsa si intenta resolver todo simultáneamente. La **Descomposición Funcional** toma el objetivo macro y lo divide jerárquicamente en pasos atómicos secuenciales.",
      "codeSnippet": "# Ejemplo de Descomposición Modular: Sistema de Facturación\ndef emitir_factura(pedido_id: str, cliente_id: str) -> dict:\n    # 1. Proceso Atómico: Validar cliente y recuperar datos\n    cliente = obtener_y_validar_cliente(cliente_id)\n    \n    # 2. Proceso Atómico: Calcular subtotales e impuestos\n    items, subtotal = calcular_items_pedido(pedido_id)\n    impuestos = calcular_iva(subtotal)\n    \n    # 3. Proceso Atómico: Procesar cobro financiero\n    pago_confirmado = cobrar_pasarela(cliente, subtotal + impuestos)\n    \n    # 4. Proceso Atómico: Generar comprobante legal\n    return generar_recibo_fiscal(cliente, items, subtotal, impuestos, pago_confirmado)",
      "quiz": [
        {
          "question": "¿En qué consiste la técnica de descomposición 'Top-Down'?",
          "options": [
            "En desglosar un problema general de alto nivel en componentes más pequeños y específicos hasta llegar a funciones atómicas simples",
            "En programar de abajo hacia arriba en el archivo",
            "En escribir código al revés"
          ],
          "answerIndex": 0,
          "explanation": "Top-Down parte de la visión global y la descompone sucesivamente en módulos atómicos fácilmente verificables."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: PSEUDOCÓDIGO UNIVERSAL: NOTACIÓN AGNÓSTICA",
      "description": "El idioma universal de los algoritmos: diseñar lógica en español estructurado antes de enredarse con la sintaxis de un lenguaje.",
      "items": [
        "Por qué la sintaxis es secundaria frente al razonamiento algorítmico puro.",
        "Palabras clave universales: `INICIO`, `FIN`, `LEER`, `ESCRIBIR`, `SI`, `ENTONCES`, `SINO`, `MIENTRAS`, `PARA`.",
        "Indentación visual como regla estricta de jerarquía lógica.",
        "Traducción bidireccional: De pseudocódigo a Python, JavaScript, C++ o Rust.",
        "Ejercicios de traducción de requerimientos de negocio verbales a pseudocódigo riguroso."
      ],
      "content": "## Pseudocódigo: Pensar sin Barreras de Sintaxis\n\nEl **Pseudocódigo** es un lenguaje intermedio entre el lenguaje natural humano y los lenguajes de programación estrictos. Te permite razonar sobre la lógica pura del algoritmo sin preocuparte por puntos y comas, llaves o tipados específicos.",
      "codeSnippet": "ALGORITMO CalcularDescuentoVip\n  ENTRADAS: totalCompra (Real), esMiembroVip (Booleano)\n  SALIDAS: totalFinal (Real)\n\n  INICIO\n    SI totalCompra <= 0 ENTONCES\n      ESCRIBIR \"Error: Monto inválido\"\n      RETORNAR 0\n    FIN SI\n\n    SI esMiembroVip Y totalCompra > 100 ENTONCES\n      descuento <- totalCompra * 0.15\n    SINO\n      descuento <- 0\n    FIN SI\n\n    totalFinal <- totalCompra - descuento\n    RETORNAR totalFinal\n  FIN",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja de diseñar un algoritmo en pseudocódigo antes de escribir código en un lenguaje específico?",
          "options": [
            "Permite validar la lógica y el flujo de decisiones sin la distracción de errores de sintaxis del compilador",
            "Hace que la computadora ejecute el algoritmo más rápido",
            "El pseudocódigo se compila directamente en chips de silicio"
          ],
          "answerIndex": 0,
          "explanation": "El pseudocódigo enfoca el 100% de la capacidad mental en la corrección lógica del algoritmo antes de lidiar con la sintaxis del lenguaje."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: VARIABLES, TIPOS DE DATOS Y REPRESENTACIÓN EN MEMORIA",
      "description": "Qué es una variable en la memoria física: enteros en complemento a dos, números flotantes IEEE 754 y booleanos.",
      "items": [
        "Una variable no es una caja mágica; es una dirección de memoria RAM con un tamaño en bytes asignado.",
        "Enteros (Integers): Con signo vs sin signo, representación en Complemento a Dos y desbordamiento (Overflow).",
        "Números de Punto Flotante (IEEE 754): Signo, exponente y mantisa. El famoso error `0.1 + 0.2 === 0.30000000000000004`.",
        "Por qué NUNCA se deben usar números flotantes para dinero (usar enteros en centavos).",
        "Booleanos en la memoria: Un solo bit lógico representado en 1 byte físico por alineación de memoria.",
        "Inmutabilidad vs Mutabilidad de variables."
      ],
      "content": "## Variables y la Realidad Física de la Memoria\n\nEn la memoria RAM, todo son transistores en estado cargado (1) o descargado (0). El tipo de dato le dice a la CPU cómo interpretar esos ceros y unos.\n\n### La Trampa del Punto Flotante (IEEE 754)\nLas computadoras trabajan en base 2 (binario). Números decimales simples como `0.1` ($1/10$) son fracciones periódicas infinitas en binario ($0.0001100110011...$), exactamente igual a lo que ocurre con $1/3 = 0.3333...$ en base 10.\n* Por eso en Python/JS: `0.1 + 0.2 != 0.3`.\n* **Regla de Oro en Finanzas:** Si cobras $12.50, almacénalo como el entero `1250` (centavos).",
      "codeSnippet": "# Demostración del estándar IEEE 754 y solución financiera\n# La trampa de los flotantes:\nsuma_flotante = 0.1 + 0.2\nprint(f\"0.1 + 0.2 = {suma_flotante}\") # Imprime: 0.30000000000000004\n\n# Enfoque de Ingeniería de Software (Manejo en Centavos Enteros):\nprecio_item1_centavos = 10  # $0.10\nprecio_item2_centavos = 20  # $0.20\ntotal_centavos = precio_item1_centavos + precio_item2_centavos\nprint(f\"Total exacto en dólares: ${total_centavos / 100:.2f}\") # Imprime: $0.30 exacto",
      "quiz": [
        {
          "question": "¿Por qué los sistemas bancarios y de comercio electrónico almacenan los montos de dinero como enteros en centavos en lugar de números flotantes?",
          "options": [
            "Para evitar los errores acumulativos de precisión binaria inherentes al estándar IEEE 754 de punto flotante",
            "Porque los números flotantes están prohibidos por el Banco Central",
            "Porque los enteros ocupan el triple de memoria"
          ],
          "answerIndex": 0,
          "explanation": "El estándar IEEE 754 no puede representar con exactitud decimales como 0.1 en binario; usar enteros en centavos garantiza exactitud matemática absoluta."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: CADENAS DE TEXTO Y CODIFICACIÓN: ASCII, UNICODE Y UTF-8",
      "description": "Texto bajo el capó: de la tabla ASCII de 7 bits al estándar Unicode universal y la genialidad de la codificación UTF-8 de longitud variable.",
      "items": [
        "Cómo una computadora almacena letras: Mapeo de glifos a números enteros (Code Points).",
        "La Tabla ASCII clásica: 128 caracteres del alfabeto inglés y sus limitaciones internacionales.",
        "El Consorcio Unicode: Asignar un número único a cada letra, símbolo y emoji de la humanidad (`U+1F600`).",
        "La Codificación UTF-8: Tamaño variable (1 a 4 bytes) y compatibilidad perfecta con ASCII.",
        "Longitud en bytes vs Longitud en caracteres: Por qué emojis como 👨‍👩‍👧‍👦 miden múltiples code points.",
        "Inmutabilidad de cadenas de texto y el costo de concatenar strings en bucles."
      ],
      "content": "## Texto y Codificación: ASCII, Unicode y UTF-8\n\nHistóricamente, ASCII solo utilizaba 7 bits (128 caracteres). Letras con tildes (á, é), eñes (ñ) o ideogramas chinos provocaban texto corrupto (**Mojibake**).\n\n### La Genialidad de UTF-8\nDiseñado por Ken Thompson y Rob Pike en 1992, UTF-8 es una codificación de **longitud variable**:\n* Los caracteres ASCII estándar ocupan exactamente **1 byte** (manteniendo compatibilidad hacia atrás).\n* Letras latinas con tildes ocupan **2 bytes**.\n* Caracteres asiáticos ocupan **3 bytes**.\n* Emojis y símbolos raros ocupan **4 bytes**.",
      "codeSnippet": "# Inspección de bytes y longitud en Python\ntexto_ascii = \"Hola\"\ntexto_unicode = \"Hola Mundo 🌍\"\n\nprint(f\"Longitud en caracteres: {len(texto_unicode)}\") # 12 caracteres\nbytes_utf8 = texto_unicode.encode('utf-8')\nprint(f\"Longitud real en bytes UTF-8: {len(bytes_utf8)}\") # 15 bytes (el emoji ocupa 4 bytes)",
      "quiz": [
        {
          "question": "¿Por qué la codificación UTF-8 se convirtió en el estándar absoluto de la web y los sistemas operativos modernos?",
          "options": [
            "Porque es de longitud variable, ahorra espacio usando 1 byte para caracteres ASCII y es capaz de representar cualquier símbolo del mundo mediante Unicode",
            "Porque fue inventada por el gobierno de Estados Unidos",
            "Porque hace que las páginas web pesen el doble"
          ],
          "answerIndex": 0,
          "explanation": "UTF-8 combina eficiencia máxima (1 byte para inglés/código) con soporte universal para todos los idiomas y emojis del planeta."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: CONTROL DE FLUJO LÓGICO: CONDICIONALES Y CORTOCIRCUITO",
      "description": "Toma de decisiones en el silicio: operadores relacionales, lógica booleana (AND, OR, NOT), tablas de verdad y evaluación cortocircuito.",
      "items": [
        "Bifurcaciones en el flujo de ejecución: Cómo la CPU salta instrucciones según flags booleanos.",
        "Operadores Lógicos: `AND` (conjunción), `OR` (disyunción), `NOT` (negación).",
        "Tablas de Verdad completas y Leyes de De Morgan: `!(A && B) === !A || !B`.",
        "Evaluación Cortocircuito (Short-Circuit Evaluation): Por qué el orden de las condiciones evita caídas (`if (obj != null && obj.valido)`).",
        "La trampa de las condiciones complejas no legibles y cómo extraerlas a variables booleanas descriptivas."
      ],
      "content": "## Control de Flujo y Evaluación Cortocircuito\n\nEn la mayoría de los lenguajes de programación, los operadores lógicos `AND` y `OR` implementan **Short-Circuit Evaluation (Evaluación Cortocircuito)**:\n* En `A and B`: Si `A` es falso, la computadora **no evalúa `B`**, porque toda la expresión ya es falsa.\n* En `A or B`: Si `A` es verdadero, la computadora **no evalúa `B`**, porque toda la expresión ya es verdadera.\n\nEsto permite escribir código seguro como:\n```ts\nif (usuario !== null && usuario.saldo > 0)\n```\nSi `usuario` es `null`, la segunda parte nunca se ejecuta, previniendo un error de puntero nulo.",
      "codeSnippet": "// Demostración de Cortocircuito en TypeScript\nfunction operacionCostosa(): boolean {\n  console.log(\"Calculando...\");\n  return true;\n}\n\n// Cortocircuito con OR: Al ser el primero true, la función costosa NUNCA se invoca\nconst tieneAcceso = true || operacionCostosa(); \n\n// Cortocircuito de seguridad contra nulos:\ninterface Cuenta { activa: boolean; fondos: number; }\nconst cuentaUsuario: Cuenta | null = null;\n\n// Seguro: no arroja error porque cuentaUsuario es null y aborta la evaluación\nif (cuentaUsuario !== null && cuentaUsuario.fondos > 0) {\n  console.log(\"Fondos disponibles\");\n}",
      "quiz": [
        {
          "question": "¿Qué ocurre durante la 'Evaluación Cortocircuito' si la primera condición de una expresión `A && B` resulta ser falsa?",
          "options": [
            "La segunda condición `B` no se evalúa en absoluto, porque el resultado final es inevitablemente falso",
            "El programa se reinicia",
            "Se evalúan ambas condiciones obligatoriamente"
          ],
          "answerIndex": 0,
          "explanation": "El compilador u optimizador evita computar la segunda expresión porque `false && cualquier_cosa` siempre resulta en `false`."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: VALIDACIÓN DEFENSIVA Y EL PATRÓN GUARD CLAUSES",
      "description": "Programación sin pirámides de condicionales: el patrón Guard Clauses, inversión de condiciones lógicas y retorno anticipado.",
      "items": [
        "El anti-patrón de la Pirámide de la Muerte (Arrow Anti-Pattern) en lógica de control.",
        "El Patrón Guard Clauses (Cláusulas de Guarda): Validar y salir inmediatamente si las condiciones no se cumplen.",
        "Mantenimiento de la columna principal de ejecución sin indentaciones anidadas.",
        "Validación de precondiciones al inicio de cada función.",
        "Refactorización práctica de funciones complejas de validación de usuarios."
      ],
      "content": "## El Patrón Guard Clauses\n\nLa anidación profunda de condicionales dificulta el seguimiento visual del código. El patrón **Guard Clauses** invierte las condiciones para manejar los errores y casos atípicos en la parte superior de la función, liberando el flujo principal.",
      "codeSnippet": "# Antes: Anidación piramidal confusa\ndef procesar_compra_malo(usuario, item):\n    if usuario is not None:\n        if usuario.esta_activo:\n            if item.stock > 0:\n                if usuario.saldo >= item.precio:\n                    usuario.saldo -= item.precio\n                    item.stock -= 1\n                    return True\n    return False\n\n# Después: Clean Code con Guard Clauses\ndef procesar_compra_limpio(usuario, item):\n    if usuario is None or not usuario.esta_activo:\n        return False\n    if item.stock <= 0:\n        return False\n    if usuario.saldo < item.precio:\n        return False\n        \n    usuario.saldo -= item.precio\n    item.stock -= 1\n    return True",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja de utilizar Guard Clauses frente a estructuras if/else profundamente anidadas?",
          "options": [
            "Mantiene el código plano con baja complejidad ciclomática, expulsando los casos de error temprano y haciendo legible el flujo exitoso",
            "Aumenta la memoria RAM disponible",
            "Permite usar variables sin declararlas"
          ],
          "answerIndex": 0,
          "explanation": "Las Guard Clauses eliminan la indentación innecesaria, permitiendo leer el código como una lista secuencial de verificaciones."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: CICLOS E ITERACIÓN I: BUCLE PARA (FOR) Y ACUMULADORES",
      "description": "Automatización de tareas repetitivas: el bucle Para (for), variables contadoras, variables acumuladoras y recorridos de secuencias.",
      "items": [
        "La necesidad de la repetición controlada en computación.",
        "Anatomía del bucle Para (For loop): Inicialización, Condición de parada y Paso de incremento.",
        "El patrón Contador: Rastrear cuántas veces ocurre un evento (`contador = contador + 1`).",
        "El patrón Acumulador: Totalizar sumas o productos a lo largo de una colección (`suma = suma + valor`).",
        "Evitar el error clásico de 'Off-by-One' (error por un elemento al inicio o final del bucle)."
      ],
      "content": "## Ciclos e Iteración con el Bucle For\n\nEl bucle **For** se utiliza cuando se conoce de antemano el número de iteraciones o cuando se recorre una colección finita de elementos.",
      "codeSnippet": "# Patrón Acumulador y Contador con bucle For\ncalificaciones = [85, 92, 78, 90, 65, 88]\n\nsuma_total = 0 # Acumulador\nalumnos_sobresalientes = 0 # Contador\n\nfor nota in calificaciones:\n    suma_total += nota\n    if nota >= 90:\n        alumnos_sobresalientes += 1\n\npromedio = suma_total / len(calificaciones)\nprint(f\"Promedio general: {promedio:.2f}\")\nprint(f\"Alumnos con 90+: {alumnos_sobresalientes}\")",
      "quiz": [
        {
          "question": "¿Qué es el 'Off-by-One Error' en programación?",
          "options": [
            "Un error lógico donde un bucle itera una vez de más o una vez de menos por equivocarse en el operador relacional (`<` vs `<=`)",
            "Un fallo eléctrico en el procesador",
            "Cuando el disco duro se llena por 1 byte"
          ],
          "answerIndex": 0,
          "explanation": "Es uno de los errores más comunes: confundir `< n` con `<= n` en bucles indexados en base cero."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: CICLOS E ITERACIÓN II: BUCLE MIENTRAS (WHILE) Y BUCLES INFINITOS",
      "description": "Repetición condicional: el bucle Mientras (while), condiciones de terminación, sentencias break/continue y prevención de cuelgues.",
      "items": [
        "Cuándo usar While en lugar de For: Repetición gobernada por un evento o condición que cambia en tiempo de ejecución.",
        "Anatomía del bucle While: Verificación de condición antes de entrar al cuerpo del ciclo.",
        "La pesadilla del Bucle Infinito: Causas comunes (olvidar incrementar la variable de control o condiciones siempre verdaderas).",
        "Uso disciplinado de `break` (salir del bucle) y `continue` (saltar a la siguiente iteración).",
        "El patrón de 'Límite de Seguridad' (Safety Limit) para evitar bucles infinitos en producción."
      ],
      "content": "## El Bucle Mientras (While) y Prevención de Ciclos Infinitos\n\nEl bucle **While** continúa ejecutándose mientras su condición sea verdadera. Si la condición nunca cambia a falso, el programa entra en un **bucle infinito** congelando la CPU al 100%.",
      "codeSnippet": "# Bucle While con límite de seguridad estricto (Anti-Infinite Loop)\ndef simular_reintento_red():\n    intentos = 0\n    MAX_INTENTOS = 5 # Límite de seguridad\n    conexion_exitosa = False\n\n    while not conexion_exitosa and intentos < MAX_INTENTOS:\n        intentos += 1\n        print(f\"Intento {intentos} de {MAX_INTENTOS}...\")\n        # Simulación de éxito en el intento 3\n        if intentos == 3:\n            conexion_exitosa = True\n            \n    return conexion_exitosa",
      "quiz": [
        {
          "question": "¿Por qué es una buena práctica añadir una variable contadora con un límite máximo dentro de un bucle `while`?",
          "options": [
            "Para actuar como salvaguarda de seguridad y romper el ciclo si la condición esperada nunca ocurre, evitando que el programa se congele",
            "Porque los bucles while no funcionan sin contadores",
            "Para aumentar la velocidad del ventilador de la CPU"
          ],
          "answerIndex": 0,
          "explanation": "Un límite de seguridad previene bloqueos catastróficos en caso de que una llamada externa nunca responda o cambie la condición."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: FUNCIONES, MODULARIDAD Y ÁMBITO (SCOPE)",
      "description": "La piedra angular de la ingeniería de software: funciones puras, parámetros por valor vs por referencia, ámbito local vs global y pila de llamadas.",
      "items": [
        "Modularidad: Encapsular lógica reusable detrás de un nombre descriptivo.",
        "Parámetros formales vs Argumentos reales.",
        "Paso por Valor (copia independiente) vs Paso por Referencia (puntero al mismo objeto mutable en memoria).",
        "Ámbito de Variables (Scope): Variables locales a la función vs Variables globales y por qué las globales son peligrosas.",
        "Funciones Puras: Sin efectos secundarios y siempre devolviendo el mismo resultado ante las mismas entradas.",
        "El valor de retorno: Devolver datos para que el invocador decida qué hacer con ellos."
      ],
      "content": "## Funciones, Modularidad y Scope\n\nLas funciones son las unidades fundamentales de abstracción en software.\n\n### Paso por Valor vs Paso por Referencia\n* **Por Valor (Tipos primitivos como enteros o booleanos):** La función recibe una copia; modificarla dentro no altera la variable original del exterior.\n* **Por Referencia (Objetos, listas, arrays):** La función recibe un puntero a la memoria del objeto original; mutarlo dentro de la función afecta directamente al objeto exterior.",
      "codeSnippet": "# Demostración de Scope y Mutabilidad en Python\ntotal_global = 100\n\ndef modificar_lista(elementos: list):\n    # Mutación de objeto compartido por referencia\n    elementos.append(999) \n\ndef funcion_pura(a: int, b: int) -> int:\n    # Función pura: no toca nada global ni muta objetos externos\n    return a + b\n\nmi_lista = [1, 2, 3]\nmodificar_lista(mi_lista)\nprint(mi_lista) # [1, 2, 3, 999] -> ¡Fue mutada!",
      "quiz": [
        {
          "question": "¿Qué caracteriza a una 'Función Pura' en ingeniería de software?",
          "options": [
            "Produce siempre el mismo resultado para las mismas entradas y no tiene ningún efecto secundario observable en el resto del sistema",
            "Solo puede estar escrita en lenguaje ensamblador",
            "No puede tener parámetros"
          ],
          "answerIndex": 0,
          "explanation": "Las funciones puras son deterministas y no mutan variables globales ni objetos externos, facilitando su prueba y mantenimiento."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: COLECCIONES ELEMENTALES I: ARREGLOS UNIDIMENSIONALES",
      "description": "Estructuras de datos básicas: el arreglo (Array), almacenamiento contiguo en memoria, indexación en base cero y operaciones de recorrido.",
      "items": [
        "¿Qué es un Arreglo?: Colección ordenada de elementos almacenados en posiciones contiguas de memoria física.",
        "Indexación en Base Cero: ¿Por qué el primer elemento está en el índice 0? (Cálculo del desplazamiento de memoria: $\\text{Dirección} = \\text{Base} + i \\times \\text{Tamaño}$).",
        "Acceso en tiempo constante $O(1)$ por índice.",
        "Recorrido lineal $O(n)$ e iteración sobre arreglos.",
        "El error de desbordamiento de índice (IndexOutOfBounds / IndexError)."
      ],
      "content": "## Arreglos Unidimensionales y Memoria Contigua\n\nEn un arreglo, los elementos están uno inmediatamente al lado del otro en la memoria RAM:\n* Si el arreglo empieza en la dirección de memoria `1000` y cada entero ocupa 4 bytes:\n  * Elemento en índice 0: `1000 + (0 * 4) = 1000`\n  * Elemento en índice 1: `1000 + (1 * 4) = 1004`\n  * Elemento en índice 2: `1000 + (2 * 4) = 1008`\nPor esta fórmula matemática de desplazamiento, la CPU accede a cualquier posición en **tiempo constante $O(1)$**.",
      "codeSnippet": "// Arreglos e indexación base cero en TypeScript\nconst inventario: string[] = ['Laptop', 'Mouse', 'Teclado', 'Monitor'];\n\n// Acceso O(1) directo por cálculo de memoria\nconsole.log('Primer elemento:', inventario[0]); // 'Laptop'\nconsole.log('Tercer elemento:', inventario[2]); // 'Teclado'\n\n// Recorrido seguro respetando límites\nfor (let i = 0; i < inventario.length; i++) {\n  console.log(\\`Índice \\${i}: \\${inventario[i]}\\`);\n}",
      "quiz": [
        {
          "question": "¿Por qué las computadoras utilizan indexación en base cero (índice 0) para los arreglos?",
          "options": [
            "Porque el índice representa el desplazamiento matemático (offset) en bytes desde la dirección base de memoria del arreglo",
            "Porque el número 1 no existía en los primeros procesadores",
            "Por una simple votación de programadores"
          ],
          "answerIndex": 0,
          "explanation": "El índice 0 significa 'desplazamiento cero desde la dirección de inicio'; la fórmula física de acceso a memoria es `DirecciónBase + (índice * tamañoElemento)`."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: COLECCIONES ELEMENTALES II: MATRICES BIDIMENSIONALES",
      "description": "Datos en 2 dimensiones: matrices, cuadrículas, coordenadas $(x, y)$, filas y columnas, y bucles anidados de recorrido.",
      "items": [
        "Representación de tableros, mapas, imágenes y hojas de cálculo con matrices.",
        "Almacenamiento en memoria: Row-Major Order (por filas) vs Column-Major Order (por columnas).",
        "Bucles anidados: El bucle exterior recorre filas; el bucle interior recorre columnas.",
        "Cálculo de diagonales y transformaciones matriciales básicas.",
        "Acceso por coordenadas: `matriz[fila][columna]`."
      ],
      "content": "## Matrices Bidimensionales\n\nUna matriz bidimensional es un arreglo de arreglos. Permite representar coordenadas cartesianas, tableros de juegos (ajedrez, buscaminas) y pantallas de píxeles.",
      "codeSnippet": "# Matriz de 3x3 y recorrido por filas y columnas\nmatriz = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# Acceso directo al elemento central (fila 1, columna 1)\nprint(f\"Centro: {matriz[1][1]}\") # 5\n\n# Recorrido completo con bucles anidados\nfor fila_idx, fila in enumerate(matriz):\n    for col_idx, valor in enumerate(fila):\n        print(f\"Posición ({fila_idx}, {col_idx}) = {valor}\")",
      "quiz": [
        {
          "question": "En una matriz bidimensional `tablero[fila][col]`, ¿qué bucle debe ser el exterior si queremos recorrer la matriz en orden por filas (Row-Major)?",
          "options": [
            "El bucle que itera sobre las filas debe ser el exterior, y el de las columnas el interior",
            "El de las columnas debe ser el exterior",
            "No importa el orden"
          ],
          "answerIndex": 0,
          "explanation": "En Row-Major se fija una fila en el bucle exterior y se recorren todas sus columnas en el interior antes de pasar a la siguiente fila."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: COLECCIONES ASOCIATIVAS: DICCIONARIOS Y MAPAS",
      "description": "Búsqueda por clave: Diccionarios, Mapas clave-valor, tablas hash elementales y acceso asociativo $O(1)$.",
      "items": [
        "Limitaciones de los arreglos numéricos cuando los datos se identifican por nombres o códigos.",
        "Estructura Clave-Valor: Una clave única apunta a un valor asociado.",
        "Búsqueda instantánea en tiempo promedio $O(1)$ frente a la búsqueda lineal $O(n)$ de arreglos.",
        "Operaciones básicas: Insertar, Consultar, Actualizar, Eliminar y comprobar existencia (`'clave' in mapa`).",
        "Uso de diccionarios para contar frecuencias de elementos y agrupar registros."
      ],
      "content": "## Colecciones Asociativas: Diccionarios y Mapas\n\nEn lugar de recordar que el precio de la leche está en `inventario[42]`, un diccionario permite consultar directamente por su nombre: `precios[\"leche\"]`. Por dentro, una **Tabla Hash** transforma la clave de texto en un número de memoria en microsegundos.",
      "codeSnippet": "# Conteo de frecuencias con diccionarios en Python\npalabras = [\"gato\", \"perro\", \"gato\", \"pájaro\", \"perro\", \"gato\"]\nfrecuencias = {}\n\nfor p in palabras:\n    if p in frecuencias:\n        frecuencias[p] += 1\n    else:\n        frecuencias[p] = 1\n\nprint(frecuencias) # {'gato': 3, 'perro': 2, 'pájaro': 1}",
      "quiz": [
        {
          "question": "¿Cuál es la complejidad temporal promedio para buscar un valor por su clave en un diccionario o mapa hash?",
          "options": [
            "$O(1)$ (Tiempo constante)",
            "$O(n)$ (Tiempo lineal)",
            "$O(n^2)$ (Tiempo cuadrático)"
          ],
          "answerIndex": 0,
          "explanation": "Las tablas hash calculan la posición en memoria directamente a partir de la clave mediante una función hash, accediendo en tiempo constante."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: MANEJO DEFENSIVO DE ERRORES: TRY/CATCH Y RESILIENCIA",
      "description": "Software a prueba de fallos: excepciones, el bloque try/catch/finally, tipos de errores en tiempo de ejecución y diseño de software resiliente.",
      "items": [
        "La diferencia entre un error de sintaxis (tiempo de compilación) y una excepción (tiempo de ejecución).",
        "Anatomía del bloque defensivo: `try` (código riesgoso), `catch/except` (recuperación), `finally` (limpieza obligatoria).",
        "El anti-patrón de 'Tragar Excepciones' (Silent catch vacío): Ocultar errores sin registrarlos.",
        "Validación previa de precondiciones frente al lanzamiento de excepciones.",
        "Cierre garantizado de archivos, sockets y recursos en el bloque `finally`."
      ],
      "content": "## Manejo Defensivo de Errores con Try / Catch\n\nEn el mundo real, los discos se llenan, las redes se caen y los usuarios ingresan letras donde se esperaban números. Un programa sin manejo de errores colapsa bruscamente; un programa de ingeniería captura la excepción y se recupera con elegancia.",
      "codeSnippet": "// Manejo defensivo en TypeScript con bloque try/catch/finally\nexport function parsearConfiguracionSegura(jsonTexto: string): Record<string, any> {\n  try {\n    const config = JSON.parse(jsonTexto);\n    return config;\n  } catch (error) {\n    console.warn('Configuración inválida o corrupta. Usando valores por defecto seguros.');\n    return { tema: 'oscuro', puerto: 3000 };\n  } finally {\n    console.log('Operación de lectura finalizada.');\n  }\n}",
      "quiz": [
        {
          "question": "¿Qué bloque de una estructura `try / catch / finally` se ejecuta SIEMPRE, sin importar si ocurrió un error o si todo salió bien?",
          "options": [
            "El bloque `finally`",
            "El bloque `catch`",
            "El bloque `try`"
          ],
          "answerIndex": 0,
          "explanation": "El bloque `finally` está diseñado para ejecutar tareas de limpieza obligatorias (como cerrar archivos o conexiones) en cualquier circunstancia."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: ARQUITECTURA DE COMPUTADORAS: EL MODELO DE VON NEUMANN",
      "description": "Las entrañas del hardware: la arquitectura de Von Neumann, CPU, memoria RAM compartida, bus de datos y el ciclo de reloj.",
      "items": [
        "John von Neumann (1945): El concepto revolucionario de almacenar el programa (instrucciones) y los datos en la misma memoria física.",
        "Componentes de la Arquitectura: Unidad Central de Procesamiento (CPU), Memoria Principal (RAM) y Sistema de Entrada/Salida.",
        "El Cuello de Botella de Von Neumann (Von Neumann Bottleneck): La limitación física del bus que conecta la CPU con la RAM.",
        "La señal de reloj (Clock Signal): Gigahertz (GHz) y pulsos de sincronización de silicio.",
        "Cómo el código fuente de alto nivel se traduce a instrucciones binarias de máquina."
      ],
      "content": "## El Modelo de Von Neumann y el Hardware\n\nToda computadora moderna, desde tu laptop hasta los servidores de Google, sigue la **Arquitectura de Von Neumann**:\n* **CPU:** Contiene la Unidad de Control (CU) y la Unidad Aritmético-Lógica (ALU).\n* **Memoria RAM:** Almacena tanto las instrucciones binarias del programa como las variables.\n* **El Cuello de Botella:** La CPU procesa miles de millones de ciclos por segundo, pero transferir datos desde la memoria RAM a través del bus físico es cientos de veces más lento.",
      "codeSnippet": "# Visualización del flujo de Von Neumann:\n# Memoria RAM (Dirección 0x1000): Instrucción: ADD R1, R2\n# Memoria RAM (Dirección 0x2000): Dato: 42\n# Bus del Sistema: Transporta tanto la instrucción como el dato a la CPU",
      "quiz": [
        {
          "question": "¿Cuál es la innovación fundamental del Modelo de Von Neumann?",
          "options": [
            "Almacenar las instrucciones del programa y los datos de trabajo en la misma memoria física unificada",
            "Inventar el ratón y la pantalla",
            "Usar exclusivamente transistores de plástico"
          ],
          "answerIndex": 0,
          "explanation": "Antes de Von Neumann, cambiar el programa requería recablear físicamente la máquina; almacenar programas como datos en memoria permitió software flexible."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: EL DATA PATH DE LA CPU: ALU, REGISTROS Y BUSES",
      "description": "El camino físico del dato: Program Counter (PC), Instruction Register (IR), Registros de propósito general (R0-R3), la ALU y el ciclo Fetch-Decode-Execute.",
      "items": [
        "El Data Path: El conjunto de registros, multiplexores y compuertas lógicas por donde circulan los datos en la CPU.",
        "Registros Clave: PC (Program Counter - dirección de la siguiente instrucción), IR (Instruction Register - instrucción actual).",
        "Registros de Trabajo: R0, R1, R2, R3 (los almacenamientos más rápidos del universo: ~0.5 nanosegundos).",
        "La ALU (Arithmetic Logic Unit): Circuitos sumadores, restadores y compuertas lógicas.",
        "El Ciclo de Instrucción: FETCH (Buscar en RAM) ➔ DECODE (Decodificar operación) ➔ EXECUTE (Operar en ALU).",
        "Conexión con el simulador interactivo de Data Path del curso."
      ],
      "content": "## El Ciclo Fetch - Decode - Execute y el Data Path\n\nCada instrucción que escribe un programador se reduce a tres micro-operaciones de la CPU:\n1. **FETCH:** El Program Counter (PC) apunta a una dirección de RAM. La CPU lee esa instrucción y la copia en el Instruction Register (IR). El PC avanza al siguiente paso.\n2. **DECODE:** La Unidad de Control analiza los bits de la instrucción para saber qué operación realizar (ej. sumar) y qué registros están involucrados.\n3. **EXECUTE:** La ALU realiza la operación matemática y almacena el resultado en un registro interno.",
      "codeSnippet": "# Simulación en Python del Ciclo Fetch-Decode-Execute de la CPU\nclass CPU:\n    def __init__(self):\n        self.PC = 0 # Program Counter\n        self.registros = {'R0': 0, 'R1': 0}\n        self.memoria = ['LOAD R0, 5', 'LOAD R1, 10', 'ADD R0, R1', 'HALT']\n        \n    def paso(self):\n        # 1. FETCH\n        instruccion = self.memoria[self.PC]\n        self.PC += 1\n        \n        # 2. DECODE & 3. EXECUTE\n        partes = instruccion.replace(',', '').split()\n        op = partes[0]\n        \n        if op == 'LOAD':\n            reg, val = partes[1], int(partes[2])\n            self.registros[reg] = val\n        elif op == 'ADD':\n            reg_dest, reg_src = partes[1], partes[2]\n            self.registros[reg_dest] += self.registros[reg_src]\n        elif op == 'HALT':\n            return False\n        return True",
      "quiz": [
        {
          "question": "¿Qué función cumple el Program Counter (PC) en la CPU?",
          "options": [
            "Almacena la dirección de memoria de la siguiente instrucción que la CPU debe buscar y ejecutar",
            "Cuenta cuántos programas están instalados",
            "Mide la temperatura del procesador"
          ],
          "answerIndex": 0,
          "explanation": "El PC es el puntero de ejecución del hardware: siempre contiene la dirección de RAM de la próxima instrucción a procesar."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: JERARQUÍA DE MEMORIA Y LA ESCALA HUMANA DE LATENCIAS",
      "description": "Comprendiendo el costo del tiempo en hardware: Registros (0.5ns), Caché L1/L2/L3 (1-10ns), Memoria RAM (100ns) y Discos SSD (50µs).",
      "items": [
        "La pirámide de memoria: Mayor velocidad = Menor capacidad y mayor costo por bit.",
        "Los Registros de CPU: 0.5 nanosegundos (acceso instantáneo en silicio).",
        "Caché L1, L2 y L3: SRAM ultrarrápida integrada en el encapsulado del procesador.",
        "Memoria RAM (DRAM): 100 nanosegundos (un abismo comparado con la CPU).",
        "La Escala Humana de Latencias: Si 1 ciclo de CPU fuera 1 segundo, la RAM tardaría minutos y el SSD meses.",
        "Principio de Localidad Espacial y Temporal: Cómo escribir código 'Cache-Friendly'."
      ],
      "content": "## La Jerarquía de Memoria y la Escala Humana\n\nPara entender por qué la arquitectura importa, los ingenieros traducen los nanosegundos a una **Escala Humana** (multiplicando cada segundo por mil millones):\n\n| Componente | Tiempo Real | Equivalente a Escala Humana |\n|---|---|---|\n| **1 Ciclo de CPU** | 0.3 ns | 1 segundo (un latido de corazón) |\n| **Caché L1** | 1 ns | 3 segundos |\n| **Caché L2 / L3** | 4 - 10 ns | 10 a 30 segundos |\n| **Memoria RAM** | 100 ns | **5 minutos** (esperando datos) |\n| **Disco SSD NVMe** | 50,000 ns (50µs) | **1.7 días** |\n| **Petición por Internet (EE.UU. a Europa)** | 100,000,000 ns (100ms) | **10 años de espera** |",
      "codeSnippet": "# Demostración de Código Cache-Friendly (Localidad Espacial)\nimport time\n\ntamano = 2000\nmatriz = [[1] * tamano for _ in range(tamano)]\n\n# Recorrido por Filas (Cache-Friendly: lee memoria contigua)\ninicio = time.time()\nsuma1 = 0\nfor i in range(tamano):\n    for j in range(tamano):\n        suma1 += matriz[i][j]\nprint(f\"Recorrido por filas: {time.time() - inicio:.3f}s\")\n\n# Recorrido por Columnas (Cache-Unfriendly: salta miles de bytes en RAM)\ninicio = time.time()\nsuma2 = 0\nfor j in range(tamano):\n    for i in range(tamano):\n        suma2 += matriz[i][j]\nprint(f\"Recorrido por columnas: {time.time() - inicio:.3f}s\")",
      "quiz": [
        {
          "question": "¿Por qué recorrer una matriz por filas en C/Python es notablemente más rápido que recorrerla por columnas?",
          "options": [
            "Por la localidad espacial: las filas están almacenadas contiguamente en la memoria RAM y se cargan juntas en la caché L1/L2 de la CPU",
            "Porque las columnas no tienen memoria",
            "Porque los números en las columnas son más pesados"
          ],
          "answerIndex": 0,
          "explanation": "Al leer memoria contigua, la CPU aprovecha las líneas de caché ya cargadas; al saltar por columnas, sufre constantes 'Cache Misses' que obligan a ir a la lenta RAM."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: LA PILA DE LLAMADAS (CALL STACK) VS EL MONTÍCULO (HEAP)",
      "description": "Gestión de memoria de variables: el Call Stack para ejecución y variables locales LIFO, el Heap para objetos dinámicos y el Stack Overflow.",
      "items": [
        "Dos mundos en la memoria de un proceso: El Stack y el Heap.",
        "El Call Stack: Estructura LIFO (Last In, First Out) gestionada por hardware para llamadas a función y variables locales.",
        "Marcos de Pila (Stack Frames): Dirección de retorno, parámetros y variables locales.",
        "El Heap: Memoria dinámica no estructurada para objetos de tamaño variable que sobreviven a la función.",
        "El temido `Stack Overflow`: Recursión infinita agotando la memoria de la pila.",
        "Punteros en el Stack que apuntan a datos en el Heap."
      ],
      "content": "## Stack vs Heap en la Ejecución de Software\n\nCada programa en ejecución divide su memoria en dos zonas críticas:\n\n### 1. El Call Stack (La Pila)\n* Es extremadamente rápido.\n* Almacena las variables locales de tipos primitivos y los **Marcos de Pila (Stack Frames)** de cada función invocada.\n* Cuando una función termina (`return`), su marco de pila se destruye de inmediato moviendo un simple puntero de registro.\n\n### 2. El Heap (El Montículo)\n* Es una gran piscina de memoria dinámica.\n* Se usa para objetos cuyo tamaño no se conoce en tiempo de compilación (listas, arrays dinámicos, diccionarios).\n* Es más lento de asignar y requiere recolección de basura (**Garbage Collection**) o liberación manual en lenguajes como C (`free()`).",
      "codeSnippet": "// Demostración Stack vs Heap en TypeScript\nfunction operacionMatematica(a: number, b: number): number {\n  const suma = a + b; // 'a', 'b' y 'suma' viven en el CALL STACK\n  return suma; // Se destruyen al salir de la función\n}\n\nfunction crearUsuario() {\n  // 'usuario' es un puntero en el STACK que apunta a un objeto en el HEAP\n  const usuario = {\n    id: 101,\n    nombre: 'Selvin',\n    preferencias: ['dark_mode', 'notificaciones'] // HEAP\n  };\n  return usuario; // El objeto sobrevive en el HEAP después del retorno\n}",
      "quiz": [
        {
          "question": "¿Qué causa un error de tipo 'Stack Overflow' en un programa?",
          "options": [
            "Una recursión infinita o anidación excesiva de llamadas a función que llena por completo el espacio asignado a la pila de llamadas (Call Stack)",
            "El disco duro se quedó sin espacio",
            "La base de datos se cerró"
          ],
          "answerIndex": 0,
          "explanation": "Cada llamada a función apila un nuevo Stack Frame; si una recursión no tiene caso base o es demasiado profunda, desborda el límite de la pila."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: ALGORITMIA FUNDAMENTAL Y DEPURACIÓN SISTEMÁTICA",
      "description": "Búsqueda y ordenamiento elemental: Búsqueda Lineal $O(n)$ vs Búsqueda Binaria $O(\\log n)$, técnica de Dry Run (Traza Mental) y depuración científica.",
      "items": [
        "De la intuición a la algoritmia: Eficiencia comparativa.",
        "Búsqueda Lineal: Escanear uno por uno ($O(n)$).",
        "Búsqueda Binaria: Búsqueda en listas ordenadas dividiendo por la mitad en cada paso ($O(\\log n)$).",
        "El método de Depuración Científica (Scientific Debugging): Observar síntoma ➔ Formular hipótesis ➔ Probar hipótesis ➔ Aislar causa raíz.",
        "Técnica de la Traza Mental (Dry Run): Simular el valor de las variables paso a paso en papel y lápiz.",
        "Técnica del Patito de Goma (Rubber Duck Debugging) para verbalizar problemas."
      ],
      "content": "## Algoritmia Fundamental y Depuración Sistemática\n\n### Búsqueda Binaria vs Lineal\nSi tienes una lista de 1,000,000 de clientes ordenados por ID:\n* La **Búsqueda Lineal** puede requerir hasta 1,000,000 de comparaciones.\n* La **Búsqueda Binaria** descarta la mitad de la lista en cada paso: solo requiere un máximo de $\\approx 20$ comparaciones ($2^{20} = 1,048,576$).\n\n### El Método de Depuración Sistemática\nNunca cambies líneas de código al azar esperando que el bug desaparezca. Depurar es un proceso de deducción lógica:\n1. Diseña una prueba mínima que reproduzca el fallo el 100% de las veces.\n2. Traza mentalmente o con un debugger los valores de las variables antes y después del fallo.\n3. Corrige la causa raíz, no el síntoma.",
      "codeSnippet": "# Implementación pura de Búsqueda Binaria O(log n)\ndef busqueda_binaria(lista_ordenada: list[int], objetivo: int) -> int:\n    izquierda = 0\n    derecha = len(lista_ordenada) - 1\n    \n    while izquierda <= derecha:\n        medio = (izquierda + derecha) // 2\n        valor = lista_ordenada[medio]\n        \n        if valor == objetivo:\n            return medio # Encontrado en índice medio\n        elif valor < objetivo:\n            izquierda = medio + 1 # Descartar mitad izquierda\n        else:\n            derecha = medio - 1 # Descartar mitad derecha\n            \n    return -1 # No encontrado",
      "quiz": [
        {
          "question": "¿Cuál es la precondición matemática obligatoria para poder aplicar una Búsqueda Binaria en una lista?",
          "options": [
            "Que la lista se encuentre previamente ordenada",
            "Que todos los números sean positivos",
            "Que la lista tenga una cantidad impar de elementos"
          ],
          "answerIndex": 0,
          "explanation": "La búsqueda binaria descarta mitades enteras basándose en la relación de orden; si la lista está desordenada, el algoritmo no puede predecir en qué mitad buscar."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: AUDITORÍA DE SISTEMAS Y BRECHAS DE IA",
      "description": "Integración completa de fundamentos: diseño defensivo de un sistema de facturación, simulación de su paso por el Data Path y auditoría crítica contra alucinaciones de IA.",
      "items": [
        "Integración de todos los conceptos del Paso 0: Pensamiento de ingeniería, pseudocódigo, hardware, data path y resiliencia.",
        "Auditoría crítica del código generado por Inteligencia Artificial: Las 3 trampas comunes (Edge cases ignorados, tipos de datos inadecuados, suposiciones no verificadas).",
        "Manejo de estados en memoria física: Seguimiento del Call Stack y variables primitivas.",
        "Construcción del sistema de facturación con validaciones defensivas completas.",
        "Entrega y verificación del Laboratorio Fundamentos del curso."
      ],
      "content": "## Proyecto Integrador: El Criterio del Ingeniero frente a la IA\n\nCualquiera puede pedirle a una IA: *\"Hazme un script de facturación\"*. La IA entregará un código que parece funcionar a primera vista, pero que con frecuencia:\n1. Usa números flotantes para dinero, perdiendo centavos por errores de redondeo.\n2. Carece de Guard Clauses, colapsando si recibe valores nulos o cadenas vacías.\n3. Asume que la memoria y la red son infinitas y sin costo.\n\nEn este módulo integrador, aplicas todo el rigor del **Paso 0**: modelas el problema, defines invariantes estrictos, analizas el viaje del dato por la memoria y construyes una solución indestructible.",
      "codeSnippet": "# Sistema de Facturación Integrador Defensivo\nclass SistemaFacturacionDefensivo:\n    def __init__(self):\n        self.pedidos_procesados = {}\n\n    def procesar(self, pedido_id: str, cliente: dict, items: list) -> dict:\n        # Guard 1: Validación de entradas no nulas\n        if not pedido_id or not cliente or not items:\n            raise ValueError(\"Datos de pedido incompletos\")\n\n        # Guard 2: Validación de cliente activo\n        if not cliente.get(\"esta_activo\", False):\n            raise PermissionError(\"El cliente está inactivo\")\n\n        # Cálculo en centavos enteros para evitar imprecisiones de flotantes\n        subtotal_centavos = 0\n        for item in items:\n            precio = item.get(\"precio_centavos\", 0)\n            cantidad = item.get(\"cantidad\", 0)\n            if precio <= 0 or cantidad <= 0:\n                raise ValueError(\"Precio o cantidad inválidos\")\n            subtotal_centavos += precio * cantidad\n\n        iva_centavos = int(subtotal_centavos * 0.16)\n        total_centavos = subtotal_centavos + iva_centavos\n\n        recibo = {\n            \"pedido_id\": pedido_id,\n            \"subtotal_usd\": subtotal_centavos / 100.0,\n            \"iva_usd\": iva_centavos / 100.0,\n            \"total_usd\": total_centavos / 100.0,\n            \"estado\": \"CONFIRMADO\"\n        }\n        self.pedidos_procesados[pedido_id] = recibo\n        return recibo",
      "quiz": [
        {
          "question": "¿Por qué un Ingeniero de Software no debe confiar ciegamente en el código generado por herramientas de Inteligencia Artificial sin auditarlo?",
          "options": [
            "Porque los modelos de lenguaje tienden a ignorar casos límite (edge cases), usan tipos de datos propensos a imprecisión y no consideran las limitaciones físicas del hardware",
            "Porque el código de IA siempre tiene virus",
            "Porque la IA no sabe usar condicionales"
          ],
          "answerIndex": 0,
          "explanation": "El criterio de ingeniería, la verificación formal y el entendimiento del hardware son indispensables para auditar y convertir borradores de IA en software de producción."
        }
      ]
    }
  ]
};

export const COMPUTATIONAL_THINKING_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 1: FILOSOFÍA DE LA INGENIERÍA Y RESOLUCIÓN DE PROBLEMAS.",
      "placeholder": "# Planteamiento de Ingeniería: Análisis IPO antes del código\n# Problema: Calcular el costo de envío con recargo por distancia\n\n# 1. ENTRADAS:\n#   - peso_kg: Flotante positivo > 0\n#   - distancia_km: Entero positivo > 0\n# 2. PROCESAMIENTO:\n#   - tarifa_base = $5.00\n#   - costo_peso = peso_kg * 1.50\n#   - recargo_distancia = 0 si distancia <= 50 else (distancia - 50) * 0.20\n#   - total = tarifa_base + costo_peso + recargo_distancia\n# 3. SALIDA:\n#   - total_envio: Flotante con 2 decimales\n\ndef calcular_envio(peso_kg: float, distancia_km: int) -> float:\n    assert peso_kg > 0, \"El peso debe ser estrictamente positivo\"\n    assert distancia_km > 0, \"La distancia debe ser estrictamente positiva\"\n    \n    tarifa_base = 5.00\n    costo_peso = peso_kg * 1.50\n    recargo_distancia = 0.0 if distancia_km <= 50 else (distancia_km - 50) * 0.20\n    \n    return round(tarifa_base + costo_peso + recargo_distancia, 2)",
      "expectedKeywords": [
        "filosofía"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 2: EL MÉTODO DE DESCOMPOSICIÓN EN PROCESOS ATÓMICOS.",
      "placeholder": "# Ejemplo de Descomposición Modular: Sistema de Facturación\ndef emitir_factura(pedido_id: str, cliente_id: str) -> dict:\n    # 1. Proceso Atómico: Validar cliente y recuperar datos\n    cliente = obtener_y_validar_cliente(cliente_id)\n    \n    # 2. Proceso Atómico: Calcular subtotales e impuestos\n    items, subtotal = calcular_items_pedido(pedido_id)\n    impuestos = calcular_iva(subtotal)\n    \n    # 3. Proceso Atómico: Procesar cobro financiero\n    pago_confirmado = cobrar_pasarela(cliente, subtotal + impuestos)\n    \n    # 4. Proceso Atómico: Generar comprobante legal\n    return generar_recibo_fiscal(cliente, items, subtotal, impuestos, pago_confirmado)",
      "expectedKeywords": [
        "el"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 3: PSEUDOCÓDIGO UNIVERSAL: NOTACIÓN AGNÓSTICA.",
      "placeholder": "ALGORITMO CalcularDescuentoVip\n  ENTRADAS: totalCompra (Real), esMiembroVip (Booleano)\n  SALIDAS: totalFinal (Real)\n\n  INICIO\n    SI totalCompra <= 0 ENTONCES\n      ESCRIBIR \"Error: Monto inválido\"\n      RETORNAR 0\n    FIN SI\n\n    SI esMiembroVip Y totalCompra > 100 ENTONCES\n      descuento <- totalCompra * 0.15\n    SINO\n      descuento <- 0\n    FIN SI\n\n    totalFinal <- totalCompra - descuento\n    RETORNAR totalFinal\n  FIN",
      "expectedKeywords": [
        "pseudocódigo"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 4: VARIABLES, TIPOS DE DATOS Y REPRESENTACIÓN EN MEMORIA.",
      "placeholder": "# Demostración del estándar IEEE 754 y solución financiera\n# La trampa de los flotantes:\nsuma_flotante = 0.1 + 0.2\nprint(f\"0.1 + 0.2 = {suma_flotante}\") # Imprime: 0.30000000000000004\n\n# Enfoque de Ingeniería de Software (Manejo en Centavos Enteros):\nprecio_item1_centavos = 10  # $0.10\nprecio_item2_centavos = 20  # $0.20\ntotal_centavos = precio_item1_centavos + precio_item2_centavos\nprint(f\"Total exacto en dólares: ${total_centavos / 100:.2f}\") # Imprime: $0.30 exacto",
      "expectedKeywords": [
        "variables,"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 5: CADENAS DE TEXTO Y CODIFICACIÓN: ASCII, UNICODE Y UTF-8.",
      "placeholder": "# Inspección de bytes y longitud en Python\ntexto_ascii = \"Hola\"\ntexto_unicode = \"Hola Mundo 🌍\"\n\nprint(f\"Longitud en caracteres: {len(texto_unicode)}\") # 12 caracteres\nbytes_utf8 = texto_unicode.encode('utf-8')\nprint(f\"Longitud real en bytes UTF-8: {len(bytes_utf8)}\") # 15 bytes (el emoji ocupa 4 bytes)",
      "expectedKeywords": [
        "cadenas"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 6: CONTROL DE FLUJO LÓGICO: CONDICIONALES Y CORTOCIRCUITO.",
      "placeholder": "// Demostración de Cortocircuito en TypeScript\nfunction operacionCostosa(): boolean {\n  console.log(\"Calculando...\");\n  return true;\n}\n\n// Cortocircuito con OR: Al ser el primero true, la función costosa NUNCA se invoca\nconst tieneAcceso = true || operacionCostosa(); \n\n// Cortocircuito de seguridad contra nulos:\ninterface Cuenta { activa: boolean; fondos: number; }\nconst cuentaUsuario: Cuenta | null = null;\n\n// Seguro: no arroja error porque cuentaUsuario es null y aborta la evaluación\nif (cuentaUsuario !== null && cuentaUsuario.fondos > 0) {\n  console.log(\"Fondos disponibles\");\n}",
      "expectedKeywords": [
        "control"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 7: VALIDACIÓN DEFENSIVA Y EL PATRÓN GUARD CLAUSES.",
      "placeholder": "# Antes: Anidación piramidal confusa\ndef procesar_compra_malo(usuario, item):\n    if usuario is not None:\n        if usuario.esta_activo:\n            if item.stock > 0:\n                if usuario.saldo >= item.precio:\n                    usuario.saldo -= item.precio\n                    item.stock -= 1\n                    return True\n    return False\n\n# Después: Clean Code con Guard Clauses\ndef procesar_compra_limpio(usuario, item):\n    if usuario is None or not usuario.esta_activo:\n        return False\n    if item.stock <= 0:\n        return False\n    if usuario.saldo < item.precio:\n        return False\n        \n    usuario.saldo -= item.precio\n    item.stock -= 1\n    return True",
      "expectedKeywords": [
        "validación"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 8: CICLOS E ITERACIÓN I: BUCLE PARA (FOR) Y ACUMULADORES.",
      "placeholder": "# Patrón Acumulador y Contador con bucle For\ncalificaciones = [85, 92, 78, 90, 65, 88]\n\nsuma_total = 0 # Acumulador\nalumnos_sobresalientes = 0 # Contador\n\nfor nota in calificaciones:\n    suma_total += nota\n    if nota >= 90:\n        alumnos_sobresalientes += 1\n\npromedio = suma_total / len(calificaciones)\nprint(f\"Promedio general: {promedio:.2f}\")\nprint(f\"Alumnos con 90+: {alumnos_sobresalientes}\")",
      "expectedKeywords": [
        "ciclos"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 9: CICLOS E ITERACIÓN II: BUCLE MIENTRAS (WHILE) Y BUCLES INFINITOS.",
      "placeholder": "# Bucle While con límite de seguridad estricto (Anti-Infinite Loop)\ndef simular_reintento_red():\n    intentos = 0\n    MAX_INTENTOS = 5 # Límite de seguridad\n    conexion_exitosa = False\n\n    while not conexion_exitosa and intentos < MAX_INTENTOS:\n        intentos += 1\n        print(f\"Intento {intentos} de {MAX_INTENTOS}...\")\n        # Simulación de éxito en el intento 3\n        if intentos == 3:\n            conexion_exitosa = True\n            \n    return conexion_exitosa",
      "expectedKeywords": [
        "ciclos"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 10: FUNCIONES, MODULARIDAD Y ÁMBITO (SCOPE).",
      "placeholder": "# Demostración de Scope y Mutabilidad en Python\ntotal_global = 100\n\ndef modificar_lista(elementos: list):\n    # Mutación de objeto compartido por referencia\n    elementos.append(999) \n\ndef funcion_pura(a: int, b: int) -> int:\n    # Función pura: no toca nada global ni muta objetos externos\n    return a + b\n\nmi_lista = [1, 2, 3]\nmodificar_lista(mi_lista)\nprint(mi_lista) # [1, 2, 3, 999] -> ¡Fue mutada!",
      "expectedKeywords": [
        "funciones,"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 11: COLECCIONES ELEMENTALES I: ARREGLOS UNIDIMENSIONALES.",
      "placeholder": "// Arreglos e indexación base cero en TypeScript\nconst inventario: string[] = ['Laptop', 'Mouse', 'Teclado', 'Monitor'];\n\n// Acceso O(1) directo por cálculo de memoria\nconsole.log('Primer elemento:', inventario[0]); // 'Laptop'\nconsole.log('Tercer elemento:', inventario[2]); // 'Teclado'\n\n// Recorrido seguro respetando límites\nfor (let i = 0; i < inventario.length; i++) {\n  console.log(\\`Índice \\${i}: \\${inventario[i]}\\`);\n}",
      "expectedKeywords": [
        "colecciones"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 12: COLECCIONES ELEMENTALES II: MATRICES BIDIMENSIONALES.",
      "placeholder": "# Matriz de 3x3 y recorrido por filas y columnas\nmatriz = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# Acceso directo al elemento central (fila 1, columna 1)\nprint(f\"Centro: {matriz[1][1]}\") # 5\n\n# Recorrido completo con bucles anidados\nfor fila_idx, fila in enumerate(matriz):\n    for col_idx, valor in enumerate(fila):\n        print(f\"Posición ({fila_idx}, {col_idx}) = {valor}\")",
      "expectedKeywords": [
        "colecciones"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 13: COLECCIONES ASOCIATIVAS: DICCIONARIOS Y MAPAS.",
      "placeholder": "# Conteo de frecuencias con diccionarios en Python\npalabras = [\"gato\", \"perro\", \"gato\", \"pájaro\", \"perro\", \"gato\"]\nfrecuencias = {}\n\nfor p in palabras:\n    if p in frecuencias:\n        frecuencias[p] += 1\n    else:\n        frecuencias[p] = 1\n\nprint(frecuencias) # {'gato': 3, 'perro': 2, 'pájaro': 1}",
      "expectedKeywords": [
        "colecciones"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 14: MANEJO DEFENSIVO DE ERRORES: TRY/CATCH Y RESILIENCIA.",
      "placeholder": "// Manejo defensivo en TypeScript con bloque try/catch/finally\nexport function parsearConfiguracionSegura(jsonTexto: string): Record<string, any> {\n  try {\n    const config = JSON.parse(jsonTexto);\n    return config;\n  } catch (error) {\n    console.warn('Configuración inválida o corrupta. Usando valores por defecto seguros.');\n    return { tema: 'oscuro', puerto: 3000 };\n  } finally {\n    console.log('Operación de lectura finalizada.');\n  }\n}",
      "expectedKeywords": [
        "manejo"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 15: ARQUITECTURA DE COMPUTADORAS: EL MODELO DE VON NEUMANN.",
      "placeholder": "# Visualización del flujo de Von Neumann:\n# Memoria RAM (Dirección 0x1000): Instrucción: ADD R1, R2\n# Memoria RAM (Dirección 0x2000): Dato: 42\n# Bus del Sistema: Transporta tanto la instrucción como el dato a la CPU",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 16: EL DATA PATH DE LA CPU: ALU, REGISTROS Y BUSES.",
      "placeholder": "# Simulación en Python del Ciclo Fetch-Decode-Execute de la CPU\nclass CPU:\n    def __init__(self):\n        self.PC = 0 # Program Counter\n        self.registros = {'R0': 0, 'R1': 0}\n        self.memoria = ['LOAD R0, 5', 'LOAD R1, 10', 'ADD R0, R1', 'HALT']\n        \n    def paso(self):\n        # 1. FETCH\n        instruccion = self.memoria[self.PC]\n        self.PC += 1\n        \n        # 2. DECODE & 3. EXECUTE\n        partes = instruccion.replace(',', '').split()\n        op = partes[0]\n        \n        if op == 'LOAD':\n            reg, val = partes[1], int(partes[2])\n            self.registros[reg] = val\n        elif op == 'ADD':\n            reg_dest, reg_src = partes[1], partes[2]\n            self.registros[reg_dest] += self.registros[reg_src]\n        elif op == 'HALT':\n            return False\n        return True",
      "expectedKeywords": [
        "el"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 17: JERARQUÍA DE MEMORIA Y LA ESCALA HUMANA DE LATENCIAS.",
      "placeholder": "# Demostración de Código Cache-Friendly (Localidad Espacial)\nimport time\n\ntamano = 2000\nmatriz = [[1] * tamano for _ in range(tamano)]\n\n# Recorrido por Filas (Cache-Friendly: lee memoria contigua)\ninicio = time.time()\nsuma1 = 0\nfor i in range(tamano):\n    for j in range(tamano):\n        suma1 += matriz[i][j]\nprint(f\"Recorrido por filas: {time.time() - inicio:.3f}s\")\n\n# Recorrido por Columnas (Cache-Unfriendly: salta miles de bytes en RAM)\ninicio = time.time()\nsuma2 = 0\nfor j in range(tamano):\n    for i in range(tamano):\n        suma2 += matriz[i][j]\nprint(f\"Recorrido por columnas: {time.time() - inicio:.3f}s\")",
      "expectedKeywords": [
        "jerarquía"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 18: LA PILA DE LLAMADAS (CALL STACK) VS EL MONTÍCULO (HEAP).",
      "placeholder": "// Demostración Stack vs Heap en TypeScript\nfunction operacionMatematica(a: number, b: number): number {\n  const suma = a + b; // 'a', 'b' y 'suma' viven en el CALL STACK\n  return suma; // Se destruyen al salir de la función\n}\n\nfunction crearUsuario() {\n  // 'usuario' es un puntero en el STACK que apunta a un objeto en el HEAP\n  const usuario = {\n    id: 101,\n    nombre: 'Selvin',\n    preferencias: ['dark_mode', 'notificaciones'] // HEAP\n  };\n  return usuario; // El objeto sobrevive en el HEAP después del retorno\n}",
      "expectedKeywords": [
        "la"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 19: ALGORITMIA FUNDAMENTAL Y DEPURACIÓN SISTEMÁTICA.",
      "placeholder": "# Implementación pura de Búsqueda Binaria O(log n)\ndef busqueda_binaria(lista_ordenada: list[int], objetivo: int) -> int:\n    izquierda = 0\n    derecha = len(lista_ordenada) - 1\n    \n    while izquierda <= derecha:\n        medio = (izquierda + derecha) // 2\n        valor = lista_ordenada[medio]\n        \n        if valor == objetivo:\n            return medio # Encontrado en índice medio\n        elif valor < objetivo:\n            izquierda = medio + 1 # Descartar mitad izquierda\n        else:\n            derecha = medio - 1 # Descartar mitad derecha\n            \n    return -1 # No encontrado",
      "expectedKeywords": [
        "algoritmia"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Implementa una solución lógica o código que resuelva los requerimientos del MÓDULO 20: PROYECTO INTEGRADOR: AUDITORÍA DE SISTEMAS Y BRECHAS DE IA.",
      "placeholder": "# Sistema de Facturación Integrador Defensivo\nclass SistemaFacturacionDefensivo:\n    def __init__(self):\n        self.pedidos_procesados = {}\n\n    def procesar(self, pedido_id: str, cliente: dict, items: list) -> dict:\n        # Guard 1: Validación de entradas no nulas\n        if not pedido_id or not cliente or not items:\n            raise ValueError(\"Datos de pedido incompletos\")\n\n        # Guard 2: Validación de cliente activo\n        if not cliente.get(\"esta_activo\", False):\n            raise PermissionError(\"El cliente está inactivo\")\n\n        # Cálculo en centavos enteros para evitar imprecisiones de flotantes\n        subtotal_centavos = 0\n        for item in items:\n            precio = item.get(\"precio_centavos\", 0)\n            cantidad = item.get(\"cantidad\", 0)\n            if precio <= 0 or cantidad <= 0:\n                raise ValueError(\"Precio o cantidad inválidos\")\n            subtotal_centavos += precio * cantidad\n\n        iva_centavos = int(subtotal_centavos * 0.16)\n        total_centavos = subtotal_centavos + iva_centavos\n\n        recibo = {\n            \"pedido_id\": pedido_id,\n            \"subtotal_usd\": subtotal_centavos / 100.0,\n            \"iva_usd\": iva_centavos / 100.0,\n            \"total_usd\": total_centavos / 100.0,\n            \"estado\": \"CONFIRMADO\"\n        }\n        self.pedidos_procesados[pedido_id] = recibo\n        return recibo",
      "expectedKeywords": [
        "proyecto"
      ],
      "hint": "Revisa los conceptos del módulo y aplica lógica algorítmica estructurada y defensiva.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de Pensamiento Computacional
COMPUTATIONAL_THINKING_COURSE.modules.forEach((mod) => {
  if (COMPUTATIONAL_THINKING_EXERCISES[mod.id]) {
    mod.exercises = COMPUTATIONAL_THINKING_EXERCISES[mod.id];
  }
});
