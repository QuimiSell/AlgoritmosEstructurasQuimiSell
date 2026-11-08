## Panorama del tema: MÁQUINAS DE TURING, CHURCH-TURING, HALTING PROBLEM Y JERARQUÍA DE CHOMSKY

Hasta aquí, autómatas finitos y de pila delimitan lo que un programa con memoria acotada o con una pila puede reconocer. La **máquina de Turing** (TM) es el modelo que captura la noción intuitiva de **algoritmo**: una cabeza lee y escribe símbolos en una cinta ilimitada, cambia de estado según una tabla finita de reglas, y puede moverse a izquierda o derecha sin límite a priori de pasos (salvo que entre en bucle infinito). La **tesis de Church-Turing** afirma que cualquier función calculable por cualquier computador digital es calculable por alguna TM. Desde ese marco, **no todo problema admite algoritmo**: el **problema de la parada** (Halting Problem) es el ejemplo arquetípico de **indecidibilidad**.

La **jerarquía de Chomsky** ordena los tipos 0–3 de gramáticas y automátas correspondientes, unificando el curso: regex/DFA (3), CFG/PDA (2), sensibles al contexto (1), recursivamente enumerables / Turing (0).

## Objetivos de la lección

- Definir una máquina de Turing: cinta, cabezal, estados, alfabeto y función de transición.
- Explicar la tesis de Church-Turing y su alcance (hipótesis, no teorema formal).
- Enunciar el problema de la parada y esbozar la diagonalización de Turing.
- Clasificar lenguajes en los cuatro tipos de la jerarquía de Chomsky con ejemplos.
- Diferenciar decidible, semidecidible y no semidecidible.

## Desarrollo de la lección

### Modelo de la máquina de Turing

Formalmente \(M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)\):

- \(Q\): estados finitos.
- \(\Sigma\): alfabeto de **entrada** (símbolos que componen la cadena inicial sobre la cinta).
- \(\Gamma\): alfabeto de **cinta** (\(\Sigma \subseteq \Gamma\)); incluye blancos \(B\).
- \(\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}\): en estado \(q\) leyendo \(s\) en la celda bajo el cabezal, pasa a \(q'\), escribe \(s'\) y mueve el cabezal left o right.
- \(q_0\): estado inicial.
- \(B \in \Gamma \setminus \Sigma\): símbolo blanco.
- \(F \subseteq Q\): estados de aceptación (halting accept).

Una **computación** es la secuencia de configuraciones \((\text{cinta}, \text{posición cabezal}, \text{estado})\). La máquina **acepta** si entra en \(F\); **rechaza** si entra en estado de rechazo explícito o **no detiene** (bucle infinito) — según convención del problema.

Variantes (multi-cinta, no determinista) son **equivalentes** en poder computacional a la TM estándar.

### Ejemplo: incrementar binario (como el snippet)

La TM del módulo simula incrementar un número en binario desde el **bit menos significativo** (final de la cadena):

- Empieza en `head = len(cinta)-1`.
- Mientras hay acarreo: si el dígito es `0`, pone `1` y termina acarreo; si es `1`, pone `0` y sigue hacia la izquierda.
- Si el acarreo sobrevive al MSB, inserta `1` al inicio (`1011` \(\rightarrow\) `1100`).

Esto modela el patrón «leer–modificar–mover izquierda» de una TM real, aunque el código Python use lista mutable en lugar de cinta infinita con blancos a derecha.

### Jerarquía de Chomsky

| Tipo | Gramática | Autómata | Ejemplo de lenguaje |
|------|-----------|----------|---------------------|
| 3 | Regulares (derecha/izquierda) | DFA/NFA | identificadores simples, regex |
| 2 | Libre de contexto | PDA | expresiones, paréntesis |
| 1 | Sensible al contexto | LBA (linear bounded automaton) | \(a^n b^n c^n\) |
| 0 | Sin restricción (RE) | Turing | todo lo semi-decidible |

Inclusiones estrictas: Tipo 3 \(\subset\) 2 \(\subset\) 1 \(\subset\) 0.

El lenguaje \(L = \{a^n b^n c^n \mid n \ge 0\}\) **no** es LLC (se demuestra con lema del bombeo para LLC o intuición de dos pilas vs una), pero **sí** es sensible al contexto. El lenguaje universal o problemas de aceptación de TM son tipo 0.

### Tesis de Church-Turing

No es un teorema matemático demostrable desde unos axiomas cerrados: es la **hipótesis** de que toda función «efectivamente calculable» (intuitiva: algoritmo finito, paso a paso, sin oráculos) coincide con las funciones computables por TM.

Consecuencias prácticas:

- No esperes un compilador que **siempre** detecte si un programa termina.
- Modelos alternativos (lambda calculus, RAM, lenguajes imperiales con memoria ilimitada idealizada) son equivalentes en poder a TM.

### Problema de la parada (Halting Problem)

**Enunciado**: ¿Existe un algoritmo \(H(P, x)\) que, dada descripción de programa \(P\) y entrada \(x\), responda **siempre** en tiempo finito «\(P\) termina en \(x\)» o «\(P\) no termina»?

**Respuesta de Turing**: **No**. El lenguaje
\(L_{HALT} = \{\langle M, w \rangle \mid M \text{ es TM que acepta } w\}\)
(o la variante «\(M\) se detiene en \(w\)») es **recursivamente enumerable** pero **no decidible**.

**Esbozo de diagonalización (idea)**:

1. Supón decididor hipotético `Halts(M,w)`.
2. Construye TM `D` que, sobre entrada \(\langle M \rangle\), hace lo contrario de lo que diría `Halts(M, ⟨M⟩)` (si dice que para, buclea; si dice que buclea, para).
3. Pregunta qué hace `Halts(D, ⟨D⟩)`: contradicción.

Por tanto, **no puede existir** detector universal de bucles infinitos para programas arbitrarios. Herramientas de análisis estático encuentran **algunos** bucles, no todos.

### Decidible vs semidecidible

- **Decidible (recursive)**: existe TM que **siempre** detiene y responde sí/no.
- **Semidecidible (RE)**: existe TM que acepta las instancias «sí» y puede buclear en «no».
- **Co-RE** pero no decidible: complemento del halting; no hay TM que liste todos los que **no** paran.

En compiladores, la mayoría de chequeos (sintaxis, tipos en lenguajes comunes) son decidibles en el fragmento que analizan; la **optimización agresiva** o análisis de propiedades de programas Turing-completos choca con límites indecidibles.

### Máquina universal y programas que se interpretan a sí mismos

La TM **universal** \(U\) simula cualquier otra TM codificada en la cinta. El halting se formula como: ¿\(U\) acepta \(\langle M,w\rangle\) si y solo si \(M\) se detiene en \(w\)? La diagonal construye \(D\) que contradice al decisor hipotético. Estudiar este patrón una vez permite reconocerlo en **bugs de verificación** que prometen resolver problemas equivalentes al halting encubiertos.

### Lenguajes sensibles al contexto vs LLC

\(L = \{a^n b^n c^n\}\) requiere comparar **tres** contadores simultáneos. Un solo stack no puede: al leer \(a^n b^n\) la pila quedó vacía y no queda memoria para emparejar \(c^n\). Los **linear bounded automata** (LBA) reconocen tipo 1. Los compiladores casi nunca implementan LBA completos; las reglas «sensibles» aparecen en macro-procesadores o verificadores especializados.

### Enumerabilidad y problemas semi-decidibles

Un lenguaje **recursivamente enumerable** (tipo 0 generado por restricción débil) coincide con lenguajes aceptados por TM que pueden no detener en cadenas fuera del lenguaje. **Decidable** exige TM total que siempre para. El lenguaje del halting es RE pero no co-RE; su complemento tampoco es RE — asimetría profunda en jerarquía.

### Impacto en diseño de lenguajes

Lenguajes con **macros Turing-completos** en tiempo de compilación (C++ templates históricamente) pueden hacer compilación no terminar — rareza práctica pero relacionada conceptualmente. Políticas modernas limitan profundidad de instanciación y tamaño de expansión.

### TM multipista y eficiencia

Agregar cintas constantes no cambia decidibilidad pero reduce tiempo polinomial de simulación; afecta teoría de complejidad (clase P vs NP) distinta de este módulo pero comparte intuición «más memoria estructurada = más expresividad eficiente».

## Demostración enlazada al código del módulo

`MaquinaTuringIncremento` almacena `cinta` como lista de caracteres y `head` en el último índice.

- El bucle `while self.head >= 0 and acarreos` simula barrido hacia la izquierda procesando acarreo.
- `'0'` \(\rightarrow\) `'1'`: fin de acarreo local.
- `'1'` \(\rightarrow\) `'0'`: continúa acarreo, `head -= 1`.
- Si tras el bucle `acarreos` sigue verdadero, overflow de ancho: `insert(0, '1')`.

Entrada `1011` (11 decimal): LSB es último `1` \(\rightarrow\) `0`, acarreo, siguiente `1` \(\rightarrow\) `0`, acarreo, `0` \(\rightarrow\) `1`, stop; resultado `1100` (12). La TM **siempre termina** en esta función acotada: es un **subproblema decidible**, no el halting general.

## Aplicaciones en sistemas reales

**Verificación formal (TLA+, Coq)**: se demuestran propiedades de protocolos o kernels restringidos; fuera de fragmentos decidibles, el usuario prueba teoremas manualmente — reconocimiento del límite de Turing.

**Timeouts en servidores (Kubernetes, AWS Lambda)**: no pueden saber si un contenedor colgará; imponen límites de CPU/tiempo — respuesta de ingeniería al halting indecidable.

**Firmas de virus / análisis heurístico**: antivirus no resuelven halting; combinan firmas (regulares/autómatas) con heurística de comportamiento acotado.

## Errores clásicos en examen

- Confundir «indecidible» con «muy difícil» o «NP-completo» — son clases distintas.
- Creer que la tesis de Church-Turing es teorema demostrado con ZFC estándar.
- Ordenar mal la jerarquía (p. ej. pensar que LLC contiene regulares es correcto, pero invertir 1 y 2).
- Afirmar que toda TM puede convertirse en DFA si se «desenrolla» la cinta: la cinta es infinita.
- Usar halting para decir que **ningún** compilador puede detectar **nunca** errores de sintaxis (síntaxis es decidible).

## Preguntas de entrevista

**P: ¿Qué es el Halting Problem y por qué importa a un ingeniero?**

**R:** Pregunta si existe algoritmo universal que prediga terminación de cualquier programa. Turing demostró que no. Importa porque herramientas que prometen «encontrar todos los deadlocks/bucles» en código Turing-completo son imposibles en general; hay que acotar el dominio o usar aproximaciones.

**P: Ubica los lenguajes regulares y LLC en Chomsky.**

**R:** Regulares = tipo 3 (DFA). LLC = tipo 2 (PDA). Todos los regulares son LLC; existen LLC no regulares (\(a^n b^n\)). Tipo 0 incluye problemas de aceptación de TM; tipo 1 intermedios como \(a^n b^n c^n\).


### Configuraciones y diagrama espacio-tiempo

Registrar una configuración TM como \((q, lpha, i)\) donde \(lpha\) es contenido de cinta con cabezal en posición \(i\) permite razonar sobre **histórias** de cómputo. Dos máquinas con distinto número de estados pueden simular la misma función; lo importante es el conjunto de **funciones parciales computables** y los **lenguajes decidibles**.

La **codificación** \(\langle M, w 
angle\) como cadena finita permite tratar programas como entrada de otros programas: base de intérpretes universales y del argumento del halting.

### Reducciones y problemas complementarios

Muchos problemas indecidibles se prueban por **reducción** desde HALT: si pudieras decidir \(A\), decidirías HALT. Ejemplos clásicos en cursos: equivalencia de dos TMs, totality (¿\(M\) se detiene en **toda** entrada?). En compilación, problemas como «¿este programa accede siempre dentro de límites de array sin ejecutarlo?» son indecidibles en general (relacionados con Rice: propiedades no triviales del comportamiento son indecidibles).

### Variantes computacionalmente equivalentes

Máquinas con múltiples cintas, máquinas no deterministas, y registros ilimitados (RAM idealizado) no superan el poder de una sola cinta TM (con posible pérdida de eficiencia polinomial irrelevante para decidibilidad). Esto justifica usar el modelo que convenga en demostraciones.

### Rice y límites de análisis estático

El **teorema de Rice**: cualquier propiedad **no trivial** del lenguaje reconocido por una TM es indecidible. Consecuencia didáctica: no habrá analizador que detecte **todos** los programas que «hacen exactamente X» para comportamientos semánticos ricos; las herramientas acotan el lenguaje (tipos, anotaciones, subconjuntos sin goto).

### Comparación operativa DFA–PDA–TM

| Modelo | Memoria | ¿Decide LLC? | ¿Decide HALT? |
|--------|---------|--------------|---------------|
| DFA | estado fijo | solo regulares | no |
| PDA | pila | sí (LLC) | no |
| TM | cinta | sí (RE) | no (pero semidecide HALT) |

La fila HALT aclara: existe TM que enumera pares que paran, pero no una que clasifique siempre sí/no.

## Guía de repaso extendida

Dibuja la jerarquía de Chomsky con ejemplos propios (no copiados del pdf): un lenguaje regular que uses en programación (números enteros sin signo), un LLC (XML bien formado simplificado), un contraejemplo que **no** es LLC (\(a^n b^n c^n\)), y un problema sobre código (halting). Escribe junto al diagrama el reconocedor correspondiente: DFA, PDA, LBA, TM.

Reproduce el argumento del halting en tus palabras sin memorizar símbolos: «Si existiera un detector universal, construyo un programa que hace lo contrario sobre su propia descripción y llego a contradicción». Esa narrativa de treinta segundos responde entrevistas cuando no hay pizarra.

Ejecuta el incremento binario del snippet con entradas `1111`, `1000` y predice el resultado antes de correr Python. Relaciona acarreo con el movimiento del cabezal hacia la izquierda en la TM.

## Estudio dirigido: Turing, límites y jerarquía

Construye una TM de tres estados que **sí** termina sobre toda entrada binaria fija (como el incrementador del módulo) y contrasta con un programa Python `while True: pass` que ningún passs de compilador C puede probar equivalente a parada. El primero es subclase trivial decidable; el segundo ilustra limitación solo cuando el espacio de programas es universal.

Memoriza la cadena de inclusiones \(L_3 \subset L_2 \subset L_1 \subset L_0\) con un ejemplo **distinto** en cada nivel elegido por ti. En examen escriben ejemplos del libro; el corrector valora variedad. Explica por qué todo regular es LLC: toda regex se traduce a CFG casi identica a su automata.

Investiga (sin internet en examen, con notas) qué es un problema **co-RE** y por qué el complemento del halting no es RE. Narrativa corta: si fuera RE, tendríamos enumeración de programas que **no** paran, mezclando con decididor del halting contradice — esquema similar al original.

La TM del snippet no usa cinta infinita a la derecha con blancos; lista Python crece con `insert`. Discute si eso invalida la analogía (no, para cadenas finitas da la misma semántica). Extensión: añadir movimiento a derecha tras procesar MSB para borrar hacia el infinito — ejercicio opcional.

Relaciona jerarquía Chomsky con tu pipeline de compilador: lexer ≈ tipo 3, parser ≈ tipo 2, chequeos semánticos ricos se salen de CFG pura hacia analisis ad-hoc, optimización sobre IR puede simular análisis no trivial; el programa fuente completo en lenguaje Turing-completo abraza tipo 0 en potencia expresiva.

## Profundización: diagonal, Rice y computación moderna

El esquema diagonal de Cantor traslada a computación: la lista de todas las TM enumerables permite construir una que difiere de la n-ésima en la n-ésima entrada. Church y Turing convergen en que la función computable no puede autodecir parada global.

El **teorema de Rice** generaliza: ninguna propiedad no trivial del comportamiento semántico de un programa (visto como lenguaje que acepta) es decidible uniformemente. Los linters que garantizan «este programa nunca accede a null» en JavaScript completo se acercan a territorio imposible; herramientas reales acotan el sublenguaje analizado.

**Hypercomputación** (oráculos, máquinas con cinta infinita en pasos infinitos) queda fuera del undergraduate estándar pero explica por qué algunas generalizaciones del halting se discuten en foros: en el modelo estándar, la respuesta del módulo es definitiva: no hay algoritmo.

Conecta TM con **máquina de registro**: contadores ilimitados + saltos condicionales son Turing-completos. Los lenguajes de alto nivel desembocan ahí tras compilación — la jerarquía de Chomsky describe lenguajes, no el poder del programa C compilado que es tipo 0 en expresividad.

Ejercicio de cierre: demuestra que el conjunto de CFG no ambiguas no es decidible (esperado en curso avanzado); en intro basta recordar que ambigüedad gramatical es problema delicado distinto a pertenencia LLC.


## Práctica integral y cierre de unidad

Redacta una página comparando tres modelos de computación vistos en el curso: DFA (memoria en estado), PDA (pila), TM (cinta). Para cada uno escribe un lenguaje testigo y un anti-testigo fuera del modelo. Cierra con frase que relacione Jerarquía de Chomsky con esas tres máquinas.

Reescribe la demostración del Halting Problem identificando explícitamente dónde se usa autopresentación (programa que consume descripción de sí mismo). Sin formalismo pesado, debe ser comprensible por un compañero que no asistió a clase.

Ejecuta el incremento binario del snippet con entradas de longitud 1, 4 y 8 bits; anota patrones de número de pasos del bucle while interno. ¿Es lineal en longitud de cinta? Argumenta.

## Síntesis y checklist antes de avanzar

- Dibujé una transición TM (estado, leer, escribir, mover).
- Recorrí el incremento binario del snippet y relacioné con acarreo.
- Repasé jerarquía 3-2-1-0 con un ejemplo por nivel.
- Expliqué halting en tres frases con diagonalización.
- Estoy listo para el bloque compiladores (módulo 9): arquitectura frontend/middle/backend.
