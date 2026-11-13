import React, { useState, useMemo } from 'react';
import { Course } from '../domain/models';
import { getCompletedModuleIds } from '../hooks/useModuleProgress';

export type CourseCategory = 'all' | 'cs' | 'ai' | 'security' | 'dev';

interface HomePageProps {
  courses: Course[];
  activeCourseId: string;
  onSelectCourse: (courseId: string) => void;
  onOpenRoadmap: () => void;
  onOpenCheatsheet: () => void;
  onOpenCommandPalette: () => void;
  onOpenStudyPlan: (course: Course) => void;
  progressVersion: number;
}

function getCourseCategory(courseId: string): 'cs' | 'ai' | 'security' | 'dev' {
  switch (courseId) {
    case 'pensamiento_computacional':
    case 'matematica':
    case 'algoritmos':
    case 'complejidad_algoritmica':
    case 'automatas_compiladores':
      return 'cs';
    case 'ingeniero_ia':
    case 'sql_datos_ia':
    case 'evaluacion_ia':
    case 'edge_ia_movil':
      return 'ai';
    case 'kali_linux':
    case 'redes_desarrolladores':
      return 'security';
    case 'clean_code_solid':
    case 'qa_testing_automatizacion':
    case 'git_devops_vercel':
    case 'android_kotlin':
    default:
      return 'dev';
  }
}

export const HomePage: React.FC<HomePageProps> = ({
  courses,
  activeCourseId,
  onSelectCourse,
  onOpenRoadmap,
  onOpenCheatsheet,
  onOpenCommandPalette,
  onOpenStudyPlan,
  progressVersion,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Estadísticas globales de progreso
  const { totalCompletedModules, totalModules, globalPct, activeCourseObj } = useMemo(() => {
    let completed = 0;
    let total = 0;
    for (const c of courses) {
      const doneIds = getCompletedModuleIds(c.id);
      completed += doneIds.size;
      total += c.modules.length;
    }
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const activeObj = courses.find((c) => c.id === activeCourseId) || courses[0];
    return {
      totalCompletedModules: completed,
      totalModules: total,
      globalPct: pct,
      activeCourseObj: activeObj,
    };
  }, [courses, progressVersion, activeCourseId]);

  // Estadísticas de conteo dinámico por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: courses.length, cs: 0, ai: 0, security: 0, dev: 0 };
    for (const c of courses) {
      const cat = getCourseCategory(c.id);
      counts[cat] = (counts[cat] || 0) + 1;
    }
    return counts;
  }, [courses]);

  // Filtrado de cursos por categoría y búsqueda
  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return courses.filter((course) => {
      const category = getCourseCategory(course.id);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.shortTitle.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.badge.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION DE ALTO IMPACTO (Estilo Google Master / Apple) */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-900/90 text-white p-6 sm:p-10 md:p-16 border border-slate-800 shadow-2xl">
        {/* Glows ambientales */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -ml-32 -mb-32 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Master Class QuimiSell • Plataforma Universitaria Gratuita</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Domina las Ciencias de la Computación, <span className="gradient-text">IA & Ciberseguridad</span> de 0 a Universitario
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            14 materias universitarias completas con más de 160 módulos interactivos, simuladores en tiempo real, entornos de ejecución en vivo y preparación rigurosa para entrevistas Big Tech.
          </p>

          {/* Barra de Acciones Principales */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#catalogo"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-600/30 transition active:scale-95 flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>🚀 Explorar los 14 Cursos</span>
            </a>

            <button
              type="button"
              onClick={onOpenRoadmap}
              className="bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold px-5 py-3.5 rounded-2xl border border-slate-700 transition active:scale-95 flex items-center gap-2 cursor-pointer text-sm backdrop-blur-md"
            >
              <span>🗺️ Roadmap de Carrera</span>
            </button>

            <button
              type="button"
              onClick={onOpenCheatsheet}
              className="bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold px-5 py-3.5 rounded-2xl border border-slate-700 transition active:scale-95 flex items-center gap-2 cursor-pointer text-sm backdrop-blur-md"
            >
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              <span>Cheat Sheets</span>
            </button>

            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden sm:flex bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white font-bold px-4 py-3.5 rounded-2xl border border-slate-700/80 transition active:scale-95 items-center gap-2 cursor-pointer text-sm"
            >
              <span>🔍 Buscar...</span>
              <kbd className="text-[10px] bg-slate-900 border border-slate-700 px-2 py-0.5 rounded font-mono">
                Ctrl+K
              </kbd>
            </button>
          </div>

          {/* Banner de progreso personal (si el usuario ya ha avanzado) */}
          {totalCompletedModules > 0 && (
            <div className="pt-4 max-w-xl mx-auto">
              <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-lg font-bold shrink-0">
                    📈
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-300 block">Tu Progreso de Aprendizaje:</span>
                    <span className="text-sm font-extrabold text-white">
                      {totalCompletedModules} de {totalModules} módulos completados ({globalPct}%)
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectCourse(activeCourseObj.id)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition shrink-0 cursor-pointer text-center"
                >
                  Continuar {activeCourseObj.shortTitle} →
                </button>
              </div>
            </div>
          )}

          {/* Estadísticas de Plataforma */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-indigo-400 block font-mono">13</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Materias Completas</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 block font-mono">150+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Módulos Universitarios</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block font-mono">13</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simuladores en Vivo</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-cyan-400 block font-mono">100%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gratuito & Libre</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATÁLOGO INTERACTIVO DE CURSOS (#catalogo) */}
      <section id="catalogo" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Plan de Estudios Integral
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Catálogo de los 14 Cursos Universitarios
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl font-medium">
              Selecciona una materia para iniciar su contenido pedagógico por niveles, experimentar en los simuladores interactivos o ejecutar pruebas de código en vivo.
            </p>
          </div>

          {/* Buscador Rápido en Página */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Buscar curso, tema o tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex items-center gap-2 overflow-x-auto scroll-touch pb-2 scrollbar-hide">
          {[
            { id: 'all', label: 'Todos los Cursos', count: categoryCounts.all },
            { id: 'cs', label: '🧠 Ciencias de la Computación', count: categoryCounts.cs },
            { id: 'ai', label: '🤖 Inteligencia Artificial & Datos', count: categoryCounts.ai },
            { id: 'security', label: '🛡️ Ciberseguridad & Redes', count: categoryCounts.security },
            { id: 'dev', label: '⚙️ Arquitectura & Software', count: categoryCounts.dev },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as CourseCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de Tarjetas de Cursos */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-4xl block">🔍</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No se encontraron cursos para "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Intenta buscar por conceptos como "Big-O", "Kali", "Git", "Kotlin", "SQL" o "Árboles".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition cursor-pointer"
            >
              Limpiar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, idx) => {
              const completedSet = getCompletedModuleIds(course.id);
              const completedCount = completedSet.size;
              const totalCourseModules = course.modules.length;
              const pct = totalCourseModules > 0 ? Math.round((completedCount / totalCourseModules) * 100) : 0;
              const isStarted = completedCount > 0;

              return (
                <div
                  key={course.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Header de la Tarjeta */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-indigo-500/20 dark:from-indigo-500/20 dark:to-purple-500/30 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-3xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                        {course.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                          {course.badge}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          Curso #{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Título y Descripción */}
                    <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed font-medium">
                        {course.description}
                      </p>
                    </div>

                    {/* Características Destacadas */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        🕹️ Simulador Dedicado
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        💻 Code Sandbox
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {totalCourseModules} Módulos
                      </span>
                    </div>
                  </div>

                  {/* Footer de Progreso y Acciones */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    {/* Barra de Progreso del Curso */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-slate-500 dark:text-slate-400 text-[11px]">
                          {isStarted ? `${completedCount} de ${totalCourseModules} módulos` : 'Sin iniciar'}
                        </span>
                        <span className="font-extrabold text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                          {pct}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => onSelectCourse(course.id)}
                        className="flex-1 bg-slate-900 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                      >
                        <span>{isStarted ? 'Continuar Estudio' : 'Comenzar Materia'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenStudyPlan(course)}
                        title="Ver Fundamentación & Plan de Estudios"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer text-xs font-bold"
                      >
                        📄
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. METODOLOGÍA PEDAGÓGICA POR NIVELES (El sello distintivo de QuimiSell) */}
      <section className="bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 p-8 sm:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-900/40 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Metodología Universitaria QuimiSell
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            El Modelo de Aprendizaje Gradual en 3 Niveles
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Cada módulo de cada curso está diseñado para que cualquier persona, sin importar su experiencia previa, pueda alcanzar rigor matemático y estándares de ingeniería senior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-black text-lg">
              0
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Nivel 0 · Fundamentos & Intuición
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Metáforas del mundo real y reglas mnemotécnicas para entender la lógica de cada estructura o algoritmo sin tecnicismos confusos.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-amber-200/80 dark:border-amber-800/60 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 flex items-center justify-center font-black text-lg">
              1
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Nivel Intermedio · Arquitectura & Memoria
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Análisis físico de hardware: Stack vs Heap, memoria caché L1/L2, concurrencia, latencia de red y errores críticos en producción.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-purple-200/80 dark:border-purple-800/60 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-400 flex items-center justify-center font-black text-lg">
              2
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Nivel Universitario · Rigor Matemático
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Demostraciones formales asintóticas (Big-O), límites al infinito, teoría de autómatas de Chomsky y preparación para entrevistas en Big Tech.
            </p>
          </div>
        </div>
      </section>

      {/* 4. RUTAS DE ESPECIALIZACIÓN PROFESIONAL */}
      <section className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Rutas Profesionales
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              4 Especializaciones de Carrera Sugeridas
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Organizamos las 14 materias para prepararte con precisión según tu objetivo profesional.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenRoadmap}
            className="px-4 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold text-xs transition hover:bg-indigo-100 dark:hover:bg-indigo-900/60 cursor-pointer self-start sm:self-auto shrink-0"
          >
            Ver Roadmap Interactivo Completo →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Computer Science Core',
              icon: '🧠',
              courses: 'Pensamiento, Matemática, Algoritmos, Complejidad',
              role: 'Fundamento Ingenieril',
            },
            {
              title: 'AI Systems & LLM Architect',
              icon: '🤖',
              courses: 'Ingeniero IA, SQL & Embeddings, Evaluación LLM, Edge AI',
              role: 'Especialista en IA',
            },
            {
              title: 'Ethical Hacker & DevSecOps',
              icon: '🛡️',
              courses: 'Kali Linux, Redes & Protocolos, Git & DevOps',
              role: 'Seguridad Ofensiva',
            },
            {
              title: 'Software Engineering & Cloud',
              icon: '⚙️',
              courses: 'Clean Code & SOLID, Git & DevOps, Android Kotlin',
              role: 'Arquitecto de Software',
            },
          ].map((track, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{track.icon}</span>
                <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400">
                  {track.role}
                </span>
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">{track.title}</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {track.courses}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BANNER FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-indigo-800/40 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-black max-w-xl mx-auto leading-snug">
          ¿Listo para transformar tu perfil técnico al nivel de las Big Tech?
        </h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto font-medium">
          Elige cualquiera de los 14 cursos universitarios y comienza a aprender hoy mismo con explicaciones visuales y código en vivo.
        </p>
        <div className="pt-2">
          <a
            href="#catalogo"
            className="inline-block bg-white text-indigo-950 hover:bg-slate-100 font-extrabold px-8 py-3.5 rounded-2xl shadow-lg transition active:scale-95 text-sm cursor-pointer"
          >
            Elegir una Materia y Comenzar 🚀
          </a>
        </div>
      </section>

    </div>
  );
};
