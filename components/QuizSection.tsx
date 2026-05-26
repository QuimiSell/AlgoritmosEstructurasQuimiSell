import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../domain/models';

interface QuizSectionProps {
  questions: QuizQuestion[];
  moduleId: number;
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions, moduleId }) => {
  // Almacena las respuestas seleccionadas: { [indicePregunta]: indiceOpcionSeleccionada }
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  
  // Reiniciar las respuestas seleccionadas cuando se cambia de módulo
  useEffect(() => {
    setSelectedAnswers({});
  }, [moduleId]);

  if (!questions || questions.length === 0) {
    return null;
  }

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (selectedAnswers[qIdx] !== undefined) return; // Prevenir cambiar la respuesta una vez seleccionada
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const isFinished = totalAnswered === questions.length;

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-xl shadow-sm">
            ✏️
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-lg">Desafío de Autoevaluación</h4>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Comprueba tu conocimiento del Módulo {moduleId}
            </span>
          </div>
        </div>
        {totalAnswered > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-[10px] font-bold text-slate-500 hover:text-rose-600 transition active:scale-95 shadow-sm"
          >
            🔄 Reiniciar
          </button>
        )}
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isAnswered = selected !== undefined;

          return (
            <div key={qIdx} className="space-y-4 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
              <p className="text-slate-800 font-bold text-base leading-snug">
                {qIdx + 1}. {q.question}
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.answerIndex;
                  const isSelected = selected === oIdx;
                  
                  let btnStyle = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20";
                  let badge = null;

                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                      badge = <span className="text-emerald-600 text-xs font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full ml-auto font-sans">Correcto</span>;
                    } else if (isSelected) {
                      btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                      badge = <span className="text-rose-600 text-xs font-bold bg-rose-100 px-2.5 py-0.5 rounded-full ml-auto font-sans">Incorrecto</span>;
                    } else {
                      btnStyle = "border-slate-100 opacity-60 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={isAnswered}
                      className={`flex items-center text-left px-5 py-3.5 rounded-2xl border text-sm font-semibold transition-all duration-200 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[11px] text-slate-500 mr-3 shrink-0 font-mono">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                      {badge}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 animate-in slide-in-from-top-2 duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1 font-sans">
                    Explicación Académica
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isFinished && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 text-center animate-in zoom-in-95 duration-300">
          <span className="text-2xl">🎉</span>
          <h5 className="font-extrabold text-indigo-950 mt-2 text-sm">¡Cuestionario Completado!</h5>
          <p className="text-xs text-indigo-800/80 mt-1 font-medium">
            Has respondido todas las preguntas de autoevaluación de este módulo. ¡Buen trabajo!
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
