import { ExamAttempt, ModuleProgress } from '../../domain/models.js';
import { ProgressRepositoryPort } from '../../domain/ports.js';

function examKey(studentId: string, courseId: string): string {
  return `exam:${studentId}:${courseId}`;
}

function progressKey(studentId: string, courseId: string): string {
  return `progress:${studentId}:${courseId}`;
}

/** Persistencia en memoria — útil en tests y arranque rápido sin volumen. */
export class MemoryProgressRepository implements ProgressRepositoryPort {
  private readonly exams = new Map<string, ExamAttempt>();
  private readonly progress = new Map<string, ModuleProgress>();

  async getExamAttempt(studentId: string, courseId: string): Promise<ExamAttempt | null> {
    return this.exams.get(examKey(studentId, courseId)) ?? null;
  }

  async saveExamAttempt(attempt: ExamAttempt): Promise<ExamAttempt> {
    this.exams.set(examKey(attempt.studentId, attempt.courseId), attempt);
    return attempt;
  }

  async getModuleProgress(studentId: string, courseId: string): Promise<ModuleProgress | null> {
    return this.progress.get(progressKey(studentId, courseId)) ?? null;
  }

  async saveModuleProgress(progress: ModuleProgress): Promise<ModuleProgress> {
    this.progress.set(progressKey(progress.studentId, progress.courseId), progress);
    return progress;
  }
}
