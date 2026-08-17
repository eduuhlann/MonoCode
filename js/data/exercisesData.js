/**
 * MonoCode — Base de Dados de Exercícios Interativos
 * Inclui os 6 formatos de exercícios solicitados:
 * 1. Multiple Choice (Múltipla Escolha)
 * 2. Complete o código (Fill in the blanks)
 * 3. Corrija o código (Bug fixing)
 * 4. Qual será a saída? (Output prediction)
 * 5. Escreva o código (Code writing & Unit tests)
 * 6. Desafios (Algorithmic challenges)
 */

export const EXERCISES_DATA = [
  // 1. Multiple Choice
  {
    id: 'ex-mc-1',
    title: 'Qual a diferença entre "==" e "===" em JavaScript?',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Em JavaScript, qual é o comportamento do operador de igualdade estrita (`===`) em comparação ao operador de igualdade solta (`==`)?',
    options: [
      { id: 'a', text: 'O operador `===` compara valor e tipo sem realizar coerção implícita de tipos, enquanto `==` tenta converter os tipos antes de comparar.' },
      { id: 'b', text: 'O operador `==` compara valor e tipo, enquanto `===` apenas compara ponteiros em memória.' },
      { id: 'c', text: 'Ambos funcionam de forma idêntica em todas as versões do ECMAScript moderno.' },
      { id: 'd', text: 'O operador `===` é exclusivo para comparação de strings e arrays.' }
    ],
    correctOptionId: 'a',
    explanation: 'O operador `===` (strict equality) verifica tanto a igualdade de valor quanto o tipo de dado sem nenhuma conversão de tipo. O operador `==` (loose equality) tenta forçar os operandos para o mesmo tipo antes de comparar (type coercion).'
  },
  {
    id: 'ex-mc-2',
    title: 'Imutabilidade de variáveis em Rust',
    type: 'multiple-choice',
    language: 'Rust',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Por padrão, as variáveis declaradas com a palavra-chave `let` em Rust são:',
    options: [
      { id: 'a', text: 'Mutáveis por padrão' },
      { id: 'b', text: 'Imutáveis por padrão, a menos que marcadas explicitamente com `mut`' },
      { id: 'c', text: 'Alocadas exclusivamente na memória Heap' },
      { id: 'd', text: 'Globais e acessíveis em qualquer thread' }
    ],
    correctOptionId: 'b',
    explanation: 'Em Rust, a segurança e a clareza são prioritárias: variáveis declaradas com `let x = 5;` são imutáveis. Para torná-las mutáveis, você deve declarar `let mut x = 5;`.'
  },
  {
    id: 'ex-mc-3',
    title: 'Cláusula SQL para filtragem de grupos agregados',
    type: 'multiple-choice',
    language: 'SQL',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Ao utilizar funções agregadas como `COUNT()` ou `SUM()` com `GROUP BY`, qual cláusula deve ser utilizada para filtrar o resultado das agregações?',
    options: [
      { id: 'a', text: 'WHERE' },
      { id: 'b', text: 'HAVING' },
      { id: 'c', text: 'FILTER BY' },
      { id: 'd', text: 'LIMIT GROUP' }
    ],
    correctOptionId: 'b',
    explanation: 'A cláusula `WHERE` filtra linhas individuais antes da agregação. A cláusula `HAVING` é aplicada após o `GROUP BY` para filtrar grupos baseando-se em resultados de funções agregadas.'
  },

  // 2. Complete o código
  {
    id: 'ex-complete-1',
    title: 'Complete a Arrow Function de filtro',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete a lacuna no código abaixo para que o array `apenasPares` contenha somente os números pares do array original.',
    codeSnippet: `const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// Complete a chamada do método com a condição de paridade:
const apenasPares = numeros.__BLANK__(n => n % 2 === 0);
console.log(apenasPares);`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'filter',
    hints: ['O método de array que seleciona itens baseado em um predicado booleano é o filter.'],
    explanation: 'O método `filter()` itera sobre o array e retorna um novo array contendo apenas os elementos para os quais a função de callback retornou `true`.'
  },
  {
    id: 'ex-complete-2',
    title: 'Complete a List Comprehension em Python',
    type: 'complete-code',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 30,
    prompt: 'Preencha a palavra-chave que falta na List Comprehension para iterar sobre a lista de valores.',
    codeSnippet: `precos = [10, 25, 40, 100]
dobrados = [p * 2 __BLANK__ p in precos if p > 20]
print(dobrados)`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'for',
    hints: ['A estrutura básica é [expressao for item in iteravel if condicao].'],
    explanation: 'A sintaxe de list comprehension em Python exige a cláusula `for` para vincular a variável iteradora à coleção.'
  },

  // 3. Corrija o código (Bug fix)
  {
    id: 'ex-fix-1',
    title: 'Corrija a mutação de constante em JavaScript',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 35,
    prompt: 'O código abaixo lança um `TypeError: Assignment to constant variable`. Corrija a declaração para que a contagem seja incrementada corretamente e exibida.',
    initialCode: `// Corrija a declaração da variável abaixo
const contador = 0;

for (let i = 1; i <= 5; i++) {
  contador += i;
}

console.log("Soma total:", contador);`,
    solutionCode: `let contador = 0;

for (let i = 1; i <= 5; i++) {
  contador += i;
}

console.log("Soma total:", contador);`,
    testValidation: (output) => output.includes('Soma total: 15'),
    explanation: 'Variáveis declaradas com `const` não podem ser reatribuídas. Como `contador` sofre reatribuição a cada iteração (`+=`), ela deve ser declarada com `let`.'
  },
  {
    id: 'ex-fix-2',
    title: 'Corrija o escopo assíncrono em Promise',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'A função abaixo tenta obter o resultado de uma Promise assíncrona mas esqueceu de aguardar a resposta. Corrija a assinatura e o consumo da função.',
    initialCode: `function obterDadosServidor() {
  return Promise.resolve("Status 200: OK");
}

function processar() {
  const resposta = obterDadosServidor();
  console.log("Resultado:", resposta);
}

processar();`,
    solutionCode: `function obterDadosServidor() {
  return Promise.resolve("Status 200: OK");
}

async function processar() {
  const resposta = await obterDadosServidor();
  console.log("Resultado:", resposta);
}

processar();`,
    testValidation: (output) => output.includes('Resultado: Status 200: OK'),
    explanation: 'Ao invocar uma função que retorna uma Promise sem `await` ou `.then()`, a variável recebe o objeto Promise pendente em vez de seu valor resolvido. Adicionar `async` à função e `await` antes da chamada resolve o valor.'
  },

  // 4. Qual será a saída?
  {
    id: 'ex-output-1',
    title: 'Preveja a saída da coerção e typeof',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Analise o seguinte trecho de código e informe exatamente o que será impresso no console:',
    codeSnippet: `const a = [1, 2] + [3, 4];
console.log(a);`,
    options: [
      { id: 'a', text: '"1,23,4"' },
      { id: 'b', text: '[1, 2, 3, 4]' },
      { id: 'c', text: 'NaN' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'a',
    explanation: 'O operador `+` com arrays força a conversão de ambos para strings (`"1,2"` e `"3,4"`) e as concatena, resultando na string `"1,23,4"`.'
  },
  {
    id: 'ex-output-2',
    title: 'Preveja o resultado da Closure',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Qual valor será exibido na linha final deste código?',
    codeSnippet: `function criarAcumulador(inicial) {
  let total = inicial;
  return function(valor) {
    total += valor;
    return total;
  };
}

const acum = criarAcumulador(10);
acum(5);
console.log(acum(15));`,
    options: [
      { id: 'a', text: '30' },
      { id: 'b', text: '25' },
      { id: 'c', text: '15' },
      { id: 'd', text: '10' }
    ],
    correctOptionId: 'a',
    explanation: 'A closure mantém a referência para `total` no escopo léxico: começa em 10, com `acum(5)` vai para 15, e com `acum(15)` vai para 30.'
  },

  // 5. Escreva o código (Interactive Code Editor + Unit Tests)
  {
    id: 'ex-write-1',
    title: 'Escreva uma função que inverta uma string',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 45,
    prompt: 'Crie uma função chamada `inverterTexto(str)` que receba uma string como argumento e retorne a string invertida (ex: `"MonoCode"` → `"edoConoM"`). Utilize `console.log(inverterTexto("MonoCode"))`.',
    initialCode: `function inverterTexto(str) {
  // Escreva sua implementação aqui:
  
}

// Teste sua função
console.log(inverterTexto("MonoCode"));
console.log(inverterTexto("dev"));`,
    solutionCode: `function inverterTexto(str) {
  return str.split("").reverse().join("");
}

console.log(inverterTexto("MonoCode"));
console.log(inverterTexto("dev"));`,
    tests: [
      { input: 'MonoCode', expected: 'edoConoM' },
      { input: 'dev', expected: 'ved' }
    ],
    testValidation: (output) => output.includes('edoConoM') && output.includes('ved'),
    explanation: 'A abordagem padrão em JavaScript divide a string em array de caracteres (`split("")`), inverte a ordem (`reverse()`) e junta novamente em string (`join("")`).'
  },
  {
    id: 'ex-write-2',
    title: 'Crie uma função para encontrar o maior número em um array',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 40,
    prompt: 'Escreva uma função `encontrarMaior(numeros)` que receba um array de números e retorne o maior valor contido nele.',
    initialCode: `function encontrarMaior(numeros) {
  // Retorne o maior número
  
}

console.log(encontrarMaior([12, 45, 8, 99, 23]));
console.log(encontrarMaior([-5, -10, -2]));`,
    solutionCode: `function encontrarMaior(numeros) {
  return Math.max(...numeros);
}

console.log(encontrarMaior([12, 45, 8, 99, 23]));
console.log(encontrarMaior([-5, -10, -2]));`,
    testValidation: (output) => output.includes('99') && output.includes('-2'),
    explanation: '`Math.max(...numeros)` usa o operador spread para expandir o array de números como argumentos individuais da função `Math.max`.'
  },
  {
    id: 'ex-write-3',
    title: 'Agrupador de frequência de elementos',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Implemente uma função `contarFrequencia(itens)` que receba um array e retorne um objeto onde as chaves são os itens e os valores são o número de ocorrências de cada um.',
    initialCode: `function contarFrequencia(itens) {
  // Retorne um objeto com a contagem de cada item
  
}

console.log(JSON.stringify(contarFrequencia(["js", "py", "js", "rust", "js", "py"])));`,
    solutionCode: `function contarFrequencia(itens) {
  return itens.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

console.log(JSON.stringify(contarFrequencia(["js", "py", "js", "rust", "js", "py"])));`,
    testValidation: (output) => output.includes('"js":3') && output.includes('"py":2') && output.includes('"rust":1'),
    explanation: 'Utilizar `reduce()` inicializado com um objeto vazio `{}` é o padrão idiomático para agrupar e contar frequências em JavaScript.'
  },

  // 6. Desafios (Algorithmic / Problem Solving)
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
    explanation: 'A estrutura de dados Stack (Pilha) é a solução ótima O(n): empilhamos delimitadores de abertura e, ao encontrar um de fechamento, desempilhamos e checamos se correspondem.'
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
    explanation: 'A busca binária divide o espaço de busca pela metade a cada iteração, reduzindo a complexidade de O(n) para O(log n).'
  }
];
