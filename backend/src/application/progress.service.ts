import { ExamAttempt, ModuleProgress } from '../domain/models.js';
import { ProgressRepositoryPort } from '../domain/ports.js';

export interface UpsertExamInput {
  studentId: string;
  courseId: string;
  answers: Record<string, number>;
  score?: number | null;
  submitted?: boolean;
}

export interface UpsertProgressInput {
  studentId: string;
  courseId: string;
  completedModuleIds: number[];
  lastModuleId: number;
}

export class ProgressService {
  constructor(private readonly repo: ProgressRepositoryPort) {}

  getExam(studentId: string, courseId: string): Promise<ExamAttempt | null> {
    return this.repo.getExamAttempt(studentId, courseId);
  }

  async upsertExam(input: UpsertExamInput): Promise<ExamAttempt> {
    const attempt: ExamAttempt = {
      studentId: input.studentId,
      courseId: input.courseId,
      answers: input.answers,
      score: input.score ?? null,
      submitted: input.submitted ?? false,
      updatedAt: new Date().toISOString(),
    };
    return this.repo.saveExamAttempt(attempt);
  }

  getProgress(studentId: string, courseId: string): Promise<ModuleProgress | null> {
    return this.repo.getModuleProgress(studentId, courseId);
  }

  async upsertProgress(input: UpsertProgressInput): Promise<ModuleProgress> {
    const progress: ModuleProgress = {
      studentId: input.studentId,
      courseId: input.courseId,
      completedModuleIds: [...new Set(input.completedModuleIds)].sort((a, b) => a - b),
      lastModuleId: input.lastModuleId,
      updatedAt: new Date().toISOString(),
    };
    return this.repo.saveModuleProgress(progress);
  }
}
