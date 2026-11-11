import React, { useState, useMemo } from 'react';

interface DevCheatsheetModalProps {
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

interface CheatsheetItem {
  title: string;
  description: string;
  code: string;
  language: 'bash' | 'sql' | 'javascript' | 'typescript';
  badge: string;
  category: string;
}

interface CheatsheetCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  items: CheatsheetItem[];
}

const CATEGORIES: CheatsheetCategory[] = [
  {
    id: 'git',
    name: 'Git & DevOps',
    icon: '🐙',
    color: 'from-purple-500 to-indigo-500',
    items: [
      {
        title: 'Rebase Interactivo (Squash de commits)',
        description: 'Combina múltiples commits locales en uno solo limpio antes de abrir el Pull Request.',
        code: '# Combina los últimos 3 commits\ngit rebase -i HEAD~3\n# En el editor interactivo cambia "pick" por "squash" (o "s")\ngit push origin mi-rama --force-with-lease',
        language: 'bash',
        badge: 'Git Pro',
        category: 'Git & DevOps',
      },
      {
        title: 'Cherry-Pick (Rescatar un commit específico)',
        description: 'Aplica un commit puntual de otra rama en tu rama actual sin traer cambios no deseados.',
        code: 'git checkout main\ngit cherry-pick <hash-del-commit>',
        language: 'bash',
        badge: 'Rescate',
        category: 'Git & DevOps',
      },
      {
        title: 'Deshacer último commit sin perder tu código',
        description: 'Retrocede el commit pero mantiene todas las líneas modificadas listas para nuevo stage.',
        code: 'git reset --soft HEAD~1',
        language: 'bash',
        badge: 'Workflow',
        category: 'Git & DevOps',
      },
      {
        title: 'Limpiar ramas remotas ya eliminadas',
        description: 'Poda y sincroniza el árbol local eliminando referencias de ramas borradas en GitHub.',
        code: 'git fetch -p && git remote prune origin',
        language: 'bash',
        badge: 'Mantenimiento',
        category: 'Git & DevOps',
      },
    ],
  },
  {
    id: 'bigo',
    name: 'Complejidad Big-O',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500',
    items: [
      {
        title: 'Búsqueda Binaria (Divide y Vencerás)',
        description: 'División del espacio de búsqueda a la mitad en cada paso. Requiere arreglo ordenado.',
        code: '// Tiempo: O(log N) | Espacio: O(1)\nfunction binarySearch(arr: number[], target: number): number {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    const mid = (low + high) >> 1;\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}',
        language: 'typescript',
        badge: 'O(log N)',
        category: 'Complejidad Big-O',
      },
      {
        title: 'Tabla Hash (Acceso en tiempo constante)',
        description: 'Indexación mediante función hash con encadenamiento para resolución de colisiones.',
        code: '// Acceso promedio: O(1) amortizado | Peor caso: O(N)\nconst cache = new Map<string, any>();\ncache.set(key, value); // O(1)\nconst data = cache.get(key); // O(1)',
        language: 'typescript',
        badge: 'O(1) Promedio',
        category: 'Complejidad Big-O',
      },
      {
        title: 'QuickSort vs MergeSort',
        description: 'Comparativa de partición in-place frente a garantía asintótica estable.',
        code: '// QuickSort: O(N log N) promedio, O(N²) peor caso. Espacio in-place O(log N)\n// MergeSort: O(N log N) garantizado en todo caso. Espacio O(N)',
        language: 'typescript',
        badge: 'O(N log N)',
        category: 'Complejidad Big-O',
      },
    ],
  },
  {
    id: 'sql',
    name: 'SQL & Vector DB',
    icon: '🐬',
    color: 'from-cyan-500 to-blue-500',
    items: [
      {
        title: 'Diagnóstico de Consultas con EXPLAIN ANALYZE',
        description: 'Inspecciona tiempos reales de ejecución y detecta cuellos de botella (Seq Scan vs Index Scan).',
        code: 'EXPLAIN ANALYZE\nSELECT u.id, u.email, COUNT(o.id) as total_pedidos\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= NOW() - INTERVAL \'30 days\'\nGROUP BY u.id, u.email;\n-- Si observas "Seq Scan", añade un índice B-Tree en la columna filtrada',
        language: 'sql',
        badge: 'Optimización',
        category: 'SQL & Vector DB',
      },
      {
        title: 'Búsqueda por Similitud Coseno (pgvector / RAG)',
        description: 'Consulta de vecinos cercanos para embeddings de IA y búsqueda semántica en PostgreSQL.',
        code: 'CREATE EXTENSION IF NOT EXISTS vector;\n\nSELECT id, chunk_text, 1 - (embedding <=> $1) AS cosine_similarity\nFROM knowledge_embeddings\nORDER BY embedding <=> $1\nLIMIT 5;',
        language: 'sql',
        badge: 'IA & RAG',
        category: 'SQL & Vector DB',
      },
    ],
  },
  {
    id: 'network',
    name: 'Redes & Seguridad',
    icon: '🛡️',
    color: 'from-emerald-500 to-teal-500',
    items: [
      {
        title: 'Escaneo TCP SYN Sigiloso (Nmap)',
        description: 'Envía paquetes SYN sin completar el 3-way handshake para auditar puertos abiertos.',
        code: 'sudo nmap -sS -sV -sC -p- -T4 -oN reporte_red.txt 192.168.1.10\n# -sS: SYN Stealth | -sV: Versión de servicio | -sC: Scripts seguros NSE',
        language: 'bash',
        badge: 'Auditoría',
        category: 'Redes & Seguridad',
      },
      {
        title: 'Prueba de Conectividad y Banner Grabbing con Netcat',
        description: 'Comprueba si un socket TCP responde y extrae cabeceras del servidor.',
        code: '# Escaneo rápido de puertos\nnc -zv 192.168.1.1 80 443 22\n\n# Obtener cabecera HTTP cruda\nnc 192.168.1.1 80\nHEAD / HTTP/1.1\nHost: servidor.local',
        language: 'bash',
        badge: 'Diagnóstico',
        category: 'Redes & Seguridad',
      },
    ],
  },
];

export const DevCheatsheetModal: React.FC<DevCheatsheetModalProps> = ({
  onClose,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('git');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  const displayedItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentCategory.items;
    }
    const q = searchQuery.toLowerCase().trim();
    // Search across ALL categories if searching
    return CATEGORIES.flatMap(c => c.items).filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q)
    );
  }, [searchQuery, currentCategory]);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      onShowToast('✓ Comando copiado al portapapeles');
    } catch {
      onShowToast('Error al copiar');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto overscroll-contain text-slate-800 dark:text-slate-100 flex flex-col space-y-5">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/80">
                ⚡ Quick Reference & Code
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Guía Rápida de Comandos & Arquitectura
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Snippets y comandos de producción listos para copiar y utilizar en tus proyectos y terminales.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Search inside cheatsheets */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por comando (ej: rebase, explain, nmap, binary search)..."
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills (hidden when searching across all) */}
        {!searchQuery && (
          <div className="flex gap-2 overflow-x-auto pb-1 scroll-touch">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
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
        )}

        {/* Items List */}
        <div className="space-y-4">
          {displayedItems.length === 0 ? (
            <div className="text-center py-10 text-slate-400 dark:text-slate-500">
              <span className="text-2xl block mb-1">🔍</span>
              <p className="text-xs">No se encontraron snippets que coincidan con "{searchQuery}"</p>
            </div>
          ) : (
            displayedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-950/70 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 space-y-2.5 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/80">
                      {item.badge}
                    </span>
                    {searchQuery && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        ({item.category})
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopy(item.code)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold shadow-xs active:scale-95 transition cursor-pointer shrink-0 flex items-center gap-1"
                  >
                    <span>📋</span>
                    <span>Copiar</span>
                  </button>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Terminal / Code Window Preview */}
                <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>
                    <span className="uppercase tracking-widest text-[9px] font-bold text-slate-400">
                      {item.language}
                    </span>
                  </div>
                  <pre className="p-3 text-xs font-mono text-emerald-300 dark:text-emerald-400 overflow-x-auto scroll-touch leading-relaxed">
                    <code>{item.code}</code>
                  </pre>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default DevCheatsheetModal;
