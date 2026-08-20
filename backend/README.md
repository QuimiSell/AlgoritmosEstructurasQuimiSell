# Backend API — Master Class QuimiSell

API REST en Node.js + TypeScript con arquitectura hexagonal (alineada al `/domain` del frontend).

> **Docker:** el `Dockerfile` de este directorio ya está listo. La composición frontend + API se documenta en [`docs/DOCKER_INTEGRACION.md`](../docs/DOCKER_INTEGRACION.md) para integrar después.

## Qué incluye (alistado)

| Pieza | Ruta | Rol |
| --- | --- | --- |
| Config | `src/config/env.ts` | Puerto, CORS, store, `DATA_DIR` (Zod) |
| Dominio | `src/domain/` | Modelos + puertos (sin Express) |
| Casos de uso | `src/application/` | Cursos, progreso/exámenes, tutor |
| Catálogo | `src/data/courses.catalog.ts` | Metadatos de los 6 cursos |
| HTTP | `src/infrastructure/http/` | Rutas `/api/v1/*`, middleware |
| Persistencia | `src/infrastructure/persistence/` | `memory` o `json` (volumen Docker) |
| Entrada | `src/index.ts` / `src/app.ts` | Bootstrap + composition root |

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/` | Índice del API |
| `GET` | `/api/v1/health` | Salud del servicio |
| `GET` | `/api/v1/courses` | Listado de cursos (resumen) |
| `GET` | `/api/v1/courses/:courseId` | Detalle de un curso |
| `GET` | `/api/v1/progress/:courseId?studentId=` | Progreso de módulos |
| `PUT` | `/api/v1/progress/:courseId` | Guardar progreso |
| `GET` | `/api/v1/exams/:courseId?studentId=` | Intento de examen final |
| `PUT` | `/api/v1/exams/:courseId` | Guardar/enviar examen |
| `POST` | `/api/v1/tutor/validate` | Validar código por keywords |

### Ejemplos

```bash
curl -s http://localhost:4000/api/v1/health | jq

curl -s http://localhost:4000/api/v1/courses | jq

curl -s -X PUT http://localhost:4000/api/v1/exams/algoritmos \
  -H 'Content-Type: application/json' \
  -d '{"studentId":"local-student","answers":{"0":1,"1":0},"score":80,"submitted":true}' | jq

curl -s -X POST http://localhost:4000/api/v1/tutor/validate \
  -H 'Content-Type: application/json' \
  -d '{"code":"def es_par(n):\n    return n % 2 == 0","expectedKeywords":["def es_par","return","%","2"]}' | jq
```

## Arranque local (sin Docker)

```bash
cd backend
cp .env.example .env   # opcional
npm install
npm run dev            # http://0.0.0.0:4000
```

Producción local:

```bash
npm run build && npm start
```

## Variables de entorno

Ver `.env.example`. Resumen:

- `PORT` — default `4000`
- `CORS_ORIGIN` — orígenes del Vite frontend (`http://localhost:3000`)
- `PROGRESS_STORE` — `json` (disco) o `memory`
- `DATA_DIR` — carpeta del store JSON (montar volumen en Docker)

## Relación con el frontend

Hoy el frontend sigue **offline-first** (`localStorage` en exámenes, cursos embebidos). Este backend queda listo para:

1. Sincronizar progreso/exámenes entre dispositivos.
2. Validar ejercicios desde el servidor.
3. Exponer catálogo a otros clientes.

La conexión UI → API se hace en un paso posterior (cliente HTTP + feature flag). Docker se integra cuando ambos servicios estén estables — ver el MD de integración.
