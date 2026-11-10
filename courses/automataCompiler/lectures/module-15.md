## Panorama del tema: GENERACIÓN DE CÓDIGO OBJETO, REGISTROS Y ACTIVACIONES

El backend transforma IR optimizado en **instrucciones reales**: mov, add, load/store, saltos con offsets. Los **registros físicos** son escasos (x86-64: pocos callee-saved vs caller-saved); el compilador debe **asignar** temporales virtuales a `%rax`, `%rbx`, … o **spill** a memoria en stack.

Las **activaciones** de funciones modelan **frames** en pila: parámetros, retorno, variables locales, registros guardados. Las **convenciones de llamada** (System V AMD64, Microsoft x64, AAPCS ARM) son contratos que el codegen debe respetar para interoperar con libc y otros objetos.

## Objetivos de la lección

- Esquematizar selección de instrucciones desde IR.
- Explicar asignación de registros (grafo de conflictos, spill).
- Describir call stack, frame pointer y return address.
- Contrastar caller-saved vs callee-saved.
- Interpretar el snippet conceptual de ensamblador x86 del módulo.

## Desarrollo de la lección

### Selección de instrucciones

Pattern-matching de árboles IR sobre DAG: `t = a + b` con enteros → `mov rax, a; add rax, b`. IR tipo LLVM ya está en forma RISC-like; selector recorre con tablas (BURG/tree-parser).

Factores: tamaño de operandos, direccionamiento de memoria (x86 permite `add [mem], reg`).

### Asignación de registros

Temporales IR son **ilimitados**; CPU tiene **k** registros. Algoritmos:

- **Graph coloring** (Chaitin): nodos = temporales, aristas = interferencia (vivos al mismo tiempo); k-colorear; spill si imposible.
- **Linear scan**: rápido, usado en JIT.

**Spill**: cuando no cabe, guardar temporal en slot de stack y recargar al usar.

### Pila de activaciones

Cada **call** empuja return address; al entrar a función, prologue:

1. Guardar frame pointer anterior.
2. Establecer `%rbp` / frame register.
3. Reservar espacio locals (`sub rsp, N`).

Epilogue invierte antes de `ret`. Variables locales en offsets negativos respecto a frame pointer; parámetros en positivos o registros según calling convention.

### Convenciones de llamada (System V AMD64 ejemplo)

Primeros argumentos enteros: `%rdi`, `%rsi`, `%rdx`, `%rcx`, `%r8`, `%r9`. Retorno entero en `%rax`. Caller-saved: `%rax`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%r8–11`. Callee-saved: `%rbx`, `%rbp`, `%r12–15`.

El generador inserta **saves/restores** de callee-saved si la función los usa.

### Tipos de datos y alineación

Stack alineado a 16 bytes antes de call en x86-64 para SSE. Struct return via puntero oculto. Impacto en layout del frame.

### Enlace y relocación

El compilador emite **símbolos** relocables; el **ensamblador** produce `.o`; el **linker** resuelve direcciones finales. Etiquetas externas `call printf@plt` en código posicionalmente independiente (PIE).

### Grafo de interferencia y coloreado (intuición)

Para asignar \(k\) registros físicos, construyas nodos por cada temporal vivo simultáneamente; arista entre `t1` y `t2` si sus intervalos de vida se solapan y no pueden compartir registro. **Colorear** con \(k\) colores equivale a asignar registros. Si no es posible, **spill**: elegir un temporal a memoria (heurística: menos usado o en loop interior), insertar `load`/`store`, y repetir.

**Linear scan** ordena intervalos por inicio y mantiene activos; expulsar el que termina más lejos cuando se agotan registros — algoritmo usado en muchos JIT por velocidad de compilación.

### Prologue y epilogue detallados (x86-64)

Ejemplo conceptual de función con locales:

```
foo:
    push   rbp
    mov    rbp, rsp
    sub    rsp, 16        ; 16 bytes locales alineados
    ... cuerpo ...
    mov    rsp, rbp
    pop    rbp
    ret
```

Parámetros en SysV pueden llegar en `%rdi`, `%rsi`; el codegen coloca el séptimo parámetro en `[rbp+16]` según convención. **Leaf functions** sin calls pueden omitir frame pointer con flag `-fomit-frame-pointer`, complicando debuggers.

### Memoria de programa: texto, datos, heap, pila

El **loader** del SO mapea ELF/PE: segmento `.text` ejecutable solo lectura, `.data`/`.bss` global mutable, **heap** crece con `malloc` hacia arribas en virtual memory, **stack** crece hacia abajo en la mayoría de arquitecturas. Stack overflow guard pages disparan SIGSEGV en recursión infinita.

### Caso: traducción del snippet TAC a tres operandos reales

Para `t1 = a + b`, el snippet emite:

1. `MOV EAX, [a]` — load si `a` está en memoria frame.
2. `ADD EAX, [b]`
3. `MOV [t1], EAX`

Si `a` ya está en `%edx` por asignación previa, el selector elige `ADD EAX, EDX` evitando load redundante (coalescing en regalloc). El laboratorio conceptual se salta esta capa pero el alumno debe verbalizarla en defensa oral.

### Seguridad y mitigaciones (contexto moderno)

Ejecutables PIE + ASLR requieren que el backend genere código **position-independent** o aplicar relocations en runtime. Canarios de stack y shadow stack son responsabilidad del codegen + linker + loader, no del parser — pero integran la historia completa «del fuente al proceso en ejecución».

## Demostración enlazada al código del módulo

El snippet conceptual mapea TAC a cadenas `MOV EAX, ...`, `MOV [x], EAX` — abstrae:

1. Elegir acumulador `EAX` como destino de expresión.
2. Materializar constantes inmediatas.
3. Almacenar resultado en pseudo-dirección `[x]` (variable global simplificada).

No modela prologue ni convención; es **puente pedagógico** hacia listado assembly real. Extender: emitir `push rbp; mov rbp, rsp` en cada función del laboratorio.

## Aplicaciones en sistemas reales

**rustc + LLVM**: codegen backend LLVM produce `.s` o objeto directamente con convenciones por target triple.

**JNI / FFI**: violar convención entre Rust y C causa crashes silenciosos — el codegen debe seguir ABI.

**WebAssembly backend**: registros ilimitados en spec; lowering a stack machine en vez de GPR físicos.

## Errores clásicos en examen

- Olvidar alinear stack antes de call SSE.
- Usar `%rbx` sin salvar en función que llama otras (callee-saved).
- Confundir parámetro en stack vs registro en ABI distintas.
- Spill inexistente cuando k < temporales en examen teórico.
- `ret` sin restaurar frame pointer.

## Preguntas de entrevista

**P: ¿Caller-saved vs callee-saved?**

**R:** Caller guarda registros que usará tras la llamada si el callee puede pisarlos; callee guarda los suyos que promete preservar. La ABI lista quién es quién.

**P: ¿Qué hace el linker que el compilador no?**

**R:** Une `.o`, resuelve símbolos, asigna direcciones virtuales, aplica relocations, produce ejecutable o shared library.

## Estudio dirigido: codegen, registros y stack

Toma TAC `t1=a+b; t2=t1+c` y asigna manualmente tres temporales a dos registros forzando spill de uno a `[rbp-8]`. Lista instrucciones x86-64 emitidas en orden.

Dibuja stack durante llamada `main` → `foo(3)` con dos parámetros: argumentos en registros y stack, return address, saved rbp, locals de `foo`. Indica dónde lee `foo` cada parámetro según SysV.

Traduce el resultado de `traducir_tac_a_x86("t1 = a + b")` del snippet y comenta cada instrucción AT&T vs Intel syntax opcionalmente.

Explica qué hace el loader del sistema operativo al crear proceso: mapea segmentos ELF, ajusta PC al entry `main`, prepara stack inicial con argc/argv.

Enumera diferencias callee-saved vs caller-saved con ejemplo: función `foo` llama `bar` que usa `%rbx`; ¿quién salva `%rbx`?

Cierra el curso enumerando el pipeline completo 1–15 en una sola página y marca qué partes implementaste en el laboratorio QuimiSell. Esa hoja es mapa de estudio final.

## Profundización: máquina real y tiempo de ejecución

**Asignación de registros** con graph coloring puede usar heurística de spill sobre nodos con menor número de usos o en interior de loops profundos.

**Instruction scheduling** reordena para ocultar latencia de memoria; importa en superscalar.

**Position-independent code** usa PC-relative addressing para `LOAD` de símbolos globales.

**Prologo/epilog** compactos en funciones leaf sin llamadas (omitir frame pointer cuando es seguro).

**Seguridad**: stack canary insertado por compilador verifica overflow de buffer antes de `ret`.

**Dynamic linking** resuelve `printf` en tiempo de carga via GOT/PLT; primera llamada más lenta.

Simula registro allocation manual de tres temporales vivos en intervalos [1,4], [2,5], [3,6] — grafo completo K3 necesita spill con solo dos colores.

Compara ARM AAPCS con SysV: primeros 8 argumentos en registros en ARM64, distinto reparto de callee-saved.

**Runtime** más allá del stack: `malloc` gestiona heap; GC en Java elimina free explícito pero frame de llamada sigue existiendo.

Laboratorio final: imprime pseudo-assembly completo para `val=(10+5)*2` con prologo ficticio, loads de constantes, stores a `val`.

Cierra el itinerario 6–15 releyendo cada checklist y marcando ítems dominados; repite laboratorio integrado si alguno queda débil.

### Recursos de repaso cruzado

Módulo 6 ambigüedad ↔ módulo 11 conflictos shift/reduce; módulo 7 pila ↔ módulo 11 stack LR; módulo 13 IR ↔ módulo 14 optimización ↔ módulo 15 regalloc. Trázalas en diagrama personal de dependencias del curso.


## Práctica integral y cierre de unidad

Asigna manualmente ocho temporales a cuatro registros con grafo de interferencia denso; identifica nodo spill mínimo grado heurístico.

Escribe prologo/epilogo completo para función `int sum(int a,int b)` en notación AT&T con convención SysV.

Traduce tres instrucciones TAC consecutivas a secuencia assembly minimizando movs redundantes vía coalescing mental.

Diagrama stack tras tres llamadas anidadas `main→g→h` con profundidades de frame apilados.

Contrasta código position-independent con absolute addressing en binarios legacy.

Enumera pasos del loader al ejecutar ELF: mapear segmentos, inicializar GOT, saltar a `_start` antes de `main`.

Discute role de `CRT` startup files (`crt0.o`) que enlazador añade antes de tu `main`.

Relaciona gestión de registros con calling convention en llamadas recursivas factorial: profundidad stack vs registros caller-saved.

Practica calcular tamaño frame si hay 6 locales int y 2 spill slots.

Cierra el curso Autómatas y Compiladores escribiendo reflexión de una página: cómo módulos 1–8 (teoría) habilitan confianza en módulos 9–15 (ingeniería), citando al menos tres conexiones concretas entre lemas, automatas y fases reales de `gcc` o `rustc`.

## Monografía breve: tocar el hardware de forma responsable

El backend es donde abstracción cede a realidad: número finito de registros, latencias de carga, convenciones que si se violan rompen interoperabilidad con bibliotecas del sistema. Asignación de registros y layout de stack no son detalles menores: son la diferencia entre programa que corre y segmentation fault misterioso.

Conceptualizar codegen como pattern matching ayuda: cada patrón TAC mapea a plantilla assembly con instancias de operandos. Extensión a ARM vs x86 es catálogo de plantillas sobre mismo IR.

Stack frames conectan modelo de llamadas recursivas del curso de estructuras con ejecución física. Ver crash por stack overflow en recursión infinita cierra círculo teórico-práctico.

Linker resuelve símbolos que el backend dejó pendientes (`call printf` sin dirección final). Loader crea proceso. Estudiar compiladores sin este tramo final incompleta la narrativa del «programa listo para usuario».

Cierra el curso implementando en papel regalloc de tu TAC del laboratorio y reflexionando qué aprendiste desde módulo 1 hasta aquí: alfabetos, autómatas, límites Turing, pipeline completo.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** Asigna tres temporales a dos registros con spill explícito.

**Ejercicio 2.** Dibuja stack tras `main` llama `foo(1,2)`.

**Ejercicio 3.** Traduce TAC suma a tres instrucciones assembly del snippet.

**Ejercicio 4.** Caller-saved: ¿quién preserva `%rax` en llamada?

**Ejercicio 5.** Rol del linker resolviendo `printf`.

Cierra curso releyendo checklist módulos 6–15.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Enumera seis registros callee-saved y cuatro caller-saved de SysV x64 sin mirar apuntes, luego corrige con el material del desarrollo. Relaciona cada uno con una llamada a función de tu propio código C o del laboratorio.

Opcionalmente compila un programa C mínimo con `gcc -S` y localiza prologue, cuerpo y `ret` en el listado. Relaciónalo con el pseudo-assembly del snippet y con la pila de activaciones. Cierra el itinerario 6–15 revisando que cada checklist del curso QuimiSell esté marcado.


Además, revisa la autoevaluación del módulo en el panel del curso: cada pregunta encaja con un bloque del desarrollo teórico. Si fallas una pregunta sobre el snippet, vuelve a la sección «Demostración enlazada al código del módulo» y ejecuta el código modificando una línea para observar el efecto. Documenta el experimento en tres frases. Si el módulo conecta con el laboratorio integrado, escribe la prueba mínima que ejecutarías en tu repositorio antes de dar por cerrado el tema. Este hábito reduce tiempo en el cierre del curso y en la entrega del reto Compilador.

Vuelve a leer «Errores clásicos en examen» y convierte cada ítem en una pregunta flashcard con respuesta de dos líneas. Repasa en voz alta el panorama del tema del módulo sin leer el texto: debes poder articular el hilo narrativo en menos de noventa segundos antes de avanzar al siguiente módulo del curso Autómatas y Compiladores.

Cierra trazando en papel la traducción de una única cuádrupla `ADD` del módulo 13 a las tres instrucciones del generador x86 conceptual y etiquetando qué representa cada operando en memoria o registro.

Si tienes dudas, etiqueta en un dibujo de pila el frame de una función con dos parámetros enteros y una variable local.

## Síntesis y checklist antes de avanzar

- Dibujé stack frame con return addr, saved rbp, locals.
- Asigné tres temporales IR a dos registros con un spill manual.
- Leí listing conceptual del módulo y lo mapeé a TAC previo.
- Nombré registros de argumento en SysV x64.
- Cierre del curso: pipeline completo fuente → binario; laboratorio integra fases 10–15.
