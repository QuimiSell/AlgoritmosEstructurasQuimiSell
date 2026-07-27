import { Course } from '../domain/models';

export const AI_ENGINEER_COURSE: Course = {
  id: 'ingeniero_ia',
  title: 'El Ingeniero en Sistemas en la Era de la IA',
  shortTitle: 'Ingeniero en la Era IA',
  badge: 'MasterClass de Ingeniería & Liderazgo',
  icon: '🤖',
  description: 'Un programa maestro de 25 módulos diseñado para trascender del rol de "programador copy-paste" o "vibe coder" hacia el verdadero Arquitecto de Sistemas de la Era de la Inteligencia Artificial.',
  whyStudyTitle: '🧠 ¿Cómo evitar convertirse en un "simio programador de copy-paste"?',
  whyStudyText: 'En la era donde los agentes de Inteligencia Artificial escriben código de forma instantánea, el valor de un Ingeniero en Sistemas ya no radica en teclear código rutinario, sino en el Razonamiento de Sistemas, la Verificación Formal, el Diseño de Arquitecturas Escalables, la Ciberseguridad, el Profiling de Rendimiento y el Liderazgo de Criterio. Este curso te brinda la base teórica y práctica de 25 módulos para dirigir modelos de IA con criterio absoluto de ingeniería.',
  studyPlanReasons: [
    { id: 1, title: "De 'Vibe Coder' a Arquitecto del Pensamiento", why: "Cómo dirigir agentes IA mediante especificaciones y pensamiento de sistemas." },
    { id: 2, title: "Comprensión del Hardware, Kernel y Memoria", why: "Fundamentos físicos de CPU, RAM, Cache L1/L2/L3 que la IA no puede adivinar." },
    { id: 3, title: "System Design & Arquitectura de Alto Nivel", why: "Diseñar sistemas escalables para millones de usuarios simultáneos." },
    { id: 4, title: "Workflows Agénticos e Ingeniería de Prompts", why: "Orquestación de subagentes, contexto, herramientas y razonamiento profundo." },
    { id: 5, title: "Verificación Formal y Testing Riguroso (TDD)", why: "Construir suites de pruebas automatizadas que garanticen corrección sin alucinaciones." },
    { id: 6, title: "Domain-Driven Design (DDD)", why: "Modelado de reglas de negocio complejas en modelos de dominio desacoplados." },
    { id: 7, title: "Profiling de Rendimiento y Cuellos de Botella", why: "Diagnóstico de Memory Leaks, uso de CPU y latencia de E/S a bajo nivel." },
    { id: 8, title: "Ciberseguridad desde el Diseño (DevSecOps)", why: "Auditoría de vulnerabilidades OWASP Top 10 en código generado por IA." },
    { id: 9, title: "Sistemas Distribuidos y Teorema CAP", why: "Consenso (Raft/Paxos), particionamiento de red y consistencia eventual." },
    { id: 10, title: "Bases de Datos a Escala y Motores de Búsqueda", why: "Elección estratégica entre SQL, NoSQL, Columnar y Búsqueda Vectorial." },
    { id: 11, title: "Arquitectura Event-Driven y Mensajería", why: "Desacoplamiento asíncrono masivo mediante Kafka y RabbitMQ." },
    { id: 12, title: "Contenedores, CI/CD e Infraestructura", why: "Orquestación con Kubernetes, Docker y Terraform." },
    { id: 13, title: "Observabilidad, Métricas y Tracing", why: "Instrumentación con OpenTelemetry, Prometheus y Grafana." },
    { id: 14, title: "Arquitectura RAG y Fine-Tuning de LLMs", why: "Retrieval-Augmented Generation para integrar bases de conocimiento." },
    { id: 15, title: "Bases de Datos Vectoriales y Embeddings", why: "Búsqueda semántica por distancia coseno e índices HNSW." },
    { id: 16, title: "Auditoría y Code Review de Código IA", why: "Detección de alucinaciones, antipatrones y fallas de acoplamiento." },
    { id: 17, title: "Diseño de APIs Robustas y Contratos", why: "REST, gRPC, GraphQL y especificaciones OpenAPI rígidas." },
    { id: 18, title: "Patrones de Resiliencia en Producción", why: "Circuit Breakers, Bulkheads y Rate Limiting para evitar fallos en cascada." },
    { id: 19, title: "Refactorización de Sistemas Legacy", why: "Modernizar aplicaciones monolíticas sin detener la operación." },
    { id: 20, title: "Concurrencia, Paralelismo y Hilos", why: "Prevención de Race Conditions, Deadlocks y sincronización de memoria." },
    { id: 21, title: "FinOps y Gestión de Costos en la Nube", why: "Optimización de arquitectura para evitar facturas millonarias en AWS/Azure." },
    { id: 22, title: "Ética, Privacidad y Licenciamiento", why: "Propiedad intelectual, GPL, MIT y soberanía de datos en modelos IA." },
    { id: 23, title: "Ingeniería de Requerimientos y Agile", why: "Traducción de necesidades difusas a especificaciones técnicas precisas." },
    { id: 24, title: "Diagnóstico de Incidentes y Post-Mortems", why: "Análisis de Causa Raíz (RCA) tras caídas críticas en producción." },
    { id: 25, title: "El Manifiesto del Ingeniero Senior", why: "Liderazgo técnico, aprendizaje autónomo y la mentalidad de ingeniería irreemplazable." }
  ],
  labChallenge: {
    title: "Auditoría de Arquitectura, Testing y Optimización de un Sistema Asistido por Agentes IA",
    badge: "Laboratorio del Ingeniero Senior",
    description: "Tu objetivo es actuar como Ingeniero Senior y auditar un código generado automáticamente por un agente IA. Debes identificar 3 vulnerabilidades de seguridad, corregir un cuello de botella de memoria, implementar un test suite con TDD y desacoplar la arquitectura mediante el patrón Inversión de Dependencias (DIP).",
    requirements: [
      "• Auditoría de Seguridad: Detectar y corregir una inyección SQL o falla OWASP en el código generado por IA.",
      "• Profiling de Memoria: Identificar un leackage de memoria o bucle ineficiente y optimizar su complejidad.",
      "• Test Suite Automatizado: Escribir pruebas unitarias con cobertura > 85% para validar que el sistema no alucine.",
      "• Contrato de API: Especificar el esquema mediante OpenAPI/TypeScript estricto."
    ],
    cleanCodeRules: [
      "• Criterio Rígido: No aceptar código de IA sin haber analizado previamente la traza de ejecución y el impacto en memoria.",
      "• Separación de Capas: Dominio, Infraestructura e Interfaz completamente desacoplados.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Auditoría Ingeniero IA - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio 'El Ingeniero en Sistemas en la Era de la IA'.\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación de los hallazgos de seguridad y optimizaciones realizadas:\n- \n\nSaludos cordiales.`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: LA EVOLUCIÓN DEL INGENIERO: DE 'VIBE CODER' A ARQUITECTO DEL PENSAMIENTO",
      description: "El cambio de paradigma en la era de la IA: por qué teclear sintaxis es commodities y el razonamiento arquitectónico es el activo supremo.",
      items: [
        "El peligro del 'Vibe Coding' y la falsa ilusión de productividad.",
        "El rol del Ingeniero como Revisor, Verificador y Arquitecto del Sistema.",
        "La pirámide del valor del software: Sintaxis < Algoritmos < Arquitectura < Negocio.",
        "Pensamiento Crítico e Inquisitivo frente al código generado por LLMs.",
        "Cómo formular especificaciones técnicas inequívocas para herramientas IA."
      ],
      content: "Con el advenimiento de los modelos de lenguaje masivos y los agentes de codificación, escribir líneas de código repetitivas se ha vuelto un commoditie. El 'Vibe Coder' o el 'simio de copy-paste' se limita a dar enter y aceptar sugerencias sin entender la memoria, el costo de red ni las fallas de seguridad subyacentes. El Ingeniero en Sistemas Senior de la era IA opera en un nivel superior: define el modelo de dominio, establece los contratos de API, especifica las suites de pruebas y audita con rigor matemático cada módulo generado.",
      codeSnippet: `# Ejemplo de la Mentalidad del Ingeniero: Especificación estricta vs Prompt vago
# Vibe Coder Prompt Vago: "hazme un login en python"
# Ingeniero Senior: Especificación de Contrato y Aserciones
def autenticar_usuario_seguro(email: str, password_hash: str, hasher_service) -> bool:
    assert "@" in email, "Email inválido"
    assert len(password_hash) == 64, "Hash de contraseña inválido (esperado SHA-256)"
    return hasher_service.verificar(email, password_hash)`,
      quiz: [
        {
          question: "¿Qué distingue a un verdadero Ingeniero en Sistemas de un 'Vibe Coder' o 'programador copy-paste' en la era de la IA?",
          options: ["Que el ingeniero comprende la arquitectura, los límites de rendimiento, la seguridad y verifica rigurosamente el código antes de aceptarlo", "Que el ingeniero escribe más rápido en el teclado", "Que no usa computadoras"],
          answerIndex: 0,
          explanation: "El verdadero valor de la ingeniería está en el razonamiento crítico, el diseño de sistemas y la verificación formal de resultados."
        },
        {
          question: "¿Qué ocurre cuando un desarrollador acepta ciegamente el código sugerido por un agente IA sin auditarlo?",
          options: ["El software se vuelve 100% perfecto", "Se corren riesgos graves de introducir alucinaciones, fallas de seguridad OWASP y deuda técnica invisible", "Se ahorra el 100% del dinero"],
          answerIndex: 1,
          explanation: "Los modelos IA son estadísticos, no conscientes; pueden generar código sintácticamente correcto pero semánticamente ineficiente o vulnerable."
        },
        {
          question: "¿Cuál es el nivel más alto en la pirámide de valor de la ingeniería de software?",
          options: ["Recordar de memoria la sintaxis de un lenguaje", "Entender el problema de negocio y diseñar arquitecturas escalables y resilientes", "Saber instalar programas"],
          answerIndex: 1,
          explanation: "La sintaxis la genera la IA; la comprensión del dominio de negocio y la arquitectura de sistemas es la responsabilidad humana."
        },
        {
          question: "¿Cómo debe abordar un Ingeniero Senior la interacción con herramientas de IA?",
          options: ["Como un arquitecto que dirige a un asistente junior, exigiendo especificaciones claras y auditando cada entrega", "Delegando la responsabilidad legal a la IA", "Evitando usar la IA"],
          answerIndex: 0,
          explanation: "La IA es un multiplicador de fuerza; el ingeniero asume la responsabilidad del diseño, la corrección y el mantenimiento."
        },
        {
          question: "¿Por qué la verificación mediante Pruebas Automatizadas (TDD) se vuelve MÁS crítica al usar IA?",
          options: ["Porque los tests garantizan que las sugerencias de la IA no rompan la lógica existente ni introduzcan regresiones", "Porque la IA no sabe qué es un test", "Porque reduce la velocidad"],
          answerIndex: 0,
          explanation: "Las pruebas automatizadas sirven como barrera de contención imparcial para validar que el código de la IA cumple el contrato exacto."
        }
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: COMPRENSIÓN PROFUNDA DEL HARDWARE, KERNEL Y RECURSOS DEL SISTEMA",
      description: "Lo que la IA no puede sentir: CPU caches (L1/L2/L3), RAM, llamadas al sistema (syscalls) y E/S de disco.",
      items: [
        "Jerarquía de Memoria: Registros CPU (1ns) < L1/L2/L3 Cache < RAM (100ns) < SSD/NVMe.",
        "Cache Misses y Localidad Espacial/Temporal de datos.",
        "Llamadas al Sistema Kernel (syscalls) y cambio de contexto (Context Switch).",
        "Efecto de la Memoria Virtual, Paginación y Thrashing.",
        "Interrupciones de Hardware y Manejo de I/O Asíncrono."
      ],
      content: "Los agentes IA generan texto plano; no 'sienten' la latencia física del hardware. Un algoritmo que recorre una matriz por columnas en lugar de por filas puede ser 10 veces más lento debido a constantes **Cache Misses** en la CPU L1. Un ingeniero sabe que una llamada al sistema (`syscall`) para escribir 1 byte en disco tiene un costo enorme en cambios de contexto de kernel. Dominar la jerarquía de memoria y el comportamiento de la CPU diferencia a los arquitectos de sistemas de los usuarios casuales.",
      codeSnippet: `# Ejemplo en Python de Localidad de Referencia y Cache en CPU
import time

matriz = [[1]*1000 for _ in range(1000)]

# Recorrido por Filas (Cache Friendly - Localidad Espacial)
t0 = time.perf_counter()
suma_filas = sum(matriz[i][j] for i in range(1000) for j in range(1000))
t_filas = time.perf_counter() - t0

# Recorrido por Columnas (Cache Unfriendly - Saltos de Memoria)
t0 = time.perf_counter()
suma_cols = sum(matriz[j][i] for i in range(1000) for j in range(1000))
t_cols = time.perf_counter() - t0

print(f"Tiempo por filas (Cache Hit): {t_filas*1000:.2f}ms")
print(f"Tiempo por columnas (Cache Miss): {t_cols*1000:.2f}ms")`,
      quiz: [
        {
          question: "¿Por qué el recorrido de una matriz bidimensional por filas es significativamente más rápido que por columnas en la CPU?",
          options: ["Porque aprovecha la Localidad Espacial de la Memoria Caché L1/L2 al leer bloques contiguos de RAM", "Porque Python prefiere las filas", "Porque la CPU cuenta mejor por filas"],
          answerIndex: 0,
          explanation: "La RAM transfiere datos a la memoria caché de la CPU en bloques contiguos (líneas de caché). Recorrer en orden contiguo maximiza los Cache Hits."
        },
        {
          question: "¿Qué es un 'Context Switch' (Cambio de Contexto) en el Kernel del Sistema Operativo?",
          options: ["El proceso mediante el cual la CPU guarda el estado de un hilo/proceso para ejecutar otro, introduciendo sobrecarga de ciclos", "Cambiar de pantalla", "Un formateo de disco"],
          answerIndex: 0,
          explanation: "El cambio de contexto guarda los registros y el puntero de instrucción del proceso actual para dar paso a otro, consumiendo recursos de CPU."
        },
        {
          question: "¿Cuál es el orden de latencia aproximado de acceso a los datos desde la memoria de la CPU?",
          options: ["Registros CPU (1ns) < Cache L1 (1-2ns) < RAM (100ns) < Disco NVMe (10,000ns)", "RAM < Registros < Disco < Cache", "Disco < RAM < Cache < Registros"],
          answerIndex: 0,
          explanation: "Los registros internos de la CPU son los más rápidos (sub-nanosegundo), seguidos de la memoria caché L1/L2/L3, la RAM y finalmente el disco."
        },
        {
          question: "¿Qué es el fenómeno de 'Thrashing' en la gestión de memoria virtual?",
          options: ["Cuando el sistema pasa más tiempo intercambiando páginas entre RAM y Disco (Swap) que ejecutando instrucciones reales", "Un tipo de juego", "Una infección por virus"],
          answerIndex: 0,
          explanation: "El thrashing ocurre cuando la memoria RAM se satura y el SO pasa constantemente leyendo/escribiendo en el disco de intercambio."
        },
        {
          question: "¿Por qué una llamada al sistema (`syscall`) es más costosa que una llamada a función interna de software?",
          options: ["Porque requiere cambiar el modo de ejecución de la CPU de Modo Usuario a Modo Kernel (Kernel Mode)", "Porque usa internet", "Porque requiere reiniciar la computadora"],
          answerIndex: 0,
          explanation: "Una syscall cruza la frontera de seguridad entre espacio de usuario y espacio de kernel, lo cual requiere validación y cambio de contexto."
        }
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: ARQUITECTURA DE SISTEMAS Y PENSAMIENTO DE DISEÑO (SYSTEM DESIGN)",
      description: "Diseño de sistemas distribuidos a gran escala: balanceo de carga, escalabilidad horizontal vs vertical y capas de almacenamiento.",
      items: [
        "Escalabilidad Vertical (Scale Up) vs Escalabilidad Horizontal (Scale Out).",
        "Balanceadores de Carga (Load Balancers - Nginx, HAProxy, ALB).",
        "Estrategias de Caché a Nivel de Sistema (CDN, Redis, Memcached).",
        "Desacoplamiento de Base de Datos: Read Replicas y Sharding.",
        "Estimación de Recursos en la Servilleta (Back-of-the-envelope estimation)."
      ],
      content: "El Diseño de Sistemas (System Design) es la disciplina que permite a un Ingeniero proyectar plataformas capaces de soportar millones de solicitudes por segundo. Un 'vibe coder' asume que un solo servidor ejecutará todo el software. Un Arquitecto diseña sistemas desacoplados: un **Load Balancer** distribuye el tráfico entre N instancias de cómputo sin estado (Stateless), las lecturas intensivas se resuelven en una capa de **Caché en memoria (Redis)** o **CDN**, y las escrituras en la base de datos se distribuyen mediante **Sharding**.",
      codeSnippet: `# Ejemplo conceptual de un Balanceador de Carga Round-Robin en Python
class LoadBalancerRoundRobin:
    def __init__(self, servidores: list[str]):
        self.servidores = servidores
        self.indice = 0

    def obtener_servidor(self) -> str:
        servidor = self.servidores[self.indice]
        self.indice = (self.indice + 1) % len(self.servidores)
        return servidor

lb = LoadBalancerRoundRobin(["Server_US_East", "Server_US_West", "Server_EU_Central"])
for i in range(5):
    print(f"Petición {i+1} enviada a: {lb.obtener_servidor()}")`,
      quiz: [
        {
          question: "¿Cuál es la diferencia principal entre Escalabilidad Vertical y Escalabilidad Horizontal?",
          options: ["La vertical agrega más potencia (CPU/RAM) a un único servidor; la horizontal agrega más servidores a la red", "La vertical usa Linux y la horizontal Windows", "Son exactamente idénticas"],
          answerIndex: 0,
          explanation: "La escalabilidad horizontal (Scale Out) permite crecimiento ilimitado añadiendo múltiples nodos económicos distribuídos."
        },
        {
          question: "¿Qué función cumple una Red de Distribución de Contenidos (CDN)?",
          options: ["Almacenar en caché archivos estáticos (imágenes, JS, CSS) en servidores geográficamente cercanos a los usuarios finales", "Encriptar bases de datos", "Compilar código C++"],
          answerIndex: 0,
          explanation: "Las CDNs reducen la latencia entregando el contenido desde el servidor de borde (edge server) más cercano al cliente."
        },
        {
          question: "¿Qué es el 'Sharding' en bases de datos a gran escala?",
          options: ["La partición horizontal de un conjunto de datos masivo entre múltiples servidores independientes de base de datos", "Un respaldo en cinta", "Borrar índices"],
          answerIndex: 0,
          explanation: "El sharding divide una tabla gigante en fragmentos (shards) distribuidos en distintas máquinas según una clave de partición."
        },
        {
          question: "¿Qué caracteriza a un servicio web 'Stateless' (Sin Estado)?",
          options: ["Que el servidor no guarda información de la sesión del cliente en su memoria local, permitiendo que cualquier réplica atienda la petición", "Que no tiene base de datos", "Que es gratuito"],
          answerIndex: 0,
          explanation: "Al no guardar estado en el servidor de cómputo, se pueden encender o apagar instancias de forma elástica sin interrumpir a los usuarios."
        },
        {
          question: "¿Para qué sirve el cálculo 'Back-of-the-envelope' (Estimación en la Servilleta)?",
          options: ["Para calcular rápidamente requerimientos de ancho de banda, RAM y almacenamiento necesarios antes de construir el sistema", "Para diseñar logotipos", "Para firmar contratos"],
          answerIndex: 0,
          explanation: "Permite validar la viabilidad técnica y financiera de una arquitectura mediante estimaciones ordenadas de magnitud."
        }
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: WORKFLOWS AGÉNTICOS E INGENIERÍA DE PROMPTS AVANZADA",
      description: "Cómo dirigir equipos de subagentes IA, gestionar contextos, herramientas (Tools) y patrones de razonamiento.",
      items: [
        "Arquitectura de Agentes Inteligentes: Modelo + Memoria + Herramientas (Tools) + Bucle de Planificación.",
        "Patrones Agénticos: ReAct (Reason + Act), Reflection, Plan-and-Solve.",
        "Gestión de Ventana de Contexto (Context Window Management) y Compresión.",
        "Ingeniería de Prompts Estructurados (XML/JSON/Markdown Schemas).",
        "Uso de Agentes Especializados para Investigación, Refactor y Testing."
      ],
      content: "Dirigir Inteligencia Artificial requiere conocer la arquitectura interna de un Agente Inteligente. Un Agente combina un LLM de razonamiento con una memoria de trabajo, herramientas ejecutables (como shell, lectores de archivos o APIs) y un bucle de planificación (ej: ReAct: Pensar → Actuar → Observar). El Ingeniero en Sistemas moderno no escribe prompts informales; diseña arquitecturas de agentes, define herramientas con contratos rígidos y controla la ventana de contexto.",
      codeSnippet: `# Ejemplo conceptual del bucle ReAct de un Agente IA en Python
class AgenteReAct:
    def __init__(self, herramientas: dict):
        self.herramientas = herramientas

    def paso_razonamiento(self, objetivo: str, observacion: str = ""):
        print(f"1. PENSAR: Evaluando objetivo '{objetivo}' con observación '{observacion}'")
        # Simula selección de herramienta por el LLM
        accion = "leer_archivo"
        arg = "main.py"
        print(f"2. ACTUAR: Ejecutando herramienta '{accion}' con argumento '{arg}'")
        resultado = self.herramientas[accion](arg)
        print(f"3. OBSERVAR: Resultado obtenido -> {resultado}")

agente = AgenteReAct({'leer_archivo': lambda path: "def main(): print('hola')"})
agente.paso_razonamiento("Analizar código main.py")`,
      quiz: [
        {
          question: "¿En qué consiste el patrón de razonamiento agéntico ReAct (Reasoning + Acting)?",
          options: ["En un framework de interfaz gráfica", "En un bucle interactivo donde el agente alterna entre Razonar (Pensar), Ejecutar una Herramienta (Actuar) y Analizar la respuesta (Observar)", "En reiniciar el modelo"],
          answerIndex: 1,
          explanation: "ReAct permite a los agentes de IA resolver tareas complejas paso a paso ejecutando herramientas del entorno."
        },
        {
          question: "¿Qué es la 'Ventana de Contexto' (Context Window) de un LLM?",
          options: ["La pantalla de chat", "El límite máximo de tokens (texto) que el modelo puede procesar de forma simultánea en una sola invocación", "La velocidad de internet"],
          answerIndex: 1,
          explanation: "La ventana de contexto define cuánta información previa puede recordar el modelo en su memoria de atención de corto plazo."
        },
        {
          question: "¿Por qué es fundamental definir 'Tools' (Herramientas) con esquemas de parámetros estrictos (JSON Schema) para los agentes?",
          options: ["Para que el modelo sepa exactamente qué parámetros enviar y evitar llamadas erróneas con sintaxis inválida", "Para ahorrar espacio en disco", "Porque la IA no puede usar funciones"],
          answerIndex: 0,
          explanation: "Los esquemas JSON rígidos garantizan que las llamadas a funciones de los agentes sean validadas antes de ejecutarse en el sistema."
        },
        {
          question: "En el contexto de agentes IA, ¿qué es la técnica de 'Reflection' (Reflexión)?",
          options: ["Un espejo en la pantalla", "Un paso donde el agente evalúa su propio resultado previo para identificar fallas y corregirlas antes de responder al usuario", "Una copia de seguridad"],
          answerIndex: 1,
          explanation: "Reflection permite al agente auto-criticar su código o respuesta intermedia, elevando significativamente la calidad del resultado final."
        },
        {
          question: "¿Cuál es el riesgo de saturar la ventana de contexto de un LLM con información irrelevante?",
          options: ["El fenómeno de 'Perdida en el Medio' (Lost in the Middle) y aumento innecesario de costos y latencia", "Que la computadora se apague", "Que se borre la base de datos"],
          answerIndex: 0,
          explanation: "Saturar el contexto degrada la atención del modelo hacia las instrucciones clave e incrementa el costo por token procesado."
        }
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: VERIFICACIÓN FORMAL, TDD Y TESTING AUTOMATIZADO RIGUROSO",
      description: "Construcción de arneses de pruebas deterministas (Unit, Integration, E2E) para verificar código de IA.",
      items: [
        "Desarrollo Guiado por Pruebas (TDD - Test-Driven Development): Red-Green-Refactor.",
        "Pruebas Unitarias, de Integración y de Extremo a Extremo (E2E).",
        "Objetos Falsos: Mocks, Stubs, Fakes y Spies.",
        "Property-Based Testing (Pruebas basadas en propiedades probabilísticas con Hypothesis/QuickCheck).",
        "Cobertura de Código (Code Coverage) y Análisis Estático de Mutación."
      ],
      content: "La forma más efectiva de evitar que el código generado por IA rompa tu sistema es contar con un arnés de pruebas automatizadas insuperable. El principio de **Test-Driven Development (TDD)** exige escribir primero la prueba que falla (Red), luego el código mínimo que la satisface (Green) y finalmente refactorizar (Refactor). Las **Pruebas Basadas en Propiedades (Property-Based Testing)** generan miles de insumos aleatorios para encontrar casos extremos (Edge Cases) que ningún desarrollador ni IA habría previsto.",
      codeSnippet: `# Ejemplo de TDD y Testing en Python con unittest
import unittest

def sumar_sancionada(a: int, b: int) -> int:
    if a < 0 or b < 0:
        raise ValueError("No se admiten valores negativos")
    return a + b

class TestSumarSancionada(unittest.TestCase):
    def test_suma_valores_positivos(self):
        self.assertEqual(sumar_sancionada(10, 20), 30)

    def test_lanza_error_en_negativos(self):
        with self.assertRaises(ValueError):
            sumar_sancionada(-5, 10)

if __name__ == '__main__':
    unittest.main(exit=False)`,
      quiz: [
        {
          question: "¿Cuál es el ciclo estandarizado del desarrollo guiado por pruebas (TDD)?",
          options: ["Escribir código -> Probar a mano -> Lanzar", "Red (escribir test que falla) -> Green (escribir código que pasa) -> Refactor (limpiar el código)", "Lanzar a producción -> Corregir"],
          answerIndex: 1,
          explanation: "El ciclo Red-Green-Refactor garantiza que todo código nazca respaldado por una prueba verificable desde el primer minuto."
        },
        {
          question: "¿Qué diferencia a un 'Mock' de un 'Stub' en la creación de pruebas de software?",
          options: ["Un Stub proporciona respuestas predeterminadas a llamadas de la prueba; un Mock además verifica que se hayan realizado las llamadas esperadas", "Un Mock es más rápido", "Son exactamente lo mismo"],
          answerIndex: 0,
          explanation: "Los Stubs devuelven datos fijos de apoyo, mientras que los Mocks aseveran interacciones específicas (ej: comprobar que se llamó a `enviar_email()`)."
        },
        {
          question: "¿En qué consiste la técnica de 'Property-Based Testing' (Pruebas basadas en propiedades)?",
          options: ["En probar la pantalla", "En definir invariantes lógicas y dejar que la herramienta genere cientos de insumos aleatorios para intentar romper el código", "En escribir tests en HTML"],
          answerIndex: 1,
          explanation: "Property-Based Testing explora probabilísticamente miles de combinaciones aleatorias descubriendo errores en bordes no previstos."
        },
        {
          question: "¿Qué mide el análisis de 'Cobertura de Código' (Code Coverage)?",
          options: ["El porcentaje de líneas de código que son ejecutadas al correr la suite de pruebas automatizadas", "La velocidad de los tests", "El número de funciones"],
          answerIndex: 0,
          explanation: "Indica qué proporción de las ramas y líneas de tu base de código han sido ejercitadas por las pruebas."
        },
        {
          question: "¿Qué es el 'Mutation Testing' (Pruebas de Mutación)?",
          options: ["Modificar genéticamente a los programadores", "Introducir intencionalmente pequeños fallos (mutantes) en el código fuente para evaluar si la suite de tests es capaz de detectarlos", "Reiniciar la base de datos"],
          answerIndex: 1,
          explanation: "Mide la calidad de tus tests: si un mutante introducido no hace fallar ningún test, la suite de pruebas es insuficiente."
        }
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: DOMAIN-DRIVEN DESIGN (DDD): MODELADO DE NEGOCIO EN EL MUNDO REAL",
      description: "Modelado de software orientado al dominio: Bounded Contexts, Ubiquitous Language, Entities, Value Objects y Aggregates.",
      items: [
        "Filosofía de Domain-Driven Design (Eric Evans 2003).",
        "Lenguaje Ubicuo (Ubiquitous Language) entre ingenieros y expertos de negocio.",
        "Contextos Delimitados (Bounded Contexts) y Context Mapping.",
        "Entidades (Entities) con Identidad vs Objetos de Valor (Value Objects) inmutables.",
        "Agregados (Aggregates), Raíz de Agregado (Aggregate Root) y Eventos de Dominio."
      ],
      content: "Domain-Driven Design (DDD) es la metodología para traducir problemas de negocio complejos en modelos de software mantenibles. El principio central es el **Lenguaje Ubicuo**: el código debe usar los exactos términos y conceptos que emplean los expertos del dominio de negocio (evitando tecnicismos abstractos). Los **Value Objects** (como `Dinero` o `Direccion`) son inmutables y se definen por sus valores, mientras que las **Entidades** poseen una identidad única persistente en el tiempo (como `ClienteID`).",
      codeSnippet: `# Ejemplo de Value Object inmutable y Entidad en DDD con Python
from dataclasses import dataclass

# Value Object: Inmutable, definido por sus valores
@dataclass(frozen=True)
class Dinero:
    monto: float
    moneda: str

    def sumar(self, otro: 'Dinero') -> 'Dinero':
        assert self.moneda == otro.moneda, "No se pueden sumar monedas distintas"
        return Dinero(self.monto + otro.monto, self.moneda)

# Entidad: Definida por su ID único
class Pedido:
    def __init__(self, pedido_id: str, total: Dinero):
        self.pedido_id = pedido_id
        self.total = total

d1 = Dinero(100.0, "USD")
d2 = Dinero(50.0, "USD")
print(f"Total Value Object: {d1.sumar(d2)}") # Dinero(monto=150.0, moneda='USD')`,
      quiz: [
        {
          question: "¿Qué es el 'Lenguaje Ubicuo' (Ubiquitous Language) en Domain-Driven Design (DDD)?",
          options: ["Un nuevo lenguaje de programación", "Un vocabulario riguroso y compartido por igual entre los ingenieros de software y los expertos del negocio en el código y en las reuniones", "Traducción automática"],
          answerIndex: 1,
          explanation: "Asegura que las clases, métodos y variables reflejen exactamente el léxico del dominio de negocio sin fricción de traducción."
        },
        {
          question: "¿Qué diferencia a una Entidad (Entity) de un Objeto de Valor (Value Object) en DDD?",
          options: ["La Entidad posee una Identidad única persistente (ID); el Value Object carece de ID y se define exclusivamente por sus atributos inmutables", "Los Value Objects usan SQL", "Las Entidades no tienen campos"],
          answerIndex: 0,
          explanation: "Dos Value Objects con los mismos atributos son idénticos e intercambiables; dos Entidades requieren una ID para distinguirse."
        },
        {
          question: "¿Qué es un 'Bounded Context' (Contexto Delimitado) en la arquitectura de un sistema amplio?",
          options: ["Un límite explícito dentro del cual un modelo de dominio particular aplica de forma coherente con su propio lenguaje", "Una carpeta del proyecto", "Un servidor web"],
          answerIndex: 0,
          explanation: "Delimita las fronteras de significado: la palabra 'Cliente' puede significar cosas distintas en el módulo de Ventas vs en el módulo de Soporte."
        },
        {
          question: "¿Cuál es la función de un 'Agregado' (Aggregate) y su Raíz de Agregado (Aggregate Root)?",
          options: ["Agrupar objetos relacionados que se tratan como una unidad indivisible para mantener invariantes de consistencia transaccional", "Hacer copias de seguridad", "Generar reportes PDF"],
          answerIndex: 0,
          explanation: "El Aggregate Root es el único punto de entrada de acceso externo para modificar la colección interna de objetos garantizando consistencia."
        },
        {
          question: "¿Qué es un 'Evento de Dominio' (Domain Event)?",
          options: ["Una reunión de equipo", "Un hecho pasado de relevancia para el negocio que ocurrió en el dominio (ej: `PedidoPagado`, `FacturaEmitida`)", "Un error de compilador"],
          answerIndex: 1,
          explanation: "Los eventos de dominio notifican a otras partes del sistema sobre cambios de estado significativos que han sucedido."
        }
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: PROFILING DE CÓDIGO, DIAGNÓSTICO DE MEMORIA Y CUELLOS DE BOTELLA",
      description: "Diagnóstico profundo de rendimiento: Profilers de CPU, Heap Dumps, Fugas de Memoria y Flame Graphs.",
      items: [
        "Diferencia entre benchmarking superficial y Profiling científico de rendimiento.",
        "Profilers de CPU (cProfile, pprof, VisualVM) y análisis de Flame Graphs.",
        "Diagnóstico de Fugas de Memoria (Memory Leaks) y análisis de Heap Dumps.",
        "Sobrecarga del Recolector de Basura (Garbage Collection Pauses).",
        "Optimización de Consultas I/O y problema de la consulta N+1."
      ],
      content: "Optimizar código sin métricas de profiling es adivinar. El **Profiling** es la técnica científica para medir exactamente en qué líneas de código se consume el tiempo de CPU o la memoria RAM. Los **Flame Graphs** visualizan el árbol de llamadas de funciones donde el ancho de cada bloque representa el tiempo gastado. Identificar la sobrecarga del **Garbage Collector (GC)** o corregir el problema de la consulta N+1 en bases de datos resuelve cuellos de botella reales en segundos.",
      codeSnippet: `# Ejemplo de Profiling de CPU en Python con cProfile
import cProfile

def funcion_lenta():
    total = 0
    for i in range(1_000_000):
        total += i
    return total

def funcion_rapida():
    return sum(range(1_000_000))

def flujo_principal():
    funcion_lenta()
    funcion_rapida()

# Ejecutar el profiler sobre el flujo
cProfile.run('flujo_principal()')`,
      quiz: [
        {
          question: "¿Qué información visualiza un 'Flame Graph' (Gráfico de Llama) al analizar el rendimiento de un sistema?",
          options: ["La temperatura de la tarjeta de video", "La pila de llamadas de funciones donde el ancho de cada barra representa el tiempo acumulado de ejecución de CPU", "El costo de la nube"],
          answerIndex: 1,
          explanation: "Los Flame Graphs muestran de forma gráfica e intuitiva cuáles funciones consumen la mayor proporción de tiempo de procesador."
        },
        {
          question: "¿Qué es una Fuga de Memoria (Memory Leak) en un lenguaje con Recolector de Basura (como Java, Python o JS)?",
          options: ["Cuando objetos que ya no se necesitan siguen siendo referenciados por error, impidiendo que el Garbage Collector los libere", "Un ataque de hackers", "Un fallo del disco"],
          answerIndex: 0,
          explanation: "El GC no puede liberar objetos si aún existe alguna referencia activa hacia ellos, saturando gradualmente la memoria Heap."
        },
        {
          question: "¿Qué representa el problema de la 'Consulta N+1' en ORMs de bases de datos?",
          options: ["Una falla matemática", "Ejecutar 1 consulta inicial para traer N registros y luego N consultas individuales adicionales para traer sus relaciones", "Un error de clave primaria"],
          answerIndex: 1,
          explanation: "El problema N+1 destruye el rendimiento saturando la base de datos con N+1 llamadas de red que pudieron hacerse en una sola consulta JOIN."
        },
        {
          question: "¿Qué síntoma provoca en la aplicación una pausa prolongada por 'Garbage Collection Stop-the-World'?",
          options: ["Picos repentinos de latencia (congelamiento temporal) donde la aplicación deja de responder peticiones", "La pantalla se vuelve negra", "Reinicios de la CPU"],
          answerIndex: 0,
          explanation: "Las pausas Stop-the-World detienen la ejecución de todos los hilos de software mientras el recolector limpia la memoria Heap."
        },
        {
          question: "¿Cuál es la regla de oro antes de comenzar a refactorizar código por motivos de velocidad?",
          options: ["Reescribir todo en C++", "Perfilado (Profiling) previo para medir empíricamente dónde está el verdadero cuello de botella de rendimiento", "Eliminar los tests"],
          answerIndex: 1,
          explanation: "Nunca se debe optimizar por intuición sin antes obtener mediciones precisas del profiler de CPU/RAM."
        }
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: CIBERSEGURIDAD DESDE EL DISEÑO: OWASP TOP 10 Y DEVSECOPS",
      description: "Seguridad de software integral: OWASP Top 10, sanitización de insumos, JWT, OAuth2 y auditoría de código IA.",
      items: [
        "Inyección SQL, XSS (Cross-Site Scripting) y CSRF (Cross-Site Request Forgery).",
        "Autenticación y Autorización Robusta: OAuth2, OpenID Connect y JWT.",
        "Principio de Menor Privilegio (Least Privilege) y Defensa en Profundidad.",
        "Sanitización y Validación de Entradas de Usuario.",
        "Auditoría de Dependencias Vulnerables (Snyk, Dependabot, OWASP Dependency Check)."
      ],
      content: "La ciberseguridad debe ser una propiedad intrínseca del diseño de software (Security by Design). Los agentes de IA frecuentemente sugieren código vulnerable a la **Inyección SQL** (concatenando strings de consultas en lugar de usar consultas preparadas parametradas) o vulnerabilidades **XSS** (inyectando scripts HTML sin escapar en el cliente). Un Ingeniero en Sistemas audita proactivamente el **OWASP Top 10**, implementa autenticación basada en estándares y aplica el Principio de Menor Privilegio.",
      codeSnippet: `# Vulnerabilidad de Inyección SQL vs Código Seguro en Python
# VULNERABLE (Típico sugerido sin criterio):
def login_vulnerable(cursor, user_input, pass_input):
    query = f"SELECT * FROM users WHERE user = '{user_input}' AND pass = '{pass_input}'"
    cursor.execute(query) # ¡Vulnerable a ' OR '1'='1!

# SEGURO (Consultas Parametrizadas / Prepared Statements):
def login_seguro(cursor, user_input, pass_input):
    query = "SELECT * FROM users WHERE user = %s AND pass = %s"
    cursor.execute(query, (user_input, pass_input)) # Insumos aislados del comando SQL`,
      quiz: [
        {
          question: "¿Cómo se previene de forma categórica una vulnerabilidad de Inyección SQL en el acceso a datos?",
          options: ["Usando Consultas Parametrizadas (Prepared Statements) o un ORM seguro que aísle los datos del comando SQL", "Encriptando la base de datos", "Usando contraseñas largas"],
          answerIndex: 0,
          explanation: "Las consultas parametrizadas tratan el insumo del usuario estrictamente como un valor de dato, jamás como ejecutable SQL."
        },
        {
          question: "¿Qué es una vulnerabilidad Cross-Site Scripting (XSS)?",
          options: ["Inyectar y ejecutar código JavaScript malicioso en el navegador de otros usuarios debido a falta de sanitización al renderizar datos", "Un fallo del router", "Una base de datos caída"],
          answerIndex: 0,
          explanation: "XSS ocurre cuando una aplicación web refleja insumos sin escapar permitiendo la ejecución de scripts maliciosos en el cliente."
        },
        {
          question: "¿Qué establece el Principio de Menor Privilegio (Least Privilege) en seguridad?",
          options: ["Dar acceso total de administrador a todos los desarrolladores", "Otorgar a cada usuario, proceso o servicio únicamente los permisos estrictamente necesarios para cumplir su función", "No usar contraseñas"],
          answerIndex: 1,
          explanation: "Limita el impacto de un posible compromiso de seguridad restringiendo al mínimo las capacidades de cada entidad."
        },
        {
          question: "¿Para qué sirve la firma criptográfica en un JSON Web Token (JWT)?",
          options: ["Garantizar que el contenido de los claims del token no haya sido alterado o manipulado por el cliente", "Comprimir el tamaño del token", "Ocultar la información"],
          answerIndex: 0,
          explanation: "La firma del JWT permite al servidor verificar de forma instantánea que el token fue generado por él y no alterado."
        },
        {
          question: "¿Qué es el enfoque DevSecOps en el ciclo de vida de desarrollo de software?",
          options: ["Integrar pruebas y herramientas de seguridad de forma automatizada en cada etapa de la tubería CI/CD", "Contratar más hackers", "Usar antivirus en las laptops"],
          answerIndex: 0,
          explanation: "DevSecOps automatiza el escaneo de código estático (SAST), análisis de dependencias y vulnerabilidades en la integración continua."
        }
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: SISTEMAS DISTRIBUIDOS, ALGORITMOS DE CONSENSO Y TEOREMA CAP",
      description: "Desafíos de la distribución: Consistencia, Disponibilidad, Tolerancia a Particiones y Algoritmos de Consenso (Raft/Paxos).",
      items: [
        "El Teorema CAP (Brewer): Consistencia (C), Disponibilidad (A) y Tolerancia al Particionado (P).",
        "Sistemas CP vs Sistemas AP.",
        "Consistencia Eventual (Eventual Consistency) y Relojes Vectoriales.",
        "Algoritmos de Consenso Distribuido: Raft y Paxos.",
        "Modelos de Fallas: Redes no confiables, Split-Brain y Latencia de Red."
      ],
      content: "En un sistema distribuido, la red NUNCA es confiable. El **Teorema CAP** demuestra que ante una partición de red inevitable (P), un sistema solo puede garantizar o bien **Consistencia (C)** (todos los nodos ven los mismos datos al mismo tiempo) o bien **Disponibilidad (A)** (cada petición recibe respuesta sin error, aunque los datos estén desactualizados). Algoritmos de Consenso como **Raft** permiten a clusters distribuidos de nodos acordar un estado común y elegir líderes de forma segura.",
      codeSnippet: `# Ejemplo conceptual de Consistencia Eventual con Timestamp Vectorial
class NodoDistribuido:
    def __init__(self, nombre: str):
        self.nombre = nombre
        self.valor = None
        self.timestamp = 0

    def escribir(self, nuevo_valor: str, ts: int):
        # Regla Last-Write-Wins (LWW)
        if ts > self.timestamp:
            self.valor = nuevo_valor
            self.timestamp = ts

nodo_A = NodoDistribuido("Nodo_A")
nodo_B = NodoDistribuido("Nodo_B")

# Actualización con timestamp
nodo_A.escribir("Dato_V1", 100)
nodo_B.escribir("Dato_V2", 105) # Escrito más tarde

# Sincronización Eventual entre nodos
nodo_A.escribir(nodo_B.valor, nodo_B.timestamp)
print(f"Valor sincronizado en Nodo A: {nodo_A.valor}") # 'Dato_V2`,
      quiz: [
        {
          question: "¿Qué establece categóricamente el Teorema CAP (Teorema de Brewer)?",
          options: ["Que un sistema distribuido ante una partición de red sólo puede garantizar Consistencia O Disponibilidad, pero nunca ambas al mismo tiempo", "Que todos los sistemas son consistentes", "Que el internet no falla"],
          answerIndex: 0,
          explanation: "Ante la pérdida de comunicación entre nodos (Partición), se debe elegir entre rechazar peticiones (CP) o responder datos viejos (AP)."
        },
        {
          question: "¿Qué caracteriza a un sistema distribuido con 'Consistencia Eventual' (Eventual Consistency)?",
          options: ["Que si no hay nuevas actualizaciones, eventualmente todos los nodos del cluster convergerán y retornarán el mismo dato", "Que los datos se borran eventualmente", "Que nunca es consistente"],
          answerIndex: 0,
          explanation: "Privilegia la alta disponibilidad; las réplicas sincronizan las actualizaciones en segundo plano hasta converger."
        },
        {
          question: "¿Para qué sirve un Algoritmo de Consenso Distribuido como Raft o Paxos?",
          options: ["Para permitir que un grupo de servidores independientes acuerden decisiones, valores de estado o un líder único ante fallas", "Para acelerar las pantallas", "Para comprimir imágenes"],
          answerIndex: 0,
          explanation: "Raft y Paxos son los algoritmos que permiten a bases de datos distribuidas (etcd, Consul, CockroachDB) mantener un registro replicado ordenado."
        },
        {
          question: "¿Qué es el fenómeno de 'Split-Brain' (Cerebro Dividido) en un cluster distribuido?",
          options: ["Cuando la red se corta y dos subgrupos aislados de nodos se autoproclaman como líderes válidos de forma independiente", "Un fallo de hardware en la RAM", "Una prueba de esfuerzo"],
          answerIndex: 0,
          explanation: "Ocurre cuando la partición de red provoca que dos facciones del cluster crean ser el líder activo aceptando datos contradictorios."
        },
        {
          question: "¿Qué es la regla de Quórum (Q = N/2 + 1) en sistemas distribuidos?",
          options: ["El número mínimo de votos o nodos necesarios para tomar decisiones válidas de consenso sin ambigüedad", "Un tipo de contraseña", "Un protocolo de interfaz"],
          answerIndex: 0,
          explanation: "Exigir una mayoría estricta (Quórum) previene el fenómeno de Split-Brain garantizando que solo un subgrupo decida."
        }
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: BASES DE DATOS A ESCALA: SQL, NOSQL, VECTORES Y MOTORES DE BÚSQUEDA",
      description: "Selección estratégica del motor de almacenamiento adecuado: ACID relacional, NoSQL Documental, Columnar y Búsqueda Vectorial.",
      items: [
        "Transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) y Niveles de Aislamiento.",
        "Modelado NoSQL: Documental (MongoDB), Llave-Valor (Redis), Columnar (Cassandra) y Grafos (Neo4j).",
        "Índices de Base de Datos: B+ Trees, Hash Indexes y LSM Trees.",
        "Búsqueda Vectorial e Índices HNSW para embeddings de IA.",
        "Motores de Búsqueda de Texto Completo (Elasticsearch / OpenSearch)."
      ],
      content: "No existe una base de datos universal para todos los casos de uso (Persistence Ignorance). Las **Bases de Datos Relacionales (PostgreSQL/MySQL)** garantizan propiedades **ACID** y relaciones complejas estructuradas. Las bases **Documentales (MongoDB)** ofrecen esquemas flexibles. Las **Columnares (Cassandra/ClickHouse)** procesan analítica masiva (OLAP). Y las **Bases Vectoriales (Pinecone, Qdrant, pgvector)** indexan embeddings de Inteligencia Artificial para búsqueda semántica.",
      codeSnippet: `# Ejemplo conceptual de pgvector / Búsqueda Semántica Vectorial en SQL
# CREATE EXTENSION vector;
# CREATE TABLE documentos (id serial PRIMARY KEY, contenido text, embedding vector(1536));
# SELECT contenido FROM documentos ORDER BY embedding <=> '[0.012, -0.045, ...]' LIMIT 3;

import math

def similitud_coseno(v1: list[float], v2: list[float]) -> float:
    dot = sum(a * b for a, b in zip(v1, v2))
    norm_a = math.sqrt(sum(a * a for a in v1))
    norm_b = math.sqrt(sum(b * b for b in v2))
    return dot / (norm_a * norm_b)

v_query = [0.1, 0.8, 0.3]
v_doc1 = [0.12, 0.79, 0.28] # Muy similar
v_doc2 = [-0.9, 0.1, 0.05]  # Muy diferente

print(f"Similitud Doc 1: {similitud_coseno(v_query, v_doc1):.4f}") # ~0.99
print(f"Similitud Doc 2: {similitud_coseno(v_query, v_doc2):.4f}") # ~0.08`,
      quiz: [
        {
          question: "¿Qué garantiza la propiedad 'Aislamiento' (Isolation) en una transacción ACID de SQL?",
          options: ["Que las transacciones concurrentes se ejecuten sin interferir entre sí como si fueran secuenciales", "Que los datos se borren", "Que no se use memoria RAM"],
          answerIndex: 0,
          explanation: "Evita lecturas sucias (dirty reads) y condiciones de carrera entre múltiples clientes que escriben en la base de datos simultáneamente."
        },
        {
          question: "¿Para qué tipo de procesamiento son ideales las Bases de Datos Columnares (ej: ClickHouse, Cassandra)?",
          options: ["Para consultas analíticas masivas (OLAP) sobre miles de millones de filas agregando métricas", "Para juegos 2D", "Para guardar archivos de texto corto"],
          answerIndex: 0,
          explanation: "Al almacenar los datos agrupados por columnas en lugar de por filas, leer promedios o sumas de una sola columna es extremadamente rápido."
        },
        {
          question: "¿Qué estructura de datos utilizan internamente las bases de datos relacionales para indexar columnas en disco?",
          options: ["Árboles B / B+ Trees", "Listas enlazadas simples", "Matrices de adyacencia"],
          answerIndex: 0,
          explanation: "Los árboles B+ tienen un alto factor de ramificación, reduciendo drásticamente las lecturas físicas de bloques a disco (I/O) a $O(\\log n)$."
        },
        {
          question: "¿Para qué se utiliza una Base de Datos Vectorial (ej: Qdrant, Pinecone, pgvector) en la era de la IA?",
          options: ["Para almacenar embeddings numéricos de texto/imágenes y realizar búsquedas por similitud semántica en tiempo real", "Para guardar videos MP4", "Para formatear discos"],
          answerIndex: 0,
          explanation: "Permite recuperar fragmentos de texto o información conceptualmente similar a una consulta utilizando distancia coseno o euclidiana."
        },
        {
          question: "¿Qué diferencia a los procesos OLTP de los procesos OLAP?",
          options: ["OLTP gestiona transacciones rápidas frecuentes en tiempo real; OLAP analiza grandes volúmenes de datos históricos para inteligencia de negocio", "OLTP es de texto y OLAP es de imagen", "Son marcas comercializadoras"],
          answerIndex: 0,
          explanation: "OLTP (Online Transaction Processing) atiende el uso operacional diario; OLAP (Online Analytical Processing) ejecuta reportes masivos."
        }
      ]
    },
    {
      id: 11,
      title: "MÓDULO 11: ARQUITECTURA EVENT-DRIVEN Y MENSAJERÍA ASÍNCRONA (KAFKA, RABBITMQ)",
      description: "Desacoplamiento asíncrono masivo: colas de mensajes, Event Streaming, Kafka y idempotencia.",
      items: [
        "Patrón Productor-Consumidor y Buses de Eventos (Event Bus).",
        "Message Brokers de Colas (RabbitMQ) vs Event Streaming Logs (Apache Kafka).",
        "Garantías de Entrega: At-most-once, At-least-once, Exactly-once.",
        "Idempotencia de Consumidores (Manejo seguro de duplicados).",
        "Patrones Outbox y Event Sourcing."
      ],
      content: "En arquitecturas distribuidas modernas, la comunicación sincrónica HTTP REST acopla los servicios: si el servicio de correos falla, la compra de un usuario rebota. La **Arquitectura Orientada a Eventos (Event-Driven Architecture)** resuelve esto mediante **Mensajería Asíncrona**. El servicio de ventas publica un evento `OrdenCreada` en un **Message Broker (Kafka/RabbitMQ)** y continúa de inmediato. Los consumidores leen el evento a su propio ritmo. La **Idempotencia** garantiza que si un mensaje se reprocesa dos veces, el resultado sea exactamente el mismo.",
      codeSnippet: `# Ejemplo de Consumidor Idempotente en Python
class ConsumidorIdempotente:
    def __init__(self):
        self.eventos_procesados = set() # Set de IDs de eventos procesados

    def procesar_evento(self, evento_id: str, payload: dict):
        if evento_id in self.eventos_procesados:
            print(f"Evento {evento_id} ya fue procesado anteriormente. Omitiendo duplicado.")
            return
        
        # Procesar lógica de negocio...
        print(f"Procesando evento {evento_id}: {payload}")
        self.eventos_procesados.add(evento_id)

consumidor = ConsumidorIdempotente()
consumidor.procesar_evento("evt_101", {"monto": 500})
consumidor.procesar_evento("evt_101", {"monto": 500}) # ¡Duplicado ignorado!`,
      quiz: [
        {
          question: "¿Cuál es la ventaja principal de la Arquitectura Orientada a Eventos (Event-Driven) frente a llamadas sincrónicas REST?",
          options: ["Desacoplamiento temporal y de disponibilidad: los servicios publican eventos y continúan sin esperar la respuesta de los consumidores", "Elimina el uso de procesadores", "Hace que el frontend sea más bonito"],
          answerIndex: 0,
          explanation: "Evita fallos en cascada: si un servicio secundario está caído, el evento se encola en el broker sin tirar el flujo principal."
        },
        {
          question: "¿Qué es un Consumidor 'Idempotente' en mensajería asíncrona?",
          options: ["Un consumidor que al recibir el mismo mensaje dos o más veces produce exactamente el mismo efecto secundario sin duplicar datos", "Un consumidor que lee rápido", "Un script en C++"],
          answerIndex: 0,
          explanation: "Dado que las redes pueden reenviar mensajes duplicados (At-least-once), la idempotencia garantiza que procesar un mensaje repetido no genere cobros dobles."
        },
        {
          question: "¿Qué diferencia clave existe entre RabbitMQ (Message Broker) y Apache Kafka (Event Stream Log)?",
          options: ["RabbitMQ elimina los mensajes de la cola al ser consumidos; Kafka retiene los eventos en un log ordenado en disco durante días/meses", "RabbitMQ usa bases de datos y Kafka no", "Son idénticos"],
          answerIndex: 0,
          explanation: "Kafka es un log de commits append-only retenido en disco que permite a múltiples consumidores releer el historial desde cualquier posición (offset)."
        },
        {
          question: "¿En qué consiste el patrón 'Transactional Outbox'?",
          options: ["En guardar el evento en una tabla de la misma transacción SQL antes de enviarlo al broker para evitar que se pierda si falla la red", "En enviar correos de salida", "En borrar la base de datos"],
          answerIndex: 0,
          explanation: "Garantiza la consistencia atómica entre la base de datos y la mensajería: el evento se escribe en la DB en la misma transacción antes de despacharlo."
        },
        {
          question: "¿Qué es el patrón 'Event Sourcing'?",
          options: ["Almacenar el estado de la aplicación no como la foto actual de la tabla, sino como una secuencia inmutable de todos los eventos pasados ocurridos", "Un tipo de test unitario", "Una base NoSQL"],
          answerIndex: 0,
          explanation: "El estado actual se reconstruye recalculando la secuencia completa de eventos históricos acumulados."
        }
      ]
    },
    {
      id: 12,
      title: "MÓDULO 12: CONTENEDORES, CI/CD E INFRAESTRUCTURA COMO CÓDIGO",
      description: "Empaquetamiento y despliegue moderno: Docker, Kubernetes, tuberías CI/CD y Terraform.",
      items: [
        "Contenedores vs Máquinas Virtuales: Aislamiento a nivel de Kernel (Namespaces y Cgroups).",
        "Construcción de Imágenes de Docker Optimizadas (Multi-stage builds).",
        "Orquestación de Contenedores con Kubernetes (Pods, Deployments, Services, Ingress).",
        "Tuberías de Integración y Despliegue Continuo (CI/CD con GitHub Actions/GitLab CI).",
        "Infraestructura como Código (IaC con Terraform / CloudFormation)."
      ],
      content: "En la ingeniería moderna, 'en mi máquina sí funciona' es inaceptable. **Docker** aisla la aplicación y sus dependencias mediante contenedores ligeros utilizando tecnologías del kernel de Linux (Namespaces y Cgroups). **Kubernetes (K8s)** orquesta la alta disponibilidad de miles de contenedores: autoescalado, reinicio ante fallas y despliegues sin tiempo de inactividad (Zero Downtime / Blue-Green Deployments). **Terraform** permite definir toda la infraestructura en código versionado.",
      codeSnippet: `# Ejemplo de Dockerfile Multi-Stage de Producción para React/Vite
# Stage 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Servidor Web Ligero de Producción
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
      quiz: [
        {
          question: "¿Cuál es la diferencia fundamental entre un Contenedor de Docker y una Máquina Virtual (VM)?",
          options: ["El contenedor comparte el mismo Kernel del Sistema Operativo anfitrión (usando Namespaces/Cgroups), siendo ligero y rápido de iniciar", "Las VMs son más rápidas", "Docker solo corre en Windows"],
          answerIndex: 0,
          explanation: "Las VMs hipervisan un SO completo independiente; los contenedores comparten el kernel del SO anfitrión reduciendo drásticamente el consumo de RAM y CPU."
        },
        {
          question: "¿Por qué se utiliza la técnica de 'Multi-Stage Build' al escribir un Dockerfile de producción?",
          options: ["Para reducir el tamaño de la imagen final copiando únicamente los binarios compilados y descartando librerías de desarrollo", "Para compilar más lento", "Para usar más imágenes"],
          answerIndex: 0,
          explanation: "Separa la etapa de compilación pesada de la imagen ejecutable ligera final, reduciendo la superficie de ataque y el tamaño en megabytes."
        },
        {
          question: "En Kubernetes, ¿qué es un 'Pod'?",
          options: ["La unidad mínima de despliegue ejecutable que envuelve uno o más contenedores estrechamente compartiendo almacenamiento y red", "Una máquina virtual", "Un comando de terminal"],
          answerIndex: 0,
          explanation: "Un Pod representa la abstracción básica de cómputo en Kubernetes que aloja tus contenedores de aplicación."
        },
        {
          question: "¿Qué es 'Infraestructura como Código' (IaC) con herramientas como Terraform?",
          options: ["Escribir código de configuración declarativo que provisioning servidores, redes y bases de datos en la nube de forma automatizada y versionable", "Escribir HTML en el servidor", "Crear imágenes de Docker"],
          answerIndex: 0,
          explanation: "IaC permite gestionar la infraestructura de AWS/GCP mediante código auditable en Git evitando configuraciones manuales en consolas web."
        },
        {
          question: "¿Qué beneficio ofrece una estrategia de despliegue 'Blue-Green' en tuberías CI/CD?",
          options: ["Permite desplegar una nueva versión (Green) en paralelo a la versión activa (Blue) y cambiar el tráfico de forma instantánea sin tiempo de caída (Zero Downtime)", "Usa colores en la pantalla", "Duplica el costo para siempre"],
          answerIndex: 0,
          explanation: "Garantiza un cambio inmediato sin interrupciones para los usuarios y permite un rollback instantáneo si la nueva versión falla."
        }
      ]
    },
    {
      id: 13,
      title: "MÓDULO 13: OBSERVABILIDAD, MÉTRICAS, LOGS Y TRACING DISTRIBUIDO (OPENTELEMETRY)",
      description: "Los 3 pilares de la observabilidad: Logs Estructurados, Métricas (Prometheus) y Tracing Distribuido (Jaeger).",
      items: [
        "Los 3 Pilares de la Observabilidad: Logs, Métricas y Traces.",
        "Logs Estructurados en formato JSON (Evitar print de texto plano).",
        "Métricas con Prometheus: Counters, Gauges y Histograms.",
        "Tracing Distribuido con OpenTelemetry (Trace ID, Span ID).",
        "Dashboards de Monitoreo en Grafana y Alertas (PagerDuty)."
      ],
      content: "La Monitorización te dice si un sistema está vivo o muerto; la **Observabilidad** te permite inferir por qué está fallando internamente basándote en sus salidas. Los **Logs Estructurados (JSON)** permiten realizar consultas agregadas en Elasticsearch. Las **Métricas (Prometheus)** miden el estado continuo (ej: consumo de CPU o tasa de errores 5xx). El **Tracing Distribuido (OpenTelemetry)** propaga un `TraceID` único a través de 10 microservicios para visualizar exactamente cuál de ellos demoró la petición del cliente.",
      codeSnippet: `# Ejemplo de Log Estructurado en JSON con Contexto en Python
import json
import time

def log_evento_estructurado(nivel: str, mensaje: str, contexto: dict):
    payload = {
        "timestamp": time.time(),
        "level": nivel,
        "message": mensaje,
        "trace_id": contexto.get("trace_id", "N/A"),
        "user_id": contexto.get("user_id", None),
        "duration_ms": contexto.get("duration_ms", 0)
    }
    print(json.dumps(payload)) # Log JSON listo para ElasticSearch/Datadog

log_evento_estructurado("ERROR", "Fallo al procesar pago", {"trace_id": "abc-123", "user_id": 99, "duration_ms": 450})`,
      quiz: [
        {
          question: "¿Cuáles son los 3 Pilares Fundamentales de la Observabilidad en sistemas distribuidos?",
          options: ["Logs, Métricas y Traces (Trazas Distribuidas)", "RAM, CPU y Disco", "HTML, CSS y JavaScript"],
          answerIndex: 0,
          explanation: "Logs entregan detalle de eventos específicos, Métricas muestran tendencias cuantitativas acumuladas y Traces mapean el viaje de la petición."
        },
        {
          question: "¿Por qué se exige utilizar Logs Estructurados (JSON) en lugar de cadenas de texto plano `print('error')` en producción?",
          options: ["Porque los agregadores de logs (Elasticsearch, Datadog) pueden indexar, filtrar y consultar atributos de JSON de forma instantánea", "Porque ocupan menos espacio", "Porque JSON es más bonito"],
          answerIndex: 0,
          explanation: "Los logs estructurados permiten filtrar por campos clave (ej: `level='ERROR' AND duration_ms > 1000`) en millones de eventos."
        },
        {
          question: "¿Qué función cumple el `TraceID` en el Tracing Distribuido con OpenTelemetry?",
          options: ["Es un identificador único que se propaga a través de todas las llamadas HTTP/gRPC entre microservicios para unir toda la trayectoria de una petición", "Es la contraseña del servidor", "Es un código de error"],
          answerIndex: 0,
          explanation: "El TraceID correlaciona todos los Spans o pasos individuales que recorre una solicitud a través de múltiples servidores."
        },
        {
          question: "En Prometheus, ¿qué diferencia a un 'Counter' de un 'Gauge'?",
          options: ["Un Counter solo puede incrementarse o reiniciarse (ej: total de visitas); un Gauge puede subir y bajar (ej: uso de memoria RAM actual)", "Un Counter cuenta palabras", "Son idénticos"],
          answerIndex: 0,
          explanation: "Los Counters miden eventos acumulados crecientes; los Gauges representan valores de salud instantáneos del sistema."
        },
        {
          question: "¿Qué es un 'Span' dentro de una traza distribuida?",
          options: ["Un bloque de tiempo representativo de una operación individual dentro del viaje completo de una petición (ej: una consulta a DB de 15ms)", "Un tipo de servidor", "Un formato de archivo"],
          answerIndex: 0,
          explanation: "Un Span mide la duración y metadatos de un paso específico (una query SQL, una llamada HTTP externa) dentro del Trace."
        }
      ]
    },
    {
      id: 14,
      title: "MÓDULO 14: ARQUITECTURA RAG Y FINE-TUNING DE LLMS",
      description: "Integración de conocimiento empresarial con modelos de lenguaje: RAG, Chunking, Embeddings y Fine-tuning.",
      items: [
        "Limitaciones de los LLMs: Alucinaciones, Ventana de Contexto y Conocimiento Estático.",
        "Retrieval-Augmented Generation (RAG): Recuperación + Generación Guiada.",
        "Estrategias de Divisibilidad de Documentos (Chunking Strategies).",
        "Re-ranking de Documentos y Filtrado Semántico.",
        "Cuándo usar RAG vs Cuándo hacer Fine-Tuning (Ajuste Fino de Pesos)."
      ],
      content: "Los Modelos de Lenguaje (LLMs) sufren de dos grandes limitaciones: alucinan información y su conocimiento está congelado en la fecha de su entrenamiento. **Retrieval-Augmented Generation (RAG)** resuelve esto inyectando contexto verificado en tiempo de ejecución: ante una pregunta, se busca en una base de conocimiento los fragmentos (`chunks`) más relevantes y se le pasan al LLM en el prompt. El **Fine-Tuning** se utiliza cuando se requiere cambiar la forma, estilo o formato de respuesta del modelo.",
      codeSnippet: `# Flujo conceptual de una Arquitectura RAG en Python
def arquitectura_rag_demo(pregunta_usuario: str, db_vectorial, llm_service) -> str:
    print(f"1. Pregunta recibida: '{pregunta_usuario}'")
    # Paso 1: Recuperación (Retrieval)
    chunks_relevantes = db_vectorial.buscar_top_k(pregunta_usuario, k=2)
    print(f"2. Contexto recuperado de DB: {chunks_relevantes}")
    
    # Paso 2: Prompt Aumentado
    prompt_final = f"Basándote EXCLUSIVAMENTE en el siguiente contexto, responde:\\\\nContexto: {chunks_relevantes}\\\\nPregunta: {pregunta_usuario}"
    
    # Paso 3: Generación (Generation)
    respuesta = llm_service.generar(prompt_final)
    return respuesta`,
      quiz: [
        {
          question: "¿Cuál es el objetivo primordial de una Arquitectura RAG (Retrieval-Augmented Generation)?",
          options: ["Inyectar información externa verificada y actualizada en el prompt del LLM en tiempo real para evitar alucinaciones", "Entrenar un modelo desde cero", "Comprimir archivos PDF"],
          answerIndex: 0,
          explanation: "RAG le proporciona al modelo el contexto exacto necesario para responder preguntas sobre datos privados o recientes sin re-entrenar."
        },
        {
          question: "En una tubería RAG, ¿qué es la etapa de 'Chunking'?",
          options: ["Dividir documentos extensos en fragmentos más pequeños y manejables de texto para ser convertidos en embeddings", "Borrar documentos", "Traducir textos"],
          answerIndex: 0,
          explanation: "El chunking fragmenta los libros o PDFs en bloques significativos de 500-1000 tokens para búsquedas de precisión."
        },
        {
          question: "¿Cuándo es preferible utilizar Fine-Tuning en lugar de RAG?",
          options: ["Cuando se quiere cambiar el tono, estilo, sintaxis o adaptar el modelo a un formato de salida específico de forma permanente", "Cuando se quieren agregar noticias diarias", "Para ahorrar disco"],
          answerIndex: 0,
          explanation: "Fine-Tuning modifica los pesos del modelo para enseñarle cómo comportarse o responder; RAG le proporciona qué datos usar."
        },
        {
          question: "¿Qué función cumple la etapa de 'Re-ranking' en sistemas RAG avanzados?",
          options: ["Reordenar los fragmentos recuperados mediante un modelo secundario más preciso para seleccionar únicamente los 3 más relevantes", "Cambiar de idioma", "Eliminar los prompts"],
          answerIndex: 0,
          explanation: "El re-ranker evalúa la relevancia fina entre la pregunta y los chunks recuperados descartando ruido antes de llamar al LLM principal."
        },
        {
          question: "¿Por qué confiar ciegamente en la memoria interna de un LLM sin RAG es riesgoso en aplicaciones de misión crítica?",
          options: ["Porque el modelo puede alucinar datos falsos con total apariencia de certeza matemática", "Porque el modelo se borra", "Porque requiere reiniciar el servidor"],
          answerIndex: 0,
          explanation: "Los LLMs son generadores estadísticos de texto y pueden inventar hechos, números o citas inexistentes si no se les proporciona contexto."
        }
      ]
    },
    {
      id: 15,
      title: "MÓDULO 15: VECTOR DATABASES Y EMBEDDINGS EN SISTEMAS INTELIGENTES",
      description: "Representación semántica de la información: Vectores de alta dimensión, distancia Coseno e índices HNSW.",
      items: [
        "Qué son los Embeddings de Texto y su representación vectorial en $\\mathbb{R}^n$.",
        "Métricas de Distancia: Distancia Coseno, Producto Punto y Distancia Euclidiana ($L_2$).",
        "Algoritmo HNSW (Hierarchical Navigable Small World) para Búsqueda Vectorial Aproximada (ANN).",
        "Motores Vectoriales: Qdrant, Pinecone, Milvus y pgvector.",
        "Indexación de Embeddings Multimodales (Texto, Imagen, Audio)."
      ],
      content: "Un **Embedding** es una representación numérica vectorial de un objeto (un texto, una imagen) en un espacio de cientos de dimensiones (ej: 1536 dimensiones en OpenAI ada-002). Conceptos similares quedan ubicados cerca en este espacio vectorial. Las **Bases de Datos Vectoriales** no buscan por palabras exactas, sino por significado conceptual (Búsqueda Semántica) utilizando métricas como la **Similitud Coseno** y estructuras de búsqueda aproximada como **HNSW**.",
      codeSnippet: `# Cálculo de Similitud Coseno entre 3 vectores en Python
import math

def coseno(u: list, v: list) -> float:
    dot = sum(a*b for a,b in zip(u,v))
    norm_u = math.sqrt(sum(a*a for a in u))
    norm_v = math.sqrt(sum(b*b for b in v))
    return dot / (norm_u * norm_v)

# Vector 1: "perro", Vector 2: "cachorro", Vector 3: "computadora"
v_perro = [0.9, 0.1, 0.05]
v_cachorro = [0.85, 0.15, 0.04]
v_pc = [0.01, 0.95, 0.88]

print(f"Similitud (perro, cachorro): {coseno(v_perro, v_cachorro):.4f}") # ~0.99 (Muy cercano)
print(f"Similitud (perro, PC): {coseno(v_perro, v_pc):.4f}")           # ~0.15 (Muy lejano)`,
      quiz: [
        {
          question: "¿Qué representa un Vector de Embedding en Inteligencia Artificial?",
          options: ["Una lista de números de alta dimensión donde la distancia geométrica entre vectores representa su similitud semántica", "Un archivo comprimido ZIP", "Un número entero"],
          answerIndex: 0,
          explanation: "Los embeddings mapean significados conceptuales a coordenadas espaciales: palabras o frases afines quedan geométricamente cercanas."
        },
        {
          question: "¿Cuál es la métrica de distancia más utilizada para comparar la alineación entre dos vectores de embeddings normalizados?",
          options: ["Similitud Coseno", "Distancia Manhattan", "Suma simple"],
          answerIndex: 0,
          explanation: "La similitud coseno evalúa el ángulo entre dos vectores; si apuntan en la misma dirección, el coseno resulta 1.0 (máxima afinidad)."
        },
        {
          question: "¿Qué significa que una Base de Datos Vectorial utilice el algoritmo HNSW?",
          options: ["Que realiza Búsqueda del Vecino Más Cercano Aproximado (ANN) en tiempo $O(\\log n)$ navegando capas de grafos", "Que usa archivos de texto plano", "Que no requiere memoria RAM"],
          answerIndex: 0,
          explanation: "HNSW (Hierarchical Navigable Small World) organiza los vectores en capas de grafos para buscar elementos similares en milisegundos."
        },
        {
          question: "En una búsqueda semántica, si el usuario busca 'vehículo ecológico', ¿qué documento seleccionará el motor vectorial?",
          options: ["Un documento que contenga exactamente la palabra 'vehículo ecológico'", "Un documento que mencione 'auto eléctrico de cero emisiones' aunque no use exactamente las mismas palabras", "Ninguno"],
          answerIndex: 1,
          explanation: "La búsqueda semántica opera sobre el significado conceptual, encontrando equivalencias de sentido más allá de las coincidencias de texto."
        },
        {
          question: "¿Qué ventaja ofrece la extensión `pgvector` en PostgreSQL?",
          options: ["Permite almacenar e indexar vectores de embeddings directamente en tablas relacionales PostgreSQL sin requerir un servidor dedicado extra", "Convierte PostgreSQL en NoSQL", "Es gratis solo por un día"],
          answerIndex: 0,
          explanation: "`pgvector` añade soporte nativo de tipo de datos `vector` e índices HNSW/IVFFlat dentro de la misma base de datos PostgreSQL."
        }
      ]
    },
    {
      id: 16,
      title: "MÓDULO 16: AUDITORÍA Y CODE REVIEW DE CÓDIGO GENERADO POR IA",
      description: "Lista de verificación para Code Reviews de IA: antipatrones, acoplamiento, fallas de borde y seguridad.",
      items: [
        "Antipatrones comunes del código generado por IA (Complejidad innecesaria, redundancia).",
        "Lista de verificación (Checklist) para Code Reviews de sugerencias de IA.",
        "Detección de 'Hallucinated Imports' (Librerías inexistentes o maliciosas).",
        "Auditoría de Acoplamiento y Cohesión en código autogenerado.",
        "Pruebas de Esfuerzo sobre Casos de Borde (Edge Cases)."
      ],
      content: "Hacer un Code Review de código escrito por una IA exige mayor rigor que revisar código humano. Las IAs sufren de **alucinación de dependencias** (importar librerías que no existen o son vulnerables a typosquatting), producen abstracciones sobre-diseñadas (Over-engineering) y suelen omitir el manejo de bordes (edge cases) como desbordamientos numéricos o timeouts de red. El Ingeniero Senior actúa como filtro de calidad auditando cada línea antes de autorizar un Merge.",
      codeSnippet: `# Checklist en Python para Auditoría de Código IA
def auditar_codigo_generado_ia(ast_nodo) -> list[str]:
    hallazgos = []
    # 1. Comprobar que no use eval() o exec() impulsivo
    # 2. Comprobar que maneje timeouts en llamadas HTTP
    # 3. Verificar que no contenga credenciales quemadas (hardcoded keys)
    # 4. Validar existencia de excepciones capturadas
    return hallazgos`,
      quiz: [
        {
          question: "¿Qué es la 'Alucinación de Importaciones' (Hallucinated Imports) en código sugerido por IA?",
          options: ["Cuando la IA importa un paquete o librería que NO existe o inventa métodos ficticios en librerías reales", "Un error del compilador C", "Una función vacía"],
          answerIndex: 0,
          explanation: "Los modelos pueden generar nombres plausibles de librerías que no existen en los repositorios de paquetes (pypy/npm), abriendo riesgos de seguridad."
        },
        {
          question: "¿Por qué el código generado por IA suele sufrir del síndrome de 'Sobre-ingeniería' (Over-engineering)?",
          options: ["Porque tiende a crear estructuras jerárquicas y clases complejas innecesarias para problemas sencillos", "Porque es muy corto", "Porque borra archivos"],
          answerIndex: 0,
          explanation: "Las IAs imitan patrones complejos presentes en sus datos de entrenamiento, agregando wrappers y clases no requeridos."
        },
        {
          question: "¿Qué aspecto suele omitir con frecuencia el código generado por IA por defecto?",
          options: ["La sintaxis básica", "El manejo de Casos de Borde (Edge Cases), time-outs de red y desbordamiento de memoria", "La extensión del archivo"],
          answerIndex: 1,
          explanation: "La IA genera por defecto el 'happy path' ideal; el ingeniero debe exigir explícitamente el manejo de fallos y casos extremos."
        },
        {
          question: "¿Cuál debe ser la postura del revisor de código (Code Reviewer) ante un Pull Request generado masivamente por un agente IA?",
          options: ["Aprobarlo inmediatamente sin leerlo si pasa la compilación", "Verificar la lógica de negocio, auditar fallas de seguridad, comprobar la suite de tests y la mantenibilidad", "Rechazarlo siempre"],
          answerIndex: 1,
          explanation: "El revisor humano asume la responsabilidad final de la mantenibilidad y seguridad del sistema en producción."
        },
        {
          question: "¿Qué es el riesgo de 'Typosquatting' derivado de importaciones alucinadas?",
          options: ["Que atacantes registren en paquetes reales (npm/pypi) los nombres de librerías alucinadas por IAs para infectar proyectos que las instalen", "Un error de ortografía", "Un virus de pantalla"],
          answerIndex: 0,
          explanation: "Si un desarrollador instala a ciegas una librería inventada por la IA, un atacante puede haber creado un paquete malicioso con ese nombre."
        }
      ]
    },
    {
      id: 17,
      title: "MÓDULO 17: DISEÑO DE APIS ROBUSTAS: REST, GRPC, GRAPHQL Y OPENAPI",
      description: "Contratos de interfaz rígidos: RESTful APIs, gRPC con Protocol Buffers, GraphQL y esquemas OpenAPI.",
      items: [
        "Diseño de RESTful APIs: Verbos HTTP, Códigos de Estado (2xx, 4xx, 5xx) e Idempotencia.",
        "Especificaciones OpenAPI 3.0 (Swagger) como contrato de comunicación.",
        "gRPC y Protocol Buffers (protobuf) para comunicación entre microservicios de ultra-baja latencia.",
        "GraphQL: Consultas flexibles en el cliente y prevención de Over-fetching.",
        "Versionado de APIs (URI vs Headers) y Depreciación de Contratos."
      ],
      content: "Las APIs son los contratos de comunicación entre sistemas. Un mal diseño de API acopla el cliente con el servidor y provoca fallos de integración. **REST** es el estándar de la web utilizando verbos HTTP semánticos y esquemas **OpenAPI**. **gRPC** utiliza especificaciones binarias **Protocol Buffers** para llamadas entre microservicios con latencias de microsegundos. **GraphQL** permite al frontend pedir exactamente los campos requeridos evitando Over-fetching.",
      codeSnippet: `# Ejemplo de esquema Protocol Buffers (gRPC) para Contrato de API
# syntax = "proto3";
# message UsuarioRequest {
#   int32 user_id = 1;
# }
# message UsuarioResponse {
#   string nombre = 1;
#   string email = 2;
# }

# Simulación de contrato en Python
def procesar_respuesta_api_grpc(request_bytes: bytes) -> bytes:
    # Serialización binaria de ultra-alta velocidad
    return b"\\\\\\\\x08\\\\\\\\x01\\\\\\\\x12\\\\\\\\x04Juan`,
      quiz: [
        {
          question: "¿Por qué gRPC con Protocol Buffers es significativamente más rápido que REST con JSON para comunicación entre microservicios?",
          options: ["Porque serializa los datos en un formato binario compacto sobre HTTP/2 evitando la sobrecarga de texto JSON", "Porque no usa cables", "Porque usa Python en el servidor"],
          answerIndex: 0,
          explanation: "Protocol Buffers es un protocolo binario fuertemente tipado que reduce el tamaño del mensaje y acelera el parseo."
        },
        {
          question: "¿Qué problema resuelve GraphQL frente a las APIs REST tradicionales?",
          options: ["Evita el Over-fetching (traer más campos de los necesarios) y Under-fetching (hacer múltiples peticiones)", "Elimina la base de datos", "Hace que el servidor sea gratis"],
          answerIndex: 0,
          explanation: "GraphQL permite al cliente especificar en la consulta la estructura exacta de los campos que necesita recibir."
        },
        {
          question: "¿Cuál es el código de estado HTTP adecuado para responder cuando el cliente envía un cuerpo JSON mal formado o con tipos inválidos?",
          options: ["200 OK", "400 Bad Request", "500 Internal Server Error"],
          answerIndex: 1,
          explanation: "Los códigos 4xx representan errores del cliente; 400 Bad Request indica que la petición no cumple el contrato."
        },
        {
          question: "¿Para qué sirve una especificación OpenAPI 3.0 (Swagger)?",
          options: ["Para definir un contrato formal, legible por máquinas y humanos, que documenta endpoints, parámetros y esquemas de respuesta", "Para enviar correos", "Para crear contenedores"],
          answerIndex: 0,
          explanation: "OpenAPI actúa como la fuente de la verdad para generar automáticamente SDKs de cliente, validaciones y documentación."
        },
        {
          question: "¿Qué caracteriza a una petición HTTP PUT en términos de Idempotencia?",
          options: ["Enviar la misma petición PUT múltiples veces produce exactamente el mismo estado final en el servidor que enviarla una sola vez", "Que borra la tabla", "Que es más lenta que POST"],
          answerIndex: 0,
          explanation: "PUT reemplaza el recurso completo de forma idempotente, a diferencia de POST que crea nuevos recursos duplicados."
        }
      ]
    },
    {
      id: 18,
      title: "MÓDULO 18: PATRONES DE RESILIENCIA EN PRODUCCIÓN (CIRCUIT BREAKER, BULKHEAD)",
      description: "Tolerancia a fallas en producción: Circuit Breaker, Rate Limiting, Bulkhead y Retry con Exponential Backoff.",
      items: [
        "Patrón Circuit Breaker (Cortacircuitos): Estados Closed, Open, Half-Open.",
        "Patrón Retry con Jitter y Exponential Backoff.",
        "Patrón Bulkhead (Aislamiento de Recursos).",
        "Rate Limiting y Throttling (Algoritmo Leaky Bucket / Token Bucket).",
        "Degradación Elegante (Graceful Degradation) y Respuestas Fallback."
      ],
      content: "En un entorno de microservicios distribuido, los fallos son inevitables. El patrón **Circuit Breaker** actúa igual que un cortacircuitos eléctrico: si un servicio externo empieza a fallar, el cortacircuitos se 'Abre' interrumpiendo las llamadas de inmediato y respondiendo con un **Fallback**, evitando bloquear los hilos del servidor. Las reintentos deben incluir **Exponential Backoff con Jitter** para no saturar al servicio en proceso de recuperación.",
      codeSnippet: `# Ejemplo del Patrón Circuit Breaker en Python
import time

class CircuitBreakerOpenException(Exception): pass

class CircuitBreaker:
    def __init__(self, limite_fallos: int = 3, cooldown_segundos: float = 5.0):
        self.limite_fallos = limite_fallos
        self.cooldown = cooldown_segundos
        self.fallos = 0
        self.ultimo_fallo_time = 0
        self.estado = "CLOSED"

    def ejecutar(self, func, *args):
        if self.estado == "OPEN":
            if time.time() - self.ultimo_fallo_time > self.cooldown:
                self.estado = "HALF-OPEN"
            else:
                raise CircuitBreakerOpenException("Circuito Abierto: Operación bloqueada para proteger el sistema")

        try:
            res = func(*args)
            if self.estado == "HALF-OPEN": self.estado = "CLOSED"; self.fallos = 0
            return res
        except Exception as e:
            self.fallos += 1
            self.ultimo_fallo_time = time.time()
            if self.fallos >= self.limite_fallos: self.estado = "OPEN"
            raise e`,
      quiz: [
        {
          question: "¿Cuál es la función del estado 'OPEN' (Abierto) en el patrón Circuit Breaker?",
          options: ["Interrumpir inmediatamente las llamadas al servicio fallido y retornar un Fallback instantáneo sin agotar recursos", "Dejar pasar todo el tráfico", "Apagar el servidor"],
          answerIndex: 0,
          explanation: "El estado Open protege al sistema rechazando peticiones de inmediato para no saturar los hilos en espera de un servicio caído."
        },
        {
          question: "¿Por qué se exige agregar 'Jitter' (ruido aleatorio) a los reintentos con Exponential Backoff?",
          options: ["Para evitar el efecto 'Thundering Herd' donde miles de clientes reintentan exactamente al mismo segundo desbordando al servidor", "Para encriptar las llamadas", "Por estética de código"],
          answerIndex: 0,
          explanation: "El Jitter esparce los reintentos en el tiempo impidiendo que todas las peticiones golpeen al servidor recuperado en el mismo instante."
        },
        {
          question: "¿En qué consiste el patrón de resiliencia 'Bulkhead' (Mampara de Aislamiento)?",
          options: ["En aislar los recursos (como pools de hilos o conexiones) de diferentes componentes para que el fallo de uno no arrastre a los demás", "En usar pantallas gigantes", "En reiniciar la base de datos"],
          answerIndex: 0,
          explanation: "Inspirado en los mamparos de los barcos: si un compartimento se inunda, la nave se mantiene a flote aislando el problema."
        },
        {
          question: "¿Qué es el 'Rate Limiting' en una API de producción?",
          options: ["Limitar la cantidad de peticiones que un cliente o IP puede realizar en un intervalo de tiempo (ej: 100 req/min)", "Bajar el sueldo de los programadores", "Reducir la velocidad de disco"],
          answerIndex: 0,
          explanation: "Rate Limiting protege los servicios contra abusos, ataques DDoS y consumo excesivo de recursos."
        },
        {
          question: "¿Qué es la 'Degradación Elegante' (Graceful Degradation)?",
          options: ["Ofrecer una versión reducida de la funcionalidad (ej: mostrar datos cacheados) cuando un servicio secundario no está disponible", "Un error visual", "Un apagado repentino"],
          answerIndex: 0,
          explanation: "Permite que la aplicación siga funcionando parcialmente para el usuario en lugar de mostrar una pantalla de error total."
        }
      ]
    },
    {
      id: 19,
      title: "MÓDULO 19: REFACTORIZACIÓN Y GESTIÓN DE DEUDA TÉCNICA EN SISTEMAS LEGACY",
      description: "Estrategias para modernizar sistemas monolíticos masivos sin detener la operación del negocio.",
      items: [
        "El Patrón Strangler Fig (Higuera Estranguladora) para migración de monolitos a microservicios.",
        "Medición cuantitativa de Deuda Técnica y Complejidad Ciclomática.",
        "Refactorización segura respaldada por Pruebas de Caracterización (Characterization Tests).",
        "Manejo de Paridad de Datos y Migraciones Paralelas (Dual Writing).",
        "Técnica Branch by Abstraction para cambios estructurales en repositorios activos."
      ],
      content: "Un Ingeniero Senior no reescribe aplicaciones desde cero impulsivamente ('Big Bang Rewrite', el cual suele fracasar). Aplica el **Patrón Strangler Fig (Higuera Estranguladora)**: intercepta peticiones en el borde y reemplaza incrementalmente pequeñas funcionalidades del monolito por nuevos módulos o servicios limpios. Para refactorizar código legacy sin pruebas, primero escribe **Pruebas de Caracterización** que documentan el comportamiento actual del sistema antes de alterar una sola línea.",
      codeSnippet: `# Ejemplo conceptual del Patrón Strangler Fig en un Router
def router_strangler_fig(request):
    # Migración progresiva: Si el endpoint ya fue migrado, ir al nuevo servicio
    if request.path.startswith("/api/v2/pagos"):
        return servicio_pagos_nuevo_microservicio(request)
    else:
        return monolito_legacy_existente(request)`,
      quiz: [
        {
          question: "¿En qué consiste el patrón 'Strangler Fig' (Higuera Estranguladora) para modernizar software legacy?",
          options: ["En migrar progresiva e incrementalmente funcionalidades de un monolito hacia nuevos servicios hasta estrangular por completo al sistema antiguo", "En borrar todo y empezar de cero", "En apagar el servidor viejo"],
          answerIndex: 0,
          explanation: "Permite migrar aplicaciones masivas en producción sin asumir el enorme riesgo de una reescritura total 'Big Bang'."
        },
        {
          question: "¿Qué es una 'Prueba de Caracterización' (Characterization Test)?",
          options: ["Un test que documenta y congela el comportamiento actual (correcto o incorrecto) de un sistema legacy antes de refactorizarlo", "Un test de velocidad", "Una prueba de interfaz"],
          answerIndex: 0,
          explanation: "Crea una red de seguridad: asegura que el refactor mantenga exactamente el mismo comportamiento que el código original."
        },
        {
          question: "¿Qué mide la 'Complejidad Ciclomática' de Thomas McCabe en un bloque de código?",
          options: ["El número de caminos linealmente independientes a través del código fuente (basado en decisiones condicionales `if/while`)", "El peso en kilobytes", "El número de líneas de texto"],
          answerIndex: 0,
          explanation: "Una alta complejidad ciclomática indica código difícil de probar, entender y mantener debido a excesivos caminos condicionales."
        },
        {
          question: "En una migración de base de datos crítica, ¿qué es la técnica de 'Escritura Dual' (Dual Writing)?",
          options: ["Escribir los nuevos datos simultáneamente en la base de datos legacy y en la nueva base de datos para verificar paridad", "Escribir con dos teclados", "Guardar dos copias en PDF"],
          answerIndex: 0,
          explanation: "Dual Writing permite validar que la nueva base de datos reciba exactamente la misma información antes de hacer el corte definitivo."
        },
        {
          question: "¿Por qué las reescrituras completas desde cero ('Big Bang Rewrites') suelen fracasar en la industria?",
          options: ["Porque subestiman los cientos de reglas de negocio tácitas y casos de borde solucionados en el sistema legacy a lo largo de los años", "Porque C++ es difícil", "Porque no se usa IA"],
          answerIndex: 0,
          explanation: "El sistema legacy contiene años de conocimiento acumulado y parches de casos de borde que la reescritura desde cero suele omitir."
        }
      ]
    },
    {
      id: 20,
      title: "MÓDULO 20: TEOREMA DE CONCURRENCIA, PARALELISMO Y MEMORIA COMPARTIDA",
      description: "Programación concurrente y paralela: Race Conditions, Deadlocks, Mutex, Semáforos y Modelo de Actores.",
      items: [
        "Concurrencia (Estructura) vs Paralelismo (Ejecución Simultánea en Múltiples Cores).",
        "Condiciones de Carrera (Race Conditions) y Secciones Críticas.",
        "Mecanismos de Sincronización: Mutex (Lock), Semáforos y Operaciones Atómicas.",
        "Las 4 Condiciones de Coffman para un Deadlock (Bloqueo Mutuo).",
        "Modelo de Actores (Erlang/Akka) y Canales en Go/Rust (CSP)."
      ],
      content: "La Concurrencia es la capacidad de estructurar un programa en tareas independientes; el Paralelismo es la ejecución simultánea real en múltiples núcleos físicos de CPU. Cuando dos hilos intentan modificar una misma variable en memoria compartida sin sincronización, ocurre una **Race Condition**. Para evitarla se utilizan **Mutex (Locks)**. Sin embargo, un uso incorrecto de locks puede desencadenar un **Deadlock** (donde el hilo A espera por el lock B y el hilo B por el lock A indefinidamente).",
      codeSnippet: `# Race Condition vs Lock de Sincronización en Python
import threading

contador = 0
lock = threading.Lock()

def incrementar_seguro():
    global contador
    for _ in range(100_000):
        with lock: # Garantiza Sección Crítica atómica
            contador += 1

hilos = [threading.Thread(target=incrementar_seguro) for _ in range(2)]
for h in hilos: h.start()
for h in hilos: h.join()
print(f"Contador final sincronizado: {contador}") # Exactamente 200,000`,
      quiz: [
        {
          question: "¿Cuál es la diferencia conceptual entre Concurrencia y Paralelismo según Rob Pike?",
          options: ["Concurrencia es lidiar con muchas cosas a la vez (estructura); Paralelismo es hacer muchas cosas a la vez (ejecución en múltiples cores)", "Concurrencia es en C y Paralelismo en Java", "Son idénticas"],
          answerIndex: 0,
          explanation: "La concurrencia trata sobre el diseño modular de tareas; el paralelismo requiere hardware multinúcleo para ejecución física simultánea."
        },
        {
          question: "¿Qué es una Condición de Carrera (Race Condition)?",
          options: ["Una falla donde el resultado del programa depende del orden o tiempo no determinista de ejecución de múltiples hilos sobre memoria compartida", "Un algoritmo de carreras de autos", "Un test de velocidad"],
          answerIndex: 0,
          explanation: "Ocurre cuando múltiples hilos leen y escriben sobre los mismos datos sin la adecuada sincronización atómica."
        },
        {
          question: "¿Qué es un 'Deadlock' (Bloqueo Mutuo) en programación concurrente?",
          options: ["Una situación donde dos o más hilos quedan bloqueados para siempre, esperando mutuamente por recursos retenidos por el otro", "Un reinicio de la CPU", "Una falla de internet"],
          answerIndex: 0,
          explanation: "Ocurre cuando el Hilo 1 retiene el Recurso A y espera el B, mientras el Hilo 2 retiene el Recurso B y espera el A."
        },
        {
          question: "¿Para qué sirve un objeto 'Mutex' (Mutual Exclusion Lock)?",
          options: ["Para asegurar que sólo un hilo a la vez pueda ingresar y ejecutar una Sección Crítica de código", "Para duplicar la velocidad de la memoria", "Para borrar hilos"],
          answerIndex: 0,
          explanation: "El Mutex bloquea la entrada a otros hilos mientras uno está modificando la estructura de datos compartida."
        },
        {
          question: "¿Qué filosofía propone el Modelo de Concurrencia en Go/Rust (CSP)?",
          options: ["'No te comuniques compartiendo memoria; comparte memoria comunicándote (mediante Canales)'", "Usar variables globales para todo", "Desactivar los hilos"],
          answerIndex: 0,
          explanation: "Evita los peligros de memoria compartida pasando mensajes aislados a través de Canales seguros."
        }
      ]
    },
    {
      id: 21,
      title: "MÓDULO 21: GESTIÓN DE COSTOS EN LA NUBE Y OPTIMIZACIÓN FINOPS",
      description: "Ingeniería económica de la nube: FinOps, arquitectura Serverless, Spot Instances y dimensionamiento correcto.",
      items: [
        "La disciplina de FinOps (Financial Operations) en la nube.",
        "Modelos de Cobro en AWS/GCP/Azure: Cómputo (EC2/Lambda), Transferencia de Red y Almacenamiento.",
        "Dimensionamiento Correcto (Right-Sizing) de servidores y bases de datos.",
        "Uso de Instancias Spot / Preemptible para cargas de trabajo batch tolerantes a fallos.",
        "Estrategias de Caché y Compresión para reducir costos de egress de red."
      ],
      content: "Un código ineficiente en la era cloud no solo es lento: cuesta miles de dólares en la factura de la empresa. **FinOps** une la ingeniería con las finanzas. Un Ingeniero Senior entiende los costos de transferencia de red (Egress Costs) entre zonas de disponibilidad, aplica **Right-Sizing** para no pagar servidores sobredimensionados al 5% de CPU, e implementa **Instancias Spot** (con descuentos de hasta el 80%) para procesos por lotes asíncronos.",
      codeSnippet: `# Cálculo de optimización de costos Cloud (Ejemplo Serverless Lambda)
def calcular_costo_lambda(invocaciones: int, duracion_ms: float, memoria_mb: int) -> float:
    # Precios de referencia ilustrativos
    costo_por_gb_segundo = 0.0000166667
    gb = memoria_mb / 1024.0
    segundos = duracion_ms / 1000.0
    costo_total = invocaciones * gb * segundos * costo_por_gb_segundo
    return costo_total

# Comparativa: Optimizar código de 500ms a 100ms en 10 millones de ejecuciones
costo_antes = calcular_costo_lambda(10_000_000, 500, 1024)
costo_despues = calcular_costo_lambda(10_000_000, 100, 1024)

print(f"Costo sin optimizar: \\\${costo_antes:.2f}")
print(f"Costo con optimización de código: \\\${costo_despues:.2f} (Ahorro del 80%)")`,
      quiz: [
        {
          question: "¿Qué es la disciplina de 'FinOps' en la ingeniería de software moderna?",
          options: ["La práctica de optimización continua del costo de la nube combinando responsabilidad financiera con decisiones de ingeniería", "La contabilidad bancaria", "El cobro de impuestos"],
          answerIndex: 0,
          explanation: "FinOps involucra a los ingenieros en el impacto económico directo de sus decisiones de arquitectura e infraestructura."
        },
        {
          question: "¿Qué es la 'Transferencia de Salida' (Network Egress) y por qué es un costo crítico en la nube?",
          options: ["El cobro que aplican los proveedores de nube por sacar datos de su red hacia internet o hacia otras regiones", "El costo de instalar fibra óptica", "Una tarifa de dominio"],
          answerIndex: 0,
          explanation: "Los proveedores de nube suelen no cobrar por ingresar datos (Ingress), pero aplican tarifas elevadas por transferir datos hacia afuera (Egress)."
        },
        {
          question: "¿Qué son las 'Instancias Spot' (o Preemptible VMs) en AWS/GCP?",
          options: ["Servidores sobrantes que la nube alquila con descuentos masivos de hasta el 80-90%, pero que pueden ser interrumpidos con breve aviso", "Servidores dedicados de lujo", "Base de datos en CD"],
          answerIndex: 0,
          explanation: "Son ideales para tareas batch, renderizado o entrenamiento de IA donde los procesos pueden pausar y reanudar sin fallar."
        },
        {
          question: "¿En qué consiste el 'Right-Sizing' de infraestructura en la nube?",
          options: ["Ajustar el tamaño de los servidores y bases de datos a las capacidades reales que la carga de trabajo requiere sin sobre-dimensionar", "Comprar los servidores más grandes", "Desconectar los discos"],
          answerIndex: 0,
          explanation: "Evita pagar por servidores con 64GB de RAM si el sistema utiliza de forma constante únicamente 4GB."
        },
        {
          question: "¿Cómo impacta directamente la optimización del tiempo de ejecución de un algoritmo en una arquitectura Serverless (como AWS Lambda)?",
          options: ["Reduce directamente el costo financiero de la factura, ya que Serverless cobra por milisegundos exactos de CPU consumidos", "No tiene ningún impacto", "Solo sirve para impresionar"],
          answerIndex: 0,
          explanation: "En Serverless, la facturación está ligada al tiempo de ejecución; reducir el tiempo de un algoritmo de 500ms a 100ms reduce la factura un 80%."
        }
      ]
    },
    {
      id: 22,
      title: "MÓDULO 22: ÉTICA, PRIVACIDAD Y LICENCIAMIENTO DE CÓDIGO CON IA",
      description: "Gobernanza de software: Licencias Open Source (MIT, GPL, Apache), privacidad de datos (GDPR) y propiedad intelectual.",
      items: [
        "Licencias de Software Open Source: Permisivas (MIT, Apache 2.0) vs Copyleft (GPL v3).",
        "Riesgos de Propiedad Intelectual al entrenar o usar código con IA generativa.",
        "Privacidad de Datos y Regulaciones (GDPR, CCPA, Leyes Locales).",
        "Soberanía de Datos: Modelos Locales (Ollama/Llama 3) vs APIs de Nube.",
        "Responsabilidad Ética y Sesgos Algorítmicos en Sistemas Autónomos."
      ],
      content: "Un Ingeniero en Sistemas debe ser consciente de las implicaciones legales y éticas de su software. Copiar código amparado por licencias **GPL v3** en un proyecto propietario comercial puede forzar a la empresa a liberar todo su código fuente. Enviar datos sensibles de clientes o llaves privadas hacia APIs de IA de terceros puede violar la ley **GDPR**. La soberanía de datos exige evaluar **Modelos de IA Locales (Ollama / Llama 3)** cuando se procesan datos confidenciales.",
      codeSnippet: `# Ejemplo conceptual de Sanitización de Datos Sensibles (PII) antes de llamar a un LLM
import re

def sanitizar_pii(texto: str) -> str:
    # Ocultar tarjetas de crédito
    texto = re.sub(r'\\\\b\\\\d{4}[- ]?\\\\d{4}[- ]?\\\\d{4}[- ]?\\\\d{4}\\\\b', '[TARJETA_PROTEGIDA]', texto)
    # Ocultar emails
    texto = re.sub(r'[\\\\w\\\\.-]+@[\\\\w\\\\.-]+\\\\.\\\\w+', '[EMAIL_PROTEGIDO]', texto)
    return texto

raw_prompt = "El usuario Juan con email juan@empresa.com y tarjeta 4532-1234-5678-9010 tiene un problema."
prompt_seguro = sanitizar_pii(raw_prompt)
print(f"Prompt sanitizado para enviar a la IA:\\\\n{prompt_seguro}")`,
      quiz: [
        {
          question: "¿Qué caracteriza a una licencia de software con cláusula 'Copyleft' (como la GNU GPL v3)?",
          options: ["Exige que cualquier trabajo derivado o software que incorpore ese código sea publicado también bajo la misma licencia libre GPL", "Que es de pago", "Que solo se puede usar en Windows"],
          answerIndex: 0,
          explanation: "La GPL 'contamina' el software derivado obligando a liberar el código fuente completo del proyecto si se comercializa."
        },
        {
          question: "¿Cuál es el riesgo de enviar datos personales identificables (PII) de clientes a APIs públicas de modelos de lenguaje sin previo acuerdo?",
          options: ["Violación de regulaciones de privacidad de datos (como GDPR) y exposición inadvertida de información confidencial", "Que la computadora se vuelva lenta", "Ningún riesgo"],
          answerIndex: 0,
          explanation: "El envío irresponsable de datos confidenciales de usuarios hacia servidores de terceros puede acarrear multas legales millonarias."
        },
        {
          question: "¿Qué ventaja ofrece utilizar un modelo de IA ejecutable de forma local (ej: Llama 3 con Ollama) sobre la red local?",
          options: ["Garantiza el 100% de la Soberanía de Datos y Privacidad, ya que ningún fragmento de información sale del servidor interno", "Es siempre más inteligente que GPT-4", "No requiere electricidad"],
          answerIndex: 0,
          explanation: "Los modelos locales se ejecutan dentro del perímetro de seguridad de la empresa, eliminando el riesgo de fuga de información hacia la nube."
        },
        {
          question: "¿Cuál de las siguientes es una Licencia Permisiva muy popular en el mundo Open Source?",
          options: ["Licencia MIT", "Licencia Secreta", "Licencia Propietaria Cerrada"],
          answerIndex: 0,
          explanation: "La licencia MIT permite el uso, modificación y comercialización libre del código con la única condición de preservar el aviso de copyright."
        },
        {
          question: "¿A qué se refiere el término 'Sesgo Algorítmico' en modelos de Inteligencia Artificial?",
          options: ["A prejuicios o desviaciones automáticas en las decisiones de la IA provocadas por datos de entrenamiento desbalanceados o discriminatorios", "A un error de compilación", "A la velocidad del servidor"],
          answerIndex: 0,
          explanation: "Los modelos imitan los sesgos presentes en sus datos de entrenamiento, pudiendo discriminar de forma injusta en aprobaciones de crédito o contrataciones."
        }
      ]
    },
    {
      id: 23,
      title: "MÓDULO 23: INGENIERÍA DE REQUERIMIENTOS Y REFINAMIENTO DE ESPECIFICACIONES",
      description: "Traducción de necesidades de negocio ambiguas en especificidades técnicas rígidas (BDD / User Stories).",
      items: [
        "El costo exponencial de corregir un error en Producción vs en la fase de Requerimientos.",
        "Desarrollo Guiado por Comportamiento (BDD - Behavior-Driven Development con sintaxis Given-When-Then).",
        "Historias de Usuario (User Stories) con Criterios de Aceptación Inambiguos.",
        "Técnica de los 3 Amigos (Desarrollador, Tester, Producto).",
        "Manejo de Especificaciones Incompletas y Preguntas Clave de Arquitectura."
      ],
      content: "El error más caro en ingeniería de software es construir con perfección el producto equivocado. La **Ingeniería de Requerimientos** transforma ideas difusas en especificidades técnicas inambiguas. La metodología **BDD (Behavior-Driven Development)** utiliza el formato `GIVEN` (Dado un contexto), `WHEN` (Cuando ocurre una acción) y `THEN` (Entonces se espera este resultado). Esta especificación formal sirve de entrada perfecta tanto para pruebas automatizadas como para guiar a los agentes de IA sin margen de error.",
      codeSnippet: `# Ejemplo de Especificación BDD (Sintaxis Gherkin / behave en Python)
# Feature: Retiro de efectivo en cajero automático

# Scenario: Retiro exitoso con saldo suficiente
#   GIVEN el cliente tiene un saldo de \\\$500 en su cuenta
#   WHEN solicita retirar \\\$100
#   THEN el cajero entrega \\\$100
#   AND el nuevo saldo del cliente debe ser \\\$400

def simular_escenario_bdd(saldo_inicial: float, monto_retiro: float) -> tuple:
    # GIVEN
    saldo = saldo_inicial
    # WHEN
    assert saldo >= monto_retiro, "Saldo insuficiente"
    saldo -= monto_retiro
    # THEN
    return (monto_retiro, saldo)

print(f"Resultado BDD (Entregado, Nuevo Saldo): {simular_escenario_bdd(500, 100)}")`,
      quiz: [
        {
          question: "¿Por qué se afirma que un error detectado en la fase de Requerimientos es hasta 100 veces más barato de corregir que en Producción?",
          options: ["Porque en requerimientos solo requiere corregir texto, mientras que en producción exige refactorizar código, migrar DB y redeplegar", "Porque los programadores cobran menos al inicio", "Porque el servidor es nuevo"],
          answerIndex: 0,
          explanation: "Descubrir una malinterpretación de negocio cuando el sistema ya fue construido e integrado cuesta semanas de desperdicio técnico."
        },
        {
          question: "¿Cuál es el formato estandarizado de la sintaxis Gherkin utilizada en BDD (Behavior-Driven Development)?",
          options: ["GIVEN (Dado) -> WHEN (Cuando) -> THEN (Entonces)", "START -> DO -> END", "IF -> ELSE -> THEN"],
          answerIndex: 0,
          explanation: "Gherkin estructura los escenarios en Dado el contexto previo, Cuando ocurre la acción y Entonces se valida el resultado."
        },
        {
          question: "¿En qué consiste la reunión técnica de los 'Tres Amigos' en metodologías ágiles?",
          options: ["Una reunión entre el Desarrollador, el Tester (QA) y el Product Owner para alinear expectativas antes de codificar", "Una reunión de tres programadores", "Una fiesta de equipo"],
          answerIndex: 0,
          explanation: "Reúne tres perspectivas distintas (negocio, desarrollo y calidad) para descubrir ambigüedades en la historia antes de escribir código."
        },
        {
          question: "¿Qué son los 'Criterios de Aceptación' en una Historia de Usuario?",
          options: ["Las condiciones específicas e inambiguas que el software DEBE cumplir para que la funcionalidad sea considerada terminada y correcta", "El precio del proyecto", "La firma del jefe"],
          answerIndex: 0,
          explanation: "Los criterios de aceptación definen los límites de éxito de la tarea eliminando interpretaciones subjetivas."
        },
        {
          question: "¿Por qué escribir especificaciones en formato BDD mejora la interacción con Agentes de Inteligencia Artificial?",
          options: ["Porque proporciona un marco sin ambigüedades donde la IA no tiene que adivinar las reglas de negocio ni los resultados esperados", "Porque la IA solo entiende inglés", "Porque BDD compila más rápido"],
          answerIndex: 0,
          explanation: "El formato estructurado GIVEN-WHEN-THEN elimina la vaguedad del lenguaje natural permitiendo al agente generar código exacto."
        }
      ]
    },
    {
      id: 24,
      title: "MÓDULO 24: DIAGNÓSTICO DE INCIDENTES EN PRODUCCIÓN (ROOT CAUSE ANALYSIS)",
      description: "Gestión de crisis en caliente: Análisis de Causa Raíz (RCA), Blameless Post-Mortems y depuración en producción.",
      items: [
        "Metodología de respuesta a incidentes en caliente (Triage, Mitigación, Resolución).",
        "Análisis de Causa Raíz (RCA - Root Cause Analysis) y la técnica de los 5 Porqués.",
        "Post-Mortems Sin Culpas (Blameless Post-Mortems) para fomentar la cultura de aprendizaje.",
        "Depuración de problemas esporádicos (Heisenbugs e Intermittent Failures).",
        "Creación de Libros de Jugadas (Runbooks / Playbooks) para soporte de operaciones."
      ],
      content: "Cuando el sistema de producción se cae a las 2 AM, no es momento de entrar en pánico ni de buscar culpables. El Ingeniero Senior sigue una metodología de respuesta a incidentes: primero **Mitigar** (estabilizar el servicio con rollback o degradación), luego **Investigar** el problema mediante métricas y logs correlacionados, y finalmente realizar un **Post-Mortem Sin Culpas (Blameless Post-Mortem)** aplicando los **5 Porqués** para corregir el proceso de fondo.",
      codeSnippet: `# Ejemplo de Técnica de los 5 Porqués (Root Cause Analysis en Python)
def analisis_5_porques_incidente() -> list[str]:
    return [
        "1. ¿Por qué se cayó la base de datos? -> Se agotó el espacio en disco.",
        "2. ¿Por qué se agotó el disco? -> Los archivos de log ocuparon 500GB.",
        "3. ¿Por qué ocuparon tanto? -> El nivel de log estaba en DEBUG en producción.",
        "4. ¿Por qué estaba en DEBUG? -> Se cambió en un hotfix rápido y no se restauró.",
        "5. ¿Causa Raíz? -> Falta de verificación automatizada del nivel de log en la tubería CI/CD."
    ]

for paso in analisis_5_porques_incidente():
    print(paso)`,
      quiz: [
        {
          question: "¿Cuál es la máxima prioridad durante los primeros minutos de un incidente crítico en producción?",
          options: ["Mitigar la falla para restaurar el servicio a los usuarios lo antes posible (ej: mediante Rollback)", "Encontrar al programador culpable", "Escribir un informe de 50 páginas"],
          answerIndex: 0,
          explanation: "En la fase de triaje, detener el daño al negocio y estabilizar a los usuarios prima sobre el análisis detallado."
        },
        {
          question: "¿Qué caracteriza a un 'Post-Mortem Sin Culpas' (Blameless Post-Mortem)?",
          options: ["Asumir que las fallas son sistémicas en el proceso y la arquitectura, enfocándose en mejorar el sistema en lugar de castigar personas", "No escribir nada", "Culpar a la base de datos"],
          answerIndex: 0,
          explanation: "Fomenta la transparencia y el aprendizaje continuo: si un humano comete un error, el sistema debió tener salvaguardas para evitarlo."
        },
        {
          question: "¿En qué consiste la técnica de los '5 Porqués' en el Análisis de Causa Raíz?",
          options: ["En preguntar '¿por qué?' sucesivamente hasta profundizar desde el síntoma superficial hacia el fallo de proceso o diseño de fondo", "En hacer 5 preguntas en una encuesta", "En contar hasta 5"],
          answerIndex: 0,
          explanation: "Permite trascender los síntomas evidentes para descubrir la causa raíz estructural que originó la falla."
        },
        {
          question: "¿Qué es un 'Heisenbug' en ingeniería de software?",
          options: ["Un error que desaparece o cambia de comportamiento cuando intentas estudiarlo o agregar herramientas de depuración", "Un virus de física cuántica", "Un bug de C++"],
          answerIndex: 0,
          explanation: "Nombre humorístico para errores de concurrencia o tiempos de ejecución que se ocultan cuando se ejecuta el depurador."
        },
        {
          question: "¿Qué es un 'Runbook' o 'Playbook' de operaciones?",
          options: ["Un documento de procedimientos estandarizados paso a paso para diagnosticar y resolver alertas recurrentes del sistema", "Un manual de usuario", "Un libro de juegos"],
          answerIndex: 0,
          explanation: "Proporciona guías de acción claras al equipo de guardia para responder eficientemente ante emergencias."
        }
      ]
    },
    {
      id: 25,
      title: "MÓDULO 25: EL MANIFIESTO DEL INGENIERO SENIOR: LIDERAZGO TÉCNICO Y MENTALIDAD IRREEMPLAZABLE",
      description: "La síntesis final: Liderazgo técnico, mentalidad de resolución de problemas, ética y aprendizaje continuo en la era de la IA.",
      items: [
        "El perfil del Ingeniero en Sistemas Senior de la era moderna.",
        "Pensamiento de Primeros Principios (First Principles Thinking).",
        "Comunicación efectiva de decisiones técnicas a directivos y clientes.",
        "Curiosidad intelectual, desaprendizaje y adaptación tecnológica continua.",
        "El Manifiesto QuimiSell del Ingeniero de Software Irreemplazable."
      ],
      content: "Llegamos a la cumbre del programa. La Inteligencia Artificial continuará evolucionando a un ritmo vertiginoso, pero el **Ingeniero en Sistemas Senior** es y seguirá siendo irreemplazable. La combinación de Razonamiento desde Primeros Principios, Ética Inquebrantable, Capacidad de Comunicación Estratégica, Criterio de Arquitectura y Pasión por Resolver Problemas Humanos convierte a un profesional en el líder indiscutible que guía la transformación del software en la era artificial.",
      codeSnippet: `# El Manifiesto del Ingeniero de Software de Elite
2. No copio ni pego código sin auditar su seguridad, complejidad y correctness.
3. Uso la Inteligencia Artificial como un amplificador de mi intelecto, no como mi reemplazo.
4. Escribo tests automatizados para validar que mi software no alucine ni falle en bordes.
5. Priorizo la simplicidad, la legibilidad y la arquitectura limpia sobre la complejidad innecesaria.
6. Soy un ingeniero de sistemas completo: entiendo el negocio, los datos y a los humanos.

print(MANIFIESTO_INGENIERO_SENIOR)`,
      quiz: [
        {
          question: "¿En qué consiste el 'Pensamiento desde Primeros Principios' (First Principles Thinking) aplicado a la ingeniería?",
          options: ["Descomponer un problema complejo en sus verdades fundamentales más básicas e indudables para construir soluciones innovadoras desde cero", "Seguir ciegamente las opiniones de internet", "Usar el primer marco de trabajo que encuentres"],
          answerIndex: 0,
          explanation: "Evita razonar por analogía o imitación; analiza los constituyentes esenciales del problema para derivar la mejor arquitectura."
        },
        {
          question: "¿Cuál es la habilidad más valiosa de un Ingeniero Senior al comunicar decisiones técnicas a la junta directiva o clientes?",
          options: ["Traducir la complejidad técnica a impacto directo en el negocio (costos, riesgos, velocidad de entrega y valor para el usuario)", "Usar la mayor cantidad de jerga incomprensible", "Hablar de sintaxis de código"],
          answerIndex: 0,
          explanation: "Los líderes técnicos conectan las decisiones de arquitectura de software con el valor real y la viabilidad económica del negocio."
        },
        {
          question: "¿Cómo debe responder un Ingeniero en Sistemas ante la rápida obsolescencia tecnológica en la era de la IA?",
          options: ["Con curiosidad intelectual continua, dominando los fundamentos duraderos (algoritmos, arquitectura, redes, SO) que jamás cambian", "Abandonando la profesión", "Memoria de sintaxis"],
          answerIndex: 0,
          explanation: "Los frameworks y lenguajes cambian cada 3 años; los fundamentos de sistemas, memoria y lógica son eternos e inmutables."
        },
        {
          question: "¿Por qué un Ingeniero que usa IA con pensamiento crítico es exponencialmente más productivo que uno que no la usa o uno que la usa sin criterio?",
          options: ["Porque combina la velocidad de generación de la IA con la sabiduría de arquitectura, verificación y seguridad humana", "Porque la IA trabaja sola", "Porque no requiere pruebas"],
          answerIndex: 0,
          explanation: "Es la simbiosis perfecta: la IA aporta aceleración de tareas mecánicas y el ingeniero aporta la supervisión, corrección y diseño de alto nivel."
        },
        {
          question: "¿Cuál es la conclusión fundamental de esta MasterClass para tu carrera profesional?",
          options: ["Que el conocimiento profundo de los sistemas te convierte en un profesional libre, autónomo e irreemplazable en cualquier época", "Que la sintaxis es lo único importante", "Que las computadoras piensan por sí solas"],
          answerIndex: 0,
          explanation: "El dominio de los principios fundamentales de la ingeniería te distingue de un ejecutor pasivo y te posiciona como un verdadero arquitecto del futuro."
        }
      ]
    }
  ]
};