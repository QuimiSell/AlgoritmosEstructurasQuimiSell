import { Router } from 'express';
import { z } from 'zod';
import { CoursesService } from '../../../application/courses.service.js';
import { ProgressService } from '../../../application/progress.service.js';
import { KeywordTutorValidator } from '../../../application/tutor.service.js';
import { AppEnv } from '../../../config/env.js';
import { HealthStatus } from '../../../domain/models.js';

const startedAt = Date.now();

const examBodySchema = z.object({
  studentId: z.string().min(1).max(128).default('local-student'),
  answers: z.record(z.coerce.number().int().nonnegative()),
  score: z.number().min(0).max(100).nullable().optional(),
  submitted: z.boolean().optional(),
});

const progressBodySchema = z.object({
  studentId: z.string().min(1).max(128).default('local-student'),
  completedModuleIds: z.array(z.number().int().positive()),
  lastModuleId: z.number().int().positive(),
});

const tutorBodySchema = z.object({
  code: z.string().max(20_000),
  expectedKeywords: z.array(z.string().min(1)).min(1).max(40),
});

export interface ApiDeps {
  env: AppEnv;
  courses: CoursesService;
  progress: ProgressService;
  tutor: KeywordTutorValidator;
  version: string;
}

export function createApiRouter(deps: ApiDeps): Router {
  const router = Router();

  router.get('/health', (_req, res) => {
    const payload: HealthStatus = {
      status: 'ok',
      service: 'quimisell-backend',
      version: deps.version,
      uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
      timestamp: new Date().toISOString(),
      store: deps.env.PROGRESS_STORE,
    };
    res.json(payload);
  });

  router.get('/courses', async (_req, res, next) => {
    try {
      const courses = await deps.courses.list();
      res.json({ count: courses.length, courses });
    } catch (err) {
      next(err);
    }
  });

  router.get('/courses/:courseId', async (req, res, next) => {
    try {
      const course = await deps.courses.getById(req.params.courseId);
      if (!course) {
        res.status(404).json({ error: 'course_not_found', courseId: req.params.courseId });
        return;
      }
      res.json(course);
    } catch (err) {
      next(err);
    }
  });

  router.get('/progress/:courseId', async (req, res, next) => {
    try {
      const studentId = String(req.query.studentId ?? 'local-student');
      const data = await deps.progress.getProgress(studentId, req.params.courseId);
      res.json({ studentId, courseId: req.params.courseId, progress: data });
    } catch (err) {
      next(err);
    }
  });

  router.put('/progress/:courseId', async (req, res, next) => {
    try {
      const body = progressBodySchema.parse(req.body);
      const saved = await deps.progress.upsertProgress({
        studentId: body.studentId,
        courseId: req.params.courseId,
        completedModuleIds: body.completedModuleIds,
        lastModuleId: body.lastModuleId,
      });
      res.json(saved);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ error: 'validation_error', issues: err.issues });
        return;
      }
      next(err);
    }
  });

  router.get('/exams/:courseId', async (req, res, next) => {
    try {
      const studentId = String(req.query.studentId ?? 'local-student');
      const attempt = await deps.progress.getExam(studentId, req.params.courseId);
      res.json({ studentId, courseId: req.params.courseId, attempt });
    } catch (err) {
      next(err);
    }
  });

  router.put('/exams/:courseId', async (req, res, next) => {
    try {
      const body = examBodySchema.parse(req.body);
      const saved = await deps.progress.upsertExam({
        studentId: body.studentId,
        courseId: req.params.courseId,
        answers: body.answers,
        score: body.score,
        submitted: body.submitted,
      });
      res.json(saved);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ error: 'validation_error', issues: err.issues });
        return;
      }
      next(err);
    }
  });

  router.post('/tutor/validate', (req, res) => {
    const parsed = tutorBodySchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
      return;
    }
    const result = deps.tutor.validate(parsed.data);
    res.json(result);
  });

  return router;
}
