
function getComputationalThinkingPedagogy(moduleId: number): PedagogyData {
  switch (moduleId) {
    case 1:
      return {
        level0Metaphor:
          "Un arquitecto no empieza a colocar ladrillos a lo loco: primero inspecciona el terreno, entrevista a la familia y traza los planos. La ingeniería de software es exactamente igual: entender el problema real antes de picar código.",
        level0Rule:
          "El 80% del tiempo de un ingeniero se invierte en delimitar el problema y diseñar el proceso; el código es solo el resultado final.",
        intermediateArchitecture:
          "Descomposición Modular y Acoplamiento Débil: Diseñar subsistemas con interfaces de entrada y salida claras para que un fallo en la pasarela de pagos no congele el catálogo de productos.",
        intermediatePitfalls:
          "La trampa de asumir que el cliente sabe lo que quiere: no validar las restricciones iniciales lleva a construir software que nadie puede usar.",
        universityTheory:
          "Teoría General de Sistemas de Von Bertalanffy: Un sistema no es la simple suma de sus partes, sino la red de interacciones entre sus componentes y su entorno.",
        universityFormula: "Sistema = \\langle Entidades, Relaciones, Fronteras, Entradas, Salidas \\rangle",
        industryCase:
          "En Amazon, los equipos escriben un documento de 6 páginas (PR/FAQ) especificando todo el producto antes de que un solo ingeniero escriba una sola línea de código.",
      };
    case 2:
      return {
        level0Metaphor:
          "Escribir una receta de cocina en servilletas: si la receta dice claramente 'batir 3 huevos y agregar harina lentamente', cualquier cocinero podrá prepararla sin fallar.",
        level0Rule:
          "El pseudocódigo es el lenguaje universal del pensamiento algorítmico: si no lo puedes explicar en español estructurado, no lo puedes programar.",
        intermediateArchitecture:
          "Gramáticas Formales y Análisis Léxico: El pseudocódigo sigue una sintaxis simplificada que el cerebro humano procesa sin la sobrecarga de puntos y comas o llaves.",
        intermediatePitfalls:
          "Escribir pseudocódigo ambiguo que deja decisiones al aire (ej: 'repetir varias veces' en lugar de 'MIENTRAS i < total').",
        universityTheory:
          "Tesis de Church-Turing: Cualquier algoritmo computable puede ser expresado de forma determinista mediante una secuencia finita de pasos discretos.",
        universityFormula: "Algoritmo = \\text{Secuencia Finita } (s_0, s_1, ..., s_k) \\text{ donde cada } s_i \\text{ es determinista}",
        industryCase:
          "En las entrevistas de Google y Meta, los evaluadores piden primero escribir la idea en pseudocódigo o diagrama en la pizarra antes de tocar el teclado.",
      };
    case 3:
      return {
        level0Metaphor:
          "Una variable es una caja etiquetada con cinta adhesiva donde guardas algo. La etiqueta dice 'edad' y adentro hay un papel que dice '25'.",
        level0Rule:
          "Una variable no es el valor, es la dirección con nombre que le permite a tu programa encontrar el valor en la memoria RAM.",
        intermediateArchitecture:
          "Alineación en Memoria y Tipos Primitivos: Un entero de 32 bits ocupa 4 bytes contiguos; un double IEEE 754 ocupa 8 bytes. Operaciones bitwise permiten empaquetar múltiples banderas booleanas en un solo byte.",
        intermediatePitfalls:
          "El error de coerción implícita de tipos (5 == '5'): sumar un número con un string produce concatenación silenciosa ('10' + 2 = '102').",
        universityTheory:
          "Sistemas de Tipos de Curry-Howard: Los tipos en lenguajes de programación son equivalentes a proposiciones lógicas, y los programas son demostraciones matemáticas de dichas proposiciones.",
        universityFormula: "IEEE 754: \\text{Valor} = (-1)^s \\times (1 + \\text{Mantisa}) \\times 2^{(\\text{Exponente} - 1023)}",
        industryCase:
          "El misil Ariane 5 de la Agencia Espacial Europea explotó en 1996 a los 37 segundos del despegue debido a un desbordamiento de conversión de entero de 64 bits a 16 bits sin validación.",
      };
    case 4:
      return {
        level0Metaphor:
          "Un semáforo en una autopista: si la luz es roja, te detienes; si es verde, avanzas. Las bifurcaciones permiten que tu programa elija caminos distintos según las condiciones del momento.",
        level0Rule:
          "Usa Guard Clauses para validar errores primero y retornar temprano, eliminando la pirámide de la muerte de if/else anidados.",
        intermediateArchitecture:
          "Predicción de Bifurcaciones en la CPU (Branch Prediction): El procesador anticipa qué rama del 'if' se ejecutará. Si el código falla la predicción (Branch Misprediction), la CPU debe vaciar su pipeline de instrucciones perdiendo ~15-20 ciclos de reloj.",
        intermediatePitfalls:
          "Evaluación perezosa mal comprendida: confiar en que una segunda condición se evalúe cuando la primera ya causó un cortocircuito.",
        universityTheory:
          "Álgebra de Boole y Tablas de Verdad: Simplificación de compuertas lógicas mediante las Leyes de De Morgan: !(A && B) == !A || !B.",
        universityFormula: "\\neg(A \\land B) \\iff \\neg A \\lor \\neg B ; \\quad \\neg(A \\lor B) \\iff \\neg A \\land \\neg B",
        industryCase:
          "Los motores de bases de datos como SQLite optimizan sus consultas reordenando las condiciones del WHERE para evaluar primero las más restrictivas y reducir el tiempo de CPU.",
      };
    case 5:
      return {
        level0Metaphor:
          "La cinta transportadora de una fábrica: revisa una por una 10,000 botellas para asegurarse de que tengan tapa. Si alguna no tiene, la aparta.",
        level0Rule:
          "Todo bucle debe tener garantizada su condición de salida; de lo contrario, tu aplicación consumirá el 100% de la CPU en un bucle infinito.",
        intermediateArchitecture:
          "Desenrollado de Bucles (Loop Unrolling) por Compiladores: Compiladores como GCC y Clang transforman bucles pequeños en secuencias de instrucciones planas para evitar saltos en el Program Counter y aprovechar instrucciones SIMD.",
        intermediatePitfalls:
          "Errores de 'Off-by-One' (desfase por uno): iterar hasta i <= arr.length en lugar de i < arr.length, provocando un error de índice fuera de rango.",
        universityTheory:
          "Invariantes de Bucle y Demostración de Terminación de Floyd: Una propiedad lógica que es verdadera antes de la primera iteración, se mantiene verdadera después de cada paso, y demuestra la corrección del resultado al finalizar.",
        universityFormula: "\\{P \\land C\\} \\; S \\; \\{P\\} \\implies \\{P\\} \\; \\text{while } C \\text{ do } S \\; \\{P \\land \\neg C\\}",
        industryCase:
          "El framework React utiliza reconciliación de listas con 'keys' únicas para iterar y actualizar únicamente los nodos del DOM que cambiaron, evitando repintar toda la pantalla.",
      };
    case 6:
      return {
        level0Metaphor:
          "Un operario en una estación de ensamblaje: busca la pieza en el estante (Fetch), lee el manual para saber qué herramienta usar (Decode), y aprieta el tornillo con la máquina (Execute).",
        level0Rule:
          "Toda instrucción que escribes en código termina convertida en pulsos binarios ejecutados por la ALU y los registros de la CPU a la velocidad de la luz.",
        intermediateArchitecture:
          "El Data Path de Von Neumann: El Program Counter (PC) apunta a la siguiente instrucción, el Registro de Instrucción (IR) la retiene, la Unidad de Control genera señales de control, y los buses de direcciones y datos conectan la CPU con la RAM.",
        intermediatePitfalls:
          "El cuello de botella de Von Neumann: La velocidad de procesamiento de la CPU supera enormemente el ancho de banda del bus que la conecta a la RAM, forzando a la CPU a esperar datos.",
        universityTheory:
          "Arquitectura RISC vs CISC: Conjuntos de instrucciones reducidos de longitud fija (ARM/RISC-V) frente a instrucciones complejas de longitud variable (x86-64).",
        universityFormula: "\\text{Tiempo CPU} = \\text{Instrucciones} \\times \\text{CPI (Ciclos por Instrucción)} \\times \\text{Tiempo de Ciclo de Reloj}",
        industryCase:
          "Los procesadores Apple Silicon (M1/M2/M3/M4) y los servidores Graviton de AWS adoptaron la arquitectura ARM por su Data Path de bajo consumo y alta eficiencia energética.",
      };
    case 7:
      return {
        level0Metaphor:
          "Tener un cuaderno de notas en tu mano (0.5 segundos) vs ir a la biblioteca de tu colonia a buscar un libro (5 minutos) vs mandar una carta a otro país en barco (8 años).",
        level0Rule:
          "Los registros y la caché L1 son ultrarrápidos pero minúsculos; la RAM es amplia pero lenta; el disco y la red son gigantescos pero astronómicamente lentos.",
        intermediateArchitecture:
          "El Call Stack y los Stack Frames: Cada función apila registros RSP/RBP con sus variables primitivas locales. Al retornar, la CPU solo decrementa el puntero RSP en 0 ciclos, liberando la memoria al instante sin recolector de basura.",
        intermediatePitfalls:
          "Fuga de memoria (Memory Leak) en el Heap: Crear objetos o suscribirse a eventos y nunca desreferenciarlos, saturando la RAM hasta que el sistema operativo mata el proceso (OOM Killer).",
        universityTheory:
          "Principio de Localidad de Referencia de Denning: Programas bien diseñados exhiben Localidad Temporal (reutilizan datos usados recientemente) y Localidad Espacial (usan datos contiguos en memoria).",
        universityFormula: "\\text{Tiempo Medio de Acceso (AMAT)} = \\text{Hit Time} + (\\text{Miss Rate} \\times \\text{Miss Penalty})",
        industryCase:
          "Bases de datos en memoria como Redis guardan todo en RAM para responder en microsegundos, usando el disco únicamente como respaldo persistente asíncrono.",
      };
    case 8:
      return {
        level0Metaphor:
          "Una tostadora de pan: le metes una rebanada de pan (parámetro), aplica calor (proceso interno), y sale una tostada crujiente (retorno). No mancha la mesa ni modifica la cafetera.",
        level0Rule:
          "Escribe funciones puras: que dependan únicamente de sus parámetros de entrada y no alteren variables globales externas.",
        intermediateArchitecture:
          "Convención de Llamadas ABI (Application Binary Interface): En x86-64, los primeros 6 parámetros de una función se pasan directamente en registros ultra-rápidos (RDI, RSI, RDX, RCX, R8, R9), evitando tocar la RAM.",
        intermediatePitfalls:
          "Efectos secundarios silenciosos (Side Effects): Pasar un objeto a una función y modificar sus propiedades internas, alterando el estado en otras partes no relacionadas de la app.",
        universityTheory:
          "Cálculo Lambda de Alonzo Church: Fundamento matemático de las funciones puras donde el cómputo se expresa mediante la aplicación y abstracción de funciones sin estado mutable.",
        universityFormula: "f: X \\to Y \\quad \\text{donde} \\quad \\forall x_1 = x_2 \\implies f(x_1) = f(x_2)",
        industryCase:
          "Redux en React y los microservicios 'Serverless' en AWS Lambda basan su arquitectura entera en funciones puras sin estado para escalar horizontalmente a millones de peticiones.",
      };
    case 9:
      return {
        level0Metaphor:
          "El paracaídas de emergencia de un avión: no lo usas para volar, pero si un motor falla a 10,000 metros, te salva la vida en lugar de estrellarte.",
        level0Rule:
          "El manejo defensivo de errores no es para ocultar bugs; es para atrapar fallos esperados (red caída, datos corruptos) y recuperarse con dignidad.",
        intermediateArchitecture:
          "Desenrollado de Pila en Excepciones (Stack Unwinding): Cuando se lanza un error ('throw'), el runtime de JS/Python destruye los Stack Frames uno a uno buscando el bloque 'catch' más cercano.",
        intermediatePitfalls:
          "Capturar excepciones con 'catch(e) {}' vacío: silenciar los errores impide que los ingenieros sepan por qué se cayó el sistema en producción.",
        universityTheory:
          "Manejo de Errores por Monadas (Result / Either): En lenguajes modernos como Rust, los errores no son excepciones invisibles, sino valores explícitos Result<T, E> que el compilador te obliga a manejar.",
        universityFormula: "\\text{Result}\\langle T, E \\rangle = \\text{Ok}(T) \\mid \\text{Err}(E)",
        industryCase:
          "Sistemas de misión crítica como los de la NASA y Stripe aplican 'Fail-Fast' y manejo estricto de excepciones: si un dato no cumple las invariantes, se rechaza de inmediato antes de procesar pagos.",
      };
    case 10:
    default:
      return {
        level0Metaphor:
          "El control de calidad de una fábrica de autos: antes de que el vehículo salga a la calle, se prueban los frenos, las luces y la resistencia en caso de choque para certificar que resistirá el mundo real.",
        level0Rule:
          "Un buen ingeniero no confía ciegamente en el código generado por IA; audita la seguridad, comprueba casos borde y escribe pruebas que certifiquen el funcionamiento.",
        intermediateArchitecture:
          "Auditoría Estática y Dinámica de Sistemas: Comprobar la coherencia de tipos, la validación de límites, la ausencia de variables globales y la resiliencia ante entradas maliciosas.",
        intermediatePitfalls:
          "Aceptar código que pasa la prueba 'del camino feliz' pero colapsa cuando el usuario ingresa strings vacíos, números negativos o caracteres especiales.",
        universityTheory:
          "Verificación Formal de Software y Pruebas de Propiedades (Property-Based Testing): Demostrar que un sistema cumple sus especificaciones para todo el dominio de entradas posibles.",
        universityFormula: "\\forall x \\in \\text{Dominio}, \\quad \\text{Invariante}(f(x)) = \\text{True}",
        industryCase:
          "En OpenAI, Google y Microsoft, los ingenieros utilizan herramientas automáticas de auditoría y benchmarks de evaluación para certificar que el código generado por modelos LLM no contenga brechas de seguridad.",
      };
  }
}


function getAlgorithmsModulePedagogy(moduleId: number): PedagogyData {
  switch (moduleId) {
    case 1:
      return {
        level0Metaphor:
          "Buscar a alguien en una libreta de un millón de nombres: hojear página por página es O(n) (tiempo lineal); abrirla por la mitad una y otra vez es O(log n) (tiempo logarítmico: solo 20 pasos); si tienes un índice directo, es O(1) (tiempo constante).",
        level0Rule:
          "Big-O nunca mide segundos de reloj (el hardware varía), sino cómo crece el número de operaciones de CPU cuando el tamaño de entrada (n) se multiplica por millones.",
        intermediateArchitecture:
          "Ciclos de instrucción y cuello de botella de Von Neumann: Un algoritmo O(n²) para n=100,000 colapsa la CPU ejecutando 10¹⁰ instrucciones (~100 segundos de cómputo ininterrumpido), mientras que O(n log n) ejecuta ~1.6×10⁶ instrucciones (~0.002 segundos).",
        intermediatePitfalls:
          "Ignorar las constantes ocultas en algoritmos teóricos: un algoritmo O(n) con constante oculta c=5,000 puede ser en la práctica más lento que un O(n log n) con c=2 para arreglos pequeños.",
        universityTheory:
          "Definición formal asintótica con límites de Cauchy: f(n) ∈ O(g(n)) ⟺ ∃ c > 0, n₀ > 0 : 0 ≤ f(n) ≤ c · g(n)  ∀ n ≥ n₀. Cotas complementarias Ω(g(n)) (cota inferior) y Θ(g(n)) (cota ajustada exacta).",
        universityFormula: "f(n) = O(g(n)) ⟺ lim sup_{n ➔ ∞} (f(n) / g(n)) < ∞",
        industryCase:
          "Google descarta terminantemente revisiones de código que contengan algoritmos cuadráticos O(n²) en flujos de indexación, ya que procesar 10 millones de URLs llevaría 27 horas en lugar de milisegundos.",
      };

    case 2:
      return {
        level0Metaphor:
          "La memoria RAM es una hilera infinita de casilleros numerados con candados idénticos. Un arreglo contiguo ocupa casilleros contiguos (101, 102, 103...), por lo que el cartero va directo al casillero base + índice sin buscar.",
        level0Rule:
          "Acceder a arr[i] es O(1) porque el procesador calcula la dirección física directamente con una multiplicación en hardware: Dir = Base + (i × TamañoElemento).",
        intermediateArchitecture:
          "Líneas de Caché L1/L2 (64 bytes) y Localidad Espacial: Al acceder a arr[0], el controlador de memoria carga en un solo ciclo los 16 enteros adyacentes en la memoria caché ultrarrápida del procesador (~1 ns de latencia).",
        intermediatePitfalls:
          "Confundir capacidad con longitud en arreglos dinámicos (std::vector / ArrayList / slices). Al sobrepasar la capacidad, el motor debe reservar un nuevo bloque contiguo de tamaño doble (2×) y copiar todos los elementos en O(n).",
        universityTheory:
          "Análisis Amortizado por el Método del Crédito Bancario: Aunque duplicar la capacidad cuesta O(n), ocurre tan infrecuentemente (cada 2^k inserciones) que el costo promedio distribuido por inserción es estrictamente O(1).",
        universityFormula: "Costo Amortizado = \\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1}) = O(1)",
        industryCase:
          "El motor V8 de Node.js y Google Chrome almacena arreglos numéricos puros como bloques de memoria plana (PACKED_ELEMENTS) para maximizar instrucciones vectoriales SIMD de la CPU.",
      };

    case 3:
      return {
        level0Metaphor:
          "Una lista enlazada es una búsqueda del tesoro: cada pista (nodo) tiene un pergamino con el valor y un mapa que señala dónde está escondida la siguiente pista en algún lugar remoto de la isla.",
        level0Rule:
          "Insertar al inicio o eliminar un nodo sabiendo su referencia es O(1) instantáneo: solo cambias la flecha del puntero sin mover de lugar a ningún otro elemento de la memoria.",
        intermediateArchitecture:
          "Fragmentación del Heap y Cache Misses: Cada nodo de la lista se crea con malloc/new en páginas distantes de RAM. Seguir un puntero 'next' fuerza a la CPU a esperar entre 60 y 100 ns por cada salto debido a fallas de caché L3.",
        intermediatePitfalls:
          "Pérdida de referencias y fugas de memoria (Memory Leaks): Si reasignas el puntero de la cabeza antes de conectar el nuevo nodo (head = new_node sin hacer new_node.next = head), el resto de la lista queda inaccesible en el Heap.",
        universityTheory:
          "Invariantes de Listas Doblemente Enlazadas y Centinelas (Dummy Nodes): Uso de nodos fantasma 'head' y 'tail' para eliminar todos los casos especiales (lista vacía, inserción en extremos) y garantizar código sin condicionales if-else.",
        universityFormula: "Invariante: \\forall x \\neq \\text{tail}, \\; x.\\text{next}.\\text{prev} = x",
        industryCase:
          "El planificador del kernel de Linux (CFS) y la caché LRU (Least Recently Used) de Redis utilizan listas doblemente enlazadas circulares para reubicar nodos en tiempo O(1) estricto.",
      };

    case 4:
      return {
        level0Metaphor:
          "Una Pila (Stack) es una torre de platos limpios: el último que lavas es el primero que tomas (LIFO). Una Cola (Queue) es la fila del banco: la primera persona en llegar es la primera en ser atendida (FIFO).",
        level0Rule:
          "La Pila gobierna el pasado (cómo retroceder o deshacer Ctrl+Z); la Cola gobierna el futuro (el orden estricto de tareas pendientes por procesar).",
        intermediateArchitecture:
          "Call Stack del Procesador y Registros RSP/RBP: Cada llamada a función empuja un Stack Frame con sus variables locales y la dirección de retorno. Si una función se llama recursivamente sin límite, agota los 1-8 MB del Stack causando Stack Overflow.",
        intermediatePitfalls:
          "Implementar una cola usando un arreglo simple desplazando con arr.shift() o list.pop(0): desplazar todos los elementos a la izquierda cuesta O(n). En producción debe usarse un arreglo circular (Ring Buffer) o una lista enlazada.",
        universityTheory:
          "Teorema de Autómatas de Pila (PDA): Las pilas son computacionalmente equivalentes a los lenguajes libres de contexto (Chomsky Nivel 2). Permiten evaluar expresiones aritméticas en notación postfija (Algoritmo Shunting-yard de Dijkstra).",
        universityFormula: "LIFO: \\text{Pop}(\\text{Push}(S, x)) = S \\; \\land \\; \\text{Top} = x",
        industryCase:
          "Kafka, RabbitMQ y AWS SQS procesan billones de mensajes diarios estructurados estrictamente como Colas Distribuidas (FIFO) con semántica de entrega garantizada.",
      };

    case 5:
      return {
        level0Metaphor:
          "Una Tabla Hash es el casillero de un hotel con 100 casilleros: cuando llegas con tu apellido 'García', una fórmula matemática calcula al instante casillero = 42 y el recepcionista va directo sin revisar los otros 99.",
        level0Rule:
          "Acceso, inserción y eliminación en O(1) tiempo promedio gracias a la conversión matemática de la clave alfanumérica en un índice numérico entero.",
        intermediateArchitecture:
          "Estrategias de Colisión: Encadenamiento Separado (listas enlazadas por bucket) vs Direccionamiento Abierto (Linear/Quadratic Probing). Factor de Carga α = n / m: si supera 0.75, la tabla debe hacer Rehash duplicando m.",
        intermediatePitfalls:
          "Ataques de Denegación de Servicio por Colisión (HashDoS): Atacantes maliciosos envían miles de claves diseñadas para chocar en el mismo bucket, degradando el rendimiento de O(1) a O(n) y saturando el servidor web.",
        universityTheory:
          "Familia de Hashing Universal y Dispersión Uniforme: Una familia H de funciones hash es universal si ∀ x ≠ y, P(h(x) = h(y)) ≤ 1/m. Algoritmos modernos como MurmurHash3 y SipHash protegen la integridad asintótica.",
        universityFormula: "α = n / m ≤ 0.75 ⟹ E[Búsqueda] = 1 + α/2 = O(1)",
        industryCase:
          "PostgreSQL, Python 3 (SipHash-2-4) y Rust protegen sus diccionarios de ataques DoS asignando una semilla aleatoria (secret random seed) en cada inicio del proceso.",
      };

    case 6:
      return {
        level0Metaphor:
          "La recursión es mirar entre dos espejos enfrentados: cada reflejo contiene al anterior ligeramente más pequeño, hasta que un reflejo final se topa con un muro opaco (el caso base) y la luz regresa por fin.",
        level0Rule:
          "Todo algoritmo recursivo requiere obligatoriamente dos componentes: un Caso Base ineludible (que no se llama a sí mismo) y un Paso Inductivo que reduce el tamaño del problema.",
        intermediateArchitecture:
          "Consumo del Call Stack y Optimización de Cola (Tail Call Optimization - TCO): Si la llamada recursiva es la última instrucción ejecutada, un compilador inteligente puede reutilizar el mismo Stack Frame sin consumir memoria adicional O(1).",
        intermediatePitfalls:
          "Recursión con subproblemas solapados (como Fibonacci ingenuo): calcular fib(40) repite millones de veces los mismos cálculos, disparando la complejidad a O(2ⁿ) y congelando el equipo.",
        universityTheory:
          "El Teorema Maestro para recurrencias divide y vencerás: T(n) = aT(n/b) + f(n). Clasifica formalmente la complejidad comparando f(n) con n^{log_b(a)} en tres casos cerrados.",
        universityFormula: "T(n) = a · T(n/b) + Θ(n^k log^p n)",
        industryCase:
          "Los motores de ajedrez como Stockfish utilizan recursión con poda alfa-beta (Alpha-Beta Pruning) para explorar 70 millones de posiciones por segundo descartando ramas subóptimas.",
      };

    case 7:
    case 8:
      return {
        level0Metaphor:
          "Ordenar cartas en la mano: Insertion Sort toma cada carta nueva y la desliza hacia la izquierda hasta su lugar correcto. MergeSort divide el mazo en dos pilas iguales, ordena cada pila y las fusiona de vuelta como un cierre de cremallera.",
        level0Rule:
          "Los ordenamientos elementales son O(n²) para principiantes; los avanzados son O(n log n), el límite teórico insuperable para cualquier algoritmo basado en comparaciones.",
        intermediateArchitecture:
          "Estabilidad de Ordenamiento: Un algoritmo es estable si conserva el orden relativo original de elementos con claves idénticas. Vital en bases de datos para ordenar primero por apellido y luego por fecha.",
        intermediatePitfalls:
          "El peor caso O(n²) de QuickSort: Si el pivote elegido es siempre el mínimo o el máximo (e.g. en un arreglo ya ordenado), QuickSort degenera a particiones desbalanceadas 1 vs n-1.",
        universityTheory:
          "Teorema del Límite Inferior por Árboles de Decisión: Cualquier algoritmo de ordenamiento basado en comparaciones de dos elementos requiere al menos log₂(n!) = Ω(n log n) comparaciones en el peor caso.",
        universityFormula: "log_2(n!) = ∑_{i=1}^n log_2(i) = Θ(n log n)",
        industryCase:
          "Python y Java utilizan Timsort (creado por Tim Peters), un híbrido de MergeSort y Insertion Sort que detecta tramos naturales ya ordenados logrando O(n) en arreglos pre-ordenados.",
      };

    case 9:
      return {
        level0Metaphor:
          "Adivinar un número secreto entre 1 y 100: Si preguntas '¿Es 50?' y te dicen 'Mayor', descartas 50 posibilidades de un solo tiro. Con solo 7 preguntas puedes adivinar entre 100 números; con 30 preguntas, entre mil millones.",
        level0Rule:
          "Búsqueda Binaria requiere estrictamente que el arreglo esté ordenado. Cada comparación reduce el espacio de búsqueda exactamente a la mitad (log₂ n).",
        intermediateArchitecture:
          "Prevención del Bug Histórico de Java (Joshua Bloch): Escribir mid = (low + high) / 2 produce desbordamiento de enteros (Integer Overflow) para arreglos con más de 2³⁰ elementos. La fórmula correcta es mid = low + (high - low) / 2.",
        intermediatePitfalls:
          "Condición de parada en el bucle: Usar while (low < high) en lugar de while (low <= high) suele provocar que el algoritmo falle silenciosamente al buscar elementos en los bordes.",
        universityTheory:
          "Búsqueda Binaria sobre el Espacio de Respuestas: No solo busca elementos en arreglos, sino la solución óptima en problemas monótonos donde una función predicado f(x) cambia de True a False (e.g. capacidad mínima de envío).",
        universityFormula: "Pasos Máximos = ⌈ log_2(n) ⌉",
        industryCase:
          "Git Bisect utiliza búsqueda binaria sobre el historial de commits (DAG linealizado) para aislar el commit exacto que introdujo un bug entre 50,000 commits en menos de 16 pruebas.",
      };

    case 10:
    case 11:
      return {
        level0Metaphor:
          "Un Árbol Binario de Búsqueda es un bibliotecario ordenado: todo libro con título menor al actual va a la estantería izquierda; todo libro mayor va a la derecha. Un árbol balanceado (AVL) reorganiza automáticamente las ramas para que ninguna crezca demasiado chueca.",
        level0Rule:
          "Invariante BST: izq.valor < nodo.valor < der.valor. Garantiza búsquedas en O(h), donde h es la altura del árbol.",
        intermediateArchitecture:
          "Riesgo de Degeneración a Lista: Insertar elementos ordenados [1, 2, 3, 4, 5] en un BST desbalanceado produce un árbol degenerado de altura h = n, degradando la búsqueda a O(n). Los árboles AVL aplican rotaciones para mantener h ≤ 1.44 log₂(n).",
        intermediatePitfalls:
          "Eliminación de un nodo con dos hijos: Debe sustituirse por su sucesor in-order (el mínimo del subárbol derecho) o predecesor in-order, y luego eliminar dicho sucesor sin romper los punteros.",
        universityTheory:
          "Factor de Balance AVL: Balance(N) = Altura(izq) - Altura(der) ∈ {-1, 0, 1}. Desbalances Left-Left y Right-Right se resuelven con rotación simple en O(1); Left-Right y Right-Left con rotación doble en O(1).",
        universityFormula: "h_{AVL} < 1.4404 · log_2(n + 2) - 0.3277 = O(log n)",
        industryCase:
          "std::map de C++ y TreeMap de Java están implementados con Árboles Rojo-Negro (Red-Black Trees), una variante con reglas de balance ligeramente más laxas que reduce el número de rotaciones al insertar.",
      };

    case 12:
      return {
        level0Metaphor:
          "Un Montículo (Heap) es la sala de urgencias de un hospital: no atiende por orden de llegada, sino que el paciente con mayor gravedad (prioridad máxima) siempre está en la cima listo para entrar a cirugía.",
        level0Rule:
          "Un Max-Heap garantiza que el nodo padre es siempre mayor o igual que sus hijos. La extracción del máximo es O(log n) y la consulta del tope es O(1).",
        intermediateArchitecture:
          "Almacenamiento Continuo en Arreglos sin Punteros: Un árbol binario completo se almacena limpiamente en un arreglo plano: padre = (i-1)//2, hijo_izq = 2i+1, hijo_der = 2i+2. Cero consumo extra en punteros de 64 bits.",
        intermediatePitfalls:
          "Construir un Heap insertando elementos uno a uno con n inserciones toma O(n log n). La construcción óptima (Algoritmo de Floyd / Heapify Bottom-Up) se ejecuta en tiempo lineal estricto O(n).",
        universityTheory:
          "Demostración de Build-Heap O(n) por Serie Aritmético-Geométrica: La mayoría de los nodos residen en las hojas (altura 0), por lo que la suma de alturas multiplicada por la cantidad de nodos a cada nivel converge a una constante 2n.",
        universityFormula: "∑_{h=0}^{⌊log n⌋} (n / 2^{h+1}) · O(h) = O(2n) = O(n)",
        industryCase:
          "El algoritmo de Dijkstra para rutas de GPS y el planificador de hilos de Android utilizan Colas de Prioridad (Min-Heaps) para seleccionar el siguiente evento con menor timestamp en O(log n).",
      };

    case 13:
    case 14:
    case 15:
      return {
        level0Metaphor:
          "Un Grafo es la red de vuelos mundiales: las ciudades son vértices (nodos) y los vuelos entre ellas son aristas (enlaces con distancia en km). BFS expande ondas concéntricas como una gota en agua; DFS explora un túnel hasta el final antes de retroceder.",
        level0Rule:
          "BFS usa una Cola FIFO y encuentra el camino con menor número de aristas. Dijkstra usa una Cola de Prioridad y encuentra el camino de menor costo ponderado en aristas con pesos positivos.",
        intermediateArchitecture:
          "Matriz de Adyacencia O(V²) vs Lista de Adyacencia O(V + E): En grafos dispersos del mundo real (donde cada usuario tiene ~500 amigos entre 3,000M), una matriz consumiría terabytes vacíos. Las listas de adyacencia son el estándar industrial.",
        intermediatePitfalls:
          "Ejecutar Dijkstra con aristas de peso negativo: Dijkstra asume codiciosamente que agregar aristas incrementa el costo. Con pesos negativos entra en bucles erróneos; se debe utilizar el Algoritmo de Bellman-Ford O(V · E).",
        universityTheory:
          "Lema del Apretón de Manos (Handshaking Lemma): En todo grafo no dirigido, la suma de los grados de todos los vértices es exactamente el doble del número de aristas: ∑ deg(v) = 2|E|. Por tanto, el número de vértices de grado impar es siempre par.",
        universityFormula: "Dijkstra Complejidad = O((V + E) · log V)",
        industryCase:
          "Google Maps y Uber calculan rutas óptimas en tiempo real preprocesando la red vial con algoritmos de grafos basados en Jerarquías de Contracción (Contraction Hierarchies) acelerando Dijkstra a microsegundos.",
      };

    case 16:
      return {
        level0Metaphor:
          "Escribir en una pizarra 1 + 1 + 1 + 1 = 4. Si añades '+ 1', no vuelves a contar los primeros cuatro desde cero: recuerdas que la suma daba 4 y le sumas 1 = 5. Eso es Programación Dinámica: recordar el pasado para no repetir trabajo.",
        level0Rule:
          "Transforma algoritmos de fuerza bruta exponenciales O(2ⁿ) en tiempos polinomiales O(n · k) guardando en una tabla (memo/dp) los resultados de subproblemas que se repiten.",
        intermediateArchitecture:
          "Top-Down con Memoización (Recursión + Hash/Arreglo) vs Bottom-Up con Tabulación (Bucles iterativos ordenados): Bottom-up evita el gasto del Call Stack y permite optimizar el espacio reteniendo solo las últimas filas (Space Optimization).",
        intermediatePitfalls:
          "Aplicar DP a problemas que no cumplen la Subestructura Óptima: Si la solución global óptima no puede construirse a partir de las soluciones óptimas de sus subproblemas, la ecuación de Bellman fallará.",
        universityTheory:
          "Ecuación de Recurrencia de Bellman y Principio de Optimalidad: Una política óptima tiene la propiedad de que, sean cuales sean el estado inicial y las decisiones tomadas, las decisiones restantes deben constituir una política óptima respecto al estado resultante.",
        universityFormula: "dp[i][w] = max(dp[i-1][w], v_i + dp[i-1][w - w_i])",
        industryCase:
          "El algoritmo de Git Diff (LCS - Longest Common Subsequence) y el corrector ortográfico de Microsoft Word (Distancia de Levenshtein) utilizan matrices de programación dinámica cuadráticas.",
      };

    case 17:
      return {
        level0Metaphor:
          "Dar cambio de dinero con monedas: Si debes devolver 37 centavos, tomas primero la moneda más grande posible (25¢), luego la siguiente (10¢), y luego dos de 1¢. Un algoritmo voraz toma la mejor decisión inmediata sin mirar atrás.",
        level0Rule:
          "Los algoritmos voraces (Greedy) eligen la opción localmente óptima en cada paso con la esperanza de alcanzar el óptimo global; solo funcionan cuando se demuestra matemáticamente la Propiedad de Elección Voraz.",
        intermediateArchitecture:
          "Compresión de Huffman en Sistemas de Archivos: Asigna códigos de longitud variable: las letras más frecuentes (como 'e' y 'a') reciben códigos binarios muy cortos (1 o 2 bits); las infrecuentes ('z', 'x') reciben códigos largos.",
        intermediatePitfalls:
          "La trampa de asumir que Greedy siempre funciona: Para monedas de denominaciones [1, 3, 4], dar cambio de 6 con Greedy daría 4 + 1 + 1 (3 monedas), cuando la solución óptima es 3 + 3 (2 monedas). Allí se requiere DP.",
        universityTheory:
          "Teoría de Matroides de Whitney: Una estructura algebraica (E, I) que cumple los axiomas de subconjuntos independientes garantiza formalmente que el algoritmo voraz encuentra el óptimo global.",
        universityFormula: "Longitud Media = L = ∑_{i=1}^n p_i · l_i ≥ H(X) = -∑ p_i log_2 p_i",
        industryCase:
          "Los formatos de compresión ZIP, GZIP y JPEG utilizan Codificación de Huffman combinada con LZ77 para comprimir archivos multimedia sin pérdida de fidelidad.",
      };

    case 18:
      return {
        level0Metaphor:
          "El teclado predictivo de tu teléfono: al escribir 'alg', el sistema navega un árbol de letras donde 'a' se conecta a 'l', y esta a 'g'. De ahí cuelgan 'algoritmo', 'álgebra' y 'algodón', mostrándote sugerencias instantáneas.",
        level0Rule:
          "Un Trie busca prefijos de palabras en tiempo O(L), donde L es la longitud de la palabra buscada, ¡completamente independiente de si el diccionario contiene 10 palabras o 10 millones!",
        intermediateArchitecture:
          "Árboles de Segmentos (Segment Trees) con Lazy Propagation: Permiten actualizar rangos de arreglos gigantes y consultar la suma, mínimo o máximo de un intervalo [L, R] en tiempo O(log n) en lugar de O(n).",
        intermediatePitfalls:
          "Consumo excesivo de memoria en Tries ingenuos: Si cada nodo contiene un arreglo de 26 o 256 punteros (la mayoría vacíos), un diccionario puede consumir cientos de megabytes. Se mitiga comprimiendo cadenas lineales (Radix Tree / Patricia Trie).",
        universityTheory:
          "Radix Tree y Fenwick Tree (Binary Indexed Tree): Un árbol de Fenwick almacena sumas acumuladas utilizando operaciones a nivel de bits con el bit menos significativo (i & -i), logrando actualizaciones y consultas en O(log n) con solo O(n) memoria plana.",
        universityFormula: "Actualización Fenwick: i ← i + (i & -i)",
        industryCase:
          "El autocompletado del buscador de Google y las tablas de enrutamiento IP de los routers Cisco BGP utilizan Tries y Radix Trees para resolver prefijos de red a velocidad de hardware.",
      };

    case 19:
      return {
        level0Metaphor:
          "El detector de metales del aeropuerto: Si pita, es posible que lleves una moneda o una hebilla (posible falsa alarma / falso positivo); pero si NO pita, el guardia tiene la certeza casi absoluta de que no llevas una barra de acero.",
        level0Rule:
          "Un Filtro de Bloom garantiza CERO falsos negativos: si dice que un elemento NO está, definitivamente no está. Si dice que SÍ está, existe una pequeña probabilidad calculable de falso positivo.",
        intermediateArchitecture:
          "Eficiencia Asombrosa de Memoria: Mientras una tabla hash requeriría almacenar cadenas completas (e.g. 50 bytes por URL), un Filtro de Bloom solo almacena un arreglo de bits compacto (~10 bits por elemento), reduciendo el uso de RAM en más del 95%.",
        intermediatePitfalls:
          "Los Filtros de Bloom tradicionales no permiten eliminar elementos (hacer delete): poner un bit en 0 podría romper el hash de otros elementos que compartan ese mismo bit. Para soportar borrados se usa un Counting Bloom Filter.",
        universityTheory:
          "Probabilidad Formal de Falsos Positivos: Dados m bits, n elementos y k funciones de hash independientes, la probabilidad de falso positivo p se minimiza cuando k = (m/n) · ln(2).",
        universityFormula: "p ≈ (1 - e^{-kn/m})^k ;  k_{óptimo} = (m/n) · ln 2",
        industryCase:
          "Apache Cassandra, Google Bigtable y RocksDB consultan un Filtro de Bloom en memoria RAM antes de leer el disco SSD. Si el filtro dice que la fila no existe, se ahorra una costosa lectura mecánica de I/O.",
      };

    case 20:
    default:
      return {
        level0Metaphor:
          "Los cimientos de un rascacielos: los algoritmos y estructuras de datos no son un ejercicio académico aislado; son los pilares invisibles que sostienen las bases de datos de miles de millones de usuarios, los motores de IA y los kernels de sistemas operativos.",
        level0Rule:
          "La arquitectura de datos correcta supera a cualquier supercomputadora: un mal algoritmo O(n²) colapsa el centro de datos más potente, mientras que un buen diseño O(1) o O(log n) funciona sin esfuerzo en un dispositivo móvil.",
        intermediateArchitecture:
          "B+ Trees en Motores de Bases de Datos (PostgreSQL / MySQL InnoDB): Las ramas se mantienen amplias (factor de abanico fan-out de 100 a 1000) para que la altura del árbol sea de solo 3 o 4 niveles, minimizando los accesos a disco.",
        intermediatePitfalls:
          "Premature Optimization vs Arquitectura Escalable: Donald Knuth advertía sobre optimizaciones prematuras en código insignificante; sin embargo, elegir la estructura de datos incorrecta al inicio del sistema es un error de arquitectura irreparable.",
        universityTheory:
          "LSM-Trees (Log-Structured Merge-Trees) y Grafos de Computación (DAGs): Las bases NoSQL transforman escrituras aleatorias lentas en escrituras secuenciales en disco mediante MemTables en RAM y SSTables inmutables.",
        universityFormula: "Profundidad B+Tree = h ≤ ⌈ log_{⌈m/2⌉} ((n+1)/2) ⌉ + 1",
        industryCase:
          "PyTorch y TensorFlow modelan modelos de redes neuronales como Grafos Acíclicos Dirigidos (DAGs) de tensores, ejecutando algoritmos de ordenamiento topológico y diferenciación automática para entrenar modelos LLM a escala petabyte.",
      };
  }
}

import React, { useState } from 'react';

export type AcademicLevel = 'all' | 'level0' | 'intermediate' | 'university';

interface LevelProgressiveViewProps {
  courseId?: string;
  moduleId: number;
  moduleTitle: string;
  theoryContent: string;
  keyConcepts: string[];
}

interface PedagogyData {
  level0Metaphor: string;
  level0Rule: string;
  intermediateArchitecture: string;
  intermediatePitfalls: string;
  universityTheory: string;
  universityFormula: string;
  industryCase: string;
}

function getCoursePedagogy(courseId: string, moduleId: number): PedagogyData {
  switch (courseId) {
    case 'complejidad_algoritmica':
      return {
        level0Metaphor:
          'Imagina cocinar para 1 persona vs cocinar para un estadio de 80,000 personas. Un algoritmo O(1) es hervir agua en una tetera mágica instantánea; un algoritmo O(n²) significa que cada comensal debe saludar personalmente de mano a todos los demás del estadio.',
        level0Rule:
          'Big-O nunca mide segundos de reloj (el hardware cambia), sino el ratio de crecimiento de las operaciones cuando la entrada tiende a infinito.',
        intermediateArchitecture:
          'Cómputo en GPUs y aceleradores: FLOPs (Floating Point Operations Per Second). En modelos Transformer, el mecanismo de Auto-Atención escala en O(n² · d), saturando la memoria HBM si la ventana de contexto supera 32k tokens sin FlashAttention.',
        intermediatePitfalls:
          'La trampa de las constantes ocultas: un algoritmo O(n) con una constante c = 10,000 puede ser más lento en la práctica que un O(n log n) con c = 2 para valores pequeños de n.',
        universityTheory:
          'Clases de Complejidad P vs NP, NP-Completo y NP-Hard. Reducción polinomial de Karp (L₁ ≤p L₂) y el problema del Millenio P vs NP.',
        universityFormula: 'f(n) = O(g(n)) ⟺ ∃ c > 0, n₀ > 0 : |f(n)| ≤ c · |g(n)|  ∀ n ≥ n₀',
        industryCase:
          'Google DeepMind y OpenAI optimizan modelos fundacionales reemplazando atención estándar O(n²) con algoritmos de atención dispersa o lineal O(n) como FlashAttention-2.',
      };

    case 'matematica':
      return {
        level0Metaphor:
          'La matemática para programar no es memorizar fórmulas aburridas: es el mapa cartográfico que te permite navegar laberintos lógicos sin perderte, calcular probabilidades de éxito y entender cómo las máquinas aprenden mediante prueba y ajuste continuo.',
        level0Rule:
          'Un algoritmo es simplemente una función matemática f: X ➔ Y que mapea entradas discretas en salidas predecibles.',
        intermediateArchitecture:
          'Álgebra lineal en memoria contigua: las matrices se almacenan en orden fila-mayor (Row-Major en C/Python) o columna-mayor (Column-Major en Fortran/MATLAB). Alinear matrices en bloques potencia las instrucciones SIMD (AVX-512) del procesador.',
        intermediatePitfalls:
          'Cancelación catastrófica en punto flotante IEEE 754: restar dos números flotantes casi idénticos pierde todos los dígitos significativos de precisión.',
        universityTheory:
          'Espacios de Hilbert, descomposición en valores singulares (SVD), teorema espectral y descenso de gradiente estocástico sobre variedades riemannianas.',
        universityFormula: '∇f(w) = [∂f/∂w₁, ∂f/∂w₂, ..., ∂f/∂wₙ]ᵀ ;  wₜ₊₁ = wₜ - η · ∇f(wₜ)',
        industryCase:
          'Los motores de recomendación de Netflix y Spotify utilizan Descomposición en Valores Singulares (SVD) para factorizar matrices de usuarios y películas de 500M × 100k dimensiones.',
      };

    case 'clean_code_solid':
      return {
        level0Metaphor:
          'Escribir código limpio sin pruebas automatizadas es como caminar en la cuerda floja sin red de seguridad: Clean Code y QA son dos caras de la misma moneda. Una arquitectura limpia desacoplada (SOLID) permite testear en milisegundos, y una suite de pruebas automatizadas te otorga el coraje de refactorizar sin miedo a romper producción.',
        level0Rule:
          'Cualquier refactorización sin pruebas unitarias automatizadas no es una mejora: es solo mover bugs de sitio. Aplica la Pirámide de Pruebas (70% Unit con Vitest/pytest, 20% Integración con MSW, 10% E2E con Playwright) y el ciclo Red-Green-Refactor.',
        intermediateArchitecture:
          'Arquitectura Hexagonal (Puertos y Adaptadores) y Testabilidad Desacoplada: la lógica de dominio puro define contratos abstractos; las pruebas unitarias inyectan Test Doubles (Mocks, Stubs, Spies con vi.fn/unittest.mock); las pruebas de integración usan MSW; los flujos E2E corren en Playwright y las compuertas de rendimiento validan umbrales SLA P95 con k6.',
        intermediatePitfalls:
          'El Antipatrón "Ice-Cream Cone" (80% tests E2E frágiles y lentos en lugar de pruebas unitarias rápidas), testear detalles internos de implementación en lugar de comportamientos observables, o confiar en código de IA sin Property-Based Testing (fast-check / Hypothesis).',
        universityTheory:
          'Pirámide de Pruebas de Mike Cohn, Tres Leyes de TDD de Robert C. Martin, y Métricas de Mutación de Código (Mutation Testing con Stryker) para verificar la eficacia real de los assertions sobre la cobertura de ramas (Branch Coverage).',
        universityFormula:
          '\\text{Confianza QA} = \\frac{\\text{Unit}(70\\%) + \\text{Integration}(20\\%) + \\text{E2E}(10\\%)}{\\text{Deuda Técnica}} \\times \\text{MutationScore}',
        industryCase:
          'Amazon, Spotify y Netflix prohíben fusiones a producción sin compuertas automatizadas de QA en CI: suites unitarias en Vitest/pytest, pruebas de contrato y validación de latencia P95 en k6 para blindar eventos masivos como Black Friday.',
      };

    case 'git_devops_vercel':
      return {
        level0Metaphor:
          'Git es una máquina del tiempo inmutable para tu código, y DevSecOps es la aduana de seguridad de alta tecnología: ningún cambio sube a producción sin pasar por el arco detector de secretos (TruffleHog), los rayos X del código fuente (Semgrep SAST) y la inspección de dependencias (Trivy SCA).',
        level0Rule:
          'Shift-Left: La seguridad se verifica en local y en el Pull Request; nunca esperes a que el software esté en producción para buscar vulnerabilidades.',
        intermediateArchitecture:
          'Pipeline DevSecOps orquestado en GitHub Actions mediante Grafo Acíclico Dirigido (DAG): Checkout ➔ Secret Scanning (TruffleHog) ➔ SAST (Semgrep AST Taint Analysis) ➔ SCA (Trivy CVEs) ➔ Vitest QA ➔ DAST (OWASP ZAP en preview) ➔ Despliegue Inmutable en Vercel Edge.',
        intermediatePitfalls:
          'Hacer git rm de un archivo con secretos (.env) creyendo que se eliminó: los Blobs históricos de Git son inmutables y los bots maliciosos extraen llaves de AWS o Stripe de commits públicos en menos de 120 segundos.',
        universityTheory:
          'Modelo de Seguridad Shift-Left y Análisis de Flujo de Datos Contaminados (Taint Analysis): Rastrear formalmente fuentes no confiables (Sources) hasta sumideros de ejecución (Sinks) para certificar la ausencia de vulnerabilidades OWASP Top 10.',
        universityFormula:
          '\\text{Pipeline Valido} = \\text{SAST}(AST) \\land \\text{SCA}(\\text{CVE}) \\land \\text{DAST}(\\text{HTTP}) \\land \\text{Secrets}(\\text{Entropy} < H_{\\text{crit}})',
        industryCase:
          'Tras el ataque a la cadena de suministro de SolarWinds y las brechas masivas de API keys, gigantes tecnológicos como Google, Stripe y Amazon volvieron obligatorio el escaneo automatizado SAST/SCA en cada Pull Request antes de autorizar cualquier merge.',
      };

    case 'redes_desarrolladores':
      return {
        level0Metaphor:
          'Internet es un sistema postal global ultrarrápido: tu mensaje no viaja como un tubo continuo, sino dividido en miles de cartas postales numeradas (paquetes). Si una carta se pierde en el camino, el receptor pide que se la reenvíen.',
        level0Rule:
          'Antes de culpar al framework frontend, revisa el waterfall de red: DNS, TLS Handshake, TTFB y compresión Brotli/Gzip.',
        intermediateArchitecture:
          'Pila TCP/IP y encapsulamiento: Aplicación (HTTP/3) ➔ Transporte (TCP/UDP) ➔ Red (IP) ➔ Enlace (Ethernet/Wi-Fi). Ventana deslizante TCP (Sliding Window) para control de flujo y congestión (algoritmos CUBIC y BBR).',
        intermediatePitfalls:
          'Head-of-Line Blocking (HoL) en HTTP/1.1 y HTTP/2 sobre TCP: un solo paquete perdido frena la entrega de todas las peticiones concurrentes (resuelto en HTTP/3 mediante UDP y protocolo QUIC).',
        universityTheory:
          'Teorema de Shannon-Hartley para la capacidad máxima de un canal con ruido: C = B · log₂(1 + SNR). Latencia mínima acotada por la velocidad de la luz en fibra óptica (~200,000 km/s).',
        universityFormula: 'RTT_min = 2 · (Distancia / c_fibra) ;  BDP (Bandwidth-Delay Product) = AnchoBanda · RTT',
        industryCase:
          'Cloudflare y Google implementan HTTP/3 sobre QUIC: reducen la latencia de conexión de 3 RTTs (DNS + TCP + TLS 1.3) a 0-RTT en reconexiones de clientes móviles.',
      };

    case 'sql_datos_ia':
      return {
        level0Metaphor:
          'Una base de datos SQL no es una hoja de Excel gigante: es una bóveda matemática relacional basada en la teoría de conjuntos que garantiza que nunca se pierda un centavo aunque se corte la luz en el servidor en medio de una transacción.',
        level0Rule:
          'Sin índices correctos, cualquier consulta SELECT es un paseo ciego O(n) por todos los discos duros de la empresa.',
        intermediateArchitecture:
          'Motores de almacenamiento: Páginas de disco de 8 KB, buffer pool en memoria RAM y Write-Ahead Logging (WAL) para cumplir las garantías ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).',
        intermediatePitfalls:
          'El antipatrón N+1 queries en ORMs (Prisma, Hibernate, Entity Framework): ejecutar una consulta inicial y luego N consultas individuales en un bucle, destrozando la latencia del servidor.',
        universityTheory:
          'Álgebra relacional de Codd (selección σ, proyección π, join ⨝) y formas normales (1NF a BCNF). Distancia de Coseno y búsqueda de vecinos más cercanos (HNSW) para embeddings vectoriales en RAG.',
        universityFormula: 'SimilitudCoseno(u, v) = (u · v) / (||u|| · ||v||) = ∑(uᵢvᵢ) / (√∑uᵢ² · √∑vᵢ²)',
        industryCase:
          'PostgreSQL con pgvector y motores como Pinecone indexan vectores de 1536 dimensiones de OpenAI utilizando grafos HNSW (Hierarchical Navigable Small World) para responder consultas en <10 ms.',
      };

    case 'automatas_compiladores':
      return {
        level0Metaphor:
          'Un compilador no es magia negra: es un traductor riguroso que lee texto en español/inglés técnico, verifica que no haya faltas de ortografía ni gramática, dibuja el árbol de la oración y lo convierte en instrucciones directas que el chip de silicio entiende.',
        level0Rule:
          'Todo lenguaje de programación comienza con un autómata finito para extraer palabras (Tokens) y una gramática libre de contexto para formar oraciones (AST).',
        intermediateArchitecture:
          'Tubería del compilador: Código Fuente ➔ Análisis Léxico (Lexer / Regex) ➔ Análisis Sintáctico (Parser LL/LR) ➔ AST ➔ Análisis Semántico (Tabla de Símbolos y Tipos) ➔ Código Intermedio (IR en SSA) ➔ Optimizador LLVM ➔ Código Máquina.',
        intermediatePitfalls:
          'Ambigüedad en gramáticas formales: permitir que una expresión como "3 + 4 * 5" genere dos árboles sintácticos diferentes con resultados matemáticos incompatibles.',
        universityTheory:
          'Jerarquía de Chomsky (Tipo 3 Regulares, Tipo 2 Libres de Contexto, Tipo 1 Sensibles al Contexto, Tipo 0 Recursivamente Enumerables). Algoritmo de Thompson y Construcción de Subconjuntos de Powerset (NFA ➔ DFA).',
        universityFormula: 'L(M) = { w ∈ Σ* | δ*(q₀, w) ∈ F } ;  Pumping Lemma: ∀ s ∈ L, |s| ≥ p ⟹ s = xyz',
        industryCase:
          'El motor V8 de Google Chrome compila JavaScript en tiempo de ejecución (JIT) usando el parser TurboFan, traduciendo AST a bytecode Ignition y luego a código de máquina nativo optimizado con especulación de tipos.',
      };

    case 'ingeniero_ia':
      return {
        level0Metaphor:
          'Ser un Ingeniero de IA no es solo chatear con un LLM: es diseñar el sistema de tuberías, memoria a corto/largo plazo, herramientas externas y cortafuegos para que el modelo resuelva problemas complejos sin inventar mentiras.',
        level0Rule:
          'La sintaxis la genera la IA en segundos; el diseño de arquitectura, la validación formal y la resiliencia del sistema son tu responsabilidad como ingeniero.',
        intermediateArchitecture:
          'Arquitectura RAG (Retrieval-Augmented Generation): Chunking de documentos, generación de embeddings densos, base de datos vectorial, recuperación por re-ranking y ensamblado de contexto en la ventana del prompt.',
        intermediatePitfalls:
          'Alucinaciones en bucles de agentes desatendidos: dejar que un agente invoque APIs externas destructivas (como borrar bases de datos o enviar emails) sin validación humana (Human-in-the-Loop) ni guardrails.',
        universityTheory:
          'Mecanismo de Auto-Atención Escalar (Scaled Dot-Product Attention) y Positional Encoding. Bucle de razonamiento formal ReAct (Reasoning + Acting) y planificación tipo Tree of Thoughts (ToT).',
        universityFormula: 'Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V',
        industryCase:
          'Sistemas como Cursor, GitHub Copilot y Devin integran agentes de codificación con índices vectoriales locales, árboles de sintaxis (AST) y entornos de ejecución en sandboxes Docker aislados.',
      };

    case 'evaluacion_ia':
      return {
        level0Metaphor:
          'Evaluar una IA es como realizarle una rigurosa auditoría de control de calidad a un médico o a un piloto de avión: no basta con que hable con seguridad, debes someterlo a pruebas sorpresa, trampas y casos extremos para certificar que nunca cometa un error fatal.',
        level0Rule:
          'Un modelo de lenguaje no pasa una prueba unitaria tradicional con assert: requiere métricas estadísticas, bancos de evaluación y pruebas adversariales continuas.',
        intermediateArchitecture:
          'Infraestructura de evaluación MLOps: Conjuntos de prueba etiquetados (Golden Datasets), evaluadores sintéticos (LLM-as-a-Judge con rúbrica estricta), cortafuegos de entrada/salida (NeMo Guardrails, Llama Guard) y monitoreo de deriva semántica.',
        intermediatePitfalls:
          'Contaminación del benchmark (Data Contamination): cuando las preguntas de la evaluación ya estaban presentes en los datos de entrenamiento del modelo, inflando falsamente el puntaje.',
        universityTheory:
          'Métricas NLP avanzadas: ROUGE-L, BLEU, BERTScore, Perplejidad, Tasa de Falsos Positivos y Falsos Negativos en ciberseguridad, y análisis de curvas ROC-AUC y Precision-Recall.',
        universityFormula: 'F₁ = 2 · (Precision · Recall) / (Precision + Recall) ;  Perplejidad = exp( -1/N · ∑ log P(wᵢ) )',
        industryCase:
          'Anthropic y OpenAI aplican Red Teaming adversarial y Constitutional AI (RLAIF) para evaluar y alinear modelos contra ataques de inyección de prompt (Jailbreaks) y fuga de datos confidenciales.',
      };

    case 'edge_ia_movil':
      return {
        level0Metaphor:
          'Edge AI es tener un cerebro completo dentro de tu reloj inteligente o teléfono sin necesidad de mandar tus datos a un servidor lejano en Silicon Valley. Es privacidad absoluta, velocidad instantánea y funcionamiento en medio del desierto sin señal de internet.',
        level0Rule:
          'En el dispositivo móvil, la batería y la temperatura del procesador son tan críticas como la precisión del modelo.',
        intermediateArchitecture:
          'Formatos de serialización optimizados para dispositivos: TFLite (.tflite), ONNX Runtime, Apple CoreML y Qualcomm SNPE. Delegados de hardware para NPU (Neural Processing Unit), GPU y DSP móvil.',
        intermediatePitfalls:
          'Cuantización ingenua sin calibración: reducir pesos a INT8 sin un conjunto representativo de datos puede provocar colapso numérico y respuestas incoherentes en el modelo.',
        universityTheory:
          'Técnicas de compresión: Post-Training Quantization (PTQ), Quantization-Aware Training (QAT), Podado de pesos (Weight Pruning / Sparsity) y Destilación del Conocimiento (Teacher-Student Network).',
        universityFormula: 'q = round( (r - ZeroPoint) / Scale ) ;  r ≈ Scale · (q - ZeroPoint)',
        industryCase:
          'Google Pixel y Apple iPhone ejecutan modelos de reconocimiento de voz, detección de caídas y traducción en tiempo real directamente en la NPU del chip con menos de 10 milisegundos de latencia.',
      };

    case 'android_kotlin':
      return {
        level0Metaphor:
          'Programar una app moderna en Android con Jetpack Compose es como armar figuras con bloques de LEGO inteligentes: en vez de diseñar planos estáticos en papel viejo (XML), describes cómo debe lucir la pantalla y la app se actualiza sola cada vez que los datos cambian.',
        level0Rule:
          'Estado inmutable hacia abajo, eventos hacia arriba (Unidirectional Data Flow - UDF). Nunca bloquees el hilo principal (Main Thread).',
        intermediateArchitecture:
          'Arquitectura Limpia recomendada por Google: Capa de UI (Compose + ViewModel), Capa de Dominio (UseCases) y Capa de Datos (Room Database + Retrofit API + Repository Pattern con Kotlin Coroutines y StateFlow).',
        intermediatePitfalls:
          'Fugas de memoria (Memory Leaks) en Android: retener referencias a Context o View dentro de objetos de larga vida (Singletons o Corrutinas que no se cancelan con viewModelScope).',
        universityTheory:
          'Máquina virtual Dalvik y runtime ART (Android Runtime): Compilación híbrida AOT (Ahead-of-Time) y JIT con perfiles basados en el uso real de la app (Profile-Guided Optimization).',
        universityFormula: 'TiempoFrame ≤ 16.6 ms (para 60 FPS) / 8.3 ms (para 120 FPS ProMotion)',
        industryCase:
          'Apps bancarias y de comercio electrónico a nivel global aplican FLAG_SECURE en pantallas sensibles de Android para impedir capturas de pantalla maliciosas y proteger transacciones.',
      };

    case 'kali_linux':
      return {
        level0Metaphor:
          'La seguridad ofensiva ética con Kali Linux no consiste en ejecutar ataques indiscriminados, sino en la metodología rigurosa de un auditor de seguridad que evalúa defensas perimetrales y analiza vectores de riesgo antes de que actores maliciosos puedan explotarlos.',
        level0Rule:
          'Un escáner automático sin comprensión del paquete de red subyacente es solo ruido inútil. La precisión técnica supera a la fuerza bruta.',
        intermediateArchitecture:
          'Estándar de Pruebas de Penetración (PTES): 1. Reconocimiento pasivo/activo ➔ 2. Modelado de amenazas ➔ 3. Análisis de vulnerabilidades ➔ 4. Explotación controlada ➔ 5. Post-explotación y pivoteo ➔ 6. Informe técnico de mitigación.',
        intermediatePitfalls:
          'Ejecutar escaneos de red sin permiso legal explícito por escrito: auditar sistemas sin autorización constituye un delito informático grave independientemente de la intención.',
        universityTheory:
          'Modelo de Seguridad Bell-LaPadula (Confidencialidad) y Biba (Integridad). Mecanismos de mitigación del kernel de Linux: ASLR (Address Space Layout Randomization), DEP/NX y Canarios de Pila (Stack Canaries).',
        universityFormula: 'Riesgo = Impacto × Probabilidad × Exposición Vulnerable',
        industryCase:
          'Equipos de Red Team y Blue Team en instituciones financieras auditan periódicamente su infraestructura contra el marco MITRE ATT&CK para neutralizar campañas avanzadas (APTs).',
      };

    case 'pensamiento_computacional':
      return getComputationalThinkingPedagogy(moduleId);
    case 'algoritmos':
      return getAlgorithmsModulePedagogy(moduleId);
    default:
      return getComputationalThinkingPedagogy(moduleId);
  }
}

export const LevelProgressiveView: React.FC<LevelProgressiveViewProps> = ({
  courseId = 'algoritmos',
  moduleId,
  moduleTitle,
  theoryContent,
  keyConcepts,
}) => {
  const [activeLevel, setActiveLevel] = useState<AcademicLevel>('all');
  const [showMemoryInspector, setShowMemoryInspector] = useState<boolean>(false);

  const pedagogy = getCoursePedagogy(courseId, moduleId);

  return (
    <div className="space-y-6">
      {/* Level Selector Toolbar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-5 rounded-3xl border border-indigo-900/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Ruta Pedagógica 0 a Universitario
            </span>
            <span className="text-xs text-slate-400">| Elige tu profundidad de estudio:</span>
          </div>
          <h4 className="text-lg font-black text-white mt-1">
            Profundización Progresiva por Niveles
          </h4>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800/80 overflow-x-auto scroll-touch">
          {[
            { id: 'all', label: '🌟 Ruta Completa', color: 'from-indigo-600 to-purple-600' },
            { id: 'level0', label: '🟢 Nivel 0 (Intuición)', color: 'from-emerald-600 to-teal-600' },
            { id: 'intermediate', label: '🟡 Intermedio (Arquitectura)', color: 'from-amber-600 to-orange-600' },
            { id: 'university', label: '🟣 Universitario (Rigor)', color: 'from-purple-600 to-pink-600' },
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id as AcademicLevel)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                activeLevel === lvl.id
                  ? `bg-gradient-to-r ${lvl.color} text-white shadow-md scale-102`
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* LEVEL 0: INTUITION & METAPHORS */}
      {(activeLevel === 'all' || activeLevel === 'level0') && (
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-emerald-600/30">
                0
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  Nivel 0 · Fundamentos & Intuición Práctica
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  ¿Cómo entender este concepto sin tecnicismos oscuros?
                </h4>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full">
              Ideal para principiantes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <strong className="text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                <span>💡</span> Metáfora del Mundo Real
              </strong>
              <p>{pedagogy.level0Metaphor}</p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <strong className="text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                <span>🎯</span> Regla de Oro para Recordarlo
              </strong>
              <p>{pedagogy.level0Rule}</p>
            </div>
          </div>
        </section>
      )}

      {/* LEVEL INTERMEDIATE: ARCHITECTURE & MEMORY */}
      {(activeLevel === 'all' || activeLevel === 'intermediate') && (
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-amber-600/30">
                1
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  Nivel Intermedio · Ingeniería de Software & Arquitectura
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  ¿Cómo funciona físicamente en el sistema y en producción?
                </h4>
              </div>
            </div>
            <button
              onClick={() => setShowMemoryInspector(!showMemoryInspector)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white transition cursor-pointer shadow-sm"
            >
              {showMemoryInspector ? 'Ocultar Inspector RAM' : '🔍 Ver Inspector Técnico'}
            </button>
          </div>

          {/* Interactive Memory Diagram */}
          {showMemoryInspector && (
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 animate-in fade-in duration-300">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                Arquitectura de Recursos & Memoria Física
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { addr: '0x7FFF0010', type: 'Stack / Registro', val: 'Puntero / Frame Activo', desc: 'Variables locales rápidas (~1 ns)' },
                  { addr: '0x0040A120', type: 'Heap / Buffer', val: 'Estructuras Dinámicas', desc: 'Asignación malloc / new' },
                  { addr: '0x0040A130', type: 'I/O / Red', val: 'Socket / Disco / DB', desc: 'Latencia de red / Bloque I/O' },
                  { addr: '0x0020B000', type: 'Cache L1/L2', val: 'Línea de Caché (64 bytes)', desc: 'Localidad espacial activa' },
                ].map((slot) => (
                  <div key={slot.addr} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-indigo-400 text-[10px] block font-bold">{slot.addr}</span>
                    <span className="text-amber-300 font-bold block my-0.5">{slot.val}</span>
                    <span className="text-[9px] text-slate-500 block">{slot.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 space-y-1.5">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block">
                ⚙️ Implementación y Arquitectura
              </strong>
              <p className="text-xs leading-relaxed">{pedagogy.intermediateArchitecture}</p>
            </div>
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 space-y-1.5">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block">
                🛡️ Errores Frecuentes & Trampas en Producción
              </strong>
              <p className="text-xs leading-relaxed">{pedagogy.intermediatePitfalls}</p>
            </div>
          </div>
        </section>
      )}

      {/* LEVEL UNIVERSITY: MATHEMATICAL RIGOR & FORMAL THEORY */}
      {(activeLevel === 'all' || activeLevel === 'university') && (
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-purple-600/30">
                2
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-800 dark:text-purple-400">
                  Nivel Universitario · Rigor Matemático, Estándares & Teoría Formal
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  Demostración Formal y Especificaciones de Grado Académico
                </h4>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
              Currículo Universitario
            </span>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 space-y-3 shadow-inner">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <span className="text-purple-400 font-bold">📐 Teorema / Definición Formal</span>
              <span className="text-[10px] text-slate-500">Estándar Académico Internacional</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <p className="text-emerald-400 font-bold">{pedagogy.universityFormula}</p>
              <p className="text-slate-400 text-[11px]">{pedagogy.universityTheory}</p>
            </div>
          </div>

          {/* Industry Application Card */}
          <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 flex items-start gap-3">
            <span className="text-2xl">🏭</span>
            <div className="text-xs space-y-1">
              <strong className="text-purple-900 dark:text-purple-300 font-bold block text-sm">
                Caso Real en Big Tech (Google, Netflix, PostgreSQL, OpenAI, Linux)
              </strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {pedagogy.industryCase}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LevelProgressiveView;
