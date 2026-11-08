import { Course } from '../domain/models';

export const AUTOMATA_COMPILER_COURSE: Course = {
  id: 'automatas_compiladores',
  title: 'Lenguajes Formales, Autómatas y Compiladores',
  shortTitle: 'Autómatas & Compiladores',
  badge: 'Teoría de la Computación & Software',
  icon: '⚙️',
  description: 'Curso magistral de 15 módulos (~2.500 palabras de teoría desarrollada por clase): alfabetos, DFA/NFA, regex, bombeo, CFG/PDA, Turing, y un compilador de punta a punta (lexer, parser, semántica, IR, optimización y codegen), con ejercicios guiados para el tutor IA.',
  whyStudyTitle: '🧠 ¿Por qué dominar Autómatas y Compiladores?',
  whyStudyText: 'Dominar autómatas y compiladores es dominar el «cómo funciona el software que entiende software»: desde la definición formal de lenguajes (DFA, CFG, Turing) hasta lexer, parser, IR, optimización y generación de código — el mismo pipeline que LLVM, Clang y los intérpretes industriales, con rigor de ingeniería y laboratorio práctico.',
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
    { id: 10, title: "Análisis Léxico (Lexer)", why: "Conversión de texto fuente en flujo de flujo de tokens mediante autómatas y regex." },
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
  modules: [{
      id: 1,
      title: "MÓDULO 1: ALFABETOS, CADENAS Y LENGUAJES FORMALES",
      description: "Los bloques fundamentales de la Teoría de la Computación: símbolos, concatenación y operaciones sobre lenguajes.",
      items: [
      "Alfabeto Σ: conjunto finito no vacío de símbolos; distinguir símbolo de cadena w ∈ Σ*.",
      "Longitud |w|, cadena vacía ε como neutro de concatenación: wε = εw = w.",
      "Σ* versus Σ+: clausura de Kleene incluye ε; Σ+ excluye ε cuando Σ no es vacío.",
      "Lenguaje formal L ⊆ Σ*: conjunto (finito o infinito); ∅ ≠ {ε}.",
      "Operaciones algebraicas: unión, concatenación de lenguajes L₁L₂ y estrella L*.",
      "Conteo: |Σ|^k cadenas de longitud exacta k; Σ* es infinito pero enumerable.",
      "Prefijos, sufijos y factores: vocabulario para bombeo y análisis de protocolos.",
      "Modelar texto fuente como cadena sobre bytes/ASCII antes de tokenizar.",
      "Validar pertenencia char a Σ en lexers para rechazar símbolos fuera del alfabeto."
],
      content: "## Panorama del tema: ALFABETOS, CADENAS Y LENGUAJES FORMALES\n\nAntes de hablar de compiladores, autómatas o complejidad, necesitamos un **vocabulario preciso** para describir texto. Un archivo fuente de Python no es «información vaga»: es una **cadena** — secuencia finita de **símbolos** tomados de un **alfabeto** \\(\\Sigma\\). Cuando decimos que el lexer «tokeniza», en realidad particiona una cadena sobre un alfabeto grande (caracteres Unicode o ASCII) en trozos que más adelante trataremos como símbolos de otro alfabeto (nombres de token).\n\nUn **lenguaje formal** \\(L\\) no es un idioma humano: es un **conjunto** de cadenas \\(L \\subseteq \\Sigma^*\\). «Todas las cadenas binarias con un número par de unos» es un lenguaje; «todos los programas C sintácticamente válidos» es otro mucho más grande. La teoría de la computación estudia qué familia de lenguajes puede reconocer qué clase de máquina; compiladores viven en esa frontera.\n\nEn esta lección fijamos \\(\\Sigma\\), \\(\\epsilon\\), concatenación, estrella y clausura positiva de Kleene, operaciones algebraicas entre lenguajes (unión, concatenación, estrella), y la intuición de por qué \\(\\Sigma^*\\) es **infinito** pero cada cadena concreta es **finita**. Es el cimiento de los módulos 2–5 y del laboratorio del curso.\n\nKleene introdujo históricamente la estrella al estudiar «eventualidades» en lógica; hoy, la misma notación aparece en motores de regex, en demostraciones del teorema de equivalencia DFA–NFA–regex, y en la especificación de tokens. Dominar el formalismo evita traducir mal un patrón de producción («cualquier cantidad de dígitos») a una condición de código incorrecta.\n\n## Objetivos de la lección\n\n- Definir alfabeto, cadena, longitud y cadena vacía \\(\\epsilon\\) sin ambigüedad.\n- Calcular concatenaciones y describir \\(\\Sigma^*\\) versus \\(\\Sigma^+\\).\n- Definir lenguaje formal como subconjunto de \\(\\Sigma^*\\) y dar ejemplos finitos e infinitos.\n- Aplicar operaciones de unión, concatenación y estrella de Kleene sobre lenguajes.\n- Conectar estas definiciones con la representación de texto en memoria y con el primer snippet del curso.\n\n## Desarrollo de la lección\n\n### Alfabeto \\(\\Sigma\\) y símbolos\n\nUn **alfabeto** \\(\\Sigma\\) es un conjunto **finito y no vacío** de **símbolos**. Ejemplos:\n\n- \\(\\Sigma = \\{0, 1\\}\\) — bits, cadenas binarias.\n- \\(\\Sigma = \\{a, b\\}\\) — el juguete teórico habitual en autómatas.\n- \\(\\Sigma\\) ASCII imprimible — modeliza bytes de un archivo `.c` antes de normalizar Unicode.\n\n**No confundas** alfabeto con lenguaje: el alfabeto es el «menú de letras»; las **palabras** (cadenas) se construyen eligiendo símbolos con repetición y orden. Un símbolo puede ser un carácter (`+`), un dígito (`7`) o una abstracción de token (`ID`, `NUM`) cuando \\(\\Sigma\\) es el alfabeto de **tokens** en fase de parser.\n\nEn implementación, Python representa una cadena sobre Unicode; para nuestros ejemplos binarios usamos `str` con caracteres `'0'` y `'1'`, que son **símbolos de un carácter** cada uno. Formalmente \\(\\Sigma\\) es un conjunto matemático; en código usamos `set` o tipos que respetan la misma finitud.\n\n### Cadenas, longitud y la cadena vacía\n\nUna **cadena** (palabra) \\(w\\) sobre \\(\\Sigma\\) es una secuencia finita \\(w = s_1 s_2 \\ldots s_k\\) con cada \\(s_i \\in \\Sigma\\).\n\n- **Longitud** \\(|w| = k\\). Si \\(k = 0\\), la cadena es la **cadena vacía** \\(\\epsilon\\). Por convención \\(|\\epsilon| = 0\\); \\(\\epsilon\\) no es «ausencia de alfabeto», es la cadena de cero símbolos.\n- Notación: a veces escribimos cadenas como `01101` sin espacio entre símbolos.\n\n**Ejemplos** con \\(\\Sigma = \\{a, b\\}\\):\n\n| Cadena \\(w\\) | \\(|w|\\) | ¿Pertenece a \\(\\Sigma^*\\)? |\n|--------------|---------|------------------------------|\n| \\(\\epsilon\\) | 0 | Sí |\n| `a` | 1 | Sí |\n| `abba` | 4 | Sí |\n| `cab` | — | No (c \\(\\notin \\Sigma\\)) |\n\n### Concatenación y propiedades algebraicas\n\nLa **concatenación** de \\(w_1\\) y \\(w_2\\), escrita \\(w_1 \\cdot w_2\\) o \\(w_1 w_2\\), es la cadena obtenida **pegando** \\(w_1\\) al frente de \\(w_2\\). Ejemplo: `ab` · `ba` = `abba`.\n\nPropiedades importantes:\n\n1. **Asociativa**: \\((w_1 w_2) w_3 = w_1 (w_2 w_3)\\).\n2. **Elemento neutro**: \\(w \\cdot \\epsilon = \\epsilon \\cdot w = w\\) para toda cadena \\(w\\).\n3. **No conmutativa** en general: `ab` \\(\\neq\\) `ba`.\n\nEn el snippet del módulo, `concatenar` implementa exactamente esta operación mediante `w1 + w2` en Python; `longitud` implementa \\(|\\cdot|\\) con `len`.\n\n### Estrella de Kleene \\(\\Sigma^*\\) y clausura positiva \\(\\Sigma^+\\)\n\n- \\(\\Sigma^*\\) = conjunto de **todas** las cadenas finitas sobre \\(\\Sigma\\), **incluyendo** \\(\\epsilon\\).\n- \\(\\Sigma^+\\) = todas las cadenas de longitud **≥ 1**; equivale a \\(\\Sigma^* \\setminus \\{\\epsilon\\}\\) cuando \\(\\Sigma \\neq \\emptyset\\).\n\n**Cardinalidad**: si \\(|\\Sigma| = n \\ge 1\\), entonces \\(|\\Sigma^*|\\) es **contablemente infinito**. Para \\(n = 2\\) y longitud exacta \\(k\\) hay \\(2^k\\) cadenas; al sumar \\(k = 0, 1, 2, \\ldots\\) obtenemos infinitas cadenas distintas.\n\nConstrucción recursiva mental: \\(\\Sigma^0 = \\{\\epsilon\\}\\); \\(\\Sigma^{k+1} = \\{w a \\mid w \\in \\Sigma^k, a \\in \\Sigma\\}\\); entonces \\(\\Sigma^* = \\bigcup_{k \\ge 0} \\Sigma^k\\).\n\nLa función `generar_cadenas_kleene(sigma, k)` del curso **no enumera todo** \\(\\Sigma^*\\) (sería imposible en un programa finito); lista cadenas de **longitud exacta** `k` construyéndolas a partir de las de longitud `k-1`. Para `k=2` y \\(\\Sigma=\\{0,1\\}\\) produce `['00','01','10','11']`. El caso base `k=0` devuelve `[\"\"]`, es decir \\(\\{\\epsilon\\}\\).\n\n### Lenguajes formales: conjuntos, no gramáticas (aún)\n\nUn **lenguaje** \\(L\\) sobre \\(\\Sigma\\) cumple \\(L \\subseteq \\Sigma^*\\).\n\nEjemplos:\n\n- **Finito**: \\(L = \\{\\epsilon, 0, 00\\}\\).\n- **Infinito por prefijo**: \\(L = \\{0^n \\mid n \\ge 0\\} = \\{\\epsilon, 0, 00, 000, \\ldots\\}\\).\n- **Vacío**: \\(L = \\emptyset\\) (ninguna cadena); distinto de \\(\\{\\epsilon\\}\\), que **sí** contiene la cadena vacía.\n\nEn compiladores, «el lenguaje de identificadores C válidos» es un subconjunto enorme de \\(\\Sigma^*\\) donde \\(\\Sigma\\) incluye letras, dígitos y `_`. Más adelante veremos que ese fragmento es **regular** (módulo 2–4).\n\n### Operaciones entre lenguajes (puente a regex)\n\nDados \\(L_1, L_2 \\subseteq \\Sigma^*\\):\n\n| Operación | Definición |\n|-----------|------------|\n| Unión | \\(L_1 \\cup L_2 = \\{w \\mid w \\in L_1 \\lor w \\in L_2\\}\\) |\n| Concatenación | \\(L_1 L_2 = \\{w_1 w_2 \\mid w_1 \\in L_1, w_2 \\in L_2\\}\\) |\n| Estrella de Kleene | \\(L^* = \\bigcup_{i \\ge 0} L^i\\) con \\(L^0 = \\{\\epsilon\\}\\), \\(L^{i+1} = L^i L\\) |\n\nEjemplo numérico: \\(L_1 = \\{a\\}\\), \\(L_2 = \\{b, c\\}\\) ⇒ \\(L_1 L_2 = \\{ab, ac\\}\\). Estas operaciones son las que las **expresiones regulares** nombran más adelante; hoy sólo necesitas la intuición de conjuntos.\n\n### De caracteres a tokens (visión de compilador)\n\nUn compilador no analiza «caracteres aislados» en el parser: el **lexer** produce cadenas sobre un alfabeto de **tipos de token**. Formalmente el mismo marco sirve: si \\(\\Sigma_{\\mathrm{tok}} = \\{\\textbf{ID}, \\textbf{NUM}, \\textbf{PLUS}, \\ldots\\}\\), una **secuencia de tokens** es una cadena sobre \\(\\Sigma_{\\mathrm{tok}}\\) **con restricciones** impuestas por la gramática (módulo 6).\n\nSin dominar \\(\\Sigma^*\\), no puedes enunciar correctamente «el lenguaje aceptado por el autómata \\(M\\)», ni demostrar que \\(a^n b^n\\) **no** es regular (módulo 5).\n\n### Ejercicios guiados de escritura formal\n\n**Ejercicio A.** Sea \\(\\Sigma = \\{0, 1\\}\\). Enumera \\(L = \\{w \\in \\Sigma^* \\mid |w| \\le 2\\}\\) sin olvidar \\(\\epsilon\\). Solución: \\(\\{\\epsilon, 0, 1, 00, 01, 10, 11\\}\\) — son \\(1 + 2 + 4 = 7\\) cadenas.\n\n**Ejercicio B.** Describe en español el lenguaje \\(L = \\{w \\mid w \\text{ comienza con } 1\\}\\). Es infinito: `1`, `10`, `101001`, … Pertenece a la familia de **lenguajes regulares** que estudiaremos con DFA.\n\n**Ejercicio C.** Si \\(L_1 = \\{\\epsilon\\}\\) y \\(L_2 = \\{0\\}\\), calcula \\(L_1 L_2\\) y \\(L_2 L_1\\). Ambos son \\(\\{0\\}\\) porque pegar \\(\\epsilon\\) no cambia la cadena. Esto muestra por qué \\(\\epsilon\\) es neutro.\n\n### Prefijos, sufijos y subcadenas (vocabulario útil)\n\nDada \\(w = uvz\\):\n\n- **Prefijo**: cualquier \\(u\\) (incluidos \\(\\epsilon\\) y \\(w\\) completa).\n- **Sufijo**: cualquier \\(z\\).\n- **Subcadena (factor)**: cualquier \\(v\\) con \\(w = xvy\\) para algún \\(x, y\\).\n\nEn análisis de algoritmos sobre strings (KMP, rolling hash), estas definiciones aparecen constantemente. El **prefijo** también reaparece en el lema del bombeo (módulo 5): la parte \\(x\\) de la descomposición \\(w = xyz\\) controla dónde cae la repetición dentro de los primeros \\(p\\) símbolos.\n\n### Clausuras en el panel del compilador\n\nPiensa en el flujo del laboratorio QuimiSell: la cadena fuente `'val = (10 + 5) * 2'` es un elemento de \\(\\Sigma^*\\) con \\(\\Sigma\\) de caracteres imprimibles. El lexer produce otra cadena abstracta de tokens; el parser verifica pertenencia a un lenguaje **libre de contexto**. Cada fase asume que la entrada anterior ya es una cadena bien formada sobre su alfabeto correspondiente. Si mezclas niveles (tratar un token como carácter suelto en la gramática), los errores de implementación son sutiles y difíciles de depurar.\n\n### Nota sobre \\(\\Sigma\\) infinito en la práctica\n\nMatemáticamente \\(\\Sigma\\) es finito. En Unicode hay miles de puntos de código, pero para **un** proyecto fijamos un alfabeto finito efectivo: ASCII + un subconjunto acordado de Unicode. El lexer rechaza caracteres fuera de \\(\\Sigma\\) con error léxico. Esa decisión es de ingeniería, no de matemáticas puras, pero el modelo formal sigue siendo «\\(\\Sigma\\) finito».\n\n| Situación | Alfabeto efectivo |\n|-----------|-------------------|\n| Archivo `.c` ANSI | Bytes 0–255 o ASCII |\n| Python 3 con UTF-8 | Escalares Unicode permitidos por el estándar del lenguaje |\n| Binario en teoría | \\(\\{0,1\\}\\) |\n\n## Demostración enlazada al código del módulo\n\nEl snippet del módulo 1 en `automataCompilerCourse.ts` trabaja con \\(\\Sigma = \\{`0`,`1`\\}\\):\n\n```python\nalfabeto = {'0', '1'}\n```\n\n- `longitud(w)` — formaliza \\(|\\cdot|\\). Para `w=\"011\"` devuelve 3.\n- `concatenar(w1, w2)` — concatenación. `concatenar(\"01\",\"10\")` → `\"0110\"`.\n- `generar_cadenas_kleene(sigma, k)` — recursión sobre longitud:\n\n  - `k == 0` ⇒ lista con la cadena vacía (único elemento de \\(\\Sigma^0\\)).\n  - Paso inductivo: por cada \\(w\\) de longitud \\(k-1\\) y cada \\(s \\in \\Sigma\\), forma \\(ws\\) de longitud \\(k\\).\n\n**Trazado** para `k=2`: base `['']`; desde `sigma` añade `0` y `1` → `['0','1']`; otra vez → cuatro cadenas. Coincide con el comentario del `print`.\n\n**Extensión sugerida**: implementar `pertenece_a_estrella(w, sigma)` verificando que cada carácter de `w` está en el `set`. Eso conecta conjunto de símbolos con validación de entradas en el laboratorio (rechazar caracteres fuera del alfabeto antes de simular el DFA).\n\n**Complejidad del generador**: para \\(|Σ| = n\\) y longitud \\(k\\), el algoritmo genera \\(n^k\\) cadenas y realiza trabajo proporcional a ese número multiplicado por la longitud media de las cadenas (porque copia strings en cada concatenación). Por eso en teoría enumeramos \\(Σ^k\\); en producción nunca materializamos \\(Σ^*\\) completo — solo reconocemos pertenencia con autómatas.\n\n**Prueba mental adicional**: ¿qué devuelve `generar_cadenas_kleene({'a','b','c'}, 1)`? Debe ser `['a','b','c']`, es decir \\(Σ^1\\). Si llamas con `k=3` y \\(n=2\\), obtienes 8 cadenas: comprueba que no hay duplicados porque cada construcción extiende una cadena única con un símbolo nuevo.\n\n## Aplicaciones en sistemas reales\n\n**Codificación en disco (UTF-8)**: el archivo fuente es una cadena sobre bytes; el estándar UTF-8 define qué secuencias de bytes son válidas. El conjunto de prefijos válidos es un lenguaje sobre un alfabeto de 256 bytes; validadores de encoding implementan reconocimiento similar a autómatas (módulo 2).\n\n**Protocolos de red (HTTP/1.1)**: mensajes de solicitud son cadenas sobre ASCII con estructura lineal `MÉTODO SP URI SP VERSIÓN CRLF`. Las especificaciones RFC describen patrones que luego se implementan con regex y DFAs en servidores como nginx o Envoy.\n\n**Motores de base de datos (LIKE / SIMILAR TO)**: patrones con `%` y `_` son variantes restringidas de expresiones sobre cadenas de caracteres. El optimizador debe decidir si un filtro puede indexarse; saber que el patrón es regular asegura que el reconocimiento es lineal en la longitud de la fila.\n\n## Errores clásicos en examen\n\n- Confundir \\(\\emptyset\\) (lenguaje sin cadenas) con \\(\\{\\epsilon\\}\\) (lenguaje que solo contiene la cadena vacía).\n- Creer que \\(\\Sigma^+\\) incluye \\(\\epsilon\\): no, salvo el caso degenerado \\(\\Sigma = \\emptyset\\).\n- Pensar que \\(|w|\\) cuenta «palabras» en sentido natural: cuenta **símbolos** del alfabeto.\n- Escribir \\(w \\in \\Sigma\\) cuando debería ser \\(w \\in \\Sigma^*\\) (símbolo versus cadena de un símbolo).\n- Afirmar que \\(\\Sigma^*\\) es «demasiado grande para computar»: es infinito como conjunto, pero cada cadena de entrada en un compilador es finita y procesable.\n\n## Preguntas de entrevista\n\n**P: ¿Cuál es la diferencia entre alfabeto y lenguaje?**\n\n**R:** El alfabeto \\(\\Sigma\\) es el conjunto finito de símbolos permitidos. Un lenguaje \\(L\\) es cualquier subconjunto de \\(\\Sigma^*\\), es decir, un conjunto de cadenas finitas construidas con esos símbolos. Un alfabeto no contiene cadenas largas: contiene átomos; el lenguaje contiene palabras armadas con ellos.\n\n**P: ¿Por qué \\(\\epsilon\\) es importante si «no se ve» en el archivo fuente?**\n\n**R:** Porque la teoría trata concatenación y estrella de Kleene: \\(L^*\\) debe incluir la cadena vacía cuando \\(L\\) puede repetirse cero veces. En regex, `a*` acepta \\(\\epsilon\\). En autómatas, transiciones \\(\\epsilon\\) (módulo 3) reutilizan la misma noción. Sin \\(\\epsilon\\), muchas definiciones algebraicas se rompen.\n\n**P: Dado \\(\\Sigma = \\{a,b\\}\\), ¿cuántas cadenas de longitud exactamente 4 existen?**\n\n**R:** \\(|\\Sigma|^4 = 2^4 = 16\\). Se obtiene multiplicando \\(|\\Sigma|\\) por sí mismo cuatro veces, una por cada posición. No confundir con «4 cadenas»: son 16 palabras distintas de cuatro letras.\n\n### Repaso rápido en una tabla\n\n| Símbolo / notación | Significado |\n|--------------------|-------------|\n| \\(\\Sigma\\) | Alfabeto (finito, no vacío) |\n| \\(w \\in \\Sigma^*\\) | Cadena finita sobre \\(\\Sigma\\) |\n| \\(\\epsilon\\) | Cadena vacía, \\(|\\\\epsilon| = 0\\) |\n| \\(L \\subseteq \\Sigma^*\\) | Lenguaje formal |\n| \\(L_1 L_2\\) | Concatenación de lenguajes |\n| \\(L^*\\) | Cero o más repeticiones de cadenas de \\(L\\) |\n\nMemorizar esta tabla acelera la lectura de enunciados en los módulos de autómatas: casi todo problema comienza con «Sea \\(\\Sigma = \\ldots\\) y \\(L = \\ldots\\)».\n\nCuando implementes el lexer del laboratorio, cada token reconocido es evidencia de que un prefijo de la entrada pertenece a un lenguaje regular sobre caracteres; cuando el parser acepte la secuencia completa, habrás verificado pertenencia a un lenguaje más rico. Sin el vocabulario de esta lección, esas dos afirmaciones suenan metafóricas; con ellas, son enunciados matemáticos comprobables.\n\n## Síntesis y checklist antes de avanzar\n\n- Puedo dar un ejemplo de \\(\\Sigma\\) de tamaño 2 y listar todas las cadenas de longitud ≤ 2.\n- Explico por qué \\(w \\cdot \\epsilon = w\\) y por qué `concatenar` en Python refleja esa propiedad.\n- Distingo \\(\\Sigma^*\\) y \\(\\Sigma^+\\) con un ejemplo y con el resultado de `generar_cadenas_kleene` para \\(k=0\\) versus \\(k \\ge 1\\).\n- Defino lenguaje formal como subconjunto de \\(\\Sigma^*\\) y distingo lenguaje finito de infinito.\n- Ejecuté el snippet y predije su salida antes de correrlo.\n- Estoy listo para el módulo 2: autómatas deterministas que **reconocen** lenguajes regulares sobre \\(\\Sigma^*\\).\n\n\n### Notación mixta en apuntes y libros\n\nAlgunos textos escriben cadenas como secuencias de símbolos sin comillas; otros usan `cadena` con backticks en documentación de ingeniería. En demostraciones formales, distingue **símbolo** \\(a\\) (elemento de \\(\\Sigma\\)) de **cadena de un símbolo** \\(\\{a\\}\\). El lenguaje \\(\\{a\\}\\) contiene una sola cadena de longitud 1; el lenguaje \\(\\{aa\\}\\) contiene una sola cadena de longitud 2. Esta pedantería evita errores al pasar de regex \\((a)\\) a conjuntos.\n\n### Potencia de un lenguaje y notación \\(L^n\\)\n\nDefinimos \\(L^0 = \\{\\epsilon\\}\\) y \\(L^{n+1} = L^n L\\). Si \\(L = \\{0\\}\\), entonces \\(L^3 = \\{000\\}\\). Si \\(L = \\{0,1\\}\\), \\(L^2\\) tiene cuatro cadenas. La estrella \\(L^*\\) es unión de todas las potencias. Cuando en el módulo 4 escribas \\((01)^*\\), estás nombrando \\(\\bigcup_{n\\ge 0} (01)^n\\) donde \\((01)^n\\) es concatenación repetida de la cadena `01`, no exponente numérico.\n\n### Cardinalidad y computabilidad finita por entrada\n\nAunque \\(\\Sigma^*\\) sea infinito, toda entrada a un compilador tiene longitud \\(n\\) finita. Los autómatas y regex procesan en tiempo \\(O(n)\\) respecto a esa entrada. La infinitud de \\(\\Sigma^*\\) describe el **espacio de discurso** del problema, no el tamaño del archivo concreto del alumno.",
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
          question: "Sea Σ = {0,1}. ¿Qué conjunto describe Σ*?",
          options: ["Todas las cadenas finitas sobre {0,1}, incluyendo ε",
          "Cadenas de longitud al menos 1",
          "Solo cadenas con un número par de símbolos",
          "Únicamente {ε, 0, 1}"],
          answerIndex: 0,
          explanation: "Σ* es la unión de Σ^k para k ≥ 0; incluye la cadena vacía."
        },
        {
          question: "Con |Σ| = 3, ¿cuántas cadenas distintas tienen longitud exactamente 4?",
          options: ["12",
          "81",
          "27",
          "64"],
          answerIndex: 1,
          explanation: "Cada posición elige 3 símbolos: 3⁴ = 81."
        },
        {
          question: "¿En qué difieren ∅ y {ε} como lenguajes?",
          options: ["∅ no tiene cadenas; {ε} contiene una cadena de longitud 0",
          "Son iguales porque ε no cuenta",
          "∅ contiene ε implícitamente",
          "{ε} no es subconjunto de Σ*"],
          answerIndex: 0,
          explanation: "El lenguaje vacío no contiene ningún elemento; {ε} tiene exactamente un miembro."
        },
        {
          question: "Concatenar '10' con '01' produce:",
          options: ["'1001'",
          "'11'",
          "'0101'",
          "Error: símbolos incompatibles"],
          answerIndex: 0,
          explanation: "La concatenación pega secuencias: '10'·'01' = '1001', |w| = 4."
        },
        {
          question: "Si L₁ = {a, ab} y L₂ = {b}, ¿qué cadenas están en L₁L₂?",
          options: ["{ab, abb}",
          "{b, ab}",
          "{ab}",
          "{aab, abb}"],
          answerIndex: 0,
          explanation: "Cada w₁∈L₁ sigue a w₂='b': 'a'+'b'='ab'; 'ab'+'b'='abb'."
        },
        {
          question: "Un lexer «ASCII only» rechaza Unicode no mapeado. Formalmente modela:",
          options: ["Verificar w ∈ Σ* para un Σ finito de caracteres permitidos",
          "Decidir si w es regular",
          "Comprobar que |w| > 0",
          "Traducir w a tokens sin alfabeto"],
          answerIndex: 0,
          explanation: "Todo símbolo de w debe estar en Σ; fuera de Σ no hay cadena válida sobre ese alfabeto."
        },
        {
          question: "¿Por qué Σ⁺ excluye ε cuando Σ no es vacío?",
          options: ["Σ⁺ es unión de Σ^k con k ≥ 1",
          "ε no es un símbolo de Σ",
          "Σ⁺ es igual a Σ",
          "Porque Kleene no admite cero repeticiones"],
          answerIndex: 0,
          explanation: "Definición estándar: Σ⁺ = ⋃_{k≥1} Σ^k; el caso k=0 queda solo en Σ*."
        },
        {
          question: "Depura: `len(concatenar('', 'abc'))` en el snippet del módulo devuelve:",
          options: ["3",
          "0",
          "4",
          "TypeError"],
          answerIndex: 0,
          explanation: "ε es neutro: concatenar cadena vacía no altera longitud."
        },
        {
          question: "L = {0ⁿ | n ≥ 0}. ¿Qué relación tiene con Σ* para Σ={0}?",
          options: ["L es un subconjunto propio infinito de Σ*",
          "L = Σ* completo",
          "L es finito",
          "L no ⊆ Σ*"],
          answerIndex: 0,
          explanation: "Solo usa el símbolo 0 pero admite cualquier longitud; Σ* también tendría cadenas con 1 si Σ={0,1}."
        },
        {
          question: "¿Cuál operación entre lenguajes NO corresponde directamente a un operador regex estándar?",
          options: ["Complemento respecto a Σ*",
          "Unión",
          "Concatenación",
          "Estrella de Kleene"],
          answerIndex: 0,
          explanation: "Unión, concat y estrella son primitivas regex; complemento requiere teorema adicional (DFA)."
        }
      ],
      exercises: [
        {
          id: 6001,
          instruction: "Sin usar bibliotecas: escribe en Python una función `pertenece_kleene(w, sigma)` que devuelva True si todos los caracteres de `w` están en `sigma` (alfabeto finito dado como set). Prueba con w='ab' y sigma={'a','b','c'}.",
          placeholder: "def pertenece_kleene(w, sigma): ...",
          expectedKeywords: ["def", "pertenece", "sigma", "return"],
          hint: "Itera cada char de w y verifica char in sigma.",
          isEmailSubmission: false
        },
        {
          id: 6002,
          instruction: "DESAFÍO: Implementa `generar_longitud_k(sigma, k)` que liste TODAS las cadenas de longitud exactamente k sobre el alfabeto sigma (recursión como en el snippet del módulo). Envía el código.",
          placeholder: "def generar_longitud_k(...):",
          expectedKeywords: ["def", "generar", "k", "return"],
          hint: "Caso base k==0 devuelve ['']; recursión concatena un símbolo a cada cadena de longitud k-1.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 2,
      title: "MÓDULO 2: AUTÓMATAS FINITOS DETERMINISTAS (DFA)",
      description: "Reconocedores de lenguajes regulares mediante máquinas de estado finito sin ambigüedad.",
      items: [
      "DFA como 5-tupla M = (Q, Σ, δ, q₀, F): función total δ : Q × Σ → Q.",
      "Interpretación extendida δ* sobre cadenas; aceptación cuando δ*(q₀, w) ∈ F.",
      "Tabla de transiciones: implementación como dict anidado o matriz indexada.",
      "Lenguaje L(M) = {w | δ*(q₀, w) ∈ F}; equivalencia entre definición y simulación.",
      "Estados trampa y minimización conceptual: reducir filas redundantes en la tabla.",
      "Diseño por casos: acumular paridad, sufijos o contadores módulo n en Q.",
      "DFA y reconocimiento en O(n) tiempo y O(1) espacio extra (solo estado actual).",
      "Producto cartesiano de autómatas para intersección de lenguajes regulares.",
      "Diferencia DFA vs NFA: δ debe ser determinista y total en toda entrada válida."
],
      content: "## Panorama del tema: AUTÓMATAS FINITOS DETERMINISTAS (DFA)\n\nUn **autómata finito determinista** (DFA) es el modelo canónico de «máquina con memoria acotada» que lee una cadena símbolo a símbolo y responde sí o no: ¿pertenece al lenguaje? Cada decisión es **única**: desde el estado actual, el siguiente símbolo fuerza exactamente un estado siguiente. No hay adivinanza ni ramificación.\n\nLos DFA reconocen precisamente los **lenguajes regulares** — la misma clase que las expresiones regulares y los NFA (módulos 3–4). En ingeniería, casi todo reconocedor de patrones lineales (identificadores, números, comentarios de una línea) se implementa como DFA explícito o como tabla generada desde regex.\n\nEn esta lección formalizamos \\(M = (Q, \\Sigma, \\delta, q_0, F)\\), leemos tablas y diagramas, simulamos cadenas paso a paso, y conectamos el **paridad de unos** del snippet del curso con un diseño de estados mínimo.\n\n## Objetivos de la lección\n\n- Escribir la definición formal de un DFA y el significado de cada componente.\n- Construir tabla de transiciones y diagrama de estados para lenguajes sencillos.\n- Simular \\(\\delta^*\\) (extensión de \\(\\delta\\) a cadenas) y decidir aceptación.\n- Definir \\(L(M)\\) y comparar aceptación por estado final versus otros criterios.\n- Implementar mentalmente la clase `DFA_ParUnos` del módulo.\n\n## Desarrollo de la lección\n\n### Definición formal: \\(M = (Q, \\Sigma, \\delta, q_0, F)\\)\n\nUn DFA es una 5-tupla:\n\n- **\\(Q\\)**: conjunto **finito** de estados (ej. \\(\\{q_0, q_1\\}\\) o etiquetas `Q0`, `Q1` en código).\n- **\\(\\Sigma\\)**: alfabeto de entrada finito.\n- **\\(\\delta : Q \\times \\Sigma \\rightarrow Q\\)**: función de transición **total**: para cada par (estado, símbolo) existe **exactamente un** estado siguiente.\n- **\\(q_0 \\in Q\\)**: estado **inicial** (único).\n- **\\(F \\subseteq Q\\)**: estados de **aceptación** (finales).\n\n**Determinismo** significa que la ejecución sobre una cadena \\(w\\) es una **traza única** de estados; no hay elecciones.\n\n### Extensión a cadenas: \\(\\delta^*\\)\n\nDefinimos \\(\\delta^* : Q \\times \\Sigma^* \\rightarrow Q\\) recursivamente:\n\n- \\(\\delta^*(q, \\epsilon) = q\\)\n- \\(\\delta^*(q, wa) = \\delta(\\delta^*(q, w), a)\\) con \\(a \\in \\Sigma\\)\n\nEl autómata **acepta** \\(w\\) si \\(\\delta^*(q_0, w) \\in F\\). El **lenguaje aceptado** es:\n\n\\[\nL(M) = \\{ w \\in \\Sigma^* \\mid \\delta^*(q_0, w) \\in F \\}\n\\]\n\n### Tabla de transiciones y diagramas\n\nPara \\(|Q|\\) pequeño, una tabla filas = estados, columnas = símbolos documenta \\(\\delta\\). En diagramas: nodos = estados, flechas etiquetadas con símbolos, doble círculo = aceptación, flecha entrante a \\(q_0\\).\n\n**Ejemplo — termina en `ab` sobre \\(\\Sigma=\\{a,b\\}\\)** (idea de diseño):\n\n- Estados recordan el **sufijo relevante** de longitud \\(\\le 1\\) leído: tras leer prefijo que ya no puede completarse hacia `ab`, ir a estado trampa (no final).\n- Aceptar solo si el último par leído es `ab`.\n\nLa clave de diseño: **memoria finita** = resumen de lo leído en un estado, no almacenar toda la cadena.\n\n### Paridad del número de unos (enlace al laboratorio)\n\nLenguaje \\(L_{\\mathrm{par}} = \\{ w \\in \\{0,1\\}^* \\mid w \\text{ contiene un número par de símbolos } 1 \\}\\).\n\nIntuición:\n\n- Cada `1` **alterna** paridad.\n- Los `0` no cambian el conteo modular.\n\nDos estados bastan: «par» y «impar» de unos vistas. El estado inicial es **par** (cero unos). Aceptación = estado par al terminar.\n\n| Estado | Significado | ¿Aceptación? |\n|--------|-------------|----------------|\n| Q0 | Paridad par de 1s | Sí |\n| Q1 | Paridad impar de 1s | No |\n\nTransiciones: en Q0 con `1` → Q1; en Q1 con `1` → Q0; con `0` permanecer.\n\n### Ergonomía de la implementación versus la tabla\n\nEl snippet `DFA_ParUnos` codifica la misma lógica con `if` anidados en lugar de tabla 2×2. Ambas formas son equivalentes; en compiladores industriales (Flex, lexer de Rust `logos`) se prefiere **tabla aplanada** por rendimiento.\n\nCompletitud de \\(\\delta\\): si falta una entrada en código para algún par (estado, símbolo), el determinismo se rompe. Por eso en teoría exigimos función total; en binario sobre dos estados solo hay cuatro pares a cubrir.\n\n### Lenguajes que **sí** y que **aún no** modelamos\n\n**Dentro de regulares (DFA existe)**:\n\n- Cadenas con longitud múltiplo de 3.\n- Cadenas que contienen la subcadena `101`.\n- Identificadores `[a-zA-Z_][a-zA-Z0-9_]*` sobre alfabeto ASCII acotado.\n\n**Fuera de regulares (requiere PDA, módulo 7)**:\n\n- \\( \\{ a^n b^n \\mid n \\ge 0 \\} \\) — requiere comparar dos conteos.\n\nEsa frontera se demuestra formalmente en el módulo 5.\n\n### Minimización (adelanto conceptual)\n\nDos DFA con distinto número de estados pueden reconocer el **mismo** \\(L(M)\\). El algoritmo de minimización (no obligatorio en este curso) fusiona estados equivalentes. Para `DFA_ParUnos`, dos estados ya son mínimos: no puedes colapsar par e impar sin cambiar el lenguaje.\n\n### Simulación paso a paso: `11011`\n\nEstado inicial Q0 (par):\n\n1. Lee `1` → Q1 (impar, 1 uno)\n2. Lee `1` → Q0 (par, 2 unos)\n3. Lee `0` → Q0 (par)\n4. Lee `1` → Q1 (impar, 3 unos)\n5. Lee `1` → Q0 (par, 4 unos)\n\nTermina en Q0 ∈ F ⇒ **aceptada**. Coincide con el `print` del snippet para `'11011'`. Para `'111'` (3 unos) termina en Q1 ⇒ rechazada.\n\n### Trap state y completitud en diseño examen\n\nCuando diseñas un DFA en un parcial, conviene añadir explícitamente un **estado trampa** \\(q_{\\mathrm{trap}}\\) que no es final y absorbe cualquier transición no deseada con bucles sobre todo \\(\\Sigma\\). Así \\(\\delta\\) sigue siendo total y evitas «transición indefinida». En implementaciones como `DFA_ParUnos`, permanecer en el mismo estado ante `0` es forma compacta de trampa parcial solo si los `0` realmente no discriminan el lenguaje.\n\n### Producto cartesiano (combinar dos DFA)\n\nSi \\(M_1\\) reconoce \\(L_1\\) y \\(M_2\\) reconoce \\(L_2\\), un DFA para \\(L_1 \\cap L_2\\) usa estados \\((q_1, q_2)\\) con transiciones sincronizadas. La explosión \\(|Q_1| \\cdot |Q_2|\\) motiva minimización después. Esta construcción aparece al exigir **dos** patrones simultáneos (por ejemplo «termina en par de unos» **y** «no contiene `111`»).\n\n## Demostración enlazada al código del módulo\n\nEl snippet define `DFA_ParUnos` en Python:\n\n- `estado_actual = 'Q0'` al iniciar `procesar_cadena` — reinicia la simulación (importante si reutilizas la misma instancia).\n- Bucle `for simbolo in cadena` — procesa en orden left-to-right como \\(\\delta^*\\).\n- Solo reacciona a `'1'` cambiando entre Q0 y Q1; `'0'` no aparece en el `if` porque **no cambia** el estado (transición implícita a sí mismo).\n- `return self.estado_actual == 'Q0'` — criterio de aceptación: Q0 es único final.\n\n**Corrección mental**: si la cadena contiene caracteres fuera de \\(\\{0,1\\}\\), el código Python los ignora silenciosamente (no cambian estado). Un DFA formal sobre \\(\\{0,1\\}\\) debería definir \\(\\delta\\) para todo el alfabeto o rechazar entradas inválidas antes — buena práctica en el laboratorio.\n\n**Refactor pedagógico**: reemplazar ramas por diccionario:\n\n`transiciones = {('Q0','1'): 'Q1', ('Q1','1'): 'Q0'}` y dejar `0` como identidad. Así la tabla es visible y coincide con la notación \\(\\delta\\).\n\nPrueba adicional: `procesar_cadena('')` deja Q0 y devuelve `True` — la cadena vacía tiene cero unos (par). Verifica contra tu definición de lenguaje si \\(\\epsilon\\) debe aceptarse; aquí sí.\n\n## Aplicaciones en sistemas reales\n\n**Lexers generados (Flex / RE2C)**: el generador compila expresiones regulares a DFA y emite código C con tablas de salto. Clang y GCC usan esta familia de herramientas en el scanner. Cada regla de token corresponde a un conjunto de estados; prioridad entre reglas resuelve conflictos cuando varios patrones podrían aplicar.\n\n**Validación de VIN y códigos con checksum**: muchos identificadores industriales siguen patrones regulares con dígito de control calculable en un solo paso. El reconocedor de forma (no el cálculo del dígito) es DFA.\n\n**Analizadores de malware en tráfico**: firmas de cadenas hex en flujos de red se buscan con automatas paralelos (Aho-Corasick extiende la idea a múltiples patrones). El núcleo sigue siendo estados finitos sin pila.\n\n## Errores clásicos en examen\n\n- Confundir estado inicial con estado de aceptación (pueden coincidir, como en Q0 del snippet, pero conceptualmente son roles distintos).\n- Dibujar transiciones no deterministas (dos flechas con el mismo símbolo desde un estado) y llamarlo DFA.\n- Olvidar que \\(\\delta\\) debe ser **total**: cada celda de la tabla tiene valor.\n- Decir que el DFA «acepta si lee algún 1» cuando el lenguaje es paridad, no existencia.\n- Simular cadenas de derecha a izquierda sin justificar (el modelo estándar es izquierda a derecha).\n\n## Preguntas de entrevista\n\n**P: Diseña un DFA sobre \\(\\{0,1\\}\\) que acepte cadenas que terminan en `01`.**\n\n**R:** Usa estados que recuerden si el último símbolo fue `0` y si estás en posición de completar `01`. Alternativa: tres estados «buscando», «vi 0», «acepté tras 1 después de 0». Aceptas al leer `1` tras haber estado en «vi 0», o mantienes aceptación solo al final de cadena según definición exacta del enunciado. Lo importante en entrevista es explicitar \\(\\Sigma\\), \\(Q\\), \\(F\\) y demostrar con un par de cadenas.\n\n**P: ¿Por qué el DFA es adecuado para tokenizar números pero no para validar paréntesis anidados arbitrariamente?**\n\n**R:** Tokenizar un literal numérico es un patrón regular (dígitos consecutivos). Paréntesis balanceados de profundidad no acotada requieren contar aperturas y cierres sin límite fijo — eso excede memoria de estados finitos y necesita pila (LLC / PDA).\n\n## Síntesis y checklist antes de avanzar\n\n- Escribo \\(M = (Q, \\Sigma, \\delta, q_0, F)\\) para el autómata de paridad de unos.\n- Simulé a mano `11011` y `111` y comparé con la salida del snippet.\n- Explico totalidad de \\(\\delta\\) y traza única de ejecución.\n- Distingo \\(L(M)\\) como conjunto de \\(\\Sigma^*\\) del proceso de codificación en Python.\n- Entiendo que el módulo 3 generalizará \\(\\delta\\) a conjuntos de estados (NFA).\n\n\n### Representación tabular del autómata de paridad\n\n| δ     | 0   | 1   |\n|-------|-----|-----|\n| Q0 (F)| Q0  | Q1  |\n| Q1    | Q1  | Q0  |\n\nLa fila Q0 marcada como final coincide con el snippet: solo Q0 acepta. Cualquier implementación con diccionario `(estado, sim) -> siguiente` debe cubrir las cuatro celdas.\n\n### Complemento y clausura de lenguajes regulares\n\nSi \\(L\\) es regular sobre \\(\\Sigma\\), el complemento \\(\\Sigma^* \\setminus L\\) también es regular: invierte estados finales y no finales en un DFA completo con trampa. La unión e intersección de dos regulares siguen siendo regulares (producto cartesiano). Estas **clausuras** explican por qué los compiladores combinan docenas de patrones léxicos sin salir de la familia DFA.\n\n### Autómata con múltiples estados finales\n\nNada impide \\(|F| > 1\\). Ejemplo: aceptar cadenas que terminan en `00` **o** en `11` puede usar dos estados finales distintos alcanzables. Al simular, basta \\(\\delta^*(q_0,w) \\in F\\). El snippet con un solo final es caso mínimo pedagógico.\n\n### Complejidad de simulación\n\nPara |w| = n, el DFA realiza exactamente n pasos de transición y O(1) trabajo por paso si la tabla es array indexado. Memoria O(1). Comparar con algoritmos ad hoc que reescanean la cadena: el autómata **no** vuelve atrás; es online.\n\n### Construcción desde descripción en lenguaje natural\n\nEjercicio: «acepta cadenas binarias sin subcadena `111`». Estrategia: estados = longitud del sufijo reciente de 1s leído (0,1,2,3); estado 3 es trampa no final. Cada transición actualiza según leer 0 (reinicia contador de 1s) o 1 (incrementa hasta trampa). Esta receta «sufijo relevante acotado» resuelve la mitad de los parciales de diseño de DFA.\n\n### Enlace con el lexer del laboratorio QuimiSell\n\nLos tokens `NUM` y `ID` pueden modelarse como DFA sobre caracteres antes de agrupar lexema. El DFA no sabe que `123abc` puede ser error léxico: solo rechaza o acepta prefijos según reglas. La capa que reporta mensaje humano vive encima de la aceptación booleana.\n\n### Rechazo explícito versus silencioso\n\nEn APIs industriales, `procesar_cadena` debería retornar también el estado final para diagnosticar. En teoría, rechazo es simplemente \\(\\delta^*(q_0,w) \\notin F\\). Documentar ambos en diseños de equipo evita bugs cuando \\(F\\) es subconjunto estricto de \\(Q\\).\n\n\n### Ejercicio de diseño: múltiplos de 3 en longitud binaria\n\nLenguaje: cadenas sobre \\(\\{0,1\\}\\) cuya longitud es múltiplo de 3. Estados \\(q_0, q_1, q_2\\) recordando longitud mod 3; \\(q_0\\) inicial y final; cada símbolo avanza el contador modular. Cadena vacía aceptada. Simula `101` (longitud 3) → acepta; `11` → rechaza. Relaciona con contadores cíclicos distintos al de paridad de unos.\n\n### Lectura del diagrama en sentido horario\n\nConvención de dibujo: flecha de inicio sin etiqueta; etiquetas múltiples en una arista se escriben `0,1` cuando la transición es la misma. Examen: si falta etiqueta en un arco, la pregunta es incompleta — exige clarificación o asume alfabeto binario con 0/1 explícitos en tabla.\n\n### Invariantes en simulación\n\nPara paridad de unos, el invariante es: «el estado Q0 equivale a paridad par del sufijo leído de conteo de 1s». Probar invariante por inducción en la longitud del prefijo leído vincula prueba formal con el bucle `for simbolo in cadena`.\n\n### DFA y máquinas de Moore/Mealy (nota)\n\nOutput machines asocian salida a estados o transiciones; los DFA de aceptación del curso son Moore sin salida visible excepto aceptación final. En hardware síntesis, los mismos grafos aparecen con etiquetas de salida; la teoría regular subyacente es la misma.\n\n### Caso borde: cadena vacía\n\nToda definición de \\(L(M)\\) debe clarificar si \\(\\epsilon \\in L\\). Paridad de unos: cero unos es par → \\(\\epsilon\\) aceptada. Si el enunciado pide «al menos un 1», el estado inicial ya no es final o se añade trampa.\n\n### Resumen de símbolos del módulo\n\n| Símbolo | Significado |\n|---------|-------------|\n| \\(\\delta\\) | Función de transición |\n| \\(\\delta^*\\) | Extensión a cadenas |\n| \\(F\\) | Conjuntos de aceptación |\n| \\(L(M)\\) | Lenguaje aceptado |\n\n### Trabajo práctico sugerido\n\nImplementa `class DFA_Tabla` que recibe dict de transiciones y conjunto F; método `acepta(w)`. Refactoriza `DFA_ParUnos` para usarla. Compara líneas de código con enfoque `if` — mantenibilidad gana con tablas cuando crece \\(|Q|\\).\n\n### Conexión con determinización del módulo 3\n\nCuando el NFA se convierte en DFA, la traza única reaparece a costa de más estados. El programador del lexer casi siempre ejecuta el DFA resultante aunque diseñó regex estilo NFA mentalmente.\n\n\n### Cierre narrativo del concepto determinista\n\nImagina leer un archivo de log carácter a carácter sin poder volver atrás: ese es el contrato del DFA. Cada símbolo consume una unidad de entrada y empuja la máquina a un único sucesor. Si el log tiene millones de caracteres, el tiempo escala linealmente porque la tabla de transición tiene tamaño constante respecto a la entrada. Esa previsibilidad hace que los equipos de compiladores prefieran tablas precomputadas frente a expresiones interpretadas carácter a carácter con bifurcaciones condicionales ad hoc. Cuando depuras un lexer, imprimir la secuencia de estados recorridos para una cadena corta de ejemplo suele revelar errores de dibujo en el autómata mucho más rápido que revisar el código generado por Flex línea a línea.\n\n### Pregunta de orden en implementaciones\n\n¿El orden de evaluación de `if` anidados en `DFA_ParUnos` importa? No para este lenguaje porque solo dos estados interactúan. Si hubiera tres o más, la tabla elimina el riesgo de orden accidental. Usa siempre el mismo patrón de diseño: primero tabla sobre papel, luego código.\n\n\n### Apéndice de práctica examen\n\nResuelve sin mirar el snippet: diseña DFA que acepta cadenas binarias cuya primera y última posición son el mismo bit. Estados pueden recordar primer bit leído y bit actual; estados finales cuando coinciden al cerrar la cadena. Luego codifica en Python con tabla y compara con `DFA_ParUnos` en estilo de proyecto.\n\n### Glosario rápido\n\n**Función de transición total**, **estado trampa**, **lenguaje aceptado**, **traza de ejecución**, **autómata completo**. Define cada término en una línea antes de la autoevaluación del módulo en la plataforma.",
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
          question: "En M = (Q, Σ, δ, q₀, F), ¿qué garantiza que M sea determinista?",
          options: ["δ : Q × Σ → Q es función total",
          "δ devuelve un conjunto de estados",
          "Existen transiciones ε",
          "Q es infinito"],
          answerIndex: 0,
          explanation: "Un único siguiente estado para cada (q, a) y definido para todo par válido."
        },
        {
          question: "DFA de paridad de 1s en {0,1} con q₀ aceptor (ε acepta). ¿Acepta '1100'?",
          options: ["Sí, hay dos 1s",
          "No, termina en 0",
          "Solo si hay un 1 inicial",
          "Depende de no determinismo"],
          answerIndex: 0,
          explanation: "Conteo de unos: dos es par → estado aceptor."
        },
        {
          question: "δ*(q, w) para w = a₁…aₙ se define por:",
          options: ["Aplicar δ iterativamente desde el último símbolo hacia atrás",
          "Inducción: δ*(q, ε)=q; δ*(q, wa)=δ(δ*(q,w), a)",
          "Solo un paso δ(q, aₙ)",
          "Unión de δ en cada prefijo"],
          answerIndex: 1,
          explanation: "Extensión recursiva estándar de δ a cadenas."
        },
        {
          question: "Implementas δ como `dict` anidado. ¿Qué ocurre si falta una entrada para (q, 'a')?",
          options: ["Violación de totalidad; la simulación debe fallar o usar trampa explícita",
          "Se interpreta como rechazo implícito sin romper modelo DFA",
          "Equivale a NFA",
          "Python devuelve ε"],
          answerIndex: 0,
          explanation: "DFA formal requiere destino definido; en práctica se usa estado trampa explícito."
        },
        {
          question: "L = {w ∈ {0,1}* | w termina en '01'}. ¿Qué diseño es correcto?",
          options: ["Recordar sufijo relevante (últimos símbolos vistos)",
          "Un solo estado sin memoria",
          "Solo contar ceros",
          "Pila auxiliar obligatoria"],
          answerIndex: 0,
          explanation: "Memoria finita de prefijos recientes basta; es regular."
        },
        {
          question: "Producto de autómatas A y B para L(A) ∩ L(B) usa:",
          options: ["Estados Q_A × Q_B y δ producto con aceptación en F_A × F_B",
          "Unión de tablas δ sin sincronizar",
          "Solo estados de A",
          "Complemento de A"],
          answerIndex: 0,
          explanation: "Construcción clásica del producto cartesiano sincronizado."
        },
        {
          question: "Complejidad de simular un DFA sobre |w| = n:",
          options: ["O(n) tiempo, O(1) espacio extra",
          "O(2ⁿ)",
          "O(n log n)",
          "O(1) solo si F es unitario"],
          answerIndex: 0,
          explanation: "Un paso por símbolo, un entero de estado."
        },
        {
          question: "Estado trampa qₜ sirve para:",
          options: ["Absorber cadenas ya rechazadas manteniendo δ total",
          "Acelerar minimización únicamente",
          "Simular ε",
          "Marcar aceptación"],
          answerIndex: 0,
          explanation: "Desde qₜ todos los símbolos regresan a qₜ y qₜ ∉ F."
        },
        {
          question: "Depura: w aceptada pero δ*(q₀,w) ∉ F. La causa más probable en código:",
          options: ["Estado inicial o conjunto F mal inicializado",
          "El alfabeto Σ es infinito",
          "δ* no existe para DFA",
          "Solo falla con ε"],
          answerIndex: 0,
          explanation: "Errores típicos de implementación: q₀, F o transición mal copiada."
        },
        {
          question: "¿Qué componente de la 5-tupla puede omitirse en una demostración teórica pero no en simulación?",
          options: ["Ninguno: q₀, F y δ son necesarios para ejecutar",
          "F porque basta alcanzar cualquier estado",
          "Σ porque el código no usa alfabeto",
          "Q porque δ es suficiente"],
          answerIndex: 0,
          explanation: "Sin F no hay criterio de aceptación; sin q₀ no hay inicio."
        }
      ],
      exercises: [
        {
          id: 6101,
          instruction: "Extiende el DFA del snippet para que acepte cadenas binarias cuya longitud sea múltiplo de 3 (incluyendo ε). Describe estados y transiciones en comentarios y el método `procesar_cadena`.",
          placeholder: "class DFA_Multiplo3: ...",
          expectedKeywords: ["class", "def", "estado", "return"],
          hint: "Usa un contador módulo 3 en el estado o tres estados Q0,Q1,Q2.",
          isEmailSubmission: false
        },
        {
          id: 6102,
          instruction: "DESAFÍO: Dibuja la tabla δ para un DFA que acepte cadenas sobre {a,b} que terminen en 'ab'. Implementa la tabla como dict anidado en Python y valida 'baba' vs 'baa'.",
          placeholder: "transiciones = {...}",
          expectedKeywords: ["def", "transicion", "return", "ab"],
          hint: "Necesitas distinguir si viste 'a' pendiente de confirmar 'b'.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 3,
      title: "MÓDULO 3: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε)",
      description: "No determinismo, transiciones vacías ε y el algoritmo de Construcción de Subconjuntos.",
      items: [
      "NFA: δ : Q × (Σ ∪ {ε}) → P(Q); varios estados activos en paralelo.",
      "ε-transiciones consumen entrada vacía; cierre ε-clausura antes de leer símbolos.",
      "Algoritmo ε-clausura con pila/DFS sobre aristas ε en el grafo de estados.",
      "Construcción de subconjuntos: estados del DFA son subconjuntos de Q del NFA.",
      "Blow-up exponencial |2^Q| en el peor caso al convertir NFA → DFA.",
      "NFA adecuado para unión e intersección «naturales» vía ε y nuevos estados.",
      "Simulación on-the-fly del NFA sin materializar el DFA completo.",
      "Determinización preserva el lenguaje aceptado: L(NFA) = L(DFA equivalente).",
      "Tablas δ con conjuntos en Python (frozenset) como claves de estados compuestos."
],
      content: "## Panorama del tema: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), CONSTRUCCIÓN DE SUBCONJUNTOS\n\nUn **NFA** relaja el determinismo: \\(\\delta(q, a)\\) puede ser un **conjunto** de estados siguientes, incluido el vacío. Puede existir **más de una ejecución** posible sobre la misma cadena; la cadena se **acepta** si **alguna** ruta llega a un estado final.\n\nLos **NFA-ε** añaden **transiciones espontáneas** que cambian de estado sin consumir un símbolo de entrada. Sorprendentemente, ni el no determinismo ni las ε-transiciones aumentan la clase de lenguajes: sigue siendo la familia **regular**, equivalente a DFA (teorema de equivalencia).\n\nLa **construcción de subconjuntos** (subset construction) convierte un NFA en un DFA simulando, en cada paso, el **conjunto** de estados NFA activos. Es el algoritmo que usan los motores regex internamente tras la construcción de Thompson (módulo 4).\n\n## Objetivos de la lección\n\n- Definir NFA con \\(\\delta : Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\rightarrow \\mathcal{P}(Q)\\) (variantes equivalentes).\n- Calcular **clausura-ε** y usarla antes de leer el siguiente símbolo.\n- Explicar aceptación por existencia de camino aceptador.\n- Describir subset construction y el crecimiento exponencial \\(2^{|Q|}\\) en el peor caso.\n- Ejecutar mentalmente `epsilon_closure` del snippet.\n\n## Desarrollo de la lección\n\n### NFA: definición y semántica de aceptación\n\nSea \\(M = (Q, \\Sigma, \\delta, q_0, F)\\) con \\(\\delta\\) que devuelve subconjuntos de \\(Q\\).\n\nPara cadena \\(w = a_1 a_2 \\ldots a_n\\), una **computación** es una secuencia de estados donde cada símbolo \\(a_i\\) permite pasar de un estado del conjunto actual a otro según \\(\\delta\\), aplicando ε-cierre cuando corresponda.\n\n**Aceptación (por existencia)**: \\(w \\in L(M)\\) si existe al menos una computación que termina en un estado de \\(F\\) tras leer toda la entrada.\n\nContraste con DFA: allí hay **una** traza; aquí puede haber muchas, pero solo necesitas **una** ganadora.\n\n### Transiciones ε y clausura-ε\n\nUna transición \\(\\epsilon\\) de \\(p\\) a \\(q\\) escrita \\(p \\xrightarrow{\\epsilon} q\\) no avanza el índice de lectura de \\(w\\).\n\nLa **clausura-ε** de un conjunto (o estado) \\(S\\), notada \\(\\epsilon\\text{-closure}(S)\\), es el conjunto de estados alcanzables desde algún \\(s \\in S\\) usando cero o más aristas ε.\n\n**Algoritmo** (el del curso):\n\n1. Inicializa `closure` con los estados de partida.\n2. Usa una pila: cada vez que sacas un estado, agrega todos sus vecinos ε aún no visitados.\n3. Repite hasta vaciar la pila.\n\n**Ejemplo del snippet**: `eps_map = {'Q0': {'Q1'}, 'Q1': {'Q2'}}`. Desde `{Q0}`:\n\n- Encuentras Q1 por ε, luego Q2 por ε desde Q1 ⇒ clausura `{Q0,Q1,Q2}`.\n\nAntes de procesar un símbolo `a` en subset construction, el conjunto de estados DFA actual se expande con ε-closure.\n\n### ¿Por qué usar NFA si DFA basta?\n\n**Diseño más natural**: unión de patrones («`abc` o `def`») se dibuja con ramas desde un estado inicial ε.\n\n**Thompson (módulo 4)**: construye NFA-ε modularmente desde regex sin explosión manual de estados.\n\n**Tamaño**: el NFA puede ser **exponencialmente más pequeño** que el DFA mínimo equivalente; la conversión paga ese costo después.\n\n### Subset construction (idea algorítmica)\n\nEstados del DFA resultante = subconjuntos de \\(Q_{NFA}\\) alcanzables.\n\n- Estado inicial DFA: \\(\\epsilon\\text{-closure}(\\{q_0\\})\\).\n- Desde conjunto \\(S\\) al leer \\(a\\): \\( \\delta_{DFA}(S, a) = \\epsilon\\text{-closure}\\left( \\bigcup_{q \\in S} \\delta_{NFA}(q, a) \\right) \\).\n\nSi un subconjunto contiene algún estado de \\(F_{NFA}\\), el estado DFA es final.\n\n**Peor caso**: \\(|Q_{DFA}| \\le 2^{|Q_{NFA}|}\\). Ejemplo didáctico de \\(n\\) estados en cadena con ε elecciones produce \\(2^n\\) subconjuntos distintos.\n\n### Modelado de «adivinanza» sin magia\n\nIntuición de **óracle**: el NFA «adivina» correctamente qué transición tomar entre varias opciones. La prueba no construye el oráculo: demuestra que **existe** una secuencia de elecciones correctas. La construcción de subconjuntos **materializa** esa adivinanza como un estado DFA que recuerda el conjunto de mundos posibles.\n\n### NFA sin ε versus con ε\n\nTodo NFA-ε tiene un NFA equivalente sin ε (eliminar ε-transiciones reemplazando con transiciones sobre símbolos y ajustando \\(F\\)). Para implementación, los motores modernos suelen quedarse en ε-NFA tras Thompson y luego convertir.\n\n### Ejemplo mini: reconocer `abb` o `aab`\n\nDos caminos desde inicio: ε a componente que espera `abb` o ε a componente que espera `aab`. El no determinismo permite **paralelizar** intentos sin duplicar prefijo común en el diagrama.\n\n### Ejemplo extendido de subset construction\n\nNFA con \\(Q = \\{q_0, q_1, q_2\\}\\), \\(q_0\\) inicial, \\(q_2\\) final, \\(\\Sigma = \\{a\\}\\):\n\n- \\(\\delta(q_0, a) = \\{q_0, q_1\\}\\) (no determinismo puro)\n- \\(\\delta(q_1, a) = \\{q_2\\}\\), \\(\\delta(q_2, a) = \\emptyset\\)\n\nEstado DFA inicial: \\(\\{q_0\\}\\). Al leer `a`: \\(\\{q_0, q_1\\}\\) (ya es estado DFA). Otro `a`: desde \\(q_0\\) va a \\(\\{q_0,q_1\\}\\), desde \\(q_1\\) a \\(\\{q_2\\}\\) ⇒ unión \\(\\{q_0, q_1, q_2\\}\\), final porque incluye \\(q_2\\). La cadena `aa` se acepta aunque el NFA «dudara» en el primer paso.\n\nTrazar este ejemplo en papel fija el patrón «unión de conjuntos tras cada símbolo».\n\n### Complejidad en práctica regex\n\nMotores como el de Python aplican optimizaciones (cache de subconjuntos, lazy DFA) para no materializar \\(2^n\\) en patrones cotidianos. El peor caso teórico sigue importando para seguridad: **ReDoS** explota backtracking o NFAs grandes.\n\n## Demostración enlazada al código del módulo\n\n`epsilon_closure(estados_iniciales, transiciones_eps)`:\n\n- `stack` y `closure` implementan DFS sobre el grafo ε.\n- `transiciones_eps.get(estado, set())` modela ausencia de salidas ε como conjunto vacío.\n- No consume la cadena de entrada: es puramente estructural sobre el grafo del autómata.\n\nEste bloque es el **sub-rutina crítica** de la subset construction: cada vez que en papel «salte con ε», el código agrega vecinos transitivos.\n\n**Prueba**: añade `Q2 -ε-> Q0` (ciclo). La clausura de `{Q0}` sigue siendo finita si el conjunto de estados es finito; el bucle detecta repetición con `if v not in closure`.\n\n**Puente a subset construction**: después de clausura inicial, simula leer `a` uniendo \\(\\delta(q,a)\\) para \\(q\\) en el conjunto y vuelve a clausurar — es el esqueleto de un convertidor NFA→DFA en pocas líneas adicionales.\n\n## Aplicaciones en sistemas reales\n\n**Motor `re` de Python / PCRE**: compilación regex → NFA-ε (Thompson) → optimizaciones → DFA parcial o backtracking según patrón. La clausura ε está en el corazón del compilador de patrones.\n\n**Firewalls e inspección DPI**: múltiples firmas en un solo autómata NFA paralelizado; cada paquete se procesa una vez comparando contra todos los patrones.\n\n**Verificación de protocolos finitos (model checking)**: estados abstractos del protocolo combinan producto cartesiano de máquinas; la explosión combinatoria es análoga a subset construction mal acotada.\n\n## Errores clásicos en examen\n\n- Creer que NFA reconoce más lenguajes que DFA (falso: mismos regulares).\n- Olvidar ε-closure **antes y después** de cada lectura de símbolo en subset construction.\n- Confundir «estado final del DFA = subconjunto que contiene un final del NFA» con «subconjunto igual a \\(F\\)».\n- Simular NFA eligiendo siempre la transición incorrecta y concluir rechazo (debes mostrar que **todas** fallan para probar rechazo, o una éxito para aceptar).\n- Subestimar \\(2^n\\) estados: en exámenes piden contar subconjuntos alcanzables, no todos teóricos.\n\n## Preguntas de entrevista\n\n**P: ¿Cuál es la complejidad de convertir un NFA con \\(n\\) estados a DFA en el peor caso?**\n\n**R:** Hasta \\(2^n\\) estados DFA y \\(O(|\\Sigma| \\cdot 2^n)\\) transiciones si se materializa la tabla completa. En práctica muchos subconjuntos no son alcanzables, pero el peor caso es exponencial.\n\n**P: Explica ε-closure en dos frases.**\n\n**R:** Partiendo de un conjunto de estados, sigue todas las transiciones ε repetidamente hasta que no puedas añadir más estados. Es el conjunto de estados «activos de forma gratuita» antes de leer el próximo carácter.\n\n## Síntesis y checklist antes de avanzar\n\n- Diferencio semántica de aceptación NFA versus DFA.\n- Calculé a mano la clausura del ejemplo `Q0-Q1-Q2` y validé el `print` del snippet.\n- Puedo enunciar los pasos de subset construction sin mirar apuntes.\n- Entiendo por qué Thompson produce NFA-ε (módulo siguiente).\n- Estoy listo para expresiones regulares y el teorema de Kleene (módulo 4).\n\n\n### Simulación de NFA por conjuntos de estados (sin convertir a DFA)\n\nAlgoritmo directo sobre cadena \\(w\\):\n\n1. Actual ← ε-closure(\\{q_0\\}).\n2. Para cada símbolo a de w: Actual ← ε-closure(⋃_{q ∈ Actual} δ(q,a)).\n3. Aceptar si Actual ∩ F ≠ ∅.\n\nEste método evita exponer \\(2^n\\) estados del DFA; puede ser eficiente si los conjuntos alcanzables son pocos. Es la base de simuladores educativos.\n\n### Eliminación formal de ε-transiciones (boceto)\n\nPara cada par (q, a) en NFA-ε, añade transiciones qa que agregan todos los estados alcanzables vía ε tras mover con a. Marca estados finales si ε alcanzan algún final. El tamaño del grafo puede crecer, pero elimina ambigüedad de «saltos gratis».\n\n### Comparación conceptual DFA ↔ NFA en diseño de equipo\n\n| Aspecto | DFA | NFA |\n|---------|-----|-----|\n| Tabla | una fila destino por celda | conjuntos destino |\n| Ejecución | traza única | conjunto de trazas |\n| Diseño humano | más verboso | más compacto para uniones |\n| Ejecución rápida empaquetada | muy rápida | conviene convertir |\n\n### Ejemplo de ciclo ε y clausura\n\nSi Q2 -ε-> Q0 además de la cadena lineal, la clausura de {Q0} puede seguir creciendo solo mientras haya aristas ε nuevas; con conjunto finito termina en menos de |Q| iteraciones por estado. El algoritmo del snippet es O(|Q| + |E_ε|).\n\n### Aceptación en NFA con múltiples finales\n\nBasta que **uno** de los estados activos finales al final de la cadena sea suficiente. En subset construction, subconjunto final si intersecta F.\n\n### Historia breve para contextualizar\n\nRabin y Scott demostraron equivalencia DFA-NFA en los años 50; la construcción de subconjuntos es atribuida a esta línea de trabajo y es estándar en libros de Hopcroft & Ullman y Sipser. Conocer el nombre ayuda en entrevistas académicas.\n\n### Fallo común al programar subset construction\n\nOlvidar ε-closure **después** de reunir destinos por un símbolo hace que el DFA resultante rechace cadenas válidas que dependían de saltos ε post-lectura. El orden correcto es: leer → unir δ → ε-closure.\n\n\n### Definición alternativa \\(\\delta: Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\to \\mathcal{P}(Q)\\)\n\nAlgunos autores permiten \\(\\delta(q,\\epsilon)\\) explícito además de \\(\\delta(q,a)\\). La clausura-ε unifica ambos estilos: tras cualquier paso, expande gratuitamente.\n\n### Prueba textual de equivalencia NFA-DFA (esquema)\n\nSi \\(L\\) es aceptado por NFA \\(N\\), construye DFA \\(D\\) cuyos estados son subconjuntos de \\(Q_N\\) alcanzables; muestra por inducción en longitud de cadena que \\(D\\) acepta los mismos prefijos activos que \\(N\\). Invoca que cada paso preserva igualdad de conjuntos de estados posibles. Sipser presenta la inducción formal; aquí basta citar que es el argumento estándar.\n\n### NFA con \\(\\delta\\) parcial\n\nAlgunas definiciones permiten \\(\\delta(q,a)\\) indefinido = conjunto vacío — la computación muere. Sigue siendo equivalente a DFA con trampa si completas.\n\n### Experimentos con el snippet\n\nModifica `eps_map` a `{'Q0':{'Q1','Q3'}, 'Q1':{'Q2'}}` y predice clausura antes de ejecutar. Añade prints en el bucle para ver orden de visita DFS.\n\n### Uso en parsers LL\n\nAunque LL usa gramáticas, las tablas FIRST/FOLLOW tienen sabor de conjuntos de estados alternativos al no determinismo de elegir producción. La intuición de «múltiples posibilidades vivas» reaparece en análisis sintáctico.\n\n### Nombre en inglés en CV\n\nSubset construction, ε-closure, NFA — entrevistas globales usan inglés; practica explicar en español y en una frase en inglés.\n\n### Cuando el NFA exponencial es inevitable\n\nFamilias de lenguajes donde todo DFA equivalente tiene exponencialmente muchos estados existen; demostrarlo va más allá del curso pero explica límites de regex compiladas en motores antiguos.\n\n### Simulación paralela (idea)\n\nHardware puede trazar múltiples caminos NFA en paralelo hasta determinizar al vuelo — arquitectura de aceleradores de regex. Teóricamente sigue siendo regular.\n\n\n### Cierre narrativo del no determinismo\n\nEl NFA es la herramienta con la que **pensamos** patrones, y el DFA es con la que **corremos** a escala en la mayoría de casos. La construcción de subconjuntos es el puente obligado en esa frase. Cuando en el módulo 10 escribas varias reglas de token en un lexer generado, cada regla contribuye a un autómata global; la unión de lenguajes regulares sigue siendo regular, pero el gráfico interno puede ser enorme antes de minimizar.\n\n### Taller rápido: dibuja un NFA de tres estados\n\nRequisito: aceptar cadenas que terminan en `1`. Tres estados: q0 inicial, q1 tras leer al menos un símbolo en «modo espera», q2 final al ver 1 al final — ajusta según tu convención. Convierte mentalmente a DFA con subconjuntos \\(\\{q0\\}, \\{q0,q1\\}, \\ldots\\). Si dispones de cinco minutos en repaso, hacerlo a mano fija el algoritmo mejor que releer definiciones.\n\n\n### Apéndice: tabla de subconjuntos ejemplo\n\nPara NFA con estados \\(\\{A,B,C\\}\\) solo con ε de A a B y de B a C, el estado DFA inicial es \\(\\{A,B,C\\}\\). Al leer símbolo `a` desde A hacia \\(\\{D\\}\\) y clausurar, obtienes un único subconjunto nuevo. Rellenar tablas en parciales con columnas «subconjunto», «a», «b», «¿final?» acelera calificación y reduce errores conceptuales.\n\n### Composición de NFAs\n\nPara reconocer \\(L_1 \\cup L_2\\), crea nuevo inicio con ε a inicios de cada componente y marcas finales de ambos. Thompson hace esto automáticamente. La construcción de subconjuntos sobre el NFA compuesto puede explotar en tamaño; minimiza después si es crítico.\n\n### Glosario rápido\n\n**No determinismo**, **ε-transición**, **clausura-ε**, **subconjunto alcanzable**, **explosión exponencial**. Repite definiciones en voz alta para fijar vocabulario técnico antes de entrevistas.\n\n\n### Lección integrada: del epsilon_closure al convertidor completo\n\nPara convertir el fragmento pedagógico del curso en un convertidor NFA→DFA esbozado, imagina un diccionario `mueve(conjunto, simbolo)` que para cada estado en el conjunto aplica las transiciones etiquetadas con ese símbolo (no ε), une los resultados en un set, y devuelve `epsilon_closure` de ese set. El estado inicial del DFA es `epsilon_closure({q0})`. Cada vez que descubres un subconjunto nuevo, lo añades a la cola de pendientes y repites para cada símbolo del alfabeto. Cuando la cola se vacía, la tabla DFA está completa para todos los subconjuntos alcanzables. Este es el mismo algoritmo que aparece en los libros con notación \\(\\widehat{\\delta}\\).\n\nSi implementas esa cola en Python sobre el `eps_map` del snippet más un `transiciones_simbolo` pequeño, puedes aceptar cadenas sobre \\(\\{a\\}\\) en un NFA de ejemplo y contrastar con la simulación por conjuntos sin convertir. La diferencia pedagógica es que la tabla precomputada hace O(1) por símbolo en tiempo de ejecución tras el coste exponencial potencial de construcción.\n\n### Cuaderno de bitácora para estudio\n\nRegistra tres filas en una hoja: cadena de prueba, conjunto de estados antes de leer, conjunto después de ε-closure. Hazlo para `aaa` en un NFA toy de cuatro estados. La bitácora te entrena para el examen donde no puedes ejecutar código.\n\n### Pregunta integradora\n\n¿Puede un NFA con un solo estado y un bucle `0,1` sobre sí mismo reconocer \\(\\Sigma^*\\)? Sí, con ese estado final. ¿Cuántos estados tendrá el DFA tras subset construction? Uno solo. El peor caso exponencial no ocurre siempre; los casos triviales dan DFA del mismo tamaño.\n\nEn repaso final, recita de memoria los tres pasos del algoritmo `epsilon_closure` y nombra en qué línea del snippet vive cada paso: inicialización del cierre, extracción de la pila, iteración de vecinos ε. Esa correspondencia código-teoría es lo que evalúan los paneles de demostración del curso.\n\nVerifica también que puedes explicar en una frase por qué subset construction preserva el lenguaje aceptado: ninguna cadena pierde un camino NFA existente ni inventa aceptaciones imposibles. Completa la autoevaluación del módulo en el panel solo después de haber trazado ε-closure sobre un diagrama dibujado por ti mismo, no copiado del libro.",
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
          question: "Un NFA con transiciones ε permite:",
          options: ["Cambiar de estado sin consumir símbolo de entrada",
          "Leer dos símbolos a la vez",
          "Retroceder en la cinta",
          "Solo aceptar ε"],
          answerIndex: 0,
          explanation: "ε-arcos no avanzan el índice de lectura."
        },
        {
          question: "ε-clausura de {q₀} antes de leer 'a' incluye:",
          options: ["Todos los estados alcanzables solo por ε desde q₀",
          "Todos los estados de Q",
          "Solo q₀",
          "Estados alcanzables leyendo 'a'"],
          answerIndex: 0,
          explanation: "Definición: clausura reflexiva-transitiva de relaciones ε."
        },
        {
          question: "En construcción de subconjuntos, un estado del DFA es:",
          options: ["Un subconjunto de estados del NFA",
          "Un solo estado del NFA duplicado",
          "Una pila",
          "Una expresión regular"],
          answerIndex: 0,
          explanation: "Cada conjunto de estados simultáneamente activos forma un estado DFA."
        },
        {
          question: "NFA con n estados → DFA equivalente en el peor caso:",
          options: ["Hasta 2ⁿ estados",
          "Siempre n estados",
          "n² estados",
          "2n estados exactos"],
          answerIndex: 0,
          explanation: "Ejemplo clásico { w | a en posiciones múltiplos de i para i divisores } exhibe blow-up."
        },
        {
          question: "Simulas NFA sin determinizar: en cada paso conservas:",
          options: ["Conjunto activo de estados tras ε-clausura",
          "Un único estado elegido al azar",
          "Solo el tope de pila",
          "La cadena reversa"],
          answerIndex: 0,
          explanation: "Simulación por conjuntos es estándar y correcta."
        },
        {
          question: "¿Por qué Thompson introduce ε al construir uniones?",
          options: ["Para bifurcar sin leer entrada hacia sub-autómatas",
          "Para consumir el símbolo |",
          "Para convertir a CFG",
          "Para hacer el NFA determinista"],
          answerIndex: 0,
          explanation: "ε conecta inicio a ramas paralelas de la alternancia."
        },
        {
          question: "Depura: determinización acepta cadenas que el NFA rechazaba. Causa típica:",
          options: ["ε-clausura omitida al calcular δ_DFA",
          "Uso de pila",
          "Σ vacío",
          "F demasiado pequeño"],
          answerIndex: 0,
          explanation: "Sin ε-clausura los estados iniciales/compuestos son incorrectos."
        },
        {
          question: "L(NFA) coincide con L(DFA) determinizado si:",
          options: ["La construcción de subconjuntos se aplicó correctamente",
          "El NFA no tiene ε",
          "Q tiene un solo estado",
          "Solo si el lenguaje es finito"],
          answerIndex: 0,
          explanation: "La determinización es equivalente en lenguaje cuando es correcta."
        },
        {
          question: "frozenset de estados como clave en dict de transiciones evita:",
          options: ["Mutabilidad de sets como claves de hash",
          "Determinismo",
          "ε-transiciones",
          "Aceptación"],
          answerIndex: 0,
          explanation: "Los sets mutables no son hashables en Python."
        },
        {
          question: "NFA adecuado para regex (a|b)*c porque:",
          options: ["La unión y repetición se cablean localmente con pocos estados",
          "Requiere memoria de pila",
          "Es más lento que CYK",
          "No admite ε"],
          answerIndex: 0,
          explanation: "Construcciones composicionales de Thompson son naturales en NFA."
        }
      ],
      exercises: [
        {
          id: 6201,
          instruction: "Completa la función `epsilon_closure` del módulo para un NFA dado: añade un test que verifique que aplicar ε-transiciones desde {q0} alcanza todos los estados esperados.",
          placeholder: "def epsilon_closure(...):",
          expectedKeywords: ["epsilon_closure", "stack", "set"],
          hint: "DFS o BFS sobre transiciones ε sin consumir entrada.",
          isEmailSubmission: false
        },
        {
          id: 6202,
          instruction: "DESAFÍO: Escribe pseudocódigo del algoritmo de construcción de subconjuntos que convierte un NFA a DFA; incluye el paso de ε-closure al iniciar cada estado del DFA.",
          placeholder: "def subset_construction(nfa):",
          expectedKeywords: ["subset", "closure", "estados", "dfa"],
          hint: "Cada estado del DFA es un subconjunto de estados del NFA.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 4,
      title: "MÓDULO 4: EXPRESIONES REGULARES (REGEX) Y TEOREMA DE KLEENE",
      description: "Patrones sintácticos, operadores algebraicos de lenguajes y equivalencia con autómatas.",
      items: [
      "Sintaxis regex: literales, concatenación implícita, |, *, +, ?, paréntesis.",
      "Semántica como lenguaje sobre Σ; precedencia: estrella > concatenación > unión.",
      "Teorema de Kleene: equivalencia regex, DFA y NFA sobre lenguajes regulares.",
      "Construcción de Thompson: fragmentos NFA-ε por operador con conteos de estados.",
      "Equivalencia regex → NFA (Thompson) y DFA → regex (eliminación de estados).",
      "Operadores POSIX vs teóricos: greedy backtracking versus autómata en motores.",
      "Identificadores y literales numéricos como patrones regulares en especificación léxica.",
      "Límites: no expresar balanceo de paréntesis anidados arbitrario solo con regex.",
      "Optimización de NFA ε-reducción antes de determinizar en compiladores de patrones."
],
      content: "## Panorama del tema: EXPRESIONES REGULARES (REGEX), TEOREMA DE KLEENE Y CONSTRUCCIÓN DE THOMPSON\n\nUna **expresión regular** es una notación compacta para describir un lenguaje regular: combinas símbolos, concatenación (yuxtaposición), alternancia (`|`) y repetición (`*`). El **teorema de Kleene** establece la equivalencia de cuatro caras de la misma moneda: lenguajes regulares, expresiones regulares, DFA y NFA aceptan exactamente la misma clase de lenguajes sobre \\(\\Sigma^*\\).\n\nLa **construcción de Thompson** convierte cualquier expresión regular en un **NFA-ε** legible pieza a pieza: un bloque para un símbolo, otro para unión, otro para estrella. Ese NFA se puede pasar a DFA vía subset construction (módulo 3) y ejecutar en tiempo lineal en la longitud de la entrada.\n\nEn ingeniería, casi nunca escribes el autómata a mano: escribes regex y el motor compila. Esta lección une la algebra formal con `re.compile` del snippet del curso.\n\n## Objetivos de la lección\n\n- Leer y escribir regex sobre un alfabeto finito y dar su semántica como lenguaje.\n- Aplicar operaciones de concatenación, unión y estrella a nivel de expresiones.\n- Enunciar el teorema de Kleene y el rol de cada modelo equivalente.\n- Explicar Thompson a alto nivel (concatenación = conectar salidas a entradas; `*` = ε-loop).\n- Interpretar el snippet `re` de validación de correos como DFA compilado implícito.\n\n## Desarrollo de la lección\n\n### Sintaxis y semántica\n\nGramática típica de expresiones regulares (precedencia de `*` sobre concatenación, sobre `|`):\n\n- \\(\\varnothing\\) — lenguaje vacío.\n- \\(\\epsilon\\) — solo cadena vacía.\n- \\(a \\in \\Sigma\\) — lenguaje \\(\\{a\\}\\).\n- \\(R + S\\) o \\(R \\mid S\\) — unión.\n- \\(RS\\) — concatenación.\n- \\(R^*\\) — cero o más repeticiones de \\(R\\).\n\n**Semántica**: \\(L(R) \\subseteq \\Sigma^*\\), el lenguaje denotado por la expresión \\(R\\).\n\nEjemplo: \\((0|1)^*\\) es «cualquier cadena binaria». `1*0` es «cualquier cantidad de 1 seguida de un 0».\n\n### Operadores algebraicos entre lenguajes (repaso conectado)\n\nSi \\(L(R_1) = L_1\\) y \\(L(R_2) = L_2\\):\n\n- \\(L(R_1 \\mid R_2) = L_1 \\cup L_2\\)\n- \\(L(R_1 R_2) = L_1 L_2\\)\n- \\(L(R_1^*) = L_1^*\\)\n\nLas identidades distributivas y asociativas permiten reescribir regex antes de optimizar el autómata resultante.\n\n### Teorema de Kleene (enunciado operativo)\n\n**Parte útil para compiladores**: para toda regex \\(R\\) existe un NFA-ε que acepta \\(L(R)\\); para todo DFA existe una regex equivalente (aunque puede crecer exponencialmente en el peor caso).\n\nCadena de conversiones estándar:\n\nRegex \\(\\xrightarrow{\\text{Thompson}}\\) NFA-ε \\(\\xrightarrow{\\text{subset}}\\) DFA \\(\\xrightarrow{\\text{minimización}}\\) DFA mínimo (opcional).\n\n### Algoritmo de Thompson (visión modular)\n\nConstrucción recursiva sobre el AST de la regex:\n\n1. **Símbolo `a`**: dos estados con arco `a`.\n2. **Concatenación \\(AB\\)**: conectar estados finales de A con iniciales de B con ε.\n3. **Unión \\(A|B\\)**: nuevo inicio con ε a A y a B; nuevos finales desde finales de A y B con ε.\n4. **Estrella \\(A^*\\)**: ε desde inicio a A, ε de finales de A a inicio, ε de inicio a nuevo final.\n\nResultado: siempre NFA-ε con un solo estado inicial y uno final (salvo optimizaciones).\n\n### McNaughton–Yamada–Thompson (adelanto)\n\nVariante que construye NFA con etiquetas en arcos más aptas para algunas optimizaciones (MYT/position automata). No cambia el lenguaje; cambia la forma del grafo para facilitar determinización eficiente.\n\n### Regex en motores prácticos versus teoría\n\nPython `re` añade anclas `^`, `$`, clases `[a-z]`, cuantificadores `{m,n}`, grupos de captura — extensiones que siguen compilándose a autómatas (a veces con backtracking para features no regulares puro). El patrón del snippet:\n\n`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`\n\nes un filtro **de forma** típico en formularios: no garantiza RFC 5321 completo, pero define un lenguaje regular sobre caracteres ASCII de la cadena de entrada.\n\n### Equivalencias útiles en exámenes\n\n- \\(R^+ = R R^*\\) (una o más).\n- \\(R?\\) en algunos motores = \\(R \\mid \\epsilon\\).\n- \\(\\Sigma^*\\) como \\((a_1 \\mid a_2 \\mid \\cdots \\mid a_k)^*\\) para \\(\\Sigma = \\{a_1,\\ldots,a_k\\}\\).\n\n### Límites: qué **no** es regular (puente al módulo 5)\n\nCualquier intento de expresar \\( \\{ a^n b^n \\} \\) con solo `*`, `|` y concatenación falla intuitivamente porque necesitas **contar** sin límite. Regex con backreferences en motores modernos salen de la clase puramente regular.\n\n### Glosario de símbolos regex formales versus Python `re`\n\nEn teoría, `|` es unión y la concatenación se escribe yuxtaponiendo. En Python, `|` reciente en versiones modernas existe, pero históricamente se usó alternancia con el mismo carácter dentro del patrón. El punto `.` **no** significa «cualquier símbolo del alfabeto Σ del curso» sino cualquier carácter excepto salto de línea por defecto — detalle de implementación que no cambia la regularidad del fragmento pero sí el lenguaje concreto aceptado. Los cuantificadores `{m,n}` generan autómatas con estados que recuerdan cuántas repeticiones van en el bloque actual; siguen siendo finitos para valores fijos de `m` y `n`.\n\n### Ejercicio de Thompson compuesto\n\nConstruye el NFA-ε de `(a|b)*abb` descrito en entrevistas: el bloque estrella envuelve alternancia entre `a` y `b`; la cola `abb` concatena un DFA en cadena de tres símbolos. Dibuja estados finales solo al completar `abb`. Verifica mentalmente que `aabb` falla (falta un `b`) y que `aaabb` falla (orden incorrecto al final). Ese patrón es el puente entre regex algebraico y diseño manual de estados.\n\n### Desduplicación en motores reales\n\nAlgunos optimizadores fusionan ε-aristas antes de determinizar para evitar explosión intermedia. Python cachea automatas compilados por proceso; en servicios de larga vida conviene compilar patrones al arranque, como hace el snippet con `evaluador = re.compile(...)`.\n\n## Demostración enlazada al código del módulo\n\n```python\npatron_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\nevaluador = re.compile(patron_email)\n```\n\n- `re.compile` **construye el autómata una vez** y lo reutiliza: Thompson + determinización parcial ocurren aquí, no en cada `match`.\n- `match` ancla al inicio (`^`); por eso `'correo_invalido.com'` sin `@` falla.\n- El fragmento `.{2,}` en el TLD exige **al menos dos** letras: cuantificador que en teoría expande a repetición regular del símbolo precedente.\n\n**Línea por línea de las pruebas**:\n\n- `contacto@quimisell.com` — cumple clases de usuario, `@`, dominio y TLD ≥ 2 letras ⇒ `True`.\n- `correo_invalido.com` — no hay `@` donde el patrón lo exige ⇒ `False`.\n\n**Cuidado pedagógico**: validar email en producción requiere capas extra (DNS, normalización IDN). Aquí solo practicamos **reconocimiento regular**.\n\n## Aplicaciones en sistemas reales\n\n**Lexers de compiladores (Flex, `lex` legacy)**: cada regla en el archivo `.l` es regex; Flex genera DFA y código C. Es el pipeline Thompson → subset en cadena industrial.\n\n**Rutas y políticas en Kubernetes / Envoy**: paths HTTP y filtros de URI a menudo se expresan como regex o variantes; el control plane compila a autómatas para matching en cada request.\n\n**Herramientas de redacción y IDEs**: resaltado de sintaxis tokeniza con regex precompiladas por lenguaje; actualizar un patrón equivale a regenerar el autómata subyacente.\n\n## Errores clásicos en examen\n\n- Confundir `*` (cero o más) con `+` (una o más) en semántica de lenguaje.\n- Olvidar que concatenación es **no conmutativa**: `ab` \\(\\neq\\) `ba` como regex.\n- Pensar que cualquier patrón con `*` siempre genera infinitas cadenas distintas (puede generar solo \\(\\{\\epsilon\\}\\) si el factor es \\(\\epsilon\\)).\n- Creer que Thompson produce DFA directamente (produce NFA-ε).\n- Usar el lema del bombeo al revés: «cumple bombeo ⇒ regular» es **falso**.\n\n## Preguntas de entrevista\n\n**P: ¿Cómo convertirías la regex `(a|b)*abb` en idea de lenguaje?**\n\n**R:** Todas las cadenas sobre \\(\\{a,b\\}\\) que **terminan** con la subcadena `abb`. Es el ejemplo clásico de NFA compacto cuyo DFA recuerda los últimos tres símbolos.\n\n**P: ¿Por qué `re.compile` mejora rendimiento?**\n\n**R:** La fase costosa es construir el autómata desde la regex; compilar una vez y reutilizar el objeto evita repetir Thompson/subset en cada coincidencia sobre millones de filas o líneas de log.\n\n## Síntesis y checklist antes de avanzar\n\n- Escribo regex para al menos dos lenguajes finitos dados en extensión.\n- Explico Thompson con unión, concatenación y estrella con ε-aristas.\n- Ejecuté mentalmente las dos pruebas del snippet antes de ver la salida.\n- Conozco la cadena regex → NFA → DFA y su lugar en el lexer (módulo 10).\n- Preparado para usar el lema del bombeo como herramienta **negativa** (módulo 5).\n- Repasé equivalencia regex, NFA y DFA con el teorema de Kleene.\n\n\n### Precedencia y paréntesis en regex\n\nLa expresión `ab|c` suele leerse `(ab)|(c)` no `a(b|c)` según reglas de concatenación. En parciales, reescribe siempre con paréntesis explícitos. El AST de Thompson respeta el parseo; un parse incorrecto cambia el lenguaje.\n\n### Lenguaje de dígitos y literales en compiladores\n\n- Entero decimal: `0 | [1-9][0-9]*` en pseudoregex.\n- Flotante simple: combina parte entera, punto, exponente — varias regex en lexer con prioridad (regla más larga gana en Flex).\n\nEstas piezas serán el módulo 10; aquí solo fijas que cada pieza es regular.\n\n### De regex a código: pipeline real de `re.compile`\n\n1. Parsear patrón a AST.\n2. Thompson → NFA-ε.\n3. Opcional: determinizar parcialmente para prefijos fijos.\n4. Ejecutar con simulación de DFA o backtracking si hay extensiones no regulares.\n\nEl snippet usa solo el motor estándar; no ves el autómata, pero existe en memoria del objeto compilado.\n\n### Thompson paso a paso mental para `a|b`\n\nInicio ε-split a ramas que leen `a` o `b`; ε hacia estados finales comunes. Concatenar `c` después une salidas de unión con inicio del bloque `c`. Dibujar con lápiz fija más que memorizar fórmulas.\n\n### Equivalencia regex ↔ DFA para ingenieros\n\nCuando un PM pide «filtro regex en logs», la garantía de tiempo lineal proviene del autómata subyacente, no de la brevedad del patrón. Patrones con muchas alternativas anidadas pueden generar NFAs grandes; monitorizar tiempo de compilación en despliegues.\n\n### Ejemplo extendido de lenguaje: correos simplificado versus RFC\n\nEl patrón del curso valida forma ASCII común; RFC permite comentarios, comillas y dominios punycode. Ampliar regex sin salir de regular es posible para subconjuntos, pero la complejidad del patrón crece y la mantenibilidad cae — motivo por el cual validación real usa parsers adicionales y DNS.\n\n### Identidad útil: `(R*)*` = `R*`\n\nRepetir la estrella no añade expresividad. Simplificar regex antes de Thompson reduce ε-bloques redundantes.\n\n\n### Diferencias POSIX versus PCRE\n\nPOSIX regex y Perl-style divergen en metacaracteres. Compiladores de lenguajes suelen generar regex POSIX-like sin backtracking catastrófico en el núcleo. Conocer la variante evita copiar patrones de Stack Overflow que no compilan en tu herramienta.\n\n### Escapado de metacaracteres\n\nPunto `.` en regex suele significar cualquier símbolo excepto newline; backslash escapa. En el patrón de email, `\\[` no aparece pero dominios con caracteres especiales requieren cuidado.\n\n### Lema de Arden y sistemas de ecuaciones de lenguaje\n\n\\(L = a L b \\cup \\epsilon\\) resuelve a lenguaje no regular en general si mezclas; para regular, ecuaciones lineales se resuelven con algebra de Kleene. Técnicamente útil en conversión regex ↔ DFA en algunos algoritmos.\n\n### Automatas con complemento interno en Thompson\n\nPara `^patrón` en anclas, a veces se construye autómata del complemento solo sobre prefijo de línea — optimización de motores.\n\n### Tabla resumen de operadores regex\n\n| Operador | Lenguaje | Thompson |\n|----------|----------|----------|\n| \\| | unión | ε-split |\n| concat | producto | ε-glue |\n| * | estrella de Kleene | ε-loop |\n\n### Validación en capas\n\nCapa 1 regex del snippet; Capa 2 parser si hay comillas anidadas; Capa 3 DNS MX. El módulo insiste en capa 1.\n\n### Literales y clases de caracteres\n\n`[a-zA-Z]{2,}` en el snippet exige al menos dos letras en TLD: cuantificador acotado inferiormente sigue siendo regular (expansión finita mental a alternativas repetidas o bucle en autómata con contador en estados).\n\n### Anti-patrón: regex gigante en un solo archivo\n\nMantenibilidad: divide patrones por token en lexer (módulo 10). Teorema de Kleene garantiza que cada regla sigue siendo regular; la modularidad es ingeniería, no matemática.\n\n\n### Cierre narrativo de regex en producción\n\nToda validación de formulario que «solo usa regex» está, sin nombrarlo, ejecutando un DFA compilado. El teorema de Kleene garantiza que no necesitas más poder para esos patrones, y el lema del bombeo te advierte cuándo dejar de insistir con regex. En el laboratorio del curso, la primera etapa de tokenizar números e identificadores será exactamente este pipeline: expresiones escritas por humanos, autómatas ejecutados por la máquina.\n\n### Ejercicio: escribir regex para múltiplos de 4 en binario sobre el sufijo\n\nNo trivial de leer a simple vista: diseña estados mentalmente primero, luego expresión. Compara longitud de regex versus claridad del DFA — a veces el autómata en diagrama comunica mejor al equipo que una regex de treinta caracteres.\n\n\n### Apéndice: derivación manual de lenguaje de un patrón\n\nPatrón `(0|1)*01` — todas las cadenas binarias que terminan en `01`. Primer símbolo de sufijo fijo: tras leer `0` esperas `1` final. Construye NFA con cadena para `01` y bucle `(0|1)*` al inicio vía Thompson. Simula `0001` y `0010` en el autómata mental.\n\n### Glosario regex del módulo\n\n**Concatenación implícita**, **alternancia**, **clausura de Kleene**, **ancla de inicio**, **clase de caracteres**, **cuantificador**. Cada concepto mapea a un bloque en Thompson.\n\n### Relación con módulo 10\n\nEl lexer emitirá tokens cuyos lexemas satisfacen regex independientes; la prioridad «regla más larga primero» no cambia el hecho de que cada regla es regular. Documenta en tu README del laboratorio qué regex usaste por token.\n\n\n### Lección integrada: Thompson en cinco minutos de pizarra\n\nDibuja la unión de `a` y `b`: rombos ε, estados de entrada y salida por bloque, pegamento ε. Añade concatenación con `c` pegando salidas de la unión a la entrada de `c`. Rodea todo con estrella: ε desde nuevo inicio al bloque, ε del final al inicio del bloque, ε del inicio al final nuevo. Ese dibujo es el recurso visual que debes poder reproducir en una pizarra de entrevista sin mirar apuntes.\n\n### Análisis del patrón de email del curso por partes\n\nEl prefijo `^` fuerza coincidencia desde el inicio de la cadena en `match`. La clase `[a-zA-Z0-9._%+-]+` es clausura positiva implícita de un carácter de usuario. El arroba es literal. El dominio permite puntos internos con `.-`. El TLD `[a-zA-Z]{2,}` evita dominios de una letra. El `$` cierra ancla al final. Cada trozo traduce a un micro-NFA que Thompson une.\n\n### Cuando evitar regex aunque el lenguaje sea regular\n\nA veces la regex existe pero es ilegible: un DFA dibujado a mano comunica mejor a mantenedores. Kleene dice que hay regex equivalente, no que sea la mejor documentación. En código de compiladores, tablas de Flex son la documentación ejecutable.\n\n### Mini-proyecto\n\nToma dos patrones del snippet y añade casos de prueba con `re.findall` versus `match` para ver diferencia de anclas. Escribe en el README del laboratorio qué anclas usarás para tokens que deben consumirse completos.\n\nAntes del módulo 10, repasa la tabla de equivalencias del teorema de Kleene y dibuja la cadena Regex → Thompson → subset → DFA mínimo en una sola línea en tu cuaderno. Cuando escribas la primera regla léxica del laboratorio, etiqueta mentalmente en qué eslabón de esa cadena vive tu decisión de diseño.\n\nComprueba que distingues el lenguaje denotado por `(a*)*` del denotado por `a*`, y que puedes justificar por qué Thompson termina siempre con exactamente un estado inicial y uno final en la construcción estándar del libro. Ejecuta el snippet con al menos una dirección inválida y una válida adicional que inventes tú, anotando qué subcadena viola el patrón compilado.",
      codeSnippet: `# Uso del motor Regex interno de Python (re)
import re

patron_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
evaluador = re.compile(patron_email)

print(f"¿'contacto@quimisell.com' válido?: {bool(evaluador.match('contacto@quimisell.com'))}") # True
print(f"¿'correo_invalido.com' válido?: {bool(evaluador.match('correo_invalido.com'))}")       # False`,
      quiz: [
        {
          question: "Precedencia estándar en regex: ¿qué opera primero?",
          options: ["Estrella (Kleene)",
          "Unión",
          "Paréntesis externos",
          "Concatenación antes que estrella"],
          answerIndex: 0,
          explanation: "Orden habitual: paréntesis > * > concat > |."
        },
        {
          question: "(0|1)*0 representa:",
          options: ["Cadenas binarias que terminan en 0",
          "Cadenas que empiezan en 0",
          "Solo '0'",
          "Cadenas con un solo 1"],
          answerIndex: 0,
          explanation: "Cualquier prefijo binario seguido de 0 final."
        },
        {
          question: "Teorema de Kleene establece equivalencia entre:",
          options: ["Regex, NFA/DFA y lenguajes regulares",
          "CFG y PDA solamente",
          "MT y C",
          "Lexer y optimizador"],
          answerIndex: 0,
          explanation: "Las tres caracterizaciones definen la misma clase."
        },
        {
          question: "Thompson para concatenación rs conecta:",
          options: ["Aceptación de r con inicio de s via ε",
          "Unión directa de alfababetos",
          "Estados finales de s con inicio de r",
          "Dos iniciales sin enlace"],
          answerIndex: 0,
          explanation: "Salida de r enlaza por ε a entrada de s."
        },
        {
          question: "a+b en notación regex (sin espacios) suele significar:",
          options: ["Una o más repeticiones de 'a' seguidas de literal 'b'",
          "Suma aritmética",
          "Unión a ∪ {b}",
          "La cadena 'ab' opcional"],
          answerIndex: 0,
          explanation: "+ es clausura positiva; luego concat con b."
        },
        {
          question: "¿Qué lenguaje NO puede describirse con regex sobre Σ={(,)}?",
          options: ["Paréntesis balanceados arbitrarios",
          "Cadena vacía",
          "Secuencia '(()'",
          "Un solo '('"],
          answerIndex: 0,
          explanation: "Balanceo anidado requiere contador (CF), no memoria finita."
        },
        {
          question: "Depura: patrón (0*)*1 acepta '111'. ¿Es correcto para Σ={0,1}?",
          options: ["Sí: (0*)* consume cero ceros repetidamente y exige un 1",
          "No: necesita al menos un 0",
          "No: * no anida",
          "Solo acepta ε"],
          answerIndex: 0,
          explanation: "(0*)* puede repetir la subexpresión vacía; luego el 1 final satisface."
        },
        {
          question: "Eliminación de estados en DFA produce:",
          options: ["Una expresión regular equivalente",
          "Una CFG",
          "Una MT",
          "Un parser LL(1)"],
          answerIndex: 0,
          explanation: "Método algebraico clásico DFA → regex."
        },
        {
          question: "Motor regex con backtracking greedy puede diferir del autómata cuando:",
          options: ["Hay capturas y anclas POSIX no regulares puras",
          "El alfabeto es binario",
          "No hay unión",
          "Siempre coinciden en teoría"],
          answerIndex: 0,
          explanation: "Extensiones (lookahead, backrefs) salen de regex clásicas; greedy puede divergir en implementaciones."
        },
        {
          question: "Identificador [A-Za-z_][A-Za-z0-9_]* en lexer mapea a:",
          options: ["Lenguaje regular reconocido por DFA combinado",
          "Lenguaje CF sin regular",
          "Solo un símbolo terminal",
          "Gramática de Turing"],
          answerIndex: 0,
          explanation: "Prefijo-clase y repetición son operadores regulares."
        }
      ],
      exercises: [
        {
          id: 6301,
          instruction: "Escribe una regex en Python (sin usar re) que describa identificadores: letra seguida de letras/dígitos/guion bajo. Luego usa `re.match` del snippet para validar 'x1' y rechazar '1x'.",
          placeholder: "patron = r'...'",
          expectedKeywords: ["re", "match", "patron"],
          hint: "Clase de caracteres [a-zA-Z_] y repetición con +.",
          isEmailSubmission: false
        },
        {
          id: 6302,
          instruction: "DESAFÍO: Explica en comentarios cómo Thompson construye un NFA-ε para el operador alternancia (r|s) con transiciones ε. Opcional: esquema de estados en ASCII.",
          placeholder: "# Thompson: r|s ...",
          expectedKeywords: ["epsilon", "nfa", "union", "thompson"],
          hint: "Estado inicial con ε a dos sub-autómatas y ε a aceptación común.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 5,
      title: "MÓDULO 5: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES",
      description: "Demostración rigurosa por contradicción para probar que un lenguaje NO es regular.",
      items: [
      "Pumping lemma para regulares: ∃p tal que |w| ≥ p ⇒ w = xyz con |xy| ≤ p, |y| ≥ 1.",
      "Condición de bombeo: ∀i ≥ 0, xyⁱz ∈ L; contradicción al bombar fuera del lenguaje.",
      "Elección de w adverso (pumping length p) y descomposición forzada en la porción xyc.",
      "Casos i = 0 o i = 2 para colapsar o duplicar símbolos estratégicos.",
      "Demostrar L = {aⁿbⁿ} no regular: y solo puede contener a's rompiendo balance.",
      "Palíndromos sobre {a,b} y lenguajes con dependencias entre posiciones distantes.",
      "Diferencia necesidad vs suficiencia: bombeo caracteriza regulares (conversión completa).",
      "Errores: asumir |y| ≤ p global o olvidar verificar i arbitrario en la contradicción.",
      "Uso en diseño: si bombeo falla, buscar CFG/PDA en lugar de más estados DFA."
],
      content: "## Panorama del tema: LEMA DEL BOMBEO (PUMPING LEMMA) PARA LENGUAJES REGULARES\n\nUn DFA tiene un número fijo de estados \\(|Q| = p\\). Al leer una cadena muy larga, algún estado se **repite** (principio del palomar). La parte de cadena entre la primera y segunda visita a ese estado puede «bombearse» — repetirse cero, una o muchas veces — sin salir del lenguaje **si** el lenguaje es regular.\n\nEl **lema del bombeo** formaliza esa intuición. Es una herramienta **negativa**: demuestra que un lenguaje **no** es regular mostrando que viola las condiciones del lema. No sirve para probar regularidad (no es condición suficiente).\n\nEl ejemplo canónico \\(L = \\{ a^n b^n \\mid n \\ge 0 \\}\\) separa regulares de libres de contexto y anticipa el autómata de pila del módulo 7. El snippet del curso ilustra por qué un contador lineal en Python **no** es un DFA, aunque reconozca instancias finitas concretas.\n\n## Objetivos de la lección\n\n- Explicar límites de memoria finita en autómatas y la necesidad de contadores ilimitados para \\(a^n b^n\\).\n- Enunciar el lema del bombeo para lenguajes regulares con constante \\(p\\).\n- Aplicar descomposición \\(w = xyz\\) con \\(|xy| \\le p\\), \\(|y| \\ge 1\\), y bombeo \\(x y^i z\\).\n- Realizar una demostración por contradicción completa para \\( \\{ a^n b^n \\} \\).\n- Contrastar intuición del snippet `simular_contador_a_n_b_n` con imposibilidad DFA.\n\n## Desarrollo de la lección\n\n### Por qué los DFA no «cuentan hasta infinito»\n\nUn DFA sobre \\(\\{a,b\\}\\) que intente verificar igual número de \\(a\\) y \\(b\\) en orden necesitaría recordar cuántas \\(a\\) vio antes de las \\(b\\). Con memoria finita solo puede distinguir un **número acotado** de valores de contador; cadenas con \\(n > p\\) colapsan al mismo estado y fallan la comparación.\n\nUn programa con entero `contador_a` parece resolver el problema para entradas finitas, pero eso es un **algoritmo con memoria ilimitada en la variable**, no un autómata de estados fijos. La teoría clasifica \\(a^n b^n\\) como **LLC**, no regular.\n\n### Enunciado del lema (forma estándar)\n\nSi \\(L\\) es **regular**, entonces existe \\(p \\ge 1\\) (longitud de bombeo) tal que toda cadena \\(w \\in L\\) con \\(|w| \\ge p\\) se puede escribir \\(w = xyz\\) cumpliendo:\n\n1. \\(|y| \\ge 1\\) (hay algo que bombear),\n2. \\(|xy| \\le p\\) (la parte bombeable cae dentro del primer bloque acotado por estados),\n3. Para todo \\(i \\ge 0\\), \\(x y^i z \\in L\\).\n\n**Uso negativo**: asume \\(L\\) regular; elige \\(w \\in L\\) larga; **toda** factorización válida \\(xyz\\) al bombear algún \\(i\\) produce cadena fuera de \\(L\\) ⇒ contradicción ⇒ \\(L\\) no regular.\n\n### Intuición del palomar en la lectura\n\nDurante la lectura de \\(w\\) con \\(|w| \\ge p\\), el DFA visita \\(p+1\\) configuraciones (estado + posición); algún estado se repite dentro de los primeros \\(p\\) símbolos. La subcadena \\(y\\) es el bucle entre repeticiones; bombar \\(y\\) corresponde a recorrer ese ciclo \\(i\\) veces extra.\n\n### Demostración guía: \\(L = \\{ a^n b^n \\mid n \\ge 0 \\}\\) no es regular\n\n**Supón** \\(L\\) regular con longitud de bombeo \\(p\\).\n\n**Elige** \\(w = a^p b^p \\in L\\) (longitud \\(2p \\ge p\\)).\n\n**Considera** cualquier \\(w = xyz\\) con \\(|xy| \\le p\\) y \\(|y| \\ge 1\\).\n\nComo \\(|xy| \\le p\\), la subcadena \\(xy\\) consiste solo de símbolos \\(a\\) (están en el prefijo de \\(a\\)s). Entonces \\(y = a^k\\) con \\(k \\ge 1\\).\n\n**Bombea** con \\(i = 0\\): \\(x z\\) tiene **menos** \\(a\\)s que \\(b\\)s (eliminaste al menos un \\(a\\) de \\(y\\) pero las \\(b\\)s siguen siendo \\(p\\)). No puede estar en \\(L\\).\n\nContradicción. Luego \\(L\\) no es regular.\n\n### Variante: \\(L = \\{ ww \\mid w \\in \\{0,1\\}^* \\}\\)\n\nOtra prueba clásica en entrevistas. Elige \\(w = 0^p 1^p\\) o la cadena escrita en el enunciado; cualquier \\(y\\) concentrado en la primera mitad desalinea la copia al bombear. Practica elegir **la** cadena \\(w\\) según el lenguaje.\n\n### Bombeo con \\(i = 2\\) (inflar en lugar de vaciar)\n\nA veces conviene duplicar \\(y\\): si \\(y\\) contiene tanto \\(a\\) como \\(b\\) mezclados en lenguajes ordenados, inflar puede romper el orden requerido. La elección de \\(i\\) es parte del arte de la prueba.\n\n### Condición necesaria pero no suficiente\n\nExisten lenguajes **no regulares** que aun cumplen la conclusión del lema (ejemplos patológicos en textos avanzados). En el curso basta recordar: **violar** el lema ⇒ no regular; **satisfacer** el lema no demuestra regularidad — construye DFA o regex para afirmar regularidad.\n\n### Relación con el módulo 7\n\nEl mismo \\(a^n b^n\\) será aceptado por un PDA que hace push por cada \\(a\\) y pop por cada \\(b\\). El lema del bombeo para LLC (versión distinta) fallará al intentar probar que \\(a^n b^n c^n\\) no es LLC.\n\n### Mini tabla de estrategias de bombeo\n\n| Lenguaje candidato | Cadena \\(w\\) típica | Truco sobre \\(y\\) |\n|-------------------|---------------------|---------------------|\n| \\(a^n b^n\\) | \\(a^p b^p\\) | \\(y\\) solo de \\(a\\)s en el prefijo |\n| \\(a^n b^m\\) con \\(n \\le m\\) | \\(a^p b^p\\) | ajustar según desigualdad |\n| Palíndromos impares | \\(0^p 1 0^p\\) | bombear descentra el centro |\n\nUsa la fila que coincida con la estructura del lenguaje; si la cadena elegida no obliga a \\(y\\) a quedar homogénea, cambia \\(w\\).\n\n## Demostración enlazada al código del módulo\n\n`simular_contador_a_n_b_n`:\n\n1. Primera fase: cuenta \\(a\\)s consecutivos desde el inicio.\n2. Segunda fase: cuenta \\(b\\)s consecutivos.\n3. Acepta si no quedan caracteres y ambos contadores coinciden.\n\n**Qué demuestra el código**: la **definición** del lenguaje es computable con dos enteros — implementación de propósito didáctico, **no** un DFA.\n\n**Comentario en el snippet**: «Un DFA requiere un estado por cada \\(n\\)» — traducción informal del argumento del palomar: sin repetir estados distinguibles, no puedes diferenciar todos los conteos.\n\nPara `'aaabbb'`, devuelve `True`. Para `'aaab'` devuelve `False`. Ninguna de esas ejecuciones construye tabla \\(\\delta\\).\n\n**Ejercicio**: ¿por qué modificar el programa para leer \\(a\\)s y \\(b\\) intercalados fallaría en \\(a^n b^n\\) estricto? Porque el lenguaje exige bloque contiguo de \\(a\\)s y luego de \\(b\\)s.\n\n## Aplicaciones en sistemas reales\n\n**Límites de validación con regex en producción**: no intentes validar HTML anidado arbitrario o expresiones aritméticas completas solo con regex; el lema del bombeo explica por qué equipos de seguridad rechazan parsers ad hoc basados en regex para subconjuntos LLC.\n\n**Diseño de DSLs**: si la sintaxis requiere igualar delimitadores de profundidad arbitraria (`( … )`), migras a gramática CFG + parser, no a DFA. El bombeo es la justificación teórica que presentas en revisiones de arquitectura.\n\n**Entrevistas de sistemas distribuidos (analogía)**: máquinas con estado finito local no pueden distinguir conteos globales ilimitados sin memoria externa — el mismo principio aparece en imposibilidad de consenso con fallos; el lema entrena el razonamiento «memoria acotada ⇒ invariantes acotados».\n\n## Errores clásicos en examen\n\n- Elegir \\(w\\) demasiado corta (\\(|w| < p\\)) — el lema solo aplica a cadenas largas respecto a \\(p\\) desconocido pero existente.\n- Fijar \\(y\\) arbitrariamente en lugar de probar **para toda** factorización \\(xyz\\) con las restricciones.\n- Usar bombeo para demostrar que un lenguaje **sí** es regular.\n- Olvidar \\(|y| \\ge 1\\) (bombeo trivial con \\(y = \\epsilon\\) no aplica).\n- Confundir lema para regulares con lema para LLC (enunciados distintos).\n\n## Preguntas de entrevista\n\n**P: Demuestra que \\(L = \\{ a^n b^n c^n \\mid n \\ge 0 \\}\\) no es regular (pista: ¿es suficiente bombeo regular?).**\n\n**R:** De hecho no es LLC tampoco; con bombeo regular puedes intentar \\(w = a^p b^p c^p\\) y mostrar que inflar \\(y\\) desbalancea una de las letras. Para rigor LLC haría falta el lema de bombeo para LLC; en entrevista básica a veces piden solo intuición de por qué regex/DFA fallan.\n\n**P: Si \\(L\\) es finito, ¿es regular?**\n\n**R:** Sí: un DFA puede tener un estado por cadena aceptada más trampa, o construir unión finita de cadenas como regex. Finito ⇒ regular; el bombeo no es necesario para probarlo.\n\n## Síntesis y checklist antes de avanzar\n\n- Recito el enunciado del lema con \\(p\\), \\(xyz\\) y bombeo \\(y^i\\).\n- Repetí la prueba de \\(a^n b^n\\) sin mirar apuntes.\n- Expliqué por qué el snippet Python no contradice el teorema (modelo ≠ DFA).\n- Entiendo que el siguiente salto es CFG y PDA para lenguajes con conteo (módulo 6–7).\n- Puedo elegir una cadena \\(w\\) adecuada para un enunciado tipo parcial nuevo.\n\n\n### Plantilla de prueba por bombeo (pasos numerados)\n\n1. Supón \\(L\\) regular; fija constante \\(p\\) del lema (desconocida pero existe).\n2. Elige \\(w \\in L\\) con \\(|w| \\ge p\\) adaptado al lenguaje (típicamente potencias).\n3. Toma factorización arbitraria \\(w = xyz\\) con \\(|xy| \\le p\\), \\(|y| \\ge 1\\).\n4. Analiza la forma de \\(y\\) usando que \\(|xy|\\) está acotado (prefijo corto).\n5. Elige \\(i\\) (0, 2, o a veces grande) tal que \\(x y^i z \\notin L\\).\n6. Contradicción: conclusión \\(L\\) no regular.\n\nMemorizar la plantilla acelera parciales más que aprender un solo ejemplo.\n\n### Segundo ejemplo: lenguaje de palíndromos de longitud par sobre un solo par de símbolos\n\n\\(L = \\{ ww^R \\mid w \\in \\{0,1\\}^* \\}\\) sobre enfoque distinto — no confundir con \\(ww\\). Para palíndromos impares de longitud variable, el bombeo regular también puede aplicarse según el enunciado. Practica elegir \\(w = 0^p 1 0^p\\) u variantes.\n\n### \\(L = \\{ 0^{2n} \\mid n \\ge 0 \\}\\) (longitudes pares de ceros)\n\nEs **regular** (ejemplo: \\((00)^*\\)). Si un alumno intenta probar no regularidad con bombeo, la factorización válida siempre podrá bombearse sin salir — la prueba debe **fallar**, lo cual no prueba regularidad pero evita falsas negativas. Contrasta con \\(0^n 1^n\\).\n\n### Por qué \\(|xy| \\le p\\) importa\n\nAta la ventana de bombeo a la región donde el DFA ya repetó estado entre las primeras \\(p\\) posiciones. Sin esa cota, podrías elegir \\(y\\) que cruza el «borde» entre bloques de \\(a\\) y \\(b\\) de forma que el argumento de desbalance no funciona.\n\n### Mini FAQ de examen\n\n**¿Puedo elegir \\(y\\)?** No: debes probar que **toda** \\(y\\) válida en la factorización falla al bombear.\n\n**¿Necesito construir el DFA?** No para la prueba negativa; solo asumir existencia de \\(p\\).\n\n**¿Bombeo prueba LLC?** No; hay lema distinto con longitud de bombeo en función de símbolos y produciones.\n\n### Extensión del snippet: demostrar rechazo en Python versus teoría\n\n`simular_contador_a_n_b_n('aaabb')` devuelve `False` porque los bloques no están balanceados. Eso no sustituye el lema, pero alinea intuición de conteo con casos de prueba en laboratorio.\n\n### Puente al módulo 6\n\nTras establecer límites de regulares, las CFG generan anidamiento sin límite en profundidad de paréntesis. El estudiante debe poder **nombrar** qué propiedad del lenguaje viola el bombeo: conteo, orden global, repetición simétrica.\n\n\n### Demostración adicional: \\(L = \\{ a^i b^j \\mid i > j \\}\\) no es regular\n\nIntuición de conteo comparativo; bombeo con cadena \\(w = a^p b^{p-1}\\) u otra según desigualdad. Practica variante en casa para afianzar el esquema.\n\n### Uso del lema en seguridad informática\n\nExplicar a stakeholders por qué un WAF basado solo en regex no puede validar árbol HTML arbitrario cierra conversaciones de alcance.\n\n### Errores de signo en bombeo\n\nElegir \\(i\\) negativo conceptualmente como \\(i=0\\) (eliminar \\(y\\)) o \\(i=2\\) (duplicar); usar \\(i\\) demasiado grande a veces vuelve a \\(L\\) en lenguajes demasiado permisivos — ajusta \\(i\\) mínimo necesario.\n\n### Relación con principio del palomar clásico\n\n\\(p+1\\) palomas en \\(p\\) cubículos — misma idea que \\(p+1\\) estados visitados en prefijo \\(p\\). Unifica memoria.\n\n### Ejemplo donde bombeo **no** aconseja regularidad\n\nAlgunos lenguajes no regulares sofisticados satisfacen condiciones débiles del lema; no caigas en trampa en cursos avanzados. Para este curso, casi todos los ejemplos pedidos son \\(a^n b^n\\) o variantes.\n\n### Notación \\(w = xyz\\) y posiciones\n\nx es prefijo antes de y; z es sufijo después. En tabla de índices 1..|w|, dibuja barras para ver que |xy|≤p limita y al inicio.\n\n### Repaso con el quiz del módulo\n\nLas preguntas del panel confirman: lema es prueba negativa; p es longitud de bombeo ligada a estados; |y|≥1. Enlaza autoevaluación con esta lección maestra.\n\n### Transición al módulo 6\n\nUna vez que \\(a^n b^n\\) quedó fuera de regulares, preguntas «¿y si solo anido paréntesis?» — LLC. El lema del bombeo para regulares ya no es la herramienta; construirás gramática.\n\n\n### Cierre narrativo del bombeo\n\nEl lema del bombeo es la primera herramienta **de imposibilidad** seria en el curso: deja de buscar un DFA cuando la contradicción está completa. En la industria rara vez demuestras bombeo en un documento de diseño, pero la habilidad aparece al rechazar soluciones regex para validar árboles JSON profundos o igualar cantidades ilimitadas de delimitadores. Después de dominar este módulo, leer el módulo 6 con gramáticas libres de contexto debería sentirse como ganar memoria de pila justificada, no como magia ad hoc.\n\n### Redacción para informe académico\n\nPlantilla de una párrafo: «Supongamos \\(L\\) regular. Por el lema del bombeo existe \\(p\\) tal que toda cadena larga factoriza…». Practica redactar la prueba de \\(a^n b^n\\) en prosa continua sin saltar pasos lógicos; es formato habitual en entregas escritas.\n\n\n### Apéndice: lista de lenguajes para practicar\n\n1. \\(\\{ a^n b^m \\mid n \neq m \\}\\) — no regular (bombeo).\n2. Cadenas de `(` y `)` balanceados — no regular.\n3. Todas las cadenas sobre \\(\\{a,b\\}\\) — regular, \\((a|b)^*\\).\n\nIntenta clasificar antes de probar, luego demuestra una negativa con bombeo.\n\n### Glosario del módulo\n\n**Longitud de bombeo**, **factorización xyz**, **bombeo**, **condición necesaria**, **contradicción**. Usa estos términos en tu síntesis escrita.\n\n\n### Lección integrada: bombeo en prosa para \\(L = \\{01^n0 \\mid n \\ge 1\\}\\)\n\nSi el enunciado propone lenguajes con un solo cero separador, elige \\(w = 01^{p}0\\) y observa que \\(y\\) no puede cruzar la frontera entre regiones sin romper la condición al bombear con \\(i=0\\) o \\(i=2\\). La técnica es la misma que \\(a^n b^n\\): ubicar \\(y\\) en una zona homogénea gracias a \\(|xy| \\le p\\).\n\n### Contraste pedagógico fuerte\n\nEl snippet Python cuenta con memoria no acotada en el entero `contador_a`; el DFA tendría que resumir el conteo en estados \\(q_0, q_1, \\ldots, q_n\\) sin límite teórico. Esa imagen mental — «¿puedo resolver con un número fijo de estados?» — es la pregunta que debes hacerte antes de intentar diseñar un autómata para un lenguaje nuevo.\n\n### Simulacro de parcial\n\nTiempo 20 minutos: demuestra que \\(\\{ a^i b^j c^k \\mid i + j = k \\}\\) no es regular (pista: elige cadena con \\(p\\) repetidos de cada letra en proporción). Aunque no completes, entrega el esquema de factorización. Compara con la solución del profesor subrayando dónde usaste \\(|xy| \\le p\\).\n\nAntes de abrir el módulo 6, redacta sin mirar el enunciado completo del lema del bombeo y la prueba de \\(a^n b^n\\) en diez líneas. Si puedes, estás listo para gramáticas libres de contexto.\n\nAntes de abrir el módulo 6, redacta sin mirar el enunciado completo del lema del bombeo y la prueba de \\(a^n b^n\\) en diez líneas. Si puedes, estás listo para gramáticas libres de contexto.\n\nConfirma que sabes verbalizar por qué satisfacer el lema no implica regularidad, y que el contador del snippet es una réplica algorítmica de un reconocedor que teóricamente requiere memoria más allá de cualquier DFA de tamaño fijo. Practica bombeo con \\(w = a^p b^p\\) escrita en papel antes de revisar la solución de esta lección.",
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
          question: "Pumping lemma para L regular afirma que existen p y descomposición w = xyz con:",
          options: ["|xy| ≤ p, |y| ≥ 1 y xyⁱz ∈ L para todo i ≥ 0",
          "|y| > p siempre",
          "y puede ser ε",
          "Solo aplica si L es finito"],
          answerIndex: 0,
          explanation: "Condiciones estándar del lema."
        },
        {
          question: "Para demostrar {aⁿbⁿ | n≥0} no regular, w adversarial típico con longitud ≥ p:",
          options: ["aᵖbᵖ",
          "aᵖ",
          "bᵖaᵖ",
          "(ab)ᵖ"],
          answerIndex: 0,
          explanation: "Fuerza balance; bombeo en y rompe igualdad de a y b."
        },
        {
          question: "Si en bombeo elegimos i = 0, efecto sobre w = xyz:",
          options: ["Se elimina una ocurrencia de y",
          "Se duplica y",
          "Se invierte z",
          "No cambia la longitud total"],
          answerIndex: 0,
          explanation: "xy⁰z = xz, útil para probar salida del lenguaje."
        },
        {
          question: "Error frecuente en exámenes:",
          options: ["Asumir que y debe contener solo b cuando w = aᵖbᵖ",
          "Elegir p arbitrario del lema",
          "Usar contradicción",
          "Considerar i ≥ 0"],
          answerIndex: 0,
          explanation: "Con |xy| ≤ p, y cae solo en bloque inicial de a's."
        },
        {
          question: "L = {ww | w ∈ {0,1}*} es no regular porque:",
          options: ["Requiere comparar mitades separadas por distancia variable",
          "Es finito",
          "Es igual a (0|1)*",
          "Tiene ε"],
          answerIndex: 0,
          explanation: "Memoria finita no guarda primera mitad para longitudes crecientes."
        },
        {
          question: "Pumping lemma es suficiente para probar no regularidad:",
          options: ["Sí cuando el argumento de contradicción cierra correctamente",
          "No: nunca sirve",
          "Solo para lenguajes finitos",
          "Solo con NFA"],
          answerIndex: 0,
          explanation: "Es herramienta estándar de prueba por contradicción."
        },
        {
          question: "Depura prueba: concluyes L regular porque bombea una vez. Fallo:",
          options: ["Debes mostrar violación ∀i, no un caso aislado",
          "Falta alfabeto",
          "No se usa z",
          "w es demasiado corta siempre"],
          answerIndex: 0,
          explanation: "La condición del lema quantifica sobre todo i."
        },
        {
          question: "Palíndromos sobre {a,b} con longitud par:",
          options: ["No son regulares (misma técnica de cruce)",
          "Son regulares por regex a*b*a",
          "Son finitos",
          "Son CF pero también regulares"],
          answerIndex: 0,
          explanation: "Comparación simétrica de extremos requiere más que un contador."
        },
        {
          question: "Si L es regular, entonces para suficientemente largas cadenas:",
          options: ["Una porción y se puede repetir sin salir de L",
          "No hay cadenas largas",
          "Todas las descomposiciones fallan",
          "p = |Σ|"],
          answerIndex: 0,
          explanation: "Interpretación operativa del lema."
        },
        {
          question: "Bombeo falla para diseñar DFA de aⁿbⁿ implica:",
          options: ["Buscar PDA/CFG, no más estados DFA",
          "El lenguaje es regular",
          "El lema está mal enunciado",
          "Usar solo ε-NFA"],
          answerIndex: 0,
          explanation: "Señal de que memoria finita no bastará."
        }
      ],
      exercises: [
        {
          id: 6401,
          instruction: "Usando el argumento del Pumping Lemma, escribe una prueba en prosa de por qué L={a^n b^n | n≥0} no es regular (elige p, w, descomposición xyz y bombeo i=0 o i=2).",
          placeholder: "Prueba: Sea p ...",
          expectedKeywords: ["pumping", "regular", "contradiccion", "xyz"],
          hint: "w = a^p b^p; bombea y solo con a's.",
          isEmailSubmission: false
        },
        {
          id: 6402,
          instruction: "DESAFÍO: Modifica el simulador del snippet para mostrar que un DFA no puede distinguir igual número de a's y b's en cadenas largas (por qué falla con memoria finita).",
          placeholder: "def simular_contador...",
          expectedKeywords: ["dfa", "estado", "memoria", "b^n"],
          hint: "Relaciona |Q| con el límite de conteo.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 6,
      title: "MÓDULO 6: GRAMÁTICAS LIBRES DE CONTEXTO (CFG) Y ÁRBOLES DE DERIVACIÓN",
      description: "Especificación formal de la sintaxis de lenguajes de programación mediante reglas de producción.",
      items: [
      "CFG G = (V, Σ, P, S): producciones A → α con A ∈ V y α ∈ (V ∪ Σ)*.",
      "Derivación leftmost/rightmost; árbol de derivación como estructura de análisis.",
      "Lenguaje generado L(G) por cadenas de terminales derivables desde S.",
      "Ambigüedad: múltiples árboles para la misma cadena; impacto en parseo declarativo.",
      "Eliminación de ambigüedad en expresiones (precedencia y asociatividad).",
      "Formas normales (FNC paso adelante): facilitan CYK y demostraciones.",
      "Lexer entrega tokens; CFG define sintaxis sobre alfabeto de tokens, no caracteres sueltos.",
      "Verificación de pertenencia por búsqueda guiada versus enumeración de Σ^n.",
      "Gramáticas recursivas izquierda/derecha y su relación con parsers LL/LR."
],
      content: "## Panorama del tema: GRAMÁTICAS LIBRES DE CONTEXTO (CFG), DERIVACIONES, ÁRBOLES Y AMBIGÜEDAD\n\nTras dominar los lenguajes regulares y sus límites (como el reconocimiento de \\(a^n b^n\\)), abrimos la puerta a los **lenguajes libres de contexto** (LLC): la clase formal que modela casi toda la sintaxis de los lenguajes de programación. Una gramática libre de contexto (CFG, del inglés *context-free grammar*) no describe cómo ordenar caracteres en una línea de texto, sino cómo **ensamblar estructuras jerárquicas**: expresiones dentro de paréntesis, listas de declaraciones, bloques anidados, llamadas a funciones con argumentos, y árboles de tipos.\n\nLa diferencia conceptual es profunda: el lexer (módulos anteriores) responde «¿qué símbolos hay y en qué orden lineal?». La gramática responde «¿cómo se agrupan esos símbolos en construcciones con sentido?». Por eso las CFG son la especificación estándar de parsers en compiladores: Yacc/Bison, ANTLR, la gramática de Python o la de C++ se expresan como reglas de producción.\n\nEn esta lección construiremos la intuición formal \\(G = (V, \\Sigma, R, S)\\), practicaremos derivaciones leftmost y rightmost, leeremos árboles de derivación como «radiografías» de una cadena, y entenderemos por qué la **ambigüedad** obliga a rediseñar gramáticas antes de implementar un compilador serio.\n\n## Objetivos de la lección\n\n- Definir formalmente una CFG y distinguir terminales, no terminales, reglas y símbolo inicial.\n- Realizar derivaciones leftmost y rightmost sobre gramáticas pequeñas hasta obtener cadenas concretas.\n- Construir y leer árboles de derivación (parse trees) y relacionarlos con precedencia de operadores.\n- Reconocer gramáticas ambiguas y aplicar transformaciones clásicas para eliminar ambigüedad en expresiones aritméticas.\n- Conectar la noción de LLC con el reconocimiento por autómata de pila (módulo siguiente).\n\n## Desarrollo de la lección\n\n### Definición formal: \\(G = (V, \\Sigma, R, S)\\)\n\nUna gramática libre de contexto es una cuaterna:\n\n- **\\(V\\)**: conjunto finito de **variables** (no terminales), suele escribirse con mayúsculas: \\(E, T, F, Stmt, Expr\\).\n- **\\(\\Sigma\\)**: alfabeto de **terminales** (tokens reales del lenguaje: `+`, `if`, identificadores, números).\n- **\\(R\\)**: conjunto finito de **reglas de producción** de la forma \\(A \\rightarrow \\alpha\\), donde \\(A \\in V\\) y \\(\\alpha \\in (V \\cup \\Sigma)^*\\) (cadena, posiblemente vacía \\(\\epsilon\\)).\n- **\\(S\\)**: símbolo **inicial** (axioma), \\(S \\in V\\).\n\nLa palabra «libre de contexto» significa que al reemplazar \\(A\\) por \\(\\alpha\\) **no importa** qué símbolos rodean a \\(A\\) en la cadena intermedia. Eso contrasta con gramáticas sensibles al contexto (tipo 1 en Chomsky), donde el reemplazo puede depender del entorno.\n\n**Ejemplo — expresiones aritméticas mínimas**\n\n\\[\n\\begin{aligned}\nE &\\rightarrow E + T \\mid T \\\\\nT &\\rightarrow T * F \\mid F \\\\\nF &\\rightarrow (E) \\mid \\textbf{num}\n\\end{aligned}\n\\]\n\nAquí \\(V = \\{E, T, F\\}\\), \\(\\Sigma\\) incluye `+`, `*`, `(`, `)`, y el terminal abstracto `num`. \\(S = E\\).\n\n### Lenguaje generado y derivaciones\n\nEl **lenguaje** \\(L(G)\\) es el conjunto de cadenas de terminales que se pueden derivar desde \\(S\\) aplicando reglas repetidamente hasta que no queden no terminales.\n\nSea una **cadena sentencial** cualquier elemento de \\((V \\cup \\Sigma)^*\\) alcanzable desde \\(S\\). Una **derivación** es una secuencia de pasos donde en cada paso se elige un no terminal y se aplica una regla.\n\n- **Derivación leftmost (más a la izquierda)**: en cada paso se expande el no terminal **más a la izquierda** todavía presente. Es la convención que siguen muchos parsers LL.\n- **Derivación rightmost**: se expande el no terminal más a la derecha; habitual en parsers LR.\n\n**Ejemplo paso a paso** — derivar la cadena `num + num * num` con la gramática anterior (versión ambigua simplificada sin niveles \\(E,T,F\\) — ver más abajo la versión no ambigua).\n\nCon gramática ambigua clásica \\(E \\rightarrow E + E \\mid E * E \\mid num\\), una derivación leftmost para `num + num * num` podría comenzar:\n\n1. \\(E \\Rightarrow E + E\\)\n2. \\(E + E \\Rightarrow \\textbf{num} + E\\)\n3. \\(\\textbf{num} + E \\Rightarrow \\textbf{num} + E * E\\)\n4. \\(\\textbf{num} + E * E \\Rightarrow \\textbf{num} + \\textbf{num} * E\\)\n5. \\(\\textbf{num} + \\textbf{num} * E \\Rightarrow \\textbf{num} + \\textbf{num} * \\textbf{num}\\)\n\nObserva que en el paso 1 elegimos \\(E + E\\) en lugar de \\(E * E\\): diferente elección temprana cambia el árbol final (precedencia).\n\n### Árboles de derivación (parse trees)\n\nUn **árbol de derivación** representa visualmente la jerarquía sintáctica:\n\n- La **raíz** es \\(S\\) (o el no terminal inicial de la derivación).\n- Cada nodo interno es un no terminal; sus hijos, leídos de izquierda a derecha, corresponden al lado derecho de una producción aplicada.\n- Las **hojas**, de izquierda a derecha, forman la cadena terminal derivada.\n\nPara `num + num * num` con la gramática no ambigua en tres niveles:\n\n\\[\nE \\rightarrow E + T \\mid T,\\quad T \\rightarrow T * F \\mid F,\\quad F \\rightarrow \\textbf{num}\n\\]\n\nel árbol fuerza que `*` quede **más profundo** (más cerca de las hojas numéricas) que `+`, implementando que la multiplicación tiene mayor prioridad que la suma.\n\nSi dibujas el árbol:\n\n- Raíz \\(E\\) con hijos: subárbol \\(E\\) (suma), terminal `+`, subárbol \\(T\\) (producto).\n- El subárbol de producto \\(T\\) tiene hijos \\(T\\), `*`, \\(F\\) con números en hojas.\n\n**Propiedad clave**: distintas derivaciones que producen el **mismo** árbol se consideran equivalentes; el problema surge cuando **dos árboles distintos** generan la **misma** cadena terminal — ahí nace la ambigüedad.\n\n### Ambigüedad: definición y por qué importa en compiladores\n\nUna gramática \\(G\\) es **ambigua** si existe alguna cadena \\(w \\in L(G)\\) con **al menos dos** árboles de derivación distintos (equivalentemente, dos derivaciones leftmost distintas, o dos rightmost distintas).\n\nLa gramática \\(E \\rightarrow E + E \\mid E * E \\mid num\\) es el ejemplo canónico: `num + num * num` puede interpretarse como \\((\\textbf{num} + \\textbf{num}) * \\textbf{num}\\) o \\(\\textbf{num} + (\\textbf{num} * \\textbf{num})\\).\n\nEn un compilador, cada árbol suele mapear a distinta semántica (distinto orden de evaluación, distinto código generado). Por eso los lenguajes de programación **no adoptan gramáticas ambiguas** para su núcleo expresivo: reescriben producciones introduciendo niveles \\(E\\), \\(T\\), \\(F\\) o declaran precedencias y asociatividad en la especificación del parser.\n\n**Técnicas habituales para desambiguar expresiones**\n\n1. **Factorización por precedencia**: un no terminal por nivel de prioridad.\n2. **Asociatividad**: para `+` asociativo a izquierda, evita producciones como \\(E \\rightarrow T + E\\) si quieres evaluar de izquierda a derecha; la forma \\(E \\rightarrow E + T\\) fuerza que el siguiente operando quede a la derecha en el árbol.\n3. **Precedencia declarada** (en generadores de parsers): reglas numéricas en Yacc/Bison sin cambiar la CFG manualmente.\n\n### Gramáticas para estructuras de programa\n\nMás allá de expresiones, las CFG modelan:\n\n- **Listas**: \\(StmtList \\rightarrow Stmt \\ StmtList \\mid \\epsilon\\)\n- **Condicionales**: \\(Stmt \\rightarrow \\textbf{if}\\ (Expr)\\ Stmt \\mid \\textbf{if}\\ (Expr)\\ Stmt\\ \\textbf{else}\\ Stmt\\)\n- **Bloques balanceados**: \\(S \\rightarrow SS \\mid (S) \\mid \\epsilon\\) genera paréntesis balanceados; es LLC y no regular.\n\nCada construcción anidada refleja un subárbol en el parse tree, que luego el análisis semántico recorrerá para construir el AST (simplificando nodos de «ruido» gramatical).\n\n### Relación con autómatas de pila (adelanto)\n\nTeorema fundamental (estudiaremos en detalle en el módulo 7): **un lenguaje es libre de contexto si y solo si es aceptado por algún autómata de pila (PDA)**. La CFG da una **generadora** (construye cadenas); el PDA da un **reconocedor** (verifica pertenencia). En compiladores, casi siempre diseñamos gramática + parser descendente o LR en lugar de simular el PDA directamente, pero la equivalencia explica por qué anidar paréntesis requiere «memoria» (pila) y no basta un DFA.\n\n### Ejemplo extendido: paréntesis balanceados\n\nConsidere \\(G\\) con \\(S \\rightarrow SS \\mid (S) \\mid \\epsilon\\), lenguaje de paréntesis balanceados sobre un solo par de delimitadores. Para la cadena `(()())` una derivación leftmost podría ser:\n\n1. \\(S \\Rightarrow (S)\\)\n2. \\((S) \\Rightarrow (SS)\\)\n3. \\((SS) \\Rightarrow ((S)S)\\)\n4. \\(((S)S) \\Rightarrow (()S)\\)\n5. \\(()S) \\Rightarrow (() (S))\\)\n6. \\((() (S)) \\Rightarrow (() ())\\)\n\nCada paso elige un \\(S\\) a expandir; el árbol resultante tiene raíz \\(S\\) con dos hijos \\(S\\) en el nivel superior interior del paréntesis externo, mostrando cómo la concatenación \\(SS\\) modela palabras balanceadas una al lado de la otra. Este lenguaje ya no es regular: el lema del bombeo para regulares falla al intentar «recordar» cuántos `(` faltan cerrar. La CFG lo expresa naturalmente; el PDA lo reconoce empujando y sacando de la pila.\n\n### Producciones \\(\\epsilon\\) y limpieza de gramáticas\n\nMuchas gramáticas incluyen \\(A \\rightarrow \\epsilon\\) para listas vacías (declaraciones opcionales, argumentos vacíos). Una cadena sentencial que contiene solo no terminales puede derivar \\(\\epsilon\\) si hay una cadena de \\(\\epsilon\\)-producciones. En compiladores, las listas se modelan como \\(List \\rightarrow Item\\ List \\mid \\epsilon\\). Al eliminar \\(\\epsilon\\)-producciones y producciones unitarias (\\(A \\rightarrow B\\)) antes de convertir a Forma Normal de Chomsky (módulo 7), se evitan pasos redundantes en algoritmos automáticos de parsing. La limpieza **no cambia** el lenguaje generado (salvo el caso especial de si el axioma deriva \\(\\epsilon\\)).\n\n### Tabla comparativa: regular vs libre de contexto\n\n| Pregunta | Lenguaje regular | LLC |\n|----------|------------------|-----|\n| ¿Memoria finita suficiente? | Sí (DFA/NFA) | No; hace falta pila para contar/anidar |\n| ¿Ejemplo típico? | identificadores, números sin contexto | expresiones anidadas, paréntesis |\n| ¿Forma de regla? | A → uA v o restricciones (tipo 3) | A → α con un solo no terminal a la izquierda |\n| ¿Uso en compilador? | Lexer | Parser sintáctico |\n\nMemorizar esta tabla evita errores frecuentes en exámenes donde piden un DFA para un lenguaje LLC.\n\n### Gramáticas para listas y sentencias (fragmento de lenguaje imperativo)\n\n```\nProgram → StmtList\nStmtList → Stmt StmtList | ε\nStmt → id = Expr ; | if (Expr) Stmt | if (Expr) Stmt else Stmt | { StmtList }\nExpr → Expr + Term | Term\nTerm → id | num | (Expr)\n```\n\nCada regla « StmtList → Stmt StmtList » encadena sentencias; \\(\\epsilon\\) permite bloque vacío (en lenguajes que lo permiten). El árbol de `a=1; b=2;` es profundo a la izquierda en la lista, típico de derivaciones leftmost para sentencias secuenciales.\n\n### Eliminación de ambigüedad del «dangling else»\n\nEn la gramática ingenua `Stmt → if (E) Stmt | if (E) Stmt else Stmt`, la cadena `if (E1) if (E2) S else S'` admite un árbol donde el `else` enlaza al `if` interno y otro donde enlaza al externo. Solución clásica: duplicar producciones con `StmtNoElse` vs `Stmt` completo, forzando que `else` solo aparezca cuando el `if` interno no lo absorbe ilegítimamente.\n\n### Predicados y gramáticas atribuidas (puente a semántica)\n\nAlgunas restricciones «declarar antes de usar» **no** son CFG puras: requieren atributos semánticos o símbolos de tabla durante parsing. Parser LR resuelve mucha sintaxis; el analizador semántico del módulo 12 cierra huecos que CFG sola no expresa.\n\n## Demostración enlazada al código del módulo\n\nEl snippet del módulo define `GramaticaExpresiones`, un validador **lineal** sobre una lista de tokens que alterna «número – operador – número – operador – …». Aunque el comentario menciona \\(E \\rightarrow E + T\\), la implementación **no construye un árbol**: solo verifica que la secuencia tenga la forma regular \\(num\\ (op\\ num)^*\\) con `op` en `{+, *}`.\n\nLínea por línea:\n\n- `expect_num = True` codifica que el siguiente token debe ser un número (estado de una máquina de estados finita sobre tokens).\n- Si llega un dígito cuando se espera número, consume y pasa a esperar operador.\n- Si llega `+` o `*` cuando se espera operador, vuelve a esperar número.\n- Cualquier desviación retorna `False`.\n- Al final, `return not expect_num` exige terminar justo después de un número (no colgar en «espero operador»).\n\n**Limitación pedagógica útil**: `'5 + 3 * 2'` pasa la validación, pero el código **no distingue** si la multiplicación agrupa antes que la suma; para eso necesitarías el parser con gramática no ambigua o un árbol. El salto del módulo 6 al 11 es precisamente pasar de este chequeo superficial al AST con precedencia correcta.\n\nPrueba mental: tokeniza `'5 + + 3'` como `['5', '+', '+', '3']`. El bucle ve el segundo `+` cuando `expect_num` sigue siendo `True` (porque tras el primer `+` esperábamos número, no otro operador) y devuelve `False`. Ese comportamiento coincide con un rechazo sintáctico temprano, aunque un mensaje de error de producción reportaría la posición del token inesperado. Extender el snippet a un árbol sería el siguiente refactor: cada vez que consumes un `num`, creas un nodo hoja; cada operador binario une dos subárboles ya construidos según la gramática no ambigua.\n\n## Aplicaciones en sistemas reales\n\n**Clang / LLVM para C++**: la gramática del frontend de Clang (derivada de la especificación del lenguaje) usa cientos de producciones; ambigüedades históricas (p.ej. «most vexing parse») se resuelven con reglas de disambiguación en el parser, no dejando al árbol elegir al azar.\n\n**ANTLR en servicios de API**: muchas empresas generan parsers ANTLR a partir de una `.g4` CFG para lenguajes de consulta internos (DSL de métricas, filtros de logs). Un error de ambigüedad en la gramática se detecta al generar el parser; si pasa, el lexer/parser puede producir árboles incorrectos en producción.\n\n**JSON (RFC 8259)**: aunque JSON no es un lenguaje de programación completo, su sintaxis de objetos y arreglos anidados es LLC; parsers como los de `serde_json` (Rust) o `encoding/json` (Go) implementan reconocimiento equivalente a una CFG con pila implícita para validar balanceo de `{` y `[`.\n\n## Errores clásicos en examen\n\n- Confundir **\\(V\\)** (no terminales) con **\\(\\Sigma\\)** (terminales) al escribir \\(G = (V, \\Sigma, R, S)\\).\n- Creer que «libre de contexto» significa que no importa el contexto del programa (scope, tipos); eso es **semántica**, no la definición formal de CFG.\n- Afirmar que toda derivación leftmost es única: es única **solo si la gramática es no ambigua** para esa cadena.\n- Mostrar un árbol donde los hijos de un nodo no coinciden con ninguna producción \\(A \\rightarrow X_1 \\ldots X_k\\).\n- Intentar demostrar ambigüedad exhibiendo **una** derivación distinta sin construir **dos árboles** (o dos leftmost) que produzcan la **misma** cadena terminal.\n\n## Preguntas de entrevista\n\n**P: ¿Por qué la gramática \\(E \\rightarrow E + E \\mid E * E \\mid \\textbf{id}\\) es ambigua y cómo la arreglarías?**\n\n**R:** Es ambigua porque una cadena como `id + id * id` admite al menos dos árboles: uno agrupa la suma antes que el producto y otro al revés. Se arregla introduciendo niveles de precedencia, por ejemplo \\(E \\rightarrow E + T \\mid T\\), \\(T \\rightarrow T * F \\mid F\\), \\(F \\rightarrow (\\textbf{id}) \\mid \\textbf{id}\\), de modo que `*` siempre quede más bajo que `+` en el árbol.\n\n**P: ¿Cuál es la diferencia entre un árbol de derivación y un AST?**\n\n**R:** El árbol de derivación refleja **todas** las expansiones gramaticales (incluye nodos auxiliares como reglas de lista vacía o niveles \\(T, F\\)). El AST es una vista **abstracta** del programa: elimina nodos redundantes y conserva la estructura semántica (operadores, declaraciones, bloques). El parser suele construir primero un concrete syntax tree y luego lo simplifica a AST.\n\n## Síntesis y checklist antes de avanzar\n\n- Puedo escribir \\(G = (V, \\Sigma, R, S)\\) para una mini-gramática de expresiones o de paréntesis balanceados.\n- Realicé al menos una derivación leftmost completa hasta terminales.\n- Dibujé un parse tree y leí la cadena en las hojas de izquierda a derecha.\n- Expliqué ambigüedad con el ejemplo `id + id * id` y la solución por precedencia.\n- Entiendo que el snippet del módulo valida forma tokenizada pero **no** resuelve precedencia.\n- Estoy listo para el módulo 7: PDA, CNF y algoritmo CYK como reconocimiento de LLC.",
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
          question: "Una CFG G = (V, Σ, P, S) genera cadenas en:",
          options: ["(V ∪ Σ)* restringidas a terminales en L(G)",
          "Solo Σ",
          "Solo V",
          "ε únicamente"],
          answerIndex: 0,
          explanation: "Derivaciones mezclan no terminales hasta emitir solo terminales."
        },
        {
          question: "Derivación leftmost expande:",
          options: ["El no terminal más a la izquierda en cada paso",
          "El más a la derecha",
          "Todos a la vez",
          "Solo terminales"],
          answerIndex: 0,
          explanation: "Convención útil para parsers predictivos."
        },
        {
          question: "Gramática E → E + E | E * E | id es:",
          options: ["Ambigua para id + id * id",
          "No ambigua",
          "Regular",
          "Tipo 0 solamente"],
          answerIndex: 0,
          explanation: "Dos árboles (asociatividad distinta) para la misma cadena."
        },
        {
          question: "Eliminar ambigüedad en expresiones suele usar:",
          options: ["Capas de precedencia (term/factor) o precedencias declaradas",
          "Solo más terminales",
          "Convertir a DFA",
          "ε-producciones únicamente"],
          answerIndex: 0,
          explanation: "Refuerza estructura jerárquica de operadores."
        },
        {
          question: "El lexer entrega tokens; la CFG del parser usa:",
          options: ["Símbolos terminales que son clases de token",
          "Caracteres ASCII individuales siempre",
          "Solo números",
          "Estados del DFA directamente"],
          answerIndex: 0,
          explanation: "Nivel de abstracción tras análisis léxico."
        },
        {
          question: "Producción S → aSb | ε genera:",
          options: ["{aⁿbⁿ | n ≥ 0}",
          "{aⁿbⁿbⁿ}",
          "Regular con n≤3",
          "L vacío"],
          answerIndex: 0,
          explanation: "Cada paso añade un par a…b alrededor."
        },
        {
          question: "Árbol de derivación distinto del AST porque:",
          options: ["El AST contrae nodos sintácticos y pierde símbolos intermedios",
          "Son idénticos siempre",
          "El AST incluye tokens de caracteres",
          "La derivación es LR únicamente"],
          answerIndex: 0,
          explanation: "AST es vista abstracta para análisis posterior."
        },
        {
          question: "Depura: parser reduce pero semántica falla tipos. Causa probable:",
          options: ["Gramática acepta sintaxis inválida semánticamente",
          "CFG mal definida",
          "Lexer no corre",
          "CYK en vez de LL"],
          answerIndex: 0,
          explanation: "Sintaxis correcta no implica semántica; ver siguiente fase."
        },
        {
          question: "Recursión izquierda A → Aα | β dificulta:",
          options: ["Parsers LL(1) sin transformación",
          "Parsers LR",
          "Generación ε",
          "Tokens NUM"],
          answerIndex: 0,
          explanation: "Descenso recursivo predictivo necesita eliminarla o usar LR."
        },
        {
          question: "L(G) = ∅ ocurre si:",
          options: ["Ningún no terminal deriva cadena de terminales",
          "S tiene producción ε",
          "Σ es infinito",
          "Hay ambigüedad"],
          answerIndex: 0,
          explanation: "Sin derivaciones terminantes el lenguaje es vacío."
        }
      ],
      exercises: [
        {
          id: 6501,
          instruction: "Escribe una CFG en notación textual (E→E+T|T, etc.) para expresiones con + y * sin ambigüedad. Deriva leftmost la cadena 'id+id*id'.",
          placeholder: "E -> ...",
          expectedKeywords: ["E", "T", "->", "derivacion"],
          hint: "Tres niveles E, T, F como en el módulo.",
          isEmailSubmission: false
        },
        {
          id: 6502,
          instruction: "DESAFÍO: Diseña gramática para if-else con ambigüedad del dangling else y propón una gramática no ambigua (statement/ matched / unmatched).",
          placeholder: "Stmt -> ...",
          expectedKeywords: ["if", "else", "ambig", "gram"],
          hint: "Separa statement matched vs unmatched.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 7,
      title: "MÓDULO 7: AUTÓMATAS DE PILA (PDA) Y FORMAS NORMALES",
      description: "Reconocimiento de lenguajes libres de contexto usando memoria LIFO y Formas Normales de Chomsky.",
      items: [
      "PDA como 7-tupla con pila Γ; transición depende de tope y símbolo de entrada (o ε).",
      "Aceptación por pila vacía o estado final; L libre de contexto = L aceptado por PDA.",
      "Correspondencia CFG ↔ PDA: simular derivaciones con símbolos en la pila.",
      "Forma normal de Chomsky (CNF): A → BC o A → a; longitud derivación acotada.",
      "Algoritmo CYK en O(n³|G|): tabla booleana por subcadenas w[i..j].",
      "L = {aⁿbⁿcⁿ} no CF; separación de capacidades respecto a regulares.",
      "PDA determinista vs no determinista: subfamilia estricta en algunos lenguajes.",
      "Uso de pila en parsers shift-reduce para emparejar delimitadores anidados.",
      "Limitaciones CYK: útil teórico; LL/LR dominan en compiladores por eficiencia lineal."
],
      content: "## Panorama del tema: AUTÓMATAS DE PILA (PDA), FORMA NORMAL DE CHOMSKY, CYK Y \\(a^n b^n\\)\n\nLos lenguajes libres de contexto ganan **memoria acotada pero no finita en el sentido de contador ilimitado**: un autómata finito solo recuerda en qué estado está; un **autómata de pila** (PDA) recuerda una secuencia en estructura **LIFO** (último en entrar, primero en salir). Esa pila es exactamente lo que permite reconocer \\(L = \\{a^n b^n \\mid n \\ge 0\\}\\): por cada `a` leída se hace **push**; por cada `b`, **pop**; aceptar solo si al terminar la entrada la pila queda vacía.\n\nEn este módulo formalizamos el PDA como tupla de siete componentes, establecemos la equivalencia **CFG \\(\\equiv\\) PDA \\(\\equiv\\) LLC**, normalizamos gramáticas a la **Forma Normal de Chomsky (CNF)** para algoritmos mecánicos, y ejecutamos el **algoritmo CYK** de reconocimiento en \\(O(n^3)\\). El laboratorio del curso y muchos exámenes vuelven una y otra vez al ejemplo \\(a^n b^n\\) porque condensa toda la intuición de pila en cinco líneas de código.\n\n## Objetivos de la lección\n\n- Definir un PDA (determinista o no determinista) y sus operaciones push, pop y lectura del tope.\n- Construir un PDA que acepte \\(a^n b^n\\) y contrastarlo con la imposibilidad de un DFA equivalente.\n- Enunciar y usar la equivalencia entre gramáticas LLC y PDA.\n- Transformar una CFG pequeña a CNF siguiendo pasos estándar.\n- Aplicar el algoritmo CYK para decidir pertenencia de una cadena a \\(L(G)\\) en CNF.\n\n## Desarrollo de la lección\n\n### Definición formal del PDA\n\nUn **autómata de pila** (PDA) es una tupla\n\\(M = (Q, \\Sigma, \\Gamma, \\delta, q_0, Z_0, F)\\):\n\n- \\(Q\\): estados finitos.\n- \\(\\Sigma\\): alfabeto de **entrada**.\n- \\(\\Gamma\\): alfabeto de **pila** (símbolos que se apilan).\n- \\(\\delta\\): función de transición (en el PDA **no determinista** habitual, \\(\\delta: Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\times \\Gamma \\rightarrow \\mathcal{P}(Q \\times \\Gamma^*)\\)): dado estado, símbolo de entrada (o \\(\\epsilon\\)) y símbolo leído del tope, devuelve un **conjunto** de posibles muevos, cada uno con nuevo estado y cadena a reemplazar en el tope (puede ser vacía = pop múltiple, o varios símbolos = push).\n- \\(q_0 \\in Q\\): estado inicial.\n- \\(Z_0 \\in \\Gamma\\): símbolo **fondo de pila** (marcador inicial).\n- \\(F \\subseteq Q\\): estados de aceptación.\n\n**Aceptación** (criterio habitual en teoría): la máquina acepta si, tras consumir toda la entrada, está en un estado de \\(F\\) **y** la pila cumple la condición de aceptación del modelo (por stack vacío excepto \\(Z_0\\), o solo estado final, según la definición del curso; el snippet del módulo usa «pila vacía lógica» equivalente a contar emparejamientos).\n\nEl PDA **no determinista** es más expresivo que el PDA determinista en general; para LLC basta el ND-PDA, análogo a que NFA y DFA son equivalentes en regulares.\n\n### Pila LIFO: push, pop, top\n\nOperaciones conceptuales:\n\n- **Push(\\(\\gamma\\))**: insertar cadena \\(\\gamma\\) sobre el tope (símbolo a símbolo o bloque según la transición).\n- **Pop / Top**: leer el tope para elegir transición; consumir según la transición.\n- La pila nunca se «olvidó» del medio: solo acceso al tope; por eso modela anidamiento, no colas (\\(a^n b^n c^n\\) requiere más poder — Turing).\n\n### PDA para \\(a^n b^n\\) paso a paso\n\nPara \\(w = aabb\\):\n\n| Paso | Entrada restante | Pila (abajo \\(\\rightarrow\\) arriba) | Acción |\n|------|------------------|-------------------------------------|--------|\n| 1 | `aabb` | \\(Z_0\\) | leer `a`, push marcador |\n| 2 | `abb` | \\(A, Z_0\\) | push por cada `a` (simplificación del snippet: un `A` por `a`) |\n| … | | tres `A` tras tres `a` | |\n| lectura `b` | | pop un `A` por cada `b` | |\n| fin | \\(\\epsilon\\) | solo \\(Z_0\\) o vacía según convención | **aceptar** si iguales |\n\nSi \\(w = aaabb\\) (desbalance), tras leer las tres `b` la pila aún tiene `A`: **rechazar**. Si \\(w = ababa\\), al encontrar `b` con pila vacía prematuramente, rechazar.\n\nLa función Python del módulo implementa esta **estrategia en dos fases**: primero solo `a` con pushes, luego solo `b` con pops, sin mezclar alfabetos en medio — válido para este lenguaje particular, aunque un PDA formal tendría estados explícitos \\(q_a, q_b, q_{acept}\\).\n\n### Equivalencia CFG \\(\\leftrightarrow\\) PDA\n\n**Teorema (esquemático)**: \\(L\\) es LLC \\(\\Leftrightarrow\\) existe gramática \\(G\\) con \\(L(G)=L\\) \\(\\Leftrightarrow\\) existe PDA que acepta \\(L\\).\n\n- **CFG \\(\\rightarrow\\) PDA**: construcción estándar que simula derivaciones leftmost usando la pila para guardar el prefijo de la derivación pendiente (los no terminales por expandir).\n- **PDA \\(\\rightarrow\\) CFG**: triangula configuraciones (estado, tope de pila, altura) en variables de gramática; es más técnica y aparece en demostraciones de cursos teóricos.\n\nEn ingeniería de compiladores rara vez compilamos PDA a CFG; vamos de especificación en BNF a parser LL/LR. La equivalencia explica **por qué** LR parsers usan una pila explícita de estados.\n\n### Forma Normal de Chomsky (CNF)\n\nUna CFG está en **CNF** si toda regla es de una de dos formas:\n\n1. \\(A \\rightarrow BC\\) con \\(A, B, C\\) no terminales.\n2. \\(A \\rightarrow a\\) con \\(a\\) terminal.\n\nOpcionalmente se permite \\(S \\rightarrow \\epsilon\\) si \\(\\epsilon \\in L(G)\\), con restricciones para que \\(S\\) no aparezca en cuerpos.\n\n**Algoritmo de conversión (resumen operativo)**:\n\n1. Eliminar producciones \\(\\epsilon\\) (excepto posiblemente \\(S \\rightarrow \\epsilon\\)).\n2. Eliminar producciones unitarias \\(A \\rightarrow B\\).\n3. Agregar variables «alias» para cadenas mixtas de longitud \\(>2\\) en lados derechos (alfabetización de Chomsky).\n4. Descomponer cuerpos \\(A \\rightarrow X_1 X_2 \\ldots X_k\\) en cadenas de binarios.\n\n**Ejemplo mini**: de \\(S \\rightarrow aSb \\mid ab\\) (genera \\(a^n b^n\\) en forma alternativa) a CNF requiere variables intermedias para encadenar terminales y no terminales; el resultado aumenta \\(|V|\\) pero simplifica CYK.\n\n### Algoritmo CYK (Cocke–Younger–Kasami)\n\nDado \\(G\\) en CNF y cadena \\(w = a_1 a_2 \\ldots a_n\\):\n\n1. Construir tabla \\(P[i,j]\\): conjunto de no terminales que derivan la subcadena \\(a_i \\ldots a_j\\).\n2. **Base**: \\(P[i,i] = \\{A \\mid A \\rightarrow a_i\\}\\).\n3. **Inducción** en longitud \\(L = 2 \\ldots n\\): para cada partición \\(i \\le k < j\\), si \\(B \\in P[i,k]\\) y \\(C \\in P[k+1,j]\\) y existe \\(A \\rightarrow BC\\), entonces \\(A \\in P[i,j]\\).\n4. \\(w \\in L(G)\\) iff \\(S \\in P[1,n]\\).\n\n**Ejemplo** \\(w = ba\\) con reglas mínimas: si no hay \\(B \\rightarrow b\\) y \\(C \\rightarrow a\\) enlazados por algún \\(A \\rightarrow BC\\), la celda final no contiene \\(S\\).\n\nComplejidad: \\(O(n^3 \\cdot |G|)\\) — útil en teoría y en NLP para gramáticas pequeñas; no escala a gramáticas completas de C++.\n\n### Greibach (GNF) — mención útil\n\nLa **Forma Normal de Greibach** exige \\(A \\rightarrow a\\alpha\\) con \\(a\\) terminal al inicio. Facilita parsers top-down sin backtracking en algunos casos. CYK usa CNF; LL parsers prefieren gramáticas cerca de LL(1), no necesariamente GNF.\n\n### PDA formal para \\(a^n b^n\\) con estados explícitos\n\nEstados \\(q_0\\) (lectura `a`), \\(q_1\\) (lectura `b`), \\(q_{acept}\\). Transiciones: en \\(q_0\\) con `a`, push \\(Z\\) y permanecer en \\(q_0\\); al leer primera `b` pasar a \\(q_1\\); en \\(q_1\\) con `b`, pop si tope coincide; al fin de cadena, aceptar si pila vacía y estado aceptación. Cualquier `b` en \\(q_0\\) o `a` en \\(q_1\\) rechaza. Esta máquina clarifica lo que el snippet Python colapsa en dos bucles `while`.\n\n### Conversión CFG \\(\\rightarrow\\) CNF: micro-ejercicio\n\nPartir de \\(S \\rightarrow aSb \\mid ab\\). Introducir variables para terminales en producciones mezcladas: \\(T_a \\rightarrow a\\), \\(T_b \\rightarrow b\\), reescribir \\(S \\rightarrow T_a S T_b \\mid T_a T_b\\), luego binarizar lados derechos largos con variables auxiliares \\(U_1\\). El tamaño de gramática crece \\(O(n^2)\\) en el peor caso pero CYK solo depende de reglas binarias y terminales unitarios.\n\n### Complejidad y relevancia de CYK\n\n\\(O(n^3 |G|)\\) hace inviable CYK para gramática completa de Java, pero pedagogía y reconocimiento de **toy languages** en investigación sí lo usan. Además, demuestra que pertenencia a LLC es **decidible** (a diferencia de equivalencia de CFG, indecidible).\n\n### Cierre de lenguajes LLC (propiedades útiles en examen)\n\nLos LLC son cerrados bajo unión, concatenación, Kleene star, homomorfismo, intersección con regulares — pero **no** bajo intersección general ni complemento (de ahí la diferencia con regulares). Citar estas propiedades justifica construcciones en compiladores (p. ej. filtrar tokens reservados intersecando con autómata regular).\n\n## Demostración enlazada al código del módulo\n\nLa función `pda_reconocer_an_bn(cadena)` implementa reconocimiento por **contador en lista Python** (pila simulada):\n\n- Fase 1: mientras el carácter es `a`, `pila.append('A')` y avanza el índice.\n- Fase 2: mientras es `b`, si la pila está vacía retorna `False` (falta de `a` previa); si no, `pop()`.\n- Acepta si el índice llegó al final **y** la pila quedó vacía (`len(pila)==0`).\n\nCasos de prueba del snippet: `'aaaabbbb'` tiene cuatro `a` y cuatro `b`: acepta. `'aaabb'` tiene tres `b` pero solo dos `a` en la fase de pops: tras dos `b` la pila ya está vacía; el tercer `b` encuentra pila vacía \\(\\rightarrow\\) `False`.\n\n**Diferencia con PDA formal**: no hay estados \\(Q\\) ni símbolo \\(Z_0\\); no rechaza cadenas con `b` antes de `a` en la fase 1 (p. ej. `baab`) porque la fase 1 solo consume `a` y la fase 2 solo `b` — si queda `ba` después de fase 1 con pila vacía, fase 2 no consume nada y el índice no llega al final: rechaza correctamente.\n\n## Aplicaciones en sistemas reales\n\n**Parsers LR en GCC/Clang**: la pila de estados del parser LR es un PDA determinista especializado; cada shift empuja un estado, cada reduce hace pop y empuja un no terminal según la gramática.\n\n**Validación de XML/HTML**: documentos bien formados requieren etiquetas balanceadas anidadas; compiladores SAX y validadores internos usan pilas de etiquetas abiertas — mismo patrón que \\(a^n b^n\\) generalizado a nombres de etiquetas.\n\n**Análisis de expresiones en hojas de cálculo**: Excel y Google Sheets convierten fórmulas a AST usando pilas de operadores y operandos (algoritmo shunting-yard, Dijkstra); la pila es el mismo concepto operacional del PDA, aunque el algoritmo sea determinista por precedencia.\n\n## Errores clásicos en examen\n\n- Afirmar que todo PDA es determinista: el modelo estándar para LLC es **no determinista**.\n- Confundir CYK con parsing LL: CYK es reconocimiento en CNF, no genera AST en tiempo lineal de compiladores.\n- Olvidar la condición \\(|y| \\ge 1\\) al relacionar con lema del bombeo para LLC (módulo teórico avanzado).\n- Creer que \\(a^n b^n c^n\\) es LLC: es tipo 1 / sensible al contexto, no alcanzable con una sola pila.\n- En conversión a CNF, dejar producciones \\(A \\rightarrow aBC\\) sin descomponer.\n\n## Preguntas de entrevista\n\n**P: Explica por qué \\(a^n b^n\\) requiere pila y no DFA.**\n\n**R:** Un DFA tiene estados fijos. Para verificar que el número de `a` iguala al de `b` necesitaría, en el peor caso, un estado distinto por cada posible contador hasta \\(n\\), y \\(n\\) no está acotado. La pila almacena un símbolo por cada `a` leída antes de emparejar con `b`, dando memoria proporcional a la entrada en una sola pasada.\n\n**P: ¿Para qué sirve la CNF en la práctica?**\n\n**R:** Principalmente para el algoritmo CYK y demostraciones de que LLC son cerrados bajo unión, concatenación y estrella. Los compiladores de producción raramente mantienen la gramática completa en CNF; la conversión es herramienta teórica y base de ejercicios de pertenencia.\n\n\n### Ejemplo CYK completo en miniatura\n\nConsidere CNF con \\(S \n\\rightarrow CB\\), \\(C \n\\rightarrow a\\), \\(B \n\\rightarrow b\\), además de \\(S \n\\rightarrow AD\\), \\(A \n\\rightarrow a\\), \\(D \n\\rightarrow b\\) según las reglas disponibles para la cadena `aab` — el alumno debe numerar cada celda \\(P[i,j]\\). Para la cadena `aba` de longitud 3, la base rellena \\(P[1,1]\\) con variables que derivan `a`, \\(P[2,2]\\) con las de `b`, \\(P[3,3]\\) con las de `a`. Para longitud 2, la partición única une \\(P[1,1]\\) y \\(P[2,2]\\): si existe regla \\(X \n\\rightarrow YZ\\) con \\(Y\\) en la primera celda y \\(Z\\) en la segunda, añadimos \\(X\\) a \\(P[1,2]\\). Repetimos para \\(P[2,3]\\). Para longitud 3 probamos cortes \\(k=1\\) y \\(k=2\\): \\(P[1,3]\\) recibe \\(S\\) solo si alguna producción binaria enlaza contenidos de \\(P[1,1]\\) con \\(P[2,3]\\) o \\(P[1,2]\\) con \\(P[3,3]\\). Este trazo manual en examen vale más que memorizar la fórmula.\n\nLa tabla triangular inferior visualiza subproblemas compartidos — la esencia de programación dinámica. Implementar CYK en Python para gramáticas de menos de diez reglas es un excelente ejercicio de laboratorio posterior al snippet del PDA.\n\n### PDA no determinista y elección de ramas\n\nCuando \\(\\delta\\) devuelve varias transiciones, el PDA **adivina** correctamente si alguna rama lleva a aceptación (aceptación por existencia de computación aceptadora). El reconocimiento de LLC necesita ese no determinismo en el modelo general; lenguajes como palabras de la forma \\(ww^R\\) (palíndromo batido) ilustran alternancia de adivinanzas de longitud. En contraste, el snippet de \\(a^n b^n\\) es tan restrictivo que una única estrategia determinista basta.\n\n### De producciones a acciones de pila (visión constructiva)\n\nPara convertir CFG a PDA: al empezar, push \\(S\\) en la pila. Repetidamente, si el tope es no terminal \\(A\\), sustituirlo por el lado derecho de alguna producción \\(A \n\\rightarrow X_1\\ldots X_k\\) (push en orden invertido para que \\(X_1\\) quede arriba). Si el tope es terminal y coincide con el símbolo de entrada actual, pop y avanzar lectura. Aceptación cuando entrada vacía y pila vacía (modo común). Seguir este algoritmo a mano en una gramática de tres reglas fija la equivalencia mejor que memorizar el teorema.\n\n### Lema del bombeo para LLC (conexión)\n\nSi un estudiante pretende demostrar que \\(L = \\{a^n b^n c^n\\}\\) es LLC, el lema del bombeo para LLC produce contradicción (bombeo en zonas de una sola letra rompe balance triple). Saber que \\(a^n b^n\\) **sí** es LLC pero \\(a^n b^n c^n\\) **no** separa el poder del módulo 7 del módulo 8 en la jerarquía.\n\n## Guía de repaso extendida\n\nRepasa en papel una conversión parcial a CNF de la gramática \\(S \\rightarrow S+S \\mid a\\): no es la forma final, pero sirve para contar cuántas variables auxiliares aparecen al eliminar largos lados derechos. Luego escribe la tabla CYK vacía (triangular) para la cadena `aa` antes de llenar celdas; si un examen pide pertenencia manual, la estructura visual evita olvidar particiones.\n\nCompara el reconocedor Python con la definición de PDA por estados: ¿en qué entrada fallan ambos de la misma forma? Prueba `abba` y verbaliza el rechazo. Conecta con el módulo 5: el lema del bombeo para regulares ya explicaba por qué un DFA no cuenta; aquí la pila **sí** cuenta.\n\nPor último, lee la equivalencia CFG–PDA como bi-conditional: para demostrar que un lenguaje es LLC, basta exhibir **gramática** o **PDA** — en práctica de curso casi siempre la gramática.\n\n## Estudio dirigido: PDA, CNF y pertenencia\n\nTrabaja con la gramática \\(G\\): \\(S \n\\rightarrow aSb \\mid ab\\). Verifica que \\(L(G)=\\{a^n b^n \\mid n\\ge1\\}\\). Intenta convertir mentalmente a PDA: cada \\(a\\) empuja, cada \\(b\\) desempila. Luego imagina conversión a CNF: aparecerán variables como \\(V_{a}\n\\rightarrow a\\) y encadenamientos binarios. El algoritmo CYK sobre \\(w=aaabbb\\) en CNF te obliga a considerar cada corte de subcadenas; dedica quince minutos a rellenar la mitad inferior de la tabla sin mirar solución.\n\nContrast \\(a^n b^n\\) con \\(a^*b^*\\) (regular). El segundo solo pide «algunas a seguidas de algunas b» sin igualdad; un DFA con dos fases lineales basta. Muchos exámenes mezclan ambos lenguajes en opciones múltiples para detectar confusión. El PDA no determinista para palíndromos \\(w w^R\\) requiere adivinar la mitad con transiciones \\(\\epsilon\\); es buen ejercicio teórico posterior al reconocedor determinista de \\(a^n b^n\\).\n\nEn ingeniería, la pila del parser LR **no** implementa CYK: reconoce en tiempo lineal gramáticas LALR. CYK enseña decidibilidad de pertenencia LLC, no cómo compiladores industriales parsean Java. Guarda esa distinción: misma clase de lenguajes, algoritmos distintos según objetivo (decisión general vs parser eficiente para una gramática fija).\n\nEl snippet Python codifica la estrategia de dos fases sin estados explícitos. En defensa oral del laboratorio, dibuja estados \\(q_0,q_1,q_{acc}\\) y muestra que el comportamiento coincide. Si el profesor pregunta por \\(a^n b^n c^m\\), argumenta que con una pila no puedes verificar tres contadores simultáneos.\n\nFinalmente, enlaza con módulo 6: la misma cadena balanceada admitía árbol de derivación con producciones \\(S\n\\rightarrow aSb\\). CFG genera, PDA reconoce. La equivalencia es el puente entre sintaxis declarativa y autómata operacional.\n\n## Escenarios de fallo comunes en simulaciones\n\nEntrada `ab`: una `a`, una `b`, acepta. Entrada `bab`: la fase de `a` no consume nada si el primer carácter es `b` — en el snippet, fase 2 no consume y el índice no avanza al final; rechazo correcto. Entrada `aaab`: después de procesar `b` faltantes, pila no vacía; rechazo. Documenta tres casos en tu cuaderno con la traza de la pila como columna de símbolos.\n\nPara CYK, el error típico es olvidar que solo producciones \\(A\n\\rightarrow BC\\) y \\(A\n\\rightarrow a\\) participan: si queda \\(A\n\\rightarrow aB\\) sin convertir, la tabla se llena mal. Al transformar a CNF, conserva un diccionario de reglas original→normalizadas para no perderte.\n\n## Síntesis y checklist antes de avanzar\n\n- Escribí la tupla del PDA y expliqué push/pop en \\(a^n b^n\\).\n- Ejecuté el snippet y predije el resultado para cadenas desbalanceadas.\n- Describí los pasos de conversión a CNF y una fila de la tabla CYK.\n- Distinguí PDA de máquina de Turing (módulo 8).\n- Completé la conexión CFG–PDA–LLC sin confundir con lenguajes regulares.",
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
          question: "Un PDA lee entrada y manipula:",
          options: ["Una pila LIFO de símbolos de Γ",
          "Dos cintas",
          "Solo contador modulo k",
          "Registro único"],
          answerIndex: 0,
          explanation: "Memoria adicional estructurada como pila."
        },
        {
          question: "L libre de contexto coincide con lenguajes aceptados por:",
          options: ["Algún PDA (modo estándar del curso)",
          "Solo DFA",
          "Solo MT deterministas",
          "Regex"],
          answerIndex: 0,
          explanation: "Teorema central CFG ↔ PDA."
        },
        {
          question: "En CNF, las producciones permitidas son:",
          options: ["A → BC o A → a con a terminal",
          "A → ε sin restricción",
          "A → w con |w|>2",
          "Solo ε"],
          answerIndex: 0,
          explanation: "Forma binaria o terminal única."
        },
        {
          question: "CYK decide w ∈ L(G) en tiempo:",
          options: ["O(n³ · |G|) para |w|=n",
          "O(n)",
          "Exponencial siempre",
          "O(log n)"],
          answerIndex: 0,
          explanation: "Programación dinámica sobre subcadenas."
        },
        {
          question: "Para w = 'aabb', tabla CYK en celda (1,4) indica:",
          options: ["Si el substring completo es generable desde algún no terminal",
          "Solo el primer símbolo",
          "Longitud 0",
          "Error léxico"],
          answerIndex: 0,
          explanation: "Celda agrega intervalos [i,j] de la cadena."
        },
        {
          question: "{aⁿbⁿcⁿ | n≥0} no es libre de contexto por:",
          options: ["Necesita comparar tres contadores simultáneos",
          "Es regular",
          "Es finito",
          "CYK es O(n)"],
          answerIndex: 0,
          explanation: "PDA tiene una sola pila; no alcanza para tres bloques."
        },
        {
          question: "Simular derivación CFG con PDA típicamente:",
          options: ["Empuja RHS en reverso al leer expansión",
          "Usa ε solo",
          "No usa pila",
          "Lee la entrada al revés únicamente"],
          answerIndex: 0,
          explanation: "Construcción estándar top-down."
        },
        {
          question: "PDA determinista vs no determinista:",
          options: ["Determinista estricto es subclase propia",
          "Siempre equivalentes",
          "Igual que DFA",
          "Solo ND acepta regulares"],
          answerIndex: 0,
          explanation: "Hay CF que requieren no determinismo de pila."
        },
        {
          question: "Shift-reduce parser usa pila para:",
          options: ["Símbolos gramaticales y estados LR",
          "Solo tipos",
          "Hash de identificadores",
          "Bytecode"],
          answerIndex: 0,
          explanation: "Pila guía reducciones y shifts."
        },
        {
          question: "Depura CYK: celda (i,j) True pero S no aparece en (1,n). Conclusión:",
          options: ["w ∉ L(G) aunque haya subcadenas derivables",
          "w ∈ L",
          "Gramática regular",
          "Error lexer"],
          answerIndex: 0,
          explanation: "Aceptación requiere S deriva w completo."
        }
      ],
      exercises: [
        {
          id: 6601,
          instruction: "Describe en 8 líneas cómo un PDA acepta a^n b^n: pila, push en a's, pop en b's, aceptación con pila vacía.",
          placeholder: "PDA: ...",
          expectedKeywords: ["pila", "push", "pop", "an", "bn"],
          hint: "Un solo símbolo en la pila.",
          isEmailSubmission: false
        },
        {
          id: 6602,
          instruction: "DESAFÍO: Escribe los pasos del algoritmo CYK para la cadena 'baab' dada una gramática en CNF (puedes inventar una pequeña).",
          placeholder: "Tabla CYK: ...",
          expectedKeywords: ["CYK", "tabla", "CNF", "celda"],
          hint: "Triángulo inferior de subcadenas.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 8,
      title: "MÓDULO 8: MÁQUINAS DE TURING (TM), JERARQUÍA DE CHOMSKY Y DECIDIBILIDAD",
      description: "El límite absoluto de la computación, el Problema de la Parada (Halting Problem) y la Jerarquía de Chomsky.",
      items: [
      "Máquina de Turing: cinta infinita, cabezal, transiciones δ(q, a) → (q', b, M).",
      "Problema de la parada (halting): no existe MT que decida parada para toda MT-M.",
      "Diagonal de Cantor y reducción para pruebas de indecidibilidad.",
      "Jerarquía de Chomsky: tipo 3 (regular), 2 (CF), 1 (CS), 0 (RE) y contenciones.",
      "Lenguajes recursivamente enumerables vs recursivos (decidibles).",
      "MT multi-cinta y simuladores: constantes en tiempo, mismo poder expresivo.",
      "Límites de optimización estática: análisis exacto de flujo puede ser indecidible.",
      "Universalidad: MT U que interpreta codificaciones ⟨M⟩, w de otras máquinas.",
      "Conexión práctica: reconocer cuándo un analizador no puede ser siempre correcto y total."
],
      content: "## Panorama del tema: MÁQUINAS DE TURING, CHURCH-TURING, HALTING PROBLEM Y JERARQUÍA DE CHOMSKY\n\nHasta aquí, autómatas finitos y de pila delimitan lo que un programa con memoria acotada o con una pila puede reconocer. La **máquina de Turing** (TM) es el modelo que captura la noción intuitiva de **algoritmo**: una cabeza lee y escribe símbolos en una cinta ilimitada, cambia de estado según una tabla finita de reglas, y puede moverse a izquierda o derecha sin límite a priori de pasos (salvo que entre en bucle infinito). La **tesis de Church-Turing** afirma que cualquier función calculable por cualquier computador digital es calculable por alguna TM. Desde ese marco, **no todo problema admite algoritmo**: el **problema de la parada** (Halting Problem) es el ejemplo arquetípico de **indecidibilidad**.\n\nLa **jerarquía de Chomsky** ordena los tipos 0–3 de gramáticas y automátas correspondientes, unificando el curso: regex/DFA (3), CFG/PDA (2), sensibles al contexto (1), recursivamente enumerables / Turing (0).\n\n## Objetivos de la lección\n\n- Definir una máquina de Turing: cinta, cabezal, estados, alfabeto y función de transición.\n- Explicar la tesis de Church-Turing y su alcance (hipótesis, no teorema formal).\n- Enunciar el problema de la parada y esbozar la diagonalización de Turing.\n- Clasificar lenguajes en los cuatro tipos de la jerarquía de Chomsky con ejemplos.\n- Diferenciar decidible, semidecidible y no semidecidible.\n\n## Desarrollo de la lección\n\n### Modelo de la máquina de Turing\n\nFormalmente \\(M = (Q, \\Sigma, \\Gamma, \\delta, q_0, B, F)\\):\n\n- \\(Q\\): estados finitos.\n- \\(\\Sigma\\): alfabeto de **entrada** (símbolos que componen la cadena inicial sobre la cinta).\n- \\(\\Gamma\\): alfabeto de **cinta** (\\(\\Sigma \\subseteq \\Gamma\\)); incluye blancos \\(B\\).\n- \\(\\delta: Q \\times \\Gamma \\rightarrow Q \\times \\Gamma \\times \\{L, R\\}\\): en estado \\(q\\) leyendo \\(s\\) en la celda bajo el cabezal, pasa a \\(q'\\), escribe \\(s'\\) y mueve el cabezal left o right.\n- \\(q_0\\): estado inicial.\n- \\(B \\in \\Gamma \\setminus \\Sigma\\): símbolo blanco.\n- \\(F \\subseteq Q\\): estados de aceptación (halting accept).\n\nUna **computación** es la secuencia de configuraciones \\((\\text{cinta}, \\text{posición cabezal}, \\text{estado})\\). La máquina **acepta** si entra en \\(F\\); **rechaza** si entra en estado de rechazo explícito o **no detiene** (bucle infinito) — según convención del problema.\n\nVariantes (multi-cinta, no determinista) son **equivalentes** en poder computacional a la TM estándar.\n\n### Ejemplo: incrementar binario (como el snippet)\n\nLa TM del módulo simula incrementar un número en binario desde el **bit menos significativo** (final de la cadena):\n\n- Empieza en `head = len(cinta)-1`.\n- Mientras hay acarreo: si el dígito es `0`, pone `1` y termina acarreo; si es `1`, pone `0` y sigue hacia la izquierda.\n- Si el acarreo sobrevive al MSB, inserta `1` al inicio (`1011` \\(\\rightarrow\\) `1100`).\n\nEsto modela el patrón «leer–modificar–mover izquierda» de una TM real, aunque el código Python use lista mutable en lugar de cinta infinita con blancos a derecha.\n\n### Jerarquía de Chomsky\n\n| Tipo | Gramática | Autómata | Ejemplo de lenguaje |\n|------|-----------|----------|---------------------|\n| 3 | Regulares (derecha/izquierda) | DFA/NFA | identificadores simples, regex |\n| 2 | Libre de contexto | PDA | expresiones, paréntesis |\n| 1 | Sensible al contexto | LBA (linear bounded automaton) | \\(a^n b^n c^n\\) |\n| 0 | Sin restricción (RE) | Turing | todo lo semi-decidible |\n\nInclusiones estrictas: Tipo 3 \\(\\subset\\) 2 \\(\\subset\\) 1 \\(\\subset\\) 0.\n\nEl lenguaje \\(L = \\{a^n b^n c^n \\mid n \\ge 0\\}\\) **no** es LLC (se demuestra con lema del bombeo para LLC o intuición de dos pilas vs una), pero **sí** es sensible al contexto. El lenguaje universal o problemas de aceptación de TM son tipo 0.\n\n### Tesis de Church-Turing\n\nNo es un teorema matemático demostrable desde unos axiomas cerrados: es la **hipótesis** de que toda función «efectivamente calculable» (intuitiva: algoritmo finito, paso a paso, sin oráculos) coincide con las funciones computables por TM.\n\nConsecuencias prácticas:\n\n- No esperes un compilador que **siempre** detecte si un programa termina.\n- Modelos alternativos (lambda calculus, RAM, lenguajes imperiales con memoria ilimitada idealizada) son equivalentes en poder a TM.\n\n### Problema de la parada (Halting Problem)\n\n**Enunciado**: ¿Existe un algoritmo \\(H(P, x)\\) que, dada descripción de programa \\(P\\) y entrada \\(x\\), responda **siempre** en tiempo finito «\\(P\\) termina en \\(x\\)» o «\\(P\\) no termina»?\n\n**Respuesta de Turing**: **No**. El lenguaje\n\\(L_{HALT} = \\{\\langle M, w \\rangle \\mid M \\text{ es TM que acepta } w\\}\\)\n(o la variante «\\(M\\) se detiene en \\(w\\)») es **recursivamente enumerable** pero **no decidible**.\n\n**Esbozo de diagonalización (idea)**:\n\n1. Supón decididor hipotético `Halts(M,w)`.\n2. Construye TM `D` que, sobre entrada \\(\\langle M \\rangle\\), hace lo contrario de lo que diría `Halts(M, ⟨M⟩)` (si dice que para, buclea; si dice que buclea, para).\n3. Pregunta qué hace `Halts(D, ⟨D⟩)`: contradicción.\n\nPor tanto, **no puede existir** detector universal de bucles infinitos para programas arbitrarios. Herramientas de análisis estático encuentran **algunos** bucles, no todos.\n\n### Decidible vs semidecidible\n\n- **Decidible (recursive)**: existe TM que **siempre** detiene y responde sí/no.\n- **Semidecidible (RE)**: existe TM que acepta las instancias «sí» y puede buclear en «no».\n- **Co-RE** pero no decidible: complemento del halting; no hay TM que liste todos los que **no** paran.\n\nEn compiladores, la mayoría de chequeos (sintaxis, tipos en lenguajes comunes) son decidibles en el fragmento que analizan; la **optimización agresiva** o análisis de propiedades de programas Turing-completos choca con límites indecidibles.\n\n### Máquina universal y programas que se interpretan a sí mismos\n\nLa TM **universal** \\(U\\) simula cualquier otra TM codificada en la cinta. El halting se formula como: ¿\\(U\\) acepta \\(\\langle M,w\\rangle\\) si y solo si \\(M\\) se detiene en \\(w\\)? La diagonal construye \\(D\\) que contradice al decisor hipotético. Estudiar este patrón una vez permite reconocerlo en **bugs de verificación** que prometen resolver problemas equivalentes al halting encubiertos.\n\n### Lenguajes sensibles al contexto vs LLC\n\n\\(L = \\{a^n b^n c^n\\}\\) requiere comparar **tres** contadores simultáneos. Un solo stack no puede: al leer \\(a^n b^n\\) la pila quedó vacía y no queda memoria para emparejar \\(c^n\\). Los **linear bounded automata** (LBA) reconocen tipo 1. Los compiladores casi nunca implementan LBA completos; las reglas «sensibles» aparecen en macro-procesadores o verificadores especializados.\n\n### Enumerabilidad y problemas semi-decidibles\n\nUn lenguaje **recursivamente enumerable** (tipo 0 generado por restricción débil) coincide con lenguajes aceptados por TM que pueden no detener en cadenas fuera del lenguaje. **Decidable** exige TM total que siempre para. El lenguaje del halting es RE pero no co-RE; su complemento tampoco es RE — asimetría profunda en jerarquía.\n\n### Impacto en diseño de lenguajes\n\nLenguajes con **macros Turing-completos** en tiempo de compilación (C++ templates históricamente) pueden hacer compilación no terminar — rareza práctica pero relacionada conceptualmente. Políticas modernas limitan profundidad de instanciación y tamaño de expansión.\n\n### TM multipista y eficiencia\n\nAgregar cintas constantes no cambia decidibilidad pero reduce tiempo polinomial de simulación; afecta teoría de complejidad (clase P vs NP) distinta de este módulo pero comparte intuición «más memoria estructurada = más expresividad eficiente».\n\n## Demostración enlazada al código del módulo\n\n`MaquinaTuringIncremento` almacena `cinta` como lista de caracteres y `head` en el último índice.\n\n- El bucle `while self.head >= 0 and acarreos` simula barrido hacia la izquierda procesando acarreo.\n- `'0'` \\(\\rightarrow\\) `'1'`: fin de acarreo local.\n- `'1'` \\(\\rightarrow\\) `'0'`: continúa acarreo, `head -= 1`.\n- Si tras el bucle `acarreos` sigue verdadero, overflow de ancho: `insert(0, '1')`.\n\nEntrada `1011` (11 decimal): LSB es último `1` \\(\\rightarrow\\) `0`, acarreo, siguiente `1` \\(\\rightarrow\\) `0`, acarreo, `0` \\(\\rightarrow\\) `1`, stop; resultado `1100` (12). La TM **siempre termina** en esta función acotada: es un **subproblema decidible**, no el halting general.\n\n## Aplicaciones en sistemas reales\n\n**Verificación formal (TLA+, Coq)**: se demuestran propiedades de protocolos o kernels restringidos; fuera de fragmentos decidibles, el usuario prueba teoremas manualmente — reconocimiento del límite de Turing.\n\n**Timeouts en servidores (Kubernetes, AWS Lambda)**: no pueden saber si un contenedor colgará; imponen límites de CPU/tiempo — respuesta de ingeniería al halting indecidable.\n\n**Firmas de virus / análisis heurístico**: antivirus no resuelven halting; combinan firmas (regulares/autómatas) con heurística de comportamiento acotado.\n\n## Errores clásicos en examen\n\n- Confundir «indecidible» con «muy difícil» o «NP-completo» — son clases distintas.\n- Creer que la tesis de Church-Turing es teorema demostrado con ZFC estándar.\n- Ordenar mal la jerarquía (p. ej. pensar que LLC contiene regulares es correcto, pero invertir 1 y 2).\n- Afirmar que toda TM puede convertirse en DFA si se «desenrolla» la cinta: la cinta es infinita.\n- Usar halting para decir que **ningún** compilador puede detectar **nunca** errores de sintaxis (síntaxis es decidible).\n\n## Preguntas de entrevista\n\n**P: ¿Qué es el Halting Problem y por qué importa a un ingeniero?**\n\n**R:** Pregunta si existe algoritmo universal que prediga terminación de cualquier programa. Turing demostró que no. Importa porque herramientas que prometen «encontrar todos los deadlocks/bucles» en código Turing-completo son imposibles en general; hay que acotar el dominio o usar aproximaciones.\n\n**P: Ubica los lenguajes regulares y LLC en Chomsky.**\n\n**R:** Regulares = tipo 3 (DFA). LLC = tipo 2 (PDA). Todos los regulares son LLC; existen LLC no regulares (\\(a^n b^n\\)). Tipo 0 incluye problemas de aceptación de TM; tipo 1 intermedios como \\(a^n b^n c^n\\).\n\n\n### Configuraciones y diagrama espacio-tiempo\n\nRegistrar una configuración TM como \\((q, lpha, i)\\) donde \\(lpha\\) es contenido de cinta con cabezal en posición \\(i\\) permite razonar sobre **histórias** de cómputo. Dos máquinas con distinto número de estados pueden simular la misma función; lo importante es el conjunto de **funciones parciales computables** y los **lenguajes decidibles**.\n\nLa **codificación** \\(\\langle M, w \nangle\\) como cadena finita permite tratar programas como entrada de otros programas: base de intérpretes universales y del argumento del halting.\n\n### Reducciones y problemas complementarios\n\nMuchos problemas indecidibles se prueban por **reducción** desde HALT: si pudieras decidir \\(A\\), decidirías HALT. Ejemplos clásicos en cursos: equivalencia de dos TMs, totality (¿\\(M\\) se detiene en **toda** entrada?). En compilación, problemas como «¿este programa accede siempre dentro de límites de array sin ejecutarlo?» son indecidibles en general (relacionados con Rice: propiedades no triviales del comportamiento son indecidibles).\n\n### Variantes computacionalmente equivalentes\n\nMáquinas con múltiples cintas, máquinas no deterministas, y registros ilimitados (RAM idealizado) no superan el poder de una sola cinta TM (con posible pérdida de eficiencia polinomial irrelevante para decidibilidad). Esto justifica usar el modelo que convenga en demostraciones.\n\n### Rice y límites de análisis estático\n\nEl **teorema de Rice**: cualquier propiedad **no trivial** del lenguaje reconocido por una TM es indecidible. Consecuencia didáctica: no habrá analizador que detecte **todos** los programas que «hacen exactamente X» para comportamientos semánticos ricos; las herramientas acotan el lenguaje (tipos, anotaciones, subconjuntos sin goto).\n\n### Comparación operativa DFA–PDA–TM\n\n| Modelo | Memoria | ¿Decide LLC? | ¿Decide HALT? |\n|--------|---------|--------------|---------------|\n| DFA | estado fijo | solo regulares | no |\n| PDA | pila | sí (LLC) | no |\n| TM | cinta | sí (RE) | no (pero semidecide HALT) |\n\nLa fila HALT aclara: existe TM que enumera pares que paran, pero no una que clasifique siempre sí/no.\n\n## Guía de repaso extendida\n\nDibuja la jerarquía de Chomsky con ejemplos propios (no copiados del pdf): un lenguaje regular que uses en programación (números enteros sin signo), un LLC (XML bien formado simplificado), un contraejemplo que **no** es LLC (\\(a^n b^n c^n\\)), y un problema sobre código (halting). Escribe junto al diagrama el reconocedor correspondiente: DFA, PDA, LBA, TM.\n\nReproduce el argumento del halting en tus palabras sin memorizar símbolos: «Si existiera un detector universal, construyo un programa que hace lo contrario sobre su propia descripción y llego a contradicción». Esa narrativa de treinta segundos responde entrevistas cuando no hay pizarra.\n\nEjecuta el incremento binario del snippet con entradas `1111`, `1000` y predice el resultado antes de correr Python. Relaciona acarreo con el movimiento del cabezal hacia la izquierda en la TM.\n\n## Estudio dirigido: Turing, límites y jerarquía\n\nConstruye una TM de tres estados que **sí** termina sobre toda entrada binaria fija (como el incrementador del módulo) y contrasta con un programa Python `while True: pass` que ningún passs de compilador C puede probar equivalente a parada. El primero es subclase trivial decidable; el segundo ilustra limitación solo cuando el espacio de programas es universal.\n\nMemoriza la cadena de inclusiones \\(L_3 \\subset L_2 \\subset L_1 \\subset L_0\\) con un ejemplo **distinto** en cada nivel elegido por ti. En examen escriben ejemplos del libro; el corrector valora variedad. Explica por qué todo regular es LLC: toda regex se traduce a CFG casi identica a su automata.\n\nInvestiga (sin internet en examen, con notas) qué es un problema **co-RE** y por qué el complemento del halting no es RE. Narrativa corta: si fuera RE, tendríamos enumeración de programas que **no** paran, mezclando con decididor del halting contradice — esquema similar al original.\n\nLa TM del snippet no usa cinta infinita a la derecha con blancos; lista Python crece con `insert`. Discute si eso invalida la analogía (no, para cadenas finitas da la misma semántica). Extensión: añadir movimiento a derecha tras procesar MSB para borrar hacia el infinito — ejercicio opcional.\n\nRelaciona jerarquía Chomsky con tu pipeline de compilador: lexer ≈ tipo 3, parser ≈ tipo 2, chequeos semánticos ricos se salen de CFG pura hacia analisis ad-hoc, optimización sobre IR puede simular análisis no trivial; el programa fuente completo en lenguaje Turing-completo abraza tipo 0 en potencia expresiva.\n\n## Profundización: diagonal, Rice y computación moderna\n\nEl esquema diagonal de Cantor traslada a computación: la lista de todas las TM enumerables permite construir una que difiere de la n-ésima en la n-ésima entrada. Church y Turing convergen en que la función computable no puede autodecir parada global.\n\nEl **teorema de Rice** generaliza: ninguna propiedad no trivial del comportamiento semántico de un programa (visto como lenguaje que acepta) es decidible uniformemente. Los linters que garantizan «este programa nunca accede a null» en JavaScript completo se acercan a territorio imposible; herramientas reales acotan el sublenguaje analizado.\n\n**Hypercomputación** (oráculos, máquinas con cinta infinita en pasos infinitos) queda fuera del undergraduate estándar pero explica por qué algunas generalizaciones del halting se discuten en foros: en el modelo estándar, la respuesta del módulo es definitiva: no hay algoritmo.\n\nConecta TM con **máquina de registro**: contadores ilimitados + saltos condicionales son Turing-completos. Los lenguajes de alto nivel desembocan ahí tras compilación — la jerarquía de Chomsky describe lenguajes, no el poder del programa C compilado que es tipo 0 en expresividad.\n\nEjercicio de cierre: demuestra que el conjunto de CFG no ambiguas no es decidible (esperado en curso avanzado); en intro basta recordar que ambigüedad gramatical es problema delicado distinto a pertenencia LLC.\n\n\n## Práctica integral y cierre de unidad\n\nRedacta una página comparando tres modelos de computación vistos en el curso: DFA (memoria en estado), PDA (pila), TM (cinta). Para cada uno escribe un lenguaje testigo y un anti-testigo fuera del modelo. Cierra con frase que relacione Jerarquía de Chomsky con esas tres máquinas.\n\nReescribe la demostración del Halting Problem identificando explícitamente dónde se usa autopresentación (programa que consume descripción de sí mismo). Sin formalismo pesado, debe ser comprensible por un compañero que no asistió a clase.\n\nEjecuta el incremento binario del snippet con entradas de longitud 1, 4 y 8 bits; anota patrones de número de pasos del bucle while interno. ¿Es lineal en longitud de cinta? Argumenta.\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé una transición TM (estado, leer, escribir, mover).\n- Recorrí el incremento binario del snippet y relacioné con acarreo.\n- Repasé jerarquía 3-2-1-0 con un ejemplo por nivel.\n- Expliqué halting en tres frases con diagonalización.\n- Estoy listo para el bloque compiladores (módulo 9): arquitectura frontend/middle/backend.",
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
          question: "Problema de la parada es:",
          options: ["Indecidible",
          "NP-completo",
          "O(n)",
          "Regular"],
          answerIndex: 0,
          explanation: "No existe algoritmo correcto y total que decida parada para todas las MT."
        },
        {
          question: "Jerarquía de Chomsky: tipo 3 ⊆ tipo 2 porque:",
          options: ["Toda CFG regular puede restringirse a forma regular",
          "Los regulares requieren pila",
          "Los CF son finitos",
          "MT ⊆ REG"],
          answerIndex: 0,
          explanation: "Gramáticas regulares son casos particulares de CFG."
        },
        {
          question: "Lenguaje recursivo (decidible) implica:",
          options: ["Existe MT que decide L y siempre para",
          "Solo enumeración",
          "Ser regular",
          "No tener complemento"],
          answerIndex: 0,
          explanation: "Decisión total y correcta para todo input."
        },
        {
          question: "Reducción de H a L muestra:",
          options: ["Si L fuera decidible entonces H sería decidible",
          "L es regular",
          "H es regular",
          "L ⊆ Σ*"],
          answerIndex: 0,
          explanation: "Esquema estándar de reducibilidad para indecidibilidad."
        },
        {
          question: "MT multi-cinta vs mono-cinta:",
          options: ["Mismo poder computacional",
          "Multi-cinta es más potente",
          "Mono-cinta decide parada",
          "Multi no lee entrada"],
          answerIndex: 0,
          explanation: "Simulación polinomial conserva computabilidad."
        },
        {
          question: "Universalidad Turing permite:",
          options: ["Interpretar ⟨M⟩, x en una MT fija U",
          "Eliminar CFG",
          "Optimizar LLVM",
          "Tokenizar"],
          answerIndex: 0,
          explanation: "Máquina universal simula codificaciones de otras máquinas."
        },
        {
          question: "¿Cuál problema es decidible?",
          options: ["¿DFA acepta la cadena vacía? (finito y mecánico)",
          "Equivalencia de dos MT arbitrarias",
          "Parada de MT general",
          "¿MT imprime 2? con entrada arbitraria"],
          answerIndex: 0,
          explanation: "Chequear δ*(q₀, ε)∈F es finito."
        },
        {
          question: "Tipo 1 (sensibles al contexto) respecto a tipo 2:",
          options: ["Incluye reglas con restricciones de contexto más allá de CFG pura",
          "Es igual a regular",
          "No existe",
          "Solo trivial"],
          answerIndex: 0,
          explanation: "Jerarquía estricta entre clases."
        },
        {
          question: "Depura argumento: «como no puedo diseñar DFA, el problema no existe». Error:",
          options: ["Indecidibilidad trata decidibilidad, no solo sintaxis regular",
          "DFA siempre existe",
          "MT no importa",
          "Chomsky no aplica"],
          answerIndex: 0,
          explanation: "Clases más allá de regulares siguen siendo bien definidas."
        },
        {
          question: "RE pero no recursivo implica:",
          options: ["Enumerables pero con MT que puede no parar en negativas",
          "Regulares",
          "Vacío",
          "Sin complemento enumerable"],
          answerIndex: 0,
          explanation: "Aceptación enumerativa ≠ decisión total."
        }
      ],
      exercises: [
        {
          id: 6701,
          instruction: "Redacta el argumento de diagonalización del problema de la parada en 10 oraciones: máquina H que contradice a sí misma.",
          placeholder: "Sea H la MT que...",
          expectedKeywords: ["halting", "diagonal", "contradiccion", "indecidible"],
          hint: "Entrada (M,w) → H niega el comportamiento de M sobre su propia codificación.",
          isEmailSubmission: false
        },
        {
          id: 6702,
          instruction: "DESAFÍO: Clasifica en la jerarquía de Chomsky: (a) identificadores C, (b) L={a^n b^n c^n}, (c) cualquier lenguaje recursivamente enumerable.",
          placeholder: "Tipo 3/2/1/0: ...",
          expectedKeywords: ["Chomsky", "tipo", "regular", "libre"],
          hint: "(a) tipo 3, (b) no LLC típicamente tipo 1, (c) tipo 0.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 9,
      title: "MÓDULO 9: ARQUITECTURA DE UN COMPILADOR",
      description: "Estructura interna: Frontend, Middle-end, Backend y fases de traducción de código.",
      items: [
      "Fases: análisis (front), optimización intermedia (middle), generación (back).",
      "Interfaz entre fases: árbol, tabla de símbolos, IR, mapas de constantes.",
      "Manejo de errores recovery por fase sin abortar compilación prematuramente.",
      "Passes múltiples: semántica después de parser; codegen después de optimizar IR.",
      "Driver del compilador: orquestación, flags, archivos objeto y enlazado posterior.",
      "Formatos intermedios portables (LLVM bitcode, stack machine) versus TAC ad hoc.",
      "Separación de concerns: lexer no conoce tipos; parser no emite asm directamente.",
      "Tablas y diagnósticos: filas/columnas de error ligadas al AST o tokens.",
      "Pipeline incremental y compilación por unidades (módulos) en toolchains reales."
],
      content: "## Panorama del tema: ARQUITECTURA DE COMPILADORES — FRONTEND, MIDDLE-END Y BACKEND\n\nUn compilador industrial no es un programa monolítico que «traduce texto a binario» en un solo paso. Es un **pipeline de fases** con interfaces bien definidas: cada etapa consume una representación y produce otra más cercana a la máquina. La división clásica en **frontend**, **middle-end** y **backend** permite equipos especializados, reutilización (un frontend C para varias CPUs) y pruebas por capas. El frontend responde «¿el programa es válido y qué estructura tiene?»; el middle-end «¿cómo lo transformamos para ir más rápido sin cambiar significado?»; el backend «¿cómo lo mapeamos a registros e instrucciones reales de este procesador?».\n\nEsta lección sitúa cada fase del laboratorio QuimiSell (lexer, parser, semántica, TAC, optimización, ensamblador conceptual) dentro del mapa global, y distingue compilador, intérprete y transpilador — categorías que aparecen en entrevistas y en el diseño de lenguajes como TypeScript, Kotlin/JVM o Rust/LLVM.\n\n## Objetivos de la lección\n\n- Diferenciar compilador, intérprete, transpilador y máquina virtual.\n- Enumerar fases del frontend (léxico, sintáctico, semántico) y su salida (AST, tabla de símbolos).\n- Explicar el rol del middle-end (IR, optimización target-independent).\n- Describir tareas del backend (instrucción, registros, calling conventions).\n- Relacionar el pipeline con LLVM, GCC y el snippet demo del módulo.\n\n## Desarrollo de la lección\n\n### Compilador, intérprete y transpilador\n\nUn **compilador** traduce un programa fuente completo (o módulo) a una forma ejecutable **antes** de la ejecución: ensamblador, objeto, o bytecode para VM. Ejemplos: `gcc`, `rustc`, `javac` (bytecode).\n\nUn **intérprete** analiza y ejecuta **al mismo tiempo**, típicamente sin generar binario persistente: REPL de Python (modo interpretado), `node` para JS (aunque modernamente JIT). Ventaja: ciclo editar-ejecutar rápido. Desventaja: menos optimización global sin JIT.\n\nUn **transpilador** (source-to-source) transforma entre lenguajes de nivel similar: TypeScript → JavaScript, CoffeeScript → JS, SCSS → CSS. La salida sigue siendo texto o AST en otro lenguaje alto nivel; otro compilador o runtime termina la ejecución.\n\nHíbridos: Java y C# compilan a bytecode e **interpretan** en VM con JIT; Go compila directo a máquina; Python compila a `.pyc` (bytecode) e interpreta en la VM CPython.\n\n### Frontend: análisis\n\nEl **frontend** trabaja sobre texto fuente (o sobre árbol pre-parseado en herramientas LSP). Fases principales:\n\n1. **Análisis léxico**: caracteres → tokens (módulo 10).\n2. **Análisis sintáctico**: tokens → AST o árbol concreto (módulo 11).\n3. **Análisis semántico**: AST + tabla de símbolos → AST tipado, errores de scope/tipos (módulo 12).\n\nSalidas compartidas hacia el resto del pipeline:\n\n- **AST** (posiblemente decorado con tipos).\n- **Tabla de símbolos** (identificadores, funciones, tipos).\n- **Diagnósticos** (errores y warnings con ubicación fuente).\n\nMuchos compiladores también generan ya una **IR inicial** desde el AST (visitor que emite tres direcciones o LLVM IR builder).\n\n### Middle-end: IR y optimización\n\nEl **middle-end** opera sobre **representación intermedia** (IR) independiente del procesador: LLVM IR, GCC GIMPLE, Sea of Nodes en Graal, etc.\n\nTareas típicas:\n\n- Canonicalizar control de flujo (CFG).\n- **Optimización**: constant folding, DCE, inline, loop opts (módulo 14).\n- Análisis de datos (def-use, reaching definitions) para habilitar transformaciones seguras.\n\nLa propiedad clave: mismas optimizaciones sirven para x86, ARM y RISC-V porque el IR abstrae registros infinitos y tipos de memoria de forma uniforme.\n\n### Backend: código máquina\n\nEl **backend** mapea IR optimizado a **código objeto**:\n\n- **Selección de instrucciones** (pattern matching sobre DAGs).\n- **Asignación de registros** (grafo de conflictos, linear scan).\n- **Scheduling** (reordenar para pipelines).\n- **Emisión** de ensamblador o binario.\n- **Convenciones de llamada** (quién guarda registros, pila, frame pointer).\n\nCada arquitectura tiene un backend; LLVM permite registrar nuevos targets.\n\n### Flujo de datos y errores\n\nEl compilador debe **recuperarse** de errores en frontend para reportar múltiples fallos (no panic al primer `;` faltante). Estrategias: tokens de sincronización en parser, análisis semántico best-effort, flags `had_errors` que bloquean codegen.\n\nLa **tabla de símbolos** puede construirse incrementalmente durante parse o en pass semántico dedicado; en lenguajes con inferencia (Rust, Haskell) el middle-end participa en resolución de tipos.\n\n### Caso de estudio: Clang + LLVM\n\n1. Clang frontend: C++ → AST + diagnósticos.\n2. Clang codegen: AST → LLVM IR.\n3. LLVM opt: passes sobre IR.\n4. llc: LLVM IR → `.s` para la CPU elegida.\n\nUn solo frontend alimenta múltiples backends LLVM — ejemplo canónico de la separación modular.\n\n### Diagrama del pipeline (descripción textual)\n\nImagine una cinta transportadora de representaciones: **texto UTF-8** entra al lexer → **stream de tokens** → parser produce **AST** → semántica decora el árbol y llena **tabla de símbolos** → generador emite **LLVM IR en SSA** → pipeline `opt -O2` muta IR → `llc` emite **object file** → **ld** fusiona con `libc` y produce **ELF ejecutable**. Cada caja es sustituible: mismo IR optimizado puede acabar en WASM con otro backend.\n\n### Responsabilidades de cada capa en errores\n\n| Fase | Error típico | Quién lo detecta |\n|------|----------------|------------------|\n| Léxica | `@` ilegal | Lexer |\n| Sintaxis | `if` sin `(` | Parser |\n| Semántica | tipos incompatibles | Analyzer |\n| IR/Opt | (raro) violación interna | Pass invariant |\n| Backend | no encaja instrucción | Instruction selector |\n\nSeparar responsabilidades acelera depuración del propio compilador en desarrollo.\n\n### JIT vs AOT dentro de la misma arquitectura\n\n**Ahead-of-time** (gcc, rustc default) ejecuta casi todo el pipeline antes de correr el programa. **JIT** (Java HotSpot, V8) parsea/ compila fragmentos en runtime, a veces dejando interpretador para código frío. La **misma arquitectura conceptual** aplica; cambia cuándo y cuántas veces se repite cada fase.\n\n### Reto del laboratorio en el mapa del compilador\n\nEl laboratorio QuimiSell implementa las cajas del centro-delantera del diagrama: lexer y parser propios, evaluador o TAC. No exige backend real, pero el estudiante debe **nombrar** qué fases faltarían para binario nativo. Eso demuestra comprensión arquitectónica más allá de código que corre en Python.\n\n### Multi-archivado y módulos\n\nProyectos reales compilan muchas unidades `.c` a objetos separados; el frontend corre **por archivo**; el linker une símbolos globales (`extern`). La tabla de símbolos puede persistir en formato interno (obj files) como secciones `.symtab` — detalle que explica por qué `static` limita visibilidad a un objeto.\n\n## Demostración enlazada al código del módulo\n\n`compilador_pipeline_demo(\"x = 10 + 5\")` imprime cinco etapas **simuladas**:\n\n1. **Input**: cadena fuente literal.\n2. **Lexer**: lista fija `[\"ID(x)\", \"ASSIGN\", \"NUM(10)\", \"PLUS\", \"NUM(5)\"]` — no tokeniza de verdad, ilustra **forma** de salida.\n3. **Parser**: string AST `AssignStmt(target='x', value=Add(10, 5))` — asignación con suma en RHS.\n4. **Middle-end TAC**: `t0 = 10 + 5`, `x = t0` — temporal intermedio antes de asignar a variable.\n5. **Backend asm**: `MOV EAX, 15` y `MOV [x], EAX` — simplificación didáctica (15 calculado en «ensamblador» en lugar de sumar en CPU).\n\nEl valor pedagógico es ver **contratos entre fases**: cada `print` es la entrada esperada de la siguiente. Al implementar el laboratorio, sustituirás listas fijas por clases `Lexer`, `Parser`, `IRGenerator` reales.\n\n## Aplicaciones en sistemas reales\n\n**Swift + LLVM**: el frontend de Apple genera Swift LLVM IR; optimización y codegen compartidos con Clang para Apple Silicon y x86.\n\n**Babel (transpiler)**: parsea JavaScript/TypeScript, transforma AST (plugins), imprime JS compatible con motores viejos — frontend + middle sin backend de CPU.\n\n**WebAssembly**: backend común para C/C++/Rust que emite `.wasm`; el «runtime» del navegador es la máquina objetivo virtual.\n\n## Errores clásicos en examen\n\n- Colocar optimización de loops en el lexer.\n- Decir que el parser genera ensamblador directamente (omite IR y backend).\n- Confundir transpilador con compilador a máquina nativa.\n- Afirmar que el intérprete «no compila nunca» (ignorar JIT/bytecode).\n- Olvidar que la tabla de símbolos cruza frontend y semantic analyzer.\n\n## Preguntas de entrevista\n\n**P: ¿Por qué separar middle-end y backend?**\n\n**R:** Para compartir optimizaciones y análisis en todos los targets y reducir el costo de soportar N arquitecturas: un IR y M backends, en lugar de N×M traducciones fuente→assembly.\n\n**P: ¿Dónde encaja el linker?**\n\n**R:** Después del backend: el compilador produce `.o` relocables; el **linker** resuelve símbolos externos, fusiona secciones y produce ejecutable. Es fase posterior al compilador propiamente dicho.\n\n## Estudio dirigido: arquitectura y contratos entre fases\n\nRedibuja el pipeline del snippet `compilador_pipeline_demo` sustituyendo los valores hardcodeados por flechas etiquetadas «tipo de dato» entre fases: string → list[TokenRepr] → AST string → list[TAC] → list[Asm]. Especifica qué invariantes debe cumplir cada salida (por ejemplo, todo AST de asignación tiene hijo izquierdo identificador).\n\nCompara tiempo de compilación vs tiempo de ejecución en JIT: Arquitectura sigue siendo fases, pero algunas corren en caliente repetidas veces. Transpilador TypeScript produce text JS; el «backend» es el motor V8 que compila JS — pipeline anidado de dos herramientas.\n\nDocumenta tres errores reales de estudiantes al narrar fases: colocar type checking en lexer, optimizar antes de generar IR, generar asm sin tabla de símbolos. Corrige cada uno indicando la fase correcta.\n\nPara el laboratorio, define una interfaz mínima entre clases: `Lexer.tokenize(src) -> list[Token]`, `Parser.parse(tokens) -> AST`, `GenTAC.visit(ast) -> list[str]`. Esta interfaz **es** la arquitectura en microcosmo; escríbela antes de codificar.\n\nEstudia el papel del linker leyendo la salida de `gcc -c` y `ld` (si tienes entorno Unix): objetos separados, símbolo `main` resuelto en enlace. Conecta con módulo 15.\n\n### Tabla de comparación compilador / intérprete / VM\n\n| Aspecto | Compilador AOT | Intérprete puro | VM + JIT |\n|---------|----------------|-----------------|----------|\n| Cuándo analiza | pre-ejecución | en ejecución | híbrido |\n| Artefacto | binario/obj | ninguno | bytecode |\n| Ejemplo | gcc, rustc | Lambda básica | JVM, CPython+JIT |\n\nCompleta la tabla con una fila «optimización global» y anota ventajas/desventajas desde la arquitectura, no desde marketing de lenguajes.\n\n## Profundización: fases, artefactos y herramientas reales\n\nCada fase del compilador consume y produce **artefactos** en disco o memoria: tokens en buffer circular, AST como grafo de nodos, IR serializado en bitcode LLVM, objeto ELF con secciones `.text`, `.data`, metadatos DWARF para debug. Conocer artefactos ayuda a depurar cadenas de builds rotas.\n\nEl **preprocesador** C (`cpp`) es fase previa al lexer clásico: expande macros e incluye archivos. Hoy enClang el preprocesador integra en el frontend pero conceptualmente sigue siendo transformación texto→texto.\n\n**Análisis semántico** en C++ incluye plantillas, módulos C++20 y verificación de ODR (One Definition Rule). La arquitectura sigue siendo pipeline, pero el «frontend» puede ocupar la mayor parte del tiempo de compilación en proyectos enormes.\n\n**Middle-end LLVM** ejecuta passes registrados (`instcombine`, `inline`, `loop-rotate`). Orden por defecto `-O2` está tunado por años; cambiar orden puede romper correctitud si un pass asume invariantes que otro debe establecer antes.\n\n**Backend** selecciona scheduling y latencias de instrucciones del microarquitectura (out-of-order, SIMD). Mismo LLVM IR puede generar código distinto con `-march=skylake` vs `-march=znver3`.\n\nEn **interpretación pura**, fases de parser y parte semántica se fusionan con evaluación (REPL). Arquitectónicamente sigue existiendo lectura de caracteres y construcción de estructura; la «generación» es dispatch de operaciones sobre entorno runtime.\n\nDocumenta para tu portafolio QuimiSell qué porcentaje del pipeline industrial cubre tu laboratorio (~40% front + mitad del middle si incluyes TAC y folding básico). Identifica gaps explícitos (linker, regalloc) como trabajo futuro.\n\n### Preguntas reflexivas\n\n¿Un formateador como `clang-format` en qué fase encajaría? (Re-lexer + reconstrucción texto, casi frontend sin semántica completa). ¿Un linter de estilo? (Semántica parcial + reglas externas). Clasificar herramientas afina intuición arquitectónica allá del compilador clásico.\n\n\n## Práctica integral y cierre de unidad\n\nEscribe especificación de interfaz entre tus módulos del laboratorio como contrato: precondiciones y postcondiciones de `Lexer.tokenize`, `Parser.parse` y generador TAC. Indica tipos esperados de retorno y cómo propaga errores sin abortar todo el pipeline en el primer fallo.\n\nInvestiga en tus apuntes el rol del **preprocesador**, **ensamblador** y **linker** como fases colindantes al compilador clásico. Una tabla de cinco filas (fase, entrada, salida) completa el panorama más allá del snippet demo.\n\nDiseña un diagrama de secuencia (texto ascii: A→B→C) para compilar archivo `main.c` con dos `#include` y enlazar con `libc`. Menciona dónde se fusionan tablas de símbolos.\n\nCompara tiempo de compilación incremental (solo un archivo cambia) vs clean build: arquitectura modular permite re-lexer solo unidad afectada; linker siempre repite trabajo de resolución global.\n\nReflexiona: ¿el intérprete de Python que usas para el laboratorio sigue fases similares aunque no emita binario? Describe lexer/parser internos de CPython a alto nivel.\n\nFinalmente, enumera responsabilidades que **no** cubre tu repositorio del reto QuimiSell y prioriza cuál añadirías en versión dos (sugerencia habitual: mensajes de error con línea/columna en lexer y parser).\n\n## Monografía breve: del texto fuente al proceso en ejecución\n\nCuando escribes un programa en C o en el mini lenguaje del laboratorio, el compilador no «entiende» el problema de negocio: solo valida que la secuencia de caracteres pertenezca al lenguaje y que las reglas semánticas del diseño del lenguaje se cumplan. El frontend acumula evidencia de corrección en el AST anotado; el middle-end reexpresa la lógica en forma que privilegia transformaciones automáticas; el backend materializa decisiones de arquitectura en patrones de instrucciones repetibles.\n\nLa modularidad importa en equipos grandes: un grupo mantiene el parser C++ de Clang, otro los passes LLVM, otro el backend ARM. Los contratos entre fases son tipos de datos internos estables. Si el AST cambia de representación, todos los consumidores downstream se actualizan en la misma revisión. En tu proyecto individual el contrato es simplemente la lista de tokens o la clase `ASTNode`, pero la disciplina es la misma.\n\nLos errores deben fluir hacia el usuario con contexto. Un pipeline bien diseñado acumula diagnósticos en vez de abortar en silencio. El lexer aporta posición; el parser esperaba `)`; el semántico encontró tipos incompatibles en la línea exacta del operador. La arquitectura de múltiples fases facilita atribuir culpa correcta.\n\nConsidera transpilación cruzada: TypeScript compila a JavaScript que luego interpreta V8. Son dos pipelines encadenados con artefactos texto. Rust compila a LLVM IR y reutiliza backend compartido con C. La lección de arquitectura es reutilización de middle y back.\n\nFinalmente, el ejecutable no es salida del compilador solo: linker y loader completan la historia. Un curso de compiladores sin mencionar enlace dejaría hueco en la mente del estudiante respecto a cómo `printf` aparece resuelto en el binario. Este módulo puentea teoría y sistema operativo.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé el pipeline fuente → tokens → AST → IR → asm.\n- Ejecuté el snippet y expliqué cada línea de salida.\n- Diferencié compilador, intérprete y transpilador con un ejemplo cada uno.\n- Ubiqué el laboratorio del curso en frontend + middle inicial.\n- Listo para módulo 10: implementación concreta del lexer.",
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
          question: "Frontend del compilador agrupa:",
          options: ["Lexer, parser y análisis semántico",
          "Solo codegen",
          "Solo linker",
          "Optimización de loops exclusiva"],
          answerIndex: 0,
          explanation: "Análisis hasta IR/tabla de símbolos decorada."
        },
        {
          question: "Middle-end típicamente opera sobre:",
          options: ["IR con optimizaciones machine-independent",
          "Caracteres fuente",
          "Binario ejecutable final",
          "Solo comentarios"],
          answerIndex: 0,
          explanation: "Transformaciones portables antes del backend."
        },
        {
          question: "¿Qué artefacto conecta parser con semántica?",
          options: ["AST/tabla de símbolos en construcción",
          "Archivo .o",
          "Regex del lexer",
          "Linker script"],
          answerIndex: 0,
          explanation: "Estructura parseada alimenta chequeos."
        },
        {
          question: "Error recovery en parser debe:",
          options: ["Reportar y sincronizar para continuar diagnósticos",
          "Silenciar todos los errores",
          "Abortar sin mensaje",
          "Saltar codegen"],
          answerIndex: 0,
          explanation: "Múltiples errores por archivo en IDE."
        },
        {
          question: "Compilación separada por archivos requiere:",
          options: ["Objetos con símbolos exportados resueltos en enlace",
          "Un solo paso lexer",
          "Sin tablas",
          "CYK"],
          answerIndex: 0,
          explanation: "Linker resuelve referencias cruzadas."
        },
        {
          question: "LLVM IR como middle-end facilita:",
          options: ["Reusar optimizaciones y backends para varios lenguajes",
          "Eliminar lexer",
          "Ejecutar sin OS",
          "Solo regex"],
          answerIndex: 0,
          explanation: "Portabilidad y passes compartidos."
        },
        {
          question: "Depura pipeline: tokens correctos pero AST vacío. Fallo en:",
          options: ["Parser o activación del constructor de AST",
          "Linker",
          "Reg alloc",
          "SSA φ"],
          answerIndex: 0,
          explanation: "Lexer OK; construcción sintáctica falló."
        },
        {
          question: "Opción `-O2` en gcc/clang afecta principalmente:",
          options: ["Passes de optimización sobre IR",
          "Longitud del lexer",
          "Charset",
          "Nombre del ejecutable"],
          answerIndex: 0,
          explanation: "Niveles disparan conjuntos de optimizaciones."
        },
        {
          question: "Separación lexer/parser evita:",
          options: ["Mezclar reconocimiento de caracteres con gramática de tokens",
          "Cualquier tabla",
          "IR",
          "Diagnósticos"],
          answerIndex: 0,
          explanation: "Responsabilidades distintas y alfabeto distinto."
        },
        {
          question: "Diagnóstico con línea/columna proviene típicamente de:",
          options: ["Atributos de posición en tokens",
          "IR TAC",
          "Spill slots",
          "Opcode final"],
          answerIndex: 0,
          explanation: "El lexer/parser propagan localización."
        }
      ],
      exercises: [
        {
          id: 6801,
          instruction: "Lista las fases frontend/middle/backend y un artefacto de salida de cada una (tokens, AST, IR, asm).",
          placeholder: "Frontend: ...",
          expectedKeywords: ["frontend", "lexer", "parser", "backend", "IR"],
          hint: "Sigue el pipeline del diagrama del módulo.",
          isEmailSubmission: false
        },
        {
          id: 6802,
          instruction: "DESAFÍO: Compara en 5 viñetas cómo Clang y un intérprete Python difieren en dónde termina el frontend.",
          placeholder: "- Clang: ...",
          expectedKeywords: ["clang", "python", "parser", "compilador"],
          hint: "Python hace bytecode tras parsing; Clang genera LLVM IR.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 10,
      title: "MÓDULO 10: ANÁLISIS LÉXICO (LEXER / SCANNER)",
      description: "Transformación de texto plano en un flujo estructurado de Tokens mediante Expresiones Regulares.",
      items: [
      "Lexema vs token: patrón en fuente versus clase + atributos en flujo interno.",
      "Autómatas y regex en especificación declarativa de tokens (Flex, lexer hand-written).",
      "Prioridad y regla longest-match para resolver conflictos entre patrones solapados.",
      "Manejo de espacios, comentarios y directivas como tokens o skip handlers.",
      "Atributos sintácticos en token: valor literal, posición (línea/columna) para errores.",
      "Buffer de entrada y punteros sentinela; no retroceder más allá del lexema actual.",
      "Keywords: tabla reservadas versus reconocer ID y filtrar por hash.",
      "Errores léxicos: carácter ilegal, literal mal cerrado, overflow de entero en scan.",
      "Complejidad lineal O(n) en longitud del archivo con DFA de token combinado."
],
      content: "## Panorama del tema: ANÁLISIS LÉXICO — LEXER, TOKENS, REGEX Y DFA\n\nEl compilador recibe un archivo de texto plano: bytes con codificación UTF-8 o Latin-1, saltos de línea heterogéneos, comentarios que deben desaparecer para el parser, y cadenas donde `+++` podría ser incremento o tres operadores según el lenguaje. El **analizador léxico** (lexer, scanner) convierte ese flujo en **tokens** — unidades discretas con tipo, lexema y posición. Cada patrón de token se especifica con **expresión regular**; el motor compila regex a **NFA/DFA** (módulos 2–4) y escanea la entrada en un solo paso lineal (con longitud del texto).\n\nSin lexer robusto, el parser recibiría caracteres sueltos y explotaría en complejidad. Esta lección cubre diseño de tokens, prioridad de patrones, generadores Flex/Lex, y manejo de errores léxicos (caracteres ilegales, strings sin cerrar).\n\n## Objetivos de la lección\n\n- Definir token, lexema y posición (línea/columna).\n- Especificar patrones léxicos con regex y resolver conflictos de longitud y prioridad.\n- Explicar el pipeline regex → NFA → DFA → scanner.\n- Implementar mentalmente el lexer del snippet con `re.finditer`.\n- Diseñar mensajes de error léxicos útiles para el programador.\n\n## Desarrollo de la lección\n\n### Rol del lexer en el frontend\n\nEntrada: cadena de caracteres + convenciones del lenguaje (¿`--` es decremento o comentario estilo SQL?). Salida: secuencia `(tipo, lexema, línea, col)` consumida por el parser con **lookahead** limitado.\n\nEl lexer **no** verifica que `if` tenga paréntesis: solo emite `KW_IF`. La gramática CFG del parser agrupa tokens.\n\n### Estructura del token\n\nCampos mínimos:\n\n- **Tipo**: categoría abstracta (`NUMERO`, `ID`, `PLUS`, `EOF`).\n- **Lexema**: substring fuente que disparó el token (`\"while\"`, `\"42\"`, `\"total\"`).\n- **Posición**: para diagnósticos (`línea 12, columna 4`).\n- Opcional: valor semántico ya parseado (`int(42)`), literal de string ya sin escapes.\n\nSeparar tipo de lexema permite que muchos identificadores compartan `ID` mientras la tabla de símbolos distingue nombres.\n\n### Regex, prioridad y maximal munch\n\nCuando dos patrones coinciden, reglas estándar:\n\n1. **Prioridad explícita**: en Flex, reglas más arriba ganan; categoría `keyword` antes que `identifier`.\n2. **Longest match**: el lexer consume la secuencia más larga reconocible (evita que `<=` se tokenice como `<` y `=`).\n\nPalabras clave vs IDs: patrón `if` como keyword separado antes que `[a-zA-Z]+` para IDs.\n\n### Comentarios y espacios\n\nNo se emiten al parser. Se reconocen con regex (`//.*`, `/\\*[\\s\\S]*?\\*/`, `#.*`) y se descartan, pero el lexer actualiza contador de líneas en `\\n` dentro de comentarios multilínea.\n\n### De regex a DFA (repaso aplicado)\n\nThompson construye NFA por operador; subset construction → DFA; minimización opcional. `re` en Python hace esto internamente en `re.compile`. En producción, lexers críticos (Lex/Flex) precomputan tablas para evitar backtracking catastrófico.\n\n### Errores léxicos\n\n- Carácter ilegal (`@` en subconjunto del lenguaje).\n- String sin cerrar.\n- Número mal formado (`1.2.3`).\n- Estrategia: reportar error, saltar un carácter o hasta sincronizar, continuar para listar más errores.\n\n### Lexer como autómata: tabla de estados manual\n\nPara identificadores `[A-Za-z_][A-Za-z0-9_]*` y números `[0-9]+`, un scanner **sin regex engine** mantiene estado `IN_ID`, `IN_NUM`, `START`. En `START`, si lee letra → ID; dígito → NUM; espacio → ignorar; `+` → emite PLUS. Transiciones totalmente descriptibles como DFA del módulo 2.\n\nVentaja pedagógica del curso: implementar primero DFA a mano para entender por qué `re` es suficiente en producción.\n\n### Literales, escapes y strings\n\nC y Python permiten `\\n`, `\\t`, `\\xHH` dentro de strings. El lexer acumula caracteres entre comillas, procesa escapes en submáquina, emite token `STRING` con valor ya decodificado. Error clásico: olvidar consumir comilla de cierre — el lexer debe detectar EOF dentro de string y reportar error léxico, no sintáctico.\n\n### Flex: especificación `.l` en alto nivel\n\nArchivo Flex define patrones y acciones `{ return TOKEN_X; }`. Flex genera C optimizado equivalente a DFA minimizado. Regla **más larga primero** en listado de patrones replica prioridad del snippet Python.\n\n### Posición fuente y diagnósticos modernos\n\nIDEs muestran subrayados rojos; el compilador incluye `line:col` en cada token para que errores apunten exactamente. Mantener `lineno` en Flex es automático con directivas; en lexer manual incrementar en `\\n` y resetear columna o contar desde inicio de línea.\n\n### Resolución de conflictos `<<=` vs `<` `=`\n\nMaximal munch lee `<<=` como un token si el patrón compuesto está definido **antes** que `<` suelto. Diseño del orden de patrones en `patrones` del snippet debe imitar esta disciplina al extender el laboratorio con desplazamientos y comparaciones compuestas.\n\n## Demostración enlazada al código del módulo\n\nEl `lexer(codigo)` define `patrones` ordenados: `NUMERO`, `SUMA`, `MULT`, `ID`, `IGUAL`, `SKIP`.\n\n- Construye `tok_regex` con grupos nombrados `(?P<TIPO>patrón)`.\n- `re.finditer` recorre **maximal munch** según orden de alternancia en el regex unido por `|`.\n- `SKIP` absorbe espacios sin añadir token.\n\nPara `total = 100 + 50 * 2`: emite IDs, números, operadores; ignora espacios. **Orden de patrones importa**: si `ID` estuviera antes que palabra clave reservada, `while` sería ID.\n\nClase `Token` guarda tipo y valor; `__repr__` facilita depuración en consola.\n\n## Aplicaciones en sistemas reales\n\n**Flex en GCC**: historial del lexer C junto a Bison; hoy Clang usa lexer hand-written altamente optimizado con tablas.\n\n**Tree-sitter**: lexer incremental para editores; repro tokeniza solo regiones cambiadas en árboles de sintaxis.\n\n**Rust proc-macros**: no reemplazan el lexer principal, pero el frontend `rustc` tokeniza con reglas estrictas de Unicode identifiers.\n\n## Errores clásicos en examen\n\n- Pedir al lexer validar balanceo de paréntesis (tarea del parser).\n- Olvidar longest match en `<=` vs `<`.\n- No actualizar línea/columna al consumir `\\n`.\n- Usar regex greedy incorrecto en comentarios anidados (C no permite anidar `/* */`).\n- Confundir lexema con token type (`\"x\"` vs `ID`).\n\n## Preguntas de entrevista\n\n**P: ¿Por qué no tokenizar con split por espacios?**\n\n**R:** Operadores pegados a operandos (`a=5`), strings con espacios, y lexemas compuestos (`++`, `->`) requieren patrones regulares y autómata; split es insuficiente incluso para mini-lenguajes.\n\n**P: ¿Lexer a mano o generado?**\n\n**R:** Hand-written para control y velocidad (Clang, V8); Flex/Lex cuando la gramática léxica es estable y quieres tabla DFA explícita. Ambos son válidos en industria.\n\n## Estudio dirigido: lexer, tokens y regex\n\nImplementa a mano la tokenización de `total = 100 + 50 * 2` produciendo la misma lista que `lexer()` del módulo, pero sin `re`, usando el bucle estado-descrito en la lección. Compara longitud de código y tiempo de desarrollo frente a regex — entenderás por qué Flex existe.\n\nAñade al array `patrones` un token `RESTA` y un token `NUMERO_REAL` con regex `\\d+\\.\\d+`. Observa que debes declarar `NUMERO_REAL` **antes** que `NUMERO` si usas alternación greedy, o el lexer podría leer `3` y `.14` por separado. Escribe en tu informe el orden final que elegiste y por qué.\n\nPractica mensajes de error: inserta carácter `@` en la cadena fuente y diseña mensaje `carácter ilegal '@' en línea 1, columna 9`. El lexer debe llevar contador columna incrementando por caracteres consumidos, reset en `\n`.\n\nEstudia el teorema de Kleene como contrato: cada patrón del lexer es regular, el scanner completo es unión de lenguajes regulares disjuntos (idealmente) con prioridad resuelta por orden. Parser posterior es LLC del lenguaje completo; mezclar responsabilidades rompe modularidad.\n\nConecta con módulo 4: compilar regex a DFA antes de escanear da garantías de tiempo lineal evitando backtracking catastrófico de motores NFA ingenuos en patrones `(.+)+$`.\n\n### Ejercicio: mini especificación léxica de C\n\nLista tokens mínimos: `INT`, `FLOAT`, `ID`, `NUM_INT`, `NUM_FLOAT`, `PLUS`, `MINUS`, `STAR`, `SLASH`, `EQ`, `SEMI`, `LPAREN`, `RPAREN`, `LBRACE`, `RBRACE`, comentarios `//` y `/* */`, espacios SKIP. No implementes todo; solo prioriza patrones y escribe cinco casos de prueba con salida token esperada.\n\n## Profundización: ingeniería léxica en producción\n\nLos lexers industriales evitan retroceso innecesario con **buffer de sentinela** (un carácter extra al final de archivo que nunca coincide). Mantienen **posición de fuente** para mapas de línea en `#line` tras inclusión de headers.\n\n**Unicode** complica identificadores: Rust y Swift permiten UTF-8 en nombres con reglas XID; el lexer valida categorías Unicode, no solo ASCII `[A-Za-z]`. El token `ID` lleva lexema UTF-8 normalizado.\n\n**Compatibilidad de codificación** (UTF-8 vs Latin-1) se resuelve antes del lexer o con flag; errores de bytes inválidos son léxicos. Compilador Rust aborta temprano con mensaje claro.\n\n**Hashing de palabras clave**: tablas perfectas (gperf) mapean lexemas reservados a enums en O(1) tras calcular hash del literal. Evita comparar cadena contra lista larga de keywords en cada identificador.\n\n**Lexer modes** en Flex (`INITIAL`, `COMMENT`, `STRING`) modelan autómatas con producto de estados al cambiar contexto (dentro de cadena no tokenizar `//` como comentario).\n\nPráctica: tokeniza archivo de cien líneas del laboratorio y cuenta tokens por clase; grafica distribución para estimar presión en parser (muchos `NUM` vs `ID`).\n\n### Seguridad y lexer\n\nVulnerabilidades de **ReDoS** en regex de lexer mal diseñado pueden bloquear servidor que valida entradas con mismo motor que curso modulo 4. Defensa: diseñar regex linear-time, limitar tamaño de entrada, timeouts en servicios.\n\nExtiende clase `Token` con campos `line`, `col` y modifica `lexer()` para actualizarlos durante `finditer` calculando offset — preparación para mensajes de error módulo 11.\n\n\n## Práctica integral y cierre de unidad\n\nImplementa contador de línea y columna en una copia local del `lexer()` del módulo: ante cada match, calcula posición sumando longitudes de lexemas y saltos de línea previos en la cadena fuente. Usa tres casos multilínea con comentarios ficticios.\n\nConstruye tabla de decisión léxica para caracteres iniciales: si primer carácter es dígito, intenta `NUMERO`; si es letra, `ID`; etc. Explica equivalencia con DFA explícito.\n\nAñade token `MENOS` y verifica que `100 - 50` tokeniza correctamente sin confundirse con flecha `->` si más tarde agregas grammática de tipos.\n\nDiscute longitud máxima de lexema id en lenguajes industriales (algunos limitan por legibilidad o tabla hash). ¿Afecta al lexer?\n\nRelaciona token stream con codificación Unicode: mismo lexema visual con distinta normalización NFC/NFD puede romper comparación de keywords si no normalizas.\n\nPractica escribir regex para literales octales y hex de C (`0xFF`, `077`) en orden de prioridad correcta frente a `NUMERO` decimal.\n\nCierra comparando costo amortizado de escaneo lineal O(n) con tamaño de archivo típico de millones de caracteres: lexer rara vez es cuello de botella vs parser y análisis semántico en C++.\n\n## Monografía breve: el scanner como frontera del lenguaje\n\nEl lexer es la primera defensa contra entradas maliciosas o corruptas. Servicios que aceptan expresiones de usuario deben limitar tamaño de entrada y evitar patrones regex patológicos. La frontera léxica también desambigua conflictos entre lenguaje y datos: JSON estrictamente no admite comentarios; JavaScript sí. Dos lexers distintos, mismas herramientas.\n\nCada token es contrato con el parser: el parser no retrocede caracteres arbitrarios. Por eso emerger `++` como token único o dos veces `PLUS` altera la gramática reconocida. Coordinar decisiones léxicas con especificación del parser evita sorpresas en producción.\n\nLos comentarios y espacios existen para humanos; el parser no los ve. Documentar esto previene que alumnos intenten parsear cadenas crudas sin paso intermedio. Los mapas fuente (`#line 10`) reinyectan correspondencia con archivo original tras includes.\n\nEl laboratorio con `re.finditer` es legítimo pedagogicamente; industriales migran a tablas DFA precalculadas por velocidad y predictibilidad. Comprender ambos extremos hace al graduado adaptable.\n\nPractica adicional prolongada: recorre estándar de tu lenguaje favorito y lista veinte categorías léxicas; estima cuántas regex necesitarías y en qué orden deben declararse. Ese inventario demora una hora pero solidifica el módulo.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** Tokeniza `arr[i] = arr[i] + 1` con el lexer del módulo ampliado con corchetes. Solución esperada: secuencia `ID, LBRACK, ID, RBRACK, IGUAL, ID, LBRACK, ID, RBRACK, PLUS, NUMERO` según tokens añadidos; si no implementaste corchetes, discute qué fallaría.\n\n**Ejercicio 2.** Ordena patrones para que `123.45e-6` sea un solo literal flotante. Explica por qué `NUMERO` entero no debe consumir prefijo del flotante.\n\n**Ejercicio 3.** Diseña estrategia de error para cadena `foo @ bar` reportando columna del `@`.\n\n**Ejercicio 4.** Compara complejidad O(n) del escaneo con n=1e6 caracteres y tiempo aproximado si cada carácter es una transición DFA constante.\n\n**Ejercicio 5.** Describe diferencia entre lexema `while` y token `KW_WHILE` en compilador C.\n\nElabora respuestas en prosa en tu cuaderno; usa el snippet como referencia ejecutable para el caso simple.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nRecuerda que el laboratorio QuimiSell asume que el lexer emite tokens consumibles por un parser LL simple: cualquier token adicional que agregues (corchetes, punto y coma) debe documentarse en la gramática del parser del módulo 11. Mantén coherencia de nombres (`NUMERO` vs `NUM`) entre módulos. Si implementas posiciones, el semántico y el parser pueden reportar errores en la misma línea que el lexer usó, lo que mejora la experiencia del mini compilador. Extiende el conjunto de pruebas con literales negativos, operadores compuestos y archivos multilínea antes de considerar cerrado el módulo léxico.\n\n\n## Síntesis y checklist antes de avanzar\n\n- Definí tokens para una mini-expresión a mano.\n- Expliqué el papel de `SKIP` en el snippet.\n- Describí conflicto keyword vs ID y su solución.\n- Relacioné regex del módulo con DFA de teoría.\n- Listo para parser (módulo 11).",
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
          question: "Token vs lexema:",
          options: ["Lexema es texto concreto; token es clase + atributos",
          "Son sinónimos",
          "Token es carácter único siempre",
          "Lexema es tipo enum"],
          answerIndex: 0,
          explanation: "Flujo interno abstrae patrones."
        },
        {
          question: "Regla longest-match resuelve:",
          options: ["'>' vs '>>' en operadores compuestos",
          "Ambigüedad CFG",
          "SSA",
          "Parada MT"],
          answerIndex: 0,
          explanation: "Prefiere lexema más largo válido."
        },
        {
          question: "Orden de reglas en lexer importa cuando:",
          options: ["Patrones se solapan y prioridad rompe empates",
          "No hay regex",
          "Σ vacío",
          "Solo números pares"],
          answerIndex: 0,
          explanation: "Primera regla ganadora tras longest-match."
        },
        {
          question: "Keyword `if` versus identificador `iffy`:",
          options: ["Clasificar ID luego filtrar tabla reservadas o patrón priorizado",
          "Dos lexers separados obligatorios",
          "No distinguibles",
          "Solo con CYK"],
          answerIndex: 0,
          explanation: "Estrategias estándar con tabla de palabras reservadas."
        },
        {
          question: "Literal mal cerrado `'abc` sin comilla final es:",
          options: ["Error léxico",
          "Error de parse",
          "Warning SSA",
          "Spill"],
          answerIndex: 0,
          explanation: "Lexer detecta estado no terminal del autómata de literal."
        },
        {
          question: "DFA combinado de tokens se obtiene con:",
          options: ["Construcción de autómata producto/estado con prioridades",
          "CYK",
          "Parser LR",
          "Halting"],
          answerIndex: 0,
          explanation: "Simulación única sobre el archivo."
        },
        {
          question: "Espacios en blanco usualmente:",
          options: ["Se descartan o emiten token separado según diseño",
          "Detienen compilación",
          "Son terminales en CFG",
          "Generan IR"],
          answerIndex: 0,
          explanation: "Política del lenguaje."
        },
        {
          question: "Overflow al escanear INT_MAX+1:",
          options: ["Error léxico o semántico según política; lexer puede marcar rango",
          "Aceptar silenciosamente",
          "Parse shift",
          "φ-node"],
          answerIndex: 0,
          explanation: "Muchos compiladores reportan literal fuera de rango."
        },
        {
          question: "Complejidad del lexer sobre n caracteres:",
          options: ["O(n)",
          "O(n³)",
          "O(2ⁿ)",
          "O(n log n) siempre"],
          answerIndex: 0,
          explanation: "Un paso por carácter con DFA."
        },
        {
          question: "Depura: lexer emite ID para '123abc'. Causa:",
          options: ["Regla NUM mal priorizada o no cubre el caso",
          "Parser LR",
          "Linker",
          "Register alloc"],
          answerIndex: 0,
          explanation: "Patrones deben clasificar prefijos numéricos vs identificadores."
        }
      ],
      exercises: [
        {
          id: 6901,
          instruction: "Añade al lexer del módulo reconocimiento de números flotantes (dígitos, punto, dígitos). Define el nuevo token FLOAT.",
          placeholder: "TOKEN_FLOAT = ...",
          expectedKeywords: ["token", "float", "lexer", "def"],
          hint: "Extiende la máquina de estados o regex del lexer.",
          isEmailSubmission: false
        },
        {
          id: 6902,
          instruction: "DESAFÍO: Implementa recuperación de error léxico: ante carácter ilegal @, reporta línea/columna y continúa tokenizando.",
          placeholder: "def tokenize(...):",
          expectedKeywords: ["error", "linea", "columna", "tokenize"],
          hint: "Guarda line/col en el objeto token o en mensaje de error.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 11,
      title: "MÓDULO 11: ANÁLISIS SINTÁCTICO (PARSER) LL Y LR",
      description: "Construcción del Árbol de Sintaxis Abstracta (AST) mediante parsing Top-Down y Bottom-Up.",
      items: [
      "Parser predictive vs shift-reduce; token lookahead k en LL(k) y LR(k).",
      "FIRST/FOLLOW y tabla LL(1); conflictos indican gramática no LL(1).",
      "Construcción de tabla LR con estados de item sets y acciones shift/reduce/accept.",
      "LALR: fusión de estados LR(1) para tablas compactas en yacc/Bison.",
      "AST versus árbol de derivación concreto: nódalos abstractos sin símbolos ε.",
      "Precedencia de operadores vía niveles de producción o precedencia declarada.",
      "Errores syntax: panic mode, phrase recovery, y reporting con expectativas.",
      "Descenso recursivo: una función por no terminal; claro en laboratorios educativos.",
      "Validar que el flujo de tokens satisface la gramática antes de semántica."
],
      content: "## Panorama del tema: PARSER LL VS LR, AST Y DESCENSO RECURSIVO\n\nTras el lexer, el parser valida que la secuencia de tokens pertenezca al lenguaje definido por la **gramática libre de contexto** del lenguaje y construye una estructura jerárquica: idealmente un **AST** (árbol de sintaxis abstracta) para fases posteriores. Dos familias dominan la práctica: **LL** (descendente, predictive, left-to-right leftmost) y **LR** (ascendente, shift-reduce). Los parsers LL(1) manuales o recursivos encajan en cursos y DSLs pequeños; los **LALR(1)** de Yacc/Bison impulsan parsers de C, Java y SQL.\n\nEsta lección conecta FIRST/FOLLOW con decisiones LL, contrasta shift/reduce en LR, y recorre el parser descendente del snippet (con corrección mental del `peek`).\n\n## Objetivos de la lección\n\n- Explicar el contrato parser: tokens → AST.\n- Contrastar top-down (LL) y bottom-up (LR/LALR).\n- Calcular FIRST y FOLLOW en gramáticas pequeñas.\n- Implementar descenso recursivo para expresiones con precedencia.\n- Relacionar conflictos shift/reduce con ambigüedad gramatical.\n\n## Desarrollo de la lección\n\n### Rol del parser\n\nEl parser consume tokens con **un token de lookahead** (LL(1)) o **pila de estados** (LR). Detecta errores sintácticos (`else` sin `if`, paréntesis huérfanos). Salida: AST, árbol concreto, o directamente IR en compiladores de un solo paso.\n\n### LL(1) y descenso recursivo\n\nCada no terminal se vuelve función `parse_X()` que:\n\n1. Mira token actual.\n2. Elige producción según FIRST/FOLLOW.\n3. Consume tokens y llama recursivamente a sub-reglas.\n\n**FIRST(\\(\\alpha\\))**: terminales que pueden iniciar derivaciones de \\(\\alpha\\). **FOLLOW(A)**: terminales que pueden seguir a \\(A\\) en una derivación.\n\nCondición LL(1): para no terminal \\(A\\) con producciones \\(A \\rightarrow \\alpha_1 \\mid \\ldots \\mid \\alpha_k\\), los conjuntos FIRST de cada alternativa son **disjuntos** (y si \\(\\epsilon \\in\\) FIRST, no intersectan FOLLOW).\n\n### LR, shift y reduce\n\nAutomaton sobre **ítems** (reglas con punto ·). **Shift**: empujar token a la pila. **Reduce**: reemplazar handle en tope por no terminal. **Goto**: tras reducir, transicionar con el no terminal.\n\nConflicto **shift/reduce**: gramática no LR(1) sin precedencia declarada. **reduce/reduce**: más grave, ambigüedad dura.\n\nLALR fusiona estados LR(1) equivalentes — tablas más compactas, casi mismo poder en lenguajes reales.\n\n### AST vs árbol de derivación\n\nEl AST omite nodos puramente sintácticos (paréntesis redundantes, reglas de lista). Nodos típicos: `BinaryOp`, `Literal`, `Assign`, `If`. El visitor del módulo 12 y generador IR del 13 recorren AST.\n\n### Precedencia en descenso recursivo\n\nPatrón clásico por niveles:\n\n- `parse_expr` para suma/resta (asocia izquierda, llama a `parse_term`).\n- `parse_term` para mult/div.\n- `parse_factor` para números y paréntesis.\n\nEsto implementa la gramática no ambigua del módulo 6 sin tablas LL generadas.\n\n### Yacc/Bison\n\nEl desarrollador escribe reglas con acciones C; Bison genera parser LALR. Directivas `%left`, `%right` resuelven conflictos de precedencia sin reescribir toda la CFG.\n\n### Cálculo de FIRST y FOLLOW en miniatura\n\nGramática:\n\n```\nS → A\nA → aA | b\n```\n\n**FIRST(A)** = {a, b} porque ambas producciones empiezan con terminal. **FOLLOW(A)** en esta gramática trivial incluye `$` (fin de entrada) si \\(S\\) no aparece en cuerpos. Para añadir producción \\(\\epsilon\\):\n\n```\nA → aA | ε\n```\n\nEntonces \\(\\epsilon \\in\\) FIRST(A); en LL(1) la elección entre `a` y \\(\\epsilon\\) usa FOLLOW cuando lookahead no es `a`.\n\nConstruir tablas LL manualmente para 4–5 reglas es ejercicio de examen clásico: filas = no terminales, columnas = lookahead, celdas = regla a aplicar o error.\n\n### Tabla LR: intuición shift/reduce\n\nEn un autómata LR, cada estado codifica **ítems** como `E → E · + T` (punto marca progreso). Si el lookahead es `+` desde ítem completo `E → E + T ·`, el parser **reduce** a \\(E\\). Si vemos `+` esperando más, **shift** al siguiente estado. Conflictos significan la gramática no es LALR(1) pura sin ayuda de precedencia.\n\n### Descenso recursivo con precedencia completa\n\nEsqueleto para expresiones con `*`, `/`, `+`, `-`:\n\n```\nparse_expr(): t = parse_term(); while (tok == '+' or '-'): consume; t = parse_term(); t = new Add(...)\nparse_term(): f = parse_factor(); while (tok == '*' or '/'): ...\nparse_factor(): if number: return Literal; if '(': parse_expr(); consume ')'\n```\n\nCada nivel corresponde a un estrato de precedencia; no requiere tabla LL explícita pero **es equivalente** a gramática factorizada del módulo 6.\n\n### Errores sintácticos y panic mode\n\nAnte token inesperado, el parser puede **sincronizar** en `;` o `}` para seguir listando errores. Mensajes útiles incluyen «se esperaba TOKEN_RPAREN en línea L». Panic mode evita cascadas de falsos positivos tras un único error de sintaxis.\n\n## Demostración enlazada al código del módulo\n\n`ParserSimple` recibe lista de lexemas (strings). `parse_expresion` asume gramática plana `NUMERO ('+' NUMERO)*`:\n\n- Toma primer número como `left`.\n- Mientras el siguiente token sea `'+'`, consume y acumula `Add(left, right)` como **string** simulando AST.\n\nResultado para `10+20+30`: `Add(Add(10, 20), 30)` — **asociatividad izquierda** explícita.\n\n**Nota del snippet publicado**: la línea `def peek(` tiene sintaxis incorrecta en el curso (`(): return` mezclado); la intención es método `peek` que devuelve token actual sin consumir. Al corregirlo, el parser podría decidir con lookahead entre reglas.\n\nEl parser **no** implementa `*` ni precedencia; extender con `parse_term` es el ejercicio natural del laboratorio.\n\n## Aplicaciones en sistemas reales\n\n**Go compiler `gc`**: parser descendente recursivo escrito a mano — estilo LL con precedencia explícita.\n\n**PostgreSQL SQL parser**: gramática grande, tradicionalmente yacc/bison style para SQL complejo.\n\n**Python parser (PEG)**: desde 3.9+, parser PEG alternativo a LL/LR clásico; sigue emitiendo AST.\n\n## Errores clásicos en examen\n\n- Confundir LL con LR (dirección de construcción del árbol).\n- Olvidar que FOLLOW importa con producciones ε.\n- Creer que todo lenguaje LLC tiene parser LL(1) (falso: LL es subclase práctica).\n- No distinguir shift/reduce de reduce/reduce.\n- Parse tree = AST (falso).\n\n## Preguntas de entrevista\n\n**P: ¿LL o LR para un nuevo DSL interno?**\n\n**R:** LL/recursivo si el equipo quiere código legible y gramática pequeña; LR/Bison si la gramática es grande, con mucha precedencia, o se aporta tabla automática. Muchos DSLs empiezan LL manual.\n\n**P: ¿Qué es el lookahead en LL(1)?**\n\n**R:** Un token de inspección sin consumir para elegir la producción correcta; los conjuntos FIRST/FOLLOW formalizan esa decisión.\n\n## Estudio dirigido: parsers LL y LR\n\nCalcula FIRST y FOLLOW para la gramática de expresiones del módulo 6 con tres niveles \\(E,T,F\\). Verifica condición LL(1) en cada conjunto de alternativas. Si no hay conflictos, escribe pseudocódigo `parse_E()` llamando `parse_T()`.\n\nSimula manualmente una tabla LR diminuta (dos ítems) para la cadena `num + num`: anota pasos shift/reduce en tabla de dos columnas «pila de estados» y «entrada». Aunque incompleta, la simulación fija la intuición bottom-up.\n\nCorrige mentalmente el método `peek` del snippet a `def peek(self): return self.tokens[self.pos] if self.pos < len(self.tokens) else None` y describe cómo usarlo para elegir entre alternativas si extendieras la gramática.\n\nImplementa precedencia multiplicación sobre suma extendiendo el parser con `parse_term` que consume `*` entre factores. Muestra AST de `1+2*3` correctamente anidado (`Add(1, Mul(2,3))`) si asocias `parse_expr` a sumas y `parse_term` a productos.\n\nContrasta error de sintaxis vs léxico: `+ 3` falla en parser (esperaba factor), `3 @ 4` falla en lexer. Prepara ejemplo de cada uno para examen oral.\n\n### Cuándo elegir generador automático\n\nUsa Bison cuando la gramática supera veinte producciones o tiene conflictos resueltos solo por precedencia. Mantén descendente recursivo para lenguajes de configuración (JSON corto, expresiones del laboratorio). La decisión es de mantenibilidad del equipo, no teoría pura.\n\n## Profundización: parsing en el ecosistema real\n\n**LALR(1)** es casi el estándar de parsers generados; conflictos reportados por Bison deben resolverse con precedencia o reescritura gramatical. Ignorarlos produce parser que elige shift o reduce arbitrariamente — bugs espectrales en compiladores caseros.\n\n**GLR** y **Earley** parsean gramáticas ambiguas o grandes familias LLC con más costo, usados en análisis de lenguajes naturales y algunos IDEs.\n\n**Parser combinators** (Haskell, Rust nom) expresan gramática como funciones composables; equivalentemente LLC si no abusas de recursión sin límite. Errores de stack overflow en JSON ingenuo recursivo conectan con profundidad del parser.\n\n**Recuperación de errores** avanzada: **phrase-level recovery** inserta o borra tokens para continuar; IDEs muestran múltiples diagnósticos gracias a parser resistente (Rust `rustc`).\n\n**AST desacoplado**: biblioteca separada (Clang AST, Rust `syn`) permite linters sobre árbol sin ejecutar backend.\n\nPractica construcción de tabla LL a mano para gramática de tres producciones; implementa `parse_table[(A, la)] = prod_index`.\n\nExtiende `ParserSimple` para rechazar cadena vacía o `+ 3` devolviendo error estructurado en lugar de excepción index.\n\n### Métricas de parsers\n\nComplejidad: LL(1) lineal en tokens con tabla constante; LR similar. Backtracking ingenuo sin memo puede exponencial en cadena longitud n — motivación para tablas predictivas.\n\nLaboratorio: serializa AST resultante a JSON indentation para depuración visual antes de TAC.\n\n\n## Práctica integral y cierre de unidad\n\nCompleta tabla LL a mano para gramática `E → T E'`, `E' → + T E' | ε`, `T → F T'`, `T' → * F T' | ε`, `F → (E) | num`. Verifica sin conflictos. Escribe funciones `parse_E`, `parse_T`, `parse_F` en pseudocódigo.\n\nSimula parse LR para `num * num + num` indicando cada shift (símbolo empujado a pila) y reduce (producción aplicada). Comprueba que el árbol resultante asocia multiplicación más profundo que suma.\n\nCorrige el snippet `ParserSimple` agregando validación de entrada vacía y token inesperado al inicio; documenta casos prueba.\n\nContrasta panic mode con error nodes en AST: algunos IDEs insertan nodo `Error` para colorear resaltado mientras el usuario edita.\n\nExplica por qué gramática de JSON simple es LL(1) y por qué extensión con comentarios o trailing commas requiere cuidado en grammars de producción.\n\nDescribe cómo ANTLR con left-recursion directa evita transformar gramáticas en algunos casos modernos.\n\nPrepara respuesta de entrevista de dos minutos: diferencias LL vs LR sin jerga excesiva, con ejemplo de dirección del árbol.\n\nIntegración laboratorio: serializa AST a s-expression antes de generar TAC para depurar precedencia visible en consola.\n\n## Monografía breve: parsear es construir significado estructural\n\nParsing sin AST es incompleto: la estructura jerárquica es lo que consume el semántico. Gramáticas ambiguas no solo molestan en teoría; producen árboles que interpretan operaciones en orden incorrecto. La industria invierte en gramáticas factorizadas y en generadores maduros porque el costo de bugs sintácticos silenciosos es altísimo en compiladores masivos.\n\nLL favorece legibilidad del código del parser; LR favorece cobertura de gramáticas más ricas sin reescrituras constantes. No hay ganador absoluto: Go eligió hand-written recursive descent; GCC históricamente yacc; ambos producen software en producción.\n\nLa recuperación de errores distingue herramientas educativas de compiladores de IDE. El estudiante puede abortar al primer error; el producto debe listar decenas de fallos en archivos generados automáticamente.\n\nFIRST/FOLLOW no son fetichismo académico: codifican la misma decisión que función `peek` en descenso recursivo LL. Dominarlos te permite depurar por qué tabla LL marca conflicto.\n\nIntegración final del módulo con el laboratorio: al cerrar parser, imprime árbol; confirma asociatividad; solo entonces avanza a tabla de símbolos. Saltar validación visual del árbol es causa frecuente de bugs en TAC posterior.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** Derivación leftmost de `num + num * num` con gramática E/T/F factorizada.\n\n**Ejercicio 2.** ¿La gramática es LL(1)? Justifica con FIRST/FOLLOW de E.\n\n**Ejercicio 3.** Simula dos pasos shift del parser LR sobre `num +`.\n\n**Ejercicio 4.** Extiende ParserSimple para rechazar `+ 1` explicando mensaje.\n\n**Ejercicio 5.** Compara árbol concreto vs AST para `if (0) x=1;`.\n\nResuelve cada item antes de mirar soluciones de compañeros; el objetivo es fluidez en notación, no memorizar.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nPractica escribir el AST como s-expression y verifica que `1+2*3` tenga `Mul` más profundo que `Add`. Prepara para el módulo 13: el visitor que genera TAC debe recorrer ese mismo árbol en postorden.\n\nEl parser es donde la CFG del módulo 6 se materializa en estructura manipulable. Si el árbol anida mal productos y sumas, corrige precedencia antes de culpar al generador TAC. Documenta en tu repositorio tres cadenas aceptadas y tres rechazadas con la razón sintáctica en cada caso. Si usas descenso recursivo, cada función `parse_*` debe corresponder a un no terminal de tu gramática escrita en apuntes.\n\n\nAdemás, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.\n\n## Síntesis y checklist antes de avanzar\n\n- Calculé FIRST de un no terminal simple.\n- Tracé shift/reduce en una tabla mini LR de dos reglas.\n- Ejecuté ParserSimple y expliqué asociatividad izquierda.\n- Esbocé extensión con `*` y precedencia.\n- Listo para análisis semántico (módulo 12).",
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
          question: "Parser LL(1) consulta:",
          options: ["Siguiente token de lookahead",
          "Dos pilas de MT",
          "Solo semántica",
          "IR final"],
          answerIndex: 0,
          explanation: "Un token de anticipación en la variante LL(1)."
        },
        {
          question: "Conflicto shift/reduce en tabla LR indica:",
          options: ["Gramática no LR (o errores en construcción)",
          "Lexer falló",
          "Lenguaje no CF",
          "Tipos incompatibles"],
          answerIndex: 0,
          explanation: "Tabla inconsistente para la gramática."
        },
        {
          question: "FIRST(α) contiene:",
          options: ["Terminales que pueden iniciar derivaciones de α",
          "Todos los no terminales",
          "Follow de S",
          "Solo ε"],
          answerIndex: 0,
          explanation: "Conjunto predictivo clásico."
        },
        {
          question: "LALR difiere de LR(1) en:",
          options: ["Fusión de estados con kernels iguales",
          "Usar regex",
          "Eliminar pila",
          "Ser LL"],
          answerIndex: 0,
          explanation: "Tablas más compactas con posible conflicto residual controlado."
        },
        {
          question: "AST para `a+b*c` sin ambigüedad usa:",
          options: ["Gramática con niveles de precedencia o precedencias en parser",
          "Solo regex",
          "CYK manual",
          "DFA"],
          answerIndex: 0,
          explanation: "Multiplica más ajustado que suma."
        },
        {
          question: "Descenso recursivo: cada no terminal suele mapear a:",
          options: ["Una función de parsing",
          "Un opcode",
          "Un registro",
          "Un φ"],
          answerIndex: 0,
          explanation: "Patrón pedagógico directo."
        },
        {
          question: "Acción reduce en LR significa:",
          options: ["Aplicar producción y reemplazar tope de pila por LHS",
          "Leer otro carácter",
          "Emitir asm",
          "Cerrar archivo"],
          answerIndex: 0,
          explanation: "Paso reduce según handle."
        },
        {
          question: "Depura: parse OK pero árbol plano para expresiones. Causa:",
          options: ["Gramática sin reflejar precedencia/asociatividad",
          "Lexer omitido",
          "SSA mal",
          "Linker"],
          answerIndex: 0,
          explanation: "Producciones planas generan AST incorrecto."
        },
        {
          question: "Item LR [A → α·β, a] anticipa:",
          options: ["Terminal viable siguiente en el contexto",
          "Solo ε",
          "Registro RAX",
          "Tipo int"],
          answerIndex: 0,
          explanation: "Información LR(1) para cerrar acciones."
        },
        {
          question: "Aceptación en parser LR ocurre cuando:",
          options: ["Se reduce a S y se consumió $ de entrada",
          "Lexer termina",
          "Spill ocurre",
          "φ insertado"],
          answerIndex: 0,
          explanation: "Condición estándar con sentinel."
        }
      ],
      exercises: [
        {
          id: 7001,
          instruction: "Escribe gramática LL(1) para expresiones solo con + y identificadores; calcula FIRST(E) y FOLLOW(E).",
          placeholder: "FIRST(E) = ...",
          expectedKeywords: ["FIRST", "FOLLOW", "LL", "E"],
          hint: "E → E + T | T sin recursion izquierda o versión desambiguada.",
          isEmailSubmission: false
        },
        {
          id: 7002,
          instruction: "DESAFÍO: Implementa función parseExpr() por descenso recursivo que construya un AST para '1+2*3' respetando precedencia.",
          placeholder: "def parseExpr():",
          expectedKeywords: ["parse", "AST", "recursiv", "precedencia"],
          hint: "parseTerm y parseFactor como en Pratt/climbing.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 12,
      title: "MÓDULO 12: ANÁLISIS SEMÁNTICO Y TABLAS DE SÍMBOLOS",
      description: "Verificación de tipos, alcance de variables (Scope) y validación semántica sobre el AST.",
      items: [
      "Ámbitos anidados: stack de tablas de símbolos o árbol de scopes.",
      "Entradas: nombre, tipo, categoría (var/func), offset, dirección para codegen.",
      "Verificación de tipos: compatibilidad en asignaciones, llamadas y conversiones.",
      "Reglas semánticas en atributos sintetizados/heredados o visitas al AST.",
      "Binding: resolver identificadores a declaraciones únicas en cadena de scopes.",
      "Comprobación de aridad y tipos en llamadas; firma de funciones sobrecargadas.",
      "Análisis de flujo de control elemental: return en funciones, break/continue en bucles.",
      "Errores semánticos no capturados en parse: tipos, variables no declaradas, shadowing.",
      "Decorar AST con tipos y direcciones para fases de IR y codegen."
],
      content: "## Panorama del tema: ANÁLISIS SEMÁNTICO, TABLA DE SÍMBOLOS, SCOPE Y TYPE CHECKING\n\nLa sintaxis puede ser perfecta y el programa seguir siendo inválido: usar una variable no declarada, sumar `int` con `string`, o referirse a un campo privado desde otro módulo. El **análisis semántico** asigna **significado** al AST: tipos, alcances (scope), visibilidad, compatibilidad de operadores. La **tabla de símbolos** es la estructura de datos central: un mapa de nombres a entradas con tipo, categoría (variable, función, tipo), dirección o offset, y metadatos de compilación.\n\nA diferencia del parser (CFG), muchas reglas semánticas **no** son libres de contexto puras: declara antes de usar, herencia de tipos en clases — a veces se modelan con gramáticas atribuidas o chequeos en visitor post-parse.\n\n## Objetivos de la lección\n\n- Definir tabla de símbolos y operaciones insert/lookup.\n- Implementar scope anidado con pila de tablas o árbol de scopes.\n- Explicar verificación de tipos (reglas de tipado, coerciones).\n- Distinguir errores semánticos de sintácticos y léxicos.\n- Recorrer el snippet de chequeo de tipos del módulo.\n\n## Desarrollo de la lección\n\n### Fases del analizador semántico\n\nTípicamente dos pasadas (pueden fusionarse):\n\n1. **Construcción de símbolos**: recorre declaraciones, llena tabla (funciones, variables globales, tipos).\n2. **Chequeo**: recorre cuerpos, valida usos, infiere o verifica tipos de expresiones.\n\nEn C, la primera pasada registra firmas; en Java, resolución de tipos puede requerir grafo de dependencias entre clases.\n\n### Tabla de símbolos\n\nCada entrada puede contener:\n\n- Nombre y categoría (`var`, `func`, `param`, `typedef`).\n- Tipo (estructura compuesta: puntero, array, función).\n- Scope level o enlace a scope padre.\n- Para codegen: offset en stack frame, tamaño, etiqueta assembly.\n- Flags: `const`, `static`, `mutable`.\n\nOperaciones:\n\n- **insert(name, entry)** — falla si duplicado en mismo scope (salvo sobrecarga con mangling).\n- **lookup(name)** — busca desde scope actual hacia afuera (regla léxica de scope).\n\n### Scope estático vs dinámico\n\nLa mayoría de lenguajes imperiales usan **scope léxico/estático**: el significado de `x` se deduce del texto anidado en tiempo de compilación. **Scope dinámico** (raro: algunas Lisp históricas, macros): el significado depende de la pila de llamadas en runtime.\n\nImplementación clásica: **pila de hash maps**. Entrar bloque → push mapa vacío; salir → pop. Lookup consulta de arriba a abajo.\n\n### Type checking\n\nReglas de forma:\n\n- \\(\\Gamma \\vdash e : T\\) — «en contexto \\(\\Gamma\\), expresión \\(e\\) tiene tipo \\(T\\)».\n\nPara binarios: exigir tipos compatibles; resultado según tabla (`int + int → int`). Subtipos: si `Dog <: Animal`, asignar `Dog` donde se espera `Animal`.\n\n**Coerciones implícitas** (promoción int→float) se insertan como nodos cast en AST decorado.\n\nErrores comunes reportados aquí: cantidad de argumentos, tipos de retorno en `return`, condicionales no booleanos.\n\n### Análisis de flujo de control (introducción)\n\nAvisos: variable leída antes de asignar, código inalcanzable, paths sin return. Algunos compiladores tratan warnings como errores con `-Werror`.\n\n### Interacción con código generador\n\nEl AST tipado alimenta IR: cada nodo sabe su tipo para elegir instrucciones (`imul` vs `fmul`) y tamaños.\n\n### Ejemplo de shadowing y resolución léxica\n\n```c\nint x = 1;\n{\n    float x = 3.14;\n    x = x + 1; // ¿cuál x?\n}\n```\n\nEl bloque interno declara **nueva** entrada en la tabla del scope hijo; el `x` en la suma interna resuelve al `float` local. El `x` externo permanece oculto hasta cerrar el bloque (pop de tabla). El generador de código usa **offsets distintos** en frames separados conceptualmente o el mismo frame con slots diferentes.\n\n### Sobrecarga y mangling (visión C++)\n\nEn C++, `foo(int)` y `foo(float)` comparten nombre fuente; la tabla almacena símbolos **mangled** (`_Z3fooi`, `_Z3foof`). El semantic analyzer elige la coincidencia mejor según tipos de argumentos (resolución de sobrecarga), tarea más pesada que lookup simple del snippet Python.\n\n### Registros asociados a declaraciones\n\nEn `int arr[10];`, la entrada de tabla guarda tipo array, longitud, tamaño 40 bytes. En `void f(int x)`, la entrada de parámetro indica offset en stack frame o registro argumento según ABI. **forward declaration** de función inserta firma incompleta; la definición posterior completa cuerpo y parámetros.\n\n### Análisis semántico del snippet `TablaSimbolos`\n\n```python\ntabla.declarar(\"contador\", \"int\")\ntabla.obtener_tipo(\"contador\")\n```\n\n- `declarar` lanza si la clave existe — modela redeclaración ilegal en mismo scope.\n- `obtener_tipo` lanza si falta — modela «variable no declarada» en use site.\n\nExtensión natural: método `entrar_scope` / `salir_scope` con `dict` anidados; `lookup` sube la cadena. En chequeo de expresión `Id(node)`, llamar `obtener_tipo(node.name)` y adjuntar al nodo `node.inferred_type`.\n\n### Errores múltiples y recuperación\n\nCompiladores producen listas de diagnósticos: «línea 5: tipo incompatible», «línea 9: identificador no declarado». El semantic analyzer puede insertar tipo **error** en nodos fallidos para que el codegen omita esa rama pero continúe verificando el archivo — mejor experiencia en IDE.\n\n## Demostración enlazada al código del módulo\n\nEl snippet del curso modela `TablaSimbolos` con diccionario interno y métodos `declarar` / `consultar`. El chequeo compara tipos de operandos en asignaciones y operaciones — patrón visitor minimalista.\n\nAl recorrer AST de asignación `x = expr`:\n\n1. `consultar('x')` debe existir y ser asignable.\n2. Tipo de `expr` debe ser compatible con tipo de `x`.\n3. Si éxito, marcar variable como «definitivamente asignada» en análisis de flujo simple.\n\nExtender con **pila de scopes**: al entrar en función, nuevo dict; `declarar` solo en tope; `consultar` busca en cadena de dicts.\n\n## Aplicaciones en sistemas reales\n\n**TypeScript**: análisis semántico rico (tipos estructurales, inferencia) antes de emitir JS.\n\n**mypy / Pyright**: type checking opcional sobre Python; tabla de símbolos + inferencia gradual.\n\n**Rust borrow checker**: fase después del tipado; semántica de lifetimes (más allá de «tipos clásicos»).\n\n## Errores clásicos en examen\n\n- Buscar símbolo solo en scope global (olvida shadowing local).\n- Permitir redeclaración en mismo scope sin error.\n- Confundir nombre de tipo con variable.\n- Olvidar que `lookup` en C++ puede devolver sobrecargas múltiples.\n- Mezclar tabla de símbolos con tabla de parse LR (distintas).\n\n## Preguntas de entrevista\n\n**P: ¿Cómo modelas shadowing?**\n\n**R:** Pila de tablas: insert en tope; lookup desde tope hacia abajo devuelve el binding más interno visible léxicamente.\n\n**P: ¿Semántico vs sintaxis en `x = ;`?**\n\n**R:** Sintaxis: falta expresión tras `=`. Semántico sería `x = y` con `y` no declarado o tipos incompatibles con sintaxis válida.\n\n## Estudio dirigido: semántica y tabla de símbolos\n\nExtiende `TablaSimbolos` con pila de scopes: al entrar en bloque ficticio `{`, push dict; al salir, pop. Simula el programa con declaración global `int x` y local `float x` imprimiendo qué tipo devuelve `lookup(\"x\")` en cada punto.\n\nDiseña reglas de tipado para el mini lenguaje del laboratorio: `NUM` es int, `+` y `*` requieren operandos int, asignación exige compatibilidad. Escribe juicio `Stmt` para `id = Expr` formalmente en tres líneas.\n\nClasifica errores: `int x; x = true;` semántico; `int x x;` sintáctico; `int x = @3;` léxico. Repite con variantes propias hasta automatizar la clasificación.\n\nAnaliza qué información debe persistir en objeto `.o` del símbolo `f` definido `static` en C: visibilidad linkage interna — puente conceptual a enlazador módulo 15.\n\nDecora un AST dibujado a mano con anotaciones de tipo en cada nodo expresión tras chequeo. Ese dibujo es el «Annotated AST» que el generador TAC consumirá.\n\n### Doble pasada vs una pasada\n\nAlgunos compiladores fusionan construcción de tabla y chequeo en un solo recorrido con forward declarations registradas como `SymbolIncomplete`. Enumera ventajas (rapidez) e inconvenientes (mensajes de error menos ordenados) frente a dos pasadas claras.\n\n## Profundización: semántica estática avanzada\n\n**Inferencia de tipos** (Hindley-Milner) resuelve tipos sin anotar cada variable; unificador une ecuaciones de tipos. Python con mypy se acerca gradualmente. Contrasta con C donde tipos deben declararse explícitamente salvo `auto`.\n\n**Subtipado estructural** (TypeScript): dos interfaces con mismos campos son compatibles aunque nombres difieran. Tabla de símbolos guarda forma de tipos, no solo nombre alias.\n\n**Lifetime** (Rust) y **borrow checking** son análisis posteriores al tipado clásico pero antes de codegen — tercera ola de «semántica estática».\n\n**Ámbito de bloque** en JavaScript (let/const) vs var (hoisting): semántica distinta con mismo parser; tabla debe modelar temporal dead zone.\n\n**Overloading de funciones** requiere resolución al punto de llamada con candidatos viables y mejor conversión aplicable — tabla indexada por nombre con listas sobrecargas.\n\nPrueba `tabla.declarar(\"x\",\"int\"); tabla.declarar(\"x\",\"int\")` y captura excepción; luego implementa sobrecarga con clave `(nombre, firma)`.\n\nEjercicio: recorre AST hipotético de llamada `f(1,\"a\")` verificando firma almacenada contra argumentos.\n\n### Marca vs binding\n\nEn C, `typedef` introduce nombre de tipo; no debe confundirse con variable en lookup. En compiladores reales hay namespaces separados de tags, tipos y valores.\n\n\n## Práctica integral y cierre de unidad\n\nImplementa stack de scopes sobre `TablaSimbolos` del snippet con métodos `push_scope`, `pop_scope`, `declare`, `lookup` que recorre scopes de arriba hacia abajo.\n\nDefine reglas de coerción mínimas: `int` a `float` permitida en asignación con advertencia opcional; `string` a `int` prohibida.\n\nSimula chequeo de llamada `f(a,b)` contra declaración `f(int x, float y)` con argumentos en orden; detecta error de tipo en segundo argumento.\n\nClasifica diez fragmentos de código inventados en error léxico/sintáctico/semántico; mezcla dominios aritméticos y declaraciones.\n\nExplica diferencia entre variable no declarada y variable declarada pero fuera de scope (shadowing oculto vs ausencia total).\n\nDescribe cómo compilador C++ maneja enlaces `extern` vs `static` en tabla extendida con linkage field.\n\nAnaliza decoración de AST: cada nodo `Num` recibe tipo `int`; nodo `Add` infiere tipo máximo de hijos si defines promoción.\n\nExtension AVANZADA: sketch de inferencia para `let x = 10` sin tipo explícito asignando `int` por literal.\n\nCierra enlazando con módulo 13: solo AST tipado debe emitir TAC con operadores acorde a tipo (`fadd` vs `add`).\n\n## Monografía breve: la tabla de símbolos como memoria del compilador\n\nDurante compilación, la tabla de símbolos es la base de datos efímera del programa. No confundir con tablas del parser LR (acciones shift/reduce). Las entradas acumulan tamaño, alineación, número de registro asignado después, visibilidad linkage.\n\nLa semántica estática atrapa errores que pruebas dinámicas tardías podrían no cubrir. Tipos incorrectos en millones de líneas cuestan horas; el compilador los encuentra en segundos. Por eso lenguajes con tipos rígidos prefieren fallar temprano.\n\nShadowing y redes de scopes modelan la estructura léxica del bloque. Cada apertura de llave incrementa profundidad; cada cierre la reduce. Visualizar pila de tablas como pilas de platos ayuda a estudiantes visuales.\n\nEl snippet `TablaSimbolos` es mínimo pero correcto en invariantes de redeclaración y uso. Tu trabajo es extender sin romper: cada método nuevo debe preservar consistencia en push/pop.\n\nLa decoración de AST prepara IR: nodos sin tipo inferido obligan al generador a suponer int por defecto — fuente de bugs. Completar tipos antes de TAC es invariante de pipeline.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** Tabla con scopes para triple bloque anidado con redeclaración legal e ilegal.\n\n**Ejercicio 2.** Tipo inferido para `let x = 3 + 4.5` en sistema con promoción int→float.\n\n**Ejercicio 3.** Error semántico vs sintáctico: clasifica cinco fragmentos.\n\n**Ejercicio 4.** Extiende snippet con `lookup` recursivo en pila de scopes.\n\n**Ejercicio 5.** ¿Qué guarda la tabla para función `int f(int x)`?\n\nDocumenta decisiones de diseño si implementas overload.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nClasifica nuevamente diez fragmentos de código en errores léxico, sintáctico y semántico. Si el analizador semántico corre después del parser, asegúrate de no ejecutar codegen cuando la tabla contiene símbolos con tipo error.\n\nLa tabla de símbolos alimenta offsets y decisiones de backend; sin scopes correctos el laboratorio solo sirve para programas de un bloque. Implementa pila de ámbitos como mejora prioritaria si aún no la tienes. Verifica que `declarar` y `obtener_tipo` del snippet se comportan como esperas ante redeclaración y uso antes de declarar.\n\n\nAdemás, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.\n\nVuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.\n\n## Síntesis y checklist antes de avanzar\n\n- Implementé mentalmente push/pop de scope.\n- Escribí tres reglas de tipado para `+`, asignación, llamada.\n- Diferencié léxico/sintaxis/semántica con un ejemplo cada uno.\n- Revisé snippet de tabla de símbolos del módulo.\n- Listo para IR y TAC (módulo 13).",
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
          question: "Tabla de símbolos en scope anidado se implementa con:",
          options: ["Pila de tablas o árbol de scopes",
          "Solo hash global",
          "Pila LR",
          "Registros físicos"],
          answerIndex: 0,
          explanation: "Entrar/salir scope empuja/oculta niveles."
        },
        {
          question: "Shadowing de variable:",
          options: ["Declaración interna oculta homónima externa en su bloque",
          "Error siempre",
          "Igual que redefinición global ilegal",
          "Problema del linker"],
          answerIndex: 0,
          explanation: "Resolución por cadena de scopes."
        },
        {
          question: "Chequeo `x + true` en lenguaje tipado estático falla por:",
          options: ["Tipos incompatibles en la adición",
          "Lexer",
          "Parada MT",
          "Spill"],
          answerIndex: 0,
          explanation: "Reglas semánticas de operadores."
        },
        {
          question: "Atributos sintetizados:",
          options: ["Se calculan ascendiendo en el AST",
          "Vienen solo del padre",
          "Son tokens",
          "Son opcodes"],
          answerIndex: 0,
          explanation: "Información fluye de hijos a padre."
        },
        {
          question: "Binding de llamada foo(a,b) requiere:",
          options: ["Coincidencia de aridad y tipos de parámetros con firma",
          "Solo nombre",
          "Solo regex",
          "CYK"],
          answerIndex: 0,
          explanation: "Semántica de invocación."
        },
        {
          question: "Variable usada antes de declarar en mismo bloque:",
          options: ["Error semántico",
          "OK siempre",
          "Lexer error",
          "Linker"],
          answerIndex: 0,
          explanation: "Reglas de orden de declaración del lenguaje."
        },
        {
          question: "Decoración del AST con tipos sirve para:",
          options: ["IR y codegen posteriores",
          "Solo formato",
          "Ejecutar regex",
          "DFA"],
          answerIndex: 0,
          explanation: "Propagación hacia generación."
        },
        {
          question: "Depura: símbolo global no visible en función. Causa:",
          options: ["Scope no enlazó correctamente o falta `extern`/declaración",
          "Parser shift",
          "φ faltante",
          "Overflow literal"],
          answerIndex: 0,
          explanation: "Enlace entre tablas y política de visibilidad."
        },
        {
          question: "Conversión implícita int→float en suma es:",
          options: ["Regla de promoción en chequeo semántico",
          "LR action",
          "Token",
          "Spill"],
          answerIndex: 0,
          explanation: "Coerciones definidas en estándar del lenguaje."
        },
        {
          question: "`return` fuera de función es:",
          options: ["Error semántico/contextual",
          "Lexer",
          "Optimización",
          "Opcode NOP"],
          answerIndex: 0,
          explanation: "Restricción de estructura del programa."
        }
      ],
      exercises: [
        {
          id: 7101,
          instruction: "Simula tabla de símbolos con dict anidado: declare 'x' en global y 'y' en bloque interno; lookup de 'y' fuera del bloque debe fallar.",
          placeholder: "class SymbolTable: ...",
          expectedKeywords: ["scope", "symbol", "tabla", "def"],
          hint: "Pila de diccionarios o estructura parent pointer.",
          isEmailSubmission: false
        },
        {
          id: 7102,
          instruction: "DESAFÍO: Escribe reglas de type checking para suma (int+int) y error (string+int) como pseudocódigo del visitor semántico.",
          placeholder: "def visit_BinOp(...):",
          expectedKeywords: ["type", "check", "error", "visit"],
          hint: "Compara tipos de hijos del AST.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 13,
      title: "MÓDULO 13: GENERACIÓN DE CÓDIGO INTERMEDIO (IR & TAC)",
      description: "Traducción a representaciones intermedias independientes de la arquitectura (Código de 3 Direcciones).",
      items: [
      "IR como representación independiente de CPU y sintaxis superficial.",
      "TAC: cuádruplas (op, arg1, arg2, result) o tríadas con punteros compartidos.",
      "Temporales generados por traducción de expresiones en orden de evaluación.",
      "SSA: cada asignación define un nombre único; φ-nodos en uniones de control.",
      "Formas de procedimientos: activation records, parámetros en IR de llamadas.",
      "Traducción de if/while: etiquetas, saltos condicionales y bloques básicos.",
      "Literales y direcciones de variables globales/locales en operandos del IR.",
      "Verificar IR antes de optimizar: SSA inconsistente o temporales no definidos.",
      "Puente a LLVM: mismo rol conceptual que TAC del laboratorio del curso."
],
      content: "## Panorama del tema: CÓDIGO INTERMEDIO — IR, TAC Y CUÁDRUPLAS\n\nTras validar tipos, el compilador no salta directamente a `mov rax, ...`. Introduce una **representación intermedia** (IR) independiente de la sintaxis y del hardware: facilita optimización, análisis y backends múltiples. Formas clásicas: **código de tres direcciones** (TAC) — cada instrucción tiene a lo sumo dos operandos fuente y un destino — y **cuádruplas** — tuplas `(op, arg1, arg2, result)` fáciles de serializar y optimizar.\n\nLLVM IR, GCC GIMPLE, o las listas `t0 = a + b` del laboratorio comparten el espíritu: variables temporales ilimitadas, saltos explícitos, memoria modelada abstractamente.\n\n## Objetivos de la lección\n\n- Motivar IR frente a AST y frente a assembly.\n- Definir TAC y cuádruplas con ejemplos.\n- Generar TAC desde AST de expresiones y asignaciones.\n- Mencionar SSA como evolución de IR para optimización.\n- Leer el generador TAC del snippet del módulo.\n\n## Desarrollo de la lección\n\n### ¿Por qué IR?\n\n- **Desacopla** frontend de backend.\n- **Uniforma** optimizaciones (mismo pass de constant folding sobre TAC o LLVM).\n- **Simplifica** codegen: backend solo selecciona instrucciones desde IR normalizado.\n\nAST conserva jerarquía anidada poco conveniente para análisis lineal; assembly tiene orden fijo y registros escasos demasiado pronto.\n\n### TAC — three-address code\n\nFormato típico:\n\n```\nt1 = a + b\nt2 = t1 * c\nx  = t2\n```\n\nCada línea referencia **nombres temporales** como registros virtuales ilimitados. Operaciones unarias: `t = -a`. Saltos: `if a < b goto L1`. Lectura/escritura memoria: `t = *p`, `*p = t`.\n\n### Cuádruplas y tríadas\n\n- Cuádrupla: `(ADD, a, b, t1)` — fácil de reordenar y almacenar en arrays.\n- Tríada: `(ADD, a, b)` con orden implícito por índice de instrucción.\n\nLos optimizadores recorren listas de cuádruplas, construyen grafos use-def, insertan φ-functions en SSA.\n\n### Generación desde AST\n\nVisitor **post-order** en expresiones:\n\n1. Visitar hijos, obtener temporales `t_left`, `t_right`.\n2. Emitir cuádrupla `(OP, t_left, t_right, t_new)`.\n3. Retornar `t_new`.\n\nAsignación `x = e`: emitir para `e`, luego `(ASSIGN, t_e, _, x)`.\n\nControl de flujo: `if`, `while` emiten labels y saltos condicionales.\n\n### SSA (Static Single Assignment)\n\nCada variable se asigna exactamente una vez; redefiniciones crean nuevas versiones `x1`, `x2`. Facilita propagación y eliminación de redundancias. LLVM IR está en SSA; φ en merge de CFG.\n\n### Representaciones gráficas\n\n**Sea of Nodes** o **Explicit CFG + instructions** en compiladores JIT. La elección afecta costo de modificar IR bajo optimización.\n\n### Traducción dirigida por la sintaxis (SDT) sobre expresiones\n\nLas **definiciones de traducción dirigida por la sintaxis** adjuntan atributos sintetizados o heredados a nodos del parse tree. En una gramática \\(E \\rightarrow E + T \\mid T\\), el atributo sintetizado `E.code` puede ser una lista de cuádruplas generadas combinando hijos: al reducir \\(E + T\\), el generador crea temporal `t`, emite `(ADD, E.place, T.place, t)` y asigna `E.place = t`.\n\nEn implementaciones de laboratorio sin SDT formal, un **visitor** sobre el AST cumple el mismo rol: cada nodo `Add(left, right)` devuelve el nombre de temporal que almacena el resultado. La clave pedagógica es que **el orden postorden** garantiza que los hijos ya aportaron sus operandos antes de emitir la operación del padre.\n\nPara condicionales `if (B) S1 else S2`, el generador crea etiquetas `Lfalse`, `Lend`, emite para la condición booleana \\(B\\) salto `IF_FALSE B goto Lfalse`, traduce \\(S1\\), `GOTO Lend`, etiqueta `Lfalse`, traduce \\(S2\\), etiqueta `Lend`. Este patrón es idéntico en tres direcciones, cuádruplas o LLVM `br i1`.\n\n### Control de flujo: bucles while paso a paso\n\nConsidere `while (a < b) { x = x + 1; }`. El generador reserva `Ltest` y `Lend`:\n\n1. Etiqueta `Ltest`.\n2. Emitir código que deja en `tcond` el resultado de `a < b` (comparación emite `(LT, a, b, tcond)` y salto condicional).\n3. Si falso, saltar a `Lend`.\n4. Traducir cuerpo: actualización de `x`.\n5. Salto incondicional a `Ltest`.\n6. Etiqueta `Lend`.\n\nEl **grafo de flujo de control (CFG)** resultante concentra aristas entrantes al header del bucle y sale hacia bloque siguiente; los optimizadores del módulo 14 explotan invariantes en el header y el cuerpo.\n\n### Cuádruplas vs tríadas en depuración\n\nLas **tríadas** referencian operandos por índice de instrucción anterior (`(ADD, 3, 5)` significa sumar resultado de instrucciones 3 y 5). Ahorran espacio pero dificultan reordenar instrucciones: mover una instrucción rompe referencias. Las **cuádruplas** con nombres explícitos `t7` facilitan insertar optimizaciones entre líneas sin renumerar cadenas de índices.\n\nEn depuradores de compilador (GCC `-fdump-rtl`, LLVM `opt -S`), ver IR intermedio ayuda a correlacionar línea fuente con secuencia TAC.\n\n### Caso integrado con el laboratorio QuimiSell\n\nEl reto `val = (10 + 5) * 2` debería producir temporales encadenados como en el módulo 9, pero con **nombres generados** por `GeneradorTAC.nuevo_temporal()`:\n\n- `t1 = 10 + 5` (los literales pueden permanecer inmediatos hasta el backend).\n- `t2 = t1 * 2`\n- `val = t2`\n\nSi la expresión incluye variables ya declaradas, `10` y `5` se sustituyen por nombres de símbolo en cuádruplas `(ADD, t_a, t_b, t1)`. El analizador semántico previo debe haber colgado tipos en nodos para que futuro codegen use instrucciones de enteros vs flotantes.\n\n### Lecturas recomendadas (conceptuales)\n\nEl diseño clásico de **Aho, Lam, Sethi y Ullman** («Compiladores: principios, técnicas y herramientas», el Dragon Book) dedica capítulos enteros a esquemas de traducción y generación de IR; la nomenclatura TAC de este curso coincide con el capítulo de código intermedio. LLVM documentación oficial explica PHI nodes como generalización de asignaciones múltiples tras bifurcaciones.\n\n## Demostración enlazada al código del módulo\n\nEl generador TAC del curso recorre AST simple y acumula lista de strings o cuádruplas: por cada `Add`, crea temporal nuevo `t_k = left op right`; la asignación final enlaza variable usuario.\n\nLa clase `GeneradorTAC` del snippet mantiene `contador_temp` para nombres únicos (`t1`, `t2`, …) y lista `instrucciones`. El método `generar_expr_suma(op1, op2)` crea temporal, añade string `\"{temp} = {op1} + {op2}\"` y **retorna** el nombre del temporal para encadenamiento (`t2 = t1 + c` en el ejemplo del curso). Este patrón return-value es la interfaz que un visitor AST invocaría al salir de nodo `Add`.\n\nTrazar `x = (10 + 5) * 2`:\n\n1. `(ADD, 10, 5, t0)`\n2. `(MUL, t0, 2, t1)`\n3. `(ASSIGN, t1, _, x)`\n\nCoincide con pipeline demo módulo 9. Temporales son ilimitados; el backend posterior asignará registros físicos (módulo 15).\n\n## Aplicaciones en sistemas reales\n\n**LLVM IR**: texto legible `.ll`, serializable, con passes `opt`.\n\n**WebAssembly**: stack machine como IR de bajo nivel para navegadores.\n\n**SQL engines**: planes de ejecución como DAG de operadores — IR de dominio específico.\n\n## Errores clásicos en examen\n\n- Generar assembly antes de temporales (mezclar fases).\n- Olvidar temporales en expresiones anidadas (reusar mal un registro).\n- Confundir cuádrupla con triádica sin numerar orden.\n- No emitir saltos en `if`/`while`.\n- AST y TAC como el mismo árbol (TAC es secuencia plana).\n\n## Preguntas de entrevista\n\n**P: ¿Ventaja de SSA sobre TAC clásico?**\n\n**R:** Definiciones únicas simplifican análisis de flujo de datos y eliminan ambigüedad sobre qué versión de `x` se lee en cada punto.\n\n**P: ¿Dónde vive el IR en GCC vs LLVM?**\n\n**R:** GCC: varias IR internas (GENERIC, GIMPLE, RTL). LLVM: IR único desde frontend hasta casi el backend.\n\n## Estudio dirigido: IR, TAC y cuádruplas\n\nTraduce a mano el AST `Assign(x, Mul(Add(10,5), 2))` a lista TAC completa con temporales nombrados, luego conviértela a cuádruplas `(op, arg1, arg2, result)` sin usar strings compuestos. Compara legibilidad.\n\nEscribe TAC para `if (a < b) x = 1 else x = 2` con etiquetas `L0,L1,L2`. Incluye saltos condicionales y asignaciones en cada rama. Verifica que solo hay un flujo coherente al final.\n\nEjecuta el snippet `GeneradorTAC` y agrega método `generar_expr_mul`. Encadena suma y multiplicación en el mismo `contador_temp`. Imprime lista final y verifica unicidad de temporales.\n\nInvestiga qué es **SSA** leyendo un fragmento LLVM IR (`%1 = add i32 %0, 1`). Relaciona φ con merges tras if/else en control de flujo — extensión natural del `if` TAC escrito arriba.\n\nExplica por qué el backend prefiere IR en forma de asignaciones secuenciales frente a AST profundamente anidado: facilita análisis de flujo de datos para optimización módulo 14.\n\n### SDT como puente mental\n\nAunque no implementes atributos gramaticales formales, al escribir visitor puedes nombrar atributos sintetizados `node.place` o `node.code`. Esa nomenclatura coincide con libros de compiladores y entrevistas de herramientas educativas.\n\n## Profundización: IR en la industria\n\n**LLVM bitcode** permite distribuir programa sin fuente a optimizador común. **ThinLTO** enlaza módulos conservando visibilidad global para optimización interprocedural.\n\n**Stack machine IR** (bytecode JVM, WASM) usa operandos implícitos en pila; traducción desde AST puede ser más directa que tres direcciones pero complica análisis.\n\n**Anf (A-Normal Form)** fuerza que operaciones complejas se asignen a temporales inmediatamente — subconjunto de TAC usado en algunos compiladores funcionales.\n\n**Basic blocks** agrupan TAC sin saltos internos salvo al final; CFG explícito es prerequisito de optimización módulo 14.\n\nImplementa generador que emite cuádruplas como tuplas Python `(ADD, 'a', 'b', 't1')` y pretty-printer que las convierte a strings.\n\nPara `while`, demuestra que número de temporales crece acotado si condiciones y cuerpo no anidan infinitamente en compilación finita.\n\nCompara tamaño IR vs tamaño fuente en programa pequeño del laboratorio; ratio típico crece por explosion de operaciones atómicas.\n\n### Verificación de IR\n\nPasses de LLVM verifican tipos en IR ySSA bien formada antes de optimizar — «semantic checker del middle-end».\n\n\n## Práctica integral y cierre de unidad\n\nGenera TAC completo para `if (a) { x = b + c; } else { x = d; }` con etiquetas y saltos condicionales; cuenta número de temporales.\n\nImplementa clase `Cuadrupla` con campos op, arg1, arg2, res y método `__str__`; convierte salida del `GeneradorTAC` a lista de cuádruplas.\n\nTraduce lista de cuádruplas a grafo de flujo básico identificando líderes (primera instrucción de bloque y destino de salto).\n\nExplica por qué LLVM usa tipos explícitos en IR (`i32`, `i64`) mientras tu laboratorio usa nombres simbólicos.\n\nCompara tamaño de AST vs TAC para expresión profundamente parentizada; TAC lineal crece linealmente con operadores.\n\nPractica renombrar temporales en SSA mental: después de `if` con merge, introduce phi conceptual aunque solo uses TAC plano.\n\nDiscute almacenamiento en memoria vs temporales: variables fuente `x` viven en slots; constantes pueden permanecer inmediatas hasta backend.\n\nMenciona barrera de optimización: orden de instrucciones TAC con efectos observables no puede reordenarse libremente antes de análisis.\n\nEjercicio: convierte `while (i < n)` a TAC con comparación y salto atrás; verifica que etiqueta test precede cuerpo según diseño del módulo.\n\nCierra trazando cadena datos desde AST del parser módulo 11 hasta strings del pipeline demo módulo 9.\n\n## Monografía breve: tres direcciones hacia la máquina\n\nTAC es el puente donde el programa deja de parecer árbol y se vuelve programa con flujo lineal y saltos explícitos. Cada asignación a temporal es candidata a registro físico más adelante; cada salto condicional será etiqueta en assembly.\n\nCuádruplas facilitan escribir optimizadores: array de estructuras fijas, fácil de barrer. LLVM SSA va más lejos al hacer únicas las definiciones, pero conceptualmente continúa la tradición IR.\n\nLas estructuras de control se aplastan: el `if` del usuario desaparece como palabra clave en TAC, sustituido por compare y branch. Ese aplanamiento es lo que hace visible la máquina subyacente al principiante que lee listados optimizados.\n\nGenerador del snippet usa strings por simplicidad; producción usa estructuras y verificadores internos. La diferencia es ingeniería, no teoría.\n\nEnsaya traducción de función con dos returns; observa cómo TAC necesita etiquetas y possibly phi al fusionar flujos. Sin SSA, asignaciones duplicadas a misma variable fuente simulan merge.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** TAC para `z = (a+b) * (c+d)` con cuatro temporales mínimos.\n\n**Ejercicio 2.** Convierte la lista anterior a cuádruplas explícitas.\n\n**Ejercicio 3.** Emite salto condicional para `while (i<n)`.\n\n**Ejercicio 4.** Ejecuta GeneradorTAC encadenando dos sumas y una multiplicación manual.\n\n**Ejercicio 5.** Explica beneficio SSA con ejemplo if/else merge.\n\nVerifica salidas imprimiendo lista `instrucciones` del snippet.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nCompleta la traducción de una asignación con paréntesis anidados y verifica que el número de temporales coincide con el número de operadores binarios en el AST.\n\nConserva numeración monótona de temporales en TAC para facilitar optimización y depuración. Antes de añadir `while` o `if`, valida expresiones aritméticas simples imprimiendo la lista `instrucciones` del `GeneradorTAC`. Compara tu salida con el pipeline demo del módulo 9 para detectar desvíos temprano.\n\n\n## Síntesis y checklist antes de avanzar\n\n- Traduje AST de suma encadenada a lista TAC.\n- Escribí tres cuádruplas para `if (a) x = 1`.\n- Comparé IR con salida del snippet del módulo.\n- Nombré un pass de optimización que opera sobre IR (módulo 14).\n- Listo para optimización.",
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
          question: "TAC cuádrupla `(+, a, b, t1)` significa:",
          options: ["t1 = a + b",
          "saltar a t1",
          "definir función",
          "lexer"],
          answerIndex: 0,
          explanation: "Formato de tres direcciones con destino explícito."
        },
        {
          question: "Temporales t1, t2 se introducen para:",
          options: ["Romper expresiones complejas en pasos evaluables",
          "Nombres de usuario",
          "Tokens",
          "Solo debug"],
          answerIndex: 0,
          explanation: "Traducción sistemática de expresiones."
        },
        {
          question: "SSA requiere:",
          options: ["Cada variable definida exactamente una vez por versión; φ en joins",
          "Sin saltos",
          "Sin temporales",
          "Solo regex"],
          answerIndex: 0,
          explanation: "Single static assignment con funciones φ."
        },
        {
          question: "φ(x1, x2) en un join:",
          options: ["Selecciona valor según rama de control ejecutada",
          "Suma operandos",
          "Lee memoria",
          "Es token"],
          answerIndex: 0,
          explanation: "Placeholder de merge de definiciones."
        },
        {
          question: "Traducción de `if (c) S` en IR incluye:",
          options: ["Salto condicional a etiquetas",
          "Solo opcode ret",
          "Lexer rule",
          "CYK"],
          answerIndex: 0,
          explanation: "Control flow explícito."
        },
        {
          question: "IR portátil permite:",
          options: ["Backend distinto para misma representación",
          "Eliminar semántica",
          "Evitar lexer",
          "Hacer regular el lenguaje"],
          answerIndex: 0,
          explanation: "Desacople máquina."
        },
        {
          question: "Depura IR: temporal usado antes de definir. Causa:",
          options: ["Orden de emisión incorrecto en traducción",
          "Spill",
          "Halting",
          "FIRST/FOLLOW"],
          answerIndex: 0,
          explanation: "Secuencia de cuádruplas debe respetar definiciones."
        },
        {
          question: "Activación de función en IR establece:",
          options: ["Marco/registros según convención",
          "Solo AST",
          "Regex",
          "DFA"],
          answerIndex: 0,
          explanation: "Prologue y manejo de parámetros."
        },
        {
          question: "LLVM bitcode es ejemplo de:",
          options: ["IR intermedio optimizable",
          "Token",
          "Gramática",
          "Tabla FIRST"],
          answerIndex: 0,
          explanation: "Representación serializable."
        },
        {
          question: "Bloque básico es:",
          options: ["Secuencia lineal sin saltos internos salvo al final",
          "Todo el programa",
          "Un token",
          "CYK celda"],
          answerIndex: 0,
          explanation: "Unidad estándar para análisis de flujo."
        }
      ],
      exercises: [
        {
          id: 7201,
          instruction: "Traduce AST 'a = b + c' a tres cuádruplas (asignación y suma temporal).",
          placeholder: "t1 = b + c; a = t1",
          expectedKeywords: ["t1", "cuadrupla", "+", "="],
          hint: "Cada operador binario genera temporal.",
          isEmailSubmission: false
        },
        {
          id: 7202,
          instruction: "DESAFÍO: Explica qué es SSA y por qué LLVM usa nombres únicos por asignación en una función.",
          placeholder: "SSA: ...",
          expectedKeywords: ["SSA", "phi", "LLVM", "unico"],
          hint: "Una sola definición por variable en el IR.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 14,
      title: "MÓDULO 14: OPTIMIZACIÓN DE CÓDIGO INTERMEDIO",
      description: "Técnicas de optimización de rendimiento: Plegado de constantes, eliminación de código muerto y optimización de bucles.",
      items: [
      "Optimización local en bloque básico: DAG, plegado de constantes, algebra.",
      "Eliminación de código muerto: definiciones no usadas tras análisis de liveness.",
      "Propagación de constantes y copias (copy propagation) en SSA.",
      "Common subexpression elimination (CSE) con disponibilidad de expresiones.",
      "Loop-invariant code motion y desenrollado limitado por costo/tamaño.",
      "Inlinining: trade-off tamaño código vs eliminar overhead de llamada.",
      "Preservar semántica observable: orden de efectos secundarios y excepciones.",
      "Passes iterativos hasta punto fijo o presupuesto de compilación.",
      "Profiling guiado (PGO) versus heurísticas estáticas en optimizadores industriales."
],
      content: "## Panorama del tema: OPTIMIZACIÓN — CONSTANT FOLDING, DCE Y BUCLES\n\nLa IR generada tras el frontend es **correcta** pero rarely **eficiente**: expresiones con literales se evalúan en runtime aunque se conocen en compile-time; temporales muertos ocupan «registros virtuales»; bucles repiten cálculos invariantes. El **middle-end** aplica **optimizaciones** preservando **semántica observable** (salvo FP edge cases y threading).\n\nEsta lección cubre **constant folding**, **propagación de constantes**, **eliminación de código muerto (DCE)** e introducción a **optimización de loops** (invariant code motion, desenrollado). El snippet del módulo simula folding sobre una lista de asignaciones.\n\n## Objetivos de la lección\n\n- Definir optimización correcta vs transformación unsafe.\n- Aplicar constant folding y propagación en TAC a mano.\n- Reconocer código muerto local y global (liveness).\n- Nombrar optimizaciones de loop y cuándo aplicarlas.\n- Ejecutar el snippet de plegado de constantes.\n\n## Desarrollo de la lección\n\n### Marco: análisis antes de transformar\n\nOptimizaciones usan análisis **must/may**:\n\n- **Reaching definitions**, **available expressions**, **liveness** (para DCE).\n- Solo tras probar seguridad se reescribe IR.\n\nGCC/LLVM encadenan **passes**; orden importa (re-run constant fold después de DCE).\n\n### Constant folding\n\nSi operandos son constantes, calcular en compilación:\n\n`x = 3 + 5` → `x = 8` (cuádrupla o literal en símbolo).\n\nExtensible a operaciones parciales y comparaciones (`if 1 < 2` → `if true`).\n\n### Propagación de constantes y SPARK\n\nSi `x = 7` y solo `y = x + 1` usa `x`, sustituir → `y = 8`. Iterar hasta punto fijo. Combinar con **sparse conditional constant propagation** para ramas constantes.\n\n### Eliminación de código muerto (DCE)\n\nInstrucción es muerta si su resultado **no afecta** salida observable (return, escritura memoria global, IO). Análisis de **liveness** hacia atrás: si temporal `t` no está vivo después de definirse, remover definición.\n\nCuidado: efectos secundarios (`call printf`) no son muertos aunque el valor de retorno no se use.\n\n### Optimización de bucles\n\n- **Invariant code motion**: mover `t = a * b` fuera de `while` si `a,b` no cambian en el loop.\n- **Induction variable strength reduction**: reemplazar multiplicación en índice por suma.\n- **Loop unrolling**: duplicar cuerpo para reducir overhead de salto (trade-off tamaño).\n- **Vectorization**: SIMD si dependencias lo permiten (LLVM loop vectorizer).\n\nDependencias **carried** bloquean paralelización.\n\n### Nivel de optimización\n\n`-O0` (sin opts, debug), `-O2` equilibrio, `-Os` tamaño, `-O3` agresivo. Tiempo de compilación crece.\n\n### CFG y análisis de flujo de datos (visión operativa)\n\nAntes de eliminar código muerto, el optimizador construye el **grafo de flujo de control**: nodos son bloques básicos (secuencias lineales sin saltos internos salvo al final); aristas son saltos condicionales o incondicionales. Sobre este grafo, el análisis de **liveness** hacia atrás pregunta: ¿la variable `t` se usará en algún uso real antes de ser redefinida en un camino posterior?\n\nFormalmente, un punto de programa es **vivo** para `t` si existe un camino desde ese punto hasta un **use** de `t` sin pasar por otra definición. Las ecuaciones de datos se resuelven iterando hasta convergencia en cada bloque (gen/kill sets). Solo con esta información global es seguro borrar `t5 = a * b` si `t5` nunca es vivo en el siguiente punto.\n\n### Subexpresiones comunes y redundancia parcial\n\n**CSE (common subexpression elimination)** detecta que `t1 = x + y` y más tarde `t2 = x + y` pueden compartir valor si `x` e `y` no se redefinen entre medias. El optimizador reemplaza el segundo cálculo por copia `t2 = t1`. En LLVM, passes `EarlyCSE` y `GIMPLE PRE` implementan variantes.\n\nDistinto de folding: aquí los operandos pueden ser variables no constantes; la ganancia proviene de evitar **recomputación** en hardware.\n\n### Peephole local vs passes globales\n\n**Peephole optimization** mira una ventana de 2–3 instrucciones consecutivas: `MOV R1, R2` seguido de `MOV R2, R1` redundante; `ADD R1, 0` innecesario. Es barato y se aplica tarde, incluso sobre ensamblador.\n\nLos passes globales (DCE, LICM) requieren IR estructurado y son más caros de computar en compilación pero reportan mayores ganancias en loops calientes.\n\n### Caso numérico de LICM\n\n```\nt0 = a * b\nwhile (i < n) {\n    sum = sum + arr[i]\n    i = i + 1\n}\n```\n\nSi `a` y `b` no mutan dentro del `while`, `t0 = a * b` es **invariante**: se mueve antes del bucle. Sin LICM, cada iteración repetiría multiplicación que puede costar decenas de ciclos en CPU moderna; con miles de iteraciones la diferencia es medible en perfiles.\n\n### Riesgos y semántica de observabilidad\n\nOptimizar `x * 0` a `0` es inseguro si overflow o señalización importan en lenguajes con excepciones aritméticas. Compiladores C/C++ permiten reglas `fast-math` que relajan IEEE-754 a cambio de folds agresivos. **Threading** y **volatile** obligan a desactivar ciertos passes en variables marcadas.\n\n### Conexión con el segundo pass del laboratorio\n\nTras generar TAC del parser, un estudiante puede implementar `optimizar_instrucciones_tac` extendiendo el snippet: segundo pass que sustituye usos de `t1` cuando `t1` se asignó de constante propagada. Medir líneas antes/después documenta impacto pedagógico aunque el binario final aún no exista.\n\n## Demostración enlazada al código del módulo\n\nEl snippet recorre asignaciones; si ambos operandos de `+` o `*` son numéricos literales en la representación interna, reemplaza la operación por el valor calculado con `eval` controlado o aritmética Python.\n\nEso es **constant folding** local línea a línea. No hace propagación global ni DCE (si `t1` muerto permanece).\n\nExtensión laboratorio: segundo pass que marca temporales vivos desde `return` y elimina defs no vivas.\n\n## Aplicaciones en sistemas reales\n\n**LLVM `-mem2reg` + SCCP**: promueve memoria stack a SSA y propaga constantes agresivamente.\n\n**Java JIT HotSpot**: optimiza bytecode caliente tras perfilado — folding y inline en runtime.\n\n**SQLite query planner**: «optimiza» queries; análogo conceptual de cost model en IR.\n\n## Errores clásicos en examen\n\n- Folding que ignora overflow definido del lenguaje (C signed UB).\n- DCE que elimina `call` con efectos laterales.\n- Mover código invariante que muta en el loop.\n- Confundir peephole con análisis global de flujo.\n- Asumir que `-O3` siempre es más rápido (puede hinchar I-cache).\n\n## Preguntas de entrevista\n\n**P: ¿DCE local vs global?**\n\n**R:** Local: instrucción inútil inmediata en bloque. Global: usa liveness inter-bloques en CFG; elimina cadenas de temporales muertos cruzando saltos.\n\n**P: ¿Por qué correr constant fold varias veces?**\n\n**R:** Un fold crea nuevas constantes que otro pass puede propagar; iteración hasta estabilidad.\n\n## Estudio dirigido: optimización intermedia\n\nAplica constant folding a mano sobre secuencia TAC: `t1=3+5; t2=t1*2; t3=2+2; x=t2+t3` hasta no poder más; luego DCE si `x` no se usa. Documenta cada paso.\n\nDibuja CFG de un `if` con asignaciones en cada rama y marca qué temporales están vivos en el join point antes de φ/assign merge. Explica por qué DCE global necesita union de caminos.\n\nExtiende `optimizar_instrucciones_tac` del snippet para multiplicar constantes adyacentes si ambas son dígitos. Discute si segundo pass de propagación podría reemplazar `x = t1 * 2` tras `t1=30`.\n\nDescribe strength reduction `x*8` → `x<<3` en IR y condiciones de seguridad (overflow, signed vs unsigned en C).\n\nPara bucles, escribe pseudo-código LICM que detecta operaciones cuyos operandos son invariantes en el header block dominator tree — no implementes, solo verbaliza prerequisitos.\n\nContrasta `-O0` vs `-O2` en tamaño de binario y tiempo de debug: optimización elimina variables debug-friendly — trade-off conocido en ingeniería.\n\n## Profundización: passes y correctitud\n\n**Preservación de observables**: optimización válida si programa optimizado produce misma salida observable y mismos efectos IO/modificación memoria visible según modelo de memoria del lenguaje. C/C++ hace esto especialmente sutil con `volatile`, `atomic`, strict aliasing.\n\n**Alias analysis** informa si dos punteros pueden referir misma memoria; sin él, LICM no puede mover loads con seguridad.\n\n**Loop vectorization** empaqueta iteraciones en registróns SIMD; requiere probar ausencia de dependencias loop-carried.\n\n**Profile-guided optimization** (`-fprofile-use`) reordena bloques según frecuencias medidas en entrenamiento representativo.\n\nEl snippet sólo pliega sumas constantes en strings; mejora propuesta: grafo de def-uso en temporales `t\\d+` para propagar valor de `t1=30` a usos de `t1`.\n\n**Peephole** en ensamblador final elimina `MOV R0,R0` tras regalloc imperfecto.\n\nDocumenta un caso donde DCE **inseguro** eliminaría código con side effect: `call printf` cuyo retorno no se usa debe permanecer.\n\nBenchmark mental: programa con loop de mil millones de iteraciones, invariante `x*y` fuera reduce de 1e9 multiplicaciones a 1.\n\n### Ética de optimización\n\n`-ffast-math` rompe reproducibilidad científica; compiladores documentan flags que alteran semántica numérica — decisión del ingeniero, no solo del compilador.\n\n\n## Práctica integral y cierre de unidad\n\nAplica cadena de optimizaciones manual sobre bloque TAC: folding, propagación, DCE, strength reduction en un ejemplo de cuatro párrafos de código fuente equivalente.\n\nConstruye CFG con tres bloques y calcula conjunto de variables vivas al final del bloque central hacia atrás en dos iteraciones.\n\nImplementa en Python detección de temporales muertos en lista TAC si variable temporal no aparece en operandos de instrucciones posteriores ni en asignaciones a variable usuario.\n\nDiscute impacto de optimización en depuración: variables eliminadas ya no visibles en debugger — compilador emite metadatos DWARF para mapear IR optimizado a fuente.\n\nCompara loop unrolling factor 2 vs 4 en tamaño de binario hipotético y latencia de salto.\n\nInvestiga flag `-Og` de GCC (optimizar conservando debug); relaciona con producción vs desarrollo.\n\nExplica por qué eliminar `x*0` puede ser incorrecto con excepciones de coma flotante o `-fno-signed-zeros`.\n\nPropón orden de passes para mini compilador del curso: constant fold antes de DCE; repetir hasta punto fijo.\n\nSimula LICM moviendo invariante fuera de `for` escrito en pseudocódigo C.\n\nCierra conectando salida optimizada del snippet módulo 14 con entrada del generador assembly módulo 15.\n\n## Monografía breve: optimizar sin mentir\n\nOptimización es transformación sujeta a contrato semántico. Los passes conservadores son preferibles a binarios rápidos incorrectos. Industria invierte décadas en pruebas de regresión de compilador donde cada pass tiene suites masivas.\n\nConstant folding y DCE enseñan el patrón general: análisis simple habilita transformación simple. LICM y vectorización requieren análisis más profundo pero siguen la misma plantilla.\n\nEl snippet del curso es germen de pass real. Extenderlo enseña ingeniería: idempotencia (correr fold dos veces no cambia más), punto fijo (iterar passes).\n\nLos bucles dominan rendimiento en cómputo numérico; optimizar invariantes es ganancia desproporcionada. Perfilado (`perf`) en programas reales muestra donde optimizer merece atención humana adicional.\n\nRecuerda trade-off con compilación incremental: optimización agresiva aumenta tiempo build CI.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** Pleca `t1=1+2+3` por etapas hasta constante.\n\n**Ejercicio 2.** Elimina temporal muerto en secuencia de tres asignaciones.\n\n**Ejercicio 3.** Mueve invariante fuera de bucle pseudocódigo.\n\n**Ejercicio 4.** ¿Es seguro `x*0→0` en C sin fast-math?\n\n**Ejercicio 5.** Orden de passes fold luego DCE: da contraejemplo si se invierte mal.\n\nUsa snippet `optimizar_instrucciones_tac` en casos 1-2.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nDiseña un caso donde DCE global difiere de DCE local: un temporal usado solo en un bloque posterior al join de un if. Argumenta por qué hace falta análisis de liveness en el CFG.\n\nNo optimices hasta que el TAC sin optimizar sea correcto en casos manuales. El folding del snippet es un primer pass; documenta qué transformaciones aplicas si entregas código al profesor. Prueba secuencias con constantes y con temporales muertos para ver el límite del optimizador didáctico.\n\n\nAdemás, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.\n\nVuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.\n\nCierra comparando mentalmente un programa antes y después de constant folding en el snippet: la lista optimizada debe ser más corta y seguir evaluando igual en los casos de prueba del laboratorio.\n\nSi tienes dudas, rehace en papel un ejemplo de eliminación de código muerto sobre tres temporales con análisis de liveness explícito y marca qué instrucciones sobreviven al final del bloque.\n\n## Síntesis y checklist antes de avanzar\n\n- Pliqué a mano `t0=2+3`, `t1=t0*4`.\n- Identifiqué instrucción muerta en un CFG de ejemplo.\n- Nombré una optimización segura para invariantes de loop.\n- Corrí snippet de folding del módulo.\n- Listo para codegen (módulo 15).",
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
          question: "Constant folding 3*5 → 15:",
          options: ["Optimización algebraica local",
          "Error semántico",
          "Lexer",
          "Parsing"],
          answerIndex: 0,
          explanation: "Evalúa en compile-time operaciones conocidas."
        },
        {
          question: "Dead code elimination necesita:",
          options: ["Análisis de liveness/def-use",
          "Solo regex",
          "CYK",
          "FIRST"],
          answerIndex: 0,
          explanation: "Eliminar instrucciones sin efecto observable."
        },
        {
          question: "CSE evita:",
          options: ["Recalcular la misma expresión en un bloque",
          "Todos los saltos",
          "Lexer",
          "Tabla de símbolos"],
          answerIndex: 0,
          explanation: "Reuse temporales para expresiones comunes."
        },
        {
          question: "Loop-invariant code motion mueve:",
          options: ["Instrucciones cuyos operandos no cambian en iteración",
          "Todo el loop fuera del programa",
          "Lexer adentro del loop",
          "Solo φ"],
          answerIndex: 0,
          explanation: "Reduce trabajo repetido."
        },
        {
          question: "Inlining trade-off:",
          options: ["Menos overhead de llamada pero más código",
          "Siempre reduce tamaño",
          "Impide optimizar",
          "Solo afecta lexer"],
          answerIndex: 0,
          explanation: "Balance tamaño vs velocidad."
        },
        {
          question: "Optimización no puede reordenar libremente si:",
          options: ["Hay efectos laterales u orden de excepciones visible",
          "Hay enteros",
          "Hay IR",
          "Hay DFA"],
          answerIndex: 0,
          explanation: "Semántica observable limita transformaciones."
        },
        {
          question: "Copy propagation tras SSA:",
          options: ["Reemplaza usos de copias por fuente original cuando seguro",
          "Elimina lexer",
          "Cambia API del SO",
          "Rompe tipos"],
          answerIndex: 0,
          explanation: "Simplifica grafo de def-use."
        },
        {
          question: "Depura: optimizador elimina printf «muerto» pero usuario lo necesitaba. Causa:",
          options: ["Análisis de efectos consideró la llamada sin efecto",
          "Parser LR",
          "φ mal",
          "Token"],
          answerIndex: 0,
          explanation: "Modelado de efectos secundarios conservador vs agresivo."
        },
        {
          question: "PGO usa:",
          options: ["Perfiles de ejecución para guiar decisiones",
          "Solo teoría de bombeo",
          "CYK",
          "NFA ε"],
          answerIndex: 0,
          explanation: "Datos de runtime en compilación."
        },
        {
          question: "Iterar passes hasta punto fijo:",
          options: ["Aplica optimizaciones hasta que no cambia IR",
          "Impide compilar",
          "Solo en lexer",
          "Es parsing"],
          answerIndex: 0,
          explanation: "Monotonía/no cambio estabiliza."
        }
      ],
      exercises: [
        {
          id: 7301,
          instruction: "Aplica constant folding manual al código: x = 3+5*2; escribe el IR después del plegado.",
          placeholder: "x = 13",
          expectedKeywords: ["constant", "fold", "13"],
          hint: "Primero 5*2=10, luego 3+10=13.",
          isEmailSubmission: false
        },
        {
          id: 7302,
          instruction: "DESAFÍO: Identifica código muerto en un basic block y propón eliminación DCE paso a paso.",
          placeholder: "Block: t1=...",
          expectedKeywords: ["dead", "code", "DCE", "block"],
          hint: "Temporales no usados por salidas del bloque.",
          isEmailSubmission: true
        }
      ],

    },
{
      id: 15,
      title: "MÓDULO 15: GENERACIÓN DE CÓDIGO OBJETO Y GESTIÓN EN TIEMPO DE EJECUCIÓN",
      description: "Generación final de Ensamblador (x86/ARM), asignación de registros físicos y la pila de llamadas (Call Stack).",
      items: [
      "Selección de instrucciones: matching de patrones IR a opcode de la arquitectura.",
      "Asignación de registros: grafo de conflictos, spill a stack cuando se agotan.",
      "Calling conventions: caller/callee-saved, paso de parámetros en registros o stack.",
      "Activation record: return address, marco de pila, variables locales alineadas.",
      "Prologue/epilogue de funciones y restauración de registros preservados.",
      "Emisión de etiquetas y saltos relocatables para ensamblador o linker.",
      "Datos en secciones .text/.data; alineación y constantes embebidas en objeto.",
      "ABI del SO: respetar convención en llamadas a libc y símbolos exportados.",
      "Validar salida con ensamblador y prueba de ejecutable end-to-end."
],
      content: "## Panorama del tema: GENERACIÓN DE CÓDIGO OBJETO, REGISTROS Y ACTIVACIONES\n\nEl backend transforma IR optimizado en **instrucciones reales**: mov, add, load/store, saltos con offsets. Los **registros físicos** son escasos (x86-64: pocos callee-saved vs caller-saved); el compilador debe **asignar** temporales virtuales a `%rax`, `%rbx`, … o **spill** a memoria en stack.\n\nLas **activaciones** de funciones modelan **frames** en pila: parámetros, retorno, variables locales, registros guardados. Las **convenciones de llamada** (System V AMD64, Microsoft x64, AAPCS ARM) son contratos que el codegen debe respetar para interoperar con libc y otros objetos.\n\n## Objetivos de la lección\n\n- Esquematizar selección de instrucciones desde IR.\n- Explicar asignación de registros (grafo de conflictos, spill).\n- Describir call stack, frame pointer y return address.\n- Contrastar caller-saved vs callee-saved.\n- Interpretar el snippet conceptual de ensamblador x86 del módulo.\n\n## Desarrollo de la lección\n\n### Selección de instrucciones\n\nPattern-matching de árboles IR sobre DAG: `t = a + b` con enteros → `mov rax, a; add rax, b`. IR tipo LLVM ya está en forma RISC-like; selector recorre con tablas (BURG/tree-parser).\n\nFactores: tamaño de operandos, direccionamiento de memoria (x86 permite `add [mem], reg`).\n\n### Asignación de registros\n\nTemporales IR son **ilimitados**; CPU tiene **k** registros. Algoritmos:\n\n- **Graph coloring** (Chaitin): nodos = temporales, aristas = interferencia (vivos al mismo tiempo); k-colorear; spill si imposible.\n- **Linear scan**: rápido, usado en JIT.\n\n**Spill**: cuando no cabe, guardar temporal en slot de stack y recargar al usar.\n\n### Pila de activaciones\n\nCada **call** empuja return address; al entrar a función, prologue:\n\n1. Guardar frame pointer anterior.\n2. Establecer `%rbp` / frame register.\n3. Reservar espacio locals (`sub rsp, N`).\n\nEpilogue invierte antes de `ret`. Variables locales en offsets negativos respecto a frame pointer; parámetros en positivos o registros según calling convention.\n\n### Convenciones de llamada (System V AMD64 ejemplo)\n\nPrimeros argumentos enteros: `%rdi`, `%rsi`, `%rdx`, `%rcx`, `%r8`, `%r9`. Retorno entero en `%rax`. Caller-saved: `%rax`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%r8–11`. Callee-saved: `%rbx`, `%rbp`, `%r12–15`.\n\nEl generador inserta **saves/restores** de callee-saved si la función los usa.\n\n### Tipos de datos y alineación\n\nStack alineado a 16 bytes antes de call en x86-64 para SSE. Struct return via puntero oculto. Impacto en layout del frame.\n\n### Enlace y relocación\n\nEl compilador emite **símbolos** relocables; el **ensamblador** produce `.o`; el **linker** resuelve direcciones finales. Etiquetas externas `call printf@plt` en código posicionalmente independiente (PIE).\n\n### Grafo de interferencia y coloreado (intuición)\n\nPara asignar \\(k\\) registros físicos, construyas nodos por cada temporal vivo simultáneamente; arista entre `t1` y `t2` si sus intervalos de vida se solapan y no pueden compartir registro. **Colorear** con \\(k\\) colores equivale a asignar registros. Si no es posible, **spill**: elegir un temporal a memoria (heurística: menos usado o en loop interior), insertar `load`/`store`, y repetir.\n\n**Linear scan** ordena intervalos por inicio y mantiene activos; expulsar el que termina más lejos cuando se agotan registros — algoritmo usado en muchos JIT por velocidad de compilación.\n\n### Prologue y epilogue detallados (x86-64)\n\nEjemplo conceptual de función con locales:\n\n```\nfoo:\n    push   rbp\n    mov    rbp, rsp\n    sub    rsp, 16        ; 16 bytes locales alineados\n    ... cuerpo ...\n    mov    rsp, rbp\n    pop    rbp\n    ret\n```\n\nParámetros en SysV pueden llegar en `%rdi`, `%rsi`; el codegen coloca el séptimo parámetro en `[rbp+16]` según convención. **Leaf functions** sin calls pueden omitir frame pointer con flag `-fomit-frame-pointer`, complicando debuggers.\n\n### Memoria de programa: texto, datos, heap, pila\n\nEl **loader** del SO mapea ELF/PE: segmento `.text` ejecutable solo lectura, `.data`/`.bss` global mutable, **heap** crece con `malloc` hacia arribas en virtual memory, **stack** crece hacia abajo en la mayoría de arquitecturas. Stack overflow guard pages disparan SIGSEGV en recursión infinita.\n\n### Caso: traducción del snippet TAC a tres operandos reales\n\nPara `t1 = a + b`, el snippet emite:\n\n1. `MOV EAX, [a]` — load si `a` está en memoria frame.\n2. `ADD EAX, [b]`\n3. `MOV [t1], EAX`\n\nSi `a` ya está en `%edx` por asignación previa, el selector elige `ADD EAX, EDX` evitando load redundante (coalescing en regalloc). El laboratorio conceptual se salta esta capa pero el alumno debe verbalizarla en defensa oral.\n\n### Seguridad y mitigaciones (contexto moderno)\n\nEjecutables PIE + ASLR requieren que el backend genere código **position-independent** o aplicar relocations en runtime. Canarios de stack y shadow stack son responsabilidad del codegen + linker + loader, no del parser — pero integran la historia completa «del fuente al proceso en ejecución».\n\n## Demostración enlazada al código del módulo\n\nEl snippet conceptual mapea TAC a cadenas `MOV EAX, ...`, `MOV [x], EAX` — abstrae:\n\n1. Elegir acumulador `EAX` como destino de expresión.\n2. Materializar constantes inmediatas.\n3. Almacenar resultado en pseudo-dirección `[x]` (variable global simplificada).\n\nNo modela prologue ni convención; es **puente pedagógico** hacia listado assembly real. Extender: emitir `push rbp; mov rbp, rsp` en cada función del laboratorio.\n\n## Aplicaciones en sistemas reales\n\n**rustc + LLVM**: codegen backend LLVM produce `.s` o objeto directamente con convenciones por target triple.\n\n**JNI / FFI**: violar convención entre Rust y C causa crashes silenciosos — el codegen debe seguir ABI.\n\n**WebAssembly backend**: registros ilimitados en spec; lowering a stack machine en vez de GPR físicos.\n\n## Errores clásicos en examen\n\n- Olvidar alinear stack antes de call SSE.\n- Usar `%rbx` sin salvar en función que llama otras (callee-saved).\n- Confundir parámetro en stack vs registro en ABI distintas.\n- Spill inexistente cuando k < temporales en examen teórico.\n- `ret` sin restaurar frame pointer.\n\n## Preguntas de entrevista\n\n**P: ¿Caller-saved vs callee-saved?**\n\n**R:** Caller guarda registros que usará tras la llamada si el callee puede pisarlos; callee guarda los suyos que promete preservar. La ABI lista quién es quién.\n\n**P: ¿Qué hace el linker que el compilador no?**\n\n**R:** Une `.o`, resuelve símbolos, asigna direcciones virtuales, aplica relocations, produce ejecutable o shared library.\n\n## Estudio dirigido: codegen, registros y stack\n\nToma TAC `t1=a+b; t2=t1+c` y asigna manualmente tres temporales a dos registros forzando spill de uno a `[rbp-8]`. Lista instrucciones x86-64 emitidas en orden.\n\nDibuja stack durante llamada `main` → `foo(3)` con dos parámetros: argumentos en registros y stack, return address, saved rbp, locals de `foo`. Indica dónde lee `foo` cada parámetro según SysV.\n\nTraduce el resultado de `traducir_tac_a_x86(\"t1 = a + b\")` del snippet y comenta cada instrucción AT&T vs Intel syntax opcionalmente.\n\nExplica qué hace el loader del sistema operativo al crear proceso: mapea segmentos ELF, ajusta PC al entry `main`, prepara stack inicial con argc/argv.\n\nEnumera diferencias callee-saved vs caller-saved con ejemplo: función `foo` llama `bar` que usa `%rbx`; ¿quién salva `%rbx`?\n\nCierra el curso enumerando el pipeline completo 1–15 en una sola página y marca qué partes implementaste en el laboratorio QuimiSell. Esa hoja es mapa de estudio final.\n\n## Profundización: máquina real y tiempo de ejecución\n\n**Asignación de registros** con graph coloring puede usar heurística de spill sobre nodos con menor número de usos o en interior de loops profundos.\n\n**Instruction scheduling** reordena para ocultar latencia de memoria; importa en superscalar.\n\n**Position-independent code** usa PC-relative addressing para `LOAD` de símbolos globales.\n\n**Prologo/epilog** compactos en funciones leaf sin llamadas (omitir frame pointer cuando es seguro).\n\n**Seguridad**: stack canary insertado por compilador verifica overflow de buffer antes de `ret`.\n\n**Dynamic linking** resuelve `printf` en tiempo de carga via GOT/PLT; primera llamada más lenta.\n\nSimula registro allocation manual de tres temporales vivos en intervalos [1,4], [2,5], [3,6] — grafo completo K3 necesita spill con solo dos colores.\n\nCompara ARM AAPCS con SysV: primeros 8 argumentos en registros en ARM64, distinto reparto de callee-saved.\n\n**Runtime** más allá del stack: `malloc` gestiona heap; GC en Java elimina free explícito pero frame de llamada sigue existiendo.\n\nLaboratorio final: imprime pseudo-assembly completo para `val=(10+5)*2` con prologo ficticio, loads de constantes, stores a `val`.\n\nCierra el itinerario 6–15 releyendo cada checklist y marcando ítems dominados; repite laboratorio integrado si alguno queda débil.\n\n### Recursos de repaso cruzado\n\nMódulo 6 ambigüedad ↔ módulo 11 conflictos shift/reduce; módulo 7 pila ↔ módulo 11 stack LR; módulo 13 IR ↔ módulo 14 optimización ↔ módulo 15 regalloc. Trázalas en diagrama personal de dependencias del curso.\n\n\n## Práctica integral y cierre de unidad\n\nAsigna manualmente ocho temporales a cuatro registros con grafo de interferencia denso; identifica nodo spill mínimo grado heurístico.\n\nEscribe prologo/epilogo completo para función `int sum(int a,int b)` en notación AT&T con convención SysV.\n\nTraduce tres instrucciones TAC consecutivas a secuencia assembly minimizando movs redundantes vía coalescing mental.\n\nDiagrama stack tras tres llamadas anidadas `main→g→h` con profundidades de frame apilados.\n\nContrasta código position-independent con absolute addressing en binarios legacy.\n\nEnumera pasos del loader al ejecutar ELF: mapear segmentos, inicializar GOT, saltar a `_start` antes de `main`.\n\nDiscute role de `CRT` startup files (`crt0.o`) que enlazador añade antes de tu `main`.\n\nRelaciona gestión de registros con calling convention en llamadas recursivas factorial: profundidad stack vs registros caller-saved.\n\nPractica calcular tamaño frame si hay 6 locales int y 2 spill slots.\n\nCierra el curso Autómatas y Compiladores escribiendo reflexión de una página: cómo módulos 1–8 (teoría) habilitan confianza en módulos 9–15 (ingeniería), citando al menos tres conexiones concretas entre lemas, automatas y fases reales de `gcc` o `rustc`.\n\n## Monografía breve: tocar el hardware de forma responsable\n\nEl backend es donde abstracción cede a realidad: número finito de registros, latencias de carga, convenciones que si se violan rompen interoperabilidad con bibliotecas del sistema. Asignación de registros y layout de stack no son detalles menores: son la diferencia entre programa que corre y segmentation fault misterioso.\n\nConceptualizar codegen como pattern matching ayuda: cada patrón TAC mapea a plantilla assembly con instancias de operandos. Extensión a ARM vs x86 es catálogo de plantillas sobre mismo IR.\n\nStack frames conectan modelo de llamadas recursivas del curso de estructuras con ejecución física. Ver crash por stack overflow en recursión infinita cierra círculo teórico-práctico.\n\nLinker resuelve símbolos que el backend dejó pendientes (`call printf` sin dirección final). Loader crea proceso. Estudiar compiladores sin este tramo final incompleta la narrativa del «programa listo para usuario».\n\nCierra el curso implementando en papel regalloc de tu TAC del laboratorio y reflexionando qué aprendiste desde módulo 1 hasta aquí: alfabetos, autómatas, límites Turing, pipeline completo.\n\n## Consolidación evaluativa\n\nAntes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.\n\nTrabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.\n\nSi el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.\n\nPor último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).\n\n## Ejercicios modelo con solución comentada\n\n**Ejercicio 1.** Asigna tres temporales a dos registros con spill explícito.\n\n**Ejercicio 2.** Dibuja stack tras `main` llama `foo(1,2)`.\n\n**Ejercicio 3.** Traduce TAC suma a tres instrucciones assembly del snippet.\n\n**Ejercicio 4.** Caller-saved: ¿quién preserva `%rax` en llamada?\n\n**Ejercicio 5.** Rol del linker resolviendo `printf`.\n\nCierra curso releyendo checklist módulos 6–15.\n\n## Apéndice de vocabulario operativo\n\nRepasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.\n\nCompara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.\n\nRelee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).\n\nSi aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.\n\nPara preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.\n\nCierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.\n\n## Refuerzo final\n\nEnumera seis registros callee-saved y cuatro caller-saved de SysV x64 sin mirar apuntes, luego corrige con el material del desarrollo. Relaciona cada uno con una llamada a función de tu propio código C o del laboratorio.\n\nOpcionalmente compila un programa C mínimo con `gcc -S` y localiza prologue, cuerpo y `ret` en el listado. Relaciónalo con el pseudo-assembly del snippet y con la pila de activaciones. Cierra el itinerario 6–15 revisando que cada checklist del curso QuimiSell esté marcado.\n\n\nAdemás, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.\n\nVuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.\n\nCierra trazando en papel la traducción de una única cuádrupla `ADD` del módulo 13 a las tres instrucciones del generador x86 conceptual y etiquetando qué representa cada operando en memoria o registro.\n\nSi tienes dudas, etiqueta en un dibujo de pila el frame de una función con dos parámetros enteros y una variable local.\n\n## Síntesis y checklist antes de avanzar\n\n- Dibujé stack frame con return addr, saved rbp, locals.\n- Asigné tres temporales IR a dos registros con un spill manual.\n- Leí listing conceptual del módulo y lo mapeé a TAC previo.\n- Nombré registros de argumento en SysV x64.\n- Cierre del curso: pipeline completo fuente → binario; laboratorio integra fases 10–15.",
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
          question: "Calling convention define:",
          options: ["Qué registros/stack usan parámetros y quién preserva registros",
          "Solo tokens",
          "Gramática",
          "CYK"],
          answerIndex: 0,
          explanation: "ABI entre llamador y llamado."
        },
        {
          question: "Spill en asignación de registros:",
          options: ["Variable va a stack por falta de registradores libres",
          "Error fatal siempre",
          "Lexer",
          "Parse shift"],
          answerIndex: 0,
          explanation: "Memoria respaldo cuando el grafo de conflictos no cabe."
        },
        {
          question: "Activation record contiene:",
          options: ["Retorno, marco anterior, locales y temporales spill",
          "Solo lexer buffer",
          "Tabla LR",
          "Solo φ"],
          answerIndex: 0,
          explanation: "Layout de pila por invocación."
        },
        {
          question: "Prologue de función:",
          options: ["Prepara marco de pila y guarda registros callee-saved usados",
          "Lexifica entrada",
          "Ejecuta CYK",
          "Elimina IR"],
          answerIndex: 0,
          explanation: "Preámbulo antes del cuerpo."
        },
        {
          question: "Pattern matching de instrucciones mapea:",
          options: ["Árbol IR/tabla a opcodes de CPU",
          "Tokens a lexer",
          "MT a regex",
          "FIRST a FOLLOW"],
          answerIndex: 0,
          explanation: "Selección de código en backend."
        },
        {
          question: "Salto relocatable en .text:",
          options: ["Offset ajustado por linker al cargar",
          "Valor final fijo en lexer",
          "Solo IR",
          "φ incondicional"],
          answerIndex: 0,
          explanation: "Relocalización de símbolos."
        },
        {
          question: "Alineación de stack en x86-64 System V:",
          options: ["SP múltiplo de 16 antes de `call`",
          "Sin restricción",
          "Solo 4 bytes",
          "Lexer rule"],
          answerIndex: 0,
          explanation: "Requisito ABI común."
        },
        {
          question: "Depura: crash al llamar C desde codegen. Causa frecuente:",
          options: ["Convención de registro/stack incorrecta",
          "CYK",
          "Bombeo",
          "Ambigüedad CFG"],
          answerIndex: 0,
          explanation: "Desajuste ABI rompe calling."
        },
        {
          question: "Callee-saved registros:",
          options: ["Preservados por la función llamada si los modifica",
          "Ignorados siempre",
          "Solo lexer",
          "Tokens"],
          answerIndex: 0,
          explanation: "Responsabilidad del callee."
        },
        {
          question: "Validación final del backend:",
          options: ["Ensamblar/enlazar y ejecutar prueba golden",
          "Solo leer IR",
          "FIRST/FOLLOW",
          "ε-clausura"],
          answerIndex: 0,
          explanation: "Prueba end-to-end del pipeline."
        }
      ],
      exercises: [
        {
          id: 7401,
          instruction: "Describe layout de activation record (return address, saved fp, locales) para una llamada f() en x86-64.",
          placeholder: "Stack frame: ...",
          expectedKeywords: ["stack", "frame", "rbp", "rsp"],
          hint: "Push rbp; mov rbp,rsp; sub rsp, ...",
          isEmailSubmission: false
        },
        {
          id: 7402,
          instruction: "DESAFÍO: Asigna dos variables vivas a 3 registros con coloreo de grafos (simplifica el grafo de interferencia del módulo).",
          placeholder: "Registros: ...",
          expectedKeywords: ["grafo", "color", "spill", "registro"],
          hint: "Nodos de alto grado primero; spill si no hay color.",
          isEmailSubmission: true
        }
      ],

    }]
}
