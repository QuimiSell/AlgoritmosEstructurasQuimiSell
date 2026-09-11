import React from 'react';
import { Module } from '../domain/models';

type MathPhase = 1 | 2;

const PHASE_META: Record<MathPhase, { label: string; detail: string; badgeClass: string; trackSize: number; trackStart: number }> = {
  1: {
    label: 'Lógica & Matemática Discreta',
    detail: 'Boole, conjuntos, grafos y sistemas numéricos',
    badgeClass: 'bg-indigo-500/25 border-indigo-300/30 text-indigo-100',
    trackSize: 5,
    trackStart: 1,
  },
  2: {
    label: 'Álgebra Aplicada & Cálculo',
    detail: 'Matrices, trigonometría, optimización y criptografía',
    badgeClass: 'bg-violet-500/25 border-violet-300/30 text-violet-100',
    trackSize: 5,
    trackStart: 6,
  },
};

const MODULE_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '∧∨', gradient: 'from-indigo-700 via-blue-800 to-violet-900', glow: 'bg-indigo-500/30' },
  2: { icon: '∪∩', gradient: 'from-blue-700 via-indigo-800 to-violet-900', glow: 'bg-blue-500/30' },
  3: { icon: 'f:A→B', gradient: 'from-violet-700 via-purple-800 to-indigo-900', glow: 'bg-violet-500/30' },
  4: { icon: '0b01', gradient: 'from-cyan-700 via-teal-800 to-emerald-900', glow: 'bg-cyan-500/30' },
  5: { icon: 'G(V,E)', gradient: 'from-emerald-700 via-teal-800 to-cyan-900', glow: 'bg-emerald-500/30' },
  6: { icon: 'M×v', gradient: 'from-purple-700 via-violet-800 to-fuchsia-900', glow: 'bg-purple-500/30' },
  7: { icon: 'sinθ', gradient: 'from-fuchsia-700 via-pink-800 to-rose-900', glow: 'bg-fuchsia-500/30' },
  8: { icon: 'log', gradient: 'from-rose-700 via-orange-800 to-amber-900', glow: 'bg-rose-500/30' },
  9: { icon: 'd/dx', gradient: 'from-amber-700 via-orange-800 to-red-900', glow: 'bg-amber-500/30' },
  10: { icon: 'C(n,k)', gradient: 'from-red-700 via-rose-800 to-pink-900', glow: 'bg-red-500/30' },
};

export function getMathPhase(moduleId: number): MathPhase {
  return moduleId <= 5 ? 1 : 2;
}

interface MathHeroProps {
  module: Module;
  totalModules: number;
}

const MathHero: React.FC<MathHeroProps> = ({ module, totalModules }) => {
  const phase = getMathPhase(module.id);
  const meta = PHASE_META[phase];
  const theme = MODULE_THEMES[module.id] || MODULE_THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const trackProgress = module.id - meta.trackStart + 1;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-[60px]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>📐</span> Matemática para Sistemas
          </span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.badgeClass}`}>
            {meta.label}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">
            {module.id} / {totalModules}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-3">
          <span className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 items-center justify-center text-lg font-black font-mono shrink-0">
            {theme.icon}
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] break-words">
              {moduleName}
            </h2>
            <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mt-1">
              Módulo {trackProgress} de {meta.trackSize} · {meta.detail}
            </p>
          </div>
        </div>

        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
          {module.description}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          {[
            { label: 'Módulos', value: String(totalModules) },
            { label: 'Autoevaluación', value: '12 preguntas' },
            { label: 'Enfoque', value: 'Ingeniería' },
          ].map(stat => (
            <div
              key={stat.label}
              className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 min-w-[5.5rem]"
            >
              <span className="block text-lg sm:text-xl font-black">{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
              <span>Progreso total</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-black/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white/90 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
              <span>{meta.label}</span>
              <span>{trackProgress}/{meta.trackSize}</span>
            </div>
            <div className="h-2 rounded-full bg-black/20 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  phase === 1 ? 'bg-indigo-300/90' : 'bg-violet-300/90'
                }`}
                style={{ width: `${(trackProgress / meta.trackSize) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4 sm:p-8 opacity-[0.12] select-none pointer-events-none hidden sm:block">
        <span className="text-8xl sm:text-9xl font-black">{module.id}</span>
      </div>
    </section>
  );
};

export default MathHero;
