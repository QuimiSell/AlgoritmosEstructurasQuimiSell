# Master Class QuimiSell: Algoritmos y Estructuras de Datos

Una plataforma educativa interactiva premium, diseñada al 100% para funcionar de forma **local y sin conexión (offline)**, pensada para que los estudiantes universitarios dominen la complejidad algorítmica y las estructuras de datos sin depender de APIs de nube ni incurrir en costos financieros.

---

## 🌟 Características Principales

- 🎓 **Plan de Estudios Académico:** 10 módulos de aprendizaje secuenciales estructurados bajo principios de ingeniería (Complejidad Big-O, Listas Enlazadas, Tablas Hash, Árboles, Grafos, Ordenamiento, Búsqueda, Programación Dinámica y Casos Reales).
- ✏️ **Cuestionarios de Autoevaluación:** Cada módulo cuenta con un quiz de 5 preguntas (50 preguntas en total) con explicaciones académicas detalladas e inmediatas.
- ✍️ **Evaluación Final (Práctica Final):** Un examen integrador de 10 preguntas (1 de cada módulo) que evalúa el desempeño global del estudiante. Guarda el progreso en `localStorage` y permite **reiniciar la evaluación** si el estudiante se equivoca.
- 💻 **Tutor de Ejercicios Prácticos:** Editor de código en Python integrado con simulación de terminal. Valida la lógica de forma offline y cuenta con:
  - **Detector de Copia/Pega (Anti-IA):** Advierte si el estudiante intenta evadir el desarrollo manual.
  - **Filtro de Comentarios:** Rechaza el código con explicaciones comentadas para asegurar el desarrollo genuino del código limpio.
- 🧪 **Laboratorio de Retos:** Un desafío avanzado de ingeniería (*Simulador de Dijkstra + Caché LRU de capacidad 3*) con un formato de envío rápido al correo de revisión oficial.
- 📱 **Diseño Premium y Responsivo:** Estética cuidada (modo oscuro/claro, gradientes, animaciones y compatibilidad móvil).

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado bajo **Arquitectura Hexagonal (SOLID)**, separando limpiamente las reglas de negocio de la vista de presentación:
- `/domain`: Contiene los modelos (`models.ts`) y la lógica de validación de código y profesor de autoevaluación local (`tutor.ts`).
- `/components`: Componentes UI reutilizables como la consola del tutor, gráficos de complejidad, cuestionarios y modales interactivos.
- `App.tsx`: Punto de entrada de la aplicación y gestor de estados globales.
- `constants.tsx`: Base de datos de contenido teórico, snippets y cuestionarios.

---

## 🚀 Instrucciones para Ejecución Local

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/).

### Pasos
1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
3. **Compilar para producción (opcional):**
   ```bash
   npm run build
   ```

---

## 🌐 Publicación y Despliegue en la Web (Vercel)
Este proyecto está optimizado para desplegarse de manera gratuita en **Vercel**:
1. Conecta tu cuenta de Vercel con el repositorio de GitHub.
2. Importa el proyecto. Vercel autodetectará la configuración de Vite.
3. Haz clic en **Deploy** y ¡listo!
