import React from 'react';
import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  compact?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, compact }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo noche'}
      title={isDark ? 'Modo claro' : 'Modo noche'}
      className={`relative shrink-0 rounded-xl border transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden group ${
        compact
          ? 'w-10 h-10 flex items-center justify-center'
          : 'h-10 px-3 flex items-center gap-2'
      } ${
        isDark
          ? 'bg-slate-800 border-slate-600 text-amber-300 hover:bg-slate-700 hover:border-slate-500'
          : 'bg-white border-slate-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm'
      }`}
    >
      <span className="text-base leading-none transition-transform duration-300 group-hover:scale-110">
        {isDark ? '☀️' : '🌙'}
      </span>
      {!compact && (
        <span className="text-xs font-bold hidden sm:inline">
          {isDark ? 'Claro' : 'Noche'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
