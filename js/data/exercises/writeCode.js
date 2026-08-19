// MonoCode — Exercícios "Escreva o Código" (JavaScript executável com testes)

export const WRITE_CODE = [
  // --- originais (preservados) ---
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
    explanation: 'A abordagem padrão em JavaScript divide a string em array de caracteres (`split("")`), inverte a ordem (`reverse()`) e junta novamente em string (`join("")`). Alternativa: loop reverso, spread `[...str].reverse().join("")` (lida com emojis), ou `Array.from(str).reverse().join("")`. Para Unicode complexo (emojis com zeros-width joiner), prefira spread em vez de split("").'
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
    explanation: '`Math.max(...numeros)` usa o operador spread para expandir o array como argumentos individuais. Alternativa: `numeros.reduce((a, b) => Math.max(a, b), -Infinity)` — mais seguro para arrays enormes (spread pode estourar a call stack em ~100k itens). Sem Math.max: loop com variável `maior = numeros[0]` e comparar cada item.'
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
    explanation: 'Usar `reduce()` inicializado com um objeto vazio `{}` é o padrão idiomático para agrupar e contar em JavaScript. A linha `acc[item] = (acc[item] || 0) + 1` inicializa com 0 se a chave não existir. Alternativa moderna: `Object.fromEntries(new Map(...))` ou `for...of` com acumulador. Para contagens com chaves duplicadas em ordem: `Map`.'
  },

  // --- novos ---
  {
    id: 'ex-write-4',
    title: 'Verificador de palíndromo',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 40,
    prompt: 'Escreva `ehPalindromo(str)` que retorna true se a string for um palíndromo (lê igual de trás pra frente, ignorando espaços e caixa). Ex: "A base do teto desabou".',
    initialCode: `function ehPalindromo(str) {
  // normalize e compare
  
}

console.log(ehPalindromo("ovo"));
console.log(ehPalindromo("A base do teto desabou"));
console.log(ehPalindromo("ana"));
console.log(ehPalindromo("hello"));`,
    solutionCode: `function ehPalindromo(str) {
  const limpo = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpo === limpo.split("").reverse().join("");
}

console.log(ehPalindromo("ovo"));
console.log(ehPalindromo("A base do teto desabou"));
console.log(ehPalindromo("ana"));
console.log(ehPalindromo("hello"));`,
    testValidation: (output) => output.includes('true\ntrue\ntrue') && output.includes('false'),
    explanation: 'Normaliza (minúsculas, remove não-alfanuméricos) e compara com a versão invertida. A regex `/[^a-z0-9]/g` remove espaços, acentos e pontuação. Palíndromos clássicos: "ovo", "A base do teto desabou", "Socorram-me subi no onibus em Marrocos". Versão otimizada: comparar só até o meio (`for` i vs length-1-i).'
  },
  {
    id: 'ex-write-5',
    title: 'Fatorial iterativo e recursivo',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 40,
    prompt: 'Escreva `fatorial(n)` que calcula n! (1*2*3*...*n). Use a abordagem que preferir. fatorial(0) = 1.',
    initialCode: `function fatorial(n) {
  // calcule n!
  
}

console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(10));`,
    solutionCode: `function fatorial(n) {
  if (n < 0) throw new Error("n deve ser >= 0");
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(10));`,
    testValidation: (output) => output.includes('1\n120\n3628800'),
    explanation: 'Iterativo com loop é simples e seguro. Recursivo: `n <= 1 ? 1 : n * fatorial(n - 1)` — elegante mas pode estourar a stack em n grande. Para n muito grande, BigInt. Em Python, `math.factorial` é nativo; em JS, implemente. Valide entrada negativa — fatorial de negativo não existe.'
  },
  {
    id: 'ex-write-6',
    title: 'Fibonacci com memoization',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Escreva `fib(n)` que retorna o n-ésimo número de Fibonacci (0, 1, 1, 2, 3, 5, 8...). Use memoization para evitar a explosão exponencial.',
    initialCode: `const fib = (function() {
  const cache = {};
  return function fib(n) {
    // use cache para evitar recálculo
    
  };
})();

console.log(fib(0));
console.log(fib(10));
console.log(fib(50));`,
    solutionCode: `const fib = (function() {
  const cache = { 0: 0, 1: 1 };
  return function fib(n) {
    if (n in cache) return cache[n];
    return cache[n] = fib(n - 1) + fib(n - 2);
  };
})();

console.log(fib(0));
console.log(fib(10));
console.log(fib(50));`,
    testValidation: (output) => output.includes('0\n55\n12586269025'),
    explanation: 'Fibonacci puro recursivo é O(2^n) — fib(50) levaria anos. Com memoization (cache), vira O(n) — fib(50) instantâneo. A closure guarda o cache entre chamadas. Alternativas: iterativo (loop, O(n), O(1) memória), matriz de potência (O(log n)). Em produção: `functools.lru_cache` (Python), ou a versão iterativa.'
  },
  {
    id: 'ex-write-7',
    title: 'Validador de e-mail simples',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 35,
    prompt: 'Escreva `validarEmail(email)` que retorna true se o e-mail tem formato básico válido (texto@texto.dominio).',
    initialCode: `function validarEmail(email) {
  // regex básica
  
}

console.log(validarEmail("ana@monocode.dev"));
console.log(validarEmail("ana@x.dev"));
console.log(validarEmail("email-invalido"));
console.log(validarEmail("ana@.com"));`,
    solutionCode: `function validarEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

console.log(validarEmail("ana@monocode.dev"));
console.log(validarEmail("ana@x.dev"));
console.log(validarEmail("email-invalido"));
console.log(validarEmail("ana@.com"));`,
    testValidation: (output) => output.includes('true\ntrue\nfalse') && output.includes('false'),
    explanation: 'A regex `/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/` valida "algo sem espaço/arroba @ algo sem espaço/arroba . algo sem espaço/arroba". É básica mas pega os casos comuns. Validação 100% de e-mail é impossível por regex (a especificação é bizarra). Em produção, use uma lib (zod, validator) e — o teste real — envie um e-mail de confirmação.'
  },
  {
    id: 'ex-write-8',
    title: 'Soma de pares em um intervalo',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 35,
    prompt: 'Escreva `somaPares(inicio, fim)` que soma todos os pares no intervalo [inicio, fim] inclusive.',
    initialCode: `function somaPares(inicio, fim) {
  // some os pares no intervalo
  
}

console.log(somaPares(1, 10));
console.log(somaPares(3, 7));`,
    solutionCode: `function somaPares(inicio, fim) {
  let soma = 0;
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) soma += i;
  }
  return soma;
}

console.log(somaPares(1, 10));
console.log(somaPares(3, 7));`,
    testValidation: (output) => output.includes('30') && output.includes('10'),
    explanation: 'Loop + if % 2 === 0 é direto. Versão funcional: `Array.from({length: fim - inicio + 1}, (_, i) => inicio + i).filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)` — elegante mas mais lenta. Otimização matemática: some o 1º par, depois aritmética de progressão. Para intervalos grandes, evite criar arrays — loop é mais eficiente.'
  },
  {
    id: 'ex-write-9',
    title: 'Remover duplicatas de um array',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 35,
    prompt: 'Escreva `removerDuplicatas(arr)` que retorna um novo array sem elementos repetidos, preservando a ordem.',
    initialCode: `function removerDuplicatas(arr) {
  // retorne sem duplicatas
  
}

console.log(JSON.stringify(removerDuplicatas([1, 2, 2, 3, 1, 4])));`,
    solutionCode: `function removerDuplicatas(arr) {
  return [...new Set(arr)];
}

console.log(JSON.stringify(removerDuplicatas([1, 2, 2, 3, 1, 4])));`,
    testValidation: (output) => output.includes('[1,2,3,4]'),
    explanation: '`new Set(arr)` cria um conjunto (sem repetição) e `[...set]` devolve como array. É o idiomático moderno. Para preservar ordem com objetos (Set usa referência): `arr.filter((item, i) => arr.findIndex(x => x.id === item.id) === i)`. Para contar duplicatas: o reduce da lição anterior. Set é O(n) — muito mais rápido que indexOf em listão.'
  },
  {
    id: 'ex-write-10',
    title: 'Caça ao par que soma K',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Escreva `encontrarPar(arr, k)` que retorna true se existirem dois números distintos no array cuja soma seja k. Faça em O(n) com Set.',
    initialCode: `function encontrarPar(arr, k) {
  // O(n): use Set para buscar complementos
  
}

console.log(encontrarPar([1, 2, 3, 4], 7));
console.log(encontrarPar([1, 2, 3, 4], 8));`,
    solutionCode: `function encontrarPar(arr, k) {
  const vistos = new Set();
  for (const n of arr) {
    if (vistos.has(k - n)) return true;
    vistos.add(n);
  }
  return false;
}

console.log(encontrarPar([1, 2, 3, 4], 7));
console.log(encontrarPar([1, 2, 3, 4], 8));`,
    testValidation: (output) => output.includes('true') && output.includes('false'),
    explanation: 'Para cada n, se (k - n) já está no Set, achamos o par. Senão, adicionamos n e seguimos. O(n) tempo, O(n) espaço. A solução ingênua (dois loops) é O(n²). Esse padrão "complemento no Set" resolve muitos problemas: two-sum, três-soma, subarray com soma K. Memorize!'
  },
  {
    id: 'ex-write-11',
    title: 'Debounce function',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 60,
    prompt: 'Implemente `debounce(fn, delay)` que retorna uma versão de fn que só executa após `delay`ms sem novas chamadas.',
    initialCode: `function debounce(fn, delay) {
  // timer que reseta a cada chamada
  
}

const log = debounce((msg) => console.log("Executado:", msg), 100);
log("A");
log("B");
log("C");
// só "C" deve ser impresso após 100ms`,
    solutionCode: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const log = debounce((msg) => console.log("Executado:", msg), 100);
log("A");
log("B");
log("C");`,
    testValidation: (output) => output.includes('Executado: C'),
    explanation: 'Cada chamada cancela o timer anterior e cria um novo — só a última executa. Útil para buscas enquanto digita, redimensionamento de janela, autosave. O `this` e `args` são preservados para a função original. Variação: throttle (limite por tempo), leading-edge debounce (executa já e bloqueia). Ferramenta básica de UX em aplicações web.'
  },
  {
    id: 'ex-write-12',
    title: 'Aplanar array aninhado',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Escreva `achatar(arr)` que transforma [1, [2, [3, [4]]]] em [1, 2, 3, 4]. Não use Array.flat.',
    initialCode: `function achatar(arr) {
  // recursivamente aplane
  
}

console.log(JSON.stringify(achatar([1, [2, [3, [4]]]])));`,
    solutionCode: `function achatar(arr) {
  const resultado = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      resultado.push(...achatar(item));
    } else {
      resultado.push(item);
    }
  }
  return resultado;
}

console.log(JSON.stringify(achatar([1, [2, [3, [4]]]])));`,
    testValidation: (output) => output.includes('[1,2,3,4]'),
    explanation: 'Recursão: se o item é array, achata e espalha; senão, adiciona direto. Com Array.flat: `arr.flat(Infinity)` (ES2019). Versão reduce: `arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? achatar(x) : x), [])`. Atenção a profundidade muito grande (stack overflow) — para casos extremos, use iterativo com pilha explícita.'
  },
  {
    id: 'ex-write-13',
    title: 'Caixa eletrônico: contar cédulas',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 55,
    prompt: 'Escreva `sacar(valor)` que retorna um objeto com a quantidade mínima de cédulas de 100, 50, 20, 10, 5 e 2 para esse valor.',
    initialCode: `function sacar(valor) {
  // use cédulas de 100, 50, 20, 10, 5, 2 (mínimo possível)
  
}

console.log(JSON.stringify(sacar(289)));`,
    solutionCode: `function sacar(valor) {
  const cedulas = [100, 50, 20, 10, 5, 2];
  const resultado = {};
  let restante = valor;
  for (const c of cedulas) {
    resultado[c] = Math.floor(restante / c);
    restante = restante % c;
  }
  return resultado;
}

console.log(JSON.stringify(sacar(289)));`,
    testValidation: (output) => output.includes('"100":2') && output.includes('"50":1') && output.includes('"20":1') && output.includes('"5":1') && output.includes('"2":2'),
    explanation: 'Algoritmo guloso: sempre pegue a maior cédula possível. Para 289: 2×100 (200) + 1×50 (250) + 1×20 (270) + 1×5 (275) + 2×2 (279)... espera, 289-279=10, +1×10. Resultado: {100:2, 50:1, 20:1, 10:1, 5:1, 2:2}. O guloso funciona para cédulas brasileiras; para sistemas arbitrários pode falhar (ex: cédulas 4 e 3 para sacar 6 — guloso dá 4+2 sobras, correto é 3+3).'
  },
  {
    id: 'ex-write-14',
    title: 'Agrupar por propriedade',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Escreva `agruparPor(arr, chave)` que agrupa os objetos do array em um objeto onde as chaves são os valores da propriedade e os valores são arrays dos itens.',
    initialCode: `function agruparPor(arr, chave) {
  // agrupe em objeto de arrays
  
}

const usuarios = [
  { nome: "Ana",  cidade: "SP" },
  { nome: "Bia",  cidade: "RJ" },
  { nome: "Caio", cidade: "SP" }
];
console.log(JSON.stringify(agruparPor(usuarios, "cidade")));`,
    solutionCode: `function agruparPor(arr, chave) {
  return arr.reduce((acc, item) => {
    const grupo = item[chave];
    (acc[grupo] = acc[grupo] || []).push(item);
    return acc;
  }, {});
}

const usuarios = [
  { nome: "Ana",  cidade: "SP" },
  { nome: "Bia",  cidade: "RJ" },
  { nome: "Caio", cidade: "SP" }
];
console.log(JSON.stringify(agruparPor(usuarios, "cidade")));`,
    testValidation: (output) => output.includes('SP') && output.includes('RJ') && output.includes('Ana') && output.includes('Caio'),
    explanation: 'O padrão idiomático: `(acc[grupo] = acc[grupo] || []).push(item)` inicializa o array se não existir e adiciona o item em uma linha. Equivalente a `Object.groupBy(arr, item => item[chave])` (ES2024, agora nativo!). Agrupar é uma das operações mais comuns em dados — domine esse reduce.'
  },
  {
    id: 'ex-write-15',
    title: 'Validador de CPF (formato)',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 55,
    prompt: 'Escreva `validarFormatoCPF(cpf)` que retorna true se o CPF tem formato válido (XXX.XXX.XXX-XX ou 11 dígitos só). Não valide os dígitos verificadores.',
    initialCode: `function validarFormatoCPF(cpf) {
  // valide o formato com regex
  
}

console.log(validarFormatoCPF("123.456.789-09"));
console.log(validarFormatoCPF("12345678909"));
console.log(validarFormatoCPF("123.456.789"));
console.log(validarFormatoCPF("abc.def.ghi-jk"));`,
    solutionCode: `function validarFormatoCPF(cpf) {
  // Aceita XXX.XXX.XXX-XX ou 11 dígitos puros
  return /^\\d{11}$|^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/.test(cpf);
}

console.log(validarFormatoCPF("123.456.789-09"));
console.log(validarFormatoCPF("12345678909"));
console.log(validarFormatoCPF("123.456.789"));
console.log(validarFormatoCPF("abc.def.ghi-jk"));`,
    testValidation: (output) => output.includes('true\ntrue\nfalse\nfalse'),
    explanation: 'A regex usa `|` (OU) para aceitar dois formatos: 11 dígitos puros OU com pontuação. Validação real de CPF envolve calcular os 2 dígitos verificadores (soma ponderada mod 11). Em produção, use uma lib (cpf-cnpj-validator) que faz a validação matemática. Aqui, só validamos o formato — primeira camada de defesa.'
  },
  {
    id: 'ex-write-16',
    title: 'Fila (Queue) com array',
    type: 'write-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 50,
    prompt: 'Implemente uma `Fila` com métodos `enfileirar(item)` e `desenfileirar()` (FIFO — primeiro a entrar é o primeiro a sair).',
    initialCode: `class Fila {
  constructor() {
    // armazene os itens
    
  }

  enfileirar(item) {
    
  }

  desenfileirar() {
    // retorna o primeiro item ou undefined se vazia
    
  }

  get tamanho() {
    
  }
}

const f = new Fila();
f.enfileirar("A");
f.enfileirar("B");
f.enfileirar("C");
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.tamanho);`,
    solutionCode: `class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(item) {
    this.itens.push(item);
  }

  desenfileirar() {
    return this.itens.shift();
  }

  get tamanho() {
    return this.itens.length;
  }
}

const f = new Fila();
f.enfileirar("A");
f.enfileirar("B");
f.enfileirar("C");
console.log(f.desenfileirar());
console.log(f.desenfileirar());
console.log(f.tamanho);`,
    testValidation: (output) => output.includes('A\nB\n1'),
    explanation: 'FIFO: push no fim, shift do início. Simples mas shift é O(n) — desloca todo o array. Para fila de alta performance, use uma head pointer com array circular ou linked list. Em Python: collections.deque (popleft é O(1)). Para fila de tarefas assíncronas: use Promise queues ou libs especializadas (bull, bee-queue).'
  }
];
