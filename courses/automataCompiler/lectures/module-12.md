## Panorama del tema: ANÁLISIS SEMÁNTICO, TABLA DE SÍMBOLOS, SCOPE Y TYPE CHECKING

La sintaxis puede ser perfecta y el programa seguir siendo inválido: usar una variable no declarada, sumar `int` con `string`, o referirse a un campo privado desde otro módulo. El **análisis semántico** asigna **significado** al AST: tipos, alcances (scope), visibilidad, compatibilidad de operadores. La **tabla de símbolos** es la estructura de datos central: un mapa de nombres a entradas con tipo, categoría (variable, función, tipo), dirección o offset, y metadatos de compilación.

A diferencia del parser (CFG), muchas reglas semánticas **no** son libres de contexto puras: declara antes de usar, herencia de tipos en clases — a veces se modelan con gramáticas atribuidas o chequeos en visitor post-parse.

## Objetivos de la lección

- Definir tabla de símbolos y operaciones insert/lookup.
- Implementar scope anidado con pila de tablas o árbol de scopes.
- Explicar verificación de tipos (reglas de tipado, coerciones).
- Distinguir errores semánticos de sintácticos y léxicos.
- Recorrer el snippet de chequeo de tipos del módulo.

## Desarrollo de la lección

### Fases del analizador semántico

Típicamente dos pasadas (pueden fusionarse):

1. **Construcción de símbolos**: recorre declaraciones, llena tabla (funciones, variables globales, tipos).
2. **Chequeo**: recorre cuerpos, valida usos, infiere o verifica tipos de expresiones.

En C, la primera pasada registra firmas; en Java, resolución de tipos puede requerir grafo de dependencias entre clases.

### Tabla de símbolos

Cada entrada puede contener:

- Nombre y categoría (`var`, `func`, `param`, `typedef`).
- Tipo (estructura compuesta: puntero, array, función).
- Scope level o enlace a scope padre.
- Para codegen: offset en stack frame, tamaño, etiqueta assembly.
- Flags: `const`, `static`, `mutable`.

Operaciones:

- **insert(name, entry)** — falla si duplicado en mismo scope (salvo sobrecarga con mangling).
- **lookup(name)** — busca desde scope actual hacia afuera (regla léxica de scope).

### Scope estático vs dinámico

La mayoría de lenguajes imperiales usan **scope léxico/estático**: el significado de `x` se deduce del texto anidado en tiempo de compilación. **Scope dinámico** (raro: algunas Lisp históricas, macros): el significado depende de la pila de llamadas en runtime.

Implementación clásica: **pila de hash maps**. Entrar bloque → push mapa vacío; salir → pop. Lookup consulta de arriba a abajo.

### Type checking

Reglas de forma:

- \(\Gamma \vdash e : T\) — «en contexto \(\Gamma\), expresión \(e\) tiene tipo \(T\)».

Para binarios: exigir tipos compatibles; resultado según tabla (`int + int → int`). Subtipos: si `Dog <: Animal`, asignar `Dog` donde se espera `Animal`.

**Coerciones implícitas** (promoción int→float) se insertan como nodos cast en AST decorado.

Errores comunes reportados aquí: cantidad de argumentos, tipos de retorno en `return`, condicionales no booleanos.

### Análisis de flujo de control (introducción)

Avisos: variable leída antes de asignar, código inalcanzable, paths sin return. Algunos compiladores tratan warnings como errores con `-Werror`.

### Interacción con código generador

El AST tipado alimenta IR: cada nodo sabe su tipo para elegir instrucciones (`imul` vs `fmul`) y tamaños.

### Ejemplo de shadowing y resolución léxica

```c
int x = 1;
{
    float x = 3.14;
    x = x + 1; // ¿cuál x?
}
```

El bloque interno declara **nueva** entrada en la tabla del scope hijo; el `x` en la suma interna resuelve al `float` local. El `x` externo permanece oculto hasta cerrar el bloque (pop de tabla). El generador de código usa **offsets distintos** en frames separados conceptualmente o el mismo frame con slots diferentes.

### Sobrecarga y mangling (visión C++)

En C++, `foo(int)` y `foo(float)` comparten nombre fuente; la tabla almacena símbolos **mangled** (`_Z3fooi`, `_Z3foof`). El semantic analyzer elige la coincidencia mejor según tipos de argumentos (resolución de sobrecarga), tarea más pesada que lookup simple del snippet Python.

### Registros asociados a declaraciones

En `int arr[10];`, la entrada de tabla guarda tipo array, longitud, tamaño 40 bytes. En `void f(int x)`, la entrada de parámetro indica offset en stack frame o registro argumento según ABI. **forward declaration** de función inserta firma incompleta; la definición posterior completa cuerpo y parámetros.

### Análisis semántico del snippet `TablaSimbolos`

```python
tabla.declarar("contador", "int")
tabla.obtener_tipo("contador")
```

- `declarar` lanza si la clave existe — modela redeclaración ilegal en mismo scope.
- `obtener_tipo` lanza si falta — modela «variable no declarada» en use site.

Extensión natural: método `entrar_scope` / `salir_scope` con `dict` anidados; `lookup` sube la cadena. En chequeo de expresión `Id(node)`, llamar `obtener_tipo(node.name)` y adjuntar al nodo `node.inferred_type`.

### Errores múltiples y recuperación

Compiladores producen listas de diagnósticos: «línea 5: tipo incompatible», «línea 9: identificador no declarado». El semantic analyzer puede insertar tipo **error** en nodos fallidos para que el codegen omita esa rama pero continúe verificando el archivo — mejor experiencia en IDE.

## Demostración enlazada al código del módulo

El snippet del curso modela `TablaSimbolos` con diccionario interno y métodos `declarar` / `consultar`. El chequeo compara tipos de operandos en asignaciones y operaciones — patrón visitor minimalista.

Al recorrer AST de asignación `x = expr`:

1. `consultar('x')` debe existir y ser asignable.
2. Tipo de `expr` debe ser compatible con tipo de `x`.
3. Si éxito, marcar variable como «definitivamente asignada» en análisis de flujo simple.

Extender con **pila de scopes**: al entrar en función, nuevo dict; `declarar` solo en tope; `consultar` busca en cadena de dicts.

## Aplicaciones en sistemas reales

**TypeScript**: análisis semántico rico (tipos estructurales, inferencia) antes de emitir JS.

**mypy / Pyright**: type checking opcional sobre Python; tabla de símbolos + inferencia gradual.

**Rust borrow checker**: fase después del tipado; semántica de lifetimes (más allá de «tipos clásicos»).

## Errores clásicos en examen

- Buscar símbolo solo en scope global (olvida shadowing local).
- Permitir redeclaración en mismo scope sin error.
- Confundir nombre de tipo con variable.
- Olvidar que `lookup` en C++ puede devolver sobrecargas múltiples.
- Mezclar tabla de símbolos con tabla de parse LR (distintas).

## Preguntas de entrevista

**P: ¿Cómo modelas shadowing?**

**R:** Pila de tablas: insert en tope; lookup desde tope hacia abajo devuelve el binding más interno visible léxicamente.

**P: ¿Semántico vs sintaxis en `x = ;`?**

**R:** Sintaxis: falta expresión tras `=`. Semántico sería `x = y` con `y` no declarado o tipos incompatibles con sintaxis válida.

## Estudio dirigido: semántica y tabla de símbolos

Extiende `TablaSimbolos` con pila de scopes: al entrar en bloque ficticio `{`, push dict; al salir, pop. Simula el programa con declaración global `int x` y local `float x` imprimiendo qué tipo devuelve `lookup("x")` en cada punto.

Diseña reglas de tipado para el mini lenguaje del laboratorio: `NUM` es int, `+` y `*` requieren operandos int, asignación exige compatibilidad. Escribe juicio `Stmt` para `id = Expr` formalmente en tres líneas.

Clasifica errores: `int x; x = true;` semántico; `int x x;` sintáctico; `int x = @3;` léxico. Repite con variantes propias hasta automatizar la clasificación.

Analiza qué información debe persistir en objeto `.o` del símbolo `f` definido `static` en C: visibilidad linkage interna — puente conceptual a enlazador módulo 15.

Decora un AST dibujado a mano con anotaciones de tipo en cada nodo expresión tras chequeo. Ese dibujo es el «Annotated AST» que el generador TAC consumirá.

### Doble pasada vs una pasada

Algunos compiladores fusionan construcción de tabla y chequeo en un solo recorrido con forward declarations registradas como `SymbolIncomplete`. Enumera ventajas (rapidez) e inconvenientes (mensajes de error menos ordenados) frente a dos pasadas claras.

## Profundización: semántica estática avanzada

**Inferencia de tipos** (Hindley-Milner) resuelve tipos sin anotar cada variable; unificador une ecuaciones de tipos. Python con mypy se acerca gradualmente. Contrasta con C donde tipos deben declararse explícitamente salvo `auto`.

**Subtipado estructural** (TypeScript): dos interfaces con mismos campos son compatibles aunque nombres difieran. Tabla de símbolos guarda forma de tipos, no solo nombre alias.

**Lifetime** (Rust) y **borrow checking** son análisis posteriores al tipado clásico pero antes de codegen — tercera ola de «semántica estática».

**Ámbito de bloque** en JavaScript (let/const) vs var (hoisting): semántica distinta con mismo parser; tabla debe modelar temporal dead zone.

**Overloading de funciones** requiere resolución al punto de llamada con candidatos viables y mejor conversión aplicable — tabla indexada por nombre con listas sobrecargas.

Prueba `tabla.declarar("x","int"); tabla.declarar("x","int")` y captura excepción; luego implementa sobrecarga con clave `(nombre, firma)`.

Ejercicio: recorre AST hipotético de llamada `f(1,"a")` verificando firma almacenada contra argumentos.

### Marca vs binding

En C, `typedef` introduce nombre de tipo; no debe confundirse con variable en lookup. En compiladores reales hay namespaces separados de tags, tipos y valores.


## Práctica integral y cierre de unidad

Implementa stack de scopes sobre `TablaSimbolos` del snippet con métodos `push_scope`, `pop_scope`, `declare`, `lookup` que recorre scopes de arriba hacia abajo.

Define reglas de coerción mínimas: `int` a `float` permitida en asignación con advertencia opcional; `string` a `int` prohibida.

Simula chequeo de llamada `f(a,b)` contra declaración `f(int x, float y)` con argumentos en orden; detecta error de tipo en segundo argumento.

Clasifica diez fragmentos de código inventados en error léxico/sintáctico/semántico; mezcla dominios aritméticos y declaraciones.

Explica diferencia entre variable no declarada y variable declarada pero fuera de scope (shadowing oculto vs ausencia total).

Describe cómo compilador C++ maneja enlaces `extern` vs `static` en tabla extendida con linkage field.

Analiza decoración de AST: cada nodo `Num` recibe tipo `int`; nodo `Add` infiere tipo máximo de hijos si defines promoción.

Extension AVANZADA: sketch de inferencia para `let x = 10` sin tipo explícito asignando `int` por literal.

Cierra enlazando con módulo 13: solo AST tipado debe emitir TAC con operadores acorde a tipo (`fadd` vs `add`).

## Monografía breve: la tabla de símbolos como memoria del compilador

Durante compilación, la tabla de símbolos es la base de datos efímera del programa. No confundir con tablas del parser LR (acciones shift/reduce). Las entradas acumulan tamaño, alineación, número de registro asignado después, visibilidad linkage.

La semántica estática atrapa errores que pruebas dinámicas tardías podrían no cubrir. Tipos incorrectos en millones de líneas cuestan horas; el compilador los encuentra en segundos. Por eso lenguajes con tipos rígidos prefieren fallar temprano.

Shadowing y redes de scopes modelan la estructura léxica del bloque. Cada apertura de llave incrementa profundidad; cada cierre la reduce. Visualizar pila de tablas como pilas de platos ayuda a estudiantes visuales.

El snippet `TablaSimbolos` es mínimo pero correcto en invariantes de redeclaración y uso. Tu trabajo es extender sin romper: cada método nuevo debe preservar consistencia en push/pop.

La decoración de AST prepara IR: nodos sin tipo inferido obligan al generador a suponer int por defecto — fuente de bugs. Completar tipos antes de TAC es invariante de pipeline.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** Tabla con scopes para triple bloque anidado con redeclaración legal e ilegal.

**Ejercicio 2.** Tipo inferido para `let x = 3 + 4.5` en sistema con promoción int→float.

**Ejercicio 3.** Error semántico vs sintáctico: clasifica cinco fragmentos.

**Ejercicio 4.** Extiende snippet con `lookup` recursivo en pila de scopes.

**Ejercicio 5.** ¿Qué guarda la tabla para función `int f(int x)`?

Documenta decisiones de diseño si implementas overload.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Clasifica nuevamente diez fragmentos de código en errores léxico, sintáctico y semántico. Si el analizador semántico corre después del parser, asegúrate de no ejecutar codegen cuando la tabla contiene símbolos con tipo error.

La tabla de símbolos alimenta offsets y decisiones de backend; sin scopes correctos el laboratorio solo sirve para programas de un bloque. Implementa pila de ámbitos como mejora prioritaria si aún no la tienes. Verifica que `declarar` y `obtener_tipo` del snippet se comportan como esperas ante redeclaración y uso antes de declarar.


Además, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.

Vuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.

## Síntesis y checklist antes de avanzar

- Implementé mentalmente push/pop de scope.
- Escribí tres reglas de tipado para `+`, asignación, llamada.
- Diferencié léxico/sintaxis/semántica con un ejemplo cada uno.
- Revisé snippet de tabla de símbolos del módulo.
- Listo para IR y TAC (módulo 13).
