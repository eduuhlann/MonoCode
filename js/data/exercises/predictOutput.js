// MonoCode — Exercícios "Qual será a Saída?" (previsão de output)

export const PREDICT_OUTPUT = [
  // --- originais (preservados) ---
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
    explanation: 'O operador `+` com arrays força a conversão de ambos para strings ("1,2" e "3,4") e as concatena, resultando na string "1,23,4". Arrays não somam numericamente — o `+` é ambíguo e vira concatenação. Para somar elemento a elemento, use map + índice ou libraries como Ramda. Esse comportamento bizarro é o motivo para nunca somar arrays diretamente.'
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
    explanation: 'A closure mantém a referência para `total` no escopo léxico: começa em 10, com `acum(5)` vai para 15, e com `acum(15)` vai para 30. Cada chamada opera sobre o estado persistente da closure — é como um objeto com estado privado sem usar `this`. Esse padrão fundamenta fábricas de funções, hooks do React e memoization.'
  },

  // --- novos: JavaScript ---
  {
    id: 'ex-output-3',
    title: 'typeof em array',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'O que será impresso?',
    codeSnippet: `console.log(typeof [1, 2, 3]);`,
    options: [
      { id: 'a', text: '"array"' },
      { id: 'b', text: '"object"' },
      { id: 'c', text: '"number"' },
      { id: 'd', text: '"undefined"' }
    ],
    correctOptionId: 'b',
    explanation: '`typeof []` é "object" — em JS, arrays são objetos especiais. Para verificar se algo é array de verdade, use `Array.isArray(x)`. O typeof nunca retorna "array" — essa é uma das pegadinhas históricas. Outra: `typeof null === "object"` (bug de 1995 nunca corrigido por compatibilidade).'
  },
  {
    id: 'ex-output-4',
    title: 'Coerção com + e -',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Qual o resultado?',
    codeSnippet: `console.log("5" + 1, "5" - 1);`,
    options: [
      { id: 'a', text: '"51" 4' },
      { id: 'b', text: '6 4' },
      { id: 'c', text: '"51" "4"' },
      { id: 'd', text: '6 "4"' }
    ],
    correctOptionId: 'a',
    explanation: '`+` é ambíguo: com string, vira concatenação ("5" + 1 = "51"). `-` não tem sentido para strings, então o JS converte "5" para número e subtrai (4). Esse comportamento é uma das maiores críticas ao JS. Regra de ouro: converta explicitamente (`Number("5") + 1`) para nunca ser pego de surpresa.'
  },
  {
    id: 'ex-output-5',
    title: '0.1 + 0.2 (ponto flutuante)',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'O que `0.1 + 0.2 === 0.3` retorna?',
    codeSnippet: `console.log(0.1 + 0.2 === 0.3);`,
    options: [
      { id: 'a', text: 'true' },
      { id: 'b', text: 'false' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'Erro' }
    ],
    correctOptionId: 'b',
    explanation: '`0.1 + 0.2` é `0.30000000000000004` em ponto flutuante binário (IEEE 754) — não exatamente 0.3. Por isso a comparação falha. Para dinheiro, use inteiros (centavos) ou decimal.js. Para comparações, use `Math.abs(a - b) < 1e-9`. Esse problema NÃO é do JS — afeta toda linguagem com float binário.'
  },
  {
    id: 'ex-output-6',
    title: 'Hoisting com var',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'O que acontece?',
    codeSnippet: `console.log(x);
var x = 5;`,
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: 'undefined' },
      { id: 'c', text: 'ReferenceError' },
      { id: 'd', text: 'null' }
    ],
    correctOptionId: 'b',
    explanation: '`var` é içada (hoisted) — a declaração sobe ao topo, mas a ATRIBUIÇÃO não. Equivale a `var x; console.log(x); x = 5;` — x é undefined no momento do log. `let` e `const` também são içadas, mas ficam na "temporal dead zone" (lançam ReferenceError se acessadas antes). Use let/const e esse bug some.'
  },
  {
    id: 'ex-output-7',
    title: 'Map com parseInt (pegadinha clássica)',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'O que `["1","2","3"].map(parseInt)` retorna?',
    codeSnippet: `console.log(["1", "2", "3"].map(parseInt));`,
    options: [
      { id: 'a', text: '[1, 2, 3]' },
      { id: 'b', text: '[1, NaN, NaN]' },
      { id: 'c', text: '[1, 2, 3, NaN]' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'b',
    explanation: 'map passa (item, índice, array) para a callback. parseInt(string, radix) recebe (string, base). Então na 2ª iteração: parseInt("2", 1) — base 1 é inválida → NaN. Na 3ª: parseInt("3", 2) — "3" não é dígito binário → NaN. Correto: `["1","2","3"].map(s => parseInt(s, 10))`. A pegadinha mais famosa do JS!'
  },
  {
    id: 'ex-output-8',
    title: 'this em método vs função comum',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'O que será impresso?',
    codeSnippet: `const obj = {
  nome: "Ana",
  cumprimentar: function() {
    setTimeout(function() {
      console.log(this.nome);
    }, 0);
  }
};
obj.cumprimentar();`,
    options: [
      { id: 'a', text: '"Ana"' },
      { id: 'b', text: 'undefined' },
      { id: 'c', text: 'ReferenceError' },
      { id: 'd', text: 'null' }
    ],
    correctOptionId: 'b',
    explanation: 'A function comum dentro do setTimeout perde o `this` do objeto — em strict mode, `this` é undefined. Solução moderna: use arrow function (`setTimeout(() => console.log(this.nome), 0)`) — ela captura o `this` léxico. Antigamente usava-se `const self = this;` antes do callback. Mais um motivo para preferir arrows em callbacks.'
  },
  {
    id: 'ex-output-9',
    title: 'Objetos: referência vs cópia',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Qual o resultado?',
    codeSnippet: `const a = { n: 1 };
const b = a;
b.n = 2;
console.log(a.n);`,
    options: [
      { id: 'a', text: '1' },
      { id: 'b', text: '2' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'ReferenceError' }
    ],
    correctOptionId: 'b',
    explanation: 'Objetos são atribuídos por REFERÊNCIA — `b = a` cria outro nome para o mesmo objeto. Mudar `b.n` muda `a.n` também. Para copiar de verdade: `const b = { ...a }` (cópia rasa) ou `structuredClone(a)` (cópia profunda). Esse comportamento é fonte nº 1 de bugs em estado React — daí a regra de nunca mutar.'
  },
  {
    id: 'ex-output-10',
    title: 'Async: ordem dos logs',
    type: 'predict-output',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 45,
    prompt: 'Qual a ordem impressa?',
    codeSnippet: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,
    options: [
      { id: 'a', text: '1 2 3 4' },
      { id: 'b', text: '1 4 3 2' },
      { id: 'c', text: '1 4 2 3' },
      { id: 'd', text: '1 3 4 2' }
    ],
    correctOptionId: 'b',
    explanation: 'Síncrono primeiro: "1", "4". Depois as microtasks (promises) — "3". Por fim as macrotasks (setTimeout) — "2". Microtasks têm prioridade sobre macrotasks: a fila de microtasks esvazia completamente antes de qualquer macrotask. Entender isso é entender o event loop — e explica 90% dos bugs assíncronos.'
  },

  // --- Python ---
  {
    id: 'ex-output-11',
    title: 'Listas mutáveis como argumento padrão',
    type: 'predict-output',
    language: 'Python',
    difficulty: 'Avançado',
    xp: 45,
    prompt: 'O que será impresso?',
    codeSnippet: `def adicionar(item, lista=[]):
    lista.append(item)
    return lista

print(adicionar(1))
print(adicionar(2))`,
    options: [
      { id: 'a', text: '[1] e [2]' },
      { id: 'b', text: '[1] e [1, 2]' },
      { id: 'c', text: '[1] e erro' },
      { id: 'd', text: 'erro na primeira chamada' }
    ],
    correctOptionId: 'b',
    explanation: 'O valor padrão `[]` é avaliado UMA vez na definição — todas as chamadas sem `lista` compartilham o MESMO objeto. Esse é o bug pythonico mais clássico. Correto: `def fn(item, lista=None): if lista is None: lista = []`. Listas/dicts/sets como default SEMPRE causam esse bug — nunca use.'
  },
  {
    id: 'ex-output-12',
    title: 'Variáveis em loop com closure',
    type: 'predict-output',
    language: 'Python',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'O que será impresso?',
    codeSnippet: `fns = []
for i in range(3):
    fns.append(lambda: i)

for f in fns:
    print(f(), end=" ")`,
    options: [
      { id: 'a', text: '0 1 2' },
      { id: 'b', text: '2 2 2' },
      { id: 'c', text: '0 0 0' },
      { id: 'd', text: 'erro' }
    ],
    correctOptionId: 'b',
    explanation: 'As lambdas capturam a VARIÁVEL `i`, não seu valor no momento da criação. Quando o loop termina, i = 2 — todas imprimem 2. Correto: `lambda i=i: i` (default argument captura o valor) ou `lambda i=i: i` com functools.partial. O mesmo bug existe em JS com var (não com let).'
  },
  {
    id: 'ex-output-13',
    title: 'Fatiamento de strings',
    type: 'predict-output',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'O que retorna `"Python"[1:4]"`?',
    codeSnippet: `print("Python"[1:4])`,
    options: [
      { id: 'a', text: '"yth"' },
      { id: 'b', text: '"Pyt"' },
      { id: 'c', text: '"ytho"' },
      { id: 'd', text: '"Pyth"' }
    ],
    correctOptionId: 'a',
    explanation: 'Slicing `[inicio:fim]` é EXCLUSIVO no fim. `[1:4]` pega índices 1, 2, 3 → "yth". Lembre: início inclusivo, fim exclusivo. Outros: `[:3]` (do começo), `[3:]` (até o fim), `[::-1]` (invertida), `[::2]` (de 2 em 2). Slicing nunca dá IndexError — fatia fora do range retorna vazio.'
  },
  {
    id: 'ex-output-14',
    title: 'Booleanos em Python (truthy)',
    type: 'predict-output',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'O que `bool([])` e `bool([0])` retornam?',
    codeSnippet: `print(bool([]), bool([0]))`,
    options: [
      { id: 'a', text: 'False False' },
      { id: 'b', text: 'False True' },
      { id: 'c', text: 'True True' },
      { id: 'd', text: 'True False' }
    ],
    correctOptionId: 'b',
    explanation: 'Lista VAZIA é falsy; lista com QUALQUER coisa dentro é truthy — mesmo `[0]` ou `[False]`. Os falsy do Python: None, False, 0, 0.0, "", [], {}, (), set(). Todo o resto é truthy. Por isso `if lista:` é o idiomático (não `if len(lista) > 0:`).'
  },

  // --- SQL ---
  {
    id: 'ex-output-15',
    title: 'COUNT com NULL',
    type: 'predict-output',
    language: 'SQL',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'Em `usuarios(id, email)` com 5 linhas, 2 com email NULL, o que `SELECT COUNT(email) FROM usuarios` retorna?',
    codeSnippet: `-- 5 linhas, 2 com email NULL
SELECT COUNT(email), COUNT(*) FROM usuarios;`,
    options: [
      { id: 'a', text: '5 e 5' },
      { id: 'b', text: '3 e 5' },
      { id: 'c', text: '5 e 3' },
      { id: 'd', text: '3 e 3' }
    ],
    correctOptionId: 'b',
    explanation: '`COUNT(coluna)` conta apenas NÃO-NULLs — 3 (ignora os 2 NULL). `COUNT(*)` conta TODAS as linhas — 5. Para "quantos têm email", use COUNT(email). Para "total de linhas", COUNT(*). Essa diferença gera relatórios errados com frequência. COUNT(1) equivale a COUNT(*).'
  },
  {
    id: 'ex-output-16',
    title: 'LEFT JOIN contando zero',
    type: 'predict-output',
    language: 'SQL',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'Clientes A e B; pedidos só de A (2 pedidos). O que `LEFT JOIN + COUNT(p.id)` retorna por cliente?',
    codeSnippet: `SELECT c.nome, COUNT(p.id) AS pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.nome;`,
    options: [
      { id: 'a', text: 'A: 2, B: 0' },
      { id: 'b', text: 'A: 2, B: 1' },
      { id: 'c', text: 'A: 2 (só)' },
      { id: 'd', text: 'A: 2, B: NULL' }
    ],
    correctOptionId: 'a',
    explanation: 'LEFT JOIN mantém B mesmo sem pedidos (gera uma linha com p.id = NULL). COUNT(p.id) conta não-nulls → 0 para B. Se usasse COUNT(*), B mostraria 1 (a linha com NULL conta!). Por isso: para contar registros relacionados com LEFT JOIN, use COUNT(coluna_da_direita), nunca COUNT(*).'
  },

  // --- C ---
  {
    id: 'ex-output-17',
    title: 'printf com %d em float',
    type: 'predict-output',
    language: 'C',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'O que será impresso (comportamento dependente da implementação, mas geralmente)?',
    codeSnippet: `printf("%d\\n", 3.14);`,
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '3.14' },
      { id: 'c', text: 'um valor lixo/inesperado' },
      { id: 'd', text: 'erro de compilação' }
    ],
    correctOptionId: 'c',
    explanation: '%d espera int, mas você passou double — comportamento indefinido. Geralmente imprime lixo (interpreta os bytes do double como int). Alguns compiladores modernos (gcc -Wall) avisam. Sempre confira o especificador com o tipo: %d→int, %f→double, %c→char, %s→char*. Usar errado não dá erro em C — e é bug dos difíceis.'
  },
  {
    id: 'ex-output-18',
    title: 'Pós vs pré-incremento',
    type: 'predict-output',
    language: 'C',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'O que será impresso?',
    codeSnippet: `int a = 5, b = 5;
printf("%d %d\\n", a++, ++b);
printf("%d %d\\n", a, b);`,
    options: [
      { id: 'a', text: '5 6 e 6 6' },
      { id: 'b', text: '6 6 e 6 6' },
      { id: 'c', text: '5 5 e 6 6' },
      { id: 'd', text: '5 6 e 5 5' }
    ],
    correctOptionId: 'a',
    explanation: 'a++ (pós) usa o valor (5) e depois incrementa. ++b (pré) incrementa primeiro (vira 6) e usa. Após: ambos são 6. Dica de clareza: evite misturar ++ em expressões grandes — `f(a++, ++b, a+b)` é comportamento indefinido em C (ordem de avaliação não garantida). Use em linhas separadas.'
  },

  // --- CSS ---
  {
    id: 'ex-output-19',
    title: 'Especificidade: inline vs classe',
    type: 'predict-output',
    language: 'CSS',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Para `<p class="x" style="color: red">` com `.x { color: blue !important; }`, qual cor vence?',
    codeSnippet: `<!-- HTML -->
<p class="x" style="color: red">Texto</p>

/* CSS */
.x { color: blue !important; }`,
    options: [
      { id: 'a', text: 'red (inline vence)' },
      { id: 'b', text: 'blue (!important vence de tudo)' },
      { id: 'c', text: 'preto (padrão do navegador)' },
      { id: 'd', text: 'nenhuma — erro' }
    ],
    correctOptionId: 'b',
    explanation: '!important vence até de estilos inline — é a "bomba nuclear" da cascata. Por isso evite: vira guerra de importants e o CSS fica ingovernável. Exceção aceita: overrides de bibliotecas de terceiros. Inline (1000 de especificidade) vence de ids/classes, mas perde para !important. Hierarquia: !important > inline > id > classe > tipo.'
  },

  // --- C# ---
  {
    id: 'ex-output-20',
    title: 'String vs string (igualdade)',
    type: 'predict-output',
    language: 'C#',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'O que `(new String("a".ToCharArray())) == "a"` retorna em C#?',
    codeSnippet: `string a = new string("a".ToCharArray());
string b = "a";
Console.WriteLine(a == b);`,
    options: [
      { id: 'a', text: 'true (== compara conteúdo em strings)' },
      { id: 'b', text: 'false (compara referência)' },
      { id: 'c', text: 'erro de compilação' },
      { id: 'd', text: 'null' }
    ],
    correctOptionId: 'a',
    explanation: 'Em C#, `==` entre strings foi sobrecarregado para comparar VALOR (não referência) — diferente de Java! Por isso a == b é true mesmo sendo objetos distintos. Para comparar referência (raro), use `object.ReferenceEquals(a, b)`. Para comparação cultural/ignorando caixa: `string.Equals(a, b, StringComparison.OrdinalIgnoreCase)`.'
  }
];
