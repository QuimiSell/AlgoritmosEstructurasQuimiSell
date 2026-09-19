import React from 'react';
import { SITE } from '../constants/site';
import { exportAllProgress, getOverallProgressSummary } from '../hooks/useModuleProgress';

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
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-50 uppercase tracking-wider">
              {SITE.brand}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {SITE.tagline}. Plataforma educativa offline-first — sin base de datos, sin costo en la nube.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
              © {SITE.year} {SITE.author}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  YouTube @Quimisell
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  LinkedIn — Selvin Miguel López Sanic
                </a>
              </li>
              <li>
                <a
                  href={SITE.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  Código fuente en GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-50 uppercase tracking-wider">
              Tu progreso (local)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {summary.completedModules} módulos completados · {summary.quizPasses} quizzes aprobados (≥70%)
            </p>
            <button
              type="button"
              onClick={handleExport}
              className="text-xs font-bold px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-200 transition cursor-pointer"
            >
              ⬇ Exportar progreso JSON
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
