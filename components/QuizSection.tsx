import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../domain/models';
import { markQuizPassed } from '../hooks/useModuleProgress';

interface QuizSectionProps {
  questions: QuizQuestion[];
  moduleId: number;
  courseId: string;
  onProgressUpdate?: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  moduleId,
  courseId,
  onProgressUpdate,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    setSelectedAnswers({});
  }, [moduleId]);

  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = Object.entries(selectedAnswers).filter(
    ([qIdx, oIdx]) => questions[Number(qIdx)].answerIndex === oIdx
  ).length;
  const isFinished = totalAnswered === questions.length;
  const scorePct = isFinished ? Math.round((correctCount / questions.length) * 100) : 0;

  useEffect(() => {
    if (!isFinished || questions.length === 0) return;
    markQuizPassed(courseId, moduleId, scorePct);
    onProgressUpdate?.();
  }, [isFinished, scorePct, courseId, moduleId, onProgressUpdate, questions.length]);

  if (!questions || questions.length === 0) {
    return null;
  }

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (selectedAnswers[qIdx] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  return (
    <div className="bg-white dark:bg-slate-900/60 p-4 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-200 dark:border-slate-700/60 shadow-xl space-y-6 sm:space-y-8 animate-in fade-in duration-500 min-w-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center text-xl shadow-sm">
            ✏️
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-slate-50 text-lg">Desafío de Autoevaluación</h4>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
              {questions.length} preguntas · Módulo {moduleId}
            </span>
          </div>
        </div>
        {totalAnswered > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-[10px] font-bold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition active:scale-95 shadow-sm cursor-pointer"
          >
            🔄 Reiniciar
          </button>
        )}
      </div>

      {totalAnswered > 0 && !isFinished && (
        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
            style={{ width: `${(totalAnswered / questions.length) * 100}%` }}
          />
        </div>
      )}

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isAnswered = selected !== undefined;

          return (
            <div key={qIdx} className="space-y-4 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-b-0 last:pb-0">
              <p className="text-slate-800 dark:text-slate-100 font-bold text-base leading-snug">
                {qIdx + 1}. {q.question}
              </p>

              <div className="grid grid-cols-1 gap-3">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.answerIndex;
                  const isSelected = selected === oIdx;

                  let btnStyle = 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/30';
                  let badge = null;

                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-bold';
                      badge = <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full ml-auto font-sans">Correcto</span>;
                    } else if (isSelected) {
                      btnStyle = 'border-rose-500 dark:border-rose-600 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 font-bold';
                      badge = <span className="text-rose-600 dark:text-rose-400 text-xs font-bold bg-rose-100 dark:bg-rose-900/60 px-2.5 py-0.5 rounded-full ml-auto font-sans">Incorrecto</span>;
                    } else {
                      btnStyle = 'border-slate-100 dark:border-slate-800 opacity-60 text-slate-400 dark:text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={isAnswered}
                      className={`flex items-center text-left px-5 py-3.5 rounded-2xl border text-sm font-semibold transition-all duration-200 cursor-pointer disabled:cursor-default ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[11px] text-slate-500 dark:text-slate-400 mr-3 shrink-0 font-mono">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                      {badge}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 animate-in slide-in-from-top-2 duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1 font-sans">
                    Explicación Académica
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isFinished && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/40 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800 text-center animate-in zoom-in-95 duration-300">
          <span className="text-2xl">{scorePct >= 70 ? '🎉' : '📚'}</span>
          <h5 className="font-extrabold text-indigo-950 dark:text-indigo-100 mt-2 text-sm">
            {scorePct >= 70 ? '¡Excelente trabajo!' : 'Sigue repasando'}
          </h5>
          <p className="text-xs text-indigo-800/80 dark:text-indigo-300/80 mt-1 font-medium">
            Obtuviste {correctCount}/{questions.length} ({scorePct}%).{' '}
            {scorePct >= 70 ? 'Puedes avanzar al siguiente módulo.' : 'Revisa la teoría y vuelve a intentarlo.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
