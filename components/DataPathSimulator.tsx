import React, { useState } from 'react';

interface DataPathSimulatorProps {
  moduleId?: number;
}

interface Instruction {
  id: number;
  label: string;
  code: string;
  description: string;
  action: (state: CpuState) => CpuState;
}

interface CpuState {
  pc: number; // Program Counter
  stage: 'FETCH' | 'DECODE' | 'EXECUTE';
  registers: { R0: number; R1: number; R2: number; R3: number };
  ram: Record<string, number>;
  aluOp: string | null;
  aluResult: number | null;
  busActive: string | null;
  log: string;
}

const PROGRAM: Instruction[] = [
  {
    id: 0,
    label: 'Paso 1: Leer variable "a" de RAM a R0',
    code: 'LOAD R0, [0x10]  // a = 7',
    description: 'La CPU envía la dirección 0x10 por el bus de direcciones y carga el valor 7 en el Registro R0.',
    action: (prev) => ({
      ...prev,
      registers: { ...prev.registers, R0: prev.ram['0x10'] ?? 7 },
      aluOp: null,
      aluResult: null,
      busActive: 'RAM [0x10] ➔ Bus de Datos ➔ R0',
      log: 'FETCH & LOAD: Valor 7 transferido desde la celda de memoria RAM 0x10 al registro R0 de la CPU.',
    }),
  },
  {
    id: 1,
    label: 'Paso 2: Leer variable "b" de RAM a R1',
    code: 'LOAD R1, [0x11]  // b = 3',
    description: 'La CPU solicita la dirección 0x11 y almacena el valor 3 en el Registro R1.',
    action: (prev) => ({
      ...prev,
      registers: { ...prev.registers, R1: prev.ram['0x11'] ?? 3 },
      aluOp: null,
      aluResult: null,
      busActive: 'RAM [0x11] ➔ Bus de Datos ➔ R1',
      log: 'FETCH & LOAD: Valor 3 transferido desde la RAM 0x11 al registro R1 de la CPU.',
    }),
  },
  {
    id: 2,
    label: 'Paso 3: Ejecutar suma en la ALU',
    code: 'ADD R2, R0, R1   // R2 = 7 + 3',
    description: 'La Unidad Aritmético-Lógica (ALU) recibe R0 y R1, realiza la suma binaria y coloca el resultado 10 en R2.',
    action: (prev) => {
      const sum = prev.registers.R0 + prev.registers.R1;
      return {
        ...prev,
        registers: { ...prev.registers, R2: sum },
        aluOp: 'ADD (+)',
        aluResult: sum,
        busActive: 'R0 (7) + R1 (3) ➔ ALU ➔ R2 (10)',
        log: 'EXECUTE: La ALU computó 7 + 3 = 10 y guardó el resultado en el registro R2 en 0.5 nanosegundos.',
      };
    },
  },
  {
    id: 3,
    label: 'Paso 4: Guardar resultado en RAM',
    code: 'STORE [0x12], R2 // resultado = 10',
    description: 'El resultado almacenado temporalmente en R2 se escribe de regreso en la memoria RAM persistente (dirección 0x12).',
    action: (prev) => ({
      ...prev,
      ram: { ...prev.ram, '0x12': prev.registers.R2 },
      aluOp: null,
      busActive: 'R2 (10) ➔ Bus de Datos ➔ RAM [0x12]',
      log: 'STORE: El valor 10 de R2 fue persistido en la dirección de memoria 0x12 ("resultado").',
    }),
  },
];

export const DataPathSimulator: React.FC<DataPathSimulatorProps> = ({ moduleId = 1 }) => {
  const initialCpuState: CpuState = {
    pc: 0,
    stage: 'FETCH',
    registers: { R0: 0, R1: 0, R2: 0, R3: 0 },
    ram: {
      '0x10': 7, // variable a
      '0x11': 3, // variable b
      '0x12': 0, // variable resultado
      '0x13': 1, // variable flag
    },
    aluOp: null,
    aluResult: null,
    busActive: null,
    log: 'CPU en reposo. Haz clic en "Paso a Paso" para iniciar el ciclo Fetch-Decode-Execute.',
  };

  const [state, setState] = useState<CpuState>(initialCpuState);
  const [activeTab, setActiveTab] = useState<'cpu' | 'latency' | 'pseudocode'>('cpu');

  const handleStep = () => {
    if (state.pc >= PROGRAM.length) {
      setState((prev) => ({
        ...prev,
        log: 'Programa finalizado con éxito. El resultado (10) quedó persistido en RAM. Haz clic en Reiniciar.',
      }));
      return;
    }

    const currentInstr = PROGRAM[state.pc];
    const nextState = currentInstr.action(state);
    setState({
      ...nextState,
      pc: state.pc + 1,
      stage: state.pc + 1 >= PROGRAM.length ? 'EXECUTE' : 'FETCH',
    });
  };

  const handleReset = () => {
    setState(initialCpuState);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/20">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Data Path & Arquitectura Von Neumann
              </span>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> En Vivo
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
              Simulador del Data Path & Ciclo de la CPU
            </h3>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto scroll-touch pb-1">
          <button
            onClick={() => setActiveTab('cpu')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'cpu'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🕹️ Arquitectura del Procesador
          </button>
          <button
            onClick={() => setActiveTab('pseudocode')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'pseudocode'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            📝 Código vs Instrucciones
          </button>
          <button
            onClick={() => setActiveTab('latency')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'latency'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            ⏱️ Jerarquía de Latencias
          </button>
        </div>
      </div>

      {activeTab === 'cpu' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Instrucción Actual:</span>
              <span className="px-2.5 py-1 rounded-lg bg-indigo-950 text-indigo-300 font-mono font-bold text-xs border border-indigo-800">
                PC = {state.pc} / {PROGRAM.length}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/40">
                Fase: {state.stage}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleStep}
                disabled={state.pc >= PROGRAM.length}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-40 text-white transition shadow-md shadow-orange-500/20 cursor-pointer flex items-center gap-1.5"
              >
                <span>Paso a Paso</span>
                <span>➔</span>
              </button>
              <button
                onClick={handleReset}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-300 transition cursor-pointer"
              >
                Reiniciar
              </button>
            </div>
          </div>

          {/* Bus Notification */}
          {state.busActive && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 font-mono flex items-center gap-2 animate-in fade-in">
              <span className="animate-pulse">⚡</span>
              <span>Bus de Datos Activo: <strong>{state.busActive}</strong></span>
            </div>
          )}

          {/* Interactive Hardware Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CPU Core (Registers & ALU) */}
            <div className="lg:col-span-2 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Núcleo de la CPU (Registers & ALU)
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Velocidad: ~3.5 GHz (0.3 ns/ciclo)</span>
              </div>

              {/* Registers */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-2 font-mono">
                  REGISTROS INTERNOS (Acceso ultra-rápido ~0.5 ns):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(state.registers).map(([reg, val]) => (
                    <div
                      key={reg}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-between transition-all ${
                        Number(val) > 0
                          ? 'bg-amber-950/40 border-amber-500/80 shadow-md shadow-amber-500/20'
                          : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-slate-400 font-bold">{reg}</span>
                      <span className="text-xl font-black font-mono my-1 text-white">{val}</span>
                      <span className="text-[9px] text-slate-500">64-bit int</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ALU (Arithmetic Logic Unit) */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-white block">Unidad Aritmético-Lógica (ALU)</span>
                  <p className="text-[11px] text-slate-400">
                    Realiza operaciones matemáticas binarias y comparaciones lógicas en hardware.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono text-amber-300 font-bold">
                    Op: {state.aluOp || 'IDLE (Espera)'}
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-700 text-xs font-mono text-emerald-300 font-bold">
                    Salida: {state.aluResult !== null ? state.aluResult : '—'}
                  </div>
                </div>
              </div>

              {/* Instructions List (Program in Execution) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 block font-mono">
                  PROGRAMA EN CURSO (Instrucciones de Máquina):
                </span>
                {PROGRAM.map((inst, idx) => {
                  const isCurrent = state.pc === idx;
                  const isDone = state.pc > idx;
                  return (
                    <div
                      key={inst.id}
                      className={`p-2.5 rounded-xl border text-xs font-mono flex items-center justify-between transition-all ${
                        isCurrent
                          ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-400'
                          : isDone
                          ? 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                          : 'bg-slate-900/80 border-slate-800/80 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500">[{idx}]</span>
                        <span className="font-bold">{inst.code}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{inst.label.split(':')[0]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RAM Memory (Main Memory) */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" /> Memoria RAM Física
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Latencia: ~100 ns</span>
                </div>
                <p className="text-[11px] text-slate-400 mb-3">
                  Casillas numeradas en hexadecimal donde residen las variables de tu programa.
                </p>

                <div className="space-y-2 font-mono text-xs">
                  {Object.entries(state.ram).map(([addr, val]) => {
                    const varName =
                      addr === '0x10' ? 'variable "a"' : addr === '0x11' ? 'variable "b"' : addr === '0x12' ? 'variable "resultado"' : 'variable "flag"';
                    const isUpdated = addr === '0x12' && Number(val) === 10;
                    return (
                      <div
                        key={addr}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isUpdated
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                            : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] text-indigo-400 font-bold">{addr}</span>
                          <span className="text-[10px] text-slate-400">{varName}</span>
                        </div>
                        <span className="text-base font-black text-white">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Log box */}
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                {state.log}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pseudocode' && (
        <div className="space-y-4">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">
              De Problema de la Vida Real al Silicio de la CPU
            </h4>
            <p className="text-xs text-slate-400">
              Observa cómo un mismo algoritmo se expresa en pseudocódigo mental, código de alto nivel y lenguaje de máquina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pseudocódigo */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block font-mono">
                1. Pseudocódigo (Pensamiento)
              </span>
              <pre className="p-3 rounded-xl bg-slate-900 text-amber-200 text-xs font-mono leading-relaxed overflow-x-auto">
{`ALGORITMO SumarDosNumeros
  DEFINIR a COMO ENTERO = 7
  DEFINIR b COMO ENTERO = 3
  DEFINIR resultado COMO ENTERO

  resultado = a + b
  MOSTRAR resultado
FIN ALGORITMO`}
              </pre>
            </div>

            {/* Código JS / Python */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 block font-mono">
                2. Código Moderno (JS & Python)
              </span>
              <pre className="p-3 rounded-xl bg-slate-900 text-indigo-200 text-xs font-mono leading-relaxed overflow-x-auto">
{`// En JavaScript
const a = 7;
const b = 3;
const resultado = a + b;
console.log(resultado);

# En Python
a = 7
b = 3
resultado = a + b
print(resultado)`}
              </pre>
            </div>

            {/* Assembly / Data Path */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block font-mono">
                3. Instrucciones de Máquina (CPU)
              </span>
              <pre className="p-3 rounded-xl bg-slate-900 text-emerald-200 text-xs font-mono leading-relaxed overflow-x-auto">
{`// Instrucciones en Data Path
LOAD R0, [0x10]   ; Lee a
LOAD R1, [0x11]   ; Lee b
ADD  R2, R0, R1   ; Suma en ALU
STORE [0x12], R2  ; Guarda total
HALT              ; Termina ciclo`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'latency' && (
        <div className="space-y-4">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">
              La Escala Humana de las Latencias de Computación
            </h4>
            <p className="text-xs text-slate-400">
              Si 1 ciclo de CPU (0.3 nanosegundos) equivaliera a <strong>1 segundo humano</strong>, así se compararían las operaciones reales:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { component: 'Registros de CPU (R0..R3)', time: '0.5 ns', human: '1.5 segundos', color: 'bg-emerald-500' },
              { component: 'Memoria Caché L1 (64 KB)', time: '1.0 ns', human: '3.0 segundos', color: 'bg-emerald-400' },
              { component: 'Memoria Caché L3 (32 MB)', time: '15 ns', human: '45 segundos', color: 'bg-amber-400' },
              { component: 'Memoria RAM Física (DDR5)', time: '100 ns', human: '5 minutos (esperar un café)', color: 'bg-amber-500' },
              { component: 'Lectura de Disco SSD NVMe', time: '100 µs', human: '3.5 días de espera', color: 'bg-orange-500' },
              { component: 'Petición de Red / API (EE.UU.)', time: '80 ms', human: '8 años de espera continua 😱', color: 'bg-rose-500' },
            ].map((item) => (
              <div
                key={item.component}
                className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${item.color} shrink-0`} />
                  <div>
                    <span className="text-xs font-bold text-white block">{item.component}</span>
                    <span className="text-[10px] text-slate-400 font-mono">Tiempo físico: {item.time}</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-amber-300">
                  Escala Humana: {item.human}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataPathSimulator;
