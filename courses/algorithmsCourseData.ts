import { Module } from '../domain/models';

export const BIG_O_DATA = [
  { n: 1, constant: 1, log: 0, linear: 1, nlog: 0, quadratic: 1, exponential: 2 },
  { n: 10, constant: 1, log: 2.3, linear: 10, nlog: 23, quadratic: 100, exponential: 1024 },
  { n: 20, constant: 1, log: 3, linear: 20, nlog: 60, quadratic: 400, exponential: 3000 },
  { n: 30, constant: 1, log: 3.4, linear: 30, nlog: 102, quadratic: 900, exponential: 3000 },
  { n: 40, constant: 1, log: 3.7, linear: 40, nlog: 148, quadratic: 1600, exponential: 3000 },
  { n: 50, constant: 1, log: 3.9, linear: 50, nlog: 195, quadratic: 2500, exponential: 3000 },
];

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: 'MÓDULO 1: FUNDAMENTOS, PENSAMIENTO COMPUTACIONAL Y BIG-O',
    description:
      'La ciencia de medir la eficiencia algorítmica. De la intuición del chef al análisis asintótico formal O, Ω, Θ.',
    items: [
      'Nivel 0: ¿Qué es un algoritmo? Instrucciones atómicas y medición de pasos vs tiempo de reloj.',
      'Nivel Intermedio: Jerarquía Big-O: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!). Reglas de simplificación.',
      'Nivel Universitario: Definición matemática formal con constantes (c, n₀). Límites al infinito e invariantes.',
      'Trade-offs fundamentales de la computación: Memoria RAM vs Tiempo de CPU.',
      'Casos de estudio: Por qué Google y Big Tech descartan código funcional pero cuadrático.',
    ],
    content: `## Panorama del tema: FUNDAMENTOS Y BIG-O

La notación Big-O es el lenguaje universal con el que los ingenieros de software comparan algoritmos de manera objetiva e independiente del hardware. En lugar de cronometrar milisegundos (que varían según el procesador, la carga del sistema o el lenguaje de programación), medimos cómo crece el número de operaciones primitivas a medida que el tamaño de la entrada (n) tiende a infinito.

Este módulo te lleva desde los conceptos más intuitivos hasta el rigor matemático necesario para diseñar software a escala masiva.

## 🟢 Nivel 0: Intuición & Pensamiento Computacional

Imagina que buscas un contacto en una libreta de teléfonos de 1,000,000 de personas:
· Si revisas persona por persona desde la primera página, tardarías en el peor caso 1,000,000 de pasos. Esto es **O(n) - Tiempo Lineal**.
· Si abres la libreta a la mitad y descartas 500,000 personas de un solo golpe, repitiendo el proceso, tardarás a lo sumo 20 pasos. Esto es **O(log n) - Tiempo Logarítmico**.
· Si tienes el número de página anotado de antemano y abres directo allí, tardas 1 paso. Esto es **O(1) - Tiempo Constante**.

## 🟡 Nivel Intermedio: Análisis Asintótico y Reglas Prácticas

En el desarrollo profesional aplicamos dos reglas de simplificación:
1. **Regla de la Suma (Término Dominante):** Si T(n) = n² + 100n + 5000, para n grande el término n² opaca completamente a los demás. La complejidad es O(n²).
2. **Regla del Producto (Eliminación de Constantes):** Un algoritmo que hace 5n operaciones sigue siendo O(n) porque su tasa de crecimiento es estrictamente proporcional a n.

## 🟣 Nivel Universitario: Rigor Matemático y Definición Formal

Formalmente, decimos que f(n) ∈ O(g(n)) si y solo si existen constantes positivas c > 0 y n₀ > 0 tales que:
**0 ≤ f(n) ≤ c · g(n)  ∀ n ≥ n₀**

De manera complementaria:
· **Ω(g(n)) (Omega):** Cota inferior asintótica (el algoritmo requerirá al menos este número de pasos).
· **Θ(g(n)) (Theta):** Cota ajustada (el algoritmo crece con el orden exacto de g(n)).

## 🏭 Caso Real en la Industria

En sistemas de alta concurrencia como los índices de búsqueda de Google o los motores de bases de datos relacionales, una sola consulta con complejidad O(n²) en una tabla de 10 millones de filas requeriría 10¹⁴ operaciones (~27 horas de CPU). Transformarla a O(log n) toma menos de 24 operaciones (~0.2 microsegundos).`,
    codeSnippet: `// Comparación de complejidades asintóticas en TypeScript / JavaScript
function constantTime(arr: number[]): number | null {
  // O(1): Acceso directo a memoria por dirección indexada
  return arr.length > 0 ? arr[0] : null;
}

function linearTime(arr: number[]): number {
  // O(n): Un solo ciclo recorre todos los elementos
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function quadraticTime(matrix: number[][]): number {
  // O(n²): Ciclos anidados cuadráticos
  let totalMatches = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) totalMatches++;
    }
  }
  return totalMatches;
}`,
    quiz: [
      {
        question:
          '¿Cuál es la complejidad temporal de acceder a un elemento por su índice en un arreglo de tamaño n?',
        options: ['O(n) - Lineal', 'O(1) - Constante', 'O(log n) - Logarítmica', 'O(n²) - Cuadrática'],
        answerIndex: 1,
        explanation:
          'Los arreglos se almacenan en bloques contiguos de memoria física. Conociendo el índice y la dirección base, la CPU calcula la posición exacta mediante aritmética de punteros en un solo ciclo de reloj O(1).',
      },
      {
        question:
          'Si un algoritmo tiene una función T(n) = 5n³ + 200n² + 9999, ¿cuál es su notación Big-O simplificada?',
        options: ['O(n³)', 'O(n²)', 'O(5n³ + 200n²)', 'O(n! - Factorial)'],
        answerIndex: 0,
        explanation:
          'En análisis asintótico se descartan los coeficientes constantes y todos los términos no dominantes. Para valores grandes de n, n³ domina absolutamente el comportamiento.',
      },
      {
        question: '¿Qué significa matemáticamente que un algoritmo sea Ω(n log n)?',
        options: [
          'Que en el peor caso nunca tardará más de n log n operaciones.',
          'Que el algoritmo requiere al menos n log n operaciones como cota inferior asintótica.',
          'Que el algoritmo siempre tarda exactamente n log n pasos en todas las ejecuciones.',
          'Que el algoritmo no escala para entradas mayores a 1,000 elementos.',
        ],
        answerIndex: 1,
        explanation:
          'La letra griega Ω (Omega) representa la cota inferior: garantiza que el costo computacional no decrecerá por debajo de una constante multiplicada por g(n).',
      },
      {
        question:
          'Si duplicamos el tamaño de entrada n de un algoritmo con complejidad O(n²), ¿cómo cambia el número de operaciones?',
        options: ['Se duplica (factor 2)', 'Se cuadruplica (factor 4)', 'Se multiplica por 8', 'Permanece constante'],
        answerIndex: 1,
        explanation:
          'Al elevar al cuadrado una entrada duplicada: (2n)² = 4n². Por tanto, duplicar n multiplica el trabajo por 4.',
      },
    ],
  },
  {
    id: 2,
    title: 'MÓDULO 2: MEMORIA FÍSICA, PUNTEROS Y ARREGLOS DINÁMICOS',
    description:
      'Estructuras contiguas en RAM. Localidad espacial en la CPU Cache, aritmética de punteros y costo amortizado.',
    items: [
      'Nivel 0: Casilleros postales numerados: el secreto del acceso O(1).',
      'Nivel Intermedio: Desplazamiento en memoria (Base Address + i * sizeof). Inserciones y eliminaciones O(n).',
      'Nivel Universitario: Memoria Caché L1/L2/L3, Cache Lines de 64 bytes y Localidad Espacial.',
      'Arreglos dinámicos (std::vector, Python List, ArrayList): Factor de crecimiento y análisis amortizado.',
      'Errores clásicos: Buffer Overflows, punteros colgantes (dangling pointers) y Memory Leaks.',
    ],
    content: `## Panorama del tema: MEMORIA FÍSICA Y ARREGLOS

El arreglo (array) es la estructura de datos más fundamental de las ciencias de la computación. Su poder radica en su representación física directa sobre la memoria RAM: una secuencia contigua e ininterrumpida de bytes.

## 🟢 Nivel 0: Intuición

Un arreglo es como un casillero postal con 10 casillas idénticas del 0 al 9. Si quieres ver qué hay en el casillero 7, caminas directamente hacia él en un instante. No necesitas abrir los casilleros 0, 1, 2... para llegar al 7.
Sin embargo, si los casilleros están llenos y deseas meter un casillero nuevo en la posición 2, tienes que empujar físicamente todas las casillas a la derecha para hacer espacio.

## 🟡 Nivel Intermedio: Aritmética de Punteros

Cuando un programa declara \`int arr[5]\`, el sistema operativo asigna una dirección base (por ejemplo \`0x1000\`).
Para acceder al elemento en el índice \`i\`, el hardware evalúa:
**Dirección(arr[i]) = DirecciónBase + (i × TamañoTipoDato)**
Si cada entero ocupa 4 bytes, \`arr[3]\` se ubica en \`0x1000 + (3 × 4) = 0x100C\`. Este cálculo se realiza en 1 ciclo de reloj, garantizando acceso **O(1)**.

## 🟣 Nivel Universitario: Localidad Espacial y Caché de CPU

Los procesadores modernos no leen datos de la RAM byte por byte: leen bloques completos de 64 bytes llamados **Líneas de Caché (Cache Lines)**.
Cuando accedes a \`arr[0]\`, el procesador carga automáticamente \`arr[0]\` hasta \`arr[15]\` en su memoria Caché L1 (latencia ~1 ns frente a ~100 ns de la RAM). Por esto, recorrer un arreglo contiguo es hasta 10 veces más rápido que recorrer nodos dispersos en memoria.

## 📈 Análisis Amortizado de Arreglos Dinámicos

Los arreglos dinámicos (como \`vector\` en C++ o \`list\` en Python) duplican su capacidad cuando se llenan. Aunque redimensionar cuesta O(n), ocurre tan rara vez que el costo promedio distribuido entre n inserciones es **O(1) amortizado**.`,
    codeSnippet: `// Implementación conceptual de un Arreglo Dinámico con Redimensionamiento
class DynamicArray<T> {
  private data: (T | undefined)[];
  private capacity: number;
  private length: number;

  constructor(initialCapacity = 2) {
    this.capacity = initialCapacity;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  public push(item: T): void {
    if (this.length === this.capacity) {
      this.resize(this.capacity * 2); // Factor de crecimiento 2x
    }
    this.data[this.length] = item;
    this.length++;
  }

  private resize(newCapacity: number): void {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
  }

  public get(index: number): T | undefined {
    if (index < 0 || index >= this.length) throw new Error("Índice fuera de límites");
    return this.data[index];
  }
}`,
    quiz: [
      {
        question: '¿Por qué acceder a arr[k] en un arreglo toma tiempo O(1)?',
        options: [
          'Porque la computadora busca el índice mediante búsqueda binaria.',
          'Porque calcula la dirección física directamente con la fórmula: base + k * sizeof(tipo).',
          'Porque los arreglos están ordenados alfabéticamente.',
          'Porque los datos se guardan en la memoria ROM del sistema.',
        ],
        answerIndex: 1,
        explanation:
          'La contigüidad física en memoria permite resolver la dirección del elemento en tiempo constante mediante una sola multiplicación y suma de enteros.',
      },
      {
        question:
          '¿Cuál es la complejidad temporal amortizada de insertar un elemento al final de un arreglo dinámico?',
        options: ['O(n) cuadrático', 'O(log n)', 'O(1) amortizado', 'O(n!)'],
        answerIndex: 2,
        explanation:
          'Aunque duplicar la capacidad del arreglo toma O(n), esto ocurre con una frecuencia geométrica decreciente. El costo promedio por cada una de las n inserciones es O(1).',
      },
    ],
  },
  {
    id: 3,
    title: 'MÓDULO 3: LISTAS ENLAZADAS (SIMPLES, DOBLES Y CIRCULARES)',
    description:
      'Estructuras no contiguas enlazadas por punteros. Flexibilidad dinámica de inserción vs pérdida de localidad espacial.',
    items: [
      'Nivel 0: Búsqueda del tesoro: cada pista contiene la dirección de la siguiente pista.',
      'Nivel Intermedio: Nodos con valores y punteros (Next/Prev). Inserción y eliminación O(1) en la cabeza.',
      'Nivel Universitario: Fragmentación del Heap, punteros de 64 bits y comparación de Cache Misses frente a arrays.',
      'Patrones de punteros: Técnica del puntero rápido y lento (Tortoise and Hare de Floyd) para detección de ciclos.',
      'Aplicación en el Kernel de Linux: Listas doblemente enlazadas intrusivas (struct list_head).',
    ],
    content: `## Panorama del tema: LISTAS ENLAZADAS

A diferencia de los arreglos, las listas enlazadas no requieren que los datos residan en posiciones contiguas de memoria. Cada elemento (denominado **Nodo**) almacena su propio dato y uno o más **punteros** que apuntan a la dirección de memoria del siguiente nodo.

## 🟢 Nivel 0: Intuición

Imagina una búsqueda del tesoro:
No sabes de antemano dónde están todas las pistas ni cuántas son. La primera pista (Head) te dice: "Ve al árbol del jardín". Al llegar al árbol, encuentras una nota con la pista y otra dirección: "Ve al sótano". La última nota dice "NULL" (fin del juego).

## 🟡 Nivel Intermedio: Operaciones y Punteros

· **Inserción al frente (Head):** O(1) tiempo. Creamos el nuevo nodo, apuntamos su \`next\` al head actual y reasignamos el head. No requiere desplazar ningún otro elemento.
· **Búsqueda por valor:** O(n) tiempo. Se debe recorrer secuencialmente nodo por nodo siguiendo los enlaces \`curr = curr.next\`.
· **Lista Doblemente Enlazada:** Cada nodo almacena punteros a \`prev\` y a \`next\`, permitiendo recorrer en ambas direcciones y eliminar un nodo en O(1) si ya se tiene su referencia directa.

## 🟣 Nivel Universitario: Análisis de Cache Misses y Memoria

Aunque en teoría las listas ofrecen inserción O(1) en cualquier punto donde se tenga el puntero, en el hardware moderno sufren de severa **penalización de memoria**:
1. **Sobrecarga de punteros:** En arquitecturas de 64 bits, cada puntero consume 8 bytes. Para almacenar un entero de 4 bytes, una lista doble gasta 4 bytes de datos + 16 bytes de punteros = 20 bytes (¡400% de sobrecarga!).
2. **Punteros dispersos en el Heap:** Cada llamada a \`malloc()\` o \`new\` puede alojar memoria en páginas distantes, provocando un fallo de caché de CPU (Cache Miss) en casi cada salto de nodo.`,
    codeSnippet: `// Lista Simplemente Enlazada con Detección de Ciclos (Algoritmo de Floyd)
class ListNode<T> {
  public val: T;
  public next: ListNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

function hasCycle<T>(head: ListNode<T> | null): boolean {
  if (!head || !head.next) return false;

  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  // Algoritmo de la Tortuga y la Liebre
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Hay un ciclo cerrado en la lista
    }
  }

  return false;
}`,
    quiz: [
      {
        question: '¿Cuál es la complejidad temporal de insertar un nuevo nodo al inicio (Head) de una lista enlazada?',
        options: ['O(1) - Constante', 'O(n) - Lineal', 'O(log n)', 'O(n²)'],
        answerIndex: 0,
        explanation:
          'Solo se requiere instanciar el nuevo nodo, apuntar su next al head actual y actualizar el puntero head. Es una operación de tiempo constante O(1).',
      },
      {
        question: '¿Qué algoritmo detecta si una lista enlazada contiene un ciclo infinito en O(n) tiempo y O(1) espacio?',
        options: [
          'Algoritmo de Dijkstra',
          'Algoritmo de la Tortuga y la Liebre (Floyd)',
          'Búsqueda Binaria',
          'Algoritmo de Kruskal',
        ],
        answerIndex: 1,
        explanation:
          'El algoritmo de punteros lento y rápido de Floyd detecta ciclos cerrados garantizando que el puntero rápido alcanzará al lento sin requerir memoria adicional.',
      },
    ],
  },
  {
    id: 4,
    title: 'MÓDULO 4: PILAS (STACKS), COLAS (QUEUES) Y DEQUES',
    description:
      'Políticas de acceso LIFO y FIFO. Estructuras de control del Sistema Operativo, evaluación de expresiones y streaming.',
    items: [
      'Nivel 0: Platos limpios (LIFO) vs Fila del supermercado (FIFO).',
      'Nivel Intermedio: Implementación con buffers circulares y listas enlazadas. Operaciones Push, Pop, Peek, Enqueue, Dequeue.',
      'Nivel Universitario: Stack Frames en la CPU, registro ESP/RSP, Buffer Overflow y el algoritmo Shunting-yard de Dijkstra.',
      'Colas de doble extremo (Deques) y su rol en algoritmos de ventana deslizante (Sliding Window Maximum).',
      'Arquitectura de sistemas: Colas de mensajería asíncrona (RabbitMQ, Kafka, SQS).',
    ],
    content: `## Panorama del tema: PILAS Y COLAS

Las Pilas y las Colas son tipos abstractos de datos (ADT) que restringen intencionalmente las posiciones donde se pueden insertar y retirar elementos, modelando procesos secuenciales del mundo real y del hardware.

## 🟢 Nivel 0: Intuición LIFO y FIFO

· **Pila (Stack - LIFO: Last-In, First-Out):** Imagina una pila de platos limpios. Solo puedes colocar un plato encima y solo puedes retirar el que está arriba. El último en llegar es el primero en ser atendido.
· **Cola (Queue - FIFO: First-In, First-Out):** Imagina la fila para entrar al cine. Quien llega primero a la fila compra su boleto primero y sale primero. El orden de llegada es sagrado.

## 🟡 Nivel Intermedio: Implementación Óptima

Tanto Pilas como Colas deben garantizar que sus operaciones fundamentales se ejecuten en tiempo estrictamente **O(1)**.
Para una Cola implementada sobre un arreglo estático, se utiliza la técnica del **Buffer Circular** con dos punteros: \`head\` y \`tail\`. Cuando \`tail\` llega al final del arreglo, se envuelve al inicio usando el operador módulo:
\`tail = (tail + 1) % capacidad\`

## 🟣 Nivel Universitario: El Call Stack del Sistema Operativo

Cada hilo de ejecución en tu computadora posee un **Call Stack (Pila de Llamadas)** reservado en memoria.
Cuando una función invoca a otra, la CPU crea un **Marco de Activación (Stack Frame)** que almacena:
1. Dirección de retorno de la instrucción.
2. Parámetros de la función.
3. Variables locales.
El puntero de pila (registro \`RSP\` en x86-64) se decrementa al hacer \`push\` y se incrementa al hacer \`pop\`. Si una función recursiva no tiene caso base, la pila satura su límite asignado (~1 MB a 8 MB), provocando el temido **Stack Overflow Error**.`,
    codeSnippet: `// Implementación de una Cola Circular Eficiente O(1)
class CircularQueue<T> {
  private buffer: (T | undefined)[];
  private head = 0;
  private tail = 0;
  private size = 0;
  private capacity: number;

  constructor(capacity = 5) {
    this.capacity = capacity;
    this.buffer = new Array(capacity);
  }

  public enqueue(item: T): boolean {
    if (this.size === this.capacity) {
      throw new Error("Queue Overflow: Buffer saturado");
    }
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity; // Envoltura circular
    this.size++;
    return true;
  }

  public dequeue(): T | undefined {
    if (this.size === 0) return undefined;
    const item = this.buffer[this.head];
    this.buffer[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return item;
  }
}`,
    quiz: [
      {
        question: '¿Qué política de acceso rige el funcionamiento del Call Stack de ejecución de un programa?',
        options: ['FIFO (First-In, First-Out)', 'LIFO (Last-In, First-Out)', 'Acceso aleatorio directo', 'Round Robin'],
        answerIndex: 1,
        explanation:
          'Las funciones operan bajo LIFO: la última función llamada debe terminar y desapilar su Stack Frame antes de que la función que la llamó pueda continuar.',
      },
      {
        question: '¿Cómo evita un buffer circular que una cola implementada en un arreglo desplace elementos en O(n)?',
        options: [
          'Duplicando el arreglo en cada dequeue.',
          'Usando aritmética modular: (index + 1) % capacidad para reutilizar los casilleros liberados al inicio.',
          'Ordenando el arreglo alfabéticamente.',
          'Eliminando los punteros de memoria.',
        ],
        answerIndex: 1,
        explanation:
          'La aritmética modular permite avanzar los punteros de frente y final en un anillo continuo de memoria sin necesidad de desplazar los datos restantes.',
      },
    ],
  },
  {
    id: 5,
    title: 'MÓDULO 5: TABLAS HASH, FUNCIONES HASH Y COLISIONES',
    description:
      'El secreto del acceso en tiempo constante promedio O(1). Funciones criptográficas vs no criptográficas y ataques HashDoS.',
    items: [
      'Nivel 0: El archivador alfabético de la biblioteca.',
      'Nivel Intermedio: Factor de carga (α = n/m), rehashing dinámico y resolución de colisiones por Chaining vs Sondeo Lineal.',
      'Nivel Universitario: Teorema de Hashing Universal, clustering primario y secundario, y defensas contra ataques HashDoS (SipHash).',
      'Implementación de Map / Set en Python, JavaScript (V8 Hidden Classes) y C++ (std::unordered_map).',
      'Trade-offs: Por qué las tablas hash no mantienen orden ni soportan búsquedas por rango eficientes.',
    ],
    content: `## Panorama del tema: TABLAS HASH

La Tabla Hash es considerada una de las mayores invenciones prácticas de las ciencias de la computación. Permite almacenar y consultar pares clave-valor en **tiempo constante promedio O(1)**, transformando búsquedas que tomarían miles de operaciones en un solo cálculo matemático.

## 🟢 Nivel 0: Intuición

Imagina un perchero en un restaurante con 100 ganchos numerados del 0 al 99.
Cuando entregas tu abrigo con tu nombre "CARLOS", el recepcionista aplica una fórmula simple: suma las letras de tu nombre y obtiene el número 42. Cuelga tu abrigo en el gancho 42. Cuando vuelves y dices tu nombre, vuelve a calcular la fórmula y va directamente al gancho 42 en 1 segundo.

## 🟡 Nivel Intermedio: Funciones Hash y Colisiones

Una **Función Hash** toma una clave arbitraria (un string, un objeto o un archivo) y produce un índice entero dentro del rango de los casilleros (buckets):
\`índice = hash(clave) % capacidad\`

### Resolución de Colisiones:
Cuando dos claves distintas producen el mismo índice:
1. **Encadenamiento Separado (Chaining):** Cada bucket contiene una lista enlazada con todos los elementos colisionados.
2. **Direccionamiento Abierto (Open Addressing):** Si el casillero está ocupado, se busca el siguiente casillero contiguo disponible (Sondeo Lineal: \`i + 1, i + 2...\`).

## 🟣 Nivel Universitario: Clustering y Seguridad HashDoS

El **Factor de Carga (Load Factor α)** se define como \`α = n / m\` (elementos / casilleros). Cuando α supera 0.75, la probabilidad de colisiones se dispara, causando **Clustering Primario** (bloques contiguos que degradan la búsqueda a O(n)). Los motores modernos redimensionan la tabla al doble cuando α > 0.7.

### Ataques HashDoS:
Si un atacante descubre la función de hash que usa tu servidor web, puede enviar miles de peticiones HTTP con claves cuidadosamente calculadas para que todas caigan en el mismo bucket. Esto degrada la tabla a una lista enlazada O(n) y satura el 100% de la CPU del servidor. Por ello, lenguajes modernos (Python, Rust, Go) utilizan algoritmos con semillas aleatorias como **SipHash**.`,
    codeSnippet: `// Implementación conceptual de una Tabla Hash con Chaining O(1)
class SimpleHashTable<V> {
  private buckets: Array<Array<{ key: string; value: V }>>;
  private capacity: number;
  private size = 0;

  constructor(capacity = 8) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
  }

  private hash(key: string): number {
    let hashVal = 0;
    for (let i = 0; i < key.length; i++) {
      hashVal = (hashVal * 31 + key.charCodeAt(i)) % this.capacity;
    }
    return hashVal;
  }

  public set(key: string, value: V): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];

    for (const item of bucket) {
      if (item.key === key) {
        item.value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size++;
  }

  public get(key: string): V | undefined {
    const idx = this.hash(key);
    const item = this.buckets[idx].find((el) => el.key === key);
    return item ? item.value : undefined;
  }
}`,
    quiz: [
      {
        question: '¿Cuál es la complejidad temporal en el peor caso posible de una búsqueda en una tabla hash con colisiones severas?',
        options: ['O(1) Constante', 'O(log n)', 'O(n) Lineal', 'O(n!)'],
        answerIndex: 2,
        explanation:
          'Si todas las claves colisionan en el mismo bucket, la tabla hash degenera en una lista enlazada y la búsqueda se vuelve O(n).',
      },
      {
        question: '¿Qué es el Factor de Carga (Load Factor α) de una tabla hash?',
        options: [
          'La cantidad de memoria RAM libre en el servidor.',
          'La relación entre la cantidad de elementos almacenados y la capacidad total de casilleros (α = n / m).',
          'La velocidad de reloj de la CPU al computar el hash.',
          'El número de hilos concurrentes que acceden a la tabla.',
        ],
        answerIndex: 1,
        explanation:
          'El factor de carga mide qué tan llena está la tabla. Al superar típicamente 0.7 o 0.75, se dispara un proceso de rehashing para duplicar la capacidad.',
      },
    ],
  },
  {
    id: 6,
    title: 'MÓDULO 6: RECURSIÓN, BACKTRACKING Y TEOREMA MAESTRO',
    description:
      'El arte de resolver problemas mediante autorreferencia. Análisis de llamadas recursivas y resolución de ecuaciones de recurrencia.',
    items: [
      'Nivel 0: Muñecas rusas (Matrioshkas) y espejos infinitos. La anatomía sagrada del caso base.',
      'Nivel Intermedio: Árbol de recursión, profundidad de pila y optimización de recursión de cola (Tail Call Optimization).',
      'Nivel Universitario: Ecuaciones de recurrencia T(n) = aT(n/b) + f(n) y las 3 ramas del Teorema Maestro.',
      'Algoritmos de Backtracking (Vuelta Atrás): N-Reinas, Sudoku y generación de combinaciones.',
      'Riesgos en producción: Recursión no acotada y agotamiento de recursos del hilo.',
    ],
    content: `## Panorama del tema: RECURSIÓN Y TEOREMA MAESTRO

La recursión es un paradigma fundamental donde una función se resuelve invocándose a sí misma con una versión más pequeña del mismo problema, hasta alcanzar un **caso base** trivial que detiene la ejecución.

## 🟢 Nivel 0: Intuición

Imagina que estás en una fila oscura en el cine y quieres saber en qué número de fila estás sentado.
No puedes ver hacia adelante. Le preguntas al de adelante: "¿En qué fila estás?". Esa persona tampoco sabe, así que le pregunta al de adelante, y así sucesivamente.
Cuando la pregunta llega a la primera persona (Fila 1 - Caso Base), responde: "Estoy en la fila 1". La segunda persona suma 1 y dice: "Estoy en la fila 2", y la respuesta retrocede por la fila hasta que tú sumas 1 y sabes tu posición exacta.

## 🟡 Nivel Intermedio: El Árbol de Recursión

Cada invocación crea un marco en la pila. Si llamamos a \`fibonacci(4)\`:
fib(4) divide en fib(3) y fib(2).
fib(3) divide en fib(2) y fib(1).
Esto genera un árbol binario de llamadas con profundidad n, consumiendo **O(n)** espacio de memoria en la pila y **O(2ⁿ)** operaciones de tiempo si no se memorizan resultados.

## 🟣 Nivel Universitario: El Teorema Maestro (Master Theorem)

Para algoritmos que dividen el problema en subproblemas idénticos (como Merge Sort o Búsqueda Binaria), su tiempo satisface la recurrencia:
**T(n) = a · T(n/b) + f(n)**
Donde:
· **a ≥ 1:** Número de subproblemas recursivos generados.
· **b > 1:** Factor por el cual se divide el tamaño de entrada.
· **f(n):** Costo de dividir y combinar los resultados fuera de la recursión.

Se evalúa el exponente crítico **c_crit = log_b(a)**:
1. **Caso 1:** Si f(n) crecientemente es menor que n^(log_b(a)) → T(n) = Θ(n^(log_b(a))).
2. **Caso 2:** Si f(n) = Θ(n^(log_b(a))) → T(n) = Θ(n^(log_b(a)) · log n). (Ejemplo: Merge Sort con a=2, b=2 → Θ(n log n)).
3. **Caso 3:** Si f(n) crecientemente supera a n^(log_b(a)) satisfaciendo la condición de regularidad → T(n) = Θ(f(n)).`,
    codeSnippet: `// Backtracking: Generador de Permutaciones de un Arreglo
function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(currentPath: number[], remaining: number[]) {
    // Caso Base: Si no quedan elementos, registramos la solución completa
    if (remaining.length === 0) {
      result.push([...currentPath]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const chosen = remaining[i];
      // Avanzar: Tomar decisión
      currentPath.push(chosen);
      const nextRemaining = remaining.filter((_, idx) => idx !== i);

      // Paso Recursivo
      backtrack(currentPath, nextRemaining);

      // Deshacer decisión (Backtrack) para probar la siguiente rama
      currentPath.pop();
    }
  }

  backtrack([], nums);
  return result;
}`,
    quiz: [
      {
        question: '¿Qué ocurre obligatoriamente si una función recursiva carece de un Caso Base?',
        options: [
          'El compilador optimiza el código automáticamente a O(1).',
          'La función entra en recursión infinita y colapsa con un Stack Overflow Error.',
          'El programa se ejecuta en tiempo logarítmico.',
          'La memoria Heap se fragmenta pero el programa continúa.',
        ],
        answerIndex: 1,
        explanation:
          'Sin un caso base que frene la recursión, los Stack Frames se siguen apilando en la memoria del hilo hasta agotar el límite físico asignado por el sistema operativo.',
      },
      {
        question:
          'Según el Teorema Maestro, ¿cuál es la complejidad de una recurrencia T(n) = 2T(n/2) + O(n)?',
        options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(2ⁿ)'],
        answerIndex: 2,
        explanation:
          'Aquí a=2, b=2. Como log₂(2) = 1, y f(n) = n = n¹, caemos en el Caso 2 del Teorema Maestro: T(n) = Θ(n^(log_b a) * log n) = Θ(n log n). Es la recurrencia exacta de Merge Sort.',
      },
    ],
  },
  {
    id: 7,
    title: 'MÓDULO 7: ORDENAMIENTO ELEMENTAL (BUBBLE, SELECTION, INSERTION)',
    description:
      'Algoritmos cuadráticos O(n²), estabilidad y análisis de inversiones. Por qué Insertion Sort es la base de Timsort.',
    items: [
      'Nivel 0: Ordenar una mano de cartas de naipes de menor a mayor.',
      'Nivel Intermedio: Bubble Sort (burbujeo), Selection Sort (búsqueda del mínimo), Insertion Sort (desplazamiento in-place).',
      'Nivel Universitario: Estabilidad de ordenamiento, número de inversiones de un arreglo y demostración por invariante de ciclo.',
      'Optimización híbrida: Por qué Insertion Sort supera a Quicksort para N ≤ 16 en bibliotecas de producción.',
      'Complejidad espacial: Ordenamiento in-place O(1) de memoria auxiliar.',
    ],
    content: `## Panorama del tema: ORDENAMIENTO ELEMENTAL

El ordenamiento de datos es el problema fundacional de la computación. Estudiar los algoritmos elementales permite comprender la noción de **invariantes de ciclo**, **estabilidad** y el costo de comparar e intercambiar elementos en memoria.

## 🟢 Nivel 0: Intuición

· **Bubble Sort:** Como burbujas de gas en un refresco: los números más grandes y pesados flotan hacia el extremo derecho con cada pasada de comparaciones adyacentes.
· **Selection Sort:** Buscas visualmente el número más pequeño de toda la mesa y lo colocas en el primer puesto. Luego buscas el más pequeño de los restantes y lo pones en el segundo puesto.
· **Insertion Sort:** Es exactamente cómo ordenas las cartas en tu mano al jugar póker: tomas una carta nueva y la insertas en el lugar correcto desplazando las cartas mayores a la derecha.

## 🟡 Nivel Intermedio: La noción crítica de Estabilidad

Un algoritmo de ordenamiento es **Estable** si preserva el orden relativo original de elementos que poseen claves idénticas.
Por ejemplo, si ordenas una lista de alumnos ya ordenada por nombre, al reordenarla por calificación:
· Un algoritmo estable mantendrá a los alumnos con igual nota en su orden alfabético original.
· Uno inestable mezclará sus posiciones.
**Insertion Sort y Bubble Sort son estables; Selection Sort NO lo es.**

## 🟣 Nivel Universitario: Inversiones e Insertion Sort en Producción

El número de **inversiones** de un arreglo es la cantidad de pares (i, j) tales que i < j pero arr[i] > arr[j].
En un arreglo casi ordenado con k inversiones, **Insertion Sort se ejecuta en tiempo O(n + k)**. Si k es pequeño, su tiempo es prácticamente **O(n) lineal**, con cero sobrecarga de llamadas a funciones o memoria. Por esta razón, algoritmos de calibre industrial como **Timsort** (usado en Python y Java) y **Introsort** (C++) conmutan a Insertion Sort cuando los sub-arreglos tienen 16 o menos elementos.`,
    codeSnippet: `// Insertion Sort con Demostración de Invariante de Ciclo
function insertionSort(arr: number[]): number[] {
  const a = [...arr];
  const n = a.length;

  for (let i = 1; i < n; i++) {
    const current = a[i];
    let j = i - 1;

    // Desplazar elementos de a[0..i-1] que sean mayores que current
    while (j >= 0 && a[j] > current) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = current;
  }

  return a;
}`,
    quiz: [
      {
        question: '¿Qué significa que un algoritmo de ordenamiento sea ESTABLE?',
        options: [
          'Que nunca produce errores de desbordamiento de memoria.',
          'Que preserva el orden relativo de elementos que tienen valores de clave idénticos.',
          'Que su tiempo de ejecución siempre es exactamente O(n log n).',
          'Que funciona en hardware sin memoria caché.',
        ],
        answerIndex: 1,
        explanation:
          'La estabilidad garantiza que si dos elementos son equivalentes según el criterio de comparación, su ordenamiento relativo previo a la ejecución se mantiene inalterado.',
      },
      {
        question: '¿Por qué Timsort (el algoritmo de ordenamiento nativo de Python y Java) utiliza Insertion Sort para sub-arreglos pequeños?',
        options: [
          'Porque Insertion Sort es cuadrático O(n²).',
          'Porque para N ≤ 16 tiene una constante de CPU mínima y se ejecuta en tiempo casi lineal O(n) sobre datos con pocas inversiones.',
          'Porque no requiere procesador multinúcleo.',
          'Porque fue inventado por Alan Turing.',
        ],
        answerIndex: 1,
        explanation:
          'Para arreglos de tamaño pequeño, las constantes bajas de Insertion Sort y su excelente aprovechamiento de la caché de CPU superan a Quicksort y Mergesort.',
      },
    ],
  },
  {
    id: 8,
    title: 'MÓDULO 8: ORDENAMIENTO AVANZADO (MERGE SORT, QUICK SORT, TIMSORT)',
    description:
      'El límite inferior matemático Ω(n log n). Particionado Lomuto vs Hoare, Introsort y ordenamiento externo.',
    items: [
      'Nivel 0: Divide y vencerás: ordenar dos pilas de 5 cartas es exponencialmente más fácil que una de 100.',
      'Nivel Intermedio: Merge Sort (fusión garantizada O(n log n)) vs Quicksort (particionado in-place).',
      'Nivel Universitario: Prueba formal del límite inferior por árboles de decisión Ω(n log n).',
      'Peor caso de Quicksort O(n²) y mitigación con pivote mediana-de-tres y algoritmo híbrido Introsort.',
      'Ordenamiento externo para conjuntos de datos que no caben en memoria RAM (Discos SSD/HDD).',
    ],
    content: `## Panorama del tema: ORDENAMIENTO AVANZADO

Los algoritmos avanzados de ordenamiento aprovechan el paradigma **Divide y Vencerás** para romper la barrera del tiempo cuadrático O(n²), alcanzando la barrera matemática óptima de **O(n log n)**.

## 🟢 Nivel 0: Intuición

Imagina que tienes una baraja desordenada de 100 cartas:
En lugar de ordenarla completa, la divides a la mitad (50 y 50), y vuelves a dividir hasta tener cartas individuales. Luego comparas los pares y los unes ordenados en orden ascendente (Merge). Como cada fusión solo compara las dos cartas superiores de cada mazo, el trabajo es sumamente rápido.

## 🟡 Nivel Intermedio: Quicksort vs Merge Sort

· **Merge Sort:**
  Garantiza **O(n log n)** en el peor, mejor y caso promedio. Sin embargo, requiere **O(n)** de memoria auxiliar para alojar los arreglos temporales durante la fase de fusión.
· **Quicksort:**
  Elige un **Pivote** y particiona el arreglo: todos los menores van a la izquierda y los mayores a la derecha. Es **in-place** (O(log n) memoria de pila). En la práctica es más rápido que Merge Sort debido a una excelente localidad de caché.

## 🟣 Nivel Universitario: El Límite Inferior Ω(n log n)

¿Es posible inventar un algoritmo de ordenamiento por comparación que sea O(n)?
**La respuesta matemática es NO.**
Cualquier algoritmo basado en comparaciones puede representarse como un **Árbol de Decisión Binario**. Para ordenar n elementos, existen n! permutaciones posibles como hojas del árbol. La altura h del árbol satisface:
\`2^h ≥ n! ⟹ h ≥ log₂(n!) ≈ n log₂ n - n log₂ e\`
Por la fórmula de Stirling, se demuestra que **todo algoritmo de ordenamiento por comparación requiere al menos Ω(n log n) operaciones**. (Algoritmos como Counting Sort o Radix Sort alcanzan O(n) únicamente porque NO se basan en comparaciones).`,
    codeSnippet: `// Quicksort con Particionado In-Place Hoare
function quickSortHoare(arr: number[], low = 0, high = arr.length - 1): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSortHoare(arr, low, pivotIndex);
    quickSortHoare(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[Math.floor((low + high) / 2)];
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do { i++; } while (arr[i] < pivot);
    do { j--; } while (arr[j] > pivot);

    if (i >= j) return j;

    // Swap in-place
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}`,
    quiz: [
      {
        question: '¿Cuál es la desventaja principal de Merge Sort en comparación con Quick Sort?',
        options: [
          'Su complejidad en el peor caso es O(n²).',
          'Requiere O(n) de memoria auxiliar para realizar el proceso de fusión.',
          'No puede ordenar strings ni caracteres.',
          'Es un algoritmo inestable.',
        ],
        answerIndex: 1,
        explanation:
          'Merge Sort necesita un buffer temporal de tamaño proporcional a la entrada (O(n)) para intercalar los elementos ordenados, mientras que Quicksort ordena in-place.',
      },
      {
        question: '¿Qué demuestra el teorema del Árbol de Decisión sobre el ordenamiento por comparación?',
        options: [
          'Que cualquier algoritmo de ordenamiento por comparación requiere al menos Ω(n log n) operaciones.',
          'Que el hardware cuántico ordenará en tiempo constante O(1).',
          'Que los arreglos no deben superar 100,000 elementos.',
          'Que Quick Sort siempre es más lento que Bubble Sort.',
        ],
        answerIndex: 0,
        explanation:
          'Dado que hay n! permutaciones posibles y cada comparación binaria solo bifurca el espacio a la mitad, la altura mínima del árbol de decisión es log₂(n!) = Ω(n log n).',
      },
    ],
  },
  {
    id: 9,
    title: 'MÓDULO 9: ALGORITMOS DE BÚSQUEDA (LINEAL, BINARIA, INTERPOLACIÓN)',
    description:
      'Búsqueda en espacios discretos y continuos. Manejo estricto de overflows en índices y búsqueda por interpolación O(log log n).',
    items: [
      'Nivel 0: Adivinar un número entre 1 y 100 diciendo sólo "más alto" o "más bajo".',
      'Nivel Intermedio: Búsqueda Binaria O(log n). El bug legendario de Java: mid = low + (high - low) / 2.',
      'Nivel Universitario: Búsqueda Binaria sobre el espacio de respuestas (Monotonic Functions / Binary Search on Answer).',
      'Búsqueda por Interpolación O(log log n) para datos distribuidos uniformemente.',
      'Búsqueda Exponencial para arreglos de tamaño ilimitado o flujos infinitos.',
    ],
    content: `## Panorama del tema: ALGORITMOS DE BÚSQUEDA

Localizar un dato específico en una colección es una de las tareas más frecuentes en la infraestructura de software. Mientras que la búsqueda lineal recorre elemento por elemento en O(n), la búsqueda binaria explota el orden de los datos para alcanzar una velocidad logarítmica **O(log n)**.

## 🟢 Nivel 0: Intuición

Piensa en el juego de adivinar un número del 1 al 100:
Si preguntas: "¿Es el 1? ¿El 2? ¿El 3?", estás haciendo Búsqueda Lineal.
Si dices: "¿Es el 50?", y te responden "Menor", sabes con total certeza que el número está entre 1 y 49. Acabas de eliminar el 50% de las posibilidades en 1 segundo. En máximo 7 preguntas habrás adivinado cualquier número entre 1 y 100.

## 🟡 Nivel Intermedio: El Bug Histórico del Overflow

Durante más de 20 años, implementaciones de búsqueda binaria en bibliotecas estándar (incluyendo Java SDK) contenían este error:
\`int mid = (low + high) / 2;\`
Si \`low\` y \`high\` son enteros grandes cuya suma excede 2,147,483,647 (límite de enteros de 32 bits con signo), la suma produce un **Integer Overflow** y se vuelve negativa, provocando una excepción en memoria.
La solución matemáticamente equivalente y segura es:
**mid = low + (high - low) / 2**

## 🟣 Nivel Universitario: Búsqueda sobre el Espacio de Respuestas

En problemas avanzados de optimización (LeetcCode Hard / Codeforces), la búsqueda binaria no se aplica sobre un arreglo, sino sobre una función matemática monótona **P(x) ∈ {true, false}**:
"¿Es posible transportar toda la carga en K días a velocidad V?"
Si con velocidad V es posible, con V+1 también lo será. Esto permite encontrar el valor mínimo óptimo en tiempo logarítmico **O(log(RangoMaximo) · CostoVerificacion)**.`,
    codeSnippet: `// Búsqueda Binaria Segura contra Overflows
function binarySearchSafe(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Cálculo seguro de punto medio
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid; // Índice encontrado
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Objetivo no presente
}`,
    quiz: [
      {
        question: '¿Por qué se prefiere calcular mid = low + (high - low) / 2 en lugar de (low + high) / 2?',
        options: [
          'Porque se ejecuta más rápido en hardware ARM.',
          'Para prevenir el desbordamiento aritmético de enteros (Integer Overflow) cuando low + high supera el valor máximo de 32 o 64 bits.',
          'Porque redondea automáticamente hacia números pares.',
          'Porque permite buscar en arreglos no ordenados.',
        ],
        answerIndex: 1,
        explanation:
          'En lenguajes de tipado estático con enteros de ancho fijo, la suma de dos enteros grandes puede desbordar el rango máximo. Restar previene que el cálculo intermedio supere el límite.',
      },
      {
        question: '¿Qué condición matemática es indispensable para poder aplicar Búsqueda Binaria tradicional?',
        options: [
          'Que el arreglo tenga un tamaño que sea potencia de 2.',
          'Que la colección de datos esté estrictamente ordenada respecto al criterio de búsqueda.',
          'Que no existan números negativos.',
          'Que la memoria RAM esté desfragmentada.',
        ],
        answerIndex: 1,
        explanation:
          'La búsqueda binaria depende de la monotonicidad: descartar la mitad izquierda o derecha solo es válido si se sabe con certeza que todos los elementos en ese tramo son menores o mayores.',
      },
    ],
  },
  {
    id: 10,
    title: 'MÓDULO 10: ÁRBOLES BINARIOS Y ÁRBOLES DE BÚSQUEDA (BST)',
    description:
      'Jerarquías no lineales. Recorridos In-order, Pre-order y Post-order, inserción, eliminación y degradación asintótica.',
    items: [
      'Nivel 0: El árbol genealógico invertido: raíz arriba, ramas en medio y hojas abajo.',
      'Nivel Intermedio: Invariante del BST: Subárbol Izquierdo < Nodo < Subárbol Derecho. Búsqueda y eliminación con sucesor in-order.',
      'Nivel Universitario: Recorridos en profundidad (DFS) vs por niveles (BFS). El problema de la degeneración a lista enlazada O(n).',
      'Serialización y deserialización de árboles mediante Pre-order y marcadores nulos.',
      'Aplicaciones: Parsers de lenguajes de programación (Árboles de Sintaxis Abstracta - AST).',
    ],
    content: `## Panorama del tema: ÁRBOLES BINARIOS Y BST

Los árboles son estructuras de datos jerárquicas no lineales donde cada nodo tiene a lo sumo dos hijos (izquierdo y derecho). Un **Árbol Binario de Búsqueda (BST)** impone una regla de ordenamiento estricta que permite buscar elementos en tiempo proporcional a la altura del árbol.

## 🟢 Nivel 0: Intuición

Un BST es como una serie de bifurcaciones en un camino:
Llegas a la entrada (la Raíz). Si buscas un número menor que la raíz, tomas la izquierda; si buscas uno mayor, tomas la derecha. En cada cruce descartas ramas enteras de posibilidades.

## 🟡 Nivel Intermedio: Recorridos Canónicos

Los tres recorridos fundamentales en profundidad (DFS) se definen por cuándo se visita la raíz:
1. **In-Order (Izq, Raíz, Der):** ¡Produce los valores del BST ordenados de menor a mayor!
2. **Pre-Order (Raíz, Izq, Der):** Útil para clonar o serializar la estructura física del árbol.
3. **Post-Order (Izq, Der, Raíz):** Indispensable para borrar nodos de abajo hacia arriba sin dejar punteros colgantes o para evaluar expresiones matemáticas.

## 🟣 Nivel Universitario: La Amenaza de la Degeneración

La altura h de un BST perfectamente balanceado con n nodos es **h = ⌊log₂ n⌋**, garantizando operaciones en **O(log n)**.
Sin embargo, si insertas elementos ya ordenados de forma ascendente: \`[1, 2, 3, 4, 5]\`, cada nuevo nodo se inserta a la derecha del anterior. El árbol degenera en una **lista enlazada** con altura **h = n**, colapsando la complejidad de búsqueda a **O(n) lineal**.
Esta debilidad motivó el diseño de los **Árboles Auto-balanceados** (AVL y Rojo-Negro).`,
    codeSnippet: `// Clase Nodo de BST con Recorrido In-Order Generador
class TreeNode {
  public val: number;
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function inOrderValues(root: TreeNode | null, result: number[] = []): number[] {
  if (root === null) return result;

  inOrderValues(root.left, result);  // 1. Subárbol Izquierdo
  result.push(root.val);            // 2. Visitar Raíz
  inOrderValues(root.right, result); // 3. Subárbol Derecho

  return result;
}`,
    quiz: [
      {
        question: '¿Qué tipo de recorrido sobre un Árbol Binario de Búsqueda (BST) devuelve sus elementos en orden ascendente?',
        options: ['Pre-Order', 'In-Order', 'Post-Order', 'Level-Order (BFS)'],
        answerIndex: 1,
        explanation:
          'El recorrido In-Order visita primero el subárbol izquierdo (menores), luego el nodo raíz, y finalmente el subárbol derecho (mayores), produciendo una secuencia estrictamente ordenada.',
      },
      {
        question: '¿Cuál es la complejidad temporal de búsqueda en el peor caso posible en un BST sin balanceo automático?',
        options: ['O(log n)', 'O(1)', 'O(n) - Lineal', 'O(n!)'],
        answerIndex: 2,
        explanation:
          'Si los elementos se insertan en orden secuencial, el árbol degenera en una línea recta (lista enlazada) de altura n, haciendo que la búsqueda requiera O(n) operaciones.',
      },
    ],
  },
  {
    id: 11,
    title: 'MÓDULO 11: ÁRBOLES AUTO-BALANCEADOS (AVL Y ROJO-NEGRO)',
    description:
      'Garantía estricta de O(log n). Rotaciones simples y dobles (LL, RR, LR, RL) e invariantes de Red-Black Trees en C++ y Java.',
    items: [
      'Nivel 0: La balanza de dos platillos: cómo mantenerse siempre equilibrado sin importar el peso.',
      'Nivel Intermedio: Árboles AVL y el Factor de Equilibrio (Balance Factor = h_izq - h_der ∈ {-1, 0, 1}). Rotaciones LL, RR, LR, RL.',
      'Nivel Universitario: Reglas de Árboles Rojo-Negro: raíz negra, sin dos rojos consecutivos, misma altura negra (Black-Height).',
      'Comparativa de ingeniería: ¿Por qué std::map de C++ y TreeMap de Java usan Red-Black en vez de AVL?',
      'Rotaciones de punteros in-place en O(1) tiempo.',
    ],
    content: `## Panorama del tema: ÁRBOLES AUTO-BALANCEADOS

Para evitar que un BST degenere en una lista lineal O(n), los árboles auto-balanceados aplican operaciones mecánicas de reestructuración llamadas **Rotaciones** cada vez que una inserción o eliminación rompe el equilibrio de alturas.

## 🟢 Nivel 0: Intuición

Imagina una balanza donde cuelgas adornos. Si cuelgas tres adornos seguidos en el lado derecho, la balanza se inclina peligrosamente. Para no caerse, un mecanismo pivota el adorno del medio hacia arriba, dejando un adorno a la izquierda y otro a la derecha, restaurando el balance horizontal perfecto.

## 🟡 Nivel Intermedio: Árboles AVL y Rotaciones

En un árbol AVL, cada nodo mantiene un **Factor de Equilibrio (Balance Factor)**:
**FB = Altura(SubárbolIzquierdo) - Altura(SubárbolDerecho)**
El invariante exige que FB pertenezca al conjunto **{-1, 0, 1}**. Si tras una inserción FB se vuelve 2 o -2, se ejecuta una de cuatro rotaciones en tiempo O(1):
1. **Rotación Simple Derecha (LL):** Desequilibrio en el hijo izquierdo del nodo izquierdo.
2. **Rotación Simple Izquierda (RR):** Desequilibrio en el hijo derecho del nodo derecho.
3. **Rotación Doble Izquierda-Derecha (LR):** Rotación izquierda en el hijo, seguida de rotación derecha en la raíz.
4. **Rotación Doble Derecha-Izquierda (RL):** Rotación derecha en el hijo, seguida de rotación izquierda en la raíz.

## 🟣 Nivel Universitario: Árboles Rojo-Negro (Red-Black Trees)

Mientras que los árboles AVL son rígidamente balanceados (ideales para bases de datos con muchas lecturas y pocas escrituras), los **Árboles Rojo-Negro** son ligeramente más flexibles (altura máxima ≤ 2 log₂(n + 1)), lo que permite realizar inserciones y eliminaciones con significativamente menos rotaciones.

### Invariantes de un Árbol Rojo-Negro:
1. Todo nodo es o bien **Rojo** o bien **Negro**.
2. La raíz siempre es **Negra**.
3. Las hojas nulas (\`NIL\`) son consideradas **Negras**.
4. Si un nodo es Rojo, sus dos hijos deben ser **Negros** (nunca dos rojos consecutivos).
5. Todo camino desde un nodo hasta cualquiera de sus hojas descendientes contiene el **mismo número exacto de nodos negros (Black-Height)**.`,
    codeSnippet: `// Rotación Simple a la Derecha (LL) en O(1) tiempo
function rotateRight(y: TreeNode): TreeNode {
  /*
        y                x
       / \              / \
      x   T3   --->    T1  y
     / \                  / \
    T1  T2               T2 T3
  */
  const x = y.left!;
  const T2 = x.right;

  // Reasignar punteros
  x.right = y;
  y.left = T2;

  return x; // Nueva raíz del subárbol
}`,
    quiz: [
      {
        question: '¿Cuál es el rango permitido del Factor de Equilibrio (Balance Factor) en un nodo de un árbol AVL?',
        options: ['FB = 0 únicamente', 'FB ∈ {-1, 0, 1}', 'FB ∈ {-2, 2}', 'FB ≤ log n'],
        answerIndex: 1,
        explanation:
          'El invariante de los árboles AVL exige que la diferencia de alturas entre el subárbol izquierdo y derecho nunca exceda en valor absoluto 1.',
      },
      {
        question: '¿Por qué la biblioteca estándar de C++ (std::map) utiliza Árboles Rojo-Negro en lugar de Árboles AVL?',
        options: [
          'Porque los árboles AVL no garantizan O(log n).',
          'Porque los árboles Rojo-Negro requieren menos rotaciones mecánicas en inserciones y eliminaciones frecuentes.',
          'Porque C++ no admite punteros dobles.',
          'Porque los árboles Rojo-Negro ocupan la mitad de memoria RAM.',
        ],
        answerIndex: 1,
        explanation:
          'Los árboles Rojo-Negro permiten una holgura de balance ligeramente mayor, lo que reduce drásticamente el costo amortizado de rebalanceo durante escrituras continuas.',
      },
    ],
  },
  {
    id: 12,
    title: 'MÓDULO 12: MONTÍCULOS (HEAPS), COLAS DE PRIORIDAD Y HEAPSORT',
    description:
      'Estructuras arborescentes almacenadas en arreglos contiguos. Sift-up, Sift-down, construcción en tiempo lineal O(n) y Heapsort.',
    items: [
      'Nivel 0: La sala de urgencias del hospital: la prioridad médica supera el orden de llegada.',
      'Nivel Intermedio: Max-Heap y Min-Heap. Mapeo implícito en un arreglo sin punteros: padre = ⌊(i-1)/2⌋, hijos = 2i+1, 2i+2.',
      'Nivel Universitario: Construcción del heap en tiempo lineal O(n) (Build Heap bottom-up) y Heapsort O(n log n) in-place.',
      'Implementación de colas de prioridad para el algoritmo de Dijkstra y planificadores de CPU del sistema operativo.',
      'Extracción del extremo (pop) e inserción (push) en O(log n).',
    ],
    content: `## Panorama del tema: MONTÍCULOS Y HEAPSORT

Un **Montículo Binario (Binary Heap)** es un árbol binario casi completo que satisface la **Propiedad de Heap**: en un Max-Heap, la clave de cada nodo es mayor o igual que la de sus hijos, garantizando que el elemento máximo siempre se encuentra en la raíz en **O(1)**.

## 🟢 Nivel 0: Intuición

Imagina una sala de emergencias:
Llegan pacientes a distintas horas, pero no son atendidos por orden de llegada (eso sería una cola FIFO). Quien sufre un ataque cardíaco tiene prioridad máxima sobre alguien con dolor de cabeza. El paciente más grave siempre pasa de primero al consultorio.

## 🟡 Nivel Intermedio: Mapeo Perfecto en Arreglos

Lo fascinante de los Heaps es que **NO requieren punteros ni nodos enlazados**. Como el árbol es completo (se llena nivel por nivel de izquierda a derecha), se almacena en un simple arreglo continuo:
· **Elemento Raíz:** \`arr[0]\`
· **Padre del nodo i:** \`Math.floor((i - 1) / 2)\`
· **Hijo Izquierdo:** \`2 * i + 1\`
· **Hijo Derecho:** \`2 * i + 2\`

## 🟣 Nivel Universitario: Construcción en Tiempo Lineal O(n)

Para convertir un arreglo desordenado en un Heap, uno podría pensar que insertar n elementos toma O(n log n).
Sin embargo, el algoritmo **Build-Heap** de Floyd aplica \`sift-down\` de abajo hacia arriba comenzando en el último nodo no hoja \`⌊n/2⌋ - 1\`.
La suma de las alturas de los nodos produce una serie aritmético-geométrica:
**Suma = ∑ (h / 2^h) ≤ 2**
Demostrando que **un Heap de n elementos se construye en tiempo estrictamente lineal O(n)**.

### Algoritmo Heapsort:
Construye el Max-Heap en O(n). Luego intercambia la raíz con el último elemento y restaura el heap con sift-down n veces. Resultado: **O(n log n) tiempo garantizado y O(1) memoria auxiliar**.`,
    codeSnippet: `// Min-Heap eficiente sobre un arreglo unidimensional
class MinHeap {
  private heap: number[] = [];

  public push(val: number): void {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
  }

  public pop(): number | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.siftDown(0);
    }
    return min;
  }

  private siftUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
      } else break;
    }
  }

  private siftDown(index: number): void {
    const len = this.heap.length;
    while (2 * index + 1 < len) {
      let smallest = 2 * index + 1; // Hijo izq
      const right = 2 * index + 2;
      if (right < len && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (this.heap[index] > this.heap[smallest]) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else break;
    }
  }
}`,
    quiz: [
      {
        question: 'En un Heap almacenado en un arreglo, ¿cuál es la fórmula para calcular el índice del padre del nodo en la posición i?',
        options: ['Math.floor((i - 1) / 2)', '2 * i + 1', 'i / 2 + 1', 'i - 2'],
        answerIndex: 0,
        explanation:
          'Debido a la indexación base 0 de los árboles completos en arreglos, el nodo padre siempre se calcula como Math.floor((i - 1) / 2).',
      },
      {
        question: '¿Cuál es la complejidad temporal de transformar un arreglo desordenado de n elementos en un Heap usando el algoritmo Build-Heap bottom-up?',
        options: ['O(n) - Lineal', 'O(n log n)', 'O(n²)', 'O(log n)'],
        answerIndex: 0,
        explanation:
          'Debido a que la mayoría de los nodos están en las hojas (altura baja) y solo la raíz está en altura máxima, la sumatoria de alturas converge a O(n).',
      },
    ],
  },
  {
    id: 13,
    title: 'MÓDULO 13: TEORÍA DE GRAFOS I: MODELADO Y REPRESENTACIONES',
    description:
      'Vértices, aristas y redes complejas. Matriz de Adyacencia O(V²) vs Lista de Adyacencia O(V + E) y grafos dirigidos.',
    items: [
      'Nivel 0: El mapa de rutas de aerolíneas y las redes de amigos en redes sociales.',
      'Nivel Intermedio: Vértices (V) y Aristas (E). Grafos dirigidos vs no dirigidos, ponderados vs no ponderados.',
      'Nivel Universitario: Lema del Apretón de Manos (∑ deg(v) = 2|E|). Trade-offs de memoria y pruebas de adyacencia.',
      'Matrices dispersas y almacenamiento comprimido (CSR / CSC) en motores de grafos de Big Data.',
      'Modelado de dependencias: Grafos Acíclicos Dirigidos (DAGs).',
    ],
    content: `## Panorama del tema: TEORÍA DE GRAFOS I

Un **Grafo G = (V, E)** es la estructura no lineal más versátil de las ciencias exactas. Se compone de un conjunto de **Vértices (Nodos)** y un conjunto de **Aristas (Enlaces)** que conectan pares de vértices, modelando relaciones de transporte, redes eléctricas, dependencias de software y conexiones neuronales.

## 🟢 Nivel 0: Intuición

· En Facebook, la amistad es **No Dirigida**: si Juan es amigo de Pedro, Pedro es amigo de Juan.
· En Twitter / X o Instagram, el seguimiento es **Dirigido**: puedes seguir a Elon Musk sin que él te siga a ti.
· En Google Maps, las calles son **Ponderadas**: cada calle tiene una distancia en kilómetros o minutos de tráfico.

## 🟡 Nivel Intermedio: Formas de Almacenamiento

### 1. Matriz de Adyacencia:
Una matriz 2D booleana de tamaño \`V × V\` donde \`matrix[u][v] = 1\` si existe una arista entre u y v.
· **Ventaja:** Consultar si u y v están conectados toma **O(1)**.
· **Desventaja:** Consume memoria **O(V²)**, prohibitivo si el grafo tiene 1 millón de nodos y pocas conexiones (grafo disperso).

### 2. Lista de Adyacencia:
Un arreglo de tamaño V donde cada casilla almacena una lista o conjunto de sus vecinos inmediatos.
· **Ventaja:** Consume memoria estrictamente proporcional a los datos reales: **O(V + E)**.
· **Desventaja:** Consultar si existe la arista (u, v) toma tiempo proporcional al grado del nodo **O(deg(u))**.

## 🟣 Nivel Universitario: Teorema del Grado (Handshaking Lemma)

En todo grafo finito no dirigido, la suma de los grados de todos los vértices es igual al doble del número de aristas:
**∑ deg(v) = 2 · |E|**
Como corolario matemático riguroso: **en cualquier grafo no dirigido, el número de vértices con grado impar es estrictamente par**.`,
    codeSnippet: `// Grafo Ponderado representado mediante Lista de Adyacencia
class Graph {
  private adjacencyList: Map<string, Array<{ node: string; weight: number }>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  public addEdge(u: string, v: string, weight = 1, directed = false): void {
    this.addVertex(u);
    this.addVertex(v);
    this.adjacencyList.get(u)!.push({ node: v, weight });
    if (!directed) {
      this.adjacencyList.get(v)!.push({ node: u, weight });
    }
  }

  public getNeighbors(vertex: string) {
    return this.adjacencyList.get(vertex) || [];
  }
}`,
    quiz: [
      {
        question: '¿Qué estructura de almacenamiento es más eficiente en memoria para un grafo disperso con 1,000,000 de nodos y solo 2,000,000 de aristas?',
        options: [
          'Matriz de Adyacencia (requeriría 10¹² casilleros de memoria).',
          'Lista de Adyacencia (consume O(V + E), requiriendo solo ~3,000,000 de registros).',
          'Arreglo estático de una dimensión.',
          'Tabla de verdad binaria.',
        ],
        answerIndex: 1,
        explanation:
          'Una matriz de 1M x 1M requeriría un terabyte de RAM. La lista de adyacencia solo almacena las aristas que existen realmente en O(V + E).',
      },
      {
        question: 'Según el Lema del Apretón de Manos en teoría de grafos, ¿a qué es igual la suma de los grados de todos los vértices de un grafo no dirigido?',
        options: ['Al número de vértices |V|', 'Al doble del número de aristas (2|E|)', 'A |V| * |E|', 'A cero'],
        answerIndex: 1,
        explanation:
          'Cada arista conecta exactamente dos extremos, aportando 1 unidad al grado de cada uno de sus dos vértices incidentes.',
      },
    ],
  },
  {
    id: 14,
    title: 'MÓDULO 14: TEORÍA DE GRAFOS II: RECORRIDOS BFS, DFS Y ORDEN TOPOLÓGICO',
    description:
      'Búsqueda en anchura vs profundidad. Detección de ciclos, componentes conexas y ordenamiento topológico para compiladores.',
    items: [
      'Nivel 0: Explorar un laberinto con hilo (DFS) vs la onda expansiva de una piedra en el agua (BFS).',
      'Nivel Intermedio: BFS con Cola FIFO (camino con menor número de aristas) vs DFS con Pila o Recursión.',
      'Nivel Universitario: Clasificación de aristas (Árbol, Avance, Retroceso, Cruce) y Teorema de Ciclos.',
      'Ordenamiento Topológico (Topological Sort): Algoritmo de Kahn (grados de entrada) vs DFS post-order invertido.',
      'Casos reales: Resolución de dependencias en npm, pip, Maven y Makefiles.',
    ],
    content: `## Panorama del tema: RECORRIDOS EN GRAFOS Y TOPOLOGICAL SORT

Recorrer un grafo implica visitar sistemáticamente cada vértice alcanzable sin caer en ciclos infinitos, utilizando un registro de nodos visitados (\`visited set\`).

## 🟢 Nivel 0: Intuición

· **BFS (Breadth-First Search - Búsqueda en Anchura):** Es como lanzar una piedra en un lago en calma: las ondas se expanden en círculos concéntricos. Primero visitas a todos tus amigos directos (distancia 1), luego a los amigos de tus amigos (distancia 2), y así sucesivamente.
· **DFS (Depth-First Search - Búsqueda en Profundidad):** Es como explorar un laberinto en la oscuridad con un hilo de Ariadna: caminas por un pasillo hasta topar con pared, y solo entonces retrocedes al último cruce para probar otro camino.

## 🟡 Nivel Intermedio: Algoritmo BFS y Camino Más Corto

En grafos sin pesos (o donde todas las aristas pesan 1), **BFS garantiza encontrar el camino con la menor cantidad de aristas posibles**.
Utiliza una **Cola FIFO**:
1. Encola el nodo inicial y márcalo como visitado.
2. Mientras la cola no esté vacía, desencola el nodo u.
3. Para cada vecino v no visitado, encola v y marca visitado.

## 🟣 Nivel Universitario: Ordenamiento Topológico (Topological Sort)

En un **Grafo Acíclico Dirigido (DAG)**, un ordenamiento topológico es una alineación lineal de sus vértices tal que para toda arista dirigida \`u → v\`, u aparece antes que v en la secuencia.
Esto modela prerequisitos universitarios o compilación de módulos en software.

### Algoritmo de Kahn (Basado en Indegree):
1. Calcula el **Grado de Entrada (in-degree)** de cada vértice.
2. Encola todos los vértices con \`in-degree === 0\` (no dependen de nadie).
3. Al procesar un nodo, decrementa el in-degree de sus vecinos. Si alguno llega a 0, se encola.
4. Si al finalizar se procesaron menos de |V| nodos, **¡el grafo contiene un ciclo circular que impide el ordenamiento!**`,
    codeSnippet: `// Ordenamiento Topológico mediante Algoritmo de Kahn (In-Degree)
function topologicalSortKahn(numNodes: number, edges: [number, number][]): number[] {
  const inDegree = new Array(numNodes).fill(0);
  const adj: number[][] = Array.from({ length: numNodes }, () => []);

  // Construir grafo y contabilizar grados de entrada
  for (const [u, v] of edges) {
    adj[u].push(v);
    inDegree[v]++;
  }

  // Encolar nodos sin dependencias previas
  const queue: number[] = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);

    for (const neighbor of adj[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  if (order.length !== numNodes) {
    throw new Error("Ciclo detectado: El grafo no es un DAG");
  }

  return order;
}`,
    quiz: [
      {
        question: '¿Qué estructura de datos fundamental se utiliza para implementar un recorrido BFS (Breadth-First Search)?',
        options: ['Pila (Stack - LIFO)', 'Cola (Queue - FIFO)', 'Árbol AVL', 'Tabla Hash criptográfica'],
        answerIndex: 1,
        explanation:
          'BFS requiere explorar en capas concéntricas de distancia, lo que se implementa obligatoriamente mediante una Cola FIFO.',
      },
      {
        question: 'Si el algoritmo de Kahn para ordenamiento topológico procesa menos de |V| nodos al vaciarse la cola, ¿qué diagnóstico matemático se concluye?',
        options: [
          'Que el grafo contiene al menos un ciclo dirigido (no es un DAG).',
          'Que el grafo es conexo.',
          'Que la memoria RAM falló.',
          'Que todos los vértices tienen grado cero.',
        ],
        answerIndex: 0,
        explanation:
          'La presencia de un ciclo circular causa que los nodos involucrados nunca alcancen un in-degree de cero, bloqueando su encolado y revelando una dependencia circular.',
      },
    ],
  },
  {
    id: 15,
    title: 'MÓDULO 15: TEORÍA DE GRAFOS III: CAMINOS MÍNIMOS Y ÁRBOLES DE EXPANSIÓN (MST)',
    description:
      'Dijkstra con Min-Heap, Bellman-Ford contra pesos negativos, y algoritmos de Kruskal (Union-Find) y Prim.',
    items: [
      'Nivel 0: El GPS calculando la ruta más rápida sorteando peajes y tráfico.',
      'Nivel Intermedio: Algoritmo de Dijkstra con Min-Heap O((V + E) log V). Restricción de pesos positivos.',
      'Nivel Universitario: Por qué Dijkstra falla con aristas negativas. Algoritmo de Bellman-Ford O(V · E) y arbitraje financiero.',
      'Árbol de Expansión Mínima (MST): Algoritmo de Kruskal con Estructura Disjoint Set (Union-Find con compresión de caminos).',
      'Algoritmo de Floyd-Warshall O(V³) para todos los pares de caminos mínimos.',
    ],
    content: `## Panorama del tema: CAMINOS MÍNIMOS Y ÁRBOLES DE EXPANSIÓN

Resolver el camino más corto en redes ponderadas y conectar todos los puntos con el menor costo posible son pilares de las telecomunicaciones, la logística global y la computación distribuida.

## 🟢 Nivel 0: Intuición

· **Camino Mínimo (Dijkstra):** Quieres viajar de Madrid a París al menor costo posible en combustible y peajes.
· **Árbol de Expansión Mínima (MST):** Eres una empresa de fibra óptica que debe conectar 10 ciudades. No te importa el camino individual entre dos ciudades, sino usar la menor cantidad total de cable para que todas las ciudades queden comunicadas entre sí.

## 🟡 Nivel Intermedio: Algoritmo de Dijkstra

Dijkstra mantiene un arreglo \`dist[]\` inicializado en infinito (excepto el nodo origen en 0) y una **Cola de Prioridad (Min-Heap)**.
En cada paso:
1. Extrae el nodo u con la menor distancia acumulada no visitada.
2. Para cada vecino v, evalúa la propiedad de **Relajación**:
\`if (dist[u] + peso(u, v) < dist[v]) { dist[v] = dist[u] + peso(u, v); push(v); }\`
Con Min-Heap, el tiempo es **O((V + E) log V)**.

## 🟣 Nivel Universitario: Pesos Negativos y Bellman-Ford

Dijkstra es un algoritmo voraz: asume que una vez que un nodo se extrae del Heap con la menor distancia, su costo nunca podrá disminuir en el futuro. **Si existen aristas con pesos negativos, esta suposición colapsa por completo**.
El algoritmo de **Bellman-Ford** relaja todas las aristas |V| - 1 veces en tiempo **O(V · E)**. Si en una |V|-ésima pasada alguna distancia sigue disminuyendo, se ha detectado un **Ciclo Negativo**, utilizado en finanzas para detectar oportunidades de arbitraje en tipos de cambio de divisas.`,
    codeSnippet: `// Estructura Disjoint Set (Union-Find) con Compresión de Caminos
class DisjointSet {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  // Búsqueda con Compresión de Caminos O(α(n)) ≈ O(1)
  public find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Aplanamiento del árbol
    }
    return this.parent[x];
  }

  // Unión por Rango
  public union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false; // Ya están en el mismo conjunto

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    return true;
  }
}`,
    quiz: [
      {
        question: '¿Por qué el algoritmo clásico de Dijkstra falla si el grafo contiene aristas con pesos negativos?',
        options: [
          'Porque causa un desbordamiento de enteros.',
          'Porque asume de forma voraz que una distancia extraída del Min-Heap no puede volver a reducirse posteriormente.',
          'Porque no funciona sobre listas de adyacencia.',
          'Porque la cola de prioridad solo admite números enteros positivos.',
        ],
        answerIndex: 1,
        explanation:
          'Dijkstra marca los nodos como cerrados basándose en que sumar aristas positivas siempre incrementa la distancia. Un peso negativo viola esa premisa voraz.',
      },
      {
        question: '¿Qué estructura de datos permite al algoritmo de Kruskal verificar si añadir una arista formaría un ciclo en tiempo casi constante O(α(V))?',
        options: ['Árbol Binario de Búsqueda', 'Disjoint Set (Union-Find)', 'Tabla Hash con Chaining', 'Pila de llamadas'],
        answerIndex: 1,
        explanation:
          'Union-Find con compresión de caminos y unión por rango resuelve la detección de componentes y ciclos en tiempo prácticamente O(1) amortizado.',
      },
    ],
  },
  {
    id: 16,
    title: 'MÓDULO 16: PROGRAMACIÓN DINÁMICA (DYNAMIC PROGRAMMING)',
    description:
      'Subestructura óptima y subproblemas superpuestos. Memoización vs Tabulación, Problema de la Mochila 0/1 y LCS.',
    items: [
      'Nivel 0: Recordar en papel para no calcular dos veces: de 1 billón de pasos a 40 pasos.',
      'Nivel Intermedio: Enfoque Top-Down (Memoización con Hash Map) vs Bottom-Up (Tabulación con Matriz).',
      'Nivel Universitario: Problema de la Mochila 0/1 (0/1 Knapsack) seudo-polinomial O(n · W). Optimización de espacio.',
      'Subsecuencia Común Más Larga (LCS) y el motor interno de "git diff".',
      'Reconocimiento de patrones de DP: Intervalos, Subconjuntos, Bitmask DP y Árboles.',
    ],
    content: `## Panorama del tema: PROGRAMACIÓN DINÁMICA

La Programación Dinámica (DP) es una técnica matemática y algorítmica para resolver problemas de optimización combinatoria descomponiéndolos en subproblemas superpuestos, memorizando sus soluciones para no recomputarlas jamás.

## 🟢 Nivel 0: Intuición

Escribe en una pizarra: \`1 + 1 + 1 + 1 = 4\`.
Ahora añade a la derecha: \`+ 1\`.
¿Cuál es el resultado? Inmediatamente respondes: **5**.
¿Cómo supiste que era 5 tan rápido sin volver a sumar todos los unos desde el principio? Porque recordaste que la suma anterior era 4 y solo le agregaste 1. **Eso es Programación Dinámica**.

## 🟡 Nivel Intermedio: Los Dos Requisitos Obligatorios

Un problema solo puede resolverse con DP si cumple:
1. **Subestructura Óptima:** La solución óptima del problema global se construye a partir de las soluciones óptimas de sus subproblemas.
2. **Subproblemas Superpuestos (Overlapping Subproblems):** El árbol recursivo evalúa exactamente los mismos subproblemas una y otra vez (como Fibonacci, donde fib(3) se recalcula decenas de veces).

### Enfoques:
· **Top-Down (Memoización):** Escribes la solución recursiva natural y guardas cada resultado en un diccionario o arreglo antes de retornar.
· **Bottom-Up (Tabulación):** Eliminas la recursión por completo. Llenas una tabla iterativamente desde los casos base más pequeños hasta la respuesta final.

## 🟣 Nivel Universitario: Problema de la Mochila 0/1 (0/1 Knapsack)

Dado un conjunto de n objetos con pesos \`w[i]\` y valores \`v[i]\`, y una mochila de capacidad máxima W:
La relación de recurrencia es:
\`DP[i][c] = max(DP[i-1][c], v[i] + DP[i-1][c - w[i]])\`
La complejidad temporal es **O(n · W)**. Nota que W es un valor numérico, no el tamaño en bits de la entrada: esto significa que el algoritmo es **Seudo-Polinomial** (si W crece exponencialmente con más bits, el tiempo explota).`,
    codeSnippet: `// Mochila 0/1 con Tabulación y Optimización de Espacio a O(W)
function knapsack01(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  // Arreglo unidimensional rodante
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const w = weights[i];
    const v = values[i];

    // Recorrido inverso para no sobrescribir valores del paso actual
    for (let c = capacity; c >= w; c--) {
      dp[c] = Math.max(dp[c], v + dp[c - w]);
    }
  }

  return dp[capacity];
}`,
    quiz: [
      {
        question: '¿Cuáles son las dos condiciones teóricas obligatorias para que un problema admita solución por Programación Dinámica?',
        options: [
          'Que el arreglo esté ordenado y no tenga duplicados.',
          'Subestructura Óptima y Subproblemas Superpuestos.',
          'Que el grafo sea bipartito y acíclico.',
          'Que el hardware admita instrucciones vectoriales SIMD.',
        ],
        answerIndex: 1,
        explanation:
          'La programación dinámica requiere que la solución global dependa de subproblemas óptimos y que dichos subproblemas se repitan muchas veces para justificar su memorización.',
      },
      {
        question: '¿Por qué la complejidad O(n · W) del problema de la Mochila 0/1 se califica formalmente como SEUDO-POLINOMIAL?',
        options: [
          'Porque no funciona con números fraccionarios.',
          'Porque W representa la magnitud de un valor de entrada, no el número de bits necesarios para codificarlo.',
          'Porque la memoria RAM requerida es cuadrática.',
          'Porque fue inventada antes de la teoría de complejidad.',
        ],
        answerIndex: 1,
        explanation:
          'En teoría de la computación, el tamaño de entrada de un número entero W es su número de bits (log₂ W). El tiempo de ejecución crece exponencialmente con el número de bits de W.',
      },
    ],
  },
  {
    id: 17,
    title: 'MÓDULO 17: ALGORITMOS VORACES (GREEDY) Y CODIFICACIÓN DE HUFFMAN',
    description:
      'La heurística de optimización local. Teoría de Matroides, selección de actividades y compresión sin pérdida de datos.',
    items: [
      'Nivel 0: Tomar la mejor rebanada inmediata en cada bocado.',
      'Nivel Intermedio: Cuándo funciona la estrategia voraz y cuándo fracasa (cambio de monedas con sistemas no canónicos).',
      'Nivel Universitario: Estructuras algebraicas de independencia: Matroides y demostración formal de la propiedad voraz.',
      'Codificación de Huffman para compresión sin pérdida de datos (ZIP, JPEG, MP3).',
      'Problema de selección de actividades y programación de intervalos disjuntos.',
    ],
    content: `## Panorama del tema: ALGORITMOS VORACES Y HUFFMAN

Un **Algoritmo Voraz (Greedy)** construye una solución paso a paso, tomando siempre la decisión que parece más atractiva u óptima en ese instante preciso, sin reconsiderar jamás las decisiones pasadas ni anticipar el futuro.

## 🟢 Nivel 0: Intuición

Imagina que estás en un buffet libre y solo puedes servirte 3 platos.
El enfoque voraz elige directamente el plato más caro del buffet en el primer paso, luego el segundo más caro, y luego el tercero más caro. Para este caso simple, la estrategia voraz maximiza el valor total de tu comida.
Sin embargo, si por elegir un plato caro te obligan a comer una guarnición amarga, la estrategia voraz fracasa porque no previó las consecuencias a largo plazo.

## 🟡 Nivel Intermedio: La Trampa del Cambio de Monedas

Si tienes monedas de \`[1, 5, 10, 25]\` centavos (sistema monetario de EE.UU.), el enfoque voraz siempre da el menor número de monedas para cualquier cantidad.
Pero si el banco emite monedas de \`[1, 3, 4]\` y quieres dar un cambio de 6 centavos:
· **Estrategia Voraz:** Toma la mayor (4), y luego dos de 1 → Total: 3 monedas (4 + 1 + 1).
· **Solución Óptima Real:** Dos monedas de 3 centavos (3 + 3) → Total: **2 monedas**.
¡Aquí el algoritmo voraz falla estrepitosamente! Se requiere Programación Dinámica.

## 🟣 Nivel Universitario: Codificación de Huffman y Teoría de Matroides

La **Codificación de Huffman** es un algoritmo voraz óptimo para la compresión de texto sin pérdida.
En lugar de asignar 8 bits fijos (1 byte) a cada letra, asigna **códigos de longitud variable**: los caracteres más frecuentes (como la letra 'E') reciben códigos muy cortos (ej: 2 bits: \`01\`), mientras que caracteres raros (como la 'Z') reciben códigos largos (\`11101\`).
El algoritmo construye un árbol binario de abajo hacia arriba fusionando repetidamente los dos nodos con menor frecuencia extraídos de un Min-Heap en tiempo **O(n log n)**.`,
    codeSnippet: `// Problema de Selección de Actividades Voraz (Interval Scheduling)
interface Activity {
  start: number;
  end: number;
}

function selectMaxActivities(activities: Activity[]): Activity[] {
  // 1. Regla Voraz: Ordenar actividades por tiempo de FINALIZACIÓN ascendente
  const sorted = [...activities].sort((a, b) => a.end - b.end);

  const selected: Activity[] = [];
  let lastEndTime = -Infinity;

  for (const act of sorted) {
    if (act.start >= lastEndTime) {
      selected.push(act);
      lastEndTime = act.end; // Actualizar último tiempo ocupado
    }
  }

  return selected;
}`,
    quiz: [
      {
        question: '¿Por qué la estrategia voraz para el problema del cambio de monedas no siempre produce la solución óptima para cualquier conjunto arbitrario de denominaciones?',
        options: [
          'Porque los algoritmos voraces no pueden ejecutarse en computadoras de 64 bits.',
          'Porque una elección óptima localmente puede forzar combinaciones subóptimas en los pasos subsiguientes.',
          'Porque las monedas son números enteros.',
          'Porque el algoritmo voraz requiere ordenamiento cúbico.',
        ],
        answerIndex: 1,
        explanation:
          'Un algoritmo voraz no tiene visión retrospectiva ni capacidad de retroceso (backtracking): elegir la moneda más grande puede obligar a usar muchas monedas pequeñas más adelante.',
      },
      {
        question: 'En la codificación de Huffman, ¿qué propiedad asegura que ningún código de caracter sea el prefijo de otro código?',
        options: [
          'La propiedad de Árbol de Prefijos (Prefix Code): todos los caracteres son exclusivamente nodos hoja del árbol binario.',
          'El teorema de Pitágoras.',
          'La ley de Amdahl.',
          'El cifrado RSA.',
        ],
        answerIndex: 0,
        explanation:
          'Al ubicar todos los símbolos únicamente en las hojas del árbol de Huffman, es físicamente imposible que el camino hacia un símbolo sea prefijo del camino hacia otro.',
      },
    ],
  },
  {
    id: 18,
    title: 'MÓDULO 18: ESTRUCTURAS JERÁRQUICAS AVANZADAS (TRIES, SEGMENT TREES, FENWICK)',
    description:
      'Árboles de prefijos para autocompletado y estructuras de rangos. Segment Trees con Lazy Propagation y Binary Indexed Trees (BIT).',
    items: [
      'Nivel 0: El autocompletado inteligente de Google que adivina tu búsqueda con solo escribir dos letras.',
      'Nivel Intermedio: Trie (Árbol de Prefijos): Búsqueda en O(L) independiente del número de palabras almacenadas.',
      'Nivel Universitario: Segment Trees para Range Minimum Query (RMQ) y actualizaciones por rango con Lazy Propagation en O(log n).',
      'Fenwick Tree (Binary Indexed Tree - BIT): Manipulación de bits menos significativos (LSB = x & -x) para sumas acumuladas.',
      'Sistemas reales: Enrutamiento IP de red (Longest Prefix Match) y correctores ortográficos.',
    ],
    content: `## Panorama del tema: ESTRUCTURAS JERÁRQUICAS AVANZADAS

Cuando las colecciones de datos alcanzan cientos de millones de registros y las consultas exigen evaluar rangos dinámicos o prefijos léxicos en tiempo logarítmico, las estructuras tradicionales se quedan cortas.

## 🟢 Nivel 0: Intuición

· **Trie:** Es como el árbol genealógico de las palabras: todas las palabras que empiezan con "AUTO" (automóvil, autopista, autobús) comparten la misma raíz inicial de 4 letras.
· **Segment Tree:** Imagina que tienes las temperaturas de todo el año. En lugar de revisar los 365 días cada vez que alguien pregunta "¿cuál fue la temperatura mínima en el mes de julio?", tienes un árbol precalculado por tramos que te da la respuesta en 3 pasos.

## 🟡 Nivel Intermedio: Tries (Prefix Trees)

En un Trie, los nodos no almacenan palabras completas, sino caracteres individuales.
Para buscar si una palabra de longitud L existe en un diccionario de 100,000,000 de términos:
**El tiempo de búsqueda es estrictamente O(L)**.
¡Es completamente independiente de cuántos millones de palabras existan en el sistema!

## 🟣 Nivel Universitario: Segment Trees y Lazy Propagation

Un **Segment Tree** es un árbol binario donde cada nodo representa un intervalo \`[L, R]\` del arreglo original:
· Consulta de rango (Suma o Mínimo): **O(log n)**.
· Actualización puntual: **O(log n)**.

### Propagación Perezosa (Lazy Propagation):
Si necesitas sumar una constante a 500,000 elementos contiguos, actualizar nodo por nodo costaría O(n log n). Con Lazy Propagation, la actualización se pospone en los nodos secundarios marcándolos con una bandera (\`lazy\`), transfiriendo el costo únicamente cuando un hijo sea consultado en el futuro. Costo: **O(log n) por actualización de rango completo**.`,
    codeSnippet: `// Implementación de un Trie (Árbol de Prefijos)
class TrieNode {
  public children: Map<string, TrieNode> = new Map();
  public isEndOfWord = false;
}

class Trie {
  private root = new TrieNode();

  public insert(word: string): void {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEndOfWord = true;
  }

  public startsWith(prefix: string): boolean {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children.has(char)) return false;
      curr = curr.children.get(char)!;
    }
    return true; // El prefijo existe en el diccionario
  }
}`,
    quiz: [
      {
        question: '¿Cuál es la complejidad temporal de buscar si un prefijo de longitud L existe en un Trie que contiene 10,000,000 de palabras?',
        options: ['O(L) - Depende únicamente de la longitud del prefijo', 'O(10,000,000)', 'O(log n)', 'O(L²)'],
        answerIndex: 0,
        explanation:
          'En un Trie, cada paso desciende por el enlace del caracter actual. La búsqueda realiza exactamente L transiciones, sin importar el número de palabras en el árbol.',
      },
      {
        question: '¿Qué técnica permite a un Segment Tree actualizar un rango completo de elementos en O(log n) en lugar de O(n log n)?',
        options: ['Compresión de caminos', 'Lazy Propagation (Propagación Perezosa)', 'Rehashing cuadrático', 'Rotación AVL'],
        answerIndex: 1,
        explanation:
          'Lazy Propagation suspende la actualización en los niveles inferiores hasta que los datos sean requeridos por una consulta posterior, manteniendo el costo en O(log n).',
      },
    ],
  },
  {
    id: 19,
    title: 'MÓDULO 19: ESTRUCTURAS PROBABILÍSTICAS PARA BIG DATA',
    description:
      'Filtros de Bloom, HyperLogLog y Count-Min Sketch. Trade-off entre precisión absoluta y consumo ultra-bajo de memoria RAM.',
    items: [
      'Nivel 0: El portero de discoteca con memoria fotográfica aproximada: "Definitivamente NO estás en la lista".',
      'Nivel Intermedio: Filtros de Bloom: Cero Falsos Negativos y Falsos Positivos controlables. Array de bits y k hashes.',
      'Nivel Universitario: Derivación matemática de la tasa de error ε ≈ (1 - e^(-kn/m))^k y dimensionamiento óptimo de bits.',
      'HyperLogLog (HLL): Conteo de cardinalidad de miles de millones de usuarios únicos con 1.5 KB de RAM (Redis, BigQuery).',
      'Count-Min Sketch para detección de elementos más frecuentes (Heavy Hitters) en flujos de datos en streaming.',
    ],
    content: `## Panorama del tema: ESTRUCTURAS PROBABILÍSTICAS

Cuando un sistema maneja miles de millones de eventos por segundo (como Google, Cloudflare o Spotify), almacenar cada dato exacto en memoria RAM es económicamente inviable. Las **Estructuras de Datos Probabilísticas** sacrifican un pequeño y controlado porcentaje de precisión a cambio de reducir el consumo de memoria en un **99.9%**.

## 🟢 Nivel 0: Intuición

Imagina un portero en una fiesta privada:
En lugar de revisar una lista gigante de 500 páginas, tiene una regla probabilística ultra-rápida:
· Si el portero te mira y dice: **"Definitivamente TÚ NO estás en la lista"**, tiene 100% de certeza. No entras.
· Si dice: **"CREO que sí estás en la lista"**, hay un 99% de probabilidad de que sí estés y un 1% de falso positivo.

## 🟡 Nivel Intermedio: Filtros de Bloom

Un **Filtro de Bloom** se compone de un arreglo de \`m\` bits (inicializados en 0) y \`k\` funciones hash independientes.
· **Para insertar un elemento:** Se calculan los k hashes del elemento y se colocan en 1 los bits correspondientes: \`bits[h₁(x)] = 1, bits[h₂(x)] = 1...\`
· **Para consultar un elemento:** Se evalúan los mismos k bits.
  - Si al menos uno de los bits es 0: **¡El elemento DEFINITIVAMENTE NO existe! (Cero falsos negativos)**.
  - Si todos los bits son 1: El elemento **probablemente sí existe** (puede ser una colisión accidental de otros elementos).

## 🟣 Nivel Universitario: HyperLogLog y Conteo de Cardinalidad

Contar cuántos usuarios únicos visitaron un sitio web con 1,000 millones de visitas usando un \`HashSet\` requeriría ~8 GB de memoria RAM.
El algoritmo **HyperLogLog (HLL)** resuelve este problema consumiendo apenas **1.5 KB de memoria** con un error estándar menor al 1.04 / √m.
Se basa en observar el número de ceros consecutivos al inicio de los hashes generados: en una distribución aleatoria, la probabilidad de que un hash comience con k ceros es 2^(-k). Observar una secuencia máxima de ceros permite estimar con asombrosa precisión la cardinalidad total de la población.`,
    codeSnippet: `// Implementación conceptual de un Filtro de Bloom en TypeScript
class BloomFilter {
  private size: number;
  private bitArray: Uint8Array;
  private hashCount: number;

  constructor(size = 1024, hashCount = 3) {
    this.size = size;
    this.hashCount = hashCount;
    this.bitArray = new Uint8Array(Math.ceil(size / 8));
  }

  private getHashes(key: string): number[] {
    const hashes: number[] = [];
    let h1 = 0;
    for (let i = 0; i < key.length; i++) h1 = (h1 * 31 + key.charCodeAt(i)) % this.size;
    let h2 = 5381;
    for (let i = 0; i < key.length; i++) h2 = ((h2 << 5) + h2 + key.charCodeAt(i)) % this.size;

    for (let i = 0; i < this.hashCount; i++) {
      hashes.push(Math.abs((h1 + i * h2) % this.size));
    }
    return hashes;
  }

  public add(item: string): void {
    for (const h of this.getHashes(item)) {
      const byteIdx = Math.floor(h / 8);
      const bitIdx = h % 8;
      this.bitArray[byteIdx] |= (1 << bitIdx);
    }
  }

  public mightContain(item: string): boolean {
    for (const h of this.getHashes(item)) {
      const byteIdx = Math.floor(h / 8);
      const bitIdx = h % 8;
      if ((this.bitArray[byteIdx] & (1 << bitIdx)) === 0) {
        return false; // DEFINITIVAMENTE NO EXISTE
      }
    }
    return true; // PROBABLEMENTE SÍ EXISTE
  }
}`,
    quiz: [
      {
        question: '¿Qué garantía matemática absoluta ofrece un Filtro de Bloom?',
        options: [
          'Cero falsos positivos y cero falsos negativos.',
          'Cero falsos negativos (si responde que no existe, es 100% seguro que no existe).',
          'Permite eliminar elementos en O(1) tiempo.',
          'Ordena los elementos alfabéticamente.',
        ],
        answerIndex: 1,
        explanation:
          'Un filtro de Bloom nunca puede arrojar un falso negativo: si un elemento fue insertado, sus bits fueron encendidos. Si algún bit está en 0, es físicamente imposible que haya sido insertado.',
      },
      {
        question: '¿Qué ventaja radical ofrece el algoritmo HyperLogLog (usado en Redis y BigQuery) para contar usuarios únicos?',
        options: [
          'Calcula la respuesta exacta sin error.',
          'Estima cardinalidades de miles de millones de elementos únicos utilizando solo ~1.5 KB de memoria RAM.',
          'Cifra las contraseñas con curvas elípticas.',
          'Reemplaza a los árboles B+ en los discos.',
        ],
        answerIndex: 1,
        explanation:
          'HyperLogLog utiliza registros de conteo de bits para estimar cardinalidades masivas con un margen de error controlable de ~1%, consumiendo una cantidad minúscula y fija de memoria.',
      },
    ],
  },
  {
    id: 20,
    title: 'MÓDULO 20: APLICACIONES INDUSTRIALES: BASES DE DATOS, IA Y BIG TECH',
    description:
      'De la teoría a la producción masiva. B+ Trees en PostgreSQL, LSM-Trees en Cassandra/RocksDB y Grafos de Computación en IA.',
    items: [
      'Nivel 0: Cómo se conectan estos 20 módulos para que funcionen Google Maps, WhatsApp y ChatGPT.',
      'Nivel Intermedio: Motores de Almacenamiento Relacionales: Por qué los árboles binarios fallan en disco duro y los B+ Trees minimizan lecturas de bloques I/O.',
      'Nivel Universitario: LSM-Trees (Log-Structured Merge-Trees) con MemTable y SSTables en bases de datos NoSQL de alta escritura.',
      'Grafos de Cómputo Acíclicos Dirigidos (DAGs) en PyTorch/TensorFlow para retropropagación (Autodiff).',
      'Algoritmo de búsqueda heurística A* para navegación autónoma y agentes de Inteligencia Artificial.',
    ],
    content: `## Panorama del tema: APLICACIONES EN EL MUNDO REAL

Felicidades por alcanzar la cúspide de este curso universitario. Todos los conceptos aprendidos (Big-O, árboles, tablas hash, grafos, montículos y estructuras de memoria) no son ejercicios de pizarrón: son los cimientos físicos que sostienen la infraestructura digital del planeta.

## 🟢 Nivel 0: La Gran Conexión

· Cuando buscas una dirección en **Google Maps**: Tu teléfono ejecuta variantes de **A* y Dijkstra** sobre grafos ponderados de calles.
· Cuando abres una conversación en **WhatsApp**: Una **Cola de Mensajes y una Tabla Hash** localizan el socket activo de tu contacto.
· Cuando ejecutas una consulta en **Instagram o Amazon**: Un **B+ Tree o LSM-Tree** lee 100 millones de productos en milisegundos.
· Cuando interactúas con **ChatGPT**: Un **Grafo de Cómputo** ejecuta multiplicaciones tensoriales optimizadas con estructuras de memoria contigua en GPUs.

## 🟡 Nivel Intermedio: B+ Trees en Motores de Bases de Datos

¿Por qué PostgreSQL, MySQL InnoDB y SQLite no usan Árboles AVL ni Red-Black?
Porque los árboles binarios tienen pocos hijos por nodo (máximo 2), obligando al disco duro a realizar 20 o 30 saltos de lectura mecánica para encontrar un dato.
Un **B+ Tree** tiene nodos gigantescos que coinciden exactamente con el tamaño de una página de disco (4 KB u 8 KB). Cada nodo almacena cientos de punteros. Con solo **3 o 4 lecturas de bloque de disco**, localiza un registro entre 100 millones de filas.

## 🟣 Nivel Universitario: LSM-Trees y Grafos de Cómputo en IA

### LSM-Trees (Log-Structured Merge-Trees):
En sistemas de Big Data con escrituras masivas (Cassandra, RocksDB, Google Bigtable), modificar árboles en disco genera escrituras aleatorias lentas. Los LSM-Trees escriben secuencialmente en un archivo de registro (\`Write-Ahead Log\`) y en memoria RAM (\`MemTable\`). Periódicamente, vuelcan bloques inmutables ordenados (\`SSTables\`) y usan **Filtros de Bloom** para descartar archivos antes de leer el disco.

### Grafos de Cómputo en IA (Autodiff):
Frameworks de Deep Learning (PyTorch y JAX) modelan las operaciones tensoriales de las redes neuronales como un **Grafo Acíclico Dirigido (DAG)**.
Durante el paso hacia adelante (Forward Pass), se calcula la inferencia; durante la retropropagación (Backprop), el motor recorre el grafo en **orden topológico inverso** aplicando la Regla de la Cadena del cálculo diferencial para ajustar los pesos sinápticos con precisión milimétrica.`,
    codeSnippet: `// Algoritmo de Búsqueda Heurística A* (A-Star) para Navegación en IA
interface NodeAStar {
  x: number;
  y: number;
  gCost: number; // Costo desde el inicio
  hCost: number; // Heurística (Distancia Manhattan estimada al objetivo)
  fCost: number; // gCost + hCost
  parent?: NodeAStar;
}

function manhattanDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function aStarSearch(
  startX: number, startY: number,
  targetX: number, targetY: number,
  grid: number[][] // 0 = transitable, 1 = obstáculo
): NodeAStar | null {
  const openSet: NodeAStar[] = [];
  const closedSet = new Set<string>();

  const startNode: NodeAStar = {
    x: startX,
    y: startY,
    gCost: 0,
    hCost: manhattanDistance(startX, startY, targetX, targetY),
    fCost: manhattanDistance(startX, startY, targetX, targetY)
  };

  openSet.push(startNode);

  while (openSet.length > 0) {
    // 1. Extraer el nodo con menor fCost (en producción se usa Min-Heap)
    openSet.sort((a, b) => a.fCost - b.fCost);
    const current = openSet.shift()!;

    if (current.x === targetX && current.y === targetY) {
      return current; // ¡Ruta óptima encontrada!
    }

    const key = \`\${current.x},\${current.y}\`;
    closedSet.add(key);

    // 2. Explorar 4 vecinos ortogonales
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (const [dx, dy] of directions) {
      const nx = current.x + dx;
      const ny = current.y + dy;

      if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
      if (grid[nx][ny] === 1 || closedSet.has(\`\${nx},\${ny}\`)) continue;

      const gCost = current.gCost + 1;
      const hCost = manhattanDistance(nx, ny, targetX, targetY);
      const neighbor: NodeAStar = {
        x: nx, y: ny,
        gCost, hCost,
        fCost: gCost + hCost,
        parent: current
      };

      openSet.push(neighbor);
    }
  }

  return null; // No hay ruta transitable
}`,
    quiz: [
      {
        question: '¿Por qué los motores de bases de datos relacionales como PostgreSQL y MySQL InnoDB utilizan B+ Trees en vez de árboles binarios como AVL?',
        options: [
          'Porque los B+ Trees tienen nodos muy anchos que coinciden con los bloques de lectura física de disco, minimizando las costosas operaciones de I/O.',
          'Porque los árboles AVL no soportan claves primarias numéricas.',
          'Porque los B+ Trees son estructuras no balanceadas.',
          'Porque los discos SSD no admiten algoritmos recursivos.',
        ],
        answerIndex: 0,
        explanation:
          'En almacenamiento secundario (discos duros o SSDs), el cuello de botella es la latencia de lectura de bloques. Los B+ Trees logran factores de ramificación de cientos de claves por nodo, alcanzando millones de filas con solo 3 o 4 lecturas de disco.',
      },
      {
        question: '¿Qué rol fundamental cumplen los Grafos Acíclicos Dirigidos (DAGs) en frameworks de Inteligencia Artificial como PyTorch y TensorFlow?',
        options: [
          'Almacenar las contraseñas de los usuarios.',
          'Modelar el grafo de cálculo tensorial para calcular automáticamente las derivadas y gradientes durante la retropropagación (Backpropagation).',
          'Eliminar la memoria caché de la GPU.',
          'Reemplazar la conexión a internet.',
        ],
        answerIndex: 1,
        explanation:
          'El grafo de cómputo registra cada operación tensorial como un nodo. El motor de autodiferenciación recorre este DAG en orden topológico inverso para aplicar la regla de la cadena y calcular los gradientes de la red.',
      },
    ],
  },
];
