import React, { useState } from 'react';

interface CommandOutput {
  command: string;
  output: string;
  isError?: boolean;
}

const COMMAND_RESPONSES: Record<string, string> = {
  'help': `Comandos simulados de Kali Linux disponibles:
  • nmap [flags] <target>   - Escaneo de redes y puertos (ej: nmap -sS -p 80,443 192.168.1.50)
  • ip addr / ip route      - Diagnóstico de interfaces y tablas de enrutamiento
  • ss -tulpn               - Estadísticas de sockets y puertos TCP/UDP a la escucha
  • dig <dominio> [tipo]    - Consultas avanzadas de registros DNS
  • whois <dominio>         - Información de registro y servidores de nombres
  • gobuster dir -u <url>   - Fuzzing y descubrimiento de directorios web
  • nikto -h <target>       - Escáner de vulnerabilidades en servidores web
  • tcpdump -i <iface>      - Captura e inspección de tramas de red con filtros BPF
  • find / -perm -4000      - Búsqueda de binarios con permisos SUID
  • hashid <hash>           - Identificación de algoritmos criptográficos
  • ufw status / iptables   - Estado y reglas de cortafuegos perimetral
  • uname -a / whoami       - Información del kernel y usuario activo
  • clear                   - Limpiar la pantalla de la terminal`,

  'uname -a': `Linux kali 6.6.15-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.6.15-1kali1 (2024-02-17) x86_64 GNU/Linux`,

  'whoami': `root`,

  'pwd': `/root/workspace`,

  'ls -la': `total 48
drwx------ 4 root root 4096 Aug 17 01:45 .
drwxr-xr-x 18 root root 4096 Aug 17 01:30 ..
-rw------- 1 root root 1240 Aug 17 01:40 .bash_history
-rw-r--r-- 1 root root 3520 Aug 17 01:30 .bashrc
drwxr-xr-x 2 root root 4096 Aug 17 01:35 .nmap
-rw-r--r-- 1 root root  807 Aug 17 01:30 .profile
-rw-r--r-- 1 root root 2140 Aug 17 01:42 hosts_activos.txt
-rw-r--r-- 1 root root 5410 Aug 17 01:44 scan_results.nmap
drwxr-xr-x 2 root root 4096 Aug 17 01:36 scripts`,

  'ip addr': `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:d3:4e:8b brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.15/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 86320sec preferred_lft 86320sec
3: wlan0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 00:c0:ca:98:31:ae brd ff:ff:ff:ff:ff:ff`,

  'ip route': `default via 192.168.1.1 dev eth0 proto dhcp src 192.168.1.15 metric 100 
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.15 metric 100`,

  'ss -tulpn': `Netid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port  Process
tcp    LISTEN  0       128            0.0.0.0:22          0.0.0.0:*      users:(("sshd",pid=782,fd=3))
tcp    LISTEN  0       511            0.0.0.0:80          0.0.0.0:*      users:(("apache2",pid=1045,fd=4))
tcp    LISTEN  0       128          127.0.0.1:5432        0.0.0.0:*      users:(("postgres",pid=912,fd=5))
udp    UNCONN  0       0              0.0.0.0:68          0.0.0.0:*      users:(("dhclient",pid=650,fd=6))`,

  'nmap -sn 192.168.1.0/24': `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-08-17 01:50 CST
Nmap scan report for gateway.lan (192.168.1.1)
Host is up (0.0012s latency).
MAC Address: 00:1A:2B:3C:4D:5E (Routerboard Ltd.)
Nmap scan report for srv-ubuntu.lan (192.168.1.50)
Host is up (0.00045s latency).
MAC Address: 08:00:27:A1:B2:C3 (Oracle VirtualBox)
Nmap scan report for kali.lan (192.168.1.15)
Host is up.
Nmap done: 256 IP addresses (3 hosts up) scanned in 1.84 seconds`,

  'nmap -sS -p 80,443 192.168.1.50': `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-08-17 01:51 CST
Nmap scan report for srv-ubuntu.lan (192.168.1.50)
Host is up (0.00038s latency).

PORT    STATE SERVICE
80/tcp  open  http
443/tcp open  https
MAC Address: 08:00:27:A1:B2:C3 (Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 0.28 seconds`,

  'nmap -sS -sV -sC -p 22,80,443 192.168.1.50': `Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-08-17 01:52 CST
Nmap scan report for srv-ubuntu.lan (192.168.1.50)
Host is up (0.00041s latency).

PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 71:e4:92:8e:63:7a:51:3e:8a:42:01:99:bb:12:44:8f (ECDSA)
|_  256 b3:45:9a:12:ef:67:89:01:23:45:67:89:ab:cd:ef:01 (ED25519)
80/tcp  open  http     Apache httpd 2.4.52 ((Ubuntu))
|_http-title: Portal de Servicios Internos - Login
|_http-server-header: Apache/2.4.52 (Ubuntu)
443/tcp open  ssl/http Apache httpd 2.4.52 ((Ubuntu))
|_http-title: 403 Forbidden
| ssl-cert: Subject: commonName=srv-ubuntu.lan/organizationName=QuimiSell
| Not valid before: 2026-01-01T00:00:00
|_Not valid after:  2027-01-01T00:00:00
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Nmap done: 1 IP address (1 host up) scanned in 6.42 seconds`,

  'dig example.com ANY': `; <<>> DiG 9.18.24-1-Debian <<>> example.com ANY
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 48912
;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1

;; QUESTION SECTION:
;example.com.			IN	ANY

;; ANSWER SECTION:
example.com.		86400	IN	A	93.184.216.34
example.com.		86400	IN	NS	a.iana-servers.net.
example.com.		86400	IN	NS	b.iana-servers.net.
example.com.		86400	IN	TXT	"v=spf1 -all"

;; Query time: 28 msec
;; SERVER: 1.1.1.1#53(1.1.1.1) (UDP)
;; WHEN: Mon Aug 17 01:53:10 CST 2026
;; MSG SIZE  rcvd: 147`,

  'whois example.com': `   Domain Name: EXAMPLE.COM
   Registry Domain ID: 2336799_DOMAIN_COM-VRSN
   Registrar WHOIS Server: whois.iana.org
   Updated Date: 2025-08-14T07:01:38Z
   Creation Date: 1995-08-14T04:00:00Z
   Registry Expiry Date: 2026-08-13T04:00:00Z
   Registrar: RESERVED-Internet Assigned Numbers Authority
   Name Server: A.IANA-SERVERS.NET
   Name Server: B.IANA-SERVERS.NET
   Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited`,

  'gobuster dir -u http://192.168.1.50 -w /usr/share/wordlists/dirb/common.txt': `===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.1.50
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/admin                (Status: 301) [Size: 317] [--> http://192.168.1.50/admin/]
/assets               (Status: 301) [Size: 318] [--> http://192.168.1.50/assets/]
/css                  (Status: 301) [Size: 315] [--> http://192.168.1.50/css/]
/favicon.ico          (Status: 200) [Size: 1150]
/index.php            (Status: 200) [Size: 2420]
/robots.txt           (Status: 200) [Size: 84]
/server-status        (Status: 403) [Size: 279]
===============================================================
Finished in 2.14s (4614 requests)
===============================================================`,

  'nikto -h http://192.168.1.50': `- Nikto v2.5.0
+ Target IP:          192.168.1.50
+ Target Hostname:    srv-ubuntu.lan
+ Target Port:        80
+ Start Time:         2026-08-17 01:54:12
---------------------------------------------------------------------------
+ Server: Apache/2.4.52 (Ubuntu)
+ [!] The anti-clickjacking X-Frame-Options header is not present.
+ [!] The X-Content-Type-Options header is not set. This could allow the user agent to render the content in a different way to the MIME type.
+ [+] Retrieved /robots.txt: contains 2 entries which should be manually inspected.
+ [+] Entry '/admin/' in /robots.txt returned a non-forbidden code (301).
+ [+] Apache/2.4.52 appears to be outdated (current is at least 2.4.58).
+ [!] Allowed HTTP Methods: GET, HEAD, POST, OPTIONS
+ 7842 requests: 0 error(s) and 5 item(s) reported on remote host
---------------------------------------------------------------------------
+ End Time:           2026-08-17 01:54:40 (28 seconds)`,

  'find / -perm -4000 2>/dev/null': `/usr/bin/passwd
/usr/bin/sudo
/usr/bin/chsh
/usr/bin/newgrp
/usr/bin/gpasswd
/usr/lib/openssh/ssh-keysign
/usr/lib/dbus-1.0/dbus-daemon-launch-helper`,

  'ufw status': `Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
443/tcp                    ALLOW       Anywhere                  
22/tcp (v6)                ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)             
443/tcp (v6)               ALLOW       Anywhere (v6)`
};

const KaliTerminalSimulator: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'uname -a && whoami',
      output: `Linux kali 6.6.15-amd64 #1 SMP PREEMPT_DYNAMIC Kali (2024-02-17) x86_64 GNU/Linux\nroot\n\nBienvenido a la consola interactiva de Kali Linux (Simulador QuimiSell).\nEscribe 'help' o haz clic en los comandos rápidos para ejecutar herramientas de diagnóstico.`
    }
  ]);

  const handleExecute = (cmdToRun?: string) => {
    const rawCmd = (cmdToRun !== undefined ? cmdToRun : inputVal).trim();
    if (!rawCmd) return;

    if (rawCmd.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = '';
    const cleanCmd = rawCmd.replace(/\s+/g, ' ');

    if (COMMAND_RESPONSES[cleanCmd]) {
      response = COMMAND_RESPONSES[cleanCmd];
    } else {
      // Búsqueda aproximada de comandos
      const matchedKey = Object.keys(COMMAND_RESPONSES).find(k => cleanCmd.startsWith(k) || k.startsWith(cleanCmd));
      if (matchedKey) {
        response = COMMAND_RESPONSES[matchedKey];
      } else if (cleanCmd.startsWith('nmap')) {
        response = `Starting Nmap 7.94SVN ( https://nmap.org )\nEjecutando sondeo de paquetes con banderas personalizadas: '${cleanCmd}'\nHost 192.168.1.50 is up (0.00042s latency).\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https\nNmap done: 1 IP address (1 host up) scanned in 0.45 seconds`;
      } else if (cleanCmd.startsWith('cat') || cleanCmd.startsWith('grep')) {
        response = `[+] Salida procesada para: '${cleanCmd}'\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin`;
      } else {
        response = `bash: ${cleanCmd.split(' ')[0]}: comando no encontrado en la simulación local. Escribe 'help' para ver los comandos soportados.`;
      }
    }

    setHistory(prev => [...prev, { command: rawCmd, output: response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecute();
    }
  };

  const quickCommands = [
    { label: 'Descubrimiento Hosts (Ping Sweep)', cmd: 'nmap -sn 192.168.1.0/24' },
    { label: 'SYN Stealth Scan (-sS)', cmd: 'nmap -sS -p 80,443 192.168.1.50' },
    { label: 'Detección de Versiones (-sV -sC)', cmd: 'nmap -sS -sV -sC -p 22,80,443 192.168.1.50' },
    { label: 'Fuzzing de Rutas (Gobuster)', cmd: 'gobuster dir -u http://192.168.1.50 -w /usr/share/wordlists/dirb/common.txt' },
    { label: 'Auditoría Web (Nikto)', cmd: 'nikto -h http://192.168.1.50' },
    { label: 'Auditoría SUID (Permisos Elevados)', cmd: 'find / -perm -4000 2>/dev/null' },
    { label: 'Sockets y Puertos (ss -tulpn)', cmd: 'ss -tulpn' },
    { label: 'Consulta DNS (dig ANY)', cmd: 'dig example.com ANY' }
  ];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl space-y-0 text-slate-100 font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span className="text-[11px] font-bold text-slate-300 ml-2 flex items-center gap-2">
            <span>🐉</span> root@kali: ~ (Simulador de Laboratorio Kali Linux)
          </span>
        </div>
        <span className="text-[9px] bg-indigo-950 text-indigo-300 font-extrabold px-2.5 py-1 rounded-md border border-indigo-800">
          CLI Sandbox v2026.1
        </span>
      </div>

      {/* Quick Launch Buttons */}
      <div className="bg-slate-900/40 p-4 border-b border-slate-800/80">
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
          ⚡ Comandos Rápidos de Auditoría (Haz clic para ejecutar):
        </span>
        <div className="flex flex-wrap gap-2">
          {quickCommands.map((qc, idx) => (
            <button
              key={idx}
              onClick={() => handleExecute(qc.cmd)}
              className="bg-slate-800/80 hover:bg-indigo-600 hover:text-white text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-indigo-500 text-[11px] font-semibold transition active:scale-95 cursor-pointer"
            >
              {qc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-6 max-h-[380px] overflow-y-auto space-y-4 font-mono leading-relaxed select-text bg-slate-950/95 scrollbar-thin scrollbar-thumb-slate-800">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span className="text-indigo-400">root@kali:~#</span>
              <span className="text-slate-100">{item.command}</span>
            </div>
            <pre className="text-slate-300 text-[11px] bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60 overflow-x-auto whitespace-pre-wrap">
              {item.output}
            </pre>
          </div>
        ))}
      </div>

      {/* Input prompt */}
      <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center gap-3">
        <span className="text-emerald-400 font-bold shrink-0 text-xs">
          root@kali:~#
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un comando de Kali (ej: nmap -sS -p 80 192.168.1.50, help, clear)..."
          className="flex-1 bg-transparent border-none text-slate-100 text-xs font-mono focus:outline-none placeholder-slate-500"
        />
        <button
          onClick={() => handleExecute()}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-1.5 rounded-xl text-xs transition active:scale-95 cursor-pointer shadow-md"
        >
          Ejecutar ↵
        </button>
      </div>
    </div>
  );
};

export default KaliTerminalSimulator;
