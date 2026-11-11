import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { COURSES, COURSES_MAP } from './courses';
import { coursePriorityRank } from './constants/site';
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
import ModuleNavigation from './components/ModuleNavigation';
import SiteFooter from './components/SiteFooter';
import DataStructureVisualizer from './components/DataStructureVisualizer';
import DomainInteractiveSimulator from './components/DomainInteractiveSimulator';
import LiveCodePlayground from './components/LiveCodePlayground';
import LevelProgressiveView from './components/LevelProgressiveView';
import ShareModal from './components/ShareModal';
import CommandPaletteModal from './components/CommandPaletteModal';
import CareerRoadmapModal from './components/CareerRoadmapModal';
import DevCheatsheetModal from './components/DevCheatsheetModal';
import Toast from './components/Toast';
import { useTheme } from './hooks/useTheme';
import { getCompletedModuleIds } from './hooks/useModuleProgress';
import { useMenuDismiss } from './hooks/useMenuDismiss';
import { parseUrlRoute, buildRouteUrl, LearningTab } from './hooks/useUrlRouting';

function polishedSidebarActiveClass(courseId: string, modId: number): string {
  if (courseId === 'algoritmos') {
    if (modId <= 4) return 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 text-emerald-800 dark:text-emerald-200 shadow-md ring-1 ring-emerald-200 dark:ring-emerald-800';
    if (modId <= 12) return 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/40 text-blue-800 dark:text-blue-200 shadow-md ring-1 ring-blue-200 dark:ring-blue-800';
    return 'bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-950/50 dark:to-fuchsia-950/40 text-purple-800 dark:text-purple-200 shadow-md ring-1 ring-purple-200 dark:ring-purple-800';
  }
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
  return 'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/60 dark:to-violet-950/40 text-indigo-700 dark:text-indigo-300 shadow-md ring-1 ring-indigo-200 dark:ring-indigo-800';
}

function polishedMobileActiveClass(courseId: string, modId: number): string {
  if (courseId === 'algoritmos') {
    if (modId <= 4) return 'bg-emerald-600 text-white shadow-md';
    if (modId <= 12) return 'bg-indigo-600 text-white shadow-md';
    return 'bg-purple-600 text-white shadow-md';
  }
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
  return 'bg-indigo-600 text-white shadow-md';
}

function moduleTrackLabel(courseId: string, modId: number): string {
  if (courseId === 'algoritmos') {
    if (modId <= 4) return 'Nivel 0: Fundamentos & RAM';
    if (modId <= 9) return 'Nivel Intermedio: Algoritmia';
    if (modId <= 15) return 'Nivel Univ: Árboles & Grafos';
    return 'Nivel Univ: DP & Big Tech';
  }
  if (courseId === 'git_devops_vercel') return 'Git · CI · Vercel';
  if (courseId === 'redes_desarrolladores') return 'TCP/IP · DNS · HTTP';
  if (courseId === 'sql_datos_ia') return 'SQL · RAG · Datos';
  if (courseId === 'edge_ia_movil') return 'Edge · IA local';
  if (courseId === 'android_kotlin') {
    if (modId <= 10) return 'XML · Views';
    return 'Compose · Jetpack';
  }
  if (courseId === 'evaluacion_ia') return 'Eval · Guardrails · SLO';
  if (courseId === 'ingeniero_ia') return 'Arquitectura IA';
  if (courseId === 'clean_code_solid') return 'Clean Code · SOLID';
  if (courseId === 'automatas_compiladores') return 'Teoría formal';
  if (courseId === 'complejidad_algoritmica' && modId >= 16) return 'Big-O en IA';
  if (courseId === 'kali_linux') {
    const labels = ['Fundamentos Linux', 'Nmap & Recon', 'Auditoría Ofensiva', 'Post-Explotación'];
    return labels[getKaliPhase(modId) - 1];
  }
  if (courseId === 'matematica') {
    return getMathPhase(modId) === 1 ? 'Lógica & Discreta' : 'Álgebra & Cálculo';
  }
  return 'Contenido Universitario';
}

const App: React.FC = () => {
  const initialRoute = useMemo(() => parseUrlRoute(), []);
  const [activeCourseId, setActiveCourseId] = useState<string>(initialRoute.courseId);
  const [learningTab, setLearningTab] = useState<LearningTab>(initialRoute.tab);
  const [activeModuleId, setActiveModuleId] = useState<number>(initialRoute.moduleId);
  const [courseMenuOpen, setCourseMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showFinalExam, setShowFinalExam] = useState<boolean>(false);
  const [showStudyPlan, setShowStudyPlan] = useState<boolean>(false);
  const [showLabChallenge, setShowLabChallenge] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showCommandPalette, setShowCommandPalette] = useState<boolean>(false);
  const [showRoadmap, setShowRoadmap] = useState<boolean>(false);
  const [showCheatsheet, setShowCheatsheet] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [progressVersion, setProgressVersion] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const courseMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeCourseMenu = useCallback(() => setCourseMenuOpen(false), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  useMenuDismiss(courseMenuOpen, closeCourseMenu, courseMenuRef);
  useMenuDismiss(mobileMenuOpen, closeMobileMenu, mobileMenuRef);

  const activeCourse = COURSES_MAP[activeCourseId] || COURSES[0];
  const isAlgorithmsCourse = activeCourseId === 'algoritmos';
  const isComplexityCourse = activeCourseId === 'complejidad_algoritmica';
  const isKaliCourse = activeCourseId === 'kali_linux';
  const isMathCourse = activeCourseId === 'matematica';
  const isPolishedCourse = isAlgorithmsCourse || isComplexityCourse || isKaliCourse || isMathCourse;
  const activeModule = activeCourse.modules.find(m => m.id === activeModuleId) || activeCourse.modules[0];

  const bumpProgress = useCallback(() => setProgressVersion((v) => v + 1), []);
  const completedModuleIds = useMemo(
    () => getCompletedModuleIds(activeCourseId),
    [activeCourseId, progressVersion]
  );
  const moduleDone = useCallback(
    (modId: number) => completedModuleIds.has(modId),
    [completedModuleIds]
  );

  // Sync URL in address bar whenever state changes
  useEffect(() => {
    const targetUrl = buildRouteUrl(activeCourseId, activeModuleId, learningTab);
    const currentFull = window.location.pathname + window.location.search;
    if (currentFull !== targetUrl) {
      window.history.replaceState(null, '', targetUrl);
    }
  }, [activeCourseId, activeModuleId, learningTab]);

  // Handle browser Back / Forward (popstate) & mobile swipe navigation
  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = parseUrlRoute();
      setActiveCourseId(nextRoute.courseId);
      setActiveModuleId(nextRoute.moduleId);
      setLearningTab(nextRoute.tab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut Ctrl + K / Cmd + K for Spotlight Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setActiveModuleId(1);
    setCourseMenuOpen(false);
    setMobileMenuOpen(false);
    const newUrl = buildRouteUrl(courseId, 1, learningTab);
    window.history.pushState(null, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: number) => {
    setActiveModuleId(moduleId);
    const newUrl = buildRouteUrl(activeCourseId, moduleId, learningTab);
    window.history.pushState(null, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: LearningTab) => {
    setLearningTab(tab);
    const newUrl = buildRouteUrl(activeCourseId, activeModuleId, tab);
    window.history.replaceState(null, '', newUrl);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  useEffect(() => {
    const lockScroll = mobileMenuOpen || courseMenuOpen;
    document.body.style.overflow = lockScroll ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, courseMenuOpen]);

  useEffect(() => {
    if (activeModuleId > activeCourse.modules.length) {
      setActiveModuleId(1);
    }
  }, [activeCourseId, activeCourse.modules.length, activeModuleId]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200/80 dark:shadow-indigo-900/40 shrink-0">
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

          {/* Quick Search Palette (Spotlight) */}
          <button
            type="button"
            onClick={() => setShowCommandPalette(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition cursor-pointer"
          >
            <span>🔍</span>
            <span className="hidden md:inline">Buscar...</span>
            <kbd className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile search button */}
          <button
            type="button"
            aria-label="Buscar en cursos"
            onClick={() => setShowCommandPalette(true)}
            className="sm:hidden shrink-0 w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm shadow-sm active:scale-95 transition cursor-pointer"
          >
            🔍
          </button>

          {/* Share button */}
          <button
            type="button"
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-md shadow-indigo-600/25 active:scale-95 transition cursor-pointer shrink-0"
          >
            <span>🔗</span>
            <span className="hidden sm:inline">Compartir</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden shrink-0 w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center text-base font-bold shadow-sm active:scale-95 transition cursor-pointer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle theme={theme} onToggle={toggleTheme} compact />

          <nav className="hidden md:flex gap-3 lg:gap-4 xl:gap-5 items-center shrink-0 min-w-0">
             <button
               type="button"
               onClick={() => setShowRoadmap(true)}
               className="hidden xl:inline text-xs lg:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
             >
               🗺️ Roadmap
             </button>
             <button
               type="button"
               onClick={() => setShowCheatsheet(true)}
               className="hidden xl:inline text-xs lg:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
             >
               ⚡ Cheat Sheets
             </button>
             <button
               type="button"
               onClick={() => setShowStudyPlan(true)}
               className="hidden lg:inline text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
             >
               Plan de Estudios
             </button>
             <button
               type="button"
               onClick={() => setShowLabChallenge(true)}
               className="hidden lg:inline text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
             >
               Laboratorio
             </button>
             
             {/* Selector Desplegable de Cursos */}
             <div className="relative" ref={courseMenuRef}>
               <button
                 type="button"
                 aria-haspopup="menu"
                 aria-expanded={courseMenuOpen}
                 aria-controls="course-menu-panel"
                 onClick={() => setCourseMenuOpen((open) => !open)}
                 className="flex items-center gap-1.5 sm:gap-2 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-950 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-extrabold transition shadow-sm cursor-pointer max-w-[9rem] sm:max-w-none"
               >
                 <span className="shrink-0">{activeCourse.icon}</span>
                 <span className="truncate">{activeCourse.shortTitle}</span>
                 <span className="text-[8px] opacity-60 shrink-0" aria-hidden="true">{courseMenuOpen ? '▲' : '▼'}</span>
               </button>
               
               {courseMenuOpen && (
                 <div
                   id="course-menu-panel"
                   role="menu"
                   aria-label="Seleccionar curso"
                   className="absolute right-0 mt-2 w-[min(20rem,calc(100vw-1.5rem))] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[min(70dvh,28rem)] overflow-y-auto overscroll-contain scroll-touch"
                 >
                   <span className="sticky top-0 z-10 block px-3 py-1.5 text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 mb-1 bg-white dark:bg-slate-900">
                     Plan de estudios · {COURSES.length} materias (orden recomendado)
                   </span>

                   {COURSES.map(course => {
                     const isSelected = activeCourseId === course.id;
                     const rank = coursePriorityRank(course.id);
                     return (
                       <button
                         key={course.id}
                         type="button"
                         role="menuitem"
                         onClick={() => handleSelectCourse(course.id)}
                         className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center justify-between group transition cursor-pointer ${
                           isSelected ? 'bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-100 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                         }`}
                       >
                         <div className="flex items-center gap-2.5 min-w-0">
                           <span className="shrink-0 w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 flex items-center justify-center">
                             {rank}
                           </span>
                           <span className="text-lg shrink-0">{course.icon}</span>
                           <div className="flex flex-col overflow-hidden min-w-0">
                             <span className="text-xs font-bold leading-snug truncate">{course.title}</span>
                             <span className="text-[9px] text-slate-400 font-bold uppercase">{course.modules.length} módulos</span>
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
                type="button"
                onClick={() => setShowFinalExam(true)}
                className="hidden lg:inline bg-slate-900 dark:bg-indigo-600 text-white px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-bold hover:bg-slate-800 dark:hover:bg-indigo-500 transition shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
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
              className="md:hidden fixed inset-0 top-14 sm:top-16 bg-slate-900/40 dark:bg-black/50 z-40 cursor-pointer"
              onClick={closeMobileMenu}
            />
            <div
              ref={mobileMenuRef}
              className="md:hidden absolute left-0 right-0 top-full z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain scroll-touch pb-[env(safe-area-inset-bottom)]"
            >
              <div className="p-4 space-y-2 border-b border-slate-100 dark:border-slate-800">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest pb-1">Herramientas & Exploración</span>
                <button
                  type="button"
                  onClick={() => { setShowCommandPalette(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center justify-between"
                >
                  <span className="flex items-center gap-2"><span>🔍</span><span>Buscar Algoritmos & Temas</span></span>
                  <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded font-mono">Ctrl+K</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowShareModal(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/40 text-indigo-950 dark:text-indigo-200 text-sm font-bold transition cursor-pointer flex items-center gap-2 border border-indigo-200 dark:border-indigo-800"
                >
                  <span>🔗</span>
                  <span>Compartir este Curso / Módulo</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowRoadmap(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center gap-2"
                >
                  <span>🗺️</span>
                  <span>Roadmap de Carrera</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowCheatsheet(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center gap-2"
                >
                  <span>⚡</span>
                  <span>Cheat Sheets & Comandos</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowStudyPlan(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center gap-2"
                >
                  <span>📚</span>
                  <span>Plan de Estudios</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowLabChallenge(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-sm font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center gap-2"
                >
                  <span>🧪</span>
                  <span>Laboratorio</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setShowFinalExam(true); setMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold transition cursor-pointer flex items-center gap-2"
                >
                  <span>✍️</span>
                  <span>Práctica Final</span>
                </button>
              </div>
              <div className="p-4">
                <span className="block px-2 py-1 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Plan de estudios · orden recomendado
                </span>
                <div className="space-y-1">
                  {COURSES.map(course => {
                    const isSelected = activeCourseId === course.id;
                    const rank = coursePriorityRank(course.id);
                    return (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => handleSelectCourse(course.id)}
                        className={`w-full text-left px-3 py-3 rounded-xl flex items-center gap-3 transition cursor-pointer ${
                          isSelected ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100 font-bold ring-1 ring-indigo-200 dark:ring-indigo-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="shrink-0 w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-black text-slate-500 dark:text-slate-400 flex items-center justify-center">
                          {rank}
                        </span>
                        <span className="text-xl shrink-0">{course.icon}</span>
                        <div className="min-w-0 flex-1">
                          <span className="text-sm font-bold block leading-snug line-clamp-2">{course.title}</span>
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

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full min-w-0">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block lg:w-80 p-4 border-r border-slate-200 dark:border-slate-800 overflow-y-auto lg:max-h-[calc(100dvh-4rem)] overscroll-contain scroll-touch bg-slate-50/50 dark:bg-slate-900/50 shrink-0 transition-colors duration-300">
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
                  {moduleDone(mod.id) ? '✓' : mod.id}
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
          <div className="px-3 py-2">
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
                    activeModuleId === mod.id ? 'bg-white/20' : moduleDone(mod.id) ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                  }`}>
                    {moduleDone(mod.id) ? '✓' : mod.id}
                  </span>
                  <span className="text-xs font-bold max-w-[9rem] sm:max-w-[12rem] truncate">
                    {mod.title.split(': ')[1] || mod.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-10 pb-20 sm:pb-24 bg-white dark:bg-slate-950 min-w-0 transition-colors duration-300">
          {/* Welcome Banner */}
          {isAlgorithmsCourse ? (
            <AlgorithmsHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isComplexityCourse ? (
            <ComplexityHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isKaliCourse ? (
            <KaliHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : isMathCourse ? (
            <MathHero module={activeModule} totalModules={activeCourse.modules.length} />
          ) : (
          <section className="bg-slate-900 dark:bg-slate-900/95 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/40 ring-1 ring-slate-800/50 group">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="lg:col-span-2 space-y-8 sm:space-y-12 min-w-0">
              
              {/* Interactive Tabs Toolbar */}
              <div className="bg-slate-100 dark:bg-slate-900/90 p-1.5 sm:p-2 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scroll-touch shadow-sm sticky top-28 sm:top-32 z-20 backdrop-blur-md">
                {[
                  { id: 'all', label: '🌟 Vista Integral' },
                  { id: 'simulator', label: '🕹️ Simulador Visual' },
                  { id: 'playground', label: '💻 Code Playground' },
                  { id: 'theory', label: '📖 Teoría por Niveles' },
                  { id: 'quiz', label: '📝 Evaluación' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id as any)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      learningTab === tab.id
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setShowShareModal(true)}
                  className="ml-auto px-3 py-2 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800/80 transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <span>🔗</span>
                  <span className="hidden sm:inline">Compartir Módulo</span>
                </button>
              </div>

              {/* 1. LEVEL PROGRESSIVE PEDAGOGICAL BREAKDOWN */}
              {(learningTab === 'all' || learningTab === 'theory') && (
                <LevelProgressiveView
                  courseId={activeCourseId}
                  moduleId={activeModule.id}
                  moduleTitle={activeModule.title}
                  theoryContent={activeModule.content}
                  keyConcepts={activeModule.items}
                />
              )}

              {/* 2. INTERACTIVE VISUALIZER SUITE */}
              {(learningTab === 'all' || learningTab === 'simulator') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Simulación Interactiva del Dominio ({activeCourse.shortTitle})
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Modo adaptado a {activeCourse.title}</span>
                  </div>
                  <DomainInteractiveSimulator courseId={activeCourseId} moduleId={activeModule.id} />
                </div>
              )}

              {/* 3. LIVE CODE PLAYGROUND & BENCHMARK SANDBOX */}
              {(learningTab === 'all' || learningTab === 'playground') && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      Entorno de Ejecución & Pruebas en Vivo
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Sandbox V8 / Microsegundos ({activeCourse.shortTitle})</span>
                  </div>
                  <LiveCodePlayground
                    courseId={activeCourseId}
                    moduleId={activeModule.id}
                    initialCode={activeModule.codeSnippet}
                  />
                </div>
              )}

              {/* Big O Specific Content for Algoritmos / Complejidad Module 1 */}
              {(learningTab === 'all' || learningTab === 'theory') && activeCourseId === 'algoritmos' && activeModule.id === 1 && (
                <AlgorithmsBigOSection />
              )}
              {(learningTab === 'all' || learningTab === 'theory') && isComplexityCourse && (
                <ComplexityModuleExtras moduleId={activeModule.id} />
              )}

              {(learningTab === 'all' || learningTab === 'theory') && isMathCourse && (
                <MathModuleExtras moduleId={activeModule.id} />
              )}

              {/* Automata Highlights for Module 1 */}
              {(learningTab === 'all' || learningTab === 'theory') && activeCourseId === 'automatas_compiladores' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Σ', t: 'Alfabeto', c: 'Conjunto finito de símbolos (ej: {0,1})' },
                    { l: 'w', t: 'Cadena', c: 'Secuencia finita de símbolos de Σ' },
                    { l: 'ε', t: 'Cadena Vacía', c: 'Cadena de longitud |ε| = 0' },
                    { l: 'Σ*', t: 'Estrella de Kleene', c: 'Todas las cadenas posibles (incluye ε)' },
                    { l: 'Σ+', t: 'Clausura Positiva', c: 'Cadenas de longitud ≥ 1 (excluye ε)' },
                    { l: 'L ⊆ Σ*', t: 'Lenguaje Formal', c: 'Cualquier subconjunto de cadenas de Σ*' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Clean Code Highlights for Module 1 */}
              {(learningTab === 'all' || learningTab === 'theory') && activeCourseId === 'clean_code_solid' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Tío Bob', t: 'Robert C. Martin', c: 'Autor de "Clean Code" & SOLID' },
                    { l: 'Boy Scout', t: 'Regla de Oro', c: 'Deja el código más limpio que como estaba' },
                    { l: 'Nombres', t: 'Intención Reveladora', c: 'Expresa el propósito sin comentarios' },
                    { l: '10 a 1', t: 'Ratio Lectura/Escritura', c: 'Pasamos más tiempo leyendo código' },
                    { l: 'Deuda', t: 'Deuda Técnica', c: 'Costo futuro por tomar atajos hoy' },
                    { l: 'Pequeñas', t: 'Funciones de 10 líneas', c: 'Funciones que hacen una sola cosa bien' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* AI Engineer Highlights for Module 1 */}
              {(learningTab === 'all' || learningTab === 'theory') && activeCourseId === 'ingeniero_ia' && activeModule.id === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                  {[
                    { l: 'Arquitecto', t: 'De Vibe Coder a Arquitecto', c: 'La sintaxis la genera la IA; el diseño es tuyo' },
                    { l: 'Hardware', t: 'RAM & CPU Cache', c: 'La IA no siente la latencia física de la CPU' },
                    { l: 'TDD', t: 'Test Automated Harness', c: 'Barrera de contención contra alucinaciones' },
                    { l: 'Seguridad', t: 'DevSecOps & OWASP', c: 'Auditoría estricta de vulnerabilidades' },
                    { l: 'Agentes', t: 'Bucle ReAct & Tools', c: 'Dirigir equipos de subagentes con contexto' },
                    { l: 'Sistemas', t: 'System Design & CAP', c: 'Diseño para millones de usuarios simultáneos' },
                  ].map(card => (
                    <div key={card.l} className="group bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-black block text-xl mb-1 font-mono">{card.l}</span>
                      <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
                      <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block font-mono italic">{card.c}</span>
                    </div>
                  ))}
                </div>
              )}

              {(learningTab === 'all' || learningTab === 'theory') && isKaliCourse && (
                <KaliModuleExtras moduleId={activeModule.id} />
              )}

              {/* Theory Article */}
              {(learningTab === 'all' || learningTab === 'theory') && (
                <article className="space-y-6 min-w-0 reading-card rounded-2xl sm:rounded-[2rem] border border-slate-100 dark:border-slate-800 p-5 sm:p-8 lg:p-10 shadow-sm">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 shrink-0">
                      {isAlgorithmsCourse
                        ? '📖 Profundización Teórica Universitaria'
                        : isComplexityCourse
                          ? '📊 Profundización Teórica'
                          : isKaliCourse
                            ? '🐉 Profundización Teórica'
                            : isMathCourse
                              ? '📐 Profundización Teórica'
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              )}

              {/* Code Demonstration Block */}
              {(learningTab === 'all' || learningTab === 'theory') && activeModule.codeSnippet && (
                <div className="space-y-4 sm:space-y-6 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                     <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">Implementación / Demostración</h3>
                     <div className="flex items-center gap-2">
                       <button
                         onClick={() => {
                           setLearningTab('playground');
                           window.scrollTo({ top: 400, behavior: 'smooth' });
                         }}
                         className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1 cursor-pointer"
                       >
                         <span>▶ Probar en el Playground</span>
                       </button>
                       <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono shrink-0">
                         {activeCourseId === 'kali_linux'
                           ? 'Bash / Kali Linux CLI'
                           : activeCourseId === 'android_kotlin'
                             ? 'Kotlin / Android'
                             : 'TypeScript / Python'}
                       </span>
                     </div>
                  </div>
                  <CodeBlock code={activeModule.codeSnippet} />
                </div>
              )}

              {/* Quiz Section */}
              {(learningTab === 'all' || learningTab === 'quiz') && activeModule.quiz && (
                <QuizSection
                  questions={activeModule.quiz}
                  moduleId={activeModule.id}
                  courseId={activeCourseId}
                  onProgressUpdate={bumpProgress}
                />
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 sm:space-y-8 min-w-0">
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
                    ) : activeCourseId === 'git_devops_vercel' ? (
                      "Rama → pull request → CI verde → revisión → merge es el ritmo de cualquier equipo serio. Automatizar build y deploy te libera para pensar en el producto, no en copiar archivos a mano."
                    ) : activeCourseId === 'redes_desarrolladores' ? (
                      "Antes de herramientas ofensivas, entiende DNS, TLS y HTTP. Saber leer un waterfall de red te ahorra horas culpando al framework cuando el problema es latencia o CORS."
                    ) : activeCourseId === 'sql_datos_ia' ? (
                      "Los sistemas con IA necesitan datos ordenados: JOINs correctos, índices y metadata de documentos. Sin eso, cualquier modelo — por bueno que sea — trabaja sobre arena movediza."
                    ) : activeCourseId === 'evaluacion_ia' ? (
                      "Un LLM no pasa assert. Métricas, guardrails y pruebas adversariales separan un demo de algo que puedes mantener en producción sin sorpresas."
                    ) : activeCourseId === 'edge_ia_movil' ? (
                      "Ejecutar modelos en el dispositivo reduce latencia y protege datos del usuario. Cuantización, TFLite y buen diseño de app son habilidades concretas de ingeniería móvil."
                    ) : activeCourseId === 'android_kotlin' ? (
                      "Kotlin, Compose y Room son el estándar industrial. Dominar MVVM, Retrofit y FLAG_SECURE en pantallas sensibles te prepara para apps reales en Play Store, no solo tutoriales de botones."
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

      <SiteFooter />

      {/* Barra Móvil iOS PWA (Optimizada para iPhone, Notch y Grabación de Pantalla) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),10px)] shadow-[0_-4px_25px_rgba(0,0,0,0.12)]">
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1 text-center">
          <button
            type="button"
            onClick={() => handleSelectTab('all')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition active:scale-95 cursor-pointer ${
              learningTab === 'all'
                ? 'text-indigo-600 dark:text-indigo-400 font-extrabold bg-indigo-50 dark:bg-indigo-950/60 shadow-sm'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span className="text-lg">🌟</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Ruta</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('simulator')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition active:scale-95 cursor-pointer ${
              learningTab === 'simulator'
                ? 'text-indigo-600 dark:text-indigo-400 font-extrabold bg-indigo-50 dark:bg-indigo-950/60 shadow-sm'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span className="text-lg">🕹️</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Simulador</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('playground')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition active:scale-95 cursor-pointer ${
              learningTab === 'playground'
                ? 'text-indigo-600 dark:text-indigo-400 font-extrabold bg-indigo-50 dark:bg-indigo-950/60 shadow-sm'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span className="text-lg">💻</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Código</span>
          </button>

          <button
            type="button"
            onClick={() => setShowCommandPalette(true)}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl text-slate-500 dark:text-slate-400 active:scale-95 transition cursor-pointer"
          >
            <span className="text-lg">🔍</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Buscar</span>
          </button>

          <button
            type="button"
            onClick={() => setShowShareModal(true)}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl text-indigo-600 dark:text-indigo-400 font-bold active:scale-95 transition cursor-pointer"
          >
            <span className="text-lg">🔗</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Compartir</span>
          </button>
        </div>
      </nav>

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
      {showShareModal && (
        <ShareModal
          course={activeCourse}
          module={activeModule}
          tab={learningTab}
          onClose={() => setShowShareModal(false)}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      )}
      {showCommandPalette && (
        <CommandPaletteModal
          isOpen={showCommandPalette}
          onClose={() => setShowCommandPalette(false)}
          onSelect={(cId, mId) => {
            handleSelectCourse(cId);
            if (mId > 1) {
              setTimeout(() => handleSelectModule(mId), 50);
            }
          }}
        />
      )}
      {showRoadmap && (
        <CareerRoadmapModal
          onClose={() => setShowRoadmap(false)}
          onSelectCourse={(cId) => {
            handleSelectCourse(cId);
          }}
        />
      )}
      {showCheatsheet && (
        <DevCheatsheetModal
          onClose={() => setShowCheatsheet(false)}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      )}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default App;
