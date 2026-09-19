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
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: CONTROL DE VERSIONES Y FILOSOFÍA GIT",
      description: "Por qué Git es el estándar de la industria y cómo piensa en snapshots, no en copias.",
      items: [
        "Historia: de CVS/SVN centralizados a Git distribuido (Linus Torvalds, 2005).",
        "Repositorio local vs remoto: cada clon es copia completa del historial.",
        "Working tree, staging area (index) y commits inmutables.",
        "SHA-1/SHA-256 como identificadores de objetos Git.",
        "Ventajas para equipos: ramas baratas, merges y trabajo offline."
      ],
      content: "Git no es un simple 'guardar versión': es un sistema de contenido direccionable donde cada commit es un snapshot completo del proyecto identificado por un hash criptográfico. A diferencia de SVN, no necesitas servidor para commitear: tu laptop es un repositorio completo. El flujo mental es working directory → staging (git add) → repositorio (git commit). Esta separación te permite preparar commits atómicos y revisar exactamente qué entra en cada cambio. En QuimiSell y cualquier startup moderna, dominar Git es requisito antes de tocar GitHub Actions o Vercel.",
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
        "git commit --amend para corregir el último commit (con cuidado)."
      ],
      content: "El 80% del trabajo diario con Git son cinco comandos: status, diff, add, commit y log. Antes de cada commit, ejecuta git status y git diff --staged para verificar que no subes secretos (.env), archivos generados (node_modules, dist) ni cambios accidentales. git log --graph te muestra cómo evolucionaron las ramas. Si cometiste un error antes de push, git restore deshace cambios en working tree; git commit --amend corrige mensaje o archivos del último commit local. Nunca hagas amend en commits ya pusheados sin coordinar con el equipo.",
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
        "Conflictos de merge: marcadores <<<<<<< y resolución manual."
      ],
      content: "Las ramas en Git son punteros móviles a commits: crear una rama cuesta microsegundos. El flujo estándar en equipos profesionales es trunk-based o GitFlow simplificado: main protegida, desarrollo en feature branches (feat/login-oauth), integración vía Pull Request. Merge une historiales preservando contexto; rebase reaplica commits sobre otra base para historial lineal. Los conflictos ocurren cuando dos ramas editan las mismas líneas: Git marca el archivo y tú decides qué conservar. En QuimiSell, nunca commitees directo a main: siempre rama + PR + CI verde.",
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
        "Autenticación: PAT (Personal Access Token) y SSH keys."
      ],
      content: "GitHub es la plataforma social y de hosting sobre Git. Tu repositorio local se vincula con git remote add origin https://github.com/usuario/repo.git. El primer push usa -u para recordar upstream: git push -u origin main. git pull trae cambios del remoto; en equipos activos prefieren git pull --rebase para evitar merge commits innecesarios. Autenticación HTTPS requiere Personal Access Token (no contraseña); SSH usa par de claves (~/.ssh/id_ed25519). Nunca subas tokens en el código: usa GitHub Secrets en Actions y variables de entorno en Vercel.",
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
        "CODEOWNERS y branch protection rules en repos críticos."
      ],
      content: "GitHub extiende Git con colaboración. En equipos, el repo vive bajo una organización con permisos granulares. Los forks permiten a externos clonar, modificar y proponer cambios vía PR sin tocar el original. Issues documentan bugs y features; vincular un PR con 'Fixes #42' cierra el issue al mergear. Branch protection en main exige: PR obligatorio, revisión aprobada, CI verde y prohibición de force-push. Para QuimiSell, configura protección en main desde el día uno aunque seas equipo de uno: disciplina que escala.",
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
        "Merge strategies: merge commit, squash, rebase (pros/cons)."
      ],
      content: "El Pull Request es el contrato de calidad del equipo: resume QUÉ cambia, POR QUÉ y CÓMO probarlo. Títulos con Conventional Commits (feat: add dark mode) facilitan changelogs automáticos. La descripción debe incluir: problema resuelto, approach técnico, pasos de prueba manual y riesgos. Draft PRs comunican 'aún no revisen'. Los revisores usan comentarios inline; 'Request changes' bloquea merge hasta resolver. Squash merge deja historial limpio en main; merge commit preserva commits individuales. Para landing estática en Vercel, un PR con preview deployment permite validar UI antes de merge.",
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
        "Dependabot y security alerts de GitHub."
      ],
      content: "Code review no es buscar errores de sintaxis (eso lo hace CI): es validar diseño, legibilidad y riesgos. Pregunta: ¿entendería esto un compañero en 6 meses? ¿Hay edge cases sin cubrir? Automatiza lo repetible: ESLint detecta anti-patterns, Prettier formatea, husky ejecuta lint antes de cada commit. .gitignore debe excluir artefactos generados y secretos. GitHub Dependabot alerta vulnerabilidades en dependencias. Para un sitio estático $0, la calidad en el repo evita desplegar builds rotos a Vercel.",
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
        "Badges de status en README."
      ],
      content: "GitHub Actions es CI/CD nativo: defines workflows en YAML que corren en runners de GitHub. Cada push o PR puede disparar lint, tests y build antes de permitir merge. Estructura: workflow → jobs (paralelos) → steps (secuenciales). Para un frontend estático, un job típico: checkout código, setup Node 20, npm ci, npm run lint, npm run build. Si falla, el PR muestra X roja y branch protection bloquea merge. Los minutos gratuitos (2,000/mes en plan free) bastan para proyectos estudiantiles y startups tempranas como QuimiSell.",
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
        "Workflow dispatch manual y environments (staging/prod)."
      ],
      content: "Pipelines maduros minimizan tiempo y repiten menos trabajo. setup-node con cache: 'npm' reutiliza node_modules entre runs. Matrix strategy prueba múltiples versiones en paralelo. Artifacts guardan build output para un job de deploy separado. Los secrets se configuran en Settings → Secrets: nunca en YAML en texto plano. GitHub Environments añaden approval gates para producción. Para sitio estático sin base de datos, el artifact dist/ es todo lo que Vercel necesita; el deploy puede ser automático vía integración nativa o action personalizada.",
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
        "Sin backend ni DB: formularios con mailto o servicios externos."
      ],
      content: "Vercel es la pieza final del pipeline QuimiSell: conectas tu repo GitHub, seleccionas framework (Vite/React), y cada merge a main despliega en segundos a una CDN global. El plan Hobby cuesta $0 para uso personal/educativo: incluye HTTPS automático, preview deployments y dominio .vercel.app. Para sitios sin base de datos, el build genera HTML/JS/CSS estáticos; no necesitas servidor Node permanente. Variables de entorno en dashboard Vercel (no en git) configuran API keys si usas servicios externos. Arquitectura ideal estudiante: Git → GitHub → Actions (CI) → Vercel (CD) → $0/mes.",
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
      ]
    }
  ]
};
