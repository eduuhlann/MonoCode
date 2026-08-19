// MonoCode — Curso Completo de C# (.NET)
// 6 módulos • 25 lições com explicações didáticas completas

export const CSHARP_COURSE = {
  id: 'csharp',
  name: 'C# (.NET)',
  language: 'C#',
  level: 'Intermediário',
  levelTag: 'intermediario',
  shortDesc: 'A linguagem da Microsoft para .NET: POO, LINQ, async/await, ASP.NET e aplicações modernas.',
  description: 'Trilha completa de C# cobrindo sintaxe moderna, orientação a objetos, coleções e LINQ, programação assíncrona com async/await, e o ecossistema .NET com ASP.NET Core e EF Core.',
  tags: ['Backend', 'Microsoft', '.NET', 'POO'],
  modules: [
    {
      id: 'cs-fundamentos',
      title: 'Fundamentos do C#',
      description: 'Sintaxe, tipos e o runtime .NET.',
      lessons: [
        {
          id: 'cs-intro',
          title: '1. O que é C#',
          summary: 'Linguagem moderna, tipada e multi-paradigma do .NET.',
          content: `
<h2>C# e o .NET</h2>
<p>C# (lê-se "C sharp") foi criada pela Microsoft em 2000 por Anders Hejlsberg. Roda sobre o <strong>.NET</strong> — um runtime multiplataforma (Windows, Linux, macOS, mobile) que inclui bibliotecas enormes, coleta de lixo e compilação JIT. C# é tipada, orientada a objetos, multi-paradigma e continua evoluindo (C# 12 em 2023).</p>

<h2>O ciclo</h2>
<pre><code>Programa.cs --[dotnet build]--&gt; IL (Intermediate Language)
                               |
                               ▼ (JIT em runtime)
                        Código nativo da máquina</code></pre>

<h2>Hello World</h2>
<pre><code>// Programa.cs
using System;

class Program {
    static void Main() {
        Console.WriteLine("Olá, MonoCode!");
    }
}</code></pre>

<h2>C# moderno: top-level statements</h2>
<pre><code>// Em vez da classe Program/Main, um arquivo pode ser só:
using System;
Console.WriteLine("Olá, MonoCode!");
// O compilador gera a classe Main automaticamente.</code></pre>
`
        },
        {
          id: 'cs-dotnet',
          title: '2. .NET e a CLI',
          summary: 'SDK, runtime e os comandos do dia a dia.',
          content: `
<h2>Instalação</h2>
<pre><code># Baixe o .NET SDK em dotnet.microsoft.com
dotnet --version        # 8.x ou superior

# Criar projetos:
dotnet new console -o MeuApp          # app de console
dotnet new webapi -o MinhaApi         # API web
dotnet new classlib -o MinhaLib       # biblioteca

# Rodar:
cd MeuApp
dotnet run                             # compila + executa

# Adicionar pacotes NuGet:
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Serilog</code></pre>

<h2>Estrutura do projeto</h2>
<pre><code>MeuApp/
├── MeuApp.csproj     # define SDK, target, dependências
├── Program.cs        # ponto de entrada
├── Models/           # suas classes
└── Services/         # lógica</code></pre>

<h2>O csproj</h2>
<pre><code>&lt;Project Sdk="Microsoft.NET.Sdk"&gt;
  &lt;PropertyGroup&gt;
    &lt;OutputType&gt;Exe&lt;/OutputType&gt;
    &lt;TargetFramework&gt;net8.0&lt;/TargetFramework&gt;
    &lt;Nullable&gt;enable&lt;/Nullable&gt;       &lt;!-- null safety --&gt;
    &lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;
  &lt;/PropertyGroup&gt;
&lt;/Project&gt;</code></pre>
`
        },
        {
          id: 'cs-variaveis',
          title: '3. Variáveis e Tipos',
          summary: 'Tipos primitivos, var e inferência.',
          content: `
<h2>Tipos básicos</h2>
<pre><code>int      idade = 25;
long     habitantes = 7_000_000_000;   // underline separa milhares
double   pi = 3.14159;
decimal  preco = 199.99m;              // m = decimal (DINHEIRO!)
bool     ativo = true;
char     inicial = 'A';
string   nome = "Ana";

// var: o tipo é inferido (fortemente tipado em tempo de compilação):
var cidade = "São Paulo";   // string
var contador = 0;           // int

// Constantes:
const double PI = 3.14159;</code></pre>

<h2>Value types vs reference types</h2>
<pre><code>// Value types (structs, primitivos): cópia ao atribuir
int a = 10;
int b = a;
b = 20;
Console.WriteLine(a);   // 10 — a não mudou

// Reference types (classes): compartilham o objeto
var p1 = new Pessoa { Nome = "Ana" };
var p2 = p1;
p2.Nome = "Bia";
Console.WriteLine(p1.Nome);   // "Bia" — MESMO objeto!</code></pre>

<div class="callout callout-warning">
<strong>Dinheiro:</strong> use <code>decimal</code>, nunca <code>double</code>. <code>0.1 + 0.2</code> em double dá <code>0.30000000000000004</code>; em decimal dá exatamente <code>0.3</code>.
</div>
`
        },
        {
          id: 'cs-console',
          title: '4. Console e Strings',
          summary: 'Entrada, saída e interpolação.',
          content: `
<h2>Saída</h2>
<pre><code>Console.WriteLine("Olá!");
Console.Write("sem quebra");

// Interpolação (prefira sempre):
string nome = "Ana";
int pontos = 1250;
Console.WriteLine($"{nome} tem {pontos} pontos");

// Alinhamento e formatação:
Console.WriteLine($"|{"Nome",-10}|{pontos,8:N0}|");
// |Nome      |   1,250|

// Composite formatting (legado):
Console.WriteLine("{0} tem {1} pontos", nome, pontos);</code></pre>

<h2>Entrada</h2>
<pre><code>Console.Write("Nome: ");
string nome = Console.ReadLine();

Console.Write("Idade: ");
int idade = int.Parse(Console.ReadLine());     // lança se inválido

// Versão segura:
if (int.TryParse(Console.ReadLine(), out int idade)) {
    Console.WriteLine($"Você tem {idade} anos");
} else {
    Console.WriteLine("Número inválido");
}</code></pre>

<h2>String utils</h2>
<pre><code>nome.Length;
nome.ToUpper();
nome.ToLower();
nome.Trim();             // remove espaços das pontas
nome.Split(",");
nome.Replace("a", "4");
nome.Contains("An");
string.Join(", ", lista);   // junta
$"Preço: {preco:C}";        // formatação cultural (R$ 199,99)</code></pre>
`
        },
        {
          id: 'cs-nullable',
          title: '5. Nullable e Null Safety',
          summary: 'int?, string? e operadores ?.', content: `
<h2>O problema do null</h2>
<p><code>NullReferenceException</code> é o bug mais comum de linguagens orientadas a objetos. C# 8 introduziu <strong>nullability</strong> — o compilador avisa quando você pode estar acessando null:</p>
<pre><code>#nullable enable

string nome = "Ana";        // não pode ser null
string? talvez = null;      // PODE ser null (com ?)

nome.Length;                // OK, o compilador confia
talvez.Length;              // ⚠ aviso: pode ser null

// Caminho seguro:
talvez?.Length;             // int? : null se talvez for null
talvez?.Length ?? 0;        // int  : 0 se null

// Verificação explícita (estreita o tipo):
if (talvez is not null) {
    talvez.Length;          // OK aqui
}

// Lancar se null (cascade null):
string obrigatorio = talvez ?? throw new ArgumentNullException();</code></pre>

<h2>Nullable value types</h2>
<pre><code>int idade = 25;        // não pode ser null
int? idadeOpcional = null;  // pode (vira Nullable&lt;int&gt;)

if (idadeOpcional.HasValue) {
    Console.WriteLine(idadeOpcional.Value);
}</code></pre>

<div class="callout callout-tip">
<strong>Habilitar nullable</strong> (<code>&lt;Nullable&gt;enable&lt;/Nullable&gt;</code> no csproj) é o upgrade mais valioso do C# moderno: o compilador pega uma classe inteira de bugs em compile-time.
</div>
`
        }
      ]
    },
    {
      id: 'cs-poo',
      title: 'Orientação a Objetos',
      description: 'Classes, herança e interfaces.',
      lessons: [
        {
          id: 'cs-classes',
          title: '1. Classes',
          summary: 'Propriedades, métodos e construtores.',
          content: `
<h2>A classe básica</h2>
<pre><code>public class Produto {
    // Propriedades auto-implementadas:
    public string Nome { get; set; }
    public decimal Preco { get; set; }
    public int Estoque { get; private set; }  // setter privado

    // Construtor:
    public Produto(string nome, decimal preco) {
        Nome = nome;
        Preco = preco;
        Estoque = 0;
    }

    // Método:
    public void AdicionarEstoque(int qtd) =&gt; Estoque += qtd;

    // Propriedade calculada (somente leitura):
    public decimal ValorEmEstoque =&gt; Preco * Estoque;

    // Propriedade com backing field (lógica):
    private int _desconto;
    public int Desconto {
        get =&gt; _desconto;
        set =&gt; _desconto = Math.Clamp(value, 0, 100);  // 0-100
    }
}

var p = new Produto("Teclado", 199.9m);
p.AdicionarEstoque(10);
Console.WriteLine(p.ValorEmEstoque);   // 1999.0</code></pre>

<h2>Records vs Classes</h2>
<pre><code>// Record (C# 9): imutável, igualdade por valor, conciso
public record ProdutoDto(string Nome, decimal Preco);

var a = new ProdutoDto("Mouse", 90m);
var b = new ProdutoDto("Mouse", 90m);
a == b;    // true (igualdade por VALOR, não referência)</code></pre>
`
        },
        {
          id: 'cs-propriedades',
          title: '2. Propriedades, init e records',
          summary: 'Get, set, init-only e igualdade por valor.',
          content: `
<h2>init: set só na inicialização</h2>
<pre><code>public class Config {
    public string Tema { get; init; }    // setável no ctor/init, depois imutável
    public int Fonte { get; init; } = 14;
}

var c = new Config { Tema = "dark", Fonte = 16 };
// c.Tema = "light";  ❌ init só no momento da criação</code></pre>

<h2>Records com mutação "with"</h2>
<pre><code>public record Usuario(string Nome, string Email, bool Ativo);

var ana = new Usuario("Ana", "ana@x.dev", true);

// Cópia não-destrutiva (with-expression):
var anaInativa = ana with { Ativo = false };
// ana ainda tem Ativo = true; anaInativa é uma cópia com Ativo = false</code></pre>

<h2>Record struct (C# 10)</h2>
<pre><code>public readonly record struct Ponto(double X, double Y);

var p = new Ponto(3, 4);
var distancia = Math.Sqrt(p.X * p.X + p.Y * p.Y);</code></pre>

<div class="callout callout-tip">
<strong>Quando record vs class:</strong> record = dados (DTOs, configs, value objects). class = comportamento com identidade e estado mutável (serviços, entidades de domínio com lógica).
</div>
`
        },
        {
          id: 'cs-heranca',
          title: '3. Herança e virtual',
          summary: 'Especialização com override e base.',
          content: `
<h2>Sintaxe</h2>
<pre><code>public class Animal {
    public string Nome { get; }

    public Animal(string nome) =&gt; Nome = nome;

    public virtual void EmitirSom() =&gt; Console.WriteLine("som genérico");
}

public class Cachorro : Animal {
    public string Raca { get; }

    public Cachorro(string nome, string raca) : base(nome) {  // chama ctor pai
        Raca = raca;
    }

    public override void EmitirSom() =&gt; Console.WriteLine("Au au!");
}

var rex = new Cachorro("Rex", "vira-lata");
rex.EmitirSom();   // "Au au!"</code></pre>

<h2>sealed: proibir herança</h2>
<pre><code>public sealed class Configuracao { }   // ninguém herda
// "sealed" em método: proíbe override em filhas</code></pre>

<h2>base</h2>
<pre><code>public override void EmitirSom() {
    base.EmitirSom();    // chama a versão do pai
    Console.WriteLine("(especificamente: au au)");
}</code></pre>
`
        },
        {
          id: 'cs-interfaces',
          title: '4. Interfaces e default methods',
          summary: 'Contratos de comportamento.',
          content: `
<h2>Interface</h2>
<pre><code>public interface IComparable&lt;T&gt; {
    int CompareTo(T other);
}

public class Pessoa : IComparable&lt;Pessoa&gt; {
    public string Nome { get; set; }
    public int CompareTo(Pessoa other) =&gt; Nome.CompareTo(other.Nome);
}

// Sort agora sabe ordenar Pessoa:
var lista = new List&lt;Pessoa&gt;();
lista.Sort();</code></pre>

<h2>Múltiplas interfaces</h2>
<pre><code>public interface IVendavel {
    decimal Preco { get; }
    decimal CalcularDesconto() =&gt; Preco * 0.1m;   // default (C# 8+)
}

public interface IEstocavel {
    int Estoque { get; set; }
}

public class Produto : IVendavel, IEstocavel {
    public decimal Preco { get; set; }
    public int Estoque { get; set; }
}</code></pre>

<h2>Polimorfismo com interface</h2>
<pre><code>List&lt;IVendavel&gt; vitrine = new() {
    new Produto { Preco = 100 },
    new Servico { Preco = 200 }
};

foreach (var item in vitrine) {
    Console.WriteLine(item.CalcularDesconto());
}</code></pre>
`
        },
        {
          id: 'cs-abstract',
          title: '5. Classes Abstratas e Pattern Matching',
          summary: 'Modelos incompletos e matching moderno.',
          content: `
<h2>Abstract</h2>
<pre><code>public abstract class Forma {
    public abstract double Area();        // sem corpo: filhos implementam

    public virtual void Descrever() =&gt;
        Console.WriteLine($"Área: {Area():F2}");
}

public class Circulo : Forma {
    public double Raio { get; set; }
    public override double Area() =&gt; Math.PI * Raio * Raio;
}

public class Quadrado : Forma {
    public double Lado { get; set; }
    public override double Area() =&gt; Lado * Lado;
}

// Forma f = new Forma();  ❌ abstrata não instancia</code></pre>

<h2>Pattern matching (C# 7-11)</h2>
<pre><code>Forma forma = new Circulo { Raio = 5 };

// is + declaration:
if (forma is Circulo c) {
    Console.WriteLine($"Raio: {c.Raio}");
}

// switch expression (moderno, conciso):
double area = forma switch {
    Circulo circ =&gt; Math.PI * circ.Raio * circ.Raio,
    Quadrado q   =&gt; q.Lado * q.Lado,
    _            =&gt; 0
};

// Pattern relacional (C# 9):
string nivel = nota switch {
    &gt;= 9 =&gt; "excelente",
    &gt;= 7 =&gt; "bom",
    &gt;= 5 =&gt; "médio",
    _    =&gt; "ruim"
};</code></pre>

<div class="callout callout-tip">
<strong>Abstract vs interface:</strong> abstract quando há código compartilhado + método sem impl; interface quando só contrato (e uma classe pode implementar várias). Com defaults em interfaces (C# 8+), a fronteira ficou tênue — escolha pela semântica.
</div>
`
        }
      ]
    },
    {
      id: 'cs-colecoes-linq',
      title: 'Coleções e LINQ',
      description: 'Listas, dicionários e consultas integradas.',
      lessons: [
        {
          id: 'cs-listas',
          title: '1. List, Dictionary e IEnumerable',
          summary: 'Coleções genéricas.',
          content: `
<h2>List</h2>
<pre><code>using System.Collections.Generic;

var numeros = new List&lt;int&gt; { 1, 2, 3 };

numeros.Add(4);
numeros.AddRange(new[] { 5, 6 });
numeros.Count;              // 6
numeros[0];                 // 1
numeros.Contains(3);        // true
numeros.IndexOf(2);         // 1
numeros.Remove(3);
numeros.RemoveAt(0);

foreach (var n in numeros) Console.WriteLine(n);</code></pre>

<h2>Dictionary</h2>
<pre><code>var idades = new Dictionary&lt;string, int&gt; {
    ["Ana"] = 25,
    ["Bia"] = 30
};

idades["Caio"] = 22;          // adiciona
idades["Ana"];                // 25
idades.TryGetValue("Bia", out int b);  // true + b=30

if (!idades.ContainsKey("Diego")) {
    idades["Diego"] = 28;
}

foreach (var (nome, idade) in idades) {
    Console.WriteLine($"{nome}: {idade}");
}</code></pre>

<h2>HashSet: únicos e rápidos</h2>
<pre><code>var tags = new HashSet&lt;string&gt; { "js", "css", "js" };
// {"js", "css"} — duplicata ignorada, busca O(1)</code></pre>

<h2>IEnumerable: a base de tudo</h2>
<p>Toda coleção implementa <code>IEnumerable&lt;T&gt;</code> — é o que torna LINQ e foreach possíveis. Coleções podem ser lazy (<code>yield return</code>).</p>
`
        },
        {
          id: 'cs-linq',
          title: '2. LINQ',
          summary: 'Consultas declarativas sobre coleções.',
          content: `
<h2>Sintaxe de método (a mais comum)</h2>
<pre><code>using System.Linq;

var produtos = new List&lt;Produto&gt; {
    new("Teclado", 200),
    new("Mouse", 90),
    new("Monitor", 900),
    new("Webcam", 150)
};

// Where + Select (filter + map):
var nomes = produtos
    .Where(p =&gt; p.Preco &gt; 100)
    .Select(p =&gt; p.Nome.ToUpper());

// Ordenação:
var ordenados = produtos.OrderBy(p =&gt; p.Preco).ThenBy(p =&gt; p.Nome);

// Agregações:
produtos.Count();
produtos.Sum(p =&gt; p.Preco);
produtos.Average(p =&gt; p.Preco);
produtos.Min(p =&gt; p.Preco);
produtos.Max(p =&gt; p.Preco);

// Primeiro que satisfaz (ou default):
produtos.FirstOrDefault(p =&gt; p.Preco &lt; 100);

// Agrupamento:
var porFaixa = produtos.GroupBy(p =&gt; p.Preco &lt; 200 ? "barato" : "caro");
foreach (var grupo in porFaixa) {
    Console.WriteLine($"{grupo.Key}: {grupo.Count()} itens");
}</code></pre>

<h2>Sintaxe de query (SQL-ish)</h2>
<pre><code>var caros = from p in produtos
            where p.Preco &gt; 100
            orderby p.Preco descending
            select new { p.Nome, p.Preco };</code></pre>

<div class="callout callout-tip">
LINQ é <strong>lazy</strong>: a consulta só roda quando você itera. <code>ToList()</code> / <code>ToArray()</code> materializam. Em EF Core, o LINQ é traduzido para SQL — o mesmo código, dois mundos.
</div>
`
        },
        {
          id: 'cs-lambda',
          title: '3. Lambdas, Delegates e Events',
          summary: 'Funções como valores.',
          content: `
<h2>Func, Action, Predicate</h2>
<pre><code>using System;

// Func&lt;T, TResult&gt;: recebe T, devolve TResult
Func&lt;int, int&gt; dobrar = x =&gt; x * 2;
dobrar(5);   // 10

Func&lt;int, int, int&gt; soma = (a, b) =&gt; a + b;

// Action&lt;T&gt;: recebe T, não retorna nada
Action&lt;string&gt; logar = msg =&gt; Console.WriteLine($"[LOG] {msg}");
logar("iniciando");

// Predicate&lt;T&gt;: recebe T, devolve bool
Predicate&lt;int&gt; ehPar = n =&gt; n % 2 == 0;</code></pre>

<h2>Events</h2>
<pre><code>public class Carrinho {
    public event EventHandler? ItemAdicionado;

    public void Adicionar(string item) {
        // ...lógica...
        ItemAdicionado?.Invoke(this, EventArgs.Empty);
    }
}

var carrinho = new Carrinho();
carrinho.ItemAdicionado += (s, e) =&gt; Console.WriteLine("Item adicionado!");
carrinho.Adicionar("SSD");</code></pre>

<h2>Delegates custom</h2>
<pre><code>public delegate bool Validador&lt;T&gt;(T valor);

bool ValidarEmail(string email) =&gt; email.Contains("@");

Validador&lt;string&gt; val = ValidarEmail;
val("ana@x.dev");   // true</code></pre>
`
        },
        {
          id: 'cs-extension',
          title: '4. Métodos de Extensão e yield',
          summary: 'Estender tipos e lazy evaluation.',
          content: `
<h2>Métodos de extensão</h2>
<pre><code>public static class StringExtensions {
    public static string Capitalize(this string s) {
        if (string.IsNullOrEmpty(s)) return s;
        return char.ToUpper(s[0]) + s.Substring(1).ToLower();
    }

    public static bool IsValidEmail(this string email)
        =&gt; email.Contains("@") &amp;&amp; email.Contains(".");
}

// Agora toda string tem esses métodos:
"ana".Capitalize();          // "Ana"
"ana@x.dev".IsValidEmail();  // true</code></pre>

<h2>yield: geradores</h2>
<pre><code>public static IEnumerable&lt;int&gt; Fibonacci(int n) {
    int a = 0, b = 1;
    for (int i = 0; i &lt; n; i++) {
        yield return a;
        (a, b) = (b, a + b);
    }
}

// Lazy: cada número é gerado sob demanda
foreach (var f in Fibonacci(10)) {
    Console.WriteLine(f);   // 0 1 1 2 3 5 8 13 21 34
}

// Pode parar no meio sem calcular o resto:
Fibonacci(1_000_000).Take(10).ToList();   // só gera 10!</code></pre>

<h2>Tuplas</h2>
<pre><code>(string Nome, int Idade) p = ("Ana", 25);
Console.WriteLine(p.Nome);   // "Ana"

// Decomposição:
var (nome, idade) = p;

// Retorno múltiplo:
(int, string) Classificar(int nota) =&gt;
    nota &gt;= 7 ? (nota, "aprovado") : (nota, "reprovado");

var (n, status) = Classificar(8);</code></pre>
`
        }
      ]
    },
    {
      id: 'cs-assincrono',
      title: 'Assíncrono e Exceções',
      description: 'async/await, Tasks e tratamento de erros.',
      lessons: [
        {
          id: 'cs-task',
          title: '1. Task e async/await',
          summary: 'Operações assíncronas sem travar a thread.',
          content: `
<h2>A ideia</h2>
<p>Operações de I/O (rede, disco, banco) demoram. <code>async/await</code> permite esperar sem <strong>travar a thread</strong> — essencial em UI e servidores web (atender mais usuários com menos threads):</p>
<pre><code>public async Task&lt;string&gt; BuscarUsuarioAsync(int id) {
    using var client = new HttpClient();
    var resposta = await client.GetAsync($"https://api.exemplo.dev/users/{id}");
    resposta.EnsureSuccessStatusCode();
    return await resposta.Content.ReadAsStringAsync();
}

// Quem chama também precisa ser async:
public async Task ProcessarAsync() {
    string json = await BuscarUsuarioAsync(42);
    Console.WriteLine(json);
}</code></pre>

<h2>Paralelismo</h2>
<pre><code>// Roda as duas em paralelo e espera ambas:
var t1 = BuscarUsuarioAsync(1);
var t2 = BuscarUsuarioAsync(2);
await Task.WhenAll(t1, t2);

// Ou:
string[] resultados = await Task.WhenAll(
    BuscarUsuarioAsync(1),
    BuscarUsuarioAsync(2)
);</code></pre>

<h2>ConfigureAwait(false)</h2>
<pre><code>// Em código de biblioteca (sem UI), evita capturar contexto:
await FazerAlgoAsync().ConfigureAwait(false);
// Em apps de console/backend, costuma ser irrelevante.
// Em GUI (WPF/WinForms), evita deadlocks.</code></pre>

<div class="callout callout-warning">
<strong>async void:</strong> evite (só em event handlers). Não pode ser aguardado, erros não propagam, pode travar o app. Use <code>async Task</code>.
</div>
`
        },
        {
          id: 'cs-exceptions',
          title: '2. Exceções e Result',
          summary: 'try/catch e padrões modernos de erro.',
          content: `
<h2>try/catch/finally</h2>
<pre><code>try {
    var dados = File.ReadAllText(caminho);
    Processar(dados);
}
catch (FileNotFoundException ex) {
    Console.WriteLine($"Arquivo não existe: {ex.FileName}");
}
catch (IOException ex) when (ex.Message.Contains("permissão")) {
    // filtro de exceção (C# 6) — só captura se a condição for true
    Console.WriteLine("Sem permissão");
}
catch (Exception ex) {
    Console.WriteLine($"Erro inesperado: {ex.Message}");
    throw;   // re-lança mantendo a stack original
}
finally {
    // sempre roda (com ou sem erro)
    LimparRecursos();
}</code></pre>

<h2>Lançando</h2>
<pre><code>throw new ArgumentException("Valor inválido", nameof(valor));

// Exceção customizada:
public class ErroDominio : Exception {
    public string Codigo { get; }
    public ErroDominio(string msg, string codigo) : base(msg) {
        Codigo = codigo;
    }
}</code></pre>

<h2>Padrão Result (sem exceções para fluxo normal)</h2>
<pre><code>public record Result&lt;T&gt;(T? Valor, string? Erro) {
    public bool Sucesso =&gt; Erro is null;
    public static Result&lt;T&gt; Ok(T v) =&gt; new(v, null);
    public static Result&lt;T&gt; Falha(string e) =&gt; new(default, e);
}

var r = Dividir(10, 0);
if (r.Sucesso) Console.WriteLine(r.Valor);
else Console.WriteLine(r.Erro);</code></pre>

<div class="callout callout-tip">
Exceções são para <strong>caminhos excepcionais</strong>. Para validação de entrada e regras de negócio esperadas (que podem falhar com frequência), prefira o padrão Result — mais rápido e explícito.
</div>
`
        },
        {
          id: 'cs-linq-io',
          title: '3. Arquivos e JSON',
          summary: 'System.IO e System.Text.Json.',
          content: `
<h2>Lendo e escrevendo</h2>
<pre><code>using System.IO;

// Texto inteiro:
string texto = File.ReadAllText("dados.txt");
File.WriteAllText("saida.txt", "novo conteúdo");

// Linha por linha (memória constante):
foreach (var linha in File.ReadLines("grande.log")) {
    if (linha.Contains("ERRO")) Console.WriteLine(linha);
}

// Informações do arquivo:
var info = new FileInfo("dados.txt");
info.Length;
info.LastWriteTime;
info.Exists;

// Diretórios:
Directory.CreateDirectory("logs");
Directory.GetFiles("logs", "*.log");
Directory.Delete("temp", recursive: true);

// Path (multiplataforma):
string caminho = Path.Combine("logs", "app.log");   // logs/app.log (ou \\ no Windows)
Path.GetExtension("foto.jpg");    // .jpg
Path.GetFileName("/x/y.txt");     // y.txt
Path.GetTempPath();                // pasta temporária do SO</code></pre>

<h2>JSON com System.Text.Json</h2>
<pre><code>using System.Text.Json;

var produto = new Produto("Teclado", 200);
var opts = new JsonSerializerOptions { WriteIndented = true };

// Serializar:
string json = JsonSerializer.Serialize(produto, opts);
File.WriteAllText("produto.json", json);

// Desserializar:
var lido = JsonSerializer.Deserialize&lt;Produto&gt;(File.ReadAllText("produto.json"));</code></pre>
`
        },
        {
          id: 'cs-testes',
          title: '4. Testes Unitários',
          summary: 'xUnit e FluentAssertions.',
          content: `
<h2>Criando projeto de testes</h2>
<pre><code>dotnet new xunit -o MeuApp.Tests
cd MeuApp.Tests
dotnet add reference ../MeuApp/MeuApp.csproj</code></pre>

<h2>Escrevendo testes</h2>
<pre><code>public class CalculadoraTests {
    [Fact]
    public void Soma_DeveRetornarResultado() {
        var calc = new Calculadora();
        Assert.Equal(7, calc.Somar(3, 4));
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(10, 20, 30)]
    [InlineData(-5, 5, 0)]
    public void Soma_VariosCasos(int a, int b, int esperado) {
        var calc = new Calculadora();
        Assert.Equal(esperado, calc.Somar(a, b));
    }
}</code></pre>

<h2>AAA: Arrange, Act, Assert</h2>
<pre><code>[Fact]
public void Saque_SaldoInsuficiente_DeveLancar() {
    // Arrange
    var conta = new Conta(100);

    // Act + Assert
    Assert.Throws&lt;SaldoInsuficienteException&gt;(
        () =&gt; conta.Sacar(200)
    );
}</code></pre>

<pre><code># Rodar testes:
dotnet test

# Com cobertura:
dotnet test --collect:"XPlat Code Coverage"</code></pre>
`
        }
      ]
    },
    {
      id: 'cs-ecossistema',
      title: 'Ecossistema .NET',
      description: 'ASP.NET, EF Core e publicação.',
      lessons: [
        {
          id: 'cs-aspnet',
          title: '1. ASP.NET Core Minimal APIs',
          summary: 'APIs web enxutas.',
          content: `
<h2>API mínima</h2>
<pre><code>var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/produtos", () =&gt; new[] {
    new { Id = 1, Nome = "Teclado" },
    new { Id = 2, Nome = "Mouse" }
});

app.MapGet("/produtos/{id}", (int id) =&gt; new { Id = id, Nome = "Produto" + id });

app.MapPost("/produtos", (Produto p) =&gt; {
    // salvar...
    return Results.Created($"/produtos/{p.Id}", p);
});

app.Run();</code></pre>

<h2>Rodar</h2>
<pre><code>dotnet run
# API em http://localhost:5000
# Teste: curl http://localhost:5000/produtos</code></pre>

<h2>Controllers (clássico, mais estruturado)</h2>
<pre><code>[ApiController]
[Route("api/[controller]")]
public class ProdutosController : ControllerBase {
    [HttpGet]
    public IEnumerable&lt;Produto&gt; Listar() =&gt; _repo.Todos();

    [HttpGet("{id}")]
    public ActionResult&lt;Produto&gt; Buscar(int id) {
        var p = _repo.PorId(id);
        return p is null ? NotFound() : p;
    }

    [HttpPost]
    public ActionResult&lt;Produto&gt; Criar(Produto p) {
        _repo.Salvar(p);
        return CreatedAtAction(nameof(Buscar), new { id = p.Id }, p);
    }
}</code></pre>
`
        },
        {
          id: 'cs-efcore',
          title: '2. EF Core (ORM)',
          summary: 'Mapear classes C# para tabelas SQL.',
          content: `
<h2>DbContext</h2>
<pre><code>using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext {
    public DbSet&lt;Produto&gt; Produtos =&gt; Set&lt;Produto&gt;();
    public DbSet&lt;Usuario&gt; Usuarios =&gt; Set&lt;Usuario&gt;();

    public AppDbContext(DbContextOptions opts) : base(opts) { }

    protected override void OnModelCreating(ModelBuilder mb) {
        mb.Entity&lt;Produto&gt;(b =&gt; {
            b.HasKey(p =&gt; p.Id);
            b.Property(p =&gt; p.Nome).IsRequired().HasMaxLength(100);
            b.HasIndex(p =&gt; p.Nome);
        });
    }
}</code></pre>

<h2>Consultas com LINQ → SQL</h2>
<pre><code>using var db = new AppDbContext(opts);

// INSERT:
db.Produtos.Add(new Produto { Nome = "SSD", Preco = 350 });
await db.SaveChangesAsync();

// SELECT (LINQ vira SQL sob o hood):
var caros = await db.Produtos
    .Where(p =&gt; p.Preco &gt; 100)
    .OrderByDescending(p =&gt; p.Preco)
    .ToListAsync();

// UPDATE:
var p = await db.Produtos.FindAsync(1);
p.Preco = 180;
await db.SaveChangesAsync();

// DELETE:
db.Produtos.Remove(p);
await db.SaveChangesAsync();</code></pre>

<h2>Migrations</h2>
<pre><code>dotnet ef migrations add Inicial
dotnet ef database update
# Gera o SQL que cria as tabelas baseadas nas suas classes</code></pre>
`
        },
        {
          id: 'cs-injecao',
          title: '3. Injeção de Dependência',
          summary: 'DI nativo do .NET.',
          content: `
<h2>O padrão</h2>
<p>Em vez de <code>new Servico()</code> dentro da classe, você recebe do construtor — facilita teste (mock) e troca de implementação:</p>
<pre><code>// 1. Defina a abstração:
public interface IRepositorio&lt;T&gt; { Task&lt;T?&gt; Buscar(int id); }

// 2. Implementação:
public class ProdutoRepo : IRepositorio&lt;Produto&gt; {
    public Task&lt;Produto?&gt; Buscar(int id) { /* ... */ }
}

// 3. Registre no container:
builder.Services.AddScoped&lt;IRepositorio&lt;Produto&gt;, ProdutoRepo&gt;();

// 4. Receba no construtor:
app.MapGet("/produtos/{id}", async (int id, IRepositorio&lt;Produto&gt; repo) =&gt; {
    var p = await repo.Buscar(id);
    return p is null ? Results.NotFound() : Results.Ok(p);
});</code></pre>

<h2>Tempos de vida</h2>
<ul>
  <li><strong>Transient:</strong> novo a cada pedido.</li>
  <li><strong>Scoped:</strong> um por request HTTP (ideal para repositórios com DbContext).</li>
  <li><strong>Singleton:</strong> um para toda a aplicação (cache, configs).</li>
</ul>

<div class="callout callout-tip">
DI é a base do ASP.NET moderno — todo o pipeline (controllers, middlewares, minimal APIs) recebe dependências. Aprender isso libera o poder do ecossistema.
</div>
`
        },
        {
          id: 'cs-publicacao',
          title: '4. Build, Docker e Publicação',
          summary: 'Levar para produção.',
          content: `
<h2>Publicação</h2>
<pre><code># Publica otimizado para produção:
dotnet publish -c Release -o ./publicar

# Self-contained (não precisa do .NET no servidor):
dotnet publish -c Release -r linux-x64 --self-contained -o ./publicar

# Single-file (um executável só):
dotnet publish -c Release -r linux-x64 --self-contained -p:PublishSingleFile=true</code></pre>

<h2>Dockerfile</h2>
<pre><code>FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
ENTRYPOINT ["dotnet", "MeuApp.dll"]</code></pre>

<pre><code>docker build -t meuapp .
docker run -p 8080:8080 meuapp</code></pre>

<h2>Configuração por ambiente</h2>
<pre><code>// appsettings.json (base), appsettings.Production.json (override)
builder.Configuration.GetConnectionString("Default");

// Variáveis de ambiente sobrescrevem:
ConnectionStrings__Default=...   // __ vira :</code></pre>

<h2>Observabilidade</h2>
<ul>
  <li><strong>Logs:</strong> <code>ILogger&lt;T&gt;</code> via DI (structurado com Serilog).</li>
  <li><strong>Métricas:</strong> <code>System.Diagnostics.Metrics</code>.</li>
  <li><strong>Tracing:</strong> OpenTelemetry (distribuído).</li>
</ul>

<div class="callout callout-tip">
C# e .NET são open-source e multiplataforma desde 2016. Esqueça o "C# é só Windows" — hoje roda em Linux, macOS, containers e é a stack de prod de grandes como Stack Overflow, Alibaba e Microsoft.
</div>
`
        }
      ]
    }
  ]
};
