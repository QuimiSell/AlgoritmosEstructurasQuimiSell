import { Course } from '../domain/models';

export const ANDROID_KOTLIN_COURSE: Course = {
  id: 'android_kotlin',
  title: 'Desarrollo Android con Kotlin: XML, Compose y Arquitectura',
  shortTitle: 'Android Kotlin',
  badge: 'Android Studio · XML · Jetpack Compose',
  icon: '🤖',
  description: '30 lecciones magistrales: módulos 1–10 con XML/Views, 11–30 con Jetpack Compose, Room, Retrofit+Gson, seguridad FLAG_SECURE anti-captura, CameraX (foto real, no grabación de pantalla) y flujo asistido con Cursor o Antigravity CLI.',
  whyStudyTitle: '📱 ¿Por qué Android Kotlin hoy?',
  whyStudyText: 'Android domina el móvil global. Kotlin es el lenguaje oficial, Compose acelera la UI y Room+Retrofit forman el 90% de apps productivas. Aprender FLAG_SECURE y permisos es lo que separa demos de apps listas para Play Store y casos como mensajes privados sin capturas.',
  studyPlanReasons: [
    { id: 1, title: "ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY", why: "Instalación, primer proyecto Empty Views, JDK y flujo asistido por IA en el IDE." },
    { id: 2, title: "GRADLE, MANIFEST Y PERMISOS DECLARATIVOS", why: "minSdk/targetSdk, namespaces, permisos normal vs dangerous." },
    { id: 3, title: "ACTIVITIES Y CICLO DE VIDA (XML)", why: "onCreate → onDestroy, savedInstanceState y rotación." },
    { id: 4, title: "LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS", why: "Jerarquía de Views, match_parent, wrap_content y @string." },
    { id: 5, title: "VIEWBINDING Y EVENTOS DE UI", why: "Eliminar findViewById; clicks, TextWatchers y Snackbar." },
    { id: 6, title: "MATERIAL DESIGN 3 EN XML", why: "Themes, MaterialButton, TextInputLayout y FAB." },
    { id: 7, title: "MENÚS, TOOLBAR Y DRAWER (XML)", why: "Options menu, ActionBar y NavigationView lateral." },
    { id: 8, title: "RECYCLERVIEW Y LISTADAPTER (XML)", why: "ViewHolder pattern, DiffUtil y paginación manual." },
    { id: 9, title: "FRAGMENTS Y VIEWPAGER2 (XML)", why: "FragmentTransaction, back stack y tabs con FragmentStateAdapter." },
    { id: 10, title: "INTEGRACIÓN UNIDAD VISTAS", why: "CRUD local en memoria, navegación y entrega del primer milestone." },
    { id: 11, title: "PRIMERA UI DECLARATIVA", why: "Activar Compose, @Composable, Preview y Material3." },
    { id: 12, title: "LAYOUT COMPOSE: MODIFIER, COLUMN, ROW", why: "Padding, weight, scroll y Box con alineación." },
    { id: 13, title: "ESTADO Y RECOMPOSICIÓN", why: "remember, mutableStateOf, rememberSaveable." },
    { id: 14, title: "STATE HOISTING Y UI STATE", why: "Elevar estado al ancestro común; eventos vs estado." },
    { id: 15, title: "VIEWMODEL + COMPOSE + LIFECYCLE", why: "viewModel(), collectAsStateWithLifecycle, SavedStateHandle." },
    { id: 16, title: "NAVEGACIÓN COMPOSE (NAVHOST)", why: "Rutas, NavController, deep links y back stack." },
    { id: 17, title: "ARQUITECTURA MVVM EN ANDROID", why: "Capas claras, unidirectional data flow, Use cases opcionales." },
    { id: 18, title: "CLEAN ARCHITECTURE Y CAPAS", why: "Dependencias hacia dentro, interfaces en dominio." },
    { id: 19, title: "COROUTINAS EN ANDROID", why: "suspend, Dispatchers.Main/IO, scopes y cancelación." },
    { id: 20, title: "FLOW, STATEFLOW Y UI REACTIVA", why: "Cold Flow, hot StateFlow, combine y debounce." },
    { id: 21, title: "SQLITE CON ANOTACIONES", why: "Entity, Dao, Database, migraciones y transacciones." },
    { id: 22, title: "ROOM + COMPOSE LISTAS REACTIVAS", why: "Flow from DAO, LazyColumn, empty states." },
    { id: 23, title: "RETROFIT + GSON Y APIS REST", why: "Interfaces HTTP, suspend, baseUrl y DTOs." },
    { id: 24, title: "OKHTTP, INTERCEPTORS Y ERRORES", why: "Auth header, logging, retry y códigos HTTP." },
    { id: 25, title: "RED Y SECRETOS", why: "HTTPS, Network Security Config, Keystore, ofuscación." },
    { id: 26, title: "FLAG_SECURE Y ANTI-CAPTURA", why: "Como chats privados WhatsApp: sin screenshots ni grabación de pantalla." },
    { id: 27, title: "PREVIEW Y CAPTURA DE FOTO", why: "Cámara hardware real; NO MediaProjection ni grabación pantalla." },
    { id: 28, title: "PERMISOS RUNTIME Y SCOPED STORAGE", why: "CAMERA, READ_MEDIA_IMAGES, requestPermissions contract." },
    { id: 29, title: "INYECCIÓN HILT Y MÓDULOS", why: "@HiltAndroidApp, @AndroidEntryPoint, provides Repos." },
    { id: 30, title: "APP PROFESIONAL COMPOSE", why: "Compose + Room + Retrofit + CameraX + FLAG_SECURE + release." }
  ],
  labChallenge: {
    title: "App QuimiSell Android: Compose + Room + API + Privacidad",
    badge: "Laboratorio Android Kotlin",
    description: "Entrega un APK/AAB firmado (debug aceptado con README) con al menos: 3 pantallas Compose, persistencia Room, una llamada Retrofit+Gson, captura de foto con CameraX (no screen record) y una pantalla sensible con FLAG_SECURE configurado.",
    requirements: [
      "• Kotlin + Android Studio; módulos 1–10 XML opcional en legado, UI principal en Compose.",
      "• Room con al menos una entidad y lista reactiva en UI.",
      "• Retrofit + Gson (o Moshi) contra API HTTPS pública o mock.",
      "• CameraX preview + captura; permisos runtime correctos.",
      "• Pantalla privada con FLAG_SECURE documentada (comportamiento captura/recents).",
      "• README con arquitectura MVVM, capturas y comando ./gradlew assembleDebug.",
    ],
    cleanCodeRules: [
      "• Paquetes por capa o feature; ViewModels sin contextos Android.",
      "• No API keys en Git; usar local.properties o CI secrets.",
      "• Coroutines en IO para red y base de datos.",
      "• Enviar enlace y APK al catedrático quimicabless2020@gmail.com según plantilla.",
    ],
    emailSubject: "Laboratorio QuimiSell: Android Kotlin - [Tu Nombre]",
    emailBodyTemplate: `Hola Profesor QuimiSell,

Adjunto mi proyecto Android Kotlin (Compose + Room + Retrofit + CameraX + FLAG_SECURE).

Repositorio: [ENLACE GITHUB]
APK/AAB: [ENLACE RELEASE O DRIVE]

Stack: Kotlin, Jetpack Compose, Room, Retrofit/Gson, CameraX
Pantalla FLAG_SECURE: [nombre Activity/Composable]

Saludos cordiales.`,
  },
  modules: [
{
      id: 1,
      title: "MÓDULO 1: ENTORNO — ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY [XML]",
      description: "Instalación, primer proyecto Empty Views, JDK y flujo asistido por IA en el IDE.",
      items: [
      "Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB.",
      "Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java.",
      "Estructura app/ src/main (kotlin, res) y sincronización Gradle.",
      "Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras.",
      "Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores.",
      "Build variant debug vs release y firma conceptual.",
      "Logcat filtrado por tag y nivel para depuración profesional.",
      "AndroidManifest.xml: package, application, launcher Activity.",
      "Gradle Kotlin DSL (build.gradle.kts) lectura básica de plugins y dependencias.",
      "Checklist de primer commit reproducible en otro equipo."
],
      content: "## Panorama: ENTORNO — ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY\n\nInstalación, primer proyecto Empty Views, JDK y flujo asistido por IA en el IDE.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB.\n- Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java.\n- Estructura app/ src/main (kotlin, res) y sincronización Gradle.\n- Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras.\n- Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores.\n## Desarrollo\n\n### 1. Android Studio Ladybug+\n\nAndroid Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Kotlin en Android\n\nKotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nEstructura app/ src/main (kotlin, res) y sincronización Gradle. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Cursor o Antigravity CLI como copiloto\n\nCursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Git en el proyecto Android\n\nGit en el proyecto Android: .gitignore, no versionar local.properties ni keystores. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nBuild variant debug vs release y firma conceptual. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nLogcat filtrado por tag y nivel para depuración profesional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. AndroidManifest.xml\n\nAndroidManifest.xml: package, application, launcher Activity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nGradle Kotlin DSL (build.gradle.kts) lectura básica de plugins y dependencias. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nChecklist de primer commit reproducible en otro equipo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-1` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: AndroidManifest.xml: package, application, launcher Activity…\n- [ ] Dominé: Gradle Kotlin DSL (build.gradle.kts) lectura básica de plugi…\n- [ ] Dominé: Checklist de primer commit reproducible en otro equipo.\n",
      codeSnippet: `// build.gradle.kts (app)
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}
android {
    namespace = "com.quimisell.devandroid"
    compileSdk = 35
    defaultConfig {
        applicationId = "com.quimisell.devandroid"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }
    buildFeatures { viewBinding = true }
}
dependencies {
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("com.google.android.material:material:1.12.0")
}

// MainActivity.kt
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.btnStart.setOnClickListener {
            Log.d("QuimiSell", "Hola Android Kotlin")
        }
    }
}`,
      quiz: [
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Estructura app/ src/main (kotlin, res) y sincronización Gradle.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Estructura app/ src/main (kotlin, res) y sincronización Gradle."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Build variant debug vs release y firma conceptual.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Build variant debug vs release y firma conceptual."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Logcat filtrado por tag y nivel para depuración profesional.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Logcat filtrado por tag y nivel para depuración profesional."
        },
        {
          question: "Módulo 1 (ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "AndroidManifest.xml: package, application, launcher Activity.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: AndroidManifest.xml: package, application, launcher Activity."
        },
        {
          question: "Módulo 1: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8011,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 1: Instalación, primer proyecto Empty Views, JDK y flujo asistido por IA en el IDE.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8012,
          instruction: "DESAFÍO módulo 1: explica en 5 líneas cómo depurarías un fallo relacionado con Android Studio Ladybug+: SDK Manager, emulador ARM…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 2,
      title: "MÓDULO 2: GRADLE, MANIFEST Y PERMISOS DECLARATIVOS [XML]",
      description: "minSdk/targetSdk, namespaces, permisos normal vs dangerous.",
      items: [
      "compileSdk y targetSdk: impacto en APIs y comportamiento de permisos.",
      "Manifest merge: libraries que inyectan permisos automáticamente.",
      "uses-permission vs uses-permission-sdk-23 y maxSdkVersion.",
      "application: allowBackup, networkSecurityConfig, tema icon.",
      "Product flavors y buildTypes (debug/release) sin duplicar código.",
      "versionCode/versionName y trazabilidad Play Store.",
      "Dependencias implementation vs api vs kapt/ksp.",
      "Repositorios Maven Google + Central; evitar JCenter obsoleto.",
      "Sincronizar proyecto tras cambiar Gradle sin miedo al mensaje Sync Now.",
      "Leer dependencies.txt generado por Gradle para auditar versiones."
],
      content: "## Panorama: GRADLE, MANIFEST Y PERMISOS DECLARATIVOS\n\nminSdk/targetSdk, namespaces, permisos normal vs dangerous.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- compileSdk y targetSdk: impacto en APIs y comportamiento de permisos.\n- Manifest merge: libraries que inyectan permisos automáticamente.\n- uses-permission vs uses-permission-sdk-23 y maxSdkVersion.\n- application: allowBackup, networkSecurityConfig, tema icon.\n- Product flavors y buildTypes (debug/release) sin duplicar código.\n## Desarrollo\n\n### 1. compileSdk y targetSdk\n\ncompileSdk y targetSdk: impacto en APIs y comportamiento de permisos. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Manifest merge\n\nManifest merge: libraries que inyectan permisos automáticamente. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nuses-permission vs uses-permission-sdk-23 y maxSdkVersion. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. application\n\napplication: allowBackup, networkSecurityConfig, tema icon. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nProduct flavors y buildTypes (debug/release) sin duplicar código. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nversionCode/versionName y trazabilidad Play Store. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nDependencias implementation vs api vs kapt/ksp. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nRepositorios Maven Google + Central; evitar JCenter obsoleto. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nSincronizar proyecto tras cambiar Gradle sin miedo al mensaje Sync Now. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nLeer dependencies.txt generado por Gradle para auditar versiones. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-2` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Repositorios Maven Google + Central; evitar JCenter obsoleto…\n- [ ] Dominé: Sincronizar proyecto tras cambiar Gradle sin miedo al mensaj…\n- [ ] Dominé: Leer dependencies.txt generado por Gradle para auditar versi…\n",
      codeSnippet: `<!-- AndroidManifest.xml (extracto) -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />
    <application
        android:allowBackup="false"
        android:networkSecurityConfig="@xml/network_security_config"
        android:theme="@style/Theme.QuimiSell">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`,
      quiz: [
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "compileSdk y targetSdk: impacto en APIs y comportamiento de permisos.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: compileSdk y targetSdk: impacto en APIs y comportamiento de permisos."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Manifest merge: libraries que inyectan permisos automáticamente.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Manifest merge: libraries que inyectan permisos automáticamente."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "uses-permission vs uses-permission-sdk-23 y maxSdkVersion.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: uses-permission vs uses-permission-sdk-23 y maxSdkVersion."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "application: allowBackup, networkSecurityConfig, tema icon.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: application: allowBackup, networkSecurityConfig, tema icon."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Product flavors y buildTypes (debug/release) sin duplicar código.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Product flavors y buildTypes (debug/release) sin duplicar código."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "versionCode/versionName y trazabilidad Play Store.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: versionCode/versionName y trazabilidad Play Store."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Dependencias implementation vs api vs kapt/ksp.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Dependencias implementation vs api vs kapt/ksp."
        },
        {
          question: "Módulo 2 (GRADLE, MANIFEST Y PERMISOS DECLARATIVOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Repositorios Maven Google + Central; evitar JCenter obsoleto.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Repositorios Maven Google + Central; evitar JCenter obsoleto."
        },
        {
          question: "Módulo 2: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8021,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 2: minSdk/targetSdk, namespaces, permisos normal vs dangerous.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8022,
          instruction: "DESAFÍO módulo 2: explica en 5 líneas cómo depurarías un fallo relacionado con compileSdk y targetSdk: impacto en APIs y comporta…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 3,
      title: "MÓDULO 3: ACTIVITIES Y CICLO DE VIDA (XML) [XML]",
      description: "onCreate → onDestroy, savedInstanceState y rotación.",
      items: [
      "Activity como pantalla: MainActivity y AndroidManifest MAIN/LAUNCHER.",
      "Callback lifecycle: Created, Started, Resumed, Paused, Stopped, Destroyed.",
      "onSaveInstanceState vs ViewModel para sobrevivir rotación.",
      "launchMode singleTop, singleTask y back stack.",
      "Explicit intents para abrir otra Activity.",
      "Edge-to-edge y WindowInsets en XML (pre-Compose).",
      "Tareas y procesos: cuándo el sistema mata tu Activity.",
      "Depurar con breakpoints en lifecycle callbacks.",
      "No bloquear el hilo main: ANR y StrictMode intro.",
      "Transiciones Activity con overridePendingTransition opcional."
],
      content: "## Panorama: ACTIVITIES Y CICLO DE VIDA (XML)\n\nonCreate → onDestroy, savedInstanceState y rotación.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Activity como pantalla: MainActivity y AndroidManifest MAIN/LAUNCHER.\n- Callback lifecycle: Created, Started, Resumed, Paused, Stopped, Destroyed.\n- onSaveInstanceState vs ViewModel para sobrevivir rotación.\n- launchMode singleTop, singleTask y back stack.\n- Explicit intents para abrir otra Activity.\n## Desarrollo\n\n### 1. Activity como pantalla\n\nActivity como pantalla: MainActivity y AndroidManifest MAIN/LAUNCHER. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Callback lifecycle\n\nCallback lifecycle: Created, Started, Resumed, Paused, Stopped, Destroyed. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nonSaveInstanceState vs ViewModel para sobrevivir rotación. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nlaunchMode singleTop, singleTask y back stack. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nExplicit intents para abrir otra Activity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nEdge-to-edge y WindowInsets en XML (pre-Compose). En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Tareas y procesos\n\nTareas y procesos: cuándo el sistema mata tu Activity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nDepurar con breakpoints en lifecycle callbacks. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. No bloquear el hilo main\n\nNo bloquear el hilo main: ANR y StrictMode intro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nTransiciones Activity con overridePendingTransition opcional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-3` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Depurar con breakpoints en lifecycle callbacks.\n- [ ] Dominé: No bloquear el hilo main: ANR y StrictMode intro.\n- [ ] Dominé: Transiciones Activity con overridePendingTransition opcional…\n",
      codeSnippet: `class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("LIFE", "onCreate")
    }
    override fun onStart() { super.onStart(); Log.d("LIFE", "onStart") }
    override fun onResume() { super.onResume(); Log.d("LIFE", "onResume") }
    override fun onPause() { super.onPause(); Log.d("LIFE", "onPause") }
    override fun onStop() { super.onStop(); Log.d("LIFE", "onStop") }
    override fun onDestroy() { super.onDestroy(); Log.d("LIFE", "onDestroy") }
}`,
      quiz: [
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Activity como pantalla: MainActivity y AndroidManifest MAIN/LAUNCHER.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Activity como pantalla: MainActivity y AndroidManifest MAIN/LAUNCHER."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Callback lifecycle: Created, Started, Resumed, Paused, Stopped, Destroyed.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Callback lifecycle: Created, Started, Resumed, Paused, Stopped, Destroyed."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "onSaveInstanceState vs ViewModel para sobrevivir rotación.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: onSaveInstanceState vs ViewModel para sobrevivir rotación."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "launchMode singleTop, singleTask y back stack.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: launchMode singleTop, singleTask y back stack."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Explicit intents para abrir otra Activity.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Explicit intents para abrir otra Activity."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Edge-to-edge y WindowInsets en XML (pre-Compose).",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Edge-to-edge y WindowInsets en XML (pre-Compose)."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Tareas y procesos: cuándo el sistema mata tu Activity.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Tareas y procesos: cuándo el sistema mata tu Activity."
        },
        {
          question: "Módulo 3 (ACTIVITIES Y CICLO DE VIDA (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Depurar con breakpoints en lifecycle callbacks.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Depurar con breakpoints en lifecycle callbacks."
        },
        {
          question: "Módulo 3: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8031,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 3: onCreate → onDestroy, savedInstanceState y rotación.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8032,
          instruction: "DESAFÍO módulo 3: explica en 5 líneas cómo depurarías un fallo relacionado con Activity como pantalla: MainActivity y AndroidMani…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 4,
      title: "MÓDULO 4: LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS [XML]",
      description: "Jerarquía de Views, match_parent, wrap_content y @string.",
      items: [
      "res/layout/activity_main.xml y inflado setContentView.",
      "LinearLayout vs RelativeLayout legado vs ConstraintLayout moderno.",
      "Chains, barriers y guidelines en ConstraintLayout.",
      "dp para dimensión física, sp para texto accesible.",
      "Colores @color, drawables vectoriales y mipmaps launcher.",
      "Qualificadores -land, -night, -sw600dp para tablets.",
      "include/merge para layouts reutilizables.",
      "tools: namespace para preview en Android Studio.",
      "Evitar deep nesting (>10 niveles) por rendimiento medición.",
      "Lint layout warnings y accessibility contentDescription."
],
      content: "## Panorama: LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS\n\nJerarquía de Views, match_parent, wrap_content y @string.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- res/layout/activity_main.xml y inflado setContentView.\n- LinearLayout vs RelativeLayout legado vs ConstraintLayout moderno.\n- Chains, barriers y guidelines en ConstraintLayout.\n- dp para dimensión física, sp para texto accesible.\n- Colores @color, drawables vectoriales y mipmaps launcher.\n## Desarrollo\n\n### 1. Punto 1\n\nres/layout/activity_main.xml y inflado setContentView. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nLinearLayout vs RelativeLayout legado vs ConstraintLayout moderno. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nChains, barriers y guidelines en ConstraintLayout. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\ndp para dimensión física, sp para texto accesible. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nColores @color, drawables vectoriales y mipmaps launcher. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nQualificadores -land, -night, -sw600dp para tablets. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\ninclude/merge para layouts reutilizables. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. tools\n\ntools: namespace para preview en Android Studio. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nEvitar deep nesting (>10 niveles) por rendimiento medición. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nLint layout warnings y accessibility contentDescription. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-4` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: tools: namespace para preview en Android Studio.\n- [ ] Dominé: Evitar deep nesting (>10 niveles) por rendimiento medición.\n- [ ] Dominé: Lint layout warnings y accessibility contentDescription.\n",
      codeSnippet: `<!-- res/layout/activity_main.xml -->
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <TextView
        android:id="@+id/title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/app_name"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>`,
      quiz: [
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "res/layout/activity_main.xml y inflado setContentView.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: res/layout/activity_main.xml y inflado setContentView."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "LinearLayout vs RelativeLayout legado vs ConstraintLayout moderno.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: LinearLayout vs RelativeLayout legado vs ConstraintLayout moderno."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Chains, barriers y guidelines en ConstraintLayout.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Chains, barriers y guidelines en ConstraintLayout."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "dp para dimensión física, sp para texto accesible.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: dp para dimensión física, sp para texto accesible."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Colores @color, drawables vectoriales y mipmaps launcher.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Colores @color, drawables vectoriales y mipmaps launcher."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Qualificadores -land, -night, -sw600dp para tablets.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Qualificadores -land, -night, -sw600dp para tablets."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "include/merge para layouts reutilizables.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: include/merge para layouts reutilizables."
        },
        {
          question: "Módulo 4 (LAYOUTS XML: CONSTRAINTLAYOUT Y RECURSOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "tools: namespace para preview en Android Studio.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: tools: namespace para preview en Android Studio."
        },
        {
          question: "Módulo 4: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8041,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 4: Jerarquía de Views, match_parent, wrap_content y @string.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8042,
          instruction: "DESAFÍO módulo 4: explica en 5 líneas cómo depurarías un fallo relacionado con res/layout/activity_main.xml y inflado setContentV…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 5,
      title: "MÓDULO 5: VIEWBINDING Y EVENTOS DE UI [XML]",
      description: "Eliminar findViewById; clicks, TextWatchers y Snackbar.",
      items: [
      "viewBinding true en build.gradle.kts genera ActivityMainBinding.",
      "Binding.inflate y binding.root para setContentView.",
      "Listeners lambda para botones sin inner class anónima.",
      "EditText, validación básica y ocultar teclado.",
      "Snackbar vs Toast para feedback Material.",
      "AlertDialog.Builder y MaterialAlertDialogBuilder.",
      "Habilitar/deshabilitar controles según estado de formulario.",
      "Binding en Fragment: onDestroyView = null para evitar leaks.",
      "Separar lógica de presentación de Activity gorda (prep MVVM).",
      "Probar UI manual en emulador con diferentes densidades."
],
      content: "## Panorama: VIEWBINDING Y EVENTOS DE UI\n\nEliminar findViewById; clicks, TextWatchers y Snackbar.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- viewBinding true en build.gradle.kts genera ActivityMainBinding.\n- Binding.inflate y binding.root para setContentView.\n- Listeners lambda para botones sin inner class anónima.\n- EditText, validación básica y ocultar teclado.\n- Snackbar vs Toast para feedback Material.\n## Desarrollo\n\n### 1. Punto 1\n\nviewBinding true en build.gradle.kts genera ActivityMainBinding. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nBinding.inflate y binding.root para setContentView. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nListeners lambda para botones sin inner class anónima. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nEditText, validación básica y ocultar teclado. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nSnackbar vs Toast para feedback Material. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nAlertDialog.Builder y MaterialAlertDialogBuilder. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nHabilitar/deshabilitar controles según estado de formulario. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Binding en Fragment\n\nBinding en Fragment: onDestroyView = null para evitar leaks. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nSeparar lógica de presentación de Activity gorda (prep MVVM). En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nProbar UI manual en emulador con diferentes densidades. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-5` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Binding en Fragment: onDestroyView = null para evitar leaks.\n- [ ] Dominé: Separar lógica de presentación de Activity gorda (prep MVVM)…\n- [ ] Dominé: Probar UI manual en emulador con diferentes densidades.\n",
      codeSnippet: `class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.btnLogin.setOnClickListener {
            val email = binding.inputEmail.text.toString()
            if (email.isBlank()) {
                Snackbar.make(binding.root, "Email requerido", Snackbar.LENGTH_SHORT).show()
            }
        }
    }
}`,
      quiz: [
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "viewBinding true en build.gradle.kts genera ActivityMainBinding.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: viewBinding true en build.gradle.kts genera ActivityMainBinding."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Binding.inflate y binding.root para setContentView.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Binding.inflate y binding.root para setContentView."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Listeners lambda para botones sin inner class anónima.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Listeners lambda para botones sin inner class anónima."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "EditText, validación básica y ocultar teclado.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: EditText, validación básica y ocultar teclado."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Snackbar vs Toast para feedback Material.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Snackbar vs Toast para feedback Material."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "AlertDialog.Builder y MaterialAlertDialogBuilder.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: AlertDialog.Builder y MaterialAlertDialogBuilder."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Habilitar/deshabilitar controles según estado de formulario.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Habilitar/deshabilitar controles según estado de formulario."
        },
        {
          question: "Módulo 5 (VIEWBINDING Y EVENTOS DE UI): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Binding en Fragment: onDestroyView = null para evitar leaks.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Binding en Fragment: onDestroyView = null para evitar leaks."
        },
        {
          question: "Módulo 5: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8051,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 5: Eliminar findViewById; clicks, TextWatchers y Snackbar.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8052,
          instruction: "DESAFÍO módulo 5: explica en 5 líneas cómo depurarías un fallo relacionado con viewBinding true en build.gradle.kts genera Activi…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 6,
      title: "MÓDULO 6: MATERIAL DESIGN 3 EN XML [XML]",
      description: "Themes, MaterialButton, TextInputLayout y FAB.",
      items: [
      "Theme.Material3.DayNight sin ActionBar.",
      "Color roles: primary, onPrimary, surface, error.",
      "TextInputLayout + TextInputEditText con hint y error.",
      "MaterialButton styles filled, tonal, outlined.",
      "CoordinatorLayout + AppBarLayout collapsing opcional.",
      "NavigationBar tint y status bar con WindowCompat.",
      "Ripple en selectableItemBackground.",
      "Dynamic color Android 12+ en themes.",
      "Consistencia con diseño Figma handoff.",
      "Accesibilidad: contraste mínimo 4.5:1 en texto."
],
      content: "## Panorama: MATERIAL DESIGN 3 EN XML\n\nThemes, MaterialButton, TextInputLayout y FAB.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Theme.Material3.DayNight sin ActionBar.\n- Color roles: primary, onPrimary, surface, error.\n- TextInputLayout + TextInputEditText con hint y error.\n- MaterialButton styles filled, tonal, outlined.\n- CoordinatorLayout + AppBarLayout collapsing opcional.\n## Desarrollo\n\n### 1. Punto 1\n\nTheme.Material3.DayNight sin ActionBar. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Color roles\n\nColor roles: primary, onPrimary, surface, error. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nTextInputLayout + TextInputEditText con hint y error. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nMaterialButton styles filled, tonal, outlined. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nCoordinatorLayout + AppBarLayout collapsing opcional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nNavigationBar tint y status bar con WindowCompat. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nRipple en selectableItemBackground. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nDynamic color Android 12+ en themes. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nConsistencia con diseño Figma handoff. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Accesibilidad\n\nAccesibilidad: contraste mínimo 4.5:1 en texto. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-6` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Dynamic color Android 12+ en themes.\n- [ ] Dominé: Consistencia con diseño Figma handoff.\n- [ ] Dominé: Accesibilidad: contraste mínimo 4.5:1 en texto.\n",
      codeSnippet: `<com.google.android.material.textfield.TextInputLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    style="@style/Widget.Material3.TextInputLayout.OutlinedBox">
    <com.google.android.material.textfield.TextInputEditText
        android:id="@+id/input"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="@string/hint_email" />
</com.google.android.material.textfield.TextInputLayout>`,
      quiz: [
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Theme.Material3.DayNight sin ActionBar.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Theme.Material3.DayNight sin ActionBar."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Color roles: primary, onPrimary, surface, error.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Color roles: primary, onPrimary, surface, error."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "TextInputLayout + TextInputEditText con hint y error.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: TextInputLayout + TextInputEditText con hint y error."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "MaterialButton styles filled, tonal, outlined.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: MaterialButton styles filled, tonal, outlined."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "CoordinatorLayout + AppBarLayout collapsing opcional.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: CoordinatorLayout + AppBarLayout collapsing opcional."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "NavigationBar tint y status bar con WindowCompat.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: NavigationBar tint y status bar con WindowCompat."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Ripple en selectableItemBackground.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Ripple en selectableItemBackground."
        },
        {
          question: "Módulo 6 (MATERIAL DESIGN 3 EN XML): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Dynamic color Android 12+ en themes.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Dynamic color Android 12+ en themes."
        },
        {
          question: "Módulo 6: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8061,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 6: Themes, MaterialButton, TextInputLayout y FAB.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8062,
          instruction: "DESAFÍO módulo 6: explica en 5 líneas cómo depurarías un fallo relacionado con Theme.Material3.DayNight sin ActionBar.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 7,
      title: "MÓDULO 7: MENÚS, TOOLBAR Y DRAWER (XML) [XML]",
      description: "Options menu, ActionBar y NavigationView lateral.",
      items: [
      "menu/*.xml con item android:id y showAsAction.",
      "Toolbar como ActionBar setSupportActionBar.",
      "OnNavigationItemSelectedListener en bottom/side nav.",
      "DrawerLayout + NavigationView patrón clásico.",
      "Badges y selección visual del ítem activo.",
      "Overflow menu en pantallas estrechas.",
      "SearchView en toolbar con onQueryTextListener.",
      "Menús contextuales long-press en RecyclerView item.",
      "Guardar índice de pestaña en saved state.",
      "Migración futura a Navigation Compose documentada."
],
      content: "## Panorama: MENÚS, TOOLBAR Y DRAWER (XML)\n\nOptions menu, ActionBar y NavigationView lateral.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- menu/*.xml con item android:id y showAsAction.\n- Toolbar como ActionBar setSupportActionBar.\n- OnNavigationItemSelectedListener en bottom/side nav.\n- DrawerLayout + NavigationView patrón clásico.\n- Badges y selección visual del ítem activo.\n## Desarrollo\n\n### 1. menu/*.xml con item android\n\nmenu/*.xml con item android:id y showAsAction. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nToolbar como ActionBar setSupportActionBar. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nOnNavigationItemSelectedListener en bottom/side nav. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nDrawerLayout + NavigationView patrón clásico. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nBadges y selección visual del ítem activo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nOverflow menu en pantallas estrechas. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nSearchView en toolbar con onQueryTextListener. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nMenús contextuales long-press en RecyclerView item. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nGuardar índice de pestaña en saved state. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nMigración futura a Navigation Compose documentada. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-7` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Menús contextuales long-press en RecyclerView item.\n- [ ] Dominé: Guardar índice de pestaña en saved state.\n- [ ] Dominé: Migración futura a Navigation Compose documentada.\n",
      codeSnippet: `override fun onCreateOptionsMenu(menu: Menu): Boolean {
    menuInflater.inflate(R.menu.menu_main, menu)
    return true
}
override fun onOptionsItemSelected(item: MenuItem): Boolean = when (item.itemId) {
    R.id.action_settings -> { startActivity(Intent(this, SettingsActivity::class.java)); true }
    else -> super.onOptionsItemSelected(item)
}`,
      quiz: [
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "menu/*.xml con item android:id y showAsAction.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: menu/*.xml con item android:id y showAsAction."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Toolbar como ActionBar setSupportActionBar.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Toolbar como ActionBar setSupportActionBar."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "OnNavigationItemSelectedListener en bottom/side nav.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: OnNavigationItemSelectedListener en bottom/side nav."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "DrawerLayout + NavigationView patrón clásico.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: DrawerLayout + NavigationView patrón clásico."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Badges y selección visual del ítem activo.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Badges y selección visual del ítem activo."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Overflow menu en pantallas estrechas.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Overflow menu en pantallas estrechas."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "SearchView en toolbar con onQueryTextListener.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: SearchView en toolbar con onQueryTextListener."
        },
        {
          question: "Módulo 7 (MENÚS, TOOLBAR Y DRAWER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Menús contextuales long-press en RecyclerView item.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Menús contextuales long-press en RecyclerView item."
        },
        {
          question: "Módulo 7: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8071,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 7: Options menu, ActionBar y NavigationView lateral.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8072,
          instruction: "DESAFÍO módulo 7: explica en 5 líneas cómo depurarías un fallo relacionado con menu/*.xml con item android:id y showAsAction.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 8,
      title: "MÓDULO 8: RECYCLERVIEW Y LISTADAPTER (XML) [XML]",
      description: "ViewHolder pattern, DiffUtil y paginación manual.",
      items: [
      "RecyclerView + LinearLayoutManager vertical/horizontal.",
      "item_*.xml layout por fila separado del adapter.",
      "ViewHolder class que cachea referencias binding.",
      "ListAdapter + DiffUtil.ItemCallback equals/content.",
      "DividerItemDecoration y animaciones default.",
      "SwipeRefreshLayout envolviendo lista.",
      "Empty state layout cuando lista vacía.",
      "RecyclerView.setHasFixedSize(true) cuando procede.",
      "Evitar crear vistas en onBindViewHolder pesado.",
      "Paging 3 preview arquitectónico para Compose después."
],
      content: "## Panorama: RECYCLERVIEW Y LISTADAPTER (XML)\n\nViewHolder pattern, DiffUtil y paginación manual.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- RecyclerView + LinearLayoutManager vertical/horizontal.\n- item_*.xml layout por fila separado del adapter.\n- ViewHolder class que cachea referencias binding.\n- ListAdapter + DiffUtil.ItemCallback equals/content.\n- DividerItemDecoration y animaciones default.\n## Desarrollo\n\n### 1. Punto 1\n\nRecyclerView + LinearLayoutManager vertical/horizontal. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nitem_*.xml layout por fila separado del adapter. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nViewHolder class que cachea referencias binding. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nListAdapter + DiffUtil.ItemCallback equals/content. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nDividerItemDecoration y animaciones default. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nSwipeRefreshLayout envolviendo lista. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nEmpty state layout cuando lista vacía. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nRecyclerView.setHasFixedSize(true) cuando procede. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nEvitar crear vistas en onBindViewHolder pesado. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nPaging 3 preview arquitectónico para Compose después. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-8` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: RecyclerView.setHasFixedSize(true) cuando procede.\n- [ ] Dominé: Evitar crear vistas en onBindViewHolder pesado.\n- [ ] Dominé: Paging 3 preview arquitectónico para Compose después.\n",
      codeSnippet: `class NoteAdapter : ListAdapter<Note, NoteAdapter.VH>(DIFF) {
    class VH(val binding: ItemNoteBinding) : RecyclerView.ViewHolder(binding.root)
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {
        val binding = ItemNoteBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return VH(binding)
    }
    override fun onBindViewHolder(holder: VH, position: Int) {
        holder.binding.title.text = getItem(position).title
    }
    companion object {
        val DIFF = object : DiffUtil.ItemCallback<Note>() {
            override fun areItemsTheSame(a: Note, b: Note) = a.id == b.id
            override fun areContentsTheSame(a: Note, b: Note) = a == b
        }
    }
}`,
      quiz: [
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "RecyclerView + LinearLayoutManager vertical/horizontal.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: RecyclerView + LinearLayoutManager vertical/horizontal."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "item_*.xml layout por fila separado del adapter.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: item_*.xml layout por fila separado del adapter."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "ViewHolder class que cachea referencias binding.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: ViewHolder class que cachea referencias binding."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "ListAdapter + DiffUtil.ItemCallback equals/content.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: ListAdapter + DiffUtil.ItemCallback equals/content."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "DividerItemDecoration y animaciones default.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: DividerItemDecoration y animaciones default."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "SwipeRefreshLayout envolviendo lista.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: SwipeRefreshLayout envolviendo lista."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Empty state layout cuando lista vacía.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Empty state layout cuando lista vacía."
        },
        {
          question: "Módulo 8 (RECYCLERVIEW Y LISTADAPTER (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "RecyclerView.setHasFixedSize(true) cuando procede.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: RecyclerView.setHasFixedSize(true) cuando procede."
        },
        {
          question: "Módulo 8: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8081,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 8: ViewHolder pattern, DiffUtil y paginación manual.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8082,
          instruction: "DESAFÍO módulo 8: explica en 5 líneas cómo depurarías un fallo relacionado con RecyclerView + LinearLayoutManager vertical/horizo…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 9,
      title: "MÓDULO 9: FRAGMENTS Y VIEWPAGER2 (XML) [XML]",
      description: "FragmentTransaction, back stack y tabs con FragmentStateAdapter.",
      items: [
      "Fragment lifecycle vinculado a Activity host.",
      "FragmentContainerView reemplazo de <fragment> tag.",
      "replace vs add y back stack popBackStack.",
      "ViewPager2 + TabLayoutMediator para pestañas.",
      "Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido.",
      "Child fragments y NestedScrollView cuidado rendimiento.",
      "setFragmentResult API moderna entre fragments.",
      "ProGuard rules para Fragment subclasses.",
      "Testing fragments con FragmentScenario intro.",
      "Puente conceptual hacia Navigation Component."
],
      content: "## Panorama: FRAGMENTS Y VIEWPAGER2 (XML)\n\nFragmentTransaction, back stack y tabs con FragmentStateAdapter.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Fragment lifecycle vinculado a Activity host.\n- FragmentContainerView reemplazo de <fragment> tag.\n- replace vs add y back stack popBackStack.\n- ViewPager2 + TabLayoutMediator para pestañas.\n- Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido.\n## Desarrollo\n\n### 1. Punto 1\n\nFragment lifecycle vinculado a Activity host. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nFragmentContainerView reemplazo de <fragment> tag. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nreplace vs add y back stack popBackStack. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nViewPager2 + TabLayoutMediator para pestañas. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nComunicación Fragment ↔ Activity vía interfaces o ViewModel compartido. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nChild fragments y NestedScrollView cuidado rendimiento. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nsetFragmentResult API moderna entre fragments. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nProGuard rules para Fragment subclasses. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nTesting fragments con FragmentScenario intro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nPuente conceptual hacia Navigation Component. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-9` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: ProGuard rules para Fragment subclasses.\n- [ ] Dominé: Testing fragments con FragmentScenario intro.\n- [ ] Dominé: Puente conceptual hacia Navigation Component.\n",
      codeSnippet: `class ListFragment : Fragment() {
    private var _binding: FragmentListBinding? = null
    private val binding get() = _binding!!
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, state: Bundle?): View {
        _binding = FragmentListBinding.inflate(inflater, container, false)
        return binding.root
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}`,
      quiz: [
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Fragment lifecycle vinculado a Activity host.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Fragment lifecycle vinculado a Activity host."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "FragmentContainerView reemplazo de <fragment> tag.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: FragmentContainerView reemplazo de <fragment> tag."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "replace vs add y back stack popBackStack.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: replace vs add y back stack popBackStack."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "ViewPager2 + TabLayoutMediator para pestañas.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: ViewPager2 + TabLayoutMediator para pestañas."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Child fragments y NestedScrollView cuidado rendimiento.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Child fragments y NestedScrollView cuidado rendimiento."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "setFragmentResult API moderna entre fragments.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: setFragmentResult API moderna entre fragments."
        },
        {
          question: "Módulo 9 (FRAGMENTS Y VIEWPAGER2 (XML)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "ProGuard rules para Fragment subclasses.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: ProGuard rules para Fragment subclasses."
        },
        {
          question: "Módulo 9: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8091,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 9: FragmentTransaction, back stack y tabs con FragmentStateAdapter.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8092,
          instruction: "DESAFÍO módulo 9: explica en 5 líneas cómo depurarías un fallo relacionado con Fragment lifecycle vinculado a Activity host.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 10,
      title: "MÓDULO 10: MINI-APP XML — INTEGRACIÓN UNIDAD VISTAS [XML]",
      description: "CRUD local en memoria, navegación y entrega del primer milestone.",
      items: [
      "Tres pantallas XML: lista, detalle, formulario.",
      "Navigation Component XML graph opcional.",
      "ViewModel con LiveData listando ítems demo.",
      "Validación de campos y mensajes usuario.",
      "Persistencia temporal hasta módulo Room.",
      "README del repo con capturas y APK debug.",
      "Rúbrica QuimiSell: modularidad paquetes ui/data.",
      "Usar Cursor para refactor package-by-feature.",
      "Probar rotación sin perder lista.",
      "Cierre bloque XML antes de Jetpack Compose."
],
      content: "## Panorama: MINI-APP XML — INTEGRACIÓN UNIDAD VISTAS\n\nCRUD local en memoria, navegación y entrega del primer milestone.\n\nEsta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Tres pantallas XML: lista, detalle, formulario.\n- Navigation Component XML graph opcional.\n- ViewModel con LiveData listando ítems demo.\n- Validación de campos y mensajes usuario.\n- Persistencia temporal hasta módulo Room.\n## Desarrollo\n\n### 1. Tres pantallas XML\n\nTres pantallas XML: lista, detalle, formulario. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nNavigation Component XML graph opcional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nViewModel con LiveData listando ítems demo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nValidación de campos y mensajes usuario. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nPersistencia temporal hasta módulo Room. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nREADME del repo con capturas y APK debug. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Rúbrica QuimiSell\n\nRúbrica QuimiSell: modularidad paquetes ui/data. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nUsar Cursor para refactor package-by-feature. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nProbar rotación sin perder lista. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nCierre bloque XML antes de Jetpack Compose. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-10` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Usar Cursor para refactor package-by-feature.\n- [ ] Dominé: Probar rotación sin perder lista.\n- [ ] Dominé: Cierre bloque XML antes de Jetpack Compose.\n",
      codeSnippet: `// ViewModel temporal hasta Room (módulo 21)
class TaskViewModel : ViewModel() {
    private val _tasks = MutableLiveData<List<Task>>(emptyList())
    val tasks: LiveData<List<Task>> = _tasks
    fun add(task: Task) {
        _tasks.value = _tasks.value.orEmpty() + task
    }
}`,
      quiz: [
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Tres pantallas XML: lista, detalle, formulario.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Tres pantallas XML: lista, detalle, formulario."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Navigation Component XML graph opcional.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Navigation Component XML graph opcional."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "ViewModel con LiveData listando ítems demo.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: ViewModel con LiveData listando ítems demo."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Validación de campos y mensajes usuario.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Validación de campos y mensajes usuario."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Persistencia temporal hasta módulo Room.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Persistencia temporal hasta módulo Room."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "README del repo con capturas y APK debug.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: README del repo con capturas y APK debug."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Rúbrica QuimiSell: modularidad paquetes ui/data.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Rúbrica QuimiSell: modularidad paquetes ui/data."
        },
        {
          question: "Módulo 10 (INTEGRACIÓN UNIDAD VISTAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Usar Cursor para refactor package-by-feature.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Usar Cursor para refactor package-by-feature."
        },
        {
          question: "Módulo 10: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8101,
          instruction: "Implementa en tu proyecto (XML) lo central del módulo 10: CRUD local en memoria, navegación y entrega del primer milestone.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "xml", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8102,
          instruction: "DESAFÍO módulo 10: explica en 5 líneas cómo depurarías un fallo relacionado con Tres pantallas XML: lista, detalle, formulario.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 11,
      title: "MÓDULO 11: JETPACK COMPOSE — PRIMERA UI DECLARATIVA [Compose]",
      description: "Activar Compose, @Composable, Preview y Material3.",
      items: [
      "buildFeatures.compose true y BOM androidx.compose.",
      "setContent { AppTheme { ... } } en ComponentActivity.",
      "Fun @Composable idempotente y recomposición explicada.",
      "@Preview multipreview light/dark.",
      "MaterialTheme colorScheme typography shapes.",
      "Composable functions solo desde hilo UI.",
      "Migration strategy XML coexistencia en mismo proyecto.",
      "Lint Compose y strong skipping mode flags.",
      "IDE Live Edit / Compose Preview hot reload.",
      "Punto de partida módulos 11–30 Compose-first."
],
      content: "## Panorama: JETPACK COMPOSE — PRIMERA UI DECLARATIVA\n\nActivar Compose, @Composable, Preview y Material3.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- buildFeatures.compose true y BOM androidx.compose.\n- setContent { AppTheme { ... } } en ComponentActivity.\n- Fun @Composable idempotente y recomposición explicada.\n- @Preview multipreview light/dark.\n- MaterialTheme colorScheme typography shapes.\n## Desarrollo\n\n### 1. Punto 1\n\nbuildFeatures.compose true y BOM androidx.compose. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nsetContent { AppTheme { ... } } en ComponentActivity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nFun @Composable idempotente y recomposición explicada. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\n@Preview multipreview light/dark. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nMaterialTheme colorScheme typography shapes. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nComposable functions solo desde hilo UI. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nMigration strategy XML coexistencia en mismo proyecto. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nLint Compose y strong skipping mode flags. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nIDE Live Edit / Compose Preview hot reload. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nPunto de partida módulos 11–30 Compose-first. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-11` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Lint Compose y strong skipping mode flags.\n- [ ] Dominé: IDE Live Edit / Compose Preview hot reload.\n- [ ] Dominé: Punto de partida módulos 11–30 Compose-first.\n",
      codeSnippet: `class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme(colorScheme = lightColorScheme()) {
                Surface(Modifier.fillMaxSize()) {
                    Greeting(name = "QuimiSell")
                }
            }
        }
    }
}
@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(text = "Hola $name", modifier = modifier.padding(24.dp))
}`,
      quiz: [
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "buildFeatures.compose true y BOM androidx.compose.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: buildFeatures.compose true y BOM androidx.compose."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "setContent { AppTheme { ... } } en ComponentActivity.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: setContent { AppTheme { ... } } en ComponentActivity."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Fun @Composable idempotente y recomposición explicada.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Fun @Composable idempotente y recomposición explicada."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "@Preview multipreview light/dark.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: @Preview multipreview light/dark."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "MaterialTheme colorScheme typography shapes.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: MaterialTheme colorScheme typography shapes."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Composable functions solo desde hilo UI.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Composable functions solo desde hilo UI."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Migration strategy XML coexistencia en mismo proyecto.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Migration strategy XML coexistencia en mismo proyecto."
        },
        {
          question: "Módulo 11 (PRIMERA UI DECLARATIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Lint Compose y strong skipping mode flags.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Lint Compose y strong skipping mode flags."
        },
        {
          question: "Módulo 11: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8111,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 11: Activar Compose, @Composable, Preview y Material3.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8112,
          instruction: "DESAFÍO módulo 11: explica en 5 líneas cómo depurarías un fallo relacionado con buildFeatures.compose true y BOM androidx.compose.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 12,
      title: "MÓDULO 12: LAYOUT COMPOSE: MODIFIER, COLUMN, ROW [Compose]",
      description: "Padding, weight, scroll y Box con alineación.",
      items: [
      "Modifier.fillMaxWidth().padding(16.dp) orden importa.",
      "Column vertical, Row horizontal, Box overlay.",
      "verticalScroll(rememberScrollState()) vs LazyColumn.",
      "Spacer y Arrangement.spacedBy.",
      "Alignment.CenterHorizontally vs Alignment.End.",
      "Intrinsic measurements para alturas dinámicas.",
      "Responsive con BoxWithConstraints.",
      "Density-independent dp y sp en Compose.",
      "Debug recompositions con recomposition counts.",
      "Evitar Modifier duplicado en cadenas largas."
],
      content: "## Panorama: LAYOUT COMPOSE: MODIFIER, COLUMN, ROW\n\nPadding, weight, scroll y Box con alineación.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Modifier.fillMaxWidth().padding(16.dp) orden importa.\n- Column vertical, Row horizontal, Box overlay.\n- verticalScroll(rememberScrollState()) vs LazyColumn.\n- Spacer y Arrangement.spacedBy.\n- Alignment.CenterHorizontally vs Alignment.End.\n## Desarrollo\n\n### 1. Punto 1\n\nModifier.fillMaxWidth().padding(16.dp) orden importa. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nColumn vertical, Row horizontal, Box overlay. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nverticalScroll(rememberScrollState()) vs LazyColumn. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nSpacer y Arrangement.spacedBy. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nAlignment.CenterHorizontally vs Alignment.End. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nIntrinsic measurements para alturas dinámicas. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nResponsive con BoxWithConstraints. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nDensity-independent dp y sp en Compose. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nDebug recompositions con recomposition counts. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nEvitar Modifier duplicado en cadenas largas. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-12` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Density-independent dp y sp en Compose.\n- [ ] Dominé: Debug recompositions con recomposition counts.\n- [ ] Dominé: Evitar Modifier duplicado en cadenas largas.\n",
      codeSnippet: `@Composable
fun ProfileHeader(name: String, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = name, style = MaterialTheme.typography.headlineSmall)
        Spacer(Modifier.height(8.dp))
        Text("Desarrollo Android Kotlin", style = MaterialTheme.typography.bodyMedium)
    }
}`,
      quiz: [
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Modifier.fillMaxWidth().padding(16.dp) orden importa.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Modifier.fillMaxWidth().padding(16.dp) orden importa."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Column vertical, Row horizontal, Box overlay.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Column vertical, Row horizontal, Box overlay."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "verticalScroll(rememberScrollState()) vs LazyColumn.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: verticalScroll(rememberScrollState()) vs LazyColumn."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Spacer y Arrangement.spacedBy.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Spacer y Arrangement.spacedBy."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Alignment.CenterHorizontally vs Alignment.End.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Alignment.CenterHorizontally vs Alignment.End."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Intrinsic measurements para alturas dinámicas.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Intrinsic measurements para alturas dinámicas."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Responsive con BoxWithConstraints.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Responsive con BoxWithConstraints."
        },
        {
          question: "Módulo 12 (LAYOUT COMPOSE: MODIFIER, COLUMN, ROW): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Density-independent dp y sp en Compose.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Density-independent dp y sp en Compose."
        },
        {
          question: "Módulo 12: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8121,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 12: Padding, weight, scroll y Box con alineación.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8122,
          instruction: "DESAFÍO módulo 12: explica en 5 líneas cómo depurarías un fallo relacionado con Modifier.fillMaxWidth().padding(16.dp) orden impor…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 13,
      title: "MÓDULO 13: ESTADO Y RECOMPOSICIÓN [Compose]",
      description: "remember, mutableStateOf, rememberSaveable.",
      items: [
      "Estado que dispara recompose al cambiar .value.",
      "rememberSaveable con Saver para rotación.",
      "Delegados by mutableStateOf en data holders.",
      "Stateful vs stateless composables.",
      "SideEffect, LaunchedEffect, DisposableEffect cuándo usarlos.",
      "derivedStateOf para cálculos caros.",
      "No mutar listas en sitio: nueva lista inmutable.",
      "Antipatrón: crear state en cada recomposition sin remember.",
      "Testing state hoisting con compose-ui-test.",
      "Snapshot system thread confinement."
],
      content: "## Panorama: ESTADO Y RECOMPOSICIÓN\n\nremember, mutableStateOf, rememberSaveable.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Estado que dispara recompose al cambiar .value.\n- rememberSaveable con Saver para rotación.\n- Delegados by mutableStateOf en data holders.\n- Stateful vs stateless composables.\n- SideEffect, LaunchedEffect, DisposableEffect cuándo usarlos.\n## Desarrollo\n\n### 1. Punto 1\n\nEstado que dispara recompose al cambiar .value. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nrememberSaveable con Saver para rotación. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nDelegados by mutableStateOf en data holders. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nStateful vs stateless composables. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nSideEffect, LaunchedEffect, DisposableEffect cuándo usarlos. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nderivedStateOf para cálculos caros. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. No mutar listas en sitio\n\nNo mutar listas en sitio: nueva lista inmutable. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Antipatrón\n\nAntipatrón: crear state en cada recomposition sin remember. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nTesting state hoisting con compose-ui-test. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nSnapshot system thread confinement. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-13` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Antipatrón: crear state en cada recomposition sin remember.\n- [ ] Dominé: Testing state hoisting con compose-ui-test.\n- [ ] Dominé: Snapshot system thread confinement.\n",
      codeSnippet: `@Composable
fun CounterScreen() {
    var count by rememberSaveable { mutableIntStateOf(0) }
  Column(Modifier.padding(16.dp)) {
        Text("Clicks: $count")
        Button(onClick = { count++ }) { Text("Incrementar") }
    }
}`,
      quiz: [
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Estado que dispara recompose al cambiar .value.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Estado que dispara recompose al cambiar .value."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "rememberSaveable con Saver para rotación.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: rememberSaveable con Saver para rotación."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Delegados by mutableStateOf en data holders.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Delegados by mutableStateOf en data holders."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Stateful vs stateless composables.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Stateful vs stateless composables."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "SideEffect, LaunchedEffect, DisposableEffect cuándo usarlos.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: SideEffect, LaunchedEffect, DisposableEffect cuándo usarlos."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "derivedStateOf para cálculos caros.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: derivedStateOf para cálculos caros."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "No mutar listas en sitio: nueva lista inmutable.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: No mutar listas en sitio: nueva lista inmutable."
        },
        {
          question: "Módulo 13 (ESTADO Y RECOMPOSICIÓN): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Antipatrón: crear state en cada recomposition sin remember.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Antipatrón: crear state en cada recomposition sin remember."
        },
        {
          question: "Módulo 13: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8131,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 13: remember, mutableStateOf, rememberSaveable.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8132,
          instruction: "DESAFÍO módulo 13: explica en 5 líneas cómo depurarías un fallo relacionado con Estado que dispara recompose al cambiar .value.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 14,
      title: "MÓDULO 14: STATE HOISTING Y UI STATE [Compose]",
      description: "Elevar estado al ancestro común; eventos vs estado.",
      items: [
      "Patrón: estado abajo, eventos arriba.",
      "UiState data class inmutable para pantalla.",
      "Callbacks onNameChange vs setName directo.",
      "Múltiples fuentes de verdad = bugs.",
      "rememberUpdatedState para lambdas estables.",
      "key() en LazyColumn para identidad ítem.",
      "Hoisting hasta ViewModel en módulo 15.",
      "Compose stability annotations @Stable @Immutable.",
      "Documentar contrato de cada pantalla pública.",
      "Checklist preview con estados loading/error/success."
],
      content: "## Panorama: STATE HOISTING Y UI STATE\n\nElevar estado al ancestro común; eventos vs estado.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Patrón: estado abajo, eventos arriba.\n- UiState data class inmutable para pantalla.\n- Callbacks onNameChange vs setName directo.\n- Múltiples fuentes de verdad = bugs.\n- rememberUpdatedState para lambdas estables.\n## Desarrollo\n\n### 1. Patrón\n\nPatrón: estado abajo, eventos arriba. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nUiState data class inmutable para pantalla. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nCallbacks onNameChange vs setName directo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nMúltiples fuentes de verdad = bugs. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nrememberUpdatedState para lambdas estables. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nkey() en LazyColumn para identidad ítem. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nHoisting hasta ViewModel en módulo 15. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nCompose stability annotations @Stable @Immutable. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nDocumentar contrato de cada pantalla pública. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nChecklist preview con estados loading/error/success. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-14` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Compose stability annotations @Stable @Immutable.\n- [ ] Dominé: Documentar contrato de cada pantalla pública.\n- [ ] Dominé: Checklist preview con estados loading/error/success.\n",
      codeSnippet: `@Composable
fun NameForm(name: String, onNameChange: (String) -> Unit) {
    OutlinedTextField(
        value = name,
        onValueChange = onNameChange,
        label = { Text("Nombre") },
        modifier = Modifier.fillMaxWidth()
    )
}
@Composable
fun NameScreen(viewModel: NameViewModel = viewModel()) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    NameForm(name = uiState, onNameChange = viewModel::onNameChanged)
}`,
      quiz: [
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Patrón: estado abajo, eventos arriba.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Patrón: estado abajo, eventos arriba."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "UiState data class inmutable para pantalla.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: UiState data class inmutable para pantalla."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Callbacks onNameChange vs setName directo.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Callbacks onNameChange vs setName directo."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Múltiples fuentes de verdad = bugs.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Múltiples fuentes de verdad = bugs."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "rememberUpdatedState para lambdas estables.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: rememberUpdatedState para lambdas estables."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "key() en LazyColumn para identidad ítem.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: key() en LazyColumn para identidad ítem."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Hoisting hasta ViewModel en módulo 15.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Hoisting hasta ViewModel en módulo 15."
        },
        {
          question: "Módulo 14 (STATE HOISTING Y UI STATE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Compose stability annotations @Stable @Immutable.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Compose stability annotations @Stable @Immutable."
        },
        {
          question: "Módulo 14: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8141,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 14: Elevar estado al ancestro común; eventos vs estado.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8142,
          instruction: "DESAFÍO módulo 14: explica en 5 líneas cómo depurarías un fallo relacionado con Patrón: estado abajo, eventos arriba.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 15,
      title: "MÓDULO 15: VIEWMODEL + COMPOSE + LIFECYCLE [Compose]",
      description: "viewModel(), collectAsStateWithLifecycle, SavedStateHandle.",
      items: [
      "androidx.lifecycle:lifecycle-viewmodel-compose.",
      "ViewModel sobrevive rotación; no guarda Context.",
      "StateFlow expuesto uiState; collect en UI.",
      "collectAsStateWithLifecycle para STARTED.",
      "SavedStateHandle para argumentos de navegación.",
      "viewModelScope.launch para trabajo async.",
      "Limpiar jobs en onCleared si manual.",
      "Factory custom cuando ViewModel necesita repo.",
      "No exponer MutableStateFlow público sin encapsular.",
      "MVVM es la arquitectura por defecto Google."
],
      content: "## Panorama: VIEWMODEL + COMPOSE + LIFECYCLE\n\nviewModel(), collectAsStateWithLifecycle, SavedStateHandle.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- androidx.lifecycle:lifecycle-viewmodel-compose.\n- ViewModel sobrevive rotación; no guarda Context.\n- StateFlow expuesto uiState; collect en UI.\n- collectAsStateWithLifecycle para STARTED.\n- SavedStateHandle para argumentos de navegación.\n## Desarrollo\n\n### 1. androidx.lifecycle\n\nandroidx.lifecycle:lifecycle-viewmodel-compose. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nViewModel sobrevive rotación; no guarda Context. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nStateFlow expuesto uiState; collect en UI. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\ncollectAsStateWithLifecycle para STARTED. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nSavedStateHandle para argumentos de navegación. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nviewModelScope.launch para trabajo async. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nLimpiar jobs en onCleared si manual. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nFactory custom cuando ViewModel necesita repo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nNo exponer MutableStateFlow público sin encapsular. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nMVVM es la arquitectura por defecto Google. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-15` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Factory custom cuando ViewModel necesita repo.\n- [ ] Dominé: No exponer MutableStateFlow público sin encapsular.\n- [ ] Dominé: MVVM es la arquitectura por defecto Google.\n",
      codeSnippet: `class NotesViewModel(
    private val repo: NotesRepository
) : ViewModel() {
    private val _uiState = MutableStateFlow(NotesUiState())
    val uiState: StateFlow<NotesUiState> = _uiState.asStateFlow()
    fun load() = viewModelScope.launch {
        _uiState.update { it.copy(loading = true) }
        repo.observeNotes()
            .catch { e -> _uiState.update { it.copy(error = e.message, loading = false) } }
            .collect { list -> _uiState.update { it.copy(items = list, loading = false) } }
    }
}`,
      quiz: [
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "androidx.lifecycle:lifecycle-viewmodel-compose.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: androidx.lifecycle:lifecycle-viewmodel-compose."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "ViewModel sobrevive rotación; no guarda Context.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: ViewModel sobrevive rotación; no guarda Context."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "StateFlow expuesto uiState; collect en UI.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: StateFlow expuesto uiState; collect en UI."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "collectAsStateWithLifecycle para STARTED.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: collectAsStateWithLifecycle para STARTED."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "SavedStateHandle para argumentos de navegación.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: SavedStateHandle para argumentos de navegación."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "viewModelScope.launch para trabajo async.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: viewModelScope.launch para trabajo async."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Limpiar jobs en onCleared si manual.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Limpiar jobs en onCleared si manual."
        },
        {
          question: "Módulo 15 (VIEWMODEL + COMPOSE + LIFECYCLE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Factory custom cuando ViewModel necesita repo.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Factory custom cuando ViewModel necesita repo."
        },
        {
          question: "Módulo 15: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8151,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 15: viewModel(), collectAsStateWithLifecycle, SavedStateHandle.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8152,
          instruction: "DESAFÍO módulo 15: explica en 5 líneas cómo depurarías un fallo relacionado con androidx.lifecycle:lifecycle-viewmodel-compose.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 16,
      title: "MÓDULO 16: NAVEGACIÓN COMPOSE (NAVHOST) [Compose]",
      description: "Rutas, NavController, deep links y back stack.",
      items: [
      "navigation-compose dependencia y NavHost.",
      "composable(\"route\") { } destinations.",
      "navigate con popUpTo inclusive back stack limpio.",
      "Argumentos type-safe Navigation 2.8+ routes.",
      "Nested navigation graphs por feature.",
      "Single-activity architecture recomendada.",
      "Predictive back gesture Android 14+.",
      "Deep link intent-filter en manifest.",
      "Testing NavController con TestNavHostController.",
      "Evitar NavController en singleton global."
],
      content: "## Panorama: NAVEGACIÓN COMPOSE (NAVHOST)\n\nRutas, NavController, deep links y back stack.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- navigation-compose dependencia y NavHost.\n- composable(\"route\") { } destinations.\n- navigate con popUpTo inclusive back stack limpio.\n- Argumentos type-safe Navigation 2.8+ routes.\n- Nested navigation graphs por feature.\n## Desarrollo\n\n### 1. Punto 1\n\nnavigation-compose dependencia y NavHost. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\ncomposable(\"route\") { } destinations. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nnavigate con popUpTo inclusive back stack limpio. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nArgumentos type-safe Navigation 2.8+ routes. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nNested navigation graphs por feature. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nSingle-activity architecture recomendada. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nPredictive back gesture Android 14+. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nDeep link intent-filter en manifest. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nTesting NavController con TestNavHostController. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nEvitar NavController en singleton global. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-16` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Deep link intent-filter en manifest.\n- [ ] Dominé: Testing NavController con TestNavHostController.\n- [ ] Dominé: Evitar NavController en singleton global.\n",
      codeSnippet: `val navController = rememberNavController()
NavHost(navController = navController, startDestination = "home") {
    composable("home") { HomeScreen(onOpen = { id -> navController.navigate("detail/$id") }) }
    composable("detail/{id}") { backStackEntry ->
        val id = backStackEntry.arguments?.getString("id")!!
        DetailScreen(id = id, onBack = { navController.popBackStack() })
    }
}`,
      quiz: [
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "navigation-compose dependencia y NavHost.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: navigation-compose dependencia y NavHost."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "composable(\"route\") { } destinations.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: composable(\"route\") { } destinations."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "navigate con popUpTo inclusive back stack limpio.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: navigate con popUpTo inclusive back stack limpio."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Argumentos type-safe Navigation 2.8+ routes.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Argumentos type-safe Navigation 2.8+ routes."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Nested navigation graphs por feature.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Nested navigation graphs por feature."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Single-activity architecture recomendada.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Single-activity architecture recomendada."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Predictive back gesture Android 14+.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Predictive back gesture Android 14+."
        },
        {
          question: "Módulo 16 (NAVEGACIÓN COMPOSE (NAVHOST)): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Deep link intent-filter en manifest.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Deep link intent-filter en manifest."
        },
        {
          question: "Módulo 16: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8161,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 16: Rutas, NavController, deep links y back stack.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8162,
          instruction: "DESAFÍO módulo 16: explica en 5 líneas cómo depurarías un fallo relacionado con navigation-compose dependencia y NavHost.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 17,
      title: "MÓDULO 17: ARQUITECTURA MVVM EN ANDROID [Compose]",
      description: "Capas claras, unidirectional data flow, Use cases opcionales.",
      items: [
      "UI observa estado; ViewModel procesa intenciones.",
      "Repository abstrae fuentes datos local/remota.",
      "Domain layer puro Kotlin sin Android imports.",
      "Mappers DTO ↔ Entity ↔ UiModel.",
      "Errores modelados sealed class Result.",
      "Single source of truth en Room o remote.",
      "Offline-first con cache y refresh.",
      "Package by feature ui/domain/data.",
      "Decision tree: cuándo UseCase merece archivo propio.",
      "Google Now in Android sample como referencia."
],
      content: "## Panorama: ARQUITECTURA MVVM EN ANDROID\n\nCapas claras, unidirectional data flow, Use cases opcionales.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- UI observa estado; ViewModel procesa intenciones.\n- Repository abstrae fuentes datos local/remota.\n- Domain layer puro Kotlin sin Android imports.\n- Mappers DTO ↔ Entity ↔ UiModel.\n- Errores modelados sealed class Result.\n## Desarrollo\n\n### 1. Punto 1\n\nUI observa estado; ViewModel procesa intenciones. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nRepository abstrae fuentes datos local/remota. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nDomain layer puro Kotlin sin Android imports. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nMappers DTO ↔ Entity ↔ UiModel. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nErrores modelados sealed class Result. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nSingle source of truth en Room o remote. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nOffline-first con cache y refresh. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nPackage by feature ui/domain/data. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Decision tree\n\nDecision tree: cuándo UseCase merece archivo propio. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nGoogle Now in Android sample como referencia. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-17` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Package by feature ui/domain/data.\n- [ ] Dominé: Decision tree: cuándo UseCase merece archivo propio.\n- [ ] Dominé: Google Now in Android sample como referencia.\n",
      codeSnippet: `// UiState inmutable
data class LoginUiState(
    val email: String = "",
    val loading: Boolean = false,
    val error: String? = null
)
class LoginViewModel(private val auth: AuthRepository) : ViewModel() {
    private val _state = MutableStateFlow(LoginUiState())
    val state = _state.asStateFlow()
    fun onSubmit() = viewModelScope.launch {
        _state.update { it.copy(loading = true) }
        runCatching { auth.signIn(_state.value.email) }
            .onSuccess { _state.update { LoginUiState() } }
            .onFailure { e -> _state.update { it.copy(loading = false, error = e.message) } }
    }
}`,
      quiz: [
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "UI observa estado; ViewModel procesa intenciones.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: UI observa estado; ViewModel procesa intenciones."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Repository abstrae fuentes datos local/remota.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Repository abstrae fuentes datos local/remota."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Domain layer puro Kotlin sin Android imports.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Domain layer puro Kotlin sin Android imports."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Mappers DTO ↔ Entity ↔ UiModel.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Mappers DTO ↔ Entity ↔ UiModel."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Errores modelados sealed class Result.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Errores modelados sealed class Result."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Single source of truth en Room o remote.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Single source of truth en Room o remote."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Offline-first con cache y refresh.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Offline-first con cache y refresh."
        },
        {
          question: "Módulo 17 (ARQUITECTURA MVVM EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Package by feature ui/domain/data.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Package by feature ui/domain/data."
        },
        {
          question: "Módulo 17: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8171,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 17: Capas claras, unidirectional data flow, Use cases opcionales.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8172,
          instruction: "DESAFÍO módulo 17: explica en 5 líneas cómo depurarías un fallo relacionado con UI observa estado; ViewModel procesa intenciones.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 18,
      title: "MÓDULO 18: CLEAN ARCHITECTURE Y CAPAS [Compose]",
      description: "Dependencias hacia dentro, interfaces en dominio.",
      items: [
      "Entities y casos de uso en domain.",
      "Implementaciones Room/Retrofit en data.",
      "Presentation solo Android framework adentro.",
      "Inversión dependencias con interfaces.",
      "DTO vs domain model naming explícito.",
      "Testabilidad domain sin Robolectric.",
      "Over-engineering: no 5 capas en app trivia.",
      "Modularización :core :feature:login futuro.",
      "Documentar diagrama C4 en README.",
      "Alinear con SOLID del curso Clean Code QuimiSell."
],
      content: "## Panorama: CLEAN ARCHITECTURE Y CAPAS\n\nDependencias hacia dentro, interfaces en dominio.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Entities y casos de uso en domain.\n- Implementaciones Room/Retrofit en data.\n- Presentation solo Android framework adentro.\n- Inversión dependencias con interfaces.\n- DTO vs domain model naming explícito.\n## Desarrollo\n\n### 1. Punto 1\n\nEntities y casos de uso en domain. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nImplementaciones Room/Retrofit en data. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nPresentation solo Android framework adentro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nInversión dependencias con interfaces. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nDTO vs domain model naming explícito. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nTestabilidad domain sin Robolectric. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Over-engineering\n\nOver-engineering: no 5 capas en app trivia. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Modularización \n\nModularización :core :feature:login futuro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nDocumentar diagrama C4 en README. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nAlinear con SOLID del curso Clean Code QuimiSell. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-18` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Modularización :core :feature:login futuro.\n- [ ] Dominé: Documentar diagrama C4 en README.\n- [ ] Dominé: Alinear con SOLID del curso Clean Code QuimiSell.\n",
      codeSnippet: `// domain — sin imports android.*
interface NoteRepository {
    fun observe(): Flow<List<Note>>
    suspend fun upsert(note: Note)
}
// data
class NoteRepositoryImpl(
    private val dao: NoteDao,
    private val api: NotesApi
) : NoteRepository { /* ... */ }`,
      quiz: [
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Entities y casos de uso en domain.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Entities y casos de uso en domain."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Implementaciones Room/Retrofit en data.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Implementaciones Room/Retrofit en data."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Presentation solo Android framework adentro.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Presentation solo Android framework adentro."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Inversión dependencias con interfaces.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Inversión dependencias con interfaces."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "DTO vs domain model naming explícito.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: DTO vs domain model naming explícito."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Testabilidad domain sin Robolectric.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Testabilidad domain sin Robolectric."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Over-engineering: no 5 capas en app trivia.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Over-engineering: no 5 capas en app trivia."
        },
        {
          question: "Módulo 18 (CLEAN ARCHITECTURE Y CAPAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Modularización :core :feature:login futuro.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Modularización :core :feature:login futuro."
        },
        {
          question: "Módulo 18: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8181,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 18: Dependencias hacia dentro, interfaces en dominio.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8182,
          instruction: "DESAFÍO módulo 18: explica en 5 líneas cómo depurarías un fallo relacionado con Entities y casos de uso en domain.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 19,
      title: "MÓDULO 19: COROUTINAS EN ANDROID [Compose]",
      description: "suspend, Dispatchers.Main/IO, scopes y cancelación.",
      items: [
      "suspend fun no bloquea thread; continuations.",
      "launch vs async vs withContext.",
      "Main inmediate para UI post-frame.",
      "SupervisorJob evita cancelación hermana total.",
      "try/catch en coroutine; CoroutineExceptionHandler.",
      "delay vs Thread.sleep prohibido en main.",
      "structured concurrency jerarquía padre-hijo.",
      "kotlinx.coroutines en tests runTest.",
      "Integración Retrofit suspend functions.",
      "Leak: GlobalScope prohibido en apps."
],
      content: "## Panorama: COROUTINAS EN ANDROID\n\nsuspend, Dispatchers.Main/IO, scopes y cancelación.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- suspend fun no bloquea thread; continuations.\n- launch vs async vs withContext.\n- Main inmediate para UI post-frame.\n- SupervisorJob evita cancelación hermana total.\n- try/catch en coroutine; CoroutineExceptionHandler.\n## Desarrollo\n\n### 1. Punto 1\n\nsuspend fun no bloquea thread; continuations. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nlaunch vs async vs withContext. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nMain inmediate para UI post-frame. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nSupervisorJob evita cancelación hermana total. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\ntry/catch en coroutine; CoroutineExceptionHandler. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\ndelay vs Thread.sleep prohibido en main. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nstructured concurrency jerarquía padre-hijo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nkotlinx.coroutines en tests runTest. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nIntegración Retrofit suspend functions. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Leak\n\nLeak: GlobalScope prohibido en apps. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-19` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: kotlinx.coroutines en tests runTest.\n- [ ] Dominé: Integración Retrofit suspend functions.\n- [ ] Dominé: Leak: GlobalScope prohibido en apps.\n",
      codeSnippet: `suspend fun loadNotes(repo: NoteRepository): List<Note> = withContext(Dispatchers.IO) {
    repo.observe().first()
}
// En ViewModel
viewModelScope.launch {
    val notes = loadNotes(repository)
    _uiState.update { it.copy(items = notes) }
}`,
      quiz: [
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "suspend fun no bloquea thread; continuations.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: suspend fun no bloquea thread; continuations."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "launch vs async vs withContext.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: launch vs async vs withContext."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Main inmediate para UI post-frame.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Main inmediate para UI post-frame."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "SupervisorJob evita cancelación hermana total.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: SupervisorJob evita cancelación hermana total."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "try/catch en coroutine; CoroutineExceptionHandler.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: try/catch en coroutine; CoroutineExceptionHandler."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "delay vs Thread.sleep prohibido en main.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: delay vs Thread.sleep prohibido en main."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "structured concurrency jerarquía padre-hijo.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: structured concurrency jerarquía padre-hijo."
        },
        {
          question: "Módulo 19 (COROUTINAS EN ANDROID): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "kotlinx.coroutines en tests runTest.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: kotlinx.coroutines en tests runTest."
        },
        {
          question: "Módulo 19: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8191,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 19: suspend, Dispatchers.Main/IO, scopes y cancelación.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8192,
          instruction: "DESAFÍO módulo 19: explica en 5 líneas cómo depurarías un fallo relacionado con suspend fun no bloquea thread; continuations.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 20,
      title: "MÓDULO 20: FLOW, STATEFLOW Y UI REACTIVA [Compose]",
      description: "Cold Flow, hot StateFlow, combine y debounce.",
      items: [
      "Flow emisión secuencial cold por collector.",
      "stateIn sharingStarted WhileSubscribed(5000).",
      "SharedFlow eventos one-shot navegación snack.",
      "map filter flatMapLatest en pipelines.",
      "distinctUntilChanged evita recomposes.",
      "flowOn(Dispatchers.IO) upstream.",
      "Room observe as Flow<List<Entity>>.",
      "Testing Turbine library asserts.",
      "Buffer con BACKPRESSURE si productor rápido.",
      "Ui reacciona solo a flujos de estado estable."
],
      content: "## Panorama: FLOW, STATEFLOW Y UI REACTIVA\n\nCold Flow, hot StateFlow, combine y debounce.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Flow emisión secuencial cold por collector.\n- stateIn sharingStarted WhileSubscribed(5000).\n- SharedFlow eventos one-shot navegación snack.\n- map filter flatMapLatest en pipelines.\n- distinctUntilChanged evita recomposes.\n## Desarrollo\n\n### 1. Punto 1\n\nFlow emisión secuencial cold por collector. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nstateIn sharingStarted WhileSubscribed(5000). En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nSharedFlow eventos one-shot navegación snack. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nmap filter flatMapLatest en pipelines. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\ndistinctUntilChanged evita recomposes. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nflowOn(Dispatchers.IO) upstream. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nRoom observe as Flow<List<Entity>>. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nTesting Turbine library asserts. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nBuffer con BACKPRESSURE si productor rápido. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nUi reacciona solo a flujos de estado estable. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-20` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Testing Turbine library asserts.\n- [ ] Dominé: Buffer con BACKPRESSURE si productor rápido.\n- [ ] Dominé: Ui reacciona solo a flujos de estado estable.\n",
      codeSnippet: `fun searchQueryFlow(input: StateFlow<String>): Flow<List<Note>> =
    input
        .debounce(300)
        .distinctUntilChanged()
        .flatMapLatest { q -> repository.search(q) }`,
      quiz: [
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Flow emisión secuencial cold por collector.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Flow emisión secuencial cold por collector."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "stateIn sharingStarted WhileSubscribed(5000).",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: stateIn sharingStarted WhileSubscribed(5000)."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "SharedFlow eventos one-shot navegación snack.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: SharedFlow eventos one-shot navegación snack."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "map filter flatMapLatest en pipelines.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: map filter flatMapLatest en pipelines."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "distinctUntilChanged evita recomposes.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: distinctUntilChanged evita recomposes."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "flowOn(Dispatchers.IO) upstream.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: flowOn(Dispatchers.IO) upstream."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Room observe as Flow<List<Entity>>.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Room observe as Flow<List<Entity>>."
        },
        {
          question: "Módulo 20 (FLOW, STATEFLOW Y UI REACTIVA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Testing Turbine library asserts.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Testing Turbine library asserts."
        },
        {
          question: "Módulo 20: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8201,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 20: Cold Flow, hot StateFlow, combine y debounce.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8202,
          instruction: "DESAFÍO módulo 20: explica en 5 líneas cómo depurarías un fallo relacionado con Flow emisión secuencial cold por collector.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 21,
      title: "MÓDULO 21: ROOM — SQLITE CON ANOTACIONES [Compose]",
      description: "Entity, Dao, Database, migraciones y transacciones.",
      items: [
      "Room sobre SQLite: compile-time SQL verification.",
      "@Entity tableName primaryKey autoGenerate.",
      "@Dao @Insert @Update @Delete @Query.",
      "@Database entities exportSchema true prod.",
      "Migration startVersion endVersion SQL manual.",
      "Fallback destructive solo debug.",
      "Relaciones @Embedded @Relation one-to-many.",
      "Transacción @Transaction funciones Dao.",
      "Converters LocalDateTime UUID custom.",
      "Índices @Index columnas consulta frecuente."
],
      content: "## Panorama: ROOM — SQLITE CON ANOTACIONES\n\nEntity, Dao, Database, migraciones y transacciones.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Room sobre SQLite: compile-time SQL verification.\n- @Entity tableName primaryKey autoGenerate.\n- @Dao @Insert @Update @Delete @Query.\n- @Database entities exportSchema true prod.\n- Migration startVersion endVersion SQL manual.\n## Desarrollo\n\n### 1. Room sobre SQLite\n\nRoom sobre SQLite: compile-time SQL verification. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\n@Entity tableName primaryKey autoGenerate. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\n@Dao @Insert @Update @Delete @Query. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\n@Database entities exportSchema true prod. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nMigration startVersion endVersion SQL manual. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nFallback destructive solo debug. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nRelaciones @Embedded @Relation one-to-many. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nTransacción @Transaction funciones Dao. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nConverters LocalDateTime UUID custom. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nÍndices @Index columnas consulta frecuente. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-21` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Transacción @Transaction funciones Dao.\n- [ ] Dominé: Converters LocalDateTime UUID custom.\n- [ ] Dominé: Índices @Index columnas consulta frecuente.\n",
      codeSnippet: `@Entity(tableName = "notes")
data class NoteEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val title: String,
    val body: String,
    val createdAt: Long = System.currentTimeMillis()
)
@Dao
interface NoteDao {
    @Query("SELECT * FROM notes ORDER BY createdAt DESC")
    fun observeAll(): Flow<List<NoteEntity>>
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsert(note: NoteEntity)
}
@Database(entities = [NoteEntity::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun noteDao(): NoteDao
}`,
      quiz: [
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Room sobre SQLite: compile-time SQL verification.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Room sobre SQLite: compile-time SQL verification."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "@Entity tableName primaryKey autoGenerate.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: @Entity tableName primaryKey autoGenerate."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "@Dao @Insert @Update @Delete @Query.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: @Dao @Insert @Update @Delete @Query."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "@Database entities exportSchema true prod.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: @Database entities exportSchema true prod."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Migration startVersion endVersion SQL manual.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Migration startVersion endVersion SQL manual."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Fallback destructive solo debug.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Fallback destructive solo debug."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Relaciones @Embedded @Relation one-to-many.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Relaciones @Embedded @Relation one-to-many."
        },
        {
          question: "Módulo 21 (SQLITE CON ANOTACIONES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Transacción @Transaction funciones Dao.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Transacción @Transaction funciones Dao."
        },
        {
          question: "Módulo 21: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8211,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 21: Entity, Dao, Database, migraciones y transacciones.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8212,
          instruction: "DESAFÍO módulo 21: explica en 5 líneas cómo depurarías un fallo relacionado con Room sobre SQLite: compile-time SQL verification.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 22,
      title: "MÓDULO 22: ROOM + COMPOSE LISTAS REACTIVAS [Compose]",
      description: "Flow from DAO, LazyColumn, empty states.",
      items: [
      "dao.observeAll(): Flow<List<Note>>.",
      "flatMapLatest collect en ViewModel.",
      "LazyColumn items con key = note.id.",
      "SwipeToDismiss + delete en Dao.",
      "Search query filtrado SQL LIKE.",
      "Inserción on IO dispatcher.",
      "UI loading hasta primera emisión.",
      "Prepopulate database callback onCreate.",
      "Backup Room file debug solo.",
      "Prueba migración en dispositivo real."
],
      content: "## Panorama: ROOM + COMPOSE LISTAS REACTIVAS\n\nFlow from DAO, LazyColumn, empty states.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- dao.observeAll(): Flow<List<Note>>.\n- flatMapLatest collect en ViewModel.\n- LazyColumn items con key = note.id.\n- SwipeToDismiss + delete en Dao.\n- Search query filtrado SQL LIKE.\n## Desarrollo\n\n### 1. dao.observeAll()\n\ndao.observeAll(): Flow<List<Note>>. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nflatMapLatest collect en ViewModel. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nLazyColumn items con key = note.id. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nSwipeToDismiss + delete en Dao. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nSearch query filtrado SQL LIKE. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nInserción on IO dispatcher. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nUI loading hasta primera emisión. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nPrepopulate database callback onCreate. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nBackup Room file debug solo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nPrueba migración en dispositivo real. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-22` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Prepopulate database callback onCreate.\n- [ ] Dominé: Backup Room file debug solo.\n- [ ] Dominé: Prueba migración en dispositivo real.\n",
      codeSnippet: `@Composable
fun NotesScreen(viewModel: NotesViewModel = hiltViewModel()) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    when {
        state.loading -> CircularProgressIndicator()
        state.items.isEmpty() -> Text("Sin notas")
        else -> LazyColumn {
            items(state.items, key = { it.id }) { note ->
                ListItem(headlineContent = { Text(note.title) })
            }
        }
    }
}`,
      quiz: [
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "dao.observeAll(): Flow<List<Note>>.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: dao.observeAll(): Flow<List<Note>>."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "flatMapLatest collect en ViewModel.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: flatMapLatest collect en ViewModel."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "LazyColumn items con key = note.id.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: LazyColumn items con key = note.id."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "SwipeToDismiss + delete en Dao.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: SwipeToDismiss + delete en Dao."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Search query filtrado SQL LIKE.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Search query filtrado SQL LIKE."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Inserción on IO dispatcher.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Inserción on IO dispatcher."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "UI loading hasta primera emisión.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: UI loading hasta primera emisión."
        },
        {
          question: "Módulo 22 (ROOM + COMPOSE LISTAS REACTIVAS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Prepopulate database callback onCreate.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Prepopulate database callback onCreate."
        },
        {
          question: "Módulo 22: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8221,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 22: Flow from DAO, LazyColumn, empty states.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8222,
          instruction: "DESAFÍO módulo 22: explica en 5 líneas cómo depurarías un fallo relacionado con dao.observeAll(): Flow<List<Note>>.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 23,
      title: "MÓDULO 23: RETROFIT + GSON Y APIS REST [Compose]",
      description: "Interfaces HTTP, suspend, baseUrl y DTOs.",
      items: [
      "Retrofit.Builder baseUrl GsonConverterFactory.",
      "@GET @POST @Path @Query @Body.",
      "suspend fun sin Callback legacy.",
      "Gson @SerializedName vs Moshi Kotlin codegen.",
      "Envelopes API errores JSON campo message.",
      "BaseResponse<T> genérico parse.",
      "Timeout connect/read OkHttp.",
      "Chucker debug inspector HTTP.",
      "Certificate pinning mención módulo seguridad.",
      "OpenAPI/Swagger leer contrato backend."
],
      content: "## Panorama: RETROFIT + GSON Y APIS REST\n\nInterfaces HTTP, suspend, baseUrl y DTOs.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Retrofit.Builder baseUrl GsonConverterFactory.\n- @GET @POST @Path @Query @Body.\n- suspend fun sin Callback legacy.\n- Gson @SerializedName vs Moshi Kotlin codegen.\n- Envelopes API errores JSON campo message.\n## Desarrollo\n\n### 1. Punto 1\n\nRetrofit.Builder baseUrl GsonConverterFactory. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\n@GET @POST @Path @Query @Body. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nsuspend fun sin Callback legacy. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nGson @SerializedName vs Moshi Kotlin codegen. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nEnvelopes API errores JSON campo message. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nBaseResponse<T> genérico parse. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nTimeout connect/read OkHttp. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nChucker debug inspector HTTP. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nCertificate pinning mención módulo seguridad. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nOpenAPI/Swagger leer contrato backend. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-23` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Chucker debug inspector HTTP.\n- [ ] Dominé: Certificate pinning mención módulo seguridad.\n- [ ] Dominé: OpenAPI/Swagger leer contrato backend.\n",
      codeSnippet: `interface PostsApi {
    @GET("posts")
    suspend fun list(): List<PostDto>
}
val gson = GsonBuilder().create()
val retrofit = Retrofit.Builder()
    .baseUrl("https://jsonplaceholder.typicode.com/")
    .client(OkHttpClient.Builder().build())
    .addConverterFactory(GsonConverterFactory.create(gson))
    .build()
val api = retrofit.create(PostsApi::class.java)`,
      quiz: [
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Retrofit.Builder baseUrl GsonConverterFactory.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Retrofit.Builder baseUrl GsonConverterFactory."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "@GET @POST @Path @Query @Body.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: @GET @POST @Path @Query @Body."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "suspend fun sin Callback legacy.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: suspend fun sin Callback legacy."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Gson @SerializedName vs Moshi Kotlin codegen.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Gson @SerializedName vs Moshi Kotlin codegen."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Envelopes API errores JSON campo message.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Envelopes API errores JSON campo message."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "BaseResponse<T> genérico parse.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: BaseResponse<T> genérico parse."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Timeout connect/read OkHttp.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Timeout connect/read OkHttp."
        },
        {
          question: "Módulo 23 (RETROFIT + GSON Y APIS REST): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Chucker debug inspector HTTP.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Chucker debug inspector HTTP."
        },
        {
          question: "Módulo 23: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8231,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 23: Interfaces HTTP, suspend, baseUrl y DTOs.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8232,
          instruction: "DESAFÍO módulo 23: explica en 5 líneas cómo depurarías un fallo relacionado con Retrofit.Builder baseUrl GsonConverterFactory.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 24,
      title: "MÓDULO 24: OKHTTP, INTERCEPTORS Y ERRORES [Compose]",
      description: "Auth header, logging, retry y códigos HTTP.",
      items: [
      "Interceptor chain orden request/response.",
      "Authenticator refresh token 401.",
      "HttpLoggingInterceptor BODY solo debug.",
      "map HTTP 4xx a UiError.UserMessage.",
      "Idempotency POST críticos.",
      "Caching CacheControl offline stub.",
      "Multipart upload imágenes CameraX después.",
      "ProGuard keep rules Gson models.",
      "MockWebServer tests integración.",
      "No loguear tokens en producción."
],
      content: "## Panorama: OKHTTP, INTERCEPTORS Y ERRORES\n\nAuth header, logging, retry y códigos HTTP.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Interceptor chain orden request/response.\n- Authenticator refresh token 401.\n- HttpLoggingInterceptor BODY solo debug.\n- map HTTP 4xx a UiError.UserMessage.\n- Idempotency POST críticos.\n## Desarrollo\n\n### 1. Punto 1\n\nInterceptor chain orden request/response. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nAuthenticator refresh token 401. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nHttpLoggingInterceptor BODY solo debug. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nmap HTTP 4xx a UiError.UserMessage. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nIdempotency POST críticos. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nCaching CacheControl offline stub. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nMultipart upload imágenes CameraX después. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nProGuard keep rules Gson models. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nMockWebServer tests integración. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nNo loguear tokens en producción. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-24` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: ProGuard keep rules Gson models.\n- [ ] Dominé: MockWebServer tests integración.\n- [ ] Dominé: No loguear tokens en producción.\n",
      codeSnippet: `val client = OkHttpClient.Builder()
    .addInterceptor { chain ->
        val req = chain.request().newBuilder()
            .header("Authorization", "Bearer " + tokenStore.get())
            .build()
        chain.proceed(req)
    }
    .addInterceptor(HttpLoggingInterceptor().apply {
        level = if (BuildConfig.DEBUG) Level.BODY else Level.NONE
    })
    .build()`,
      quiz: [
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Interceptor chain orden request/response.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Interceptor chain orden request/response."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Authenticator refresh token 401.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Authenticator refresh token 401."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "HttpLoggingInterceptor BODY solo debug.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: HttpLoggingInterceptor BODY solo debug."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "map HTTP 4xx a UiError.UserMessage.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: map HTTP 4xx a UiError.UserMessage."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Idempotency POST críticos.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Idempotency POST críticos."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Caching CacheControl offline stub.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Caching CacheControl offline stub."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Multipart upload imágenes CameraX después.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Multipart upload imágenes CameraX después."
        },
        {
          question: "Módulo 24 (OKHTTP, INTERCEPTORS Y ERRORES): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "ProGuard keep rules Gson models.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: ProGuard keep rules Gson models."
        },
        {
          question: "Módulo 24: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8241,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 24: Auth header, logging, retry y códigos HTTP.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8242,
          instruction: "DESAFÍO módulo 24: explica en 5 líneas cómo depurarías un fallo relacionado con Interceptor chain orden request/response.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: false
        }
      ]
    },
{
      id: 25,
      title: "MÓDULO 25: SEGURIDAD ANDROID — RED Y SECRETOS [Compose]",
      description: "HTTPS, Network Security Config, Keystore, ofuscación.",
      items: [
      "cleartextTrafficPermitted false producción.",
      "network_security_config pin set opcional.",
      "Secrets en BuildConfig o remote config.",
      "Android Keystore asymmetric keys.",
      "EncryptedSharedPreferences para tokens.",
      "Root detection y tamper awareness básico.",
      "SafetyNet/Play Integrity overview.",
      "R8 full mode shrink recursos.",
      "OWASP MASVS checklist móvil.",
      "Threat model por pantalla sensible."
],
      content: "## Panorama: SEGURIDAD ANDROID — RED Y SECRETOS\n\nHTTPS, Network Security Config, Keystore, ofuscación.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- cleartextTrafficPermitted false producción.\n- network_security_config pin set opcional.\n- Secrets en BuildConfig o remote config.\n- Android Keystore asymmetric keys.\n- EncryptedSharedPreferences para tokens.\n## Desarrollo\n\n### 1. Punto 1\n\ncleartextTrafficPermitted false producción. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nnetwork_security_config pin set opcional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nSecrets en BuildConfig o remote config. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nAndroid Keystore asymmetric keys. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nEncryptedSharedPreferences para tokens. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nRoot detection y tamper awareness básico. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nSafetyNet/Play Integrity overview. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nR8 full mode shrink recursos. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nOWASP MASVS checklist móvil. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nThreat model por pantalla sensible. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-25` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: R8 full mode shrink recursos.\n- [ ] Dominé: OWASP MASVS checklist móvil.\n- [ ] Dominé: Threat model por pantalla sensible.\n",
      codeSnippet: `<!-- res/xml/network_security_config.xml -->
<network-security-config>
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>`,
      quiz: [
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "cleartextTrafficPermitted false producción.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: cleartextTrafficPermitted false producción."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "network_security_config pin set opcional.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: network_security_config pin set opcional."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Secrets en BuildConfig o remote config.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Secrets en BuildConfig o remote config."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Android Keystore asymmetric keys.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Android Keystore asymmetric keys."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "EncryptedSharedPreferences para tokens.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: EncryptedSharedPreferences para tokens."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Root detection y tamper awareness básico.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Root detection y tamper awareness básico."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "SafetyNet/Play Integrity overview.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: SafetyNet/Play Integrity overview."
        },
        {
          question: "Módulo 25 (RED Y SECRETOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "R8 full mode shrink recursos.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: R8 full mode shrink recursos."
        },
        {
          question: "Módulo 25: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8251,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 25: HTTPS, Network Security Config, Keystore, ofuscación.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8252,
          instruction: "DESAFÍO módulo 25: explica en 5 líneas cómo depurarías un fallo relacionado con cleartextTrafficPermitted false producción.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    },
{
      id: 26,
      title: "MÓDULO 26: PRIVACIDAD UI — FLAG_SECURE Y ANTI-CAPTURA [Compose]",
      description: "Como chats privados WhatsApp: sin screenshots ni grabación de pantalla.",
      items: [
      "WindowManager.LayoutParams.FLAG_SECURE en Activity sensible.",
      "window.setFlags(FLAG_SECURE, FLAG_SECURE) onCreate.",
      "Efecto: screenshots negro, recents oculta contenido parcial.",
      "No confundir con MediaProjection (eso ES grabar pantalla).",
      "Compose: LocalView.current context Activity window flags.",
      "Sensitive screens composable wrapper remember flag.",
      "Excluir solo pantallas confidenciales no toda app.",
      "Limitaciones OEM y Android 14 thumbnail policies.",
      "Alternativa overlay privacy al background.",
      "Combinar con biometría antes de quitar flag."
],
      content: "## Panorama: PRIVACIDAD UI — FLAG_SECURE Y ANTI-CAPTURA\n\nComo chats privados WhatsApp: sin screenshots ni grabación de pantalla.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- WindowManager.LayoutParams.FLAG_SECURE en Activity sensible.\n- window.setFlags(FLAG_SECURE, FLAG_SECURE) onCreate.\n- Efecto: screenshots negro, recents oculta contenido parcial.\n- No confundir con MediaProjection (eso ES grabar pantalla).\n- Compose: LocalView.current context Activity window flags.\n## Desarrollo\n\n### 1. Punto 1\n\nWindowManager.LayoutParams.FLAG_SECURE en Activity sensible. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nwindow.setFlags(FLAG_SECURE, FLAG_SECURE) onCreate. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Efecto\n\nEfecto: screenshots negro, recents oculta contenido parcial. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nNo confundir con MediaProjection (eso ES grabar pantalla). En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Compose\n\nCompose: LocalView.current context Activity window flags. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nSensitive screens composable wrapper remember flag. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nExcluir solo pantallas confidenciales no toda app. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nLimitaciones OEM y Android 14 thumbnail policies. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nAlternativa overlay privacy al background. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nCombinar con biometría antes de quitar flag. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-26` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Limitaciones OEM y Android 14 thumbnail policies.\n- [ ] Dominé: Alternativa overlay privacy al background.\n- [ ] Dominé: Combinar con biometría antes de quitar flag.\n",
      codeSnippet: `fun Activity.enableSecureScreen() {
    window.setFlags(
        WindowManager.LayoutParams.FLAG_SECURE,
        WindowManager.LayoutParams.FLAG_SECURE
    )
}
fun Activity.disableSecureScreen() {
    window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
}
// Pantalla de chat privado — estilo WhatsApp:
class PrivateChatActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableSecureScreen()
        setContent { PrivateChatRoute() }
    }
}`,
      quiz: [
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "WindowManager.LayoutParams.FLAG_SECURE en Activity sensible.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: WindowManager.LayoutParams.FLAG_SECURE en Activity sensible."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "window.setFlags(FLAG_SECURE, FLAG_SECURE) onCreate.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: window.setFlags(FLAG_SECURE, FLAG_SECURE) onCreate."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Efecto: screenshots negro, recents oculta contenido parcial.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Efecto: screenshots negro, recents oculta contenido parcial."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "No confundir con MediaProjection (eso ES grabar pantalla).",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: No confundir con MediaProjection (eso ES grabar pantalla)."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Compose: LocalView.current context Activity window flags.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Compose: LocalView.current context Activity window flags."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Sensitive screens composable wrapper remember flag.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Sensitive screens composable wrapper remember flag."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Excluir solo pantallas confidenciales no toda app.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Excluir solo pantallas confidenciales no toda app."
        },
        {
          question: "Módulo 26 (FLAG_SECURE Y ANTI-CAPTURA): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Limitaciones OEM y Android 14 thumbnail policies.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Limitaciones OEM y Android 14 thumbnail policies."
        },
        {
          question: "Módulo 26: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8261,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 26: Como chats privados WhatsApp: sin screenshots ni grabación de pantalla.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8262,
          instruction: "DESAFÍO módulo 26: explica en 5 líneas cómo depurarías un fallo relacionado con WindowManager.LayoutParams.FLAG_SECURE en Activity…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    },
{
      id: 27,
      title: "MÓDULO 27: CAMERAX — PREVIEW Y CAPTURA DE FOTO [Compose]",
      description: "Cámara hardware real; NO MediaProjection ni grabación pantalla.",
      items: [
      "CameraX ProcessCameraProvider bind lifecycle.",
      "PreviewView en Compose AndroidView bridge.",
      "ImageCapture takePicture flash mode.",
      "ImageAnalysis ML opcional barcode.",
      "Selector LENS_FACING_BACK vs FRONT.",
      "Resolution y aspect ratio strategy.",
      "Executor main vs background capture.",
      "Guardar MediaStore o app-specific storage.",
      "Liberar camera en onStop si single-activity.",
      "Diferenciar CameraX vs grabar pantalla illegal UX."
],
      content: "## Panorama: CAMERAX — PREVIEW Y CAPTURA DE FOTO\n\nCámara hardware real; NO MediaProjection ni grabación pantalla.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- CameraX ProcessCameraProvider bind lifecycle.\n- PreviewView en Compose AndroidView bridge.\n- ImageCapture takePicture flash mode.\n- ImageAnalysis ML opcional barcode.\n- Selector LENS_FACING_BACK vs FRONT.\n## Desarrollo\n\n### 1. Punto 1\n\nCameraX ProcessCameraProvider bind lifecycle. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nPreviewView en Compose AndroidView bridge. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nImageCapture takePicture flash mode. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nImageAnalysis ML opcional barcode. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nSelector LENS_FACING_BACK vs FRONT. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nResolution y aspect ratio strategy. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nExecutor main vs background capture. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nGuardar MediaStore o app-specific storage. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nLiberar camera en onStop si single-activity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nDiferenciar CameraX vs grabar pantalla illegal UX. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-27` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Guardar MediaStore o app-specific storage.\n- [ ] Dominé: Liberar camera en onStop si single-activity.\n- [ ] Dominé: Diferenciar CameraX vs grabar pantalla illegal UX.\n",
      codeSnippet: `// CameraX — captura FOTO del sensor, no grabación de pantalla
val cameraProviderFuture = ProcessCameraProvider.getInstance(context)
cameraProviderFuture.addListener({
    val provider = cameraProviderFuture.get()
    val preview = Preview.Builder().build().also {
        it.surfaceProvider = previewView.surfaceProvider
    }
    val capture = ImageCapture.Builder().build()
    provider.bindToLifecycle(lifecycleOwner, CameraSelector.DEFAULT_BACK_CAMERA, preview, capture)
}, ContextCompat.getMainExecutor(context))`,
      quiz: [
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "CameraX ProcessCameraProvider bind lifecycle.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: CameraX ProcessCameraProvider bind lifecycle."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "PreviewView en Compose AndroidView bridge.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: PreviewView en Compose AndroidView bridge."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "ImageCapture takePicture flash mode.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: ImageCapture takePicture flash mode."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "ImageAnalysis ML opcional barcode.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: ImageAnalysis ML opcional barcode."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Selector LENS_FACING_BACK vs FRONT.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Selector LENS_FACING_BACK vs FRONT."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Resolution y aspect ratio strategy.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Resolution y aspect ratio strategy."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Executor main vs background capture.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Executor main vs background capture."
        },
        {
          question: "Módulo 27 (PREVIEW Y CAPTURA DE FOTO): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Guardar MediaStore o app-specific storage.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Guardar MediaStore o app-specific storage."
        },
        {
          question: "Módulo 27: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8271,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 27: Cámara hardware real; NO MediaProjection ni grabación pantalla.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8272,
          instruction: "DESAFÍO módulo 27: explica en 5 líneas cómo depurarías un fallo relacionado con CameraX ProcessCameraProvider bind lifecycle.…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    },
{
      id: 28,
      title: "MÓDULO 28: PERMISOS RUNTIME Y SCOPED STORAGE [Compose]",
      description: "CAMERA, READ_MEDIA_IMAGES, requestPermissions contract.",
      items: [
      "Dangerous permissions solicitud en runtime Android 6+.",
      "rememberLauncherForActivityResult RequestPermission.",
      "shouldShowRequestPermissionRationale UX educativa.",
      "Permisos granular media Android 13.",
      "Scoped storage SAF sin WRITE_EXTERNAL_STORAGE legacy.",
      "FileProvider authorities para share URI.",
      "Foto capturada permisos mínimos necesarios.",
      "Manifest merged permission camera hardware feature.",
      "Testing GrantPermissionRule instrumented.",
      "Política Play data safety form."
],
      content: "## Panorama: PERMISOS RUNTIME Y SCOPED STORAGE\n\nCAMERA, READ_MEDIA_IMAGES, requestPermissions contract.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Dangerous permissions solicitud en runtime Android 6+.\n- rememberLauncherForActivityResult RequestPermission.\n- shouldShowRequestPermissionRationale UX educativa.\n- Permisos granular media Android 13.\n- Scoped storage SAF sin WRITE_EXTERNAL_STORAGE legacy.\n## Desarrollo\n\n### 1. Punto 1\n\nDangerous permissions solicitud en runtime Android 6+. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nrememberLauncherForActivityResult RequestPermission. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nshouldShowRequestPermissionRationale UX educativa. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nPermisos granular media Android 13. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nScoped storage SAF sin WRITE_EXTERNAL_STORAGE legacy. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nFileProvider authorities para share URI. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nFoto capturada permisos mínimos necesarios. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nManifest merged permission camera hardware feature. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nTesting GrantPermissionRule instrumented. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nPolítica Play data safety form. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-28` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Manifest merged permission camera hardware feature.\n- [ ] Dominé: Testing GrantPermissionRule instrumented.\n- [ ] Dominé: Política Play data safety form.\n",
      codeSnippet: `val requestCamera = rememberLauncherForActivityResult(
    ActivityResultContracts.RequestPermission()
) { granted ->
    if (granted) viewModel.onCameraReady() else viewModel.onPermissionDenied()
}
LaunchedEffect(Unit) {
    if (ContextCompat.checkSelfPermission(ctx, Manifest.permission.CAMERA)
        != PackageManager.PERMISSION_GRANTED
    ) {
        requestCamera.launch(Manifest.permission.CAMERA)
    }
}`,
      quiz: [
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Dangerous permissions solicitud en runtime Android 6+.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Dangerous permissions solicitud en runtime Android 6+."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "rememberLauncherForActivityResult RequestPermission.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: rememberLauncherForActivityResult RequestPermission."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "shouldShowRequestPermissionRationale UX educativa.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: shouldShowRequestPermissionRationale UX educativa."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Permisos granular media Android 13.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Permisos granular media Android 13."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Scoped storage SAF sin WRITE_EXTERNAL_STORAGE legacy.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Scoped storage SAF sin WRITE_EXTERNAL_STORAGE legacy."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "FileProvider authorities para share URI.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: FileProvider authorities para share URI."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Foto capturada permisos mínimos necesarios.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Foto capturada permisos mínimos necesarios."
        },
        {
          question: "Módulo 28 (PERMISOS RUNTIME Y SCOPED STORAGE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Manifest merged permission camera hardware feature.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Manifest merged permission camera hardware feature."
        },
        {
          question: "Módulo 28: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8281,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 28: CAMERA, READ_MEDIA_IMAGES, requestPermissions contract.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8282,
          instruction: "DESAFÍO módulo 28: explica en 5 líneas cómo depurarías un fallo relacionado con Dangerous permissions solicitud en runtime Android…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    },
{
      id: 29,
      title: "MÓDULO 29: INYECCIÓN HILT Y MÓDULOS [Compose]",
      description: "@HiltAndroidApp, @AndroidEntryPoint, provides Repos.",
      items: [
      "Hilt plugin kapt/ksp y @HiltAndroidApp Application.",
      "@AndroidEntryPoint Activity/Fragment.",
      "@HiltViewModel constructor inject.",
      "Module @Provides @Singleton Retrofit Room.",
      "Qualifiers @IoDispatcher @MainDispatcher.",
      "Testing @BindValue test modules.",
      "Hilt navigation compose hiltViewModel().",
      "Evitar field injection prefer constructor.",
      "Component hierarchy Singleton ActivityRetained.",
      "Migrar manual DI gradual feature."
],
      content: "## Panorama: INYECCIÓN HILT Y MÓDULOS\n\n@HiltAndroidApp, @AndroidEntryPoint, provides Repos.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- Hilt plugin kapt/ksp y @HiltAndroidApp Application.\n- @AndroidEntryPoint Activity/Fragment.\n- @HiltViewModel constructor inject.\n- Module @Provides @Singleton Retrofit Room.\n- Qualifiers @IoDispatcher @MainDispatcher.\n## Desarrollo\n\n### 1. Punto 1\n\nHilt plugin kapt/ksp y @HiltAndroidApp Application. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\n@AndroidEntryPoint Activity/Fragment. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\n@HiltViewModel constructor inject. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nModule @Provides @Singleton Retrofit Room. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nQualifiers @IoDispatcher @MainDispatcher. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nTesting @BindValue test modules. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nHilt navigation compose hiltViewModel(). En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nEvitar field injection prefer constructor. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nComponent hierarchy Singleton ActivityRetained. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nMigrar manual DI gradual feature. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-29` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: Evitar field injection prefer constructor.\n- [ ] Dominé: Component hierarchy Singleton ActivityRetained.\n- [ ] Dominé: Migrar manual DI gradual feature.\n",
      codeSnippet: `@HiltAndroidApp
class QuimiSellApp : Application()
@AndroidEntryPoint
class MainActivity : ComponentActivity() { /* ... */ }
@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {
    @Provides @Singleton
    fun provideRetrofit(): Retrofit = /* ... */
}
@HiltViewModel
class FeedViewModel @Inject constructor(
    private val repo: FeedRepository
) : ViewModel()`,
      quiz: [
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Hilt plugin kapt/ksp y @HiltAndroidApp Application.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Hilt plugin kapt/ksp y @HiltAndroidApp Application."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "@AndroidEntryPoint Activity/Fragment.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: @AndroidEntryPoint Activity/Fragment."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "@HiltViewModel constructor inject.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: @HiltViewModel constructor inject."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Module @Provides @Singleton Retrofit Room.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Module @Provides @Singleton Retrofit Room."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Qualifiers @IoDispatcher @MainDispatcher.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Qualifiers @IoDispatcher @MainDispatcher."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Testing @BindValue test modules.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Testing @BindValue test modules."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Hilt navigation compose hiltViewModel().",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Hilt navigation compose hiltViewModel()."
        },
        {
          question: "Módulo 29 (INYECCIÓN HILT Y MÓDULOS): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Evitar field injection prefer constructor.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Evitar field injection prefer constructor."
        },
        {
          question: "Módulo 29: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8291,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 29: @HiltAndroidApp, @AndroidEntryPoint, provides Repos.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8292,
          instruction: "DESAFÍO módulo 29: explica en 5 líneas cómo depurarías un fallo relacionado con Hilt plugin kapt/ksp y @HiltAndroidApp Application…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    },
{
      id: 30,
      title: "MÓDULO 30: PROYECTO FINAL — APP PROFESIONAL COMPOSE [Compose]",
      description: "Compose + Room + Retrofit + CameraX + FLAG_SECURE + release.",
      items: [
      "App multi-pantalla: feed API, cache Room, cámara adjunto.",
      "Chat o notas privadas pantalla con FLAG_SECURE.",
      "Arquitectura MVVM/Hilt verificable en diagrama.",
      "Tests mínimos ViewModel + Dao.",
      "CI GitHub Actions assembleDebug lint.",
      "APK/AAB release firmado upload-key seguro.",
      "Play Console checklist privacidad.",
      "README español con stack y decisiones.",
      "Demo video sin exponer API keys.",
      "Entrega email QuimiSell plantilla labChallenge."
],
      content: "## Panorama: PROYECTO FINAL — APP PROFESIONAL COMPOSE\n\nCompose + Room + Retrofit + CameraX + FLAG_SECURE + release.\n\nEsta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.\n## Objetivos\n\n- App multi-pantalla: feed API, cache Room, cámara adjunto.\n- Chat o notas privadas pantalla con FLAG_SECURE.\n- Arquitectura MVVM/Hilt verificable en diagrama.\n- Tests mínimos ViewModel + Dao.\n- CI GitHub Actions assembleDebug lint.\n## Desarrollo\n\n### 1. App multi-pantalla\n\nApp multi-pantalla: feed API, cache Room, cámara adjunto. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 2. Punto 2\n\nChat o notas privadas pantalla con FLAG_SECURE. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 3. Punto 3\n\nArquitectura MVVM/Hilt verificable en diagrama. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 4. Punto 4\n\nTests mínimos ViewModel + Dao. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 5. Punto 5\n\nCI GitHub Actions assembleDebug lint. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 6. Punto 6\n\nAPK/AAB release firmado upload-key seguro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 7. Punto 7\n\nPlay Console checklist privacidad. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 8. Punto 8\n\nREADME español con stack y decisiones. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 9. Punto 9\n\nDemo video sin exponer API keys. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n### 10. Punto 10\n\nEntrega email QuimiSell plantilla labChallenge. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n## Flujo con Android Studio + IA asistida\n\n1. Crea rama `feature/modulo-30` en Git.\n2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n4. Captura Logcat y adjunta en tu README de avance.\n\n## Errores frecuentes\n\n- Olvidar `sync` tras cambiar `build.gradle.kts`.\n- Tocar el hilo principal con red o disco.\n- Mezclar contextos de Activity en ViewModel.\n- Conceder permisos peligrosos solo en Manifest sin runtime.\n- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n## Preguntas de entrevista\n\n**P:** ¿Cuándo usas XML vs Compose?\n\n**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n## Checklist antes del siguiente módulo\n\n- [ ] Dominé: README español con stack y decisiones.\n- [ ] Dominé: Demo video sin exponer API keys.\n- [ ] Dominé: Entrega email QuimiSell plantilla labChallenge.\n",
      codeSnippet: `// Checklist release
// 1. minifyEnabled true + proguard-rules.pro
// 2. FLAG_SECURE en pantalla mensajes
// 3. Room cache + Retrofit refresh
// 4. CameraX solo CAMERA permission
// 5. Subir AAB firmado a Play Internal Testing`,
      quiz: [
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "App multi-pantalla: feed API, cache Room, cámara adjunto.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: App multi-pantalla: feed API, cache Room, cámara adjunto."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "Chat o notas privadas pantalla con FLAG_SECURE.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: Chat o notas privadas pantalla con FLAG_SECURE."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "Arquitectura MVVM/Hilt verificable en diagrama.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: Arquitectura MVVM/Hilt verificable en diagrama."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Tests mínimos ViewModel + Dao.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Tests mínimos ViewModel + Dao."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "CI GitHub Actions assembleDebug lint.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: CI GitHub Actions assembleDebug lint."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Hardcodear API keys en strings.xml versionados en Git.",
          "APK/AAB release firmado upload-key seguro.",
          "Ignorar el ciclo de vida y retener referencias a Activity en estático."],
          answerIndex: 1,
          explanation: "El temario establece: APK/AAB release firmado upload-key seguro."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ignorar el ciclo de vida y retener referencias a Activity en estático.",
          "Play Console checklist privacidad.",
          "Ejecutar operaciones de red directamente en onCreate sin coroutines."],
          answerIndex: 1,
          explanation: "El temario establece: Play Console checklist privacidad."
        },
        {
          question: "Módulo 30 (APP PROFESIONAL COMPOSE): ¿Cuál afirmación describe correctamente el concepto?",
          options: ["Ejecutar operaciones de red directamente en onCreate sin coroutines.",
          "README español con stack y decisiones.",
          "Hardcodear API keys en strings.xml versionados en Git."],
          answerIndex: 1,
          explanation: "El temario establece: README español con stack y decisiones."
        },
        {
          question: "Módulo 30: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
          options: ["Solo Blockbench 3D.",
          "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
          "Compilar sin Gradle para ir más rápido."],
          answerIndex: 1,
          explanation: "El curso promueve IA asistida con revisión de ingeniería en cada commit."
        }
      ],
      exercises: [
        {
          id: 8301,
          instruction: "Implementa en tu proyecto (COMPOSE) lo central del módulo 30: Compose + Room + Retrofit + CameraX + FLAG_SECURE + release.. Adjunta enlace GitHub o zip.",
          placeholder: "https://github.com/usuario/app-android",
          expectedKeywords: ["kotlin", "android", "compose", "gradle"],
          hint: "Incluye captura Android Studio y salida assembleDebug.",
          isEmailSubmission: false
        },
        {
          id: 8302,
          instruction: "DESAFÍO módulo 30: explica en 5 líneas cómo depurarías un fallo relacionado con App multi-pantalla: feed API, cache Room, cámara a…",
          placeholder: "Paso 1: Logcat…",
          expectedKeywords: ["Logcat", "depuración", "Android"],
          hint: "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
          isEmailSubmission: true
        }
      ]
    }
  ]
};
