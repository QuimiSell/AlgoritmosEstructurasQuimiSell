import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from '../constants';
import { QuizQuestion } from '../domain/models';

interface FinalExamModalProps {
  onClose: () => void;
}

// Extraemos la primera pregunta de cada módulo de manera determinista (10 preguntas en total)
const examQuestions = COURSE_MODULES.map(m => {
  if (m.quiz && m.quiz.length > 0) {
    return {
      question: m.quiz[0],
      moduleTitle: m.title.split(': ')[1] || m.title,
      moduleId: m.id
    };
  }
  return null;
}).filter((x): x is { question: QuizQuestion; moduleTitle: string; moduleId: number } => x !== null);

const FinalExamModal: React.FC<FinalExamModalProps> = ({ onClose }) => {
  // Respuestas seleccionadas: { [indicePregunta]: oIdx }
  const [answers, setAnswers] = useState<{ [key: number]: number }>(() => {
    const saved = localStorage.getItem('quimisell_exam_answers');
    return saved ? JSON.parse(saved) : {};
  });

  // Estado de envío
  const [submitted, setSubmitted] = useState<boolean>(() => {
    const saved = localStorage.getItem('quimisell_exam_submitted');
    return saved === 'true';
  });

  // Puntuación obtenida
  const [score, setScore] = useState<number | null>(() => {
    const saved = localStorage.getItem('quimisell_exam_score');
    return saved ? Number(saved) : null;
  });

  // Estados para alertas y confirmaciones visuales personalizadas
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [showValidationAlert, setShowValidationAlert] = useState<boolean>(false);

  // Persistir respuestas en localStorage mientras se avanza
  useEffect(() => {
    localStorage.setItem('quimisell_exam_answers', JSON.stringify(answers));
  }, [answers]);

  const totalAnswered = Object.keys(answers).length;
  const isFinished = totalAnswered === examQuestions.length;

  const handleSubmit = () => {
    if (!isFinished) {
      setShowValidationAlert(true);
      return;
    }

    let correctCount = 0;
    examQuestions.forEach((eq, idx) => {
      if (answers[idx] === eq.question.answerIndex) {
        correctCount++;
      }
    });

    const calculatedScore = (correctCount / examQuestions.length) * 100;
    setScore(calculatedScore);
    setSubmitted(true);
    localStorage.setItem('quimisell_exam_submitted', 'true');
    localStorage.setItem('quimisell_exam_score', String(calculatedScore));
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const executeReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
    localStorage.removeItem('quimisell_exam_answers');
    localStorage.removeItem('quimisell_exam_submitted');
    localStorage.removeItem('quimisell_exam_score');
    setShowResetConfirm(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Cabecera */}
        <header className="p-6 border-b border-slate-150 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-100">
              ✍️
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-none">Evaluación Final</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                Práctica final de 10 preguntas (1 por cada módulo)
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition active:scale-90 font-bold"
          >
            ✕
          </button>
        </header>

        {/* Contenido Deslizable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-hide">
          
          {/* Banner de Resultados */}
          {submitted && score !== null && (
            <div className={`p-8 rounded-[2rem] border text-center relative overflow-hidden animate-in zoom-in-95 duration-300 ${
              score >= 70 
                ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 border-emerald-500 text-white shadow-xl shadow-indigo-100'
                : 'bg-gradient-to-r from-orange-500 to-rose-600 border-rose-500 text-white shadow-xl shadow-rose-100'
            }`}>
              <div className="relative z-10 max-w-xl mx-auto space-y-4">
                <span className="text-4xl block">
                  {score >= 70 ? "🏆 🎉" : "📚 👍"}
                </span>
                
                {score >= 70 ? (
                  <>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                      ¡QuimiSell te felicita por ganar el curso!
                    </h3>
                    <p className="text-sm font-semibold opacity-90 leading-relaxed">
                      Has obtenido una calificación sobresaliente de <strong className="text-yellow-300 text-xl font-black">{score} de 100</strong>.
                      Has completado con éxito la Master Class y dominado los fundamentos de complejidad algorítmica, estructuras de datos avanzadas, teoría de grafos y optimizaciones reales. ¡Felicidades!
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                      ¡Sigue estudiando!
                    </h3>
                    <p className="text-sm font-semibold opacity-90 leading-relaxed">
                      Tu calificación obtenida es de <strong className="text-yellow-200 text-xl font-black">{score} de 100</strong>.
                      Para ganar la Master Class necesitas un mínimo de **70 puntos**. Repasa los temas de los módulos donde tuviste dudas y vuelve a intentarlo presionando el botón de reinicio.
                    </p>
                  </>
                )}
                
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs font-black shadow-lg hover:bg-slate-100 transition active:scale-95 flex items-center gap-1.5 mx-auto"
                  >
                    🔄 Reiniciar Evaluación
                  </button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            </div>
          )}

          {/* Formulario de Preguntas */}
          <div className="space-y-8">
            {examQuestions.map((eq, idx) => {
              const selected = answers[idx];
              const isAnswered = selected !== undefined;
              
              return (
                <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[9px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                      Módulo {eq.moduleId}: {eq.moduleTitle}
                    </span>
                    {submitted && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        selected === eq.question.answerIndex
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {selected === eq.question.answerIndex ? "✓ Correcta" : "✗ Incorrecta"}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-slate-800 font-bold text-base leading-snug">
                    {idx + 1}. {eq.question.question}
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5">
                    {eq.question.options.map((opt, oIdx) => {
                      const isSelected = selected === oIdx;
                      const isCorrect = oIdx === eq.question.answerIndex;
                      
                      let btnStyle = "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/10 text-slate-700";
                      
                      if (submitted) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                        } else if (isSelected) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                        } else {
                          btnStyle = "border-slate-100 opacity-60 text-slate-400 bg-slate-50/30";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-indigo-600 bg-indigo-50/30 text-indigo-950 font-bold ring-2 ring-indigo-600/20";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => {
                            if (!submitted) {
                              setAnswers(prev => ({ ...prev, [idx]: oIdx }));
                            }
                          }}
                          disabled={submitted}
                          className={`flex items-center text-left px-5 py-3.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${btnStyle}`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] mr-3 shrink-0 font-mono ${
                            isSelected 
                              ? 'bg-indigo-600 text-white' 
                              : submitted && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 text-slate-500'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="bg-slate-100/50 p-4 rounded-xl border border-slate-200 text-xs">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600 block mb-1 font-sans">
                        Explicación Académica
                      </span>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {eq.question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
          <div className="text-xs text-slate-500 font-bold">
            {submitted ? (
              <span>Examen calificado. ¡Felicidades por finalizar!</span>
            ) : (
              <span>Progreso: {totalAnswered} de {examQuestions.length} respondidas</span>
            )}
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            {submitted ? (
              <>
                <button
                  onClick={handleReset}
                  className="flex-1 sm:flex-none border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 text-slate-600 px-6 py-3 rounded-full text-xs font-bold transition active:scale-95"
                >
                  🔄 Reiniciar Evaluación
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-800 transition active:scale-95"
                >
                  Cerrar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none border border-slate-200 text-slate-600 px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-100 transition active:scale-95"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!isFinished}
                  className={`flex-1 sm:flex-none px-6 py-3 rounded-full text-xs font-black transition text-white shadow-md ${
                    isFinished 
                      ? 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 cursor-pointer shadow-indigo-200' 
                      : 'bg-slate-300 cursor-not-allowed shadow-none'
                  }`}
                >
                  Enviar Evaluación
                </button>
              </>
            )}
          </div>
        </footer>

      </div>

      {/* Modal de Confirmación de Reinicio */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <span className="text-4xl block">⚠️</span>
            <h3 className="text-lg font-extrabold text-slate-900">¿Reiniciar Evaluación?</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Estás a punto de borrar todas tus respuestas actuales. Tendrás que responder las 10 preguntas desde el principio. ¿Estás seguro?
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 py-2.5 rounded-xl text-xs font-bold transition active:scale-95"
              >
                No, Cancelar
              </button>
              <button
                onClick={executeReset}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-xl text-xs font-bold transition active:scale-95 shadow-md shadow-rose-100"
              >
                Sí, Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Alerta de Validación (Preguntas Faltantes) */}
      {showValidationAlert && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <span className="text-4xl block">📝</span>
            <h3 className="text-lg font-extrabold text-slate-900">Evaluación Incompleta</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Para poder calificar tu examen, debes responder las 10 preguntas planteadas. Revisa y completa las respuestas pendientes antes de enviar.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowValidationAlert(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-xs font-bold transition active:scale-95 shadow-md shadow-indigo-150"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalExamModal;
