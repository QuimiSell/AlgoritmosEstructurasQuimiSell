import React from 'react';
import { COURSES_MAP } from '../courses';

interface CareerRoadmapModalProps {
  onClose: () => void;
  onSelectCourse: (courseId: string) => void;
}

interface Track {
  id: string;
  title: string;
  badge: string;
  color: string;
  description: string;
  courses: Array<{
    id: string;
    role: string;
    focus: string;
  }>;
}

const CAREER_TRACKS: Track[] = [
  {
    id: 'cs_core',
    title: 'Ciencias de la Computación & Algoritmia Core',
    badge: 'Fundamentos Universitarios',
    color: 'from-blue-600 to-indigo-600',
    description: 'De la lógica discreta y estructuras de datos elementales al Teorema Maestro y compiladores formales.',
    courses: [
      { id: 'pensamiento_computacional', role: 'Paso 0: Inicio', focus: 'Pensamiento, pseudocódigo y Data Path' },
      { id: 'matematica', role: 'Paso 1: Fundamento', focus: 'Lógica booleana, conjuntos y cálculo' },
      { id: 'algoritmos', role: 'Paso 2: Core', focus: '20 módulos: RAM, BST, Grafos y DP' },
      { id: 'complejidad_algoritmica', role: 'Paso 3: Asintótica', focus: 'Big-O, Master Theorem y FLOPs' },
      { id: 'automatas_compiladores', role: 'Paso 4: Teoría Formal', focus: 'DFA, Gramáticas y Parsing' },
    ],
  },
  {
    id: 'software_engineering',
    title: 'Ingeniería de Software & Arquitectura Cloud',
    badge: 'Producción & Buenas Prácticas',
    color: 'from-emerald-600 to-teal-600',
    description: 'Construye sistemas mantenibles, eficientes en red y desplegados con CI/CD automatizado.',
    courses: [
      { id: 'clean_code_solid', role: 'Paso 1: Diseño', focus: 'SOLID, Refactorización y TDD' },
      { id: 'redes_desarrolladores', role: 'Paso 2: Infraestructura', focus: 'TCP/IP, HTTP/3, TLS y DNS' },
      { id: 'sql_datos_ia', role: 'Paso 3: Persistencia', focus: 'SQL, Índices, Explain y Vector DBs' },
      { id: 'git_devops_vercel', role: 'Paso 4: Entrega', focus: 'Git Rebase, GitHub Actions y Vercel' },
    ],
  },
  {
    id: 'ai_systems',
    title: 'Inteligencia Artificial & Edge Engineering',
    badge: 'Nueva Era de la Computación',
    color: 'from-purple-600 to-fuchsia-600',
    description: 'Pasa del "vibe coding" a la arquitectura de agentes, evaluación rigurosa y ejecución en dispositivos móviles.',
    courses: [
      { id: 'ingeniero_ia', role: 'Paso 1: Arquitectura', focus: 'Patrón ReAct, RAG y System Design' },
      { id: 'evaluacion_ia', role: 'Paso 2: Robustez', focus: 'Guardrails, Benchmarks y SLOs' },
      { id: 'edge_ia_movil', role: 'Paso 3: Optimización', focus: 'Cuantización INT8/INT4 y TFLite' },
      { id: 'android_kotlin', role: 'Paso 4: Cliente', focus: 'Jetpack Compose, MVVM y Android' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Ciberseguridad Ofensiva & Pentesting',
    badge: 'Auditoría & Red Team',
    color: 'from-rose-600 to-red-600',
    description: 'Comprende los vectores de ataque desde el paquete TCP hasta la explotación ética con estándar PTES.',
    courses: [
      { id: 'kali_linux', role: 'Ruta Completa', focus: 'Reconocimiento, Nmap, Web Pentesting y Reportes' },
    ],
  },
];

export const CareerRoadmapModal: React.FC<CareerRoadmapModalProps> = ({
  onClose,
  onSelectCourse,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto overscroll-contain text-slate-800 dark:text-slate-100 flex flex-col space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              🗺️ Rutas de Especialización Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Roadmap de Carrera QuimiSell
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Diseñado para llevarte desde la intuición básica hasta la arquitectura senior requerida por la industria tecnológica global.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Tracks Grid */}
        <div className="space-y-6">
          {CAREER_TRACKS.map((track) => (
            <div
              key={track.id}
              className="bg-slate-50/60 dark:bg-slate-950/60 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
                    {track.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
                    {track.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
                  {track.description}
                </p>
              </div>

              {/* Course Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                {track.courses.map((step, idx) => {
                  const course = COURSES_MAP[step.id];
                  if (!course) return null;
                  return (
                    <button
                      key={step.id}
                      onClick={() => {
                        onSelectCourse(step.id);
                        onClose();
                      }}
                      className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl p-1 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            {course.icon}
                          </span>
                          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            {step.role}
                          </span>
                        </div>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                          {course.shortTitle}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                          {step.focus}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span>{course.modules.length} módulos</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-extrabold group-hover:translate-x-1 transition-transform">
                          Ver curso →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CareerRoadmapModal;
