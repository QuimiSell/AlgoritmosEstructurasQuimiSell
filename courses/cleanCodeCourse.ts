import { Course } from '../domain/models';

export const CLEAN_CODE_COURSE: Course = {
  id: 'clean_code_solid',
  title: 'Clean Code, SOLID y Patrones de Diseño',
  shortTitle: 'Clean Code & SOLID',
  badge: 'Arquitectura & Calidad de Software',
  icon: '🧼',
  description: 'Basado en los principios de Robert C. Martin (Tío Bob) y el Gang of Four (GoF): aprende a escribir código limpio, mantenible, escalable y libre de deuda técnica.',
  whyStudyTitle: '🧠 ¿Por qué estudiar Clean Code y SOLID?',
  whyStudyText: 'Cualquier programador puede escribir código que una computadora entienda; los ingenieros de elite escriben código que los humanos pueden entender. Este curso transmite los principios fundamentales planteados por Robert C. Martin (Tío Bob) en su célebre libro "Clean Code": funciones pequeñas, nombres expresivos, acoplamiento débil, alta cohesión y los 5 Principios SOLID.',
  studyPlanReasons: [
    { id: 1, title: "Filosofía Clean Code y Nombres Expresivos", why: "Escribir código intencional y autodocumentado según el Tío Bob." },
    { id: 2, title: "Funciones y Manejo de Excepciones", why: "Diseño de funciones que hacen una sola cosa y gestión limpia de errores." },
    { id: 3, title: "Comentarios y Regla del Boy Scout", why: "Dejar el código más limpio de como lo encontraste y eliminar comentarios superfluos." },
    { id: 4, title: "Single Responsibility Principle (SRP)", why: "Una sola razón para cambiar por módulo o clase." },
    { id: 5, title: "Open/Closed Principle (OCP)", why: "Abierto para extensión, cerrado para modificación mediante abstracción." },
    { id: 6, title: "Liskov Substitution Principle (LSP)", why: "Garantizar que las subclases puedan sustituir a sus clases base sin romper contratos." },
    { id: 7, title: "Interface Segregation & Dependency Inversion", why: "Interfaces específicas e inyección de dependencias (DIP)." },
    { id: 8, title: "Patrones Creacionales (GoF)", why: "Singleton, Factory Method, Abstract Factory, Builder y Prototype." },
    { id: 9, title: "Patrones Estructurales (GoF)", why: "Adapter, Decorator, Facade, Composite y Proxy." },
    { id: 10, title: "Patrones de Comportamiento (GoF)", why: "Strategy, Observer, Command, State y Chain of Responsibility." }
  ],
  labChallenge: {
    title: "Refactorización de un Sistema Legacy con Principios SOLID y Patrón Strategy",
    badge: "Laboratorio de Clean Code",
    description: "Tu objetivo es tomar un bloque de código 'spaghetti' monolítico lleno de condicionales anidadas `if-else` y refactorizarlo aplicando el Principio de Responsabilidad Única (SRP), Inversión de Dependencias (DIP) y el Patrón de Diseño Strategy.",
    requirements: [
      "• Eliminar condicionales anidadas: Reemplazar estructuras `switch`/`if` por la interfaz Strategy.",
      "• Inyección de Dependencias: Pasar los servicios concretos mediante interfaces en el constructor.",
      "• Regla del Boy Scout: Renombrar variables y extraer funciones cortas de menos de 10 líneas.",
      "• Pruebas Unitarias: Garantizar que el comportamiento externo sea 100% idéntico tras el refactor."
    ],
    cleanCodeRules: [
      "• Comentarios Cero: El código refactorizado debe explicarse por sí mismo a través de nombres expresivos.",
      "• Funciones Pequeñas: Ninguna función debe superar las 10-12 líneas de extensión.",
      "• Lenguajes Habilitados: Desarrollar en React (TypeScript/JS) o en Python."
    ],
    emailSubject: "Laboratorio QuimiSell: Reto Clean Code - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,\n\nAdjunto el enlace a mi repositorio público de GitHub con la solución al Reto del Laboratorio de Clean Code, SOLID y Patrones de Diseño.\n\nEnlace del repositorio: [PEGA TU ENLACE DE GITHUB AQUÍ]\n\nTecnología utilizada (React o Python):\n- \n\nExplicación breve de las refactorizaciones aplicadas:\n- \n\nSaludos cordiales.`
  },
  modules: [
    {
      id: 1,
      title: "MÓDULO 1: FILOSOFÍA CLEAN CODE Y NOMBRES EXPRESIVOS",
      description: "Las enseñanzas de Robert C. Martin (Tío Bob): código autodocumentado, nombres intencionados y la regla del Boy Scout.",
      items: [
        "El costo real del código desordenado y la deuda técnica.",
        "Nombres con intención reveladora (Evitar variables a1, temp, data).",
        "Hacer distinciones con sentido y evitar desinformación.",
        "Nombres pronunciables y buscables en la base de código.",
        "La Regla del Boy Scout: 'Deja el campamento más limpio de como lo encontraste'."
      ],
      content: "Robert C. Martin (Tío Bob) abre su célebre libro 'Clean Code' con una verdad irrefutable: la proporción de tiempo dedicada a leer código frente a escribirlo es de más de 10 a 1. Escribir nombres expresivos como `dias_desde_ultimo_modificacion` en lugar de `d` le ahorra a tus compañeros (y a ti mismo en el futuro) horas de adivinanza. La Regla del Boy Scout exige que en cada commit dejas el módulo ligeramente mejor estructurado de como lo encontraste.",
      codeSnippet: `# Bad Code (Código sucio)
def d(l):
    s = 0
    for x in l:
        if x.i == True and x.a > 18:
            s += x.p
    return s

# Clean Code (Tío Bob)
class Usuario:
    def __init__(self, esta_activo: bool, edad: int, puntos: int):
        self.esta_activo = esta_activo
        self.edad = edad
        self.puntos = puntos

def calcular_puntos_totales_usuarios_activos(usuarios: list[Usuario]) -> int:
    return sum(
        u.puntos for u in usuarios 
        if u.esta_activo and u.edad > 18
    )`,
      quiz: [
        {
          question: "¿Cuál es la famosa 'Regla del Boy Scout' formulada por el Tío Bob para el desarrollo de software?",
          options: ["No trabajar los fines de semana", "Dejar la base de código siempre más limpia de como la encontraste en cada commit", "Usar siempre comentarios en cada línea"],
          answerIndex: 1,
          explanation: "La regla impulsa la refactorización continua: pequeñas mejoras constantes evitan la acumulación de deuda técnica."
        },
        {
          question: "¿Por qué se desaconseja usar nombres de variables como `d`, `temp` o `data` según Clean Code?",
          options: ["Porque no revelan la intención del negocio y obligan al lector a adivinar su propósito", "Porque Python no las permite", "Porque ocupan mucho espacio en disco"],
          answerIndex: 0,
          explanation: "Un nombre limpio debe comunicar por qué existe, qué hace y cómo se usa sin requerir comentarios."
        },
        {
          question: "Según Robert C. Martin, ¿cuál es la relación aproximada entre el tiempo dedicado a LEER código vs ESCRIBIR código nuevo?",
          options: ["1 a 1", "Más de 10 a 1 dedicado a leer código", "1 a 100 dedicado a escribir"],
          answerIndex: 1,
          explanation: "Leemos código constantemente para entender dónde insertar cambios; por ello, optimizar la legibilidad acelera el desarrollo."
        },
        {
          question: "¿Cuál de los siguientes nombres de función cumple MEJOR con los principios de Clean Code?",
          options: ["proc_usr()", "obtener_usuarios_activos_con_suscripcion_vencida()", "fn1()"],
          answerIndex: 1,
          explanation: "Es un nombre largo pero totalmente descriptivo que revela la intención exacta de la función sin ambigüedades."
        },
        {
          question: "¿Qué es la 'Deuda Técnica' en software?",
          options: ["El dinero invertido en servidores", "El costo futuro acumulado de haber tomado atajos o escrito código rápido y desordenado en el presente", "Un crédito bancario"],
          answerIndex: 1,
          explanation: "La deuda técnica representa el tiempo adicional de desarrollo que se debe pagar por no haber diseñado código limpio desde el principio."
        }
      ]
    },
    {
      id: 2,
      title: "MÓDULO 2: FUNCIONES, PARÁMETROS Y MANEJO DE ERRORES",
      description: "Reglas para escribir funciones pequeñas, el principio de nivel único de abstracción y el uso de excepciones.",
      items: [
        "Las funciones deben ser PEQUEÑAS (idealmente de menos de 10-15 líneas).",
        "Hacer UNA sola cosa (Single Responsibility a nivel de función).",
        "Un solo nivel de abstracción por función (Single Level of Abstraction).",
        "Evitar argumentos de bandera (Flag Arguments booleanos).",
        "Usar Excepciones en lugar de retornar códigos de error nulos."
      ],
      content: "La primera regla de las funciones de Tío Bob es: deben ser pequeñas. La segunda regla es: deben ser AÚN más pequeñas. Una función debe realizar una sola tarea y hacerla bien. Cuando le pasas un booleano como parámetro a una función (ej: `procesar_usuario(usuario, es_admin=True)`), estás indicando implícitamente que la función hace dos cosas distintas según la bandera. Se deben dividir en dos funciones independientes: `procesar_usuario_normal` y `procesar_usuario_admin`.",
      codeSnippet: `# Bad Practice: Flag Arguments & Códigos de Error
def crear_usuario(nombre, es_admin):
    if es_admin:
        print("Creando admin...")
    else:
        print("Creando usuario normal...")

# Clean Practice: Funciones separadas y manejo de Excepciones
class UsuarioDuplicadoError(Exception): pass

def crear_usuario_normal(nombre: str):
    if not nombre: raise ValueError("El nombre no puede estar vacío")
    print(f"Usuario {nombre} creado.")

def crear_usuario_administrador(nombre: str):
    crear_usuario_normal(nombre)
    print(f"Permisos de administrador concedidos a {nombre}.")`,
      quiz: [
        {
          question: "¿Por qué se desaconsejan los 'Flag Arguments' (parámetros booleanos como `hacer_algo(flag=True)`) según Clean Code?",
          options: ["Porque indican que la función hace más de una cosa según el valor del booleano", "Porque los booleanos ocupan mucha memoria", "Porque no funcionan en TypeScript"],
          answerIndex: 0,
          explanation: "Un parámetro booleano divide la función en dos caminos de ejecución diferentes, violando el principio de que la función haga una sola cosa."
        },
        {
          question: "¿Cuál es el número ideal de argumentos para una función limpia según Robert C. Martin?",
          options: ["0 (niládica) o 1 (monádica)", "Al menos 5 argumentos", "Indiferente"],
          answerIndex: 0,
          explanation: "Cuantos menos argumentos tenga una función, más fácil es de entender, probar y mantener. 3 o más argumentos deben ser agrupados en un objeto."
        },
        {
          question: "¿Qué recomienda Clean Code respecto al manejo de errores en lugar de retornar códigos numéricos (-1, 0, NULL)?",
          options: ["Retornar siempre None", "Lanzar Excepciones explícitas (Exceptions) para separar el flujo normal del manejo de errores", "Ignorar los errores"],
          answerIndex: 1,
          explanation: "El uso de Excepciones aísla la lógica de negocio en bloques `try-catch` limpios en lugar de contaminar el flujo con condicionales `if error != null`."
        },
        {
          question: "¿En qué consiste el Principio de 'Un Solo Nivel de Abstracción' por función?",
          options: ["Mezclar detalles de bajo nivel de memoria con lógica de alto nivel", "Que todas las instrucciones dentro de una función pertenezcan al mismo nivel de detalle conceptual", "Usar solo variables globales"],
          answerIndex: 1,
          explanation: "Evita mezclar sintaxis HTML o manipulación de strings con llamadas a APIs de alto nivel dentro de la misma función."
        },
        {
          question: "¿Cuál es la extensión recomendada para una función limpia?",
          options: ["Más de 100 líneas", "Pequeña, idealmente de menos de 15 a 20 líneas de código", "Exactamente 50 líneas"],
          answerIndex: 1,
          explanation: "Las funciones cortas son fáciles de leer de un vistazo, fáciles de testear unitariamente y enfocadas en una única responsabilidad."
        }
      ]
    },
    {
      id: 3,
      title: "MÓDULO 3: COMENTARIOS Y FORMATO DE CÓDIGO",
      description: "Cuándo los comentarios son un síntoma de mal código, formato vertical/horizontal y la ley de la claridad.",
      items: [
        "El mito del código comentado: 'No comentes mal código, reescríbelo'.",
        "Comentarios verdaderamente necesarios (Legal, advertencia de consecuencias, TODOs legítimos).",
        "Comentarios ruidosos, redundantes y obsoletos.",
        "Formato Vertical: La metáfora del periódico (de lo general a lo específico).",
        "Formato Horizontal: Anchura de líneas y sangrado transparente."
      ],
      content: "Tío Bob afirma: 'Los comentarios son, en el mejor de los casos, un mal necesario. Cada vez que escribes un comentario, deberías sentir que has fallado en expresarte mediante el código'. Los comentarios suelen mentir porque el código evoluciona y nadie actualiza los comentarios. En lugar de escribir `# Comprueba si el usuario tiene más de 18 años`, extrae esa condición a una función llamada `es_mayor_de_edad()`. El formato vertical debe leerse como un periódico: el concepto de alto nivel arriba y los detalles abajo.",
      codeSnippet: `# Mal comentario (redundante y mentiroso si cambia la condición)
# Suma 1 a la variable i
i = i + 1 

# Mal uso: Comentario para explicar condición compleja
# if u.status == 1 and u.age > 18 and u.verified:

# Clean Code: El código ES la explicación
def es_usuario_valido_para_compra(usuario) -> bool:
    tiene_edad_legal = usuario.edad >= 18
    cuenta_verificada = usuario.esta_verificado
    cuenta_activa = usuario.estado == "ACTIVO"
    return tiene_edad_legal and cuenta_verificada and cuenta_activa`,
      quiz: [
        {
          question: "Según Robert C. Martin, ¿cuál es la postura principal sobre los comentarios en el código?",
          options: ["Comentar absolutamente cada línea de código", "Un comentario suele ser un síntoma de que el código no es lo suficientemente claro por sí mismo", "Los comentarios son obligatorios por ley"],
          answerIndex: 1,
          explanation: "Un código limpio expresado con nombres correctos y funciones extraídas no requiere comentarios explicativos."
        },
        {
          question: "¿Por qué los comentarios tienden a convertirse en 'mentiras' con el tiempo?",
          options: ["Porque los compiladores los alteran", "Porque el código se modifica durante el mantenimiento y los desarrolladores casi nunca actualizan los comentarios", "Porque los hackers los cambian"],
          answerIndex: 1,
          explanation: "El código es la única verdad ejecutable; los comentarios quedan obsoletos y confunden a los futuros mantenedores."
        },
        {
          question: "¿Qué representa la 'Metáfora del Periódico' en el formato vertical de un archivo de código?",
          options: ["Que el código debe publicarse diariamente", "Que las funciones de alto nivel deben ir arriba como los titulares, y los detalles de implementación abajo", "Usar columnas de texto"],
          answerIndex: 1,
          explanation: "El archivo se lee de arriba hacia abajo: los conceptos principales encabezan el archivo y los detalles auxiliares se despliegan más abajo."
        },
        {
          question: "¿Cuál de los siguientes es un ejemplo de comentario LEGÍTIMO y útil?",
          options: ["# Constructor de la clase", "# i = i + 1", "// ADVERTENCIA: Este test tarda 10 minutos en ejecutarse porque conecta a la base de datos de homologación"],
          answerIndex: 2,
          explanation: "Los comentarios que advierten sobre consecuencias no obvias o requisitos de entorno son valiosos para el equipo."
        },
        {
          question: "¿Qué distancia o densidad horizontal se sugiere mantener en las líneas de código?",
          options: ["Líneas cortas (idealmente no superar 80-120 caracteres para evitar scroll horizontal)", "Líneas de 500 caracteres", "Sin sangrado ni tabulación"],
          answerIndex: 0,
          explanation: "Mantener líneas de longitud moderada permite leer el código completo sin tener que desplazarse horizontalmente en la pantalla."
        }
      ]
    },
    {
      id: 4,
      title: "MÓDULO 4: PRINCIPIO S - SINGLE RESPONSIBILITY PRINCIPLE (SRP)",
      description: "Una sola razón para cambiar. Alta cohesión, bajo acoplamiento y separación de aspectos.",
      items: [
        "Definición exacta de SRP: 'Un módulo o clase debe tener una y solo una razón para cambiar'.",
        "Identificación de 'razones para cambiar' asociadas a actores de negocio.",
        "Separación de la Lógica de Negocio de la Lógica de Persistencia / UI.",
        "Síntomas de violación de SRP: Clases Dios (God Classes) y archivos gigantes.",
        "Cohesión: El grado en que los métodos de una clase trabajan sobre sus atributos."
      ],
      content: "El Primer Principio SOLID es el **Single Responsibility Principle (SRP)**. La definición del Tío Bob es muy específica: 'Un módulo debe ser responsable ante un solo actor de negocio'. Si una clase `ReporteEmpleado` calcula el salario para Finanzas y además imprime el formato PDF para Recursos Humanos, tiene DOS razones para cambiar. Si Finanzas cambia el cálculo de horas extra, podrías romper accidentalmente la impresión de RRHH. SRP exige separar estas responsabilidades en clases independientes.",
      codeSnippet: `# Violación de SRP: Una sola clase calcula salario, guarda en DB e imprime PDF
class EmpleadoSpaghetti:
    def calcular_salario(self): pass
    def guardar_en_base_datos(self): pass
    def generar_pdf_reporte(self): pass

# Aplicación estricta de SRP: Clases especializadas
class CalculadoraFinancieraEmpleado:
    def calcular_salario(self, empleado): pass

class RepositorioEmpleadoDB:
    def guardar(self, empleado): pass

class GeneradorReportePDFEmpleado:
    def generar_pdf(self, empleado): pass`,
      quiz: [
        {
          question: "¿Cuál es la definición exacta del Principio de Responsabilidad Única (SRP)?",
          options: ["Que una clase solo debe tener un método", "Que una clase o módulo debe tener una, y solo una, razón para cambiar (asociada a un único actor de negocio)", "Que un programador debe hacer una sola tarea"],
          answerIndex: 1,
          explanation: "SRP establece que los cambios requeridos por diferentes actores o departamentos de negocio deben impactar módulos separados."
        },
        {
          question: "¿Qué es una 'Clase Dios' (God Class) en arquitectura de software?",
          options: ["Una clase perfecta", "Un antipatrón de diseño donde una sola clase acumula decenas de responsabilidades y miles de líneas de código", "Una clase base de TypeScript"],
          answerIndex: 1,
          explanation: "Las Clases Dios violan abiertamente SRP: intentan manejar interfaz, base de datos, lógica y reglas de negocio en un solo archivo."
        },
        {
          question: "¿Qué mide la 'Cohesión' en una clase orientada a objetos?",
          options: ["El número de comentarios", "El grado de relación e interacción entre los métodos de la clase y sus campos de atributos internos", "La velocidad del procesador"],
          answerIndex: 1,
          explanation: "Alta cohesión significa que la mayoría de los métodos de la clase manipulan los mismos atributos, indicando que la clase está enfocada."
        },
        {
          question: "Si la clase `Factura` modifica su código tanto cuando la SUNAT/SAT cambia los impuestos como cuando el equipo de UI cambia el logo en pantalla, ¿qué ocurre?",
          options: ["Cumple SRP perfectamente", "Viola el principio SRP porque responde a dos actores/razones de cambio distintas", "Es una clase inmutable"],
          answerIndex: 1,
          explanation: "Responde a dos razones de cambio independientes (reglas fiscales vs diseño visual), por lo que viola SRP."
        },
        {
          question: "¿Cuál es el beneficio directo de aplicar SRP a la base de código?",
          options: ["Sistemas modulares, cambios aislados sin efectos secundarios inesperados y pruebas unitarias más sencillas", "El código se ejecuta 100 veces más rápido", "Desaparecen las bases de datos"],
          answerIndex: 0,
          explanation: "Al separar responsabilidades, modificar una regla de negocio no rompe ni afecta a las demás partes del sistema."
        }
      ]
    },
    {
      id: 5,
      title: "MÓDULO 5: PRINCIPIO O - OPEN/CLOSED PRINCIPLE (OCP)",
      description: "Abierto para extensión, cerrado para modificación. Uso de interfaces y polimorfismo.",
      items: [
        "Definición de OCP: 'Las entidades de software deben estar abiertas para extensión, pero cerradas para modificación'.",
        "El peligro de agregar nuevos tipos editando bloques `switch` / `if-else` existentes.",
        "Uso de Abstracciones (Interfaces y Clases Abstractas) para lograr OCP.",
        "Inyección de nuevos comportamientos creando nuevas clases sin alterar el código probado.",
        "Relación entre OCP y los Patrones de Diseño (Strategy, Decorator)."
      ],
      content: "El segundo principio SOLID es el **Open/Closed Principle (OCP)**. Afirma que deberías poder extender el comportamiento de un sistema SIN modificar su código fuente existente ya probado y en producción. Si para agregar un nuevo método de pago (ej: PayPal) tienes que modificar la clase `ProcesadorPagos` agregando un `else if (tipo == 'PAYPAL')`, estás violando OCP. La solución es crear una interfaz `MetodoPago` y agregar una nueva clase `PagoPayPal` que la implemente.",
      codeSnippet: `# Violación de OCP: Editar la clase para cada nuevo descuento
class CalculadorDescuentoSpaghetti:
    def calcular(self, tipo_cliente, monto):
        if tipo_cliente == "REGULAR": return monto * 0.95
        elif tipo_cliente == "VIP": return monto * 0.80
        # ¡Tuvimos que modificar esta clase para agregar PREMIUM!

# Clean OCP: Abierto a extensión, cerrado a modificación mediante polimorfismo
from abc import ABC, abstractmethod

class EstrategiaDescuento(ABC):
    @abstractmethod
    def aplicar_descuento(self, monto: float) -> float: pass

class DescuentoVIP(EstrategiaDescuento):
    def aplicar_descuento(self, monto: float) -> float: return monto * 0.80

class DescuentoPremium(EstrategiaDescuento): # ¡Nuevo tipo sin modificar código previo!
    def aplicar_descuento(self, monto: float) -> float: return monto * 0.70`,
      quiz: [
        {
          question: "¿Qué establece el Principio de Abierto/Cerrado (OCP)?",
          options: ["Que el software debe estar cerrado a los usuarios", "Que los módulos deben estar abiertos para su extensión (agregar nuevas funcionalidades) pero cerrados a su modificación (no editar código ya probado)", "Que todo el código debe ser público"],
          answerIndex: 1,
          explanation: "OCP busca que agregues características creando nuevo código en lugar de modificar clases existentes probadas en producción."
        },
        {
          question: "Si para agregar un nuevo tipo de reporte en tu sistema tienes que modificar una estructura `switch` existente de 20 casos, ¿qué principio estás violando?",
          options: ["SRP", "OCP (Open/Closed Principle)", "LSP"],
          answerIndex: 1,
          explanation: "Editar condicionales existentes para incorporar nuevos casos viola OCP; debe resolverse mediante polimorfismo o interfaces."
        },
        {
          question: "¿Cuál es la herramienta principal en Programación Orientada a Objetos para implementar OCP?",
          options: ["Variables globales", "Abstracciones (Interfaces, Clases Abstractas y Polimorfismo)", "Bucles while"],
          answerIndex: 1,
          explanation: "Las interfaces permiten definir un contrato estático sobre el cual se pueden conectar ilimitadas implementaciones nuevas."
        },
        {
          question: "¿Qué riesgo se evita al cumplir con el principio OCP?",
          options: ["Introducir errores o regresiones en características antiguas que ya funcionaban bien al modificar su código fuente", "Que la computadora se apague", "Usar mucha RAM"],
          answerIndex: 0,
          explanation: "Al no tocar el código maduro existente, se elimina la posibilidad de romper funcionalidades previas en producción."
        },
        {
          question: "¿Qué patrón de diseño del GoF es una aplicación directa del principio OCP?",
          options: ["Patrón Strategy (Estrategia)", "Patrón Singleton", "Patrón Prototype"],
          answerIndex: 0,
          explanation: "Strategy permite intercambiar algoritmos e inyectar nuevas estrategias de forma transparente sin tocar el cliente."
        }
      ]
    },
    {
      id: 6,
      title: "MÓDULO 6: PRINCIPIO L - LISKOV SUBSTITUTION PRINCIPLE (LSP)",
      description: "Sustituibilidad de subclases, contratos de interfaz, precondiciones y postcondiciones.",
      items: [
        "Definición de Barbara Liskov (1987) para subtipado de datos.",
        "Si S es un subtipo de T, los objetos de tipo T deben poder reemplazarse por objetos de tipo S sin alterar la corrección del programa.",
        "El dilema clásico del Cuadrado y el Rectángulo.",
        "Reglas de Contrato: Precondiciones no pueden ser reforzadas en la subclase.",
        "Postcondiciones y la preservación de invariantes."
      ],
      content: "El tercer principio SOLID es el **Liskov Substitution Principle (LSP)**, formulado por Barbara Liskov. Establece que los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin que el programa falle o se comporte erróneamente. El ejemplo clásico es la clase `Cuadrado` heredando de `Rectangulo`. Si un método cambia el ancho del rectángulo esperando que el alto no cambie, y el Cuadrado altera ambas dimensiones a la vez, se violan los contratos de LSP.",
      codeSnippet: `# Violación de LSP: Cuadrado hereda de Rectángulo
class Rectangulo:
    def __init__(self, ancho: float, alto: float):
        self.ancho = ancho
        self.alto = alto

class CuadradoViolador(Rectangulo):
    def __init__(self, lado: float):
        super().__init__(lado, lado)
    # Al cambiar el ancho, altera involuntariamente el alto
    def set_ancho(self, a): 
        self.ancho = a; self.alto = a

def probar_rectangulo(r: Rectangulo):
    r.ancho = 10
    r.alto = 5
    # Esperamos área = 50. ¡Para Cuadrado dará 25! (Violación de LSP)
    assert r.ancho * r.alto == 50, "¡LSP Violado!`,
      quiz: [
        {
          question: "¿Qué establece el Principio de Sustitución de Liskov (LSP)?",
          options: ["Que las subclases deben tener el mismo nombre", "Que las clases derivadas deben poder sustituir a sus clases base sin romper la corrección ni el contrato del programa", "Que no se debe usar herencia"],
          answerIndex: 1,
          explanation: "LSP garantiza que el polimorfismo sea seguro: cualquier subclase debe cumplir los contratos y expectativas de la clase padre."
        },
        {
          question: "En el problema del Cuadrado herederando de Rectángulo, ¿por qué se viola LSP si un método modifica el ancho?",
          options: ["Porque el Cuadrado modifica también el alto violando las invariantes y expectativas de comportamiento del Rectángulo", "Porque el cuadrado no es una figura", "Porque es muy lento"],
          answerIndex: 0,
          explanation: "El cliente que recibe un Rectángulo espera modificar el ancho manteniendo fijo el alto; el Cuadrado rompe esa expectativa."
        },
        {
          question: "Si una subclase lanza una excepción del tipo `NotImplementedError` en un método heredado de la interfaz base, ¿qué principio está violando?",
          options: ["LSP (Liskov Substitution Principle)", "SRP", "Ninguno"],
          answerIndex: 0,
          explanation: "Si el cliente invoca el método esperando ejecución y la subclase lanza un error por no implementarlo, rompe la sustituibilidad."
        },
        {
          question: "Respecto a las Precondiciones en las subclases, ¿qué exige LSP?",
          options: ["Las subclases NO pueden exigir precondiciones más estrictas que la clase base", "Las subclases deben borrar todas las variables", "Las precondiciones son obligatorias"],
          answerIndex: 0,
          explanation: "La subclase debe aceptar al menos los mismos insumos que la clase padre; no puede poner restricciones adicionales."
        },
        {
          question: "¿Cuál es la recomendación de diseño preferida ante relaciones donde la herencia rompe LSP?",
          options: ["Usar Composición en lugar de Herencia ('Favor composition over inheritance')", "Ignorar el error", "Borrar la interfaz"],
          answerIndex: 0,
          explanation: "Cuando una relación 'es-un' falla el test semántico de Liskov, se debe usar composición ('tiene-un') mediante atributos internos."
        }
      ]
    },
    {
      id: 7,
      title: "MÓDULO 7: PRINCIPIOS I Y D - INTERFACE SEGREGATION & DEPENDENCY INVERSION",
      description: "Interfaces específicas para cada cliente (ISP) e Inversión de Dependencias mediante inyección (DIP).",
      items: [
        "Interface Segregation Principle (ISP): 'Ningún cliente debe ser forzado a depender de métodos que no usa'.",
        "Diseño de interfaces enfocadas y de granularidad fina.",
        "Dependency Inversion Principle (DIP): Módulos de alto nivel no deben depender de módulos de bajo nivel.",
        "Ambos deben depender de Abstracciones (Interfaces).",
        "Inyección de Dependencias (DI): Constructor Injection y contenedores IoC."
      ],
      content: "Los últimos dos principios SOLID son **ISP** y **DIP**. **ISP** enseña que es preferible tener muchas interfaces pequeñas y especializadas en lugar de una interfaz gigante con decenas de métodos no relacionados. **DIP** establece la regla de oro de la arquitectura limpia: 'Los módulos de alto nivel (lógica de negocio) no deben depender de módulos de bajo nivel (DB, UI, HTTP); ambos deben depender de abstracciones'. Al inyectar la interfaz de la base de datos por el constructor, la lógica de negocio se vuelve independiente del motor SQL o NoSQL.",
      codeSnippet: `# Violación de DIP: La clase de Alto Nivel depende directamente de PostgresDB (Bajo Nivel)
class ServicioUsuarioSpaghetti:
    def __init__(self):
        self.db = PostgresDatabaseDirecta() # ¡Acoplamiento rígido de bajo nivel!

# Clean DIP: Ambas capas dependen de una Interfaz Abstracta
from abc import ABC, abstractmethod

class RepositorioUsuarioInterface(ABC):
    @abstractmethod
    def buscar_por_id(self, user_id: int): pass

class ServicioUsuarioClean:
    # Inyección de Dependencia por Constructor (DI)
    def __init__(self, repo: RepositorioUsuarioInterface):
        self.repo = repo

    def procesar(self, user_id: int):
        user = self.repo.buscar_por_id(user_id)
        # Lógica de negocio pura...`,
      quiz: [
        {
          question: "¿Qué afirma el Principio de Segregación de Interfaces (ISP)?",
          options: ["Que todos los métodos deben estar en una sola interfaz", "Que los clientes no deben ser forzados a depender de interfaces o métodos que no utilizan", "Que no se deben usar interfaces"],
          answerIndex: 1,
          explanation: "ISP propone crear interfaces delgadas y específicas para evitar que una clase tenga que implementar métodos vacíos o irrelevantes."
        },
        {
          question: "¿Qué establece el Principio de Inversión de Dependencias (DIP)?",
          options: ["Que los módulos de alto nivel (negocio) no deben depender de detalles de bajo nivel (DB, librerías); ambos deben depender de abstracciones", "Que las dependencias se descargan de internet", "Que las bases de datos deben ir primero"],
          answerIndex: 0,
          explanation: "DIP invierte la dirección tradicional de acoplamiento: la lógica central depende de interfaces, y los detalles externos las implementan."
        },
        {
          question: "¿Qué es la 'Inyección de Dependencias' (Dependency Injection - DI)?",
          options: ["Un virus informático", "Un patrón donde las dependencias que necesita un objeto le son suministradas desde el exterior (ej: por el constructor) en lugar de instanciarlas él mismo", "Un script de compilación"],
          answerIndex: 1,
          explanation: "La inyección por constructor entrega las instancias concretas mediante interfaces, desarticulando el acoplamiento rígido."
        },
        {
          question: "¿Qué beneficio principal ofrece DIP al realizar Pruebas Unitarias (Unit Testing)?",
          options: ["Ninguno", "Permite sustituir fácilmente la base de datos real o APIs externas por objetos simulados (Mocks / Stubs) durante los tests", "Hace que los tests corran sin CPU"],
          answerIndex: 1,
          explanation: "Al depender de interfaces, en los entornos de prueba se inyectan repositorios falsos en memoria de forma instantánea."
        },
        {
          question: "Si la interfaz `ImpresoraMultifuncional` obliga a una impresora básica a implementar un método `escanear_documento()` que no soporta, ¿qué principio se viola?",
          options: ["ISP (Interface Segregation Principle)", "OCP", "DIP"],
          answerIndex: 0,
          explanation: "Obligar a una clase a implementar contratos que no utiliza es una violación directa del principio ISP."
        }
      ]
    },
    {
      id: 8,
      title: "MÓDULO 8: PATRONES DE DISEÑO CREACIONALES (GANG OF FOUR)",
      description: "Mecanismos de creación de objetos flexibles: Singleton, Factory Method, Abstract Factory, Builder y Prototype.",
      items: [
        "Origen de los Patrones de Diseño (Libro GoF - Gang of Four 1994).",
        "Patrón Singleton: Garantizar una única instancia global y cuándo EVITARLO.",
        "Patrón Factory Method: Delegar la instanciación a subclases especializadas.",
        "Patrón Abstract Factory: Familias de objetos relacionados.",
        "Patrón Builder: Construcción paso a paso de objetos complejos."
      ],
      content: "Los Patrones Creacionales abstraen el proceso de instanciación de objetos. El patrón **Factory Method** define una interfaz para crear un objeto, permitiendo a las subclases decidir qué clase concreta instanciar. El patrón **Builder** separa la construcción de un objeto complejo de su representación (ideal para evitar constructores con 10 parámetros). El patrón **Singleton** asegura que una clase tenga una única instancia en todo el sistema (aunque debe usarse con precaución para no crear un estado global acoplado).",
      codeSnippet: `# Ejemplo del Patrón Builder en Python
class ConsultaSQL:
    def __init__(self):
        self.tabla = ""
        self.condiciones = []
        self.limite = None

class ConsultaSQLBuilder:
    def __init__(self):
        self._query = ConsultaSQL()

    def desde_tabla(self, tabla: str):
        self._query.tabla = tabla
        return self

    def donde(self, condicion: str):
        self._query.condiciones.append(condicion)
        return self

    def build((self) -> str:
        where_clause = f" WHERE {' AND '.join(self._query.condiciones)}" if self._query.condiciones else ""
        return f"SELECT * FROM {self._query.tabla}{where_clause}"

query = ConsultaSQLBuilder().desde_tabla("usuarios").donde("edad > 18").donde("activo = 1").build()
print(query) # SELECT * FROM usuarios WHERE edad > 18 AND activo = 1`,
      quiz: [
        {
          question: "¿Cuál es el propósito fundamental del patrón de diseño Singleton?",
          options: ["Crear copias múltiples de un objeto", "Garantizar que una clase tenga una única instancia en toda la aplicación y proporcionar un punto de acceso global a ella", "Eliminar variables"],
          answerIndex: 1,
          explanation: "Singleton restringe la creación a una única instancia (útil para pools de conexiones o loggers)."
        },
        {
          question: "¿Para qué sirve el patrón de diseño Builder (Constructor)?",
          options: ["Para construir objetos complejos paso a paso mediante una interfaz fluida, evitando constructores gigantes llenos de parámetros", "Para hacer bucles", "Para compilar C++"],
          answerIndex: 0,
          explanation: "Builder permite configurar objetos atributo por atributo de forma legible y segura."
        },
        {
          question: "¿Qué patrón creacional delega la lógica de instanciación a métodos de clases derivadas?",
          options: ["Factory Method (Método Fábrica)", "Observer", "Adapter"],
          answerIndex: 0,
          explanation: "Factory Method define el contrato de creación y deja que las subclases concretas decidan qué tipo de objeto instanciar."
        },
        {
          question: "¿Por qué el patrón Singleton suele ser considerado un antipatrón en arquitecturas modernas si se abusa de él?",
          options: ["Porque introduce un estado global acoplado y dificulta las pruebas unitarias aisladas con Mocks", "Porque es muy fácil de usar", "Porque borra el código"],
          answerIndex: 0,
          explanation: "El estado global de un Singleton crea acoplamiento oculto entre componentes y complica el aislamiento en los tests."
        },
        {
          question: "¿Qué patrón creacional permite clonar o duplicar objetos existentes sin depender de sus clases concretas?",
          options: ["Patrón Prototype (Prototipo)", "Singleton", "Facade"],
          answerIndex: 0,
          explanation: "Prototype delega la copia al propio objeto a través de una interfaz de clonado (`clone()`)."
        }
      ]
    },
    {
      id: 9,
      title: "MÓDULO 9: PATRONES DE DISEÑO ESTRUCTURALES (GANG OF FOUR)",
      description: "Composición de clases y objetos: Adapter, Decorator, Facade, Composite y Proxy.",
      items: [
        "Patrón Adapter: Adaptar interfaces incompatibles sin tocar el código fuente.",
        "Patrón Decorator: Añadir funcionalidades a un objeto dinámicamente en tiempo de ejecución.",
        "Patrón Facade (Fachada): Proporcionar una interfaz simplificada a un sistema complejo.",
        "Patrón Composite: Tratar objetos individuales y composiciones de objetos de forma uniforme.",
        "Patrón Proxy: Controlar el acceso a un objeto (Lazy loading, seguridad, almacenamiento en caché)."
      ],
      content: "Los Patrones Estructurales explican cómo ensamblar objetos y clases en estructuras más grandes manteniendo la flexibilidad. El patrón **Adapter** actúa como un conversor de enchufe de viaje entre dos interfaces incompatibles. El patrón **Decorator** envuelve un objeto para agregar responsabilidades dinámicamente sin usar herencia rígida. El patrón **Facade** ofrece un único punto de entrada sencillo para ocultar la complejidad de un subsistema con decenas de clases.",
      codeSnippet: `# Ejemplo del Patrón Decorator en Python
class NotificadorBase:
    def enviar(self, mensaje: str):
        print(f"Notificación por Email: {mensaje}")

class NotificadorDecorator:
    def __init__(self, wrapped: NotificadorBase):
        self.wrapped = wrapped
    def enviar(self, mensaje: str):
        self.wrapped.enviar(mensaje)

class DecoradorSMS(NotificadorDecorator):
    def enviar(self, mensaje: str):
        super().enviar(mensaje)
        print(f"Notificación adicional por SMS: {mensaje}")

notificador = DecoradorSMS(NotificadorBase())
notificador.enviar("¡Alerta de Seguridad!") 
# Envía Email y SMS dinámicamente`,
      quiz: [
        {
          question: "¿Cuál es el objetivo principal del patrón de diseño Adapter (Adaptador)?",
          options: ["Permitir que dos interfaces incompatibles trabajen juntas mediante una clase traductora intermedia", "Duplicar objetos", "Guardar datos en disco"],
          answerIndex: 0,
          explanation: "Adapter envuelve una clase existente incompatible para que coincida con la interfaz esperada por el cliente."
        },
        {
          question: "¿Cómo añade funcionalidades nuevas el patrón Decorator (Decorador)?",
          options: ["Mediante herencia múltiple", "Envolviendo el objeto original dentro de un objeto decorador que añade comportamiento dinámicamente en tiempo de ejecución", "Modificando el archivo .exe"],
          answerIndex: 1,
          explanation: "Decorator usa composición para envolver objetos de forma transparente agregando capas de comportamiento."
        },
        {
          question: "¿Para qué sirve el patrón Facade (Fachada)?",
          options: ["Para ofrecer una interfaz unificada y simplificada de alto nivel frente a un subsistema complejo con múltiples clases interconectadas", "Para ocultar errores", "Para crear instancias únicas"],
          answerIndex: 0,
          explanation: "Facade simplifica la interacción de los clientes ofreciendo una sola API limpia sobre un subsistema intrincado."
        },
        {
          question: "¿Qué patrón estructural controla y dega el acceso a un objeto remoto o costoso (ej: Carga perezosa o Caché)?",
          options: ["Patrón Proxy", "Patrón Adapter", "Patrón Singleton"],
          answerIndex: 0,
          explanation: "Proxy actúa como intermediario para interceptar llamadas al objeto real y aplicar control de acceso, caché o carga diferida."
        },
        {
          question: "¿Qué patrón estructural permite componer objetos en estructuras de árbol para tratar nodos y hojas de forma uniforme?",
          options: ["Patrón Composite", "Patrón Decorator", "Patrón Builder"],
          answerIndex: 0,
          explanation: "Composite representa jerarquías parte-todo donde contenedores y elementos individuales comparten la misma interfaz."
        }
      ]
    },
    {
      id: 10,
      title: "MÓDULO 10: PATRONES DE DISEÑO DE COMPORTAMIENTO (GANG OF FOUR)",
      description: "Interacción y distribución de responsabilidades: Strategy, Observer, Command, State y Chain of Responsibility.",
      items: [
        "Patrón Strategy: Encapsular algoritmos intercambiables en tiempo de ejecución.",
        "Patrón Observer: Suscripción y notificación de eventos 1 a N.",
        "Patrón Command: Encapsular una petición como un objeto (Undo / Redo).",
        "Patrón State: Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.",
        "Patrón Chain of Responsibility: Cadena de manejadores de peticiones independientes."
      ],
      content: "Los Patrones de Comportamiento gestionan los algoritmos y la asignación de responsabilidades entre objetos. El patrón **Strategy** permite seleccionar un algoritmo en tiempo de ejecución de forma intercambiable (aplicando el OCP). El patrón **Observer** establece una relación uno-a-muchos donde un objeto notifica automáticamente a sus suscriptores cuando su estado cambia (base de la arquitectura orientada a eventos). El patrón **Command** convierte solicitudes en objetos para respaldar operaciones de deshacer (Undo).",
      codeSnippet: `# Ejemplo del Patrón Observer en Python
class SistemaEventos:
    def __init__(self):
        self._suscriptores = []

    def suscribir(self, fn):
        self._suscriptores.append(fn)

    def notificar(self, evento: str):
        for s in self._suscriptores:
            s(evento)

emisor = SistemaEventos()
emisor.suscribir(lambda msg: print(f"Observer 1 recibió: {msg}"))
emisor.suscribir(lambda msg: print(f"Observer 2 recibió: {msg}"))

emisor.notificar("¡Pago de usuario procesado!")`,
      quiz: [
        {
          question: "¿Cuál es el propósito del patrón de diseño Strategy (Estrategia)?",
          options: ["Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables dinámicamente en tiempo de ejecución", "Crear copias de clases", "Conectar bases de datos"],
          answerIndex: 0,
          explanation: "Strategy permite al cliente variar el algoritmo utilizado de forma transparente sin alterar su código."
        },
        {
          question: "¿Qué patrón de comportamiento define una dependencia de uno a muchos para notificar cambios de estado automáticamente?",
          options: ["Patrón Observer (Observador)", "Patrón Singleton", "Patrón Proxy"],
          answerIndex: 0,
          explanation: "Observer permite a múltiples objetos escuchar y reaccionar ante los eventos emitidos por un sujeto."
        },
        {
          question: "¿Qué patrón de comportamiento encapsula una orden o solicitud como un objeto independiente para permitir operaciones de Deshacer (Undo)?",
          options: ["Patrón Command (Comando)", "Patrón Strategy", "Patrón Facade"],
          answerIndex: 0,
          explanation: "Command transforma peticiones en objetos con métodos `execute()` y `undo()`, facilitando colas de ejecución."
        },
        {
          question: "¿En qué consiste el patrón Chain of Responsibility (Cadena de Responsabilidad)?",
          options: ["En pasar una petición a lo largo de una cadena de manejadores donde cada uno decide si la procesa o la pasa al siguiente", "En encadenar cadenas de texto", "En usar un solo bucle"],
          answerIndex: 0,
          explanation: "Cadena de Responsabilidad desacopla al emisor del receptor pasando la solicitud por varios procesadores (ej: middlewares HTTP)."
        },
        {
          question: "¿Qué patrón de comportamiento permite a un objeto cambiar su lógica cuando su estado interno varía pareciendo cambiar de clase?",
          options: ["Patrón State (Estado)", "Patrón Template Method", "Patrón Iterator"],
          answerIndex: 0,
          explanation: "State modela máquinas de estado finitas encapsulando el comportamiento de cada estado en objetos separados."
        }
      ]
    }
  ]
};