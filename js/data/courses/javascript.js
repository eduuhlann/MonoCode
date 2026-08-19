// MonoCode — Curso Completo de JavaScript
// 9 módulos • 50 lições com explicações didáticas completas

export const JAVASCRIPT_COURSE = {
  id: 'javascript',
  name: 'JavaScript',
  language: 'JavaScript',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'Aprenda a linguagem mais popular da web, desde tipos primitivos e DOM até closures, promises e arquitetura moderna.',
  description: 'Trilha completa cobrindo fundamentos da linguagem, ES6+ moderno, manipulação do navegador, programação assíncrona, orientação a objetos, depuração, design patterns e consumo de APIs reais.',
  tags: ['Web', 'Frontend', 'Backend', 'Fullstack'],
  modules: [
    {
      id: 'js-fundamentos',
      title: 'Fundamentos',
      description: 'Bases da linguagem: variáveis, tipos, operadores, funções e objetos.',
      lessons: [
        {
          id: 'js-intro',
          title: '1. Introdução ao JavaScript',
          summary: 'O que é JavaScript, onde ele roda e como escrever seu primeiro programa.',
          content: `
<h2>O que é JavaScript?</h2>
<p>JavaScript é a linguagem de programação da web. Enquanto HTML estrutura o conteúdo e CSS define o visual, o JavaScript dá <strong>comportamento</strong> à página: reage a cliques, valida formulários, busca dados de servidores e atualiza a tela sem recarregar.</p>
<p>Criada em 1995 por Brendan Eich em apenas 10 dias, hoje o JavaScript evolui através do <strong>ECMAScript</strong> (ES), o padrão que define a linguagem. Versões modernas (ES6/2015 em diante) trouxeram arrow functions, classes, módulos e async/await.</p>

<h3>Onde o JavaScript roda?</h3>
<ul>
  <li><strong>Navegador:</strong> Chrome, Firefox e Safari trazem motores JS (V8, SpiderMonkey) que executam o código das páginas.</li>
  <li><strong>Servidores:</strong> com Node.js, o mesmo JavaScript roda no backend, criando APIs e ferramentas de linha de comando.</li>
  <li><strong>Mobile e Desktop:</strong> React Native e Electron usam JavaScript para criar apps nativos.</li>
</ul>

<h3>Seu primeiro programa</h3>
<pre><code>// Isso é um comentário: o navegador ignora esta linha
console.log("Olá, MonoCode!");

// console.log() imprime valores no console do navegador
// (abra com F12 e vá na aba "Console")
console.log(2 + 2);        // 4
console.log("JS é " + "divertido"); // JS é divertido</code></pre>

<div class="callout callout-tip">
<strong>Dica:</strong> Você pode testar JavaScript direto no console do navegador (F12) ou no editor de prática no fim desta lição. Programar é um esporte de prática — digite, execute e observe os resultados.
</div>

<h3>Como incluir JS em uma página</h3>
<pre><code>&lt;!-- 1. Arquivo externo (recomendado) --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- 2. Código inline (útil para testes rápidos) --&gt;
&lt;script&gt;
  console.log("Olá de dentro do HTML!");
&lt;/script&gt;</code></pre>
<p>A boa prática é usar arquivos externos: o navegador consegue cachear o arquivo, o HTML fica limpo e o código é reaproveitado em várias páginas.</p>
`
        },
        {
          id: 'js-variaveis',
          title: '2. Variáveis e Tipos de Dados',
          summary: 'let, const, var e os 7 tipos primitivos da linguagem.',
          content: `
<h2>Guardando valores em variáveis</h2>
<p>Variável é um <strong>nome para um valor</strong> guardado na memória. Em JavaScript moderno usamos duas palavras-chave:</p>
<ul>
  <li><code>let</code> — cria uma variável que <strong>pode ser reatribuída</strong>.</li>
  <li><code>const</code> — cria uma constante: o valor <strong>não pode ser reatribuído</strong>. Use sempre que possível!</li>
</ul>
<pre><code>let idade = 25;          // pode mudar no futuro
idade = 26;              // OK

const nome = "Ana";      // fixo para sempre
// nome = "Bia";         // Erro! TypeError: Assignment to constant variable.

// var é a forma antiga — evite. Ela tem escopo estranho e permite
// redeclaração, o que causa bugs difíceis de encontrar.</code></pre>

<h2>Os 7 tipos primitivos</h2>
<p>Primitivos são valores imutáveis — a "matéria-prima" da linguagem:</p>
<pre><code>const texto  = "JavaScript";  // string  — texto entre aspas
const inteiro = 42;           // number  — inteiros E decimais (3.14)
const ligado  = true;         // boolean — true ou false
const vazio   = null;         // null    — ausência intencional de valor
let naoDefinido;              // undefined — declarado, mas sem valor
const unico   = Symbol("id"); // symbol  — identificador único
const grande  = 9007199254740993n; // bigint — números gigantes</code></pre>

<h3>Descobrindo o tipo: typeof</h3>
<pre><code>console.log(typeof "olá");   // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);    // "object"  ← famosa pegadinha histórica do JS!</code></pre>

<div class="callout callout-warning">
<strong>Atenção:</strong> <code>null</code> é um valor que <em>você</em> atribui para dizer "vazio". <code>undefined</code> aparece quando o JavaScript não encontrou valor (variável não inicializada, propriedade inexistente). Planeje usar cada um com esse significado.
</div>

<h2>Strings: aspas e concatenação</h2>
<pre><code>const aspasSimples = 'funciona';
const aspasDuplas  = "também funciona";

// Concatenação clássica com +
const saudacao = "Olá, " + "Ana" + "!";

// Interpolação moderna (template literals) — use crases:
const nome = "Ana";
const saudacao2 = \`Olá, \${nome}!\`;  // "Olá, Ana!"</code></pre>
<p>Template literals permitem montar texto com variáveis de forma muito mais legível — e aceitam quebras de linha sem precisar de <code>\\n</code>.</p>
`
        },
        {
          id: 'js-tipos-especiais',
          title: '3. Coerção, == vs === e Valores Falsy',
          summary: 'Como o JavaScript converte tipos e como evitar bugs clássicos.',
          content: `
<h2>Coerção de tipos</h2>
<p>JavaScript é uma linguagem <strong>fracamente tipada</strong>: quando você mistura tipos, ele converte um deles automaticamente (isso se chama <em>coerção implícita</em>). Isso é conveniente — e uma fonte clássica de bugs.</p>
<pre><code>console.log("5" + 1);   // "51"  → número virou string (concatenação)
console.log("5" - 1);   // 4     → string virou número (subtração)
console.log("5" * "2"); // 10    → ambas viraram número
console.log(true + 1);  // 2     → true vale 1
console.log(0 == "");   // true  → coerção na comparação!</code></pre>

<h2>== (igualdade solta) vs === (igualdade estrita)</h2>
<p>A regra de ouro: <strong>sempre use <code>===</code></strong>. Ele compara valor <em>e</em> tipo, sem converter nada.</p>
<pre><code>console.log(5 == "5");   // true  → o == converteu "5" para 5 antes
console.log(5 === "5");  // false → tipos diferentes, sem conversão

console.log(null == undefined);  // true  → exceção histórica do ==
console.log(null === undefined); // false → na prática são coisas distintas

console.log(NaN === NaN); // false! NaN nunca é igual a si mesmo.
// Para testar NaN, use a função Number.isNaN():
console.log(Number.isNaN(NaN)); // true</code></pre>

<h2>Valores falsy e truthy</h2>
<p>Em contextos booleanos (como <code>if</code>), alguns valores "contam como falso". São exatamente <strong>6 falsy</strong> — decore-os:</p>
<pre><code>// FALSY: false, 0, -0, 0n, "", null, undefined, NaN
if (0)      console.log("não roda");
if ("")     console.log("não roda");
if (null)   console.log("não roda");

// Tudo o resto é truthy — incluindo surpresas:
if ("0")      console.log("roda! string não vazia é truthy");
if ([])       console.log("roda! array vazio é truthy");
if ({})       console.log("roda! objeto vazio é truthy");</code></pre>

<div class="callout callout-tip">
<strong>Resumo prático:</strong> use <code>===</code> sempre; memorize os 6 falsy; e quando converter tipos, faça de forma explícita com <code>Number("42")</code>, <code>String(42)</code> ou <code>Boolean(valor)</code>.
</div>
`
        },
        {
          id: 'js-funcoes',
          title: '4. Funções',
          summary: 'Declaração, parâmetros, retorno, arrow functions e escopo.',
          content: `
<h2>Funções: reutilizando lógica</h2>
<p>Função é um <strong>bloco de código nomeado</strong> que você executa quando quiser. Elas são a unidade básica de organização de qualquer programa JavaScript.</p>

<h3>As três formas de criar funções</h3>
<pre><code>// 1. Declaração de função — içada (hoisting): pode ser chamada antes
function somar(a, b) {
  return a + b;
}

// 2. Expressão de função — guardada em variável
const subtrair = function(a, b) {
  return a - b;
};

// 3. Arrow function — sintaxe curta moderna (ES6)
const multiplicar = (a, b) =&gt; a * b;
const dobrar = n =&gt; n * 2;          // 1 parâmetro: sem parênteses
const saudar = () =&gt; "Olá!";        // sem parâmetros: parênteses vazios</code></pre>
<p>Arrow functions com uma única expressão têm <code>return</code> implícito. Se o corpo tiver várias linhas, use chaves e <code>return</code> explícito:</p>
<pre><code>const calcularArea = (base, altura) =&gt; {
  const area = (base * altura) / 2;
  return area;
};</code></pre>

<h2>Parâmetros: padrões e argumentos variáveis</h2>
<pre><code>// Parâmetro com valor padrão (default parameter)
function cumprimentar(nome = "visitante") {
  return "Olá, " + nome;
}
console.log(cumprimentar());        // "Olá, visitante"
console.log(cumprimentar("Ana"));   // "Olá, Ana"

// Quantidade variável de argumentos com rest parameter (...)
function somarTudo(...numeros) {
  return numeros.reduce((total, n) =&gt; total + n, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // 10</code></pre>

<h2>Funções são valores</h2>
<p>Em JavaScript, funções são "cidadãs de primeira classe": podem ser passadas como argumento, retornadas de outra função e guardadas em variáveis. Isso se chama <strong>higher-order function</strong> e é a base de <code>map</code>, <code>filter</code> e <code>reduce</code>.</p>
<pre><code>function aplicar(operacao, x, y) {
  return operacao(x, y);  // executa a função recebida
}
console.log(aplicar(somar, 10, 5));      // 15
console.log(aplicar(multiplicar, 10, 5)); // 50</code></pre>

<div class="callout callout-tip">
<strong>Boa prática:</strong> funções devem fazer <em>uma</em> coisa bem feita, ter nome de verbo (<code>calcularTotal</code>, <code>validarEmail</code>) e preferir <code>return</code> cedo a ninhos profundos de <code>if</code>.
</div>
`
        },
        {
          id: 'js-objetos',
          title: '5. Objetos e Arrays',
          summary: 'Estruturas de dados: pares chave-valor e listas ordenadas.',
          content: `
<h2>Objetos: dados com rótulos</h2>
<p>Objetos guardam dados em pares <strong>chave: valor</strong>. Eles modelam coisas do mundo real — um usuário, um produto, uma configuração.</p>
<pre><code>const usuario = {
  nome: "Ana",              // propriedade: valor
  idade: 25,
  programadora: true,
  habilidades: ["JS", "Python"],  // arrays dentro de objetos

  // métodos: funções que pertencem ao objeto
  cumprimentar() {
    return "Oi, eu sou " + this.nome;
  }
};

// Acesso por ponto e por colchetes
console.log(usuario.nome);            // "Ana"
console.log(usuario["idade"]);        // 25
const chave = "programadora";
console.log(usuario[chave]);          // true (chave dinâmica!)

// Adicionando e removendo propriedades
usuario.email = "ana@monocode.dev";   // adiciona
delete usuario.idade;                 // remove</code></pre>

<h2>Arrays: listas ordenadas</h2>
<p>Arrays guardam <strong>sequências de valores</strong> indexados a partir de 0:</p>
<pre><code>const frutas = ["maçã", "banana", "uva"];

console.log(frutas[0]);       // "maçã" (primeiro índice é 0)
console.log(frutas.length);   // 3

frutas.push("manga");         // adiciona no fim
frutas.unshift("kiwi");       // adiciona no início
frutas.pop();                 // remove do fim
frutas.shift();               // remove do início

console.log(frutas.indexOf("banana")); // 1 (ou -1 se não existir)
console.log(frutas.includes("uva"));   // true</code></pre>

<h2>Desestruturação (destructuring)</h2>
<p>Extraia valores de objetos e arrays em variáveis separadas em uma única linha:</p>
<pre><code>const pessoa = { nome: "Ana", idade: 25, cidade: "São Paulo" };

const { nome, cidade } = pessoa;      // nome = "Ana", cidade = "São Paulo"
const { idade: anos } = pessoa;       // renomeia: anos = 25

const [primeira, segunda] = [10, 20, 30]; // primeira = 10, segunda = 20</code></pre>

<div class="callout callout-tip">
<strong>Referência vs cópia:</strong> objetos e arrays são copiados <em>por referência</em>. <code>const copia = original</code> cria outro nome para o <strong>mesmo</strong> objeto — mudar um muda o outro. Para copiar de verdade: <code>const copia = { ...original }</code> (cópia rasa).
</div>
`
        },
        {
          id: 'this-palavra',
          title: '6. A Palavra this',
          summary: 'Como o this funciona em cada contexto e a diferença nas arrow functions.',
          content: `
<h2>O que é this?</h2>
<p><code>this</code> é uma palavra-chave que referencia o <strong>objeto do contexto</strong> em que a função está sendo executada. Seu valor não depende de onde a função foi <em>declarada</em>, mas de <em>como</em> ela foi <em>chamada</em> — e isso confunde iniciantes e veteranos.</p>

<h3>this em métodos de objeto</h3>
<pre><code>const carro = {
  modelo: "Fusca",
  descrever() {
    // this = o objeto à esquerda do ponto na chamada
    return "Modelo: " + this.modelo;
  }
};
console.log(carro.descrever()); // "Modelo: Fusca"</code></pre>

<h3>O problema clássico</h3>
<pre><code>const carro = {
  modelo: "Fusca",
  agendarManutencao() {
    setTimeout(function() {
      // função comum perde o this do objeto!
      // this.modelo aqui é undefined
      console.log("Manutenção para: " + this.modelo);
    }, 1000);
  }
};</code></pre>

<h3>A solução moderna: arrow functions</h3>
<p>Arrow functions <strong>não têm this próprio</strong> — elas herdam o <code>this</code> do escopo onde foram escritas (lexical this):</p>
<pre><code>const carro = {
  modelo: "Fusca",
  agendarManutencao() {
    setTimeout(() =&gt; {
      // a arrow function herda o this de agendarManutencao()
      console.log("Manutenção para: " + this.modelo); // funciona!
    }, 1000);
  }
};</code></pre>

<h3>Resumo dos contextos</h3>
<ul>
  <li><strong>Método de objeto:</strong> <code>this</code> = o próprio objeto.</li>
  <li><strong>Função comum (modo estrito):</strong> <code>this</code> = <code>undefined</code>.</li>
  <li><strong>Arrow function:</strong> herda o <code>this</code> de onde foi criada.</li>
  <li><strong>Eventos:</strong> <code>this</code> = o elemento que recebeu o evento (em funções comuns).</li>
</ul>

<div class="callout callout-tip">
<strong>Regra prática:</strong> use <strong>arrow functions</strong> dentro de métodos para preservar o <code>this</code>, e a sintaxe de <strong>método comum</strong> quando quiser que <code>this</code> seja o objeto.
</div>
`
        },
        {
          id: 'js-operadores-logicos',
          title: '7. Operadores Lógicos e Estruturas de Controle',
          summary: 'if/else, switch, &&, ||, ?? e o operador ternário.',
          content: `
<h2>Decisões com if/else</h2>
<pre><code>const nota = 7.5;

if (nota &gt;= 9) {
  console.log("Excelente!");
} else if (nota &gt;= 7) {
  console.log("Aprovado");        // ← este bloco roda
} else {
  console.log("Reprovado");
}</code></pre>

<h2>Operadores lógicos</h2>
<pre><code>const idade = 20, temIngresso = true;

// E lógico: ambas precisam ser verdadeiras
if (idade &gt;= 18 &amp;&amp; temIngresso) console.log("Pode entrar");

// OU lógico: basta uma ser verdadeira
if (idade &lt; 12 || idade &gt; 65) console.log("Meia-entrada");

// NÃO lógico: inverte o valor
if (!temIngresso) console.log("Bloqueado");</code></pre>
<p>Detalhe poderoso: <code>&amp;&amp;</code> e <code>||</code> retornam um dos <em>operandos</em>, não apenas true/false. Isso permite atalhos elegantes:</p>
<pre><code>// Short-circuit: só executa a função se a condição for truthy
const config = null;
const tema = config &amp;&amp; config.tema;   // null (para por aí)

// Valor padrão com || (cuidado com falsy indesejados)
const nome = "" || "Anônimo";          // "Anônimo"

// Nullish coalescing (??): só substitui null/undefined
const contador = 0;
console.log(contador ?? 10);           // 0  ← 0 é válido!
console.log(contador || 10);           // 10 ← 0 foi descartado (bug!)</code></pre>

<h2>Operador ternário</h2>
<pre><code>// condição ? valorSeVerdadeiro : valorSeFalso
const status = nota &gt;= 7 ? "aprovado" : "reprovado";</code></pre>

<h2>switch para múltiplos casos</h2>
<pre><code>const fruta = "maçã";
switch (fruta) {
  case "maçã":
    console.log("R$ 3/kg");
    break;                     // sem break, cai no próximo caso!
  case "banana":
    console.log("R$ 4/kg");
    break;
  default:
    console.log("Fruta não catalogada");
}</code></pre>

<h2>Laços de repetição</h2>
<pre><code>// for clássico — quando você precisa do índice
for (let i = 0; i &lt; 5; i++) {
  console.log(i);              // 0 a 4
}

// for...of — percorre valores de iteráveis (preferido para arrays)
for (const fruta of ["uva", "kiwi", "manga"]) {
  console.log(fruta);
}

// while — repete enquanto a condição for verdadeira
let vida = 3;
while (vida &gt; 0) {
  vida--;                      // cuidado com loops infinitos!
}</code></pre>
`
        }
      ]
    },
    {
      id: 'js-es6',
      title: 'ES6+ Essencial',
      description: 'Recursos modernos que todo dev JavaScript usa diariamente.',
      lessons: [
        {
          id: 'js-template-literals',
          title: '1. Template Literals e Tags',
          summary: 'Strings dinâmicas com interpolação e múltiplas linhas.',
          content: `
<h2>Interpolação de strings</h2>
<p>Template literals (template strings) usam <strong>crases</strong> em vez de aspas e permitem embutir expressões com <code>\${...}</code>:</p>
<pre><code>const nome = "Ana";
const pontos = 1250;

// Antes (concatenação dolorosa):
const msg1 = "Jogadora " + nome + " tem " + pontos + " pontos!";

// Agora (legível):
const msg2 = \`Jogadora \${nome} tem \${pontos} pontos!\`;

// Dentro das chaves cabe QUALQUER expressão JavaScript:
console.log(\`\${nome.toUpperCase()} • \${pontos * 2} pontos • nível \${pontos &gt; 1000 ? "avançado" : "iniciante"}\`);</code></pre>

<h2>Strings multilinha</h2>
<pre><code>const poema = \`Ratos roeram a coroa
do rei de Roma
e o povo gritou:
— Sua majestade ficou sem coroa!\`;

console.log(poema); // quebras de linha preservadas sem \\n</code></pre>

<h2>Template literals marcados (tagged templates)</h2>
<p>Um uso avançado: passar o template para uma função que processa as partes. É assim que bibliotecas como styled-components funcionam:</p>
<pre><code>function destacar(partes, ...valores) {
  return partes.reduce((acc, parte, i) =&gt;
    acc + parte + (valores[i] ? \`[\${valores[i]}]\` : ""), "");
}

console.log(destacar\`Nome: \${"Ana"} | Nível: \${"Pro"}\`);
// "Nome: [Ana] | Nível: [Pro]"</code></pre>

<div class="callout callout-tip">
<strong>Hábito a criar:</strong> troque concatenação com <code>+</code> por template literals sempre que a string tiver variáveis. Seu futuro eu agradece na hora de dar manutenção.
</div>
`
        },
        {
          id: 'js-destructuring',
          title: '2. Desestruturação Avançada',
          summary: 'Extraindo dados de objetos e arrays de forma elegante.',
          content: `
<h2>Desestruturação de objetos</h2>
<pre><code>const resposta = {
  dados: { usuarios: ["Ana", "Bia"] },
  paginacao: { pagina: 1, total: 42 },
  status: 200
};

// Extraia só o que precisa, em qualquer profundidade:
const { dados, status } = resposta;
const { usuarios } = resposta.dados;
const { pagina, total } = resposta.paginacao;

// Com valores padrão e renomeação ao mesmo tempo:
const { tema = "dark", idioma: lang = "pt-BR" } = { idioma: "en" };
// tema = "dark" (não existia, usou o padrão)
// lang = "en"    (existia "idioma", renomeado para lang)</code></pre>

<h2>Desestruturação de arrays</h2>
<pre><code>const cores = ["#000000", "#333333", "#666666", "#999999"];

const [preto, , cinzaMedio] = cores;  // pula elementos com vírgula
// preto = "#000000", cinzaMedio = "#666666"

// Trocar valores sem variável temporária (swap):
let a = 1, b = 2;
[a, b] = [b, a];  // a = 2, b = 1

// Rest em arrays: o que sobrar vira um novo array
const [primeiro, ...resto] = [1, 2, 3, 4];
// primeiro = 1, resto = [2, 3, 4]</code></pre>

<h2>Em parâmetros de função</h2>
<p>O uso mais comum no mundo real — funções que recebem um objeto de opções:</p>
<pre><code>// Em vez de funcao(usuario.nome, usuario.idade, usuario.email...)
function criarPerfil({ nome, idade = 18, interesses = [] }) {
  return \`\${nome} (\${idade} anos) gosta de \${interesses.join(", ")}\`;
}

console.log(criarPerfil({
  nome: "Ana",
  interesses: ["JS", "CSS"]
}));
// "Ana (18 anos) gosta de JS, CSS"</code></pre>

<h2>Desestruturar dentro de loops</h2>
<pre><code>const vendas = [
  { produto: "Teclado", valor: 200 },
  { produto: "Mouse",   valor: 90 }
];

for (const { produto, valor } of vendas) {
  console.log(\`\${produto}: R$ \${valor}\`);
}</code></pre>
`
        },
        {
          id: 'js-spread-rest',
          title: '3. Spread e Rest (...)',
          summary: 'O mesmo operador que expande e agrupa valores.',
          content: `
<h2>Dois nomes, um operador</h2>
<p>Os três pontinhos <code>...</code> têm dois papéis:</p>
<ul>
  <li><strong>Spread</strong> — <em>expande</em> um iterável em vários elementos.</li>
  <li><strong>Rest</strong> — <em>agrupa</em> vários argumentos em um array.</li>
</ul>

<h3>Spread na prática</h3>
<pre><code>const numeros = [1, 2, 3];

// Copiar e combinar arrays (sem mutar o original!)
const copia = [...numeros];
const estendido = [...numeros, 4, 5];     // [1,2,3,4,5]

// Passar array como argumentos de função
console.log(Math.max(...numeros));        // 3

// Copiar e mesclar objetos (as últimas chaves vencem)
const padrao = { tema: "dark", fontes: 14 };
const usuario = { ...padrao, tema: "light" };
// { tema: "light", fontes: 14 }</code></pre>

<h3>Rest na prática</h3>
<pre><code>// Agrupar argumentos variáveis
function somar(...valores) {
  return valores.reduce((s, v) =&gt; s + v, 0);
}
console.log(somar(1, 2));        // 3
console.log(somar(5, 10, 15));   // 30

// Separar primeiro item do restante
function classificar(lider, ...equipe) {
  return \`Líder: \${lider} | Equipe: \${equipe.join(", ")}\`;
}
console.log(classificar("Ana", "Bia", "Caio"));
// "Líder: Ana | Equipe: Bia, Caio"</code></pre>

<h3>Spread + destructuring = combinação perfeita</h3>
<pre><code>const [primeiro, ...outros] = [1, 2, 3, 4];   // rest em posição
const novosOutros = [...outros, 5];            // spread em criação</code></pre>

<div class="callout callout-warning">
<strong>Atenção:</strong> spread faz <strong>cópia rasa</strong> (shallow). Objetos aninhados ainda são compartilhados. Para cópia profunda: <code>structuredClone(original)</code>.
</div>
`
        },
        {
          id: 'js-optional-chaining',
          title: '4. Optional Chaining (?.) e Encadeamento Seguro',
          summary: 'Acessar propriedades profundas sem quebrar a aplicação.',
          content: `
<h2>O problema do "cannot read property of undefined"</h2>
<p>Já viu o erro <code>Cannot read properties of undefined</code>? Ele acontece ao acessar propriedades de objetos que ainda não existem — típico com dados de API:</p>
<pre><code>const usuario = {};  // dados ainda não carregaram

// Antigamente (defensivo e ilegível):
const cidade = usuario &amp;&amp; usuario.endereco &amp;&amp; usuario.endereco.cidade;

// O erro clássico:
// usuario.endereco.cidade  → TypeError!</code></pre>

<h2>A solução: ?.</h2>
<p>O optional chaining avalia a expressão e devolve <code>undefined</code> — em vez de lançar erro — se algo no caminho não existir:</p>
<pre><code>const usuario = {};
const cidade = usuario.endereco?.cidade;      // undefined (sem erro!)

// Com chamada de função: só chama se o método existir
const resultado = usuario.callback?.();
// se usuario.callback não existir → undefined, sem erro

// Com índice de array:
const primeiroItem = lista?.[0];

// Encadeando tudo:
const cep = usuario.endereco?.cidade?.cep ?? "CEP não informado";</code></pre>

<h2>Combinando com ??</h2>
<p><code>??</code> entrega um valor padrão quando o resultado for <code>null</code>/<code>undefined</code> — a dupla dinâmica do código defensivo moderno:</p>
<pre><code>function exibirMoeda(preferencias) {
  // Se a API mudar ou o campo vier faltando, a app continua de pé
  const moeda = preferencias?.regional?.moeda ?? "BRL";
  console.log("Moeda escolhida:", moeda);
}

exibirMoeda({});                                   // Moeda escolhida: BRL
exibirMoeda({ regional: { moeda: "USD" } });       // Moeda escolhida: USD</code></pre>

<div class="callout callout-tip">
<strong>Onde brilha:</strong> respostas de APIs, objetos de configuração, árvores de componentes React e qualquer dado que "chega quando chega". Use com parcimônia — esconder erros de digitação de propriedades também é um efeito colateral.
</div>
`
        },
        {
          id: 'js-modules',
          title: '5. Módulos: import e export',
          summary: 'Organizando o código em arquivos reutilizáveis.',
          content: `
<h2>Por que módulos?</h2>
<p>Colocar tudo em um arquivo gigante não escala. Módulos permitem dividir o código em arquivos com <strong>escopo próprio</strong> — cada arquivo só enxerga o que importa explicitamente.</p>

<h3>Export nomeado</h3>
<pre><code>// ---- arquivo: utilidades.js ----
export function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2);
}

export function aplicarDesconto(preco, pct) {
  return preco * (1 - pct / 100);
}

export const IMPOSTO = 0.08;

// ---- arquivo: app.js ----
import { formatarPreco, IMPOSTO } from "./utilidades.js";
console.log(formatarPreco(89.9 * (1 + IMPOSTO))); // R$ 97.09</code></pre>

<h3>Export padrão (default)</h3>
<pre><code>// ---- arquivo: Calculadora.js ----
export default class Calculadora {
  somar(a, b) { return a + b; }
}

// ---- arquivo: app.js ----
import Calc from "./Calculadora.js";   // nome livre!
new Calc().somar(2, 3);</code></pre>
<p>Regra da comunidade: <strong>export nomeado</strong> para funções/utilidades (vários por arquivo), <strong>export default</strong> para a "coisa principal" do arquivo (uma classe ou componente).</p>

<h3>Renomear e importar tudo</h3>
<pre><code>import { formatarPreco as moeda } from "./utilidades.js";
import * as Utils from "./utilidades.js";  // tudo dentro de Utils.*
console.log(Utils.formatarPreco(10));</code></pre>

<div class="callout callout-warning">
<strong>Importante:</strong> módulos nativos exigem <code>&lt;script type="module" src="app.js"&gt;</code> no HTML e um servidor local (não funcionam abrindo o arquivo direto com file://). Em projetos com bundlers (Vite, Webpack), a extensão .js costuma ser omitida nos imports.
</div>
`
        },
        {
          id: 'js-closures-pratica',
          title: '6. Closures na Prática',
          summary: 'Funções que lembram seu escopo de nascimento.',
          content: `
<h2>O conceito</h2>
<p><strong>Closure</strong> acontece quando uma função interna "lembra" das variáveis da função externa mesmo depois dela terminar. É um dos conceitos mais poderosos do JavaScript.</p>
<pre><code>function criarContador() {
  let contagem = 0;          // variável "privada"

  return function() {
    contagem++;              // a função interna acessa e ALTERA
    return contagem;
  };
}

const contador = criarContador();
console.log(contador());  // 1
console.log(contador());  // 2
console.log(contador());  // 3

// Ninguém consegue acessar contagem diretamente:
// contador.contagem → undefined. Está protegida pela closure!</code></pre>

<h2>Usos reais</h2>
<h3>1. Dados privados (encapsulamento)</h3>
<pre><code>function criarCarteira(saldoInicial) {
  let saldo = saldoInicial;   // inacessível de fora

  return {
    depositar(valor) { saldo += valor; return saldo; },
    sacar(valor) {
      if (valor &gt; saldo) return "Saldo insuficiente";
      saldo -= valor;
      return saldo;
    },
    getSaldo() { return saldo; }
  };
}

const carteira = criarCarteira(100);
console.log(carteira.depositar(50));  // 150
console.log(carteira.sacar(500));     // "Saldo insuficiente"</code></pre>

<h3>2. Fábricas de funções</h3>
<pre><code>const multiplicarPor = fator =&gt; numero =&gt; numero * fator;

const dobrar = multiplicarPor(2);
const triplicar = multiplicarPor(3);
console.log(dobrar(10));    // 20
console.log(triplicar(10)); // 30</code></pre>

<h3>3. Memorização (memoization)</h3>
<pre><code>function memoizar(fn) {
  const cache = {};
  return function(arg) {
    if (arg in cache) return cache[arg];
    cache[arg] = fn(arg);
    return cache[arg];
  };
}</code></pre>

<div class="callout callout-tip">
<strong>Como identificar:</strong> toda vez que uma função retorna outra função que usa variáveis do escopo externo — há uma closure. Ela é a base de hooks do React, currying, middlewares e do padrão Module.
</div>
`
        }
      ]
    },
    {
      id: 'js-dom',
      title: 'DOM e Eventos',
      description: 'Manipulação do HTML e CSS com JavaScript puro.',
      lessons: [
        {
          id: 'js-selecao',
          title: '1. Seleção de Elementos',
          summary: 'querySelector, querySelectorAll e os seletores do DOM.',
          content: `
<h2>O que é o DOM?</h2>
<p>O <strong>DOM (Document Object Model)</strong> é a representação em árvore da sua página HTML. O JavaScript navega nessa árvore para ler e alterar conteúdo, estilos e estrutura.</p>

<h2>Selecionando elementos</h2>
<pre><code>// Os dois métodos modernos — use sempre estes:
const titulo = document.querySelector("h1");              // primeiro &lt;h1&gt;
const botao  = document.querySelector("#enviar");          // id="enviar"
const card   = document.querySelector(".card");            // primeiro .card
const input  = document.querySelector('input[type="email"]'); // seletor CSS!

// Todos os elementos que casarem (retorna uma NodeList estática):
const itens = document.querySelectorAll(".item");
itens.forEach(item =&gt; console.log(item.textContent));

// Métodos antigos (evite em código novo):
document.getElementById("enviar");
document.getElementsByClassName("card");  // HTMLCollection "viva"
document.getElementsByTagName("p");</code></pre>

<h2>Navegando pela árvore</h2>
<pre><code>const item = document.querySelector(".item");

item.parentElement;      // elemento pai
item.children;           // filhos elementos
item.nextElementSibling; // próximo irmão
item.closest(".card");   // ancestral mais próximo que casa com o seletor</code></pre>

<h2>Lendo e alterando conteúdo</h2>
<pre><code>const titulo = document.querySelector("h1");

// textContent: texto puro (seguro contra injeção de HTML)
titulo.textContent = "Novo título";

// innerHTML: interpreta HTML — cuidado com dados do usuário!
// NUNCA use innerHTML com entrada não confiável (risco de XSS)
const card = document.querySelector(".card");
card.innerHTML = "&lt;strong&gt;Atualizado&lt;/strong&gt;";

// Acessando atributos e inputs:
const input = document.querySelector("#nome");
console.log(input.value);              // o que o usuário digitou
console.log(input.getAttribute("placeholder"));
input.setAttribute("placeholder", "Digite aqui");</code></pre>

<div class="callout callout-tip">
<strong>Dica de performance:</strong> guarde o resultado de <code>querySelector</code> em uma constante em vez de consultar o DOM repetidamente dentro de loops — cada consulta percorre a árvore.
</div>
`
        },
        {
          id: 'js-eventos',
          title: '2. Manipuladores de Eventos',
          summary: 'addEventListener, o objeto event e delegação de eventos.',
          content: `
<h2>Ouvindo eventos</h2>
<p>Eventos são reações: clique, digitação, rolagem, envio de formulário. O método moderno para reagir a eles é <code>addEventListener</code>:</p>
<pre><code>const botao = document.querySelector("#salvar");

botao.addEventListener("click", function(evento) {
  console.log("Botão clicado!");
  console.log(evento.target);   // o elemento que disparou
});</code></pre>

<h2>Eventos mais usados</h2>
<ul>
  <li><code>click</code> — clique em qualquer elemento.</li>
  <li><code>submit</code> — envio de formulário (no <code>&lt;form&gt;</code>).</li>
  <li><code>input</code> — cada tecla digitada em campos de texto.</li>
  <li><code>change</code> — valor mudou (selects, checkboxes).</li>
  <li><code>mouseover</code> / <code>mouseout</code> — passar/sair o mouse.</li>
  <li><code>keydown</code> / <code>keyup</code> — teclado.</li>
  <li><code>DOMContentLoaded</code> — o HTML terminou de carregar.</li>
</ul>

<h2>preventDefault e stopPropagation</h2>
<pre><code>const form = document.querySelector("#cadastro");

form.addEventListener("submit", function(evento) {
  evento.preventDefault();  // impede o recarregamento da página

  // pegar dados do formulário:
  const dados = new FormData(form);
  console.log(dados.get("email"));
});

// stopPropagation impede que o evento borbulhe para ancestrais:
card.addEventListener("click", () =&gt; console.log("card clicado"));
botaoDentro.addEventListener("click", (e) =&gt; {
  e.stopPropagation();  // clicar no botão NÃO dispara o card
});</code></pre>

<h2>Delegação de eventos (padrão pro)</h2>
<p>Em vez de ligar listener em cada item, escute no pai e descubra quem foi clicado — essencial para listas dinâmicas:</p>
<pre><code>document.querySelector("#lista").addEventListener("click", (e) =&gt; {
  const item = e.target.closest("li");
  if (item) console.log("Clicou em:", item.textContent);
});
// Funciona até para itens adicionados depois do listener!</code></pre>

<div class="callout callout-tip">
<strong>Removendo listeners:</strong> guarde a referência da função e use <code>removeEventListener("click", mesmaFuncao)</code>. Funções anônimas não podem ser removidas.
</div>
`
        },
        {
          id: 'js-eventos-teclado',
          title: '3. Eventos de Teclado e Formulários',
          summary: 'keydown, keyup, validação em tempo real e submit.',
          content: `
<h2>Teclado: keydown vs keyup</h2>
<pre><code>const campo = document.querySelector("#busca");

// keydown: dispara ao PRESSIONAR (antes do caractere entrar)
document.addEventListener("keydown", (e) =&gt; {
  if (e.key === "Escape") fecharModal();
  if (e.ctrlKey &amp;&amp; e.key === "k") abrirBusca();  // atalho Ctrl+K
});

// keyup: dispara ao SOLTAR a tecla — ideal para busca em tempo real:
campo.addEventListener("keyup", (e) =&gt; {
  console.log("Buscando por:", e.target.value);
});

// O objeto event do teclado:
// e.key → "a", "Enter", "Escape", "ArrowUp"...
// e.ctrlKey, e.shiftKey, e.altKey → modificadores (true/false)</code></pre>

<h2>Formulários end to end</h2>
<pre><code>&lt;form id="cadastro"&gt;
  &lt;input type="email" id="email" required /&gt;
  &lt;input type="password" id="senha" minlength="8" /&gt;
  &lt;button type="submit"&gt;Criar conta&lt;/button&gt;
&lt;/form&gt;</code></pre>
<pre><code>const form = document.querySelector("#cadastro");
const email = document.querySelector("#email");

// 1. Feedback em tempo real:
email.addEventListener("input", (e) =&gt; {
  const valido = e.target.checkValidity();
  e.target.classList.toggle("invalido", !valido);
});

// 2. Interceptando o envio:
form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();

  // Validação nativa do navegador + regras customizadas:
  if (!form.checkValidity()) {
    form.reportValidity();  // mostra mensagens nativas
    return;
  }

  const dados = Object.fromEntries(new FormData(form));
  console.log("Enviando:", dados);  // { email: "...", senha: "..." }
});</code></pre>

<h2>Validação customizada com setCustomValidity</h2>
<pre><code>const senha = document.querySelector("#senha");
senha.addEventListener("input", () =&gt; {
  const temNumero = /\d/.test(senha.value);
  senha.setCustomValidity(
    temNumero ? "" : "A senha precisa conter ao menos um número"
  );
});</code></pre>
`
        },
        {
          id: 'js-dom-atualizacao',
          title: '4. Criando e Atualizando Elementos',
          summary: 'createElement, classList, dataset e boas práticas de render.',
          content: `
<h2>Criando elementos do zero</h2>
<pre><code>function criarItemLista(texto) {
  const li = document.createElement("li");   // cria (ainda fora da página)
  li.textContent = texto;                    // define conteúdo
  li.classList.add("item");                  // adiciona classe
  return li;
}

const lista = document.querySelector("#tarefas");
lista.appendChild(criarItemLista("Estudar DOM"));

// Inserir antes / substituir / remover:
lista.prepend(criarItemLista("Primeira tarefa"));  // no topo
lista.children[0].remove();                         // remove</code></pre>

<h2>classList: o canivete de estilos</h2>
<pre><code>const card = document.querySelector(".card");

card.classList.add("ativo", "destaque");  // adiciona
card.classList.remove("ativo");           // remove
card.classList.toggle("dark");            // liga/desliga
card.classList.contains("dark");          // verifica (true/false)
card.classList.replace("erro", "ok");     // troca</code></pre>

<h2>dataset: dados no HTML</h2>
<p>Atributos <code>data-*</code> guardam informação customizada no elemento:</p>
<pre><code>&lt;button data-id="42" data-acao="excluir"&gt;Excluir&lt;/button&gt;</code></pre>
<pre><code>document.querySelector("button").addEventListener("click", (e) =&gt; {
  const btn = e.target.closest("button");
  console.log(btn.dataset.id);     // "42"
  console.log(btn.dataset.acao);   // "excluir"
});</code></pre>

<h2>Renderizando listas com segurança</h2>
<pre><code>const tarefas = ["Estudar", "Praticar", "Descansar"];

function renderizarTarefas(itens) {
  const lista = document.querySelector("#tarefas");
  lista.innerHTML = "";  // limpa antes de renderizar

  itens.forEach(texto =&gt; {
    const li = document.createElement("li");
    li.textContent = texto;   // textContent = imune a XSS
    lista.appendChild(li);
  });
}</code></pre>

<div class="callout callout-warning">
<strong>Segurança:</strong> <code>innerHTML</code> com dados do usuário abre a porta para ataques XSS (injeção de scripts). Prefira <code>textContent</code> e <code>createElement</code> sempre que o conteúdo não for 100% confiável.
</div>
`
        },
        {
          id: 'js-classlist-estilos',
          title: '5. Estilos Dinâmicos via JavaScript',
          summary: 'style, getComputedStyle e manipulação de CSS custom properties.',
          content: `
<h2>O objeto style</h2>
<pre><code>const box = document.querySelector(".box");

// Altera estilos inline (um por um):
box.style.backgroundColor = "#111";
box.style.fontSize = "18px";
box.style.display = "none";

// Removendo um estilo inline (volta ao CSS do arquivo):
box.style.backgroundColor = "";

// Múltiplos de uma vez:
Object.assign(box.style, {
  color: "#fff",
  padding: "16px",
  borderRadius: "4px"
});

// LER estilos calculados (o valor real após todo o CSS):
const tamanho = getComputedStyle(box).fontSize;  // "18px"</code></pre>

<h2>Alterando variáveis CSS (custom properties)</h2>
<p>Uma técnica poderosa: mudar as variáveis do CSS de dentro do JS — perfeita para temas:</p>
<pre><code>:root {
  --cor-primaria: #ffffff;
  --espaco: 16px;
}</code></pre>
<pre><code>// JS altera a variável e TODO o site reage:
document.documentElement.style.setProperty("--cor-primaria", "#0a84ff");

// Lendo o valor atual:
const cor = getComputedStyle(document.documentElement)
  .getPropertyValue("--cor-primaria");</code></pre>

<h2>Dimensões e posição</h2>
<pre><code>box.offsetWidth;     // largura com padding+border (número)
box.clientHeight;    // altura visível com padding
box.getBoundingClientRect();  // { top, left, width, height... }
// Perfeito para animações e posicionamento de tooltips</code></pre>

<div class="callout callout-tip">
<strong>Regra de ouro:</strong> prefira alternar <strong>classes CSS</strong> (<code>classList.toggle("aberto")</code>) a trocar dezenas de propriedades via <code>style</code>. O CSS fica responsável pela aparência; o JS só sinaliza o estado.
</div>
`
        },
        {
          id: 'js-eventos-formularios',
          title: '6. Projeto Prático: Lista de Tarefas',
          summary: 'Integrando seleção, eventos e renderização em uma app real.',
          content: `
<h2>Vamos construir juntos</h2>
<p>Tudo que você aprendeu no módulo em um mini-projeto completo: adicionar, remover e persistir tarefas.</p>

<pre><code>&lt;form id="form-tarefa"&gt;
  &lt;input id="input-tarefa" placeholder="Nova tarefa..." required /&gt;
  &lt;button&gt;Adicionar&lt;/button&gt;
&lt;/form&gt;
&lt;ul id="lista-tarefas"&gt;&lt;/ul&gt;</code></pre>

<pre><code>// ---- Estado da aplicação ----
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// ---- Elementos ----
const form  = document.querySelector("#form-tarefa");
const input = document.querySelector("#input-tarefa");
const lista = document.querySelector("#lista-tarefas");

// ---- Renderização ----
function renderizar() {
  lista.innerHTML = "";
  tarefas.forEach((tarefa, indice) =&gt; {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa.texto;
    if (tarefa.feita) span.classList.add("concluida");
    span.addEventListener("click", () =&gt; alternar(indice));

    const btn = document.createElement("button");
    btn.textContent = "✕";
    btn.addEventListener("click", () =&gt; remover(indice));

    li.append(span, btn);
    lista.appendChild(li);
  });
}

// ---- Ações ----
function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function alternar(indice) {
  tarefas[indice].feita = !tarefas[indice].feita;
  salvar(); renderizar();
}

function remover(indice) {
  tarefas.splice(indice, 1);
  salvar(); renderizar();
}

// ---- Eventos ----
form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();
  tarefas.push({ texto: input.value.trim(), feita: false });
  input.value = "";
  salvar(); renderizar();
});

renderizar();</code></pre>

<div class="callout callout-tip">
<strong>Desafio:</strong> adicione um filtro (todas / pendentes / concluídas) e um contador de pendentes. Depais, tente recriar do zero sem olhar — é assim que o conhecimento fixa.
</div>
`
        }
      ]
    },
    {
      id: 'js-assincronismo',
      title: 'Assíncronia e Promises',
      description: 'Event loop, callbacks, promises, async/await e tratamento de erros.',
      lessons: [
        {
          id: 'js-eventloop',
          title: '1. O Event Loop e o Assíncronismo',
          summary: 'Por que JavaScript "nunca espera" e como a fila de tarefas funciona.',
          content: `
<h2>JavaScript é single-threaded</h2>
<p>O JavaScript executa <strong>uma linha por vez</strong>, em uma única thread. Como então ele baixa dados, espera cliques e processa timers "ao mesmo tempo"? A resposta é o <strong>event loop</strong> — o maestro que alterna entre código e tarefas pendentes.</p>

<h2>Call Stack, Web APIs e a Fila</h2>
<pre><code>console.log("1");

setTimeout(() =&gt; console.log("2"), 0);  // agenda (Web API)

console.log("3");

// Saída: 1, 3, 2  ← o setTimeout roda POR ÚLTIMO, mesmo com 0ms!</code></pre>
<p>O que aconteceu:</p>
<ol>
  <li><code>"1"</code> entra na pilha e executa.</li>
  <li><code>setTimeout</code> entrega a callback para o navegador (Web API) e segue em frente.</li>
  <li><code>"3"</code> executa.</li>
  <li>A pilha esvazia; o event loop pega a callback da <strong>fila</strong> e executa → <code>"2"</code>.</li>
</ol>

<h2>Código bloqueante</h2>
<pre><code>// Esta linha CONGELA a página por 3 segundos
const inicio = Date.now();
while (Date.now() - inicio &lt; 3000) {}

// Durante esse tempo: animações travam, cliques não respondem.
// Por isso operações lentas (rede, disco) são assíncronas por natureza.</code></pre>

<h2>Macrotasks e microtasks</h2>
<pre><code>setTimeout(() =&gt; console.log("timeout"));      // macrotarefa
Promise.resolve().then(() =&gt; console.log("promise")); // microtarefa!

// Saída: promise → timeout
// Microtasks (promises) têm prioridade e esvaziam ANTES
// da próxima macrotarefa.</code></pre>

<div class="callout callout-tip">
<strong>Entender o event loop</strong> explica 90% dos mistérios de JS: por que <code>setTimeout(fn, 0)</code> não é imediato, por que promises resolvem antes de timeouts e por que loops infinitos travam a página.
</div>
`
        },
        {
          id: 'js-promesas',
          title: '2. O que são Promises',
          summary: 'Os três estados de uma promise e como criá-las.',
          content: `
<h2>Promessa: um valor no futuro</h2>
<p>Uma <code>Promise</code> representa o resultado futuro de uma operação assíncrona. Ela é um "recibo": a operação pode dar certo (<strong>fulfilled</strong>), falhar (<strong>rejected</strong>) ou ainda estar em andamento (<strong>pending</strong>).</p>

<h2>Criando promises</h2>
<pre><code>const esperar = (ms) =&gt; new Promise((resolve, reject) =&gt; {
  setTimeout(() =&gt; {
    if (ms &lt; 0)  reject(new Error("Tempo não pode ser negativo"));
    else         resolve(\`Esperou \${ms}ms\`);
  }, ms);
});

esperar(500)
  .then(resultado =&gt; console.log(resultado))  // "Esperou 500ms"
  .catch(erro =&gt; console.error(erro.message));

esperar(-1)
  .then(r =&gt; console.log(r))
  .catch(e =&gt; console.error("Falhou:", e.message)); // "Falhou: ..."</code></pre>

<h2>Encadeamento com then</h2>
<p>Cada <code>.then()</code> devolve uma <strong>nova promise</strong>, formando uma esteira de transformações:</p>
<pre><code>fetch("https://api.exemplo.dev/usuario/1")   // Promise&lt;Response&gt;
  .then(resposta =&gt; resposta.json())          // Promise&lt;dados&gt;
  .then(dados =&gt; dados.nome.toUpperCase())
  .then(nome =&gt; console.log(nome))
  .catch(erro =&gt; console.error("Falhou:", erro))
  .finally(() =&gt; console.log("Terminou (com ou sem erro)"));</code></pre>

<h2>Promise.all, race e allSettled</h2>
<pre><code>const p1 = esperar(300);
const p2 = esperar(600);

// Todas com sucesso — ou a primeira falha reprova tudo:
Promise.all([p1, p2])
  .then(valores =&gt; console.log(valores));  // ["Esperou 300ms", "Esperou 600ms"]

// A primeira que terminar vence:
Promise.race([p1, p2]).then(v =&gt; console.log(v));  // "Esperou 300ms"

// Todas resolvem, cada uma com status (ideal para APIs paralelas):
Promise.allSettled([p1, Promise.reject(new Error("x"))])
  .then(rs =&gt; console.log(rs));
// [{status:"fulfilled", value:...}, {status:"rejected", reason:...}]</code></pre>

<div class="callout callout-warning">
<strong>Pegadinha:</strong> <code>.catch()</code> no fim do encadeamento captura erro de <em>qualquer</em> <code>.then()</code> anterior. Se um <code>.then</code> lançar erro, os seguintes são pulados até o próximo <code>catch</code>.
</div>
`
        },
        {
          id: 'js-async-await',
          title: '3. Async/Await',
          summary: 'Código assíncrono com cara de síncrono.',
          content: `
<h2>A evolução do assíncrono</h2>
<p><code>async/await</code> é açúcar sintático sobre promises: o mesmo comportamento, mas escrito de forma linear e legível.</p>

<h2>Regras básicas</h2>
<ul>
  <li><code>async</code> antes da função → ela <strong>sempre retorna uma promise</strong>.</li>
  <li><code>await</code> pausa a função até a promise resolver — <strong>só funciona dentro de async</strong>.</li>
</ul>
<pre><code>async function carregarUsuario() {
  try {
    const resposta = await fetch("/api/usuario/1");
    const usuario  = await resposta.json();

    console.log(usuario.nome);        // como se fosse síncrono!
    return usuario;
  } catch (erro) {
    console.error("Erro ao carregar:", erro);
    throw erro;   // re-lança para quem chamou decidir o que fazer
  } finally {
    console.log("Requisição finalizada");
  }
}

// async functions retornam promises:
carregarUsuario().then(u =&gt; console.log("carregado:", u.nome));</code></pre>

<h2>Antes e depois</h2>
<pre><code>// COM then/catch (aninhado, difícil de ler):
function buscarTudo() {
  return fetch("/api/a")
    .then(r =&gt; r.json())
    .then(a =&gt; fetch("/api/b")
      .then(r =&gt; r.json())
      .then(b =&gt; ({ a, b })));
}

// COM async/await (linear, fácil de ler):
async function buscarTudo() {
  const rA = await fetch("/api/a");
  const a  = await rA.json();
  const rB = await fetch("/api/b");
  const b  = await rB.json();
  return { a, b };
}</code></pre>

<h2>Paralelismo com Promise.all + await</h2>
<pre><code>// ❌ Sequencial: 600ms + 600ms = 1200ms
const a = await buscar("/api/a");
const b = await buscar("/api/b");

// ✅ Paralelo: ~600ms
const [a, b] = await Promise.all([
  buscar("/api/a"),
  buscar("/api/b")
]);</code></pre>

<div class="callout callout-tip">
<strong>await em loops:</strong> use <code>for...of</code> quando cada chamada depende da anterior; use <code>Promise.all</code> + <code>map</code> quando as chamadas são independentes.
</div>
`
        },
        {
          id: 'js-erros',
          title: '4. Tratamento de Erros Assíncrono',
          summary: 'try/catch com await, erros customizados e retry.',
          content: `
<h2>Erros em código assíncrono</h2>
<p>Em funções <code>async</code>, o <code>try/catch</code> captura tanto erros síncronos quanto rejeições de <code>await</code>:</p>
<pre><code>async function processar() {
  try {
    const dados = JSON.parse('{"json": "inválido"');  // erro síncrono ✓
    const api   = await fetch("/api/inexistente");    // erro assíncrono ✓
  } catch (erro) {
    console.log(erro.name);     // "SyntaxError" ou "TypeError"
    console.log(erro.message);  // detalhes
    console.log(erro.stack);    // rastro de onde veio
  }
}</code></pre>

<h2>Erros customizados</h2>
<pre><code>class ErroValidacao extends Error {
  constructor(campo, mensagem) {
    super(mensagem);
    this.name = "ErroValidacao";
    this.campo = campo;
  }
}

function validar(usuario) {
  if (!usuario.email) throw new ErroValidacao("email", "E-mail obrigatório");
}

try {
  validar({});
} catch (e) {
  if (e instanceof ErroValidacao) {
    console.log(\`Problema no campo \${e.campo}: \${e.message}\`);
  } else {
    throw e;  // não é meu erro? repasso
  }
}</code></pre>

<h2>Padrão retry com backoff</h2>
<pre><code>async function comRetry(fn, tentativas = 3) {
  for (let i = 1; i &lt;= tentativas; i++) {
    try {
      return await fn();
    } catch (erro) {
      const ultima = i === tentativas;
      console.log(\`Tentativa \${i} falhou\${ultima ? " — desistindo" : ", tentando de novo..."}\`);
      if (ultima) throw erro;
      await new Promise(r =&gt; setTimeout(r, 300 * i)); // espera crescente
    }
  }
}

const dados = await comRetry(() =&gt; fetch("/api/instavel").then(r =&gt; r.json()));</code></pre>

<h2>Verificando respostas HTTP</h2>
<pre><code>// fetch NÃO lança erro para 404/500! Só falha na rede.
const resposta = await fetch("/api/usuario/999");

if (!resposta.ok) {                          // ok = status 200-299
  throw new Error(\`HTTP \${resposta.status}: \${resposta.statusText}\`);
}</code></pre>

<div class="callout callout-warning">
<strong>Nunca deixe promises órfãs:</strong> toda promise que pode rejeitar merece um <code>.catch()</code> ou um <code>try/catch</code> com <code>await</code>. Rejeição não tratada = erro silencioso em produção.
</div>
`
        },
        {
          id: 'js-fetch-api',
          title: '5. Fetch e Consumo de APIs REST',
          summary: 'GET, POST, PUT e DELETE com fetch na prática.',
          content: `
<h2>O fetch: sua janela para a internet</h2>
<p><code>fetch()</code> é a API nativa do navegador para requisições HTTP. Ela devolve uma promise com a resposta.</p>

<h3>GET — buscar dados</h3>
<pre><code>async function listarProdutos() {
  const resposta = await fetch("https://api.exemplo.dev/produtos");

  if (!resposta.ok) throw new Error(\`HTTP \${resposta.status}\`);

  const produtos = await resposta.json();  // converte o corpo JSON
  return produtos;
}</code></pre>

<h3>POST — criar dados</h3>
<pre><code>async function criarProduto(produto) {
  const resposta = await fetch("https://api.exemplo.dev/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token      // autenticação
    },
    body: JSON.stringify(produto)             // objeto → JSON string
  });

  if (!resposta.ok) {
    const detalhes = await resposta.json();   // APIs retornam o motivo
    throw new Error(detalhes.mensagem || "Falha ao criar");
  }

  return resposta.json();  // geralmente devolve o recurso criado
}

await criarProduto({ nome: "Teclado", preco: 199.9 });</code></pre>

<h3>PUT e DELETE</h3>
<pre><code>// Atualizar (substitui o recurso):
await fetch("/api/produtos/42", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "Teclado Pro", preco: 249.9 })
});

// Remover:
const r = await fetch("/api/produtos/42", { method: "DELETE" });
if (r.status === 204) console.log("Removido!");</code></pre>

<h3>Enviando dados de formulário e query strings</h3>
<pre><code>// Query params na URL:
const busca = "?ordenar=preco&amp;limite=10";
fetch("/api/produtos" + busca);

// FormData (upload/multipart):
const fd = new FormData();
fd.append("foto", inputArquivo.files[0]);
fetch("/api/upload", { method: "POST", body: fd });
// FormData define o Content-Type automaticamente</code></pre>

<div class="callout callout-tip">
<strong>AbortController</strong> cancela requisições (ex.: usuário fechou a busca): crie o controller, passe <code>signal</code> ao fetch e chame <code>controller.abort()</code> quando precisar.
</div>
`
        },
        {
          id: 'js-localstorage',
          title: '6. LocalStorage e Persistência',
          summary: 'Guardar dados no navegador sem backend.',
          content: `
<h2>Os três tipos de storage</h2>
<ul>
  <li><code>localStorage</code> — guarda <strong>para sempre</strong> (até o usuário limpar). ~5-10MB.</li>
  <li><code>sessionStorage</code> — guarda até a <strong>aba fechar</strong>.</li>
  <li><code>document.cookie</code> — pequeno, enviado ao servidor a cada requisição.</li>
</ul>
<p>Todos guardam <strong>apenas strings</strong> — serialize com JSON:</p>

<pre><code>// Salvar objeto → string JSON
const preferencias = { tema: "dark", idioma: "pt-BR" };
localStorage.setItem("preferencias", JSON.stringify(preferencias));

// Ler string JSON → objeto
const salvas = JSON.parse(localStorage.getItem("preferencias"));
console.log(salvas.tema);  // "dark"

// Remover
localStorage.removeItem("preferencias");
// localStorage.clear();  // apaga TUDO do seu site</code></pre>

<h2>Camada de storage segura</h2>
<pre><code>const Store = {
  get(chave, padrao = null) {
    try {
      const valor = localStorage.getItem(chave);
      return valor === null ? padrao : JSON.parse(valor);
    } catch {
      return padrao;   // JSON inválido ou storage cheio
    }
  },

  set(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
      return true;
    } catch {
      return false;    // modo privado, quota excedida...
    }
  }
};

// Uso:
const score = Store.get("recorde", 0);
Store.set("recorde", Math.max(score, 1500));</code></pre>

<div class="callout callout-warning">
<strong>Segurança:</strong> NUNCA armazene senhas, tokens sensíveis ou dados pessoais em localStorage — qualquer script da página lê tudo. Use para preferências, rascunhos e estado de UI. Dados críticos pertencem ao backend (cookies httpOnly).
</div>
`
        }
      ]
    },
    {
      id: 'js-arrays',
      title: 'Array Methods Avançados',
      description: 'map, filter, reduce e companhia: programação funcional em JS.',
      lessons: [
        {
          id: 'js-for-each',
          title: '1. forEach e map',
          summary: 'Iterar e transformar arrays sem loops manuais.',
          content: `
<h2>forEach — executar algo para cada item</h2>
<pre><code>const linguagens = ["JavaScript", "Python", "Rust"];

linguagens.forEach((linguagem, indice) =&gt; {
  console.log(\`\${indice}: \${linguagem}\`);
});
// 0: JavaScript
// 1: Python
// 2: Rust</code></pre>
<p><code>forEach</code> executa e pronto — <strong>não retorna nada</strong> e não pode ser interrompido (use <code>for...of</code> + <code>break</code> se precisar parar).</p>

<h2>map — transformar cada item em outro</h2>
<p><code>map</code> cria um <strong>array novo</strong> com o mesmo tamanho, aplicando uma transformação. Ele nunca altera o array original:</p>
<pre><code>const numeros = [1, 2, 3, 4];

const dobrados = numeros.map(n =&gt; n * 2);      // [2, 4, 6, 8]
const textos   = numeros.map(n =&gt; \`R$ \${n}\`);  // ["R$ 1", "R$ 2", ...]

// O uso mais comum: extrair um campo de objetos
const usuarios = [
  { nome: "Ana",  idade: 25 },
  { nome: "Bia",  idade: 30 }
];
const nomes = usuarios.map(u =&gt; u.nome);      // ["Ana", "Bia"]</code></pre>

<h2>map com objetos complexos</h2>
<pre><code>const produtos = [
  { nome: "Teclado", preco: 200 },
  { nome: "Mouse",   preco: 90 }
];

const comDesconto = produtos.map(p =&gt; ({
  ...p,                        // mantém as outras propriedades
  preco: p.preco * 0.9,        // aplica 10% off
  promocao: true               // adiciona campo novo
}));
// [{nome:"Teclado", preco:180, promocao:true}, ...]</code></pre>

<div class="callout callout-tip">
<strong>Escolha certa:</strong> quer <em>fazer algo</em> com cada item (efeito colateral)? <code>forEach</code>. Quer um <em>array transformado</em>? <code>map</code>. Se você escreve <code>arr.map(...)</code> e ignora o retorno, queria <code>forEach</code>.
</div>
`
        },
        {
          id: 'js-filter',
          title: '2. filter, find e findIndex',
          summary: 'Selecionar subconjuntos e localizar itens específicos.',
          content: `
<h2>filter — quem passa no teste?</h2>
<pre><code>const numeros = [12, 5, 8, 130, 44];

const grandes = numeros.filter(n =&gt; n &gt;= 10);   // [12, 130, 44]

// Com objetos (o caso real mais comum):
const produtos = [
  { nome: "Teclado", preco: 200, estoque: 3 },
  { nome: "Mouse",   preco: 90,  estoque: 0 },
  { nome: "Monitor", preco: 900, estoque: 7 }
];

const disponiveis = produtos.filter(p =&gt; p.estoque &gt; 0);
const baratos = produtos.filter(p =&gt; p.preco &lt; 100);  // [Mouse...]</code></pre>
<p><code>filter</code> sempre devolve um array (possivelmente vazio). A callback recebe <code>(item, indice, array)</code> e deve retornar truthy/falsy.</p>

<h2>Encadeando filter + map</h2>
<pre><code>// Nomes dos produtos em estoque, em maiúsculas:
const vitrine = produtos
  .filter(p =&gt; p.estoque &gt; 0)
  .map(p =&gt; p.nome.toUpperCase());
// ["TECLADO", "MONITOR"]</code></pre>

<h2>find e findIndex — o primeiro que casa</h2>
<pre><code>const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bia" }
];

const bia = usuarios.find(u =&gt; u.nome === "Bia");     // o objeto (ou undefined)
const pos = usuarios.findIndex(u =&gt; u.id === 2);      // 1 (ou -1)</code></pre>

<h2>some e every — testes coletivos</h2>
<pre><code>const notas = [7, 5, 9, 4];

notas.some(n =&gt; n &lt; 5);    // true  (existe algum?)
notas.every(n =&gt; n &gt;= 4);   // true  (todos passam?)
notas.some(n =&gt; n === 10);  // false</code></pre>

<div class="callout callout-tip">
<strong>Existe vs encontrar:</strong> use <code>includes</code> para valores primitivos, <code>some</code> para condições em objetos e <code>find</code> quando precisa do item inteiro.
</div>
`
        },
        {
          id: 'js-reduce',
          title: '3. reduce — O Canivete Suíço',
          summary: 'Reduzir arrays a qualquer coisa: somas, agrupamentos e contagens.',
          content: `
<h2>A assinatura do reduce</h2>
<pre><code>array.reduce((acumulador, item) =&gt; novoAcumulador, valorInicial);</code></pre>
<p>O <code>acumulador</code> viaja de iteração em iteração carregando o "estado" até agora. No fim, <code>reduce</code> devolve esse acumulador final.</p>

<h3>Exemplo clássico: somar</h3>
<pre><code>const precos = [200, 90, 900];

const total = precos.reduce((soma, preco) =&gt; soma + preco, 0);
// passo 1: soma=0,   preco=200 → 200
// passo 2: soma=200, preco=90  → 290
// passo 3: soma=290, preco=900 → 1190</code></pre>
<p><strong>Sempre passe o valor inicial</strong> (aqui, <code>0</code>). Sem ele, o reduce usa o primeiro item — e quebra com arrays vazios.</p>

<h3>Média, máximo e mínimo</h3>
<pre><code>const notas = [8, 7, 10, 6];

const media = notas.reduce((s, n) =&gt; s + n, 0) / notas.length;

const maior = notas.reduce((max, n) =&gt; n &gt; max ? n : max, -Infinity);</code></pre>

<h3>Contar frequências (agrupamento)</h3>
<pre><code>const votos = ["js", "py", "js", "rust", "js", "py"];

const contagem = votos.reduce((acc, voto) =&gt; {
  acc[voto] = (acc[voto] || 0) + 1;
  return acc;
}, {});
// { js: 3, py: 2, rust: 1 }</code></pre>

<h3>Achatar arrays de arrays</h3>
<pre><code>const matriz = [[1, 2], [3, 4], [5]];
const plano = matriz.reduce((acc, sub) =&gt; [...acc, ...sub], []);
// [1, 2, 3, 4, 5]  (ou simplesmente: matriz.flat())</code></pre>

<h3>Reduce que retorna objeto: relatório completo</h3>
<pre><code>const vendas = [
  { produto: "A", valor: 100 },
  { produto: "B", valor: 250 },
  { produto: "A", valor: 150 }
];

const relatorio = vendas.reduce((acc, v) =&gt; {
  acc.total += v.valor;
  acc.porProduto[v.produto] = (acc.porProduto[v.produto] || 0) + v.valor;
  return acc;
}, { total: 0, porProduto: {} });
// { total: 500, porProduto: { A: 250, B: 250 } }</code></pre>

<div class="callout callout-tip">
<strong>Quando NÃO usar:</strong> se só precisa iterar (<code>forEach</code>), transformar (<code>map</code>) ou filtrar (<code>filter</code>), use-os — são mais legíveis. <code>reduce</code> brilha quando o resultado é um <em>valor acumulado diferente de array</em>.
</div>
`
        },
        {
          id: 'js-sort-e-imutabilidade',
          title: '4. sort e Imutabilidade',
          summary: 'Ordenar sem mutar e entender métodos que alteram o original.',
          content: `
<h2>O perigo do sort</h2>
<p><code>sort()</code> <strong>altera o array original</strong> e, por padrão, ordena convertendo tudo para string (bug clássico!):</p>
<pre><code>const numeros = [100, 1, 20, 3];
numeros.sort();
console.log(numeros);  // [1, 100, 20, 3]  ← ordem ALFABÉTICA de strings!

// Correto: forneça uma função comparadora (negativo/0/positivo)
const certo = [...numeros].sort((a, b) =&gt; a - b);   // [1, 3, 20, 100]
const desc  = [...numeros].sort((a, b) =&gt; b - a);   // [100, 20, 3, 1]</code></pre>

<h2>Ordenando objetos</h2>
<pre><code>const produtos = [
  { nome: "Monitor", preco: 900 },
  { nome: "Mouse",   preco: 90 },
  { nome: "Teclado", preco: 200 }
];

// Por preço (crescente):
const porPreco = [...produtos].sort((a, b) =&gt; a.preco - b.preco);

// Por nome (alfabético — use localeCompare para acentos!):
const porNome = [...produtos].sort((a, b) =&gt;
  a.nome.localeCompare(b.nome, "pt-BR")
);</code></pre>

<h2>Métodos que mutam vs imutáveis</h2>
<table>
<tr><th>Mutam o original</th><th>Retornam algo novo</th></tr>
<tr><td><code>push</code>, <code>pop</code></td><td><code>concat</code>, <code>slice</code></td></tr>
<tr><td><code>shift</code>, <code>unshift</code></td><td><code>map</code>, <code>filter</code></td></tr>
<tr><td><code>splice</code>, <code>sort</code></td><td><code>[...arr]</code>, <code>flat</code></td></tr>
<tr><td><code>reverse</code></td><td><code>toSorted</code>, <code>toReversed</code> (ES2023)</td></tr>
</table>

<h2>Removendo itens sem splice (padrão moderno)</h2>
<pre><code>const tarefas = [{ id: 1 }, { id: 2 }, { id: 3 }];

// Remover id=2 criando um NOVO array:
const restantes = tarefas.filter(t =&gt; t.id !== 2);

// Atualizar id=3 sem tocar no original:
const atualizadas = tarefas.map(t =&gt;
  t.id === 3 ? { ...t, feita: true } : t
);</code></pre>

<div class="callout callout-tip">
<strong>Por que imutabilidade importa:</strong> frameworks como React comparam referências para decidir o que re-renderizar. Se você muta o array, a referência não muda e a UI não atualiza. Sempre crie versões novas.
</div>
`
        },
        {
          id: 'js-metodos-extras',
          title: '5. flat, flatMap e Arrays de Mundo Real',
          summary: 'Encadeamentos avançados e técnicas de pipeline.',
          content: `
<h2>flat e flatMap</h2>
<pre><code>const aninhado = [1, [2, 3], [4, [5, 6]]];

aninhado.flat();      // [1, 2, 3, 4, [5, 6]]  — 1 nível
aninhado.flat(2);     // [1, 2, 3, 4, 5, 6]    — 2 níveis
aninhado.flat(Infinity); // achata tudo

// flatMap = map + flat(1) em uma passada:
const frases = ["olá mundo", "mono code"];
const palavras = frases.flatMap(f =&gt; f.split(" "));
// ["olá", "mundo", "mono", "code"]</code></pre>

<h2>Array.from e Array.of</h2>
<pre><code>// Criar array a partir de iteráveis:
Array.from("abc");            // ["a", "b", "c"]
Array.from(document.querySelectorAll("li"));

// Com função mapeadora (ótimo para sequências):
Array.from({ length: 5 }, (_, i) =&gt; i * i);
// [0, 1, 4, 9, 16]</code></pre>

<h2>Encadeamento real: pipeline de dados</h2>
<pre><code>const pedidos = [
  { cliente: "Ana",  itens: [{ produto: "A", valor: 100 }, { produto: "B", valor: 50 }], pago: true },
  { cliente: "Bia",  itens: [{ produto: "A", valor: 100 }], pago: false },
  { cliente: "Ana",  itens: [{ produto: "C", valor: 200 }], pago: true }
];

// Quanto a Ana (somente pagos) gastou no total?
const totalAna = pedidos
  .filter(p =&gt; p.cliente === "Ana" &amp;&amp; p.pago)   // pedidos da Ana pagos
  .flatMap(p =&gt; p.itens)                          // achata os itens
  .map(item =&gt; item.valor)                         // só os valores
  .reduce((soma, v) =&gt; soma + v, 0);               // soma: 350</code></pre>

<h2>Destructuring em funções de array</h2>
<pre><code>const pontos = [[1, 2], [3, 4], [5, 6]];

const somas = pontos.map(([x, y]) =&gt; x + y);   // [3, 7, 11]</code></pre>

<div class="callout callout-tip">
<strong>Legibilidade:</strong> quebre pipelines longos em variáveis intermediárias com nomes descritivos. Cinco <code>.map</code> encadeados sem comentário viram um enigma em três meses.
</div>
`
        },
        {
          id: 'js-pratica-arrays',
          title: '6. Prática: Análise de Dados com Arrays',
          summary: 'Mini-projeto transformando dados brutos em relatório.',
          content: `
<h2>O desafio</h2>
<p>Dado um histórico de vendas, gerar um relatório com total, ticket médio, produto campeão e ranking. Tudo com os métodos que você aprendeu:</p>

<pre><code>const vendas = [
  { produto: "Teclado", valor: 200, data: "2026-01-05" },
  { produto: "Mouse",   valor: 90,  data: "2026-01-05" },
  { produto: "Teclado", valor: 180, data: "2026-01-06" },
  { produto: "Monitor", valor: 900, data: "2026-01-07" },
  { produto: "Mouse",   valor: 95,  data: "2026-01-07" },
  { produto: "Teclado", valor: 210, data: "2026-01-08" }
];

// 1. Total faturado:
const total = vendas.reduce((s, v) =&gt; s + v.valor, 0);   // 1675

// 2. Ticket médio por venda:
const media = total / vendas.length;                     // ~279

// 3. Faturamento por produto (reduce agrupando):
const porProduto = vendas.reduce((acc, v) =&gt; {
  acc[v.produto] = (acc[v.produto] || 0) + v.valor;
  return acc;
}, {});
// { Teclado: 590, Mouse: 185, Monitor: 900 }

// 4. Ranking (objeto → array → sort):
const ranking = Object.entries(porProduto)
  .map(([produto, valor]) =&gt; ({ produto, valor }))
  .sort((a, b) =&gt; b.valor - a.valor);
// [{Monitor, 900}, {Teclado, 590}, {Mouse, 185}]

// 5. Campeão:
const campeao = ranking[0].produto;                      // "Monitor"

// 6. Relatório formatado:
console.log("=== RELATÓRIO DE VENDAS ===");
console.log(\`Total: R$ \${total}\`);
console.log(\`Média por venda: R$ \${media.toFixed(2)}\`);
ranking.forEach((r, i) =&gt;
  console.log(\`\${i + 1}º \${r.produto}: R$ \${r.valor}\`)
);</code></pre>

<h2>Técnicas usadas</h2>
<ul>
  <li><code>reduce</code> com objeto acumulador → agrupamento por chave.</li>
  <li><code>Object.entries</code> → transforma objeto em pares <code>[chave, valor]</code>.</li>
  <li><code>map</code> com destructuring <code>([produto, valor])</code> → objetos tipados.</li>
  <li><code>sort</code> com comparador numérico → ranking correto.</li>
</ul>

<div class="callout callout-tip">
<strong>Exercício:</strong> estenda o relatório com o dia de maior faturamento (dica: agrupe por <code>data</code> e ordene). Depois refatore tudo em funções puras: <code>totalizar(vendas)</code>, <code>agruparPor(vendas, chave)</code>, <code>rankear(grupos)</code>.
</div>
`
        }
      ]
    },
    {
      id: 'js-classe',
      title: 'Programação Orientada a Objetos',
      description: 'Classes, herança, polimorfismo e composição em JavaScript.',
      lessons: [
        {
          id: 'js-class-syntax',
          title: '1. Sintaxe de Classes',
          summary: 'class, constructor, métodos e instâncias.',
          content: `
<h2>Classes: moldes de objetos</h2>
<p>Uma classe é um <strong>molde</strong> para criar objetos com a mesma forma. Cada objeto criado a partir dela é uma <strong>instância</strong>.</p>
<pre><code>class Pessoa {
  // roda ao criar instância com new
  constructor(nome, idade) {
    this.nome = nome;      // propriedades da instância
    this.idade = idade;
  }

  // métodos — funções disponíveis em todas as instâncias
  cumprimentar() {
    return \`Olá, eu sou \${this.nome}\`;
  }

  fazerAniversario() {
    this.idade++;
    return this;
  }
}

const ana = new Pessoa("Ana", 25);
console.log(ana.cumprimentar());   // "Olá, eu sou Ana"
ana.fazerAniversario();
console.log(ana.idade);            // 26

// Instâncias são independentes:
const bia = new Pessoa("Bia", 30);
console.log(bia.idade);            // 30 (a festa da Ana não afeta a Bia)</code></pre>

<h2>Campos de classe e privados</h2>
<pre><code>class Conta {
  saldo = 0;                // campo com valor inicial (sem this)
  #senha;                   // # = PRIVADO de verdade (ES2022)

  constructor(senha) {
    this.#senha = senha;
  }

  get saldoAtual() {        // getter: acessa como propriedade
    return this.saldo;
  }

  verificarSenha(tentativa) {
    return this.#senha === tentativa;  // ok: dentro da classe
  }
}

const conta = new Conta("123");
// conta.#senha → SyntaxError! Privado não acessa de fora.
console.log(conta.saldoAtual);  // 0</code></pre>

<div class="callout callout-tip">
<strong>Classe vs factory:</strong> classes são ótimas quando existe hierarquia e conceitos de domínio (Usuario, Pedido, Produto). Para agrupar funções relacionadas, objetos simples ou módulos costumam bastar.
</div>
`
        },
        {
          id: 'js-extends',
          title: '2. Herança e Polimorfismo',
          summary: 'extends, super e sobrescrita de métodos.',
          content: `
<h2>Herança com extends</h2>
<p>Herança permite criar classes especializadas que <strong>herdam</strong> comportamento da classe pai:</p>
<pre><code>class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    return "algum som genérico";
  }
}

class Cachorro extends Animal {
  emitirSom() {              // sobrescreve o método do pai
    return "Au au!";
  }

  buscarBola() {             // método exclusivo do filho
    return \`\${this.nome} trouxe a bola!\`;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.emitirSom());  // "Au au!"  ← polimorfismo!
console.log(rex.buscarBola()); // "Rex trouxe a bola!"

// Rex É um Animal (herda tudo):
console.log(rex instanceof Cachorro);  // true
console.log(rex instanceof Animal);    // true</code></pre>

<h2>super — chamando o pai</h2>
<pre><code>class Gato extends Animal {
  constructor(nome, vidas) {
    super(nome);        // OBRIGATÓRIO antes de usar this!
    this.vidas = vidas;
  }

  emitirSom() {
    return super.emitirSom() + " (miau)";
  }
}</code></pre>

<h2>Polimorfismo em ação</h2>
<pre><code>const animais = [new Cachorro("Rex"), new Gato("Mia", 7)];

// Mesma chamada, comportamentos diferentes:
animais.forEach(a =&gt; console.log(a.nome + ": " + a.emitirSom()));
// Rex: Au au!
// Mia: algum som genérico (miau)</code></pre>

<div class="callout callout-warning">
<strong>Composição &gt; herança:</strong> heranças profundas (3+ níveis) viram pesadelo. Se a relação não for "É UM" (Cachorro É UM Animal), prefira composição: <code>class Carrinho { constructor() { this.itens = []; } }</code> — Carrinho TEM itens.
</div>
`
        },
        {
          id: 'js-getters-setters',
          title: '3. Getters, Setters e Propriedades Computadas',
          summary: 'Acesso controlado com get e set.',
          content: `
<h2>Getters e setters</h2>
<p>Permitem interceptar leitura e escrita de propriedades — validação, cálculo e proteção sem mudar a interface:</p>
<pre><code>class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;     // chama o setter abaixo!
  }

  get preco() {
    return this._preco;
  }

  set preco(valor) {
    if (typeof valor !== "number" || valor &lt; 0) {
      throw new Error("Preço deve ser um número positivo");
    }
    this._preco = valor;    // convenção: _prefixo = "interno"
  }

  // getter computado: propriedade calculada on-the-fly
  get precoComDesconto() {
    return this._preco * 0.9;
  }
}

const p = new Produto("Teclado", 200);
console.log(p.precoComDesconto);  // 180 (calculado, não armazenado)
// p.preco = -10 → Error! Validação protege o estado</code></pre>

<h2>Casos de uso reais</h2>
<pre><code>class Temperatura {
  constructor(celsius) { this.celsius = celsius; }

  get fahrenheit() {
    return this.celsius * 9/5 + 32;
  }

  set fahrenheit(f) {
    this.celsius = (f - 32) * 5/9;   // grava convertendo!
  }
}

const t = new Temperatura(100);
console.log(t.fahrenheit);  // 212
t.fahrenheit = 32;          // usa o setter
console.log(t.celsius);     // 0</code></pre>

<h2>static: membros da classe</h2>
<pre><code>class Calculadora {
  static PI = 3.14159;

  static areaCirculo(raio) {
    return this.PI * raio ** 2;   // this = a classe
  }
}

// Acesso direto pela classe, sem instância:
console.log(Calculadora.areaCirculo(2));  // 12.57

// Útil para fábricas e utilitários:
class Usuario {
  constructor(dados) { Object.assign(this, dados); }

  static anonimo() {
    return new Usuario({ nome: "Anônimo" });
  }
}</code></pre>
`
        },
        {
          id: 'js-instanceof-private',
          title: '4. instanceof, static e Privados #',
          summary: 'Ferramentas modernas de encapsulamento.',
          content: `
<h2>instanceof — quem é quem</h2>
<pre><code>class Animal {}
class Cachorro extends Animal {}

const rex = new Cachorro();

rex instanceof Cachorro;  // true (é da classe)
rex instanceof Animal;    // true (herda dela)
rex instanceof Array;     // false

// Uso real: validar tipos de entrada:
function tratarErro(erro) {
  if (erro instanceof TypeError)       return "Bug de tipo!";
  if (erro instanceof RangeError)      return "Fora do intervalo!";
  return "Erro desconhecido";
}

// Com objetos literais NÃO funciona (não têm classe):
({}) instanceof Object;  // true — mas todos objetos herdam de Object</code></pre>

<h2>Membros estáticos em detalhe</h2>
<pre><code>class Registro {
  static total = 0;              // pertence à CLASSE, não às instâncias
  static #contadorPrivado = 0;  // estático + privado

  constructor(nome) {
    this.nome = nome;
    Registro.total++;            // conta cada instância criada
  }

  static get contagem() {
    return \`Total criado: \${Registro.total}\`;
  }
}

new Registro("A"); new Registro("B");
console.log(Registro.contagem);  // "Total criado: 2"</code></pre>

<h2>Privados # em profundidade</h2>
<pre><code>class Cofre {
  #combinacao;
  #aberto = false;

  constructor(combinacao) {
    this.#combinacao = combinacao;
  }

  #validar(tentativa) {          // método privado
    return tentativa === this.#combinacao;
  }

  abrir(tentativa) {
    this.#aberto = this.#validar(tentativa);
    return this.#aberto ? "Cofre aberto!" : "Combinacão errada";
  }
}

const cofre = new Cofre(1234);
cofre.abrir(9999);   // "Combinação errada"
cofre.abrir(1234);   // "Cofre aberto!"
// cofre.#combinacao → ERRO de sintaxe, nem fora da classe se fala</code></pre>

<div class="callout callout-tip">
<strong>Encapsulamento de verdade:</strong> antes do <code>#</code>, devs usavam <code>_convencao</code> (respeito por acordo). O <code>#</code> é privacidade <strong>garantida pela linguagem</strong> — use-o para estado interno que ninguém de fora deve mexer.
</div>
`
        },
        {
          id: 'js-composicao',
          title: '5. Composição: A Alternativa Moderna',
          summary: 'Compondo comportamentos em vez de herdar.',
          content: `
<h2>O problema da herança rígida</h2>
<p>Herança funciona quando a hierarquia é limpa. Mas experimente modelar "Pato de Brinquedo" em <code>Ave → Pato → PatoDeBrinquedo</code> (que nada e grasna mas <em>não voa nem põe ovos</code>)... a árvore quebra. Regra de bolso: <strong>herde o que o objeto É, componha o que ele FAZ</strong>.</p>

<h2>Composição com funções</h2>
<pre><code>// Capacidades como funções independentes:
const podeNadar = (obj) =&gt; ({
  ...obj,
  nadar: () =&gt; \`\${obj.nome} está nadando\`
});

const podeVoar = (obj) =&gt; ({
  ...obj,
  voar: () =&gt; \`\${obj.nome} está voando\`
});

const podeGrasnar = (obj) =&gt; ({
  ...obj,
  grasnar: () =&gt; "Quack!"
});

// Montando objetos com as capacidades que fazem sentido:
const patoReal = podeGrasnar(podeVoar(podeNadar({ nome: "Donald" })));
const patoBorracha = podeGrasnar(podeNadar({ nome: "Bolha" }));

console.log(patoReal.voar());      // "Donald está voando"
console.log(patoBorracha.grasnar()); // "Quack!"
// patoBorracha.voar → undefined. Brinquedo não voa. Correto!</code></pre>

<h2>Composição com classes: delegação</h2>
<pre><code>class Motor {
  constructor(potencia) { this.potencia = potencia; }
  ligar() { return "Motor ligado"; }
}

class Carro {
  constructor() {
    this.motor = new Motor(150);   // Carro TEM um motor
  }

  ligar() {
    return \`\${this.motor.ligar()} | Carro pronto!\`;  // delega
  }
}</code></pre>

<h2>Comparando as abordagens</h2>
<table>
<tr><th>Herança (extends)</th><th>Composição (has-a)</th></tr>
<tr><td>"É UM" — Cachorro é Animal</td><td>"TEM UM" — Carro tem Motor</td></tr>
<tr><td>Acoplada ao pai</td><td>Peças intercambiáveis</td></tr>
<tr><td>Boa para hierarquias estáveis</td><td>Boa para comportamentos opcionais</td></tr>
</table>

<div class="callout callout-tip">
<strong>Princípio:</strong> "Favoreça composição sobre herança" (Gang of Four, 1994). Em JS, com closures e funções de primeira classe, composição é natural e elegante.
</div>
`
        },
        {
          id: 'js-poo-projeto',
          title: '6. Projeto: Sistema de Biblioteca',
          summary: 'POO aplicada em um mini-sistema com regras de negócio.',
          content: `
<h2>O projeto</h2>
<p>Modelar uma biblioteca: livros, usuários e empréstimos — com regras de negócio reais.</p>

<pre><code>class Livro {
  #disponivel = true;

  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  get disponivel() { return this.#disponivel; }

  marcarEmprestado() {
    if (!this.#disponivel) throw new Error("Livro já emprestado");
    this.#disponivel = false;
  }

  marcarDevolvido() { this.#disponivel = true; }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.emprestimos = [];
  }

  get livrosEmprestados() {
    return this.emprestimos.length;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
    this.#configurar();
  }

  #configurar() { this.limite = 3; }   // método privado

  cadastrarLivro(titulo, autor) {
    const livro = new Livro(titulo, autor);
    this.livros.push(livro);
    return livro;   // method chaining-friendly
  }

  emprestar(livro, usuario) {
    // Regras de negócio centralizadas e explícitas:
    if (!livro.disponivel)
      return { ok: false, motivo: "Livro indisponível" };
    if (usuario.livrosEmprestados &gt;= this.limite)
      return { ok: false, motivo: \`Limite de \${this.limite} livros atingido\` };

    livro.marcarEmprestado();
    usuario.emprestimos.push({
      livro,
      data: new Date(),
      devolvido: false
    });
    return { ok: true };
  }

  devolver(livro, usuario) {
    const registro = usuario.emprestimos.find(
      e =&gt; e.livro === livro &amp;&amp; !e.devolvido
    );
    if (!registro) return { ok: false, motivo: "Empréstimo não encontrado" };

    registro.devolvido = true;
    livro.marcarDevolvido();
    return { ok: true };
  }

  static buscarPorTitulo(livros, termo) {
    return livros.filter(l =&gt;
      l.titulo.toLowerCase().includes(termo.toLowerCase())
    );
  }
}

// ---- Usando o sistema ----
const biblioteca = new Biblioteca();
const dominado = biblioteca.cadastrarLivro("JS Dominado", "Ada");
const clean = biblioteca.cadastrarLivro("Código Limpo", "Bob");

const ana = new Usuario("Ana");
console.log(biblioteca.emprestar(dominado, ana));  // { ok: true }
console.log(biblioteca.emprestar(dominado, ana));  // { ok: false, motivo: ... }
console.log(biblioteca.devolver(dominado, ana));   // { ok: true }</code></pre>

<div class="callout callout-tip">
<strong>Perceba:</strong> cada classe tem UMA responsabilidade (Livro guarda estado do livro, Biblioteca orquestra regras), estado interno é privado (#) e as regras de negócio vivem em métodos com nomes de domínio. É assim que POO escala no mundo real.
</div>
`
        }
      ]
    },
    {
      id: 'js-erros-depuracao',
      title: 'Erros, DevTools e Depuração',
      description: 'Encontrar e corrigir bugs como um profissional.',
      lessons: [
        {
          id: 'js-tipos-erro',
          title: '1. Os 7 Tipos de Erro Nativo',
          summary: 'Conhecer os erros é metade da depuração.',
          content: `
<h2>Erros nativos do JavaScript</h2>
<pre><code>// TypeError — valor com tipo errado ou inexistente:
null.propriedade;            // TypeError: Cannot read properties of null
undefined();                 // TypeError: x is not a function

// ReferenceError — variável não existe:
console.log(naoExiste);      // ReferenceError: naoExiste is not defined

// SyntaxError — código inválido (detectado ao carregar):
// const 123 = "x";          // SyntaxError: Invalid or unexpected token

// RangeError — valor fora do intervalo permitido:
new Array(-1);               // RangeError: Invalid array length
(1).toFixed(101);            // RangeError: toFixed() digits argument out of range

// URIError — encode/decode malformado:
decodeURIComponent("%");     // URIError: URI malformed</code></pre>

<h2>Criando e lançando erros</h2>
<pre><code>function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("dividir exige dois números");
  }
  if (b === 0) {
    throw new RangeError("divisão por zero");
  }
  return a / b;
}

dividir(10, "2");  // TypeError: dividir exige dois números</code></pre>

<h2>Lendo a stack trace</h2>
<pre><code>Error: algo deu muito errado
    at funcaoC (app.js:15:11)     ← onde o erro NASCEU (leia de cima!)
    at funcaoB (app.js:22:5)      ← quem chamou funcaoC
    at funcaoA (app.js:30:3)      ← quem chamou funcaoB</code></pre>
<p>A <strong>stack trace</strong> é o mapa da cadeia de chamadas. Comece lendo a primeira linha do topo (origem) e desça para entender o caminho até lá.</p>

<div class="callout callout-tip">
<strong>ERROde ouro:</strong> <code>Cannot read properties of undefined (reading 'x')</code> significa que você tentou <code>algo.x</code> onde <code>algo</code> era undefined. O jeito mais rápido de resolver: <code>console.log</code> logo antes da linha do erro para ver o que chegou ali.
</div>
`
        },
        {
          id: 'js-try-catch',
          title: '2. try/catch/finally na Prática',
          summary: 'Estratégias de captura e recuperação de erros.',
          content: `
<h2>A anatomia do try/catch</h2>
<pre><code>try {
  // código suspeito
  const dados = JSON.parse(textoRecebido);
  processar(dados);
} catch (erro) {
  // só roda SE algo explodir no try
  console.error("Falha no processamento:", erro.message);
} finally {
  // roda SEMPRE (com erro ou não) — ideal para limpeza
  esconderCarregando();
}</code></pre>

<h2>Erros não devem ser engolidos</h2>
<pre><code>// ❌ PÉSSIMO: erro engolido, app falha em silêncio
try { salvarPreferencias(); } catch (e) {}

// ✅ BOM: captura, registra e decide o que fazer
try {
  salvarPreferencias();
} catch (erro) {
  console.error("Preferências não salvas:", erro);
  mostrarAviso("Preferências não foram salvas nesta sessão.");
  // app continua funcional — degrade gracioso
}</code></pre>

<h2>Captura seletiva</h2>
<pre><code>try {
  await processarArquivo(caminho);
} catch (erro) {
  if (erro.code === "ENOENT") {
    return "Arquivo não encontrado — verifique o caminho";
  }
  if (erro instanceof SyntaxError) {
    return "Arquivo corrompido (JSON inválido)";
  }
  throw erro;   // desconhecido? não é meu problema — repasso
}</code></pre>

<h2>Padrão Result (sem try/catch em toda parte)</h2>
<pre><code>function seguro(fn) {
  try {
    return { ok: true, valor: fn() };
  } catch (erro) {
    return { ok: false, erro };
  }
}

const r = seguro(() =&gt; JSON.parse("{inv"));
r.ok ? usar(r.valor) : tratar(r.erro);</code></pre>

<div class="callout callout-warning">
<strong>try/catch não pega assíncrono "solto":</strong> callbacks dentro de setTimeout/promises que explodem fora do bloco não são capturadas. Coloque o <code>await</code> (e a promise inteira) DENTRO do try.
</div>
`
        },
        {
          id: 'js-debugging',
          title: '3. Depuração com DevTools',
          summary: 'Breakpoints, watch e step-by-step como profissional.',
          content: `
<h2>Além do console.log</h2>
<p><code>console.log</code> resolve 80% dos casos, mas breakpoints resolvem os outros 20% — e mais rápido.</p>

<h2>Console turbinado</h2>
<pre><code>// Variantes úteis do console:
console.table(produtos);              // tabela interativa de arrays/objetos
console.group("Fluxo de checkout");   // agrupa logs
  console.log("validando carrinho...");
console.groupEnd();
console.time("busca");                // cronômetro
  realizarBusca();
console.timeEnd("busca");             // "busca: 245ms"
console.trace();                      // mostra a stack atual
console.dir(elemento);                // inspeciona objeto DOM</code></pre>

<h2>Breakpoints</h2>
<ol>
  <li>Abra o DevTools (F12) → aba <strong>Sources</strong>.</li>
  <li>Encontre o arquivo e clique no número da linha → <strong>breakpoint</strong> (bolinha azul).</li>
  <li>Dispare o código (clique no botão, etc.) — a execução <strong>pausa</strong> na linha.</li>
  <li>Inspecione tudo: passe o mouse sobre variáveis, veja o painel <strong>Scope</strong>.</li>
</ol>

<h2>Controles de execução</h2>
<ul>
  <li><strong>Resume (F8):</strong> continua até o próximo breakpoint.</li>
  <li><strong>Step over (F10):</strong> executa a linha atual sem entrar em funções.</li>
  <li><strong>Step into (F11):</strong> entra DENTRO da função chamada.</li>
  <li><strong>Step out (Shift+F11):</strong> termina a função atual e volta.</li>
</ul>

<h2>Breakpoints avançados</h2>
<pre><code>// debugger: breakpoint no código (só pausa com DevTools aberto)
function calcular(total) {
  debugger;   // pausa AQUI quando o DevTools estiver aberto
  return total * 1.1;
}

// Breakpoints condicionais (clique direito na linha):
// pausa apenas quando total > 1000 — ótimo para casos raros

// Logpoints: loga sem pausar (clique direito → "Add logpoint")

// DOM breakpoints: Elements → botão direito no elemento →
// "Break on subtree modifications" — pega quem mexeu no DOM!</code></pre>

<div class="callout callout-tip">
<strong>Fluxo profissional:</strong> 1) reproduza o bug, 2) isole a região suspeita com breakpoint, 3) inspecione o estado real (não o que você <em>acha</em> que está lá), 4) corrija, 5) teste. O código nunca mente — sua hipótese sim.
</div>
`
        },
        {
          id: 'js-testing',
          title: '4. Testes Automatizados',
          summary: 'Escreva funções testáveis e seus primeiros testes.',
          content: `
<h2>Por que testar?</h2>
<p>Testes automatizados são <strong>redes de segurança executáveis</strong>: rodam em segundos e pegam regressões antes do usuário. A unidade básica é o teste de unidade — isolar uma função e verificar comportamentos.</p>

<h2>Funções testáveis primeiro</h2>
<pre><code>// ❌ Difícil de testar: mistura cálculo com UI
function calcularEMostrar(preco, qty) {
  const total = preco * qty;
  document.querySelector("#total").textContent = total;
}

// ✅ Fácil de testar: pura — recebe, calcula, retorna
function calcularTotal(preco, qty, desconto = 0) {
  if (preco &lt; 0 || qty &lt; 0) throw new Error("Valores negativos");
  return (preco * qty) * (1 - desconto);
}</code></pre>

<h2>Escrevendo testes (estilo Jest)</h2>
<pre><code>// calculo.test.js
describe("calcularTotal", () =&gt; {
  test("multiplica preço por quantidade", () =&gt; {
    expect(calcularTotal(10, 3)).toBe(30);
  });

  test("aplica desconto percentual", () =&gt; {
    expect(calcularTotal(100, 1, 0.1)).toBe(90);
  });

  test("rejeita valores negativos", () =&gt; {
    expect(() =&gt; calcularTotal(-5, 1)).toThrow("Valores negativos");
  });

  test("casos extremos", () =&gt; {
    expect(calcularTotal(0, 10)).toBe(0);
  });
});</code></pre>

<h2>A trindade dos matchers</h2>
<pre><code>expect(x).toBe(y);          // igualdade ESTRITA (primitivos)
expect(obj).toEqual(obj2);  // igualdade PROFUNDA (objetos/arrays)
expect(fn).toThrow();       // lança erro

// Extras úteis:
expect(arr).toContain("js");
expect(n).toBeGreaterThan(5);
expect(spy).toHaveBeenCalled();</code></pre>

<h2>TDD em 3 passos (Red-Green-Refactor)</h2>
<ol>
  <li><strong>Red:</strong> escreva um teste que falha (a função ainda não faz isso).</li>
  <li><strong>Green:</strong> escreva o código MÍNIMO para passar.</li>
  <li><strong>Refactor:</strong> melhore o código mantendo os testes verdes.</li>
</ol>

<div class="callout callout-tip">
<strong>Comece pequeno:</strong> teste primeiro as funções puras (validadores, cálculos, transformações). Elas não dependem de DOM, rede nem tempo — e são justamente onde bugs custam caro.
</div>
`
        }
      ]
    },
    {
      id: 'js-padroes',
      title: 'Design Patterns',
      description: 'Padrões clássicos adaptados ao JavaScript moderno.',
      lessons: [
        {
          id: 'js-module-pattern',
          title: '1. Module Pattern',
          summary: 'Encapsulamento sem classes — o padrão que o JS nasceu tendo.',
          content: `
<h2>Módulos com closures</h2>
<p>Antes de existir <code>import/export</code>, o JavaScript já tinha o Module Pattern — que continua útil em singletons e configuração global:</p>
<pre><code>const Carrinho = (function() {
  // privado: só existe dentro desta closure
  const itens = [];

  // funções privadas:
  function validar(item) {
    return item.preco &gt; 0;
  }

  // API pública: só isto é exposto:
  return {
    adicionar(item) {
      if (!validar(item)) throw new Error("Item inválido");
      itens.push(item);
      return itens.length;
    },
    total() {
      return itens.reduce((s, i) =&gt; s + i.preco, 0);
    },
    get quantidade() { return itens.length; }
  };
})();

Carrinho.adicionar({ nome: "SSD", preco: 350 });
Carrinho.total();          // 350
// Carrinho.itens → undefined (protegido!)</code></pre>

<h2>Versão moderna com módulos ES</h2>
<pre><code>// carrinho.js — export único = singleton natural
const itens = [];

export const Carrinho = {
  adicionar(item) { itens.push(item); },
  total: () =&gt; itens.reduce((s, i) =&gt; s + i.preco, 0)
};

// outro arquivo:
import { Carrinho } from "./carrinho.js";
Carrinho.adicionar({ nome: "SSD", preco: 350 });</code></pre>

<h2>Quando usar singleton?</h2>
<p>Para recursos que devem ser <strong>únicos</strong>: carrinho, conexão de WebSocket, cache, logger. Cuidado: singletons globais dificultam testes — injete-os quando puder.</p>
`
        },
        {
          id: 'js-observer-pattern',
          title: '2. Observer e Pub/Sub',
          summary: 'O padrão por trás de eventos, React e Vue.',
          content: `
<h2>Observer: assinantes escutam um sujeito</h2>
<pre><code>class Emissor {
  #ouvintes = new Map();

  on(evento, callback) {
    if (!this.#ouvintes.has(evento)) this.#ouvintes.set(evento, []);
    this.#ouvintes.get(evento).push(callback);
    return () =&gt; this.off(evento, callback);   // função de desinscrever
  }

  off(evento, callback) {
    const lista = this.#ouvintes.get(evento) || [];
    this.#ouvintes.set(evento, lista.filter(cb =&gt; cb !== callback));
  }

  emit(evento, dados) {
    (this.#ouvintes.get(evento) || []).forEach(cb =&gt; cb(dados));
  }
}

// ---- Usando ----
const loja = new Emissor();

const desinscrever = loja.on("compra", (pedido) =&gt; {
  console.log("E-mail: obrigado pela compra!", pedido.id);
});

loja.on("compra", (pedido) =&gt; {
  console.log("Estoque: baixando itens de", pedido.id);
});

loja.emit("compra", { id: 123, total: 450 });
// E-mail: obrigado pela compra! 123
// Estoque: baixando itens de 123

desinscrever();   // para de receber notificações</code></pre>

<h2>Onde você já viu isso</h2>
<ul>
  <li><code>addEventListener</code> — o DOM é um emitter gigante.</li>
  <li>Node.js <code>EventEmitter</code> — streams, servidores.</li>
  <li>React state → re-render: componentes observam o estado.</li>
  <li>WebSockets / RxJS — observables reativos.</li>
</ul>

<div class="callout callout-tip">
<strong>Desacoplamento:</strong> quem emite não conhece quem escuta. Isso permite adicionar/remover features (e-mail, analytics, cache) sem tocar no código que dispara o evento.
</div>
`
        },
        {
          id: 'js-factory-pattern',
          title: '3. Factory e Builder',
          summary: 'Criar objetos complexos sem acoplar o new.',
          content: `
<h2>Factory Method</h2>
<p>Uma função/classe decide <strong>qual objeto criar</strong> — o código chamador não conhece as classes concretas:</p>
<pre><code>class NotificacaoEmail {
  enviar(msg) { console.log("EMAIL:", msg); }
}
class NotificacaoSMS {
  enviar(msg) { console.log("SMS:", msg); }
}
class NotificacaoPush {
  enviar(msg) { console.log("PUSH:", msg); }
}

function criarNotificador(tipo) {
  const mapa = {
    email: NotificacaoEmail,
    sms:   NotificacaoSMS,
    push:  NotificacaoPush
  };
  const Classe = mapa[tipo];
  if (!Classe) throw new Error(\`Tipo desconhecido: \${tipo}\`);
  return new Classe();
}

// O chamador nunca vê "new NotificacaoX":
const notificador = criarNotificador("sms");
notificador.enviar("Seu pedido saiu para entrega!");</code></pre>

<h2>Factory de objetos simples</h2>
<pre><code>// Quando uma classe é overkill:
const criarUsuario = ({ nome, papel = "leitor" }) =&gt; ({
  nome,
  papel,
  podeEditar: papel === "editor" || papel === "admin",
  cumprimentar: () =&gt; \`Olá, \${nome}!\`
});

const ana = criarUsuario({ nome: "Ana", papel: "editor" });
ana.podeEditar;  // true</code></pre>

<h2>Builder — construção passo a passo</h2>
<pre><code>class ConsultaBuilder {
  #consulta = {};

  tabela(nome) { this.#consulta.tabela = nome; return this; }
  onde(cond)   { this.#consulta.where = cond;  return this; }
  ordenar(col) { this.#consulta.order = col;   return this; }
  limite(n)    { this.#consulta.limit = n;     return this; }

  build() { return Object.freeze(this.#consulta); }
}

const q = new ConsultaBuilder()
  .tabela("usuarios")
  .onde("idade > 18")
  .ordenar("nome")
  .limite(10)
  .build();   // { tabela: "usuarios", where: ..., order: ..., limit: 10 }</code></pre>
`
        },
        {
          id: 'js-strategy-pattern',
          title: '4. Strategy e o fim dos ifs gigantes',
          summary: 'Trocar condicionais por comportamentos intercambiáveis.',
          content: `
<h2>O problema</h2>
<pre><code>// ❌ Cresce para sempre, todo novo meio de pagamento edita AQUI:
function processarPagamento(metodo, valor) {
  if (metodo === "pix") {
    // 30 linhas de pix...
  } else if (metodo === "cartao") {
    // 40 linhas de cartão...
  } else if (metodo === "boleto") {
    // 25 linhas de boleto...
  }
}</code></pre>

<h2>A solução: estratégias em um Map</h2>
<pre><code>const estrategiasPagamento = new Map([
  ["pix", {
    taxa: (valor) =&gt; 0,
    processar: (valor) =&gt; ({
      codigo: gerarCodigoPix(),
      valor,
      venceEm: null
    })
  }],
  ["cartao", {
    taxa: (valor) =&gt; valor * 0.029,
    processar: (valor) =&gt; ({
      autorizacao: solicitarAutorizacao(valor),
      valor
    })
  }],
  ["boleto", {
    taxa: (valor) =&gt; 1.50,
    processar: (valor) =&gt; ({
      linhaDigitavel: gerarLinhaDigitavel(valor),
      valor,
      venceEm: adicionarDias(3)
    })
  }]
]);

function processarPagamento(metodo, valor) {
  const estrategia = estrategiasPagamento.get(metodo);
  if (!estrategia) throw new Error("Método não suportado");

  const total = valor + estrategia.taxa(valor);
  return { ...estrategia.processar(valor), total };
}</code></pre>

<h2>Por que é melhor?</h2>
<ul>
  <li><strong>Aberto/fechado:</strong> adicionar "cripto" = nova entrada no Map, zero mudanças na função.</li>
  <li><strong>Testável:</strong> cada estratégia é testada isoladamente.</li>
  <li><strong>Legível:</strong> cada caso vive em seu próprio escopo.</li>
</ul>

<h2>Mini-strategy do dia a dia</h2>
<pre><code>const formatadores = {
  brl: (v) =&gt; v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  usd: (v) =&gt; v.toLocaleString("en-US", { style: "currency", currency: "USD" }),
  pct: (v) =&gt; (v * 100).toFixed(1) + "%"
};

const formatar = (v, formato = "brl") =&gt;
  (formatadores[formato] ?? formatadores.brl)(v);</code></pre>
`
        }
      ]
    },
    {
      id: 'js-web-apis',
      title: 'Web APIs do Navegador',
      description: 'IntersectionObserver, timers, geolocalização e APIs nativas.',
      lessons: [
        {
          id: 'js-intersection-observer',
          title: '1. IntersectionObserver',
          summary: 'Detectar elementos na tela sem eventos de scroll.',
          content: `
<h2>O fim do "scroll listener"</h2>
<p>Para animar elementos ao aparecerem na tela (ou carregar imagens lazy), o truque antigo era escutar <code>scroll</code> e calcular posições — caro e travado. O <strong>IntersectionObserver</strong> faz o navegador avisar você:</p>
<pre><code>const observador = new IntersectionObserver((entradas) =&gt; {
  entradas.forEach(entrada =&gt; {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);  // anima uma vez só
    }
  });
}, {
  threshold: 0.15   // dispara quando 15% do elemento estiver visível
});

// Observar todos os cards:
document.querySelectorAll(".card-animado")
  .forEach(el =&gt; observador.observe(el));</code></pre>

<h2>Lazy loading de imagens</h2>
<pre><code>const lazy = new IntersectionObserver((entradas, obs) =&gt; {
  entradas.forEach(({ isIntersecting, target }) =&gt; {
    if (isIntersecting) {
      target.src = target.dataset.src;   // carrega a imagem real
      obs.unobserve(target);
    }
  });
});

document.querySelectorAll("img[data-src]")
  .forEach(img =&gt; lazy.observe(img));</code></pre>

<h2> infinite scroll com paginação</h2>
<pre><code>let pagina = 1;
const sentinel = document.querySelector("#sentinela");

new IntersectionObserver(async (entradas) =&gt; {
  if (entradas[0].isIntersecting) {
    pagina++;
    const novos = await carregarItens(pagina);
    renderizar(novos);
  }
}, { rootMargin: "400px" })   // começa a carregar 400px ANTES do fim
  .observe(sentinel);</code></pre>

<div class="callout callout-tip">
<strong>rootMargin</strong> funciona como margin CSS: "400px" pré-carrega antes do usuário chegar ao fim — o segredo de scrolls infinitos suaves.
</div>
`
        },
        {
          id: 'js-timers-geolocation',
          title: '2. Timers, Geolocalização e Clipboard',
          summary: 'APIs nativas de uso diário.',
          content: `
<h2>Timers</h2>
<pre><code>// setTimeout: executa 1 vez após o atraso
const id = setTimeout(() =&gt; console.log("3 segundos se passaram"), 3000);
clearTimeout(id);   // cancela

// setInterval: executa a cada X ms — SEMPRE guarde o id!
const relogio = setInterval(() =&gt; {
  console.log(new Date().toLocaleTimeString("pt-BR"));
}, 1000);

// Parar após 10 "tics":
let tics = 0;
const contador = setInterval(() =&gt; {
  if (++tics === 10) clearInterval(contador);
}, 500);

// Timers aceitam ARGUMENTOS (evita closures desnecessárias):
setTimeout(console.log, 1000, "com argumentos!");</code></pre>

<h2>Geolocalização</h2>
<pre><code>if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (pos) =&gt; {
      const { latitude, longitude } = pos.coords;
      console.log(\`Você está em \${latitude.toFixed(4)}, \${longitude.toFixed(4)}\`);
    },
    (erro) =&gt; {
      switch (erro.code) {
        case erro.PERMISSION_DENIED:  console.log("Usuário negou acesso"); break;
        case erro.POSITION_UNAVAILABLE: console.log("Local indisponível"); break;
        case erro.TIMEOUT: console.log("Tempo esgotado"); break;
      }
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}</code></pre>

<h2>Clipboard</h2>
<pre><code>// Copiar:
async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Copiado!");
  } catch {
    // fallback para contextos sem HTTPS/permissão
    console.log("Clipboard bloqueado pelo navegador");
  }
}

// Colar (o usuário precisa conceder permissão):
const texto = await navigator.clipboard.readText();</code></pre>

<div class="callout callout-warning">
<strong>Geolocalização e clipboard exigem HTTPS</strong> e só funcionam em contextos seguros. Sempre trate a negação de permissão com elegância — nunca bloqueie a app por causa dela.
</div>
`
        },
        {
          id: 'js-url-api',
          title: '3. URL, URLSearchParams e Datas',
          summary: 'Trabalhando com URLs, query strings e Date do jeito certo.',
          content: `
<h2>URL: parsear endereços sem regex</h2>
<pre><code>const url = new URL("https://api.monocode.dev/v1/cursos?pagina=2&amp;ordem=nome#sec2");

url.protocol;  // "https:"
url.host;      // "api.monocode.dev"
url.pathname;  // "/v1/cursos"
url.hash;      // "#sec2"

// Manipular query strings:
url.searchParams.set("pagina", "3");
url.searchParams.set("idioma", "pt-BR");
url.searchParams.delete("ordem");

console.log(url.search);  // "?pagina=3&idioma=pt-BR"
console.log(url.toString());</code></pre>

<h2>Ler parâmetros da página atual</h2>
<pre><code>// Na URL: https://site.dev/curso.html?id=javascript&aula=5
const params = new URLSearchParams(window.location.search);

params.get("id");       // "javascript"
params.get("aula");     // "5"  (string! converta: Number(...))
params.getAll("tag");   // ["js", "web"] — parâmetros repetidos
params.has("id");       // true</code></pre>

<h2>Datas sem sofrer</h2>
<pre><code>const agora = new Date();

// Componentes locais:
agora.getFullYear();   // 2026
agora.getMonth();      // 0-11  ← JANEIRO É ZERO (clássico bug!)
agora.getDate();       // dia do mês
agora.getDay();        // dia da SEMANA (0 = domingo)
agora.getHours();

// Formatar de verdade:
agora.toLocaleDateString("pt-BR");                  // "19/08/2026"
agora.toLocaleString("pt-BR", {
  dateStyle: "long",
  timeStyle: "short"
});  // "19 de agosto de 2026, 14:30"

// Diferença entre datas (em ms → converta):
const inicio = new Date("2026-08-01");
const fim    = new Date("2026-08-19");
const dias   = (fim - inicio) / (1000 * 60 * 60 * 24);  // 18

// Datas IMUTÁVEIS na criação:
const copia = new Date(agora.getTime());
copia.setDate(copia.getDate() + 30);  // +30 dias (agora intacto)</code></pre>

<div class="callout callout-tip">
<strong>Dica:</strong> para apps com muitas datas, use a API nativa <code>Temporal</code> (chegando) ou a biblioteca date-fns — <code>new Date("19/08/2026")</code> (formato BR) retorna data inválida, sempre use ISO: <code>"2026-08-19"</code>.
</div>
`
        },
        {
          id: 'js-performance-web',
          title: '4. Performance: Debounce e Throttle',
          summary: 'Controlando funções que disparam demais.',
          content: `
<h2>O problema</h2>
<p>Digitar no campo de busca dispara dezenas de eventos; redimensionar a janela, dezenas por segundo. Chamar API/tarefas pesadas a cada evento afoga o navegador. As duas soluções clássicas:</p>

<h2>Debounce — espere o usuário parar</h2>
<pre><code>function debounce(fn, atraso = 400) {
  let id;
  return function(...args) {
    clearTimeout(id);              // cancela a execução anterior
    id = setTimeout(() =&gt; {
      fn.apply(this, args);        // só executa após "silêncio"
    }, atraso);
  };
}

// Busca só roda 400ms depois da última tecla:
inputBusca.addEventListener("input", debounce((e) =&gt; {
  buscar(e.target.value);   // 1 requisição em vez de 20!
}, 400));</code></pre>

<h2>Throttle — no máximo X por segundo</h2>
<pre><code>function throttle(fn, intervalo = 200) {
  let ultima = 0;
  return function(...args) {
    const agora = Date.now();
    if (agora - ultima &gt;= intervalo) {
      ultima = agora;
      fn.apply(this, args);   // executa e ignora o resto do intervalo
    }
  };
}

// Log de scroll no máximo 5x por segundo:
window.addEventListener("scroll", throttle(() =&gt; {
  console.log("scroll em", window.scrollY);
}, 200));</code></pre>

<h2>Qual usar quando?</h2>
<table>
<tr><th>Debounce</th><th>Throttle</th></tr>
<tr><td>Espera o "silêncio" total</td><td>Garante ritmo constante</td></tr>
<tr><td>Busca enquanto digita</td><td>Scroll, resize, mousemove</td></tr>
<tr><td>Autosave de formulário</td><td>Atirar em jogo / analytics</td></tr>
</table>

<div class="callout callout-tip">
<strong>Para animações:</strong> prefira <code>requestAnimationFrame</code> a setInterval — sincroniza com a taxa de atualização do monitor (60Hz+) e pausa quando a aba fica oculta.
</div>
`
        }
      ]
    }
  ]
};
