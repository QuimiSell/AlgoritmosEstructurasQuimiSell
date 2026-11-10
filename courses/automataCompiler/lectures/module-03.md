## Panorama del tema: AUTÓMATAS FINITOS NO DETERMINISTAS (NFA & NFA-ε), CONSTRUCCIÓN DE SUBCONJUNTOS

Un **NFA** relaja el determinismo: \(\delta(q, a)\) puede ser un **conjunto** de estados siguientes, incluido el vacío. Puede existir **más de una ejecución** posible sobre la misma cadena; la cadena se **acepta** si **alguna** ruta llega a un estado final.

Los **NFA-ε** añaden **transiciones espontáneas** que cambian de estado sin consumir un símbolo de entrada. Sorprendentemente, ni el no determinismo ni las ε-transiciones aumentan la clase de lenguajes: sigue siendo la familia **regular**, equivalente a DFA (teorema de equivalencia).

La **construcción de subconjuntos** (subset construction) convierte un NFA en un DFA simulando, en cada paso, el **conjunto** de estados NFA activos. Es el algoritmo que usan los motores regex internamente tras la construcción de Thompson (módulo 4).

## Objetivos de la lección

- Definir NFA con \(\delta : Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)\) (variantes equivalentes).
- Calcular **clausura-ε** y usarla antes de leer el siguiente símbolo.
- Explicar aceptación por existencia de camino aceptador.
- Describir subset construction y el crecimiento exponencial \(2^{|Q|}\) en el peor caso.
- Ejecutar mentalmente `epsilon_closure` del snippet.

## Desarrollo de la lección

### NFA: definición y semántica de aceptación

Sea \(M = (Q, \Sigma, \delta, q_0, F)\) con \(\delta\) que devuelve subconjuntos de \(Q\).

Para cadena \(w = a_1 a_2 \ldots a_n\), una **computación** es una secuencia de estados donde cada símbolo \(a_i\) permite pasar de un estado del conjunto actual a otro según \(\delta\), aplicando ε-cierre cuando corresponda.

**Aceptación (por existencia)**: \(w \in L(M)\) si existe al menos una computación que termina en un estado de \(F\) tras leer toda la entrada.

Contraste con DFA: allí hay **una** traza; aquí puede haber muchas, pero solo necesitas **una** ganadora.

### Transiciones ε y clausura-ε

Una transición \(\epsilon\) de \(p\) a \(q\) escrita \(p \xrightarrow{\epsilon} q\) no avanza el índice de lectura de \(w\).

La **clausura-ε** de un conjunto (o estado) \(S\), notada \(\epsilon\text{-closure}(S)\), es el conjunto de estados alcanzables desde algún \(s \in S\) usando cero o más aristas ε.

**Algoritmo** (el del curso):

1. Inicializa `closure` con los estados de partida.
2. Usa una pila: cada vez que sacas un estado, agrega todos sus vecinos ε aún no visitados.
3. Repite hasta vaciar la pila.

**Ejemplo del snippet**: `eps_map = {'Q0': {'Q1'}, 'Q1': {'Q2'}}`. Desde `{Q0}`:

- Encuentras Q1 por ε, luego Q2 por ε desde Q1 ⇒ clausura `{Q0,Q1,Q2}`.

Antes de procesar un símbolo `a` en subset construction, el conjunto de estados DFA actual se expande con ε-closure.

### ¿Por qué usar NFA si DFA basta?

**Diseño más natural**: unión de patrones («`abc` o `def`») se dibuja con ramas desde un estado inicial ε.

**Thompson (módulo 4)**: construye NFA-ε modularmente desde regex sin explosión manual de estados.

**Tamaño**: el NFA puede ser **exponencialmente más pequeño** que el DFA mínimo equivalente; la conversión paga ese costo después.

### Subset construction (idea algorítmica)

Estados del DFA resultante = subconjuntos de \(Q_{NFA}\) alcanzables.

- Estado inicial DFA: \(\epsilon\text{-closure}(\{q_0\})\).
- Desde conjunto \(S\) al leer \(a\): \( \delta_{DFA}(S, a) = \epsilon\text{-closure}\left( \bigcup_{q \in S} \delta_{NFA}(q, a) \right) \).

Si un subconjunto contiene algún estado de \(F_{NFA}\), el estado DFA es final.

**Peor caso**: \(|Q_{DFA}| \le 2^{|Q_{NFA}|}\). Ejemplo didáctico de \(n\) estados en cadena con ε elecciones produce \(2^n\) subconjuntos distintos.

### Modelado de «adivinanza» sin magia

Intuición de **óracle**: el NFA «adivina» correctamente qué transición tomar entre varias opciones. La prueba no construye el oráculo: demuestra que **existe** una secuencia de elecciones correctas. La construcción de subconjuntos **materializa** esa adivinanza como un estado DFA que recuerda el conjunto de mundos posibles.

### NFA sin ε versus con ε

Todo NFA-ε tiene un NFA equivalente sin ε (eliminar ε-transiciones reemplazando con transiciones sobre símbolos y ajustando \(F\)). Para implementación, los motores modernos suelen quedarse en ε-NFA tras Thompson y luego convertir.

### Ejemplo mini: reconocer `abb` o `aab`

Dos caminos desde inicio: ε a componente que espera `abb` o ε a componente que espera `aab`. El no determinismo permite **paralelizar** intentos sin duplicar prefijo común en el diagrama.

### Ejemplo extendido de subset construction

NFA con \(Q = \{q_0, q_1, q_2\}\), \(q_0\) inicial, \(q_2\) final, \(\Sigma = \{a\}\):

- \(\delta(q_0, a) = \{q_0, q_1\}\) (no determinismo puro)
- \(\delta(q_1, a) = \{q_2\}\), \(\delta(q_2, a) = \emptyset\)

Estado DFA inicial: \(\{q_0\}\). Al leer `a`: \(\{q_0, q_1\}\) (ya es estado DFA). Otro `a`: desde \(q_0\) va a \(\{q_0,q_1\}\), desde \(q_1\) a \(\{q_2\}\) ⇒ unión \(\{q_0, q_1, q_2\}\), final porque incluye \(q_2\). La cadena `aa` se acepta aunque el NFA «dudara» en el primer paso.

Trazar este ejemplo en papel fija el patrón «unión de conjuntos tras cada símbolo».

### Complejidad en práctica regex

Motores como el de Python aplican optimizaciones (cache de subconjuntos, lazy DFA) para no materializar \(2^n\) en patrones cotidianos. El peor caso teórico sigue importando para seguridad: **ReDoS** explota backtracking o NFAs grandes.

## Demostración enlazada al código del módulo

`epsilon_closure(estados_iniciales, transiciones_eps)`:

- `stack` y `closure` implementan DFS sobre el grafo ε.
- `transiciones_eps.get(estado, set())` modela ausencia de salidas ε como conjunto vacío.
- No consume la cadena de entrada: es puramente estructural sobre el grafo del autómata.

Este bloque es el **sub-rutina crítica** de la subset construction: cada vez que en papel «salte con ε», el código agrega vecinos transitivos.

**Prueba**: añade `Q2 -ε-> Q0` (ciclo). La clausura de `{Q0}` sigue siendo finita si el conjunto de estados es finito; el bucle detecta repetición con `if v not in closure`.

**Puente a subset construction**: después de clausura inicial, simula leer `a` uniendo \(\delta(q,a)\) para \(q\) en el conjunto y vuelve a clausurar — es el esqueleto de un convertidor NFA→DFA en pocas líneas adicionales.

## Aplicaciones en sistemas reales

**Motor `re` de Python / PCRE**: compilación regex → NFA-ε (Thompson) → optimizaciones → DFA parcial o backtracking según patrón. La clausura ε está en el corazón del compilador de patrones.

**Firewalls e inspección DPI**: múltiples firmas en un solo autómata NFA paralelizado; cada paquete se procesa una vez comparando contra todos los patrones.

**Verificación de protocolos finitos (model checking)**: estados abstractos del protocolo combinan producto cartesiano de máquinas; la explosión combinatoria es análoga a subset construction mal acotada.

## Errores clásicos en examen

- Creer que NFA reconoce más lenguajes que DFA (falso: mismos regulares).
- Olvidar ε-closure **antes y después** de cada lectura de símbolo en subset construction.
- Confundir «estado final del DFA = subconjunto que contiene un final del NFA» con «subconjunto igual a \(F\)».
- Simular NFA eligiendo siempre la transición incorrecta y concluir rechazo (debes mostrar que **todas** fallan para probar rechazo, o una éxito para aceptar).
- Subestimar \(2^n\) estados: en exámenes piden contar subconjuntos alcanzables, no todos teóricos.

## Preguntas de entrevista

**P: ¿Cuál es la complejidad de convertir un NFA con \(n\) estados a DFA en el peor caso?**

**R:** Hasta \(2^n\) estados DFA y \(O(|\Sigma| \cdot 2^n)\) transiciones si se materializa la tabla completa. En práctica muchos subconjuntos no son alcanzables, pero el peor caso es exponencial.

**P: Explica ε-closure en dos frases.**

**R:** Partiendo de un conjunto de estados, sigue todas las transiciones ε repetidamente hasta que no puedas añadir más estados. Es el conjunto de estados «activos de forma gratuita» antes de leer el próximo carácter.

## Síntesis y checklist antes de avanzar

- Diferencio semántica de aceptación NFA versus DFA.
- Calculé a mano la clausura del ejemplo `Q0-Q1-Q2` y validé el `print` del snippet.
- Puedo enunciar los pasos de subset construction sin mirar apuntes.
- Entiendo por qué Thompson produce NFA-ε (módulo siguiente).
- Estoy listo para expresiones regulares y el teorema de Kleene (módulo 4).


### Simulación de NFA por conjuntos de estados (sin convertir a DFA)

Algoritmo directo sobre cadena \(w\):

1. Actual ← ε-closure(\{q_0\}).
2. Para cada símbolo a de w: Actual ← ε-closure(⋃_{q ∈ Actual} δ(q,a)).
3. Aceptar si Actual ∩ F ≠ ∅.

Este método evita exponer \(2^n\) estados del DFA; puede ser eficiente si los conjuntos alcanzables son pocos. Es la base de simuladores educativos.

### Eliminación formal de ε-transiciones (boceto)

Para cada par (q, a) en NFA-ε, añade transiciones qa que agregan todos los estados alcanzables vía ε tras mover con a. Marca estados finales si ε alcanzan algún final. El tamaño del grafo puede crecer, pero elimina ambigüedad de «saltos gratis».

### Comparación conceptual DFA ↔ NFA en diseño de equipo

| Aspecto | DFA | NFA |
|---------|-----|-----|
| Tabla | una fila destino por celda | conjuntos destino |
| Ejecución | traza única | conjunto de trazas |
| Diseño humano | más verboso | más compacto para uniones |
| Ejecución rápida empaquetada | muy rápida | conviene convertir |

### Ejemplo de ciclo ε y clausura

Si Q2 -ε-> Q0 además de la cadena lineal, la clausura de {Q0} puede seguir creciendo solo mientras haya aristas ε nuevas; con conjunto finito termina en menos de |Q| iteraciones por estado. El algoritmo del snippet es O(|Q| + |E_ε|).

### Aceptación en NFA con múltiples finales

Basta que **uno** de los estados activos finales al final de la cadena sea suficiente. En subset construction, subconjunto final si intersecta F.

### Historia breve para contextualizar

Rabin y Scott demostraron equivalencia DFA-NFA en los años 50; la construcción de subconjuntos es atribuida a esta línea de trabajo y es estándar en libros de Hopcroft & Ullman y Sipser. Conocer el nombre ayuda en entrevistas académicas.

### Fallo común al programar subset construction

Olvidar ε-closure **después** de reunir destinos por un símbolo hace que el DFA resultante rechace cadenas válidas que dependían de saltos ε post-lectura. El orden correcto es: leer → unir δ → ε-closure.


### Definición alternativa \(\delta: Q \times (\Sigma \cup \{\epsilon\}) \to \mathcal{P}(Q)\)

Algunos autores permiten \(\delta(q,\epsilon)\) explícito además de \(\delta(q,a)\). La clausura-ε unifica ambos estilos: tras cualquier paso, expande gratuitamente.

### Prueba textual de equivalencia NFA-DFA (esquema)

Si \(L\) es aceptado por NFA \(N\), construye DFA \(D\) cuyos estados son subconjuntos de \(Q_N\) alcanzables; muestra por inducción en longitud de cadena que \(D\) acepta los mismos prefijos activos que \(N\). Invoca que cada paso preserva igualdad de conjuntos de estados posibles. Sipser presenta la inducción formal; aquí basta citar que es el argumento estándar.

### NFA con \(\delta\) parcial

Algunas definiciones permiten \(\delta(q,a)\) indefinido = conjunto vacío — la computación muere. Sigue siendo equivalente a DFA con trampa si completas.

### Experimentos con el snippet

Modifica `eps_map` a `{'Q0':{'Q1','Q3'}, 'Q1':{'Q2'}}` y predice clausura antes de ejecutar. Añade prints en el bucle para ver orden de visita DFS.

### Uso en parsers LL

Aunque LL usa gramáticas, las tablas FIRST/FOLLOW tienen sabor de conjuntos de estados alternativos al no determinismo de elegir producción. La intuición de «múltiples posibilidades vivas» reaparece en análisis sintáctico.

### Nombre en inglés en CV

Subset construction, ε-closure, NFA — entrevistas globales usan inglés; practica explicar en español y en una frase en inglés.

### Cuando el NFA exponencial es inevitable

Familias de lenguajes donde todo DFA equivalente tiene exponencialmente muchos estados existen; demostrarlo va más allá del curso pero explica límites de regex compiladas en motores antiguos.

### Simulación paralela (idea)

Hardware puede trazar múltiples caminos NFA en paralelo hasta determinizar al vuelo — arquitectura de aceleradores de regex. Teóricamente sigue siendo regular.


### Cierre narrativo del no determinismo

El NFA es la herramienta con la que **pensamos** patrones, y el DFA es con la que **corremos** a escala en la mayoría de casos. La construcción de subconjuntos es el puente obligado en esa frase. Cuando en el módulo 10 escribas varias reglas de token en un lexer generado, cada regla contribuye a un autómata global; la unión de lenguajes regulares sigue siendo regular, pero el gráfico interno puede ser enorme antes de minimizar.

### Taller rápido: dibuja un NFA de tres estados

Requisito: aceptar cadenas que terminan en `1`. Tres estados: q0 inicial, q1 tras leer al menos un símbolo en «modo espera», q2 final al ver 1 al final — ajusta según tu convención. Convierte mentalmente a DFA con subconjuntos \(\{q0\}, \{q0,q1\}, \ldots\). Si dispones de cinco minutos en repaso, hacerlo a mano fija el algoritmo mejor que releer definiciones.


### Apéndice: tabla de subconjuntos ejemplo

Para NFA con estados \(\{A,B,C\}\) solo con ε de A a B y de B a C, el estado DFA inicial es \(\{A,B,C\}\). Al leer símbolo `a` desde A hacia \(\{D\}\) y clausurar, obtienes un único subconjunto nuevo. Rellenar tablas en parciales con columnas «subconjunto», «a», «b», «¿final?» acelera calificación y reduce errores conceptuales.

### Composición de NFAs

Para reconocer \(L_1 \cup L_2\), crea nuevo inicio con ε a inicios de cada componente y marcas finales de ambos. Thompson hace esto automáticamente. La construcción de subconjuntos sobre el NFA compuesto puede explotar en tamaño; minimiza después si es crítico.

### Glosario rápido

**No determinismo**, **ε-transición**, **clausura-ε**, **subconjunto alcanzable**, **explosión exponencial**. Repite definiciones en voz alta para fijar vocabulario técnico antes de entrevistas.


### Lección integrada: del epsilon_closure al convertidor completo

Para convertir el fragmento pedagógico del curso en un convertidor NFA→DFA esbozado, imagina un diccionario `mueve(conjunto, simbolo)` que para cada estado en el conjunto aplica las transiciones etiquetadas con ese símbolo (no ε), une los resultados en un set, y devuelve `epsilon_closure` de ese set. El estado inicial del DFA es `epsilon_closure({q0})`. Cada vez que descubres un subconjunto nuevo, lo añades a la cola de pendientes y repites para cada símbolo del alfabeto. Cuando la cola se vacía, la tabla DFA está completa para todos los subconjuntos alcanzables. Este es el mismo algoritmo que aparece en los libros con notación \(\widehat{\delta}\).

Si implementas esa cola en Python sobre el `eps_map` del snippet más un `transiciones_simbolo` pequeño, puedes aceptar cadenas sobre \(\{a\}\) en un NFA de ejemplo y contrastar con la simulación por conjuntos sin convertir. La diferencia pedagógica es que la tabla precomputada hace O(1) por símbolo en tiempo de ejecución tras el coste exponencial potencial de construcción.

### Cuaderno de bitácora para estudio

Registra tres filas en una hoja: cadena de prueba, conjunto de estados antes de leer, conjunto después de ε-closure. Hazlo para `aaa` en un NFA toy de cuatro estados. La bitácora te entrena para el examen donde no puedes ejecutar código.

### Pregunta integradora

¿Puede un NFA con un solo estado y un bucle `0,1` sobre sí mismo reconocer \(\Sigma^*\)? Sí, con ese estado final. ¿Cuántos estados tendrá el DFA tras subset construction? Uno solo. El peor caso exponencial no ocurre siempre; los casos triviales dan DFA del mismo tamaño.

En repaso final, recita de memoria los tres pasos del algoritmo `epsilon_closure` y nombra en qué línea del snippet vive cada paso: inicialización del cierre, extracción de la pila, iteración de vecinos ε. Esa correspondencia código-teoría es lo que evalúan los paneles de demostración del curso.

Verifica también que puedes explicar en una frase por qué subset construction preserva el lenguaje aceptado: ninguna cadena pierde un camino NFA existente ni inventa aceptaciones imposibles. Completa la autoevaluación del módulo en el panel solo después de haber trazado ε-closure sobre un diagrama dibujado por ti mismo, no copiado del libro.
