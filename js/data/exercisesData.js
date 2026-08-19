/**
 * MonoCode — Base de Dados de Exercícios Interativos (agregador)
 * Inclui os 6 formatos de exercícios:
 * 1. Multiple Choice (Múltipla Escolha)
 * 2. Complete o código (Fill in the blanks)
 * 3. Corrija o código (Bug fixing)
 * 4. Qual será a saída? (Output prediction)
 * 5. Escreva o código (Code writing & Unit tests)
 * 6. Desafios (Algorithmic challenges)
 *
 * Cada tipo vive em seu próprio arquivo; este agregador reúne todos
 * mantendo a ordem visual agradável (MC, completar, prever, corrigir, escrever, desafios).
 */

import { MULTIPLE_CHOICE } from './exercises/multipleChoice.js';
import { COMPLETE_CODE } from './exercises/completeCode.js';
import { PREDICT_OUTPUT } from './exercises/predictOutput.js';
import { FIX_CODE } from './exercises/fixCode.js';
import { WRITE_CODE } from './exercises/writeCode.js';
import { CHALLENGES } from './exercises/challenges.js';

export const EXERCISES_DATA = [
  ...MULTIPLE_CHOICE,
  ...COMPLETE_CODE,
  ...PREDICT_OUTPUT,
  ...FIX_CODE,
  ...WRITE_CODE,
  ...CHALLENGES,
];
