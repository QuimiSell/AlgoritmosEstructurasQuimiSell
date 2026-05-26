import React from 'react';

interface StudyPlanModalProps {
  onClose: () => void;
}

const moduleReasons = [
  {
    id: 1,
    title: "Fundamentos y Big-O",
    why: "Permite medir matemáticamente el rendimiento asintótico y el crecimiento de las operaciones antes de codificar, evitando fallas de escala críticas en producción."
  },
  {
    id: 2,
    title: "Estructuras Lineales",
    why: "Es la base para almacenar datos de forma secuencial en memoria física. Dominar pilas, colas y arreglos dinámicos permite gestionar flujos de datos estructurados de forma eficiente."
  },
  {
    id: 3,
    title: "Estructuras Avanzadas (Hash)",
    why: "Explica cómo lograr búsquedas y almacenamiento instantáneos en tiempo constante O(1) promedio, la tecnología que sostiene a las bases de datos modernas y sistemas de caché."
  },
  {
    id: 4,
    title: "Árboles y Jerarquías",
    why: "Permite estructurar datos en jerarquías complejas y ordenadas. Los árboles binarios de búsqueda y auto-balanceados garantizan búsquedas ultra-rápidas en límites logarítmicos O(log n)."
  },
  {
    id: 5,
    title: "Teoría de Grafos",
    why: "Indispensable para modelar cualquier tipo de red en el mundo real, tales como mapas de navegación (GPS), redes de telecomunicaciones, redes sociales y dependencias lógicas."
  },
  {
    id: 6,
    title: "Algoritmos de Ordenamiento",
    why: "Estudia las estrategias matemáticas para organizar colecciones de datos, introduciendo conceptos clave como la estabilidad y el uso de memoria in-place."
  },
  {
    id: 7,
    title: "Algoritmos de Búsqueda",
    why: "Optimiza la recuperación de datos mediante técnicas de división de espacio (búsqueda binaria) y búsqueda heurística espacial (A*), reduciendo drásticamente las comparaciones."
  },
  {
    id: 8,
    title: "Paradigmas Avanzados",
    why: "Enseña técnicas de diseño algorítmico avanzadas (Programación Dinámica y Voraces) para resolver problemas difíciles reutilizando cálculos previos y optimizando localmente."
  },
  {
    id: 9,
    title: "Estructuras Especiales",
    why: "Herramientas de optimización masiva: Filtros de Bloom para consultas probabilísticas en memoria limitada y cachés LRU para acelerar el procesamiento de datos repetitivos."
  },
  {
    id: 10,
    title: "Aplicaciones en el Mundo Real",
    why: "Conecta la teoría con la infraestructura: cómo los motores SQL usan B+ Trees, cómo los sistemas de archivos Linux usan Inodos y cómo la Inteligencia Artificial usa el algoritmo Minimax."
  }
];

const StudyPlanModal: React.FC<StudyPlanModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Cabecera */}
        <header className="p-6 border-b border-slate-150 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-100">
              📚
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-none">Plan de Estudios Académico</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                Por qué estudiamos algoritmos y qué ventajas te dará en el futuro
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition active:scale-90 font-bold"
          >
            ✕
          </button>
        </header>

        {/* Contenido Deslizable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-hide">
          
          {/* Sección 1: ¿Por qué estudiar esta materia? */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-8 rounded-[2rem] border border-indigo-100/50 space-y-4">
            <h3 className="text-lg font-extrabold text-indigo-950 flex items-center gap-2">
              🧠 ¿Por qué se estudia esta clase?
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              Escribir código que "funcione" es fácil; escribir código que **sea eficiente y escale** es el verdadero reto de la ingeniería de software. 
              Esta clase te enseña a razonar analíticamente sobre el uso de recursos críticos (tiempo de procesamiento de CPU y espacio de memoria RAM). 
              Aprenderás a elegir la estructura de datos adecuada para cada situación, lo que transforma un programa inestable y lento en una solución robusta y de alto rendimiento.
            </p>
          </section>

          {/* Sección 2: Ventajas a Futuro */}
          <section className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              🚀 Ventajas a Futuro en tu Carrera Profesional
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">💼</div>
                <h4 className="font-bold text-slate-900 text-sm">Entrevistas en Empresas de Nivel Alto</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  Las grandes empresas tecnológicas (Google, Microsoft, Meta) basan sus filtros técnicos casi exclusivamente en problemas de estructuras de datos y algoritmos. Pasar esta clase te abre las puertas a salarios competitivos globalmente.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">💰</div>
                <h4 className="font-bold text-slate-900 text-sm">Ahorro y Escalabilidad en la Nube</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  Un algoritmo ineficiente ejecutado sobre millones de datos consume gigabytes de memoria y horas de procesamiento en la nube, inflando las facturas. Un buen algoritmo optimiza costos operativos de infraestructura a gran escala.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div className="text-2xl">🎖️</div>
                <h4 className="font-bold text-slate-900 text-sm">Diferenciación como Ingeniero de Elite</h4>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  Los programadores promedio se limitan a pegar librerías externas. Los ingenieros de software dominan el rendimiento interno de sus sistemas, diseñan soluciones propietarias y asumen roles de liderazgo técnico.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3: Resumen de los 10 Módulos */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-extrabold text-slate-900">Mapa Curricular: Resumen de los 10 Temas</h3>
              <div className="h-px flex-1 bg-slate-150"></div>
            </div>
            
            <div className="space-y-3">
              {moduleReasons.map((m) => (
                <div key={m.id} className="flex gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-150 hover:bg-white hover:shadow-sm transition">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                    {m.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm leading-snug">{m.title}</h4>
                    <p className="text-slate-500 text-xs font-semibold mt-1 leading-relaxed">
                      <span className="text-indigo-600 font-bold">¿Por qué se estudia?:</span> {m.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-slate-800 transition active:scale-95 text-center"
          >
            Entendido, Cerrar
          </button>
        </footer>

      </div>
    </div>
  );
};

export default StudyPlanModal;
