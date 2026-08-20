# Integración Docker — Master Class QuimiSell

Este documento es la **guía de integración** (pendiente de cablear en el root). El backend ya trae `backend/Dockerfile` usable en aislamiento; aquí se define cómo unir **frontend (Vite/React)** + **API** después.

## Estado actual

| Pieza | Estado | Ubicación |
| --- | --- | --- |
| Backend API | Listo para correr / imagen | `backend/` + `backend/Dockerfile` |
| Frontend | Local con `npm run dev` | raíz del repo |
| `docker-compose.yml` (root) | **Pendiente** — se agrega en el siguiente paso | — |
| Dockerfile frontend | **Pendiente** | — |
| Cliente HTTP en React | **Pendiente** | — |

## Objetivo de la composición

```text
┌─────────────────┐     HTTP :3000      ┌──────────────────┐
│  quimisell-web  │ ──────────────────► │  navegador       │
│  (Nginx/Vite)   │                     └──────────────────┘
└────────┬────────┘
         │ proxy /api → :4000
         ▼
┌─────────────────┐     volumen        ┌──────────────────┐
│ quimisell-api   │ ◄───────────────── │  quimisell-data  │
│ (Node 20)       │   progress JSON    │  (named volume)  │
└─────────────────┘                    └──────────────────┘
```

## Paso 1 — Probar solo el backend en Docker (ya posible)

Desde la raíz del repo:

```bash
docker build -t quimisell-backend -f backend/Dockerfile backend
docker run --rm -p 4000:4000 \
  -e CORS_ORIGIN=http://localhost:3000 \
  -v quimisell-data:/app/data \
  quimisell-backend
```

Verificar:

```bash
curl -s http://localhost:4000/api/v1/health
```

## Paso 2 — Dockerfile del frontend (siguiente iteración)

Propuesta multi-stage (alineada al curso de Ingeniero IA):

1. `deps` / `build`: `npm ci` + `npm run build` (Vite → `dist/`).
2. `runtime`: Nginx alpine sirviendo `dist/` y **proxy** de `/api/` → `quimisell-api:4000`.

Fragmento Nginx sugerido:

```nginx
location /api/ {
  proxy_pass http://quimisell-api:4000/api/;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Así el browser llama `/api/v1/...` en el mismo origen y no hace falta pelear CORS en producción.

## Paso 3 — `docker-compose.yml` en la raíz (borrador)

Cuando integremos, el archivo en la raíz puede verse así:

```yaml
services:
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: quimisell-api
    environment:
      PORT: 4000
      PROGRESS_STORE: json
      DATA_DIR: /app/data
      CORS_ORIGIN: http://localhost:3000,http://localhost
      LOG_LEVEL: info
    volumes:
      - quimisell-data:/app/data
    ports:
      - "4000:4000"
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://127.0.0.1:4000/api/v1/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  web:
    build:
      context: .
      dockerfile: Dockerfile  # por crear
    container_name: quimisell-web
    depends_on:
      api:
        condition: service_healthy
    ports:
      - "3000:80"

volumes:
  quimisell-data:
```

Arranque previsto:

```bash
docker compose up --build
```

## Paso 4 — Variables y secretos

| Variable | Servicio | Notas |
| --- | --- | --- |
| `PORT` | api | `4000` |
| `PROGRESS_STORE` | api | `json` en contenedor |
| `DATA_DIR` | api | `/app/data` + volumen |
| `CORS_ORIGIN` | api | Orígenes del front; con proxy Nginx puede ser restrictivo |
| `GEMINI_API_KEY` | web (opcional) | Solo si se habilita el tutor en nube; **no** meterla en la imagen — usar secrets / `.env` no versionado |

Crear `.env` en root (gitignored) cuando se active compose:

```env
CORS_ORIGIN=http://localhost:3000
# GEMINI_API_KEY=
```

## Paso 5 — Conectar el frontend al API

Orden sugerido (sin romper offline-first):

1. Añadir `VITE_API_BASE_URL` (vacío = modo localStorage; en Docker `""` o `/api/v1` vía proxy).
2. Crear un adapter fino (`api/client.ts`) con `fetch`.
3. En `FinalExamModal` / progreso: si hay base URL, `PUT` al backend; si no, `localStorage` como hoy.
4. Opcional: `POST /api/v1/tutor/validate` desde el drawer del tutor.

## Checklist de integración (para la siguiente sesión)

- [ ] Crear `Dockerfile` del frontend (multi-stage + Nginx).
- [ ] Crear `docker-compose.yml` en la raíz con servicios `api` + `web` + volumen.
- [ ] Añadir `.dockerignore` en la raíz (node_modules, dist, .git, scratch).
- [ ] Feature-flag / `VITE_API_BASE_URL` en el cliente React.
- [ ] Probar `docker compose up --build` y healthchecks.
- [ ] Documentar en el README raíz los dos modos: local npm y Docker.

## Notas de diseño

- El contenido completo de los cursos **sigue en el frontend** (offline). El API solo expone **metadatos** + **progreso/exámenes/tutor**.
- Persistencia JSON es deliberada para el primer corte Docker (volumen simple). Migrar a Postgres/SQLite es un cambio de adapter en `infrastructure/persistence` sin tocar dominio.
- El `HEALTHCHECK` del `backend/Dockerfile` usa `wget` (incluido en alpine node image via busybox en muchas variantes; si falla en un build concreto, cambiar a `node -e "fetch(...)"`).

## Comandos rápidos de referencia

```bash
# Solo API (ya disponible)
docker build -t quimisell-backend -f backend/Dockerfile backend
docker run --rm -p 4000:4000 -v quimisell-data:/app/data quimisell-backend

# API en modo desarrollo (host)
cd backend && npm install && npm run dev
```
