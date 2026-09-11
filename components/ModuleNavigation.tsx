import React from 'react';

interface ModuleNavigationProps {
  currentId: number;
  totalModules: number;
  onNavigate: (id: number) => void;
  getTitle: (id: number) => string;
}

const ModuleNavigation: React.FC<ModuleNavigationProps> = ({
  currentId,
  totalModules,
  onNavigate,
  getTitle,
}) => {
  const prev = currentId > 1 ? currentId - 1 : null;
  const next = currentId < totalModules ? currentId + 1 : null;

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
      {prev ? (
        <button
          type="button"
          onClick={() => onNavigate(prev)}
          className="flex-1 group text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            ← Anterior
          </span>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            {getTitle(prev)}
          </span>
        </button>
      ) : (
        <div className="flex-1 hidden sm:block" />
      )}
      {next ? (
        <button
          type="button"
          onClick={() => onNavigate(next)}
          className="flex-1 group text-right p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-all cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 dark:text-indigo-500 block mb-1">
            Siguiente →
          </span>
          <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100 line-clamp-1">
            {getTitle(next)}
          </span>
        </button>
      ) : (
        <div className="flex-1 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-center">
          <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
            🎓 ¡Completaste el curso!
          </span>
        </div>
      )}
    </div>
  );
};

export default ModuleNavigation;
