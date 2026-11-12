import React, { useState } from 'react';
import DataStructureVisualizer from './DataStructureVisualizer';
import KaliTerminalSimulator from './KaliTerminalSimulator';
import DataPathSimulator from './DataPathSimulator';

interface DomainInteractiveSimulatorProps {
  courseId: string;
  moduleId: number;
}

export const DomainInteractiveSimulator: React.FC<DomainInteractiveSimulatorProps> = ({
  courseId,
  moduleId,
}) => {
  // ----------------------------------------------------
  // MATH SIMULATOR (matematica)
  // ----------------------------------------------------
  const [truthP, setTruthP] = useState<boolean>(true);
  const [truthQ, setTruthQ] = useState<boolean>(false);
  const [learningRate, setLearningRate] = useState<number>(0.1);
  const [gradX, setGradX] = useState<number>(4.0);
  const [gradStep, setGradStep] = useState<number>(0);

  const stepGradientDescent = () => {
    // Minimize f(x) = x^2, df/dx = 2x
    const derivative = 2 * gradX;
    const newX = gradX - learningRate * derivative;
    setGradX(Number(newX.toFixed(4)));
    setGradStep((s) => s + 1);
  };

  // ----------------------------------------------------
  // GIT / DEVOPS SIMULATOR (git_devops_vercel)
  // ----------------------------------------------------
  const [gitCommits, setGitCommits] = useState<string[]>(['C0 (init)', 'C1 (feat: ui)', 'C2 (fix: auth)']);
  const [gitBranch, setGitBranch] = useState<string>('main');
  const [ciStatus, setCiStatus] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');
  const [ciLogs, setCiLogs] = useState<string[]>([]);

  const handleGitCommit = () => {
    const nextId = `C${gitCommits.length}`;
    setGitCommits([...gitCommits, `${nextId} (${gitBranch})`]);
  };

  const handleRunCiPipeline = () => {
    setCiStatus('running');
    setCiLogs(['Iniciando pipeline de GitHub Actions...', '✓ lint: ESLint pasó con 0 advertencias']);
    setTimeout(() => {
      setCiLogs((prev) => [...prev, '✓ test: Jest suite 42/42 tests exitosos']);
      setTimeout(() => {
        setCiLogs((prev) => [
          ...prev,
          '✓ build: Vite empaquetó 787 módulos en 1.84s',
          '🚀 Deploy: Desplegado en Vercel Edge Network (https://master-class-quimisell.vercel.app)',
        ]);
        setCiStatus('success');
      }, 700);
    }, 600);
  };

  // ----------------------------------------------------
  // NETWORKING SIMULATOR (redes_desarrolladores)
  // ----------------------------------------------------
  const [tcpState, setTcpState] = useState<number>(0);
  const tcpSteps = [
    { title: 'Estado Inicial: CLOSED / LISTEN', desc: 'Cliente en puerto efímero, Servidor escuchando en :443' },
    { title: 'Paso 1: SYN (Synchronize)', desc: 'Cliente ➔ Servidor: SYN=1, SeqNum=1000' },
    { title: 'Paso 2: SYN-ACK', desc: 'Servidor ➔ Cliente: SYN=1, ACK=1, AckNum=1001, SeqNum=5000' },
    { title: 'Paso 3: ACK (Establecido)', desc: 'Cliente ➔ Servidor: ACK=1, AckNum=5001. ¡Canal TCP ESTABLISHED!' },
  ];

  // ----------------------------------------------------
  // SQL / DATA SIMULATOR (sql_datos_ia)
  // ----------------------------------------------------
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT id, nombre, rol, salario FROM ingenieros WHERE salario >= 4000;');
  const [sqlOutput, setSqlOutput] = useState<any[]>([
    { id: 1, nombre: 'Selvin López', rol: 'AI Systems Architect', salario: 5500 },
    { id: 3, nombre: 'Elena Vásquez', rol: 'Data Platform Engineer', salario: 4200 },
  ]);
  const [sqlPlan, setSqlPlan] = useState<string>('Index Scan using idx_salario on ingenieros (cost=0.15..8.25 rows=2 width=32)');

  const runSqlEngine = () => {
    if (sqlQuery.toLowerCase().includes('where')) {
      setSqlOutput([
        { id: 1, nombre: 'Selvin López', rol: 'AI Systems Architect', salario: 5500 },
        { id: 3, nombre: 'Elena Vásquez', rol: 'Data Platform Engineer', salario: 4200 },
      ]);
      setSqlPlan('Index Scan using idx_salario on ingenieros: O(log n) mediante B+ Tree. Costo I/O: 1 página.');
    } else {
      setSqlOutput([
        { id: 1, nombre: 'Selvin López', rol: 'AI Systems Architect', salario: 5500 },
        { id: 2, nombre: 'Carlos Ruiz', rol: 'Junior Developer', salario: 2800 },
        { id: 3, nombre: 'Elena Vásquez', rol: 'Data Platform Engineer', salario: 4200 },
        { id: 4, nombre: 'Beatriz Solís', rol: 'Security Analyst', salario: 3900 },
      ]);
      setSqlPlan('Seq Scan (Lectura secuencial) on ingenieros: O(n) lectura de tabla completa.');
    }
  };

  // ----------------------------------------------------
  // CLEAN CODE & SOLID (clean_code_solid)
  // ----------------------------------------------------
  const [solidActive, setSolidActive] = useState<'bad' | 'good'>('bad');

  // ----------------------------------------------------
  // AI ENGINEER & EVALUATION (ingeniero_ia / evaluacion_ia)
  // ----------------------------------------------------
  const [reactStep, setReactStep] = useState<number>(0);
  const reactCycle = [
    { type: 'Question', text: 'Usuario: "¿Cuál es el precio de una acción de Google y su P/E ratio actual?"' },
    { type: 'Thought', text: 'Pensamiento IA: Necesito datos en tiempo real. No debo alucinar. Usaré la tool search_market().' },
    { type: 'Action', text: 'Acción: search_market({ ticker: "GOOGL" })' },
    { type: 'Observation', text: 'Observación Tool: { price: 178.45, pe_ratio: 24.3, volume: "22M" }' },
    { type: 'Final Answer', text: 'Respuesta al Usuario: La acción de Google cotiza en $178.45 con un P/E ratio de 24.3.' },
  ];

  // ----------------------------------------------------
  // EDGE AI & MOBILITY (edge_ia_movil)
  // ----------------------------------------------------
  const [quantMode, setQuantMode] = useState<'fp32' | 'fp16' | 'int8' | 'int4'>('fp32');

  // ----------------------------------------------------
  // AUTOMATA & COMPILERS (automatas_compiladores)
  // ----------------------------------------------------
  const [automataInput, setAutomataInput] = useState<string>('aab');
  const [automataAccepted, setAutomataAccepted] = useState<boolean>(true);

  const testAutomata = (str: string) => {
    setAutomataInput(str);
    // DFA for regex: ends with 'b'
    setAutomataAccepted(str.endsWith('b'));
  };

  // ----------------------------------------------------
  // ANDROID KOTLIN (android_kotlin)
  // ----------------------------------------------------
  const [activityState, setActivityState] = useState<string>('onResume');

  // ROUTE PER COURSE
  if (courseId === 'pensamiento_computacional') {
    return <DataPathSimulator moduleId={moduleId} />;
  }

  if (courseId === 'algoritmos') {
    return <DataStructureVisualizer moduleId={moduleId} />;
  }

  if (courseId === 'kali_linux') {
    return <KaliTerminalSimulator />;
  }

  if (courseId === 'matematica') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <div>
              <h4 className="text-lg font-bold text-white">Laboratorio Matemático Interactivo</h4>
              <p className="text-xs text-slate-400">Lógica proposicional, álgebra lineal y cálculo para IA</p>
            </div>
          </div>
        </div>

        {/* Tab 1: Truth Table Calculator */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block">
            1. Evaluador de Lógica Booleana (Compuertas Proposicionales)
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setTruthP(!truthP)}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                truthP ? 'bg-emerald-600 text-white' : 'bg-rose-900 text-rose-200'
              }`}
            >
              Proposición P: {truthP ? 'VERDADERO (1)' : 'FALSO (0)'}
            </button>
            <button
              onClick={() => setTruthQ(!truthQ)}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                truthQ ? 'bg-emerald-600 text-white' : 'bg-rose-900 text-rose-200'
              }`}
            >
              Proposición Q: {truthQ ? 'VERDADERO (1)' : 'FALSO (0)'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono text-center">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Conjunción (P ∧ Q)</span>
              <span className="text-base font-bold text-emerald-400">{truthP && truthQ ? '1 (V)' : '0 (F)'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Disyunción (P ∨ Q)</span>
              <span className="text-base font-bold text-indigo-400">{truthP || truthQ ? '1 (V)' : '0 (F)'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Implicación (P → Q)</span>
              <span className="text-base font-bold text-amber-400">{!truthP || truthQ ? '1 (V)' : '0 (F)'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Bicondicional (P ↔ Q)</span>
              <span className="text-base font-bold text-purple-400">{truthP === truthQ ? '1 (V)' : '0 (F)'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">XOR (P ⊕ Q)</span>
              <span className="text-base font-bold text-rose-400">{truthP !== truthQ ? '1 (V)' : '0 (F)'}</span>
            </div>
          </div>
        </div>

        {/* Tab 2: Gradient Descent Optimizer */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
              2. Simulador de Descenso de Gradiente (f(x) = x², df/dx = 2x)
            </span>
            <span className="text-xs font-mono text-slate-400">Paso #{gradStep}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Learning Rate α:</span>
              <input
                type="number"
                step="0.05"
                min="0.01"
                max="0.5"
                value={learningRate}
                onChange={(e) => setLearningRate(Number(e.target.value))}
                className="w-20 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white"
              />
            </div>
            <button
              onClick={stepGradientDescent}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:scale-105 transition"
            >
              ▶ Iterar Paso de Gradiente: x = x - α·f'(x)
            </button>
            <button
              onClick={() => {
                setGradX(4.0);
                setGradStep(0);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              Reset (x = 4.0)
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono">
            <span>
              Posición actual: <strong className="text-amber-400">x = {gradX}</strong>
            </span>
            <span>
              Pérdida (Loss f(x) = x²): <strong className="text-emerald-400">{(gradX * gradX).toFixed(4)}</strong>
            </span>
            <span>
              Gradiente (df/dx = 2x): <strong className="text-purple-400">{(2 * gradX).toFixed(4)}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (courseId === 'git_devops_vercel') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Git & Pipeline CI/CD</h4>
              <p className="text-xs text-slate-400">Grafo de ramas y automatización de despliegue en Vercel</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleGitCommit}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer"
            >
              + git commit
            </button>
            <button
              onClick={handleRunCiPipeline}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
            >
              ▶ Disparar CI/CD
            </button>
          </div>
        </div>

        {/* Visual Git Commit Tree */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Rama activa: <strong className="text-indigo-400">{gitBranch}</strong></span>
            <span>HEAD ➔ {gitCommits[gitCommits.length - 1]}</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto py-3">
            {gitCommits.map((c, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <div className="px-3 py-2 rounded-xl bg-indigo-950 border border-indigo-700 text-indigo-200 font-mono text-xs font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
                  {c}
                </div>
                {i < gitCommits.length - 1 && <span className="text-slate-600 text-lg">──➔</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CI/CD Terminal Output */}
        {ciStatus !== 'idle' && (
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1.5 font-mono text-xs">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
              GitHub Actions runner (ubuntu-latest)
            </span>
            {ciLogs.map((log, idx) => (
              <div key={idx} className={log.includes('🚀') ? 'text-cyan-300 font-bold' : 'text-slate-300'}>
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (courseId === 'redes_desarrolladores') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌐</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Redes: Handshake TCP & HTTP/3</h4>
              <p className="text-xs text-slate-400">Inspección de tramas, números de secuencia y latencia RTT</p>
            </div>
          </div>
          <button
            onClick={() => setTcpState((s) => (s + 1) % 4)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
          >
            Siguiente Paso TCP ({tcpState + 1}/4)
          </button>
        </div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex items-center justify-between relative">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-indigo-900 border border-indigo-700 flex items-center justify-center text-2xl shadow-lg">
              💻
            </div>
            <span className="text-xs font-mono font-bold text-slate-300">Cliente (Browser)</span>
            <span className="text-[10px] font-mono text-slate-500">192.168.1.15:52341</span>
          </div>

          <div className="flex-1 px-8 flex flex-col items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400">{tcpSteps[tcpState].title}</span>
            <div className="w-full h-1 bg-slate-800 relative rounded-full">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${((tcpState + 1) / 4) * 100}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-slate-400 text-center font-mono">{tcpSteps[tcpState].desc}</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-purple-900 border border-purple-700 flex items-center justify-center text-2xl shadow-lg">
              🏢
            </div>
            <span className="text-xs font-mono font-bold text-slate-300">Servidor Web</span>
            <span className="text-[10px] font-mono text-slate-500">93.184.216.34:443</span>
          </div>
        </div>
      </div>
    );
  }

  if (courseId === 'sql_datos_ia') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🗄️</span>
            <div>
              <h4 className="text-lg font-bold text-white">Motor SQL & Optimizador EXPLAIN ANALYZE</h4>
              <p className="text-xs text-slate-400">Consultas relacionales, índices B+ Tree y embeddings para RAG</p>
            </div>
          </div>
          <button
            onClick={runSqlEngine}
            className="px-5 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transition"
          >
            ▶ Ejecutar SQL
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-400">Editor SQL interactivo:</label>
          <input
            type="text"
            value={sqlQuery}
            onChange={(e) => setSqlQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
              Resultados de la Consulta ({sqlOutput.length} filas)
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-500">
                    <th className="p-1.5">id</th>
                    <th className="p-1.5">nombre</th>
                    <th className="p-1.5">rol</th>
                    <th className="p-1.5">salario</th>
                  </tr>
                </thead>
                <tbody>
                  {sqlOutput.map((row) => (
                    <tr key={row.id} className="border-b border-slate-900">
                      <td className="p-1.5 text-indigo-400">{row.id}</td>
                      <td className="p-1.5">{row.nombre}</td>
                      <td className="p-1.5 text-slate-400">{row.rol}</td>
                      <td className="p-1.5 text-emerald-400">${row.salario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
              Plan de Ejecución del Optimizador (EXPLAIN)
            </span>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
              {sqlPlan}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (courseId === 'clean_code_solid') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧼</span>
            <div>
              <h4 className="text-lg font-bold text-white">Laboratorio de Refactorización SOLID</h4>
              <p className="text-xs text-slate-400">Comparativa interactiva Antes vs Después (Single Responsibility Principle)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSolidActive('bad')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                solidActive === 'bad' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              ❌ Código Monolítico Sucio
            </button>
            <button
              onClick={() => setSolidActive('good')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                solidActive === 'good' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              ✅ Refactorizado SOLID
            </button>
          </div>
        </div>

        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs">
          {solidActive === 'bad' ? (
            <div className="space-y-2 text-rose-300">
              <span className="text-rose-400 font-bold block">// VIOLACIÓN DE SRP: Clase "Dios" que hace de todo</span>
              <pre className="text-slate-300">{`class UserManager {
  // Hace lógica de usuario, conexión a base de datos Y envío de emails
  createUser(name, email) {
    db.query("INSERT INTO users VALUES (...)"); // BD acoplada
    smtp.sendMail(email, "Bienvenido!");       // Email acoplado
    fs.writeFileSync("audit.log", name);       // Sistema de archivos
  }
}`}</pre>
              <div className="mt-3 p-3 bg-rose-950/40 rounded-xl border border-rose-900/60 text-[11px] text-rose-200">
                ⚠️ Violación SRP: Si cambia el proveedor de email o la BD, esta clase debe reescribirse, rompiendo tests existentes.
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-emerald-300">
              <span className="text-emerald-400 font-bold block">// PRINCIPIO DE RESPONSABILIDAD ÚNICA: Componentes desacoplados</span>
              <pre className="text-slate-300">{`class UserService {
  constructor(private userRepo: UserRepository, private mailer: MailerService) {}

  createUser(name: string, email: string): User {
    const user = this.userRepo.save({ name, email });
    this.mailer.sendWelcomeEmail(user.email);
    return user;
  }
}`}</pre>
              <div className="mt-3 p-3 bg-emerald-950/40 rounded-xl border border-emerald-900/60 text-[11px] text-emerald-200">
                ✨ Limpio: Lógica de negocio aislada. Fácil de testear con Mocks y conforme a Inversión de Dependencias (DIP).
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (courseId === 'ingeniero_ia' || courseId === 'evaluacion_ia') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🤖</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Agente ReAct & Guardrails de IA</h4>
              <p className="text-xs text-slate-400">Bucle Reasoning + Acting (Pensamiento ➔ Acción ➔ Observación)</p>
            </div>
          </div>
          <button
            onClick={() => setReactStep((s) => (s + 1) % reactCycle.length)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer"
          >
            Siguiente Paso ReAct ({reactStep + 1}/{reactCycle.length})
          </button>
        </div>

        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
          {reactCycle.slice(0, reactStep + 1).map((step, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border ${
                step.type === 'Thought'
                  ? 'bg-purple-950/50 border-purple-800 text-purple-200'
                  : step.type === 'Action'
                  ? 'bg-amber-950/50 border-amber-800 text-amber-200'
                  : step.type === 'Observation'
                  ? 'bg-blue-950/50 border-blue-800 text-blue-200'
                  : 'bg-emerald-950/50 border-emerald-800 text-emerald-200 font-bold'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider font-black block opacity-70">
                [{step.type}]
              </span>
              {step.text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (courseId === 'edge_ia_movil') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📱</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Cuantización para Modelos Edge / Mobile</h4>
              <p className="text-xs text-slate-400">Compresión de pesos de redes neuronales de FP32 a INT8 e INT4</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {(['fp32', 'fp16', 'int8', 'int4'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setQuantMode(m)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                quantMode === m ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {m.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Tamaño en RAM del Modelo (7B)</span>
            <span className="text-2xl font-black text-indigo-400 mt-1 block">
              {quantMode === 'fp32' ? '28.0 GB' : quantMode === 'fp16' ? '14.0 GB' : quantMode === 'int8' ? '7.0 GB' : '3.8 GB'}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Throughput en NPU Móvil</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">
              {quantMode === 'fp32' ? '4 tok/s' : quantMode === 'fp16' ? '12 tok/s' : quantMode === 'int8' ? '28 tok/s' : '45 tok/s'}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Retención de Precisión MMLU</span>
            <span className="text-2xl font-black text-amber-400 mt-1 block">
              {quantMode === 'fp32' ? '100%' : quantMode === 'fp16' ? '99.8%' : quantMode === 'int8' ? '98.5%' : '94.2%'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (courseId === 'android_kotlin') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🤖</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Ciclo de Vida Android & Corrutinas</h4>
              <p className="text-xs text-slate-400">Activity Lifecycle state machine y Dispatchers (Main vs IO)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {['onCreate', 'onStart', 'onResume', 'onPause', 'onStop', 'onDestroy'].map((state) => (
            <button
              key={state}
              onClick={() => setActivityState(state)}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                activityState === state ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {state}()
            </button>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
          Estado actual: <strong className="text-emerald-400">{activityState}()</strong> ➔
          {activityState === 'onResume'
            ? ' La pantalla está activa e interactuando con el usuario a 60/120 FPS.'
            : activityState === 'onPause'
            ? ' Otra ventana/diálogo tiene el foco; pausa animaciones y streams.'
            : activityState === 'onStop'
            ? ' La Activity ya no es visible; libera recursos pesados de memoria.'
            : ' Transición del ciclo de vida del proceso en Dalvik/ART.'}
        </div>
      </div>
    );
  }

  if (courseId === 'automatas_compiladores') {
    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚙️</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Autómata Finito & Tokenizer</h4>
              <p className="text-xs text-slate-400">DFA para reconocer cadenas del lenguaje regular L = (a|b)*b</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs font-mono text-slate-400">Cadena de prueba w ∈ Σ*:</label>
          <input
            type="text"
            value={automataInput}
            onChange={(e) => testAutomata(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-400 outline-none"
          />
          <span
            className={`px-3 py-1 rounded-xl text-xs font-bold font-mono ${
              automataAccepted ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
            }`}
          >
            {automataAccepted ? '✓ Cadena ACEPTADA por el DFA' : '✗ Cadena RECHAZADA'}
          </span>
        </div>
      </div>
    );
  }

  // Fallback generic simulator
  return <DataStructureVisualizer moduleId={moduleId} />;
};

export default DomainInteractiveSimulator;
