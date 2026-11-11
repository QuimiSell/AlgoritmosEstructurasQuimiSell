import React, { useState } from 'react';

export type AcademicLevel = 'all' | 'level0' | 'intermediate' | 'university';

interface LevelProgressiveViewProps {
  courseId?: string;
  moduleId: number;
  moduleTitle: string;
  theoryContent: string;
  keyConcepts: string[];
}

interface PedagogyData {
  level0Metaphor: string;
  level0Rule: string;
  intermediateArchitecture: string;
  intermediatePitfalls: string;
  universityTheory: string;
  universityFormula: string;
  industryCase: string;
}

function getCoursePedagogy(courseId: string, moduleId: number): PedagogyData {
  switch (courseId) {
    case 'complejidad_algoritmica':
      return {
        level0Metaphor:
          'Imagina cocinar para 1 persona vs cocinar para un estadio de 80,000 personas. Un algoritmo O(1) es hervir agua en una tetera mágica instantánea; un algoritmo O(n²) significa que cada comensal debe saludar personalmente de mano a todos los demás del estadio.',
        level0Rule:
          'Big-O nunca mide segundos de reloj (el hardware cambia), sino el ratio de crecimiento de las operaciones cuando la entrada tiende a infinito.',
        intermediateArchitecture:
          'Cómputo en GPUs y aceleradores: FLOPs (Floating Point Operations Per Second). En modelos Transformer, el mecanismo de Auto-Atención escala en O(n² · d), saturando la memoria HBM si la ventana de contexto supera 32k tokens sin FlashAttention.',
        intermediatePitfalls:
          'La trampa de las constantes ocultas: un algoritmo O(n) con una constante c = 10,000 puede ser más lento en la práctica que un O(n log n) con c = 2 para valores pequeños de n.',
        universityTheory:
          'Clases de Complejidad P vs NP, NP-Completo y NP-Hard. Reducción polinomial de Karp (L₁ ≤p L₂) y el problema del Millenio P vs NP.',
        universityFormula: 'f(n) = O(g(n)) ⟺ ∃ c > 0, n₀ > 0 : |f(n)| ≤ c · |g(n)|  ∀ n ≥ n₀',
        industryCase:
          'Google DeepMind y OpenAI optimizan modelos fundacionales reemplazando atención estándar O(n²) con algoritmos de atención dispersa o lineal O(n) como FlashAttention-2.',
      };

    case 'matematica':
      return {
        level0Metaphor:
          'La matemática para programar no es memorizar fórmulas aburridas: es el mapa cartográfico que te permite navegar laberintos lógicos sin perderte, calcular probabilidades de éxito y entender cómo las máquinas aprenden mediante prueba y ajuste continuo.',
        level0Rule:
          'Un algoritmo es simplemente una función matemática f: X ➔ Y que mapea entradas discretas en salidas predecibles.',
        intermediateArchitecture:
          'Álgebra lineal en memoria contigua: las matrices se almacenan en orden fila-mayor (Row-Major en C/Python) o columna-mayor (Column-Major en Fortran/MATLAB). Alinear matrices en bloques potencia las instrucciones SIMD (AVX-512) del procesador.',
        intermediatePitfalls:
          'Cancelación catastrófica en punto flotante IEEE 754: restar dos números flotantes casi idénticos pierde todos los dígitos significativos de precisión.',
        universityTheory:
          'Espacios de Hilbert, descomposición en valores singulares (SVD), teorema espectral y descenso de gradiente estocástico sobre variedades riemannianas.',
        universityFormula: '∇f(w) = [∂f/∂w₁, ∂f/∂w₂, ..., ∂f/∂wₙ]ᵀ ;  wₜ₊₁ = wₜ - η · ∇f(wₜ)',
        industryCase:
          'Los motores de recomendación de Netflix y Spotify utilizan Descomposición en Valores Singulares (SVD) para factorizar matrices de usuarios y películas de 500M × 100k dimensiones.',
      };

    case 'clean_code_solid':
      return {
        level0Metaphor:
          'Escribir código limpio es como mantener un quirófano estéril o la cocina de un restaurante con estrellas Michelin: cada herramienta tiene un solo propósito, está etiquetada con claridad y no hay grasa acumulada en los rincones.',
        level0Rule:
          'Cualquier novato puede escribir código que una computadora entienda; los ingenieros de élite escriben código que los humanos pueden entender sin esfuerzo.',
        intermediateArchitecture:
          'Inversión de Dependencias (DIP) y Arquitectura Hexagonal (Puertos y Adaptadores): la lógica de negocio central nunca importa controladores HTTP ni clientes de base de datos; define interfaces abstractas que los adaptadores externos implementan.',
        intermediatePitfalls:
          'Herencia excesiva y frágil (Violación del principio de sustitución de Liskov - LSP). Prefiere siempre composición de objetos sobre herencia jerárquica profunda.',
        universityTheory:
          'Métricas de acoplamiento y cohesión de Chidamber & Kemerer (C&K): CBO (Coupling Between Objects), WMC (Weighted Methods per Class) y LCOM (Lack of Cohesion in Methods).',
        universityFormula: 'Instabilidad (I) = Ce / (Ca + Ce) ;  Distancia a la Secuencia Principal D = |A + I - 1|',
        industryCase:
          'Amazon y Netflix estructuran sus microservicios basándose en Principio de Responsabilidad Única (SRP): cada microservicio posee su propia base de datos aislada, impidiendo acoplamientos espagueti.',
      };

    case 'git_devops_vercel':
      return {
        level0Metaphor:
          'Git es una máquina del tiempo para tu código. No guarda copias enteras de carpetas con nombres como "proyecto_final_v2_este_si.zip", sino una cadena criptográfica de fotos exactas (instantáneas) que te permite retroceder a cualquier segundo del pasado.',
        level0Rule:
          'Commit pequeño y atómico, rama corta por feature, CI verde antes de mergear a producción.',
        intermediateArchitecture:
          'Modelo de Objetos de Git en el disco: Blobs (contenido), Trees (carpetas), Commits (metadata y puntero al árbol) y Tags. Todos identificados mediante hashes SHA-1 / SHA-256 en el directorio .git/objects.',
        intermediatePitfalls:
          'Hacer git rebase en ramas públicas compartidas: reescribe el historial de commits y desincroniza los repositorios de todo tu equipo de trabajo.',
        universityTheory:
          'Git como Grafo Acíclico Dirigido (DAG): el algoritmo de Three-Way Merge localiza el ancestro común más cercano (Lowest Common Ancestor - LCA) para resolver conflictos automáticamente.',
        universityFormula: 'H(commit) = SHA256(tree_hash + parent_hashes + author + committer + message)',
        industryCase:
          'Vercel y GitHub Actions implementan Immutable Deployments: cada pull request genera una URL de vista previa única en Edge Workers antes de tocar el dominio principal de producción.',
      };

    case 'redes_desarrolladores':
      return {
        level0Metaphor:
          'Internet es un sistema postal global ultrarrápido: tu mensaje no viaja como un tubo continuo, sino dividido en miles de cartas postales numeradas (paquetes). Si una carta se pierde en el camino, el receptor pide que se la reenvíen.',
        level0Rule:
          'Antes de culpar al framework frontend, revisa el waterfall de red: DNS, TLS Handshake, TTFB y compresión Brotli/Gzip.',
        intermediateArchitecture:
          'Pila TCP/IP y encapsulamiento: Aplicación (HTTP/3) ➔ Transporte (TCP/UDP) ➔ Red (IP) ➔ Enlace (Ethernet/Wi-Fi). Ventana deslizante TCP (Sliding Window) para control de flujo y congestión (algoritmos CUBIC y BBR).',
        intermediatePitfalls:
          'Head-of-Line Blocking (HoL) en HTTP/1.1 y HTTP/2 sobre TCP: un solo paquete perdido frena la entrega de todas las peticiones concurrentes (resuelto en HTTP/3 mediante UDP y protocolo QUIC).',
        universityTheory:
          'Teorema de Shannon-Hartley para la capacidad máxima de un canal con ruido: C = B · log₂(1 + SNR). Latencia mínima acotada por la velocidad de la luz en fibra óptica (~200,000 km/s).',
        universityFormula: 'RTT_min = 2 · (Distancia / c_fibra) ;  BDP (Bandwidth-Delay Product) = AnchoBanda · RTT',
        industryCase:
          'Cloudflare y Google implementan HTTP/3 sobre QUIC: reducen la latencia de conexión de 3 RTTs (DNS + TCP + TLS 1.3) a 0-RTT en reconexiones de clientes móviles.',
      };

    case 'sql_datos_ia':
      return {
        level0Metaphor:
          'Una base de datos SQL no es una hoja de Excel gigante: es una bóveda matemática relacional basada en la teoría de conjuntos que garantiza que nunca se pierda un centavo aunque se corte la luz en el servidor en medio de una transacción.',
        level0Rule:
          'Sin índices correctos, cualquier consulta SELECT es un paseo ciego O(n) por todos los discos duros de la empresa.',
        intermediateArchitecture:
          'Motores de almacenamiento: Páginas de disco de 8 KB, buffer pool en memoria RAM y Write-Ahead Logging (WAL) para cumplir las garantías ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).',
        intermediatePitfalls:
          'El antipatrón N+1 queries en ORMs (Prisma, Hibernate, Entity Framework): ejecutar una consulta inicial y luego N consultas individuales en un bucle, destrozando la latencia del servidor.',
        universityTheory:
          'Álgebra relacional de Codd (selección σ, proyección π, join ⨝) y formas normales (1NF a BCNF). Distancia de Coseno y búsqueda de vecinos más cercanos (HNSW) para embeddings vectoriales en RAG.',
        universityFormula: 'SimilitudCoseno(u, v) = (u · v) / (||u|| · ||v||) = ∑(uᵢvᵢ) / (√∑uᵢ² · √∑vᵢ²)',
        industryCase:
          'PostgreSQL con pgvector y motores como Pinecone indexan vectores de 1536 dimensiones de OpenAI utilizando grafos HNSW (Hierarchical Navigable Small World) para responder consultas en <10 ms.',
      };

    case 'automatas_compiladores':
      return {
        level0Metaphor:
          'Un compilador no es magia negra: es un traductor riguroso que lee texto en español/inglés técnico, verifica que no haya faltas de ortografía ni gramática, dibuja el árbol de la oración y lo convierte en instrucciones directas que el chip de silicio entiende.',
        level0Rule:
          'Todo lenguaje de programación comienza con un autómata finito para extraer palabras (Tokens) y una gramática libre de contexto para formar oraciones (AST).',
        intermediateArchitecture:
          'Tubería del compilador: Código Fuente ➔ Análisis Léxico (Lexer / Regex) ➔ Análisis Sintáctico (Parser LL/LR) ➔ AST ➔ Análisis Semántico (Tabla de Símbolos y Tipos) ➔ Código Intermedio (IR en SSA) ➔ Optimizador LLVM ➔ Código Máquina.',
        intermediatePitfalls:
          'Ambigüedad en gramáticas formales: permitir que una expresión como "3 + 4 * 5" genere dos árboles sintácticos diferentes con resultados matemáticos incompatibles.',
        universityTheory:
          'Jerarquía de Chomsky (Tipo 3 Regulares, Tipo 2 Libres de Contexto, Tipo 1 Sensibles al Contexto, Tipo 0 Recursivamente Enumerables). Algoritmo de Thompson y Construcción de Subconjuntos de Powerset (NFA ➔ DFA).',
        universityFormula: 'L(M) = { w ∈ Σ* | δ*(q₀, w) ∈ F } ;  Pumping Lemma: ∀ s ∈ L, |s| ≥ p ⟹ s = xyz',
        industryCase:
          'El motor V8 de Google Chrome compila JavaScript en tiempo de ejecución (JIT) usando el parser TurboFan, traduciendo AST a bytecode Ignition y luego a código de máquina nativo optimizado con especulación de tipos.',
      };

    case 'ingeniero_ia':
      return {
        level0Metaphor:
          'Ser un Ingeniero de IA no es solo chatear con un LLM: es diseñar el sistema de tuberías, memoria a corto/largo plazo, herramientas externas y cortafuegos para que el modelo resuelva problemas complejos sin inventar mentiras.',
        level0Rule:
          'La sintaxis la genera la IA en segundos; el diseño de arquitectura, la validación formal y la resiliencia del sistema son tu responsabilidad como ingeniero.',
        intermediateArchitecture:
          'Arquitectura RAG (Retrieval-Augmented Generation): Chunking de documentos, generación de embeddings densos, base de datos vectorial, recuperación por re-ranking y ensamblado de contexto en la ventana del prompt.',
        intermediatePitfalls:
          'Alucinaciones en bucles de agentes desatendidos: dejar que un agente invoque APIs externas destructivas (como borrar bases de datos o enviar emails) sin validación humana (Human-in-the-Loop) ni guardrails.',
        universityTheory:
          'Mecanismo de Auto-Atención Escalar (Scaled Dot-Product Attention) y Positional Encoding. Bucle de razonamiento formal ReAct (Reasoning + Acting) y planificación tipo Tree of Thoughts (ToT).',
        universityFormula: 'Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V',
        industryCase:
          'Sistemas como Cursor, GitHub Copilot y Devin integran agentes de codificación con índices vectoriales locales, árboles de sintaxis (AST) y entornos de ejecución en sandboxes Docker aislados.',
      };

    case 'evaluacion_ia':
      return {
        level0Metaphor:
          'Evaluar una IA es como realizarle una rigurosa auditoría de control de calidad a un médico o a un piloto de avión: no basta con que hable con seguridad, debes someterlo a pruebas sorpresa, trampas y casos extremos para certificar que nunca cometa un error fatal.',
        level0Rule:
          'Un modelo de lenguaje no pasa una prueba unitaria tradicional con assert: requiere métricas estadísticas, bancos de evaluación y pruebas adversariales continuas.',
        intermediateArchitecture:
          'Infraestructura de evaluación MLOps: Conjuntos de prueba etiquetados (Golden Datasets), evaluadores sintéticos (LLM-as-a-Judge con rúbrica estricta), cortafuegos de entrada/salida (NeMo Guardrails, Llama Guard) y monitoreo de deriva semántica.',
        intermediatePitfalls:
          'Contaminación del benchmark (Data Contamination): cuando las preguntas de la evaluación ya estaban presentes en los datos de entrenamiento del modelo, inflando falsamente el puntaje.',
        universityTheory:
          'Métricas NLP avanzadas: ROUGE-L, BLEU, BERTScore, Perplejidad, Tasa de Falsos Positivos y Falsos Negativos en ciberseguridad, y análisis de curvas ROC-AUC y Precision-Recall.',
        universityFormula: 'F₁ = 2 · (Precision · Recall) / (Precision + Recall) ;  Perplejidad = exp( -1/N · ∑ log P(wᵢ) )',
        industryCase:
          'Anthropic y OpenAI aplican Red Teaming adversarial y Constitutional AI (RLAIF) para evaluar y alinear modelos contra ataques de inyección de prompt (Jailbreaks) y fuga de datos confidenciales.',
      };

    case 'edge_ia_movil':
      return {
        level0Metaphor:
          'Edge AI es tener un cerebro completo dentro de tu reloj inteligente o teléfono sin necesidad de mandar tus datos a un servidor lejano en Silicon Valley. Es privacidad absoluta, velocidad instantánea y funcionamiento en medio del desierto sin señal de internet.',
        level0Rule:
          'En el dispositivo móvil, la batería y la temperatura del procesador son tan críticas como la precisión del modelo.',
        intermediateArchitecture:
          'Formatos de serialización optimizados para dispositivos: TFLite (.tflite), ONNX Runtime, Apple CoreML y Qualcomm SNPE. Delegados de hardware para NPU (Neural Processing Unit), GPU y DSP móvil.',
        intermediatePitfalls:
          'Cuantización ingenua sin calibración: reducir pesos a INT8 sin un conjunto representativo de datos puede provocar colapso numérico y respuestas incoherentes en el modelo.',
        universityTheory:
          'Técnicas de compresión: Post-Training Quantization (PTQ), Quantization-Aware Training (QAT), Podado de pesos (Weight Pruning / Sparsity) y Destilación del Conocimiento (Teacher-Student Network).',
        universityFormula: 'q = round( (r - ZeroPoint) / Scale ) ;  r ≈ Scale · (q - ZeroPoint)',
        industryCase:
          'Google Pixel y Apple iPhone ejecutan modelos de reconocimiento de voz, detección de caídas y traducción en tiempo real directamente en la NPU del chip con menos de 10 milisegundos de latencia.',
      };

    case 'android_kotlin':
      return {
        level0Metaphor:
          'Programar una app moderna en Android con Jetpack Compose es como armar figuras con bloques de LEGO inteligentes: en vez de diseñar planos estáticos en papel viejo (XML), describes cómo debe lucir la pantalla y la app se actualiza sola cada vez que los datos cambian.',
        level0Rule:
          'Estado inmutable hacia abajo, eventos hacia arriba (Unidirectional Data Flow - UDF). Nunca bloquees el hilo principal (Main Thread).',
        intermediateArchitecture:
          'Arquitectura Limpia recomendada por Google: Capa de UI (Compose + ViewModel), Capa de Dominio (UseCases) y Capa de Datos (Room Database + Retrofit API + Repository Pattern con Kotlin Coroutines y StateFlow).',
        intermediatePitfalls:
          'Fugas de memoria (Memory Leaks) en Android: retener referencias a Context o View dentro de objetos de larga vida (Singletons o Corrutinas que no se cancelan con viewModelScope).',
        universityTheory:
          'Máquina virtual Dalvik y runtime ART (Android Runtime): Compilación híbrida AOT (Ahead-of-Time) y JIT con perfiles basados en el uso real de la app (Profile-Guided Optimization).',
        universityFormula: 'TiempoFrame ≤ 16.6 ms (para 60 FPS) / 8.3 ms (para 120 FPS ProMotion)',
        industryCase:
          'Apps bancarias y de comercio electrónico a nivel global aplican FLAG_SECURE en pantallas sensibles de Android para impedir capturas de pantalla maliciosas y proteger transacciones.',
      };

    case 'kali_linux':
      return {
        level0Metaphor:
          'El hacking ético con Kali Linux no es romper cosas a lo loco: es el trabajo minucioso de un cerrajero profesional de alta seguridad que audita una fortaleza para encontrar cada rendija antes de que lo hagan los delincuentes.',
        level0Rule:
          'Un escáner automático sin comprensión del paquete de red subyacente es solo ruido inútil. La precisión técnica supera a la fuerza bruta.',
        intermediateArchitecture:
          'Estándar de Pruebas de Penetración (PTES): 1. Reconocimiento pasivo/activo ➔ 2. Modelado de amenazas ➔ 3. Análisis de vulnerabilidades ➔ 4. Explotación controlada ➔ 5. Post-explotación y pivoteo ➔ 6. Informe técnico de mitigación.',
        intermediatePitfalls:
          'Ejecutar escaneos de red sin permiso legal explícito por escrito: auditar sistemas sin autorización constituye un delito informático grave independientemente de la intención.',
        universityTheory:
          'Modelo de Seguridad Bell-LaPadula (Confidencialidad) y Biba (Integridad). Mecanismos de mitigación del kernel de Linux: ASLR (Address Space Layout Randomization), DEP/NX y Canarios de Pila (Stack Canaries).',
        universityFormula: 'Riesgo = Impacto × Probabilidad × Exposición Vulnerable',
        industryCase:
          'Equipos de Red Team y Blue Team en instituciones financieras auditan periódicamente su infraestructura contra el marco MITRE ATT&CK para neutralizar campañas avanzadas (APTs).',
      };

    default: // algoritmos
      return {
        level0Metaphor:
          'Un algoritmo es una receta precisa: si sigues los pasos en orden con los ingredientes adecuados, siempre obtienes el mismo resultado perfecto. La estructura de datos es el recipiente de cocina donde guardas los ingredientes para encontrarlos al instante.',
        level0Rule:
          'Medir operaciones en función del tamaño de entrada (n) te permite predecir si tu código sobrevivirá cuando tu app pase de 10 a 10 millones de usuarios.',
        intermediateArchitecture:
          'Representación en memoria RAM y CPU: Arreglos contiguos optimizan la memoria caché L1/L2; listas enlazadas flexibilizan inserciones pero fragmentan el Heap. Elige según la proporción de lecturas vs escrituras.',
        intermediatePitfalls:
          'Olvidar los casos borde: colecciones vacías (null/undefined), un solo elemento, índices fuera de rango y desbordamiento aritmético de enteros (Integer Overflow).',
        universityTheory:
          'Demostración formal asintótica con límites y constantes c, n₀. Teorema Maestro para recurrencias divide y vencerás T(n) = aT(n/b) + f(n).',
        universityFormula: 'f(n) = O(g(n)) ⟺ ∃ c > 0, n₀ > 0 : 0 ≤ f(n) ≤ c · g(n)  ∀ n ≥ n₀',
        industryCase:
          'Motores de bases de datos como PostgreSQL y MySQL InnoDB estructuran sus índices en B+ Trees para garantizar lecturas en tiempo logarítmico minimizando los costosos accesos mecánicos a disco.',
      };
  }
}

export const LevelProgressiveView: React.FC<LevelProgressiveViewProps> = ({
  courseId = 'algoritmos',
  moduleId,
  moduleTitle,
  theoryContent,
  keyConcepts,
}) => {
  const [activeLevel, setActiveLevel] = useState<AcademicLevel>('all');
  const [showMemoryInspector, setShowMemoryInspector] = useState<boolean>(false);

  const pedagogy = getCoursePedagogy(courseId, moduleId);

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
            { id: 'intermediate', label: '🟡 Intermedio (Arquitectura)', color: 'from-amber-600 to-orange-600' },
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
              <p>{pedagogy.level0Metaphor}</p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <strong className="text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-bold">
                <span>🎯</span> Regla de Oro para Recordarlo
              </strong>
              <p>{pedagogy.level0Rule}</p>
            </div>
          </div>
        </section>
      )}

      {/* LEVEL INTERMEDIATE: ARCHITECTURE & MEMORY */}
      {(activeLevel === 'all' || activeLevel === 'intermediate') && (
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 rounded-3xl p-5 sm:p-7 shadow-sm transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-amber-600/30">
                1
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  Nivel Intermedio · Ingeniería de Software & Arquitectura
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  ¿Cómo funciona físicamente en el sistema y en producción?
                </h4>
              </div>
            </div>
            <button
              onClick={() => setShowMemoryInspector(!showMemoryInspector)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white transition cursor-pointer shadow-sm"
            >
              {showMemoryInspector ? 'Ocultar Inspector RAM' : '🔍 Ver Inspector Técnico'}
            </button>
          </div>

          {/* Interactive Memory Diagram */}
          {showMemoryInspector && (
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 animate-in fade-in duration-300">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                Arquitectura de Recursos & Memoria Física
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { addr: '0x7FFF0010', type: 'Stack / Registro', val: 'Puntero / Frame Activo', desc: 'Variables locales rápidas (~1 ns)' },
                  { addr: '0x0040A120', type: 'Heap / Buffer', val: 'Estructuras Dinámicas', desc: 'Asignación malloc / new' },
                  { addr: '0x0040A130', type: 'I/O / Red', val: 'Socket / Disco / DB', desc: 'Latencia de red / Bloque I/O' },
                  { addr: '0x0020B000', type: 'Cache L1/L2', val: 'Línea de Caché (64 bytes)', desc: 'Localidad espacial activa' },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 space-y-1.5">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block">
                ⚙️ Implementación y Arquitectura
              </strong>
              <p className="text-xs leading-relaxed">{pedagogy.intermediateArchitecture}</p>
            </div>
            <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/40 space-y-1.5">
              <strong className="text-amber-900 dark:text-amber-300 font-bold block">
                🛡️ Errores Frecuentes & Trampas en Producción
              </strong>
              <p className="text-xs leading-relaxed">{pedagogy.intermediatePitfalls}</p>
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
                  Nivel Universitario · Rigor Matemático, Estándares & Teoría Formal
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
                  Demostración Formal y Especificaciones de Grado Académico
                </h4>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
              Currículo Universitario
            </span>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-200 space-y-3 shadow-inner">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <span className="text-purple-400 font-bold">📐 Teorema / Definición Formal</span>
              <span className="text-[10px] text-slate-500">Estándar Académico Internacional</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <p className="text-emerald-400 font-bold">{pedagogy.universityFormula}</p>
              <p className="text-slate-400 text-[11px]">{pedagogy.universityTheory}</p>
            </div>
          </div>

          {/* Industry Application Card */}
          <div className="bg-white/80 dark:bg-slate-900/70 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 flex items-start gap-3">
            <span className="text-2xl">🏭</span>
            <div className="text-xs space-y-1">
              <strong className="text-purple-900 dark:text-purple-300 font-bold block text-sm">
                Caso Real en Big Tech (Google, Netflix, PostgreSQL, OpenAI, Linux)
              </strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {pedagogy.industryCase}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LevelProgressiveView;
