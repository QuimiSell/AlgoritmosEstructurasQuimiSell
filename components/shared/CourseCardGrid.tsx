import React from 'react';

export type CourseCard = { l: string; t: string; c: string };

interface CourseCardGridProps {
  title: string;
  subtitle: string;
  icon: string;
  cards: CourseCard[];
  accent: string;
  borderClass?: string;
}

const CourseCardGrid: React.FC<CourseCardGridProps> = ({
  title,
  subtitle,
  icon,
  cards,
  accent,
  borderClass = 'border-indigo-200 dark:border-indigo-900/50',
}) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-lg shadow-lg font-mono`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
    <div className="card-grid-responsive">
      {cards.map(card => (
        <div
          key={card.l}
          className={`group p-3 sm:p-5 rounded-2xl border bg-white dark:bg-slate-800/50 ${borderClass} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-black block text-base sm:text-lg mb-1 font-mono break-words">
            {card.l}
          </span>
          <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
          <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block">{card.c}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CourseCardGrid;
