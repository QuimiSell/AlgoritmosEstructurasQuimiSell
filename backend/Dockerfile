# Imagen lista del Backend QuimiSell.
# Integración multi-servicio (frontend + API): ver docs/DOCKER_INTEGRACION.md
# Uso aislado:
#   docker build -t quimisell-backend -f backend/Dockerfile backend
#   docker run --rm -p 4000:4000 -v quimisell-data:/app/data quimisell-backend

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=4000 \
    PROGRESS_STORE=json \
    DATA_DIR=/app/data \
    CORS_ORIGIN=http://localhost:3000 \
    LOG_LEVEL=info

RUN addgroup -S quimi && adduser -S quimi -G quimi
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
RUN mkdir -p /app/data && chown -R quimi:quimi /app

USER quimi
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:4000/api/v1/health || exit 1

CMD ["node", "dist/index.js"]
