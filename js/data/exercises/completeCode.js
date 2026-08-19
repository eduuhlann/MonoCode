// MonoCode — Exercícios "Complete o Código" (todas as linguagens)
// O usuário preenche a lacuna __BLANK__ com a palavra/token correto.

export const COMPLETE_CODE = [
  // --- originais (preservados) ---
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
    explanation: 'O método `filter()` itera sobre o array e retorna um NOVO array contendo apenas os elementos para os quais a callback retornou true. Não muta o original. É o equivalente a um loop com if + push, mas declarativo. Combinado com map e reduce, forma a trindade da programação funcional em JS.'
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
    explanation: 'A sintaxe da list comprehension é `[expressao for item in iteravel if condicao]` — leia como "expressão para cada item no iterável se condição". O `for` vincula a variável iteradora à coleção. O `if` é opcional (filtro). Comprehensions são mais rápidas que loops com append porque rodam em C dentro do interpretador.'
  },

  // --- novos: JavaScript ---
  {
    id: 'ex-complete-3',
    title: 'Método map: transformar elementos',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete para criar um array com cada número dobrado.',
    codeSnippet: `const nums = [1, 2, 3];
const dobrados = nums.__BLANK__(n => n * 2);
console.log(dobrados); // [2, 4, 6]`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'map',
    hints: ['O método que cria um novo array transformando cada item é o map.'],
    explanation: '`map()` aplica uma função a cada elemento e devolve um NOVO array do mesmo tamanho. Diferente de forEach (que só itera), map é para transformar. Use map quando quiser um array derivado; forEach quando quiser só causar efeitos. Nunca use map ignorando o retorno — é desperdício.'
  },
  {
    id: 'ex-complete-4',
    title: 'reduce: somar valores',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'Complete a chamada para somar todos os números do array.',
    codeSnippet: `const precos = [100, 200, 300];
const total = precos.__BLANK__((acc, v) => acc + v, 0);
console.log(total); // 600`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'reduce',
    hints: ['O método que acumula um único valor a partir de um array é o reduce. Não esqueça do valor inicial!'],
    explanation: '`reduce((acumulador, item) => novoAcc, valorInicial)` percorre o array acumulando em um único valor. SEMPRE passe o valor inicial (0 aqui) — sem ele, reduce usa o primeiro item, o que quebra com arrays vazios e confunde a leitura. reduce é o canivete suíço: soma, agrupa, achata, constrói objetos.'
  },
  {
    id: 'ex-complete-5',
    title: 'Optional chaining: acesso seguro',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Substitua o ponto por um operador que evite erro se `endereco` for undefined.',
    codeSnippet: `const usuario = {};
const cidade = usuario.endereco__BLANK__cidade;
console.log(cidade); // undefined (sem erro!)`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '?.',
    hints: ['Dois caracteres: interrogação + ponto. O "optional chaining".'],
    explanation: '`?.` (optional chaining) devolve undefined em vez de TypeError quando o lado esquerdo é null/undefined. Substitui o padrão `x && x.a && x.a.b`. Combine com `??` para padrão: `user?.addr?.city ?? "Desconhecida"`. Perfeito para dados de API que podem não ter todos os campos.'
  },
  {
    id: 'ex-complete-6',
    title: 'Spread operator em array',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Preencha para criar um novo array combinando `a` e `b` sem mutar nenhum.',
    codeSnippet: `const a = [1, 2];
const b = [3, 4];
const combinado = __BLANK__a, __BLANK__b];
console.log(combinado); // [1, 2, 3, 4]`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '...',
    hints: ['Três pontinhos. O mesmo operador serve para spread e rest.'],
    explanation: '`...` expande um iterável em elementos individuais. `[...a, ...b]` cria um novo array com todos os itens — sem tocar nos originais (imutabilidade). Também serve em chamadas: `Math.max(...nums)`, em objetos: `{ ...obj, nova: 1 }`, e como rest em parâmetros: `function(...args)`.'
  },
  {
    id: 'ex-complete-7',
    title: 'async/await: palavra-chave de espera',
    type: 'complete-code',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Complete para pausar a função até a promise resolver.',
    codeSnippet: `async function buscar() {
  const r = __BLANK__ fetch('/api');
  return r.json();
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'await',
    hints: ['A palavra-chave que pausa até a promise resolver. Só funciona em funções async.'],
    explanation: '`await` pausa a função async até a promise resolver, devolvendo o valor. Transforma código assíncrono em estilo síncrono legível. Só funciona dentro de `async`. Para paralelismo, combine com Promise.all: `const [a, b] = await Promise.all([fetchA(), fetchB()])` — muito mais rápido que await sequencial.'
  },

  // --- Python ---
  {
    id: 'ex-complete-8',
    title: 'Dicionário: adicionar/atualizar chave',
    type: 'complete-code',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete para adicionar a chave "email" com o valor dado.',
    codeSnippet: `usuario = {"nome": "Ana"}
usuario.__BLANK__ = "ana@x.dev"`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '["email"]',
    hints: ['Use colchetes com a chave como string para atribuir.'],
    explanation: 'Em Python, dicionários são mutáveis e atribuição por chave adiciona OU atualiza: `d["chave"] = valor`. Se a chave existe, atualiza; se não, cria. Para acessar com fallback use `d.get("chave", padrao)`. Para remover: `del d["chave"]` ou `d.pop("chave")`.'
  },
  {
    id: 'ex-complete-9',
    title: 'with open: fechamento automático',
    type: 'complete-code',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete a palavra-chave que garante o fechamento automático do arquivo.',
    codeSnippet: `__BLANK__ open("dados.txt", "r") as f:
    conteudo = f.read()`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'with',
    hints: ['A palavra-chave do context manager que libera recursos ao sair do bloco.'],
    explanation: '`with` chama __enter__ ao entrar e __exit__ ao sair do bloco — garantindo fclose mesmo com erro. É o equivalente Python ao try/finally mas idiomático. Use sempre para arquivos, locks, conexões. Sem with, você teria que lembrar de f.close() em todo caminho de saída — frágil.'
  },
  {
    id: 'ex-complete-10',
    title: 'try/except: captura em Python',
    type: 'complete-code',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete para capturar erro de divisão por zero.',
    codeSnippet: `try:
    r = 10 / 0
except __BLANK__:
    r = None`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'ZeroDivisionError',
    hints: ['O nome da exceção built-in para divisão por zero.'],
    explanation: 'Python tem exceções nomeadas — capture a específica, não Exception genérica. ZeroDivisionError, ValueError, TypeError, KeyError são comuns. Para ver o nome: `except Exception as e: print(type(e).__name__)`. Capturas específicas tornam o código robusto sem esconder bugs.'
  },

  // --- SQL ---
  {
    id: 'ex-complete-11',
    title: 'SELECT com WHERE',
    type: 'complete-code',
    language: 'SQL',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete a cláusula para trazer apenas produtos com preço maior que 100.',
    codeSnippet: `SELECT * FROM produtos
__BLANK__ preco > 100;`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'WHERE',
    hints: ['A cláusula que filtra linhas antes da projeção.'],
    explanation: '`WHERE` filtra LINHAS individuais antes de qualquer agregação. Rode antes do GROUP BY e HAVING. O SQL executa na ordem FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT — por isso WHERE não pode usar aliases do SELECT (ainda não existem nesta fase).'
  },
  {
    id: 'ex-complete-12',
    title: 'INNER JOIN: combinar tabelas',
    type: 'complete-code',
    language: 'SQL',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Complete a cláusula que liga pedidos a clientes pela chave estrangeira.',
    codeSnippet: `SELECT p.id, c.nome
FROM pedidos p
__BLANK__ clientes c ON p.cliente_id = c.id;`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'INNER JOIN',
    hints: ['O JOIN que só traz registros que casam nos dois lados.'],
    explanation: 'INNER JOIN cruza tabelas mantendo apenas as linhas onde a condição ON é satisfeita nos dois lados. Se um pedido tem cliente_id null ou inválido, ele some do resultado. Para manter TODOS os pedidos (mesmo sem cliente), use LEFT JOIN. INNER é o padrão quando você quer "registro que tem dono".'
  },
  {
    id: 'ex-complete-13',
    title: 'GROUP BY com agregação',
    type: 'complete-code',
    language: 'SQL',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Complete para agrupar vendas por categoria.',
    codeSnippet: `SELECT categoria, SUM(valor)
FROM vendas
__BLANK__ categoria;`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'GROUP BY',
    hints: ['A cláusula que cria grupos para agregar.'],
    explanation: '`GROUP BY` agrupa linhas com o mesmo valor da coluna em um único grupo, sobre o qual as agregações (SUM, COUNT, AVG) calculam. Regra: toda coluna no SELECT deve estar no GROUP BY ou dentro de uma agregação. Para filtrar grupos, use HAVING (não WHERE, que filtra antes de agrupar).'
  },

  // --- HTML ---
  {
    id: 'ex-complete-14',
    title: 'Link com target e rel',
    type: 'complete-code',
    language: 'HTML',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete o atributo que abre o link em nova aba com segurança.',
    codeSnippet: `<a href="https://exemplo.dev"
   target="_blank"
   __BLANK__="noopener noreferrer">
   Site externo
</a>`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'rel',
    hints: ['O atributo que descreve a relação do link com o destino.'],
    explanation: '`rel` define a relação. `noopener` impede que a nova aba tenha `window.opener` (segurança); `noreferrer` também esconde a origem (privacidade). Combinados com target="_blank" são obrigatórios por boa prática. Outros valores úteis: `nofollow` (SEO), `noopener`, `external`.'
  },
  {
    id: 'ex-complete-15',
    title: 'Label associada a input',
    type: 'complete-code',
    language: 'HTML',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete o atributo do label que aponta para o input pelo id.',
    codeSnippet: `<label __BLANK__="email">E-mail</label>
<input type="email" id="email" name="email">`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'for',
    hints: ['Atributo do label que aponta para o id do campo.'],
    explanation: '`for` no label aponta para o `id` do input — clicar no rótulo foca o campo (UX) e leitores de tela anunciam o nome correto. Sem isso, o input perde acessibilidade. Alternativa: aninhar o input dentro do label (`<label>Email <input></label>`), dispensa o for.'
  },

  // --- CSS ---
  {
    id: 'ex-complete-16',
    title: 'Centralizar com Flexbox',
    type: 'complete-code',
    language: 'CSS',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete a propriedade que centraliza no eixo principal (horizontal).',
    codeSnippet: `.container {
  display: flex;
  __BLANK__: center;
  align-items: center;
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'justify-content',
    hints: ['A propriedade que alinha no EIXO PRINCIPAL do flex.'],
    explanation: '`justify-content` alinha no eixo principal (definido por flex-direction — padrão row = horizontal). `align-items` alinha no eixo cruzado (vertical no row). Para centralizar totalmente: ambos `center` + altura definida. Confusão comum: quando muda para flex-direction: column, eles trocam de papel!'
  },
  {
    id: 'ex-complete-17',
    title: 'Media query mobile-first',
    type: 'complete-code',
    language: 'CSS',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Complete a media query para aplicar estilos a partir de 768px (tablet+).',
    codeSnippet: `/* base = mobile */
.card { padding: 1rem; }

__BLANK__ (min-width: 768px) {
  .card { padding: 2rem; }
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '@media',
    hints: ['A regra que aplica estilos condicionalmente ao viewport.'],
    explanation: '`@media (condição)` aplica estilos quando a condição é verdadeira. Mobile-first usa `min-width` (a partir de X px) — começa com o CSS mobile e adiciona complexidade para telas maiores. Desktop-first usaria max-width (até X px). min-width evita cascata de "desfazer" estilos desktop no mobile.'
  },

  // --- TypeScript ---
  {
    id: 'ex-complete-18',
    title: 'Interface com propriedade opcional',
    type: 'complete-code',
    language: 'TypeScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete o modificador que torna `bio` opcional.',
    codeSnippet: `interface Usuario {
  nome: string;
  bio__BLANK__ string;
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '?:',
    hints: ['Dois caracteres: interrogação + dois-pontos.'],
    explanation: '`?:` marca uma propriedade como opcional — ela pode estar ausente (vira `T | undefined`). Sem isso, o TS exige a propriedade ao criar o objeto. Para acessar com segurança, use optional chaining: `user.bio?.toUpperCase()`. Oposto: `Required<T>` torna tudo obrigatório.'
  },
  {
    id: 'ex-complete-19',
    title: 'Generic com constraint',
    type: 'complete-code',
    language: 'TypeScript',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'Complete para exigir que T tenha a propriedade `length`.',
    codeSnippet: `function maior<T __BLANK__ { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'extends',
    hints: ['A palavra-chave que define uma constraint em generics.'],
    explanation: '`<T extends X>` exige que T satisfaça X — agora o TS sabe que T tem `.length`. Aceita strings, arrays, mas não number. Generics sem constraint aceitam any (perde checagem). Constraints são o que tornam generics úteis: reusabilidade COM tipagem segura.'
  },

  // --- C ---
  {
    id: 'ex-complete-20',
    title: 'printf com especificador de int',
    type: 'complete-code',
    language: 'C',
    difficulty: 'Iniciante',
    xp: 15,
    prompt: 'Complete o especificador para imprimir um inteiro.',
    codeSnippet: `int idade = 25;
printf("Idade: __BLANK__\\n", idade);`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '%d',
    hints: ['O especificador de inteiros é uma letra depois de %.'],
    explanation: '`%d` (ou `%i`) formata int. `%f` para float/double, `%c` para char, `%s` para string, `%x` para hexadecimal, `%p` para ponteiro. Erro comum: usar `%d` para float (compila, imprime lixo). Sempre confira o tipo. Para largura: `%5d` (5 casas), `%.2f` (2 decimais).'
  },
  {
    id: 'ex-complete-21',
    title: 'Endereço de variável (ponteiro)',
    type: 'complete-code',
    language: 'C',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete o operador que pega o endereço de `x` para passar a scanf.',
    codeSnippet: `int x;
scanf("%d", __BLANK__x);`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '&',
    hints: ['Um único caractere: o "endereço de".'],
    explanation: '`&` (address-of) devolve o endereço na memória da variável. scanf PRECISA do endereço para poder escrever nele. Exceção: strings (arrays de char) já são ponteiros, então `scanf("%s", nome)` sem &. Esquecer o & é o bug nº 1 de iniciantes em C — geralmente crasha.'
  },

  // --- C++ ---
  {
    id: 'ex-complete-22',
    title: 'std::vector: adicionar no fim',
    type: 'complete-code',
    language: 'C++',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete o método que adiciona um elemento ao final do vector.',
    codeSnippet: `std::vector<int> v;
v.__BLANK__(42);`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'push_back',
    hints: ['O método clássico de adicionar ao fim do vector (em C++23 há push_range / append_range).'],
    explanation: '`push_back()` adiciona no fim — O(1) amortizado. Se você sabe o tamanho final, `reserve(n)` antes do loop elimina realocações. Em C++20+, `emplace_back(args...)` constrói in-place (evita cópia). `pop_back()` remove do fim. Para inserir no meio: `insert(iterator, valor)` (O(n)).'
  },
  {
    id: 'ex-complete-23',
    title: 'Ponteiro inteligente: criação',
    type: 'complete-code',
    language: 'C++',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'Complete a função que cria um unique_ptr com RAII.',
    codeSnippet: `#include <memory>
auto p = std::__BLANK__<Animal>(new Cachorro("Rex"));`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'unique_ptr',
    hints: ['O smart pointer de posse exclusiva. Prefira make_unique em código moderno.'],
    explanation: '`std::unique_ptr<T>` gerencia posse única — libera no destrutor (RAII). Em C++14+, prefira `std::make_unique<T>(args)` (mais seguro contra vazamentos de exceção). unique_ptr não copia, só move: `auto p2 = std::move(p)`. Use por padrão; shared_ptr só quando precisar compartilhar.'
  },

  // --- C# ---
  {
    id: 'ex-complete-24',
    title: 'Interpolação de string',
    type: 'complete-code',
    language: 'C#',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Complete o prefixo que habilita interpolação de variáveis na string.',
    codeSnippet: `string nome = "Ana";
Console.WriteLine(__BLANK__"Olá, {nome}!");`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: '$',
    hints: ['Um caractere antes das aspas.'],
    explanation: '`$"texto {variavel}"` é interpolação — legível e type-safe. Equivale a `string.Format` mas mais claro. Para alinhamento/formatatação: `$"{valor,8:N2}"`. Em C# 10+, constante string interpolation também funciona. Sempre prefira interpolação a concatenação com +.'
  },
  {
    id: 'ex-complete-25',
    title: 'LINQ: Where com lambda',
    type: 'complete-code',
    language: 'C#',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete o método LINQ que filtra a coleção.',
    codeSnippet: `var pares = numeros.__BLANK__(n => n % 2 == 0);`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'Where',
    hints: ['O equivalente LINQ ao filter do JS/Python.'],
    explanation: '`Where(predicate)` filtra mantendo quem satisfaz. É lazy: a consulta só roda ao iterar (ou ao `.ToList()`). Em EF Core, o mesmo LINQ vira SQL — o filtro vai para o banco, não para a memória. Combinado com Select, OrderBy, FirstOrDefault forma consultas poderosas.'
  },

  // --- React Native ---
  {
    id: 'ex-complete-26',
    title: 'useState: hook de estado',
    type: 'complete-code',
    language: 'React Native',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Complete o hook que cria estado local no componente.',
    codeSnippet: `import { __BLANK__ } from "react";

function Contador() {
  const [n, setN] = __BLANK__(0);
  return <Text>{n}</Text>;
}`,
    blankPlaceholder: '__BLANK__',
    correctAnswer: 'useState',
    hints: ['O hook mais básico para estado local.'],
    explanation: '`useState(initial)` devolve `[valor, setValor]`. Ao chamar setValor, o React re-renderiza com o novo estado. Para atualizar baseado no anterior: `setN(n => n + 1)` (forma funcional, segura em lotes). Estado é assíncrono: não dependa do valor atualizado na mesma chamada.'
  }
];
