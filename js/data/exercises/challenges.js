// MonoCode — Desafios Algorítmicos (JavaScript executável)

export const CHALLENGES = [
  // --- originais (preservados) ---
  {
    id: 'ex-challenge-1',
    title: 'Desafio: Validador de Parênteses e Chaves Balanceados',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 75,
    prompt: 'Crie uma função `isBalanceado(expressao)` que receba uma string contendo os caracteres `()`, `[]` e `{}` e verifique se todos os pares estão devidamente balanceados e na ordem correta. Retorne `true` ou `false`.',
    initialCode: `function isBalanceado(expressao) {
  const pilha = [];
  const mapa = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  // Implemente o algoritmo da pilha aqui:

}

console.log("Teste 1 {[()]}:", isBalanceado("{[()]}")); // true
console.log("Teste 2 {[(])}:", isBalanceado("{[(])}")); // false
console.log("Teste 3 (())):", isBalanceado("(()))"));   // false`,
    solutionCode: `function isBalanceado(expressao) {
  const pilha = [];
  const mapa = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of expressao) {
    if (['(', '[', '{'].includes(char)) {
      pilha.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      if (pilha.pop() !== mapa[char]) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

console.log("Teste 1 {[()]}:", isBalanceado("{[()]}"));
console.log("Teste 2 {[(])}:", isBalanceado("{[(])}"));
console.log("Teste 3 (())):", isBalanceado("(()))"));`,
    testValidation: (output) => output.includes('Teste 1 {[()]}: true') && output.includes('Teste 2 {[(])}: false') && output.includes('Teste 3 (())): false'),
    explanation: 'A estrutura de dados Stack (Pilha) é a solução ótima O(n): empilhamos delimitadores de abertura e, ao encontrar um de fechamento, desempilhamos e checamos se correspondem. Se houver sobras na pilha ou um mismatch, está desbalanceado. Essa técnica aparece em compiladores, editores (auto-complete de chaves) e avaliadores de expressões.'
  },
  {
    id: 'ex-challenge-2',
    title: 'Desafio: Busca Binária com Medição de Passos',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 80,
    prompt: 'Implemente o algoritmo clássico de `buscaBinaria(arrayOrdenado, alvo)` com complexidade O(log n). A função deve retornar o índice do elemento encontrado ou `-1` se não existir.',
    initialCode: `function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    // Calcule o meio e ajuste os ponteiros
    
  }

  return -1;
}

const lista = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Busca por 23:", buscaBinaria(lista, 23)); // 5
console.log("Busca por 99:", buscaBinaria(lista, 99)); // -1`,
    solutionCode: `function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (arr[meio] === alvo) {
      return meio;
    }
    if (arr[meio] < alvo) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

const lista = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Busca por 23:", buscaBinaria(lista, 23));
console.log("Busca por 99:", buscaBinaria(lista, 99));`,
    testValidation: (output) => output.includes('Busca por 23: 5') && output.includes('Busca por 99: -1'),
    explanation: 'A busca binária divide o espaço de busca pela metade a cada iteração, reduzindo a complexidade de O(n) para O(log n). Para 1 milhão de itens: linear faz até 1M comparações, binária faz ~20. PRÉ-REQUISITO: o array precisa estar ordenado. Detalhe do meio: `inicio + (fim - inicio) / 2` evita overflow em outras linguagens (inteiros).'
  },

  // --- novos desafios ---
  {
    id: 'ex-challenge-3',
    title: 'Desafio: Anagrama eficiente',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 75,
    prompt: 'Escreva `ehAnagrama(a, b)` que retorna true se `a` e `b` são anagramas (mesmas letras, mesma frequência, ignorando caixa). Faça em O(n) com contagem de caracteres.',
    initialCode: `function ehAnagrama(a, b) {
  // O(n) com contagem de caracteres (Map ou objeto)
  
}

console.log(ehAnagrama("listen", "silent"));   // true
console.log(ehAnagrama("Alegria", "Alergia")); // true (ignora caixa)
console.log(ehAnagrama("abc", "abd"));         // false`,
    solutionCode: `function ehAnagrama(a, b) {
  const A = a.toLowerCase();
  const B = b.toLowerCase();
  if (A.length !== B.length) return false;

  const contador = {};
  for (let i = 0; i < A.length; i++) {
    contador[A[i]] = (contador[A[i]] || 0) + 1;
    contador[B[i]] = (contador[B[i]] || 0) - 1;
  }

  return Object.values(contador).every(v => v === 0);
}

console.log(ehAnagrama("listen", "silent"));
console.log(ehAnagrama("Alegria", "Alergia"));
console.log(ehAnagrama("abc", "abd"));`,
    testValidation: (output) => output.includes('true\ntrue\nfalse'),
    explanation: 'Conta +1 para cada char de A e -1 para cada char de B. Se todos zerarem, são anagramas. O(n) tempo e espaço. Alternativa: `a.split("").sort().join("") === b.split("").sort().join("")` — O(n log n) mas uma linha. A versão de contagem é a abordagem profissional: escalável e sem alocação extra de strings.'
  },
  {
    id: 'ex-challenge-4',
    title: 'Desafio: FizzBuzz',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Imprima de 1 a 15: para múltiplos de 3 imprima "Fizz", de 5 "Buzz", e de ambos "FizzBuzz". Caso contrário, o próprio número.',
    initialCode: `for (let i = 1; i <= 15; i++) {
  // sua lógica aqui
  
}`,
    solutionCode: `for (let i = 1; i <= 15; i++) {
  let saida = "";
  if (i % 3 === 0) saida += "Fizz";
  if (i % 5 === 0) saida += "Buzz";
  console.log(saida || i);
}`,
    testValidation: (output) => output.includes('Fizz') && output.includes('Buzz') && output.includes('FizzBuzz'),
    explanation: 'FizzBuzz é o teste de emprego mais famoso do mundo. A pegadinha: testar 3 e 5 separadamente e CONCATENAR — assim "FizzBuzz" surge naturalmente para múltiplos de 15, sem if especial. O `|| i` imprime o número quando nem 3 nem 5 (string vazia é falsy). Solução limpa evita a Torre de Ifs que candidatos iniciantes escrevem.'
  },
  {
    id: 'ex-challenge-5',
    title: 'Desafio: Número primo otimizado',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 60,
    prompt: 'Escreva `ehPrimo(n)` que retorna true se n for primo. Otimize: só vá até √n e pule pares.',
    initialCode: `function ehPrimo(n) {
  // otimizado até √n
  
}

console.log(ehPrimo(2));
console.log(ehPrimo(17));
console.log(ehPrimo(1));
console.log(ehPrimo(100));`,
    solutionCode: `function ehPrimo(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(ehPrimo(2));
console.log(ehPrimo(17));
console.log(ehPrimo(1));
console.log(ehPrimo(100));`,
    testValidation: (output) => output.includes('true\ntrue\nfalse\nfalse'),
    explanation: 'Três otimizações: (1) descarta n<2; (2) trata 2 como caso especial; (3) só testa ímpares até √n. Por que √n? Se n = a×b, um dos dois é ≤ √n — basta testar até lá. Para listar primos até N, use o Crivo de Eratóstenes (muito mais rápido). ehPrimo é a base de problemas de criptografia (RSA).'
  },
  {
    id: 'ex-challenge-6',
    title: 'Desafio: Soma máxima de subarray (Kadane)',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 85,
    prompt: 'Escreva `somaMaxima(arr)` que retorna a soma máxima de um subarray contíguo. Use o algoritmo de Kadane em O(n).',
    initialCode: `function somaMaxima(arr) {
  // Kadane: O(n), mantenha local e global
  
}

console.log(somaMaxima([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
console.log(somaMaxima([-1, -2, -3]));  // -1`,
    solutionCode: `function somaMaxima(arr) {
  let melhor = arr[0];
  let atual = arr[0];
  for (let i = 1; i < arr.length; i++) {
    atual = Math.max(arr[i], atual + arr[i]);
    melhor = Math.max(melhor, atual);
  }
  return melhor;
}

console.log(somaMaxima([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(somaMaxima([-1, -2, -3]));`,
    testValidation: (output) => output.includes('6') && output.includes('-1'),
    explanation: 'Kadane: a cada posição, decida entre começar novo subarray (só arr[i]) ou estender o anterior (atual + arr[i]). A melhor decisão local alimenta a global. O(n) — muito melhor que a força bruta O(n²). Subarray ótimo do exemplo: [4, -1, 2, 1] = 6. Algoritmo clássico de entrevistas eCompetições.'
  },
  {
    id: 'ex-challenge-7',
    title: 'Desafio: Rotacionar array (sem alocar outro)',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 80,
    prompt: 'Escreva `rotacionar(arr, k)` que rotaciona o array k posições à direita IN-PLACE (O(1) espaço extra). Ex: [1,2,3,4,5] k=2 → [4,5,1,2,3].',
    initialCode: `function rotacionar(arr, k) {
  // O(1) espaço, O(n) tempo: reverse parcial
  
}

const a = [1, 2, 3, 4, 5];
rotacionar(a, 2);
console.log(JSON.stringify(a));  // [4,5,1,2,3]`,
    solutionCode: `function rotacionar(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return;

  function reverse(ini, fim) {
    while (ini < fim) {
      [arr[ini], arr[fim]] = [arr[fim], arr[ini]];
      ini++; fim--;
    }
  }

  reverse(0, n - 1);        // [5,4,3,2,1]
  reverse(0, k - 1);        // [4,5,3,2,1]
  reverse(k, n - 1);        // [4,5,1,2,3]
}

const a = [1, 2, 3, 4, 5];
rotacionar(a, 2);
console.log(JSON.stringify(a));`,
    testValidation: (output) => output.includes('[4,5,1,2,3]'),
    explanation: 'Trick clássico: 3 reversões. (1) reverte tudo → [5,4,3,2,1]. (2) reverte os primeiros k → [4,5,3,2,1]. (3) reverte o resto → [4,5,1,2,3]. O(n) tempo, O(1) espaço. k%n normaliza (k maior que n é rotação cíclica). Essa abordagem é elegante e aparece em problemas de string rotation, buffer circular, etc.'
  },
  {
    id: 'ex-challenge-8',
    title: 'Desafio: Achar duplicata em array (Floyd)',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 85,
    prompt: 'Array de n+1 inteiros onde cada valor está em [1, n]. Há exatamente UM duplicado. Encontre-o em O(n) tempo e O(1) espaço SEM modificar o array.',
    initialCode: `function acharDuplicata(nums) {
  // Floyd's tortoise and hare: O(n), O(1)
  
}

console.log(acharDuplicata([1, 3, 4, 2, 2]));  // 2
console.log(acharDuplicata([3, 1, 3, 4, 2]));  // 3`,
    solutionCode: `function acharDuplicata(nums) {
  let lento = nums[0];
  let rapido = nums[0];

  // Fase 1: encontrar interseção
  do {
    lento = nums[lento];
    rapido = nums[nums[rapido]];
  } while (lento !== rapido);

  // Fase 2: encontrar entrada do ciclo
  lento = nums[0];
  while (lento !== rapido) {
    lento = nums[lento];
    rapido = nums[rapido];
  }
  return lento;
}

console.log(acharDuplicata([1, 3, 4, 2, 2]));
console.log(acharDuplicata([3, 1, 3, 4, 2]));`,
    testValidation: (output) => output.includes('2') && output.includes('3'),
    explanation: 'Floyd\'s Tortoise and Hare: o array vira um grafo onde nums[i] aponta para nums[nums[i]]. O duplicata cria um ciclo. Fase 1: ponteiro rápido e lento se encontram dentro do ciclo. Fase 2: outro lento do início encontra o começo do ciclo — que é o duplicata. O(n) tempo, O(1) espaço, sem modificar. Algoritmo belíssimo deCycle Detection.'
  },
  {
    id: 'ex-challenge-9',
    title: 'Desafio: Maior palíndromo em string',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 90,
    prompt: 'Escreva `maiorPalindromo(s)` que retorna o maior palíndromo contíguo dentro de s. Use expansão central em O(n²).',
    initialCode: `function maiorPalindromo(s) {
  // expanda do centro (cada char e cada par)
  
}

console.log(maiorPalindromo("babad"));  // "bab" ou "aba"
console.log(maiorPalindromo("cbbd"));   // "bb"`,
    solutionCode: `function maiorPalindromo(s) {
  if (s.length < 2) return s;

  let inicio = 0, maxLen = 1;

  function expandir(esq, dir) {
    while (esq >= 0 && dir < s.length && s[esq] === s[dir]) {
      if (dir - esq + 1 > maxLen) {
        inicio = esq;
        maxLen = dir - esq + 1;
      }
      esq--; dir++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandir(i, i);     // palíndromo ímpar
    expandir(i, i + 1); // palíndromo par
  }

  return s.slice(inicio, inicio + maxLen);
}

console.log(maiorPalindromo("babad"));
console.log(maiorPalindromo("cbbd"));`,
    testValidation: (output) => output.includes('bab') && output.includes('bb'),
    explanation: 'Cada palíndromo tem um centro (1 char para ímpar, 2 chars para par). Expandimos do centro enquanto os chars casam. O(n²) tempo, O(1) espaço. Existe Manacher\'s algorithm em O(n) mas é bem mais complexo. Para entrevistas, expansão central é a resposta esperada — clara e eficiente o suficiente.'
  },
  {
    id: 'ex-challenge-10',
    title: 'Desafio: Two Sum com retorno de índices',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 65,
    prompt: 'Escreva `twoSum(nums, alvo)` que retorna os ÍNDICES dos dois números que somam alvo. Faça em O(n) com Map. Exatamente uma solução existe.',
    initialCode: `function twoSum(nums, alvo) {
  // Map para complemento em O(1)
  
}

console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));   // [0,1]
console.log(JSON.stringify(twoSum([3, 2, 4], 6)));        // [1,2]`,
    solutionCode: `function twoSum(nums, alvo) {
  const vistos = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complemento = alvo - nums[i];
    if (vistos.has(complemento)) {
      return [vistos.get(complemento), i];
    }
    vistos.set(nums[i], i);
  }
  return [];
}

console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)));
console.log(JSON.stringify(twoSum([3, 2, 4], 6)));`,
    testValidation: (output) => output.includes('[0,1]') && output.includes('[1,2]'),
    explanation: 'Para cada elemento, o complemento (alvo - num) é o que procuramos. Se já vimos o complemento, achamos o par — Map permite busca O(1). Um único pass: O(n) tempo e espaço. A força bruta (dois loops) é O(n²). Two Sum é o problema nº 1 do LeetCode e a porta de entrada para o padrão "complemento no mapa".'
  },
  {
    id: 'ex-challenge-11',
    title: 'Desafio: Merge de dois arrays ordenados',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 65,
    prompt: 'Escreva `mergeOrdenados(a, b)` que funde dois arrays já ordenados em um novo também ordenado, em O(n+m).',
    initialCode: `function mergeOrdenados(a, b) {
  // dois ponteiros, O(n+m)
  
}

console.log(JSON.stringify(mergeOrdenados([1, 3, 5], [2, 4, 6])));  // [1,2,3,4,5,6]
console.log(JSON.stringify(mergeOrdenados([], [1, 2])));            // [1,2]`,
    solutionCode: `function mergeOrdenados(a, b) {
  const resultado = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      resultado.push(a[i++]);
    } else {
      resultado.push(b[j++]);
    }
  }
  while (i < a.length) resultado.push(a[i++]);
  while (j < b.length) resultado.push(b[j++]);
  return resultado;
}

console.log(JSON.stringify(mergeOrdenados([1, 3, 5], [2, 4, 6])));
console.log(JSON.stringify(mergeOrdenados([], [1, 2])));`,
    testValidation: (output) => output.includes('[1,2,3,4,5,6]') && output.includes('[1,2]'),
    explanation: 'Dois ponteiros, um em cada array. Compara, pega o menor, avança o ponteiro. Quando um array acaba, copia o resto do outro. O(n+m) — base do Merge Sort. Não use `concat + sort` (O((n+m) log(n+m))) quando os dois já estão ordenados. Padrão essencial para merges e interseções de listas ordenadas.'
  },
  {
    id: 'ex-challenge-12',
    title: 'Desafio: Contar palavras únicas em texto',
    type: 'challenge',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 55,
    prompt: 'Escreva `contarPalavras(texto)` que retorna um objeto { palavra: frequencia } ignorando caixa e pontuação.',
    initialCode: `function contarPalavras(texto) {
  // normalize, split, conte
  
}

console.log(JSON.stringify(contarPalavras("O rato roeu a roupa do rato")));`,
    solutionCode: `function contarPalavras(texto) {
  const palavras = texto.toLowerCase().match(/\\w+/g) || [];
  return palavras.reduce((acc, p) => {
    acc[p] = (acc[p] || 0) + 1;
    return acc;
  }, {});
}

console.log(JSON.stringify(contarPalavras("O rato roeu a roupa do rato")));`,
    testValidation: (output) => output.includes('"rato":2') && output.includes('"a":1'),
    explanation: 'Pipeline clássico: lowercase → extrair palavras (regex \\w+ pega só letras/números) → reduce para contar. Resultado: {"o":1,"rato":2,"roeu":1,"a":1,"roupa":1,"do":1}. Para textos grandes, use Map. Para análise NLP real: tokenização com stopwords, stemming. Esse reduce é a base de qualquer word count, MapReduce, ranking de busca.'
  }
];
