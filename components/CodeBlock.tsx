
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-60">
        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
      </div>
      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 sm:p-6 pt-10 sm:pt-12 rounded-2xl overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed border border-slate-700 dark:border-slate-800 shadow-xl max-w-full">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
