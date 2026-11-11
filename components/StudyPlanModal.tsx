import React from 'react';
import { Course } from '../domain/models';

interface StudyPlanModalProps {
  course: Course;
  onClose: () => void;
}

const StudyPlanModal: React.FC<StudyPlanModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/75 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto overscroll-contain">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-t-[2rem] sm:rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-[90dvh] overflow-hidden border border-slate-200/80 dark:border-slate-800 animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200 pb-[env(safe-area-inset-bottom)]">
        
        {/* Cabecera */}
        <header className="p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md shadow-indigo-600/20 shrink-0">
              {course.icon || '📚'}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Plan de Estudios
                </span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {course.modules.length} Módulos Académicos
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug break-words mt-1">
                {course.title}
              </h2>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose} 
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800 transition active:scale-90 font-bold cursor-pointer shrink-0"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </header>

        {/* Contenido Deslizable */}
        <div className="flex-1 overflow-y-auto overscroll-contain scroll-touch p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 min-h-0">
          
          {/* Sección 1: ¿Por qué estudiar esta materia? */}
          <section className="bg-gradient-to-br from-indigo-50 via-purple-50/60 to-white dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900/90 p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-[2rem] border border-indigo-100 dark:border-indigo-900/50 space-y-3 sm:space-y-4 relative overflow-hidden shadow-xs">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block">
                Fundamentación Universitaria
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                {course.whyStudyTitle}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                {course.whyStudyText}
              </p>
            </div>
            <div className="absolute right-0 top-0 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>
          </section>

          {/* Sección 2: Ventajas a Futuro */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Ventajas en tu Carrera Profesional
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-600 transition">
                <div className="text-2xl">💼</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Criterio Riguroso y Dominio Técnico</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  Aprenderás a razonar analíticamente antes de escribir código, resolviendo problemas complejos con rigor y precisión profesional.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-600 transition">
                <div className="text-2xl">💰</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Optimización de Recursos y Eficiencia</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  El razonamiento algorítmico y de arquitectura evita el sobrecosto de memoria y CPU, asegurando sistemas de alta escala.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-600 transition">
                <div className="text-2xl">🎖️</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Cimiento para IA y Arquitecturas Cloud</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-medium leading-relaxed">
                  El cálculo, álgebra lineal, estructuras de datos y protocolos de red son la base de los modelos de IA modernos y microservicios.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3: Mapa Curricular con desglose de módulos */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Mapa Curricular: {course.studyPlanReasons.length} Temas Clave
              </h3>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
            </div>
            
            <div className="space-y-3">
              {course.studyPlanReasons.map((m) => (
                <div 
                  key={m.id} 
                  className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition group"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                    {m.id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {m.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mt-1.5 leading-relaxed">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">¿Por qué se estudia?:</span> {m.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center sm:text-left">
            Diseñado para preparación de nivel universitario y entrevistas Big Tech.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-xs font-bold transition active:scale-95 text-center cursor-pointer shadow-sm"
          >
            Entendido, Cerrar
          </button>
        </footer>

      </div>
    </div>
  );
};

export default StudyPlanModal;
