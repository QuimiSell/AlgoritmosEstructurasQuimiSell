import { Course } from '../domain/models';
import { COURSE_MODULES } from '../constants';

export const ALGORITHMS_COURSE: Course = {
  id: 'algoritmos',
  title: 'Algoritmos y Estructuras de Datos (Nivel 0 a Universitario)',
  shortTitle: 'Algoritmos & Estructuras',
  badge: 'Ciencias de la Computación · 20 Módulos',
  icon: '⚡',
  description:
    'Ruta pedagógica completa desde cero absoluto hasta nivel universitario y Big Tech: complejidad Big-O, memoria RAM, listas, pilas, árboles AVL, grafos, programación dinámica, filtros de Bloom y aplicaciones en bases de datos e IA.',
  whyStudyTitle: '🧠 ¿Por qué se estudia esta clase universitaria?',
  whyStudyText:
    'Escribir código que "funcione" es fácil; escribir código que sea eficiente, escale y no colapse la memoria RAM es el verdadero sello de un ingeniero de software de élite. Esta asignatura te entrena para razonar analíticamente sobre el uso de recursos críticos (tiempo de procesamiento de CPU y espacio de memoria física). Dominarás la selección fundamentada de estructuras y algoritmos para transformar problemas intratables en soluciones de alto rendimiento a escala de millones de usuarios.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Fundamentos, Pensamiento Computacional y Big-O",
      why: "Permite medir matemáticamente el rendimiento asintótico y el crecimiento de las operaciones antes de codificar, evitando fallas de escala críticas en producción."
    },
    {
      id: 2,
      title: "Memoria Física, Punteros y Arreglos Dinámicos",
      why: "Comprender la contigüidad en RAM, la localidad de caché L1/L2/L3 y el análisis amortizado O(1) de duplicación de capacidad."
    },
    {
      id: 3,
      title: "Listas Enlazadas (Simples, Dobles y Circulares)",
      why: "Gestión dinámica de nodos y enlaces sin desplazar bloques de memoria; base de planificadores de SO y cachés LRU."
    },
    {
      id: 4,
      title: "Pilas, Colas y Deques (LIFO vs FIFO)",
      why: "Modelado de procesos secuenciales en sistemas operativos (Call Stack, evaluación de expresiones) y colas de mensajería (Kafka/RabbitMQ)."
    },
    {
      id: 5,
      title: "Tablas Hash, Funciones Hash y Colisiones",
      why: "Acceso instantáneo en tiempo constante promedio O(1), rehashing dinámico y defensas contra ataques HashDoS (SipHash)."
    },
    {
      id: 6,
      title: "Recursión, Backtracking y Teorema Maestro",
      why: "Resolución formal de ecuaciones de recurrencia T(n) = aT(n/b) + f(n) y algoritmos de exploración exhaustiva con poda."
    },
    {
      id: 7,
      title: "Ordenamiento Elemental (Bubble, Selection, Insertion)",
      why: "Estudio de la estabilidad, el conteo de inversiones y por qué Insertion Sort es la base de Timsort para arreglos pequeños."
    },
    {
      id: 8,
      title: "Ordenamiento Avanzado (Merge, Quick, Timsort)",
      why: "Demostración formal del límite inferior Ω(n log n) por árboles de decisión y particionado in-place Lomuto vs Hoare."
    },
    {
      id: 9,
      title: "Algoritmos de Búsqueda (Lineal, Binaria, Interpolación)",
      why: "Búsqueda logarítmica O(log n), prevención del histórico bug de overflow en mid, y búsqueda sobre espacios de respuestas monótonas."
    },
    {
      id: 10,
      title: "Árboles Binarios y Árboles Binarios de Búsqueda (BST)",
      why: "Jerarquías no lineales, recorridos In-Order / Pre-Order / Post-Order y el análisis del riesgo de degeneración a lista O(n)."
    },
    {
      id: 11,
      title: "Árboles Auto-balanceados (AVL y Rojo-Negro)",
      why: "Garantía estricta de O(log n) mediante rotaciones simples y dobles; por qué C++ std::map y Java TreeMap eligen Red-Black."
    },
    {
      id: 12,
      title: "Montículos (Heaps), Colas de Prioridad y Heapsort",
      why: "Mapeo completo en arreglos sin punteros, construcción en tiempo lineal O(n) y ordenamiento in-place O(n log n)."
    },
    {
      id: 13,
      title: "Teoría de Grafos I: Modelado y Representaciones",
      why: "Matriz de adyacencia O(V²) vs Lista de adyacencia O(V + E), grafos dirigidos y el Lema del Apretón de Manos (Handshaking Lemma)."
    },
    {
      id: 14,
      title: "Teoría de Grafos II: BFS, DFS y Orden Topológico",
      why: "Búsqueda en anchura con Cola FIFO, búsqueda en profundidad y resolución de dependencias con el Algoritmo de Kahn."
    },
    {
      id: 15,
      title: "Teoría de Grafos III: Caminos Mínimos y Árboles de Expansión (MST)",
      why: "Dijkstra con Min-Heap, detección de ciclos negativos con Bellman-Ford y algoritmos de Kruskal (Union-Find) y Prim."
    },
    {
      id: 16,
      title: "Programación Dinámica (Dynamic Programming)",
      why: "Memoización vs Tabulación para transformar problemas exponenciales O(2ⁿ) en polinomiales (Mochila 0/1 y LCS de git diff)."
    },
    {
      id: 17,
      title: "Algoritmos Voraces (Greedy) y Huffman",
      why: "Optimización local inmediata, teoría de Matroides y compresión óptima sin pérdida de datos en formatos ZIP y JPEG."
    },
    {
      id: 18,
      title: "Estructuras Jerárquicas Avanzadas (Tries, Segment Trees, Fenwick)",
      why: "Búsqueda de prefijos O(L) independiente del tamaño del diccionario y consultas por rango con Lazy Propagation en O(log n)."
    },
    {
      id: 19,
      title: "Estructuras Probabilísticas para Big Data",
      why: "Filtros de Bloom con cero falsos negativos y HyperLogLog para conteo de miles de millones de usuarios únicos con 1.5 KB de RAM."
    },
    {
      id: 20,
      title: "Aplicaciones Industriales: Bases de Datos, IA y Big Tech",
      why: "B+ Trees en PostgreSQL/MySQL, LSM-Trees en bases NoSQL, y Grafos de Computación (DAGs) para retropropagación en PyTorch."
    }
  ],
  labChallenge: {
    title: "Simulador de Rutas Óptimas con Caché LRU de Doble Enlace",
    badge: "Desafío Práctico Universitario",
    description: "Tu objetivo es construir una aplicación (visual o por terminal) que permita modelar una red de ciudades como un grafo ponderado. El sistema debe calcular la ruta más corta entre dos puntos utilizando Dijkstra o A*, pero con una restricción de rendimiento real: debe implementar una Caché LRU de Rutas (usando Tabla Hash + Lista Doblemente Enlazada) con una capacidad fija de 3 elementos.",
    requirements: [
      "• Grafo Ponderado: Modelar al menos 6 vértices y sus respectivas aristas ponderadas (distancias en km).",
      "• Algoritmo de Ruta: Implementar Dijkstra con Min-Heap o A* para buscar la ruta óptima.",
      "• Caché LRU (Capacidad 3): Almacenar las últimas 3 rutas consultadas. Si se vuelve a buscar la misma ruta, retornar en O(1) directo sin ejecutar Dijkstra.",
      "• Evicción en Tiempo O(1): Al buscar una 4ta ruta diferente, debe eliminar de la caché la ruta menos usada recientemente (LRU) reasignando los punteros prev y next."
    ],
    cleanCodeRules: [
      "• Principios SOLID: Separar la lógica algorítmica del grafo de la interfaz y la caché.",
      "• Manejo de Casos Borde: Rutas inexistentes, nodos desconectados y entradas vacías.",
      "• Lenguajes Habilitados: Desarrollar en TypeScript / JavaScript o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Dijkstra y Caché LRU - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio (Simulador de Ruta Óptima con Caché LRU de Rutas).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (TypeScript o Python):\n- \n\nExplicación breve de la estructura de datos utilizada en la Caché LRU:\n- \n\nSaludos cordiales.`
  },
  modules: COURSE_MODULES
};
