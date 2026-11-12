import { useEffect, useCallback } from 'react';
import { COURSES_MAP, COURSES } from '../courses';

export type LearningTab = 'all' | 'simulator' | 'playground' | 'theory' | 'quiz';

export interface RouteState {
  isHome: boolean;
  courseId: string;
  moduleId: number;
  tab: LearningTab;
}

const ALIASES: Record<string, string> = {
  git: 'git_devops_vercel',
  devops: 'git_devops_vercel',
  redes: 'redes_desarrolladores',
  sql: 'sql_datos_ia',
  kali: 'kali_linux',
  linux: 'kali_linux',
  android: 'android_kotlin',
  kotlin: 'android_kotlin',
  complejidad: 'complejidad_algoritmica',
  bigo: 'complejidad_algoritmica',
  ia: 'ingeniero_ia',
  evaluacion: 'evaluacion_ia',
  edge: 'edge_ia_movil',
  automatas: 'automatas_compiladores',
  clean: 'clean_code_solid',
  solid: 'clean_code_solid',
  math: 'matematica',
};

export function parseUrlRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { isHome: true, courseId: 'algoritmos', moduleId: 1, tab: 'all' };
  }

  const path = window.location.pathname.toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();

  let detectedCourse = '';
  let detectedModule = 1;
  let detectedTab: LearningTab = 'all';

  // 1. Parse Path (/curso/algoritmos/modulo/3 or /curso/algoritmos)
  const pathParts = path.split('/').filter(Boolean);
  const hasCourseInPath = pathParts[0] === 'curso' || pathParts[0] === 'course';
  if (hasCourseInPath) {
    if (pathParts[1]) {
      detectedCourse = pathParts[1];
    }
    if ((pathParts[2] === 'modulo' || pathParts[2] === 'module' || pathParts[2] === 'm') && pathParts[3]) {
      const parsedMod = parseInt(pathParts[3], 10);
      if (!isNaN(parsedMod) && parsedMod > 0) {
        detectedModule = parsedMod;
      }
    }
  }

  // 2. Parse Query Params fallback (?curso=algoritmos&modulo=3&tab=simulator)
  const qCourse = searchParams.get('curso') || searchParams.get('course') || searchParams.get('c');
  if (qCourse) {
    detectedCourse = qCourse.toLowerCase();
  }
  const qModule = searchParams.get('modulo') || searchParams.get('module') || searchParams.get('m');
  if (qModule) {
    const parsedMod = parseInt(qModule, 10);
    if (!isNaN(parsedMod) && parsedMod > 0) {
      detectedModule = parsedMod;
    }
  }
  const qTab = (searchParams.get('tab') || searchParams.get('t')) as LearningTab;
  if (qTab && ['all', 'simulator', 'playground', 'theory', 'quiz'].includes(qTab)) {
    detectedTab = qTab;
  }

  // 3. Parse Hash fallback (#/curso/git_devops_vercel/modulo/2)
  if (!detectedCourse && hash) {
    const cleanHash = hash.replace(/^#\/?/, '');
    const hashParts = cleanHash.split('/').filter(Boolean);
    if (hashParts[0] === 'curso' || hashParts[0] === 'course') {
      if (hashParts[1]) detectedCourse = hashParts[1];
      if ((hashParts[2] === 'modulo' || hashParts[2] === 'module' || hashParts[2] === 'm') && hashParts[3]) {
        const parsedMod = parseInt(hashParts[3], 10);
        if (!isNaN(parsedMod) && parsedMod > 0) detectedModule = parsedMod;
      }
    }
  }

  // Check aliases
  if (ALIASES[detectedCourse]) {
    detectedCourse = ALIASES[detectedCourse];
  }

  const hasCourseInQuery = Boolean(qCourse);
  const hasCourseInHash = Boolean(hash && hash.includes('curso'));
  const isExplicitHome =
    path === '/' ||
    path === '' ||
    path === '/inicio' ||
    path === '/catalogo' ||
    searchParams.has('inicio') ||
    searchParams.has('catalogo') ||
    searchParams.has('home');

  const isHome = isExplicitHome || (!hasCourseInPath && !hasCourseInQuery && !hasCourseInHash && !detectedCourse);

  // Validate course exists in COURSES_MAP (or fallback)
  if (!COURSES_MAP[detectedCourse]) {
    detectedCourse = 'algoritmos';
  }

  const courseObj = COURSES_MAP[detectedCourse];
  if (courseObj && (detectedModule < 1 || detectedModule > courseObj.modules.length)) {
    detectedModule = 1;
  }

  return {
    isHome: Boolean(isHome),
    courseId: detectedCourse,
    moduleId: detectedModule,
    tab: detectedTab,
  };
}

export function buildRouteUrl(courseId?: string | null, moduleId = 1, tab: LearningTab = 'all'): string {
  if (!courseId || courseId === 'home') {
    return '/';
  }
  let url = `/curso/${courseId}/modulo/${moduleId}`;
  if (tab && tab !== 'all') {
    url += `?tab=${tab}`;
  }
  return url;
}

export function getAbsoluteShareableUrl(courseId?: string | null, moduleId = 1, tab: LearningTab = 'all'): string {
  if (typeof window === 'undefined') return '';
  const origin = window.location.origin;
  return `${origin}${buildRouteUrl(courseId, moduleId, tab)}`;
}

export async function shareCourseContent(params: {
  courseTitle: string;
  moduleTitle: string;
  url: string;
}): Promise<'shared' | 'copied' | 'failed'> {
  const shareData = {
    title: `${params.courseTitle} - Master Class QuimiSell`,
    text: `Aprende gratis: ${params.moduleTitle} en ${params.courseTitle} con simuladores interactivos y código en vivo.`,
    url: params.url,
  };

  if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return 'shared';
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return 'failed';
      }
    }
  }

  // Clipboard fallback
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(params.url);
      return 'copied';
    }
  } catch (err) {
    // ignore
  }

  return 'failed';
}
