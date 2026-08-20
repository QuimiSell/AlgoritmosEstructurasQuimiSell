import { createApp } from './app.js';
import { loadEnv } from './config/env.js';

const env = loadEnv();
const app = createApp({ env, version: '0.1.0' });

const server = app.listen(env.PORT, '0.0.0.0', () => {
  if (env.LOG_LEVEL !== 'silent') {
    console.log(
      `[quimisell-backend] listening on http://0.0.0.0:${env.PORT} (store=${env.PROGRESS_STORE})`
    );
  }
});

function shutdown(signal: string): void {
  console.log(`[quimisell-backend] ${signal} recibido — cerrando...`);
  server.close(() => process.exit(0));
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
