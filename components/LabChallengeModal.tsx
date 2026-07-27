import React, { useState } from 'react';
import { Course } from '../domain/models';

interface LabChallengeModalProps {
  course: Course;
  onClose: () => void;
}

const LabChallengeModal: React.FC<LabChallengeModalProps> = ({ course, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const lab = course.labChallenge;

  const handleCopyEmail = () => {
    const subject = encodeURIComponent(lab.emailSubject);
    const body = encodeURIComponent(lab.emailBodyTemplate);
    
    // Copiar plantilla de correo al portapapeles
    const emailInfo = `Asunto: ${lab.emailSubject}\n\n${lab.emailBodyTemplate}`;
    navigator.clipboard.writeText(emailInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    alert("¡Plantilla de correo copiada al portapapeles!\nSe abrirá tu cliente de correo para que pegues los detalles.");
    window.open(`mailto:quimicabless2020@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-slate-100 rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Cabecera */}
        <header className="p-6 border-b border-slate-850 bg-slate-950 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-rose-900/50">
              🧪
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white leading-none">Laboratorio: {course.title}</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                {lab.badge}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition active:scale-90 font-bold cursor-pointer"
          >
            ✕
          </button>
        </header>

        {/* Contenido Deslizable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
          
          {/* Tarjeta del Reto */}
          <section className="bg-gradient-to-r from-indigo-950 to-slate-900 p-6 md:p-8 rounded-[2rem] border border-indigo-900/40 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {lab.badge}
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                {lab.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                {lab.description}
              </p>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[100px] -mr-16 -mt-16"></div>
          </section>

          {/* Requerimientos */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-3">
              <h4 className="font-bold text-rose-400 text-sm flex items-center gap-2">
                <span>🛠️</span> Requerimientos del Sistema
              </h4>
              <ul className="text-xs text-slate-400 space-y-2 font-semibold leading-relaxed">
                {lab.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-3">
              <h4 className="font-bold text-indigo-400 text-sm flex items-center gap-2">
                <span>🚫</span> Reglas de Ingeniería (Clean Code)
              </h4>
              <ul className="text-xs text-slate-400 space-y-2 font-semibold leading-relaxed">
                {lab.cleanCodeRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Flujo de Envío */}
          <section className="bg-slate-950 p-6 rounded-[2rem] border border-slate-850 space-y-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span>✉️</span> Cómo Entregar tu Solución
            </h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Crea un repositorio público en GitHub con tu código. Luego haz clic en el botón de abajo para abrir tu cliente de correo con la plantilla lista y enviarla al catedrático <span className="text-indigo-300 font-bold">quimicabless2020@gmail.com</span>.
            </p>
            <button
              onClick={handleCopyEmail}
              className="w-full bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{copied ? '✓ Plantilla Copiada' : '📧 Enviar Solución por Correo'}</span>
            </button>
          </section>

        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-850 bg-slate-950 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-slate-800 text-slate-300 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-700 transition active:scale-95 cursor-pointer"
          >
            Cerrar Laboratorio
          </button>
        </footer>

      </div>
    </div>
  );
};

export default LabChallengeModal;
