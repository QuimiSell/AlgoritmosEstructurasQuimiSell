import React from 'react';
import { Module } from '../domain/models';

const MODULE_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '📐', gradient: 'from-indigo-600 via-violet-600 to-purple-700', glow: 'bg-indigo-500/30' },
  2: { icon: '📋', gradient: 'from-blue-600 via-cyan-600 to-teal-600', glow: 'bg-cyan-500/30' },
  3: { icon: '🔑', gradient: 'from-violet-600 via-purple-600 to-fuchsia-600', glow: 'bg-violet-500/30' },
  4: { icon: '🌳', gradient: 'from-emerald-600 via-green-600 to-teal-600', glow: 'bg-emerald-500/30' },
  5: { icon: '🕸️', gradient: 'from-orange-600 via-amber-600 to-yellow-600', glow: 'bg-amber-500/30' },
  6: { icon: '🔀', gradient: 'from-rose-600 via-pink-600 to-fuchsia-600', glow: 'bg-rose-500/30' },
  7: { icon: '🔍', gradient: 'from-sky-600 via-blue-600 to-indigo-600', glow: 'bg-sky-500/30' },
  8: { icon: '🧩', gradient: 'from-purple-600 via-violet-600 to-indigo-600', glow: 'bg-purple-500/30' },
  9: { icon: '💎', gradient: 'from-teal-600 via-cyan-600 to-blue-600', glow: 'bg-teal-500/30' },
  10: { icon: '🌍', gradient: 'from-indigo-600 via-blue-600 to-cyan-600', glow: 'bg-blue-500/30' },
};

interface AlgorithmsHeroProps {
  module: Module;
  totalModules: number;
}

const AlgorithmsHero: React.FC<AlgorithmsHeroProps> = ({ module, totalModules }) => {
  const theme = MODULE_THEMES[module.id] || MODULE_THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-[60px]" />
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
            <span>{theme.icon}</span> Algoritmos & Estructuras
          </span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest">
            Módulo {module.id} / {totalModules}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-3 tracking-tight leading-[1.15] break-words">
          {moduleName}
        </h2>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          {module.description}
        </p>

        <div className="mt-6 sm:mt-8 hero-stats-grid">
          {[
            { label: 'Módulos', value: String(totalModules) },
            { label: 'Autoevaluación', value: '12 preguntas' },
            { label: 'Demos', value: 'Python' },
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

        <div className="mt-6 sm:mt-8 w-full sm:max-w-md xl:max-w-lg 2xl:max-w-xl">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
            <span>Tu progreso en el curso</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-black/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/90 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4 sm:p-8 opacity-[0.12] select-none pointer-events-none hidden sm:block">
        <span className="text-8xl sm:text-9xl font-black">{module.id}</span>
      </div>
    </section>
  );
};

export default AlgorithmsHero;
