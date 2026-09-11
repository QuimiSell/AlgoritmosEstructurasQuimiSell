import React from 'react';
import { Module } from '../domain/models';

type KaliPhase = 1 | 2 | 3 | 4;

const PHASE_META: Record<KaliPhase, { label: string; detail: string; badgeClass: string; trackSize: number; trackStart: number }> = {
  1: {
    label: 'Fundamentos Linux',
    detail: 'Kernel, Bash, procesos y TCP/IP',
    badgeClass: 'bg-emerald-500/25 border-emerald-300/30 text-emerald-100',
    trackSize: 5,
    trackStart: 1,
  },
  2: {
    label: 'Nmap & Reconocimiento',
    detail: 'Escaneo, evasión, NSE y OSINT',
    badgeClass: 'bg-red-500/25 border-red-300/30 text-red-100',
    trackSize: 5,
    trackStart: 6,
  },
  3: {
    label: 'Auditoría Ofensiva',
    detail: 'Tráfico, web, wireless y pivoting',
    badgeClass: 'bg-amber-500/25 border-amber-300/30 text-amber-100',
    trackSize: 5,
    trackStart: 11,
  },
  4: {
    label: 'Post-Explotación & Reporte',
    detail: 'Privilegios, forense, hardening y PTES',
    badgeClass: 'bg-slate-400/20 border-slate-300/25 text-slate-100',
    trackSize: 5,
    trackStart: 16,
  },
};

const MODULE_THEMES: Record<number, { icon: string; gradient: string; glow: string }> = {
  1: { icon: '🐧', gradient: 'from-emerald-800 via-green-800 to-teal-900', glow: 'bg-emerald-500/30' },
  2: { icon: '⚙️', gradient: 'from-teal-800 via-cyan-800 to-emerald-900', glow: 'bg-teal-500/30' },
  3: { icon: '🌐', gradient: 'from-cyan-800 via-sky-800 to-blue-900', glow: 'bg-cyan-500/30' },
  4: { icon: '🔍', gradient: 'from-red-700 via-rose-800 to-red-900', glow: 'bg-red-500/30' },
  5: { icon: '🎯', gradient: 'from-orange-700 via-red-800 to-rose-900', glow: 'bg-orange-500/30' },
  6: { icon: '👻', gradient: 'from-rose-800 via-red-900 to-orange-950', glow: 'bg-rose-500/35' },
  7: { icon: '📜', gradient: 'from-red-800 via-orange-900 to-amber-950', glow: 'bg-red-500/35' },
  8: { icon: '🕵️', gradient: 'from-amber-800 via-yellow-900 to-orange-950', glow: 'bg-amber-500/30' },
  9: { icon: '📡', gradient: 'from-yellow-800 via-amber-900 to-orange-950', glow: 'bg-yellow-500/30' },
  10: { icon: '🌍', gradient: 'from-lime-800 via-green-900 to-emerald-950', glow: 'bg-lime-500/30' },
  11: { icon: '🛡️', gradient: 'from-amber-800 via-orange-900 to-red-950', glow: 'bg-amber-500/35' },
  12: { icon: '📶', gradient: 'from-orange-800 via-amber-900 to-yellow-950', glow: 'bg-orange-500/30' },
  13: { icon: '🔐', gradient: 'from-violet-800 via-purple-900 to-fuchsia-950', glow: 'bg-violet-500/30' },
  14: { icon: '🔌', gradient: 'from-blue-800 via-indigo-900 to-violet-950', glow: 'bg-blue-500/30' },
  15: { icon: '🚇', gradient: 'from-indigo-800 via-purple-900 to-violet-950', glow: 'bg-indigo-500/30' },
  16: { icon: '⬆️', gradient: 'from-red-900 via-rose-950 to-red-950', glow: 'bg-red-500/35' },
  17: { icon: '🔬', gradient: 'from-slate-700 via-zinc-800 to-stone-900', glow: 'bg-slate-500/30' },
  18: { icon: '📋', gradient: 'from-zinc-700 via-neutral-800 to-stone-900', glow: 'bg-zinc-500/30' },
  19: { icon: '🧱', gradient: 'from-stone-700 via-slate-800 to-gray-900', glow: 'bg-stone-500/30' },
  20: { icon: '📑', gradient: 'from-gray-800 via-slate-900 to-black', glow: 'bg-slate-500/35' },
};

export function getKaliPhase(moduleId: number): KaliPhase {
  if (moduleId <= 5) return 1;
  if (moduleId <= 10) return 2;
  if (moduleId <= 15) return 3;
  return 4;
}

interface KaliHeroProps {
  module: Module;
  totalModules: number;
}

const KaliHero: React.FC<KaliHeroProps> = ({ module, totalModules }) => {
  const phase = getKaliPhase(module.id);
  const meta = PHASE_META[phase];
  const theme = MODULE_THEMES[module.id] || MODULE_THEMES[1];
  const progress = Math.round((module.id / totalModules) * 100);
  const moduleName = module.title.split(': ')[1] || module.title;
  const trackProgress = module.id - meta.trackStart + 1;

  return (
    <section className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-500/10 dark:shadow-black/40">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className={`absolute -top-24 -right-24 w-72 h-72 ${theme.glow} rounded-full blur-[80px]`} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-[60px]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative z-10 p-5 sm:p-8 md:p-10 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest border border-white/20">
            <span>🐉</span> Kali Linux & Nmap Pro
          </span>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.badgeClass}`}>
            {meta.label}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full bg-black/25 text-[10px] font-bold uppercase tracking-widest">
            {module.id} / {totalModules}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-3">
          <span className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 items-center justify-center text-2xl shrink-0">
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
            { label: 'Entorno', value: 'Bash CLI' },
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
            <div className="h-2 rounded-full bg-black/25 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-300/90 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
              <span>{meta.label}</span>
              <span>{trackProgress}/{meta.trackSize}</span>
            </div>
            <div className="h-2 rounded-full bg-black/25 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  phase === 1 ? 'bg-emerald-300/90' :
                  phase === 2 ? 'bg-red-300/90' :
                  phase === 3 ? 'bg-amber-300/90' :
                  'bg-slate-300/90'
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

export default KaliHero;
