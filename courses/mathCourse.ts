import { Course } from '../domain/models';

export const MATH_COURSE: Course = {
  id: 'matematica',
  title: 'Fundamentos de Matemática',
  shortTitle: 'Matemática Fundamental',
  badge: 'Ciencias Básicas e Ingeniería',
  icon: '📐',
  description: 'De la lógica proposicional al cálculo diferencial y álgebra lineal: la base matemática indispensable para entender algoritmos, código y ciencias de la computación.',
  whyStudyTitle: '🧠 ¿Por qué se estudia esta materia?',
  whyStudyText: 'La matemática es el lenguaje del pensamiento estructurado. Todo sistema de software, desde una simple condicional "if" hasta un modelo de redes neuronales de Inteligencia Artificial, descansa sobre principios de lógica, conjuntos, matrices y vectores. Dominar estos fundamentos te permite razonar rigurosamente, resolver problemas complejos y escribir algoritmos óptimos y matemáticamente sólidos.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Lógica Proposicional",
      why: "Base del control de flujo en programación, circuitos digitales y verificación formal de algoritmos."
    },
    {
      id: 2,
      title: "Teoría de Conjuntos",
      why: "Fundamento del álgebra relacional de bases de datos (SQL) y modelado de colecciones de datos."
    },
    {
      id: 3,
      title: "Relaciones y Funciones",
      why: "Explica el comportamiento de las funciones de software, transformaciones puras y relaciones de equivalencia."
    },
    {
      id: 4,
      title: "Sistemas Numéricos",
      why: "Permite entender cómo la computadora procesa binario, octal, hexadecimal y manipulación de bits a bajo nivel."
    },
    {
      id: 5,
      title: "Álgebra y Ecuaciones",
      why: "Herramienta analítica esencial para despejar complejidades y derivar límites asintóticos Big-O."
    },
    {
      id: 6,
      title: "Geometría Analítica y Vectores",
      why: "Indispensable para desarrollo de videojuegos, motores 3D, visión por computadora y embeddings en IA."
    },
    {
      id: 7,
      title: "Álgebra Lineal y Matrices",
      why: "Estructura central detrás de las redes neuronales, transformaciones de coordenadas y procesamiento gráfico."
    },
    {
      id: 8,
      title: "Trigonometría y Oscilaciones",
      why: "Permite calcular ángulos, trayectorias físicas en juegos y procesamiento de señales digitales."
    },
    {
      id: 9,
      title: "Cálculo Diferencial",
      why: "La base de los algoritmos de optimización (Descenso de Gradiente) en Machine Learning e Inteligencia Artificial."
    },
    {
      id: 10,
      title: "Matemática Discreta y Combinatoria",
      why: "Esencial para el conteo de estados, criptografía y análisis de recurrencias en algoritmos de división y conquista."
    }
  ],
  labChallenge: {
    title: "Motor de Álgebra Lineal & Transformaciones Matrix 2D",
    badge: "Desafío de Laboratorio Matemático",
    description: "Tu objetivo es construir una aplicación o biblioteca (en React o Python) que implemente un motor numérico capaz de realizar multiplicación de matrices arbitrarias, cálculo de determinantes y transformaciones geométricas 2D (rotación y escalado de vectores). Debe incluir una función para resolver sistemas de 2x2 ecuaciones mediante la regla de Cramer.",
    requirements: [
      "• Operaciones de Matrices: Implementar suma, resta y multiplicación de matrices M(m,n) x N(n,p).",
      "• Determinantes: Calcular el determinante de matrices 2x2 y 3x3 de forma exacta.",
      "• Transformaciones 2D: Multiplicar vectores de posición por matrices de rotación estándar R(θ).",
      "• Sistema de Ecuaciones: Resolver Ax = b para sistemas 2x2 indicando si no tiene solución única (det(A) = 0)."
    ],
    cleanCodeRules: [
      "• Estructura Limpia: Separar la lógica matemática de la interfaz visual o de consola.",
      "• Tipado Fuerte: Utilizar TypeScript o type hints de Python para asegurar dimensiones correctas.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Motor Matemático - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio de Fundamentos de Matemática (Motor de Álgebra Lineal & Transformaciones Matrix 2D).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de mi implementación:\n- \n\nSaludos cordiales.`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: LÓGICA PROPOSICIONAL Y TABLAS DE VERDAD",
      description: "La ciencia del razonamiento formal. Construcción de enunciados lógicos y circuitos de decisión.",
      items: [
        "Proposiciones simples y compuestas: Juicios de valor de V o F.",
        "Conectores Lógicos: AND (∧), OR (∨), NOT (¬), Implicación (→) y Bicondicional (↔).",
        "Tablas de Verdad: Evaluación sistemática de expresiones booleanas.",
        "Tautologías, Contradicciones y Contingencias.",
        "Leyes de De Morgan y simplificación de expresiones lógicas."
      ],
      content: "La Lógica Proposicional es la piedra angular del software y los circuitos digitales. Una proposición es una oración a la que se le atribuye un valor de verdad (Verdadero o Falso). En programación, la condición de una sentencia 'if' es una proposición. La Implicación (P → Q) establece que si el antecedente P es verdadero, el consecuente Q no puede ser falso. Las Leyes de De Morgan (¬(P ∧ Q) ≡ ¬P ∨ ¬Q) permiten a los ingenieros simplificar condicionales complejas de código, mejorando la legibilidad y eliminando errores de evaluación.",
      codeSnippet: `# Evaluación de tablas de verdad en Python
def evaluar_implicacion(p: bool, q: bool) -> bool:
    # P -> Q es equivalente a (not P) or Q
    return (not p) or q

def tabla_de_verdad_de_morgan():
    print("P | Q | NOT(P AND Q) | (NOT P) OR (NOT Q)")
    for p in [True, False]:
        for q in [True, False]:
            expr1 = not (p and q)
            expr2 = (not p) or (not q)
            print(f"{p} | {q} | {expr1} | {expr2}")

tabla_de_verdad_de_morgan()`,
      quiz: [
        {
          question: "¿Cuál es el valor de verdad de la Implicación (P → Q) cuando P es Falso y Q es Falso?",
          options: ["Falso", "Verdadero", "Indeterminado"],
          answerIndex: 1,
          explanation: "La implicación solo es Falsa cuando el antecedente (P) es Verdadero y el consecuente (Q) es Falso. Si la premisa P es falsa, la implicación es vacíamente Verdadera (Vacuous Truth)."
        },
        {
          question: "Según las Leyes de De Morgan, ¿a qué es equivalente la negación de una conjunción: ¬(P ∧ Q)?",
          options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∨ Q"],
          answerIndex: 1,
          explanation: "La ley de De Morgan establece que al negar una conjunción (AND), se niegan ambas proposiciones y el operador cambia a disyunción (OR): ¬P ∨ ¬Q."
        },
        {
          question: "¿Qué es una Tautología en lógica proposicional?",
          options: ["Una proposición que siempre es falsa", "Una proposición cuya tabla de verdad es siempre verdadera", "Una proposición contingente"],
          answerIndex: 1,
          explanation: "Una Tautología es una fórmula bien formada que resulta verdadera para cualquier combinación de valores de verdad de sus variables (ej. P ∨ ¬P)."
        },
        {
          question: "Si P = Verdadero y Q = Falso, ¿cuál es el resultado de la Disyunción Exclusiva (P XOR Q)?",
          options: ["Verdadero", "Falso", "Null"],
          answerIndex: 0,
          explanation: "El operador XOR (Disyunción Exclusiva) devuelve Verdadero cuando exactamente una de las dos entradas es Verdadera."
        },
        {
          question: "¿Cómo se simplifica la expresión doble negación ¬(¬P) en lógica?",
          options: ["¬P", "P", "Falso"],
          answerIndex: 1,
          explanation: "La doble negación se anula mutuamente: negar dos veces una proposición devuelve su valor de verdad original P."
        }
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: TEORÍA DE CONJUNTOS Y ÁLGEBRA DE CONJUNTOS",
      description: "Modelado abstracto de colecciones de datos, intersecciones y álgebra relacional SQL.",
      items: [
        "Definición por Extensión y por Comprensión.",
        "Conjuntos Especiales: Vacío (∅), Universo (U), Finito e Infinito.",
        "Operaciones de Conjuntos: Unión (∪), Intersección (∩), Diferencia (\) y Complemento (A').",
        "Diagramas de Venn y cardinalidad |A|.",
        "Conjunto Potencia P(A) y Producto Cartesiano A × B."
      ],
      content: "La Teoría de Conjuntos abstrae la agrupación de elementos abstractos. Todo el lenguaje de consulta SQL (JOINs, UNION, INTERSECT) se deriva directamente de las operaciones de conjuntos. El Producto Cartesiano A × B combina todos los elementos del conjunto A con todos los de B (equivalente a un CROSS JOIN en bases de datos de complejidad O(|A| × |B|)). El Conjunto Potencia P(A) es el conjunto de todos los subconjuntos posibles de A, conteniendo exactamente 2^n elementos para un conjunto de tamaño n.",
      codeSnippet: `# Operaciones de Conjuntos en Python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

union = A | B              # A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8}
interseccion = A & B       # A ∩ B = {4, 5}
diferencia = A - B         # A \ B = {1, 2, 3}
dif_simetrica = A ^ B      # Elementos en A o B pero no en ambos

print(f"Unión: {union}")
print(f"Intersección: {interseccion}")
print(f"Diferencia A - B: {diferencia}")`,
      quiz: [
        {
          question: "Si el conjunto A tiene 4 elementos (|A| = 4), ¿cuántos elementos tendrá su Conjunto Potencia P(A)?",
          options: ["8", "16", "32"],
          answerIndex: 1,
          explanation: "La cardinalidad del conjunto potencia es 2^n. Para n = 4, 2^4 = 16 subconjuntos posibles."
        },
        {
          question: "¿Qué operación de conjuntos equivale conceptualmente al INNER JOIN de SQL?",
          options: ["Unión (A ∪ B)", "Intersección (A ∩ B)", "Diferencia (A \\ B)"],
          answerIndex: 1,
          explanation: "El INNER JOIN selecciona registros que coinciden en ambas tablas, lo cual representa exactamente la intersección matemática A ∩ B."
        },
        {
          question: "¿Qué representa el Producto Cartesiano A × B si A tiene 3 elementos y B tiene 5?",
          options: ["8 elementos", "15 pares ordenados", "2 elementos"],
          answerIndex: 1,
          explanation: "El producto cartesiano crea pares ordenados (a, b). Su tamaño es |A| × |B| = 3 × 5 = 15 elementos."
        },
        {
          question: "¿Cuál es el resultado de la intersección entre un conjunto A y el Conjunto Vacío (A ∩ ∅)?",
          options: ["A", "El Conjunto Vacío (∅)", "El Conjunto Universo (U)"],
          answerIndex: 1,
          explanation: "Como el conjunto vacío no contiene elementos, no existen elementos en común con A, por lo que el resultado es ∅."
        },
        {
          question: "Si A ⊆ B (A es subconjunto de B), ¿cuál es el resultado de A ∪ B?",
          options: ["A", "B", "∅"],
          answerIndex: 1,
          explanation: "Dado que todos los elementos de A ya pertenecen a B, unir A con B resulta simplemente en el conjunto contenedor B."
        }
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: RELACIONES Y FUNCIONES",
      description: "Mapeos de entrada y salida, funciones inyectivas, sobreyectivas y composición de software.",
      items: [
        "Dominio, Codominio y Rango de una función.",
        "Propiedades de Relaciones: Reflexiva, Simétrica y Transitiva.",
        "Relaciones de Equivalencia y Clases de Equivalencia.",
        "Funciones Inyectivas (Uno a Uno), Sobreyectivas (Sobre) y Biyectivas.",
        "Composición de Funciones (f ∘ g)(x) y Función Inversa f⁻¹(x)."
      ],
      content: "Una Función f: X → Y es una regla de asociación que asigna a cada elemento del Dominio X exactamente un elemento del Codominio Y. En ciencias de la computación, las funciones puras deben garantizar que para una misma entrada siempre retornen la misma salida. Una función es Inyectiva si elementos distintos del dominio tienen imágenes distintas. Una función Biyectiva es tanto inyectiva como sobreyectiva, lo cual garantiza matemáticamente que posee una Función Inversa f⁻¹, esencial en algoritmos de cifrado y descifrado.",
      codeSnippet: `# Composición de Funciones en Python
def g(x: float) -> float:
    return x + 5

def f(x: float) -> float:
    return x ** 2

# Composición (f ∘ g)(x) = f(g(x))
def f_compuesta_g(x: float) -> float:
    return f(g(x))

x_val = 3
print(f"g(3) = {g(x_val)}")             # Output: 8
print(f"f(g(3)) = {f_compuesta_g(x_val)}") # Output: 64`,
      quiz: [
        {
          question: "¿Qué condición debe cumplir una función f para tener una función inversa f⁻¹?",
          options: ["Ser solo inyectiva", "Ser solo sobreyectiva", "Ser biyectiva (inyectiva y sobreyectiva)"],
          answerIndex: 2,
          explanation: "Una función admite inversa si y solo si es biyectiva, pues esto asegura que cada elemento del rango mapee a un único elemento del dominio de origen."
        },
        {
          question: "Si f(x) = 2x + 3 y g(x) = x², ¿cuál es el valor de (f ∘ g)(2)?",
          options: ["11", "49", "14"],
          answerIndex: 0,
          explanation: "Primero se evalúa g(2) = 2² = 4. Luego se pasa como entrada a f: f(4) = 2(4) + 3 = 11."
        },
        {
          question: "¿Cuál es el dominio de la función f(x) = 1 / (x - 4) en el conjunto de los números reales?",
          options: ["Todos los reales ℝ", "Todos los reales excepto x = 4 (ℝ \\ {4})", "Solo los números positivos"],
          answerIndex: 1,
          explanation: "La división por cero no está definida en ℝ. Por ende, el denominador (x - 4) no puede ser cero, descartando x = 4 del dominio."
        },
        {
          question: "¿Qué propiedad cumple una relación R si siempre que (a,b) ∈ R y (b,c) ∈ R, implica que (a,c) ∈ R?",
          options: ["Reflexiva", "Simétrica", "Transitiva"],
          answerIndex: 2,
          explanation: "La propiedad Transitiva asegura que las relaciones se encadenen (si A se relaciona con B y B con C, entonces A se relaciona directamente con C)."
        },
        {
          question: "En una función Inyectiva f: A → B, si a₁ ≠ a₂, ¿qué se cumple necesariamente?",
          options: ["f(a₁) = f(a₂)", "f(a₁) ≠ f(a₂)", "f(a₁) = 0"],
          answerIndex: 1,
          explanation: "Una función inyectiva (uno a uno) jamás asigna la misma imagen a dos elementos distintos del dominio."
        }
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: SISTEMAS NUMÉRICOS Y CONVERSIÓN DE BASES",
      description: "Representación de datos a bajo nivel: Binario, Hexadecimal y manipulación Bitwise.",
      items: [
        "Sistemas Posicionales: Decimal (Base 10), Binario (Base 2), Octal (Base 8) y Hexadecimal (Base 16).",
        "Algoritmos de Conversión de Base (Divisiones Sucesivas y Potencias de Base).",
        "Aritmética Binaria: Suma, Resta y Representación de Signo.",
        "Complemento a 2: Representación de enteros negativos en la CPU.",
        "Operadores Bitwise: AND (&), OR (|), XOR (^), NOT (~) y Shifts (<<, >>)."
      ],
      content: "Las computadoras almacenan datos mediante transistores que solo reconocen dos estados: alto voltaje (1) y bajo voltaje (0). Por ello, el sistema Binario es el lenguaje nativo del hardware. El sistema Hexadecimal (Base 16) agrupa exactamente 4 bits por dígito (nibble), permitiendo representar bytes (8 bits) de forma concisa (ej. 11111111₂ = FF₁₆). La representación en Complemento a 2 permite a las CPU realizar restas reutilizando el mismo circuito sumador digital.",
      codeSnippet: `# Operaciones Bitwise y Conversiones en Python
numero = 42 # En binario: 00101010

print(f"Decimal: {numero}")
print(f"Binario: {bin(numero)}")     # Output: 0b101010
print(f"Hexadecimal: {hex(numero)}") # Output: 0x2a

# Manipulación de Bits
mask = 0b00001111
resultado_and = numero & mask # Extrae los 4 bits inferiores
print(f"Bitwise AND con máscara: {bin(resultado_and)}") # 0b1010 (10)
print(f"Shift a la izquierda (numero << 1): {numero << 1}") # Multiplica por 2 (84)`,
      quiz: [
        {
          question: "¿Cuál es el equivalente decimal del número binario 1011₂?",
          options: ["9", "11", "13"],
          answerIndex: 1,
          explanation: "Evaluando potencias de 2: 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 en base decimal."
        },
        {
          question: "¿Cuántos bits representa un solo dígito Hexadecimal (ejemplo: 'F')?",
          options: ["2 bits", "4 bits", "8 bits"],
          answerIndex: 1,
          explanation: "Un dígito hexadecimal abarca valores del 0 al 15 (16 estados), lo cual equivale exactamente a 4 bits (2⁴ = 16)."
        },
        {
          question: "¿Qué efecto matemático produce desplazar un entero 1 bit a la izquierda (x << 1)?",
          options: ["Divide el número entre 2", "Multiplica el número por 2", "Le suma 1 al número"],
          answerIndex: 1,
          explanation: "El desplazamiento a la izquierda (Shift Left) en base 2 equivale a multiplicar el número entero por 2¹."
        },
        {
          question: "¿Por qué el hardware prefiere el formato 'Complemento a 2' para almacenar números enteros negativos?",
          options: ["Ocupa la mitad de memoria", "Permite usar el mismo circuito sumador para realizar restas sin lógica adicional", "Evita usar binario"],
          answerIndex: 1,
          explanation: "Al usar Complemento a 2, la resta A - B se computa simplemente como A + (-B), simplificando la Unidad Aritmético Lógica (ALU)."
        },
        {
          question: "¿Cuál es el valor Hexadecimal del número decimal 255?",
          options: ["A0", "FF", "FE"],
          answerIndex: 1,
          explanation: "255 es el valor máximo de un byte (8 bits en 1s: 11111111₂), lo que corresponde a FF₁₆ (15×16¹ + 15×16⁰)."
        }
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: ÁLGEBRA BÁSICA Y ECUACIONES",
      description: "Manipulación de expresiones polinomiales, resolución de ecuaciones y límites de crecimiento.",
      items: [
        "Polinomios, Factorización y Productos Notables.",
        "Ecuaciones Lineales y Sistemas de Ecuaciones Lineales.",
        "Ecuaciones Cuadráticas y Fórmula General (Discriminante Δ).",
        "Inecuaciones y Valor Absoluto.",
        "Leyes de Exponentes y Logaritmos (log_b(x))."
      ],
      content: "El Álgebra proporciona la capacidad de manipular símbolos y fórmulas abstractas. Los logaritmos son la operación inversa de la exponenciación: log_b(y) = x equivale a b^x = y. En análisis de algoritmos, los logaritmos aparecen siempre que dividimos el espacio de búsqueda por la mitad (como en la Búsqueda Binaria), reduciendo exponencialmente el número de pasos necesarios. Resolver inecuaciones cuadráticas y lineales es indispensable para fundamentar las demostraciones asintóticas Big-O.",
      codeSnippet: `# Cálculo de soluciones cuadráticas y logaritmos en Python
import math

def resolver_cuadratica(a: float, b: float, c: float):
    discriminante = b**2 - 4*a*c
    if discriminante < 0:
        return "Sin soluciones reales"
    x1 = (-b + math.sqrt(discriminante)) / (2*a)
    x2 = (-b - math.sqrt(discriminante)) / (2*a)
    return (x1, x2)

print(f"Raíces de x² - 5x + 6 = 0: {resolver_cuadratica(1, -5, 6)}") # Output: (3.0, 2.0)
print(f"log2(1024) = {math.log2(1024)}") # Output: 10.0`,
      quiz: [
        {
          question: "¿Cuál es el resultado de evaluar log₂ (64)?",
          options: ["6", "8", "32"],
          answerIndex: 0,
          explanation: "El logaritmo responde a la pregunta '¿a qué potencia debo elevar 2 para obtener 64?'. Como 2⁶ = 64, log₂(64) = 6."
        },
        {
          question: "Si el discriminante (Δ = b² - 4ac) de una ecuación cuadrática es menor que cero (Δ < 0), ¿qué tipo de soluciones tiene?",
          options: ["Dos soluciones reales distintas", "Una única solución real doble", "No tiene soluciones en el conjunto de números reales (son complejas)"],
          answerIndex: 2,
          explanation: "Al ser el discriminante negativo, la raíz cuadrada √(b² - 4ac) no produce valores reales, dando origen a soluciones complejas conjugadas."
        },
        {
          question: "Según las propiedades de logaritmos, ¿a qué es equivalente log(A · B)?",
          options: ["log(A) · log(B)", "log(A) + log(B)", "log(A) - log(B)"],
          answerIndex: 1,
          explanation: "El logaritmo de un producto es igual a la suma de los logaritmos de los factores: log(A · B) = log(A) + log(B)."
        },
        {
          question: "¿Cuál es la solución de la inecuaciones |x| < 5?",
          options: ["x < 5", "x > -5", "-5 < x < 5"],
          answerIndex: 2,
          explanation: "La desigualdad |x| < a para a > 0 se desglosa en el intervalo abierto entre -a y a: -5 < x < 5."
        },
        {
          question: "¿A qué equivale simplificar la expresión (x³ · x⁵) / x²?",
          options: ["x⁶", "x⁸", "x¹⁵"],
          answerIndex: 0,
          explanation: "Multiplicación de igual base suma exponentes (3 + 5 = 8), y división los resta (8 - 2 = 6). El resultado es x⁶."
        }
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: GEOMETRÍA ANALÍTICA Y VECTORES",
      description: "Representación del espacio cartesiano, distancia entre puntos y vectores en 2D/3D.",
      items: [
        "Plano Cartesiano 2D y Espacio Tridimensional 3D.",
        "Distancia Euclidiana vs Distancia Manhattan.",
        "Ecuación de la Recta: Pendiente (m) y forma punto-pendiente.",
        "Vectores: Magnitud ||v||, Dirección y Componentes.",
        "Producto Escalar (Dot Product) y Similitud Coseno."
      ],
      content: "La Geometría Analítica une el álgebra con la geometría mediante un sistema de coordenadas. La Distancia Euclidiana entre dos puntos P₁(x₁,y₁) y P₂(x₂,y₂) se calcula mediante el teorema de Pitágoras: √((x₂-x₁)² + (y₂-y₁)²). En redes neuronales y recuperación de información, el Producto Escalar u · v = ||u|| ||v|| cos(θ) permite medir el grado de alineación entre dos vectores de características o embeddings de texto.",
      codeSnippet: `# Operaciones Vectoriales y Distancias en Python
import math

def distancia_euclidiana(p1: tuple, p2: tuple) -> float:
    return math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)

def producto_escalar(v1: list, v2: list) -> float:
    return sum(a * b for a, b in zip(v1, v2))

vA = [3, 4]
vB = [1, 2]

print(f"Distancia entre (0,0) y (3,4): {distancia_euclidiana((0,0), (3,4))}") # Output: 5.0
print(f"Producto Escalar [3,4] · [1,2]: {producto_escalar(vA, vB)}") # Output: 11`,
      quiz: [
        {
          question: "¿Cuál es la distancia euclidiana entre el origen (0,0) y el punto (3,4)?",
          options: ["5", "7", "25"],
          answerIndex: 0,
          explanation: "Aplicando el teorema de Pitágoras: √(3² + 4²) = √(9 + 16) = √25 = 5."
        },
        {
          question: "Si dos vectores no nulos u y v son ortogonales (perpendiculares, 90°), ¿cuál es su producto escalar u · v?",
          options: ["1", "0", "-1"],
          answerIndex: 1,
          explanation: "Dado que cos(90°) = 0, el producto escalar u · v = ||u|| ||v|| cos(90°) resulta exactamente 0."
        },
        {
          question: "¿Cuál es la pendiente m de la recta que pasa por los puntos (1, 2) y (3, 6)?",
          options: ["m = 1", "m = 2", "m = 4"],
          answerIndex: 1,
          explanation: "La fórmula de la pendiente es m = (y₂ - y₁) / (x₂ - x₁) = (6 - 2) / (3 - 1) = 4 / 2 = 2."
        },
        {
          question: "¿Cómo se calcula la Distancia Manhattan entre P₁(x₁,y₁) y P₂(x₂,y₂)?",
          options: ["|x₂ - x₁| + |y₂ - y₁|", "√((x₂ - x₁)² + (y₂ - y₁)²)", "(x₂ - x₁) × (y₂ - y₁)"],
          answerIndex: 0,
          explanation: "La distancia Manhattan mide la suma de las diferencias absolutas de sus coordenadas (recorrido en retícula)."
        },
        {
          question: "¿Cuál es la magnitud (módulo) del vector v = (6, 8)?",
          options: ["14", "10", "100"],
          answerIndex: 1,
          explanation: "La magnitud de un vector v(x,y) es ||v|| = √(x² + y²) = √(36 + 64) = √100 = 10."
        }
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: INTRODUCCIÓN A MATRICES Y ÁLGEBRA LINEAL",
      description: "Estructuras matriciales, multiplicación de transformaciones y procesamiento en GPU.",
      items: [
        "Definición de Matriz y Dimensión (Filas × Columnas).",
        "Operaciones Matriciales: Suma, Resta y Multiplicación Escalar.",
        "Multiplicación de Matrices A(m×n) × B(n×p) = C(m×p).",
        "Matriz Identidad (I) y Matriz Transpuesta (Aᵀ).",
        "Determinantes 2x2/3x3 e Inversa de una Matriz A⁻¹."
      ],
      content: "Una Matriz es un arreglo bidimensional de números ordenados en filas y columnas. Para multiplicar dos matrices A × B, el número de columnas de A debe ser estrictamente igual al número de filas de B. La multiplicación de matrices no es conmutativa (AB ≠ BA en general). Las matrices representan transformaciones lineales en gráficos 3D y son el bloque básico sobre el cual entrenan los modelos de Inteligencia Artificial mediante operaciones masivas paralelizadas en GPUs.",
      codeSnippet: `# Multiplicación de Matrices en Python puro
def multiplicar_matrices(A: list, B: list) -> list:
    filas_A, cols_A = len(A), len(A[0])
    filas_B, cols_B = len(B), len(B[0])
    assert cols_A == filas_B, "Dimensiones incompatibles para multiplicar"
    
    C = [[0 for _ in range(cols_B)] for _ in range(filas_A)]
    for i in range(filas_A):
        for j in range(cols_B):
            for k in range(cols_A):
                C[i][j] += A[i][k] * B[k][j]
    return C

matA = [[1, 2], [3, 4]]
matB = [[2, 0], [1, 2]]
print(f"A x B = {multiplicar_matrices(matA, matB)}") # [[4, 4], [10, 8]]`,
      quiz: [
        {
          question: "Si la matriz A tiene dimensión 3×2 y la matriz B tiene dimensión 2×4, ¿cuál es la dimensión de la matriz resultante C = A × B?",
          options: ["3×4", "2×2", "No se pueden multiplicar"],
          answerIndex: 0,
          explanation: "Al multiplicar A(m×n) con B(n×p), la matriz resultante C tiene m filas y p columnas: 3×4."
        },
        {
          question: "¿Cuál es el determinante de la matriz 2×2 [[a, b], [c, d]]?",
          options: ["ad + bc", "ad - bc", "ab - cd"],
          answerIndex: 1,
          explanation: "El determinante de una matriz 2×2 se calcula como el producto de la diagonal principal menos la diagonal secundaria: ad - bc."
        },
        {
          question: "¿Qué ocurre si el determinante de una matriz cuadrada A es igual a cero (det(A) = 0)?",
          options: ["La matriz no tiene inversa (es singular)", "La matriz es la Identidad", "Su transpuesta es cero"],
          answerIndex: 0,
          explanation: "Una matriz es invertible si y solo si su determinante es diferente de cero. Si det(A) = 0, se le denomina matriz singular."
        },
        {
          question: "¿Qué propiedad caracteriza a la Matriz Transpuesta Aᵀ?",
          options: ["Se invierten los signos de los elementos", "Las filas de A se convierten en las columnas de Aᵀ", "Se multiplican los elementos por -1"],
          answerIndex: 1,
          explanation: "La transposición intercambia las filas por columnas: la entrada (i,j) de A pasa a ser la entrada (j,i) de Aᵀ."
        },
        {
          question: "En general para multiplicación de matrices, ¿es válida la propiedad conmutativa (A × B = B × A)?",
          options: ["Sí, siempre es válida", "No, la multiplicación de matrices NO es conmutativa en general", "Solo si ambas matrices son cuadradas"],
          answerIndex: 1,
          explanation: "La multiplicación de matrices no es conmutativa; en la mayoría de los casos A × B ≠ B × A e incluso las dimensiones pueden no coincidir."
        }
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: TRIGONOMETRÍA Y FUNCIONES PERIÓDICAS",
      description: "Razones trigonométricas, cálculo de ángulos y funciones oscilatorias.",
      items: [
        "Grados sexagesimales vs Radianes (π rad = 180°).",
        "Razones Trigonométricas: Seno (sin), Coseno (cos) y Tangente (tan).",
        "Triángulo Rectángulo y Teorema de Pitágoras.",
        "Identidad Trigonométrica Fundamental: sin²(θ) + cos²(θ) = 1.",
        "Funciones Periódicas y Ondas Sinusoidales."
      ],
      content: "La Trigonometría estudia las relaciones entre los lados y ángulos de los triángulos. En computación, el uso de radianes es el estándar absoluto para librerías matemáticas (donde 2π radianes equivalen a 360°). Las funciones Seno y Coseno son periódicas con período 2π, lo que las hace ideales para simular movimientos armónicos, ondas de sonido, física de partículas en motores de videojuegos y análisis de frecuencias.",
      codeSnippet: `# Uso de Trigonometría en la librería math de Python
import math

angulo_grados = 45
angulo_rad = math.radians(angulo_grados) # Convertir a radianes

seno_45 = math.sin(angulo_rad)
coseno_45 = math.cos(angulo_rad)

print(f"45° en radianes: {angulo_rad:.4f}")
print(f"sin(45°): {seno_45:.4f}") # ~0.7071
print(f"Comprobación Identidad sin² + cos²: {seno_45**2 + coseno_45**2:.1f}") # 1.0`,
      quiz: [
        {
          question: "¿A cuántos grados sexagesimales equivale un ángulo de π/2 radianes?",
          options: ["45°", "90°", "180°"],
          answerIndex: 1,
          explanation: "Dado que π radianes = 180°, entonces π/2 rad = 180° / 2 = 90°."
        },
        {
          question: "¿Cuál es el valor de la Identidad Trigonométrica sin²(θ) + cos²(θ) para cualquier ángulo θ?",
          options: ["0", "1", "π"],
          answerIndex: 1,
          explanation: "Es la identidad pitagórica fundamental de la trigonometría: sin²(θ) + cos²(θ) = 1."
        },
        {
          question: "En un triángulo rectángulo, ¿cómo se define la Tangente de un ángulo agudo θ?",
          options: ["Cateto Opuesto / Hipotenusa", "Cateto Adyacente / Hipotenusa", "Cateto Opuesto / Cateto Adyacente"],
          answerIndex: 2,
          explanation: "La Tangente es la razón entre el Cateto Opuesto y el Cateto Adyacente: tan(θ) = Opuesto / Adyacente."
        },
        {
          question: "¿Cuál es el período fundamental de las funciones f(x) = sin(x) y g(x) = cos(x)?",
          options: ["π", "2π", "4π"],
          answerIndex: 1,
          explanation: "Ambas funciones repiten sus valores exactamente cada 2π radianes (360°)."
        },
        {
          question: "¿Cuál es el valor de sin(0°) y cos(0°)?",
          options: ["sin(0°)=0, cos(0°)=1", "sin(0°)=1, cos(0°)=0", "Ambos valen 0"],
          answerIndex: 0,
          explanation: "En el círculo unitario para θ = 0°, la coordenada vertical es 0 (sin) y la horizontal es 1 (cos)."
        }
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: CÁLCULO DIFERENCIAL Y LÍMITES",
      description: "Razones de cambio instantáneas, derivadas y optimización por Descenso de Gradiente.",
      items: [
        "Noción Intuitiva y Formal de Límite lim x→a f(x).",
        "Definición de la Derivada f'(x) como pendiente de la recta tangente.",
        "Reglas de Derivación: Potencia, Suma, Producto, Cociente y Cadena.",
        "Optimización: Puntos Críticos, Máximos y Mínimos de una función.",
        "Gradiente ∇f y Descenso de Gradiente en Machine Learning."
      ],
      content: "El Cálculo Diferencial estudia el cambio continuo. La Derivada f'(x) mide la tasa de cambio instantánea de una función con respecto a su variable independiente. En optimización de software e Inteligencia Artificial, encontrar el mínimo de una función de pérdida (Loss Function) se realiza calculando la derivada (o gradiente en varias dimensiones). El algoritmo de Descenso de Gradiente actualiza los parámetros en dirección opuesta al gradiente para minimizar los errores de predicción.",
      codeSnippet: `# Aproximación numérica de la Derivada (Diferencias Finitas)
def derivada_numerica(f, x: float, h: float = 1e-7) -> float:
    # f'(x) ≈ (f(x + h) - f(x)) / h
    return (f(x + h) - f(x)) / h

# Función f(x) = x^2 (cuya derivada analítica es f'(x) = 2x)
def funcion_cuadratica(x: float) -> float:
    return x ** 2

point = 3.0
derivada_aprox = derivada_numerica(funcion_cuadratica, point)
print(f"Derivada numérica de x² en x=3: {derivada_aprox:.4f}") # ~6.0000`,
      quiz: [
        {
          question: "¿Cuál es la derivada de la función f(x) = x³ utilizando la regla de la potencia d/dx(xⁿ) = n·xⁿ⁻¹?",
          options: ["3x²", "x²", "3x³"],
          answerIndex: 0,
          explanation: "Aplicando la regla de la potencia: d/dx(x³) = 3·x³⁻¹ = 3x²."
        },
        {
          question: "¿Qué representa geométricamente la derivada f'(a) de una función en el punto x = a?",
          options: ["El área bajo la curva", "La pendiente de la recta tangente a la curva en ese punto", "El valor máximo absoluto"],
          answerIndex: 1,
          explanation: "La derivada f'(a) da la pendiente exacta de la recta tangente a la gráfica de f en el punto a."
        },
        {
          question: "En un punto crítico donde una función suave alcanza un máximo o mínimo local, ¿cuál es el valor de su primera derivada f'(x)?",
          options: ["f'(x) > 0", "f'(x) = 0", "f'(x) = 1"],
          answerIndex: 1,
          explanation: "En los puntos máximos o mínimos locales de una función diferenciable, la recta tangente es horizontal, por lo que su pendiente es f'(x) = 0."
        },
        {
          question: "¿Cuál es la derivada de cualquier función constante f(x) = c?",
          options: ["c", "0", "1"],
          answerIndex: 1,
          explanation: "Dado que una constante no cambia al variar x, su razón de cambio instantánea es nula: d/dx(c) = 0."
        },
        {
          question: "¿En qué dirección apunta el Gradiente ∇f de una función de varias variables?",
          options: ["Hacia la dirección de máximo crecimiento de la función", "Hacia el origen (0,0)", "Hacia la dirección de menor cambio"],
          answerIndex: 0,
          explanation: "El vector gradiente indica la dirección en la cual la función se incrementa más rápidamente."
        }
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: MATEMÁTICA DISCRETA Y COMBINATORIA",
      description: "Conteo de estructuras discretas, permutaciones, combinaciones y ecuaciones de recurrencia.",
      items: [
        "Principios Fundamentales del Conteo: Regla de la Suma y del Producto.",
        "Permutaciones P(n, k): Conteo ordenado de elementos.",
        "Combinaciones C(n, k): Conteo de subconjuntos sin importar el orden.",
        "Principio del Palomar (Pigeonhole Principle).",
        "Ecuaciones de Recurrencia e Inducción Matemática."
      ],
      content: "La Matemática Discreta estudia estructuras finitas o contables separadas (no continuas). La Combinatoria nos permite contar de cuántas formas se pueden organizar objetos. Las Permutaciones P(n, k) = n! / (n-k)! consideran el orden de selección, mientras que las Combinaciones C(n, k) = n! / (k! (n-k)!) ignoran el orden. El Principio del Palomar sostiene que si n objetos se colocan en m contenedores con n > m, al menos un contenedor debe albergar más de un objeto.",
      codeSnippet: `# Permutaciones y Combinaciones con la librería math de Python
import math

n = 5
k = 3

permutaciones = math.perm(n, k) # P(5,3) = 5! / (5-3)! = 60
combinaciones = math.comb(n, k) # C(5,3) = 5! / (3!*2!) = 10

print(f"Permutaciones P(5,3) [Orden importa]: {permutaciones}")
print(f"Combinaciones C(5,3) [Orden NO importa]: {combinaciones}")`,
      quiz: [
        {
          question: "¿De cuántas formas se pueden seleccionar un presidente y un secretario de un grupo de 5 personas (donde el orden sí importa)?",
          options: ["10 permutaciones", "20 permutaciones", "60 permutaciones"],
          answerIndex: 1,
          explanation: "Importa el orden (Permutación): P(5,2) = 5! / (5-2)! = (5 × 4 × 3!) / 3! = 20 formas distintas."
        },
        {
          question: "¿De cuántas formas se puede elegir un equipo de 3 personas a partir de un grupo de 5 (donde el orden NO importa)?",
          options: ["10 combinaciones", "20 combinaciones", "60 combinaciones"],
          answerIndex: 0,
          explanation: "No importa el orden (Combinación): C(5,3) = 5! / (3! × 2!) = 120 / (6 × 2) = 10 formas."
        },
        {
          question: "¿Qué afirma el Principio del Palomar (Pigeonhole Principle)?",
          options: ["Los palomos siempre vuelan en pares", "Si hay más objetos que contenedores, al menos un contenedor debe albergar 2 o más objetos", "La suma de combinaciones es siempre par"],
          answerIndex: 1,
          explanation: "Es un resultado fundamental de conteo: al distribuir n objetos en m casilleros con n > m, obligatoriamente habrá colisión en al menos un casillero."
        },
        {
          question: "¿Cuál es el valor de 0! (factorial de cero) por convención matemática?",
          options: ["0", "1", "Indefinido"],
          answerIndex: 1,
          explanation: "Por definición y consistencia en fórmulas combinatorias, 0! = 1."
        },
        {
          question: "¿Cuál es la regla del producto en combinatoria para dos tareas independientes con m y n formas de realizarse?",
          options: ["m + n formas", "m × n formas", "mⁿ formas"],
          answerIndex: 1,
          explanation: "Si una primera tarea se realiza de m formas y una segunda independiente de n formas, la secuencia de ambas se puede realizar de m × n formas."
        }
      ]
    }
  ]
};
