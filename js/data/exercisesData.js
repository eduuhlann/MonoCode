/**
 * MonoCode — Base de Dados de Exercícios Interativos (agregador)
 * Inclui os 7 formatos de exercícios:
 * 1. Multiple Choice (Múltipla Escolha)
 * 2. Complete o código (Fill in the blanks)
 * 3. Qual será a saída? (Output prediction)
 * 4. Corrija o código (Bug fixing)
 * 5. Escreva o código (Code writing & Unit tests)
 * 6. Desafios (Algorithmic challenges)
 * 7. Verdadeiro ou Falso (True/False)
 *
 * Cada tipo vive em seu próprio arquivo. Este agregador reúne os exercícios
 * autorados manualmente (qualidade) + os gerados proceduralmente (volume).
 */

import { MULTIPLE_CHOICE } from './exercises/multipleChoice.js';
import { COMPLETE_CODE } from './exercises/completeCode.js';
import { PREDICT_OUTPUT } from './exercises/predictOutput.js';
import { FIX_CODE } from './exercises/fixCode.js';
import { WRITE_CODE } from './exercises/writeCode.js';
import { CHALLENGES } from './exercises/challenges.js';
import { GENERATED_EXERCISES } from './exercises/generator.js';

// Exercícios autorados primeiro (qualidade curada), depois gerados (volume).
export const EXERCISES_DATA = [
  ...MULTIPLE_CHOICE,
  ...COMPLETE_CODE,
  ...PREDICT_OUTPUT,
  ...FIX_CODE,
  ...WRITE_CODE,
  ...CHALLENGES,
  ...GENERATED_EXERCISES,
];

