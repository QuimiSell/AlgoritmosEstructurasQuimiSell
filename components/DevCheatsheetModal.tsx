import React, { useState, useMemo } from 'react';

interface DevCheatsheetModalProps {
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

interface CheatsheetItem {
  id: string;
  title: string;
  description: string;
  code: string;
  language: 'bash' | 'sql' | 'javascript' | 'typescript' | 'json';
  badge: string;
  category: string;
}

interface CheatsheetCategory {
  id: string;
  name: string;
  icon: (props: { className?: string }) => React.ReactElement;
  color: string;
  badgeColor: string;
  items: CheatsheetItem[];
}

/* =========================================================================
   VECTOR ICONS (SVG) - Alta definición y compatibilidad multiplataforma
   ========================================================================= */

const GitIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6" />
  </svg>
);

const TerminalIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const DockerIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4M2 13h20M2 13a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4" />
    <rect x="5" y="7" width="3" height="3" rx="0.5" />
    <rect x="10" y="7" width="3" height="3" rx="0.5" />
    <rect x="15" y="7" width="3" height="3" rx="0.5" />
    <rect x="10" y="3" width="3" height="3" rx="0.5" />
  </svg>
);

const DatabaseIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const BigOIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 17c2-6 5-10 12-11" />
    <circle cx="19" cy="6" r="2" />
  </svg>
);

const SecurityIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const NetworkIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="6" height="6" rx="1.5" />
    <rect x="16" y="2" width="6" height="6" rx="1.5" />
    <rect x="9" y="16" width="6" height="6" rx="1.5" />
    <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
    <path d="M12 13v3" />
  </svg>
);

const AIIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    <path d="m19 5 .8 1.7a1 1 0 0 0 .5.5L22 8l-1.7.8a1 1 0 0 0-.5.5L19 11l-.8-1.7a1 1 0 0 0-.5-.5L16 8l1.7-.8a1 1 0 0 0 .5-.5Z" />
  </svg>
);

const CopyIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ZapIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* =========================================================================
   CATEGORÍAS Y SNIPPETS PROFESIONALES DE PRODUCCIÓN
   ========================================================= */

const CATEGORIES: CheatsheetCategory[] = [
  {
    id: 'git',
    name: 'Git & DevOps',
    icon: GitIcon,
    color: 'from-purple-500 to-indigo-500',
    badgeColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 border-purple-200 dark:border-purple-800/80',
    items: [
      {
        id: 'git-rebase',
        title: 'Rebase Interactivo (Squash de commits)',
        description: 'Combina múltiples commits locales en uno solo limpio antes de abrir el Pull Request a producción.',
        code: '# Combina los últimos 3 commits\ngit rebase -i HEAD~3\n# En el editor interactivo cambia "pick" por "squash" (o "s")\ngit push origin mi-rama --force-with-lease',
        language: 'bash',
        badge: 'Git Pro',
        category: 'Git & DevOps',
      },
      {
        id: 'git-cherry-pick',
        title: 'Cherry-Pick (Rescatar un commit puntual)',
        description: 'Aplica un commit específico de otra rama en tu rama de trabajo sin arrastrar ramas completas.',
        code: 'git checkout main\ngit cherry-pick <hash-del-commit>',
        language: 'bash',
        badge: 'Rescate',
        category: 'Git & DevOps',
      },
      {
        id: 'git-reset-soft',
        title: 'Deshacer último commit sin perder cambios',
        description: 'Retrocede el commit conservando todas las modificaciones en el área de preparación (stage).',
        code: 'git reset --soft HEAD~1',
        language: 'bash',
        badge: 'Workflow',
        category: 'Git & DevOps',
      },
      {
        id: 'git-prune',
        title: 'Limpiar ramas remotas ya eliminadas',
        description: 'Poda y sincroniza el árbol local eliminando referencias obsoletas de ramas borradas en GitHub/GitLab.',
        code: 'git fetch -p && git remote prune origin',
        language: 'bash',
        badge: 'Mantenimiento',
        category: 'Git & DevOps',
      },
      {
        id: 'git-stash-name',
        title: 'Guardar cambios temporales con nombre (Stash)',
        description: 'Almacena el trabajo en curso con etiqueta descriptiva para cambiar de rama limpiamente.',
        code: '# Guardar con mensaje claro\ngit stash push -m "WIP: refactor de autenticacion"\n\n# Recuperar el stash guardado\ngit stash pop',
        language: 'bash',
        badge: 'Productividad',
        category: 'Git & DevOps',
      },
      {
        id: 'git-bisect',
        title: 'Localizar regresiones con Git Bisect',
        description: 'Búsqueda binaria automática a lo largo de la historia de commits para aislar el commit causante de un error.',
        code: 'git bisect start\ngit bisect bad                 # Commit actual tiene el bug\ngit bisect good v1.2.0         # Version previa conocida estable\n# Git seleccionará commits para probar; ejecuta tus tests y marca:\n# git bisect good / git bisect bad\ngit bisect reset               # Al finalizar',
        language: 'bash',
        badge: 'Depuración',
        category: 'Git & DevOps',
      },
    ],
  },
  {
    id: 'linux',
    name: 'Linux & Terminal Bash',
    icon: TerminalIcon,
    color: 'from-amber-500 to-yellow-600',
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800/80',
    items: [
      {
        id: 'linux-ports',
        title: 'Inspeccionar puertos y sockets activos',
        description: 'Identifica qué proceso está escuchando en un puerto específico y su PID para diagnóstico o terminación.',
        code: '# Ver puertos TCP/UDP a la escucha con PID\nsudo ss -tulpn | grep :3000\n\n# Alternativa mediante lsof\nsudo lsof -i :3000',
        language: 'bash',
        badge: 'SysAdmin',
        category: 'Linux & Terminal Bash',
      },
      {
        id: 'linux-logs',
        title: 'Filtrado de logs con awk, sort y uniq',
        description: 'Extrae las IPs con mayor volumen de solicitudes en un archivo de log de servidor web Nginx o Apache.',
        code: "cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 10",
        language: 'bash',
        badge: 'Análisis',
        category: 'Linux & Terminal Bash',
      },
      {
        id: 'linux-journalctl',
        title: 'Seguimiento de logs en vivo de Systemd',
        description: 'Visualiza la salida estándar y errores de un servicio en producción con scroll automático.',
        code: 'sudo journalctl -u mi-servicio.service -f -n 100 --no-pager',
        language: 'bash',
        badge: 'Monitoreo',
        category: 'Linux & Terminal Bash',
      },
      {
        id: 'linux-perms',
        title: 'Permisos Unix seguros en directorios web',
        description: 'Aplica permisos 755 a carpetas y 644 a archivos de manera recursiva sin romper ejecutables.',
        code: '# Carpetas: lectura/escritura/ejecución para dueño, lectura para resto\nfind /var/www/app -type d -exec chmod 755 {} +\n\n# Archivos: solo lectura para resto\nfind /var/www/app -type f -exec chmod 644 {} +',
        language: 'bash',
        badge: 'Seguridad',
        category: 'Linux & Terminal Bash',
      },
    ],
  },
  {
    id: 'docker',
    name: 'Docker & Contenedores',
    icon: DockerIcon,
    color: 'from-blue-500 to-cyan-600',
    badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 border-blue-200 dark:border-blue-800/80',
    items: [
      {
        id: 'docker-compose-up',
        title: 'Despliegue multi-servicio con reconstrucción',
        description: 'Inicia el stack de contenedores en segundo plano recreando imágenes si hubo cambios en el código.',
        code: 'docker compose up -d --build --remove-orphans',
        language: 'bash',
        badge: 'Despliegue',
        category: 'Docker & Contenedores',
      },
      {
        id: 'docker-exec',
        title: 'Entrar a la shell interactiva de un contenedor',
        description: 'Abre una sesión Bash o Sh dentro de un contenedor en ejecución para inspeccionar archivos y variables.',
        code: 'docker exec -it <nombre_o_id_del_contenedor> /bin/bash',
        language: 'bash',
        badge: 'Debugging',
        category: 'Docker & Contenedores',
      },
      {
        id: 'docker-prune',
        title: 'Limpieza profunda de espacio en disco',
        description: 'Elimina imágenes intermedias huérfanas, contenedores detenidos, redes sin uso y volúmenes dangling.',
        code: 'docker system prune -af --volumes',
        language: 'bash',
        badge: 'Optimización',
        category: 'Docker & Contenedores',
      },
      {
        id: 'docker-logs',
        title: 'Ver logs en vivo con marcas de tiempo',
        description: 'Transmite los últimos eventos de un contenedor con timestamps para correlación de incidentes.',
        code: 'docker logs -f --tail 100 -t <nombre_contenedor>',
        language: 'bash',
        badge: 'Operaciones',
        category: 'Docker & Contenedores',
      },
    ],
  },
  {
    id: 'bigo',
    name: 'Complejidad Big-O',
    icon: BigOIcon,
    color: 'from-amber-500 to-orange-500',
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800/80',
    items: [
      {
        id: 'bigo-binary-search',
        title: 'Búsqueda Binaria (Divide y Vencerás)',
        description: 'División del espacio de búsqueda a la mitad en cada paso. Requiere arreglo estrictamente ordenado.',
        code: '// Complejidad Temporal: O(log N) | Espacial: O(1)\nfunction binarySearch(arr: number[], target: number): number {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    const mid = (low + high) >> 1; // Bitwise división entre 2\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}',
        language: 'typescript',
        badge: 'O(log N)',
        category: 'Complejidad Big-O',
      },
      {
        id: 'bigo-hashmap',
        title: 'Tabla Hash (Acceso en tiempo constante)',
        description: 'Indexación mediante función hash con dispersión uniforme para amortizar el acceso a O(1).',
        code: '// Acceso promedio: O(1) amortizado | Peor caso: O(N) por colisiones extremas\nconst cache = new Map<string, number>();\ncache.set("clave_usuario", 42); // Inserción: O(1)\nconst valor = cache.get("clave_usuario"); // Búsqueda: O(1)\ncache.delete("clave_usuario"); // Borrado: O(1)',
        language: 'typescript',
        badge: 'O(1) Promedio',
        category: 'Complejidad Big-O',
      },
      {
        id: 'bigo-bfs',
        title: 'Recorrido en Anchura (BFS en Grafos)',
        description: 'Garantiza encontrar el camino más corto en grafos no ponderados usando una cola FIFO.',
        code: '// Temporal: O(V + E) | Espacial: O(V)\nfunction bfs(grafo: Record<string, string[]>, inicio: string) {\n  const visitados = new Set<string>([inicio]);\n  const cola: string[] = [inicio];\n  while (cola.length > 0) {\n    const nodo = cola.shift()!;\n    for (const vecino of grafo[nodo] || []) {\n      if (!visitados.has(vecino)) {\n        visitados.add(vecino);\n        cola.push(vecino);\n      }\n    }\n  }\n}',
        language: 'typescript',
        badge: 'O(V + E)',
        category: 'Complejidad Big-O',
      },
      {
        id: 'bigo-quicksort-mergesort',
        title: 'QuickSort vs MergeSort (Garantías)',
        description: 'Comparativa de partición in-place frente a garantía asintótica estable de fusión.',
        code: '// QuickSort: O(N log N) promedio, O(N²) peor caso. Espacio in-place O(log N).\n// MergeSort: O(N log N) garantizado (mejor, promedio y peor caso). Espacio O(N).\n// Regla: Usa MergeSort cuando la estabilidad importe (e.g. ordenamientos encadenados).',
        language: 'typescript',
        badge: 'O(N log N)',
        category: 'Complejidad Big-O',
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL & Bases de Datos',
    icon: DatabaseIcon,
    color: 'from-cyan-500 to-blue-500',
    badgeColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/80 border-cyan-200 dark:border-cyan-800/80',
    items: [
      {
        id: 'sql-explain',
        title: 'Diagnóstico de Consultas con EXPLAIN ANALYZE',
        description: 'Inspecciona tiempos reales de ejecución y uso de buffers de memoria (Seq Scan vs Index Scan).',
        code: 'EXPLAIN (ANALYZE, BUFFERS, COSTS OFF)\nSELECT u.id, u.email, COUNT(o.id) AS total_pedidos\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= NOW() - INTERVAL \'30 days\'\nGROUP BY u.id, u.email;\n-- Si observas "Seq Scan", añade un índice B-Tree en la columna filtrada',
        language: 'sql',
        badge: 'Optimización',
        category: 'SQL & Bases de Datos',
      },
      {
        id: 'sql-index-concurrent',
        title: 'Creación de Índice sin Bloqueos (CONCURRENTLY)',
        description: 'Crea un índice B-Tree en tablas grandes de producción sin bloquear lecturas ni escrituras concurrentes.',
        code: '-- Requiere PostgreSQL\nCREATE INDEX CONCURRENTLY idx_users_email_lower \nON users (LOWER(email));',
        language: 'sql',
        badge: 'Producción',
        category: 'SQL & Bases de Datos',
      },
      {
        id: 'sql-pgvector',
        title: 'Búsqueda por Similitud Coseno (pgvector / RAG)',
        description: 'Consulta de vecinos cercanos para embeddings de IA y búsqueda semántica de alta velocidad en PostgreSQL.',
        code: 'CREATE EXTENSION IF NOT EXISTS vector;\n\n-- Búsqueda de los 5 fragmentos más afines semánticamente al embedding $1\nSELECT id, chunk_text, 1 - (embedding <=> $1) AS similitud_coseno\nFROM articulos_embeddings\nORDER BY embedding <=> $1\nLIMIT 5;',
        language: 'sql',
        badge: 'IA & RAG',
        category: 'SQL & Bases de Datos',
      },
      {
        id: 'sql-transaction',
        title: 'Transacciones Seguras con Manejo de Errores',
        description: 'Garantiza consistencia ACID y aislamiento de lectura ante fallos en transferencias o compras.',
        code: 'BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;\n\nUPDATE cuentas SET saldo = saldo - 100 WHERE id = 1 AND saldo >= 100;\nUPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;\n\n-- Si ambas operaciones fueron exitosas\nCOMMIT;\n-- En caso de error o saldo insuficiente: ROLLBACK;',
        language: 'sql',
        badge: 'ACID',
        category: 'SQL & Bases de Datos',
      },
    ],
  },
  {
    id: 'security',
    name: 'Ciberseguridad & Kali',
    icon: SecurityIcon,
    color: 'from-rose-500 to-red-600',
    badgeColor: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800/80',
    items: [
      {
        id: 'sec-nmap',
        title: 'Escaneo TCP SYN Sigiloso con Detección (Nmap)',
        description: 'Envía paquetes TCP SYN sin completar el saludo de 3 vías para auditar puertos y versiones de servicios.',
        code: '# -sS: SYN Stealth | -sV: Versión de servicio | -sC: Scripts seguros NSE\nsudo nmap -sS -sV -sC -p- -T4 -oN reporte_red.txt 192.168.1.10',
        language: 'bash',
        badge: 'Auditoría',
        category: 'Ciberseguridad & Kali',
      },
      {
        id: 'sec-gobuster',
        title: 'Fuzzing de Directorios Web Ocultos (Gobuster)',
        description: 'Descubre endpoints ocultos, paneles de administración y archivos de configuración expuestos.',
        code: 'gobuster dir -u https://objetivo.local -w /usr/share/wordlists/dirb/common.txt -t 40 -x php,html,txt,json -b 404',
        language: 'bash',
        badge: 'Reconocimiento',
        category: 'Ciberseguridad & Kali',
      },
      {
        id: 'sec-openssl',
        title: 'Validación de Certificado TLS y Cifrado (OpenSSL)',
        description: 'Comprueba fechas de vencimiento, Subject Alternative Names (SAN) y protocolo TLS soportado.',
        code: 'openssl s_client -connect api.midominio.com:443 -servername api.midominio.com -tls1_3 < /dev/null 2>/dev/null | openssl x509 -noout -text | grep -E "Issuer|Not After|DNS:"',
        language: 'bash',
        badge: 'Criptografía',
        category: 'Ciberseguridad & Kali',
      },
      {
        id: 'sec-hydra',
        title: 'Auditoría de Credenciales por Fuerza Bruta (Hydra)',
        description: 'Prueba la robustez de contraseñas contra servicios SSH en laboratorios controlados y autorizados.',
        code: '# Solo para entornos autorizados y laboratorios éticos\nhydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.50 -t 4 -f -V',
        language: 'bash',
        badge: 'Pentesting Ético',
        category: 'Ciberseguridad & Kali',
      },
    ],
  },
  {
    id: 'network',
    name: 'Redes & Protocolos',
    icon: NetworkIcon,
    color: 'from-emerald-500 to-teal-500',
    badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/80',
    items: [
      {
        id: 'net-curl-timing',
        title: 'Telemetría de Latencia HTTP con cURL',
        description: 'Desglosa tiempos exactos de resolución DNS, handshake TCP, handshake TLS y Time to First Byte (TTFB).',
        code: "curl -w '\nDNS: %{time_namelookup}s\nTCP Handshake: %{time_connect}s\nTLS Handshake: %{time_appconnect}s\nTTFB: %{time_starttransfer}s\nTotal: %{time_total}s\nHTTP Status: %{http_code}\n' -so /dev/null https://api.ejemplo.com/v1/health",
        language: 'bash',
        badge: 'Telemetría',
        category: 'Redes & Protocolos',
      },
      {
        id: 'net-tcpdump',
        title: 'Captura de Paquetes en Vivo con Tcpdump',
        description: 'Filtra tráfico HTTP/HTTPS en la interfaz física y guarda el volcado PCAP para inspección con Wireshark.',
        code: "sudo tcpdump -i eth0 -nn -s0 -v 'tcp port 80 or tcp port 443' -w captura_trafico.pcap",
        language: 'bash',
        badge: 'Captura PCAP',
        category: 'Redes & Protocolos',
      },
      {
        id: 'net-netcat',
        title: 'Prueba de Conectividad de Sockets con Netcat',
        description: 'Verifica la disponibilidad de un puerto remoto sin levantar un navegador completo.',
        code: '# Escaneo rápido de sockets\nnc -zv 192.168.1.1 80 443 22\n\n# Obtener cabecera HTTP cruda del servidor\nnc 192.168.1.1 80\nHEAD / HTTP/1.1\nHost: servidor.local',
        language: 'bash',
        badge: 'Diagnóstico',
        category: 'Redes & Protocolos',
      },
      {
        id: 'net-dig',
        title: 'Diagnóstico DNS con Servidor Específico (dig)',
        description: 'Consulta directa a servidores DNS raíz (como Cloudflare 1.1.1.1 o Google 8.8.8.8) evitando caché local.',
        code: 'dig @1.1.1.1 midominio.com A +noall +answer +stats',
        language: 'bash',
        badge: 'DNS',
        category: 'Redes & Protocolos',
      },
    ],
  },
  {
    id: 'ai',
    name: 'IA, RAG & LLMs',
    icon: AIIcon,
    color: 'from-violet-500 to-fuchsia-600',
    badgeColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/80 border-violet-200 dark:border-violet-800/80',
    items: [
      {
        id: 'ai-chunking',
        title: 'Chunking Semántico de Texto con Solapamiento',
        description: 'Divide documentos largos en ventanas de tokens con overlap para no cortar el contexto semántico.',
        code: '// Pipeline estándar de ingestión para bases vectoriales\nfunction chunkText(text: string, chunkSize = 500, overlap = 50): string[] {\n  const words = text.split(/\\s+/);\n  const chunks: string[] = [];\n  for (let i = 0; i < words.length; i += (chunkSize - overlap)) {\n    chunks.push(words.slice(i, i + chunkSize).join(" "));\n  }\n  return chunks;\n}',
        language: 'typescript',
        badge: 'Ingestión RAG',
        category: 'IA, RAG & LLMs',
      },
      {
        id: 'ai-json-schema',
        title: 'Salida Estructurada Forzada (Structured Outputs)',
        description: 'Configuración para garantizar que el modelo de lenguaje responda estrictamente con un JSON validado.',
        code: 'const response = await fetch("https://api.openai.com/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },\n  body: JSON.stringify({\n    model: "gpt-4o-mini",\n    response_format: { type: "json_object" },\n    messages: [{ role: "system", content: "Responde únicamente en formato JSON con la clave `resultado`" }]\n  })\n});',
        language: 'typescript',
        badge: 'JSON Mode',
        category: 'IA, RAG & LLMs',
      },
      {
        id: 'ai-cosine',
        title: 'Cálculo de Similitud Coseno en JavaScript',
        description: 'Función pura en TypeScript para comparar dos vectores normalizados sin dependencias externas.',
        code: 'function cosineSimilarity(vecA: number[], vecB: number[]): number {\n  let dot = 0, normA = 0, normB = 0;\n  for (let i = 0; i < vecA.length; i++) {\n    dot += vecA[i] * vecB[i];\n    normA += vecA[i] * vecA[i];\n    normB += vecB[i] * vecB[i];\n  }\n  return dot / (Math.sqrt(normA) * Math.sqrt(normB));\n}',
        language: 'typescript',
        badge: 'Embeddings',
        category: 'IA, RAG & LLMs',
      },
    ],
  },
];

/* =========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================= */

export const DevCheatsheetModal: React.FC<DevCheatsheetModalProps> = ({
  onClose,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('git');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  const displayedItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentCategory.items;
    }
    const q = searchQuery.toLowerCase().trim();
    // Búsqueda transversal en todas las categorías
    return CATEGORIES.flatMap(c => c.items).filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }, [searchQuery, currentCategory]);

  const handleCopy = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      onShowToast('✓ Comando copiado al portapapeles');
      setTimeout(() => {
        setCopiedId(prev => (prev === id ? null : prev));
      }, 2000);
    } catch {
      onShowToast('Error al copiar al portapapeles');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl p-5 sm:p-7 max-h-[92vh] overflow-y-auto overscroll-contain text-slate-800 dark:text-slate-100 flex flex-col space-y-5">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/80">
                <ZapIcon className="w-3 h-3 text-indigo-500" />
                Quick Reference & Code
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {CATEGORIES.reduce((acc, c) => acc + c.items.length, 0)} snippets
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
              <TerminalIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0" />
              Guía Rápida de Comandos & Arquitectura
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Snippets, banderas de consola y algoritmos de nivel de producción listos para copiar y ejecutar en tus terminales y proyectos.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Input de Búsqueda Vectorial / Instantánea */}
        <div className="relative">
          <div className="absolute left-3.5 top-3 pointer-events-none text-slate-400">
            <SearchIcon className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por comando o concepto (ej: rebase, explain, nmap, pgvector, bisect)..."
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Borrar búsqueda"
              className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <CloseIcon className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Categorías con Iconos SVG Vectoriales */}
        {!searchQuery && (
          <div className="flex gap-2 overflow-x-auto pb-1.5 scroll-touch">
            {CATEGORIES.map(cat => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Lista de Snippets */}
        <div className="space-y-4">
          {displayedItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3 text-slate-400">
                <SearchIcon className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                No se encontraron snippets para "{searchQuery}"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Intenta buscar por término técnico como "rebase", "nmap", "explain", "docker" o "árbol".
              </p>
            </div>
          ) : (
            displayedItems.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-slate-50 dark:bg-slate-950/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
                        {item.badge}
                      </span>
                      {searchQuery && (
                        <span className="text-[10px] text-slate-400 font-mono">
                          ({item.category})
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopy(item.code, item.id)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-xs active:scale-95 transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                        isCopied
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ventana de Código / Terminal Estilizada */}
                  <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-inner">
                    <div className="flex items-center justify-between px-3.5 py-1.5 bg-slate-900 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="uppercase tracking-widest text-[9px] font-bold text-slate-400">
                        {item.language}
                      </span>
                    </div>
                    <pre className="p-3 sm:p-4 text-xs font-mono text-emerald-300 dark:text-emerald-400 overflow-x-auto scroll-touch leading-relaxed">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

export default DevCheatsheetModal;
