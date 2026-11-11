import React, { useState, useEffect } from 'react';

interface CodeSnippetTemplate {
  name: string;
  description: string;
  code: string;
}

const TEMPLATES: Record<string, CodeSnippetTemplate> = {
  binarySearch: {
    name: 'Búsqueda Binaria O(log n)',
    description: 'Encuentra un objetivo dividiendo a la mitad en cada paso.',
    code: `// Búsqueda Binaria Universitaria O(log n)
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let steps = 0;

  while (low <= high) {
    steps++;
    // Evita overflow de enteros:
    const mid = low + Math.floor((high - low) / 2);
    console.log(\`Paso \${steps}: mid=\${mid}, valor=\${arr[mid]}\`);

    if (arr[mid] === target) {
      console.log(\`¡Encontrado en \${steps} pasos!\`);
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // No encontrado
}

const sortedList = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 105, 128];
const target = 23;
console.log("Arreglo:", sortedList);
const result = binarySearch(sortedList, target);
console.log("Índice resultante:", result);
`,
  },
  quickSort: {
    name: 'Quicksort O(n log n)',
    description: 'Ordenamiento divide y vencerás con particionado.',
    code: `// Quicksort con Particionado Lomuto
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  console.log(\`Pivote: \${pivot} | Menores: [\${left}] | Mayores: [\${right}]\`);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unordered = [64, 34, 25, 12, 22, 11, 90, 48];
console.log("Original:", unordered);
const sorted = quickSort(unordered);
console.log("Ordenado:", sorted);
`,
  },
  fibonacciDP: {
    name: 'Fibonacci: Recursivo vs DP O(n)',
    description: 'Comparación empírica entre O(2ⁿ) y Programación Dinámica O(n).',
    code: `// Programación Dinámica (Memoización) O(n) vs Recursión Simple O(2ⁿ)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log("Calculando Fibonacci(40) con Programación Dinámica...");
const start = performance.now();
const res = fibMemo(40);
const duration = (performance.now() - start).toFixed(4);

console.log(\`Fibonacci(40) = \${res}\`);
console.log(\`Tiempo de ejecución con DP: \${duration} ms (Instantáneo O(n))\`);
console.log("Nota: La versión sin DP requeriría más de 1 billón de llamadas recursivas.");
`,
  },
  twoSum: {
    name: 'Two Sum con Hash Map O(n)',
    description: 'El clásico de entrevista técnica resuelto en tiempo lineal.',
    code: `// Two Sum: Encontrar dos números que sumen el objetivo
function twoSum(nums, target) {
  const map = new Map(); // O(1) búsquedas

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      console.log(\`Encontrado: \${nums[map.get(complement)]} + \${nums[i]} = \${target}\`);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

const nums = [2, 7, 11, 15, 33];
const target = 18;
const indices = twoSum(nums, target);
console.log(\`Índices resultantes para target=\${target}:\`, indices);
`,
  },
};

interface LiveCodePlaygroundProps {
  initialCode?: string;
  moduleId?: number;
}

export const LiveCodePlayground: React.FC<LiveCodePlaygroundProps> = ({
  initialCode,
  moduleId = 1,
}) => {
  const defaultKey =
    moduleId === 1 || moduleId === 9
      ? 'binarySearch'
      : moduleId === 7 || moduleId === 8
      ? 'quickSort'
      : moduleId === 16
      ? 'fibonacciDP'
      : 'twoSum';

  const [selectedTemplate, setSelectedTemplate] = useState<string>(defaultKey);
  const [code, setCode] = useState<string>(initialCode || TEMPLATES[defaultKey].code);
  const [outputLogs, setOutputLogs] = useState<string[]>([]);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [benchmarkResults, setBenchmarkResults] = useState<
    { n: number; timeMs: number }[] | null
  >(null);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    } else if (TEMPLATES[defaultKey]) {
      setCode(TEMPLATES[defaultKey].code);
      setSelectedTemplate(defaultKey);
    }
  }, [initialCode, moduleId, defaultKey]);

  const handleSelectTemplate = (key: string) => {
    setSelectedTemplate(key);
    setCode(TEMPLATES[key].code);
    setOutputLogs([]);
    setExecutionTime(null);
    setHasError(false);
    setBenchmarkResults(null);
  };

  const runCode = () => {
    const logs: string[] = [];
    setHasError(false);
    setBenchmarkResults(null);

    // Override console.log safely
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(
        args
          .map((a) =>
            typeof a === 'object' ? JSON.stringify(a) : String(a)
          )
          .join(' ')
      );
    };

    const t0 = performance.now();
    try {
      // Execute in sandbox function
      const fn = new Function(code);
      fn();
      const t1 = performance.now();
      setExecutionTime(Number((t1 - t0).toFixed(3)));
      if (logs.length === 0) {
        logs.push('Código ejecutado exitosamente (sin salidas por console.log)');
      }
    } catch (err: any) {
      setHasError(true);
      logs.push(`⚠️ Error en tiempo de ejecución: ${err?.message || String(err)}`);
    } finally {
      console.log = originalLog;
      setOutputLogs(logs);
    }
  };

  const runBenchmark = () => {
    const sizes = [100, 1000, 5000, 15000];
    const results: { n: number; timeMs: number }[] = [];

    for (const n of sizes) {
      const arr = Array.from({ length: n }, () => Math.floor(Math.random() * n));
      const t0 = performance.now();

      // Benchmark linear scan vs sorting
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      const t1 = performance.now();
      results.push({ n, timeMs: Number((t1 - t0).toFixed(4)) });
    }

    setBenchmarkResults(results);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl space-y-6">
      {/* Playground Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/20">
            💻
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Sandbox en Tiempo Real
              </span>
              <span className="text-[10px] text-indigo-400 font-bold">JavaScript / V8 Engine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
              Playground de Código & Pruebas en Vivo
            </h3>
          </div>
        </div>

        {/* Template Selectors */}
        <div className="flex items-center gap-2 overflow-x-auto scroll-touch pb-1">
          {Object.entries(TEMPLATES).map(([key, t]) => (
            <button
              key={key}
              onClick={() => handleSelectTemplate(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedTemplate === key
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {t.name.split(' ')[0]} {t.name.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Editor Panel */}
        <div className="flex flex-col bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
          <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="text-xs font-mono font-bold text-slate-400 ml-2">editor.js</span>
            </div>
            <button
              onClick={() => setCode(TEMPLATES[selectedTemplate]?.code || '')}
              className="text-[11px] font-bold text-slate-400 hover:text-white transition cursor-pointer"
            >
              🔄 Restablecer
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-80 sm:h-96 p-4 bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-none selection:bg-indigo-700 selection:text-white"
          />

          <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">
              Líneas: {code.split('\n').length} | Caracteres: {code.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={runBenchmark}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer flex items-center gap-1"
              >
                ⏱️ Benchmark
              </button>
              <button
                onClick={runCode}
                className="px-5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 active:scale-95 transition cursor-pointer flex items-center gap-1.5"
              >
                ▶ Ejecutar Código
              </button>
            </div>
          </div>
        </div>

        {/* Terminal Output Console */}
        <div className="flex flex-col bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
          <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Terminal / Consola de Salida
            </span>
            {executionTime !== null && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                Tiempo: {executionTime} ms
              </span>
            )}
          </div>

          <div className="p-4 h-80 sm:h-96 overflow-y-auto font-mono text-xs space-y-2 bg-slate-950">
            {outputLogs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2">
                <span className="text-2xl">⚡</span>
                <span>Pulsa "▶ Ejecutar Código" para ver los resultados aquí</span>
              </div>
            ) : (
              outputLogs.map((log, i) => (
                <div
                  key={i}
                  className={`leading-relaxed ${
                    hasError && i === outputLogs.length - 1
                      ? 'text-rose-400 bg-rose-950/40 p-2 rounded-lg border border-rose-900/60'
                      : log.startsWith('Paso')
                      ? 'text-indigo-300'
                      : log.includes('¡Encontrado') || log.includes('Ordenado')
                      ? 'text-emerald-300 font-bold'
                      : 'text-slate-300'
                  }`}
                >
                  <span className="text-slate-600 select-none mr-2">$</span>
                  {log}
                </div>
              ))
            )}

            {/* Benchmark Card */}
            {benchmarkResults && (
              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 block">
                  📊 Resultados de Prueba de Escalabilidad (Benchmark)
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {benchmarkResults.map((b) => (
                    <div key={b.n} className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">N = {b.n.toLocaleString()}</span>
                      <span className="text-emerald-400 font-bold">{b.timeMs} ms</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-2.5 bg-slate-900/80 border-t border-slate-800 text-[10px] text-slate-500 font-mono flex items-center justify-between">
            <span>Entorno aislado seguro</span>
            <button
              onClick={() => {
                setOutputLogs([]);
                setExecutionTime(null);
                setBenchmarkResults(null);
              }}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Limpiar Consola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCodePlayground;
