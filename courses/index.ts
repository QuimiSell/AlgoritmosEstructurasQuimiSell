import { Course } from '../domain/models';
import { ALGORITHMS_COURSE } from './algorithmsCourse';
import { ALGORITHMIC_COMPLEXITY_COURSE } from './algorithmicComplexityCourse';
import { MATH_COURSE } from './mathCourse';
import { AUTOMATA_COMPILER_COURSE } from './automataCompilerCourse';
import { CLEAN_CODE_COURSE } from './cleanCodeCourse';
import { AI_ENGINEER_COURSE } from './aiEngineerCourse';
import { KALI_LINUX_COURSE } from './kaliLinuxCourse';
import { GIT_DEVOPS_COURSE } from './gitDevOpsCourse';
import { EDGE_MOBILE_AI_COURSE } from './edgeMobileAiCourse';
import { REDES_DEV_COURSE } from './redesDevCourse';
import { SQL_DATOS_IA_COURSE } from './sqlDatosIaCourse';
import { EVALUACION_IA_COURSE } from './evaluacionIaCourse';

/** Orden: nicho IA móvil + ciber + DevOps primero; teóricos después. */
export const COURSES: Course[] = [
  GIT_DEVOPS_COURSE,
  REDES_DEV_COURSE,
  SQL_DATOS_IA_COURSE,
  EDGE_MOBILE_AI_COURSE,
  EVALUACION_IA_COURSE,
  KALI_LINUX_COURSE,
  ALGORITHMIC_COMPLEXITY_COURSE,
  ALGORITHMS_COURSE,
  AI_ENGINEER_COURSE,
  CLEAN_CODE_COURSE,
  MATH_COURSE,
  AUTOMATA_COMPILER_COURSE,
];

export const COURSES_MAP: Record<string, Course> = {
  git_devops_vercel: GIT_DEVOPS_COURSE,
  redes_desarrolladores: REDES_DEV_COURSE,
  sql_datos_ia: SQL_DATOS_IA_COURSE,
  edge_ia_movil: EDGE_MOBILE_AI_COURSE,
  evaluacion_ia: EVALUACION_IA_COURSE,
  kali_linux: KALI_LINUX_COURSE,
  complejidad_algoritmica: ALGORITHMIC_COMPLEXITY_COURSE,
  algoritmos: ALGORITHMS_COURSE,
  ingeniero_ia: AI_ENGINEER_COURSE,
  clean_code_solid: CLEAN_CODE_COURSE,
  matematica: MATH_COURSE,
  automatas_compiladores: AUTOMATA_COMPILER_COURSE,
};

export {
  ALGORITHMS_COURSE,
  ALGORITHMIC_COMPLEXITY_COURSE,
  KALI_LINUX_COURSE,
  MATH_COURSE,
  AUTOMATA_COMPILER_COURSE,
  CLEAN_CODE_COURSE,
  AI_ENGINEER_COURSE,
  GIT_DEVOPS_COURSE,
  EDGE_MOBILE_AI_COURSE,
  REDES_DEV_COURSE,
  SQL_DATOS_IA_COURSE,
  EVALUACION_IA_COURSE,
};
