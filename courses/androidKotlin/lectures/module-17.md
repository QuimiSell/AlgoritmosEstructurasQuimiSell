## Panorama: ARQUITECTURA MVVM EN ANDROID

Capas claras, unidirectional data flow, Use cases opcionales.

Esta lección pertenece al bloque **Jetpack Compose y arquitectura moderna** (módulos 11–30). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.
## Objetivos

- UI observa estado; ViewModel procesa intenciones.
- Repository abstrae fuentes datos local/remota.
- Domain layer puro Kotlin sin Android imports.
- Mappers DTO ↔ Entity ↔ UiModel.
- Errores modelados sealed class Result.
## Desarrollo

### 1. Punto 1

UI observa estado; ViewModel procesa intenciones. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 2. Punto 2

Repository abstrae fuentes datos local/remota. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 3. Punto 3

Domain layer puro Kotlin sin Android imports. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 4. Punto 4

Mappers DTO ↔ Entity ↔ UiModel. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 5. Punto 5

Errores modelados sealed class Result. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 6. Punto 6

Single source of truth en Room o remote. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 7. Punto 7

Offline-first con cache y refresh. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 8. Punto 8

Package by feature ui/domain/data. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 9. Decision tree

Decision tree: cuándo UseCase merece archivo propio. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 10. Punto 10

Google Now in Android sample como referencia. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

## Flujo con Android Studio + IA asistida

1. Crea rama `feature/modulo-17` en Git.
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

- [ ] Dominé: Package by feature ui/domain/data.
- [ ] Dominé: Decision tree: cuándo UseCase merece archivo propio.
- [ ] Dominé: Google Now in Android sample como referencia.
