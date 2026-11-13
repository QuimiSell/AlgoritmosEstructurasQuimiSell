import { Course, TutorExercise } from '../domain/models';

export const REDES_DEV_COURSE: Course = {
  "id": "redes_desarrolladores",
  "title": "Redes para Desarrolladores, Microservicios, Protocolos y Arquitectura de APIs",
  "shortTitle": "Redes & Microservicios",
  "badge": "Redes & Protocolos · 20 Módulos",
  "icon": "🌐",
  "description": "El curso que todo ingeniero de software necesita para no culpar al framework: del modelo OSI y TCP/IP a TLS 1.3, HTTP/2, HTTP/3 (QUIC), WebSockets, gRPC con Protobuf, proxies Nginx, seguridad Zero Trust con mTLS, Circuit Breakers y Rate Limiting.",
  "whyStudyTitle": "🌐 ¿Por qué dominar Redes y Protocolos separa a un programador de un Arquitecto de Software?",
  "whyStudyText": "Cada llamada a una API, microservicio o base de datos viaja a través de una red física sujeta a latencia, pérdidas de paquetes y ataques maliciosos. Culpar al framework o asumir que la red es instantánea y 100% confiable es la primera falacia de los sistemas distribuidos. Este curso te forma en los fundamentos reales de la ingeniería de redes: desde el 3-Way Handshake de TCP y los certificados TLS 1.3 hasta los protocolos binarios modernos como gRPC y HTTP/3, preparándote para diseñar sistemas de misión crítica altamente escalables y resilientes.",
  "studyPlanReasons": [
    {
      "id": 1,
      "title": "ARQUITECTURA DE REDES Y MODELOS OSI VS TCP/IP",
      "why": "Las capas de abstracción: comparación entre el modelo teórico OSI de 7 capas y el modelo pragmático TCP/IP de 4 capas utilizado en internet."
    },
    {
      "id": 2,
      "title": "CAPA FÍSICA Y DE ENLACE: ETHERNET, MAC Y ARP",
      "why": "Comunicación en la red local: direcciones MAC físicas, tramas Ethernet, el protocolo ARP de resolución de direcciones y dominios de difusión."
    },
    {
      "id": 3,
      "title": "CAPA DE RED: IPV4, IPV6, SUBNETTING CIDR Y NAT",
      "why": "Enrutamiento global: anatomía del paquete IPv4 e IPv6, cálculo de máscaras de subred CIDR (/24, /16) y Network Address Translation (NAT)."
    },
    {
      "id": 4,
      "title": "DNS: RESOLUCIÓN RECURSIVA, REGISTROS Y DNSSEC",
      "why": "La guía telefónica de internet: árbol jerárquico DNS (Root, TLD, Autoritativos), tipos de registros (A, AAAA, CNAME, TXT, MX) y seguridad con DNSSEC."
    },
    {
      "id": 5,
      "title": "CAPA DE TRANSPORTE: TCP HANDSHAKE, CONTROL DE FLUJO Y CONGESTIÓN",
      "why": "El protocolo confiable de internet: el 3-Way Handshake (SYN, SYN-ACK, ACK), ventanas deslizantes, números de secuencia y control de congestión."
    },
    {
      "id": 6,
      "title": "CAPA DE TRANSPORTE: UDP, STREAMING Y DIFERENCIAS CON TCP",
      "why": "Transporte de baja latencia sin conexión: datagramas UDP, ausencia de retransmisión, streaming en vivo, gaming, DNS y WebRTC."
    },
    {
      "id": 7,
      "title": "SEGURIDAD Y CIFRADO EN TRÁNSITO: TLS 1.3 Y CERTIFICADOS X.509",
      "why": "Criptografía en redes: cifrado simétrico vs asimétrico, el apretón de manos TLS 1.3 (1-RTT y 0-RTT), Diffie-Hellman efímero y autoridades certificadoras (CAs)."
    },
    {
      "id": 8,
      "title": "EL PROTOCOLO HTTP: EVOLUCIÓN DE HTTP/1.0 A HTTP/1.1",
      "why": "La base de la web: cabeceras HTTP, métodos REST, códigos de estado semánticos (2xx, 3xx, 4xx, 5xx), conexiones persistentes (Keep-Alive) y chunked transfer."
    },
    {
      "id": 9,
      "title": "PROTOCOLO HTTP/2: MULTIPLEXACIÓN Y COMPRESIÓN HPACK",
      "why": "Superando las limitaciones de HTTP/1.1: formato binario en marcos (frames), multiplexación de streams en un solo socket TCP, server push y compresión HPACK."
    },
    {
      "id": 10,
      "title": "PROTOCOLO HTTP/3 (QUIC): UDP COMO BASE Y 0-RTT",
      "why": "La revolución del transporte web: QUIC sobre UDP, eliminación del Head-of-Line Blocking de transporte TCP, migración de conexión y apretón de manos 0-RTT."
    },
    {
      "id": 11,
      "title": "TIEMPO REAL: WEBSOCKETS VS SERVER-SENT EVENTS (SSE) VS LONG POLLING",
      "why": "Comunicación bidireccional continua: el Upgrade de HTTP a WebSocket, streaming unidireccional con Server-Sent Events (SSE) para chat de IA y Long Polling."
    },
    {
      "id": 12,
      "title": "ARQUITECTURA DE APIS RESTFUL: PRINCIPIOS DE FIELDING E IDEMPOTENCIA",
      "why": "Diseño de APIs de alta escala: restricciones de Roy Fielding, HATEOAS, diseño de URIs semánticas, métodos HTTP (GET, POST, PUT, PATCH, DELETE) e idempotencia."
    },
    {
      "id": 13,
      "title": "RPC MODERNO: GRPC Y PROTOCOL BUFFERS (PROTOBUF)",
      "why": "Comunicación interna de alta velocidad entre microservicios: gRPC de Google, serialización binaria con Protobuf, contratos fuertemente tipados y HTTP/2."
    },
    {
      "id": 14,
      "title": "PROXIES INVERSOS Y BALANCEO DE CARGA CON NGINX",
      "why": "Puntos de entrada corporativos: Nginx como Reverse Proxy, terminación SSL/TLS, algoritmos de balanceo (Round-Robin, Least Connections, IP Hash) y caching."
    },
    {
      "id": 15,
      "title": "SEGURIDAD WEB EN CAPA DE APLICACIÓN: CORS, CSP Y COOKIES",
      "why": "Defensas del navegador: la política del mismo origen (SOP), configuración correcta de CORS, Content Security Policy (CSP) y cookies seguras."
    },
    {
      "id": 16,
      "title": "AUTENTICACIÓN EN MICROSERVICIOS: MTLS, JWT Y SPIFFE",
      "why": "Seguridad Zero Trust en la red interna: Mutual TLS (mTLS) para autenticación mutua de servidores, tokens JWT y el estándar SPIFFE/SPIRE."
    },
    {
      "id": 17,
      "title": "PATRONES DE RESILIENCIA EN RED: CIRCUIT BREAKER Y RETRIES CON JITTER",
      "why": "Blindando la red ante fallos: el patrón Circuit Breaker (Closed, Open, Half-Open), reintentos con Exponential Backoff y la necesidad matemática de Jitter."
    },
    {
      "id": 18,
      "title": "CONTROL DE TRÁFICO Y PROTECCIÓN CONTRA ABUSO: RATE LIMITING",
      "why": "Defensa de endpoints contra abusos y DDoS: algoritmos Token Bucket y Leaky Bucket, ventanas deslizantes con Redis y respuesta HTTP 429."
    },
    {
      "id": 19,
      "title": "DIAGNÓSTICO Y ANÁLISIS DE PAQUETES: WIRESHARK, TCPDUMP Y WATERFALLS",
      "why": "Herramientas de diagnóstico de red: captura de paquetes con tcpdump en servidores remotos, análisis visual con Wireshark y lectura de waterfalls."
    },
    {
      "id": 20,
      "title": "PROYECTO INTEGRADOR: ARQUITECTURA DE UNA RED GLOBAL RESILIENTE",
      "why": "Diseño integral de una arquitectura distribuida: Nginx Anycast, terminación TLS 1.3, microservicios con gRPC y mTLS, Circuit Breakers y Rate Limiting."
    }
  ],
  "labChallenge": {
    "title": "Diseño y Simulación de una Red Global de Microservicios Resiliente con mTLS, gRPC y Rate Limiting",
    "badge": "Laboratorio de Redes & Arquitectura de Microservicios",
    "description": "Tu objetivo es diseñar la arquitectura de comunicación de red para una plataforma de pagos distribuida: implementarás un reverse proxy Nginx con balanceo least_conn, contratos gRPC con Protocol Buffers, un interceptor de autenticación mTLS y un algoritmo de Rate Limiting Token Bucket que proteja el endpoint de cobros.",
    "requirements": [
      "• Contrato Protobuf: Definir un archivo `.proto` con métodos unarios y streaming.",
      "• Reverse Proxy: Configurar Nginx con redirección HTTPS forzada y balanceo de carga.",
      "• Resiliencia: Implementar un Circuit Breaker con estados Closed, Open y Half-Open.",
      "• Rate Limiter: Programar un Token Bucket con límite estricto de peticiones por segundo.",
      "• Análisis de Red: Explicar mediante un diagrama el flujo de paquetes y certificados."
    ],
    "cleanCodeRules": [
      "• Cero Hardcoding de IPs: Utilizar resolución DNS o variables de entorno.",
      "• Timeouts Obligatorios: Toda llamada de red debe contar con un timeout explícito.",
      "• Idempotencia: Todos los reintentos automáticos deben aplicarse exclusivamente sobre métodos idempotentes."
    ],
    "emailSubject": "Laboratorio QuimiSell: Reto Redes & Microservicios - [Tu Nombre]",
    "emailBodyTemplate": "Hola Profesor QuimiSell,\\n\\nAdjunto el enlace a mi repositorio con la solución al Reto de Redes y Arquitectura de Microservicios.\\n\\nRepositorio: [ENLACE DE GITHUB]\\n\\nResumen de la arquitectura:\\n- Protocolos utilizados (gRPC/HTTP3): \\n- Algoritmo de Rate Limiting: \\n- Estrategia de Resiliencia: \\n\\nSaludos cordiales."
  },
  "modules": [
    {
      "id": 1,
      "title": "MÓDULO 1: ARQUITECTURA DE REDES Y MODELOS OSI VS TCP/IP",
      "description": "Las capas de abstracción: comparación entre el modelo teórico OSI de 7 capas y el modelo pragmático TCP/IP de 4 capas utilizado en internet.",
      "items": [
        "Por qué los ingenieros de software necesitan entender redes en lugar de culpar al framework.",
        "El Modelo OSI de 7 Capas: Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación.",
        "El Modelo TCP/IP de 4 Capas: Acceso a Red, Internet, Transporte, Aplicación.",
        "Encapsulamiento y Desencapsulamiento de Datos: De Datos a Segmentos, Paquetes, Tramas y Bits.",
        "Cabeceras (Headers) y MTU (Maximum Transmission Unit): El límite estándar de 1500 bytes en Ethernet."
      ],
      "content": "## Arquitectura de Redes: Modelos OSI y TCP/IP\n\nCada vez que tu aplicación hace un `fetch('https://api.quimisell.dev/datos')`, los datos no viajan por magia: atraviesan un proceso estricto de **encapsulamiento**.\n\n### Encapsulamiento de Paquetes\n1. **Capa de Aplicación:** Se genera el mensaje HTTP (`GET /datos HTTP/1.1`).\n2. **Capa de Transporte (TCP):** Se le añade una cabecera TCP con el puerto de origen y puerto de destino (443), formando un **Segmento**.\n3. **Capa de Internet (IP):** Se le añade la IP de origen y la IP de destino, formando un **Paquete**.\n4. **Capa de Enlace (Ethernet):** Se le añade la dirección MAC física del router siguiente, formando una **Trama (Frame)**.\n5. **Capa Física:** La trama se convierte en pulsos de luz (fibra) o señales eléctricas.",
      "codeSnippet": "# Comandos esenciales para inspeccionar capas de red en Linux / macOS / Windows\n# 1. Ver la dirección IP y tarjetas de red físicas\nip addr show  # o 'ipconfig' en Windows\n\n# 2. Ver la tabla de enrutamiento del sistema operativo\nip route show\n\n# 3. Inspeccionar conexiones de transporte TCP activas y sockets abiertos\nss -tuln  # o 'netstat -ano' en Windows",
      "quiz": [
        {
          "question": "¿En qué orden ocurre el encapsulamiento de datos al enviar una petición desde una aplicación?",
          "options": [
            "Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace) -> Bits (Física)",
            "Bits -> Trama -> Segmento -> Datos",
            "Paquete -> Trama -> Segmento -> Datos"
          ],
          "answerIndex": 0,
          "explanation": "Cada capa inferior envuelve el paquete de la capa superior agregando su propia cabecera de control hasta llegar al medio físico."
        }
      ]
    },
    {
      "id": 2,
      "title": "MÓDULO 2: CAPA FÍSICA Y DE ENLACE: ETHERNET, MAC Y ARP",
      "description": "Comunicación en la red local: direcciones MAC físicas, tramas Ethernet, el protocolo ARP de resolución de direcciones y dominios de difusión.",
      "items": [
        "Direcciones MAC (Media Access Control): Identificadores de 48 bits grabados en hardware (OUI + NIC).",
        "La Trama Ethernet II: Preámbulo, MAC Origen, MAC Destino, EtherType, Carga útil (Payload) y CRC Checksum.",
        "Address Resolution Protocol (ARP): ¿Cómo sabe mi computadora a qué MAC enviar un paquete destinado a la IP 192.168.1.1?",
        "La Tabla ARP y ataques de envenenamiento ARP (ARP Spoofing / Poisoning).",
        "Switches de Capa 2 vs Routers de Capa 3: Tablas CAM de reenvío por dirección MAC."
      ],
      "content": "## Capa de Enlace: Ethernet y Protocolo ARP\n\nLas direcciones IP son lógicas y sirven para enrutar a nivel global por internet. Sin embargo, en tu red local (LAN o centro de datos), las tarjetas de red se comunican **exclusivamente por direcciones MAC**.\n\n### ¿Cómo funciona ARP?\nSi tu servidor con IP `192.168.1.10` necesita comunicarse con el gateway `192.168.1.1`:\n1. Envía un mensaje **ARP Request** en difusión (Broadcast a `FF:FF:FF:FF:FF:FF`): *\"¿Quién tiene la IP 192.168.1.1? Responda a 192.168.1.10\"*.\n2. El router responde con un **ARP Reply** unicast: *\"La IP 192.168.1.1 está en la MAC 00:1A:2B:3C:4D:5E\"*.\n3. Tu servidor guarda esa respuesta en su **Caché ARP** para no tener que preguntar en cada paquete.",
      "codeSnippet": "# Inspeccionar y diagnosticar la tabla ARP local\n# Ver las asignaciones IP -> Dirección MAC aprendidas por el sistema\narp -a\n\n# Limpiar la caché ARP en caso de desconfiguración o conflicto de red\n# sudo ip neigh flush all",
      "quiz": [
        {
          "question": "¿Cuál es el propósito del protocolo ARP en una red local?",
          "options": [
            "Traducir una dirección lógica IP conocida en la dirección física MAC del dispositivo en la red local",
            "Cifrar contraseñas bancarias",
            "Comprimir archivos en formato ZIP"
          ],
          "answerIndex": 0,
          "explanation": "Las tarjetas de red solo pueden emitir tramas Ethernet hacia direcciones MAC; ARP permite descubrir qué MAC posee la IP buscada."
        }
      ]
    },
    {
      "id": 3,
      "title": "MÓDULO 3: CAPA DE RED: IPV4, IPV6, SUBNETTING CIDR Y NAT",
      "description": "Enrutamiento global: anatomía del paquete IPv4 e IPv6, cálculo de máscaras de subred CIDR (/24, /16) y Network Address Translation (NAT).",
      "items": [
        "Estructura de la cabecera IPv4: TTL (Time to Live), Checksum, Fragmentación y direcciones de 32 bits.",
        "Agotamiento de IPv4 y la arquitectura de IPv6: Direcciones de 128 bits, autoconfiguración SLAAC y ausencia de NAT.",
        "Notación CIDR (Classless Inter-Domain Routing): Cálculo binario de máscaras de red (`/24` = 256 IPs, 254 útiles).",
        "Direcciones IP privadas (RFC 1918): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.",
        "Network Address Translation (NAT): Cómo cientos de servidores comparten una sola IP pública mediante tablas de puertos (PAT).",
        "Diagnóstico de enrutamiento con `traceroute` / `tracert` y análisis del campo TTL."
      ],
      "content": "## Capa de Red: Direccionamiento IP y Subnetting CIDR\n\nEl protocolo IP es no orientado a conexión y no confiable (**Best Effort**): se encarga de transportar paquetes de origen a destino a través de múltiples routers, pero no garantiza que lleguen en orden ni que no se pierdan.\n\n### Notación CIDR en Cloud (AWS VPC, GCP, Azure)\nCuando diseñas una arquitectura de nube, debes dimensionar tus subredes con notación CIDR:\n* `/24`: 32 - 24 = 8 bits para hosts ➔ $2^8 = 256$ IPs (254 asignables).\n* `/16`: 32 - 16 = 16 bits para hosts ➔ $2^{16} = 65,536$ IPs.\n\n### El Campo TTL (Time to Live)\nCada paquete IP tiene un contador TTL (típicamente 64 o 128). Cada router por el que pasa decrementa el TTL en 1. Si llega a 0, el router lo destruye y envía un mensaje ICMP Time Exceeded, evitando que paquetes huérfanos circulen en bucles infinitos por internet.",
      "codeSnippet": "# Análisis de rutas y salto de paquetes con traceroute\n# Rastrea cada router (salto) por el que viaja tu paquete hacia el destino\ntraceroute -n 8.8.8.8  # o 'tracert -d 8.8.8.8' en Windows\n\n# Ping para verificar latencia y pérdida de paquetes ICMP\nping -c 4 api.quimisell.dev",
      "quiz": [
        {
          "question": "¿Cuántas direcciones IP utilizables para servidores o hosts ofrece una subred con máscara `/24`?",
          "options": [
            "254 (de las 256 totales, la primera es ID de red y la última es difusión)",
            "256",
            "1024"
          ],
          "answerIndex": 0,
          "explanation": "En IPv4, la dirección más baja (ej. `.0`) identifica a la red y la más alta (ej. `.255`) es el broadcast, dejando 254 IPs asignables a máquinas."
        }
      ]
    },
    {
      "id": 4,
      "title": "MÓDULO 4: DNS: RESOLUCIÓN RECURSIVA, REGISTROS Y DNSSEC",
      "description": "La guía telefónica de internet: árbol jerárquico DNS (Root, TLD, Autoritativos), tipos de registros (A, AAAA, CNAME, TXT, MX) y seguridad con DNSSEC.",
      "items": [
        "La jerarquía global de DNS: Servidores Raíz (13 clusters mundiales), servidores TLD (.com, .dev) y servidores autoritativos.",
        "Resolución Recursiva vs Resolución Iterativa paso a paso.",
        "Tipos de registros fundamentales: `A` (IPv4), `AAAA` (IPv6), `CNAME` (Alias canónico), `MX` (Correo), `TXT` (SPF/DKIM/Verificación).",
        "El valor TTL (Time To Live) de DNS y estrategias de migración de servidores sin downtime.",
        "Ataques de DNS Spoofing / Cache Poisoning y defensas criptográficas con DNSSEC.",
        "Diagnóstico profesional de consultas DNS con `dig` y `nslookup`."
      ],
      "content": "## Sistema de Nombres de Dominio (DNS)\n\nCuando escribes `api.quimisell.dev`:\n1. Tu computadora consulta a su **DNS recursivo** local (ej. `1.1.1.1` de Cloudflare o `8.8.8.8` de Google).\n2. Si no está en caché, el resolver consulta a los **Servidores Raíz (Root Servers)**: responden con los servidores del TLD `.dev`.\n3. El resolver consulta al **TLD Server de `.dev`**: responde con los **Servidores Autoritativos** de QuimiSell (ej. `ns1.vercel-dns.com`).\n4. El servidor autoritativo devuelve la IP final: `76.76.21.21` con su TTL correspondiente.",
      "codeSnippet": "# Comandos de diagnóstico DNS profesional con dig\n# 1. Consultar registro tipo A de un dominio con respuesta detallada\ndig api.quimisell.dev A\n\n# 2. Consultar directamente a un servidor DNS específico (ej. Cloudflare 1.1.1.1)\ndig @1.1.1.1 api.quimisell.dev +short\n\n# 3. Rastrear la jerarquía completa desde la raíz hasta el servidor autoritativo\ndig +trace api.quimisell.dev",
      "quiz": [
        {
          "question": "¿Cuál es la función del registro de tipo `CNAME` en DNS?",
          "options": [
            "Crear un alias de un nombre de dominio hacia otro nombre de dominio canónico existente",
            "Asignar una dirección IPv4 directa",
            "Configurar el servidor de correo electrónico"
          ],
          "answerIndex": 0,
          "explanation": "CNAME redirige un subdominio (como `www.ejemplo.com`) hacia otro nombre de host (como `ejemplo.com` o un dominio de Vercel)."
        }
      ]
    },
    {
      "id": 5,
      "title": "MÓDULO 5: CAPA DE TRANSPORTE: TCP HANDSHAKE, CONTROL DE FLUJO Y CONGESTIÓN",
      "description": "El protocolo confiable de internet: el 3-Way Handshake (SYN, SYN-ACK, ACK), ventanas deslizantes, números de secuencia y control de congestión.",
      "items": [
        "Características de TCP: Confiable, orientado a conexión, en orden y con verificación de errores.",
        "El Three-Way Handshake: SYN ➔ SYN-ACK ➔ ACK (establecimiento de conexión y sincronización de números de secuencia ISN).",
        "El Four-Way Teardown para cierre ordenado: FIN ➔ ACK ➔ FIN ➔ ACK y estado TIME_WAIT.",
        "Ventanas Deslizantes (Sliding Window): Control de flujo entre emisor y receptor según el búfer disponible.",
        "Algoritmos de Control de Congestión: Slow Start, Congestion Avoidance, Fast Retransmit y BBR de Google.",
        "El problema del Head-of-Line Blocking a nivel de transporte TCP."
      ],
      "content": "## Capa de Transporte: El Protocolo TCP\n\nTCP transforma un medio físico no confiable en un canal bidireccional continuo donde los bytes llegan completos y en el orden exacto.\n\n### El 3-Way Handshake\n```\nCliente                               Servidor\n   │                                     │\n   │────────── SYN (seq=100) ───────────►│ (Cliente propone iniciar)\n   │                                     │\n   │◄────── SYN-ACK (seq=300, ack=101) ──│ (Servidor acepta y sincroniza)\n   │                                     │\n   │────────── ACK (ack=301) ───────────►│ (Conexión ESTABLISHED)\n   │                                     │\n```\nCada conexión TCP requiere este viaje de ida y vuelta (**1 RTT - Round Trip Time**) antes de que la aplicación pueda enviar el primer byte de datos.",
      "codeSnippet": "// Ejemplo en Node.js: Creación de un Servidor TCP puro\nimport net from 'net';\n\nconst server = net.createServer((socket) => {\n  console.log('Cliente conectado desde:', socket.remoteAddress);\n\n  socket.on('data', (data) => {\n    console.log('Bytes TCP recibidos:', data.toString());\n    socket.write('ACK desde Servidor TCP\\n');\n  });\n\n  socket.on('end', () => {\n    console.log('Cliente desconectado.');\n  });\n});\n\nserver.listen(4000, () => {\n  console.log('Servidor TCP escuchando en puerto 4000');\n});",
      "quiz": [
        {
          "question": "¿Cuántos viajes de ida y vuelta (Round-Trip Times - RTT) requiere el 3-Way Handshake de TCP para establecer la conexión antes de enviar datos?",
          "options": [
            "1 RTT completo",
            "0 RTT",
            "5 RTT"
          ],
          "answerIndex": 0,
          "explanation": "El intercambio de SYN -> SYN-ACK -> ACK consume exactamente un ciclo completo de ida y vuelta de red (1 RTT)."
        }
      ]
    },
    {
      "id": 6,
      "title": "MÓDULO 6: CAPA DE TRANSPORTE: UDP, STREAMING Y DIFERENCIAS CON TCP",
      "description": "Transporte de baja latencia sin conexión: datagramas UDP, ausencia de retransmisión, streaming en vivo, gaming, DNS y WebRTC.",
      "items": [
        "Características de UDP (User Datagram Protocol): Sin conexión, sin confirmación de entrega, sin control de congestión, mínima cabecera (8 bytes).",
        "Por qué UDP es preferido para Streaming de Video, VoIP, Juegos en línea y consultas DNS.",
        "El costo del reenvío: Por qué en llamadas de voz es mejor perder un paquete de audio que pausar la llamada para retransmitirlo.",
        "WebRTC: Comunicación P2P en tiempo real sobre UDP con cifrado SRTP.",
        "Comparativa de sobrecarga: Cabecera TCP (20-60 bytes) vs Cabecera UDP (8 bytes fijos)."
      ],
      "content": "## UDP: La Velocidad Máxima sin Sobrecarga\n\nMientras que TCP prioriza la **integridad absoluta** (ningún byte puede faltar), UDP prioriza la **inmediatez temporal**.\n\nSi estás en una videollamada y se pierde el paquete con la imagen de hace 200 milisegundos, retransmitirlo no tiene sentido: esa imagen ya es obsoleta. UDP descarta el paquete y sigue adelante sin introducir pausas en la transmisión.",
      "codeSnippet": "// Servidor UDP en Node.js usando el módulo dgram\nimport dgram from 'dgram';\n\nconst server = dgram.createSocket('udp4');\n\nserver.on('message', (msg, rinfo) => {\n  console.log(\\`Datagrama UDP recibido de \\${rinfo.address}:\\${rinfo.port}: \\${msg}\\`);\n});\n\nserver.on('listening', () => {\n  const address = server.address();\n  console.log(\\`Servidor UDP escuchando en \\${address.address}:\\${address.port}\\`);\n});\n\nserver.bind(41234);",
      "quiz": [
        {
          "question": "¿Por qué las consultas DNS y las videollamadas en vivo utilizan UDP en lugar de TCP?",
          "options": [
            "Porque no necesitan la sobrecarga del handshake ni retransmisiones lentas; priorizan responder de inmediato con la menor latencia posible",
            "Porque UDP no usa direcciones IP",
            "Porque TCP está prohibido en servidores web"
          ],
          "answerIndex": 0,
          "explanation": "UDP no tiene sobrecarga de establecimiento de conexión ni pausas por retransmisión, siendo ideal para operaciones atómicas rápidas o datos en tiempo real."
        }
      ]
    },
    {
      "id": 7,
      "title": "MÓDULO 7: SEGURIDAD Y CIFRADO EN TRÁNSITO: TLS 1.3 Y CERTIFICADOS X.509",
      "description": "Criptografía en redes: cifrado simétrico vs asimétrico, el apretón de manos TLS 1.3 (1-RTT y 0-RTT), Diffie-Hellman efímero y autoridades certificadoras (CAs).",
      "items": [
        "La necesidad del cifrado: Proteger contra intercepción (sniffing) y manipulación (Man-in-the-Middle).",
        "Criptografía Híbrida: Cifrado asimétrico (RSA / Curvas Elípticas) para intercambiar claves; Cifrado simétrico (AES-GCM / ChaCha20) para el tráfico de datos.",
        "Evolución de TLS 1.2 a TLS 1.3: Eliminación de suites criptográficas inseguras y reducción del handshake a 1 solo RTT.",
        "Zero RTT Resumption (0-RTT): Reanudación instantánea de sesiones previas en TLS 1.3.",
        "Certificados X.509 y la Cadena de Confianza: De las Autoridades Certificadoras Raíz (Root CAs) a Let's Encrypt.",
        "Perfect Forward Secrecy (PFS): Garantizar que revelar la clave privada del servidor en el futuro no descifre el tráfico grabado del pasado."
      ],
      "content": "## TLS 1.3: La Criptografía que Protege la Web\n\nTLS (Transport Layer Security) se sitúa entre la capa de transporte (TCP) y la de aplicación (HTTP).\n\n### La Revolución de TLS 1.3\nEn TLS 1.2, establecer una conexión HTTPS requería 2 viajes de ida y vuelta (2 RTTs) solo para la criptografía, sumados al 1 RTT de TCP (3 RTTs en total antes de pedir la web).\n\n**TLS 1.3 redujo esto a 1 solo RTT**:\n1. En el primer mensaje `Client Hello`, el navegador envía de una vez sus parámetros criptográficos (Diffie-Hellman keyshare).\n2. El servidor responde con su certificado y su parte de la clave, y a partir de ese instante todo el tráfico está cifrado con **Perfect Forward Secrecy (PFS)**.",
      "codeSnippet": "# Inspeccionar el certificado TLS y handshake de cualquier servidor\nopenssl s_client -connect api.quimisell.dev:443 -tls1_3\n\n# Ver los detalles del certificado X.509 (fechas de validez, emisor, SANs)\nopenssl s_client -connect api.quimisell.dev:443 -showcerts </dev/null | openssl x509 -text -noout",
      "quiz": [
        {
          "question": "¿Qué propiedad garantiza 'Perfect Forward Secrecy' (PFS) en TLS 1.3?",
          "options": [
            "Que incluso si la clave privada del servidor es robada en el futuro, las comunicaciones pasadas grabadas por atacantes no pueden ser descifradas porque cada sesión usó claves efímeras únicas",
            "Que la conexión nunca se caerá",
            "Que el certificado dura 100 años"
          ],
          "answerIndex": 0,
          "explanation": "PFS genera claves de sesión efímeras e independientes que se destruyen al cerrar la conexión, impidiendo el descifrado retroactivo."
        }
      ]
    },
    {
      "id": 8,
      "title": "MÓDULO 8: EL PROTOCOLO HTTP: EVOLUCIÓN DE HTTP/1.0 A HTTP/1.1",
      "description": "La base de la web: cabeceras HTTP, métodos REST, códigos de estado semánticos (2xx, 3xx, 4xx, 5xx), conexiones persistentes (Keep-Alive) y chunked transfer.",
      "items": [
        "Anatomía de una solicitud HTTP: Método, URI, Versión, Cabeceras y Cuerpo.",
        "Anatomía de una respuesta HTTP: Versión, Código de estado, Frase de motivo, Cabeceras y Cuerpo.",
        "Semántica de Códigos de Estado: 200 (OK), 201 (Created), 204 (No Content), 301 (Moved Permanently), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Error), 503 (Service Unavailable).",
        "HTTP/1.0 vs HTTP/1.1: El salto revolucionario de `Connection: keep-alive` (reutilización de sockets TCP para múltiples requests).",
        "Chunked Transfer Encoding: Envío de streaming de datos cuando el tamaño total es desconocido de antemano.",
        "El límite de 6 conexiones TCP concurrentes por dominio en navegadores modernos."
      ],
      "content": "## El Protocolo HTTP/1.1\n\nEn HTTP/1.0, cada recurso individual (el HTML, cada imagen, cada archivo CSS) abría y cerraba una conexión TCP nueva, requiriendo un handshake TCP completo para cada archivo.\n\n**HTTP/1.1 introdujo Keep-Alive por defecto**:\nLa misma conexión TCP abierta permanece viva para solicitar múltiples recursos en serie, reduciendo drásticamente la latencia de carga.",
      "codeSnippet": "// Petición HTTP cruda con formato textual de protocolo\n// GET /api/productos HTTP/1.1\n// Host: api.quimisell.dev\n// User-Agent: Mozilla/5.0\n// Accept: application/json\n// Connection: keep-alive\n\n// Respuesta HTTP cruda:\n// HTTP/1.1 200 OK\n// Content-Type: application/json; charset=utf-8\n// Content-Length: 42\n// Connection: keep-alive\n//\n// {\"status\":\"ok\",\"mensaje\":\"Hola QuimiSell\"}",
      "quiz": [
        {
          "question": "¿Cuál es la principal mejora que introdujo HTTP/1.1 frente a HTTP/1.0?",
          "options": [
            "Conexiones persistentes (Keep-Alive) que permiten reutilizar la misma conexión TCP para múltiples solicitudes y respuestas consecutivas",
            "Cifrado cuántico",
            "Transmisión de video en 4K"
          ],
          "answerIndex": 0,
          "explanation": "Keep-Alive evita la sobrecarga de tener que abrir y cerrar un socket TCP (con su 3-way handshake) para cada imagen o recurso descargado."
        }
      ]
    },
    {
      "id": 9,
      "title": "MÓDULO 9: PROTOCOLO HTTP/2: MULTIPLEXACIÓN Y COMPRESIÓN HPACK",
      "description": "Superando las limitaciones de HTTP/1.1: formato binario en marcos (frames), multiplexación de streams en un solo socket TCP, server push y compresión HPACK.",
      "items": [
        "El cuello de botella de HTTP/1.1: El Head-of-Line Blocking a nivel de aplicación (solicitudes en cola serial).",
        "La transición de texto plano a Protocolo Binario: Tramas (Frames), Mensajes y Flujos (Streams).",
        "Multiplexación Real: Enviar decenas de peticiones y respuestas simultáneas intercaladas en una única conexión TCP.",
        "Priorización de Streams y Dependencias de Carga.",
        "Compresión de Cabeceras con HPACK: Eliminación de redundancia de headers repetitivos (User-Agent, Cookies).",
        "Por qué HTTP/2 hizo obsoletos los viejos hacks web (sprites de imágenes, inlining y domain sharding)."
      ],
      "content": "## HTTP/2: Multiplexación de Streams\n\nEn HTTP/1.1, si una imagen pesada tardaba 3 segundos en descargarse, ninguna otra solicitud podía usar esa conexión TCP hasta que terminara (Head-of-Line Blocking de aplicación).\n\n**HTTP/2 solucionó esto dividiendo el tráfico en tramas binarias intercaladas sobre un solo socket TCP**:\n* El navegador abre **una sola conexión TCP** con el servidor.\n* Puede solicitar 50 recursos a la vez; el servidor responde trozos de cada archivo con un ID de stream, y el navegador los reconstruye en paralelo sin bloquearse.",
      "codeSnippet": "# Comprobar si un servidor soporta HTTP/2 usando curl\ncurl -I --http2 https://api.quimisell.dev\n\n# Inspeccionar el protocolo negociado mediante ALPN en el handshake TLS\nopenssl s_client -connect api.quimisell.dev:443 -alpn h2",
      "quiz": [
        {
          "question": "¿Qué problema resuelve la multiplexación de HTTP/2?",
          "options": [
            "Elimina el bloqueo de cabecera de línea (Head-of-Line Blocking) a nivel de HTTP, permitiendo enviar múltiples peticiones y respuestas simultáneas en un solo socket TCP",
            "Permite navegar sin internet",
            "Reduce el consumo de batería del teclado"
          ],
          "answerIndex": 0,
          "explanation": "La multiplexación permite que decenas de peticiones viajen en paralelo por la misma conexión TCP sin tener que esperar a que la anterior termine."
        }
      ]
    },
    {
      "id": 10,
      "title": "MÓDULO 10: PROTOCOLO HTTP/3 (QUIC): UDP COMO BASE Y 0-RTT",
      "description": "La revolución del transporte web: QUIC sobre UDP, eliminación del Head-of-Line Blocking de transporte TCP, migración de conexión y apretón de manos 0-RTT.",
      "items": [
        "La ironía de HTTP/2: Si se pierde un solo paquete TCP en la red, TODOS los streams multiplexados se congelan.",
        "El Head-of-Line Blocking a nivel de Transporte de TCP y por qué TCP no podía evolucionar más.",
        "QUIC (Quick UDP Internet Connections): Diseñado por Google y estandarizado por el IETF.",
        "HTTP/3: HTTP sobre QUIC y UDP en lugar de TCP.",
        "Cero RTT Handshake: Unificación del apretón de transporte y criptográfico TLS 1.3 en un solo viaje.",
        "Migración de Conexión: Cambiar de WiFi a 4G/5G en tu teléfono sin que la llamada o descarga se interrumpa (Connection ID independiente de la IP)."
      ],
      "content": "## HTTP/3 y el Protocolo QUIC\n\nHTTP/2 tenía un defecto fatal heredado de TCP: si en una red móvil con mala cobertura se perdía un solo paquete, el kernel de TCP detenía **todos los streams multiplexados** hasta que ese paquete fuera retransmitido y confirmado.\n\n**HTTP/3 resolvió esto reemplazando a TCP por QUIC sobre UDP**:\n* Cada stream en QUIC es completamente independiente: si se pierde un paquete del stream 3, los streams 1, 2, 4 y 5 siguen recibiendo datos a máxima velocidad.\n* **Migración de Conexión:** Las conexiones QUIC no se identifican por la tupla IP:Puerto, sino por un **Connection ID criptográfico**. Si sales de tu casa y tu teléfono pasa de WiFi a datos móviles (cambiando tu dirección IP pública), tu descarga continúa sin reiniciar la conexión.",
      "codeSnippet": "# Verificar soporte de HTTP/3 con curl (requiere versión compilada con nghttp3/quiche)\ncurl --http3 -I https://cloudflare.com\n\n# En cabeceras de respuesta, el servidor anuncia HTTP/3 mediante Alt-Svc:\n# alt-svc: h3=\":443\"; ma=86400",
      "quiz": [
        {
          "question": "¿Qué ocurre en HTTP/3 cuando tu teléfono móvil cambia de la red WiFi del hogar a la red de datos móviles 4G/5G?",
          "options": [
            "La conexión se mantiene viva sin interrupción gracias a la 'Migración de Conexión' basada en Connection ID, en lugar de desconectarse como ocurría con TCP",
            "El teléfono debe reiniciarse",
            "La página web se borra del navegador"
          ],
          "answerIndex": 0,
          "explanation": "QUIC identifica las sesiones con un Connection ID único independiente de la dirección IP, permitiendo roaming transparente entre redes."
        }
      ]
    },
    {
      "id": 11,
      "title": "MÓDULO 11: TIEMPO REAL: WEBSOCKETS VS SERVER-SENT EVENTS (SSE) VS LONG POLLING",
      "description": "Comunicación bidireccional continua: el Upgrade de HTTP a WebSocket, streaming unidireccional con Server-Sent Events (SSE) para chat de IA y Long Polling.",
      "items": [
        "Limitaciones del modelo Request-Response de HTTP para experiencias en tiempo real.",
        "Long Polling: El hack histórico de retener la respuesta abierta en el servidor.",
        "WebSockets (RFC 6455): Conexión bidireccional (Full-Duplex) persistente iniciada mediante un HTTP Upgrade.",
        "Server-Sent Events (SSE): Streaming unidireccional del servidor al cliente sobre HTTP estándar (`Content-Type: text/event-stream`).",
        "Por qué las interfaces de Inteligencia Artificial (ChatGPT, Gemini) prefieren SSE sobre WebSockets.",
        "Manejo de Heartbeats (Ping/Pong) y reconexión automática ante cortes de red."
      ],
      "content": "## WebSockets vs Server-Sent Events (SSE)\n\nPara aplicaciones en tiempo real existen dos tecnologías principales:\n\n1. **WebSockets (Full-Duplex Bidireccional):** Cliente y servidor pueden enviarse mensajes en cualquier momento con mínima sobrecarga (cabecera de 2 bytes). Ideal para videojuegos multijugador, plataformas de trading financiero o herramientas colaborativas (estilo Figma).\n2. **Server-Sent Events - SSE (Unidireccional Servidor -> Cliente):** Corre sobre HTTP estándar. Si el cliente solo necesita recibir texto en streaming (como tokens de un modelo LLM o cotizaciones de bolsa), SSE es superior porque soporta compresión HTTP, HTTP/2 multiplexing y reconexión automática nativa sin librerías complejas.",
      "codeSnippet": "// Ejemplo: Servidor de Streaming SSE en Node.js (Patrón ChatGPT)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/stream-ia', (req, res) => {\n  // Configuración de cabeceras SSE obligatorias\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n\n  let tokenCount = 0;\n  const interval = setInterval(() => {\n    tokenCount++;\n    // Enviar evento SSE con formato data: <contenido>\\n\\n\n    res.write(\\`data: \\${JSON.stringify({ token: \\`Palabra \\${tokenCount}\\` })}\\n\\n\\`);\n\n    if (tokenCount >= 5) {\n      clearInterval(interval);\n      res.write('data: [DONE]\\n\\n');\n      res.end();\n    }\n  }, 500);\n});",
      "quiz": [
        {
          "question": "¿Por qué las aplicaciones de streaming de IA (como ChatGPT) utilizan Server-Sent Events (SSE) en lugar de WebSockets?",
          "options": [
            "Porque es un flujo unidireccional simple sobre HTTP estándar que se integra nativamente con balanceadores, proxies y HTTP/2 sin requerir un protocolo especial",
            "Porque WebSockets está prohibido en navegadores",
            "Porque SSE es más lento"
          ],
          "answerIndex": 0,
          "explanation": "El streaming de texto de IA es unidireccional (del servidor al cliente); SSE sobre HTTP estándar ofrece reconexión automática y funciona detrás de cualquier proxy."
        }
      ]
    },
    {
      "id": 12,
      "title": "MÓDULO 12: ARQUITECTURA DE APIS RESTFUL: PRINCIPIOS DE FIELDING E IDEMPOTENCIA",
      "description": "Diseño de APIs de alta escala: restricciones de Roy Fielding, HATEOAS, diseño de URIs semánticas, métodos HTTP (GET, POST, PUT, PATCH, DELETE) e idempotencia.",
      "items": [
        "La tesis doctoral de Roy Fielding (2000): REST no es un framework, es un estilo arquitectónico.",
        "Restricciones formales de REST: Cliente-Servidor, Sin Estado (Stateless), Cacheable, Interfaz Uniforme, Sistema en Capas.",
        "Métodos Seguros vs Métodos Idempotentes: La propiedad matemática de la Idempotencia ($f(f(x)) = f(x)$).",
        "Diferencia crítica entre PUT (reemplazo completo idempotente) y PATCH (modificación parcial no necesariamente idempotente).",
        "Diseño de URIs limpias orientadas a sustantivos (`/usuarios/123/pedidos` vs `/obtenerPedidosUsuario`).",
        "Estrategias de versionado de APIs: Por URI (`/v1/`), por cabeceras (`Accept: application/vnd.quimisell.v1+json`) o por query params."
      ],
      "content": "## Principios de APIs RESTful e Idempotencia\n\nUna operación es **Idempotente** si ejecutarla una sola vez produce exactamente el mismo resultado y estado en el sistema que ejecutarla diez veces consecutivas.\n\n| Método HTTP | ¿Es Seguro? | ¿Es Idempotente? | Semántica de Operación |\n|---|---|---|---|\n| `GET` | ✅ Sí | ✅ Sí | Consulta de lectura (no muta estado) |\n| `POST` | ❌ No | ❌ No | Creación de recursos (genera un nuevo ID en cada llamada) |\n| `PUT` | ❌ No | ✅ Sí | Reemplazo completo del recurso en ese ID |\n| `DELETE` | ❌ No | ✅ Sí | Eliminación del recurso (una vez borrado, sigue borrado) |\n| `PATCH` | ❌ No | Depende | Modificación parcial de campos específicos |",
      "codeSnippet": "// Ejemplo de API RESTful semántica con Express\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\n// GET: Seguro e Idempotente\napp.get('/api/v1/usuarios/:id', (req, res) => {\n  res.status(200).json({ id: req.params.id, nombre: 'Selvin' });\n});\n\n// POST: Ni seguro ni idempotente (Crea nuevo recurso)\napp.post('/api/v1/usuarios', (req, res) => {\n  res.status(201).json({ id: 'nuevo-uuid-123', ...req.body });\n});\n\n// PUT: Idempotente (Reemplaza el recurso completo en ese ID)\napp.put('/api/v1/usuarios/:id', (req, res) => {\n  res.status(200).json({ id: req.params.id, ...req.body });\n});",
      "quiz": [
        {
          "question": "Si una conexión de red falla tras enviar un request y el cliente reintenta la petición automáticamente, ¿cuál de los siguientes métodos garantiza que no se crearán duplicados por su idempotencia?",
          "options": [
            "`PUT`",
            "`POST`",
            "Ninguno"
          ],
          "answerIndex": 0,
          "explanation": "`PUT` opera sobre una URI fija reemplazando su contenido; reintentar un `PUT` 5 veces deja el recurso en el mismo estado, mientras que `POST` crearía 5 registros nuevos."
        }
      ]
    },
    {
      "id": 13,
      "title": "MÓDULO 13: RPC MODERNO: GRPC Y PROTOCOL BUFFERS (PROTOBUF)",
      "description": "Comunicación interna de alta velocidad entre microservicios: gRPC de Google, serialización binaria con Protobuf, contratos fuertemente tipados y HTTP/2.",
      "items": [
        "Por qué JSON sobre HTTP/1.1 es lento para comunicación interna entre microservicios en centros de datos.",
        "Protocol Buffers (Protobuf): Esquemas binarios compactos con codificación Varint y TLV.",
        "Ahorro de ancho de banda y CPU: Comparación de tamaño y velocidad de serialización (Protobuf vs JSON).",
        "Los 4 Tipos de Métodos en gRPC: Unario, Server Streaming, Client Streaming y Streaming Bidireccional.",
        "Generación automática de clientes y servidores en TypeScript, Go, Python, Java y Rust desde un archivo `.proto`.",
        "Manejo de códigos de estado de gRPC (OK, CANCELLED, DEADLINE_EXCEEDED, NOT_FOUND)."
      ],
      "content": "## gRPC y Protocol Buffers: La Red de los Microservicios\n\nEn arquitecturas de microservicios con cientos de llamadas por segundo, parsear texto JSON y serializar strings consume gigabytes de ancho de banda y ciclos de CPU innecesarios.\n\n**gRPC (creado por Google)** utiliza:\n1. **HTTP/2 como transporte subyacente:** Multiplexación nativa y streams bidireccionales.\n2. **Protocol Buffers:** Un payload de 1,400 bytes en JSON se reduce a 300 bytes binarios en Protobuf, y la deserialización es hasta 10 veces más rápida.",
      "codeSnippet": "// archivo: usuario.proto\nsyntax = \"proto3\";\n\npackage quimisell.usuarios;\n\nservice UsuarioService {\n  // Método RPC Unario estándar\n  rpc ObtenerUsuario (UsuarioRequest) returns (UsuarioResponse);\n  \n  // Método RPC con Streaming de servidor\n  rpc ListarUsuariosActivos (Vacio) returns (stream UsuarioResponse);\n}\n\nmessage UsuarioRequest {\n  string id = 1; // El número 1 es el tag binario del campo\n}\n\nmessage UsuarioResponse {\n  string id = 1;\n  string email = 2;\n  int32 saldo_centavos = 3;\n  bool esta_activo = 4;\n}\n\nmessage Vacio {}",
      "quiz": [
        {
          "question": "¿Por qué gRPC con Protocol Buffers es mucho más rápido y ligero que REST con JSON?",
          "options": [
            "Porque codifica los datos en formato binario compacto usando tags numéricos en lugar de nombres de texto repetitivos, y corre sobre HTTP/2 multiplexado",
            "Porque no requiere tarjeta de red",
            "Porque solo funciona en servidores Google"
          ],
          "answerIndex": 0,
          "explanation": "Protobuf no serializa los nombres de las claves en cada mensaje (usa tags de 1 byte) y genera representaciones binarias compactas que la CPU procesa en microsegundos."
        }
      ]
    },
    {
      "id": 14,
      "title": "MÓDULO 14: PROXIES INVERSOS Y BALANCEO DE CARGA CON NGINX",
      "description": "Puntos de entrada corporativos: Nginx como Reverse Proxy, terminación SSL/TLS, algoritmos de balanceo (Round-Robin, Least Connections, IP Hash) y caching.",
      "items": [
        "Forward Proxy (Proxy hacia adelante) vs Reverse Proxy (Proxy inverso).",
        "Roles del Reverse Proxy: Ocultar topología interna, Terminación SSL/TLS, Compresión Gzip/Brotli y Caching estático.",
        "Algoritmos de Balanceo de Carga: Round-Robin, Least Connections (Menor número de conexiones activas), IP Hash (Afinidad de sesión).",
        "Configuración de bloques `upstream` y `server` en Nginx.",
        "Healthchecks activos y pasivos para retirar servidores caídos del pool de balanceo.",
        "Inyección de cabeceras de proxy: `X-Forwarded-For`, `X-Forwarded-Proto`, `X-Real-IP`."
      ],
      "content": "## Proxies Inversos y Balanceo de Carga con Nginx\n\nUn **Reverse Proxy** se sitúa frente a tus servidores de aplicación:\n* Los clientes solo conocen la IP pública de Nginx.\n* Nginx descarga a los servidores de Node.js/Python de la costosa tarea de descifrar TLS.\n* Distribuye las peticiones entre 5 instancias backend según su carga.",
      "codeSnippet": "# Configuración de Nginx (/etc/nginx/nginx.conf)\nhttp {\n  # Definición del grupo de servidores backend (Upstream)\n  upstream api_cluster {\n    least_conn; # Algoritmo: enviar a la instancia con menos conexiones\n    server 10.0.1.10:3000 max_fails=3 fail_timeout=10s;\n    server 10.0.1.11:3000 max_fails=3 fail_timeout=10s;\n    server 10.0.1.12:3000 backup; # Servidor de respaldo\n  }\n\n  server {\n    listen 80;\n    server_name api.quimisell.dev;\n    return 301 https://$host$request_uri; # Redirección forzada a HTTPS\n  }\n\n  server {\n    listen 443 ssl http2;\n    server_name api.quimisell.dev;\n\n    ssl_certificate /etc/letsencrypt/live/api.quimisell.dev/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/api.quimisell.dev/privkey.pem;\n\n    location / {\n      proxy_pass http://api_cluster;\n      proxy_set_header Host $host;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n      proxy_set_header X-Forwarded-Proto $scheme;\n    }\n  }\n}",
      "quiz": [
        {
          "question": "¿Qué algoritmo de balanceo de carga en Nginx distribuye cada petición al servidor que tiene menos conexiones activas en ese instante?",
          "options": [
            "`least_conn`",
            "`round_robin`",
            "`ip_hash`"
          ],
          "answerIndex": 0,
          "explanation": "`least_conn` previene que un servidor que está procesando peticiones lentas se sobrecargue, enviando nuevo tráfico a servidores con menor carga activa."
        }
      ]
    },
    {
      "id": 15,
      "title": "MÓDULO 15: SEGURIDAD WEB EN CAPA DE APLICACIÓN: CORS, CSP Y COOKIES",
      "description": "Defensas del navegador: la política del mismo origen (SOP), configuración correcta de CORS, Content Security Policy (CSP) y cookies seguras.",
      "items": [
        "Same-Origin Policy (SOP): La regla de oro del navegador (mismo protocolo, dominio y puerto).",
        "Cross-Origin Resource Sharing (CORS): Cabeceras `Access-Control-Allow-Origin`, preflight requests (OPTIONS).",
        "El grave error de seguridad de configurar `Access-Control-Allow-Origin: *` con credenciales.",
        "Content Security Policy (CSP): La defensa definitiva contra Cross-Site Scripting (XSS).",
        "Atributos de Cookies de Sesión: `HttpOnly` (inmune a robo por JavaScript), `Secure` (solo HTTPS), `SameSite=Strict/Lax` (anti-CSRF)."
      ],
      "content": "## Seguridad Web: CORS y Content Security Policy (CSP)\n\n### El Mito Común sobre CORS\nMuchos desarrolladores creen erróneamente que CORS es un mecanismo para bloquear hackers. **CORS es una protección para el navegador del usuario, no para el servidor**:\n* Un atacante usando `curl` o Python puede llamar a tu API sin que CORS lo detenga.\n* CORS le dice al navegador de un usuario en `sitio-malicioso.com` que no tiene permiso para leer las respuestas de `tu-banco.com`.",
      "codeSnippet": "// Configuración segura de CORS y Cookies en Express\nimport cors from 'cors';\nimport cookieParser from 'cookie-parser';\n\napp.use(cors({\n  origin: 'https://app.quimisell.dev', // Dominio explícito permitido (NUNCA '*' si hay credenciales)\n  credentials: true, // Permitir envío de cookies de autenticación\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));\n\n// Generación de Cookie de Sesión con máxima seguridad\nres.cookie('token_sesion', jwtToken, {\n  httpOnly: true,  // Previene que document.cookie sea robado por ataques XSS\n  secure: true,    // Solo viaja a través de conexiones cifradas HTTPS\n  sameSite: 'lax', // Protección nativa contra Cross-Site Request Forgery (CSRF)\n  maxAge: 3600000, // 1 hora de expiración\n});",
      "quiz": [
        {
          "question": "¿Por qué es crucial marcar las cookies de sesión con el atributo `HttpOnly`?",
          "options": [
            "Porque impide que el código JavaScript del navegador (como scripts inyectados mediante ataques XSS) pueda leer o robar la cookie",
            "Porque hace que las cookies se descarguen más rápido",
            "Porque activa el modo oscuro"
          ],
          "answerIndex": 0,
          "explanation": "`HttpOnly` bloquea el acceso desde `document.cookie`; incluso si un atacante logra inyectar JavaScript en tu página, no podrá extraer la sesión."
        }
      ]
    },
    {
      "id": 16,
      "title": "MÓDULO 16: AUTENTICACIÓN EN MICROSERVICIOS: MTLS, JWT Y SPIFFE",
      "description": "Seguridad Zero Trust en la red interna: Mutual TLS (mTLS) para autenticación mutua de servidores, tokens JWT y el estándar SPIFFE/SPIRE.",
      "items": [
        "La falacia de la seguridad perimetral: 'La red interna es confiable'.",
        "Filosofía Zero Trust (Cero Confianza): Autenticar y autorizar cada llamada, incluso dentro del datacenter.",
        "Mutual TLS (mTLS): El cliente verifica al servidor Y el servidor verifica el certificado del cliente.",
        "JSON Web Tokens (JWT): Anatomía (Header, Payload, Firma), algoritmos seguros (RS256 vs HS256) y riesgos de revocación.",
        "Identidad de cargas de trabajo con el estándar SPIFFE (Secure Production Identity Framework for Everyone).",
        "Service Meshes (Istio, Linkerd) automatizando mTLS transparente entre pods."
      ],
      "content": "## Mutual TLS (mTLS) y Zero Trust\n\nEn el TLS estándar de la web, solo el cliente verifica que el servidor sea legítimo (tú verificas que estás en `google.com`).\n\nEn **mTLS (Mutual TLS)** para microservicios:\n1. El Servidor presenta su certificado al Cliente.\n2. El Cliente **también presenta su certificado criptográfico** al Servidor.\n3. Si el microservicio que llama no posee un certificado emitido por la Autoridad Certificadora interna de la empresa, la conexión TCP se cierra de inmediato en el handshake, antes de procesar ninguna petición.",
      "codeSnippet": "// Cliente HTTPS en Node.js configurado con mTLS (Certificado de Cliente)\nimport https from 'https';\nimport fs from 'fs';\n\nconst agenteSeguro = new https.Agent({\n  cert: fs.readFileSync('cliente-cert.pem'), // Certificado de identidad del cliente\n  key: fs.readFileSync('cliente-key.pem'),   // Clave privada del cliente\n  ca: fs.readFileSync('ca-interna.pem'),     // Certificado de la CA que firmó al servidor\n  rejectUnauthorized: true,                  // Rechazar si el servidor no es confiable\n});\n\n// Solicitud interna entre microservicios con autenticación mutua\nhttps.get('https://servicio-pagos.interno:8443/cobrar', { agent: agenteSeguro }, (res) => {\n  console.log('Autenticación mTLS exitosa. Status:', res.statusCode);\n});",
      "quiz": [
        {
          "question": "¿En qué se diferencia Mutual TLS (mTLS) del TLS estándar que usamos en los navegadores web?",
          "options": [
            "En mTLS ambas partes deben presentar certificados digitales válidos para autenticarse mutuamente, en lugar de autenticar solo al servidor",
            "mTLS usa contraseñas en lugar de certificados",
            "mTLS solo funciona en redes satelitales"
          ],
          "answerIndex": 0,
          "explanation": "mTLS exige que tanto el cliente como el servidor certifiquen su identidad criptográfica antes de transmitir datos."
        }
      ]
    },
    {
      "id": 17,
      "title": "MÓDULO 17: PATRONES DE RESILIENCIA EN RED: CIRCUIT BREAKER Y RETRIES CON JITTER",
      "description": "Blindando la red ante fallos: el patrón Circuit Breaker (Closed, Open, Half-Open), reintentos con Exponential Backoff y la necesidad matemática de Jitter.",
      "items": [
        "El efecto avalancha (Thundering Herd Problem) y las fallas en cascada en redes de microservicios.",
        "El Patrón Circuit Breaker: Estados Closed (Normal), Open (Fallo masivo, no llamar) y Half-Open (Prueba de salud).",
        "Estrategia de Retries: Cuándo es seguro reintentar (solo operaciones idempotentes) y cuándo es destructivo.",
        "Exponential Backoff: Duplicar el tiempo de espera entre intentos ($100\\text{ms}, 200\\text{ms}, 400\\text{ms}, 800\\text{ms}$).",
        "Jitter (Ruido Aleatorio): Por qué los reintentos sincronizados colapsan a los servidores recuperados.",
        "Timeouts estrictos en todas las capas de transporte y aplicación."
      ],
      "content": "## Resiliencia de Red: Circuit Breaker y Jitter\n\nCuando un microservicio downstream se degrada y empieza a responder lento:\n1. Las peticiones se acumulan consumiendo hilos de ejecución en los servicios upstream.\n2. Si los clientes reintentan todos al mismo tiempo a intervalos fijos (ej. cada 1 segundo), generan una ola de tráfico que vuelve a tumbar al servidor recién levantado (**Thundering Herd**).\n\n### La Fórmula de Backoff con Jitter Completo\n$$\\text{Espera} = \\text{random}(0, \\min(\\text{MaxEspera}, \\text{Base} \\times 2^{\\text{intento}}))$$\nAñadir ruido aleatorio (Jitter) dispersa los reintentos en el tiempo, permitiendo que el servidor se recupere suavemente.",
      "codeSnippet": "// Implementación de Reintentos con Exponential Backoff y Jitter Completo\nexport async function fetchConResiliencia<T>(\n  operacion: () => Promise<T>,\n  maxIntentos = 3,\n  baseMs = 100\n): Promise<T> {\n  for (let intento = 0; intento < maxIntentos; intento++) {\n    try {\n      return await operacion();\n    } catch (error) {\n      if (intento === maxIntentos - 1) throw error;\n\n      // Cálculo de Exponential Backoff con Jitter aleatorio\n      const backoff = baseMs * Math.pow(2, intento);\n      const jitter = Math.random() * backoff;\n      const tiempoEspera = Math.min(3000, jitter);\n\n      console.warn(\\`Fallo intento \\${intento + 1}. Reintentando en \\${tiempoEspera.toFixed(0)}ms...\\`);\n      await new Promise(r => setTimeout(r, tiempoEspera));\n    }\n  }\n  throw new Error('Inalcanzable');\n}",
      "quiz": [
        {
          "question": "¿Por qué es crucial añadir 'Jitter' (aleatoriedad) a los reintentos con Exponential Backoff?",
          "options": [
            "Para desincronizar los reintentos de múltiples clientes, evitando que todos ataquen al servidor al mismo milisegundo provocando una nueva caída",
            "Para consumir menos CPU",
            "Porque los servidores no tienen reloj"
          ],
          "answerIndex": 0,
          "explanation": "El Jitter rompe la sincronización del reintento masivo de miles de clientes, distribuyendo la carga de reconexión de forma homogénea."
        }
      ]
    },
    {
      "id": 18,
      "title": "MÓDULO 18: CONTROL DE TRÁFICO Y PROTECCIÓN CONTRA ABUSO: RATE LIMITING",
      "description": "Defensa de endpoints contra abusos y DDoS: algoritmos Token Bucket y Leaky Bucket, ventanas deslizantes con Redis y respuesta HTTP 429.",
      "items": [
        "La necesidad de Rate Limiting: Proteger la infraestructura, prevenir raspado de datos y controlar costos de APIs.",
        "Algoritmo Token Bucket (Cubo de Tokens): Permite ráfagas cortas mientras mantiene una tasa promedio constante.",
        "Algoritmo Leaky Bucket (Cubo con Fugas): Salida constante y suave sin ráfagas.",
        "Sliding Window Log vs Sliding Window Counter con Redis distribuido.",
        "Códigos de estado y cabeceras estándar: `HTTP 429 Too Many Requests`, `Retry-After`, `X-RateLimit-Remaining`.",
        "Web Application Firewalls (WAF) mitigando ataques DDoS en Cloudflare y AWS Shield."
      ],
      "content": "## Control de Tráfico: El Algoritmo Token Bucket\n\nEl algoritmo **Token Bucket** es el estándar de la industria (usado por AWS, Stripe y Cloudflare):\n* Un cubo tiene una capacidad máxima de $B$ tokens.\n* Se añaden tokens al cubo a una tasa fija $r$ tokens por segundo.\n* Cada solicitud entrante toma 1 token del cubo:\n  * Si hay tokens disponibles: la solicitud pasa de inmediato.\n  * Si el cubo está vacío: la solicitud se rechaza con código `HTTP 429 Too Many Requests` y la cabecera `Retry-After`.",
      "codeSnippet": "// Implementación limpia en memoria del Algoritmo Token Bucket\nexport class TokenBucketRateLimiter {\n  private tokens: number;\n  private ultimoRefresco: number;\n\n  constructor(\n    private readonly capacidadMaxima: number, // Ej: 10 peticiones\n    private readonly tasaRefrescoPorSegundo: number // Ej: 2 tokens por segundo\n  ) {\n    this.tokens = capacidadMaxima;\n    this.ultimoRefresco = Date.now();\n  }\n\n  intentarConsumir(): boolean {\n    this.refrescarTokens();\n\n    if (this.tokens >= 1) {\n      this.tokens -= 1;\n      return true; // Permitir petición\n    }\n    return false; // Rechazar con HTTP 429\n  }\n\n  private refrescarTokens(): void {\n    const ahora = Date.now();\n    const tiempoPasadoSegundos = (ahora - this.ultimoRefresco) / 1000;\n    const nuevosTokens = tiempoPasadoSegundos * this.tasaRefrescoPorSegundo;\n\n    this.tokens = Math.min(this.capacidadMaxima, this.tokens + nuevosTokens);\n    this.ultimoRefresco = ahora;\n  }\n}",
      "quiz": [
        {
          "question": "¿Qué código de estado HTTP debe devolver una API cuando un cliente supera el límite de peticiones permitido?",
          "options": [
            "`HTTP 429 Too Many Requests`",
            "`HTTP 500 Internal Server Error`",
            "`HTTP 401 Unauthorized`"
          ],
          "answerIndex": 0,
          "explanation": "El código formal de la RFC 6585 para sobrepasar la cuota de rate limiting es 429 Too Many Requests, complementado con la cabecera Retry-After."
        }
      ]
    },
    {
      "id": 19,
      "title": "MÓDULO 19: DIAGNÓSTICO Y ANÁLISIS DE PAQUETES: WIRESHARK, TCPDUMP Y WATERFALLS",
      "description": "Herramientas de diagnóstico de red: captura de paquetes con tcpdump en servidores remotos, análisis visual con Wireshark y lectura de waterfalls.",
      "items": [
        "Cuando los logs no dicen nada: Diagnóstico a nivel de paquete en la interfaz de red.",
        "Captura en servidores headless con `tcpdump`: Filtros BPF (`port 443`, `src net 10.0.0.0/16`).",
        "Análisis forense con Wireshark: Seguimiento de Streams TCP (`Follow TCP Stream`), filtros de visualización y análisis de retransmisiones.",
        "Lectura del Waterfall de red en navegadores: Queueing, DNS Lookup, Initial Connection, SSL Handshake, TTFB (Time to First Byte) y Content Download.",
        "Diagnóstico con `curl` avanzado midiendo tiempos exactos (`time_connect`, `time_starttransfer`)."
      ],
      "content": "## Diagnóstico de Paquetes con Wireshark y tcpdump\n\nLos mejores ingenieros no adivinan: capturan el tráfico de la tarjeta de red.\n\n### Lectura de Tiempos en un Waterfall de Red\n* **DNS Lookup:** Tiempo dedicado a resolver el nombre de dominio a IP.\n* **Initial Connection:** Tiempo consumido por el 3-Way Handshake de TCP.\n* **SSL Handshake:** Tiempo dedicado a la negociación TLS 1.3.\n* **TTFB (Time to First Byte):** Tiempo desde que se envió la petición hasta que el servidor emitió el primer byte (mide el tiempo de cómputo del backend).\n* **Content Download:** Tiempo transmitiendo el cuerpo de la respuesta.",
      "codeSnippet": "# Comandos de captura y diagnóstico con tcpdump y curl\n# 1. Capturar 100 paquetes TCP en el puerto 443 y guardarlos en archivo pcap para Wireshark\nsudo tcpdump -i eth0 -c 100 -w captura_red.pcap port 443\n\n# 2. Medir con precisión quirúrgica el desglose de tiempos de red con curl\ncurl -w \"\\nDNS: %{time_namelookup}s\\nTCP: %{time_connect}s\\nTLS: %{time_appconnect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n\" \\\n     -o /dev/null -s https://api.quimisell.dev",
      "quiz": [
        {
          "question": "En el análisis de un Waterfall de red, ¿qué indica un valor de TTFB (Time to First Byte) muy alto si el DNS y la conexión inicial fueron casi instantáneos?",
          "options": [
            "Que el cuello de botella está en el procesamiento interno del servidor backend (consultas lentas de BD o cómputo pesado) antes de empezar a responder",
            "Que el cable de red del cliente está roto",
            "Que la velocidad de la luz cambió"
          ],
          "answerIndex": 0,
          "explanation": "El TTFB mide el tiempo de respuesta del servidor: si la red ya conectó pero el primer byte tarda 2 segundos, el problema es lentitud interna en el backend."
        }
      ]
    },
    {
      "id": 20,
      "title": "MÓDULO 20: PROYECTO INTEGRADOR: ARQUITECTURA DE UNA RED GLOBAL RESILIENTE",
      "description": "Diseño integral de una arquitectura distribuida: Nginx Anycast, terminación TLS 1.3, microservicios con gRPC y mTLS, Circuit Breakers y Rate Limiting.",
      "items": [
        "Diseño de la topología de red completa para una plataforma distribuida global de alto rendimiento.",
        "Capa Perimetral: CDN global Anycast con mitigación de DDoS y compresión Brotli.",
        "Capa de Entrada: Reverse Proxy Nginx con balanceo `least_conn` y Rate Limiting Token Bucket.",
        "Capa Interna: Malla de microservicios comunicándose vía gRPC binario sobre HTTP/2 con mTLS mutuo.",
        "Patrones de Resiliencia integrados: Circuit Breaker y Retries con Jitter en cada cliente interno.",
        "Observabilidad de Red: Monitoreo de latencias p95/p99 y dashboards de tráfico."
      ],
      "content": "## Proyecto Integrador: La Red Global de Microservicios\n\nEn este proyecto integrador ensamblamos la arquitectura de red completa:\n\n```\n[ Usuario Global ]\n        │\n        ▼ (HTTPS / HTTP/3 QUIC)\n┌─────────────────────────────────┐\n│ CDN Edge / Anycast + WAF        │\n└───────────────┬─────────────────┘\n                ▼ (TLS 1.3)\n┌─────────────────────────────────┐\n│ Nginx Reverse Proxy / Ingress   │ ──► Rate Limiting (Token Bucket)\n└───────────────┬─────────────────┘\n                ▼ (mTLS Mutuo + gRPC Binario / HTTP/2)\n┌────────────────────────────────────────────────────────┐\n│ Malla de Microservicios Internos (Zero Trust)          │\n│ ├─ Microservicio Usuarios                              │\n│ ├─ Microservicio Pagos (Con Circuit Breaker activo)    │\n│ └─ Microservicio Catálogo (Con Fallback en memoria)    │\n└────────────────────────────────────────────────────────┘\n```",
      "codeSnippet": "// Ejemplo del Proyecto Integrador: Cliente gRPC Resiliente con Circuit Breaker\nexport class ClienteMicroservicioResiliente {\n  private fallasConsecutivas = 0;\n  private circuitoAbierto = false;\n  private ultimoFallo = 0;\n\n  async invocar<T>(llamada: () => Promise<T>, fallback: () => T): Promise<T> {\n    // Si el circuito está abierto, responder con fallback inmediatamente sin tocar la red\n    if (this.circuitoAbierto) {\n      if (Date.now() - this.ultimoFallo > 5000) {\n        this.circuitoAbierto = false; // Estado Half-Open de prueba\n      } else {\n        return fallback();\n      }\n    }\n\n    try {\n      const respuesta = await llamada();\n      this.fallasConsecutivas = 0;\n      return respuesta;\n    } catch (err) {\n      this.fallasConsecutivas++;\n      this.ultimoFallo = Date.now();\n      if (this.fallasConsecutivas >= 3) {\n        this.circuitoAbierto = true; // Abrir circuito para proteger la red\n      }\n      return fallback();\n    }\n  }\n}",
      "quiz": [
        {
          "question": "¿Por qué las arquitecturas de microservicios modernas combinan mTLS interno con gRPC binario?",
          "options": [
            "Porque mTLS garantiza autenticación criptográfica mutua Zero Trust entre servicios y gRPC ofrece máxima velocidad binaria y compresión sobre HTTP/2",
            "Porque es obligatorio por la ley de internet",
            "Para que las bases de datos no usen contraseñas"
          ],
          "answerIndex": 0,
          "explanation": "Esta combinación une seguridad estricta (nadie puede suplantar a un servicio) con rendimiento extremo (mínima sobrecarga de CPU y red)."
        }
      ]
    }
  ]
};

export const REDES_DEV_EXERCISES: Record<string, TutorExercise[]> = {
  "1": [
    {
      "id": 101,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 1: ARQUITECTURA DE REDES Y MODELOS OSI VS TCP/IP.",
      "placeholder": "# Comandos esenciales para inspeccionar capas de red en Linux / macOS / Windows\n# 1. Ver la dirección IP y tarjetas de red físicas\nip addr show  # o 'ipconfig' en Windows\n\n# 2. Ver la tabla de enrutamiento del sistema operativo\nip route show\n\n# 3. Inspeccionar conexiones de transporte TCP activas y sockets abiertos\nss -tuln  # o 'netstat -ano' en Windows",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "2": [
    {
      "id": 201,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 2: CAPA FÍSICA Y DE ENLACE: ETHERNET, MAC Y ARP.",
      "placeholder": "# Inspeccionar y diagnosticar la tabla ARP local\n# Ver las asignaciones IP -> Dirección MAC aprendidas por el sistema\narp -a\n\n# Limpiar la caché ARP en caso de desconfiguración o conflicto de red\n# sudo ip neigh flush all",
      "expectedKeywords": [
        "capa"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "3": [
    {
      "id": 301,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 3: CAPA DE RED: IPV4, IPV6, SUBNETTING CIDR Y NAT.",
      "placeholder": "# Análisis de rutas y salto de paquetes con traceroute\n# Rastrea cada router (salto) por el que viaja tu paquete hacia el destino\ntraceroute -n 8.8.8.8  # o 'tracert -d 8.8.8.8' en Windows\n\n# Ping para verificar latencia y pérdida de paquetes ICMP\nping -c 4 api.quimisell.dev",
      "expectedKeywords": [
        "capa"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "4": [
    {
      "id": 401,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 4: DNS: RESOLUCIÓN RECURSIVA, REGISTROS Y DNSSEC.",
      "placeholder": "# Comandos de diagnóstico DNS profesional con dig\n# 1. Consultar registro tipo A de un dominio con respuesta detallada\ndig api.quimisell.dev A\n\n# 2. Consultar directamente a un servidor DNS específico (ej. Cloudflare 1.1.1.1)\ndig @1.1.1.1 api.quimisell.dev +short\n\n# 3. Rastrear la jerarquía completa desde la raíz hasta el servidor autoritativo\ndig +trace api.quimisell.dev",
      "expectedKeywords": [
        "dns"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "5": [
    {
      "id": 501,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 5: CAPA DE TRANSPORTE: TCP HANDSHAKE, CONTROL DE FLUJO Y CONGESTIÓN.",
      "placeholder": "// Ejemplo en Node.js: Creación de un Servidor TCP puro\nimport net from 'net';\n\nconst server = net.createServer((socket) => {\n  console.log('Cliente conectado desde:', socket.remoteAddress);\n\n  socket.on('data', (data) => {\n    console.log('Bytes TCP recibidos:', data.toString());\n    socket.write('ACK desde Servidor TCP\\n');\n  });\n\n  socket.on('end', () => {\n    console.log('Cliente desconectado.');\n  });\n});\n\nserver.listen(4000, () => {\n  console.log('Servidor TCP escuchando en puerto 4000');\n});",
      "expectedKeywords": [
        "capa"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "6": [
    {
      "id": 601,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 6: CAPA DE TRANSPORTE: UDP, STREAMING Y DIFERENCIAS CON TCP.",
      "placeholder": "// Servidor UDP en Node.js usando el módulo dgram\nimport dgram from 'dgram';\n\nconst server = dgram.createSocket('udp4');\n\nserver.on('message', (msg, rinfo) => {\n  console.log(\\`Datagrama UDP recibido de \\${rinfo.address}:\\${rinfo.port}: \\${msg}\\`);\n});\n\nserver.on('listening', () => {\n  const address = server.address();\n  console.log(\\`Servidor UDP escuchando en \\${address.address}:\\${address.port}\\`);\n});\n\nserver.bind(41234);",
      "expectedKeywords": [
        "capa"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "7": [
    {
      "id": 701,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 7: SEGURIDAD Y CIFRADO EN TRÁNSITO: TLS 1.3 Y CERTIFICADOS X.509.",
      "placeholder": "# Inspeccionar el certificado TLS y handshake de cualquier servidor\nopenssl s_client -connect api.quimisell.dev:443 -tls1_3\n\n# Ver los detalles del certificado X.509 (fechas de validez, emisor, SANs)\nopenssl s_client -connect api.quimisell.dev:443 -showcerts </dev/null | openssl x509 -text -noout",
      "expectedKeywords": [
        "seguridad"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "8": [
    {
      "id": 801,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 8: EL PROTOCOLO HTTP: EVOLUCIÓN DE HTTP/1.0 A HTTP/1.1.",
      "placeholder": "// Petición HTTP cruda con formato textual de protocolo\n// GET /api/productos HTTP/1.1\n// Host: api.quimisell.dev\n// User-Agent: Mozilla/5.0\n// Accept: application/json\n// Connection: keep-alive\n\n// Respuesta HTTP cruda:\n// HTTP/1.1 200 OK\n// Content-Type: application/json; charset=utf-8\n// Content-Length: 42\n// Connection: keep-alive\n//\n// {\"status\":\"ok\",\"mensaje\":\"Hola QuimiSell\"}",
      "expectedKeywords": [
        "el"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "9": [
    {
      "id": 901,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 9: PROTOCOLO HTTP/2: MULTIPLEXACIÓN Y COMPRESIÓN HPACK.",
      "placeholder": "# Comprobar si un servidor soporta HTTP/2 usando curl\ncurl -I --http2 https://api.quimisell.dev\n\n# Inspeccionar el protocolo negociado mediante ALPN en el handshake TLS\nopenssl s_client -connect api.quimisell.dev:443 -alpn h2",
      "expectedKeywords": [
        "protocolo"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "10": [
    {
      "id": 1001,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 10: PROTOCOLO HTTP/3 (QUIC): UDP COMO BASE Y 0-RTT.",
      "placeholder": "# Verificar soporte de HTTP/3 con curl (requiere versión compilada con nghttp3/quiche)\ncurl --http3 -I https://cloudflare.com\n\n# En cabeceras de respuesta, el servidor anuncia HTTP/3 mediante Alt-Svc:\n# alt-svc: h3=\":443\"; ma=86400",
      "expectedKeywords": [
        "protocolo"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "11": [
    {
      "id": 1101,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 11: TIEMPO REAL: WEBSOCKETS VS SERVER-SENT EVENTS (SSE) VS LONG POLLING.",
      "placeholder": "// Ejemplo: Servidor de Streaming SSE en Node.js (Patrón ChatGPT)\nimport express from 'express';\nconst app = express();\n\napp.get('/api/stream-ia', (req, res) => {\n  // Configuración de cabeceras SSE obligatorias\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n\n  let tokenCount = 0;\n  const interval = setInterval(() => {\n    tokenCount++;\n    // Enviar evento SSE con formato data: <contenido>\\n\\n\n    res.write(\\`data: \\${JSON.stringify({ token: \\`Palabra \\${tokenCount}\\` })}\\n\\n\\`);\n\n    if (tokenCount >= 5) {\n      clearInterval(interval);\n      res.write('data: [DONE]\\n\\n');\n      res.end();\n    }\n  }, 500);\n});",
      "expectedKeywords": [
        "tiempo"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "12": [
    {
      "id": 1201,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 12: ARQUITECTURA DE APIS RESTFUL: PRINCIPIOS DE FIELDING E IDEMPOTENCIA.",
      "placeholder": "// Ejemplo de API RESTful semántica con Express\nimport express from 'express';\nconst app = express();\napp.use(express.json());\n\n// GET: Seguro e Idempotente\napp.get('/api/v1/usuarios/:id', (req, res) => {\n  res.status(200).json({ id: req.params.id, nombre: 'Selvin' });\n});\n\n// POST: Ni seguro ni idempotente (Crea nuevo recurso)\napp.post('/api/v1/usuarios', (req, res) => {\n  res.status(201).json({ id: 'nuevo-uuid-123', ...req.body });\n});\n\n// PUT: Idempotente (Reemplaza el recurso completo en ese ID)\napp.put('/api/v1/usuarios/:id', (req, res) => {\n  res.status(200).json({ id: req.params.id, ...req.body });\n});",
      "expectedKeywords": [
        "arquitectura"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "13": [
    {
      "id": 1301,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 13: RPC MODERNO: GRPC Y PROTOCOL BUFFERS (PROTOBUF).",
      "placeholder": "// archivo: usuario.proto\nsyntax = \"proto3\";\n\npackage quimisell.usuarios;\n\nservice UsuarioService {\n  // Método RPC Unario estándar\n  rpc ObtenerUsuario (UsuarioRequest) returns (UsuarioResponse);\n  \n  // Método RPC con Streaming de servidor\n  rpc ListarUsuariosActivos (Vacio) returns (stream UsuarioResponse);\n}\n\nmessage UsuarioRequest {\n  string id = 1; // El número 1 es el tag binario del campo\n}\n\nmessage UsuarioResponse {\n  string id = 1;\n  string email = 2;\n  int32 saldo_centavos = 3;\n  bool esta_activo = 4;\n}\n\nmessage Vacio {}",
      "expectedKeywords": [
        "rpc"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "14": [
    {
      "id": 1401,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 14: PROXIES INVERSOS Y BALANCEO DE CARGA CON NGINX.",
      "placeholder": "# Configuración de Nginx (/etc/nginx/nginx.conf)\nhttp {\n  # Definición del grupo de servidores backend (Upstream)\n  upstream api_cluster {\n    least_conn; # Algoritmo: enviar a la instancia con menos conexiones\n    server 10.0.1.10:3000 max_fails=3 fail_timeout=10s;\n    server 10.0.1.11:3000 max_fails=3 fail_timeout=10s;\n    server 10.0.1.12:3000 backup; # Servidor de respaldo\n  }\n\n  server {\n    listen 80;\n    server_name api.quimisell.dev;\n    return 301 https://$host$request_uri; # Redirección forzada a HTTPS\n  }\n\n  server {\n    listen 443 ssl http2;\n    server_name api.quimisell.dev;\n\n    ssl_certificate /etc/letsencrypt/live/api.quimisell.dev/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/api.quimisell.dev/privkey.pem;\n\n    location / {\n      proxy_pass http://api_cluster;\n      proxy_set_header Host $host;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n      proxy_set_header X-Forwarded-Proto $scheme;\n    }\n  }\n}",
      "expectedKeywords": [
        "proxies"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "15": [
    {
      "id": 1501,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 15: SEGURIDAD WEB EN CAPA DE APLICACIÓN: CORS, CSP Y COOKIES.",
      "placeholder": "// Configuración segura de CORS y Cookies en Express\nimport cors from 'cors';\nimport cookieParser from 'cookie-parser';\n\napp.use(cors({\n  origin: 'https://app.quimisell.dev', // Dominio explícito permitido (NUNCA '*' si hay credenciales)\n  credentials: true, // Permitir envío de cookies de autenticación\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));\n\n// Generación de Cookie de Sesión con máxima seguridad\nres.cookie('token_sesion', jwtToken, {\n  httpOnly: true,  // Previene que document.cookie sea robado por ataques XSS\n  secure: true,    // Solo viaja a través de conexiones cifradas HTTPS\n  sameSite: 'lax', // Protección nativa contra Cross-Site Request Forgery (CSRF)\n  maxAge: 3600000, // 1 hora de expiración\n});",
      "expectedKeywords": [
        "seguridad"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "16": [
    {
      "id": 1601,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 16: AUTENTICACIÓN EN MICROSERVICIOS: MTLS, JWT Y SPIFFE.",
      "placeholder": "// Cliente HTTPS en Node.js configurado con mTLS (Certificado de Cliente)\nimport https from 'https';\nimport fs from 'fs';\n\nconst agenteSeguro = new https.Agent({\n  cert: fs.readFileSync('cliente-cert.pem'), // Certificado de identidad del cliente\n  key: fs.readFileSync('cliente-key.pem'),   // Clave privada del cliente\n  ca: fs.readFileSync('ca-interna.pem'),     // Certificado de la CA que firmó al servidor\n  rejectUnauthorized: true,                  // Rechazar si el servidor no es confiable\n});\n\n// Solicitud interna entre microservicios con autenticación mutua\nhttps.get('https://servicio-pagos.interno:8443/cobrar', { agent: agenteSeguro }, (res) => {\n  console.log('Autenticación mTLS exitosa. Status:', res.statusCode);\n});",
      "expectedKeywords": [
        "autenticación"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "17": [
    {
      "id": 1701,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 17: PATRONES DE RESILIENCIA EN RED: CIRCUIT BREAKER Y RETRIES CON JITTER.",
      "placeholder": "// Implementación de Reintentos con Exponential Backoff y Jitter Completo\nexport async function fetchConResiliencia<T>(\n  operacion: () => Promise<T>,\n  maxIntentos = 3,\n  baseMs = 100\n): Promise<T> {\n  for (let intento = 0; intento < maxIntentos; intento++) {\n    try {\n      return await operacion();\n    } catch (error) {\n      if (intento === maxIntentos - 1) throw error;\n\n      // Cálculo de Exponential Backoff con Jitter aleatorio\n      const backoff = baseMs * Math.pow(2, intento);\n      const jitter = Math.random() * backoff;\n      const tiempoEspera = Math.min(3000, jitter);\n\n      console.warn(\\`Fallo intento \\${intento + 1}. Reintentando en \\${tiempoEspera.toFixed(0)}ms...\\`);\n      await new Promise(r => setTimeout(r, tiempoEspera));\n    }\n  }\n  throw new Error('Inalcanzable');\n}",
      "expectedKeywords": [
        "patrones"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "18": [
    {
      "id": 1801,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 18: CONTROL DE TRÁFICO Y PROTECCIÓN CONTRA ABUSO: RATE LIMITING.",
      "placeholder": "// Implementación limpia en memoria del Algoritmo Token Bucket\nexport class TokenBucketRateLimiter {\n  private tokens: number;\n  private ultimoRefresco: number;\n\n  constructor(\n    private readonly capacidadMaxima: number, // Ej: 10 peticiones\n    private readonly tasaRefrescoPorSegundo: number // Ej: 2 tokens por segundo\n  ) {\n    this.tokens = capacidadMaxima;\n    this.ultimoRefresco = Date.now();\n  }\n\n  intentarConsumir(): boolean {\n    this.refrescarTokens();\n\n    if (this.tokens >= 1) {\n      this.tokens -= 1;\n      return true; // Permitir petición\n    }\n    return false; // Rechazar con HTTP 429\n  }\n\n  private refrescarTokens(): void {\n    const ahora = Date.now();\n    const tiempoPasadoSegundos = (ahora - this.ultimoRefresco) / 1000;\n    const nuevosTokens = tiempoPasadoSegundos * this.tasaRefrescoPorSegundo;\n\n    this.tokens = Math.min(this.capacidadMaxima, this.tokens + nuevosTokens);\n    this.ultimoRefresco = ahora;\n  }\n}",
      "expectedKeywords": [
        "control"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "19": [
    {
      "id": 1901,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 19: DIAGNÓSTICO Y ANÁLISIS DE PAQUETES: WIRESHARK, TCPDUMP Y WATERFALLS.",
      "placeholder": "# Comandos de captura y diagnóstico con tcpdump y curl\n# 1. Capturar 100 paquetes TCP en el puerto 443 y guardarlos en archivo pcap para Wireshark\nsudo tcpdump -i eth0 -c 100 -w captura_red.pcap port 443\n\n# 2. Medir con precisión quirúrgica el desglose de tiempos de red con curl\ncurl -w \"\\nDNS: %{time_namelookup}s\\nTCP: %{time_connect}s\\nTLS: %{time_appconnect}s\\nTTFB: %{time_starttransfer}s\\nTotal: %{time_total}s\\n\" \\\n     -o /dev/null -s https://api.quimisell.dev",
      "expectedKeywords": [
        "diagnóstico"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ],
  "20": [
    {
      "id": 2001,
      "instruction": "Aplica los conceptos o configuraciones de red explicados en el MÓDULO 20: PROYECTO INTEGRADOR: ARQUITECTURA DE UNA RED GLOBAL RESILIENTE.",
      "placeholder": "// Ejemplo del Proyecto Integrador: Cliente gRPC Resiliente con Circuit Breaker\nexport class ClienteMicroservicioResiliente {\n  private fallasConsecutivas = 0;\n  private circuitoAbierto = false;\n  private ultimoFallo = 0;\n\n  async invocar<T>(llamada: () => Promise<T>, fallback: () => T): Promise<T> {\n    // Si el circuito está abierto, responder con fallback inmediatamente sin tocar la red\n    if (this.circuitoAbierto) {\n      if (Date.now() - this.ultimoFallo > 5000) {\n        this.circuitoAbierto = false; // Estado Half-Open de prueba\n      } else {\n        return fallback();\n      }\n    }\n\n    try {\n      const respuesta = await llamada();\n      this.fallasConsecutivas = 0;\n      return respuesta;\n    } catch (err) {\n      this.fallasConsecutivas++;\n      this.ultimoFallo = Date.now();\n      if (this.fallasConsecutivas >= 3) {\n        this.circuitoAbierto = true; // Abrir circuito para proteger la red\n      }\n      return fallback();\n    }\n  }\n}",
      "expectedKeywords": [
        "proyecto"
      ],
      "hint": "Revisa los conceptos del protocolo y aplica la sintaxis o comando adecuado.",
      "isEmailSubmission": false
    }
  ]
};

// Adjuntar ejercicios estructurados a cada módulo de Redes para Desarrolladores
REDES_DEV_COURSE.modules.forEach((mod) => {
  if (REDES_DEV_EXERCISES[mod.id]) {
    mod.exercises = REDES_DEV_EXERCISES[mod.id];
  }
});
