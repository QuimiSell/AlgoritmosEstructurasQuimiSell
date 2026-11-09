## Panorama: ENTORNO — ANDROID STUDIO, KOTLIN Y CURSOR / ANTIGRAVITY

Instalación, primer proyecto Empty Views, JDK y flujo asistido por IA en el IDE.

Esta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.
## Objetivos

- Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB.
- Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java.
- Estructura app/ src/main (kotlin, res) y sincronización Gradle.
- Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras.
- Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores.
## Desarrollo

### 1. Android Studio Ladybug+

Android Studio Ladybug+: SDK Manager, emulador ARM/x86 y dispositivo físico con depuración USB. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 2. Kotlin en Android

Kotlin en Android: nulabilidad, data class y convenciones del lenguaje vs Java. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 3. Punto 3

Estructura app/ src/main (kotlin, res) y sincronización Gradle. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 4. Cursor o Antigravity CLI como copiloto

Cursor o Antigravity CLI como copiloto: reglas .cursorrules, prompts para generar Activities seguras. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 5. Git en el proyecto Android

Git en el proyecto Android: .gitignore, no versionar local.properties ni keystores. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 6. Punto 6

Build variant debug vs release y firma conceptual. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 7. Punto 7

Logcat filtrado por tag y nivel para depuración profesional. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 8. AndroidManifest.xml

AndroidManifest.xml: package, application, launcher Activity. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 9. Punto 9

Gradle Kotlin DSL (build.gradle.kts) lectura básica de plugins y dependencias. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 10. Punto 10

Checklist de primer commit reproducible en otro equipo. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

## Flujo con Android Studio + IA asistida

1. Crea rama `feature/modulo-1` en Git.
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

- [ ] Dominé: AndroidManifest.xml: package, application, launcher Activity…
- [ ] Dominé: Gradle Kotlin DSL (build.gradle.kts) lectura básica de plugi…
- [ ] Dominé: Checklist de primer commit reproducible en otro equipo.
