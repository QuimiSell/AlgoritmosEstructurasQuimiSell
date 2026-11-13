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
  // DEVSECOPS & CI/CD SIMULATOR (git_devops_vercel)
  // ----------------------------------------------------
  const [gitCommits, setGitCommits] = useState<string[]>([
    'C0 (init: scaffold)',
    'C1 (feat: ui & auth)',
    'C2 (sec: add husky pre-commit)',
  ]);
  const [gitBranch, setGitBranch] = useState<string>('main');
  const [ciStatus, setCiStatus] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');
  const [ciLogs, setCiLogs] = useState<string[]>([]);
  const [devSecOpsScenario, setDevSecOpsScenario] = useState<'clean' | 'secret_leak' | 'owasp_vuln' | 'sca_cve'>('clean');
  const [activePipelineStage, setActivePipelineStage] = useState<number>(-1);

  const handleGitCommit = () => {
    const nextId = `C${gitCommits.length}`;
    setGitCommits([...gitCommits, `${nextId} (${gitBranch})`]);
  };

  const handleRunCiPipeline = () => {
    setCiStatus('running');
    setActivePipelineStage(0);
    setCiLogs(['[CI/CD] Inicializando Runner GitHub Actions (ubuntu-latest)...']);

    setTimeout(() => {
      // Step 1: TruffleHog Secret Scanning
      if (devSecOpsScenario === 'secret_leak') {
        setActivePipelineStage(0);
        setCiLogs((prev) => [
          ...prev,
          '🔍 [TRUFFLEHOG] Escaneando commits en busca de credenciales expuestas...',
          '❌ [TRUFFLEHOG] ALERTA CRÍTICA: Se detectó Stripe Secret Key (sk_live_51M...) en config/keys.ts!',
          '⛔ POLÍTICA SHIFT-LEFT: Commit bloqueado antes del push. Revoque la clave en Stripe y use git reset HEAD~1.',
        ]);
        setCiStatus('failed');
        return;
      }

      setCiLogs((prev) => [
        ...prev,
        '✓ [TRUFFLEHOG] Secret Scanning: 0 credenciales expuestas en commits (Entropy Shannon OK).',
      ]);
      setActivePipelineStage(1);

      setTimeout(() => {
        // Step 2: Semgrep SAST
        if (devSecOpsScenario === 'owasp_vuln') {
          setActivePipelineStage(1);
          setCiLogs((prev) => [
            ...prev,
            '🛡️ [SEMGREP SAST] Analizando Árbol de Sintaxis Abstracta (AST) contra OWASP Top 10...',
            '❌ [SEMGREP] VULNERABILIDAD OWASP A03 (SQL Injection): query insegura "SELECT * FROM users WHERE id = " + userId',
            '⛔ BRANCH PROTECTION: Pull Request bloqueado. Utilice consultas parametrizadas o Prepared Statements.',
          ]);
          setCiStatus('failed');
          return;
        }

        setCiLogs((prev) => [
          ...prev,
          '✓ [SEMGREP SAST] 0 fallos de código fuente detectados (Reglas p/owasp-top-ten y p/security-audit aprobadas).',
        ]);
        setActivePipelineStage(2);

        setTimeout(() => {
          // Step 3: Trivy SCA
          if (devSecOpsScenario === 'sca_cve') {
            setActivePipelineStage(2);
            setCiLogs((prev) => [
              ...prev,
              '📦 [TRIVY SCA] Auditando dependencias en package-lock.json contra bases de datos CVE/NVD...',
              '❌ [TRIVY] VULNERABILIDAD CRÍTICA EN CADENA DE SUMINISTRO: CVE-2024-21538 en paquete transitivo.',
              '⛔ PIPELINE FAIL-FAST: Build abortado por directiva --severity CRITICAL. Ejecute npm audit fix.',
            ]);
            setCiStatus('failed');
            return;
          }

          setCiLogs((prev) => [
            ...prev,
            '✓ [TRIVY SCA] Software Composition Analysis: 0 vulnerabilidades CRITICAL/HIGH en dependencias.',
          ]);
          setActivePipelineStage(3);

          setTimeout(() => {
            // Step 4: Tests
            setCiLogs((prev) => [
              ...prev,
              '✓ [VITEST QA] 42/42 tests unitarios e integrales aprobados con 94.8% de cobertura.',
              '✓ [BUILD] Vite empaquetó 798 módulos en 2.12s con chunks inmutables.',
            ]);
            setActivePipelineStage(4);

            setTimeout(() => {
              // Step 5: DAST
              setCiLogs((prev) => [
                ...prev,
                '⚡ [OWASP ZAP DAST] Escaneando URL de preview staging (análisis dinámico de caja negra)...',
                '✓ [OWASP ZAP] Cabeceras de seguridad verificadas: CSP, HSTS, X-Frame-Options: DENY, X-Content-Type: nosniff.',
              ]);
              setActivePipelineStage(5);

              setTimeout(() => {
                // Step 6: Deploy
                setCiLogs((prev) => [
                  ...prev,
                  '🚀 [VERCEL EDGE] Despliegue inmutable completado con éxito ($0/mes).',
                  '🌐 URL Global: https://master-class-quimisell.vercel.app (CDN Edge Global)',
                ]);
                setCiStatus('success');
              }, 500);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 500);
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
  // CLEAN CODE & QA TESTING PYRAMID (clean_code_solid)
  // ----------------------------------------------------
  const [qaActiveTab, setQaActiveTab] = useState<'solid' | 'tdd' | 'playwright' | 'k6'>('solid');
  const [solidActive, setSolidActive] = useState<'bad' | 'good'>('bad');
  const [tddPhase, setTddPhase] = useState<'red' | 'green' | 'refactor'>('red');
  const [playwrightRunning, setPlaywrightRunning] = useState<boolean>(false);
  const [playwrightStep, setPlaywrightStep] = useState<number>(4);
  const [k6Vus, setK6Vus] = useState<number>(50);
  const [k6Running, setK6Running] = useState<boolean>(false);
  const [k6Metrics, setK6Metrics] = useState<{ rps: number; p95: number; errors: number; pass: boolean } | null>(null);

  const runPlaywrightSimulation = () => {
    setPlaywrightRunning(true);
    setPlaywrightStep(1);
    setTimeout(() => setPlaywrightStep(2), 350);
    setTimeout(() => setPlaywrightStep(3), 700);
    setTimeout(() => {
      setPlaywrightStep(4);
      setPlaywrightRunning(false);
    }, 1100);
  };

  const runK6Simulation = () => {
    setK6Running(true);
    setTimeout(() => {
      const calculatedRps = k6Vus * 12 + Math.floor(Math.random() * 20);
      const calculatedP95 = Math.floor(35 + (k6Vus / 10) * 4 + Math.random() * 6);
      setK6Metrics({
        rps: calculatedRps,
        p95: calculatedP95,
        errors: 0,
        pass: calculatedP95 < 150
      });
      setK6Running(false);
    }, 500);
  };

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
    const pipelineStages = [
      { id: 0, name: 'Secret Scan', tool: 'TruffleHog', icon: '🔑', desc: 'Pre-commit / Commits' },
      { id: 1, name: 'SAST Scan', tool: 'Semgrep OSS', icon: '🛡️', desc: 'OWASP Top 10 AST' },
      { id: 2, name: 'SCA Audit', tool: 'Trivy Security', icon: '📦', desc: 'package-lock.json CVEs' },
      { id: 3, name: 'QA & Build', tool: 'Vitest + Vite', icon: '🧪', desc: '42 Tests + Chunks' },
      { id: 4, name: 'DAST Scan', tool: 'OWASP ZAP', icon: '⚡', desc: 'Preview URL Headers' },
      { id: 5, name: 'Edge Deploy', tool: 'Vercel CDN', icon: '🚀', desc: 'Producción Inmutable $0' },
    ];

    return (
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 sm:p-7 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <div>
              <h4 className="text-lg font-bold text-white">Simulador de Pipeline DevSecOps & CI/CD</h4>
              <p className="text-xs text-slate-400">
                Shift-Left: TruffleHog (Secrets) ➔ Semgrep (SAST) ➔ Trivy (SCA) ➔ Vitest ➔ OWASP ZAP (DAST) ➔ Vercel Edge
              </p>
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
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer shadow-lg shadow-emerald-950/40"
            >
              ▶ Disparar DevSecOps
            </button>
          </div>
        </div>

        {/* Selector de Escenarios DevSecOps */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
            Selecciona el escenario de auditoría para probar el pipeline:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <button
              onClick={() => {
                setDevSecOpsScenario('clean');
                setCiStatus('idle');
                setActivePipelineStage(-1);
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                devSecOpsScenario === 'clean'
                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>🛡️</span> 1. Shift-Left Seguro
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                Pasa TruffleHog, Semgrep SAST, Trivy y ZAP al 100%
              </span>
            </button>

            <button
              onClick={() => {
                setDevSecOpsScenario('secret_leak');
                setCiStatus('idle');
                setActivePipelineStage(-1);
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                devSecOpsScenario === 'secret_leak'
                  ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>🔑</span> 2. Fuga de Secretos
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                TruffleHog bloquea el commit por Stripe API key
              </span>
            </button>

            <button
              onClick={() => {
                setDevSecOpsScenario('owasp_vuln');
                setCiStatus('idle');
                setActivePipelineStage(-1);
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                devSecOpsScenario === 'owasp_vuln'
                  ? 'bg-red-950/40 border-red-500 text-red-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>⚠️</span> 3. Brecha OWASP SQLi
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                Semgrep SAST bloquea el PR por query concatenada
              </span>
            </button>

            <button
              onClick={() => {
                setDevSecOpsScenario('sca_cve');
                setCiStatus('idle');
                setActivePipelineStage(-1);
              }}
              className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                devSecOpsScenario === 'sca_cve'
                  ? 'bg-purple-950/40 border-purple-500 text-purple-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>📦</span> 4. CVE en Dependencia
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                Trivy SCA aborta el build por vulnerabilidad crítica
              </span>
            </button>
          </div>
        </div>

        {/* 6 Visual DevSecOps Pipeline Stages */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>ETAPAS AUTOMATIZADAS DEL PIPELINE (.github/workflows/devsecops.yml)</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                ciStatus === 'success'
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-600'
                  : ciStatus === 'failed'
                  ? 'bg-red-950 text-red-400 border border-red-600'
                  : ciStatus === 'running'
                  ? 'bg-indigo-950 text-indigo-400 border border-indigo-600 animate-pulse'
                  : 'bg-slate-900 text-slate-500'
              }`}
            >
              {ciStatus.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
            {pipelineStages.map((stage) => {
              const isPassed =
                ciStatus === 'success' ||
                (ciStatus === 'failed' && activePipelineStage > stage.id) ||
                (ciStatus === 'running' && activePipelineStage > stage.id);
              const isCurrent = ciStatus === 'running' && activePipelineStage === stage.id;
              const isFailed = ciStatus === 'failed' && activePipelineStage === stage.id;

              return (
                <div
                  key={stage.id}
                  className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                    isFailed
                      ? 'bg-red-950/60 border-red-500 shadow-md shadow-red-950/50'
                      : isPassed
                      ? 'bg-emerald-950/40 border-emerald-500/80'
                      : isCurrent
                      ? 'bg-indigo-950/50 border-indigo-400 animate-pulse shadow-md shadow-indigo-950/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{stage.icon}</span>
                    <span className="text-[10px] font-mono font-bold">
                      {isFailed ? '❌' : isPassed ? '✅' : isCurrent ? '⏳' : '⚪'}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs font-bold text-white block truncate">{stage.name}</span>
                    <span className="text-[10px] font-mono text-cyan-300 block">{stage.tool}</span>
                    <span className="text-[9px] text-slate-400 block truncate">{stage.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Git Commit Tree */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>
              Rama activa: <strong className="text-indigo-400">{gitBranch}</strong>
            </span>
            <span>HEAD ➔ {gitCommits[gitCommits.length - 1]}</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto py-2">
            {gitCommits.map((c, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <div className="px-3 py-1.5 rounded-xl bg-indigo-950 border border-indigo-700 text-indigo-200 font-mono text-xs font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  {c}
                </div>
                {i < gitCommits.length - 1 && <span className="text-slate-600 text-sm">──➔</span>}
              </div>
            ))}
          </div>
        </div>

        {/* DevSecOps Terminal Output */}
        {ciStatus !== 'idle' && (
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1.5 font-mono text-xs max-h-60 overflow-y-auto">
            <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
              GitHub Actions runner (ubuntu-latest) · Job Log
            </span>
            {ciLogs.map((log, idx) => {
              const isError = log.includes('❌') || log.includes('⛔');
              const isSuccess = log.includes('✓') || log.includes('🚀');
              return (
                <div
                  key={idx}
                  className={
                    isError
                      ? 'text-rose-400 font-semibold'
                      : isSuccess
                      ? 'text-emerald-300'
                      : 'text-slate-300'
                  }
                >
                  {log}
                </div>
              );
            })}
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
        {/* Cabecera del Simulador */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧼</span>
            <div>
              <h4 className="text-lg font-bold text-white">Laboratorio Interactivo de Clean Code & QA Testing Pyramid</h4>
              <p className="text-xs text-slate-400">Refactorización SOLID, TDD (Vitest), E2E (Playwright) y pruebas de estrés (k6)</p>
            </div>
          </div>
          {/* Navegación por pestañas de QA */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setQaActiveTab('solid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                qaActiveTab === 'solid' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              🧼 SOLID Refactor
            </button>
            <button
              onClick={() => setQaActiveTab('tdd')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                qaActiveTab === 'tdd' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              🧪 Vitest / TDD
            </button>
            <button
              onClick={() => setQaActiveTab('playwright')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                qaActiveTab === 'playwright' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              🎭 Playwright E2E
            </button>
            <button
              onClick={() => setQaActiveTab('k6')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                qaActiveTab === 'k6' ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚡ k6 Carga SLA
            </button>
          </div>
        </div>

        {/* TAB 1: SOLID REFACTOR */}
        {qaActiveTab === 'solid' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Principio de Responsabilidad Única (SRP) e Inversión de Dependencias (DIP)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSolidActive('bad')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    solidActive === 'bad' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  ❌ Monolito Sucio
                </button>
                <button
                  onClick={() => setSolidActive('good')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
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
                  <span className="text-rose-400 font-bold block">// VIOLACIÓN DE SRP Y DIP: Clase "Dios" imposible de testear en aislamiento</span>
                  <pre className="text-slate-300">{`class UserManager {
  // Acoplamiento directo a base de datos real, SMTP y disco duro
  createUser(name: string, email: string) {
    db.query("INSERT INTO users VALUES (...)"); // BD acoplada
    smtp.sendMail(email, "¡Bienvenido!");       // Email acoplado
    fs.writeFileSync("audit.log", name);       // Sistema de archivos
  }
}`}</pre>
                  <div className="mt-3 p-3 bg-rose-950/40 rounded-xl border border-rose-900/60 text-[11px] text-rose-200">
                    ⚠️ <strong>Antipatrón Crítico:</strong> Para correr un test unitario de esta clase necesitarías una base de datos real y un servidor de email activo. Los tests tardarían segundos y fallarían aleatoriamente por problemas de red.
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-emerald-300">
                  <span className="text-emerald-400 font-bold block">// PRINCIPIOS SOLID: Dependencias inyectadas mediante abstracciones</span>
                  <pre className="text-slate-300">{`export interface UserRepository { save(user: { name: string; email: string }): User; }
export interface MailerService { sendWelcomeEmail(email: string): Promise<void>; }

export class UserService {
  constructor(
    private userRepo: UserRepository, 
    private mailer: MailerService
  ) {}

  createUser(name: string, email: string): User {
    const user = this.userRepo.save({ name, email });
    this.mailer.sendWelcomeEmail(user.email);
    return user;
  }
}`}</pre>
                  <div className="mt-3 p-3 bg-emerald-950/40 rounded-xl border border-emerald-900/60 text-[11px] text-emerald-200">
                    ✨ <strong>Diseño Limpio y Testeable:</strong> Permite inyectar mocks (`vi.fn()`) instantáneos. El test unitario se ejecuta en 2 milisegundos sin tocar infraestructura externa.
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: VITEST TDD RUNNER */}
        {qaActiveTab === 'tdd' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-300">
                Ciclo TDD: Red-Green-Refactor (Patrón AAA: Arrange, Act, Assert)
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTddPhase('red')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    tddPhase === 'red' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  🔴 1. RED (Fallo)
                </button>
                <button
                  onClick={() => setTddPhase('green')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    tddPhase === 'green' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  🟢 2. GREEN (Pasa)
                </button>
                <button
                  onClick={() => setTddPhase('refactor')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    tddPhase === 'refactor' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  🔄 3. REFACTOR (Limpio)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Código bajo prueba */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-2">
                <span className="text-slate-400 font-bold block text-[11px]">
                  {tddPhase === 'red' && '// 1. TEST PRIMERO (TDD): Prueba que define el requisito antes de programar'}
                  {tddPhase === 'green' && '// 2. CÓDIGO MÍNIMO: Solo lo necesario para poner el test en verde'}
                  {tddPhase === 'refactor' && '// 3. REFACTORIZACIÓN: Arquitectura limpia con Patrón Strategy'}
                </span>
                <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
                  {tddPhase === 'red' && `// src/checkout.test.ts (Vitest)
import { describe, it, expect } from 'vitest';

describe('CheckoutService', () => {
  it('debe aplicar 20% de descuento a clientes VIP', () => {
    // ARRANGE: Preparar datos
    const service = new CheckoutService();
    // ACT: Ejecutar acción
    const total = service.calculate(100, 'VIP');
    // ASSERT: Verificar expectativa
    expect(total).toBe(80); // Falla porque la clase aún no calcula VIP
  });
});`}
                  {tddPhase === 'green' && `// src/checkout.ts (Implementación mínima)
export class CheckoutService {
  calculate(amount: number, tier: string): number {
    if (tier === 'VIP') return amount * 0.8; // Código mínimo
    return amount;
  }
}`}
                  {tddPhase === 'refactor' && `// src/checkout.ts (Refactorizado con Strategy + Inyección)
export interface DiscountStrategy {
  apply(amount: number): number;
}
export class VipDiscount implements DiscountStrategy {
  apply(amount: number) { return amount * 0.8; }
}
export class CheckoutService {
  constructor(private strategy: DiscountStrategy) {}
  calculate(amount: number) { return this.strategy.apply(amount); }
}`}
                </pre>
              </div>

              {/* Terminal de Vitest */}
              <div className="bg-black/80 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400 text-[11px]">⚡ Terminal Vitest v3.2.0</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    tddPhase === 'red' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  }`}>
                    {tddPhase === 'red' ? '1 FAILED' : 'ALL PASSED'}
                  </span>
                </div>
                <pre className={`text-[11px] leading-relaxed ${
                  tddPhase === 'red' ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  {tddPhase === 'red' && `FAIL  src/checkout.test.ts > CheckoutService > debe aplicar 20% de descuento a VIP
  AssertionError: expected 100 to be 80
    ❯ src/checkout.test.ts:10:19
  
Tests: 1 failed, 0 passed (1 total)
Duration: 12ms`}
                  {tddPhase === 'green' && `PASS  src/checkout.test.ts
  ✓ CheckoutService > debe aplicar 20% de descuento a VIP (2ms)
  ✓ CheckoutService > calcula monto sin descuento para clientes estándar (1ms)

Tests: 2 passed (2 total)
Duration: 8ms`}
                  {tddPhase === 'refactor' && `PASS  src/checkout.test.ts (Strategy Pattern Suite)
  ✓ CheckoutService > aplica descuento VIP delegando en VipDiscount (2ms)
  ✓ CheckoutService > mock injection con vi.fn() verifica contrato único (1ms)
  ✓ CheckoutService > cobertura de ramas completa sin switches frágiles (1ms)

Tests: 3 passed (3 total)
Duration: 6ms`}
                </pre>

                {/* Métricas de Cobertura */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[10px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Line Coverage:</span>
                    <span className="text-emerald-400 font-bold">{tddPhase === 'red' ? '42.0%' : '98.4%'}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${tddPhase === 'red' ? 'bg-rose-500 w-[42%]' : 'bg-emerald-500 w-[98%]'}`} />
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Branch Coverage:</span>
                    <span className="text-emerald-400 font-bold">{tddPhase === 'red' ? '25.0%' : '95.2%'}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${tddPhase === 'red' ? 'bg-rose-500 w-[25%]' : 'bg-emerald-500 w-[95%]'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PLAYWRIGHT E2E RUNNER */}
        {qaActiveTab === 'playwright' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Playwright v1.49 • Automatización de Navegador (Selectores Semánticos & Aserciones Web-First)
              </span>
              <button
                onClick={runPlaywrightSimulation}
                disabled={playwrightRunning}
                className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-1.5 disabled:opacity-50"
              >
                {playwrightRunning ? '⏳ Ejecutando en Chromium...' : '▶ Ejecutar Suite E2E'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { step: 1, action: "page.goto('/checkout')", desc: "Carga de página", latency: "38ms", icon: "🌐" },
                { step: 2, action: "getByPlaceholder('Cupón').fill('VIP2026')", desc: "Auto-wait e input", latency: "14ms", icon: "⌨️" },
                { step: 3, action: "getByRole('button', { name: 'Pagar' }).click()", desc: "Dispatch de evento", latency: "32ms", icon: "🖱️" },
                { step: 4, action: "await expect(locator).toBeVisible()", desc: "Aserción Web-First", latency: "16ms", icon: "✅" },
              ].map((s) => (
                <div
                  key={s.step}
                  className={`p-3.5 rounded-2xl border transition ${
                    playwrightStep >= s.step
                      ? 'bg-purple-950/40 border-purple-800/80 text-purple-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold">Paso 0{s.step} {s.icon}</span>
                    <span className="font-mono text-[10px] text-purple-300">{playwrightStep >= s.step ? s.latency : '--'}</span>
                  </div>
                  <p className="font-mono text-[11px] truncate">{s.action}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Simulación visual de navegador */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
              <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-slate-950 rounded-lg px-3 py-0.5 text-[11px] font-mono text-slate-400 border border-slate-800 text-center">
                  https://quimisell.dev/checkout
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">4 PASSED (100ms)</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2 text-slate-300">
                <div className="text-emerald-400 font-bold">✓ [Chromium] › checkout.spec.ts:8:1 › Flujo de Compra E2E Completo</div>
                <div className="text-slate-400 text-[11px] pl-4">
                  › Localizador: <code className="text-purple-300">{"page.getByRole('button', { name: 'Pagar con Tarjeta' })"}</code><br />
                  › Auto-waiting: Elemento visible, habilitado y estable.<br />
                  › Web-First Assertion: <code className="text-emerald-300">expect(page.getByText('¡Orden Confirmada #8492!')).toBeVisible()</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: K6 PERFORMANCE & STRESS RUNNER */}
        {qaActiveTab === 'k6' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-slate-300 block">
                  k6 v0.54.0 • Pruebas de Carga & Umbrales SLA (Thresholds)
                </span>
                <span className="text-[11px] text-slate-400">
                  Simulación de tráfico concurrente para validar percentiles de latencia antes de producción.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <label htmlFor="k6-vus-slider" className="text-xs text-slate-400">VUs:</label>
                  <input
                    id="k6-vus-slider"
                    aria-label="Usuarios virtuales concurrentes"
                    type="range"
                    min="10"
                    max="200"
                    step="10"
                    value={k6Vus}
                    onChange={(e) => setK6Vus(Number(e.target.value))}
                    className="w-24 accent-amber-500"
                  />
                  <span className="text-xs font-bold font-mono text-amber-400 w-8">{k6Vus}</span>
                </div>
                <button
                  onClick={runK6Simulation}
                  disabled={k6Running}
                  className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-1.5 disabled:opacity-50"
                >
                  {k6Running ? '⏳ Simulando Carga...' : '🚀 Lanzar Prueba k6'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Throughput (RPS)</span>
                <span className="text-xl font-mono font-bold text-amber-400">
                  {k6Metrics ? k6Metrics.rps : (k6Vus * 12)} <span className="text-xs font-normal text-slate-400">req/s</span>
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">Peticiones concurrentes</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Latencia P95</span>
                <span className="text-xl font-mono font-bold text-emerald-400">
                  {k6Metrics ? k6Metrics.p95 : 48} <span className="text-xs font-normal text-slate-400">ms</span>
                </span>
                <span className="text-[10px] text-emerald-500 block mt-1">SLA: &lt; 150ms (Cumplido)</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Tasa de Error</span>
                <span className="text-xl font-mono font-bold text-emerald-400">
                  0.00%
                </span>
                <span className="text-[10px] text-emerald-500 block mt-1">SLA: &lt; 1.0% (0 errores)</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Compuerta CI/CD</span>
                <span className="text-sm font-bold text-emerald-400 block mt-1">
                  ✅ APROBADO
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Listo para despliegue masivo</span>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
              <span className="text-slate-400 font-bold block text-[11px]">// Script k6 de validación SLA:</span>
              <pre className="text-slate-400 text-[11px] leading-relaxed overflow-x-auto">{`export const options = {
  vus: ${k6Vus},
  duration: '30s',
  thresholds: {
    'http_req_duration': ['p(95)<150'], // El 95% de usuarios debe recibir respuesta en < 150ms
    'http_req_failed': ['rate<0.01'],    // Errores HTTP deben ser menores al 1%
  },
};`}</pre>
            </div>
          </div>
        )}
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
