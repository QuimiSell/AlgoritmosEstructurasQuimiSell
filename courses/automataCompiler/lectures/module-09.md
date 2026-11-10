## Panorama del tema: ARQUITECTURA DE COMPILADORES — FRONTEND, MIDDLE-END Y BACKEND

Un compilador industrial no es un programa monolítico que «traduce texto a binario» en un solo paso. Es un **pipeline de fases** con interfaces bien definidas: cada etapa consume una representación y produce otra más cercana a la máquina. La división clásica en **frontend**, **middle-end** y **backend** permite equipos especializados, reutilización (un frontend C para varias CPUs) y pruebas por capas. El frontend responde «¿el programa es válido y qué estructura tiene?»; el middle-end «¿cómo lo transformamos para ir más rápido sin cambiar significado?»; el backend «¿cómo lo mapeamos a registros e instrucciones reales de este procesador?».

Esta lección sitúa cada fase del laboratorio QuimiSell (lexer, parser, semántica, TAC, optimización, ensamblador conceptual) dentro del mapa global, y distingue compilador, intérprete y transpilador — categorías que aparecen en entrevistas y en el diseño de lenguajes como TypeScript, Kotlin/JVM o Rust/LLVM.

## Objetivos de la lección

- Diferenciar compilador, intérprete, transpilador y máquina virtual.
- Enumerar fases del frontend (léxico, sintáctico, semántico) y su salida (AST, tabla de símbolos).
- Explicar el rol del middle-end (IR, optimización target-independent).
- Describir tareas del backend (instrucción, registros, calling conventions).
- Relacionar el pipeline con LLVM, GCC y el snippet demo del módulo.

## Desarrollo de la lección

### Compilador, intérprete y transpilador

Un **compilador** traduce un programa fuente completo (o módulo) a una forma ejecutable **antes** de la ejecución: ensamblador, objeto, o bytecode para VM. Ejemplos: `gcc`, `rustc`, `javac` (bytecode).

Un **intérprete** analiza y ejecuta **al mismo tiempo**, típicamente sin generar binario persistente: REPL de Python (modo interpretado), `node` para JS (aunque modernamente JIT). Ventaja: ciclo editar-ejecutar rápido. Desventaja: menos optimización global sin JIT.

Un **transpilador** (source-to-source) transforma entre lenguajes de nivel similar: TypeScript → JavaScript, CoffeeScript → JS, SCSS → CSS. La salida sigue siendo texto o AST en otro lenguaje alto nivel; otro compilador o runtime termina la ejecución.

Híbridos: Java y C# compilan a bytecode e **interpretan** en VM con JIT; Go compila directo a máquina; Python compila a `.pyc` (bytecode) e interpreta en la VM CPython.

### Frontend: análisis

El **frontend** trabaja sobre texto fuente (o sobre árbol pre-parseado en herramientas LSP). Fases principales:

1. **Análisis léxico**: caracteres → tokens (módulo 10).
2. **Análisis sintáctico**: tokens → AST o árbol concreto (módulo 11).
3. **Análisis semántico**: AST + tabla de símbolos → AST tipado, errores de scope/tipos (módulo 12).

Salidas compartidas hacia el resto del pipeline:

- **AST** (posiblemente decorado con tipos).
- **Tabla de símbolos** (identificadores, funciones, tipos).
- **Diagnósticos** (errores y warnings con ubicación fuente).

Muchos compiladores también generan ya una **IR inicial** desde el AST (visitor que emite tres direcciones o LLVM IR builder).

### Middle-end: IR y optimización

El **middle-end** opera sobre **representación intermedia** (IR) independiente del procesador: LLVM IR, GCC GIMPLE, Sea of Nodes en Graal, etc.

Tareas típicas:

- Canonicalizar control de flujo (CFG).
- **Optimización**: constant folding, DCE, inline, loop opts (módulo 14).
- Análisis de datos (def-use, reaching definitions) para habilitar transformaciones seguras.

La propiedad clave: mismas optimizaciones sirven para x86, ARM y RISC-V porque el IR abstrae registros infinitos y tipos de memoria de forma uniforme.

### Backend: código máquina

El **backend** mapea IR optimizado a **código objeto**:

- **Selección de instrucciones** (pattern matching sobre DAGs).
- **Asignación de registros** (grafo de conflictos, linear scan).
- **Scheduling** (reordenar para pipelines).
- **Emisión** de ensamblador o binario.
- **Convenciones de llamada** (quién guarda registros, pila, frame pointer).

Cada arquitectura tiene un backend; LLVM permite registrar nuevos targets.

### Flujo de datos y errores

El compilador debe **recuperarse** de errores en frontend para reportar múltiples fallos (no panic al primer `;` faltante). Estrategias: tokens de sincronización en parser, análisis semántico best-effort, flags `had_errors` que bloquean codegen.

La **tabla de símbolos** puede construirse incrementalmente durante parse o en pass semántico dedicado; en lenguajes con inferencia (Rust, Haskell) el middle-end participa en resolución de tipos.

### Caso de estudio: Clang + LLVM

1. Clang frontend: C++ → AST + diagnósticos.
2. Clang codegen: AST → LLVM IR.
3. LLVM opt: passes sobre IR.
4. llc: LLVM IR → `.s` para la CPU elegida.

Un solo frontend alimenta múltiples backends LLVM — ejemplo canónico de la separación modular.

### Diagrama del pipeline (descripción textual)

Imagine una cinta transportadora de representaciones: **texto UTF-8** entra al lexer → **stream de tokens** → parser produce **AST** → semántica decora el árbol y llena **tabla de símbolos** → generador emite **LLVM IR en SSA** → pipeline `opt -O2` muta IR → `llc` emite **object file** → **ld** fusiona con `libc` y produce **ELF ejecutable**. Cada caja es sustituible: mismo IR optimizado puede acabar en WASM con otro backend.

### Responsabilidades de cada capa en errores

| Fase | Error típico | Quién lo detecta |
|------|----------------|------------------|
| Léxica | `@` ilegal | Lexer |
| Sintaxis | `if` sin `(` | Parser |
| Semántica | tipos incompatibles | Analyzer |
| IR/Opt | (raro) violación interna | Pass invariant |
| Backend | no encaja instrucción | Instruction selector |

Separar responsabilidades acelera depuración del propio compilador en desarrollo.

### JIT vs AOT dentro de la misma arquitectura

**Ahead-of-time** (gcc, rustc default) ejecuta casi todo el pipeline antes de correr el programa. **JIT** (Java HotSpot, V8) parsea/ compila fragmentos en runtime, a veces dejando interpretador para código frío. La **misma arquitectura conceptual** aplica; cambia cuándo y cuántas veces se repite cada fase.

### Reto del laboratorio en el mapa del compilador

El laboratorio QuimiSell implementa las cajas del centro-delantera del diagrama: lexer y parser propios, evaluador o TAC. No exige backend real, pero el estudiante debe **nombrar** qué fases faltarían para binario nativo. Eso demuestra comprensión arquitectónica más allá de código que corre en Python.

### Multi-archivado y módulos

Proyectos reales compilan muchas unidades `.c` a objetos separados; el frontend corre **por archivo**; el linker une símbolos globales (`extern`). La tabla de símbolos puede persistir en formato interno (obj files) como secciones `.symtab` — detalle que explica por qué `static` limita visibilidad a un objeto.

## Demostración enlazada al código del módulo

`compilador_pipeline_demo("x = 10 + 5")` imprime cinco etapas **simuladas**:

1. **Input**: cadena fuente literal.
2. **Lexer**: lista fija `["ID(x)", "ASSIGN", "NUM(10)", "PLUS", "NUM(5)"]` — no tokeniza de verdad, ilustra **forma** de salida.
3. **Parser**: string AST `AssignStmt(target='x', value=Add(10, 5))` — asignación con suma en RHS.
4. **Middle-end TAC**: `t0 = 10 + 5`, `x = t0` — temporal intermedio antes de asignar a variable.
5. **Backend asm**: `MOV EAX, 15` y `MOV [x], EAX` — simplificación didáctica (15 calculado en «ensamblador» en lugar de sumar en CPU).

El valor pedagógico es ver **contratos entre fases**: cada `print` es la entrada esperada de la siguiente. Al implementar el laboratorio, sustituirás listas fijas por clases `Lexer`, `Parser`, `IRGenerator` reales.

## Aplicaciones en sistemas reales

**Swift + LLVM**: el frontend de Apple genera Swift LLVM IR; optimización y codegen compartidos con Clang para Apple Silicon y x86.

**Babel (transpiler)**: parsea JavaScript/TypeScript, transforma AST (plugins), imprime JS compatible con motores viejos — frontend + middle sin backend de CPU.

**WebAssembly**: backend común para C/C++/Rust que emite `.wasm`; el «runtime» del navegador es la máquina objetivo virtual.

## Errores clásicos en examen

- Colocar optimización de loops en el lexer.
- Decir que el parser genera ensamblador directamente (omite IR y backend).
- Confundir transpilador con compilador a máquina nativa.
- Afirmar que el intérprete «no compila nunca» (ignorar JIT/bytecode).
- Olvidar que la tabla de símbolos cruza frontend y semantic analyzer.

## Preguntas de entrevista

**P: ¿Por qué separar middle-end y backend?**

**R:** Para compartir optimizaciones y análisis en todos los targets y reducir el costo de soportar N arquitecturas: un IR y M backends, en lugar de N×M traducciones fuente→assembly.

**P: ¿Dónde encaja el linker?**

**R:** Después del backend: el compilador produce `.o` relocables; el **linker** resuelve símbolos externos, fusiona secciones y produce ejecutable. Es fase posterior al compilador propiamente dicho.

## Estudio dirigido: arquitectura y contratos entre fases

Redibuja el pipeline del snippet `compilador_pipeline_demo` sustituyendo los valores hardcodeados por flechas etiquetadas «tipo de dato» entre fases: string → list[TokenRepr] → AST string → list[TAC] → list[Asm]. Especifica qué invariantes debe cumplir cada salida (por ejemplo, todo AST de asignación tiene hijo izquierdo identificador).

Compara tiempo de compilación vs tiempo de ejecución en JIT: Arquitectura sigue siendo fases, pero algunas corren en caliente repetidas veces. Transpilador TypeScript produce text JS; el «backend» es el motor V8 que compila JS — pipeline anidado de dos herramientas.

Documenta tres errores reales de estudiantes al narrar fases: colocar type checking en lexer, optimizar antes de generar IR, generar asm sin tabla de símbolos. Corrige cada uno indicando la fase correcta.

Para el laboratorio, define una interfaz mínima entre clases: `Lexer.tokenize(src) -> list[Token]`, `Parser.parse(tokens) -> AST`, `GenTAC.visit(ast) -> list[str]`. Esta interfaz **es** la arquitectura en microcosmo; escríbela antes de codificar.

Estudia el papel del linker leyendo la salida de `gcc -c` y `ld` (si tienes entorno Unix): objetos separados, símbolo `main` resuelto en enlace. Conecta con módulo 15.

### Tabla de comparación compilador / intérprete / VM

| Aspecto | Compilador AOT | Intérprete puro | VM + JIT |
|---------|----------------|-----------------|----------|
| Cuándo analiza | pre-ejecución | en ejecución | híbrido |
| Artefacto | binario/obj | ninguno | bytecode |
| Ejemplo | gcc, rustc | Lambda básica | JVM, CPython+JIT |

Completa la tabla con una fila «optimización global» y anota ventajas/desventajas desde la arquitectura, no desde marketing de lenguajes.

## Profundización: fases, artefactos y herramientas reales

Cada fase del compilador consume y produce **artefactos** en disco o memoria: tokens en buffer circular, AST como grafo de nodos, IR serializado en bitcode LLVM, objeto ELF con secciones `.text`, `.data`, metadatos DWARF para debug. Conocer artefactos ayuda a depurar cadenas de builds rotas.

El **preprocesador** C (`cpp`) es fase previa al lexer clásico: expande macros e incluye archivos. Hoy enClang el preprocesador integra en el frontend pero conceptualmente sigue siendo transformación texto→texto.

**Análisis semántico** en C++ incluye plantillas, módulos C++20 y verificación de ODR (One Definition Rule). La arquitectura sigue siendo pipeline, pero el «frontend» puede ocupar la mayor parte del tiempo de compilación en proyectos enormes.

**Middle-end LLVM** ejecuta passes registrados (`instcombine`, `inline`, `loop-rotate`). Orden por defecto `-O2` está tunado por años; cambiar orden puede romper correctitud si un pass asume invariantes que otro debe establecer antes.

**Backend** selecciona scheduling y latencias de instrucciones del microarquitectura (out-of-order, SIMD). Mismo LLVM IR puede generar código distinto con `-march=skylake` vs `-march=znver3`.

En **interpretación pura**, fases de parser y parte semántica se fusionan con evaluación (REPL). Arquitectónicamente sigue existiendo lectura de caracteres y construcción de estructura; la «generación» es dispatch de operaciones sobre entorno runtime.

Documenta para tu portafolio QuimiSell qué porcentaje del pipeline industrial cubre tu laboratorio (~40% front + mitad del middle si incluyes TAC y folding básico). Identifica gaps explícitos (linker, regalloc) como trabajo futuro.

### Preguntas reflexivas

¿Un formateador como `clang-format` en qué fase encajaría? (Re-lexer + reconstrucción texto, casi frontend sin semántica completa). ¿Un linter de estilo? (Semántica parcial + reglas externas). Clasificar herramientas afina intuición arquitectónica allá del compilador clásico.


## Práctica integral y cierre de unidad

Escribe especificación de interfaz entre tus módulos del laboratorio como contrato: precondiciones y postcondiciones de `Lexer.tokenize`, `Parser.parse` y generador TAC. Indica tipos esperados de retorno y cómo propaga errores sin abortar todo el pipeline en el primer fallo.

Investiga en tus apuntes el rol del **preprocesador**, **ensamblador** y **linker** como fases colindantes al compilador clásico. Una tabla de cinco filas (fase, entrada, salida) completa el panorama más allá del snippet demo.

Diseña un diagrama de secuencia (texto ascii: A→B→C) para compilar archivo `main.c` con dos `#include` y enlazar con `libc`. Menciona dónde se fusionan tablas de símbolos.

Compara tiempo de compilación incremental (solo un archivo cambia) vs clean build: arquitectura modular permite re-lexer solo unidad afectada; linker siempre repite trabajo de resolución global.

Reflexiona: ¿el intérprete de Python que usas para el laboratorio sigue fases similares aunque no emita binario? Describe lexer/parser internos de CPython a alto nivel.

Finalmente, enumera responsabilidades que **no** cubre tu repositorio del reto QuimiSell y prioriza cuál añadirías en versión dos (sugerencia habitual: mensajes de error con línea/columna en lexer y parser).

## Monografía breve: del texto fuente al proceso en ejecución

Cuando escribes un programa en C o en el mini lenguaje del laboratorio, el compilador no «entiende» el problema de negocio: solo valida que la secuencia de caracteres pertenezca al lenguaje y que las reglas semánticas del diseño del lenguaje se cumplan. El frontend acumula evidencia de corrección en el AST anotado; el middle-end reexpresa la lógica en forma que privilegia transformaciones automáticas; el backend materializa decisiones de arquitectura en patrones de instrucciones repetibles.

La modularidad importa en equipos grandes: un grupo mantiene el parser C++ de Clang, otro los passes LLVM, otro el backend ARM. Los contratos entre fases son tipos de datos internos estables. Si el AST cambia de representación, todos los consumidores downstream se actualizan en la misma revisión. En tu proyecto individual el contrato es simplemente la lista de tokens o la clase `ASTNode`, pero la disciplina es la misma.

Los errores deben fluir hacia el usuario con contexto. Un pipeline bien diseñado acumula diagnósticos en vez de abortar en silencio. El lexer aporta posición; el parser esperaba `)`; el semántico encontró tipos incompatibles en la línea exacta del operador. La arquitectura de múltiples fases facilita atribuir culpa correcta.

Considera transpilación cruzada: TypeScript compila a JavaScript que luego interpreta V8. Son dos pipelines encadenados con artefactos texto. Rust compila a LLVM IR y reutiliza backend compartido con C. La lección de arquitectura es reutilización de middle y back.

Finalmente, el ejecutable no es salida del compilador solo: linker y loader completan la historia. Un curso de compiladores sin mencionar enlace dejaría hueco en la mente del estudiante respecto a cómo `printf` aparece resuelto en el binario. Este módulo puentea teoría y sistema operativo.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Síntesis y checklist antes de avanzar

- Dibujé el pipeline fuente → tokens → AST → IR → asm.
- Ejecuté el snippet y expliqué cada línea de salida.
- Diferencié compilador, intérprete y transpilador con un ejemplo cada uno.
- Ubiqué el laboratorio del curso en frontend + middle inicial.
- Listo para módulo 10: implementación concreta del lexer.
