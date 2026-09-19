/** Progreso del estudiante en el dispositivo — localStorage, sin servidor ni DB. */

const MODULE_KEY = 'quimisell_module_done';
const QUIZ_KEY = 'quimisell_quiz_pass';

export interface ModuleProgressMap {
  [courseModuleKey: string]: boolean;
}

export interface QuizPassMap {
  [courseModuleKey: string]: { score: number; at: string };
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function courseModuleKey(courseId: string, moduleId: number): string {
  return `${courseId}:${moduleId}`;
}

export function markModuleComplete(courseId: string, moduleId: number): void {
  const map = readJson<ModuleProgressMap>(MODULE_KEY, {});
  map[courseModuleKey(courseId, moduleId)] = true;
  writeJson(MODULE_KEY, map);
}

export function getCompletedModuleIds(courseId: string): Set<number> {
  const map = readJson<ModuleProgressMap>(MODULE_KEY, {});
  const prefix = `${courseId}:`;
  const ids = new Set<number>();
  for (const key of Object.keys(map)) {
    if (map[key] && key.startsWith(prefix)) {
      const id = Number(key.slice(prefix.length));
      if (!Number.isNaN(id)) ids.add(id);
    }
  }
  return ids;
}

export function isModuleComplete(courseId: string, moduleId: number): boolean {
  return getCompletedModuleIds(courseId).has(moduleId);
}

export function markQuizPassed(courseId: string, moduleId: number, scorePct: number): void {
  if (scorePct < 70) return;
  const map = readJson<QuizPassMap>(QUIZ_KEY, {});
  map[courseModuleKey(courseId, moduleId)] = { score: scorePct, at: new Date().toISOString() };
  writeJson(QUIZ_KEY, map);
  markModuleComplete(courseId, moduleId);
}

export function getQuizPass(courseId: string, moduleId: number): QuizPassMap[string] | null {
  const map = readJson<QuizPassMap>(QUIZ_KEY, {});
  return map[courseModuleKey(courseId, moduleId)] ?? null;
}

export function getOverallProgressSummary(): { completedModules: number; quizPasses: number } {
  const modules = readJson<ModuleProgressMap>(MODULE_KEY, {});
  const quizzes = readJson<QuizPassMap>(QUIZ_KEY, {});
  return {
    completedModules: Object.keys(modules).filter((k) => modules[k]).length,
    quizPasses: Object.keys(quizzes).length,
  };
}

export function exportAllProgress(): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      modules: readJson<ModuleProgressMap>(MODULE_KEY, {}),
      quizzes: readJson<QuizPassMap>(QUIZ_KEY, {}),
      exams: Object.keys(localStorage)
        .filter((k) => k.startsWith('quimisell_exam_'))
        .reduce<Record<string, string | null>>((acc, k) => {
          acc[k] = localStorage.getItem(k);
          return acc;
        }, {}),
    },
    null,
    2
  );
}
