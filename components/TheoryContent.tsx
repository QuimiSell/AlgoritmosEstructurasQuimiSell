import React from 'react';

interface TheoryContentProps {
  content: string;
  accent?: 'indigo' | 'violet' | 'cyan';
}

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-800 dark:text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function sectionAccent(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes('panorama')) return 'from-indigo-500 to-violet-500';
  if (lower.includes('qué aprenderás') || lower.includes('que aprenderas')) return 'from-cyan-500 to-blue-500';
  if (lower.includes('desarrollo')) return 'from-violet-500 to-purple-500';
  if (lower.includes('aplicaciones')) return 'from-emerald-500 to-teal-500';
  if (lower.includes('errores')) return 'from-rose-500 to-orange-500';
  if (lower.includes('síntesis') || lower.includes('sintesis')) return 'from-amber-500 to-orange-500';
  return 'from-indigo-500 to-purple-500';
}

const TheoryContent: React.FC<TheoryContentProps> = ({ content }) => {
  const blocks = content.split('\n\n').filter(b => b.trim());

  return (
    <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-[1.05rem] font-light break-words">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('## ')) {
          const title = trimmed.replace(/^##\s+/, '');
          const gradient = sectionAccent(title);
          const isNumbered = /^\d+\.\s/.test(title);

          return (
            <div
              key={i}
              className={`relative pl-4 sm:pl-5 ${
                isNumbered
                  ? 'py-4 px-4 sm:px-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60'
                  : 'pt-2'
              }`}
            >
              <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b ${gradient}`} />
              <h4
                className={`font-bold text-slate-900 dark:text-slate-50 ${
                  isNumbered ? 'text-base sm:text-lg mb-3' : 'text-lg sm:text-xl mt-2 first:mt-0'
                }`}
              >
                {title}
              </h4>
            </div>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h5
              key={i}
              className="text-slate-800 dark:text-slate-100 font-semibold text-base sm:text-lg pl-1"
            >
              {trimmed.replace(/^###\s+/, '')}
            </h5>
          );
        }

        if (trimmed.startsWith('· ') || trimmed.startsWith('- ')) {
          const lines = trimmed.split('\n').filter(Boolean);
          return (
            <ul key={i} className="list-none space-y-2.5 pl-1">
              {lines.map((line, j) => (
                <li key={j} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0" />
                  <span>{renderInline(line.replace(/^[·-]\s*/, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (trimmed.startsWith('**') && trimmed.includes(':**')) {
          const [label, ...rest] = trimmed.split(':**');
          const body = rest.join(':**').trim();
          return (
            <div
              key={i}
              className="rounded-xl border border-slate-100 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/30 p-4 sm:p-5 space-y-2"
            >
              <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
                {label.replace(/\*\*/g, '')}
              </p>
              <p>{renderInline(body)}</p>
            </div>
          );
        }

        return (
          <p key={i} className="leading-[1.75]">
            {trimmed.split('\n').map((line, j, arr) => (
              <span key={j}>
                {renderInline(line)}
                {j < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

export default TheoryContent;
