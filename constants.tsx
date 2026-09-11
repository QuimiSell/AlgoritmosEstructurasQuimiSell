import { Module } from './domain/models';

export const COURSE_MODULES: Module[] = [{
    id: 1,
    title: "MÓDULO 1: FUNDAMENTOS Y BIG-O",
    description: "La ciencia de medir la eficiencia. Entender cómo escala el código con los datos.",
    items: [
      "Notación O, Ω, Θ: Límites superiores, inferiores y ajustados.",
      "Análisis Asintótico: Eliminación de constantes y términos no dominantes.",
      "Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso.",
      "Trade-offs: El equilibrio sagrado entre Tiempo y Espacio.",
      "Recursión: Análisis de profundidad de pila y casos base.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de FUNDAMENTOS Y BIG-O.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: FUNDAMENTOS Y BIG-O\n\nLa ciencia de medir la eficiencia. Entender cómo escala el código con los datos.\n\nLa piedra angular de las Ciencias de la Computación. La notación Big-O nos permite comparar algoritmos objetivamente. No medimos segundos, medimos el crecimiento de las operaciones. Por ejemplo, en un algoritmo O(n²), si duplicas los datos, el tiempo se cuadruplica. Dominar el análisis asintótico es la diferencia entre un programador y un ingeniero de software. Las constantes y los coeficientes menores se descartan (ej. 3n + 5 es simplemente O(n)) porque para entradas muy grandes (n tendiendo a infinito), los términos multiplicativos o aditivos constantes pierden relevancia frente a los términos exponenciales o polinómicos dominantes.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Notación O, Ω, Θ: Límites superiores, inferiores y ajustados.\n· Análisis Asintótico: Eliminación de constantes y términos no dominantes.\n· Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso.\n· Trade-offs: El equilibrio sagrado entre Tiempo y Espacio.\n· Recursión: Análisis de profundidad de pila y casos base.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de FUNDAMENTOS Y BIG-O.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Notación O, Ω, Θ: Límites superiores, inferiores y ajustados.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Notación O, Ω, Θ: Límites superiores, inferiores y ajustados. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Notación O, Ω, Θ: Límites superiores, inferiores y ajustados.» y cuándo lo evitarías.\n\n## 2. Análisis Asintótico: Eliminación de constantes y términos no dominantes.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Análisis Asintótico: Eliminación de constantes y términos no dominantes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Análisis Asintótico: Eliminación de constantes y términos no dominantes.» y cuándo lo evitarías.\n\n## 3. Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso.» y cuándo lo evitarías.\n\n## 4. Trade-offs: El equilibrio sagrado entre Tiempo y Espacio.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Trade-offs: El equilibrio sagrado entre Tiempo y Espacio. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Trade-offs: El equilibrio sagrado entre Tiempo y Espacio.» y cuándo lo evitarías.\n\n## 5. Recursión: Análisis de profundidad de pila y casos base.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Recursión: Análisis de profundidad de pila y casos base. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Recursión: Análisis de profundidad de pila y casos base.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de FUNDAMENTOS Y BIG-O.\n\n**Qué es y por qué importa.** Dentro de FUNDAMENTOS Y BIG-O, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de FUNDAMENTOS Y BIG-O. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de FUNDAMENTOS Y BIG-O.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 2:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 3:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\nEstos casos muestran por qué FUNDAMENTOS Y BIG-O no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo FUNDAMENTOS Y BIG-O en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `def constant_time(arr):
    return arr[0] if arr else None # O(1)

def linear_time(arr):
    for x in arr: # O(n)
        print(x)

def quadratic_time(arr):
    for x in arr: # O(n^2)
        for y in arr:
            print(x, y)`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal de acceder a un elemento por su índice en un arreglo de tamaño n?",
        options: ["O(n) - Lineal", "O(1) - Constante", "O(log n) - Logarítmica"],
        answerIndex: 1,
        explanation: "Los arreglos se almacenan en bloques contiguos de memoria. Conociendo el índice, la computadora puede calcular la dirección exacta del elemento en tiempo constante."
      },
      {
        question: "Si duplicamos el tamaño de entrada de un algoritmo O(n²), ¿qué pasa con el número de operaciones en el peor caso?",
        options: ["Se duplica", "Se triplica", "Se cuadruplica"],
        answerIndex: 2,
        explanation: "Al ser cuadrático, la relación es (2n)² = 4n². Por lo tanto, el número de operaciones crece por un factor de 4 (se cuadruplica)."
      },
      {
        question: "¿Cuál de las siguientes complejidades asintóticas representa el crecimiento más lento (es decir, el algoritmo más eficiente para entradas gigantes)?",
        options: ["O(n) - Lineal", "O(log n) - Logarítmica", "O(n log n) - Cuasilineal"],
        answerIndex: 1,
        explanation: "O(log n) crece de manera extremadamente lenta. Para n = 1,000,000, un algoritmo O(log n) toma aproximadamente 20 pasos, mientras que uno O(n) toma un millón de pasos."
      },
      {
        question: "¿Cuál es la complejidad temporal en el peor caso del siguiente código?\nfor i in range(n):\n    for j in range(5):\n        print(i, j)",
        options: ["O(5n) - Lineal", "O(n) - Lineal", "O(n²) - Cuadrática"],
        answerIndex: 1,
        explanation: "En la notación Big-O se descartan las constantes. Como el bucle interno siempre ejecuta exactamente 5 iteraciones (independientemente de n), la cantidad total de operaciones es 5 * n. Simplificado asintóticamente, esto es O(n)."
      },
      {
        question: "Si un algoritmo tiene una función de tiempo T(n) = 3n³ + 10n² + 500, ¿cuál es su complejidad final en notación Big-O?",
        options: ["O(n³)", "O(n²)", "O(3n³ + 10n²)"],
        answerIndex: 0,
        explanation: "En análisis asintótico nos quedamos únicamente con el término de mayor crecimiento (término dominante) y eliminamos los coeficientes constantes. El término dominante aquí es 3n³, por lo que la complejidad es O(n³)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Notación O, Ω, Θ: Límites superiores, inferiores y ajustados?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Notación O, Ω, Θ: Límites superiores, inferiores y ajustados", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Notación O, Ω, Θ: Límites superiores, inferiores y ajustados. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Análisis Asintótico: Eliminación de constantes y términos no dominantes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Análisis Asintótico: Eliminación de constantes y términos no domina...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Análisis Asintótico: Eliminación de constantes y términos no dominantes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Best/Worst/Average Case: Por qué casi siempre nos importa el peor caso. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Trade-offs: El equilibrio sagrado entre Tiempo y Espacio?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Trade-offs: El equilibrio sagrado entre Tiempo y Espacio", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Trade-offs: El equilibrio sagrado entre Tiempo y Espacio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Recursión: Análisis de profundidad de pila y casos base?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Recursión: Análisis de profundidad de pila y casos base", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Recursión: Análisis de profundidad de pila y casos base. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 1: FUNDAMENTOS Y BIG-O', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 2,
    title: "MÓDULO 2: ESTRUCTURAS LINEALES",
    description: "Organización secuencial: desde la memoria contigua hasta los punteros.",
    items: [
      "Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)).",
      "Linked Lists: Simples, dobles y circulares. El poder de los punteros.",
      "Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos.",
      "Queues (FIFO): Buffers, colas de impresión y manejo de procesos.",
      "Deques: Colas de doble extremo para máxima flexibilidad.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ESTRUCTURAS LINEALES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: ESTRUCTURAS LINEALES\n\nOrganización secuencial: desde la memoria contigua hasta los punteros.\n\nLas estructuras lineales definen cómo fluyen los datos. Los Arrays brillan en acceso aleatorio (O(1)), pero sufren en inserciones intermedias (O(n)). Las Linked Lists invierten esto: inserción rápida pero búsqueda lenta. Entender cuándo usar cada una es vital para optimizar el rendimiento del sistema. El redimensionamiento de arreglos dinámicos duplica la capacidad del arreglo cuando se llena, lo que cuesta O(n) para copiar elementos, pero al promediarse en muchas inserciones sucesivas, el costo es de O(1) amortizado.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)).\n· Linked Lists: Simples, dobles y circulares. El poder de los punteros.\n· Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos.\n· Queues (FIFO): Buffers, colas de impresión y manejo de procesos.\n· Deques: Colas de doble extremo para máxima flexibilidad.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ESTRUCTURAS LINEALES.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)).\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)).» y cuándo lo evitarías.\n\n## 2. Linked Lists: Simples, dobles y circulares. El poder de los punteros.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Linked Lists: Simples, dobles y circulares. El poder de los punteros. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Linked Lists: Simples, dobles y circulares. El poder de los punteros.» y cuándo lo evitarías.\n\n## 3. Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos.» y cuándo lo evitarías.\n\n## 4. Queues (FIFO): Buffers, colas de impresión y manejo de procesos.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Queues (FIFO): Buffers, colas de impresión y manejo de procesos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Queues (FIFO): Buffers, colas de impresión y manejo de procesos.» y cuándo lo evitarías.\n\n## 5. Deques: Colas de doble extremo para máxima flexibilidad.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Deques: Colas de doble extremo para máxima flexibilidad. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Deques: Colas de doble extremo para máxima flexibilidad.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ESTRUCTURAS LINEALES.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS LINEALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ESTRUCTURAS LINEALES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ESTRUCTURAS LINEALES.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 2:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 3:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\nEstos casos muestran por qué ESTRUCTURAS LINEALES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ESTRUCTURAS LINEALES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `class Node:
    def __init__(self, data):
        self.val = data
        self.next = None

class Stack:
    def __init__(self):
        self.items = []
    def push(self, x): self.items.append(x)
    def pop(self): return self.items.pop() # O(1)`,
    quiz: [
      {
        question: "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        options: ["Cola (Queue)", "Pila (Stack)", "Arreglo Dinámico (Dynamic Array)"],
        answerIndex: 1,
        explanation: "Las Pilas (Stacks) funcionan como una pila de platos: el último que se coloca (push) es el primero que se retira (pop)."
      },
      {
        question: "¿Cuál es la complejidad temporal de buscar un elemento en una lista enlazada simple de tamaño n?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 2,
        explanation: "Dado que las listas enlazadas no tienen índices, es necesario recorrerlas desde la cabeza (head) nodo por nodo en el peor caso."
      },
      {
        question: "¿Cuál es la complejidad de insertar al final en un Arreglo Dinámico en su caso amortizado?",
        options: ["O(1) - Constante", "O(log n) - Logarítmica", "O(n) - Lineal"],
        answerIndex: 0,
        explanation: "Aunque ocasionalmente requiere copiar todos los elementos a un nuevo arreglo de doble tamaño (lo cual toma O(n)), la mayoría de las veces se inserta al final en tiempo constante. El promedio amortizado es O(1)."
      },
      {
        question: "¿Qué ventaja principal ofrece una Lista Doblemente Enlazada frente a una Lista Enlazada Simple?",
        options: ["Consume menos memoria RAM", "Permite navegación bidireccional (siguiente y anterior)", "El acceso indexado toma tiempo constante O(1)"],
        answerIndex: 1,
        explanation: "La lista doblemente enlazada almacena punteros tanto al nodo siguiente como al anterior, permitiendo recorrer la lista en ambas direcciones, a costa de usar un poco más de memoria."
      },
      {
        question: "¿Cuál es el comportamiento característico de una estructura tipo Cola (Queue)?",
        options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Acceso aleatorio directo a cualquier índice"],
        answerIndex: 1,
        explanation: "Las colas siguen el principio FIFO (primero en entrar, primero en salir), emulando una fila física donde se atiende al primero que llega."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1))?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1))", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dynamic Arrays: Estrategias de redimensionamiento (amortización O(1)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Linked Lists: Simples, dobles y circulares. El poder de los punteros?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Linked Lists: Simples, dobles y circulares. El poder de los punteros", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Linked Lists: Simples, dobles y circulares. El poder de los punteros. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Stacks (LIFO): Gestión de llamadas (Call Stack) y balanceo de símbolos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Queues (FIFO): Buffers, colas de impresión y manejo de procesos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Queues (FIFO): Buffers, colas de impresión y manejo de procesos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Queues (FIFO): Buffers, colas de impresión y manejo de procesos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Deques: Colas de doble extremo para máxima flexibilidad?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Deques: Colas de doble extremo para máxima flexibilidad", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Deques: Colas de doble extremo para máxima flexibilidad. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 2: ESTRUCTURAS LINEALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 3,
    title: "MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)",
    description: "El arte de la búsqueda instantánea mediante funciones de dispersión.",
    items: [
      "Hash Functions: Determinismo, uniformidad y eficiencia.",
      "Collision Resolution: Chaining (listas) vs Open Addressing (Probing).",
      "Load Factor: Cuándo redimensionar para mantener el O(1) promedio.",
      "Sets y Maps: Implementaciones basadas en hashing vs árboles.",
      "Aplicaciones: Caches, bases de datos y criptografía básica.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ESTRUCTURAS AVANZADAS (HASH).",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: ESTRUCTURAS AVANZADAS (HASH)\n\nEl arte de la búsqueda instantánea mediante funciones de dispersión.\n\nUna Tabla Hash es magia técnica: convierte cualquier clave en un índice mediante una función de dispersión. El desafío es la colisión (cuando dos claves quieren el mismo sitio). Un buen ingeniero diseña funciones hash que minimicen esto, manteniendo búsquedas promedio de O(1). El Factor de Carga (Load Factor, n/m) determina cuándo redimensionar la tabla; si este valor supera el 70% o 80%, las colisiones crecen drásticamente. En el peor caso absoluto, si todos los elementos colisionan en la misma celda de Chaining, la búsqueda se degrada a O(n).\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Hash Functions: Determinismo, uniformidad y eficiencia.\n· Collision Resolution: Chaining (listas) vs Open Addressing (Probing).\n· Load Factor: Cuándo redimensionar para mantener el O(1) promedio.\n· Sets y Maps: Implementaciones basadas en hashing vs árboles.\n· Aplicaciones: Caches, bases de datos y criptografía básica.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ESTRUCTURAS AVANZADAS (HASH).\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Hash Functions: Determinismo, uniformidad y eficiencia.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Hash Functions: Determinismo, uniformidad y eficiencia. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Hash Functions: Determinismo, uniformidad y eficiencia.» y cuándo lo evitarías.\n\n## 2. Collision Resolution: Chaining (listas) vs Open Addressing (Probing).\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Collision Resolution: Chaining (listas) vs Open Addressing (Probing). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Collision Resolution: Chaining (listas) vs Open Addressing (Probing).» y cuándo lo evitarías.\n\n## 3. Load Factor: Cuándo redimensionar para mantener el O(1) promedio.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Load Factor: Cuándo redimensionar para mantener el O(1) promedio. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Load Factor: Cuándo redimensionar para mantener el O(1) promedio.» y cuándo lo evitarías.\n\n## 4. Sets y Maps: Implementaciones basadas en hashing vs árboles.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Sets y Maps: Implementaciones basadas en hashing vs árboles. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Sets y Maps: Implementaciones basadas en hashing vs árboles.» y cuándo lo evitarías.\n\n## 5. Aplicaciones: Caches, bases de datos y criptografía básica.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicaciones: Caches, bases de datos y criptografía básica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicaciones: Caches, bases de datos y criptografía básica.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ESTRUCTURAS AVANZADAS (HASH).\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS AVANZADAS (HASH), este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ESTRUCTURAS AVANZADAS (HASH). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ESTRUCTURAS AVANZADAS (HASH).» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 2:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 3:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\nEstos casos muestran por qué ESTRUCTURAS AVANZADAS (HASH) no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ESTRUCTURAS AVANZADAS (HASH) en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `def simple_hash(key, size):
    return sum(ord(c) for c in key) % size

# Diccionarios en Python son Hash Maps altamente optimizados
user_data = {"id": 101, "name": "QuimiSell"}
print(user_data["name"]) # O(1) promedio`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal promedio de búsqueda en una tabla hash bien diseñada?",
        options: ["O(1) - Constante", "O(log n) - Logarítmica", "O(n) - Lineal"],
        answerIndex: 0,
        explanation: "Si la función de dispersión es buena y el factor de carga es bajo, las colisiones son mínimas y la búsqueda se resuelve de forma directa en tiempo constante."
      },
      {
        question: "¿Qué ocurre cuando dos claves distintas producen el mismo índice mediante la función hash?",
        options: ["Un error de compilación", "Una colisión", "Un redimensionamiento automático"],
        answerIndex: 1,
        explanation: "Esto se conoce como Colisión, y debe ser resuelto usando técnicas como encadenamiento (chaining) o direccionamiento abierto (probing)."
      },
      {
        question: "¿Qué es el 'Factor de Carga' (Load Factor) de una tabla hash?",
        options: ["El tamaño total de la memoria RAM", "La relación entre elementos guardados y el tamaño de la tabla (n/m)", "La velocidad de la función hash"],
        answerIndex: 1,
        explanation: "El factor de carga mide cuán llena está la tabla. Si supera ciertos umbrales (como 0.75), la tabla se redimensiona para evitar colisiones excesivas."
      },
      {
        question: "¿Cuál es la diferencia entre Resolución por Encadenamiento (Chaining) y Direccionamiento Abierto (Open Addressing)?",
        options: ["Chaining usa listas enlazadas en cada celda; Open Addressing busca otras celdas libres en la misma tabla", "Chaining no permite colisiones; Open Addressing las permite", "Chaining es más lento en teoría pero consume menos memoria"],
        answerIndex: 0,
        explanation: "Chaining guarda elementos colisionados en una lista enlazada en el mismo índice. Open Addressing busca índices vacíos alternativos usando secuencias de sondeo."
      },
      {
        question: "En el peor caso absoluto, si todas las claves colisionan en la misma celda de Chaining, ¿cuál es la complejidad?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 2,
        explanation: "Si todos los elementos caen en la misma celda, la tabla se degrada a una lista enlazada simple, haciendo que buscar un elemento tome tiempo lineal O(n)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Hash Functions: Determinismo, uniformidad y eficiencia?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Hash Functions: Determinismo, uniformidad y eficiencia", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Hash Functions: Determinismo, uniformidad y eficiencia. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Collision Resolution: Chaining (listas) vs Open Addressing (Probing)?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Collision Resolution: Chaining (listas) vs Open Addressing (Probing)", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Collision Resolution: Chaining (listas) vs Open Addressing (Probing). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Load Factor: Cuándo redimensionar para mantener el O(1) promedio?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Load Factor: Cuándo redimensionar para mantener el O(1) promedio", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Load Factor: Cuándo redimensionar para mantener el O(1) promedio. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Sets y Maps: Implementaciones basadas en hashing vs árboles?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Sets y Maps: Implementaciones basadas en hashing vs árboles", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sets y Maps: Implementaciones basadas en hashing vs árboles. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Aplicaciones: Caches, bases de datos y criptografía básica?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicaciones: Caches, bases de datos y criptografía básica", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicaciones: Caches, bases de datos y criptografía básica. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 3: ESTRUCTURAS AVANZADAS (HASH)', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 4,
    title: "MÓDULO 4: ÁRBOLES Y JERARQUÍAS",
    description: "Estructuras ramificadas para búsquedas y clasificaciones ultra-rápidas.",
    items: [
      "BST (Binary Search Tree): Izquierda menor, derecha mayor.",
      "Balanceo: Por qué un árbol degenerado es solo una lista lenta.",
      "AVL y Red-Black: Rotaciones automáticas para mantener O(log n).",
      "Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes.",
      "Tries: El secreto detrás del autocompletado en buscadores.",
      "B-Trees: La estructura que sostiene a casi todas las bases de datos SQL.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ÁRBOLES Y JERARQUÍAS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: ÁRBOLES Y JERARQUÍAS\n\nEstructuras ramificadas para búsquedas y clasificaciones ultra-rápidas.\n\nLos árboles permiten organizar datos jerárquicamente. Un Árbol de Búsqueda Binaria balanceado reduce una búsqueda de un millón de elementos a solo 20 comparaciones (O(log n)). Los BST no balanceados pueden degenerar en listas lineales de O(n) si se insertan ordenados. Los árboles AVL y Red-Black se auto-balancean mediante rotaciones de nodos, asegurando altura logarítmica. Los Heaps mantienen el máximo (Max-Heap) o mínimo (Min-Heap) en la raíz para colas de prioridad O(1) de acceso y O(log n) de inserción/borrado. Los Tries optimizan búsquedas de prefijos y los Árboles B/B+ reducen lecturas físicas en bases de datos mediante alta ramificación.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· BST (Binary Search Tree): Izquierda menor, derecha mayor.\n· Balanceo: Por qué un árbol degenerado es solo una lista lenta.\n· AVL y Red-Black: Rotaciones automáticas para mantener O(log n).\n· Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes.\n· Tries: El secreto detrás del autocompletado en buscadores.\n· B-Trees: La estructura que sostiene a casi todas las bases de datos SQL.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. BST (Binary Search Tree): Izquierda menor, derecha mayor.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** BST (Binary Search Tree): Izquierda menor, derecha mayor. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «BST (Binary Search Tree): Izquierda menor, derecha mayor.» y cuándo lo evitarías.\n\n## 2. Balanceo: Por qué un árbol degenerado es solo una lista lenta.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Balanceo: Por qué un árbol degenerado es solo una lista lenta. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Balanceo: Por qué un árbol degenerado es solo una lista lenta.» y cuándo lo evitarías.\n\n## 3. AVL y Red-Black: Rotaciones automáticas para mantener O(log n).\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** AVL y Red-Black: Rotaciones automáticas para mantener O(log n). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «AVL y Red-Black: Rotaciones automáticas para mantener O(log n).» y cuándo lo evitarías.\n\n## 4. Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes.» y cuándo lo evitarías.\n\n## 5. Tries: El secreto detrás del autocompletado en buscadores.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Tries: El secreto detrás del autocompletado en buscadores. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Tries: El secreto detrás del autocompletado en buscadores.» y cuándo lo evitarías.\n\n## 6. B-Trees: La estructura que sostiene a casi todas las bases de datos SQL.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** B-Trees: La estructura que sostiene a casi todas las bases de datos SQL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «B-Trees: La estructura que sostiene a casi todas las bases de datos SQL.» y cuándo lo evitarías.\n\n## 7. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 8. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ÁRBOLES Y JERARQUÍAS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 2:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 3:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\nEstos casos muestran por qué ÁRBOLES Y JERARQUÍAS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ÁRBOLES Y JERARQUÍAS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `class BSTNode:
    def __init__(self, key):
        self.left = self.right = None
        self.val = key

def insert(root, key):
    if root is None: return BSTNode(key)
    if key < root.val: root.left = insert(root.left, key)
    else: root.right = insert(root.right, key)
    return root`,
    quiz: [
      {
        question: "En un Árbol Binario de Búsqueda (BST) balanceado de n elementos, ¿cuál es la complejidad de buscar una clave?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 1,
        explanation: "Al estar balanceado, cada decisión a la izquierda o derecha descarta la mitad de los elementos restantes, logrando una complejidad logarítmica."
      },
      {
        question: "¿Qué estructura es ideal para autocompletar palabras de forma ultra-eficiente?",
        options: ["Trie", "Max-Heap", "Árbol AVL"],
        answerIndex: 0,
        explanation: "El Trie (o árbol de prefijos) está especialmente optimizado para búsquedas rápidas basadas en prefijos de cadenas de texto."
      },
      {
        question: "¿Qué caracteriza a un Árbol AVL frente a un Árbol Binario de Búsqueda (BST) común?",
        options: ["Siempre almacena datos en texto plano", "Garantiza que la diferencia de alturas de subárboles no sea mayor a 1", "No permite insertar datos duplicados"],
        answerIndex: 1,
        explanation: "Los árboles AVL son auto-balanceados. Mediante rotaciones de nodos, aseguran que la diferencia de altura de sus subárboles sea como máximo 1."
      },
      {
        question: "¿Cuál es la propiedad fundamental de un Max-Heap?",
        options: ["El nodo raíz contiene el valor mínimo", "El nodo raíz contiene el valor máximo", "Todos los nodos están ordenados de izquierda a derecha"],
        answerIndex: 1,
        explanation: "En un Max-Heap, cada nodo padre es mayor o igual que sus nodos hijos, lo que garantiza que la raíz sea siempre el valor máximo."
      },
      {
        question: "¿Qué ventaja ofrece un Árbol B frente a un BST en bases de datos con lectura en disco?",
        options: ["Tiene un factor de ramificación alto, reduciendo accesos lentos a disco", "Los BST son más rápidos en disco", "Los Árboles B no consumen memoria"],
        answerIndex: 0,
        explanation: "Los árboles B tienen muchos hijos por nodo (alta ramificación). Esto reduce la altura del árbol, por lo que se requieren muy pocas búsquedas físicas en disco duro (I/O)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: BST (Binary Search Tree): Izquierda menor, derecha mayor?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: BST (Binary Search Tree): Izquierda menor, derecha mayor", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que BST (Binary Search Tree): Izquierda menor, derecha mayor. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Balanceo: Por qué un árbol degenerado es solo una lista lenta?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Balanceo: Por qué un árbol degenerado es solo una lista lenta", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Balanceo: Por qué un árbol degenerado es solo una lista lenta. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: AVL y Red-Black: Rotaciones automáticas para mantener O(log n)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: AVL y Red-Black: Rotaciones automáticas para mantener O(log n)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que AVL y Red-Black: Rotaciones automáticas para mantener O(log n). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Heaps: Max-Heap y Min-Heap para colas de prioridad eficientes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Tries: El secreto detrás del autocompletado en buscadores?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Tries: El secreto detrás del autocompletado en buscadores", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Tries: El secreto detrás del autocompletado en buscadores. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: B-Trees: La estructura que sostiene a casi todas las bases de datos SQL?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: B-Trees: La estructura que sostiene a casi todas las bases de datos...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que B-Trees: La estructura que sostiene a casi todas las bases de datos SQL. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 4: ÁRBOLES Y JERARQUÍAS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 5,
    title: "MÓDULO 5: TEORÍA DE GRAFOS",
    description: "Modelando el mundo: redes sociales, GPS y dependencias.",
    items: [
      "Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo).",
      "BFS y DFS: Exploración por niveles vs profundidad extrema.",
      "Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente.",
      "MST: Prim y Kruskal para optimizar tendidos de cables o rutas.",
      "Orden Topológico: Gestión de dependencias en compiladores y proyectos.",
      "Ciclos y Conectividad: Detectando bucles infinitos en sistemas.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de TEORÍA DE GRAFOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: TEORÍA DE GRAFOS\n\nModelando el mundo: redes sociales, GPS y dependencias.\n\nTodo es un grafo: Internet, las neuronas, el metro. BFS recorre radialmente nivel por nivel usando una Cola (Queue), ideal para distancias mínimas en grafos no ponderados. DFS explora ramas a profundidad usando una Pila (Stack) o recursión, útil para ciclos y ordenamiento topológico. Dijkstra resuelve rutas más cortas con pesos positivos usando colas de prioridad. A* acelera Dijkstra incorporando heurísticas de distancia al destino. Prim y Kruskal calculan el Árbol de Expansión Mínima (MST) que conecta todos los nodos con el menor peso acumulado total.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo).\n· BFS y DFS: Exploración por niveles vs profundidad extrema.\n· Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente.\n· MST: Prim y Kruskal para optimizar tendidos de cables o rutas.\n· Orden Topológico: Gestión de dependencias en compiladores y proyectos.\n· Ciclos y Conectividad: Detectando bucles infinitos en sistemas.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo).\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo).» y cuándo lo evitarías.\n\n## 2. BFS y DFS: Exploración por niveles vs profundidad extrema.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** BFS y DFS: Exploración por niveles vs profundidad extrema. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «BFS y DFS: Exploración por niveles vs profundidad extrema.» y cuándo lo evitarías.\n\n## 3. Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente.» y cuándo lo evitarías.\n\n## 4. MST: Prim y Kruskal para optimizar tendidos de cables o rutas.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** MST: Prim y Kruskal para optimizar tendidos de cables o rutas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «MST: Prim y Kruskal para optimizar tendidos de cables o rutas.» y cuándo lo evitarías.\n\n## 5. Orden Topológico: Gestión de dependencias en compiladores y proyectos.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Orden Topológico: Gestión de dependencias en compiladores y proyectos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Orden Topológico: Gestión de dependencias en compiladores y proyectos.» y cuándo lo evitarías.\n\n## 6. Ciclos y Conectividad: Detectando bucles infinitos en sistemas.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Ciclos y Conectividad: Detectando bucles infinitos en sistemas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Ciclos y Conectividad: Detectando bucles infinitos en sistemas.» y cuándo lo evitarías.\n\n## 7. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 8. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de TEORÍA DE GRAFOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\n**Ejemplo 2:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\n**Ejemplo 3:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\nEstos casos muestran por qué TEORÍA DE GRAFOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo TEORÍA DE GRAFOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `# Representación con Lista de Adyacencia
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    # ...
}

def bfs(graph, start):
    visited = {start}
    queue = [start]
    while queue:
        vertex = queue.pop(0)
        # Procesar vertex...`,
    quiz: [
      {
        question: "¿Qué algoritmo se utiliza para encontrar el camino más corto en un grafo ponderado con pesos no negativos?",
        options: ["Dijkstra", "Kruskal", "DFS (Búsqueda en Profundidad)"],
        answerIndex: 0,
        explanation: "Dijkstra utiliza una cola de prioridad para encontrar la ruta con menor peso acumulado desde un nodo de origen."
      },
      {
        question: "¿Qué estructura de datos sirve de soporte para el recorrido BFS (anchura)?",
        options: ["Pila (Stack)", "Cola (Queue)", "Tabla Hash"],
        answerIndex: 1,
        explanation: "BFS recorre nodo por nodo nivel a nivel, y la estructura FIFO (primero en entrar, primero en salir) de una cola asegura este comportamiento."
      },
      {
        question: "¿Cuál es la diferencia principal entre el recorrido BFS y el DFS?",
        options: ["BFS usa pilas; DFS usa colas", "BFS explora nivel por nivel; DFS explora una rama al fondo antes de retroceder", "BFS es siempre más rápido que DFS"],
        answerIndex: 1,
        explanation: "BFS explora radialmente niveles cercanos primero. DFS desciende por una rama hasta una hoja antes de realizar retroceso (backtracking)."
      },
      {
        question: "¿Qué es un Árbol de Expansión Mínima (MST)?",
        options: ["Un subconjunto de aristas que conecta todos los vértices sin ciclos y con el menor peso total", "Un grafo dirigido que no tiene ciclos", "El camino más corto entre dos puntos del grafo"],
        answerIndex: 0,
        explanation: "El MST conecta todos los vértices del grafo usando aristas con el peso mínimo posible acumulado y sin crear ciclos."
      },
      {
        question: "¿Para qué se utiliza el Ordenamiento Topológico en grafos?",
        options: ["Para encontrar la ruta más rápida en un mapa", "Para ordenar tareas con dependencias en un orden ejecutable", "Para encontrar los nodos con más conexiones"],
        answerIndex: 1,
        explanation: "El ordenamiento topológico ordena de forma secuencial nodos que dependen entre sí (ej. dependencias de instalación o materias académicas)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo)", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Representaciones: Matriz vs Lista de adyacencia (Espacio vs Tiempo). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: BFS y DFS: Exploración por niveles vs profundidad extrema?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: BFS y DFS: Exploración por niveles vs profundidad extrema", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que BFS y DFS: Exploración por niveles vs profundidad extrema. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Dijkstra y A*: Algoritmos de navegación y búsqueda inteligente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: MST: Prim y Kruskal para optimizar tendidos de cables o rutas?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: MST: Prim y Kruskal para optimizar tendidos de cables o rutas", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que MST: Prim y Kruskal para optimizar tendidos de cables o rutas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Orden Topológico: Gestión de dependencias en compiladores y proyectos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Orden Topológico: Gestión de dependencias en compiladores y proyectos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Orden Topológico: Gestión de dependencias en compiladores y proyectos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Ciclos y Conectividad: Detectando bucles infinitos en sistemas?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Ciclos y Conectividad: Detectando bucles infinitos en sistemas", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Ciclos y Conectividad: Detectando bucles infinitos en sistemas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 5: TEORÍA DE GRAFOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 6,
    title: "MÓDULO 6: ALGORITMOS DE ORDENAMIENTO",
    description: "Del caos al orden: la eficiencia de la organización de datos.",
    items: [
      "Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños).",
      "Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place).",
      "Especiales: Counting y Radix Sort (superando el límite de comparación).",
      "Estabilidad: Por qué importa mantener el orden relativo de elementos iguales.",
      "Timsort: El algoritmo híbrido real detrás de Python y Java.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ALGORITMOS DE ORDENAMIENTO.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago."
],
    content: "## Panorama del tema: ALGORITMOS DE ORDENAMIENTO\n\nDel caos al orden: la eficiencia de la organización de datos.\n\nOrdenar es fundamental para búsquedas eficientes. Merge Sort es estable (mantiene el orden original de elementos con valores iguales) pero consume O(n) memoria extra. Quick Sort es in-place (no requiere memoria extra) pero su peor caso es O(n²) si el pivote no está optimizado. Matemáticamente, ningún ordenamiento basado en comparaciones puede ser menor a O(n log n). Algoritmos de ordenamiento no basados en comparaciones (como Counting Sort o Radix Sort) pueden lograr O(n) pero requieren restricciones en el rango de los datos.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños).\n· Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place).\n· Especiales: Counting y Radix Sort (superando el límite de comparación).\n· Estabilidad: Por qué importa mantener el orden relativo de elementos iguales.\n· Timsort: El algoritmo híbrido real detrás de Python y Java.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ALGORITMOS DE ORDENAMIENTO.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños).\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños).» y cuándo lo evitarías.\n\n## 2. Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place).\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place).» y cuándo lo evitarías.\n\n## 3. Especiales: Counting y Radix Sort (superando el límite de comparación).\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Especiales: Counting y Radix Sort (superando el límite de comparación). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Especiales: Counting y Radix Sort (superando el límite de comparación).» y cuándo lo evitarías.\n\n## 4. Estabilidad: Por qué importa mantener el orden relativo de elementos iguales.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Estabilidad: Por qué importa mantener el orden relativo de elementos iguales. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Estabilidad: Por qué importa mantener el orden relativo de elementos iguales.» y cuándo lo evitarías.\n\n## 5. Timsort: El algoritmo híbrido real detrás de Python y Java.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Timsort: El algoritmo híbrido real detrás de Python y Java. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Timsort: El algoritmo híbrido real detrás de Python y Java.» y cuándo lo evitarías.\n\n## 6. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 7. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 8. Mapa mental de ALGORITMOS DE ORDENAMIENTO.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE ORDENAMIENTO, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ALGORITMOS DE ORDENAMIENTO. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ALGORITMOS DE ORDENAMIENTO.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 2:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 3:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\nEstos casos muestran por qué ALGORITMOS DE ORDENAMIENTO no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ALGORITMOS DE ORDENAMIENTO en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L); merge_sort(R)
        # ... lógica de mezcla ...
    return arr`,
    quiz: [
      {
        question: "¿Cuál es la complejidad temporal en el peor de los casos de Quick Sort no optimizado?",
        options: ["O(n log n)", "O(n²)", "O(2n)"],
        answerIndex: 1,
        explanation: "Si el pivote elegido es siempre el valor mínimo o máximo (por ejemplo, en listas ya ordenadas), el algoritmo se degrada a cuadrático."
      },
      {
        question: "¿Qué significa que un algoritmo de ordenamiento sea 'estable'?",
        options: ["Que siempre tarda el mismo tiempo", "Que no requiere memoria adicional", "Que preserva el orden relativo de elementos con claves iguales"],
        answerIndex: 2,
        explanation: "La estabilidad garantiza que si dos registros tienen el mismo valor de ordenación, mantendrán su orden original relativo después del proceso."
      },
      {
        question: "¿Cuál es la complejidad de tiempo de Merge Sort en su mejor, peor y promedio caso?",
        options: ["Mejor: O(n), Peor: O(n log n)", "Siempre O(n log n) en todos los casos", "Siempre O(n²) en todos los casos"],
        answerIndex: 1,
        explanation: "Merge Sort siempre realiza las mismas divisiones y combinaciones sin importar el orden original del arreglo. Su complejidad es garantizada de O(n log n)."
      },
      {
        question: "¿Cuál de los siguientes algoritmos es un ejemplo de ordenamiento in-place?",
        options: ["Merge Sort", "Quick Sort", "Counting Sort"],
        answerIndex: 1,
        explanation: "Quick Sort ordena los elementos intercambiándolos dentro de la misma memoria del arreglo original, sin duplicar arreglos grandes."
      },
      {
        question: "¿Cuál es el límite inferior matemático para ordenar mediante comparaciones de elementos?",
        options: ["O(n)", "O(n log n)", "O(log n)"],
        answerIndex: 1,
        explanation: "Se ha demostrado mediante árboles de decisión que cualquier algoritmo que ordene comparando elementos entre sí requiere al menos O(n log n) operaciones."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños)?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets peq...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Básicos (O(n²)): Bubble, Selection, Insertion (buenos para sets pequeños). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place)?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place)", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Eficientes (O(n log n)): Merge Sort (estable) y Quick Sort (in-place). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Especiales: Counting y Radix Sort (superando el límite de comparación)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Especiales: Counting y Radix Sort (superando el límite de comparación)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Especiales: Counting y Radix Sort (superando el límite de comparación). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Estabilidad: Por qué importa mantener el orden relativo de elementos iguales?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Estabilidad: Por qué importa mantener el orden relativo de elemento...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Estabilidad: Por qué importa mantener el orden relativo de elementos iguales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Timsort: El algoritmo híbrido real detrás de Python y Java?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Timsort: El algoritmo híbrido real detrás de Python y Java", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Timsort: El algoritmo híbrido real detrás de Python y Java. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 6: ALGORITMOS DE ORDENAMIENTO', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 7,
    title: "MÓDULO 7: ALGORITMOS DE BÚSQUEDA",
    description: "Encontrar la aguja en el pajar de datos.",
    items: [
      "Búsqueda Binaria: El poder de dividir y conquistar (O(log n)).",
      "Técnicas de Punteros: Two Pointers y Sliding Window.",
      "Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'.",
      "Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ALGORITMOS DE BÚSQUEDA.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago.",
      "Definición operativa de los términos centrales de ALGORITMOS DE BÚSQUEDA."
],
    content: "## Panorama del tema: ALGORITMOS DE BÚSQUEDA\n\nEncontrar la aguja en el pajar de datos.\n\nLa Búsqueda Binaria reduce el espacio de búsqueda a la mitad en cada paso (O(log n)), requiriendo obligatoriamente que la colección esté ordenada. La técnica de Dos Punteros (Two Pointers) optimiza búsquedas de sumas o pares en colecciones ordenadas en tiempo O(n). La Ventana Deslizante (Sliding Window) analiza subarreglos eficientemente. Los algoritmos A* usan funciones heurísticas que estiman la distancia al destino para optimizar el recorrido frente a Dijkstra.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Búsqueda Binaria: El poder de dividir y conquistar (O(log n)).\n· Técnicas de Punteros: Two Pointers y Sliding Window.\n· Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'.\n· Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ALGORITMOS DE BÚSQUEDA.\n· Preguntas tipo entrevista técnica.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Búsqueda Binaria: El poder de dividir y conquistar (O(log n)).\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Búsqueda Binaria: El poder de dividir y conquistar (O(log n)). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Búsqueda Binaria: El poder de dividir y conquistar (O(log n)).» y cuándo lo evitarías.\n\n## 2. Técnicas de Punteros: Two Pointers y Sliding Window.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Técnicas de Punteros: Two Pointers y Sliding Window. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Técnicas de Punteros: Two Pointers y Sliding Window.» y cuándo lo evitarías.\n\n## 3. Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'.» y cuándo lo evitarías.\n\n## 4. Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy.» y cuándo lo evitarías.\n\n## 5. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 6. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 7. Mapa mental de ALGORITMOS DE BÚSQUEDA.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ALGORITMOS DE BÚSQUEDA. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ALGORITMOS DE BÚSQUEDA.» y cuándo lo evitarías.\n\n## 8. Preguntas tipo entrevista técnica.\n\n**Qué es y por qué importa.** Dentro de ALGORITMOS DE BÚSQUEDA, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preguntas tipo entrevista técnica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preguntas tipo entrevista técnica.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 2:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\n**Ejemplo 3:** Google Maps combina grafos ponderados con heurísticas A*; sin teoría de grafos sería imposible calcular rutas en segundos.\n\nEstos casos muestran por qué ALGORITMOS DE BÚSQUEDA no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ALGORITMOS DE BÚSQUEDA en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x: return mid
        elif arr[mid] > x: return binary_search(arr, low, mid - 1, x)
        else: return binary_search(arr, mid + 1, high, x)
    return -1`,
    quiz: [
      {
        question: "¿Qué condición fundamental debe cumplir una colección para aplicar la Búsqueda Binaria?",
        options: ["Tener tamaño par", "Estar ordenada", "Estar en una lista enlazada"],
        answerIndex: 1,
        explanation: "La búsqueda binaria asume que los datos están ordenados para poder descartar de forma segura la mitad superior o inferior en cada comparación."
      },
      {
        question: "¿Cuál es la complejidad temporal de la Búsqueda Binaria?",
        options: ["O(1)", "O(log n)", "O(n)"],
        answerIndex: 1,
        explanation: "Cada paso en la búsqueda binaria reduce la cantidad de elementos a la mitad, resultando en un tiempo de ejecución logarítmico O(log n)."
      },
      {
        question: "¿Qué técnica de punteros es ideal para buscar sumas objetivo en un arreglo ordenado en O(n)?",
        options: ["Dos Punteros (Two Pointers)", "Búsqueda en Grafos", "Filtro de Bloom"],
        answerIndex: 0,
        explanation: "La técnica de Dos Punteros inicializa extremos e incrementa/decrementa su posición según la suma parcial, logrando un recorrido de O(n)."
      },
      {
        question: "¿Qué caracteriza al algoritmo de Búsqueda Heurística A* frente a Dijkstra?",
        options: ["A* es más lento", "A* usa una función heurística para estimar la distancia restante al objetivo", "A* no soporta pesos"],
        answerIndex: 1,
        explanation: "A* estima el costo restante hacia la meta para enfocar su búsqueda espacialmente y evaluar menos nodos innecesarios."
      },
      {
        question: "Si buscamos en una lista desordenada de tamaño n, ¿cuál es el peor caso para Búsqueda Lineal?",
        options: ["n comparaciones", "log n comparaciones", "n/2 comparaciones"],
        answerIndex: 0,
        explanation: "Sin orden, debemos evaluar cada elemento individualmente. Si no existe, se habrán realizado exactamente n comparaciones."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda Binaria: El poder de dividir y conquistar (O(log n))?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Búsqueda Binaria: El poder de dividir y conquistar (O(log n))", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda Binaria: El poder de dividir y conquistar (O(log n)). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Técnicas de Punteros: Two Pointers y Sliding Window?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Técnicas de Punteros: Two Pointers y Sliding Window", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Técnicas de Punteros: Two Pointers y Sliding Window. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda Heurística: Introducción a la IA con algoritmos 'Best-First'. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Búsqueda en Grafos: Comparativa entre Uniform-cost y Greedy. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 7: ALGORITMOS DE BÚSQUEDA', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Aplicar la regla solo en el best case ignorando el peor escenario.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Confundir el concepto con una técnica ortogonal no relacionada."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 8,
    title: "MÓDULO 8: PARADIGMAS AVANZADOS",
    description: "Estrategias de diseño para problemas aparentemente imposibles.",
    items: [
      "Programación Dinámica: Memoización vs Tabulación. No repitas trabajo.",
      "Divide y Vencerás: Descomposición de problemas masivos.",
      "Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales.",
      "Backtracking: Poda de árboles de decisión (N-Queens, Sudoku).",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de PARADIGMAS AVANZADOS.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago.",
      "Definición operativa de los términos centrales de PARADIGMAS AVANZADOS."
],
    content: "## Panorama del tema: PARADIGMAS AVANZADOS\n\nEstrategias de diseño para problemas aparentemente imposibles.\n\nLa Programación Dinámica (DP) guarda soluciones de subproblemas superpuestos para no calcularlos dos veces, reduciendo tiempos exponenciales a polinomiales. Memoización es el enfoque Top-Down (recursivo con caché). Tabulación es el enfoque Bottom-Up (tabla iterativa de menor a mayor). Greedy toma decisiones locales óptimas instantáneas, sin retroceder. Backtracking realiza una búsqueda en profundidad sistemática sobre árboles de decisiones, podando ramas inviables para optimizar la búsqueda.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Programación Dinámica: Memoización vs Tabulación. No repitas trabajo.\n· Divide y Vencerás: Descomposición de problemas masivos.\n· Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales.\n· Backtracking: Poda de árboles de decisión (N-Queens, Sudoku).\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de PARADIGMAS AVANZADOS.\n· Preguntas tipo entrevista técnica.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Programación Dinámica: Memoización vs Tabulación. No repitas trabajo.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Programación Dinámica: Memoización vs Tabulación. No repitas trabajo. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Programación Dinámica: Memoización vs Tabulación. No repitas trabajo.» y cuándo lo evitarías.\n\n## 2. Divide y Vencerás: Descomposición de problemas masivos.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Divide y Vencerás: Descomposición de problemas masivos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Divide y Vencerás: Descomposición de problemas masivos.» y cuándo lo evitarías.\n\n## 3. Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales.» y cuándo lo evitarías.\n\n## 4. Backtracking: Poda de árboles de decisión (N-Queens, Sudoku).\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Backtracking: Poda de árboles de decisión (N-Queens, Sudoku). — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Backtracking: Poda de árboles de decisión (N-Queens, Sudoku).» y cuándo lo evitarías.\n\n## 5. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 6. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 7. Mapa mental de PARADIGMAS AVANZADOS.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de PARADIGMAS AVANZADOS. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de PARADIGMAS AVANZADOS.» y cuándo lo evitarías.\n\n## 8. Preguntas tipo entrevista técnica.\n\n**Qué es y por qué importa.** Dentro de PARADIGMAS AVANZADOS, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preguntas tipo entrevista técnica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preguntas tipo entrevista técnica.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\n**Ejemplo 2:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\n**Ejemplo 3:** Redis documenta la complejidad de cada comando (O(1), O(log n), O(n)) porque los ingenieros eligen estructuras según el patrón de acceso.\n\nEstos casos muestran por qué PARADIGMAS AVANZADOS no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n· Confundir el caso promedio con el peor caso al estimar rendimiento de un algoritmo.\n· Ignorar la sección de aplicaciones reales: ahí se ancla la memoria a largo plazo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo PARADIGMAS AVANZADOS en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `# DP: Fibonacci con Tabulación
def fib_dp(n):
    table = [0] * (n + 1)
    table[1] = 1
    for i in range(2, n + 1):
        table[i] = table[i-1] + table[i-2]
    return table[n]`,
    quiz: [
      {
        question: "¿En qué consiste la técnica de 'Memoización' (Memoization)?",
        options: ["En compilar código", "En guardar soluciones de subproblemas ya resueltos en memoria para no recalcularlos", "En iterar hacia arriba en una tabla"],
        answerIndex: 1,
        explanation: "La memoización es un enfoque Top-Down que optimiza funciones recursivas almacenando los resultados de llamadas previas en estructuras tipo diccionario o arreglo."
      },
      {
        question: "¿Cuál es la diferencia entre Programación Dinámica (DP) y Divide y Vencerás?",
        options: ["DP resuelve subproblemas superpuestos; Divide y Vencerás los resuelve independientes", "Divide y Vencerás es para bases de datos", "DP es secuencial y recursivo siempre"],
        answerIndex: 0,
        explanation: "Divide y Vencerás reparte problemas en piezas aisladas. DP une subproblemas que se repiten una y otra vez reutilizando soluciones previas."
      },
      {
        question: "¿Qué estrategia sigue un Algoritmo Voraz (Greedy)?",
        options: ["Prueba todas las opciones posibles", "Toma la decisión local óptima instantánea esperando llegar al óptimo global", "Resuelve la mitad del problema"],
        answerIndex: 1,
        explanation: "Los algoritmos Greedy toman el mejor camino local e inmediato en cada paso, sin reconsiderar ni retroceder."
      },
      {
        question: "¿Cuál es el concepto clave de la técnica 'Backtracking'?",
        options: ["Guardar datos en disco", "Explorar soluciones candidatas y retroceder tan pronto se viola una regla (poda)", "Reescribir funciones al revés"],
        answerIndex: 1,
        explanation: "Backtracking recorre un árbol de decisiones y descarta caminos erróneos de inmediato retrocediendo un paso."
      },
      {
        question: "En Programación Dinámica, ¿cuál es la diferencia entre Top-Down y Bottom-Up?",
        options: ["Top-Down usa recursión y memoización; Bottom-Up usa tablas iterativas", "Top-Down es iterativo; Bottom-Up es recursivo", "No hay diferencia en rendimiento"],
        answerIndex: 0,
        explanation: "Top-Down parte del problema general recursivamente guardando caché. Bottom-Up construye la tabla desde los casos más pequeños."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Programación Dinámica: Memoización vs Tabulación. No repitas trabajo?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Programación Dinámica: Memoización vs Tabulación. No repitas trabajo", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Programación Dinámica: Memoización vs Tabulación. No repitas trabajo. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Divide y Vencerás: Descomposición de problemas masivos?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Divide y Vencerás: Descomposición de problemas masivos", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Divide y Vencerás: Descomposición de problemas masivos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimo...", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Algoritmos Voraces (Greedy): Decisiones óptimas locales para óptimos globales. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Backtracking: Poda de árboles de decisión (N-Queens, Sudoku)?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Backtracking: Poda de árboles de decisión (N-Queens, Sudoku)", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Backtracking: Poda de árboles de decisión (N-Queens, Sudoku). Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 8: PARADIGMAS AVANZADOS', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 9,
    title: "MÓDULO 9: ESTRUCTURAS ESPECIALES",
    description: "Optimizando para casos de uso extremos y masivos.",
    items: [
      "Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no.",
      "LRU Cache: Gestión de memoria basada en uso reciente.",
      "Segment Trees: Consultas de rango ultra-rápidas.",
      "Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de ESTRUCTURAS ESPECIALES.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago.",
      "Definición operativa de los términos centrales de ESTRUCTURAS ESPECIALES."
],
    content: "## Panorama del tema: ESTRUCTURAS ESPECIALES\n\nOptimizando para casos de uso extremos y masivos.\n\nLos Filtros de Bloom son estructuras probabilísticas compactas que afirman con certeza si un elemento NO está en un conjunto, aunque tienen un margen de falsos positivos (pero 0% falsos negativos). Las cachés LRU expulsan el elemento menos usado recientemente cuando se llenan. Los Segment Trees representan intervalos para consultas y actualizaciones de rango en O(log n). DSU gestiona la unión e identificación de pertenencia de elementos a conjuntos disjuntos de forma casi constante.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no.\n· LRU Cache: Gestión de memoria basada en uso reciente.\n· Segment Trees: Consultas de rango ultra-rápidas.\n· Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de ESTRUCTURAS ESPECIALES.\n· Preguntas tipo entrevista técnica.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no.» y cuándo lo evitarías.\n\n## 2. LRU Cache: Gestión de memoria basada en uso reciente.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** LRU Cache: Gestión de memoria basada en uso reciente. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «LRU Cache: Gestión de memoria basada en uso reciente.» y cuándo lo evitarías.\n\n## 3. Segment Trees: Consultas de rango ultra-rápidas.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Segment Trees: Consultas de rango ultra-rápidas. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Segment Trees: Consultas de rango ultra-rápidas.» y cuándo lo evitarías.\n\n## 4. Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos.» y cuándo lo evitarías.\n\n## 5. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 6. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 7. Mapa mental de ESTRUCTURAS ESPECIALES.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de ESTRUCTURAS ESPECIALES. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de ESTRUCTURAS ESPECIALES.» y cuándo lo evitarías.\n\n## 8. Preguntas tipo entrevista técnica.\n\n**Qué es y por qué importa.** Dentro de ESTRUCTURAS ESPECIALES, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preguntas tipo entrevista técnica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preguntas tipo entrevista técnica.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 2:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 3:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\nEstos casos muestran por qué ESTRUCTURAS ESPECIALES no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n· Estudiar solo la definición sin un ejemplo numérico concreto (valores pequeños de n).\n· Avanzar al siguiente módulo sin alcanzar al menos 70% en la autoevaluación.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo ESTRUCTURAS ESPECIALES en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `class SimpleLRU:
    def __init__(self, size):
        self.cache = {} # Simplificado
        self.order = []
        self.max_size = size`,
    quiz: [
      {
        question: "¿Qué afirmación describe correctamente a un Filtro de Bloom?",
        options: ["Es 100% preciso", "Puede dar falsos positivos pero nunca falsos negativos", "Puede dar falsos negativos pero nunca falsos positivos"],
        answerIndex: 1,
        explanation: "Si el filtro dice que un elemento no está, es 100% seguro de que no está. Si dice que está, existe la posibilidad de que no esté realmente (falso positivo) debido a colisión de bits."
      },
      {
        question: "¿Qué hace una caché LRU (Least Recently Used) al llenarse?",
        options: ["Borra el elemento con menor valor numérico", "Borra el elemento menos utilizado recientemente", "Reinicia la memoria interna"],
        answerIndex: 1,
        explanation: "Expulsa el elemento que ha estado inactivo por más tiempo para liberar espacio para los nuevos registros."
      },
      {
        question: "¿Para qué sirve un Segment Tree?",
        options: ["Para ordenar archivos", "Para realizar consultas de rango y actualizaciones en intervalos en tiempo O(log n)", "Para comprimir imágenes"],
        answerIndex: 1,
        explanation: "Estructura intervalos de un arreglo en un árbol binario permitiendo consultas agregadas y actualizaciones rápidas en O(log n)."
      },
      {
        question: "¿Qué permite hacer la estructura DSU (Disjoint Set Union) u Union-Find?",
        options: ["Encontrar laberintos", "Unir conjuntos disjuntos de elementos y realizar búsquedas asociativas ultra-rápidas", "Copiar bases de datos"],
        answerIndex: 1,
        explanation: "Mantiene y une particiones disjuntas eficientemente, siendo crucial en la detección de ciclos de algoritmos como Kruskal."
      },
      {
        question: "Si el vector de bits de un Filtro de Bloom es muy pequeño en relación a los datos insertados, ¿qué ocurre?",
        options: ["El filtro falla al compilar", "La tasa de falsos positivos tiende al 100%", "La tasa de falsos negativos aumenta"],
        answerIndex: 1,
        explanation: "Al haber pocos bits, estos se saturan rápidamente de '1's, haciendo que casi cualquier consulta responda positivamente (falso positivo)."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitiv...", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Filtros de Bloom: ¿Está este elemento? Probablemente sí o definitivamente no. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: LRU Cache: Gestión de memoria basada en uso reciente?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: LRU Cache: Gestión de memoria basada en uso reciente", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que LRU Cache: Gestión de memoria basada en uso reciente. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Segment Trees: Consultas de rango ultra-rápidas?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Segment Trees: Consultas de rango ultra-rápidas", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Segment Trees: Consultas de rango ultra-rápidas. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Disjoint Set Union (DSU): Agrupamiento dinámico y detección de ciclos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Optimizar prematuramente sin perfilar el cuello de botella real.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Ignorar casos borde y entradas vacías en el diseño."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 9: ESTRUCTURAS ESPECIALES', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  },
{
    id: 10,
    title: "MÓDULO 10: APLICACIONES EN EL MUNDO REAL",
    description: "Integrando todo en sistemas de producción e Inteligencia Artificial.",
    items: [
      "Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes.",
      "Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux.",
      "Redes: Algoritmos de enrutamiento OSPF y tablas ARP.",
      "IA Básica: Árboles de decisión y el algoritmo Minimax para juegos.",
      "Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.",
      "Errores frecuentes de principiantes y cómo evitarlos en producción.",
      "Mapa mental de APLICACIONES EN EL MUNDO REAL.",
      "Preguntas tipo entrevista técnica.",
      "Glosario: 5 términos que defines sin diccionario.",
      "Conexión con el laboratorio del curso.",
      "Repaso offline sin internet ni APIs de pago.",
      "Definición operativa de los términos centrales de APLICACIONES EN EL MUNDO REAL."
],
    content: "## Panorama del tema: APLICACIONES EN EL MUNDO REAL\n\nIntegrando todo en sistemas de producción e Inteligencia Artificial.\n\nLa teoría cobra vida en sistemas reales. Las bases de datos SQL usan índices basados en Árboles B+ para evitar barridos lineales secuenciales de disco. Los sistemas de archivos Linux usan Inodos para indexar el almacenamiento físico y permisos de archivos. El enrutamiento en redes (como OSPF) corre Dijkstra en cada router para hallar la ruta de menor latencia. Los motores de juegos clásicos de tablero (ajedrez, damas) usan árboles Minimax con poda Alfa-Beta para evaluar jugadas y respuestas del contrincante.\n\nEste módulo es material de estudio **autocontenido**: puedes aprenderlo completo aquí, sin pagar plataformas externas ni depender de internet después de cargar la página. Lee en orden, ejecuta el snippet, resuelve la autoevaluación y repasa los puntos que falles.\n\n## Qué aprenderás en este módulo\n\n· Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes.\n· Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux.\n· Redes: Algoritmos de enrutamiento OSPF y tablas ARP.\n· IA Básica: Árboles de decisión y el algoritmo Minimax para juegos.\n· Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n· Errores frecuentes de principiantes y cómo evitarlos en producción.\n· Mapa mental de APLICACIONES EN EL MUNDO REAL.\n· Preguntas tipo entrevista técnica.\n· Dominar las 12 preguntas de autoevaluación con ≥70% de aciertos antes de avanzar.\n\n## Desarrollo teórico detallado\n\n## 1. Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes.» y cuándo lo evitarías.\n\n## 2. Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux.» y cuándo lo evitarías.\n\n## 3. Redes: Algoritmos de enrutamiento OSPF y tablas ARP.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Redes: Algoritmos de enrutamiento OSPF y tablas ARP. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Redes: Algoritmos de enrutamiento OSPF y tablas ARP.» y cuándo lo evitarías.\n\n## 4. IA Básica: Árboles de decisión y el algoritmo Minimax para juegos.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** IA Básica: Árboles de decisión y el algoritmo Minimax para juegos. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «IA Básica: Árboles de decisión y el algoritmo Minimax para juegos.» y cuándo lo evitarías.\n\n## 5. Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería.» y cuándo lo evitarías.\n\n## 6. Errores frecuentes de principiantes y cómo evitarlos en producción.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Errores frecuentes de principiantes y cómo evitarlos en producción. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Errores frecuentes de principiantes y cómo evitarlos en producción.» y cuándo lo evitarías.\n\n## 7. Mapa mental de APLICACIONES EN EL MUNDO REAL.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Mapa mental de APLICACIONES EN EL MUNDO REAL. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Mapa mental de APLICACIONES EN EL MUNDO REAL.» y cuándo lo evitarías.\n\n## 8. Preguntas tipo entrevista técnica.\n\n**Qué es y por qué importa.** Dentro de APLICACIONES EN EL MUNDO REAL, este punto es central en estructuras de datos, complejidad algorítmica y sistemas que deben escalar. No basta reconocer el término: debes poder explicar qué problema resuelve, qué datos necesita y qué garantías ofrece.\n\n**Desarrollo.** Preguntas tipo entrevista técnica. — Profundiza leyendo el enunciado como una pregunta de examen: ¿cómo se define?, ¿cuál es el mecanismo?, ¿qué pasa si la entrada crece?, ¿existe alternativa mejor? Relaciona la respuesta con el código de demostración del módulo: identifica línea por línea dónde se aplica.\n\n**Ejemplo para fijar ideas.** Plantea un caso con números pequeños (n=5, n=10) y ejecuta el razonamiento manualmente. Luego generaliza: ¿cómo cambia el costo o el comportamiento cuando n pasa a 10⁶?\n\n**Pregunta de autoexamen.** Sin mirar apuntes, escribe en una frase cuándo usarías «Preguntas tipo entrevista técnica.» y cuándo lo evitarías.\n\n## Aplicaciones en sistemas reales\n\n**Ejemplo 1:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 2:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\n**Ejemplo 3:** PostgreSQL usa B+ Trees en índices: cada búsqueda por clave primaria es O(log n) sobre millones de filas.\n\nEstos casos muestran por qué APLICACIONES EN EL MUNDO REAL no es teórico: empresas y proyectos open source aplican estos principios diariamente. Al estudiar, elige uno y escribe cómo encajaría el concepto del módulo en ese escenario.\n\n## Errores comunes al estudiar\n\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n· Copiar código del módulo sin trazar manualmente cuántas operaciones ejecuta en el peor caso.\n· Memorizar definiciones sin resolver al menos un ejercicio o modificar el snippet del módulo.\n\n## Síntesis para repasar\n\nCierra el módulo resumiendo APLICACIONES EN EL MUNDO REAL en cinco líneas propias. Vuelve a leer los **Conceptos clave** del panel, ejecuta el código de referencia y completa la autoevaluación. Si fallas más de 3 preguntas, relee el bloque teórico correspondiente antes de continuar — el siguiente módulo asume que dominas este.",
    codeSnippet: `# Ejemplo conceptual de búsqueda en DB
class DatabaseIndex:
    def __init__(self):
        self.b_tree = BTree(order=32)
    def find_record(self, key):
        return self.b_tree.search(key)`,
    quiz: [
      {
        question: "¿Por qué las bases de datos prefieren Árboles B/B+ frente a BST para indexar en disco?",
        options: ["Son más fáciles de programar", "Tienen un factor de ramificación alto que reduce lecturas lentas a disco", "No requieren ser balanceados"],
        answerIndex: 1,
        explanation: "Los árboles B/B+ permiten que cada nodo contenga cientos de claves, reduciendo drásticamente la altura del árbol y con ello los accesos físicos a disco (operaciones I/O lentas)."
      },
      {
        question: "¿Cómo funciona a nivel de estructuras un índice de base de datos?",
        options: ["Es un respaldo ordenado", "Es una estructura auxiliar que relaciona claves con punteros físicos de registro en disco", "Es una función recursiva"],
        answerIndex: 1,
        explanation: "El índice vincula un valor (como ID) con la posición física en el bloque del disco duro, evitando leer toda la tabla."
      },
      {
        question: "¿Qué es un Inodo (Inode) en sistemas Linux?",
        options: ["La estructura que almacena metadatos y punteros de datos de un archivo", "Una función de red", "Un algoritmo de ordenamiento"],
        answerIndex: 0,
        explanation: "El inodo contiene tamaño, permisos y bloques físicos en disco del archivo, abstrayendo la metadata de su nombre de archivo."
      },
      {
        question: "¿Qué algoritmo se usa en el enrutamiento de red OSPF?",
        options: ["Filtro de Bloom", "Dijkstra para calcular rutas con menor latencia", "Búsqueda Binaria de IPs"],
        answerIndex: 1,
        explanation: "OSPF usa Dijkstra para evaluar el camino más corto o de menor costo en su topología de red de enrutadores."
      },
      {
        question: "¿Cuál es el algoritmo clásico usado en IA para juegos de tablero de dos jugadores?",
        options: ["Búsqueda Lineal", "Minimax con poda Alfa-Beta", "Redes Neuronales directas"],
        answerIndex: 1,
        explanation: "Minimax simula los turnos proyectando jugadas, y la poda Alfa-Beta descarta ramas de juego innecesarias para ahorrar tiempo."
      }
    ,
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes?",
          options: ["Mezclar responsabilidades en una sola función o módulo monolítico.", "Describe correctamente el concepto: Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes", "Implementar la solución más rápida de escribir sin medir escalabilidad."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Índices de DB: Cómo SQL usa B+ Trees para buscar en terabytes. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Sistemas de Archivos: Inodos y estructuras jerárquicas en Linux. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Redes: Algoritmos de enrutamiento OSPF y tablas ARP?",
          options: ["Confundir el concepto con una técnica ortogonal no relacionada.", "Describe correctamente el concepto: Redes: Algoritmos de enrutamiento OSPF y tablas ARP", "Optimizar prematuramente sin perfilar el cuello de botella real."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Redes: Algoritmos de enrutamiento OSPF y tablas ARP. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: IA Básica: Árboles de decisión y el algoritmo Minimax para juegos?",
          options: ["Implementar la solución más rápida de escribir sin medir escalabilidad.", "Describe correctamente el concepto: IA Básica: Árboles de decisión y el algoritmo Minimax para juegos", "Descartar el análisis asintótico por constantes de hardware."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que IA Básica: Árboles de decisión y el algoritmo Minimax para juegos. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería?",
          options: ["Ignorar casos borde y entradas vacías en el diseño.", "Describe correctamente el concepto: Aplicación directa en proyectos reales y entrevistas técnicas de in...", "Mezclar responsabilidades en una sola función o módulo monolítico."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Aplicación directa en proyectos reales y entrevistas técnicas de ingeniería. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Errores frecuentes de principiantes y cómo evitarlos en producción?",
          options: ["Descartar el análisis asintótico por constantes de hardware.", "Describe correctamente el concepto: Errores frecuentes de principiantes y cómo evitarlos en producción", "Asumir que más líneas de código siempre implican mayor eficiencia."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Errores frecuentes de principiantes y cómo evitarlos en producción. Las otras opciones representan malentendidos típicos."
        },
        {
          question: "Según el temario de 'MÓDULO 10: APLICACIONES EN EL MUNDO REAL', ¿cuál afirmación es correcta sobre: Checklist de repaso previo a evaluación o grabación de clase?",
          options: ["Asumir que más líneas de código siempre implican mayor eficiencia.", "Describe correctamente el concepto: Checklist de repaso previo a evaluación o grabación de clase", "Aplicar la regla solo en el best case ignorando el peor escenario."],
          answerIndex: 1,
          explanation: "El ítem del módulo establece que Checklist de repaso previo a evaluación o grabación de clase. Las otras opciones representan malentendidos típicos."
        }
      ]
  }];

export const BIG_O_DATA = [
  { n: 1, constant: 1, log: 0, linear: 1, nlog: 0, quadratic: 1, exponential: 2 },
  { n: 10, constant: 1, log: 2.3, linear: 10, nlog: 23, quadratic: 100, exponential: 1024 },
  { n: 20, constant: 1, log: 3, linear: 20, nlog: 60, quadratic: 400, exponential: 3000 },
  { n: 30, constant: 1, log: 3.4, linear: 30, nlog: 102, quadratic: 900, exponential: 3000 },
  { n: 40, constant: 1, log: 3.7, linear: 40, nlog: 148, quadratic: 1600, exponential: 3000 },
  { n: 50, constant: 1, log: 3.9, linear: 50, nlog: 195, quadratic: 2500, exponential: 3000 },
];
