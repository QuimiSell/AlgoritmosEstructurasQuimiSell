import { promises as fs } from 'node:fs';
import path from 'node:path';
import { ExamAttempt, ModuleProgress } from '../../domain/models.js';
import { ProgressRepositoryPort } from '../../domain/ports.js';

interface StoreShape {
  exams: ExamAttempt[];
  progress: ModuleProgress[];
}

/**
 * Persistencia JSON en disco — lista para montar como volumen Docker
 * (ver docs/DOCKER_INTEGRACION.md).
 */
export class JsonProgressRepository implements ProgressRepositoryPort {
  private ready: Promise<void>;

  constructor(private readonly filePath: string) {
    this.ready = this.ensureFile();
  }

  private async ensureFile(): Promise<void> {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });
    try {
      await fs.access(this.filePath);
    } catch {
      const empty: StoreShape = { exams: [], progress: [] };
      await fs.writeFile(this.filePath, JSON.stringify(empty, null, 2), 'utf8');
    }
  }

  private async read(): Promise<StoreShape> {
    await this.ready;
    const raw = await fs.readFile(this.filePath, 'utf8');
    return JSON.parse(raw) as StoreShape;
  }

  private async write(store: StoreShape): Promise<void> {
    await this.ready;
    await fs.writeFile(this.filePath, JSON.stringify(store, null, 2), 'utf8');
  }

  async getExamAttempt(studentId: string, courseId: string): Promise<ExamAttempt | null> {
    const store = await this.read();
    return (
      store.exams.find((e) => e.studentId === studentId && e.courseId === courseId) ?? null
    );
  }

  async saveExamAttempt(attempt: ExamAttempt): Promise<ExamAttempt> {
    const store = await this.read();
    const idx = store.exams.findIndex(
      (e) => e.studentId === attempt.studentId && e.courseId === attempt.courseId
    );
    if (idx >= 0) {
      store.exams[idx] = attempt;
    } else {
      store.exams.push(attempt);
    }
    await this.write(store);
    return attempt;
  }

  async getModuleProgress(studentId: string, courseId: string): Promise<ModuleProgress | null> {
    const store = await this.read();
    return (
      store.progress.find((p) => p.studentId === studentId && p.courseId === courseId) ?? null
    );
  }

  async saveModuleProgress(progress: ModuleProgress): Promise<ModuleProgress> {
    const store = await this.read();
    const idx = store.progress.findIndex(
      (p) => p.studentId === progress.studentId && p.courseId === progress.courseId
    );
    if (idx >= 0) {
      store.progress[idx] = progress;
    } else {
      store.progress.push(progress);
    }
    await this.write(store);
    return progress;
  }
}
