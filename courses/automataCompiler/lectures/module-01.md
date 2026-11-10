## Panorama del tema: ALFABETOS, CADENAS Y LENGUAJES FORMALES

Antes de hablar de compiladores, autómatas o complejidad, necesitamos un **vocabulario preciso** para describir texto. Un archivo fuente de Python no es «información vaga»: es una **cadena** — secuencia finita de **símbolos** tomados de un **alfabeto** \(\Sigma\). Cuando decimos que el lexer «tokeniza», en realidad particiona una cadena sobre un alfabeto grande (caracteres Unicode o ASCII) en trozos que más adelante trataremos como símbolos de otro alfabeto (nombres de token).

Un **lenguaje formal** \(L\) no es un idioma humano: es un **conjunto** de cadenas \(L \subseteq \Sigma^*\). «Todas las cadenas binarias con un número par de unos» es un lenguaje; «todos los programas C sintácticamente válidos» es otro mucho más grande. La teoría de la computación estudia qué familia de lenguajes puede reconocer qué clase de máquina; compiladores viven en esa frontera.

En esta lección fijamos \(\Sigma\), \(\epsilon\), concatenación, estrella y clausura positiva de Kleene, operaciones algebraicas entre lenguajes (unión, concatenación, estrella), y la intuición de por qué \(\Sigma^*\) es **infinito** pero cada cadena concreta es **finita**. Es el cimiento de los módulos 2–5 y del laboratorio del curso.

Kleene introdujo históricamente la estrella al estudiar «eventualidades» en lógica; hoy, la misma notación aparece en motores de regex, en demostraciones del teorema de equivalencia DFA–NFA–regex, y en la especificación de tokens. Dominar el formalismo evita traducir mal un patrón de producción («cualquier cantidad de dígitos») a una condición de código incorrecta.

## Objetivos de la lección

- Definir alfabeto, cadena, longitud y cadena vacía \(\epsilon\) sin ambigüedad.
- Calcular concatenaciones y describir \(\Sigma^*\) versus \(\Sigma^+\).
- Definir lenguaje formal como subconjunto de \(\Sigma^*\) y dar ejemplos finitos e infinitos.
- Aplicar operaciones de unión, concatenación y estrella de Kleene sobre lenguajes.
- Conectar estas definiciones con la representación de texto en memoria y con el primer snippet del curso.

## Desarrollo de la lección

### Alfabeto \(\Sigma\) y símbolos

Un **alfabeto** \(\Sigma\) es un conjunto **finito y no vacío** de **símbolos**. Ejemplos:

- \(\Sigma = \{0, 1\}\) — bits, cadenas binarias.
- \(\Sigma = \{a, b\}\) — el juguete teórico habitual en autómatas.
- \(\Sigma\) ASCII imprimible — modeliza bytes de un archivo `.c` antes de normalizar Unicode.

**No confundas** alfabeto con lenguaje: el alfabeto es el «menú de letras»; las **palabras** (cadenas) se construyen eligiendo símbolos con repetición y orden. Un símbolo puede ser un carácter (`+`), un dígito (`7`) o una abstracción de token (`ID`, `NUM`) cuando \(\Sigma\) es el alfabeto de **tokens** en fase de parser.

En implementación, Python representa una cadena sobre Unicode; para nuestros ejemplos binarios usamos `str` con caracteres `'0'` y `'1'`, que son **símbolos de un carácter** cada uno. Formalmente \(\Sigma\) es un conjunto matemático; en código usamos `set` o tipos que respetan la misma finitud.

### Cadenas, longitud y la cadena vacía

Una **cadena** (palabra) \(w\) sobre \(\Sigma\) es una secuencia finita \(w = s_1 s_2 \ldots s_k\) con cada \(s_i \in \Sigma\).

- **Longitud** \(|w| = k\). Si \(k = 0\), la cadena es la **cadena vacía** \(\epsilon\). Por convención \(|\epsilon| = 0\); \(\epsilon\) no es «ausencia de alfabeto», es la cadena de cero símbolos.
- Notación: a veces escribimos cadenas como `01101` sin espacio entre símbolos.

**Ejemplos** con \(\Sigma = \{a, b\}\):

| Cadena \(w\) | \(|w|\) | ¿Pertenece a \(\Sigma^*\)? |
|--------------|---------|------------------------------|
| \(\epsilon\) | 0 | Sí |
| `a` | 1 | Sí |
| `abba` | 4 | Sí |
| `cab` | — | No (c \(\notin \Sigma\)) |

### Concatenación y propiedades algebraicas

La **concatenación** de \(w_1\) y \(w_2\), escrita \(w_1 \cdot w_2\) o \(w_1 w_2\), es la cadena obtenida **pegando** \(w_1\) al frente de \(w_2\). Ejemplo: `ab` · `ba` = `abba`.

Propiedades importantes:

1. **Asociativa**: \((w_1 w_2) w_3 = w_1 (w_2 w_3)\).
2. **Elemento neutro**: \(w \cdot \epsilon = \epsilon \cdot w = w\) para toda cadena \(w\).
3. **No conmutativa** en general: `ab` \(\neq\) `ba`.

En el snippet del módulo, `concatenar` implementa exactamente esta operación mediante `w1 + w2` en Python; `longitud` implementa \(|\cdot|\) con `len`.

### Estrella de Kleene \(\Sigma^*\) y clausura positiva \(\Sigma^+\)

- \(\Sigma^*\) = conjunto de **todas** las cadenas finitas sobre \(\Sigma\), **incluyendo** \(\epsilon\).
- \(\Sigma^+\) = todas las cadenas de longitud **≥ 1**; equivale a \(\Sigma^* \setminus \{\epsilon\}\) cuando \(\Sigma \neq \emptyset\).

**Cardinalidad**: si \(|\Sigma| = n \ge 1\), entonces \(|\Sigma^*|\) es **contablemente infinito**. Para \(n = 2\) y longitud exacta \(k\) hay \(2^k\) cadenas; al sumar \(k = 0, 1, 2, \ldots\) obtenemos infinitas cadenas distintas.

Construcción recursiva mental: \(\Sigma^0 = \{\epsilon\}\); \(\Sigma^{k+1} = \{w a \mid w \in \Sigma^k, a \in \Sigma\}\); entonces \(\Sigma^* = \bigcup_{k \ge 0} \Sigma^k\).

La función `generar_cadenas_kleene(sigma, k)` del curso **no enumera todo** \(\Sigma^*\) (sería imposible en un programa finito); lista cadenas de **longitud exacta** `k` construyéndolas a partir de las de longitud `k-1`. Para `k=2` y \(\Sigma=\{0,1\}\) produce `['00','01','10','11']`. El caso base `k=0` devuelve `[""]`, es decir \(\{\epsilon\}\).

### Lenguajes formales: conjuntos, no gramáticas (aún)

Un **lenguaje** \(L\) sobre \(\Sigma\) cumple \(L \subseteq \Sigma^*\).

Ejemplos:

- **Finito**: \(L = \{\epsilon, 0, 00\}\).
- **Infinito por prefijo**: \(L = \{0^n \mid n \ge 0\} = \{\epsilon, 0, 00, 000, \ldots\}\).
- **Vacío**: \(L = \emptyset\) (ninguna cadena); distinto de \(\{\epsilon\}\), que **sí** contiene la cadena vacía.

En compiladores, «el lenguaje de identificadores C válidos» es un subconjunto enorme de \(\Sigma^*\) donde \(\Sigma\) incluye letras, dígitos y `_`. Más adelante veremos que ese fragmento es **regular** (módulo 2–4).

### Operaciones entre lenguajes (puente a regex)

Dados \(L_1, L_2 \subseteq \Sigma^*\):

| Operación | Definición |
|-----------|------------|
| Unión | \(L_1 \cup L_2 = \{w \mid w \in L_1 \lor w \in L_2\}\) |
| Concatenación | \(L_1 L_2 = \{w_1 w_2 \mid w_1 \in L_1, w_2 \in L_2\}\) |
| Estrella de Kleene | \(L^* = \bigcup_{i \ge 0} L^i\) con \(L^0 = \{\epsilon\}\), \(L^{i+1} = L^i L\) |

Ejemplo numérico: \(L_1 = \{a\}\), \(L_2 = \{b, c\}\) ⇒ \(L_1 L_2 = \{ab, ac\}\). Estas operaciones son las que las **expresiones regulares** nombran más adelante; hoy sólo necesitas la intuición de conjuntos.

### De caracteres a tokens (visión de compilador)

Un compilador no analiza «caracteres aislados» en el parser: el **lexer** produce cadenas sobre un alfabeto de **tipos de token**. Formalmente el mismo marco sirve: si \(\Sigma_{\mathrm{tok}} = \{\textbf{ID}, \textbf{NUM}, \textbf{PLUS}, \ldots\}\), una **secuencia de tokens** es una cadena sobre \(\Sigma_{\mathrm{tok}}\) **con restricciones** impuestas por la gramática (módulo 6).

Sin dominar \(\Sigma^*\), no puedes enunciar correctamente «el lenguaje aceptado por el autómata \(M\)», ni demostrar que \(a^n b^n\) **no** es regular (módulo 5).

### Ejercicios guiados de escritura formal

**Ejercicio A.** Sea \(\Sigma = \{0, 1\}\). Enumera \(L = \{w \in \Sigma^* \mid |w| \le 2\}\) sin olvidar \(\epsilon\). Solución: \(\{\epsilon, 0, 1, 00, 01, 10, 11\}\) — son \(1 + 2 + 4 = 7\) cadenas.

**Ejercicio B.** Describe en español el lenguaje \(L = \{w \mid w \text{ comienza con } 1\}\). Es infinito: `1`, `10`, `101001`, … Pertenece a la familia de **lenguajes regulares** que estudiaremos con DFA.

**Ejercicio C.** Si \(L_1 = \{\epsilon\}\) y \(L_2 = \{0\}\), calcula \(L_1 L_2\) y \(L_2 L_1\). Ambos son \(\{0\}\) porque pegar \(\epsilon\) no cambia la cadena. Esto muestra por qué \(\epsilon\) es neutro.

### Prefijos, sufijos y subcadenas (vocabulario útil)

Dada \(w = uvz\):

- **Prefijo**: cualquier \(u\) (incluidos \(\epsilon\) y \(w\) completa).
- **Sufijo**: cualquier \(z\).
- **Subcadena (factor)**: cualquier \(v\) con \(w = xvy\) para algún \(x, y\).

En análisis de algoritmos sobre strings (KMP, rolling hash), estas definiciones aparecen constantemente. El **prefijo** también reaparece en el lema del bombeo (módulo 5): la parte \(x\) de la descomposición \(w = xyz\) controla dónde cae la repetición dentro de los primeros \(p\) símbolos.

### Clausuras en el panel del compilador

Piensa en el flujo del laboratorio QuimiSell: la cadena fuente `'val = (10 + 5) * 2'` es un elemento de \(\Sigma^*\) con \(\Sigma\) de caracteres imprimibles. El lexer produce otra cadena abstracta de tokens; el parser verifica pertenencia a un lenguaje **libre de contexto**. Cada fase asume que la entrada anterior ya es una cadena bien formada sobre su alfabeto correspondiente. Si mezclas niveles (tratar un token como carácter suelto en la gramática), los errores de implementación son sutiles y difíciles de depurar.

### Nota sobre \(\Sigma\) infinito en la práctica

Matemáticamente \(\Sigma\) es finito. En Unicode hay miles de puntos de código, pero para **un** proyecto fijamos un alfabeto finito efectivo: ASCII + un subconjunto acordado de Unicode. El lexer rechaza caracteres fuera de \(\Sigma\) con error léxico. Esa decisión es de ingeniería, no de matemáticas puras, pero el modelo formal sigue siendo «\(\Sigma\) finito».

| Situación | Alfabeto efectivo |
|-----------|-------------------|
| Archivo `.c` ANSI | Bytes 0–255 o ASCII |
| Python 3 con UTF-8 | Escalares Unicode permitidos por el estándar del lenguaje |
| Binario en teoría | \(\{0,1\}\) |

## Demostración enlazada al código del módulo

El snippet del módulo 1 en `automataCompilerCourse.ts` trabaja con \(\Sigma = \{`0`,`1`\}\):

```python
alfabeto = {'0', '1'}
```

- `longitud(w)` — formaliza \(|\cdot|\). Para `w="011"` devuelve 3.
- `concatenar(w1, w2)` — concatenación. `concatenar("01","10")` → `"0110"`.
- `generar_cadenas_kleene(sigma, k)` — recursión sobre longitud:

  - `k == 0` ⇒ lista con la cadena vacía (único elemento de \(\Sigma^0\)).
  - Paso inductivo: por cada \(w\) de longitud \(k-1\) y cada \(s \in \Sigma\), forma \(ws\) de longitud \(k\).

**Trazado** para `k=2`: base `['']`; desde `sigma` añade `0` y `1` → `['0','1']`; otra vez → cuatro cadenas. Coincide con el comentario del `print`.

**Extensión sugerida**: implementar `pertenece_a_estrella(w, sigma)` verificando que cada carácter de `w` está en el `set`. Eso conecta conjunto de símbolos con validación de entradas en el laboratorio (rechazar caracteres fuera del alfabeto antes de simular el DFA).

**Complejidad del generador**: para \(|Σ| = n\) y longitud \(k\), el algoritmo genera \(n^k\) cadenas y realiza trabajo proporcional a ese número multiplicado por la longitud media de las cadenas (porque copia strings en cada concatenación). Por eso en teoría enumeramos \(Σ^k\); en producción nunca materializamos \(Σ^*\) completo — solo reconocemos pertenencia con autómatas.

**Prueba mental adicional**: ¿qué devuelve `generar_cadenas_kleene({'a','b','c'}, 1)`? Debe ser `['a','b','c']`, es decir \(Σ^1\). Si llamas con `k=3` y \(n=2\), obtienes 8 cadenas: comprueba que no hay duplicados porque cada construcción extiende una cadena única con un símbolo nuevo.

## Aplicaciones en sistemas reales

**Codificación en disco (UTF-8)**: el archivo fuente es una cadena sobre bytes; el estándar UTF-8 define qué secuencias de bytes son válidas. El conjunto de prefijos válidos es un lenguaje sobre un alfabeto de 256 bytes; validadores de encoding implementan reconocimiento similar a autómatas (módulo 2).

**Protocolos de red (HTTP/1.1)**: mensajes de solicitud son cadenas sobre ASCII con estructura lineal `MÉTODO SP URI SP VERSIÓN CRLF`. Las especificaciones RFC describen patrones que luego se implementan con regex y DFAs en servidores como nginx o Envoy.

**Motores de base de datos (LIKE / SIMILAR TO)**: patrones con `%` y `_` son variantes restringidas de expresiones sobre cadenas de caracteres. El optimizador debe decidir si un filtro puede indexarse; saber que el patrón es regular asegura que el reconocimiento es lineal en la longitud de la fila.

## Errores clásicos en examen

- Confundir \(\emptyset\) (lenguaje sin cadenas) con \(\{\epsilon\}\) (lenguaje que solo contiene la cadena vacía).
- Creer que \(\Sigma^+\) incluye \(\epsilon\): no, salvo el caso degenerado \(\Sigma = \emptyset\).
- Pensar que \(|w|\) cuenta «palabras» en sentido natural: cuenta **símbolos** del alfabeto.
- Escribir \(w \in \Sigma\) cuando debería ser \(w \in \Sigma^*\) (símbolo versus cadena de un símbolo).
- Afirmar que \(\Sigma^*\) es «demasiado grande para computar»: es infinito como conjunto, pero cada cadena de entrada en un compilador es finita y procesable.

## Preguntas de entrevista

**P: ¿Cuál es la diferencia entre alfabeto y lenguaje?**

**R:** El alfabeto \(\Sigma\) es el conjunto finito de símbolos permitidos. Un lenguaje \(L\) es cualquier subconjunto de \(\Sigma^*\), es decir, un conjunto de cadenas finitas construidas con esos símbolos. Un alfabeto no contiene cadenas largas: contiene átomos; el lenguaje contiene palabras armadas con ellos.

**P: ¿Por qué \(\epsilon\) es importante si «no se ve» en el archivo fuente?**

**R:** Porque la teoría trata concatenación y estrella de Kleene: \(L^*\) debe incluir la cadena vacía cuando \(L\) puede repetirse cero veces. En regex, `a*` acepta \(\epsilon\). En autómatas, transiciones \(\epsilon\) (módulo 3) reutilizan la misma noción. Sin \(\epsilon\), muchas definiciones algebraicas se rompen.

**P: Dado \(\Sigma = \{a,b\}\), ¿cuántas cadenas de longitud exactamente 4 existen?**

**R:** \(|\Sigma|^4 = 2^4 = 16\). Se obtiene multiplicando \(|\Sigma|\) por sí mismo cuatro veces, una por cada posición. No confundir con «4 cadenas»: son 16 palabras distintas de cuatro letras.

### Repaso rápido en una tabla

| Símbolo / notación | Significado |
|--------------------|-------------|
| \(\Sigma\) | Alfabeto (finito, no vacío) |
| \(w \in \Sigma^*\) | Cadena finita sobre \(\Sigma\) |
| \(\epsilon\) | Cadena vacía, \(|\\epsilon| = 0\) |
| \(L \subseteq \Sigma^*\) | Lenguaje formal |
| \(L_1 L_2\) | Concatenación de lenguajes |
| \(L^*\) | Cero o más repeticiones de cadenas de \(L\) |

Memorizar esta tabla acelera la lectura de enunciados en los módulos de autómatas: casi todo problema comienza con «Sea \(\Sigma = \ldots\) y \(L = \ldots\)».

Cuando implementes el lexer del laboratorio, cada token reconocido es evidencia de que un prefijo de la entrada pertenece a un lenguaje regular sobre caracteres; cuando el parser acepte la secuencia completa, habrás verificado pertenencia a un lenguaje más rico. Sin el vocabulario de esta lección, esas dos afirmaciones suenan metafóricas; con ellas, son enunciados matemáticos comprobables.

## Síntesis y checklist antes de avanzar

- Puedo dar un ejemplo de \(\Sigma\) de tamaño 2 y listar todas las cadenas de longitud ≤ 2.
- Explico por qué \(w \cdot \epsilon = w\) y por qué `concatenar` en Python refleja esa propiedad.
- Distingo \(\Sigma^*\) y \(\Sigma^+\) con un ejemplo y con el resultado de `generar_cadenas_kleene` para \(k=0\) versus \(k \ge 1\).
- Defino lenguaje formal como subconjunto de \(\Sigma^*\) y distingo lenguaje finito de infinito.
- Ejecuté el snippet y predije su salida antes de correrlo.
- Estoy listo para el módulo 2: autómatas deterministas que **reconocen** lenguajes regulares sobre \(\Sigma^*\).


### Notación mixta en apuntes y libros

Algunos textos escriben cadenas como secuencias de símbolos sin comillas; otros usan `cadena` con backticks en documentación de ingeniería. En demostraciones formales, distingue **símbolo** \(a\) (elemento de \(\Sigma\)) de **cadena de un símbolo** \(\{a\}\). El lenguaje \(\{a\}\) contiene una sola cadena de longitud 1; el lenguaje \(\{aa\}\) contiene una sola cadena de longitud 2. Esta pedantería evita errores al pasar de regex \((a)\) a conjuntos.

### Potencia de un lenguaje y notación \(L^n\)

Definimos \(L^0 = \{\epsilon\}\) y \(L^{n+1} = L^n L\). Si \(L = \{0\}\), entonces \(L^3 = \{000\}\). Si \(L = \{0,1\}\), \(L^2\) tiene cuatro cadenas. La estrella \(L^*\) es unión de todas las potencias. Cuando en el módulo 4 escribas \((01)^*\), estás nombrando \(\bigcup_{n\ge 0} (01)^n\) donde \((01)^n\) es concatenación repetida de la cadena `01`, no exponente numérico.

### Cardinalidad y computabilidad finita por entrada

Aunque \(\Sigma^*\) sea infinito, toda entrada a un compilador tiene longitud \(n\) finita. Los autómatas y regex procesan en tiempo \(O(n)\) respecto a esa entrada. La infinitud de \(\Sigma^*\) describe el **espacio de discurso** del problema, no el tamaño del archivo concreto del alumno.
