// MonoCode — Exercícios "Corrija o Código" (JavaScript executável)

export const FIX_CODE = [
  // --- original (preservado) ---
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
    explanation: 'Variáveis declaradas com `const` não podem ser reatribuídas. Como `contador` sofre reatribuição a cada iteração (`+=`), ela deve ser declarada com `let`. Regra prática: use `const` por padrão; troque para `let` apenas quando for reatribuir. Detalhe: `const obj = {}` impede reatribuir `obj`, mas permite `obj.nome = "x"` (mutação do conteúdo).'
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
    explanation: 'Ao invocar uma função que retorna uma Promise sem `await` ou `.then()`, a variável recebe o objeto Promise pendente em vez de seu valor resolvido. Adicionar `async` à função e `await` antes da chamada resolve o valor. Alternativa: `obterDadosServidor().then(r => console.log("Resultado:", r))`. async/await é mais legível para fluxos complexos.'
  },

  // --- novos ---
  {
    id: 'ex-fix-3',
    title: 'Corrija o bug do == com coerção',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 30,
    prompt: 'O código valida idade, mas mesmo digitando "0" o usuário é considerado maior. A causa é a comparação errada. Corrija.',
    initialCode: `const idade = "0"; // simula entrada do input

if (idade == 0) {
  console.log("Inválido: digite sua idade");
} else if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
    solutionCode: `const idade = "0";

if (idade === "" || idade === null) {
  console.log("Inválido: digite sua idade");
} else if (Number(idade) >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
    testValidation: (output) => output.includes('Menor de idade'),
    explanation: 'O bug: `"0" == 0` é true (coerção), e `"0" >= 18` é false (vira 0 >= 18). Solução: converta explicitamente com `Number()` e valide entrada vazia. Regra geral: NUNCA use `==` — sempre `===`. Com inputs, converta o tipo explicitamente antes de comparar.'
  },
  {
    id: 'ex-fix-4',
    title: 'Corrija o loop que pulou o forEach',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 30,
    prompt: 'O desenvolvedor queria dobrar cada número do array, mas o array continua igual. Corrija.',
    initialCode: `const numeros = [1, 2, 3, 4];

numeros.forEach(n => n * 2);

console.log(numeros);`,
    solutionCode: `const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(n => n * 2);

console.log(dobrados);`,
    testValidation: (output) => output.includes('2,3,4') || output.includes('[2, 4, 6, 8]'),
    explanation: 'forEach não retorna nada e ignora o valor da callback — usar para "transformar" é erro clássico. Para criar um novo array transformado, use `map`. forEach serve para causar efeitos colaterais (log, salvar). Se você escreveu `.map(...)` e ignora o retorno, queria forEach. Aqui, o oposto: queria map.'
  },
  {
    id: 'ex-fix-5',
    title: 'Corrija o this perdido em setTimeout',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'O método `atrasar()` deveria imprimir o nome do carro, mas imprime undefined. Corrija preservando o this.',
    initialCode: `const carro = {
  modelo: "Fusca",
  atrasar: function() {
    setTimeout(function() {
      console.log("Modelo:", this.modelo);
    }, 100);
  }
};

carro.atrasar();`,
    solutionCode: `const carro = {
  modelo: "Fusca",
  atrasar: function() {
    setTimeout(() => {
      console.log("Modelo:", this.modelo);
    }, 100);
  }
};

carro.atrasar();`,
    testValidation: (output) => output.includes('Modelo: Fusca'),
    explanation: 'Funções comuns perdem o `this` ao serem passadas como callback — em strict mode, vira undefined. Arrow functions NÃO têm this próprio — herdam do escopo léxico (aqui, o método atrasar, que tem this = carro). Alternativas legadas: `const self = this;` antes, ou `.bind(this)`. Hoje, arrow é o padrão.'
  },
  {
    id: 'ex-fix-6',
    title: 'Corrija o spread que copiou por referência',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'O desenvolvedor copiou o objeto, mas ao mudar `copia.config.tema`, o original mudou também. Corrija para uma cópia realmente independente.',
    initialCode: `const original = { nome: "Ana", config: { tema: "dark" } };

const copia = { ...original };
copia.config.tema = "light";

console.log(original.config.tema);  // deveria ser "dark"`,
    solutionCode: `const original = { nome: "Ana", config: { tema: "dark" } };

const copia = structuredClone(original);
copia.config.tema = "light";

console.log(original.config.tema);  // "dark"`,
    testValidation: (output) => output.includes('dark') && !output.includes('light'),
    explanation: 'Spread (`{ ...obj }`) faz cópia RASA: propriedades aninhadas ainda são compartilhadas. `copia.config` é o MESMO objeto que `original.config`. Para cópia profunda use `structuredClone(obj)` (nativo, moderno) ou `JSON.parse(JSON.stringify(obj))` (legado, não funciona com datas/functions). structuredClone é a escolha atual.'
  },
  {
    id: 'ex-fix-7',
    title: 'Corrija a Promise sem await',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'A função deveria esperar o fetch terminar antes de retornar o JSON, mas está retornando uma Promise pendente. Corrija.',
    initialCode: `function buscarUsuario(id) {
  const resposta = fetch("/api/usuarios/" + id);
  const dados = resposta.json();
  return dados;
}

// Simulação para o teste:
function buscarUsuario(id) {
  return Promise.resolve({ id, nome: "Ana" });
}

console.log(buscarUsuario(1));`,
    solutionCode: `async function buscarUsuario(id) {
  const resposta = await fetch("/api/usuarios/" + id);
  const dados = await resposta.json();
  return dados;
}

// Simulação para o teste:
function buscarUsuario(id) {
  return Promise.resolve({ id, nome: "Ana" });
}

buscarUsuario(1).then(u => console.log("Usuario:", u.nome));`,
    testValidation: (output) => output.includes('Usuario: Ana'),
    explanation: 'fetch retorna uma Promise — precisa de await (ou .then). resposta.json() também é Promise. Sem await, `dados` é a Promise pendente. Corrigido: async na função + await em cada etapa. Quem chama também precisa await (ou .then). Funções async SEMPRE retornam Promise — mesmo o valor retornado vira Promise resolvido.'
  },
  {
    id: 'ex-fix-8',
    title: 'Corrija a mutação de array no React',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'O código adiciona uma tarefa, mas muta o array original — em frameworks como React, a UI não atualiza. Corrija criando um novo array.',
    initialCode: `const tarefas = [{ id: 1, texto: "Estudar" }];
const nova = { id: 2, texto: "Praticar" };

tarefas.push(nova);

console.log("Total:", tarefas.length);`,
    solutionCode: `const tarefas = [{ id: 1, texto: "Estudar" }];
const nova = { id: 2, texto: "Praticar" };

const novasTarefas = [...tarefas, nova];

console.log("Total:", novasTarefas.length);`,
    testValidation: (output) => output.includes('Total: 2'),
    explanation: 'push muta o array original. Em React e em código concorrente, a referência não muda, então a comparação de estado não detecta mudança e a UI não re-renderiza. Solução idiomática: `[...tarefas, nova]` cria um novo array. Para remover: `tarefas.filter(...)`. Para atualizar item: `tarefas.map(...)`. Imutabilidade é filosofia central do React.'
  },
  {
    id: 'ex-fix-9',
    title: 'Corrija o await em loop (paralelismo perdido)',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 50,
    prompt: 'O código busca 3 usuários sequencialmente (lento). Corrija para buscar em paralelo, mantendo o resultado na ordem correta.',
    initialCode: `async function buscarUsuario(id) {
  return Promise.resolve({ id, nome: "User" + id });
}

async function main() {
  const ids = [1, 2, 3];
  const usuarios = [];
  for (const id of ids) {
    const u = await buscarUsuario(id);
    usuarios.push(u);
  }
  console.log("Buscados:", usuarios.map(u => u.nome).join(","));
}

main();`,
    solutionCode: `async function buscarUsuario(id) {
  return Promise.resolve({ id, nome: "User" + id });
}

async function main() {
  const ids = [1, 2, 3];
  const usuarios = await Promise.all(ids.map(id => buscarUsuario(id)));
  console.log("Buscados:", usuarios.map(u => u.nome).join(","));
}

main();`,
    testValidation: (output) => output.includes('Buscados: User1,User2,User3'),
    explanation: 'await em loop for...of é SEQUENCIAL — 3 requisições em série. Promise.all(map) dispara todas em paralelo e espera todas — muito mais rápido. O resultado chega na ordem do array de entrada. Use await em loop só quando cada iteração depende da anterior; para independentes, sempre Promise.all + map.'
  },
  {
    id: 'ex-fix-10',
    title: 'Corrija o NaN em cálculo com input',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 30,
    prompt: 'A função soma dois números vindos como string, mas retorna "NaN50". Corrija para somar numericamente.',
    initialCode: `function soma(a, b) {
  return a + b;
}

// a e b vêm como strings (de inputs):
const resultado = soma("20", "30");
console.log("Resultado:", resultado);`,
    solutionCode: `function soma(a, b) {
  return Number(a) + Number(b);
}

const resultado = soma("20", "30");
console.log("Resultado:", resultado);`,
    testValidation: (output) => output.includes('Resultado: 50'),
    explanation: 'Strings + Strings = concatenação ("20" + "30" = "2030"). Aqui o teste mostrou "NaN50" porque o cenário mistura tipos. Converter explicitamente com `Number()`, `parseInt()`, ou `+a` (unário) é a correção. Sempre converta entradas externas (input, API, querystring) antes de calcular. Para floats: `parseFloat`.'
  },
  {
    id: 'ex-fix-11',
    title: 'Corrija o JSON.parse sem try/catch',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'O código abaixo quebra ao receber JSON inválido. Corrija para tratar o erro com elegância (imprimir "JSON inválido" sem crashar).',
    initialCode: `const textoRecebido = "{nome: Ana}"; // JSON inválido (sem aspas nas chaves)

const dados = JSON.parse(textoRecebido);
console.log("Nome:", dados.nome);`,
    solutionCode: `const textoRecebido = "{nome: Ana}";

try {
  const dados = JSON.parse(textoRecebido);
  console.log("Nome:", dados.nome);
} catch (erro) {
  console.log("JSON inválido");
}`,
    testValidation: (output) => output.includes('JSON inválido'),
    explanation: 'JSON.parse lança SyntaxError em JSON inválido. Sem try/catch, o script crasha. Sempre envolva parse de dados externos em try/catch — entrada não confiável pode estar corrompida. Melhor ainda: valide com schemas (zod, ajv) depois do parse. JSON exige aspas duplas em chaves: `{"nome": "Ana"}`.'
  },
  {
    id: 'ex-fix-12',
    title: 'Corrija a comparação de arrays',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 40,
    prompt: 'A comparação de arrays deveria dizer "iguais" para [1,2,3] e [1,2,3], mas diz "diferentes". Corrija.',
    initialCode: `const a = [1, 2, 3];
const b = [1, 2, 3];

if (a === b) {
  console.log("iguais");
} else {
  console.log("diferentes");
}`,
    solutionCode: `const a = [1, 2, 3];
const b = [1, 2, 3];

const iguais = a.length === b.length && a.every((v, i) => v === b[i]);

if (iguais) {
  console.log("iguais");
} else {
  console.log("diferentes");
}`,
    testValidation: (output) => output.includes('iguais'),
    explanation: 'Arrays são objetos — `===` compara REFERÊNCIA, não conteúdo. Dois arrays literais são objetos distintos mesmo com o mesmo conteúdo. Para comparar valores: `a.length === b.length && a.every((v, i) => v === b[i])`. Para casos complexos (objetos aninhados), use `JSON.stringify(a) === JSON.stringify(b)` ou uma lib como lodash.isEqual.'
  },
  {
    id: 'ex-fix-13',
    title: 'Corrija o event listener que some com o loop',
    type: 'fix-code',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 50,
    prompt: 'A função cria 3 botões e quer que cada um mostre seu índice ao clicar. Mas todos mostram "3". Corrija capturando o valor correto.',
    initialCode: `function criarBotoes() {
  const div = { innerHTML: "" };
  const botoes = [];
  for (var i = 0; i < 3; i++) {
    const btn = {
      indice: i,
      click: null
    };
    btn.click = function() { botoes.push(i); };
    botoes.push(btn);
  }
  botoes.forEach(b => b.click());
  console.log("Clicados:", botoes.map((_, idx) => idx).join(","));
}

criarBotoes();`,
    solutionCode: `function criarBotoes() {
  const botoes = [];
  for (let i = 0; i < 3; i++) {
    const btn = { indice: i, click: null };
    btn.click = () => botoes.push(btn.indice);
    botoes.push(btn);
  }
  botoes.forEach(b => b.click());
  console.log("Clicados:", botoes.map(b => b.indice).join(","));
}

criarBotoes();`,
    testValidation: (output) => output.includes('Clicados: 0,1,2'),
    explanation: 'Com `var`, todas as closures compartilham a MESMA variável i — quando os cliques disparam, i já é 3. Soluções: (1) `let` em vez de `var` — cada iteração tem seu próprio i (escopo de bloco). (2) IIFE para capturar: `((i) => btn.click = ...)(i)`. (3) Capturar em propriedade: `btn.indice = i`. `let` é a solução moderna e mais limpa.'
  }
];
