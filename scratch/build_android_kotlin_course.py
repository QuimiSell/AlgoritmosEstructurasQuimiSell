#!/usr/bin/env python3
"""Genera curso Android Kotlin (30 módulos) en courses/androidKotlinCourse.ts."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPEC = ROOT / "courses" / "androidKotlin" / "module_specs.json"
OUT_DIR = ROOT / "courses" / "androidKotlin"
COURSE_TS = ROOT / "courses" / "androidKotlinCourse.ts"
LECTURES = OUT_DIR / "lectures"

SNIPPETS: dict[str, str] = {
    "main_activity": """// build.gradle.kts (app)
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
}""",
    "manifest_permissions": """<!-- AndroidManifest.xml (extracto) -->
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
</manifest>""",
    "lifecycle": """class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("LIFE", "onCreate")
    }
    override fun onStart() { super.onStart(); Log.d("LIFE", "onStart") }
    override fun onResume() { super.onResume(); Log.d("LIFE", "onResume") }
    override fun onPause() { super.onPause(); Log.d("LIFE", "onPause") }
    override fun onStop() { super.onStop(); Log.d("LIFE", "onStop") }
    override fun onDestroy() { super.onDestroy(); Log.d("LIFE", "onDestroy") }
}""",
    "constraint_xml": """<!-- res/layout/activity_main.xml -->
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
</androidx.constraintlayout.widget.ConstraintLayout>""",
    "view_binding": """class LoginActivity : AppCompatActivity() {
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
}""",
    "material_xml": """<com.google.android.material.textfield.TextInputLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    style="@style/Widget.Material3.TextInputLayout.OutlinedBox">
    <com.google.android.material.textfield.TextInputEditText
        android:id="@+id/input"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="@string/hint_email" />
</com.google.android.material.textfield.TextInputLayout>""",
    "toolbar_menu": """override fun onCreateOptionsMenu(menu: Menu): Boolean {
    menuInflater.inflate(R.menu.menu_main, menu)
    return true
}
override fun onOptionsItemSelected(item: MenuItem): Boolean = when (item.itemId) {
    R.id.action_settings -> { startActivity(Intent(this, SettingsActivity::class.java)); true }
    else -> super.onOptionsItemSelected(item)
}""",
    "recyclerview": """class NoteAdapter : ListAdapter<Note, NoteAdapter.VH>(DIFF) {
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
}""",
    "fragments": """class ListFragment : Fragment() {
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
}""",
    "xml_milestone": """// ViewModel temporal hasta Room (módulo 21)
class TaskViewModel : ViewModel() {
    private val _tasks = MutableLiveData<List<Task>>(emptyList())
    val tasks: LiveData<List<Task>> = _tasks
    fun add(task: Task) {
        _tasks.value = _tasks.value.orEmpty() + task
    }
}""",
    "compose_hello": """class MainActivity : ComponentActivity() {
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
}""",
    "compose_layout": """@Composable
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
}""",
    "compose_state": """@Composable
fun CounterScreen() {
    var count by rememberSaveable { mutableIntStateOf(0) }
  Column(Modifier.padding(16.dp)) {
        Text("Clicks: $count")
        Button(onClick = { count++ }) { Text("Incrementar") }
    }
}""",
    "state_hoist": """@Composable
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
}""",
    "viewmodel_compose": """class NotesViewModel(
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
}""",
    "nav_compose": """val navController = rememberNavController()
NavHost(navController = navController, startDestination = "home") {
    composable("home") { HomeScreen(onOpen = { id -> navController.navigate("detail/$id") }) }
    composable("detail/{id}") { backStackEntry ->
        val id = backStackEntry.arguments?.getString("id")!!
        DetailScreen(id = id, onBack = { navController.popBackStack() })
    }
}""",
    "mvvm": """// UiState inmutable
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
}""",
    "clean_arch": """// domain — sin imports android.*
interface NoteRepository {
    fun observe(): Flow<List<Note>>
    suspend fun upsert(note: Note)
}
// data
class NoteRepositoryImpl(
    private val dao: NoteDao,
    private val api: NotesApi
) : NoteRepository { /* ... */ }""",
    "coroutines": """suspend fun loadNotes(repo: NoteRepository): List<Note> = withContext(Dispatchers.IO) {
    repo.observe().first()
}
// En ViewModel
viewModelScope.launch {
    val notes = loadNotes(repository)
    _uiState.update { it.copy(items = notes) }
}""",
    "flow": """fun searchQueryFlow(input: StateFlow<String>): Flow<List<Note>> =
    input
        .debounce(300)
        .distinctUntilChanged()
        .flatMapLatest { q -> repository.search(q) }""",
    "room": """@Entity(tableName = "notes")
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
}""",
    "room_compose": """@Composable
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
}""",
    "retrofit_gson": """interface PostsApi {
    @GET("posts")
    suspend fun list(): List<PostDto>
}
val gson = GsonBuilder().create()
val retrofit = Retrofit.Builder()
    .baseUrl("https://jsonplaceholder.typicode.com/")
    .client(OkHttpClient.Builder().build())
    .addConverterFactory(GsonConverterFactory.create(gson))
    .build()
val api = retrofit.create(PostsApi::class.java)""",
    "okhttp": """val client = OkHttpClient.Builder()
    .addInterceptor { chain ->
        val req = chain.request().newBuilder()
            .header("Authorization", "Bearer " + tokenStore.get())
            .build()
        chain.proceed(req)
    }
    .addInterceptor(HttpLoggingInterceptor().apply {
        level = if (BuildConfig.DEBUG) Level.BODY else Level.NONE
    })
    .build()""",
    "network_security": """<!-- res/xml/network_security_config.xml -->
<network-security-config>
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>""",
    "flag_secure": """fun Activity.enableSecureScreen() {
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
}""",
    "camerax": """// CameraX — captura FOTO del sensor, no grabación de pantalla
val cameraProviderFuture = ProcessCameraProvider.getInstance(context)
cameraProviderFuture.addListener({
    val provider = cameraProviderFuture.get()
    val preview = Preview.Builder().build().also {
        it.surfaceProvider = previewView.surfaceProvider
    }
    val capture = ImageCapture.Builder().build()
    provider.bindToLifecycle(lifecycleOwner, CameraSelector.DEFAULT_BACK_CAMERA, preview, capture)
}, ContextCompat.getMainExecutor(context))""",
    "permissions": """val requestCamera = rememberLauncherForActivityResult(
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
}""",
    "hilt": """@HiltAndroidApp
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
) : ViewModel()""",
    "capstone": """// Checklist release
// 1. minifyEnabled true + proguard-rules.pro
// 2. FLAG_SECURE en pantalla mensajes
// 3. Room cache + Retrofit refresh
// 4. CameraX solo CAMERA permission
// 5. Subir AAB firmado a Play Internal Testing""",
}


def esc(s: str) -> str:
    s = s.replace("\r\n", "\n").replace("\r", "")
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def render_lecture(m: dict) -> str:
    track = "XML y Views clásicas" if m["track"] == "xml" else "Jetpack Compose y arquitectura moderna"
    n = m["id"]
    title = m["title"]
    subtitle = m["subtitle"]
    items = m["items"]
    ia = (
        "Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre "
        "permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código."
    )
    sections = [
        f"## Panorama: {title}\n\n{subtitle}\n\n"
        f"Esta lección pertenece al bloque **{track}** (módulos {'1–10' if m['track']=='xml' else '11–30'}). "
        f"{ia}\n",
        "## Objetivos\n\n"
        + "\n".join(f"- {it}" for it in items[:5])
        + "\n",
        "## Desarrollo\n\n",
    ]
    for i, bullet in enumerate(items, 1):
        sections.append(
            f"### {i}. {bullet.split(':')[0] if ':' in bullet[:40] else f'Punto {i}'}\n\n"
            f"{bullet} En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos "
            f"y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.\n\n"
        )
    sections.extend(
        [
            "## Flujo con Android Studio + IA asistida\n\n"
            "1. Crea rama `feature/modulo-%d` en Git.\n"
            "2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).\n"
            "3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.\n"
            "4. Captura Logcat y adjunta en tu README de avance.\n\n" % n,
            "## Errores frecuentes\n\n"
            "- Olvidar `sync` tras cambiar `build.gradle.kts`.\n"
            "- Tocar el hilo principal con red o disco.\n"
            "- Mezclar contextos de Activity en ViewModel.\n"
            "- Conceder permisos peligrosos solo en Manifest sin runtime.\n"
            "- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.\n",
            "## Preguntas de entrevista\n\n"
            "**P:** ¿Cuándo usas XML vs Compose?\n\n"
            "**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.\n\n"
            "**P:** ¿Cómo evitas capturas en pantallas sensibles?\n\n"
            "**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.\n\n",
            "## Checklist antes del siguiente módulo\n\n"
            + "\n".join(f"- [ ] Dominé: {it[:60]}…" if len(it) > 60 else f"- [ ] Dominé: {it}" for it in items[-3:])
            + "\n",
        ]
    )
    return "".join(sections)


def make_quiz(m: dict) -> list[dict]:
    mid = m["id"]
    title_short = m["title"].split("—")[-1].strip() if "—" in m["title"] else m["title"]
    questions = []
    for i, item in enumerate(m["items"][:8]):
        correct = item
        distractors = [
            "Ignorar el ciclo de vida y retener referencias a Activity en estático.",
            "Ejecutar operaciones de red directamente en onCreate sin coroutines.",
            "Hardcodear API keys en strings.xml versionados en Git.",
        ]
        opts = [distractors[i % 3], correct, distractors[(i + 1) % 3]]
        # shuffle so correct isn't always index 1 — keep index 1 as correct for consistency with generator
        questions.append(
            {
                "question": f"Módulo {mid} ({title_short}): ¿Cuál afirmación describe correctamente el concepto?",
                "options": opts,
                "answerIndex": 1,
                "explanation": f"El temario establece: {correct}",
            }
        )
    questions.append(
        {
            "question": f"Módulo {mid}: ¿Qué herramienta asistida encaja con Android Studio en este curso?",
            "options": [
                "Solo Blockbench 3D.",
                "Cursor o Antigravity CLI con revisión humana de permisos y Gradle.",
                "Compilar sin Gradle para ir más rápido.",
            ],
            "answerIndex": 1,
            "explanation": "El curso promueve IA asistida con revisión de ingeniería en cada commit.",
        }
    )
    return questions


def make_exercises(m: dict) -> list[dict]:
    base = 8000 + m["id"] * 10
    track = m["track"].upper()
    return [
        {
            "id": base + 1,
            "instruction": f"Implementa en tu proyecto ({track}) lo central del módulo {m['id']}: {m['subtitle']}. Adjunta enlace GitHub o zip.",
            "placeholder": "https://github.com/usuario/app-android",
            "expectedKeywords": ["kotlin", "android", m["track"], "gradle"],
            "hint": "Incluye captura Android Studio y salida assembleDebug.",
            "isEmailSubmission": False,
        },
        {
            "id": base + 2,
            "instruction": f"DESAFÍO módulo {m['id']}: explica en 5 líneas cómo depurarías un fallo relacionado con {m['items'][0][:50]}…",
            "placeholder": "Paso 1: Logcat…",
            "expectedKeywords": ["Logcat", "depuración", "Android"],
            "hint": "Menciona breakpoint, Layout Inspector o Database Inspector según tema.",
            "isEmailSubmission": m["id"] >= 25,
        },
    ]


def quiz_to_ts(questions: list[dict]) -> str:
    lines = ["      quiz: ["]
    for i, q in enumerate(questions):
        opts = ",\n          ".join(json.dumps(o, ensure_ascii=False) for o in q["options"])
        lines.append(
            "        {\n"
            f'          question: "{esc(q["question"])}",\n'
            f"          options: [{opts}],\n"
            f'          answerIndex: {q["answerIndex"]},\n'
            f'          explanation: "{esc(q["explanation"])}"\n'
            "        }"
            + ("," if i < len(questions) - 1 else "")
        )
    lines.append("      ]")
    return "\n".join(lines)


def exercises_to_ts(exercises: list[dict]) -> str:
    lines = ["      exercises: ["]
    for i, ex in enumerate(exercises):
        kw = ", ".join(f'"{esc(k)}"' for k in ex["expectedKeywords"])
        lines.append(
            "        {\n"
            f'          id: {ex["id"]},\n'
            f'          instruction: "{esc(ex["instruction"])}",\n'
            f'          placeholder: "{esc(ex["placeholder"])}",\n'
            f"          expectedKeywords: [{kw}],\n"
            f'          hint: "{esc(ex["hint"])}",\n'
            f'          isEmailSubmission: {"true" if ex["isEmailSubmission"] else "false"}\n'
            "        }" + ("," if i < len(exercises) - 1 else "")
        )
    lines.append("      ]")
    return "\n".join(lines)


def module_to_ts(m: dict, quiz: list, exercises: list) -> str:
    items_lines = ",\n      ".join(f'"{esc(it)}"' for it in m["items"])
    snippet = SNIPPETS.get(m["snippet_key"], "// Ver documentación Android Developers")
    content = render_lecture(m)
    track_badge = "XML" if m["track"] == "xml" else "Compose"
    return f"""{{
      id: {m["id"]},
      title: "MÓDULO {m["id"]}: {esc(m["title"])} [{track_badge}]",
      description: "{esc(m["subtitle"])}",
      items: [
      {items_lines}
],
      content: "{esc(content)}",
      codeSnippet: `{snippet.replace("`", "\\`")}`,
{quiz_to_ts(quiz)},
{exercises_to_ts(exercises)}
    }}"""


def main() -> None:
    specs: list[dict] = json.loads(SPEC.read_text(encoding="utf-8"))
    LECTURES.mkdir(parents=True, exist_ok=True)

    all_items: dict[str, list[str]] = {}
    all_quiz: dict[str, list] = {}
    all_exercises: dict[str, list] = {}

    modules_ts: list[str] = []
    study_reasons = []

    for m in specs:
        mid = str(m["id"])
        content_md = render_lecture(m)
        (LECTURES / f"module-{m['id']:02d}.md").write_text(content_md, encoding="utf-8")
        quiz = make_quiz(m)
        ex = make_exercises(m)
        all_items[mid] = m["items"]
        all_quiz[mid] = quiz
        all_exercises[mid] = ex
        modules_ts.append(module_to_ts(m, quiz, ex))
        study_reasons.append(
            {
                "id": m["id"],
                "title": m["title"].split("—")[-1].strip()[:48],
                "why": m["subtitle"][:120],
            }
        )

    (OUT_DIR / "moduleItems.json").write_text(
        json.dumps(all_items, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT_DIR / "proQuiz.json").write_text(
        json.dumps(all_quiz, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT_DIR / "tutorExercises.json").write_text(
        json.dumps(all_exercises, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    study_ts = ",\n    ".join(
        f'{{ id: {r["id"]}, title: "{esc(r["title"])}", why: "{esc(r["why"])}" }}'
        for r in study_reasons
    )

    header = f"""import {{ Course }} from '../domain/models';

export const ANDROID_KOTLIN_COURSE: Course = {{
  id: 'android_kotlin',
  title: 'Desarrollo Android con Kotlin: XML, Compose y Arquitectura',
  shortTitle: 'Android Kotlin',
  badge: 'Android Studio · XML · Jetpack Compose',
  icon: '🤖',
  description: '30 lecciones magistrales: módulos 1–10 con XML/Views, 11–30 con Jetpack Compose, Room, Retrofit+Gson, seguridad FLAG_SECURE anti-captura, CameraX (foto real, no grabación de pantalla) y flujo asistido con Cursor o Antigravity CLI.',
  whyStudyTitle: '📱 ¿Por qué Android Kotlin hoy?',
  whyStudyText: 'Android domina el móvil global. Kotlin es el lenguaje oficial, Compose acelera la UI y Room+Retrofit forman el 90% de apps productivas. Aprender FLAG_SECURE y permisos es lo que separa demos de apps listas para Play Store y casos como mensajes privados sin capturas.',
  studyPlanReasons: [
    {study_ts}
  ],
  labChallenge: {{
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
  }},
  modules: [
"""
    footer = """
  ]
};
"""
    COURSE_TS.write_text(header + ",\n".join(modules_ts) + footer, encoding="utf-8")
    print(f"Wrote {COURSE_TS} ({len(modules_ts)} modules, {COURSE_TS.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
