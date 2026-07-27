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
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES",
      description: "Los bloques fundamentales de la Teoría de la Computación: símbolos, concatenación y operaciones sobre lenguajes.",
      items: [
        "Alfabeto Σ: Conjuntos finitos no vacíos de símbolos.",
        "Cadenas (w): Secuencias finitas de símbolos y cadena vacía ε.",
        "Longitud de una cadena |w| y Operación de Concatenación.",
        "Operación Estrella de Kleene (Σ*) y Clausura Positiva (Σ+).",
        "Definición Formal de Lenguaje L ⊆ Σ*."
      ],
      content: "La Teoría de la Computación comienza definiendo qué es un Alfabeto Σ (un conjunto finito de símbolos). Una Cadena es una secuencia finita de símbolos elegidos de Σ. La longitud |w| es la cantidad de símbolos de w. La cadena vacía ε tiene longitud 0. La Estrella de Kleene Σ* representa el conjunto infinito de todas las cadenas posibles generables con Σ (incluyendo ε), mientras que Σ+ excluye ε. Un Lenguaje Formal L es cualquier subconjunto de Σ*.",
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
        "Evaluación de Cadenas y Lenguaje Aceptado L(M)."
      ],
      content: "Un Autómata Finito Determinista (DFA) es un modelo matemático de una máquina de estados finita. Para cada estado q y cada símbolo de entrada s, la función de transición δ(q, s) especifica EXACTAMENTE UN único estado siguiente. No existe ambigüedad ni decisiones múltiples. Una cadena w es aceptada por el DFA si, tras procesar cada símbolo de w desde el estado inicial q₀, la máquina finaliza en un estado perteneciente al conjunto de estados finales F.",
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
        "Algoritmo de Construcción de Subconjuntos (Subset Construction)."
      ],
      content: "Un Autómata Finito No Determinista (NFA) permite que desde un mismo estado y con un mismo símbolo existan MÚLTIPLES estados siguientes posibles, o incluso transiciones espontáneas sin consumir ningún símbolo (transiciones ε). Aunque un NFA parece más potente, el Teorema de Equivalencia demuestra que todo NFA puede convertirse a un DFA equivalente mediante el Algoritmo de Construcción de Subconjuntos, aunque el DFA resultante puede tener hasta 2^|Q| estados.",
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
        "Algoritmo de McNaughton-Yamada-Thompson."
      ],
      content: "Una Expresión Regular (Regex) es una notación algebraica para especificar patrones de cadenas. El Teorema de Kleene es uno de los pilares de la teoría: demuestra que una expresión regular, un DFA y un NFA son formalmente equivalentes y reconocen exactamente la misma clase de Lenguajes Regulares. El Algoritmo de Thompson permite convertir cualquier Regex en un NFA-ε mediante componentes modulares simples.",
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
        "Ejemplo Clásico: Demostración de que L = {aⁿbⁿ | n ≥ 0} NO es regular."
      ],
      content: "Dado que los Autómatas Finitos tienen memoria finita (un número fijo de estados Q), NO pueden contar cantidades arbitrariamente grandes. Para demostrar rigurosamente que un lenguaje NO es regular, se utiliza el Lema del Bombeo (Pumping Lemma). Este establece que si un lenguaje L fuera regular, cualquier cadena suficientemente larga w (con |w| ≥ p) podría dividirse en 3 partes w = xyz de modo que la parte central y se pueda 'bombear' (repetir yⁱ para cualquier i ≥ 0) y la cadena resultante siga perteneciendo a L. Si al bombear y se genera una cadena fuera de L, se prueba por contradicción que L NO es regular.",
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
        "Ambigüedad Gramatical y Gramáticas No Ambiguas."
      ],
      content: "Las Gramáticas Libres de Contexto (CFG) permiten definir la estructura sintáctica jerárquica de los lenguajes de programación (como bloques `if-else`, bucles `for` y expresiones aritméticas anidadas). Una CFG consta de variables No-Terminales V, símbolos Terminales Σ, un Símbolo Inicial S y Reglas de Producción de la forma A → α. Una gramática es Ambigua si existe una cadena que puede producir dos Árboles de Derivación distintos, lo cual es inaceptable en un compilador.",
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
        "Forma Normal de Greibach (GNF) y Algoritmo CYK."
      ],
      content: "Un Autómata de Pila (Pushdown Automaton - PDA) es un autómata finito equipado con una memoria de estructura Pila LIFO (Last In, First Out). Esta memoria adicional le permite recordar estados anteriores con profundidad arbitraria, pudiendo reconocer lenguajes no regulares como $L = \\{a^n b^n \\mid n \\ge 0\\}$ (haciendo PUSH de las $a$'s y POP de las $b$'s). La Forma Normal de Chomsky (CNF) simplifica las gramáticas a reglas estandarizadas $A \\rightarrow BC$ o $A \\rightarrow a$, facilitando algoritmos de parsing como CYK.",
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
        "Problema de la Parada (Halting Problem) e Indecidibilidad."
      ],
      content: "La Máquina de Turing (TM), inventada por Alan Turing en 1936, representa el modelo matemático definitivo de lo que es un 'algoritmo'. Posee una cinta de memoria infinita y un cabezal que puede leer, escribir y desplazarse a la izquierda o derecha. La Tesis de Church-Turing postula que cualquier cálculo realizable por cualquier computadora moderna puede ser ejecutado por una Máquina de Turing. Turing demostró que existen problemas matemáticos INDECIDIBLES (imposibles de resolver por cualquier software), siendo el más famoso el Problema de la Parada (Halting Problem).",
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
        "Manejo Global de Errores y Tabla de Símbolos."
      ],
      content: "Un Compilador es un programa complejo que traduce código fuente de alto nivel (como C++ o Rust) a código objeto de bajo nivel (como ensamblador x86/ARM o lenguaje máquina). Se divide estructuralmente en 3 grandes capas: **Frontend** (analiza el código fuente y verifica corrección sintáctica/semántica), **Middle-end** (transforma el código a una Representación Intermedia IR y aplica optimizaciones independientes de la CPU) y **Backend** (genera el código ensamblador específico del procesador destino asignando registros físicos de la CPU).",
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
        "Manejo de Errores Léxicos (Caracteres ilegales)."
      ],
      content: "El Análisis Léxico es la primera fase del Frontend de un compilador. El **Lexer** (o Scanner) lee el archivo de código fuente caracter por caracter y agrupa las secuencias de caracteres que representan palabras clave, identificadores, números o símbolos (llamados Lexemas) en objetos estructurados llamados **Tokens**. Para reconocer cada tipo de Token, el Lexer utiliza expresiones regulares convertidas internamente a Autómatas Finitos Deterministas (DFA).",
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
        "Generadores Sintácticos Automáticos: Yacc / Bison."
      ],
      content: "El **Analizador Sintáctico (Parser)** recibe el flujo de Tokens generado por el Lexer y verifica que cumplan las reglas de la Gramática Libre de Contexto del lenguaje. Existen dos enfoques principales: **Top-Down (LL)** (construye el árbol desde la raíz hacia las hojas, utilizado en Parsers de Descenso Recursivo escritos a mano) y **Bottom-Up (LR)** (construye el árbol reduciendo tokens desde las hojas hacia la raíz, utilizado por herramientas automáticas como Yacc/Bison). Su salida es el **Árbol de Sintaxis Abstracta (AST)**.",
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
        "Decoración del Árbol Sintáctico (Annotated AST)."
      ],
      content: "Un programa puede ser perfectamente correcto en sintaxis (ej: `int x = 'hola' + true;`) pero carecer de sentido semántico. El **Analizador Semántico** recorre el AST construyendo la **Tabla de Símbolos** (que registra variables, sus tipos de datos, parámetros y su ámbito de alcance o Scope). Realiza comprobaciones estrictas de compatibilidad de tipos (Type Checking), verifica que las variables hayan sido declaradas antes de ser usadas y valida los retornos de las funciones.",
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
        "Generación de Etiquetas y Saltos Temporales (Label & GOTO)."
      ],
      content: "Una vez verificado el AST, el compilador lo traduce a una **Representación Intermedia (IR)**. La forma más popular es el **Código de Tres Direcciones (TAC)**. En TAC, cada instrucción tiene como máximo un operador y 3 direcciones (dos operandos y un resultado temporal, ej: `t1 = a + b`). La IR independiza la lógica del programa del procesador final, permitiendo que las optimizaciones se realicen una sola vez para cualquier arquitectura de CPU destino.",
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
        "Optimización de Bucles: Invariantes de Bucle y Desenrollado (Loop Unrolling)."
      ],
      content: "La **Optimización de Código** transforma el Código Intermedio (IR) para que se ejecute más rápido y consuma menos memoria, sin alterar el resultado del programa original. Las técnicas principales incluyen: **Plegado de Constantes** (calcular en tiempo de compilación expresiones fijas como `24 * 60 * 60` a `86400`), **Eliminación de Código Muerto** (remover ramas `if (false)` o instrucciones cuyos resultados nunca se leen) y **Reducción de Fuerza** (reemplazar operaciones costosas como `x * 2` por desplazamientos más rápidos `x << 1`).",
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
        "El Enlazador (Linker) y Cargador (Loader): Generación del binario ejecutable final."
      ],
      content: "La fase final del Backend traduce el Código Intermedio optimizado a **Ensamblador o Código Objeto** específico de la arquitectura del procesador (ej: x86-64 o ARM64). Dado que las CPU tienen un número limitado de registros físicos ultra-rápidos (ej: EAX, EBX, R1), la **Asignación de Registros** utiliza el Algoritmo de Coloreado de Grafos para maximizar el uso de registros y minimizar accesos lentos a la memoria RAM. El **Enlazador (Linker)** combina los archivos objeto con las librerías para producir el archivo ejecutable final.",
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
      ]
    }
  ]
};
