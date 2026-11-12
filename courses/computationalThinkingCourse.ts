import { Course, TutorExercise } from '../domain/models';

export const COMPUTATIONAL_THINKING_COURSE: Course = {
  id: 'pensamiento_computacional',
  title: 'Pensamiento de Ingeniería, Resolución de Problemas & Data Path (Paso 0)',
  shortTitle: 'Pensamiento & Data Path',
  badge: 'Fundamento Absoluto · 10 Módulos',
  icon: '🧩',
  description:
    'De la intuición a la ingeniería: resolución sistemática de problemas, pseudocódigo agnóstico, variables, control de flujo, el Data Path de la CPU, latencias de memoria física (Stack vs Heap) y manejo defensivo de errores en la era de la IA.',
  whyStudyTitle: '🧠 ¿Por qué este curso es el Paso 0 obligatorio para cualquier programador?',
  whyStudyText:
    'Cualquiera puede pedirle a una Inteligencia Artificial que escriba 50 líneas de código, pero solo un verdadero ingeniero entiende qué problema está resolviendo, si la solución es robusta, y cómo viajan los datos físicamente a través de la CPU, la memoria RAM y el bus de datos. Este curso construye los cimientos mentales indispensables: pensar en procesos antes de escribir código, estructurar la lógica con pseudocódigo, entender la realidad del hardware y auditar soluciones para no introducir errores en producción.',
  studyPlanReasons: [
    {
      id: 1,
      title: 'Filosofía de la Ingeniería y Resolución de Problemas',
      why: 'Aprender a descomponer problemas complejos en procesos atómicos predecibles antes de tocar el teclado.',
    },
    {
      id: 2,
      title: 'Pseudocódigo y Diseño Algorítmico Agnóstico',
      why: 'Diseñar recetas lógicas universales en español estructurado antes de enredarse con la sintaxis de un lenguaje.',
    },
    {
      id: 3,
      title: 'Variables, Tipos de Datos y Representación en Memoria',
      why: 'Entender qué es una variable en la memoria física: enteros, flotantes IEEE 754, cadenas UTF-8 e inmutabilidad.',
    },
    {
      id: 4,
      title: 'Control de Flujo: Condicionales y Validación Defensiva',
      why: 'Bifurcaciones lógicas, toma de decisiones y el patrón Guard Clauses para evitar anidaciones piramidales.',
    },
    {
      id: 5,
      title: 'Ciclos, Iteración y Automatización',
      why: 'Repetición controlada con bucles for y while, contadores, acumuladores y prevención estricta de ciclos infinitos.',
    },
    {
      id: 6,
      title: 'El Data Path: Cómo Viaja un Dato por la Computadora',
      why: 'El ciclo Fetch-Decode-Execute de la CPU, la Unidad Aritmético-Lógica (ALU), registros internos y buses.',
    },
    {
      id: 7,
      title: 'Jerarquía de Memoria, Latencias y Stack vs Heap',
      why: 'Comprender la escala humana de tiempos (0.5 ns en registros vs 100 ns en RAM) y el ciclo de vida del Call Stack.',
    },
    {
      id: 8,
      title: 'Funciones, Modularidad y Ámbito (Scope)',
      why: 'Funciones puras, parámetros, retorno y el aislamiento de variables locales para prevenir efectos secundarios.',
    },
    {
      id: 9,
      title: 'Colecciones Elementales y Manejo Defensivo de Errores',
      why: 'Arreglos indexados, objetos clave-valor y el bloque try/catch para construir software resiliente a fallos.',
    },
    {
      id: 10,
      title: 'Proyecto Integrador: Auditoría de Sistemas y Brechas de IA',
      why: 'Construir un sistema modular y aplicar auditoría crítica para detectar y corregir las 3 fallas clásicas que comete la IA.',
    },
  ],
  labChallenge: {
    title: 'Sistema de Facturación y Validación Defensiva con Auditoría Anti-IA',
    badge: 'Desafío de Laboratorio · Nivel Fundamentos',
    description:
      'Tu objetivo es diseñar e implementar un módulo de cálculo y facturación de pedidos comerciales en JavaScript o Python. El sistema debe calcular subtotal, impuestos dinámicos y descuentos, aplicando validación defensiva estricta para rechazar datos corruptos o valores negativos, e identificar las alucinaciones de seguridad en un código de ejemplo generado por IA.',
    requirements: [
      '• Descomposición en Pseudocódigo: Redactar la receta lógica del cálculo de facturación antes del código fuente.',
      '• Validación Defensiva: Lanzar excepciones claras si los precios son <= 0, si faltan campos obligatorios o si las cantidades no son enteros.',
      '• Funciones Puras: Implementar funciones de cálculo matemático sin mutar objetos de entrada.',
      '• Reporte de Auditoría Anti-IA: Identificar al menos 2 fallas en un fragmento de código inseguro generado por IA (ej: ausencia de try/catch y concatenación de tipos string con números).',
    ],
    cleanCodeRules: [
      '• Uso estricto de Guard Clauses para evitar anidación if-else de más de 2 niveles.',
      '• Nombres de variables descriptivos y semánticos (nada de x, y, a, temp en lógica de negocio).',
      '• Pruebas con al menos 3 casos borde: orden vacía, precio con decimales y descuento del 100%.',
    ],
    emailSubject: 'Laboratorio QuimiSell: Reto Pensamiento & Facturación Defensiva - [Tu Nombre]',
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto mi solución al Reto del Laboratorio del Paso 0 (Pensamiento de Ingeniería & Facturación Defensiva).\n\nEnlace del repositorio / código:\n[PEGA TU ENLACE AQUÍ]\n\nPseudocódigo diseñado:\n- \n\nVulnerabilidades o fallas detectadas en el código de IA:\n1. \n2. \n\nSaludos cordiales.`,
  },
  modules: [
    {
      id: 1,
      title: 'MÓDULO 1: FILOSOFÍA DE LA INGENIERÍA: DE PROBLEMA AMBIGUO A PROCESO FORMAL',
      description:
        'El rol del ingeniero en software: no es picar código, sino resolver problemas, modelar procesos estables y aplicar mejora continua.',
      items: [
        'La ingeniería frente a la programación aficionada: por qué entender el problema ocupa el 80% del tiempo.',
        'Descomposición Modular: romper requerimientos masivos en pasos atómicos independientes.',
        'Abstracción: separar la información crítica del ruido superficial.',
        'Ciclo de vida de una solución: Comprender ➔ Modelar ➔ Prototipar ➔ Probar ➔ Optimizar.',
      ],
      content: `## Panorama: El Verdadero Rol de un Ingeniero de Software

Un programador aficionado abre el editor de texto y comienza a escribir código inmediatamente sin saber hacia dónde va. Un **ingeniero de software**, en cambio, primero entiende a fondo el problema, define las entradas y salidas, delimita las restricciones y planifica el proceso.

En la era moderna donde las herramientas de Inteligencia Artificial pueden generar sintaxis en segundos, **tu valor como profesional no está en tipear líneas, sino en tu capacidad analítica de ingeniería**.

### 1. La Trampa del Problema Equivocado
Resolver a la perfección el problema equivocado es el desperdicio más costoso en la industria tecnológica. Antes de escribir una sola línea:
* ¿Quién es el usuario y qué necesita exactamente?
* ¿Cuáles son las entradas esperadas y qué formato tienen?
* ¿Qué salidas o consecuencias debe producir el sistema?
* ¿Cuáles son los casos de error más catastróficos que podrían ocurrir?

### 2. Descomposición Modular
Imagina que te piden: *"Construir una tienda en línea"*. Esa petición es inabarcable. La mente ingenieril la descompone en 5 subsistemas atómicos:
1. Catálogo de productos (consulta).
2. Carrito de compras (estado en memoria).
3. Motor de precios y descuentos (cálculo puro).
4. Pasarela de pagos (integración externa).
5. Notificación y recibo (comunicación).

Al resolver cada módulo por separado con interfaces claras, el sistema completo se vuelve predecible y mantenible.`,
      codeSnippet: `// Demostración de Descomposición Modular en JavaScript y Python

// EN JAVASCRIPT: Funciones atómicas con responsabilidad única
function calcularSubtotal(items) {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

function calcularImpuesto(subtotal, tasa = 0.12) {
  return subtotal * tasa;
}

function generarFactura(items) {
  const subtotal = calcularSubtotal(items);
  const impuesto = calcularImpuesto(subtotal);
  const total = subtotal + impuesto;
  return { subtotal, impuesto, total };
}

console.log(generarFactura([{ precio: 100, cantidad: 2 }]));`,
      quiz: [
        {
          question: '¿Cuál es la primera acción que debe realizar un ingeniero de software ante un nuevo requerimiento?',
          options: [
            'Comenzar a codificar de inmediato para ganar tiempo',
            'Pedirle a una IA que escriba el proyecto entero sin revisar',
            'Comprender, delimitar el problema real y definir entradas, salidas y restricciones',
            'Comprar un servidor en la nube',
          ],
          answerIndex: 2,
          explanation:
            'Entender a fondo el problema y delimitar sus entradas, salidas y restricciones evita resolver el problema equivocado.',
        },
      ],
    },
    {
      id: 2,
      title: 'MÓDULO 2: PSEUDOCÓDIGO Y DISEÑO ALGORÍTMICO AGNÓSTICO',
      description:
        'Aprende a formular recetas lógicas en español estructurado antes de pelearte con las reglas sintácticas de cualquier lenguaje de programación.',
      items: [
        '¿Qué es un algoritmo? Finitud, precisión y determinismo.',
        'Palabras clave de pseudocódigo estándar: LEER, ASIGNAR, SI / SINO, MIENTRAS, RETORNAR.',
        'Diagramación de flujo: toma de decisiones y puntos de bifurcación.',
        'Traducción limpia de pseudocódigo a JavaScript y Python.',
      ],
      content: `## El Poder del Pseudocódigo

El **pseudocódigo** es un lenguaje intermedio entre el pensamiento humano y el código de máquina. No tiene reglas rígidas de puntos y comas, pero obliga a que tu lógica sea estrictamente secuencial y determinista.

Si puedes expresar una solución con claridad en pseudocódigo, podrás traducirla a Python, JavaScript, C++, Rust o Kotlin sin esfuerzo mental adicional.

### Palabras Clave Universales
* **LEER / ENTRADA:** Obtener un dato del exterior.
* **ESCRIBIR / MOSTRAR:** Producir un resultado visual.
* **SI condición ENTONCES ... SINO:** Bifurcación condicional.
* **MIENTRAS condición HACER:** Repetición hasta que la condición cambie.
* **RETORNAR:** Entregar el resultado de un proceso.`,
      codeSnippet: `// Comparativa directa: Pseudocódigo vs JS vs Python

/* PSEUDOCÓDIGO:
ALGORITMO CalcularDescuento(monto)
  SI monto > 500 ENTONCES
    RETORNAR monto * 0.90  // 10% descuento
  SINO
    RETORNAR monto
  FIN SI
FIN ALGORITMO */

// EN JAVASCRIPT:
function calcularDescuentoJS(monto) {
  if (monto > 500) {
    return monto * 0.90;
  }
  return monto;
}

# EN PYTHON:
def calcular_descuento_py(monto):
    if monto > 500:
        return monto * 0.90
    return monto`,
      quiz: [
        {
          question: '¿Por qué es recomendable escribir pseudocódigo antes de escribir código real?',
          options: [
            'Porque la computadora solo puede ejecutar pseudocódigo',
            'Porque permite diseñar y validar la lógica pura sin distraerse con la sintaxis del lenguaje',
            'Porque reemplaza a las bases de datos',
            'Porque hace que el procesador vaya más rápido',
          ],
          answerIndex: 1,
          explanation:
            'El pseudocódigo permite enfocarse en la corrección de la lógica algorítmica sin la fricción de la sintaxis.',
        },
      ],
    },
    {
      id: 3,
      title: 'MÓDULO 3: VARIABLES, TIPOS DE DATOS Y REPRESENTACIÓN EN MEMORIA',
      description:
        'Qué es verdaderamente una variable: una etiqueta de memoria RAM. Tipos primitivos, precisión flotante IEEE 754 y operadores lógicos.',
      items: [
        'Variables como contenedores con nombre en la memoria RAM.',
        'Tipos de datos primitivos: enteros, flotantes, cadenas de texto y booleanos.',
        'La trampa de los números flotantes en hardware: por qué 0.1 + 0.2 !== 0.3.',
        'Operadores aritméticos, lógicos y relacionales: igualdad estricta (===) vs débil (==).',
        'Inmutabilidad: const vs let y cómo evitar mutaciones imprevistas.',
      ],
      content: `## Variables: Tu Primer Contacto con la Memoria Física

Cuando escribes en tu programa:
\`\`\`javascript
const edad = 25;
\`\`\`
La computadora no guarda la palabra "edad"; el compilador reserva 4 u 8 bytes en una celda de la memoria RAM (por ejemplo, en la dirección \`0x7FFE_0020\`) y escribe allí la secuencia binaria correspondiente al número 25. La palabra \`edad\` es simplemente una etiqueta para humanos.

### La Trampa del Punto Flotante (IEEE 754)
En computación, los números decimales se almacenan en binario en base a la norma IEEE 754. Como fracciones como 1/10 no tienen representación binaria finita, ocurren pequeñas aproximaciones:
\`\`\`javascript
console.log(0.1 + 0.2 === 0.3); // ¡Retorna FALSE! Da 0.30000000000000004
\`\`\`
**Regla de Oro en Finanzas:** Jamás uses números flotantes para dinero en sistemas reales. Trabaja siempre con números enteros (centavos) para evitar pérdidas de centavos por redondeo de CPU.`,
      codeSnippet: `// Demostración de tipos y comparaciones estrictas

// 1. Igualdad estricta (===) vs débil (==)
console.log(5 == "5");   // true (coerción implícita peligrosa)
console.log(5 === "5");  // false (estricto en tipo y valor - RECOMENDADO)

// 2. Manejo seguro de dinero en centavos (evita bug flotante)
const precioCentavos = 1050; // $10.50
const envioCentavos = 250;   // $2.50
const totalCentavos = precioCentavos + envioCentavos; // 1300 ($13.00 exacto)

// 3. Inmutabilidad con const
const usuario = Object.freeze({ id: 101, rol: 'ADMIN' });
// usuario.rol = 'INVITADO'; // Error en modo estricto`,
      quiz: [
        {
          question: '¿Por qué en JavaScript y Python la suma 0.1 + 0.2 no es exactamente 0.3?',
          options: [
            'Porque el lenguaje tiene un error de programación básico',
            'Porque las computadoras representan decimales con la norma binaria IEEE 754, que tiene aproximaciones en ciertas fracciones',
            'Porque la memoria RAM está rota',
            'Porque los números deben ser siempre negativos',
          ],
          answerIndex: 1,
          explanation:
            'La representación de punto flotante binario IEEE 754 no puede almacenar ciertas fracciones decimales de forma exacta.',
        },
      ],
    },
    {
      id: 4,
      title: 'MÓDULO 4: CONTROL DE FLUJO: CONDICIONALES Y VALIDACIÓN DEFENSIVA',
      description:
        'Toma de decisiones lógicas en software: bifurcaciones if/else, switch y el patrón profesional de Guard Clauses para eliminar código espagueti.',
      items: [
        'Bifurcaciones de ejecución y evaluación booleana.',
        'La lógica de cortocircuito (Short-Circuit) con operadores && y ||.',
        'Patrón Guard Clauses: retorno temprano para simplificar la lectura del código.',
        'Validación defensiva: nunca asumas que los datos recibidos son válidos.',
      ],
      content: `## Control de Flujo: Los Caminos de un Algoritmo

Un programa sin condicionales es una línea recta que solo sabe hacer una cosa. Con condicionales, el software adquiere la capacidad de tomar decisiones según el estado del mundo.

### El Anti-Patrón de la Pirámide de la Muerte
Muchos programadores novatos anidan \`if\` dentro de \`if\` hasta crear una pirámide ilegible:
\`\`\`javascript
// CÓDIGO MALO (Pirámide de anidación)
function procesar(usuario) {
  if (usuario) {
    if (usuario.activo) {
      if (usuario.saldo > 0) {
        return "Pago procesado";
      }
    }
  }
}
\`\`\`

### La Solución Profesional: Guard Clauses (Retorno Temprano)
Invierte la lógica: comprueba los errores primero y sal de la función de inmediato:
\`\`\`javascript
// CÓDIGO ELEGANTE (Guard Clauses)
function procesar(usuario) {
  if (!usuario) return "Error: usuario no existe";
  if (!usuario.activo) return "Error: cuenta suspendida";
  if (usuario.saldo <= 0) return "Error: saldo insuficiente";

  // El camino feliz queda plano y legible
  return "Pago procesado con éxito";
}
\`\`\``,
      codeSnippet: `// Ejemplo real: Validador de acceso a una plataforma con Guard Clauses

function validarAcceso(usuario, recurso) {
  // 1. Guard Clause: Validar existencia
  if (!usuario || typeof usuario !== 'object') {
    return { permitido: false, motivo: 'Usuario no autenticado' };
  }

  // 2. Guard Clause: Cuenta bloqueada
  if (usuario.bloqueado) {
    return { permitido: false, motivo: 'Cuenta bloqueada por seguridad' };
  }

  // 3. Guard Clause: Validación de rol
  if (recurso.requiereAdmin && usuario.rol !== 'ADMIN') {
    return { permitido: false, motivo: 'Permisos insuficientes' };
  }

  // Camino feliz: Acceso otorgado
  return { permitido: true, motivo: 'Acceso autorizado' };
}

console.log(validarAcceso({ rol: 'ADMIN', bloqueado: false }, { requiereAdmin: true }));`,
      quiz: [
        {
          question: '¿Qué ventaja principal ofrece el patrón Guard Clauses (retorno temprano)?',
          options: [
            'Hace que la base de datos consuma menos disco',
            'Elimina la anidación excesiva de if/else y deja el flujo principal plano y legible',
            'Obliga al procesador a saltarse el sistema operativo',
            'Convierte el código en lenguaje C',
          ],
          answerIndex: 1,
          explanation:
            'Las Guard Clauses validan los casos de error al inicio y retornan de inmediato, manteniendo el código limpio y sin anidaciones piramidales.',
        },
      ],
    },
    {
      id: 5,
      title: 'MÓDULO 5: CICLOS, ITERACIÓN Y AUTOMATIZACIÓN',
      description:
        'Repetición controlada con bucles for y while. Contadores, acumuladores, centinelas y cómo garantizar que un bucle siempre termine.',
      items: [
        '¿Por qué iterar? Multiplicar el poder de cómputo sobre millones de registros.',
        'El ciclo while: iteración indeterminada basada en condiciones.',
        'El ciclo for: iteración determinada sobre rangos y colecciones.',
        'Condiciones de parada e invariantes de terminación: cómo evitar bucles infinitos.',
      ],
      content: `## Ciclos: La Fuerza Bruta de la Computación

Un ser humano se cansa al revisar 100 documentos; una computadora puede iterar sobre 100 millones de registros en segundos usando un **ciclo o bucle**.

### ¿Cuándo usar WHILE vs FOR?
* **Usa FOR:** Cuando conoces de antemano el número exacto de repeticiones o vas a recorrer una lista de elementos (ej: procesar 50 pedidos).
* **Usa WHILE:** Cuando no sabes cuántas veces se repetirá el ciclo y dependes de un evento externo (ej: esperar a que un usuario escriba la contraseña correcta o esperar un paquete de red).

### Anatomía de un Bucle Infinito
Un bucle infinito ocurre cuando la condición de terminación jamás llega a cumplirse. Si olvidas incrementar el contador dentro de un \`while\`, la CPU se quedará al 100% de uso ejecutando la misma comprobación para siempre.`,
      codeSnippet: `// Demostración de bucles seguros en JS y Python

// 1. Ciclo FOR con acumulador
const precios = [15, 30, 45, 10];
let total = 0;
for (let i = 0; i < precios.length; i++) {
  total += precios[i];
}
console.log("Total acumulado:", total);

// 2. Ciclo WHILE con condición de parada segura y límite máximo
let intentos = 0;
const MAX_INTENTOS = 3;
let conectado = false;

while (!conectado && intentos < MAX_INTENTOS) {
  intentos++;
  console.log(\`Intento de conexión #\${intentos}...\`);
  // Simulamos que al segundo intento se conecta
  if (intentos === 2) conectado = true;
}

console.log("Estado final:", conectado ? "Conectado" : "Falló");*/`,
      quiz: [
        {
          question: '¿Cuál es la causa principal de un bucle infinito en un programa?',
          options: [
            'El monitor no tiene suficiente brillo',
            'La condición de salida del bucle nunca llega a evaluarse como falsa',
            'El código tiene demasiados comentarios',
            'Se usó una variable de tipo texto',
          ],
          answerIndex: 1,
          explanation:
            'Un bucle se repite mientras su condición sea verdadera; si la condición nunca cambia a falso, el bucle jamás se detiene.',
        },
      ],
    },
    {
      id: 6,
      title: 'MÓDULO 6: EL DATA PATH: CÓMO VIAJA UN DATO POR LA COMPUTADORA',
      description:
        'El ciclo Fetch-Decode-Execute de la CPU, la Unidad Aritmético-Lógica (ALU), registros internos y el bus de datos en la arquitectura Von Neumann.',
      items: [
        'La arquitectura Von Neumann: CPU, memoria y dispositivos de I/O.',
        'El ciclo Fetch-Decode-Execute a 3.5 GHz (miles de millones de veces por segundo).',
        'Registros de la CPU (R0..R15): las casillas más veloces del universo informático.',
        'La Unidad Aritmético-Lógica (ALU) y el bus de datos.',
      ],
      content: `## El Silicio: Lo que Pasa por Debajo de tu Código

Cuando en tu código escribes \`x = a + b;\`, la CPU no entiende esa frase en inglés. Esa instrucción se traduce en un conjunto de códigos numéricos binarios que viajan por el **Data Path (Camino de Datos)** del procesador.

### Las 3 Fases del Ciclo de Reloj
1. **FETCH (Buscar):** El Program Counter (PC) señala la dirección de memoria donde está la instrucción. La CPU la trae al Registro de Instrucción (IR).
2. **DECODE (Decodificar):** La Unidad de Control interpreta los bits: descubre que es una operación de suma (\`ADD\`).
3. **EXECUTE (Ejecutar):** La Unidad Aritmético-Lógica (ALU) toma los valores almacenados en los registros internos, calcula la suma binaria con compuertas lógicas y escribe el resultado en el registro de destino. Todo esto toma **~0.3 a 0.5 nanosegundos**.`,
      codeSnippet: `// Demostración conceptual: Traducción de código a instrucciones de Data Path

// NIVEL ALTO (Lo que tú escribes):
const a = 7;
const b = 3;
const total = a + b;

/* NIVEL DATA PATH (Lo que ejecuta la CPU):
1. LOAD  R0, [dir_a]    // Lee de RAM al registro R0 (7)
2. LOAD  R1, [dir_b]    // Lee de RAM al registro R1 (3)
3. ADD   R2, R0, R1     // La ALU computa 7 + 3 y guarda 10 en R2
4. STORE [dir_total], R2 // Guarda 10 en RAM
*/`,
      quiz: [
        {
          question: '¿Qué componente del procesador es el encargado de realizar los cálculos matemáticos y comparaciones lógicas?',
          options: [
            'El disco rígido',
            'La Unidad Aritmético-Lógica (ALU)',
            'El cable HDMI',
            'El ventilador del procesador',
          ],
          answerIndex: 1,
          explanation:
            'La ALU (Arithmetic Logic Unit) es el circuito integrado de la CPU que ejecuta operaciones matemáticas y lógicas en binario.',
        },
      ],
    },
    {
      id: 7,
      title: 'MÓDULO 7: JERARQUÍA DE MEMORIA, LATENCIAS Y STACK VS HEAP',
      description:
        'La escala humana de tiempos de acceso: registros (0.5 ns) vs RAM (100 ns) vs Red (50 ms). Call Stack de funciones y asignación en Heap.',
      items: [
        'La pirámide de memoria: velocidad extrema vs capacidad de almacenamiento.',
        'La escala humana de las latencias: por qué leer de disco o red es un millón de veces más lento que la RAM.',
        'El Call Stack: cómo el procesador gestiona las llamadas a funciones y sus variables locales.',
        'El Heap: almacenamiento dinámico para colecciones y objetos persistentes.',
      ],
      content: `## La Jerarquía de Memoria: El Cuello de Botella del Mundo

Un procesador moderno a 4 GHz puede ejecutar miles de millones de instrucciones por segundo, pero pasa gran parte de su vida **esperando a que le lleguen los datos**.

### La Tabla de Latencias que Todo Ingeniero Debe Grabar en su Mente
* **Registros de CPU:** ~0.5 nanosegundos.
* **Caché L1:** ~1 nanosegundo.
* **Memoria RAM:** ~100 nanosegundos (200 veces más lento que L1).
* **Disco SSD NVMe:** ~100 microsegundos (1,000 veces más lento que RAM).
* **Petición por Internet/Red:** ~50 a 100 milisegundos (**un millón de veces más lento**).

Si un ciclo de CPU fuera 1 segundo humano, ir a buscar un dato a la memoria RAM tomaría 5 minutos, y hacer una petición por red a un servidor en otra ciudad tomaría **¡más de 8 años de espera continua!** Por eso los ingenieros diseñan cachés y minimizan llamadas de red innecesarias.`,
      codeSnippet: `// Demostración: Stack vs Heap en JavaScript y Python

function calcularTotal() {
  // Las variables numéricas primitivas viven en el CALL STACK de la función
  const precio = 50;  // Vive en el Stack Frame de calcularTotal
  const cantidad = 2; // Vive en el Stack Frame de calcularTotal

  // Los objetos y arreglos complejos reservan memoria en el HEAP
  // La variable 'pedido' en el Stack solo guarda un puntero (referencia) al Heap
  const pedido = { precio, cantidad, fecha: new Date() };

  return precio * cantidad;
} // Al terminar calcularTotal, el Stack Frame se destruye automáticamente en 0 ns`,
      quiz: [
        {
          question: 'Aproximadamente, ¿cuántas veces más lenta es una petición de red frente a una lectura de memoria RAM física?',
          options: [
            'Son exactamente iguales',
            'La red es más rápida que la RAM',
            'Alrededor de 100,000 a 1,000,000 de veces más lenta',
            'Solo 2 veces más lenta',
          ],
          answerIndex: 2,
          explanation:
            'Una lectura de RAM toma ~100 nanosegundos, mientras que una petición de red toma ~50-100 milisegundos, una diferencia de casi un millón de veces.',
        },
      ],
    },
    {
      id: 8,
      title: 'MÓDULO 8: FUNCIONES, MODULARIDAD Y ÁMBITO (SCOPE)',
      description:
        'Funciones como bloques atómicos reutilizables: parámetros, retornos, funciones puras sin efectos secundarios y alcance local vs global.',
      items: [
        'Funciones como contratos formales: qué entra (parámetros) y qué sale (return).',
        'Funciones puras: la misma entrada siempre produce la misma salida sin mutar el exterior.',
        'Ámbito (Scope): variables locales encapsuladas vs variables globales.',
        'Paso por valor (primitivos) vs paso por referencia (objetos y listas).',
      ],
      content: `## Funciones: El Bloque Modular de la Ingeniería

Escribir código duplicado es el mayor pecado en el software. Si tienes que cambiar una regla de cálculo en 10 lugares distintos, vas a cometer errores. Una **función** empaqueta un proceso para que pueda reutilizarse infinitas veces.

### Funciones Puras (La Clave de Sistemas Sin Bugs)
Una función es **pura** cuando:
1. No modifica nada fuera de sí misma (sin efectos secundarios en variables globales o bases de datos).
2. Para los mismos argumentos, siempre devuelve exactamente el mismo resultado.

Las funciones puras son triviales de testear con pruebas unitarias de QA y son inmunes a los errores de concurrencia.`,
      codeSnippet: `// Función pura vs Función impura

// IMPURA (Peligrosa: muta el exterior)
let saldoGlobal = 1000;
function transferirImpuro(monto) {
  saldoGlobal -= monto; // Modifica variable global directamente
}

// PURA (Segura: no muta el exterior, retorna un nuevo valor predecible)
function calcularNuevoSaldo(saldoActual, montoTransferencia) {
  if (montoTransferencia > saldoActual) {
    throw new Error("Fondos insuficientes");
  }
  return saldoActual - montoTransferencia;
}

console.log(calcularNuevoSaldo(1000, 200)); // 800`,
      quiz: [
        {
          question: '¿Qué caracteriza a una función pura en ingeniería de software?',
          options: [
            'Que tiene más de 100 líneas de código',
            'Que no modifica variables externas y siempre retorna el mismo resultado para los mismos argumentos',
            'Que solo se ejecuta los días domingos',
            'Que no usa la palabra return',
          ],
          answerIndex: 1,
          explanation:
            'Una función pura es determinista y no produce efectos secundarios en el estado externo, facilitando el testing y la mantenibilidad.',
        },
      ],
    },
    {
      id: 9,
      title: 'MÓDULO 9: COLECCIONES ELEMENTALES Y MANEJO DEFENSIVO DE ERRORES',
      description:
        'Estructuras de datos elementales: arreglos indexados y objetos clave-valor. Manejo de excepciones con try/catch y defensa contra caídas en producción.',
      items: [
        'Arreglos: listas ordenadas indexadas en base 0.',
        'Diccionarios / Objetos: almacenamiento clave-valor para modelar entidades del mundo real.',
        'Errores de sintaxis vs excepciones en tiempo de ejecución (Runtime Errors).',
        'El bloque try / catch / finally: capturar fallos antes de que tiren el servidor.',
      ],
      content: `## La Realidad de la Producción: Las Cosas Van a Fallar

Los novatos escriben código asumiendo que todo saldrá perfecto. Los ingenieros escriben código asumiendo que:
* La base de datos puede perder conexión por 3 segundos.
* El usuario va a ingresar letras en el campo de precio.
* La API externa de pagos puede devolver un error 500.

### Manejo de Excepciones con Try/Catch
El bloque \`try / catch\` es tu paracaídas de emergencia:
\`\`\`javascript
try {
  // Código que podría fallar (ej: conectar a una API o parsear un JSON)
  const datos = JSON.parse(respuesta);
} catch (error) {
  // Qué hacer si falla (registrar el log, avisar al usuario, reintentar)
  console.error("Fallo controlado:", error.message);
} finally {
  // Se ejecuta SIEMPRE (ej: cerrar la conexión o liberar memoria)
}
\`\`\``,
      codeSnippet: `// Demostración de manejo defensivo de errores y colecciones

function procesarCatalogo(productosJSON) {
  try {
    const productos = JSON.parse(productosJSON);

    if (!Array.isArray(productos)) {
      throw new Error("El formato esperado es una lista de productos");
    }

    const filtrados = productos.filter((p) => p.precio > 0);
    return { exito: true, datos: filtrados, total: filtrados.length };
  } catch (error) {
    // El sistema captura el error y no colapsa el servidor
    return { exito: false, mensaje: \`Error al procesar: \${error.message}\` };
  }
}

console.log(procesarCatalogo('[{"nombre":"Laptop","precio":1200}]'));
console.log(procesarCatalogo('JSON_CORRUPTO_QUE_ROMPERIA_TODO'));`,
      quiz: [
        {
          question: '¿Cuál es la función principal del bloque try/catch en una aplicación?',
          options: [
            'Hacer que el código corra al doble de velocidad',
            'Capturar y gestionar excepciones en tiempo de ejecución para evitar que el programa se cierre inesperadamente',
            'Encriptar las contraseñas en el disco',
            'Borrar las variables que no se usan',
          ],
          answerIndex: 1,
          explanation:
            'El bloque try/catch intercepta errores durante la ejecución y permite recuperarse de forma segura sin abortar el proceso.',
        },
      ],
    },
    {
      id: 10,
      title: 'MÓDULO 10: PROYECTO INTEGRADOR: AUDITORÍA DE SISTEMAS Y BRECHAS DE IA',
      description:
        'Aplica todo el ciclo de ingeniería en un caso real: especificación, pseudocódigo, código defensivo y auditoría crítica contra alucinaciones de IA.',
      items: [
        'El flujo completo: Problema ➔ Descomposición ➔ Pseudocódigo ➔ Código Defensivo ➔ Pruebas.',
        'Auditoría Anti-Alucinación: Detección de las 3 trampas clásicas del código generado por IA.',
        'Prevención de inyecciones y tipos incompatibles.',
        'Mejora continua: cómo refactorizar código sin romper funcionalidad existente.',
      ],
      content: `## Proyecto Integrador: El Ingeniero vs El Código Generado por IA

La Inteligencia Artificial es una herramienta aceleradora extraordinaria, pero carece de sentido común arquitectónico. En este proyecto final, conectarás todos los módulos aprendidos:

### Las 3 Fallas Más Frecuentes de la IA en Código Novato
1. **La Falla del "Tipo Fantasma":** La IA asume que \`precio\` es un número, pero en la vida real viene como string \`"100"\` desde un formulario web. Al sumar \`"100" + 20\`, el resultado es \`"10020"\` en lugar de \`120\`.
2. **La Ausencia de Validación de Límites:** La IA calcula descuentos sin validar si el descuento es negativo (\`-50%\`) o mayor al 100%, permitiendo transacciones fraudulentas.
3. **El Silencio de Errores:** La IA suele atrapar excepciones con \`catch(e) {}\` vacío sin registrar logs, ocultando fallas críticas en producción.

Al completar este módulo y su desafío de laboratorio, habrás dominado el **Paso 0 de la Ingeniería de Software**, listo para abordar Algoritmos y Estructuras de Datos con total solvencia.`,
      codeSnippet: `// PROYECTO INTEGRADOR: Sistema Defensivo de Facturación

function calcularPedido(items, porcentajeDescuento = 0) {
  // 1. Guard Clause defensiva contra entradas nulas
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("El pedido debe contener al menos un artículo");
  }

  // 2. Validación estricta de porcentaje
  if (typeof porcentajeDescuento !== 'number' || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
    throw new Error("Porcentaje de descuento inválido (debe ser entre 0 y 100)");
  }

  // 3. Procesamiento seguro de items
  let subtotal = 0;
  for (const item of items) {
    const precio = Number(item.precio);
    const cantidad = Number(item.cantidad);

    if (isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0) {
      throw new Error(\`Artículo con precio o cantidad inválida: \${item.nombre || 'Desconocido'}\`);
    }

    subtotal += precio * cantidad;
  }

  // 4. Cálculos finales
  const descuento = subtotal * (porcentajeDescuento / 100);
  const total = subtotal - descuento;

  return { subtotal, descuento, total };
}

// Prueba exitosa
console.log(calcularPedido([{ nombre: "Teclado", precio: "45", cantidad: 2 }], 10));`,
      quiz: [
        {
          question: '¿Cuál de las siguientes es una vulnerabilidad típica en código generado por IA sin supervisión humana?',
          options: [
            'El código siempre se borra solo a la medianoche',
            'Falta de validación de tipos y límites en entradas del usuario (ej: aceptar descuentos negativos o concatenar strings con números)',
            'Uso excesivo de la memoria caché del teclado',
            'La IA no permite usar bucles for',
          ],
          answerIndex: 1,
          explanation:
            'La IA suele generar código para el "camino feliz", omitiendo validaciones defensivas de límites y tipos que pueden causar fraudes o caídas del sistema.',
        },
      ],
    },
  ],
};

const COMPUTATIONAL_THINKING_EXERCISES: Record<number, TutorExercise[]> = {
  1: [
    {
      id: 1001,
      instruction: "Descomposición Modular: Escribe una función 'calcular_nomina(horas, tarifa_hora)' en Python o JavaScript. Si las horas superan 40, las horas extra se pagan al 1.5x. Retorna el salario bruto.",
      placeholder: "// En JavaScript o Python:\nfunction calcular_nomina(horas, tarifa_hora) {\n  // 1. Calcula horas regulares (hasta 40)\n  // 2. Calcula horas extra si horas > 40\n  // 3. Retorna total\n}\n",
      expectedKeywords: ["calcular_nomina", "horas", "tarifa_hora", "40", "return"],
      hint: "Separa el cálculo en dos partes: 'horas_regulares = Math.min(horas, 40)' y 'horas_extra = Math.max(0, horas - 40) * tarifa_hora * 1.5'.",
      isEmailSubmission: false,
    },
    {
      id: 1002,
      instruction: "Validación de Contrato: Implementa 'validar_pedido(pedido)' que compruebe que el objeto contenga 'id', 'cliente' y 'total > 0'. Retorna true si es válido o false si está corrupto.",
      placeholder: "function validar_pedido(pedido) {\n  if (!pedido) return false;\n  // Valida que existan id, cliente y que total sea mayor a 0\n  return true;\n}\n",
      expectedKeywords: ["validar_pedido", "pedido", "total", ">", "0"],
      hint: "Usa Guard Clauses: si '!pedido.id || !pedido.cliente || typeof pedido.total !== 'number' || pedido.total <= 0' retorna false.",
      isEmailSubmission: false,
    },
  ],
  2: [
    {
      id: 2001,
      instruction: "Traducción de Pseudocódigo: Implementa la función 'es_primo(n)' a partir del algoritmo determinista: n <= 1 no es primo; verifica divisibilidad desde 2 hasta la raíz cuadrada de n.",
      placeholder: "def es_primo(n):\n    if n <= 1:\n        return False\n    # Itera desde 2 hasta int(n**0.5) + 1\n    return True\n",
      expectedKeywords: ["def es_primo", "n", "<=", "1", "return", "%", "0"],
      hint: "En Python usa 'for d in range(2, int(n**0.5) + 1): if n % d == 0: return False'. En JS usa 'for (let d = 2; d * d <= n; d++)'.",
      isEmailSubmission: false,
    },
    {
      id: 2002,
      instruction: "Control de Casos Borde en Algoritmos: Escribe 'calcular_promedio(calificaciones)' que sume las notas y divida entre el total. Si la lista está vacía, retorna 0 (no NaN ni excepción por división entre 0).",
      placeholder: "function calcular_promedio(calificaciones) {\n  // Maneja caso borde: arreglo vacío\n  // Suma elementos y divide\n}\n",
      expectedKeywords: ["calcular_promedio", "calificaciones", "length", "return", "/"],
      hint: "Primero valida 'if (!calificaciones || calificaciones.length === 0) return 0;'. Luego usa reduce() o un bucle for.",
      isEmailSubmission: false,
    },
  ],
  3: [
    {
      id: 3001,
      instruction: "Tipado Estricto vs Coerción Implícita: Crea 'sumar_seguro(a, b)' que convierta explícitamente a y b a números válidos usando Number() o float(). Si alguno no es numérico, lanza un Error.",
      placeholder: "function sumar_seguro(a, b) {\n  const numA = Number(a);\n  const numB = Number(b);\n  // Si alguno es NaN, lanza un Error con throw new Error('Valor inválido')\n  return numA + numB;\n}\n",
      expectedKeywords: ["sumar_seguro", "Number", "isNaN", "throw", "return"],
      hint: "Evita la trampa de JS '10' + 5 = '105' obligando a verificar 'if (Number.isNaN(numA) || Number.isNaN(numB)) throw new Error('Entrada no numérica');'.",
      isEmailSubmission: false,
    },
    {
      id: 3002,
      instruction: "Inmutabilidad en Memoria: Escribe 'actualizar_rol(usuario, nuevoRol)' que retorne un nuevo objeto con el nuevo rol sin alterar el objeto original pasado por referencia.",
      placeholder: "function actualizar_rol(usuario, nuevoRol) {\n  // Retorna una copia con el nuevo rol usando Spread operator (...)\n}\n",
      expectedKeywords: ["actualizar_rol", "...", "usuario", "nuevoRol", "return"],
      hint: "Usa la sintaxis de propagación de objetos: 'return { ...usuario, rol: nuevoRol };' para no mutar el objeto en el Heap.",
      isEmailSubmission: false,
    },
  ],
  4: [
    {
      id: 4001,
      instruction: "Patrón Guard Clauses: Refactoriza la lógica de retiro bancario 'procesar_retiro(saldo, monto, cuentaActiva)'. Si la cuenta no está activa, o el monto es menor o igual a 0, o el saldo es insuficiente, retorna un mensaje de error temprano.",
      placeholder: "function procesar_retiro(saldo, monto, cuentaActiva) {\n  // 1. Guard Clause: cuenta inactiva\n  // 2. Guard Clause: monto inválido\n  // 3. Guard Clause: saldo insuficiente\n  // Camino feliz:\n  return { exito: true, nuevoSaldo: saldo - monto };\n}\n",
      expectedKeywords: ["procesar_retiro", "cuentaActiva", "monto", "saldo", "return"],
      hint: "Evita anidar 'if' dentro de 'if'. Valida cada error con un return directo y deja la operación exitosa en la última línea.",
      isEmailSubmission: false,
    },
    {
      id: 4002,
      instruction: "Lógica Booleana y Rangos: Implementa 'clasificar_descuento(edad, esEstudiante)' que otorgue 0.30 a menores de 18 o estudiantes, 0.50 a mayores de 65, y 0 a los demás.",
      placeholder: "def clasificar_descuento(edad, es_estudiante):\n    # Evalúa condiciones de forma estricta\n    return 0.0\n",
      expectedKeywords: ["def clasificar_descuento", "edad", "es_estudiante", "return", "0.3", "0.5"],
      hint: "Usa 'if edad >= 65: return 0.50', luego 'if edad < 18 or es_estudiante: return 0.30', y finalmente 'return 0.0'.",
      isEmailSubmission: false,
    },
  ],
  5: [
    {
      id: 5001,
      instruction: "Prevención de Ciclos Infinitos con Centinela: Escribe 'buscar_con_limite(coleccion, objetivo, maxIter)' que busque un elemento usando un bucle while y aborte si las iteraciones superan maxIter.",
      placeholder: "function buscar_con_limite(coleccion, objetivo, maxIter = 1000) {\n  let i = 0;\n  // Bucle while con centinela de seguridad\n}\n",
      expectedKeywords: ["buscar_con_limite", "while", "maxIter", "i++", "return"],
      hint: "La condición del bucle debe ser 'while (i < coleccion.length && i < maxIter)'. Si alcanza maxIter sin encontrarlo, lanza o retorna error.",
      isEmailSubmission: false,
    },
    {
      id: 5002,
      instruction: "Acumuladores e Invariantes: Escribe 'calcular_factorial(n)' asegurando que para n < 0 lance un error, para n == 0 retorne 1, y para n > 0 acumule el producto en un bucle for.",
      placeholder: "def calcular_factorial(n):\n    if n < 0:\n        raise ValueError('No definido para negativos')\n    # Acumula el producto de 1 hasta n\n    return resultado\n",
      expectedKeywords: ["def calcular_factorial", "n", "range", "resultado", "return"],
      hint: "Inicializa 'resultado = 1' e itera 'for i in range(1, n + 1): resultado *= i'. Retorna resultado.",
      isEmailSubmission: false,
    },
  ],
  6: [
    {
      id: 6001,
      instruction: "Simulador de la ALU: Implementa 'ejecutar_alu(operacion, regA, regB)' que soporte 'ADD', 'SUB' y 'MUL'. Retorna un objeto con el resultado numérico y una bandera zero_flag (true si el resultado es 0).",
      placeholder: "function ejecutar_alu(operacion, regA, regB) {\n  let resultado = 0;\n  // switch(operacion): ADD, SUB, MUL\n  return { resultado, zero_flag: resultado === 0 };\n}\n",
      expectedKeywords: ["ejecutar_alu", "operacion", "regA", "regB", "zero_flag", "return"],
      hint: "En el switch: 'ADD' hace regA + regB, 'SUB' hace regA - regB, 'MUL' hace regA * regB. Retorna '{ resultado, zero_flag: resultado === 0 }'.",
      isEmailSubmission: false,
    },
    {
      id: 6002,
      instruction: "Ciclo Fetch-Decode-Execute: Crea una función 'emular_cpu(instrucciones)' que procese una lista de instrucciones [{op: 'SET', reg: 'R0', val: 5}, {op: 'ADD', reg: 'R0', val: 3}]. Almacena los valores en un objeto de registros.",
      placeholder: "function emular_cpu(instrucciones) {\n  const registros = { R0: 0, R1: 0 };\n  let pc = 0; // Program Counter\n  while (pc < instrucciones.length) {\n    const inst = instrucciones[pc];\n    // Ejecuta inst.op y actualiza registros\n    pc++;\n  }\n  return registros;\n}\n",
      expectedKeywords: ["emular_cpu", "registros", "pc", "instrucciones", "return"],
      hint: "Incrementa el Program Counter en cada ciclo (pc++). Cada instrucción simula el ciclo de hardware de la CPU.",
      isEmailSubmission: false,
    },
  ],
  7: [
    {
      id: 7001,
      instruction: "Stack vs Heap: Copia Defensiva Profunda. Escribe 'clonar_profundo(objeto)' que use structuredClone() o JSON.parse(JSON.stringify()) para independizar completamente la referencia en el Heap de los objetos anidados.",
      placeholder: "function clonar_profundo(objeto) {\n  // Retorna una copia desvinculada del Heap original\n}\n",
      expectedKeywords: ["clonar_profundo", "objeto", "return"],
      hint: "Usa 'return structuredClone(objeto);' o 'return JSON.parse(JSON.stringify(objeto));'. Esto previene bugs de mutación compartida.",
      isEmailSubmission: false,
    },
    {
      id: 7002,
      instruction: "Modelo de Latencias de Memoria: Implementa 'obtener_latencia(tipo)' que devuelva el tiempo estimado de acceso en nanosegundos para: 'REGISTROS' (0.5), 'CACHE_L1' (1), 'RAM' (100) y 'DISCO_SSD' (100000).",
      placeholder: "def obtener_latencia(tipo):\n    # Diccionario de latencias de hardware\n    latencias = {\n        'REGISTROS': 0.5,\n        'CACHE_L1': 1.0,\n        'RAM': 100.0,\n        'DISCO_SSD': 100000.0\n    }\n    return latencias.get(tipo, -1)\n",
      expectedKeywords: ["def obtener_latencia", "latencias", "RAM", "return"],
      hint: "El diccionario mapea cada nivel jerárquico a su costo físico real en nanosegundos.",
      isEmailSubmission: false,
    },
  ],
  8: [
    {
      id: 8001,
      instruction: "Funciones Puras sin Efectos Secundarios: Transforma una función impura que modifica un arreglo global en una función pura 'agregar_item_puro(lista, nuevoItem)' que devuelva un nuevo arreglo con el elemento agregado.",
      placeholder: "function agregar_item_puro(lista, nuevoItem) {\n  // No uses lista.push(nuevoItem) porque muta la lista original!\n  // Retorna un nuevo arreglo usando Spread [...lista, nuevoItem]\n}\n",
      expectedKeywords: ["agregar_item_puro", "...", "lista", "nuevoItem", "return"],
      hint: "Una función pura no altera sus argumentos de entrada: 'return [...lista, nuevoItem];'.",
      isEmailSubmission: false,
    },
    {
      id: 8002,
      instruction: "Composición de Funciones: Escribe 'componer(f, g)' que reciba dos funciones y retorne una nueva función que aplique f(g(x)). Pruébala duplicando y luego sumando 10.",
      placeholder: "const componer = (f, g) => (x) => {\n  // Retorna la aplicación compuesta f(g(x))\n};\n",
      expectedKeywords: ["componer", "f", "g", "x", "return"],
      hint: "La composición matemática (f ∘ g)(x) se traduce en código como 'const componer = (f, g) => (x) => f(g(x));'.",
      isEmailSubmission: false,
    },
  ],
  9: [
    {
      id: 9001,
      instruction: "Manejo Robusto con Try/Catch: Escribe 'procesar_json_seguro(cadenaTexto)' que intente parsear JSON.parse(cadenaTexto). Si tiene éxito retorna { ok: true, data }. Si falla atrapa el error y retorna { ok: false, error: err.message } sin colapsar el programa.",
      placeholder: "function procesar_json_seguro(cadenaTexto) {\n  try {\n    const data = JSON.parse(cadenaTexto);\n    return { ok: true, data };\n  } catch (err) {\n    return { ok: false, error: err.message };\n  }\n}\n",
      expectedKeywords: ["procesar_json_seguro", "try", "JSON.parse", "catch", "return", "ok"],
      hint: "Nunca dejes que una entrada corrupta tire abajo el hilo principal de la aplicación. Captura la excepción y responde con un contrato predecible.",
      isEmailSubmission: false,
    },
    {
      id: 9002,
      instruction: "Filtrado Defensivo de Colecciones: Implementa 'filtrar_transacciones_validas(transacciones)' que use filter() para conservar solo aquellas donde 'monto > 0' y 'estado === \"APROBADA\"'.",
      placeholder: "function filtrar_transacciones_validas(transacciones) {\n  if (!Array.isArray(transacciones)) return [];\n  // Retorna arreglo filtrado\n}\n",
      expectedKeywords: ["filtrar_transacciones_validas", "filter", "monto", "APROBADA", "return"],
      hint: "Usa 'return transacciones.filter(t => t && t.monto > 0 && t.estado === \"APROBADA\");'.",
      isEmailSubmission: false,
    },
  ],
  10: [
    {
      id: 10001,
      instruction: "Auditoría de Código Generado por IA: Corrige una función generada por IA vulnerable 'dividir_seguro(dividendo, divisor)' que no validaba divisor === 0 ni datos nulos. Lanza un Error con mensaje claro si el divisor es 0.",
      placeholder: "function dividir_seguro(dividendo, divisor) {\n  // Valida que sean números válidos\n  // Valida que divisor !== 0\n  // Retorna el cociente dividendo / divisor\n}\n",
      expectedKeywords: ["dividir_seguro", "divisor", "===", "0", "throw", "return", "/"],
      hint: "Las IAs suelen olvidar 'if (divisor === 0) throw new Error(\"División por cero no permitida\");'. Agrega esa cláusula de guarda indispensable.",
      isEmailSubmission: false,
    },
    {
      id: 10002,
      instruction: "Suite de Verificación y Testing de Propiedades: Implementa 'test_calculadora_impuesto()' que ejecute 3 aserciones para 'calcular_impuesto(subtotal, tasa)': 1) Caso estándar (100, 0.12) = 12, 2) Caso borde subtotal 0 = 0, 3) Caso subtotal negativo lanza error. Retorna true si todas pasan.",
      placeholder: "function test_calculadora_impuesto(calcular_impuesto) {\n  // Caso 1: estándar\n  if (calcular_impuesto(100, 0.12) !== 12) return false;\n  // Caso 2: subtotal 0\n  if (calcular_impuesto(0, 0.12) !== 0) return false;\n  // Caso 3: validación de error\n  try {\n    calcular_impuesto(-50, 0.12);\n    return false; // Debió lanzar error!\n  } catch (e) {\n    // Pasó\n  }\n  return true;\n}\n",
      expectedKeywords: ["test_calculadora_impuesto", "calcular_impuesto", "try", "catch", "return", "true"],
      hint: "Las pruebas automatizadas son la única garantía de que los cambios futuros o el código de IA no destruyan la funcionalidad existente.",
      isEmailSubmission: false,
    },
  ],
};

// Adjuntar ejercicios estructurados a cada módulo de pensamiento computacional
COMPUTATIONAL_THINKING_COURSE.modules.forEach((mod) => {
  if (COMPUTATIONAL_THINKING_EXERCISES[mod.id]) {
    mod.exercises = COMPUTATIONAL_THINKING_EXERCISES[mod.id];
  }
});

