## Panorama del tema: AUTÓMATAS FINITOS DETERMINISTAS (DFA)

Un **autómata finito determinista** (DFA) es el modelo canónico de «máquina con memoria acotada» que lee una cadena símbolo a símbolo y responde sí o no: ¿pertenece al lenguaje? Cada decisión es **única**: desde el estado actual, el siguiente símbolo fuerza exactamente un estado siguiente. No hay adivinanza ni ramificación.

Los DFA reconocen precisamente los **lenguajes regulares** — la misma clase que las expresiones regulares y los NFA (módulos 3–4). En ingeniería, casi todo reconocedor de patrones lineales (identificadores, números, comentarios de una línea) se implementa como DFA explícito o como tabla generada desde regex.

En esta lección formalizamos \(M = (Q, \Sigma, \delta, q_0, F)\), leemos tablas y diagramas, simulamos cadenas paso a paso, y conectamos el **paridad de unos** del snippet del curso con un diseño de estados mínimo.

## Objetivos de la lección

- Escribir la definición formal de un DFA y el significado de cada componente.
- Construir tabla de transiciones y diagrama de estados para lenguajes sencillos.
- Simular \(\delta^*\) (extensión de \(\delta\) a cadenas) y decidir aceptación.
- Definir \(L(M)\) y comparar aceptación por estado final versus otros criterios.
- Implementar mentalmente la clase `DFA_ParUnos` del módulo.

## Desarrollo de la lección

### Definición formal: \(M = (Q, \Sigma, \delta, q_0, F)\)

Un DFA es una 5-tupla:

- **\(Q\)**: conjunto **finito** de estados (ej. \(\{q_0, q_1\}\) o etiquetas `Q0`, `Q1` en código).
- **\(\Sigma\)**: alfabeto de entrada finito.
- **\(\delta : Q \times \Sigma \rightarrow Q\)**: función de transición **total**: para cada par (estado, símbolo) existe **exactamente un** estado siguiente.
- **\(q_0 \in Q\)**: estado **inicial** (único).
- **\(F \subseteq Q\)**: estados de **aceptación** (finales).

**Determinismo** significa que la ejecución sobre una cadena \(w\) es una **traza única** de estados; no hay elecciones.

### Extensión a cadenas: \(\delta^*\)

Definimos \(\delta^* : Q \times \Sigma^* \rightarrow Q\) recursivamente:

- \(\delta^*(q, \epsilon) = q\)
- \(\delta^*(q, wa) = \delta(\delta^*(q, w), a)\) con \(a \in \Sigma\)

El autómata **acepta** \(w\) si \(\delta^*(q_0, w) \in F\). El **lenguaje aceptado** es:

\[
L(M) = \{ w \in \Sigma^* \mid \delta^*(q_0, w) \in F \}
\]

### Tabla de transiciones y diagramas

Para \(|Q|\) pequeño, una tabla filas = estados, columnas = símbolos documenta \(\delta\). En diagramas: nodos = estados, flechas etiquetadas con símbolos, doble círculo = aceptación, flecha entrante a \(q_0\).

**Ejemplo — termina en `ab` sobre \(\Sigma=\{a,b\}\)** (idea de diseño):

- Estados recordan el **sufijo relevante** de longitud \(\le 1\) leído: tras leer prefijo que ya no puede completarse hacia `ab`, ir a estado trampa (no final).
- Aceptar solo si el último par leído es `ab`.

La clave de diseño: **memoria finita** = resumen de lo leído en un estado, no almacenar toda la cadena.

### Paridad del número de unos (enlace al laboratorio)

Lenguaje \(L_{\mathrm{par}} = \{ w \in \{0,1\}^* \mid w \text{ contiene un número par de símbolos } 1 \}\).

Intuición:

- Cada `1` **alterna** paridad.
- Los `0` no cambian el conteo modular.

Dos estados bastan: «par» y «impar» de unos vistas. El estado inicial es **par** (cero unos). Aceptación = estado par al terminar.

| Estado | Significado | ¿Aceptación? |
|--------|-------------|----------------|
| Q0 | Paridad par de 1s | Sí |
| Q1 | Paridad impar de 1s | No |

Transiciones: en Q0 con `1` → Q1; en Q1 con `1` → Q0; con `0` permanecer.

### Ergonomía de la implementación versus la tabla

El snippet `DFA_ParUnos` codifica la misma lógica con `if` anidados en lugar de tabla 2×2. Ambas formas son equivalentes; en compiladores industriales (Flex, lexer de Rust `logos`) se prefiere **tabla aplanada** por rendimiento.

Completitud de \(\delta\): si falta una entrada en código para algún par (estado, símbolo), el determinismo se rompe. Por eso en teoría exigimos función total; en binario sobre dos estados solo hay cuatro pares a cubrir.

### Lenguajes que **sí** y que **aún no** modelamos

**Dentro de regulares (DFA existe)**:

- Cadenas con longitud múltiplo de 3.
- Cadenas que contienen la subcadena `101`.
- Identificadores `[a-zA-Z_][a-zA-Z0-9_]*` sobre alfabeto ASCII acotado.

**Fuera de regulares (requiere PDA, módulo 7)**:

- \( \{ a^n b^n \mid n \ge 0 \} \) — requiere comparar dos conteos.

Esa frontera se demuestra formalmente en el módulo 5.

### Minimización (adelanto conceptual)

Dos DFA con distinto número de estados pueden reconocer el **mismo** \(L(M)\). El algoritmo de minimización (no obligatorio en este curso) fusiona estados equivalentes. Para `DFA_ParUnos`, dos estados ya son mínimos: no puedes colapsar par e impar sin cambiar el lenguaje.

### Simulación paso a paso: `11011`

Estado inicial Q0 (par):

1. Lee `1` → Q1 (impar, 1 uno)
2. Lee `1` → Q0 (par, 2 unos)
3. Lee `0` → Q0 (par)
4. Lee `1` → Q1 (impar, 3 unos)
5. Lee `1` → Q0 (par, 4 unos)

Termina en Q0 ∈ F ⇒ **aceptada**. Coincide con el `print` del snippet para `'11011'`. Para `'111'` (3 unos) termina en Q1 ⇒ rechazada.

### Trap state y completitud en diseño examen

Cuando diseñas un DFA en un parcial, conviene añadir explícitamente un **estado trampa** \(q_{\mathrm{trap}}\) que no es final y absorbe cualquier transición no deseada con bucles sobre todo \(\Sigma\). Así \(\delta\) sigue siendo total y evitas «transición indefinida». En implementaciones como `DFA_ParUnos`, permanecer en el mismo estado ante `0` es forma compacta de trampa parcial solo si los `0` realmente no discriminan el lenguaje.

### Producto cartesiano (combinar dos DFA)

Si \(M_1\) reconoce \(L_1\) y \(M_2\) reconoce \(L_2\), un DFA para \(L_1 \cap L_2\) usa estados \((q_1, q_2)\) con transiciones sincronizadas. La explosión \(|Q_1| \cdot |Q_2|\) motiva minimización después. Esta construcción aparece al exigir **dos** patrones simultáneos (por ejemplo «termina en par de unos» **y** «no contiene `111`»).

## Demostración enlazada al código del módulo

El snippet define `DFA_ParUnos` en Python:

- `estado_actual = 'Q0'` al iniciar `procesar_cadena` — reinicia la simulación (importante si reutilizas la misma instancia).
- Bucle `for simbolo in cadena` — procesa en orden left-to-right como \(\delta^*\).
- Solo reacciona a `'1'` cambiando entre Q0 y Q1; `'0'` no aparece en el `if` porque **no cambia** el estado (transición implícita a sí mismo).
- `return self.estado_actual == 'Q0'` — criterio de aceptación: Q0 es único final.

**Corrección mental**: si la cadena contiene caracteres fuera de \(\{0,1\}\), el código Python los ignora silenciosamente (no cambian estado). Un DFA formal sobre \(\{0,1\}\) debería definir \(\delta\) para todo el alfabeto o rechazar entradas inválidas antes — buena práctica en el laboratorio.

**Refactor pedagógico**: reemplazar ramas por diccionario:

`transiciones = {('Q0','1'): 'Q1', ('Q1','1'): 'Q0'}` y dejar `0` como identidad. Así la tabla es visible y coincide con la notación \(\delta\).

Prueba adicional: `procesar_cadena('')` deja Q0 y devuelve `True` — la cadena vacía tiene cero unos (par). Verifica contra tu definición de lenguaje si \(\epsilon\) debe aceptarse; aquí sí.

## Aplicaciones en sistemas reales

**Lexers generados (Flex / RE2C)**: el generador compila expresiones regulares a DFA y emite código C con tablas de salto. Clang y GCC usan esta familia de herramientas en el scanner. Cada regla de token corresponde a un conjunto de estados; prioridad entre reglas resuelve conflictos cuando varios patrones podrían aplicar.

**Validación de VIN y códigos con checksum**: muchos identificadores industriales siguen patrones regulares con dígito de control calculable en un solo paso. El reconocedor de forma (no el cálculo del dígito) es DFA.

**Analizadores de malware en tráfico**: firmas de cadenas hex en flujos de red se buscan con automatas paralelos (Aho-Corasick extiende la idea a múltiples patrones). El núcleo sigue siendo estados finitos sin pila.

## Errores clásicos en examen

- Confundir estado inicial con estado de aceptación (pueden coincidir, como en Q0 del snippet, pero conceptualmente son roles distintos).
- Dibujar transiciones no deterministas (dos flechas con el mismo símbolo desde un estado) y llamarlo DFA.
- Olvidar que \(\delta\) debe ser **total**: cada celda de la tabla tiene valor.
- Decir que el DFA «acepta si lee algún 1» cuando el lenguaje es paridad, no existencia.
- Simular cadenas de derecha a izquierda sin justificar (el modelo estándar es izquierda a derecha).

## Preguntas de entrevista

**P: Diseña un DFA sobre \(\{0,1\}\) que acepte cadenas que terminan en `01`.**

**R:** Usa estados que recuerden si el último símbolo fue `0` y si estás en posición de completar `01`. Alternativa: tres estados «buscando», «vi 0», «acepté tras 1 después de 0». Aceptas al leer `1` tras haber estado en «vi 0», o mantienes aceptación solo al final de cadena según definición exacta del enunciado. Lo importante en entrevista es explicitar \(\Sigma\), \(Q\), \(F\) y demostrar con un par de cadenas.

**P: ¿Por qué el DFA es adecuado para tokenizar números pero no para validar paréntesis anidados arbitrariamente?**

**R:** Tokenizar un literal numérico es un patrón regular (dígitos consecutivos). Paréntesis balanceados de profundidad no acotada requieren contar aperturas y cierres sin límite fijo — eso excede memoria de estados finitos y necesita pila (LLC / PDA).

## Síntesis y checklist antes de avanzar

- Escribo \(M = (Q, \Sigma, \delta, q_0, F)\) para el autómata de paridad de unos.
- Simulé a mano `11011` y `111` y comparé con la salida del snippet.
- Explico totalidad de \(\delta\) y traza única de ejecución.
- Distingo \(L(M)\) como conjunto de \(\Sigma^*\) del proceso de codificación en Python.
- Entiendo que el módulo 3 generalizará \(\delta\) a conjuntos de estados (NFA).


### Representación tabular del autómata de paridad

| δ     | 0   | 1   |
|-------|-----|-----|
| Q0 (F)| Q0  | Q1  |
| Q1    | Q1  | Q0  |

La fila Q0 marcada como final coincide con el snippet: solo Q0 acepta. Cualquier implementación con diccionario `(estado, sim) -> siguiente` debe cubrir las cuatro celdas.

### Complemento y clausura de lenguajes regulares

Si \(L\) es regular sobre \(\Sigma\), el complemento \(\Sigma^* \setminus L\) también es regular: invierte estados finales y no finales en un DFA completo con trampa. La unión e intersección de dos regulares siguen siendo regulares (producto cartesiano). Estas **clausuras** explican por qué los compiladores combinan docenas de patrones léxicos sin salir de la familia DFA.

### Autómata con múltiples estados finales

Nada impide \(|F| > 1\). Ejemplo: aceptar cadenas que terminan en `00` **o** en `11` puede usar dos estados finales distintos alcanzables. Al simular, basta \(\delta^*(q_0,w) \in F\). El snippet con un solo final es caso mínimo pedagógico.

### Complejidad de simulación

Para |w| = n, el DFA realiza exactamente n pasos de transición y O(1) trabajo por paso si la tabla es array indexado. Memoria O(1). Comparar con algoritmos ad hoc que reescanean la cadena: el autómata **no** vuelve atrás; es online.

### Construcción desde descripción en lenguaje natural

Ejercicio: «acepta cadenas binarias sin subcadena `111`». Estrategia: estados = longitud del sufijo reciente de 1s leído (0,1,2,3); estado 3 es trampa no final. Cada transición actualiza según leer 0 (reinicia contador de 1s) o 1 (incrementa hasta trampa). Esta receta «sufijo relevante acotado» resuelve la mitad de los parciales de diseño de DFA.

### Enlace con el lexer del laboratorio QuimiSell

Los tokens `NUM` y `ID` pueden modelarse como DFA sobre caracteres antes de agrupar lexema. El DFA no sabe que `123abc` puede ser error léxico: solo rechaza o acepta prefijos según reglas. La capa que reporta mensaje humano vive encima de la aceptación booleana.

### Rechazo explícito versus silencioso

En APIs industriales, `procesar_cadena` debería retornar también el estado final para diagnosticar. En teoría, rechazo es simplemente \(\delta^*(q_0,w) \notin F\). Documentar ambos en diseños de equipo evita bugs cuando \(F\) es subconjunto estricto de \(Q\).


### Ejercicio de diseño: múltiplos de 3 en longitud binaria

Lenguaje: cadenas sobre \(\{0,1\}\) cuya longitud es múltiplo de 3. Estados \(q_0, q_1, q_2\) recordando longitud mod 3; \(q_0\) inicial y final; cada símbolo avanza el contador modular. Cadena vacía aceptada. Simula `101` (longitud 3) → acepta; `11` → rechaza. Relaciona con contadores cíclicos distintos al de paridad de unos.

### Lectura del diagrama en sentido horario

Convención de dibujo: flecha de inicio sin etiqueta; etiquetas múltiples en una arista se escriben `0,1` cuando la transición es la misma. Examen: si falta etiqueta en un arco, la pregunta es incompleta — exige clarificación o asume alfabeto binario con 0/1 explícitos en tabla.

### Invariantes en simulación

Para paridad de unos, el invariante es: «el estado Q0 equivale a paridad par del sufijo leído de conteo de 1s». Probar invariante por inducción en la longitud del prefijo leído vincula prueba formal con el bucle `for simbolo in cadena`.

### DFA y máquinas de Moore/Mealy (nota)

Output machines asocian salida a estados o transiciones; los DFA de aceptación del curso son Moore sin salida visible excepto aceptación final. En hardware síntesis, los mismos grafos aparecen con etiquetas de salida; la teoría regular subyacente es la misma.

### Caso borde: cadena vacía

Toda definición de \(L(M)\) debe clarificar si \(\epsilon \in L\). Paridad de unos: cero unos es par → \(\epsilon\) aceptada. Si el enunciado pide «al menos un 1», el estado inicial ya no es final o se añade trampa.

### Resumen de símbolos del módulo

| Símbolo | Significado |
|---------|-------------|
| \(\delta\) | Función de transición |
| \(\delta^*\) | Extensión a cadenas |
| \(F\) | Conjuntos de aceptación |
| \(L(M)\) | Lenguaje aceptado |

### Trabajo práctico sugerido

Implementa `class DFA_Tabla` que recibe dict de transiciones y conjunto F; método `acepta(w)`. Refactoriza `DFA_ParUnos` para usarla. Compara líneas de código con enfoque `if` — mantenibilidad gana con tablas cuando crece \(|Q|\).

### Conexión con determinización del módulo 3

Cuando el NFA se convierte en DFA, la traza única reaparece a costa de más estados. El programador del lexer casi siempre ejecuta el DFA resultante aunque diseñó regex estilo NFA mentalmente.


### Cierre narrativo del concepto determinista

Imagina leer un archivo de log carácter a carácter sin poder volver atrás: ese es el contrato del DFA. Cada símbolo consume una unidad de entrada y empuja la máquina a un único sucesor. Si el log tiene millones de caracteres, el tiempo escala linealmente porque la tabla de transición tiene tamaño constante respecto a la entrada. Esa previsibilidad hace que los equipos de compiladores prefieran tablas precomputadas frente a expresiones interpretadas carácter a carácter con bifurcaciones condicionales ad hoc. Cuando depuras un lexer, imprimir la secuencia de estados recorridos para una cadena corta de ejemplo suele revelar errores de dibujo en el autómata mucho más rápido que revisar el código generado por Flex línea a línea.

### Pregunta de orden en implementaciones

¿El orden de evaluación de `if` anidados en `DFA_ParUnos` importa? No para este lenguaje porque solo dos estados interactúan. Si hubiera tres o más, la tabla elimina el riesgo de orden accidental. Usa siempre el mismo patrón de diseño: primero tabla sobre papel, luego código.


### Apéndice de práctica examen

Resuelve sin mirar el snippet: diseña DFA que acepta cadenas binarias cuya primera y última posición son el mismo bit. Estados pueden recordar primer bit leído y bit actual; estados finales cuando coinciden al cerrar la cadena. Luego codifica en Python con tabla y compara con `DFA_ParUnos` en estilo de proyecto.

### Glosario rápido

**Función de transición total**, **estado trampa**, **lenguaje aceptado**, **traza de ejecución**, **autómata completo**. Define cada término en una línea antes de la autoevaluación del módulo en la plataforma.
