import { CourseSummary } from '../domain/models.js';
import { CourseCatalogPort } from '../domain/ports.js';

export class CoursesService {
  constructor(private readonly catalog: CourseCatalogPort) {}

  list(): Promise<CourseSummary[]> {
    return this.catalog.listSummaries();
  }

  async getById(courseId: string): Promise<CourseSummary | null> {
    return this.catalog.getSummaryById(courseId);
  }
}
