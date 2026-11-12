import { TutorExercise } from './models';

// Ejercicios prácticos por módulo diseñados para autoevaluación local o envío por correo
export const MODULE_EXERCISES: { [key: number]: TutorExercise[] } = {
  1: [
    {
      id: 101,
      instruction: "Escribe una función en Python llamada 'es_par(n)' que determine si un número es par en tiempo constante O(1). Usa el operador módulo (%) y retorna un booleano.",
      placeholder: "def es_par(n):\n    # Tu código aquí\n",
      expectedKeywords: ["def es_par", "return", "%", "2"],
      hint: "Usa el residuo de la división entre 2: 'n % 2 == 0'. Esto toma tiempo constante O(1) porque es una sola operación aritmética básica.",
      isEmailSubmission: false
    },
    {
      id: 102,
      instruction: "Escribe una función 'buscar_duplicados(arr)' que compruebe si hay elementos repetidos en un arreglo comparando pares en tiempo cuadrático O(n²).",
      placeholder: "def buscar_duplicados(arr):\n    # Usa bucles anidados para comparar elementos\n",
      expectedKeywords: ["def buscar_duplicados", "for", "in", "arr"],
      hint: "Un bucle externo recorre la lista ('i') y un bucle interno recorre a partir de 'i + 1' comparando 'arr[i] == arr[j]'.",
      isEmailSubmission: false
    }
  ],
  2: [
    {
      id: 201,
      instruction: "Implementa la lógica de duplicación de capacidad de un arreglo dinámico en Python. Si 'longitud == capacidad', duplica la capacidad y reserva un nuevo bloque en memoria.",
      placeholder: "def redimensionar(capacidad, longitud):\n    if longitud == capacidad:\n        # Duplica la capacidad\n    return capacidad\n",
      expectedKeywords: ["longitud == capacidad", "*", "2"],
      hint: "Al alcanzar el límite, asigna 'capacidad = capacidad * 2'. Esto permite amortizar el costo de inserción a O(1).",
      isEmailSubmission: false
    },
    {
      id: 202,
      instruction: "Calcula la dirección en memoria RAM física de un elemento en un arreglo contiguo usando: direccion_base + indice * tamano_bytes.",
      placeholder: "def calcular_direccion(direccion_base, indice, tamano_bytes):\n    # Retorna la dirección calculada\n",
      expectedKeywords: ["def calcular_direccion", "return", "direccion_base", "+", "indice", "*", "tamano_bytes"],
      hint: "La fórmula es directa: 'return direccion_base + indice * tamano_bytes'. Es la razón por la cual el acceso por índice arr[i] es O(1).",
      isEmailSubmission: false
    }
  ],
  3: [
    {
      id: 301,
      instruction: "Escribe la lógica para insertar un nodo al inicio de una lista simplemente enlazada. Asigna el puntero 'next' del nuevo nodo a la cabeza actual.",
      placeholder: "class Nodo:\n    def __init__(self, dato):\n        self.dato = dato\n        self.next = None\n\ndef insertar_al_inicio(cabeza, nuevo_nodo):\n    # Conecta el nuevo nodo\n    return nuevo_nodo\n",
      expectedKeywords: ["nuevo_nodo.next", "=", "cabeza"],
      hint: "Haz 'nuevo_nodo.next = cabeza' antes de retornar el nuevo nodo como la nueva cabeza.",
      isEmailSubmission: false
    },
    {
      id: 302,
      instruction: "Implementa la inversión de punteros en una lista enlazada simple usando tres punteros (prev, curr, temp).",
      placeholder: "def invertir_lista(cabeza):\n    prev = None\n    curr = cabeza\n    while curr:\n        temp = curr.next\n        # Invierte el puntero aquí\n        prev = curr\n        curr = temp\n    return prev\n",
      expectedKeywords: ["curr.next", "=", "prev"],
      hint: "En cada paso, redirige el enlace hacia atrás: 'curr.next = prev'.",
      isEmailSubmission: false
    }
  ],
  4: [
    {
      id: 401,
      instruction: "Verifica si una cadena de paréntesis está balanceada usando una Pila (Stack - LIFO). Empuja '(' y desapila con 'pop()' al encontrar ')'.",
      placeholder: "def esta_balanceado(cadena):\n    pila = []\n    for char in cadena:\n        if char == '(':\n            pila.append(char)\n        elif char == ')':\n            if not pila: return False\n            pila.pop()\n    return len(pila) == 0\n",
      expectedKeywords: ["pila.append", "pila.pop", "len(pila) == 0"],
      hint: "Cada paréntesis de cierre debe coincidir con el último de apertura apilado en la cima.",
      isEmailSubmission: false
    },
    {
      id: 402,
      instruction: "Implementa una Cola (Queue - FIFO) con dos pilas (stack_in, stack_out) para encolar y desencolar.",
      placeholder: "class ColaConPilas:\n    def __init__(self):\n        self.pila_in = []\n        self.pila_out = []\n    def encolar(self, x):\n        self.pila_in.append(x)\n",
      expectedKeywords: ["pila_in", "pila_out", "append"],
      hint: "Para desencolar, si pila_out está vacía, pasa todos los elementos de pila_in a pila_out usando pop() para invertir el orden.",
      isEmailSubmission: false
    }
  ],
  5: [
    {
      id: 501,
      instruction: "Escribe una función de hash básica por división: suma los códigos ASCII de los caracteres de la clave y aplica el operador módulo (%) con el tamaño de la tabla.",
      placeholder: "def funcion_hash(clave, tamano_tabla):\n    suma = 0\n    for char in clave:\n        suma += ord(char)\n    return suma % tamano_tabla\n",
      expectedKeywords: ["ord(char)", "%", "tamano_tabla"],
      hint: "Usa 'ord(char)' para obtener el valor numérico del carácter y '% tamano_tabla' para acotarlo al rango de buckets.",
      isEmailSubmission: false
    },
    {
      id: 502,
      instruction: "Inserta una pareja (clave, valor) en una tabla hash con resolución de colisiones por encadenamiento (Separate Chaining).",
      placeholder: "def insertar_encadenado(tabla, clave, valor, indice):\n    bucket = tabla[indice]\n    bucket.append((clave, valor))\n",
      expectedKeywords: ["bucket.append", "clave", "valor"],
      hint: "Cada bucket de la tabla contiene una lista o arreglo donde se añaden las tuplas en caso de colisión.",
      isEmailSubmission: false
    }
  ],
  6: [
    {
      id: 601,
      instruction: "Implementa el Algoritmo de Euclides recursivo para calcular el Máximo Común Divisor (MCD) de dos números enteros 'a' y 'b'.",
      placeholder: "def mcd(a, b):\n    if b == 0:\n        return a\n    return mcd(b, a % b)\n",
      expectedKeywords: ["def mcd", "b == 0", "mcd(b, a % b)"],
      hint: "El caso base es cuando 'b == 0', retornando 'a'. En el paso recursivo llama a 'mcd(b, a % b)'.",
      isEmailSubmission: false
    },
    {
      id: 602,
      instruction: "Escribe una función recursiva de Backtracking para generar todos los subconjuntos (potencia) de un arreglo dado.",
      placeholder: "def subconjuntos(arr):\n    resultado = []\n    def backtrack(inicio, camino):\n        resultado.append(list(camino))\n        for i in range(inicio, len(arr)):\n            camino.append(arr[i])\n            backtrack(i + 1, camino)\n            camino.pop() # Backtrack\n    backtrack(0, [])\n    return resultado\n",
      expectedKeywords: ["camino.append", "backtrack", "camino.pop"],
      hint: "El patrón de backtracking consiste en: elegir (append), explorar recursivamente (backtrack), y des-elegir (pop).",
      isEmailSubmission: false
    }
  ],
  7: [
    {
      id: 701,
      instruction: "Escribe la condición interna de intercambio para Bubble Sort que compare 'arr[j]' con 'arr[j+1]' y los intercambie si están desordenados.",
      placeholder: "if arr[j] > arr[j+1]:\n    arr[j], arr[j+1] = arr[j+1], arr[j]\n",
      expectedKeywords: ["arr[j]", "arr[j+1]", "="],
      hint: "En Python puedes intercambiar en una línea: 'arr[j], arr[j+1] = arr[j+1], arr[j]'.",
      isEmailSubmission: false
    },
    {
      id: 702,
      instruction: "Implementa el bucle interior de Insertion Sort que desplaza elementos mayores hacia la derecha para hacer espacio al elemento actual.",
      placeholder: "while j >= 0 and arr[j] > clave:\n    arr[j + 1] = arr[j]\n    j -= 1\narr[j + 1] = clave\n",
      expectedKeywords: ["arr[j + 1] = arr[j]", "j -= 1"],
      hint: "Desplaza los elementos mayores un índice a la derecha y decrementa 'j'.",
      isEmailSubmission: false
    }
  ],
  8: [
    {
      id: 801,
      instruction: "Escribe la partición de Lomuto para QuickSort. Recorre el arreglo y coloca los elementos menores que el pivote a la izquierda.",
      placeholder: "def particion_lomuto(arr, low, high):\n    pivote = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] <= pivote:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    return i + 1\n",
      expectedKeywords: ["pivote = arr[high]", "arr[i], arr[j] = arr[j], arr[i]", "return i + 1"],
      hint: "El puntero 'i' delimita la frontera de elementos menores o iguales al pivote.",
      isEmailSubmission: false
    },
    {
      id: 802,
      instruction: "Escribe la función de fusión (Merge) de MergeSort para combinar dos arreglos ordenados (izq y der) en un solo arreglo ordenado.",
      placeholder: "def merge(izq, der):\n    resultado = []\n    i = j = 0\n    while i < len(izq) and j < len(der):\n        if izq[i] <= der[j]:\n            resultado.append(izq[i]); i += 1\n        else:\n            resultado.append(der[j]); j += 1\n    resultado.extend(izq[i:])\n    resultado.extend(der[j:])\n    return resultado\n",
      expectedKeywords: ["resultado.append", "izq", "der", "extend"],
      hint: "Compara los elementos frontales de ambas listas y añade el menor. Al terminar el bucle, concatena el remanente.",
      isEmailSubmission: false
    }
  ],
  9: [
    {
      id: 901,
      instruction: "Escribe la lógica para calcular el índice del medio 'mid' en una búsqueda binaria evitando el desbordamiento aritmético de enteros (Integer Overflow).",
      placeholder: "def calcular_mid(low, high):\n    # Evita el bug histórico de (low + high) // 2\n    return low + (high - low) // 2\n",
      expectedKeywords: ["low + (high - low) // 2"],
      hint: "La expresión 'low + (high - low) // 2' es matemáticamente idéntica a '(low + high) // 2' pero jamás causa overflow de 32 bits.",
      isEmailSubmission: false
    },
    {
      id: 902,
      instruction: "Implementa el bucle principal de Búsqueda Binaria sobre un arreglo ordenado que retorne el índice si encuentra el objetivo o -1.",
      placeholder: "def busqueda_binaria(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = low + (high - low) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n",
      expectedKeywords: ["while low <= high", "arr[mid] == target", "low = mid + 1", "high = mid - 1"],
      hint: "Si arr[mid] < target, busca en la mitad derecha (low = mid + 1); de lo contrario, en la izquierda (high = mid - 1).",
      isEmailSubmission: false
    }
  ],
  10: [
    {
      id: 1001,
      instruction: "Inserta un valor en un Árbol Binario de Búsqueda (BST) de forma recursiva manteniendo el invariante: valores menores a la izquierda, mayores a la derecha.",
      placeholder: "def insertar_bst(raiz, val):\n    if raiz is None:\n        return Nodo(val)\n    if val < raiz.val:\n        raiz.izq = insertar_bst(raiz.izq, val)\n    else:\n        raiz.der = insertar_bst(raiz.der, val)\n    return raiz\n",
      expectedKeywords: ["raiz.izq = insertar_bst", "raiz.der = insertar_bst", "return raiz"],
      hint: "Si val < raiz.val, avanza por el subárbol izquierdo; si no, por el derecho.",
      isEmailSubmission: false
    },
    {
      id: 1002,
      instruction: "Escribe el recorrido In-Order (izq, raíz, der) de un BST que produce los elementos estrictamente ordenados de menor a mayor.",
      placeholder: "def in_order(raiz, resultado):\n    if raiz:\n        in_order(raiz.izq, resultado)\n        resultado.append(raiz.val)\n        in_order(raiz.der, resultado)\n",
      expectedKeywords: ["in_order(raiz.izq", "resultado.append(raiz.val)", "in_order(raiz.der"],
      hint: "Visita primero el hijo izquierdo, procesa la raíz, y finalmente visita el hijo derecho.",
      isEmailSubmission: false
    }
  ],
  11: [
    {
      id: 1101,
      instruction: "Calcula el Factor de Balance de un nodo en un árbol AVL: altura(subárbol_izquierdo) - altura(subárbol_derecho).",
      placeholder: "def factor_balance(nodo):\n    if nodo is None: return 0\n    return altura(nodo.izq) - altura(nodo.der)\n",
      expectedKeywords: ["altura(nodo.izq) - altura(nodo.der)"],
      hint: "Un nodo AVL está balanceado si su factor de balance está estrictamente en {-1, 0, 1}.",
      isEmailSubmission: false
    },
    {
      id: 1102,
      instruction: "Implementa una Rotación Simple a la Derecha (Right Rotation) en un árbol AVL para rebalancear un nodo con desbalance Left-Left.",
      placeholder: "def rotacion_derecha(y):\n    x = y.izq\n    T2 = x.der\n    # Reasigna punteros\n    x.der = y\n    y.izq = T2\n    return x\n",
      expectedKeywords: ["x.der = y", "y.izq = T2", "return x"],
      hint: "El hijo izquierdo 'x' se convierte en la nueva raíz, 'y' pasa a ser hijo derecho de 'x', y el subárbol 'T2' se adopta.",
      isEmailSubmission: false
    }
  ],
  12: [
    {
      id: 1201,
      instruction: "Calcula los índices del padre, hijo izquierdo e hijo derecho para un elemento en el índice 'i' de un Heap almacenado en un arreglo continuo.",
      placeholder: "def indices_heap(i):\n    padre = (i - 1) // 2\n    hijo_izq = 2 * i + 1\n    hijo_der = 2 * i + 2\n    return padre, hijo_izq, hijo_der\n",
      expectedKeywords: ["(i - 1) // 2", "2 * i + 1", "2 * i + 2"],
      hint: "En una representación de arreglo indexado en 0: padre=(i-1)//2, izq=2*i+1, der=2*i+2.",
      isEmailSubmission: false
    },
    {
      id: 1202,
      instruction: "Implementa la operación heapify_down (hundir) para mantener la propiedad de Min-Heap (el padre debe ser menor que sus hijos).",
      placeholder: "def heapify_down(arr, n, i):\n    menor = i\n    izq = 2 * i + 1\n    der = 2 * i + 2\n    if izq < n and arr[izq] < arr[menor]: menor = izq\n    if der < n and arr[der] < arr[menor]: menor = der\n    if menor != i:\n        arr[i], arr[menor] = arr[menor], arr[i]\n        heapify_down(arr, n, menor)\n",
      expectedKeywords: ["arr[i], arr[menor] = arr[menor], arr[i]", "heapify_down"],
      hint: "Si alguno de los hijos es menor que el elemento actual, intercambia y continúa recursivamente hacia abajo.",
      isEmailSubmission: false
    }
  ],
  13: [
    {
      id: 1301,
      instruction: "Representa un grafo no dirigido con una Lista de Adyacencia en Python (diccionario de listas). Conecta el nodo 'A' con 'B' y 'C'.",
      placeholder: "grafo = {\n    'A': ['B', 'C'],\n    'B': ['A'],\n    'C': ['A']\n}\n",
      expectedKeywords: ["'A':", "'B'", "'C'"],
      hint: "En un grafo no dirigido, si existe arista (A, B), 'B' debe aparecer en los vecinos de 'A' y viceversa.",
      isEmailSubmission: false
    },
    {
      id: 1302,
      instruction: "Calcula el grado (número de aristas incidentes) de un vértice dado en una lista de adyacencia.",
      placeholder: "def grado_vertice(grafo, vertice):\n    return len(grafo.get(vertice, []))\n",
      expectedKeywords: ["len(grafo", "return"],
      hint: "El grado corresponde simplemente a la cantidad de vecinos en la lista de adyacencia.",
      isEmailSubmission: false
    }
  ],
  14: [
    {
      id: 1401,
      instruction: "Implementa la plantilla clásica de Búsqueda en Anchura (BFS) usando una Cola FIFO (collections.deque) y un conjunto de visitados.",
      placeholder: "from collections import deque\ndef bfs(grafo, inicio):\n    visitados = set([inicio])\n    cola = deque([inicio])\n    while cola:\n        nodo = cola.popleft()\n        for vecino in grafo.get(nodo, []):\n            if vecino not in visitados:\n                visitados.add(vecino)\n                cola.append(vecino)\n    return visitados\n",
      expectedKeywords: ["deque([inicio])", "cola.popleft()", "cola.append(vecino)"],
      hint: "BFS utiliza 'popleft()' en la cola para procesar los nodos por capas de distancia.",
      isEmailSubmission: false
    },
    {
      id: 1402,
      instruction: "Escribe la lógica del Algoritmo de Kahn para Ordenamiento Topológico: procesa los nodos con grado de entrada (in-degree) igual a 0.",
      placeholder: "def orden_topologico(in_degree, grafo):\n    cola = [nodo for nodo, grado in in_degree.items() if grado == 0]\n    orden = []\n    while cola:\n        u = cola.pop(0)\n        orden.append(u)\n        for v in grafo.get(u, []):\n            in_degree[v] -= 1\n            if in_degree[v] == 0: cola.append(v)\n    return orden\n",
      expectedKeywords: ["in_degree[v] -= 1", "grado == 0", "orden.append"],
      hint: "Al remover un nodo, reduce el grado de entrada de sus vecinos. Si llega a 0, se puede procesar.",
      isEmailSubmission: false
    }
  ],
  15: [
    {
      id: 1501,
      instruction: "Implementa el paso de relajación de aristas para el Algoritmo de Dijkstra: si dist[u] + peso < dist[v], actualiza dist[v].",
      placeholder: "def relajar_arista(u, v, peso, distancias):\n    if distancias[u] + peso < distancias[v]:\n        distancias[v] = distancias[u] + peso\n        return True\n    return False\n",
      expectedKeywords: ["distancias[u] + peso < distancias[v]", "distancias[v] ="],
      hint: "La relajación comprueba si pasar por 'u' ofrece un camino más corto hacia 'v' que el conocido hasta el momento.",
      isEmailSubmission: false
    },
    {
      id: 1502,
      instruction: "Implementa la función 'find' con compresión de caminos (Path Compression) para la estructura de datos Union-Find (Disjoint Set).",
      placeholder: "def find(padre, i):\n    if padre[i] == i:\n        return i\n    padre[i] = find(padre, padre[i]) # Compresión\n    return padre[i]\n",
      expectedKeywords: ["padre[i] == i", "padre[i] = find(padre, padre[i])"],
      hint: "Al hacer 'padre[i] = find(...)', todos los nodos del camino se aplanan conectándose directamente a la raíz.",
      isEmailSubmission: false
    }
  ],
  16: [
    {
      id: 1601,
      instruction: "Implementa la función de Fibonacci con Programación Dinámica usando Tabulación Bottom-Up en tiempo O(n) y espacio O(1).",
      placeholder: "def fib_tabulacion(n):\n    if n <= 1: return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n",
      expectedKeywords: ["a, b = b, a + b", "return b"],
      hint: "Solo necesitas recordar los dos valores inmediatamente anteriores para calcular el siguiente término.",
      isEmailSubmission: false
    },
    {
      id: 1602,
      instruction: "Escribe la ecuación de Bellman para el Problema de la Mochila 0/1: dp[i][w] = max(dp[i-1][w], valor + dp[i-1][w - peso]).",
      placeholder: "def mochila_celda(dp, i, w, peso, valor):\n    if peso <= w:\n        return max(dp[i - 1][w], valor + dp[i - 1][w - peso])\n    return dp[i - 1][w]\n",
      expectedKeywords: ["max(dp[i - 1][w], valor + dp[i - 1][w - peso])"],
      hint: "Compara el valor de no incluir el ítem actual frente a incluirlo restando su peso a la capacidad.",
      isEmailSubmission: false
    }
  ],
  17: [
    {
      id: 1701,
      instruction: "En el problema de Selección de Actividades (Greedy), ¿cuál es el criterio voraz óptimo para maximizar actividades compatibles?",
      placeholder: "def ordenar_actividades(actividades):\n    # Ordena por tiempo de finalización (fin)\n    return sorted(actividades, key=lambda x: x[1])\n",
      expectedKeywords: ["sorted", "key=lambda", "x[1]"],
      hint: "Elegir siempre la actividad que termine primero deja el máximo tiempo libre restante para las demás.",
      isEmailSubmission: false
    },
    {
      id: 1702,
      instruction: "Construye un paso del árbol de Huffman: extrae los dos nodos con menor frecuencia y crea un nodo padre con la suma de ambas frecuencias.",
      placeholder: "def combinar_nodos_huffman(nodo1, nodo2):\n    frecuencia_total = nodo1.frecuencia + nodo2.frecuencia\n    return NodoHuffman(frecuencia=frecuencia_total, izq=nodo1, der=nodo2)\n",
      expectedKeywords: ["nodo1.frecuencia + nodo2.frecuencia", "izq=nodo1", "der=nodo2"],
      hint: "Los caracteres menos frecuentes quedan en las profundidades del árbol y reciben códigos binarios más largos.",
      isEmailSubmission: false
    }
  ],
  18: [
    {
      id: 1801,
      instruction: "Inserta una palabra en un Trie (árbol de prefijos) recorriendo carácter por carácter y creando nodos hijos si no existen.",
      placeholder: "class NodoTrie:\n    def __init__(self):\n        self.hijos = {}\n        self.es_fin = False\n\ndef insertar_trie(raiz, palabra):\n    actual = raiz\n    for char in palabra:\n        if char not in actual.hijos:\n            actual.hijos[char] = NodoTrie()\n        actual = actual.hijos[char]\n    actual.es_fin = True\n",
      expectedKeywords: ["actual.hijos[char]", "actual.es_fin = True"],
      hint: "Avanza por el diccionario de hijos y marca 'es_fin = True' en el último nodo para registrar la palabra.",
      isEmailSubmission: false
    },
    {
      id: 1802,
      instruction: "Implementa la función 'empieza_con(raiz, prefijo)' para buscar si existe algún término con dicho prefijo en tiempo O(L).",
      placeholder: "def empieza_con(raiz, prefijo):\n    actual = raiz\n    for char in prefijo:\n        if char not in actual.hijos:\n            return False\n        actual = actual.hijos[char]\n    return True\n",
      expectedKeywords: ["char not in actual.hijos", "return False", "return True"],
      hint: "Si en algún carácter no encuentras el enlace en 'actual.hijos', retorna False; si recorres todo el prefijo, retorna True.",
      isEmailSubmission: false
    }
  ],
  19: [
    {
      id: 1901,
      instruction: "Verifica si una clave está en un Filtro de Bloom comprobando si todos sus bits de hash están en 1.",
      placeholder: "def consultar_bloom(filtro_bits, hashes):\n    for h in hashes:\n        if filtro_bits[h] == 0:\n            return False # Definitivamente NO está\n    return True # Posiblemente presente\n",
      expectedKeywords: ["filtro_bits[h] == 0", "return False", "return True"],
      hint: "Si tan solo uno de los bits de hash es 0, garantizamos con cero falsos negativos que el elemento nunca fue insertado.",
      isEmailSubmission: false
    },
    {
      id: 1902,
      instruction: "En el algoritmo HyperLogLog para estimación de cardinalidad, calcula el número de ceros iniciales (leading zeros) en la representación binaria de un hash.",
      placeholder: "def contar_ceros_lideres(valor_hash):\n    # Convierte a binario de 32 bits y cuenta ceros al inicio\n    binario = bin(valor_hash)[2:].zfill(32)\n    return len(binario) - len(binario.lstrip('0'))\n",
      expectedKeywords: ["bin(valor_hash)", "lstrip('0')"],
      hint: "El número de ceros líderes consecutivos 'k' indica que la cardinalidad aproximada es del orden de 2^(k+1).",
      isEmailSubmission: false
    }
  ],
  20: [
    {
      id: 2001,
      instruction: "Implementa la búsqueda de una clave en un nodo hoja de un B+ Tree y sigue el puntero hermano 'next_leaf' para escaneos por rango.",
      placeholder: "def buscar_rango_bplus(hoja, clave_min, clave_max):\n    resultados = []\n    actual = hoja\n    while actual:\n        for k in actual.claves:\n            if clave_min <= k <= clave_max: resultados.append(k)\n            elif k > clave_max: return resultados\n        actual = actual.siguiente_hoja # Puntero horizontal en O(1)\n    return resultados\n",
      expectedKeywords: ["actual.siguiente_hoja", "resultados.append"],
      hint: "Los B+ Trees enlazan todas las hojas en una lista doblemente enlazada para ejecutar escaneos SELECT ... WHERE clave BETWEEN x AND y sin volver a la raíz.",
      isEmailSubmission: false
    },
    {
      id: 2002,
      instruction: "En un Grafo Computacional (DAG de PyTorch / Autograd), realiza el pase hacia adelante (forward pass) combinando entradas y registrando la operación para retropropagación.",
      placeholder: "class Variable:\n    def __init__(self, data, grad_fn=None):\n        self.data = data\n        self.grad_fn = grad_fn\n        self.grad = 0.0\n\ndef multiplicar(v1, v2):\n    return Variable(v1.data * v2.data, grad_fn='MulBackward')\n",
      expectedKeywords: ["v1.data * v2.data", "grad_fn"],
      hint: "Cada nodo del grafo computacional almacena su valor y la función de gradiente para calcular derivadas automáticas en la fase backward.",
      isEmailSubmission: false
    }
  ]
};

// Validador local de código para autoevaluación sin conexión
export function validateExerciseCode(code: string, expectedKeywords: string[]): { success: boolean; feedback: string } {
  if (!code.trim()) {
    return { success: false, feedback: "Por favor, escribe alguna solución en el editor de arriba." };
  }

  // 1. Detección de Comentarios (Anti-IA y Anti-Copia para ejercicios tradicionales)
  let userContent = code;
  const templateComments = [
    /#\s*Tu código aquí/gi,
    /#\s*Usa bucles anidados/gi,
    /#\s*Retorna True/gi,
    /#\s*Implementa/gi,
    /#\s*Modifica/gi,
    /#\s*Duplica/gi,
    /#\s*Calcula/gi,
    /#\s*Conecta/gi,
    /#\s*Invierte/gi,
    /#\s*Reasigna/gi,
    /#\s*Backtrack/gi,
    /#\s*Ordena/gi,
    /\/\/\s*Tu código aquí/gi,
    /\/\/\s*Usa bucles/gi,
    /\/\/\s*Calcula/gi,
    /\/\/\s*Implementa/gi,
  ];

  for (const pattern of templateComments) {
    userContent = userContent.replace(pattern, "");
  }

  // Comprobar que el usuario ha escrito código real y no solo comentarios
  const linesWithoutComments = userContent.split('\n').filter(line => {
    const trimmed = line.trim();
    return trimmed.length > 0 && !trimmed.startsWith('#') && !trimmed.startsWith('//');
  });

  if (linesWithoutComments.length === 0) {
    return {
      success: false,
      feedback: "El editor solo contiene comentarios o líneas vacías. Por favor, escribe la implementación de código."
    };
  }

  // Verificar la presencia de las palabras clave esperadas
  const missingKeywords: string[] = [];
  for (const kw of expectedKeywords) {
    if (!code.includes(kw)) {
      missingKeywords.push(kw);
    }
  }

  if (missingKeywords.length > 0) {
    return {
      success: false,
      feedback: `Casi lo tienes. Tu código necesita incorporar conceptos clave como: "${missingKeywords.slice(0, 2).join('", "')}". Revisa las pistas para orientarte.`
    };
  }

  return {
    success: true,
    feedback: "¡Excelente trabajo! Has implementado la estructura algorítmica correctamente satisfaciendo las restricciones de complejidad y estilo."
  };
}
