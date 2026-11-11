import React, { useState } from 'react';

export type AcademicLevel = 'all' | 'level0' | 'intermediate' | 'university';

interface LevelProgressiveViewProps {
  moduleId: number;
  moduleTitle: string;
  theoryContent: string;
  keyConcepts: string[];
}

export const LevelProgressiveView: React.FC<LevelProgressiveViewProps> = ({
  moduleId,
  moduleTitle,
  theoryContent,
  keyConcepts,
}) => {
  const [activeLevel, setActiveLevel] = useState<AcademicLevel>('all');
  const [showMemoryInspector, setShowMemoryInspector] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      {/* Level Selector Toolbar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-5 rounded-3xl border border-indigo-900/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Ruta Pedagógica 0 a Universitario
            </span>
            <span className="text-xs text-slate-400">| Elige tu profundidad de estudio:</span>
          </div>
          <h4 className="text-lg font-black text-white mt-1">
            Profundización Progresiva por Niveles
          </h4>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800/80 overflow-x-auto scroll-touch">
          {[
            { id: 'all', label: '🌟 Ruta Completa', color: 'from-indigo-600 to-purple-600' },
            { id: 'level0', label: '🟢 Nivel 0 (Intuición)', color: 'from-emerald-600 to-teal-600' },
            { id: 'intermediate', label: '🟡 Intermedio (RAM)', color: 'from-amber-600 to-orange-600' },
            { id: 'university', label: '🟣 Universitario (Rigor)', color: 'from-purple-600 to-pink-600' },
          ].map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id as AcademicLevel)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                activeLevel === lvl.id
                  ? `bg-gradient-to-r ${lvl.color} text-white shadow-md scale-102`
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
      </div>

      {/* LEVEL 0: INTUITION & METAPHORS */}
      {(activeLevel === 'all' || activeLevel === 'level0') && (
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-emerald-600/30">
                0
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  Nivel 0 · Fundamentos & Intuición Práctica
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  ¿Cómo entender este concepto sin tecnicismos oscuros?
                </h4>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full">
              Ideal para principiantes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <strong className="text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                <span>💡</span> Metáfora del Mundo Real
              </strong>
              <p>
                {moduleId === 1
                  ? 'Imagina buscar una palabra en un diccionario de 100,000 páginas. Si revisas hoja por hoja desde la primera (O(n)), tardarás horas. Pero si abres a la mitad y descartas 50,000 páginas de golpe (O(log n)), encuentras la palabra en menos de 17 divisiones.'
                  : moduleId === 2
                  ? 'Un arreglo en memoria es como un edificio de apartamentos con casilleros idénticos numerados del 0 al 9. Si sabes el número del apartamento, vas directo en 1 segundo (O(1)). Pero si quieres insertar un casillero nuevo en el piso 2, debes empujar a todos los vecinos hacia arriba (O(n)).'
                  : moduleId === 3
                  ? 'Una lista enlazada es como una búsqueda del tesoro: no hay casilleros juntos. Cada pista te dice la dirección exacta de la siguiente pista. Añadir una nueva pista al inicio toma 1 segundo, pero para saber cuántas pistas hay en total, tienes que recorrerlas una por una.'
                  : moduleId === 4
                  ? 'La Pila (Stack) es como una pila de platos limpios en la cocina: el último plato lavado se coloca encima y es el primero en ser usado (LIFO). La Cola (Queue) es la fila del banco: quien llega primero es atendido primero (FIFO).'
                  : moduleId === 5
                  ? 'La Tabla Hash es como el índice alfabético gigante de un archivador: aplicas una regla mágica al nombre del cliente y te dice directamente en qué gaveta exacta está su expediente sin buscar hoja por hoja.'
                  : 'Este concepto descompone un problema gigante en partes atómicas verificables. Dominar la intuición antes de escribir código previene el 90% de los errores de diseño.'}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <strong className="text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                <span>🎯</span> Regla Nemotécnica para Recordarlo
              </strong>
              <p>
                {moduleId === 1
                  ? 'Big-O nunca mide "segundos de reloj" (porque un CPU viejo tarda más que uno nuevo), sino el número de pasos que debe dar el procesador cuando el número de datos (N) se multiplica.'
                  : moduleId === 2
                  ? 'Contigüidad física = Velocidad extrema. La CPU ama los arreglos porque puede cargar 64 bytes contiguos en su memoria caché de un solo viaje eléctrico.'
                  : moduleId === 3
                  ? 'Listas enlazadas intercambian velocidad de lectura (cache locality) por flexibilidad de inserción (sin desplazar memoria).'
                  : 'Pregúntate siempre: ¿Quién entra primero?, ¿quién sale primero? y ¿cuánto cuesta duplicar el tamaño de la entrada?'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* LEVEL INTERMEDIATE: RAM MEMORY & DATA STRUCTURES */}
      {(activeLevel === 'all' || activeLevel === 'intermediate') && (
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-amber-600/30">
                1
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  Nivel Intermedio · Ingeniería de Software & Memoria RAM
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  ¿Cómo funciona físicamente en la memoria del computador?
                </h4>
              </div>
            </div>
            <button
              onClick={() => setShowMemoryInspector(!showMemoryInspector)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white transition cursor-pointer shadow-sm"
            >
              {showMemoryInspector ? 'Ocultar Inspector RAM' : '🔍 Ver Inspector RAM'}
            </button>
          </div>

          {/* Interactive Memory Diagram */}
          {showMemoryInspector && (
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 animate-in fade-in duration-300">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                Arquitectura de Memoria RAM (Stack vs Heap)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { addr: '0x7FFF0010', type: 'Stack', val: 'Puntero *head -> 0x10A', desc: 'Variables locales rápidas' },
                  { addr: '0x0040A120', type: 'Heap', val: 'Node { val: 42, next: 0x10B }', desc: 'Memoria dinámica asignada' },
                  { addr: '0x0040A130', type: 'Heap', val: 'Node { val: 89, next: NULL }', desc: 'Siguiente nodo enlazado' },
                  { addr: '0x0020B000', type: 'Cache L1', val: 'Línea de 64 bytes cargada', desc: '95% de aciertos (Hits)' },
                ].map((slot) => (
                  <div key={slot.addr} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-indigo-400 text-[10px] block font-bold">{slot.addr}</span>
                    <span className="text-amber-300 font-bold block my-0.5">{slot.val}</span>
                    <span className="text-[9px] text-slate-500 block">{slot.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-700 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block mb-1">
                ⚙️ Gestión de Punteros
              </strong>
              <p className="text-xs leading-relaxed">
                En lenguajes de bajo nivel (C/C++/Rust), cada estructura maneja direcciones directas de memoria de 64 bits (8 bytes). En lenguajes de alto nivel (JavaScript/Python/Java), las referencias son manejadas por el Garbage Collector (GC).
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block mb-1">
                🏎️ Cache Locality & Latencia
              </strong>
              <p className="text-xs leading-relaxed">
                Acceder a memoria en Cache L1 toma ~1 nanosegundo. Acceder a memoria RAM principal toma ~100 nanosegundos (¡100 veces más lento!). Por eso los arreglos contiguos ganan a las listas enlazadas en la práctica real.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block mb-1">
                🛡️ Manejo de Casos Borde
              </strong>
              <p className="text-xs leading-relaxed">
                El 80% de bugs en entrevistas técnicas ocurren por olvidar: lista vacía (head == null), lista con un solo elemento, índices fuera de rango (IndexOutOfBounds) y desbordamiento de enteros (Integer Overflow).
              </p>
            </div>
          </div>
        </section>
      )}

      {/* LEVEL UNIVERSITY: MATHEMATICAL RIGOR & FORMAL THEORY */}
      {(activeLevel === 'all' || activeLevel === 'university') && (
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-purple-600/30">
                2
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-800 dark:text-purple-400">
                  Nivel Universitario · Rigor Matemático & Demostración Formal
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  Definiciones Asintóticas, Ecuaciones de Recurrencia e Invariantes
                </h4>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
              Currículo Universitario CS
            </span>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 space-y-3 shadow-inner">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <span className="text-purple-400 font-bold">📐 Teorema / Definición Formal</span>
              <span className="text-[10px] text-slate-500">Cormen, Leiserson, Rivest & Stein (CLRS)</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <p className="text-emerald-400 font-bold">
                f(n) = O(g(n)) ⟺ ∃ c &gt; 0, n₀ &gt; 0 tal que ∀ n ≥ n₀ : 0 ≤ f(n) ≤ c · g(n)
              </p>
              <p className="text-slate-400 text-[11px]">
                Significa que f(n) está acotada superiormente por un múltiplo constante de g(n) para valores asintóticamente grandes de n.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-indigo-400 font-bold block mb-1">Teorema Maestro (Master Theorem):</span>
                <span>T(n) = a · T(n/b) + f(n)</span>
                <p className="text-slate-400 mt-1">
                  Resuelve recurrencias divide y vencerás evaluando la relación entre log_b(a) y el crecimiento de f(n).
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800">
                <span className="text-amber-400 font-bold block mb-1">Invariante de Ciclo (Loop Invariant):</span>
                <span>Inicialización, Mantenimiento y Terminación</span>
                <p className="text-slate-400 mt-1">
                  Método inductivo formal para demostrar matemáticamente que un algoritmo produce la salida correcta.
                </p>
              </div>
            </div>
          </div>

          {/* Industry Application Card */}
          <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 flex items-start gap-3">
            <span className="text-2xl">🏭</span>
            <div className="text-xs space-y-1">
              <strong className="text-purple-900 dark:text-purple-300 font-bold block text-sm">
                Caso Real en Big Tech (Google, PostgreSQL, Linux Kernel)
              </strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                PostgreSQL implementa <strong>B+ Trees</strong> para sus índices de claves primarias: una sola lectura en disco trae un nodo con 200 punteros, logrando que una búsqueda entre 100 millones de registros requiera solo 3 o 4 accesos a disco (O(log₂₀₀ n)).
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LevelProgressiveView;
