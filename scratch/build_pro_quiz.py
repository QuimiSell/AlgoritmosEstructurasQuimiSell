#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "courses" / "automataCompiler" / "proQuiz.json"


def Q(question: str, options: list[str], answer_index: int, explanation: str) -> dict:
    if len(options) != 4 or not (0 <= answer_index <= 3):
        raise ValueError((question, options, answer_index))
    return {
        "question": question,
        "options": options,
        "answerIndex": answer_index,
        "explanation": explanation,
    }


PRO_QUIZ: dict[str, list[dict]] = {}

PRO_QUIZ["1"] = [
    Q(
        "Sea Σ = {0,1}. ¿Qué conjunto describe Σ*?",
        [
            "Todas las cadenas finitas sobre {0,1}, incluyendo ε",
            "Cadenas de longitud al menos 1",
            "Solo cadenas con un número par de símbolos",
            "Únicamente {ε, 0, 1}",
        ],
        0,
        "Σ* es la unión de Σ^k para k ≥ 0; incluye la cadena vacía.",
    ),
    Q(
        "Con |Σ| = 3, ¿cuántas cadenas distintas tienen longitud exactamente 4?",
        ["12", "81", "27", "64"],
        1,
        "Cada posición elige 3 símbolos: 3⁴ = 81.",
    ),
    Q(
        "¿En qué difieren ∅ y {ε} como lenguajes?",
        [
            "∅ no tiene cadenas; {ε} contiene una cadena de longitud 0",
            "Son iguales porque ε no cuenta",
            "∅ contiene ε implícitamente",
            "{ε} no es subconjunto de Σ*",
        ],
        0,
        "El lenguaje vacío no contiene ningún elemento; {ε} tiene exactamente un miembro.",
    ),
    Q(
        "Concatenar '10' con '01' produce:",
        ["'1001'", "'11'", "'0101'", "Error: símbolos incompatibles"],
        0,
        "La concatenación pega secuencias: '10'·'01' = '1001', |w| = 4.",
    ),
    Q(
        "Si L₁ = {a, ab} y L₂ = {b}, ¿qué cadenas están en L₁L₂?",
        ["{ab, abb}", "{b, ab}", "{ab}", "{aab, abb}"],
        0,
        "Cada w₁∈L₁ sigue a w₂='b': 'a'+'b'='ab'; 'ab'+'b'='abb'.",
    ),
    Q(
        "Un lexer «ASCII only» rechaza Unicode no mapeado. Formalmente modela:",
        [
            "Verificar w ∈ Σ* para un Σ finito de caracteres permitidos",
            "Decidir si w es regular",
            "Comprobar que |w| > 0",
            "Traducir w a tokens sin alfabeto",
        ],
        0,
        "Todo símbolo de w debe estar en Σ; fuera de Σ no hay cadena válida sobre ese alfabeto.",
    ),
    Q(
        "¿Por qué Σ⁺ excluye ε cuando Σ no es vacío?",
        [
            "Σ⁺ es unión de Σ^k con k ≥ 1",
            "ε no es un símbolo de Σ",
            "Σ⁺ es igual a Σ",
            "Porque Kleene no admite cero repeticiones",
        ],
        0,
        "Definición estándar: Σ⁺ = ⋃_{k≥1} Σ^k; el caso k=0 queda solo en Σ*.",
    ),
    Q(
        "Depura: `len(concatenar('', 'abc'))` en el snippet del módulo devuelve:",
        ["3", "0", "4", "TypeError"],
        0,
        "ε es neutro: concatenar cadena vacía no altera longitud.",
    ),
    Q(
        "L = {0ⁿ | n ≥ 0}. ¿Qué relación tiene con Σ* para Σ={0}?",
        [
            "L es un subconjunto propio infinito de Σ*",
            "L = Σ* completo",
            "L es finito",
            "L no ⊆ Σ*",
        ],
        0,
        "Solo usa el símbolo 0 pero admite cualquier longitud; Σ* también tendría cadenas con 1 si Σ={0,1}.",
    ),
    Q(
        "¿Cuál operación entre lenguajes NO corresponde directamente a un operador regex estándar?",
        [
            "Complemento respecto a Σ*",
            "Unión",
            "Concatenación",
            "Estrella de Kleene",
        ],
        0,
        "Unión, concat y estrella son primitivas regex; complemento requiere teorema adicional (DFA).",
    ),
]

PRO_QUIZ["2"] = [
    Q(
        "En M = (Q, Σ, δ, q₀, F), ¿qué garantiza que M sea determinista?",
        [
            "δ : Q × Σ → Q es función total",
            "δ devuelve un conjunto de estados",
            "Existen transiciones ε",
            "Q es infinito",
        ],
        0,
        "Un único siguiente estado para cada (q, a) y definido para todo par válido.",
    ),
    Q(
        "DFA de paridad de 1s en {0,1} con q₀ aceptor (ε acepta). ¿Acepta '1100'?",
        [
            "Sí, hay dos 1s",
            "No, termina en 0",
            "Solo si hay un 1 inicial",
            "Depende de no determinismo",
        ],
        0,
        "Conteo de unos: dos es par → estado aceptor.",
    ),
    Q(
        "δ*(q, w) para w = a₁…aₙ se define por:",
        [
            "Aplicar δ iterativamente desde el último símbolo hacia atrás",
            "Inducción: δ*(q, ε)=q; δ*(q, wa)=δ(δ*(q,w), a)",
            "Solo un paso δ(q, aₙ)",
            "Unión de δ en cada prefijo",
        ],
        1,
        "Extensión recursiva estándar de δ a cadenas.",
    ),
    Q(
        "Implementas δ como `dict` anidado. ¿Qué ocurre si falta una entrada para (q, 'a')?",
        [
            "Violación de totalidad; la simulación debe fallar o usar trampa explícita",
            "Se interpreta como rechazo implícito sin romper modelo DFA",
            "Equivale a NFA",
            "Python devuelve ε",
        ],
        0,
        "DFA formal requiere destino definido; en práctica se usa estado trampa explícito.",
    ),
    Q(
        "L = {w ∈ {0,1}* | w termina en '01'}. ¿Qué diseño es correcto?",
        [
            "Recordar sufijo relevante (últimos símbolos vistos)",
            "Un solo estado sin memoria",
            "Solo contar ceros",
            "Pila auxiliar obligatoria",
        ],
        0,
        "Memoria finita de prefijos recientes basta; es regular.",
    ),
    Q(
        "Producto de autómatas A y B para L(A) ∩ L(B) usa:",
        [
            "Estados Q_A × Q_B y δ producto con aceptación en F_A × F_B",
            "Unión de tablas δ sin sincronizar",
            "Solo estados de A",
            "Complemento de A",
        ],
        0,
        "Construcción clásica del producto cartesiano sincronizado.",
    ),
    Q(
        "Complejidad de simular un DFA sobre |w| = n:",
        ["O(n) tiempo, O(1) espacio extra", "O(2ⁿ)", "O(n log n)", "O(1) solo si F es unitario"],
        0,
        "Un paso por símbolo, un entero de estado.",
    ),
    Q(
        "Estado trampa qₜ sirve para:",
        [
            "Absorber cadenas ya rechazadas manteniendo δ total",
            "Acelerar minimización únicamente",
            "Simular ε",
            "Marcar aceptación",
        ],
        0,
        "Desde qₜ todos los símbolos regresan a qₜ y qₜ ∉ F.",
    ),
    Q(
        "Depura: w aceptada pero δ*(q₀,w) ∉ F. La causa más probable en código:",
        [
            "Estado inicial o conjunto F mal inicializado",
            "El alfabeto Σ es infinito",
            "δ* no existe para DFA",
            "Solo falla con ε",
        ],
        0,
        "Errores típicos de implementación: q₀, F o transición mal copiada.",
    ),
    Q(
        "¿Qué componente de la 5-tupla puede omitirse en una demostración teórica pero no en simulación?",
        [
            "Ninguno: q₀, F y δ son necesarios para ejecutar",
            "F porque basta alcanzar cualquier estado",
            "Σ porque el código no usa alfabeto",
            "Q porque δ es suficiente",
        ],
        0,
        "Sin F no hay criterio de aceptación; sin q₀ no hay inicio.",
    ),
]

PRO_QUIZ["3"] = [
    Q(
        "Un NFA con transiciones ε permite:",
        [
            "Cambiar de estado sin consumir símbolo de entrada",
            "Leer dos símbolos a la vez",
            "Retroceder en la cinta",
            "Solo aceptar ε",
        ],
        0,
        "ε-arcos no avanzan el índice de lectura.",
    ),
    Q(
        "ε-clausura de {q₀} antes de leer 'a' incluye:",
        [
            "Todos los estados alcanzables solo por ε desde q₀",
            "Todos los estados de Q",
            "Solo q₀",
            "Estados alcanzables leyendo 'a'",
        ],
        0,
        "Definición: clausura reflexiva-transitiva de relaciones ε.",
    ),
    Q(
        "En construcción de subconjuntos, un estado del DFA es:",
        [
            "Un subconjunto de estados del NFA",
            "Un solo estado del NFA duplicado",
            "Una pila",
            "Una expresión regular",
        ],
        0,
        "Cada conjunto de estados simultáneamente activos forma un estado DFA.",
    ),
    Q(
        "NFA con n estados → DFA equivalente en el peor caso:",
        ["Hasta 2ⁿ estados", "Siempre n estados", "n² estados", "2n estados exactos"],
        0,
        "Ejemplo clásico { w | a en posiciones múltiplos de i para i divisores } exhibe blow-up.",
    ),
    Q(
        "Simulas NFA sin determinizar: en cada paso conservas:",
        [
            "Conjunto activo de estados tras ε-clausura",
            "Un único estado elegido al azar",
            "Solo el tope de pila",
            "La cadena reversa",
        ],
        0,
        "Simulación por conjuntos es estándar y correcta.",
    ),
    Q(
        "¿Por qué Thompson introduce ε al construir uniones?",
        [
            "Para bifurcar sin leer entrada hacia sub-autómatas",
            "Para consumir el símbolo |",
            "Para convertir a CFG",
            "Para hacer el NFA determinista",
        ],
        0,
        "ε conecta inicio a ramas paralelas de la alternancia.",
    ),
    Q(
        "Depura: determinización acepta cadenas que el NFA rechazaba. Causa típica:",
        [
            "ε-clausura omitida al calcular δ_DFA",
            "Uso de pila",
            "Σ vacío",
            "F demasiado pequeño",
        ],
        0,
        "Sin ε-clausura los estados iniciales/compuestos son incorrectos.",
    ),
    Q(
        "L(NFA) coincide con L(DFA) determinizado si:",
        [
            "La construcción de subconjuntos se aplicó correctamente",
            "El NFA no tiene ε",
            "Q tiene un solo estado",
            "Solo si el lenguaje es finito",
        ],
        0,
        "La determinización es equivalente en lenguaje cuando es correcta.",
    ),
    Q(
        "frozenset de estados como clave en dict de transiciones evita:",
        [
            "Mutabilidad de sets como claves de hash",
            "Determinismo",
            "ε-transiciones",
            "Aceptación",
        ],
        0,
        "Los sets mutables no son hashables en Python.",
    ),
    Q(
        "NFA adecuado para regex (a|b)*c porque:",
        [
            "La unión y repetición se cablean localmente con pocos estados",
            "Requiere memoria de pila",
            "Es más lento que CYK",
            "No admite ε",
        ],
        0,
        "Construcciones composicionales de Thompson son naturales en NFA.",
    ),
]

PRO_QUIZ["4"] = [
    Q(
        "Precedencia estándar en regex: ¿qué opera primero?",
        [
            "Estrella (Kleene)",
            "Unión",
            "Paréntesis externos",
            "Concatenación antes que estrella",
        ],
        0,
        "Orden habitual: paréntesis > * > concat > |.",
    ),
    Q(
        "(0|1)*0 representa:",
        [
            "Cadenas binarias que terminan en 0",
            "Cadenas que empiezan en 0",
            "Solo '0'",
            "Cadenas con un solo 1",
        ],
        0,
        "Cualquier prefijo binario seguido de 0 final.",
    ),
    Q(
        "Teorema de Kleene establece equivalencia entre:",
        [
            "Regex, NFA/DFA y lenguajes regulares",
            "CFG y PDA solamente",
            "MT y C",
            "Lexer y optimizador",
        ],
        0,
        "Las tres caracterizaciones definen la misma clase.",
    ),
    Q(
        "Thompson para concatenación rs conecta:",
        [
            "Aceptación de r con inicio de s via ε",
            "Unión directa de alfababetos",
            "Estados finales de s con inicio de r",
            "Dos iniciales sin enlace",
        ],
        0,
        "Salida de r enlaza por ε a entrada de s.",
    ),
    Q(
        "a+b en notación regex (sin espacios) suele significar:",
        [
            "Una o más repeticiones de 'a' seguidas de literal 'b'",
            "Suma aritmética",
            "Unión a ∪ {b}",
            "La cadena 'ab' opcional",
        ],
        0,
        "+ es clausura positiva; luego concat con b.",
    ),
    Q(
        "¿Qué lenguaje NO puede describirse con regex sobre Σ={(,)}?",
        [
            "Paréntesis balanceados arbitrarios",
            "Cadena vacía",
            "Secuencia '(()'",
            "Un solo '('",
        ],
        0,
        "Balanceo anidado requiere contador (CF), no memoria finita.",
    ),
    Q(
        "Depura: patrón (0*)*1 acepta '111'. ¿Es correcto para Σ={0,1}?",
        [
            "Sí: (0*)* consume cero ceros repetidamente y exige un 1",
            "No: necesita al menos un 0",
            "No: * no anida",
            "Solo acepta ε",
        ],
        0,
        "(0*)* puede repetir la subexpresión vacía; luego el 1 final satisface.",
    ),
    Q(
        "Eliminación de estados en DFA produce:",
        [
            "Una expresión regular equivalente",
            "Una CFG",
            "Una MT",
            "Un parser LL(1)",
        ],
        0,
        "Método algebraico clásico DFA → regex.",
    ),
    Q(
        "Motor regex con backtracking greedy puede diferir del autómata cuando:",
        [
            "Hay capturas y anclas POSIX no regulares puras",
            "El alfabeto es binario",
            "No hay unión",
            "Siempre coinciden en teoría",
        ],
        0,
        "Extensiones (lookahead, backrefs) salen de regex clásicas; greedy puede divergir en implementaciones.",
    ),
    Q(
        "Identificador [A-Za-z_][A-Za-z0-9_]* en lexer mapea a:",
        [
            "Lenguaje regular reconocido por DFA combinado",
            "Lenguaje CF sin regular",
            "Solo un símbolo terminal",
            "Gramática de Turing",
        ],
        0,
        "Prefijo-clase y repetición son operadores regulares.",
    ),
]

PRO_QUIZ["5"] = [
    Q(
        "Pumping lemma para L regular afirma que existen p y descomposición w = xyz con:",
        [
            "|xy| ≤ p, |y| ≥ 1 y xyⁱz ∈ L para todo i ≥ 0",
            "|y| > p siempre",
            "y puede ser ε",
            "Solo aplica si L es finito",
        ],
        0,
        "Condiciones estándar del lema.",
    ),
    Q(
        "Para demostrar {aⁿbⁿ | n≥0} no regular, w adversarial típico con longitud ≥ p:",
        ["aᵖbᵖ", "aᵖ", "bᵖaᵖ", "(ab)ᵖ"],
        0,
        "Fuerza balance; bombeo en y rompe igualdad de a y b.",
    ),
    Q(
        "Si en bombeo elegimos i = 0, efecto sobre w = xyz:",
        [
            "Se elimina una ocurrencia de y",
            "Se duplica y",
            "Se invierte z",
            "No cambia la longitud total",
        ],
        0,
        "xy⁰z = xz, útil para probar salida del lenguaje.",
    ),
    Q(
        "Error frecuente en exámenes:",
        [
            "Asumir que y debe contener solo b cuando w = aᵖbᵖ",
            "Elegir p arbitrario del lema",
            "Usar contradicción",
            "Considerar i ≥ 0",
        ],
        0,
        "Con |xy| ≤ p, y cae solo en bloque inicial de a's.",
    ),
    Q(
        "L = {ww | w ∈ {0,1}*} es no regular porque:",
        [
            "Requiere comparar mitades separadas por distancia variable",
            "Es finito",
            "Es igual a (0|1)*",
            "Tiene ε",
        ],
        0,
        "Memoria finita no guarda primera mitad para longitudes crecientes.",
    ),
    Q(
        "Pumping lemma es suficiente para probar no regularidad:",
        [
            "Sí cuando el argumento de contradicción cierra correctamente",
            "No: nunca sirve",
            "Solo para lenguajes finitos",
            "Solo con NFA",
        ],
        0,
        "Es herramienta estándar de prueba por contradicción.",
    ),
    Q(
        "Depura prueba: concluyes L regular porque bombea una vez. Fallo:",
        [
            "Debes mostrar violación ∀i, no un caso aislado",
            "Falta alfabeto",
            "No se usa z",
            "w es demasiado corta siempre",
        ],
        0,
        "La condición del lema quantifica sobre todo i.",
    ),
    Q(
        "Palíndromos sobre {a,b} con longitud par:",
        [
            "No son regulares (misma técnica de cruce)",
            "Son regulares por regex a*b*a",
            "Son finitos",
            "Son CF pero también regulares",
        ],
        0,
        "Comparación simétrica de extremos requiere más que un contador.",
    ),
    Q(
        "Si L es regular, entonces para suficientemente largas cadenas:",
        [
            "Una porción y se puede repetir sin salir de L",
            "No hay cadenas largas",
            "Todas las descomposiciones fallan",
            "p = |Σ|",
        ],
        0,
        "Interpretación operativa del lema.",
    ),
    Q(
        "Bombeo falla para diseñar DFA de aⁿbⁿ implica:",
        [
            "Buscar PDA/CFG, no más estados DFA",
            "El lenguaje es regular",
            "El lema está mal enunciado",
            "Usar solo ε-NFA",
        ],
        0,
        "Señal de que memoria finita no bastará.",
    ),
]

PRO_QUIZ["6"] = [
    Q(
        "Una CFG G = (V, Σ, P, S) genera cadenas en:",
        ["(V ∪ Σ)* restringidas a terminales en L(G)", "Solo Σ", "Solo V", "ε únicamente"],
        0,
        "Derivaciones mezclan no terminales hasta emitir solo terminales.",
    ),
    Q(
        "Derivación leftmost expande:",
        [
            "El no terminal más a la izquierda en cada paso",
            "El más a la derecha",
            "Todos a la vez",
            "Solo terminales",
        ],
        0,
        "Convención útil para parsers predictivos.",
    ),
    Q(
        "Gramática E → E + E | E * E | id es:",
        ["Ambigua para id + id * id", "No ambigua", "Regular", "Tipo 0 solamente"],
        0,
        "Dos árboles (asociatividad distinta) para la misma cadena.",
    ),
    Q(
        "Eliminar ambigüedad en expresiones suele usar:",
        [
            "Capas de precedencia (term/factor) o precedencias declaradas",
            "Solo más terminales",
            "Convertir a DFA",
            "ε-producciones únicamente",
        ],
        0,
        "Refuerza estructura jerárquica de operadores.",
    ),
    Q(
        "El lexer entrega tokens; la CFG del parser usa:",
        [
            "Símbolos terminales que son clases de token",
            "Caracteres ASCII individuales siempre",
            "Solo números",
            "Estados del DFA directamente",
        ],
        0,
        "Nivel de abstracción tras análisis léxico.",
    ),
    Q(
        "Producción S → aSb | ε genera:",
        ["{aⁿbⁿ | n ≥ 0}", "{aⁿbⁿbⁿ}", "Regular con n≤3", "L vacío"],
        0,
        "Cada paso añade un par a…b alrededor.",
    ),
    Q(
        "Árbol de derivación distinto del AST porque:",
        [
            "El AST contrae nodos sintácticos y pierde símbolos intermedios",
            "Son idénticos siempre",
            "El AST incluye tokens de caracteres",
            "La derivación es LR únicamente",
        ],
        0,
        "AST es vista abstracta para análisis posterior.",
    ),
    Q(
        "Depura: parser reduce pero semántica falla tipos. Causa probable:",
        [
            "Gramática acepta sintaxis inválida semánticamente",
            "CFG mal definida",
            "Lexer no corre",
            "CYK en vez de LL",
        ],
        0,
        "Sintaxis correcta no implica semántica; ver siguiente fase.",
    ),
    Q(
        "Recursión izquierda A → Aα | β dificulta:",
        ["Parsers LL(1) sin transformación", "Parsers LR", "Generación ε", "Tokens NUM"],
        0,
        "Descenso recursivo predictivo necesita eliminarla o usar LR.",
    ),
    Q(
        "L(G) = ∅ ocurre si:",
        [
            "Ningún no terminal deriva cadena de terminales",
            "S tiene producción ε",
            "Σ es infinito",
            "Hay ambigüedad",
        ],
        0,
        "Sin derivaciones terminantes el lenguaje es vacío.",
    ),
]

PRO_QUIZ["7"] = [
    Q(
        "Un PDA lee entrada y manipula:",
        ["Una pila LIFO de símbolos de Γ", "Dos cintas", "Solo contador modulo k", "Registro único"],
        0,
        "Memoria adicional estructurada como pila.",
    ),
    Q(
        "L libre de contexto coincide con lenguajes aceptados por:",
        ["Algún PDA (modo estándar del curso)", "Solo DFA", "Solo MT deterministas", "Regex"],
        0,
        "Teorema central CFG ↔ PDA.",
    ),
    Q(
        "En CNF, las producciones permitidas son:",
        ["A → BC o A → a con a terminal", "A → ε sin restricción", "A → w con |w|>2", "Solo ε"],
        0,
        "Forma binaria o terminal única.",
    ),
    Q(
        "CYK decide w ∈ L(G) en tiempo:",
        ["O(n³ · |G|) para |w|=n", "O(n)", "Exponencial siempre", "O(log n)"],
        0,
        "Programación dinámica sobre subcadenas.",
    ),
    Q(
        "Para w = 'aabb', tabla CYK en celda (1,4) indica:",
        [
            "Si el substring completo es generable desde algún no terminal",
            "Solo el primer símbolo",
            "Longitud 0",
            "Error léxico",
        ],
        0,
        "Celda agrega intervalos [i,j] de la cadena.",
    ),
    Q(
        "{aⁿbⁿcⁿ | n≥0} no es libre de contexto por:",
        [
            "Necesita comparar tres contadores simultáneos",
            "Es regular",
            "Es finito",
            "CYK es O(n)",
        ],
        0,
        "PDA tiene una sola pila; no alcanza para tres bloques.",
    ),
    Q(
        "Simular derivación CFG con PDA típicamente:",
        [
            "Empuja RHS en reverso al leer expansión",
            "Usa ε solo",
            "No usa pila",
            "Lee la entrada al revés únicamente",
        ],
        0,
        "Construcción estándar top-down.",
    ),
    Q(
        "PDA determinista vs no determinista:",
        [
            "Determinista estricto es subclase propia",
            "Siempre equivalentes",
            "Igual que DFA",
            "Solo ND acepta regulares",
        ],
        0,
        "Hay CF que requieren no determinismo de pila.",
    ),
    Q(
        "Shift-reduce parser usa pila para:",
        [
            "Símbolos gramaticales y estados LR",
            "Solo tipos",
            "Hash de identificadores",
            "Bytecode",
        ],
        0,
        "Pila guía reducciones y shifts.",
    ),
    Q(
        "Depura CYK: celda (i,j) True pero S no aparece en (1,n). Conclusión:",
        ["w ∉ L(G) aunque haya subcadenas derivables", "w ∈ L", "Gramática regular", "Error lexer"],
        0,
        "Aceptación requiere S deriva w completo.",
    ),
]

PRO_QUIZ["8"] = [
    Q(
        "Problema de la parada es:",
        ["Indecidible", "NP-completo", "O(n)", "Regular"],
        0,
        "No existe algoritmo correcto y total que decida parada para todas las MT.",
    ),
    Q(
        "Jerarquía de Chomsky: tipo 3 ⊆ tipo 2 porque:",
        [
            "Toda CFG regular puede restringirse a forma regular",
            "Los regulares requieren pila",
            "Los CF son finitos",
            "MT ⊆ REG",
        ],
        0,
        "Gramáticas regulares son casos particulares de CFG.",
    ),
    Q(
        "Lenguaje recursivo (decidible) implica:",
        [
            "Existe MT que decide L y siempre para",
            "Solo enumeración",
            "Ser regular",
            "No tener complemento",
        ],
        0,
        "Decisión total y correcta para todo input.",
    ),
    Q(
        "Reducción de H a L muestra:",
        [
            "Si L fuera decidible entonces H sería decidible",
            "L es regular",
            "H es regular",
            "L ⊆ Σ*",
        ],
        0,
        "Esquema estándar de reducibilidad para indecidibilidad.",
    ),
    Q(
        "MT multi-cinta vs mono-cinta:",
        [
            "Mismo poder computacional",
            "Multi-cinta es más potente",
            "Mono-cinta decide parada",
            "Multi no lee entrada",
        ],
        0,
        "Simulación polinomial conserva computabilidad.",
    ),
    Q(
        "Universalidad Turing permite:",
        [
            "Interpretar ⟨M⟩, x en una MT fija U",
            "Eliminar CFG",
            "Optimizar LLVM",
            "Tokenizar",
        ],
        0,
        "Máquina universal simula codificaciones de otras máquinas.",
    ),
    Q(
        "¿Cuál problema es decidible?",
        [
            "¿DFA acepta la cadena vacía? (finito y mecánico)",
            "Equivalencia de dos MT arbitrarias",
            "Parada de MT general",
            "¿MT imprime 2? con entrada arbitraria",
        ],
        0,
        "Chequear δ*(q₀, ε)∈F es finito.",
    ),
    Q(
        "Tipo 1 (sensibles al contexto) respecto a tipo 2:",
        [
            "Incluye reglas con restricciones de contexto más allá de CFG pura",
            "Es igual a regular",
            "No existe",
            "Solo trivial",
        ],
        0,
        "Jerarquía estricta entre clases.",
    ),
    Q(
        "Depura argumento: «como no puedo diseñar DFA, el problema no existe». Error:",
        [
            "Indecidibilidad trata decidibilidad, no solo sintaxis regular",
            "DFA siempre existe",
            "MT no importa",
            "Chomsky no aplica",
        ],
        0,
        "Clases más allá de regulares siguen siendo bien definidas.",
    ),
    Q(
        "RE pero no recursivo implica:",
        [
            "Enumerables pero con MT que puede no parar en negativas",
            "Regulares",
            "Vacío",
            "Sin complemento enumerable",
        ],
        0,
        "Aceptación enumerativa ≠ decisión total.",
    ),
]

PRO_QUIZ["9"] = [
    Q(
        "Frontend del compilador agrupa:",
        [
            "Lexer, parser y análisis semántico",
            "Solo codegen",
            "Solo linker",
            "Optimización de loops exclusiva",
        ],
        0,
        "Análisis hasta IR/tabla de símbolos decorada.",
    ),
    Q(
        "Middle-end típicamente opera sobre:",
        ["IR con optimizaciones machine-independent", "Caracteres fuente", "Binario ejecutable final", "Solo comentarios"],
        0,
        "Transformaciones portables antes del backend.",
    ),
    Q(
        "¿Qué artefacto conecta parser con semántica?",
        ["AST/tabla de símbolos en construcción", "Archivo .o", "Regex del lexer", "Linker script"],
        0,
        "Estructura parseada alimenta chequeos.",
    ),
    Q(
        "Error recovery en parser debe:",
        [
            "Reportar y sincronizar para continuar diagnósticos",
            "Silenciar todos los errores",
            "Abortar sin mensaje",
            "Saltar codegen",
        ],
        0,
        "Múltiples errores por archivo en IDE.",
    ),
    Q(
        "Compilación separada por archivos requiere:",
        [
            "Objetos con símbolos exportados resueltos en enlace",
            "Un solo paso lexer",
            "Sin tablas",
            "CYK",
        ],
        0,
        "Linker resuelve referencias cruzadas.",
    ),
    Q(
        "LLVM IR como middle-end facilita:",
        [
            "Reusar optimizaciones y backends para varios lenguajes",
            "Eliminar lexer",
            "Ejecutar sin OS",
            "Solo regex",
        ],
        0,
        "Portabilidad y passes compartidos.",
    ),
    Q(
        "Depura pipeline: tokens correctos pero AST vacío. Fallo en:",
        ["Parser o activación del constructor de AST", "Linker", "Reg alloc", "SSA φ"],
        0,
        "Lexer OK; construcción sintáctica falló.",
    ),
    Q(
        "Opción `-O2` en gcc/clang afecta principalmente:",
        ["Passes de optimización sobre IR", "Longitud del lexer", "Charset", "Nombre del ejecutable"],
        0,
        "Niveles disparan conjuntos de optimizaciones.",
    ),
    Q(
        "Separación lexer/parser evita:",
        [
            "Mezclar reconocimiento de caracteres con gramática de tokens",
            "Cualquier tabla",
            "IR",
            "Diagnósticos",
        ],
        0,
        "Responsabilidades distintas y alfabeto distinto.",
    ),
    Q(
        "Diagnóstico con línea/columna proviene típicamente de:",
        ["Atributos de posición en tokens", "IR TAC", "Spill slots", "Opcode final"],
        0,
        "El lexer/parser propagan localización.",
    ),
]

PRO_QUIZ["10"] = [
    Q(
        "Token vs lexema:",
        [
            "Lexema es texto concreto; token es clase + atributos",
            "Son sinónimos",
            "Token es carácter único siempre",
            "Lexema es tipo enum",
        ],
        0,
        "Flujo interno abstrae patrones.",
    ),
    Q(
        "Regla longest-match resuelve:",
        [
            "'>' vs '>>' en operadores compuestos",
            "Ambigüedad CFG",
            "SSA",
            "Parada MT",
        ],
        0,
        "Prefiere lexema más largo válido.",
    ),
    Q(
        "Orden de reglas en lexer importa cuando:",
        [
            "Patrones se solapan y prioridad rompe empates",
            "No hay regex",
            "Σ vacío",
            "Solo números pares",
        ],
        0,
        "Primera regla ganadora tras longest-match.",
    ),
    Q(
        "Keyword `if` versus identificador `iffy`:",
        [
            "Clasificar ID luego filtrar tabla reservadas o patrón priorizado",
            "Dos lexers separados obligatorios",
            "No distinguibles",
            "Solo con CYK",
        ],
        0,
        "Estrategias estándar con tabla de palabras reservadas.",
    ),
    Q(
        "Literal mal cerrado `'abc` sin comilla final es:",
        ["Error léxico", "Error de parse", "Warning SSA", "Spill"],
        0,
        "Lexer detecta estado no terminal del autómata de literal.",
    ),
    Q(
        "DFA combinado de tokens se obtiene con:",
        [
            "Construcción de autómata producto/estado con prioridades",
            "CYK",
            "Parser LR",
            "Halting",
        ],
        0,
        "Simulación única sobre el archivo.",
    ),
    Q(
        "Espacios en blanco usualmente:",
        [
            "Se descartan o emiten token separado según diseño",
            "Detienen compilación",
            "Son terminales en CFG",
            "Generan IR",
        ],
        0,
        "Política del lenguaje.",
    ),
    Q(
        "Overflow al escanear INT_MAX+1:",
        [
            "Error léxico o semántico según política; lexer puede marcar rango",
            "Aceptar silenciosamente",
            "Parse shift",
            "φ-node",
        ],
        0,
        "Muchos compiladores reportan literal fuera de rango.",
    ),
    Q(
        "Complejidad del lexer sobre n caracteres:",
        ["O(n)", "O(n³)", "O(2ⁿ)", "O(n log n) siempre"],
        0,
        "Un paso por carácter con DFA.",
    ),
    Q(
        "Depura: lexer emite ID para '123abc'. Causa:",
        [
            "Regla NUM mal priorizada o no cubre el caso",
            "Parser LR",
            "Linker",
            "Register alloc",
        ],
        0,
        "Patrones deben clasificar prefijos numéricos vs identificadores.",
    ),
]

PRO_QUIZ["11"] = [
    Q(
        "Parser LL(1) consulta:",
        ["Siguiente token de lookahead", "Dos pilas de MT", "Solo semántica", "IR final"],
        0,
        "Un token de anticipación en la variante LL(1).",
    ),
    Q(
        "Conflicto shift/reduce en tabla LR indica:",
        [
            "Gramática no LR (o errores en construcción)",
            "Lexer falló",
            "Lenguaje no CF",
            "Tipos incompatibles",
        ],
        0,
        "Tabla inconsistente para la gramática.",
    ),
    Q(
        "FIRST(α) contiene:",
        [
            "Terminales que pueden iniciar derivaciones de α",
            "Todos los no terminales",
            "Follow de S",
            "Solo ε",
        ],
        0,
        "Conjunto predictivo clásico.",
    ),
    Q(
        "LALR difiere de LR(1) en:",
        [
            "Fusión de estados con kernels iguales",
            "Usar regex",
            "Eliminar pila",
            "Ser LL",
        ],
        0,
        "Tablas más compactas con posible conflicto residual controlado.",
    ),
    Q(
        "AST para `a+b*c` sin ambigüedad usa:",
        [
            "Gramática con niveles de precedencia o precedencias en parser",
            "Solo regex",
            "CYK manual",
            "DFA",
        ],
        0,
        "Multiplica más ajustado que suma.",
    ),
    Q(
        "Descenso recursivo: cada no terminal suele mapear a:",
        ["Una función de parsing", "Un opcode", "Un registro", "Un φ"],
        0,
        "Patrón pedagógico directo.",
    ),
    Q(
        "Acción reduce en LR significa:",
        [
            "Aplicar producción y reemplazar tope de pila por LHS",
            "Leer otro carácter",
            "Emitir asm",
            "Cerrar archivo",
        ],
        0,
        "Paso reduce según handle.",
    ),
    Q(
        "Depura: parse OK pero árbol plano para expresiones. Causa:",
        [
            "Gramática sin reflejar precedencia/asociatividad",
            "Lexer omitido",
            "SSA mal",
            "Linker",
        ],
        0,
        "Producciones planas generan AST incorrecto.",
    ),
    Q(
        "Item LR [A → α·β, a] anticipa:",
        [
            "Terminal viable siguiente en el contexto",
            "Solo ε",
            "Registro RAX",
            "Tipo int",
        ],
        0,
        "Información LR(1) para cerrar acciones.",
    ),
    Q(
        "Aceptación en parser LR ocurre cuando:",
        [
            "Se reduce a S y se consumió $ de entrada",
            "Lexer termina",
            "Spill ocurre",
            "φ insertado",
        ],
        0,
        "Condición estándar con sentinel.",
    ),
]

PRO_QUIZ["12"] = [
    Q(
        "Tabla de símbolos en scope anidado se implementa con:",
        [
            "Pila de tablas o árbol de scopes",
            "Solo hash global",
            "Pila LR",
            "Registros físicos",
        ],
        0,
        "Entrar/salir scope empuja/oculta niveles.",
    ),
    Q(
        "Shadowing de variable:",
        [
            "Declaración interna oculta homónima externa en su bloque",
            "Error siempre",
            "Igual que redefinición global ilegal",
            "Problema del linker",
        ],
        0,
        "Resolución por cadena de scopes.",
    ),
    Q(
        "Chequeo `x + true` en lenguaje tipado estático falla por:",
        [
            "Tipos incompatibles en la adición",
            "Lexer",
            "Parada MT",
            "Spill",
        ],
        0,
        "Reglas semánticas de operadores.",
    ),
    Q(
        "Atributos sintetizados:",
        [
            "Se calculan ascendiendo en el AST",
            "Vienen solo del padre",
            "Son tokens",
            "Son opcodes",
        ],
        0,
        "Información fluye de hijos a padre.",
    ),
    Q(
        "Binding de llamada foo(a,b) requiere:",
        [
            "Coincidencia de aridad y tipos de parámetros con firma",
            "Solo nombre",
            "Solo regex",
            "CYK",
        ],
        0,
        "Semántica de invocación.",
    ),
    Q(
        "Variable usada antes de declarar en mismo bloque:",
        ["Error semántico", "OK siempre", "Lexer error", "Linker"],
        0,
        "Reglas de orden de declaración del lenguaje.",
    ),
    Q(
        "Decoración del AST con tipos sirve para:",
        ["IR y codegen posteriores", "Solo formato", "Ejecutar regex", "DFA"],
        0,
        "Propagación hacia generación.",
    ),
    Q(
        "Depura: símbolo global no visible en función. Causa:",
        [
            "Scope no enlazó correctamente o falta `extern`/declaración",
            "Parser shift",
            "φ faltante",
            "Overflow literal",
        ],
        0,
        "Enlace entre tablas y política de visibilidad.",
    ),
    Q(
        "Conversión implícita int→float en suma es:",
        ["Regla de promoción en chequeo semántico", "LR action", "Token", "Spill"],
        0,
        "Coerciones definidas en estándar del lenguaje.",
    ),
    Q(
        "`return` fuera de función es:",
        ["Error semántico/contextual", "Lexer", "Optimización", "Opcode NOP"],
        0,
        "Restricción de estructura del programa.",
    ),
]

PRO_QUIZ["13"] = [
    Q(
        "TAC cuádrupla `(+, a, b, t1)` significa:",
        ["t1 = a + b", "saltar a t1", "definir función", "lexer"],
        0,
        "Formato de tres direcciones con destino explícito.",
    ),
    Q(
        "Temporales t1, t2 se introducen para:",
        [
            "Romper expresiones complejas en pasos evaluables",
            "Nombres de usuario",
            "Tokens",
            "Solo debug",
        ],
        0,
        "Traducción sistemática de expresiones.",
    ),
    Q(
        "SSA requiere:",
        [
            "Cada variable definida exactamente una vez por versión; φ en joins",
            "Sin saltos",
            "Sin temporales",
            "Solo regex",
        ],
        0,
        "Single static assignment con funciones φ.",
    ),
    Q(
        "φ(x1, x2) en un join:",
        [
            "Selecciona valor según rama de control ejecutada",
            "Suma operandos",
            "Lee memoria",
            "Es token",
        ],
        0,
        "Placeholder de merge de definiciones.",
    ),
    Q(
        "Traducción de `if (c) S` en IR incluye:",
        [
            "Salto condicional a etiquetas",
            "Solo opcode ret",
            "Lexer rule",
            "CYK",
        ],
        0,
        "Control flow explícito.",
    ),
    Q(
        "IR portátil permite:",
        [
            "Backend distinto para misma representación",
            "Eliminar semántica",
            "Evitar lexer",
            "Hacer regular el lenguaje",
        ],
        0,
        "Desacople máquina.",
    ),
    Q(
        "Depura IR: temporal usado antes de definir. Causa:",
        [
            "Orden de emisión incorrecto en traducción",
            "Spill",
            "Halting",
            "FIRST/FOLLOW",
        ],
        0,
        "Secuencia de cuádruplas debe respetar definiciones.",
    ),
    Q(
        "Activación de función en IR establece:",
        ["Marco/registros según convención", "Solo AST", "Regex", "DFA"],
        0,
        "Prologue y manejo de parámetros.",
    ),
    Q(
        "LLVM bitcode es ejemplo de:",
        ["IR intermedio optimizable", "Token", "Gramática", "Tabla FIRST"],
        0,
        "Representación serializable.",
    ),
    Q(
        "Bloque básico es:",
        [
            "Secuencia lineal sin saltos internos salvo al final",
            "Todo el programa",
            "Un token",
            "CYK celda",
        ],
        0,
        "Unidad estándar para análisis de flujo.",
    ),
]

PRO_QUIZ["14"] = [
    Q(
        "Constant folding 3*5 → 15:",
        ["Optimización algebraica local", "Error semántico", "Lexer", "Parsing"],
        0,
        "Evalúa en compile-time operaciones conocidas.",
    ),
    Q(
        "Dead code elimination necesita:",
        [
            "Análisis de liveness/def-use",
            "Solo regex",
            "CYK",
            "FIRST",
        ],
        0,
        "Eliminar instrucciones sin efecto observable.",
    ),
    Q(
        "CSE evita:",
        [
            "Recalcular la misma expresión en un bloque",
            "Todos los saltos",
            "Lexer",
            "Tabla de símbolos",
        ],
        0,
        "Reuse temporales para expresiones comunes.",
    ),
    Q(
        "Loop-invariant code motion mueve:",
        [
            "Instrucciones cuyos operandos no cambian en iteración",
            "Todo el loop fuera del programa",
            "Lexer adentro del loop",
            "Solo φ",
        ],
        0,
        "Reduce trabajo repetido.",
    ),
    Q(
        "Inlining trade-off:",
        [
            "Menos overhead de llamada pero más código",
            "Siempre reduce tamaño",
            "Impide optimizar",
            "Solo afecta lexer",
        ],
        0,
        "Balance tamaño vs velocidad.",
    ),
    Q(
        "Optimización no puede reordenar libremente si:",
        [
            "Hay efectos laterales u orden de excepciones visible",
            "Hay enteros",
            "Hay IR",
            "Hay DFA",
        ],
        0,
        "Semántica observable limita transformaciones.",
    ),
    Q(
        "Copy propagation tras SSA:",
        [
            "Reemplaza usos de copias por fuente original cuando seguro",
            "Elimina lexer",
            "Cambia API del SO",
            "Rompe tipos",
        ],
        0,
        "Simplifica grafo de def-use.",
    ),
    Q(
        "Depura: optimizador elimina printf «muerto» pero usuario lo necesitaba. Causa:",
        [
            "Análisis de efectos consideró la llamada sin efecto",
            "Parser LR",
            "φ mal",
            "Token",
        ],
        0,
        "Modelado de efectos secundarios conservador vs agresivo.",
    ),
    Q(
        "PGO usa:",
        [
            "Perfiles de ejecución para guiar decisiones",
            "Solo teoría de bombeo",
            "CYK",
            "NFA ε",
        ],
        0,
        "Datos de runtime en compilación.",
    ),
    Q(
        "Iterar passes hasta punto fijo:",
        [
            "Aplica optimizaciones hasta que no cambia IR",
            "Impide compilar",
            "Solo en lexer",
            "Es parsing",
        ],
        0,
        "Monotonía/no cambio estabiliza.",
    ),
]

PRO_QUIZ["15"] = [
    Q(
        "Calling convention define:",
        [
            "Qué registros/stack usan parámetros y quién preserva registros",
            "Solo tokens",
            "Gramática",
            "CYK",
        ],
        0,
        "ABI entre llamador y llamado.",
    ),
    Q(
        "Spill en asignación de registros:",
        [
            "Variable va a stack por falta de registradores libres",
            "Error fatal siempre",
            "Lexer",
            "Parse shift",
        ],
        0,
        "Memoria respaldo cuando el grafo de conflictos no cabe.",
    ),
    Q(
        "Activation record contiene:",
        [
            "Retorno, marco anterior, locales y temporales spill",
            "Solo lexer buffer",
            "Tabla LR",
            "Solo φ",
        ],
        0,
        "Layout de pila por invocación.",
    ),
    Q(
        "Prologue de función:",
        [
            "Prepara marco de pila y guarda registros callee-saved usados",
            "Lexifica entrada",
            "Ejecuta CYK",
            "Elimina IR",
        ],
        0,
        "Preámbulo antes del cuerpo.",
    ),
    Q(
        "Pattern matching de instrucciones mapea:",
        [
            "Árbol IR/tabla a opcodes de CPU",
            "Tokens a lexer",
            "MT a regex",
            "FIRST a FOLLOW",
        ],
        0,
        "Selección de código en backend.",
    ),
    Q(
        "Salto relocatable en .text:",
        [
            "Offset ajustado por linker al cargar",
            "Valor final fijo en lexer",
            "Solo IR",
            "φ incondicional",
        ],
        0,
        "Relocalización de símbolos.",
    ),
    Q(
        "Alineación de stack en x86-64 System V:",
        [
            "SP múltiplo de 16 antes de `call`",
            "Sin restricción",
            "Solo 4 bytes",
            "Lexer rule",
        ],
        0,
        "Requisito ABI común.",
    ),
    Q(
        "Depura: crash al llamar C desde codegen. Causa frecuente:",
        [
            "Convención de registro/stack incorrecta",
            "CYK",
            "Bombeo",
            "Ambigüedad CFG",
        ],
        0,
        "Desajuste ABI rompe calling.",
    ),
    Q(
        "Callee-saved registros:",
        [
            "Preservados por la función llamada si los modifica",
            "Ignorados siempre",
            "Solo lexer",
            "Tokens",
        ],
        0,
        "Responsabilidad del callee.",
    ),
    Q(
        "Validación final del backend:",
        [
            "Ensamblar/enlazar y ejecutar prueba golden",
            "Solo leer IR",
            "FIRST/FOLLOW",
            "ε-clausura",
        ],
        0,
        "Prueba end-to-end del pipeline.",
    ),
]


def validate(data: dict[str, list[dict]]) -> None:
    for mid in map(str, range(1, 16)):
        if mid not in data:
            raise SystemExit(f"Missing module {mid}")
        qs = data[mid]
        if len(qs) != 10:
            raise SystemExit(f"Module {mid} has {len(qs)} questions, expected 10")
        for q in qs:
            if "Según el temario" in q["question"]:
                raise SystemExit(f"Forbidden template in {mid}")
            if len(q["options"]) != 4:
                raise SystemExit(f"Bad options in {mid}: {q['question'][:40]}")


def main() -> None:
    validate(PRO_QUIZ)
    OUT.write_text(json.dumps(PRO_QUIZ, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} ({len(OUT.read_text().splitlines())} lines)")


if __name__ == "__main__":
    main()
