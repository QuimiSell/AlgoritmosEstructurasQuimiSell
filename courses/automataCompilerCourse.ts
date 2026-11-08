import { Course } from '../domain/models';

export const AUTOMATA_COMPILER_COURSE: Course = {
  id: 'automatas_compiladores',
  title: 'Lenguajes Formales, Autómatas y Compiladores',
  shortTitle: 'Autómatas & Compiladores',
  badge: 'Teoría de la Computación & Software',
  icon: '⚙️',
  description: 'Un viaje completo de 15 módulos desde los alfabetos, DFA, NFA, Gramáticas y Máquinas de Turing hasta la construcción paso a paso de un Compilador real (Lexer, Parser AST, Código Intermedio y Ensamblador).',
  whyStudyTitle: '🧠 ¿Por qué dominar Autómatas y Compiladores?',
  whyStudyText: 'Entender cómo una computadora pasa de un texto plano en C, Python o Java a instrucciones ejecutables de lenguaje máquina es el mayor logro de la ingeniería de software. Esta materia enseña la Jerarquía de Chomsky, el diseño de intérpretes, motores de expresiones regulares, parseadores sintácticos y optimizadores de código.',
  studyPlanReasons: [
    { id: 1, title: "Alfabetos, Cadenas y Lenguajes", why: "Base formal matemática de la teoría de cadenas y lenguajes." },
    { id: 2, title: "Autómatas Finitos Deterministas (DFA)", why: "Modelado de máquinas de estado finito sin ambigüedad." },
    { id: 3, title: "Autómatas Finitos No Deterministas (NFA)", why: "Simulación de múltiples estados paralelos y conversión a DFA." },
    { id: 4, title: "Expresiones Regulares (Regex)", why: "Construcción de patrones de búsqueda y Teorema de Kleene." },
    { id: 5, title: "Lema del Bombeo (Pumping Lemma)", why: "Demostración rigurosa de los límites de los lenguajes regulares." },
    { id: 6, title: "Gramáticas Libres de Contexto (CFG)", why: "Definición de la sintaxis formal de los lenguajes de programación." },
    { id: 7, title: "Autómatas de Pila (PDA)", why: "Reconocimiento de estructuras anidadas mediante memoria LIFO." },
    { id: 8, title: "Máquinas de Turing y Decidibilidad", why: "El límite absoluto de lo que es computable por cualquier computadora." },
    { id: 9, title: "Arquitectura de Compiladores", why: "Estructura interna: Frontend, Middle-end y Backend." },
    { id: 10, title: "Análisis Léxico (Lexer)", why: "Conversión de texto fuente en flujo de Tokens de tokens mediante Regex." },
    { id: 11, title: "Análisis Sintáctico (Parser)", why: "Generación del Árbol Sintáctico (LL(1), LR(1), LALR)." },
    { id: 12, title: "Análisis Semántico y Tablas de Símbolos", why: "Verificación de tipos, alcance de variables y construcción del AST." },
    { id: 13, title: "Código Intermedio (IR & TAC)", why: "Traducción a Código de 3 Direcciones independiente del hardware." },
    { id: 14, title: "Optimización de Código", why: "Plegado de constantes, eliminación de código muerto y optimización." },
    { id: 15, title: "Generación de Código Objeto", why: "Traducción final a ensamblador y gestión de memoria en tiempo de ejecución." }
  ],
  labChallenge: {
    title: "Construcción de un Intérprete/Compilador de Expresiones Aritméticas (Lexer + Parser AST + Evaluador)",
    badge: "Laboratorio de Compiladores",
    description: "Tu objetivo es construir en Python o TypeScript un compilador/intérprete completo capaz de tokenizar una cadena matemática (ej: 'val = (10 + 5) * 2'), generar su Árbol Sintáctico Abstracto (AST) y traducirlo a Código de 3 Direcciones (TAC) o evaluarlo.",
    requirements: [
      "• Análisis Léxico (Lexer): Convertir el string fuente en una lista de Tokens (NUM, OP_SUMA, OP_MULT, PAREN_IZQ, ID).",
      "• Análisis Sintáctico (Parser AST): Construir un Parser por Descenso Recursivo que genere los nodos del árbol AST.",
      "• Generación de Código de 3 Direcciones (TAC): Producir cuádruplas intermedias (t1 = 10 + 5; t2 = t1 * 2).",
      "• Cero librerías externas: El Lexer y Parser deben ser implementados desde cero."
    ],
    cleanCodeRules: [
      "• Modularidad: Separar la clase Lexer, la clase Parser y el Generador de Código IR.",
      "• Tipado Fuerte: Usar clases Token, ASTNode y Operadores explícitos.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Compilador - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio de Autómatas y Compiladores (Lexer + Parser AST + Evaluador TAC).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de mi implementación:\n- \n\nSaludos cordiales.`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES",
      description: "Los bloques fundamentales de la Teoría de la Computación: símbolos, concatenación y operaciones sobre lenguajes.",
      items: [
      "Alfabeto Σ: Conjuntos finitos no vacíos de símbolos.",
      "Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε.",
      "Longitud de una cadena |w| y Operación de Concatenación.",
      "Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+).",
      "Definición Formal de Lenguaje L ⊆ Σ*.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ALFABETOS, CADENAS Y LENGUAJES FORMALES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ALFABETOS, CADENAS Y LENGUAJES FORMALES\n\nLos bloques fundamentales de la Teoría de la Computación: símbolos, concatenación y operaciones sobre lenguajes.\n\nLa Teoría de la Computación comienza definiendo qué es un Alfabeto Σ (un conjunto finito de símbolos). Una Cadena es una secuencia finita de símbolos elegidos de Σ. La longitud |w| es la cantidad de símbolos de w. La cadena vacía ε tiene longitud 0. La Estrella de Kleene Σ* representa el conjunto infinito de todas las cadenas posibles generables con Σ (incluyendo ε), mientras que Σ+ excluye ε. Un Lenguaje Formal L es cualquier subconjunto de Σ*.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Alfabeto Σ: Conjuntos finitos no vacíos de símbolos.\n· Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε.\n· Longitud de una cadena |w| y Operación de Concatenación.\n· Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+).\n· Definición Formal de Lenguaje L ⊆ Σ*.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ALFABETOS, CADENAS Y LENGUAJES FORMALES.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Alfabeto Σ: Conjuntos finitos no vacíos de símbolos.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Alfabeto Σ: Conjuntos finitos no vacíos de símbolos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Alfabeto Σ: Conjuntos finitos no vacíos de símbolos.» y cuándo lo evitarías.\n\n## 2. Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε.» y cuándo lo evitarías.\n\n## 3. Longitud de una cadena |w| y Operación de Concatenación.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Longitud de una cadena |w| y Operación de Concatenación. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Longitud de una cadena |w| y Operación de Concatenación.» y cuándo lo evitarías.\n\n## 4. Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+).\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+).» y cuándo lo evitarías.\n\n## 5. Definición Formal de Lenguaje L ⊆ Σ*.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición Formal de Lenguaje L ⊆ Σ*. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición Formal de Lenguaje L ⊆ Σ*.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ALFABETOS, CADENAS Y LENGUAJES FORMALES.\n\n**Qué es y por qué importa.** Dentro de ALFABETOS, CADENAS Y LENGUAJES FORMALES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ALFABETOS, CADENAS Y LENGUAJES FORMALES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ALFABETOS, CADENAS Y LENGUAJES FORMALES.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Clang tokeniza tu código C++ con un autómata y luego aplica gramática libre de contexto en el parser.\n\n**Ejemplo 2:** Clang tokeniza tu código C++ con un autómata y luego aplica gramática libre de contexto en el parser.\n\n**Ejemplo 3:** Clang tokeniza tu código C++ con un autómata y luego aplica gramática libre de contexto en el parser.\n\nEstos casos muestran por qué ALFABETOS, CADENAS Y LENGUAJES FORMALES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ALFABETOS, CADENAS Y LENGUAJES FORMALES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Operaciones con Cadenas y Kleene en Python
alfabeto = {'0', '1'}

def longitud(w: str) -> int:
    return len(w)

def concatenar(w1: str, w2: str) -> str:
    return w1 + w2

# Generar cadenas de longitud k
def generar_cadenas_kleene(sigma: set, k: int) -> list:
    if k == 0: return [""]
    anteriores = generar_cadenas_kleene(sigma, k - 1)
    return [w + s for w in anteriores for s in sigma]

print(f"Σ* de longitud 2: {generar_cadenas_kleene(alfabeto, 2)}") # ['00', '01', '10', '11']`,
      quiz: [
        {
          question: "¿Cuál es la longitud de la cadena vacía ε (|ε|)?",
          options: ["0", "1", "Indefinida"],
          answerIndex: 0,
          explanation: "La cadena vacía ε por definición no contiene ningún símbolo, por lo que su longitud es exactamente 0."
        },
        {
          question: "Si el alfabeto Σ = {a, b}, ¿cuál de las siguientes opciones PERTENECE a la Clausura Positiva Σ+?",
          options: ["ε", "a", "Tanto ε como a"],
          answerIndex: 1,
          explanation: "La clausura positiva Σ+ incluye todas las cadenas de longitud ≥ 1. Excluye únicamente la cadena vacía ε."
        },
        {
          question: "¿Qué representa la Estrella de Kleene Σ* sobre un alfabeto Σ?",
          options: ["El conjunto de todas las cadenas de longitud 1", "El conjunto infinito de todas las cadenas posibles generables con Σ (incluyendo ε)", "Un conjunto vacío"],
          answerIndex: 1,
          explanation: "Σ* es la clausura de Kleene: representa todas las combinaciones finitas de símbolos de Σ, de longitud 0 a infinito."
        },
        {
          question: "Si w = 'compilador', ¿cuál es el valor de |w|?",
          options: ["9", "10", "11"],
          answerIndex: 1,
          explanation: "Contando los caracteres individuales de la cadena 'c-o-m-p-i-l-a-d-o-r', la longitud |w| es 10."
        },
        {
          question: "Para cualquier cadena w, ¿cuál es el resultado de la concatenación w · ε?",
          options: ["ε", "w", "ww"],
          answerIndex: 1,
          explanation: "La cadena vacía ε actúa como el elemento neutro de la concatenación de cadenas: w · ε = ε · w = w."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Alfabeto Σ: Conjuntos finitos no vacíos de símbolos?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Alfabeto Σ: Conjuntos finitos no vacíos de símbolos", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Alfabeto Σ: Conjuntos finitos no vacíos de símbolos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Longitud de una cadena |w| y Operación de Concatenación?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Longitud de una cadena |w| y Operación de Concatenación", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Longitud de una cadena |w| y Operación de Concatenación. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Definición Formal de Lenguaje L ⊆ Σ*?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición Formal de Lenguaje L ⊆ Σ*", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de Lenguaje L ⊆ Σ*. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)",
      description: "Reconocedores de lenguajes regulares mediante máquinas de estado finito sin ambigüedad.",
      items: [
      "Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F).",
      "Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F.",
      "Función de Transición Total δ: Q × Σ → Q.",
      "Tabla de Transiciones y Diagrama de Estados.",
      "Evaluación de Cadenas y Lenguaje Aceptado L(M).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de AUTÓMATAS FINITOS DETERMINISTAS (DFA).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: AUTÓMATAS FINITOS DETERMINISTAS (DFA)\n\nReconocedores de lenguajes regulares mediante máquinas de estado finito sin ambigüedad.\n\nUn Autómata Finito Determinista (DFA) es un modelo matemático de una máquina de estados finita. Para cada estado q y cada símbolo de entrada s, la función de transición δ(q, s) especifica EXACTAMENTE UN único estado siguiente. No existe ambigüedad ni decisiones múltiples. Una cadena w es aceptada por el DFA si, tras procesar cada símbolo de w desde el estado inicial q₀, la máquina finaliza en un estado perteneciente al conjunto de estados finales F.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F).\n· Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F.\n· Función de Transición Total δ: Q × Σ → Q.\n· Tabla de Transiciones y Diagrama de Estados.\n· Evaluación de Cadenas y Lenguaje Aceptado L(M).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de AUTÓMATAS FINITOS DETERMINISTAS (DFA).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F).» y cuándo lo evitarías.\n\n## 2. Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F.» y cuándo lo evitarías.\n\n## 3. Función de Transición Total δ: Q × Σ → Q.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Función de Transición Total δ: Q × Σ → Q. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Función de Transición Total δ: Q × Σ → Q.» y cuándo lo evitarías.\n\n## 4. Tabla de Transiciones y Diagrama de Estados.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Tabla de Transiciones y Diagrama de Estados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tabla de Transiciones y Diagrama de Estados.» y cuándo lo evitarías.\n\n## 5. Evaluación de Cadenas y Lenguaje Aceptado L(M).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Evaluación de Cadenas y Lenguaje Aceptado L(M). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Evaluación de Cadenas y Lenguaje Aceptado L(M).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de AUTÓMATAS FINITOS DETERMINISTAS (DFA).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS DETERMINISTAS (DFA), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de AUTÓMATAS FINITOS DETERMINISTAS (DFA). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de AUTÓMATAS FINITOS DETERMINISTAS (DFA).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\n**Ejemplo 2:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\n**Ejemplo 3:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\nEstos casos muestran por qué AUTÓMATAS FINITOS DETERMINISTAS (DFA) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo AUTÓMATAS FINITOS DETERMINISTAS (DFA) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Ejemplo de DFA en Python: Acepta cadenas binarias con un número PAR de 1s
class DFA_ParUnos:
    def __init__(self):
        self.estado_actual = 'Q0' # Q0 es estado inicial y de aceptación (0 de unos es par)
    
    def procesar_cadena(self, cadena: str) -> bool:
        self.estado_actual = 'Q0'
        for simbolo in cadena:
            if self.estado_actual == 'Q0':
                if simbolo == '1': self.estado_actual = 'Q1'
            elif self.estado_actual == 'Q1':
                if simbolo == '1': self.estado_actual = 'Q0'
        return self.estado_actual == 'Q0'

dfa = DFA_ParUnos()
print(f"¿'11011' aceptada? (4 unos): {dfa.procesar_cadena('11011')}") # True
print(f"¿'111' aceptada? (3 unos): {dfa.procesar_cadena('111')}")   # False`,
      quiz: [
        {
          question: "¿Por qué se denomina 'Determinista' a un DFA?",
          options: ["Porque no puede tener estados de aceptación", "Porque para cada estado y cada símbolo del alfabeto existe EXACTAMENTE UNA transición posible", "Porque solo procesa números"],
          answerIndex: 1,
          explanation: "La propiedad determinista garantiza que dada una entrada, la secuencia de estados por la que pasa la máquina es única e inequívoca."
        },
        {
          question: "En la definición formal de un DFA (Q, Σ, δ, q₀, F), ¿qué representa F?",
          options: ["El conjunto de estados iniciales", "El alfabeto de entrada", "El conjunto de estados finales o de aceptación (F ⊆ Q)"],
          answerIndex: 2,
          explanation: "F es el subconjunto de estados donde, si la máquina termina de leer la cadena, la entrada se considera válida (aceptada)."
        },
        {
          question: "¿Qué ocurre si un DFA termina de leer una cadena en un estado que NO pertenece a F?",
          options: ["La cadena es rechazada", "El autómata se reinicia", "La cadena se acepta"],
          answerIndex: 0,
          explanation: "Para que una cadena sea aceptada, el estado final alcanzado DEBE estar en F. De lo contrario, la cadena se rechaza."
        },
        {
          question: "En una función de transición de un DFA δ: Q × Σ → Q, si |Q| = 4 y |Σ| = 2, ¿cuántas entradas tiene la tabla de transición?",
          options: ["6", "8", "16"],
          answerIndex: 1,
          explanation: "Dado que es una función total definida para cada par (estado, símbolo), la tabla contiene |Q| × |Σ| = 4 × 2 = 8 entradas."
        },
        {
          question: "¿Un DFA puede tener más de un estado inicial q₀?",
          options: ["No, debe tener estrictamente UN SOLO estado inicial q₀", "Sí, hasta 3", "Sí, infinitos"],
          answerIndex: 0,
          explanation: "Por definición determinista, todo DFA posee un único estado de partida q₀ ∈ Q."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de DFA como Tupla de 5 elementos: M = (Q, Σ, δ, q₀, F). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conjunto de Estados Q, Estado Inicial q₀ y Estados de Aceptación F. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Función de Transición Total δ: Q × Σ → Q?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Función de Transición Total δ: Q × Σ → Q", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Función de Transición Total δ: Q × Σ → Q. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Tabla de Transiciones y Diagrama de Estados?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Tabla de Transiciones y Diagrama de Estados", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tabla de Transiciones y Diagrama de Estados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Evaluación de Cadenas y Lenguaje Aceptado L(M)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Evaluación de Cadenas y Lenguaje Aceptado L(M)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Evaluación de Cadenas y Lenguaje Aceptado L(M). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)",
      description: "No determinismo, transiciones vacías ε y el algoritmo de Construcción de Subconjuntos.",
      items: [
      "Definición Formal de NFA: Función δ: Q × Σ → P(Q).",
      "Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure).",
      "Modelado de opciones múltiples y cómputo en árbol.",
      "Equivalencia de Poder Expresivo: NFA ≡ DFA.",
      "Algoritmo de Construcción de Subconjuntos (Subset Construction).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)\n\nNo determinismo, transiciones vacías ε y el algoritmo de Construcción de Subconjuntos.\n\nUn Autómata Finito No Determinista (NFA) permite que desde un mismo estado y con un mismo símbolo existan MÚLTIPLES estados siguientes posibles, o incluso transiciones espontáneas sin consumir ningún símbolo (transiciones ε). Aunque un NFA parece más potente, el Teorema de Equivalencia demuestra que todo NFA puede convertirse a un DFA equivalente mediante el Algoritmo de Construcción de Subconjuntos, aunque el DFA resultante puede tener hasta 2^|Q| estados.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Definición Formal de NFA: Función δ: Q × Σ → P(Q).\n· Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure).\n· Modelado de opciones múltiples y cómputo en árbol.\n· Equivalencia de Poder Expresivo: NFA ≡ DFA.\n· Algoritmo de Construcción de Subconjuntos (Subset Construction).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Definición Formal de NFA: Función δ: Q × Σ → P(Q).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición Formal de NFA: Función δ: Q × Σ → P(Q). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición Formal de NFA: Función δ: Q × Σ → P(Q).» y cuándo lo evitarías.\n\n## 2. Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure).» y cuándo lo evitarías.\n\n## 3. Modelado de opciones múltiples y cómputo en árbol.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Modelado de opciones múltiples y cómputo en árbol. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Modelado de opciones múltiples y cómputo en árbol.» y cuándo lo evitarías.\n\n## 4. Equivalencia de Poder Expresivo: NFA ≡ DFA.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Equivalencia de Poder Expresivo: NFA ≡ DFA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Equivalencia de Poder Expresivo: NFA ≡ DFA.» y cuándo lo evitarías.\n\n## 5. Algoritmo de Construcción de Subconjuntos (Subset Construction).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmo de Construcción de Subconjuntos (Subset Construction). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmo de Construcción de Subconjuntos (Subset Construction).» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε).\n\n**Qué es y por qué importa.** Dentro de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\n**Ejemplo 2:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\n**Ejemplo 3:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\nEstos casos muestran por qué AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Cálculo de Clausura-ε (ε-closure) en Python
def epsilon_closure(estados_iniciales: set, transiciones_eps: dict) -> set:
    stack = list(estados_iniciales)
    closure = set(estados_iniciales)
    while stack:
        estado = stack.pop()
        vecinos_eps = transiciones_eps.get(estado, set())
        for v in vecinos_eps:
            if v not in closure:
                closure.add(v)
                stack.append(v)
    return closure

# Transiciones epsilon: Q0 -ε-> Q1, Q1 -ε-> Q2
eps_map = {'Q0': {'Q1'}, 'Q1': {'Q2'}}
print(f"Clausura-ε de {{Q0}}: {epsilon_closure({'Q0'}, eps_map)}") # {'Q0', 'Q1', 'Q2'}`,
      quiz: [
        {
          question: "¿Cuál es la principal diferencia formal entre la función de transición de un DFA y un NFA?",
          options: ["En el NFA la función devuelve un subconjunto de estados P(Q) en lugar de un solo estado Q", "El NFA no usa alfabeto", "El DFA no tiene estados finales"],
          answerIndex: 0,
          explanation: "En un NFA, δ(q, s) produce un elemento del conjunto potencia P(Q), permitiendo 0, 1 o múltiples estados siguientes."
        },
        {
          question: "¿Qué representa una transición vacía ε (ε-transition) en un NFA-ε?",
          options: ["Un error de sintaxis", "Un cambio de estado espontáneo sin consumir ningún símbolo de la cadena de entrada", "Un bucle infinito"],
          answerIndex: 1,
          explanation: "Las transiciones ε permiten al autómata cambiar de estado inmediatamente sin avanzar el puntero de lectura de la cadena."
        },
        {
          question: "Si un NFA tiene N estados, ¿cuál es el número MÁXIMO de estados que podría tener su DFA equivalente tras la Construcción de Subconjuntos?",
          options: ["N²", "2ᴺ", "N!"],
          answerIndex: 1,
          explanation: "Cada estado del DFA representa un subconjunto de estados del NFA. Como un conjunto de N elementos tiene 2ᴺ subconjuntos, el peor caso es 2ᴺ."
        },
        {
          question: "¿Un NFA reconoce lenguajes que un DFA NO pueda reconocer?",
          options: ["Sí, los NFA son más potentes", "No, ambos reconocen exactamente la misma clase de Lenguajes Regulares", "Solo si tienen transiciones ε"],
          answerIndex: 1,
          explanation: "DFA y NFA poseen exactamente el mismo poder expresivo: ambos reconocen la familia de Lenguajes Regulares."
        },
        {
          question: "¿Qué es la Clausura-ε (ε-closure) de un estado q?",
          options: ["El conjunto de estados alcanzables desde q usando únicamente cero o más transiciones ε", "El último estado del autómata", "Un conjunto vacío"],
          answerIndex: 0,
          explanation: "La clausura-ε engloba al estado q y a todos los estados a los que se puede llegar mediante saltos ε continuos."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Definición Formal de NFA: Función δ: Q × Σ → P(Q)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición Formal de NFA: Función δ: Q × Σ → P(Q)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de NFA: Función δ: Q × Σ → P(Q). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Transiciones Vacías ε (NFA-ε) y Clausura-ε (ε-closure). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Modelado de opciones múltiples y cómputo en árbol?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Modelado de opciones múltiples y cómputo en árbol", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Modelado de opciones múltiples y cómputo en árbol. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Equivalencia de Poder Expresivo: NFA ≡ DFA?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Equivalencia de Poder Expresivo: NFA ≡ DFA", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Equivalencia de Poder Expresivo: NFA ≡ DFA. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Algoritmo de Construcción de Subconjuntos (Subset Construction)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Algoritmo de Construcción de Subconjuntos (Subset Construction)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmo de Construcción de Subconjuntos (Subset Construction). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE",
      description: "Patrones sintácticos, operadores algebraicos de lenguajes y equivalencia con autómatas.",
      items: [
      "Sintaxis y Semántica de Expresiones Regulares (Regex).",
      "Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*).",
      "Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA.",
      "Algoritmo de Thompson: Conversión de Regex a NFA-ε.",
      "Algoritmo de McNaughton-Yamada-Thompson.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE\n\nPatrones sintácticos, operadores algebraicos de lenguajes y equivalencia con autómatas.\n\nUna Expresión Regular (Regex) es una notación algebraica para especificar patrones de cadenas. El Teorema de Kleene es uno de los pilares de la teoría: demuestra que una expresión regular, un DFA y un NFA son formalmente equivalentes y reconocen exactamente la misma clase de Lenguajes Regulares. El Algoritmo de Thompson permite convertir cualquier Regex en un NFA-ε mediante componentes modulares simples.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Sintaxis y Semántica de Expresiones Regulares (Regex).\n· Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*).\n· Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA.\n· Algoritmo de Thompson: Conversión de Regex a NFA-ε.\n· Algoritmo de McNaughton-Yamada-Thompson.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Sintaxis y Semántica de Expresiones Regulares (Regex).\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Sintaxis y Semántica de Expresiones Regulares (Regex). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Sintaxis y Semántica de Expresiones Regulares (Regex).» y cuándo lo evitarías.\n\n## 2. Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*).\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*).» y cuándo lo evitarías.\n\n## 3. Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA.» y cuándo lo evitarías.\n\n## 4. Algoritmo de Thompson: Conversión de Regex a NFA-ε.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmo de Thompson: Conversión de Regex a NFA-ε. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmo de Thompson: Conversión de Regex a NFA-ε.» y cuándo lo evitarías.\n\n## 5. Algoritmo de McNaughton-Yamada-Thompson.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmo de McNaughton-Yamada-Thompson. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmo de McNaughton-Yamada-Thompson.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE.\n\n**Qué es y por qué importa.** Dentro de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\n**Ejemplo 2:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\n**Ejemplo 3:** re.match() en Python compila tu regex a un autómata finito; patrones mal diseñados pueden ser exponenciales en el peor caso.\n\nEstos casos muestran por qué EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Uso del motor Regex interno de Python (re)
import re

patron_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
evaluador = re.compile(patron_email)

print(f"¿'contacto@quimisell.com' válido?: {bool(evaluador.match('contacto@quimisell.com'))}") # True
print(f"¿'correo_invalido.com' válido?: {bool(evaluador.match('correo_invalido.com'))}")       # False`,
      quiz: [
        {
          question: "¿Qué establece el Teorema de Kleene?",
          options: ["Que todos los lenguajes son computables", "Que la clase de lenguajes definibles por Regex es idéntica a la aceptada por Autómatas Finitos", "Que las gramáticas libres de contexto usan pilas"],
          answerIndex: 1,
          explanation: "El Teorema de Kleene demuestra la equivalencia absoluta entre Expresiones Regulares, NFA y DFA."
        },
        {
          question: "En una expresión regular, ¿qué cadena(s) genera el patrón (a|b)*?",
          options: ["Únicamente cadenas formadas por la letra a", "Cualquier cadena de cualquier longitud compuesta por a y b (incluyendo la cadena vacía ε)", "Solo la cadena 'ab'"],
          answerIndex: 1,
          explanation: "(a|b)* representa la clausura de Kleene sobre las letras a y b, generando cualquier combinación posible de ellas, así como ε."
        },
        {
          question: "¿Qué algoritmo convierte directamente una Expresión Regular en un NFA-ε?",
          options: ["Algoritmo de Thompson", "Algoritmo de Dijkstra", "Algoritmo de Euclides"],
          answerIndex: 0,
          explanation: "El Algoritmo de Construcción de Thompson construye autómatas recursivos para cada operador regular (concatenación, unión, Kleene)."
        },
        {
          question: "¿Cuál es el resultado de aplicar la concatenación ab a los lenguajes L₁ = {a} y L₂ = {b, c}?",
          options: ["{ab, ac}", "{a, b, c}", "{ba, ca}"],
          answerIndex: 0,
          explanation: "La concatenación L₁L₂ junta cada elemento de L₁ con cada elemento de L₂ en orden: {ab, ac}."
        },
        {
          question: "¿Qué operador representa la alternancia o unión en expresiones regulares?",
          options: ["*", "| (o +)", "·"],
          answerIndex: 1,
          explanation: "El símbolo | (o +) denota disyunción o alternancia: la cadena puede cumplir la opción izquierda O la opción derecha."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Sintaxis y Semántica de Expresiones Regulares (Regex)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Sintaxis y Semántica de Expresiones Regulares (Regex)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sintaxis y Semántica de Expresiones Regulares (Regex). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kl...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Operadores Básicos: Concatenación, Alternancia (|) y Clausura de Kleene (*). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Teorema de Kleene: Lenguajes Regulares ≡ Regex ≡ DFA ≡ NFA. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Algoritmo de Thompson: Conversión de Regex a NFA-ε?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Algoritmo de Thompson: Conversión de Regex a NFA-ε", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmo de Thompson: Conversión de Regex a NFA-ε. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Algoritmo de McNaughton-Yamada-Thompson?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Algoritmo de McNaughton-Yamada-Thompson", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmo de McNaughton-Yamada-Thompson. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES",
      description: "Demostración rigurosa por contradicción para probar que un lenguaje NO es regular.",
      items: [
      "Límites de los Autómatas Finitos (Falta de memoria infinita/conteo).",
      "Enunciado del Lema del Bombeo para Lenguajes Regulares.",
      "Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1.",
      "Demostración por Contradicción (Proof by Contradiction).",
      "Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES\n\nDemostración rigurosa por contradicción para probar que un lenguaje NO es regular.\n\nDado que los Autómatas Finitos tienen memoria finita (un número fijo de estados Q), NO pueden contar cantidades arbitrariamente grandes. Para demostrar rigurosamente que un lenguaje NO es regular, se utiliza el Lema del Bombeo (Pumping Lemma). Este establece que si un lenguaje L fuera regular, cualquier cadena suficientemente larga w (con |w| ≥ p) podría dividirse en 3 partes w = xyz de modo que la parte central y se pueda 'bombear' (repetir yⁱ para cualquier i ≥ 0) y la cadena resultante siga perteneciendo a L. Si al bombear y se genera una cadena fuera de L, se prueba por contradicción que L NO es regular.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Límites de los Autómatas Finitos (Falta de memoria infinita/conteo).\n· Enunciado del Lema del Bombeo para Lenguajes Regulares.\n· Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1.\n· Demostración por Contradicción (Proof by Contradiction).\n· Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Límites de los Autómatas Finitos (Falta de memoria infinita/conteo).\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Límites de los Autómatas Finitos (Falta de memoria infinita/conteo). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Límites de los Autómatas Finitos (Falta de memoria infinita/conteo).» y cuándo lo evitarías.\n\n## 2. Enunciado del Lema del Bombeo para Lenguajes Regulares.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Enunciado del Lema del Bombeo para Lenguajes Regulares. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Enunciado del Lema del Bombeo para Lenguajes Regulares.» y cuándo lo evitarías.\n\n## 3. Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1.» y cuándo lo evitarías.\n\n## 4. Demostración por Contradicción (Proof by Contradiction).\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Demostración por Contradicción (Proof by Contradiction). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Demostración por Contradicción (Proof by Contradiction).» y cuándo lo evitarías.\n\n## 5. Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES.\n\n**Qué es y por qué importa.** Dentro de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES, este punto es central en teoría de la computación, lenguajes formales y compiladores. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\n**Ejemplo 2:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\n**Ejemplo 3:** Los compiladores optimizan LLVM IR antes de generar assembly; la fase de análisis semántico detecta tipos incompatibles.\n\nEstos casos muestran por qué LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Conceptualización en Python: Por qué un DFA no puede reconocer a^n b^n
def simular_contador_a_n_b_n(cadena: str) -> bool:
    # Un DFA requiere un estado por cada 'n'. Para 'n' infinito necesitaría infinitos estados.
    # Por ende a^n b^n no es un Lenguaje Regular.
    contador_a = 0
    i = 0
    while i < len(cadena) and cadena[i] == 'a':
        contador_a += 1
        i += 1
    contador_b = 0
    while i < len(cadena) and cadena[i] == 'b':
        contador_b += 1
        i += 1
    return i == len(cadena) and contador_a == contador_b

print(f"¿'aaabbb' cumple a^n b^n?: {simular_contador_a_n_b_n('aaabbb')}") # True`,
      quiz: [
        {
          question: "¿Para qué se utiliza principalmente el Lema del Bombeo (Pumping Lemma)?",
          options: ["Para construir un DFA rápido", "Para DEMOSTRAR por contradicción que un lenguaje dado NO es regular", "Para optimizar expresiones regulares"],
          answerIndex: 1,
          explanation: "El Pumping Lemma es una prueba negativa: si un lenguaje viola las condiciones del lema, se demuestra categóricamente que no es regular."
        },
        {
          question: "¿Por qué el lenguaje L = {aⁿbⁿ | n ≥ 0} (mismo número de a's que de b's) NO es un lenguaje regular?",
          options: ["Porque requiere memoria arbitraria para contar el número de a's y compararlo con b's, lo cual supera los estados finitos de un DFA", "Porque no usa el alfabeto correcto", "Porque no tiene cadenas vacías"],
          answerIndex: 0,
          explanation: "Un DFA tiene un número fijo de estados Q. Para comparar n a's con n b's para cualquier n arbitrario, requeriría infinitos estados."
        },
        {
          question: "En la descomposición w = xyz del Lema del Bombeo, ¿qué condición debe cumplir la subcadena y?",
          options: ["|y| = 0", "|y| ≥ 1 (la subcadena y no puede ser vacía)", "|y| > p"],
          answerIndex: 1,
          explanation: "El fragmento a bombear y debe contener al menos 1 símbolo (|y| ≥ 1), de lo contrario al repetir yⁱ no cambiaría la cadena."
        },
        {
          question: "Si un lenguaje L satisface el Lema del Bombeo, ¿demuestra automáticamente que el lenguaje ES regular?",
          options: ["Sí, es una condición necesaria y suficiente", "No, el lema es una condición necesaria pero NO suficiente (existen lenguajes no regulares que cumplen el lema)", "Solo si el alfabeto es binario"],
          answerIndex: 1,
          explanation: "El Pumping Lemma sirve para desmentir regularidad. Cumplir el lema no garantiza 100% que sea regular (es una prueba unidireccional)."
        },
        {
          question: "¿Qué representa la constante 'p' en el Lema del Bombeo?",
          options: ["El número de estados de la gramática", "La longitud de bombeo (Pumping Length), correspondiente al número de estados del DFA", "El número de símbolos del alfabeto"],
          answerIndex: 1,
          explanation: "p es la longitud mínima a partir de la cual se garantiza que cualquier cadena de L debe repetir al menos un estado (Principio del Palomar)."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Límites de los Autómatas Finitos (Falta de memoria infinita/conteo)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Límites de los Autómatas Finitos (Falta de memoria infinita/conteo)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Límites de los Autómatas Finitos (Falta de memoria infinita/conteo). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Enunciado del Lema del Bombeo para Lenguajes Regulares?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Enunciado del Lema del Bombeo para Lenguajes Regulares", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Enunciado del Lema del Bombeo para Lenguajes Regulares. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Descomposición de cadenas w = xyz con |xy| ≤ p y |y| ≥ 1. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Demostración por Contradicción (Proof by Contradiction)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Demostración por Contradicción (Proof by Contradiction)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Demostración por Contradicción (Proof by Contradiction). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN",
      description: "Especificación formal de la sintaxis de lenguajes de programación mediante reglas de producción.",
      items: [
      "Definición Formal de CFG: G = (V, Σ, R, S).",
      "Variables No-Terminales (V), Terminales (Σ) y Reglas de Producción (R).",
      "Derivación por la Izquierda (Leftmost) y por la Derecha (Rightmost).",
      "Árboles de Derivación Sintáctica (Parse Trees).",
      "Ambigüedad Gramatical y Gramáticas No Ambiguas.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: GRAMÁTICAS LIBRES DE CONTEXTO (CFG), DERIVACIONES, ÁRBOLES Y AMBIGÜEDAD\n\nTras dominar los lenguajes regulares y sus límites (como el reconocimiento de \\(a^n b^n\\)), abrimos la puerta a los **lenguajes libres de contexto** (LLC): la clase formal que modela casi toda la sintaxis de los lenguajes de programación. Una gramática libre de contexto (CFG, del inglés *context-free grammar*) no describe cómo ordenar caracteres en una línea de texto, sino cómo **ensamblar estructuras jerárquicas**: expresiones dentro de paréntesis, listas de declaraciones, bloques anidados, llamadas a funciones con argumentos, y árboles de tipos.\n\nLa diferencia conceptual es profunda: el lexer (módulos anteriores) responde «¿qué símbolos hay y en qué orden lineal?». La gramática responde «¿cómo se agrupan esos símbolos en construcciones con sentido?». Por eso las CFG son la especificación estándar de parsers en compiladores: Yacc/Bison, ANTLR, la gramática de Python o la de C++ se expresan como reglas de producción.\n\nEn esta lección construiremos la intuición formal \\(G = (V, \\Sigma, R, S)\\), practicaremos derivaciones leftmost y rightmost, leeremos árboles de derivación como «radiografías» de una cadena, y entenderemos por qué la **ambigüedad** obliga a rediseñar gramáticas antes de implementar un compilador serio.\n\n## Objetivos de la lección\n\n- Definir formalmente una CFG y distinguir terminales, no terminales, reglas y símbolo inicial.\n- Realizar derivaciones leftmost y rightmost sobre gramáticas pequeñas hasta obtener cadenas concretas.\n- Construir y leer árboles de derivación (parse trees) y relacionarlos con precedencia de operadores.\n- Reconocer gramáticas ambiguas y aplicar transformaciones clásicas para eliminar ambigüedad en expresiones aritméticas.\n- Conectar la noción de LLC con el reconocimiento por autómata de pila (módulo siguiente).\n\n## Desarrollo de la lección\n\n### Definición formal: \\(G = (V, \\Sigma, R, S)\\)\n\nUna gramática libre de contexto es una cuaterna:\n\n- **\\(V\\)**: conjunto finito de **variables** (no terminales), suele escribirse con mayúsculas: \\(E, T, F, Stmt, Expr\\).\n- **\\(\\Sigma\\)**: alfabeto de **terminales** (tokens reales del lenguaje: `+`, `if`, identificadores, números).\n- **\\(R\\)**: conjunto finito de **reglas de producción** de la forma \\(A \\rightarrow \\alpha\\), donde \\(A \\in V\\) y \\(\\alpha \\in (V \\cup \\Sigma)^*\\) (cadena, posiblemente vacía \\(\\epsilon\\)).\n- **\\(S\\)**: símbolo **inicial** (axioma), \\(S \\in V\\).\n\nLa palabra «libre de contexto» significa que al reemplazar \\(A\\) por \\(\\alpha\\) **no importa** qué símbolos rodean a \\(A\\) en la cadena intermedia. Eso contrasta con gramáticas sensibles al contexto (tipo 1 en Chomsky), donde el reemplazo puede depender del entorno.\n\n**Ejemplo — expresiones aritméticas mínimas**\n\n\\[\n\\begin{aligned}\nE &\\rightarrow E + T \\mid T \\\\\nT &\\rightarrow T * F \\mid F \\\\\nF &\\rightarrow (E) \\mid \\textbf{num}\n\\end{aligned}\n\\]\n\nAquí \\(V = \\{E, T, F\\}\\), \\(\\Sigma\\) incluye `+`, `*`, `(`, `)`, y el terminal abstracto `num`. \\(S = E\\).\n\n### Lenguaje generado y derivaciones\n\nEl **lenguaje** \\(L(G)\\) es el conjunto de cadenas de terminales que se pueden derivar desde \\(S\\) aplicando reglas repetidamente hasta que no queden no terminales.\n\nSea una **cadena sentencial** cualquier elemento de \\((V \\cup \\Sigma)^*\\) alcanzable desde \\(S\\). Una **derivación** es una secuencia de pasos donde en cada paso se elige un no terminal y se aplica una regla.\n\n- **Derivación leftmost (más a la izquierda)**: en cada paso se expande el no terminal **más a la izquierda** todavía presente. Es la convención que siguen muchos parsers LL.\n- **Derivación rightmost**: se expande el no terminal más a la derecha; habitual en parsers LR.\n\n**Ejemplo paso a paso** — derivar la cadena `num + num * num` con la gramática anterior (versión ambigua simplificada sin niveles \\(E,T,F\\) — ver más abajo la versión no ambigua).\n\nCon gramática ambigua clásica \\(E \\rightarrow E + E \\mid E * E \\mid num\\), una derivación leftmost para `num + num * num` podría comenzar:\n\n1. \\(E \\Rightarrow E + E\\)\n2. \\(E + E \\Rightarrow \\textbf{num} + E\\)\n3. \\(\\textbf{num} + E \\Rightarrow \\textbf{num} + E * E\\)\n4. \\(\\textbf{num} + E * E \\Rightarrow \\textbf{num} + \\textbf{num} * E\\)\n5. \\(\\textbf{num} + \\textbf{num} * E \\Rightarrow \\textbf{num} + \\textbf{num} * \\textbf{num}\\)\n\nObserva que en el paso 1 elegimos \\(E + E\\) en lugar de \\(E * E\\): diferente elección temprana cambia el árbol final (precedencia).\n\n### Árboles de derivación (parse trees)\n\nUn **árbol de derivación** representa visualmente la jerarquía sintáctica:\n\n- La **raíz** es \\(S\\) (o el no terminal inicial de la derivación).\n- Cada nodo interno es un no terminal; sus hijos, leídos de izquierda a derecha, corresponden al lado derecho de una producción aplicada.\n- Las **hojas**, de izquierda a derecha, forman la cadena terminal derivada.\n\nPara `num + num * num` con la gramática no ambigua en tres niveles:\n\n\\[\nE \\rightarrow E + T \\mid T,\\quad T \\rightarrow T * F \\mid F,\\quad F \\rightarrow \\textbf{num}\n\\]\n\nel árbol fuerza que `*` quede **más profundo** (más cerca de las hojas numéricas) que `+`, implementando que la multiplicación tiene mayor prioridad que la suma.\n\nSi dibujas el árbol:\n\n- Raíz \\(E\\) con hijos: subárbol \\(E\\) (suma), terminal `+`, subárbol \\(T\\) (producto).\n- El subárbol de producto \\(T\\) tiene hijos \\(T\\), `*`, \\(F\\) con números en hojas.\n\n**Propiedad clave**: distintas derivaciones que producen el **mismo** árbol se consideran equivalentes; el problema surge cuando **dos árboles distintos** generan la **misma** cadena terminal — ahí nace la ambigüedad.\n\n### Ambigüedad: definición y por qué importa en compiladores\n\nUna gramática \\(G\\) es **ambigua** si existe alguna cadena \\(w \\in L(G)\\) con **al menos dos** árboles de derivación distintos (equivalentemente, dos derivaciones leftmost distintas, o dos rightmost distintas).\n\nLa gramática \\(E \\rightarrow E + E \\mid E * E \\mid num\\) es el ejemplo canónico: `num + num * num` puede interpretarse como \\((\\textbf{num} + \\textbf{num}) * \\textbf{num}\\) o \\(\\textbf{num} + (\\textbf{num} * \\textbf{num})\\).\n\nEn un compilador, cada árbol suele mapear a distinta semántica (distinto orden de evaluación, distinto código generado). Por eso los lenguajes de programación **no adoptan gramáticas ambiguas** para su núcleo expresivo: reescriben producciones introduciendo niveles \\(E\\), \\(T\\), \\(F\\) o declaran precedencias y asociatividad en la especificación del parser.\n\n**Técnicas habituales para desambiguar expresiones**\n\n1. **Factorización por precedencia**: un no terminal por nivel de prioridad.\n2. **Asociatividad**: para `+` asociativo a izquierda, evita producciones como \\(E \\rightarrow T + E\\) si quieres evaluar de izquierda a derecha; la forma \\(E \\rightarrow E + T\\) fuerza que el siguiente operando quede a la derecha en el árbol.\n3. **Precedencia declarada** (en generadores de parsers): reglas numéricas en Yacc/Bison sin cambiar la CFG manualmente.\n\n### Gramáticas para estructuras de programa\n\nMás allá de expresiones, las CFG modelan:\n\n- **Listas**: \\(StmtList \\rightarrow Stmt \\ StmtList \\mid \\epsilon\\)\n- **Condicionales**: \\(Stmt \\rightarrow \\textbf{if}\\ (Expr)\\ Stmt \\mid \\textbf{if}\\ (Expr)\\ Stmt\\ \\textbf{else}\\ Stmt\\)\n- **Bloques balanceados**: \\(S \\rightarrow SS \\mid (S) \\mid \\epsilon\\) genera paréntesis balanceados; es LLC y no regular.\n\nCada construcción anidada refleja un subárbol en el parse tree, que luego el análisis semántico recorrerá para construir el AST (simplificando nodos de «ruido» gramatical).\n\n### Relación con autómatas de pila (adelanto)\n\nTeorema fundamental (estudiaremos en detalle en el módulo 7): **un lenguaje es libre de contexto si y solo si es aceptado por algún autómata de pila (PDA)**. La CFG da una **generadora** (construye cadenas); el PDA da un **reconocedor** (verifica pertenencia). En compiladores, casi siempre diseñamos gramática + parser descendente o LR en lugar de simular el PDA directamente, pero la equivalencia explica por qué anidar paréntesis requiere «memoria» (pila) y no basta un DFA.\n\n### Ejemplo extendido: paréntesis balanceados\n\nConsidere \\(G\\) con \\(S \\rightarrow SS \\mid (S) \\mid \\epsilon\\), lenguaje de paréntesis balanceados sobre un solo par de delimitadores. Para la cadena `(()())` una derivación leftmost podría ser:\n\n1. \\(S \\Rightarrow (S)\\)\n2. \\((S) \\Rightarrow (SS)\\)\n3. \\((SS) \\Rightarrow ((S)S)\\)\n4. \\(((S)S) \\Rightarrow (()S)\\)\n5. \\(()S) \\Rightarrow (() (S))\\)\n6. \\((() (S)) \\Rightarrow (() ())\\)\n\nCada paso elige un \\(S\\) a expandir; el árbol resultante tiene raíz \\(S\\) con dos hijos \\(S\\) en el nivel superior interior del paréntesis externo, mostrando cómo la concatenación \\(SS\\) modela palabras balanceadas una al lado de la otra. Este lenguaje ya no es regular: el lema del bombeo para regulares falla al intentar «recordar» cuántos `(` faltan cerrar. La CFG lo expresa naturalmente; el PDA lo reconoce empujando y sacando de la pila.\n\n### Producciones \\(\\epsilon\\) y limpieza de gramáticas\n\nMuchas gramáticas incluyen \\(A \\rightarrow \\epsilon\\) para listas vacías (declaraciones opcionales, argumentos vacíos). Una cadena sentencial que contiene solo no terminales puede derivar \\(\\epsilon\\) si hay una cadena de \\(\\epsilon\\)-producciones. En compiladores, las listas se modelan como \\(List \\rightarrow Item\\ List \\mid \\epsilon\\). Al eliminar \\(\\epsilon\\)-producciones y producciones unitarias (\\(A \\rightarrow B\\)) antes de convertir a Forma Normal de Chomsky (módulo 7), se evitan pasos redundantes en algoritmos automáticos de parsing. La limpieza **no cambia** el lenguaje generado (salvo el caso especial de si el axioma deriva \\(\\epsilon\\)).\n\n### Tabla comparativa: regular vs libre de contexto\n\n| Pregunta | Lenguaje regular | LLC |\n|----------|------------------|-----|\n| ¿Memoria finita suficiente? | Sí (DFA/NFA) | No; hace falta pila para contar/anidar |\n| ¿Ejemplo típico? | identificadores, números sin contexto | expresiones anidadas, paréntesis |\n| ¿Forma de regla? | A → uA v o restricciones (tipo 3) | A → α con un solo no terminal a la izquierda |\n| ¿Uso en compilador? | Lexer | Parser sintáctico |\n\nMemorizar esta tabla evita errores frecuentes en exámenes donde piden un DFA para un lenguaje LLC.\n\n### Gramáticas para listas y sentencias (fragmento de lenguaje imperativo)\n\n```\nProgram → StmtList\nStmtList → Stmt StmtList | ε\nStmt → id = Expr ; | if (Expr) Stmt | if (Expr) Stmt else Stmt | { StmtList }\nExpr → Expr + Term | Term\nTerm → id | num | (Expr)\n```\n\nCada regla « StmtList → Stmt StmtList » encadena sentencias; \\(\\epsilon\\) permite bloque vacío (en lenguajes que lo permiten). El árbol de `a=1; b=2;` es profundo a la izquierda en la lista, típico de derivaciones leftmost para sentencias secuenciales.\n\n### Eliminación de ambigüedad del «dangling else»\n\nEn la gramática ingenua `Stmt → if (E) Stmt | if (E) Stmt else Stmt`, la cadena `if (E1) if (E2) S else S'` admite un árbol donde el `else` enlaza al `if` interno y otro donde enlaza al externo. Solución clásica: duplicar producciones con `StmtNoElse` vs `Stmt` completo, forzando que `else` solo aparezca cuando el `if` interno no lo absorbe ilegítimamente.\n\n### Predicados y gramáticas atribuidas (puente a semántica)\n\nAlgunas restricciones «declarar antes de usar» **no** son CFG puras: requieren atributos semánticos o símbolos de tabla durante parsing. Parser LR resuelve mucha sintaxis; el analizador semántico del módulo 12 cierra huecos que CFG sola no expresa.\n\n## Demostración enlazada al código del módulo\n\nEl snippet del módulo define `GramaticaExpresiones`, un validador **lineal** sobre una lista de tokens que alterna «número – operador – número – operador – …». Aunque el comentario menciona \\(E \\rightarrow E + T\\), la implementación **no construye un árbol**: solo verifica que la secuencia tenga la forma regular \\(num\\ (op\\ num)^*\\) con `op` en `{+, *}`.\n\nLínea por línea:\n\n- `expect_num = True` codifica que el siguiente token debe ser un número (estado de una máquina de estados finita sobre tokens).\n- Si llega un dígito cuando se espera número, consume y pasa a esperar operador.\n- Si llega `+` o `*` cuando se espera operador, vuelve a esperar número.\n- Cualquier desviación retorna `False`.\n- Al final, `return not expect_num` exige terminar justo después de un número (no colgar en «espero operador»).\n\n**Limitación pedagógica útil**: `'5 + 3 * 2'` pasa la validación, pero el código **no distingue** si la multiplicación agrupa antes que la suma; para eso necesitarías el parser con gramática no ambigua o un árbol. El salto del módulo 6 al 11 es precisamente pasar de este chequeo superficial al AST con precedencia correcta.\n\nPrueba mental: tokeniza `'5 + + 3'` como `['5', '+', '+', '3']`. El bucle ve el segundo `+` cuando `expect_num` sigue siendo `True` (porque tras el primer `+` esperábamos número, no otro operador) y devuelve `False`. Ese comportamiento coincide con un rechazo sintáctico temprano, aunque un mensaje de error de producción reportaría la posición del token inesperado. Extender el snippet a un árbol sería el siguiente refactor: cada vez que consumes un `num`, creas un nodo hoja; cada operador binario une dos subárboles ya construidos según la gramática no ambigua.\n\n## Aplicaciones en sistemas reales\n\n**Clang / LLVM para C++**: la gramática del frontend de Clang (derivada de la especificación del lenguaje) usa cientos de producciones; ambigüedades históricas (p.ej. «most vexing parse») se resuelven con reglas de disambiguación en el parser, no dejando al árbol elegir al azar.\n\n**ANTLR en servicios de API**: muchas empresas generan parsers ANTLR a partir de una `.g4` CFG para lenguajes de consulta internos (DSL de métricas, filtros de logs). Un error de ambigüedad en la gramática se detecta al generar el parser; si pasa, el lexer/parser puede producir árboles incorrectos en producción.\n\n**JSON (RFC 8259)**: aunque JSON no es un lenguaje de programación completo, su sintaxis de objetos y arreglos anidados es LLC; parsers como los de `serde_json` (Rust) o `encoding/json` (Go) implementan reconocimiento equivalente a una CFG con pila implícita para validar balanceo de `{` y `[`.\n\n## Errores clásicos en examen\n\n- Confundir **\\(V\\)** (no terminales) con **\\(\\Sigma\\)** (terminales) al escribir \\(G = (V, \\Sigma, R, S)\\).\n- Creer que «libre de contexto» significa que no importa el contexto del programa (scope, tipos); eso es **semántica**, no la definición formal de CFG.\n- Afirmar que toda derivación leftmost es única: es única **solo si la gramática es no ambigua** para esa cadena.\n- Mostrar un árbol donde los hijos de un nodo no coinciden con ninguna producción \\(A \\rightarrow X_1 \\ldots X_k\\).\n- Intentar demostrar ambigüedad exhibiendo **una** derivación distinta sin construir **dos árboles** (o dos leftmost) que produzcan la **misma** cadena terminal.\n\n## Preguntas de entrevista\n\n**P: ¿Por qué la gramática \\(E \\rightarrow E + E \\mid E * E \\mid \\textbf{id}\\) es ambigua y cómo la arreglarías?**\n\n**R:** Es ambigua porque una cadena como `id + id * id` admite al menos dos árboles: uno agrupa la suma antes que el producto y otro al revés. Se arregla introduciendo niveles de precedencia, por ejemplo \\(E \\rightarrow E + T \\mid T\\), \\(T \\rightarrow T * F \\mid F\\), \\(F \\rightarrow (\\textbf{id}) \\mid \\textbf{id}\\), de modo que `*` siempre quede más bajo que `+` en el árbol.\n\n**P: ¿Cuál es la diferencia entre un árbol de derivación y un AST?**\n\n**R:** El árbol de derivación refleja **todas** las expansiones gramaticales (incluye nodos auxiliares como reglas de lista vacía o niveles \\(T, F\\)). El AST es una vista **abstracta** del programa: elimina nodos redundantes y conserva la estructura semántica (operadores, declaraciones, bloques). El parser suele construir primero un concrete syntax tree y luego lo simplifica a AST.\n\n## Síntesis y checklist antes de avanzar\n\n- Puedo escribir \\(G = (V, \\Sigma, R, S)\\) para una mini-gramática de expresiones o de paréntesis balanceados.\n- Realicé al menos una derivación leftmost completa hasta terminales.\n- Dibujé un parse tree y leí la cadena en las hojas de izquierda a derecha.\n- Expliqué ambigüedad con el ejemplo `id + id * id` y la solución por precedencia.\n- Entiendo que el snippet del módulo valida forma tokenizada pero **no** resuelve precedencia.\n- Estoy listo para el módulo 7: PDA, CNF y algoritmo CYK como reconocimiento de LLC.",
      codeSnippet: `# Ejemplo de Parser Gramatical simple en Python para expresiones
# Gramática: E -> E + T | T, T -> num
class GramaticaExpresiones:
    def es_expresion_valida(self, tokens: list) -> bool:
        # Verifica estructura simple (num + num + ...)
        if not tokens: return False
        expect_num = True
        for tok in tokens:
            if expect_num and tok.isdigit():
                expect_num = False
            elif not expect_num and tok in ['+', '*']:
                expect_num = True
            else:
                return False
        return not expect_num

cfg = GramaticaExpresiones()
print(f"¿'5 + 3 * 2' sintácticamente válida?: {cfg.es_expresion_valida(['5', '+', '3', '*', '2'])}") # True`,
      quiz: [
        {
          question: "En la definición formal de una Gramática Libre de Contexto G = (V, Σ, R, S), ¿qué representa V?",
          options: ["El conjunto de símbolos terminales", "El conjunto de variables No-Terminales (variables sintácticas)", "Las reglas de transformación final"],
          answerIndex: 1,
          explanation: "V representa el conjunto de símbolos no terminales que se van reemplazando secuencialmente mediante las reglas de producción."
        },
        {
          question: "¿Por qué la Ambigüedad en una Gramática Libre de Contexto es un problema grave para un compilador?",
          options: ["Porque hace que el programa sea más lento", "Porque una misma línea de código podría generar dos árboles de sintaxis diferentes con significados o precedencias contrapuestas", "Porque consume mucha RAM"],
          answerIndex: 1,
          explanation: "La ambigüedad provoca que el compilador no pueda determinar la prioridad correcta de operadores (ej: si multiplicar antes de sumar)."
        },
        {
          question: "¿Qué formato tienen las reglas de producción en una Gramática Libre de Contexto (CFG)?",
          options: ["A → α, donde A es un ÚNICO no terminal y α es cualquier combinación de terminales y no terminales", "α → A", "A → A B C D E F"],
          answerIndex: 0,
          explanation: "Libre de Contexto significa que el no terminal A puede ser sustituido por α independientemente de los símbolos que lo rodeen."
        },
        {
          question: "¿Qué representa la raíz de un Árbol de Derivación (Parse Tree)?",
          options: ["El símbolo de inicio de la gramática (S)", "Un símbolo terminal", "La cadena vacía"],
          answerIndex: 0,
          explanation: "La raíz del árbol sintáctico siempre corresponde al símbolo inicial S definido en la gramática formal."
        },
        {
          question: "Las hojas (nodos finales) de un Árbol de Derivación completo corresponden a:",
          options: ["Solo símbolos No-Terminales", "Los símbolos Terminales que forman la cadena derivada", "Reglas de producción"],
          answerIndex: 1,
          explanation: "Las hojas del árbol representan la secuencia ordenada de símbolos terminales que componen la cadena del lenguaje."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Definición Formal de CFG: G = (V, Σ, R, S)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Definición Formal de CFG: G = (V, Σ, R, S)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de CFG: G = (V, Σ, R, S). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Variables No-Terminales (V), Terminales (Σ) y Reglas de Producción (R)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Variables No-Terminales (V), Terminales (Σ) y Reglas de Producción (R)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Variables No-Terminales (V), Terminales (Σ) y Reglas de Producción (R). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Derivación por la Izquierda (Leftmost) y por la Derecha (Rightmost)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Derivación por la Izquierda (Leftmost) y por la Derecha (Rightmost)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Derivación por la Izquierda (Leftmost) y por la Derecha (Rightmost). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Árboles de Derivación Sintáctica (Parse Trees)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Árboles de Derivación Sintáctica (Parse Trees)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Árboles de Derivación Sintáctica (Parse Trees). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Ambigüedad Gramatical y Gramáticas No Ambiguas?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ambigüedad Gramatical y Gramáticas No Ambiguas", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ambigüedad Gramatical y Gramáticas No Ambiguas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES",
      description: "Reconocimiento de lenguajes libres de contexto usando memoria LIFO y Formas Normales de Chomsky.",
      items: [
      "Definición Formal de Autómata de Pila (PDA): Tupla de 7 elementos.",
      "Memoria de Pila LIFO (Push, Pop, Top) y Alfabeto de Pila Γ.",
      "Equivalencia: Lenguaje Libre de Contexto ≡ PDA ≡ CFG.",
      "Forma Normal de Chomsky (CNF): Producciones A → BC o A → a.",
      "Forma Normal de Greibach (GNF) y Algoritmo CYK.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: AUTÓMATAS DE PILA (PDA), FORMA NORMAL DE CHOMSKY, CYK Y \\(a^n b^n\\)\n\nLos lenguajes libres de contexto ganan **memoria acotada pero no finita en el sentido de contador ilimitado**: un autómata finito solo recuerda en qué estado está; un **autómata de pila** (PDA) recuerda una secuencia en estructura **LIFO** (último en entrar, primero en salir). Esa pila es exactamente lo que permite reconocer \\(L = \\{a^n b^n \\mid n \\ge 0\\}\\): por cada `a` leída se hace **push**; por cada `b`, **pop**; aceptar solo si al terminar la entrada la pila queda vacía.\n\nEn este módulo formalizamos el PDA como tupla de siete componentes, establecemos la equivalencia **CFG \\(\\equiv\\) PDA \\(\\equiv\\) LLC**, normalizamos gramáticas a la **Forma Normal de Chomsky (CNF)** para algoritmos mecánicos, y ejecutamos el **algoritmo CYK** de reconocimiento en \\(O(n^3)\\). El laboratorio del curso y muchos exámenes vuelven una y otra vez al ejemplo \\(a^n b^n\\) porque condensa toda la intuición de pila en cinco líneas de código.\n\n## Objetivos de la lección\n\n- Definir un PDA (determinista o no determinista) y sus operaciones push, pop y lectura del tope.\n- Construir un PDA que acepte \\(a^n b^n\\) y contrastarlo con la imposibilidad de un DFA equivalente.\n- Enunciar y usar la equivalencia entre gramáticas LLC y PDA.\n- Transformar una CFG pequeña a CNF siguiendo pasos estándar.\n- Aplicar el algoritmo CYK para decidir pertenencia de una cadena a \\(L(G)\\) en CNF.\n\n## Desarrollo de la lección\n\n### Definición formal del PDA\n\nUn **autómata de pila** (PDA) es una tupla\n\\(M = (Q, \\Sigma, \\Gamma, \\delta, q_0, Z_0, F)\\):\n\n- \\(Q\\): estados finitos.\n- \\(\\Sigma\\): alfabeto de **entrada**.\n- \\(\\Gamma\\): alfabeto de **pila** (símbolos que se apilan).\n- \\(\\delta\\): función de transición (en el PDA **no determinista** habitual, \\(\\delta: Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\times \\Gamma \\rightarrow \\mathcal{P}(Q \\times \\Gamma^*)\\)): dado estado, símbolo de entrada (o \\(\\epsilon\\)) y símbolo leído del tope, devuelve un **conjunto** de posibles muevos, cada uno con nuevo estado y cadena a reemplazar en el tope (puede ser vacía = pop múltiple, o varios símbolos = push).\n- \\(q_0 \\in Q\\): estado inicial.\n- \\(Z_0 \\in \\Gamma\\): símbolo **fondo de pila** (marcador inicial).\n- \\(F \\subseteq Q\\): estados de aceptación.\n\n**Aceptación** (criterio habitual en teoría): la máquina acepta si, tras consumir toda la entrada, está en un estado de \\(F\\) **y** la pila cumple la condición de aceptación del modelo (por stack vacío excepto \\(Z_0\\), o solo estado final, según la definición del curso; el snippet del módulo usa «pila vacía lógica» equivalente a contar emparejamientos).\n\nEl PDA **no determinista** es más expresivo que el PDA determinista en general; para LLC basta el ND-PDA, análogo a que NFA y DFA son equivalentes en regulares.\n\n### Pila LIFO: push, pop, top\n\nOperaciones conceptuales:\n\n- **Push(\\(\\gamma\\))**: insertar cadena \\(\\gamma\\) sobre el tope (símbolo a símbolo o bloque según la transición).\n- **Pop / Top**: leer el tope para elegir transición; consumir según la transición.\n- La pila nunca se «olvidó» del medio: solo acceso al tope; por eso modela anidamiento, no colas (\\(a^n b^n c^n\\) requiere más poder — Turing).\n\n### PDA para \\(a^n b^n\\) paso a paso\n\nPara \\(w = aabb\\):\n\n| Paso | Entrada restante | Pila (abajo \\(\\rightarrow\\) arriba) | Acción |\n|------|------------------|-------------------------------------|--------|\n| 1 | `aabb` | \\(Z_0\\) | leer `a`, push marcador |\n| 2 | `abb` | \\(A, Z_0\\) | push por cada `a` (simplificación del snippet: un `A` por `a`) |\n| … | | tres `A` tras tres `a` | |\n| lectura `b` | | pop un `A` por cada `b` | |\n| fin | \\(\\epsilon\\) | solo \\(Z_0\\) o vacía según convención | **aceptar** si iguales |\n\nSi \\(w = aaabb\\) (desbalance), tras leer las tres `b` la pila aún tiene `A`: **rechazar**. Si \\(w = ababa\\), al encontrar `b` con pila vacía prematuramente, rechazar.\n\nLa función Python del módulo implementa esta **estrategia en dos fases**: primero solo `a` con pushes, luego solo `b` con pops, sin mezclar alfabetos en medio — válido para este lenguaje particular, aunque un PDA formal tendría estados explícitos \\(q_a, q_b, q_{acept}\\).\n\n### Equivalencia CFG \\(\\leftrightarrow\\) PDA\n\n**Teorema (esquemático)**: \\(L\\) es LLC \\(\\Leftrightarrow\\) existe gramática \\(G\\) con \\(L(G)=L\\) \\(\\Leftrightarrow\\) existe PDA que acepta \\(L\\).\n\n- **CFG \\(\\rightarrow\\) PDA**: construcción estándar que simula derivaciones leftmost usando la pila para guardar el prefijo de la derivación pendiente (los no terminales por expandir).\n- **PDA \\(\\rightarrow\\) CFG**: triangula configuraciones (estado, tope de pila, altura) en variables de gramática; es más técnica y aparece en demostraciones de cursos teóricos.\n\nEn ingeniería de compiladores rara vez compilamos PDA a CFG; vamos de especificación en BNF a parser LL/LR. La equivalencia explica **por qué** LR parsers usan una pila explícita de estados.\n\n### Forma Normal de Chomsky (CNF)\n\nUna CFG está en **CNF** si toda regla es de una de dos formas:\n\n1. \\(A \\rightarrow BC\\) con \\(A, B, C\\) no terminales.\n2. \\(A \\rightarrow a\\) con \\(a\\) terminal.\n\nOpcionalmente se permite \\(S \\rightarrow \\epsilon\\) si \\(\\epsilon \\in L(G)\\), con restricciones para que \\(S\\) no aparezca en cuerpos.\n\n**Algoritmo de conversión (resumen operativo)**:\n\n1. Eliminar producciones \\(\\epsilon\\) (excepto posiblemente \\(S \\rightarrow \\epsilon\\)).\n2. Eliminar producciones unitarias \\(A \\rightarrow B\\).\n3. Agregar variables «alias» para cadenas mixtas de longitud \\(>2\\) en lados derechos (alfabetización de Chomsky).\n4. Descomponer cuerpos \\(A \\rightarrow X_1 X_2 \\ldots X_k\\) en cadenas de binarios.\n\n**Ejemplo mini**: de \\(S \\rightarrow aSb \\mid ab\\) (genera \\(a^n b^n\\) en forma alternativa) a CNF requiere variables intermedias para encadenar terminales y no terminales; el resultado aumenta \\(|V|\\) pero simplifica CYK.\n\n### Algoritmo CYK (Cocke–Younger–Kasami)\n\nDado \\(G\\) en CNF y cadena \\(w = a_1 a_2 \\ldots a_n\\):\n\n1. Construir tabla \\(P[i,j]\\): conjunto de no terminales que derivan la subcadena \\(a_i \\ldots a_j\\).\n2. **Base**: \\(P[i,i] = \\{A \\mid A \\rightarrow a_i\\}\\).\n3. **Inducción** en longitud \\(L = 2 \\ldots n\\): para cada partición \\(i \\le k < j\\), si \\(B \\in P[i,k]\\) y \\(C \\in P[k+1,j]\\) y existe \\(A \\rightarrow BC\\), entonces \\(A \\in P[i,j]\\).\n4. \\(w \\in L(G)\\) iff \\(S \\in P[1,n]\\).\n\n**Ejemplo** \\(w = ba\\) con reglas mínimas: si no hay \\(B \\rightarrow b\\) y \\(C \\rightarrow a\\) enlazados por algún \\(A \\rightarrow BC\\), la celda final no contiene \\(S\\).\n\nComplejidad: \\(O(n^3 \\cdot |G|)\\) — útil en teoría y en NLP para gramáticas pequeñas; no escala a gramáticas completas de C++.\n\n### Greibach (GNF) — mención útil\n\nLa **Forma Normal de Greibach** exige \\(A \\rightarrow a\\alpha\\) con \\(a\\) terminal al inicio. Facilita parsers top-down sin backtracking en algunos casos. CYK usa CNF; LL parsers prefieren gramáticas cerca de LL(1), no necesariamente GNF.\n\n## Demostración enlazada al código del módulo\n\nLa función `pda_reconocer_an_bn(cadena)` implementa reconocimiento por **contador en lista Python** (pila simulada):\n\n- Fase 1: mientras el carácter es `a`, `pila.append('A')` y avanza el índice.\n- Fase 2: mientras es `b`, si la pila está vacía retorna `False` (falta de `a` previa); si no, `pop()`.\n- Acepta si el índice llegó al final **y** la pila quedó vacía (`len(pila)==0`).\n\nCasos de prueba del snippet: `'aaaabbbb'` tiene cuatro `a` y cuatro `b`: acepta. `'aaabb'` tiene tres `b` pero solo dos `a` en la fase de pops: tras dos `b` la pila ya está vacía; el tercer `b` encuentra pila vacía \\(\\rightarrow\\) `False`.\n\n**Diferencia con PDA formal**: no hay estados \\(Q\\) ni símbolo \\(Z_0\\); no rechaza cadenas con `b` antes de `a` en la fase 1 (p. ej. `baab`) porque la fase 1 solo consume `a` y la fase 2 solo `b` — si queda `ba` después de fase 1 con pila vacía, fase 2 no consume nada y el índice no llega al final: rechaza correctamente.\n\n## Aplicaciones en sistemas reales\n\n**Parsers LR en GCC/Clang**: la pila de estados del parser LR es un PDA determinista especializado; cada shift empuja un estado, cada reduce hace pop y empuja un no terminal según la gramática.\n\n**Validación de XML/HTML**: documentos bien formados requieren etiquetas balanceadas anidadas; compiladores SAX y validadores internos usan pilas de etiquetas abiertas — mismo patrón que \\(a^n b^n\\) generalizado a nombres de etiquetas.\n\n**Análisis de expresiones en hojas de cálculo**: Excel y Google Sheets convierten fórmulas a AST usando pilas de operadores y operandos (algoritmo shunting-yard, Dijkstra); la pila es el mismo concepto operacional del PDA, aunque el algoritmo sea determinista por precedencia.\n\n## Errores clásicos en examen\n\n- Afirmar que todo PDA es determinista: el modelo estándar para LLC es **no determinista**.\n- Confundir CYK con parsing LL: CYK es reconocimiento en CNF, no genera AST en tiempo lineal de compiladores.\n- Olvidar la condición \\(|y| \\ge 1\\) al relacionar con lema del bombeo para LLC (módulo teórico avanzado).\n- Creer que \\(a^n b^n c^n\\) es LLC: es tipo 1 / sensible al contexto, no alcanzable con una sola pila.\n- En conversión a CNF, dejar producciones \\(A \\rightarrow aBC\\) sin descomponer.\n\n## Preguntas de entrevista\n\n**P: Explica por qué \\(a^n b^n\\) requiere pila y no DFA.**\n\n**R:** Un DFA tiene estados fijos. Para verificar que el número de `a` iguala al de `b` necesitaría, en el peor caso, un estado distinto por cada posible contador hasta \\(n\\), y \\(n\\) no está acotado. La pila almacena un símbolo por cada `a` leída antes de emparejar con `b`, dando memoria proporcional a la entrada en una sola pasada.\n\n**P: ¿Para qué sirve la CNF en la práctica?**\n\n**R:** Principalmente para el algoritmo CYK y demostraciones de que LLC son cerrados bajo unión, concatenación y estrella. Los compiladores de producción raramente mantienen la gramática completa en CNF; la conversión es herramienta teórica y base de ejercicios de pertenencia.\n\n\n### Ejemplo CYK completo en miniatura\n\nConsidere CNF con \\(S \nightarrow CB\\), \\(C \nightarrow a\\), \\(B \nightarrow b\\), además de \\(S \nightarrow AD\\), \\(A \nightarrow a\\), \\(D \nightarrow b\\) según las reglas disponibles para la cadena `aab` — el alumno debe numerar cada celda \\(P[i,j]\\). Para la cadena `aba` de longitud 3, la base rellena \\(P[1,1]\\) con variables que derivan `a`, \\(P[2,2]\\) con las de `b`, \\(P[3,3]\\) con las de `a`. Para longitud 2, la partición única une \\(P[1,1]\\) y \\(P[2,2]\\): si existe regla \\(X \nightarrow YZ\\) con \\(Y\\) en la primera celda y \\(Z\\) en la segunda, añadimos \\(X\\) a \\(P[1,2]\\). Repetimos para \\(P[2,3]\\). Para longitud 3 probamos cortes \\(k=1\\) y \\(k=2\\): \\(P[1,3]\\) recibe \\(S\\) solo si alguna producción binaria enlaza contenidos de \\(P[1,1]\\) con \\(P[2,3]\\) o \\(P[1,2]\\) con \\(P[3,3]\\). Este trazo manual en examen vale más que memorizar la fórmula.\n\nLa tabla triangular inferior visualiza subproblemas compartidos — la esencia de programación dinámica. Implementar CYK en Python para gramáticas de menos de diez reglas es un excelente ejercicio de laboratorio posterior al snippet del PDA.\n\n### PDA no determinista y elección de ramas\n\nCuando \\(\\delta\\) devuelve varias transiciones, el PDA **adivina** correctamente si alguna rama lleva a aceptación (aceptación por existencia de computación aceptadora). El reconocimiento de LLC necesita ese no determinismo en el modelo general; lenguajes como palabras de la forma \\(ww^R\\) (palíndromo batido) ilustran alternancia de adivinanzas de longitud. En contraste, el snippet de \\(a^n b^n\\) es tan restrictivo que una única estrategia determinista basta.\n\n### De producciones a acciones de pila (visión constructiva)\n\nPara convertir CFG a PDA: al empezar, push \\(S\\) en la pila. Repetidamente, si el tope es no terminal \\(A\\), sustituirlo por el lado derecho de alguna producción \\(A \nightarrow X_1\\ldots X_k\\) (push en orden invertido para que \\(X_1\\) quede arriba). Si el tope es terminal y coincide con el símbolo de entrada actual, pop y avanzar lectura. Aceptación cuando entrada vacía y pila vacía (modo común). Seguir este algoritmo a mano en una gramática de tres reglas fija la equivalencia mejor que memorizar el teorema.\n\n### Lema del bombeo para LLC (conexión)\n\nSi un estudiante pretende demostrar que \\(L = \\{a^n b^n c^n\\}\\) es LLC, el lema del bombeo para LLC produce contradicción (bombeo en zonas de una sola letra rompe balance triple). Saber que \\(a^n b^n\\) **sí** es LLC pero \\(a^n b^n c^n\\) **no** separa el poder del módulo 7 del módulo 8 en la jerarquía.\n\n## Síntesis y checklist antes de avanzar\n\n- Escribí la tupla del PDA y expliqué push/pop en \\(a^n b^n\\).\n- Ejecuté el snippet y predije el resultado para cadenas desbalanceadas.\n- Describí los pasos de conversión a CNF y una fila de la tabla CYK.\n- Distinguí PDA de máquina de Turing (módulo 8).\n- Completé la conexión CFG–PDA–LLC sin confundir con lenguajes regulares.",
      codeSnippet: `# Simulación de PDA en Python para reconocer a^n b^n
def pda_reconocer_an_bn(cadena: str) -> bool:
    pila = []
    i = 0
    # Fase 1: Push de a's
    while i < len(cadena) and cadena[i] == 'a':
        pila.append('A')
        i += 1
    # Fase 2: Pop por cada b
    while i < len(cadena) and cadena[i] == 'b':
        if not pila: return False # Pila vacía antes de tiempo
        pila.pop()
        i += 1
    # Acepta si se consumió toda la cadena y la pila quedó vacía
    return i == len(cadena) and len(pila) == 0

print(f"¿'aaaabbbb' aceptada por el PDA?: {pda_reconocer_an_bn('aaaabbbb')}") # True
print(f"¿'aaabb' aceptada?: {pda_reconocer_an_bn('aaabb')}")             # False`,
      quiz: [
        {
          question: "¿Qué componente adicional tiene un Autómata de Pila (PDA) en comparación con un Autómata Finito (DFA)?",
          options: ["Una memoria secundaria en formato Pila LIFO", "Una cinta bidireccional", "Dos estados iniciales"],
          answerIndex: 0,
          explanation: "La memoria auxiliar tipo Pila (Pushdown) le otorga la capacidad de recordar estructuras anidadas de profundidad arbitraria."
        },
        {
          question: "¿Cuál de los siguientes lenguajes puede ser reconocido por un Autómata de Pila (PDA) pero NO por un DFA?",
          options: ["L = {aⁿbⁿ | n ≥ 0}", "L = {cadenas binarias que terminan en 1}", "L = {palabras de 3 letras}"],
          answerIndex: 0,
          explanation: "aⁿbⁿ requiere contar n símbolos mediante PUSH y compararlos mediante POP, algo que un PDA logra con su pila."
        },
        {
          question: "¿Qué estructura deben tener las reglas de producción en la Forma Normal de Chomsky (CNF)?",
          options: ["A → BC (dos no terminales) o A → a (un solo terminal)", "A → aB", "A → B C D E"],
          answerIndex: 0,
          explanation: "La CNF restringe las reglas estrictamente a dos variables no terminales (A → BC) o a una única variable terminal (A → a)."
        },
        {
          question: "En las operaciones de un PDA sobre su pila, ¿qué significa la acción 'PUSH'?",
          options: ["Extraer el elemento superior de la pila", "Insertar un nuevo símbolo en la parte superior de la pila", "Borrar toda la memoria"],
          answerIndex: 1,
          explanation: "PUSH empuja un nuevo símbolo a la cima de la pila, incrementando su tamaño."
        },
        {
          question: "¿Qué algoritmo dinámico permite saber si una cadena pertenece a una CFG en Forma Normal de Chomsky en tiempo O(n³)?",
          options: ["Algoritmo CYK (Cocke-Younger-Kasami)", "Algoritmo de Dijkstra", "Algoritmo de Kruskal"],
          answerIndex: 0,
          explanation: "El algoritmo CYK utiliza programación dinámica sobre gramáticas en CNF para parsear cadenas en tiempo O(n³)."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Definición Formal de Autómata de Pila (PDA): Tupla de 7 elementos?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición Formal de Autómata de Pila (PDA): Tupla de 7 elementos", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de Autómata de Pila (PDA): Tupla de 7 elementos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Memoria de Pila LIFO (Push, Pop, Top) y Alfabeto de Pila Γ?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Memoria de Pila LIFO (Push, Pop, Top) y Alfabeto de Pila Γ", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Memoria de Pila LIFO (Push, Pop, Top) y Alfabeto de Pila Γ. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Equivalencia: Lenguaje Libre de Contexto ≡ PDA ≡ CFG?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Equivalencia: Lenguaje Libre de Contexto ≡ PDA ≡ CFG", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Equivalencia: Lenguaje Libre de Contexto ≡ PDA ≡ CFG. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Forma Normal de Chomsky (CNF): Producciones A → BC o A → a?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Forma Normal de Chomsky (CNF): Producciones A → BC o A → a", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Forma Normal de Chomsky (CNF): Producciones A → BC o A → a. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Forma Normal de Greibach (GNF) y Algoritmo CYK?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Forma Normal de Greibach (GNF) y Algoritmo CYK", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Forma Normal de Greibach (GNF) y Algoritmo CYK. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD",
      description: "El límite absoluto de la computación, el Problema de la Parada (Halting Problem) y la Jerarquía de Chomsky.",
      items: [
      "Definición Formal de Máquina de Turing: Cinta Infinita, Cabezal y Tabla de Control.",
      "Transiciones de TM: (q, s) → (q', s', Izquierda/Derecha).",
      "Jerarquía de Chomsky: Tipos 3 (Regular), 2 (Libre de Contexto), 1 (Sensible al Contexto) y 0 (Recursivamente Enumerable).",
      "Tesis de Church-Turing: Algoritmo ≡ Máquina de Turing.",
      "Problema de la Parada (Halting Problem) e Indecidibilidad.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: MÁQUINAS DE TURING, CHURCH-TURING, HALTING PROBLEM Y JERARQUÍA DE CHOMSKY\n\nHasta aquí, autómatas finitos y de pila delimitan lo que un programa con memoria acotada o con una pila puede reconocer. La **máquina de Turing** (TM) es el modelo que captura la noción intuitiva de **algoritmo**: una cabeza lee y escribe símbolos en una cinta ilimitada, cambia de estado según una tabla finita de reglas, y puede moverse a izquierda o derecha sin límite a priori de pasos (salvo que entre en bucle infinito). La **tesis de Church-Turing** afirma que cualquier función calculable por cualquier computador digital es calculable por alguna TM. Desde ese marco, **no todo problema admite algoritmo**: el **problema de la parada** (Halting Problem) es el ejemplo arquetípico de **indecidibilidad**.\n\nLa **jerarquía de Chomsky** ordena los tipos 0–3 de gramáticas y automátas correspondientes, unificando el curso: regex/DFA (3), CFG/PDA (2), sensibles al contexto (1), recursivamente enumerables / Turing (0).\n\n## Objetivos de la lección\n\n- Definir una máquina de Turing: cinta, cabezal, estados, alfabeto y función de transición.\n- Explicar la tesis de Church-Turing y su alcance (hipótesis, no teorema formal).\n- Enunciar el problema de la parada y esbozar la diagonalización de Turing.\n- Clasificar lenguajes en los cuatro tipos de la jerarquía de Chomsky con ejemplos.\n- Diferenciar decidible, semidecidible y no semidecidible.\n\n## Desarrollo de la lección\n\n### Modelo de la máquina de Turing\n\nFormalmente \\(M = (Q, \\Sigma, \\Gamma, \\delta, q_0, B, F)\\):\n\n- \\(Q\\): estados finitos.\n- \\(\\Sigma\\): alfabeto de **entrada** (símbolos que componen la cadena inicial sobre la cinta).\n- \\(\\Gamma\\): alfabeto de **cinta** (\\(\\Sigma \\subseteq \\Gamma\\)); incluye blancos \\(B\\).\n- \\(\\delta: Q \\times \\Gamma \\rightarrow Q \\times \\Gamma \\times \\{L, R\\}\\): en estado \\(q\\) leyendo \\(s\\) en la celda bajo el cabezal, pasa a \\(q'\\), escribe \\(s'\\) y mueve el cabezal left o right.\n- \\(q_0\\): estado inicial.\n- \\(B \\in \\Gamma \\setminus \\Sigma\\): símbolo blanco.\n- \\(F \\subseteq Q\\): estados de aceptación (halting accept).\n\nUna **computación** es la secuencia de configuraciones \\((\\text{cinta}, \\text{posición cabezal}, \\text{estado})\\). La máquina **acepta** si entra en \\(F\\); **rechaza** si entra en estado de rechazo explícito o **no detiene** (bucle infinito) — según convención del problema.\n\nVariantes (multi-cinta, no determinista) son **equivalentes** en poder computacional a la TM estándar.\n\n### Ejemplo: incrementar binario (como el snippet)\n\nLa TM del módulo simula incrementar un número en binario desde el **bit menos significativo** (final de la cadena):\n\n- Empieza en `head = len(cinta)-1`.\n- Mientras hay acarreo: si el dígito es `0`, pone `1` y termina acarreo; si es `1`, pone `0` y sigue hacia la izquierda.\n- Si el acarreo sobrevive al MSB, inserta `1` al inicio (`1011` \\(\\rightarrow\\) `1100`).\n\nEsto modela el patrón «leer–modificar–mover izquierda» de una TM real, aunque el código Python use lista mutable en lugar de cinta infinita con blancos a derecha.\n\n### Jerarquía de Chomsky\n\n| Tipo | Gramática | Autómata | Ejemplo de lenguaje |\n|------|-----------|----------|---------------------|\n| 3 | Regulares (derecha/izquierda) | DFA/NFA | identificadores simples, regex |\n| 2 | Libre de contexto | PDA | expresiones, paréntesis |\n| 1 | Sensible al contexto | LBA (linear bounded automaton) | \\(a^n b^n c^n\\) |\n| 0 | Sin restricción (RE) | Turing | todo lo semi-decidible |\n\nInclusiones estrictas: Tipo 3 \\(\\subset\\) 2 \\(\\subset\\) 1 \\(\\subset\\) 0.\n\nEl lenguaje \\(L = \\{a^n b^n c^n \\mid n \\ge 0\\}\\) **no** es LLC (se demuestra con lema del bombeo para LLC o intuición de dos pilas vs una), pero **sí** es sensible al contexto. El lenguaje universal o problemas de aceptación de TM son tipo 0.\n\n### Tesis de Church-Turing\n\nNo es un teorema matemático demostrable desde unos axiomas cerrados: es la **hipótesis** de que toda función «efectivamente calculable» (intuitiva: algoritmo finito, paso a paso, sin oráculos) coincide con las funciones computables por TM.\n\nConsecuencias prácticas:\n\n- No esperes un compilador que **siempre** detecte si un programa termina.\n- Modelos alternativos (lambda calculus, RAM, lenguajes imperiales con memoria ilimitada idealizada) son equivalentes en poder a TM.\n\n### Problema de la parada (Halting Problem)\n\n**Enunciado**: ¿Existe un algoritmo \\(H(P, x)\\) que, dada descripción de programa \\(P\\) y entrada \\(x\\), responda **siempre** en tiempo finito «\\(P\\) termina en \\(x\\)» o «\\(P\\) no termina»?\n\n**Respuesta de Turing**: **No**. El lenguaje\n\\(L_{HALT} = \\{\\langle M, w \\rangle \\mid M \\text{ es TM que acepta } w\\}\\)\n(o la variante «\\(M\\) se detiene en \\(w\\)») es **recursivamente enumerable** pero **no decidible**.\n\n**Esbozo de diagonalización (idea)**:\n\n1. Supón decididor hipotético `Halts(M,w)`.\n2. Construye TM `D` que, sobre entrada \\(\\langle M \\rangle\\), hace lo contrario de lo que diría `Halts(M, ⟨M⟩)` (si dice que para, buclea; si dice que buclea, para).\n3. Pregunta qué hace `Halts(D, ⟨D⟩)`: contradicción.\n\nPor tanto, **no puede existir** detector universal de bucles infinitos para programas arbitrarios. Herramientas de análisis estático encuentran **algunos** bucles, no todos.\n\n### Decidible vs semidecidible\n\n- **Decidible (recursive)**: existe TM que **siempre** detiene y responde sí/no.\n- **Semidecidible (RE)**: existe TM que acepta las instancias «sí» y puede buclear en «no».\n- **Co-RE** pero no decidible: complemento del halting; no hay TM que liste todos los que **no** paran.\n\nEn compiladores, la mayoría de chequeos (sintaxis, tipos en lenguajes comunes) son decidibles en el fragmento que analizan; la **optimización agresiva** o análisis de propiedades de programas Turing-completos choca con límites indecidibles.\n\n## Demostración enlazada al código del módulo\n\n`MaquinaTuringIncremento` almacena `cinta` como lista de caracteres y `head` en el último índice.\n\n- El bucle `while self.head >= 0 and acarreos` simula barrido hacia la izquierda procesando acarreo.\n- `'0'` \\(\\rightarrow\\) `'1'`: fin de acarreo local.\n- `'1'` \\(\\rightarrow\\) `'0'`: continúa acarreo, `head -= 1`.\n- Si tras el bucle `acarreos` sigue verdadero, overflow de ancho: `insert(0, '1')`.\n\nEntrada `1011` (11 decimal): LSB es último `1` \\(\\rightarrow\\) `0`, acarreo, siguiente `1` \\(\\rightarrow\\) `0`, acarreo, `0` \\(\\rightarrow\\) `1`, stop; resultado `1100` (12). La TM **siempre termina** en esta función acotada: es un **subproblema decidible**, no el halting general.\n\n## Aplicaciones en sistemas reales\n\n**Verificación formal (TLA+, Coq)**: se demuestran propiedades de protocolos o kernels restringidos; fuera de fragmentos decidibles, el usuario prueba teoremas manualmente — reconocimiento del límite de Turing.\n\n**Timeouts en servidores (Kubernetes, AWS Lambda)**: no pueden saber si un contenedor colgará; imponen límites de CPU/tiempo — respuesta de ingeniería al halting indecidable.\n\n**Firmas de virus / análisis heurístico**: antivirus no resuelven halting; combinan firmas (regulares/autómatas) con heurística de comportamiento acotado.\n\n## Errores clásicos en examen\n\n- Confundir «indecidible» con «muy difícil» o «NP-completo» — son clases distintas.\n- Creer que la tesis de Church-Turing es teorema demostrado con ZFC estándar.\n- Ordenar mal la jerarquía (p. ej. pensar que LLC contiene regulares es correcto, pero invertir 1 y 2).\n- Afirmar que toda TM puede convertirse en DFA si se «desenrolla» la cinta: la cinta es infinita.\n- Usar halting para decir que **ningún** compilador puede detectar **nunca** errores de sintaxis (síntaxis es decidible).\n\n## Preguntas de entrevista\n\n**P: ¿Qué es el Halting Problem y por qué importa a un ingeniero?**\n\n**R:** Pregunta si existe algoritmo universal que prediga terminación de cualquier programa. Turing demostró que no. Importa porque herramientas que prometen «encontrar todos los deadlocks/bucles» en código Turing-completo son imposibles en general; hay que acotar el dominio o usar aproximaciones.\n\n**P: Ubica los lenguajes regulares y LLC en Chomsky.**\n\n**R:** Regulares = tipo 3 (DFA). LLC = tipo 2 (PDA). Todos los regulares son LLC; existen LLC no regulares (\\(a^n b^n\\)). Tipo 0 incluye problemas de aceptación de TM; tipo 1 intermedios como \\(a^n b^n c^n\\).\n\n\n### Configuraciones y diagrama espacio-tiempo\n\nRegistrar una configuración TM como \\((q, lpha, i)\\) donde \\(lpha\\) es contenido de cinta con cabezal en posición \\(i\\) permite razonar sobre **histórias** de cómputo. Dos máquinas con distinto número de estados pueden simular la misma función; lo importante es el conjunto de **funciones parciales computables** y los **lenguajes decidibles**.\n\nLa **codificación** \\(\\langle M, w \nangle\\) como cadena finita permite tratar programas como entrada de otros programas: base de intérpretes universales y del argumento del halting.\n\n### Reducciones y problemas complementarios\n\nMuchos problemas indecidibles se prueban por **reducción** desde HALT: si pudieras decidir \\(A\\), decidirías HALT. Ejemplos clásicos en cursos: equivalencia de dos TMs, totality (¿\\(M\\) se detiene en **toda** entrada?). En compilación, problemas como «¿este programa accede siempre dentro de límites de array sin ejecutarlo?» son indecidibles en general (relacionados con Rice: propiedades no triviales del comportamiento son indecidibles).\n\n### Variantes computacionalmente equivalentes\n\nMáquinas con múltiples cintas, máquinas no deterministas, y registros ilimitados (RAM idealizado) no superan el poder de una sola cinta TM (con posible pérdida de eficiencia polinomial irrelevante para decidibilidad). Esto justifica usar el modelo que convenga en demostraciones.\n\n### Rice y límites de análisis estático\n\nEl **teorema de Rice**: cualquier propiedad **no trivial** del lenguaje reconocido por una TM es indecidible. Consecuencia didáctica: no habrá analizador que detecte **todos** los programas que «hacen exactamente X» para comportamientos semánticos ricos; las herramientas acotan el lenguaje (tipos, anotaciones, subconjuntos sin goto).\n\n### Comparación operativa DFA–PDA–TM\n\n| Modelo | Memoria | ¿Decide LLC? | ¿Decide HALT? |\n|--------|---------|--------------|---------------|\n| DFA | estado fijo | solo regulares | no |\n| PDA | pila | sí (LLC) | no |\n| TM | cinta | sí (RE) | no (pero semidecide HALT) |\n\nLa fila HALT aclara: existe TM que enumera pares que paran, pero no una que clasifique siempre sí/no.\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé una transición TM (estado, leer, escribir, mover).\n- Recorrí el incremento binario del snippet y relacioné con acarreo.\n- Repasé jerarquía 3-2-1-0 con un ejemplo por nivel.\n- Expliqué halting en tres frases con diagonalización.\n- Estoy listo para el bloque compiladores (módulo 9): arquitectura frontend/middle/backend.",
      codeSnippet: `# Simulador de una Máquina de Turing que incrementa un número binario en 1
class MaquinaTuringIncremento:
    def __init__(self, cinta: str):
        self.cinta = list(cinta)
        self.head = len(self.cinta) - 1 # Empezar al final (LSB)
    
    def ejecutar(self) -> str:
        acarreos = True
        while self.head >= 0 and acarreos:
            if self.cinta[self.head] == '0':
                self.cinta[self.head] = '1'
                acarreos = False
            else:
                self.cinta[self.head] = '0'
                self.head -= 1
        if acarreos:
            self.cinta.insert(0, '1')
        return "".join(self.cinta)

tm = MaquinaTuringIncremento("1011") # 11 en decimal
print(f"TM Incremento de '1011': {tm.ejecutar()}") # '1100' (12 en decimal)`,
      quiz: [
        {
          question: "¿Qué demostró Alan Turing con el Problema de la Parada (Halting Problem)?",
          options: ["Que todos los programas terminan en 5 segundos", "Que es IMPOSIBLE construir un algoritmo general que determine si un programa arbitrario finalizará o se quedará en un bucle infinito", "Que las computadoras nunca fallan"],
          answerIndex: 1,
          explanation: "Turing probó matemáticamente que no existe ningún algoritmo que pueda analizar el código de cualquier programa y predecir si se detendrá."
        },
        {
          question: "En la Jerarquía de Chomsky, ¿cuál es el orden correcto del tipo de lenguaje menos potente al más potente?",
          options: ["Tipo 3 (Regular) < Tipo 2 (Libre de Contexto) < Tipo 1 (Sensible al Contexto) < Tipo 0 (Recursivamente Enumerable)", "Tipo 0 < Tipo 1 < Tipo 2 < Tipo 3", "Todos tienen el mismo poder"],
          answerIndex: 0,
          explanation: "La jerarquía incluye estrictamente a los lenguajes: Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0."
        },
        {
          question: "¿Qué establece la Tesis de Church-Turing?",
          options: ["Que los lenguajes de programación expiran", "Que la noción intuitiva de 'algoritmo' se corresponde exactamente con lo que puede calcular una Máquina de Turing", "Que el binario desaparecerá"],
          answerIndex: 1,
          explanation: "Afirma que cualquier problema computable mediante cualquier supercomputadora o lenguaje moderno puede ser resuelto por una Máquina de Turing."
        },
        {
          question: "¿Qué componentes caracterizan a una Máquina de Turing respecto a un Autómata de Pila?",
          options: ["Una cinta de memoria infinita con cabezal de lectura/escritura bidireccional (Izquierda/Derecha)", "No usa estados", "Es solo de lectura"],
          answerIndex: 0,
          explanation: "La cinta infinita bidireccional donde se puede leer y reescribir le da a la Máquina de Turing acceso aleatorio y memoria ilimitada."
        },
        {
          question: "¿Qué es un Lenguaje Indecidible?",
          options: ["Un lenguaje que no se puede imprimir", "Un problema para el cual es matemáticamente imposible construir una Máquina de Turing que siempre se detenga y dé una respuesta correcta", "Un lenguaje en ensamblador"],
          answerIndex: 1,
          explanation: "Un problema indecidible no posee solución algorítmica previa para todas sus entradas posibles."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Definición Formal de Máquina de Turing: Cinta Infinita, Cabezal y Tabla de Co...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Definición Formal de Máquina de Turing: Cinta Infinita, Cabezal y T...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición Formal de Máquina de Turing: Cinta Infinita, Cabezal y Tabla de Control. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Transiciones de TM: (q, s) → (q', s', Izquierda/Derecha)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Transiciones de TM: (q, s) → (q', s', Izquierda/Derecha)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Transiciones de TM: (q, s) → (q', s', Izquierda/Derecha). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Jerarquía de Chomsky: Tipos 3 (Regular), 2 (Libre de Contexto), 1 (Sensible a...?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Jerarquía de Chomsky: Tipos 3 (Regular), 2 (Libre de Contexto), 1 (...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Jerarquía de Chomsky: Tipos 3 (Regular), 2 (Libre de Contexto), 1 (Sensible al Contexto) y 0 (Recursivamente Enumerable). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Tesis de Church-Turing: Algoritmo ≡ Máquina de Turing?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Tesis de Church-Turing: Algoritmo ≡ Máquina de Turing", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tesis de Church-Turing: Algoritmo ≡ Máquina de Turing. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Problema de la Parada (Halting Problem) e Indecidibilidad?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Problema de la Parada (Halting Problem) e Indecidibilidad", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Problema de la Parada (Halting Problem) e Indecidibilidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: ARQUITECTURA DE UN COMPILADOR",
      description: "Estructura interna: Frontend, Middle-end, Backend y fases de traducción de código.",
      items: [
      "Definición de Compilador vs Intérprete vs Transpilador.",
      "Fases del Frontend: Análisis Léxico, Sintáctico y Semántico.",
      "Fases del Middle-end: Representación Intermedia (IR) y Optimización.",
      "Fases del Backend: Selección de Instrucciones, Asignación de Registros y Código Objeto.",
      "Manejo Global de Errores y Tabla de Símbolos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ARQUITECTURA DE UN COMPILADOR.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ARQUITECTURA DE COMPILADORES — FRONTEND, MIDDLE-END Y BACKEND\n\nUn compilador industrial no es un programa monolítico que «traduce texto a binario» en un solo paso. Es un **pipeline de fases** con interfaces bien definidas: cada etapa consume una representación y produce otra más cercana a la máquina. La división clásica en **frontend**, **middle-end** y **backend** permite equipos especializados, reutilización (un frontend C para varias CPUs) y pruebas por capas. El frontend responde «¿el programa es válido y qué estructura tiene?»; el middle-end «¿cómo lo transformamos para ir más rápido sin cambiar significado?»; el backend «¿cómo lo mapeamos a registros e instrucciones reales de este procesador?».\n\nEsta lección sitúa cada fase del laboratorio QuimiSell (lexer, parser, semántica, TAC, optimización, ensamblador conceptual) dentro del mapa global, y distingue compilador, intérprete y transpilador — categorías que aparecen en entrevistas y en el diseño de lenguajes como TypeScript, Kotlin/JVM o Rust/LLVM.\n\n## Objetivos de la lección\n\n- Diferenciar compilador, intérprete, transpilador y máquina virtual.\n- Enumerar fases del frontend (léxico, sintáctico, semántico) y su salida (AST, tabla de símbolos).\n- Explicar el rol del middle-end (IR, optimización target-independent).\n- Describir tareas del backend (instrucción, registros, calling conventions).\n- Relacionar el pipeline con LLVM, GCC y el snippet demo del módulo.\n\n## Desarrollo de la lección\n\n### Compilador, intérprete y transpilador\n\nUn **compilador** traduce un programa fuente completo (o módulo) a una forma ejecutable **antes** de la ejecución: ensamblador, objeto, o bytecode para VM. Ejemplos: `gcc`, `rustc`, `javac` (bytecode).\n\nUn **intérprete** analiza y ejecuta **al mismo tiempo**, típicamente sin generar binario persistente: REPL de Python (modo interpretado), `node` para JS (aunque modernamente JIT). Ventaja: ciclo editar-ejecutar rápido. Desventaja: menos optimización global sin JIT.\n\nUn **transpilador** (source-to-source) transforma entre lenguajes de nivel similar: TypeScript → JavaScript, CoffeeScript → JS, SCSS → CSS. La salida sigue siendo texto o AST en otro lenguaje alto nivel; otro compilador o runtime termina la ejecución.\n\nHíbridos: Java y C# compilan a bytecode e **interpretan** en VM con JIT; Go compila directo a máquina; Python compila a `.pyc` (bytecode) e interpreta en la VM CPython.\n\n### Frontend: análisis\n\nEl **frontend** trabaja sobre texto fuente (o sobre árbol pre-parseado en herramientas LSP). Fases principales:\n\n1. **Análisis léxico**: caracteres → tokens (módulo 10).\n2. **Análisis sintáctico**: tokens → AST o árbol concreto (módulo 11).\n3. **Análisis semántico**: AST + tabla de símbolos → AST tipado, errores de scope/tipos (módulo 12).\n\nSalidas compartidas hacia el resto del pipeline:\n\n- **AST** (posiblemente decorado con tipos).\n- **Tabla de símbolos** (identificadores, funciones, tipos).\n- **Diagnósticos** (errores y warnings con ubicación fuente).\n\nMuchos compiladores también generan ya una **IR inicial** desde el AST (visitor que emite tres direcciones o LLVM IR builder).\n\n### Middle-end: IR y optimización\n\nEl **middle-end** opera sobre **representación intermedia** (IR) independiente del procesador: LLVM IR, GCC GIMPLE, Sea of Nodes en Graal, etc.\n\nTareas típicas:\n\n- Canonicalizar control de flujo (CFG).\n- **Optimización**: constant folding, DCE, inline, loop opts (módulo 14).\n- Análisis de datos (def-use, reaching definitions) para habilitar transformaciones seguras.\n\nLa propiedad clave: mismas optimizaciones sirven para x86, ARM y RISC-V porque el IR abstrae registros infinitos y tipos de memoria de forma uniforme.\n\n### Backend: código máquina\n\nEl **backend** mapea IR optimizado a **código objeto**:\n\n- **Selección de instrucciones** (pattern matching sobre DAGs).\n- **Asignación de registros** (grafo de conflictos, linear scan).\n- **Scheduling** (reordenar para pipelines).\n- **Emisión** de ensamblador o binario.\n- **Convenciones de llamada** (quién guarda registros, pila, frame pointer).\n\nCada arquitectura tiene un backend; LLVM permite registrar nuevos targets.\n\n### Flujo de datos y errores\n\nEl compilador debe **recuperarse** de errores en frontend para reportar múltiples fallos (no panic al primer `;` faltante). Estrategias: tokens de sincronización en parser, análisis semántico best-effort, flags `had_errors` que bloquean codegen.\n\nLa **tabla de símbolos** puede construirse incrementalmente durante parse o en pass semántico dedicado; en lenguajes con inferencia (Rust, Haskell) el middle-end participa en resolución de tipos.\n\n### Caso de estudio: Clang + LLVM\n\n1. Clang frontend: C++ → AST + diagnósticos.\n2. Clang codegen: AST → LLVM IR.\n3. LLVM opt: passes sobre IR.\n4. llc: LLVM IR → `.s` para la CPU elegida.\n\nUn solo frontend alimenta múltiples backends LLVM — ejemplo canónico de la separación modular.\n\n## Demostración enlazada al código del módulo\n\n`compilador_pipeline_demo(\"x = 10 + 5\")` imprime cinco etapas **simuladas**:\n\n1. **Input**: cadena fuente literal.\n2. **Lexer**: lista fija `[\"ID(x)\", \"ASSIGN\", \"NUM(10)\", \"PLUS\", \"NUM(5)\"]` — no tokeniza de verdad, ilustra **forma** de salida.\n3. **Parser**: string AST `AssignStmt(target='x', value=Add(10, 5))` — asignación con suma en RHS.\n4. **Middle-end TAC**: `t0 = 10 + 5`, `x = t0` — temporal intermedio antes de asignar a variable.\n5. **Backend asm**: `MOV EAX, 15` y `MOV [x], EAX` — simplificación didáctica (15 calculado en «ensamblador» en lugar de sumar en CPU).\n\nEl valor pedagógico es ver **contratos entre fases**: cada `print` es la entrada esperada de la siguiente. Al implementar el laboratorio, sustituirás listas fijas por clases `Lexer`, `Parser`, `IRGenerator` reales.\n\n## Aplicaciones en sistemas reales\n\n**Swift + LLVM**: el frontend de Apple genera Swift LLVM IR; optimización y codegen compartidos con Clang para Apple Silicon y x86.\n\n**Babel (transpiler)**: parsea JavaScript/TypeScript, transforma AST (plugins), imprime JS compatible con motores viejos — frontend + middle sin backend de CPU.\n\n**WebAssembly**: backend común para C/C++/Rust que emite `.wasm`; el «runtime» del navegador es la máquina objetivo virtual.\n\n## Errores clásicos en examen\n\n- Colocar optimización de loops en el lexer.\n- Decir que el parser genera ensamblador directamente (omite IR y backend).\n- Confundir transpilador con compilador a máquina nativa.\n- Afirmar que el intérprete «no compila nunca» (ignorar JIT/bytecode).\n- Olvidar que la tabla de símbolos cruza frontend y semantic analyzer.\n\n## Preguntas de entrevista\n\n**P: ¿Por qué separar middle-end y backend?**\n\n**R:** Para compartir optimizaciones y análisis en todos los targets y reducir el costo de soportar N arquitecturas: un IR y M backends, en lugar de N×M traducciones fuente→assembly.\n\n**P: ¿Dónde encaja el linker?**\n\n**R:** Después del backend: el compilador produce `.o` relocables; el **linker** resuelve símbolos externos, fusiona secciones y produce ejecutable. Es fase posterior al compilador propiamente dicho.\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé el pipeline fuente → tokens → AST → IR → asm.\n- Ejecuté el snippet y expliqué cada línea de salida.\n- Diferencié compilador, intérprete y transpilador con un ejemplo cada uno.\n- Ubiqué el laboratorio del curso en frontend + middle inicial.\n- Listo para módulo 10: implementación concreta del lexer.",
      codeSnippet: `# Diagrama conceptual de las Fases de un Compilador en Python
def compilador_pipeline_demo(codigo_fuente: str):
    print(f"1. Código Fuente Input: {codigo_fuente}")
    tokens = ["ID(x)", "ASSIGN", "NUM(10)", "PLUS", "NUM(5)"]
    print(f"2. Frontend - Lexer Tokens: {tokens}")
    ast = "AssignStmt(target='x', value=Add(10, 5))"
    print(f"3. Frontend - Parser AST: {ast}")
    ir = ["t0 = 10 + 5", "x = t0"]
    print(f"4. Middle-end - Código Intermedio TAC: {ir}")
    asm = ["MOV EAX, 15", "MOV [x], EAX"]
    print(f"5. Backend - Ensamblador x86: {asm}")

compilador_pipeline_demo("x = 10 + 5")`,
      quiz: [
        {
          question: "¿Cuál es la función principal del Frontend en la arquitectura de un compilador?",
          options: ["Generar ensamblador x86", "Analizar el código fuente, verificar su sintaxis y semántica y generar una Representación Intermedia (IR)", "Ejecutar el programa"],
          answerIndex: 1,
          explanation: "El Frontend se encarga de la fase de análisis: lee el texto fuente, valida las reglas del lenguaje y construye el árbol AST."
        },
        {
          question: "¿Qué ventaja tiene separar un compilador en Frontend y Backend independientes?",
          options: ["Permite reutilizar el mismo Frontend para soportar múltiples arquitecturas de CPU (x86, ARM, RISC-V) mediante distintos Backends", "Hace que el archivo ejecutable sea más pequeño", "Evita escribir código en C"],
          answerIndex: 0,
          explanation: "Modularizar permite que un solo Frontend (ej: Clang/LLVM para C++) pueda generar ejecutable para Intel, ARM o WebAssembly simplemente cambiando el Backend."
        },
        {
          question: "¿Qué diferencia a un Compilador de un Intérprete?",
          options: ["El compilador traduce todo el programa a lenguaje máquina antes de ejecutarlo; el intérprete traduce y ejecuta línea a línea en tiempo real", "El intérprete es más rápido", "El compilador no detecta errores"],
          answerIndex: 0,
          explanation: "El compilador genera un binario ejecutable independiente previo; el intérprete procesa y ejecuta las instrucciones sobre la marcha."
        },
        {
          question: "¿En qué capa del compilador se aplican las optimizaciones independientes del procesador (como eliminar código muerto)?",
          options: ["En la Tabla de Símbolos", "En el Middle-end (sobre la Representación Intermedia IR)", "En la pantalla"],
          answerIndex: 1,
          explanation: "Las optimizaciones generales se realizan en el Middle-end sobre la representación intermedia (IR) antes de pasar al hardware específico."
        },
        {
          question: "¿Qué es un Transpilador (Source-to-Source Compiler)?",
          options: ["Un programa que traduce de un lenguaje de alto nivel a OTRO lenguaje de alto nivel (ej: TypeScript a JavaScript)", "Un emulador de consola", "Un virus de computadora"],
          answerIndex: 0,
          explanation: "Un transpilador traduce entre dos lenguajes de nivel similar (ejemplo: Babel transpilando ES6 a ES5 JavaScript)."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Definición de Compilador vs Intérprete vs Transpilador?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición de Compilador vs Intérprete vs Transpilador", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición de Compilador vs Intérprete vs Transpilador. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Fases del Frontend: Análisis Léxico, Sintáctico y Semántico?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Fases del Frontend: Análisis Léxico, Sintáctico y Semántico", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fases del Frontend: Análisis Léxico, Sintáctico y Semántico. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Fases del Middle-end: Representación Intermedia (IR) y Optimización?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Fases del Middle-end: Representación Intermedia (IR) y Optimización", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fases del Middle-end: Representación Intermedia (IR) y Optimización. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Fases del Backend: Selección de Instrucciones, Asignación de Registros y Códi...?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Fases del Backend: Selección de Instrucciones, Asignación de Regist...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fases del Backend: Selección de Instrucciones, Asignación de Registros y Código Objeto. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Manejo Global de Errores y Tabla de Símbolos?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Manejo Global de Errores y Tabla de Símbolos", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Manejo Global de Errores y Tabla de Símbolos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ARQUITECTURA DE UN COMPILADOR', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)",
      description: "Transformación de texto plano en un flujo estructurado de Tokens mediante Expresiones Regulares.",
      items: [
      "Rol del Lexer: Convertir secuencia de caracteres en secuencia de Tokens.",
      "Estructura de un Token: (Tipo, Valor, Línea, Columna).",
      "Eliminación de Espacios en Blanco, Tabulaciones y Comentarios.",
      "Generadores Léxicos Automáticos: Flex / Lex.",
      "Manejo de Errores Léxicos (Caracteres ilegales).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ANÁLISIS LÉXICO (LEXER / SCANNER).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ANÁLISIS LÉXICO — LEXER, TOKENS, REGEX Y DFA\n\nEl compilador recibe un archivo de texto plano: bytes con codificación UTF-8 o Latin-1, saltos de línea heterogéneos, comentarios que deben desaparecer para el parser, y cadenas donde `+++` podría ser incremento o tres operadores según el lenguaje. El **analizador léxico** (lexer, scanner) convierte ese flujo en **tokens** — unidades discretas con tipo, lexema y posición. Cada patrón de token se especifica con **expresión regular**; el motor compila regex a **NFA/DFA** (módulos 2–4) y escanea la entrada en un solo paso lineal (con longitud del texto).\n\nSin lexer robusto, el parser recibiría caracteres sueltos y explotaría en complejidad. Esta lección cubre diseño de tokens, prioridad de patrones, generadores Flex/Lex, y manejo de errores léxicos (caracteres ilegales, strings sin cerrar).\n\n## Objetivos de la lección\n\n- Definir token, lexema y posición (línea/columna).\n- Especificar patrones léxicos con regex y resolver conflictos de longitud y prioridad.\n- Explicar el pipeline regex → NFA → DFA → scanner.\n- Implementar mentalmente el lexer del snippet con `re.finditer`.\n- Diseñar mensajes de error léxicos útiles para el programador.\n\n## Desarrollo de la lección\n\n### Rol del lexer en el frontend\n\nEntrada: cadena de caracteres + convenciones del lenguaje (¿`--` es decremento o comentario estilo SQL?). Salida: secuencia `(tipo, lexema, línea, col)` consumida por el parser con **lookahead** limitado.\n\nEl lexer **no** verifica que `if` tenga paréntesis: solo emite `KW_IF`. La gramática CFG del parser agrupa tokens.\n\n### Estructura del token\n\nCampos mínimos:\n\n- **Tipo**: categoría abstracta (`NUMERO`, `ID`, `PLUS`, `EOF`).\n- **Lexema**: substring fuente que disparó el token (`\"while\"`, `\"42\"`, `\"total\"`).\n- **Posición**: para diagnósticos (`línea 12, columna 4`).\n- Opcional: valor semántico ya parseado (`int(42)`), literal de string ya sin escapes.\n\nSeparar tipo de lexema permite que muchos identificadores compartan `ID` mientras la tabla de símbolos distingue nombres.\n\n### Regex, prioridad y maximal munch\n\nCuando dos patrones coinciden, reglas estándar:\n\n1. **Prioridad explícita**: en Flex, reglas más arriba ganan; categoría `keyword` antes que `identifier`.\n2. **Longest match**: el lexer consume la secuencia más larga reconocible (evita que `<=` se tokenice como `<` y `=`).\n\nPalabras clave vs IDs: patrón `if` como keyword separado antes que `[a-zA-Z]+` para IDs.\n\n### Comentarios y espacios\n\nNo se emiten al parser. Se reconocen con regex (`//.*`, `/\\*[\\s\\S]*?\\*/`, `#.*`) y se descartan, pero el lexer actualiza contador de líneas en `\\n` dentro de comentarios multilínea.\n\n### De regex a DFA (repaso aplicado)\n\nThompson construye NFA por operador; subset construction → DFA; minimización opcional. `re` en Python hace esto internamente en `re.compile`. En producción, lexers críticos (Lex/Flex) precomputan tablas para evitar backtracking catastrófico.\n\n### Errores léxicos\n\n- Carácter ilegal (`@` en subconjunto del lenguaje).\n- String sin cerrar.\n- Número mal formado (`1.2.3`).\n- Estrategia: reportar error, saltar un carácter o hasta sincronizar, continuar para listar más errores.\n\n## Demostración enlazada al código del módulo\n\nEl `lexer(codigo)` define `patrones` ordenados: `NUMERO`, `SUMA`, `MULT`, `ID`, `IGUAL`, `SKIP`.\n\n- Construye `tok_regex` con grupos nombrados `(?P<TIPO>patrón)`.\n- `re.finditer` recorre **maximal munch** según orden de alternancia en el regex unido por `|`.\n- `SKIP` absorbe espacios sin añadir token.\n\nPara `total = 100 + 50 * 2`: emite IDs, números, operadores; ignora espacios. **Orden de patrones importa**: si `ID` estuviera antes que palabra clave reservada, `while` sería ID.\n\nClase `Token` guarda tipo y valor; `__repr__` facilita depuración en consola.\n\n## Aplicaciones en sistemas reales\n\n**Flex en GCC**: historial del lexer C junto a Bison; hoy Clang usa lexer hand-written altamente optimizado con tablas.\n\n**Tree-sitter**: lexer incremental para editores; repro tokeniza solo regiones cambiadas en árboles de sintaxis.\n\n**Rust proc-macros**: no reemplazan el lexer principal, pero el frontend `rustc` tokeniza con reglas estrictas de Unicode identifiers.\n\n## Errores clásicos en examen\n\n- Pedir al lexer validar balanceo de paréntesis (tarea del parser).\n- Olvidar longest match en `<=` vs `<`.\n- No actualizar línea/columna al consumir `\\n`.\n- Usar regex greedy incorrecto en comentarios anidados (C no permite anidar `/* */`).\n- Confundir lexema con token type (`\"x\"` vs `ID`).\n\n## Preguntas de entrevista\n\n**P: ¿Por qué no tokenizar con split por espacios?**\n\n**R:** Operadores pegados a operandos (`a=5`), strings con espacios, y lexemas compuestos (`++`, `->`) requieren patrones regulares y autómata; split es insuficiente incluso para mini-lenguajes.\n\n**P: ¿Lexer a mano o generado?**\n\n**R:** Hand-written para control y velocidad (Clang, V8); Flex/Lex cuando la gramática léxica es estable y quieres tabla DFA explícita. Ambos son válidos en industria.\n\n## Síntesis y checklist antes de avanzar\n\n- Definí tokens para una mini-expresión a mano.\n- Expliqué el papel de `SKIP` en el snippet.\n- Describí conflicto keyword vs ID y su solución.\n- Relacioné regex del módulo con DFA de teoría.\n- Listo para parser (módulo 11).",
      codeSnippet: `# Ejemplo de Lexer completo en Python
import re

class Token:
    def __init__(self, tipo: str, valor: str):
        self.tipo = tipo
        self.valor = valor
    def __repr__(self):
        return f"Token({self.tipo}, '{self.valor}')"

def lexer(codigo: str) -> list:
    patrones = [
        ('NUMERO', r'\d+'),
        ('SUMA', r'\+'),
        ('MULT', r'\*'),
        ('ID', r'[a-zA-Z_]\w*'),
        ('IGUAL', r'='),
        ('SKIP', r'[ \t\n]+'), # Ignorar espacios
    ]
    tok_regex = '|'.join(f'(?P<{pair[0]}>{pair[1]})' for pair in patrones)
    tokens = []
    for mo in re.finditer(tok_regex, codigo):
        tipo = mo.lastgroup
        valor = mo.group()
        if tipo != 'SKIP':
            tokens.append(Token(tipo, valor))
    return tokens

print(lexer("total = 100 + 50 * 2"))`,
      quiz: [
        {
          question: "¿Cuál es la función principal de un Analizador Léxico (Lexer)?",
          options: ["Verificar si las variables están declaradas", "Agrupar la cadena de caracteres del código fuente en una secuencia de Tokens con tipo y valor", "Ejecutar el programa"],
          answerIndex: 1,
          explanation: "El Lexer convierte el texto bruto (caracteres) en una secuencia de Tokens comprensibles para el Parser."
        },
        {
          question: "¿Qué es un 'Lexema' en la fase de análisis léxico?",
          options: ["La secuencia de caracteres concreta en el código fuente que coincide con el patrón de un Token (ej: '1042' para el token NUMERO)", "Un error de compilación", "Una instrucción de CPU"],
          answerIndex: 0,
          explanation: "El lexema es la cadena de texto real (ej: 'while') que satisface la regla del tipo de token (KEYWORD_WHILE)."
        },
        {
          question: "¿Qué hace habitualmente un Lexer cuando encuentra comentarios o espacios en blanco?",
          options: ["Genera un error", "Los descarta/ignora sin emitir tokens hacia el Parser", "Los traduce a lenguaje ensamblador"],
          answerIndex: 1,
          explanation: "Los comentarios y espacios en blanco no tienen significado sintáctico ejecutable, por lo que el Lexer los filtra."
        },
        {
          question: "¿Qué herramienta clásica del ecosistema UNIX genera código C para un Analizador Léxico automáticamente?",
          options: ["Flex (o Lex)", "Bison (o Yacc)", "GCC"],
          answerIndex: 0,
          explanation: "Flex (Fast Lexical Analyzer) toma reglas de expresiones regulares y genera código C optimizado para el Lexer."
        },
        {
          question: "Si el código fuente contiene un símbolo inválido como 'x = 10 @ 5' donde '@' no existe en el lenguaje, ¿quién detecta el error?",
          options: ["El Analizador Léxico (error de carácter no reconocido)", "El Optimizador de código", "El Linker"],
          answerIndex: 0,
          explanation: "Al no haber ninguna regla Regex que coincida con el carácter '@', el Lexer dispara un Error Léxico."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Rol del Lexer: Convertir secuencia de caracteres en secuencia de Tokens?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Rol del Lexer: Convertir secuencia de caracteres en secuencia de To...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Rol del Lexer: Convertir secuencia de caracteres en secuencia de Tokens. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Estructura de un Token: (Tipo, Valor, Línea, Columna)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Estructura de un Token: (Tipo, Valor, Línea, Columna)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Estructura de un Token: (Tipo, Valor, Línea, Columna). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Eliminación de Espacios en Blanco, Tabulaciones y Comentarios?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Eliminación de Espacios en Blanco, Tabulaciones y Comentarios", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Eliminación de Espacios en Blanco, Tabulaciones y Comentarios. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Generadores Léxicos Automáticos: Flex / Lex?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Generadores Léxicos Automáticos: Flex / Lex", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Generadores Léxicos Automáticos: Flex / Lex. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Manejo de Errores Léxicos (Caracteres ilegales)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Manejo de Errores Léxicos (Caracteres ilegales)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Manejo de Errores Léxicos (Caracteres ilegales). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 11,
      title: "MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR",
      description: "Construcción del Árbol de Sintaxis Abstracta (AST) mediante parsing Top-Down y Bottom-Up.",
      items: [
      "Rol del Parser: Validar la estructura gramatical de los Tokens.",
      "Parsing Descendente (Top-Down): Descenso Recursivo y Parsers LL(1).",
      "Parsing Ascendente (Bottom-Up): Parsers LR(0), SLR(1), LALR(1) y LR(1).",
      "Conjuntos Primero (FIRST) y Siguiente (FOLLOW).",
      "Generadores Sintácticos Automáticos: Yacc / Bison.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ANÁLISIS SINTÁCTICO (PARSER) LL Y LR.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: PARSER LL VS LR, AST Y DESCENSO RECURSIVO\n\nTras el lexer, el parser valida que la secuencia de tokens pertenezca al lenguaje definido por la **gramática libre de contexto** del lenguaje y construye una estructura jerárquica: idealmente un **AST** (árbol de sintaxis abstracta) para fases posteriores. Dos familias dominan la práctica: **LL** (descendente, predictive, left-to-right leftmost) y **LR** (ascendente, shift-reduce). Los parsers LL(1) manuales o recursivos encajan en cursos y DSLs pequeños; los **LALR(1)** de Yacc/Bison impulsan parsers de C, Java y SQL.\n\nEsta lección conecta FIRST/FOLLOW con decisiones LL, contrasta shift/reduce en LR, y recorre el parser descendente del snippet (con corrección mental del `peek`).\n\n## Objetivos de la lección\n\n- Explicar el contrato parser: tokens → AST.\n- Contrastar top-down (LL) y bottom-up (LR/LALR).\n- Calcular FIRST y FOLLOW en gramáticas pequeñas.\n- Implementar descenso recursivo para expresiones con precedencia.\n- Relacionar conflictos shift/reduce con ambigüedad gramatical.\n\n## Desarrollo de la lección\n\n### Rol del parser\n\nEl parser consume tokens con **un token de lookahead** (LL(1)) o **pila de estados** (LR). Detecta errores sintácticos (`else` sin `if`, paréntesis huérfanos). Salida: AST, árbol concreto, o directamente IR en compiladores de un solo paso.\n\n### LL(1) y descenso recursivo\n\nCada no terminal se vuelve función `parse_X()` que:\n\n1. Mira token actual.\n2. Elige producción según FIRST/FOLLOW.\n3. Consume tokens y llama recursivamente a sub-reglas.\n\n**FIRST(\\(\\alpha\\))**: terminales que pueden iniciar derivaciones de \\(\\alpha\\). **FOLLOW(A)**: terminales que pueden seguir a \\(A\\) en una derivación.\n\nCondición LL(1): para no terminal \\(A\\) con producciones \\(A \\rightarrow \\alpha_1 \\mid \\ldots \\mid \\alpha_k\\), los conjuntos FIRST de cada alternativa son **disjuntos** (y si \\(\\epsilon \\in\\) FIRST, no intersectan FOLLOW).\n\n### LR, shift y reduce\n\nAutomaton sobre **ítems** (reglas con punto ·). **Shift**: empujar token a la pila. **Reduce**: reemplazar handle en tope por no terminal. **Goto**: tras reducir, transicionar con el no terminal.\n\nConflicto **shift/reduce**: gramática no LR(1) sin precedencia declarada. **reduce/reduce**: más grave, ambigüedad dura.\n\nLALR fusiona estados LR(1) equivalentes — tablas más compactas, casi mismo poder en lenguajes reales.\n\n### AST vs árbol de derivación\n\nEl AST omite nodos puramente sintácticos (paréntesis redundantes, reglas de lista). Nodos típicos: `BinaryOp`, `Literal`, `Assign`, `If`. El visitor del módulo 12 y generador IR del 13 recorren AST.\n\n### Precedencia en descenso recursivo\n\nPatrón clásico por niveles:\n\n- `parse_expr` para suma/resta (asocia izquierda, llama a `parse_term`).\n- `parse_term` para mult/div.\n- `parse_factor` para números y paréntesis.\n\nEsto implementa la gramática no ambigua del módulo 6 sin tablas LL generadas.\n\n### Yacc/Bison\n\nEl desarrollador escribe reglas con acciones C; Bison genera parser LALR. Directivas `%left`, `%right` resuelven conflictos de precedencia sin reescribir toda la CFG.\n\n## Demostración enlazada al código del módulo\n\n`ParserSimple` recibe lista de lexemas (strings). `parse_expresion` asume gramática plana `NUMERO ('+' NUMERO)*`:\n\n- Toma primer número como `left`.\n- Mientras el siguiente token sea `'+'`, consume y acumula `Add(left, right)` como **string** simulando AST.\n\nResultado para `10+20+30`: `Add(Add(10, 20), 30)` — **asociatividad izquierda** explícita.\n\n**Nota del snippet publicado**: la línea `def peek(` tiene sintaxis incorrecta en el curso (`(): return` mezclado); la intención es método `peek` que devuelve token actual sin consumir. Al corregirlo, el parser podría decidir con lookahead entre reglas.\n\nEl parser **no** implementa `*` ni precedencia; extender con `parse_term` es el ejercicio natural del laboratorio.\n\n## Aplicaciones en sistemas reales\n\n**Go compiler `gc`**: parser descendente recursivo escrito a mano — estilo LL con precedencia explícita.\n\n**PostgreSQL SQL parser**: gramática grande, tradicionalmente yacc/bison style para SQL complejo.\n\n**Python parser (PEG)**: desde 3.9+, parser PEG alternativo a LL/LR clásico; sigue emitiendo AST.\n\n## Errores clásicos en examen\n\n- Confundir LL con LR (dirección de construcción del árbol).\n- Olvidar que FOLLOW importa con producciones ε.\n- Creer que todo lenguaje LLC tiene parser LL(1) (falso: LL es subclase práctica).\n- No distinguir shift/reduce de reduce/reduce.\n- Parse tree = AST (falso).\n\n## Preguntas de entrevista\n\n**P: ¿LL o LR para un nuevo DSL interno?**\n\n**R:** LL/recursivo si el equipo quiere código legible y gramática pequeña; LR/Bison si la gramática es grande, con mucha precedencia, o se aporta tabla automática. Muchos DSLs empiezan LL manual.\n\n**P: ¿Qué es el lookahead en LL(1)?**\n\n**R:** Un token de inspección sin consumir para elegir la producción correcta; los conjuntos FIRST/FOLLOW formalizan esa decisión.\n\n## Síntesis y checklist antes de avanzar\n\n- Calculé FIRST de un no terminal simple.\n- Tracé shift/reduce en una tabla mini LR de dos reglas.\n- Ejecuté ParserSimple y expliqué asociatividad izquierda.\n- Esbocé extensión con `*` y precedencia.\n- Listo para análisis semántico (módulo 12).",
      codeSnippet: `# Ejemplo de Parser por Descenso Recursivo en Python para expresiones simples
class ParserSimple:
    def __init__(self, tokens):
        self.tokens = tokens
        self.pos = 0

    def peek((): return self.tokens[self.pos] if self.pos < len(self.tokens) else None
    
    def parse_expresion(self):
        # Regla: Expresion -> NUMERO ('+' NUMERO)*
        left = self.tokens[self.pos]
        self.pos += 1
        while self.pos < len(self.tokens) and self.tokens[self.pos] == '+':
            self.pos += 1 # Consumir '+'
            right = self.tokens[self.pos]
            self.pos += 1
            left = f"Add({left}, {right})"
        return left

parser = ParserSimple(['10', '+', '20', '+', '30'])
print(f"AST resultante: {parser.parse_expresion()}") # Add(Add(10, 20), 30)`,
      quiz: [
        {
          question: "¿Cuál es el resultado o estructura de salida principal producida por el Analizador Sintáctico (Parser)?",
          options: ["Un archivo binario ejecutable .exe", "El Árbol de Sintaxis Abstracta (AST - Abstract Syntax Tree)", "Una tabla de direcciones IP"],
          answerIndex: 1,
          explanation: "El Parser transforma la secuencia plana de tokens en un árbol jerárquico (AST) que representa la estructura del código."
        },
        {
          question: "¿En qué consiste el método de Parsing Top-Down (Descendente)?",
          options: ["En construir el árbol sintáctico partiendo desde el símbolo inicial (raíz) y derivando hacia los tokens finales (hojas)", "En empezar desde los tokens finales", "En leer el archivo al revés"],
          answerIndex: 0,
          explanation: "El parsing Top-Down comienza buscando aplicar reglas desde la raíz inicial S intentando coincidir con los tokens de entrada."
        },
        {
          question: "¿Qué significan las siglas 'LL(1)' en un analizador sintáctico?",
          options: ["Left-to-right scan, Leftmost derivation, 1 token de preanálisis (lookahead)", "Long Logic 1", "Low Level 1"],
          answerIndex: 0,
          explanation: "LL(1) indica lectura de izquierda a derecha, derivación por la izquierda y uso de 1 token adelantado para decidir qué regla aplicar."
        },
        {
          question: "¿Qué tipo de conflicto ocurre en un Parser LR cuando la tabla no sabe si realizar una transición de desplazamiento o una reducción?",
          options: ["Conflicto Shift/Reduce", "Error de división por cero", "Stack Overflow"],
          answerIndex: 0,
          explanation: "Un conflicto Shift/Reduce en gramáticas LR surge cuando el parser no sabe si consumir el siguiente token (Shift) o aplicar una regla (Reduce)."
        },
        {
          question: "¿Para qué se calculan los conjuntos FIRST y FOLLOW en el diseño de un Parser LL(1)?",
          options: ["Para saber qué terminales pueden iniciar una regla y qué terminales pueden aparecer justo después de un no terminal", "Para contar variables", "Para borrar tokens"],
          answerIndex: 0,
          explanation: "FIRST y FOLLOW permiten construir la tabla de parseo determinista sin ambigüedad."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Rol del Parser: Validar la estructura gramatical de los Tokens?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Rol del Parser: Validar la estructura gramatical de los Tokens", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Rol del Parser: Validar la estructura gramatical de los Tokens. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Parsing Descendente (Top-Down): Descenso Recursivo y Parsers LL(1)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Parsing Descendente (Top-Down): Descenso Recursivo y Parsers LL(1)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Parsing Descendente (Top-Down): Descenso Recursivo y Parsers LL(1). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Parsing Ascendente (Bottom-Up): Parsers LR(0), SLR(1), LALR(1) y LR(1)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Parsing Ascendente (Bottom-Up): Parsers LR(0), SLR(1), LALR(1) y LR(1)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Parsing Ascendente (Bottom-Up): Parsers LR(0), SLR(1), LALR(1) y LR(1). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Conjuntos Primero (FIRST) y Siguiente (FOLLOW)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Conjuntos Primero (FIRST) y Siguiente (FOLLOW)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conjuntos Primero (FIRST) y Siguiente (FOLLOW). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Generadores Sintácticos Automáticos: Yacc / Bison?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Generadores Sintácticos Automáticos: Yacc / Bison", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Generadores Sintácticos Automáticos: Yacc / Bison. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 12,
      title: "MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS",
      description: "Verificación de tipos, alcance de variables (Scope) y validación semántica sobre el AST.",
      items: [
      "Rol del Analizador Semántico: Garantizar que el programa tenga sentido lógico.",
      "La Tabla de Símbolos: Almacenamiento de variables, funciones, tipos y alcances.",
      "Chequeo de Tipos (Type Checking) e Inferencia de Tipos.",
      "Verificación de Declaración antes de Uso y Alcance (Scope Global/Local).",
      "Decoración del Árbol Sintáctico (Annotated AST).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: ANÁLISIS SEMÁNTICO, TABLA DE SÍMBOLOS, SCOPE Y TYPE CHECKING\n\nLa sintaxis puede ser perfecta y el programa seguir siendo inválido: usar una variable no declarada, sumar `int` con `string`, o referirse a un campo privado desde otro módulo. El **análisis semántico** asigna **significado** al AST: tipos, alcances (scope), visibilidad, compatibilidad de operadores. La **tabla de símbolos** es la estructura de datos central: un mapa de nombres a entradas con tipo, categoría (variable, función, tipo), dirección o offset, y metadatos de compilación.\n\nA diferencia del parser (CFG), muchas reglas semánticas **no** son libres de contexto puras: declara antes de usar, herencia de tipos en clases — a veces se modelan con gramáticas atribuidas o chequeos en visitor post-parse.\n\n## Objetivos de la lección\n\n- Definir tabla de símbolos y operaciones insert/lookup.\n- Implementar scope anidado con pila de tablas o árbol de scopes.\n- Explicar verificación de tipos (reglas de tipado, coerciones).\n- Distinguir errores semánticos de sintácticos y léxicos.\n- Recorrer el snippet de chequeo de tipos del módulo.\n\n## Desarrollo de la lección\n\n### Fases del analizador semántico\n\nTípicamente dos pasadas (pueden fusionarse):\n\n1. **Construcción de símbolos**: recorre declaraciones, llena tabla (funciones, variables globales, tipos).\n2. **Chequeo**: recorre cuerpos, valida usos, infiere o verifica tipos de expresiones.\n\nEn C, la primera pasada registra firmas; en Java, resolución de tipos puede requerir grafo de dependencias entre clases.\n\n### Tabla de símbolos\n\nCada entrada puede contener:\n\n- Nombre y categoría (`var`, `func`, `param`, `typedef`).\n- Tipo (estructura compuesta: puntero, array, función).\n- Scope level o enlace a scope padre.\n- Para codegen: offset en stack frame, tamaño, etiqueta assembly.\n- Flags: `const`, `static`, `mutable`.\n\nOperaciones:\n\n- **insert(name, entry)** — falla si duplicado en mismo scope (salvo sobrecarga con mangling).\n- **lookup(name)** — busca desde scope actual hacia afuera (regla léxica de scope).\n\n### Scope estático vs dinámico\n\nLa mayoría de lenguajes imperiales usan **scope léxico/estático**: el significado de `x` se deduce del texto anidado en tiempo de compilación. **Scope dinámico** (raro: algunas Lisp históricas, macros): el significado depende de la pila de llamadas en runtime.\n\nImplementación clásica: **pila de hash maps**. Entrar bloque → push mapa vacío; salir → pop. Lookup consulta de arriba a abajo.\n\n### Type checking\n\nReglas de forma:\n\n- \\(\\Gamma \\vdash e : T\\) — «en contexto \\(\\Gamma\\), expresión \\(e\\) tiene tipo \\(T\\)».\n\nPara binarios: exigir tipos compatibles; resultado según tabla (`int + int → int`). Subtipos: si `Dog <: Animal`, asignar `Dog` donde se espera `Animal`.\n\n**Coerciones implícitas** (promoción int→float) se insertan como nodos cast en AST decorado.\n\nErrores comunes reportados aquí: cantidad de argumentos, tipos de retorno en `return`, condicionales no booleanos.\n\n### Análisis de flujo de control (introducción)\n\nAvisos: variable leída antes de asignar, código inalcanzable, paths sin return. Algunos compiladores tratan warnings como errores con `-Werror`.\n\n### Interacción con código generador\n\nEl AST tipado alimenta IR: cada nodo sabe su tipo para elegir instrucciones (`imul` vs `fmul`) y tamaños.\n\n## Demostración enlazada al código del módulo\n\nEl snippet del curso modela `TablaSimbolos` con diccionario interno y métodos `declarar` / `consultar`. El chequeo compara tipos de operandos en asignaciones y operaciones — patrón visitor minimalista.\n\nAl recorrer AST de asignación `x = expr`:\n\n1. `consultar('x')` debe existir y ser asignable.\n2. Tipo de `expr` debe ser compatible con tipo de `x`.\n3. Si éxito, marcar variable como «definitivamente asignada» en análisis de flujo simple.\n\nExtender con **pila de scopes**: al entrar en función, nuevo dict; `declarar` solo en tope; `consultar` busca en cadena de dicts.\n\n## Aplicaciones en sistemas reales\n\n**TypeScript**: análisis semántico rico (tipos estructurales, inferencia) antes de emitir JS.\n\n**mypy / Pyright**: type checking opcional sobre Python; tabla de símbolos + inferencia gradual.\n\n**Rust borrow checker**: fase después del tipado; semántica de lifetimes (más allá de «tipos clásicos»).\n\n## Errores clásicos en examen\n\n- Buscar símbolo solo en scope global (olvida shadowing local).\n- Permitir redeclaración en mismo scope sin error.\n- Confundir nombre de tipo con variable.\n- Olvidar que `lookup` en C++ puede devolver sobrecargas múltiples.\n- Mezclar tabla de símbolos con tabla de parse LR (distintas).\n\n## Preguntas de entrevista\n\n**P: ¿Cómo modelas shadowing?**\n\n**R:** Pila de tablas: insert en tope; lookup desde tope hacia abajo devuelve el binding más interno visible léxicamente.\n\n**P: ¿Semántico vs sintaxis en `x = ;`?**\n\n**R:** Sintaxis: falta expresión tras `=`. Semántico sería `x = y` con `y` no declarado o tipos incompatibles con sintaxis válida.\n\n## Síntesis y checklist antes de avanzar\n\n- Implementé mentalmente push/pop de scope.\n- Escribí tres reglas de tipado para `+`, asignación, llamada.\n- Diferencié léxico/sintaxis/semántica con un ejemplo cada uno.\n- Revisé snippet de tabla de símbolos del módulo.\n- Listo para IR y TAC (módulo 13).",
      codeSnippet: `# Ejemplo de Tabla de Símbolos y Chequeo de Tipos en Python
class TablaSimbolos:
    def __init__(self):
        self.simbolos = {} # {nombre_var: tipo}

    def declarar(self, nombre: str, tipo: str):
        if nombre in self.simbolos:
            raise Exception(f"Error Semántico: Variable '{nombre}' ya declarada.")
        self.simbolos[nombre] = tipo

    def obtener_tipo(self, nombre: str) -> str:
        if nombre not in self.simbolos:
            raise Exception(f"Error Semántico: Variable '{nombre}' no declarada.")
        return self.simbolos[nombre]

tabla = TablaSimbolos()
tabla.declarar("contador", "int")
print(f"Tipo de 'contador': {tabla.obtener_tipo('contador')}") # 'int'`,
      quiz: [
        {
          question: "¿Cuál es la tarea fundamental del Analizador Semántico?",
          options: ["Contar las líneas de código", "Verificar que las operaciones sean válidas según los tipos de datos y que las variables respeten su declaración y alcance (Scope)", "Generar código binario"],
          answerIndex: 1,
          explanation: "El análisis semántico valida el significado: comprueba tipos, declaraciones previas, llamadas a funciones con parámetros correctos, etc."
        },
        {
          question: "¿Qué información almacena la Tabla de Símbolos durante la compilación?",
          options: ["Identificadores (variables, funciones), sus tipos de datos, ámbito (scope) y direcciones relativas", "Los comentarios del programador", "Los textos de error"],
          answerIndex: 0,
          explanation: "La tabla de símbolos es la base de datos interna del compilador que asocia cada identificador con sus atributos."
        },
        {
          question: "¿Qué tipo de error detecta el Analizador Semántico al compilar `int x = 10; string s = x;` en un lenguaje estáticamente tipado?",
          options: ["Error Léxico", "Error de Incompatibilidad de Tipos (Type Mismatch)", "Error de Hardware"],
          answerIndex: 1,
          explanation: "Asignar un valor `int` a una variable de tipo `string` sin conversión explícita viola las reglas de tipo (Type Checking)."
        },
        {
          question: "¿Qué es el 'Alcance' o 'Scope' de una variable?",
          options: ["La región del código fuente donde una variable declarada es accesible y válida", "El tamaño en bytes de la variable", "El nombre de la variable"],
          answerIndex: 0,
          explanation: "El Scope define el contexto (bloque, función, global) dentro del cual una variable existe y puede ser referenciada."
        },
        {
          question: "¿En qué consiste la 'Decoración del AST' (Annotated AST)?",
          options: ["En agregar colores a la pantalla", "En asociar a cada nodo del AST su tipo de dato verificado y atributos semánticos resueltos", "En borrar nodos innecesarios"],
          answerIndex: 1,
          explanation: "El árbol sintáctico se 'anota' agregando información de tipos y comprobaciones para ser usada por la fase de generación de código."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Rol del Analizador Semántico: Garantizar que el programa tenga sentido lógico?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Rol del Analizador Semántico: Garantizar que el programa tenga sent...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Rol del Analizador Semántico: Garantizar que el programa tenga sentido lógico. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: La Tabla de Símbolos: Almacenamiento de variables, funciones, tipos y alcances?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: La Tabla de Símbolos: Almacenamiento de variables, funciones, tipos...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que La Tabla de Símbolos: Almacenamiento de variables, funciones, tipos y alcances. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Chequeo de Tipos (Type Checking) e Inferencia de Tipos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Chequeo de Tipos (Type Checking) e Inferencia de Tipos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Chequeo de Tipos (Type Checking) e Inferencia de Tipos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Verificación de Declaración antes de Uso y Alcance (Scope Global/Local)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Verificación de Declaración antes de Uso y Alcance (Scope Global/Lo...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Verificación de Declaración antes de Uso y Alcance (Scope Global/Local). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Decoración del Árbol Sintáctico (Annotated AST)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Decoración del Árbol Sintáctico (Annotated AST)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Decoración del Árbol Sintáctico (Annotated AST). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 13,
      title: "MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)",
      description: "Traducción a representaciones intermedias independientes de la arquitectura (Código de 3 Direcciones).",
      items: [
      "Necesidad de la Representación Intermedia (IR).",
      "Código de Tres Direcciones (TAC - Three-Address Code).",
      "Estructura de Cuádruplas y Tripletas.",
      "Traducción Dirigida por la Sintaxis (SDT) de Expresiones y Condicionales.",
      "Generación de Etiquetas y Saltos Temporales (Label & GOTO).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: CÓDIGO INTERMEDIO — IR, TAC Y CUÁDRUPLAS\n\nTras validar tipos, el compilador no salta directamente a `mov rax, ...`. Introduce una **representación intermedia** (IR) independiente de la sintaxis y del hardware: facilita optimización, análisis y backends múltiples. Formas clásicas: **código de tres direcciones** (TAC) — cada instrucción tiene a lo sumo dos operandos fuente y un destino — y **cuádruplas** — tuplas `(op, arg1, arg2, result)` fáciles de serializar y optimizar.\n\nLLVM IR, GCC GIMPLE, o las listas `t0 = a + b` del laboratorio comparten el espíritu: variables temporales ilimitadas, saltos explícitos, memoria modelada abstractamente.\n\n## Objetivos de la lección\n\n- Motivar IR frente a AST y frente a assembly.\n- Definir TAC y cuádruplas con ejemplos.\n- Generar TAC desde AST de expresiones y asignaciones.\n- Mencionar SSA como evolución de IR para optimización.\n- Leer el generador TAC del snippet del módulo.\n\n## Desarrollo de la lección\n\n### ¿Por qué IR?\n\n- **Desacopla** frontend de backend.\n- **Uniforma** optimizaciones (mismo pass de constant folding sobre TAC o LLVM).\n- **Simplifica** codegen: backend solo selecciona instrucciones desde IR normalizado.\n\nAST conserva jerarquía anidada poco conveniente para análisis lineal; assembly tiene orden fijo y registros escasos demasiado pronto.\n\n### TAC — three-address code\n\nFormato típico:\n\n```\nt1 = a + b\nt2 = t1 * c\nx  = t2\n```\n\nCada línea referencia **nombres temporales** como registros virtuales ilimitados. Operaciones unarias: `t = -a`. Saltos: `if a < b goto L1`. Lectura/escritura memoria: `t = *p`, `*p = t`.\n\n### Cuádruplas y tríadas\n\n- Cuádrupla: `(ADD, a, b, t1)` — fácil de reordenar y almacenar en arrays.\n- Tríada: `(ADD, a, b)` con orden implícito por índice de instrucción.\n\nLos optimizadores recorren listas de cuádruplas, construyen grafos use-def, insertan φ-functions en SSA.\n\n### Generación desde AST\n\nVisitor **post-order** en expresiones:\n\n1. Visitar hijos, obtener temporales `t_left`, `t_right`.\n2. Emitir cuádrupla `(OP, t_left, t_right, t_new)`.\n3. Retornar `t_new`.\n\nAsignación `x = e`: emitir para `e`, luego `(ASSIGN, t_e, _, x)`.\n\nControl de flujo: `if`, `while` emiten labels y saltos condicionales.\n\n### SSA (Static Single Assignment)\n\nCada variable se asigna exactamente una vez; redefiniciones crean nuevas versiones `x1`, `x2`. Facilita propagación y eliminación de redundancias. LLVM IR está en SSA; φ en merge de CFG.\n\n### Representaciones gráficas\n\n**Sea of Nodes** o **Explicit CFG + instructions** en compiladores JIT. La elección afecta costo de modificar IR bajo optimización.\n\n## Demostración enlazada al código del módulo\n\nEl generador TAC del curso recorre AST simple y acumula lista de strings o cuádruplas: por cada `Add`, crea temporal nuevo `t_k = left op right`; la asignación final enlaza variable usuario.\n\nTrazar `x = (10 + 5) * 2`:\n\n1. `(ADD, 10, 5, t0)`\n2. `(MUL, t0, 2, t1)`\n3. `(ASSIGN, t1, _, x)`\n\nCoincide con pipeline demo módulo 9. Temporales son ilimitados; el backend posterior asignará registros físicos (módulo 15).\n\n## Aplicaciones en sistemas reales\n\n**LLVM IR**: texto legible `.ll`, serializable, con passes `opt`.\n\n**WebAssembly**: stack machine como IR de bajo nivel para navegadores.\n\n**SQL engines**: planes de ejecución como DAG de operadores — IR de dominio específico.\n\n## Errores clásicos en examen\n\n- Generar assembly antes de temporales (mezclar fases).\n- Olvidar temporales en expresiones anidadas (reusar mal un registro).\n- Confundir cuádrupla con triádica sin numerar orden.\n- No emitir saltos en `if`/`while`.\n- AST y TAC como el mismo árbol (TAC es secuencia plana).\n\n## Preguntas de entrevista\n\n**P: ¿Ventaja de SSA sobre TAC clásico?**\n\n**R:** Definiciones únicas simplifican análisis de flujo de datos y eliminan ambigüedad sobre qué versión de `x` se lee en cada punto.\n\n**P: ¿Dónde vive el IR en GCC vs LLVM?**\n\n**R:** GCC: varias IR internas (GENERIC, GIMPLE, RTL). LLVM: IR único desde frontend hasta casi el backend.\n\n## Síntesis y checklist antes de avanzar\n\n- Traduje AST de suma encadenada a lista TAC.\n- Escribí tres cuádruplas para `if (a) x = 1`.\n- Comparé IR con salida del snippet del módulo.\n- Nombré un pass de optimización que opera sobre IR (módulo 14).\n- Listo para optimización.",
      codeSnippet: `# Generación de Código de 3 Direcciones (TAC) en Python
class GeneradorTAC:
    def __init__(self):
        self.contador_temp = 0
        self.instrucciones = []

    def nuevo_temporal(self) -> str:
        self.contador_temp += 1
        return f"t{self.contador_temp}"

    def generar_expr_suma(self, op1: str, op2: str) -> str:
        temp = self.nuevo_temporal()
        self.instrucciones.append(f"{temp} = {op1} + {op2}")
        return temp

tac = GeneradorTAC()
t1 = tac.generar_expr_suma("a", "b")
t2 = tac.generar_expr_suma(t1, "c")
for inst in tac.instrucciones:
    print(inst)
# Output:
# t1 = a + b
# t2 = t1 + c`,
      quiz: [
        {
          question: "¿Por qué se utiliza una Representación Intermedia (IR) como Código de 3 Direcciones (TAC) en lugar de pasar directamente a Ensamblador?",
          options: ["Porque independiza el compilador del hardware final, permitiendo optimizar el código una sola vez para múltiples CPUs", "Porque el código de 3 direcciones corre en el navegador", "Porque usa menos memoria RAM"],
          answerIndex: 0,
          explanation: "La IR aísla las fases de análisis (Frontend) de las de síntesis (Backend), facilitando la portabilidad y la optimización."
        },
        {
          question: "¿Por qué se llama 'Código de Tres Direcciones' (TAC)?",
          options: ["Porque solo tiene 3 líneas de código", "Porque cada instrucción contiene como máximo 3 ubicaciones de memoria o temporales (dos operandos de entrada y un resultado)", "Porque usa 3 procesadores"],
          answerIndex: 1,
          explanation: "En TAC las operaciones complejas se desglosan en instrucciones elementales de la forma `resultado = operando1 op operando2`."
        },
        {
          question: "¿Cómo se representan los bucles `while` y condicionales `if` en Código de Tres Direcciones?",
          options: ["Mediante instrucciones de salto condicional e incondicional (IF_FALSE t1 GOTO label / GOTO label)", "Mediante funciones de matriz", "Con comentarios"],
          answerIndex: 0,
          explanation: "Las estructuras de control de alto nivel se aplanan en TAC mediante etiquetas de memoria y saltos `GOTO`."
        },
        {
          question: "¿Qué es una 'Cuádrupla' en la representación de código intermedio?",
          options: ["Una estructura de datos que almacena (Operador, Operando1, Operando2, Resultado)", "Un tipo de variable float de 4 bytes", "Un error sintáctico"],
          answerIndex: 0,
          explanation: "Una cuádrupla es un registro explícito de 4 campos que representa una instrucción TAC."
        },
        {
          question: "¿Qué infraestructura de compiladores famosa moderna utiliza una IR basada en SSA (Static Single Assignment)?",
          options: ["LLVM IR", "MS-DOS", "Visual Basic"],
          answerIndex: 0,
          explanation: "LLVM utiliza una representación intermedia extremadamente optimizada en formato SSA donde cada variable se asigna una sola vez."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Necesidad de la Representación Intermedia (IR)?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Necesidad de la Representación Intermedia (IR)", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Necesidad de la Representación Intermedia (IR). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Código de Tres Direcciones (TAC - Three-Address Code)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Código de Tres Direcciones (TAC - Three-Address Code)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Código de Tres Direcciones (TAC - Three-Address Code). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Estructura de Cuádruplas y Tripletas?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Estructura de Cuádruplas y Tripletas", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Estructura de Cuádruplas y Tripletas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Traducción Dirigida por la Sintaxis (SDT) de Expresiones y Condicionales?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Traducción Dirigida por la Sintaxis (SDT) de Expresiones y Condicio...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Traducción Dirigida por la Sintaxis (SDT) de Expresiones y Condicionales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Generación de Etiquetas y Saltos Temporales (Label & GOTO)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Generación de Etiquetas y Saltos Temporales (Label & GOTO)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Generación de Etiquetas y Saltos Temporales (Label & GOTO). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 14,
      title: "MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO",
      description: "Técnicas de optimización de rendimiento: Plegado de constantes, eliminación de código muerto y optimización de bucles.",
      items: [
      "Objetivos de la Optimización: Reducir tiempo de ejecución y tamaño del código.",
      "Plegado de Constantes (Constant Folding) y Propagación de Constantes.",
      "Eliminación de Código Muerto (Dead Code Elimination).",
      "Reducción de Fuerza (Strength Reduction) y Eliminación de Subexpresiones Comunes.",
      "Optimización de Bucles: Invariantes de Bucle y Desenrollado (Loop Unrolling).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de OPTIMIZACIÓN DE CÓDIGO INTERMEDIO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: OPTIMIZACIÓN — CONSTANT FOLDING, DCE Y BUCLES\n\nLa IR generada tras el frontend es **correcta** pero rarely **eficiente**: expresiones con literales se evalúan en runtime aunque se conocen en compile-time; temporales muertos ocupan «registros virtuales»; bucles repiten cálculos invariantes. El **middle-end** aplica **optimizaciones** preservando **semántica observable** (salvo FP edge cases y threading).\n\nEsta lección cubre **constant folding**, **propagación de constantes**, **eliminación de código muerto (DCE)** e introducción a **optimización de loops** (invariant code motion, desenrollado). El snippet del módulo simula folding sobre una lista de asignaciones.\n\n## Objetivos de la lección\n\n- Definir optimización correcta vs transformación unsafe.\n- Aplicar constant folding y propagación en TAC a mano.\n- Reconocer código muerto local y global (liveness).\n- Nombrar optimizaciones de loop y cuándo aplicarlas.\n- Ejecutar el snippet de plegado de constantes.\n\n## Desarrollo de la lección\n\n### Marco: análisis antes de transformar\n\nOptimizaciones usan análisis **must/may**:\n\n- **Reaching definitions**, **available expressions**, **liveness** (para DCE).\n- Solo tras probar seguridad se reescribe IR.\n\nGCC/LLVM encadenan **passes**; orden importa (re-run constant fold después de DCE).\n\n### Constant folding\n\nSi operandos son constantes, calcular en compilación:\n\n`x = 3 + 5` → `x = 8` (cuádrupla o literal en símbolo).\n\nExtensible a operaciones parciales y comparaciones (`if 1 < 2` → `if true`).\n\n### Propagación de constantes y SPARK\n\nSi `x = 7` y solo `y = x + 1` usa `x`, sustituir → `y = 8`. Iterar hasta punto fijo. Combinar con **sparse conditional constant propagation** para ramas constantes.\n\n### Eliminación de código muerto (DCE)\n\nInstrucción es muerta si su resultado **no afecta** salida observable (return, escritura memoria global, IO). Análisis de **liveness** hacia atrás: si temporal `t` no está vivo después de definirse, remover definición.\n\nCuidado: efectos secundarios (`call printf`) no son muertos aunque el valor de retorno no se use.\n\n### Optimización de bucles\n\n- **Invariant code motion**: mover `t = a * b` fuera de `while` si `a,b` no cambian en el loop.\n- **Induction variable strength reduction**: reemplazar multiplicación en índice por suma.\n- **Loop unrolling**: duplicar cuerpo para reducir overhead de salto (trade-off tamaño).\n- **Vectorization**: SIMD si dependencias lo permiten (LLVM loop vectorizer).\n\nDependencias **carried** bloquean paralelización.\n\n### Nivel de optimización\n\n`-O0` (sin opts, debug), `-O2` equilibrio, `-Os` tamaño, `-O3` agresivo. Tiempo de compilación crece.\n\n## Demostración enlazada al código del módulo\n\nEl snippet recorre asignaciones; si ambos operandos de `+` o `*` son numéricos literales en la representación interna, reemplaza la operación por el valor calculado con `eval` controlado o aritmética Python.\n\nEso es **constant folding** local línea a línea. No hace propagación global ni DCE (si `t1` muerto permanece).\n\nExtensión laboratorio: segundo pass que marca temporales vivos desde `return` y elimina defs no vivas.\n\n## Aplicaciones en sistemas reales\n\n**LLVM `-mem2reg` + SCCP**: promueve memoria stack a SSA y propaga constantes agresivamente.\n\n**Java JIT HotSpot**: optimiza bytecode caliente tras perfilado — folding y inline en runtime.\n\n**SQLite query planner**: «optimiza» queries; análogo conceptual de cost model en IR.\n\n## Errores clásicos en examen\n\n- Folding que ignora overflow definido del lenguaje (C signed UB).\n- DCE que elimina `call` con efectos laterales.\n- Mover código invariante que muta en el loop.\n- Confundir peephole con análisis global de flujo.\n- Asumir que `-O3` siempre es más rápido (puede hinchar I-cache).\n\n## Preguntas de entrevista\n\n**P: ¿DCE local vs global?**\n\n**R:** Local: instrucción inútil inmediata en bloque. Global: usa liveness inter-bloques en CFG; elimina cadenas de temporales muertos cruzando saltos.\n\n**P: ¿Por qué correr constant fold varias veces?**\n\n**R:** Un fold crea nuevas constantes que otro pass puede propagar; iteración hasta estabilidad.\n\n## Síntesis y checklist antes de avanzar\n\n- Pliqué a mano `t0=2+3`, `t1=t0*4`.\n- Identifiqué instrucción muerta en un CFG de ejemplo.\n- Nombré una optimización segura para invariantes de loop.\n- Corrí snippet de folding del módulo.\n- Listo para codegen (módulo 15).",
      codeSnippet: `# Simulación de Plegado y Propagación de Constantes en Python
def optimizar_instrucciones_tac(instrucciones_tac: list) -> list:
    optimizadas = []
    for inst in instrucciones_tac:
        # Plegado de Constantes: reemplazar 't1 = 10 + 20' por 't1 = 30'
        partes = inst.split(' = ')
        var = partes[0]
        expr = partes[1]
        if '+' in expr:
            ops = expr.split(' + ')
            if ops[0].isdigit() and ops[1].isdigit():
                res = int(ops[0]) + int(ops[1])
                optimizadas.append(f"{var} = {res}")
                continue
        optimizadas.append(inst)
    return optimizadas

tac_raw = ["t1 = 10 + 20", "x = t1 * 2"]
print(f"TAC Optimizado: {optimizar_instrucciones_tac(tac_raw)}") # ['t1 = 30', 'x = t1 * 2']`,
      quiz: [
        {
          question: "¿En qué consiste la técnica de 'Plegado de Constantes' (Constant Folding)?",
          options: ["En evaluar expresiones formadas únicamente por constantes numéricas durante la compilación (ej: reemplazar 3 + 5 por 8)", "En borrar variables de memoria", "En guardar constantes en un archivo"],
          answerIndex: 0,
          explanation: "Evita ejecutar cálculos aritméticos repetidos en tiempo de ejecución realizando las operaciones fijas al compilar."
        },
        {
          question: "¿Qué es la 'Eliminación de Código Muerto' (Dead Code Elimination)?",
          options: ["Remover bloques de código que nunca se llegarán a ejecutar o cuyos resultados no son usados en ninguna parte", "Borrar comentarios del archivo", "Eliminar archivos ejecutables antiguos"],
          answerIndex: 0,
          explanation: "Reduce el tamaño del binario final eliminando instrucciones inalcanzables o variables cuyo valor jamás se lee."
        },
        {
          question: "¿Qué es la 'Reducción de Fuerza' (Strength Reduction)?",
          options: ["Reemplazar una operación matemáticamente equivalente pero de ejecución costosa por una más barata (ej: reemplazar x * 2 por x << 1)", "Reducir el tamaño de la pantalla", "Aumentar el número de bucles"],
          answerIndex: 0,
          explanation: "La reducción de fuerza sustituye instrucciones lentas de la CPU (como multiplicaciones o divisiones) por operaciones más rápidas de bits o sumas."
        },
        {
          question: "¿Qué es la optimización de 'Invariantes de Bucle' (Loop Invariant Code Motion)?",
          options: ["Mover fuera de un bucle aquellos cálculos cuyo resultado no cambia entre iteración e iteración", "Eliminar los bucles for", "Hacer que el bucle sea infinito"],
          answerIndex: 0,
          explanation: "Si una expresión dentro de un bucle produce siempre el mismo valor en cada iteración, se calcula una sola vez antes de ingresar al bucle."
        },
        {
          question: "¿Qué es el 'Desenrollado de Bucle' (Loop Unrolling)?",
          options: ["Replicar el cuerpo del bucle múltiples veces para reducir el número de saltos condicionales y la sobrecarga de control", "Convertir un bucle for en un while", "Desinstalar el programa"],
          answerIndex: 0,
          explanation: "El desenrollado de bucle intercambia un ligero incremento en tamaño de código por mayor velocidad al reducir las instrucciones de incremento y prueba."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Objetivos de la Optimización: Reducir tiempo de ejecución y tamaño del código?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Objetivos de la Optimización: Reducir tiempo de ejecución y tamaño ...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Objetivos de la Optimización: Reducir tiempo de ejecución y tamaño del código. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Plegado de Constantes (Constant Folding) y Propagación de Constantes?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Plegado de Constantes (Constant Folding) y Propagación de Constantes", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Plegado de Constantes (Constant Folding) y Propagación de Constantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Eliminación de Código Muerto (Dead Code Elimination)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Eliminación de Código Muerto (Dead Code Elimination)", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Eliminación de Código Muerto (Dead Code Elimination). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Reducción de Fuerza (Strength Reduction) y Eliminación de Subexpresiones Comunes?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Reducción de Fuerza (Strength Reduction) y Eliminación de Subexpres...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Reducción de Fuerza (Strength Reduction) y Eliminación de Subexpresiones Comunes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Optimización de Bucles: Invariantes de Bucle y Desenrollado (Loop Unrolling)?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Optimización de Bucles: Invariantes de Bucle y Desenrollado (Loop U...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Optimización de Bucles: Invariantes de Bucle y Desenrollado (Loop Unrolling). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 15,
      title: "MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN",
      description: "Generación final de Ensamblador (x86/ARM), asignación de registros físicos y la pila de llamadas (Call Stack).",
      items: [
      "Backend: Selección de Instrucciones de la Arquitectura Destino (x86 / ARM).",
      "Asignación de Registros Físicos (Register Allocation) y Algoritmo de Coloreado de Grafos.",
      "Gestión de Memoria Runtime: Segmento de Código, Datos, Heap y Stack.",
      "Registros de Activación (Stack Frames) y Convenciones de Llamada (cdecl/stdcall).",
      "El Enlazador (Linker) y Cargador (Loader): Generación del binario ejecutable final.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
      content: "## Panorama del tema: GENERACIÓN DE CÓDIGO OBJETO, REGISTROS Y ACTIVACIONES\n\nEl backend transforma IR optimizado en **instrucciones reales**: mov, add, load/store, saltos con offsets. Los **registros físicos** son escasos (x86-64: pocos callee-saved vs caller-saved); el compilador debe **asignar** temporales virtuales a `%rax`, `%rbx`, … o **spill** a memoria en stack.\n\nLas **activaciones** de funciones modelan **frames** en pila: parámetros, retorno, variables locales, registros guardados. Las **convenciones de llamada** (System V AMD64, Microsoft x64, AAPCS ARM) son contratos que el codegen debe respetar para interoperar con libc y otros objetos.\n\n## Objetivos de la lección\n\n- Esquematizar selección de instrucciones desde IR.\n- Explicar asignación de registros (grafo de conflictos, spill).\n- Describir call stack, frame pointer y return address.\n- Contrastar caller-saved vs callee-saved.\n- Interpretar el snippet conceptual de ensamblador x86 del módulo.\n\n## Desarrollo de la lección\n\n### Selección de instrucciones\n\nPattern-matching de árboles IR sobre DAG: `t = a + b` con enteros → `mov rax, a; add rax, b`. IR tipo LLVM ya está en forma RISC-like; selector recorre con tablas (BURG/tree-parser).\n\nFactores: tamaño de operandos, direccionamiento de memoria (x86 permite `add [mem], reg`).\n\n### Asignación de registros\n\nTemporales IR son **ilimitados**; CPU tiene **k** registros. Algoritmos:\n\n- **Graph coloring** (Chaitin): nodos = temporales, aristas = interferencia (vivos al mismo tiempo); k-colorear; spill si imposible.\n- **Linear scan**: rápido, usado en JIT.\n\n**Spill**: cuando no cabe, guardar temporal en slot de stack y recargar al usar.\n\n### Pila de activaciones\n\nCada **call** empuja return address; al entrar a función, prologue:\n\n1. Guardar frame pointer anterior.\n2. Establecer `%rbp` / frame register.\n3. Reservar espacio locals (`sub rsp, N`).\n\nEpilogue invierte antes de `ret`. Variables locales en offsets negativos respecto a frame pointer; parámetros en positivos o registros según calling convention.\n\n### Convenciones de llamada (System V AMD64 ejemplo)\n\nPrimeros argumentos enteros: `%rdi`, `%rsi`, `%rdx`, `%rcx`, `%r8`, `%r9`. Retorno entero en `%rax`. Caller-saved: `%rax`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%r8–11`. Callee-saved: `%rbx`, `%rbp`, `%r12–15`.\n\nEl generador inserta **saves/restores** de callee-saved si la función los usa.\n\n### Tipos de datos y alineación\n\nStack alineado a 16 bytes antes de call en x86-64 para SSE. Struct return via puntero oculto. Impacto en layout del frame.\n\n### Enlace y relocación\n\nEl compilador emite **símbolos** relocables; el **ensamblador** produce `.o`; el **linker** resuelve direcciones finales. Etiquetas externas `call printf@plt` en código posicionalmente independiente (PIE).\n\n## Demostración enlazada al código del módulo\n\nEl snippet conceptual mapea TAC a cadenas `MOV EAX, ...`, `MOV [x], EAX` — abstrae:\n\n1. Elegir acumulador `EAX` como destino de expresión.\n2. Materializar constantes inmediatas.\n3. Almacenar resultado en pseudo-dirección `[x]` (variable global simplificada).\n\nNo modela prologue ni convención; es **puente pedagógico** hacia listado assembly real. Extender: emitir `push rbp; mov rbp, rsp` en cada función del laboratorio.\n\n## Aplicaciones en sistemas reales\n\n**rustc + LLVM**: codegen backend LLVM produce `.s` o objeto directamente con convenciones por target triple.\n\n**JNI / FFI**: violar convención entre Rust y C causa crashes silenciosos — el codegen debe seguir ABI.\n\n**WebAssembly backend**: registros ilimitados en spec; lowering a stack machine en vez de GPR físicos.\n\n## Errores clásicos en examen\n\n- Olvidar alinear stack antes de call SSE.\n- Usar `%rbx` sin salvar en función que llama otras (callee-saved).\n- Confundir parámetro en stack vs registro en ABI distintas.\n- Spill inexistente cuando k < temporales en examen teórico.\n- `ret` sin restaurar frame pointer.\n\n## Preguntas de entrevista\n\n**P: ¿Caller-saved vs callee-saved?**\n\n**R:** Caller guarda registros que usará tras la llamada si el callee puede pisarlos; callee guarda los suyos que promete preservar. La ABI lista quién es quién.\n\n**P: ¿Qué hace el linker que el compilador no?**\n\n**R:** Une `.o`, resuelve símbolos, asigna direcciones virtuales, aplica relocations, produce ejecutable o shared library.\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé stack frame con return addr, saved rbp, locals.\n- Asigné tres temporales IR a dos registros con un spill manual.\n- Leí listing conceptual del módulo y lo mapeé a TAC previo.\n- Nombré registros de argumento en SysV x64.\n- Cierre del curso: pipeline completo fuente → binario; laboratorio integra fases 10–15.",
      codeSnippet: `# Ejemplo conceptual de Generación de Ensamblador x86-64 en Python
def traducir_tac_a_x86(tac_instruccion: str) -> list:
    # Traduce 't1 = a + b' a instrucciones x86
    # t1 -> EAX, a -> [rbp-4], b -> [rbp-8]
    partes = tac_instruccion.split(' = ')
    resultado = partes[0]
    expr = partes[1].split(' + ')
    op1, op2 = expr[0], expr[1]
    
    return [
        f"MOV EAX, [{op1}]",     # Cargar 'a' en registro EAX
        f"ADD EAX, [{op2}]",     # Sumar 'b' al registro EAX
        f"MOV [{resultado}], EAX" # Guardar resultado en memoria
    ]

print(traducir_tac_a_x86("t1 = a + b"))`,
      quiz: [
        {
          question: "¿Qué técnica algorítmica clásica se utiliza para resolver la Asignación Eficiente de Registros Físicos de la CPU?",
          options: ["Algoritmo de Coloreado de Grafos (Graph Coloring)", "Búsqueda Binaria", "Filtro de Bloom"],
          answerIndex: 0,
          explanation: "La interferencia entre variables con vidas simultáneas se modela como un grafo; asignar K registros físicos equivale a K-colorear el grafo."
        },
        {
          question: "En la memoria en tiempo de ejecución (Runtime Environment), ¿qué almacena el segmento denominado 'Stack' (Pila)?",
          options: ["Las variables dinámicas asignadas con malloc/new", "Los Registros de Activación (Stack Frames) con variables locales, parámetros y direcciones de retorno de funciones", "El código binario ejecutable"],
          answerIndex: 1,
          explanation: "El Stack gestiona las llamadas a funciones: almacena las variables locales, parámetros pasados y hacia dónde retornar tras el `return`."
        },
        {
          question: "¿Cuál es la tarea fundamental del Enlazador (Linker)?",
          options: ["Combinar los distintos archivos objeto (.o / .obj) y librerías en un único archivo ejecutable final (.exe / ELF)", "Traducir Python a C", "Imprimir el código"],
          answerIndex: 0,
          explanation: "El Linker resuelve las referencias cruzadas entre funciones de distintos módulos y librerías externas generando el binario listo."
        },
        {
          question: "¿Qué ocurre cuando la memoria Heap (Montículo) se llena sin ser liberada en lenguajes como C/C++?",
          options: ["Fuga de Memoria (Memory Leak)", "Fuga de registros", "Error de sintaxis"],
          answerIndex: 0,
          explanation: "Asignar memoria dinámica en el Heap sin liberarla adecuadamente (free/delete) provoca fugar la memoria del sistema."
        },
        {
          question: "En x86-64, ¿qué función cumple el Registro de Activación (Stack Frame) durante una llamada a función?",
          options: ["Aislar el espacio de memoria y variables locales de esa invocación de función particular", "Guardar el sistema operativo", "Limpiar la pantalla"],
          answerIndex: 0,
          explanation: "Cada llamada a función crea su propio marco en la pila garantizando que sus variables locales no sobrescriban otras funciones."
        }
      ,
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Backend: Selección de Instrucciones de la Arquitectura Destino (x86 / ARM)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Backend: Selección de Instrucciones de la Arquitectura Destino (x86...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Backend: Selección de Instrucciones de la Arquitectura Destino (x86 / ARM). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Asignación de Registros Físicos (Register Allocation) y Algoritmo de Coloread...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Asignación de Registros Físicos (Register Allocation) y Algoritmo d...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Asignación de Registros Físicos (Register Allocation) y Algoritmo de Coloreado de Grafos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Gestión de Memoria Runtime: Segmento de Código, Datos, Heap y Stack?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Gestión de Memoria Runtime: Segmento de Código, Datos, Heap y Stack", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Gestión de Memoria Runtime: Segmento de Código, Datos, Heap y Stack. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Registros de Activación (Stack Frames) y Convenciones de Llamada (cdecl/stdcall)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Registros de Activación (Stack Frames) y Convenciones de Llamada (c...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Registros de Activación (Stack Frames) y Convenciones de Llamada (cdecl/stdcall). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: El Enlazador (Linker) y Cargador (Loader): Generación del binario ejecutable ...?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: El Enlazador (Linker) y Cargador (Loader): Generación del binario e...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que El Enlazador (Linker) y Cargador (Loader): Generación del binario ejecutable final. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
}
