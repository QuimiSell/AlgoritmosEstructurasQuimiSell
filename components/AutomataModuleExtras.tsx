import React from 'react';
import CourseCardGrid, { CourseCard } from './shared/CourseCardGrid';

const FORMAL: CourseCard[] = [
  { l: 'Σ', t: 'Alfabeto', c: 'Conjunto finito de símbolos (ej: {0,1})' },
  { l: 'w', t: 'Cadena', c: 'Secuencia finita de símbolos de Σ' },
  { l: 'ε', t: 'Cadena Vacía', c: 'Cadena de longitud |ε| = 0' },
  { l: 'Σ*', t: 'Estrella de Kleene', c: 'Todas las cadenas posibles (incluye ε)' },
  { l: 'Σ+', t: 'Clausura Positiva', c: 'Cadenas de longitud ≥ 1' },
  { l: 'L ⊆ Σ*', t: 'Lenguaje Formal', c: 'Subconjunto de cadenas de Σ*' },
];

const AUTOMATA: CourseCard[] = [
  { l: 'Q, δ, q₀', t: 'DFA', c: 'Estados, transición y estado inicial' },
  { l: 'NFA', t: 'No determinista', c: 'Múltiples transiciones por símbolo' },
  { l: 'ε-trans', t: 'NFA-ε', c: 'Transiciones sin consumir entrada' },
  { l: 'regex', t: 'Kleene', c: 'Equivalencia con autómatas finitos' },
  { l: 'pump', t: 'Pumping Lemma', c: 'Prueba de no-regularidad' },
  { l: 'min DFA', t: 'Minimización', c: 'Autómata mínimo equivalente' },
];

const COMPILER: CourseCard[] = [
  { l: 'Lexer', t: 'Análisis léxico', c: 'Tokeniza el código fuente' },
  { l: 'Parser', t: 'Sintáctico', c: 'Construye AST según gramática' },
  { l: 'Semantic', t: 'Semántico', c: 'Tabla de símbolos y tipos' },
  { l: 'IR/TAC', t: 'Intermedio', c: 'Código de tres direcciones' },
  { l: 'Optimize', t: 'Optimización', c: 'Dead code, constant folding' },
  { l: 'Codegen', t: 'Objeto', c: 'Assembly o bytecode final' },
];

const AutomataModuleExtras: React.FC<{ moduleId: number }> = ({ moduleId }) => {
  if (moduleId === 1) return <CourseCardGrid title="Lenguajes Formales" subtitle="Alfabetos, cadenas y la jerarquía de Chomsky" icon="Σ" cards={FORMAL} accent="from-cyan-600 to-teal-700" borderClass="border-cyan-200 dark:border-cyan-900/50" />;
  if (moduleId >= 2 && moduleId <= 5) return <CourseCardGrid title="Autómatas Finitos" subtitle="DFA, NFA, regex y lema del bombeo" icon="δ" cards={AUTOMATA} accent="from-blue-600 to-indigo-700" borderClass="border-blue-200 dark:border-blue-900/50" />;
  if (moduleId >= 9) return <CourseCardGrid title="Pipeline del Compilador" subtitle="De texto plano a código ejecutable" icon="→" cards={COMPILER} accent="from-orange-600 to-amber-700" borderClass="border-orange-200 dark:border-orange-900/50" />;
  return null;
};

export default AutomataModuleExtras;
