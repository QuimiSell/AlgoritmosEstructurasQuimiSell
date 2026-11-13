import { Course, TutorExercise } from '../domain/models';

export const QA_AUTOMATION_COURSE: Course = {
  "id": "qa_testing_automatizacion",
  "title": "Aseguramiento de Calidad de Software (QA), Automatización de Pruebas & Pirámide de Testing",
  "shortTitle": "QA & Testing",
  "badge": "QA & Testing · 20 Módulos",
  "icon": "🧪",
  "description": "El curso definitivo de Ingeniería de Calidad (SDET): Pirámide de Pruebas (70/20/10), TDD con Vitest, Test Doubles, Cobertura de Mutación (Stryker), Testcontainers en Docker, pruebas E2E con Playwright (POM), pruebas de carga con k6, Chaos Engineering y evaluación sistemática de IA.",
  "whyStudyTitle": "🧪 ¿Por qué la Ingeniería de Calidad (QA) es la habilidad más demandada en sistemas de alta escala?",
  "whyStudyText": "En la era de la entrega continua y la Inteligencia Artificial, escribir código que 'funciona en mi máquina' no tiene valor en la industria. Cualquier cambio en un monolito o constelación de microservicios puede provocar caídas millonarias si no existe una suite automatizada que certifique la estabilidad en milisegundos. Este curso no enseña testing manual pasivo: te forma como un verdadero SDET (Software Development Engineer in Test) capaz de diseñar la pirámide completa de calidad, desde pruebas unitarias y TDD riguroso hasta automatización web con Playwright, pruebas de carga con k6, Chaos Engineering y verificación de modelos de IA.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "FILOSOFÍA DE QA, CULTURA DE CALIDAD Y LA PIRÁMIDE DE TESTING",
      "why": "El rol del Ingeniero de Calidad moderno: prevención de defectos, la Pirámide de Mike Cohn (70/20/10), el anti-patrón Cono de Helado y Shift-Left Testing."
    },
    {
      "id": 2,
      "title": "UNIT TESTING FUNDAMENTAL Y EL PATRÓN AAA (ARRANGE-ACT-ASSERT)",
      "why": "Estructuración canónica de pruebas unitarias con Vitest/pytest: el patrón AAA, principios FIRST, aserciones deterministas y aislamiento total."
    },
    {
      "id": 3,
      "title": "TEST-DRIVEN DEVELOPMENT (TDD) Y EL CICLO RED-GREEN-REFACTOR",
      "why": "La metodología de diseño de software guiada por pruebas: el ciclo Red-Green-Refactor, las 3 leyes de TDD de Robert C. Martin y escuelas Chicago vs London."
    },
    {
      "id": 4,
      "title": "TEST DOUBLES PROFESIONALES: DUMMIES, STUBS, SPIES, MOCKS Y FAKES",
      "why": "Aislamiento de dependencias externas según Gerard Meszaros: cuándo usar un Stub vs Spy vs Mock vs Fake con Vitest (`vi.fn()`, `vi.spyOn()`)."
    },
    {
      "id": 5,
      "title": "COBERTURA DE CÓDIGO (CODE COVERAGE) Y COBERTURA DE MUTACIÓN",
      "why": "Métricas de cobertura en profundidad: Line vs Branch vs Function coverage, la falacia del 100% de cobertura y cómo Mutation Testing (Stryker) expone pruebas deficientes."
    },
    {
      "id": 6,
      "title": "PRUEBAS DE INTEGRACIÓN Y BASES DE DATOS CON TESTCONTAINERS",
      "why": "Pruebas de integración sobre dependencias reales efímeras: levantando PostgreSQL y Redis con Testcontainers en Docker, migraciones y rollback."
    },
    {
      "id": 7,
      "title": "TESTING DE APIS REST, SCHEMAS JSON Y CONTRACT TESTING (PACT)",
      "why": "Verificación de contratos y servicios HTTP: Supertest para endpoints, validación de esquemas con Zod/JSON Schema y Consumer-Driven Contract Testing con Pact."
    },
    {
      "id": 8,
      "title": "AUTOMATIZACIÓN END-TO-END (E2E) CON PLAYWRIGHT: ARQUITECTURA",
      "why": "La nueva generación de pruebas de navegador: arquitectura de Playwright, conexión directa vía CDP, ejecución headless multi-motor y auto-waiting inteligente."
    },
    {
      "id": 9,
      "title": "PAGE OBJECT MODEL (POM) Y SELECTORES RESILIENTES EN PLAYWRIGHT",
      "why": "Diseño de suites E2E mantenibles: el patrón Page Object Model (POM), localizadores orientados a la accesibilidad (`getByRole`, `getByLabel`) y antipatrones de selectores."
    },
    {
      "id": 10,
      "title": "TESTING VISUAL Y DETECCIÓN AUTOMÁTICA DE REGRESIONES DE UI",
      "why": "Pruebas de regresión visual: capturas de pantalla de referencia (Gold Masters), umbrales de tolerancia de píxeles (`maxDiffPixelRatio`) y enmascaramiento dinámico."
    },
    {
      "id": 11,
      "title": "PRUEBAS DE CARGA Y ESTRÉS CON K6: PROTOCOLOS Y USUARIOS VIRTUALES",
      "why": "Ingeniería de rendimiento moderna con Grafana k6: motor Go, runtime JS, modelado de Usuarios Virtuales (VUs), escenarios de carga y SLAs."
    },
    {
      "id": 12,
      "title": "ANÁLISIS DE RENDIMIENTO: LATENCIAS PERCENTILES (P90/P95/P99) Y SLOS",
      "why": "Estadística rigurosa de rendimiento: la falacia de los promedios, la cola larga (Long-tail latency), SLAs, SLOs, SLIs y diagnóstico de fugas de memoria con Soak Testing."
    },
    {
      "id": 13,
      "title": "PROPERTY-BASED TESTING Y FUZZING CON FAST-CHECK Y HYPOTHESIS",
      "why": "Pruebas basadas en propiedades: superando los tests con ejemplos fijos, generación pseudoaleatoria masiva (Arbitraries), invariantes y Shrinking."
    },
    {
      "id": 14,
      "title": "MUTATION TESTING AVANZADO: AUDITANDO LA EFICACIA DE LAS PRUEBAS",
      "why": "Evaluando la calidad real de tu suite de pruebas con Stryker: mutadores de código, estados de mutantes (Killed, Survived, Timeout) y el Mutation Score."
    },
    {
      "id": 15,
      "title": "PRUEBAS DE SEGURIDAD EN QA: DAST AUTOMATIZADO CON OWASP ZAP",
      "why": "Integrando seguridad ofensiva en QA: escaneo dinámico de aplicaciones (DAST) con OWASP ZAP, verificación automática del OWASP Top 10 y cabeceras de seguridad."
    },
    {
      "id": 16,
      "title": "TESTING DE MICROSERVICIOS, EVENT-DRIVEN Y FALLAS DE RED",
      "why": "Pruebas de arquitecturas distribuidas: consumidores y productores de eventos (Kafka/RabbitMQ), validación de idempotencia y simulación de fallas de red con Toxiproxy."
    },
    {
      "id": 17,
      "title": "CHAOS ENGINEERING & RESILIENCIA: INYECCIÓN CONTROLADA DE FALLAS",
      "why": "Principios del Chaos Engineering: Netflix Simian Army, hipótesis del estado estacionario, Chaos Mesh y validación del Circuit Breaker en producción."
    },
    {
      "id": 18,
      "title": "TESTING DE SISTEMAS DE IA: EVALUACIÓN DE RAG Y MOCKS DETERMINISTAS",
      "why": "Aseguramiento de Calidad para aplicaciones con Modelos de Lenguaje (LLMs): no determinismo, mocks reproducibles, métricas RAG (Faithfulness, Relevance) y guardrails."
    },
    {
      "id": 19,
      "title": "GESTIÓN DE DEFECTOS, ANÁLISIS DE CAUSA RAÍZ (5 WHYS) Y MÉTRICAS DORA",
      "why": "Gestión profesional de incidentes y calidad: redacción de Bug Reports impecables, análisis de los 5 Porqués (5 Whys), Blameless Post-Mortems y métricas DORA."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: ARQUITECTURA DE LA SUITE CORPORATIVA DE QA END-TO-END",
      "why": "Diseño, estructuración y ejecución del pipeline integral de calidad corporativo: Quality Gates en CI/CD, pirámide completa en acción y reportes automatizados."
    }
  ],
  "labChallenge": {
    "title": "Arquitectura y Despliegue de una Suite Corporativa Integral de QA (Unit, E2E & Load)",
    "badge": "Desafío de Laboratorio · Nivel Senior SDET",
    "description": "Tu objetivo es diseñar e implementar la suite de calidad para una plataforma de comercio electrónico de alta concurrencia: implementarás pruebas unitarias con TDD (Vitest), pruebas de contratos de API (Zod/Supertest), un flujo E2E automatizado con Playwright aplicando Page Object Model (POM) y una prueba de carga en k6 con 100 VUs y validación de SLA p95 < 200ms.",
    "requirements": [
      "• Pirámide Completa: Implementar al menos 5 pruebas unitarias TDD con 100% de Branch Coverage.",
      "• Test Doubles: Usar Spies/Mocks para aislar llamadas a pasarelas de pago y servicios externos.",
      "• E2E Playwright: Diseñar una clase Page Object Model para el flujo de Checkout.",
      "• Carga con k6: Definir un script con rampas de tráfico y umbrales estrictos de latencia p95.",
      "• Quality Gate en CI: Configurar el archivo de GitHub Actions que ejecute la suite de extremo a extremo."
    ],
    "cleanCodeRules": [
      "• Aislamiento Absoluto: Ninguna prueba unitaria debe depender de llamadas reales de red ni archivos locales.",
      "• Nombres Expresivos: Nombres de tests que describan el comportamiento esperado bajo condiciones concretas.",
      "• Sin Sleeps Artificiales: Prohibido usar pausas estáticas; utilizar auto-waiting de Playwright."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto SDET QA - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio con la Suite Corporativa de QA automatizada.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nResumen de pruebas implementadas:\\n- Unitarias / TDD: \\n- E2E Playwright (POM): \\n- Carga k6 (p95): \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: FILOSOFÍA DE QA, CULTURA DE CALIDAD Y LA PIRÁMIDE DE TESTING",
      "description": "El rol del Ingeniero de Calidad moderno: prevención de defectos, la Pirámide de Mike Cohn (70/20/10), el anti-patrón Cono de Helado y Shift-Left Testing.",
      "items": [
        "Evolución del Aseguramiento de Calidad: De testers manuales a Software Development Engineers in Test (SDET).",
        "El costo exponencial de los defectos a lo largo del SDLC (Ciclo de Vida de Software de Boehm).",
        "La Pirámide de Pruebas de Mike Cohn: 70% Unitarias, 20% Integración, 10% End-to-End.",
        "El anti-patrón del Cono de Helado (Ice Cream Cone): Suites E2E lentas, frágiles y costosas.",
        "Filosofía Shift-Left: Diseñar calidad desde la arquitectura y la fase de requisitos.",
        "Calidad Funcional vs Calidad No Funcional (Rendimiento, Seguridad, Accesibilidad).",
        "Definición de Hecho (Definition of Done - DoD) con criterios estrictos de pruebas.",
        "Matriz de Trazabilidad y Riesgo: Dónde enfocar el esfuerzo de automatización.",
        "Errores comunes: Automatizar sin estrategia y depender de pruebas manuales.",
        "Glosario de QA: Regresión, Flaky Test, Smoke Test, Sanity Check.",
        "Conexión con el proyecto integrador del curso."
      ],
      "content": "## Panorama del tema: FILOSOFÍA DE QA Y PIRÁMIDE DE PRUEBAS\n\nEn la ingeniería de software profesional, la calidad no es una fase que ocurre al final antes del despliegue; es una propiedad intrínseca del sistema construida desde la primera línea de código. \n\nBarry Boehm demostró en sus clásicos estudios de ingeniería que un defecto detectado en producción cuesta entre 50 y 100 veces más repararlo que si se detecta durante la fase de desarrollo o pruebas unitarias. Por esta razón, las empresas de tecnología líderes han transformado el rol de QA manual en **Software Development Engineers in Test (SDET)**: ingenieros que diseñan arquitecturas de prueba automatizadas, confiables y reproducibles.\n\n## La Pirámide de Pruebas (Mike Cohn)\n\n1. **Pruebas Unitarias (Base - ~70%):** Prueban funciones y métodos aislados en microsegundos sin tocar red, disco ni base de datos. Son baratas de escribir y mantener.\n2. **Pruebas de Integración (Cuerpo - ~20%):** Verifican la colaboración entre módulos, repositorios de bases de datos, APIs y colas de mensajes.\n3. **Pruebas End-to-End (Cúspide - ~10%):** Simulan el recorrido completo del usuario a través de la interfaz real o de llamadas HTTP completas. Son lentas y propensas a intermitencias (flakiness).\n\nEl **Anti-patrón del Cono de Helado (Ice Cream Cone)** ocurre cuando un equipo tiene pocos tests unitarios y confía toda la verificación a cientos de pruebas E2E en Selenium/Playwright: el pipeline tarda horas en correr, las pruebas fallan aleatoriamente por problemas de red y los desarrolladores pierden la confianza en la suite de CI.",
      "codeSnippet": "// Ejemplo comparativo: Diseño para Testabilidad (Shift-Left)\n// Código Difícil de Probar (Acoplado y con efectos secundarios no controlados)\nclass PedidoServiceMalo {\n  async procesar(pedidoId: string) {\n    // Dependencia oculta directa a la base de datos y pasarela\n    const db = new DatabaseConnection(); \n    const stripe = new StripeSDK('sk_live_123');\n    const pedido = await db.query('SELECT * FROM pedidos WHERE id = ?', [pedidoId]);\n    await stripe.charges.create({ amount: pedido.total });\n  }\n}\n\n// Código Diseñado para QA (Inyección de Dependencias y Testeabilidad)\ninterface IPedidoRepository {\n  obtenerPorId(id: string): Promise<Pedido>;\n}\n\ninterface IPasarelaPago {\n  cobrar(montoCentavos: number): Promise<{ exito: boolean; transaccionId: string }>;\n}\n\nexport class PedidoServiceLimpio {\n  constructor(\n    private readonly repo: IPedidoRepository,\n    private readonly pagos: IPasarelaPago\n  ) {}\n\n  async procesar(pedidoId: string): Promise<boolean> {\n    const pedido = await this.repo.obtenerPorId(pedidoId);\n    if (!pedido || pedido.total <= 0) {\n      throw new Error('Pedido inválido para cobro');\n    }\n    const resultado = await this.pagos.cobrar(pedido.total);\n    return resultado.exito;\n  }\n}",
      "quiz": [
        {
          "question": "¿Por qué según la Pirámide de Pruebas de Mike Cohn las pruebas unitarias deben representar ~70% de la suite?",
          "options": [
            "Porque son más baratas de escribir, corren en milisegundos y aíslan el punto exacto de falla sin dependencias externas",
            "Porque son las únicas que detectan errores de diseño visual en el navegador",
            "Porque no requieren que el programador entienda la lógica de negocio"
          ],
          "answerIndex": 0,
          "explanation": "Las pruebas unitarias proveen retroalimentación inmediata (en milisegundos), no sufren por fallas de red ni caídas de bases de datos, y son baratísimas de mantener."
        },
        {
          "question": "¿Qué describe el anti-patrón del 'Cono de Helado' (Ice Cream Cone) en QA?",
          "options": [
            "Tener una enorme base de pruebas E2E lentas e inestables con muy pocas pruebas unitarias e integración en la base",
            "Comer helado mientras compila el código",
            "Escribir únicamente pruebas de seguridad e ignorar la interfaz"
          ],
          "answerIndex": 0,
          "explanation": "El cono de helado invierte la pirámide ideal: depende excesivamente de pruebas de interfaz lentas y frágiles, resultando en builds de horas y falsos positivos."
        },
        {
          "question": "¿A qué se refiere el principio de 'Shift-Left Testing'?",
          "options": [
            "Mover las pruebas hacia las etapas más tempranas del desarrollo (diseño y requisitos) en lugar de dejarlas para el final",
            "Mover los botones de la interfaz a la izquierda",
            "Desplegar a producción únicamente los días lunes"
          ],
          "answerIndex": 0,
          "explanation": "Shift-Left promueve identificar fallas antes de que se consoliden en el código fuente, reduciendo el costo de corrección hasta 100 veces."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: UNIT TESTING FUNDAMENTAL Y EL PATRÓN AAA (ARRANGE-ACT-ASSERT)",
      "description": "Estructuración canónica de pruebas unitarias con Vitest/pytest: el patrón AAA, principios FIRST, aserciones deterministas y aislamiento total.",
      "items": [
        "Anatomía de una prueba unitaria: entrada fija, ejecución aislada y aserción explícita.",
        "El Patrón AAA: Arrange (Preparar datos), Act (Ejecutar función), Assert (Validar resultado).",
        "Principios FIRST: Fast (rápida), Independent (aislada), Repeatable (reproducible), Self-validating (autoevaluada), Timely (oportuna).",
        "Manejo de aserciones en Vitest/Jest (`toBe`, `toEqual`, `toThrowError`, `rejects`).",
        "Aserción por valor vs Aserción por referencia de objetos en JavaScript/TypeScript.",
        "Testing de funciones asíncronas (Promises, async/await y manejo de reyecciones).",
        "Configuración de suites con `describe`, `it`, `beforeEach` y `afterEach`.",
        "El antipatrón de estados compartidos mutables entre tests.",
        "Ejercicios prácticos con Vitest en modo Watch."
      ],
      "content": "## El Patrón AAA (Arrange - Act - Assert)\n\nEl estándar universal para organizar una prueba unitaria legible es el patrón **AAA**:\n\n```ts\nit('debe aplicar un 10% de descuento cuando el carrito supera los $100', () => {\n  // 1. ARRANGE (Preparar el escenario y los datos de entrada)\n  const calculadora = new CalculadoraDescuentos();\n  const carrito = { subtotal: 120, usuarioVip: false };\n\n  // 2. ACT (Invocar la función o método bajo prueba)\n  const totalConDescuento = calculadora.calcular(carrito);\n\n  // 3. ASSERT (Verificar que el resultado cumple la expectativa)\n  expect(totalConDescuento).toBe(108); // 120 - 10% = 108\n});\n```\n\n### Principios FIRST de Unit Testing\n* **Fast (Rápido):** La suite completa de miles de pruebas unitarias debe ejecutarse en segundos.\n* **Independent (Independiente):** Ninguna prueba debe depender del resultado, orden o estado generado por otra prueba.\n* **Repeatable (Repetible):** La prueba debe dar exactamente el mismo resultado en tu laptop, en la máquina de tu colega o en el servidor de CI.\n* **Self-Validating (Auto-validable):** Pasa (verde) o falla (rojo) sin requerir inspección visual manual ni interpretación humana de logs.\n* **Timely (Oportuno):** Se escribe junto o antes del código de producción.",
      "codeSnippet": "import { describe, it, expect, beforeEach } from 'vitest';\n\nexport class BilleteraVirtual {\n  private saldo: number = 0;\n\n  recargar(monto: number): void {\n    if (monto <= 0) throw new Error('El monto de recarga debe ser positivo');\n    this.saldo += monto;\n  }\n\n  retirar(monto: number): void {\n    if (monto <= 0) throw new Error('El monto de retiro debe ser positivo');\n    if (monto > this.saldo) throw new Error('Fondos insuficientes');\n    this.saldo -= monto;\n  }\n\n  obtenerSaldo(): number {\n    return this.saldo;\n  }\n}\n\ndescribe('BilleteraVirtual (Patrón AAA & FIRST)', () => {\n  let billetera: BilleteraVirtual;\n\n  beforeEach(() => {\n    // Arrange común: nueva instancia limpia para cada test\n    billetera = new BilleteraVirtual();\n  });\n\n  it('debe iniciar con saldo cero', () => {\n    expect(billetera.obtenerSaldo()).toBe(0);\n  });\n\n  it('debe acumular saldo al recargar con monto válido', () => {\n    billetera.recargar(50);\n    expect(billetera.obtenerSaldo()).toBe(50);\n  });\n\n  it('debe lanzar excepción al intentar retirar más del saldo disponible', () => {\n    billetera.recargar(20);\n    expect(() => billetera.retirar(30)).toThrowError('Fondos insuficientes');\n  });\n});",
      "quiz": [
        {
          "question": "¿En qué orden se ejecutan las fases del patrón AAA en una prueba unitaria?",
          "options": [
            "Arrange (Preparar) -> Act (Ejecutar) -> Assert (Validar)",
            "Assert (Validar) -> Arrange (Preparar) -> Act (Ejecutar)",
            "Act (Ejecutar) -> Assert (Validar) -> Arrange (Preparar)"
          ],
          "answerIndex": 0,
          "explanation": "El patrón AAA organiza la prueba preparando primero el contexto (Arrange), ejecutando la acción objetivo (Act) y validando la salida (Assert)."
        },
        {
          "question": "Si una prueba unitaria pasa a las 10:00 AM pero falla a las 11:00 PM por usar `new Date()`, ¿qué principio FIRST está violando?",
          "options": [
            "Repeatable (Repetible / Determinista)",
            "Fast (Rápida)",
            "Timely (Oportuna)"
          ],
          "answerIndex": 0,
          "explanation": "Las pruebas deben ser deterministas y reproducibles en cualquier momento y entorno. Depender del reloj del sistema sin congelarlo viola el principio Repeatable."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: TEST-DRIVEN DEVELOPMENT (TDD) Y EL CICLO RED-GREEN-REFACTOR",
      "description": "La metodología de diseño de software guiada por pruebas: el ciclo Red-Green-Refactor, las 3 leyes de TDD de Robert C. Martin y escuelas Chicago vs London.",
      "items": [
        "Filosofía de TDD formulada por Kent Beck: Diseñar el software a través de sus casos de uso.",
        "El Ciclo Rápido: RED (escribe test que falle) ➔ GREEN (código mínimo para pasar) ➔ REFACTOR (limpia diseño).",
        "Las 3 Leyes de TDD de Robert C. Martin (Tío Bob).",
        "La falacia de escribir el código primero y las pruebas después (Test-Last).",
        "Escuela Clásica / Chicago (Inside-Out) vs Escuela Londres / Mockist (Outside-In).",
        "Baby Steps: Cómo avanzar con pasos atómicos sin atascarse en diseños sobredimensionados.",
        "Refactorización continua con la red de seguridad de tests en verde permanente.",
        "Desarrollo de un analizador sintáctico paso a paso con TDD estricto."
      ],
      "content": "## El Ciclo Red-Green-Refactor\n\nEl núcleo metodológico de TDD consiste en un ciclo cerrado de 3 etapas que se repite en cuestión de minutos:\n\n```\n    ┌───────────────┐\n    │   1. RED      │ Escribe una prueba pequeña para una nueva capacidad.\n    │   (Fallo)     │ Ejecútala y verifica que FALLA por la razón esperada.\n    └───────┬───────┘\n            ▼\n    ┌───────────────┐\n    │   2. GREEN    │ Escribe el código MÍNIMO para que la prueba pase.\n    │   (Éxito)     │ Se permite código simple e incluso duplicado temporal.\n    └───────┬───────┘\n            ▼\n    ┌───────────────┐\n    │  3. REFACTOR  │ Limpia el código, elimina duplicaciones y aplica SOLID\n    │  (Limpieza)   │ manteniendo TODOS los tests en VERDE.\n    └───────┬───────┘\n            ▲\n            └───────── Repetir con el siguiente caso\n```\n\n### Las 3 Leyes de TDD (Uncle Bob)\n1. No se permite escribir código de producción a menos que sea para hacer pasar una prueba unitaria que está fallando.\n2. No se permite escribir más de una prueba unitaria de la que sea suficiente para fallar (y no compilar es fallar).\n3. No se permite escribir más código de producción del que sea necesario para hacer pasar la prueba que está fallando.",
      "codeSnippet": "// Ejemplo TDD: Calculadora de Tarifas de Envíos\n// PASO 1 (RED): Escribir la prueba antes de que exista la lógica\nimport { describe, it, expect } from 'vitest';\n\nexport function calcularTarifaEnvio(pesoKg: number, distanciaKm: number): number {\n  if (pesoKg <= 0 || distanciaKm <= 0) {\n    throw new Error('Parámetros de envío inválidos');\n  }\n  // PASO 2 (GREEN): Implementación mínima inicial\n  const base = 5.0;\n  const tarifaPorKg = pesoKg * 1.5;\n  const tarifaPorKm = distanciaKm * 0.1;\n  return Number((base + tarifaPorKg + tarifaPorKm).toFixed(2));\n}\n\n// Suite TDD\ndescribe('calcularTarifaEnvio (TDD)', () => {\n  it('debe rechazar pesos negativos o cero', () => {\n    expect(() => calcularTarifaEnvio(0, 10)).toThrowError('Parámetros de envío inválidos');\n  });\n\n  it('debe calcular la tarifa base + distancia + peso correctamente', () => {\n    // 5.0 (base) + (2 * 1.5 = 3.0) + (100 * 0.1 = 10.0) = 18.0\n    expect(calcularTarifaEnvio(2, 100)).toBe(18.0);\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la regla de oro del paso 'GREEN' en el ciclo TDD?",
          "options": [
            "Escribir únicamente el código mínimo y necesario para que la prueba que fallaba pase a verde",
            "Escribir toda la arquitectura completa del sistema de una sola vez",
            "Ignorar los fallos si la compilación es exitosa"
          ],
          "answerIndex": 0,
          "explanation": "El objetivo de GREEN es restaurar la suite a verde lo más rápido posible con el código más simple, dejando la optimización y elegancia para el paso de REFACTOR."
        },
        {
          "question": "¿Por qué es fundamental ejecutar la prueba y verla en 'RED' antes de escribir código de producción?",
          "options": [
            "Para verificar que la prueba realmente falla por la causa esperada y no es un falso positivo que pasa sin hacer nada",
            "Para generar reportes a gerencia",
            "Porque Vitest no permite compilar sin un error previo"
          ],
          "answerIndex": 0,
          "explanation": "Si una prueba pasa sin que hayas escrito código, la prueba no está evaluando nada o está mal configurada. Ver el rojo confirma su validez."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: TEST DOUBLES PROFESIONALES: DUMMIES, STUBS, SPIES, MOCKS Y FAKES",
      "description": "Aislamiento de dependencias externas según Gerard Meszaros: cuándo usar un Stub vs Spy vs Mock vs Fake con Vitest (`vi.fn()`, `vi.spyOn()`).",
      "items": [
        "El problema de las dependencias reales: Red, base de datos, reloj del sistema y servicios de terceros.",
        "La Taxonomía de Gerard Meszaros (xUnit Test Patterns).",
        "Dummy: Datos de relleno para satisfacer la firma de un método.",
        "Stub: Provee respuestas enlatadas preconfiguradas sin lógica.",
        "Spy: Monitorea llamadas, parámetros recibidos y veces ejecutado.",
        "Mock: Objeto con expectativas estrictas de invocación preprogramadas.",
        "Fake: Implementación funcional pero ligera y simplificada (ej. Base de datos en memoria).",
        "Mocks en Vitest: `vi.fn()`, `vi.spyOn()`, `mockResolvedValue()`, `mockRejectedValue()`.",
        "El peligro del 'Over-Mocking': Suites frágiles que prueban detalles de implementación en lugar de comportamiento."
      ],
      "content": "## Taxonomía de Test Doubles (Gerard Meszaros)\n\nMuchas personas llaman \"Mock\" a cualquier objeto simulado, pero un ingeniero de calidad distingue con precisión los 5 tipos:\n\n1. **Dummy:** Objeto que se pasa pero nunca se usa realmente (solo para completar listas de argumentos requeridas por el compilador).\n2. **Stub:** Objeto que devuelve respuestas fijas preprogramadas (`mockResolvedValue({ id: 1 })`).\n3. **Spy:** Objeto que registra cómo fue llamado (parámetros, cantidad de veces, retorno), permitiendo aserciones posteriores.\n4. **Mock:** Objeto con expectativas preconfiguradas que define de antemano qué llamadas DEBEN ocurrir.\n5. **Fake:** Objeto con una implementación funcional real pero no apta para producción (por ejemplo, un `InMemoryUserRepository` con un `Map` en lugar de una conexión a PostgreSQL).\n\n### Cuándo usar cada uno\n* Usa **Fakes** para pruebas de integración rápidas sin levantar infraestructura pesada.\n* Usa **Stubs** para simular respuestas de APIs externas y errores de red.\n* Usa **Spies/Mocks** con moderación para verificar efectos secundarios obligatorios (ej. enviar un correo o disparar un evento de pago).",
      "codeSnippet": "import { describe, it, expect, vi } from 'vitest';\n\ninterface Mailer {\n  enviar(email: string, mensaje: string): Promise<boolean>;\n}\n\nclass NotificadorUsuario {\n  constructor(private mailer: Mailer) {}\n\n  async alertarLoginSospechoso(email: string, ip: string): Promise<void> {\n    const texto = \\`Alerta de seguridad: inicio de sesión desde IP \\${ip}\\`;\n    await this.mailer.enviar(email, texto);\n  }\n}\n\ndescribe('NotificadorUsuario con Test Doubles', () => {\n  it('debe invocar al mailer exactamente una vez con el contenido y destinatario correcto (Mock/Spy)', async () => {\n    // 1. Arrange: Creamos un Mock del Mailer usando vi.fn()\n    const mockMailer: Mailer = {\n      enviar: vi.fn().mockResolvedValue(true)\n    };\n    const notificador = new NotificadorUsuario(mockMailer);\n\n    // 2. Act\n    await notificador.alertarLoginSospechoso('selvin@quimisell.dev', '192.168.1.100');\n\n    // 3. Assert: Verificamos con el Spy el comportamiento de la llamada\n    expect(mockMailer.enviar).toHaveBeenCalledTimes(1);\n    expect(mockMailer.enviar).toHaveBeenCalledWith(\n      'selvin@quimisell.dev',\n      'Alerta de seguridad: inicio de sesión desde IP 192.168.1.100'\n    );\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia técnica entre un 'Stub' y un 'Fake'?",
          "options": [
            "Un Stub solo devuelve datos fijos enlatados, mientras que un Fake tiene una implementación funcional real simplificada (ej. un Map en memoria)",
            "Un Stub se usa en producción y un Fake solo en desarrollo",
            "No hay diferencia, son exactamente sinónimos"
          ],
          "answerIndex": 0,
          "explanation": "El Stub responde mecánicamente con datos predefinidos; el Fake tiene lógica operativa real (como guardar y recuperar datos en memoria) pero sin la complejidad de producción."
        },
        {
          "question": "¿Qué problema grave provoca el anti-patrón de 'Over-Mocking' en una base de código?",
          "options": [
            "Las pruebas quedan acopladas a detalles internos de implementación, rompiéndose ante cualquier refactorización interna aunque el comportamiento sea correcto",
            "Aumenta la memoria RAM del servidor a gigabytes",
            "Desactiva el motor de TypeScript"
          ],
          "answerIndex": 0,
          "explanation": "Al mockear todo, las pruebas verifican 'cómo está escrito el código' en lugar de 'qué resultado produce', volviéndose frágiles e inútiles para refactorizar."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: COBERTURA DE CÓDIGO (CODE COVERAGE) Y COBERTURA DE MUTACIÓN",
      "description": "Métricas de cobertura en profundidad: Line vs Branch vs Function coverage, la falacia del 100% de cobertura y cómo Mutation Testing (Stryker) expone pruebas deficientes.",
      "items": [
        "Definición y cálculo de métricas de cobertura estándar: Sentencias, Ramas (Branches), Funciones y Líneas.",
        "La trampa del 100% Line Coverage: Código ejecutado pero sin aserciones que verifiquen el resultado.",
        "Branch Coverage: Garantizar que todos los caminos booleanos (`if/else`, operadores ternarios) sean probados.",
        "Configuración de umbrales estrictos (Thresholds) en Vitest / Jest (ej. 85% mínimo para aprobar CI).",
        "Introducción al Mutation Testing: Inyectar defectos deliberados (mutantes) en el código fuente.",
        "Mutantes Cazados (Killed) vs Mutantes Sobrevivientes (Survived).",
        "El Mutation Score Indicator (MSI): La verdadera métrica de resiliencia de una suite de pruebas.",
        "Ejemplo práctico de un test con 100% de cobertura que no atrapa un error crítico."
      ],
      "content": "## Métricas de Cobertura de Código\n\nLas herramientas como c8, Istanbul o pytest-cov reportan 4 métricas fundamentales:\n\n* **Line / Statement Coverage:** Porcentaje de líneas de código ejecutadas por las pruebas.\n* **Branch Coverage:** Porcentaje de bifurcaciones lógicas (`if/else`, `switch`, `&&`, `||`) ejecutadas en ambos estados (true y false).\n* **Function Coverage:** Porcentaje de funciones declaradas que fueron invocadas al menos una vez.\n\n### La Falacia del 100% de Cobertura\nEs trivial alcanzar 100% de cobertura de líneas escribiendo pruebas que ejecuten las funciones pero que no tengan ninguna aserción (`expect(...)`). El código se ejecuta, la herramienta lo marca en verde, pero si la función devuelve basura, el test pasa.\n\n### Mutation Testing (Stryker)\nEl **Mutation Testing** somete a prueba tus pruebas. Modifica tu código fuente automáticamente (cambia un `>` por `<`, borra una línea, invierte un booleano) generando un **Mutante**:\n* Si tus pruebas fallan ante el mutante: el mutante fue **CAZADO (Killed)** ✅.\n* Si tus pruebas siguen pasando a pesar del código defectuoso: el mutante **SOBREVIVIÓ (Survived)** ❌, lo que demuestra que tus pruebas tienen agujeros ciegos.",
      "codeSnippet": "// Ejemplo: La ilusión del 100% Line Coverage\nexport function esElegiblePrestamo(edad: number, tieneHistorialLimpio: boolean): boolean {\n  if (edad >= 18 && tieneHistorialLimpio) {\n    return true;\n  }\n  return false;\n}\n\n// TEST DEFICIENTE (Da 100% Line Coverage, pero es débil):\n// Si un mutador cambia 'edad >= 18' a 'edad > 18', este test NO LO DETECTA para edad=18.\n// test('evaluar elegibilidad', () => {\n//   expect(esElegiblePrestamo(25, true)).toBe(true);\n//   expect(esElegiblePrestamo(15, false)).toBe(false);\n// });\n\n// SUITE ROBUSTA (Cubre los Boundary Values / Casos Límite):\nimport { describe, it, expect } from 'vitest';\n\ndescribe('esElegiblePrestamo (Cobertura de Ramas y Límites)', () => {\n  it('debe aprobar con exactamente 18 años e historial limpio (Caso Límite)', () => {\n    expect(esElegiblePrestamo(18, true)).toBe(true);\n  });\n\n  it('debe rechazar con 17 años e historial limpio', () => {\n    expect(esElegiblePrestamo(17, true)).toBe(false);\n  });\n\n  it('debe rechazar con 25 años pero sin historial limpio', () => {\n    expect(esElegiblePrestamo(25, false)).toBe(false);\n  });\n});",
      "quiz": [
        {
          "question": "¿Por qué un reporte de 100% de Cobertura de Líneas NO garantiza que el software esté libre de errores?",
          "options": [
            "Porque una prueba puede ejecutar todas las líneas sin realizar las aserciones necesarias para validar los valores de retorno y casos límite",
            "Porque las computadoras no entienden de porcentajes",
            "Porque la cobertura solo se mide en archivos CSS"
          ],
          "answerIndex": 0,
          "explanation": "El coverage solo mide qué líneas fueron leídas por el intérprete, no si los resultados fueron verificados correctamente con aserciones rigurosas."
        },
        {
          "question": "En Mutation Testing, ¿qué significa que un mutante haya 'sobrevivido' (Survived)?",
          "options": [
            "Que se introdujo un defecto en el código pero la suite de pruebas siguió pasando en verde, evidenciando un vacío de pruebas",
            "Que el código se optimizó automáticamente",
            "Que el test fue más rápido de lo esperado"
          ],
          "answerIndex": 0,
          "explanation": "Un mutante superviviente expone una debilidad en tus pruebas: el código de producción cambió su comportamiento y ningún test se dio cuenta."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: PRUEBAS DE INTEGRACIÓN Y BASES DE DATOS CON TESTCONTAINERS",
      "description": "Pruebas de integración sobre dependencias reales efímeras: levantando PostgreSQL y Redis con Testcontainers en Docker, migraciones y rollback.",
      "items": [
        "El límite entre prueba unitaria e integración: Verificando la interacción con I/O real.",
        "El anti-patrón de usar SQLite en memoria para probar código que en producción corre sobre PostgreSQL.",
        "Introducción a Testcontainers: Contenedores Docker efímeros gestionados por código de prueba.",
        "Ciclo de vida del contenedor de prueba: Inicio, ejecución de migraciones, tests y destrucción.",
        "Estrategias de aislamiento de datos: Transacciones Rollback vs Truncado de tablas (Database Cleaner).",
        "Testing de repositorios SQL con queries complejas (JOINs, índices, transacciones concurrentes).",
        "Manejo de variables de entorno dinámicas asignadas a puertos aleatorios de Docker.",
        "Optimización del tiempo de ejecución de pruebas de integración con contenedores reutilizables."
      ],
      "content": "## Por qué Testcontainers revolucionó las pruebas de integración\n\nHistóricamente, los equipos recurrían a dos caminos deficientes para probar persistencia:\n1. **Mocks de la Base de Datos:** Las pruebas verificaban cadenas SQL simuladas, pero fallaban en producción al usar funciones específicas de PostgreSQL (como `JSONB`, `ILIKE` o `pgvector`).\n2. **SQLite en Memoria:** Comportamiento de tipos diferente, no soporta concurrencia ni las extensiones reales de motores corporativos.\n\n**Testcontainers** permite que tus pruebas arranquen programáticamente un contenedor oficial de PostgreSQL, Redis o Kafka en Docker en un puerto efímero aleatorio, ejecuten las migraciones reales de Flyway/Prisma/Knex, corran las pruebas y destruyan el contenedor al finalizar.\n\n### Estrategia de Limpieza entre Tests\nPara no tener que reiniciar el contenedor en cada prueba (lo cual sería lentísimo):\n* Opción A: Envolver cada test en una **Transacción SQL** y hacer `ROLLBACK` en el `afterEach`.\n* Opción B: Ejecutar un script rápido de `TRUNCATE TABLE` sobre las tablas modificadas.",
      "codeSnippet": "// Ejemplo conceptual: Prueba de Integración con Testcontainers y PostgreSQL\nimport { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';\n// import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';\n// import { Client } from 'pg';\n\ndescribe('UsuarioRepository Integración Real', () => {\n  // let container: StartedPostgreSqlContainer;\n  // let client: Client;\n\n  beforeAll(async () => {\n    // 1. Levanta contenedor real de Postgres en Docker en puerto libre\n    // container = await new PostgreSqlContainer('postgres:16-alpine').start();\n    // client = new Client({ connectionString: container.getConnectionUri() });\n    // await client.connect();\n    // await client.query('CREATE TABLE usuarios (id SERIAL PRIMARY KEY, email TEXT UNIQUE);');\n  });\n\n  afterAll(async () => {\n    // await client.end();\n    // await container.stop();\n  });\n\n  it('debe rechazar emails duplicados con violación de restricción UNIQUE en PostgreSQL real', async () => {\n    // Insertar primero\n    // await client.query('INSERT INTO usuarios (email) VALUES ($1)', ['dev@quimisell.dev']);\n\n    // Verificar que Postgres lance la violación de unicidad 23505 real\n    // await expect(\n    //   client.query('INSERT INTO usuarios (email) VALUES ($1)', ['dev@quimisell.dev'])\n    // ).rejects.toThrow(/duplicate key value/);\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja de usar Testcontainers frente a bases de datos SQLite en memoria para pruebas de integración?",
          "options": [
            "Permite probar contra el mismo motor real de producción (ej. PostgreSQL oficial), soportando sus tipos, sintaxis específica y extensiones",
            "Es más rápido que las pruebas unitarias",
            "No requiere tener Docker instalado"
          ],
          "answerIndex": 0,
          "explanation": "SQLite en memoria no reproduce la semántica, tipos de datos (como JSONB o pgvector) ni el comportamiento de concurrencia de motores como PostgreSQL."
        },
        {
          "question": "¿Cómo se garantiza que las pruebas de integración sean independientes si comparten el mismo contenedor de base de datos?",
          "options": [
            "Limpiando los datos entre tests mediante Rollback transaccional o truncando tablas en el afterEach",
            "Esperando 5 minutos entre cada test",
            "Dejando que los datos se acumulen"
          ],
          "answerIndex": 0,
          "explanation": "El aislamiento se mantiene limpiando los datos generados después de cada prueba, asegurando que el siguiente test encuentre un estado limpio."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: TESTING DE APIS REST, SCHEMAS JSON Y CONTRACT TESTING (PACT)",
      "description": "Verificación de contratos y servicios HTTP: Supertest para endpoints, validación de esquemas con Zod/JSON Schema y Consumer-Driven Contract Testing con Pact.",
      "items": [
        "Anatomía de pruebas de APIs HTTP: Códigos de estado, cabeceras, payloads y tiempos de respuesta.",
        "Testing de endpoints Express/Fastify sin levantar servidores en puertos reales usando Supertest.",
        "Validación estricta de esquemas de respuesta con Zod o Ajv (JSON Schema validation).",
        "El problema del 'Integration Hell' en microservicios: Cambios inadvertidos en payloads compartidos.",
        "Consumer-Driven Contract Testing (CDCT) con Pact: El Consumidor define sus expectativas y el Proveedor las verifica.",
        "Mocking de servicios externos a nivel de red con MSW (Mock Service Worker).",
        "Manejo de autenticación, JWT y cookies de sesión en suites de prueba de APIs.",
        "Idempotencia de endpoints: Pruebas repetidas sobre métodos PUT y DELETE."
      ],
      "content": "## Pruebas de APIs y Contratos de Microservicios\n\nCuando una aplicación consta de múltiples microservicios o interactúa con frontends modernos, las pruebas tradicionales enfrentan un dilema:\n* Probar con servicios reales requiere entornos de staging masivos, lentos y propensos a caídas.\n* Probar con mocks estáticos genera contratos rotos en producción cuando el equipo del backend cambia el nombre de una propiedad.\n\n### Consumer-Driven Contract Testing (Pact)\nEn el enfoque **Pact**, el consumidor (frontend o servicio cliente) genera un archivo de contrato JSON con los requests que enviará y las respuestas mínimas que necesita. El proveedor (backend) ejecuta ese contrato contra su propia API en su pipeline de CI: si el backend cambia un campo requerido por el cliente, el build del backend se quiebra inmediatamente antes de tocar producción.",
      "codeSnippet": "// Ejemplo: Prueba de API con Supertest y validación con Zod\nimport request from 'supertest';\nimport { describe, it, expect } from 'vitest';\nimport { z } from 'zod';\n\n// Esquema de contrato esperado\nconst ProductoSchema = z.object({\n  id: z.string().uuid(),\n  nombre: z.string().min(1),\n  precio: z.number().positive(),\n  disponible: z.boolean(),\n});\n\n// App Express simulada\nimport express from 'express';\nconst app = express();\napp.use(express.json());\napp.get('/api/v1/productos/:id', (req, res) => {\n  res.status(200).json({\n    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',\n    nombre: 'Laptop Gamer 16GB',\n    precio: 1299.99,\n    disponible: true\n  });\n});\n\ndescribe('GET /api/v1/productos/:id', () => {\n  it('debe responder 200 OK y cumplir con el esquema estricto del contrato', async () => {\n    const res = await request(app)\n      .get('/api/v1/productos/a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')\n      .expect('Content-Type', /json/)\n      .expect(200);\n\n    // Validación formal del esquema (falla si el backend cambia tipos o nombres)\n    const validacion = ProductoSchema.safeParse(res.body);\n    expect(validacion.success).toBe(true);\n  });\n});",
      "quiz": [
        {
          "question": "¿Qué problema resuelve Consumer-Driven Contract Testing (Pact) en arquitecturas de microservicios?",
          "options": [
            "Evita rupturas de compatibilidad entre servicios sin requerir levantar toda la arquitectura de microservicios en un ambiente de pruebas",
            "Acelera la velocidad del procesador",
            "Reemplaza el uso de HTTPS"
          ],
          "answerIndex": 0,
          "explanation": "Pact valida que el proveedor cumple con las expectativas exactas del consumidor de forma desacoplada y asíncrona en los pipelines de CI."
        },
        {
          "question": "¿Por qué es una mala práctica validar respuestas de API únicamente verificando `res.status === 200`?",
          "options": [
            "Porque la API puede devolver 200 pero contener un payload vacío, campos nulos o estructuras rotas",
            "Porque el código 200 ya no se utiliza en HTTP",
            "Porque las pruebas se vuelven demasiado lentas"
          ],
          "answerIndex": 0,
          "explanation": "Validar solo el código de estado ignora la integridad de los datos. Se debe verificar la estructura del payload mediante validadores de esquemas como Zod."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: AUTOMATIZACIÓN END-TO-END (E2E) CON PLAYWRIGHT: ARQUITECTURA",
      "description": "La nueva generación de pruebas de navegador: arquitectura de Playwright, conexión directa vía CDP, ejecución headless multi-motor y auto-waiting inteligente.",
      "items": [
        "Historia de la automatización web: Limitaciones de Selenium WebDriver y Cypress.",
        "Arquitectura de Playwright: Control directo del navegador vía Chrome DevTools Protocol (CDP) sobre WebSockets.",
        "Soporte de motores nativos: Chromium, Firefox y WebKit (Safari real) sin emuladores.",
        "Concepto de Browser, BrowserContext (aislamiento absoluto estilo ventana de incógnito) y Page.",
        "Auto-Waiting Inteligente: Eliminación definitiva de esperas artificiales (`sleep`, `waitForTimeout`).",
        "Manejo de asincronía y aserciones Web-First (`await expect(locator).toBeVisible()`).",
        "Ejecución paralela masiva con Sharding en pipelines de CI/CD.",
        "Trazas de depuración con Playwright Trace Viewer: Inspección de DOM, red y capturas cuadro a cuadro."
      ],
      "content": "## Por qué Playwright lidera la industria E2E\n\nDurante años, las pruebas E2E fueron el dolor de cabeza de los equipos de desarrollo debido a su inestabilidad (**flakiness**). Selenium dependía de drivers intermediarios lentos (HTTP REST), mientras que Cypress ejecutaba código dentro del mismo iframe de la aplicación, limitando el control multi-pestaña y orígenes cruzados.\n\nPlaywright (desarrollado por Microsoft) resolvió esto comunicándose directamente con los motores del navegador a través de una conexión WebSocket persistente:\n\n1. **Aislamiento Ultrarrápido con BrowserContext:** En lugar de abrir un nuevo navegador para cada prueba (que consume segundos y gigabytes de RAM), Playwright abre un solo proceso de navegador y crea **Contextos de Navegador** en milisegundos, equivalentes a ventanas de incógnito aisladas con sus propias cookies y almacenamiento.\n2. **Auto-Waiting:** Antes de hacer clic en un elemento, Playwright verifica automáticamente que esté en el DOM, visible, estable (sin animaciones CSS en curso), habilitado y que reciba eventos.",
      "codeSnippet": "// Ejemplo: Estructura básica de una prueba con Playwright\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Portal de Clientes QuimiSell', () => {\n  test('debe permitir iniciar sesión y redirigir al panel principal', async ({ page }) => {\n    // 1. Navegación\n    await page.goto('https://app.quimisell.dev/login');\n\n    // 2. Interacción con Auto-Waiting nativo\n    await page.getByLabel('Correo electrónico').fill('estudiante@quimisell.dev');\n    await page.getByLabel('Contraseña').fill('SecretaSegura123!');\n    await page.getByRole('button', { name: 'Ingresar a la Plataforma' }).click();\n\n    // 3. Aserción Web-First (espera automáticamente hasta 5s a que aparezca)\n    const saludoBienvenida = page.getByRole('heading', { name: 'Hola, Estudiante' });\n    await expect(saludoBienvenida).toBeVisible();\n\n    // Validar cambio de URL\n    await expect(page).toHaveURL(/.*dashboard/);\n  });\n});",
      "quiz": [
        {
          "question": "¿Cómo resuelve Playwright la inestabilidad típica de las pruebas E2E causada por tiempos de carga variables?",
          "options": [
            "Mediante Auto-Waiting integrado: espera automáticamente a que el elemento sea visible, interactuable y deje de moverse antes de actuar",
            "Agregando `sleep(10)` antes de cada clic",
            "Ejecutando las pruebas únicamente en navegadores de texto"
          ],
          "answerIndex": 0,
          "explanation": "Playwright elimina la necesidad de esperas manuales arbitrarias porque comprueba que el elemento cumpla todas las condiciones de accionabilidad antes de interactuar."
        },
        {
          "question": "¿Qué representa un `BrowserContext` en Playwright?",
          "options": [
            "Una sesión de navegación completamente aislada (similar a una ventana de incógnito) que comparte el mismo proceso de navegador pero tiene cookies y almacenamiento independientes",
            "Un archivo de configuración en disco",
            "El código fuente de Chromium"
          ],
          "answerIndex": 0,
          "explanation": "BrowserContext permite ejecutar cientos de pruebas aisladas en milisegundos sin la sobrecarga de reiniciar todo el navegador entre cada una."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: PAGE OBJECT MODEL (POM) Y SELECTORES RESILIENTES EN PLAYWRIGHT",
      "description": "Diseño de suites E2E mantenibles: el patrón Page Object Model (POM), localizadores orientados a la accesibilidad (`getByRole`, `getByLabel`) y antipatrones de selectores.",
      "items": [
        "El anti-patrón de selectores XPath y CSS frágiles (`div.card > div:nth-child(3) > button`).",
        "Localizadores Web-First de Playwright: `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`, `getByTestId`.",
        "Prioridad de selección según las prácticas de Testing Library y accesibilidad (a11y).",
        "El Patrón Page Object Model (POM): Encapsulación de elementos e interacciones de página en clases dedicadas.",
        "Beneficios de POM: Reducción drástica de duplicación y cambios en un único punto ante rediseños de UI.",
        "Aserciones dentro del Page Object vs en el archivo de Test (Separación de responsabilidades).",
        "Fixtures personalizadas en Playwright para inyectar Page Objects listos para usar.",
        "Refactorización práctica de un flujo complejo de checkout aplicando POM."
      ],
      "content": "## Page Object Model (POM) y Selectores Resilientes\n\nUno de los mayores errores en proyectos de automatización es esparcir selectores CSS directos en decenas de archivos de prueba. Cuando los diseñadores cambian un `class=\"btn-primary\"` por `class=\"button-blue\"`, cientos de pruebas fallan simultáneamente.\n\n### Principio de Selectores Resilientes\nPlaywright promueve seleccionar elementos tal como los percibe el usuario o las tecnologías de asistencia:\n1. `page.getByRole('button', { name: 'Comprar' })` ✅ (Resiliente y promueve accesibilidad)\n2. `page.getByLabel('Nombre completo')` ✅\n3. `page.getByTestId('checkout-button')` ✅ (Para componentes altamente dinámicos)\n4. `page.locator('div > button.bg-indigo-600')` ❌ (Frágil: se rompe con cualquier cambio cosmético de Tailwind)\n\n### El Patrón Page Object Model (POM)\nEncapsula la estructura HTML de una página en una clase TypeScript. Los tests solo invocan métodos de negocio de alto nivel (`loginPage.iniciarSesion('user', 'pass')`).",
      "codeSnippet": "// 1. Page Object (LoginPage.ts)\nimport { type Page, type Locator, expect } from '@playwright/test';\n\nexport class LoginPage {\n  readonly page: Page;\n  readonly emailInput: Locator;\n  readonly passwordInput: Locator;\n  readonly submitButton: Locator;\n  readonly errorMessage: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.emailInput = page.getByLabel('Correo electrónico');\n    this.passwordInput = page.getByLabel('Contraseña');\n    this.submitButton = page.getByRole('button', { name: 'Iniciar Sesión' });\n    this.errorMessage = page.getByRole('alert');\n  }\n\n  async irA(): Promise<void> {\n    await this.page.goto('/login');\n  }\n\n  async iniciarSesion(email: string, pass: string): Promise<void> {\n    await this.emailInput.fill(email);\n    await this.passwordInput.fill(pass);\n    await this.submitButton.click();\n  }\n}\n\n// 2. Archivo de Prueba (login.spec.ts)\n// import { test, expect } from '@playwright/test';\n// import { LoginPage } from './LoginPage';\n\n// test('debe mostrar error con credenciales incorrectas', async ({ page }) => {\n//   const loginPage = new LoginPage(page);\n//   await loginPage.irA();\n//   await loginPage.iniciarSesion('usuario@invalido.com', 'clave_falsa');\n//   await expect(loginPage.errorMessage).toContainText('Credenciales no válidas');\n// });",
      "quiz": [
        {
          "question": "¿Por qué se prefiere `page.getByRole('button', { name: 'Pagar' })` sobre `page.locator('.btn-checkout')`?",
          "options": [
            "Porque evalúa el elemento tal como lo percibe el usuario y el árbol de accesibilidad, resistiendo cambios de clases CSS o framework visual",
            "Porque corre 10 veces más rápido en la CPU",
            "Porque no requiere async/await"
          ],
          "answerIndex": 0,
          "explanation": "Los localizadores de accesibilidad imitan la interacción humana real y no se rompen cuando los desarrolladores cambian clases de Tailwind o CSS."
        },
        {
          "question": "¿Cuál es el propósito central del patrón Page Object Model (POM)?",
          "options": [
            "Encapsular los selectores e interacciones de una pantalla en una clase reutilizable para desacoplar las pruebas de la estructura del DOM",
            "Aumentar el número de archivos en el repositorio",
            "Convertir el código TypeScript a Java"
          ],
          "answerIndex": 0,
          "explanation": "POM permite que si la estructura visual cambia, solo se actualice la clase del Page Object en un solo lugar en vez de en docenas de tests."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: TESTING VISUAL Y DETECCIÓN AUTOMÁTICA DE REGRESIONES DE UI",
      "description": "Pruebas de regresión visual: capturas de pantalla de referencia (Gold Masters), umbrales de tolerancia de píxeles (`maxDiffPixelRatio`) y enmascaramiento dinámico.",
      "items": [
        "El límite del testing funcional: Tests verdes con interfaces visualmente destruidas por CSS.",
        "Cómo funciona el Visual Regression Testing: Comparación de imágenes píxel a píxel contra una captura dorada (Golden Master).",
        "Soporte nativo en Playwright: `expect(page).toHaveScreenshot()` y `expect(locator).toHaveScreenshot()`.",
        "Manejo de variabilidad ambiental: Fuentes tipográficas, renderizado de GPU y diferencias entre sistemas operativos.",
        "Tolerancia de diferencias con `maxDiffPixelRatio` y umbrales de color.",
        "Técnicas de enmascaramiento (`mask: [page.locator('.avatar')]`) para ignorar contenido dinámico (fechas, fotos aleatorias).",
        "Congelamiento de animaciones CSS (`animations: 'disabled'`) para garantizar determinismo visual.",
        "Flujo de trabajo para actualizar capturas cuando hay rediseños intencionados (`npx playwright test --update-snapshots`)."
      ],
      "content": "## Por qué las pruebas visuales son indispensables\n\nUna prueba funcional puede verificar que un botón existe en el DOM, que está habilitado y que al hacer clic se ejecuta una acción. Sin embargo, si una regla CSS errónea colocó el botón debajo del pie de página con opacidad cero o texto negro sobre fondo negro, el usuario humano no podrá usarlo a pesar de tener una suite funcional con 100% de éxito.\n\n### Pruebas de Regresión Visual con Playwright\nPlaywright toma una captura de pantalla y la compara contra una imagen de referencia previa (**Golden Master**):\n* Si un solo píxel no coincide por encima del umbral permitido, la prueba falla y genera una imagen diferencial (**Diff Image**) resaltando los cambios en color magenta.\n\n### Buenas Prácticas para Determinismo Visual\n1. **Desactivar Animaciones:** Usar `animations: 'disabled'` para evitar capturar frames intermedios de transiciones CSS.\n2. **Enmascarar Elementos Dinámicos:** Usar `mask: [page.locator('.timestamp')]` para tapar fechas, timestamps o avatares que cambian en cada ejecución.",
      "codeSnippet": "// Ejemplo: Prueba de Regresión Visual con Enmascaramiento y Tolerancia\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Catálogo de Productos - Regresión Visual', () => {\n  test('la tarjeta de producto debe coincidir con el diseño aprobado', async ({ page }) => {\n    await page.goto('/tienda');\n\n    const tarjeta = page.getByTestId('tarjeta-producto-destacado');\n    await expect(tarjeta).toBeVisible();\n\n    // Comparación visual contra snapshot guardado\n    await expect(tarjeta).toHaveScreenshot('tarjeta-producto.png', {\n      // Ocultar fecha de promoción que cambia cada minuto\n      mask: [tarjeta.getByTestId('contador-promocion')],\n      // Desactivar animaciones de hover y carga\n      animations: 'disabled',\n      // Tolerancia de 0.2% de diferencia de píxeles por renderizado de fuentes\n      maxDiffPixelRatio: 0.002,\n    });\n  });\n});",
      "quiz": [
        {
          "question": "¿Por qué es crucial deshabilitar las animaciones CSS durante una prueba de regresión visual?",
          "options": [
            "Porque las animaciones capturan frames en momentos de tiempo ligeramente distintos, generando falsos positivos por desalineación de píxeles",
            "Porque el navegador se apaga si hay animaciones",
            "Porque Playwright no soporta CSS"
          ],
          "answerIndex": 0,
          "explanation": "El renderizado de transiciones en momentos distintos produce diferencias de píxeles espurias. Deshabilitar animaciones garantiza capturas deterministas."
        },
        {
          "question": "¿Qué función cumple el parámetro `mask` en una aserción de captura de pantalla?",
          "options": [
            "Cubre elementos dinámicos (como fechas, nombres aleatorios o avatares) con un bloque sólido para que no causen fallas al cambiar",
            "Elimina el fondo de la página web",
            "Oculta contraseñas en el código fuente"
          ],
          "answerIndex": 0,
          "explanation": "`mask` tapa zonas dinámicas de la UI con un color neutro, permitiendo comparar el resto de la interfaz sin falsas alertas."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: PRUEBAS DE CARGA Y ESTRÉS CON K6: PROTOCOLOS Y USUARIOS VIRTUALES",
      "description": "Ingeniería de rendimiento moderna con Grafana k6: motor Go, runtime JS, modelado de Usuarios Virtuales (VUs), escenarios de carga y SLAs.",
      "items": [
        "Diferencia entre Pruebas Funcionales y Pruebas No Funcionales de Rendimiento.",
        "Arquitectura de k6: Escrito en Go para máximo rendimiento de red con scripts en JavaScript ES6.",
        "Tipos de pruebas de rendimiento: Smoke Test, Load Test, Stress Test, Spike Test y Soak Test (Resistencia).",
        "Concepto de VUs (Virtual Users) y bucle de iteración.",
        "Modelado de rampas de tráfico (`stages` con incremento gradual de usuarios).",
        "Métricas nativas de k6: `http_req_duration`, `http_req_failed`, `vus`, `iterations`.",
        "Aserciones funcionales en k6 mediante `check()` y organización con `group()`.",
        "Definición estricta de SLAs en código con `thresholds` para fallar el pipeline si se degrada el servicio."
      ],
      "content": "## Pruebas de Carga con k6\n\nMuchas aplicaciones colapsan el primer día de lanzamiento no por errores funcionales en el código, sino porque nadie probó el comportamiento del servidor cuando 5,000 usuarios concurrentes intentan pagar al mismo tiempo.\n\n**k6** es una herramienta open-source moderna desarrollada en Go que permite definir pruebas de carga como código en JavaScript:\n* No utiliza NodeJS (lo que consumiría demasiada memoria); tiene su propio motor de ejecución ultraoptimizado.\n* Una sola máquina estándar puede generar miles de solicitudes HTTP por segundo con bajo consumo de CPU.\n\n### Tipos de Pruebas de Carga\n1. **Smoke Test:** 1-5 usuarios para verificar que los scripts funcionen sin errores antes de la carga real.\n2. **Load Test:** Evalúa el rendimiento bajo el tráfico normal esperado por el negocio.\n3. **Stress Test:** Aumenta la carga más allá del límite normal para identificar el **Punto de Quiebre (Breaking Point)** del sistema.\n4. **Spike Test:** Simula una avalancha repentina de tráfico (ej. una notificación push o campaña publicitaria masiva).\n5. **Soak Test:** Carga moderada durante horas continuas para detectar **Fugas de Memoria (Memory Leaks)** y saturación de conexiones de base de datos.",
      "codeSnippet": "// Ejemplo: Script de Carga k6 con Rampas y Thresholds\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  // Escenario de Carga: Rampa de subida, meseta y rampa de bajada\n  stages: [\n    { duration: '30s', target: 50 },  // Subir a 50 usuarios en 30s\n    { duration: '1m', target: 50 },   // Mantener 50 usuarios durante 1m\n    { duration: '20s', target: 0 },   // Bajar a 0 usuarios\n  ],\n  // Umbrales SLA estrictos (si no se cumplen, k6 sale con exit code != 0)\n  thresholds: {\n    // El 95% de las peticiones debe responder en menos de 200ms\n    http_req_duration: ['p(95)<200'],\n    // La tasa de error debe ser inferior al 1%\n    http_req_failed: ['rate<0.01'],\n  },\n};\n\nexport default function () {\n  const res = http.get('https://api.quimisell.dev/productos');\n\n  // Verificación funcional rápida\n  check(res, {\n    'status es 200': (r) => r.status === 200,\n    'tiempo < 500ms': (r) => r.timings.duration < 500,\n  });\n\n  // Pausa humana realista entre peticiones (1 segundo)\n  sleep(1);\n}",
      "quiz": [
        {
          "question": "¿Cuál es el objetivo principal de una prueba de tipo 'Stress Test' en k6?",
          "options": [
            "Aumentar el tráfico de usuarios más allá del límite esperado para determinar el punto de quiebre y cómo se recupera el sistema",
            "Verificar si la tipografía del botón es bonita",
            "Validar el inicio de sesión de un único usuario"
          ],
          "answerIndex": 0,
          "explanation": "El Stress Test busca empujar al sistema hasta su límite para entender qué componente colapsa primero (CPU, pool de BD o memoria) y si el sistema se recupera elegantemente."
        },
        {
          "question": "¿Qué efecto tiene definir `http_req_duration: ['p(95)<200']` en los `thresholds` de k6?",
          "options": [
            "Hace que la prueba falle si el 95% de las peticiones tarda más de 200 milisegundos en completarse",
            "Garantiza que el 100% de los usuarios sean hackers",
            "Cancela la prueba inmediatamente en el segundo 95"
          ],
          "answerIndex": 0,
          "explanation": "Establece un criterio formal de aceptación: el percentil 95 debe estar por debajo de 200ms; si se supera, el pipeline de CI se interrumpe."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: ANÁLISIS DE RENDIMIENTO: LATENCIAS PERCENTILES (P90/P95/P99) Y SLOS",
      "description": "Estadística rigurosa de rendimiento: la falacia de los promedios, la cola larga (Long-tail latency), SLAs, SLOs, SLIs y diagnóstico de fugas de memoria con Soak Testing.",
      "items": [
        "Por qué el tiempo de respuesta promedio (Mean/Average) es engañoso y peligroso en sistemas distribuidos.",
        "Concepto de Percentiles: p50 (mediana), p90, p95 y p99.",
        "El fenómeno de la 'Cola Larga' (Long-tail latency) y su impacto en microservicios conectados en serie.",
        "Definición formal: SLA (Service Level Agreement), SLO (Service Level Objective) y SLI (Service Level Indicator).",
        "Métricas del sistema a monitorear durante una prueba de carga: CPU, Memoria, I/O Wait, Conexiones activas de BD.",
        "Diagnóstico de Fugas de Memoria (Memory Leaks) mediante Soak Testing continuo.",
        "Efectos de la Recolección de Basura (Garbage Collection Pauses) en los p99 de Java y Node.js.",
        "Correlación entre gráficas de carga y logs de saturación de sockets."
      ],
      "content": "## La Falacia del Promedio en Sistemas Distribuidos\n\nImagina un servicio que atiende 100 peticiones:\n* 99 peticiones responden en 10 milisegundos.\n* 1 petición tarda 10,000 milisegundos (10 segundos).\n\nEl promedio reportará ~109 milisegundos, lo cual parece aceptable en un informe superficial. Sin embargo, para 1 de cada 100 usuarios el sistema se sintió congelado. En una arquitectura de microservicios donde una página hace 50 llamadas HTTP internas, la probabilidad de que un usuario experimente una llamada de la cola lenta supera el 40%.\n\n### Jerarquía SRE: SLI vs SLO vs SLA\n* **SLI (Indicator):** La métrica cruda medida en tiempo real (ej. *Latencia de respuesta de `/checkout`*).\n* **SLO (Objective):** La meta interna del equipo de ingeniería (ej. *El 99% de las peticiones debe responder en < 300ms durante 30 días*).\n* **SLA (Agreement):** El compromiso contractual con clientes con penalizaciones económicas por incumplimiento (ej. *Disponibilidad ≥ 99.9% o reembolso del 10% del servicio*).",
      "codeSnippet": "// Ejemplo: Validación de SLA/SLO con Percentiles en k6\nimport http from 'k6/http';\nimport { Trend } from 'k6/metrics';\n\n// Métrica personalizada para monitorear latencia del endpoint de Checkout\nconst latenciaCheckout = new Trend('latencia_checkout');\n\nexport const options = {\n  vus: 100,\n  duration: '2m',\n  thresholds: {\n    // SLO: El percentil 90 debe ser < 180ms y el percentil 99 debe ser < 500ms\n    'latencia_checkout': ['p(90)<180', 'p(99)<500'],\n    // SLA de disponibilidad: Menos de 0.1% de errores en peticiones\n    http_req_failed: ['rate<0.001'],\n  },\n};\n\nexport default function () {\n  const res = http.post('https://api.quimisell.dev/checkout', JSON.stringify({\n    items: [{ id: 'prod_1', cantidad: 2 }],\n  }), {\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  // Registrar la duración en nuestra métrica personalizada\n  latenciaCheckout.add(res.timings.duration);\n}",
      "quiz": [
        {
          "question": "¿Por qué los ingenieros de calidad confían en los percentiles (p95, p99) en lugar del promedio para evaluar la latencia?",
          "options": [
            "Porque el promedio oculta a los usuarios afectados por la 'cola larga' de solicitudes extremadamente lentas",
            "Porque los percentiles son más fáciles de sumar a mano",
            "Porque los servidores no pueden calcular promedios"
          ],
          "answerIndex": 0,
          "explanation": "Los percentiles revelan con exactitud qué experiencia tienen los usuarios más desfavorecidos (el peor 5% o 1%), exponiendo bloqueos que el promedio enmascara."
        },
        {
          "question": "¿Cuál es la diferencia entre un SLO (Service Level Objective) y un SLA (Service Level Agreement)?",
          "options": [
            "El SLO es una meta técnica interna del equipo; el SLA es un acuerdo legal externo con penalizaciones comerciales si se incumple",
            "El SLO es para pruebas unitarias y el SLA para pruebas de hardware",
            "No existe diferencia, son siglas intercambiables"
          ],
          "answerIndex": 0,
          "explanation": "El SLO es la brújula operativa de ingeniería para prevenir incidentes antes de violar el contrato legal formal (SLA) con los clientes."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: PROPERTY-BASED TESTING Y FUZZING CON FAST-CHECK Y HYPOTHESIS",
      "description": "Pruebas basadas en propiedades: superando los tests con ejemplos fijos, generación pseudoaleatoria masiva (Arbitraries), invariantes y Shrinking.",
      "items": [
        "La limitación de las pruebas basadas en ejemplos: Probamos lo que imaginamos, pero los bugs viven en lo que olvidamos.",
        "Fundamentos de Property-Based Testing (PBT): Formulación de invariantes en lugar de valores fijos.",
        "Generadores de datos pseudoaleatorios (Arbitraries) en fast-check (TypeScript) y Hypothesis (Python).",
        "Invariantes universales comunes: Idempotencia, Reversibilidad (Round-trip), Simetría y Monotonía.",
        "El proceso de Shrinking (Reducción): Cómo la librería reduce un caso de falla de 1,000 elementos al caso mínimo reproducible de 1 elemento.",
        "Fuzzing Testing: Inyección de datos aleatorios corruptos o extremos para encontrar vulnerabilidades y caídas.",
        "Blindaje de algoritmos de ordenamiento, serialización y cálculo financiero con PBT.",
        "Detección de edge cases no considerados por la Inteligencia Artificial al generar código."
      ],
      "content": "## Property-Based Testing (PBT)\n\nEn una prueba tradicional basada en ejemplos, tú eliges las entradas:\n```ts\nexpect(sumar(2, 3)).toBe(5);\n```\n¿Pero qué pasa si alguien pasa números negativos gigantes, `NaN`, `-0`, `Number.MAX_SAFE_INTEGER + 1` o flotantes de precisión variable?\n\nEn **Property-Based Testing**, tú no defines las entradas; defines un **invariante universal** (una propiedad que debe cumplirse para CUALQUIER entrada válida) y la librería genera cientos o miles de combinaciones pseudoaleatorias para intentar romper tu código:\n\n### Invariantes Clásicos\n1. **Round-Trip (Reversibilidad):** `deserializar(serializar(objeto)) == objeto`\n2. **Idempotencia:** `ordenar(ordenar(lista)) == ordenar(lista)`\n3. **Invariante de Tamaño:** `longitud(filtrar(lista)) <= longitud(lista)`\n\n### Shrinking\nCuando fast-check encuentra una entrada que hace fallar el código (por ejemplo, un arreglo de 200 elementos complejos), automáticamente ejecuta un algoritmo de **Shrinking** para simplificar la entrada al caso mínimo irreductible (por ejemplo: `[0, -1]`), entregándote el bug exacto en bandeja de plata.",
      "codeSnippet": "// Ejemplo: Property-Based Testing con fast-check en TypeScript\nimport { describe, it } from 'vitest';\nimport fc from 'fast-check';\n\n// Función bajo prueba: Codificador y decodificador de URL\nfunction encodeParam(str: string): string {\n  return encodeURIComponent(str);\n}\nfunction decodeParam(str: string): string {\n  return decodeURIComponent(str);\n}\n\ndescribe('Property-Based Testing con fast-check', () => {\n  it('la operación de codificar y decodificar debe ser reversible para cualquier cadena UTF-8 (Round-Trip)', () => {\n    fc.assert(\n      fc.property(fc.fullUnicodeString(), (textoAleatorio) => {\n        // Invariante: decode(encode(x)) === x\n        const resultado = decodeParam(encodeParam(textoAleatorio));\n        return resultado === textoAleatorio;\n      }),\n      { numRuns: 500 } // Ejecutar 500 pruebas con cadenas extremas (emojis, carácteres nulos, etc.)\n    );\n  });\n});",
      "quiz": [
        {
          "question": "¿En qué consiste la técnica de 'Shrinking' en Property-Based Testing?",
          "options": [
            "En reducir automáticamente la entrada compleja que hizo fallar la prueba al caso de prueba más pequeño y simple posible para facilitar el debugging",
            "En comprimir las imágenes de la aplicación",
            "En hacer que el código fuente ocupe menos líneas"
          ],
          "answerIndex": 0,
          "explanation": "El shrinking toma una entrada fallida gigantesca y la reduce sistemáticamente hasta encontrar el contraejemplo mínimo reproducible."
        },
        {
          "question": "¿Cuál es un ejemplo clásico de una propiedad de tipo 'Round-Trip'?",
          "options": [
            "Verificar que convertir un objeto a JSON y luego parsear ese JSON devuelva un objeto equivalente al original",
            "Verificar que el servidor responda en menos de 100ms",
            "Verificar que un botón sea azul"
          ],
          "answerIndex": 0,
          "explanation": "El patrón Round-trip prueba que una transformación y su inversa preservan intacta la información original para cualquier entrada generada."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: MUTATION TESTING AVANZADO: AUDITANDO LA EFICACIA DE LAS PRUEBAS",
      "description": "Evaluando la calidad real de tu suite de pruebas con Stryker: mutadores de código, estados de mutantes (Killed, Survived, Timeout) y el Mutation Score.",
      "items": [
        "La pregunta fundamental de QA: ¿Quién vigila a los vigilantes? (Testing your tests).",
        "Mecanismo de acción del Mutation Testing: Inyección de operadores de mutación sintácticos.",
        "Tipos de operadores de mutación: Aritméticos (`+` a `-`), Condicionales (`===` a `!==`), Booleanos (`true` a `false`), Bloques vacíos.",
        "Estados de un mutante: Killed (cazado), Survived (sobreviviente), Timeout (bucle infinito provocado), Error de compilación.",
        "Cálculo del Mutation Score: $\\frac{\\text{Mutantes Cazados}}{\\text{Mutantes Totales}} \\times 100$.",
        "Configuración práctica de Stryker Mutator en proyectos TypeScript / JavaScript.",
        "Optimización de tiempos de ejecución: Selección inteligente de tests con cobertura previa.",
        "Análisis de reportes HTML de mutantes y corrección de aserciones insuficientes."
      ],
      "content": "## Por qué el Mutation Testing es el estándar de oro de QA\n\nTener un 95% de Code Coverage en tu pipeline da una falsa sensación de seguridad si las pruebas no validan los resultados correctos. El **Mutation Testing** somete a tu suite a un ataque biológico simulado.\n\n### Operadores de Mutación Típicos de Stryker\n| Código Original | Código Mutado | Operador |\n|---|---|---|\n| `if (x > 0)` | `if (x >= 0)` | Operador Relacional |\n| `return a + b;` | `return a - b;` | Operador Aritmético |\n| `habilitado = true;` | `habilitado = false;` | Asignación Booleana |\n| `pedido.calcularTotal()` | `/* eliminado */` | Eliminación de Declaración |\n\n### El Ciclo de Vida del Mutante\n1. Stryker clona tu código en memoria e inyecta una sola mutación.\n2. Ejecuta tu suite de pruebas existente:\n   * **Mutante Cazado (Killed):** Al menos un test falló (Rojo). ¡Excelente! Tu suite detectó la corrupción de código.\n   * **Mutante Sobreviviente (Survived):** Todos tus tests pasaron en Verde. ¡Alerta! Tu suite no es capaz de detectar ese error de lógica en producción.",
      "codeSnippet": "// Ejemplo: Código vulnerable a mutación y cómo atraparlo\n// Código de Producción\nexport function calcularComision(monto: number): number {\n  if (monto > 1000) {\n    return monto * 0.05; // 5% de comisión\n  }\n  return 0;\n}\n\n// TEST DEFICIENTE:\n// test('comisiones altas', () => {\n//   expect(calcularComision(2000)).toBe(100);\n// });\n// Si Stryker muta 'monto > 1000' por 'monto >= 1000', el test sigue pasando (SOBREVIVE).\n\n// TEST ROBUSTO (Mata la mutación con valores límite):\nimport { describe, it, expect } from 'vitest';\n\ndescribe('calcularComision (A prueba de mutantes)', () => {\n  it('debe devolver 0 para exactamente 1000 de monto (Límite estricto)', () => {\n    // Si un mutador cambia '>' por '>=', este test fallará inmediatamente matando al mutante\n    expect(calcularComision(1000)).toBe(0);\n  });\n\n  it('debe calcular 5% para montos estrictamente superiores a 1000', () => {\n    expect(calcularComision(1001)).toBeCloseTo(50.05);\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la meta que persigue un Ingeniero de QA al ejecutar Stryker (Mutation Testing)?",
          "options": [
            "Que el 100% (o el mayor porcentaje posible) de los mutantes inyectados sean cazados (Killed) por la suite de pruebas",
            "Que todos los mutantes sobrevivan intactos",
            "Acelerar la velocidad del compilador"
          ],
          "answerIndex": 0,
          "explanation": "Que los mutantes sean cazados significa que tus pruebas son sensibles a cualquier cambio en la lógica del código, garantizando alta confiabilidad."
        },
        {
          "question": "Si una prueba pasa en verde tanto con el código correcto como con una mutación que invirtió la condición, ¿qué demuestra esto?",
          "options": [
            "Que la prueba es débil y no está evaluando adecuadamente los casos límite o las aserciones esperadas",
            "Que el código es perfecto y no puede fallar",
            "Que el procesador está sobrecalentado"
          ],
          "answerIndex": 0,
          "explanation": "Un mutante sobreviviente es evidencia matemática de que tu suite de pruebas tiene un punto ciego que permitiría pasar un bug a producción."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: PRUEBAS DE SEGURIDAD EN QA: DAST AUTOMATIZADO CON OWASP ZAP",
      "description": "Integrando seguridad ofensiva en QA: escaneo dinámico de aplicaciones (DAST) con OWASP ZAP, verificación automática del OWASP Top 10 y cabeceras de seguridad.",
      "items": [
        "La convergencia entre QA y Ciberseguridad: DevSecOps en la fase de pruebas.",
        "Diferencia entre SAST (código estático) y DAST (aplicación en ejecución activa).",
        "Introducción a OWASP ZAP (Zed Attack Proxy): Escaneo pasivo y activo automatizado.",
        "Detección de vulnerabilidades del OWASP Top 10: Inyecciones SQL, Cross-Site Scripting (XSS), CSRF e IDOR.",
        "Verificación de cabeceras HTTP de seguridad obligatorias: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options.",
        "Ejecución de ZAP Baseline Scan en contenedores Docker contra entornos de staging.",
        "Generación de reportes de vulnerabilidad (Alertas Altas, Medias, Bajas e Informativas).",
        "Configuración de Quality Gates de seguridad en el pipeline de CI."
      ],
      "content": "## Pruebas de Seguridad Dinámicas (DAST) en QA\n\nEl Aseguramiento de Calidad no solo consiste en verificar que el botón funcione, sino en garantizar que el sistema resista ataques maliciosos sin comprometer los datos de los usuarios.\n\n### SAST vs DAST\n* **SAST (Static Application Security Testing):** Analiza el código fuente en reposo buscando patrones peligrosos (como Semgrep o SonarQube).\n* **DAST (Dynamic Application Security Testing):** Ataca la aplicación web en ejecución desde el exterior como lo haría un adversario real (sin conocer el código interno), enviando payloads maliciosos a través de formularios, headers y parámetros de URL.\n\n### Automatización con OWASP ZAP Baseline Scan\nOWASP ZAP se ejecuta de forma no intrusiva en el pipeline de CI analizando el tráfico generado por las pruebas E2E de Playwright o mediante un spider que recorre la aplicación. Si detecta campos vulnerables a XSS reflejado o ausencia de cabeceras de protección, rompe el build inmediatamente.",
      "codeSnippet": "# Ejemplo: Ejecución de OWASP ZAP Baseline Scan en GitHub Actions / Docker\n# docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \\\n#   -t https://staging.quimisell.dev \\\n#   -r reporte_seguridad.html \\\n#   -I\n\n# Verificación de Cabeceras de Seguridad con Vitest & Supertest\nimport request from 'supertest';\nimport { describe, it, expect } from 'vitest';\nimport app from '../src/app';\n\ndescribe('Auditoría de Seguridad HTTP en QA', () => {\n  it('debe incluir cabeceras de seguridad estrictas en todas las respuestas', async () => {\n    const res = await request(app).get('/');\n\n    // Validación de cabeceras de protección OWASP\n    expect(res.headers['strict-transport-security']).toBeDefined();\n    expect(res.headers['x-content-type-options']).toBe('nosniff');\n    expect(res.headers['x-frame-options']).toMatch(/DENY|SAMEORIGIN/);\n    expect(res.headers['content-security-policy']).toBeDefined();\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia fundamental entre una prueba de seguridad SAST y una DAST?",
          "options": [
            "SAST analiza el código fuente estático sin ejecutarlo; DAST prueba la aplicación en ejecución activa atacando sus endpoints y formularios desde el exterior",
            "SAST se hace con lápiz y papel; DAST requiere un supercomputador",
            "No hay diferencia técnica"
          ],
          "answerIndex": 0,
          "explanation": "SAST busca fallas en el texto del código; DAST interactúa con la aplicación desplegada evaluando cómo responde el servidor a ataques reales."
        },
        {
          "question": "¿Por qué las suites de QA deben verificar la presencia de la cabecera `Strict-Transport-Security` (HSTS)?",
          "options": [
            "Para forzar que el navegador se comunique exclusivamente mediante HTTPS seguro, previniendo ataques de degradación de protocolo y Man-in-the-Middle",
            "Para acelerar la conexión WiFi",
            "Para permitir contraseñas cortas"
          ],
          "answerIndex": 0,
          "explanation": "HSTS obliga al navegador a usar siempre conexiones cifradas TLS, neutralizando ataques que intentan degradar la conexión a HTTP no seguro."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: TESTING DE MICROSERVICIOS, EVENT-DRIVEN Y FALLAS DE RED",
      "description": "Pruebas de arquitecturas distribuidas: consumidores y productores de eventos (Kafka/RabbitMQ), validación de idempotencia y simulación de fallas de red con Toxiproxy.",
      "items": [
        "Los desafíos únicos de QA en sistemas distribuidos y orientados a eventos (EDA).",
        "Testing de Productores y Consumidores de mensajes (Kafka, RabbitMQ, AWS SQS).",
        "Validación estricta de Idempotencia: Procesamiento seguro de mensajes duplicados (At-Least-Once Delivery).",
        "Manejo de Dead Letter Queues (DLQ) y pruebas de reintentos ante fallas no recuperables.",
        "Simulación de condiciones de red degradadas con Toxiproxy: Latencia variable, pérdida de paquetes y timeouts.",
        "Pruebas de Partición de Red (Split-brain) y consistencia eventual.",
        "Alineación de esquemas de eventos con Apache Avro o Protocol Buffers.",
        "Estrategias de trazabilidad distribuida con Correlation IDs en logs de prueba."
      ],
      "content": "## Pruebas en Sistemas Dirigidos por Eventos (Event-Driven)\n\nEn una arquitectura de microservicios con colas de mensajes (como Kafka o RabbitMQ), las garantías de entrega suelen ser **At-Least-Once (Al menos una vez)**. Esto significa que debido a reintentos de red, un mismo mensaje de pago puede llegar 2 o 3 veces al microservicio de facturación.\n\n### La Regla de Oro: Idempotencia Obligatoria\nUna prueba de calidad indispensable consiste en enviar el mismo evento duplicado múltiples veces y comprobar que:\n1. El estado final del sistema es exactamente el mismo que si se hubiera procesado una sola vez.\n2. No se duplican cobros, registros de base de datos ni notificaciones.\n\n### Simulación de Fallas con Toxiproxy\nToxiproxy (desarrollado por Shopify) actúa como un proxy programable entre tus servicios y sus dependencias. Permite inyectar tóxicos en tiempo de prueba:\n* 1000ms de latencia artificial.\n* 10% de pérdida de paquetes TCP.\n* Cierre inesperado de conexiones en medio de una transacción.",
      "codeSnippet": "// Ejemplo: Prueba de Idempotencia en Consumidor de Eventos\nimport { describe, it, expect, beforeEach } from 'vitest';\n\nclass ProcesadorPagoEventos {\n  private eventosProcesados = new Set<string>();\n  public totalCobrado = 0;\n\n  async onEventoPago(evento: { idMensaje: string; monto: number }): Promise<void> {\n    // Patrón de Idempotencia: Verificar si el idMensaje ya fue procesado\n    if (this.eventosProcesados.has(evento.idMensaje)) {\n      return; // Ignorar duplicado silenciosamente\n    }\n    this.totalCobrado += evento.monto;\n    this.eventosProcesados.add(evento.idMensaje);\n  }\n}\n\ndescribe('ProcesadorPagoEventos (Prueba de Idempotencia)', () => {\n  let procesador: ProcesadorPagoEventos;\n\n  beforeEach(() => {\n    procesador = new ProcesadorPagoEventos();\n  });\n\n  it('debe procesar el cobro una sola vez aunque el broker reenvíe el evento 3 veces', async () => {\n    const eventoDuplicado = { idMensaje: 'evt_pago_9988', monto: 150 };\n\n    // Simular que Kafka reenvía el mismo mensaje 3 veces por falla de ack\n    await procesador.onEventoPago(eventoDuplicado);\n    await procesador.onEventoPago(eventoDuplicado);\n    await procesador.onEventoPago(eventoDuplicado);\n\n    // Assert: El cobro debe ser exactamente 150, no 450\n    expect(procesador.totalCobrado).toBe(150);\n  });\n});",
      "quiz": [
        {
          "question": "¿Por qué es crucial probar la idempotencia en un consumidor de eventos de Kafka o RabbitMQ?",
          "options": [
            "Porque las redes distribuidas operan con entrega 'Al menos una vez', lo que provoca que los mensajes se reenvíen duplicados ante caídas temporales",
            "Porque Kafka borra los mensajes aleatoriamente",
            "Para evitar que el código consuma electricidad"
          ],
          "answerIndex": 0,
          "explanation": "En sistemas distribuidos los duplicados son inevitables; si los consumidores no son idempotentes, se generarán cobros y registros duplicados en producción."
        },
        {
          "question": "¿Qué herramienta permite simular latencia de red y pérdida de paquetes de forma programable durante una prueba de integración?",
          "options": [
            "Toxiproxy",
            "Wordpad",
            "Google Chrome DevTools únicamente"
          ],
          "answerIndex": 0,
          "explanation": "Toxiproxy es el estándar industrial para inyectar fallos de red simulados (tóxicos) entre aplicaciones y sus bases de datos o APIs."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: CHAOS ENGINEERING & RESILIENCIA: INYECCIÓN CONTROLADA DE FALLAS",
      "description": "Principios del Chaos Engineering: Netflix Simian Army, hipótesis del estado estacionario, Chaos Mesh y validación del Circuit Breaker en producción.",
      "items": [
        "De la prueba tradicional a la resiliencia en ambientes hostiles: Principios del Chaos Engineering.",
        "La Hipótesis del Estado Estacionario (Steady-State Hypothesis): Definir la normalidad antes de inyectar caos.",
        "El Simian Army de Netflix: Chaos Monkey, Chaos Gorilla y Chaos Kong.",
        "Herramientas modernas: Chaos Mesh (Kubernetes), Gremlin y LitmusChaos.",
        "Tipos de fallas inyectadas: Matar pods de Kubernetes, congelar discos, saturar CPU al 100%, particiones DNS.",
        "Validación práctica del patrón Circuit Breaker: Estados Closed, Open y Half-Open bajo falla masiva.",
        "Radio de Explosión (Blast Radius): Cómo contener el impacto de los experimentos de caos.",
        "Pruebas de Game Day: Equipos de ingeniería simulando desastres en vivo."
      ],
      "content": "## Principios del Chaos Engineering\n\nEl **Chaos Engineering** no consiste en romper cosas a ciegas para divertirse, sino en una disciplina científica que experimenta sobre un sistema para construir confianza en su capacidad de soportar condiciones turbulentas en producción.\n\n```\n┌─────────────────────────────────────────────────────────────┐\n│ 1. Definir el Estado Estacionario (Steady State):           │\n│    \"99.5% de los checkouts exitosos con latencia < 200ms\"   │\n└──────────────────────────────┬──────────────────────────────┘\n                               ▼\n┌─────────────────────────────────────────────────────────────┐\n│ 2. Formular la Hipótesis:                                   │\n│    \"Si eliminamos el 50% de las instancias del microservicio│\n│    de pagos, el Circuit Breaker activará el fallback        │\n│    y la tasa de error global no superará el 1%\"             │\n└──────────────────────────────┬──────────────────────────────┘\n                               ▼\n┌─────────────────────────────────────────────────────────────┐\n│ 3. Inyectar el Caos y Analizar si la Hipótesis se cumplió   │\n└─────────────────────────────────────────────────────────────┘\n```\n\nSi el sistema colapsa en cadena (falla en cascada), has descubierto una vulnerabilidad arquitectónica en un experimento controlado antes de que ocurra durante un pico comercial.",
      "codeSnippet": "// Ejemplo: Validación de Resiliencia con Fallback ante Fallas\nimport { describe, it, expect, vi } from 'vitest';\n\nclass CatalogoResiliente {\n  private cacheMemoria = ['Laptop', 'Mouse', 'Teclado'];\n\n  async obtenerProductos(servicioRemoto: () => Promise<string[]>): Promise<string[]> {\n    try {\n      // Intentar llamar al servicio externo\n      return await servicioRemoto();\n    } catch (error) {\n      // Fallback graceful ante falla caótica de red\n      console.warn('Servicio caído, respondiendo con caché degradado');\n      return this.cacheMemoria;\n    }\n  }\n}\n\ndescribe('CatalogoResiliente (Prueba de Caos y Fallback)', () => {\n  it('debe responder con datos en caché sin lanzar error si el servicio remoto colapsa (Inyección de Falla)', async () => {\n    const catalogo = new CatalogoResiliente();\n\n    // Inyección de Caos: El servicio remoto lanza excepción de conexión rechazada\n    const servicioCaido = vi.fn().mockRejectedValue(new Error('ECONNREFUSED'));\n\n    const productos = await catalogo.obtenerProductos(servicioCaido);\n\n    // Assert: El usuario final recibe una experiencia degradada pero funcional\n    expect(productos).toEqual(['Laptop', 'Mouse', 'Teclado']);\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es el primer paso obligatorio antes de ejecutar cualquier experimento de Chaos Engineering?",
          "options": [
            "Definir y medir el 'Estado Estacionario' (Steady State) del sistema para tener una línea base de normalidad",
            "Apagar todos los servidores de base de datos sin avisar",
            "Enviar un correo a todos los usuarios"
          ],
          "answerIndex": 0,
          "explanation": "Sin una métrica clara de normalidad (Steady State), es imposible determinar cuantitativamente si el sistema resistió el fallo o si se degradó inaceptablemente."
        },
        {
          "question": "¿Qué busca prevenir el patrón Circuit Breaker en una arquitectura de microservicios?",
          "options": [
            "Fallos en cascada: evita que un microservicio caído agote los recursos y hilos de todos los servicios que dependen de él",
            "Ataques de fuerza bruta en contraseñas",
            "El sobrecalentamiento del monitor"
          ],
          "answerIndex": 0,
          "explanation": "El Circuit Breaker interrumpe de inmediato las llamadas a un servicio que está fallando repetidamente, permitiéndole recuperarse y respondiendo con un fallback."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: TESTING DE SISTEMAS DE IA: EVALUACIÓN DE RAG Y MOCKS DETERMINISTAS",
      "description": "Aseguramiento de Calidad para aplicaciones con Modelos de Lenguaje (LLMs): no determinismo, mocks reproducibles, métricas RAG (Faithfulness, Relevance) y guardrails.",
      "items": [
        "El dilema del no determinismo en QA: Por qué los tests tradicionales de aserción exacta (`toBe`) fracasan con LLMs.",
        "Estrategia de dos niveles: Pruebas unitarias de software tradicional vs Evaluación sistemática de IA.",
        "Mocking determinista de APIs de LLMs (OpenAI, Anthropic, Gemini) en pruebas unitarias y de integración.",
        "Evaluación de pipelines de Generación Aumentada por Recuperación (RAG).",
        "Métricas RAG fundamentales: Faithfulness (Fidelidad a las fuentes), Answer Relevance y Context Precision.",
        "Evaluación automatizada LLM-as-a-Judge con prompts de calificación estructurados.",
        "Pruebas de regresión semántica con embeddings y umbrales de similitud coseno.",
        "Pruebas de seguridad para IA: Inyección de prompts adversariales y verificación de guardrails."
      ],
      "content": "## Cómo Probar Sistemas con Inteligencia Artificial\n\nUn modelo de lenguaje genera respuestas con variación probabilística (temperatura > 0). Escribir `expect(generarResumen()).toBe('Texto exacto')` fallará en cada ejecución.\n\n### La Estrategia de Calidad para IA\n1. **Pruebas de Software (Deterministas):** Se mockea la llamada al LLM con respuestas fijas para probar la lógica de la aplicación (parsers de JSON, guardado en base de datos, autorización y llamadas a herramientas).\n2. **Evaluación de Modelos (No deterministas):** Se utiliza una suite de evaluación sistemática basada en métricas cuantitativas:\n   * **Faithfulness (Fidelidad):** ¿La respuesta generada por el bot está 100% justificada por los documentos recuperados de la base vectorial (sin alucinaciones)?\n   * **Answer Relevance:** ¿La respuesta contesta directamente lo que preguntó el usuario?\n   * **Context Precision:** ¿Los fragmentos recuperados por la búsqueda semántica son verdaderamente relevantes?",
      "codeSnippet": "// Ejemplo: Mock determinista de LLM para probar la lógica del agente\nimport { describe, it, expect, vi } from 'vitest';\n\ninterface LlmClient {\n  completar(prompt: string): Promise<string>;\n}\n\nclass AsistenteSoporte {\n  constructor(private llm: LlmClient) {}\n\n  async responderTicket(pregunta: string): Promise<{ respuesta: string; esUrgente: boolean }> {\n    const raw = await this.llm.completar(\\`Pregunta: \\${pregunta}. Responde en JSON con { respuesta, esUrgente }\\`);\n    // Lógica determinista de parseo y validación\n    const parsed = JSON.parse(raw);\n    return {\n      respuesta: parsed.respuesta,\n      esUrgente: Boolean(parsed.esUrgente),\n    };\n  }\n}\n\ndescribe('AsistenteSoporte con Mock Determinista', () => {\n  it('debe parsear y procesar correctamente el payload devuelto por el LLM', async () => {\n    // Mock que devuelve un JSON válido garantizado\n    const mockLlm: LlmClient = {\n      completar: vi.fn().mockResolvedValue(JSON.stringify({\n        respuesta: 'Su pedido fue enviado hoy.',\n        esUrgente: false\n      }))\n    };\n\n    const asistente = new AsistenteSoporte(mockLlm);\n    const resultado = await asistente.responderTicket('¿Dónde está mi pedido?');\n\n    expect(resultado.esUrgente).toBe(false);\n    expect(resultado.respuesta).toBe('Su pedido fue enviado hoy.');\n  });\n});",
      "quiz": [
        {
          "question": "¿Por qué en las pruebas unitarias tradicionales de una aplicación con IA se deben mockear las respuestas del LLM?",
          "options": [
            "Para garantizar determinismo, velocidad de ejecución en milisegundos y evitar costos y cuotas de API en cada commit",
            "Porque los LLMs no saben programar",
            "Porque Vitest solo acepta texto en inglés"
          ],
          "answerIndex": 0,
          "explanation": "El mocking aísla la lógica de tu aplicación (parseo, guardado, validación) de las variaciones y costos de las llamadas a modelos externos."
        },
        {
          "question": "¿Qué evalúa la métrica 'Faithfulness' (Fidelidad) en un sistema RAG?",
          "options": [
            "Si toda la información en la respuesta del LLM proviene estrictamente del contexto recuperado, detectando alucinaciones",
            "La lealtad del cliente a la marca",
            "Si el modelo responde con tono educado"
          ],
          "answerIndex": 0,
          "explanation": "Faithfulness verifica que el modelo no invente información externa: si afirma algo que no está en los documentos de contexto, la métrica cae."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: GESTIÓN DE DEFECTOS, ANÁLISIS DE CAUSA RAÍZ (5 WHYS) Y MÉTRICAS DORA",
      "description": "Gestión profesional de incidentes y calidad: redacción de Bug Reports impecables, análisis de los 5 Porqués (5 Whys), Blameless Post-Mortems y métricas DORA.",
      "items": [
        "Anatomía de un Bug Report profesional: Pasos exactos de reproducción, comportamiento esperado vs obtenido, entorno y logs.",
        "La regla de oro: Si un bug no es reproducible, no puede ser corregido con certeza.",
        "Técnica de los 5 Porqués (5 Whys) de Toyota para llegar a la falla estructural de proceso.",
        "Cultura de Blameless Post-Mortems (Post-mortem sin culpas): Enfoque en sistemas y procesos, no en personas.",
        "El Ciclo de Vida del Defecto: New ➔ Triaged ➔ In Progress ➔ Ready for QA ➔ Verified ➔ Closed.",
        "Métricas DORA (DevOps Research and Assessment): Deployment Frequency, Lead Time, Change Failure Rate, Time to Restore Service (MTTR).",
        "Métricas de escape de defectos (Defect Escape Rate) y cómo disminuirlas.",
        "Construcción de dashboards de salud de calidad del producto."
      ],
      "content": "## Análisis de Causa Raíz (5 Whys) y Cultura Post-Mortem\n\nCuando ocurre un fallo catastrófico en producción, la reacción inmadura es buscar culpables (\"el desarrollador X no vio el error\"). Las organizaciones de ingeniería de élite (Google, Amazon, NASA) aplican **Blameless Post-Mortems**: si un humano pudo cometer un error que llegó a producción, el fallo reside en la ausencia de defensas automatizadas en el sistema.\n\n### Los 5 Porqués (Ejemplo Real)\n1. **¿Por qué se cayó el servicio de pagos?** Porque la base de datos se quedó sin conexiones disponibles.\n2. **¿Por qué se agotaron las conexiones?** Porque un endpoint nuevo no cerraba la conexión en caso de timeout.\n3. **¿Por qué no se cerraba la conexión?** Porque el bloque `try/finally` no estaba implementado en ese controlador.\n4. **¿Por qué no se detectó antes de producción?** Porque no había una prueba de integración que simulara timeouts de base de datos.\n5. **¿Por qué no había prueba?** Porque no existía una plantilla de arquitectura que obligara a incluir pruebas de resiliencia en el DoD.\n\n**Acción Correctiva:** Implementar un pool de conexiones con timeout automático y crear una regla de linter/test que rechace queries sin bloque de limpieza.",
      "codeSnippet": "# Plantilla de Bug Report Profesional en Markdown\n## [BUG-402] Falla en el cálculo de descuento VIP con carritos mixtos\n\n### Severidad: Alta (P1)\n### Entorno: Staging (v2.4.1), Chrome 124 / iOS Safari 17.4\n\n### Pasos para Reproducir:\n1. Iniciar sesión con un usuario que tenga el flag \\`esVip: true\\`.\n2. Añadir al carrito un producto digital ($50) y un producto físico ($70).\n3. Avanzar a la pantalla de Checkout.\n4. Observar el total calculado.\n\n### Comportamiento Esperado:\nEl descuento del 15% VIP debe aplicarse sobre el total completo ($120 * 0.85 = $102).\n\n### Comportamiento Obtenido:\nEl sistema cobra $120. El descuento aparece en -$0.00 en el resumen.\n\n### Causa Raíz Identificada (RCA):\nLa función \\`calcularDescuento()\\` evaluaba \\`item.tipo === 'FISICO'\\` y omitía el cálculo si existía un producto digital en el array.\n\n### Prueba Automatizada Adjunta para Prevenir Regresión:\n\\`\\`\\`ts\nit('debe aplicar descuento VIP a carritos con productos mixtos', () => {\n  // Test unitario añadido que reproduce el fallo en RED y pasa en GREEN tras el fix\n});\n\\`\\`\\`",
      "quiz": [
        {
          "question": "¿Cuál es el objetivo principal de la técnica de los '5 Porqués' en el análisis de un incidente?",
          "options": [
            "Ir más allá de los síntomas superficiales para identificar la falla raíz en el sistema, arquitectura o proceso",
            "Buscar cinco personas a las que culpar por el error",
            "Hacer cinco reuniones diarias"
          ],
          "answerIndex": 0,
          "explanation": "Los 5 Porqués profundizan sucesivamente en las causas hasta descubrir el vacío estructural de proceso o pruebas que permitió la falla."
        },
        {
          "question": "¿Qué mide la métrica DORA 'Change Failure Rate'?",
          "options": [
            "El porcentaje de despliegues a producción que resultan en fallas degradantes o requieren rollback inmediato",
            "El número de veces que cambia el diseño de la web",
            "La cantidad de commits por hora"
          ],
          "answerIndex": 0,
          "explanation": "Change Failure Rate mide la estabilidad de las entregas: cuántos cambios introducidos en producción provocan incidentes o reversiones."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: ARQUITECTURA DE LA SUITE CORPORATIVA DE QA END-TO-END",
      "description": "Diseño, estructuración y ejecución del pipeline integral de calidad corporativo: Quality Gates en CI/CD, pirámide completa en acción y reportes automatizados.",
      "items": [
        "Integración de todas las capas de calidad en un único pipeline de ingeniería industrial.",
        "Definición de Quality Gates en GitHub Actions: Unitarias ➔ Contratos ➔ Testcontainers ➔ E2E Playwright ➔ k6 Load Gate.",
        "Generación y consolidación de reportes unificados de cobertura y pruebas (HTML / JUnit XML).",
        "Manejo de variables secretas y configuración multi-entorno sin contaminar código.",
        "Estrategia de ejecución condicional de pruebas según el impacto de los archivos modificados.",
        "Monitoreo continuo de pruebas intermitentes (Flaky Tests) con reintentos inteligentes y cuarentena.",
        "Estrategia de Rollback automatizado en CD ante degradación de métricas de calidad en producción.",
        "Defensa técnica de la suite ante comités de arquitectura y auditorías internacionales de calidad."
      ],
      "content": "## Proyecto Integrador: La Suite Corporativa de QA\n\nEn este módulo culminante, unificamos todas las disciplinas aprendidas a lo largo de los 20 módulos para construir el pipeline de calidad definitivo.\n\n### La Cascada de Quality Gates en CI\n```\n[ Commit a Rama Feature ]\n          │\n          ▼\n┌──────────────────┐\n│  GATE 1: LINT    │ ESLint + TypeScript Typecheck estricto\n└─────────┬────────┘\n          ▼\n┌──────────────────┐\n│  GATE 2: UNIT    │ Vitest Unit Testing (Patrón AAA + 85% Branch Coverage)\n└─────────┬────────┘\n          ▼\n┌──────────────────┐\n│  GATE 3: CONTRATO│ Supertest + Zod Schema Validation\n└─────────┬────────┘\n          ▼\n┌──────────────────┐\n│  GATE 4: INTEGRAC│ Testcontainers (PostgreSQL real efímero en Docker)\n└─────────┬────────┘\n          ▼\n┌──────────────────┐\n│  GATE 5: E2E     │ Playwright (Headless Chromium con Page Object Model)\n└─────────┬────────┘\n          ▼\n┌──────────────────┐\n│  GATE 6: CARGA   │ k6 Load Test (SLO p95 < 200ms & error rate < 1%)\n└─────────┬────────┘\n          ▼\n[ Merge a Main Aprobado y Despliegue Continuo Seguro ]\n```\n\nNingún cambio puede llegar a producción sin haber superado cada uno de estos filtros automatizados, erradicando para siempre el miedo a desplegar los viernes.",
      "codeSnippet": "# Pipeline de Calidad Integral en GitHub Actions (.github/workflows/qa-pipeline.yml)\nname: Suite Integral de Calidad QA\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  qa_pipeline:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Descargar Código\n        uses: actions/checkout@v4\n\n      - name: Instalar Node.js y Dependencias\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n\n      - run: npm ci\n\n      - name: Gate 1 - Typecheck y Lint\n        run: npx tsc --noEmit\n\n      - name: Gate 2 - Pruebas Unitarias y Cobertura (Vitest)\n        run: npm run test:unit -- --coverage\n\n      - name: Gate 3 - Pruebas de Integración (Testcontainers Docker)\n        run: npm run test:integration\n\n      - name: Instalar Navegadores de Playwright\n        run: npx playwright install --with-deps chromium\n\n      - name: Gate 4 - Pruebas E2E (Playwright)\n        run: npm run test:e2e\n\n      - name: Gate 5 - Pruebas de Carga (k6)\n        uses: grafana/k6-action@v0.3.1\n        with:\n          filename: tests/load/smoke.js",
      "quiz": [
        {
          "question": "¿Cuál es el beneficio de estructurar las pruebas en 'Quality Gates' secuenciales en el pipeline de CI?",
          "options": [
            "Falla rápido (Fail-Fast): si las pruebas unitarias fallan en 3 segundos, no se gasta tiempo ni recursos ejecutando pruebas E2E o de carga pesadas",
            "Permite saltarse los tests si hay prisa",
            "Hace que los tests sean opcionales"
          ],
          "answerIndex": 0,
          "explanation": "El principio Fail-Fast ahorra tiempo y costos de infraestructura: las pruebas más rápidas y baratas corren primero, abortando el pipeline de inmediato si algo falla."
        },
        {
          "question": "¿Qué política se debe aplicar a las 'Flaky Tests' (pruebas que pasan y fallan aleatoriamente sin cambios de código)?",
          "options": [
            "Aislarlas en cuarentena de inmediato para ser corregidas, ya que destruyen la confianza del equipo en el pipeline de CI",
            "Ignorarlas y borrarlas para siempre",
            "Ejecutarlas 50 veces hasta que pasen por suerte"
          ],
          "answerIndex": 0,
          "explanation": "Los tests intermitentes destruyen la disciplina de calidad; deben colocarse en cuarentena para no bloquear builds válidos mientras se corrigen sus causas de raíz."
        }
      ]
    }
  ]
};

export const QA_AUTOMATION_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Escribe una clase de servicio `TransferenciaService` que reciba dependencias mediante inyección en el constructor para permitir que sea testeable.",
      "placeholder": "export class TransferenciaService {\n  constructor(\n    private readonly repo: ICuentaRepository,\n    private readonly auditoria: IAuditoriaService\n  ) {}\n\n  async transferir(origenId: string, destinoId: string, monto: number): Promise<boolean> {\n    // Implementa validación y ejecución\n  }\n}",
      "expectedKeywords": [
        "constructor",
        "ICuentaRepository",
        "transferir"
      ],
      "hint": "Define el constructor recibiendo las interfaces `ICuentaRepository` y `IAuditoriaService` para desacoplar el servicio de implementaciones concretas.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Escribe una prueba unitaria estructurada estrictamente con el patrón AAA (Arrange, Act, Assert) usando Vitest para validar un cálculo de impuestos.",
      "placeholder": "import { describe, it, expect } from 'vitest';\n\ndescribe('CalculadoraImpuestos (Patrón AAA)', () => {\n  it('debe calcular 16% de IVA sobre el subtotal', () => {\n    // 1. Arrange\n    const subtotal = 100;\n    // 2. Act\n    const iva = calcularIva(subtotal);\n    // 3. Assert\n    expect(iva).toBe(16);\n  });\n});",
      "expectedKeywords": [
        "describe",
        "it",
        "expect",
        "toBe"
      ],
      "hint": "Divide tu prueba con comentarios claros para `// 1. Arrange`, `// 2. Act` y `// 3. Assert` usando `expect(...).toBe(...)`.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Implementa una función `esPalindromo` siguiendo el ciclo TDD, manejando cadenas vacías, espacios y mayúsculas.",
      "placeholder": "export function esPalindromo(texto: string): boolean {\n  const limpio = texto.toLowerCase().replace(/\\s+/g, '');\n  return limpio === limpio.split('').reverse().join('');\n}",
      "expectedKeywords": [
        "toLowerCase",
        "reverse",
        "join"
      ],
      "hint": "Limpia el texto con `toLowerCase()` y compara con su reverso usando `.split('').reverse().join('')`.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Crea un Mock con Vitest usando `vi.fn()` para simular una pasarela de pago y verifica que fue invocada exactamente una vez con los argumentos esperados.",
      "placeholder": "import { describe, it, expect, vi } from 'vitest';\n\ndescribe('CobroService', () => {\n  it('debe invocar a la pasarela con el monto correcto', async () => {\n    const mockPasarela = { cobrar: vi.fn().mockResolvedValue({ ok: true }) };\n    const service = new CobroService(mockPasarela);\n\n    await service.pagar(100);\n\n    expect(mockPasarela.cobrar).toHaveBeenCalledTimes(1);\n    expect(mockPasarela.cobrar).toHaveBeenCalledWith(100);\n  });\n});",
      "expectedKeywords": [
        "vi.fn",
        "toHaveBeenCalledTimes",
        "toHaveBeenCalledWith"
      ],
      "hint": "Declara `const mockPasarela = { cobrar: vi.fn().mockResolvedValue(...) }` y valida con `expect(mockPasarela.cobrar).toHaveBeenCalledTimes(1)`.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Escribe una suite de pruebas que garantice 100% de Branch Coverage sobre una función que clasifica estudiantes según su nota.",
      "placeholder": "import { describe, it, expect } from 'vitest';\n\ndescribe('clasificarNota (Branch Coverage Completo)', () => {\n  it('debe clasificar Sobresaliente si nota >= 90', () => {\n    expect(clasificarNota(95)).toBe('Sobresaliente');\n  });\n  it('debe clasificar Aprobado si nota >= 60 y < 90', () => {\n    expect(clasificarNota(75)).toBe('Aprobado');\n  });\n  it('debe clasificar Reprobado si nota < 60', () => {\n    expect(clasificarNota(50)).toBe('Reprobado');\n  });\n});",
      "expectedKeywords": [
        "Sobresaliente",
        "Aprobado",
        "Reprobado",
        "expect"
      ],
      "hint": "Cubre todas las bifurcaciones lógicas: >= 90, entre 60 y 89, y < 60.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Configura un test de integración conceptual con Testcontainers para PostgreSQL que verifique el rollback transaccional.",
      "placeholder": "import { describe, it, expect, beforeEach, afterEach } from 'vitest';\n\ndescribe('UsuarioRepository (Testcontainers)', () => {\n  beforeEach(async () => {\n    await db.query('BEGIN');\n  });\n  afterEach(async () => {\n    await db.query('ROLLBACK');\n  });\n  it('debe persistir usuario en transacción aislada', async () => {\n    await repo.crear({ email: 'test@quimisell.dev' });\n    const u = await repo.buscar('test@quimisell.dev');\n    expect(u).toBeDefined();\n  });\n});",
      "expectedKeywords": [
        "BEGIN",
        "ROLLBACK",
        "repo.crear",
        "expect"
      ],
      "hint": "Usa `BEGIN` en `beforeEach` y `ROLLBACK` en `afterEach` para aislar los tests de base de datos.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Usa Supertest y Zod para validar que la respuesta de un endpoint `/api/usuarios` retorne status 200 y respete un esquema estricto.",
      "placeholder": "import request from 'supertest';\nimport { z } from 'zod';\nimport { it, expect } from 'vitest';\n\nconst UsuarioSchema = z.object({\n  id: z.string(),\n  email: z.string().email(),\n  activo: z.boolean()\n});\n\nit('debe validar el contrato del endpoint', async () => {\n  const res = await request(app).get('/api/usuarios/1').expect(200);\n  const parsed = UsuarioSchema.safeParse(res.body);\n  expect(parsed.success).toBe(true);\n});",
      "expectedKeywords": [
        "request",
        "safeParse",
        "expect(200)",
        "success"
      ],
      "hint": "Valida con `UsuarioSchema.safeParse(res.body)` y asegura `expect(parsed.success).toBe(true)`.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Escribe un test en Playwright que navegue a una página, complete un formulario y use una aserción Web-First.",
      "placeholder": "import { test, expect } from '@playwright/test';\n\ntest('registro exitoso', async ({ page }) => {\n  await page.goto('/registro');\n  await page.getByLabel('Nombre').fill('Selvin');\n  await page.getByRole('button', { name: 'Registrar' }).click();\n  await expect(page.getByText('¡Bienvenido!')).toBeVisible();\n});",
      "expectedKeywords": [
        "page.goto",
        "getByRole",
        "expect",
        "toBeVisible"
      ],
      "hint": "Usa `page.goto()`, `page.getByRole()` y `await expect(...).toBeVisible()`.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Diseña un Page Object `CheckoutPage` en Playwright encapsulando los selectores con `getByRole`.",
      "placeholder": "import { type Page, type Locator } from '@playwright/test';\n\nexport class CheckoutPage {\n  readonly botonPagar: Locator;\n\n  constructor(private page: Page) {\n    this.botonPagar = page.getByRole('button', { name: 'Pagar con Tarjeta' });\n  }\n\n  async procederAlPago(): Promise<void> {\n    await this.botonPagar.click();\n  }\n}",
      "expectedKeywords": [
        "class CheckoutPage",
        "getByRole",
        "procederAlPago"
      ],
      "hint": "Encapsula los selectores en el constructor usando `page.getByRole` y expón métodos de alto nivel.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Escribe una prueba de regresión visual en Playwright con enmascaramiento de elementos dinámicos y tolerancia de píxeles.",
      "placeholder": "import { test, expect } from '@playwright/test';\n\ntest('visual de tarjeta de producto', async ({ page }) => {\n  await page.goto('/productos');\n  const card = page.getByTestId('card-producto');\n  await expect(card).toHaveScreenshot('card.png', {\n    mask: [card.locator('.fecha')],\n    maxDiffPixelRatio: 0.002,\n    animations: 'disabled'\n  });\n});",
      "expectedKeywords": [
        "toHaveScreenshot",
        "mask",
        "maxDiffPixelRatio",
        "animations"
      ],
      "hint": "Configura `toHaveScreenshot` pasando `mask: [...]` y `animations: 'disabled'`.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Escribe un script de prueba de carga con k6 con 50 VUs durante 30s y un Threshold de p95 < 200ms.",
      "placeholder": "import http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  vus: 50,\n  duration: '30s',\n  thresholds: {\n    http_req_duration: ['p(95)<200'],\n    http_req_failed: ['rate<0.01'],\n  },\n};\n\nexport default function () {\n  const res = http.get('https://api.quimisell.dev/ping');\n  check(res, { 'status es 200': (r) => r.status === 200 });\n  sleep(1);\n}",
      "expectedKeywords": [
        "vus: 50",
        "thresholds",
        "http_req_duration",
        "p(95)<200"
      ],
      "hint": "Establece `vus: 50` y en `thresholds` define `http_req_duration: ['p(95)<200']`.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Configura una métrica personalizada `Trend` en k6 para rastrear la latencia p99 de un endpoint de procesamiento bancario.",
      "placeholder": "import http from 'k6/http';\nimport { Trend } from 'k6/metrics';\n\nconst latenciaTransferencia = new Trend('latencia_transferencia');\n\nexport const options = {\n  thresholds: {\n    'latencia_transferencia': ['p(99)<400'],\n  },\n};\n\nexport default function () {\n  const res = http.post('https://api.quimisell.dev/transferir');\n  latenciaTransferencia.add(res.timings.duration);\n}",
      "expectedKeywords": [
        "Trend",
        "latencia_transferencia",
        "p(99)<400",
        "add"
      ],
      "hint": "Instancia `new Trend(...)` y agrega las duraciones con `.add(res.timings.duration)`.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Escribe una prueba con `fast-check` verificando la propiedad de idempotencia al ordenar una lista de números.",
      "placeholder": "import { describe, it } from 'vitest';\nimport fc from 'fast-check';\n\ndescribe('Property-Based Testing (Idempotencia)', () => {\n  it('ordenar una lista ordenada debe devolver la misma lista', () => {\n    fc.assert(\n      fc.property(fc.array(fc.integer()), (arr) => {\n        const ordenadoUnaVez = [...arr].sort((a, b) => a - b);\n        const ordenadoDosVeces = [...ordenadoUnaVez].sort((a, b) => a - b);\n        return JSON.stringify(ordenadoUnaVez) === JSON.stringify(ordenadoDosVeces);\n      })\n    );\n  });\n});",
      "expectedKeywords": [
        "fc.assert",
        "fc.property",
        "fc.array",
        "sort"
      ],
      "hint": "Usa `fc.assert(fc.property(fc.array(fc.integer()), ...))` comprobando que ordenar dos veces sea idéntico.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Diseña una prueba unitaria con un caso límite (boundary test) que mate un mutador de operador relacional (de `>` a `>=`).",
      "placeholder": "import { describe, it, expect } from 'vitest';\n\ndescribe('Validación de Edad Mínima', () => {\n  it('debe rechazar con exactamente 17 años matando el mutador relacional', () => {\n    expect(esMayorDeEdad(17)).toBe(false);\n  });\n  it('debe aceptar con exactamente 18 años', () => {\n    expect(esMayorDeEdad(18)).toBe(true);\n  });\n});",
      "expectedKeywords": [
        "17",
        "18",
        "toBe(false)",
        "toBe(true)"
      ],
      "hint": "Evalúa los valores inmediatamente anterior y exacto al umbral (17 y 18).",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Escribe una prueba con Supertest que verifique que el servidor responde con cabeceras de seguridad CSP y HSTS.",
      "placeholder": "import request from 'supertest';\nimport { it, expect } from 'vitest';\n\nit('debe incluir cabeceras de seguridad OWASP', async () => {\n  const res = await request(app).get('/');\n  expect(res.headers['strict-transport-security']).toBeDefined();\n  expect(res.headers['content-security-policy']).toBeDefined();\n  expect(res.headers['x-frame-options']).toBe('DENY');\n});",
      "expectedKeywords": [
        "strict-transport-security",
        "content-security-policy",
        "x-frame-options"
      ],
      "hint": "Verifica `res.headers['strict-transport-security']` y `content-security-policy`.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Implementa un test que verifique la idempotencia en un consumidor de eventos que recibe tres veces el mismo mensaje.",
      "placeholder": "import { it, expect } from 'vitest';\n\nit('debe ignorar eventos duplicados sin duplicar el saldo', async () => {\n  const consumidor = new ConsumidorEventos();\n  const evento = { id: 'evt_1', monto: 50 };\n  await consumidor.procesar(evento);\n  await consumidor.procesar(evento);\n  await consumidor.procesar(evento);\n  expect(consumidor.obtenerSaldoTotal()).toBe(50);\n});",
      "expectedKeywords": [
        "consumidor.procesar",
        "obtenerSaldoTotal",
        "toBe(50)"
      ],
      "hint": "Envía el mismo evento tres veces y comprueba que el saldo final corresponda a una sola aplicación.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Escribe una prueba que simule una inyección de caos (servicio caído con `ECONNRESET`) y valide que se active el Circuit Breaker / Fallback.",
      "placeholder": "import { it, expect, vi } from 'vitest';\n\nit('debe activar fallback ante falla de red caótica', async () => {\n  const mockServicio = vi.fn().mockRejectedValue(new Error('ECONNRESET'));\n  const cliente = new ClienteResiliente(mockServicio);\n  const resultado = await cliente.obtenerConFallback();\n  expect(resultado.usandoFallback).toBe(true);\n});",
      "expectedKeywords": [
        "ECONNRESET",
        "mockRejectedValue",
        "usandoFallback"
      ],
      "hint": "Simula la excepción con `mockRejectedValue(new Error('ECONNRESET'))` y valida que `usandoFallback` sea `true`.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Escribe una prueba unitaria con un Mock determinista para un LLM que valida que un extractor de JSON procese las respuestas de forma segura.",
      "placeholder": "import { it, expect, vi } from 'vitest';\n\nit('debe procesar respuesta JSON del LLM de forma determinista', async () => {\n  const mockLlm = { consultar: vi.fn().mockResolvedValue('{\"clasificacion\":\"VENTAS\"}') };\n  const extractor = new ClasificadorTexto(mockLlm);\n  const res = await extractor.clasificar('Quiero comprar una licencia');\n  expect(res).toBe('VENTAS');\n});",
      "expectedKeywords": [
        "mockResolvedValue",
        "clasificar",
        "toBe('VENTAS')"
      ],
      "hint": "Mockea la respuesta con `mockResolvedValue('{\"clasificacion\":\"VENTAS\"}')` y verifica la extracción del campo.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Redacta una función de análisis de causa raíz que reciba un incidente y encadene 5 preguntas '¿Por qué?' devolviendo el diagnóstico estructural.",
      "placeholder": "export function analizarCincoPorques(incidente: string, respuestas: string[]): { causaRaiz: string; accionPreventiva: string } {\n  if (respuestas.length < 5) throw new Error('Se requieren 5 niveles de análisis');\n  return {\n    causaRaiz: respuestas[4],\n    accionPreventiva: `Automatizar prueba preventiva para: ${respuestas[4]}`\n  };\n}",
      "expectedKeywords": [
        "analizarCincoPorques",
        "respuestas.length < 5",
        "causaRaiz"
      ],
      "hint": "Valida que existan al menos 5 respuestas y devuelve la última como la causa raíz estructural.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Define una configuración de Quality Gates en TypeScript que verifique que la cobertura, las pruebas E2E y el threshold de latencia cumplan los criterios de despliegue.",
      "placeholder": "export function evaluarQualityGates(metricas: {\n  branchCoverage: number;\n  e2ePassed: boolean;\n  p95LatencyMs: number;\n}): { aprobado: boolean; razon: string } {\n  if (metricas.branchCoverage < 85) return { aprobado: false, razon: 'Cobertura insuficiente (<85%)' };\n  if (!metricas.e2ePassed) return { aprobado: false, razon: 'Fallaron pruebas E2E' };\n  if (metricas.p95LatencyMs > 200) return { aprobado: false, razon: 'Latencia p95 degradada (>200ms)' };\n  return { aprobado: true, razon: 'Todos los Quality Gates superados' };\n}",
      "expectedKeywords": [
        "branchCoverage < 85",
        "e2ePassed",
        "p95LatencyMs > 200",
        "aprobado: true"
      ],
      "hint": "Implementa validaciones para `branchCoverage >= 85`, `e2ePassed === true` y `p95LatencyMs <= 200`.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de QA & Testing
QA_AUTOMATION_COURSE.modules.forEach((mod) => {
  if (QA_AUTOMATION_EXERCISES[mod.id]) {
    mod.exercises = QA_AUTOMATION_EXERCISES[mod.id];
  }
});
