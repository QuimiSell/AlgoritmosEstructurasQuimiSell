import { Course } from '../domain/models';

export const CLEAN_CODE_COURSE: Course = {
  id: 'clean_code_solid',
  title: 'Clean Code, SOLID y Patrones de Diseño',
  shortTitle: 'Clean Code & SOLID',
  badge: 'Arquitectura & Calidad de Software',
  icon: '🧼',
  description: 'Basado en los principios de Robert C. Martin (Tío Bob) y el Gang of Four (GoF): aprende a escribir código limpio, mantenible, escalable y libre de deuda técnica.',
  whyStudyTitle: '🧠 ¿Por qué estudiar Clean Code y SOLID?',
  whyStudyText: 'Cualquier programador puede escribir código que una computadora entienda; los ingenieros de elite escriben código que los humanos pueden entender. Este curso transmite los principios fundamentales planteados por Robert C. Martin (Tío Bob) en su célebre libro "Clean Code": funciones pequeñas, nombres expresivos, acoplamiento débil, alta cohesión y los 5 Principios SOLID.',
  studyPlanReasons: [
    { id: 1, title: "Filosofía Clean Code y Nombres Expresivos", why: "Escribir código intencional y autodocumentado según el Tío Bob." },
    { id: 2, title: "Funciones y Manejo de Excepciones", why: "Diseño de funciones que hacen una sola cosa y gestión limpia de errores." },
    { id: 3, title: "Comentarios y Regla del Boy Scout", why: "Dejar el código más limpio de como lo encontraste y eliminar comentarios superfluos." },
    { id: 4, title: "Single Responsibility Principle (SRP)", why: "Una sola razón para cambiar por módulo o clase." },
    { id: 5, title: "Open/Closed Principle (OCP)", why: "Abierto para extensión, cerrado para modificación mediante abstracción." },
    { id: 6, title: "Liskov Substitution Principle (LSP)", why: "Garantizar que las subclases puedan sustituir a sus clases base sin romper contratos." },
    { id: 7, title: "Interface Segregation & Dependency Inversion", why: "Interfaces específicas e inyección de dependencias (DIP)." },
    { id: 8, title: "Patrones Creacionales (GoF)", why: "Singleton, Factory Method, Abstract Factory, Builder y Prototype." },
    { id: 9, title: "Patrones Estructurales (GoF)", why: "Adapter, Decorator, Facade, Composite y Proxy." },
    { id: 10, title: "Patrones de Comportamiento (GoF)", why: "Strategy, Observer, Command, State y Chain of Responsibility." }
  ],
  labChallenge: {
    title: "Refactorización de un Sistema Legacy con Principios SOLID y Patrón Strategy",
    badge: "Laboratorio de Clean Code",
    description: "Tu objetivo es tomar un bloque de código 'spaghetti' monolítico lleno de condicionales anidadas `if-else` y refactorizarlo aplicando el Principio de Responsabilidad Única (SRP), Inversión de Dependencias (DIP) y el Patrón de Diseño Strategy.",
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
      title: "MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)",
      description: "Mecanismos de creación de objetos flexibles: Singleton, Factory Method, Abstract Factory, Builder y Prototype.",
      items: [
      "Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994).",
      "Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO.",
      "Patrón Factory Method: Delegar la instanciación a subclases especializadas.",
      "Patrón Abstract Factory: Familias de objetos relacionados.",
      "Patrón Builder: Construcción paso a paso de objetos complejos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)\n\nMecanismos de creación de objetos flexibles: Singleton, Factory Method, Abstract Factory, Builder y Prototype.\n\nLos Patrones Creacionales abstraen el proceso de instanciación de objetos. El patrón **Factory Method** define una interfaz para crear un objeto, permitiendo a las subclases decidir qué clase concreta instanciar. El patrón **Builder** separa la construcción de un objeto complejo de su representación (ideal para evitar constructores con 10 parámetros). El patrón **Singleton** asegura que una clase tenga una única instancia en todo el sistema (aunque debe usarse con precaución para no crear un estado global acoplado).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994).\n· Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO.\n· Patrón Factory Method: Delegar la instanciación a subclases especializadas.\n· Patrón Abstract Factory: Familias de objetos relacionados.\n· Patrón Builder: Construcción paso a paso de objetos complejos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994).» y cuándo lo evitarías.\n\n## 2. Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO.» y cuándo lo evitarías.\n\n## 3. Patrón Factory Method: Delegar la instanciación a subclases especializadas.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Factory Method: Delegar la instanciación a subclases especializadas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Factory Method: Delegar la instanciación a subclases especializadas.» y cuándo lo evitarías.\n\n## 4. Patrón Abstract Factory: Familias de objetos relacionados.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Abstract Factory: Familias de objetos relacionados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Abstract Factory: Familias de objetos relacionados.» y cuándo lo evitarías.\n\n## 5. Patrón Builder: Construcción paso a paso de objetos complejos.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Builder: Construcción paso a paso de objetos complejos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Builder: Construcción paso a paso de objetos complejos.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 2:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 3:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\nEstos casos muestran por qué PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Ejemplo del Patrón Builder en Python
class ConsultaSQL:
    def __init__(self):
        self.tabla = ""
        self.condiciones = []
        self.limite = None

class ConsultaSQLBuilder:
    def __init__(self):
        self._query = ConsultaSQL()

    def desde_tabla(self, tabla: str):
        self._query.tabla = tabla
        return self

    def donde(self, condicion: str):
        self._query.condiciones.append(condicion)
        return self

    def build((self) -> str:
        where_clause = f" WHERE {' AND '.join(self._query.condiciones)}" if self._query.condiciones else ""
        return f"SELECT * FROM {self._query.tabla}{where_clause}"

query = ConsultaSQLBuilder().desde_tabla("usuarios").donde("edad > 18").donde("activo = 1").build()
print(query) # SELECT * FROM usuarios WHERE edad > 18 AND activo = 1`,
      quiz: [
        {
          question: "¿Cuál es el propósito fundamental del patrón de diseño Singleton?",
          options: ["Crear copias múltiples de un objeto", "Garantizar que una clase tenga una única instancia en toda la aplicación y proporcionar un punto de acceso global a ella", "Eliminar variables"],
          answerIndex: 1,
          explanation: "Singleton restringe la creación a una única instancia (útil para pools de conexiones o loggers)."
        },
        {
          question: "¿Para qué sirve el patrón de diseño Builder (Constructor)?",
          options: ["Para construir objetos complejos paso a paso mediante una interfaz fluida, evitando constructores gigantes llenos de parámetros", "Para hacer bucles", "Para compilar C++"],
          answerIndex: 0,
          explanation: "Builder permite configurar objetos atributo por atributo de forma legible y segura."
        },
        {
          question: "¿Qué patrón creacional delega la lógica de instanciación a métodos de clases derivadas?",
          options: ["Factory Method (Método Fábrica)", "Observer", "Adapter"],
          answerIndex: 0,
          explanation: "Factory Method define el contrato de creación y deja que las subclases concretas decidan qué tipo de objeto instanciar."
        },
        {
          question: "¿Por qué el patrón Singleton suele ser considerado un antipatrón en arquitecturas modernas si se abusa de él?",
          options: ["Porque introduce un estado global acoplado y dificulta las pruebas unitarias aisladas con Mocks", "Porque es muy fácil de usar", "Porque borra el código"],
          answerIndex: 0,
          explanation: "El estado global de un Singleton crea acoplamiento oculto entre componentes y complica el aislamiento en los tests."
        },
        {
          question: "¿Qué patrón creacional permite clonar o duplicar objetos existentes sin depender de sus clases concretas?",
          options: ["Patrón Prototype (Prototipo)", "Singleton", "Facade"],
          answerIndex: 0,
          explanation: "Prototype delega la copia al propio objeto a través de una interfaz de clonado (`clone()`)."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Patrón Singleton: Garantizar una única instancia global y cuándo EV...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Factory Method: Delegar la instanciación a subclases especializadas?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Patrón Factory Method: Delegar la instanciación a subclases especia...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Factory Method: Delegar la instanciación a subclases especializadas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Abstract Factory: Familias de objetos relacionados?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Patrón Abstract Factory: Familias de objetos relacionados", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Abstract Factory: Familias de objetos relacionados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Builder: Construcción paso a paso de objetos complejos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Patrón Builder: Construcción paso a paso de objetos complejos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Builder: Construcción paso a paso de objetos complejos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)",
      description: "Composición de clases y objetos: Adapter, Decorator, Facade, Composite y Proxy.",
      items: [
      "Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente.",
      "Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución.",
      "Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo.",
      "Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme.",
      "Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)\n\nComposición de clases y objetos: Adapter, Decorator, Facade, Composite y Proxy.\n\nLos Patrones Estructurales explican cómo ensamblar objetos y clases en estructuras más grandes manteniendo la flexibilidad. El patrón **Adapter** actúa como un conversor de enchufe de viaje entre dos interfaces incompatibles. El patrón **Decorator** envuelve un objeto para agregar responsabilidades dinámicamente sin usar herencia rígida. El patrón **Facade** ofrece un único punto de entrada sencillo para ocultar la complejidad de un subsistema con decenas de clases.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente.\n· Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución.\n· Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo.\n· Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme.\n· Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente.» y cuándo lo evitarías.\n\n## 2. Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución.» y cuándo lo evitarías.\n\n## 3. Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo.» y cuándo lo evitarías.\n\n## 4. Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme.» y cuándo lo evitarías.\n\n## 5. Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Refactorizar hacia SOLID reduce el radio de explosión cuando un requisito de negocio cambia.\n\n**Ejemplo 2:** Refactorizar hacia SOLID reduce el radio de explosión cuando un requisito de negocio cambia.\n\n**Ejemplo 3:** Refactorizar hacia SOLID reduce el radio de explosión cuando un requisito de negocio cambia.\n\nEstos casos muestran por qué PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Ejemplo del Patrón Decorator en Python
class NotificadorBase:
    def enviar(self, mensaje: str):
        print(f"Notificación por Email: {mensaje}")

class NotificadorDecorator:
    def __init__(self, wrapped: NotificadorBase):
        self.wrapped = wrapped
    def enviar(self, mensaje: str):
        self.wrapped.enviar(mensaje)

class DecoradorSMS(NotificadorDecorator):
    def enviar(self, mensaje: str):
        super().enviar(mensaje)
        print(f"Notificación adicional por SMS: {mensaje}")

notificador = DecoradorSMS(NotificadorBase())
notificador.enviar("¡Alerta de Seguridad!") 
# Envía Email y SMS dinámicamente`,
      quiz: [
        {
          question: "¿Cuál es el objetivo principal del patrón de diseño Adapter (Adaptador)?",
          options: ["Permitir que dos interfaces incompatibles trabajen juntas mediante una clase traductora intermedia", "Duplicar objetos", "Guardar datos en disco"],
          answerIndex: 0,
          explanation: "Adapter envuelve una clase existente incompatible para que coincida con la interfaz esperada por el cliente."
        },
        {
          question: "¿Cómo añade funcionalidades nuevas el patrón Decorator (Decorador)?",
          options: ["Mediante herencia múltiple", "Envolviendo el objeto original dentro de un objeto decorador que añade comportamiento dinámicamente en tiempo de ejecución", "Modificando el archivo .exe"],
          answerIndex: 1,
          explanation: "Decorator usa composición para envolver objetos de forma transparente agregando capas de comportamiento."
        },
        {
          question: "¿Para qué sirve el patrón Facade (Fachada)?",
          options: ["Para ofrecer una interfaz unificada y simplificada de alto nivel frente a un subsistema complejo con múltiples clases interconectadas", "Para ocultar errores", "Para crear instancias únicas"],
          answerIndex: 0,
          explanation: "Facade simplifica la interacción de los clientes ofreciendo una sola API limpia sobre un subsistema intrincado."
        },
        {
          question: "¿Qué patrón estructural controla y dega el acceso a un objeto remoto o costoso (ej: Carga perezosa o Caché)?",
          options: ["Patrón Proxy", "Patrón Adapter", "Patrón Singleton"],
          answerIndex: 0,
          explanation: "Proxy actúa como intermediario para interceptar llamadas al objeto real y aplicar control de acceso, caché o carga diferida."
        },
        {
          question: "¿Qué patrón estructural permite componer objetos en estructuras de árbol para tratar nodos y hojas de forma uniforme?",
          options: ["Patrón Composite", "Patrón Decorator", "Patrón Builder"],
          answerIndex: 0,
          explanation: "Composite representa jerarquías parte-todo donde contenedores y elementos individuales comparten la misma interfaz."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Patrón Adapter: Adaptar interfaces incompatibles sin tocar el códig...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo ...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente ...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema ...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Patrón Facade (Fachada): Proporcionar una interfaz simplificada a u...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Composite: Tratar objetos individuales y composiciones de objetos de f...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Patrón Composite: Tratar objetos individuales y composiciones de ob...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almac...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguri...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)",
      description: "Interacción y distribución de responsabilidades: Strategy, Observer, Command, State y Chain of Responsibility.",
      items: [
      "Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución.",
      "Patrón Observer: Suscripción y notificación de eventos 1 a N.",
      "Patrón Command: Encapsular una petición como un objeto (Undo / Redo).",
      "Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.",
      "Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)\n\nInteracción y distribución de responsabilidades: Strategy, Observer, Command, State y Chain of Responsibility.\n\nLos Patrones de Comportamiento gestionan los algoritmos y la asignación de responsabilidades entre objetos. El patrón **Strategy** permite seleccionar un algoritmo en tiempo de ejecución de forma intercambiable (aplicando el OCP). El patrón **Observer** establece una relación uno-a-muchos donde un objeto notifica automáticamente a sus suscriptores cuando su estado cambia (base de la arquitectura orientada a eventos). El patrón **Command** convierte solicitudes en objetos para respaldar operaciones de deshacer (Undo).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución.\n· Patrón Observer: Suscripción y notificación de eventos 1 a N.\n· Patrón Command: Encapsular una petición como un objeto (Undo / Redo).\n· Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.\n· Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución.» y cuándo lo evitarías.\n\n## 2. Patrón Observer: Suscripción y notificación de eventos 1 a N.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Observer: Suscripción y notificación de eventos 1 a N. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Observer: Suscripción y notificación de eventos 1 a N.» y cuándo lo evitarías.\n\n## 3. Patrón Command: Encapsular una petición como un objeto (Undo / Redo).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Command: Encapsular una petición como un objeto (Undo / Redo). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Command: Encapsular una petición como un objeto (Undo / Redo).» y cuándo lo evitarías.\n\n## 4. Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.» y cuándo lo evitarías.\n\n## 5. Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR).\n\n**Qué es y por qué importa.** Dentro de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR), este punto es central en ingeniería de software mantenible, SOLID y patrones de diseño. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 2:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\n**Ejemplo 3:** En code reviews de empresas grandes, rechazan PRs cuyos nombres no revelan intención aunque 'funcionen'.\n\nEstos casos muestran por qué PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Ejemplo del Patrón Observer en Python
class SistemaEventos:
    def __init__(self):
        self._suscriptores = []

    def suscribir(self, fn):
        self._suscriptores.append(fn)

    def notificar(self, evento: str):
        for s in self._suscriptores:
            s(evento)

emisor = SistemaEventos()
emisor.suscribir(lambda msg: print(f"Observer 1 recibió: {msg}"))
emisor.suscribir(lambda msg: print(f"Observer 2 recibió: {msg}"))

emisor.notificar("¡Pago de usuario procesado!")`,
      quiz: [
        {
          question: "¿Cuál es el propósito del patrón de diseño Strategy (Estrategia)?",
          options: ["Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables dinámicamente en tiempo de ejecución", "Crear copias de clases", "Conectar bases de datos"],
          answerIndex: 0,
          explanation: "Strategy permite al cliente variar el algoritmo utilizado de forma transparente sin alterar su código."
        },
        {
          question: "¿Qué patrón de comportamiento define una dependencia de uno a muchos para notificar cambios de estado automáticamente?",
          options: ["Patrón Observer (Observador)", "Patrón Singleton", "Patrón Proxy"],
          answerIndex: 0,
          explanation: "Observer permite a múltiples objetos escuchar y reaccionar ante los eventos emitidos por un sujeto."
        },
        {
          question: "¿Qué patrón de comportamiento encapsula una orden o solicitud como un objeto independiente para permitir operaciones de Deshacer (Undo)?",
          options: ["Patrón Command (Comando)", "Patrón Strategy", "Patrón Facade"],
          answerIndex: 0,
          explanation: "Command transforma peticiones en objetos con métodos `execute()` y `undo()`, facilitando colas de ejecución."
        },
        {
          question: "¿En qué consiste el patrón Chain of Responsibility (Cadena de Responsabilidad)?",
          options: ["En pasar una petición a lo largo de una cadena de manejadores donde cada uno decide si la procesa o la pasa al siguiente", "En encadenar cadenas de texto", "En usar un solo bucle"],
          answerIndex: 0,
          explanation: "Cadena de Responsabilidad desacopla al emisor del receptor pasando la solicitud por varios procesadores (ej: middlewares HTTP)."
        },
        {
          question: "¿Qué patrón de comportamiento permite a un objeto cambiar su lógica cuando su estado interno varía pareciendo cambiar de clase?",
          options: ["Patrón State (Estado)", "Patrón Template Method", "Patrón Iterator"],
          answerIndex: 0,
          explanation: "State modela máquinas de estado finitas encapsulando el comportamiento de cada estado en objetos separados."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Observer: Suscripción y notificación de eventos 1 a N?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Patrón Observer: Suscripción y notificación de eventos 1 a N", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Observer: Suscripción y notificación de eventos 1 a N. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Command: Encapsular una petición como un objeto (Undo / Redo)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Patrón Command: Encapsular una petición como un objeto (Undo / Redo)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Command: Encapsular una petición como un objeto (Undo / Redo). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Patrón State: Permitir a un objeto alterar su comportamiento cuando...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Patrón Chain of Responsibility: Cadena de manejadores de peticiones independi...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Patrón Chain of Responsibility: Cadena de manejadores de peticiones...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};