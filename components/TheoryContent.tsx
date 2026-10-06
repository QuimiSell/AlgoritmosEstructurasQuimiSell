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

function isNumberedHeading(heading: string | null): boolean {
  return Boolean(heading && /^\d+\.\s/.test(heading));
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
        className="rounded-xl border border-slate-100 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/30 p-4 sm:p-5 space-y-2 h-full"
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

function renderGroupBody(blocks: string[]): React.ReactNode {
  const detailBlocks = blocks.filter(b => b.trim().startsWith('**') && b.includes(':**'));
  const otherBlocks = blocks.filter(b => !(b.trim().startsWith('**') && b.includes(':**')));

  return (
    <>
      {otherBlocks.map((block, j) => renderBlock(block, `other-${j}`))}
      {detailBlocks.length > 0 && (
        <div className="theory-detail-grid">
          {detailBlocks.map((block, j) => renderBlock(block, `detail-${j}`))}
        </div>
      )}
    </>
  );
}

function TheorySection({
  group,
  variant = 'full',
}: {
  group: TheoryGroup;
  variant?: 'full' | 'card';
}) {
  const heading = group.heading;
  const gradient = heading ? sectionAccent(heading) : 'from-indigo-500 to-purple-500';
  const numbered = isNumberedHeading(heading);

  return (
    <section
      className={`theory-section min-w-0 w-full ${
        variant === 'card' ? 'theory-section-card' : 'theory-section-full'
      }`}
    >
      {heading && (
        <div
          className={`relative pl-4 sm:pl-5 ${
            variant === 'full' && !numbered
              ? 'pt-1 mb-4'
              : 'py-3 px-4 sm:px-5 mb-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60'
          }`}
        >
          <div className={`absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b ${gradient}`} />
          <h4 className="font-bold text-slate-900 dark:text-slate-50 text-base sm:text-lg">{heading}</h4>
        </div>
      )}

      {group.blocks.length > 0 && (
        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-[1.05rem] font-light break-words w-full">
          {renderGroupBody(group.blocks)}
        </div>
      )}
    </section>
  );
}

const TheoryContent: React.FC<TheoryContentProps> = ({ content }) => {
  const groups = groupTheoryBlocks(content);
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < groups.length) {
    const group = groups[i];

    if (isNumberedHeading(group.heading)) {
      const numbered: TheoryGroup[] = [];
      while (i < groups.length && isNumberedHeading(groups[i].heading)) {
        numbered.push(groups[i]);
        i++;
      }
      nodes.push(
        <div key={`numbered-${i}`} className="theory-subsections-grid w-full">
          {numbered.map((g, idx) => (
            <TheorySection key={`${g.heading}-${idx}`} group={g} variant="card" />
          ))}
        </div>
      );
      continue;
    }

    nodes.push(<TheorySection key={`${group.heading ?? 'intro'}-${i}`} group={group} variant="full" />);
    i++;
  }

  return <div className="theory-content w-full">{nodes}</div>;
};

export default TheoryContent;
