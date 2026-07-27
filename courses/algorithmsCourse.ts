import { Course } from '../domain/models';
import { COURSE_MODULES } from '../constants';

export const ALGORITHMS_COURSE: Course = {
  id: 'algoritmos',
  title: 'Algoritmos y Estructuras de Datos',
  shortTitle: 'Algoritmos & Estructuras',
  badge: 'Ciencias de la Computación',
  icon: '⚡',
  description: 'Desde Big-O y estructuras lineales hasta grafos, programación dinámica y aplicaciones en bases de datos e Inteligencia Artificial.',
  whyStudyTitle: '🧠 ¿Por qué se estudia esta clase?',
  whyStudyText: 'Escribir código que "funcione" es fácil; escribir código que sea eficiente y escale es el verdadero reto de la ingeniería de software. Esta clase te enseña a razonar analíticamente sobre el uso de recursos críticos (tiempo de procesamiento de CPU y espacio de memoria RAM). Aprenderás a elegir la estructura de datos adecuada para cada situación, lo que transforma un programa inestable y lento en una solución robusta y de alto rendimiento.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Fundamentos y Big-O",
      why: "Permite medir matemáticamente el rendimiento asintótico y el crecimiento de las operaciones antes de codificar, evitando fallas de escala críticas en producción."
    },
    {
      id: 2,
      title: "Estructuras Lineales",
      why: "Es la base para almacenar datos de forma secuencial en memoria física. Dominar pilas, colas y arreglos dinámicos permite gestionar flujos de datos estructurados de forma eficiente."
    },
    {
      id: 3,
      title: "Estructuras Avanzadas (Hash)",
      why: "Explica cómo lograr búsquedas y almacenamiento instantáneos en tiempo constante O(1) promedio, la tecnología que sostiene a las bases de datos modernas y sistemas de caché."
    },
    {
      id: 4,
      title: "Árboles y Jerarquías",
      why: "Permite estructurar datos en jerarquías complejas y ordenadas. Los árboles binarios de búsqueda y auto-balanceados garantizan búsquedas ultra-rápidas en límites logarítmicos O(log n)."
    },
    {
      id: 5,
      title: "Teoría de Grafos",
      why: "Indispensable para modelar cualquier tipo de red en el mundo real, tales como mapas de navegación (GPS), redes de telecomunicaciones, redes sociales y dependencias lógicas."
    },
    {
      id: 6,
      title: "Algoritmos de Ordenamiento",
      why: "Estudia las estrategias matemáticas para organizar colecciones de datos, introduciendo conceptos clave como la estabilidad y el uso de memoria in-place."
    },
    {
      id: 7,
      title: "Algoritmos de Búsqueda",
      why: "Optimiza la recuperación de datos mediante técnicas de división de espacio (búsqueda binaria) y búsqueda heurística espacial (A*), reduciendo drásticamente las comparaciones."
    },
    {
      id: 8,
      title: "Paradigmas Avanzados",
      why: "Enseña técnicas de diseño algorítmico avanzadas (Programación Dinámica y Voraces) para resolver problemas difíciles reutilizando cálculos previos y optimizando localmente."
    },
    {
      id: 9,
      title: "Estructuras Especiales",
      why: "Herramientas de optimización masiva: Filtros de Bloom para consultas probabilísticas en memoria limitada y cachés LRU para acelerar el procesamiento de datos repetitivos."
    },
    {
      id: 10,
      title: "Aplicaciones en el Mundo Real",
      why: "Conecta la teoría con la infraestructura: cómo los motores SQL usan B+ Trees, cómo los sistemas de archivos Linux usan Inodos y cómo la Inteligencia Artificial usa el algoritmo Minimax."
    }
  ],
  labChallenge: {
    title: "Simulador de Rutas Óptimas con Caché LRU",
    badge: "Desafío Práctico Avanzado",
    description: "Tu objetivo es construir una aplicación (visual o por terminal) que permita modelar una red de calles/ciudades como un grafo ponderado. El sistema debe calcular la ruta más corta entre dos puntos utilizando el algoritmo de Dijkstra o A*, pero con una restricción de rendimiento real: debe implementar una Caché LRU de Rutas con una capacidad fija de 3 elementos.",
    requirements: [
      "• Grafo: Modelar al menos 6 vértices y sus respectivas aristas ponderadas (distancias).",
      "• Algoritmo de Ruta: Implementar Dijkstra o A* para buscar la ruta óptima.",
      "• Caché LRU (Capacidad 3): Almacenar las últimas 3 búsquedas. Si se vuelve a buscar la misma ruta, retornar en O(1) sin volver a calcular Dijkstra.",
      "• Evicción de Caché: Al buscar una 4ta ruta diferente, debe eliminar de la caché la ruta menos usada recientemente."
    ],
    cleanCodeRules: [
      "• Cero Comentarios: El código debe ser descriptivo y modular que no requiera comentarios explicativos.",
      "• Estructura SOLID: Separar la lógica algorítmica de la lógica de UI o entrada de datos.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Dijkstra - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio (Simulador de Ruta Óptima con Caché LRU de Rutas).\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de mi implementación:\n- \n\nSaludos cordiales.`
  },
  modules: COURSE_MODULES
};
