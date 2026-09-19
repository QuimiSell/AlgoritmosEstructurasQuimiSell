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
  modules: [{
      id: 1,
      title: "MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES",
      description: "Las capas que conectan tu código con internet.",
      items: [
        
      "OSI 7 capas vs TCP/IP 4 capas.",
      "Capa aplicación: HTTP, DNS, TLS.",
      "Transporte: TCP vs UDP.",
      "Red: IP, routing.",
      "Enlace/física: Ethernet, WiFi.",
      "Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo.",
        "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería."
      ],
      content: "## Panorama del tema: MODELO OSI Y TCP/IP PARA DESARROLLADORES\\n\\nLas capas que conectan tu código con internet.\\n\\nComo desarrollador no necesitas memorizar OSI entero, pero sí entender dónde vive tu problema: ¿es DNS? ¿TLS? ¿timeout TCP? TCP/IP es el stack real de internet: aplicación → transporte (TCP/UDP) → internet (IP) → enlace. HTTP vive en aplicación sobre TCP. UDP en video streaming y DNS. Saber esto acelera debug: un fetch() lento puede ser DNS lento, no JavaScript lento.\\n\\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\\n\\n## Qué aprenderás en este módulo\\n\\n· OSI 7 capas vs TCP/IP 4 capas.\\n· Capa aplicación: HTTP, DNS, TLS.\\n· Transporte: TCP vs UDP.\\n· Red: IP, routing.\\n· Enlace/física: Ethernet, WiFi.\\n· Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES.\\n· Ejemplo numérico o de código trazado paso a paso.\\n· Pregunta tipo entrevista técnica con respuesta esperada.\\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\\n\\n## Desarrollo teórico detallado\\n\\n## 1. OSI 7 capas vs TCP/IP 4 capas.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** OSI 7 capas vs TCP/IP 4 capas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «OSI 7 capas vs TCP/IP 4 capas.» y cuándo lo evitarías.\\n\\n## 2. Capa aplicación: HTTP, DNS, TLS.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Capa aplicación: HTTP, DNS, TLS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Capa aplicación: HTTP, DNS, TLS.» y cuándo lo evitarías.\\n\\n## 3. Transporte: TCP vs UDP.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Transporte: TCP vs UDP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Transporte: TCP vs UDP.» y cuándo lo evitarías.\\n\\n## 4. Red: IP, routing.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Red: IP, routing. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Red: IP, routing.» y cuándo lo evitarías.\\n\\n## 5. Enlace/física: Ethernet, WiFi.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Enlace/física: Ethernet, WiFi. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Enlace/física: Ethernet, WiFi.» y cuándo lo evitarías.\\n\\n## 6. Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES.» y cuándo lo evitarías.\\n\\n## 7. Ejemplo numérico o de código trazado paso a paso.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\\n\\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\\n\\n**Qué es y por qué importa.** Dentro de MODELO OSI Y TCP/IP PARA DESARROLLADORES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\\n\\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\\n\\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\\n\\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\\n\\n## Aplicaciones en sistemas reales\\n\\n**Ejemplo 1:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\\n\\n**Ejemplo 2:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\\n\\n**Ejemplo 3:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\\n\\nEstos casos muestran por qué MODELO OSI Y TCP/IP PARA DESARROLLADORES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\\n\\n## Errores comunes al estudiar\\n\\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\\n\\n## Síntesis para repasar\\n\\nCierra el módulo resumiendo MODELO OSI Y TCP/IP PARA DESARROLLADORES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este. En la práctica profesional, este tema exige relacionar la teoría con decisiones concretas de diseño: qué estructura elegir, qué complejidad aceptar y qué trade-offs negociar con el equipo. Repasa los ítems clave, implementa el snippet de referencia y valida tu comprensión con la autoevaluación antes de avanzar al siguiente módulo.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: OSI 7 capas vs TCP/IP 4 capas?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: OSI 7 capas vs TCP/IP 4 capas", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que OSI 7 capas vs TCP/IP 4 capas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Capa aplicación: HTTP, DNS, TLS?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Capa aplicación: HTTP, DNS, TLS", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Capa aplicación: HTTP, DNS, TLS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Transporte: TCP vs UDP?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Transporte: TCP vs UDP", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Transporte: TCP vs UDP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Red: IP, routing?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Red: IP, routing", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Red: IP, routing. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Enlace/física: Ethernet, WiFi?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Enlace/física: Ethernet, WiFi", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Enlace/física: Ethernet, WiFi. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DE...?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Definición operativa de los términos centrales de MODELO OSI Y TCP/...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de MODELO OSI Y TCP/IP PARA DESARROLLADORES. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: MODELO OSI Y TCP/IP PARA DESARROLLADORES', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Router reenvía entre subredes.",
      "Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: IP, SUBNETTING Y ROUTING BÁSICO\n\nDirecciones que identifican cada máquina en la red.\n\nIPv4 agotó espacio; IPv6 lo resuelve con 2^128 direcciones. CIDR /24 = 256 IPs (254 usables). 192.168.x.x es privada (NAT a internet). Tu router traduce IP privada → pública. Routing: cada router decide siguiente salto hacia destino. Para devs: localhost=127.0.0.1, docker networks usan subnets aisladas, Vercel edge tiene IPs globales.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· IPv4: 32 bits (192.168.1.1).\n· IPv6: 128 bits, adopción creciente.\n· CIDR /24, /16 — máscara de subred.\n· IP privada vs pública (NAT).\n· Router reenvía entre subredes.\n· Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. IPv4: 32 bits (192.168.1.1).\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** IPv4: 32 bits (192.168.1.1). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «IPv4: 32 bits (192.168.1.1).» y cuándo lo evitarías.\n\n## 2. IPv6: 128 bits, adopción creciente.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** IPv6: 128 bits, adopción creciente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «IPv6: 128 bits, adopción creciente.» y cuándo lo evitarías.\n\n## 3. CIDR /24, /16 — máscara de subred.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** CIDR /24, /16 — máscara de subred. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «CIDR /24, /16 — máscara de subred.» y cuándo lo evitarías.\n\n## 4. IP privada vs pública (NAT).\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** IP privada vs pública (NAT). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «IP privada vs pública (NAT).» y cuándo lo evitarías.\n\n## 5. Router reenvía entre subredes.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Router reenvía entre subredes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Router reenvía entre subredes.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de IP, SUBNETTING Y ROUTING BÁSICO, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 2:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 3:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\nEstos casos muestran por qué IP, SUBNETTING Y ROUTING BÁSICO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo IP, SUBNETTING Y ROUTING BÁSICO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: IPv4: 32 bits (192.168.1.1)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: IPv4: 32 bits (192.168.1.1)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IPv4: 32 bits (192.168.1.1). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: IPv6: 128 bits, adopción creciente?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: IPv6: 128 bits, adopción creciente", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IPv6: 128 bits, adopción creciente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: CIDR /24, /16 — máscara de subred?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: CIDR /24, /16 — máscara de subred", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que CIDR /24, /16 — máscara de subred. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: IP privada vs pública (NAT)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: IP privada vs pública (NAT)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IP privada vs pública (NAT). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: Router reenvía entre subredes?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Router reenvía entre subredes", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Router reenvía entre subredes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁ...?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Definición operativa de los términos centrales de IP, SUBNETTING Y ...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de IP, SUBNETTING Y ROUTING BÁSICO. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: IP, SUBNETTING Y ROUTING BÁSICO', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "DNS propagation y debugging.",
      "Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: DNS — RESOLUCIÓN DE NOMBRES\n\nDe quimisell.com a dirección IP.\n\nDNS traduce nombres humanos a IPs. Consulta recursiva: tu OS → resolver ISP/Google → root → .com → servidor autoritativo. A record → IPv4; AAAA → IPv6; CNAME alias; TXT para verificación (Vercel, email SPF). TTL bajo = cambios rápidos pero más queries. nslookup/dig diagnostican. Vercel deploy requiere DNS apuntando o CNAME.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Jerarquía: root → TLD → autoritativo.\n· Registros A, AAAA, CNAME, MX, TXT.\n· TTL: tiempo de cache.\n· Resolver recursivo (8.8.8.8).\n· DNS propagation y debugging.\n· Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Jerarquía: root → TLD → autoritativo.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Jerarquía: root → TLD → autoritativo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Jerarquía: root → TLD → autoritativo.» y cuándo lo evitarías.\n\n## 2. Registros A, AAAA, CNAME, MX, TXT.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Registros A, AAAA, CNAME, MX, TXT. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Registros A, AAAA, CNAME, MX, TXT.» y cuándo lo evitarías.\n\n## 3. TTL: tiempo de cache.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** TTL: tiempo de cache. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «TTL: tiempo de cache.» y cuándo lo evitarías.\n\n## 4. Resolver recursivo (8.8.8.8).\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Resolver recursivo (8.8.8.8). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Resolver recursivo (8.8.8.8).» y cuándo lo evitarías.\n\n## 5. DNS propagation y debugging.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** DNS propagation y debugging. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «DNS propagation y debugging.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de DNS — RESOLUCIÓN DE NOMBRES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 2:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 3:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\nEstos casos muestran por qué DNS — RESOLUCIÓN DE NOMBRES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo DNS — RESOLUCIÓN DE NOMBRES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: Jerarquía: root → TLD → autoritativo?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Jerarquía: root → TLD → autoritativo", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Jerarquía: root → TLD → autoritativo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: Registros A, AAAA, CNAME, MX, TXT?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Registros A, AAAA, CNAME, MX, TXT", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Registros A, AAAA, CNAME, MX, TXT. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: TTL: tiempo de cache?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: TTL: tiempo de cache", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que TTL: tiempo de cache. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: Resolver recursivo (8.8.8.8)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Resolver recursivo (8.8.8.8)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Resolver recursivo (8.8.8.8). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: DNS propagation y debugging?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: DNS propagation y debugging", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que DNS propagation y debugging. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de DNS — RESOLUCIÓN ...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de DNS — RESOLUCIÓN DE NOMBRES. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: DNS — RESOLUCIÓN DE NOMBRES', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Status: 2xx ok, 3xx redirect, 4xx client, 5xx server.",
      "Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: HTTP/1.1, HTTP/2 Y HTTPS\n\nEl protocolo que mueve la web.\n\nHTTP es texto (HTTP/1.1) o binario (HTTP/2) sobre TCP. GET idempotente, POST crea, PUT actualiza, DELETE elimina. Headers: Content-Type, Authorization, Cache-Control. HTTP/2 multiplexa requests en una conexión TCP. HTTPS obligatorio en producción (SEO, seguridad). 404 Not Found, 500 Internal Error — conoce códigos para debug API.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Request: method, path, headers, body.\n· Response: status code, headers, body.\n· HTTP/2: multiplexing, header compression.\n· HTTPS = HTTP + TLS.\n· Status: 2xx ok, 3xx redirect, 4xx client, 5xx server.\n· Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Request: method, path, headers, body.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Request: method, path, headers, body. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Request: method, path, headers, body.» y cuándo lo evitarías.\n\n## 2. Response: status code, headers, body.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Response: status code, headers, body. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Response: status code, headers, body.» y cuándo lo evitarías.\n\n## 3. HTTP/2: multiplexing, header compression.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** HTTP/2: multiplexing, header compression. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «HTTP/2: multiplexing, header compression.» y cuándo lo evitarías.\n\n## 4. HTTPS = HTTP + TLS.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** HTTPS = HTTP + TLS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «HTTPS = HTTP + TLS.» y cuándo lo evitarías.\n\n## 5. Status: 2xx ok, 3xx redirect, 4xx client, 5xx server.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Status: 2xx ok, 3xx redirect, 4xx client, 5xx server. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Status: 2xx ok, 3xx redirect, 4xx client, 5xx server.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de HTTP/1.1, HTTP/2 Y HTTPS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Un fetch() lento suele ser DNS+TLS, no JavaScript: devtools Network muestra waterfall completo.\n\n**Ejemplo 2:** Un fetch() lento suele ser DNS+TLS, no JavaScript: devtools Network muestra waterfall completo.\n\n**Ejemplo 3:** Un fetch() lento suele ser DNS+TLS, no JavaScript: devtools Network muestra waterfall completo.\n\nEstos casos muestran por qué HTTP/1.1, HTTP/2 Y HTTPS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo HTTP/1.1, HTTP/2 Y HTTPS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: Request: method, path, headers, body?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Request: method, path, headers, body", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Request: method, path, headers, body. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: Response: status code, headers, body?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Response: status code, headers, body", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Response: status code, headers, body. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: HTTP/2: multiplexing, header compression?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: HTTP/2: multiplexing, header compression", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que HTTP/2: multiplexing, header compression. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: HTTPS = HTTP + TLS?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: HTTPS = HTTP + TLS", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que HTTPS = HTTP + TLS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: Status: 2xx ok, 3xx redirect, 4xx client, 5xx server?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Status: 2xx ok, 3xx redirect, 4xx client, 5xx server", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Status: 2xx ok, 3xx redirect, 4xx client, 5xx server. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 ...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de HTTP/1.1, HTTP/2 Y HTTPS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: HTTP/1.1, HTTP/2 Y HTTPS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Certificate pinning en mobile.",
      "Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: TLS, SSL Y CERTIFICADOS\n\nCifrado que protege datos en tránsito.\n\nTLS negocia cifrado simétrico tras intercambio asimétrico en handshake. Certificado prueba que quimisell.com es quien dice ser (firmado por CA). Let's Encrypt gratis vía ACME. Mixed content (HTTP en HTTPS page) bloqueado por browser. Dev: mkcert para certs locales. Vercel provisiona TLS automático.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Handshake TLS: acuerdo de claves.\n· Certificado X.509: identidad del servidor.\n· CA (Let's Encrypt) firma certificados.\n· HTTPS padlock = TLS activo.\n· Certificate pinning en mobile.\n· Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Handshake TLS: acuerdo de claves.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Handshake TLS: acuerdo de claves. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Handshake TLS: acuerdo de claves.» y cuándo lo evitarías.\n\n## 2. Certificado X.509: identidad del servidor.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Certificado X.509: identidad del servidor. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Certificado X.509: identidad del servidor.» y cuándo lo evitarías.\n\n## 3. CA (Let's Encrypt) firma certificados.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** CA (Let's Encrypt) firma certificados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «CA (Let's Encrypt) firma certificados.» y cuándo lo evitarías.\n\n## 4. HTTPS padlock = TLS activo.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** HTTPS padlock = TLS activo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «HTTPS padlock = TLS activo.» y cuándo lo evitarías.\n\n## 5. Certificate pinning en mobile.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Certificate pinning en mobile. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Certificate pinning en mobile.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de TLS, SSL Y CERTIFICADOS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 2:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 3:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\nEstos casos muestran por qué TLS, SSL Y CERTIFICADOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo TLS, SSL Y CERTIFICADOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: Handshake TLS: acuerdo de claves?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Handshake TLS: acuerdo de claves", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Handshake TLS: acuerdo de claves. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: Certificado X.509: identidad del servidor?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Certificado X.509: identidad del servidor", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Certificado X.509: identidad del servidor. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: CA (Let's Encrypt) firma certificados?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: CA (Let's Encrypt) firma certificados", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que CA (Let's Encrypt) firma certificados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: HTTPS padlock = TLS activo?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: HTTPS padlock = TLS activo", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que HTTPS padlock = TLS activo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: Certificate pinning en mobile?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Certificate pinning en mobile", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Certificate pinning en mobile. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de TLS, SSL Y CERTIF...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de TLS, SSL Y CERTIFICADOS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TLS, SSL Y CERTIFICADOS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Rate limiting y paginación.",
      "Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: REST, WEBSOCKETS Y APIS\n\nComunicación cliente-servidor moderna.\n\nREST mapea entidades a URLs: GET /users/1, POST /users. Stateless: cada request lleva auth. WebSockets para chat, gaming, live updates — conexión persistente vs polling HTTP. GraphQL un endpoint, cliente elige campos. API design: versionado (/v1/), paginación (cursor/offset), rate limits (429 Too Many Requests).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· REST: recursos como URLs, verbs HTTP.\n· JSON como formato dominante.\n· WebSocket: conexión bidireccional persistente.\n· GraphQL: query flexible.\n· Rate limiting y paginación.\n· Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. REST: recursos como URLs, verbs HTTP.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** REST: recursos como URLs, verbs HTTP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «REST: recursos como URLs, verbs HTTP.» y cuándo lo evitarías.\n\n## 2. JSON como formato dominante.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** JSON como formato dominante. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «JSON como formato dominante.» y cuándo lo evitarías.\n\n## 3. WebSocket: conexión bidireccional persistente.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** WebSocket: conexión bidireccional persistente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «WebSocket: conexión bidireccional persistente.» y cuándo lo evitarías.\n\n## 4. GraphQL: query flexible.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** GraphQL: query flexible. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «GraphQL: query flexible.» y cuándo lo evitarías.\n\n## 5. Rate limiting y paginación.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Rate limiting y paginación. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Rate limiting y paginación.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de REST, WEBSOCKETS Y APIS, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 2:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 3:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\nEstos casos muestran por qué REST, WEBSOCKETS Y APIS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo REST, WEBSOCKETS Y APIS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: REST: recursos como URLs, verbs HTTP?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: REST: recursos como URLs, verbs HTTP", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que REST: recursos como URLs, verbs HTTP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: JSON como formato dominante?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: JSON como formato dominante", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que JSON como formato dominante. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: WebSocket: conexión bidireccional persistente?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: WebSocket: conexión bidireccional persistente", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que WebSocket: conexión bidireccional persistente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: GraphQL: query flexible?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: GraphQL: query flexible", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que GraphQL: query flexible. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: Rate limiting y paginación?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Rate limiting y paginación", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Rate limiting y paginación. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de REST, WEBSOCKETS ...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de REST, WEBSOCKETS Y APIS. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: REST, WEBSOCKETS Y APIS', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Compresión gzip/brotli.",
      "Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: LATENCIA, CDN Y CACHING HTTP\n\nPerformance web más allá del código.\n\nLatencia = distancia + procesamiento. CDN (Cloudflare, Vercel Edge) cachea estáticos en PoPs globales — O(1) lookup vs O(distancia) transcontinental. Cache-Control: max-age=31536000 para assets hashed. ETag valida freshness. brotli comprime mejor que gzip. Para QuimiSell PWA: service worker cache + CDN Vercel = offline + rápido.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· RTT: round-trip time.\n· CDN: contenido cerca del usuario.\n· Cache-Control, ETag, max-age.\n· Vercel Edge Network.\n· Compresión gzip/brotli.\n· Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. RTT: round-trip time.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** RTT: round-trip time. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «RTT: round-trip time.» y cuándo lo evitarías.\n\n## 2. CDN: contenido cerca del usuario.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** CDN: contenido cerca del usuario. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «CDN: contenido cerca del usuario.» y cuándo lo evitarías.\n\n## 3. Cache-Control, ETag, max-age.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cache-Control, ETag, max-age. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cache-Control, ETag, max-age.» y cuándo lo evitarías.\n\n## 4. Vercel Edge Network.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Vercel Edge Network. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Vercel Edge Network.» y cuándo lo evitarías.\n\n## 5. Compresión gzip/brotli.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Compresión gzip/brotli. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Compresión gzip/brotli.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de LATENCIA, CDN Y CACHING HTTP, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 2:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 3:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\nEstos casos muestran por qué LATENCIA, CDN Y CACHING HTTP no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo LATENCIA, CDN Y CACHING HTTP en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: RTT: round-trip time?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: RTT: round-trip time", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que RTT: round-trip time. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: CDN: contenido cerca del usuario?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: CDN: contenido cerca del usuario", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que CDN: contenido cerca del usuario. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: Cache-Control, ETag, max-age?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Cache-Control, ETag, max-age", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cache-Control, ETag, max-age. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: Vercel Edge Network?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Vercel Edge Network", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Vercel Edge Network. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: Compresión gzip/brotli?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Compresión gzip/brotli", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Compresión gzip/brotli. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Definición operativa de los términos centrales de LATENCIA, CDN Y C...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de LATENCIA, CDN Y CACHING HTTP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: LATENCIA, CDN Y CACHING HTTP', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "JWT en header vs cookie session.",
      "Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: CORS, COOKIES Y SESIONES\n\nSeguridad del navegador que todo dev debe conocer.\n\nBrowsers bloquean requests cross-origin por seguridad. CORS permite excepciones via headers del servidor. Preflight OPTIONS para methods no simples. Cookies HttpOnly no accesibles desde JS (XSS protection). SameSite=Lax mitiga CSRF. JWT stateless en Authorization header vs session cookie en servidor.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Same-Origin Policy.\n· CORS headers: Access-Control-Allow-Origin.\n· Preflight OPTIONS request.\n· Cookies: HttpOnly, Secure, SameSite.\n· JWT en header vs cookie session.\n· Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Same-Origin Policy.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Same-Origin Policy. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Same-Origin Policy.» y cuándo lo evitarías.\n\n## 2. CORS headers: Access-Control-Allow-Origin.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** CORS headers: Access-Control-Allow-Origin. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «CORS headers: Access-Control-Allow-Origin.» y cuándo lo evitarías.\n\n## 3. Preflight OPTIONS request.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preflight OPTIONS request. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preflight OPTIONS request.» y cuándo lo evitarías.\n\n## 4. Cookies: HttpOnly, Secure, SameSite.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Cookies: HttpOnly, Secure, SameSite. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Cookies: HttpOnly, Secure, SameSite.» y cuándo lo evitarías.\n\n## 5. JWT en header vs cookie session.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** JWT en header vs cookie session. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «JWT en header vs cookie session.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de CORS, COOKIES Y SESIONES, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 2:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 3:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\nEstos casos muestran por qué CORS, COOKIES Y SESIONES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo CORS, COOKIES Y SESIONES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: Same-Origin Policy?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Same-Origin Policy", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Same-Origin Policy. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: CORS headers: Access-Control-Allow-Origin?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: CORS headers: Access-Control-Allow-Origin", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que CORS headers: Access-Control-Allow-Origin. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: Preflight OPTIONS request?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Preflight OPTIONS request", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Preflight OPTIONS request. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: Cookies: HttpOnly, Secure, SameSite?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Cookies: HttpOnly, Secure, SameSite", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Cookies: HttpOnly, Secure, SameSite. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: JWT en header vs cookie session?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: JWT en header vs cookie session", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que JWT en header vs cookie session. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Definición operativa de los términos centrales de CORS, COOKIES Y S...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de CORS, COOKIES Y SESIONES. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: CORS, COOKIES Y SESIONES', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Wireshark intro: captura paquetes.",
      "Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: DIAGNÓSTICO — PING, CURL, TRACEROUTE\n\nHerramientas esenciales cuando algo no conecta.\n\nping mide latencia y reachability. traceroute muestra cada router intermedio. curl debuggea APIs (-v verbose, -I headers only). ss -tuln lista puertos escuchando. Wireshark captura paquetes para análisis profundo — base de Kali. Antes de pentesting, domina diagnóstico legal en tu propia red.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· ping: ICMP echo, latencia básica.\n· traceroute: saltos hasta destino.\n· curl: HTTP client CLI completo.\n· netstat/ss: conexiones activas.\n· Wireshark intro: captura paquetes.\n· Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. ping: ICMP echo, latencia básica.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** ping: ICMP echo, latencia básica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «ping: ICMP echo, latencia básica.» y cuándo lo evitarías.\n\n## 2. traceroute: saltos hasta destino.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** traceroute: saltos hasta destino. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «traceroute: saltos hasta destino.» y cuándo lo evitarías.\n\n## 3. curl: HTTP client CLI completo.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** curl: HTTP client CLI completo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «curl: HTTP client CLI completo.» y cuándo lo evitarías.\n\n## 4. netstat/ss: conexiones activas.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** netstat/ss: conexiones activas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «netstat/ss: conexiones activas.» y cuándo lo evitarías.\n\n## 5. Wireshark intro: captura paquetes.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Wireshark intro: captura paquetes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Wireshark intro: captura paquetes.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de DIAGNÓSTICO — PING, CURL, TRACEROUTE, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 2:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\n**Ejemplo 3:** Vercel Edge CDN cachea dist/ globalmente; Cache-Control immutable en assets hashed acelera repeat visits.\n\nEstos casos muestran por qué DIAGNÓSTICO — PING, CURL, TRACEROUTE no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo DIAGNÓSTICO — PING, CURL, TRACEROUTE en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: ping: ICMP echo, latencia básica?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: ping: ICMP echo, latencia básica", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que ping: ICMP echo, latencia básica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: traceroute: saltos hasta destino?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: traceroute: saltos hasta destino", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que traceroute: saltos hasta destino. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: curl: HTTP client CLI completo?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: curl: HTTP client CLI completo", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que curl: HTTP client CLI completo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: netstat/ss: conexiones activas?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: netstat/ss: conexiones activas", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que netstat/ss: conexiones activas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: Wireshark intro: captura paquetes?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Wireshark intro: captura paquetes", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Wireshark intro: captura paquetes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, T...?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Definición operativa de los términos centrales de DIAGNÓSTICO — PIN...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de DIAGNÓSTICO — PING, CURL, TRACEROUTE. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: DIAGNÓSTICO — PING, CURL, TRACEROUTE', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
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
      "Conecta con Nmap del curso Kali.",
      "Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING.",
      "Ejemplo numérico o de código trazado paso a paso.",
      "Pregunta tipo entrevista técnica con respuesta esperada.",
      "Relación explícita con el snippet de implementación del módulo."
],
      content: "## Panorama del tema: PUENTE HACIA KALI — REDES ANTES DE PENTESTING\n\nFundamentos éticos y legales antes del curso Kali.\n\nKali enseña Nmap, Wireshark, Metasploit — pero sin fundamentos de red es ruido. Saber qué es un puerto, SYN scan, y por qué HTTPS protege antes de intentar bypass. Recon pasivo (OSINT, DNS público) vs activo (port scan) tiene implicaciones legales. Practica SOLO en redes propias o labs autorizados (TryHackMe, HTB). QuimiSell: redes dev → Kali → ciber defensiva.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Entender la red que vas a auditar.\n· Puertos: 80 HTTP, 443 HTTPS, 22 SSH.\n· Recon pasivo vs activo (legal).\n· Tu propia red/lab primero.\n· Conecta con Nmap del curso Kali.\n· Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING.\n· Ejemplo numérico o de código trazado paso a paso.\n· Pregunta tipo entrevista técnica con respuesta esperada.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Entender la red que vas a auditar.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Entender la red que vas a auditar. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Entender la red que vas a auditar.» y cuándo lo evitarías.\n\n## 2. Puertos: 80 HTTP, 443 HTTPS, 22 SSH.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Puertos: 80 HTTP, 443 HTTPS, 22 SSH. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Puertos: 80 HTTP, 443 HTTPS, 22 SSH.» y cuándo lo evitarías.\n\n## 3. Recon pasivo vs activo (legal).\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Recon pasivo vs activo (legal). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Recon pasivo vs activo (legal).» y cuándo lo evitarías.\n\n## 4. Tu propia red/lab primero.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Tu propia red/lab primero. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tu propia red/lab primero.» y cuándo lo evitarías.\n\n## 5. Conecta con Nmap del curso Kali.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Conecta con Nmap del curso Kali. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Conecta con Nmap del curso Kali.» y cuándo lo evitarías.\n\n## 6. Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING.» y cuándo lo evitarías.\n\n## 7. Ejemplo numérico o de código trazado paso a paso.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ejemplo numérico o de código trazado paso a paso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ejemplo numérico o de código trazado paso a paso.» y cuándo lo evitarías.\n\n## 8. Pregunta tipo entrevista técnica con respuesta esperada.\n\n**Qué es y por qué importa.** Dentro de PUENTE HACIA KALI — REDES ANTES DE PENTESTING, este punto es central en redes TCP/IP, protocolos web y diagnóstico de conectividad. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Pregunta tipo entrevista técnica con respuesta esperada. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Pregunta tipo entrevista técnica con respuesta esperada.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 2:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\n**Ejemplo 3:** CORS bloquea APIs cross-origin hasta que el servidor envía Access-Control-Allow-Origin explícito.\n\nEstos casos muestran por qué PUENTE HACIA KALI — REDES ANTES DE PENTESTING no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PUENTE HACIA KALI — REDES ANTES DE PENTESTING en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
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
      ,
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Entender la red que vas a auditar?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Entender la red que vas a auditar", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Entender la red que vas a auditar. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Puertos: 80 HTTP, 443 HTTPS, 22 SSH?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Puertos: 80 HTTP, 443 HTTPS, 22 SSH", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Puertos: 80 HTTP, 443 HTTPS, 22 SSH. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Recon pasivo vs activo (legal)?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Recon pasivo vs activo (legal)", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recon pasivo vs activo (legal). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Tu propia red/lab primero?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Tu propia red/lab primero", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tu propia red/lab primero. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Conecta con Nmap del curso Kali?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Conecta con Nmap del curso Kali", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Conecta con Nmap del curso Kali. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES A...?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Definición operativa de los términos centrales de PUENTE HACIA KALI...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Definición operativa de los términos centrales de PUENTE HACIA KALI — REDES ANTES DE PENTESTING. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: PUENTE HACIA KALI — REDES ANTES DE PENTESTING', ¿cuál afirmación es correcta sobre: Ejemplo numérico o de código trazado paso a paso?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Ejemplo numérico o de código trazado paso a paso", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ejemplo numérico o de código trazado paso a paso. Las otras opciones representan malentendidos típicos."
        }
      ]
    }]
};
