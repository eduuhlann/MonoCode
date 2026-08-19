// MonoCode — Exercícios de Múltipla Escolha (todas as linguagens)
// Cada exercício traz uma explicação didática detalhada após a resposta.

export const MULTIPLE_CHOICE = [
  // --- originais (preservados) ---
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
    explanation: 'O `===` (strict equality) verifica valor E tipo sem conversão. O `==` (loose equality) aplica coerção: `5 == "5"` é true porque "5" vira número. Regra prática: use sempre `===` — ele elimina uma classe inteira de bugs sutis. A única exceção histórica é `null == undefined` (true), que às vezes é conveniente.'
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
    explanation: 'Em Rust, segurança é prioridade: `let x = 5;` cria uma variável imutável. Para mutar, declare `let mut x = 5;`. Isso força o programador a ser explícito sobre intenção de mutação — menos efeitos colaterais surpresa, mais código paralelizável com confiança.'
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
    explanation: 'A ordem de execução do SQL explica: WHERE filtra LINHAS antes do GROUP BY; HAVING filtra GRUPOS depois de agregados. Por isso HAVING aceita funções agregadas (`HAVING SUM(valor) > 1000`) e WHERE não. Use WHERE para reduzir o conjunto antes de agregar (mais rápido) e HAVING para filtrar o resultado agregado.'
  },

  // --- novos: JavaScript ---
  {
    id: 'ex-mc-4',
    title: 'Tipos primitivos em JavaScript',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Qual destes NÃO é um tipo primitivo do JavaScript?',
    options: [
      { id: 'a', text: 'symbol' },
      { id: 'b', text: 'bigint' },
      { id: 'c', text: 'array' },
      { id: 'd', text: 'undefined' }
    ],
    correctOptionId: 'c',
    explanation: 'Os 7 primitivos são: string, number, boolean, null, undefined, symbol e bigint. `array` e `object` são tipos estruturados (derivados de Object), não primitivos. Arrays são objetos especiais com propriedade `length` e índices numéricos. Confirma com `typeof []` → "object".'
  },
  {
    id: 'ex-mc-5',
    title: 'typeof null: a pegadinha histórica',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'O que `typeof null` retorna em JavaScript?',
    options: [
      { id: 'a', text: '"null"' },
      { id: 'b', text: '"undefined"' },
      { id: 'c', text: '"object"' },
      { id: 'd', text: 'ReferenceError' }
    ],
    correctOptionId: 'c',
    explanation: '`typeof null === "object"` — um bug histórico de 1995 (os primeiros 3 bits de null em memória eram a marca de objeto). A linguagem nunca corrigiu por questão de compatibilidade. Para testar null de verdade, use `valor === null`. Para distinguir "realmente null" de undefined: `=== null` ou `== null` (que cobre ambos).'
  },
  {
    id: 'ex-mc-6',
    title: 'let vs const vs var',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Qual afirmação sobre declarações em JavaScript moderno está CORRETA?',
    options: [
      { id: 'a', text: '`const` impede reatribuição E mutação do objeto referenciado.' },
      { id: 'b', text: '`let` tem escopo de bloco; `var` tem escopo de função e é içada (hoisting).' },
      { id: 'c', text: '`var` é a forma recomendada em código ES6+.' },
      { id: 'd', text: '`const` declarada sem valor cria uma variável undefined reatribuível.' }
    ],
    correctOptionId: 'b',
    explanation: '`let` e `const` têm escopo de bloco (não "vazam" do if/for). `var` tem escopo de função e sofre hoisting (é elevada ao topo, gerando bugs clássicos). Sobre const: ela impede REATRIBUIÇÃO (`x = ...` falha), mas NÃO mutação — `const obj = {}; obj.nome = "Ana"` funciona. Use const por padrão, let quando precisar reatribuir, nunca var.'
  },
  {
    id: 'ex-mc-7',
    title: 'Closures: o que uma função interna "lembra"?',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'O que caracteriza uma closure em JavaScript?',
    options: [
      { id: 'a', text: 'Uma função que se chama recursivamente até um limite.' },
      { id: 'b', text: 'Uma função que mantém acesso às variáveis do escopo onde foi criada, mesmo após esse escopo ter terminado.' },
      { id: 'c', text: 'Uma função passada como argumento para outra função.' },
      { id: 'd', text: 'Uma função anônima atribuída a uma variável.' }
    ],
    correctOptionId: 'b',
    explanation: 'Closure é a combinação de função + escopo léxico onde foi definida. Exemplo clássico: `function contador() { let n = 0; return () => ++n; }` — a função interna continua acessando `n` depois que `contador()` retornou. É a base de dados privados, fábricas de funções, hooks do React e do padrão Module.'
  },
  {
    id: 'ex-mc-8',
    title: 'Arrow functions e o `this`',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Qual a diferença fundamental do `this` em arrow functions comparado a funções comuns?',
    options: [
      { id: 'a', text: 'Arrow functions não têm `this` — usar a palavra gera erro.' },
      { id: 'b', text: 'Arrow functions herdam o `this` do escopo onde foram escritas (lexical this); funções comuns têm `this` determinado pela chamada.' },
      { id: 'c', text: 'Arrow functions sempre têm `this` igual ao objeto global `window`.' },
      { id: 'd', text: 'Funções comuns e arrow functions têm comportamento idêntico de `this`.' }
    ],
    correctOptionId: 'b',
    explanation: 'Arrow functions NÃO têm `this` próprio — elas capturam o `this` do escopo envolvente (lexical). Isso resolve o bug clássico de callbacks dentro de métodos que perdiam o `this`. Por outro lado, arrow functions NÃO servem como métodos de objeto quando você quer `this` = instância, nem como construtores (sem `new`).'
  },
  {
    id: 'ex-mc-9',
    title: 'Métodos de array que NÃO mutam',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Qual destes métodos NÃO altera o array original (é imutável)?',
    options: [
      { id: 'a', text: '`push()`' },
      { id: 'b', text: '`splice()`' },
      { id: 'c', text: '`sort()`' },
      { id: 'd', text: '`map()`' }
    ],
    correctOptionId: 'd',
    explanation: '`map`, `filter`, `slice`, `concat`, `flat` retornam um NOVO array sem tocar no original. `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse` MUTAM o original. Em React e em código concorrente, mutação é problemática — prefira sempre criar versões novas (`[...arr, item]` em vez de `arr.push(item)`).'
  },
  {
    id: 'ex-mc-10',
    title: 'Promise: estados possíveis',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Uma Promise em JavaScript pode estar em quais estados?',
    options: [
      { id: 'a', text: 'running, paused, stopped' },
      { id: 'b', text: 'pending, fulfilled, rejected' },
      { id: 'c', text: 'open, closed, error' },
      { id: 'd', text: 'created, processing, done' }
    ],
    correctOptionId: 'b',
    explanation: 'Uma Promise começa em `pending` (em andamento). Quando resolve, vai para `fulfilled` (e dispara `.then`). Quando rejeita, vai para `rejected` (e dispara `.catch`). Uma vez fulfilled ou rejected, é IMUTÁVEL — nunca muda de estado. `finally` roda em ambos os casos terminais.'
  },
  {
    id: 'ex-mc-11',
    title: 'Event Loop: setTimeout(fn, 0)',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'O que acontece com `setTimeout(() => console.log("A"), 0); console.log("B");` ?',
    options: [
      { id: 'a', text: 'Imprime "A" depois "B".' },
      { id: 'b', text: 'Imprime "B" depois "A".' },
      { id: 'c', text: 'Imprime os dois ao mesmo tempo.' },
      { id: 'd', text: 'Gera um erro de sintaxe.' }
    ],
    correctOptionId: 'b',
    explanation: 'Mesmo com 0ms, setTimeout é uma MACROTAREFA e vai para a fila — só roda depois que a call stack esvazia. `console.log("B")` é síncrono e executa imediatamente. Por isso "B" sai primeiro. Entender o event loop explica por que promises (microtasks) resolvem antes de timeouts (macrotasks) e por que loops infinitos travam a página.'
  },
  {
    id: 'ex-mc-12',
    title: 'Optional chaining (?.) vs acesso direto',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'O que `usuario?.endereco?.cidade` retorna se `usuario` for `undefined`?',
    options: [
      { id: 'a', text: 'undefined (sem lançar erro)' },
      { id: 'b', text: 'null' },
      { id: 'c', text: 'TypeError: Cannot read properties of undefined' },
      { id: 'd', text: 'uma string vazia ""' }
    ],
    correctOptionId: 'a',
    explanation: 'O optional chaining `?.` curto-circuita: se o lado esquerdo for null/undefined, a expressão toda avalia para `undefined` — sem erro. Substitui o antigo `usuario && usuario.endereco && usuario.endereco.cidade`. Combine com `??` para padrão: `usuario?.endereco?.cidade ?? "Desconhecida"`.'
  },
  {
    id: 'ex-mc-13',
    title: 'Storage no navegador: o que guardar',
    type: 'multiple-choice',
    language: 'JavaScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Qual destes dados NUNCA deve ser guardado em localStorage?',
    options: [
      { id: 'a', text: 'Preferência de tema (dark/light).' },
      { id: 'b', text: 'Token JWT de autenticação sensível.' },
      { id: 'c', text: 'Rascunho de formulário não enviado.' },
      { id: 'd', text: 'Histórico de busca recente.' }
    ],
    correctOptionId: 'b',
    explanation: 'localStorage é acessível por qualquer JavaScript da página — inclusive scripts de terceiros (analytics, ads). Se houver XSS, o atacante rouba o token. Tokens sensíveis pertencem a cookies httpOnly (não acessíveis por JS e enviados automaticamente). localStorage é ótimo para preferências e estado de UI, nunca para segredos.'
  },

  // --- Python ---
  {
    id: 'ex-mc-14',
    title: 'Listas vs Tuplas em Python',
    type: 'multiple-choice',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Qual a principal diferença entre listas e tuplas em Python?',
    options: [
      { id: 'a', text: 'Listas aceitam só números; tuplas aceitam qualquer tipo.' },
      { id: 'b', text: 'Listas são mutáveis; tuplas são imutáveis.' },
      { id: 'c', text: 'Tuplas são ordenadas; listas não.' },
      { id: 'd', text: 'Não há diferença — são sinônimos.' }
    ],
    correctOptionId: 'b',
    explanation: 'Listas (`[1, 2, 3]`) são mutáveis: você pode append, remove, sort. Tuplas (`(1, 2, 3)`) são imutáveis — depois de criadas, não mudam. Use tuplas para dados fixos (coordenadas, dias da semana, retornos múltiplos) e quando a imutabilidade é uma garantia útil. Tuplas também são mais leves e rápidas que listas.'
  },
  {
    id: 'ex-mc-15',
    title: 'List comprehension vs loop',
    type: 'multiple-choice',
    language: 'Python',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'O que a expressão `[x*2 for x in range(5) if x % 2 == 0]` produz?',
    options: [
      { id: 'a', text: '[0, 2, 4, 6, 8]' },
      { id: 'b', text: '[0, 4, 8]' },
      { id: 'c', text: '[2, 4, 6, 8]' },
      { id: 'd', text: '[0, 4]' }
    ],
    correctOptionId: 'b',
    explanation: 'A comprehension ita de 0 a 4, FILTRA só os pares (0, 2, 4) e dobra cada um: [0, 4, 8]. A sintaxe é `[expressao for item in iteravel if condicao]` — leia como "expressão para cada item na coleção se condição". É mais rápida e legível que um loop com append, mas evite aninhar mais de 2 níveis.'
  },
  {
    id: 'ex-mc-16',
    title: 'args e kwargs',
    type: 'multiple-choice',
    language: 'Python',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'O que `def fn(*args, **kwargs)` significa?',
    options: [
      { id: 'a', text: 'args é uma lista; kwargs é uma lista de strings.' },
      { id: 'b', text: 'args vira uma TUPLA com os argumentos posicionais; kwargs vira um DICT com os nomeados.' },
      { id: 'c', text: 'A função só aceita argumentos nomeados "args" e "kwargs".' },
      { id: 'd', text: 'A função não aceita argumentos.' }
    ],
    correctOptionId: 'b',
    explanation: '`*args` agrupa argumentos posicionais em uma tupla; `**kwargs` agrupa argumentos nomeados em um dicionário. O nome é convenção (poderia ser `*nums` ou `**opts`). Útil para wrappers que repassam argumentos: `def log(fn, *args, **kwargs): return fn(*args, **kwargs)`.'
  },
  {
    id: 'ex-mc-17',
    title: 'Gerenciamento de memória: Garbage Collector',
    type: 'multiple-choice',
    language: 'Python',
    difficulty: 'Avançado',
    xp: 35,
    prompt: 'Como o Python decide quando liberar a memória de um objeto?',
    options: [
      { id: 'a', text: 'Manualmente, com `free()` como em C.' },
      { id: 'b', text: 'Por contagem de referências — quando nenhuma variável aponta para o objeto, ele é liberado (mais um GC ciclíco para referências cruzadas).' },
      { id: 'c', text: 'A cada final de função, tudo é liberado.' },
      { id: 'd', text: 'Somente quando o programa termina.' }
    ],
    correctOptionId: 'b',
    explanation: 'Python usa reference counting: cada objeto tem um contador de quantas referências apontam para ele; ao chegar a zero, é liberado imediatamente. Para ciclos (A→B→A), o `gc` module roda um coletor extra periodicamente. Por isso `del x` não libera necessariamente — só decrementa a contagem.'
  },
  {
    id: 'ex-mc-18',
    title: 'Decoradores: o que fazem',
    type: 'multiple-choice',
    language: 'Python',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'Um decorador em Python é:',
    options: [
      { id: 'a', text: 'Uma função que recebe outra função e devolve uma versão modificada dela, sem mudar a original.' },
      { id: 'b', text: 'Um tipo especial de classe abstrata.' },
      { id: 'c', text: 'Um comentário formatado para documentação.' },
      { id: 'd', text: 'Um operador de comparação entre objetos.' }
    ],
    correctOptionId: 'a',
    explanation: 'Decorador é uma função que "embrulha" outra, adicionando comportamento. `@meu_decorador` em cima de `def fn()` equivale a `fn = meu_decorador(fn)`. Usado para caching (`@functools.lru_cache`), roteamento web (`@app.route`), testes (`@pytest.mark`), controle de acesso, logging. O decorator recebe a função original e devolve uma versão turbinada.'
  },

  // --- TypeScript ---
  {
    id: 'ex-mc-19',
    title: 'interface vs type',
    type: 'multiple-choice',
    language: 'TypeScript',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Qual afirmação sobre `interface` e `type` no TypeScript está CORRETA?',
    options: [
      { id: 'a', text: 'São idênticos — apenas aliases diferentes.' },
      { id: 'b', text: '`interface` é melhor para formas de objeto e suporta declaração múltipla (merge); `type` aceita uniões, interseções e primitivos.' },
      { id: 'c', text: '`type` é obsoleto e não deve ser usado.' },
      { id: 'd', text: '`interface` só funciona com classes.' }
    ],
    correctOptionId: 'b',
    explanation: 'Para modelar objetos, interface é o padrão (mais extensível com `extends`, permite merge). Para uniões (`type Status = "a" | "b"`), apelidos de primitivos (`type ID = string | number`) e tipos computados, `type` é a ferramenta. Na prática: interface para "forma de objeto/contrato", type para "qualquer outra coisa".'
  },
  {
    id: 'ex-mc-20',
    title: 'Generics: o que `<T>` significa',
    type: 'multiple-choice',
    language: 'TypeScript',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'O que `function primeiro<T>(arr: T[]): T` declara?',
    options: [
      { id: 'a', text: 'Uma função que só funciona com o tipo T pré-definido.' },
      { id: 'b', text: 'Uma função genérica: T é uma "variável de tipo" que pode ser qualquer coisa, mas o retorno será do mesmo tipo dos elementos do array.' },
      { id: 'c', text: 'Uma função que retorna sempre `any`.' },
      { id: 'd', text: 'Uma função assíncrona.' }
    ],
    correctOptionId: 'b',
    explanation: 'Generics são "parâmetros de tipo". `primeiro(["Ana"])` devolve `string`; `primeiro([1, 2])` devolve `number`. O mesmo T que entra (array de T) sai (retorno T) — preserva a informação de tipo. Sem generics, teríamos que usar `any` e perderíamos a checagem. Constraints (`<T extends { length: number }>`) limitam quais T são aceitos.'
  },
  {
    id: 'ex-mc-21',
    title: 'any vs unknown',
    type: 'multiple-choice',
    language: 'TypeScript',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Por que `unknown` é considerado mais seguro que `any`?',
    options: [
      { id: 'a', text: 'unknown desliga a checagem de tipos completamente, como any.' },
      { id: 'b', text: 'any permite usar o valor diretamente; unknown FORÇA verificar o tipo antes de usar (narrowing).' },
      { id: 'c', text: 'unknown é mais rápido em runtime.' },
      { id: 'd', text: 'any é deprecated em TS 5.' }
    ],
    correctOptionId: 'b',
    explanation: '`any` desliga a checagem — você pode fazer `dado.foo.bar()` sem reclamação, e o bug explode em runtime. `unknown` diz "sei que não sei o tipo" e te obriga a estreitar: `if (typeof dado === "string") dado.toUpperCase()`. Use unknown ao receber dados externos (JSON.parse, API), e force o consumidor a validar.'
  },
  {
    id: 'ex-mc-22',
    title: 'Utility type: Partial',
    type: 'multiple-choice',
    language: 'TypeScript',
    difficulty: 'Avançado',
    xp: 35,
    prompt: 'O que `Partial<Usuario>` produz, dado `interface Usuario { id, nome, email }`?',
    options: [
      { id: 'a', text: 'Um tipo com apenas a propriedade id.' },
      { id: 'b', text: 'Um tipo onde TODAS as propriedades se tornam opcionais (`id?, nome?, email?`).' },
      { id: 'c', text: 'Um array de Usuario.' },
      { id: 'd', text: 'Um tipo readonly.' }
    ],
    correctOptionId: 'b',
    explanation: 'Partial<T> torna cada propriedade opcional — ideal para updates PATCH onde você manda só alguns campos: `atualizar(id, campos: Partial<Usuario>)`. Outros úteis: `Pick<T, "nome"|"email">` (só algumas), `Omit<T, "senha">` (exclui), `Readonly<T>` (congela), `Record<K, V>` (dicionário).'
  },

  // --- HTML ---
  {
    id: 'ex-mc-23',
    title: 'Atributo alt em imagens',
    type: 'multiple-choice',
    language: 'HTML',
    difficulty: 'Iniciante',
    xp: 20,
    prompt: 'Por que toda tag `<img>` deve ter o atributo `alt`?',
    options: [
      { id: 'a', text: 'É obrigatório para a imagem carregar mais rápido.' },
      { id: 'b', text: 'Descreve a imagem para leitores de tela (acessibilidade) e aparece se a imagem falhar; ajuda também no SEO.' },
      { id: 'c', text: 'Define o tamanho da imagem.' },
      { id: 'd', text: 'É só decoração — sem função real.' }
    ],
    correctOptionId: 'b',
    explanation: 'alt é o texto alternativo: leitores de tela o leem para usuários cegos, navegadores o mostram quando a imagem não carrega, e buscadores o usam para entender a imagem. Para imagens puramente decorativas, use `alt=""` (vazio) — sinaliza "ignore" em vez de "esqueci".'
  },
  {
    id: 'ex-mc-24',
    title: 'Tags semânticas vs div',
    type: 'multiple-choice',
    language: 'HTML',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Por que preferir `<header>`, `<main>`, `<article>` a `<div class="header">`?',
    options: [
      { id: 'a', text: 'Tags semânticas carregam mais rápido.' },
      { id: 'b', text: 'Dão significado ao conteúdo: leitores de tela navegam por elas, buscadores entendem a estrutura, código fica autodocumentado.' },
      { id: 'c', text: 'Tags semânticas são obrigatórias — div não é mais HTML válido.' },
      { id: 'd', text: 'Permitem usar CSS, enquanto div não.' }
    ],
    correctOptionId: 'b',
    explanation: 'Semântica é sobre significado. Um leitor de tela pode pular direto para `<main>`, um buscador entende que `<article>` é conteúdo principal e `<nav>` é navegação. Div-sopa (tudo `<div>`) funciona visualmente, mas é opaco para máquinas. Regra: use o elemento mais específico que faça sentido; div só quando nenhum semântico couber.'
  },
  {
    id: 'ex-mc-25',
    title: 'target="_blank" e segurança',
    type: 'multiple-choice',
    language: 'HTML',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Ao usar `<a target="_blank">`, qual atributo é OBRIGATÓRIO por segurança?',
    options: [
      { id: 'a', text: '`rel="noopener noreferrer"`' },
      { id: 'b', text: '`href="external"`' },
      { id: 'c', text: '`type="external"`' },
      { id: 'd', text: '`secure="true"`' }
    ],
    correctOptionId: 'a',
    explanation: 'Sem `rel="noopener"`, a página aberta em nova aba recebe `window.opener` — referência à sua aba que pode ser manipulada (substituir a página por phishing). `noreferrer` também impede que o site de destino saiba de onde você veio (privacidade). Browsers modernos aplicam noopener por padrão, mas explicitar é boa prática.'
  },

  // --- CSS ---
  {
    id: 'ex-mc-26',
    title: 'Especificidade: quem vence?',
    type: 'multiple-choice',
    language: 'CSS',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Entre `#titulo { color: white; }` (id) e `h1.titulo { color: gray; }` (tipo+classe), qual cor vence?',
    options: [
      { id: 'a', text: 'white — id tem maior especificidade (100) que tipo+classe (11).' },
      { id: 'b', text: 'gray — classes sempre vencem ids.' },
      { id: 'c', text: 'Depende da ordem no arquivo.' },
      { id: 'd', text: 'Nenhuma — o navegador aplica o padrão.' }
    ],
    correctOptionId: 'a',
    explanation: 'Especificidade se calcula (ids, classes, elementos): `#titulo` = (1,0,0)=100; `h1.titulo` = (0,1,1)=11. Maior vence, independente da ordem. Por isso IDs são problemáticos — difícil de sobrescrever sem outro id ou !important. Prefira classes (especificidade baixa e previsível).'
  },
  {
    id: 'ex-mc-27',
    title: 'box-sizing: border-box',
    type: 'multiple-choice',
    language: 'CSS',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'O que `box-sizing: border-box` faz?',
    options: [
      { id: 'a', text: 'Inclui padding e border DENTRO da largura declarada — width: 300px é de verdade 300px.' },
      { id: 'b', text: 'Remove bordas do elemento.' },
      { id: 'c', text: 'Faz o elemento ocupar a largura do pai.' },
      { id: 'd', text: 'Centraliza o elemento horizontalmente.' }
    ],
    correctOptionId: 'a',
    explanation: 'Por padrão (content-box), width é só do conteúdo — adicionar padding/border AUMENTA o tamanho final, quebrando layouts. border-box inclui padding e border na largura: `width: 300px` é exatamente 300px. Por isso quase todo CSS reset começa com `*, *::before, *::after { box-sizing: border-box; }`.'
  },
  {
    id: 'ex-mc-28',
    title: 'Flexbox vs Grid',
    type: 'multiple-choice',
    language: 'CSS',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Quando preferir CSS Grid em vez de Flexbox?',
    options: [
      { id: 'a', text: 'Sempre — Grid substituiu Flexbox.' },
      { id: 'b', text: 'Quando o layout precisa de controle em DUAS dimensões (linhas e colunas simultaneamente).' },
      { id: 'c', text: 'Para animações.' },
      { id: 'd', text: 'Para alinhar texto dentro de um parágrafo.' }
    ],
    correctOptionId: 'b',
    explanation: 'Flexbox é unidimensional (linha OU coluna) — perfeito para menus, toolbars, barras, centralização. Grid é bidimensional (linhas E colunas) — ideal para o esqueleto da página, galerias, dashboards. Na prática: Grid no layout geral, Flex nos componentes internos. Use os dois juntos.'
  },

  // --- C ---
  {
    id: 'ex-mc-29',
    title: 'Ponteiros em C: o que é `int *p`?',
    type: 'multiple-choice',
    language: 'C',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'O que a declaração `int *p;` cria?',
    options: [
      { id: 'a', text: 'Uma variável que guarda um inteiro.' },
      { id: 'b', text: 'Uma variável que guarda o ENDEREÇO de memória de um inteiro.' },
      { id: 'c', text: 'Um array de inteiros.' },
      { id: 'd', text: 'Uma constante inteira.' }
    ],
    correctOptionId: 'b',
    explanation: 'Um ponteiro guarda um endereço. `int *p = &x` faz p apontar para x — p contém o endereço onde x vive na memória. `*p` (dereferência) acessa o valor nesse endereço. `&x` (endereço de) pega o endereço de x. Ponteiros são o superpoder do C: acesso direto à memória, com grande poder e grande responsabilidade.'
  },
  {
    id: 'ex-mc-30',
    title: 'Strings em C: o terminador',
    type: 'multiple-choice',
    language: 'C',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Em C, como uma string sabe onde termina?',
    options: [
      { id: 'a', text: 'O compilador guarda o tamanho em um campo oculto.' },
      { id: 'b', text: 'Toda string é terminada pelo caractere nulo `\\0` (byte zero).' },
      { id: 'c', text: 'Strings guardam o tamanho no primeiro byte.' },
      { id: 'd', text: 'Com um ponto-e-vírgula especial.' }
    ],
    correctOptionId: 'b',
    explanation: 'Strings em C são arrays de char terminados por `\\0`. `"Ana"` ocupa 4 bytes: A, n, a, \\0. strlen percorre até achar \\0 (não conta). Esquecer o \\0 gera bugs bizarros (leitura além do fim, crash). Por isso sempre reserve +1 byte: `char nome[4]` para "Ana". fgets garante o \\0; gets (removida) não.'
  },
  {
    id: 'ex-mc-31',
    title: 'malloc sem free: o que acontece?',
    type: 'multiple-choice',
    language: 'C',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Se você chama `malloc` mas nunca `free`, qual a consequência?',
    options: [
      { id: 'a', text: 'Erro de compilação.' },
      { id: 'b', text: 'Memory leak — a memória fica ocupada até o programa terminar; em longos processos, o consumo cresce até acabar a RAM.' },
      { id: 'c', text: 'A memória é liberada automaticamente ao final da função.' },
      { id: 'd', text: 'Segfault imediato.' }
    ],
    correctOptionId: 'b',
    explanation: 'C não tem coleta de lixo. Cada malloc precisa de um free correspondente. Esquecer = memory leak (vazamento). Em servidores que rodam dias/semanas, leaks acumulam até o processo cair por falta de memória. Ferramentas como Valgrind e AddressSanitizer detectam leaks. Regra: quem aloca libera.'
  },

  // --- C++ ---
  {
    id: 'ex-mc-32',
    title: 'RAII em C++',
    type: 'multiple-choice',
    language: 'C++',
    difficulty: 'Avançado',
    xp: 40,
    prompt: 'O que o princípio RAII garante em C++?',
    options: [
      { id: 'a', text: 'Que toda memória seja alocada no heap.' },
      { id: 'b', text: 'Recursos (memória, arquivos, locks) são adquiridos no construtor e liberados no destrutor — sempre, mesmo com exceções ou return prematuro.' },
      { id: 'c', text: 'Que classes não tenham destrutores.' },
      { id: 'd', text: 'Que objetos sejam sempre alocados com new.' }
    ],
    correctOptionId: 'b',
    explanation: 'RAII (Resource Acquisition Is Initialization) amarra a vida do recurso à vida do objeto. Como o destrutor SEMPRE roda ao sair do escopo (mesmo via throw), o recurso é liberado automaticamente. É por isso que std::vector, std::lock_guard, std::fstream, std::unique_ptr tornam C++ moderno seguro — quase nunca você escreve delete ou fclose.'
  },
  {
    id: 'ex-mc-33',
    title: 'unique_ptr vs shared_ptr',
    type: 'multiple-choice',
    language: 'C++',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'Qual a diferença entre `std::unique_ptr` e `std::shared_ptr`?',
    options: [
      { id: 'a', text: 'unique_ptr é para arrays; shared_ptr para objetos únicos.' },
      { id: 'b', text: 'unique_ptr tem posse EXCLUSIVA (não copiável, só movível); shared_ptr compartilha posse via contador de referências.' },
      { id: 'c', text: 'shared_ptr é mais rápido que unique_ptr.' },
      { id: 'd', text: 'São sinônimos — escolha por gosto.' }
    ],
    correctOptionId: 'b',
    explanation: 'unique_ptr: um dono só. Leve, zero overhead. Quando sai de escopo, libera. shared_ptr: vários ponteiros podem apontar pro mesmo objeto; um contador interno registra quantos — ao chegar a zero, libera. Use unique_ptr por padrão (mais eficiente, mais claro); shared_ptr só quando a posse é genuinamente compartilhada (grafos, caches).'
  },

  // --- C# ---
  {
    id: 'ex-mc-34',
    title: 'async/await: por que não usar `async void`?',
    type: 'multiple-choice',
    language: 'C#',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'Por que `async void` é desaconselhado em C# (exceto em event handlers antigos)?',
    options: [
      { id: 'a', text: 'Não compila.' },
      { id: 'b', text: 'Não pode ser aguardado (`await`), erros lançados crasham o processo em vez de propagar, e o caller não sabe quando terminou.' },
      { id: 'c', text: 'É mais lento que async Task.' },
      { id: 'd', text: 'Só funciona em classes static.' }
    ],
    correctOptionId: 'b',
    explanation: '`async Task` retorna uma tarefa aguardável e erros viram Exception na Task. `async void` não tem retorno nem propagação — chamadas viram "fire and forget" perigosas: erros crasham o AppDomain. A única exceção aceita são handlers de eventos (que exigem void). Fora disso, sempre `async Task` ou `async Task<T>`.'
  },
  {
    id: 'ex-mc-35',
    title: 'LINQ: First vs FirstOrDefault',
    type: 'multiple-choice',
    language: 'C#',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Qual a diferença entre `First()` e `FirstOrDefault()`?',
    options: [
      { id: 'a', text: 'FirstOrDefault é mais rápido.' },
      { id: 'b', text: 'First lança InvalidOperationException se a sequência estiver vazia; FirstOrDefault retorna `default(T)` (null para referências).' },
      { id: 'c', text: 'First retorna sempre o primeiro elemento; FirstOrDefault retorna um aleatório.' },
      { id: 'd', text: 'São idênticos.' }
    ],
    correctOptionId: 'b',
    explanation: '`First()` exige que haja elemento — se não, lança. Útil quando "tem que ter" (erro real se faltar). `FirstOrDefault()` devolve default (null para classes, 0 para int) — seguro quando a ausência é um caminho válido. Análogo: `Single` (exige exatamente um) vs `SingleOrDefault`.'
  },

  // --- React Native ---
  {
    id: 'ex-mc-36',
    title: 'Props vs State no React Native',
    type: 'multiple-choice',
    language: 'React Native',
    difficulty: 'Iniciante',
    xp: 25,
    prompt: 'Qual a diferença entre props e state?',
    options: [
      { id: 'a', text: 'São a mesma coisa.' },
      { id: 'b', text: 'Props são passadas de PAI para filho e são imutáveis dentro do filho; state é interno ao componente e mutável por ele mesmo.' },
      { id: 'c', text: 'State é passado pelo pai; props é interno.' },
      { id: 'd', text: 'Props são para estilo; state para dados.' }
    ],
    correctOptionId: 'b',
    explanation: 'Props = dados que descem do pai (entrada do componente). State = memória interna que o próprio componente altera via setState. Fluxo unidirecional: props descem, eventos (callbacks) sobem via props. Quando state precisa ser compartilhado entre irmãos, "levanta" para o ancestral comum — aí vira prop para os filhos.'
  },
  {
    id: 'ex-mc-37',
    title: 'FlatList vs ScrollView',
    type: 'multiple-choice',
    language: 'React Native',
    difficulty: 'Intermediário',
    xp: 30,
    prompt: 'Quando usar FlatList em vez de ScrollView?',
    options: [
      { id: 'a', text: 'Sempre — ScrollView é obsoleto.' },
      { id: 'b', text: 'Para listas longas (centenas/milhares de itens): FlatList virtualiza e recicla células, mantendo memória constante.' },
      { id: 'c', text: 'Para conteúdo estático como formulários.' },
      { id: 'd', text: 'FlatList é só para grids.' }
    ],
    correctOptionId: 'b',
    explanation: 'ScrollView renderiza TODOS os filhos de uma vez — ótimo para páginas/formulários curtos, péssimo para 1000 itens (memória e travamento). FlatList monta só os visíveis (+ margem) e recicla ao rolar — performance constante independente do tamanho da lista. Use FlatList para qualquer lista dinâmica/paginada.'
  },

  // --- Go (extra, variedade) ---
  {
    id: 'ex-mc-38',
    title: 'Goroutines em Go',
    type: 'multiple-choice',
    language: 'Go',
    difficulty: 'Intermediário',
    xp: 35,
    prompt: 'O que `go funcao()` faz em Go?',
    options: [
      { id: 'a', text: 'Compila a função separadamente.' },
      { id: 'b', text: 'Executa a função em uma nova goroutine — concorrente e assíncrona em relação ao chamador.' },
      { id: 'c', text: 'Cancela a função se demorar.' },
      { id: 'd', text: 'Define a função como deprecated.' }
    ],
    correctOptionId: 'b',
    explanation: 'Goroutines são "threads leves" gerenciadas pelo runtime Go — custam ~2KB cada, vs ~1MB de uma thread do SO. Você pode ter centenas de milhares delas. Para sincronizar, use channels (`ch <- x`) ou sync.WaitGroup. Cuidado: se main sair antes, goroutines em execução são abortadas.'
  }
];
