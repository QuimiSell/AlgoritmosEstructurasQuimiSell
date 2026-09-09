
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className="bg-slate-900 text-slate-100 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed border border-slate-800 shadow-lg max-w-full">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
