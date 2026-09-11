import React from 'react';
import AlgorithmsBigOSection from './AlgorithmsBigOSection';
import BigOChart from './BigOChart';

interface ComplexityModuleExtrasProps {
  moduleId: number;
}

const NOTATION_CARDS = [
  { l: 'O(g(n))', t: 'Cota superior', c: 'El algoritmo no crece más rápido que g' },
  { l: 'Ω(g(n))', t: 'Cota inferior', c: 'El algoritmo crece al menos como g' },
  { l: 'Θ(g(n))', t: 'Cota ajustada', c: 'O y Ω coinciden: crecimiento exacto' },
];

const AI_FLOPS_CARDS = [
  { l: 'Dense', t: 'Capa fully-connected', c: 'FLOPs ≈ 2 × batch × in × out' },
  { l: 'Conv2D', t: 'Convolución', c: 'FLOPs ∝ kernel² × canales × spatial' },
  { l: 'Attention', t: 'Self-Attention', c: 'O(n² · d) sin optimizar' },
  { l: 'Backprop', t: 'Entrenamiento', c: '≈ 3× FLOPs del forward pass' },
  { l: 'KV-Cache', t: 'Inferencia', c: 'Evita recomputar keys/values' },
  { l: 'Quant', t: 'INT8/FP16', c: 'Menos memoria, más throughput' },
];

const ComplexityModuleExtras: React.FC<ComplexityModuleExtrasProps> = ({ moduleId }) => {
  if (moduleId === 1) {
    return <AlgorithmsBigOSection />;
  }

  if (moduleId === 2 || moduleId === 3) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-lg shadow-lg">
            ƒ(n)
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
              Notaciones Formales O, Ω y Θ
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Las tres cotas que definen el comportamiento asintótico
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NOTATION_CARDS.map(card => (
            <div
              key={card.l}
              className="group p-5 rounded-2xl border bg-white dark:bg-slate-800/50 border-violet-200 dark:border-violet-800/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-violet-600 dark:text-violet-400 font-black block text-xl mb-1 font-mono">{card.l}</span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
              <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block">{card.c}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (moduleId >= 16) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center text-white text-lg shadow-lg shadow-fuchsia-500/25">
            🧠
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
              Big-O en Inteligencia Artificial
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              FLOPs, memoria GPU y optimizaciones de inferencia
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-fuchsia-200 dark:border-fuchsia-900/50 bg-gradient-to-br from-fuchsia-50 to-violet-50 dark:from-fuchsia-950/30 dark:to-violet-950/20 p-4 sm:p-6">
          <p className="text-sm text-fuchsia-900 dark:text-fuchsia-200 font-medium leading-relaxed">
            Estás en el <strong>tramo avanzado de IA</strong> (módulos 16–20). Aquí Big-O deja de ser solo bucles en Python
            y pasa a medir FLOPs en capas densas, atención cuadrática en Transformers y trade-offs entre entrenamiento e inferencia.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {AI_FLOPS_CARDS.map(card => (
            <div
              key={card.l}
              className="group p-3 sm:p-5 rounded-2xl border bg-white dark:bg-slate-800/50 border-fuchsia-200 dark:border-fuchsia-900/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0"
            >
              <span className="text-fuchsia-600 dark:text-fuchsia-400 font-black block text-base sm:text-lg mb-1">{card.l}</span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
              <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block font-mono">{card.c}</span>
            </div>
          ))}
        </div>
        {moduleId === 19 && (
          <div className="mt-2">
            <BigOChart />
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ComplexityModuleExtras;
