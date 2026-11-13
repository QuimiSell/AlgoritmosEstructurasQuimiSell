import { Course, TutorExercise } from '../domain/models';

export const CLEAN_CODE_COURSE: Course = {
  "id": "clean_code_solid",
  "title": "Clean Code, Principios SOLID, Patrones de Diseño GoF y Arquitectura Limpia",
  "shortTitle": "Clean Code & Arquitectura",
  "badge": "Arquitectura Limpia · 20 Módulos",
  "icon": "🧼",
  "description": "El estándar definitivo de ingeniería de software: código limpio según Robert C. Martin (Tío Bob), los 5 principios SOLID en profundidad, patrones de diseño GoF (Creacionales, Estructurales y de Comportamiento), refactorización de Code Smells, Clean Architecture y Arquitectura Hexagonal con DDD.",
  "whyStudyTitle": "🧼 ¿Por qué la Arquitectura Limpia y los Principios SOLID separan a un programador de un Ingeniero Senior?",
  "whyStudyText": "Cualquier persona puede escribir código que una computadora entienda; los ingenieros de élite escriben código que los humanos pueden entender, mantener y extender con elegancia durante décadas. El código sucio genera deuda técnica exponencial, parálisis en el equipo y miedo a desplegar a producción. Este curso cubre con profundidad universitaria y práctica real los cimientos de la ingeniería de software moderna: desde la elección milimétrica de un nombre de variable y la erradicación del nulo, hasta los principios SOLID, el catálogo completo de patrones GoF, la refactorización sistemática de code smells y el diseño de arquitecturas limpias y hexagonales preparadas para escalar.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS",
      "why": "Las enseñanzas de Robert C. Martin (Tío Bob): código autodocumentado, nombres intencionados y la regla del Boy Scout."
    },
    {
      "id": 2,
      "title": "FUNCIONES LIMPIAS, SLAP Y PARÁMETROS ATÓMICOS",
      "why": "Diseño de funciones: regla de hacer una sola cosa, un solo nivel de abstracción (SLAP), límites de argumentos y funciones puras."
    },
    {
      "id": 3,
      "title": "COMENTARIOS HONESTOS, FORMATO Y ESTRUCTURA DE CÓDIGO",
      "why": "Cuándo comentar y cuándo refactorizar: comentarios como compensación por código deficiente, formato vertical y leyes de proximidad."
    },
    {
      "id": 4,
      "title": "MANEJO LIMPIO DE ERRORES: FAIL-FAST, GUARD CLAUSES Y RESULT/EITHER",
      "why": "Erradicación de sentencias if anidadas: el patrón Guard Clauses, principio Fail-Fast y tipos funcionales Result y Either."
    },
    {
      "id": 5,
      "title": "CÓDIGO DEFENSIVO Y ERRADICACIÓN DE NULOS",
      "why": "El error del billón de dólares de Tony Hoare: erradicación de NullPointerExceptions, el patrón Null Object y Optional/Maybe."
    },
    {
      "id": 6,
      "title": "PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)",
      "why": "Una sola razón para cambiar: alta cohesión, separación de intereses (SoC) y delimitación estricta de responsabilidades."
    },
    {
      "id": 7,
      "title": "PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)",
      "why": "Abierto para extensión, cerrado para modificación: uso de polimorfismo, interfaces y el Patrón Strategy para eliminar switches monolíticos."
    },
    {
      "id": 8,
      "title": "PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)",
      "why": "Contratos de subtipado por Barbara Liskov: precondiciones, postcondiciones, el dilema Cuadrado-Rectángulo y diseño por contrato."
    },
    {
      "id": 9,
      "title": "PRINCIPIO I - INTERFACE SEGREGATION PRINCIPLE (ISP)",
      "why": "Interfaces pequeñas y específicas de rol: evitar interfaces 'gordas' que obliguen a implementar métodos innecesarios."
    },
    {
      "id": 10,
      "title": "PRINCIPIO D - DEPENDENCY INVERSION PRINCIPLE (DIP)",
      "why": "Inversión de dependencias e Inyección de Control (IoC): los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos dependen de abstracciones."
    },
    {
      "id": 11,
      "title": "PATRONES CREACIONALES GOF: FACTORY, BUILDER Y SINGLETON SEGURO",
      "why": "Patrones Creacionales del Gang of Four: Factory Method, Abstract Factory, Builder fluido y Singleton thread-safe con inmutabilidad."
    },
    {
      "id": 12,
      "title": "PATRONES ESTRUCTURALES GOF: ADAPTER, DECORATOR Y FACADE",
      "why": "Composición de clases e interfaces: el Adapter como traductor de contratos, Decorator para extensibilidad dinámica y Facade como interfaz unificada."
    },
    {
      "id": 13,
      "title": "PATRONES ESTRUCTURALES GOF: COMPOSITE Y PROXY",
      "why": "Estructuras jerárquicas y control de acceso: Composite para árboles de objetos homogéneos y Proxy para control, lazy loading y auditoría."
    },
    {
      "id": 14,
      "title": "PATRONES DE COMPORTAMIENTO GOF: STRATEGY, OBSERVER Y COMMAND",
      "why": "Comportamiento dinámico y desacoplamiento de eventos: Strategy para algoritmos intercambiables, Observer para eventos y Command para transacciones."
    },
    {
      "id": 15,
      "title": "PATRONES DE COMPORTAMIENTO GOF: STATE, CHAIN OF RESPONSIBILITY E ITERATOR",
      "why": "Máquinas de estado y cadenas de filtros: State para comportamiento según estado interno, Chain of Responsibility para pipelines y el patrón Iterator."
    },
    {
      "id": 16,
      "title": "CATÁLOGO DE CODE SMELLS (HEDORES DE CÓDIGO)",
      "why": "Diagnóstico de podredumbre en el software: God Class, Long Method, Feature Envy, Primitive Obsession y Shotgun Surgery según Martin Fowler."
    },
    {
      "id": 17,
      "title": "TÉCNICAS DE REFACTORIZACIÓN DISCIPLINADA",
      "why": "El catálogo de refactorización de Martin Fowler: Extract Method, Move Field, Replace Conditional with Polymorphism y preservación de tests en verde."
    },
    {
      "id": 18,
      "title": "CLEAN ARCHITECTURE (ROBERT C. MARTIN)",
      "why": "Arquitectura Limpia: la Regla de la Dependencia, Entidades, Casos de Uso (Interactors), Adaptadores de Interfaz y Frameworks & Drivers."
    },
    {
      "id": 19,
      "title": "ARQUITECTURA HEXAGONAL Y DDD TÁCTICO",
      "why": "Puertos y Adaptadores (Alistair Cockburn) y Domain-Driven Design táctico: Entities, Value Objects, Aggregates, Repositories y Domain Events."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: REFACTORIZACIÓN COMPLETA A CLEAN ARCHITECTURE",
      "why": "Reingeniería de un monolito legacy acoplado: extracción de Value Objects, aplicación de SOLID, desacoplamiento de infraestructura y arquitectura hexagonal."
    }
  ],
  "labChallenge": {
    "title": "Refactorización y Reingeniería Integral de un Monolito Legacy a Arquitectura Hexagonal Limpia",
    "badge": "Laboratorio de Clean Code & Arquitectura de Software",
    "description": "Tu objetivo es tomar un servicio legacy monolítico acoplado a base de datos y servicios externos, refactorizarlo aplicando Principios SOLID (SRP, OCP, LSP, ISP, DIP), extraer Value Objects inmutables, implementar el Patrón Strategy para pasarelas de pago y estructurarlo bajo una Arquitectura Hexagonal estricta con separación de capas de Dominio, Aplicación e Infraestructura.",
    "requirements": [
      "• Eliminar condicionales anidadas: Reemplazar estructuras `switch`/`if` por la interfaz Strategy.",
      "• Inyección de Dependencias: Pasar los servicios concretos mediante interfaces en el constructor.",
      "• Regla del Boy Scout: Renombrar variables y extraer funciones cortas de menos de 10 líneas.",
      "• Arquitectura Hexagonal: Aislar entidades de negocio y casos de uso de cualquier dependencia de framework o SQL."
    ],
    "cleanCodeRules": [
      "• Comentarios Cero: El código refactorizado debe explicarse por sí mismo a través de nombres expresivos.",
      "• Funciones Pequeñas: Ninguna función debe superar las 10-12 líneas de extensión.",
      "• Sin Nulos: Utilizar Null Object Pattern o tipos Optionals en lugar de retornar o recibir null."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto Clean Code - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio público con la solución al Laboratorio de Clean Code, SOLID y Arquitectura Hexagonal.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nExplicación de patrones y refactorizaciones aplicadas:\\n- \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS",
      "description": "Las enseñanzas de Robert C. Martin (Tío Bob): código autodocumentado, nombres intencionados y la regla del Boy Scout.",
      "items": [
        "El costo real del código desordenado y la acumulación de deuda técnica.",
        "Nombres con intención reveladora (Evitar variables a1, temp, data, flag).",
        "Hacer distinciones con sentido y evitar desinformación en identificadores.",
        "Nombres pronunciables y buscables en la base de código corporativa.",
        "La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'.",
        "Nombres de clases como sustantivos y nombres de métodos como verbos.",
        "Evitar codificaciones innecesarias (Notación Húngara y prefijos m_ obsoletos)."
      ],
      "content": "## Filosofía Clean Code y Nombres Expresivos\n\nRobert C. Martin (Uncle Bob) destaca que la proporción de tiempo que un ingeniero pasa leyendo código frente a escribirlo nuevo supera el 10 a 1. Cada segundo invertido en pensar un nombre descriptivo ahorra horas de adivinanza a todo el equipo.\n\n### Nombres Reveladores de Intención\nUn buen nombre responde tres preguntas fundamentales:\n1. ¿Por qué existe?\n2. ¿Qué hace?\n3. ¿Cómo se utiliza?\n\nSi una variable necesita un comentario al lado para explicar qué almacena, el nombre es deficiente y debe ser refactorizado.",
      "codeSnippet": "// Bad Code\nconst d = 86400; // segundos por día\nfunction calc(u: any) {\n  return u.s > 1000 && u.a === 1;\n}\n\n// Clean Code\nconst SEGUNDOS_POR_DIA = 86400;\n\ninterface Usuario {\n  saldoTotal: number;\n  estaActivo: boolean;\n}\n\nfunction esUsuarioElegibleCredito(usuario: Usuario): boolean {\n  const SALDO_MINIMO_CREDITO = 1000;\n  return usuario.estaActivo && usuario.saldoTotal > SALDO_MINIMO_CREDITO;\n}",
      "quiz": [
        {
          "question": "¿Cuál es la famosa 'Regla del Boy Scout' formulada por el Tío Bob para el desarrollo de software?",
          "options": [
            "Dejar la base de código siempre más limpia de como la encontraste en cada commit",
            "No trabajar los fines de semana",
            "Usar siempre comentarios en cada línea"
          ],
          "answerIndex": 0,
          "explanation": "La regla impulsa la refactorización continua: pequeñas mejoras constantes evitan la acumulación de deuda técnica."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: FUNCIONES LIMPIAS, SLAP Y PARÁMETROS ATÓMICOS",
      "description": "Diseño de funciones: regla de hacer una sola cosa, un solo nivel de abstracción (SLAP), límites de argumentos y funciones puras.",
      "items": [
        "La primera regla de las funciones: Deben ser pequeñas. La segunda regla: Más pequeñas aún.",
        "Hacer una sola cosa (Do One Thing) y hacerla bien.",
        "Single Level of Abstraction Principle (SLAP): No mezclar lógica de alto nivel con detalles de bajo nivel.",
        "Argumentos de funciones: Cero (niládicas) ideal, uno (monádicas) excelente, dos (diádicas) aceptable, tres o más requiere refactorizar a objeto.",
        "Funciones Puras y erradicación de Efectos Secundarios ocultos.",
        "Evitar argumentos de bandera (Flag Arguments): Un booleano como parámetro es prueba de que la función hace dos cosas."
      ],
      "content": "## La Anatomía de una Función Limpia\n\nUna función debe hacer una sola cosa y el nombre debe describir con precisión esa única responsabilidad.\n\n### El Principio SLAP (Single Level of Abstraction)\nLeer una función debe ser como leer un párrafo de prosa:\n* La función principal describe los pasos de negocio de alto nivel.\n* Los detalles técnicos de bajo nivel (bucles, regex, formateo de strings) se delegan a funciones auxiliares privadas.",
      "codeSnippet": "// Violación SLAP: Mezcla lógica de negocio con regex y SQL\n// function procesar(raw: string) { ... }\n\n// Limpio: Cada función opera en su propio nivel de abstracción\nexport class ProcesadorRegistro {\n  procesar(datosCrudos: string): void {\n    const usuario = this.parsearEntrada(datosCrudos);\n    this.validarUsuario(usuario);\n    this.notificarBienvenida(usuario);\n  }\n\n  private parsearEntrada(raw: string): Usuario {\n    return JSON.parse(raw);\n  }\n\n  private validarUsuario(usuario: Usuario): void {\n    if (!usuario.email.includes('@')) {\n      throw new Error('Email inválido');\n    }\n  }\n\n  private notificarBienvenida(usuario: Usuario): void {\n    // Envío de correo\n  }\n}",
      "quiz": [
        {
          "question": "¿Por qué Robert C. Martin considera que pasar un booleano como argumento (`procesar(true)`) es un code smell?",
          "options": [
            "Porque declara abiertamente que la función hace dos cosas: una si es true y otra si es false, debiendo dividirse en dos funciones",
            "Porque los booleanos ocupan mucho espacio en memoria",
            "Porque TypeScript no soporta booleanos en funciones"
          ],
          "answerIndex": 0,
          "explanation": "Un argumento booleano bifurca la función en dos caminos lógicos distintos; es preferible crear dos funciones descriptivas independientes."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: COMENTARIOS HONESTOS, FORMATO Y ESTRUCTURA DE CÓDIGO",
      "description": "Cuándo comentar y cuándo refactorizar: comentarios como compensación por código deficiente, formato vertical y leyes de proximidad.",
      "items": [
        "Los comentarios no compensan el mal código: 'No comentes código sucio; reescríbelo'.",
        "Comentarios buenos: Advertencias de consecuencias, explicaciones de algoritmos matemáticos complejos, TODOs legítimos.",
        "Comentarios malos: Murmullos, código comentado (cadáveres de código), redundancia obvia.",
        "Formato Vertical: El principio del periódico (lo más importante arriba, detalles abajo).",
        "Afinidad y proximidad vertical: Las funciones que se llaman entre sí deben estar físicamente juntas en el archivo.",
        "Límites de ancho horizontal (80-120 caracteres) para lectura cómoda sin scroll lateral."
      ],
      "content": "## Comentarios: El Síntoma del Fracaso Expresivo\n\nCada vez que escribes un comentario, deberías sentir una pequeña punzada de fracaso: significa que fuiste incapaz de expresar tu intención directamente con el código.\n\nEl código evoluciona, pero los comentarios casi nunca se actualizan; con el tiempo se convierten en mentiras descaradas que confunden a los ingenieros.",
      "codeSnippet": "// Comentario redundante y peligroso (se desactualiza):\n// Comprueba si el empleado tiene derecho a beneficios completos\n// if ((employee.flags & HOURLY_FLAG) && (employee.age > 65))\n\n// Clean Code: La expresión se autoexplica sin comentarios\nif (empleado.tieneDerechoABeneficiosCompletos()) {\n  // Acción clara\n}",
      "quiz": [
        {
          "question": "¿Cuál es la regla fundamental sobre comentarios en Clean Code?",
          "options": [
            "El código limpio debe autodocumentarse mediante nombres claros y funciones atómicas; los comentarios deben reservarse para advertencias o intenciones que el código no puede expresar",
            "Cada línea de código debe tener obligatoriamente un comentario explicativo",
            "Nunca se debe escribir ningún comentario bajo ninguna circunstancia"
          ],
          "answerIndex": 0,
          "explanation": "El código claro habla por sí mismo; comentar obviedades añade ruido y se desactualiza rápidamente."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: MANEJO LIMPIO DE ERRORES: FAIL-FAST, GUARD CLAUSES Y RESULT/EITHER",
      "description": "Erradicación de sentencias if anidadas: el patrón Guard Clauses, principio Fail-Fast y tipos funcionales Result y Either.",
      "items": [
        "El anti-patrón de la Pirámide de la Muerte (Arrow Anti-Pattern) con if/else anidados.",
        "El Patrón Guard Clauses (Cláusulas de Guarda): Retornar temprano ante precondiciones no cumplidas.",
        "El Principio Fail-Fast: Si algo debe fallar, haz que falle inmediatamente sin continuar procesando basura.",
        "Separación entre Lógica de Negocio y Manejo de Excepciones.",
        "Uso del tipo funcional Result<T, E> (Either en Haskell/Rust) frente al lanzamiento indiscriminado de excepciones.",
        "No retornar códigos de error numéricos (-1, 0, 99) estilo C en lenguajes modernos."
      ],
      "content": "## Guard Clauses y el Principio Fail-Fast\n\nLa anidación piramidal de condicionales destruye la legibilidad:\n```ts\n// Anti-patrón Flecha\nif (usuario != null) {\n  if (usuario.activo) {\n    if (usuario.saldo > 0) {\n      procesar();\n    }\n  }\n}\n```\n\nCon **Guard Clauses**, invertimos las condiciones para fallar rápido en la parte superior de la función, dejando el flujo principal plano y legible.",
      "codeSnippet": "// Clean Code con Guard Clauses (Fail-Fast)\nexport function procesarPago(usuario: Usuario | null, monto: number): void {\n  // Guard 1: Validación de existencia\n  if (!usuario) {\n    throw new Error('Usuario inexistente');\n  }\n\n  // Guard 2: Validación de estado\n  if (!usuario.estaActivo) {\n    throw new Error('Usuario inactivo');\n  }\n\n  // Guard 3: Validación de fondos\n  if (usuario.saldoTotal < monto) {\n    throw new Error('Fondos insuficientes');\n  }\n\n  // Flujo feliz: Plano, claro y sin anidación\n  usuario.saldoTotal -= monto;\n}",
      "quiz": [
        {
          "question": "¿Qué beneficio inmediato aporta el patrón Guard Clauses al diseño de una función?",
          "options": [
            "Elimina la anidación profunda de `if/else`, validando y saliendo temprano para mantener el flujo principal en una sola columna plana",
            "Hace que la función se ejecute en hilos paralelos",
            "Evita que el código compile si hay errores"
          ],
          "answerIndex": 0,
          "explanation": "Las Guard Clauses limpian el código retornando inmediatamente ante entradas inválidas, manteniendo el flujo exitoso sin indentaciones complejas."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: CÓDIGO DEFENSIVO Y ERRADICACIÓN DE NULOS",
      "description": "El error del billón de dólares de Tony Hoare: erradicación de NullPointerExceptions, el patrón Null Object y Optional/Maybe.",
      "items": [
        "Sir Tony Hoare y el 'Billion-Dollar Mistake': La invención de la referencia nula en 1965.",
        "No retornar `null`: El anti-patrón de obligar a cada invocador a escribir `if (res != null)`.",
        "Retornar colecciones vacías (`[]`, `Set()`) en lugar de `null`.",
        "El Patrón Null Object: Clases polimórficas que implementan un comportamiento neutro seguro.",
        "Uso de tipos `Optional<T>` / `Maybe` en TypeScript y lenguajes fuertemente tipados.",
        "No pasar `null` como argumento a funciones bajo ninguna circunstancia."
      ],
      "content": "## Erradicando el Nulo en la Arquitectura\n\nCuando un método retorna `null`, le pasa la bomba de tiempo a quien lo llamó. Si el invocador olvida verificar el nulo, la aplicación colapsa con `NullPointerException` o `TypeError: Cannot read properties of undefined`.\n\n### Reglas de Oro contra el Nulo\n1. **Para Colecciones:** Nunca retornes `null`; retorna un array vacío `[]`. Un bucle `for` sobre un array vacío no hace nada y no lanza excepción.\n2. **Para Objetos:** Utiliza el **Null Object Pattern** (ej. `UsuarioAnonimo` que implementa `Usuario`) para evitar chequeos condicionales en toda la aplicación.",
      "codeSnippet": "// Null Object Pattern\ninterface ILogger {\n  log(mensaje: string): void;\n}\n\n// Implementación real\nexport class ConsoleLogger implements ILogger {\n  log(mensaje: string): void { console.log(mensaje); }\n}\n\n// Null Object: No hace nada, pero cumple el contrato y evita 'if (logger != null)'\nexport class NullLogger implements ILogger {\n  log(_mensaje: string): void { /* No-op intencionado */ }\n}\n\nexport class ServicioFacturacion {\n  private logger: ILogger;\n\n  constructor(logger?: ILogger) {\n    this.logger = logger ?? new NullLogger(); // Nunca nulo\n  }\n\n  facturar(): void {\n    this.logger.log('Facturación iniciada'); // 100% seguro sin if\n  }\n}",
      "quiz": [
        {
          "question": "¿Por qué nunca se debe retornar `null` en un método que devuelve una lista o colección?",
          "options": [
            "Porque retornar un arreglo vacío `[]` permite que el código que consume la función itere normalmente sin necesidad de verificar `if (lista != null)`",
            "Porque los arreglos vacíos ocupan gigabytes de memoria",
            "Porque TypeScript no permite retornar arreglos vacíos"
          ],
          "answerIndex": 0,
          "explanation": "Un array vacío es un contenedor perfectamente válido que puede ser recorrido sin romper el código con excepciones de puntero nulo."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)",
      "description": "Una sola razón para cambiar: alta cohesión, separación de intereses (SoC) y delimitación estricta de responsabilidades.",
      "items": [
        "Definición formal de Robert C. Martin: 'Un módulo debe tener una, y solo una, razón para cambiar'.",
        "La razón para cambiar ligada a los Actores del negocio (Usuarios, Finanzas, Operaciones).",
        "El anti-patrón de la Clase Dios (God Class): Clases de 2,000 líneas que mezclan UI, negocio y persistencia.",
        "Alta Cohesión y Bajo Acoplamiento como métricas de diseño.",
        "Descomposición de un módulo que calcula salario, reporta horas y guarda en base de datos en 3 clases especializadas.",
        "Cómo SRP facilita las pruebas unitarias y erradica conflictos de Git en equipos concurrentes."
      ],
      "content": "## Single Responsibility Principle (SRP)\n\nEl principio de responsabilidad única suele malinterpretarse como \"hacer una sola cosa\". Robert C. Martin aclaró su verdadera definición:\n\n> **\"Un módulo o clase debe ser responsable ante un solo actor de negocio (un solo grupo de interesados).\"**\n\nSi la clase `Empleado` contiene el método `calcularSalario()` (requerido por Finanzas), `reportarHoras()` (requerido por Recursos Humanos) y `guardar()` (requerido por DBA/Sistemas), cualquier cambio solicitado por Finanzas corre el riesgo de romper el reporte de RRHH.",
      "codeSnippet": "// Violación de SRP: Una clase con 3 razones para cambiar\n// class Empleado { calcularSalario(); reportarHoras(); guardarDB(); }\n\n// Clean Code: Cada clase tiene un único actor y una sola razón para cambiar\nexport class CalculadoraSalarioEmpleado {\n  calcular(horasTrabajadas: number, tarifaHora: number): number {\n    return horasTrabajadas * tarifaHora;\n  }\n}\n\nexport class ReportadorHorasEmpleado {\n  generarReporte(horas: number): string {\n    return \\`Total horas registradas: \\${horas}\\`;\n  }\n}\n\nexport class EmpleadoRepository {\n  async guardar(empleadoId: string, datos: any): Promise<void> {\n    // Persistencia exclusiva en Base de Datos\n  }\n}",
      "quiz": [
        {
          "question": "¿Quién define en última instancia la 'razón para cambiar' de un módulo según el Principio de Responsabilidad Única (SRP)?",
          "options": [
            "El actor o departamento de negocio (stakeholder) al cual sirve ese módulo",
            "El sistema operativo donde corre la aplicación",
            "El compilador del lenguaje"
          ],
          "answerIndex": 0,
          "explanation": "SRP se fundamenta en que los módulos deben cambiar solo cuando el actor de negocio responsable de esa lógica solicite una modificación."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)",
      "description": "Abierto para extensión, cerrado para modificación: uso de polimorfismo, interfaces y el Patrón Strategy para eliminar switches monolíticos.",
      "items": [
        "Definición de Bertrand Meyer y Robert C. Martin: Abierto a extensión, cerrado a modificación.",
        "El síntoma clásico de violación de OCP: Estructuras `switch (tipo)` o cadenas interminables de `if/else if`.",
        "Extensibilidad mediante abstracción y polimorfismo.",
        "Aplicación práctica con el Patrón Strategy para pasarelas de pago y motores de cálculo.",
        "Agregar una nueva funcionalidad añadiendo una nueva clase sin modificar código preexistente probado.",
        "El principio Open/Closed en la arquitectura de plugins y microservicios."
      ],
      "content": "## Open/Closed Principle (OCP)\n\nEl objetivo de OCP es diseñar sistemas donde añadir una nueva característica consista en **escribir código nuevo**, no en **modificar código que ya funciona y está en producción**.\n\n### El Síntoma del Switch Monolítico\nSi para agregar un nuevo método de pago (como PayPal o Cripto) tienes que abrir el archivo `PasarelaPago.ts` y añadir un `case 'PAYPAL':`, has violado OCP. Cada modificación a un archivo existente corre el riesgo de introducir regresiones en los métodos de pago anteriores.",
      "codeSnippet": "// Clean Code: Aplicando OCP mediante Polimorfismo e Interfaces\nexport interface EstrategiaDescuento {\n  calcular(monto: number): number;\n}\n\nexport class DescuentoNavidad implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.8; } // 20%\n}\n\nexport class DescuentoVip implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.7; } // 30%\n}\n\n// Nueva estrategia añadida SIN tocar las clases anteriores\nexport class DescuentoBlackFriday implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.5; } // 50%\n}\n\nexport class CarritoCompras {\n  constructor(private descuento: EstrategiaDescuento) {}\n\n  obtenerTotal(monto: number): number {\n    return this.descuento.calcular(monto);\n  }\n}",
      "quiz": [
        {
          "question": "¿Cómo se logra que una clase cumpla con el Principio Abierto/Cerrado (OCP)?",
          "options": [
            "Dependiendo de abstracciones o interfaces polimórficas en lugar de implementaciones concretas con condicionales de tipo",
            "Haciendo que todos los métodos sean privados",
            "Cerrando el archivo en solo lectura en el sistema operativo"
          ],
          "answerIndex": 0,
          "explanation": "Al programar contra interfaces, nuevos comportamientos se añaden creando nuevas clases que implementan la interfaz, sin alterar el código existente."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)",
      "description": "Contratos de subtipado por Barbara Liskov: precondiciones, postcondiciones, el dilema Cuadrado-Rectángulo y diseño por contrato.",
      "items": [
        "Definición formal de Barbara Liskov (1987): Subtipos sustituibles por sus tipos base sin alterar la corrección del programa.",
        "El clásico contraejemplo Cuadrado-Rectángulo: Por qué la herencia geométrica falla en programación orientada a objetos.",
        "Reglas de Contrato de LSP: No fortalecer precondiciones en subtipos ni debilitar postcondiciones.",
        "Lanzar excepciones inesperadas en subclases como violación directa de LSP (`throw new NotImplementedException()`).",
        "Favorecer composición sobre herencia (Composition over Inheritance).",
        "Invariantes de clase y garantías semánticas de la jerarquía."
      ],
      "content": "## Liskov Substitution Principle (LSP)\n\nFormulado por la científica de la computación Barbara Liskov, este principio establece:\n\n> **\"Si $S$ es un subtipo de $T$, los objetos de tipo $T$ en un programa deben poder ser reemplazados por objetos de tipo $S$ sin alterar ninguna de las propiedades deseables de ese programa.\"**\n\n### La Violación Cuadrado-Rectángulo\nGeométricamente, un cuadrado es un rectángulo. Pero en código:\nSi una clase `Rectangulo` permite modificar el `ancho` independientemente del `alto`, una subclase `Cuadrado` que modifique ambos valores a la vez romperá las expectativas de cualquier función que reciba un `Rectangulo`.",
      "codeSnippet": "// Violación LSP: Lanzar excepción en método heredado\n// class Ave { volar() { ... } }\n// class Pinguino extends Ave { volar() { throw new Error('No puedo volar'); } }\n\n// Clean Code: Segregación de jerarquías coherentes\nexport interface Ave {\n  comer(): void;\n}\n\nexport interface AveVoladora extends Ave {\n  volar(): void;\n}\n\nexport class Halcon implements AveVoladora {\n  comer(): void { /* come */ }\n  volar(): void { /* vuela alto */ }\n}\n\nexport class Pinguino implements Ave {\n  comer(): void { /* come pescado */ }\n  // No implementa volar, respetando el contrato\n}",
      "quiz": [
        {
          "question": "Si una subclase sobrescribe un método de su clase base lanzando `throw new Error('Método no soportado')`, ¿qué principio SOLID viola?",
          "options": [
            "Liskov Substitution Principle (LSP)",
            "Single Responsibility Principle (SRP)",
            "Open/Closed Principle (OCP)"
          ],
          "answerIndex": 0,
          "explanation": "Lanzar una excepción donde la clase base prometía un comportamiento válido viola el contrato de sustitución, rompiendo el código del cliente."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: PRINCIPIO I - INTERFACE SEGREGATION PRINCIPLE (ISP)",
      "description": "Interfaces pequeñas y específicas de rol: evitar interfaces 'gordas' que obliguen a implementar métodos innecesarios.",
      "items": [
        "Definición de Robert C. Martin: 'Los clientes no deben ser forzados a depender de interfaces que no utilizan'.",
        "El anti-patrón de las Interfaces Gordas (Fat Interfaces) con docenas de métodos no relacionados.",
        "Interfaces de Rol (Role Interfaces) enfocadas en clientes específicos.",
        "Separación de interfaces de lectura frente a interfaces de escritura.",
        "Composición de interfaces múltiples (`implements Imprimible, Escaneable`).",
        "Refactorización de una interfaz monolítica de dispositivo multifuncional."
      ],
      "content": "## Interface Segregation Principle (ISP)\n\nISP exige que las interfaces sean cohesivas y específicas para cada tipo de cliente.\n\nCuando una interfaz obliga a una clase a implementar métodos vacíos o lanzar errores diciendo \"no implementado\", la interfaz está contaminada y debe segregarse en interfaces más granulares.",
      "codeSnippet": "// Violación ISP: Interfaz monolítica obligatoria\n// interface IMaquinaOficina { imprimir(); escanear(); fax(); }\n\n// Clean Code: Interfaces de rol segregadas\nexport interface Imprimible {\n  imprimir(doc: string): void;\n}\n\nexport interface Escaneable {\n  escanear(): string;\n}\n\n// Impresora básica: Solo implementa lo que realmente hace\nexport class ImpresoraEconomica implements Imprimible {\n  imprimir(doc: string): void {\n    console.log(\\`Imprimiendo: \\${doc}\\`);\n  }\n}\n\n// Multifuncional: Combina múltiples interfaces según su capacidad\nexport class SuperMultifuncional implements Imprimible, Escaneable {\n  imprimir(doc: string): void { /* Imprime */ }\n  escanear(): string { return 'contenido escaneado'; }\n}",
      "quiz": [
        {
          "question": "¿Cuál es el síntoma inequívoco de que una interfaz está violando el Principio de Segregación de Interfaces (ISP)?",
          "options": [
            "Las clases que la implementan dejan métodos con cuerpo vacío o lanzan 'No implementado' porque no tienen sentido para ellas",
            "El compilador tarda más de 2 segundos",
            "El archivo se llama Interface.ts"
          ],
          "answerIndex": 0,
          "explanation": "Si una clase debe implementar métodos 'fantasma' que no utiliza, la interfaz es demasiado grande y debe dividirse en interfaces más pequeñas."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: PRINCIPIO D - DEPENDENCY INVERSION PRINCIPLE (DIP)",
      "description": "Inversión de dependencias e Inyección de Control (IoC): los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos dependen de abstracciones.",
      "items": [
        "Definición de Robert C. Martin: Los módulos de alto nivel (reglas de negocio) no deben depender de detalles de bajo nivel (bases de datos, frameworks).",
        "Ambos deben depender de abstracciones (interfaces o clases abstractas).",
        "Inyección de Dependencias (DI) por constructor, método o propiedad.",
        "Contenedores de Inversión de Control (IoC Containers) en arquitecturas modernas (NestJS, Inversify, Spring).",
        "Diferencia entre Inversión de Dependencias (Principio), IoC (Patrón de control) e Inyección de Dependencias (Mecanismo).",
        "Diseño de arquitecturas desacopladas del proveedor de nube y del motor de base de datos."
      ],
      "content": "## Dependency Inversion Principle (DIP)\n\nDIP invierte la dirección tradicional de las dependencias de software. En el diseño procedimental tradicional, la lógica de negocio depende directamente de los controladores de base de datos.\n\nEn Clean Architecture:\n* El Dominio de Negocio define las **interfaces** de lo que necesita (ej. `IUsuarioRepository`).\n* La Infraestructura externa (PostgreSQL, MongoDB) implementa esa interfaz en los bordes del sistema.\n* El núcleo del negocio permanece 100% puro y no sabe qué base de datos existe.",
      "codeSnippet": "// Abstracción en la capa de dominio\nexport interface NotificadorSMS {\n  enviarSMS(telefono: string, mensaje: string): Promise<boolean>;\n}\n\n// Módulo de Alto Nivel: Depende solo de la interfaz\nexport class ServicioAutenticacion2FA {\n  constructor(private notificador: NotificadorSMS) {}\n\n  async enviarCodigo(telefono: string, codigo: string): Promise<void> {\n    await this.notificador.enviarSMS(telefono, \\`Tu código es \\${codigo}\\`);\n  }\n}\n\n// Módulo de Bajo Nivel: Implementación concreta de Twilio\nexport class TwilioSmsService implements NotificadorSMS {\n  async enviarSMS(telefono: string, mensaje: string): Promise<boolean> {\n    // Llamada a API Twilio\n    return true;\n  }\n}",
      "quiz": [
        {
          "question": "¿Cómo protege el Principio de Inversión de Dependencias (DIP) a las reglas de negocio de una aplicación?",
          "options": [
            "Asegura que el núcleo de negocio no dependa de librerías externas ni bases de datos concretas, permitiendo cambiarlas sin alterar las reglas de negocio",
            "Evita que se usen bases de datos relacionales",
            "Obliga a que todos los métodos sean asíncronos"
          ],
          "answerIndex": 0,
          "explanation": "Al depender de interfaces abstractas, los detalles de infraestructura (Postgres, AWS, Stripe) se convierten en plugins intercambiables."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: PATRONES CREACIONALES GOF: FACTORY, BUILDER Y SINGLETON SEGURO",
      "description": "Patrones Creacionales del Gang of Four: Factory Method, Abstract Factory, Builder fluido y Singleton thread-safe con inmutabilidad.",
      "items": [
        "El rol de los patrones creacionales: Desacoplar la creación de objetos de su uso en el sistema.",
        "Factory Method: Delegación de la instanciación en subclases o funciones factoría.",
        "Abstract Factory: Creación de familias de objetos relacionados sin especificar clases concretas.",
        "Builder Pattern: Construcción paso a paso de objetos complejos con APIs fluidas (`.setNombre().setPrecio().build()`).",
        "Singleton Pattern: Control de instancia única, riesgos globales y cómo implementarlo de forma segura.",
        "Dependency Injection vs Singletons globales mutables."
      ],
      "content": "## Patrones Creacionales del Gang of Four (GoF)\n\nCrear objetos usando `new ClaseConcreta()` en medio de la lógica de negocio genera acoplamiento rígido. Los patrones creacionales encapsulan el conocimiento sobre qué clases concretas se instancian.",
      "codeSnippet": "// Patrón Builder Fluido\nexport class ServidorConfig {\n  public puerto: number = 3000;\n  public host: string = 'localhost';\n  public ssl: boolean = false;\n}\n\nexport class ServidorConfigBuilder {\n  private config = new ServidorConfig();\n\n  conPuerto(puerto: number): this {\n    this.config.puerto = puerto;\n    return this;\n  }\n\n  conHost(host: string): this {\n    this.config.host = host;\n    return this;\n  }\n\n  conSSL(ssl: boolean): this {\n    this.config.ssl = ssl;\n    return this;\n  }\n\n  build(): ServidorConfig {\n    return this.config;\n  }\n}\n\n// Uso ergonómico y legible\nconst config = new ServidorConfigBuilder()\n  .conPuerto(8080)\n  .conSSL(true)\n  .build();",
      "quiz": [
        {
          "question": "¿Cuándo es altamente recomendable utilizar el patrón Builder?",
          "options": [
            "Cuando un objeto tiene múltiples parámetros de configuración opcionales o constructores telescópicos con más de 4 argumentos",
            "Cuando una clase solo tiene un método",
            "Para conectar con la base de datos"
          ],
          "answerIndex": 0,
          "explanation": "Builder elimina los constructores confusos con muchos argumentos posicionales, ofreciendo una API fluida y legible."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: PATRONES ESTRUCTURALES GOF: ADAPTER, DECORATOR Y FACADE",
      "description": "Composición de clases e interfaces: el Adapter como traductor de contratos, Decorator para extensibilidad dinámica y Facade como interfaz unificada.",
      "items": [
        "Adapter Pattern: Adaptar la interfaz de una clase existente o librería externa a la interfaz esperada por el cliente.",
        "Decorator Pattern: Añadir responsabilidades a objetos de forma dinámica sin modificar su código ni recurrir a herencia.",
        "Facade Pattern: Ofrecer una interfaz simple y unificada sobre un subsistema complejo de múltiples clases.",
        "Diferencias arquitectónicas entre Adapter (compatibilidad), Decorator (extensión) y Facade (simplificación)."
      ],
      "content": "## Patrones Estructurales Esenciales\n\n* **Adapter:** Convierte la interfaz de una librería de terceros incompatible para que encaje en el contrato de tu aplicación.\n* **Decorator:** Envuelve un objeto para agregar caching, logging o métricas de tiempo sin tocar el objeto original.\n* **Facade:** Oculta un subsistema enrevesado detrás de una clase con 2 métodos limpios.",
      "codeSnippet": "// Adapter Pattern\ninterface RepositorioPagosPropio {\n  cobrar(montoCentavos: number): Promise<boolean>;\n}\n\n// SDK externo incompatible\nclass StripeSdkExterno {\n  makeCharge(cents: number, currency: string) { return { status: 'succeeded' }; }\n}\n\n// Adapter que traduce la interfaz externa a la propia\nexport class StripeAdapter implements RepositorioPagosPropio {\n  constructor(private stripe: StripeSdkExterno) {}\n\n  async cobrar(montoCentavos: number): Promise<boolean> {\n    const res = this.stripe.makeCharge(montoCentavos, 'USD');\n    return res.status === 'succeeded';\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es la función principal del patrón Adapter?",
          "options": [
            "Permitir que dos clases con interfaces incompatibles trabajen juntas traduciendo las llamadas de una a la otra",
            "Duplicar la velocidad de renderizado de la UI",
            "Proteger contra ataques SQL Injection"
          ],
          "answerIndex": 0,
          "explanation": "Adapter actúa como un convertidor entre una interfaz requerida por tu sistema y una interfaz provista por una librería externa incompatible."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: PATRONES ESTRUCTURALES GOF: COMPOSITE Y PROXY",
      "description": "Estructuras jerárquicas y control de acceso: Composite para árboles de objetos homogéneos y Proxy para control, lazy loading y auditoría.",
      "items": [
        "Composite Pattern: Tratar objetos individuales y composiciones de objetos de manera uniforme (jerarquías en árbol).",
        "Proxy Pattern: Proporcionar un sustituto o intermediario para controlar el acceso a un objeto costoso o remoto.",
        "Tipos de Proxies: Virtual Proxy (Lazy Loading), Protection Proxy (Control de Acceso) y Logging/Auditing Proxy.",
        "Proxy nativo en JavaScript (`new Proxy(target, handler)`)."
      ],
      "content": "## Composite y Proxy en la Práctica\n\n* **Composite:** Permite que un directorio de archivos contenga archivos y otros directorios, implementando la misma interfaz `calcularTamano()` de forma recursiva y transparente.\n* **Proxy:** Intercepta operaciones sobre un objeto para verificar permisos de usuario antes de permitir la ejecución o cargar datos pesados bajo demanda (Lazy Loading).",
      "codeSnippet": "// Proxy Pattern para Control de Acceso\ninterface BaseDatosSensible {\n  consultarRegistros(): string[];\n}\n\nexport class BaseDatosReal implements BaseDatosSensible {\n  consultarRegistros(): string[] {\n    return ['Dato Confidencial 1', 'Dato Confidencial 2'];\n  }\n}\n\nexport class BaseDatosProxySegura implements BaseDatosSensible {\n  constructor(\n    private bdReal: BaseDatosReal,\n    private rolUsuario: string\n  ) {}\n\n  consultarRegistros(): string[] {\n    if (this.rolUsuario !== 'ADMIN') {\n      throw new Error('Acceso denegado: Se requieren privilegios de Administrador');\n    }\n    return this.bdReal.consultarRegistros();\n  }\n}",
      "quiz": [
        {
          "question": "¿Qué problema resuelve el patrón Composite?",
          "options": [
            "Permite tratar objetos individuales y grupos jerárquicos de objetos de forma uniforme a través de una interfaz común",
            "Cifra los datos en disco",
            "Convierte código sincrónico en asincrónico"
          ],
          "answerIndex": 0,
          "explanation": "Composite permite construir estructuras en árbol donde elementos simples y ramas compuestas responden a las mismas operaciones."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: PATRONES DE COMPORTAMIENTO GOF: STRATEGY, OBSERVER Y COMMAND",
      "description": "Comportamiento dinámico y desacoplamiento de eventos: Strategy para algoritmos intercambiables, Observer para eventos y Command para transacciones.",
      "items": [
        "Strategy Pattern: Familia de algoritmos intercambiables en tiempo de ejecución.",
        "Observer Pattern: Notificación automática uno-a-muchos ante cambios de estado (Pub/Sub en memoria).",
        "Command Pattern: Encapsular una solicitud como un objeto, permitiendo parametrizar clientes, encolar operaciones y soporte para Deshacer (Undo/Redo).",
        "Manejo de memoria en Observers: Cómo evitar memory leaks desuscribiendo escuchadores."
      ],
      "content": "## Patrones de Comportamiento GoF: Strategy, Observer y Command\n\nEstos patrones gestionan la asignación de responsabilidades y la comunicación fluida entre objetos sin generar dependencias rígidas.",
      "codeSnippet": "// Command Pattern con soporte para Undo\nexport interface Comando {\n  ejecutar(): void;\n  deshacer(): void;\n}\n\nexport class EditorTexto {\n  public contenido = '';\n}\n\nexport class EscribirTextoComando implements Comando {\n  constructor(\n    private editor: EditorTexto,\n    private textoNuevo: string\n  ) {}\n\n  ejecutar(): void {\n    this.editor.contenido += this.textoNuevo;\n  }\n\n  deshacer(): void {\n    this.editor.contenido = this.editor.contenido.slice(0, -this.textoNuevo.length);\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja del patrón Command en sistemas transaccionales?",
          "options": [
            "Permite encapsular operaciones como objetos, facilitando el encolamiento, registro de auditoría y operaciones de Deshacer (Undo)",
            "Aumenta la resolución gráfica de la pantalla",
            "Borra los logs viejos automáticamente"
          ],
          "answerIndex": 0,
          "explanation": "Command transforma una acción en un objeto independiente que puede ser almacenado, reejecutado o revertido limpiamente."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: PATRONES DE COMPORTAMIENTO GOF: STATE, CHAIN OF RESPONSIBILITY E ITERATOR",
      "description": "Máquinas de estado y cadenas de filtros: State para comportamiento según estado interno, Chain of Responsibility para pipelines y el patrón Iterator.",
      "items": [
        "State Pattern: Permitir que un objeto altere su comportamiento cuando su estado interno cambia (eliminando switches de estado).",
        "Chain of Responsibility Pattern: Pasar solicitudes a lo largo de una cadena de manejadores (Middleware en Express/NestJS).",
        "Iterator Pattern: Acceder a los elementos de una colección sin exponer su representación subyacente.",
        "Comparación arquitectónica entre State y Strategy."
      ],
      "content": "## State y Chain of Responsibility\n\n* **State:** Convierte cada estado de una máquina finita (ej. Pedido: Borrador, Pagado, Enviado) en una clase que implementa los métodos válidos para ese estado, impidiendo transiciones ilegales.\n* **Chain of Responsibility:** Base de los middlewares de Express y filtros de seguridad en Spring: cada eslabón decide si procesa la petición o la pasa al siguiente.",
      "codeSnippet": "// Chain of Responsibility (Middleware simple)\nexport abstract class ManejadorAuth {\n  private siguiente?: ManejadorAuth;\n\n  enlazar(siguiente: ManejadorAuth): ManejadorAuth {\n    this.siguiente = siguiente;\n    return siguiente;\n  }\n\n  manejar(req: { token?: string; rol?: string }): boolean {\n    if (this.siguiente) {\n      return this.siguiente.manejar(req);\n    }\n    return true;\n  }\n}\n\nexport class ValidadorToken extends ManejadorAuth {\n  override manejar(req: { token?: string }): boolean {\n    if (!req.token) return false;\n    return super.manejar(req);\n  }\n}",
      "quiz": [
        {
          "question": "¿En qué se diferencia el patrón State de Strategy?",
          "options": [
            "En State los estados conocen los otros estados y gobiernan las transiciones; en Strategy las estrategias son completamente independientes entre sí",
            "State solo funciona en Java",
            "No hay diferencia, son idénticos"
          ],
          "answerIndex": 0,
          "explanation": "En State el objeto cambia de comportamiento dinámicamente según su estado interno; en Strategy el cliente elige un algoritmo puntual de forma estática."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: CATÁLOGO DE CODE SMELLS (HEDORES DE CÓDIGO)",
      "description": "Diagnóstico de podredumbre en el software: God Class, Long Method, Feature Envy, Primitive Obsession y Shotgun Surgery según Martin Fowler.",
      "items": [
        "Definición de Code Smell por Martin Fowler y Kent Beck: Síntomas superficiales que revelan problemas profundos de diseño.",
        "Long Method (Método Largo) y Large Class (Clase Gigante).",
        "Primitive Obsession (Obsesión Primitiva): Usar cadenas y números para representar conceptos de dominio complejos (email, dinero, coordenadas).",
        "Feature Envy (Envidia de Atributos): Métodos que usan más datos de otra clase que de la suya propia.",
        "Shotgun Surgery (Cirugía de Escopeta): Un pequeño cambio obliga a modificar 10 archivos diferentes simultáneamente.",
        "Divergent Change (Cambio Divergente): Una sola clase sufre modificaciones frecuentes por múltiples razones distintas."
      ],
      "content": "## Catálogo de Code Smells de Martin Fowler\n\nUn **Code Smell** no es un bug (el código compila y funciona), sino una debilidad arquitectónica que ralentiza el desarrollo y eleva el riesgo de fallas en el futuro.\n\n### Primitive Obsession\nOcurre cuando se usa un `string` para representar un correo electrónico. En cada función se duplica la validación `if (!email.includes('@'))`. La solución es crear un **Value Object** `Email` inmutable que valide sus invariantes en el constructor.",
      "codeSnippet": "// Code Smell: Primitive Obsession\n// function cobrar(monto: number, moneda: string) { ... }\n\n// Refactorizado a Value Object (Clean Code)\nexport class Dinero {\n  constructor(\n    public readonly cantidad: number,\n    public readonly moneda: string\n  ) {\n    if (cantidad < 0) throw new Error('El dinero no puede ser negativo');\n    if (!['USD', 'EUR', 'GTQ'].includes(moneda)) throw new Error('Moneda no soportada');\n  }\n\n  sumar(otro: Dinero): Dinero {\n    if (this.moneda !== otro.moneda) throw new Error('No se pueden sumar monedas distintas');\n    return new Dinero(this.cantidad + otro.cantidad, this.moneda);\n  }\n}",
      "quiz": [
        {
          "question": "¿Qué describe el code smell 'Shotgun Surgery' (Cirugía de Escopeta)?",
          "options": [
            "Cuando hacer un cambio conceptual simple en el negocio te obliga a tocar y modificar múltiples clases y archivos dispersos por todo el proyecto",
            "Cuando el código compila con warnings",
            "Cuando el servidor se reinicia inesperadamente"
          ],
          "answerIndex": 0,
          "explanation": "Shotgun Surgery es síntoma de responsabilidades mal distribuidas y falta de cohesión: un solo cambio salpica a decenas de clases."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: TÉCNICAS DE REFACTORIZACIÓN DISCIPLINADA",
      "description": "El catálogo de refactorización de Martin Fowler: Extract Method, Move Field, Replace Conditional with Polymorphism y preservación de tests en verde.",
      "items": [
        "Definición formal de Refactorización: Modificar la estructura interna del software sin alterar su comportamiento observable.",
        "La metáfora de los dos sombreros de Kent Beck: O estás añadiendo funcionalidad o estás refactorizando; nunca ambos a la vez.",
        "Técnicas principales: Extract Function/Method, Inline Function, Extract Variable, Rename Variable.",
        "Replace Conditional with Polymorphism (Reemplazar condicional por polimorfismo).",
        "Introduce Parameter Object para erradicar métodos con listas largas de argumentos.",
        "Herramientas de refactorización automatizada en IDEs modernos (VS Code, JetBrains)."
      ],
      "content": "## Refactorización Disciplinada\n\nRefactorizar no significa reescribir desde cero. Consiste en una serie de pequeñas transformaciones atómicas, cada una verificada inmediatamente ejecutando la suite de pruebas unitarias.\n\nSi tus pruebas fallan tras una refactorización, cometiste un error: cambiaste el comportamiento en lugar de solo la estructura interna.",
      "codeSnippet": "// Antes del Refactor: Método largo con lógica duplicada\n// function generarReporte(usuarios: any[]) { ... }\n\n// Después del Refactor: Funciones atómicas extraídas\nexport class ReporteService {\n  generar(usuarios: Usuario[]): string {\n    const usuariosActivos = this.filtrarActivos(usuarios);\n    const lineas = this.formatearLineas(usuariosActivos);\n    return this.ensamblarReporte(lineas);\n  }\n\n  private filtrarActivos(usuarios: Usuario[]): Usuario[] {\n    return usuarios.filter(u => u.estaActivo);\n  }\n\n  private formatearLineas(usuarios: Usuario[]): string[] {\n    return usuarios.map(u => \\`\\${u.nombre}: \\${u.saldoTotal}\\`);\n  }\n\n  private ensamblarReporte(lineas: string[]): string {\n    return lineas.join('\\n');\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es la regla esencial de la refactorización según Martin Fowler?",
          "options": [
            "El comportamiento observable externo del sistema debe permanecer exactamente idéntico antes y después de la refactorización",
            "Se deben añadir nuevas APIs mientras se refactoriza",
            "Las pruebas deben desactivarse para que no estorben"
          ],
          "answerIndex": 0,
          "explanation": "Refactorizar mejora el diseño interno del código sin cambiar lo que el usuario o los tests perciben desde el exterior."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: CLEAN ARCHITECTURE (ROBERT C. MARTIN)",
      "description": "Arquitectura Limpia: la Regla de la Dependencia, Entidades, Casos de Uso (Interactors), Adaptadores de Interfaz y Frameworks & Drivers.",
      "items": [
        "Los círculos concéntricos de Clean Architecture (Tío Bob).",
        "Círculo Central: Entidades de Negocio (Enterprise Business Rules) puras e inmutables.",
        "Segundo Círculo: Casos de Uso (Application Business Rules) que orquestan el flujo de datos.",
        "Tercer Círculo: Interface Adapters (Controladores, Presentadores, Gateways de Repositorio).",
        "Círculo Exterior: Frameworks & Drivers (Bases de Datos, Web, UI, Dispositivos).",
        "La Regla de la Dependencia: Las dependencias del código fuente SOLO pueden apuntar hacia adentro (hacia el negocio).",
        "Independencia de la Base de Datos, de la Interfaz de Usuario y de los Frameworks."
      ],
      "content": "## Clean Architecture y la Regla de la Dependencia\n\nLa regla fundamental de Clean Architecture establece:\n\n> **\"Nada en un círculo interno puede saber absolutamente nada sobre algo en un círculo externo.\"**\n\nTu caso de uso `RegistrarUsuario` no puede importar `express`, no puede importar `@prisma/client` ni puede conocer SQL. Si tu framework web favorito desaparece o decides migrar de Express a Fastify, tus casos de uso y entidades de negocio permanecen 100% intactos.",
      "codeSnippet": "// 1. Entidad Central (No depende de nada)\nexport class Pedido {\n  constructor(public id: string, public total: number) {}\n}\n\n// 2. Puerto de Repositorio (Interfaz definida por el caso de uso)\nexport interface IPedidoRepository {\n  guardar(pedido: Pedido): Promise<void>;\n}\n\n// 3. Caso de Uso (Lógica pura de aplicación)\nexport class CrearPedidoUseCase {\n  constructor(private repo: IPedidoRepository) {}\n\n  async ejecutar(id: string, total: number): Promise<void> {\n    if (total <= 0) throw new Error('Total inválido');\n    const pedido = new Pedido(id, total);\n    await this.repo.guardar(pedido);\n  }\n}",
      "quiz": [
        {
          "question": "¿En qué dirección deben apuntar las dependencias en Clean Architecture?",
          "options": [
            "Exclusivamente hacia adentro: de los frameworks externos hacia los casos de uso y entidades de negocio",
            "Hacia afuera, desde el negocio hacia la base de datos",
            "En ambas direcciones bidireccionalmente"
          ],
          "answerIndex": 0,
          "explanation": "La regla de dependencia exige que el núcleo de negocio sea independiente y jamás importe librerías externas o detalles de infraestructura."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: ARQUITECTURA HEXAGONAL Y DDD TÁCTICO",
      "description": "Puertos y Adaptadores (Alistair Cockburn) y Domain-Driven Design táctico: Entities, Value Objects, Aggregates, Repositories y Domain Events.",
      "items": [
        "Arquitectura Hexagonal (Ports & Adapters) por Alistair Cockburn.",
        "Puertos Primarios (Driving Ports): Interfaces por donde los usuarios o tests entran a la aplicación.",
        "Puertos Secundarios (Driven Ports): Interfaces por donde la aplicación sale a bases de datos o servicios.",
        "Adaptadores: Implementaciones concretas de los puertos (REST Controller, PostgresAdapter).",
        "Conceptos de Domain-Driven Design (DDD) Táctico: Entities vs Value Objects.",
        "Aggregates y Límites de Transaccionalidad (Aggregate Roots).",
        "Eventos de Dominio (Domain Events) para desacoplar efectos secundarios colaterales."
      ],
      "content": "## Arquitectura Hexagonal y DDD Táctico\n\nLa Arquitectura Hexagonal visualiza la aplicación como un núcleo central rodeado de un hexágono con **Puertos**.\n* **Puerto:** Contrato abstracto (interfaz TypeScript).\n* **Adaptador:** Conector tecnológico específico (ej. un controlador HTTP o un repositorio Postgres).\n\n### DDD Táctico\n* **Entity:** Objeto con identidad única persistente en el tiempo (ej. `Usuario` con ID).\n* **Value Object:** Objeto inmutable definido exclusivamente por sus atributos (ej. `Dinero`, `DireccionEmail`). Dos Value Objects con los mismos valores son idénticos.",
      "codeSnippet": "// DDD Táctico: Aggregate Root y Value Object\nexport class EmailVO {\n  constructor(public readonly valor: string) {\n    if (!valor.includes('@')) throw new Error('Email inválido');\n  }\n}\n\nexport class CuentaBancariaAggregate {\n  private saldo: number = 0;\n\n  constructor(\n    public readonly id: string,\n    public readonly titularEmail: EmailVO\n  ) {}\n\n  depositar(monto: number): void {\n    if (monto <= 0) throw new Error('Monto debe ser positivo');\n    this.saldo += monto;\n    // Podría emitir evento de dominio: new DineroDepositadoEvent(this.id, monto)\n  }\n\n  obtenerSaldo(): number {\n    return this.saldo;\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia fundamental entre una Entidad (Entity) y un Objeto de Valor (Value Object) en DDD?",
          "options": [
            "Una Entidad tiene una identidad única persistente a lo largo del tiempo, mientras que un Value Object se define únicamente por el valor inmutable de sus atributos",
            "Las entidades solo existen en SQL",
            "Los Value Objects no pueden tener métodos"
          ],
          "answerIndex": 0,
          "explanation": "Dos billetes de $20 tienen el mismo valor (Value Object); dos personas con el mismo nombre son individuos distintos con distinta identidad (Entity)."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: REFACTORIZACIÓN COMPLETA A CLEAN ARCHITECTURE",
      "description": "Reingeniería de un monolito legacy acoplado: extracción de Value Objects, aplicación de SOLID, desacoplamiento de infraestructura y arquitectura hexagonal.",
      "items": [
        "Diagnóstico de la base de código legacy: Identificación sistemática de Code Smells y violaciones de SOLID.",
        "Estrategia de Estrangulamiento (Strangler Fig Pattern): Migración progresiva sin detener el negocio.",
        "Modelado de Entidades y Value Objects puros libres de dependencias externas.",
        "Diseño de Puertos (Interfaces) para repositorios, pasarelas de pago y notificaciones.",
        "Implementación de Casos de Uso con inyección de dependencias estricta.",
        "Construcción de Adaptadores de Infraestructura para base de datos y controladores HTTP.",
        "Verificación de la independencia de la arquitectura y auditoría final de calidad de código."
      ],
      "content": "## Proyecto Integrador: Reingeniería de un Sistema Legacy\n\nEn este proyecto culminante, tomas un servicio monolítico espagueti donde los controladores HTTP hacen consultas SQL directas con strings concatenados y lógica de pago mezclada, y lo transformas en una **Arquitectura Hexagonal Limpia de Grado Corporativo**:\n\n1. **Capa Dominio:** `Pedido`, `LineaPedido`, `DineroVO`, `EstadoPedido`.\n2. **Capa Aplicación:** `CrearPedidoUseCase`, `CancelarPedidoUseCase`.\n3. **Capa Puertos:** `IPedidoRepository`, `IPasarelaPagoGateway`.\n4. **Capa Adaptadores:** `PostgresPedidoRepository`, `StripeAdapter`, `ExpressPedidoController`.",
      "codeSnippet": "// Arquitectura Final Integrada: Caso de Uso Orquestador\nexport class ProcesarCompraUseCase {\n  constructor(\n    private readonly pedidoRepo: IPedidoRepository,\n    private readonly pasarelaPago: IPasarelaPago,\n    private readonly notificador: INotificadorCliente\n  ) {}\n\n  async ejecutar(pedidoId: string): Promise<void> {\n    const pedido = await this.pedidoRepo.obtenerPorId(pedidoId);\n    if (!pedido) throw new Error('Pedido inexistente');\n\n    // La entidad de dominio valida sus propias reglas de negocio\n    pedido.validarParaCobro();\n\n    // Orquestación con los puertos de infraestructura\n    await this.pasarelaPago.cobrar(pedido.total);\n    pedido.marcarComoPagado();\n\n    await this.pedidoRepo.guardar(pedido);\n    await this.notificador.enviarConfirmacion(pedido);\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es el beneficio de aplicar el Patrón Estrangulador (Strangler Fig) al migrar código legacy a Clean Architecture?",
          "options": [
            "Permite reemplazar componentes viejos gradualmente pieza por pieza en producción sin requerir una reescritura total riesgosa de meses",
            "Hace que el código legacy corra más rápido en el disco duro",
            "Borra el código viejo automáticamente con IA"
          ],
          "answerIndex": 0,
          "explanation": "El patrón estrangulador minimiza el riesgo migrando módulos de forma incremental mientras el sistema sigue operando en producción."
        }
      ]
    }
  ]
};

export const CLEAN_CODE_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS.",
      "placeholder": "// Bad Code\nconst d = 86400; // segundos por día\nfunction calc(u: any) {\n  return u.s > 1000 && u.a === 1;\n}\n\n// Clean Code\nconst SEGUNDOS_POR_DIA = 86400;\n\ninterface Usuario {\n  saldoTotal: number;\n  estaActivo: boolean;\n}\n\nfunction esUsuarioElegibleCredito(usuario: Usuario): boolean {\n  const SALDO_MINIMO_CREDITO = 1000;\n  return usuario.estaActivo && usuario.saldoTotal > SALDO_MINIMO_CREDITO;\n}",
      "expectedKeywords": [
        "filosofía"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 2: FUNCIONES LIMPIAS, SLAP Y PARÁMETROS ATÓMICOS.",
      "placeholder": "// Violación SLAP: Mezcla lógica de negocio con regex y SQL\n// function procesar(raw: string) { ... }\n\n// Limpio: Cada función opera en su propio nivel de abstracción\nexport class ProcesadorRegistro {\n  procesar(datosCrudos: string): void {\n    const usuario = this.parsearEntrada(datosCrudos);\n    this.validarUsuario(usuario);\n    this.notificarBienvenida(usuario);\n  }\n\n  private parsearEntrada(raw: string): Usuario {\n    return JSON.parse(raw);\n  }\n\n  private validarUsuario(usuario: Usuario): void {\n    if (!usuario.email.includes('@')) {\n      throw new Error('Email inválido');\n    }\n  }\n\n  private notificarBienvenida(usuario: Usuario): void {\n    // Envío de correo\n  }\n}",
      "expectedKeywords": [
        "funciones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 3: COMENTARIOS HONESTOS, FORMATO Y ESTRUCTURA DE CÓDIGO.",
      "placeholder": "// Comentario redundante y peligroso (se desactualiza):\n// Comprueba si el empleado tiene derecho a beneficios completos\n// if ((employee.flags & HOURLY_FLAG) && (employee.age > 65))\n\n// Clean Code: La expresión se autoexplica sin comentarios\nif (empleado.tieneDerechoABeneficiosCompletos()) {\n  // Acción clara\n}",
      "expectedKeywords": [
        "comentarios"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 4: MANEJO LIMPIO DE ERRORES: FAIL-FAST, GUARD CLAUSES Y RESULT/EITHER.",
      "placeholder": "// Clean Code con Guard Clauses (Fail-Fast)\nexport function procesarPago(usuario: Usuario | null, monto: number): void {\n  // Guard 1: Validación de existencia\n  if (!usuario) {\n    throw new Error('Usuario inexistente');\n  }\n\n  // Guard 2: Validación de estado\n  if (!usuario.estaActivo) {\n    throw new Error('Usuario inactivo');\n  }\n\n  // Guard 3: Validación de fondos\n  if (usuario.saldoTotal < monto) {\n    throw new Error('Fondos insuficientes');\n  }\n\n  // Flujo feliz: Plano, claro y sin anidación\n  usuario.saldoTotal -= monto;\n}",
      "expectedKeywords": [
        "manejo"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 5: CÓDIGO DEFENSIVO Y ERRADICACIÓN DE NULOS.",
      "placeholder": "// Null Object Pattern\ninterface ILogger {\n  log(mensaje: string): void;\n}\n\n// Implementación real\nexport class ConsoleLogger implements ILogger {\n  log(mensaje: string): void { console.log(mensaje); }\n}\n\n// Null Object: No hace nada, pero cumple el contrato y evita 'if (logger != null)'\nexport class NullLogger implements ILogger {\n  log(_mensaje: string): void { /* No-op intencionado */ }\n}\n\nexport class ServicioFacturacion {\n  private logger: ILogger;\n\n  constructor(logger?: ILogger) {\n    this.logger = logger ?? new NullLogger(); // Nunca nulo\n  }\n\n  facturar(): void {\n    this.logger.log('Facturación iniciada'); // 100% seguro sin if\n  }\n}",
      "expectedKeywords": [
        "código"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 6: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP).",
      "placeholder": "// Violación de SRP: Una clase con 3 razones para cambiar\n// class Empleado { calcularSalario(); reportarHoras(); guardarDB(); }\n\n// Clean Code: Cada clase tiene un único actor y una sola razón para cambiar\nexport class CalculadoraSalarioEmpleado {\n  calcular(horasTrabajadas: number, tarifaHora: number): number {\n    return horasTrabajadas * tarifaHora;\n  }\n}\n\nexport class ReportadorHorasEmpleado {\n  generarReporte(horas: number): string {\n    return \\`Total horas registradas: \\${horas}\\`;\n  }\n}\n\nexport class EmpleadoRepository {\n  async guardar(empleadoId: string, datos: any): Promise<void> {\n    // Persistencia exclusiva en Base de Datos\n  }\n}",
      "expectedKeywords": [
        "principio"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 7: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP).",
      "placeholder": "// Clean Code: Aplicando OCP mediante Polimorfismo e Interfaces\nexport interface EstrategiaDescuento {\n  calcular(monto: number): number;\n}\n\nexport class DescuentoNavidad implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.8; } // 20%\n}\n\nexport class DescuentoVip implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.7; } // 30%\n}\n\n// Nueva estrategia añadida SIN tocar las clases anteriores\nexport class DescuentoBlackFriday implements EstrategiaDescuento {\n  calcular(monto: number): number { return monto * 0.5; } // 50%\n}\n\nexport class CarritoCompras {\n  constructor(private descuento: EstrategiaDescuento) {}\n\n  obtenerTotal(monto: number): number {\n    return this.descuento.calcular(monto);\n  }\n}",
      "expectedKeywords": [
        "principio"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 8: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP).",
      "placeholder": "// Violación LSP: Lanzar excepción en método heredado\n// class Ave { volar() { ... } }\n// class Pinguino extends Ave { volar() { throw new Error('No puedo volar'); } }\n\n// Clean Code: Segregación de jerarquías coherentes\nexport interface Ave {\n  comer(): void;\n}\n\nexport interface AveVoladora extends Ave {\n  volar(): void;\n}\n\nexport class Halcon implements AveVoladora {\n  comer(): void { /* come */ }\n  volar(): void { /* vuela alto */ }\n}\n\nexport class Pinguino implements Ave {\n  comer(): void { /* come pescado */ }\n  // No implementa volar, respetando el contrato\n}",
      "expectedKeywords": [
        "principio"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 9: PRINCIPIO I - INTERFACE SEGREGATION PRINCIPLE (ISP).",
      "placeholder": "// Violación ISP: Interfaz monolítica obligatoria\n// interface IMaquinaOficina { imprimir(); escanear(); fax(); }\n\n// Clean Code: Interfaces de rol segregadas\nexport interface Imprimible {\n  imprimir(doc: string): void;\n}\n\nexport interface Escaneable {\n  escanear(): string;\n}\n\n// Impresora básica: Solo implementa lo que realmente hace\nexport class ImpresoraEconomica implements Imprimible {\n  imprimir(doc: string): void {\n    console.log(\\`Imprimiendo: \\${doc}\\`);\n  }\n}\n\n// Multifuncional: Combina múltiples interfaces según su capacidad\nexport class SuperMultifuncional implements Imprimible, Escaneable {\n  imprimir(doc: string): void { /* Imprime */ }\n  escanear(): string { return 'contenido escaneado'; }\n}",
      "expectedKeywords": [
        "principio"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 10: PRINCIPIO D - DEPENDENCY INVERSION PRINCIPLE (DIP).",
      "placeholder": "// Abstracción en la capa de dominio\nexport interface NotificadorSMS {\n  enviarSMS(telefono: string, mensaje: string): Promise<boolean>;\n}\n\n// Módulo de Alto Nivel: Depende solo de la interfaz\nexport class ServicioAutenticacion2FA {\n  constructor(private notificador: NotificadorSMS) {}\n\n  async enviarCodigo(telefono: string, codigo: string): Promise<void> {\n    await this.notificador.enviarSMS(telefono, \\`Tu código es \\${codigo}\\`);\n  }\n}\n\n// Módulo de Bajo Nivel: Implementación concreta de Twilio\nexport class TwilioSmsService implements NotificadorSMS {\n  async enviarSMS(telefono: string, mensaje: string): Promise<boolean> {\n    // Llamada a API Twilio\n    return true;\n  }\n}",
      "expectedKeywords": [
        "principio"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 11: PATRONES CREACIONALES GOF: FACTORY, BUILDER Y SINGLETON SEGURO.",
      "placeholder": "// Patrón Builder Fluido\nexport class ServidorConfig {\n  public puerto: number = 3000;\n  public host: string = 'localhost';\n  public ssl: boolean = false;\n}\n\nexport class ServidorConfigBuilder {\n  private config = new ServidorConfig();\n\n  conPuerto(puerto: number): this {\n    this.config.puerto = puerto;\n    return this;\n  }\n\n  conHost(host: string): this {\n    this.config.host = host;\n    return this;\n  }\n\n  conSSL(ssl: boolean): this {\n    this.config.ssl = ssl;\n    return this;\n  }\n\n  build(): ServidorConfig {\n    return this.config;\n  }\n}\n\n// Uso ergonómico y legible\nconst config = new ServidorConfigBuilder()\n  .conPuerto(8080)\n  .conSSL(true)\n  .build();",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 12: PATRONES ESTRUCTURALES GOF: ADAPTER, DECORATOR Y FACADE.",
      "placeholder": "// Adapter Pattern\ninterface RepositorioPagosPropio {\n  cobrar(montoCentavos: number): Promise<boolean>;\n}\n\n// SDK externo incompatible\nclass StripeSdkExterno {\n  makeCharge(cents: number, currency: string) { return { status: 'succeeded' }; }\n}\n\n// Adapter que traduce la interfaz externa a la propia\nexport class StripeAdapter implements RepositorioPagosPropio {\n  constructor(private stripe: StripeSdkExterno) {}\n\n  async cobrar(montoCentavos: number): Promise<boolean> {\n    const res = this.stripe.makeCharge(montoCentavos, 'USD');\n    return res.status === 'succeeded';\n  }\n}",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 13: PATRONES ESTRUCTURALES GOF: COMPOSITE Y PROXY.",
      "placeholder": "// Proxy Pattern para Control de Acceso\ninterface BaseDatosSensible {\n  consultarRegistros(): string[];\n}\n\nexport class BaseDatosReal implements BaseDatosSensible {\n  consultarRegistros(): string[] {\n    return ['Dato Confidencial 1', 'Dato Confidencial 2'];\n  }\n}\n\nexport class BaseDatosProxySegura implements BaseDatosSensible {\n  constructor(\n    private bdReal: BaseDatosReal,\n    private rolUsuario: string\n  ) {}\n\n  consultarRegistros(): string[] {\n    if (this.rolUsuario !== 'ADMIN') {\n      throw new Error('Acceso denegado: Se requieren privilegios de Administrador');\n    }\n    return this.bdReal.consultarRegistros();\n  }\n}",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 14: PATRONES DE COMPORTAMIENTO GOF: STRATEGY, OBSERVER Y COMMAND.",
      "placeholder": "// Command Pattern con soporte para Undo\nexport interface Comando {\n  ejecutar(): void;\n  deshacer(): void;\n}\n\nexport class EditorTexto {\n  public contenido = '';\n}\n\nexport class EscribirTextoComando implements Comando {\n  constructor(\n    private editor: EditorTexto,\n    private textoNuevo: string\n  ) {}\n\n  ejecutar(): void {\n    this.editor.contenido += this.textoNuevo;\n  }\n\n  deshacer(): void {\n    this.editor.contenido = this.editor.contenido.slice(0, -this.textoNuevo.length);\n  }\n}",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 15: PATRONES DE COMPORTAMIENTO GOF: STATE, CHAIN OF RESPONSIBILITY E ITERATOR.",
      "placeholder": "// Chain of Responsibility (Middleware simple)\nexport abstract class ManejadorAuth {\n  private siguiente?: ManejadorAuth;\n\n  enlazar(siguiente: ManejadorAuth): ManejadorAuth {\n    this.siguiente = siguiente;\n    return siguiente;\n  }\n\n  manejar(req: { token?: string; rol?: string }): boolean {\n    if (this.siguiente) {\n      return this.siguiente.manejar(req);\n    }\n    return true;\n  }\n}\n\nexport class ValidadorToken extends ManejadorAuth {\n  override manejar(req: { token?: string }): boolean {\n    if (!req.token) return false;\n    return super.manejar(req);\n  }\n}",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 16: CATÁLOGO DE CODE SMELLS (HEDORES DE CÓDIGO).",
      "placeholder": "// Code Smell: Primitive Obsession\n// function cobrar(monto: number, moneda: string) { ... }\n\n// Refactorizado a Value Object (Clean Code)\nexport class Dinero {\n  constructor(\n    public readonly cantidad: number,\n    public readonly moneda: string\n  ) {\n    if (cantidad < 0) throw new Error('El dinero no puede ser negativo');\n    if (!['USD', 'EUR', 'GTQ'].includes(moneda)) throw new Error('Moneda no soportada');\n  }\n\n  sumar(otro: Dinero): Dinero {\n    if (this.moneda !== otro.moneda) throw new Error('No se pueden sumar monedas distintas');\n    return new Dinero(this.cantidad + otro.cantidad, this.moneda);\n  }\n}",
      "expectedKeywords": [
        "catálogo"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 17: TÉCNICAS DE REFACTORIZACIÓN DISCIPLINADA.",
      "placeholder": "// Antes del Refactor: Método largo con lógica duplicada\n// function generarReporte(usuarios: any[]) { ... }\n\n// Después del Refactor: Funciones atómicas extraídas\nexport class ReporteService {\n  generar(usuarios: Usuario[]): string {\n    const usuariosActivos = this.filtrarActivos(usuarios);\n    const lineas = this.formatearLineas(usuariosActivos);\n    return this.ensamblarReporte(lineas);\n  }\n\n  private filtrarActivos(usuarios: Usuario[]): Usuario[] {\n    return usuarios.filter(u => u.estaActivo);\n  }\n\n  private formatearLineas(usuarios: Usuario[]): string[] {\n    return usuarios.map(u => \\`\\${u.nombre}: \\${u.saldoTotal}\\`);\n  }\n\n  private ensamblarReporte(lineas: string[]): string {\n    return lineas.join('\\n');\n  }\n}",
      "expectedKeywords": [
        "técnicas"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 18: CLEAN ARCHITECTURE (ROBERT C. MARTIN).",
      "placeholder": "// 1. Entidad Central (No depende de nada)\nexport class Pedido {\n  constructor(public id: string, public total: number) {}\n}\n\n// 2. Puerto de Repositorio (Interfaz definida por el caso de uso)\nexport interface IPedidoRepository {\n  guardar(pedido: Pedido): Promise<void>;\n}\n\n// 3. Caso de Uso (Lógica pura de aplicación)\nexport class CrearPedidoUseCase {\n  constructor(private repo: IPedidoRepository) {}\n\n  async ejecutar(id: string, total: number): Promise<void> {\n    if (total <= 0) throw new Error('Total inválido');\n    const pedido = new Pedido(id, total);\n    await this.repo.guardar(pedido);\n  }\n}",
      "expectedKeywords": [
        "clean"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 19: ARQUITECTURA HEXAGONAL Y DDD TÁCTICO.",
      "placeholder": "// DDD Táctico: Aggregate Root y Value Object\nexport class EmailVO {\n  constructor(public readonly valor: string) {\n    if (!valor.includes('@')) throw new Error('Email inválido');\n  }\n}\n\nexport class CuentaBancariaAggregate {\n  private saldo: number = 0;\n\n  constructor(\n    public readonly id: string,\n    public readonly titularEmail: EmailVO\n  ) {}\n\n  depositar(monto: number): void {\n    if (monto <= 0) throw new Error('Monto debe ser positivo');\n    this.saldo += monto;\n    // Podría emitir evento de dominio: new DineroDepositadoEvent(this.id, monto)\n  }\n\n  obtenerSaldo(): number {\n    return this.saldo;\n  }\n}",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Implementa un ejemplo limpio aplicando los conceptos aprendidos en el MÓDULO 20: PROYECTO INTEGRADOR: REFACTORIZACIÓN COMPLETA A CLEAN ARCHITECTURE.",
      "placeholder": "// Arquitectura Final Integrada: Caso de Uso Orquestador\nexport class ProcesarCompraUseCase {\n  constructor(\n    private readonly pedidoRepo: IPedidoRepository,\n    private readonly pasarelaPago: IPasarelaPago,\n    private readonly notificador: INotificadorCliente\n  ) {}\n\n  async ejecutar(pedidoId: string): Promise<void> {\n    const pedido = await this.pedidoRepo.obtenerPorId(pedidoId);\n    if (!pedido) throw new Error('Pedido inexistente');\n\n    // La entidad de dominio valida sus propias reglas de negocio\n    pedido.validarParaCobro();\n\n    // Orquestación con los puertos de infraestructura\n    await this.pasarelaPago.cobrar(pedido.total);\n    pedido.marcarComoPagado();\n\n    await this.pedidoRepo.guardar(pedido);\n    await this.notificador.enviarConfirmacion(pedido);\n  }\n}",
      "expectedKeywords": [
        "proyecto"
      ],
      "hint": "Revisa los conceptos clave del módulo e implementa la solución con nombres expresivos y principios SOLID.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de Clean Code
CLEAN_CODE_COURSE.modules.forEach((mod) => {
  if (CLEAN_CODE_EXERCISES[mod.id]) {
    mod.exercises = CLEAN_CODE_EXERCISES[mod.id];
  }
});
