import { Course } from '../domain/models';

export const MATH_COURSE: Course = {
  id: 'matematica',
  title: 'Fundamentos de Matemática para Ingeniería en Sistemas',
  shortTitle: 'Matemática para Sistemas',
  badge: 'Ingeniería de Software & Computación',
  icon: '📐',
  description: 'Un enfoque riguroso diseñado para la carrera de Ingeniería en Sistemas: Lógica Booleana, Matemática Discreta, Álgebra Lineal, Teoría de Grafos, Cálculo y Criptografía.',
  whyStudyTitle: '🧠 ¿Por qué esta clase es vital para un Ingeniero en Sistemas?',
  whyStudyText: 'En la carrera de Ingeniería en Sistemas, la matemática no es teórica ni abstracta: es el motor con el cual construimos software robusto. Desde la simplificación de condicionales booleanas en el procesador, pasando por la estructuración de tablas relacionales en SQL, hasta la representación de gráficos en 3D, el cifrado de datos y el entrenamiento de modelos de Inteligencia Artificial; cada rama matemática es una herramienta directa de ingeniería.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Lógica Matemática y Álgebra de Boole",
      why: "Diseño de circuitos digitales, optimización de condicionales de software y simplificación de expresiones lógicas."
    },
    {
      id: 2,
      title: "Teoría de Conjuntos y Álgebra Relacional",
      why: "Fundamento matemático directo para consultas SQL, diseño de bases de datos relacionales y JOINs."
    },
    {
      id: 3,
      title: "Relaciones, Funciones y Mapeo",
      why: "Base para la programación funcional, arquitectura de microservicios y correspondencia de datos."
    },
    {
      id: 4,
      title: "Sistemas Numéricos y Operaciones Bitwise",
      why: "Representación de datos en memoria (Binario/Hexadecimal), Complemento a 2 y programación a bajo nivel."
    },
    {
      id: 5,
      title: "Matemática Discreta y Teoría de Grafos",
      why: "Modelado de redes de datos, enrutamiento de paquetes IP, árboles de decisión y dependencias de software."
    },
    {
      id: 6,
      title: "Álgebra Lineal, Matrices y Vectores",
      why: "Motores gráficos 2D/3D, procesamiento de imágenes, Embeddings de texto y redes neuronales en IA."
    },
    {
      id: 7,
      title: "Trigonometría y Simulación Física",
      why: "Desarrollo de videojuegos, física de colisiones, simulación de trayectorias y procesamiento de señales."
    },
    {
      id: 8,
      title: "Álgebra Analítica y Crecimiento Logarítmico",
      why: "Demostración matemática de la complejidad Big-O y optimización de espacio de búsqueda en algoritmos."
    },
    {
      id: 9,
      title: "Cálculo Diferencial y Optimización",
      why: "Algoritmos de ajuste de modelos (Descenso de Gradiente) para Machine Learning y control de procesos."
    },
    {
      id: 10,
      title: "Combinatoria, Recurrencia y Criptografía",
      why: "Análisis de algoritmos Divide y Vencerás (Teorema Maestro), seguridad informática y cifrado RSA."
    }
  ],
  labChallenge: {
    title: "Motor de Álgebra Lineal & Transformaciones Matrix 2D/3D",
    badge: "Laboratorio de Ingeniería en Sistemas",
    description: "Tu objetivo es construir una biblioteca o motor numérico en React o Python diseñado para resolver problemas típicos de la carrera: multiplicación de matrices N×M, evaluación de determinantes, resolución de sistemas de ecuaciones lineales y transformaciones vectoriales de rotación 2D para gráficos por computadora.",
    requirements: [
      "• Operaciones Matriciales: Multiplicación de matrices arbitrarias A(m×n) × B(n×p) con validación de dimensiones.",
      "• Determinantes & Sistemas: Resolver sistemas de ecuaciones 2x2/3x3 mediante la regla de Cramer.",
      "• Transformaciones Geométricas: Multiplicar vectores por matrices de rotación R(θ) y escalado.",
      "• Eficiencia: Garantizar que la lógica no use librerías externas para operaciones matriciales básicas."
    ],
    cleanCodeRules: [
      "• Principios SOLID: Separar la lógica matemática de dominio de la interfaz de consola o React.",
      "• Tipado Fuerte: Utilizar TypeScript o type hints de Python con aserciones de dimensiones de matriz.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Motor Matemático Sistemas - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio de Fundamentos de Matemática para Ingeniería en Sistemas (Motor de Álgebra Lineal & Transformaciones Matrix).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de mi implementación:\n- \n\nSaludos cordiales.`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE",
      description: "El cimiento de la programación y los circuitos digitales. Tablas de verdad, condicionales y De Morgan.",
      items: [
      "Proposiciones y Sentencias de Control de Software.",
      "Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕).",
      "Tablas de Verdad y Evaluación de Expresiones Booleanas.",
      "Leyes de De Morgan para la simplificación de código condicional.",
      "Tautologías, Contradicciones y Circuitos Lógicos de Hardware.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE\n\nEl cimiento de la programación y los circuitos digitales. Tablas de verdad, condicionales y De Morgan.\n\nPara un Ingeniero en Sistemas, la Lógica Matemática es la herramienta para construir y verificar algoritmos correctos. La sentencia 'if' en un lenguaje de programación evalúa una proposición lógica a Verdadero (1) o Falso (0). La Implicación (P → Q) rige las precondiciones y postcondiciones en arquitectura de software. Las Leyes de De Morgan (¬(P ∧ Q) ≡ ¬P ∨ ¬Q) se utilizan a diario en refactorización de código para transformar condicionales complejas y difíciles de mantener en expresiones limpias y legibles.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Proposiciones y Sentencias de Control de Software.\n· Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕).\n· Tablas de Verdad y Evaluación de Expresiones Booleanas.\n· Leyes de De Morgan para la simplificación de código condicional.\n· Tautologías, Contradicciones y Circuitos Lógicos de Hardware.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Proposiciones y Sentencias de Control de Software.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Proposiciones y Sentencias de Control de Software. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Proposiciones y Sentencias de Control de Software.» y cuándo lo evitarías.\n\n## 2. Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕).\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕).» y cuándo lo evitarías.\n\n## 3. Tablas de Verdad y Evaluación de Expresiones Booleanas.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Tablas de Verdad y Evaluación de Expresiones Booleanas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tablas de Verdad y Evaluación de Expresiones Booleanas.» y cuándo lo evitarías.\n\n## 4. Leyes de De Morgan para la simplificación de código condicional.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Leyes de De Morgan para la simplificación de código condicional. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Leyes de De Morgan para la simplificación de código condicional.» y cuándo lo evitarías.\n\n## 5. Tautologías, Contradicciones y Circuitos Lógicos de Hardware.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Tautologías, Contradicciones y Circuitos Lógicos de Hardware. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tautologías, Contradicciones y Circuitos Lógicos de Hardware.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE.\n\n**Qué es y por qué importa.** Dentro de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 2:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 3:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\nEstos casos muestran por qué LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Ejemplo en Python: Refactorización de condicionales con De Morgan
# Queremos verificar si un usuario NO es administrador O NO está activo
es_admin = False
esta_activo = True

# Opción A (Sin simplificar): not (es_admin and esta_activo)
# Opción B (De Morgan): (not es_admin) or (not esta_activo)
condicion_a = not (es_admin and esta_activo)
condicion_b = (not es_admin) or (not esta_activo)

print(f"Condición A: {condicion_a}") # Output: True
print(f"Condición B: {condicion_b}") # Output: True
print(f"¿Son idénticas?: {condicion_a == condicion_b}") # True`,
      quiz: [
        {
          question: "En ingeniería de software, ¿cuál es el equivalente reducido de negar la expresión condicional 'if not (edad >= 18 and tiene_id):' usando De Morgan?",
          options: ["if not edad >= 18 and not tiene_id:", "if edad < 18 or not tiene_id:", "if edad < 18 and tiene_id:"],
          answerIndex: 1,
          explanation: "Aplicando De Morgan ¬(A ∧ B) = ¬A ∨ ¬B: la negación de 'edad >= 18' es 'edad < 18', el AND cambia a OR, y la negación de 'tiene_id' es 'not tiene_id'."
        },
        {
          question: "¿Cuándo es Falsa una proposición de Implicación Lógica (P → Q)?",
          options: ["Cuando P es Falso y Q es Verdadero", "Únicamente cuando P es Verdadero y Q es Falso", "Cuando ambas son Falsas"],
          answerIndex: 1,
          explanation: "La implicación solo falla cuando la premisa P ocurre (es Verdadera) pero la consecuencia Q no se cumple (es Falsa)."
        },
        {
          question: "¿Qué operador de lógica digital devuelve Verdadero únicamente cuando sus dos entradas son distintas?",
          options: ["AND (Conjunción)", "OR (Disyunción)", "XOR (Disyunción Exclusiva)"],
          answerIndex: 2,
          explanation: "XOR (1 ⊕ 0 = 1, 0 ⊕ 1 = 1, 1 ⊕ 1 = 0, 0 ⊕ 0 = 0) resulta Verdadero si y solo si las entradas son diferentes."
        },
        {
          question: "¿Qué es una Tautología en un circuito digital o función de software?",
          options: ["Una función que siempre retorna Falso", "Una fórmula lógica que devuelve Verdadero para cualquier combinación de sus entradas", "Una falla de segmento"],
          answerIndex: 1,
          explanation: "Una Tautología es una expresión que evalúa a Verdadero en el 100% de los casos de su tabla de verdad (ejemplo: P ∨ ¬P)."
        },
        {
          question: "¿Cuál es el resultado de la doble negación ¬(¬P) en lógica booleana?",
          options: ["P", "¬P", "Falso"],
          answerIndex: 0,
          explanation: "La doble negación cancela la inversión booleana: negar dos veces un valor 0 entrega 0, y de 1 entrega 1."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Proposiciones y Sentencias de Control de Software?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Proposiciones y Sentencias de Control de Software", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Proposiciones y Sentencias de Control de Software. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y XOR (⊕). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Tablas de Verdad y Evaluación de Expresiones Booleanas?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Tablas de Verdad y Evaluación de Expresiones Booleanas", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tablas de Verdad y Evaluación de Expresiones Booleanas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Leyes de De Morgan para la simplificación de código condicional?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Leyes de De Morgan para la simplificación de código condicional", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Leyes de De Morgan para la simplificación de código condicional. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Tautologías, Contradicciones y Circuitos Lógicos de Hardware?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Tautologías, Contradicciones y Circuitos Lógicos de Hardware", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tautologías, Contradicciones y Circuitos Lógicos de Hardware. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: LÓGICA MATEMÁTICA Y ÁLGEBRA DE BOOLE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL",
      description: "Modelado de colecciones de datos, operaciones de conjuntos y su aplicación en bases de datos SQL.",
      items: [
      "Conjuntos: Extensión, Comprensión y Cardinalidad |A|.",
      "Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\) y Complemento.",
      "El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos.",
      "Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT).",
      "Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL\n\nModelado de colecciones de datos, operaciones de conjuntos y su aplicación en bases de datos SQL.\n\nLas Bases de Datos Relacionales (SQL) están completamente construidas sobre la Teoría de Conjuntos de Edgar F. Codd. Una tabla es un conjunto de tuplas. Una consulta INNER JOIN calcula la intersección A ∩ B entre dos tablas basándose en una clave de coincidencia. La operación UNION equivale a A ∪ B, mientras que EXCEPT realiza la diferencia de conjuntos A \\\\\\\\\\\\\\\\ B. Comprender la cardinalidad del Producto Cartesiano |A × B| = |A| · |B| advierte al ingeniero sobre los peligros de consultas SQL sin cláusula JOIN, las cuales saturan el servidor.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Conjuntos: Extensión, Comprensión y Cardinalidad |A|.\n· Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Complemento.\n· El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos.\n· Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT).\n· Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Conjuntos: Extensión, Comprensión y Cardinalidad |A|.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Conjuntos: Extensión, Comprensión y Cardinalidad |A|. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Conjuntos: Extensión, Comprensión y Cardinalidad |A|.» y cuándo lo evitarías.\n\n## 2. Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Complemento.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Complemento. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Complemento.» y cuándo lo evitarías.\n\n## 3. El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos.» y cuándo lo evitarías.\n\n## 4. Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT).\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT).» y cuándo lo evitarías.\n\n## 5. Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 2:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 3:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\nEstos casos muestran por qué TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Demostración de Operaciones de Conjuntos vs SQL en Python
usuarios_activos = {"juan", "maria", "pedro", "luis"}
usuarios_premium = {"maria", "luis", "carlos"}

# SQL: SELECT nombre FROM activos INTERSECT SELECT nombre FROM premium;
interseccion_sql = usuarios_activos & usuarios_premium # {"maria", "luis"}

# SQL: SELECT nombre FROM activos EXCEPT SELECT nombre FROM premium;
diferencia_sql = usuarios_activos - usuarios_premium # {"juan", "pedro"}

print(f"Usuarios Activos Y Premium (INTERSECT): {interseccion_sql}")
print(f"Activos NO Premium (EXCEPT): {diferencia_sql}")`,
      quiz: [
        {
          question: "¿Qué consulta SQL corresponde matemáticamente a la Intersección de Conjuntos A ∩ B?",
          options: ["SELECT * FROM A UNION SELECT * FROM B", "SELECT * FROM A INTERSECT SELECT * FROM B", "SELECT * FROM A CROSS JOIN B"],
          answerIndex: 1,
          explanation: "El comando SQL INTERSECT devuelve únicamente aquellas filas que están presentes en ambos conjuntos de datos (A ∩ B)."
        },
        {
          question: "Si la tabla Clientes tiene 1,000 registros y la tabla Pedidos tiene 500 registros, ¿cuántos registros genera un CROSS JOIN (Producto Cartesiano)?",
          options: ["1,500 registros", "500,000 registros", "500 registros"],
          answerIndex: 1,
          explanation: "El producto cartesiano combina cada fila de A con cada fila de B, dando |A| · |B| = 1,000 × 500 = 500,000 tuplas."
        },
        {
          question: "¿Cuántos subconjuntos posibles tiene el Conjunto Potencia P(A) si A = {id, nombre, email, rol} (4 elementos)?",
          options: ["8", "16", "32"],
          answerIndex: 1,
          explanation: "El número de subconjuntos del conjunto potencia es 2^n. Para n = 4, tenemos 2⁴ = 16 subconjuntos posibles."
        },
        {
          question: "¿Cuál es el resultado de restar un conjunto A consigo mismo (A \\ A)?",
          options: ["A", "Conjunto Vacío (∅)", "Conjunto Universo (U)"],
          answerIndex: 1,
          explanation: "Al restar de A todos los elementos que pertenecen a A, no queda ningún elemento, resultando en el conjunto vacío ∅."
        },
        {
          question: "Si A ⊆ B, ¿cuál es el resultado de la intersección A ∩ B?",
          options: ["A", "B", "∅"],
          answerIndex: 0,
          explanation: "Como todos los elementos de A están contenidos en B, los elementos comunes a ambos son exactamente los elementos de A."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Conjuntos: Extensión, Comprensión y Cardinalidad |A|?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Conjuntos: Extensión, Comprensión y Cardinalidad |A|", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conjuntos: Extensión, Comprensión y Cardinalidad |A|. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Compl...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\\) y Complemento. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: El Producto Cartesiano A × B y la operación CROSS JOIN en bases de ...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El Producto Cartesiano A × B y la operación CROSS JOIN en bases de datos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Mapeo de Operaciones de Conjuntos a Consultas SQL (UNION, INTERSECT, EXCEPT). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Diagramas de Venn y Conjunto Potencia P(A) de 2ⁿ elementos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA RELACIONAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE",
      description: "Mapeos de entrada y salida, funciones puras, inyectivas, biyectivas y composición.",
      items: [
      "Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva.",
      "Relaciones de Equivalencia y Algoritmo Union-Find (DSU).",
      "Funciones f: X → Y: Dominio, Codominio y Rango.",
      "Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas.",
      "Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE\n\nMapeos de entrada y salida, funciones puras, inyectivas, biyectivas y composición.\n\nEn la arquitectura de software moderna (y en particular en Programación Funcional), una Función Pura es un mapeo matemático estricto: dada una entrada x del dominio, siempre produce la misma salida y del codominio sin efectos secundarios. Una función es Inyectiva si no existen dos entradas diferentes mapeadas al mismo destino (crucial para funciones Hash sin colisiones). Si una función es Biyectiva, admite una Función Inversa f⁻¹, lo cual permite construir sistemas de encriptación y desencriptación reversibles.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva.\n· Relaciones de Equivalencia y Algoritmo Union-Find (DSU).\n· Funciones f: X → Y: Dominio, Codominio y Rango.\n· Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas.\n· Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva.» y cuándo lo evitarías.\n\n## 2. Relaciones de Equivalencia y Algoritmo Union-Find (DSU).\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Relaciones de Equivalencia y Algoritmo Union-Find (DSU). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Relaciones de Equivalencia y Algoritmo Union-Find (DSU).» y cuándo lo evitarías.\n\n## 3. Funciones f: X → Y: Dominio, Codominio y Rango.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Funciones f: X → Y: Dominio, Codominio y Rango. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Funciones f: X → Y: Dominio, Codominio y Rango.» y cuándo lo evitarías.\n\n## 4. Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas.» y cuándo lo evitarías.\n\n## 5. Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE.\n\n**Qué es y por qué importa.** Dentro de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 2:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 3:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\nEstos casos muestran por qué RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Composición de Funciones en Pipeline de Datos
def limpiar_texto(s: str) -> str:
    return s.strip().lower()

def encriptar_cesar(s: str) -> str:
    return "".join(chr(ord(c) + 1) for c in s)

# Pipeline (encriptar ∘ limpiar)(s)
def pipeline_procesamiento(texto_raw: str) -> str:
    return encriptar_cesar(limpiar_texto(texto_raw))

print(pipeline_procesamiento("  Hola Mundo  ")) # Output limpio y encriptado`,
      quiz: [
        {
          question: "¿Por qué es deseable que una Función Hash ideal en seguridad informática sea Inyectiva?",
          options: ["Porque no se puede ejecutar en Python", "Porque evitaría totalmente las colisiones (dos entradas distintas produciendo el mismo hash)", "Porque es más lenta"],
          answerIndex: 1,
          explanation: "Una función inyectiva asigna a cada elemento del dominio una imagen única, garantizando 0 colisiones."
        },
        {
          question: "Si f(x) = x + 3 y g(x) = 2x, ¿cuál es el valor de la función compuesta (g ∘ f)(4)?",
          options: ["11", "14", "11"],
          answerIndex: 1,
          explanation: "Primero se evalúa f(4) = 4 + 3 = 7. Luego se pasa como parámetro a g: g(7) = 2(7) = 14."
        },
        {
          question: "¿Qué propiedad cumple una relación R si siempre que (a,b) ∈ R y (b,c) ∈ R, implica que (a,c) ∈ R?",
          options: ["Reflexiva", "Simétrica", "Transitiva"],
          answerIndex: 2,
          explanation: "La propiedad Transitiva permite conectar dependencias en grafos de llamadas de funciones o redes de paquetes."
        },
        {
          question: "¿Qué condición matemática se requiere para que una función f tenga una función inversa f⁻¹?",
          options: ["Debe ser Biyectiva (Inyectiva y Sobreyectiva)", "Debe ser constante", "Debe ser cuadrática"],
          answerIndex: 0,
          explanation: "Solo las funciones biyectivas garantizan que cada elemento del rango tenga un único origen directo sin ambigüedad."
        },
        {
          question: "En programación funcional, ¿qué caracteriza a una Función Pura?",
          options: ["Usa variables globales", "Dada la misma entrada siempre retorna la misma salida sin alterar el estado externo", "Es asíncrona"],
          answerIndex: 1,
          explanation: "Una función pura se comporta idénticamente a una función matemática: mapea entradas a salidas de forma determinista y aislada."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Relaciones Binarias y Propiedades: Reflexiva, Simétrica y Transitiva. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Relaciones de Equivalencia y Algoritmo Union-Find (DSU)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Relaciones de Equivalencia y Algoritmo Union-Find (DSU)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Relaciones de Equivalencia y Algoritmo Union-Find (DSU). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Funciones f: X → Y: Dominio, Codominio y Rango?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Funciones f: X → Y: Dominio, Codominio y Rango", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Funciones f: X → Y: Dominio, Codominio y Rango. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Composición de Funciones (f ∘ g)(x) y Funciones Inversas f⁻¹. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RELACIONES, FUNCIONES Y ARQUITECTURA DE SOFTWARE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE",
      description: "Representación de datos a bajo nivel en la CPU: Binario, Hexadecimal y Complemento a 2.",
      items: [
      "Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16).",
      "Algoritmos de Conversión de Base y Punteros de Memoria (0x...)",
      "Representación de Enteros Negativos: Complemento a 2 en la ALU.",
      "Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>).",
      "Máscaras de Bits y Banderas de Estado (Bitmasks & Flags).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE\n\nRepresentación de datos a bajo nivel en la CPU: Binario, Hexadecimal y Complemento a 2.\n\nA nivel de hardware, una computadora solo manipula voltajes digitales representados por 0s y 1s. Los ingenieros en sistemas leen direcciones de memoria en Hexadecimal (base 16) porque cada dígito hex representa exactamente 4 bits (nibble). El formato Complemento a 2 es el estándar de procesadores x86/ARM para representar enteros negativos, ya que permite realizar la resta A - B mediante un circuito de suma A + (-B). Los operadores bitwise permiten activar, desactivar y consultar permisos (flags) en tiempo de ejecución de $O(1)$.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16).\n· Algoritmos de Conversión de Base y Punteros de Memoria (0x...)\n· Representación de Enteros Negativos: Complemento a 2 en la ALU.\n· Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>).\n· Máscaras de Bits y Banderas de Estado (Bitmasks & Flags).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16).\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16).» y cuándo lo evitarías.\n\n## 2. Algoritmos de Conversión de Base y Punteros de Memoria (0x...)\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmos de Conversión de Base y Punteros de Memoria (0x...) — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmos de Conversión de Base y Punteros de Memoria (0x...)» y cuándo lo evitarías.\n\n## 3. Representación de Enteros Negativos: Complemento a 2 en la ALU.\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Representación de Enteros Negativos: Complemento a 2 en la ALU. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Representación de Enteros Negativos: Complemento a 2 en la ALU.» y cuándo lo evitarías.\n\n## 4. Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>).\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>).» y cuándo lo evitarías.\n\n## 5. Máscaras de Bits y Banderas de Estado (Bitmasks & Flags).\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Máscaras de Bits y Banderas de Estado (Bitmasks & Flags). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Máscaras de Bits y Banderas de Estado (Bitmasks & Flags).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE.\n\n**Qué es y por qué importa.** Dentro de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 2:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 3:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\nEstos casos muestran por qué SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Gestión de Permisos de Usuario mediante Bitmask en Python
READ_PERMISSION = 0b001  # 1
WRITE_PERMISSION = 0b010 # 2
EXEC_PERMISSION = 0b100  # 4

# Asignar permisos de Lectura y Escritura al usuario
permisos_usuario = READ_PERMISSION | WRITE_PERMISSION # 0b011 (3)

# Verificar si tiene permiso de Escritura
tiene_escritura = bool(permisos_usuario & WRITE_PERMISSION)
# Verificar si tiene permiso de Ejecución
tiene_ejecucion = bool(permisos_usuario & EXEC_PERMISSION)

print(f"Permisos (Binario): {bin(permisos_usuario)}")
print(f"¿Tiene permiso de Escritura?: {tiene_escritura}") # True
print(f"¿Tiene permiso de Ejecución?: {tiene_ejecucion}") # False`,
      quiz: [
        {
          question: "¿Cuál es la representación decimal del número binario de 8 bits 00101010₂?",
          options: ["34", "42", "50"],
          answerIndex: 1,
          explanation: "Evaluando potencias de 2: 32 + 8 + 2 = 42 en base decimal."
        },
        {
          question: "¿Por qué las direcciones de memoria RAM se muestran en formato Hexadecimal en lugar de Binario?",
          options: ["Porque es más corto y legible (1 dígito hex agrupa 4 bits)", "Porque la memoria es de base 16", "Porque usa menos voltaje"],
          answerIndex: 0,
          explanation: "El sistema hexadecimal simplifica 32 bits a solo 8 caracteres (ej: 0x7FFF1234), haciendo la depuración mucho más rápida."
        },
        {
          question: "¿Qué hace el operador de Desplazamiento a la Izquierda (Shift Left `x << 2`) sobre un entero?",
          options: ["Divide el número entre 4", "Multiplica el número por 4 (2²)", "Le suma 2 al número"],
          answerIndex: 1,
          explanation: "Desplazar 2 posiciones a la izquierda en base 2 equivale a multiplicar el valor decimal por 2² = 4."
        },
        {
          question: "¿Cómo se calcula el Complemento a 2 de un número binario?",
          options: ["Sumándole 1 al número", "Invirtiendo todos sus bits (0->1, 1->0) y sumándole 1 al resultado", "Multiplicándolo por -1 en decimal"],
          answerIndex: 1,
          explanation: "El algoritmo en hardware para obtener -X consiste en aplicar el Complemento a 1 (NOT bitwise) y sumarle 1."
        },
        {
          question: "¿Qué operación bitwise se utiliza comúnmente para APAGAR o LIMPIAR un bit específico mediante una máscara?",
          options: ["Bitwise OR (|)", "Bitwise AND con la máscara invertida (& ~mask)", "Bitwise XOR (^)"],
          answerIndex: 1,
          explanation: "La operación `valor & ~mask` coloca en 0 los bits seleccionados por la máscara manteniendo intactos los demás."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Bases Numéricas: Decimal (10), Binario (2), Octal (8) y Hexadecimal (16). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Algoritmos de Conversión de Base y Punteros de Memoria (0x...)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Algoritmos de Conversión de Base y Punteros de Memoria (0x...)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmos de Conversión de Base y Punteros de Memoria (0x...). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Representación de Enteros Negativos: Complemento a 2 en la ALU?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Representación de Enteros Negativos: Complemento a 2 en la ALU", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Representación de Enteros Negativos: Complemento a 2 en la ALU. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<,...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Máscaras de Bits y Banderas de Estado (Bitmasks & Flags)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Máscaras de Bits y Banderas de Estado (Bitmasks & Flags)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Máscaras de Bits y Banderas de Estado (Bitmasks & Flags). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: SISTEMAS NUMÉRICOS Y OPERACIONES BITWISE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS",
      description: "Modelado de redes, caminos óptimos, árboles de decisión y matrices de adyacencia.",
      items: [
      "Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados.",
      "Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia.",
      "Caminos, Ciclos y Grado de un Vértice.",
      "Árboles: Árboles Generadores Mínimos (Kruskal y Prim).",
      "Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS\n\nModelado de redes, caminos óptimos, árboles de decisión y matrices de adyacencia.\n\nLa Teoría de Grafos es la rama discreta por excelencia en la carrera de Sistemas. Una red de computadoras, una red social (Facebook), el mapa de carreteras de Waze o el árbol de dependencias de `npm` son grafos G = (V, E). La Matriz de Adyacencia A(n×n) almacena si existe una arista entre los vértices i y j. Algoritmos como Dijkstra o A* resuelven el camino de menor costo en redes ponderadas, mientras que BFS calcula la ruta con menor número de saltos en tiempo $O(V + E)$.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados.\n· Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia.\n· Caminos, Ciclos y Grado de un Vértice.\n· Árboles: Árboles Generadores Mínimos (Kruskal y Prim).\n· Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados.» y cuándo lo evitarías.\n\n## 2. Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia.» y cuándo lo evitarías.\n\n## 3. Caminos, Ciclos y Grado de un Vértice.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Caminos, Ciclos y Grado de un Vértice. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Caminos, Ciclos y Grado de un Vértice.» y cuándo lo evitarías.\n\n## 4. Árboles: Árboles Generadores Mínimos (Kruskal y Prim).\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Árboles: Árboles Generadores Mínimos (Kruskal y Prim). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Árboles: Árboles Generadores Mínimos (Kruskal y Prim).» y cuándo lo evitarías.\n\n## 5. Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS).\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS.\n\n**Qué es y por qué importa.** Dentro de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 2:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 3:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\nEstos casos muestran por qué MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Representación de una Red de Paquetes en Python
grafo_red = {
    'Router_A': ['Router_B', 'Router_C'],
    'Router_B': ['Router_A', 'Router_D'],
    'Router_C': ['Router_A', 'Router_D'],
    'Router_D': ['Router_B', 'Router_C']
}

def obtener_grado_nodo(grafo: dict, nodo: str) -> int:
    return len(grafo.get(nodo, []))

print(f"Conexiones directas de Router_A: {grafo_red['Router_A']}")
print(f"Grado del Router_A (número de aristas): {obtener_grado_nodo(grafo_red, 'Router_A')}")`,
      quiz: [
        {
          question: "En un grafo no dirigido con V vértices y E aristas, ¿cuál es la suma de los grados de todos los vértices?",
          options: ["E", "2E (Lema de la apretón de manos)", "V²"],
          answerIndex: 1,
          explanation: "Cada arista se conecta a dos vértices, aportando exactamente 2 al conteo total de grados de la red (Suma = 2E)."
        },
        {
          question: "¿Qué diferencia a una Matriz de Adyacencia de una Lista de Adyacencia en uso de memoria?",
          options: ["La matriz ocupa O(V²) de espacio mientras que la lista ocupa O(V + E)", "La lista usa más memoria", "Son exactamente iguales"],
          answerIndex: 0,
          explanation: "La matriz de adyacencia requiere un arreglo V×V (O(V²)), siendo ineficiente para grafos dispersos con pocas aristas."
        },
        {
          question: "¿Qué algoritmo se utiliza para encontrar el Árbol Generador Mínimo (MST) en una red de cableado?",
          options: ["Algoritmo de Kruskal", "Búsqueda Binaria", "Filtro de Bloom"],
          answerIndex: 0,
          explanation: "Kruskal (junto con Prim) selecciona las aristas de menor peso que conectan todos los nodos sin formar ciclos."
        },
        {
          question: "¿Qué algoritmo de recorrido de grafos garantiza encontrar el camino más corto en número de aristas en un grafo no ponderado?",
          options: ["DFS (Búsqueda en Profundidad)", "BFS (Búsqueda en Anchura)", "QuickSort"],
          answerIndex: 1,
          explanation: "BFS explora nivel por nivel en forma de ondas concéntricas, encontrando primero la distancia mínima en saltos."
        },
        {
          question: "¿Qué es un Grafo Acíclico Dirigido (DAG)?",
          options: ["Un grafo con bordes curvos", "Un grafo con aristas dirigidas que no contiene ciclos recorribles", "Una lista enlazada simple"],
          answerIndex: 1,
          explanation: "Los DAGs son esenciales para representar compilaciones de código, flujos de trabajo (Git) y ordenamientos topológicos."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición de Grafo G = (V, E): Dirigidos, No Dirigidos y Ponderados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Representación de Grafos: Lista de Adyacencia vs Matriz de Adyacencia. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Caminos, Ciclos y Grado de un Vértice?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Caminos, Ciclos y Grado de un Vértice", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Caminos, Ciclos y Grado de un Vértice. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Árboles: Árboles Generadores Mínimos (Kruskal y Prim)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Árboles: Árboles Generadores Mínimos (Kruskal y Prim)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Árboles: Árboles Generadores Mínimos (Kruskal y Prim). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmos de Recorrido: Búsqueda en Anchura (BFS) y Profundidad (DFS). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: MATEMÁTICA DISCRETA Y TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN",
      description: "Operaciones matriciales, gráficos 2D/3D, vectores y modelos de Inteligencia Artificial.",
      items: [
      "Matrices M(m×n): Filas, Columnas y Elementos a_ij.",
      "Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B.",
      "Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3.",
      "Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación).",
      "Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN\n\nOperaciones matriciales, gráficos 2D/3D, vectores y modelos de Inteligencia Artificial.\n\nEl Álgebra Lineal es la columna vertebral de la informática gráfica y el aprendizaje profundo (Deep Learning). La multiplicación de matrices A(m×n) × B(n×p) proyecta transformaciones de espacio. En videojuegos 3D, una matriz de transformaciones 4×4 posiciona, rota y escala modelos poligonales en pantalla. En Inteligencia Artificial (LLMs), los Embeddings de texto representan palabras como vectores de números de alta dimensión, calculando su similitud mediante el Producto Escalar u · v.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Matrices M(m×n): Filas, Columnas y Elementos a_ij.\n· Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B.\n· Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3.\n· Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación).\n· Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Matrices M(m×n): Filas, Columnas y Elementos a_ij.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Matrices M(m×n): Filas, Columnas y Elementos a_ij. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Matrices M(m×n): Filas, Columnas y Elementos a_ij.» y cuándo lo evitarías.\n\n## 2. Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B.» y cuándo lo evitarías.\n\n## 3. Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3.» y cuándo lo evitarías.\n\n## 4. Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación).\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación).» y cuándo lo evitarías.\n\n## 5. Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 2:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 3:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\nEstos casos muestran por qué ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Multiplicación de Matriz x Vector en Python (Transformación 2D)
import math

def rotar_vector_2d(v: tuple, angulo_grados: float) -> tuple:
    rad = math.radians(angulo_grados)
    cos_a, sin_a = math.cos(rad), math.sin(rad)
    # Matriz de rotación R = [[cos, -sin], [sin, cos]]
    x_rot = v[0] * cos_a - v[1] * sin_a
    y_rot = v[0] * sin_a + v[1] * cos_a
    return (round(x_rot, 4), round(y_rot, 4))

vec_original = (1.0, 0.0) # Vector apuntando a la derecha
print(f"Vector rotado 90°: {rotar_vector_2d(vec_original, 90)}") # (0.0, 1.0)`,
      quiz: [
        {
          question: "Si la matriz A es de dimensión 4×3 y la matriz B es de 3×2, ¿cuál es la dimensión de la matriz multiplicada C = A × B?",
          options: ["4×2", "3×3", "No es posible multiplicarlas"],
          answerIndex: 0,
          explanation: "Para A(m×n) y B(n×p), el producto resultante C tiene dimensión m×p: 4×2."
        },
        {
          question: "¿Qué valor produce el Producto Escalar u · v entre dos vectores ortogonales (perpendiculares a 90°)?",
          options: ["1", "0", "-1"],
          answerIndex: 1,
          explanation: "Dado que u · v = ||u|| ||v|| cos(90°) y cos(90°) = 0, el producto escalar entre vectores perpendiculares es nulo."
        },
        {
          question: "¿Por qué las GPUs (tarjetas de video) son tan eficientes entrenando modelos de Inteligencia Artificial?",
          options: ["Porque tienen mayor velocidad de reloj", "Porque poseen miles de núcleos optimizados para ejecutar multiplicación de matrices en paralelo", "Porque no usan memoria RAM"],
          answerIndex: 1,
          explanation: "Las capas de las redes neuronales son multiplicaciones de matrices de pesos; las GPUs ejecutan miles de estos productos simultáneamente."
        },
        {
          question: "¿Qué representa la Matriz Transpuesta Aᵀ?",
          options: ["La inversión de signos", "La matriz donde se han intercambiado sus filas por sus columnas", "Una matriz con todos sus elementos en cero"],
          answerIndex: 1,
          explanation: "En la matriz transpuesta Aᵀ, la entrada de la fila i y columna j pasa a ocupar la posición (j,i)."
        },
        {
          question: "¿Qué condición es obligatoria para que una matriz cuadrada A posea matriz inversa A⁻¹?",
          options: ["Que todos sus elementos sean positivos", "Que su Determinante sea diferente de cero (det(A) ≠ 0)", "Que sea de dimensión 2x2"],
          answerIndex: 1,
          explanation: "Si det(A) = 0 la matriz es singular (no invertible) porque la fórmula invoca la división entre su determinante."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Matrices M(m×n): Filas, Columnas y Elementos a_ij?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Matrices M(m×n): Filas, Columnas y Elementos a_ij", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Matrices M(m×n): Filas, Columnas y Elementos a_ij. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrice...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Suma, Resta, Multiplicación por Escalar y Multiplicación de Matrices A×B. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Matriz Identidad, Transpuesta Aᵀ y Determinantes 2x2/3x3. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Transformaciones Geométricas 2D/3D (Rotación, Escalado y Traslación). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligenc...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Vectores, Producto Escalar (Dot Product) y Embeddings de Inteligencia Artificial. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ÁLGEBRA LINEAL Y MATRICES EN COMPUTACIÓN', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA",
      description: "Razones trigonométricas, funciones periódicas y física para videojuegos.",
      items: [
      "Grados Sexagesimales vs Radianes (π rad = 180°).",
      "Funciones Trigonométricas: Seno, Coseno y Tangente.",
      "Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1.",
      "Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software.",
      "Ondas Sinusoidales y Funciones Periódicas para animaciones.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA\n\nRazones trigonométricas, funciones periódicas y física para videojuegos.\n\nEn desarrollo de software de juegos, gráficos y robótica, la Trigonometría traduce ángulos de rotación a coordenadas X, Y en pantalla. La función `math.atan2(y, x)` es fundamental en código para hacer que un personaje u objeto gire apuntando hacia la posición del cursor del mouse. Las funciones Seno y Coseno producen oscilaciones suaves continuas entre -1 y 1, utilizadas para animar respiración de personajes, movimiento de olas y procesamiento de audio digital.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Grados Sexagesimales vs Radianes (π rad = 180°).\n· Funciones Trigonométricas: Seno, Coseno y Tangente.\n· Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1.\n· Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software.\n· Ondas Sinusoidales y Funciones Periódicas para animaciones.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Grados Sexagesimales vs Radianes (π rad = 180°).\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Grados Sexagesimales vs Radianes (π rad = 180°). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Grados Sexagesimales vs Radianes (π rad = 180°).» y cuándo lo evitarías.\n\n## 2. Funciones Trigonométricas: Seno, Coseno y Tangente.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Funciones Trigonométricas: Seno, Coseno y Tangente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Funciones Trigonométricas: Seno, Coseno y Tangente.» y cuándo lo evitarías.\n\n## 3. Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1.» y cuándo lo evitarías.\n\n## 4. Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software.» y cuándo lo evitarías.\n\n## 5. Ondas Sinusoidales y Funciones Periódicas para animaciones.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ondas Sinusoidales y Funciones Periódicas para animaciones. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ondas Sinusoidales y Funciones Periódicas para animaciones.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA.\n\n**Qué es y por qué importa.** Dentro de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de TRIGONOMETRÍA Y SIMULACIÓN FÍSICA.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 2:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 3:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\nEstos casos muestran por qué TRIGONOMETRÍA Y SIMULACIÓN FÍSICA no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo TRIGONOMETRÍA Y SIMULACIÓN FÍSICA en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Cálculo del ángulo del mouse en desarrollo de juegos en Python
import math

def calcular_angulo_apuntado(jugador_pos: tuple, mouse_pos: tuple) -> float:
    dx = mouse_pos[0] - jugador_pos[0]
    dy = mouse_pos[1] - jugador_pos[1]
    angulo_radianes = math.atan2(dy, dx)
    return math.degrees(angulo_radianes)

jugador = (100, 100)
mouse = (200, 200)
print(f"Ángulo de giro del personaje: {calcular_angulo_apuntado(jugador, mouse):.2f}°") # 45.00°`,
      quiz: [
        {
          question: "¿Por qué se prefiere la función `atan2(y, x)` sobre `atan(y/x)` en programación de gráficos?",
          options: ["Es más rápida", "Maneja adecuadamente todos los 4 cuadrantes y evita la división por cero cuando x = 0", "No usa decimales"],
          answerIndex: 1,
          explanation: "`atan2` evalúa el signo de ambas componentes (x, y) de forma independiente, resolviendo el cuadrante exacto (0° a 360°) sin fallar al dividir entre cero."
        },
        {
          question: "¿A cuántos grados equivale un ángulo expresado como 2π radianes?",
          options: ["180°", "360°", "90°"],
          answerIndex: 1,
          explanation: "Un giro completo en el círculo unitario equivale a 2π radianes o 360° sexagesimales."
        },
        {
          question: "¿Cuál es el valor máximo y mínimo que puede tomar la función f(x) = sin(x) en el plano real?",
          options: ["Entre 0 y 1", "Entre -1 y 1", "Entre -π y π"],
          answerIndex: 1,
          explanation: "La función Seno oscila periódicamente dentro del intervalo cerrado [-1, 1]."
        },
        {
          question: "En un triángulo rectángulo, ¿cómo se descompone la componente horizontal X de un vector de longitud R y ángulo θ?",
          options: ["X = R · sin(θ)", "X = R · cos(θ)", "X = R · tan(θ)"],
          answerIndex: 1,
          explanation: "La proyección horizontal sobre el eje X corresponde al Coseno: X = R · cos(θ)."
        },
        {
          question: "¿Cuál es la relación de la Identidad Trigonométrica sin²(θ) + cos²(θ)?",
          options: ["Siempre es igual a 1", "Depende del ángulo", "Es igual a 0"],
          answerIndex: 0,
          explanation: "Proviene directamente del Teorema de Pitágoras en el círculo de radio 1: x² + y² = 1."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Grados Sexagesimales vs Radianes (π rad = 180°)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Grados Sexagesimales vs Radianes (π rad = 180°)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Grados Sexagesimales vs Radianes (π rad = 180°). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Funciones Trigonométricas: Seno, Coseno y Tangente?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Funciones Trigonométricas: Seno, Coseno y Tangente", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Funciones Trigonométricas: Seno, Coseno y Tangente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo d...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cálculo de Ángulos con Arcotangente 2 (atan2(y, x)) en desarrollo de software. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Ondas Sinusoidales y Funciones Periódicas para animaciones?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Ondas Sinusoidales y Funciones Periódicas para animaciones", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ondas Sinusoidales y Funciones Periódicas para animaciones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: TRIGONOMETRÍA Y SIMULACIÓN FÍSICA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO",
      description: "Exponentes, logaritmos y fundamentación matemática del análisis de algoritmos Big-O.",
      items: [
      "Propiedades de Exponentes y Radicales.",
      "Logaritmos: Definición log_b(x) = y ⇔ b^y = x.",
      "Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base.",
      "Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n).",
      "Demostración Formal de la Notación Big-O, Big-Omega y Theta.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO\n\nExponentes, logaritmos y fundamentación matemática del análisis de algoritmos Big-O.\n\nEl análisis de algoritmos se apoya directamente en el comportamiento de las funciones logarítmicas y exponenciales. Un algoritmo con complejidad $O(\\\\\\\\\\\\\\\\log n)$ (como la Búsqueda Binaria) reduce el problema a la mitad en cada paso. Para $n = 1,000,000$ de elementos, un algoritmo lineal $O(n)$ realiza 1,000,000 de operaciones, mientras que uno logarítmico $O(\\\\\\\\\\\\\\\\log_2 n)$ realiza solo 20 comparaciones. Comprender el crecimiento analítico permite elegir las mejores estructuras de datos.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Propiedades de Exponentes y Radicales.\n· Logaritmos: Definición log_b(x) = y ⇔ b^y = x.\n· Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base.\n· Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n).\n· Demostración Formal de la Notación Big-O, Big-Omega y Theta.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Propiedades de Exponentes y Radicales.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Propiedades de Exponentes y Radicales. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Propiedades de Exponentes y Radicales.» y cuándo lo evitarías.\n\n## 2. Logaritmos: Definición log_b(x) = y ⇔ b^y = x.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Logaritmos: Definición log_b(x) = y ⇔ b^y = x. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Logaritmos: Definición log_b(x) = y ⇔ b^y = x.» y cuándo lo evitarías.\n\n## 3. Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base.» y cuándo lo evitarías.\n\n## 4. Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n).\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n).» y cuándo lo evitarías.\n\n## 5. Demostración Formal de la Notación Big-O, Big-Omega y Theta.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Demostración Formal de la Notación Big-O, Big-Omega y Theta. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Demostración Formal de la Notación Big-O, Big-Omega y Theta.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO.\n\n**Qué es y por qué importa.** Dentro de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 2:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\n**Ejemplo 3:** Un JOIN en SQL es producto cartesiano filtrado: sin teoría de conjuntos no se entiende por qué un mal JOIN explota en cardinalidad.\n\nEstos casos muestran por qué ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Comparativa de pasos: Lineal O(n) vs Logarítmico O(log2 n)
import math

n_elementos = 1_000_000_000 # Un mil millones

pasos_lineal = n_elementos
pasos_log = math.ceil(math.log2(n_elementos))

print(f"Entrada: {n_elementos:,} elementos")
print(f"Pasos Búsqueda Lineal O(n): {pasos_lineal:,}")
print(f"Pasos Búsqueda Binaria O(log2 n): {pasos_log}") # ¡Solo 30 pasos!`,
      quiz: [
        {
          question: "Si un algoritmo procesa 1,000,000 de datos y tiene complejidad O(log₂ n), ¿cuántas operaciones realizará aproximadamente?",
          options: ["1,000,000 operaciones", "Aproximadamente 20 operaciones", "500,000 operaciones"],
          answerIndex: 1,
          explanation: "Dado que 2²⁰ ≈ 1,048,576, el logaritmo en base 2 de 1,000,000 es aproximadamente 20."
        },
        {
          question: "Según las propiedades logarítmicas, ¿a qué equivale la expresión log(A / B)?",
          options: ["log(A) - log(B)", "log(A) / log(B)", "log(A) + log(B)"],
          answerIndex: 0,
          explanation: "El logaritmo de una división equivale a la resta de los logaritmos: log(A/B) = log(A) - log(B)."
        },
        {
          question: "¿Qué establece la definición formal de la cota superior Big-O: f(n) ∈ O(g(n))?",
          options: ["Existen constantes c > 0 y n₀ > 0 tales que f(n) ≤ c · g(n) para todo n ≥ n₀", "f(n) es siempre igual a g(n)", "f(n) crece más rápido que 2ⁿ"],
          answerIndex: 0,
          explanation: "Big-O acota el peor caso demostrando que a partir de un tamaño de entrada n₀, f(n) no superará a c · g(n)."
        },
        {
          question: "¿A qué valor equivale la expresión (x⁴ · x³)?",
          options: ["x¹²", "x⁷", "x¹"],
          answerIndex: 1,
          explanation: "En la multiplicación de potencias de la misma base, se mantiene la base y se suman los exponentes (4 + 3 = 7)."
        },
        {
          question: "¿Cuál es la fórmula para realizar un cambio de base de log_b(x) a base 10?",
          options: ["log10(x) / log10(b)", "log10(x) · log10(b)", "log10(x - b)"],
          answerIndex: 0,
          explanation: "La fórmula de cambio de base establece que log_b(x) = log_k(x) / log_k(b)."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Propiedades de Exponentes y Radicales?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Propiedades de Exponentes y Radicales", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Propiedades de Exponentes y Radicales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Logaritmos: Definición log_b(x) = y ⇔ b^y = x?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Logaritmos: Definición log_b(x) = y ⇔ b^y = x", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Logaritmos: Definición log_b(x) = y ⇔ b^y = x. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Propiedades Logarítmicas: log(A·B), log(A/B) y Cambio de Base. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Inecuaciones y Cotas Matemáticas f(n) ≤ c · g(n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Demostración Formal de la Notación Big-O, Big-Omega y Theta?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Demostración Formal de la Notación Big-O, Big-Omega y Theta", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Demostración Formal de la Notación Big-O, Big-Omega y Theta. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: ÁLGEBRA ANALÍTICA Y CRECIMIENTO LOGARÍTMICO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE",
      description: "Razones de cambio instantáneas, derivadas y el algoritmo Descenso de Gradiente.",
      items: [
      "Concepto de Límite lim x→a f(x) y Continuidad de funciones.",
      "Definición de la Derivada f'(x) como razón de cambio instantánea.",
      "Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena.",
      "Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0).",
      "El Gradiente ∇f y Descenso de Gradiente en Machine Learning.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE\n\nRazones de cambio instantáneas, derivadas y el algoritmo Descenso de Gradiente.\n\nEl Cálculo Diferencial es la herramienta para optimizar software y modelos de Inteligencia Artificial. La Derivada f'(x) mide la tasa de cambio de una función. En redes neuronales, el algoritmo de Descenso de Gradiente busca los pesos óptimos ajustando los parámetros en la dirección opuesta al Gradiente ∇f de la función de error. Encontrar los puntos críticos (donde la derivada f'(x) = 0) permite calcular la máxima eficiencia o el menor costo operativo de un sistema de software.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Concepto de Límite lim x→a f(x) y Continuidad de funciones.\n· Definición de la Derivada f'(x) como razón de cambio instantánea.\n· Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena.\n· Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0).\n· El Gradiente ∇f y Descenso de Gradiente en Machine Learning.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Concepto de Límite lim x→a f(x) y Continuidad de funciones.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Concepto de Límite lim x→a f(x) y Continuidad de funciones. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Concepto de Límite lim x→a f(x) y Continuidad de funciones.» y cuándo lo evitarías.\n\n## 2. Definición de la Derivada f'(x) como razón de cambio instantánea.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición de la Derivada f'(x) como razón de cambio instantánea. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición de la Derivada f'(x) como razón de cambio instantánea.» y cuándo lo evitarías.\n\n## 3. Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena.» y cuándo lo evitarías.\n\n## 4. Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0).\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0).» y cuándo lo evitarías.\n\n## 5. El Gradiente ∇f y Descenso de Gradiente en Machine Learning.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** El Gradiente ∇f y Descenso de Gradiente en Machine Learning. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «El Gradiente ∇f y Descenso de Gradiente en Machine Learning.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE.\n\n**Qué es y por qué importa.** Dentro de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 2:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\n**Ejemplo 3:** Unity/Unreal multiplican matrices 4×4 por cada vértice en cada frame; la trigonometría y el álgebra lineal están en el hot path.\n\nEstos casos muestran por qué CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Algoritmo Simplificado de Descenso de Gradiente en Python
# Queremos encontrar el mínimo de f(x) = x^2 (cuya derivada es f'(x) = 2x)
x = 10.0 # Punto inicial de búsqueda
tasa_aprendizaje = 0.1 # Learning Rate

for paso in range(15):
    gradiente = 2 * x # f'(x) = 2x
    x = x - tasa_aprendizaje * gradiente
    print(f"Paso {paso+1}: x = {x:.4f}, f(x) = {x**2:.4f}")

# El valor de x converge rápidamente a 0 (el mínimo global)`,
      quiz: [
        {
          question: "¿Qué representa la Derivada f'(x) de una función desde el punto de vista geométrico?",
          options: ["El área bajo la curva", "La pendiente de la recta tangente a la curva en ese punto", "El valor máximo absoluto"],
          answerIndex: 1,
          explanation: "La derivada proporciona la inclinación o pendiente de la recta tangente en un punto específico de la gráfica."
        },
        {
          question: "¿Por qué el algoritmo de Descenso de Gradiente resta el gradiente (w = w - lr * ∇f) en IA?",
          options: ["Porque el gradiente apunta en la dirección de máximo crecimiento, por lo que restar avanza hacia el mínimo del error", "Por pura convención", "Para multiplicar por dos"],
          answerIndex: 0,
          explanation: "El gradiente señala hacia donde la función aumenta más rápido; restar la derivada mueve el modelo hacia el fondo del valle (error mínimo)."
        },
        {
          question: "¿Cuál es la derivada de la función f(x) = 5x⁴ según la regla de la potencia?",
          options: ["20x³", "5x³", "20x⁴"],
          answerIndex: 0,
          explanation: "Multiplicamos el coeficiente por el exponente (5 × 4 = 20) y restamos 1 al exponente (4 - 1 = 3), resultando 20x³."
        },
        {
          question: "En un punto crítico donde una función alcanza un mínimo local, ¿cuánto vale su primera derivada?",
          options: ["0", "1", "Infinito"],
          answerIndex: 0,
          explanation: "En la cima o el fondo de una curva suave, la recta tangente es completamente horizontal, lo que significa que su pendiente f'(x) es 0."
        },
        {
          question: "¿Cuál es la derivada de una función constante f(x) = 42?",
          options: ["0", "42", "1"],
          answerIndex: 0,
          explanation: "Una constante no cambia su valor al variar x; por lo tanto, su tasa de cambio instantánea es exactamente 0."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Concepto de Límite lim x→a f(x) y Continuidad de funciones?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Concepto de Límite lim x→a f(x) y Continuidad de funciones", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Concepto de Límite lim x→a f(x) y Continuidad de funciones. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Definición de la Derivada f'(x) como razón de cambio instantánea?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Definición de la Derivada f'(x) como razón de cambio instantánea", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición de la Derivada f'(x) como razón de cambio instantánea. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Optimización de Funciones: Puntos Mínimos y Máximos (f'(x) = 0). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: El Gradiente ∇f y Descenso de Gradiente en Machine Learning?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: El Gradiente ∇f y Descenso de Gradiente en Machine Learning", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El Gradiente ∇f y Descenso de Gradiente en Machine Learning. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: CÁLCULO DIFERENCIAL Y OPTIMIZACIÓN EN SOFTWARE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA",
      description: "Conteo discreto, Teorema Maestro para algoritmos recursivos y aritmética modular para cifrado RSA.",
      items: [
      "Principios Combinatorios: Regla de la Suma y del Producto.",
      "Permutaciones P(n, k) y Combinaciones C(n, k).",
      "Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro.",
      "Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD).",
      "Cifrado Asimétrico RSA y Teoría de Números Primos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA\n\nConteo discreto, Teorema Maestro para algoritmos recursivos y aritmética modular para cifrado RSA.\n\nEste módulo conecta la matemática avanzada directamente con la ciberseguridad y el diseño algorítmico. Las Combinaciones C(n,k) determinan el espacio de claves posibles de un sistema criptográfico. El Teorema Maestro resuelve la complejidad asintótica de algoritmos recursivos de Divide y Vencerás como Merge Sort T(n) = 2T(n/2) + O(n) → O(n log n). La Aritmética Modular a mod m sostiene toda la infraestructura de seguridad en internet (HTTPS/SSL, SSH) mediante la dificultad de factorizar números primos gigantes en el cifrado RSA.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Principios Combinatorios: Regla de la Suma y del Producto.\n· Permutaciones P(n, k) y Combinaciones C(n, k).\n· Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro.\n· Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD).\n· Cifrado Asimétrico RSA y Teoría de Números Primos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Principios Combinatorios: Regla de la Suma y del Producto.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Principios Combinatorios: Regla de la Suma y del Producto. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Principios Combinatorios: Regla de la Suma y del Producto.» y cuándo lo evitarías.\n\n## 2. Permutaciones P(n, k) y Combinaciones C(n, k).\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Permutaciones P(n, k) y Combinaciones C(n, k). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Permutaciones P(n, k) y Combinaciones C(n, k).» y cuándo lo evitarías.\n\n## 3. Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro.» y cuándo lo evitarías.\n\n## 4. Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD).\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD).» y cuándo lo evitarías.\n\n## 5. Cifrado Asimétrico RSA y Teoría de Números Primos.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cifrado Asimétrico RSA y Teoría de Números Primos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cifrado Asimétrico RSA y Teoría de Números Primos.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA.\n\n**Qué es y por qué importa.** Dentro de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA, este punto es central en matemática discreta, álgebra lineal y lógica aplicada al software. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 2:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\n**Ejemplo 3:** El descenso de gradiente en ML es cálculo multivariado: cada peso se actualiza con la derivada parcial de la función de pérdida.\n\nEstos casos muestran por qué COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Demostración de Aritmética Modular y Euclides (MCD) en Python
def mcd_euclides(a: int, b: int) -> int:
    # Algoritmo de Euclides para MCD en tiempo O(log(min(a,b)))
    while b != 0:
        a, b = b, a % b
    return a

# Operación Modular para Cifrado
mensaje = 7
clave_e = 3
modulo_n = 33

cifrado = (mensaje ** clave_e) % modulo_n
print(f"Mensaje original: {mensaje}")
print(f"MCD(120, 45): {mcd_euclides(120, 45)}") # 15
print(f"Mensaje cifrado con RSA (mod 33): {cifrado}")`,
      quiz: [
        {
          question: "Según el Teorema Maestro, ¿cuál es la complejidad de la ecuación de recurrencia T(n) = 2T(n/2) + O(n) (ej: Merge Sort)?",
          options: ["O(n log n)", "O(n²)", "O(log n)"],
          answerIndex: 0,
          explanation: "Al dividir el problema en 2 partes de tamaño n/2 con un costo de combinación O(n), la recurrencia resulta en O(n log n)."
        },
        {
          question: "¿Por qué la Aritmética Modular (a mod m) es fundamental en algoritmos de Criptografía como RSA?",
          options: ["Porque mantiene los resultados dentro de un rango acotado [0, m-1] y permite operaciones unireccionales difíciles de revertir", "Porque elimina los números impares", "Porque duplica la memoria"],
          answerIndex: 0,
          explanation: "El operador módulo confina los cálculos a un espacio finito y permite construir funciones trampa (One-Way Functions)."
        },
        {
          question: "¿Cuál es el resultado de la operación modular 27 mod 5?",
          options: ["2", "5", "7"],
          answerIndex: 0,
          explanation: "27 dividido entre 5 da 5 con un residuo de 2 (27 = 5 × 5 + 2)."
        },
        {
          question: "¿De cuántas formas se pueden ordenar 4 archivos diferentes en una carpeta (Permutaciones 4!)?",
          options: ["12 formas", "24 formas", "16 formas"],
          answerIndex: 1,
          explanation: "El número de ordenamientos completos es 4! = 4 × 3 × 2 × 1 = 24 formas."
        },
        {
          question: "¿Qué determina el Algoritmo de Euclides?",
          options: ["El Máximo Común Divisor (MCD) entre dos enteros de forma ultra-eficiente", "La derivada de un polinomio", "La suma de una matriz"],
          answerIndex: 0,
          explanation: "El algoritmo de Euclides calcula el MCD mediante divisiones sucesivas con módulos en tiempo O(log(min(a,b)))."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Principios Combinatorios: Regla de la Suma y del Producto?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Principios Combinatorios: Regla de la Suma y del Producto", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Principios Combinatorios: Regla de la Suma y del Producto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Permutaciones P(n, k) y Combinaciones C(n, k)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Permutaciones P(n, k) y Combinaciones C(n, k)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Permutaciones P(n, k) y Combinaciones C(n, k). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ecuaciones de Recurrencia T(n) = aT(n/b) + f(n) y Teorema Maestro. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aritmética Modular: a ≡ b (mod m) y Algoritmo de Euclides (MCD). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Cifrado Asimétrico RSA y Teoría de Números Primos?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Cifrado Asimétrico RSA y Teoría de Números Primos", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cifrado Asimétrico RSA y Teoría de Números Primos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: COMBINATORIA, RECURRENCIA Y CRIPTOGRAFÍA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
