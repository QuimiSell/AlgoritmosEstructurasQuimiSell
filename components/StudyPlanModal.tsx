import React from 'react';
import { Course } from '../domain/models';

interface StudyPlanModalProps {
  course: Course;
  onClose: () => void;
}

const StudyPlanModal: React.FC<StudyPlanModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Cabecera */}
        <header className="p-6 border-b border-slate-150 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-100">
              {course.icon || '📚'}
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-none">Plan de Estudios: {course.title}</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                Fundamentación académica y ventajas profesionales
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
          
          {/* Sección 1: ¿Por qué estudiar esta materia? */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8 rounded-[2rem] border border-indigo-100/50 space-y-4">
            <h3 className="text-lg font-extrabold text-indigo-950 flex items-center gap-2">
              {course.whyStudyTitle}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              {course.whyStudyText}
            </p>
          </section>

          {/* Sección 2: Ventajas a Futuro */}
          <section className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              🚀 Ventajas a Futuro en tu Carrera Profesional
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">💼</div>
                <h4 className="font-bold text-slate-900 text-sm">Criterio Riguroso y Dominio Técnico</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  Aprenderás a razonar analíticamente antes de escribir una sola línea de código, permitiéndote resolver problemas complejos con rigor y precisión profesional.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">💰</div>
                <h4 className="font-bold text-slate-900 text-sm">Optimización de Recursos y Eficiencia</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  El razonamiento matemático y algorítmico evita el consumo excesivo de memoria y tiempo de CPU, garantizando software escalable a bajo costo.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">🎖️</div>
                <h4 className="font-bold text-slate-900 text-sm">Fundamento para Inteligencia Artificial</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  Tanto el cálculo como el álgebra de matrices y los algoritmos son el cimiento sobre el cual se construyen los modelos de IA y Machine Learning.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3: Resumen de los 10 Módulos */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-extrabold text-slate-900">Mapa Curricular: Resumen de los 10 Temas</h3>
              <div className="h-px flex-1 bg-slate-150"></div>
            </div>
            
            <div className="space-y-3">
              {course.studyPlanReasons.map((m) => (
                <div key={m.id} className="flex gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-150 hover:bg-white hover:shadow-sm transition">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                    {m.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm leading-snug">{m.title}</h4>
                    <p className="text-slate-500 text-xs font-semibold mt-1 leading-relaxed">
                      <span className="text-indigo-600 font-bold">¿Por qué se estudia?:</span> {m.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-800 transition active:scale-95 text-center cursor-pointer"
          >
            Entendido, Cerrar
          </button>
        </footer>

      </div>
    </div>
  );
};

export default StudyPlanModal;
