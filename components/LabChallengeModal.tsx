import React, { useState } from 'react';

interface LabChallengeModalProps {
  onClose: () => void;
}

const LabChallengeModal: React.FC<LabChallengeModalProps> = ({ onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    const subject = encodeURIComponent("Laboratorio QuimiSell: Reto Dijkstra - [Tu Nombre]");
    const body = encodeURIComponent(
      `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio (Simulador de Ruta Óptima con Caché LRU de Rutas).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de mi implementación:\n- \n\nSaludos cordiales.`
    );
    
    // Copiar plantilla de correo al portapapeles
    const emailInfo = `Asunto: Laboratorio QuimiSell: Reto Dijkstra - [Tu Nombre]\n\nHola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio.\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]`;
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
              <h2 className="text-xl font-extrabold text-white leading-none">Laboratorio: Reto de Ingeniería</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                Pon a prueba tus habilidades de optimización asintótica resolviendo un reto real
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition active:scale-90 font-bold"
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
                Desafío Práctico Avanzado
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Simulador de Rutas Óptimas con Caché LRU
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Tu objetivo es construir una aplicación (visual o por terminal) que permita modelar una red de calles/ciudades como un grafo ponderado. 
                El sistema debe calcular la ruta más corta entre dos puntos utilizando el algoritmo de **Dijkstra** o **A***, pero con una restricción de rendimiento real: **debe implementar una Caché LRU de Rutas** con una capacidad fija de **3 elementos**.
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
                <li>• **Grafo:** Modelar al menos 6 vértices y sus respectivas aristas ponderadas (distancias).</li>
                <li>• **Algoritmo de Ruta:** Implementar Dijkstra o A* para buscar la ruta óptima.</li>
                <li>• **Caché LRU (Capacidad 3):** Almacenar las últimas 3 búsquedas. Si se vuelve a buscar la misma ruta, retornar en $O(1)$ sin volver a calcular Dijkstra.</li>
                <li>• **Evicción de Caché:** Al buscar una 4ta ruta diferente, debe eliminar de la caché la ruta menos usada recientemente (LIFO/FIFO no es válido).</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-3">
              <h4 className="font-bold text-indigo-400 text-sm flex items-center gap-2">
                <span>🚫</span> Reglas de Ingeniería (Clean Code)
              </h4>
              <ul className="text-xs text-slate-400 space-y-2 font-semibold leading-relaxed">
                <li>• **Cero Comentarios:** El código debe ser tan descriptivo y modular que no requiera comentarios explicativos (esto evita el uso directo de IA que explica todo).</li>
                <li>• **Estructura SOLID:** Separar la lógica algorítmica (dominio) de la lógica de UI o entrada de datos (adaptadores).</li>
                <li>• **Lenguajes Habilitados:** Desarrollar en **React** (TypeScript/JS) o en **Python**.</li>
              </ul>
            </div>
          </section>

          {/* Flujo de Envío */}
          <section className="bg-slate-950 p-6 rounded-[2rem] border border-slate-850 space-y-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span>✉️</span> Cómo Entregar tu Solución
            </h4>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed">
              Una vez terminado tu simulador, sube todo el código fuente a un repositorio público en **GitHub**. 
              Redacta y envía el enlace al correo de revisión oficial: <strong className="text-indigo-400">quimicabless2020@gmail.com</strong>. El profesor revisará tu estructura, lógica de caché y complejidad de tu código.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl text-xs font-black shadow-lg hover:shadow-indigo-900/30 transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>✉️</span> {copied ? "¡Copiado!" : "Copiar Plantilla y Abrir Correo"}
              </button>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-850 bg-slate-950 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-800 text-slate-200 px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-700 transition active:scale-95 text-center"
          >
            Cerrar Laboratorio
          </button>
        </footer>

      </div>
    </div>
  );
};

export default LabChallengeModal;
