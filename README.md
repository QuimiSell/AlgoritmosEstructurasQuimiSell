# Master Class QuimiSell

Plataforma educativa **offline-first** (PWA), desplegada gratis en **Vercel**. Progreso en `localStorage` — **sin base de datos ni costo de infra**.

**Autor:** [Selvin Miguel López Sanic](https://www.linkedin.com/in/selvin-miguel-l%C3%B3pez-sanic-791186210) · [YouTube @Quimisell](https://www.youtube.com/@Quimisell) · [quimicabless2020@gmail.com](mailto:quimicabless2020@gmail.com)

[![CI](https://github.com/QuimiSell/AlgoritmosEstructurasQuimiSell/actions/workflows/ci.yml/badge.svg)](https://github.com/QuimiSell/AlgoritmosEstructurasQuimiSell/actions/workflows/ci.yml)

---

## Cursos (12)

| Curso | Módulos | Enfoque |
|-------|---------|---------|
| 🔀 **Git, GitHub, CI/CD y Vercel ($0)** | 10 | DevOps esencial — este repo usa este pipeline |
| 🌐 **Redes para Desarrolladores** | 10 | TCP/IP, DNS, HTTP, TLS — puente hacia Kali |
| 🗄️ **SQL, Datos y RAG para IA** | 10 | SQL, embeddings, chunking, pipeline RAG $0 |
| 📱 **IA Móvil On-Device (Edge)** | 8 | Cuantización, ONNX, privacidad, Play Store |
| ✅ **Evaluación y Confiabilidad IA** | 10 | Métricas, guardrails, red team, SLOs |
| 🐉 **Kali Linux & Nmap** | 20 | Ciberseguridad práctica + consola simulada |
| 📊 **Complejidad Big-O + IA** | 20 | Big-O puro + FLOPs, Transformers |
| ⚡ **Algoritmos y Estructuras** | 10 | Fundamentos CS |
| 🤖 **Ingeniero en la Era IA** | 25 | Arquitectura, RAG, DevSecOps |
| 🧼 **Clean Code & SOLID** | 10 | Calidad y patrones GoF |
| 🧠 **Matemática para Sistemas** | 10 | Discreta, álgebra lineal, cálculo |
| ⚙️ **Autómatas y Compiladores** | 15 | Teoría formal |

---

## Características

- Modo oscuro · PWA instalable · progreso local + export JSON
- Quizzes estilo Duolingo · exámenes finales · laboratorios con GitHub
- Simulador Kali Linux · tutor offline (sin API de pago)

---

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # verificar TypeScript
npm run build        # dist/ para Vercel
```

---

## Ciclo Git → CI → Vercel ($0)

Ver **[CONTRIBUTING.md](CONTRIBUTING.md)** para el flujo completo:

```text
rama feature → PR → GitHub Actions (typecheck + build) → preview Vercel → merge main → producción
```

No se requiere backend ni base de datos.

---

## Despliegue en Vercel

1. Conecta el repo [QuimiSell/AlgoritmosEstructurasQuimiSell](https://github.com/QuimiSell/AlgoritmosEstructurasQuimiSell) a Vercel.
2. Framework: **Vite** · Output: **dist** (o usar `vercel.json` incluido).
3. Cada merge a `main` con CI verde despliega automáticamente.

---

## Estructura

- `/courses` — contenido modular
- `/components` — UI React
- `/domain` — modelos y tutor offline
- `/hooks` — tema y progreso local
- `/constants/site.ts` — contacto y marca
- `/.github/workflows/ci.yml` — integración continua

---

## Contacto QuimiSell

| Canal | Enlace |
|-------|--------|
| YouTube | https://www.youtube.com/@Quimisell |
| LinkedIn | https://www.linkedin.com/in/selvin-miguel-l%C3%B3pez-sanic-791186210 |
| Email | quimicabless2020@gmail.com |
| GitHub | https://github.com/QuimiSell |
