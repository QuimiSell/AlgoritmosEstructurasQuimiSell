## Panorama: GRADLE, MANIFEST Y PERMISOS DECLARATIVOS

minSdk/targetSdk, namespaces, permisos normal vs dangerous.

Esta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.
## Objetivos

- compileSdk y targetSdk: impacto en APIs y comportamiento de permisos.
- Manifest merge: libraries que inyectan permisos automáticamente.
- uses-permission vs uses-permission-sdk-23 y maxSdkVersion.
- application: allowBackup, networkSecurityConfig, tema icon.
- Product flavors y buildTypes (debug/release) sin duplicar código.
## Desarrollo

### 1. compileSdk y targetSdk

compileSdk y targetSdk: impacto en APIs y comportamiento de permisos. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 2. Manifest merge

Manifest merge: libraries que inyectan permisos automáticamente. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 3. Punto 3

uses-permission vs uses-permission-sdk-23 y maxSdkVersion. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 4. application

application: allowBackup, networkSecurityConfig, tema icon. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 5. Punto 5

Product flavors y buildTypes (debug/release) sin duplicar código. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 6. Punto 6

versionCode/versionName y trazabilidad Play Store. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 7. Punto 7

Dependencias implementation vs api vs kapt/ksp. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 8. Punto 8

Repositorios Maven Google + Central; evitar JCenter obsoleto. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 9. Punto 9

Sincronizar proyecto tras cambiar Gradle sin miedo al mensaje Sync Now. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 10. Punto 10

Leer dependencies.txt generado por Gradle para auditar versiones. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

## Flujo con Android Studio + IA asistida

1. Crea rama `feature/modulo-2` en Git.
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

- [ ] Dominé: Repositorios Maven Google + Central; evitar JCenter obsoleto…
- [ ] Dominé: Sincronizar proyecto tras cambiar Gradle sin miedo al mensaj…
- [ ] Dominé: Leer dependencies.txt generado por Gradle para auditar versi…
