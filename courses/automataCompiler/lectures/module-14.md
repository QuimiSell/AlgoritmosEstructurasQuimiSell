## Panorama del tema: OPTIMIZACIÓN — CONSTANT FOLDING, DCE Y BUCLES

La IR generada tras el frontend es **correcta** pero rarely **eficiente**: expresiones con literales se evalúan en runtime aunque se conocen en compile-time; temporales muertos ocupan «registros virtuales»; bucles repiten cálculos invariantes. El **middle-end** aplica **optimizaciones** preservando **semántica observable** (salvo FP edge cases y threading).

Esta lección cubre **constant folding**, **propagación de constantes**, **eliminación de código muerto (DCE)** e introducción a **optimización de loops** (invariant code motion, desenrollado). El snippet del módulo simula folding sobre una lista de asignaciones.

## Objetivos de la lección

- Definir optimización correcta vs transformación unsafe.
- Aplicar constant folding y propagación en TAC a mano.
- Reconocer código muerto local y global (liveness).
- Nombrar optimizaciones de loop y cuándo aplicarlas.
- Ejecutar el snippet de plegado de constantes.

## Desarrollo de la lección

### Marco: análisis antes de transformar

Optimizaciones usan análisis **must/may**:

- **Reaching definitions**, **available expressions**, **liveness** (para DCE).
- Solo tras probar seguridad se reescribe IR.

GCC/LLVM encadenan **passes**; orden importa (re-run constant fold después de DCE).

### Constant folding

Si operandos son constantes, calcular en compilación:

`x = 3 + 5` → `x = 8` (cuádrupla o literal en símbolo).

Extensible a operaciones parciales y comparaciones (`if 1 < 2` → `if true`).

### Propagación de constantes y SPARK

Si `x = 7` y solo `y = x + 1` usa `x`, sustituir → `y = 8`. Iterar hasta punto fijo. Combinar con **sparse conditional constant propagation** para ramas constantes.

### Eliminación de código muerto (DCE)

Instrucción es muerta si su resultado **no afecta** salida observable (return, escritura memoria global, IO). Análisis de **liveness** hacia atrás: si temporal `t` no está vivo después de definirse, remover definición.

Cuidado: efectos secundarios (`call printf`) no son muertos aunque el valor de retorno no se use.

### Optimización de bucles

- **Invariant code motion**: mover `t = a * b` fuera de `while` si `a,b` no cambian en el loop.
- **Induction variable strength reduction**: reemplazar multiplicación en índice por suma.
- **Loop unrolling**: duplicar cuerpo para reducir overhead de salto (trade-off tamaño).
- **Vectorization**: SIMD si dependencias lo permiten (LLVM loop vectorizer).

Dependencias **carried** bloquean paralelización.

### Nivel de optimización

`-O0` (sin opts, debug), `-O2` equilibrio, `-Os` tamaño, `-O3` agresivo. Tiempo de compilación crece.

### CFG y análisis de flujo de datos (visión operativa)

Antes de eliminar código muerto, el optimizador construye el **grafo de flujo de control**: nodos son bloques básicos (secuencias lineales sin saltos internos salvo al final); aristas son saltos condicionales o incondicionales. Sobre este grafo, el análisis de **liveness** hacia atrás pregunta: ¿la variable `t` se usará en algún uso real antes de ser redefinida en un camino posterior?

Formalmente, un punto de programa es **vivo** para `t` si existe un camino desde ese punto hasta un **use** de `t` sin pasar por otra definición. Las ecuaciones de datos se resuelven iterando hasta convergencia en cada bloque (gen/kill sets). Solo con esta información global es seguro borrar `t5 = a * b` si `t5` nunca es vivo en el siguiente punto.

### Subexpresiones comunes y redundancia parcial

**CSE (common subexpression elimination)** detecta que `t1 = x + y` y más tarde `t2 = x + y` pueden compartir valor si `x` e `y` no se redefinen entre medias. El optimizador reemplaza el segundo cálculo por copia `t2 = t1`. En LLVM, passes `EarlyCSE` y `GIMPLE PRE` implementan variantes.

Distinto de folding: aquí los operandos pueden ser variables no constantes; la ganancia proviene de evitar **recomputación** en hardware.

### Peephole local vs passes globales

**Peephole optimization** mira una ventana de 2–3 instrucciones consecutivas: `MOV R1, R2` seguido de `MOV R2, R1` redundante; `ADD R1, 0` innecesario. Es barato y se aplica tarde, incluso sobre ensamblador.

Los passes globales (DCE, LICM) requieren IR estructurado y son más caros de computar en compilación pero reportan mayores ganancias en loops calientes.

### Caso numérico de LICM

```
t0 = a * b
while (i < n) {
    sum = sum + arr[i]
    i = i + 1
}
```

Si `a` y `b` no mutan dentro del `while`, `t0 = a * b` es **invariante**: se mueve antes del bucle. Sin LICM, cada iteración repetiría multiplicación que puede costar decenas de ciclos en CPU moderna; con miles de iteraciones la diferencia es medible en perfiles.

### Riesgos y semántica de observabilidad

Optimizar `x * 0` a `0` es inseguro si overflow o señalización importan en lenguajes con excepciones aritméticas. Compiladores C/C++ permiten reglas `fast-math` que relajan IEEE-754 a cambio de folds agresivos. **Threading** y **volatile** obligan a desactivar ciertos passes en variables marcadas.

### Conexión con el segundo pass del laboratorio

Tras generar TAC del parser, un estudiante puede implementar `optimizar_instrucciones_tac` extendiendo el snippet: segundo pass que sustituye usos de `t1` cuando `t1` se asignó de constante propagada. Medir líneas antes/después documenta impacto pedagógico aunque el binario final aún no exista.

## Demostración enlazada al código del módulo

El snippet recorre asignaciones; si ambos operandos de `+` o `*` son numéricos literales en la representación interna, reemplaza la operación por el valor calculado con `eval` controlado o aritmética Python.

Eso es **constant folding** local línea a línea. No hace propagación global ni DCE (si `t1` muerto permanece).

Extensión laboratorio: segundo pass que marca temporales vivos desde `return` y elimina defs no vivas.

## Aplicaciones en sistemas reales

**LLVM `-mem2reg` + SCCP**: promueve memoria stack a SSA y propaga constantes agresivamente.

**Java JIT HotSpot**: optimiza bytecode caliente tras perfilado — folding y inline en runtime.

**SQLite query planner**: «optimiza» queries; análogo conceptual de cost model en IR.

## Errores clásicos en examen

- Folding que ignora overflow definido del lenguaje (C signed UB).
- DCE que elimina `call` con efectos laterales.
- Mover código invariante que muta en el loop.
- Confundir peephole con análisis global de flujo.
- Asumir que `-O3` siempre es más rápido (puede hinchar I-cache).

## Preguntas de entrevista

**P: ¿DCE local vs global?**

**R:** Local: instrucción inútil inmediata en bloque. Global: usa liveness inter-bloques en CFG; elimina cadenas de temporales muertos cruzando saltos.

**P: ¿Por qué correr constant fold varias veces?**

**R:** Un fold crea nuevas constantes que otro pass puede propagar; iteración hasta estabilidad.

## Estudio dirigido: optimización intermedia

Aplica constant folding a mano sobre secuencia TAC: `t1=3+5; t2=t1*2; t3=2+2; x=t2+t3` hasta no poder más; luego DCE si `x` no se usa. Documenta cada paso.

Dibuja CFG de un `if` con asignaciones en cada rama y marca qué temporales están vivos en el join point antes de φ/assign merge. Explica por qué DCE global necesita union de caminos.

Extiende `optimizar_instrucciones_tac` del snippet para multiplicar constantes adyacentes si ambas son dígitos. Discute si segundo pass de propagación podría reemplazar `x = t1 * 2` tras `t1=30`.

Describe strength reduction `x*8` → `x<<3` en IR y condiciones de seguridad (overflow, signed vs unsigned en C).

Para bucles, escribe pseudo-código LICM que detecta operaciones cuyos operandos son invariantes en el header block dominator tree — no implementes, solo verbaliza prerequisitos.

Contrasta `-O0` vs `-O2` en tamaño de binario y tiempo de debug: optimización elimina variables debug-friendly — trade-off conocido en ingeniería.

## Profundización: passes y correctitud

**Preservación de observables**: optimización válida si programa optimizado produce misma salida observable y mismos efectos IO/modificación memoria visible según modelo de memoria del lenguaje. C/C++ hace esto especialmente sutil con `volatile`, `atomic`, strict aliasing.

**Alias analysis** informa si dos punteros pueden referir misma memoria; sin él, LICM no puede mover loads con seguridad.

**Loop vectorization** empaqueta iteraciones en registróns SIMD; requiere probar ausencia de dependencias loop-carried.

**Profile-guided optimization** (`-fprofile-use`) reordena bloques según frecuencias medidas en entrenamiento representativo.

El snippet sólo pliega sumas constantes en strings; mejora propuesta: grafo de def-uso en temporales `t\d+` para propagar valor de `t1=30` a usos de `t1`.

**Peephole** en ensamblador final elimina `MOV R0,R0` tras regalloc imperfecto.

Documenta un caso donde DCE **inseguro** eliminaría código con side effect: `call printf` cuyo retorno no se usa debe permanecer.

Benchmark mental: programa con loop de mil millones de iteraciones, invariante `x*y` fuera reduce de 1e9 multiplicaciones a 1.

### Ética de optimización

`-ffast-math` rompe reproducibilidad científica; compiladores documentan flags que alteran semántica numérica — decisión del ingeniero, no solo del compilador.


## Práctica integral y cierre de unidad

Aplica cadena de optimizaciones manual sobre bloque TAC: folding, propagación, DCE, strength reduction en un ejemplo de cuatro párrafos de código fuente equivalente.

Construye CFG con tres bloques y calcula conjunto de variables vivas al final del bloque central hacia atrás en dos iteraciones.

Implementa en Python detección de temporales muertos en lista TAC si variable temporal no aparece en operandos de instrucciones posteriores ni en asignaciones a variable usuario.

Discute impacto de optimización en depuración: variables eliminadas ya no visibles en debugger — compilador emite metadatos DWARF para mapear IR optimizado a fuente.

Compara loop unrolling factor 2 vs 4 en tamaño de binario hipotético y latencia de salto.

Investiga flag `-Og` de GCC (optimizar conservando debug); relaciona con producción vs desarrollo.

Explica por qué eliminar `x*0` puede ser incorrecto con excepciones de coma flotante o `-fno-signed-zeros`.

Propón orden de passes para mini compilador del curso: constant fold antes de DCE; repetir hasta punto fijo.

Simula LICM moviendo invariante fuera de `for` escrito en pseudocódigo C.

Cierra conectando salida optimizada del snippet módulo 14 con entrada del generador assembly módulo 15.

## Monografía breve: optimizar sin mentir

Optimización es transformación sujeta a contrato semántico. Los passes conservadores son preferibles a binarios rápidos incorrectos. Industria invierte décadas en pruebas de regresión de compilador donde cada pass tiene suites masivas.

Constant folding y DCE enseñan el patrón general: análisis simple habilita transformación simple. LICM y vectorización requieren análisis más profundo pero siguen la misma plantilla.

El snippet del curso es germen de pass real. Extenderlo enseña ingeniería: idempotencia (correr fold dos veces no cambia más), punto fijo (iterar passes).

Los bucles dominan rendimiento en cómputo numérico; optimizar invariantes es ganancia desproporcionada. Perfilado (`perf`) en programas reales muestra donde optimizer merece atención humana adicional.

Recuerda trade-off con compilación incremental: optimización agresiva aumenta tiempo build CI.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** Pleca `t1=1+2+3` por etapas hasta constante.

**Ejercicio 2.** Elimina temporal muerto en secuencia de tres asignaciones.

**Ejercicio 3.** Mueve invariante fuera de bucle pseudocódigo.

**Ejercicio 4.** ¿Es seguro `x*0→0` en C sin fast-math?

**Ejercicio 5.** Orden de passes fold luego DCE: da contraejemplo si se invierte mal.

Usa snippet `optimizar_instrucciones_tac` en casos 1-2.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Diseña un caso donde DCE global difiere de DCE local: un temporal usado solo en un bloque posterior al join de un if. Argumenta por qué hace falta análisis de liveness en el CFG.

No optimices hasta que el TAC sin optimizar sea correcto en casos manuales. El folding del snippet es un primer pass; documenta qué transformaciones aplicas si entregas código al profesor. Prueba secuencias con constantes y con temporales muertos para ver el límite del optimizador didáctico.


Además, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.

Vuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.

Cierra comparando mentalmente un programa antes y después de constant folding en el snippet: la lista optimizada debe ser más corta y seguir evaluando igual en los casos de prueba del laboratorio.

Si tienes dudas, rehace en papel un ejemplo de eliminación de código muerto sobre tres temporales con análisis de liveness explícito y marca qué instrucciones sobreviven al final del bloque.

## Síntesis y checklist antes de avanzar

- Pliqué a mano `t0=2+3`, `t1=t0*4`.
- Identifiqué instrucción muerta en un CFG de ejemplo.
- Nombré una optimización segura para invariantes de loop.
- Corrí snippet de folding del módulo.
- Listo para codegen (módulo 15).
