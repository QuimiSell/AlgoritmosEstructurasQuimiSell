import { CourseSummary } from '../domain/models.js';
import { CourseCatalogPort } from '../domain/ports.js';

/**
 * Catálogo liviano alineado con /courses del frontend.
 * El contenido completo de módulos sigue en el cliente (offline-first);
 * el API expone metadatos para paneles, sync y futuros clientes.
 */
const COURSE_CATALOG: CourseSummary[] = [
  {
    id: 'algoritmos',
    title: 'Algoritmos y Estructuras de Datos',
    shortTitle: 'Algoritmos',
    badge: 'Fundamentos',
    icon: '⚡',
    description:
      'Complejidad Big-O, listas, pilas, colas, tablas hash, árboles, grafos, ordenamiento y programación dinámica.',
    moduleCount: 10,
  },
  {
    id: 'kali_linux',
    title: 'Kali Linux: Dominio de Comandos, Auditoría y Diagnóstico de Redes',
    shortTitle: 'Kali Linux',
    badge: 'Ciberseguridad',
    icon: '🐉',
    description:
      'Kernel Linux, Bash, Nmap, NSE, OSINT, Tcpdump, fuzzing web, auditoría y reporte PTES/CVSS.',
    moduleCount: 20,
  },
  {
    id: 'matematica',
    title: 'Fundamentos de Matemáticas Discretas',
    shortTitle: 'Matemática',
    badge: 'Teoría',
    icon: '🧠',
    description:
      'Lógica proposicional, conjuntos, relaciones, inducción, combinatoria y teoría de grafos.',
    moduleCount: 10,
  },
  {
    id: 'automatas_compiladores',
    title: 'Autómatas, Gramáticas y Compiladores',
    shortTitle: 'Autómatas',
    badge: 'Compiladores',
    icon: '⚙️',
    description:
      'Teoría de la computación, DFA/NFA, expresiones regulares, CFG y análisis léxico/sintáctico.',
    moduleCount: 10,
  },
  {
    id: 'clean_code_solid',
    title: 'Clean Code, SOLID y Patrones de Diseño',
    shortTitle: 'Clean Code',
    badge: 'Arquitectura',
    icon: '🧼',
    description:
      'Principios de Robert C. Martin, SOLID y patrones GoF creacionales, estructurales y de comportamiento.',
    moduleCount: 10,
  },
  {
    id: 'ingeniero_ia',
    title: 'Ingeniero de IA: De Vibe Coder a Arquitecto',
    shortTitle: 'Ingeniero IA',
    badge: 'IA / Sistemas',
    icon: '🤖',
    description:
      'Arquitectura guiada por IA, evaluación continua, DevSecOps y orquestación de agentes.',
    moduleCount: 10,
  },
];

export class InMemoryCourseCatalog implements CourseCatalogPort {
  async listSummaries(): Promise<CourseSummary[]> {
    return [...COURSE_CATALOG];
  }

  async getSummaryById(courseId: string): Promise<CourseSummary | null> {
    return COURSE_CATALOG.find((course) => course.id === courseId) ?? null;
  }
}
