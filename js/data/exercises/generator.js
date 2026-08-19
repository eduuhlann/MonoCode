// MonoCode — Gerador Procedural de Exercícios
// Combina templates + conceitos + variações numéricas/de string para produzir
// um grande volume de exercícios válidos por linguagem.
//
// Os exercícios gerados têm IDs determinísticos (gen-<lang>-<tipo>-<n>) para que
// o progresso do usuário persista entre recarregamentos.

// --- Configuração por linguagem ---
const LANG_CONFIG = {
  JavaScript:     { slug: 'js',  print: 'console.log',  ext: 'js'   },
  Python:         { slug: 'py',  print: 'print',        ext: 'py'   },
  TypeScript:     { slug: 'ts',  print: 'console.log',  ext: 'ts'   },
  HTML:           { slug: 'html',print: '<!-- output -->', ext: 'html' },
  CSS:            { slug: 'css', print: '/* style */',  ext: 'css'  },
  SQL:            { slug: 'sql', print: 'SELECT',       ext: 'sql'  },
  C:              { slug: 'c',   print: 'printf',       ext: 'c'    },
  'C++':          { slug: 'cpp', print: 'std::cout',    ext: 'cpp'  },
  'C#':           { slug: 'cs',  print: 'Console.WriteLine', ext: 'cs' },
  'React Native': { slug: 'rn',  print: 'console.log',  ext: 'jsx'  },
  Rust:           { slug: 'rs',  print: 'println!',     ext: 'rs'   },
  Go:             { slug: 'go',  print: 'fmt.Println',  ext: 'go'   },
};

// Conceitos universais de programação (aplicáveis a qualquer linguagem)
const CONCEPTS = [
  'variáveis', 'tipos de dados', 'operadores aritméticos', 'operadores lógicos',
  'estruturas condicionais', 'laços de repetição', 'funções', 'arrays/listas',
  'strings', 'escopo', 'recursão', 'parâmetros', 'retorno de função',
  'comparação', 'booleanos', 'inteiros', 'números decimais', 'indexação',
  'tamanho de coleções', 'ordenação', 'busca', 'matrizes', 'dicionários/mapas',
  'conjuntos', 'iteração', 'acumuladores', 'contadores', 'validação',
  'tratamento de erros', 'depuração', 'algoritmos', 'complexidade',
  'memória', 'ponteiros/referências', 'imutabilidade', 'programação funcional',
  'orientação a objetos', 'herança', 'polimorfismo', 'encapsulamento',
  'módulos', 'assincronia', 'promises/futures', 'eventos', 'manipulação de DOM',
  'requisições HTTP', 'serialização JSON', 'parsing', 'expressões regulares',
  'testes unitários', 'boas práticas'
];

// Pool de palavras para exercícios de string
const PALAVRAS = ['casa','código','python','função','array','loop','dados','web','app','mobile',
                  'servidor','cliente','cache','token','senha','login','fila','pilha','nó','grafo',
                  'bug','teste','build','deploy','git','branch','commit','merge','pull','push'];

// Operadores aritméticos com função de avaliação
const OPS = [
  ['+', (a, b) => a + b, 'soma'],
  ['-', (a, b) => a - b, 'subtração'],
  ['*', (a, b) => a * b, 'multiplicação'],
  ['/', (a, b) => Math.trunc(a / b), 'divisão inteira'],
  ['%', (a, b) => a % b, 'módulo (resto)'],
];

// Operadores de comparação
const CMP = [
  ['>',  (a, b) => a > b],
  ['<',  (a, b) => a < b],
  ['>=', (a, b) => a >= b],
  ['<=', (a, b) => a <= b],
  ['==', (a, b) => a === b],
  ['!=', (a, b) => a !== b],
];

const DIFICULDADES = ['Iniciante', 'Iniciante', 'Iniciante', 'Intermediário', 'Intermediário', 'Avançado'];

// --- Utilidades determinísticas ---
function val(i, mod) { return (i % mod) + 1; }
function pick(arr, i) { return arr[i % arr.length]; }
function makeDistractors(correct, a, b, op) {
  const pool = new Set([correct]);
  const candidates = [
    correct + 1, correct - 1, correct + 2, correct - 2,
    correct + 10, correct - 10, correct + a, correct - b,
    a + b, a - b, a * b, a + b + 1,
  ];
  const out = [];
  for (const c of candidates) {
    if (c !== correct && !pool.has(c) && c >= 0 && out.length < 3) {
      pool.add(c); out.push(c);
    }
  }
  while (out.length < 3) { const c = correct + out.length + 5; if (!pool.has(c)) { pool.add(c); out.push(c); } }
  return out;
}
function shuffleOptions(correct, distractors, i) {
  // ordem determinística baseada em i
  const all = [correct, ...distractors];
  const opts = [];
  const letters = ['a', 'b', 'c', 'd'];
  const start = i % 4;
  for (let k = 0; k < 4; k++) {
    const idx = (start + k) % 4;
    opts.push({ id: letters[k], text: String(all[idx]) });
  }
  const correctOptionId = letters[opts.findIndex(o => String(o.text) === String(correct))];
  return { options: opts, correctOptionId };
}

// --- Templates de Múltipla Escolha ---

// MC1: resultado de operação aritmética
function mcAritmetica(lang, cfg, i) {
  const a = val(i, 89) + 1;
  const b = val(i * 7, 47) + 1;
  const [op, fn, nome] = pick(OPS, i);
  const correct = fn(a, b);
  const dist = makeDistractors(correct, a, b, op);
  const { options, correctOptionId } = shuffleOptions(correct, dist, i);
  return {
    id: `gen-${cfg.slug}-mc-${i}`,
    title: `Aritmética: ${a} ${op} ${b}`,
    type: 'multiple-choice',
    language: lang,
    difficulty: pick(DIFICULDADES, i),
    xp: 20,
    prompt: `Em ${lang}, qual o resultado da operação de ${nome} \`${a} ${op} ${b}\`? Considere divisão como inteira quando aplicável.`,
    options,
    correctOptionId,
    explanation: `A operação ${a} ${op} ${b} em ${lang} resulta em ${correct}. ${op === '/' ? 'Divisão inteira descarta o resto. ' : ''}${op === '%' ? 'Módulo retorna o resto da divisão. ' : ''}Sempre calcule passo a passo e confira o tipo de operador.`,
  };
}

// MC2: comparação → true/false
function mcComparacao(lang, cfg, i) {
  const a = val(i, 73) + 1;
  const b = val(i * 3, 59) + 1;
  const [op, fn] = pick(CMP, i);
  const correct = fn(a, b);
  const { options, correctOptionId } = shuffleOptions(
    correct ? 'true' : 'false',
    [correct ? 'false' : 'true', 'undefined', 'null', '0'],
    i
  );
  return {
    id: `gen-${cfg.slug}-mccmp-${i}`,
    title: `Comparação: ${a} ${op} ${b}`,
    type: 'multiple-choice',
    language: lang,
    difficulty: 'Iniciante',
    xp: 15,
    prompt: `Em ${lang}, a expressão \`${a} ${op} ${b}\` avalia para qual valor booleano?`,
    options,
    correctOptionId,
    explanation: `Comparando ${a} ${op} ${b}: como ${a} ${correct ? '' : 'não '}satisfaz a condição, o resultado é ${correct ? 'true' : 'false'}. Operadores de comparação sempre retornam um booleano.`,
  };
}

// MC3: tipo do resultado
function mcTipo(lang, cfg, i) {
  const variants = [
    { expr: '5 + 3',            tipo: 'number/inteiro',  outros: ['string', 'boolean', 'array'] },
    { expr: '"a" + "b"',        tipo: 'string',          outros: ['number/inteiro', 'array', 'boolean'] },
    { expr: '5 > 3',            tipo: 'boolean',         outros: ['number/inteiro', 'string', 'null'] },
    { expr: '[1, 2, 3]',       tipo: 'array/lista',     outros: ['object/dict', 'string', 'number'] },
    { expr: '{ nome: "Ana" }', tipo: 'object/dict',     outros: ['array/lista', 'string', 'boolean'] },
    { expr: '10 / 3',          tipo: 'number/float',    outros: ['int', 'string', 'boolean'] },
    { expr: 'null',            tipo: 'null/None',       outros: ['undefined', 'boolean', 'number'] },
    { expr: 'true && false',   tipo: 'boolean',         outros: ['number', 'string', 'null'] },
  ];
  const v = pick(variants, i);
  const { options, correctOptionId } = shuffleOptions(v.tipo, v.outros, i);
  return {
    id: `gen-${cfg.slug}-mctipo-${i}`,
    title: `Tipo do resultado de ${v.expr}`,
    type: 'multiple-choice',
    language: lang,
    difficulty: 'Iniciante',
    xp: 18,
    prompt: `Em ${lang}, qual o tipo do resultado da expressão \`${v.expr}\`?`,
    options,
    correctOptionId,
    explanation: `A expressão \`${v.expr}\` produz um valor do tipo ${v.tipo}. Conhecer os tipos de retorno é essencial para evitar bugs de coerção e para usar os valores corretamente depois.`,
  };
}

// MC4: conceito da linguagem (pergunta teórica)
function mcConceito(lang, cfg, i) {
  const conceito = pick(CONCEPTS, i);
  const perguntas = [
    `Em ${lang}, qual afirmação sobre "${conceito}" está CORRETA?`,
    `Sobre o uso de ${conceito} em ${lang}, qual alternativa é verdadeira?`,
    `Qual é a melhor prática ao trabalhar com ${conceito} em ${lang}?`,
    `Em ${lang}, o que caracteriza corretamente ${conceito}?`,
  ];
  const corretas = [
    `${conceito.charAt(0).toUpperCase() + conceito.slice(1)} é um conceito fundamental que estrutura a lógica do código em ${lang}.`,
    `Compreender ${conceito} permite escrever código mais legível, seguro e eficiente em ${lang}.`,
    `${conceito.charAt(0).toUpperCase() + conceito.slice(1)} deve ser usado com clareza de intenção para evitar efeitos colaterais em ${lang}.`,
    `Dominar ${conceito} reduz bugs e facilita a manutenção do código em ${lang}.`,
  ];
  const erradas = [
    `${conceito.charAt(0).toUpperCase() + conceito.slice(1)} é obsoleto e nunca deve ser usado em ${lang}.`,
    `${conceito.charAt(0).toUpperCase() + conceito.slice(1)} só funciona em código compilado, não em ${lang}.`,
    `Em ${lang}, ${conceito} é sempre automático e o programador não precisa entender.`,
    `${conceito.charAt(0).toUpperCase() + conceito.slice(1)} é exclusivo de ${lang} e não existe em outras linguagens.`,
  ];
  const correta = pick(corretas, i);
  const errada1 = pick(erradas, i);
  const errada2 = pick(erradas, i + 1);
  const errada3 = pick(erradas, i + 2);
  const { options, correctOptionId } = shuffleOptions(correta, [errada1, errada2, errada3], i);
  return {
    id: `gen-${cfg.slug}-mcconc-${i}`,
    title: `Conceito: ${conceito}`,
    type: 'multiple-choice',
    language: lang,
    difficulty: pick(DIFICULDADES, i + 1),
    xp: 25,
    prompt: pick(perguntas, i),
    options,
    correctOptionId,
    explanation: `${correta} Esta é uma questão conceitual sobre ${conceito} — revise o módulo correspondente do curso de ${lang} para aprofundar.`,
  };
}

// --- Templates de Previsão de Saída ---

function predictAritmetica(lang, cfg, i) {
  const a = val(i, 91) + 1;
  const b = val(i * 5, 43) + 1;
  const [op, fn] = pick(OPS, i);
  const correct = fn(a, b);
  const dist = makeDistractors(correct, a, b, op);
  const { options, correctOptionId } = shuffleOptions(correct, dist, i);
  const snippet = cfg.print === 'print'
    ? `${cfg.print}(${a} ${op} ${b})`
    : cfg.print === 'printf'
      ? `${cfg.print}("%d", ${a} ${op} ${b});`
      : `${cfg.print}(${a} ${op} ${b});`;
  return {
    id: `gen-${cfg.slug}-pred-${i}`,
    title: `Saída: ${a} ${op} ${b}`,
    type: 'predict-output',
    language: lang,
    difficulty: 'Iniciante',
    xp: 22,
    prompt: `Qual será a saída do código abaixo em ${lang}?`,
    codeSnippet: snippet,
    options,
    correctOptionId,
    explanation: `A expressão ${a} ${op} ${b} resulta em ${correct}. ${op === '/' ? 'Lembre: divisão inteira descarta as casas decimais. ' : ''}${op === '%' ? 'Módulo retorna o resto da divisão de ${a} por ${b}.'.replace('${a}', a).replace('${b}', b) + ' ' : ''}Acompanhe a ordem de execução e o tipo de cada operador.`,
  };
}

function predictString(lang, cfg, i) {
  const p1 = pick(PALAVRAS, i);
  const p2 = pick(PALAVRAS, i * 3 + 1);
  const a = val(i, 40);
  // concatenação
  const correct = p1 + p2;
  const dist = [p1, p2, p1 + ' ' + p2, String(a)];
  const unique = [...new Set([correct, ...dist])].slice(0, 4);
  while (unique.length < 4) unique.push('undefined');
  const { options, correctOptionId } = shuffleOptions(unique[0], unique.slice(1), i);
  const snippet = cfg.print === 'print'
    ? `${cfg.print}("${p1}" + "${p2}")`
    : cfg.print === 'printf'
      ? `${cfg.print}("%s", "${p1}" "${p2}");`
      : cfg.print === 'std::cout'
        ? `${cfg.print} << "${p1}" << "${p2}";`
        : `${cfg.print}("${p1}" + "${p2}");`;
  return {
    id: `gen-${cfg.slug}-predstr-${i}`,
    title: `Saída: concatenação "${p1}" + "${p2}"`,
    type: 'predict-output',
    language: lang,
    difficulty: 'Iniciante',
    xp: 22,
    prompt: `Qual será a saída do código abaixo em ${lang}?`,
    codeSnippet: snippet,
    options,
    correctOptionId,
    explanation: `A concatenação de "${p1}" e "${p2}" resulta em "${correct}". O operador + entre strings junta os textos sem espaço adicional.`,
  };
}

function predictLoop(lang, cfg, i) {
  const n = val(i, 12) + 2;
  const correct = (n * (n + 1)) / 2; // soma 1..n
  const dist = makeDistractors(correct, n, n + 1, '+');
  const { options, correctOptionId } = shuffleOptions(correct, dist, i);
  const varI = 'i';
  const snippet = cfg.print === 'print'
    ? `soma = 0\nfor ${varI} in range(1, ${n + 1}):\n    soma += ${varI}\nprint(soma)`
    : cfg.print === 'printf'
      ? `int soma = 0;\nfor (int ${varI} = 1; ${varI} <= ${n}; ${varI}++) soma += ${varI};\nprintf("%d", soma);`
      : `let soma = 0;\nfor (let ${varI} = 1; ${varI} <= ${n}; ${varI}++) soma += ${varI};\n${cfg.print}(soma);`;
  return {
    id: `gen-${cfg.slug}-predloop-${i}`,
    title: `Saída: soma de 1 a ${n}`,
    type: 'predict-output',
    language: lang,
    difficulty: 'Intermediário',
    xp: 30,
    prompt: `Qual será o valor final de \`soma\` após o loop de 1 até ${n} em ${lang}?`,
    codeSnippet: snippet,
    options,
    correctOptionId,
    explanation: `A soma dos inteiros de 1 a ${n} é ${correct} (fórmula n*(n+1)/2 = ${n}*${n + 1}/2). Loops acumuladores são comuns — saber a fórmula fechada ajuda a verificar o resultado.`,
  };
}

// --- Templates de Complete o Código ---

const KEYWORDS = ['if', 'else', 'for', 'while', 'return', 'function', 'const', 'let', 'var',
                  'class', 'import', 'export', 'try', 'catch', 'switch', 'case', 'break',
                  'continue', 'new', 'this', 'async', 'await', 'typeof', 'void', 'do'];
const METHODS = ['push', 'pop', 'map', 'filter', 'reduce', 'forEach', 'find', 'sort',
                 'slice', 'splice', 'includes', 'indexOf', 'join', 'split', 'reverse',
                 'concat', 'flat', 'some', 'every', 'fill'];

function completeKeyword(lang, cfg, i) {
  const kw = pick(KEYWORDS, i);
  const uses = [
    { ctx: 'condição',        code: `__BLANK__ (x > 0) { /* ... */ }` },
    { ctx: 'laço contador',    code: `__BLANK__ (let i = 0; i < 10; i++) { /* ... */ }` },
    { ctx: 'valor de função',  code: `function soma(a, b) { __BLANK__ a + b; }` },
    { ctx: 'declaração',       code: `__BLANK__ pi = 3.14;` },
    { ctx: 'repetição',        code: `__BLANK__ (condicao) { /* ... */ }` },
    { ctx: 'tratamento',       code: `__BLANK__ { fazer(); } catch (e) { tratar(e); }` },
  ];
  const u = pick(uses, i);
  return {
    id: `gen-${cfg.slug}-comp-${i}`,
    title: `Complete: palavra-chave para ${u.ctx}`,
    type: 'complete-code',
    language: lang,
    difficulty: 'Iniciante',
    xp: 18,
    prompt: `Preencha a lacuna com a palavra-chave correta de ${lang} para o contexto de ${u.ctx}.`,
    codeSnippet: u.code,
    blankPlaceholder: '__BLANK__',
    correctAnswer: kw,
    hints: [`A palavra-chave tem ${kw.length} letras.`],
    explanation: `A palavra-chave \`${kw}\` é usada em ${lang} para estruturar ${u.ctx}. Conhecer as palavras-chave da linguagem é a base para escrever código sintaticamente correto.`,
  };
}

function completeMethod(lang, cfg, i) {
  const m = pick(METHODS, i);
  const uses = [
    { ctx: 'adicionar ao fim do array', code: `arr.__BLANK__(novoItem);` },
    { ctx: 'transformar cada elemento',  code: `const dobrados = arr.__BLANK__(x => x * 2);` },
    { ctx: 'filtrar elementos',          code: `const pares = arr.__BLANK__(x => x % 2 === 0);` },
    { ctx: 'somar todos os elementos',   code: `const total = arr.__BLANK__((acc, x) => acc + x, 0);` },
    { ctx: 'iterar sem retorno',         code: `arr.__BLANK__(x => console.log(x));` },
    { ctx: 'achar primeiro que casa',    code: `const item = arr.__BLANK__(x => x.id === 42);` },
    { ctx: 'verificar inclusão',         code: `arr.__BLANK__(valor); // true/false` },
    { ctx: 'juntar em string',           code: `const texto = arr.__BLANK__(",");` },
  ];
  const u = pick(uses, i);
  return {
    id: `gen-${cfg.slug}-compm-${i}`,
    title: `Complete: método para ${u.ctx}`,
    type: 'complete-code',
    language: lang,
    difficulty: 'Intermediário',
    xp: 28,
    prompt: `Preencha a lacuna com o método de array/lista de ${lang} que realiza: ${u.ctx}.`,
    codeSnippet: u.code,
    blankPlaceholder: '__BLANK__',
    correctAnswer: m,
    hints: [`O método tem ${m.length} letras.`],
    explanation: `O método \`${m}\` é usado em ${lang} para ${u.ctx}. Dominar os métodos de coleções torna o código mais declarativo e expressivo — evita loops manuais.`,
  };
}

// --- Templates Verdadeiro/Falso ---

const TF_STATEMENTS = [
  { t: 'Variáveis declaradas com const não podem ser reatribuídas.', v: true },
  { t: 'O operador === compara valor e tipo sem coerção.', v: true },
  { t: 'Arrays em JavaScript são imutáveis por padrão.', v: false },
  { t: 'null e undefined são estritamente iguais (===).', v: false },
  { t: 'arrow functions têm this léxico (herdam do escopo).', v: true },
  { t: 'O loop for...of percorre valores de iteráveis.', v: true },
  { t: 'JSON.parse aceita qualquer string sem erro.', v: false },
  { t: 'Funções async sempre retornam uma Promise.', v: true },
  { t: '0 é um valor falsy em contextos booleanos.', v: true },
  { t: 'Uma string vazia é truthy.', v: false },
  { t: 'O método map modifica o array original.', v: false },
  { t: 'typeof null retorna "object".', v: true },
  { t: 'Promise.all rejeita se qualquer promise rejeitar.', v: true },
  { t: 'let tem escopo de bloco; var tem escopo de função.', v: true },
  { t: 'O operador ?? substitui apenas null e undefined.', v: true },
  { t: 'Spread (...) faz cópia profunda de objetos.', v: false },
  { t: 'Classes em JS suportam herança com extends.', v: true },
  { t: 'parseInt("3.14") retorna 3.14.', v: false },
  { t: 'Todo objeto em JS herda de Object.prototype.', v: true },
  { t: 'setTimeout(fn, 0) executa fn imediatamente.', v: false },
  { t: 'O método filter sempre retorna um array menor ou igual.', v: true },
  { t: 'Strings em Python são imutáveis.', v: true },
  { t: 'Em Python, indentação define blocos.', v: true },
  { t: 'Listas em Python são imutáveis como tuplas.', v: false },
  { t: 'Dicionários em Python preservam ordem de inserção (3.7+).', v: true },
  { t: 'Em SQL, WHERE filtra linhas após GROUP BY.', v: false },
  { t: 'Em SQL, HAVING filtra grupos após agregação.', v: true },
  { t: 'COUNT(*) conta apenas valores não-NULL.', v: false },
  { t: 'Em C, strings são arrays de char terminados em \\0.', v: true },
  { t: 'Em C, esquecer free() causa memory leak.', v: true },
  { t: 'Em C++, smart pointers gerenciam memória automaticamente.', v: true },
  { t: 'Em C#, decimal é recomendado para valores monetários.', v: true },
  { t: 'Em HTML, o atributo alt é obrigatório em img.', v: true },
  { t: 'CSS box-sizing: border-box inclui padding e border na largura.', v: true },
  { t: 'Flexbox é unidimensional; Grid é bidimensional.', v: true },
  { t: 'TypeScript é um superset tipado de JavaScript.', v: true },
  { t: 'any e unknown são equivalentes em TypeScript.', v: false },
  { t: 'React Native renderiza componentes nativos (não WebView).', v: true },
  { t: 'Hooks do React só funcionam em classes.', v: false },
];

function trueFalse(lang, cfg, i) {
  const s = pick(TF_STATEMENTS, i);
  return {
    id: `gen-${cfg.slug}-tf-${i}`,
    title: `V/F: ${s.t.length > 45 ? s.t.slice(0, 45) + '…' : s.t}`,
    type: 'true-false',
    language: lang,
    difficulty: 'Iniciante',
    xp: 12,
    prompt: `A afirmação abaixo sobre programação (em ${lang} ou conceitos gerais) é VERDADEIRA ou FALSA?\n\n"${s.t}"`,
    correctAnswer: s.v ? 'true' : 'false',
    explanation: `${s.v ? 'VERDADEIRO' : 'FALSO'}. ${s.t} ${s.v ? 'Está correto — é um conceito fundamental.' : 'Esta afirmação está incorreta — revise o tópico correspondente.'}`,
  };
}

// --- Gerador principal ---
// Distribui o TARGET por tipo para garantir variedade.
const TEMPLATES = [mcAritmetica, mcComparacao, mcTipo, mcConceito,
                   predictAritmetica, predictString, predictLoop,
                   completeKeyword, completeMethod, trueFalse];

export const EXERCISES_PER_LANG = 10000; // ajustável — altere para mudar o volume total

export function generateAllExercises(perLang = EXERCISES_PER_LANG) {
  const all = [];
  for (const [lang, cfg] of Object.entries(LANG_CONFIG)) {
    let n = 0;
    let i = 0;
    while (n < perLang) {
      const tpl = TEMPLATES[i % TEMPLATES.length];
      const ex = tpl(lang, cfg, i);
      // sobrescreve índice no id para garantir unicidade global por linguagem
      ex.id = `gen-${cfg.slug}-${ex.type}-${n}`;
      all.push(ex);
      n++;
      i++;
    }
  }
  return all;
}

export const GENERATED_EXERCISES = generateAllExercises();
