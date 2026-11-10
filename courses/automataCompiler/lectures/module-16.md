## Panorama del tema: MINIMIZACIÓN DE DFA — EQUIVALENCIA, PARTICIONES Y MYHILL-NERODE

Tras construir un DFA por determinización (módulo 3) o por producto de autómatas, el resultado suele contener **estados redundantes**: distintos identificadores de estado que, en la práctica, clasifican cada cadena de la misma manera. La **minimización** produce un DFA con el **mínimo** número de estados que reconoce el mismo lenguaje regular \(L\). Esa propiedad no es cosmética: tablas de transición más pequeñas aceleran el reconocimiento, reducen caché y memoria en motores léxicos (Flex, RE2, hand-written scanners) y facilitan razonar sobre equivalencia de patrones en herramientas de especificación.

Dos vías teóricas convergen. **Equivalencia de estados** (vista operacional): dos estados \(p, q\) son equivalentes si, desde ambos, toda cadena residual lleva al mismo veredicto aceptación/rechazo. El **algoritmo de particiones** (table-filling, refinamiento de Moore/Hopcroft en variantes) materializa esa idea en tiempo polinómico. El **teorema de Myhill-Nerode** (vista algebraica de **lenguajes derechos**) caracteriza la minimalidad: el número de clases de equivalencia de la relación «indistinguibilidad por sufijos» es el tamaño del DFA mínimo.

Esta lección cierra el arco teórico-práctico del bloque autómata–lexer: un conjunto de reglas regex compartido en producción termina en **una** tabla DFA compacta que el runtime del lexer indexa con O(1) por carácter.

## Objetivos de la lección

- Formalizar equivalencia de estados y estados distinguibles en un DFA.
- Esbozar el algoritmo de particiones (table-filling) y su refinamiento (outline Hopcroft).
- Enunciar el teorema de Myhill-Nerode y su correlato con estados mínimos.
- Relacionar minimización con optimización de tablas de transición léxicas.
- Ejecutar una minimización manual sobre un DFA pequeño ligado al laboratorio.

## Desarrollo de la lección

### Equivalencia de estados y distinguibilidad

Sea \(M = (Q, \Sigma, \delta, q_0, F)\) un DFA completo (función total \(\delta\)). Dos estados \(p, q \in Q\) son **equivalentes** (denotado \(p \equiv q\)) si para toda \(w \in \Sigma^*\):

\[
\delta^*(p, w) \in F \Leftrightarrow \delta^*(q, w) \in F.
\]

Si existe alguna cadena \(w\) que separa aceptación, decimos que \(p\) y \(q\) son **distinguibles**. La relación \(\equiv\) es una congruencia de menor índice compatible con \(\delta\): estados equivalentes pueden fusionarse sin alterar \(L(M)\).

**Estados inalcanzables** desde \(q_0\) no contribuyen palabras nuevas al lenguaje; se eliminan antes de minimizar. **Estados trampa** (no finales con transiciones cerradas entre sí) suelen colapsar en una sola clase si no distinguen cadenas respecto a estados finales alcanzables — cuidado al reconocer patrones con «sink» explícito en especificaciones Flex.

Propiedad útil en exámenes: si \(p \equiv q\) y leemos símbolo \(a \in \Sigma\), entonces \(\delta(p,a) \equiv \delta(q,a)\). La minimización respeta esta estructura alimentando refinamientos iterativos.

### Algoritmo de particiones (table-filling)

Versión clásica por **relleno de tabla**:

1. Partición inicial \(P_0 = \{F, Q \setminus F\}\) (estados finales vs no finales). Si un lado es vacío, el autómata acepta todo o nada — casos degenerados.
2. Para cada par \((p,q)\) de estados en **bloques distintos** de la partición actual, marcar como **distinguibles** si ya están en clases diferentes.
3. Para pares no marcados aún en el **mismo bloque**, para cada \(a \in \Sigma\), comparar bloques de \(\delta(p,a)\) y \(\delta(q,a)\). Si difieren, marcar \((p,q)\) distinguibles.
4. Propagar: si \((p,q)\) distinguibles y existe \(r\) tal que \(\delta(r,a)=p\) y algún estado en el mismo bloque que \(r\) va a \(q\) con \(a\), actualizar marcas (implementaciones usan colas de pares pendientes).
5. Repetir hasta estabilidad. Cada bloque final es una **clase de equivalencia**. Un representante por bloque, \(q_0'\) el bloque que contiene \(q_0\), finales los bloques que intersectan \(F\).

Complejidad del table-filling ingenuo puede acercarse a \(O(n^2 \cdot |\Sigma|)\) en \(n = |Q|\). **Hopcroft** reduce amoritzado a \(O(n \log n)\) manteniendo, por símbolo, listas de bloques «activos» que solo refinan cuando un bloque se parte. Para el curso basta el **outline**: partición inicial + refinamiento por separación de imágenes bajo \(\delta(\cdot, a)\).

Variante **Moore** (minimización de máquinas de Moore, salidas en estados) inspira la intuición de separar por respuesta inmediata y luego por entradas; en DFA de aceptación la «salida» es aceptar/rechazar tras leer la cadena completa — la partición inicial por \(F\) es el análogo.

### Teorema de Myhill-Nerode (lenguajes derechos)

Defina sobre \(\Sigma^*\) la relación \(x \sim_M y\) si para todo \(z \in \Sigma^*\), \(xz \in L(M) \Leftrightarrow yz \in L(M)\). Las clases \([x]_M\) forman el conjunto de **sufijos distinguidores**. El teorema afirma:

- \(L\) es regular \(\Leftrightarrow\) el índice de \(\sim\) es finito.
- El número mínimo de estados de un DFA para \(L\) es exactamente ese índice.
- Existe un DFA mínimo único (salvo renombrado de estados) isomorfo a \(Q\) particionado por \(\sim\).

Conexión con **lenguajes derechos**: si \(L\) es regular, las clases de equivalencia derecha \(\equiv_R\) con \(x \equiv_R y \Leftrightarrow \forall z, xz \in L \Leftrightarrow yz \in L\) coinciden con las clases de Myhill-Nerode en el caso clásico de aceptación de toda la cadena. Compiladores raramente citan el nombre, pero cada fila de la tabla minimizada es un representante de una clase de cadenas **indistinguibles para el lexer** una vez fijado el prefijo ya leído.

Demostración esquematizada en dos pasos: (1) un DFA con \(n\) estados induce como mucho \(n\) clases \(\sim\); (2) construir DFA de clases usando \(\delta([x], a) = [xa]\) — estado bien definido porque si \(x \sim y\) entonces \(xa \sim ya\). Minimalidad sigue de no existir fusión adicional sin identificar clases distintas.

### DFA mínimo único y completitud

Si \(M\) no es total, completar con estado trampa único antes de minimizar; luego el trampa fusiona con otras rechazas equivalentes. **Minimización conmuta** (conceptualmente) con determinización: minimizar el DFA de un NFA grande obtiene el mismo lenguaje que minimizar tras Thompson + subset, pero el orden afecta tamaños intermedios — pipelines industriales reducen ε antes de subset, minimizan al final.

Para \(L_1 \cap L_2\) vía producto, el DFA del producto no está minimizado; aplicar particiones después evita que el lexer herede \(\lvert Q_1 \rvert \cdot \lvert Q_2 \rvert\) filas redundantes cuando los patrones comparten prefijos largos.

### Aplicación en tablas del lexer

Un motor léxico combina patrones \(\{r_1, \ldots, r_k\}\). Tras unión Thompson y determinización, \(Q\) puede crecer brutalmente. **Minimización** comprime la matriz `estado × símbolo → nuevo_estado`. En Flex, el generador emite tablas densas o comprimidas (columnas por defecto, partición por clases de caracteres ASCII) — la minimización del DFA subyacente es un paso estándar en `re2c`, Lex/Flex y en compiladores internos de `re`.

Beneficios concretos:

- Menos filas ⇒ mejor localidad en tabla grande escaneando archivos de megabytes.
- Estados fusionados ⇒ misma semántica de **longest match** y prioridad de reglas si se construyó el autómata con anclajes correctos; minimizar no altera el lenguaje reconocido.
- Depuración: inspeccionar el DFA mínimo revela cuántas «situaciones léxicas» reales distinguen el input (útil al depurar conflictos de tokens solapados).

**Precondición**: las reglas deben codificarse en un solo autómata con etiquetado de acciones por estado final / prioridad. Minimizar el DFA **sin** resolver prioridad longest-match puede producir ambigüedad semántica — la minimización es algebraica sobre el lenguaje, no sobre la **acción** retornada; por eso los generadores marcan aceptaciones con la regla ganadora antes o después del colapso, según implementación.

### Contraste con NFA y con producto

Minimizar un NFA directamente no está definido; primero determinizar. El peor caso de blow-up en determinización no se deshace minimizando: existen familias donde el DFA mínimo sigue exponencial respecto al tamaño del NFA. En ingeniería, se prefiere **simulación on-the-fly** del NFA para regex pequeñas y DFA materializado + minimizado para el lexer completo del lenguaje.

## Demostración enlazada al código del módulo

Considere un DFA toy sobre \(\Sigma = \{0,1\}\) que acepta cadenas cuya longitud es múltiplo de 3 (módulo 3 en el contador de estados \(Q0, Q1, Q2\)). Es ya **mínimo**: no hay fusión sin cambiar paridad de longitud módulo 3.

Pseudocódigo de **table-filling** aplicable al laboratorio (extensión de `DFA` del módulo 2):

```python
def distinguibles(dfa):
    Q, F, Sigma, delta = dfa.Q, dfa.F, dfa.Sigma, dfa.delta
    # Pares no marcados: solo estados alcanzables
    marked = set()
    stack = []
    for p in Q:
        for q in Q:
            if (p in F) ^ (q in F):
                marked.add((p, q))
                stack.append((p, q))
    while stack:
        p, q = stack.pop()
        for a in Sigma:
            dp, dq = delta[p][a], delta[q][a]
            if (dp, dq) not in marked and (dq, dp) not in marked:
                marked.add((dp, dq))
                stack.append((dp, dq))
    # Bloques = componentes de no-distinguibles (union-find opcional)
    ...
```

Tras ejecutar sobre un DFA de paridad par/impar de unos (dos estados), la partición estable permanece en \(\{Q_{\text{par}}, Q_{\text{impar}}\}\) — confirmación de minimalidad del diseño del estudiante en módulo 2.

Para un DFA mal diseñado con tres estados equivalentes al par de paridad, el algoritmo fusiona en dos clases. Mapear clases a estados compactos reproduce la tabla que Flex emitiría con dos filas en lugar de tres.

## Aplicaciones en sistemas reales

**GNU Flex** genera autómata deterministas minimizados (con técnicas de compresión de tabla adicionales) a partir de reglas `.l`; builds grandes de compiladores dependen de ese tamaño.

**RE2** de Google construye DFA sobre uniones de regex con límites de memoria; la compresión de estados es crítica para evitar OOM en patrones adversos en servicios de búsqueda.

**Motores de antivirus y protocolos** usan Aho-Corasick para múltiples cadenas; la story es distinta (trie + fallas), pero subpatrones regulares individuales aún se minimizan en preprocesamiento offline.

## Errores clásicos en examen

- Minimizar antes de eliminar estados **inalcanzables** (estados basura que inflan particiones sin efecto en \(L\)).
- Confundir estados equivalentes con estados **iguales** (mismo nombre) — equivalencia es semántica.
- Creer que minimizar un autómata con **múltiples acciones** por estado final resuelve conflictos de prioridad léxica — la acción es metadata, no el lenguaje.
- Olvidar **completar** el DFA antes de aplicar table-filling en exámenes que asumen \(\delta\) total.
- Afirmar que Hopcroft y table-filling producen particiones distintas en DFA completos — deben coincidir en clases finales.
- Contar el número de estados del NFA como cota del mínimo DFA.

## Preguntas de entrevista

**P: ¿Por qué el DFA mínimo es único?**

**R:** Las clases de Myhill-Nerode están fijadas por el lenguaje; cualquier DFA mínimo debe tener un estado por clase y transiciones consistentes con concatenación de sufijos. Renombrar estados no rompe unicidad estructural.

**P: ¿Minimizar siempre vale la pena en tiempo de compilación del lexer?**

**R:** Casi siempre offline: pagas determinización+minimización una vez, escaneas millones de veces. El coste de build aumenta, el runtime disminuye. Para regex dinámicas en runtime, a veces se evita materializar el DFA completo.

**P: Diferencia entre distinguible por una cadena y distinguible por longitud acotada.**

**R:** Equivalencia exige coincidir para **todo** sufijo; en algoritmo solo se exploran separaciones hasta estabilidad. Table-filling es correcto y completo para DFA finitos.

### Ejemplo completo de refinamiento manual

Considere \(M\) con \(Q = \{s_0, s_1, s_2, s_3\}\), \(\Sigma = \{a,b\}\), inicio \(s_0\), finales \(F = \{s_3\}\), y transiciones: desde \(s_0\) con `a` va a \(s_1\), con `b` a \(s_2\); \(s_1\) con `b` a \(s_3\); \(s_2\) con `a` a \(s_3\); \(s_3\) absorbe self-loops. El lenguaje es «terminar en `ab` o en `ba`» leído como sufijo reconocido al llegar a \(s_3\). La partición inicial separa \(\{s_3\}\) de \(\{s_0,s_1,s_2\}\). Bajo símbolo `a`, \(s_0 \to s_1\), \(s_1 \to\) trampa o rechazo, \(s_2 \to s_3\) — imágenes caen en bloques distintos, marcando pares \((s_0,s_1)\), \((s_1,s_2)\), etc. Tras estabilizar, típicamente \(s_0\) permanece solo mientras \(s_1\) y \(s_2\) pueden fusionarse si sus destinos bajo toda cadena residual coinciden; si no, el mínimo conserva tres o cuatro clases según el diseño exacto de trampa. Este ejercicio en papel obliga a **no** saltar pasos de imagen bajo \(\delta(\cdot,a)\) y \(\delta(\cdot,b)\), error habitual cuando se aprende el algoritmo solo con definiciones.

### Correspondencia Myhill-Nerode ↔ bloques del table-filling

Cada clase de \(\sim_M\) es un conjunto de cadenas \(w\) que llevan desde \(q_0\) a estados equivalentes. Al fusionar estados del DFA, las cadenas que distinguían \(p\) de \(q\) desaparecen como separación: el bloque resultante representa la misma clase de sufijos indistinguibles. Formalizar que el table-filling produce exactamente la partición gruesa de \(\equiv\) es ejercicio estándar de autómatas: inducción mostrando que no marcar un par implica indistinguibilidad para cualquier longitud de sufijo.

En implementaciones de compilador de regex, representar internamente el DFA como mapa de **clases** (enteros compactos) simplifica serialización a binario para cargar tablas en runtime embebido sin reconstruir autómata textual.

## Estudio dirigido y trazas

Minimice a mano un DFA de cuatro estados para cadenas sobre \(\{a,b\}\) que terminan en `ab`: dibuje tabla de pares, marque finales vs no finales, refine con \(a\) y \(b\). Compare conteo de estados antes y después.

Para el lenguaje \((01)^*\), construya DFA de tres estados y argumente minimalidad vía Myhill-Nerode (clases de cadenas vacía, terminada en `0`, terminada en `01`).

Relacione módulo 3: tras subset construction de un NFA con ε, cuántas clases produce minimización típica en el regex `a|a?b` del laboratorio.

Escriba biimplicación del teorema Myhill-Nerode: «índice finito de \(\sim\)» \(\Leftrightarrow\) «existe DFA finito para \(L\)».

Explique por qué el producto \(M_1 \times M_2\) minimizado puede tener **menos** estados que \(\min(M_1) \times \min(M_2)\) en cardinal — el producto explota estructura conjunta.

## Profundización: Hopcroft y complejidad práctica

Hopcroft mantiene, para cada \(a \in \Sigma\), el conjunto de bloques «activos» que pueden dividir otros bloques. Cuando un bloque \(B\) se parte en \(B_1, B_2\), solo los pares que dependen del más pequeño se revisititan — invariante que limita trabajo total a \(O(n \log n)\).

En implementaciones de Flex, tras minimización llega **compresición por equivalencia de columnas** (caracteres que inducen la misma columna de transición) — segunda capa independiente del algoritmo de estados.

**Automata learning** (Angluin) reconstruye DFA mínimo consultando membership/equivalencia — puente académico entre Myhill-Nerode y testing de especificaciones.

## Práctica integral

Implemente union-find sobre pares no marcados del table-filling para emitir `dfa_min` con reindexación 0..k-1. Integre con simulador `procesar_cadena` del módulo 2 y verifique que cadenas de prueba conservan aceptación.

Compare tamaño de tabla antes/después en autómata de cinco tokens del laboratorio léxico (módulo 10).

## Síntesis y checklist antes de avanzar

- Definí equivalencia de estados \(p \equiv q\) con \(\forall w \in \Sigma^*\).
- Ejecuté o esquematé table-filling hasta partición estable.
- Enuncié teorema Myhill-Nerode y su vínculo con número mínimo de estados.
- Describí outline de Hopcroft frente a table-filling ingenuo.
- Conecté minimización con tablas compactas en Flex/re2c.
- Eliminé inalcanzables y completé \(\delta\) cuando el modelo lo exige.
- Minimicé un DFA toy manualmente y validé con el snippet conceptual.
- Diferencié minimización del lenguaje vs resolución de prioridades léxicas.
- Articulé por qué determinizar antes de minimizar es obligatorio en NFA.
- Listo para LL(1) profundo (módulo 17) con autómatas regulares cerrados.
