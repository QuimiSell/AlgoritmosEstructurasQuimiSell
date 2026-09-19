import { Course } from '../domain/models';
import { COURSE_STUDY_ORDER } from '../constants/site';
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

const ALL_COURSES_MAP: Record<string, Course> = {
  matematica: MATH_COURSE,
  algoritmos: ALGORITHMS_COURSE,
  complejidad_algoritmica: ALGORITHMIC_COMPLEXITY_COURSE,
  clean_code_solid: CLEAN_CODE_COURSE,
  git_devops_vercel: GIT_DEVOPS_COURSE,
  redes_desarrolladores: REDES_DEV_COURSE,
  sql_datos_ia: SQL_DATOS_IA_COURSE,
  automatas_compiladores: AUTOMATA_COMPILER_COURSE,
  ingeniero_ia: AI_ENGINEER_COURSE,
  evaluacion_ia: EVALUACION_IA_COURSE,
  edge_ia_movil: EDGE_MOBILE_AI_COURSE,
  kali_linux: KALI_LINUX_COURSE,
};

/** Catálogo ordenado por ruta de estudio recomendada (fundamentos → práctica → especialización). */
export const COURSES: Course[] = COURSE_STUDY_ORDER.map(
  (id) => ALL_COURSES_MAP[id]
).filter(Boolean);

export const COURSES_MAP: Record<string, Course> = ALL_COURSES_MAP;

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
