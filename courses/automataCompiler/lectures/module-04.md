## Panorama del tema: EXPRESIONES REGULARES (REGEX), TEOREMA DE KLEENE Y CONSTRUCCIÓN DE THOMPSON

Una **expresión regular** es una notación compacta para describir un lenguaje regular: combinas símbolos, concatenación (yuxtaposición), alternancia (`|`) y repetición (`*`). El **teorema de Kleene** establece la equivalencia de cuatro caras de la misma moneda: lenguajes regulares, expresiones regulares, DFA y NFA aceptan exactamente la misma clase de lenguajes sobre \(\Sigma^*\).

La **construcción de Thompson** convierte cualquier expresión regular en un **NFA-ε** legible pieza a pieza: un bloque para un símbolo, otro para unión, otro para estrella. Ese NFA se puede pasar a DFA vía subset construction (módulo 3) y ejecutar en tiempo lineal en la longitud de la entrada.

En ingeniería, casi nunca escribes el autómata a mano: escribes regex y el motor compila. Esta lección une la algebra formal con `re.compile` del snippet del curso.

## Objetivos de la lección

- Leer y escribir regex sobre un alfabeto finito y dar su semántica como lenguaje.
- Aplicar operaciones de concatenación, unión y estrella a nivel de expresiones.
- Enunciar el teorema de Kleene y el rol de cada modelo equivalente.
- Explicar Thompson a alto nivel (concatenación = conectar salidas a entradas; `*` = ε-loop).
- Interpretar el snippet `re` de validación de correos como DFA compilado implícito.

## Desarrollo de la lección

### Sintaxis y semántica

Gramática típica de expresiones regulares (precedencia de `*` sobre concatenación, sobre `|`):

- \(\varnothing\) — lenguaje vacío.
- \(\epsilon\) — solo cadena vacía.
- \(a \in \Sigma\) — lenguaje \(\{a\}\).
- \(R + S\) o \(R \mid S\) — unión.
- \(RS\) — concatenación.
- \(R^*\) — cero o más repeticiones de \(R\).

**Semántica**: \(L(R) \subseteq \Sigma^*\), el lenguaje denotado por la expresión \(R\).

Ejemplo: \((0|1)^*\) es «cualquier cadena binaria». `1*0` es «cualquier cantidad de 1 seguida de un 0».

### Operadores algebraicos entre lenguajes (repaso conectado)

Si \(L(R_1) = L_1\) y \(L(R_2) = L_2\):

- \(L(R_1 \mid R_2) = L_1 \cup L_2\)
- \(L(R_1 R_2) = L_1 L_2\)
- \(L(R_1^*) = L_1^*\)

Las identidades distributivas y asociativas permiten reescribir regex antes de optimizar el autómata resultante.

### Teorema de Kleene (enunciado operativo)

**Parte útil para compiladores**: para toda regex \(R\) existe un NFA-ε que acepta \(L(R)\); para todo DFA existe una regex equivalente (aunque puede crecer exponencialmente en el peor caso).

Cadena de conversiones estándar:

Regex \(\xrightarrow{\text{Thompson}}\) NFA-ε \(\xrightarrow{\text{subset}}\) DFA \(\xrightarrow{\text{minimización}}\) DFA mínimo (opcional).

### Algoritmo de Thompson (visión modular)

Construcción recursiva sobre el AST de la regex:

1. **Símbolo `a`**: dos estados con arco `a`.
2. **Concatenación \(AB\)**: conectar estados finales de A con iniciales de B con ε.
3. **Unión \(A|B\)**: nuevo inicio con ε a A y a B; nuevos finales desde finales de A y B con ε.
4. **Estrella \(A^*\)**: ε desde inicio a A, ε de finales de A a inicio, ε de inicio a nuevo final.

Resultado: siempre NFA-ε con un solo estado inicial y uno final (salvo optimizaciones).

### McNaughton–Yamada–Thompson (adelanto)

Variante que construye NFA con etiquetas en arcos más aptas para algunas optimizaciones (MYT/position automata). No cambia el lenguaje; cambia la forma del grafo para facilitar determinización eficiente.

### Regex en motores prácticos versus teoría

Python `re` añade anclas `^`, `$`, clases `[a-z]`, cuantificadores `{m,n}`, grupos de captura — extensiones que siguen compilándose a autómatas (a veces con backtracking para features no regulares puro). El patrón del snippet:

`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`

es un filtro **de forma** típico en formularios: no garantiza RFC 5321 completo, pero define un lenguaje regular sobre caracteres ASCII de la cadena de entrada.

### Equivalencias útiles en exámenes

- \(R^+ = R R^*\) (una o más).
- \(R?\) en algunos motores = \(R \mid \epsilon\).
- \(\Sigma^*\) como \((a_1 \mid a_2 \mid \cdots \mid a_k)^*\) para \(\Sigma = \{a_1,\ldots,a_k\}\).

### Límites: qué **no** es regular (puente al módulo 5)

Cualquier intento de expresar \( \{ a^n b^n \} \) con solo `*`, `|` y concatenación falla intuitivamente porque necesitas **contar** sin límite. Regex con backreferences en motores modernos salen de la clase puramente regular.

### Glosario de símbolos regex formales versus Python `re`

En teoría, `|` es unión y la concatenación se escribe yuxtaponiendo. En Python, `|` reciente en versiones modernas existe, pero históricamente se usó alternancia con el mismo carácter dentro del patrón. El punto `.` **no** significa «cualquier símbolo del alfabeto Σ del curso» sino cualquier carácter excepto salto de línea por defecto — detalle de implementación que no cambia la regularidad del fragmento pero sí el lenguaje concreto aceptado. Los cuantificadores `{m,n}` generan autómatas con estados que recuerdan cuántas repeticiones van en el bloque actual; siguen siendo finitos para valores fijos de `m` y `n`.

### Ejercicio de Thompson compuesto

Construye el NFA-ε de `(a|b)*abb` descrito en entrevistas: el bloque estrella envuelve alternancia entre `a` y `b`; la cola `abb` concatena un DFA en cadena de tres símbolos. Dibuja estados finales solo al completar `abb`. Verifica mentalmente que `aabb` falla (falta un `b`) y que `aaabb` falla (orden incorrecto al final). Ese patrón es el puente entre regex algebraico y diseño manual de estados.

### Desduplicación en motores reales

Algunos optimizadores fusionan ε-aristas antes de determinizar para evitar explosión intermedia. Python cachea automatas compilados por proceso; en servicios de larga vida conviene compilar patrones al arranque, como hace el snippet con `evaluador = re.compile(...)`.

## Demostración enlazada al código del módulo

```python
patron_email = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
evaluador = re.compile(patron_email)
```

- `re.compile` **construye el autómata una vez** y lo reutiliza: Thompson + determinización parcial ocurren aquí, no en cada `match`.
- `match` ancla al inicio (`^`); por eso `'correo_invalido.com'` sin `@` falla.
- El fragmento `.{2,}` en el TLD exige **al menos dos** letras: cuantificador que en teoría expande a repetición regular del símbolo precedente.

**Línea por línea de las pruebas**:

- `contacto@quimisell.com` — cumple clases de usuario, `@`, dominio y TLD ≥ 2 letras ⇒ `True`.
- `correo_invalido.com` — no hay `@` donde el patrón lo exige ⇒ `False`.

**Cuidado pedagógico**: validar email en producción requiere capas extra (DNS, normalización IDN). Aquí solo practicamos **reconocimiento regular**.

## Aplicaciones en sistemas reales

**Lexers de compiladores (Flex, `lex` legacy)**: cada regla en el archivo `.l` es regex; Flex genera DFA y código C. Es el pipeline Thompson → subset en cadena industrial.

**Rutas y políticas en Kubernetes / Envoy**: paths HTTP y filtros de URI a menudo se expresan como regex o variantes; el control plane compila a autómatas para matching en cada request.

**Herramientas de redacción y IDEs**: resaltado de sintaxis tokeniza con regex precompiladas por lenguaje; actualizar un patrón equivale a regenerar el autómata subyacente.

## Errores clásicos en examen

- Confundir `*` (cero o más) con `+` (una o más) en semántica de lenguaje.
- Olvidar que concatenación es **no conmutativa**: `ab` \(\neq\) `ba` como regex.
- Pensar que cualquier patrón con `*` siempre genera infinitas cadenas distintas (puede generar solo \(\{\epsilon\}\) si el factor es \(\epsilon\)).
- Creer que Thompson produce DFA directamente (produce NFA-ε).
- Usar el lema del bombeo al revés: «cumple bombeo ⇒ regular» es **falso**.

## Preguntas de entrevista

**P: ¿Cómo convertirías la regex `(a|b)*abb` en idea de lenguaje?**

**R:** Todas las cadenas sobre \(\{a,b\}\) que **terminan** con la subcadena `abb`. Es el ejemplo clásico de NFA compacto cuyo DFA recuerda los últimos tres símbolos.

**P: ¿Por qué `re.compile` mejora rendimiento?**

**R:** La fase costosa es construir el autómata desde la regex; compilar una vez y reutilizar el objeto evita repetir Thompson/subset en cada coincidencia sobre millones de filas o líneas de log.

## Síntesis y checklist antes de avanzar

- Escribo regex para al menos dos lenguajes finitos dados en extensión.
- Explico Thompson con unión, concatenación y estrella con ε-aristas.
- Ejecuté mentalmente las dos pruebas del snippet antes de ver la salida.
- Conozco la cadena regex → NFA → DFA y su lugar en el lexer (módulo 10).
- Preparado para usar el lema del bombeo como herramienta **negativa** (módulo 5).
- Repasé equivalencia regex, NFA y DFA con el teorema de Kleene.


### Precedencia y paréntesis en regex

La expresión `ab|c` suele leerse `(ab)|(c)` no `a(b|c)` según reglas de concatenación. En parciales, reescribe siempre con paréntesis explícitos. El AST de Thompson respeta el parseo; un parse incorrecto cambia el lenguaje.

### Lenguaje de dígitos y literales en compiladores

- Entero decimal: `0 | [1-9][0-9]*` en pseudoregex.
- Flotante simple: combina parte entera, punto, exponente — varias regex en lexer con prioridad (regla más larga gana en Flex).

Estas piezas serán el módulo 10; aquí solo fijas que cada pieza es regular.

### De regex a código: pipeline real de `re.compile`

1. Parsear patrón a AST.
2. Thompson → NFA-ε.
3. Opcional: determinizar parcialmente para prefijos fijos.
4. Ejecutar con simulación de DFA o backtracking si hay extensiones no regulares.

El snippet usa solo el motor estándar; no ves el autómata, pero existe en memoria del objeto compilado.

### Thompson paso a paso mental para `a|b`

Inicio ε-split a ramas que leen `a` o `b`; ε hacia estados finales comunes. Concatenar `c` después une salidas de unión con inicio del bloque `c`. Dibujar con lápiz fija más que memorizar fórmulas.

### Equivalencia regex ↔ DFA para ingenieros

Cuando un PM pide «filtro regex en logs», la garantía de tiempo lineal proviene del autómata subyacente, no de la brevedad del patrón. Patrones con muchas alternativas anidadas pueden generar NFAs grandes; monitorizar tiempo de compilación en despliegues.

### Ejemplo extendido de lenguaje: correos simplificado versus RFC

El patrón del curso valida forma ASCII común; RFC permite comentarios, comillas y dominios punycode. Ampliar regex sin salir de regular es posible para subconjuntos, pero la complejidad del patrón crece y la mantenibilidad cae — motivo por el cual validación real usa parsers adicionales y DNS.

### Identidad útil: `(R*)*` = `R*`

Repetir la estrella no añade expresividad. Simplificar regex antes de Thompson reduce ε-bloques redundantes.


### Diferencias POSIX versus PCRE

POSIX regex y Perl-style divergen en metacaracteres. Compiladores de lenguajes suelen generar regex POSIX-like sin backtracking catastrófico en el núcleo. Conocer la variante evita copiar patrones de Stack Overflow que no compilan en tu herramienta.

### Escapado de metacaracteres

Punto `.` en regex suele significar cualquier símbolo excepto newline; backslash escapa. En el patrón de email, `\[` no aparece pero dominios con caracteres especiales requieren cuidado.

### Lema de Arden y sistemas de ecuaciones de lenguaje

\(L = a L b \cup \epsilon\) resuelve a lenguaje no regular en general si mezclas; para regular, ecuaciones lineales se resuelven con algebra de Kleene. Técnicamente útil en conversión regex ↔ DFA en algunos algoritmos.

### Automatas con complemento interno en Thompson

Para `^patrón` en anclas, a veces se construye autómata del complemento solo sobre prefijo de línea — optimización de motores.

### Tabla resumen de operadores regex

| Operador | Lenguaje | Thompson |
|----------|----------|----------|
| \| | unión | ε-split |
| concat | producto | ε-glue |
| * | estrella de Kleene | ε-loop |

### Validación en capas

Capa 1 regex del snippet; Capa 2 parser si hay comillas anidadas; Capa 3 DNS MX. El módulo insiste en capa 1.

### Literales y clases de caracteres

`[a-zA-Z]{2,}` en el snippet exige al menos dos letras en TLD: cuantificador acotado inferiormente sigue siendo regular (expansión finita mental a alternativas repetidas o bucle en autómata con contador en estados).

### Anti-patrón: regex gigante en un solo archivo

Mantenibilidad: divide patrones por token en lexer (módulo 10). Teorema de Kleene garantiza que cada regla sigue siendo regular; la modularidad es ingeniería, no matemática.


### Cierre narrativo de regex en producción

Toda validación de formulario que «solo usa regex» está, sin nombrarlo, ejecutando un DFA compilado. El teorema de Kleene garantiza que no necesitas más poder para esos patrones, y el lema del bombeo te advierte cuándo dejar de insistir con regex. En el laboratorio del curso, la primera etapa de tokenizar números e identificadores será exactamente este pipeline: expresiones escritas por humanos, autómatas ejecutados por la máquina.

### Ejercicio: escribir regex para múltiplos de 4 en binario sobre el sufijo

No trivial de leer a simple vista: diseña estados mentalmente primero, luego expresión. Compara longitud de regex versus claridad del DFA — a veces el autómata en diagrama comunica mejor al equipo que una regex de treinta caracteres.


### Apéndice: derivación manual de lenguaje de un patrón

Patrón `(0|1)*01` — todas las cadenas binarias que terminan en `01`. Primer símbolo de sufijo fijo: tras leer `0` esperas `1` final. Construye NFA con cadena para `01` y bucle `(0|1)*` al inicio vía Thompson. Simula `0001` y `0010` en el autómata mental.

### Glosario regex del módulo

**Concatenación implícita**, **alternancia**, **clausura de Kleene**, **ancla de inicio**, **clase de caracteres**, **cuantificador**. Cada concepto mapea a un bloque en Thompson.

### Relación con módulo 10

El lexer emitirá tokens cuyos lexemas satisfacen regex independientes; la prioridad «regla más larga primero» no cambia el hecho de que cada regla es regular. Documenta en tu README del laboratorio qué regex usaste por token.


### Lección integrada: Thompson en cinco minutos de pizarra

Dibuja la unión de `a` y `b`: rombos ε, estados de entrada y salida por bloque, pegamento ε. Añade concatenación con `c` pegando salidas de la unión a la entrada de `c`. Rodea todo con estrella: ε desde nuevo inicio al bloque, ε del final al inicio del bloque, ε del inicio al final nuevo. Ese dibujo es el recurso visual que debes poder reproducir en una pizarra de entrevista sin mirar apuntes.

### Análisis del patrón de email del curso por partes

El prefijo `^` fuerza coincidencia desde el inicio de la cadena en `match`. La clase `[a-zA-Z0-9._%+-]+` es clausura positiva implícita de un carácter de usuario. El arroba es literal. El dominio permite puntos internos con `.-`. El TLD `[a-zA-Z]{2,}` evita dominios de una letra. El `$` cierra ancla al final. Cada trozo traduce a un micro-NFA que Thompson une.

### Cuando evitar regex aunque el lenguaje sea regular

A veces la regex existe pero es ilegible: un DFA dibujado a mano comunica mejor a mantenedores. Kleene dice que hay regex equivalente, no que sea la mejor documentación. En código de compiladores, tablas de Flex son la documentación ejecutable.

### Mini-proyecto

Toma dos patrones del snippet y añade casos de prueba con `re.findall` versus `match` para ver diferencia de anclas. Escribe en el README del laboratorio qué anclas usarás para tokens que deben consumirse completos.

Antes del módulo 10, repasa la tabla de equivalencias del teorema de Kleene y dibuja la cadena Regex → Thompson → subset → DFA mínimo en una sola línea en tu cuaderno. Cuando escribas la primera regla léxica del laboratorio, etiqueta mentalmente en qué eslabón de esa cadena vive tu decisión de diseño.

Comprueba que distingues el lenguaje denotado por `(a*)*` del denotado por `a*`, y que puedes justificar por qué Thompson termina siempre con exactamente un estado inicial y uno final en la construcción estándar del libro. Ejecuta el snippet con al menos una dirección inválida y una válida adicional que inventes tú, anotando qué subcadena viola el patrón compilado.
