/**
 * Capa de dominio del Backend QuimiSell.
 * Independiente de Express/Docker — solo contratos y entidades.
 */

export interface CourseSummary {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  description: string;
  moduleCount: number;
}

export interface ExamAttempt {
  courseId: string;
  studentId: string;
  answers: Record<string, number>;
  score: number | null;
  submitted: boolean;
  updatedAt: string;
}

export interface ModuleProgress {
  courseId: string;
  studentId: string;
  completedModuleIds: number[];
  lastModuleId: number;
  updatedAt: string;
}

export interface TutorValidationRequest {
  code: string;
  expectedKeywords: string[];
}

export interface TutorValidationResult {
  success: boolean;
  feedback: string;
  matchedKeywords: string[];
  missingKeywords: string[];
}

export interface HealthStatus {
  status: 'ok' | 'degraded';
  service: string;
  version: string;
  uptimeSeconds: number;
  timestamp: string;
  store: 'memory' | 'json';
}
