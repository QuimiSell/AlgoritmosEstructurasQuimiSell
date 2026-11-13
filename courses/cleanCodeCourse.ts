import { Course, TutorExercise } from '../domain/models';

export const CLEAN_CODE_COURSE: Course = {
  id: 'clean_code_solid',
  title: 'Clean Code, SOLID, Patrones de Diseño y QA Testing Automatizado',
  shortTitle: 'Clean Code & QA',
  badge: 'Arquitectura, SOLID & QA Engineering',
  icon: '🧼',
  description: '10 módulos prácticos: código limpio según Robert C. Martin (Tío Bob), principios SOLID, patrones GoF esenciales, TDD con Vitest/pytest, pruebas de integración, E2E con Playwright, pruebas de carga con k6 y auditoría anti-IA.',
  whyStudyTitle: '🧼 ¿Por qué Clean Code y QA Automatizado son inseparables?',
  whyStudyText: 'Cualquier programador puede escribir código que una computadora entienda; los ingenieros de élite escriben código que los humanos pueden entender y refactorizar con total seguridad. Refactorizar código sin una suite de pruebas automatizadas es como caminar en la cuerda floja sin red de protección: cualquier cambio arquitectónico corre el riesgo de introducir regresiones catastróficas. Este curso combina los fundamentos de Robert C. Martin (Tío Bob) y el Gang of Four (GoF) con la Pirámide de Pruebas moderna: Unit Testing y TDD (Red-Green-Refactor) con Vitest y pytest, pruebas de integración con MSW, pruebas End-to-End (E2E) con Playwright, pruebas de estrés con k6 y Property-Based Testing para blindar el código contra alucinaciones y edge cases de la IA.',
  studyPlanReasons: [
    { id: 1, title: "Filosofía Clean Code y Nombres Expresivos", why: "Escribir código intencional y autodocumentado según el Tío Bob." },
    { id: 2, title: "Funciones y Manejo de Excepciones", why: "Diseño de funciones que hacen una sola cosa y gestión limpia de errores." },
    { id: 3, title: "Comentarios y Regla del Boy Scout", why: "Dejar el código más limpio de como lo encontraste y eliminar comentarios superfluos." },
    { id: 4, title: "Single Responsibility Principle (SRP)", why: "Una sola razón para cambiar por módulo o clase." },
    { id: 5, title: "Open/Closed Principle (OCP)", why: "Abierto para extensión, cerrado para modificación mediante abstracción." },
    { id: 6, title: "Liskov Substitution Principle (LSP)", why: "Garantizar que las subclases puedan sustituir a sus clases base sin romper contratos." },
    { id: 7, title: "Interface Segregation & Dependency Inversion", why: "Interfaces específicas e inyección de dependencias (DIP)." },
    { id: 8, title: "Patrones de Diseño GoF (Creacionales, Estructurales & Strategy)", why: "Factory, Builder, Adapter, Strategy y Observer para erradicar switches monolíticos y código acoplado." },
    { id: 9, title: "QA & La Pirámide de Pruebas: Unit Testing & TDD (Vitest/pytest)", why: "Pirámide de Mike Cohn, ciclo Red-Green-Refactor, patrón AAA, Test Doubles (Mocks/Stubs) y cobertura de ramas." },
    { id: 10, title: "QA Avanzado: Integración, E2E (Playwright), Carga (k6) & Anti-IA", why: "Pruebas de contratos con MSW, automatización web E2E en Playwright, pruebas de estrés con k6 y Property-Based Testing." }
  ],
  labChallenge: {
    title: "Refactorización Legacy a SOLID + Suite Completa de Pruebas Automatizadas (Vitest & Playwright)",
    badge: "Laboratorio de Clean Code & QA Engineering",
    description: "Tu objetivo es tomar un servicio legacy 'spaghetti' monolítico con lógica acoplada a base de datos y pasarela de pago, refactorizarlo aplicando Principios SOLID (SRP, DIP) y el Patrón Strategy, y blindarlo con una suite de pruebas unitarias TDD (Vitest) y una prueba E2E (Playwright).",
    requirements: [
      "• Eliminar condicionales anidadas: Reemplazar estructuras `switch`/`if` por la interfaz Strategy.",
      "• Inyección de Dependencias: Pasar los servicios concretos mediante interfaces en el constructor.",
      "• Regla del Boy Scout: Renombrar variables y extraer funciones cortas de menos de 10 líneas.",
      "• Pruebas Unitarias: Garantizar que el comportamiento externo sea 100% idéntico tras el refactor."
    ],
    cleanCodeRules: [
      "• Comentarios Cero: El código refactorizado debe explicarse por sí mismo a través de nombres expresivos.",
      "• Funciones Pequeñas: Ninguna función debe superar las 10-12 líneas de extensión.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Clean Code - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio de Clean Code, SOLID y Patrones de Diseño.\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de las refactorizaciones aplicadas:\n- \n\nSaludos cordiales.`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS",
      description: "Las enseñanzas de Robert C. Martin (Tío Bob): código autodocumentado, nombres intencionados y la regla del Boy Scout.",
      items: [
      "El costo real del código desordenado y la deuda técnica.",
      "Nombres con intención reveladora (Evitar variables a1, temp, data).",
      "Hacer distinciones con sentido y evitar desinformación.",
      "Nombres pronunciables y buscables en la base de código.",
      "La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS\n\nLas enseñanzas de Robert C. Martin (Tío Bob): código autodocumentado, nombres intencionados y la regla del Boy Scout.\n\nRobert C. Martin (Tío Bob) abre su célebre libro 'Clean Code' con una verdad irrefutable: la proporción de tiempo dedicada a leer código frente a escribirlo es de más de 10 a 1. Escribir nombres expresivos como `dias_desde_ultimo_modificacion` en lugar de `d` le ahorra a tus compañeros (y a ti mismo en el futuro) horas de adivinanza. La Regla del Boy Scout exige que en cada commit dejas el módulo ligeramente mejor estructurado de como lo encontraste.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· El costo real del código desordenado y la deuda técnica.\n· Nombres con intención reveladora (Evitar variables a1, temp, data).\n· Hacer distinciones con sentido y evitar desinformación.\n· Nombres pronunciables y buscables en la base de código.\n· La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. El costo real del código desordenado y la deuda técnica.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El costo real del código desordenado y la deuda técnica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El costo real del código desordenado y la deuda técnica.» y cuándo lo evitarías.\n\n## 2. Nombres con intención reveladora (Evitar variables a1, temp, data).\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Nombres con intención reveladora (Evitar variables a1, temp, data). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Nombres con intención reveladora (Evitar variables a1, temp, data).» y cuándo lo evitarías.\n\n## 3. Hacer distinciones con sentido y evitar desinformación.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Hacer distinciones con sentido y evitar desinformación. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Hacer distinciones con sentido y evitar desinformación.» y cuándo lo evitarías.\n\n## 4. Nombres pronunciables y buscables en la base de código.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Nombres pronunciables y buscables en la base de código. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Nombres pronunciables y buscables en la base de código.» y cuándo lo evitarías.\n\n## 5. La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS.\n\n**Qué es y por qué importa.** Dentro de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 2:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 3:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\nEstos casos muestran por qué FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Bad Code (Código sucio)
def d(l):
    s = 0
    for x in l:
        if x.i == True and x.a > 18:
            s += x.p
    return s

# Clean Code (Tío Bob)
class Usuario:
    def __init__(self, esta_activo: bool, edad: int, puntos: int):
        self.esta_activo = esta_activo
        self.edad = edad
        self.puntos = puntos

def calcular_puntos_totales_usuarios_activos(usuarios: list[Usuario]) -> int:
    return sum(
        u.puntos for u in usuarios 
        if u.esta_activo and u.edad > 18
    )`,
      quiz: [
        {
          question: "¿Cuál es la famosa 'Regla del Boy Scout' formulada por el Tío Bob para el desarrollo de software?",
          options: ["No trabajar los fines de semana", "Dejar la base de código siempre más limpia de como la encontraste en cada commit", "Usar siempre comentarios en cada línea"],
          answerIndex: 1,
          explanation: "La regla impulsa la refactorización continua: pequeñas mejoras constantes evitan la acumulación de deuda técnica."
        },
        {
          question: "¿Por qué se desaconseja usar nombres de variables como `d`, `temp` o `data` según Clean Code?",
          options: ["Porque no revelan la intención del negocio y obligan al lector a adivinar su propósito", "Porque Python no las permite", "Porque ocupan mucho espacio en disco"],
          answerIndex: 0,
          explanation: "Un nombre limpio debe comunicar por qué existe, qué hace y cómo se usa sin requerir comentarios."
        },
        {
          question: "Según Robert C. Martin, ¿cuál es la relación aproximada entre el tiempo dedicado a LEER código vs ESCRIBIR código nuevo?",
          options: ["1 a 1", "Más de 10 a 1 dedicado a leer código", "1 a 100 dedicado a escribir"],
          answerIndex: 1,
          explanation: "Leemos código constantemente para entender dónde insertar cambios; por ello, optimizar la legibilidad acelera el desarrollo."
        },
        {
          question: "¿Cuál de los siguientes nombres de función cumple MEJOR con los principios de Clean Code?",
          options: ["proc_usr()", "obtener_usuarios_activos_con_suscripcion_vencida()", "fn1()"],
          answerIndex: 1,
          explanation: "Es un nombre largo pero totalmente descriptivo que revela la intención exacta de la función sin ambigüedades."
        },
        {
          question: "¿Qué es la 'Deuda Técnica' en software?",
          options: ["El dinero invertido en servidores", "El costo futuro acumulado de haber tomado atajos o escrito código rápido y desordenado en el presente", "Un crédito bancario"],
          answerIndex: 1,
          explanation: "La deuda técnica representa el tiempo adicional de desarrollo que se debe pagar por no haber diseñado código limpio desde el principio."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: El costo real del código desordenado y la deuda técnica?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: El costo real del código desordenado y la deuda técnica", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El costo real del código desordenado y la deuda técnica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: Nombres con intención reveladora (Evitar variables a1, temp, data)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Nombres con intención reveladora (Evitar variables a1, temp, data)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Nombres con intención reveladora (Evitar variables a1, temp, data). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: Hacer distinciones con sentido y evitar desinformación?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Hacer distinciones con sentido y evitar desinformación", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Hacer distinciones con sentido y evitar desinformación. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: Nombres pronunciables y buscables en la base de código?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Nombres pronunciables y buscables en la base de código", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Nombres pronunciables y buscables en la base de código. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: La Regla del Boy Scout: 'Deja el campamento más limpio de como lo e...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES",
      description: "Reglas para escribir funciones pequeñas, el principio de nivel único de abstracción y el uso de excepciones.",
      items: [
      "Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas).",
      "Hacer UNA sola cosa (Single Responsibility a nivel de función).",
      "Un solo nivel de abstracción por función (Single Level of Abstraction).",
      "Evitar argumentos de bandera (Flag Arguments booleanos).",
      "Usar Excepciones en lugar de retornar códigos de error nulos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES\n\nReglas para escribir funciones pequeñas, el principio de nivel único de abstracción y el uso de excepciones.\n\nLa primera regla de las funciones de Tío Bob es: deben ser pequeñas. La segunda regla es: deben ser AÚN más pequeñas. Una función debe realizar una sola tarea y hacerla bien. Cuando le pasas un booleano como parámetro a una función (ej: `procesar_usuario(usuario, es_admin=True)`), estás indicando implícitamente que la función hace dos cosas distintas según la bandera. Se deben dividir en dos funciones independientes: `procesar_usuario_normal` y `procesar_usuario_admin`.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas).\n· Hacer UNA sola cosa (Single Responsibility a nivel de función).\n· Un solo nivel de abstracción por función (Single Level of Abstraction).\n· Evitar argumentos de bandera (Flag Arguments booleanos).\n· Usar Excepciones en lugar de retornar códigos de error nulos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas).\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas).» y cuándo lo evitarías.\n\n## 2. Hacer UNA sola cosa (Single Responsibility a nivel de función).\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Hacer UNA sola cosa (Single Responsibility a nivel de función). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Hacer UNA sola cosa (Single Responsibility a nivel de función).» y cuándo lo evitarías.\n\n## 3. Un solo nivel de abstracción por función (Single Level of Abstraction).\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Un solo nivel de abstracción por función (Single Level of Abstraction). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Un solo nivel de abstracción por función (Single Level of Abstraction).» y cuándo lo evitarías.\n\n## 4. Evitar argumentos de bandera (Flag Arguments booleanos).\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Evitar argumentos de bandera (Flag Arguments booleanos). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evitar argumentos de bandera (Flag Arguments booleanos).» y cuándo lo evitarías.\n\n## 5. Usar Excepciones en lugar de retornar códigos de error nulos.\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Usar Excepciones en lugar de retornar códigos de error nulos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Usar Excepciones en lugar de retornar códigos de error nulos.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES.\n\n**Qué es y por qué importa.** Dentro de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 2:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 3:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\nEstos casos muestran por qué FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Bad Practice: Flag Arguments & Códigos de Error
def crear_usuario(nombre, es_admin):
    if es_admin:
        print("Creando admin...")
    else:
        print("Creando usuario normal...")

# Clean Practice: Funciones separadas y manejo de Excepciones
class UsuarioDuplicadoError(Exception): pass

def crear_usuario_normal(nombre: str):
    if not nombre: raise ValueError("El nombre no puede estar vacío")
    print(f"Usuario {nombre} creado.")

def crear_usuario_administrador(nombre: str):
    crear_usuario_normal(nombre)
    print(f"Permisos de administrador concedidos a {nombre}.")`,
      quiz: [
        {
          question: "¿Por qué se desaconsejan los 'Flag Arguments' (parámetros booleanos como `hacer_algo(flag=True)`) según Clean Code?",
          options: ["Porque indican que la función hace más de una cosa según el valor del booleano", "Porque los booleanos ocupan mucha memoria", "Porque no funcionan en TypeScript"],
          answerIndex: 0,
          explanation: "Un parámetro booleano divide la función en dos caminos de ejecución diferentes, violando el principio de que la función haga una sola cosa."
        },
        {
          question: "¿Cuál es el número ideal de argumentos para una función limpia según Robert C. Martin?",
          options: ["0 (niládica) o 1 (monádica)", "Al menos 5 argumentos", "Indiferente"],
          answerIndex: 0,
          explanation: "Cuantos menos argumentos tenga una función, más fácil es de entender, probar y mantener. 3 o más argumentos deben ser agrupados en un objeto."
        },
        {
          question: "¿Qué recomienda Clean Code respecto al manejo de errores en lugar de retornar códigos numéricos (-1, 0, NULL)?",
          options: ["Retornar siempre None", "Lanzar Excepciones explícitas (Exceptions) para separar el flujo normal del manejo de errores", "Ignorar los errores"],
          answerIndex: 1,
          explanation: "El uso de Excepciones aísla la lógica de negocio en bloques `try-catch` limpios en lugar de contaminar el flujo con condicionales `if error != null`."
        },
        {
          question: "¿En qué consiste el Principio de 'Un Solo Nivel de Abstracción' por función?",
          options: ["Mezclar detalles de bajo nivel de memoria con lógica de alto nivel", "Que todas las instrucciones dentro de una función pertenezcan al mismo nivel de detalle conceptual", "Usar solo variables globales"],
          answerIndex: 1,
          explanation: "Evita mezclar sintaxis HTML o manipulación de strings con llamadas a APIs de alto nivel dentro de la misma función."
        },
        {
          question: "¿Cuál es la extensión recomendada para una función limpia?",
          options: ["Más de 100 líneas", "Pequeña, idealmente de menos de 15 a 20 líneas de código", "Exactamente 50 líneas"],
          answerIndex: 1,
          explanation: "Las funciones cortas son fáciles de leer de un vistazo, fáciles de testear unitariamente y enfocadas en una única responsabilidad."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Hacer UNA sola cosa (Single Responsibility a nivel de función)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Hacer UNA sola cosa (Single Responsibility a nivel de función)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Hacer UNA sola cosa (Single Responsibility a nivel de función). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Un solo nivel de abstracción por función (Single Level of Abstraction)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Un solo nivel de abstracción por función (Single Level of Abstraction)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Un solo nivel de abstracción por función (Single Level of Abstraction). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Evitar argumentos de bandera (Flag Arguments booleanos)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Evitar argumentos de bandera (Flag Arguments booleanos)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evitar argumentos de bandera (Flag Arguments booleanos). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Usar Excepciones en lugar de retornar códigos de error nulos?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Usar Excepciones en lugar de retornar códigos de error nulos", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Usar Excepciones en lugar de retornar códigos de error nulos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO",
      description: "Cuándo los comentarios son un síntoma de mal código, formato vertical/horizontal y la ley de la claridad.",
      items: [
      "El mito del código comentado: 'No comentes mal código, reescríbelo'.",
      "Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos).",
      "Comentarios ruidosos, redundantes y obsoletos.",
      "Formato Vertical: La metáfora del periódico (de lo general a lo específico).",
      "Formato Horizontal: Anchura de líneas y sangrado transparente.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de COMENTARIOS Y FORMATO DE CÓDIGO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: COMENTARIOS Y FORMATO DE CÓDIGO\n\nCuándo los comentarios son un síntoma de mal código, formato vertical/horizontal y la ley de la claridad.\n\nTío Bob afirma: 'Los comentarios son, en el mejor de los casos, un mal necesario. Cada vez que escribes un comentario, deberías sentir que has fallado en expresarte mediante el código'. Los comentarios suelen mentir porque el código evoluciona y nadie actualiza los comentarios. En lugar de escribir `# Comprueba si el usuario tiene más de 18 años`, extrae esa condición a una función llamada `es_mayor_de_edad()`. El formato vertical debe leerse como un periódico: el concepto de alto nivel arriba y los detalles abajo.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· El mito del código comentado: 'No comentes mal código, reescríbelo'.\n· Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos).\n· Comentarios ruidosos, redundantes y obsoletos.\n· Formato Vertical: La metáfora del periódico (de lo general a lo específico).\n· Formato Horizontal: Anchura de líneas y sangrado transparente.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de COMENTARIOS Y FORMATO DE CÓDIGO.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. El mito del código comentado: 'No comentes mal código, reescríbelo'.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El mito del código comentado: 'No comentes mal código, reescríbelo'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El mito del código comentado: 'No comentes mal código, reescríbelo'.» y cuándo lo evitarías.\n\n## 2. Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos).\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos).» y cuándo lo evitarías.\n\n## 3. Comentarios ruidosos, redundantes y obsoletos.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Comentarios ruidosos, redundantes y obsoletos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Comentarios ruidosos, redundantes y obsoletos.» y cuándo lo evitarías.\n\n## 4. Formato Vertical: La metáfora del periódico (de lo general a lo específico).\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Formato Vertical: La metáfora del periódico (de lo general a lo específico). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Formato Vertical: La metáfora del periódico (de lo general a lo específico).» y cuándo lo evitarías.\n\n## 5. Formato Horizontal: Anchura de líneas y sangrado transparente.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Formato Horizontal: Anchura de líneas y sangrado transparente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Formato Horizontal: Anchura de líneas y sangrado transparente.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de COMENTARIOS Y FORMATO DE CÓDIGO.\n\n**Qué es y por qué importa.** Dentro de COMENTARIOS Y FORMATO DE CÓDIGO, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de COMENTARIOS Y FORMATO DE CÓDIGO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de COMENTARIOS Y FORMATO DE CÓDIGO.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 2:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 3:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\nEstos casos muestran por qué COMENTARIOS Y FORMATO DE CÓDIGO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo COMENTARIOS Y FORMATO DE CÓDIGO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Mal comentario (redundante y mentiroso si cambia la condición)
# Suma 1 a la variable i
i = i + 1 

# Mal uso: Comentario para explicar condición compleja
# if u.status == 1 and u.age > 18 and u.verified:

# Clean Code: El código ES la explicación
def es_usuario_valido_para_compra(usuario) -> bool:
    tiene_edad_legal = usuario.edad >= 18
    cuenta_verificada = usuario.esta_verificado
    cuenta_activa = usuario.estado == "ACTIVO"
    return tiene_edad_legal and cuenta_verificada and cuenta_activa`,
      quiz: [
        {
          question: "Según Robert C. Martin, ¿cuál es la postura principal sobre los comentarios en el código?",
          options: ["Comentar absolutamente cada línea de código", "Un comentario suele ser un síntoma de que el código no es lo suficientemente claro por sí mismo", "Los comentarios son obligatorios por ley"],
          answerIndex: 1,
          explanation: "Un código limpio expresado con nombres correctos y funciones extraídas no requiere comentarios explicativos."
        },
        {
          question: "¿Por qué los comentarios tienden a convertirse en 'mentiras' con el tiempo?",
          options: ["Porque los compiladores los alteran", "Porque el código se modifica durante el mantenimiento y los desarrolladores casi nunca actualizan los comentarios", "Porque los hackers los cambian"],
          answerIndex: 1,
          explanation: "El código es la única verdad ejecutable; los comentarios quedan obsoletos y confunden a los futuros mantenedores."
        },
        {
          question: "¿Qué representa la 'Metáfora del Periódico' en el formato vertical de un archivo de código?",
          options: ["Que el código debe publicarse diariamente", "Que las funciones de alto nivel deben ir arriba como los titulares, y los detalles de implementación abajo", "Usar columnas de texto"],
          answerIndex: 1,
          explanation: "El archivo se lee de arriba hacia abajo: los conceptos principales encabezan el archivo y los detalles auxiliares se despliegan más abajo."
        },
        {
          question: "¿Cuál de los siguientes es un ejemplo de comentario LEGÍTIMO y útil?",
          options: ["# Constructor de la clase", "# i = i + 1", "// ADVERTENCIA: Este test tarda 10 minutos en ejecutarse porque conecta a la base de datos de homologación"],
          answerIndex: 2,
          explanation: "Los comentarios que advierten sobre consecuencias no obvias o requisitos de entorno son valiosos para el equipo."
        },
        {
          question: "¿Qué distancia o densidad horizontal se sugiere mantener en las líneas de código?",
          options: ["Líneas cortas (idealmente no superar 80-120 caracteres para evitar scroll horizontal)", "Líneas de 500 caracteres", "Sin sangrado ni tabulación"],
          answerIndex: 0,
          explanation: "Mantener líneas de longitud moderada permite leer el código completo sin tener que desplazarse horizontalmente en la pantalla."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: El mito del código comentado: 'No comentes mal código, reescríbelo'?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: El mito del código comentado: 'No comentes mal código, reescríbelo'", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El mito del código comentado: 'No comentes mal código, reescríbelo'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, T...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Comentarios verdaderamente necesarios (Legal, advertencia de consec...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Comentarios ruidosos, redundantes y obsoletos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Comentarios ruidosos, redundantes y obsoletos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Comentarios ruidosos, redundantes y obsoletos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Formato Vertical: La metáfora del periódico (de lo general a lo específico)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Formato Vertical: La metáfora del periódico (de lo general a lo esp...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Formato Vertical: La metáfora del periódico (de lo general a lo específico). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Formato Horizontal: Anchura de líneas y sangrado transparente?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Formato Horizontal: Anchura de líneas y sangrado transparente", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Formato Horizontal: Anchura de líneas y sangrado transparente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)",
      description: "Una sola razón para cambiar. Alta cohesión, bajo acoplamiento y separación de aspectos.",
      items: [
      "Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'.",
      "Identificación de 'razones para cambiar' asociadas a actores de negocio.",
      "Separación de la Lógica de Negocio de la Lógica de Persistencia / UI.",
      "Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes.",
      "Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)\n\nUna sola razón para cambiar. Alta cohesión, bajo acoplamiento y separación de aspectos.\n\nEl Primer Principio SOLID es el **Single Responsibility Principle (SRP)**. La definición del Tío Bob es muy específica: 'Un módulo debe ser responsable ante un solo actor de negocio'. Si una clase `ReporteEmpleado` calcula el salario para Finanzas y además imprime el formato PDF para Recursos Humanos, tiene DOS razones para cambiar. Si Finanzas cambia el cálculo de horas extra, podrías romper accidentalmente la impresión de RRHH. SRP exige separar estas responsabilidades en clases independientes.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'.\n· Identificación de 'razones para cambiar' asociadas a actores de negocio.\n· Separación de la Lógica de Negocio de la Lógica de Persistencia / UI.\n· Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes.\n· Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'.» y cuándo lo evitarías.\n\n## 2. Identificación de 'razones para cambiar' asociadas a actores de negocio.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Identificación de 'razones para cambiar' asociadas a actores de negocio. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Identificación de 'razones para cambiar' asociadas a actores de negocio.» y cuándo lo evitarías.\n\n## 3. Separación de la Lógica de Negocio de la Lógica de Persistencia / UI.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Separación de la Lógica de Negocio de la Lógica de Persistencia / UI. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Separación de la Lógica de Negocio de la Lógica de Persistencia / UI.» y cuándo lo evitarías.\n\n## 4. Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes.» y cuándo lo evitarías.\n\n## 5. Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP).\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 2:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 3:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\nEstos casos muestran por qué PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Violación de SRP: Una sola clase calcula salario, guarda en DB e imprime PDF
class EmpleadoSpaghetti:
    def calcular_salario(self): pass
    def guardar_en_base_datos(self): pass
    def generar_pdf_reporte(self): pass

# Aplicación estricta de SRP: Clases especializadas
class CalculadoraFinancieraEmpleado:
    def calcular_salario(self, empleado): pass

class RepositorioEmpleadoDB:
    def guardar(self, empleado): pass

class GeneradorReportePDFEmpleado:
    def generar_pdf(self, empleado): pass`,
      quiz: [
        {
          question: "¿Cuál es la definición exacta del Principio de Responsabilidad Única (SRP)?",
          options: ["Que una clase solo debe tener un método", "Que una clase o módulo debe tener una, y solo una, razón para cambiar (asociada a un único actor de negocio)", "Que un programador debe hacer una sola tarea"],
          answerIndex: 1,
          explanation: "SRP establece que los cambios requeridos por diferentes actores o departamentos de negocio deben impactar módulos separados."
        },
        {
          question: "¿Qué es una 'Clase Dios' (God Class) en arquitectura de software?",
          options: ["Una clase perfecta", "Un antipatrón de diseño donde una sola clase acumula decenas de responsabilidades y miles de líneas de código", "Una clase base de TypeScript"],
          answerIndex: 1,
          explanation: "Las Clases Dios violan abiertamente SRP: intentan manejar interfaz, base de datos, lógica y reglas de negocio en un solo archivo."
        },
        {
          question: "¿Qué mide la 'Cohesión' en una clase orientada a objetos?",
          options: ["El número de comentarios", "El grado de relación e interacción entre los métodos de la clase y sus campos de atributos internos", "La velocidad del procesador"],
          answerIndex: 1,
          explanation: "Alta cohesión significa que la mayoría de los métodos de la clase manipulan los mismos atributos, indicando que la clase está enfocada."
        },
        {
          question: "Si la clase `Factura` modifica su código tanto cuando la SUNAT/SAT cambia los impuestos como cuando el equipo de UI cambia el logo en pantalla, ¿qué ocurre?",
          options: ["Cumple SRP perfectamente", "Viola el principio SRP porque responde a dos actores/razones de cambio distintas", "Es una clase inmutable"],
          answerIndex: 1,
          explanation: "Responde a dos razones de cambio independientes (reglas fiscales vs diseño visual), por lo que viola SRP."
        },
        {
          question: "¿Cuál es el beneficio directo de aplicar SRP a la base de código?",
          options: ["Sistemas modulares, cambios aislados sin efectos secundarios inesperados y pruebas unitarias más sencillas", "El código se ejecuta 100 veces más rápido", "Desaparecen las bases de datos"],
          answerIndex: 0,
          explanation: "Al separar responsabilidades, modificar una regla de negocio no rompe ni afecta a las demás partes del sistema."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón ...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Definición exacta de SRP: 'Un módulo o clase debe tener una y solo ...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Identificación de 'razones para cambiar' asociadas a actores de negocio?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Identificación de 'razones para cambiar' asociadas a actores de neg...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Identificación de 'razones para cambiar' asociadas a actores de negocio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Separación de la Lógica de Negocio de la Lógica de Persistencia / UI?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Separación de la Lógica de Negocio de la Lógica de Persistencia / UI", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Separación de la Lógica de Negocio de la Lógica de Persistencia / UI. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Síntomas de violación de SRP: Clases Dios (God Classes) y archivos ...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Cohesión: El grado en que los métodos de una clase trabajan sobre s...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)",
      description: "Abierto para extensión, cerrado para modificación. Uso de interfaces y polimorfismo.",
      items: [
      "Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'.",
      "El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes.",
      "Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP.",
      "Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado.",
      "Relación entre OCP y los Patrones de Diseño (Strategy, Decorator).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)\n\nAbierto para extensión, cerrado para modificación. Uso de interfaces y polimorfismo.\n\nEl segundo principio SOLID es el **Open/Closed Principle (OCP)**. Afirma que deberías poder extender el comportamiento de un sistema SIN modificar su código fuente existente ya probado y en producción. Si para agregar un nuevo método de pago (ej: PayPal) tienes que modificar la clase `ProcesadorPagos` agregando un `else if (tipo == 'PAYPAL')`, estás violando OCP. La solución es crear una interfaz `MetodoPago` y agregar una nueva clase `PagoPayPal` que la implemente.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'.\n· El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes.\n· Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP.\n· Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado.\n· Relación entre OCP y los Patrones de Diseño (Strategy, Decorator).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'.» y cuándo lo evitarías.\n\n## 2. El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes.» y cuándo lo evitarías.\n\n## 3. Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP.» y cuándo lo evitarías.\n\n## 4. Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado.» y cuándo lo evitarías.\n\n## 5. Relación entre OCP y los Patrones de Diseño (Strategy, Decorator).\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Relación entre OCP y los Patrones de Diseño (Strategy, Decorator). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Relación entre OCP y los Patrones de Diseño (Strategy, Decorator).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP).\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 2:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\n**Ejemplo 3:** NestJS y Spring inyectan dependencias porque violar DIP hace que los tests requieran bases de datos reales.\n\nEstos casos muestran por qué PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Violación de OCP: Editar la clase para cada nuevo descuento
class CalculadorDescuentoSpaghetti:
    def calcular(self, tipo_cliente, monto):
        if tipo_cliente == "REGULAR": return monto * 0.95
        elif tipo_cliente == "VIP": return monto * 0.80
        # ¡Tuvimos que modificar esta clase para agregar PREMIUM!

# Clean OCP: Abierto a extensión, cerrado a modificación mediante polimorfismo
from abc import ABC, abstractmethod

class EstrategiaDescuento(ABC):
    @abstractmethod
    def aplicar_descuento(self, monto: float) -> float: pass

class DescuentoVIP(EstrategiaDescuento):
    def aplicar_descuento(self, monto: float) -> float: return monto * 0.80

class DescuentoPremium(EstrategiaDescuento): # ¡Nuevo tipo sin modificar código previo!
    def aplicar_descuento(self, monto: float) -> float: return monto * 0.70`,
      quiz: [
        {
          question: "¿Qué establece el Principio de Abierto/Cerrado (OCP)?",
          options: ["Que el software debe estar cerrado a los usuarios", "Que los módulos deben estar abiertos para su extensión (agregar nuevas funcionalidades) pero cerrados a su modificación (no editar código ya probado)", "Que todo el código debe ser público"],
          answerIndex: 1,
          explanation: "OCP busca que agregues características creando nuevo código en lugar de modificar clases existentes probadas en producción."
        },
        {
          question: "Si para agregar un nuevo tipo de reporte en tu sistema tienes que modificar una estructura `switch` existente de 20 casos, ¿qué principio estás violando?",
          options: ["SRP", "OCP (Open/Closed Principle)", "LSP"],
          answerIndex: 1,
          explanation: "Editar condicionales existentes para incorporar nuevos casos viola OCP; debe resolverse mediante polimorfismo o interfaces."
        },
        {
          question: "¿Cuál es la herramienta principal en Programación Orientada a Objetos para implementar OCP?",
          options: ["Variables globales", "Abstracciones (Interfaces, Clases Abstractas y Polimorfismo)", "Bucles while"],
          answerIndex: 1,
          explanation: "Las interfaces permiten definir un contrato estático sobre el cual se pueden conectar ilimitadas implementaciones nuevas."
        },
        {
          question: "¿Qué riesgo se evita al cumplir con el principio OCP?",
          options: ["Introducir errores o regresiones en características antiguas que ya funcionaban bien al modificar su código fuente", "Que la computadora se apague", "Usar mucha RAM"],
          answerIndex: 0,
          explanation: "Al no tocar el código maduro existente, se elimina la posibilidad de romper funcionalidades previas en producción."
        },
        {
          question: "¿Qué patrón de diseño del GoF es una aplicación directa del principio OCP?",
          options: ["Patrón Strategy (Estrategia)", "Patrón Singleton", "Patrón Prototype"],
          answerIndex: 0,
          explanation: "Strategy permite intercambiar algoritmos e inyectar nuevas estrategias de forma transparente sin tocar el cliente."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Definición de OCP: 'Las entidades de software deben estar abiertas para exten...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición de OCP: 'Las entidades de software deben estar abiertas ...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` exis...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: El peligro de agregar nuevos tipos editando bloques `switch` / `if-...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Inyección de nuevos comportamientos creando nuevas clases sin alterar el códi...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Inyección de nuevos comportamientos creando nuevas clases sin alter...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Relación entre OCP y los Patrones de Diseño (Strategy, Decorator)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Relación entre OCP y los Patrones de Diseño (Strategy, Decorator)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Relación entre OCP y los Patrones de Diseño (Strategy, Decorator). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)",
      description: "Sustituibilidad de subclases, contratos de interfaz, precondiciones y postcondiciones.",
      items: [
      "Definición de Barbara Liskov (1987) para subtipado de datos.",
      "Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa.",
      "El dilema clásico del Cuadrado y el Rectángulo.",
      "Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase.",
      "Postcondiciones y la preservación de invariantes.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)\n\nSustituibilidad de subclases, contratos de interfaz, precondiciones y postcondiciones.\n\nEl tercer principio SOLID es el **Liskov Substitution Principle (LSP)**, formulado por Barbara Liskov. Establece que los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin que el programa falle o se comporte erróneamente. El ejemplo clásico es la clase `Cuadrado` heredando de `Rectangulo`. Si un método cambia el ancho del rectángulo esperando que el alto no cambie, y el Cuadrado altera ambas dimensiones a la vez, se violan los contratos de LSP.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición de Barbara Liskov (1987) para subtipado de datos.\n· Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa.\n· El dilema clásico del Cuadrado y el Rectángulo.\n· Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase.\n· Postcondiciones y la preservación de invariantes.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición de Barbara Liskov (1987) para subtipado de datos.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición de Barbara Liskov (1987) para subtipado de datos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición de Barbara Liskov (1987) para subtipado de datos.» y cuándo lo evitarías.\n\n## 2. Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa.» y cuándo lo evitarías.\n\n## 3. El dilema clásico del Cuadrado y el Rectángulo.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El dilema clásico del Cuadrado y el Rectángulo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El dilema clásico del Cuadrado y el Rectángulo.» y cuándo lo evitarías.\n\n## 4. Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase.» y cuándo lo evitarías.\n\n## 5. Postcondiciones y la preservación de invariantes.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Postcondiciones y la preservación de invariantes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Postcondiciones y la preservación de invariantes.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP).\n\n**Qué es y por qué importa.** Dentro de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 2:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 3:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\nEstos casos muestran por qué PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Violación de LSP: Cuadrado hereda de Rectángulo
class Rectangulo:
    def __init__(self, ancho: float, alto: float):
        self.ancho = ancho
        self.alto = alto

class CuadradoViolador(Rectangulo):
    def __init__(self, lado: float):
        super().__init__(lado, lado)
    # Al cambiar el ancho, altera involuntariamente el alto
    def set_ancho(self, a): 
        self.ancho = a; self.alto = a

def probar_rectangulo(r: Rectangulo):
    r.ancho = 10
    r.alto = 5
    # Esperamos área = 50. ¡Para Cuadrado dará 25! (Violación de LSP)
    assert r.ancho * r.alto == 50, "¡LSP Violado!`,
      quiz: [
        {
          question: "¿Qué establece el Principio de Sustitución de Liskov (LSP)?",
          options: ["Que las subclases deben tener el mismo nombre", "Que las clases derivadas deben poder sustituir a sus clases base sin romper la corrección ni el contrato del programa", "Que no se debe usar herencia"],
          answerIndex: 1,
          explanation: "LSP garantiza que el polimorfismo sea seguro: cualquier subclase debe cumplir los contratos y expectativas de la clase padre."
        },
        {
          question: "En el problema del Cuadrado herederando de Rectángulo, ¿por qué se viola LSP si un método modifica el ancho?",
          options: ["Porque el Cuadrado modifica también el alto violando las invariantes y expectativas de comportamiento del Rectángulo", "Porque el cuadrado no es una figura", "Porque es muy lento"],
          answerIndex: 0,
          explanation: "El cliente que recibe un Rectángulo espera modificar el ancho manteniendo fijo el alto; el Cuadrado rompe esa expectativa."
        },
        {
          question: "Si una subclase lanza una excepción del tipo `NotImplementedError` en un método heredado de la interfaz base, ¿qué principio está violando?",
          options: ["LSP (Liskov Substitution Principle)", "SRP", "Ninguno"],
          answerIndex: 0,
          explanation: "Si el cliente invoca el método esperando ejecución y la subclase lanza un error por no implementarlo, rompe la sustituibilidad."
        },
        {
          question: "Respecto a las Precondiciones en las subclases, ¿qué exige LSP?",
          options: ["Las subclases NO pueden exigir precondiciones más estrictas que la clase base", "Las subclases deben borrar todas las variables", "Las precondiciones son obligatorias"],
          answerIndex: 0,
          explanation: "La subclase debe aceptar al menos los mismos insumos que la clase padre; no puede poner restricciones adicionales."
        },
        {
          question: "¿Cuál es la recomendación de diseño preferida ante relaciones donde la herencia rompe LSP?",
          options: ["Usar Composición en lugar de Herencia ('Favor composition over inheritance')", "Ignorar el error", "Borrar la interfaz"],
          answerIndex: 0,
          explanation: "Cuando una relación 'es-un' falla el test semántico de Liskov, se debe usar composición ('tiene-un') mediante atributos internos."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Definición de Barbara Liskov (1987) para subtipado de datos?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Definición de Barbara Liskov (1987) para subtipado de datos", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición de Barbara Liskov (1987) para subtipado de datos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por o...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Si S es un subtipo de T, los objetos de tipo T deben poder reemplaz...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la correcci.... Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: El dilema clásico del Cuadrado y el Rectángulo?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: El dilema clásico del Cuadrado y el Rectángulo", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El dilema clásico del Cuadrado y el Rectángulo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Reglas de Contrato: Precondiciones no pueden ser reforzadas en la s...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Postcondiciones y la preservación de invariantes?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Postcondiciones y la preservación de invariantes", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Postcondiciones y la preservación de invariantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION",
      description: "Interfaces específicas para cada cliente (ISP) e Inversión de Dependencias mediante inyección (DIP).",
      items: [
      "Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'.",
      "Diseño de interfaces enfocadas y de granularidad fina.",
      "Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel.",
      "Ambos deben depender de Abstracciones (Interfaces).",
      "Inyección de Dependencias (DI): Constructor Injection y contenedores IoC.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION\n\nInterfaces específicas para cada cliente (ISP) e Inversión de Dependencias mediante inyección (DIP).\n\nLos últimos dos principios SOLID son **ISP** y **DIP**. **ISP** enseña que es preferible tener muchas interfaces pequeñas y especializadas en lugar de una interfaz gigante con decenas de métodos no relacionados. **DIP** establece la regla de oro de la arquitectura limpia: 'Los módulos de alto nivel (lógica de negocio) no deben depender de módulos de bajo nivel (DB, UI, HTTP); ambos deben depender de abstracciones'. Al inyectar la interfaz de la base de datos por el constructor, la lógica de negocio se vuelve independiente del motor SQL o NoSQL.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'.\n· Diseño de interfaces enfocadas y de granularidad fina.\n· Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel.\n· Ambos deben depender de Abstracciones (Interfaces).\n· Inyección de Dependencias (DI): Constructor Injection y contenedores IoC.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'.» y cuándo lo evitarías.\n\n## 2. Diseño de interfaces enfocadas y de granularidad fina.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Diseño de interfaces enfocadas y de granularidad fina. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Diseño de interfaces enfocadas y de granularidad fina.» y cuándo lo evitarías.\n\n## 3. Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel.» y cuándo lo evitarías.\n\n## 4. Ambos deben depender de Abstracciones (Interfaces).\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ambos deben depender de Abstracciones (Interfaces). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ambos deben depender de Abstracciones (Interfaces).» y cuándo lo evitarías.\n\n## 5. Inyección de Dependencias (DI): Constructor Injection y contenedores IoC.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Inyección de Dependencias (DI): Constructor Injection y contenedores IoC. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Inyección de Dependencias (DI): Constructor Injection y contenedores IoC.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION.\n\n**Qué es y por qué importa.** Dentro de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION, este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 2:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 3:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\nEstos casos muestran por qué PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Violación de DIP: La clase de Alto Nivel depende directamente de PostgresDB (Bajo Nivel)
class ServicioUsuarioSpaghetti:
    def __init__(self):
        self.db = PostgresDatabaseDirecta() # ¡Acoplamiento rígido de bajo nivel!

# Clean DIP: Ambas capas dependen de una Interfaz Abstracta
from abc import ABC, abstractmethod

class RepositorioUsuarioInterface(ABC):
    @abstractmethod
    def buscar_por_id(self, user_id: int): pass

class ServicioUsuarioClean:
    # Inyección de Dependencia por Constructor (DI)
    def __init__(self, repo: RepositorioUsuarioInterface):
        self.repo = repo

    def procesar(self, user_id: int):
        user = self.repo.buscar_por_id(user_id)
        # Lógica de negocio pura...`,
      quiz: [
        {
          question: "¿Qué afirma el Principio de Segregación de Interfaces (ISP)?",
          options: ["Que todos los métodos deben estar en una sola interfaz", "Que los clientes no deben ser forzados a depender de interfaces o métodos que no utilizan", "Que no se deben usar interfaces"],
          answerIndex: 1,
          explanation: "ISP propone crear interfaces delgadas y específicas para evitar que una clase tenga que implementar métodos vacíos o irrelevantes."
        },
        {
          question: "¿Qué establece el Principio de Inversión de Dependencias (DIP)?",
          options: ["Que los módulos de alto nivel (negocio) no deben depender de detalles de bajo nivel (DB, librerías); ambos deben depender de abstracciones", "Que las dependencias se descargan de internet", "Que las bases de datos deben ir primero"],
          answerIndex: 0,
          explanation: "DIP invierte la dirección tradicional de acoplamiento: la lógica central depende de interfaces, y los detalles externos las implementan."
        },
        {
          question: "¿Qué es la 'Inyección de Dependencias' (Dependency Injection - DI)?",
          options: ["Un virus informático", "Un patrón donde las dependencias que necesita un objeto le son suministradas desde el exterior (ej: por el constructor) en lugar de instanciarlas él mismo", "Un script de compilación"],
          answerIndex: 1,
          explanation: "La inyección por constructor entrega las instancias concretas mediante interfaces, desarticulando el acoplamiento rígido."
        },
        {
          question: "¿Qué beneficio principal ofrece DIP al realizar Pruebas Unitarias (Unit Testing)?",
          options: ["Ninguno", "Permite sustituir fácilmente la base de datos real o APIs externas por objetos simulados (Mocks / Stubs) durante los tests", "Hace que los tests corran sin CPU"],
          answerIndex: 1,
          explanation: "Al depender de interfaces, en los entornos de prueba se inyectan repositorios falsos en memoria de forma instantánea."
        },
        {
          question: "Si la interfaz `ImpresoraMultifuncional` obliga a una impresora básica a implementar un método `escanear_documento()` que no soporta, ¿qué principio se viola?",
          options: ["ISP (Interface Segregation Principle)", "OCP", "DIP"],
          answerIndex: 0,
          explanation: "Obligar a una clase a implementar contratos que no utiliza es una violación directa del principio ISP."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a dep...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Interface Segregation Principle (ISP): 'Ningún cliente debe ser for...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Diseño de interfaces enfocadas y de granularidad fina?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Diseño de interfaces enfocadas y de granularidad fina", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Diseño de interfaces enfocadas y de granularidad fina. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Dependency Inversion Principle (DIP): Módulos de alto nivel no debe...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Ambos deben depender de Abstracciones (Interfaces)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ambos deben depender de Abstracciones (Interfaces)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ambos deben depender de Abstracciones (Interfaces). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Inyección de Dependencias (DI): Constructor Injection y contenedores IoC?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Inyección de Dependencias (DI): Constructor Injection y contenedore...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Inyección de Dependencias (DI): Constructor Injection y contenedores IoC. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: PATRONES DE DISEÑO ESENCIALES (GANG OF FOUR: CREACIONALES, ESTRUCTURALES Y ESTRATEGIA)",
      description: "Patrones GoF aplicados al código limpio: Factory Method, Builder, Adapter, Decorator, Strategy y Observer para erradicar monolitos y habilitar testabilidad real.",
      items: [
        "Origen e intención de los Patrones de Diseño (Gang of Four 1994).",
        "Patrones Creacionales: Factory Method y Builder para encapsular instanciaciones complejas.",
        "Patrón Singleton: Casos legítimos (connection pools) y por qué destruye la testabilidad si no se abstrae.",
        "Patrones Estructurales: Adapter y Decorator para integrar APIs legadas y extender comportamientos.",
        "Patrón de Comportamiento Strategy: Reemplazar árboles de if-else gigantes por polimorfismo dinámico.",
        "Patrón Observer: Suscripción reactiva y desacoplamiento temporal de eventos.",
        "Relación directa entre Patrones GoF y Principios SOLID (especialmente OCP y DIP).",
        "Antipatrones comunes: 'Factory-itis' (sobreingeniería) y Singletons globales mutables no mockeables."
],
      content: "## Panorama del tema: PATRONES DE DISEÑO ESENCIALES (GANG OF FOUR)\n\nLos Patrones de Diseño descritos por el Gang of Four (Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides en 1994) no son fragmentos de código listos para copiar y pegar: son planos arquitectónicos comprobados para resolver problemas recurrentes en el diseño de software orientado a objetos.\n\nEn el desarrollo profesional y en la era de los asistentes de IA, los patrones de diseño son el lenguaje común que te permite comunicar intenciones arquitectónicas con precisión quirúrgica. Un código sin patrones tiende a acumular condicionales anidadas monstruosas (if/else de 50 líneas) y acoplamiento directo a clases concretas (new MySQLConnection()), volviéndose prácticamente imposible de someter a pruebas unitarias automatizadas.\n\n### 1. Patrones Creacionales: Factory Method y Builder\n- Factory Method: Desacopla al creador del objeto de las clases concretas instanciadas. Define una interfaz de creación (createNotifier()) y deja que subclases o configuraciones decidan si instanciar SlackNotifier, EmailNotifier o MockNotifier para tests.\n- Builder: Resuelve el problema del \"Constructor Telescópico\" (constructores con 8 argumentos donde la mitad son nulos o booleanos confusos). Permite construir objetos complejos paso a paso con una API fluida (new UserQueryBuilder().from('users').whereActive().limit(10).build()).\n\n### 2. Patrón Singleton: Cuándo sí y por qué suele ser un antipatrón en QA\nEl patrón Singleton garantiza una única instancia en toda la aplicación. Es útil para recursos pesados compartidos (como un pool de conexiones a la base de datos). Sin embargo, en Clean Code y QA moderno se considera un olor a código (code smell) cuando almacena estado mutable global:\n1. Impide la ejecución de pruebas unitarias en paralelo (los tests se interfieren entre sí).\n2. Oculta dependencias reales en lugar de declararlas explícitamente en el constructor.\n3. Para resolverlo, se utiliza un Singleton gestionado por un contenedor de Inversión de Control (IoC / DI Container) en lugar de una variable estática rígida.\n\n### 3. Patrones Estructurales: Adapter y Decorator\n- Adapter (Adaptador): Permite que interfaces incompatibles colaboren. Si contratas una nueva pasarela de pagos que devuelve XML y tu sistema espera JSON estandarizado, el Adapter envuelve la pasarela externa y traduce las solicitudes sin alterar la lógica de negocio.\n- Decorator: Añade responsabilidades a un objeto dinámicamente sin modificar su clase original (por ejemplo, añadir métricas de latencia, logging o compresión gzip a un stream HTTP).\n\n### 4. Patrones de Comportamiento: Strategy y Observer\n- Strategy (Estrategia): Es el rey de la refactorización Clean Code. Permite definir una familia de algoritmos, encapsular cada uno en una clase independiente y hacerlos intercambiables en tiempo de ejecución. Erradica por completo los condicionales gigantescos switch (user.plan) y permite mockear comportamientos en tests con cero fricción.\n- Observer (Observador): Define una relación de uno a muchos: cuando el sujeto cambia su estado, todos sus suscriptores son notificados automáticamente. Es la base de arquitecturas orientadas a eventos y bibliotecas reactivas.\n\n## Aplicaciones en sistemas reales\n- Stripe & PayPal SDKs: Utilizan el patrón Strategy para alternar entre diferentes métodos de autenticación (API Keys, OAuth2, Webhooks).\n- Express & NestJS Middlewares: Implementan variaciones de Decorator y Chain of Responsibility para validar JWTs y autorizaciones antes de que la petición llegue al controlador.\n\n## Errores comunes al estudiar\n- Aplicar patrones de diseño antes de tiempo (sobreingeniería o \"Pattern Overdose\"): no crees un Factory de Abstract Factories para un script de 30 líneas.\n- Usar Singletons globales que dificultan el aislamiento en suites de pruebas unitarias.",
      codeSnippet: "// ==========================================\n// ANTES: Código monolítico lleno de switches\n// ==========================================\nclass OrderServiceLegacy {\n  processPayment(amount: number, method: string) {\n    if (method === 'CREDIT_CARD') {\n      console.log('Conectando a Visa/Mastercard Gateway...');\n    } else if (method === 'PAYPAL') {\n      console.log('Autenticando token PayPal Express...');\n    } else if (method === 'CRYPTO') {\n      console.log('Esperando 3 confirmaciones en blockchain...');\n    } else {\n      throw new Error('Método de pago no soportado');\n    }\n  }\n}\n\n// ==========================================\n// DESPUÉS: Patrón Strategy + Inversión de Control (DIP)\n// ==========================================\nexport interface PaymentStrategy {\n  pay(amount: number): Promise<{ success: boolean; txId: string }>;\n}\n\nexport class CreditCardStrategy implements PaymentStrategy {\n  async pay(amount: number) {\n    return { success: true, txId: 'cc_' + Math.random().toString(36).substring(7) };\n  }\n}\n\nexport class PayPalStrategy implements PaymentStrategy {\n  async pay(amount: number) {\n    return { success: true, txId: 'pp_' + Math.random().toString(36).substring(7) };\n  }\n}\n\nexport class OrderService {\n  constructor(private paymentStrategy: PaymentStrategy) {}\n\n  async checkout(amount: number) {\n    if (amount <= 0) throw new Error('Monto inválido');\n    return await this.paymentStrategy.pay(amount);\n  }\n}",
      quiz: [
        {
                "question": "¿Cuál es la principal ventaja de aplicar el Patrón Strategy frente a un bloque switch condicional?",
                "options": [
                        "Hace que la CPU ejecute el código el doble de rápido sin usar memoria RAM.",
                        "Permite añadir nuevos algoritmos creando nuevas clases sin modificar el código existente (cumpliendo OCP) y facilita inyectar mocks en pruebas unitarias.",
                        "Elimina la necesidad de definir tipos o interfaces en TypeScript."
                ],
                "answerIndex": 1,
                "explanation": "Strategy encapsula cada algoritmo en su propia clase bajo una interfaz común, habilitando la extensión sin modificar código base y permitiendo sustituirlo por mocks durante los tests."
        },
        {
                "question": "¿Por qué el patrón Singleton estático clásico suele considerarse un antipatrón en QA y pruebas unitarias?",
                "options": [
                        "Porque comparte estado mutable global en toda la aplicación, acoplando los tests entre sí y provocando que no puedan ejecutarse en paralelo de forma aislada.",
                        "Porque los compiladores modernos prohíben la palabra clave static.",
                        "Porque solo funciona en entornos Linux y falla en Windows y macOS."
                ],
                "answerIndex": 0,
                "explanation": "Los Singletons con estado mutable global crean acoplamiento temporal entre pruebas: el resultado de un test depende de si otro test corrió antes y alteró ese estado."
        },
        {
                "question": "¿Qué patrón estructural utilizarías para integrar una biblioteca externa cuya API no coincide con las interfaces de tu dominio?",
                "options": [
                        "Patrón Adapter (Adaptador)",
                        "Patrón Singleton",
                        "Patrón Prototype"
                ],
                "answerIndex": 0,
                "explanation": "Adapter envuelve la interfaz externa incompatible y la adapta a la interfaz requerida por el dominio, protegiendo a la aplicación de cambios en el proveedor externo."
        },
        {
                "question": "¿Qué patrón creacional es ideal para construir objetos con múltiples configuraciones opcionales sin recurrir a constructores telescópicos?",
                "options": [
                        "Patrón Builder (Constructor)",
                        "Patrón Interpreter",
                        "Patrón State"
                ],
                "answerIndex": 0,
                "explanation": "Builder permite construir paso a paso objetos complejos mediante métodos fluidos, evitando constructores gigantes con argumentos posicionales confusos."
        }
]
    },
    {
      id: 9,
      title: "MÓDULO 9: QA & LA PIRÁMIDE DE PRUEBAS: UNIT TESTING & TDD CON VITEST / PYTEST",
      description: "Fundamentos de Aseguramiento de Calidad (QA): Pirámide de Pruebas de Mike Cohn, TDD (Red-Green-Refactor), patrón AAA, Test Doubles (Mocks, Stubs, Spies) y métricas de cobertura.",
      items: [
        "La Pirámide de Pruebas de Mike Cohn: 70% Unit, 20% Integración, 10% E2E vs el Antipatrón Ice-Cream Cone.",
        "Test-Driven Development (TDD): El ciclo Red-Green-Refactor y las Tres Leyes de TDD del Tío Bob.",
        "El Patrón AAA (Arrange, Act, Assert) y los principios FIRST para pruebas de élite.",
        "Test Doubles según Gerard Meszaros: Dummies, Fakes, Stubs, Spies y Mocks.",
        "Mocking práctico en Vitest (vi.fn, vi.spyOn) y pytest (unittest.mock, monkeypatch).",
        "Métricas de Cobertura de Código: Line, Branch, Function Coverage y sus límites reales.",
        "Mutation Testing (Stryker): ¿Tus pruebas realmente detectan fallos o solo inflan el coverage?",
        "Antipatrones de testing: Testear detalles de implementación internos en vez de comportamientos observables."
],
      content: "## Panorama del tema: QA & LA PIRÁMIDE DE PRUEBAS: UNIT TESTING & TDD\n\nRefactorizar código sin una red de pruebas automatizadas es como lanzarse en paracaídas esperando que la tela se cosa sola en el aire. Robert C. Martin lo resume en una máxima: sin pruebas unitarias, el código limpio no puede sostenerse. El miedo a romper una funcionalidad existente paraliza a los equipos y condena al software a la obsolescencia técnica.\n\nEn este módulo aprenderás a construir la base de la ingeniería de calidad: pruebas unitarias ultrarrápidas, deterministas y legibles utilizando Vitest (el estándar moderno en TypeScript/JavaScript) y pytest (en Python).\n\n### 1. La Pirámide de Pruebas vs El Antipatrón 'Ice-Cream Cone'\nPopularizada por Mike Cohn y Martin Fowler, la Pirámide de Pruebas establece la distribución óptima de tests en una base de código saludable:\n- 70% Pruebas Unitarias (Base): Prueban una función o clase de forma completamente aislada de la red, bases de datos o sistemas de archivos. Se ejecutan en milisegundos y ofrecen retroalimentación instantánea.\n- 20% Pruebas de Integración (Cuerpo): Validan la interacción entre módulos reales (ej: base de datos local SQLite o contratos de API con MSW).\n- 10% Pruebas End-to-End E2E (Cúspide): Simulan el viaje completo del usuario en el navegador con herramientas como Playwright.\n\nEl Antipatrón Ice-Cream Cone (Cono de Helado): Ocurre cuando un equipo invierte 80% de su tiempo en tests E2E lentos y frágiles (flaky tests), casi nada en integración y muy pocos unitarios. El resultado son pipelines de CI que tardan 45 minutos y fallan aleatoriamente por problemas de red.\n\n### 2. TDD (Test-Driven Development) y el Ciclo Red-Green-Refactor\nTDD no es una técnica de testing; es una técnica de diseño de software. Consiste en un ciclo de iteración rápida:\n1. RED (Rojo): Escribe una prueba unitaria pequeña que defina el comportamiento deseado. Ejecútala y observa cómo falla (debe fallar por la razón correcta, no por un error sintáctico).\n2. GREEN (Verde): Escribe la cantidad mínima indispensable de código para que la prueba pase. No optimices ni limpies aún.\n3. REFACTOR (Refactorizar): Ahora que tienes la prueba en verde como red de seguridad, limpia el código: elimina duplicación, renombra variables, extrae funciones y aplica SOLID. Vuelve a ejecutar la prueba para certificar que sigue verde.\n\n### 3. El Patrón AAA (Arrange, Act, Assert)\nCada prueba unitaria profesional debe estructurarse en tres fases nítidas:\n- Arrange (Preparar): Configura los datos de entrada, dependencias y Test Doubles necesarios.\n- Act (Actuar): Ejecuta la función o método bajo prueba.\n- Assert (Afirmar): Verifica que el resultado o los efectos colaterales coincidan exactamente con la expectativa.\n\n### 4. Test Doubles: Dummies, Stubs, Mocks, Spies y Fakes\nPara mantener los tests unitarios rápidos y deterministas, se sustituyen las dependencias externas por dobles de prueba:\n- Dummy: Objeto que se pasa solo para llenar la lista de parámetros pero nunca se usa.\n- Stub: Devuelve respuestas predefinidas fijas (ej: simular que la BD devuelve un usuario sin consultar SQL real).\n- Spy: Registra información sobre cómo fue llamado (número de llamadas, parámetros recibidos).\n- Mock: Objeto preprogramado con expectativas de verificación (expect(mock).toHaveBeenCalledWith(...)).\n- Fake: Implementación funcional ligera no apta para producción (ej: un repositorio en memoria usando un Map en vez de PostgreSQL).\n\n### 5. Cobertura de Código (Coverage) y Mutation Testing\nTener 100% de Line Coverage no significa que tu software esté libre de errores; solo significa que cada línea se ejecutó al menos una vez, incluso si la aserción fue vacía (expect(true).toBe(true)).\n- Branch Coverage (Cobertura de Ramas): Mide que todos los caminos lógicos (if/else, catch, ternarios) hayan sido probados.\n- Mutation Testing (Stryker / Mutmut): Introduce pequeñas mutaciones automáticas en tu código fuente (cambia un > por >=, invierte un booleano). Si tu suite de pruebas sigue pasando con el código mutado, el mutante \"sobrevive\" y expone un test débil.\n\n## Aplicaciones en sistemas reales\n- Ecosistema React / Node: Vitest aprovecha la infraestructura de Vite para ejecutar miles de pruebas unitarias en paralelo mediante workers multi-hilo en milisegundos.\n- Microservicios en Go / Python: pytest fixtures permiten configurar estados de prueba reproducibles sin leaks de memoria entre ejecuciones.",
      codeSnippet: "// ==========================================\n// Test Suite con Vitest: Patrón AAA + Mocks\n// ==========================================\nimport { describe, it, expect, vi, beforeEach } from 'vitest';\n\n// Interfaz y servicio bajo prueba\ninterface EmailNotifier {\n  send(to: string, message: string): Promise<boolean>;\n}\n\nclass AuthService {\n  constructor(private notifier: EmailNotifier) {}\n\n  async requestPasswordReset(email: string): Promise<boolean> {\n    if (!email || !email.includes('@')) {\n      throw new Error('Formato de email inválido');\n    }\n    const token = 'tok_secure_9918';\n    return await this.notifier.send(email, 'Tu token es: ' + token);\n  }\n}\n\ndescribe('AuthService Unit Tests', () => {\n  let mockNotifier: EmailNotifier;\n  let authService: AuthService;\n\n  beforeEach(() => {\n    // ARRANGE común: crear Test Double con vi.fn()\n    mockNotifier = {\n      send: vi.fn().mockResolvedValue(true)\n    };\n    authService = new AuthService(mockNotifier);\n  });\n\n  it('debe enviar correo de recuperación cuando el email es válido (Happy Path)', async () => {\n    // ACT\n    const result = await authService.requestPasswordReset('selvin@quimisell.dev');\n\n    // ASSERT\n    expect(result).toBe(true);\n    expect(mockNotifier.send).toHaveBeenCalledTimes(1);\n    expect(mockNotifier.send).toHaveBeenCalledWith(\n      'selvin@quimisell.dev',\n      expect.stringContaining('Tu token es:')\n    );\n  });\n\n  it('debe lanzar excepción si el email no contiene @ sin llamar al notificador', async () => {\n    // ACT & ASSERT\n    await expect(authService.requestPasswordReset('invalido_sin_arroba'))\n      .rejects.toThrow('Formato de email inválido');\n\n    // Verificar que el efecto secundario no se disparó\n    expect(mockNotifier.send).not.toHaveBeenCalled();\n  });\n});",
      quiz: [
        {
                "question": "¿Cuál es el orden estricto de las fases en el ciclo TDD (Test-Driven Development)?",
                "options": [
                        "Refactor -> Verde -> Rojo",
                        "Red (escribir test que falla) -> Green (código mínimo para pasar) -> Refactor (limpiar manteniendo test verde)",
                        "Deploy a producción -> Escribir tests -> Notificar bugs"
                ],
                "answerIndex": 1,
                "explanation": "El ciclo TDD exige ver primero fallar la prueba por la razón esperada (Red), hacerla pasar con el código más simple (Green) y refactorizar con confianza (Refactor)."
        },
        {
                "question": "En la Pirámide de Pruebas de Mike Cohn, ¿por qué la base debe estar compuesta mayoritariamente por Pruebas Unitarias (~70%)?",
                "options": [
                        "Porque son ultrarrápidas de ejecutar (milisegundos), deterministas, baratas de mantener y señalan el punto exacto del fallo de forma inmediata.",
                        "Porque las herramientas de UI no funcionan en servidores Linux.",
                        "Porque son las únicas pruebas que revisa el cliente final."
                ],
                "answerIndex": 0,
                "explanation": "Las pruebas unitarias proveen retroalimentación casi instantánea sin costo de red ni fragilidad de interfaz gráfica, permitiendo correr miles de pruebas en pocos segundos."
        },
        {
                "question": "¿Qué diferencia conceptual existe entre un Stub y un Mock según Gerard Meszaros?",
                "options": [
                        "Un Stub solo provee respuestas enlatadas predefinidas para que el código bajo prueba funcione; un Mock verifica expectativas de comportamiento (ej: si fue llamado y con qué argumentos).",
                        "Los Stubs solo existen en Python y los Mocks solo en JavaScript.",
                        "No existe ninguna diferencia; son sinónimos absolutos."
                ],
                "answerIndex": 0,
                "explanation": "Los Stubs proveen estado y datos indirectos para permitir la ejecución; los Mocks realizan verificación de comportamiento comprobando invocaciones y contratos."
        },
        {
                "question": "¿Para qué sirve el Mutation Testing (Pruebas de Mutación con herramientas como Stryker)?",
                "options": [
                        "Para infectar el sistema operativo con malware de prueba.",
                        "Para evaluar la calidad real de tus tests introduciendo pequeñas alteraciones (mutaciones) en el código y verificando si tus aserciones las detectan.",
                        "Para generar código TypeScript automáticamente sin intervención humana."
                ],
                "answerIndex": 1,
                "explanation": "El Mutation Testing verifica la efectividad de las pruebas: si un mutante cambia la lógica y todos tus tests siguen pasando, tus pruebas son débiles y carecen de aserciones precisas."
        }
]
    },
    {
      id: 10,
      title: "MÓDULO 10: QA AVANZADO: INTEGRACIÓN, E2E (PLAYWRIGHT), PRUEBAS DE CARGA (K6) Y AUDITORÍA ANTI-IA",
      description: "Pruebas de Integración con MSW, automatización End-to-End con Playwright, pruebas de estrés con k6 y Property-Based Testing contra alucinaciones de código generado por IA.",
      items: [
        "Pruebas de Integración y Contratos con MSW (Mock Service Worker): Mocking de red a nivel de socket.",
        "Pruebas End-to-End (E2E) con Playwright: Automatización en Chromium, WebKit y Firefox.",
        "Selectores resilientes (getByRole, getByLabel) y Aserciones Web-First (await expect(locator).toBeVisible()).",
        "Depuración visual y análisis de fallos intermitentes con Playwright Trace Viewer.",
        "Pruebas de Rendimiento y Estrés con k6: Virtual Users (VUs), métricas percentiles P95/P99 y Throughput (RPS).",
        "Definición de umbrales SLA (Thresholds) en k6 para detener pipelines en caso de degradación de latencia.",
        "Property-Based Testing (fast-check / Hypothesis): Blindar código contra alucinaciones y edge cases de la IA.",
        "Compuerta de Calidad Integral en CI/CD: Vitest + Playwright + k6 orquestados en GitHub Actions."
],
      content: "## Panorama del tema: QA AVANZADO: INTEGRACIÓN, PLAYWRIGHT E2E, K6 Y AUDITORÍA ANTI-IA\n\nUna aplicación no vive aislada en una función pura de TypeScript. Vive en un ecosistema hostil de navegadores web con latencias cambiantes, redes móviles inestables, microservicios que responden con errores 500 y millones de usuarios concurrentes en días de alta demanda.\n\nAdemás, en la era de los generadores de código por IA, el 80% de los errores más peligrosos provienen de edge cases no previstos: valores negativos, strings con emojis multilingües, caracteres nulos o desbordamientos aritméticos que los LLMs generan con aparente convicción. Este módulo te entrega las herramientas de un QA Engineer Senior para blindar aplicaciones de extremo a extremo.\n\n### 1. Pruebas de Integración con MSW (Mock Service Worker)\nTradicionalmente, testear componentes que consumen APIs REST o GraphQL requería mockear global.fetch o axios, acoplando la prueba a la biblioteca cliente específica.\n- MSW intercepta las peticiones a nivel de red mediante Service Workers (en el navegador) o a través del módulo node:net (en Node.js/Vitest).\n- Tu código de producción utiliza el cliente HTTP real sin modificaciones, garantizando que los contratos de red se prueben de manera transparente y desacoplada.\n\n### 2. Pruebas End-to-End (E2E) con Playwright\nPlaywright (creado por Microsoft) es el estándar supremo para pruebas E2E, superando a herramientas históricas como Selenium o Cypress:\n- Ejecución Multi-Navegador Nativa: Prueba simultáneamente en motores Chromium (Chrome/Edge), WebKit (Safari de iOS/macOS) y Firefox.\n- Selectores Resilientes basados en Accesibilidad: Prohíbe buscar por selectores CSS frágiles (.btn-primary-v2 > div:nth-child(3)). En su lugar, utiliza roles semánticos de accesibilidad (page.getByRole('button', { name: 'Comprar ahora' })). Si el diseñador cambia las clases CSS, el test sigue pasando; si rompen la accesibilidad del usuario, el test falla.\n- Aserciones Web-First: Métodos como await expect(locator).toBeVisible() incorporan auto-espera inteligente (auto-waiting). Esperan automáticamente a que los elementos se rendericen, animen y estén interactuables, erradicando los tiempos muertos sleep(5000) que hacen fracasar los pipelines.\n- Playwright Trace Viewer: Graba capturas de pantalla, eventos de DOM y llamadas de red paso a paso para depurar fallos en CI con una interfaz gráfica interactiva.\n\n### 3. Pruebas de Carga, Estrés y Rendimiento con k6\nUna aplicación puede pasar el 100% de sus pruebas unitarias y E2E, pero colapsar al minuto 1 del Black Friday cuando 10,000 usuarios intentan pagar a la vez.\n- k6 (de Grafana Labs) es una herramienta moderna de testing de rendimiento escrita en Go que ejecuta escenarios programados en JavaScript moderno.\n- Virtual Users (VUs): Simula cientos o miles de usuarios concurrentes ejecutando flujos de compra en bucle.\n- Percentiles P95 y P99: El promedio de latencia es un engaño estadístico. Si el 90% de tus usuarios experimenta 20ms pero el 10% sufre 8 segundos de espera, el promedio parece aceptable (800ms) pero 1 de cada 10 clientes abandona la compra. El P95 mide el tiempo máximo experimentado por el 95% de las solicitudes.\n- Thresholds (Umbrales SLA): Definen reglas de fallo automáticas en CI/CD ('http_req_duration': ['p(95)<150']). Si la latencia percentil 95 supera los 150ms o los errores superan el 1%, el pipeline se rompe automáticamente.\n\n### 4. Property-Based Testing: La Vacuna contra el Código de IA\nCuando un LLM escribe código, generalmente optimiza para el caso feliz (happy path). Si le pides un algoritmo de ordenamiento o cálculo financiero, omitirá casos extremos como arreglos con elementos idénticos, enteros negativos o caracteres Unicode especiales.\n- Property-Based Testing (con fast-check en TypeScript o Hypothesis en Python): En lugar de probar 3 o 4 entradas manuales, defines propiedades universales invariantes (ej: \"Para cualquier arreglo A, el resultado de ordenar(A) debe tener la misma longitud y cada elemento i debe ser menor o igual a i+1\").\n- El framework genera miles de entradas aleatorias y extremas en milisegundos buscando la entrada exacta que rompe tu código, aplicando Shrinking (reducción automática al contraejemplo mínimo posible).\n\n## Aplicaciones en sistemas reales\n- MercadoLibre & Amazon: Ejecutan pruebas k6 en ambientes de pre-producción antes de cada Cyber Monday para validar el auto-scaling de Kubernetes.\n- Fintechs (Stripe / Nubank): Emplean Property-Based Testing para garantizar que los cálculos de comisiones y conversiones de divisas nunca pierdan céntimos por errores de redondeo de punto flotante.",
      codeSnippet: "// ==========================================\n// 1. Playwright E2E: Flujo de Compra Resiliente\n// ==========================================\nimport { test, expect } from '@playwright/test';\n\ntest('Flujo E2E: Usuario aplica cupón y completa checkout', async ({ page }) => {\n  // Navegar a la vista de carrito\n  await page.goto('/cart');\n\n  // Localizar elementos por rol accesible (Web-First)\n  const couponInput = page.getByPlaceholder('Ingresa cupón de descuento');\n  await couponInput.fill('PROMO2026');\n\n  const applyButton = page.getByRole('button', { name: 'Aplicar' });\n  await applyButton.click();\n\n  // Aserción Web-First con auto-waiting\n  const discountLabel = page.getByText('Descuento aplicado: 20%');\n  await expect(discountLabel).toBeVisible({ timeout: 5000 });\n\n  // Proceder al pago\n  const checkoutButton = page.getByRole('button', { name: 'Proceder al Pago' });\n  await checkoutButton.click();\n\n  // Validar URL de destino\n  await expect(page).toHaveURL(/.*checkout/);\n});\n\n// ==========================================\n// 2. k6 Performance Test: Simulación de Carga\n// ==========================================\n/*\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    { duration: '30s', target: 50 },  // Ramp-up a 50 usuarios virtuales\n    { duration: '1m', target: 50 },   // Mantener carga estable\n    { duration: '15s', target: 0 },   // Ramp-down a 0\n  ],\n  thresholds: {\n    // El 95% de las peticiones deben responder en menos de 150ms\n    http_req_duration: ['p(95)<150'],\n    // Tasa de errores HTTP debe ser inferior al 1%\n    http_req_failed: ['rate<0.01'],\n  },\n};\n\nexport default function () {\n  const res = http.get('https://api.quimisell.dev/products');\n  check(res, {\n    'status es 200': (r) => r.status === 200,\n    'contenido valido': (r) => r.body.length > 0,\n  });\n  sleep(1);\n}\n*/",
      quiz: [
        {
                "question": "¿Por qué en Playwright se recomienda usar getByRole('button') en lugar de selectores CSS como $('.btn-submit')?",
                "options": [
                        "Porque los selectores semánticos de rol son resilientes a refactorizaciones de estilos CSS y garantizan que la interfaz sea verdaderamente accesible para lectores de pantalla.",
                        "Porque los selectores CSS están prohibidos en el estándar HTML5.",
                        "Porque getByRole ejecuta el navegador más rápido sin usar CPU."
                ],
                "answerIndex": 0,
                "explanation": "getByRole simula la interacción real del usuario y lectores de pantalla, previniendo tests frágiles que se rompen cada vez que un diseñador altera nombres de clases CSS."
        },
        {
                "question": "¿Por qué en pruebas de rendimiento con k6 es preferible evaluar el percentil P95 o P99 en lugar de la media aritmética (promedio)?",
                "options": [
                        "Porque el promedio oculta colas de latencia extremas donde un porcentaje significativo de usuarios sufre esperas inaceptables a pesar de un promedio aparentemente bajo.",
                        "Porque k6 no sabe calcular promedios matemáticos.",
                        "Porque el P95 es obligatorio por ley en el comercio electrónico."
                ],
                "answerIndex": 0,
                "explanation": "El percentil 95 indica el tiempo máximo que esperó el 95% de los usuarios, revelando la verdadera experiencia de los clientes y detectando cuellos de botella invisibles en el promedio."
        },
        {
                "question": "¿Cuál es el beneficio de las 'Aserciones Web-First' en Playwright como await expect(locator).toBeVisible()?",
                "options": [
                        "Esperan automáticamente de forma reactiva (auto-waiting) hasta que el elemento esté en el DOM y sea visible, eliminando sleeps manuales y previniendo flaky tests.",
                        "Descargan automáticamente el código fuente a tu computadora.",
                        "Convierten el código TypeScript en lenguaje binario ensamblador."
                ],
                "answerIndex": 0,
                "explanation": "Las aserciones Web-First reintentan la verificación continuamente durante un tiempo límite configurado, adaptándose a la naturaleza asíncrona de las SPAs modernas."
        },
        {
                "question": "¿Cómo ayuda el Property-Based Testing (con fast-check o Hypothesis) a auditar código generado por asistentes de IA?",
                "options": [
                        "Genera cientos de combinaciones estocásticas y casos límite (números negativos, cadenas infinitas, caracteres Unicode) para encontrar edge cases omitidos por la IA.",
                        "Permite a la IA conectarse a internet para buscar respuestas en foros.",
                        "Reemplaza la necesidad de compilar el código fuente."
                ],
                "answerIndex": 0,
                "explanation": "Property-Based Testing comprueba invariantes sobre un universo masivo de entradas generadas automáticamente, cazando errores sutiles que la IA suele ignorar en el 'happy path'."
        }
]
    }
  ]
};
// =========================================================================
// 20 EJERCICIOS PRÁCTICOS DE TUTORÍA: CLEAN CODE, SOLID, PATRONES Y QA
// =========================================================================
const CLEAN_CODE_EXERCISES: Record<number, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Renombra las variables crípticas `let d = 86400; let u_arr = [];` aplicando el principio de Nombres con Intención Reveladora de Robert C. Martin.",
      "placeholder": "// Escribe las declaraciones con nombres descriptivos y claros:\nconst secondsInOneDay = 86400;\nconst activeUsersList = [];",
      "expectedKeywords": [
        "seconds",
        "Day",
        "Users"
      ],
      "hint": "Usa nombres como `secondsInOneDay` o `secondsPerDay` y `activeUsersList` o `registeredUsers`.",
      "isEmailSubmission": false
    },
    {
      "id": 102,
      "instruction": "Aplica la Regla del Boy Scout (Boy Scout Rule): define en un comentario el compromiso de refactorización continua al encontrar código con comentarios obsoletos o variables confusas.",
      "placeholder": "// Boy Scout Rule: Deja el campamento más limpio de como lo encontraste.\nfunction calculateTotal(items: { price: number }[]): number {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}",
      "expectedKeywords": [
        "Boy Scout",
        "limpio"
      ],
      "hint": "Cita la regla del Boy Scout de Robert C. Martin: 'Deja el campamento más limpio de como lo encontraste'.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Aplica el principio de Funciones Pequeñas y Un Solo Nivel de Abstracción: extrae la validación de un usuario a su propia función antes de persistir.",
      "placeholder": "function validateUser(user: { email: string; age: number }): void {\n  if (!user.email.includes('@')) throw new Error('Email inválido');\n  if (user.age < 18) throw new Error('Debe ser mayor de edad');\n}",
      "expectedKeywords": [
        "validateUser",
        "throw",
        "Error"
      ],
      "hint": "Define `function validateUser(user)` que lance excepciones descriptivas cuando los datos no sean válidos.",
      "isEmailSubmission": false
    },
    {
      "id": 202,
      "instruction": "Reemplaza el antipatrón de retornar códigos de error numéricos (-1) por el lanzamiento de excepciones semánticas tipadas.",
      "placeholder": "class ProductNotFoundError extends Error {}\n\nfunction findProductById(id: string, catalog: Map<string, string>): string {\n  const product = catalog.get(id);\n  if (!product) throw new ProductNotFoundError(`Producto ${id} no encontrado`);\n  return product;\n}",
      "expectedKeywords": [
        "ProductNotFoundError",
        "throw",
        "catalog"
      ],
      "hint": "Crea una clase que herede de `Error` (ej: `ProductNotFoundError`) y lánzala con `throw new ProductNotFoundError(...)`.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Erradica un comentario redundante reemplazándolo por una constante booleana auto-documentada que revele la intención del negocio.",
      "placeholder": "const isEligibleForScholarship = student.gpa >= 3.8 && student.creditsCompleted > 60;\nif (isEligibleForScholarship) {\n  applyScholarship(student);\n}",
      "expectedKeywords": [
        "isEligibleForScholarship",
        "student",
        "applyScholarship"
      ],
      "hint": "Asigna la condición compleja a una constante con nombre descriptivo como `isEligibleForScholarship`.",
      "isEmailSubmission": false
    },
    {
      "id": 302,
      "instruction": "Corrige una violación de la Ley de Demeter (evitar encadenamientos de métodos de bajo nivel como `order.getCustomer().getAddress().getCity()`).",
      "placeholder": "class Order {\n  constructor(private customer: Customer) {}\n\n  getShippingCity(): string {\n    return this.customer.getCity();\n  }\n}",
      "expectedKeywords": [
        "getShippingCity",
        "customer"
      ],
      "hint": "Delega la consulta en la clase contenedora con `getShippingCity()` para que el cliente no conozca la estructura interna.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Aplica el Principio de Responsabilidad Única (SRP): desacopla la persistencia en base de datos de la entidad de negocio `Invoice`.",
      "placeholder": "class Invoice {\n  constructor(public id: string, public amount: number) {}\n  calculateTax(): number { return this.amount * 0.16; }\n}\n\nclass InvoiceRepository {\n  save(invoice: Invoice): void {\n    db.insert('invoices', invoice);\n  }\n}",
      "expectedKeywords": [
        "Invoice",
        "calculateTax",
        "InvoiceRepository",
        "save"
      ],
      "hint": "Separa la clase `Invoice` (reglas contables) de `InvoiceRepository` (persistencia en base de datos).",
      "isEmailSubmission": false
    },
    {
      "id": 402,
      "instruction": "Extrae la generación de formato de un reporte a una clase especializada para que los cambios visuales no alteren la lógica de facturación.",
      "placeholder": "class InvoicePdfGenerator {\n  generatePdf(invoice: Invoice): Buffer {\n    return renderTemplateToPdf(invoice);\n  }\n}",
      "expectedKeywords": [
        "InvoicePdfGenerator",
        "generatePdf",
        "Invoice"
      ],
      "hint": "Crea `InvoicePdfGenerator` con su método `generatePdf(invoice)` cumpliendo SRP.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Aplica el Principio Abierto/Cerrado (OCP): define una interfaz `TaxStrategy` para calcular impuestos sin usar bloques `switch` modificables.",
      "placeholder": "interface TaxStrategy {\n  calculate(amount: number): number;\n}\n\nclass StandardTaxStrategy implements TaxStrategy {\n  calculate(amount: number): number { return amount * 0.16; }\n}",
      "expectedKeywords": [
        "interface",
        "TaxStrategy",
        "calculate",
        "StandardTaxStrategy"
      ],
      "hint": "Define `interface TaxStrategy { calculate(amount: number): number; }` e implementa `StandardTaxStrategy`.",
      "isEmailSubmission": false
    },
    {
      "id": 502,
      "instruction": "Extiende el sistema impositivo agregando una nueva estrategia para productos exentos sin modificar ninguna clase preexistente.",
      "placeholder": "class ExemptTaxStrategy implements TaxStrategy {\n  calculate(amount: number): number {\n    return 0; // Exento de impuestos\n  }\n}",
      "expectedKeywords": [
        "ExemptTaxStrategy",
        "TaxStrategy",
        "calculate"
      ],
      "hint": "Crea `class ExemptTaxStrategy implements TaxStrategy` retornando `0`.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Aplica el Principio de Sustitución de Liskov (LSP): resuelve el dilema Rectángulo/Cuadrado utilizando una interfaz común `Shape` en lugar de herencia forzada.",
      "placeholder": "interface Shape {\n  calculateArea(): number;\n}\n\nclass Rectangle implements Shape {\n  constructor(public width: number, public height: number) {\n    this.width = width;\n    this.height = height;\n  }\n  calculateArea(): number { return this.width * this.height; }\n}\n\nclass Square implements Shape {\n  constructor(public side: number) { this.side = side; }\n  calculateArea(): number { return this.side * this.side; }\n}",
      "expectedKeywords": [
        "Shape",
        "calculateArea",
        "Rectangle",
        "Square"
      ],
      "hint": "Define `interface Shape` y haz que `Rectangle` y `Square` la implementen independientemente.",
      "isEmailSubmission": false
    },
    {
      "id": 602,
      "instruction": "Garantiza que una subclase no endurezca las precondiciones ni lance excepciones inesperadas violando el contrato de la interfaz padre.",
      "placeholder": "interface ReadOnlyCollection<T> {\n  getItem(index: number): T;\n  count(): number;\n}\n\ninterface MutableCollection<T> extends ReadOnlyCollection<T> {\n  addItem(item: T): void;\n}",
      "expectedKeywords": [
        "ReadOnlyCollection",
        "MutableCollection",
        "getItem"
      ],
      "hint": "Separa la interfaz de lectura `ReadOnlyCollection` de la de escritura para no lanzar `throw new NotSupportedError()`.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Aplica el Principio de Segregación de Interfaces (ISP): divide una interfaz monolítica de dispositivo multifunción en interfaces pequeñas y específicas.",
      "placeholder": "interface Printer { print(doc: string): void; }\ninterface Scanner { scan(): string; }\ninterface FaxMachine { sendFax(doc: string): void; }",
      "expectedKeywords": [
        "Printer",
        "Scanner",
        "FaxMachine"
      ],
      "hint": "Crea tres interfaces enfocadas (`Printer`, `Scanner`, `FaxMachine`) para que una impresora simple no deba implementar escaneo.",
      "isEmailSubmission": false
    },
    {
      "id": 702,
      "instruction": "Aplica el Principio de Inversión de Dependencias (DIP): inyecta una interfaz abstracta `EmailGateway` en el constructor de `UserService`.",
      "placeholder": "interface EmailGateway {\n  send(to: string, body: string): Promise<void>;\n}\n\nclass UserService {\n  constructor(private mailer: EmailGateway) {}\n}",
      "expectedKeywords": [
        "EmailGateway",
        "send",
        "UserService",
        "constructor"
      ],
      "hint": "Recibe `private mailer: EmailGateway` en el constructor de `UserService` en vez de instanciar `new SendGridMailer()`.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Implementa el Patrón de Diseño Strategy para conmutar métodos de pago (Tarjeta y PayPal) mediante una interfaz común.",
      "placeholder": "interface PaymentStrategy {\n  pay(amount: number): boolean;\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n  pay(amount: number): boolean { return true; }\n}\n\nclass PaymentProcessor {\n  constructor(private strategy: PaymentStrategy) {}\n  execute(amount: number): boolean { return this.strategy.pay(amount); }\n}",
      "expectedKeywords": [
        "PaymentStrategy",
        "CreditCardPayment",
        "PaymentProcessor",
        "pay"
      ],
      "hint": "Define `interface PaymentStrategy`, impleméntala en `CreditCardPayment` y recíbela en `PaymentProcessor`.",
      "isEmailSubmission": false
    },
    {
      "id": 802,
      "instruction": "Implementa el Patrón Adapter para traducir una API externa legacy que devuelve XML al formato esperado por tu dominio.",
      "placeholder": "interface ModernBillingService {\n  processBill(customerId: string, amount: number): void;\n}\n\nclass LegacyXmlAdapter implements ModernBillingService {\n  constructor(private legacySdk: LegacyXmlSdk) {}\n  processBill(customerId: string, amount: number): void {\n    this.legacySdk.executeXmlPayload('<bill id=\"' + customerId + '\" amount=\"' + amount + '\" />');\n  }\n}",
      "expectedKeywords": [
        "ModernBillingService",
        "LegacyXmlAdapter",
        "processBill"
      ],
      "hint": "Crea `LegacyXmlAdapter implements ModernBillingService` envolviendo el SDK externo.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Escribe una prueba unitaria con Vitest siguiendo estrictamente el patrón AAA (Arrange, Act, Assert) para verificar el cálculo de un descuento.",
      "placeholder": "import { describe, it, expect } from 'vitest';\n\ndescribe('calculateDiscount', () => {\n  it('aplica 20% de descuento a usuarios VIP', () => {\n    // Arrange\n    const price = 100;\n    const tier = 'VIP';\n\n    // Act\n    const result = calculateDiscount(price, tier);\n\n    // Assert\n    expect(result).toBe(80);\n  });\n});",
      "expectedKeywords": [
        "Arrange",
        "Act",
        "Assert",
        "expect",
        "toBe"
      ],
      "hint": "Estructura el test con comentarios explícitos `// Arrange`, `// Act` y `// Assert`, validando `expect(result).toBe(80)`.",
      "isEmailSubmission": false
    },
    {
      "id": 902,
      "instruction": "Crea un Mock con Vitest (`vi.fn()`) para un servicio de correo y valida que fue invocado exactamente una vez con los argumentos esperados.",
      "placeholder": "import { describe, it, expect, vi } from 'vitest';\n\ndescribe('NotificationService', () => {\n  it('debe invocar al mailer con el destinatario correcto', async () => {\n    const mockMailer = { send: vi.fn().mockResolvedValue(true) };\n    const service = new NotificationService(mockMailer);\n\n    await service.notifyUser('user@quimisell.dev');\n\n    expect(mockMailer.send).toHaveBeenCalledTimes(1);\n    expect(mockMailer.send).toHaveBeenCalledWith('user@quimisell.dev');\n  });\n});",
      "expectedKeywords": [
        "vi.fn",
        "toHaveBeenCalledTimes",
        "toHaveBeenCalledWith"
      ],
      "hint": "Instancia `mockMailer = { send: vi.fn() }` y verifica con `expect(mockMailer.send).toHaveBeenCalledTimes(1)`.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Escribe una prueba End-to-End (E2E) con Playwright que busque un producto y verifique con una aserción Web-First que el botón esté visible.",
      "placeholder": "import { test, expect } from '@playwright/test';\n\ntest('flujo de compra E2E: añadir al carrito', async ({ page }) => {\n  await page.goto('/tienda');\n  await page.getByPlaceholder('Buscar producto...').fill('Laptop');\n  await page.getByRole('button', { name: 'Buscar' }).click();\n\n  const addBtn = page.getByRole('button', { name: 'Añadir al Carrito' });\n  await expect(addBtn).toBeVisible();\n});",
      "expectedKeywords": [
        "page.goto",
        "getByRole",
        "expect",
        "toBeVisible"
      ],
      "hint": "Utiliza `await page.goto(...)`, `page.getByRole(...)` y la aserción web-first `await expect(addBtn).toBeVisible()`.",
      "isEmailSubmission": false
    },
    {
      "id": 1002,
      "instruction": "Configura un script de pruebas de carga en k6 con 50 Usuarios Virtuales (VUs) durante 30s y un umbral SLA (Threshold) de P95 < 150ms.",
      "placeholder": "import http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  vus: 50,\n  duration: '30s',\n  thresholds: {\n    http_req_duration: ['p(95)<150'],\n    http_req_failed: ['rate<0.01'],\n  },\n};\n\nexport default function () {\n  const res = http.get('https://api.quimisell.dev/catalog');\n  check(res, { 'status 200': (r) => r.status === 200 });\n  sleep(1);\n}",
      "expectedKeywords": [
        "vus: 50",
        "thresholds",
        "http_req_duration",
        "p(95)<150"
      ],
      "hint": "Define `vus: 50`, `duration: '30s'` y en `thresholds` establece `http_req_duration: ['p(95)<150']`.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de Clean Code & QA
CLEAN_CODE_COURSE.modules.forEach((mod) => {
  if (CLEAN_CODE_EXERCISES[mod.id]) {
    mod.exercises = CLEAN_CODE_EXERCISES[mod.id];
  }
});
