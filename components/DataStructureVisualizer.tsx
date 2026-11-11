import React, { useState, useEffect, useRef } from 'react';

export type VisualizerMode =
  | 'sorting'
  | 'binary-search'
  | 'stack-queue'
  | 'linked-list'
  | 'bst-tree'
  | 'graph-traversal'
  | 'bigo'
  | 'hash-table'
  | 'dp-grid'
  | 'bloom-filter';

interface DataStructureVisualizerProps {
  initialMode?: VisualizerMode;
  moduleId?: number;
}

export const DataStructureVisualizer: React.FC<DataStructureVisualizerProps> = ({
  initialMode,
  moduleId = 1,
}) => {
  // Determine suggested mode based on module or initialMode
  const getSuggestedMode = (mId: number): VisualizerMode => {
    if (initialMode) return initialMode;
    switch (mId) {
      case 1:
        return 'bigo';
      case 2:
        return 'binary-search';
      case 3:
        return 'linked-list';
      case 4:
        return 'stack-queue';
      case 5:
        return 'hash-table';
      case 6:
        return 'bst-tree';
      case 7:
      case 8:
        return 'sorting';
      case 9:
        return 'binary-search';
      case 10:
      case 11:
        return 'bst-tree';
      case 12:
        return 'sorting';
      case 13:
      case 14:
      case 15:
        return 'graph-traversal';
      case 16:
        return 'dp-grid';
      case 19:
        return 'bloom-filter';
      default:
        return 'sorting';
    }
  };

  const [mode, setMode] = useState<VisualizerMode>(getSuggestedMode(moduleId));

  useEffect(() => {
    setMode(getSuggestedMode(moduleId));
  }, [moduleId]);

  // ----------------------------------------------------
  // 1. SORTING VISUALIZER STATE & LOGIC
  // ----------------------------------------------------
  const [sortArray, setSortArray] = useState<number[]>([45, 12, 89, 34, 67, 23, 90, 15, 56, 78]);
  const [sortAlgo, setSortAlgo] = useState<'bubble' | 'selection' | 'insertion' | 'quick'>('bubble');
  const [sortIndices, setSortIndices] = useState<{ active: number[]; sorted: number[] }>({
    active: [],
    sorted: [],
  });
  const [sortStats, setSortStats] = useState({ comparisons: 0, swaps: 0, status: 'Listo para iniciar' });
  const [isSorting, setIsSorting] = useState(false);
  const [sortSpeed, setSortSpeed] = useState<number>(300);
  const sortingCancelledRef = useRef(false);

  const resetSortArray = (type: 'random' | 'nearly' | 'reversed' = 'random') => {
    sortingCancelledRef.current = true;
    setIsSorting(false);
    let arr: number[] = [];
    if (type === 'random') {
      arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 10);
    } else if (type === 'nearly') {
      arr = [12, 18, 25, 33, 40, 52, 48, 65, 80, 92];
    } else {
      arr = [95, 84, 73, 62, 51, 40, 32, 24, 15, 8];
    }
    setSortArray(arr);
    setSortIndices({ active: [], sorted: [] });
    setSortStats({ comparisons: 0, swaps: 0, status: 'Arreglo reiniciado. Elige algoritmo y pulsa Reproducir o Paso.' });
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const runBubbleSort = async () => {
    setIsSorting(true);
    sortingCancelledRef.current = false;
    const a = [...sortArray];
    const n = a.length;
    let comps = 0;
    let swaps = 0;
    const sorted: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (sortingCancelledRef.current) return;
        comps++;
        setSortIndices({ active: [j, j + 1], sorted });
        setSortStats({
          comparisons: comps,
          swaps,
          status: `Comparando a[${j}]=${a[j]} y a[${j + 1}]=${a[j + 1]}`,
        });
        await delay(sortSpeed);

        if (a[j] > a[j + 1]) {
          swaps++;
          const temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
          setSortArray([...a]);
          setSortStats({
            comparisons: comps,
            swaps,
            status: `Intercambiando a[${j}] y a[${j + 1}] (${temp} > ${a[j]})`,
          });
          await delay(sortSpeed);
        }
      }
      sorted.push(n - 1 - i);
      setSortIndices({ active: [], sorted: [...sorted] });
    }
    sorted.push(0);
    setSortIndices({ active: [], sorted: [...sorted] });
    setSortStats({
      comparisons: comps,
      swaps,
      status: `¡Ordenamiento completado! O(n²) operaciones realizadas.`,
    });
    setIsSorting(false);
  };

  const runSelectionSort = async () => {
    setIsSorting(true);
    sortingCancelledRef.current = false;
    const a = [...sortArray];
    const n = a.length;
    let comps = 0;
    let swaps = 0;
    const sorted: number[] = [];

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (sortingCancelledRef.current) return;
        comps++;
        setSortIndices({ active: [minIdx, j], sorted });
        setSortStats({
          comparisons: comps,
          swaps,
          status: `Buscando el mínimo: comparando actual mín (${a[minIdx]}) con a[${j}]=${a[j]}`,
        });
        await delay(sortSpeed);
        if (a[j] < a[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        swaps++;
        const temp = a[i];
        a[i] = a[minIdx];
        a[minIdx] = temp;
        setSortArray([...a]);
        setSortStats({
          comparisons: comps,
          swaps,
          status: `Intercambiando nuevo mínimo ${a[i]} a la posición ordenada ${i}`,
        });
        await delay(sortSpeed);
      }
      sorted.push(i);
      setSortIndices({ active: [], sorted: [...sorted] });
    }
    setSortStats({
      comparisons: comps,
      swaps,
      status: `¡Selection Sort completado! n*(n-1)/2 comparaciones.`,
    });
    setIsSorting(false);
  };

  const startSort = () => {
    if (isSorting) {
      sortingCancelledRef.current = true;
      setIsSorting(false);
      return;
    }
    if (sortAlgo === 'bubble') runBubbleSort();
    else if (sortAlgo === 'selection') runSelectionSort();
    else runBubbleSort();
  };

  // ----------------------------------------------------
  // 2. BINARY SEARCH STATE & LOGIC
  // ----------------------------------------------------
  const [bsArray] = useState<number[]>([4, 9, 15, 23, 31, 38, 45, 56, 67, 72, 84, 91, 98]);
  const [bsTarget, setBsTarget] = useState<number>(45);
  const [bsPointers, setBsPointers] = useState<{ low: number; mid: number; high: number } | null>(null);
  const [bsHistory, setBsHistory] = useState<string[]>([]);
  const [bsFound, setBsFound] = useState<boolean | null>(null);

  const runBinarySearchStepByStep = () => {
    let low = 0;
    let high = bsArray.length - 1;
    const history: string[] = [];
    let found = false;

    history.push(`Iniciando búsqueda binaria para el objetivo: ${bsTarget}`);
    history.push(`Rango inicial: [índice 0 (${bsArray[0]}) ... índice ${high} (${bsArray[high]})]`);

    let step = 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = bsArray[mid];
      history.push(
        `Paso ${step}: low=${low}, high=${high} → mid = ⌊(${low}+${high})/2⌋ = ${mid} (Valor: ${midVal})`
      );

      if (midVal === bsTarget) {
        history.push(`🎯 ¡ELEMENTO ENCONTRADO! bsArray[${mid}] === ${bsTarget} en ${step} divisiones.`);
        history.push(`Complejidad logarítmica: O(log₂ 13) ≈ 4 comparaciones máximo.`);
        setBsPointers({ low, mid, high });
        found = true;
        break;
      } else if (midVal < bsTarget) {
        history.push(`Como ${midVal} < ${bsTarget}, el objetivo está a la derecha. Descartamos la mitad izquierda (low = ${mid + 1}).`);
        low = mid + 1;
      } else {
        history.push(`Como ${midVal} > ${bsTarget}, el objetivo está a la izquierda. Descartamos la mitad derecha (high = ${mid - 1}).`);
        high = mid - 1;
      }
      step++;
    }

    if (!found) {
      history.push(`❌ El valor ${bsTarget} no existe en el arreglo después de agotar los rangos.`);
      setBsPointers(null);
    }
    setBsFound(found);
    setBsHistory(history);
  };

  // ----------------------------------------------------
  // 3. STACK & QUEUE STATE & LOGIC
  // ----------------------------------------------------
  const [sqMode, setSqMode] = useState<'stack' | 'queue'>('stack');
  const [stackItems, setStackItems] = useState<string[]>(['Main()', 'calculoDescuento()', 'validarUsuario()']);
  const [queueItems, setQueueItems] = useState<string[]>(['Req #101 (GET /users)', 'Req #102 (POST /order)', 'Req #103 (GET /status)']);
  const [sqInput, setSqInput] = useState<string>('');
  const [sqMessage, setSqMessage] = useState<string>('Interactúa con Push/Pop (Pila) o Enqueue/Dequeue (Cola)');

  const handleStackPush = () => {
    const val = sqInput.trim() || `Frame #${stackItems.length + 1}`;
    if (stackItems.length >= 7) {
      setSqMessage('⚠️ ¡Stack Overflow! Capacidad máxima alcanzada en el visualizador.');
      return;
    }
    setStackItems([val, ...stackItems]);
    setSqInput('');
    setSqMessage(`Push: Se apiló "${val}" en la cima (O(1)).`);
  };

  const handleStackPop = () => {
    if (stackItems.length === 0) {
      setSqMessage('⚠️ ¡Stack Underflow! La pila ya está vacía.');
      return;
    }
    const popped = stackItems[0];
    setStackItems(stackItems.slice(1));
    setSqMessage(`Pop: Se desapiló "${popped}" de la cima (LIFO - O(1)).`);
  };

  const handleQueueEnqueue = () => {
    const val = sqInput.trim() || `Job #${queueItems.length + 101}`;
    if (queueItems.length >= 7) {
      setSqMessage('⚠️ Cola llena: Buffer saturado.');
      return;
    }
    setQueueItems([...queueItems, val]);
    setSqInput('');
    setSqMessage(`Enqueue: Llegó "${val}" al final de la cola (O(1)).`);
  };

  const handleQueueDequeue = () => {
    if (queueItems.length === 0) {
      setSqMessage('⚠️ Cola vacía: No hay elementos para procesar.');
      return;
    }
    const dequeued = queueItems[0];
    setQueueItems(queueItems.slice(1));
    setSqMessage(`Dequeue: Se atendió "${dequeued}" del frente (FIFO - O(1)).`);
  };

  // ----------------------------------------------------
  // 4. LINKED LIST STATE & LOGIC
  // ----------------------------------------------------
  interface ListNode {
    id: number;
    val: number;
    address: string;
  }
  const [linkedList, setLinkedList] = useState<ListNode[]>([
    { id: 1, val: 12, address: '0x10A' },
    { id: 2, val: 45, address: '0x2F8' },
    { id: 3, val: 78, address: '0x3C4' },
    { id: 4, val: 99, address: '0x5E0' },
  ]);
  const [llInput, setLlInput] = useState<number>(33);
  const [llMsg, setLlMsg] = useState<string>('Nodos enlazados mediante punteros de memoria (Next)');

  const handleInsertHead = () => {
    const hex = '0x' + Math.floor(Math.random() * 4000 + 1000).toString(16).toUpperCase();
    const newNode: ListNode = { id: Date.now(), val: llInput, address: hex };
    setLinkedList([newNode, ...linkedList]);
    setLlMsg(`Insertado ${llInput} al inicio: newNode.next = head. O(1) tiempo.`);
  };

  const handleInsertTail = () => {
    const hex = '0x' + Math.floor(Math.random() * 4000 + 1000).toString(16).toUpperCase();
    const newNode: ListNode = { id: Date.now(), val: llInput, address: hex };
    setLinkedList([...linkedList, newNode]);
    setLlMsg(`Insertado ${llInput} al final: tail.next = newNode. O(1) con puntero tail, O(n) si se recorre.`);
  };

  const handleDeleteHead = () => {
    if (linkedList.length === 0) return;
    const deleted = linkedList[0];
    setLinkedList(linkedList.slice(1));
    setLlMsg(`Eliminado nodo cabeza (valor ${deleted.val}): head = head.next. O(1).`);
  };

  const handleReverseList = () => {
    const rev = [...linkedList].reverse();
    setLinkedList(rev);
    setLlMsg(`Lista invertida in-place: prev = curr, curr = next. O(n) tiempo, O(1) espacio.`);
  };

  // ----------------------------------------------------
  // 5. BST TREE STATE & LOGIC
  // ----------------------------------------------------
  interface TreeNode {
    val: number;
    left?: TreeNode;
    right?: TreeNode;
  }

  const [bstTree, setBstTree] = useState<TreeNode>({
    val: 50,
    left: {
      val: 30,
      left: { val: 20 },
      right: { val: 40 },
    },
    right: {
      val: 70,
      left: { val: 60 },
      right: { val: 80 },
    },
  });
  const [bstInput, setBstInput] = useState<number>(35);
  const [bstTraversal, setBstTraversal] = useState<number[]>([]);
  const [bstMsg, setBstMsg] = useState<string>('Árbol Binario de Búsqueda: izquierda < nodo < derecha');

  const insertBstNode = (node: TreeNode, val: number): TreeNode => {
    if (val < node.val) {
      return {
        ...node,
        left: node.left ? insertBstNode(node.left, val) : { val },
      };
    } else if (val > node.val) {
      return {
        ...node,
        right: node.right ? insertBstNode(node.right, val) : { val },
      };
    }
    return node;
  };

  const handleBstInsert = () => {
    if (isNaN(bstInput)) return;
    const updated = insertBstNode(bstTree, bstInput);
    setBstTree(updated);
    setBstMsg(`Insertado ${bstInput} en BST en tiempo O(h) = O(log n) promedio.`);
  };

  const inOrderTraversal = (node?: TreeNode, res: number[] = []): number[] => {
    if (!node) return res;
    if (node.left) inOrderTraversal(node.left, res);
    res.push(node.val);
    if (node.right) inOrderTraversal(node.right, res);
    return res;
  };

  const preOrderTraversal = (node?: TreeNode, res: number[] = []): number[] => {
    if (!node) return res;
    res.push(node.val);
    if (node.left) preOrderTraversal(node.left, res);
    if (node.right) preOrderTraversal(node.right, res);
    return res;
  };

  const handleRunTraversal = (type: 'inorder' | 'preorder') => {
    const list = type === 'inorder' ? inOrderTraversal(bstTree) : preOrderTraversal(bstTree);
    setBstTraversal(list);
    setBstMsg(
      type === 'inorder'
        ? `Recorrido In-Order (Izq, Raíz, Der): ¡Genera los números ordenados de forma ascendente!`
        : `Recorrido Pre-Order (Raíz, Izq, Der): Utilizado para clonar o serializar el árbol.`
    );
  };

  // ----------------------------------------------------
  // 6. BIG-O ASYMPTOTIC CALCULATOR
  // ----------------------------------------------------
  const [bigON, setBigON] = useState<number>(1000);

  const calculateBigO = (n: number) => {
    const o1 = 1;
    const oLogN = Math.round(Math.log2(Math.max(1, n)));
    const oN = n;
    const oNLogN = Math.round(n * Math.log2(Math.max(1, n)));
    const oN2 = n <= 10000 ? n * n : Infinity;
    const o2N = n <= 30 ? Math.pow(2, n) : Infinity;

    return { o1, oLogN, oN, oNLogN, oN2, o2N };
  };

  const bigOResults = calculateBigO(bigON);

  // ----------------------------------------------------
  // 7. HASH TABLE VISUALIZER
  // ----------------------------------------------------
  const [hashBuckets, setHashBuckets] = useState<{ key: string; val: string }[][]>([
    [{ key: 'user:101', val: 'Selvin' }],
    [],
    [{ key: 'user:202', val: 'Beatriz' }],
    [],
    [{ key: 'user:303', val: 'Carlos' }],
    [],
    [],
    [],
  ]);
  const [hashKeyInput, setHashKeyInput] = useState<string>('user:404');
  const [hashValInput, setHashValInput] = useState<string>('Elena');
  const [hashFeedback, setHashFeedback] = useState<string>('Capacidad: 8 buckets. Función de Hash: sum(chars) % 8');

  const computeHashIndex = (str: string) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum % 8;
  };

  const handleHashInsert = () => {
    if (!hashKeyInput) return;
    const idx = computeHashIndex(hashKeyInput);
    const newBuckets = [...hashBuckets];
    newBuckets[idx] = [...newBuckets[idx], { key: hashKeyInput, val: hashValInput }];
    setHashBuckets(newBuckets);
    setHashFeedback(
      `Clave "${hashKeyInput}" mapeada a Bucket [${idx}] mediante hash() % 8. ` +
        (newBuckets[idx].length > 1 ? '⚠️ ¡Hubo colisión! Resuelta con encadenamiento (Chaining).' : 'Acceso O(1).')
    );
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Top Header & Visualizer Mode Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/20">
            🕹️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Laboratorio Interactivo
              </span>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> En Vivo
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
              Simulador Visual de Algoritmos & Estructuras
            </h3>
          </div>
        </div>

        {/* Mode Selector Dropdown / Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scroll-touch pb-1">
          {[
            { id: 'sorting', label: '📊 Ordenamiento' },
            { id: 'binary-search', label: '🔍 Búsqueda Binaria' },
            { id: 'stack-queue', label: '🥞 Pila & Cola' },
            { id: 'linked-list', label: '🔗 Lista Enlazada' },
            { id: 'bst-tree', label: '🌳 Árbol BST' },
            { id: 'hash-table', label: '🗝️ Tabla Hash' },
            { id: 'bigo', label: '📈 Sandbox Big-O' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setMode(item.id as VisualizerMode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                mode === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MODE 1: SORTING VISUALIZER                           */}
      {/* ---------------------------------------------------- */}
      {mode === 'sorting' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex flex-wrap items-center gap-2">
              <label className="text-xs font-bold text-slate-400">Algoritmo:</label>
              <button
                onClick={() => setSortAlgo('bubble')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  sortAlgo === 'bubble' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Bubble Sort O(n²)
              </button>
              <button
                onClick={() => setSortAlgo('selection')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  sortAlgo === 'selection' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Selection Sort O(n²)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={startSort}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold shadow-lg transition-all flex items-center gap-1.5 ${
                  isSorting
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isSorting ? '⏸ Pausar' : '▶ Reproducir'}
              </button>
              <button
                onClick={() => resetSortArray('random')}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
              >
                🎲 Aleatorio
              </button>
              <button
                onClick={() => resetSortArray('reversed')}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-900/40 hover:bg-rose-900/70 text-rose-300 border border-rose-800/50 transition"
              >
                ⚠️ Peor Caso (Invertido)
              </button>
            </div>
          </div>

          {/* Bars Visualization Area */}
          <div className="h-56 sm:h-64 bg-slate-950/80 rounded-2xl p-2.5 sm:p-6 flex items-end justify-center gap-1 sm:gap-3 border border-slate-800 relative overflow-hidden">
            {sortArray.map((val, idx) => {
              const isActive = sortIndices.active.includes(idx);
              const isSorted = sortIndices.sorted.includes(idx);
              const barHeight = `${Math.max(15, (val / 100) * 100)}%`;

              let barBg = 'bg-gradient-to-t from-indigo-600 to-violet-500';
              if (isActive) barBg = 'bg-gradient-to-t from-amber-500 to-yellow-400 animate-pulse';
              if (isSorted) barBg = 'bg-gradient-to-t from-emerald-600 to-teal-400';

              return (
                <div key={idx} className="flex-1 max-w-[34px] sm:max-w-[48px] flex flex-col items-center gap-1 sm:gap-1.5 h-full justify-end">
                  <span className="text-[9px] sm:text-xs font-bold text-slate-300 font-mono">{val}</span>
                  <div
                    style={{ height: barHeight }}
                    className={`w-full rounded-t-lg transition-all duration-200 shadow-md ${barBg}`}
                  />
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-500">[{idx}]</span>
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Comparaciones</span>
              <span className="text-xl font-black text-amber-400 font-mono">{sortStats.comparisons}</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Intercambios (Swaps)</span>
              <span className="text-xl font-black text-indigo-400 font-mono">{sortStats.swaps}</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Velocidad de Animación</span>
              <input
                type="range"
                min="50"
                max="800"
                step="50"
                value={sortSpeed}
                onChange={(e) => setSortSpeed(Number(e.target.value))}
                className="w-full accent-indigo-500 mt-1 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-bold mr-2">▶ Estado:</span>
            {sortStats.status}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 2: BINARY SEARCH VISUALIZER                    */}
      {/* ---------------------------------------------------- */}
      {mode === 'binary-search' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Búsqueda Binaria O(log n)</h4>
              <p className="text-xs text-slate-400">
                Divide el espacio de búsqueda a la mitad en cada paso. Requiere arreglo estrictamente ordenado.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={bsTarget}
                onChange={(e) => setBsTarget(Number(e.target.value))}
                className="w-24 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-bold text-white text-center focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Valor"
              />
              <button
                onClick={runBinarySearchStepByStep}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition cursor-pointer"
              >
                🔍 Buscar Paso a Paso
              </button>
            </div>
          </div>

          {/* Array visualization */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max pb-3">
              {bsArray.map((num, idx) => {
                const isMid = bsPointers?.mid === idx;
                const isLow = bsPointers?.low === idx;
                const isHigh = bsPointers?.high === idx;
                const isTarget = num === bsTarget && bsFound;

                let ringClass = 'border-slate-700 bg-slate-900 text-slate-200';
                if (isTarget) ringClass = 'border-emerald-500 bg-emerald-950 text-emerald-200 ring-4 ring-emerald-500/30';
                else if (isMid) ringClass = 'border-purple-500 bg-purple-950 text-purple-200 ring-2 ring-purple-500/50';
                else if (isLow) ringClass = 'border-blue-500 bg-blue-950 text-blue-200';
                else if (isHigh) ringClass = 'border-rose-500 bg-rose-950 text-rose-200';

                return (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 text-[9px] font-black text-slate-400 h-4">
                      {isLow && <span className="text-blue-400">LOW</span>}
                      {isMid && <span className="text-purple-400">MID</span>}
                      {isHigh && <span className="text-rose-400">HIGH</span>}
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-mono font-bold text-sm shadow-sm transition-all ${ringClass}`}
                    >
                      {num}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">idx {idx}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* History / Steps Log */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 max-h-48 overflow-y-auto space-y-1.5 font-mono text-xs">
            {bsHistory.length === 0 ? (
              <span className="text-slate-500 italic">Escribe un número arriba y pulsa "Buscar Paso a Paso"</span>
            ) : (
              bsHistory.map((line, i) => (
                <div
                  key={i}
                  className={`leading-relaxed ${
                    line.includes('🎯')
                      ? 'text-emerald-300 font-bold'
                      : line.includes('❌')
                      ? 'text-rose-400'
                      : line.includes('Paso')
                      ? 'text-indigo-300'
                      : 'text-slate-400'
                  }`}
                >
                  {line}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 3: STACK & QUEUE VISUALIZER                     */}
      {/* ---------------------------------------------------- */}
      {mode === 'stack-queue' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSqMode('stack')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  sqMode === 'stack' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-700 text-slate-300'
                }`}
              >
                🥞 Pila (Stack - LIFO)
              </button>
              <button
                onClick={() => setSqMode('queue')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  sqMode === 'queue' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-700 text-slate-300'
                }`}
              >
                🚶‍♂️ Cola (Queue - FIFO)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={sqInput}
                onChange={(e) => setSqInput(e.target.value)}
                placeholder={sqMode === 'stack' ? 'Ej: calcularImpuestos()' : 'Ej: Tarea #404'}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {sqMode === 'stack' ? (
                <>
                  <button
                    onClick={handleStackPush}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
                  >
                    + Push (Apilar)
                  </button>
                  <button
                    onClick={handleStackPop}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition cursor-pointer"
                  >
                    - Pop (Desapilar)
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleQueueEnqueue}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer"
                  >
                    + Enqueue (Encolar)
                  </button>
                  <button
                    onClick={handleQueueDequeue}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition cursor-pointer"
                  >
                    - Dequeue (Atender)
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Interactive Stage */}
          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 min-h-[220px] flex items-center justify-center">
            {sqMode === 'stack' ? (
              <div className="w-full max-w-sm flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">
                  ▲ CIMA DE LA PILA (TOP)
                </span>
                <div className="w-full border-x-4 border-b-4 border-indigo-500/40 rounded-b-2xl p-3 flex flex-col gap-2 min-h-[160px] justify-end bg-slate-900/40">
                  {stackItems.length === 0 ? (
                    <span className="text-center text-xs text-slate-500 italic py-8">Pila Vacía (Stack Empty)</span>
                  ) : (
                    stackItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-between shadow-md transition-all ${
                          idx === 0
                            ? 'bg-gradient-to-r from-indigo-600 to-violet-600 border-indigo-400 text-white scale-102'
                            : 'bg-slate-800 border-slate-700 text-slate-300'
                        }`}
                      >
                        <span>{item}</span>
                        <span className="text-[10px] opacity-70">
                          {idx === 0 ? '← TOP' : `pos ${stackItems.length - 1 - idx}`}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full max-w-2xl flex flex-col items-center">
                <div className="flex items-center justify-between w-full text-[10px] font-bold uppercase text-purple-400 mb-2 px-2">
                  <span>◀ FRENTE (Salida - Dequeue)</span>
                  <span>FINAL (Entrada - Enqueue) ▶</span>
                </div>
                <div className="w-full border-y-4 border-purple-500/40 rounded-xl p-3 flex items-center gap-2 overflow-x-auto min-h-[100px] bg-slate-900/40">
                  {queueItems.length === 0 ? (
                    <span className="text-center w-full text-xs text-slate-500 italic">Cola Vacía (Queue Empty)</span>
                  ) : (
                    queueItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold shrink-0 min-w-[130px] flex flex-col shadow-md transition-all ${
                          idx === 0
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white'
                            : 'bg-slate-800 border-slate-700 text-slate-300'
                        }`}
                      >
                        <span className="truncate">{item}</span>
                        <span className="text-[9px] opacity-70 mt-1">
                          {idx === 0 ? 'HEAD' : idx === queueItems.length - 1 ? 'TAIL' : `orden #${idx + 1}`}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono text-indigo-300">
            ℹ️ {sqMessage}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 4: LINKED LIST VISUALIZER                       */}
      {/* ---------------------------------------------------- */}
      {mode === 'linked-list' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div>
              <h4 className="text-sm font-bold text-white">Lista Simplemente Enlazada</h4>
              <p className="text-xs text-slate-400">Cada nodo guarda su valor y la dirección del siguiente nodo en memoria RAM.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="number"
                value={llInput}
                onChange={(e) => setLlInput(Number(e.target.value))}
                className="w-20 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white outline-none"
              />
              <button
                onClick={handleInsertHead}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer"
              >
                + Head O(1)
              </button>
              <button
                onClick={handleInsertTail}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white transition cursor-pointer"
              >
                + Tail O(1)
              </button>
              <button
                onClick={handleDeleteHead}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition cursor-pointer"
              >
                - Del Head
              </button>
              <button
                onClick={handleReverseList}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition cursor-pointer"
              >
                🔄 Invertir
              </button>
            </div>
          </div>

          {/* Linked List Canvas */}
          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max">
              <div className="px-3 py-1.5 rounded-lg bg-indigo-900/60 text-indigo-300 border border-indigo-700 font-mono text-xs font-bold">
                HEAD ➔
              </div>
              {linkedList.map((node, idx) => (
                <div key={node.id} className="flex items-center gap-2">
                  {/* Node representation */}
                  <div className="bg-slate-900 rounded-xl border border-slate-700 p-2 shadow-lg flex flex-col items-center">
                    <span className="text-[9px] text-slate-400 font-mono">{node.address}</span>
                    <div className="flex items-center border border-slate-700 rounded-lg overflow-hidden mt-1">
                      <div className="px-3 py-2 bg-indigo-950 text-indigo-200 font-mono font-bold text-sm">
                        {node.val}
                      </div>
                      <div className="px-2 py-2 bg-slate-800 text-[10px] text-slate-400 font-mono border-l border-slate-700">
                        {idx < linkedList.length - 1 ? linkedList[idx + 1].address : 'NULL'}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {idx < linkedList.length - 1 ? (
                    <span className="text-xl text-indigo-400 font-black">➔</span>
                  ) : (
                    <span className="px-2 py-1 rounded bg-rose-950/60 text-rose-400 border border-rose-800 font-mono text-xs">
                      ➔ NULL
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            {llMsg}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 5: BST TREE VISUALIZER                          */}
      {/* ---------------------------------------------------- */}
      {mode === 'bst-tree' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div>
              <h4 className="text-sm font-bold text-white">Árbol Binario de Búsqueda (BST)</h4>
              <p className="text-xs text-slate-400">Búsqueda e inserción en tiempo logarítmico O(log n) promedio.</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={bstInput}
                onChange={(e) => setBstInput(Number(e.target.value))}
                className="w-20 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white outline-none"
              />
              <button
                onClick={handleBstInsert}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer"
              >
                + Insertar
              </button>
              <button
                onClick={() => handleRunTraversal('inorder')}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
              >
                Recorrido In-Order
              </button>
              <button
                onClick={() => handleRunTraversal('preorder')}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer"
              >
                Pre-Order
              </button>
            </div>
          </div>

          {/* SVG Tree Rendering */}
          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center min-h-[260px]">
            <svg className="w-full max-w-lg h-60" viewBox="0 0 400 200">
              {/* Edges */}
              <line x1="200" y1="30" x2="100" y2="90" stroke="#4f46e5" strokeWidth="2" />
              <line x1="200" y1="30" x2="300" y2="90" stroke="#4f46e5" strokeWidth="2" />
              <line x1="100" y1="90" x2="60" y2="160" stroke="#4f46e5" strokeWidth="2" />
              <line x1="100" y1="90" x2="140" y2="160" stroke="#4f46e5" strokeWidth="2" />
              <line x1="300" y1="90" x2="260" y2="160" stroke="#4f46e5" strokeWidth="2" />
              <line x1="300" y1="90" x2="340" y2="160" stroke="#4f46e5" strokeWidth="2" />

              {/* Root 50 */}
              <circle cx="200" cy="30" r="18" fill="#4338ca" stroke="#818cf8" strokeWidth="2" />
              <text x="200" y="35" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                {bstTree.val}
              </text>

              {/* Left 30 & Right 70 */}
              <circle cx="100" cy="90" r="18" fill="#4338ca" stroke="#818cf8" strokeWidth="2" />
              <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                {bstTree.left?.val || 30}
              </text>

              <circle cx="300" cy="90" r="18" fill="#4338ca" stroke="#818cf8" strokeWidth="2" />
              <text x="300" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
                {bstTree.right?.val || 70}
              </text>

              {/* Leaves 20, 40, 60, 80 */}
              <circle cx="60" cy="160" r="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
              <text x="60" y="164" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">
                {bstTree.left?.left?.val || 20}
              </text>

              <circle cx="140" cy="160" r="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
              <text x="140" y="164" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">
                {bstTree.left?.right?.val || 40}
              </text>

              <circle cx="260" cy="160" r="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
              <text x="260" y="164" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">
                {bstTree.right?.left?.val || 60}
              </text>

              <circle cx="340" cy="160" r="16" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
              <text x="340" y="164" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">
                {bstTree.right?.right?.val || 80}
              </text>
            </svg>
          </div>

          {bstTraversal.length > 0 && (
            <div className="p-3 bg-emerald-950/50 border border-emerald-800/60 rounded-xl text-emerald-200 text-xs font-mono">
              <strong>Resultado de recorrido:</strong> [ {bstTraversal.join(', ')} ]
            </div>
          )}

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            ℹ️ {bstMsg}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 6: HASH TABLE VISUALIZER                        */}
      {/* ---------------------------------------------------- */}
      {mode === 'hash-table' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Tabla Hash & Resolución de Colisiones</h4>
              <p className="text-xs text-slate-400">
                Acceso promedio O(1). Usa hash(key) % 8 para mapear claves a casilleros (buckets).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={hashKeyInput}
                onChange={(e) => setHashKeyInput(e.target.value)}
                placeholder="Clave (ej: user:404)"
                className="w-28 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white outline-none"
              />
              <input
                type="text"
                value={hashValInput}
                onChange={(e) => setHashValInput(e.target.value)}
                placeholder="Valor (ej: Elena)"
                className="w-24 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white outline-none"
              />
              <button
                onClick={handleHashInsert}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition cursor-pointer"
              >
                + Insertar Par
              </button>
            </div>
          </div>

          {/* Buckets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
            {hashBuckets.map((bucket, bIdx) => (
              <div key={bIdx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col min-h-[90px]">
                <span className="text-[10px] font-mono font-bold text-indigo-400 border-b border-slate-800 pb-1 mb-1.5 flex items-center justify-between">
                  <span>Bucket [{bIdx}]</span>
                  <span className="text-slate-500">{bucket.length} items</span>
                </span>
                {bucket.length === 0 ? (
                  <span className="text-[11px] text-slate-600 italic py-2">Vacío</span>
                ) : (
                  <div className="space-y-1.5 overflow-y-auto">
                    {bucket.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono flex items-center justify-between"
                      >
                        <span className="text-amber-300 font-bold truncate">{item.key}</span>
                        <span className="text-slate-300 truncate">➔ {item.val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
            ℹ️ {hashFeedback}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MODE 7: BIG-O ASYMPTOTIC SANDBOX                    */}
      {/* ---------------------------------------------------- */}
      {mode === 'bigo' && (
        <div className="space-y-6">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">Calculadora Asintótica Big-O</h4>
                <p className="text-xs text-slate-400">
                  Desliza el tamaño de entrada N y observa cómo explota el conteo de instrucciones en CPU.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {[10, 100, 1000, 10000, 100000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBigON(preset)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition ${
                      bigON === preset ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    N={preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-slate-400">N = 1</span>
              <input
                type="range"
                min="1"
                max="100000"
                step="100"
                value={bigON}
                onChange={(e) => setBigON(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
              />
              <span className="text-xs font-mono font-bold text-indigo-400 min-w-[70px]">
                N = {bigON.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Complexity Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'O(1)', name: 'Constante', ops: bigOResults.o1, color: 'text-emerald-400 border-emerald-900/60' },
              { label: 'O(log n)', name: 'Logarítmica', ops: bigOResults.oLogN, color: 'text-blue-400 border-blue-900/60' },
              { label: 'O(n)', name: 'Lineal', ops: bigOResults.oN, color: 'text-amber-400 border-amber-900/60' },
              {
                label: 'O(n log n)',
                name: 'Cuasilineal',
                ops: bigOResults.oNLogN,
                color: 'text-violet-400 border-violet-900/60',
              },
              {
                label: 'O(n²)',
                name: 'Cuadrática',
                ops: bigOResults.oN2 === Infinity ? '💥 >10⁸ Ops' : bigOResults.oN2.toLocaleString(),
                color: 'text-orange-400 border-orange-900/60',
              },
              {
                label: 'O(2ⁿ)',
                name: 'Exponencial',
                ops: bigOResults.o2N === Infinity ? '💥 Incalculable' : bigOResults.o2N.toLocaleString(),
                color: 'text-rose-400 border-rose-900/60',
              },
            ].map((c) => (
              <div
                key={c.label}
                className={`bg-slate-950/70 p-3 sm:p-4 rounded-2xl border ${c.color} flex flex-col justify-between`}
              >
                <div>
                  <span className={`text-base sm:text-lg font-black font-mono block ${c.color.split(' ')[0]}`}>
                    {c.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold block">{c.name}</span>
                </div>
                <div className="mt-3">
                  <span className="text-xs sm:text-sm font-black text-white font-mono block truncate">
                    {typeof c.ops === 'number' ? c.ops.toLocaleString() : c.ops}
                  </span>
                  <span className="text-[9px] text-slate-500 uppercase font-mono">Operaciones</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-indigo-950/40 rounded-2xl border border-indigo-900/50 text-xs leading-relaxed text-indigo-200">
            💡 <strong>Rigor Universitario:</strong> A 10⁸ operaciones/segundo en un núcleo de CPU moderno, un algoritmo
            <span className="text-blue-300 font-bold"> O(log n)</span> resuelve N = 100,000 en <strong>~0.0001 milisegundos</strong>,
            mientras que uno <span className="text-orange-300 font-bold">O(n²)</span> requiere 10,000,000,000 operaciones (~<strong>100 segundos</strong>)
            y uno <span className="text-rose-300 font-bold">O(2ⁿ)</span> excedería la edad del universo conocido.
          </div>
        </div>
      )}
    </div>
  );
};

export default DataStructureVisualizer;
