import { Course, TutorExercise } from '../domain/models';

export const GIT_DEVOPS_COURSE: Course = {
  "id": "git_devops_vercel",
  "title": "Git Internals, Flujos de Trabajo Avanzados, Docker, CI/CD y DevSecOps",
  "shortTitle": "Git, DevOps & Cloud",
  "badge": "DevOps & Cloud · 20 Módulos",
  "icon": "🚀",
  "description": "De los bytes de Git a la nube: arquitectura interna de objetos y DAG, rebase interactivo, recuperación con reflog, Linux para DevOps, Docker multi-stage, CI/CD con GitHub Actions, DevSecOps (TruffleHog, Semgrep, Trivy), Terraform y despliegue global en el Edge con Vercel.",
  "whyStudyTitle": "🚀 ¿Por qué dominar Git Internals, DevOps y DevSecOps es indispensable para liderar proyectos?",
  "whyStudyText": "Escribir código es solo el 30% del trabajo de un ingeniero de software; el 70% restante consiste en colaborar en equipo sin pisarse los cambios, automatizar la verificación de calidad en pipelines de integración continua, aislar entornos con contenedores Docker, blindar la seguridad contra fugas de credenciales y vulnerabilidades CVE, y desplegar en la nube con disponibilidad del 99.99%. Este curso te lleva desde el modelo matemático de objetos y punteros de Git hasta la infraestructura moderna como código y la automatización DevSecOps completa.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "ARQUITECTURA INTERNA DE GIT: EL MODELO DE OBJETOS",
      "why": "Las entrañas de Git: sistema de archivos direccionable por contenido, objetos inmutables (Blobs, Trees, Commits, Annotated Tags) y cálculo de hashes SHA."
    },
    {
      "id": 2,
      "title": "EL DIRECTED ACYCLIC GRAPH (DAG) DE GIT Y PUNTEROS HEAD",
      "why": "La estructura matemática de Git: el grafo acíclico dirigido, punteros de ramas, referencias simbólicas y el estado 'Detached HEAD'."
    },
    {
      "id": 3,
      "title": "STAGING AREA, INDEX Y CICLO DE VIDA DE ARCHIVOS",
      "why": "El Index como intermediario: los 4 estados de archivos (Untracked, Unmodified, Modified, Staged), `.gitignore` profundo y `git add -p`."
    },
    {
      "id": 4,
      "title": "OPERACIONES AVANZADAS: REBASE INTERACTIVO, SQUASH Y CHERRY-PICK",
      "why": "Limpieza y reescritura de historia: Rebase interactivo (`git rebase -i`), squash de commits sucios, fixup, reword y cherry-pick quirúrgico."
    },
    {
      "id": 5,
      "title": "RECUPERACIÓN DE DESASTRES: REFLOG, BISECT Y RESTAURACIÓN",
      "why": "Salvar proyectos en situaciones críticas: el diario de bitácora `git reflog`, búsqueda binaria de bugs con `git bisect` y rescate de ramas borradas."
    },
    {
      "id": 6,
      "title": "ESTRATEGIAS DE RAMIFICACIÓN: TRUNK-BASED VS GITFLOW",
      "why": "Estrategias de branching profesional: la obsolescencia de GitFlow en equipos ágiles, Trunk-Based Development, ramas de vida corta y Feature Flags."
    },
    {
      "id": 7,
      "title": "COLABORACIÓN: WORKTREES, SUBMODULES Y CONFLICTOS COMPLEJOS",
      "why": "Colaboración avanzada sin fricción: Git Worktrees para trabajar en múltiples ramas a la vez sin clonar, resolución de conflictos 3-way y submodules."
    },
    {
      "id": 8,
      "title": "LINUX PARA DEVOPS: PROCESOS, PERMISOS, SIGNALS Y SYSTEMD",
      "why": "El sistema operativo de la nube: arquitectura del kernel Linux, file descriptors, señales POSIX (SIGTERM vs SIGKILL) y gestión con systemd."
    },
    {
      "id": 9,
      "title": "DOCKER & CONTENEDORIZACIÓN: NAMESPACES Y CGROUPS",
      "why": "La ilusión del contenedor: cómo Linux Namespaces y Control Groups (cgroups) construyen Docker sin máquinas virtuales pesadas."
    },
    {
      "id": 10,
      "title": "OPTIMIZACIÓN DE DOCKERFILES: BUILDS MULTI-STAGE Y SEGURIDAD",
      "why": "Empaquetado eficiente de imágenes: Builds multietapa (Multi-Stage), orden de capas para maximizar caché y ejecución como usuario no-root."
    },
    {
      "id": 11,
      "title": "DOCKER COMPOSE: REDES Y AMBIENTES MULTI-CONTENEDOR",
      "why": "Orquestación en desarrollo local: archivos `docker-compose.yml`, redes internas DNS automáticas, volúmenes con nombre y variables de entorno."
    },
    {
      "id": 12,
      "title": "CI/CD FUNDAMENTOS: AUTOMATIZACIÓN CON GITHUB ACTIONS",
      "why": "Integración Continua moderna: triggers, runners, jobs, steps, matrices de compilación y la sintaxis declarativa de GitHub Actions."
    },
    {
      "id": 13,
      "title": "PIPELINES DE CI AVANZADOS: MATRICES, CACHÉ Y DAG DE JOBS",
      "why": "Optimización extrema de CI: matrices de compatibilidad (multi-OS, multi-node), caché de dependencias y grafos de dependencia entre jobs."
    },
    {
      "id": 14,
      "title": "DEVSECOPS: ESCANEO DE SECRETOS CON TRUFFLEHOG",
      "why": "Seguridad proactiva en el commit: detección de claves API, tokens de AWS, llaves SSH y certificados con TruffleHog y hooks de pre-commit."
    },
    {
      "id": 15,
      "title": "DEVSECOPS: ANÁLISIS ESTÁTICO DE CÓDIGO (SAST) CON SEMGREP",
      "why": "Seguridad a nivel de código fuente: reglas de Semgrep, detección de OWASP Top 10 (SQL Injection, XSS, Path Traversal) y remediación guiada."
    },
    {
      "id": 16,
      "title": "DEVSECOPS: ANÁLISIS DE COMPONENTES (SCA) CON TRIVY",
      "why": "Seguridad en la cadena de suministro (Supply Chain Security): escaneo de dependencias con Trivy, detección de vulnerabilidades CVE y Software Bill of Materials (SBOM)."
    },
    {
      "id": 17,
      "title": "ESTRATEGIAS DE DESPLIEGUE CONTINUO: BLUE/GREEN Y CANARY",
      "why": "Entrega continua sin tiempo de inactividad (Zero-Downtime): Blue/Green Deployments, Canary Releases, Rolling Updates y Circuit Breakers de despliegue."
    },
    {
      "id": 18,
      "title": "DESPLIEGUE EN EL EDGE & SERVERLESS CON VERCEL",
      "why": "Arquitectura Cloud moderna sin servidores: Edge Functions, Vercel Edge Middleware, CDN global Anycast, ISR (Incremental Static Regeneration) y $0 de costo base."
    },
    {
      "id": 19,
      "title": "INFRAESTRUCTURA COMO CÓDIGO (IAC) CON TERRAFORM",
      "why": "Gestión declarativa de la nube: lenguaje HCL de HashiCorp, proveedores (AWS/Cloudflare), estado de Terraform (tfstate) y el ciclo Init-Plan-Apply."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: PIPELINE CORPORATIVO DEVSECOPS COMPLETO",
      "why": "Arquitectura completa de ingeniería: de commit local a producción inmutable con escaneo de secretos (TruffleHog), SAST (Semgrep), SCA (Trivy) y despliegue inmutable."
    }
  ],
  "labChallenge": {
    "title": "Arquitectura de Pipeline DevSecOps Completo: Git Commit a Producción Inmutable en Vercel",
    "badge": "Laboratorio de Git, DevOps & DevSecOps",
    "description": "Tu objetivo es configurar un repositorio profesional con Trunk-Based Development, un Dockerfile multi-stage optimizado para producción, un hook de pre-commit contra fugas de secretos y un workflow de GitHub Actions que ejecute SAST con Semgrep, escaneo de dependencias con Trivy y despliegue automatizado inmutable en Vercel con cabeceras de seguridad estrictas en el Edge.",
    "requirements": [
      "• Historial Impecable: Aplicar Rebase Interactivo para consolidar commits atómicos siguiendo Conventional Commits.",
      "• Docker Multi-Stage: Crear un Dockerfile con usuario no-root e imagen final de menos de 100MB.",
      "• Pipeline de CI: Configurar GitHub Actions con jobs de Typecheck, Lint y Pruebas Unitarias.",
      "• DevSecOps Gates: Integrar TruffleHog (secretos), Semgrep (SAST) y Trivy (SCA).",
      "• Edge Deployment: Configurar `vercel.json` con cabeceras HSTS, CSP y X-Content-Type-Options."
    ],
    "cleanCodeRules": [
      "• Cero Secretos: Ningún token, API key ni archivo .env debe ser commiteado al repositorio.",
      "• Pipeline Inmutable: Ningún despliegue se realiza sin que todos los Quality Gates de seguridad estén en verde.",
      "• Nombres Estándar: Utilizar Conventional Commits (feat, fix, refactor, security, chore)."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto DevOps - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio con el Pipeline Corporativo DevSecOps configurado.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nResumen de herramientas integradas:\\n- CI/CD Actions: \\n- DevSecOps (TruffleHog/Semgrep/Trivy): \\n- Despliegue en Edge / Vercel: \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: ARQUITECTURA INTERNA DE GIT: EL MODELO DE OBJETOS",
      "description": "Las entrañas de Git: sistema de archivos direccionable por contenido, objetos inmutables (Blobs, Trees, Commits, Annotated Tags) y cálculo de hashes SHA.",
      "items": [
        "Git no almacena diferencias (diffs); almacena instantáneas (snapshots) inmutables en el tiempo.",
        "El directorio `.git`: `HEAD`, `config`, `index`, carpeta `objects/` y `refs/`.",
        "Los 4 Tipos de Objetos Fundamentales: Blob (contenido), Tree (directorio), Commit (metadatos) y Tag.",
        "Cálculo del hash SHA-1 / SHA-256: Tipo + Tamaño en bytes + Null byte + Contenido.",
        "Inspección a bajo nivel con comandos 'plumbing': `git cat-file -p`, `git hash-object`, `git ls-tree`.",
        "Empaquetado de objetos (Packfiles) y recolección de basura con `git gc`."
      ],
      "content": "## Arquitectura Interna de Git: El Modelo de Objetos\n\nGit es un **sistema de archivos direccionable por contenido** disfrazado de herramienta de control de versiones. Todo objeto se identifica por el hash criptográfico SHA de su contenido.\n\n### Los 4 Objetos de Git\n1. **Blob (Binary Large Object):** Almacena el contenido crudo de un archivo. No conoce el nombre del archivo ni sus permisos.\n2. **Tree (Árbol):** Representa un directorio. Mapea nombres de archivos, permisos UNIX (`100644`) y hashes SHA a blobs u otros trees secundarios.\n3. **Commit:** Apunta a un Tree raíz, contiene referencias a los commits padres (parents), autor, committer, timestamp y mensaje.\n4. **Annotated Tag:** Puntero permanente con mensaje propio firmado con GPG.",
      "codeSnippet": "# Comandos Plumbing para inspeccionar las entrañas de Git\n# 1. Crear un blob en la base de objetos de Git sin tocar el staging\necho \"Hola QuimiSell\" | git hash-object -w --stdin\n# Devuelve el SHA: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391\n\n# 2. Inspeccionar el tipo y contenido de cualquier hash\ngit cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391  # Muestra: blob\ngit cat-file -p e69de29bb2d1d6434b8b29ae775ad8c2e48c5391  # Muestra: Hola QuimiSell\n\n# 3. Ver la estructura de directorios de un commit\ngit ls-tree -r HEAD",
      "quiz": [
        {
          "question": "¿Qué contiene exactamente un objeto 'Blob' en el almacén interno de Git?",
          "options": [
            "Únicamente el contenido en bytes del archivo, sin su nombre ni sus permisos",
            "El nombre del archivo y la fecha de creación",
            "El historial completo de ramas"
          ],
          "answerIndex": 0,
          "explanation": "Un Blob solo guarda los bytes puros; los nombres de archivos y permisos residen en los objetos Tree que apuntan a dicho Blob."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: EL DIRECTED ACYCLIC GRAPH (DAG) DE GIT Y PUNTEROS HEAD",
      "description": "La estructura matemática de Git: el grafo acíclico dirigido, punteros de ramas, referencias simbólicas y el estado 'Detached HEAD'.",
      "items": [
        "Git como un Grafo Acíclico Dirigido (DAG): Cada commit apunta a su(s) padre(s) en orden causal.",
        "Una rama en Git no es una carpeta ni una copia de código; es un puntero móvil de 41 bytes que guarda un hash.",
        "El puntero especial `HEAD`: Referencia simbólica a la rama activa actual (`ref: refs/heads/main`).",
        "El estado 'Detached HEAD' (HEAD Desconectado): Cuándo ocurre y cómo recuperar commits huérfanos.",
        "Navegación relativa en el grafo: `HEAD~1` (padre en línea temporal) vs `HEAD^2` (segundo padre en merge commits).",
        "Inspección gráfica con `git log --graph --oneline --all`."
      ],
      "content": "## El Grafo Acíclico Dirigido (DAG) de Git\n\nLa historia de un proyecto en Git no es una lista lineal; es un grafo dirigido sin ciclos:\n* Cada nodo es un commit inmutable.\n* Cada arista apunta hacia atrás (hacia los commits padres).\n* Un merge commit es un nodo con dos o más padres.\n\n### ¿Qué es una Rama (Branch)?\nUna rama es simplemente un archivo de texto en `.git/refs/heads/nombre-rama` que contiene 40 caracteres hexadecimales (el SHA del último commit). Crear una rama tarda 0 milisegundos y cuesta 41 bytes.",
      "codeSnippet": "# Navegación y Referencias en el DAG de Git\n# Ver a qué apunta HEAD en este momento\ncat .git/HEAD\n# Resultado típico: ref: refs/heads/main\n\n# Inspeccionar el hash al que apunta la rama main\ncat .git/refs/heads/main\n\n# Entrar deliberadamente en Detached HEAD para examinar un commit antiguo\ngit checkout HEAD~3\n\n# Salir de Detached HEAD regresando a la rama activa\ngit switch main",
      "quiz": [
        {
          "question": "¿Qué representa físicamente una rama (branch) en el sistema de archivos de Git?",
          "options": [
            "Un archivo de texto plano de 41 bytes que contiene el hash SHA del commit más reciente de esa línea de trabajo",
            "Una copia completa de todos los archivos del repositorio en una carpeta oculta",
            "Un puntero en la memoria RAM del sistema operativo"
          ],
          "answerIndex": 0,
          "explanation": "Una rama es una simple referencia que guarda un hash; por eso crear o borrar ramas en Git es una operación instantánea y ligera."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: STAGING AREA, INDEX Y CICLO DE VIDA DE ARCHIVOS",
      "description": "El Index como intermediario: los 4 estados de archivos (Untracked, Unmodified, Modified, Staged), `.gitignore` profundo y `git add -p`.",
      "items": [
        "Los 3 Árboles de Git: Working Directory (Directorio de Trabajo), Index (Staging Area) y HEAD (Repositorio).",
        "El archivo binario `.git/index`: La preparación precisa del próximo commit.",
        "La técnica de 'Staging Parcial' con `git add -p` (Patch mode) para crear commits atómicos y limpios.",
        "Reglas avanzadas de `.gitignore`: Comodines, exclusión de directorios y operadores de negación (`!`).",
        "Descartar cambios de forma segura: `git restore --staged` vs `git restore`.",
        "Diferencias entre `git diff` (working tree vs index) y `git diff --staged` (index vs HEAD)."
      ],
      "content": "## El Index (Staging Area)\n\nEl **Index** es la herramienta más poderosa de Git para garantizar commits atómicos. Te permite seleccionar con precisión quirúrgica qué líneas de código formarán parte del siguiente snapshot histórico.\n\n### Los 3 Árboles de Git\n1. **Working Directory:** Tus archivos reales en el disco duro donde editas el código.\n2. **Index (Staging):** La instantánea propuesta que se convertirá en commit al ejecutar `git commit`.\n3. **HEAD:** El último commit confirmado en el repositorio.",
      "codeSnippet": "# Ciclo de vida y Staging granular\n# 1. Ver qué cambios están en el disco vs en el staging\ngit diff           # Cambios no agregados al staging\ngit diff --staged  # Cambios listos para el commit\n\n# 2. Agregar cambios interactivamente por bloques (Hunks)\ngit add -p src/usuario.ts\n# Responde: [y] sí agregar, [n] no agregar, [s] dividir bloque más pequeño\n\n# 3. Sacar un archivo del staging sin perder tus modificaciones en disco\ngit restore --staged src/config.ts",
      "quiz": [
        {
          "question": "¿Qué comando permite inspeccionar las diferencias entre el Staging Area (Index) y el último commit (HEAD)?",
          "options": [
            "`git diff --staged` (o `git diff --cached`)",
            "`git diff`",
            "`git status -s`"
          ],
          "answerIndex": 0,
          "explanation": "`git diff` muestra los cambios entre disco e index; `git diff --staged` compara el index con el commit actual que vas a generar."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: OPERACIONES AVANZADAS: REBASE INTERACTIVO, SQUASH Y CHERRY-PICK",
      "description": "Limpieza y reescritura de historia: Rebase interactivo (`git rebase -i`), squash de commits sucios, fixup, reword y cherry-pick quirúrgico.",
      "items": [
        "La Regla de Oro del Rebase: Nunca reescribas la historia de una rama pública compartida (main).",
        "Rebase Interactivo (`git rebase -i HEAD~N`): pick, reword, edit, squash, fixup, drop.",
        "El comando `git commit --fixup` y `git rebase -i --autosquash` para flujos automatizados de limpieza.",
        "Cherry-Pick: Aplicar un commit específico de una rama a otra sin hacer merge de toda la historia.",
        "Resolución de conflictos durante un rebase paso a paso (`git rebase --continue` / `--abort`).",
        "Mantener un historial de commits lineal y legible para auditorías técnicas."
      ],
      "content": "## Rebase Interactivo: Esculpiendo la Historia\n\nDurante el desarrollo de una feature, es normal cometer commits sucios como `\"fix typo\"`, `\"wip\"`, `\"ahora sí compila\"`. Antes de abrir un Pull Request, un ingeniero profesional limpia su rama local usando **Rebase Interactivo**.\n\n### Operaciones de `git rebase -i`\n* `pick`: Conservar el commit.\n* `reword`: Conservar el commit pero modificar el mensaje.\n* `squash`: Fundir el commit con el anterior combinando sus mensajes.\n* `fixup`: Fundir el commit con el anterior descartando el mensaje secundario.\n* `drop`: Eliminar el commit por completo.",
      "codeSnippet": "# Limpieza de historial con Rebase Interactivo\n# 1. Abrir editor con los últimos 4 commits de la rama\ngit rebase -i HEAD~4\n\n# Dentro del editor interactivo:\n# pick a1b2c3d feat(auth): implementar inicio de sesión con JWT\n# fixup d4e5f6a fix: corregir typo en token\n# fixup 7g8h9i0 test: añadir pruebas de expiración\n# squash 1j2k3l4 docs: documentar variables de entorno de auth\n\n# 2. Cherry-pick de un hotfix urgente a producción\ngit checkout main\ngit cherry-pick 9a8b7c6  # Aplica únicamente ese commit específico",
      "quiz": [
        {
          "question": "¿Cuál es la 'Regla de Oro' que jamás debe violarse al usar `git rebase`?",
          "options": [
            "Nunca hacer rebase sobre ramas públicas compartidas (como `main`) porque altera los hashes y causa estragos en el equipo",
            "No usar rebase los días viernes",
            "El rebase solo se permite en proyectos de menos de 10 archivos"
          ],
          "answerIndex": 0,
          "explanation": "El rebase reescribe los hashes SHA; si otros desarrolladores basaron su trabajo en la rama original, sus repositorios entrarán en conflicto destructivo."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: RECUPERACIÓN DE DESASTRES: REFLOG, BISECT Y RESTAURACIÓN",
      "description": "Salvar proyectos en situaciones críticas: el diario de bitácora `git reflog`, búsqueda binaria de bugs con `git bisect` y rescate de ramas borradas.",
      "items": [
        "En Git, casi nada se pierde realmente hasta que corre la recolección de basura (`git gc`).",
        "El Reference Log (`git reflog`): El historial cronológico de cada movimiento de `HEAD` en tu máquina local.",
        "Rescatar una rama borrada por error (`git branch recuperada <SHA-de-reflog>`).",
        "Deshacer un `git reset --hard` catastrófico recuperando el puntero previo.",
        "Debugging Binario con `git bisect`: Encontrar el commit exacto que introdujo un bug en $O(\\log n)$ pasos.",
        "Automatización de `git bisect run ./test.sh` para auditoría desatendida."
      ],
      "content": "## Recuperación de Desastres con Git Reflog y Bisect\n\n### El Salvador Supremo: `git reflog`\nIncluso si ejecutas `git reset --hard` y crees haber borrado una semana de trabajo, los commits siguen viviendo en la base de objetos de Git. `git reflog` guarda un registro de cada vez que `HEAD` se movió. Con solo buscar el hash donde te encontrabas antes del desastre, puedes restaurar la rama en un segundo.\n\n### Debugging Eficiente con `git bisect`\nSi una aplicación tiene 1,000 commits y de pronto algo falla en producción, revisar uno por uno tardaría días. `git bisect` realiza una **Búsqueda Binaria**:\n1. Marcas el commit actual como `bad` y un commit antiguo funcional como `good`.\n2. Git se sitúa a la mitad (commit 500) y te pide probar.\n3. En apenas 10 pasos ($2^{10} = 1024$), localiza el commit culpable exacto.",
      "codeSnippet": "# 1. Recuperar rama borrada por accidente usando Reflog\ngit branch -D feature-pagos     # ¡Borrada por error!\ngit reflog\n# 7c9a12b HEAD@{1}: commit: feat(pagos): integración lista\n# 4b8c34d HEAD@{2}: checkout: moving from main to feature-pagos\n\n# Resucitar la rama exactamente en ese estado:\ngit branch feature-pagos 7c9a12b\n\n# 2. Localizar un bug automáticamente con Git Bisect\ngit bisect start\ngit bisect bad                 # El commit actual falla\ngit bisect good v1.2.0         # La versión v1.2.0 funcionaba bien\ngit bisect run npm run test    # Git prueba automáticamente en binario",
      "quiz": [
        {
          "question": "¿Por qué `git reflog` es capaz de salvar tu trabajo incluso tras un `git reset --hard`?",
          "options": [
            "Porque registra cronológicamente cada cambio del puntero HEAD local, permitiendo apuntar una rama de vuelta al commit 'perdido'",
            "Porque guarda copias de seguridad en la nube de Microsoft",
            "Porque crea archivos zip ocultos en el escritorio"
          ],
          "answerIndex": 0,
          "explanation": "Git nunca borra commits inmediatamente; solo desvincula referencias. El reflog conserva los SHAs de donde estuvo HEAD para recuperarlos."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: ESTRATEGIAS DE RAMIFICACIÓN: TRUNK-BASED VS GITFLOW",
      "description": "Estrategias de branching profesional: la obsolescencia de GitFlow en equipos ágiles, Trunk-Based Development, ramas de vida corta y Feature Flags.",
      "items": [
        "Evolución de las estrategias de branching: De branches de meses a integración diaria.",
        "El modelo GitFlow: `develop`, `release`, `hotfix`, `feature` y por qué colapsa en CI/CD moderno.",
        "Trunk-Based Development (TBD): La práctica estándar de Google, Meta y Netflix.",
        "Ramas de vida corta (Short-lived branches) con ciclos de vida menores a 24 horas.",
        "Feature Flags (Feature Toggles): Separar el despliegue de código a producción de la activación de la funcionalidad.",
        "DORA Metrics: Cómo Trunk-Based Development dispara la frecuencia de despliegue y reduce el MTTR."
      ],
      "content": "## Estrategias de Ramificación: Trunk-Based Development\n\nHistóricamente, **GitFlow** proponía ramas de desarrollo gigantes (`develop`) que permanecían abiertas durante meses. El resultado inevitable era el **Merge Hell**: semanas resolviendo cientos de conflictos dolorosos.\n\n### Trunk-Based Development (TBD)\nEn TBD, todos los desarrolladores integran su trabajo frecuentemente (al menos una vez al día) en una única rama principal (**Trunk** o `main`):\n* Las ramas de feature duran horas, no días.\n* Si una funcionalidad no está terminada pero se necesita integrar para evitar desincronización, se envuelve en un **Feature Flag**: el código está en producción pero inactivo para los usuarios finales.",
      "codeSnippet": "// Patrón Feature Flag en TypeScript para Trunk-Based Development\nexport class PasarelaCompra {\n  async checkout(usuario: Usuario, monto: number): Promise<void> {\n    // Feature Flag: Permite mergear a main sin activar la feature al público\n    const usarNuevaPasarelaStripe = process.env.FEATURE_STRIPE_V3 === 'true';\n\n    if (usarNuevaPasarelaStripe) {\n      await this.ejecutarStripeV3(usuario, monto);\n    } else {\n      await this.ejecutarPasarelaLegacy(usuario, monto);\n    }\n  }\n\n  private async ejecutarStripeV3(u: Usuario, m: number) { /* Nuevo */ }\n  private async ejecutarPasarelaLegacy(u: Usuario, m: number) { /* Estable */ }\n}",
      "quiz": [
        {
          "question": "¿Cuál es el principio central de Trunk-Based Development?",
          "options": [
            "Todos los desarrolladores integran ramas de vida muy corta (menos de 1-2 días) directamente en la rama principal frecuentemente",
            "Mantener ramas de feature abiertas durante meses hasta que estén perfectas",
            "No usar Git para desarrollo colaborativo"
          ],
          "answerIndex": 0,
          "explanation": "Trunk-Based promueve fusiones continuas de pequeños cambios incrementales, evitando desincronizaciones masivas de código."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: COLABORACIÓN: WORKTREES, SUBMODULES Y CONFLICTOS COMPLEJOS",
      "description": "Colaboración avanzada sin fricción: Git Worktrees para trabajar en múltiples ramas a la vez sin clonar, resolución de conflictos 3-way y submodules.",
      "items": [
        "Git Worktrees: Mantener múltiples ramas activas simultáneamente en diferentes directorios sin clonar de nuevo.",
        "Solución al problema del 'Hotfix urgente': Atender un bug en producción sin cambiar de rama ni hacer `git stash`.",
        "Anatomía de un conflicto de Merge: Marcadores `<<<<<<<`, `=======`, `>>>>>>>` y merge tridireccional (3-way merge).",
        "Configuración del editor de diffs y merges (`git config --global merge.tool`).",
        "Git Submodules: Incorporación de repositorios externos independientes dentro de tu proyecto.",
        "Políticas de protección de ramas en GitHub: Code Reviews obligatorios, CI verde y firmas GPG."
      ],
      "content": "## Git Worktrees: El Fin del `git stash` Apresurado\n\nEstás a mitad de una refactorización compleja con 40 archivos modificados en tu rama `feature-grande`. De repente, el servidor de producción se cae y debes lanzar un hotfix inmediato.\n\nLa solución típica era hacer `git stash`, cambiar de rama y rezar para que al volver nada se desconfigure.\n\nCon **Git Worktrees**, vinculas tu mismo repositorio `.git` a un segundo directorio físico en tu disco:\n```bash\ngit worktree add ../proyecto-hotfix main\n```\nAbres esa carpeta en otra ventana de VS Code, corriges el bug, haces push a producción y regresas a tu refactorización intacta sin haber tocado tu directorio principal.",
      "codeSnippet": "# Comandos esenciales de Git Worktree\n# 1. Crear un nuevo árbol de trabajo en otra carpeta basado en la rama hotfix\ngit worktree add ../quimisell-hotfix -b hotfix-urgente main\n\n# 2. Listar todos los worktrees activos en tu máquina\ngit worktree list\n\n# 3. Tras resolver el incidente y hacer push, eliminar el worktree limpio\ngit worktree remove ../quimisell-hotfix",
      "quiz": [
        {
          "question": "¿Qué problema resuelve `git worktree` frente a `git stash`?",
          "options": [
            "Permite trabajar en dos ramas simultáneamente en carpetas separadas del disco compartiendo el mismo repositorio .git sin alterar tu espacio de trabajo actual",
            "Aumenta la velocidad de descarga de Git",
            "Borra los archivos duplicados del disco duro"
          ],
          "answerIndex": 0,
          "explanation": "Git Worktree crea un espacio de trabajo físico adicional vinculado al mismo historial `.git`, eliminando la necesidad de guardar en stash o cambiar de rama."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: LINUX PARA DEVOPS: PROCESOS, PERMISOS, SIGNALS Y SYSTEMD",
      "description": "El sistema operativo de la nube: arquitectura del kernel Linux, file descriptors, señales POSIX (SIGTERM vs SIGKILL) y gestión con systemd.",
      "items": [
        "Linux como estándar industrial absoluto: Todos los contenedores Docker y servidores cloud corren Linux.",
        "Procesos en Linux: PID 1, árbol de procesos, estados (Running, Sleeping, Zombie) y `top`/`htop`.",
        "Señales POSIX fundamentales: `SIGTERM` (15 - apagado ordenado), `SIGINT` (2 - Ctrl+C), `SIGKILL` (9 - muerte forzada inmediata).",
        "Manejo de señales en Node.js y Python para 'Graceful Shutdown' (cerrar conexiones de BD antes de salir).",
        "Permisos UNIX: Lectura (4), Escritura (2), Ejecución (1), máscara umask y `chmod`/`chown`.",
        "File Descriptors y Redirecciones: `stdin` (0), `stdout` (1), `stderr` (2), tuberías (pipes `|`) y logs.",
        "Gestión de servicios en background con `systemd` y `systemctl`."
      ],
      "content": "## Linux para DevOps y Graceful Shutdown\n\nEn entornos de contenedores (Docker/Kubernetes), cuando una aplicación se escala hacia abajo o se despliega una nueva versión, el orquestador envía una señal **`SIGTERM` (Signal Terminate)** al proceso:\n* La aplicación dispone de un periodo de gracia (ej. 30 segundos) para dejar de recibir nuevas conexiones HTTP, terminar de procesar las transacciones activas y cerrar el pool de conexiones de base de datos.\n* Si el proceso no escucha `SIGTERM` o no finaliza a tiempo, el kernel le envía un **`SIGKILL` (Signal 9)** implacable, abortando transacciones a mitad de camino y corrompiendo datos.",
      "codeSnippet": "// Graceful Shutdown en Node.js / Express escuchando señales POSIX\nimport express from 'express';\nimport http from 'http';\n\nconst app = express();\nconst server = http.createServer(app);\n\n// Escuchar la señal SIGTERM enviada por Docker / Kubernetes\nprocess.on('SIGTERM', () => {\n  console.log('Recibida señal SIGTERM. Iniciando Graceful Shutdown...');\n\n  // 1. Dejar de aceptar nuevas conexiones HTTP\n  server.close(async () => {\n    console.log('Servidor HTTP cerrado.');\n\n    // 2. Cerrar pools de base de datos y clientes Redis\n    try {\n      // await db.disconnect();\n      console.log('Conexiones a bases de datos cerradas con éxito.');\n      process.exit(0); // Salida limpia\n    } catch (err) {\n      console.error('Error al cerrar conexiones:', err);\n      process.exit(1);\n    }\n  });\n});",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia crítica entre enviar una señal `SIGTERM` y una señal `SIGKILL` a un proceso en Linux?",
          "options": [
            "SIGTERM puede ser capturada por la aplicación para realizar un Graceful Shutdown ordenado; SIGKILL la envía el kernel directamente matando el proceso de inmediato sin posibilidad de limpieza",
            "SIGKILL solo apaga el monitor",
            "No hay diferencia, son idénticas"
          ],
          "answerIndex": 0,
          "explanation": "SIGTERM da la oportunidad al software de cerrar transacciones y sockets; SIGKILL aborta el proceso instantáneamente a nivel de kernel."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: DOCKER & CONTENEDORIZACIÓN: NAMESPACES Y CGROUPS",
      "description": "La ilusión del contenedor: cómo Linux Namespaces y Control Groups (cgroups) construyen Docker sin máquinas virtuales pesadas.",
      "items": [
        "Contenedores vs Máquinas Virtuales: Compartir el kernel del Host vs emular hardware e hipervisores.",
        "Linux Namespaces (Aislamiento): PID (procesos), NET (red), MNT (puntos de montaje), IPC, UTS, USER.",
        "Linux Control Groups (cgroups): Límites estrictos de hardware (memoria máxima, cuotas de CPU, I/O de disco).",
        "Anatomía de una imagen Docker: Capas inmutables de solo lectura y sistema de archivos Copy-on-Write (OverlayFS).",
        "Comandos fundamentales: `docker run`, `docker ps`, `docker exec`, `docker logs`, `docker inspect`.",
        "Manejo de almacenamiento efímero vs Volúmenes persistentes (`-v /datos:/var/lib/postgresql/data`)."
      ],
      "content": "## Cómo Funciona Docker por Dentro: Namespaces y cgroups\n\nUn contenedor Docker **NO es una máquina virtual**. Es simplemente un proceso estándar de Linux que corre sobre el mismo kernel del anfitrión, pero con dos mecanismos del kernel aplicados:\n\n1. **Linux Namespaces (Visibilidad):** Le hacen creer al proceso que es el único en la máquina:\n   * `PID Namespace:` El proceso dentro del contenedor ve su propio PID como `1`.\n   * `NET Namespace:` Tiene su propia tarjeta de red virtual y tabla de enrutamiento.\n   * `MNT Namespace:` Ve un sistema de archivos raíz (`/`) independiente.\n2. **Control Groups - cgroups (Límites de Recursos):** Aseguran que el contenedor no consuma más de 512MB de RAM o 1 núcleo de CPU, evitando que un contenedor tumbe al servidor completo.",
      "codeSnippet": "# Comandos de inspección de contenedores\n# 1. Correr un contenedor con límites estrictos de hardware (cgroups)\ndocker run -d --name api-quimisell \\\n  --memory=\"512m\" \\\n  --cpus=\"1.5\" \\\n  -p 3000:3000 \\\n  node:20-alpine\n\n# 2. Inspeccionar el uso real de CPU y memoria en tiempo real\ndocker stats api-quimisell\n\n# 3. Entrar a una shell interactiva dentro del namespace del contenedor\ndocker exec -it api-quimisell sh",
      "quiz": [
        {
          "question": "¿Cuáles son las dos tecnologías fundamentales del kernel Linux en las que se basa Docker para aislar procesos?",
          "options": [
            "Namespaces (para aislamiento de visibilidad) y Control Groups / cgroups (para limitar consumo de CPU y memoria)",
            "VirtualBox y VMware",
            "HTML5 y WebSockets"
          ],
          "answerIndex": 0,
          "explanation": "Namespaces proveen la ilusión de tener un sistema operativo dedicado y cgroups imponen límites estrictos al consumo de recursos."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: OPTIMIZACIÓN DE DOCKERFILES: BUILDS MULTI-STAGE Y SEGURIDAD",
      "description": "Empaquetado eficiente de imágenes: Builds multietapa (Multi-Stage), orden de capas para maximizar caché y ejecución como usuario no-root.",
      "items": [
        "El problema de las imágenes infladas: De imágenes de 1.5GB a contenedores ultraligeros de 80MB.",
        "Estrategia Multi-Stage Build: Etapa de compilación (con SDK pesado) vs Etapa de producción (solo runtime mínimo).",
        "Optimización de la Caché de Capas: Copiar `package.json` antes del código fuente.",
        "Selección de imágenes base seguras: Alpine Linux vs Distroless de Google (sin shell ni utilidades para atacantes).",
        "Principio de Menor Privilegio: Creación y uso de un usuario no-root (`USER appuser`) para prevenir escapes de contenedor.",
        "El archivo `.dockerignore`: Evitar filtrar `node_modules`, `.git` y variables `.env` en la imagen pública."
      ],
      "content": "## Optimización de Dockerfiles: Multi-Stage y Seguridad\n\nEn una aplicación TypeScript, necesitas herramientas pesadas durante la compilación (`typescript`, `@types/*`, `build-essentials`), pero en producción solo requieres Node.js y los archivos `.js` compilados.\n\nCon **Multi-Stage Builds**, compilas en la primera etapa y solo copias los artefactos generados a la imagen final limpia, reduciendo el tamaño de 1.2GB a 70MB y eliminando herramientas que un atacante podría usar para compilar exploits.",
      "codeSnippet": "# Dockerfile Multi-Stage de Grado Corporativo para Node.js / TypeScript\n# ETAPA 1: Compilación (Build Stage)\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY tsconfig.json ./\nCOPY src/ ./src/\nRUN npm run build\nRUN npm prune --production\n\n# ETAPA 2: Producción Mínima (Production Stage)\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\n\n# Crear usuario sin privilegios root\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\n# Copiar solo dependencias de producción y código transpilado\nCOPY --from=builder /app/package*.json ./\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/dist ./dist\n\n# Cambiar al usuario seguro\nUSER appuser\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]",
      "quiz": [
        {
          "question": "¿Cuál es la ventaja de utilizar 'Multi-Stage Builds' en un Dockerfile?",
          "options": [
            "Permite usar herramientas pesadas de compilación en una etapa previa y copiar únicamente los archivos compilados finales a una imagen limpia y pequeña para producción",
            "Permite correr dos sistemas operativos a la vez",
            "Elimina la necesidad de instalar dependencias"
          ],
          "answerIndex": 0,
          "explanation": "Multi-Stage separa el entorno de build del entorno de ejecución, logrando imágenes hasta 10 veces más pequeñas y seguras."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: DOCKER COMPOSE: REDES Y AMBIENTES MULTI-CONTENEDOR",
      "description": "Orquestación en desarrollo local: archivos `docker-compose.yml`, redes internas DNS automáticas, volúmenes con nombre y variables de entorno.",
      "items": [
        "De ejecutar comandos docker gigantes a infraestructura declarativa reproducible con Compose.",
        "Estructura del archivo `docker-compose.yml`: services, networks, volumes, environment, ports.",
        "Resolución de nombres por DNS interno de Docker: Comunicación entre servicios por nombre de servicio (`http://database:5432`).",
        "Mapeo de puertos vs Redes internas aisladas (`expose` vs `ports`).",
        "Healthchecks de servicios: Condicionar el inicio de la API a que la base de datos esté lista (`depends_on: { condition: service_healthy }`).",
        "Manejo seguro de variables de entorno con archivos `.env.local`.",
        "Comandos de ciclo de vida: `docker compose up -d`, `docker compose down -v`, `docker compose logs -f`."
      ],
      "content": "## Docker Compose para Desarrollo de Microservicios\n\nDesarrollar una aplicación moderna requiere una base de datos PostgreSQL, una caché Redis y un broker Kafka. Forzar a cada desarrollador a instalar estas dependencias en su máquina física genera incompatibilidades constantes.\n\n**Docker Compose** permite levantar toda la arquitectura con un solo comando:\n```bash\ndocker compose up -d\n```\nDocker crea automáticamente una red interna donde los contenedores se descubren mediante su nombre de servicio (DNS integrado). La API se conecta a la base de datos usando `postgres://usuario:clave@db:5432/quimisell` sin preocuparse por direcciones IP dinámicas.",
      "codeSnippet": "# docker-compose.yml\nversion: '3.8'\n\nservices:\n  db:\n    image: postgres:16-alpine\n    restart: always\n    environment:\n      POSTGRES_DB: quimisell_dev\n      POSTGRES_USER: devuser\n      POSTGRES_PASSWORD: devpassword123\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U devuser -d quimisell_dev\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      DATABASE_URL: postgres://devuser:devpassword123@db:5432/quimisell_dev\n    depends_on:\n      db:\n        condition: service_healthy\n\nvolumes:\n  postgres_data:",
      "quiz": [
        {
          "question": "¿Cómo se comunican entre sí dos contenedores que forman parte del mismo archivo `docker-compose.yml`?",
          "options": [
            "A través del servidor DNS interno de Docker usando el nombre del servicio declarado en el archivo (ej. `http://db:5432`)",
            "Por bluetooth local",
            "Mediante la dirección IP pública del router de internet"
          ],
          "answerIndex": 0,
          "explanation": "Docker Compose crea una red compartida donde cada nombre de servicio funciona como un nombre de host resoluble por DNS interno."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: CI/CD FUNDAMENTOS: AUTOMATIZACIÓN CON GITHUB ACTIONS",
      "description": "Integración Continua moderna: triggers, runners, jobs, steps, matrices de compilación y la sintaxis declarativa de GitHub Actions.",
      "items": [
        "Definición formal de Integración Continua (CI) y Despliegue Continuo (CD).",
        "Anatomía de un Workflow en `.github/workflows/*.yml`.",
        "Eventos disparadores (Triggers): `push`, `pull_request`, `workflow_dispatch`, `schedule` (cron).",
        "Runners: Ambientes virtuales en la nube (Ubuntu, macOS, Windows) y self-hosted runners.",
        "Jobs paralelos vs secuenciales (`needs: [lint_job]`).",
        "Steps y Actions oficiales del Marketplace (`actions/checkout@v4`, `actions/setup-node@v4`).",
        "Gestión segura de credenciales con GitHub Secrets (`${{ secrets.VERCEL_TOKEN }}`)."
      ],
      "content": "## Fundamentos de GitHub Actions\n\n**GitHub Actions** es la plataforma líder de automatización integrada directamente en los repositorios de GitHub. Permite ejecutar pipelines completos de compilación, prueba y despliegue ante cualquier evento de Git.\n\n### Jerarquía de Conceptos\n* **Workflow:** El archivo YAML que define el proceso completo.\n* **Event (Trigger):** La acción que enciende el pipeline (ej. abrir un Pull Request a `main`).\n* **Job:** Conjunto de pasos que se ejecutan en una misma máquina virtual aislada (Runner). Por defecto los jobs corren en paralelo a menos que se use `needs`.\n* **Step:** Tarea individual (ejecutar un comando shell o invocar una Action comunitaria).",
      "codeSnippet": "# .github/workflows/ci.yml\nname: Integración Continua (CI)\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  verificacion:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Descargar repositorio\n        uses: actions/checkout@v4\n\n      - name: Configurar Node.js 20\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n\n      - name: Instalar dependencias limpias\n        run: npm ci\n\n      - name: Verificación estricta de TypeScript\n        run: npx tsc --noEmit\n\n      - name: Ejecutar pruebas automatizadas\n        run: npm test",
      "quiz": [
        {
          "question": "¿Cuál es la diferencia entre `npm install` y `npm ci` en un pipeline de CI en GitHub Actions?",
          "options": [
            "`npm ci` realiza una instalación limpia, rápida y estrictamente idéntica basada en `package-lock.json`, fallando si hay desajustes",
            "`npm ci` solo sirve para paquetes de C++",
            "No hay diferencia técnica"
          ],
          "answerIndex": 0,
          "explanation": "`npm ci` borra `node_modules` y descarga exactamente las versiones bloqueadas en el lockfile sin mutarlo, garantizando reproducibilidad absoluta."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: PIPELINES DE CI AVANZADOS: MATRICES, CACHÉ Y DAG DE JOBS",
      "description": "Optimización extrema de CI: matrices de compatibilidad (multi-OS, multi-node), caché de dependencias y grafos de dependencia entre jobs.",
      "items": [
        "El costo del tiempo de CI: Cómo reducir pipelines de 15 minutos a 2 minutos.",
        "Estrategia de Matrices (Matrix Strategy): Probar simultáneamente en múltiples versiones de Node.js (18, 20, 22) y sistemas operativos (Ubuntu, Windows).",
        "Caché de dependencias (`actions/cache`): Almacenar carpetas `node_modules` o cachés de compilación entre ejecuciones.",
        "Grafos de Dependencia de Jobs (DAG en Actions): Configuración de `needs: [lint, unit_tests]`.",
        "Gestión de Artefactos de Build (`actions/upload-artifact` y `download-artifact`).",
        "Condicionales de ejecución (`if: github.ref == 'refs/heads/main'`)."
      ],
      "content": "## Optimización de Pipelines de CI: Matrices y DAG\n\nEn proyectos grandes, ejecutar todos los pasos en un solo job secuencial es ineficiente. Un pipeline moderno modela un **Grafo Acíclico Dirigido (DAG)** de jobs independientes:\n\n```\n                  ┌──────────────┐\n                  │  Lint & Type │\n                  └──────┬───────┘\n                         │\n        ┌────────────────┴────────────────┐\n        ▼                                 ▼\n┌───────────────┐                 ┌───────────────┐\n│ Tests Unit    │                 │ SAST Semgrep  │\n└───────┬───────┘                 └───────┬───────┘\n        │                                 │\n        └────────────────┬────────────────┘\n                         ▼\n                  ┌──────────────┐\n                  │ Build & Pack │\n                  └──────────────┘\n```\n\nSi el Lint o Typecheck falla en 30 segundos, el pipeline aborta de inmediato sin gastar minutos de cómputo en builds pesados.",
      "codeSnippet": "# Pipeline con Matriz y Dependencias (DAG)\njobs:\n  pruebas_matriz:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [18.x, 20.x, 22.x]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n      - run: npm ci\n      - run: npm test\n\n  build_produccion:\n    needs: pruebas_matriz # Solo corre si TODA la matriz pasó con éxito\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm run build",
      "quiz": [
        {
          "question": "¿Qué ventaja aporta el uso de la directiva `strategy: matrix` en GitHub Actions?",
          "options": [
            "Permite ejecutar el mismo job en paralelo a través de múltiples combinaciones de versiones de lenguaje o sistemas operativos",
            "Cifra los archivos con una clave cuántica",
            "Aumenta la memoria RAM del servidor"
          ],
          "answerIndex": 0,
          "explanation": "La matriz genera jobs paralelos para cada combinación definida, permitiendo certificar compatibilidad multiplataforma en minutos."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: DEVSECOPS: ESCANEO DE SECRETOS CON TRUFFLEHOG",
      "description": "Seguridad proactiva en el commit: detección de claves API, tokens de AWS, llaves SSH y certificados con TruffleHog y hooks de pre-commit.",
      "items": [
        "El peligro de las fugas de credenciales en GitHub: Bots maliciosos que vacían cuentas de AWS en minutos.",
        "Diferencia entre escanear el commit actual vs escanear el historial completo de Git.",
        "TruffleHog: Motor de detección de secretos de alta precisión mediante entropía y firmas verificables.",
        "Verificación activa de secretos: Cómo TruffleHog comprueba si una clave encontrada sigue viva.",
        "Hooks de Git con `pre-commit`: Bloquear commits localmente en la máquina del programador antes de que salgan.",
        "Qué hacer si subiste un secreto a GitHub: Invalidadción inmediata, rotación de credenciales y purga con `git-filter-repo`."
      ],
      "content": "## DevSecOps: Escaneo de Secretos con TruffleHog\n\nEl error más común de los desarrolladores es subir por accidente un archivo `.env` o una clave de API a un repositorio público o privado. Existen redes de bots escaneando GitHub en tiempo real que clonan repositorios recién creados en milisegundos para minar criptomonedas con tus credenciales de AWS.\n\n### La Solución DevSecOps en Dos Capas\n1. **Capa Local (Pre-commit Hook):** Un script que corre antes de confirmar el commit en tu máquina. Si detecta una cadena con alta entropía o patrón de clave, aborta el commit.\n2. **Capa de Servidor (CI Pipeline):** TruffleHog corre en GitHub Actions analizando todos los commits del Pull Request.",
      "codeSnippet": "# Integración de TruffleHog en GitHub Actions\nname: Escaneo de Secretos DevSecOps\n\non: [push, pull_request]\n\njobs:\n  trufflehog:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Descargar repositorio completo (con historial)\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0 # TruffleHog necesita el historial completo para auditar\n\n      - name: Escaneo de Secretos con TruffleHog\n        uses: trufflesecurity/trufflehog@main\n        with:\n          path: ./\n          base: ${{ github.event.repository.default_branch }}\n          head: HEAD\n          extra_args: --only-verified # Solo reportar secretos cuya validez fue confirmada",
      "quiz": [
        {
          "question": "¿Por qué es fundamental configurar `fetch-depth: 0` al ejecutar TruffleHog en GitHub Actions?",
          "options": [
            "Porque un secreto pudo haber sido subido en un commit anterior y borrado en el siguiente; TruffleHog necesita revisar todo el historial para detectarlo",
            "Para que el clon de Git sea más rápido",
            "Porque Linux no soporta clones superficiales"
          ],
          "answerIndex": 0,
          "explanation": "Borrar un secreto en un commit posterior no lo elimina del historial de Git. `fetch-depth: 0` permite auditar cada commit histórico."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: DEVSECOPS: ANÁLISIS ESTÁTICO DE CÓDIGO (SAST) CON SEMGREP",
      "description": "Seguridad a nivel de código fuente: reglas de Semgrep, detección de OWASP Top 10 (SQL Injection, XSS, Path Traversal) y remediación guiada.",
      "items": [
        "Static Application Security Testing (SAST): Auditoría automática del código fuente sin ejecutarlo.",
        "Por qué Semgrep superó a las herramientas tradicionales: Reglas declarativas con sintaxis del propio lenguaje de programación.",
        "Detección de inyecciones SQL por concatenación de cadenas (`db.query('SELECT ' + input)`).",
        "Detección de vulnerabilidades de Path Traversal y deserialización insegura.",
        "Creación de reglas personalizadas de Semgrep para estandarizar buenas prácticas en la empresa.",
        "Configuración de Semgrep en GitHub Actions como Quality Gate de seguridad bloqueante."
      ],
      "content": "## SAST con Semgrep: Defensas en el Código Fuente\n\nEl análisis estático tradicional (como SonarQube clásico) dependía de árboles de sintaxis abstracta (AST) crípticos. **Semgrep** revolucionó el campo al permitir escribir reglas de seguridad usando el mismo lenguaje de tu proyecto.\n\nPor ejemplo, la regla para detectar una inyección SQL en Python es tan simple como:\n```yaml\npattern: $DB.query(\"... \" + $INPUT)\n```\nSemgrep rastrea el flujo de datos (Taint Analysis): si una variable no confiable que proviene de un parámetro de URL llega sin sanitizar a una consulta SQL, alerta inmediatamente.",
      "codeSnippet": "# .github/workflows/sast.yml\nname: Auditoría SAST con Semgrep\n\non: [pull_request]\n\njobs:\n  semgrep:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Ejecutar Semgrep con reglas de OWASP Top 10\n        uses: returntocorp/semgrep-action@v1\n        with:\n          config: >-\n            p/security-audit\n            p/owasp-top-ten\n            p/typescript\n        env:\n          SEMGREP_RULES: p/owasp-top-ten",
      "quiz": [
        {
          "question": "¿Qué tipo de vulnerabilidad detecta prioritariamente una herramienta SAST como Semgrep?",
          "options": [
            "Patrones de código inseguros en el texto fuente, como concatenación de consultas SQL, deserialización insegura o uso de criptografía débil",
            "Ataques DDoS en la red física",
            "Cables de red desconectados"
          ],
          "answerIndex": 0,
          "explanation": "SAST analiza la sintaxis y flujo de datos dentro de tus archivos de código fuente para interceptar patrones inseguros antes de compilar."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: DEVSECOPS: ANÁLISIS DE COMPONENTES (SCA) CON TRIVY",
      "description": "Seguridad en la cadena de suministro (Supply Chain Security): escaneo de dependencias con Trivy, detección de vulnerabilidades CVE y Software Bill of Materials (SBOM).",
      "items": [
        "El 80% del código de una aplicación moderna proviene de librerías de terceros (npm, pip, maven).",
        "Software Composition Analysis (SCA): Auditoría de paquetes contra bases de datos mundiales de vulnerabilidades (CVE / NVD).",
        "Trivy de Aqua Security: Escaneo integral de archivos lock (`package-lock.json`), imágenes Docker y configuraciones de Terraform.",
        "Concepto de CVE (Common Vulnerabilities and Exposures) y severidades (Critical, High, Medium, Low).",
        "Generación de SBOM (Software Bill of Materials) en formatos CycloneDX y SPDX para cumplimiento normativo.",
        "Políticas de rechazo: Bloquear el despliegue si existe una vulnerabilidad Critical o High con parche disponible."
      ],
      "content": "## Software Composition Analysis (SCA) con Trivy\n\nEl ataque a la cadena de suministro más destructivo de la historia (como Log4Shell o la inyección maliciosa en `xz-utils`) no atacó el código propio de las empresas, sino sus dependencias de terceros.\n\n**Trivy** es una herramienta open-source ultrarrápida que analiza:\n1. Las dependencias declaradas en tus archivos lock (`package-lock.json`, `poetry.lock`).\n2. Las capas del sistema operativo de tus imágenes de Docker (`alpine`, `debian`).\n3. Si existe una vulnerabilidad conocida (CVE), Trivy te indica exactamente qué versión mínima debes instalar para corregirla.",
      "codeSnippet": "# Ejecución de Trivy en GitHub Actions\nname: Auditoría SCA con Trivy\n\non: [push]\n\njobs:\n  trivy_sca:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Escanear dependencias npm en busca de CVEs\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: 'fs'\n          scan-ref: '.'\n          severity: 'CRITICAL,HIGH'\n          exit-code: '1' # Romper el build si hay vulnerabilidades críticas con parche",
      "quiz": [
        {
          "question": "¿Qué información aporta una vulnerabilidad identificada con código CVE?",
          "options": [
            "Un identificador único internacional de una falla de seguridad públicamente conocida en una versión específica de un software o librería",
            "El número de serie del procesador",
            "El nombre de la empresa creadora del software"
          ],
          "answerIndex": 0,
          "explanation": "CVE (Common Vulnerabilities and Exposures) es el catálogo universal estandarizado para referenciar y rastrear fallas de seguridad conocidas."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: ESTRATEGIAS DE DESPLIEGUE CONTINUO: BLUE/GREEN Y CANARY",
      "description": "Entrega continua sin tiempo de inactividad (Zero-Downtime): Blue/Green Deployments, Canary Releases, Rolling Updates y Circuit Breakers de despliegue.",
      "items": [
        "El costo del Downtime: Por qué el despliegue tradicional con corte de servicio es inaceptable.",
        "Rolling Updates: Reemplazo gradual de réplicas en orquestadores.",
        "Blue/Green Deployments: Dos entornos idénticos de producción y conmutación instantánea a nivel de balanceador.",
        "Canary Releases: Envío del 5% del tráfico de usuarios a la nueva versión para validar métricas antes del 100%.",
        "Monitoreo de métricas clave durante el despliegue: Tasa de error HTTP 5xx y latencia p95.",
        "Mecanismos de Rollback automatizado en segundos ante anomalías de producción."
      ],
      "content": "## Estrategias de Despliegue Continuo (CD)\n\n### Blue/Green Deployment\nMantienes dos entornos idénticos:\n* **Blue:** El entorno activo actual recibiendo el 100% de los usuarios.\n* **Green:** El nuevo entorno donde se despliega la nueva versión sin recibir tráfico.\nSe ejecutan pruebas de humo en Green. Si todo está correcto, el balanceador de carga o CDN cambia el enrutamiento a Green instantáneamente. Si algo falla, el switch regresa a Blue en 1 segundo.\n\n### Canary Release\nInspirado en los canarios que los mineros llevaban a las minas de carbón para detectar gases tóxicos: despliegas la nueva versión solo para el 5% de los usuarios. Si la tasa de error 5xx sube un 0.5%, el despliegue se cancela automáticamente sin haber impactado al 95% restante.",
      "codeSnippet": "// Ejemplo conceptual: Enrutamiento Canary a nivel de Edge / Reverse Proxy\nexport function enrutarCanary(userId: string): 'version_estable' | 'version_canary' {\n  // Función hash determinista sobre el ID de usuario\n  const hash = Array.from(userId).reduce((acc, char) => acc + char.charCodeAt(0), 0);\n  const porcentaje = hash % 100;\n\n  // Enviar el 10% de los usuarios a la nueva versión Canary\n  if (porcentaje < 10) {\n    return 'version_canary';\n  }\n  return 'version_estable';\n}",
      "quiz": [
        {
          "question": "¿Cuál es la principal ventaja de una estrategia de despliegue 'Canary Release'?",
          "options": [
            "Permite validar la nueva versión con un porcentaje mínimo de usuarios reales en producción, aislando el impacto y permitiendo abortar antes de afectar a todos",
            "Reduce el costo de la factura eléctrica",
            "Obliga a que todos los usuarios actualicen su navegador"
          ],
          "answerIndex": 0,
          "explanation": "El despliegue Canary minimiza el radio de impacto: si existe un bug crítico oculto, solo lo experimenta un pequeño porcentaje de usuarios."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: DESPLIEGUE EN EL EDGE & SERVERLESS CON VERCEL",
      "description": "Arquitectura Cloud moderna sin servidores: Edge Functions, Vercel Edge Middleware, CDN global Anycast, ISR (Incremental Static Regeneration) y $0 de costo base.",
      "items": [
        "De servidores dedicados a computación en el Edge: Ejecución a milisegundos del usuario.",
        "La arquitectura de Vercel: Plataforma de entrega global optimizada para aplicaciones web modernas.",
        "Edge Functions vs Serverless Functions tradicionales (Cold Starts de microsegundos con V8 Isolates).",
        "Vercel Edge Middleware: Interceptación y mutación de requests antes del renderizado.",
        "Configuración del archivo `vercel.json`: Headers de seguridad, redirecciones y reescrituras.",
        "Despliegues atómicos e inmutables con URLs de Preview automáticas por cada Pull Request.",
        "Monitoreo de Core Web Vitals y analíticas de rendimiento en el Edge."
      ],
      "content": "## Despliegue en el Edge con Vercel\n\nLas arquitecturas clásicas alojaban un servidor en una sola región (ej. `us-east-1` en Virginia). Un usuario en Madrid o Buenos Aires sufría cientos de milisegundos de latencia por la distancia física transoceánica.\n\n**Vercel y la Computación en el Edge** distribuyen tu código a cientos de centros de datos alrededor del mundo usando una red Anycast:\n* **V8 Isolates:** En lugar de levantar contenedores pesados que tardan segundos en arrancar (**Cold Starts**), las Edge Functions corren sobre instancias ligeras de V8 que inician en menos de 5 milisegundos.\n* **Inmutabilidad:** Cada commit genera un despliegue inmutable único con su propia URL permanente, permitiendo probar cualquier versión previa sin riesgo.",
      "codeSnippet": "// Ejemplo: Edge Middleware en Vercel (middleware.ts)\n// Se ejecuta en el CDN de borde en < 5ms antes de llegar al servidor\nexport function middleware(request: Request) {\n  const url = new URL(request.url);\n\n  // Redirección de seguridad en el Edge\n  if (url.protocol === 'http:') {\n    return Response.redirect('https://' + url.host + url.pathname, 301);\n  }\n\n  // Inyección de Headers de Seguridad globales en el Edge\n  const response = new Response(null, {\n    headers: {\n      'X-Content-Type-Options': 'nosniff',\n      'X-Frame-Options': 'DENY',\n      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',\n    },\n  });\n\n  return response;\n}",
      "quiz": [
        {
          "question": "¿Por qué las Edge Functions en plataformas como Vercel tienen un tiempo de arranque (Cold Start) prácticamente nulo comparadas con contenedores tradicionales?",
          "options": [
            "Porque utilizan V8 Isolates ligeros en lugar de iniciar sistemas operativos o contenedores completos para cada petición",
            "Porque solo admiten archivos HTML estáticos",
            "Porque no tienen conexión a internet"
          ],
          "answerIndex": 0,
          "explanation": "Los V8 Isolates comparten un mismo proceso seguro asignando memoria en microsegundos, eliminando la sobrecarga de arranque de máquinas virtuales o contenedores."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: INFRAESTRUCTURA COMO CÓDIGO (IAC) CON TERRAFORM",
      "description": "Gestión declarativa de la nube: lenguaje HCL de HashiCorp, proveedores (AWS/Cloudflare), estado de Terraform (tfstate) y el ciclo Init-Plan-Apply.",
      "items": [
        "El anti-patrón de 'ClickOps': Configurar servidores y redes a mano en la consola web de AWS.",
        "Infraestructura como Código (IaC): Versionar servidores, bases de datos y redes en Git.",
        "Introducción a Terraform y sintaxis HCL (HashiCorp Configuration Language).",
        "El ciclo fundamental de Terraform: `terraform init`, `terraform plan`, `terraform apply`.",
        "El archivo de estado `terraform.tfstate`: Cómo mapea el código con la realidad física de la nube.",
        "Bloqueo de estado remoto en S3 + DynamoDB para evitar colisiones de equipo.",
        "Módulos reutilizables de Terraform para estandarizar infraestructura."
      ],
      "content": "## Infraestructura como Código (IaC) con Terraform\n\nConfigurar servidores haciendo clics en paneles de control es una receta para el desastre: nadie documenta los cambios, es imposible replicar el entorno en caso de catástrofe y no hay historial de auditoría.\n\n**Terraform** te permite declarar toda tu infraestructura en archivos `.tf` versionados en Git:\n* Si necesitas un cluster de Kubernetes, una base de datos PostgreSQL y una regla de firewall, los escribes en HCL.\n* `terraform plan` compara tu código con la infraestructura real y te muestra un diff exacto de lo que se creará, modificará o destruirá antes de aplicar cambios.",
      "codeSnippet": "# main.tf: Declaración de Infraestructura en HCL\nterraform {\n  required_providers {\n    aws = {\n      source  = \"hashicorp/aws\"\n      version = \"~> 5.0\"\n    }\n  }\n}\n\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\n# Crear un bucket S3 seguro para almacenamiento de artefactos\nresource \"aws_s3_bucket\" \"artefactos_quimisell\" {\n  bucket = \"quimisell-build-artifacts-prod\"\n\n  tags = {\n    Ambiente   = \"Produccion\"\n    Gestionado = \"Terraform\"\n  }\n}\n\nresource \"aws_s3_bucket_versioning\" \"versionado\" {\n  bucket = aws_s3_bucket.artefactos_quimisell.id\n  versioning_configuration {\n    status = \"Enabled\"\n  }\n}",
      "quiz": [
        {
          "question": "¿Cuál es la función del comando `terraform plan`?",
          "options": [
            "Compara el código HCL con el estado real de la nube y genera un plan de ejecución detallado mostrando qué recursos se van a crear, cambiar o destruir sin aplicar nada todavía",
            "Ejecuta el código en producción inmediatamente sin preguntar",
            "Formatea el texto del archivo"
          ],
          "answerIndex": 0,
          "explanation": "`terraform plan` es la red de seguridad de IaC: permite auditar exactamente qué cambios ocurrirán antes de confirmar su aplicación con `terraform apply`."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: PIPELINE CORPORATIVO DEVSECOPS COMPLETO",
      "description": "Arquitectura completa de ingeniería: de commit local a producción inmutable con escaneo de secretos (TruffleHog), SAST (Semgrep), SCA (Trivy) y despliegue inmutable.",
      "items": [
        "Integración de todas las disciplinas de Git, DevOps y DevSecOps en un pipeline corporativo.",
        "Estructuración de Quality Gates infranqueables en GitHub Actions.",
        "Manejo de variables de entorno y secrets protegidos en Vercel y Cloudflare.",
        "Políticas de Branch Protection estrictas en GitHub (Zero Trust).",
        "Trazabilidad de despliegue: Relación biunívoca entre Commit SHA, Artifact ID y URL de producción.",
        "Simulación de un incidente de seguridad y respuesta automatizada de contención."
      ],
      "content": "## Proyecto Integrador: El Pipeline Corporativo DevSecOps\n\nEn este módulo final, ensamblamos la arquitectura completa de automatización y seguridad que protege las aplicaciones en empresas de tecnología de clase mundial.\n\n### El Flujo Inmutable de Extremo a Extremo\n```\n[ Desarrollador ]\n       │\n       ▼ (1. Git Commit local)\n[ Pre-commit Hook ] ➔ Bloquea si hay claves o formato deficiente\n       │\n       ▼ (2. Push a rama feature)\n[ GitHub Actions ]\n       ├─► Gate 1: Lint & Strict Typecheck (tsc)\n       ├─► Gate 2: Secret Scanning (TruffleHog)\n       ├─► Gate 3: SAST Code Analysis (Semgrep OWASP Top 10)\n       ├─► Gate 4: SCA Dependency Audit (Trivy CVE Scan)\n       └─► Gate 5: Pruebas Automatizadas Unitarias\n       │\n       ▼ (3. Pull Request Aprobado & Merge a Main)\n[ Vercel Edge Deployment ]\n       ├─► Inmutable Build\n       ├─► Edge Middleware (Headers de Seguridad HSTS/CSP)\n       └─► Despliegue en 300+ ciudades en < 2 minutos\n```",
      "codeSnippet": "# Pipeline Completo de DevSecOps Corporativo (.github/workflows/devsecops-master.yml)\nname: Pipeline Corporativo DevSecOps QuimiSell\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  auditoria_seguridad:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: 1. Escaneo de Secretos (TruffleHog)\n        uses: trufflesecurity/trufflehog@main\n        with:\n          path: ./\n          head: HEAD\n\n      - name: 2. Análisis Estático SAST (Semgrep)\n        uses: returntocorp/semgrep-action@v1\n        with:\n          config: p/owasp-top-ten\n\n      - name: 3. Auditoría de Dependencias SCA (Trivy)\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: 'fs'\n          severity: 'CRITICAL,HIGH'\n\n  compilacion_y_despliegue:\n    needs: auditoria_seguridad # Solo si la seguridad está 100% limpia\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - run: npm ci\n      - run: npx tsc --noEmit\n      - run: npm run build",
      "quiz": [
        {
          "question": "¿Por qué el job de compilación y despliegue debe tener la directiva `needs: auditoria_seguridad`?",
          "options": [
            "Para garantizar que ningún código con vulnerabilidades críticas o secretos expuestos pueda compilarse o desplegarse jamás en producción",
            "Porque GitHub Actions lo exige obligatoriamente en todos los archivos",
            "Para que los logs se vean de color verde"
          ],
          "answerIndex": 0,
          "explanation": "El principio DevSecOps exige que la seguridad sea un control bloqueante (Quality Gate): si se detecta un riesgo, la entrega se interrumpe de inmediato."
        }
      ]
    }
  ]
};

export const GIT_DEVOPS_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 1: ARQUITECTURA INTERNA DE GIT: EL MODELO DE OBJETOS.",
      "placeholder": "# Comandos Plumbing para inspeccionar las entrañas de Git\n# 1. Crear un blob en la base de objetos de Git sin tocar el staging\necho \"Hola QuimiSell\" | git hash-object -w --stdin\n# Devuelve el SHA: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391\n\n# 2. Inspeccionar el tipo y contenido de cualquier hash\ngit cat-file -t e69de29bb2d1d6434b8b29ae775ad8c2e48c5391  # Muestra: blob\ngit cat-file -p e69de29bb2d1d6434b8b29ae775ad8c2e48c5391  # Muestra: Hola QuimiSell\n\n# 3. Ver la estructura de directorios de un commit\ngit ls-tree -r HEAD",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 2: EL DIRECTED ACYCLIC GRAPH (DAG) DE GIT Y PUNTEROS HEAD.",
      "placeholder": "# Navegación y Referencias en el DAG de Git\n# Ver a qué apunta HEAD en este momento\ncat .git/HEAD\n# Resultado típico: ref: refs/heads/main\n\n# Inspeccionar el hash al que apunta la rama main\ncat .git/refs/heads/main\n\n# Entrar deliberadamente en Detached HEAD para examinar un commit antiguo\ngit checkout HEAD~3\n\n# Salir de Detached HEAD regresando a la rama activa\ngit switch main",
      "expectedKeywords": [
        "el"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 3: STAGING AREA, INDEX Y CICLO DE VIDA DE ARCHIVOS.",
      "placeholder": "# Ciclo de vida y Staging granular\n# 1. Ver qué cambios están en el disco vs en el staging\ngit diff           # Cambios no agregados al staging\ngit diff --staged  # Cambios listos para el commit\n\n# 2. Agregar cambios interactivamente por bloques (Hunks)\ngit add -p src/usuario.ts\n# Responde: [y] sí agregar, [n] no agregar, [s] dividir bloque más pequeño\n\n# 3. Sacar un archivo del staging sin perder tus modificaciones en disco\ngit restore --staged src/config.ts",
      "expectedKeywords": [
        "staging"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 4: OPERACIONES AVANZADAS: REBASE INTERACTIVO, SQUASH Y CHERRY-PICK.",
      "placeholder": "# Limpieza de historial con Rebase Interactivo\n# 1. Abrir editor con los últimos 4 commits de la rama\ngit rebase -i HEAD~4\n\n# Dentro del editor interactivo:\n# pick a1b2c3d feat(auth): implementar inicio de sesión con JWT\n# fixup d4e5f6a fix: corregir typo en token\n# fixup 7g8h9i0 test: añadir pruebas de expiración\n# squash 1j2k3l4 docs: documentar variables de entorno de auth\n\n# 2. Cherry-pick de un hotfix urgente a producción\ngit checkout main\ngit cherry-pick 9a8b7c6  # Aplica únicamente ese commit específico",
      "expectedKeywords": [
        "operaciones"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 5: RECUPERACIÓN DE DESASTRES: REFLOG, BISECT Y RESTAURACIÓN.",
      "placeholder": "# 1. Recuperar rama borrada por accidente usando Reflog\ngit branch -D feature-pagos     # ¡Borrada por error!\ngit reflog\n# 7c9a12b HEAD@{1}: commit: feat(pagos): integración lista\n# 4b8c34d HEAD@{2}: checkout: moving from main to feature-pagos\n\n# Resucitar la rama exactamente en ese estado:\ngit branch feature-pagos 7c9a12b\n\n# 2. Localizar un bug automáticamente con Git Bisect\ngit bisect start\ngit bisect bad                 # El commit actual falla\ngit bisect good v1.2.0         # La versión v1.2.0 funcionaba bien\ngit bisect run npm run test    # Git prueba automáticamente en binario",
      "expectedKeywords": [
        "recuperación"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 6: ESTRATEGIAS DE RAMIFICACIÓN: TRUNK-BASED VS GITFLOW.",
      "placeholder": "// Patrón Feature Flag en TypeScript para Trunk-Based Development\nexport class PasarelaCompra {\n  async checkout(usuario: Usuario, monto: number): Promise<void> {\n    // Feature Flag: Permite mergear a main sin activar la feature al público\n    const usarNuevaPasarelaStripe = process.env.FEATURE_STRIPE_V3 === 'true';\n\n    if (usarNuevaPasarelaStripe) {\n      await this.ejecutarStripeV3(usuario, monto);\n    } else {\n      await this.ejecutarPasarelaLegacy(usuario, monto);\n    }\n  }\n\n  private async ejecutarStripeV3(u: Usuario, m: number) { /* Nuevo */ }\n  private async ejecutarPasarelaLegacy(u: Usuario, m: number) { /* Estable */ }\n}",
      "expectedKeywords": [
        "estrategias"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 7: COLABORACIÓN: WORKTREES, SUBMODULES Y CONFLICTOS COMPLEJOS.",
      "placeholder": "# Comandos esenciales de Git Worktree\n# 1. Crear un nuevo árbol de trabajo en otra carpeta basado en la rama hotfix\ngit worktree add ../quimisell-hotfix -b hotfix-urgente main\n\n# 2. Listar todos los worktrees activos en tu máquina\ngit worktree list\n\n# 3. Tras resolver el incidente y hacer push, eliminar el worktree limpio\ngit worktree remove ../quimisell-hotfix",
      "expectedKeywords": [
        "colaboración"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 8: LINUX PARA DEVOPS: PROCESOS, PERMISOS, SIGNALS Y SYSTEMD.",
      "placeholder": "// Graceful Shutdown en Node.js / Express escuchando señales POSIX\nimport express from 'express';\nimport http from 'http';\n\nconst app = express();\nconst server = http.createServer(app);\n\n// Escuchar la señal SIGTERM enviada por Docker / Kubernetes\nprocess.on('SIGTERM', () => {\n  console.log('Recibida señal SIGTERM. Iniciando Graceful Shutdown...');\n\n  // 1. Dejar de aceptar nuevas conexiones HTTP\n  server.close(async () => {\n    console.log('Servidor HTTP cerrado.');\n\n    // 2. Cerrar pools de base de datos y clientes Redis\n    try {\n      // await db.disconnect();\n      console.log('Conexiones a bases de datos cerradas con éxito.');\n      process.exit(0); // Salida limpia\n    } catch (err) {\n      console.error('Error al cerrar conexiones:', err);\n      process.exit(1);\n    }\n  });\n});",
      "expectedKeywords": [
        "linux"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 9: DOCKER & CONTENEDORIZACIÓN: NAMESPACES Y CGROUPS.",
      "placeholder": "# Comandos de inspección de contenedores\n# 1. Correr un contenedor con límites estrictos de hardware (cgroups)\ndocker run -d --name api-quimisell \\\n  --memory=\"512m\" \\\n  --cpus=\"1.5\" \\\n  -p 3000:3000 \\\n  node:20-alpine\n\n# 2. Inspeccionar el uso real de CPU y memoria en tiempo real\ndocker stats api-quimisell\n\n# 3. Entrar a una shell interactiva dentro del namespace del contenedor\ndocker exec -it api-quimisell sh",
      "expectedKeywords": [
        "docker"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 10: OPTIMIZACIÓN DE DOCKERFILES: BUILDS MULTI-STAGE Y SEGURIDAD.",
      "placeholder": "# Dockerfile Multi-Stage de Grado Corporativo para Node.js / TypeScript\n# ETAPA 1: Compilación (Build Stage)\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY tsconfig.json ./\nCOPY src/ ./src/\nRUN npm run build\nRUN npm prune --production\n\n# ETAPA 2: Producción Mínima (Production Stage)\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\n\n# Crear usuario sin privilegios root\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\n# Copiar solo dependencias de producción y código transpilado\nCOPY --from=builder /app/package*.json ./\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/dist ./dist\n\n# Cambiar al usuario seguro\nUSER appuser\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]",
      "expectedKeywords": [
        "optimización"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 11: DOCKER COMPOSE: REDES Y AMBIENTES MULTI-CONTENEDOR.",
      "placeholder": "# docker-compose.yml\nversion: '3.8'\n\nservices:\n  db:\n    image: postgres:16-alpine\n    restart: always\n    environment:\n      POSTGRES_DB: quimisell_dev\n      POSTGRES_USER: devuser\n      POSTGRES_PASSWORD: devpassword123\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U devuser -d quimisell_dev\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      DATABASE_URL: postgres://devuser:devpassword123@db:5432/quimisell_dev\n    depends_on:\n      db:\n        condition: service_healthy\n\nvolumes:\n  postgres_data:",
      "expectedKeywords": [
        "docker"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 12: CI/CD FUNDAMENTOS: AUTOMATIZACIÓN CON GITHUB ACTIONS.",
      "placeholder": "# .github/workflows/ci.yml\nname: Integración Continua (CI)\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  verificacion:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Descargar repositorio\n        uses: actions/checkout@v4\n\n      - name: Configurar Node.js 20\n        uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n\n      - name: Instalar dependencias limpias\n        run: npm ci\n\n      - name: Verificación estricta de TypeScript\n        run: npx tsc --noEmit\n\n      - name: Ejecutar pruebas automatizadas\n        run: npm test",
      "expectedKeywords": [
        "ci/cd"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 13: PIPELINES DE CI AVANZADOS: MATRICES, CACHÉ Y DAG DE JOBS.",
      "placeholder": "# Pipeline con Matriz y Dependencias (DAG)\njobs:\n  pruebas_matriz:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [18.x, 20.x, 22.x]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n      - run: npm ci\n      - run: npm test\n\n  build_produccion:\n    needs: pruebas_matriz # Solo corre si TODA la matriz pasó con éxito\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm run build",
      "expectedKeywords": [
        "pipelines"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 14: DEVSECOPS: ESCANEO DE SECRETOS CON TRUFFLEHOG.",
      "placeholder": "# Integración de TruffleHog en GitHub Actions\nname: Escaneo de Secretos DevSecOps\n\non: [push, pull_request]\n\njobs:\n  trufflehog:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Descargar repositorio completo (con historial)\n        uses: actions/checkout@v4\n        with:\n          fetch-depth: 0 # TruffleHog necesita el historial completo para auditar\n\n      - name: Escaneo de Secretos con TruffleHog\n        uses: trufflesecurity/trufflehog@main\n        with:\n          path: ./\n          base: ${{ github.event.repository.default_branch }}\n          head: HEAD\n          extra_args: --only-verified # Solo reportar secretos cuya validez fue confirmada",
      "expectedKeywords": [
        "devsecops"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 15: DEVSECOPS: ANÁLISIS ESTÁTICO DE CÓDIGO (SAST) CON SEMGREP.",
      "placeholder": "# .github/workflows/sast.yml\nname: Auditoría SAST con Semgrep\n\non: [pull_request]\n\njobs:\n  semgrep:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Ejecutar Semgrep con reglas de OWASP Top 10\n        uses: returntocorp/semgrep-action@v1\n        with:\n          config: >-\n            p/security-audit\n            p/owasp-top-ten\n            p/typescript\n        env:\n          SEMGREP_RULES: p/owasp-top-ten",
      "expectedKeywords": [
        "devsecops"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 16: DEVSECOPS: ANÁLISIS DE COMPONENTES (SCA) CON TRIVY.",
      "placeholder": "# Ejecución de Trivy en GitHub Actions\nname: Auditoría SCA con Trivy\n\non: [push]\n\njobs:\n  trivy_sca:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Escanear dependencias npm en busca de CVEs\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: 'fs'\n          scan-ref: '.'\n          severity: 'CRITICAL,HIGH'\n          exit-code: '1' # Romper el build si hay vulnerabilidades críticas con parche",
      "expectedKeywords": [
        "devsecops"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 17: ESTRATEGIAS DE DESPLIEGUE CONTINUO: BLUE/GREEN Y CANARY.",
      "placeholder": "// Ejemplo conceptual: Enrutamiento Canary a nivel de Edge / Reverse Proxy\nexport function enrutarCanary(userId: string): 'version_estable' | 'version_canary' {\n  // Función hash determinista sobre el ID de usuario\n  const hash = Array.from(userId).reduce((acc, char) => acc + char.charCodeAt(0), 0);\n  const porcentaje = hash % 100;\n\n  // Enviar el 10% de los usuarios a la nueva versión Canary\n  if (porcentaje < 10) {\n    return 'version_canary';\n  }\n  return 'version_estable';\n}",
      "expectedKeywords": [
        "estrategias"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 18: DESPLIEGUE EN EL EDGE & SERVERLESS CON VERCEL.",
      "placeholder": "// Ejemplo: Edge Middleware en Vercel (middleware.ts)\n// Se ejecuta en el CDN de borde en < 5ms antes de llegar al servidor\nexport function middleware(request: Request) {\n  const url = new URL(request.url);\n\n  // Redirección de seguridad en el Edge\n  if (url.protocol === 'http:') {\n    return Response.redirect('https://' + url.host + url.pathname, 301);\n  }\n\n  // Inyección de Headers de Seguridad globales en el Edge\n  const response = new Response(null, {\n    headers: {\n      'X-Content-Type-Options': 'nosniff',\n      'X-Frame-Options': 'DENY',\n      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',\n    },\n  });\n\n  return response;\n}",
      "expectedKeywords": [
        "despliegue"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 19: INFRAESTRUCTURA COMO CÓDIGO (IAC) CON TERRAFORM.",
      "placeholder": "# main.tf: Declaración de Infraestructura en HCL\nterraform {\n  required_providers {\n    aws = {\n      source  = \"hashicorp/aws\"\n      version = \"~> 5.0\"\n    }\n  }\n}\n\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\n# Crear un bucket S3 seguro para almacenamiento de artefactos\nresource \"aws_s3_bucket\" \"artefactos_quimisell\" {\n  bucket = \"quimisell-build-artifacts-prod\"\n\n  tags = {\n    Ambiente   = \"Produccion\"\n    Gestionado = \"Terraform\"\n  }\n}\n\nresource \"aws_s3_bucket_versioning\" \"versionado\" {\n  bucket = aws_s3_bucket.artefactos_quimisell.id\n  versioning_configuration {\n    status = \"Enabled\"\n  }\n}",
      "expectedKeywords": [
        "infraestructura"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Aplica los comandos o configuraciones aprendidas en el MÓDULO 20: PROYECTO INTEGRADOR: PIPELINE CORPORATIVO DEVSECOPS COMPLETO.",
      "placeholder": "# Pipeline Completo de DevSecOps Corporativo (.github/workflows/devsecops-master.yml)\nname: Pipeline Corporativo DevSecOps QuimiSell\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  auditoria_seguridad:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n\n      - name: 1. Escaneo de Secretos (TruffleHog)\n        uses: trufflesecurity/trufflehog@main\n        with:\n          path: ./\n          head: HEAD\n\n      - name: 2. Análisis Estático SAST (Semgrep)\n        uses: returntocorp/semgrep-action@v1\n        with:\n          config: p/owasp-top-ten\n\n      - name: 3. Auditoría de Dependencias SCA (Trivy)\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: 'fs'\n          severity: 'CRITICAL,HIGH'\n\n  compilacion_y_despliegue:\n    needs: auditoria_seguridad # Solo si la seguridad está 100% limpia\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      - run: npm ci\n      - run: npx tsc --noEmit\n      - run: npm run build",
      "expectedKeywords": [
        "proyecto"
      ],
      "hint": "Revisa los conceptos del módulo y utiliza la sintaxis correcta de Git, Docker, Actions o Linux.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de Git & DevOps
GIT_DEVOPS_COURSE.modules.forEach((mod) => {
  if (GIT_DEVOPS_EXERCISES[mod.id]) {
    mod.exercises = GIT_DEVOPS_EXERCISES[mod.id];
  }
});
