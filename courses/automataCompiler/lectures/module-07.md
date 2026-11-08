## Panorama del tema: AUTÓMATAS DE PILA (PDA), FORMA NORMAL DE CHOMSKY, CYK Y \(a^n b^n\)

Los lenguajes libres de contexto ganan **memoria acotada pero no finita en el sentido de contador ilimitado**: un autómata finito solo recuerda en qué estado está; un **autómata de pila** (PDA) recuerda una secuencia en estructura **LIFO** (último en entrar, primero en salir). Esa pila es exactamente lo que permite reconocer \(L = \{a^n b^n \mid n \ge 0\}\): por cada `a` leída se hace **push**; por cada `b`, **pop**; aceptar solo si al terminar la entrada la pila queda vacía.

En este módulo formalizamos el PDA como tupla de siete componentes, establecemos la equivalencia **CFG \(\equiv\) PDA \(\equiv\) LLC**, normalizamos gramáticas a la **Forma Normal de Chomsky (CNF)** para algoritmos mecánicos, y ejecutamos el **algoritmo CYK** de reconocimiento en \(O(n^3)\). El laboratorio del curso y muchos exámenes vuelven una y otra vez al ejemplo \(a^n b^n\) porque condensa toda la intuición de pila en cinco líneas de código.

## Objetivos de la lección

- Definir un PDA (determinista o no determinista) y sus operaciones push, pop y lectura del tope.
- Construir un PDA que acepte \(a^n b^n\) y contrastarlo con la imposibilidad de un DFA equivalente.
- Enunciar y usar la equivalencia entre gramáticas LLC y PDA.
- Transformar una CFG pequeña a CNF siguiendo pasos estándar.
- Aplicar el algoritmo CYK para decidir pertenencia de una cadena a \(L(G)\) en CNF.

## Desarrollo de la lección

### Definición formal del PDA

Un **autómata de pila** (PDA) es una tupla
\(M = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)\):

- \(Q\): estados finitos.
- \(\Sigma\): alfabeto de **entrada**.
- \(\Gamma\): alfabeto de **pila** (símbolos que se apilan).
- \(\delta\): función de transición (en el PDA **no determinista** habitual, \(\delta: Q \times (\Sigma \cup \{\epsilon\}) \times \Gamma \rightarrow \mathcal{P}(Q \times \Gamma^*)\)): dado estado, símbolo de entrada (o \(\epsilon\)) y símbolo leído del tope, devuelve un **conjunto** de posibles muevos, cada uno con nuevo estado y cadena a reemplazar en el tope (puede ser vacía = pop múltiple, o varios símbolos = push).
- \(q_0 \in Q\): estado inicial.
- \(Z_0 \in \Gamma\): símbolo **fondo de pila** (marcador inicial).
- \(F \subseteq Q\): estados de aceptación.

**Aceptación** (criterio habitual en teoría): la máquina acepta si, tras consumir toda la entrada, está en un estado de \(F\) **y** la pila cumple la condición de aceptación del modelo (por stack vacío excepto \(Z_0\), o solo estado final, según la definición del curso; el snippet del módulo usa «pila vacía lógica» equivalente a contar emparejamientos).

El PDA **no determinista** es más expresivo que el PDA determinista en general; para LLC basta el ND-PDA, análogo a que NFA y DFA son equivalentes en regulares.

### Pila LIFO: push, pop, top

Operaciones conceptuales:

- **Push(\(\gamma\))**: insertar cadena \(\gamma\) sobre el tope (símbolo a símbolo o bloque según la transición).
- **Pop / Top**: leer el tope para elegir transición; consumir según la transición.
- La pila nunca se «olvidó» del medio: solo acceso al tope; por eso modela anidamiento, no colas (\(a^n b^n c^n\) requiere más poder — Turing).

### PDA para \(a^n b^n\) paso a paso

Para \(w = aabb\):

| Paso | Entrada restante | Pila (abajo \(\rightarrow\) arriba) | Acción |
|------|------------------|-------------------------------------|--------|
| 1 | `aabb` | \(Z_0\) | leer `a`, push marcador |
| 2 | `abb` | \(A, Z_0\) | push por cada `a` (simplificación del snippet: un `A` por `a`) |
| … | | tres `A` tras tres `a` | |
| lectura `b` | | pop un `A` por cada `b` | |
| fin | \(\epsilon\) | solo \(Z_0\) o vacía según convención | **aceptar** si iguales |

Si \(w = aaabb\) (desbalance), tras leer las tres `b` la pila aún tiene `A`: **rechazar**. Si \(w = ababa\), al encontrar `b` con pila vacía prematuramente, rechazar.

La función Python del módulo implementa esta **estrategia en dos fases**: primero solo `a` con pushes, luego solo `b` con pops, sin mezclar alfabetos en medio — válido para este lenguaje particular, aunque un PDA formal tendría estados explícitos \(q_a, q_b, q_{acept}\).

### Equivalencia CFG \(\leftrightarrow\) PDA

**Teorema (esquemático)**: \(L\) es LLC \(\Leftrightarrow\) existe gramática \(G\) con \(L(G)=L\) \(\Leftrightarrow\) existe PDA que acepta \(L\).

- **CFG \(\rightarrow\) PDA**: construcción estándar que simula derivaciones leftmost usando la pila para guardar el prefijo de la derivación pendiente (los no terminales por expandir).
- **PDA \(\rightarrow\) CFG**: triangula configuraciones (estado, tope de pila, altura) en variables de gramática; es más técnica y aparece en demostraciones de cursos teóricos.

En ingeniería de compiladores rara vez compilamos PDA a CFG; vamos de especificación en BNF a parser LL/LR. La equivalencia explica **por qué** LR parsers usan una pila explícita de estados.

### Forma Normal de Chomsky (CNF)

Una CFG está en **CNF** si toda regla es de una de dos formas:

1. \(A \rightarrow BC\) con \(A, B, C\) no terminales.
2. \(A \rightarrow a\) con \(a\) terminal.

Opcionalmente se permite \(S \rightarrow \epsilon\) si \(\epsilon \in L(G)\), con restricciones para que \(S\) no aparezca en cuerpos.

**Algoritmo de conversión (resumen operativo)**:

1. Eliminar producciones \(\epsilon\) (excepto posiblemente \(S \rightarrow \epsilon\)).
2. Eliminar producciones unitarias \(A \rightarrow B\).
3. Agregar variables «alias» para cadenas mixtas de longitud \(>2\) en lados derechos (alfabetización de Chomsky).
4. Descomponer cuerpos \(A \rightarrow X_1 X_2 \ldots X_k\) en cadenas de binarios.

**Ejemplo mini**: de \(S \rightarrow aSb \mid ab\) (genera \(a^n b^n\) en forma alternativa) a CNF requiere variables intermedias para encadenar terminales y no terminales; el resultado aumenta \(|V|\) pero simplifica CYK.

### Algoritmo CYK (Cocke–Younger–Kasami)

Dado \(G\) en CNF y cadena \(w = a_1 a_2 \ldots a_n\):

1. Construir tabla \(P[i,j]\): conjunto de no terminales que derivan la subcadena \(a_i \ldots a_j\).
2. **Base**: \(P[i,i] = \{A \mid A \rightarrow a_i\}\).
3. **Inducción** en longitud \(L = 2 \ldots n\): para cada partición \(i \le k < j\), si \(B \in P[i,k]\) y \(C \in P[k+1,j]\) y existe \(A \rightarrow BC\), entonces \(A \in P[i,j]\).
4. \(w \in L(G)\) iff \(S \in P[1,n]\).

**Ejemplo** \(w = ba\) con reglas mínimas: si no hay \(B \rightarrow b\) y \(C \rightarrow a\) enlazados por algún \(A \rightarrow BC\), la celda final no contiene \(S\).

Complejidad: \(O(n^3 \cdot |G|)\) — útil en teoría y en NLP para gramáticas pequeñas; no escala a gramáticas completas de C++.

### Greibach (GNF) — mención útil

La **Forma Normal de Greibach** exige \(A \rightarrow a\alpha\) con \(a\) terminal al inicio. Facilita parsers top-down sin backtracking en algunos casos. CYK usa CNF; LL parsers prefieren gramáticas cerca de LL(1), no necesariamente GNF.

### PDA formal para \(a^n b^n\) con estados explícitos

Estados \(q_0\) (lectura `a`), \(q_1\) (lectura `b`), \(q_{acept}\). Transiciones: en \(q_0\) con `a`, push \(Z\) y permanecer en \(q_0\); al leer primera `b` pasar a \(q_1\); en \(q_1\) con `b`, pop si tope coincide; al fin de cadena, aceptar si pila vacía y estado aceptación. Cualquier `b` en \(q_0\) o `a` en \(q_1\) rechaza. Esta máquina clarifica lo que el snippet Python colapsa en dos bucles `while`.

### Conversión CFG \(\rightarrow\) CNF: micro-ejercicio

Partir de \(S \rightarrow aSb \mid ab\). Introducir variables para terminales en producciones mezcladas: \(T_a \rightarrow a\), \(T_b \rightarrow b\), reescribir \(S \rightarrow T_a S T_b \mid T_a T_b\), luego binarizar lados derechos largos con variables auxiliares \(U_1\). El tamaño de gramática crece \(O(n^2)\) en el peor caso pero CYK solo depende de reglas binarias y terminales unitarios.

### Complejidad y relevancia de CYK

\(O(n^3 |G|)\) hace inviable CYK para gramática completa de Java, pero pedagogía y reconocimiento de **toy languages** en investigación sí lo usan. Además, demuestra que pertenencia a LLC es **decidible** (a diferencia de equivalencia de CFG, indecidible).

### Cierre de lenguajes LLC (propiedades útiles en examen)

Los LLC son cerrados bajo unión, concatenación, Kleene star, homomorfismo, intersección con regulares — pero **no** bajo intersección general ni complemento (de ahí la diferencia con regulares). Citar estas propiedades justifica construcciones en compiladores (p. ej. filtrar tokens reservados intersecando con autómata regular).

## Demostración enlazada al código del módulo

La función `pda_reconocer_an_bn(cadena)` implementa reconocimiento por **contador en lista Python** (pila simulada):

- Fase 1: mientras el carácter es `a`, `pila.append('A')` y avanza el índice.
- Fase 2: mientras es `b`, si la pila está vacía retorna `False` (falta de `a` previa); si no, `pop()`.
- Acepta si el índice llegó al final **y** la pila quedó vacía (`len(pila)==0`).

Casos de prueba del snippet: `'aaaabbbb'` tiene cuatro `a` y cuatro `b`: acepta. `'aaabb'` tiene tres `b` pero solo dos `a` en la fase de pops: tras dos `b` la pila ya está vacía; el tercer `b` encuentra pila vacía \(\rightarrow\) `False`.

**Diferencia con PDA formal**: no hay estados \(Q\) ni símbolo \(Z_0\); no rechaza cadenas con `b` antes de `a` en la fase 1 (p. ej. `baab`) porque la fase 1 solo consume `a` y la fase 2 solo `b` — si queda `ba` después de fase 1 con pila vacía, fase 2 no consume nada y el índice no llega al final: rechaza correctamente.

## Aplicaciones en sistemas reales

**Parsers LR en GCC/Clang**: la pila de estados del parser LR es un PDA determinista especializado; cada shift empuja un estado, cada reduce hace pop y empuja un no terminal según la gramática.

**Validación de XML/HTML**: documentos bien formados requieren etiquetas balanceadas anidadas; compiladores SAX y validadores internos usan pilas de etiquetas abiertas — mismo patrón que \(a^n b^n\) generalizado a nombres de etiquetas.

**Análisis de expresiones en hojas de cálculo**: Excel y Google Sheets convierten fórmulas a AST usando pilas de operadores y operandos (algoritmo shunting-yard, Dijkstra); la pila es el mismo concepto operacional del PDA, aunque el algoritmo sea determinista por precedencia.

## Errores clásicos en examen

- Afirmar que todo PDA es determinista: el modelo estándar para LLC es **no determinista**.
- Confundir CYK con parsing LL: CYK es reconocimiento en CNF, no genera AST en tiempo lineal de compiladores.
- Olvidar la condición \(|y| \ge 1\) al relacionar con lema del bombeo para LLC (módulo teórico avanzado).
- Creer que \(a^n b^n c^n\) es LLC: es tipo 1 / sensible al contexto, no alcanzable con una sola pila.
- En conversión a CNF, dejar producciones \(A \rightarrow aBC\) sin descomponer.

## Preguntas de entrevista

**P: Explica por qué \(a^n b^n\) requiere pila y no DFA.**

**R:** Un DFA tiene estados fijos. Para verificar que el número de `a` iguala al de `b` necesitaría, en el peor caso, un estado distinto por cada posible contador hasta \(n\), y \(n\) no está acotado. La pila almacena un símbolo por cada `a` leída antes de emparejar con `b`, dando memoria proporcional a la entrada en una sola pasada.

**P: ¿Para qué sirve la CNF en la práctica?**

**R:** Principalmente para el algoritmo CYK y demostraciones de que LLC son cerrados bajo unión, concatenación y estrella. Los compiladores de producción raramente mantienen la gramática completa en CNF; la conversión es herramienta teórica y base de ejercicios de pertenencia.


### Ejemplo CYK completo en miniatura

Considere CNF con \(S 
\rightarrow CB\), \(C 
\rightarrow a\), \(B 
\rightarrow b\), además de \(S 
\rightarrow AD\), \(A 
\rightarrow a\), \(D 
\rightarrow b\) según las reglas disponibles para la cadena `aab` — el alumno debe numerar cada celda \(P[i,j]\). Para la cadena `aba` de longitud 3, la base rellena \(P[1,1]\) con variables que derivan `a`, \(P[2,2]\) con las de `b`, \(P[3,3]\) con las de `a`. Para longitud 2, la partición única une \(P[1,1]\) y \(P[2,2]\): si existe regla \(X 
\rightarrow YZ\) con \(Y\) en la primera celda y \(Z\) en la segunda, añadimos \(X\) a \(P[1,2]\). Repetimos para \(P[2,3]\). Para longitud 3 probamos cortes \(k=1\) y \(k=2\): \(P[1,3]\) recibe \(S\) solo si alguna producción binaria enlaza contenidos de \(P[1,1]\) con \(P[2,3]\) o \(P[1,2]\) con \(P[3,3]\). Este trazo manual en examen vale más que memorizar la fórmula.

La tabla triangular inferior visualiza subproblemas compartidos — la esencia de programación dinámica. Implementar CYK en Python para gramáticas de menos de diez reglas es un excelente ejercicio de laboratorio posterior al snippet del PDA.

### PDA no determinista y elección de ramas

Cuando \(\delta\) devuelve varias transiciones, el PDA **adivina** correctamente si alguna rama lleva a aceptación (aceptación por existencia de computación aceptadora). El reconocimiento de LLC necesita ese no determinismo en el modelo general; lenguajes como palabras de la forma \(ww^R\) (palíndromo batido) ilustran alternancia de adivinanzas de longitud. En contraste, el snippet de \(a^n b^n\) es tan restrictivo que una única estrategia determinista basta.

### De producciones a acciones de pila (visión constructiva)

Para convertir CFG a PDA: al empezar, push \(S\) en la pila. Repetidamente, si el tope es no terminal \(A\), sustituirlo por el lado derecho de alguna producción \(A 
\rightarrow X_1\ldots X_k\) (push en orden invertido para que \(X_1\) quede arriba). Si el tope es terminal y coincide con el símbolo de entrada actual, pop y avanzar lectura. Aceptación cuando entrada vacía y pila vacía (modo común). Seguir este algoritmo a mano en una gramática de tres reglas fija la equivalencia mejor que memorizar el teorema.

### Lema del bombeo para LLC (conexión)

Si un estudiante pretende demostrar que \(L = \{a^n b^n c^n\}\) es LLC, el lema del bombeo para LLC produce contradicción (bombeo en zonas de una sola letra rompe balance triple). Saber que \(a^n b^n\) **sí** es LLC pero \(a^n b^n c^n\) **no** separa el poder del módulo 7 del módulo 8 en la jerarquía.

## Guía de repaso extendida

Repasa en papel una conversión parcial a CNF de la gramática \(S \rightarrow S+S \mid a\): no es la forma final, pero sirve para contar cuántas variables auxiliares aparecen al eliminar largos lados derechos. Luego escribe la tabla CYK vacía (triangular) para la cadena `aa` antes de llenar celdas; si un examen pide pertenencia manual, la estructura visual evita olvidar particiones.

Compara el reconocedor Python con la definición de PDA por estados: ¿en qué entrada fallan ambos de la misma forma? Prueba `abba` y verbaliza el rechazo. Conecta con el módulo 5: el lema del bombeo para regulares ya explicaba por qué un DFA no cuenta; aquí la pila **sí** cuenta.

Por último, lee la equivalencia CFG–PDA como bi-conditional: para demostrar que un lenguaje es LLC, basta exhibir **gramática** o **PDA** — en práctica de curso casi siempre la gramática.

## Estudio dirigido: PDA, CNF y pertenencia

Trabaja con la gramática \(G\): \(S 
\rightarrow aSb \mid ab\). Verifica que \(L(G)=\{a^n b^n \mid n\ge1\}\). Intenta convertir mentalmente a PDA: cada \(a\) empuja, cada \(b\) desempila. Luego imagina conversión a CNF: aparecerán variables como \(V_{a}
\rightarrow a\) y encadenamientos binarios. El algoritmo CYK sobre \(w=aaabbb\) en CNF te obliga a considerar cada corte de subcadenas; dedica quince minutos a rellenar la mitad inferior de la tabla sin mirar solución.

Contrast \(a^n b^n\) con \(a^*b^*\) (regular). El segundo solo pide «algunas a seguidas de algunas b» sin igualdad; un DFA con dos fases lineales basta. Muchos exámenes mezclan ambos lenguajes en opciones múltiples para detectar confusión. El PDA no determinista para palíndromos \(w w^R\) requiere adivinar la mitad con transiciones \(\epsilon\); es buen ejercicio teórico posterior al reconocedor determinista de \(a^n b^n\).

En ingeniería, la pila del parser LR **no** implementa CYK: reconoce en tiempo lineal gramáticas LALR. CYK enseña decidibilidad de pertenencia LLC, no cómo compiladores industriales parsean Java. Guarda esa distinción: misma clase de lenguajes, algoritmos distintos según objetivo (decisión general vs parser eficiente para una gramática fija).

El snippet Python codifica la estrategia de dos fases sin estados explícitos. En defensa oral del laboratorio, dibuja estados \(q_0,q_1,q_{acc}\) y muestra que el comportamiento coincide. Si el profesor pregunta por \(a^n b^n c^m\), argumenta que con una pila no puedes verificar tres contadores simultáneos.

Finalmente, enlaza con módulo 6: la misma cadena balanceada admitía árbol de derivación con producciones \(S
\rightarrow aSb\). CFG genera, PDA reconoce. La equivalencia es el puente entre sintaxis declarativa y autómata operacional.

## Escenarios de fallo comunes en simulaciones

Entrada `ab`: una `a`, una `b`, acepta. Entrada `bab`: la fase de `a` no consume nada si el primer carácter es `b` — en el snippet, fase 2 no consume y el índice no avanza al final; rechazo correcto. Entrada `aaab`: después de procesar `b` faltantes, pila no vacía; rechazo. Documenta tres casos en tu cuaderno con la traza de la pila como columna de símbolos.

Para CYK, el error típico es olvidar que solo producciones \(A
\rightarrow BC\) y \(A
\rightarrow a\) participan: si queda \(A
\rightarrow aB\) sin convertir, la tabla se llena mal. Al transformar a CNF, conserva un diccionario de reglas original→normalizadas para no perderte.

## Síntesis y checklist antes de avanzar

- Escribí la tupla del PDA y expliqué push/pop en \(a^n b^n\).
- Ejecuté el snippet y predije el resultado para cadenas desbalanceadas.
- Describí los pasos de conversión a CNF y una fila de la tabla CYK.
- Distinguí PDA de máquina de Turing (módulo 8).
- Completé la conexión CFG–PDA–LLC sin confundir con lenguajes regulares.
