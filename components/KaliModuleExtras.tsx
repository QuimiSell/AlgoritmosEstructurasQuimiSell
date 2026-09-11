import React from 'react';
import KaliTerminalSimulator from './KaliTerminalSimulator';
import { getKaliPhase } from './KaliHero';

interface KaliModuleExtrasProps {
  moduleId: number;
}

type Card = { l: string; t: string; c: string; accent?: string };

const FHS_CARDS: Card[] = [
  { l: '/etc', t: 'Configuración', c: 'Archivos de configuración del sistema' },
  { l: '/proc', t: 'Kernel en RAM', c: 'Pseudo-FS con estado de procesos y red' },
  { l: '/var/log', t: 'Bitácoras', c: 'Logs históricos de eventos del sistema' },
  { l: '2>&1', t: 'Redirección', c: 'Unir stderr con stdout en scripts' },
  { l: 'grep|awk', t: 'Filtrado', c: 'Procesamiento de texto con regex' },
  { l: 'chmod', t: 'Permisos', c: 'Octal (755) y atributos especiales' },
];

const NMAP_CARDS: Card[] = [
  { l: '-sS', t: 'SYN Stealth', c: 'Escaneo semiabierto sin completar TCP' },
  { l: '-sV', t: 'Versiones', c: 'Detección de servicio y versión exacta' },
  { l: '-Pn', t: 'Sin ping', c: 'Omitir descubrimiento ICMP/ARP' },
  { l: '-T3', t: 'Timing', c: 'Plantilla de velocidad normal (-T0 a -T5)' },
  { l: '-D RND', t: 'Señuelos', c: 'Ofuscar IP origen con decoys' },
  { l: '--script', t: 'NSE (Lua)', c: 'Scripts vuln, safe, auth automatizados' },
];

const TRAFFIC_CARDS: Card[] = [
  { l: 'tcpdump', t: 'Captura en vivo', c: 'Sniffer CLI con filtros BPF' },
  { l: 'tshark', t: 'Wireshark CLI', c: 'Análisis de PCAP desde terminal' },
  { l: 'host x', t: 'Filtro BPF', c: 'Sintaxis: host, port, tcp, udp' },
  { l: '.pcap', t: 'Evidencia', c: 'Archivos para cadena de custodia' },
];

const WEB_CARDS: Card[] = [
  { l: 'gobuster', t: 'Fuzzing dirs', c: 'Enumeración de rutas y subdominios' },
  { l: 'nikto', t: 'Scanner web', c: 'Cabeceras, CGI y misconfigs' },
  { l: 'OWASP', t: 'Top 10', c: 'Marco de vulnerabilidades web' },
  { l: '403/200', t: 'Códigos HTTP', c: 'Interpretar respuestas en fuzzing' },
];

const PTES_CARDS: Card[] = [
  { l: 'PTES', t: 'Metodología', c: '7 fases formales de pentesting' },
  { l: 'CVSS v3.1', t: 'Severidad', c: 'Puntuación 0.0 – 10.0 estandarizada' },
  { l: 'NIST', t: 'Marco', c: 'Alineación con estándares de auditoría' },
  { l: 'Evidencia', t: 'Reproducible', c: 'Comandos + timestamps + PCAP' },
];

function CardGrid({ title, subtitle, icon, cards, borderClass }: {
  title: string;
  subtitle: string;
  icon: string;
  cards: Card[];
  borderClass: string;
}) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${borderClass} flex items-center justify-center text-white text-lg shadow-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {cards.map(card => (
          <div
            key={card.l}
            className="group p-3 sm:p-5 rounded-2xl border bg-white dark:bg-slate-800/50 border-emerald-200 dark:border-emerald-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-0"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-black block text-base sm:text-lg mb-1 font-mono break-words">
              {card.l}
            </span>
            <span className="text-slate-900 dark:text-slate-100 text-sm font-bold block">{card.t}</span>
            <span className="text-slate-400 dark:text-slate-500 text-[11px] mt-2 block">{card.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const KaliModuleExtras: React.FC<KaliModuleExtrasProps> = ({ moduleId }) => {
  const phase = getKaliPhase(moduleId);

  const toolCards = (() => {
    if (moduleId === 1 || moduleId === 2) {
      return (
        <CardGrid
          title="Mapa del Sistema Kali"
          subtitle="Directorios FHS, Bash y permisos Linux"
          icon="🐧"
          cards={FHS_CARDS}
          borderClass="from-emerald-600 to-teal-700"
        />
      );
    }
    if (moduleId >= 4 && moduleId <= 8) {
      return (
        <CardGrid
          title="Arsenal Nmap"
          subtitle="Flags esenciales para auditoría de red"
          icon="🎯"
          cards={NMAP_CARDS}
          borderClass="from-red-600 to-rose-700"
        />
      );
    }
    if (moduleId === 9) {
      return (
        <CardGrid
          title="Captura y Análisis de Tráfico"
          subtitle="Tcpdump, Tshark y filtros BPF"
          icon="📡"
          cards={TRAFFIC_CARDS}
          borderClass="from-amber-600 to-orange-700"
        />
      );
    }
    if (moduleId >= 10 && moduleId <= 12) {
      return (
        <CardGrid
          title="Auditoría Web & Wireless"
          subtitle="Herramientas ofensivas de aplicaciones"
          icon="🌍"
          cards={WEB_CARDS}
          borderClass="from-amber-600 to-red-700"
        />
      );
    }
    if (moduleId === 20) {
      return (
        <CardGrid
          title="Metodología Profesional"
          subtitle="PTES, CVSS y reporte técnico formal"
          icon="📑"
          cards={PTES_CARDS}
          borderClass="from-slate-600 to-slate-800"
        />
      );
    }
    return null;
  })();

  return (
    <div className="space-y-8">
      {toolCards}

      {phase >= 2 && moduleId >= 4 && moduleId <= 7 && (
        <div className="rounded-2xl border border-red-200 dark:border-red-900/50 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 p-4 sm:p-6">
          <p className="text-sm text-red-900 dark:text-red-200 font-medium leading-relaxed">
            <strong>Ética obligatoria:</strong> los comandos de este tramo solo deben ejecutarse en laboratorios propios
            o con autorización escrita explícita. Documenta cada acción con timestamp para reproducibilidad legal.
          </p>
        </div>
      )}

      <div className="space-y-4 animate-in fade-in duration-500 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2.5">
            <span>🐉</span> Consola Kali Linux en Vivo
          </h3>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full w-max">
            ● Terminal Activa · Sandbox
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 -mt-2">
          Practica comandos de auditoría sin instalar Kali. Escribe <code className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">help</code> para ver la lista completa.
        </p>
        <KaliTerminalSimulator />
      </div>
    </div>
  );
};

export default KaliModuleExtras;
