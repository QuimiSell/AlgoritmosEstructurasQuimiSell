import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Master Class QuimiSell',
        short_name: 'QuimiSell',
        description:
          'Plataforma educativa offline-first: algoritmos, ciberseguridad, IA móvil y más. Sin base de datos.',
        theme_color: '#4f46e5',
        background_color: '#f8fafc',
        display: 'standalone',
        lang: 'es',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor-charts';
            return 'vendor';
          }
          if (id.includes('/courses/kaliLinuxCourse')) return 'course-kali';
          if (id.includes('/courses/aiEngineerCourse')) return 'course-ai-engineer';
          if (id.includes('/courses/algorithmicComplexityCourse')) return 'course-complexity';
          if (id.includes('/courses/mathCourse')) return 'course-math';
          if (id.includes('/courses/automataCompilerCourse')) return 'course-automata';
          if (id.includes('/courses/cleanCodeCourse')) return 'course-clean-code';
          if (id.includes('/courses/gitDevOpsCourse')) return 'course-git';
          if (id.includes('/courses/edgeMobileAiCourse')) return 'course-edge-ai';
          if (id.includes('/courses/algorithmsCourse') || id.includes('/constants')) {
            return 'course-algorithms';
          }
        },
      },
    },
  },
});
