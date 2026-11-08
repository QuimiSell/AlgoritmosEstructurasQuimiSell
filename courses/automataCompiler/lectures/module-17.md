## Panorama del tema: LL(1) PROFUNDO — FIRST, FOLLOW, TABLA Y CONFLICTOS

El módulo 11 introdujo el contraste LL frente a LR y el parser descendente del laboratorio. Esta lección **profundiza** en la familia **LL(1)**: gramáticas donde una única mirada al siguiente token basta para elegir la producción correcta en derivaciones **leftmost**. Ese requisito formaliza la ingeniería de parsers predictive (ANTLR con `LL(*)`, Grammars kit, herramientas educativas) y del **descenso recursivo manual** que replica las mismas decisiones sin tabla materializada.

Los pilares algorítmicos son **FIRST** y **FOLLOW**: conjuntos que responden «¿qué terminal puede abrir esta cadena de símbolos?» y «¿qué terminal puede aparecer justo después de este no terminal en una derivación válida?». Sobre ellos se construye la **tabla predictiva** \(M[A,a]\) y se diagnostican conflictos **FIRST/FIRST** y **FIRST/FOLLOW**. También tratamos **eliminación de recursión izquierda** y factorización a izquierda, transformaciones que convierten gramáticas recurridas en especificaciones parseables top-down.

El parser predictivo y el descenso recursivo comparten la misma semántica de análisis; difieren en si la elección de producción está **codificada en tabla** (máquina con stack explícito de no terminales) o **distribuida en llamadas** a funciones `parse_X`. Dominar LL(1) es prerrequisito para escribir gramáticas de DSL sin sorpresas en generadores y para entender por qué C, Java o C++ no son LL(1) «puras».

## Objetivos de la lección

- Calcular FIRST y FOLLOW con algoritmos iterativos hasta punto fijo.
- Construir y leer la tabla predictiva \(M[A,a]\).
- Detectar y explicar conflictos FIRST/FIRST y FIRST/FOLLOW.
- Aplicar eliminación de recursión izquierda y factorización a izquierda.
- Comparar máquina predictiva vs descenso recursivo sobre la misma gramática.

## Desarrollo de la lección

### FIRST: definición y cálculo algorítmico

Para cadena \(\alpha \in (V \cup \Sigma)^*\), **FIRST(\(\alpha\))** es el conjunto de terminales \(a\) tales que \(\alpha \Rightarrow^* a\beta\) para algún \(\beta\), más \(\epsilon\) si \(\alpha \Rightarrow^* \epsilon\).

Algoritmo clásico para cada \(A \in V\) hasta que no cambien conjuntos `FIRST(A)`:

1. Inicializar: si \(A \rightarrow a\delta\) con \(a \in \Sigma\), añadir \(a\) a `FIRST(A)`; si \(A \rightarrow \epsilon\), añadir \(\epsilon\).
2. Repetir: para \(A \rightarrow B_1 B_2 \cdots B_k\), propagar `FIRST(B₁)` (sin \(\epsilon\)) a `FIRST(A)`; si \(B_1 \Rightarrow^* \epsilon\), continuar con \(B_2\), etc.; si todos pueden derivar \(\epsilon\), añadir \(\epsilon\) a `FIRST(A)`.
3. Parar en punto fijo.

**FIRST de cadena** \(\alpha = X_1 X_2 \cdots X_n\): igual lógica secuencial; colecta terminales hasta el primer símbolo que no anula, o \(\epsilon\) si todos anulan.

Complejidad: \(O(|V| \cdot |P| \cdot |G|)\) en el peor caso con implementación ingenua; gramáticas de compilador suelen ser pequeñas en \(V\), el cuello es atención a \(\epsilon\)-producciones.

### FOLLOW: cálculo y rol en predictivo

**FOLLOW(A)** (para \(A \in V\)) son terminales \(a\) tales que alguna forma sentenciforme tenga \(\ldots A a \ldots\); también incluye **\$** (fin de entrada) si \(A\) puede estar inmediatamente antes de fin de cadena en una derivación desde el axioma \(S\).

Inicialización: `FOLLOW(S)` contiene \(\$\); demás vacíos. Reglas de actualización hasta punto fijo:

1. Para \(B \rightarrow \alpha A \beta\): añadir `FIRST(β)`\(\setminus\{\epsilon\}\) a `FOLLOW(A)`; si \(\epsilon \in\) FIRST(\(\beta\)) o \(\beta\) vacío, añadir `FOLLOW(B)` a `FOLLOW(A)`.
2. Caso \(B \rightarrow \alpha A\) (A al final del cuerpo): añadir `FOLLOW(B)` a `FOLLOW(A)`.

FOLLOW depende del **contexto** de aparición del no terminal; FIRST solo del cuerpo de producciones salientes de \(A\).

### Tabla predictiva \(M[A,a]\)

Tabla con filas no terminales \(A\), columnas terminales \(a\) (más \(\$\)). Entrada \(M[A,a] = A \rightarrow \alpha\) si:

- \(a \in\) FIRST(\(\alpha\)) para alguna producción \(A \rightarrow \alpha\), o
- \(\epsilon \in\) FIRST(\(\alpha\)) y \(a \in\) FOLLOW(A).

Condición **LL(1)**: cada celda tiene **como mucho una** producción. Si dos producciones compiten, hay **conflicto**.

**Máquina predictiva**: pila con $ abajo, S arriba; entrada con lookahead. Si tope no terminal \(A\) y token \(a\), si \(M[A,a]\) existe, expandir según producción (push reversos de RHS); si tope terminal \(a\) y coincide con entrada, pop y avanzar; error si vacío o mismatch.

### Conflictos FIRST/FIRST y FIRST/FOLLOW

**FIRST/FIRST**: dos producciones \(A \rightarrow \alpha \mid \beta\) con FIRST(\(\alpha\)) \(\cap\) FIRST(\(\beta\)) \(\neq \emptyset\) (excluyendo manejo especial si solo uno tiene \(\epsilon\) con FOLLOW). El lookahead no desambigua.

**FIRST/FOLLOW**: una producción \(A \rightarrow \epsilon\) (o anulable) y otra \(A \rightarrow \beta\) con terminal \(a\) en ambos FIRST(\(\beta\)) y FOLLOW(A) — típico del **dangling else** en gramáticas ingenuas de `if`.

Resoluciones habituales en ingeniería:

- **Reescribir gramática**: factorización a izquierda (`stmt → if e then stmt | if e then stmt else stmt` → `stmt → if e then stmt stmt_tail`, `stmt_tail → ε | else stmt`).
- **Precedencia** declarada (más LR que LL) o análisis ad hoc en descenso recursivo (`parse_stmt` distingue `else` mirando más allá).
- Aceptar gramática no LL(1) y usar **lookahead más profundo** (LL(k), ANTLR adaptive).

### Eliminación de recursión izquierda

Producción \(A \rightarrow A \alpha \mid \beta\) impide descenso directo (bucle infinito en `parse_A` llamándose al inicio). **Eliminación estándar**:

- \(A \rightarrow \beta A'\)
- \(A' \rightarrow \alpha A' \mid \epsilon\)

si \(\beta\) no deriva vacío. Si hay múltiples recursivas izquierdas, introducir \(A_1', A_2'\ldots\) o concatenar tail-recursión. **Precaución**: `FIRST` y `FOLLOW` cambian; revalidar LL(1) tras transformación.

Recursión izquierda **indirecta** \(A \Rightarrow^+ A \alpha\) requiere algoritmo de cierre sobre dependencias entre no terminales — mismo espíritu que eliminación en análisis de dependencias de atributos.

**Factorización a izquierda**: cuando \(A \rightarrow \delta \alpha \mid \delta \beta\), factorizar \(\delta\) común: \(A \rightarrow \delta A'\), \(A' \rightarrow \alpha \mid \beta\). Reduce conflictos FIRST/FIRST en cadenas con prefijo común (`read` vs `real`).

### Parser predictivo vs descenso recursivo

**Predictivo tabular**: una rutina genérica + tabla `M`; fácil de serializar, enseñar y verificar mecánicamente.

**Descenso recursivo**: cada \(A\) es función; la elección de producción es `if token in FIRST(α): ... elif ...`. El **look-ahead** es el `peek()` del lexer del laboratorio (corregir off-by-one si consumió de más).

Equivalencia: misma gramática LL(1) ⇒ mismas cadenas aceptadas. Descenso recursivo integra **acciones semánticas** al construir nodos AST en cada regla reducida sintácticamente; la máquina predictiva inserta acciones al aplicar producción.

Ventajas DR: código legible, mensajes de error localizados (`expected expr, got SEMI`). Ventajas tabla: verificación automática de conflictos al construir `M`, útil en generadores que emiten ambas formas.

**LL(1) limitaciones**: no cubre todas las LLC sin transformación; expresiones con ambigüedad de precedencia se reescriben en capas \(E,T,F\) (módulo 6/11) en lugar de tabla única plana.

### Conexión con el pipeline del curso

Lexer entrega tokens; parser LL(1) valida sintaxis antes del módulo 12 (scopes). Si la gramática del laboratorio QuimiSell falla en tabla con conflicto en `assign`, revisar factorización de `stmt_list`. IR del módulo 13 asume AST sin ε-nodos superfluos.

## Demostración enlazada al código del módulo

Gramática mini para expresiones lineales (laboratorio):

```
E  → T E'
E' → + T E' | ε
T  → id | ( E )
```

Cálculo FIRST: `FIRST(E) = FIRST(T) = {id, (}`, `FIRST(E') = {+, ε}`, `FIRST(T) = {id, (}`. FOLLOW: `FOLLOW(E) = {$, )}`, `FOLLOW(E') = FOLLOW(E)`, `FOLLOW(T) = {+, ), $}`.

Fragmento de tabla (columnas relevantes):

|       | id | + | ) | $ |
|-------|----|---|---|---|
| E     | T E' |   |   |   |
| E'    |    | + T E' | ε | ε |
| T     | id | ( E ) |   |   |

Snippet de **descenso recursivo** alineado al parser del módulo 11:

```python
def parse_E(lexer):
    n = parse_T(lexer)
    return parse_E_prime(lexer, n)

def parse_E_prime(lexer, left):
    tok = lexer.peek()
    if tok == '+':
        lexer.next()
        right = parse_T(lexer)
        node = ('+', left, right)
        return parse_E_prime(lexer, node)
    return left  # ε: FIRST(FOLLOW(E'))

def parse_T(lexer):
    tok = lexer.peek()
    if tok == 'id':
        lexer.next()
        return ('id',)
    if tok == '(':
        lexer.next()
        inner = parse_E(lexer)
        assert lexer.next() == ')'
        return inner
    raise SyntaxError(f"unexpected {tok}")
```

La máquina predictiva con pila reproduce las mismas expansiones: en `E` con `id`, empilar `E' T` (orden inverso), reducir `T → id`, luego expandir `E'` según `+` o ε vía FOLLOW.

**Eliminación de recursión** en variante incorrecta `E → E + T | T`:

```
E  → T E'
E' → + T E' | ε
```

Tras transformación, `parse_E` ya no entra en recursión infinita al inicio.

## Aplicaciones en sistemas reales

**ANTLR 4** usa predicción adaptativa (no exige LL(1) estricto); sigue calculando sets estilo FIRST para ramas.

**Hand-written parsers** en Clang (pre-parser en partes), Rust `syn` en modo manual, y muchos intérpretes educativos usan descenso con precedencia por niveles.

**Yacc/Bison no usan LL(1)** — este módulo prepara diagnóstico de por qué una gramática pasa o no a descenso antes de saltar a LR (módulo 18).

## Errores clásicos en examen

- Olvidar \(\epsilon\) en FIRST al propagar en cadenas \(B_1 B_2\ldots\).
- No añadir \(\$\) a FOLLOW(S).
- Marcar LL(1) sin verificar **todas** las producciones de cada \(A\).
- Eliminar recursión izquierda pero olvidar que \(A'\) hereda FOLLOW correcto.
- Confundir conflicto FIRST/FOLLOW del `if` con error del lexer.
- Creer que descenso recursivo no necesita FOLLOW — usa implícitamente \(\epsilon\) cuando `peek` ∉ FIRST(α restante).
- Tabla con celda doble y afirmar «parser arregla solo» sin estrategia.

## Preguntas de entrevista

**P: ¿Cuándo añades FOLLOW a FIRST al rellenar M[A,a]?**

**R:** Cuando la producción elegida es anulable (\(\epsilon \in\) FIRST(α)) y el lookahead \(a\) está en FOLLOW(A); entonces la producción «vacía» aplica ante \(a\).

**P: ¿LL(1) implica ambigüedad gratuita?

**R:** No. Una gramática ambigua fallará con conflictos reduce/reduce en LR o con múltiples árboles; LL(1) sin conflictos es univariante pero no garantiza ausencia de ambigüedad en otra gramática equivalente.

**P: ¿Por qué C no es LL(1)?**

**R:** Constructos como declarador/función comparten prefijos; typedef vs identificador; requiere lookahead o parser LR/GLR.

### WORKED EXAMPLE: dangling else reescrito

Gramática problemática:

```
stmt → if expr then stmt | if expr then stmt else stmt | other
```

`FIRST/FIRST` no es el conflicto principal aquí; al incluir ε en ramas internas aparece **FIRST/FOLLOW**: con lookahead `else`, tanto reducir producción anulable intermedia como expandir `else stmt` compiten en variantes LR; en LL predictivo, `stmt` sin factorizar admite ambigüedad de asociación del `else` con el `if` interno o externo (regla más cercana).

Factorización recomendada:

```
stmt       → if expr then stmt else_part | other
else_part  → else stmt | ε
```

Ahora `else` aparece solo en `else_part` tras haber leído `then stmt`. `FIRST(else_part) = {else, ε}`; para resolver ε se usa `FOLLOW(else_part) = FOLLOW(stmt)` que típicamente incluye `else`, `$`, y tokens que siguen a sentencias. La tabla LL asigna producción ε solo cuando el lookahead no es `else` en gramáticas cuidadosamente diseñadas, o se fuerza `else` a enlazar al `if` más cercano por regla gramatical explícita (sin ε que compita con `else` en el mismo conjunto FIRST/FOLLOW).

### Sincronización y recovery en máquina predictiva

Cuando `M[A,a]` está vacía, estrategias clásicas:

1. **Panic mode**: desapilar hasta encontrar símbolo en conjunto de sincronía (típicamente FOLLOW del no terminal en tope).
2. **Phrase level**: inyectar token «ficticio» o saltar hasta delimitador `;`.
3. **Corrección local**: insertar terminal faltante si el error es una coma omitida.

Descenso recursivo suele implementar recovery ad hoc (`try/except` con skip hasta `}`). La tabla LL facilita calcular conjuntos de sincronía **sistemáticamente** como unión de FOLLOW de símbolos en pila.

### Complejidad y prefijos de producción

Calcular FIRST para cadenas largas en gramáticas de C++ header puede producir conjuntos grandes pero finitos. Algoritmos eficientes usan representación bitset por terminal. En generadores, **precomputar** FIRST una vez por cambio de gramática y cachear en build del compilador, no en cada compilación de usuario final.

Para la gramática del laboratorio QuimiSell, liste cada no terminal en orden de dependencia (bottom-up sobre apariciones en cuerpos): calcular FIRST de símbolos hoja antes evita iteraciones extra y detecta ciclos de ε-anulación que requieren cierre de dependencias.

La **condición predictiva fuerte** exige que no haya intersección de FIRST entre alternativas **y** que ε-producciones no compitan con alternativas no triviales vía FOLLOW; en tablas impresas, marque con color las celdas que mezclan ε y terminal para estudiar exámenes de forma visual.

## Estudio dirigido

Calcule FIRST/FOLLOW completos para la gramática de declaraciones `D → T L`, `L → id L' | * id L'`, `L' → , id L' | ε`, `T → int | char`.

Detecte conflicto en producción ambigua `E → E + E | E * E | id` y reescriba en capas.

Simule pila predictiva para entrada `id + id + id` con traza celda a celda.

Compare mensajes de error de tabla vacía vs `assert` en descenso recursivo.

## Profundización: LL(k) y atributos

**LL(k)** generaliza a k tokens de lookahead; tamaño de tabla crece exponencialmente en k — raro en tablas densas, común en decisión codificada en código.

**Funciones atributas** en LL: sintetizados al completar producción; heredados más naturales en LR — diseño influye elección.

**Error recovery** en predictivo: sincronización en FOLLOW del stack top; panic mode hasta token de sincronía.

## Práctica integral

Implemente calculador iterativo de FIRST para JSON de producciones del laboratorio.

Genere `M` como `dict[(A,a)]` y lance excepción con conflicto detallado.

Convierta gramática recursiva izquierda de listas `L → L , id | id` a forma LL.

Documente en tres frases cómo el módulo 11 del laboratorio implementa ε-transición implícita al retornar `left` sin consumir `+`: eso es exactamente la fila `M[E', a]` con \(a \in\) FOLLOW(E) y producción \(E' \rightarrow \epsilon\).

Repase la demostración con la cadena `id + ( id )` y anote el orden de llamadas `parse_E → parse_T → parse_E → …` comparándolo con profundidad de pila en la máquina predictiva.

## Síntesis y checklist antes de avanzar

- Calculé FIRST y FOLLOW hasta punto fijo en gramática de ejemplo.
- Construí tabla M[A,a] y verifiqué ausencia de conflictos o los localicé.
- Apliqué eliminación de recursión izquierda y/o factorización a izquierda.
- Diferencié conflicto FIRST/FIRST vs FIRST/FOLLOW con caso dangling else.
- Ejecuté traza mental predictiva vs descenso recursivo del snippet.
- Enlacé decisión `peek()` con conjuntos FIRST/FOLLOW de ε-producciones.
- Reconocí limitaciones LL(1) frente a gramáticas de lenguajes reales.
- Preparé transición al módulo 18 (LR/LALR y generadores).
