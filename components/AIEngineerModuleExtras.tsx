import React from 'react';
import CourseCardGrid, { CourseCard } from './shared/CourseCardGrid';

const ARCHITECT: CourseCard[] = [
  { l: 'Arquitecto', t: 'De Vibe Coder a Arquitecto', c: 'La sintaxis la genera la IA; el diseño es tuyo' },
  { l: 'Hardware', t: 'RAM & CPU Cache', c: 'La IA no siente la latencia física de la CPU' },
  { l: 'TDD', t: 'Test Harness', c: 'Barrera contra alucinaciones de la IA' },
  { l: 'Seguridad', t: 'DevSecOps & OWASP', c: 'Auditoría estricta de vulnerabilidades' },
  { l: 'Agentes', t: 'ReAct & Tools', c: 'Dirigir subagentes con contexto' },
  { l: 'Sistemas', t: 'System Design & CAP', c: 'Diseño para millones de usuarios' },
];

const SCALE: CourseCard[] = [
  { l: 'CAP', t: 'Teorema', c: 'Consistency, Availability, Partition tolerance' },
  { l: 'Kafka', t: 'Event-driven', c: 'Mensajería asíncrona a escala' },
  { l: 'K8s', t: 'Contenedores', c: 'Orquestación y CI/CD' },
  { l: 'OTel', t: 'Observabilidad', c: 'Métricas, logs y tracing distribuido' },
  { l: 'SQL/NoSQL', t: 'Datos', c: 'Relacional, documento y vectores' },
  { l: 'Consensus', t: 'Raft/Paxos', c: 'Acuerdo en sistemas distribuidos' },
];

const AI_PROD: CourseCard[] = [
  { l: 'RAG', t: 'Retrieval', c: 'Contexto externo para el LLM' },
  { l: 'Embed', t: 'Vectores', c: 'Representación semántica de texto' },
  { l: 'Fine-tune', t: 'Adaptación', c: 'Especializar modelo base' },
  { l: 'REST/gRPC', t: 'APIs', c: 'Contratos robustos de integración' },
  { l: 'Circuit', t: 'Resiliencia', c: 'Breaker, bulkhead, retry' },
  { l: 'Review', t: 'Code Review IA', c: 'Auditar código generado' },
];

const LEADERSHIP: CourseCard[] = [
  { l: 'FinOps', t: 'Costos cloud', c: 'Optimizar gasto sin perder SLA' },
  { l: 'Ética', t: 'Privacidad', c: 'Licencias y datos sensibles' },
  { l: 'RCA', t: 'Incidentes', c: 'Análisis de causa raíz en prod' },
  { l: 'Legacy', t: 'Refactoring', c: 'Deuda técnica y estrangulamiento' },
  { l: '★', t: 'Manifiesto Senior', c: 'Liderazgo técnico irreemplazable' },
  { l: 'Specs', t: 'Requerimientos', c: 'Especificaciones que la IA ejecuta' },
];

const AIEngineerModuleExtras: React.FC<{ moduleId: number }> = ({ moduleId }) => {
  if (moduleId === 1) return <CourseCardGrid title="El Arquitecto en la Era IA" subtitle="Más allá del vibe coding y copy-paste" icon="🧠" cards={ARCHITECT} accent="from-blue-600 to-indigo-700" borderClass="border-blue-200 dark:border-blue-900/50" />;
  if (moduleId >= 6 && moduleId <= 13) return <CourseCardGrid title="Sistemas a Escala" subtitle="Distribuidos, datos, eventos y observabilidad" icon="⚡" cards={SCALE} accent="from-violet-600 to-purple-700" borderClass="border-violet-200 dark:border-violet-900/50" />;
  if (moduleId >= 14 && moduleId <= 19) return <CourseCardGrid title="IA en Producción" subtitle="RAG, vectors, APIs y resiliencia" icon="🤖" cards={AI_PROD} accent="from-fuchsia-600 to-pink-700" borderClass="border-fuchsia-200 dark:border-fuchsia-900/50" />;
  if (moduleId >= 21) return <CourseCardGrid title="Liderazgo de Ingeniería Senior" subtitle="FinOps, ética, incidentes y manifiesto" icon="★" cards={LEADERSHIP} accent="from-amber-600 to-orange-700" borderClass="border-amber-200 dark:border-amber-900/50" />;
  return null;
};

export default AIEngineerModuleExtras;
