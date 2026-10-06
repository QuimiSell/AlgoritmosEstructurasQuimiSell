import React from 'react';
import { Module } from '../domain/models';

const PURE_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '📊', gradient: 'from-slate-700 via-indigo-700 to-violet-800', glow: 'bg-indigo-500/30' },
  2: { icon: 'O', gradient: 'from-indigo-600 via-blue-600 to-cyan-700', glow: 'bg-blue-500/30' },
  3: { icon: 'Ω', gradient: 'from-violet-600 via-purple-600 to-indigo-700', glow: 'bg-violet-500/30' },
  4: { icon: '⚖️', gradient: 'from-amber-600 via-orange-600 to-red-600', glow: 'bg-amber-500/30' },
  5: { icon: '✂️', gradient: 'from-teal-600 via-emerald-600 to-green-700', glow: 'bg-teal-500/30' },
  6: { icon: '🔁', gradient: 'from-cyan-600 via-sky-600 to-blue-700', glow: 'bg-cyan-500/30' },
  7: { icon: '🌀', gradient: 'from-fuchsia-600 via-purple-600 to-violet-700', glow: 'bg-fuchsia-500/30' },
  8: { icon: '⚡', gradient: 'from-emerald-600 via-teal-600 to-cyan-700', glow: 'bg-emerald-500/30' },
  9: { icon: '📈', gradient: 'from-blue-600 via-indigo-600 to-violet-700', glow: 'bg-indigo-500/30' },
  10: { icon: '📉', gradient: 'from-sky-600 via-blue-600 to-indigo-700', glow: 'bg-sky-500/30' },
  11: { icon: '🔀', gradient: 'from-violet-600 via-purple-600 to-fuchsia-700', glow: 'bg-purple-500/30' },
  12: { icon: '⬜', gradient: 'from-orange-600 via-rose-600 to-red-700', glow: 'bg-orange-500/30' },
  13: { icon: '💥', gradient: 'from-red-600 via-rose-600 to-pink-700', glow: 'bg-red-500/30' },
  14: { icon: '📦', gradient: 'from-lime-600 via-green-600 to-emerald-700', glow: 'bg-lime-500/30' },
  15: { icon: '⚔️', gradient: 'from-slate-600 via-zinc-600 to-stone-700', glow: 'bg-slate-500/30' },
};

const AI_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  16: { icon: '🧠', gradient: 'from-violet-700 via-purple-700 to-fuchsia-800', glow: 'bg-violet-500/35' },
  17: { icon: '🖥️', gradient: 'from-cyan-700 via-blue-700 to-indigo-800', glow: 'bg-cyan-500/35' },
  18: { icon: '🔄', gradient: 'from-emerald-700 via-teal-700 to-cyan-800', glow: 'bg-emerald-500/35' },
  19: { icon: '✨', gradient: 'from-amber-700 via-orange-700 to-rose-800', glow: 'bg-amber-500/35' },
  20: { icon: '🚀', gradient: 'from-indigo-700 via-violet-700 to-purple-800', glow: 'bg-indigo-500/35' },
};

interface ComplexityHeroProps {
  module: Module;
  totalModules: number;
}

const ComplexityHero: React.FC<ComplexityHeroProps> = ({ module, totalModules }) => {
  const isAITrack = module.id >= 16;
  const theme = isAITrack
    ? AI_THEMES[module.id] || AI_THEMES[16]
    : PURE_THEMES[module.id] || PURE_THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const phaseLabel = isAITrack ? 'Tramo Big-O en IA' : 'Tramo Big-O Puro';
  const phaseDetail = isAITrack
    ? `Módulo ${module.id - 15} de 5 · Redes neuronales & GPUs`
    : `Módulo ${module.id} de 15 · Análisis algorítmico`;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-[60px]" />
      {isAITrack && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>📊</span> Complejidad Big-O
          </span>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
              isAITrack
                ? 'bg-fuchsia-500/25 border-fuchsia-300/30 text-fuchsia-100'
                : 'bg-cyan-500/20 border-cyan-300/25 text-cyan-100'
            }`}
          >
            {phaseLabel}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">
            {module.id} / {totalModules}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-3">
          <span className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 items-center justify-center text-2xl font-black shrink-0">
            {typeof theme.icon === 'string' && theme.icon.length <= 2 ? theme.icon : theme.icon}
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] break-words">
              {moduleName}
            </h2>
            <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider mt-1">{phaseDetail}</p>
          </div>
        </div>

        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          {module.description}
        </p>

        <div className="mt-6 sm:mt-8 hero-stats-grid">
          {[
            { label: 'Módulos totales', value: String(totalModules) },
            { label: 'Autoevaluación', value: '12 preguntas' },
            { label: isAITrack ? 'Enfoque' : 'Demos', value: isAITrack ? 'FLOPs & IA' : 'Python' },
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

        <div className="mt-6 sm:mt-8 hero-progress-grid">
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
              <span>{isAITrack ? 'Tramo IA' : 'Tramo puro'}</span>
              <span>{isAITrack ? `${module.id - 15}/5` : `${module.id}/15`}</span>
            </div>
            <div className="h-2 rounded-full bg-black/20 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  isAITrack ? 'bg-fuchsia-300/90' : 'bg-cyan-300/90'
                }`}
                style={{
                  width: isAITrack
                    ? `${((module.id - 15) / 5) * 100}%`
                    : `${(module.id / 15) * 100}%`,
                }}
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

export default ComplexityHero;
