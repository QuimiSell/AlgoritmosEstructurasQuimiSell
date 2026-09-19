import React from 'react';
import { Module } from '../domain/models';

type Phase = 1 | 2 | 3 | 4 | 5;

const PHASE_META: Record<Phase, { label: string; detail: string; badgeClass: string; trackSize: number; trackStart: number; barClass: string }> = {
  1: { label: 'Arquitecto del Pensamiento', detail: 'Hardware, system design y agentes IA', badgeClass: 'bg-blue-500/25 border-blue-300/30 text-blue-100', trackSize: 5, trackStart: 1, barClass: 'bg-blue-300/90' },
  2: { label: 'Ingeniería Rigurosa', detail: 'TDD, DDD, perfilado y seguridad', badgeClass: 'bg-indigo-500/25 border-indigo-300/30 text-indigo-100', trackSize: 5, trackStart: 6, barClass: 'bg-indigo-300/90' },
  3: { label: 'Sistemas a Escala', detail: 'CAP, bases de datos, eventos y CI/CD', badgeClass: 'bg-violet-500/25 border-violet-300/30 text-violet-100', trackSize: 5, trackStart: 11, barClass: 'bg-violet-300/90' },
  4: { label: 'IA en Producción', detail: 'RAG, vectors, APIs y resiliencia', badgeClass: 'bg-fuchsia-500/25 border-fuchsia-300/30 text-fuchsia-100', trackSize: 5, trackStart: 16, barClass: 'bg-fuchsia-300/90' },
  5: { label: 'Liderazgo Senior', detail: 'FinOps, ética, RCA y manifiesto', badgeClass: 'bg-amber-500/25 border-amber-300/30 text-amber-100', trackSize: 5, trackStart: 21, barClass: 'bg-amber-300/90' },
};

const EXPLICIT_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '🧠', gradient: 'from-blue-700 via-indigo-800 to-violet-900', glow: 'bg-blue-500/30' },
  5: { icon: '✓', gradient: 'from-indigo-700 via-violet-800 to-purple-900', glow: 'bg-indigo-500/30' },
  10: { icon: '🗄', gradient: 'from-violet-700 via-purple-800 to-fuchsia-900', glow: 'bg-violet-500/30' },
  15: { icon: '🔢', gradient: 'from-fuchsia-700 via-pink-800 to-rose-900', glow: 'bg-fuchsia-500/30' },
  20: { icon: '⚡', gradient: 'from-rose-700 via-orange-800 to-amber-900', glow: 'bg-rose-500/30' },
  25: { icon: '★', gradient: 'from-amber-700 via-yellow-800 to-orange-900', glow: 'bg-amber-500/30' },
};

export function getAIEngineerPhase(moduleId: number): Phase {
  if (moduleId <= 5) return 1;
  if (moduleId <= 10) return 2;
  if (moduleId <= 15) return 3;
  if (moduleId <= 20) return 4;
  return 5;
}

interface AIEngineerHeroProps {
  module: Module;
  totalModules: number;
}

const AIEngineerHero: React.FC<AIEngineerHeroProps> = ({ module, totalModules }) => {
  const phase = getAIEngineerPhase(module.id);
  const meta = PHASE_META[phase];
  const theme = EXPLICIT_THEMES[module.id] || EXPLICIT_THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const trackProgress = module.id - meta.trackStart + 1;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>🤖</span> Ingeniero en la Era IA
          </span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.badgeClass}`}>{meta.label}</span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">{module.id} / {totalModules}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold mb-2 tracking-tight leading-[1.15] break-words">{moduleName}</h2>
        <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mb-3">Módulo {trackProgress} de {meta.trackSize} · {meta.detail}</p>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">{module.description}</p>
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          {[{ label: 'Módulos', value: String(totalModules) }, { label: 'Autoevaluación', value: '12 preguntas' }, { label: 'Rol', value: 'Arquitecto' }].map(s => (
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

export default AIEngineerHero;
