## Panorama del tema: GRAMÁTICAS LIBRES DE CONTEXTO (CFG), DERIVACIONES, ÁRBOLES Y AMBIGÜEDAD

Tras dominar los lenguajes regulares y sus límites (como el reconocimiento de \(a^n b^n\)), abrimos la puerta a los **lenguajes libres de contexto** (LLC): la clase formal que modela casi toda la sintaxis de los lenguajes de programación. Una gramática libre de contexto (CFG, del inglés *context-free grammar*) no describe cómo ordenar caracteres en una línea de texto, sino cómo **ensamblar estructuras jerárquicas**: expresiones dentro de paréntesis, listas de declaraciones, bloques anidados, llamadas a funciones con argumentos, y árboles de tipos.

La diferencia conceptual es profunda: el lexer (módulos anteriores) responde «¿qué símbolos hay y en qué orden lineal?». La gramática responde «¿cómo se agrupan esos símbolos en construcciones con sentido?». Por eso las CFG son la especificación estándar de parsers en compiladores: Yacc/Bison, ANTLR, la gramática de Python o la de C++ se expresan como reglas de producción.

En esta lección construiremos la intuición formal \(G = (V, \Sigma, R, S)\), practicaremos derivaciones leftmost y rightmost, leeremos árboles de derivación como «radiografías» de una cadena, y entenderemos por qué la **ambigüedad** obliga a rediseñar gramáticas antes de implementar un compilador serio.

## Objetivos de la lección

- Definir formalmente una CFG y distinguir terminales, no terminales, reglas y símbolo inicial.
- Realizar derivaciones leftmost y rightmost sobre gramáticas pequeñas hasta obtener cadenas concretas.
- Construir y leer árboles de derivación (parse trees) y relacionarlos con precedencia de operadores.
- Reconocer gramáticas ambiguas y aplicar transformaciones clásicas para eliminar ambigüedad en expresiones aritméticas.
- Conectar la noción de LLC con el reconocimiento por autómata de pila (módulo siguiente).

## Desarrollo de la lección

### Definición formal: \(G = (V, \Sigma, R, S)\)

Una gramática libre de contexto es una cuaterna:

- **\(V\)**: conjunto finito de **variables** (no terminales), suele escribirse con mayúsculas: \(E, T, F, Stmt, Expr\).
- **\(\Sigma\)**: alfabeto de **terminales** (tokens reales del lenguaje: `+`, `if`, identificadores, números).
- **\(R\)**: conjunto finito de **reglas de producción** de la forma \(A \rightarrow \alpha\), donde \(A \in V\) y \(\alpha \in (V \cup \Sigma)^*\) (cadena, posiblemente vacía \(\epsilon\)).
- **\(S\)**: símbolo **inicial** (axioma), \(S \in V\).

La palabra «libre de contexto» significa que al reemplazar \(A\) por \(\alpha\) **no importa** qué símbolos rodean a \(A\) en la cadena intermedia. Eso contrasta con gramáticas sensibles al contexto (tipo 1 en Chomsky), donde el reemplazo puede depender del entorno.

**Ejemplo — expresiones aritméticas mínimas**

\[
\begin{aligned}
E &\rightarrow E + T \mid T \\
T &\rightarrow T * F \mid F \\
F &\rightarrow (E) \mid \textbf{num}
\end{aligned}
\]

Aquí \(V = \{E, T, F\}\), \(\Sigma\) incluye `+`, `*`, `(`, `)`, y el terminal abstracto `num`. \(S = E\).

### Lenguaje generado y derivaciones

El **lenguaje** \(L(G)\) es el conjunto de cadenas de terminales que se pueden derivar desde \(S\) aplicando reglas repetidamente hasta que no queden no terminales.

Sea una **cadena sentencial** cualquier elemento de \((V \cup \Sigma)^*\) alcanzable desde \(S\). Una **derivación** es una secuencia de pasos donde en cada paso se elige un no terminal y se aplica una regla.

- **Derivación leftmost (más a la izquierda)**: en cada paso se expande el no terminal **más a la izquierda** todavía presente. Es la convención que siguen muchos parsers LL.
- **Derivación rightmost**: se expande el no terminal más a la derecha; habitual en parsers LR.

**Ejemplo paso a paso** — derivar la cadena `num + num * num` con la gramática anterior (versión ambigua simplificada sin niveles \(E,T,F\) — ver más abajo la versión no ambigua).

Con gramática ambigua clásica \(E \rightarrow E + E \mid E * E \mid num\), una derivación leftmost para `num + num * num` podría comenzar:

1. \(E \Rightarrow E + E\)
2. \(E + E \Rightarrow \textbf{num} + E\)
3. \(\textbf{num} + E \Rightarrow \textbf{num} + E * E\)
4. \(\textbf{num} + E * E \Rightarrow \textbf{num} + \textbf{num} * E\)
5. \(\textbf{num} + \textbf{num} * E \Rightarrow \textbf{num} + \textbf{num} * \textbf{num}\)

Observa que en el paso 1 elegimos \(E + E\) en lugar de \(E * E\): diferente elección temprana cambia el árbol final (precedencia).

### Árboles de derivación (parse trees)

Un **árbol de derivación** representa visualmente la jerarquía sintáctica:

- La **raíz** es \(S\) (o el no terminal inicial de la derivación).
- Cada nodo interno es un no terminal; sus hijos, leídos de izquierda a derecha, corresponden al lado derecho de una producción aplicada.
- Las **hojas**, de izquierda a derecha, forman la cadena terminal derivada.

Para `num + num * num` con la gramática no ambigua en tres niveles:

\[
E \rightarrow E + T \mid T,\quad T \rightarrow T * F \mid F,\quad F \rightarrow \textbf{num}
\]

el árbol fuerza que `*` quede **más profundo** (más cerca de las hojas numéricas) que `+`, implementando que la multiplicación tiene mayor prioridad que la suma.

Si dibujas el árbol:

- Raíz \(E\) con hijos: subárbol \(E\) (suma), terminal `+`, subárbol \(T\) (producto).
- El subárbol de producto \(T\) tiene hijos \(T\), `*`, \(F\) con números en hojas.

**Propiedad clave**: distintas derivaciones que producen el **mismo** árbol se consideran equivalentes; el problema surge cuando **dos árboles distintos** generan la **misma** cadena terminal — ahí nace la ambigüedad.

### Ambigüedad: definición y por qué importa en compiladores

Una gramática \(G\) es **ambigua** si existe alguna cadena \(w \in L(G)\) con **al menos dos** árboles de derivación distintos (equivalentemente, dos derivaciones leftmost distintas, o dos rightmost distintas).

La gramática \(E \rightarrow E + E \mid E * E \mid num\) es el ejemplo canónico: `num + num * num` puede interpretarse como \((\textbf{num} + \textbf{num}) * \textbf{num}\) o \(\textbf{num} + (\textbf{num} * \textbf{num})\).

En un compilador, cada árbol suele mapear a distinta semántica (distinto orden de evaluación, distinto código generado). Por eso los lenguajes de programación **no adoptan gramáticas ambiguas** para su núcleo expresivo: reescriben producciones introduciendo niveles \(E\), \(T\), \(F\) o declaran precedencias y asociatividad en la especificación del parser.

**Técnicas habituales para desambiguar expresiones**

1. **Factorización por precedencia**: un no terminal por nivel de prioridad.
2. **Asociatividad**: para `+` asociativo a izquierda, evita producciones como \(E \rightarrow T + E\) si quieres evaluar de izquierda a derecha; la forma \(E \rightarrow E + T\) fuerza que el siguiente operando quede a la derecha en el árbol.
3. **Precedencia declarada** (en generadores de parsers): reglas numéricas en Yacc/Bison sin cambiar la CFG manualmente.

### Gramáticas para estructuras de programa

Más allá de expresiones, las CFG modelan:

- **Listas**: \(StmtList \rightarrow Stmt \ StmtList \mid \epsilon\)
- **Condicionales**: \(Stmt \rightarrow \textbf{if}\ (Expr)\ Stmt \mid \textbf{if}\ (Expr)\ Stmt\ \textbf{else}\ Stmt\)
- **Bloques balanceados**: \(S \rightarrow SS \mid (S) \mid \epsilon\) genera paréntesis balanceados; es LLC y no regular.

Cada construcción anidada refleja un subárbol en el parse tree, que luego el análisis semántico recorrerá para construir el AST (simplificando nodos de «ruido» gramatical).

### Relación con autómatas de pila (adelanto)

Teorema fundamental (estudiaremos en detalle en el módulo 7): **un lenguaje es libre de contexto si y solo si es aceptado por algún autómata de pila (PDA)**. La CFG da una **generadora** (construye cadenas); el PDA da un **reconocedor** (verifica pertenencia). En compiladores, casi siempre diseñamos gramática + parser descendente o LR en lugar de simular el PDA directamente, pero la equivalencia explica por qué anidar paréntesis requiere «memoria» (pila) y no basta un DFA.

### Ejemplo extendido: paréntesis balanceados

Considere \(G\) con \(S \rightarrow SS \mid (S) \mid \epsilon\), lenguaje de paréntesis balanceados sobre un solo par de delimitadores. Para la cadena `(()())` una derivación leftmost podría ser:

1. \(S \Rightarrow (S)\)
2. \((S) \Rightarrow (SS)\)
3. \((SS) \Rightarrow ((S)S)\)
4. \(((S)S) \Rightarrow (()S)\)
5. \(()S) \Rightarrow (() (S))\)
6. \((() (S)) \Rightarrow (() ())\)

Cada paso elige un \(S\) a expandir; el árbol resultante tiene raíz \(S\) con dos hijos \(S\) en el nivel superior interior del paréntesis externo, mostrando cómo la concatenación \(SS\) modela palabras balanceadas una al lado de la otra. Este lenguaje ya no es regular: el lema del bombeo para regulares falla al intentar «recordar» cuántos `(` faltan cerrar. La CFG lo expresa naturalmente; el PDA lo reconoce empujando y sacando de la pila.

### Producciones \(\epsilon\) y limpieza de gramáticas

Muchas gramáticas incluyen \(A \rightarrow \epsilon\) para listas vacías (declaraciones opcionales, argumentos vacíos). Una cadena sentencial que contiene solo no terminales puede derivar \(\epsilon\) si hay una cadena de \(\epsilon\)-producciones. En compiladores, las listas se modelan como \(List \rightarrow Item\ List \mid \epsilon\). Al eliminar \(\epsilon\)-producciones y producciones unitarias (\(A \rightarrow B\)) antes de convertir a Forma Normal de Chomsky (módulo 7), se evitan pasos redundantes en algoritmos automáticos de parsing. La limpieza **no cambia** el lenguaje generado (salvo el caso especial de si el axioma deriva \(\epsilon\)).

### Tabla comparativa: regular vs libre de contexto

| Pregunta | Lenguaje regular | LLC |
|----------|------------------|-----|
| ¿Memoria finita suficiente? | Sí (DFA/NFA) | No; hace falta pila para contar/anidar |
| ¿Ejemplo típico? | identificadores, números sin contexto | expresiones anidadas, paréntesis |
| ¿Forma de regla? | A → uA v o restricciones (tipo 3) | A → α con un solo no terminal a la izquierda |
| ¿Uso en compilador? | Lexer | Parser sintáctico |

Memorizar esta tabla evita errores frecuentes en exámenes donde piden un DFA para un lenguaje LLC.

### Gramáticas para listas y sentencias (fragmento de lenguaje imperativo)

```
Program → StmtList
StmtList → Stmt StmtList | ε
Stmt → id = Expr ; | if (Expr) Stmt | if (Expr) Stmt else Stmt | { StmtList }
Expr → Expr + Term | Term
Term → id | num | (Expr)
```

Cada regla « StmtList → Stmt StmtList » encadena sentencias; \(\epsilon\) permite bloque vacío (en lenguajes que lo permiten). El árbol de `a=1; b=2;` es profundo a la izquierda en la lista, típico de derivaciones leftmost para sentencias secuenciales.

### Eliminación de ambigüedad del «dangling else»

En la gramática ingenua `Stmt → if (E) Stmt | if (E) Stmt else Stmt`, la cadena `if (E1) if (E2) S else S'` admite un árbol donde el `else` enlaza al `if` interno y otro donde enlaza al externo. Solución clásica: duplicar producciones con `StmtNoElse` vs `Stmt` completo, forzando que `else` solo aparezca cuando el `if` interno no lo absorbe ilegítimamente.

### Predicados y gramáticas atribuidas (puente a semántica)

Algunas restricciones «declarar antes de usar» **no** son CFG puras: requieren atributos semánticos o símbolos de tabla durante parsing. Parser LR resuelve mucha sintaxis; el analizador semántico del módulo 12 cierra huecos que CFG sola no expresa.

## Demostración enlazada al código del módulo

El snippet del módulo define `GramaticaExpresiones`, un validador **lineal** sobre una lista de tokens que alterna «número – operador – número – operador – …». Aunque el comentario menciona \(E \rightarrow E + T\), la implementación **no construye un árbol**: solo verifica que la secuencia tenga la forma regular \(num\ (op\ num)^*\) con `op` en `{+, *}`.

Línea por línea:

- `expect_num = True` codifica que el siguiente token debe ser un número (estado de una máquina de estados finita sobre tokens).
- Si llega un dígito cuando se espera número, consume y pasa a esperar operador.
- Si llega `+` o `*` cuando se espera operador, vuelve a esperar número.
- Cualquier desviación retorna `False`.
- Al final, `return not expect_num` exige terminar justo después de un número (no colgar en «espero operador»).

**Limitación pedagógica útil**: `'5 + 3 * 2'` pasa la validación, pero el código **no distingue** si la multiplicación agrupa antes que la suma; para eso necesitarías el parser con gramática no ambigua o un árbol. El salto del módulo 6 al 11 es precisamente pasar de este chequeo superficial al AST con precedencia correcta.

Prueba mental: tokeniza `'5 + + 3'` como `['5', '+', '+', '3']`. El bucle ve el segundo `+` cuando `expect_num` sigue siendo `True` (porque tras el primer `+` esperábamos número, no otro operador) y devuelve `False`. Ese comportamiento coincide con un rechazo sintáctico temprano, aunque un mensaje de error de producción reportaría la posición del token inesperado. Extender el snippet a un árbol sería el siguiente refactor: cada vez que consumes un `num`, creas un nodo hoja; cada operador binario une dos subárboles ya construidos según la gramática no ambigua.

## Aplicaciones en sistemas reales

**Clang / LLVM para C++**: la gramática del frontend de Clang (derivada de la especificación del lenguaje) usa cientos de producciones; ambigüedades históricas (p.ej. «most vexing parse») se resuelven con reglas de disambiguación en el parser, no dejando al árbol elegir al azar.

**ANTLR en servicios de API**: muchas empresas generan parsers ANTLR a partir de una `.g4` CFG para lenguajes de consulta internos (DSL de métricas, filtros de logs). Un error de ambigüedad en la gramática se detecta al generar el parser; si pasa, el lexer/parser puede producir árboles incorrectos en producción.

**JSON (RFC 8259)**: aunque JSON no es un lenguaje de programación completo, su sintaxis de objetos y arreglos anidados es LLC; parsers como los de `serde_json` (Rust) o `encoding/json` (Go) implementan reconocimiento equivalente a una CFG con pila implícita para validar balanceo de `{` y `[`.

## Errores clásicos en examen

- Confundir **\(V\)** (no terminales) con **\(\Sigma\)** (terminales) al escribir \(G = (V, \Sigma, R, S)\).
- Creer que «libre de contexto» significa que no importa el contexto del programa (scope, tipos); eso es **semántica**, no la definición formal de CFG.
- Afirmar que toda derivación leftmost es única: es única **solo si la gramática es no ambigua** para esa cadena.
- Mostrar un árbol donde los hijos de un nodo no coinciden con ninguna producción \(A \rightarrow X_1 \ldots X_k\).
- Intentar demostrar ambigüedad exhibiendo **una** derivación distinta sin construir **dos árboles** (o dos leftmost) que produzcan la **misma** cadena terminal.

## Preguntas de entrevista

**P: ¿Por qué la gramática \(E \rightarrow E + E \mid E * E \mid \textbf{id}\) es ambigua y cómo la arreglarías?**

**R:** Es ambigua porque una cadena como `id + id * id` admite al menos dos árboles: uno agrupa la suma antes que el producto y otro al revés. Se arregla introduciendo niveles de precedencia, por ejemplo \(E \rightarrow E + T \mid T\), \(T \rightarrow T * F \mid F\), \(F \rightarrow (\textbf{id}) \mid \textbf{id}\), de modo que `*` siempre quede más bajo que `+` en el árbol.

**P: ¿Cuál es la diferencia entre un árbol de derivación y un AST?**

**R:** El árbol de derivación refleja **todas** las expansiones gramaticales (incluye nodos auxiliares como reglas de lista vacía o niveles \(T, F\)). El AST es una vista **abstracta** del programa: elimina nodos redundantes y conserva la estructura semántica (operadores, declaraciones, bloques). El parser suele construir primero un concrete syntax tree y luego lo simplifica a AST.

## Síntesis y checklist antes de avanzar

- Puedo escribir \(G = (V, \Sigma, R, S)\) para una mini-gramática de expresiones o de paréntesis balanceados.
- Realicé al menos una derivación leftmost completa hasta terminales.
- Dibujé un parse tree y leí la cadena en las hojas de izquierda a derecha.
- Expliqué ambigüedad con el ejemplo `id + id * id` y la solución por precedencia.
- Entiendo que el snippet del módulo valida forma tokenizada pero **no** resuelve precedencia.
- Estoy listo para el módulo 7: PDA, CNF y algoritmo CYK como reconocimiento de LLC.
