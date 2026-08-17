# Master Class QuimiSell: Plataforma Integral de Ingeniería, Algoritmos y Kali Linux

Una plataforma educativa interactiva premium, diseñada al 100% para funcionar de forma **local y sin conexión (offline)**, pensada para que los estudiantes universitarios dominen la complejidad algorítmica, la arquitectura de software, la computación teórica y la ciberseguridad práctica sin depender de APIs de nube ni incurrir en costos financieros.

---

## 📚 Cursos Habilitados

1. **🐉 Kali Linux: Dominio de Comandos, Auditoría y Diagnóstico de Redes (20 Módulos)**
   - Domina el Kernel Linux, terminal Bash, sondeos stealth con Nmap (`-sS`, `-Pn`, `-sV`), evasión de IDS (`-T0 a -T5`, fragmentación `-f`, decoys `-D`), Nmap Scripting Engine (NSE), OSINT, análisis de tráfico con Tcpdump, fuzzing web con Gobuster/FFuF, auditoría con Nikto, análisis inalámbrico (Aircrack-ng), hashing con Hashcat/John, pivoting/túneles SSH y reporte técnico bajo estándar PTES/CVSS v3.1.
   - Incluye **100 preguntas de autoevaluación académica** (5 por módulo) y una **Consola Interactiva de Kali Linux en Vivo (CLI Sandbox)**.

2. **⚡ Algoritmos y Estructuras de Datos (10 Módulos)**
   - Complejidad Big-O, Listas Enlazadas, Pilas, Colas, Tablas Hash, Árboles Binarios, Grafos (BFS/DFS), Ordenamiento, Búsqueda Binaria y Programación Dinámica.

3. **🧼 Clean Code, SOLID y Patrones de Diseño (10 Módulos)**
   - Principios de Robert C. Martin (Tío Bob), los 5 principios SOLID, y patrones de diseño Creacionales, Estructurales y de Comportamiento (GoF).

4. **⚙️ Autómatas, Gramáticas y Compiladores (10 Módulos)**
   - Teoría de la computación, autómatas finitos (DFA/NFA), expresiones regulares, gramáticas libres de contexto y análisis léxico/sintáctico.

5. **🧠 Fundamentos de Matemáticas Discretas (10 Módulos)**
   - Lógica proposicional, teoría de conjuntos, relaciones, inducción matemática, combinatoria y teoría de grafos.

6. **🤖 Ingeniero de IA: De Vibe Coder a Arquitecto (10 Módulos)**
   - Arquitectura de software guiada por IA, pipelines de evaluación continua, DevSecOps y orquestación de agentes.

---

## 🌟 Características Principales

- 🎓 **Planes de Estudio Académicos:** Módulos de aprendizaje secuenciales estructurados bajo rigor universitario.
- ✏️ **Cuestionarios de Autoevaluación:** Cientos de preguntas con explicaciones académicas detalladas e inmediatas estilo certificación/Duolingo.
- 🐉 **Simulador de Terminal Kali Linux:** Ejecución interactiva de comandos de red (`nmap`, `gobuster`, `nikto`, `tcpdump`, `dig`, `whois`, `ss`, `ip route`).
- ✍️ **Evaluaciones Finales Dinámicas:** Exámenes integradores por materia que evalúan el progreso global con guardado en `localStorage`.
- 💻 **Tutor de Ejercicios Prácticos:** Editor con validación local y soporte para código Python y comandos Linux/Bash.
- 🧪 **Laboratorios de Retos:** Retos prácticos con plantillas de correo para revisión académica.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado bajo **Arquitectura Hexagonal (SOLID)**:
- `/domain`: Modelos compartidos (`models.ts`) y validador de ejercicios (`tutor.ts`).
- `/courses`: Catálogo de cursos modulares (`kaliLinuxCourse.ts`, `algorithmsCourse.ts`, `cleanCodeCourse.ts`, etc.).
- `/components`: Componentes UI reutilizables (Consola Kali, Modales de Examen, Quiz, Chat Drawer, Gráficos Big-O).
- `App.tsx`: Entrada principal de la aplicación y gestor de estados.

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
3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Publicación y Despliegue en la Web (Vercel)
Este proyecto está optimizado para desplegarse de manera gratuita en **Vercel**:
1. Conecta tu cuenta de Vercel con el repositorio de GitHub.
2. Importa el proyecto (`master-class-quimisell-algoritmos-y-estructuras-de-datos`).
3. Haz clic en **Deploy** y ¡listo!
