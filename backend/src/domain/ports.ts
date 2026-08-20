import {
  CourseSummary,
  ExamAttempt,
  ModuleProgress,
  TutorValidationRequest,
  TutorValidationResult,
} from './models.js';

/** Puerto de salida: catálogo de cursos (lectura). */
export interface CourseCatalogPort {
  listSummaries(): Promise<CourseSummary[]>;
  getSummaryById(courseId: string): Promise<CourseSummary | null>;
}

/** Puerto de salida: persistencia de progreso y exámenes. */
export interface ProgressRepositoryPort {
  getExamAttempt(studentId: string, courseId: string): Promise<ExamAttempt | null>;
  saveExamAttempt(attempt: ExamAttempt): Promise<ExamAttempt>;
  getModuleProgress(studentId: string, courseId: string): Promise<ModuleProgress | null>;
  saveModuleProgress(progress: ModuleProgress): Promise<ModuleProgress>;
}

/** Puerto de entrada: casos de uso del tutor. */
export interface TutorValidatorPort {
  validate(input: TutorValidationRequest): TutorValidationResult;
}
