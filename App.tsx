import React, { useState, useEffect } from 'react';
import { COURSES, COURSES_MAP } from './courses';
import BigOChart from './components/BigOChart';
import CodeBlock from './components/CodeBlock';
import AIChatDrawer from './components/AIChatDrawer';
import QuizSection from './components/QuizSection';
import FinalExamModal from './components/FinalExamModal';
import StudyPlanModal from './components/StudyPlanModal';
import LabChallengeModal from './components/LabChallengeModal';
import ThemeToggle from './components/ThemeToggle';
import TheoryContent from './components/TheoryContent';
import AlgorithmsHero from './components/AlgorithmsHero';
import AlgorithmsBigOSection from './components/AlgorithmsBigOSection';
import ComplexityHero from './components/ComplexityHero';
import ComplexityModuleExtras from './components/ComplexityModuleExtras';
import KaliHero, { getKaliPhase } from './components/KaliHero';
import KaliModuleExtras from './components/KaliModuleExtras';
import MathHero, { getMathPhase } from './components/MathHero';
import MathModuleExtras from './components/MathModuleExtras';
import AutomataHero, { getAutomataPhase } from './components/AutomataHero';
import AutomataModuleExtras from './components/AutomataModuleExtras';
import CleanCodeHero, { getCleanCodePhase } from './components/CleanCodeHero';
import CleanCodeModuleExtras from './components/CleanCodeModuleExtras';
import AIEngineerHero, { getAIEngineerPhase } from './components/AIEngineerHero';
import AIEngineerModuleExtras from './components/AIEngineerModuleExtras';
import ModuleNavigation from './components/ModuleNavigation';
import { useTheme } from './hooks/useTheme';

function polishedSidebarActiveClass(courseId: string, modId: number): string {
  if (courseId === 'complejidad_algoritmica' && modId >= 16) {
    return 'bg-gradient-to-r from-fuchsia-50 to-violet-50 dark:from-fuchsia-950/50 dark:to-violet-950/40 text-fuchsia-800 dark:text-fuchsia-200 shadow-md ring-1 ring-fuchsia-200 dark:ring-fuchsia-800';
  }
  if (courseId === 'kali_linux') {
    const phase = getKaliPhase(modId);
    if (phase === 1) return 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 text-emerald-800 dark:text-emerald-200 shadow-md ring-1 ring-emerald-200 dark:ring-emerald-800';
    if (phase === 2) return 'bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/50 dark:to-rose-950/40 text-red-800 dark:text-red-200 shadow-md ring-1 ring-red-200 dark:ring-red-800';
    if (phase === 3) return 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/40 text-amber-900 dark:text-amber-200 shadow-md ring-1 ring-amber-200 dark:ring-amber-800';
    return 'bg-gradient-to-r from-slate-100 to-zinc-100 dark:from-slate-800/60 dark:to-zinc-900/40 text-slate-800 dark:text-slate-200 shadow-md ring-1 ring-slate-300 dark:ring-slate-700';
  }
  if (courseId === 'matematica') {
    const phase = getMathPhase(modId);
    if (phase === 1) return 'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/40 text-indigo-800 dark:text-indigo-200 shadow-md ring-1 ring-indigo-200 dark:ring-indigo-800';
    return 'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/40 text-violet-800 dark:text-violet-200 shadow-md ring-1 ring-violet-200 dark:ring-violet-800';
  }
  if (courseId === 'automatas_compiladores') {
    const phase = getAutomataPhase(modId);
    if (phase === 1) return 'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/50 dark:to-teal-950/40 text-cyan-800 dark:text-cyan-200 shadow-md ring-1 ring-cyan-200 dark:ring-cyan-800';
    if (phase === 2) return 'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/40 text-violet-800 dark:text-violet-200 shadow-md ring-1 ring-violet-200 dark:ring-violet-800';
    return 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/40 text-orange-900 dark:text-orange-200 shadow-md ring-1 ring-orange-200 dark:ring-orange-800';
  }
  if (courseId === 'clean_code_solid') {
    return getCleanCodePhase(modId) === 1
      ? 'bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/50 dark:to-blue-950/40 text-sky-800 dark:text-sky-200 shadow-md ring-1 ring-sky-200 dark:ring-sky-800'
      : 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 text-emerald-800 dark:text-emerald-200 shadow-md ring-1 ring-emerald-200 dark:ring-emerald-800';
  }
  if (courseId === 'ingeniero_ia') {
    const phase = getAIEngineerPhase(modId);
    if (phase === 1) return 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/40 text-blue-800 dark:text-blue-200 shadow-md ring-1 ring-blue-200 dark:ring-blue-800';
    if (phase === 2) return 'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/40 text-indigo-800 dark:text-indigo-200 shadow-md ring-1 ring-indigo-200 dark:ring-indigo-800';
    if (phase === 3) return 'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/40 text-violet-800 dark:text-violet-200 shadow-md ring-1 ring-violet-200 dark:ring-violet-800';
    if (phase === 4) return 'bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/50 dark:to-pink-950/40 text-fuchsia-800 dark:text-fuchsia-200 shadow-md ring-1 ring-fuchsia-200 dark:ring-fuchsia-800';
    return 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/40 text-amber-900 dark:text-amber-200 shadow-md ring-1 ring-amber-200 dark:ring-amber-800';
  }
  return 'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/60 dark:to-violet-950/40 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-indigo-200 dark:ring-indigo-800';
}

function polishedMobileActiveClass(courseId: string, modId: number): string {
  if (courseId === 'complejidad_algoritmica' && modId >= 16) return 'bg-fuchsia-600 text-white shadow-md';
  if (courseId === 'kali_linux') {
    const phase = getKaliPhase(modId);
    if (phase === 1) return 'bg-emerald-600 text-white shadow-md';
    if (phase === 2) return 'bg-red-600 text-white shadow-md';
    if (phase === 3) return 'bg-amber-600 text-white shadow-md';
    return 'bg-slate-700 text-white shadow-md';
  }
  if (courseId === 'matematica') {
    return getMathPhase(modId) === 1 ? 'bg-indigo-600 text-white shadow-md' : 'bg-violet-600 text-white shadow-md';
  }
  if (courseId === 'automatas_compiladores') {
    const phase = getAutomataPhase(modId);
    if (phase === 1) return 'bg-cyan-600 text-white shadow-md';
    if (phase === 2) return 'bg-violet-600 text-white shadow-md';
    return 'bg-orange-600 text-white shadow-md';
  }
  if (courseId === 'clean_code_solid') {
    return getCleanCodePhase(modId) === 1 ? 'bg-sky-600 text-white shadow-md' : 'bg-emerald-600 text-white shadow-md';
  }
  if (courseId === 'ingeniero_ia') {
    const phase = getAIEngineerPhase(modId);
    if (phase === 1) return 'bg-blue-600 text-white shadow-md';
    if (phase === 2) return 'bg-indigo-600 text-white shadow-md';
    if (phase === 3) return 'bg-violet-600 text-white shadow-md';
    if (phase === 4) return 'bg-fuchsia-600 text-white shadow-md';
    return 'bg-amber-600 text-white shadow-md';
  }
  return 'bg-indigo-600 text-white shadow-md';
}

function moduleTrackLabel(courseId: string, modId: number): string {
  if (courseId === 'complejidad_algoritmica' && modId >= 16) return 'Big-O en IA';
  if (courseId === 'kali_linux') {
    const labels = ['Fundamentos Linux', 'Nmap & Recon', 'Auditoría Ofensiva', 'Post-Explotación'];
    return labels[getKaliPhase(modId) - 1];
  }
  if (courseId === 'matematica') {
    return getMathPhase(modId) === 1 ? 'Lógica & Discreta' : 'Álgebra & Cálculo';
  }
  if (courseId === 'automatas_compiladores') {
    const labels = ['Autómatas Finitos', 'Gramáticas & Turing', 'Compiladores'];
    return labels[getAutomataPhase(modId) - 1];
  }
  if (courseId === 'clean_code_solid') {
    return getCleanCodePhase(modId) === 1 ? 'Clean Code & SOLID' : 'Patrones GoF';
  }
  if (courseId === 'ingeniero_ia') {
    const labels = ['Arquitecto IA', 'Ingeniería Rigurosa', 'Sistemas a Escala', 'IA en Producción', 'Liderazgo Senior'];
    return labels[getAIEngineerPhase(modId) - 1];
  }
  return 'Contenido Universitario';
}

const App: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState<string>('algoritmos');
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [courseMenuOpen, setCourseMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showFinalExam, setShowFinalExam] = useState<boolean>(false);
  const [showStudyPlan, setShowStudyPlan] = useState<boolean>(false);
  const [showLabChallenge, setShowLabChallenge] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const activeCourse = COURSES_MAP[activeCourseId] || COURSES[0];
  const isAlgorithmsCourse = activeCourseId === 'algoritmos';
  const isComplexityCourse = activeCourseId === 'complejidad_algoritmica';
  const isKaliCourse = activeCourseId === 'kali_linux';
  const isMathCourse = activeCourseId === 'matematica';
  const isAutomataCourse = activeCourseId === 'automatas_compiladores';
  const isCleanCodeCourse = activeCourseId === 'clean_code_solid';
  const isAIEngineerCourse = activeCourseId === 'ingeniero_ia';
  const isPolishedCourse = true;
  const activeModule = activeCourse.modules.find(m => m.id === activeModuleId) || activeCourse.modules[0];

  const handleSelectCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setActiveModuleId(1);
    setCourseMenuOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: number) => {
    setActiveModuleId(moduleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const lockScroll = mobileMenuOpen || courseMenuOpen;
    document.body.style.overflow = lockScroll ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, courseMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] transition-colors duration-300">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 h-14 sm:h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200 shrink-0">
              {activeCourse.icon}
            </div>
            <div className="flex flex-col min-w-0">
               <h1 className="text-sm sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-none flex items-center gap-1.5 sm:gap-2 truncate">
                Master Class <span className="gradient-text shrink-0">QuimiSell</span>
              </h1>
              <span className="text-[9px] sm:text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest mt-0.5 truncate">
                {activeCourse.shortTitle}
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden shrink-0 w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center text-lg font-bold shadow-sm active:scale-95 transition cursor-pointer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle theme={theme} onToggle={toggleTheme} compact />

          <nav className="hidden lg:flex gap-4 xl:gap-6 items-center shrink-0">
             <button 
               onClick={() => setShowStudyPlan(true)}
               className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0"
             >
               Plan de Estudios
             </button>
             <button 
               onClick={() => setShowLabChallenge(true)}
               className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0"
             >
               Laboratorio
             </button>
             
             {/* Selector Desplegable de Cursos */}
             <div className="relative">
               <button
                 onClick={() => setCourseMenuOpen(!courseMenuOpen)}
                 className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-950 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800 px-4 py-2 rounded-full text-xs font-extrabold transition shadow-sm cursor-pointer"
               >
                 <span>{activeCourse.icon}</span>
                 <span>{activeCourse.shortTitle}</span>
                 <span className="text-[8px] opacity-60 ml-1">▼</span>
               </button>
               
               {courseMenuOpen && (
                 <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                   <span className="block px-3 py-1.5 text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 mb-1">
                     Selector de Materias Habilitadas ({COURSES.length} Cursos)
                   </span>

                   {COURSES.map(course => {
                     const isSelected = activeCourseId === course.id;
                     return (
                       <button
                         key={course.id}
                         onClick={() => handleSelectCourse(course.id)}
                         className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between group transition cursor-pointer ${
                           isSelected ? 'bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-100 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
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
                className="bg-slate-900 dark:bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-indigo-500 transition shadow-md active:scale-95 cursor-pointer"
              >
                Práctica Final
              </button>
          </nav>
          </div>
        </div>

        {/* Mobile navigation panel */}
        {mobileMenuOpen && (
          <>
            <button
              type="button"
              aria-label="Cerrar menú"
              className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-slate-900/40 z-40 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden absolute left-0 right-0 top-full z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain scroll-touch pb-[env(safe-area-inset-bottom)]">
              <div className="p-4 space-y-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-end pb-2">
                  <ThemeToggle theme={theme} onToggle={toggleTheme} />
                </div>
                <button
                  type="button"
                  onClick={() => { setShowStudyPlan(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer"
                >
                  📚 Plan de Estudios
                </button>
                <button
                  type="button"
                  onClick={() => { setShowLabChallenge(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer"
                >
                  🧪 Laboratorio
                </button>
                <button
                  type="button"
                  onClick={() => { setShowFinalExam(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold transition cursor-pointer"
                >
                  ✍️ Práctica Final
                </button>
              </div>
              <div className="p-4">
                <span className="block px-2 py-1 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Cambiar materia ({COURSES.length} cursos)
                </span>
                <div className="space-y-1">
                  {COURSES.map(course => {
                    const isSelected = activeCourseId === course.id;
                    return (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => handleSelectCourse(course.id)}
                        className={`w-full text-left px-3 py-3 rounded-xl flex items-center gap-3 transition cursor-pointer ${
                          isSelected ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100 font-bold ring-1 ring-indigo-200 dark:ring-indigo-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-xl shrink-0">{course.icon}</span>
                        <div className="min-w-0 flex-1">
                          <span className="text-sm font-bold block leading-snug">{course.title}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">{course.modules.length} módulos</span>
                        </div>
                        {isSelected && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md font-extrabold shrink-0">Activo</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-[minmax(260px,18rem)_minmax(0,1fr)] xl:grid-cols-[minmax(280px,20rem)_minmax(0,1fr)] 2xl:grid-cols-[minmax(300px,22rem)_minmax(0,1fr)]">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block p-4 xl:p-5 border-r border-slate-200 dark:border-slate-800 overflow-y-auto lg:max-h-[calc(100dvh-4rem)] overscroll-contain scroll-touch bg-slate-50/50 dark:bg-slate-900/50 min-w-0 transition-colors duration-300">
          <div className="space-y-2">
            <div className="px-3 mb-4">
              <span className="text-[9px] font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-1 rounded-md uppercase tracking-wider block w-max mb-1">
                {activeCourse.badge} ({activeCourse.modules.length} Módulos)
              </span>
              <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Progreso del Plan de Estudios
              </h2>
            </div>

            {activeCourse.modules.map((mod) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => handleSelectModule(mod.id)}
                className={`w-full text-left px-3 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 group relative cursor-pointer ${
                  activeModuleId === mod.id 
                    ? isPolishedCourse
                      ? polishedSidebarActiveClass(activeCourseId, mod.id)
                      : 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-slate-200 dark:ring-slate-700' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                  activeModuleId === mod.id ? 'bg-indigo-600 text-white rotate-0' : 'bg-slate-200 text-slate-500 rotate-[-10deg] group-hover:rotate-0'
                }`}>
                  {mod.id}
                </div>
                <div className="flex flex-col overflow-hidden min-w-0">
                  <span className={`text-sm font-bold truncate ${activeModuleId === mod.id ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>
                    {mod.title.split(': ')[1] || mod.title}
                  </span>
                  <span className="text-[10px] opacity-60 font-medium">
                    {moduleTrackLabel(activeCourseId, mod.id)}
                  </span>
                </div>
                {activeModuleId === mod.id && (
                  <div className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full"></div>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Mobile / Tablet horizontal module strip */}
        <div className="lg:hidden sticky top-14 sm:top-16 z-30 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="px-3 sm:px-4 md:px-6 py-2">
            <span className="text-[9px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-2 px-1">
              Módulo {activeModuleId} / {activeCourse.modules.length} · {activeCourse.shortTitle}
            </span>
            <div className="flex gap-2 overflow-x-auto scroll-touch pb-1 -mx-1 px-1">
              {activeCourse.modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => handleSelectModule(mod.id)}
                  className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-left transition cursor-pointer ${
                    activeModuleId === mod.id
                      ? isPolishedCourse
                        ? polishedMobileActiveClass(activeCourseId, mod.id)
                        : 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black shrink-0 ${
                    activeModuleId === mod.id ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {mod.id}
                  </span>
                  <span className="text-xs font-bold max-w-[9rem] sm:max-w-[12rem] md:max-w-[14rem] truncate">
                    {mod.title.split(': ')[1] || mod.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="min-w-0 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12 space-y-8 sm:space-y-10 pb-20 sm:pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
          {/* Welcome Banner */}
          {isAlgorithmsCourse ? (
            <AlgorithmsHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isComplexityCourse ? (
            <ComplexityHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isKaliCourse ? (
            <KaliHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isMathCourse ? (
            <MathHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isAutomataCourse ? (
            <AutomataHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isCleanCodeCourse ? (
            <CleanCodeHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isAIEngineerCourse ? (
            <AIEngineerHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : (
          <section className="bg-slate-900 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/40 group">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 border border-indigo-500/30">
                {activeCourse.shortTitle} • Unidad {activeModule.id} de {activeCourse.modules.length}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight break-words">
                {activeModule.title}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                {activeModule.description}
              </p>
            </div>
            {/* Design elements */}
            <div className="absolute right-0 top-0 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-600/20 rounded-full blur-[100px] -mr-16 sm:-mr-32 -mt-16 sm:-mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 p-4 sm:p-8 opacity-10 select-none pointer-events-none hidden sm:block">
               <span className="text-7xl sm:text-9xl font-black">{activeModule.id}</span>
            </div>
          </section>
          )}

          {/* Module Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,22rem)] xl:grid-cols-[minmax(0,1.75fr)_minmax(300px,24rem)] 2xl:grid-cols-[minmax(0,2fr)_minmax(340px,26rem)] gap-6 sm:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12">
            <div className="space-y-8 sm:space-y-12 min-w-0">
              
              {/* Big O Specific Content for Algoritmos / Complejidad Module 1 */}
              {activeCourseId === 'algoritmos' && activeModule.id === 1 && (
                <AlgorithmsBigOSection />
              )}
              {isComplexityCourse && (
                <ComplexityModuleExtras moduleId={activeModule.id} />
              )}

              {isMathCourse && (
                <MathModuleExtras moduleId={activeModule.id} />
              )}

              {isAutomataCourse && (
                <AutomataModuleExtras moduleId={activeModule.id} />
              )}

              {isCleanCodeCourse && (
                <CleanCodeModuleExtras moduleId={activeModule.id} />
              )}

              {isAIEngineerCourse && (
                <AIEngineerModuleExtras moduleId={activeModule.id} />
              )}

              {isKaliCourse && (
                <KaliModuleExtras moduleId={activeModule.id} />
              )}

              <article className="space-y-6 min-w-0 reading-card rounded-2xl sm:rounded-[2rem] border border-slate-100 dark:border-slate-800 p-5 sm:p-8 lg:p-10 shadow-sm">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 shrink-0">
                    {isAlgorithmsCourse
                      ? '📖 Profundización Teórica'
                      : isComplexityCourse
                        ? '📊 Profundización Teórica'
                        : isKaliCourse
                          ? '🐉 Profundización Teórica'
                          : isMathCourse
                            ? '📐 Profundización Teórica'
                            : isAutomataCourse
                              ? '⚙️ Profundización Teórica'
                              : isCleanCodeCourse
                                ? '🧼 Profundización Teórica'
                                : isAIEngineerCourse
                                  ? '🤖 Profundización Teórica'
                                  : 'Profundización Teórica'}
                  </h3>
                  <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800 min-w-0"></div>
                </div>
                <TheoryContent content={activeModule.content} />
                
                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-100 dark:border-slate-700/60">
                  <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6 flex items-center gap-3 text-base sm:text-lg">
                    <span className="w-2 h-6 sm:h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full shrink-0"></span>
                    Conceptos Clave de Ingeniería & Arquitectura
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {activeModule.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/60 hover:border-indigo-200 dark:hover:border-indigo-700 transition group">
                        <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <span className="text-[10px]">●</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-200 font-semibold text-sm leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {isPolishedCourse && (
                  <ModuleNavigation
                    currentId={activeModule.id}
                    totalModules={activeCourse.modules.length}
                    onNavigate={handleSelectModule}
                    getTitle={(id) => {
                      const mod = activeCourse.modules.find(m => m.id === id);
                      return mod?.title.split(': ')[1] || mod?.title || '';
                    }}
                  />
                )}
              </article>

              {activeModule.codeSnippet && (
                <div className="space-y-4 sm:space-y-6 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                     <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">Implementación / Demostración</h3>
                     <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono shrink-0">
                       {activeCourseId === 'kali_linux' ? 'Bash / Kali Linux CLI' : 'Python'}
                     </span>
                  </div>
                  <CodeBlock code={activeModule.codeSnippet} />
                </div>
              )}

              {activeModule.quiz && (
                <QuizSection questions={activeModule.quiz} moduleId={activeModule.id} />
              )}
            </div>

            {/* Right Sidebar — sticky en desktop para aprovechar altura en pantallas grandes */}
            <div className="space-y-6 sm:space-y-8 min-w-0 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100dvh-5.5rem)] lg:overflow-y-auto lg:overscroll-contain lg:scroll-touch">
              {/* IA Assistant Component */}
              <AIChatDrawer 
                moduleTitle={activeModule.title} 
                moduleId={activeModule.id} 
                moduleExercises={activeModule.exercises}
              />
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-100 dark:border-amber-900/50 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] space-y-4 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 text-lg">
                    <span>💡</span> Perspectiva Profesional
                  </h4>
                  <p className="text-amber-800/80 dark:text-amber-200/80 leading-relaxed font-medium">
                    {activeCourseId === 'kali_linux' ? (
                      "En ciberseguridad, un escáner automático sin comprensión del paquete TCP subyacente es ruido inútil. Dominar cada flag (-sS, -T, NSE) y el estándar PTES te convierte en un auditor ético de precisión quirúrgica."
                    ) : activeCourseId === 'clean_code_solid' ? (
                      "Cualquier programador puede escribir código que una computadora entienda; los ingenieros de elite escriben código que los humanos pueden entender (Tío Bob)."
                    ) : activeCourseId === 'ingeniero_ia' ? (
                      "En la era de la IA, teclear sintaxis es un commoditie. Tu mayor activo es el razonamiento de sistemas, el criterio de arquitectura y la verificación formal."
                    ) : activeCourseId === 'automatas_compiladores' ? (
                      "Dominar autómatas y compiladores te permite entender lo que ocurre en las entrañas de los lenguajes de programación y optimizadores."
                    ) : activeCourseId === 'matematica' ? (
                      "La matemática es la herramienta analítica para formular modelos, optimizar funciones y garantizar el correcto funcionamiento del software."
                    ) : activeCourseId === 'complejidad_algoritmica' ? (
                      "Big-O es el idioma universal de escalabilidad: desde un bucle en Python hasta los FLOPs de un Transformer en GPU, quien domina la complejidad diseña sistemas que no colapsan."
                    ) : (
                      "En las Big Tech como Google o Microsoft, no solo evalúan si tu código funciona, sino su eficiencia asintótica."
                    )}
                    <span className="block mt-4 text-xs font-bold uppercase tracking-wider text-amber-900/50 dark:text-amber-400/50">Técnica Feynman:</span>
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
