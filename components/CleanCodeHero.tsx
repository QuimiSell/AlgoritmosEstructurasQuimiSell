import React from 'react';
import { Module } from '../domain/models';

type Phase = 1 | 2;

const PHASE_META: Record<Phase, { label: string; detail: string; badgeClass: string; trackSize: number; trackStart: number; barClass: string }> = {
  1: { label: 'Clean Code & SOLID', detail: 'Nombres, funciones y principios SOLID', badgeClass: 'bg-sky-500/25 border-sky-300/30 text-sky-100', trackSize: 5, trackStart: 1, barClass: 'bg-sky-300/90' },
  2: { label: 'Patrones GoF', detail: 'Creacionales, estructurales y de comportamiento', badgeClass: 'bg-emerald-500/25 border-emerald-300/30 text-emerald-100', trackSize: 5, trackStart: 6, barClass: 'bg-emerald-300/90' },
};

const THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '🧼', gradient: 'from-sky-700 via-blue-800 to-indigo-900', glow: 'bg-sky-500/30' },
  2: { icon: 'fn()', gradient: 'from-blue-700 via-indigo-800 to-violet-900', glow: 'bg-blue-500/30' },
  3: { icon: '//', gradient: 'from-indigo-700 via-violet-800 to-purple-900', glow: 'bg-indigo-500/30' },
  4: { icon: 'S', gradient: 'from-purple-700 via-violet-800 to-fuchsia-900', glow: 'bg-purple-500/30' },
  5: { icon: 'O', gradient: 'from-fuchsia-700 via-pink-800 to-rose-900', glow: 'bg-fuchsia-500/30' },
  6: { icon: 'L', gradient: 'from-rose-700 via-red-800 to-orange-900', glow: 'bg-rose-500/30' },
  7: { icon: 'ID', gradient: 'from-orange-700 via-amber-800 to-yellow-900', glow: 'bg-orange-500/30' },
  8: { icon: 'C', gradient: 'from-emerald-700 via-green-800 to-teal-900', glow: 'bg-emerald-500/30' },
  9: { icon: 'S', gradient: 'from-teal-700 via-cyan-800 to-sky-900', glow: 'bg-teal-500/30' },
  10: { icon: 'B', gradient: 'from-green-700 via-emerald-800 to-lime-900', glow: 'bg-green-500/30' },
};

export function getCleanCodePhase(moduleId: number): Phase {
  return moduleId <= 5 ? 1 : 2;
}

interface CleanCodeHeroProps {
  module: Module;
  totalModules: number;
}

const CleanCodeHero: React.FC<CleanCodeHeroProps> = ({ module, totalModules }) => {
  const phase = getCleanCodePhase(module.id);
  const meta = PHASE_META[phase];
  const theme = THEMES[module.id] || THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const trackProgress = module.id - meta.trackStart + 1;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-sky-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>🧼</span> Clean Code & SOLID
          </span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.badgeClass}`}>{meta.label}</span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">{module.id} / {totalModules}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-2 tracking-tight leading-[1.15] break-words">{moduleName}</h2>
        <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mb-3">Módulo {trackProgress} de {meta.trackSize} · {meta.detail}</p>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{module.description}</p>
        <div className="mt-6 sm:mt-8 hero-stats-grid">
          {[{ label: 'Módulos', value: String(totalModules) }, { label: 'Autoevaluación', value: '12 preguntas' }, { label: 'Referencia', value: 'Tío Bob' }].map(s => (
            <div key={s.label} className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 min-w-[5.5rem]">
              <span className="block text-lg sm:text-xl font-black">{s.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 hero-progress-grid">
          <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2"><span>Progreso total</span><span>{progress}%</span></div>
            <div className="h-2 rounded-full bg-black/20 overflow-hidden"><div className="h-full rounded-full bg-white/90 transition-all duration-700" style={{ width: `${progress}%` }} /></div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2"><span>{meta.label}</span><span>{trackProgress}/{meta.trackSize}</span></div>
            <div className="h-2 rounded-full bg-black/20 overflow-hidden"><div className={`h-full rounded-full ${meta.barClass} transition-all duration-700`} style={{ width: `${(trackProgress / meta.trackSize) * 100}%` }} /></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4 sm:p-8 opacity-[0.12] select-none pointer-events-none hidden sm:block"><span className="text-8xl sm:text-9xl font-black">{module.id}</span></div>
    </section>
  );
};

export default CleanCodeHero;
