// MonoCode — Curso Completo de TypeScript
// 6 módulos • 26 lições com explicações didáticas completas

export const TYPESCRIPT_COURSE = {
  id: 'typescript',
  name: 'TypeScript',
  language: 'TypeScript',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'JavaScript com tipos: interfaces, generics, classes e o compilador tsc para código mais seguro.',
  description: 'Trilha completa de TypeScript cobrindo tipos básicos, inferência, interfaces, classes, generics, utilitários de tipo, narrowing, configuração strict e uso em projetos reais.',
  tags: ['Web', 'Frontend', 'Backend', 'Tipos'],
  modules: [
    {
      id: 'ts-fundamentos',
      title: 'Fundamentos e Tipos',
      description: 'Tipos básicos, inferência e anotações.',
      lessons: [
        {
          id: 'ts-intro',
          title: '1. O que é TypeScript',
          summary: 'JavaScript + tipos estáticos = menos bugs, mais confiança.',
          content: `
<h2>O problema que o TS resolve</h2>
<p>JavaScript é dinâmico: erros como chamar <code>.toUpperCase()</code> em <code>undefined</code> só aparecem <strong>com o app rodando</strong> — de preferência na sexta à noite, em produção. TypeScript adiciona uma <strong>verificação de tipos em tempo de desenvolvimento</strong>:</p>
<pre><code>// JavaScript — o erro aparece SÓ quando roda:
function exibirNome(usuario) {
  console.log(usuario.nome.toUpperCase());
}
exibirNome(null);  // TypeError em produção 😱

// TypeScript — o erro aparece NO EDITOR:
function exibirNome(usuario: { nome: string }) {
  console.log(usuario.nome.toUpperCase());
}
exibirNome(null);   // ← sublinhado vermelho antes mesmo de salvar</code></pre>

<h2>Fatos essenciais</h2>
<ul>
  <li>TypeScript é um <strong>superset</strong>: todo JS válido é TS válido.</li>
  <li>O navegador NÃO roda TS — o compilador <code>tsc</code> gera JavaScript puro.</li>
  <li>Tipos são <strong>apagados na compilação</strong>: zero custo em runtime.</li>
  <li>Criado pela Microsoft, mantém 98% de compatibilidade com o JS de cada ano.</li>
</ul>

<h2>O ciclo de trabalho</h2>
<pre><code>app.ts --[tsc]--&gt; app.js --[navegador/Node]--&gt; executa
         └── erros de tipo param AQUI, antes de rodar</code></pre>
`
        },
        {
          id: 'ts-instalacao',
          title: '2. Instalação e Primeiro Compile',
          summary: 'npm, tsc, watch mode e o tsconfig.',
          content: `
<h2>Instalando</h2>
<pre><code>npm install -g typescript     # global (para aprender)
npm install -D typescript      # no projeto (profissional)

tsc --version                 # 5.x</code></pre>

<h2>Compilando na mão</h2>
<pre><code>tsc app.ts              # gera app.js
tsc app.ts --outDir dist   # saída na pasta dist/
tsc --watch             # recompila ao salvar (deixe rodando)</code></pre>

<h2>O arquivo tsconfig.json</h2>
<pre><code>{
  "compilerOptions": {
    "target": "ES2022",        // qual JS gerar
    "module": "ESNext",        // sistema de módulos
    "outDir": "./dist",        // onde sai o JS
    "strict": true,            // o modo que TODO projeto merece
    "noEmit": true             // só checar (bundlers como Vite compilam)
  },
  "include": ["src"]
}</code></pre>

<div class="callout callout-tip">
<strong>Atalho moderno:</strong> em projetos com Vite: <code>npm create vite@latest meu-app -- --template ts</code> — tudo configurado. O <code>tsc --noEmit</code> fica responsável apenas por <em>checar</em> tipos.
</div>
`
        },
        {
          id: 'ts-tipos',
          title: '3. Tipos Básicos',
          summary: 'Primitivos, arrays, any, unknown, void e never.',
          content: `
<h2>Anotando tipos</h2>
<pre><code>let nome: string = "Ana";
let idade: number = 25;
let ativo: boolean = true;
let inicializado: string[] = ["a", "b"];      // array de strings
let misto: (string | number)[] = [1, "a"];   // array misto

// Funções — parâmetros e retorno:
function somar(a: number, b: number): number {
  return a + b;
}
const avisar = (msg: string): void =&gt; {   // void = sem retorno
  console.log(msg);
};</code></pre>

<h2>any, unknown e never</h2>
<pre><code>// any: desliga a checagem — o botão de pânico (evite!)
let dado: any = fetch("/api");
dado.qualquer.coisa();   // compila... e explode depois

// unknown: "sei que não sei" — força validar antes de usar
let json: unknown = JSON.parse(texto);
json.nome;                    // ❌ erro!
if (typeof json === "object" &amp;&amp; json !== null) {
  // agora sim, comprovadamente seguro
}

// never: o impossível (função que sempre lança/nunca retorna)
function falhar(msg: string): never {
  throw new Error(msg);
}</code></pre>

<h2>Literal types</h2>
<pre><code>let direcao: "esquerda" | "direita" = "esquerda";
// direcao = "cima";  ❌ não existe nessa união

let resposta: 200 | 404 | 500 = 200;</code></pre>
`
        },
        {
          id: 'ts-inferencia',
          title: '4. Inferência de Tipos',
          summary: 'O TS descobre o tipo sozinho — anote só quando precisa.',
          content: `
<h2>Anote menos, ganhe mais</h2>
<pre><code>// TS infere — anotação redundante:
let nome = "Ana";            // tipo: string (inferido)
const PI = 3.14;             // tipo: 3.14 (literal!)

function dobrar(n: number) { // parâmetros SEMPRE anotam
  return n * 2;              // retorno inferido: number
}

// Inferência de arrays e objetos:
const user = {
  nome: "Ana",
  id: 1,
};  // tipo: { nome: string; id: number }</code></pre>

<h2>Onde a inferência brilha</h2>
<pre><code>const frutas = ["banana", "uva"];
frutas.push("manga");    // ok
// frutas.push(42);      ❌ inferiu string[]

// Retorna null quando acha vazio:
function achar(id: number) {
  return itens.find(i =&gt; i.id === id) ?? null;
  // inferido: Item | null — o TS te OBRIGA a checar!</code></pre>

<h2>Contexto importa</h2>
<pre><code>// ❌ Inferência solta: any
function buscar(id) { ... }

// ✅ Restrita por contexto:
const botao = document.querySelector("button");
// tipo: HTMLButtonElement | null</code></pre>

<div class="callout callout-tip">
<strong>Regra prática:</strong> anote <strong>entradas</strong> (parâmetros, limites de API) e deixe o TS inferir <strong>saídas</strong>. Se a inferência falhar, anote — o compilador indica onde.
</div>
`
        },
        {
          id: 'ts-arrays-tuplas',
          title: '5. Arrays, Tuplas e Enums',
          summary: 'Coleções tipadas e pares ordenados.',
          content: `
<h2>Arrays</h2>
<pre><code>const numeros: number[] = [1, 2, 3];
const nomes: Array&lt;string&gt; = ["Ana", "Bia"];   // sintaxe genérica

// Métodos HERDAM os tipos:
numeros.map(n =&gt; n * 2);          // number[]
nomes.map(n =&gt; n.toUpperCase());  // string[]
nomes.find(n =&gt; n.startsWith("A"));  // string | undefined</code></pre>

<h2>Tuplas: array com tamanho e tipos fixos</h2>
<pre><code>let ponto: [number, number] = [10, 20];
// ponto[0] → number | ponto[1] → number
// ponto[2] → ❌ não existe!

let parChaveValor: [string, number] = ["idade", 25];

// Tupla nomeada (auto-documentável):
let endereco: [rua: string, numero: number] = ["Av. Paulista", 1000];

// Uso real: React useState
const [valor, setValor] = ["", () =&gt; {}];  // [string, função]</code></pre>

<h2>Só leitura</h2>
<pre><code>const congeldos: readonly number[] = [1, 2, 3];
// congeldos.push(4); ❌ proibido mutar

const config: Readonly&lt;{ tema: string }&gt; = { tema: "dark" };
// config.tema = "light"; ❌</code></pre>

<div class="callout callout-tip">
<strong>Tuplas são raras</strong> — use quando a ORDEM tem significado contratual (par coordenada, retorno múltiplo, hook). Para o resto, objetos nomeados são mais legíveis.
</div>
`
        }
      ]
    },
    {
      id: 'ts-interfaces',
      title: 'Interfaces e Types',
      description: 'Modelando dados com segurança.',
      lessons: [
        {
          id: 'ts-interface',
          title: '1. Interfaces',
          summary: 'Descrever a forma de objetos.',
          content: `
<h2>Contratos de dados</h2>
<pre><code>interface Usuario {
  id: number;
  nome: string;
  email: string;
  idade?: number;          // opcional (?)
  readonly criadoEm: Date; // só leitura
}

function criarConta(dados: Usuario) { ... }

criarConta({
  id: 1,
  nome: "Ana",
  email: "ana@x.dev",
  criadoEm: new Date()
});
// esqueceu um campo? sublinhado vermelho na hora.</code></pre>

<h2>Métodos em interfaces</h2>
<pre><code>interface Repositorio&lt;T&gt; {
  buscar(id: number): T;
  salvar(item: T): Promise&lt;T&gt;;
  remover(id: number): Promise&lt;void&gt;;
}</code></pre>

<h2>Extensão de interfaces</h2>
<pre><code>interface Animal {
  nome: string;
}

interface Cachorro extends Animal {     // herda TUDO
  raca: string;
  latir(): string;
}

// Múltiplas (interface permite, type não):
interface Vendedor extends Funcionario, Usuario {
  comissao: number;
}</code></pre>

<div class="callout callout-tip">
Interfaces são "abertas": declarar <code>interface Usuario</code> duas vezes FAZ MERGE das propriedades. Isso é feature (extensão de libs) — e risco se não intencional.
</div>
`
        },
        {
          id: 'ts-type-alias',
          title: '2. Type Aliases',
          summary: 'type: uniões, interseções e apelidos.',
          content: `
<h2>type vs interface</h2>
<pre><code>// interface → melhor para OBJETOS e classes
interface Usuario { nome: string }

// type → apelido para QUALQUER coisa:
type ID = string | number;
type Callback = (erro: Error | null, dados?: string[]) =&gt; void;
type Pilha = string[];

// Uniões — o superpoder do type:
type Status = "ativo" | "inativo" | "banido";
type Resposta = { ok: true; dados: string[] } | { ok: false; erro: string };

// Interseção — combina tipos (e exige tudo):
type Nomeado = { nome: string };
type Idoso = { idade: number };
type Pessoa = Nomeado &amp; Idoso;   // precisa de nome E idade</code></pre>

<h2>Resposta discriminada: uniões com cerebro</h2>
<pre><code>type Resultado =
  | { sucesso: true; valor: number }
  | { sucesso: false; mensagem: string };

function tratar(r: Resultado) {
  if (r.sucesso) {
    console.log(r.valor);      // TS SABE que valor existe aqui
  } else {
    console.log(r.mensagem);   // e mensagem aqui!
  }
}</code></pre>

<h2>Qual escolher?</h2>
<table>
<tr><th>interface</th><th>type</th></tr>
<tr><td>Formas de objeto/classe</td><td>Uniões, primitivos, funções</td></tr>
<tr><td>Estende (extends)</td><td>Combina (&amp;) e deriva</td></tr>
<tr><td>Declaração múltipla: merge</td><td>Erro em duplicar</td></tr>
</table>
`
        },
        {
          id: 'ts-opcionais',
          title: '3. Propriedades Opcionais e null',
          summary: '?, | null, | undefined e optional chaining tipado.',
          content: `
<h2>O opcional (?)</h2>
<pre><code>interface Perfil {
  nome: string;
  bio?: string;        // string | undefined
}

const p: Perfil = { nome: "Ana" };      // bio ausente = ok
p.bio?.toUpperCase();                    // undefined se faltar
// p.bio.toUpperCase();  ❌ TS exige o ?. ou checagem</code></pre>

<h2>strictNullChecks: o divisor de águas</h2>
<pre><code>// Com strict (recomendado), null/undefined SÃO tipos próprios:
let nome: string = null;         // ❌ erro!

let talvezNome: string | null = null;
talvezNome.length;               // ❌ pode ser null!

// Caminhos seguros:
talvezNome?.length;              // number | undefined
talvezNome ?? "Anônimo";         // com padrão
if (talvezNome) talvezNome.length;  // estreitou: ok!</code></pre>

<h2>Campos que podem faltar vs serem null</h2>
<pre><code>interface ApiResponse {
  dados?: Usuario[];        // pode não existir a chave
  token: string | null;     // existe, mas pode ser null
  erro?: string | undefined;
}</code></pre>

<div class="callout callout-tip">
<strong>Modernidade:</strong> o TS hoje marca propriedades opcionais como <code>campo?: T</code> significando <code>campo: T | undefined</code> — e com <code>exactOptionalPropertyTypes</code> você pode até proibir atribuir undefined explicitamente. Comece com o básico: <code>?</code> + <code>?.</code> + <code>??</code>.
</div>
`
        },
        {
          id: 'ts-union-narrowing',
          title: '4. Uniões, Literais e Narrowing',
          summary: 'Estreitando tipos com guardas.',
          content: `
<h2>Narrowing: o compilador aprende com o código</h2>
<pre><code>function formatar(valor: string | number) {
  valor.toUpperCase();        // ❌ ainda pode ser number

  if (typeof valor === "string") {
    valor.toUpperCase();      // ✅ aqui É string
  } else {
    valor.toFixed(2);         // ✅ aqui É number
  }
}</code></pre>

<h2>Ferramentas de estreitamento</h2>
<pre><code>// typeof — primitivos
if (typeof x === "string") { ... }

// instanceof — classes
if (erro instanceof TypeError) { ... }

// in — propriedades
if ("id" in obj) { obj.id }

// igualdade literal
if (resposta.status === 200) { ... }

// Type predicate (guarda customizada):
function isUsuario(v: unknown): v is Usuario {
  return typeof v === "object" &amp;&amp; v !== null &amp;&amp; "nome" in v;
}

const dado: unknown = JSON.parse(texto);
if (isUsuario(dado)) {
  dado.nome;      // ✅ TS confia na sua guarda!
}</code></pre>

<h2>Exaustividade com never</h2>
<pre><code>type Forma = "circulo" | "quadrado";

function area(forma: Forma) {
  switch (forma) {
    case "circulo": return Math.PI;
    case "quadrado": return 1;
    default:
      const nunca: never = forma;  // se ADICIONAR "triangulo",
      // esta linha reclama — aviso automático de caso faltante!
  }
}</code></pre>
`
        }
      ]
    },
    {
      id: 'ts-funcoes-classes',
      title: 'Funções e Classes',
      description: 'Assinaturas, genéricos e orientação a objetos.',
      lessons: [
        {
          id: 'ts-funcoes',
          title: '1. Funções Tipadas',
          summary: 'Assinaturas, overloads e this.',
          content: `
<h2>Assinaturas completas</h2>
<pre><code>// Parâmetros e retorno:
function somar(a: number, b: number): number {
  return a + b;
}

// Padrão e opcional (opcional POR ÚLTIMO):
function cumprimentar(nome: string, formal?: boolean): string { ... }
function criar(host: string, porta: number = 5432): void { ... }

// Rest tipado:
function somarTudo(...valores: number[]): number {
  return valores.reduce((a, b) =&gt; a + b, 0);
}

// Tipo de função reutilizável:
type Handler = (evento: string, payload: unknown) =&gt; void;
const onClick: Handler = (evento, payload) =&gt; { ... };</code></pre>

<h2>Overloads: uma função, várias caras</h2>
<pre><code>function criarElemento(tag: "img"): HTMLImageElement;
function criarElemento(tag: "input"): HTMLInputElement;
function criarElemento(tag: string): HTMLElement {
  return document.createElement(tag);
}

const img = criarElemento("img");   // tipo: HTMLImageElement ✓</code></pre>

<h2>void vs undefined</h2>
<pre><code>function logar(): void { console.log("x"); }
// void = "ignoro o retorno" — permite callbacks que retornam algo:
[1, 2].forEach(n =&gt; n * 2);   // retorna number, mas void aceita</code></pre>
`
        },
        {
          id: 'ts-generics',
          title: '2. Generics',
          summary: 'Funções e tipos reutilizáveis que não perdem informação.',
          content: `
<h2>O problema</h2>
<pre><code>// Sem generics: ou perde o tipo...
function primeiro(arr: any[]): any { return arr[0]; }
const nome = primeiro(["Ana"]);   // any 😞

// ...ou duplica função para cada tipo.
function primeiroNumero(arr: number[]): number { ... }
function primeiroNome(arr: string[]): string { ... }</code></pre>

<h2>A solução: type parameter</h2>
<pre><code>function primeiro&lt;T&gt;(arr: T[]): T {
  return arr[0];        // mantém o tipo de entrada!
}

const nome = primeiro(["Ana", "Bia"]);   // string ✓
const num  = primeiro([10, 20]);          // number ✓

// Múltiplos parâmetros:
function trocar&lt;A, B&gt;(par: [A, B]): [B, A] {
  return [par[1], par[0]];
}</code></pre>

<h2>Constrains: generics com limites</h2>
<pre><code>// T precisa ter a propriedade length:
function maior&lt;T extends { length: number }&gt;(a: T, b: T): T {
  return a.length &gt;= b.length ? a : b;
}

maior("python", "js");     // ok: strings têm length
maior([1, 2], [1, 2, 3]);  // ok: arrays têm length
// maior(10, 20);           ❌ number não tem length

// Generic com default:
interface ApiResponse&lt;T = unknown&gt; {
  dados: T;
  status: number;
}</code></pre>

<h2>Generic methods em interfaces</h2>
<pre><code>interface Colecao&lt;T&gt; {
  adicionar(item: T): void;
  filtrar(fn: (item: T) =&gt; boolean): T[];
}</code></pre>

<div class="callout callout-tip">
<strong>Leia em voz alta:</strong> <code>function primeiro&lt;T&gt;(arr: T[]): T</code> = "dado um array de <em>qualquer coisa T</em>, devolvo um <em>T</em>". O mesmo T entra e sai — isso é o que preserva a informação.
</div>
`
        },
        {
          id: 'ts-classes',
          title: '3. Classes Tipadas',
          summary: 'Modificadores de acesso, implement e abstract.',
          content: `
<h2>Classe TypeScript completa</h2>
<pre><code>class Conta {
  // propriedades declaradas com tipo ANTES do construtor:
  private saldo: number;
  readonly titular: string;      // só leitura fora da classe
  protected id: number;          // acessível em herdeiros
  static proximoId = 1;          // da classe, não da instância

  constructor(titular: string) {
    this.titular = titular;
    this.saldo = 0;
    this.id = Conta.proximoId++;
  }

  depositar(valor: number): void {
    if (valor &lt;= 0) throw new Error("Valor inválido");
    this.saldo += valor;
  }

  get disponivel(): number {      // getter tipado
    return this.saldo;
  }
}</code></pre>

<h2>Shorthand do construtor</h2>
<pre><code>class Conta {
  // parâmetros com modificador viram propriedades automáticas:
  constructor(
    private titular: string,
    private saldo: number = 0
  ) {}
}</code></pre>

<h2>implements e abstract</h2>
<pre><code>interface Autenticavel {
  autenticar(senha: string): boolean;
}

class Usuario implements Autenticavel {   // contrato obrigatório
  autenticar(senha: string): boolean { ... }
}

abstract class Forma {
  abstract area(): number;       // filhos DEVEM implementar
  descrever(): string { return \`Área: \${this.area()}\`; }
}</code></pre>
`
        },
        {
          id: 'ts-enum-union',
          title: '4. Enums vs Uniões de String',
          summary: 'Duas formas de conjuntos nomeados — e qual preferir.',
          content: `
<h2>Enum tradicional</h2>
<pre><code>enum Status {
  Ativo,       // 0 (auto-incremento)
  Inativo,     // 1
  Banido,      // 2
}

enum Resposta {
  Sim = "SIM",
  Nao = "NAO",
}

const s: Status = Status.Ativo;
function tratando(status: Status) { ... }</code></pre>

<h2>Const objects + união (a alternativa moderna)</h2>
<pre><code>const STATUS = {
  Ativo: "ATIVO",
  Inativo: "INATIVO",
  Banido: "BANIDO",
} as const;                        // congela os literais

type Status = keyof typeof STATUS;  // "ATIVO" | "INATIVO" | "BANIDO"

const s: Status = STATUS.Ativo;</code></pre>

<h2>Comparando</h2>
<table>
<tr><th>enum</th><th>union + as const</th></tr>
<tr><td>Gera código JS em runtime</td><td>Zero código gerado</td></tr>
<tr><td>Number enums aceitam qualquer número</td><td>Erros em valor inválido</td></tr>
<tr><td>Sintaxe própria do TS</td><td>É JS comum + tipos</td></tr>
</table>

<div class="callout callout-tip">
A comunidade moderna tende às <strong>uniões de literais</strong> para conjuntos de strings (<code>type Role = "admin" | "user"</code>) e const objects quando precisa iterar valores. Enums numéricos: legado.
</div>
`
        }
      ]
    },
    {
      id: 'ts-avancado',
      title: 'TypeScript Avançado',
      description: 'Utilitários, mapeamento e metaprogramação de tipos.',
      lessons: [
        {
          id: 'ts-utility-types',
          title: '1. Utility Types',
          summary: 'Partial, Pick, Omit, Record e ReturnType.',
          content: `
<h2>Transformadores de tipos prontos</h2>
<pre><code>interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

// Partial: tudo opcional (ideal para updates):
function atualizar(id: number, campos: Partial&lt;Usuario&gt;) { ... }
atualizar(1, { nome: "Ana" });      // só o que muda!

// Pick: escolha campos:
type Login = Pick&lt;Usuario, "email" | "senha"&gt;;

// Omit: exclua campos:
type UsuarioPublico = Omit&lt;Usuario, "senha"&gt;;

// Required: tudo obrigatório (inverso do Partial):
type Completo = Required&lt;Partial&lt;Usuario&gt;&gt;;

// Record: dicionário chave → valor:
const usuarios: Record&lt;string, UsuarioPublico&gt; = {};

// Readonly: congela:
type Congelado = Readonly&lt;Usuario&gt;;</code></pre>

<h2>Extraindo de funções</h2>
<pre><code>function criarUsuario() { return { id: 1, nome: "Ana" }; }

type NovoUsuario = ReturnType&lt;typeof criarUsuario&gt;;
// { id: number; nome: string }

// Parâmetros de função:
type Params = Parameters&lt;typeof criarUsuario&gt;;

// Espera de promise:
type Dados = Awaited&lt;ReturnType&lt;typeof fetchUsuario&gt;&gt;;  // Usuario</code></pre>

<div class="callout callout-tip">
Antes de criar um type na mão, pergunte: <strong>"existe utility para isso?"</strong> A lista oficial (Partial, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType...) cobre 90% dos casos.
</div>
`
        },
        {
          id: 'ts-mapped-types',
          title: '2. Mapped e Conditional Types',
          summary: 'Types que computam outros types.',
          content: `
<h2>Mapped types: transforme cada propriedade</h2>
<pre><code>interface Usuario { nome: string; idade: number }

// Toda propriedade vira opcional:
type Frouxo&lt;T&gt; = { [K in keyof T]?: T[K] };
// { nome?: string; idade?: number }

// Toda propriedade nullable:
type OuNull&lt;T&gt; = { [K in keyof T]: T[K] | null };

// Toda propriedade vira função de leitura:
type Getters&lt;T&gt; = { [K in keyof T as \`get\${Capitalize&lt;string &amp; K&gt;}\`]: () =&gt; T[K] };
// { getNome: () =&gt; string; getIdade: () =&gt; number }</code></pre>

<h2>Conditional types: tipos com if</h2>
<pre><code>// Sintaxe: T estende U ? X : Y
type EhString&lt;T&gt; = T extends string ? true : false;

type A = EhString&lt;"oi"&gt;;   // true
type B = EhString&lt;42&gt;;      // false

// Uso real — desencaixotar arrays:
type Item&lt;T&gt; = T extends (infer U)[] ? U : T;
type C = Item&lt;string[]&gt;;    // string
type D = Item&lt;number&gt;;      // number (não era array)</code></pre>

<h2>Template literal types</h2>
<pre><code>type Domínio = "app" | "api";
type Rota = \`/\${Domínio}/\${string}\`;
// "/app/qualquercoisa" ✓ | "/x" ❌

type Propriedade = \`data-\${string}\`;
// data-id, data-acao... autocompletam!</code></pre>
`
        },
        {
          id: 'ts-assertions',
          title: '3. Assertions e unknown',
          summary: 'as, ! e quando confiar no programador.',
          content: `
<h2>Type assertions: "eu sei melhor"</h2>
<pre><code>// as — dizer qual é o tipo real:
const input = document.querySelector("#email") as HTMLInputElement;
input.value;   // agora o TS conhece

// Double assertion (último recurso):
const el = document.querySelector("div") as unknown as HTMLElement;</code></pre>

<h2>Non-null assertion (!)</h2>
<pre><code>const item = itens.find(i =&gt; i.id === 42)!;
//        └ "confia, existe!" — remove null | undefined

// Equivalentes seguros:
const item2 = itens.find(i =&gt; i.id === 42);
if (item2) { ... }               // checagem real
const item3 = itens.find(...) ?? padrao;  // fallback</code></pre>

<h2>satisfies: assertar sem alargar</h2>
<pre><code>type Rotas = { home: "/" | "/index" };

const config = {
  home: "/index",
} satisfies Rotas;
// ✅ valida contra Rotas
// ✅ e PRESERVA o tipo literal "/index" (as o esconderia!)</code></pre>

<div class="callout callout-warning">
<strong>Assertions desligam o compilador naquele ponto.</strong> Se você mentiu, o erro aparece em runtime. Regra: prefira <code>satisfies</code> &gt; guardas/narrowing &gt; <code>as</code> &gt; <code>!</code>.
</div>
`
        },
        {
          id: 'ts-tsconfig',
          title: '4. Configuração Strict',
          summary: 'As flags que separam TS de brincadeira de TS de verdade.',
          content: `
<h2>strict: true (a base)</h2>
<pre><code>{
  "compilerOptions": {
    "strict": true
    // liga TUDO abaixo de uma vez:
    // strictNullChecks      → null/undefined são tipos reais
    // noImplicitAny         → proíbe any silencioso
    // strictFunctionTypes   → parâmetros de função corretos
    // strictBindCallApply   → bind/call tipados
    // strictPropertyInitialization → classe precisa inicializar
    // alwaysStrict          → "use strict" no JS gerado
  }
}</code></pre>

<h2>Flags além do strict</h2>
<pre><code>{
  "noUncheckedIndexedAccess": true,   // arr[0] vira T | undefined
  "exactOptionalPropertyTypes": true, // ? não aceita undefined explícito
  "noImplicitOverride": true,         // override obrigatório em herança
  "noFallthroughCasesInSwitch": true  // case sem break = erro
}</code></pre>

<h2>Include, exclude e path aliases</h2>
<pre><code>{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]       // import x from "@/utils/x"
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}</code></pre>

<div class="callout callout-tip">
<strong>Migração gradual:</strong> projeto JS legado? Renomeie devagar: <code>allowJs: true</code>, <code>checkJs: false</code> e ative flags aos poucos — começando por <code>strictNullChecks</code>, a que mais pega bugs.
</div>
`
        }
      ]
    },
    {
      id: 'ts-projetos',
      title: 'TypeScript em Projetos Reais',
      description: 'DOM, Node, React e migração gradual.',
      lessons: [
        {
          id: 'ts-dom',
          title: '1. TypeScript no DOM',
          summary: 'Eventos e manipulação tipada.',
          content: `
<h2>O DOM já vem tipado</h2>
<pre><code>const botao = document.querySelector("#salvar");

// botao: Element | null — o TS exige checar!
botao.addEventListener("click", fn);   // ❌ pode ser null

// Caminho 1 — checar:
if (botao) { ... }

// Caminho 2 — afunilar o tipo:
const input = document.querySelector&lt;HTMLInputElement&gt;("#email");
input?.value;      // string | undefined ✓

// Cast quando o seletor garante o tipo:
const form = document.querySelector("form") as HTMLFormElement;</code></pre>

<h2>Eventos tipados</h2>
<pre><code>input.addEventListener("input", (e: Event) =&gt; {
  // e.target: EventTarget | null — genérico demais
  const alvo = e.target as HTMLInputElement;
  console.log(alvo.value);
});

// Melhor — o TS infere pelo contexto:
form.addEventListener("submit", (e: SubmitEvent) =&gt; {
  e.preventDefault();
  new FormData(e.target as HTMLFormElement);
});</code></pre>

<h2>Formulário completo tipado</h2>
<pre><code>interface DadosForm { email: string; senha: string }

function lerForm(form: HTMLFormElement): DadosForm {
  const fd = new FormData(form);
  return {
    email: String(fd.get("email") ?? ""),
    senha: String(fd.get("senha") ?? "")
  };
}</code></pre>
`
        },
        {
          id: 'ts-node',
          title: '2. TypeScript no Backend (Node)',
          summary: 'Tipando servidores, erros e variáveis de ambiente.',
          content: `
<h2>Servidor Express tipado</h2>
<pre><code>import express, { Request, Response } from "express";

interface Usuario { id: number; nome: string }

const usuarios: Usuario[] = [];

const app = express();
app.use(express.json());

app.post("/usuarios", (req: Request, res: Response) =&gt; {
  const { nome } = req.body as { nome?: string };

  if (!nome) {
    res.status(400).json({ erro: "nome é obrigatório" });
    return;
  }

  const novo: Usuario = { id: Date.now(), nome };
  usuarios.push(novo);
  res.status(201).json(novo);
});

app.listen(3000);</code></pre>

<h2>Tipando o process.env</h2>
<pre><code>// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    PORT?: string;
  }
}
// process.env.DATABASE_URL → string ✓ (autocompleta!)</code></pre>

<h2>Erros customizados</h2>
<pre><code>class ErroDominio extends Error {
  constructor(
    mensagem: string,
    readonly codigo: number = 400
  ) {
    super(mensagem);
    this.name = "ErroDominio";
  }
}

// Handler centralizado:
app.use((err: unknown, _req, res, _next) =&gt; {
  if (err instanceof ErroDominio) {
    res.status(err.codigo).json({ erro: err.message });
    return;
  }
  res.status(500).json({ erro: "Erro interno" });
});</code></pre>
`
        },
        {
          id: 'ts-react',
          title: '3. TypeScript com React',
          summary: 'Props, hooks e eventos tipados.',
          content: `
<h2>Props de componente</h2>
<pre><code>interface Props {
  titulo: string;
  itens: string[];
  onSelecionar?: (item: string) =&gt; void;
}

function Lista({ titulo, itens, onSelecionar }: Props) {
  return (
    &lt;section&gt;
      &lt;h2&gt;{titulo}&lt;/h2&gt;
      &lt;ul&gt;
        {itens.map(item =&gt; (
          &lt;li key={item} onClick={() =&gt; onSelecionar?.(item)}&gt;
            {item}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/section&gt;
  );
}</code></pre>

<h2>Hooks tipados</h2>
<pre><code>// useState: o TS infere do inicial
const [nome, setNome] = useState("");            // string
const [user, setUser] = useState&lt;Usuario | null&gt;(null);

// useReducer com união discriminada:
type Acao =
  | { tipo: "adicionar"; texto: string }
  | { tipo: "limpar" };

function reducer(estado: string[], acao: Acao): string[] {
  switch (acao.tipo) {
    case "adicionar": return [...estado, acao.texto];
    case "limpar": return [];
  }
}</code></pre>

<h2>Eventos</h2>
<pre><code>&lt;input
  value={nome}
  onChange={(e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt;
    setNome(e.target.value)
  }
/&gt;</code></pre>
`
        },
        {
          id: 'ts-migracao',
          title: '4. Migrando um Projeto JavaScript',
          summary: 'Plano gradual em 6 passos.',
          content: `
<h2>O caminho sem dor</h2>
<ol>
  <li><strong>Renomeie aos poucos:</strong> <code>.js</code> → <code>.ts</code> só onde vai trabalhar hoje.</li>
  <li><strong>Permita JS:</strong> <code>allowJs: true, checkJs: false</code> — o TS compila sem reclamar do legado.</li>
  <li><strong>Tipos de terceiros:</strong> instale <code>@types/nome-da-lib</code> para suas dependências.</li>
  <li><strong>Extermine o any:</strong> ligue <code>noImplicitAny</code> e resolva os erros que aparecerem (é o maior relatório de bugs gratuito da sua vida).</li>
  <li><strong>Ative strictNullChecks:</strong> a flag que mais corrige bugs reais — trate cada null com <code>?.</code>, <code>??</code> ou checagens.</li>
  <li><strong>Complete:</strong> <code>strict: true</code> e novos arquivos já nascem TS.</li>
</ol>

<h2>Tipos de migração rápidos</h2>
<pre><code>// any explícito como "ainda não migrei":
const dados: any = legadoVelho();

// @ts-expect-error — silencia a linha E some quando
// você finalmente corrigir (compilador avisa!):
// @ts-expect-error — lib antiga sem tipos
antiga.metodo();</code></pre>

<div class="callout callout-tip">
<strong>Métrica que importa:</strong> cobertura de tipos, não velocidade de migração. Suba de 80% any para 20% any aos poucos — cada ponto percentual é uma classe de bug eliminada.
</div>
`
        }
      ]
    }
  ]
};
