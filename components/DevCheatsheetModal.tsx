import React, { useState } from 'react';

interface DevCheatsheetModalProps {
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

interface CheatsheetCategory {
  id: string;
  name: string;
  icon: string;
  items: Array<{
    title: string;
    description: string;
    code: string;
    badge?: string;
  }>;
}

const CHEATSHEETS: CheatsheetCategory[] = [
  {
    id: 'bigo',
    name: 'Big-O Asintótica',
    icon: '⚡',
    items: [
      {
        title: 'Búsqueda Binaria vs Lineal',
        description: 'Búsqueda en arreglo ordenado divide el espacio a la mitad cada iteración.',
        code: '// Complejidad Temporal: O(log N) | Espacial: O(1)\nfunction binarySearch(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    const mid = (low + high) >> 1;\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}',
        badge: 'O(log N)',
      },
      {
        title: 'Tabla Hash (Hash Map)',
        description: 'Acceso amortizado O(1) vía función hash y resolución de colisiones por encadenamiento.',
        code: '// Acceso promedio: O(1) | Peor caso (todas las colisiones): O(N)\nconst map = new Map();\nmap.set(key, value); // O(1)\nconst val = map.get(key); // O(1)',
        badge: 'O(1) Promedio',
      },
      {
        title: 'QuickSort vs MergeSort',
        description: 'QuickSort particiona in-place O(1) espacio; MergeSort garantiza O(N log N) en todo caso con O(N) memoria.',
        code: '// QuickSort: O(N log N) promedio, O(N^2) peor (pivote degenerado), Espacio O(log N)\n// MergeSort: O(N log N) garantizado, Espacio O(N)',
        badge: 'O(N log N)',
      },
    ],
  },
  {
    id: 'git',
    name: 'Git & DevOps',
    icon: '🐙',
    items: [
      {
        title: 'Rebase Interactivo (Squash & Limpieza)',
        description: 'Combina múltiples commits sucios en uno solo antes del Pull Request.',
        code: 'git rebase -i HEAD~3\n# En el editor cambia "pick" por "squash" (o "s") en los commits secundarios\ngit push origin mi-rama --force-with-lease',
        badge: 'Git Pro',
      },
      {
        title: 'Cherry-Pick (Rescatar commit específico)',
        description: 'Aplica un commit específico de otra rama a tu rama actual.',
        code: 'git checkout main\ngit cherry-pick <hash-del-commit>',
        badge: 'Git Rescue',
      },
      {
        title: 'Deshacer último commit sin perder cambios',
        description: 'Mueve el HEAD atrás pero deja tus archivos modificados listos en el stage.',
        code: 'git reset --soft HEAD~1',
        badge: 'Deshacer',
      },
      {
        title: 'Limpiar ramas remotas borradas',
        description: 'Elimina las referencias locales a ramas que ya fueron eliminadas en GitHub.',
        code: 'git fetch -p && git remote prune origin',
        badge: 'Mantenimiento',
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL & Vector DB',
    icon: '🐬',
    items: [
      {
        title: 'Diagnosticar consultas lentas',
        description: 'Examina si la base de datos realiza un Seq Scan costoso o un Index Scan.',
        code: 'EXPLAIN ANALYZE\nSELECT u.id, u.email, COUNT(o.id) as total_orders\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= NOW() - INTERVAL \'30 days\'\nGROUP BY u.id, u.email;\n-- Busca "Seq Scan" e indexa columnas en WHERE/JOIN',
        badge: 'Performance',
      },
      {
        title: 'Distancia Coseno en pgvector (PostgreSQL)',
        description: 'Búsqueda por similitud semántica para RAG y embeddings de IA.',
        code: 'CREATE EXTENSION IF NOT EXISTS vector;\n\nSELECT document_id, content, 1 - (embedding <=> $1) AS cosine_similarity\nFROM document_chunks\nORDER BY embedding <=> $1\nLIMIT 5;',
        badge: 'IA & RAG',
      },
    ],
  },
  {
    id: 'kali',
    name: 'Kali & Redes',
    icon: '🛡️',
    items: [
      {
        title: 'Escaneo TCP SYN Sigiloso (Nmap)',
        description: 'Escaneo sin completar el 3-way handshake, evitando detección de logging de aplicación.',
        code: 'sudo nmap -sS -sV -sC -p- -T4 -oN escaneo_completo.txt 192.168.1.10\n# -sS: SYN Scan | -sV: Versión de servicios | -sC: Scripts básicos NSE',
        badge: 'Nmap Core',
      },
      {
        title: 'Prueba de conexión TCP pura con Netcat',
        description: 'Verifica conectividad y banner grabbing de puertos sin navegador.',
        code: 'nc -zv 192.168.1.1 80 443 22\n# O banner grabbing:\nnc 192.168.1.1 80\nHEAD / HTTP/1.1\nHost: target.local',
        badge: 'Netcat',
      },
    ],
  },
];

export const DevCheatsheetModal: React.FC<DevCheatsheetModalProps> = ({
  onClose,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('bigo');

  const currentCategory = CHEATSHEETS.find(c => c.id === activeCategory) || CHEATSHEETS[0];

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      onShowToast('¡Snippet copiado al portapapeles!');
    } catch {
      onShowToast('Error al copiar');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto overscroll-contain text-slate-800 dark:text-slate-100 flex flex-col space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              📋 Chuletario Rápido del Desarrollador
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Dev Cheat Sheet QuimiSell
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Comandos, patrones y snippets de arquitectura listos para copiar con 1 click.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scroll-touch">
          {CHEATSHEETS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Snippets Cards */}
        <div className="space-y-4">
          {currentCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      {item.badge}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleCopyCode(item.code)}
                  className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold text-slate-700 dark:text-slate-200 transition active:scale-95 cursor-pointer shrink-0"
                >
                  📋 Copiar
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

              <pre className="bg-slate-900 text-slate-200 p-3.5 rounded-xl text-xs font-mono overflow-x-auto scroll-touch border border-slate-800">
                <code>{item.code}</code>
              </pre>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DevCheatsheetModal;
