## Panorama del tema: ANÁLISIS LÉXICO — LEXER, TOKENS, REGEX Y DFA

El compilador recibe un archivo de texto plano: bytes con codificación UTF-8 o Latin-1, saltos de línea heterogéneos, comentarios que deben desaparecer para el parser, y cadenas donde `+++` podría ser incremento o tres operadores según el lenguaje. El **analizador léxico** (lexer, scanner) convierte ese flujo en **tokens** — unidades discretas con tipo, lexema y posición. Cada patrón de token se especifica con **expresión regular**; el motor compila regex a **NFA/DFA** (módulos 2–4) y escanea la entrada en un solo paso lineal (con longitud del texto).

Sin lexer robusto, el parser recibiría caracteres sueltos y explotaría en complejidad. Esta lección cubre diseño de tokens, prioridad de patrones, generadores Flex/Lex, y manejo de errores léxicos (caracteres ilegales, strings sin cerrar).

## Objetivos de la lección

- Definir token, lexema y posición (línea/columna).
- Especificar patrones léxicos con regex y resolver conflictos de longitud y prioridad.
- Explicar el pipeline regex → NFA → DFA → scanner.
- Implementar mentalmente el lexer del snippet con `re.finditer`.
- Diseñar mensajes de error léxicos útiles para el programador.

## Desarrollo de la lección

### Rol del lexer en el frontend

Entrada: cadena de caracteres + convenciones del lenguaje (¿`--` es decremento o comentario estilo SQL?). Salida: secuencia `(tipo, lexema, línea, col)` consumida por el parser con **lookahead** limitado.

El lexer **no** verifica que `if` tenga paréntesis: solo emite `KW_IF`. La gramática CFG del parser agrupa tokens.

### Estructura del token

Campos mínimos:

- **Tipo**: categoría abstracta (`NUMERO`, `ID`, `PLUS`, `EOF`).
- **Lexema**: substring fuente que disparó el token (`"while"`, `"42"`, `"total"`).
- **Posición**: para diagnósticos (`línea 12, columna 4`).
- Opcional: valor semántico ya parseado (`int(42)`), literal de string ya sin escapes.

Separar tipo de lexema permite que muchos identificadores compartan `ID` mientras la tabla de símbolos distingue nombres.

### Regex, prioridad y maximal munch

Cuando dos patrones coinciden, reglas estándar:

1. **Prioridad explícita**: en Flex, reglas más arriba ganan; categoría `keyword` antes que `identifier`.
2. **Longest match**: el lexer consume la secuencia más larga reconocible (evita que `<=` se tokenice como `<` y `=`).

Palabras clave vs IDs: patrón `if` como keyword separado antes que `[a-zA-Z]+` para IDs.

### Comentarios y espacios

No se emiten al parser. Se reconocen con regex (`//.*`, `/\*[\s\S]*?\*/`, `#.*`) y se descartan, pero el lexer actualiza contador de líneas en `\n` dentro de comentarios multilínea.

### De regex a DFA (repaso aplicado)

Thompson construye NFA por operador; subset construction → DFA; minimización opcional. `re` en Python hace esto internamente en `re.compile`. En producción, lexers críticos (Lex/Flex) precomputan tablas para evitar backtracking catastrófico.

### Errores léxicos

- Carácter ilegal (`@` en subconjunto del lenguaje).
- String sin cerrar.
- Número mal formado (`1.2.3`).
- Estrategia: reportar error, saltar un carácter o hasta sincronizar, continuar para listar más errores.

### Lexer como autómata: tabla de estados manual

Para identificadores `[A-Za-z_][A-Za-z0-9_]*` y números `[0-9]+`, un scanner **sin regex engine** mantiene estado `IN_ID`, `IN_NUM`, `START`. En `START`, si lee letra → ID; dígito → NUM; espacio → ignorar; `+` → emite PLUS. Transiciones totalmente descriptibles como DFA del módulo 2.

Ventaja pedagógica del curso: implementar primero DFA a mano para entender por qué `re` es suficiente en producción.

### Literales, escapes y strings

C y Python permiten `\n`, `\t`, `\xHH` dentro de strings. El lexer acumula caracteres entre comillas, procesa escapes en submáquina, emite token `STRING` con valor ya decodificado. Error clásico: olvidar consumir comilla de cierre — el lexer debe detectar EOF dentro de string y reportar error léxico, no sintáctico.

### Flex: especificación `.l` en alto nivel

Archivo Flex define patrones y acciones `{ return TOKEN_X; }`. Flex genera C optimizado equivalente a DFA minimizado. Regla **más larga primero** en listado de patrones replica prioridad del snippet Python.

### Posición fuente y diagnósticos modernos

IDEs muestran subrayados rojos; el compilador incluye `line:col` en cada token para que errores apunten exactamente. Mantener `lineno` en Flex es automático con directivas; en lexer manual incrementar en `\n` y resetear columna o contar desde inicio de línea.

### Resolución de conflictos `<<=` vs `<` `=`

Maximal munch lee `<<=` como un token si el patrón compuesto está definido **antes** que `<` suelto. Diseño del orden de patrones en `patrones` del snippet debe imitar esta disciplina al extender el laboratorio con desplazamientos y comparaciones compuestas.

## Demostración enlazada al código del módulo

El `lexer(codigo)` define `patrones` ordenados: `NUMERO`, `SUMA`, `MULT`, `ID`, `IGUAL`, `SKIP`.

- Construye `tok_regex` con grupos nombrados `(?P<TIPO>patrón)`.
- `re.finditer` recorre **maximal munch** según orden de alternancia en el regex unido por `|`.
- `SKIP` absorbe espacios sin añadir token.

Para `total = 100 + 50 * 2`: emite IDs, números, operadores; ignora espacios. **Orden de patrones importa**: si `ID` estuviera antes que palabra clave reservada, `while` sería ID.

Clase `Token` guarda tipo y valor; `__repr__` facilita depuración en consola.

## Aplicaciones en sistemas reales

**Flex en GCC**: historial del lexer C junto a Bison; hoy Clang usa lexer hand-written altamente optimizado con tablas.

**Tree-sitter**: lexer incremental para editores; repro tokeniza solo regiones cambiadas en árboles de sintaxis.

**Rust proc-macros**: no reemplazan el lexer principal, pero el frontend `rustc` tokeniza con reglas estrictas de Unicode identifiers.

## Errores clásicos en examen

- Pedir al lexer validar balanceo de paréntesis (tarea del parser).
- Olvidar longest match en `<=` vs `<`.
- No actualizar línea/columna al consumir `\n`.
- Usar regex greedy incorrecto en comentarios anidados (C no permite anidar `/* */`).
- Confundir lexema con token type (`"x"` vs `ID`).

## Preguntas de entrevista

**P: ¿Por qué no tokenizar con split por espacios?**

**R:** Operadores pegados a operandos (`a=5`), strings con espacios, y lexemas compuestos (`++`, `->`) requieren patrones regulares y autómata; split es insuficiente incluso para mini-lenguajes.

**P: ¿Lexer a mano o generado?**

**R:** Hand-written para control y velocidad (Clang, V8); Flex/Lex cuando la gramática léxica es estable y quieres tabla DFA explícita. Ambos son válidos en industria.

## Estudio dirigido: lexer, tokens y regex

Implementa a mano la tokenización de `total = 100 + 50 * 2` produciendo la misma lista que `lexer()` del módulo, pero sin `re`, usando el bucle estado-descrito en la lección. Compara longitud de código y tiempo de desarrollo frente a regex — entenderás por qué Flex existe.

Añade al array `patrones` un token `RESTA` y un token `NUMERO_REAL` con regex `\d+\.\d+`. Observa que debes declarar `NUMERO_REAL` **antes** que `NUMERO` si usas alternación greedy, o el lexer podría leer `3` y `.14` por separado. Escribe en tu informe el orden final que elegiste y por qué.

Practica mensajes de error: inserta carácter `@` en la cadena fuente y diseña mensaje `carácter ilegal '@' en línea 1, columna 9`. El lexer debe llevar contador columna incrementando por caracteres consumidos, reset en `
`.

Estudia el teorema de Kleene como contrato: cada patrón del lexer es regular, el scanner completo es unión de lenguajes regulares disjuntos (idealmente) con prioridad resuelta por orden. Parser posterior es LLC del lenguaje completo; mezclar responsabilidades rompe modularidad.

Conecta con módulo 4: compilar regex a DFA antes de escanear da garantías de tiempo lineal evitando backtracking catastrófico de motores NFA ingenuos en patrones `(.+)+$`.

### Ejercicio: mini especificación léxica de C

Lista tokens mínimos: `INT`, `FLOAT`, `ID`, `NUM_INT`, `NUM_FLOAT`, `PLUS`, `MINUS`, `STAR`, `SLASH`, `EQ`, `SEMI`, `LPAREN`, `RPAREN`, `LBRACE`, `RBRACE`, comentarios `//` y `/* */`, espacios SKIP. No implementes todo; solo prioriza patrones y escribe cinco casos de prueba con salida token esperada.

## Profundización: ingeniería léxica en producción

Los lexers industriales evitan retroceso innecesario con **buffer de sentinela** (un carácter extra al final de archivo que nunca coincide). Mantienen **posición de fuente** para mapas de línea en `#line` tras inclusión de headers.

**Unicode** complica identificadores: Rust y Swift permiten UTF-8 en nombres con reglas XID; el lexer valida categorías Unicode, no solo ASCII `[A-Za-z]`. El token `ID` lleva lexema UTF-8 normalizado.

**Compatibilidad de codificación** (UTF-8 vs Latin-1) se resuelve antes del lexer o con flag; errores de bytes inválidos son léxicos. Compilador Rust aborta temprano con mensaje claro.

**Hashing de palabras clave**: tablas perfectas (gperf) mapean lexemas reservados a enums en O(1) tras calcular hash del literal. Evita comparar cadena contra lista larga de keywords en cada identificador.

**Lexer modes** en Flex (`INITIAL`, `COMMENT`, `STRING`) modelan autómatas con producto de estados al cambiar contexto (dentro de cadena no tokenizar `//` como comentario).

Práctica: tokeniza archivo de cien líneas del laboratorio y cuenta tokens por clase; grafica distribución para estimar presión en parser (muchos `NUM` vs `ID`).

### Seguridad y lexer

Vulnerabilidades de **ReDoS** en regex de lexer mal diseñado pueden bloquear servidor que valida entradas con mismo motor que curso modulo 4. Defensa: diseñar regex linear-time, limitar tamaño de entrada, timeouts en servicios.

Extiende clase `Token` con campos `line`, `col` y modifica `lexer()` para actualizarlos durante `finditer` calculando offset — preparación para mensajes de error módulo 11.


## Práctica integral y cierre de unidad

Implementa contador de línea y columna en una copia local del `lexer()` del módulo: ante cada match, calcula posición sumando longitudes de lexemas y saltos de línea previos en la cadena fuente. Usa tres casos multilínea con comentarios ficticios.

Construye tabla de decisión léxica para caracteres iniciales: si primer carácter es dígito, intenta `NUMERO`; si es letra, `ID`; etc. Explica equivalencia con DFA explícito.

Añade token `MENOS` y verifica que `100 - 50` tokeniza correctamente sin confundirse con flecha `->` si más tarde agregas grammática de tipos.

Discute longitud máxima de lexema id en lenguajes industriales (algunos limitan por legibilidad o tabla hash). ¿Afecta al lexer?

Relaciona token stream con codificación Unicode: mismo lexema visual con distinta normalización NFC/NFD puede romper comparación de keywords si no normalizas.

Practica escribir regex para literales octales y hex de C (`0xFF`, `077`) en orden de prioridad correcta frente a `NUMERO` decimal.

Cierra comparando costo amortizado de escaneo lineal O(n) con tamaño de archivo típico de millones de caracteres: lexer rara vez es cuello de botella vs parser y análisis semántico en C++.

## Monografía breve: el scanner como frontera del lenguaje

El lexer es la primera defensa contra entradas maliciosas o corruptas. Servicios que aceptan expresiones de usuario deben limitar tamaño de entrada y evitar patrones regex patológicos. La frontera léxica también desambigua conflictos entre lenguaje y datos: JSON estrictamente no admite comentarios; JavaScript sí. Dos lexers distintos, mismas herramientas.

Cada token es contrato con el parser: el parser no retrocede caracteres arbitrarios. Por eso emerger `++` como token único o dos veces `PLUS` altera la gramática reconocida. Coordinar decisiones léxicas con especificación del parser evita sorpresas en producción.

Los comentarios y espacios existen para humanos; el parser no los ve. Documentar esto previene que alumnos intenten parsear cadenas crudas sin paso intermedio. Los mapas fuente (`#line 10`) reinyectan correspondencia con archivo original tras includes.

El laboratorio con `re.finditer` es legítimo pedagogicamente; industriales migran a tablas DFA precalculadas por velocidad y predictibilidad. Comprender ambos extremos hace al graduado adaptable.

Practica adicional prolongada: recorre estándar de tu lenguaje favorito y lista veinte categorías léxicas; estima cuántas regex necesitarías y en qué orden deben declararse. Ese inventario demora una hora pero solidifica el módulo.

## Consolidación evaluativa

Antes de cerrar la unidad, redacta sin consultar apuntes un resumen de una página que conecte la teoría del módulo con el fragmento de código del panel del curso y con al menos un sistema real citado en «Aplicaciones en sistemas reales». Luego resuelve tres mini ejercicios inventados por ti (enunciado + solución breve) que un examen podría plantear sobre las definiciones centrales.

Trabaja en voz alta explicando cada ítem del checklist de síntesis como si enseñaras a un compañero. Si alguna respuesta se vuelve circular o vacía, vuelve al bloque «Desarrollo de la lección» y completa con un ejemplo numérico o traza sobre papel.

Si el módulo incluye gramáticas, automatas o TAC, dibuja una instancia concreta (cadena de longitud ≤ 6, tabla CYK parcial, lista de cuádruplas de ≤ 8 líneas). La manipulación manual fija el concepto mejor que repetir definiciones.

Por último, enlaza con el laboratorio integrado del curso: indica qué clase o función del reto QuimiSell corresponde a esta lección y qué prueba mínima ejecutarías para validar que entendiste la idea (por ejemplo, una entrada que debe aceptarse y otra que debe rechazarse).

## Ejercicios modelo con solución comentada

**Ejercicio 1.** Tokeniza `arr[i] = arr[i] + 1` con el lexer del módulo ampliado con corchetes. Solución esperada: secuencia `ID, LBRACK, ID, RBRACK, IGUAL, ID, LBRACK, ID, RBRACK, PLUS, NUMERO` según tokens añadidos; si no implementaste corchetes, discute qué fallaría.

**Ejercicio 2.** Ordena patrones para que `123.45e-6` sea un solo literal flotante. Explica por qué `NUMERO` entero no debe consumir prefijo del flotante.

**Ejercicio 3.** Diseña estrategia de error para cadena `foo @ bar` reportando columna del `@`.

**Ejercicio 4.** Compara complejidad O(n) del escaneo con n=1e6 caracteres y tiempo aproximado si cada carácter es una transición DFA constante.

**Ejercicio 5.** Describe diferencia entre lexema `while` y token `KW_WHILE` en compilador C.

Elabora respuestas en prosa en tu cuaderno; usa el snippet como referencia ejecutable para el caso simple.

## Apéndice de vocabulario operativo

Repasa definiciones en voz alta: no recites el glosario completo, pero articula cada término central como si respondieras en un examen oral de treinta segundos por concepto. Enlaza cada término con un ejemplo mínimo del bloque teórico o del código del panel.

Compara este módulo con el anterior y con el siguiente del itinerario 6–15: anota qué resultado del módulo previo es entrada del actual y qué artefacto produces que el siguiente consumirá. Ese hilo continuo es la historia del compilador que el curso construye.

Relee «Aplicaciones en sistemas reales» y elige la aplicación que menos te quede clara; busca en documentación oficial o en artículos técnicos un párrafo que confirme o refine el ejemplo del apunte. Vuelca tus notas en tu cuaderno (no hace falta entregarlas).

Si aún no alcanzas fluidez, repite la demostración enlazada al código recorriendo el snippet línea por línea con tres entradas distintas (una válida, una inválida, un caso borde). Anota valores intermedios de variables o estructuras en una tabla.

Para preparación de evaluación final, redacta cinco preguntas tipo examen con respuesta de 4–6 líneas cada una, distintas de las de «Errores clásicos» y «Preguntas de entrevista» ya incluidas. Intercámbialas con un compañero si es posible.

Cierra revalidando el checklist de síntesis: si algún ítem no lo dominas, vuelve solo a la subsección correspondiente del desarrollo, sin reiniciar el módulo entero.

## Refuerzo final

Recuerda que el laboratorio QuimiSell asume que el lexer emite tokens consumibles por un parser LL simple: cualquier token adicional que agregues (corchetes, punto y coma) debe documentarse en la gramática del parser del módulo 11. Mantén coherencia de nombres (`NUMERO` vs `NUM`) entre módulos. Si implementas posiciones, el semántico y el parser pueden reportar errores en la misma línea que el lexer usó, lo que mejora la experiencia del mini compilador. Extiende el conjunto de pruebas con literales negativos, operadores compuestos y archivos multilínea antes de considerar cerrado el módulo léxico.


## Síntesis y checklist antes de avanzar

- Definí tokens para una mini-expresión a mano.
- Expliqué el papel de `SKIP` en el snippet.
- Describí conflicto keyword vs ID y su solución.
- Relacioné regex del módulo con DFA de teoría.
- Listo para parser (módulo 11).
