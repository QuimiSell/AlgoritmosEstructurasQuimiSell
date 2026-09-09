import { Course } from '../domain/models';

export const ALGORITHMIC_COMPLEXITY_COURSE: Course = {
  id: 'complejidad_algoritmica',
  title: 'Complejidad Algorítmica: Big-O Puro y Big-O en Inteligencia Artificial',
  shortTitle: 'Complejidad Big-O',
  badge: 'Ciencias de la Computación & IA',
  icon: '📊',
  description: '20 módulos dedicados exclusivamente a la notación Big-O: 15 módulos de análisis algorítmico puro (O, Ω, Θ, bucles, recursión, clases clásicas, amortizado) y 5 módulos aplicados a IA (FLOPs en redes neuronales, por qué Gauss-Jordan no se usa en GPUs, backprop, atención cuadrática y optimizaciones de inferencia).',
  whyStudyTitle: '🧠 ¿Por qué dominar Big-O antes de escribir código?',
  whyStudyText: 'Big-O no es un ejercicio académico abstracto: es el contrato de escalabilidad que firmas con cada función, API y modelo de IA que despliegas. Un bucle O(n²) invisible en un dashboard puede tumbar producción con 50,000 usuarios. Un Transformer sin KV-cache puede hacer imposible contextos largos. Este curso te forma para leer código, diseñar sistemas y auditar pipelines de machine learning con el mismo lenguaje que usan Google, Meta y OpenAI en sus revisiones de rendimiento.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Fundamentos del Análisis",
      why: "Establece el lenguaje matemático para medir eficiencia antes de codificar."
    },
    {
      id: 2,
      title: "Notación O, Ω y Θ",
      why: "Domina cotas superiores, inferiores y ajustadas para garantías formales."
    },
    {
      id: 3,
      title: "Casos y Simplificación",
      why: "Best/worst/average case y reglas algebraicas de simplificación."
    },
    {
      id: 4,
      title: "Bucles y Recursión",
      why: "Patrones iterativos, recurrencias y Teorema Maestro."
    },
    {
      id: 5,
      title: "Clases Clásicas O(1) a O(n!)",
      why: "Catálogo completo de complejidades con ejemplos reales."
    },
    {
      id: 6,
      title: "Amortizado y Trade-offs",
      why: "Dynamic arrays, tiempo vs espacio y selección de algoritmos."
    },
    {
      id: 7,
      title: "Big-O en Redes Neuronales",
      why: "FLOPs en capas densas, convoluciones y forward pass."
    },
    {
      id: 8,
      title: "GPUs y Álgebra Lineal",
      why: "Por qué GEMM gana sobre Gauss-Jordan en entrenamiento masivo."
    },
    {
      id: 9,
      title: "Transformers y Optimización",
      why: "Atención cuadrática, KV-cache, cuantización y paralelismo."
    }
  ],
  labChallenge: {
    title: "Auditor de Complejidad: Detector Big-O + Estimador FLOPs de Capa Densa",
    badge: "Laboratorio de Complejidad Algorítmica",
    description: "Construye una herramienta (CLI o React) que analice fragmentos de código Python y clasifique su complejidad temporal (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)) mediante heurísticas de bucles y recursión. Incluye un módulo extra que, dado batch, in_features y out_features, calcule FLOPs de una capa densa y estime memoria de activaciones para forward + backward (×3).",
    requirements: [
      "• Analizador heurístico: detectar bucles simples, anidados y while con división (n//=2).",
      "• Clasificador Big-O: mostrar la clase detectada y justificación en texto.",
      "• Calculadora FLOPs: capa densa batch×in×out con regla ×3 para entrenamiento.",
      "• Tabla comparativa: Gauss-Jordan O(n³) secuencial vs GEMM O(n³) paralelo (explicación textual)."
    ],
    cleanCodeRules: [
      "• Separar parser/heurísticas de la UI (SOLID).",
      "• Funciones puras para cálculo de FLOPs y clasificación.",
      "• Lenguajes: React (TypeScript) o Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Auditor Big-O - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio con la solución al Reto Auditor de Complejidad Algorítmica (Detector Big-O + Estimador FLOPs).\n\nEnlace: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología (React o Python):\n- \n\nExplicación breve:\n- \n\nSaludos cordiales.`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: INTRODUCCIÓN AL ANÁLISIS DE ALGORITMOS",
      description: "Por qué medimos eficiencia con matemáticas y no con cronómetros.",
      items: [
        "Definición formal de algoritmo y costo computacional.",
        "Entrada n y crecimiento asintótico: la variable que importa.",
        "Tiempo de CPU vs número de operaciones elementales.",
        "Modelo RAM: acceso O(1) a memoria y costo de lectura/escritura.",
        "Por qué el análisis previo al código evita deuda técnica en producción."
      ],
      content: "Antes de escribir una sola línea de código, un ingeniero debe responder: ¿qué pasa si mañana los datos crecen 100 veces? El análisis de algoritmos no mide segundos en tu laptop; mide cómo crece el número de operaciones elementales (comparaciones, asignaciones, accesos a memoria) en función del tamaño de entrada n. Un algoritmo que tarda 0.001 s con 1,000 registros pero 400 s con 100,000 registros tiene un problema de escalabilidad, no de hardware. Este curso entero se dedica a dominar esa lenguaje matemático: la notación Big-O y sus aplicaciones, desde bucles en Python hasta kernels en GPUs de Inteligencia Artificial.",
      codeSnippet: `# Comparación empírica vs análisis teórico
import time

def suma_lineal(arr):
    total = 0
    for x in arr:          # O(n) operaciones
        total += x
    return total

n_pequeno = list(range(10_000))
n_grande  = list(range(1_000_000))

# El análisis Big-O predice: 100x datos ≈ 100x operaciones (O(n))
# Sin importar si la CPU es Intel o Apple Silicon`,
      quiz: [
        {
          question: "¿Qué mide principalmente el análisis de algoritmos con notación Big-O?",
          options: ["Segundos exactos en un procesador específico", "Crecimiento del número de operaciones respecto al tamaño de entrada n", "Líneas de código del programa"],
          answerIndex: 1,
          explanation: "Big-O describe el comportamiento asintótico (cuando n tiende a infinito), no el tiempo absoluto en un hardware concreto."
        },
        {
          question: "Si duplicamos n en un algoritmo O(n), ¿cómo crece el trabajo teórico?",
          options: ["Se cuadruplica", "Se duplica aproximadamente", "Permanece igual"],
          answerIndex: 1,
          explanation: "En O(n) el costo es proporcional a n; duplicar la entrada duplica las operaciones."
        },
        {
          question: "¿Por qué descartamos constantes como 3n → O(n)?",
          options: ["Porque Python las optimiza automáticamente", "Porque para n muy grande solo importa el término dominante", "Porque las constantes son ilegales en notación Big-O"],
          answerIndex: 1,
          explanation: "Asintóticamente, 3n y n crecen con la misma forma; la constante no cambia la clase de complejidad."
        },
        {
          question: "¿Cuál es la unidad típica que contamos en análisis de tiempo?",
          options: ["Megabytes de RAM", "Operaciones elementales (comparaciones, asignaciones)", "Número de archivos abiertos"],
          answerIndex: 1,
          explanation: "Contamos operaciones primitivas del modelo RAM, independientes del lenguaje."
        },
        {
          question: "Un algoritmo O(1) significa que...",
          options: ["Nunca usa memoria", "El costo no crece con n (tiempo constante)", "Solo funciona con arreglos"],
          answerIndex: 1,
          explanation: "O(1) indica que el número de operaciones permanece acotado aunque n aumente."
        },
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: NOTACIÓN O — LÍMITE SUPERIOR",
      description: "La definición formal de O(f(n)): el peor escenario que garantizamos.",
      items: [
        "Definición: T(n) ∈ O(f(n)) si ∃ c, n₀ tal que T(n) ≤ c·f(n) para n ≥ n₀.",
        "O como cota superior: prometemos que nunca será peor que esto.",
        "Ejemplos: 2n + 5 ∈ O(n), n² + n ∈ O(n²), 100 ∈ O(1).",
        "Jerarquía de crecimiento: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).",
        "Errores comunes: confundir O con '=' exacto."
      ],
      content: "La notación O (Big-O) responde a la pregunta del jefe de ingeniería: ¿cuál es lo PEOR que puede pasar? Formalmente, decimos que T(n) ∈ O(f(n)) si existe una constante c y un umbral n₀ a partir del cual T(n) nunca supera c·f(n). Esto es una cota superior, no una igualdad exacta. Decir que un algoritmo es O(n²) no significa que siempre ejecute exactamente n² pasos; significa que está acotado por algo proporcional a n². En entrevistas técnicas y diseño de sistemas, O representa la garantía de escalabilidad.",
      codeSnippet: `# Demostración intuitiva: 3n + 10 ∈ O(n)
def T(n):
    return 3 * n + 10

# Para n >= 1, T(n) <= 4*n  →  c=4, n0=1
# Por tanto T(n) ∈ O(n)

def ejemplo_cuadratico(arr):
    n = len(arr)
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1   # exactamente n² iteraciones → O(n²)
    return count`,
      quiz: [
        {
          question: "¿Qué representa la notación O(f(n))?",
          options: ["Igualdad exacta T(n) = f(n)", "Cota superior asintótica del costo", "Cota inferior del costo"],
          answerIndex: 1,
          explanation: "O(f(n)) significa que T(n) crece como máximo como f(n) multiplicado por una constante."
        },
        {
          question: "¿T(n) = 5n + 200 pertenece a O(n)?",
          options: ["Sí", "No, es O(5n)", "No, es O(200)"],
          answerIndex: 0,
          explanation: "5n + 200 ≤ 6n para n ≥ 200, por lo tanto es O(n)."
        },
        {
          question: "¿Cuál crece más rápido asintóticamente?",
          options: ["O(n log n)", "O(n²)", "O(log n)"],
          answerIndex: 1,
          explanation: "n² supera a n log n y log n para n grande."
        },
        {
          question: "Si T(n) ≤ 2n² + 3n para todo n ≥ 1, ¿cuál es la notación más ajustada como cota superior típica?",
          options: ["O(n)", "O(n²)", "O(2n² + 3n)"],
          answerIndex: 1,
          explanation: "El término dominante es n²; simplificamos a O(n²)."
        },
        {
          question: "¿Por qué usamos O en lugar de tiempo en segundos?",
          options: ["Porque los segundos no existen en computadoras", "Porque es independiente del hardware y permite comparar algoritmos", "Porque Python no tiene reloj"],
          answerIndex: 1,
          explanation: "Big-O abstrae el hardware y permite comparación objetiva entre algoritmos."
        },
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: NOTACIÓN Ω Y Θ — LÍMITES INFERIOR Y AJUSTADO",
      description: "Completando el panorama: peor caso, mejor caso y costo exacto asintótico.",
      items: [
        "Ω(f(n)): cota inferior — el algoritmo no puede ser más rápido que esto.",
        "Θ(f(n)): cota ajustada — T(n) crece exactamente como f(n) (O y Ω a la vez).",
        "Relación: T(n) ∈ Θ(f(n)) ⇔ T(n) ∈ O(f(n)) y T(n) ∈ Ω(f(n)).",
        "Ejemplo: Merge Sort es Θ(n log n) en todos los casos.",
        "Cuándo importa Ω: límites teóricos de problemas (ordenamiento por comparación Ω(n log n))."
      ],
      content: "Big-O solo cuenta la mitad de la historia. La notación Ω (Omega) describe la cota inferior: ningún input puede forzar al algoritmo a hacer menos trabajo que Ω(f(n)) en el peor análisis dual. La notación Θ (Theta) es el caso perfecto: el algoritmo crece tanto por arriba como por abajo como f(n). Por ejemplo, recorrer un arreglo para encontrar el máximo es Θ(n) porque siempre debes mirar cada elemento (Ω(n)) y nunca haces más de n comparaciones (O(n)). En teoría de algoritmos, demostrar que un problema de ordenamiento por comparaciones requiere Ω(n log n) operaciones es un resultado fundamental que explica por qué Merge Sort y Heap Sort son óptimos.",
      codeSnippet: `# Búsqueda lineal del máximo: Θ(n)
def maximo(arr):
    if not arr:
        return None
    m = arr[0]
    for x in arr[1:]:      # siempre n-1 comparaciones
        if x > m:
            m = x
    return m

# Límite teórico: cualquier algoritmo que examine
# un arreglo desordenado para encontrar el max
# necesita Ω(n) comparaciones en el peor caso`,
      quiz: [
        {
          question: "¿Qué significa T(n) ∈ Ω(f(n))?",
          options: ["T(n) crece al menos tan rápido como f(n)", "T(n) es siempre menor que f(n)", "T(n) es exactamente f(n)"],
          answerIndex: 0,
          explanation: "Ω es cota inferior: T(n) ≥ c·f(n) para n grande."
        },
        {
          question: "Si un algoritmo es O(n) y Ω(n), entonces es...",
          options: ["O(n²)", "Θ(n)", "O(1)"],
          answerIndex: 1,
          explanation: "Cuando coinciden cota superior e inferior, tenemos Θ."
        },
        {
          question: "Merge Sort tiene complejidad...",
          options: ["O(n) peor caso", "Θ(n log n) en peor, mejor y promedio", "Ω(n²)"],
          answerIndex: 1,
          explanation: "Merge Sort siempre divide y combina en n log n."
        },
        {
          question: "¿Qué establece el límite Ω(n log n) para ordenamiento por comparación?",
          options: ["Que Quick Sort es imposible", "Que ningún algoritmo basado solo en comparaciones puede hacer mejor que n log n", "Que Bubble Sort es óptimo"],
          answerIndex: 1,
          explanation: "Es un teorema clásico: comparar elementos requiere al menos n log n comparaciones."
        },
        {
          question: "Un algoritmo con mejor caso O(1) y peor caso O(n) puede tener...",
          options: ["Θ(1)", "Ω(1) y O(n) sin ser Θ de ninguno solo", "Siempre Θ(n)"],
          answerIndex: 1,
          explanation: "Las cotas pueden diferir; Θ requiere mismo orden arriba y abajo en todos los casos analizados."
        },
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: BEST, WORST Y AVERAGE CASE",
      description: "Tres escenarios de entrada y cuál elige la industria para garantías reales.",
      items: [
        "Best Case: la entrada más favorable (ej. bubble sort en arreglo ya ordenado).",
        "Worst Case: la entrada más adversa (ej. quicksort con pivote mínimo siempre).",
        "Average Case: expectativa matemática sobre entradas aleatorias.",
        "Amortized vs Average: promedios sobre secuencias de operaciones.",
        "Por qué contratos SLA y sistemas críticos exigen análisis de peor caso."
      ],
      content: "Un mismo algoritmo puede comportarse muy distinto según la entrada. Quick Sort promedio O(n log n) pero peor caso O(n²) si el pivote es siempre el mínimo. Insertion Sort es O(n) en el mejor caso (casi ordenado) pero O(n²) en el peor. En producción, los ingenieros de Google, AWS o bancos diseñan para el PEOR caso porque un atacante o un pico de tráfico puede empujar exactamente ese escenario. El caso promedio es útil en simulaciones probabilísticas, pero nunca sustituye la garantía de peor caso cuando la fiabilidad es crítica.",
      codeSnippet: `# Quick Sort: peor caso O(n²), promedio O(n log n)
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivote = arr[0]           # mala elección → peor caso
    menores = [x for x in arr[1:] if x <= pivote]
    mayores = [x for x in arr[1:] if x > pivote]
    return quicksort(menores) + [pivote] + quicksort(mayores)

# Entrada adversa: [1,2,3,4,5] con pivote arr[0]
# genera particiones desbalanceadas → O(n²)`,
      quiz: [
        {
          question: "¿Qué caso analiza la industria para SLAs de latencia máxima?",
          options: ["Best case", "Worst case", "Solo average case"],
          answerIndex: 1,
          explanation: "Los SLAs garantizan límites superiores; eso es peor caso."
        },
        {
          question: "Insertion Sort en arreglo ya ordenado es...",
          options: ["O(n²)", "O(n log n)", "O(n)"],
          answerIndex: 2,
          explanation: "Cada elemento se compara una vez y no hay desplazamientos grandes."
        },
        {
          question: "Quick Sort sin randomización puede degradarse a O(n²) cuando...",
          options: ["El arreglo es aleatorio", "El pivote siempre es el extremo mínimo o máximo", "Usa memoria extra"],
          answerIndex: 1,
          explanation: "Particiones desbalanceadas en cada nivel producen recursión profunda n."
        },
        {
          question: "El average case requiere...",
          options: ["Una sola entrada fija", "Un modelo de distribución de entradas (ej. uniforme)", "Ignorar probabilidades"],
          answerIndex: 1,
          explanation: "Se calcula E[T(n)] sobre un espacio de entradas con probabilidades."
        },
        {
          question: "Bubble Sort best case con flag de 'swapped' puede ser...",
          options: ["O(n) si ya está ordenado", "O(1) siempre", "O(n log n)"],
          answerIndex: 0,
          explanation: "Una pasada detecta que no hubo intercambios y termina."
        },
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: REGLAS DE SIMPLIFICACIÓN ASINTÓTICA",
      description: "Eliminar constantes, términos menores y dominar el análisis en minutos.",
      items: [
        "Regla 1: descartar coeficientes (4n² → O(n²)).",
        "Regla 2: quedarse con el término dominante (n² + n + 100 → O(n²)).",
        "Regla 3: suma de complejidades = máximo de los sumandos.",
        "Regla 4: producto de bucles anidados = producto de rangos.",
        "Regla 5: logaritmos de distinta base difieren solo por constante → O(log n)."
      ],
      content: "El análisis asintótico tiene reglas algebraicas simples que aceleran el trabajo diario. Si T(n) = 7n³ + 2n² + 999, el término dominante es 7n³ y la complejidad es O(n³). Si tienes un bucle O(n) seguido de otro O(n²), el total es O(n²) porque el segundo domina. Si tienes bucles anidados de n y m iteraciones, obtienes O(n·m). Estas reglas evitan perder horas contando instrucciones máquina y permiten leer código ajeno con velocidad profesional.",
      codeSnippet: `# Ejemplo: simplificar T(n) = 2n² + 50n + log(n) + 1000
# Dominante: n² → O(n²)

def ejemplo_mixto(n):
    # O(n)
    for i in range(n):
        pass
    # O(n²)
    for i in range(n):
        for j in range(n):
            pass
    # Total: O(n²) — el término cuadrático domina

# log₂(n) y log₁₀(n) son ambos O(log n)`,
      quiz: [
        {
          question: "T(n) = 10n⁴ + n² + 5000 es...",
          options: ["O(n²)", "O(n⁴)", "O(5000)"],
          answerIndex: 1,
          explanation: "El término de mayor grado es n⁴."
        },
        {
          question: "Secuencia: bucle O(n) + bucle O(n log n) = ?",
          options: ["O(n)", "O(n log n)", "O(n² log n)"],
          answerIndex: 1,
          explanation: "Se toma el máximo: n log n domina a n."
        },
        {
          question: "Bucles anidados: for i in n, for j in n, for k in n →",
          options: ["O(n)", "O(n³)", "O(3n)"],
          answerIndex: 1,
          explanation: "Producto de tres factores n: n³."
        },
        {
          question: "¿2ⁿ + n¹⁰⁰ pertenece a O(2ⁿ)?",
          options: ["Sí", "No, es O(n¹⁰⁰)", "No, es O(1)"],
          answerIndex: 0,
          explanation: "Exponencial domina cualquier polinomio."
        },
        {
          question: "log₂(n) y log₁₀(n) en Big-O son...",
          options: ["O(log n) ambos", "O(log n) y O(1) respectivamente", "Incomparables"],
          answerIndex: 0,
          explanation: "Cambiar base del logaritmo solo multiplica por constante."
        },
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: ANÁLISIS DE BUCLES ITERATIVOS",
      description: "Contar iteraciones: simples, anidados, dependientes y con saltos.",
      items: [
        "Bucle simple for i in range(n): → O(n).",
        "Bucles anidados independientes: O(n·k) o O(n²).",
        "Bucle dependiente: for i in range(n): for j in range(i): → O(n²).",
        "Bucle con división: while n > 1: n //= 2 → O(log n).",
        "Patrones híbridos: dos punteros, ventana deslizante O(n)."
      ],
      content: "La mayoría del código imperativo se analiza contando cuántas veces se ejecuta el cuerpo del bucle. Un solo bucle sobre n elementos es O(n). Dos bucles anidados completos son O(n²). Pero cuidado: un bucle interno que corre i veces (triangular) suma 0+1+2+...+(n-1) = n(n-1)/2, que sigue siendo O(n²). Un while que divide n entre 2 en cada paso ejecuta O(log n) iteraciones. Dominar estos patrones permite auditar pull requests en segundos.",
      codeSnippet: `# Triangular: O(n²)
def triangular(n):
    count = 0
    for i in range(n):
        for j in range(i):   # 0 + 1 + ... + (n-1)
            count += 1
    return count             # ≈ n²/2 → O(n²)

# Logarítmico: O(log n)
def potencia_dos(n):
    ops = 0
    while n > 1:
        n //= 2
        ops += 1
    return ops`,
      quiz: [
        {
          question: "for i in range(n): for j in range(n): →",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 1,
          explanation: "n × n iteraciones."
        },
        {
          question: "for i in range(n): for j in range(i): →",
          options: ["O(n)", "O(n²)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Suma triangular n(n-1)/2 ∈ O(n²)."
        },
        {
          question: "while n > 1: n = n // 2 →",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "n se reduce a la mitad cada iteración."
        },
        {
          question: "Dos bucles consecutivos, cada uno O(n), total...",
          options: ["O(n)", "O(n²)", "O(2n) simplificado a O(n)"],
          answerIndex: 2,
          explanation: "Secuencia: máximo O(n); 2n sigue siendo O(n)."
        },
        {
          question: "Técnica de dos punteros en arreglo ordenado típicamente es...",
          options: ["O(n²)", "O(n)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Cada puntero avanza como máximo n veces en total."
        },
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: RECURSIÓN Y ECUACIONES DE RECURRENCIA",
      description: "Árboles de llamadas, profundidad de pila y el Teorema Maestro.",
      items: [
        "Cada llamada recursiva consume espacio de pila O(profundidad).",
        "Fibonacci ingenuo: O(2ⁿ) llamadas; con memoización: O(n).",
        "Divide y vencerás: T(n) = aT(n/b) + f(n).",
        "Teorema Maestro: casos según comparar f(n) con n^(log_b a).",
        "Recursión de cola vs recursión estándar y TCO."
      ],
      content: "La recursión duplica el análisis: tiempo y espacio. Cada activación de función guarda frames en la pila; una recursión de profundidad n puede agotar el stack. Fibonacci recursivo sin memo repite trabajo exponencialmente. Merge Sort define T(n) = 2T(n/2) + O(n), resuelto por el Teorema Maestro como Θ(n log n). Entender recurrencias es puente hacia algoritmos avanzados y hacia el análisis de backtracking en IA (búsqueda en árboles de decisión).",
      codeSnippet: `# Fibonacci ingenuo: O(2ⁿ) tiempo, O(n) espacio de pila
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Merge Sort: T(n) = 2T(n/2) + O(n) → Θ(n log n)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    L = merge_sort(arr[:mid])
    R = merge_sort(arr[mid:])
    return merge(L, R)  # merge lineal O(n)`,
      quiz: [
        {
          question: "Fibonacci recursivo sin memoización tiene complejidad temporal...",
          options: ["O(n)", "O(2ⁿ)", "O(log n)"],
          answerIndex: 1,
          explanation: "El árbol de llamadas se ramifica exponencialmente."
        },
        {
          question: "Merge Sort satisface T(n) = 2T(n/2) + O(n). Por Teorema Maestro es...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 1,
          explanation: "Caso clásico del teorema: f(n)=n, log_b a = 1."
        },
        {
          question: "La profundidad de recursión de binary search en n elementos es...",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "Se divide el espacio a la mitad cada llamada."
        },
        {
          question: "¿Qué problema tiene fib(1000) recursivo ingenuo?",
          options: ["Usa poca memoria", "Stack overflow y tiempo prohibitivo", "Es O(1)"],
          answerIndex: 1,
          explanation: "Profundidad n y tiempo exponencial."
        },
        {
          question: "Memoización convierte fib de O(2ⁿ) a...",
          options: ["O(n) tiempo y O(n) espacio", "O(1)", "O(n²)"],
          answerIndex: 0,
          explanation: "Cada subproblema se calcula una sola vez."
        },
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: O(1) — TIEMPO CONSTANTE",
      description: "La clase más deseada: operaciones instantáneas independientes de n.",
      items: [
        "Acceso indexado a arreglos y strings en O(1).",
        "Operaciones aritméticas, comparaciones y asignaciones simples.",
        "Hash tables: inserción/búsqueda O(1) promedio.",
        "Operaciones en extremos de deque y push/pop de stack.",
        "Límites: O(1) no significa 'rápido absoluto', solo 'no crece con n'."
      ],
      content: "O(1) es el santo grial de estructuras de datos: el costo no aumenta cuando crece la entrada. Acceder a arr[i] calcula dirección base + i × tamaño_elemento en una operación. Las tablas hash bien dimensionadas ofrecen O(1) promedio para get/set. En sistemas de alto rendimiento (cachés Redis, CDN edge lookups), diseñar para O(1) es prioritario. Ojo: O(1) con constante gigante (copiar 1 GB fijo) sigue siendo O(1) asintóticamente pero lento en práctica.",
      codeSnippet: `# Operaciones O(1) clásicas
def acceso_directo(datos, indice):
    return datos[indice]       # O(1)

class Stack:
    def __init__(self):
        self.items = []
    def push(self, x):
        self.items.append(x)   # O(1) amortizado
    def pop(self):
        return self.items.pop()  # O(1)

# dict en Python: get/set promedio O(1)
cache = {"user:42": "QuimiSell"}
cache["user:42"]`,
      quiz: [
        {
          question: "Acceder a arr[k] en un arreglo de tamaño n es...",
          options: ["O(n)", "O(1)", "O(log n)"],
          answerIndex: 1,
          explanation: "Direccionamiento directo por índice."
        },
        {
          question: "push/pop en stack (lista Python) es...",
          options: ["O(n) siempre", "O(1) amortizado", "O(log n)"],
          answerIndex: 1,
          explanation: "append/pop al final son constantes amortizadas."
        },
        {
          question: "O(1) significa que el algoritmo...",
          options: ["No usa memoria", "Hace trabajo acotado independiente de n", "Siempre tarda nanosegundos"],
          answerIndex: 1,
          explanation: "Acotado, no necesariamente microscópico."
        },
        {
          question: "¿Cuál operación NO es O(1) en lista Python?",
          options: ["arr[0]", "arr.append(x)", "arr.insert(0, x)"],
          answerIndex: 2,
          explanation: "Insertar al inicio desplaza n elementos → O(n)."
        },
        {
          question: "Tabla hash con buena función y load factor bajo: búsqueda promedio...",
          options: ["O(1)", "O(n)", "O(log n)"],
          answerIndex: 0,
          explanation: "Dispersión uniforme minimiza colisiones."
        },
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: O(log n) — LOGARÍTMICA",
      description: "Divide y reduce: la magia de partir el problema a la mitad.",
      items: [
        "Definición: duplicar n añade solo 1 paso extra.",
        "Búsqueda binaria en arreglo ordenado: Θ(log n).",
        "Árboles balanceados (AVL, Red-Black): altura O(log n).",
        "Exponentiación rápida: x^n en O(log n) multiplicaciones.",
        "Relación con log₂(n): ~20 pasos para n = 1,000,000."
      ],
      content: "Los algoritmos O(log n) explotan la reducción exponencial del espacio de búsqueda. Búsqueda binaria descarta la mitad de elementos en cada comparación: para un millón de elementos, solo ~20 comparaciones. Los árboles auto-balanceados mantienen altura logarítmica garantizando operaciones eficientes. En bases de datos, los índices B+ Tree buscan claves en O(log n) accesos a disco. Esta clase separa sistemas que escalan de sistemas que colapsan.",
      codeSnippet: `def busqueda_binaria(arr, objetivo):
    izq, der = 0, len(arr) - 1
    pasos = 0
    while izq <= der:
        pasos += 1
        mid = (izq + der) // 2
        if arr[mid] == objetivo:
            return mid, pasos      # O(log n) comparaciones
        elif arr[mid] < objetivo:
            izq = mid + 1
        else:
            der = mid - 1
    return -1, pasos

# n=1_000_000 → pasos ≈ log2(1e6) ≈ 20`,
      quiz: [
        {
          question: "Búsqueda binaria requiere que el arreglo esté...",
          options: ["Ordenado", "Sin duplicados obligatoriamente", "En lista enlazada"],
          answerIndex: 0,
          explanation: "La monotonicidad permite descartar mitades."
        },
        {
          question: "Para n = 1,048,576 (2²⁰), búsqueda binaria hace como máximo ~...",
          options: ["20 comparaciones", "1 millón de comparaciones", "2 comparaciones"],
          answerIndex: 0,
          explanation: "log₂(2²⁰) = 20."
        },
        {
          question: "Inserción en AVL tree balanceado es...",
          options: ["O(n)", "O(log n)", "O(1)"],
          answerIndex: 1,
          explanation: "Altura del árbol es O(log n)."
        },
        {
          question: "Duplicar n en algoritmo O(log n) agrega...",
          options: ["El doble de pasos", "Un paso constante extra", "n pasos extra"],
          answerIndex: 1,
          explanation: "log(2n) = log(n) + 1."
        },
        {
          question: "¿Cuál NO es típicamente O(log n)?",
          options: ["Búsqueda binaria", "Recorrido completo de arreglo", "Búsqueda en BST balanceado"],
          answerIndex: 1,
          explanation: "Recorrer todo el arreglo es O(n)."
        },
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: O(n) — LINEAL",
      description: "Un paso por elemento: el baseline de la mayoría de procesamiento de datos.",
      items: [
        "Recorridos: for x in arr, map/filter en una pasada.",
        "Búsqueda lineal en datos no ordenados: O(n) peor caso.",
        "Copiar arreglo completo: O(n) tiempo y espacio.",
        "Two-sum con hash: O(n) vs O(n²) con fuerza bruta.",
        "Streaming y procesamiento de logs en una pasada."
      ],
      content: "O(n) significa trabajo proporcional al tamaño de entrada: inevitable cuando debes examinar cada dato al menos una vez (encontrar máximo, calcular suma, validar formato). Muchos pipelines ETL, parsers y validadores son lineales por naturaleza. La optimización consiste en evitar pasadas redundantes: combinar dos bucles O(n) en uno solo sigue siendo O(n), no O(2n) en notación asintótica, pero reduce constantes reales importantes en producción.",
      codeSnippet: `# Two Sum O(n) con hash set
def two_sum(nums, target):
    vistos = {}
    for i, x in enumerate(nums):
        complemento = target - x
        if complemento in vistos:
            return vistos[complemento], i
        vistos[x] = i
    return None

# vs fuerza bruta O(n²):
# for i in range(n):
#     for j in range(i+1, n): ...`,
      quiz: [
        {
          question: "Encontrar el máximo de un arreglo desordenado es...",
          options: ["O(1)", "O(n)", "O(log n)"],
          answerIndex: 1,
          explanation: "Debes inspeccionar cada elemento al menos una vez (Ω(n))."
        },
        {
          question: "Copiar un arreglo de n elementos cuesta...",
          options: ["O(1)", "O(n)", "O(n²)"],
          answerIndex: 1,
          explanation: "n asignaciones individuales."
        },
        {
          question: "Two-sum con diccionario es O(n) porque...",
          options: ["Usa recursión", "Una pasada con lookup O(1) promedio", "Ordena primero"],
          answerIndex: 1,
          explanation: "Un bucle + hash evita el par anidado."
        },
        {
          question: "Tres bucles secuenciales O(n) cada uno = ...",
          options: ["O(n)", "O(n³)", "O(3n) = O(n)"],
          answerIndex: 0,
          explanation: "Secuencia: sigue siendo O(n)."
        },
        {
          question: "Procesar un archivo de n líneas línea a línea es...",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 0,
          explanation: "Una operación por línea."
        },
      ]
    },
    {
      id: 11,
      title: "MÓDULO 11: O(n log n) — CUASILINEAL",
      description: "El techo eficiente del ordenamiento por comparación y muchos algoritmos óptimos.",
      items: [
        "Merge Sort, Heap Sort: Θ(n log n) garantizado.",
        "Quick Sort promedio O(n log n), peor O(n²).",
        "Introsort en C++ std::sort: híbrido optimizado.",
        "Construcción de heap: O(n) pero heapify por elemento O(log n).",
        "Aparece en: ordenamiento, closest pair, algunos divide-and-conquer."
      ],
      content: "O(n log n) es el punto dulce entre eficiencia y generalidad. Ningún algoritmo de ordenamiento basado en comparaciones puede hacer mejor que Ω(n log n), y Merge Sort lo alcanza. Aparece cuando divides en log n niveles y haces O(n) trabajo por nivel. En la práctica, Quick Sort con pivote aleatorio y Introsort son los workhorses de lenguajes de producción. Reconocer O(n log n) en un diseño te dice: 'este es probablemente óptimo para comparaciones'.",
      codeSnippet: `def merge(L, R):
    resultado, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            resultado.append(L[i]); i += 1
        else:
            resultado.append(R[j]); j += 1
    return resultado + L[i:] + R[j:]  # O(len(L)+len(R))

# Merge Sort total: O(n log n)
# log n niveles × O(n) merge por nivel`,
      quiz: [
        {
          question: "¿Cuál ordenamiento garantiza O(n log n) en peor caso?",
          options: ["Quick Sort básico", "Merge Sort", "Bubble Sort"],
          answerIndex: 1,
          explanation: "Merge Sort no depende del orden de entrada."
        },
        {
          question: "¿Por qué Merge Sort es O(n log n)?",
          options: ["Un solo bucle n", "log n niveles de división × O(n) merge", "n bucles anidados"],
          answerIndex: 1,
          explanation: "Estructura clásica divide y vencerás."
        },
        {
          question: "El límite Ω(n log n) para sorting por comparación implica...",
          options: ["Merge Sort es óptimo en ese modelo", "O(n) sorting es posible siempre", "Solo aplica a enteros"],
          answerIndex: 0,
          explanation: "No se puede comparar menos en el peor caso."
        },
        {
          question: "Quick Sort en producción suele ser O(n log n) promedio porque...",
          options: ["Siempre elige pivote mediano exacto", "Pivote aleatorio evita entradas adversas típicas", "No usa recursión"],
          answerIndex: 1,
          explanation: "Randomización reduce probabilidad de peor caso."
        },
        {
          question: "Heap Sort tiene complejidad...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 1,
          explanation: "n extracciones × O(log n) cada una."
        },
      ]
    },
    {
      id: 12,
      title: "MÓDULO 12: O(n²) Y O(n³) — POLINOMIAL",
      description: "Bucles anidados: cuando el crecimiento se vuelve peligroso rápidamente.",
      items: [
        "Bubble, Selection, Insertion Sort peor caso: O(n²).",
        "Matrices densas n×n: multiplicación ingenua O(n³).",
        "Grafos: Floyd-Warshall O(V³).",
        "n=10,000 → n²=100 millones operaciones (límite práctico).",
        "Cuándo aceptar O(n²): n pequeño y constante (< 500)."
      ],
      content: "Las complejidades polinómicas son manejables para n pequeño pero explotan en producción. O(n²) con n=100,000 son 10 mil millones de operaciones — segundos o minutos. Muchos algoritmos ingenuos de grafos y DP sin optimizar caen aquí. La ingeniería consiste en reconocer el patrón de bucles anidados y refactorizar hacia O(n log n) o O(n) con estructuras auxiliares (hash, árboles, ordenamiento previo).",
      codeSnippet: `# Bubble Sort: O(n²)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Matriz n×n multiplicación ingenua: O(n³)
def matmul(A, B):
    n = len(A)
    C = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]`,
      quiz: [
        {
          question: "Bubble Sort peor caso es...",
          options: ["O(n)", "O(n log n)", "O(n²)"],
          answerIndex: 2,
          explanation: "Dos bucles anidados sobre n."
        },
        {
          question: "Multiplicación matricial n×n ingenua es...",
          options: ["O(n²)", "O(n³)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Tres bucles i, j, k."
        },
        {
          question: "Con n=20,000, O(n²) implica del orden de...",
          options: ["400 millones de operaciones", "20,000 operaciones", "20 operaciones"],
          answerIndex: 0,
          explanation: "(2×10⁴)² = 4×10⁸."
        },
        {
          question: "¿Cuándo O(n²) puede ser aceptable?",
          options: ["n siempre > 1 millón", "n acotado pequeño (ej. ≤ 500)", "Nunca"],
          answerIndex: 1,
          explanation: "Constantes pequeñas y n limitado."
        },
        {
          question: "Floyd-Warshall para caminos mínimos en grafo denso es...",
          options: ["O(V²)", "O(V³)", "O(V log V)"],
          answerIndex: 1,
          explanation: "Triple bucle sobre vértices."
        },
      ]
    },
    {
      id: 13,
      title: "MÓDULO 13: O(2ⁿ) Y O(n!) — EXPONENCIAL Y FACTORIAL",
      description: "Explosión combinatoria: problemas NP-hard y backtracking ingenuo.",
      items: [
        "Subconjuntos: 2ⁿ combinaciones; permutaciones: n!.",
        "Fibonacci recursivo sin memo: O(2ⁿ).",
        "Traveling Salesman fuerza bruta: O(n!).",
        "n=30 → 2³⁰ ≈ 1 mil millones (límite práctico ~2ⁿ con n≤25).",
        "Técnicas de escape: DP, poda, heurísticas, aproximación."
      ],
      content: "Exponencial y factorial marcan la frontera de lo tratable exactamente. Generar todos los subconjuntos de n elementos son 2ⁿ; todas las permutaciones son n!. El problema del viajante (TSP) con fuerza bruta es O(n!). Estos algoritmos sirven para n muy pequeño (≤ 20) o como baseline teórico. En IA, búsqueda en espacio de configuraciones sin poda cae aquí. La solución profesional es reformular: programación dinámica, branch & bound, simulated annealing o algoritmos de aproximación.",
      codeSnippet: `# Generar todos los subconjuntos: O(2ⁿ)
def subconjuntos(arr):
    n = len(arr)
    resultados = []
    for mascara in range(1 << n):   # 2^n máscaras
        subset = [arr[i] for i in range(n) if mascara & (1 << i)]
        resultados.append(subset)
    return resultados

# n=25 → 2^25 ≈ 33 millones (límite)
# n=40 → 2^40 ≈ 1 billón (imposible)`,
      quiz: [
        {
          question: "Generar todos los subconjuntos de n elementos es...",
          options: ["O(n)", "O(2ⁿ)", "O(n²)"],
          answerIndex: 1,
          explanation: "2ⁿ combinaciones posibles."
        },
        {
          question: "Permutaciones de n elementos son...",
          options: ["O(n!)", "O(2ⁿ)", "O(n log n)"],
          answerIndex: 0,
          explanation: "n! ordenamientos distintos."
        },
        {
          question: "Fibonacci recursivo sin memo es O(2ⁿ) porque...",
          options: ["Cada llamada hace dos subllamadas", "Usa un bucle", "Es divide and conquer log"],
          answerIndex: 0,
          explanation: "Árbol binario de llamadas."
        },
        {
          question: "TSP fuerza bruta con n ciudades es...",
          options: ["O(n²)", "O(n!)", "O(n log n)"],
          answerIndex: 1,
          explanation: "Debe evaluar permutaciones de rutas."
        },
        {
          question: "Para n=35, 2ⁿ es aproximadamente...",
          options: ["35 operaciones", "34 mil millones", "Imposible de calcular en tiempo humano razonable"],
          answerIndex: 1,
          explanation: "2³⁵ ≈ 34×10⁹."
        },
      ]
    },
    {
      id: 14,
      title: "MÓDULO 14: ANÁLISIS AMORTIZADO",
      description: "Costo promedio por operación en secuencias largas: dynamic arrays y Union-Find.",
      items: [
        "Amortizado ≠ promedio probabilístico: peor caso por operación puede ser alto.",
        "Dynamic array append: O(1) amortizado (doblar capacidad).",
        "Aggregate method: n inserciones O(n) total → O(1) cada una.",
        "Accounting method y potential method (introducción).",
        "Union-Find con compresión de caminos: casi O(1) amortizado."
      ],
      content: "El análisis amortizado responde: 'si hago n operaciones seguidas, ¿cuánto cuesta cada una en promedio?' Un arreglo dinámico ocasionalmente copia todos los elementos al redimensionar (O(n) esa vez), pero si duplica capacidad, las copias son raras y el costo promedio por append es O(1). Union-Find con path compression y rank tiene operaciones casi constantes amortizadas. Este análisis es esencial para estructuras en stdlib de C++, Java y Python.",
      codeSnippet: `class DynamicArray:
    def __init__(self):
        self.data = [None] * 1
        self.size = 0
        self.capacity = 1

    def append(self, val):          # O(1) amortizado
        if self.size == self.capacity:
            self._resize(self.capacity * 2)  # O(n) ocasional
        self.data[self.size] = val
        self.size += 1

    def _resize(self, new_cap):
        nuevo = [None] * new_cap
        for i in range(self.size):
            nuevo[i] = self.data[i]
        self.data = nuevo
        self.capacity = new_cap`,
      quiz: [
        {
          question: "Append en dynamic array con duplicación es...",
          options: ["O(n) siempre", "O(1) amortizado", "O(log n)"],
          answerIndex: 1,
          explanation: "Copias raras; n appends cuestan O(n) total."
        },
        {
          question: "Análisis amortizado estudia...",
          options: ["Solo una operación aislada", "Costo promedio por operación en secuencia larga", "Solo best case"],
          answerIndex: 1,
          explanation: "Promedio sobre secuencia, no expectativa aleatoria."
        },
        {
          question: "¿Una operación amortizada O(1) puede costar O(n) una vez?",
          options: ["Sí, ocasionalmente", "No, nunca", "Solo en best case"],
          answerIndex: 0,
          explanation: "El peor caso puntual puede ser alto; el promedio bajo."
        },
        {
          question: "Union-Find con path compression tiene find casi...",
          options: ["O(1) amortizado", "O(n!) siempre", "O(n²)"],
          answerIndex: 0,
          explanation: "Estructura clásica de amortización."
        },
        {
          question: "Si n appends cuestan O(n) total, cada append es...",
          options: ["O(1) amortizado", "O(n) amortizado", "O(n²)"],
          answerIndex: 0,
          explanation: "O(n)/n = O(1) por operación."
        },
      ]
    },
    {
      id: 15,
      title: "MÓDULO 15: TIEMPO VS ESPACIO Y SELECCIÓN DE ALGORITMOS",
      description: "Trade-offs, límites de memoria y criterios de decisión en ingeniería real.",
      items: [
        "Complejidad espacial: auxiliar vs total (in-place vs extra array).",
        "Merge Sort O(n) espacio extra vs Quick Sort O(log n) stack.",
        "Memoización: comprar O(n) espacio por O(2ⁿ) → O(n) tiempo.",
        "Tabla de decisión: restricciones n, memoria, latencia, paralelismo.",
        "Benchmarking complementa pero no reemplaza Big-O."
      ],
      content: "Todo algoritmo negocia tiempo por espacio. Merge Sort usa O(n) memoria extra para lograr O(n log n) estable. Quick Sort es in-place pero peor caso O(n²). Memoización en DP almacena subproblemas: más RAM, menos CPU. En dispositivos móviles o embedded, O(n) espacio puede ser inaceptable. En servidores con 512 GB RAM, prefetch y caché importan más que Big-O en papel. El ingeniero combina análisis asintótico, perfilado real y restricciones del dominio.",
      codeSnippet: `# Fibonacci: trade-off tiempo vs espacio
def fib_memo(n, cache={}):
    if n in cache:
        return cache[n]       # O(1) lookup, ahorra recomputación
    if n <= 1:
        return n
    cache[n] = fib_memo(n-1) + fib_memo(n-2)
    return cache[n]           # O(n) tiempo, O(n) espacio

# vs iterativo O(n) tiempo, O(1) espacio:
def fib_iter(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      quiz: [
        {
          question: "Merge Sort usa espacio auxiliar...",
          options: ["O(1)", "O(n)", "O(n²)"],
          answerIndex: 1,
          explanation: "Array temporal para merge."
        },
        {
          question: "Memoización típicamente intercambia...",
          options: ["Tiempo por más espacio", "Espacio por más tiempo", "Nada"],
          answerIndex: 0,
          explanation: "Guarda resultados para evitar recomputar."
        },
        {
          question: "fib iterativo vs memo: el iterativo usa espacio...",
          options: ["O(1)", "O(2ⁿ)", "O(n log n)"],
          answerIndex: 0,
          explanation: "Solo dos variables."
        },
        {
          question: "¿Big-O reemplaza profiling en producción?",
          options: ["Sí, siempre", "No, se complementan", "Solo para Python"],
          answerIndex: 1,
          explanation: "Constantes y caché importan en hardware real."
        },
        {
          question: "Quick Sort in-place tiene stack recursivo...",
          options: ["O(n) peor caso", "O(1) siempre", "O(n²) espacio"],
          answerIndex: 0,
          explanation: "Recursión profunda en peor caso."
        },
      ]
    },
    {
      id: 16,
      title: "MÓDULO 16: BIG-O EN REDES NEURONALES — FORWARD PASS",
      description: "Contando operaciones en capas densas, convoluciones y activaciones.",
      items: [
        "Capa densa: O(batch · in · out) multiplicaciones.",
        "Convolución: O(batch · H · W · C_in · C_out · k²).",
        "Activaciones (ReLU, GELU): O(n) elemento a elemento.",
        "Parámetros vs FLOPs: modelo grande ≠ inferencia más lenta si batch=1.",
        "Batch size multiplica costo linealmente."
      ],
      content: "En deep learning, Big-O se traduce a FLOPs (floating point operations). Una capa fully-connected con entrada d_in y salida d_out realiza O(d_in · d_out) multiplicaciones por muestra. Una convolución 2D agrega dimensiones espaciales y del kernel. El forward pass de un LLM con L capas, dimensión d y secuencia n escala aproximadamente O(L · n · d²) en atención clásica. Entender esto permite estimar latencia de inferencia antes de desplegar en producción.",
      codeSnippet: `# Capa densa: y = x @ W + b
# x: (batch, in_features), W: (in, out)
# FLOPs ≈ batch * in * out * 2 (mul + add)

def capa_densa_flops(batch, in_f, out_f):
    return batch * in_f * out_f * 2

# Ejemplo: batch=32, in=768, out=3072 (FFN típico)
print(capa_densa_flops(32, 768, 3072))  # ~151 millones FLOPs`,
      quiz: [
        {
          question: "Capa densa batch×in×out tiene complejidad de multiplicaciones...",
          options: ["O(batch · in · out)", "O(in + out)", "O(1)"],
          answerIndex: 0,
          explanation: "Producto de dimensiones de la matriz."
        },
        {
          question: "Duplicar batch size en inferencia duplica...",
          options: ["Solo memoria, no FLOPs", "FLOPs linealmente", "FLOPs cuadráticamente"],
          answerIndex: 1,
          explanation: "Costo proporcional al batch."
        },
        {
          question: "ReLU sobre tensor de n elementos es...",
          options: ["O(n)", "O(n²)", "O(log n)"],
          answerIndex: 0,
          explanation: "Una operación por elemento."
        },
        {
          question: "¿Más parámetros siempre implica más FLOPs por token?",
          options: ["Sí siempre", "Depende de arquitectura y capas activas", "No, nunca"],
          answerIndex: 1,
          explanation: "MoE activa subconjuntos; depth vs width importa."
        },
        {
          question: "FLOPs miden...",
          options: ["Operaciones de punto flotante", "Bytes transferidos", "Solo memoria GPU"],
          answerIndex: 0,
          explanation: "Métrica estándar de costo computacional en IA."
        },
      ]
    },
    {
      id: 17,
      title: "MÓDULO 17: GAUSS-JORDAN VS MULTIPLICACIÓN EN GPUs",
      description: "Por qué eliminación gaussiana no alimenta el entrenamiento de redes en GPU.",
      items: [
        "Gauss-Jordan: O(n³) con secuencialidad difícil de paralelizar.",
        "Multiplicación matricial GEMM: altamente paralelizable, O(n³) pero constantes GPU enormes.",
        "GPUs optimizadas para throughput masivo de ops independientes.",
        "Backprop = cadena de multiplicaciones matriciales, no resolver sistemas lineales.",
        "cuBLAS/cuDNN implementan GEMM con tiling, shared memory y Tensor Cores."
      ],
      content: "¿Por qué no usamos Gauss-Jordan para entrenar redes en GPU? Porque las GPUs (CUDA) están diseñadas para miles de hilos ejecutando la MISMA operación sobre datos independientes (SIMT). La eliminación gaussiana tiene dependencias secuenciales en filas: el pivote de la fila k afecta todas las filas k+1 antes de continuar. Aunque ambos son O(n³), GEMM (General Matrix Multiply) reorganiza el trabajo en bloques independientes explotando cache L1/shared memory y Tensor Cores. PyTorch y TensorFlow nunca invierten matrices con Gauss-Jordan en el hot path del entrenamiento; usan multiplicación masiva y autodiff.",
      codeSnippet: `# ❌ Gauss-Jordan: difícil de paralelizar (dependencias fila a fila)
# O(n³) secuencial en peor caso de paralelismo

# ✅ Entrenamiento NN: y = X @ W  (GEMM)
# GPUs ejecutan millones de MACs en paralelo
# PyTorch: torch.matmul(X, W) → cuBLAS

import torch
X = torch.randn(1024, 768, device='cuda')
W = torch.randn(768, 768, device='cuda')
Y = X @ W   # O(batch·in·out) pero paralelismo masivo`,
      quiz: [
        {
          question: "¿Por qué Gauss-Jordan es malo en GPUs para entrenamiento?",
          options: ["Es O(n²)", "Tiene dependencias secuenciales entre filas difíciles de paralelizar", "No existe en matemáticas"],
          answerIndex: 1,
          explanation: "SIMT requiere operaciones independientes masivas."
        },
        {
          question: "El hot path del entrenamiento de redes usa principalmente...",
          options: ["Multiplicación matricial GEMM", "Eliminación gaussiana", "Ordenamiento burbuja"],
          answerIndex: 0,
          explanation: "Forward/backward son cadenas de matmul."
        },
        {
          question: "GEMM y Gauss-Jordan para n×n son ambos O(n³), pero GEMM gana porque...",
          options: ["Tiene mejor paralelismo y kernels optimizados", "Usa menos memoria siempre", "Es O(n²)"],
          answerIndex: 0,
          explanation: "Constantes y paralelismo, no solo exponente."
        },
        {
          question: "Tensor Cores en NVIDIA aceleran especialmente...",
          options: ["Operaciones matriciales mix-precision", "Parsing JSON", "I/O de disco"],
          answerIndex: 0,
          explanation: "Diseñados para GEMM en FP16/BF16."
        },
        {
          question: "PyTorch invierte matrices ocasionalmente con métodos numéricos estables, pero el entrenamiento masivo usa...",
          options: ["CuBLAS GEMM", "Gauss-Jordan manual en Python puro", "Búsqueda lineal"],
          answerIndex: 0,
          explanation: "Librerías BLAS/CUDA optimizadas."
        },
      ]
    },
    {
      id: 18,
      title: "MÓDULO 18: ENTRENAMIENTO VS INFERENCIA — BACKPROP",
      description: "Por qué entrenar cuesta ~3× inferencia y cómo escala el backward pass.",
      items: [
        "Forward: una pasada O(F); Backward: ~2× F adicional (regla cadena).",
        "Entrenamiento total ≈ 3× FLOPs de inferencia por step.",
        "Gradientes requieren almacenar activaciones: costo de memoria O(batch·capas·activaciones).",
        "Optimizador (Adam): O(parámetros) extra por step.",
        "Inferencia solo forward: despliegue en edge y batch=1."
      ],
      content: "Entrenar una red es más caro que usarla. En backpropagation, cada operación del forward debe derivarse en reverse mode autodiff: típicamente ~2× FLOPs extra. Además hay que guardar activaciones intermedias para calcular gradientes (memoria). Adam mantiene dos momentos por parámetro (más memoria y ops). Por eso entrenar GPT-scale requiere clusters de miles de GPUs, pero inferencia puede correr en una sola con cuantización. Big-O del entrenamiento por epoch: O(epochs · batches · 3F).",
      codeSnippet: `# Regla práctica: FLOPs entrenamiento ≈ 3 × FLOPs inferencia
def estimar_flops(step):
    forward = step['forward_flops']
    backward = forward * 2      # autodiff reverse mode
    optim = step['params'] * 2  # Adam aprox
    return forward + backward + optim

# Memoria activaciones: O(layers * batch * seq * hidden)
# Gradient checkpointing trade-off: menos memoria, más recomputación`,
      quiz: [
        {
          question: "Backpropagation agrega aproximadamente...",
          options: ["0× FLOPs", "2× FLOPs del forward", "100× FLOPs"],
          answerIndex: 1,
          explanation: "Derivadas vía regla de la cadena."
        },
        {
          question: "Entrenamiento por step ≈ ... × inferencia forward",
          options: ["1×", "3×", "100×"],
          answerIndex: 1,
          explanation: "Forward + backward + optimizer."
        },
        {
          question: "Activaciones intermedias se guardan para...",
          options: ["Calcular gradientes en backward", "Solo visualización", "Comprimir el modelo"],
          answerIndex: 0,
          explanation: "Reverse mode necesita valores del forward."
        },
        {
          question: "Inferencia en producción típicamente ejecuta...",
          options: ["Solo forward pass", "Forward + backward + optimizer", "Solo backward"],
          answerIndex: 0,
          explanation: "No hay gradientes en despliegue."
        },
        {
          question: "Gradient checkpointing intercambia...",
          options: ["Memoria por recomputación (más FLOPs)", "Precisión por velocidad siempre", "GPU por CPU"],
          answerIndex: 0,
          explanation: "Recalcula activaciones para ahorrar RAM."
        },
      ]
    },
    {
      id: 19,
      title: "MÓDULO 19: SELF-ATTENTION O(n²·d) EN TRANSFORMERS",
      description: "La cuadraticidad en longitud de secuencia y sus implicaciones en LLMs.",
      items: [
        "Scores QK^T: matriz n×n → O(n²·d).",
        "Softmax @ V: otro O(n²·d).",
        "Memoria de atención: O(n²) por cabeza (problema con contexto largo).",
        "FlashAttention: mismo Big-O pero IO-aware reduce constantes.",
        "Alternativas: sparse, linear attention, sliding window (Longformer)."
      ],
      content: "El cuello de botella de Transformers clásicos es la atención cuadrática en la longitud de secuencia n. Calcular QK^T produce una matriz n×n por cabeza: O(n²·d) tiempo y O(n²) memoria. Para n=128K tokens, n²=16 mil millones entradas — prohibitivo. FlashAttention no cambia el Big-O pero reduce accesos a HBM mediante tiling en SRAM. Investigación activa busca atención subcuadrática (Performers, Mamba/SSM) para contextos largos.",
      codeSnippet: `# Self-Attention simplificado
# Q, K, V: (batch, heads, n, d_head)
# scores = Q @ K.T  → (batch, heads, n, n)  O(n²·d)
# attn = softmax(scores) @ V              O(n²·d)

def attention_flops(n, d, heads):
    d_head = d // heads
    qk = n * n * d_head * heads * 2   # QK^T
    av = n * n * d_head * heads * 2   # Attn @ V
    return qk + av

# n=4096 → n²=16M por cabeza; multiplicar por L capas`,
      quiz: [
        {
          question: "Self-attention clásica en secuencia n tiene complejidad...",
          options: ["O(n)", "O(n log n)", "O(n²·d)"],
          answerIndex: 2,
          explanation: "Matriz de scores n×n por dimensión."
        },
        {
          question: "¿Por qué contexto 128K es caro en Transformers vanilla?",
          options: ["O(n) lineal", "Memoria y compute O(n²)", "O(1)"],
          answerIndex: 1,
          explanation: "n² crece explosivamente."
        },
        {
          question: "FlashAttention mejora principalmente...",
          options: ["Constantes IO y memoria HBM, no el exponente de n", "Cambia O(n²) a O(n)", "Elimina softmax"],
          answerIndex: 0,
          explanation: "IO-aware; sigue siendo cuadrático."
        },
        {
          question: "Sliding window attention reduce complejidad a...",
          options: ["O(n·w) con ventana w", "O(n²)", "O(1)"],
          answerIndex: 0,
          explanation: "Cada token atiende solo w vecinos."
        },
        {
          question: "QK^T produce matriz de forma...",
          options: ["(n, n)", "(d, d)", "(n, d) solo"],
          answerIndex: 0,
          explanation: "Scores entre todos los pares de tokens."
        },
      ]
    },
    {
      id: 20,
      title: "MÓDULO 20: OPTIMIZACIONES DE IA — BATCH, KV-CACHE Y CUANTIZACIÓN",
      description: "Reducir constantes reales sin cambiar Big-O: cómo escalan los LLMs en producción.",
      items: [
        "Batching: throughput ↑, latencia por request puede ↑.",
        "KV-cache en autoregresión: O(n) por token nuevo vs O(n²) recomputar.",
        "Cuantización INT8/INT4: 2-4× menos memoria y bandwidth.",
        "Tensor parallelism y pipeline parallelism: particionar O(d²) en GPUs.",
        "Speculative decoding: amortizar forward passes."
      ],
      content: "La ingeniería de IA moderna ataca las constantes del Big-O. En generación autoregresiva, recomputar atención completa por cada token nuevo sería O(n²) por token; el KV-cache almacena keys/values previos reduciendo a O(n) por token incremental. Cuantización FP16→INT4 reduce ancho de banda de memoria (cuello de botella real en inferencia). Tensor parallelism divide matrices grandes en múltiples GPUs. Estas técnicas no cambian el exponente teórico pero hacen viable desplegar modelos de 70B parámetros.",
      codeSnippet: `# Autoregresión CON KV-cache (estándar en vLLM, llama.cpp)
# Token t: solo calcula Q_t @ K_{1:t}^T → O(t·d) no O(t²·d) total

# Sin cache: recomputar atención 1..t cada vez → suma O(t²)

# Cuantización: pesos FP32 (4 bytes) → INT4 (0.5 bytes)
# 70B params: 280 GB → ~35 GB (ideal teórico)`,
      quiz: [
        {
          question: "KV-cache en inferencia LLM evita...",
          options: ["Recomputar keys/values de tokens anteriores", "Usar GPU", "El forward pass"],
          answerIndex: 0,
          explanation: "Solo calcula Q del token nuevo contra K,V cacheados."
        },
        {
          question: "Cuantización INT4 reduce principalmente...",
          options: ["Uso de memoria y bandwidth", "Big-O de atención de n² a n", "Número de capas"],
          answerIndex: 0,
          explanation: "Menos bytes por peso; mismo algoritmo."
        },
        {
          question: "Batching en inferencia aumenta throughput porque...",
          options: ["Amortiza overhead kernel sobre muchas secuencias", "Cambia O(n²) a O(n)", "Elimina softmax"],
          answerIndex: 0,
          explanation: "GPUs prefieren operaciones grandes."
        },
        {
          question: "Tensor parallelism divide...",
          options: ["Matrices grandes entre GPUs", "Solo el dataset", "La loss function"],
          answerIndex: 0,
          explanation: "Shard de capas d×d en múltiples dispositivos."
        },
        {
          question: "Speculative decoding usa modelo pequeño para...",
          options: ["Proponer tokens verificados por modelo grande", "Entrenar desde cero", "Eliminar atención"],
          answerIndex: 0,
          explanation: "Reduce forward passes del modelo grande."
        },
      ]
    }
  ]
};
