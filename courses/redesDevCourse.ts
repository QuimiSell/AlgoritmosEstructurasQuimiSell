import { Course } from '../domain/models';

export const REDES_DEV_COURSE: Course = {
  id: 'redes_desarrolladores',
  title: 'Redes para Desarrolladores (TCP/IP, DNS, HTTP, TLS)',
  shortTitle: 'Redes Dev',
  badge: 'Fundamentos de Red',
  icon: '🌐',
  description: '10 módulos: OSI/TCP-IP, IP, DNS, HTTP/HTTPS, TLS, REST, CDN, CORS, diagnóstico y puente hacia Kali Linux.',
  whyStudyTitle: '🔌 ¿Por qué redes antes de Kali y APIs?',
  whyStudyText: 'Sin entender DNS, TLS y HTTP, Nmap y pentesting son botones sin contexto. Todo dev que despliega en Vercel o construye APIs móviles necesita esta base — especialmente en ciberseguridad defensiva QuimiSell.',
  studyPlanReasons: [
    {
      id: 1,
      title: "Modelo de Capas",
      why: "OSI y TCP/IP simplificado para devs."
    },
    {
      id: 2,
      title: "IP y Subnetting",
      why: "Direcciones, CIDR y routing básico."
    },
    {
      id: 3,
      title: "DNS",
      why: "Resolución de nombres y registros."
    },
    {
      id: 4,
      title: "HTTP/HTTPS",
      why: "Protocolo web y evolución."
    },
    {
      id: 5,
      title: "TLS y Certificados",
      why: "Cifrado en tránsito."
    },
    {
      id: 6,
      title: "REST y WebSockets",
      why: "APIs modernas."
    },
    {
      id: 7,
      title: "Latencia y CDN",
      why: "Caching y performance web."
    },
    {
      id: 8,
      title: "CORS y Sesiones",
      why: "Seguridad del navegador."
    },
    {
      id: 9,
      title: "Diagnóstico de Red",
      why: "ping, curl, traceroute, Wireshark intro."
    },
    {
      id: 10,
      title: "Puente a Kali",
      why: "Fundamentos antes de pentesting."
    }
  ],
  labChallenge: {
    title: "Mapa de Red y Diagnóstico Web QuimiSell",
    badge: "Laboratorio Redes para Devs",
    description: "Documenta el path DNS→TLS→HTTP de quimisell.com o tu deploy Vercel: dig, curl -v, traceroute, diagrama de capas, y explica cada status header. Incluye propuesta CORS/cookies si tuvieras API.",
    requirements: [
      "• Output dig + curl -v comentado.",
      "• Diagrama OSI/TCP-IP del request.",
      "• Tabla puertos comunes.",
      "• Análisis latencia RTT.",
      "• Puente escrito hacia módulo Nmap Kali."
    ],
    cleanCodeRules: [
      "• Solo targets autorizados (tuyos o QuimiSell).",
      "• No port scan sin permiso.",
      "• Documentar herramientas usadas.",
      "• Enviar a quimicabless2020@gmail.com."
    ],
    emailSubject: "Laboratorio QuimiSell: Redes Dev - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,

Repo/reporte: [ENLACE]

(quimicabless2020@gmail.com)`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES",
      description: "Las capas que conectan tu código con internet.",
      items: [
        "OSI 7 capas vs TCP/IP 4 capas.",
        "Capa aplicación: HTTP, DNS, TLS.",
        "Transporte: TCP vs UDP.",
        "Red: IP, routing.",
        "Enlace/física: Ethernet, WiFi."
      ],
      content: "Como desarrollador no necesitas memorizar OSI entero, pero sí entender dónde vive tu problema: ¿es DNS? ¿TLS? ¿timeout TCP? TCP/IP es el stack real de internet: aplicación → transporte (TCP/UDP) → internet (IP) → enlace. HTTP vive en aplicación sobre TCP. UDP en video streaming y DNS. Saber esto acelera debug: un fetch() lento puede ser DNS lento, no JavaScript lento.",
      codeSnippet: `# Stack simplificado
# App (HTTP) → TCP → IP → Ethernet`,
      quiz: [
        {
          question: "HTTP vive en capa...",
          options: ["Aplicación", "Física", "Enlace"],
          answerIndex: 0,
          explanation: "Capa 7 / Application."
        },
        {
          question: "TCP vs UDP: TCP...",
          options: ["Confiable orientado conexión", "Sin garantía orden", "Solo video"],
          answerIndex: 0,
          explanation: "Reliable delivery."
        },
        {
          question: "IP maneja...",
          options: ["Direccionamiento y routing", "Solo HTML", "Certificados SSL"],
          answerIndex: 0,
          explanation: "Capa de red."
        },
        {
          question: "Debug fetch lento: revisar...",
          options: ["DNS, TLS, TCP además de JS", "Solo React", "Solo Git"],
          answerIndex: 0,
          explanation: "Toda la stack."
        },
        {
          question: "TCP/IP tiene...",
          options: ["4 capas prácticas", "7 capas OSI exactas", "2 capas"],
          answerIndex: 0,
          explanation: "Modelo práctico internet."
        },
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO",
      description: "Direcciones que identifican cada máquina en la red.",
      items: [
        "IPv4: 32 bits (192.168.1.1).",
        "IPv6: 128 bits, adopción creciente.",
        "CIDR /24, /16 — máscara de subred.",
        "IP privada vs pública (NAT).",
        "Router reenvía entre subredes."
      ],
      content: "IPv4 agotó espacio; IPv6 lo resuelve con 2^128 direcciones. CIDR /24 = 256 IPs (254 usables). 192.168.x.x es privada (NAT a internet). Tu router traduce IP privada → pública. Routing: cada router decide siguiente salto hacia destino. Para devs: localhost=127.0.0.1, docker networks usan subnets aisladas, Vercel edge tiene IPs globales.",
      codeSnippet: `# Privadas RFC1918: 10.x, 172.16-31.x, 192.168.x
# /24 = 255.255.255.0`,
      quiz: [
        {
          question: "192.168.1.1 es IP...",
          options: ["Privada", "Pública global", "IPv6"],
          answerIndex: 0,
          explanation: "RFC1918 privada."
        },
        {
          question: "CIDR /24 permite...",
          options: ["~256 direcciones", "2 direcciones", "Millones"],
          answerIndex: 0,
          explanation: "256 IPs en subnet."
        },
        {
          question: "NAT traduce...",
          options: ["Privada a pública", "DNS a IP", "HTTP a TCP"],
          answerIndex: 0,
          explanation: "Home router NAT."
        },
        {
          question: "127.0.0.1 es...",
          options: ["localhost", "Broadcast", "Gateway"],
          answerIndex: 0,
          explanation: "Loopback local."
        },
        {
          question: "IPv6 resuelve...",
          options: ["Agotamiento IPv4", "Solo WiFi", "Git"],
          answerIndex: 0,
          explanation: "Espacio de direcciones."
        },
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES",
      description: "De quimisell.com a dirección IP.",
      items: [
        "Jerarquía: root → TLD → autoritativo.",
        "Registros A, AAAA, CNAME, MX, TXT.",
        "TTL: tiempo de cache.",
        "Resolver recursivo (8.8.8.8).",
        "DNS propagation y debugging."
      ],
      content: "DNS traduce nombres humanos a IPs. Consulta recursiva: tu OS → resolver ISP/Google → root → .com → servidor autoritativo. A record → IPv4; AAAA → IPv6; CNAME alias; TXT para verificación (Vercel, email SPF). TTL bajo = cambios rápidos pero más queries. nslookup/dig diagnostican. Vercel deploy requiere DNS apuntando o CNAME.",
      codeSnippet: `dig quimisell.com A
nslookup github.com`,
      quiz: [
        {
          question: "DNS traduce...",
          options: ["Nombre a IP", "IP a HTML", "TCP a UDP"],
          answerIndex: 0,
          explanation: "Resolución de nombres."
        },
        {
          question: "Registro A...",
          options: ["Nombre a IPv4", "Nombre a IPv6", "Email"],
          answerIndex: 0,
          explanation: "Address record."
        },
        {
          question: "CNAME...",
          options: ["Alias a otro nombre", "Mail exchange", "Solo IPv6"],
          answerIndex: 0,
          explanation: "Canonical name alias."
        },
        {
          question: "TTL controla...",
          options: ["Tiempo cache del registro", "Velocidad TCP", "Tamaño paquete"],
          answerIndex: 0,
          explanation: "Time To Live cache."
        },
        {
          question: "dig/nslookup...",
          options: ["Diagnostican DNS", "Escanean puertos", "Compilan TS"],
          answerIndex: 0,
          explanation: "Herramientas DNS."
        },
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS",
      description: "El protocolo que mueve la web.",
      items: [
        "Request: method, path, headers, body.",
        "Response: status code, headers, body.",
        "HTTP/2: multiplexing, header compression.",
        "HTTPS = HTTP + TLS.",
        "Status: 2xx ok, 3xx redirect, 4xx client, 5xx server."
      ],
      content: "HTTP es texto (HTTP/1.1) o binario (HTTP/2) sobre TCP. GET idempotente, POST crea, PUT actualiza, DELETE elimina. Headers: Content-Type, Authorization, Cache-Control. HTTP/2 multiplexa requests en una conexión TCP. HTTPS obligatorio en producción (SEO, seguridad). 404 Not Found, 500 Internal Error — conoce códigos para debug API.",
      codeSnippet: `curl -I https://api.github.com
curl -X POST -H 'Content-Type: application/json' -d '{}' URL`,
      quiz: [
        {
          question: "GET es...",
          options: ["Idempotente lectura", "Siempre crea recurso", "Solo WebSocket"],
          answerIndex: 0,
          explanation: "Read sin side effects."
        },
        {
          question: "HTTPS es...",
          options: ["HTTP + TLS", "HTTP sin TCP", "Solo HTTP/2"],
          answerIndex: 0,
          explanation: "Cifrado en tránsito."
        },
        {
          question: "404 significa...",
          options: ["Recurso no encontrado", "Server error", "Redirect"],
          answerIndex: 0,
          explanation: "Client error not found."
        },
        {
          question: "HTTP/2 mejora...",
          options: ["Multiplexing en una conexión", "Elimina TCP", "Solo DNS"],
          answerIndex: 0,
          explanation: "Performance conexión."
        },
        {
          question: "Content-Type header...",
          options: ["Tipo de body", "IP destino", "Certificado"],
          answerIndex: 0,
          explanation: "MIME type del body."
        },
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: TLS, SSL Y CERTIFICADOS",
      description: "Cifrado que protege datos en tránsito.",
      items: [
        "Handshake TLS: acuerdo de claves.",
        "Certificado X.509: identidad del servidor.",
        "CA (Let's Encrypt) firma certificados.",
        "HTTPS padlock = TLS activo.",
        "Certificate pinning en mobile."
      ],
      content: "TLS negocia cifrado simétrico tras intercambio asimétrico en handshake. Certificado prueba que quimisell.com es quien dice ser (firmado por CA). Let's Encrypt gratis vía ACME. Mixed content (HTTP en HTTPS page) bloqueado por browser. Dev: mkcert para certs locales. Vercel provisiona TLS automático.",
      codeSnippet: `# TLS 1.3: handshake más rápido, ciphers seguros`,
      quiz: [
        {
          question: "TLS handshake...",
          options: ["Negocia claves de cifrado", "Resuelve DNS", "Compila JS"],
          answerIndex: 0,
          explanation: "Acuerdo seguro."
        },
        {
          question: "Certificado X.509...",
          options: ["Identidad del servidor", "Contraseña usuario", "IP privada"],
          answerIndex: 0,
          explanation: "Prueba identidad."
        },
        {
          question: "Let's Encrypt...",
          options: ["CA gratuita", "Solo pago", "Protocolo HTTP"],
          answerIndex: 0,
          explanation: "Certs gratis ACME."
        },
        {
          question: "Mixed content...",
          options: ["HTTP recursos en HTTPS page", "Siempre seguro", "Solo mobile"],
          answerIndex: 0,
          explanation: "Browser lo bloquea."
        },
        {
          question: "Vercel TLS...",
          options: ["Automático en deploy", "Manual siempre", "No soportado"],
          answerIndex: 0,
          explanation: "HTTPS out of box."
        },
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: REST, WEBSOCKETS Y APIS",
      description: "Comunicación cliente-servidor moderna.",
      items: [
        "REST: recursos como URLs, verbs HTTP.",
        "JSON como formato dominante.",
        "WebSocket: conexión bidireccional persistente.",
        "GraphQL: query flexible.",
        "Rate limiting y paginación."
      ],
      content: "REST mapea entidades a URLs: GET /users/1, POST /users. Stateless: cada request lleva auth. WebSockets para chat, gaming, live updates — conexión persistente vs polling HTTP. GraphQL un endpoint, cliente elige campos. API design: versionado (/v1/), paginación (cursor/offset), rate limits (429 Too Many Requests).",
      codeSnippet: `# REST: GET /api/courses/1
# WebSocket: ws://host/chat`,
      quiz: [
        {
          question: "REST es...",
          options: ["Recursos + HTTP verbs", "Solo WebSocket", "Solo TCP"],
          answerIndex: 0,
          explanation: "Architectural style."
        },
        {
          question: "WebSocket vs HTTP polling...",
          options: ["Conexión persistente bidireccional", "Solo request-response", "Sin estado"],
          answerIndex: 0,
          explanation: "Real-time eficiente."
        },
        {
          question: "429 status...",
          options: ["Rate limit exceeded", "Not found", "Server error"],
          answerIndex: 0,
          explanation: "Too Many Requests."
        },
        {
          question: "JSON en APIs...",
          options: ["Formato dominante", "Solo XML", "Prohibido"],
          answerIndex: 0,
          explanation: "Estándar moderno."
        },
        {
          question: "Paginación evita...",
          options: ["Responses gigantes O(n)", "TLS", "DNS"],
          answerIndex: 0,
          explanation: "Transferir todo de golpe."
        },
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: LATENCIA, CDN Y CACHING HTTP",
      description: "Performance web más allá del código.",
      items: [
        "RTT: round-trip time.",
        "CDN: contenido cerca del usuario.",
        "Cache-Control, ETag, max-age.",
        "Vercel Edge Network.",
        "Compresión gzip/brotli."
      ],
      content: "Latencia = distancia + procesamiento. CDN (Cloudflare, Vercel Edge) cachea estáticos en PoPs globales — O(1) lookup vs O(distancia) transcontinental. Cache-Control: max-age=31536000 para assets hashed. ETag valida freshness. brotli comprime mejor que gzip. Para QuimiSell PWA: service worker cache + CDN Vercel = offline + rápido.",
      codeSnippet: `Cache-Control: public, max-age=31536000, immutable`,
      quiz: [
        {
          question: "CDN acerca...",
          options: ["Contenido al usuario geográficamente", "Solo DNS", "Solo API"],
          answerIndex: 0,
          explanation: "Edge caching."
        },
        {
          question: "RTT es...",
          options: ["Round-trip time ida y vuelta", "Solo download", "Tamaño archivo"],
          answerIndex: 0,
          explanation: "Latencia de red."
        },
        {
          question: "max-age en Cache-Control...",
          options: ["Segundos de cache válido", "Tamaño máximo", "IP máxima"],
          answerIndex: 0,
          explanation: "Freshness duration."
        },
        {
          question: "Vercel Edge...",
          options: ["CDN global incluido", "Solo localhost", "Sin HTTPS"],
          answerIndex: 0,
          explanation: "Deploy global."
        },
        {
          question: "brotli vs gzip...",
          options: ["Mejor compresión brotli", "Igual siempre", "gzip más nuevo"],
          answerIndex: 0,
          explanation: "Compresión moderna."
        },
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: CORS, COOKIES Y SESIONES",
      description: "Seguridad del navegador que todo dev debe conocer.",
      items: [
        "Same-Origin Policy.",
        "CORS headers: Access-Control-Allow-Origin.",
        "Preflight OPTIONS request.",
        "Cookies: HttpOnly, Secure, SameSite.",
        "JWT en header vs cookie session."
      ],
      content: "Browsers bloquean requests cross-origin por seguridad. CORS permite excepciones via headers del servidor. Preflight OPTIONS para methods no simples. Cookies HttpOnly no accesibles desde JS (XSS protection). SameSite=Lax mitiga CSRF. JWT stateless en Authorization header vs session cookie en servidor.",
      codeSnippet: `# Access-Control-Allow-Origin: https://quimisell.com`,
      quiz: [
        {
          question: "Same-Origin Policy...",
          options: ["Restringe cross-origin por seguridad", "Permite todo", "Solo DNS"],
          answerIndex: 0,
          explanation: "Protección browser."
        },
        {
          question: "CORS header clave...",
          options: ["Access-Control-Allow-Origin", "Content-Length", "ETag"],
          answerIndex: 0,
          explanation: "Orígenes permitidos."
        },
        {
          question: "Preflight es request...",
          options: ["OPTIONS antes de POST cross-origin", "GET siempre", "DNS query"],
          answerIndex: 0,
          explanation: "Verifica permisos."
        },
        {
          question: "HttpOnly cookie...",
          options: ["No accesible desde JS", "Siempre pública", "Sin HTTPS"],
          answerIndex: 0,
          explanation: "Mitiga XSS."
        },
        {
          question: "SameSite cookie...",
          options: ["Mitiga CSRF", "Acelera DNS", "Reemplaza TLS"],
          answerIndex: 0,
          explanation: "Cross-site request."
        },
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE",
      description: "Herramientas esenciales cuando algo no conecta.",
      items: [
        "ping: ICMP echo, latencia básica.",
        "traceroute: saltos hasta destino.",
        "curl: HTTP client CLI completo.",
        "netstat/ss: conexiones activas.",
        "Wireshark intro: captura paquetes."
      ],
      content: "ping mide latencia y reachability. traceroute muestra cada router intermedio. curl debuggea APIs (-v verbose, -I headers only). ss -tuln lista puertos escuchando. Wireshark captura paquetes para análisis profundo — base de Kali. Antes de pentesting, domina diagnóstico legal en tu propia red.",
      codeSnippet: `ping google.com
traceroute github.com
curl -v https://api.github.com`,
      quiz: [
        {
          question: "ping usa...",
          options: ["ICMP echo", "HTTP GET", "DNS TXT"],
          answerIndex: 0,
          explanation: "Echo request/reply."
        },
        {
          question: "traceroute muestra...",
          options: ["Saltos routers al destino", "Solo IP local", "HTML response"],
          answerIndex: 0,
          explanation: "Path discovery."
        },
        {
          question: "curl -v...",
          options: ["Verbose HTTP debug", "Solo ping", "Compila C"],
          answerIndex: 0,
          explanation: "Ver headers y TLS."
        },
        {
          question: "ss -tuln lista...",
          options: ["Puertos escuchando", "Solo DNS", "Archivos"],
          answerIndex: 0,
          explanation: "Socket statistics."
        },
        {
          question: "Wireshark...",
          options: ["Captura y analiza paquetes", "Solo escanea puertos", "Deploy Vercel"],
          answerIndex: 0,
          explanation: "Packet analyzer."
        },
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING",
      description: "Fundamentos éticos y legales antes del curso Kali.",
      items: [
        "Entender la red que vas a auditar.",
        "Puertos: 80 HTTP, 443 HTTPS, 22 SSH.",
        "Recon pasivo vs activo (legal).",
        "Tu propia red/lab primero.",
        "Conecta con Nmap del curso Kali."
      ],
      content: "Kali enseña Nmap, Wireshark, Metasploit — pero sin fundamentos de red es ruido. Saber qué es un puerto, SYN scan, y por qué HTTPS protege antes de intentar bypass. Recon pasivo (OSINT, DNS público) vs activo (port scan) tiene implicaciones legales. Practica SOLO en redes propias o labs autorizados (TryHackMe, HTB). QuimiSell: redes dev → Kali → ciber defensiva.",
      codeSnippet: `# Puertos comunes: 22 SSH, 80 HTTP, 443 HTTPS, 53 DNS
# Siguiente: Curso Kali Linux Nmap`,
      quiz: [
        {
          question: "Antes de Kali domina...",
          options: ["Fundamentos de red y puertos", "Solo Metasploit", "Solo Python"],
          answerIndex: 0,
          explanation: "Base teórica."
        },
        {
          question: "Puerto 443...",
          options: ["HTTPS", "SSH", "DNS"],
          answerIndex: 0,
          explanation: "TLS web."
        },
        {
          question: "Recon activo (port scan)...",
          options: ["Implicaciones legales", "Siempre legal", "Solo OSINT"],
          answerIndex: 0,
          explanation: "Autorización necesaria."
        },
        {
          question: "Practica pentest en...",
          options: ["Red propia o lab autorizado", "Cualquier sitio", "Bancos"],
          answerIndex: 0,
          explanation: "Ética y legalidad."
        },
        {
          question: "Tras este curso sigue...",
          options: ["Kali Linux & Nmap QuimiSell", "Solo matemática", "Autómatas"],
          answerIndex: 0,
          explanation: "Puente curricular."
        },
      ]
    }
  ]
};
