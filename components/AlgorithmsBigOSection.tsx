import React from 'react';
import BigOChart from './BigOChart';

const BIG_O_CARDS = [
  { l: 'O(1)', t: 'Constante', c: 'Acceso por índice en un arreglo', color: 'border-emerald-200 dark:border-emerald-800/60 hover:shadow-emerald-500/10' },
  { l: 'O(log n)', t: 'Logarítmica', c: 'Búsqueda Binaria', color: 'border-blue-200 dark:border-blue-800/60 hover:shadow-blue-500/10' },
  { l: 'O(n)', t: 'Lineal', c: 'Bucle simple (búsqueda lineal)', color: 'border-amber-200 dark:border-amber-800/60 hover:shadow-amber-500/10' },
  { l: 'O(n log n)', t: 'Cuasilineal', c: 'Merge Sort', color: 'border-violet-200 dark:border-violet-800/60 hover:shadow-violet-500/10' },
  { l: 'O(n²)', t: 'Cuadrática', c: 'Bucles anidados', color: 'border-orange-200 dark:border-orange-800/60 hover:shadow-orange-500/10' },
  { l: 'O(2ⁿ)', t: 'Exponencial', c: 'Fibonacci recursivo', color: 'border-rose-200 dark:border-rose-800/60 hover:shadow-rose-500/10' },
];

const AlgorithmsBigOSection: React.FC = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/25">
        📊
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
          Mapa Visual de Complejidad
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Compara cómo crece el costo cuando aumenta el tamaño de entrada
        </p>
      </div>
    </div>
    <BigOChart />
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {BIG_O_CARDS.map(card => (
        <div
          key={card.l}
          className={`group p-3 sm:p-5 rounded-2xl border bg-white dark:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-0 ${card.color}`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-black block text-lg sm:text-2xl mb-1 break-words">
            {card.l}
          </span>
          <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
          <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block font-mono italic">{card.c}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AlgorithmsBigOSection;
