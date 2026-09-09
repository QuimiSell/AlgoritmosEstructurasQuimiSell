import { Module } from './domain/models';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: "MÓDULO 1: FUNDAMENTOS Y BIG-O",
    description: "La ciencia de medir la eficiencia. Entender cómo escala el código con los datos.",
    items: [
        
      "Notación O, Ω, Θ: Límites superiores, inferiores y ajustados.",
      "Análisis Asintótico: Eliminación de constantes y términos no dominantes.",
      "Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso.",
      "Trade-offs: El equilibrio sagrado entre Tiempo y Espacio.",
      "Recursión: Análisis de profundidad de pila y casos base.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "La piedra angular de las Ciencias de la Computación. La notación Big-O nos permite comparar algoritmos objetivamente. No medimos segundos, medimos el crecimiento de las operaciones. Por ejemplo, en un algoritmo O(n²), si duplicas los datos, el tiempo se cuadruplica. Dominar el análisis asintótico es la diferencia entre un programador y un ingeniero de software. Las constantes y los coeficientes menores se descartan (ej. 3n + 5 es simplemente O(n)) porque para entradas muy grandes (n tendiendo a infinito), los términos multiplicativos o aditivos constantes pierden relevancia frente a los términos exponenciales o polinómicos dominantes. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `def constant_time(arr):
    return arr[0] if arr else None # O(1)

def linear_time(arr):
    for x in arr: # O(n)
        print(x)

def quadratic_time(arr):
    for x in arr: # O(n^2)
        for y in arr:
            print(x, y)`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal de acceder a un elemento por su índice en un arreglo de tamaño n?",
        options: ["O(n) - Lineal", "O(1) - Constante", "O(log n) - Logarítmica"],
        answerIndex: 1,
        explanation: "Los arreglos se almacenan en bloques contiguos de memoria. Conociendo el índice, la computadora puede calcular la dirección exacta del elemento en tiempo constante."
      },
      {
        question: "Si duplicamos el tamaño de entrada de un algoritmo O(n²), ¿qué pasa con el número de operaciones en el peor caso?",
        options: ["Se duplica", "Se triplica", "Se cuadruplica"],
        answerIndex: 2,
        explanation: "Al ser cuadrático, la relación es (2n)² = 4n². Por lo tanto, el número de operaciones crece por un factor de 4 (se cuadruplica)."
      },
      {
        question: "¿Cuál de las siguientes complejidades asintóticas representa el crecimiento más lento (es decir, el algoritmo más eficiente para entradas gigantes)?",
        options: ["O(n) - Lineal", "O(log n) - Logarítmica", "O(n log n) - Cuasilineal"],
        answerIndex: 1,
        explanation: "O(log n) crece de manera extremadamente lenta. Para n = 1,000,000, un algoritmo O(log n) toma aproximadamente 20 pasos, mientras que uno O(n) toma un millón de pasos."
      },
      {
        question: "¿Cuál es la complejidad temporal en el peor caso del siguiente código?\nfor i in range(n):\n    for j in range(5):\n        print(i, j)",
        options: ["O(5n) - Lineal", "O(n) - Lineal", "O(n²) - Cuadrática"],
        answerIndex: 1,
        explanation: "En la notación Big-O se descartan las constantes. Como el bucle interno siempre ejecuta exactamente 5 iteraciones (independientemente de n), la cantidad total de operaciones es 5 * n. Simplificado asintóticamente, esto es O(n)."
      },
      {
        question: "Si un algoritmo tiene una función de tiempo T(n) = 3n³ + 10n² + 500, ¿cuál es su complejidad final en notación Big-O?",
        options: ["O(n³)", "O(n²)", "O(3n³ + 10n²)"],
        answerIndex: 0,
        explanation: "En análisis asintótico nos quedamos únicamente con el término de mayor crecimiento (término dominante) y eliminamos los coeficientes constantes. El término dominante aquí es 3n³, por lo que la complejidad es O(n³)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Notación O, Ω, Θ: Límites superiores, inferiores y ajustados?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Notación O, Ω, Θ: Límites superiores, inferiores y ajustados", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Notación O, Ω, Θ: Límites superiores, inferiores y ajustados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Análisis Asintótico: Eliminación de constantes y términos no dominantes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Análisis Asintótico: Eliminación de constantes y términos no domina...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Análisis Asintótico: Eliminación de constantes y términos no dominantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Trade-offs: El equilibrio sagrado entre Tiempo y Espacio?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Trade-offs: El equilibrio sagrado entre Tiempo y Espacio", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Trade-offs: El equilibrio sagrado entre Tiempo y Espacio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Recursión: Análisis de profundidad de pila y casos base?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Recursión: Análisis de profundidad de pila y casos base", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recursión: Análisis de profundidad de pila y casos base. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 2,
    title: "MÓDULO 2: ESTRUCTURAS LINEALES",
    description: "Organización secuencial: desde la memoria contigua hasta los punteros.",
    items: [
        
      "Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)).",
      "Linked Lists: Simples, dobles y circulares. El poder de los punteros.",
      "Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos.",
      "Queues (FIFO): Buffers, colas de impresión y manejo de procesos.",
      "Deques: Colas de doble extremo para máxima flexibilidad.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Las estructuras lineales definen cómo fluyen los datos. Los Arrays brillan en acceso aleatorio (O(1)), pero sufren en inserciones intermedias (O(n)). Las Linked Lists invierten esto: inserción rápida pero búsqueda lenta. Entender cuándo usar cada una es vital para optimizar el rendimiento del sistema. El redimensionamiento de arreglos dinámicos duplica la capacidad del arreglo cuando se llena, lo que cuesta O(n) para copiar elementos, pero al promediarse en muchas inserciones sucesivas, el costo es de O(1) amortizado. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `class Node:
    def __init__(self, data):
        self.val = data
        self.next = None

class Stack:
    def __init__(self):
        self.items = []
    def push(self, x): self.items.append(x)
    def pop(self): return self.items.pop() # O(1)`,
    quiz: [
      {
        question: "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        options: ["Cola (Queue)", "Pila (Stack)", "Arreglo Dinámico (Dynamic Array)"],
        answerIndex: 1,
        explanation: "Las Pilas (Stacks) funcionan como una pila de platos: el último que se coloca (push) es el primero que se retira (pop)."
      },
      {
        question: "¿Cuál es la complejidad temporal de buscar un elemento en una lista enlazada simple de tamaño n?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 2,
        explanation: "Dado que las listas enlazadas no tienen índices, es necesario recorrerlas desde la cabeza (head) nodo por nodo en el peor caso."
      },
      {
        question: "¿Cuál es la complejidad de insertar al final en un Arreglo Dinámico en su caso amortizado?",
        options: ["O(1) - Constante", "O(log n) - Logarítmica", "O(n) - Lineal"],
        answerIndex: 0,
        explanation: "Aunque ocasionalmente requiere copiar todos los elementos a un nuevo arreglo de doble tamaño (lo cual toma O(n)), la mayoría de las veces se inserta al final en tiempo constante. El promedio amortizado es O(1)."
      },
      {
        question: "¿Qué ventaja principal ofrece una Lista Doblemente Enlazada frente a una Lista Enlazada Simple?",
        options: ["Consume menos memoria RAM", "Permite navegación bidireccional (siguiente y anterior)", "El acceso indexado toma tiempo constante O(1)"],
        answerIndex: 1,
        explanation: "La lista doblemente enlazada almacena punteros tanto al nodo siguiente como al anterior, permitiendo recorrer la lista en ambas direcciones, a costa de usar un poco más de memoria."
      },
      {
        question: "¿Cuál es el comportamiento característico de una estructura tipo Cola (Queue)?",
        options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Acceso aleatorio directo a cualquier índice"],
        answerIndex: 1,
        explanation: "Las colas siguen el principio FIFO (primero en entrar, primero en salir), emulando una fila física donde se atiende al primero que llega."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1))?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1))", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Linked Lists: Simples, dobles y circulares. El poder de los punteros?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Linked Lists: Simples, dobles y circulares. El poder de los punteros", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Linked Lists: Simples, dobles y circulares. El poder de los punteros. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Queues (FIFO): Buffers, colas de impresión y manejo de procesos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Queues (FIFO): Buffers, colas de impresión y manejo de procesos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Queues (FIFO): Buffers, colas de impresión y manejo de procesos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Deques: Colas de doble extremo para máxima flexibilidad?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Deques: Colas de doble extremo para máxima flexibilidad", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Deques: Colas de doble extremo para máxima flexibilidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 3,
    title: "MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)",
    description: "El arte de la búsqueda instantánea mediante funciones de dispersión.",
    items: [
        
      "Hash Functions: Determinismo, uniformidad y eficiencia.",
      "Collision Resolution: Chaining (listas) vs Open Addressing (Probing).",
      "Load Factor: Cuándo redimensionar para mantener el O(1) promedio.",
      "Sets y Maps: Implementaciones basadas en hashing vs árboles.",
      "Aplicaciones: Caches, bases de datos y criptografía básica.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Una Tabla Hash es magia técnica: convierte cualquier clave en un índice mediante una función de dispersión. El desafío es la colisión (cuando dos claves quieren el mismo sitio). Un buen ingeniero diseña funciones hash que minimicen esto, manteniendo búsquedas promedio de O(1). El Factor de Carga (Load Factor, n/m) determina cuándo redimensionar la tabla; si este valor supera el 70% o 80%, las colisiones crecen drásticamente. En el peor caso absoluto, si todos los elementos colisionan en la misma celda de Chaining, la búsqueda se degrada a O(n). En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `def simple_hash(key, size):
    return sum(ord(c) for c in key) % size

# Diccionarios en Python son Hash Maps altamente optimizados
user_data = {"id": 101, "name": "QuimiSell"}
print(user_data["name"]) # O(1) promedio`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal promedio de búsqueda en una tabla hash bien diseñada?",
        options: ["O(1) - Constante", "O(log n) - Logarítmica", "O(n) - Lineal"],
        answerIndex: 0,
        explanation: "Si la función de dispersión es buena y el factor de carga es bajo, las colisiones son mínimas y la búsqueda se resuelve de forma directa en tiempo constante."
      },
      {
        question: "¿Qué ocurre cuando dos claves distintas producen el mismo índice mediante la función hash?",
        options: ["Un error de compilación", "Una colisión", "Un redimensionamiento automático"],
        answerIndex: 1,
        explanation: "Esto se conoce como Colisión, y debe ser resuelto usando técnicas como encadenamiento (chaining) o direccionamiento abierto (probing)."
      },
      {
        question: "¿Qué es el 'Factor de Carga' (Load Factor) de una tabla hash?",
        options: ["El tamaño total de la memoria RAM", "La relación entre elementos guardados y el tamaño de la tabla (n/m)", "La velocidad de la función hash"],
        answerIndex: 1,
        explanation: "El factor de carga mide cuán llena está la tabla. Si supera ciertos umbrales (como 0.75), la tabla se redimensiona para evitar colisiones excesivas."
      },
      {
        question: "¿Cuál es la diferencia entre Resolución por Encadenamiento (Chaining) y Direccionamiento Abierto (Open Addressing)?",
        options: ["Chaining usa listas enlazadas en cada celda; Open Addressing busca otras celdas libres en la misma tabla", "Chaining no permite colisiones; Open Addressing las permite", "Chaining es más lento en teoría pero consume menos memoria"],
        answerIndex: 0,
        explanation: "Chaining guarda elementos colisionados en una lista enlazada en el mismo índice. Open Addressing busca índices vacíos alternativos usando secuencias de sondeo."
      },
      {
        question: "En el peor caso absoluto, si todas las claves colisionan en la misma celda de Chaining, ¿cuál es la complejidad?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 2,
        explanation: "Si todos los elementos caen en la misma celda, la tabla se degrada a una lista enlazada simple, haciendo que buscar un elemento tome tiempo lineal O(n)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Hash Functions: Determinismo, uniformidad y eficiencia?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Hash Functions: Determinismo, uniformidad y eficiencia", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Hash Functions: Determinismo, uniformidad y eficiencia. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Collision Resolution: Chaining (listas) vs Open Addressing (Probing)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Collision Resolution: Chaining (listas) vs Open Addressing (Probing)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Collision Resolution: Chaining (listas) vs Open Addressing (Probing). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Load Factor: Cuándo redimensionar para mantener el O(1) promedio?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Load Factor: Cuándo redimensionar para mantener el O(1) promedio", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Load Factor: Cuándo redimensionar para mantener el O(1) promedio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Sets y Maps: Implementaciones basadas en hashing vs árboles?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Sets y Maps: Implementaciones basadas en hashing vs árboles", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sets y Maps: Implementaciones basadas en hashing vs árboles. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Aplicaciones: Caches, bases de datos y criptografía básica?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicaciones: Caches, bases de datos y criptografía básica", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicaciones: Caches, bases de datos y criptografía básica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 4,
    title: "MÓDULO 4: ÁRBOLES Y JERARQUÍAS",
    description: "Estructuras ramificadas para búsquedas y clasificaciones ultra-rápidas.",
    items: [
        
      "BST (Binary Search Tree): Izquierda menor, derecha mayor.",
      "Balanceo: Por qué un árbol degenerado es solo una lista lenta.",
      "AVL y Red-Black: Rotaciones automáticas para mantener O(log n).",
      "Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes.",
      "Tries: El secreto detrás del autocompletado en buscadores.",
      "B-Trees: La estructura que sostiene a casi todas las bases de datos SQL.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Los árboles permiten organizar datos jerárquicamente. Un Árbol de Búsqueda Binaria balanceado reduce una búsqueda de un millón de elementos a solo 20 comparaciones (O(log n)). Los BST no balanceados pueden degenerar en listas lineales de O(n) si se insertan ordenados. Los árboles AVL y Red-Black se auto-balancean mediante rotaciones de nodos, asegurando altura logarítmica. Los Heaps mantienen el máximo (Max-Heap) o mínimo (Min-Heap) en la raíz para colas de prioridad O(1) de acceso y O(log n) de inserción/borrado. Los Tries optimizan búsquedas de prefijos y los Árboles B/B+ reducen lecturas físicas en bases de datos mediante alta ramificación. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `class BSTNode:
    def __init__(self, key):
        self.left = self.right = None
        self.val = key

def insert(root, key):
    if root is None: return BSTNode(key)
    if key < root.val: root.left = insert(root.left, key)
    else: root.right = insert(root.right, key)
    return root`,
    quiz: [
      {
        question: "En un Árbol Binario de Búsqueda (BST) balanceado de n elementos, ¿cuál es la complejidad de buscar una clave?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 1,
        explanation: "Al estar balanceado, cada decisión a la izquierda o derecha descarta la mitad de los elementos restantes, logrando una complejidad logarítmica."
      },
      {
        question: "¿Qué estructura es ideal para autocompletar palabras de forma ultra-eficiente?",
        options: ["Trie", "Max-Heap", "Árbol AVL"],
        answerIndex: 0,
        explanation: "El Trie (o árbol de prefijos) está especialmente optimizado para búsquedas rápidas basadas en prefijos de cadenas de texto."
      },
      {
        question: "¿Qué caracteriza a un Árbol AVL frente a un Árbol Binario de Búsqueda (BST) común?",
        options: ["Siempre almacena datos en texto plano", "Garantiza que la diferencia de alturas de subárboles no sea mayor a 1", "No permite insertar datos duplicados"],
        answerIndex: 1,
        explanation: "Los árboles AVL son auto-balanceados. Mediante rotaciones de nodos, aseguran que la diferencia de altura de sus subárboles sea como máximo 1."
      },
      {
        question: "¿Cuál es la propiedad fundamental de un Max-Heap?",
        options: ["El nodo raíz contiene el valor mínimo", "El nodo raíz contiene el valor máximo", "Todos los nodos están ordenados de izquierda a derecha"],
        answerIndex: 1,
        explanation: "En un Max-Heap, cada nodo padre es mayor o igual que sus nodos hijos, lo que garantiza que la raíz sea siempre el valor máximo."
      },
      {
        question: "¿Qué ventaja ofrece un Árbol B frente a un BST en bases de datos con lectura en disco?",
        options: ["Tiene un factor de ramificación alto, reduciendo accesos lentos a disco", "Los BST son más rápidos en disco", "Los Árboles B no consumen memoria"],
        answerIndex: 0,
        explanation: "Los árboles B tienen muchos hijos por nodo (alta ramificación). Esto reduce la altura del árbol, por lo que se requieren muy pocas búsquedas físicas en disco duro (I/O)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: BST (Binary Search Tree): Izquierda menor, derecha mayor?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: BST (Binary Search Tree): Izquierda menor, derecha mayor", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que BST (Binary Search Tree): Izquierda menor, derecha mayor. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Balanceo: Por qué un árbol degenerado es solo una lista lenta?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Balanceo: Por qué un árbol degenerado es solo una lista lenta", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Balanceo: Por qué un árbol degenerado es solo una lista lenta. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: AVL y Red-Black: Rotaciones automáticas para mantener O(log n)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: AVL y Red-Black: Rotaciones automáticas para mantener O(log n)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que AVL y Red-Black: Rotaciones automáticas para mantener O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Tries: El secreto detrás del autocompletado en buscadores?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Tries: El secreto detrás del autocompletado en buscadores", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tries: El secreto detrás del autocompletado en buscadores. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: B-Trees: La estructura que sostiene a casi todas las bases de datos SQL?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: B-Trees: La estructura que sostiene a casi todas las bases de datos...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que B-Trees: La estructura que sostiene a casi todas las bases de datos SQL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 5,
    title: "MÓDULO 5: TEORÍA DE GRAFOS",
    description: "Modelando el mundo: redes sociales, GPS y dependencias.",
    items: [
        
      "Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo).",
      "BFS y DFS: Exploración por niveles vs profundidad extrema.",
      "Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente.",
      "MST: Prim y Kruskal para optimizar tendidos de cables o rutas.",
      "Orden Topológico: Gestión de dependencias en compiladores y proyectos.",
      "Ciclos y Conectividad: Detectando bucles infinitos en sistemas.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Todo es un grafo: Internet, las neuronas, el metro. BFS recorre radialmente nivel por nivel usando una Cola (Queue), ideal para distancias mínimas en grafos no ponderados. DFS explora ramas a profundidad usando una Pila (Stack) o recursión, útil para ciclos y ordenamiento topológico. Dijkstra resuelve rutas más cortas con pesos positivos usando colas de prioridad. A* acelera Dijkstra incorporando heurísticas de distancia al destino. Prim y Kruskal calculan el Árbol de Expansión Mínima (MST) que conecta todos los nodos con el menor peso acumulado total. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `# Representación con Lista de Adyacencia
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    # ...
}

def bfs(graph, start):
    visited = {start}
    queue = [start]
    while queue:
        vertex = queue.pop(0)
        # Procesar vertex...`,
    quiz: [
      {
        question: "¿Qué algoritmo se utiliza para encontrar el camino más corto en un grafo ponderado con pesos no negativos?",
        options: ["Dijkstra", "Kruskal", "DFS (Búsqueda en Profundidad)"],
        answerIndex: 0,
        explanation: "Dijkstra utiliza una cola de prioridad para encontrar la ruta con menor peso acumulado desde un nodo de origen."
      },
      {
        question: "¿Qué estructura de datos sirve de soporte para el recorrido BFS (anchura)?",
        options: ["Pila (Stack)", "Cola (Queue)", "Tabla Hash"],
        answerIndex: 1,
        explanation: "BFS recorre nodo por nodo nivel a nivel, y la estructura FIFO (primero en entrar, primero en salir) de una cola asegura este comportamiento."
      },
      {
        question: "¿Cuál es la diferencia principal entre el recorrido BFS y el DFS?",
        options: ["BFS usa pilas; DFS usa colas", "BFS explora nivel por nivel; DFS explora una rama al fondo antes de retroceder", "BFS es siempre más rápido que DFS"],
        answerIndex: 1,
        explanation: "BFS explora radialmente niveles cercanos primero. DFS desciende por una rama hasta una hoja antes de realizar retroceso (backtracking)."
      },
      {
        question: "¿Qué es un Árbol de Expansión Mínima (MST)?",
        options: ["Un subconjunto de aristas que conecta todos los vértices sin ciclos y con el menor peso total", "Un grafo dirigido que no tiene ciclos", "El camino más corto entre dos puntos del grafo"],
        answerIndex: 0,
        explanation: "El MST conecta todos los vértices del grafo usando aristas con el peso mínimo posible acumulado y sin crear ciclos."
      },
      {
        question: "¿Para qué se utiliza el Ordenamiento Topológico en grafos?",
        options: ["Para encontrar la ruta más rápida en un mapa", "Para ordenar tareas con dependencias en un orden ejecutable", "Para encontrar los nodos con más conexiones"],
        answerIndex: 1,
        explanation: "El ordenamiento topológico ordena de forma secuencial nodos que dependen entre sí (ej. dependencias de instalación o materias académicas)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: BFS y DFS: Exploración por niveles vs profundidad extrema?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: BFS y DFS: Exploración por niveles vs profundidad extrema", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que BFS y DFS: Exploración por niveles vs profundidad extrema. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: MST: Prim y Kruskal para optimizar tendidos de cables o rutas?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: MST: Prim y Kruskal para optimizar tendidos de cables o rutas", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que MST: Prim y Kruskal para optimizar tendidos de cables o rutas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Orden Topológico: Gestión de dependencias en compiladores y proyectos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Orden Topológico: Gestión de dependencias en compiladores y proyectos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Orden Topológico: Gestión de dependencias en compiladores y proyectos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Ciclos y Conectividad: Detectando bucles infinitos en sistemas?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ciclos y Conectividad: Detectando bucles infinitos en sistemas", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ciclos y Conectividad: Detectando bucles infinitos en sistemas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 6,
    title: "MÓDULO 6: ALGORITMOS DE ORDENAMIENTO",
    description: "Del caos al orden: la eficiencia de la organización de datos.",
    items: [
        
      "Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños).",
      "Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place).",
      "Especiales: Counting y Radix Sort (superando el límite de comparación).",
      "Estabilidad: Por qué importa mantener el orden relativo de elementos iguales.",
      "Timsort: El algoritmo híbrido real detrás de Python y Java.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Ordenar es fundamental para búsquedas eficientes. Merge Sort es estable (mantiene el orden original de elementos con valores iguales) pero consume O(n) memoria extra. Quick Sort es in-place (no requiere memoria extra) pero su peor caso es O(n²) si el pivote no está optimizado. Matemáticamente, ningún ordenamiento basado en comparaciones puede ser menor a O(n log n). Algoritmos de ordenamiento no basados en comparaciones (como Counting Sort o Radix Sort) pueden lograr O(n) pero requieren restricciones en el rango de los datos. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L); merge_sort(R)
        # ... lógica de mezcla ...
    return arr`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal en el peor de los casos de Quick Sort no optimizado?",
        options: ["O(n log n)", "O(n²)", "O(2n)"],
        answerIndex: 1,
        explanation: "Si el pivote elegido es siempre el valor mínimo o máximo (por ejemplo, en listas ya ordenadas), el algoritmo se degrada a cuadrático."
      },
      {
        question: "¿Qué significa que un algoritmo de ordenamiento sea 'estable'?",
        options: ["Que siempre tarda el mismo tiempo", "Que no requiere memoria adicional", "Que preserva el orden relativo de elementos con claves iguales"],
        answerIndex: 2,
        explanation: "La estabilidad garantiza que si dos registros tienen el mismo valor de ordenación, mantendrán su orden original relativo después del proceso."
      },
      {
        question: "¿Cuál es la complejidad de tiempo de Merge Sort en su mejor, peor y promedio caso?",
        options: ["Mejor: O(n), Peor: O(n log n)", "Siempre O(n log n) en todos los casos", "Siempre O(n²) en todos los casos"],
        answerIndex: 1,
        explanation: "Merge Sort siempre realiza las mismas divisiones y combinaciones sin importar el orden original del arreglo. Su complejidad es garantizada de O(n log n)."
      },
      {
        question: "¿Cuál de los siguientes algoritmos es un ejemplo de ordenamiento in-place?",
        options: ["Merge Sort", "Quick Sort", "Counting Sort"],
        answerIndex: 1,
        explanation: "Quick Sort ordena los elementos intercambiándolos dentro de la misma memoria del arreglo original, sin duplicar arreglos grandes."
      },
      {
        question: "¿Cuál es el límite inferior matemático para ordenar mediante comparaciones de elementos?",
        options: ["O(n)", "O(n log n)", "O(log n)"],
        answerIndex: 1,
        explanation: "Se ha demostrado mediante árboles de decisión que cualquier algoritmo que ordene comparando elementos entre sí requiere al menos O(n log n) operaciones."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets peq...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Especiales: Counting y Radix Sort (superando el límite de comparación)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Especiales: Counting y Radix Sort (superando el límite de comparación)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Especiales: Counting y Radix Sort (superando el límite de comparación). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Estabilidad: Por qué importa mantener el orden relativo de elementos iguales?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Estabilidad: Por qué importa mantener el orden relativo de elemento...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Estabilidad: Por qué importa mantener el orden relativo de elementos iguales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Timsort: El algoritmo híbrido real detrás de Python y Java?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Timsort: El algoritmo híbrido real detrás de Python y Java", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Timsort: El algoritmo híbrido real detrás de Python y Java. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 7,
    title: "MÓDULO 7: ALGORITMOS DE BÚSQUEDA",
    description: "Encontrar la aguja en el pajar de datos.",
    items: [
        
      "Búsqueda Binaria: El poder de dividir y conquistar (O(log n)).",
      "Técnicas de Punteros: Two Pointers y Sliding Window.",
      "Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'.",
      "Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "La Búsqueda Binaria reduce el espacio de búsqueda a la mitad en cada paso (O(log n)), requiriendo obligatoriamente que la colección esté ordenada. La técnica de Dos Punteros (Two Pointers) optimiza búsquedas de sumas o pares en colecciones ordenadas en tiempo O(n). La Ventana Deslizante (Sliding Window) analiza subarreglos eficientemente. Los algoritmos A* usan funciones heurísticas que estiman la distancia al destino para optimizar el recorrido frente a Dijkstra. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x: return mid
        elif arr[mid] > x: return binary_search(arr, low, mid - 1, x)
        else: return binary_search(arr, mid + 1, high, x)
    return -1`,
    quiz: [
      {
        question: "¿Qué condición fundamental debe cumplir una colección para aplicar la Búsqueda Binaria?",
        options: ["Tener tamaño par", "Estar ordenada", "Estar en una lista enlazada"],
        answerIndex: 1,
        explanation: "La búsqueda binaria asume que los datos están ordenados para poder descartar de forma segura la mitad superior o inferior en cada comparación."
      },
      {
        question: "¿Cuál es la complejidad temporal de la Búsqueda Binaria?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 1,
        explanation: "Cada paso en la búsqueda binaria reduce la cantidad de elementos a la mitad, resultando en un tiempo de ejecución logarítmico O(log n)."
      },
      {
        question: "¿Qué técnica de punteros es ideal para buscar sumas objetivo en un arreglo ordenado en O(n)?",
        options: ["Dos Punteros (Two Pointers)", "Búsqueda en Grafos", "Filtro de Bloom"],
        answerIndex: 0,
        explanation: "La técnica de Dos Punteros inicializa extremos e incrementa/decrementa su posición según la suma parcial, logrando un recorrido de O(n)."
      },
      {
        question: "¿Qué caracteriza al algoritmo de Búsqueda Heurística A* frente a Dijkstra?",
        options: ["A* es más lento", "A* usa una función heurística para estimar la distancia restante al objetivo", "A* no soporta pesos"],
        answerIndex: 1,
        explanation: "A* estima el costo restante hacia la meta para enfocar su búsqueda espacialmente y evaluar menos nodos innecesarios."
      },
      {
        question: "Si buscamos en una lista desordenada de tamaño n, ¿cuál es el peor caso para Búsqueda Lineal?",
        options: ["n comparaciones", "log n comparaciones", "n/2 comparaciones"],
        answerIndex: 0,
        explanation: "Sin orden, debemos evaluar cada elemento individualmente. Si no existe, se habrán realizado exactamente n comparaciones."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda Binaria: El poder de dividir y conquistar (O(log n))?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Búsqueda Binaria: El poder de dividir y conquistar (O(log n))", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda Binaria: El poder de dividir y conquistar (O(log n)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Técnicas de Punteros: Two Pointers y Sliding Window?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Técnicas de Punteros: Two Pointers y Sliding Window", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Técnicas de Punteros: Two Pointers y Sliding Window. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 8,
    title: "MÓDULO 8: PARADIGMAS AVANZADOS",
    description: "Estrategias de diseño para problemas aparentemente imposibles.",
    items: [
        
      "Programación Dinámica: Memoización vs Tabulación. No repitas trabajo.",
      "Divide y Vencerás: Descomposición de problemas masivos.",
      "Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales.",
      "Backtracking: Poda de árboles de decisión (N-Queens, Sudoku).",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "La Programación Dinámica (DP) guarda soluciones de subproblemas superpuestos para no calcularlos dos veces, reduciendo tiempos exponenciales a polinomiales. Memoización es el enfoque Top-Down (recursivo con caché). Tabulación es el enfoque Bottom-Up (tabla iterativa de menor a mayor). Greedy toma decisiones locales óptimas instantáneas, sin retroceder. Backtracking realiza una búsqueda en profundidad sistemática sobre árboles de decisiones, podando ramas inviables para optimizar la búsqueda. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `# DP: Fibonacci con Tabulación
def fib_dp(n):
    table = [0] * (n + 1)
    table[1] = 1
    for i in range(2, n + 1):
        table[i] = table[i-1] + table[i-2]
    return table[n]`,
    quiz: [
      {
        question: "¿En qué consiste la técnica de 'Memoización' (Memoization)?",
        options: ["En compilar código", "En guardar soluciones de subproblemas ya resueltos en memoria para no recalcularlos", "En iterar hacia arriba en una tabla"],
        answerIndex: 1,
        explanation: "La memoización es un enfoque Top-Down que optimiza funciones recursivas almacenando los resultados de llamadas previas en estructuras tipo diccionario o arreglo."
      },
      {
        question: "¿Cuál es la diferencia entre Programación Dinámica (DP) y Divide y Vencerás?",
        options: ["DP resuelve subproblemas superpuestos; Divide y Vencerás los resuelve independientes", "Divide y Vencerás es para bases de datos", "DP es secuencial y recursivo siempre"],
        answerIndex: 0,
        explanation: "Divide y Vencerás reparte problemas en piezas aisladas. DP une subproblemas que se repiten una y otra vez reutilizando soluciones previas."
      },
      {
        question: "¿Qué estrategia sigue un Algoritmo Voraz (Greedy)?",
        options: ["Prueba todas las opciones posibles", "Toma la decisión local óptima instantánea esperando llegar al óptimo global", "Resuelve la mitad del problema"],
        answerIndex: 1,
        explanation: "Los algoritmos Greedy toman el mejor camino local e inmediato en cada paso, sin reconsiderar ni retroceder."
      },
      {
        question: "¿Cuál es el concepto clave de la técnica 'Backtracking'?",
        options: ["Guardar datos en disco", "Explorar soluciones candidatas y retroceder tan pronto se viola una regla (poda)", "Reescribir funciones al revés"],
        answerIndex: 1,
        explanation: "Backtracking recorre un árbol de decisiones y descarta caminos erróneos de inmediato retrocediendo un paso."
      },
      {
        question: "En Programación Dinámica, ¿cuál es la diferencia entre Top-Down y Bottom-Up?",
        options: ["Top-Down usa recursión y memoización; Bottom-Up usa tablas iterativas", "Top-Down es iterativo; Bottom-Up es recursivo", "No hay diferencia en rendimiento"],
        answerIndex: 0,
        explanation: "Top-Down parte del problema general recursivamente guardando caché. Bottom-Up construye la tabla desde los casos más pequeños."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Programación Dinámica: Memoización vs Tabulación. No repitas trabajo?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Programación Dinámica: Memoización vs Tabulación. No repitas trabajo", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Programación Dinámica: Memoización vs Tabulación. No repitas trabajo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Divide y Vencerás: Descomposición de problemas masivos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Divide y Vencerás: Descomposición de problemas masivos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Divide y Vencerás: Descomposición de problemas masivos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimo...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Backtracking: Poda de árboles de decisión (N-Queens, Sudoku)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Backtracking: Poda de árboles de decisión (N-Queens, Sudoku)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Backtracking: Poda de árboles de decisión (N-Queens, Sudoku). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 9,
    title: "MÓDULO 9: ESTRUCTURAS ESPECIALES",
    description: "Optimizando para casos de uso extremos y masivos.",
    items: [
        
      "Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no.",
      "LRU Cache: Gestión de memoria basada en uso reciente.",
      "Segment Trees: Consultas de rango ultra-rápidas.",
      "Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "Los Filtros de Bloom son estructuras probabilísticas compactas que afirman con certeza si un elemento NO está en un conjunto, aunque tienen un margen de falsos positivos (pero 0% falsos negativos). Las cachés LRU expulsan el elemento menos usado recientemente cuando se llenan. Los Segment Trees representan intervalos para consultas y actualizaciones de rango en O(log n). DSU gestiona la unión e identificación de pertenencia de elementos a conjuntos disjuntos de forma casi constante. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `class SimpleLRU:
    def __init__(self, size):
        self.cache = {} # Simplificado
        self.order = []
        self.max_size = size`,
    quiz: [
      {
        question: "¿Qué afirmación describe correctamente a un Filtro de Bloom?",
        options: ["Es 100% preciso", "Puede dar falsos positivos pero nunca falsos negativos", "Puede dar falsos negativos pero nunca falsos positivos"],
        answerIndex: 1,
        explanation: "Si el filtro dice que un elemento no está, es 100% seguro de que no está. Si dice que está, existe la posibilidad de que no esté realmente (falso positivo) debido a colisión de bits."
      },
      {
        question: "¿Qué hace una caché LRU (Least Recently Used) al llenarse?",
        options: ["Borra el elemento con menor valor numérico", "Borra el elemento menos utilizado recientemente", "Reinicia la memoria interna"],
        answerIndex: 1,
        explanation: "Expulsa el elemento que ha estado inactivo por más tiempo para liberar espacio para los nuevos registros."
      },
      {
        question: "¿Para qué sirve un Segment Tree?",
        options: ["Para ordenar archivos", "Para realizar consultas de rango y actualizaciones en intervalos en tiempo O(log n)", "Para comprimir imágenes"],
        answerIndex: 1,
        explanation: "Estructura intervalos de un arreglo en un árbol binario permitiendo consultas agregadas y actualizaciones rápidas en O(log n)."
      },
      {
        question: "¿Qué permite hacer la estructura DSU (Disjoint Set Union) u Union-Find?",
        options: ["Encontrar laberintos", "Unir conjuntos disjuntos de elementos y realizar búsquedas asociativas ultra-rápidas", "Copiar bases de datos"],
        answerIndex: 1,
        explanation: "Mantiene y une particiones disjuntas eficientemente, siendo crucial en la detección de ciclos de algoritmos como Kruskal."
      },
      {
        question: "Si el vector de bits de un Filtro de Bloom es muy pequeño en relación a los datos insertados, ¿qué ocurre?",
        options: ["El filtro falla al compilar", "La tasa de falsos positivos tiende al 100%", "La tasa de falsos negativos aumenta"],
        answerIndex: 1,
        explanation: "Al haber pocos bits, estos se saturan rápidamente de '1's, haciendo que casi cualquier consulta responda positivamente (falso positivo)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitiv...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: LRU Cache: Gestión de memoria basada en uso reciente?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: LRU Cache: Gestión de memoria basada en uso reciente", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que LRU Cache: Gestión de memoria basada en uso reciente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Segment Trees: Consultas de rango ultra-rápidas?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Segment Trees: Consultas de rango ultra-rápidas", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Segment Trees: Consultas de rango ultra-rápidas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
    {
    id: 10,
    title: "MÓDULO 10: APLICACIONES EN EL MUNDO REAL",
    description: "Integrando todo en sistemas de producción e Inteligencia Artificial.",
    items: [
        
      "Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes.",
      "Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux.",
      "Redes: Algoritmos de enrutamiento OSPF y tablas ARP.",
      "IA Básica: Árboles de decisión y el algoritmo Minimax para juegos.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
        "Errores frecuentes de principiantes y cómo evitarlos en producción.",
        "Checklist de repaso previo a evaluación o grabación de clase."
      ],
    content: "La teoría cobra vida en sistemas reales. Las bases de datos SQL usan índices basados en Árboles B+ para evitar barridos lineales secuenciales de disco. Los sistemas de archivos Linux usan Inodos para indexar el almacenamiento físico y permisos de archivos. El enrutamiento en redes (como OSPF) corre Dijkstra en cada router para hallar la ruta de menor latencia. Los motores de juegos clásicos de tablero (ajedrez, damas) usan árboles Minimax con poda Alfa-Beta para evaluar jugadas y respuestas del contrincante. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación extendida antes de grabar tu clase o avanzar al siguiente módulo.",
    codeSnippet: `# Ejemplo conceptual de búsqueda en DB
class DatabaseIndex:
    def __init__(self):
        self.b_tree = BTree(order=32)
    def find_record(self, key):
        return self.b_tree.search(key)`,
    quiz: [
      {
        question: "¿Por qué las bases de datos prefieren Árboles B/B+ frente a BST para indexar en disco?",
        options: ["Son más fáciles de programar", "Tienen un factor de ramificación alto que reduce lecturas lentas a disco", "No requieren ser balanceados"],
        answerIndex: 1,
        explanation: "Los árboles B/B+ permiten que cada nodo contenga cientos de claves, reduciendo drásticamente la altura del árbol y con ello los accesos físicos a disco (operaciones I/O lentas)."
      },
      {
        question: "¿Cómo funciona a nivel de estructuras un índice de base de datos?",
        options: ["Es un respaldo ordenado", "Es una estructura auxiliar que relaciona claves con punteros físicos de registro en disco", "Es una función recursiva"],
        answerIndex: 1,
        explanation: "El índice vincula un valor (como ID) con la posición física en el bloque del disco duro, evitando leer toda la tabla."
      },
      {
        question: "¿Qué es un Inodo (Inode) en sistemas Linux?",
        options: ["La estructura que almacena metadatos y punteros de datos de un archivo", "Una función de red", "Un algoritmo de ordenamiento"],
        answerIndex: 0,
        explanation: "El inodo contiene tamaño, permisos y bloques físicos en disco del archivo, abstrayendo la metadata de su nombre de archivo."
      },
      {
        question: "¿Qué algoritmo se usa en el enrutamiento de red OSPF?",
        options: ["Filtro de Bloom", "Dijkstra para calcular rutas con menor latencia", "Búsqueda Binaria de IPs"],
        answerIndex: 1,
        explanation: "OSPF usa Dijkstra para evaluar el camino más corto o de menor costo en su topología de red de enrutadores."
      },
      {
        question: "¿Cuál es el algoritmo clásico usado en IA para juegos de tablero de dos jugadores?",
        options: ["Búsqueda Lineal", "Minimax con poda Alfa-Beta", "Redes Neuronales directas"],
        answerIndex: 1,
        explanation: "Minimax simula los turnos proyectando jugadas, y la poda Alfa-Beta descarta ramas de juego innecesarias para ahorrar tiempo."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Redes: Algoritmos de enrutamiento OSPF y tablas ARP?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Redes: Algoritmos de enrutamiento OSPF y tablas ARP", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Redes: Algoritmos de enrutamiento OSPF y tablas ARP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: IA Básica: Árboles de decisión y el algoritmo Minimax para juegos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: IA Básica: Árboles de decisión y el algoritmo Minimax para juegos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IA Básica: Árboles de decisión y el algoritmo Minimax para juegos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  }
];

export const BIG_O_DATA = [
  { n: 1, constant: 1, log: 0, linear: 1, nlog: 0, quadratic: 1, exponential: 2 },
  { n: 10, constant: 1, log: 2.3, linear: 10, nlog: 23, quadratic: 100, exponential: 1024 },
  { n: 20, constant: 1, log: 3, linear: 20, nlog: 60, quadratic: 400, exponential: 3000 },
  { n: 30, constant: 1, log: 3.4, linear: 30, nlog: 102, quadratic: 900, exponential: 3000 },
  { n: 40, constant: 1, log: 3.7, linear: 40, nlog: 148, quadratic: 1600, exponential: 3000 },
  { n: 50, constant: 1, log: 3.9, linear: 50, nlog: 195, quadratic: 2500, exponential: 3000 },
];
