import React from 'react';
import { Module } from '../domain/models';

type Phase = 1 | 2 | 3;

const PHASE_META: Record<Phase, { label: string; detail: string; badgeClass: string; trackSize: number; trackStart: number; barClass: string }> = {
  1: { label: 'Autómatas Finitos', detail: 'Alfabetos, DFA, NFA y regex', badgeClass: 'bg-cyan-500/25 border-cyan-300/30 text-cyan-100', trackSize: 5, trackStart: 1, barClass: 'bg-cyan-300/90' },
  2: { label: 'Gramáticas & Turing', detail: 'CFG, PDA y decidibilidad', badgeClass: 'bg-violet-500/25 border-violet-300/30 text-violet-100', trackSize: 5, trackStart: 6, barClass: 'bg-violet-300/90' },
  3: { label: 'Compiladores', detail: 'Lexer, parser, IR y codegen', badgeClass: 'bg-orange-500/25 border-orange-300/30 text-orange-100', trackSize: 5, trackStart: 11, barClass: 'bg-orange-300/90' },
};

const THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: 'Σ', gradient: 'from-cyan-700 via-teal-800 to-emerald-900', glow: 'bg-cyan-500/30' },
  2: { icon: 'DFA', gradient: 'from-teal-700 via-cyan-800 to-blue-900', glow: 'bg-teal-500/30' },
  3: { icon: 'NFA', gradient: 'from-blue-700 via-indigo-800 to-violet-900', glow: 'bg-blue-500/30' },
  4: { icon: '.*', gradient: 'from-indigo-700 via-violet-800 to-purple-900', glow: 'bg-indigo-500/30' },
  5: { icon: 'pump', gradient: 'from-purple-700 via-fuchsia-800 to-pink-900', glow: 'bg-purple-500/30' },
  6: { icon: 'CFG', gradient: 'from-violet-700 via-purple-800 to-fuchsia-900', glow: 'bg-violet-500/30' },
  7: { icon: 'PDA', gradient: 'from-fuchsia-700 via-pink-800 to-rose-900', glow: 'bg-fuchsia-500/30' },
  8: { icon: 'TM', gradient: 'from-rose-700 via-red-800 to-orange-900', glow: 'bg-rose-500/30' },
  9: { icon: '⚙', gradient: 'from-orange-700 via-amber-800 to-yellow-900', glow: 'bg-orange-500/30' },
  10: { icon: 'lex', gradient: 'from-amber-700 via-orange-800 to-red-900', glow: 'bg-amber-500/30' },
  11: { icon: 'LL', gradient: 'from-yellow-700 via-amber-800 to-orange-900', glow: 'bg-yellow-500/30' },
  12: { icon: 'sem', gradient: 'from-orange-700 via-red-800 to-rose-900', glow: 'bg-orange-500/30' },
  13: { icon: 'IR', gradient: 'from-red-700 via-orange-800 to-amber-900', glow: 'bg-red-500/30' },
  14: { icon: 'opt', gradient: 'from-amber-700 via-yellow-800 to-lime-900', glow: 'bg-amber-500/30' },
  15: { icon: 'asm', gradient: 'from-lime-700 via-green-800 to-emerald-900', glow: 'bg-lime-500/30' },
};

export function getAutomataPhase(moduleId: number): Phase {
  if (moduleId <= 5) return 1;
  if (moduleId <= 10) return 2;
  return 3;
}

interface AutomataHeroProps {
  module: Module;
  totalModules: number;
}

const AutomataHero: React.FC<AutomataHeroProps> = ({ module, totalModules }) => {
  const phase = getAutomataPhase(module.id);
  const meta = PHASE_META[phase];
  const theme = THEMES[module.id] || THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const trackProgress = module.id - meta.trackStart + 1;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-cyan-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-[60px]" />
      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>⚙️</span> Autómatas & Compiladores
          </span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.badgeClass}`}>{meta.label}</span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">{module.id} / {totalModules}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-2 tracking-tight leading-[1.15] break-words">{moduleName}</h2>
        <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mb-3">Módulo {trackProgress} de {meta.trackSize} · {meta.detail}</p>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">{module.description}</p>
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          {[{ label: 'Módulos', value: String(totalModules) }, { label: 'Autoevaluación', value: '12 preguntas' }, { label: 'Enfoque', value: 'Teoría formal' }].map(s => (
            <div key={s.label} className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 min-w-[5.5rem]">
              <span className="block text-lg sm:text-xl font-black">{s.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
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

export default AutomataHero;
