import React, { useState, useEffect, useMemo } from 'react';
import { Course, QuizQuestion } from '../domain/models';

interface FinalExamModalProps {
  course: Course;
  onClose: () => void;
}

const EXAM_TARGET_QUESTIONS = 20;

const FinalExamModal: React.FC<FinalExamModalProps> = ({ course, onClose }) => {
  // Selecciona al menos 20 preguntas repartidas entre todos los módulos del curso
  const examQuestions = useMemo(() => {
    const modulesWithQuiz = course.modules.filter(m => m.quiz && m.quiz.length > 0);
    if (modulesWithQuiz.length === 0) return [];

    const perModule = Math.max(1, Math.ceil(EXAM_TARGET_QUESTIONS / modulesWithQuiz.length));
    const collected: { question: QuizQuestion; moduleTitle: string; moduleId: number }[] = [];

    for (const m of modulesWithQuiz) {
      const title = m.title.split(': ')[1] || m.title;
      const slice = m.quiz!.slice(0, perModule);
      for (const question of slice) {
        collected.push({ question, moduleTitle: title, moduleId: m.id });
      }
    }

    if (collected.length >= EXAM_TARGET_QUESTIONS) {
      return collected.slice(0, EXAM_TARGET_QUESTIONS);
    }

    // Si aún faltan, tomar más preguntas de cada módulo en ronda adicional
    let round = perModule;
    while (collected.length < EXAM_TARGET_QUESTIONS) {
      let added = false;
      for (const m of modulesWithQuiz) {
        if (collected.length >= EXAM_TARGET_QUESTIONS) break;
        const title = m.title.split(': ')[1] || m.title;
        if (m.quiz!.length > round) {
          collected.push({
            question: m.quiz![round],
            moduleTitle: title,
            moduleId: m.id
          });
          added = true;
        }
      }
      if (!added) break;
      round += 1;
    }

    return collected;
  }, [course]);

  const storageKeyAnswers = `quimisell_exam_answers_${course.id}`;
  const storageKeySubmitted = `quimisell_exam_submitted_${course.id}`;
  const storageKeyScore = `quimisell_exam_score_${course.id}`;

  // Respuestas seleccionadas: { [indicePregunta]: oIdx }
  const [answers, setAnswers] = useState<{ [key: number]: number }>(() => {
    const saved = localStorage.getItem(storageKeyAnswers);
    return saved ? JSON.parse(saved) : {};
  });

  // Estado de envío
  const [submitted, setSubmitted] = useState<boolean>(() => {
    const saved = localStorage.getItem(storageKeySubmitted);
    return saved === 'true';
  });

  // Puntuación obtenida
  const [score, setScore] = useState<number | null>(() => {
    const saved = localStorage.getItem(storageKeyScore);
    return saved ? Number(saved) : null;
  });

  // Estados para alertas y confirmaciones visuales personalizadas
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [showValidationAlert, setShowValidationAlert] = useState<boolean>(false);

  // Persistir respuestas en localStorage mientras se avanza
  useEffect(() => {
    localStorage.setItem(storageKeyAnswers, JSON.stringify(answers));
  }, [answers, storageKeyAnswers]);

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
    localStorage.setItem(storageKeySubmitted, 'true');
    localStorage.setItem(storageKeyScore, String(calculatedScore));
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const executeReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
    localStorage.removeItem(storageKeyAnswers);
    localStorage.removeItem(storageKeySubmitted);
    localStorage.removeItem(storageKeyScore);
    setShowResetConfirm(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto overscroll-contain">
      <div className="bg-white dark:bg-slate-900 rounded-t-[2rem] sm:rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[90dvh] overflow-hidden border border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 pb-[env(safe-area-inset-bottom)]">
        
        {/* Cabecera */}
        <header className="p-4 sm:p-6 border-b border-slate-150 bg-slate-50 flex items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-100 shrink-0">
              ✍️
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug break-words">Evaluación Final: {course.shortTitle}</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                Práctica final integradora de {examQuestions.length} preguntas (mínimo {EXAM_TARGET_QUESTIONS} por curso)
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition active:scale-90 font-bold cursor-pointer"
          >
            ✕
          </button>
        </header>

        {/* Contenido Deslizable */}
        <div className="flex-1 overflow-y-auto overscroll-contain scroll-touch p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 scrollbar-hide min-h-0">
          
          {/* Banner de Estado o Resultado */}
          {submitted ? (
            <section className={`p-8 rounded-[2rem] text-white border relative overflow-hidden shadow-xl ${
              (score ?? 0) >= 70 
                ? 'bg-gradient-to-br from-emerald-600 to-teal-800 border-emerald-500/30' 
                : 'bg-gradient-to-br from-amber-600 to-orange-800 border-amber-500/30'
            }`}>
              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                  Resultado de la Evaluación
                </span>
                <h3 className="text-4xl font-extrabold">
                  {(score ?? 0) >= 70 ? '🎉 ¡Examen Aprobado!' : '📚 Se Requiere Repaso'}
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  Has obtenido una puntuación de <span className="font-extrabold text-2xl ml-1">{score}%</span> ({answers ? Object.keys(answers).filter(idx => answers[Number(idx)] === examQuestions[Number(idx)].question.answerIndex).length : 0} de {examQuestions.length} correctas).
                </p>
              </div>
            </section>
          ) : (
            <section className="bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-slate-800">
              <div>
                <h3 className="font-bold text-lg">Progreso de la Prueba</h3>
                <p className="text-slate-400 text-xs mt-0.5">Responde todas las preguntas para calificar tu nivel.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-indigo-400">{totalAnswered} / {examQuestions.length}</span>
                <div className="w-24 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-300"
                    style={{ width: `${(totalAnswered / examQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </section>
          )}

          {/* Preguntas del Examen */}
          <div className="space-y-6">
            {examQuestions.map((eq, idx) => {
              const selectedOpt = answers[idx];
              const isCorrect = selectedOpt === eq.question.answerIndex;

              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl border transition ${
                    submitted 
                      ? isCorrect 
                        ? 'bg-emerald-50/40 border-emerald-200' 
                        : 'bg-rose-50/40 border-rose-200'
                      : selectedOpt !== undefined
                        ? 'bg-indigo-50/30 border-indigo-200'
                        : 'bg-slate-50/50 border-slate-150'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Módulo {eq.moduleId}: {eq.moduleTitle}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Pregunta {idx + 1}</span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-4 leading-snug">
                    {eq.question.question}
                  </h4>

                  <div className="space-y-2 mb-4">
                    {eq.question.options.map((opt, oIdx) => {
                      let btnStyle = "border-slate-200 bg-white hover:border-indigo-300 text-slate-700";

                      if (submitted) {
                        if (oIdx === eq.question.answerIndex) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                        } else if (selectedOpt === oIdx) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                        } else {
                          btnStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                        }
                      } else if (selectedOpt === oIdx) {
                        btnStyle = "border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-sm";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={submitted}
                          onClick={() => setAnswers(prev => ({ ...prev, [idx]: oIdx }))}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {submitted && oIdx === eq.question.answerIndex && (
                            <span className="text-emerald-600 font-bold">✓ Correcta</span>
                          )}
                          {submitted && selectedOpt === oIdx && oIdx !== eq.question.answerIndex && (
                            <span className="text-rose-600 font-bold">✕ Incorrecta</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="bg-white/80 p-4 rounded-xl border border-slate-200/60 text-xs text-slate-600">
                      <span className="font-bold text-slate-900 block mb-1">💡 Explicación:</span>
                      {eq.question.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Footer de Acciones */}
        <footer className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {submitted ? (
            <button
              onClick={handleReset}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer text-center sm:text-left"
            >
              🔄 Reiniciar y Volver a Intentar
            </button>
          ) : (
            <span className="text-xs font-semibold text-slate-400 text-center sm:text-left">
              Completado: {totalAnswered} de {examQuestions.length}
            </span>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-200 transition cursor-pointer"
            >
              Cerrar
            </button>
            {!submitted && (
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-indigo-700 transition shadow-md cursor-pointer"
              >
                Entregar y Calificar
              </button>
            )}
          </div>
        </footer>

      </div>

      {/* Modal de Confirmación de Reinicio */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ⚠️
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">¿Reiniciar Evaluación?</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Se borrarán tus respuestas guardadas y calificación actual. Deberás responder las {examQuestions.length} preguntas desde el principio.
            </p>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-full hover:bg-slate-200 transition cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={executeReset}
                className="px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded-full hover:bg-rose-700 transition shadow-md cursor-pointer"
              >
                Sí, Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alerta de Validación (Preguntas Incompletas) */}
      {showValidationAlert && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              📝
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Preguntas Pendientes</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Por favor responde las {examQuestions.length} preguntas antes de entregar el examen. 
              Has respondido <span className="font-bold text-slate-900">{totalAnswered} de {examQuestions.length}</span>.
            </p>
            <button
              onClick={() => setShowValidationAlert(false)}
              className="w-full py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 transition shadow-md cursor-pointer"
            >
              Continuar Respondiendo
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FinalExamModal;
