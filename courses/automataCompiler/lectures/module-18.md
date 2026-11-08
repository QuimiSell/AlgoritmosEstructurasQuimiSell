## Panorama del tema: LR(1), LALR(1) Y GENERADORES DE PARSER

Los parsers **LR** leen la entrada de izquierda a derecha produciendo la **derivación leftmost inversa**: reconstruyen el árbol ascendiendo desde hojas (tokens) mediante reducciones que invierten pasos de derivación. La familia **LR(k)** usa \(k\) símbolos de lookahead; en la práctica industrial domina **LR(1)** teórico y **LALR(1)** (Look-Ahead LR) como compromiso: tablas casi tan compactas como LR(0) con poder cercano a LR(1). **Yacc**, **GNU Bison**, **yacc** histórico de UNIX y descendientes alimentan frontends de C, SQL, Verilog y decenas de lenguajes con gramáticas voluminosas que no serían LL(1) sin torturar la especificación.

El núcleo ingenieril son los **ítems** (reglas con «punto» · marcando progreso), la operación **closure**, las transiciones **goto**, y las tablas **ACTION** y **GOTO**. Los **conflictos shift/reduce** y **reduce/reduce** señalan gramáticas no LR en su forma cruda; muchas se resuelven con **precedencia y asociatividad** de operadores declaradas en Bison, o con reescritura de gramática. **ANTLR** ofrece un camino alternativo (ALL(*)/predicción adaptativa) — comparar ambos ecosistemas ayuda a elegir toolchain en un nuevo DSL.

Esta lección consolida el puente entre teoría de autómatas de pila (módulo 7) y el parser real que consume tokens del módulo 10.

## Objetivos de la lección

- Definir ítems LR, closure y goto sobre conjuntos de ítems.
- Interpretar tablas ACTION (shift/reduce/accept) y GOTO.
- Clasificar conflictos shift/reduce y reduce/reduce y sus remedios.
- Aplicar precedencia en Bison/Yacc a conflictos de expresiones.
- Contrastar pipeline Bison/LALR con ANTLR en proyectos de compilador.

## Desarrollo de la lección

### Ítems LR y automato de colecciones

Un **ítem** es una producción con posición del punto: `[A → α · β]` significa que el parser ha reconocido \(\alpha\) y espera derivar \(\beta\). Ítem completo `[A → α ·]` indica que reducir \(A → α\) es legal si el contexto lookahead lo permite.

Dado conjunto de ítems \(I\):

**closure(I)**:
- Incluir todos los ítems de \(I\).
- Si `[A → α · B β]` está en closure y \(B \rightarrow \gamma\) es producción, añadir `[B → · γ]` para cada \(\gamma\).

**goto(I, X)** para símbolo \(X \in V \cup \Sigma\): tomar ítems `[A → α · X β]`, mover punto tras \(X\), aplicar closure.

El **autómata LR** tiene estados = conjuntos canónicos de ítems (closure aplicada); aristas etiquetadas con \(X\) vía goto. Estado inicial closure(\{`[S' → · S $]`\}) con axioma aumentado \(S'\).

### Construcción LR(0) vs LR(1)

**LR(0)**: un estado por colección de ítems; ACTION usa solo estado actual (sin lookahead en ítems). Potente para enseñar, insuficiente para gramáticas expresivas — abundan conflictos.

**LR(1)**: cada ítem lleva **lookahead** terminal \(a\): `[A → α · β, a]`. Closure propaga FIRST de \(\beta a\) al añadir ítems de \(B\). Goto actualiza lookaheads según reglas de propagación. Estados LR(1) pueden multiplicarse respecto a LR(0).

**LALR(1)**: fusiona estados LR(1) que comparten el mismo **core** (mismo conjunto de ítems LR(0), ignorando lookahead) uniendo lookaheads. Reduce tablas al tamaño de LR(0) en muchos gramáticas reales; ocasionalmente introduce conflictos reduce/reduce que LR(1) puro no tiene — Bison documenta casos.

### Tablas ACTION y GOTO

Por estado \(i\) y lookahead \(a\):

- **shift \(s_j\)**: empujar \(a\) y pasar a estado \(j\) (goto desde \(i\) con terminal \(a\)).
- **reduce \(A \rightarrow \gamma\)**: desapilar \(|\gamma|\) símbolos (recuperando estados), apilar \(A\), goto al estado desde tabla GOTO.
- **accept**: solo en estado final con $ y axioma completo.
- **error**: celda vacía → reject.

**GOTO[i, A]** (A no terminal): estado tras reduce de \(A\) desde \(i\).

El **parser LR** mantiene pila de estados; ciclo: si ACTION es shift, empujar token; si reduce, contraer handle en tope según producción; si accept, fin.

### Conflicts shift/reduce y reduce/reduce

**Shift/reduce** en estado con ítem `[A → α ·]` (reducible) e ítem `[B → α' · a β]` (shift con \(a\)): no se sabe si reducir ahora o leer más. Clásico en `if-then-else` sin precedencia y en anidamiento de patrones similares.

**Reduce/reduce**: dos producciones completas con mismo lookahead — señal de **ambigüedad** en gramática o fusión LALR demasiado agresiva.

Diagnóstico Bison imprime estado con ítems conflictivos; depuración manual dibuja colección y señala lookaheads distintos.

### Precedencia en Bison/Yacc

Declaraciones `%left`, `%right`, `%nonassoc` con tokens o literales definen **niveles de precedencia** (más bajo en lista = menor precedencia si se usa la convención típica de Bison). Reglas:

- Dos producciones en conflicto shift/reduce con terminal \(t\): comparar precedencia de producción reducida vs precedencia de \(t\); mayor gana shift o reduce según reglas Bison.
- `%nonassoc` prohíbe encadenar (ej. igualdad no asociativa en algunos diseños).

**Asociatividad** desempata shift/reduce en mismos niveles (asoc. izquierda favorece reduce en `E → E + T` pattern, permitiendo seguir acumulando operador binario a la izquierda).

Esto **no** resuelve reduce/reduce; requiere refactor de gramática o volver a LR(1) puro / gramática distinta.

Ejemplo declarativo:

```
%left '+''-'
%left '*''/'
%right '^'
```

Expresión con `+` e `*` deja reducir multiplicación antes que shift de `+` en patrones shift/reduce estándar de yacc.

### Gramática aumentada y handle

Axioma \(S' \rightarrow S\) aísla \(S\) y marca aceptación con `$`. Un **handle** es cadena \(\beta\) en pila tal que reducir la producción \(A \rightarrow \beta\) corresponde a un paso de derivación inversa. Parsers LR localizan handles usando ítems completos con lookahead válido — propiedad **válida LR**: solo el handle correcto reduce en cada configuración.

### Comparación con ANTLR

| Aspecto | Bison/LALR | ANTLR 4 |
|---------|------------|---------|
| Modelo | Tablas ACTION/GOTO, shift-reduce | Predicción ALL(*), grammars sin factorizar tanto |
| Conflictos | Reportados explícitamente; precedence hacks | Menos tablas, más código generado adaptativo |
| Gramáticas | Excelente para C-like, SQL | Muy usado en Java, C#, tooling |
| Error messages | A veces crípticos en estados grandes | Mensajes contextuales configurables |
| Integración | C/C++; variantes Java | Java, C#, Python, targets múltiples |

ANTLR **no** construye tablas LR clásicas; evita muchas restricciones LALR a costa de mayor complejidad del generador y runtime de predicción. Para cursos, Bison enseña **disciplina de conflictos** visible; ANTLR privilegia productividad en grammars de protocolos y IDEs.

**GLR** (graph-structured stack) cubre ambigüedad explicítamente — fuera del núcleo LALR pero relevante en parsers de C++.

### Relación con PDA y módulo 7

La pila LR replica la pila de un PDA no determinista que simula derivaciones inversas; determinismo LR(1) restringe elecciones a una pila lineal. CYK (módulo 7) decide pertenencia en \(O(n^3)\) sin construir parser industrial; LR es la contraparte **lineal** cuando la gramática encaja.

## Demostración enlazada al código del módulo

Gramática LALR toy de listas y suma (fragmento estilo laboratorio):

```
S' → S
S  → E
E  → E + T | T
T  → id
```

Estados LR(0) iniciales (sin lookaheads completos en tabla corta):

1. `S'→·S`, `S→·E`, `E→·E+T`, `E→·T`, `T→·id`
2. Tras shift `id`: `T→id·`, `E→T·` — reduce `T→id` en varios lookaheads; posible shift `+` en otro ítem del estado si existiera `E` incompleto.

**Traza shift-reduce** para `id + id`:

```
Pila estados    Entrada        Acción
0               id + id $      shift → 3
0 3             + id $         reduce T→id, goto E en estado 2...
... (continuar hasta accept)
```

Snippet conceptual en Python del **simulador de tabla** (valores ficticios de estado):

```python
action = {
    (0, 'id'): 's3',
    (3, '+'): 'r T → id',
    # ...
}
goto_tbl = {(0, 'E'): 1, (0, 'T'): 2}

def lr_parse(tokens, action, goto_tbl):
    stack = [0]
    ip = 0
    while True:
        state = stack[-1]
        a = tokens[ip] if ip < len(tokens) else '$'
        act = action.get((state, a))
        if act is None:
            raise SyntaxError(f"error in state {state} at {a}")
        if act.startswith('s'):
            stack.append(int(act[1:]))
            ip += 1
        elif act.startswith('r'):
            # pop len(rhs), push lhs via goto
            ...
        elif act == 'acc':
            return True
```

En **Bison** real, el archivo `.y` declara tokens y producciones; `bison -v` emite archivo `.output` con estados numerados — ejercicio de curso: localizar conflicto shift/reduce y aplicar `%left '+'`.

## Aplicaciones en sistemas reales

**GCC** historically yacc/bison derivatives en parser C; estándares nuevos exigen extensiones cuidadosas de gramática LALR.

**PostgreSQL** parser SQL generado; precedencia extensa para operadores.

**Redis, Bash, awk** — pipelines yacc clásicos de décadas con tablas compiladas offline.

**LLVM tablegen** para DSLs internos: a veces LALR, a veces parsers hand-crafted para errores.

## Errores clásicos en examen

- Confundir **goto** sobre terminales (shift target) con GOTO sobre no terminales post-reduce.
- Creer que `%left` resuelve reduce/reduce.
- Olvidar axioma aumentado y aceptación con `$`.
- Dibujar closure sin añadir `[B→·γ]` cuando \(B\) sigue al punto.
- Asumir LR(1) y LALR(1) idénticos en toda gramática.
- Mezclar **handle** con cualquier prefijo de pila — solo el correcto reduce.
- Ignorar que conflicto persiste si precedencias iguales y mismo nivel nonassoc.

## Preguntas de entrevista

**P: Shift/reduce en expresiones: ¿shift o reduce con precedencia `*` sobre `+`?**

**R:** Mayor precedencia del operador entrante favorece tratar operando pendiente como parte de subexpresión más ajustada — en yacc, declarar `*` más alto que `+` orienta reducciones de `T` antes de shifts conflictivos de suma según patrón de estados.

**P: ¿Cuándo elegir ANTLR sobre Bison?**

**R:** Gramáticas con prefijos difíciles de factorizar, necesidad de listeners/visitors integrados, ecosistema JVM/.NET; Bison si priorizas tablas deterministas verificables y toolchain C madura.

**P: ¿LR(1) siempre más estados que LALR(1)?**

**R:** LALR(1) fusiona cores; conteo de estados LALR ≤ LR(1), con posible pérdida de resolución conflictiva.

### LR(1) lookahead en detalle (esquema)

Al cerrar ítem `[A → α ·, a]` indica que reducir \(A \rightarrow \alpha\) es válido solo si el próximo token es \(a\). Al procesar `[A → α · B β, x]`, cada producción \(B \rightarrow \gamma\) genera ítems `[B → · γ, b]` para cada \(b \in\) FIRST(\(\beta x\)). Así el lookahead fluye **adelante** en el cuerpo y al cierre del bloque LR hereda FOLLOW del lado derecho. Este mecanismo explica por qué LR(1) resuelve más gramáticas que SLR(1), que usa FOLLOW(A) global y excesivamente grande para elegir reducciones.

En traza de depuración, anotar lookaheads junto a cada ítem evita confundir un estado LR(0) «igual» con estados LR(1) distintos que LALR fusionará — ahí nace el riesgo de reduce/reduce espurio.

### Shift/reduce en gramática de expresiones: intuición de estados

En estado que contiene `[E → E · + T]` y `[T → T · * F]` (patrones simplificados) y un `T → F` completo, al ver `+` se reduce o shift según si el `+` pertenece a continuar una suma de nivel exterior o cerrar subárbol. La colección exacta de ítems depende de la gramática **desfactoring**; por eso las gramáticas yacc usan producciones `E → E + T | T` homogéneas y delegan asociatividad a precedencia.

### Generadores: flujo de ingeniería

Pipeline típico Bison: archivo `.y` con prologue C, `%token`, reglas, acciones semánticas `{ $$ = ... }`; `bison -d` genera `y.tab.h`; `flex` provee `yylex`; compilador enlaza parser con lexer. El **matcher** LR no conoce tipos: acciones embebidas construyen AST. Comparación ANTLR: gramm `.g4` → `ANTLR` genera lexer+parser; listeners/visitors recorren árbol. Elección depende de lenguaje host y cultura del equipo, no solo de poder expresivo crudo.

En mantenimiento industrial, equipos conservan archivos `.output` de Bison en control de versiones para auditar por qué un cambio de una producción introdujo un nuevo conflicto shift/reduce en un estado numerado — práctica recomendable cuando la gramática supera cientos de reglas.

La correctitud del parser LR respecto a la gramática declarada es verificable localmente (sin backtracking global), propiedad valiosa en compiladores donde el análisis sintáctico debe ser determinista sobre entradas válidas.

## Estudio dirigido

Construya closure y goto manual para gramática de 4 producciones con paréntesis balanceados aumentada.

Abra salida `-v` de Bison (o trace ficticia) y liste ítems del estado conflictivo del `if`.

Compare cantidad de estados LR(0) vs LR(1) en gramática pequeña con ε.

Relacione pila LR con simulación PDA del módulo 7 para aceptar `a^n b^n` — por qué no es LR sin trucos.

## Profundización: IELR, GLR y optimización de tablas

**IELR** (Bison 3) genera tablas LR saneadas — alternativa a LALR puro cuando reduce/reduce aparece por fusión.

**Compresión de tablas** (sparse rows) en parser generado reduce .rodata en binarios embebidos.

**Canonical LR(1)** minimiza estados LR(1) — investigación, no siempre en herramientas docentes.

## Práctica integral

Escriba gramática Bison mínima con conflicto `+`/`*` y resuélvalo con precedencia sin cambiar producciones.

Implemente lector de trazas que imprime pila ACTION paso a paso para cadena corta.

Contraste mensaje de error LR vacío vs diagnóstico ANTLR en la misma gramática mal cerrada.

Escriba un párrafo que explique por qué el lexer (módulo 10) debe entregar tokens **tipados** antes de que ACTION consulte `(estado, token)`: un `id` genérico versus palabra reservada `if` cambia la columna de la tabla aunque el lexema comparta prefijo.

Replique el diagrama autómata LR del módulo 11 (shift/reduce) etiquetando nodos como ítems completos en lugar de metáfora abstracta, para cerrar el círculo teórico.

## Síntesis y checklist antes de avanzar

- Definí ítem, closure y goto sobre conjuntos canónicos.
- Leí tablas ACTION/GOTO y tracé shift/reduce/accept.
- Clasifiqué shift/reduce vs reduce/reduce y remedios típicos.
- Apliqué precedencia Bison a expresiones aritméticas.
- Comparé LALR(1) con LR(1) y núcleo de fusión de estados.
- Contrasté ecosistema Bison vs ANTLR para diseño de parser industrial.
- Conecté pila LR con PDA del módulo 7 y tokens del módulo 10.
- Listo para integrar parser en pipeline semántico (módulos 12–15).
