# Contribuir a Master Class QuimiSell

Proyecto **offline-first**, desplegado gratis en **Vercel** (sitio estático). **No usamos base de datos** — el progreso vive en `localStorage` del navegador.

## Ciclo de trabajo (Git → CI → Vercel)

```text
main ─────────────────────────────► Producción (Vercel)
  ▲
  │ merge (CI verde)
  │
feature/cursor/descripcion-14a7 ◄── PR + preview Vercel
```

1. Crea una rama desde `main`:
   ```bash
   git checkout main && git pull origin main
   git checkout -b cursor/mi-cambio-14a7
   ```
2. Desarrolla y verifica localmente:
   ```bash
   npm install
   npm run typecheck
   npm run build
   npm run dev   # opcional
   ```
3. Commit y push:
   ```bash
   git add -A && git commit -m "feat: descripción clara"
   git push -u origin cursor/mi-cambio-14a7
   ```
4. Abre un **Pull Request** hacia `main`.
5. Espera que **GitHub Actions** (`.github/workflows/ci.yml`) pase en verde.
6. Revisa el **preview de Vercel** en el PR (si está conectado).
7. Merge → Vercel despliega producción automáticamente.

## Reglas del repositorio

- **$0 en infra:** no agregar bases de datos, backends de pago ni APIs con costo por uso.
- **Sin secretos en Git:** no commitear `.env`, API keys ni tokens.
- **Contenido de cursos:** archivos en `/courses/*.ts` — mantener el estilo existente (módulos, quiz, lab).
- **Contacto oficial:** usar `constants/site.ts` (YouTube, LinkedIn, email).

## Estructura

| Carpeta | Rol |
|---------|-----|
| `/courses` | Catálogo de cursos (datos embebidos) |
| `/components` | UI React |
| `/domain` | Modelos y tutor offline |
| `/hooks` | Tema, progreso local |
| `/constants` | Site + módulos compartidos |

## Contacto

- **Autor:** Selvin Miguel López Sanic — [LinkedIn](https://www.linkedin.com/in/selvin-miguel-l%C3%B3pez-sanic-791186210)
- **YouTube:** [@Quimisell](https://www.youtube.com/@Quimisell)
- **Email:** quimicabless2020@gmail.com
