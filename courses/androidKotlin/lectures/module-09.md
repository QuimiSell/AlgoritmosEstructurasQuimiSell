## Panorama: FRAGMENTS Y VIEWPAGER2 (XML)

FragmentTransaction, back stack y tabs con FragmentStateAdapter.

Esta lección pertenece al bloque **XML y Views clásicas** (módulos 1–10). Usa **Cursor** o **Antigravity CLI** en Android Studio para generar boilerplate, pero revisa siempre permisos, hilos y seguridad antes de mergear: la IA acelera, tú firmas el código.
## Objetivos

- Fragment lifecycle vinculado a Activity host.
- FragmentContainerView reemplazo de <fragment> tag.
- replace vs add y back stack popBackStack.
- ViewPager2 + TabLayoutMediator para pestañas.
- Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido.
## Desarrollo

### 1. Punto 1

Fragment lifecycle vinculado a Activity host. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 2. Punto 2

FragmentContainerView reemplazo de <fragment> tag. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 3. Punto 3

replace vs add y back stack popBackStack. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 4. Punto 4

ViewPager2 + TabLayoutMediator para pestañas. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 5. Punto 5

Comunicación Fragment ↔ Activity vía interfaces o ViewModel compartido. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 6. Punto 6

Child fragments y NestedScrollView cuidado rendimiento. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 7. Punto 7

setFragmentResult API moderna entre fragments. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 8. Punto 8

ProGuard rules para Fragment subclasses. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 9. Punto 9

Testing fragments con FragmentScenario intro. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

### 10. Punto 10

Puente conceptual hacia Navigation Component. En ingeniería Android real, este concepto evita bugs de producción cuando escalas equipos y despliegues en Play Store. Practícalo en el snippet del módulo y trázalo en Logcat o Layout Inspector.

## Flujo con Android Studio + IA asistida

1. Crea rama `feature/modulo-9` en Git.
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

- [ ] Dominé: ProGuard rules para Fragment subclasses.
- [ ] Dominé: Testing fragments con FragmentScenario intro.
- [ ] Dominé: Puente conceptual hacia Navigation Component.
