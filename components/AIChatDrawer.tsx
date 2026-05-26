import React, { useState, useEffect } from 'react';
import { MODULE_EXERCISES, validateExerciseCode } from '../domain/tutor';

interface AIChatDrawerProps {
  moduleTitle: string;
  moduleId: number;
}

const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ moduleTitle, moduleId }) => {
  // Estado del Tutor de Ejercicios
  const exercises = MODULE_EXERCISES[moduleId] || [];
  const [activeExIdx, setActiveExIdx] = useState<number>(0);
  const [userCode, setUserCode] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [pasteDetected, setPasteDetected] = useState<boolean>(false);
  const [validationResult, setValidationResult] = useState<{ success: boolean; feedback: string } | null>(null);
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);

  // Reiniciar estados del tutor cuando cambia el módulo
  useEffect(() => {
    setActiveExIdx(0);
    if (exercises.length > 0) {
      setUserCode(exercises[0]?.placeholder || '');
    } else {
      setUserCode('');
    }
    setShowHint(false);
    setPasteDetected(false);
    setValidationResult(null);
  }, [moduleId, exercises]);

  // Cambiar de ejercicio en el mismo módulo
  useEffect(() => {
    if (exercises[activeExIdx]) {
      setUserCode(exercises[activeExIdx].placeholder || '');
    }
    setShowHint(false);
    setPasteDetected(false);
    setValidationResult(null);
  }, [activeExIdx, exercises]);

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    setPasteDetected(true);
  };

  const handleValidate = () => {
    const currentEx = exercises[activeExIdx];
    if (!currentEx) return;
    const result = validateExerciseCode(userCode, currentEx.expectedKeywords);
    setValidationResult(result);
  };

  const handleCopyEmail = () => {
    const currentEx = exercises[activeExIdx];
    if (!currentEx) return;
    
    // Copiar código al portapapeles
    navigator.clipboard.writeText(userCode);
    setShowCopyAlert(true);

    // Personalizar asunto según el módulo para mantener orden
    let subjectTitle = "Algoritmos y Complejidad";
    if (moduleId === 1) subjectTitle = "Fundamentos y Big-O";
    else if (moduleId === 2) subjectTitle = "Estructuras Lineales";
    else if (moduleId === 5) subjectTitle = "Teoría de Grafos";
    else if (moduleId === 10) subjectTitle = "Aplicaciones en el Mundo Real";

    const emailSubject = encodeURIComponent(`Revisión: ${subjectTitle} - Módulo ${moduleId}`);
    const emailBody = encodeURIComponent(
      `Hola Profesor,\n\nAdjunto mi código para revisión del Módulo ${moduleId} (${moduleTitle.split(': ')[1] || ''}).\n\n[CÓDIGO COPIADO EN TU PORTAPAPELES - PEGAR AQUÍ CON CTRL+V]\n\nPreguntas o consultas sobre el ejercicio:\n- \n\nAnálisis de complejidad asintótica de mi solución:\n- Tiempo: \n- Espacio: \n\nQuedo atento a sus comentarios.`
    );
    
    window.open(`mailto:quimicabless2020@gmail.com?subject=${emailSubject}&body=${emailBody}`);
  };

  const currentExercise = exercises[activeExIdx];

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] flex flex-col h-[780px] shadow-xl overflow-hidden ring-1 ring-slate-100 animate-in fade-in duration-500">
      
      {/* Cabecera del Panel */}
      <div className="p-6 border-b border-slate-100 bg-slate-50 flex flex-col gap-1.5 shrink-0">
        <div className="flex justify-between items-center">
          <h3 className="font-extrabold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></span>
            Tutor de Ejercicios
          </h3>
          <span className="text-[9px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
            100% Práctico
          </span>
        </div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
          Tema: {moduleTitle.split(': ')[1] || moduleTitle}
        </span>
      </div>

      {/* Contenedor de Ejercicios */}
      <div className="flex-1 overflow-y-auto bg-white flex flex-col p-6 gap-5">
        {currentExercise ? (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            
            <div className="space-y-4 flex-1 flex flex-col">
              {/* Selector de ejercicio (si hay más de uno) */}
              {exercises.length > 1 && (
                <div className="flex gap-2 shrink-0">
                  {exercises.map((ex, idx) => (
                    <button
                      key={ex.id}
                      onClick={() => setActiveExIdx(idx)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                        activeExIdx === idx 
                          ? 'bg-indigo-600 text-white shadow-md' 
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      Ejercicio {idx + 1} {ex.isEmailSubmission ? "🔥" : ""}
                    </button>
                  ))}
                </div>
              )}

              {/* Instrucción del Ejercicio */}
              <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50 shrink-0">
                <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider block mb-1">
                  {currentExercise.isEmailSubmission ? "Desafío Final - Revisión Manual" : "Ejercicio de Autoevaluación"}
                </span>
                <p className="text-slate-700 text-xs font-semibold leading-relaxed">
                  {currentExercise.instruction}
                </p>
              </div>

              {/* Editor de código con apariencia de terminal */}
              <div className="h-[350px] flex flex-col relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 shrink-0">
                {/* Cabecera de terminal estilo macOS */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-1.5 border-b border-slate-800 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[9px] text-slate-500 font-bold font-mono ml-2">editor_quimisell.py</span>
                </div>
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  onPaste={handlePaste}
                  placeholder="Escribe tu código aquí..."
                  className="w-full flex-1 p-5 bg-slate-950 text-emerald-400 font-mono text-sm focus:outline-none resize-none leading-relaxed caret-white"
                />
                {pasteDetected && (
                  <div className="absolute inset-x-2 bottom-2 bg-amber-50 border border-amber-250 p-3 rounded-xl flex items-start gap-2 shadow-lg animate-in slide-in-from-bottom-2 duration-300">
                    <span className="text-sm">⚠️</span>
                    <p className="text-[10px] text-amber-900 font-bold leading-normal">
                      ¡Cuidado! Escribir el código manualmente te ayudará a asimilar y memorizar mejor los principios algorítmicos. Evita copiar y pegar.
                    </p>
                  </div>
                )}
              </div>

              {/* Resultado de la validación */}
              {validationResult && (
                <div className={`p-4 rounded-xl border text-xs leading-normal shrink-0 animate-in slide-in-from-top-2 duration-200 ${
                  validationResult.success 
                    ? 'bg-emerald-50 border-emerald-250 text-emerald-900 font-semibold' 
                    : 'bg-rose-50 border-rose-250 text-rose-900 font-semibold'
                }`}>
                  <p className="whitespace-pre-line">
                    {validationResult.feedback}
                  </p>
                </div>
              )}
            </div>

            {/* Acciones */}
            <div className="space-y-3 shrink-0">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHint(prev => !prev)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition active:scale-95 shrink-0"
                >
                  💡 {showHint ? "Ocultar Pista" : "Ver Pista"}
                </button>

                {currentExercise.isEmailSubmission ? (
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-3 rounded-xl font-extrabold text-xs shadow-md hover:from-amber-600 hover:to-orange-700 transition active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    📧 Copiar y Enviar a Revisión
                  </button>
                ) : (
                  <button
                    onClick={handleValidate}
                    className="flex-1 bg-indigo-600 text-white px-4 py-3 rounded-xl font-extrabold text-xs shadow-md hover:bg-indigo-700 transition active:scale-95"
                  >
                    🚀 Validar Solución
                  </button>
                )}
              </div>

              {/* Caja de Pista */}
              {showHint && (
                <div className="bg-amber-50/50 border border-amber-200/50 p-4 rounded-2xl animate-in slide-in-from-top-2 duration-200">
                  <span className="text-[9px] font-black uppercase text-amber-800 tracking-wider block mb-1">Pista del Tutor</span>
                  <p className="text-amber-900/80 text-xs font-semibold leading-relaxed">
                    {currentExercise.hint}
                  </p>
                </div>
              )}

              {currentExercise.isEmailSubmission && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <p className="text-[9px] text-slate-500 font-semibold leading-normal">
                    Se enviará a: <span className="text-indigo-600 font-bold">quimicabless2020@gmail.com</span><br/>
                    Asegúrate de detallar tus dudas y análisis de complejidad en el correo.
                  </p>
                </div>
              )}
            </div>

          </div>
        ) : (
          <div className="text-center py-10 text-slate-400 text-xs font-medium">
            No hay ejercicios prácticos en este módulo.
          </div>
        )}
      </div>

      {/* Modal de Alerta de Copiado Personalizado */}
      {showCopyAlert && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <span className="text-4xl block">📋 📧</span>
            <h3 className="text-lg font-extrabold text-slate-900">¡Código Copiado!</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              El código ha sido copiado a tu portapapeles. Se abrirá tu cliente de correo.
              Recuerda pegar tu código usando <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-[10px] font-mono font-bold">Ctrl+V</kbd> y detallar tus dudas antes de enviarlo.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowCopyAlert(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-xs font-bold transition active:scale-95 shadow-md"
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

export default AIChatDrawer;
