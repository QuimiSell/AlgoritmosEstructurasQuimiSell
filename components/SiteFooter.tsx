import React from 'react';
import { SITE } from '../constants/site';
import { exportAllProgress, getOverallProgressSummary } from '../hooks/useModuleProgress';

const socialLinks = [
  {
    href: SITE.youtube,
    label: SITE.youtubeLabel,
    sub: 'Clases y tutoriales en video',
    icon: '▶',
    accent: 'from-red-500 to-rose-600',
  },
  {
    href: SITE.linkedin,
    label: SITE.linkedinLabel,
    sub: SITE.author,
    icon: 'in',
    accent: 'from-blue-600 to-indigo-600',
  },
  {
    href: `mailto:${SITE.email}`,
    label: 'Correo',
    sub: SITE.email,
    icon: '✉',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    href: SITE.repo,
    label: 'GitHub',
    sub: 'Código abierto del proyecto',
    icon: '⌥',
    accent: 'from-slate-600 to-slate-800',
  },
] as const;

const SiteFooter: React.FC = () => {
  const summary = getOverallProgressSummary();

  const handleExport = () => {
    const json = exportAllProgress();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quimisell-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Marca */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            {SITE.brand}
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {SITE.tagline}. {SITE.description}
          </p>
        </div>

        {/* Enlaces sociales — tarjetas clicables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-900/20 transition-all duration-200"
            >
              <span
                className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${link.accent} text-white flex items-center justify-center text-sm font-bold shadow-sm group-hover:scale-105 transition-transform`}
              >
                {link.icon}
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                  {link.label}
                </span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {link.sub}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Progreso + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {summary.completedModules} módulos · {summary.quizPasses} quizzes ≥70%
            </p>
            <button
              type="button"
              onClick={handleExport}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 dark:bg-indigo-600 text-white hover:bg-slate-800 dark:hover:bg-indigo-500 transition active:scale-95 cursor-pointer"
            >
              Exportar progreso
            </button>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            © {SITE.year} {SITE.author}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
