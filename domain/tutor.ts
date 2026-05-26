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
      instruction: "DESAFÍO FINAL: Escribe una función 'buscar_duplicados(arr)' que busque si hay elementos duplicados en un arreglo mediante bucles anidados en tiempo cuadrático O(n²). Escríbela y copia la solución para enviarla a quimicabless2020@gmail.com para su revisión manual.",
      placeholder: "def buscar_duplicados(arr):\n    # Usa bucles anidados para comparar elementos\n",
      expectedKeywords: ["def buscar_duplicados", "for", "in", "arr"],
      hint: "Un bucle externo recorre la lista ('i') y un bucle interno recorre a partir de 'i + 1' comparando 'arr[i] == arr[j]'.",
      isEmailSubmission: true
    }
  ],
  2: [
    {
      id: 201,
      instruction: "Escribe un método 'esta_vacia(self)' para una clase Stack en Python que retorne True si la lista 'self.items' está vacía. Debe resolverse en tiempo constante O(1).",
      placeholder: "def esta_vacia(self):\n    # Retorna True si la pila no tiene elementos\n",
      expectedKeywords: ["def esta_vacia", "return", "len", "self.items", "=="],
      hint: "Puedes verificar la longitud usando 'len(self.items) == 0'. Es O(1) porque Python almacena el tamaño de la lista internamente.",
      isEmailSubmission: false
    },
    {
      id: 202,
      instruction: "DESAFÍO FINAL: Implementa una función que invierta una cadena usando una Pila (lista de Python). Inserta cada carácter y luego extráelos uno por uno. Escríbela y cópiala para enviarla a quimicabless2020@gmail.com.",
      placeholder: "def invertir_cadena(cadena):\n    pila = []\n    # Implementa LIFO aquí\n",
      expectedKeywords: ["def invertir_cadena", "append", "pop"],
      hint: "Usa 'append' para meter los caracteres y luego un bucle con 'pop()' para extraerlos en orden inverso.",
      isEmailSubmission: true
    }
  ],
  3: [
    {
      id: 301,
      instruction: "Completa el código para insertar una clave 'id_usuario' con el valor 999 en un diccionario llamado 'registro_hash'. Esto se ejecuta en tiempo O(1) promedio.",
      placeholder: "registro_hash = {}\n# Modifica el diccionario aquí\n",
      expectedKeywords: ["registro_hash", "[", "id_usuario", "]", "=", "999"],
      hint: "La sintaxis básica en Python es 'diccionario[clave] = valor'.",
      isEmailSubmission: false
    }
  ],
  4: [
    {
      id: 401,
      instruction: "Escribe una función recursiva 'contar_nodos(raiz)' que cuente el total de nodos en un árbol binario. Si el nodo raíz es None, retorna 0.",
      placeholder: "def contar_nodos(raiz):\n    if raiz is None: return 0\n    # Suma 1 más los nodos de los subárboles izquierdo y derecho\n",
      expectedKeywords: ["def contar_nodos", "return", "contar_nodos", "left", "right"],
      hint: "Retorna '1 + contar_nodos(raiz.left) + contar_nodos(raiz.right)'. Es un recorrido DFS clásico.",
      isEmailSubmission: false
    }
  ],
  5: [
    {
      id: 501,
      instruction: "Representa un grafo no dirigido de tres nodos (A, B, C) conectados en triángulo usando una Lista de Adyacencia en Python (diccionario).",
      placeholder: "grafo_triangulo = {\n    'A': # ...\n}",
      expectedKeywords: ["grafo_triangulo", "A", "B", "C"],
      hint: "Cada clave representa un nodo y su valor es una lista con los vecinos. 'A' debe conectarse a ['B', 'C'].",
      isEmailSubmission: false
    }
  ],
  6: [
    {
      id: 601,
      instruction: "Escribe la condición interna de intercambio para un algoritmo de ordenamiento Burbuja (Bubble Sort) que compare el elemento actual 'arr[j]' con el siguiente 'arr[j+1]' y los intercambie si el primero es mayor.",
      placeholder: "if arr[j] > arr[j+1]:\n    # Realiza el intercambio en Python\n",
      expectedKeywords: ["arr[j]", "arr[j+1]", "="],
      hint: "En Python puedes hacer intercambio en una sola línea: 'arr[j], arr[j+1] = arr[j+1], arr[j]'.",
      isEmailSubmission: false
    }
  ],
  7: [
    {
      id: 701,
      instruction: "Escribe la lógica para encontrar el índice del medio 'mid' en una búsqueda binaria a partir de los límites 'low' y 'high' usando división entera (//).",
      placeholder: "def busqueda_binaria_mid(low, high):\n    # Calcula mid aquí\n",
      expectedKeywords: ["low", "high", "//", "2"],
      hint: "El índice del medio es '(low + high) // 2'. Usar '//' evita decimales en Python.",
      isEmailSubmission: false
    }
  ],
  8: [
    {
      id: 801,
      instruction: "Escribe una función recursiva de Fibonacci con memoización. Comprueba primero si el número 'n' está en el diccionario 'memo'.",
      placeholder: "memo = {0: 0, 1: 1}\ndef fib_memo(n, memo):\n    # Verifica si ya se calculó\n",
      expectedKeywords: ["def fib_memo", "in memo", "return memo[n]"],
      hint: "Agrega 'if n in memo: return memo[n]' al principio. Esto evita recalculaciones exponenciales y reduce el tiempo a O(n).",
      isEmailSubmission: false
    }
  ],
  9: [
    {
      id: 901,
      instruction: "Crea una función simple que simule un Filtro de Bloom muy básico con un tamaño de arreglo de bits de 8 elementos y todos inicializados en 0.",
      placeholder: "def crear_filtro_bits():\n    # Retorna un arreglo de 8 ceros\n",
      expectedKeywords: ["return", "[0]", "*", "8"],
      hint: "Puedes inicializarlo rápidamente en Python usando '[0] * 8'.",
      isEmailSubmission: false
    }
  ],
  10: [
    {
      id: 1001,
      instruction: "DESAFÍO DE PRODUCCIÓN: Escribe un esquema JSON que represente a un nodo de un Árbol B de orden 3. Debe incluir las claves ('keys') con un máximo de 2 valores y los enlaces de punteros ('children') con un máximo de 3 enlaces. Cópialo y envíalo a quimicabless2020@gmail.com.",
      placeholder: "{\n  \"keys\": [],\n  \"children\": []\n}",
      expectedKeywords: ["keys", "children"],
      hint: "Un árbol B de orden m tiene como máximo m hijos y m-1 llaves en cada nodo.",
      isEmailSubmission: true
    }
  ]
};

// Validador local de código para autoevaluación sin conexión
export function validateExerciseCode(code: string, expectedKeywords: string[]): { success: boolean; feedback: string } {
  if (!code.trim()) {
    return { success: false, feedback: "Por favor, escribe alguna solución en el editor de arriba." };
  }

  // 1. Detección de Comentarios (Anti-IA y Anti-Copia)
  // Limpiamos los comentarios de la plantilla base para no penalizarlos
  let userContent = code;
  const templateComments = [
    /#\s*Tu código aquí/gi,
    /#\s*Usa bucles anidados para comparar elementos/gi,
    /#\s*Retorna True si la pila no tiene elementos/gi,
    /#\s*Implementa LIFO aquí/gi,
    /#\s*Modifica el diccionario aquí/gi,
    /#\s*Suma 1 más los nodos de los subárboles izquierdo y derecho/gi,
    /#\s*Cada clave representa un nodo y su valor es una lista con los vecinos/gi,
    /#\s*Realiza el intercambio en Python/gi,
    /#\s*Calcula mid aquí/gi,
    /#\s*Verifica si ya se calculó/gi,
    /#\s*Retorna un arreglo de 8 ceros/gi,
    /\/\/\s*Tu código aquí/gi,
    /\/\/\s*Usa bucles/gi,
    /\/\/\s*Calcula/gi,
    /\/\/\s*Implementa/gi,
    /#\s*Ejemplo de/gi,
    /#\s*Medición/gi,
    /#\s*Bucle/gi
  ];

  for (const pattern of templateComments) {
    userContent = userContent.replace(pattern, "");
  }

  // Si después de limpiar el código de plantilla, aún contiene símbolos de comentario
  if (userContent.includes("#") || userContent.includes("//") || userContent.includes("/*") || userContent.includes("'''") || userContent.includes('"""')) {
    return {
      success: false,
      feedback: "⚠️ **Se detectaron comentarios en tu código.**\n\nPara esta práctica, está prohibido incluir comentarios explicativos. Esto nos ayuda a asegurar que has escrito el código directamente y no has copiado una explicación generada por IA. Por favor, remueve todos los comentarios y deja únicamente el código limpio."
    };
  }

  // 2. Control de Verbocidad (Evitar soluciones redundantes tipo 1+1+1+1)
  const maxLength = 350;
  if (userContent.length > maxLength) {
    return {
      success: false,
      feedback: `⚠️ **Código demasiado extenso e indirecto (${userContent.length} caracteres).**\n\nBusca la solución estándar y óptima más corta. No des rodeos innecesarios (escribe "2+2" en lugar de "1+1+1+1"). Evita código redundante o estructuras repetitivas innecesarias.`
    };
  }

  // 3. Verificar si faltan palabras clave indispensables
  const missingKeywords: string[] = [];
  for (const kw of expectedKeywords) {
    if (!code.includes(kw)) {
      missingKeywords.push(kw);
    }
  }

  if (missingKeywords.length > 0) {
    return {
      success: false,
      feedback: `⚠️ **Tu código está incompleto o no sigue la estructura estándar.**\n\nFaltan elementos obligatorios para que sea correcto. Asegúrate de incluir: ${missingKeywords.map(k => `\`${k}\``).join(", ")}.`
    };
  }

  return {
    success: true,
    feedback: "✅ **¡Excelente trabajo!** Tu código es limpio, va al grano (sin comentarios ni código redundante) e incluye la estructura de lógica asintótica óptima esperada."
  };
}

// Profesor virtual offline (Lógica del Dominio para simulación local)
export function mockDSAProfessor(prompt: string, moduleTitle: string): string {
  const query = prompt.toLowerCase();
  let response = `🎓 **[Modo Local / Sin Conexión - Profesor QuimiSell]**\n\n`;
  response += `Estás estudiando el **${moduleTitle}**.\n\n`;

  if (query.includes("ejemplo") || query.includes("codigo") || query.includes("código") || query.includes("implementacion") || query.includes("implementación")) {
    response += `Aquí tienes un ejemplo práctico en Python para ilustrar el tema de este módulo:\n\n`;
    if (moduleTitle.includes("MÓDULO 1")) {
      response += `\`\`\`python
# Ejemplo de medición de tiempo O(n) lineal vs O(1) constante
def obtener_primer_elemento(lista):
    return lista[0] if lista else None  # O(1) - Constante

def buscar_elemento_lineal(lista, objetivo):
    for x in lista:                     # O(n) - Lineal
        if x == objetivo:
            return True
    return False
\`\`\`\n*Nota: El bucle O(n) recorre toda la lista en el peor de los casos, por lo que el tiempo de ejecución crece proporcionalmente a 'n'.*`;
    } else if (moduleTitle.includes("MÓDULO 2")) {
      response += `\`\`\`python
# Implementación básica de una Pila (Stack) usando listas
class Pila:
    def __init__(self):
        self.items = []
    def push(self, dato):
        self.items.append(dato)         # O(1)
    def pop(self):
        return self.items.pop() if self.items else None  # O(1)
\`\`\`\n*Las operaciones en los extremos de pilas y colas se resuelven en tiempo constante O(1).*`;
    } else if (moduleTitle.includes("MÓDULO 3")) {
      response += `\`\`\`python
# Función hash muy simple utilizando suma de caracteres ASCII
def hash_simple(clave, tamano_tabla):
    suma_ascii = sum(ord(c) for c in clave)
    return suma_ascii % tamano_tabla
\`\`\`\n*Una buena función hash distribuye las llaves uniformemente para evitar colisiones y mantener el acceso O(1) promedio.*`;
    } else {
      response += `\`\`\`python
# Estructura de código del módulo
def resolver_problema(datos):
    # Lógica de procesamiento
    print("Procesando datos en " + str(datos))
\`\`\`\n*Puedes ver el bloque de código completo en la sección de 'Implementación de Referencia' en la parte central.*`;
    }
  } else if (query.includes("complejidad") || query.includes("big-o") || query.includes("eficiencia") || query.includes("tiempo") || query.includes("espacio")) {
    response += `El análisis de eficiencia en este módulo es muy relevante:\n\n`;
    if (moduleTitle.includes("MÓDULO 1")) {
      response += `* **O(1):** Acceso directo a índices de arreglos o diccionarios.\n* **O(log n):** Algoritmos de búsqueda binaria o inserción en árboles balanceados.\n* **O(n):** Recorridos simples sobre listas o arreglos.\n* **O(n²):** Algoritmos con bucles anidados como Bubble Sort.`;
    } else if (moduleTitle.includes("MÓDULO 2")) {
      response += `* **Arreglos Dinámicos:** Acceso aleatorio $O(1)$, pero insertar al principio es $O(n)$ porque desplaza elementos.\n* **Listas Enlazadas:** Inserción y eliminación en extremos es $O(1)$, pero la búsqueda es $O(n)$ al no tener índice.`;
    } else {
      response += `Para optimizar este tema, busca siempre identificar la operación de mayor peso (término dominante) y redúcela aplicando técnicas como divide y vencerás o memorización.`;
    }
  } else {
    response += `Has preguntado: *"${prompt}"*\n\nPara evitar llamadas a servidores externos y cargos financieros, he resumido la guía académica de este módulo:\n\n`;
    if (moduleTitle.includes("MÓDULO 1")) {
      response += `* **Objetivo:** Medir la eficiencia temporal y espacial del código de forma matemática sin depender de la CPU donde se ejecute.\n* **Concepto clave:** La notación Big-O representa el límite superior (el peor escenario posible) del crecimiento del número de operaciones.`;
    } else if (moduleTitle.includes("MÓDULO 2")) {
      response += `* **Objetivo:** Organizar datos linealmente en memoria contigua (Arreglos) o discontinua mediante nodos conectados por direcciones (Listas Enlazadas).\n* **Estructuras LIFO/FIFO:** Pilas y Colas para gestionar el orden de procesamiento de flujos de datos.`;
    } else if (moduleTitle.includes("MÓDULO 3")) {
      response += `* **Objetivo:** Lograr búsquedas y almacenamiento instantáneos promedio de O(1).\n* **Mecanismo:** El algoritmo calcula un índice a través de una función de dispersión (hash) resolviendo colisiones mediante encadenamiento o direccionamiento abierto.`;
    } else if (moduleTitle.includes("MÓDULO 4")) {
      response += `* **Objetivo:** Estructuras jerárquicas no lineales. Los árboles binarios de búsqueda (BST) balanceados garantizan búsquedas y modificaciones rápidas de O(log n).`;
    } else if (moduleTitle.includes("MÓDULO 5")) {
      response += `* **Objetivo:** Modelar redes complejas formadas por vértices (nodos) y aristas (relaciones). Se exploran recorridos BFS/DFS y algoritmos de optimización de rutas como Dijkstra.`;
    } else {
      response += `Este módulo aborda temas avanzados. Te sugiero ver los **Conceptos de Ingeniería** y la **Profundización Teórica** en el panel principal para estudiar el temario completo del curso.`;
    }
    response += `\n\n*Nota: Para habilitar el motor interactivo en la nube con respuestas dinámicas en tiempo real, reemplaza \`PLACEHOLDER_API_KEY\` con tu API Key de Gemini en el archivo \`.env.local\`.*`;
  }

  return response;
}
