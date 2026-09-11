import React from 'react';

interface TheoryContentProps {
  content: string;
  accent?: 'indigo' | 'violet' | 'cyan';
}

interface TheoryGroup {
  heading: string | null;
  blocks: string[];
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

function groupTheoryBlocks(content: string): TheoryGroup[] {
  const rawBlocks = content.split('\n\n').filter(b => b.trim());
  const groups: TheoryGroup[] = [];
  let current: TheoryGroup = { heading: null, blocks: [] };

  for (const block of rawBlocks) {
    const trimmed = block.trim();
    if (trimmed.startsWith('## ')) {
      if (current.heading !== null || current.blocks.length > 0) {
        groups.push(current);
      }
      current = { heading: trimmed.replace(/^##\s+/, ''), blocks: [] };
    } else {
      current.blocks.push(trimmed);
    }
  }

  if (current.heading !== null || current.blocks.length > 0) {
    groups.push(current);
  }

  return groups;
}

function isFullWidthSection(heading: string | null, index: number): boolean {
  if (index === 0) return true;
  if (!heading) return true;
  const lower = heading.toLowerCase();
  return (
    lower.includes('panorama') ||
    lower.includes('qué aprenderás') ||
    lower.includes('que aprenderas') ||
    lower.includes('síntesis') ||
    lower.includes('sintesis')
  );
}

function renderBlock(block: string, key: string | number): React.ReactNode {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('### ')) {
    return (
      <h5
        key={key}
        className="text-slate-800 dark:text-slate-100 font-semibold text-base sm:text-lg pl-1"
      >
        {trimmed.replace(/^###\s+/, '')}
      </h5>
    );
  }

  if (trimmed.startsWith('· ') || trimmed.startsWith('- ')) {
    const lines = trimmed.split('\n').filter(Boolean);
    return (
      <ul key={key} className="list-none space-y-2.5 pl-1">
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
        key={key}
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
    <p key={key} className="leading-[1.75]">
      {trimmed.split('\n').map((line, j, arr) => (
        <span key={j}>
          {renderInline(line)}
          {j < arr.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

const TheoryContent: React.FC<TheoryContentProps> = ({ content }) => {
  const groups = groupTheoryBlocks(content);

  return (
    <div className="theory-content w-full">
      {groups.map((group, i) => {
        const heading = group.heading;
        const fullWidth = isFullWidthSection(heading, i);
        const gradient = heading ? sectionAccent(heading) : 'from-indigo-500 to-purple-500';
        const isNumbered = heading ? /^\d+\.\s/.test(heading) : false;

        return (
          <section
            key={i}
            className={`theory-section min-w-0 ${
              fullWidth ? 'theory-section-full' : 'theory-section-card'
            }`}
          >
            {heading && (
              <div
                className={`relative pl-4 sm:pl-5 ${
                  fullWidth
                    ? isNumbered
                      ? 'py-4 px-4 sm:px-5 mb-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60'
                      : 'pt-1 mb-4'
                    : 'mb-3'
                }`}
              >
                <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b ${gradient}`} />
                <h4
                  className={`font-bold text-slate-900 dark:text-slate-50 ${
                    fullWidth && isNumbered ? 'text-base sm:text-lg' : 'text-base sm:text-lg'
                  }`}
                >
                  {heading}
                </h4>
              </div>
            )}

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-[1.05rem] font-light break-words">
              {group.blocks.map((block, j) => renderBlock(block, `${i}-${j}`))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TheoryContent;
