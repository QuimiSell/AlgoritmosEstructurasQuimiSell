## Panorama: ROOM + COMPOSE LISTAS REACTIVAS

Flow from DAO, LazyColumn, empty states.

Esta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.
## Objetivos

- dao.observeAll(): Flow<List<Note>>.
- flatMapLatest collect en ViewModel.
- LazyColumn items con key = note.id.
- SwipeToDismiss + delete en Dao.
- Search query filtrado SQL LIKE.
## Desarrollo

### 1. dao.observeAll()

dao.observeAll(): Flow<List<Note>>. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 2. Punto 2

flatMapLatest collect en ViewModel. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 3. Punto 3

LazyColumn items con key = note.id. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 4. Punto 4

SwipeToDismiss + delete en Dao. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 5. Punto 5

Search query filtrado SQL LIKE. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 6. Punto 6

Inserción on IO dispatcher. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 7. Punto 7

UI loading hasta primera emisión. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 8. Punto 8

Prepopulate database callback onCreate. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 9. Punto 9

Backup Room file debug solo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 10. Punto 10

Prueba migración en dispositivo real. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

## Flujo con Android Studio + IA asistida

1. Crea rama `feature/modulo-22` en Git.
2. Pide a Cursor un diff acotado («solo añade X sin tocar Gradle»).
3. Ejecuta `./gradlew :app:assembleDebug` y corrige errores de compilación tú mismo.
4. Captura Logcat y adjunta en tu README de avance.

## Errores frecuentes

- Olvidar `sync` tras cambiar `build.gradle.kts`.
- Tocar el hilo principal con red o disco.
- Mezclar contextos de Activity en ViewModel.
- Conceder permisos peligrosos solo en Manifest sin runtime.
- Confundir **grabación de pantalla (MediaProjection)** con **cámara (CameraX)** o **FLAG_SECURE**.
## Preguntas de entrevista

**P:** ¿Cuándo usas XML vs Compose?

**R:** XML para legado y equipos en transición; Compose para UI nueva, estado y previews. Muchos productos coexisten ambos años.

**P:** ¿Cómo evitas capturas en pantallas sensibles?

**R:** `FLAG_SECURE` en la ventana; no sustituye cifrado de datos en reposo.

## Checklist antes del siguiente módulo

- [ ] Dominé: Prepopulate database callback onCreate.
- [ ] Dominé: Backup Room file debug solo.
- [ ] Dominé: Prueba migración en dispositivo real.
