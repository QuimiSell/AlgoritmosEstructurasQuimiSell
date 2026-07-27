import React, { useState, useEffect } from 'react';
import { MODULE_EXERCISES, validateExerciseCode } from '../domain/tutor';
import { TutorExercise } from '../domain/models';

interface AIChatDrawerProps {
  moduleTitle: string;
  moduleId: number;
  moduleExercises?: TutorExercise[];
}

const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ moduleTitle, moduleId, moduleExercises }) => {
  // Ejercicios cargados dinámicamente o desde la plantilla por defecto
  const exercises = (moduleExercises && moduleExercises.length > 0) 
    ? moduleExercises 
    : (MODULE_EXERCISES[moduleId] || []);

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

  const handlePaste = () => {
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

    const emailSubject = encodeURIComponent(`Revisión Módulo ${moduleId}: ${moduleTitle.split(': ')[1] || ''}`);
    const emailBody = encodeURIComponent(
      `Hola Profesor QuimiSell,\n\nAdjunto mi código para revisión del Módulo ${moduleId} (${moduleTitle.split(': ')[1] || ''}).\n\n[CÓDIGO COPIADO EN TU PORTAPAPELES - PEGAR AQUÍ CON CTRL+V]\n\nPreguntas o consultas sobre el ejercicio:\n- \n\nQuedo atento a sus comentarios.`
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
            <div>
              {/* Navegación entre ejercicios del módulo si hay más de 1 */}
              {exercises.length > 1 && (
                <div className="flex gap-2 mb-4">
                  {exercises.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveExIdx(idx)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold transition cursor-pointer ${
                        activeExIdx === idx
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Ejercicio {idx + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* Instrucciones */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 space-y-2">
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest block">
                  Instrucción:
                </span>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {currentExercise.instruction}
                </p>
              </div>
            </div>

            {/* Editor interactivo */}
            <div className="space-y-2 flex-1 flex flex-col justify-end">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Espacio de Práctica / Solución:
                </span>
                {pasteDetected && (
                  <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    📋 Texto Pegado
                  </span>
                )}
              </div>

              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                onPaste={handlePaste}
                rows={7}
                placeholder={currentExercise.placeholder}
                className="w-full font-mono text-xs bg-slate-900 text-slate-100 p-4 rounded-2xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />

              {/* Botón de Pista y Validación */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-[11px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3.5 py-2 rounded-xl transition cursor-pointer"
                >
                  💡 {showHint ? 'Ocultar Pista' : 'Ver Pista'}
                </button>

                {!currentExercise.isEmailSubmission ? (
                  <button
                    onClick={handleValidate}
                    className="flex-1 text-[11px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl transition shadow-md cursor-pointer"
                  >
                    Verificar Código
                  </button>
                ) : (
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>📧 Enviar a Revisión por Correo</span>
                  </button>
                )}
              </div>

              {/* Pista desplegable */}
              {showHint && (
                <div className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl text-xs text-amber-900 font-medium">
                  <span className="font-bold">Pista: </span>{currentExercise.hint}
                </div>
              )}

              {/* Resultado de Validación */}
              {validationResult && (
                <div className={`p-3.5 rounded-xl border text-xs font-semibold ${
                  validationResult.success 
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
                    : 'bg-rose-50 text-rose-900 border-rose-200'
                }`}>
                  {validationResult.feedback}
                </div>
              )}

              {/* Alerta de Copiado */}
              {showCopyAlert && (
                <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl text-xs text-indigo-900 font-semibold animate-in fade-in duration-200">
                  ✓ Tu código fue copiado al portapapeles. Pégalo en tu correo si tu cliente no lo incluyó automáticamente.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
            <span className="text-4xl">📝</span>
            <p className="text-xs font-bold">No hay ejercicios específicos programados para este tema aún.</p>
            <p className="text-[11px] font-medium text-slate-400">Revisa la profundización teórica y el cuestionario interactivo.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default AIChatDrawer;
