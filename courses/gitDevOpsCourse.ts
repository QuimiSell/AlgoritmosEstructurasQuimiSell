import { Course } from '../domain/models';

export const GIT_DEVOPS_COURSE: Course = {
  id: 'git_devops_vercel',
  title: 'Git, GitHub, CI/CD y Deploy Estático en Vercel ($0)',
  shortTitle: 'Git & DevOps Vercel',
  badge: 'DevOps & Plataformas Cloud',
  icon: '🔀',
  description: '10 módulos prácticos: control de versiones con Git, colaboración en GitHub, Pull Requests profesionales, GitHub Actions CI y deploy estático gratuito en Vercel sin base de datos.',
  whyStudyTitle: '🚀 ¿Por qué dominar Git y DevOps antes de desplegar?',
  whyStudyText: 'Ningún proyecto profesional vive solo en tu laptop. Git registra cada cambio, GitHub habilita colaboración y revisión, GitHub Actions automatiza calidad (lint, build, tests) y Vercel publica tu sitio estático a una CDN global por $0. Este pipeline — sin backend ni base de datos — es el stack ideal para portafolios, landings y MVPs como los de QuimiSell.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Fundamentos Git",
      why: "Comprende snapshots, staging y commits antes de colaborar."
    },
    {
      id: 2,
      title: "Comandos Diarios",
      why: "status, diff, log y recuperación de errores locales."
    },
    {
      id: 3,
      title: "Ramas y Integración",
      why: "Feature branches, merge, rebase y resolución de conflictos."
    },
    {
      id: 4,
      title: "GitHub Remoto",
      why: "clone, push, pull y autenticación segura."
    },
    {
      id: 5,
      title: "Colaboración",
      why: "Forks, issues, permisos y protección de main."
    },
    {
      id: 6,
      title: "Pull Requests",
      why: "Flujo profesional de revisión y merge."
    },
    {
      id: 7,
      title: "Calidad en Repo",
      why: "Lint, hooks, .gitignore y Dependabot."
    },
    {
      id: 8,
      title: "GitHub Actions CI",
      why: "Workflows YAML, triggers y jobs de build."
    },
    {
      id: 9,
      title: "CI Avanzado",
      why: "Cache, matrix, artifacts y secrets."
    },
    {
      id: 10,
      title: "Deploy Vercel $0",
      why: "Hosting estático global sin base de datos."
    }
  ],
  labChallenge: {
    title: "Pipeline Completo: Git → GitHub Actions → Vercel Estático $0",
    badge: "Laboratorio Git, DevOps y Deploy",
    description: "Construye un sitio React/Vite estático sin base de datos, con repositorio GitHub, CI con GitHub Actions (lint + build) y deploy automático en Vercel plan gratuito. Incluye al menos un Pull Request con preview deployment.",
    requirements: [
      "• Repositorio GitHub público con README, .gitignore (node_modules, dist, .env) y al menos 3 commits en feature branch.",
      "• Workflow CI en .github/workflows/ que ejecute npm ci, npm run lint y npm run build en cada PR.",
      "• Sitio estático desplegado en Vercel (plan Hobby $0) con URL .vercel.app funcional.",
      "• Un Pull Request documentado con descripción, checklist y screenshot del preview deployment.",
      "• Sin backend ni base de datos: solo HTML/JS/CSS estático."
    ],
    cleanCodeRules: [
      "• Conventional Commits en mensajes (feat:, fix:, docs:).",
      "• Branch protection conceptual: no push directo a main (usar PR).",
      "• Secretos (VERCEL_TOKEN si aplica) solo en GitHub Secrets, nunca en código.",
      "• Enviar evidencia al catedrático quimicabless2020@gmail.com."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Git DevOps Vercel - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,

Adjunto el enlace a mi repositorio con el pipeline Git → GitHub Actions → Vercel estático ($0, sin base de datos).

Enlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]
URL Vercel en producción: [PEGA TU URL .vercel.app]

Evidencia del laboratorio:
- PR con preview deployment: [ENLACE AL PR]
- CI verde (screenshot o enlace a Actions run)

Tecnología: React/Vite (o similar estático)

Saludos cordiales.

(Correo del catedrático: quimicabless2020@gmail.com)`
  },
  modules: [{
      id: 1,
      title: "MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT",
      description: "Por qué Git es el estándar de la industria y cómo piensa en snapshots, no en copias.",
      items: [
        
      "Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005).",
      "Repositorio local vs remoto: cada clon es copia completa del historial.",
      "Working tree, staging area (index) y commits inmutables.",
      "SHA-1/SHA-256 como identificadores de objetos Git.",
      "Ventajas para equipos: ramas baratas, merges y trabajo offline.",
      "Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería."
      ],
      content: "## Panorama del tema: CONTROL DE VERSIONES Y FILOSOFÍA GIT\\n\\nPor qué Git es el estándar de la industria y cómo piensa en snapshots, no en copias.\\n\\nGit no es un simple 'guardar versión': es un sistema de contenido direccionable donde cada commit es un snapshot completo del proyecto identificado por un hash criptográfico. A diferencia de SVN, no necesitas servidor para commitear: tu laptop es un repositorio completo. El flujo mental es working directory → staging (git add) → repositorio (git commit). Esta separación te permite preparar commits atómicos y revisar exactamente qué entra en cada cambio. En QuimiSell y cualquier startup moderna, dominar Git es requisito antes de tocar GitHub Actions o Vercel.\\n\\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\\n\\n## Qué aprenderás en este módulo\\n\\n· Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005).\\n· Repositorio local vs remoto: cada clon es copia completa del historial.\\n· Working tree, staging area (index) y commits inmutables.\\n· SHA-1/SHA-256 como identificadores de objetos Git.\\n· Ventajas para equipos: ramas baratas, merges y trabajo offline.\\n· Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT.\\n· Ejemplo numérico o de código trazado paso a paso.\\n· Pregunta tipo entrevista técnica con respuesta esperada.\\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\\n\\n## Desarrollo teórico detallado\\n\\n## 1. Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005).\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005).» y cuándo lo evitarías.\\n\\n## 2. Repositorio local vs remoto: cada clon es copia completa del historial.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Repositorio local vs remoto: cada clon es copia completa del historial. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Repositorio local vs remoto: cada clon es copia completa del historial.» y cuándo lo evitarías.\\n\\n## 3. Working tree, staging area (index) y commits inmutables.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Working tree, staging area (index) y commits inmutables. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Working tree, staging area (index) y commits inmutables.» y cuándo lo evitarías.\\n\\n## 4. SHA-1/SHA-256 como identificadores de objetos Git.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** SHA-1/SHA-256 como identificadores de objetos Git. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «SHA-1/SHA-256 como identificadores de objetos Git.» y cuándo lo evitarías.\\n\\n## 5. Ventajas para equipos: ramas baratas, merges y trabajo offline.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Ventajas para equipos: ramas baratas, merges y trabajo offline. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ventajas para equipos: ramas baratas, merges y trabajo offline.» y cuándo lo evitarías.\\n\\n## 6. Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT.» y cuándo lo evitarías.\\n\\n## 7. Ejemplo numérico o de código trazado paso a paso.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\\n\\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\\n\\n**Qué es y por qué importa.** Dentro de CONTROL DE VERSIONES Y FILOSOFÍA GIT, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\\n\\n## Aplicaciones en sistemas reales\\n\\n**Ejemplo 1:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\\n\\n**Ejemplo 2:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\\n\\n**Ejemplo 3:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\\n\\nEstos casos muestran por qué CONTROL DE VERSIONES Y FILOSOFÍA GIT no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\\n\\n## Errores comunes al estudiar\\n\\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\\n\\n## Síntesis para repasar\\n\\nCierra el módulo resumiendo CONTROL DE VERSIONES Y FILOSOFÍA GIT en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación antes de avanzar al siguiente módulo.",
      codeSnippet: `# Inicializar repositorio y primer commit
git init mi-proyecto
cd mi-proyecto
echo "# QuimiSell Landing" > README.md
git add README.md
git commit -m "feat: README inicial"

# Ver historial compacto
git log --oneline --graph`,
      quiz: [
        {
          question: "¿Qué diferencia principal tiene Git respecto a SVN?",
          options: ["Git es centralizado obligatoriamente", "Git es distribuido: cada clon tiene historial completo", "Git no permite ramas"],
          answerIndex: 1,
          explanation: "Git replica el historial completo en cada máquina; SVN depende de un servidor central."
        },
        {
          question: "¿Qué hace git add?",
          options: ["Publica en GitHub", "Mueve cambios al staging area", "Elimina archivos"],
          answerIndex: 1,
          explanation: "add prepara cambios para el próximo commit sin guardarlos aún en el historial."
        },
        {
          question: "Un commit en Git se identifica por...",
          options: ["Nombre de rama", "Hash SHA del objeto", "Fecha solamente"],
          answerIndex: 1,
          explanation: "Cada commit es un objeto con hash único derivado de su contenido."
        },
        {
          question: "¿Puedes commitear sin conexión a internet?",
          options: ["Sí, Git es local primero", "No, siempre requiere GitHub", "Solo en Linux"],
          answerIndex: 0,
          explanation: "Commits son locales; push/pull sincronizan después."
        },
        {
          question: "El staging area sirve para...",
          options: ["Ejecutar tests", "Seleccionar qué cambios incluir en el commit", "Desplegar en Vercel"],
          answerIndex: 1,
          explanation: "Permite commits parciales y revisión antes de grabar."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvald...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Repositorio local vs remoto: cada clon es copia completa del historial?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Repositorio local vs remoto: cada clon es copia completa del historial", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Repositorio local vs remoto: cada clon es copia completa del historial. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Working tree, staging area (index) y commits inmutables?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Working tree, staging area (index) y commits inmutables", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Working tree, staging area (index) y commits inmutables. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: SHA-1/SHA-256 como identificadores de objetos Git?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: SHA-1/SHA-256 como identificadores de objetos Git", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que SHA-1/SHA-256 como identificadores de objetos Git. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Ventajas para equipos: ramas baratas, merges y trabajo offline?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ventajas para equipos: ramas baratas, merges y trabajo offline", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ventajas para equipos: ramas baratas, merges y trabajo offline. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILO...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de CONTROL DE VERSIO...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de CONTROL DE VERSIONES Y FILOSOFÍA GIT. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG",
      description: "El kit diario: inspeccionar cambios, deshacer errores y navegar el historial.",
      items: [
      "git status: archivos tracked, untracked, modified, staged.",
      "git diff y git diff --staged para revisar antes de commitear.",
      "git log --oneline --graph --all para visualizar ramas.",
      "git restore y git checkout -- para descartar cambios locales.",
      "git commit --amend para corregir el último commit (con cuidado).",
      "Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG\n\nEl kit diario: inspeccionar cambios, deshacer errores y navegar el historial.\n\nEl 80% del trabajo diario con Git son cinco comandos: status, diff, add, commit y log. Antes de cada commit, ejecuta git status y git diff --staged para verificar que no subes secretos (.env), archivos generados (node_modules, dist) ni cambios accidentales. git log --graph te muestra cómo evolucionaron las ramas. Si cometiste un error antes de push, git restore deshace cambios en working tree; git commit --amend corrige mensaje o archivos del último commit local. Nunca hagas amend en commits ya pusheados sin coordinar con el equipo.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· git status: archivos tracked, untracked, modified, staged.\n· git diff y git diff --staged para revisar antes de commitear.\n· git log --oneline --graph --all para visualizar ramas.\n· git restore y git checkout -- para descartar cambios locales.\n· git commit --amend para corregir el último commit (con cuidado).\n· Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. git status: archivos tracked, untracked, modified, staged.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git status: archivos tracked, untracked, modified, staged. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git status: archivos tracked, untracked, modified, staged.» y cuándo lo evitarías.\n\n## 2. git diff y git diff --staged para revisar antes de commitear.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git diff y git diff --staged para revisar antes de commitear. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git diff y git diff --staged para revisar antes de commitear.» y cuándo lo evitarías.\n\n## 3. git log --oneline --graph --all para visualizar ramas.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git log --oneline --graph --all para visualizar ramas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git log --oneline --graph --all para visualizar ramas.» y cuándo lo evitarías.\n\n## 4. git restore y git checkout -- para descartar cambios locales.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git restore y git checkout -- para descartar cambios locales. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git restore y git checkout -- para descartar cambios locales.» y cuándo lo evitarías.\n\n## 5. git commit --amend para corregir el último commit (con cuidado).\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git commit --amend para corregir el último commit (con cuidado). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git commit --amend para corregir el último commit (con cuidado).» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 2:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 3:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\nEstos casos muestran por qué COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Flujo de inspección diario
git status
git diff                    # cambios no staged
git add src/App.tsx
git diff --staged           # lo que irá al commit

# Descartar cambios en un archivo
git restore src/App.tsx

# Historial visual
git log --oneline --graph -10`,
      quiz: [
        {
          question: "git diff sin flags muestra...",
          options: ["Solo commits remotos", "Cambios en working tree no staged", "Solo archivos eliminados"],
          answerIndex: 1,
          explanation: "Compara working tree vs index para archivos modificados."
        },
        {
          question: "¿Qué archivo NUNCA debe commitearse?",
          options: [".gitignore", ".env con API keys", "README.md"],
          answerIndex: 1,
          explanation: "Secretos en .env deben quedar fuera del historial."
        },
        {
          question: "git log --oneline --graph ayuda a...",
          options: ["Compilar TypeScript", "Visualizar ramas y merges", "Desplegar en Vercel"],
          answerIndex: 1,
          explanation: "Muestra historial compacto con estructura de ramas."
        },
        {
          question: "git restore archivo deshace...",
          options: ["Commits remotos", "Cambios locales no commiteados en ese archivo", "Todas las ramas"],
          answerIndex: 1,
          explanation: "Vuelve el archivo al estado del último commit."
        },
        {
          question: "git commit --amend modifica...",
          options: ["Cualquier commit antiguo sin límite", "Solo el último commit local", "Solo ramas remotas"],
          answerIndex: 1,
          explanation: "Reescribe el HEAD commit; peligroso si ya fue pusheado."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: git status: archivos tracked, untracked, modified, staged?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: git status: archivos tracked, untracked, modified, staged", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git status: archivos tracked, untracked, modified, staged. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: git diff y git diff --staged para revisar antes de commitear?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: git diff y git diff --staged para revisar antes de commitear", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git diff y git diff --staged para revisar antes de commitear. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: git log --oneline --graph --all para visualizar ramas?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: git log --oneline --graph --all para visualizar ramas", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git log --oneline --graph --all para visualizar ramas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: git restore y git checkout -- para descartar cambios locales?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: git restore y git checkout -- para descartar cambios locales", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git restore y git checkout -- para descartar cambios locales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: git commit --amend para corregir el último commit (con cuidado)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: git commit --amend para corregir el último commit (con cuidado)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git commit --amend para corregir el último commit (con cuidado). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT,...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de COMANDOS ESENCIAL...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: COMANDOS ESENCIALES — INIT, STATUS, DIFF, LOG', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: RAMAS, MERGE Y REBASE",
      description: "Trabajo paralelo sin romper main: feature branches y estrategias de integración.",
      items: [
      "git branch, git switch / git checkout para crear y cambiar ramas.",
      "Feature branch workflow: una rama por ticket o funcionalidad.",
      "Merge commit vs fast-forward: cuándo aparece el nodo de merge.",
      "Rebase interactivo para historial lineal (squash, reordenar).",
      "Conflictos de merge: marcadores <<<<<<< y resolución manual.",
      "Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: RAMAS, MERGE Y REBASE\n\nTrabajo paralelo sin romper main: feature branches y estrategias de integración.\n\nLas ramas en Git son punteros móviles a commits: crear una rama cuesta microsegundos. El flujo estándar en equipos profesionales es trunk-based o GitFlow simplificado: main protegida, desarrollo en feature branches (feat/login-oauth), integración vía Pull Request. Merge une historiales preservando contexto; rebase reaplica commits sobre otra base para historial lineal. Los conflictos ocurren cuando dos ramas editan las mismas líneas: Git marca el archivo y tú decides qué conservar. En QuimiSell, nunca commitees directo a main: siempre rama + PR + CI verde.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· git branch, git switch / git checkout para crear y cambiar ramas.\n· Feature branch workflow: una rama por ticket o funcionalidad.\n· Merge commit vs fast-forward: cuándo aparece el nodo de merge.\n· Rebase interactivo para historial lineal (squash, reordenar).\n· Conflictos de merge: marcadores <<<<<<< y resolución manual.\n· Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. git branch, git switch / git checkout para crear y cambiar ramas.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git branch, git switch / git checkout para crear y cambiar ramas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git branch, git switch / git checkout para crear y cambiar ramas.» y cuándo lo evitarías.\n\n## 2. Feature branch workflow: una rama por ticket o funcionalidad.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Feature branch workflow: una rama por ticket o funcionalidad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Feature branch workflow: una rama por ticket o funcionalidad.» y cuándo lo evitarías.\n\n## 3. Merge commit vs fast-forward: cuándo aparece el nodo de merge.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Merge commit vs fast-forward: cuándo aparece el nodo de merge. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Merge commit vs fast-forward: cuándo aparece el nodo de merge.» y cuándo lo evitarías.\n\n## 4. Rebase interactivo para historial lineal (squash, reordenar).\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Rebase interactivo para historial lineal (squash, reordenar). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Rebase interactivo para historial lineal (squash, reordenar).» y cuándo lo evitarías.\n\n## 5. Conflictos de merge: marcadores <<<<<<< y resolución manual.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Conflictos de merge: marcadores <<<<<<< y resolución manual. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Conflictos de merge: marcadores <<<<<<< y resolución manual.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de RAMAS, MERGE Y REBASE, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Conventional Commits permiten changelogs automáticos y semver en proyectos open source maduros.\n\n**Ejemplo 2:** Conventional Commits permiten changelogs automáticos y semver en proyectos open source maduros.\n\n**Ejemplo 3:** Conventional Commits permiten changelogs automáticos y semver en proyectos open source maduros.\n\nEstos casos muestran por qué RAMAS, MERGE Y REBASE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo RAMAS, MERGE Y REBASE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Feature branch típico
git switch -c feat/hero-section
# ... editar archivos ...
git add .
git commit -m "feat: sección hero responsive"

git switch main
git merge feat/hero-section   # o abrir PR en GitHub

# Rebase para historial lineal (antes de PR)
git switch feat/hero-section
git rebase main`,
      quiz: [
        {
          question: "¿Qué es una rama en Git?",
          options: ["Copia completa del disco", "Puntero móvil a un commit", "Servidor remoto"],
          answerIndex: 1,
          explanation: "Las ramas son referencias ligeras a commits."
        },
        {
          question: "Fast-forward merge ocurre cuando...",
          options: ["Hay conflictos", "La rama destino no avanzó desde el fork", "Siempre crea merge commit"],
          answerIndex: 1,
          explanation: "main puede avanzar el puntero sin commit de merge extra."
        },
        {
          question: "git rebase sobre main hace...",
          options: ["Elimina main", "Reaplica commits de la feature sobre main actualizado", "Borra el remoto"],
          answerIndex: 1,
          explanation: "Reescribe commits locales encima de la nueva base."
        },
        {
          question: "Los marcadores <<<<<<< en un archivo indican...",
          options: ["Error de sintaxis", "Conflicto de merge sin resolver", "Commit exitoso"],
          answerIndex: 1,
          explanation: "Debes editar manualmente y quitar los marcadores."
        },
        {
          question: "Buena práctica en equipos: desarrollar en...",
          options: ["main directamente", "Feature branches con PR", "Sin commits"],
          answerIndex: 1,
          explanation: "Ramas aisladas + revisión protegen producción."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: git branch, git switch / git checkout para crear y cambiar ramas?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: git branch, git switch / git checkout para crear y cambiar ramas", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git branch, git switch / git checkout para crear y cambiar ramas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Feature branch workflow: una rama por ticket o funcionalidad?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Feature branch workflow: una rama por ticket o funcionalidad", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Feature branch workflow: una rama por ticket o funcionalidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Merge commit vs fast-forward: cuándo aparece el nodo de merge?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Merge commit vs fast-forward: cuándo aparece el nodo de merge", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Merge commit vs fast-forward: cuándo aparece el nodo de merge. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Rebase interactivo para historial lineal (squash, reordenar)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Rebase interactivo para historial lineal (squash, reordenar)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Rebase interactivo para historial lineal (squash, reordenar). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Conflictos de merge: marcadores <<<<<<< y resolución manual?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Conflictos de merge: marcadores <<<<<<< y resolución manual", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conflictos de merge: marcadores <<<<<<< y resolución manual. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de RAMAS, MERGE Y RE...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de RAMAS, MERGE Y REBASE. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: RAMAS, MERGE Y REBASE', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL",
      description: "Conectar repositorio local con GitHub y sincronizar cambios de forma segura.",
      items: [
      "git remote add origin y URLs HTTPS vs SSH.",
      "git clone para obtener copia completa con historial.",
      "git push -u origin main para publicar rama y establecer upstream.",
      "git pull = fetch + merge (o pull --rebase).",
      "Autenticación: PAT (Personal Access Token) y SSH keys.",
      "Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: GITHUB — REMOTES, CLONE, PUSH Y PULL\n\nConectar repositorio local con GitHub y sincronizar cambios de forma segura.\n\nGitHub es la plataforma social y de hosting sobre Git. Tu repositorio local se vincula con git remote add origin https://github.com/usuario/repo.git. El primer push usa -u para recordar upstream: git push -u origin main. git pull trae cambios del remoto; en equipos activos prefieren git pull --rebase para evitar merge commits innecesarios. Autenticación HTTPS requiere Personal Access Token (no contraseña); SSH usa par de claves (~/.ssh/id_ed25519). Nunca subas tokens en el código: usa GitHub Secrets en Actions y variables de entorno en Vercel.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· git remote add origin y URLs HTTPS vs SSH.\n· git clone para obtener copia completa con historial.\n· git push -u origin main para publicar rama y establecer upstream.\n· git pull = fetch + merge (o pull --rebase).\n· Autenticación: PAT (Personal Access Token) y SSH keys.\n· Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. git remote add origin y URLs HTTPS vs SSH.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git remote add origin y URLs HTTPS vs SSH. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git remote add origin y URLs HTTPS vs SSH.» y cuándo lo evitarías.\n\n## 2. git clone para obtener copia completa con historial.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git clone para obtener copia completa con historial. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git clone para obtener copia completa con historial.» y cuándo lo evitarías.\n\n## 3. git push -u origin main para publicar rama y establecer upstream.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git push -u origin main para publicar rama y establecer upstream. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git push -u origin main para publicar rama y establecer upstream.» y cuándo lo evitarías.\n\n## 4. git pull = fetch + merge (o pull --rebase).\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** git pull = fetch + merge (o pull --rebase). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «git pull = fetch + merge (o pull --rebase).» y cuándo lo evitarías.\n\n## 5. Autenticación: PAT (Personal Access Token) y SSH keys.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Autenticación: PAT (Personal Access Token) y SSH keys. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Autenticación: PAT (Personal Access Token) y SSH keys.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de GITHUB — REMOTES, CLONE, PUSH Y PULL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 2:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 3:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\nEstos casos muestran por qué GITHUB — REMOTES, CLONE, PUSH Y PULL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo GITHUB — REMOTES, CLONE, PUSH Y PULL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Conectar repo local con GitHub
git remote add origin git@github.com:quimisell/landing.git
git branch -M main
git push -u origin main

# Actualizar desde remoto
git fetch origin
git pull --rebase origin main

# Ver remotos configurados
git remote -v`,
      quiz: [
        {
          question: "git push -u origin main hace...",
          options: ["Elimina main remoto", "Publica commits y configura upstream", "Solo descarga"],
          answerIndex: 1,
          explanation: "-u vincula la rama local con la remota para futuros push/pull."
        },
        {
          question: "git pull equivale a...",
          options: ["Solo push", "fetch + integración (merge o rebase)", "Solo clone"],
          answerIndex: 1,
          explanation: "Trae objetos remotos y los fusiona con tu rama actual."
        },
        {
          question: "Autenticación HTTPS en GitHub usa...",
          options: ["Contraseña de la cuenta", "Personal Access Token (PAT)", "No requiere auth"],
          answerIndex: 1,
          explanation: "GitHub deprecó contraseñas para operaciones Git HTTPS."
        },
        {
          question: "git clone copia...",
          options: ["Solo el último archivo", "Repositorio completo con historial", "Solo ramas remotas sin commits"],
          answerIndex: 1,
          explanation: "Clone es réplica completa incluyendo .git."
        },
        {
          question: "SSH evita escribir token en cada push porque...",
          options: ["No usa red", "Usa par de claves pública/privada", "Es menos seguro"],
          answerIndex: 1,
          explanation: "La clave privada local autentica sin PAT repetido."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: git remote add origin y URLs HTTPS vs SSH?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: git remote add origin y URLs HTTPS vs SSH", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git remote add origin y URLs HTTPS vs SSH. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: git clone para obtener copia completa con historial?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: git clone para obtener copia completa con historial", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git clone para obtener copia completa con historial. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: git push -u origin main para publicar rama y establecer upstream?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: git push -u origin main para publicar rama y establecer upstream", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git push -u origin main para publicar rama y establecer upstream. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: git pull = fetch + merge (o pull --rebase)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: git pull = fetch + merge (o pull --rebase)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que git pull = fetch + merge (o pull --rebase). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: Autenticación: PAT (Personal Access Token) y SSH keys?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Autenticación: PAT (Personal Access Token) y SSH keys", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Autenticación: PAT (Personal Access Token) y SSH keys. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PU...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de GITHUB — REMOTES,...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de GITHUB — REMOTES, CLONE, PUSH Y PULL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: GITHUB — REMOTES, CLONE, PUSH Y PULL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS",
      description: "Trabajar en equipo y open source: forks, colaboradores y gestión de tareas.",
      items: [
      "Repositorio organización vs personal; roles read/write/admin.",
      "Fork para contribuir a proyectos ajenos sin acceso directo.",
      "Issues: bugs, features, templates y vinculación a PRs.",
      "Labels, milestones y assignees para organización.",
      "CODEOWNERS y branch protection rules en repos críticos.",
      "Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: COLABORACIÓN — FORKS, ISSUES Y PERMISOS\n\nTrabajar en equipo y open source: forks, colaboradores y gestión de tareas.\n\nGitHub extiende Git con colaboración. En equipos, el repo vive bajo una organización con permisos granulares. Los forks permiten a externos clonar, modificar y proponer cambios vía PR sin tocar el original. Issues documentan bugs y features; vincular un PR con 'Fixes #42' cierra el issue al mergear. Branch protection en main exige: PR obligatorio, revisión aprobada, CI verde y prohibición de force-push. Para QuimiSell, configura protección en main desde el día uno aunque seas equipo de uno: disciplina que escala.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Repositorio organización vs personal; roles read/write/admin.\n· Fork para contribuir a proyectos ajenos sin acceso directo.\n· Issues: bugs, features, templates y vinculación a PRs.\n· Labels, milestones y assignees para organización.\n· CODEOWNERS y branch protection rules en repos críticos.\n· Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Repositorio organización vs personal; roles read/write/admin.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Repositorio organización vs personal; roles read/write/admin. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Repositorio organización vs personal; roles read/write/admin.» y cuándo lo evitarías.\n\n## 2. Fork para contribuir a proyectos ajenos sin acceso directo.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Fork para contribuir a proyectos ajenos sin acceso directo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Fork para contribuir a proyectos ajenos sin acceso directo.» y cuándo lo evitarías.\n\n## 3. Issues: bugs, features, templates y vinculación a PRs.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Issues: bugs, features, templates y vinculación a PRs. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Issues: bugs, features, templates y vinculación a PRs.» y cuándo lo evitarías.\n\n## 4. Labels, milestones y assignees para organización.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Labels, milestones y assignees para organización. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Labels, milestones y assignees para organización.» y cuándo lo evitarías.\n\n## 5. CODEOWNERS y branch protection rules en repos críticos.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** CODEOWNERS y branch protection rules en repos críticos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «CODEOWNERS y branch protection rules en repos críticos.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de COLABORACIÓN — FORKS, ISSUES Y PERMISOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 2:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 3:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\nEstos casos muestran por qué COLABORACIÓN — FORKS, ISSUES Y PERMISOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo COLABORACIÓN — FORKS, ISSUES Y PERMISOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# .github/CODEOWNERS (ejemplo)
# Todo el frontend requiere revisión del lead
src/**       @quimisell/frontend-lead
*.yml        @quimisell/devops

# En commit message para cerrar issue al mergear:
# fix: corrige redirect en login (Fixes #17)

# Sincronizar fork con upstream
git remote add upstream git@github.com:original/proyecto.git
git fetch upstream
git merge upstream/main`,
      quiz: [
        {
          question: "Un fork en GitHub es...",
          options: ["Rama local", "Copia del repo bajo tu cuenta para contribuir", "Tipo de commit"],
          answerIndex: 1,
          explanation: "Permite PRs sin acceso write al repo original."
        },
        {
          question: "Branch protection en main típicamente exige...",
          options: ["Commits directos sin revisión", "PR + checks pasando", "Solo force-push"],
          answerIndex: 1,
          explanation: "Protege la rama de producción de cambios no revisados."
        },
        {
          question: "'Fixes #42' en un PR...",
          options: ["Crea 42 ramas", "Cierra el issue #42 al mergear", "Elimina el repo"],
          answerIndex: 1,
          explanation: "Palabras clave vinculan PR e issues automáticamente."
        },
        {
          question: "CODEOWNERS sirve para...",
          options: ["Compilar código", "Asignar revisores automáticos por ruta", "Desplegar en Vercel"],
          answerIndex: 1,
          explanation: "GitHub solicita review de owners según archivos tocados."
        },
        {
          question: "Issue en GitHub documenta...",
          options: ["Solo código compilado", "Bugs, features y discusión técnica", "Solo releases"],
          answerIndex: 1,
          explanation: "Issues son el backlog colaborativo del proyecto."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Repositorio organización vs personal; roles read/write/admin?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Repositorio organización vs personal; roles read/write/admin", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Repositorio organización vs personal; roles read/write/admin. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Fork para contribuir a proyectos ajenos sin acceso directo?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Fork para contribuir a proyectos ajenos sin acceso directo", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Fork para contribuir a proyectos ajenos sin acceso directo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Issues: bugs, features, templates y vinculación a PRs?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Issues: bugs, features, templates y vinculación a PRs", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Issues: bugs, features, templates y vinculación a PRs. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Labels, milestones y assignees para organización?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Labels, milestones y assignees para organización", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Labels, milestones y assignees para organización. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: CODEOWNERS y branch protection rules en repos críticos?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: CODEOWNERS y branch protection rules en repos críticos", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que CODEOWNERS y branch protection rules en repos críticos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUE...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de COLABORACIÓN — FO...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de COLABORACIÓN — FORKS, ISSUES Y PERMISOS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: COLABORACIÓN — FORKS, ISSUES Y PERMISOS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL",
      description: "De la rama local a producción: crear, revisar y mergear Pull Requests.",
      items: [
      "Crear PR: título convencional (feat:, fix:, docs:).",
      "Descripción con contexto, screenshots y checklist de pruebas.",
      "Draft PR para trabajo en progreso sin revisión prematura.",
      "Review comments: sugerencias, approvals, request changes.",
      "Merge strategies: merge commit, squash, rebase (pros/cons).",
      "Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: PULL REQUESTS — FLUJO PROFESIONAL\n\nDe la rama local a producción: crear, revisar y mergear Pull Requests.\n\nEl Pull Request es el contrato de calidad del equipo: resume QUÉ cambia, POR QUÉ y CÓMO probarlo. Títulos con Conventional Commits (feat: add dark mode) facilitan changelogs automáticos. La descripción debe incluir: problema resuelto, approach técnico, pasos de prueba manual y riesgos. Draft PRs comunican 'aún no revisen'. Los revisores usan comentarios inline; 'Request changes' bloquea merge hasta resolver. Squash merge deja historial limpio en main; merge commit preserva commits individuales. Para landing estática en Vercel, un PR con preview deployment permite validar UI antes de merge.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Crear PR: título convencional (feat:, fix:, docs:).\n· Descripción con contexto, screenshots y checklist de pruebas.\n· Draft PR para trabajo en progreso sin revisión prematura.\n· Review comments: sugerencias, approvals, request changes.\n· Merge strategies: merge commit, squash, rebase (pros/cons).\n· Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Crear PR: título convencional (feat:, fix:, docs:).\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Crear PR: título convencional (feat:, fix:, docs:). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Crear PR: título convencional (feat:, fix:, docs:).» y cuándo lo evitarías.\n\n## 2. Descripción con contexto, screenshots y checklist de pruebas.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Descripción con contexto, screenshots y checklist de pruebas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Descripción con contexto, screenshots y checklist de pruebas.» y cuándo lo evitarías.\n\n## 3. Draft PR para trabajo en progreso sin revisión prematura.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Draft PR para trabajo en progreso sin revisión prematura. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Draft PR para trabajo en progreso sin revisión prematura.» y cuándo lo evitarías.\n\n## 4. Review comments: sugerencias, approvals, request changes.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Review comments: sugerencias, approvals, request changes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Review comments: sugerencias, approvals, request changes.» y cuándo lo evitarías.\n\n## 5. Merge strategies: merge commit, squash, rebase (pros/cons).\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Merge strategies: merge commit, squash, rebase (pros/cons). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Merge strategies: merge commit, squash, rebase (pros/cons).» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de PULL REQUESTS — FLUJO PROFESIONAL, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 2:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 3:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\nEstos casos muestran por qué PULL REQUESTS — FLUJO PROFESIONAL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PULL REQUESTS — FLUJO PROFESIONAL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Título PR ejemplo (Conventional Commits)
feat: añade formulario de contacto estático

# Descripción PR template (.github/pull_request_template.md)
## Qué cambia
- Formulario con validación client-side
- Sin backend ni base de datos

## Cómo probar
1. npm run dev
2. Ir a /contacto
3. Enviar con campos vacíos → error visible

## Checklist
- [ ] Lint pasa
- [ ] Build de producción OK`,
      quiz: [
        {
          question: "Draft PR significa...",
          options: ["Listo para merge inmediato", "Trabajo en progreso, revisión opcional", "PR cerrado"],
          answerIndex: 1,
          explanation: "Indica que aún no está listo para review formal."
        },
        {
          question: "Squash merge en main...",
          options: ["Conserva todos los commits de la rama", "Combina commits del PR en uno", "Elimina el historial"],
          answerIndex: 1,
          explanation: "Un solo commit en main con mensaje del PR."
        },
        {
          question: "Conventional Commits usan prefijos como...",
          options: ["random:, maybe:", "feat:, fix:, docs:", "push:, pull:"],
          answerIndex: 1,
          explanation: "Prefijos estándar para changelog y semántica."
        },
        {
          question: "Request changes en review...",
          options: ["Mergea automáticamente", "Bloquea merge hasta resolver comentarios", "Cierra el PR"],
          answerIndex: 1,
          explanation: "El autor debe atender feedback antes de aprobar."
        },
        {
          question: "Preview deployment en PR permite...",
          options: ["Editar producción directo", "Probar cambios en URL temporal antes de merge", "Eliminar CI"],
          answerIndex: 1,
          explanation: "Vercel/Netlify generan preview por PR."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Crear PR: título convencional (feat:, fix:, docs:)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Crear PR: título convencional (feat:, fix:, docs:)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Crear PR: título convencional (feat:, fix:, docs:). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Descripción con contexto, screenshots y checklist de pruebas?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Descripción con contexto, screenshots y checklist de pruebas", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Descripción con contexto, screenshots y checklist de pruebas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Draft PR para trabajo en progreso sin revisión prematura?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Draft PR para trabajo en progreso sin revisión prematura", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Draft PR para trabajo en progreso sin revisión prematura. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Review comments: sugerencias, approvals, request changes?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Review comments: sugerencias, approvals, request changes", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Review comments: sugerencias, approvals, request changes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Merge strategies: merge commit, squash, rebase (pros/cons)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Merge strategies: merge commit, squash, rebase (pros/cons)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Merge strategies: merge commit, squash, rebase (pros/cons). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFE...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de PULL REQUESTS — F...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de PULL REQUESTS — FLUJO PROFESIONAL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: PULL REQUESTS — FLUJO PROFESIONAL', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO",
      description: "Revisiones efectivas, linters, hooks y .gitignore para repos profesionales.",
      items: [
      "Principios de code review: claridad, seguridad, tests, no bike-shedding.",
      "ESLint + Prettier en frontend TypeScript/React.",
      "husky + lint-staged para pre-commit hooks.",
      ".gitignore: node_modules, dist, .env, .vercel.",
      "Dependabot y security alerts de GitHub.",
      "Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: CODE REVIEW Y CALIDAD EN EL REPOSITORIO\n\nRevisiones efectivas, linters, hooks y .gitignore para repos profesionales.\n\nCode review no es buscar errores de sintaxis (eso lo hace CI): es validar diseño, legibilidad y riesgos. Pregunta: ¿entendería esto un compañero en 6 meses? ¿Hay edge cases sin cubrir? Automatiza lo repetible: ESLint detecta anti-patterns, Prettier formatea, husky ejecuta lint antes de cada commit. .gitignore debe excluir artefactos generados y secretos. GitHub Dependabot alerta vulnerabilidades en dependencias. Para un sitio estático $0, la calidad en el repo evita desplegar builds rotos a Vercel.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Principios de code review: claridad, seguridad, tests, no bike-shedding.\n· ESLint + Prettier en frontend TypeScript/React.\n· husky + lint-staged para pre-commit hooks.\n· .gitignore: node_modules, dist, .env, .vercel.\n· Dependabot y security alerts de GitHub.\n· Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Principios de code review: claridad, seguridad, tests, no bike-shedding.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Principios de code review: claridad, seguridad, tests, no bike-shedding. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Principios de code review: claridad, seguridad, tests, no bike-shedding.» y cuándo lo evitarías.\n\n## 2. ESLint + Prettier en frontend TypeScript/React.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** ESLint + Prettier en frontend TypeScript/React. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «ESLint + Prettier en frontend TypeScript/React.» y cuándo lo evitarías.\n\n## 3. husky + lint-staged para pre-commit hooks.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** husky + lint-staged para pre-commit hooks. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «husky + lint-staged para pre-commit hooks.» y cuándo lo evitarías.\n\n## 4. .gitignore: node_modules, dist, .env, .vercel.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** .gitignore: node_modules, dist, .env, .vercel. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «.gitignore: node_modules, dist, .env, .vercel.» y cuándo lo evitarías.\n\n## 5. Dependabot y security alerts de GitHub.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Dependabot y security alerts de GitHub. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Dependabot y security alerts de GitHub.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de CODE REVIEW Y CALIDAD EN EL REPOSITORIO, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 2:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 3:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\nEstos casos muestran por qué CODE REVIEW Y CALIDAD EN EL REPOSITORIO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo CODE REVIEW Y CALIDAD EN EL REPOSITORIO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# .gitignore mínimo para React + Vercel
node_modules/
dist/
.env
.env.local
.vercel

# package.json scripts
"scripts": {
  "lint": "eslint src --ext .ts,.tsx",
  "format": "prettier --write src"
}

# husky pre-commit (conceptual)
npx lint-staged  # solo archivos staged`,
      quiz: [
        {
          question: "Code review debe enfocarse en...",
          options: ["Solo estilo de comillas", "Diseño, claridad, seguridad y tests", "Velocidad de tipeo"],
          answerIndex: 1,
          explanation: "Humanos validan lo que las máquinas no captan."
        },
        {
          question: ".gitignore debe incluir...",
          options: ["src/", "node_modules/ y .env", "package.json"],
          answerIndex: 1,
          explanation: "Dependencias y secretos no van al historial."
        },
        {
          question: "husky + lint-staged ejecutan checks...",
          options: ["Solo en CI remoto", "Antes de cada commit local", "Solo al desplegar"],
          answerIndex: 1,
          explanation: "Pre-commit evita subir código con lint roto."
        },
        {
          question: "Dependabot en GitHub...",
          options: ["Despliega en Vercel", "Alerta vulnerabilidades en dependencias", "Crea ramas automáticamente siempre"],
          answerIndex: 1,
          explanation: "Monitorea CVEs en package.json y similares."
        },
        {
          question: "ESLint y Prettier respectivamente...",
          options: ["Compilan y despliegan", "Detectan problemas y formatean código", "Reemplazan Git"],
          answerIndex: 1,
          explanation: "Lint analiza reglas; Prettier unifica estilo."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: Principios de code review: claridad, seguridad, tests, no bike-shedding?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Principios de code review: claridad, seguridad, tests, no bike-shed...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Principios de code review: claridad, seguridad, tests, no bike-shedding. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: ESLint + Prettier en frontend TypeScript/React?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: ESLint + Prettier en frontend TypeScript/React", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que ESLint + Prettier en frontend TypeScript/React. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: husky + lint-staged para pre-commit hooks?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: husky + lint-staged para pre-commit hooks", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que husky + lint-staged para pre-commit hooks. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: .gitignore: node_modules, dist, .env, .vercel?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: .gitignore: node_modules, dist, .env, .vercel", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que .gitignore: node_modules, dist, .env, .vercel. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: Dependabot y security alerts de GitHub?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Dependabot y security alerts de GitHub", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dependabot y security alerts de GitHub. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de CODE REVIEW Y CAL...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de CODE REVIEW Y CALIDAD EN EL REPOSITORIO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: CODE REVIEW Y CALIDAD EN EL REPOSITORIO', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI",
      description: "Integración continua: automatizar lint, test y build en cada push y PR.",
      items: [
      "Workflow YAML en .github/workflows/.",
      "Triggers: on push, pull_request, schedule.",
      "Jobs, steps, runs-on (ubuntu-latest).",
      "Actions del marketplace: actions/checkout, setup-node.",
      "Badges de status en README.",
      "Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: GITHUB ACTIONS — INTRODUCCIÓN A CI\n\nIntegración continua: automatizar lint, test y build en cada push y PR.\n\nGitHub Actions es CI/CD nativo: defines workflows en YAML que corren en runners de GitHub. Cada push o PR puede disparar lint, tests y build antes de permitir merge. Estructura: workflow → jobs (paralelos) → steps (secuenciales). Para un frontend estático, un job típico: checkout código, setup Node 20, npm ci, npm run lint, npm run build. Si falla, el PR muestra X roja y branch protection bloquea merge. Los minutos gratuitos (2,000/mes en plan free) bastan para proyectos estudiantiles y startups tempranas como QuimiSell.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Workflow YAML en .github/workflows/.\n· Triggers: on push, pull_request, schedule.\n· Jobs, steps, runs-on (ubuntu-latest).\n· Actions del marketplace: actions/checkout, setup-node.\n· Badges de status en README.\n· Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Workflow YAML en .github/workflows/.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Workflow YAML en .github/workflows/. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Workflow YAML en .github/workflows/.» y cuándo lo evitarías.\n\n## 2. Triggers: on push, pull_request, schedule.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Triggers: on push, pull_request, schedule. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Triggers: on push, pull_request, schedule.» y cuándo lo evitarías.\n\n## 3. Jobs, steps, runs-on (ubuntu-latest).\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Jobs, steps, runs-on (ubuntu-latest). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Jobs, steps, runs-on (ubuntu-latest).» y cuándo lo evitarías.\n\n## 4. Actions del marketplace: actions/checkout, setup-node.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Actions del marketplace: actions/checkout, setup-node. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Actions del marketplace: actions/checkout, setup-node.» y cuándo lo evitarías.\n\n## 5. Badges de status en README.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Badges de status en README. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Badges de status en README.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS — INTRODUCCIÓN A CI, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 2:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\n**Ejemplo 3:** Este repo QuimiSell despliega a Vercel solo cuando GitHub Actions pasa typecheck + build en el PR.\n\nEstos casos muestran por qué GITHUB ACTIONS — INTRODUCCIÓN A CI no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo GITHUB ACTIONS — INTRODUCCIÓN A CI en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run build`,
      quiz: [
        {
          question: "Los workflows de GitHub Actions viven en...",
          options: [".github/workflows/", "vercel.json", "package-lock.json"],
          answerIndex: 0,
          explanation: "YAML versionado junto al código."
        },
        {
          question: "on: pull_request dispara el workflow cuando...",
          options: ["Solo haces push a main", "Se abre o actualiza un PR", "Nunca"],
          answerIndex: 1,
          explanation: "CI en PR valida cambios antes de merge."
        },
        {
          question: "actions/checkout@v4 hace...",
          options: ["Despliega en Vercel", "Clona el repo en el runner", "Ejecuta tests E2E"],
          answerIndex: 1,
          explanation: "Primer step estándar para tener el código."
        },
        {
          question: "npm ci vs npm install en CI...",
          options: ["Son idénticos siempre", "npm ci es determinista desde lockfile", "npm ci no existe"],
          answerIndex: 1,
          explanation: "ci instala exactamente lo del package-lock.json."
        },
        {
          question: "CI verde en PR significa...",
          options: ["Todos los jobs pasaron", "Merge automático sin review", "Despliegue a producción forzado"],
          answerIndex: 0,
          explanation: "Checks exitosos; merge aún puede requerir review."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Workflow YAML en .github/workflows/?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Workflow YAML en .github/workflows/", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Workflow YAML en .github/workflows/. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Triggers: on push, pull_request, schedule?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Triggers: on push, pull_request, schedule", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Triggers: on push, pull_request, schedule. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Jobs, steps, runs-on (ubuntu-latest)?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Jobs, steps, runs-on (ubuntu-latest)", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Jobs, steps, runs-on (ubuntu-latest). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Actions del marketplace: actions/checkout, setup-node?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Actions del marketplace: actions/checkout, setup-node", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Actions del marketplace: actions/checkout, setup-node. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Badges de status en README?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Badges de status en README", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Badges de status en README. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCI...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de GITHUB ACTIONS — ...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de GITHUB ACTIONS — INTRODUCCIÓN A CI. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: GITHUB ACTIONS — INTRODUCCIÓN A CI', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS",
      description: "Optimizar pipelines: caché, matrices, artifacts y secrets para despliegue.",
      items: [
      "Cache de dependencias con actions/cache o setup-node cache.",
      "Strategy matrix: probar Node 18 y 20 en paralelo.",
      "Artifacts: subir carpeta dist/ entre jobs.",
      "GitHub Secrets para tokens (VERCEL_TOKEN, no en código).",
      "Workflow dispatch manual y environments (staging/prod).",
      "Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS\n\nOptimizar pipelines: caché, matrices, artifacts y secrets para despliegue.\n\nPipelines maduros minimizan tiempo y repiten menos trabajo. setup-node con cache: 'npm' reutiliza node_modules entre runs. Matrix strategy prueba múltiples versiones en paralelo. Artifacts guardan build output para un job de deploy separado. Los secrets se configuran en Settings → Secrets: nunca en YAML en texto plano. GitHub Environments añaden approval gates para producción. Para sitio estático sin base de datos, el artifact dist/ es todo lo que Vercel necesita; el deploy puede ser automático vía integración nativa o action personalizada.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Cache de dependencias con actions/cache o setup-node cache.\n· Strategy matrix: probar Node 18 y 20 en paralelo.\n· Artifacts: subir carpeta dist/ entre jobs.\n· GitHub Secrets para tokens (VERCEL_TOKEN, no en código).\n· Workflow dispatch manual y environments (staging/prod).\n· Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Cache de dependencias con actions/cache o setup-node cache.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cache de dependencias con actions/cache o setup-node cache. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cache de dependencias con actions/cache o setup-node cache.» y cuándo lo evitarías.\n\n## 2. Strategy matrix: probar Node 18 y 20 en paralelo.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Strategy matrix: probar Node 18 y 20 en paralelo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Strategy matrix: probar Node 18 y 20 en paralelo.» y cuándo lo evitarías.\n\n## 3. Artifacts: subir carpeta dist/ entre jobs.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Artifacts: subir carpeta dist/ entre jobs. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Artifacts: subir carpeta dist/ entre jobs.» y cuándo lo evitarías.\n\n## 4. GitHub Secrets para tokens (VERCEL_TOKEN, no en código).\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** GitHub Secrets para tokens (VERCEL_TOKEN, no en código). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «GitHub Secrets para tokens (VERCEL_TOKEN, no en código).» y cuándo lo evitarías.\n\n## 5. Workflow dispatch manual y environments (staging/prod).\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Workflow dispatch manual y environments (staging/prod). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Workflow dispatch manual y environments (staging/prod).» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 2:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 3:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\nEstos casos muestran por qué GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# Matrix + cache
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      - run: npm ci && npm test

# Secret en step (nunca hardcodear)
- name: Deploy
  env:
    VERCEL_TOKEN: \${{ secrets.VERCEL_TOKEN }}
  run: npx vercel --prod --token $VERCEL_TOKEN`,
      quiz: [
        {
          question: "GitHub Secrets se usan para...",
          options: ["Publicar tokens en logs", "Inyectar credenciales sin exponerlas en el repo", "Reemplazar .gitignore"],
          answerIndex: 1,
          explanation: "Variables cifradas accesibles solo en workflows."
        },
        {
          question: "Strategy matrix permite...",
          options: ["Un solo runner", "Ejecutar el job con varias combinaciones en paralelo", "Eliminar tests"],
          answerIndex: 1,
          explanation: "Ej: probar Node 18 y 20 simultáneamente."
        },
        {
          question: "Artifacts en Actions...",
          options: ["Borran el repo", "Persisten archivos entre jobs o para descarga", "Solo guardan logs"],
          answerIndex: 1,
          explanation: "Útil para pasar dist/ al job de deploy."
        },
        {
          question: "Cache en CI reduce...",
          options: ["Seguridad", "Tiempo de instalación de dependencias", "Número de commits"],
          answerIndex: 1,
          explanation: "Reutiliza node_modules entre ejecuciones."
        },
        {
          question: "VERCEL_TOKEN debe estar en...",
          options: ["README.md", "GitHub Secrets", "Commit message"],
          answerIndex: 1,
          explanation: "Nunca versionar tokens en el repositorio."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Cache de dependencias con actions/cache o setup-node cache?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Cache de dependencias con actions/cache o setup-node cache", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cache de dependencias con actions/cache o setup-node cache. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Strategy matrix: probar Node 18 y 20 en paralelo?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Strategy matrix: probar Node 18 y 20 en paralelo", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Strategy matrix: probar Node 18 y 20 en paralelo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Artifacts: subir carpeta dist/ entre jobs?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Artifacts: subir carpeta dist/ entre jobs", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Artifacts: subir carpeta dist/ entre jobs. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: GitHub Secrets para tokens (VERCEL_TOKEN, no en código)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: GitHub Secrets para tokens (VERCEL_TOKEN, no en código)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que GitHub Secrets para tokens (VERCEL_TOKEN, no en código). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Workflow dispatch manual y environments (staging/prod)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Workflow dispatch manual y environments (staging/prod)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Workflow dispatch manual y environments (staging/prod). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — C...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de GITHUB ACTIONS AV...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: GITHUB ACTIONS AVANZADO — CACHE Y DEPLOY HOOKS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS",
      description: "De GitHub a producción global: hosting gratuito para SPAs y sitios estáticos.",
      items: [
      "Vercel Hobby plan: $0 para proyectos personales y OSS.",
      "Importar repo GitHub → auto-deploy en cada push a main.",
      "Framework presets: Vite, Next.js static export, React.",
      "Preview URLs por PR sin configuración extra.",
      "Sin backend ni DB: formularios con mailto o servicios externos.",
      "Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS\n\nDe GitHub a producción global: hosting gratuito para SPAs y sitios estáticos.\n\nVercel es la pieza final del pipeline QuimiSell: conectas tu repo GitHub, seleccionas framework (Vite/React), y cada merge a main despliega en segundos a una CDN global. El plan Hobby cuesta $0 para uso personal/educativo: incluye HTTPS automático, preview deployments y dominio .vercel.app. Para sitios sin base de datos, el build genera HTML/JS/CSS estáticos; no necesitas servidor Node permanente. Variables de entorno en dashboard Vercel (no en git) configuran API keys si usas servicios externos. Arquitectura ideal estudiante: Git → GitHub → Actions (CI) → Vercel (CD) → $0/mes.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Vercel Hobby plan: $0 para proyectos personales y OSS.\n· Importar repo GitHub → auto-deploy en cada push a main.\n· Framework presets: Vite, Next.js static export, React.\n· Preview URLs por PR sin configuración extra.\n· Sin backend ni DB: formularios con mailto o servicios externos.\n· Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Vercel Hobby plan: $0 para proyectos personales y OSS.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Vercel Hobby plan: $0 para proyectos personales y OSS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Vercel Hobby plan: $0 para proyectos personales y OSS.» y cuándo lo evitarías.\n\n## 2. Importar repo GitHub → auto-deploy en cada push a main.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Importar repo GitHub → auto-deploy en cada push a main. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Importar repo GitHub → auto-deploy en cada push a main.» y cuándo lo evitarías.\n\n## 3. Framework presets: Vite, Next.js static export, React.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Framework presets: Vite, Next.js static export, React. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Framework presets: Vite, Next.js static export, React.» y cuándo lo evitarías.\n\n## 4. Preview URLs por PR sin configuración extra.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preview URLs por PR sin configuración extra. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preview URLs por PR sin configuración extra.» y cuándo lo evitarías.\n\n## 5. Sin backend ni DB: formularios con mailto o servicios externos.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Sin backend ni DB: formularios con mailto o servicios externos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Sin backend ni DB: formularios con mailto o servicios externos.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS, este punto es central en control de versiones, colaboración en equipo y pipelines CI/CD. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 2:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\n**Ejemplo 3:** Linux kernel usa Git desde 2002; miles de contribuidores coordinan ramas sin bloquear el trunk.\n\nEstos casos muestran por qué VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
      codeSnippet: `# vercel.json para SPA (Vite/React)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

# package.json
"scripts": {
  "build": "vite build",
  "preview": "vite preview"
}

# Deploy: conectar repo en vercel.com → Import → auto CI/CD`,
      quiz: [
        {
          question: "Vercel Hobby plan para proyectos personales cuesta...",
          options: ["$99/mes", "$0", "Solo con base de datos"],
          answerIndex: 1,
          explanation: "Tier gratuito para uso personal y educativo."
        },
        {
          question: "Preview deployment en Vercel se genera...",
          options: ["Solo manualmente", "Automáticamente por cada PR", "Solo los domingos"],
          answerIndex: 1,
          explanation: "Integración GitHub crea URL preview por PR."
        },
        {
          question: "Sitio estático sin DB en Vercel sirve archivos desde...",
          options: ["MySQL", "CDN global (edge)", "FTP local"],
          answerIndex: 1,
          explanation: "HTML/JS/CSS precompilados distribuidos globalmente."
        },
        {
          question: "outputDirectory en Vite típicamente es...",
          options: ["src/", "dist/", "node_modules/"],
          answerIndex: 1,
          explanation: "vite build genera artefactos en dist/."
        },
        {
          question: "Secretos de producción en Vercel se configuran en...",
          options: ["README", "Dashboard Environment Variables", "Commits"],
          answerIndex: 1,
          explanation: "Variables en panel Vercel, nunca en el repo."
        },
      ,
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Vercel Hobby plan: $0 para proyectos personales y OSS?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Vercel Hobby plan: $0 para proyectos personales y OSS", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Vercel Hobby plan: $0 para proyectos personales y OSS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Importar repo GitHub → auto-deploy en cada push a main?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Importar repo GitHub → auto-deploy en cada push a main", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Importar repo GitHub → auto-deploy en cada push a main. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Framework presets: Vite, Next.js static export, React?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Framework presets: Vite, Next.js static export, React", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Framework presets: Vite, Next.js static export, React. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Preview URLs por PR sin configuración extra?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Preview URLs por PR sin configuración extra", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Preview URLs por PR sin configuración extra. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Sin backend ni DB: formularios con mailto o servicios externos?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Sin backend ni DB: formularios con mailto o servicios externos", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sin backend ni DB: formularios con mailto o servicios externos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0...?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de VERCEL — DEPLOY E...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: VERCEL — DEPLOY ESTÁTICO $0 SIN BASE DE DATOS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
