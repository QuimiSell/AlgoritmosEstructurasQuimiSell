/** Datos públicos de contacto y marca QuimiSell — una sola fuente de verdad. */
export const SITE = {
  brand: 'Master Class QuimiSell',
  author: 'Selvin Miguel López Sanic',
  /** Breve, sin vender stack ni manifiesto — la plataforma habla sola. */
  tagline: 'Formación técnica autodidacta y gratuita',
  description:
    'Material de estudio modular. Tu progreso se guarda en este dispositivo; puedes exportarlo cuando quieras.',
  email: 'quimicabless2020@gmail.com',
  youtube: 'https://www.youtube.com/@Quimisell',
  youtubeLabel: 'Canal YouTube @Quimisell',
  linkedin: 'https://www.linkedin.com/in/selvin-miguel-l%C3%B3pez-sanic-791186210',
  linkedinLabel: 'LinkedIn',
  githubOrg: 'https://github.com/QuimiSell',
  repo: 'https://github.com/QuimiSell/AlgoritmosEstructurasQuimiSell',
  year: 2026,
} as const;

/** Orden recomendado del plan de estudios (1 = empezar aquí). */
export const COURSE_STUDY_ORDER: readonly string[] = [
  'matematica',
  'algoritmos',
  'complejidad_algoritmica',
  'clean_code_solid',
  'git_devops_vercel',
  'redes_desarrolladores',
  'sql_datos_ia',
  'automatas_compiladores',
  'ingeniero_ia',
  'evaluacion_ia',
  'edge_ia_movil',
  'kali_linux',
] as const;

export function coursePriorityRank(courseId: string): number {
  const idx = COURSE_STUDY_ORDER.indexOf(courseId as (typeof COURSE_STUDY_ORDER)[number]);
  return idx === -1 ? 99 : idx + 1;
}
