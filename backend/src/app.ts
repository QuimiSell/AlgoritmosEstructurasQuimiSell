import path from 'node:path';
import cors from 'cors';
import express, { Express } from 'express';
import { CoursesService } from './application/courses.service.js';
import { ProgressService } from './application/progress.service.js';
import { KeywordTutorValidator } from './application/tutor.service.js';
import { AppEnv } from './config/env.js';
import { InMemoryCourseCatalog } from './data/courses.catalog.js';
import { errorHandler, notFoundHandler, requestLogger } from './infrastructure/http/middleware/common.js';
import { createApiRouter } from './infrastructure/http/routes/api.routes.js';
import { JsonProgressRepository } from './infrastructure/persistence/json.progress.repository.js';
import { MemoryProgressRepository } from './infrastructure/persistence/memory.progress.repository.js';

export interface CreateAppOptions {
  env: AppEnv;
  version?: string;
}

export function createApp(options: CreateAppOptions): Express {
  const { env } = options;
  const version = options.version ?? '0.1.0';

  const catalog = new InMemoryCourseCatalog();
  const courses = new CoursesService(catalog);
  const tutor = new KeywordTutorValidator();

  const progressRepo =
    env.PROGRESS_STORE === 'memory'
      ? new MemoryProgressRepository()
      : new JsonProgressRepository(path.resolve(env.DATA_DIR, 'progress-store.json'));

  const progress = new ProgressService(progressRepo);

  const app = express();
  app.disable('x-powered-by');
  app.use(express.json({ limit: '1mb' }));
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    })
  );

  if (env.LOG_LEVEL !== 'silent') {
    app.use(requestLogger);
  }

  app.get('/', (_req, res) => {
    res.json({
      name: 'Master Class QuimiSell API',
      version,
      docs: 'Ver backend/README.md y docs/DOCKER_INTEGRACION.md',
      endpoints: {
        health: 'GET /api/v1/health',
        courses: 'GET /api/v1/courses',
        progress: 'GET|PUT /api/v1/progress/:courseId',
        exams: 'GET|PUT /api/v1/exams/:courseId',
        tutor: 'POST /api/v1/tutor/validate',
      },
    });
  });

  app.use(
    '/api/v1',
    createApiRouter({
      env,
      courses,
      progress,
      tutor,
      version,
    })
  );

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
