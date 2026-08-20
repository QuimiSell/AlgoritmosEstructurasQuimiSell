import {
  TutorValidationRequest,
  TutorValidationResult,
} from '../domain/models.js';
import { TutorValidatorPort } from '../domain/ports.js';

/**
 * Validador de ejercicios alineado con domain/tutor.ts del frontend.
 * Misma idea: keywords esperadas + feedback académico local (sin LLM).
 */
export class KeywordTutorValidator implements TutorValidatorPort {
  validate(input: TutorValidationRequest): TutorValidationResult {
    const normalized = input.code.toLowerCase();
    const matched: string[] = [];
    const missing: string[] = [];

    for (const keyword of input.expectedKeywords) {
      const needle = keyword.toLowerCase();
      if (normalized.includes(needle)) {
        matched.push(keyword);
      } else {
        missing.push(keyword);
      }
    }

    if (missing.length === 0) {
      return {
        success: true,
        matchedKeywords: matched,
        missingKeywords: [],
        feedback:
          '✅ **Validación correcta.** Tu solución incluye las piezas clave esperadas. Buen trabajo — sigue con el siguiente ejercicio.',
      };
    }

    return {
      success: false,
      matchedKeywords: matched,
      missingKeywords: missing,
      feedback:
        `⚠️ **Faltan elementos clave:** \`${missing.join('`, `')}\`.\n\n` +
        'Revisa la instrucción y el hint del ejercicio. No copies soluciones completas: construye el razonamiento paso a paso.',
    };
  }
}
