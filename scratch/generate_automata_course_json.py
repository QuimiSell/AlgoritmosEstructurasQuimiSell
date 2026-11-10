#!/usr/bin/env python3
"""Generate moduleItems.json and proQuiz.json for automataCompiler course."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "courses" / "automataCompiler"

MODULE_ITEMS: dict[str, list[str]] = {
    "1": [
        "Alfabeto Σ: conjunto finito no vacío de símbolos; distinguir símbolo de cadena w ∈ Σ*.",
        "Longitud |w|, cadena vacía ε como neutro de concatenación: wε = εw = w.",
        "Σ* versus Σ+: clausura de Kleene incluye ε; Σ+ = Σ* \\ {ε} si Σ ≠ ∅.",
        "Lenguaje formal L ⊆ Σ*: conjunto (finito o infinito); ∅ ≠ {ε}.",
        "Operaciones algebraicas: unión, concatenación de lenguajes L₁L₂ y estrella L*.",
        "Conteo: |Σ|^k cadenas de longitud exacta k; Σ* es infinito pero enumerable.",
        "Prefijos, sufijos y factores: vocabulario para bombeo y análisis de protocolos.",
        "Modelar texto fuente como cadena sobre bytes/ASCII antes de tokenizar.",
        "Validar pertenencia char a Σ en lexers para rechazar símbolos fuera del alfabeto.",
    ],
    "2": [
        "DFA como 5-tupla M = (Q, Σ, δ, q₀, F): función total δ : Q × Σ → Q.",
        "Interpretación extendida δ* sobre cadenas; aceptación cuando δ*(q₀, w) ∈ F.",
        "Tabla de transiciones: implementación como dict anidado o matriz indexada.",
        "Lenguaje L(M) = {w | δ*(q₀, w) ∈ F}; equivalencia entre definición y simulación.",
        "Estados trampa y minimización conceptual: reducir filas redundantes en la tabla.",
        "Diseño por casos: acumular paridad, sufijos o contadores módulo n en Q.",
        "DFA y reconocimiento en O(n) tiempo y O(1) espacio extra (solo estado actual).",
        "Producto cartesiano de autómatas para intersección de lenguajes regulares.",
        "Diferencia DFA vs NFA: δ debe ser determinista y total en toda entrada válida.",
    ],
    "3": [
        "NFA: δ : Q × (Σ ∪ {ε}) → P(Q); varios estados activos en paralelo.",
        "ε-transiciones consumen entrada vacía; cierre ε-clausura antes de leer símbolos.",
        "Algoritmo ε-clausura con pila/DFS sobre aristas ε en el grafo de estados.",
        "Construcción de subconjuntos: estados del DFA son subconjuntos de Q del NFA.",
        "Blow-up exponencial |2^Q| en el peor caso al convertir NFA → DFA.",
        "NFA adecuado para unión e intersección «naturales» vía ε y nuevos estados.",
        "Simulación on-the-fly del NFA sin materializar el DFA completo.",
        "Determinización preserva el lenguaje aceptado: L(NFA) = L(DFA equivalente).",
        "Tablas δ con conjuntos en Python (frozenset) como claves de estados compuestos.",
    ],
    "4": [
        "Sintaxis regex: literales, concatenación implícita, |, *, +, ?, paréntesis.",
        "Semántica como lenguaje sobre Σ; precedencia: estrella > concatenación > unión.",
        "Teorema de Kleene: equivalencia regex, DFA y NFA sobre lenguajes regulares.",
        "Construcción de Thompson: fragmentos NFA-ε por operador con conteos de estados.",
        "Equivalencia regex → NFA (Thompson) y DFA → regex (eliminación de estados).",
        "Operadores POSIX vs teóricos: greedy backtracking versus autómata en motores.",
        "Identificadores y literales numéricos como patrones regulares en especificación léxica.",
        "Límites: no expresar balanceo de paréntesis anidados arbitrario solo con regex.",
        "Optimización de NFA ε-reducción antes de determinizar en compiladores de patrones.",
    ],
    "5": [
        "Pumping lemma para regulares: ∃p tal que |w| ≥ p ⇒ w = xyz con |xy| ≤ p, |y| ≥ 1.",
        "Condición de bombeo: ∀i ≥ 0, xyⁱz ∈ L; contradicción al bombar fuera del lenguaje.",
        "Elección de w adverso (pumping length p) y descomposición forzada en la porción xyc.",
        "Casos i = 0 o i = 2 para colapsar o duplicar símbolos estratégicos.",
        "Demostrar L = {aⁿbⁿ} no regular: y solo puede contener a's rompiendo balance.",
        "Palíndromos sobre {a,b} y lenguajes con dependencias entre posiciones distantes.",
        "Diferencia necesidad vs suficiencia: bombeo caracteriza regulares (conversión completa).",
        "Errores: asumir |y| ≤ p global o olvidar verificar i arbitrario en la contradicción.",
        "Uso en diseño: si bombeo falla, buscar CFG/PDA en lugar de más estados DFA.",
    ],
    "6": [
        "CFG G = (V, Σ, P, S): producciones A → α con A ∈ V y α ∈ (V ∪ Σ)*.",
        "Derivación leftmost/rightmost; árbol de derivación como estructura de análisis.",
        "Lenguaje generado L(G) por cadenas de terminales derivables desde S.",
        "Ambigüedad: múltiples árboles para la misma cadena; impacto en parseo declarativo.",
        "Eliminación de ambigüedad en expresiones (precedencia y asociatividad).",
        "Formas normales (FNC paso adelante): facilitan CYK y demostraciones.",
        "Lexer entrega tokens; CFG define sintaxis sobre alfabeto de tokens, no caracteres sueltos.",
        "Verificación de pertenencia por búsqueda guiada versus enumeración de Σ^n.",
        "Gramáticas recursivas izquierda/derecha y su relación con parsers LL/LR.",
    ],
    "7": [
        "PDA como 7-tupla con pila Γ; transición depende de tope y símbolo de entrada (o ε).",
        "Aceptación por pila vacía o estado final; L libre de contexto = L aceptado por PDA.",
        "Correspondencia CFG ↔ PDA: simular derivaciones con símbolos en la pila.",
        "Forma normal de Chomsky (CNF): A → BC o A → a; longitud derivación acotada.",
        "Algoritmo CYK en O(n³|G|): tabla booleana por subcadenas w[i..j].",
        "L = {aⁿbⁿcⁿ} no CF; separación de capacidades respecto a regulares.",
        "PDA determinista vs no determinista: subfamilia estricta en algunos lenguajes.",
        "Uso de pila en parsers shift-reduce para emparejar delimitadores anidados.",
        "Limitaciones CYK: útil teórico; LL/LR dominan en compiladores por eficiencia lineal.",
    ],
    "8": [
        "Máquina de Turing: cinta infinita, cabezal, transiciones δ(q, a) → (q', b, M).",
        "Problema de la parada (halting): no existe MT que decida parada para toda MT-M.",
        "Diagonal de Cantor y reducción para pruebas de indecidibilidad.",
        "Jerarquía de Chomsky: tipo 3 (regular), 2 (CF), 1 (CS), 0 (RE) y contenciones.",
        "Lenguajes recursivamente enumerables vs recursivos (decidibles).",
        "MT multi-cinta y simuladores: constantes en tiempo, mismo poder expresivo.",
        "Límites de optimización estática: análisis exacto de flujo puede ser indecidible.",
        "Universalidad: MT U que interpreta codificaciones ⟨M⟩, w de otras máquinas.",
        "Conexión práctica: reconocer cuándo un analizador no puede ser siempre correcto y total.",
    ],
    "9": [
        "Fases: análisis (front), optimización intermedia (middle), generación (back).",
        "Interfaz entre fases: árbol, tabla de símbolos, IR, mapas de constantes.",
        "Manejo de errores recovery por fase sin abortar compilación prematuramente.",
        "Passes múltiples: semántica después de parser; codegen después de optimizar IR.",
        "Driver del compilador: orquestación, flags, archivos objeto y enlazado posterior.",
        "Formatos intermedios portables (LLVM bitcode, stack machine) versus TAC ad hoc.",
        "Separación de concerns: lexer no conoce tipos; parser no emite asm directamente.",
        "Tablas y diagnósticos: filas/columnas de error ligadas al AST o tokens.",
        "Pipeline incremental y compilación por unidades (módulos) en toolchains reales.",
    ],
    "10": [
        "Lexema vs token: patrón en fuente versus clase + atributos en flujo interno.",
        "Autómatas y regex en especificación declarativa de tokens (Flex, lexer hand-written).",
        "Prioridad y regla longest-match para resolver conflictos entre patrones solapados.",
        "Manejo de espacios, comentarios y directivas como tokens o skip handlers.",
        "Atributos sintácticos en token: valor literal, posición (línea/columna) para errores.",
        "Buffer de entrada y punteros sentinela; no retroceder más allá del lexema actual.",
        "Keywords: tabla reservadas versus reconocer ID y filtrar por hash.",
        "Errores léxicos: carácter ilegal, literal mal cerrado, overflow de entero en scan.",
        "Complejidad lineal O(n) en longitud del archivo con DFA de token combinado.",
    ],
    "11": [
        "Parser predictive vs shift-reduce; token lookahead k en LL(k) y LR(k).",
        "FIRST/FOLLOW y tabla LL(1); conflictos indican gramática no LL(1).",
        "Construcción de tabla LR con estados de item sets y acciones shift/reduce/accept.",
        "LALR: fusión de estados LR(1) para tablas compactas en yacc/Bison.",
        "AST versus árbol de derivación concreto: nódalos abstractos sin símbolos ε.",
        "Precedencia de operadores vía niveles de producción o precedencia declarada.",
        "Errores syntax: panic mode, phrase recovery, y reporting con expectativas.",
        "Descenso recursivo: una función por no terminal; claro en laboratorios educativos.",
        "Validar que el flujo de tokens satisface la gramática antes de semántica.",
    ],
    "12": [
        "Ámbitos anidados: stack de tablas de símbolos o árbol de scopes.",
        "Entradas: nombre, tipo, categoría (var/func), offset, dirección para codegen.",
        "Verificación de tipos: compatibilidad en asignaciones, llamadas y conversiones.",
        "Reglas semánticas en atributos sintetizados/heredados o visitas al AST.",
        "Binding: resolver identificadores a declaraciones únicas en cadena de scopes.",
        "Comprobación de aridad y tipos en llamadas; firma de funciones sobrecargadas.",
        "Análisis de flujo de control elemental: return en funciones, break/continue en bucles.",
        "Errores semánticos no capturados en parse: tipos, variables no declaradas, shadowing.",
        "Decorar AST con tipos y direcciones para fases de IR y codegen.",
    ],
    "13": [
        "IR como representación independiente de CPU y sintaxis superficial.",
        "TAC: cuádruplas (op, arg1, arg2, result) o tríadas con punteros compartidos.",
        "Temporales generados por traducción de expresiones en orden de evaluación.",
        "SSA: cada asignación define un nombre único; φ-nodos en uniones de control.",
        "Formas de procedimientos: activation records, parámetros en IR de llamadas.",
        "Traducción de if/while: etiquetas, saltos condicionales y bloques básicos.",
        "Literales y direcciones de variables globales/locales en operandos del IR.",
        "Verificar IR antes de optimizar: SSA inconsistente o temporales no definidos.",
        "Puente a LLVM: mismo rol conceptual que TAC del laboratorio del curso.",
    ],
    "14": [
        "Optimización local en bloque básico: DAG, plegado de constantes, algebra.",
        "Eliminación de código muerto: definiciones no usadas tras análisis de liveness.",
        "Propagación de constantes y copias (copy propagation) en SSA.",
        "Common subexpression elimination (CSE) con disponibilidad de expresiones.",
        "Loop-invariant code motion y desenrollado limitado por costo/tamaño.",
        "Inlinining: trade-off tamaño código vs eliminar overhead de llamada.",
        "Preservar semántica observable: orden de efectos secundarios y excepciones.",
        "Passes iterativos hasta punto fijo o presupuesto de compilación.",
        "Profiling guiado (PGO) versus heurísticas estáticas en optimizadores industriales.",
    ],
    "15": [
        "Selección de instrucciones: matching de patrones IR a opcode de la arquitectura.",
        "Asignación de registros: grafo de conflictos, spill a stack cuando se agotan.",
        "Calling conventions: caller/callee-saved, paso de parámetros en registros o stack.",
        "Activation record: return address, marco de pila, variables locales alineadas.",
        "Prologue/epilogue de funciones y restauración de registros preservados.",
        "Emisión de etiquetas y saltos relocatables para ensamblador o linker.",
        "Datos en secciones .text/.data; alineación y constantes embebidas en objeto.",
        "ABI del SO: respetar convención en llamadas a libc y símbolos exportados.",
        "Validar salida con ensamblador y prueba de ejecutable end-to-end.",
    ],
}


def q(question: str, options: list[str], answer_index: int, explanation: str) -> dict:
    assert len(options) == 4
    assert 0 <= answer_index <= 3
    return {
        "question": question,
        "options": options,
        "answerIndex": answer_index,
        "explanation": explanation,
    }


PRO_QUIZ: dict[str, list[dict]] = {
    "1": [
        q(
            "Sea Σ = {0,1}. ¿Cuál conjunto coincide exactamente con Σ*?",
            [
                "Todas las cadenas finitas sobre {0,1}, incluyendo ε",
                "Cadenas de longitud ≥ 1 sobre {0,1}",
                "Solo cadenas con número par de símbolos",
                "El conjunto {ε, 0, 1} únicamente",
            ],
            0,
            "Por definición Σ* incluye todas las longitudes finitas y la cadena vacía; Σ+ excluye ε.",
        ),
        q(
            "Si |Σ| = 3, ¿cuántas cadenas distintas de longitud exactamente 2 existen?",
            ["6", "9", "3", "8"],
            1,
            "Hay |Σ|^k posiciones independientes: 3² = 9.",
        ),
        q(
            "¿Cuál afirmación sobre el lenguaje vacío ∅ y {ε} es correcta?",
            [
                "∅ no contiene cadenas; {ε} contiene la cadena vacía",
                "Son el mismo conjunto",
                "∅ contiene ε pero no otros símbolos",
                "{ε} es el conjunto sin elementos",
            ],
            0,
            "∅ ⊆ Σ* pero no tiene elementos; {ε} tiene un único miembro de longitud 0.",
        ),
        q(
            "Para w = 'ab' y w₂ = 'cd', ¿qué representa w₁w₂ en notación formal?",
            ["Concatenación de cadenas de longitud 4", "Unión de lenguajes", "Potencia de Kleene", "El símbolo 'ac'"],
            0,
            "La concatenación pega símbolos: 'ab'·'cd' = 'abcd', longitud 4.",
        ),
        q(
            "Dado L₁ = {a} y L₂ = {b}, ¿qué es L₁L₂?",
            ["{ab}", "{a, b}", "{ε, ab}", "{a} ∪ {b}"],
            0,
            "Concatenación de lenguajes: una cadena de cada conjunto → solo 'ab'.",
        ),
        q(
            "Un compilador rechaza el byte 0xFF en un fuente «ASCII puro». ¿Qué condición formal modela?",
            [
                "Pertenencia w ∈ Σ* con Σ finito elegido del proyecto",
                "Que w ∈ Σ+ obligatoriamente",
                "Que w sea regular",
                "Que w tenga longitud mínima 1",
            ],
            0,
            "Cada carácter debe pertenecer al alfabeto Σ acordado; fuera de Σ rompe w ∈ Σ*.",
        ),
        q(
            "¿Por qué Σ^0 = {ε} en la construcción inductiva de Σ*?",
            [
                "Hay exactamente una cadena de longitud 0",
                "Σ^0 es el alfabeto base",
                "Incluye todos los símbolos de Σ",
                "Es igual a Σ^+",
            ],
            0,
            "Única cadena con cero símbolos es ε; define el caso base de la unión ⋃ Σ^k.",
        ),
        q(
            "Traza: en Python, ¿qué devuelve len('')?",
            ["0", "1", "Error", "None"],
            0,
            "La cadena vacía tiene longitud 0, formalmente |ε| = 0.",
        ),
        q(
            "Si L = {ε, 0, 00} y M = {1}, ¿qué elementos tiene LM?",
            ["{1, 01, 001}", "{1}", "{ε, 1}", "{01, 001}"],
            0,
            "Cada w₁ ∈ L concatena con único w₂='1': ε1='1', 01, 001.",
        ),
        q(
            "¿Cuál propiedad falla en general para la concatenación de cadenas?",
            ["Conmutatividad", "Asociatividad", "Existencia de ε neutro", "Finitud de resultado si entradas son finitas"],
            0,
            "'ab' ≠ 'ba'; las otras tres propiedades sí se cumplen.",
        ),
    ],
    "2": [
        q(
            "En un DFA M = (Q, Σ, δ, q₀, F), ¿qué exige que δ sea función total?",
            [
                "Para todo q ∈ Q y a ∈ Σ existe único δ(q,a) ∈ Q",
                "Para todo q existe al menos un a con transición",
                "Solo estados en F tienen transiciones salientes",
                "δ acepta cadenas completas en un paso",
            ],
            0,
            "Totalidad: cada par (estado, símbolo) tiene destino único; base de determinismo.",
        ),
        q(
            "DFA sobre {0,1} que acepta cadenas con número par de 1s (ε incluida). ¿Estado final tras '1101'?",
            ["Acepta (par de unos)", "Rechaza", "Error de simulación", "Depende de orden de lectura"],
            0,
            "Contamos tres 1s en '1101' → impar → si paridad en F para pares, rechaza; trace: 1,1,0,1 son 3 unos → impar, NO acepta para par. Fix question - 1101 has 3 ones odd - answer should be reject. Let me fix - the options say "Acepta" at index 0. I'll change question to 1100 which has 2 ones.",
        ),
    ],
}

# Fix module 2 question 2 - I accidentally left broken text. Regenerate module 2 quiz fully in script.
# I'll complete the rest of PRO_QUIZ in the file - the write was truncated. Let me read and complete via a second approach: write full JSON files using extended Python in shell.
