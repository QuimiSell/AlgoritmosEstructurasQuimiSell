import React, { useState } from 'react';
import { COURSES, COURSES_MAP } from './courses';
import BigOChart from './components/BigOChart';
import CodeBlock from './components/CodeBlock';
import AIChatDrawer from './components/AIChatDrawer';
import QuizSection from './components/QuizSection';
import FinalExamModal from './components/FinalExamModal';
import StudyPlanModal from './components/StudyPlanModal';
import LabChallengeModal from './components/LabChallengeModal';

const App: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState<string>('algoritmos');
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [courseMenuOpen, setCourseMenuOpen] = useState<boolean>(false);
  const [showFinalExam, setShowFinalExam] = useState<boolean>(false);
  const [showStudyPlan, setShowStudyPlan] = useState<boolean>(false);
  const [showLabChallenge, setShowLabChallenge] = useState<boolean>(false);

  const activeCourse = COURSES_MAP[activeCourseId] || COURSES[0];
  const activeModule = activeCourse.modules.find(m => m.id === activeModuleId) || activeCourse.modules[0];

  const handleSelectCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setActiveModuleId(1);
    setCourseMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              {activeCourse.icon}
            </div>
            <div className="flex flex-col">
               <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none flex items-center gap-2">
                Master Class <span className="gradient-text">QuimiSell</span>
              </h1>
              <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest mt-0.5">
                {activeCourse.shortTitle}
              </span>
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
                 className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 border border-indigo-200 px-4 py-2 rounded-full text-xs font-extrabold transition shadow-sm cursor-pointer"
               >
                 <span>{activeCourse.icon}</span>
                 <span>{activeCourse.shortTitle}</span>
                 <span className="text-[8px] opacity-60 ml-1">▼</span>
               </button>
               
               {courseMenuOpen && (
                 <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                   <span className="block px-3 py-1.5 text-[8px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-1">
                     Selector de Materias Habilitadas ({COURSES.length} Cursos)
                   </span>

                   {COURSES.map(course => {
                     const isSelected = activeCourseId === course.id;
                     return (
                       <button
                         key={course.id}
                         onClick={() => handleSelectCourse(course.id)}
                         className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between group transition cursor-pointer ${
                           isSelected ? 'bg-indigo-50/90 text-indigo-950 font-bold' : 'hover:bg-slate-50 text-slate-700'
                         }`}
                       >
                         <div className="flex items-center gap-2.5">
                           <span className="text-lg">{course.icon}</span>
                           <div className="flex flex-col overflow-hidden">
                             <span className="text-xs font-bold leading-snug truncate">{course.title}</span>
                             <span className="text-[9px] text-slate-400 font-bold uppercase">{course.modules.length} Módulos</span>
                           </div>
                         </div>
                         {isSelected ? (
                           <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-extrabold shrink-0">Activo</span>
                         ) : (
                           <span className="text-xs text-indigo-600 opacity-0 group-hover:opacity-100 font-bold shrink-0">Ver →</span>
                         )}
                       </button>
                     );
                   })}
                 </div>
               )}
             </div>

              <button 
                onClick={() => setShowFinalExam(true)}
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-md active:scale-95 cursor-pointer"
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
            <div className="px-3 mb-4">
              <span className="text-[9px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider block w-max mb-1">
                {activeCourse.badge} ({activeCourse.modules.length} Módulos)
              </span>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Progreso del Plan de Estudios
              </h2>
            </div>

            {activeCourse.modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group relative cursor-pointer ${
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
                    {mod.title.split(': ')[1] || mod.title}
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
                {activeCourse.shortTitle} • Unidad Académica {activeModule.id} de {activeCourse.modules.length}
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
              
              {/* Big O Specific Content for Algoritmos Module 1 */}
              {activeCourseId === 'algoritmos' && activeModule.id === 1 && (
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

              {/* Math Highlights for Matematica Module 1 */}
              {activeCourseId === 'matematica' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'P → Q', t: 'Implicación Lógica', c: 'Falsa solo si P=V y Q=F' },
                    { l: '¬(P ∧ Q)', t: 'De Morgan I', c: 'Equivalente a ¬P ∨ ¬Q' },
                    { l: 'P ∨ ¬P', t: 'Tautología', c: 'Verdadera para todo valor' },
                    { l: 'P ∧ ¬P', t: 'Contradicción', c: 'Falsa para todo valor' },
                    { l: 'P ⊕ Q', t: 'XOR (Disyunción)', c: 'Verdadera si difieren' },
                    { l: 'P ↔ Q', t: 'Bicondicional', c: 'Verdadera si son iguales' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Automata Highlights for Module 1 */}
              {activeCourseId === 'automatas_compiladores' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Σ', t: 'Alfabeto', c: 'Conjunto finito de símbolos (ej: {0,1})' },
                    { l: 'w', t: 'Cadena', c: 'Secuencia finita de símbolos de Σ' },
                    { l: 'ε', t: 'Cadena Vacía', c: 'Cadena de longitud |ε| = 0' },
                    { l: 'Σ*', t: 'Estrella de Kleene', c: 'Todas las cadenas posibles (incluye ε)' },
                    { l: 'Σ+', t: 'Clausura Positiva', c: 'Cadenas de longitud ≥ 1 (excluye ε)' },
                    { l: 'L ⊆ Σ*', t: 'Lenguaje Formal', c: 'Cualquier subconjunto de cadenas de Σ*' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Clean Code Highlights for Module 1 */}
              {activeCourseId === 'clean_code_solid' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Tío Bob', t: 'Robert C. Martin', c: 'Autor de "Clean Code" & SOLID' },
                    { l: 'Boy Scout', t: 'Regla de Oro', c: 'Deja el código más limpio que como estaba' },
                    { l: 'Nombres', t: 'Intención Reveladora', c: 'Expresa el propósito sin comentarios' },
                    { l: '10 a 1', t: 'Ratio Lectura/Escritura', c: 'Pasamos más tiempo leyendo código' },
                    { l: 'Deuda', t: 'Deuda Técnica', c: 'Costo futuro por tomar atajos hoy' },
                    { l: 'Pequeñas', t: 'Funciones de 10 líneas', c: 'Funciones que hacen una sola cosa bien' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* AI Engineer Highlights for Module 1 */}
              {activeCourseId === 'ingeniero_ia' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Arquitecto', t: 'De Vibe Coder a Arquitecto', c: 'La sintaxis la genera la IA; el diseño es tuyo' },
                    { l: 'Hardware', t: 'RAM & CPU Cache', c: 'La IA no siente la latencia física de la CPU' },
                    { l: 'TDD', t: 'Test Automated Harness', c: 'Barrera de contención contra alucinaciones' },
                    { l: 'Seguridad', t: 'DevSecOps & OWASP', c: 'Auditoría estricta de vulnerabilidades' },
                    { l: 'Agentes', t: 'Bucle ReAct & Tools', c: 'Dirigir equipos de subagentes con contexto' },
                    { l: 'Sistemas', t: 'System Design & CAP', c: 'Diseño para millones de usuarios simultáneos' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
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
                    Conceptos Clave de Ingeniería & Arquitectura
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
                     <h3 className="text-2xl font-bold text-slate-900">Implementación / Demostración</h3>
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
              <AIChatDrawer 
                moduleTitle={activeModule.title} 
                moduleId={activeModule.id} 
                moduleExercises={activeModule.exercises}
              />
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-8 rounded-[2rem] space-y-4 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 text-lg">
                    <span>💡</span> Perspectiva Profesional
                  </h4>
                  <p className="text-amber-800/80 leading-relaxed font-medium">
                    {activeCourseId === 'clean_code_solid' ? (
                      "Cualquier programador puede escribir código que una computadora entienda; los ingenieros de elite escriben código que los humanos pueden entender (Tío Bob)."
                    ) : activeCourseId === 'ingeniero_ia' ? (
                      "En la era de la IA, teclear sintaxis es un commoditie. Tu mayor activo es el razonamiento de sistemas, el criterio de arquitectura y la verificación formal."
                    ) : activeCourseId === 'automatas_compiladores' ? (
                      "Dominar autómatas y compiladores te permite entender lo que ocurre en las entrañas de los lenguajes de programación y optimizadores."
                    ) : activeCourseId === 'matematica' ? (
                      "La matemática es la herramienta analítica para formular modelos, optimizar funciones y garantizar el correcto funcionamiento del software."
                    ) : (
                      "En las Big Tech como Google o Microsoft, no solo evalúan si tu código funciona, sino su eficiencia asintótica."
                    )}
                    <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-amber-900/50">Técnica Feynman:</span>
                    Explicar cada concepto con tus propias palabras y código simple es el camino más efectivo para el aprendizaje profundo.
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                  <span className="text-7xl">⚡</span>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {showStudyPlan && (
        <StudyPlanModal course={activeCourse} onClose={() => setShowStudyPlan(false)} />
      )}
      {showLabChallenge && (
        <LabChallengeModal course={activeCourse} onClose={() => setShowLabChallenge(false)} />
      )}
      {showFinalExam && (
        <FinalExamModal course={activeCourse} onClose={() => setShowFinalExam(false)} />
      )}
    </div>
  );
};

export default App;
