import { Course } from '../domain/models';

export const KALI_LINUX_COURSE: Course = {
  id: 'kali_linux',
  title: 'Kali Linux: Dominio de Comandos, Auditoría y Diagnóstico de Redes',
  shortTitle: 'Kali Linux & Nmap Pro',
  badge: 'Ciberseguridad Ofensiva & Diagnóstico',
  icon: '🐉',
  description: 'Programa exhaustivo de 20 módulos universitarios: desde el dominio del Kernel y la terminal Bash, pasando por sondeos stealth con Nmap, evasión de IDS, análisis de tráfico con Tcpdump, hasta auditoría web, pivoting y análisis forense.',
  whyStudyTitle: '🛡️ ¿Por qué dominar Kali Linux y Nmap a nivel profesional?',
  whyStudyText: 'Kali Linux es la distribución estándar de facto para pruebas de penetración, evaluación de vulnerabilidades y auditoría de infraestructuras críticas. Este curso profundiza en los mecanismos internos del sistema operativo Linux, la manipulación de flujos de paquetes TCP/IP, el comportamiento de banderas de red (SYN, ACK, RST, FIN), la automatización mediante Nmap Scripting Engine (NSE), técnicas de evasión de firewalls/IDS y la formulación de diagnósticos defensivos y éticos bajo estándares internacionales (PTES, NIST).',
  studyPlanReasons: [
    { id: 1, title: "Kernel Linux y FHS", why: "Comprensión del Filesystem Hierarchy Standard, flujos estándar y tuberías." },
    { id: 2, title: "Gestión de Procesos y Systemd", why: "Control de demonios de red, señales POSIX y ciclo de vida de servicios." },
    { id: 3, title: "Arquitectura TCP/IP y Rutas", why: "Diagnóstico de interfaces, tablas de enrutamiento y puertos de escucha." },
    { id: 4, title: "Nmap: Descubrimiento de Hosts", why: "Barridos ARP vs ICMP, sondas de capa 2/3 y optimización de latencia." },
    { id: 5, title: "Nmap: Escaneo de Puertos y TCP", why: "Análisis del Handshake TCP, SYN Stealth (-sS), Connect y escaneos RFC 793." },
    { id: 6, title: "Evasión de IDS y Timing", why: "Plantillas de temporización (-T0 a -T5), fragmentación MTU y señuelos (-D)." },
    { id: 7, title: "Nmap Scripting Engine (NSE)", why: "Automatización con scripts Lua, categorías auth/vuln/safe y detección de CVEs." },
    { id: 8, title: "OSINT y Reconocimiento Pasivo", why: "Consultas DNS recursivas/iterativas, transferencias de zona AXFR y metadatos." },
    { id: 9, title: "Inspección con Tcpdump y Tshark", why: "Captura de tramas en vivo, sintaxis de filtros BPF y análisis de archivos PCAP." },
    { id: 10, title: "Auditoría Web: Fuzzing de Rutas", why: "Enumeración de directorios con Gobuster/FFUF y códigos de respuesta HTTP." },
    { id: 11, title: "Auditoría Web: Análisis de Fallos", why: "Escaneo con Nikto, identificación de malas configuraciones y OWASP Top 10." },
    { id: 12, title: "Auditoría Inalámbrica 802.11", why: "Modo monitor, captura de tramas de gestión y análisis del 4-Way Handshake." },
    { id: 13, title: "Criptografía y Hashing", why: "Funciones hash unidireccionales, sales criptográficas y auditoría con Hashcat/John." },
    { id: 14, title: "Manipulación de Sockets con Netcat", why: "Banner grabbing, transferencia de datos TCP/UDP y retransmisión con Socat." },
    { id: 15, title: "Pivoting y Túneles SSH", why: "Port forwarding local (-L), remoto (-R), túneles SOCKS5 (-D) y Proxychains." },
    { id: 16, title: "Auditoría de Permisos y SUID", why: "Identificación de binarios con privilegios elevados, capabilities y GTFOBins." },
    { id: 17, title: "Forense Digital y Adquisición", why: "Cadena de custodia, copias bit a bit con dd/dc3dd y extracción de artefactos." },
    { id: 18, title: "Análisis de Logs y Detección SIEM", why: "Correlación de eventos en /var/log, análisis de accesos e intentos de intrusión." },
    { id: 19, title: "Hardening con IPTables y NFTables", why: "Filtrado con estado conntrack, políticas DROP por defecto y reglas perimetrales." },
    { id: 20, title: "Metodología PTES y Reporte CVSS", why: "Fases formales de pentesting, cálculo de severidad CVSS v3.1 y ética profesional." }
  ],
  labChallenge: {
    title: "Auditoría Integral de Red y Diagnóstico de Seguridad con Kali Linux",
    badge: "Laboratorio de Ciberseguridad Ofensiva & Diagnóstico",
    description: "Desarrolla una auditoría completa simulada sobre una red de laboratorio: ejecuta descubrimiento sigiloso de hosts, mapeo exhaustivo de puertos y servicios con Nmap, análisis de evasión de IDS, banner grabbing y elabora un informe técnico con categorización CVSS.",
    requirements: [
      "• Descubrimiento Sigiloso: Utilizar escaneo SYN stealth (-sS) con temporización controlada (-T3) y deshabilitación de ping (-Pn).",
      "• Evasión y Señuelos: Demostrar el uso de fragmentación MTU (-f) o señuelos (-D RND:5) en el mapeo de puertos.",
      "• Auditoría de Versiones: Ejecutar detección de versiones de servicio (-sV) y scripts seguros de auditoría (--script safe).",
      "• Reporte Técnico Formal: Documentar puertos abiertos, versiones exactas identificadas, posibles vectores de riesgo y mitigaciones recomendadas."
    ],
    cleanCodeRules: [
      "• Estricto Apego Ético: Todas las pruebas deben ejecutarse exclusivamente sobre entornos propios o expresamente autorizados.",
      "• Comandos Justificados: Cada comando ejecutado debe incluir una breve justificación técnica de los flags utilizados.",
      "• Formato de Entrega: Repositorio público de GitHub con scripts de automatización Bash y reporte Markdown."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Kali Linux & Nmap - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio de GitHub con la solución al Reto del Laboratorio de Kali Linux y Diagnóstico de Redes.\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nHerramientas y scripts utilizados:\n- Nmap (-sS, -sV, NSE)\n- Tcpdump / Tshark para captura de evidencias\n- Script Bash de automatización de auditoría\n\nResumen de hallazgos y puertos detectados:\n- \n\nSaludos cordiales.`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: KERNEL LINUX, ARQUITECTURA DE KALI Y ENTORNO BASH AVANZADO",
      description: "Estructura del Filesystem Hierarchy Standard (FHS), redirecciones de flujos estándar, tuberías avanzadas y gestión estricta de permisos.",
      items: [
        "El estándar FHS (/etc, /var/log, /proc, /sys, /usr/share/wordlists).",
        "Redirección de descriptores de archivo (stdin: 0, stdout: 1, stderr: 2, 2>&1).",
        "Encadenamiento de comandos y tuberías (pipes |, ;, &&, ||).",
        "Manipulación de texto con grep (regex), awk, sed y cut.",
        "Sistema de permisos Linux: representación octal, umask y atributos especiales."
      ],
      content: "Kali Linux está basado en Debian Testing y optimizado para análisis de seguridad y pruebas de penetración. Comprender su arquitectura comienza por el conocimiento profundo del árbol de directorios FHS: el directorio /proc no contiene archivos reales en disco, sino una interfaz en memoria al kernel que expone el estado de los procesos y parámetros de red en vivo; /var/log almacena la bitácora histórica de eventos; y /usr/share alberga colecciones indispensables como diccionarios (/usr/share/wordlists) y scripts de Nmap (/usr/share/nmap/scripts). Dominar los flujos estándar (stdin 0, stdout 1, stderr 2) permite redirigir errores a /dev/null mientras se filtran salidas críticas con herramientas de procesamiento de texto como awk y sed.",
      codeSnippet: `# 1. Búsqueda de archivos modificados en las últimas 24 horas excluyendo errores
find /var/log -type f -mtime -1 2>/dev/null

# 2. Filtrado de usuarios con shell interactiva (/bin/bash) desde /etc/passwd
awk -F: '$7 ~ /bash$/ { print "Usuario:", $1, "| UID:", $3, "| Home:", $6 }' /etc/passwd

# 3. Redirección de salida estándar y error a un archivo de registro
sudo apt update > /tmp/update_stdout.log 2> /tmp/update_error.log

# 4. Inspección de parámetros de red del kernel en vivo (IP Forwarding)
cat /proc/sys/net/ipv4/ip_forward

# 5. Cálculo y visualización de permisos octales de un archivo
stat -c "%a %n" /etc/shadow`,
      quiz: [
        {
          question: "¿Qué descriptor de archivo (file descriptor) representa el canal estándar de error (stderr) en sistemas Linux?",
          options: ["0", "1", "2", "3"],
          answerIndex: 2,
          explanation: "En los sistemas POSIX/Linux, los descriptores estándar son 0 para stdin (entrada), 1 para stdout (salida estándar) y 2 para stderr (canal de errores)."
        },
        {
          question: "¿Qué función cumple el sistema de archivos virtual /proc en Kali Linux?",
          options: [
            "Almacenar temporalmente los archivos descargados por apt",
            "Proveer una interfaz en memoria del Kernel que expone información de procesos y hardware en tiempo real",
            "Guardar los registros de auditoría y bitácoras del sistema de forma permanente",
            "Contener los ejecutables binarios de herramientas como Nmap y Metasploit"
          ],
          answerIndex: 1,
          explanation: "/proc es un pseudo-sistema de archivos generado dinámicamente por el kernel; no ocupa espacio en el disco duro físico y permite consultar/modificar parámetros del sistema en tiempo de ejecución."
        },
        {
          question: "Al ejecutar el comando \`comando > salida.txt 2>&1\`, ¿qué efecto tiene la directiva \`2>&1\`?",
          options: [
            "Duplica la velocidad de ejecución del comando",
            "Redirige el canal de error estándar (2) hacia el mismo destino que el canal de salida estándar (1)",
            "Envía la salida estándar a un archivo secundario llamado 2",
            "Cancela la ejecución si ocurre cualquier tipo de advertencia"
          ],
          answerIndex: 1,
          explanation: "La sintaxis \`2>&1\` redirige el descriptor 2 (stderr) hacia el descriptor 1 (stdout), permitiendo capturar en un solo archivo tanto la salida normal como los mensajes de error."
        },
        {
          question: "¿Qué permisos efectivos asigna la notación octal \`chmod 750 script.sh\`?",
          options: [
            "Propietario: rwx (7), Grupo: r-x (5), Otros: --- (0)",
            "Propietario: r-x (5), Grupo: rwx (7), Otros: r-- (4)",
            "Propietario: rw- (6), Grupo: r-x (5), Otros: r-x (5)",
            "Propietario: rwx (7), Grupo: rw- (6), Otros: --- (0)"
          ],
          answerIndex: 0,
          explanation: "El valor 7 representa r(4)+w(2)+x(1)=7 (lectura, escritura y ejecución); 5 representa r(4)+x(1)=5 (lectura y ejecución); 0 representa ningún permiso para otros usuarios."
        },
        {
          question: "¿Cuál es el propósito fundamental del comando \`find / -perm -4000 2>/dev/null\` en auditorías de seguridad en Linux?",
          options: [
            "Buscar archivos con un tamaño exacto de 4000 bytes",
            "Localizar todos los binarios que tienen activado el bit SUID (Set User ID) para ejecutarse con privilegios del propietario",
            "Eliminar registros corruptos en el directorio /var",
            "Reparar automáticamente los permisos de lectura de los usuarios no administradores"
          ],
          answerIndex: 1,
          explanation: "El bit 4000 corresponde al SUID. Localizar binarios SUID permite auditar programas que se ejecutan temporalmente con privilegios de root, lo cual es crítico para la seguridad y prevención de elevación de privilegios."
        }
      ],
      exercises: [
        {
          id: 101,
          instruction: "Escribe un comando en una sola línea que busque en '/etc/passwd' todas las líneas que contengan '/bin/bash' y redirija los errores a '/dev/null'.",
          placeholder: "grep ... /etc/passwd 2>/dev/null",
          expectedKeywords: ["grep", "/bin/bash", "/etc/passwd", "2>/dev/null"],
          hint: "Usa 'grep \"/bin/bash\" /etc/passwd 2>/dev/null'.",
          isEmailSubmission: false
        },
        {
          id: 102,
          instruction: "DESAFÍO FINAL: Escribe un comando para buscar todos los archivos con permisos SUID (permiso -4000) en el directorio raíz '/' silenciando los errores con '2>/dev/null'. Cópialo y envíalo para revisión.",
          placeholder: "find / ...",
          expectedKeywords: ["find", "/", "-perm", "4000", "2>/dev/null"],
          hint: "La sintaxis es 'find / -perm -4000 2>/dev/null'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: GESTIÓN DE PROCESOS, SEÑALES POSIX Y DEMONIOS SYSTEMD",
      description: "Administración de servicios con systemctl, análisis forense de procesos en ejecución (ps, top, lsof) y manejo de señales del sistema operativo.",
      items: [
        "Control de servicios y demonios de red (systemctl start, stop, enable, status).",
        "Inspección de procesos y árboles de ejecución (ps aux, pstree, htop).",
        "Señales POSIX fundamentales: SIGTERM (15), SIGKILL (9), SIGHUP (1) y SIGINT (2).",
        "Inspección de archivos y sockets abiertos por procesos mediante lsof y fuser.",
        "Monitoreo de logs centralizados del sistema mediante journalctl."
      ],
      content: "En Kali Linux, muchas herramientas operan como servicios en segundo plano (demonios), como PostgreSQL para la base de datos de Metasploit, el servidor OpenSSH o Apache2. La gestión moderna de servicios se realiza a través de systemd (\`systemctl\`). Para auditar el consumo y comportamiento de procesos, \`ps aux\` muestra el usuario ejecutor, el Process ID (PID), el porcentaje de CPU/Memoria y el comando exacto invocado. Cuando un proceso deja de responder o presenta anomalías, el administrador o auditor utiliza señales POSIX: \`kill -15\` (SIGTERM) solicita una terminación limpia permitiendo liberar recursos, mientras que \`kill -9\` (SIGKILL) fuerza la eliminación inmediata por parte del kernel sin posibilidad de captura.",
      codeSnippet: `# 1. Verificación del estado de servicios esenciales en Kali
sudo systemctl status ssh apache2 postgresql --no-pager

# 2. Filtrado de procesos que consumen más del 5% de memoria
ps aux --sort=-%mem | awk 'NR==1 || $4 > 5.0 {print $1, $2, $3, $4, $11}'

# 3. Identificación del proceso que está escuchando en un puerto específico (ej. puerto 80)
sudo lsof -i :80

# 4. Envío de señal de recarga de configuración (SIGHUP) a un demonio
sudo kill -HUP $(pgrep nginx)

# 5. Consulta de logs de un servicio específico en tiempo real con journalctl
sudo journalctl -u ssh -f -n 50`,
      quiz: [
        {
          question: "¿Cuál es la diferencia fundamental entre las señales POSIX \`SIGTERM (15)\` y \`SIGKILL (9)\`?",
          options: [
            "SIGTERM reinicia el sistema operativo, mientras que SIGKILL solo detiene un hilo",
            "SIGTERM solicita al proceso que cierre ordenadamente y puede ser capturada; SIGKILL termina el proceso de inmediato sin que este pueda interceptarla",
            "SIGKILL es enviada por el usuario y SIGTERM solo por el hardware",
            "No hay diferencia, ambas ejecutan la misma rutina del kernel"
          ],
          answerIndex: 1,
          explanation: "SIGTERM permite que la aplicación guarde su estado, cierre sockets y limpie buffers; SIGKILL es procesada directamente por el kernel y termina la ejecución sin permitir limpieza previa."
        },
        {
          question: "¿Qué comando habilita un servicio para que inicie automáticamente en cada arranque del sistema?",
          options: ["systemctl start <servicio>", "systemctl enable <servicio>", "systemctl reload <servicio>", "systemctl trigger <servicio>"],
          answerIndex: 1,
          explanation: "\`systemctl enable\` crea los enlaces simbólicos necesarios en los targets de systemd para que el demonio se inicie durante la secuencia de arranque."
        },
        {
          question: "¿Qué utilidad proporciona el comando \`lsof -i :443\` durante una auditoría?",
          options: [
            "Muestra el estado del firewall para el puerto 443",
            "Lista el proceso, usuario y PID que tienen abierto un socket en el puerto 443 (HTTPS)",
            "Genera un certificado TLS autofirmado",
            "Bloquea el tráfico en el puerto 443"
          ],
          answerIndex: 1,
          explanation: "\`lsof -i :puerto\` lista los descriptores de archivos de red abiertos correspondientes a ese puerto, permitiendo identificar al demonio responsable."
        },
        {
          question: "En la salida del comando \`ps aux\`, ¿qué indica el campo \`PID\`?",
          options: [
            "El identificador único de prioridad del hilo",
            "El Process ID (identificador numérico único asignado por el kernel al proceso)",
            "El porcentaje de uso de disco",
            "El protocolo de red asociado"
          ],
          answerIndex: 1,
          explanation: "PID significa Process Identifier; es un número entero único que el kernel asigna a cada proceso activo para su control y referencia."
        },
        {
          question: "¿Cuál es el comando adecuado para seguir los logs del servicio SSH en vivo mediante journalctl?",
          options: ["journalctl -u ssh -f", "journalctl --ssh --live", "journalctl -k ssh", "journalctl -d ssh -w"],
          answerIndex: 0,
          explanation: "El parámetro \`-u ssh\` filtra los registros de la unidad ssh, y el flag \`-f\` (follow) mantiene la salida abierta en tiempo real a medida que ingresan nuevos eventos."
        }
      ],
      exercises: [
        {
          id: 201,
          instruction: "Escribe el comando para verificar el estado del servicio 'postgresql' en Kali Linux utilizando 'systemctl'.",
          placeholder: "systemctl ... postgresql",
          expectedKeywords: ["systemctl", "status", "postgresql"],
          hint: "Usa 'systemctl status postgresql'.",
          isEmailSubmission: false
        },
        {
          id: 202,
          instruction: "DESAFÍO FINAL: Escribe el comando para listar qué proceso y PID tiene abierto el puerto de red 22 usando 'lsof'. Cópialo y envíalo para revisión.",
          placeholder: "lsof ...",
          expectedKeywords: ["lsof", "-i", "22"],
          hint: "La sintaxis es 'sudo lsof -i :22' o 'lsof -i :22'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: ARQUITECTURA DE REDES TCP/IP, INTERFACES Y DIAGNÓSTICO DE ENRUTAMIENTO",
      description: "Análisis del modelo TCP/IP, subredes CIDR, diagnóstico de sockets con 'ss', gestión de interfaces de red con 'ip' y resolución ARP.",
      items: [
        "Capas del modelo TCP/IP vs OSI y encapsulación de tramas/paquetes/segmentos.",
        "Comandos modernos de red: ip addr, ip route, ip link (reemplazo de ifconfig/route).",
        "Inspección avanzada de sockets con 'ss -tulpn' y filtrado de estados TCP.",
        "Mecanismo de resolución de direcciones de capa 2 (ARP) y tabla de vecinos con 'ip neigh'.",
        "Diagnóstico de conectividad, MTU, latencia y saltos con ping, traceroute y mtr."
      ],
      content: "Comprender la pila de protocolos TCP/IP es imperativo para cualquier profesional de seguridad. En la capa de enlace de datos (capa 2), las tramas utilizan direcciones MAC físicas; en la capa de red (capa 3), los datagramas IP manejan direccionamiento lógico y enrutamiento; y en la capa de transporte (capa 4), TCP y UDP asignan puertos de comunicación. En las versiones actuales de Kali Linux, las herramientas tradicionales de net-tools (ifconfig, netstat, route) han sido sustituidas por la suite \`iproute2\` (\`ip addr\`, \`ip route\`, \`ss\`). El comando \`ss -tulpn\` inspecciona los sockets abiertos en modo escucha (TCP y UDP), mostrando el PID exacto y la dirección de enlace.",
      codeSnippet: `# 1. Visualización de direcciones IP y estado de interfaces
ip -brief addr show

# 2. Listado de puertos TCP y UDP en escucha con sus respectivos procesos y PIDs
sudo ss -tulpn

# 3. Inspección de la tabla de enrutamiento por defecto del sistema
ip route show

# 4. Consulta de la tabla de resolución ARP (vecinos locales)
ip neigh show

# 5. Trazado de ruta con resolución de saltos y detección de latencia por salto
traceroute -n -T -p 443 1.1.1.1`,
      quiz: [
        {
          question: "¿Qué herramienta moderna del paquete iproute2 sustituye a \`netstat\` para listar puertos y conexiones?",
          options: ["ifconfig", "ss", "route", "iptables"],
          answerIndex: 1,
          explanation: "\`ss\` (Socket Statistics) es el reemplazo oficial y de alto rendimiento de \`netstat\`, capaz de volcar información de sockets directamente desde el kernel."
        },
        {
          question: "En el comando \`ss -tulpn\`, ¿qué función cumple la bandera \`-l\`?",
          options: [
            "Filtra únicamente sockets locales",
            "Muestra únicamente los sockets que están en estado LISTENING (a la escucha)",
            "Genera un archivo de log extendido",
            "Limita la salida a 10 conexiones"
          ],
          answerIndex: 1,
          explanation: "La bandera \`-l\` (listening) le indica a \`ss\` que ignore las conexiones ya establecidas y muestre exclusivamente los servicios a la espera de nuevas conexiones."
        },
        {
          question: "¿Qué información almacena la tabla ARP consultada mediante \`ip neigh\`?",
          options: [
            "La correspondencia entre nombres de dominio y direcciones IP públicas",
            "La correspondencia entre direcciones IP de capa 3 y direcciones MAC de capa 2 en el segmento local",
            "Las reglas activas del firewall de Linux",
            "Los certificados criptográficos de los servidores remotos"
          ],
          answerIndex: 1,
          explanation: "El protocolo ARP (Address Resolution Protocol) mapea direcciones lógicas IPv4 con las direcciones físicas MAC de los dispositivos en la misma red de difusión."
        },
        {
          question: "¿Cuántas direcciones IP utilizables para hosts proporciona una máscara de subred \`/24\` (255.255.255.0)?",
          options: ["256", "254", "128", "512"],
          answerIndex: 1,
          explanation: "Una subred /24 tiene 2^(32-24) = 256 direcciones totales; al restar la dirección de red (primera) y la dirección de broadcast (última), quedan 254 direcciones utilizables para hosts."
        },
        {
          question: "¿Qué protocolo de capa de transporte se caracteriza por ser orientado a la conexión y garantizar la entrega ordenada de paquetes mediante confirmaciones (ACK)?",
          options: ["UDP", "ICMP", "TCP", "IGMP"],
          answerIndex: 2,
          explanation: "TCP (Transmission Control Protocol) establece una conexión previa mediante un saludo de 3 vías, asigna números de secuencia y garantiza confiabilidad y retransmisión."
        }
      ],
      exercises: [
        {
          id: 301,
          instruction: "Escribe el comando con 'ss' para listar todos los sockets TCP a la escucha (-t, -l) mostrando números de puerto (-n).",
          placeholder: "ss ...",
          expectedKeywords: ["ss", "-t", "-l", "-n"],
          hint: "Usa 'ss -tln' o 'ss -t -l -n'.",
          isEmailSubmission: false
        },
        {
          id: 302,
          instruction: "DESAFÍO FINAL: Escribe el comando para mostrar la tabla de rutas IP en Linux usando la suite 'iproute2'. Cópialo y envíalo para revisión.",
          placeholder: "ip ...",
          expectedKeywords: ["ip", "route"],
          hint: "El comando es 'ip route' o 'ip route show'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: NMAP BÁSICO: DESCUBRIMIENTO DE HOSTS Y SONDEO DE RED LOCAL",
      description: "Técnicas de Ping Sweep, diferencias críticas entre sondas ARP e ICMP, resolución DNS inversa y optimización de latencia en auditorías.",
      items: [
        "Fundamentos de Nmap y fases de una auditoría de red.",
        "Descubrimiento de hosts activos mediante Ping Sweep (nmap -sn).",
        "Comportamiento de Nmap en red local (ARP Ping automático) vs redes remotas (ICMP + TCP).",
        "Control de resolución DNS: sondas rápidas con deshabilitación de DNS (-n) vs forzado (-R).",
        "Exportación de resultados a múltiples formatos: normal (-oN), grepable (-oG) y XML (-oX)."
      ],
      content: "Nmap (Network Mapper) es el estándar internacional para el mapeo y auditoría de redes. La primera fase de cualquier evaluación de infraestructura consiste en el descubrimiento de hosts vivos (Host Discovery). Al ejecutar un barrido \`nmap -sn\` en un segmento Ethernet local como usuario con privilegios de root, Nmap ignora los paquetes ICMP tradicionales y envía directamente solicitudes ARP Request: esto se debe a que ningún firewall basado en host en una red local puede bloquear una petición ARP sin perder conectividad física. Por el contrario, en redes enrutadas (remotas), Nmap combina ICMP Echo Request, ICMP Timestamp, TCP SYN al puerto 443 y TCP ACK al puerto 80. Para maximizar la velocidad, la bandera \`-n\` desactiva las consultas DNS inversas.",
      codeSnippet: `# 1. Barrido de hosts activos en una subred local sin escaneo de puertos (Ping Sweep)
sudo nmap -sn 192.168.1.0/24 -oN hosts_activos.txt

# 2. Descubrimiento rápido omitiendo resolución DNS inversa (-n) para máxima velocidad
sudo nmap -sn -n 10.10.10.0/24

# 3. Sondeo de descubrimiento utilizando paquetes TCP SYN a puertos específicos
sudo nmap -sn -PS22,80,443,8080 -n 192.168.1.0/24

# 4. Sondeo utilizando únicamente paquetes ICMP Echo Request
sudo nmap -sn -PE -n 172.16.0.0/16

# 5. Generación de salida en formato grepable (-oG) para procesar con awk
sudo nmap -sn 192.168.1.0/24 -oG ping_sweep.gnmap
awk '/Up$/{print $2}' ping_sweep.gnmap`,
      quiz: [
        {
          question: "¿Qué acción realiza Nmap cuando se ejecuta con el modificador \`-sn\`?",
          options: [
            "Ejecuta un escaneo sigiloso SYN en todos los puertos",
            "Realiza únicamente descubrimiento de hosts activos (Ping Sweep) sin realizar escaneo de puertos",
            "Deshabilita la captura de paquetes promiscuos",
            "Inyecta scripts NSE de explotación automática"
          ],
          answerIndex: 1,
          explanation: "\`-sn\` (anteriormente conocido como \`-sP\`) desactiva el escaneo de puertos posterior al descubrimiento de hosts, reportando únicamente cuáles máquinas están encendidas."
        },
        {
          question: "Cuando un usuario con privilegios root ejecuta \`nmap -sn\` contra una dirección en la misma subred local (capa 2), ¿qué tipo de sonda utiliza Nmap por defecto?",
          options: [
            "Sondas HTTP GET",
            "Peticiones ARP Requests directas",
            "Paquetes UDP al puerto 53",
            "Paquetes BGP"
          ],
          answerIndex: 1,
          explanation: "En la red local Ethernet, Nmap utiliza ARP por ser más rápido, confiable y no poder ser bloqueado por firewalls de software del sistema operativo del destino."
        },
        {
          question: "¿Por qué se recomienda emplear la opción \`-n\` en auditorías donde la velocidad es crítica?",
          options: [
            "Porque omite el escaneo del puerto 80",
            "Porque desactiva la resolución DNS inversa para cada IP analizada, reduciendo el tiempo total",
            "Porque cifra la comunicación con el objetivo",
            "Porque cambia la dirección MAC del atacante automáticamente"
          ],
          answerIndex: 1,
          explanation: "La resolución DNS inversa para cientos o miles de direcciones IP introduce latencias notables si los servidores DNS no responden rápido; \`-n\` evita estas consultas."
        },
        {
          question: "¿Qué formato de salida de Nmap está diseñado específicamente para ser filtrado mediante herramientas de línea de comandos como grep, awk y cut?",
          options: ["-oX (XML)", "-oG (Grepable)", "-oS (Script Kiddie)", "-oN (Normal)"],
          answerIndex: 1,
          explanation: "El formato \`-oG\` estructura cada host y sus hallazgos en una única línea de texto delimitada por tabulaciones y dos puntos, ideal para utilidades de procesamiento de texto."
        },
        {
          question: "¿Qué parámetro de Nmap le indica explícitamente que asuma que todos los hosts están activos y omita la fase de descubrimiento previo?",
          options: ["-Pn", "-sT", "-O", "-F"],
          answerIndex: 0,
          explanation: "\`-Pn\` (No Ping) desactiva el descubrimiento inicial y fuerza a Nmap a intentar el escaneo de puertos directamente en cada IP objetivo, útil cuando los firewalls bloquean las sondas de ping."
        }
      ],
      exercises: [
        {
          id: 401,
          instruction: "Escribe el comando de Nmap para realizar un ping sweep (-sn) en la red 192.168.1.0/24 deshabilitando la resolución DNS (-n).",
          placeholder: "nmap ... 192.168.1.0/24",
          expectedKeywords: ["nmap", "-sn", "-n", "192.168.1.0/24"],
          hint: "Usa 'nmap -sn -n 192.168.1.0/24'.",
          isEmailSubmission: false
        },
        {
          id: 402,
          instruction: "DESAFÍO FINAL: Escribe el comando de Nmap para escanear el host 10.10.10.5 asumiendo que está activo mediante '-Pn' y guardando la salida en formato normal '-oN scan.txt'. Cópialo y envíalo para revisión.",
          placeholder: "nmap ...",
          expectedKeywords: ["nmap", "-Pn", "-oN", "scan.txt", "10.10.10.5"],
          hint: "La sintaxis es 'nmap -Pn -oN scan.txt 10.10.10.5'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: NMAP AVANZADO I: TÉCNICAS DE ESCANEO DE PUERTOS Y ANÁLISIS DE PAQUETES TCP",
      description: "Estudio detallado del 3-Way Handshake, TCP SYN Stealth Scan (-sS), TCP Connect Scan (-sT), UDP Scan (-sU) y escaneos de banderas RFC 793 (FIN, Xmas, NULL).",
      items: [
        "El saludo de tres vías (SYN, SYN-ACK, ACK) y la respuesta RST (Reset).",
        "Mecanismo interno del TCP SYN Stealth Scan (-sS) y por qué requiere permisos de superusuario.",
        "TCP Connect Scan (-sT): funcionamiento en espacio de usuario y huella en logs de aplicación.",
        "Dificultades y comportamiento de los escaneos UDP (-sU): ICMP Port Unreachable tipo 3 código 3.",
        "Escaneos de banderas avanzadas RFC 793: NULL (-sN), FIN (-sF) y Xmas (-sX)."
      ],
      content: "Para entender la diferencia entre las modalidades de escaneo de puertos de Nmap, se debe analizar el intercambio de paquetes a nivel de socket. El escaneo por defecto de Nmap (cuando se ejecuta con privilegios de root) es el **TCP SYN Scan (\`-sS\`)**, denominado también escaneo 'semiabierto' o 'sigiloso': Nmap envía un paquete con la bandera SYN. Si el puerto está **abierto**, el objetivo responde con SYN-ACK; en ese instante, Nmap responde con un paquete RST (Reset) para derribar la conexión inmediatamente antes de que se complete el handshake de tres vías. Esto evita que la aplicación de nivel superior (como Apache o Nginx) registre una conexión establecida. Por el contrario, el **TCP Connect Scan (\`-sT\`)** invoca la llamada al sistema estándar \`connect()\`, completando el handshake entero y dejando un rastro evidente en los logs del servidor.",
      codeSnippet: `# 1. Escaneo TCP SYN Stealth a los 100 puertos más frecuentes
sudo nmap -sS -F 192.168.1.50

# 2. Escaneo completo de los 65535 puertos TCP con detección de versión y tiempo T4
sudo nmap -sS -p- -T4 -v 192.168.1.50

# 3. Escaneo TCP Connect (no requiere root, pero completa el handshake)
nmap -sT -p 21,22,80,443 192.168.1.50

# 4. Escaneo UDP dirigido a puertos críticos (DNS, SNMP, DHCP)
sudo nmap -sU -p 53,67,68,161 -sV 192.168.1.50

# 5. Escaneo Xmas (Flags FIN, PSH y URG activados simultáneamente bajo RFC 793)
sudo nmap -sX -p 80,445 192.168.1.50`,
      quiz: [
        {
          question: "¿Por qué el escaneo TCP SYN (\`-sS\`) es denominado escaneo 'semiabierto' (half-open)?",
          options: [
            "Porque solo escanea la mitad de los puertos disponibles",
            "Porque derriba la conexión con un paquete RST tras recibir el SYN-ACK, sin completar el 3-Way Handshake con el ACK final",
            "Porque requiere dos tarjetas de red trabajando en paralelo",
            "Porque únicamente analiza puertos pares"
          ],
          answerIndex: 1,
          explanation: "Al no enviar el paquete ACK final y responder con RST, la conexión nunca llega al estado ESTABLISHED en el stack TCP del destino, evitando que muchas aplicaciones registren el intento en su bitácora."
        },
        {
          question: "Si un puerto TCP está CERRADO y recibe un paquete SYN, ¿qué respuesta estándar devuelve el host objetivo bajo la especificación RFC 793?",
          options: ["Un paquete SYN-ACK", "Un paquete RST-ACK (Reset)", "Silencio total (Drop)", "Un paquete ICMP Echo Reply"],
          answerIndex: 1,
          explanation: "Un puerto cerrado responde inmediatamente con un paquete TCP con el flag RST (o RST-ACK) activo para notificar al emisor que rechaza la conexión."
        },
        {
          question: "¿Qué banderas TCP se encuentran encendidas en un paquete de escaneo Xmas (\`-sX\`)?",
          options: [
            "SYN, ACK, RST",
            "FIN, PSH (Push) y URG (Urgent)",
            "NULL (ninguna bandera)",
            "Solo ACK"
          ],
          answerIndex: 1,
          explanation: "El escaneo Xmas ('Árbol de Navidad') enciende las banderas FIN, PSH y URG. Según el RFC 793, cualquier paquete sin SYN/RST/ACK dirigido a un puerto cerrado debe responder con RST, mientras que los puertos abiertos ignoran el paquete."
        },
        {
          question: "¿Qué mensaje ICMP indica que un puerto UDP escaneado con \`-sU\` está cerrado?",
          options: [
            "ICMP Tipo 8 (Echo Request)",
            "ICMP Tipo 3 Código 3 (Destination Unreachable: Port Unreachable)",
            "ICMP Tipo 11 (Time Exceeded)",
            "ICMP Tipo 0 (Echo Reply)"
          ],
          answerIndex: 1,
          explanation: "Cuando un datagrama UDP llega a un puerto cerrado, el kernel del host destino responde con un mensaje ICMP Destination Unreachable con código 3 (Port Unreachable)."
        },
        {
          question: "¿Cuál es el rango total de puertos TCP/UDP posibles en un sistema operativo?",
          options: ["0 a 1024", "1 a 65535 (2^16 - 1)", "1 a 32768", "0 a 99999"],
          answerIndex: 1,
          explanation: "El campo de número de puerto en las cabeceras TCP y UDP tiene una longitud de 16 bits, lo que permite un total de 65,536 valores (del puerto 0 al 65535)."
        }
      ],
      exercises: [
        {
          id: 501,
          instruction: "Escribe el comando de Nmap para ejecutar un escaneo TCP SYN (-sS) en los puertos 80 y 443 del objetivo 192.168.1.100.",
          placeholder: "nmap ... 192.168.1.100",
          expectedKeywords: ["nmap", "-sS", "-p", "80,443", "192.168.1.100"],
          hint: "Usa 'nmap -sS -p 80,443 192.168.1.100' o 'sudo nmap -sS -p 80,443 192.168.1.100'.",
          isEmailSubmission: false
        },
        {
          id: 502,
          instruction: "DESAFÍO FINAL: Escribe el comando de Nmap para escanear los 65535 puertos completos (-p-) utilizando TCP Connect (-sT) sobre el objetivo 10.0.0.15. Cópialo y envíalo para revisión.",
          placeholder: "nmap ...",
          expectedKeywords: ["nmap", "-sT", "-p-", "10.0.0.15"],
          hint: "La sintaxis es 'nmap -sT -p- 10.0.0.15'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: NMAP AVANZADO II: EVASIÓN DE IDS/FIREWALLS, TEMPORIZACIÓN Y SEÑUELOS",
      description: "Plantillas de temporización (-T0 a -T5), fragmentación de paquetes MTU (-f), señuelos aleatorios (-D), falsificación de origen y evasión de firmas.",
      items: [
        "Las 6 plantillas de temporización de Nmap (-T0 Paranoid, -T1 Sneaky, -T2 Polite, -T3 Normal, -T4 Aggressive, -T5 Insane).",
        "Fragmentación de paquetes TCP/IP mediante -f y --mtu para evadir inspección de paquetes simples.",
        "Uso de señuelos (Decoys -D) con IPs falsas y aleatorias (RND) para ofuscar el origen real.",
        "Falsificación de puerto de origen (--source-port / -g 53) para burlar reglas de firewall mal configuradas.",
        "Modificación del tamaño de datos arbitrarios (--data-length) y MAC spoofing (--spoof-mac)."
      ],
      content: "Los Sistemas de Detección de Intrusos (IDS) y Firewalls modernos analizan patrones de tráfico para detectar y bloquear escaneos de red. Nmap proporciona mecanismos avanzados de temporización y evasión. Las plantillas de tiempo controlan el paralelismo y los tiempos de espera: **-T0 (Paranoid)** introduce pausas de hasta 5 minutos entre sondas para evadir umbrales de detección basados en frecuencia; mientras que **-T4 (Aggressive)** acelera el proceso para redes modernas y estables. Para ofuscar el origen, la opción de señuelos **\`-D\` (Decoys)** mezcla la dirección IP real del auditor con direcciones IP falsas, provocando que los logs del IDS del objetivo registren múltiples orígenes simultáneos y dificulten identificar al atacante real.",
      codeSnippet: `# 1. Escaneo sigiloso con temporización Sneaky (-T1) y deshabilitación de ping
sudo nmap -sS -T1 -Pn -p 22,80,443 192.168.1.50

# 2. Uso de señuelos aleatorios (-D RND:5,ME) para camuflar la IP de origen
sudo nmap -sS -D RND:5,ME -p 80,443 192.168.1.50

# 3. Fragmentación de paquetes en bloques de 8 bytes (-f) para evadir firewalls sin reensamblado
sudo nmap -sS -f -p 21,22,25,80 192.168.1.50

# 4. Falsificación del puerto de origen utilizando el puerto 53 (DNS) comúnmente permitido
sudo nmap -sS -g 53 -p 80,443 192.168.1.50

# 5. Adición de bytes de relleno aleatorios en el payload para alterar la firma del paquete
sudo nmap -sS --data-length 25 -p 80,443 192.168.1.50`,
      quiz: [
        {
          question: "¿Qué efecto tiene configurar la plantilla de temporización en \`-T0\` (Paranoid) en Nmap?",
          options: [
            "Multiplica por 10 el número de hilos concurrentes",
            "Envía una sonda cada 5 minutos aproximadamente en serie para evitar disparar alertas basadas en tasa de paquetes por segundo",
            "Bloquea la conexión en caso de detectar un IDS",
            "Cifra los paquetes usando túneles SSH"
          ],
          answerIndex: 1,
          explanation: "-T0 (Paranoid) espacia los paquetes con intervalos de hasta 5 minutos para pasar desapercibido ante sistemas IDS que detectan ráfagas de escaneo en ventanas de tiempo cortas."
        },
        {
          question: "¿Cómo funciona la técnica de señuelos (\`-D RND:5,ME\`) en Nmap?",
          options: [
            "Crea 5 interfaces de red virtuales en Kali",
            "Envía paquetes con 5 direcciones IP falsas generadas aleatoriamente además de la dirección IP real (ME), saturando los logs del objetivo",
            "Modifica la dirección MAC del switch local",
            "Realiza un ataque de denegación de servicio distribuido"
          ],
          answerIndex: 1,
          explanation: "El objetivo y los sistemas IDS reciben paquetes desde todas las IPs señuelo y desde la IP real, haciendo que parezca que todos esos hosts están escaneando la máquina a la vez."
        },
        {
          question: "¿Qué parámetro de Nmap permite fragmentar la cabecera IP en paquetes de 8 bytes para dificultar la inspección de filtros que no hacen reensamblado?",
          options: ["-f", "-sF", "-Pn", "--fast"],
          answerIndex: 0,
          explanation: "\`-f\` divide la cabecera TCP en pequeños fragmentos IP que se envían separados, dificultando que firewalls sin capacidad de inspección con estado (stateful inspection) lean las banderas."
        },
        {
          question: "¿Para qué sirve el parámetro \`--source-port 53\` (o \`-g 53\`)?",
          options: [
            "Para forzar que el host destino responda únicamente por el puerto 53",
            "Para enviar las sondas desde el puerto de origen 53, aprovechando reglas de firewall que permiten tráfico saliente de servidores DNS",
            "Para escanear el servicio DNS en el objetivo",
            "Para actualizar los servidores DNS de Kali Linux"
          ],
          answerIndex: 1,
          explanation: "Muchos firewalls legados permitían todo el tráfico cuyo puerto de origen fuera 53 (DNS) o 20 (FTP-Data); falsificar el puerto de origen permite atravesar esas reglas permisivas."
        },
        {
          question: "¿Qué parámetro permite inyectar bytes aleatorios adicionales en el payload para alterar su tamaño y firma fija?",
          options: ["--data-length <número>", "--randomize-hosts", "--badsum", "--packet-trace"],
          answerIndex: 0,
          explanation: "Por defecto, las sondas de Nmap tienen tamaños fijos y característicos; \`--data-length\` agrega bytes aleatorios de relleno al payload para alterar la firma del paquete."
        }
      ],
      exercises: [
        {
          id: 601,
          instruction: "Escribe el comando de Nmap para escanear el puerto 80 en 10.0.0.1 con temporización agresiva (-T4) y usando señuelos aleatorios (-D RND:3).",
          placeholder: "nmap ... 10.0.0.1",
          expectedKeywords: ["nmap", "-T4", "-D", "RND:3", "-p", "80", "10.0.0.1"],
          hint: "Usa 'nmap -T4 -D RND:3 -p 80 10.0.0.1'.",
          isEmailSubmission: false
        },
        {
          id: 602,
          instruction: "DESAFÍO FINAL: Escribe el comando de Nmap con fragmentación (-f) y puerto de origen 53 (-g 53) contra el puerto 443 de 192.168.1.200. Cópialo y envíalo para revisión.",
          placeholder: "nmap ...",
          expectedKeywords: ["nmap", "-f", "-g", "53", "-p", "443", "192.168.1.200"],
          hint: "La sintaxis es 'nmap -f -g 53 -p 443 192.168.1.200'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: NMAP SCRIPTING ENGINE (NSE): AUTOMATIZACIÓN Y DETECCIÓN DE VULNERABILIDADES",
      description: "Estructura del motor NSE escrito en Lua, categorías de scripts (safe, vuln, auth, discovery, default), paso de argumentos y detección de CVEs.",
      items: [
        "Arquitectura del Nmap Scripting Engine (NSE) ubicado en /usr/share/nmap/scripts/.",
        "Categorías de scripts de Nmap: default, safe, intrusive, vuln, auth, discovery, malware.",
        "Ejecución selectiva de scripts con expresiones lógicas (--script 'vuln and safe').",
        "Paso de credenciales y parámetros de configuración mediante --script-args.",
        "Actualización de la base de datos de scripts con 'nmap --script-updatedb'."
      ],
      content: "El **Nmap Scripting Engine (NSE)** es una de las características más potentes de Nmap, permitiendo automatizar una amplia variedad de tareas de red mediante scripts escritos en el lenguaje Lua. Los scripts están organizados por categorías según su nivel de intrusión: **\`safe\`** (scripts que no alteran el servicio ni causan caídas), **\`vuln\`** (scripts que verifican la presencia de vulnerabilidades conocidas y CVEs), **\`auth\`** (evaluación de mecanismos de autenticación) y **\`default\`** (ejecutados automáticamente al usar \`-sC\`). Utilizar el motor NSE de forma controlada permite auditar configuraciones débiles de TLS/SSL, recursos SMB compartidos sin autenticación o versiones vulnerables de servidores web sin recurrir a exploits destructivos.",
      codeSnippet: `# 1. Escaneo de versiones con scripts por defecto (-sC es equivalente a --script=default)
sudo nmap -sV -sC -p 21,22,80,443 192.168.1.50

# 2. Auditoría de vulnerabilidades conocidas utilizando la categoría vuln
sudo nmap -sV --script vuln -p 80,443,445 192.168.1.50

# 3. Combinación de categorías lógicas: scripts seguros que buscan vulnerabilidades
sudo nmap --script "vuln and safe" -p 80,443 192.168.1.50

# 4. Auditoría de cifrados TLS/SSL soportados en un servidor web
sudo nmap --script ssl-enum-ciphers -p 443 192.168.1.50

# 5. Enumeración de recursos compartidos SMB y usuarios con script específico
sudo nmap --script smb-enum-shares,smb-enum-users -p 445 192.168.1.50`,
      quiz: [
        {
          question: "¿En qué lenguaje de programación están escritos los scripts del motor Nmap Scripting Engine (NSE)?",
          options: ["Python", "Lua", "Bash", "C++"],
          answerIndex: 1,
          explanation: "Los scripts de Nmap utilizan el lenguaje ligero e incrustable Lua, optimizado para ejecutarse en paralelo dentro del núcleo de Nmap."
        },
        {
          question: "¿Qué categoría de scripts de NSE garantiza que las pruebas no saturarán el servicio ni provocarán una denegación de servicio accidental?",
          options: ["intrusive", "vuln", "safe", "exploit"],
          answerIndex: 2,
          explanation: "La categoría \`safe\` incluye scripts diseñados para no estresar el servicio objetivo ni explotar vulnerabilidades de forma que puedan causar caídas o corrupción de datos."
        },
        {
          question: "¿Qué atajo de teclado/flag de Nmap equivale a ejecutar \`--script=default\` junto con la detección estándar?",
          options: ["-sC", "-sD", "-sA", "-sN"],
          answerIndex: 0,
          explanation: "La opción \`-sC\` activa el conjunto de scripts básicos y seguros de la categoría \`default\` de Nmap."
        },
        {
          question: "¿Dónde residen físicamente los archivos de scripts \`.nse\` en una instalación estándar de Kali Linux?",
          options: [
            "/etc/nmap/scripts/",
            "/usr/share/nmap/scripts/",
            "/var/lib/nmap/scripts/",
            "/opt/nmap/bin/"
          ],
          answerIndex: 1,
          explanation: "Todos los scripts NSE se encuentran ubicados en el directorio \`/usr/share/nmap/scripts/\` en Kali Linux y sistemas Debian."
        },
        {
          question: "¿Cómo se pasan argumentos personalizados (por ejemplo, credenciales de usuario) a un script de Nmap?",
          options: ["--args-pass", "--script-args key=value", "--param key:value", "--with-config"],
          answerIndex: 1,
          explanation: "\`--script-args\` permite proporcionar pares clave=valor a los scripts en ejecución, como \`--script-args user=admin,pass=1234\`."
        }
      ],
      exercises: [
        {
          id: 701,
          instruction: "Escribe el comando de Nmap para escanear el puerto 443 de '10.0.0.1' ejecutando el script 'ssl-enum-ciphers'.",
          placeholder: "nmap --script ... -p 443 10.0.0.1",
          expectedKeywords: ["nmap", "--script", "ssl-enum-ciphers", "-p", "443", "10.0.0.1"],
          hint: "Usa 'nmap --script ssl-enum-ciphers -p 443 10.0.0.1'.",
          isEmailSubmission: false
        },
        {
          id: 702,
          instruction: "DESAFÍO FINAL: Escribe el comando de Nmap para ejecutar la categoría de scripts 'vuln' sobre el host 192.168.1.10 con detección de versión (-sV). Cópialo y envíalo para revisión.",
          placeholder: "nmap ...",
          expectedKeywords: ["nmap", "-sV", "--script", "vuln", "192.168.1.10"],
          hint: "La sintaxis es 'nmap -sV --script vuln 192.168.1.10'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: RECONOCIMIENTO PASIVO Y OSINT (DNS, WHOIS, THEHARVESTER Y METADATOS)",
      description: "Recolección de información sin interacción directa con el objetivo: registros DNS (A, MX, TXT, NS), transferencia de zona AXFR, WHOIS y análisis de metadatos con ExifTool.",
      items: [
        "Diferencia operativa entre reconocimiento pasivo (sin tocar el objetivo) y activo.",
        "Consultas DNS avanzadas con dig y host: registros SOA, MX, TXT (SPF/DMARC) y NS.",
        "Transferencia de zona DNS completa (AXFR con dig axfr @nameserver) y sus riesgos.",
        "Recolección automatizada de correos y subdominios con theHarvester.",
        "Extracción y eliminación forense de metadatos en documentos mediante exiftool."
      ],
      content: "El reconocimiento pasivo (Open Source Intelligence - OSINT) consiste en recolectar información pública sobre una organización sin enviar paquetes directos a sus servidores perimetrales, minimizando el riesgo de ser detectado o alertar a los equipos de defensa. Las consultas al Sistema de Nombres de Dominio (DNS) son fundamentales: herramientas como \`dig\` permiten interrogar registros MX (servidores de correo), registros TXT (donde residen políticas SPF y registros de verificación) y servidores de nombres (NS). Una falla crítica de configuración en servidores DNS es la **Transferencia de Zona DNS (AXFR)** no restringida: si un servidor DNS autoritativo permite AXFR a cualquier IP pública, un atacante o auditor puede descargar en segundos el mapa completo de todos los subdominios y registros internos de la organización.",
      codeSnippet: `# 1. Consulta de todos los registros DNS principales (ANY / MX / TXT) de un dominio
dig target.com ANY +noall +answer

# 2. Intento de transferencia de zona DNS completa (AXFR) contra un servidor de nombres
dig axfr @ns1.target.com target.com

# 3. Consulta de información de registro WHOIS del dominio
whois target.com | grep -E "Registrar|Creation Date|Name Server"

# 4. Recolección pasiva de correos y subdominios con theHarvester
theHarvester -d target.com -b crtsh,bing -l 200

# 5. Extracción forense de metadatos de un archivo PDF con ExifTool
exiftool documento_confidencial.pdf`,
      quiz: [
        {
          question: "¿En qué consiste una transferencia de zona DNS (AXFR)?",
          options: [
            "Un ataque de denegación de servicio que satura el puerto 53",
            "Un mecanismo del protocolo DNS para sincronizar toda la base de datos de registros entre servidores de nombres, que si no está restringido expone todos los subdominios",
            "Un método para cambiar la titularidad de un dominio en el registrador",
            "Una consulta cifrada mediante DNS over HTTPS (DoH)"
          ],
          answerIndex: 1,
          explanation: "AXFR permite replicar zonas DNS entre servidores primarios y secundarios. Si se deja abierta a consultas de cualquier IP, un tercero puede obtener la lista completa de hosts y subdominios."
        },
        {
          question: "¿Qué comando de \`dig\` solicita una transferencia de zona al servidor \`ns1.ejemplo.com\` para el dominio \`ejemplo.com\`?",
          options: [
            "dig axfr @ns1.ejemplo.com ejemplo.com",
            "dig --zone-transfer ejemplo.com",
            "dig -t TRANSFER ns1.ejemplo.com",
            "dig ping ns1.ejemplo.com"
          ],
          answerIndex: 0,
          explanation: "La sintaxis \`dig axfr @<servidor_DNS> <dominio>\` solicita la copia completa de la zona DNS al servidor especificado."
        },
        {
          question: "¿Qué tipo de registro DNS se utiliza comúnmente para almacenar registros de autenticación de correo como SPF, DKIM y DMARC?",
          options: ["Registro A", "Registro TXT", "Registro CNAME", "Registro PTR"],
          answerIndex: 1,
          explanation: "Los registros TXT (texto) permiten almacenar cadenas legibles por humanos y máquinas, empleadas por protocolos de seguridad de correo como SPF, DKIM y DMARC."
        },
        {
          question: "¿Qué herramienta de línea de comandos en Kali Linux permite examinar y extraer metadatos de imágenes, documentos PDF y archivos ofimáticos?",
          options: ["exiftool", "nmap", "netcat", "airmon-ng"],
          answerIndex: 0,
          explanation: "ExifTool es una potente utilidad para leer, escribir y manipular metadatos en una inmensa variedad de formatos de archivo (PDF, JPG, DOCX, etc.)."
        },
        {
          question: "¿Cuál es la principal ventaja del reconocimiento pasivo frente al activo?",
          options: [
            "Descarga el código fuente de los servidores web automáticamente",
            "No genera tráfico directo contra la infraestructura del objetivo, evitando ser detectado por firewalls o SIEMs",
            "Garantiza el compromiso de las contraseñas",
            "Requiere siempre permisos de superusuario en Kali"
          ],
          answerIndex: 1,
          explanation: "Al consultar bases de datos públicas (WHOIS, crt.sh, motores de búsqueda, DNS públicos), el objetivo nunca recibe paquetes desde la IP del auditor."
        }
      ],
      exercises: [
        {
          id: 801,
          instruction: "Escribe el comando 'dig' para consultar los servidores de correo (registro MX) del dominio 'ejemplo.com'.",
          placeholder: "dig ... ejemplo.com MX",
          expectedKeywords: ["dig", "ejemplo.com", "MX"],
          hint: "Usa 'dig ejemplo.com MX'.",
          isEmailSubmission: false
        },
        {
          id: 802,
          instruction: "DESAFÍO FINAL: Escribe el comando para extraer todos los metadatos del archivo 'informe.pdf' usando 'exiftool'. Cópialo y envíalo para revisión.",
          placeholder: "exiftool ...",
          expectedKeywords: ["exiftool", "informe.pdf"],
          hint: "El comando es 'exiftool informe.pdf'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: ANÁLISIS E INSPECCIÓN DE TRÁFICO (WIRESHARK, TSHARK Y TCPDUMP CON FILTROS BPF)",
      description: "Captura de paquetes en terminal con Tcpdump, sintaxis de filtros Berkeley Packet Filters (BPF), análisis automatizado con Tshark y disección de archivos PCAP.",
      items: [
        "Fundamentos de la captura de tramas y modo promiscuo en interfaces de red.",
        "Uso de tcpdump: captura en vivo, escritura (-w) y lectura (-r) de archivos PCAP.",
        "Sintaxis de filtros BPF (Berkeley Packet Filters): hosts, puertos, protocolos y operadores lógicos.",
        "Análisis no interactivo y extracción de campos de protocolo con tshark (-T fields -e).",
        "Inspección de anomalías en flujos HTTP y solicitudes DNS sin cifrar."
      ],
      content: "La inspección de tráfico de red a bajo nivel es una habilidad indispensable tanto para analistas de seguridad defensiva (SOC/Blue Team) como para evaluadores de seguridad. Mientras que Wireshark ofrece una interfaz gráfica, en servidores o entornos remotos Kali Linux se apoya en **\`tcpdump\`** y **\`tshark\`**. Tcpdump utiliza **filtros BPF (Berkeley Packet Filters)** aplicados en el kernel para descartar el tráfico irrelevante antes de que llegue al espacio de usuario, optimizando el rendimiento. Un filtro BPF como \`'tcp and port 80 and (tcp[tcpflags] & tcp-syn != 0)'\` permite capturar con precisión quirúrgica únicamente los paquetes de inicio de conexión HTTP.",
      codeSnippet: `# 1. Captura de tráfico en la interfaz eth0 guardando en archivo capture.pcap
sudo tcpdump -i eth0 -nn -s0 -w /tmp/capture.pcap

# 2. Captura filtrada con BPF: solo tráfico TCP al puerto 80 o 443 omitiendo resolución
sudo tcpdump -i eth0 -nn 'tcp port 80 or tcp port 443'

# 3. Captura específica de paquetes TCP SYN (establecimiento de conexiones)
sudo tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0 and tcp[tcpflags] & tcp-ack == 0'

# 4. Lectura de un archivo PCAP con tcpdump mostrando el contenido ASCII (-A)
tcpdump -r /tmp/capture.pcap -A 'port 80' | head -n 30

# 5. Extracción de consultas DNS con tshark en formato estructurado
tshark -r /tmp/capture.pcap -Y "dns.flags.response == 0" -T fields -e ip.src -e dns.qry.name`,
      quiz: [
        {
          question: "¿Qué es un filtro BPF (Berkeley Packet Filter) en el contexto de tcpdump?",
          options: [
            "Un plugin de cifrado para conexiones VPN",
            "Un mecanismo que compila reglas de filtrado y las ejecuta en el espacio del kernel para capturar solo los paquetes que coinciden con los criterios",
            "Un protocolo de enrutamiento dinámico",
            "Un tipo de firewall por hardware"
          ],
          answerIndex: 1,
          explanation: "Los filtros BPF se evalúan directamente en el subsistema de red del kernel, evitando la sobrecarga de transferir paquetes no deseados a la aplicación de usuario."
        },
        {
          question: "¿Qué bandera de \`tcpdump\` desactiva la resolución tanto de nombres de host como de números de puerto para acelerar la captura?",
          options: ["-nn", "-q", "-v", "-s"],
          answerIndex: 0,
          explanation: "\`-n\` no resuelve nombres de host (muestra IPs) y \`-nn\` desactiva adicionalmente la resolución de nombres de puertos (muestra números exactos como 80 en lugar de 'http')."
        },
        {
          question: "¿Qué comando de \`tcpdump\` guarda los paquetes capturados en un archivo binario \`.pcap\` para su posterior análisis?",
          options: ["tcpdump -w archivo.pcap", "tcpdump -s archivo.pcap", "tcpdump > archivo.pcap", "tcpdump -o archivo.pcap"],
          answerIndex: 0,
          explanation: "La bandera \`-w\` (write) escribe el flujo de paquetes en formato estándar libpcap/pcap."
        },
        {
          question: "¿Cuál es la versión de línea de comandos de Wireshark disponible en Kali Linux para scripts y automatizaciones?",
          options: ["tshark", "nmap-cli", "airmon-ng", "ettercap-nogui"],
          answerIndex: 0,
          explanation: "Tshark es el analizador de protocolos de red por línea de comandos perteneciente al proyecto Wireshark, capaz de aplicar filtros de visualización y extraer campos específicos."
        },
        {
          question: "¿Qué filtro BPF captura exclusivamente el tráfico dirigido o proveniente de la dirección IP 192.168.1.50 en el puerto 22?",
          options: [
            "host 192.168.1.50 and port 22",
            "ip == 192.168.1.50 && tcp.port == 22",
            "filter: 192.168.1.50:22",
            "tcpdump --ip 192.168.1.50 --port 22"
          ],
          answerIndex: 0,
          explanation: "La sintaxis BPF estándar de tcpdump utiliza primitivas como \`host <ip> and port <puerto>\`."
        }
      ],
      exercises: [
        {
          id: 901,
          instruction: "Escribe el comando de tcpdump para capturar en la interfaz 'eth0' sin resolver nombres (-nn) escuchando solo en el puerto 53.",
          placeholder: "tcpdump -i eth0 ... port 53",
          expectedKeywords: ["tcpdump", "-i", "eth0", "-nn", "port", "53"],
          hint: "Usa 'sudo tcpdump -i eth0 -nn port 53' o 'tcpdump -i eth0 -nn port 53'.",
          isEmailSubmission: false
        },
        {
          id: 902,
          instruction: "DESAFÍO FINAL: Escribe el comando de tcpdump para leer el archivo 'trafico.pcap' (-r) filtrando únicamente paquetes TCP. Cópialo y envíalo para revisión.",
          placeholder: "tcpdump -r ...",
          expectedKeywords: ["tcpdump", "-r", "trafico.pcap", "tcp"],
          hint: "La sintaxis es 'tcpdump -r trafico.pcap tcp'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: AUDITORÍA WEB I: ENUMERACIÓN DE DIRECTORIOS, SUBDOMINIOS Y FUZZING",
      description: "Descubrimiento de endpoints ocultos y recursos no indexados mediante Gobuster, FFuF, análisis de códigos de respuesta HTTP y wordlists especializadas.",
      items: [
        "El principio de fuzzing web y fuerza bruta sobre rutas y endpoints HTTP.",
        "Uso de Gobuster (gobuster dir) para enumeración recursiva y concurrente.",
        "Fuzzing avanzado de parámetros, cabeceras y rutas con FFuF (Fast Web Fuzzer).",
        "Estructura de códigos de estado HTTP (200 OK, 301/302 Redirect, 401/403 Forbidden, 500 Error).",
        "Ubicación y selección de wordlists en Kali Linux (/usr/share/wordlists/dirb, SecLists)."
      ],
      content: "Las aplicaciones web a menudo contienen rutas, paneles de administración, respaldos o archivos de configuración que no están enlazados en el menú principal ni indexados por motores de búsqueda. La enumeración de contenido web o **fuzzing de directorios** consiste en enviar miles de peticiones HTTP probando nombres comunes a partir de diccionarios (**wordlists**). Herramientas como **Gobuster** (escrita en Go para alta concurrencia) y **FFuF** envían peticiones paralelas y analizan el código de respuesta HTTP devuelto por el servidor: un código \`200\` confirma la existencia del recurso, \`301/302\` indica redirección, \`403\` revela que el recurso existe pero tiene acceso restringido, y \`404\` señala que no fue encontrado.",
      codeSnippet: `# 1. Enumeración básica de directorios con Gobuster
gobuster dir -u http://192.168.1.50 -w /usr/share/wordlists/dirb/common.txt

# 2. Búsqueda con extensiones específicas (.php, .html, .txt, .bak) y 40 hilos concurrentes
gobuster dir -u http://192.168.1.50 -w /usr/share/wordlists/dirb/common.txt -x php,html,txt,bak -t 40

# 3. Fuzzing de directorios con FFuF filtrando respuestas por código de estado
ffuf -u http://192.168.1.50/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -mc 200,301,302,403

# 4. Fuzzing de parámetros GET en una URL para descubrir vulnerabilidades de inyección
ffuf -u "http://192.168.1.50/perfil.php?FUZZ=1" -w /usr/share/wordlists/wfuzz/general/common.txt -fs 1420

# 5. Enumeración de subdominios virtuales (Virtual Hosts / VHosts)
gobuster vhost -u http://target.com -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt --append-domain`,
      quiz: [
        {
          question: "¿Qué código de estado HTTP indica que un recurso existe en el servidor pero el cliente no tiene autorización para acceder a él?",
          options: ["200 OK", "404 Not Found", "403 Forbidden", "502 Bad Gateway"],
          answerIndex: 2,
          explanation: "El código 403 Forbidden indica que el servidor comprendió la solicitud pero se rehúsa a autorizar el acceso; confirma la existencia del recurso bajo una restricción de permisos."
        },
        {
          question: "En Gobuster, ¿qué parámetro permite especificar extensiones de archivo a buscar (por ejemplo php, txt)?",
          options: ["-x", "-e", "-ext", "-f"],
          answerIndex: 0,
          explanation: "El modificador \`-x\` (extensions) permite definir una lista separada por comas de extensiones que Gobuster añadirá a cada palabra de la wordlist."
        },
        {
          question: "¿Qué palabra clave utiliza FFuF en la URL para indicar la posición donde se insertará cada entrada del diccionario?",
          options: ["TARGET", "FUZZ", "PARAM", "INJECT"],
          answerIndex: 1,
          explanation: "Por defecto, FFuF utiliza el marcador de posición \`FUZZ\` en cualquier punto de la URL, cabecera o cuerpo de la petición para inyectar las cadenas de la wordlist."
        },
        {
          question: "¿Dónde se encuentra la colección estándar de diccionarios instalada por defecto en Kali Linux?",
          options: ["/var/wordlists/", "/usr/share/wordlists/", "/opt/dictionaries/", "/etc/security/wordlists/"],
          answerIndex: 1,
          explanation: "En Kali Linux, todos los diccionarios (dirb, dirbuster, rockyou, SecLists, etc.) se concentran en \`/usr/share/wordlists/\`."
        },
        {
          question: "¿Qué diferencia a la enumeración de VHosts (Virtual Hosts) de la enumeración clásica de subdominios DNS?",
          options: [
            "La enumeración de VHosts envía cabeceras \`Host: subdominio.dominio.com\` directamente a una misma dirección IP para identificar sitios virtuales alojados en el mismo servidor web",
            "Requiere reiniciar el servidor DNS",
            "Solo funciona sobre puertos UDP",
            "Es un ataque puramente físico"
          ],
          answerIndex: 0,
          explanation: "La enumeración de VHosts manipula la cabecera HTTP \`Host\` enviada al servidor web para descubrir sitios que comparten la misma IP y no están publicados en DNS públicos."
        }
      ],
      exercises: [
        {
          id: 1001,
          instruction: "Escribe el comando de Gobuster para enumerar directorios en 'http://10.10.10.20' usando la wordlist '/usr/share/wordlists/dirb/common.txt'.",
          placeholder: "gobuster dir -u ... -w ...",
          expectedKeywords: ["gobuster", "dir", "-u", "http://10.10.10.20", "-w", "/usr/share/wordlists/dirb/common.txt"],
          hint: "Usa 'gobuster dir -u http://10.10.10.20 -w /usr/share/wordlists/dirb/common.txt'.",
          isEmailSubmission: false
        },
        {
          id: 1002,
          instruction: "DESAFÍO FINAL: Escribe el comando de FFuF para fuzzear la ruta 'http://192.168.1.10/FUZZ' con la wordlist '/usr/share/wordlists/dirb/common.txt'. Cópialo y envíalo para revisión.",
          placeholder: "ffuf -u ... -w ...",
          expectedKeywords: ["ffuf", "-u", "http://192.168.1.10/FUZZ", "-w", "/usr/share/wordlists/dirb/common.txt"],
          hint: "La sintaxis es 'ffuf -u http://192.168.1.10/FUZZ -w /usr/share/wordlists/dirb/common.txt'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 11,
      title: "MÓDULO 11: AUDITORÍA WEB II: ANÁLISIS DE VULNERABILIDADES (NIKTO, OWASP TOP 10 Y CABECERAS)",
      description: "Escaneo automatizado de vulnerabilidades con Nikto, identificación de archivos peligrosos, diagnóstico de cabeceras de seguridad y principios del OWASP Top 10.",
      items: [
        "Escaneo de servidores web con Nikto: detección de software obsoleto y archivos sensibles.",
        "Diagnóstico de cabeceras HTTP de seguridad (Content-Security-Policy, HSTS, X-Frame-Options).",
        "Fundamentos del OWASP Top 10 (SQL Injection, XSS, Broken Access Control, Security Misconfiguration).",
        "Identificación de atributos seguros en cookies de sesión (HttpOnly, Secure, SameSite).",
        "Generación y exportación de reportes de auditoría web en formatos HTML/XML."
      ],
      content: "La evaluación de la postura de seguridad de un servidor web requiere verificar no solo los puertos abiertos, sino las configuraciones de la aplicación y la presencia de vulnerabilidades conocidas. **Nikto** es un escáner Open Source especializado en servidores web que realiza pruebas contra más de 6,700 archivos potencialmente peligrosos, programas desactualizados y problemas de configuración específicos del servidor (como Apache, Nginx o IIS). Al mismo tiempo, una auditoría rigurosa evalúa las **cabeceras de seguridad HTTP**: la ausencia de \`Strict-Transport-Security\` (HSTS) permite ataques de degradación a HTTP sin cifrar; la falta de \`X-Frame-Options\` expone a la aplicación a Clickjacking; y las cookies sin la bandera \`HttpOnly\` son vulnerables a robo mediante Cross-Site Scripting (XSS).",
      codeSnippet: `# 1. Escaneo web completo con Nikto sobre un objetivo HTTP
nikto -h http://192.168.1.50

# 2. Escaneo sobre puerto HTTPS específico guardando el reporte en formato HTML
nikto -h https://192.168.1.50:8443 -ssl -output /tmp/nikto_report.html -Format htm

# 3. Inspección manual de cabeceras HTTP de respuesta con curl
curl -I -s https://target.com | grep -E -i "strict-transport|x-frame|content-security|set-cookie"

# 4. Verificación de métodos HTTP inseguros habilitados (PUT, DELETE, TRACE)
curl -X OPTIONS -I http://192.168.1.50

# 5. Escaneo de Nikto afinado por categoría (Tuning: 1=Archivos interesantes, 2=Inyecciones)
nikto -h http://192.168.1.50 -Tuning 1,2,b`,
      quiz: [
        {
          question: "¿Qué riesgo previene la implementación de la bandera \`HttpOnly\` en una cookie de sesión?",
          options: [
            "Evita que la cookie viaje a través de conexiones HTTPS",
            "Impide que scripts del lado del cliente (JavaScript) lean la cookie, mitigando el robo de sesión mediante ataques XSS",
            "Cifra automáticamente la base de datos",
            "Bloquea los ataques de fuerza bruta en el login"
          ],
          answerIndex: 1,
          explanation: "\`HttpOnly\` prohíbe que \`document.cookie\` en JavaScript tenga acceso a la cookie, de modo que si un atacante consigue ejecutar un XSS, no podrá extraer la cookie de sesión directamente."
        },
        {
          question: "¿Qué herramienta tradicional de Kali Linux está diseñada específicamente para escanear servidores web en busca de archivos peligrosos, CGIs obsoletos y problemas de configuración?",
          options: ["Nikto", "Aircrack-ng", "John the Ripper", "Hydra"],
          answerIndex: 0,
          explanation: "Nikto es un escáner de vulnerabilidades de servidores web de referencia que busca miles de archivos riesgosos y configuraciones inseguras."
        },
        {
          question: "¿Qué cabecera HTTP de seguridad previene que un sitio web sea incrustado dentro de un \`<iframe>\` de un dominio externo, protegiendo contra Clickjacking?",
          options: ["X-Frame-Options", "Access-Control-Allow-Origin", "Server", "X-Powered-By"],
          answerIndex: 0,
          explanation: "\`X-Frame-Options: DENY\` o \`SAMEORIGIN\` indica al navegador que no debe permitir que la página sea renderizada en un marco o iframe, neutralizando el Clickjacking."
        },
        {
          question: "¿A qué categoría del OWASP Top 10 pertenece la falla cuando un usuario puede ver los datos de otro usuario cambiando el ID en la URL (\`/cuenta?id=102\` a \`id=103\`) sin validación de permisos?",
          options: [
            "Broken Access Control (Control de Acceso Roto / IDOR)",
            "Cryptographic Failures",
            "Server-Side Request Forgery (SSRF)",
            "Security Logging Failures"
          ],
          answerIndex: 0,
          explanation: "Insecure Direct Object References (IDOR) es una manifestación directa de Broken Access Control, donde el servidor confía en la entrada del usuario sin verificar la autorización."
        },
        {
          question: "¿Qué comando de curl permite solicitar únicamente las cabeceras HTTP de respuesta de un servidor?",
          options: ["curl -I <url>", "curl -d <url>", "curl -X POST <url>", "curl -u <url>"],
          answerIndex: 0,
          explanation: "El parámetro \`-I\` (o \`--head\`) envía una petición HTTP HEAD al servidor, solicitando únicamente las cabeceras de respuesta sin descargar el cuerpo HTML."
        }
      ],
      exercises: [
        {
          id: 1101,
          instruction: "Escribe el comando de Nikto para escanear el host 'http://192.168.1.100'.",
          placeholder: "nikto -h ...",
          expectedKeywords: ["nikto", "-h", "http://192.168.1.100"],
          hint: "Usa 'nikto -h http://192.168.1.100'.",
          isEmailSubmission: false
        },
        {
          id: 1102,
          instruction: "DESAFÍO FINAL: Escribe el comando con 'curl' para obtener solo las cabeceras HTTP (-I) de 'http://10.10.10.50'. Cópialo y envíalo para revisión.",
          placeholder: "curl -I ...",
          expectedKeywords: ["curl", "-I", "http://10.10.10.50"],
          hint: "La sintaxis es 'curl -I http://10.10.10.50'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 12,
      title: "MÓDULO 12: DIAGNÓSTICO Y AUDITORÍA DE REDES INALÁMBRICAS 802.11 (AIRCRACK-NG SUITE)",
      description: "Modos de interfaz WiFi (Managed vs Monitor), captura de tramas de gestión con Airodump-ng, análisis del 4-Way Handshake WPA2/WPA3 y fundamentos EAPOL.",
      items: [
        "Arquitectura del estándar IEEE 802.11: canales de 2.4 GHz vs 5 GHz, SSIDs y BSSIDs.",
        "Habilitación y gestión del modo Monitor mediante 'airmon-ng' y eliminación de procesos conflictivos.",
        "Captura y filtrado de tramas inalámbricas (Beacon, Probe, Data) con airodump-ng.",
        "El intercambio de 4 vías (4-Way Handshake EAPOL) en WPA2-PSK: ANonce, SNonce, MIC.",
        "Diferencias de seguridad entre WPA2 (PSK) y WPA3 (SAE - Simultaneous Authentication of Equals)."
      ],
      content: "Las redes inalámbricas transmiten tramas de radiofrecuencia a través del medio abierto. Para auditar una red 802.11, la tarjeta de red debe colocarse en **Modo Monitor (RFMON)**: a diferencia del modo cliente tradicional ('Managed'), el modo monitor permite a la tarjeta capturar todas las tramas que circulan por el canal de radio sin necesidad de estar asociada a un punto de acceso. La suite **Aircrack-ng** es el conjunto estándar de herramientas en Kali Linux. El proceso de auditoría de WPA2-PSK se basa en capturar el **4-Way Handshake EAPOL**: un intercambio de cuatro mensajes criptográficos que derivan la clave temporal de sesión (PTK) sin transmitir jamás la contraseña en texto claro. En WPA3, este protocolo fue reemplazado por SAE (Dragonfly handshake) para prevenir ataques de diccionario fuera de línea.",
      codeSnippet: `# 1. Detección y terminación de procesos que interfieren con el modo monitor
sudo airmon-ng check kill

# 2. Habilitación del modo monitor en la interfaz inalámbrica wlan0
sudo airmon-ng start wlan0

# 3. Escaneo general de redes WiFi en el entorno (muestra BSSID, Canal, Cifrado, Señal)
sudo airodump-ng wlan0mon

# 4. Captura enfocada en un BSSID y canal específico para capturar el 4-Way Handshake
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w /tmp/wpa_capture wlan0mon

# 5. Verificación de si el archivo de captura contiene un 4-Way Handshake válido
aircrack-ng /tmp/wpa_capture-01.cap`,
      quiz: [
        {
          question: "¿Qué diferencia al 'Modo Monitor' del modo 'Managed' (administrado) en una interfaz inalámbrica?",
          options: [
            "El modo monitor duplica la potencia de la antena",
            "El modo monitor permite escuchar y capturar todas las tramas de radiofrecuencia en el canal sin necesidad de asociarse a un punto de acceso",
            "El modo monitor solo permite conectar a redes WPA3",
            "El modo monitor bloquea la señal de los vecinos"
          ],
          answerIndex: 1,
          explanation: "En modo Managed la tarjeta solo procesa tramas dirigidas a su propia MAC; en modo Monitor captura todas las tramas que circulan en el espectro del canal sintonizado."
        },
        {
          question: "¿Qué comando de la suite Aircrack-ng se utiliza para detener servicios del sistema (como NetworkManager o wpa_supplicant) que interfieren con la captura?",
          options: ["airmon-ng check kill", "airodump-ng --stop-all", "aireplay-ng --kill", "aircrack-ng clean"],
          answerIndex: 0,
          explanation: "\`airmon-ng check kill\` identifica y termina los procesos en segundo plano que compiten por el control de la tarjeta inalámbrica."
        },
        {
          question: "¿Qué protocolo de intercambio criptográfico de 4 mensajes se utiliza en WPA2-PSK para autenticar clientes y derivar claves de cifrado de sesión?",
          options: ["4-Way Handshake EAPOL", "TLS Handshake", "Diffie-Hellman Key Exchange", "ARP Handshake"],
          answerIndex: 0,
          explanation: "El 4-Way Handshake de EAPOL (Extensible Authentication Protocol over LAN) permite a cliente y AP demostrar posesión de la PSK y calcular las claves de cifrado temporal (PTK)."
        },
        {
          question: "¿Cuál es la principal mejora de seguridad de WPA3 frente a WPA2 contra ataques de diccionario fuera de línea?",
          options: [
            "El uso de contraseñas de longitud obligatoria de 64 caracteres",
            "El protocolo SAE (Simultaneous Authentication of Equals) que impide probar contraseñas offline a partir de capturas pasivas",
            "La eliminación del cifrado AES",
            "El uso obligatorio de certificados en tarjetas SIM"
          ],
          answerIndex: 1,
          explanation: "WPA3 utiliza SAE (basado en el intercambio Dragonfly), el cual proporciona 'Forward Secrecy' y neutraliza los ataques de diccionario pasivos fuera de línea."
        },
        {
          question: "¿Qué identificador único de 48 bits representa la dirección MAC del Punto de Acceso (AP) en las tramas 802.11?",
          options: ["SSID", "BSSID", "ESSID", "Channel ID"],
          answerIndex: 1,
          explanation: "El BSSID (Basic Service Set Identifier) corresponde a la dirección MAC física del transmisor de radio del Punto de Acceso."
        }
      ],
      exercises: [
        {
          id: 1201,
          instruction: "Escribe el comando de airmon-ng para matar los procesos conflictivos antes de iniciar el modo monitor.",
          placeholder: "airmon-ng ...",
          expectedKeywords: ["airmon-ng", "check", "kill"],
          hint: "Usa 'airmon-ng check kill' o 'sudo airmon-ng check kill'.",
          isEmailSubmission: false
        },
        {
          id: 1202,
          instruction: "DESAFÍO FINAL: Escribe el comando de airmon-ng para iniciar el modo monitor en la interfaz 'wlan0'. Cópialo y envíalo para revisión.",
          placeholder: "airmon-ng start ...",
          expectedKeywords: ["airmon-ng", "start", "wlan0"],
          hint: "La sintaxis es 'sudo airmon-ng start wlan0' o 'airmon-ng start wlan0'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 13,
      title: "MÓDULO 13: CRIPTOGRAFÍA PRÁCTICA, HASHING Y ANÁLISIS DE CREDENCIALES (HASHCAT & JOHN)",
      description: "Funciones hash unidireccionales (MD5, SHA-256, NTLM, bcrypt), identificación de algoritmos, ataques basados en diccionarios y reglas de mutación.",
      items: [
        "Propiedades de las funciones hash criptográficas: unidireccionalidad y resistencia a colisiones.",
        "Identificación de tipos de hash con hash-identifier y hashID.",
        "Estructura del archivo de contraseñas de Linux (/etc/shadow) y algoritmos ($6$ SHA-512, $y$ yescrypt).",
        "Auditoría de contraseñas con John the Ripper (john) y reglas de permutación (--rules).",
        "Aceleración por GPU y modos de ataque con Hashcat (-m mode, -a attack_mode)."
      ],
      content: "Las funciones hash criptográficas son algoritmos matemáticos deterministas y unidireccionales: transforman una entrada de longitud arbitraria en un resumen de longitud fija (digest), siendo computacionalmente inviable revertir el proceso para obtener el texto original. En auditorías de seguridad, los analistas evalúan la fortaleza de las políticas de contraseñas mediante pruebas de recuperación de hashes. **John the Ripper** y **Hashcat** son las herramientas insignia para este propósito. Mientras que John destaca por su facilidad en entornos CPU y el parseo automático de formatos como \`/etc/shadow\`, Hashcat aprovecha el procesamiento masivamente paralelo de tarjetas gráficas (GPUs con OpenCL/CUDA), permitiendo evaluar millones de combinaciones por segundo contra hashes NTLM, SHA-256 o Kerberos.",
      codeSnippet: `# 1. Identificación automática del algoritmo de un hash desconocido
hashid "5d41402abc4b2a76b9719d911017c592"

# 2. Descompresión del diccionario maestro RockYou en Kali Linux
sudo gzip -d /usr/share/wordlists/rockyou.txt.gz

# 3. Auditoría de un hash con John the Ripper utilizando una wordlist
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# 4. Mostrar las contraseñas recuperadas por John the Ripper
john --show hashes.txt

# 5. Auditoría con Hashcat utilizando GPU para hashes NTLM (Modo 1000) con diccionario
hashcat -m 1000 -a 0 ntlm_hashes.txt /usr/share/wordlists/rockyou.txt -O`,
      quiz: [
        {
          question: "¿Cuál es la propiedad fundamental de una función hash criptográfica?",
          options: [
            "Debe ser fácilmente reversible conociendo la clave privada",
            "Es unidireccional (fácil de calcular en un sentido, computacionalmente inviable de revertir) y determinista",
            "Genera salidas de longitud variable dependiendo del tamaño de entrada",
            "Solo funciona sobre números enteros pares"
          ],
          answerIndex: 1,
          explanation: "Una función hash criptográfica no es un cifrado (no tiene clave de descifrado); su propósito es generar un resumen digital único e irreversible para verificar integridad."
        },
        {
          question: "En el archivo \`/etc/shadow\` de Linux, ¿qué indica el prefijo \`$6$\` al inicio del campo del hash de la contraseña?",
          options: ["Hash MD5", "Hash SHA-256", "Hash SHA-512 con sal (salt)", "Hash DES clásico"],
          answerIndex: 2,
          explanation: "En la convención crypt de Unix/Linux: \`$1$\` es MD5, \`$5$\` es SHA-256, \`$6$\` es SHA-512, \`$y$\` es yescrypt y \`$2a$\` es bcrypt."
        },
        {
          question: "¿Para qué sirve añadir un valor 'Sal' (Salt) aleatorio a una contraseña antes de calcular su hash?",
          options: [
            "Para aumentar la velocidad de cálculo del servidor",
            "Para evitar que dos contraseñas idénticas produzcan el mismo hash y neutralizar ataques mediante tablas precalculadas (Rainbow Tables)",
            "Para permitir descifrar la contraseña si el usuario la olvida",
            "Para reducir el consumo de memoria RAM"
          ],
          answerIndex: 1,
          explanation: "La sal garantiza que cada hash sea único incluso si múltiples usuarios usan la misma contraseña ('password123'), obligando a un atacante a calcular hashes individualmente."
        },
        {
          question: "En Hashcat, ¿qué modo de ataque (\`-a\`) corresponde al ataque clásico basado en diccionario (Wordlist)?",
          options: ["-a 0", "-a 1", "-a 3", "-a 6"],
          answerIndex: 0,
          explanation: "En Hashcat: \`-a 0\` es ataque de diccionario directo, \`-a 1\` combinación, \`-a 3\` fuerza bruta/máscara y \`-a 6\` híbrido diccionario + máscara."
        },
        {
          question: "¿Qué herramienta especializada en Kali Linux permite ingresar un hash en texto y determinar qué algoritmo probable lo generó?",
          options: ["hashid / hash-identifier", "nmap", "tcpdump", "netcat"],
          answerIndex: 0,
          explanation: "\`hashid\` y \`hash-identifier\` analizan la longitud de caracteres, codificación (hexadecimal, base64) y prefijos para listar los algoritmos compatibles."
        }
      ],
      exercises: [
        {
          id: 1301,
          instruction: "Escribe el comando de John the Ripper para auditar el archivo 'hashes.txt' usando el diccionario '/usr/share/wordlists/rockyou.txt'.",
          placeholder: "john --wordlist=... hashes.txt",
          expectedKeywords: ["john", "--wordlist", "/usr/share/wordlists/rockyou.txt", "hashes.txt"],
          hint: "Usa 'john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt'.",
          isEmailSubmission: false
        },
        {
          id: 1302,
          instruction: "DESAFÍO FINAL: Escribe el comando de Hashcat para atacar un hash NTLM (-m 1000) en modo diccionario (-a 0) con el archivo 'hashes.txt' y la wordlist 'rockyou.txt'. Cópialo y envíalo para revisión.",
          placeholder: "hashcat -m 1000 ...",
          expectedKeywords: ["hashcat", "-m", "1000", "-a", "0", "hashes.txt", "rockyou.txt"],
          hint: "La sintaxis es 'hashcat -m 1000 -a 0 hashes.txt rockyou.txt'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 14,
      title: "MÓDULO 14: TRANSFERENCIA DE ARCHIVOS, SERVIDORES EFÍMEROS Y MANIPULACIÓN DE SOCKETS (NETCAT & SOCAT)",
      description: "La 'navaja suiza' de redes Netcat (nc), banner grabbing manual, transferencia de datos TCP/UDP, servidores web efímeros en Python y retransmisión con Socat.",
      items: [
        "Fundamentos de Netcat (nc): modo cliente, modo escucha (-l), verbosidad (-v) y puertos numéricos (-n).",
        "Banner Grabbing manual sobre servicios HTTP, FTP y SMTP para identificar versiones.",
        "Transferencia de archivos y respaldos directos a través de tuberías y sockets de red.",
        "Creación de servidores HTTP efímeros en Kali para entrega de herramientas (python3 -m http.server).",
        "Retransmisión bidireccional y proxy de sockets con Socat (Socket Cat)."
      ],
      content: "Conocida como la 'navaja suiza de TCP/IP', **Netcat (\`nc\`)** es una de las utilidades más versátiles en Linux para leer y escribir datos a través de conexiones de red utilizando los protocolos TCP o UDP. En auditorías de infraestructura, Netcat se emplea para **Banner Grabbing**: conectarse directamente al puerto de un servicio (como el puerto 21 de FTP o 25 de SMTP) e interactuar con él mediante comandos en texto claro para capturar el encabezado que revela el software y la versión exacta en ejecución. Asimismo, Netcat permite transferir archivos entre máquinas conectando la salida estándar (\`stdout\`) a un socket, y su sucesor avanzado, **Socat**, amplía estas capacidades permitiendo reenvío de puertos y encapsulación SSL/TLS bidireccional.",
      codeSnippet: `# 1. Banner grabbing manual en un servidor web HTTP
nc -vn 192.168.1.50 80
# (Escribir manualmente: HEAD / HTTP/1.0 y presionar Enter dos veces)

# 2. Apertura de un socket a la escucha en el puerto 4444 para recibir datos
nc -lvnp 4444 > archivo_recibido.bin

# 3. Envío de un archivo hacia el socket en escucha
nc -vn 192.168.1.10 4444 < archivo_origen.bin

# 4. Servidor HTTP efímero en Python 3 para servir archivos en el puerto 8000
python3 -m http.server 8000 --directory /tmp/tools

# 5. Redirección de puertos con Socat: retransmite tráfico del puerto 8080 al servidor 192.168.1.100:80
socat TCP-LISTEN:8080,fork,reuseaddr TCP:192.168.1.100:80`,
      quiz: [
        {
          question: "¿Qué combinación de parámetros en Netcat inicia un socket en modo escucha en el puerto TCP 4444 sin resolver DNS y con salida detallada?",
          options: ["nc -lvnp 4444", "nc -c 4444", "nc --listen --silent 4444", "nc -connect 4444"],
          answerIndex: 0,
          explanation: "\`-l\` (listen), \`-v\` (verbose), \`-n\` (numeric, sin DNS) y \`-p 4444\` (port) es la combinación estándar para levantar un receptor en Netcat."
        },
        {
          question: "¿Qué es el 'Banner Grabbing' en el contexto de auditorías de red?",
          options: [
            "La descarga del logotipo gráfico del sitio web",
            "La técnica de conectarse a un puerto abierto para capturar el mensaje inicial de bienvenida o cabecera que expone el nombre y versión del servicio",
            "Un ataque para bloquear anuncios en un navegador",
            "La modificación de la pantalla de bloqueo de Linux"
          ],
          answerIndex: 1,
          explanation: "Muchos servicios de red (SSH, FTP, SMTP, Apache) emiten un 'banner' al establecer la conexión TCP que revela datos técnicos precisos de su versión."
        },
        {
          question: "¿Cuál es el comando estándar en Kali Linux para levantar instantáneamente un servidor web HTTP en el puerto 8080?",
          options: [
            "python3 -m http.server 8080",
            "systemctl start http",
            "apache2 --quick 8080",
            "nc --http 8080"
          ],
          answerIndex: 0,
          explanation: "El módulo integrado \`http.server\` de Python 3 crea un servidor web estático funcional al instante en el directorio de trabajo actual."
        },
        {
          question: "¿Qué ventaja fundamental ofrece \`socat\` frente a la versión clásica de \`netcat\`?",
          options: [
            "Solo funciona sobre interfaces inalámbricas",
            "Permite conectar prácticamente cualquier tipo de flujo de datos (sockets TCP, UDP, SSL, descriptores de archivos, pseudo-terminales TTY) y bifurcar conexiones concurrentes con 'fork'",
            "Descarga exploits automáticamente desde la nube",
            "No requiere permisos de usuario"
          ],
          answerIndex: 1,
          explanation: "Socat ('SOcket CAT') es una herramienta multipropósito que admite túneles bidireccionales complejos, cifrado SSL nativo y soporte para múltiples clientes mediante la opción \`fork\`."
        },
        {
          question: "¿Cómo se redirige la entrada de un archivo hacia un socket de Netcat para transferirlo por la red?",
          options: [
            "nc -vn <ip> <puerto> < archivo.tar.gz",
            "nc -transfer archivo.tar.gz <ip>",
            "nc --send-file archivo.tar.gz",
            "cat nc | archivo.tar.gz"
          ],
          answerIndex: 0,
          explanation: "Al usar el operador de redirección de entrada \`< archivo\`, la shell envía los bytes del archivo directamente al flujo de red establecido por Netcat."
        }
      ],
      exercises: [
        {
          id: 1401,
          instruction: "Escribe el comando de Netcat para escuchar (-l) de forma detallada (-v), numérica (-n) en el puerto (-p) 5555.",
          placeholder: "nc -lvnp ...",
          expectedKeywords: ["nc", "-lvnp", "5555"],
          hint: "Usa 'nc -lvnp 5555'.",
          isEmailSubmission: false
        },
        {
          id: 1402,
          instruction: "DESAFÍO FINAL: Escribe el comando de Python 3 para iniciar un servidor HTTP en el puerto 8000. Cópialo y envíalo para revisión.",
          placeholder: "python3 -m ...",
          expectedKeywords: ["python3", "-m", "http.server", "8000"],
          hint: "La sintaxis es 'python3 -m http.server 8000'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 15,
      title: "MÓDULO 15: PIVOTING DE REDES, PORT FORWARDING Y TÚNELES SSH",
      description: "Técnicas de salto de red (Pivoting), reenvío de puertos local (ssh -L), reenvío remoto (ssh -R), túneles dinámicos SOCKS5 (ssh -D) y enrutamiento con Proxychains.",
      items: [
        "Concepto de salto lateral (Pivoting) para alcanzar redes internas no enrutables.",
        "Reenvío de puertos local con SSH (Local Port Forwarding: ssh -L local_port:target_ip:target_port).",
        "Reenvío de puertos remoto (Remote Port Forwarding: ssh -R remote_port:local_ip:local_port).",
        "Creación de túneles dinámicos SOCKS5 con SSH (Dynamic Port Forwarding: ssh -D socks_port).",
        "Configuración y uso de Proxychains (/etc/proxychains4.conf) para canalizar herramientas como Nmap a través de proxies."
      ],
      content: "En infraestructuras corporativas, los servidores más críticos (bases de datos, controladores de dominio) residen en subredes internas aisladas sin acceso directo desde Internet. El **Pivoting** es la técnica que permite utilizar una máquina perimetral previamente auditada (como un servidor web o bastion host) como puente para alcanzar la red interna. El protocolo **SSH** incluye capacidades nativas extraordinarias para crear túneles cifrados. Con **Dynamic Port Forwarding (\`ssh -D 1080\`)**, SSH convierte el equipo local en un servidor proxy SOCKS5: combinando esto con **\`proxychains4\`**, cualquier herramienta de Kali Linux (como \`nmap\` o \`curl\`) puede enrutar su tráfico a través del túnel SSH como si se ejecutara físicamente dentro de la red privada.",
      codeSnippet: `# 1. Reenvío de puerto local (-L): mapea el puerto 3306 remoto de una BD interna al puerto 3307 local
ssh -L 3307:10.0.0.50:3306 usuario@bastion_publico.com -N

# 2. Creación de un túnel dinámico SOCKS5 en el puerto local 1080
ssh -D 1080 -N -f usuario@bastion_publico.com

# 3. Verificación de la configuración de Proxychains en /etc/proxychains4.conf
# (Debe incluir al final: socks5 127.0.0.1 1080)
tail -n 5 /etc/proxychains4.conf

# 4. Ejecución de Nmap a través del túnel SOCKS5 con Proxychains (requiere escaneo TCP Connect -sT)
proxychains4 nmap -sT -Pn -p 22,80,445,3306 10.0.0.50

# 5. Reenvío de puerto remoto (-R): expone un servicio local en la máquina remota
ssh -R 8080:127.0.0.1:80 usuario@servidor_externo.com -N`,
      quiz: [
        {
          question: "¿Qué es el 'Pivoting' en una evaluación de seguridad de redes?",
          options: [
            "Cambiar el sistema operativo de Kali a Windows",
            "Utilizar un sistema comprometido o autorizado como intermediario para acceder a otros equipos en redes internas que no son directamente accesibles desde el exterior",
            "Reiniciar el switch central de la empresa",
            "Girar físicamente una antena direccional"
          ],
          answerIndex: 1,
          explanation: "El pivoting permite utilizar un host intermedio (que tiene acceso a múltiples segmentos de red) como pasarela para auditar la red interna protegida."
        },
        {
          question: "¿Qué tipo de reenvío SSH se establece con el comando \`ssh -D 1080 user@host\`?",
          options: [
            "Reenvío de un único puerto local",
            "Túnel Dinámico que opera como un servidor Proxy SOCKS en el puerto 1080",
            "Reenvío de un puerto remoto",
            "Descarga de claves SSH"
          ],
          answerIndex: 1,
          explanation: "La opción \`-D\` (Dynamic) crea un proxy SOCKS que maneja dinámicamente conexiones a cualquier destino y puerto a través de la sesión SSH."
        },
        {
          question: "¿Por qué al escanear con Nmap a través de Proxychains se debe usar obligatoriamente el modo TCP Connect (\`-sT\`) y no el escaneo SYN (\`-sS\`)?",
          options: [
            "Porque los proxies SOCKS operan a nivel de socket de capa de aplicación/transporte y no pueden enrutar paquetes TCP en bruto (raw packets) generados por el escaneo SYN",
            "Porque el escaneo SYN está prohibido por ley",
            "Porque Proxychains solo soporta UDP",
            "Porque -sS es demasiado rápido para la red"
          ],
          answerIndex: 0,
          explanation: "Los proxies SOCKS establecen conexiones TCP completas usando la llamada al sistema estándar \`connect()\`; no pueden transportar paquetes SYN fragmentados ni forjar banderas TCP personalizadas."
        },
        {
          question: "En un túnel local SSH \`ssh -L 8000:192.168.2.10:80 user@gate\`, ¿qué puerto se abrirá en la máquina local del auditor?",
          options: ["80", "192", "8000", "22"],
          answerIndex: 2,
          explanation: "La sintaxis es \`ssh -L <puerto_local>:<ip_destino>:<puerto_destino>\`, por lo que el puerto 8000 se abrirá localmente y redirigirá al puerto 80 del destino."
        },
        {
          question: "¿Qué archivo de configuración define los servidores proxy por los que transitará el tráfico al usar la herramienta \`proxychains4\`?",
          options: ["/etc/network/interfaces", "/etc/proxychains4.conf", "/etc/hosts", "/etc/ssh/sshd_config"],
          answerIndex: 1,
          explanation: "\`/etc/proxychains4.conf\` (o \`/etc/proxychains.conf\`) es el archivo principal donde se configuran las cadenas de proxies (dinámica, estricta o aleatoria) y las IPs/puertos SOCKS/HTTP."
        }
      ],
      exercises: [
        {
          id: 1501,
          instruction: "Escribe el comando de SSH para crear un túnel dinámico SOCKS en el puerto 1080 en segundo plano (-N, -f) conectando a 'usuario@10.0.0.1'.",
          placeholder: "ssh -D 1080 ... usuario@10.0.0.1",
          expectedKeywords: ["ssh", "-D", "1080", "-N", "-f", "usuario@10.0.0.1"],
          hint: "Usa 'ssh -D 1080 -N -f usuario@10.0.0.1'.",
          isEmailSubmission: false
        },
        {
          id: 1502,
          instruction: "DESAFÍO FINAL: Escribe el comando para ejecutar Nmap con Proxychains realizando un escaneo TCP Connect (-sT) sin ping (-Pn) contra '192.168.10.5'. Cópialo y envíalo para revisión.",
          placeholder: "proxychains4 nmap ...",
          expectedKeywords: ["proxychains4", "nmap", "-sT", "-Pn", "192.168.10.5"],
          hint: "La sintaxis es 'proxychains4 nmap -sT -Pn 192.168.10.5'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 16,
      title: "MÓDULO 16: AUDITORÍA DE PERMISOS, SUID/SGID Y ELEVACIÓN DE PRIVILEGIOS EN LINUX",
      description: "Identificación de configuraciones erróneas en permisos, binarios SUID/SGID, tareas cron vulnerables, capacidades del kernel (Capabilities) y GTFOBins.",
      items: [
        "Vectores comunes de mala configuración en sistemas operativos Linux.",
        "Auditoría exhaustiva de binarios SUID (SetUID: 4000) y SGID (SetGID: 2000).",
        "Inspección de privilegios sudo mal restringidos mediante 'sudo -l'.",
        "Capacidades avanzadas del Kernel Linux con getcap / setcap (ej. cap_setuid).",
        "El proyecto GTFOBins como referencia defensiva para auditar binarios con escape de shell."
      ],
      content: "La elevación de privilegios (Privilege Escalation) ocurre cuando un usuario con permisos restringidos aprovecha una falla de configuración para obtener acceso como superusuario (\`root\`). En Linux, los vectores más frecuentes son los permisos especiales **SUID (Set User ID)** y **sudo mal configurado**. Cuando un binario tiene el bit SUID activo (\`-rwsr-xr-x\`), se ejecuta con los privilegios del propietario del archivo (frecuentemente root) en lugar de los privilegios del usuario que lo invoca. El proyecto de investigación **GTFOBins** cataloga binarios estándar de Unix que, si se configuran con SUID o se permiten en \`sudoers\` sin restricciones, permiten ejecutar comandos arbitrarios o invocar shells con privilegios elevados.",
      codeSnippet: `# 1. Búsqueda exhaustiva de todos los binarios SUID en el sistema silenciando errores
find / -perm -4000 -type f -exec ls -la {} 2>/dev/null \;

# 2. Verificación de los privilegios de ejecución permitidos por sudo para el usuario actual
sudo -l

# 3. Inspección de archivos y directorios con permisos de escritura universales (World-Writable)
find / -writable ! -user $(whoami) -type d 2>/dev/null

# 4. Auditoría de capacidades especiales asignadas a binarios con getcap
getcap -r / 2>/dev/null

# 5. Inspección de tareas programadas del sistema en crontab
cat /etc/crontab /etc/cron.*/* 2>/dev/null | grep -v "^#"`,
      quiz: [
        {
          question: "¿Qué efecto tiene el bit especial de permiso SUID (SetUID) en un archivo binario ejecutable?",
          options: [
            "Hace que el archivo sea de solo lectura",
            "Hace que el archivo se ejecute temporalmente con los privilegios del propietario del archivo (por ejemplo root), independientemente de quién lo ejecute",
            "Cifra el archivo en disco",
            "Permite compartir el archivo a través de la red automáticamente"
          ],
          answerIndex: 1,
          explanation: "El bit SUID hace que el proceso herede el UID del propietario del binario en lugar del UID del usuario que lo invoca."
        },
        {
          question: "¿Qué comando permite a un usuario verificar qué comandos tiene permitido ejecutar con \`sudo\` y bajo qué restricciones?",
          options: ["sudo -l", "sudo --check", "whoami -v", "cat /etc/sudo"],
          answerIndex: 0,
          explanation: "\`sudo -l\` (list) lista los privilegios y comandos que el usuario actual puede invocar a través de la configuración del archivo \`/etc/sudoers\`."
        },
        {
          question: "¿Qué es el proyecto 'GTFOBins' en el ámbito de la seguridad de sistemas Linux?",
          options: [
            "Un repositorio de virus para Linux",
            "Una base de datos de referencia curada que documenta cómo binarios legítimos de Unix pueden ser utilizados para eludir restricciones de seguridad o elevar privilegios si están mal configurados con SUID o sudo",
            "Un gestor de paquetes alternativo a apt",
            "Un protocolo de sincronización de hora"
          ],
          answerIndex: 1,
          explanation: "GTFOBins documenta funciones legítimas de binarios como \`find\`, \`vim\`, \`awk\` o \`less\` que permiten ejecutar comandos del sistema o escapar de entornos restringidos."
        },
        {
          question: "¿Qué comando de Linux permite consultar las capacidades (POSIX Capabilities) asignadas a los ejecutables del sistema?",
          options: ["getcap -r / 2>/dev/null", "ls -cap", "stat --caps", "cat /proc/capabilities"],
          answerIndex: 0,
          explanation: "\`getcap -r /\` busca recursivamente en el sistema de archivos binarios que tengan capacidades especiales del kernel asignadas (como \`cap_net_raw\` o \`cap_setuid\`)."
        },
        {
          question: "¿Por qué un script en \`/etc/crontab\` que es propiedad de root pero tiene permisos de escritura para todos (\`chmod 777\`) constituye una vulnerabilidad crítica?",
          options: [
            "Porque cualquier usuario sin privilegios puede modificar el contenido del script e inyectar comandos que cron ejecutará automáticamente como root",
            "Porque cron se detiene si un archivo tiene permisos 777",
            "Porque ocupa más espacio en memoria RAM",
            "Porque inhabilita el inicio de sesión SSH"
          ],
          answerIndex: 0,
          explanation: "Si el archivo es ejecutable por cron con privilegios de root, cualquier modificación introducida por un usuario no privilegiado se ejecutará con permisos de root en el siguiente ciclo."
        }
      ],
      exercises: [
        {
          id: 1601,
          instruction: "Escribe el comando para verificar los permisos de sudo configurados para el usuario actual.",
          placeholder: "sudo ...",
          expectedKeywords: ["sudo", "-l"],
          hint: "Usa 'sudo -l'.",
          isEmailSubmission: false
        },
        {
          id: 1602,
          instruction: "DESAFÍO FINAL: Escribe el comando con 'find' para buscar archivos SUID (-perm -4000) en el directorio '/usr/bin'. Cópialo y envíalo para revisión.",
          placeholder: "find /usr/bin ...",
          expectedKeywords: ["find", "/usr/bin", "-perm", "4000"],
          hint: "La sintaxis es 'find /usr/bin -perm -4000 2>/dev/null' o 'find /usr/bin -perm -4000'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 17,
      title: "MÓDULO 17: ANÁLISIS FORENSE DIGITAL BÁSICO Y ADQUISICIÓN DE EVIDENCIA",
      description: "Cadena de custodia, cálculo de hashes de integridad (sha256sum), adquisición forense bit a bit con dd/dc3dd y análisis de artefactos con Sleuthkit y Binwalk.",
      items: [
        "Principios de la evidencia digital: orden de volatilidad y preservación de la cadena de custodia.",
        "Cálculo y verificación de hashes de integridad criptográfica (sha256sum, md5sum).",
        "Adquisición forense de discos y particiones mediante dd y dc3dd con control de errores.",
        "Extracción de archivos incrustados y firmas binarias mediante binwalk y foremost.",
        "Inspección de estructuras de sistemas de archivos y recuperación con The Sleuth Kit (fls, icat)."
      ],
      content: "El análisis forense digital (Digital Forensics and Incident Response - DFIR) tiene como objetivo identificar, preservar, analizar y presentar evidencia digital garantizando su validez jurídica y técnica. El primer principio rector es el **Orden de Volatilidad**: la información en memoria RAM, registros de CPU y sockets activos debe capturarse antes que el almacenamiento secundario en disco duro. Al realizar una copia de un disco sospechoso, nunca se interactúa con la evidencia original; en su lugar, se genera una **imagen forense bit a bit** utilizando herramientas como \`dd\` o \`dc3dd\` y se calcula de inmediato su resumen criptográfico (**SHA-256**) para certificar que la copia es idéntica y no ha sufrido alteraciones.",
      codeSnippet: `# 1. Creación de una imagen forense bit a bit de una memoria USB (/dev/sdb) con control de errores
sudo dd if=/dev/sdb of=/tmp/evidencia_disco.raw bs=64K status=progress conv=noerror,sync

# 2. Cálculo del hash SHA-256 de la imagen para asegurar la cadena de custodia
sha256sum /tmp/evidencia_disco.raw > /tmp/evidencia_disco.raw.sha256
cat /tmp/evidencia_disco.raw.sha256

# 3. Análisis e inspección de firmas y archivos ocultos en una imagen binaria con Binwalk
binwalk /tmp/evidencia_disco.raw

# 4. Extracción automática de cadenas de texto imprimibles (ASCII / Unicode) desde una imagen
strings -a -n 8 /tmp/evidencia_disco.raw | grep -i -E "password|admin|key" | head -n 20

# 5. Listado de archivos (incluyendo eliminados marcados con *) en una imagen con The Sleuth Kit
fls -r -p /tmp/evidencia_disco.raw`,
      quiz: [
        {
          question: "¿Por qué es obligatorio calcular el hash criptográfico (como SHA-256) de una imagen forense inmediatamente después de su adquisición?",
          options: [
            "Para acelerar la velocidad de lectura del disco",
            "Para demostrar la integridad de la evidencia y verificar en cualquier momento que los datos no han sido modificados durante el análisis",
            "Para comprimir el tamaño del archivo a la mitad",
            "Para descifrar los archivos protegidos por contraseña"
          ],
          answerIndex: 1,
          explanation: "El hash actúa como una huella digital matemática: si un solo bit cambia en la imagen forense, el hash será completamente diferente, rompiendo la cadena de custodia."
        },
        {
          question: "Según el Orden de Volatilidad estándar en forense digital, ¿cuál de los siguientes elementos debe ser adquirido PRIMERO ante un incidente?",
          options: [
            "El disco duro secundario de respaldo",
            "Los contenidos de la memoria RAM y estado de conexiones de red",
            "Las copias de seguridad en cinta magnética",
            "Los manuales impresos de la organización"
          ],
          answerIndex: 1,
          explanation: "La memoria RAM y el estado de la red se pierden instantáneamente si el equipo se apaga o reinicia; por ello, son los componentes más volátiles y prioritarios."
        },
        {
          question: "En el comando \`dd if=/dev/sdb of=imagen.raw bs=64K conv=noerror,sync\`, ¿qué función cumple \`conv=noerror,sync\`?",
          options: [
            "Detiene la copia al primer sector defectuoso",
            "Continúa la adquisición ignorando errores de lectura y rellenando los sectores dañados con ceros para mantener la alineación de offsets",
            "Formatea el disco origen automáticamente",
            "Cifra la imagen con una contraseña aleatoria"
          ],
          answerIndex: 1,
          explanation: "\`noerror\` evita que \`dd\` se detenga ante sectores dañados en el disco físico, y \`sync\` rellena los bloques faltantes con ceros para conservar la estructura del sistema de archivos."
        },
        {
          question: "¿Qué herramienta en Kali Linux analiza archivos binarios e imágenes de firmware para detectar y extraer código incrustado o sistemas de archivos comprimidos?",
          options: ["binwalk", "netcat", "john", "airmon-ng"],
          answerIndex: 0,
          explanation: "Binwalk escanea imágenes binarias en busca de firmas mágicas conocidas (magic bytes), permitiendo identificar y extraer componentes internos como archivos comprimidos o kernels."
        },
        {
          question: "¿Qué utilidad del paquete 'The Sleuth Kit' (TSK) permite listar la estructura de directorios y ficheros (incluso eliminados) dentro de una imagen forense?",
          options: ["fls", "icat", "fsstat", "blkcalc"],
          answerIndex: 0,
          explanation: "\`fls\` recorre las tablas de inodos y directorios del sistema de archivos en una imagen forense, marcando con un asterisco (*) los ficheros eliminados pero aún recuperables."
        }
      ],
      exercises: [
        {
          id: 1701,
          instruction: "Escribe el comando para calcular el hash SHA-256 del archivo 'evidencia.raw'.",
          placeholder: "sha256sum ...",
          expectedKeywords: ["sha256sum", "evidencia.raw"],
          hint: "Usa 'sha256sum evidencia.raw'.",
          isEmailSubmission: false
        },
        {
          id: 1702,
          instruction: "DESAFÍO FINAL: Escribe el comando de 'binwalk' para analizar las firmas y componentes del archivo 'firmware.bin'. Cópialo y envíalo para revisión.",
          placeholder: "binwalk ...",
          expectedKeywords: ["binwalk", "firmware.bin"],
          hint: "La sintaxis es 'binwalk firmware.bin'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 18,
      title: "MÓDULO 18: ANÁLISIS DE LOGS DEL SISTEMA Y DETECCIÓN DE INTRUSIONES",
      description: "Estructura de bitácoras en /var/log/, filtrado y correlación de eventos con grep/awk, detección de ataques de fuerza bruta y análisis de registros de servidores web.",
      items: [
        "Mapa de bitácoras del sistema (/var/log/auth.log, syslog, /var/log/apache2/access.log).",
        "Filtrado y conteo de intentos fallidos de autenticación SSH (Failed password).",
        "Procesamiento y agregación de logs de acceso web con awk, sort y uniq -c.",
        "Detección de patrones de inyección SQL, escaneos de rutas y User-Agents anómalos.",
        "Principios de correlación de eventos y reenvío centralizado a sistemas SIEM."
      ],
      content: "Los registros de eventos (logs) constituyen la fuente primordial de verdad para la detección de anomalías y la investigación post-incidente. En distribuciones basadas en Debian como Kali Linux, los intentos de autenticación (tanto exitosos como fallidos) se almacenan en \`/var/log/auth.log\`. El análisis manual o automatizado de logs mediante herramientas de procesamiento de texto (\`grep\`, \`awk\`, \`cut\`, \`sort\`, \`uniq\`) permite a un analista reconstruir la línea de tiempo de un ataque: identificar direcciones IP de origen que ejecutan ataques de fuerza bruta contra el servicio SSH, detectar picos de errores 404 causados por herramientas automatizadas de fuzzing web o aislar intentos de inyección SQL en las URLs solicitadas.",
      codeSnippet: `# 1. Detección y conteo de intentos fallidos de login SSH agrupados por IP de origen
grep "Failed password" /var/log/auth.log | awk '{for(i=1;i<=NF;i++) if($i=="from") print $(i+1)}' | sort | uniq -c | sort -nr | head -n 10

# 2. Identificación de los 10 clientes (IPs) con mayor número de peticiones en Apache
awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -nr | head -n 10

# 3. Búsqueda de patrones comunes de Inyección SQL en los logs de acceso web
grep -i -E "union.*select|select.*from|exec\(|or%201=1|--|cast\(" /var/log/apache2/access.log

# 4. Monitoreo en tiempo real de nuevas sesiones abiertas como root
tail -f /var/log/auth.log | grep --line-buffered "session opened for user root"

# 5. Filtrado de códigos de respuesta HTTP 404 (recursos no encontrados) para detectar escáneres
awk '$9 == 404 {print $1, $7}' /var/log/apache2/access.log | sort | uniq -c | sort -nr | head -n 15`,
      quiz: [
        {
          question: "¿En qué archivo de registro de Kali Linux / Debian se registran los intentos de autenticación de usuarios (SSH, sudo, su)?",
          options: ["/var/log/syslog", "/var/log/auth.log", "/var/log/kern.log", "/var/log/dpkg.log"],
          answerIndex: 1,
          explanation: "\`/var/log/auth.log\` centraliza los eventos de autenticación y autorización del sistema a través de PAM (Pluggable Authentication Modules)."
        },
        {
          question: "¿Qué combinación de comandos de Linux permite ordenar una lista de elementos y contar el número de repeticiones únicas de cada uno?",
          options: ["sort | uniq -c", "count -u", "uniq --total", "grep -c"],
          answerIndex: 0,
          explanation: "\`uniq -c\` requiere que la entrada esté previamente ordenada (\`sort\`); cuenta las ocurrencias contiguas de cada línea y muestra el total."
        },
        {
          question: "En un archivo de registro de servidor web con formato Apache Combined, ¿qué campo representa típicamente la dirección IP del cliente solicitante?",
          options: ["El primer campo ($1)", "El último campo ($NF)", "El campo número 9", "El campo de fecha"],
          answerIndex: 0,
          explanation: "En el formato estándar Combined Log Format, la dirección IP remota del cliente es el primer token de la línea (\`$1\` en awk)."
        },
        {
          question: "¿Qué patrón en los logs de acceso web sugiere fuertemente la actividad de un escáner automatizado de directorios como Gobuster o Nikto?",
          options: [
            "Una sola petición HTTP 200 a la página principal",
            "Cientos o miles de peticiones consecutivas en segundos que devuelven códigos de estado HTTP 404 (Not Found) a diferentes rutas no existentes",
            "Un tiempo de respuesta de 0 milisegundos",
            "Peticiones exclusivas con el método OPTIONS"
          ],
          answerIndex: 1,
          explanation: "Los escáneres de rutas prueban miles de palabras de un diccionario; la gran mayoría de rutas inexistentes generarán una ráfaga masiva de errores 404 en los logs."
        },
        {
          question: "¿Cuál es el propósito principal de una plataforma SIEM (Security Information and Event Management)?",
          options: [
            "Sustituir a los firewalls perimetrales",
            "Centralizar, normalizar, correlacionar y analizar registros de múltiples fuentes en tiempo real para detectar amenazas de seguridad",
            "Acelerar las descargas de paquetes apt",
            "Crear respaldos comprimidos de bases de datos"
          ],
          answerIndex: 1,
          explanation: "Un SIEM recopila logs de servidores, firewalls, routers y endpoints para correlacionar eventos dispersos e identificar patrones de compromiso complejos."
        }
      ],
      exercises: [
        {
          id: 1801,
          instruction: "Escribe el comando con 'grep' para buscar todas las líneas que contengan 'Failed password' en '/var/log/auth.log'.",
          placeholder: "grep ... /var/log/auth.log",
          expectedKeywords: ["grep", "Failed password", "/var/log/auth.log"],
          hint: "Usa 'grep \"Failed password\" /var/log/auth.log'.",
          isEmailSubmission: false
        },
        {
          id: 1802,
          instruction: "DESAFÍO FINAL: Escribe el comando con 'awk' para imprimir el primer campo ($1) de '/var/log/apache2/access.log'. Cópialo y envíalo para revisión.",
          placeholder: "awk '{print $1}' ...",
          expectedKeywords: ["awk", "$1", "/var/log/apache2/access.log"],
          hint: "La sintaxis es 'awk \"{print \\$1}\" /var/log/apache2/access.log' o 'awk \\'{print $1}\\' /var/log/apache2/access.log'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 19,
      title: "MÓDULO 19: BASTIONADO DE SISTEMAS (HARDENING), CORTAFUEGOS IPTABLES/NFTABLES Y UFW",
      description: "Políticas de filtrado por defecto (DROP/ACCEPT), cadenas INPUT/OUTPUT/FORWARD, inspección de estado (conntrack) con IPTables, migración a NFTables y configuración con UFW.",
      items: [
        "Principios de Hardening y defensa en profundidad en servidores Linux.",
        "Estructura de tablas y cadenas en IPTables: filter, nat, mangle y cadenas INPUT/OUTPUT/FORWARD.",
        "Filtrado con seguimiento de estado de conexiones (Stateful Firewall con conntrack: ESTABLISHED, RELATED).",
        "Configuración simplificada de cortafuegos perimetral mediante UFW (Uncomplicated Firewall).",
        "Arquitectura moderna de filtrado del Kernel Linux con NFTables (nft)."
      ],
      content: "El bastionado (Hardening) de sistemas consiste en reducir la superficie de ataque de un servidor eliminando servicios innecesarios, aplicando el principio de mínimo privilegio y configurando cortafuegos con estado. En el kernel de Linux, el filtrado de paquetes ha sido gestionado históricamente por **IPTables** y actualmente por **NFTables**. Un firewall robusto aplica una **política por defecto DROP** (descartar todo el tráfico entrante salvo lo explícitamente permitido). Mediante el módulo de seguimiento de conexiones **conntrack**, el firewall permite automáticamente los paquetes de respuestas legítimas (\`ESTABLISHED,RELATED\`) para conexiones que el propio servidor inició, bloqueando cualquier intento de conexión entrante no autorizado a puertos cerrados.",
      codeSnippet: `# 1. Configuración de un firewall básico robusto con IPTables (Política DROP por defecto)
# Permitir tráfico local en loopback (lo)
sudo iptables -A INPUT -i lo -j ACCEPT
# Permitir conexiones ya establecidas y relacionadas
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
# Permitir acceso SSH en el puerto 22 y HTTP/HTTPS en los puertos 80 y 443
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT
# Establecer política por defecto DROP en INPUT y FORWARD
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP

# 2. Listado numerado de todas las reglas activas en IPTables
sudo iptables -L -n -v --line-numbers

# 3. Configuración equivalente y simplificada mediante UFW
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 4. Verificación del estado de reglas en NFTables
sudo nft list ruleset`,
      quiz: [
        {
          question: "¿Cuál es la mejor práctica recomendada para la política por defecto de la cadena INPUT en un firewall perimetral?",
          options: [
            "ACCEPT (Permitir todo por defecto)",
            "DROP (Descartar todo el tráfico entrante por defecto, habilitando únicamente los puertos y servicios necesarios)",
            "QUEUE (Enviar todo a la memoria intermedia)",
            "LOG (Solo registrar sin filtrar)"
          ],
          answerIndex: 1,
          explanation: "El principio de mínimo privilegio exige una política por defecto DROP/DENY, asegurando que cualquier servicio o puerto no autorizado quede bloqueado automáticamente."
        },
        {
          question: "En IPTables, ¿qué estado de conexión en el módulo conntrack (\`--ctstate\`) representa paquetes que forman parte de una conexión ya iniciada válidamente?",
          options: ["NEW", "ESTABLISHED", "INVALID", "UNTRACKED"],
          answerIndex: 1,
          explanation: "El estado \`ESTABLISHED\` indica que el paquete pertenece a una conexión bidireccional que ya ha completado su handshake inicial."
        },
        {
          question: "¿Qué cadena de IPTables procesa los paquetes cuyo destino final es un proceso o servicio que corre localmente en el propio servidor?",
          options: ["FORWARD", "OUTPUT", "INPUT", "PREROUTING"],
          answerIndex: 2,
          explanation: "La cadena \`INPUT\` inspecciona todos los paquetes de red entrantes dirigidos a la dirección IP local de la propia máquina."
        },
        {
          question: "¿Qué subsistema moderno del Kernel Linux reemplaza a IPTables, ip6tables, arptables y ebtables con una sintaxis unificada y mejor rendimiento?",
          options: ["NFTables (nft)", "UFW", "Fail2ban", "SELinux"],
          answerIndex: 0,
          explanation: "NFTables es el framework oficial moderno del kernel de Linux que sustituye a toda la suite anterior de IPTables con un motor de ejecución más eficiente."
        },
        {
          question: "¿Qué comando de UFW permite habilitar el cortafuegos y aplicarlo permanentemente en el arranque?",
          options: ["ufw start", "ufw enable", "ufw fire", "ufw activate"],
          answerIndex: 1,
          explanation: "\`ufw enable\` activa las reglas de filtrado y configura el servicio para arrancar automáticamente en cada inicio del sistema."
        }
      ],
      exercises: [
        {
          id: 1901,
          instruction: "Escribe el comando de UFW para permitir el tráfico entrante al puerto 22/tcp.",
          placeholder: "ufw allow ...",
          expectedKeywords: ["ufw", "allow", "22"],
          hint: "Usa 'sudo ufw allow 22/tcp' o 'ufw allow 22/tcp' o 'ufw allow 22'.",
          isEmailSubmission: false
        },
        {
          id: 1902,
          instruction: "DESAFÍO FINAL: Escribe el comando con IPTables para listar las reglas activas con números de línea (--line-numbers). Cópialo y envíalo para revisión.",
          placeholder: "iptables -L ...",
          expectedKeywords: ["iptables", "-L", "--line-numbers"],
          hint: "La sintaxis es 'iptables -L -n --line-numbers' o 'iptables -L --line-numbers'.",
          isEmailSubmission: true
        }
      ]
    },
    {
      id: 20,
      title: "MÓDULO 20: METODOLOGÍA DE PENTESTING, ESTÁNDARES (PTES/NIST) Y REPORTE CVSS",
      description: "Fases formales de una auditoría de seguridad, delimitación de alcance (Scope), acuerdos de nivel de servicio (SLA/NDA), matriz de severidad CVSS v3.1 y redacción de informes ejecutivos y técnicos.",
      items: [
        "Fases metodológicas del estándar PTES (Penetration Testing Execution Standard).",
        "Marco de evaluación de seguridad NIST SP 800-115 y directrices éticas.",
        "Definición de alcance (Rules of Engagement - RoE, Scope y acuerdos de confidencialidad NDA).",
        "Cálculo de severidad de vulnerabilidades mediante el estándar Common Vulnerability Scoring System (CVSS v3.1).",
        "Estructura formal de un reporte de auditoría: Resumen Ejecutivo vs Detalle Técnico con pasos de reproducción (PoC) y remediación."
      ],
      content: "La ejecución de pruebas de penetración profesionales no se define por el uso aislado de herramientas, sino por la rigurosa aplicación de una **metodología formal** y un marco de **responsabilidad ética y legal**. Estándares como el **PTES (Penetration Testing Execution Standard)** estructuran la evaluación en siete fases secuenciales: Pre-engagement (acuerdos y alcance), Recolección de Inteligencia, Modelado de Amenazas, Análisis de Vulnerabilidades, Explotación, Post-explotación y Reporte. El entregable más valioso para la organización cliente es el **Informe Final**: este debe contener un Resumen Ejecutivo orientado a la dirección de la empresa (sin tecnicismos excesivos, destacando el impacto en el negocio) y una Sección Técnica exhaustiva donde cada vulnerabilidad se clasifica según el estándar **CVSS v3.1** (Base Score de 0.0 a 10.0), acompañada de pruebas de concepto reproducibles y recomendaciones de mitigación claras y verificables.",
      codeSnippet: `# Ejemplo de Estructura de Clasificación de Vulnerabilidad en un Reporte Técnico

================================================================================
HALLAZGO DE SEGURIDAD: QS-SEC-2026-001
Título: Exposición de Panel de Administración con Autenticación Débil
Severidad: ALTA (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N - Base Score: 7.5)
================================================================================

1. DESCRIPCIÓN TÉCNICA:
Durante la fase de escaneo con Nmap y Gobuster, se identificó un servicio web en
el puerto 8080 que expone la consola de administración (/admin) sin restricción
de red ni controles de bloqueo por fuerza bruta.

2. EVIDENCIA Y PRUEBA DE CONCEPTO (PoC):
- Comando Nmap: nmap -sV -p 8080 192.168.1.50
- Solicitud HTTP: GET /admin/login.php HTTP/1.1 -> Devuelve código 200 OK.

3. IMPACTO EN EL NEGOCIO:
Un atacante no autenticado podría realizar ataques automatizados de adivinanza de
credenciales y obtener control sobre la gestión de usuarios del sistema.

4. RECOMENDACIÓN DE MITIGACIÓN:
- Restringir el acceso a la ruta /admin exclusivamente a través de VPN interna.
- Implementar bloqueo de cuenta tras 5 intentos fallidos y doble factor (2FA).
- Habilitar reglas de cortafuegos en IPTables para limitar el puerto 8080.`,
      quiz: [
        {
          question: "¿Cuál es el documento legal y técnico indispensable que debe firmarse ANTES de iniciar cualquier prueba de penetración para definir límites, horarios y objetivos autorizados?",
          options: [
            "Rules of Engagement (RoE) / Documento de Delimitación de Alcance y Autorización Expresa",
            "Un recibo de compra de Kali Linux",
            "La licencia GNU GPL",
            "Un certificado de servidor TLS"
          ],
          answerIndex: 0,
          explanation: "Las Rules of Engagement (RoE) y el acuerdo de alcance delimitan qué sistemas pueden auditarse, qué pruebas están prohibidas y otorgan autorización formal por escrito para evitar responsabilidades legales."
        },
        {
          question: "¿Qué estándar internacional de la industria clasifica la severidad numérica de las vulnerabilidades en una escala de 0.0 a 10.0?",
          options: ["CVSS (Common Vulnerability Scoring System)", "ISO 9001", "ASCII", "RFC 1918"],
          answerIndex: 0,
          explanation: "CVSS (actualmente en versión 3.1 / 4.0) calcula una puntuación base a partir de métricas como Vector de Ataque (AV), Complejidad (AC), Privilegios Requeridos (PR) e Impacto en Confidencialidad, Integridad y Disponibilidad."
        },
        {
          question: "Según el estándar metodológico PTES, ¿cuál es la primera fase del proceso de una prueba de penetración?",
          options: [
            "Explotación masiva",
            "Pre-engagement Interactions (Interacciones Previas y Definición del Alcance)",
            "Instalación de troyanos",
            "Fuerza bruta a contraseñas"
          ],
          answerIndex: 1,
          explanation: "La fase de Pre-engagement establece las expectativas, alcance, contactos de emergencia, canales de comunicación y aspectos legales antes de enviar cualquier paquete de prueba."
        },
        {
          question: "¿Qué sección de un informe final de auditoría está orientada a directores y gerentes de la empresa para explicar el riesgo en términos de impacto al negocio sin excesivo tecnicismo?",
          options: ["Resumen Ejecutivo (Executive Summary)", "Volcado de paquetes PCAP", "Código fuente de los exploits", "Logs de terminal de Nmap"],
          answerIndex: 0,
          explanation: "El Resumen Ejecutivo traduce los riesgos técnicos a lenguaje directivo, sintetizando el estado de la postura de seguridad y el impacto financiero u operativo potencial."
        },
        {
          question: "En una evaluación ética de seguridad (Ethical Hacking), ¿cuál es el objetivo primordial tras identificar una vulnerabilidad crítica?",
          options: [
            "Publicarla inmediatamente en redes sociales",
            "Documentarla detalladamente con su prueba de concepto y proporcionar recomendaciones técnicas precisas para que el equipo responsable pueda parcharla y mitigar el riesgo",
            "Eliminar las bases de datos para evitar que otros las roben",
            "Vender el acceso al mejor postor"
          ],
          answerIndex: 1,
          explanation: "El objetivo de la seguridad ética y defensiva es siempre ayudar a la organización a subsanar sus fallas, proteger los datos de los usuarios y fortalecer sus controles preventivos."
        }
      ],
      exercises: [
        {
          id: 2001,
          instruction: "Escribe las siglas del estándar internacional utilizado para calificar numéricamente la severidad de vulnerabilidades (Common Vulnerability Scoring System).",
          placeholder: "CVSS",
          expectedKeywords: ["CVSS"],
          hint: "Las siglas son 'CVSS'.",
          isEmailSubmission: false
        },
        {
          id: 2002,
          instruction: "DESAFÍO FINAL: Escribe el nombre de la fase del PTES donde se definen los acuerdos iniciales, alcance y reglas ('Pre-engagement'). Cópialo y envíalo para revisión.",
          placeholder: "Pre-engagement",
          expectedKeywords: ["Pre-engagement"],
          hint: "Escribe 'Pre-engagement'.",
          isEmailSubmission: true
        }
      ]
    }
  ]
};
