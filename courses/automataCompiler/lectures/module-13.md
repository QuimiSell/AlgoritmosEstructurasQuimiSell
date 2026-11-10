## Panorama del tema: CÓDIGO INTERMEDIO — IR, TAC Y CUÁDRUPLAS

Tras validar tipos, el compilador no salta directamente a `mov rax, ...`. Introduce una **representación intermedia** (IR) independiente de la sintaxis y del hardware: facilita optimización, análisis y backends múltiples. Formas clásicas: **código de tres direcciones** (TAC) — cada instrucción tiene a lo sumo dos operandos fuente y un destino — y **cuádruplas** — tuplas `(op, arg1, arg2, result)` fáciles de serializar y optimizar.

LLVM IR, GCC GIMPLE, o las listas `t0 = a + b` del laboratorio comparten el espíritu: variables temporales ilimitadas, saltos explícitos, memoria modelada abstractamente.

## Objetivos de la lección

- Motivar IR frente a AST y frente a assembly.
- Definir TAC y cuádruplas con ejemplos.
- Generar TAC desde AST de expresiones y asignaciones.
- Mencionar SSA como evolución de IR para optimización.
- Leer el generador TAC del snippet del módulo.

## Desarrollo de la lección

### ¿Por qué IR?

- **Desacopla** frontend de backend.
- **Uniforma** optimizaciones (mismo pass de constant folding sobre TAC o LLVM).
- **Simplifica** codegen: backend solo selecciona instrucciones desde IR normalizado.

AST conserva jerarquía anidada poco conveniente para análisis lineal; assembly tiene orden fijo y registros escasos demasiado pronto.

### TAC — three-address code

Formato típico:

```
t1 = a + b
t2 = t1 * c
x  = t2
```

Cada línea referencia **nombres temporales** como registros virtuales ilimitados. Operaciones unarias: `t = -a`. Saltos: `if a < b goto L1`. Lectura/escritura memoria: `t = *p`, `*p = t`.

### Cuádruplas y tríadas

- Cuádrupla: `(ADD, a, b, t1)` — fácil de reordenar y almacenar en arrays.
- Tríada: `(ADD, a, b)` con orden implícito por índice de instrucción.

Los optimizadores recorren listas de cuádruplas, construyen grafos use-def, insertan φ-functions en SSA.

### Generación desde AST

Visitor **post-order** en expresiones:

1. Visitar hijos, obtener temporales `t_left`, `t_right`.
2. Emitir cuádrupla `(OP, t_left, t_right, t_new)`.
3. Retornar `t_new`.

Asignación `x = e`: emitir para `e`, luego `(ASSIGN, t_e, _, x)`.

Control de flujo: `if`, `while` emiten labels y saltos condicionales.

### SSA (Static Single Assignment)

Cada variable se asigna exactamente una vez; redefiniciones crean nuevas versiones `x1`, `x2`. Facilita propagación y eliminación de redundancias. LLVM IR está en SSA; φ en merge de CFG.

### Representaciones gráficas

**Sea of Nodes** o **Explicit CFG + instructions** en compiladores JIT. La elección afecta costo de modificar IR bajo optimización.

### Traducción dirigida por la sintaxis (SDT) sobre expresiones

Las **definiciones de traducción dirigida por la sintaxis** adjuntan atributos sintetizados o heredados a nodos del parse tree. En una gramática \(E \rightarrow E + T \mid T\), el atributo sintetizado `E.code` puede ser una lista de cuádruplas generadas combinando hijos: al reducir \(E + T\), el generador crea temporal `t`, emite `(ADD, E.place, T.place, t)` y asigna `E.place = t`.

En implementaciones de laboratorio sin SDT formal, un **visitor** sobre el AST cumple el mismo rol: cada nodo `Add(left, right)` devuelve el nombre de temporal que almacena el resultado. La clave pedagógica es que **el orden postorden** garantiza que los hijos ya aportaron sus operandos antes de emitir la operación del padre.

Para condicionales `if (B) S1 else S2`, el generador crea etiquetas `Lfalse`, `Lend`, emite para la condición booleana \(B\) salto `IF_FALSE B goto Lfalse`, traduce \(S1\), `GOTO Lend`, etiqueta `Lfalse`, traduce \(S2\), etiqueta `Lend`. Este patrón es idéntico en tres direcciones, cuádruplas o LLVM `br i1`.

### Control de flujo: bucles while paso a paso

Considere `while (a < b) { x = x + 1; }`. El generador reserva `Ltest` y `Lend`:

1. Etiqueta `Ltest`.
2. Emitir código que deja en `tcond` el resultado de `a < b` (comparación emite `(LT, a, b, tcond)` y salto condicional).
3. Si falso, saltar a `Lend`.
4. Traducir cuerpo: actualización de `x`.
5. Salto incondicional a `Ltest`.
6. Etiqueta `Lend`.

El **grafo de flujo de control (CFG)** resultante concentra aristas entrantes al header del bucle y sale hacia bloque siguiente; los optimizadores del módulo 14 explotan invariantes en el header y el cuerpo.

### Cuádruplas vs tríadas en depuración

Las **tríadas** referencian operandos por índice de instrucción anterior (`(ADD, 3, 5)` significa sumar resultado de instrucciones 3 y 5). Ahorran espacio pero dificultan reordenar instrucciones: mover una instrucción rompe referencias. Las **cuádruplas** con nombres explícitos `t7` facilitan insertar optimizaciones entre líneas sin renumerar cadenas de índices.

En depuradores de compilador (GCC `-fdump-rtl`, LLVM `opt -S`), ver IR intermedio ayuda a correlacionar línea fuente con secuencia TAC.

### Caso integrado con el laboratorio QuimiSell

El reto `val = (10 + 5) * 2` debería producir temporales encadenados como en el módulo 9, pero con **nombres generados** por `GeneradorTAC.nuevo_temporal()`:

- `t1 = 10 + 5` (los literales pueden permanecer inmediatos hasta el backend).
- `t2 = t1 * 2`
- `val = t2`

Si la expresión incluye variables ya declaradas, `10` y `5` se sustituyen por nombres de símbolo en cuádruplas `(ADD, t_a, t_b, t1)`. El analizador semántico previo debe haber colgado tipos en nodos para que futuro codegen use instrucciones de enteros vs flotantes.

### Lecturas recomendadas (conceptuales)

El diseño clásico de **Aho, Lam, Sethi y Ullman** («Compiladores: principios, técnicas y herramientas», el Dragon Book) dedica capítulos enteros a esquemas de traducción y generación de IR; la nomenclatura TAC de este curso coincide con el capítulo de código intermedio. LLVM documentación oficial explica PHI nodes como generalización de asignaciones múltiples tras bifurcaciones.

## Demostración enlazada al código del módulo

El generador TAC del curso recorre AST simple y acumula lista de strings o cuádruplas: por cada `Add`, crea temporal nuevo `t_k = left op right`; la asignación final enlaza variable usuario.

La clase `GeneradorTAC` del snippet mantiene `contador_temp` para nombres únicos (`t1`, `t2`, …) y lista `instrucciones`. El método `generar_expr_suma(op1, op2)` crea temporal, añade string `"{temp} = {op1} + {op2}"` y **retorna** el nombre del temporal para encadenamiento (`t2 = t1 + c` en el ejemplo del curso). Este patrón return-value es la interfaz que un visitor AST invocaría al salir de nodo `Add`.

Trazar `x = (10 + 5) * 2`:

1. `(ADD, 10, 5, t0)`
2. `(MUL, t0, 2, t1)`
3. `(ASSIGN, t1, _, x)`

Coincide con pipeline demo módulo 9. Temporales son ilimitados; el backend posterior asignará registros físicos (módulo 15).

## Aplicaciones en sistemas reales

**LLVM IR**: texto legible `.ll`, serializable, con passes `opt`.

**WebAssembly**: stack machine como IR de bajo nivel para navegadores.

**SQL engines**: planes de ejecución como DAG de operadores — IR de dominio específico.

## Errores clásicos en examen

- Generar assembly antes de temporales (mezclar fases).
- Olvidar temporales en expresiones anidadas (reusar mal un registro).
- Confundir cuádrupla con triádica sin numerar orden.
- No emitir saltos en `if`/`while`.
- AST y TAC como el mismo árbol (TAC es secuencia plana).

## Preguntas de entrevista

**P: ¿Ventaja de SSA sobre TAC clásico?**

**R:** Definiciones únicas simplifican análisis de flujo de datos y eliminan ambigüedad sobre qué versión de `x` se lee en cada punto.

**P: ¿Dónde vive el IR en GCC vs LLVM?**

**R:** GCC: varias IR internas (GENERIC, GIMPLE, RTL). LLVM: IR único desde frontend hasta casi el backend.

## Estudio dirigido: IR, TAC y cuádruplas

Traduce a mano el AST `Assign(x, Mul(Add(10,5), 2))` a lista TAC completa con temporales nombrados, luego conviértela a cuádruplas `(op, arg1, arg2, result)` sin usar strings compuestos. Compara legibilidad.

Escribe TAC para `if (a < b) x = 1 else x = 2` con etiquetas `L0,L1,L2`. Incluye saltos condicionales y asignaciones en cada rama. Verifica que solo hay un flujo coherente al final.

Ejecuta el snippet `GeneradorTAC` y agrega método `generar_expr_mul`. Encadena suma y multiplicación en el mismo `contador_temp`. Imprime lista final y verifica unicidad de temporales.

Investiga qué es **SSA** leyendo un fragmento LLVM IR (`%1 = add i32 %0, 1`). Relaciona φ con merges tras if/else en control de flujo — extensión natural del `if` TAC escrito arriba.

Explica por qué el backend prefiere IR en forma de asignaciones secuenciales frente a AST profundamente anidado: facilita análisis de flujo de datos para optimización módulo 14.

### SDT como puente mental

Aunque no implementes atributos gramaticales formales, al escribir visitor puedes nombrar atributos sintetizados `node.place` o `node.code`. Esa nomenclatura coincide con libros de compiladores y entrevistas de herramientas educativas.

## Profundización: IR en la industria

**LLVM bitcode** permite distribuir programa sin fuente a optimizador común. **ThinLTO** enlaza módulos conservando visibilidad global para optimización interprocedural.

**Stack machine IR** (bytecode JVM, WASM) usa operandos implícitos en pila; traducción desde AST puede ser más directa que tres direcciones pero complica análisis.

**Anf (A-Normal Form)** fuerza que operaciones complejas se asignen a temporales inmediatamente — subconjunto de TAC usado en algunos compiladores funcionales.

**Basic blocks** agrupan TAC sin saltos internos salvo al final; CFG explícito es prerequisito de optimización módulo 14.

Implementa generador que emite cuádruplas como tuplas Python `(ADD, 'a', 'b', 't1')` y pretty-printer que las convierte a strings.

Para `while`, demuestra que número de temporales crece acotado si condiciones y cuerpo no anidan infinitamente en compilación finita.

Compara tamaño IR vs tamaño fuente en programa pequeño del laboratorio; ratio típico crece por explosion de operaciones atómicas.

### Verificación de IR

Passes de LLVM verifican tipos en IR ySSA bien formada antes de optimizar — «semantic checker del middle-end».


## Práctica integral y cierre de unidad

Genera TAC completo para `if (a) { x = b + c; } else { x = d; }` con etiquetas y saltos condicionales; cuenta número de temporales.

Implementa clase `Cuadrupla` con campos op, arg1, arg2, res y método `__str__`; convierte salida del `GeneradorTAC` a lista de cuádruplas.

Traduce lista de cuádruplas a grafo de flujo básico identificando líderes (primera instrucción de bloque y destino de salto).

Explica por qué LLVM usa tipos explícitos en IR (`i32`, `i64`) mientras tu laboratorio usa nombres simbólicos.

Compara tamaño de AST vs TAC para expresión profundamente parentizada; TAC lineal crece linealmente con operadores.

Practica renombrar temporales en SSA mental: después de `if` con merge, introduce phi conceptual aunque solo uses TAC plano.

Discute almacenamiento en memoria vs temporales: variables fuente `x` viven en slots; constantes pueden permanecer inmediatas hasta backend.

Menciona barrera de optimización: orden de instrucciones TAC con efectos observables no puede reordenarse libremente antes de análisis.

Ejercicio: convierte `while (i < n)` a TAC con comparación y salto atrás; verifica que etiqueta test precede cuerpo según diseño del módulo.

Cierra trazando cadena datos desde AST del parser módulo 11 hasta strings del pipeline demo módulo 9.

## Monografía breve: tres direcciones hacia la máquina

TAC es el puente donde el programa deja de parecer árbol y se vuelve programa con flujo lineal y saltos explícitos. Cada asignación a temporal es candidata a registro físico más adelante; cada salto condicional será etiqueta en assembly.

Cuádruplas facilitan escribir optimizadores: array de estructuras fijas, fácil de barrer. LLVM SSA va más lejos al hacer únicas las definiciones, pero conceptualmente continúa la tradición IR.

Las estructuras de control se aplastan: el `if` del usuario desaparece como palabra clave en TAC, sustituido por compare y branch. Ese aplanamiento es lo que hace visible la máquina subyacente al principiante que lee listados optimizados.

Generador del snippet usa strings por simplicidad; producción usa estructuras y verificadores internos. La diferencia es ingeniería, no teoría.

Ensaya traducción de función con dos returns; observa cómo TAC necesita etiquetas y possibly phi al fusionar flujos. Sin SSA, asignaciones duplicadas a misma variable fuente simulan merge.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** TAC para `z = (a+b) * (c+d)` con cuatro temporales mínimos.

**Ejercicio 2.** Convierte la lista anterior a cuádruplas explícitas.

**Ejercicio 3.** Emite salto condicional para `while (i<n)`.

**Ejercicio 4.** Ejecuta GeneradorTAC encadenando dos sumas y una multiplicación manual.

**Ejercicio 5.** Explica beneficio SSA con ejemplo if/else merge.

Verifica salidas imprimiendo lista `instrucciones` del snippet.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Completa la traducción de una asignación con paréntesis anidados y verifica que el número de temporales coincide con el número de operadores binarios en el AST.

Conserva numeración monótona de temporales en TAC para facilitar optimización y depuración. Antes de añadir `while` o `if`, valida expresiones aritméticas simples imprimiendo la lista `instrucciones` del `GeneradorTAC`. Compara tu salida con el pipeline demo del módulo 9 para detectar desvíos temprano.


## Síntesis y checklist antes de avanzar

- Traduje AST de suma encadenada a lista TAC.
- Escribí tres cuádruplas para `if (a) x = 1`.
- Comparé IR con salida del snippet del módulo.
- Nombré un pass de optimización que opera sobre IR (módulo 14).
- Listo para optimización.
