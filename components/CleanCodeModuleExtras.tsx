import React from 'react';
import CourseCardGrid, { CourseCard } from './shared/CourseCardGrid';

const CLEAN: CourseCard[] = [
  { l: 'Tío Bob', t: 'Robert C. Martin', c: 'Autor de Clean Code & SOLID' },
  { l: 'Boy Scout', t: 'Regla de Oro', c: 'Deja el código más limpio que como estaba' },
  { l: 'Nombres', t: 'Intención Reveladora', c: 'Expresa el propósito sin comentarios' },
  { l: '10 a 1', t: 'Ratio Lectura/Escritura', c: 'Pasamos más tiempo leyendo código' },
  { l: 'Deuda', t: 'Deuda Técnica', c: 'Costo futuro por tomar atajos hoy' },
  { l: 'Pequeñas', t: 'Funciones cortas', c: 'Una sola responsabilidad por función' },
];

const SOLID: CourseCard[] = [
  { l: 'S', t: 'Single Responsibility', c: 'Una clase, una razón para cambiar' },
  { l: 'O', t: 'Open/Closed', c: 'Abierto a extensión, cerrado a modificación' },
  { l: 'L', t: 'Liskov Substitution', c: 'Subtipos sustituibles sin romper' },
  { l: 'I', t: 'Interface Segregation', c: 'Interfaces pequeñas y específicas' },
  { l: 'D', t: 'Dependency Inversion', c: 'Depender de abstracciones, no concreciones' },
  { l: 'DIP', t: 'Inyección', c: 'NestJS/Spring resuelven dependencias' },
];

const GOF: CourseCard[] = [
  { l: 'Factory', t: 'Creacional', c: 'Encapsula creación de objetos' },
  { l: 'Adapter', t: 'Estructural', c: 'Compatibiliza interfaces distintas' },
  { l: 'Decorator', t: 'Estructural', c: 'Añade comportamiento sin herencia' },
  { l: 'Strategy', t: 'Comportamiento', c: 'Intercambia algoritmos en runtime' },
  { l: 'Observer', t: 'Comportamiento', c: 'Notifica cambios a suscriptores' },
  { l: 'Command', t: 'Comportamiento', c: 'Encapsula peticiones como objetos' },
];

const CleanCodeModuleExtras: React.FC<{ moduleId: number }> = ({ moduleId }) => {
  if (moduleId === 1) return <CourseCardGrid title="Filosofía Clean Code" subtitle="Principios de Robert C. Martin para código legible" icon="🧼" cards={CLEAN} accent="from-sky-600 to-blue-700" borderClass="border-sky-200 dark:border-sky-900/50" />;
  if (moduleId >= 4 && moduleId <= 7) return <CourseCardGrid title="Principios SOLID" subtitle="Los cinco pilares de diseño orientado a objetos" icon="S" cards={SOLID} accent="from-purple-600 to-violet-700" borderClass="border-purple-200 dark:border-purple-900/50" />;
  if (moduleId >= 8) return <CourseCardGrid title="Patrones Gang of Four" subtitle="Soluciones probadas a problemas recurrentes" icon="GoF" cards={GOF} accent="from-emerald-600 to-teal-700" borderClass="border-emerald-200 dark:border-emerald-900/50" />;
  return null;
};

export default CleanCodeModuleExtras;
