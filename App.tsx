import React, { useState } from 'react';
import { COURSE_MODULES } from './constants';
import BigOChart from './components/BigOChart';
import CodeBlock from './components/CodeBlock';
import AIChatDrawer from './components/AIChatDrawer';
import QuizSection from './components/QuizSection';
import FinalExamModal from './components/FinalExamModal';
import StudyPlanModal from './components/StudyPlanModal';
import LabChallengeModal from './components/LabChallengeModal';
import { Module } from './domain/models';

const App: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [courseMenuOpen, setCourseMenuOpen] = useState<boolean>(false);
  const [showFinalExam, setShowFinalExam] = useState<boolean>(false);
  const [showStudyPlan, setShowStudyPlan] = useState<boolean>(false);
  const [showLabChallenge, setShowLabChallenge] = useState<boolean>(false);

  const activeModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              QS
            </div>
            <div className="flex flex-col">
               <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                Master Class <span className="gradient-text">QuimiSell</span>
              </h1>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Algoritmos y Estructuras de Datos</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
             <button 
               onClick={() => setShowStudyPlan(true)}
               className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition cursor-pointer bg-transparent border-none p-0"
             >
               Plan de Estudios
             </button>
             <button 
               onClick={() => setShowLabChallenge(true)}
               className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition cursor-pointer bg-transparent border-none p-0"
             >
               Laboratorio
             </button>
             
             {/* Selector Desplegable de Cursos */}
             <div className="relative">
               <button
                 onClick={() => setCourseMenuOpen(!courseMenuOpen)}
                 className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-full text-xs font-extrabold transition shadow-sm border border-slate-200 cursor-pointer"
               >
                 📚 Cursos <span className="text-[8px] opacity-60">▼</span>
               </button>
               
               {courseMenuOpen && (
                 <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                   <span className="block px-3 py-1.5 text-[8px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                     Selector de Materia
                   </span>
                   <button
                     className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-indigo-50/50 flex items-center gap-2 group transition"
                     onClick={() => setCourseMenuOpen(false)}
                   >
                     <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                     <div className="flex flex-col">
                       <span className="text-xs font-bold text-slate-900">Algoritmos y Estructuras</span>
                       <span className="text-[9px] text-slate-400 font-bold uppercase">Clase Activa</span>
                     </div>
                   </button>
                   
                   <div className="px-3 py-2.5 rounded-xl flex items-center gap-2 opacity-50 cursor-not-allowed select-none">
                     <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                     <div className="flex flex-col">
                       <span className="text-xs font-bold text-slate-700">Patrones de Diseño & SOLID</span>
                       <span className="text-[8px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-black uppercase tracking-wider w-max mt-0.5">Próximamente</span>
                     </div>
                   </div>

                   <div className="px-3 py-2.5 rounded-xl flex items-center gap-2 opacity-50 cursor-not-allowed select-none">
                     <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                     <div className="flex flex-col">
                       <span className="text-xs font-bold text-slate-700">Arquitectura Hexagonal & SOLID</span>
                       <span className="text-[8px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-black uppercase tracking-wider w-max mt-0.5">Próximamente</span>
                     </div>
                   </div>
                 </div>
               )}
             </div>

              <button 
                onClick={() => setShowFinalExam(true)}
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-md active:scale-95"
              >
                Práctica Final
              </button>
          </nav>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-80 p-4 border-r border-slate-200 overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide bg-slate-50/50">
          <div className="space-y-2">
            <h2 className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Progreso del Plan de Estudios</h2>
            {COURSE_MODULES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group relative ${
                  activeModuleId === mod.id 
                    ? 'bg-white text-indigo-700 shadow-md ring-1 ring-slate-200' 
                    : 'text-slate-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  activeModuleId === mod.id ? 'bg-indigo-600 text-white rotate-0' : 'bg-slate-200 text-slate-500 rotate-[-10deg] group-hover:rotate-0'
                }`}>
                  {mod.id}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className={`text-sm font-bold truncate ${activeModuleId === mod.id ? 'text-slate-900' : 'text-slate-600'}`}>
                    {mod.title.split(': ')[1]}
                  </span>
                  <span className="text-[10px] opacity-60 font-medium">Contenido Universitario</span>
                </div>
                {activeModuleId === mod.id && (
                  <div className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full"></div>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 space-y-10 pb-24 overflow-y-auto bg-white">
          {/* Welcome Banner */}
          <section className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200 group">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-500/30">
                Unidad Académica {activeModule.id}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500">
                {activeModule.title}
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed">
                {activeModule.description}
              </p>
            </div>
            {/* Design elements */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 p-8 opacity-10 select-none pointer-events-none">
               <span className="text-9xl font-black">{activeModule.id}</span>
            </div>
          </section>

          {/* Module Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              
              {/* Big O Specific Content for Module 1 */}
              {activeModule.id === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  <BigOChart />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { l: 'O(1)', t: 'Constante', c: 'Acceso por índice en un arreglo' },
                      { l: 'O(log n)', t: 'Logarítmica', c: 'Búsqueda Binaria' },
                      { l: 'O(n)', t: 'Lineal', c: 'Bucle simple (búsqueda lineal)' },
                      { l: 'O(n log n)', t: 'Cuasilineal', c: 'Ordenamiento por mezcla (Merge Sort)' },
                      { l: 'O(n²)', t: 'Cuadrática', c: 'Bucles anidados' },
                      { l: 'O(2ⁿ)', t: 'Exponencial', c: 'Fibonacci recursivo' },
                    ].map(card => (
                      <div key={card.l} className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                        <span className="text-indigo-600 font-black block text-2xl mb-1">{card.l}</span>
                        <span className="text-slate-900 text-sm font-bold block">{card.t}</span>
                        <span className="text-slate-400 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <article className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900">Profundización Teórica</h3>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl font-light">
                  {activeModule.content}
                </p>
                
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-lg">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    Conceptos de Ingeniería
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeModule.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 transition group">
                        <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <span className="text-[10px]">●</span>
                        </div>
                        <span className="text-slate-700 font-semibold text-sm leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {activeModule.codeSnippet && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <h3 className="text-2xl font-bold text-slate-900">Implementación de Referencia</h3>
                     <span className="text-xs font-bold text-slate-400 font-mono">Lenguaje: Python</span>
                  </div>
                  <CodeBlock code={activeModule.codeSnippet} />
                </div>
              )}

              {activeModule.quiz && (
                <QuizSection questions={activeModule.quiz} moduleId={activeModule.id} />
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* IA Assistant Component */}
              <AIChatDrawer moduleTitle={activeModule.title} moduleId={activeModule.id} />
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-8 rounded-[2rem] space-y-4 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 text-lg">
                    <span>💡</span> Perspectiva Profesional
                  </h4>
                  <p className="text-amber-800/80 leading-relaxed font-medium">
                    En las Big Tech como Google o Microsoft, no solo evalúan si tu código funciona, sino su eficiencia asintótica. 
                    <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-amber-900/50">Pro-Tip:</span>
                    Aprende a derivar la complejidad desde los principios fundamentales, no solo de memoria.
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                  <span className="text-7xl">⚡</span>
                </div>
              </div>

              {/* Redes Sociales QuimiSell */}
              <div className="bg-white border border-slate-200 p-8 rounded-[2rem] space-y-6 shadow-xl relative overflow-hidden">
                <div>
                  <h4 className="font-extrabold text-slate-900 flex items-center gap-2 text-lg">
                    <span>📢</span> Comunidad QuimiSell
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 font-semibold leading-relaxed">
                    ¡Aprende algoritmos de forma divertida y rápida! Síguenos en nuestras redes oficiales.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  {/* YouTube Link */}
                  <a
                    href="https://www.youtube.com/@Quimisell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-2xl font-bold text-xs shadow-md shadow-red-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
                  >
                    <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.387.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.503 5.837a3.003 3.003 0 0 0 2.11 2.107c1.882.511 9.387.511 9.387.511s7.505 0 9.387-.511a3.003 3.003 0 0 0 2.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Canal de YouTube</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
                  </a>

                  {/* TikTok Link */}
                  <a
                    href="https://www.tiktok.com/@quimisell0?_r=1&_t=ZS-96glB24PNTk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 bg-slate-950 hover:bg-black text-white rounded-2xl font-bold text-xs shadow-md shadow-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group border border-slate-800"
                  >
                    <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94.94 2.19 1.57 3.53 1.8V9.8c-1.4-.07-2.77-.59-3.87-1.46v6.94c.05 1.56-.37 3.12-1.22 4.43-.88 1.15-2.14 1.94-3.53 2.22-1.44.33-2.97.2-4.32-.38-1.37-.53-2.54-1.54-3.32-2.82-.82-1.24-1.21-2.72-1.12-4.19.12-1.46.77-2.84 1.8-3.8 1.08-.88 2.45-1.36 3.85-1.33.68.01 1.36.13 2.01.35v3.9c-.66-.23-1.38-.28-2.07-.15-.69.11-1.33.46-1.81.97-.48.51-.76 1.19-.79 1.89-.04.7.17 1.41.6 1.96.43.53 1.05.88 1.73.97.69.11 1.4-.04 1.99-.41.6-.39.99-.98 1.11-1.67.06-.9.03-1.81.04-2.72V.02z"/>
                    </svg>
                    <span>Perfil de TikTok</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                <h4 className="font-bold mb-6 text-lg">Status Académico</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>Progreso Total</span>
                    <span>{activeModule.id * 10}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${(activeModule.id / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 italic mt-2">
                    Estás navegando el módulo de {activeModule.title.split(': ')[1].toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 md:hidden z-50">
        <div className="flex gap-4">
           <button 
             onClick={() => setActiveModuleId(prev => Math.max(1, prev - 1))}
             disabled={activeModuleId === 1}
             className="flex-1 border border-slate-200 py-3 rounded-2xl font-bold disabled:opacity-30 bg-white shadow-sm"
           >
             Anterior
           </button>
           <button 
             onClick={() => setActiveModuleId(prev => Math.min(10, prev + 1))}
             disabled={activeModuleId === 10}
             className="flex-1 bg-indigo-600 text-white py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition"
           >
             Siguiente
           </button>
        </div>
      </footer>

      {showFinalExam && (
        <FinalExamModal onClose={() => setShowFinalExam(false)} />
      )}
      {showStudyPlan && (
        <StudyPlanModal onClose={() => setShowStudyPlan(false)} />
      )}
      {showLabChallenge && (
        <LabChallengeModal onClose={() => setShowLabChallenge(false)} />
      )}
    </div>
  );
};

export default App;
