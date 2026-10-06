import React from 'react';

interface MathModuleExtrasProps {
  moduleId: number;
}

type Card = { l: string; t: string; c: string };

const LOGIC_CARDS: Card[] = [
  { l: 'P → Q', t: 'Implicación', c: 'Falsa solo si P=V y Q=F' },
  { l: '¬(P ∧ Q)', t: 'De Morgan I', c: 'Equivalente a ¬P ∨ ¬Q' },
  { l: 'P ∨ ¬P', t: 'Tautología', c: 'Verdadera para todo valor de P' },
  { l: 'P ∧ ¬P', t: 'Contradicción', c: 'Falsa para todo valor de P' },
  { l: 'P ⊕ Q', t: 'XOR', c: 'Verdadera si P y Q difieren' },
  { l: 'P ↔ Q', t: 'Bicondicional', c: 'Verdadera si P y Q son iguales' },
];

const SET_CARDS: Card[] = [
  { l: 'A ∪ B', t: 'Unión', c: 'Elementos en A o en B (SQL OR)' },
  { l: 'A ∩ B', t: 'Intersección', c: 'Elementos en ambos (INNER JOIN)' },
  { l: 'A × B', t: 'Producto', c: 'Pares ordenados (CROSS JOIN)' },
  { l: 'A − B', t: 'Diferencia', c: 'En A pero no en B (EXCEPT)' },
  { l: 'A ⊆ B', t: 'Subconjunto', c: 'Todo elemento de A está en B' },
  { l: '|A|', t: 'Cardinalidad', c: 'Número de elementos del conjunto' },
];

const NUMERIC_CARDS: Card[] = [
  { l: '0b1010', t: 'Binario', c: 'Base 2: cada dígito es potencia de 2' },
  { l: '0xFF', t: 'Hexadecimal', c: 'Base 16: compacto para bytes (255)' },
  { l: '~x', t: 'NOT bitwise', c: 'Invierte todos los bits del entero' },
  { l: 'x << 1', t: 'Shift left', c: 'Multiplica por 2 en enteros' },
  { l: 'x & mask', t: 'AND bitwise', c: 'Extrae bits específicos (flags)' },
  { l: 'C2', t: 'Complemento 2', c: 'Representación de enteros con signo' },
];

const GRAPH_CARDS: Card[] = [
  { l: 'V, E', t: 'Grafo', c: 'Vértices y aristas que modelan redes' },
  { l: 'deg(v)', t: 'Grado', c: 'Número de aristas incidentes a v' },
  { l: 'BFS', t: 'Recorrido', c: 'Nivel por nivel (cola)' },
  { l: 'DFS', t: 'Recorrido', c: 'Profundidad primero (pila)' },
  { l: 'DAG', t: 'Acíclico', c: 'Sin ciclos: orden topológico' },
  { l: 'MST', t: 'Árbol mínimo', c: 'Conecta todos con peso mínimo' },
];

const MATRIX_CARDS: Card[] = [
  { l: 'A·B', t: 'Producto', c: 'Filas × columnas: base de GPU GEMM' },
  { l: 'Aᵀ', t: 'Transpuesta', c: 'Intercambia filas y columnas' },
  { l: 'det(A)', t: 'Determinante', c: 'Volumen orientado de transformación' },
  { l: 'λ, v', t: 'Eigen', c: 'Av · v = λv: PCA y estabilidad' },
  { l: 'ℝⁿ', t: 'Espacio vectorial', c: 'Embeddings y features en ML' },
  { l: '4×4', t: 'Transform 3D', c: 'Rotación + traslación en gráficos' },
];

const CALC_CARDS: Card[] = [
  { l: "f'(x)", t: 'Derivada', c: 'Tasa de cambio instantánea' },
  { l: '∇f', t: 'Gradiente', c: 'Vector de derivadas parciales' },
  { l: 'min f', t: 'Optimización', c: 'Descenso de gradiente en ML' },
  { l: '∫f dx', t: 'Integral', c: 'Área bajo la curva / acumulado' },
  { l: 'lim', t: 'Límite', c: 'Comportamiento cuando x → a' },
  { l: 'convex', t: 'Convexidad', c: 'Mínimos globales en optimización' },
];

const CRYPTO_CARDS: Card[] = [
  { l: 'C(n,k)', t: 'Combinaciones', c: 'n! / (k!(n−k)!) sin orden' },
  { l: 'P(n,k)', t: 'Permutaciones', c: 'n! / (n−k)! con orden' },
  { l: 'mod p', t: 'Aritmética modular', c: 'Base de RSA y Diffie-Hellman' },
  { l: 'gcd(a,b)', t: 'MCD', c: 'Algoritmo de Euclides' },
  { l: 'hash', t: 'Función hash', c: 'Unidireccional: integridad de datos' },
  { l: '2ⁿ', t: 'Exponencial', c: 'Fuerza bruta vs clave larga' },
];

function CardGrid({ title, subtitle, icon, cards, accent }: {
  title: string;
  subtitle: string;
  icon: string;
  cards: Card[];
  accent: string;
}) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-lg shadow-lg font-mono`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
      </div>
      <div className="card-grid-responsive">
        {cards.map(card => (
          <div
            key={card.l}
            className="group p-3 sm:p-5 rounded-2xl border bg-white dark:bg-slate-800/50 border-indigo-200 dark:border-indigo-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0"
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-black block text-base sm:text-lg mb-1 font-mono break-words">
              {card.l}
            </span>
            <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
            <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block">{card.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const MathModuleExtras: React.FC<MathModuleExtrasProps> = ({ moduleId }) => {
  if (moduleId === 1) {
    return (
      <CardGrid
        title="Tabla de Verdad y Lógica Proposicional"
        subtitle="Fundamentos booleanos del procesador y del software"
        icon="∧"
        cards={LOGIC_CARDS}
        accent="from-indigo-600 to-violet-700"
      />
    );
  }
  if (moduleId === 2) {
    return (
      <CardGrid
        title="Teoría de Conjuntos → SQL"
        subtitle="Cada operación de conjuntos tiene su equivalente relacional"
        icon="∪"
        cards={SET_CARDS}
        accent="from-blue-600 to-indigo-700"
      />
    );
  }
  if (moduleId === 4) {
    return (
      <CardGrid
        title="Representación Numérica en Memoria"
        subtitle="Binario, hexadecimal y operaciones a nivel de bits"
        icon="0x"
        cards={NUMERIC_CARDS}
        accent="from-cyan-600 to-teal-700"
      />
    );
  }
  if (moduleId === 5) {
    return (
      <CardGrid
        title="Teoría de Grafos Aplicada"
        subtitle="Modelado de redes, rutas y dependencias de software"
        icon="G"
        cards={GRAPH_CARDS}
        accent="from-emerald-600 to-teal-700"
      />
    );
  }
  if (moduleId === 6) {
    return (
      <CardGrid
        title="Álgebra Lineal en Computación"
        subtitle="Matrices, vectores y transformaciones 3D"
        icon="M"
        cards={MATRIX_CARDS}
        accent="from-purple-600 to-violet-700"
      />
    );
  }
  if (moduleId === 9) {
    return (
      <CardGrid
        title="Cálculo y Optimización"
        subtitle="Derivadas, gradientes y mínimos en software e IA"
        icon="∫"
        cards={CALC_CARDS}
        accent="from-amber-600 to-orange-700"
      />
    );
  }
  if (moduleId === 10) {
    return (
      <CardGrid
        title="Combinatoria y Criptografía"
        subtitle="Conteo, modular arithmetic y seguridad"
        icon="🔐"
        cards={CRYPTO_CARDS}
        accent="from-rose-600 to-pink-700"
      />
    );
  }

  return null;
};

export default MathModuleExtras;
