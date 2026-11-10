## Panorama del tema: PARSER LL VS LR, AST Y DESCENSO RECURSIVO

Tras el lexer, el parser valida que la secuencia de tokens pertenezca al lenguaje definido por la **gramática libre de contexto** del lenguaje y construye una estructura jerárquica: idealmente un **AST** (árbol de sintaxis abstracta) para fases posteriores. Dos familias dominan la práctica: **LL** (descendente, predictive, left-to-right leftmost) y **LR** (ascendente, shift-reduce). Los parsers LL(1) manuales o recursivos encajan en cursos y DSLs pequeños; los **LALR(1)** de Yacc/Bison impulsan parsers de C, Java y SQL.

Esta lección conecta FIRST/FOLLOW con decisiones LL, contrasta shift/reduce en LR, y recorre el parser descendente del snippet (con corrección mental del `peek`).

## Objetivos de la lección

- Explicar el contrato parser: tokens → AST.
- Contrastar top-down (LL) y bottom-up (LR/LALR).
- Calcular FIRST y FOLLOW en gramáticas pequeñas.
- Implementar descenso recursivo para expresiones con precedencia.
- Relacionar conflictos shift/reduce con ambigüedad gramatical.

## Desarrollo de la lección

### Rol del parser

El parser consume tokens con **un token de lookahead** (LL(1)) o **pila de estados** (LR). Detecta errores sintácticos (`else` sin `if`, paréntesis huérfanos). Salida: AST, árbol concreto, o directamente IR en compiladores de un solo paso.

### LL(1) y descenso recursivo

Cada no terminal se vuelve función `parse_X()` que:

1. Mira token actual.
2. Elige producción según FIRST/FOLLOW.
3. Consume tokens y llama recursivamente a sub-reglas.

**FIRST(\(\alpha\))**: terminales que pueden iniciar derivaciones de \(\alpha\). **FOLLOW(A)**: terminales que pueden seguir a \(A\) en una derivación.

Condición LL(1): para no terminal \(A\) con producciones \(A \rightarrow \alpha_1 \mid \ldots \mid \alpha_k\), los conjuntos FIRST de cada alternativa son **disjuntos** (y si \(\epsilon \in\) FIRST, no intersectan FOLLOW).

### LR, shift y reduce

Automaton sobre **ítems** (reglas con punto ·). **Shift**: empujar token a la pila. **Reduce**: reemplazar handle en tope por no terminal. **Goto**: tras reducir, transicionar con el no terminal.

Conflicto **shift/reduce**: gramática no LR(1) sin precedencia declarada. **reduce/reduce**: más grave, ambigüedad dura.

LALR fusiona estados LR(1) equivalentes — tablas más compactas, casi mismo poder en lenguajes reales.

### AST vs árbol de derivación

El AST omite nodos puramente sintácticos (paréntesis redundantes, reglas de lista). Nodos típicos: `BinaryOp`, `Literal`, `Assign`, `If`. El visitor del módulo 12 y generador IR del 13 recorren AST.

### Precedencia en descenso recursivo

Patrón clásico por niveles:

- `parse_expr` para suma/resta (asocia izquierda, llama a `parse_term`).
- `parse_term` para mult/div.
- `parse_factor` para números y paréntesis.

Esto implementa la gramática no ambigua del módulo 6 sin tablas LL generadas.

### Yacc/Bison

El desarrollador escribe reglas con acciones C; Bison genera parser LALR. Directivas `%left`, `%right` resuelven conflictos de precedencia sin reescribir toda la CFG.

### Cálculo de FIRST y FOLLOW en miniatura

Gramática:

```
S → A
A → aA | b
```

**FIRST(A)** = {a, b} porque ambas producciones empiezan con terminal. **FOLLOW(A)** en esta gramática trivial incluye `$` (fin de entrada) si \(S\) no aparece en cuerpos. Para añadir producción \(\epsilon\):

```
A → aA | ε
```

Entonces \(\epsilon \in\) FIRST(A); en LL(1) la elección entre `a` y \(\epsilon\) usa FOLLOW cuando lookahead no es `a`.

Construir tablas LL manualmente para 4–5 reglas es ejercicio de examen clásico: filas = no terminales, columnas = lookahead, celdas = regla a aplicar o error.

### Tabla LR: intuición shift/reduce

En un autómata LR, cada estado codifica **ítems** como `E → E · + T` (punto marca progreso). Si el lookahead es `+` desde ítem completo `E → E + T ·`, el parser **reduce** a \(E\). Si vemos `+` esperando más, **shift** al siguiente estado. Conflictos significan la gramática no es LALR(1) pura sin ayuda de precedencia.

### Descenso recursivo con precedencia completa

Esqueleto para expresiones con `*`, `/`, `+`, `-`:

```
parse_expr(): t = parse_term(); while (tok == '+' or '-'): consume; t = parse_term(); t = new Add(...)
parse_term(): f = parse_factor(); while (tok == '*' or '/'): ...
parse_factor(): if number: return Literal; if '(': parse_expr(); consume ')'
```

Cada nivel corresponde a un estrato de precedencia; no requiere tabla LL explícita pero **es equivalente** a gramática factorizada del módulo 6.

### Errores sintácticos y panic mode

Ante token inesperado, el parser puede **sincronizar** en `;` o `}` para seguir listando errores. Mensajes útiles incluyen «se esperaba TOKEN_RPAREN en línea L». Panic mode evita cascadas de falsos positivos tras un único error de sintaxis.

## Demostración enlazada al código del módulo

`ParserSimple` recibe lista de lexemas (strings). `parse_expresion` asume gramática plana `NUMERO ('+' NUMERO)*`:

- Toma primer número como `left`.
- Mientras el siguiente token sea `'+'`, consume y acumula `Add(left, right)` como **string** simulando AST.

Resultado para `10+20+30`: `Add(Add(10, 20), 30)` — **asociatividad izquierda** explícita.

**Nota del snippet publicado**: la línea `def peek(` tiene sintaxis incorrecta en el curso (`(): return` mezclado); la intención es método `peek` que devuelve token actual sin consumir. Al corregirlo, el parser podría decidir con lookahead entre reglas.

El parser **no** implementa `*` ni precedencia; extender con `parse_term` es el ejercicio natural del laboratorio.

## Aplicaciones en sistemas reales

**Go compiler `gc`**: parser descendente recursivo escrito a mano — estilo LL con precedencia explícita.

**PostgreSQL SQL parser**: gramática grande, tradicionalmente yacc/bison style para SQL complejo.

**Python parser (PEG)**: desde 3.9+, parser PEG alternativo a LL/LR clásico; sigue emitiendo AST.

## Errores clásicos en examen

- Confundir LL con LR (dirección de construcción del árbol).
- Olvidar que FOLLOW importa con producciones ε.
- Creer que todo lenguaje LLC tiene parser LL(1) (falso: LL es subclase práctica).
- No distinguir shift/reduce de reduce/reduce.
- Parse tree = AST (falso).

## Preguntas de entrevista

**P: ¿LL o LR para un nuevo DSL interno?**

**R:** LL/recursivo si el equipo quiere código legible y gramática pequeña; LR/Bison si la gramática es grande, con mucha precedencia, o se aporta tabla automática. Muchos DSLs empiezan LL manual.

**P: ¿Qué es el lookahead en LL(1)?**

**R:** Un token de inspección sin consumir para elegir la producción correcta; los conjuntos FIRST/FOLLOW formalizan esa decisión.

## Estudio dirigido: parsers LL y LR

Calcula FIRST y FOLLOW para la gramática de expresiones del módulo 6 con tres niveles \(E,T,F\). Verifica condición LL(1) en cada conjunto de alternativas. Si no hay conflictos, escribe pseudocódigo `parse_E()` llamando `parse_T()`.

Simula manualmente una tabla LR diminuta (dos ítems) para la cadena `num + num`: anota pasos shift/reduce en tabla de dos columnas «pila de estados» y «entrada». Aunque incompleta, la simulación fija la intuición bottom-up.

Corrige mentalmente el método `peek` del snippet a `def peek(self): return self.tokens[self.pos] if self.pos < len(self.tokens) else None` y describe cómo usarlo para elegir entre alternativas si extendieras la gramática.

Implementa precedencia multiplicación sobre suma extendiendo el parser con `parse_term` que consume `*` entre factores. Muestra AST de `1+2*3` correctamente anidado (`Add(1, Mul(2,3))`) si asocias `parse_expr` a sumas y `parse_term` a productos.

Contrasta error de sintaxis vs léxico: `+ 3` falla en parser (esperaba factor), `3 @ 4` falla en lexer. Prepara ejemplo de cada uno para examen oral.

### Cuándo elegir generador automático

Usa Bison cuando la gramática supera veinte producciones o tiene conflictos resueltos solo por precedencia. Mantén descendente recursivo para lenguajes de configuración (JSON corto, expresiones del laboratorio). La decisión es de mantenibilidad del equipo, no teoría pura.

## Profundización: parsing en el ecosistema real

**LALR(1)** es casi el estándar de parsers generados; conflictos reportados por Bison deben resolverse con precedencia o reescritura gramatical. Ignorarlos produce parser que elige shift o reduce arbitrariamente — bugs espectrales en compiladores caseros.

**GLR** y **Earley** parsean gramáticas ambiguas o grandes familias LLC con más costo, usados en análisis de lenguajes naturales y algunos IDEs.

**Parser combinators** (Haskell, Rust nom) expresan gramática como funciones composables; equivalentemente LLC si no abusas de recursión sin límite. Errores de stack overflow en JSON ingenuo recursivo conectan con profundidad del parser.

**Recuperación de errores** avanzada: **phrase-level recovery** inserta o borra tokens para continuar; IDEs muestran múltiples diagnósticos gracias a parser resistente (Rust `rustc`).

**AST desacoplado**: biblioteca separada (Clang AST, Rust `syn`) permite linters sobre árbol sin ejecutar backend.

Practica construcción de tabla LL a mano para gramática de tres producciones; implementa `parse_table[(A, la)] = prod_index`.

Extiende `ParserSimple` para rechazar cadena vacía o `+ 3` devolviendo error estructurado en lugar de excepción index.

### Métricas de parsers

Complejidad: LL(1) lineal en tokens con tabla constante; LR similar. Backtracking ingenuo sin memo puede exponencial en cadena longitud n — motivación para tablas predictivas.

Laboratorio: serializa AST resultante a JSON indentation para depuración visual antes de TAC.


## Práctica integral y cierre de unidad

Completa tabla LL a mano para gramática `E → T E'`, `E' → + T E' | ε`, `T → F T'`, `T' → * F T' | ε`, `F → (E) | num`. Verifica sin conflictos. Escribe funciones `parse_E`, `parse_T`, `parse_F` en pseudocódigo.

Simula parse LR para `num * num + num` indicando cada shift (símbolo empujado a pila) y reduce (producción aplicada). Comprueba que el árbol resultante asocia multiplicación más profundo que suma.

Corrige el snippet `ParserSimple` agregando validación de entrada vacía y token inesperado al inicio; documenta casos prueba.

Contrasta panic mode con error nodes en AST: algunos IDEs insertan nodo `Error` para colorear resaltado mientras el usuario edita.

Explica por qué gramática de JSON simple es LL(1) y por qué extensión con comentarios o trailing commas requiere cuidado en grammars de producción.

Describe cómo ANTLR con left-recursion directa evita transformar gramáticas en algunos casos modernos.

Prepara respuesta de entrevista de dos minutos: diferencias LL vs LR sin jerga excesiva, con ejemplo de dirección del árbol.

Integración laboratorio: serializa AST a s-expression antes de generar TAC para depurar precedencia visible en consola.

## Monografía breve: parsear es construir significado estructural

Parsing sin AST es incompleto: la estructura jerárquica es lo que consume el semántico. Gramáticas ambiguas no solo molestan en teoría; producen árboles que interpretan operaciones en orden incorrecto. La industria invierte en gramáticas factorizadas y en generadores maduros porque el costo de bugs sintácticos silenciosos es altísimo en compiladores masivos.

LL favorece legibilidad del código del parser; LR favorece cobertura de gramáticas más ricas sin reescrituras constantes. No hay ganador absoluto: Go eligió hand-written recursive descent; GCC históricamente yacc; ambos producen software en producción.

La recuperación de errores distingue herramientas educativas de compiladores de IDE. El estudiante puede abortar al primer error; el producto debe listar decenas de fallos en archivos generados automáticamente.

FIRST/FOLLOW no son fetichismo académico: codifican la misma decisión que función `peek` en descenso recursivo LL. Dominarlos te permite depurar por qué tabla LL marca conflicto.

Integración final del módulo con el laboratorio: al cerrar parser, imprime árbol; confirma asociatividad; solo entonces avanza a tabla de símbolos. Saltar validación visual del árbol es causa frecuente de bugs en TAC posterior.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** Derivación leftmost de `num + num * num` con gramática E/T/F factorizada.

**Ejercicio 2.** ¿La gramática es LL(1)? Justifica con FIRST/FOLLOW de E.

**Ejercicio 3.** Simula dos pasos shift del parser LR sobre `num +`.

**Ejercicio 4.** Extiende ParserSimple para rechazar `+ 1` explicando mensaje.

**Ejercicio 5.** Compara árbol concreto vs AST para `if (0) x=1;`.

Resuelve cada item antes de mirar soluciones de compañeros; el objetivo es fluidez en notación, no memorizar.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Practica escribir el AST como s-expression y verifica que `1+2*3` tenga `Mul` más profundo que `Add`. Prepara para el módulo 13: el visitor que genera TAC debe recorrer ese mismo árbol en postorden.

El parser es donde la CFG del módulo 6 se materializa en estructura manipulable. Si el árbol anida mal productos y sumas, corrige precedencia antes de culpar al generador TAC. Documenta en tu repositorio tres cadenas aceptadas y tres rechazadas con la razón sintáctica en cada caso. Si usas descenso recursivo, cada función `parse_*` debe corresponder a un no terminal de tu gramática escrita en apuntes.


Además, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.

## Síntesis y checklist antes de avanzar

- Calculé FIRST de un no terminal simple.
- Tracé shift/reduce en una tabla mini LR de dos reglas.
- Ejecuté ParserSimple y expliqué asociatividad izquierda.
- Esbocé extensión con `*` y precedencia.
- Listo para análisis semántico (módulo 12).
