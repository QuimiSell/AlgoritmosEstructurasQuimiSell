import { Course } from '../domain/models';
import { ALGORITHMS_COURSE } from './algorithmsCourse';
import { ALGORITHMIC_COMPLEXITY_COURSE } from './algorithmicComplexityCourse';
import { MATH_COURSE } from './mathCourse';
import { AUTOMATA_COMPILER_COURSE } from './automataCompilerCourse';
import { CLEAN_CODE_COURSE } from './cleanCodeCourse';
import { AI_ENGINEER_COURSE } from './aiEngineerCourse';
import { KALI_LINUX_COURSE } from './kaliLinuxCourse';

export const COURSES: Course[] = [
  ALGORITHMS_COURSE,
  ALGORITHMIC_COMPLEXITY_COURSE,
  KALI_LINUX_COURSE,
  MATH_COURSE,
  AUTOMATA_COMPILER_COURSE,
  CLEAN_CODE_COURSE,
  AI_ENGINEER_COURSE
];

export const COURSES_MAP: Record<string, Course> = {
  algoritmos: ALGORITHMS_COURSE,
  complejidad_algoritmica: ALGORITHMIC_COMPLEXITY_COURSE,
  kali_linux: KALI_LINUX_COURSE,
  matematica: MATH_COURSE,
  automatas_compiladores: AUTOMATA_COMPILER_COURSE,
  clean_code_solid: CLEAN_CODE_COURSE,
  ingeniero_ia: AI_ENGINEER_COURSE
};

export { 
  ALGORITHMS_COURSE,
  ALGORITHMIC_COMPLEXITY_COURSE,
  KALI_LINUX_COURSE,
  MATH_COURSE, 
  AUTOMATA_COMPILER_COURSE, 
  CLEAN_CODE_COURSE, 
  AI_ENGINEER_COURSE 
};
