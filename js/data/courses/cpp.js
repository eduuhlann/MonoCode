// MonoCode — Curso Completo de C++
// 6 módulos • 25 lições com explicações didáticas completas

export const CPP_COURSE = {
  id: 'cpp',
  name: 'C++',
  language: 'C++',
  level: 'Intermediário a Avançado',
  levelTag: 'intermediario',
  shortDesc: 'C++ moderno: POO, STL, RAII, smart pointers e templates para sistemas de alta performance.',
  description: 'Trilha completa de C++ cobrindo a base da linguagem, orientação a objetos, STL, gerenciamento de memória com RAII e smart pointers, templates, lambdas, concorrência e C++ moderno (11/14/17/20).',
  tags: ['Sistemas', 'Performance', 'POO', 'STL'],
  modules: [
    {
      id: 'cpp-fundamentos',
      title: 'Fundamentos do C++',
      description: 'Do C para o C++: streams, referências e namespaces.',
      lessons: [
        {
          id: 'cpp-intro',
          title: '1. O que é C++',
          summary: 'C com classes, templates e a STL.',
          content: `
<h2>Mais que C</h2>
<p>C++ (1985, Bjarne Stroustrup) começou como "C com Classes" e evoluiu para uma linguagem multi-paradigma: orientação a objetos, genérica (templates) e funcional (lambdas). Mantém a performance do C e adiciona abstrações de alto nível <strong>sem custo em runtime</strong> (zero-cost abstractions).</p>

<h2>Compilando</h2>
<pre><code>g++ -std=c++17 -Wall -O2 programa.cpp -o programa
# -std=c++17  use o padrão moderno (c++20/c++23 se disponível)
# -O2         otimização
# -Wall       avisos</code></pre>

<h2>Olá, mundo</h2>
<pre><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Olá, MonoCode!" &lt;&lt; std::endl;
    return 0;
}</code></pre>

<h2>O que C++ traz além de C</h2>
<ul>
  <li><strong>STL:</strong> vector, string, map, algoritmos prontos.</li>
  <li><strong>RAII:</strong> recursos amarrados ao ciclo de vida do objeto.</li>
  <li><strong>Templates:</strong> código genérico.</li>
  <li><strong>Referências:</strong> alias sem a sintaxe pesada de ponteiros.</li>
  <li><strong>Smart pointers:</strong> memória automaticamente gerenciada.</li>
</ul>

<div class="callout callout-tip">
<strong>Padrões modernos:</strong> C++11 foi a "renascença" (auto, lambdas, smart ptrs). Use <strong>C++17</strong> como mínimo atual; <strong>C++20</strong> traz concepts, ranges e coroutines.
</div>
`
        },
        {
          id: 'cpp-cout',
          title: '2. Streams: cout e cin',
          summary: 'Entrada/saída moderna sem printf/scanf.',
          content: `
<h2>Saída com cout</h2>
<pre><code>#include &lt;iostream&gt;
#include &lt;iomanip&gt;       // setprecision

int main() {
    int idade = 25;
    double altura = 1.68;
    std::string nome = "Ana";

    std::cout &lt;&lt; "Nome: " &lt;&lt; nome &lt;&lt; "\\n";
    std::cout &lt;&lt; "Idade: " &lt;&lt; idade &lt;&lt; " anos\\n";

    // Formatação de decimais:
    std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2) &lt;&lt; altura &lt;&lt; "\\n";
}</code></pre>

<h2>Entrada com cin</h2>
<pre><code>int n;
std::cin &gt;&gt; n;          // já converte para int

std::string nome;
std::cin &gt;&gt; nome;        // lê UMA palavra (até espaço)
std::getline(std::cin, nome);  // lê linha com espaços

// Validação de falha:
if (std::cin.fail()) {
    std::cin.clear();
    std::cin.ignore(10000, '\\n');
}</code></pre>

<p>Streams são <strong>type-safe</strong> (sem os erros de printf com %d errado) e se adaptam ao tipo. Em código crítico de performance, printf ainda é mais rápido.</p>
`
        },
        {
          id: 'cpp-namespaces',
          title: '3. Namespaces e std',
          summary: 'Evitando colisões de nomes.',
          content: `
<h2>O problema</h2>
<p>Em projetos grandes, duas bibliotecas podem ter uma função <code>print()</code>. Namespaces criam "caixas" separadas para os nomes:</p>
<pre><code>namespace matematica {
    int soma(int a, int b) { return a + b; }
}

namespace logica {
    bool soma(bool a, bool b) { return a &amp;&amp; b; }
}

matematica::soma(2, 3);     // 5
logica::soma(true, false);  // false</code></pre>

<h2>using</h2>
<pre><code>using std::cout;        // só cout
using namespace std;     // TUDO (evite em headers!)</code></pre>

<h2>O std</h2>
<p>Toda a biblioteca padrão vive em <code>std</code>. Por isso <code>std::vector</code>, <code>std::string</code>:</p>
<pre><code>#include &lt;vector&gt;
#include &lt;string&gt;

int main() {
    std::vector&lt;int&gt; v;
    std::string nome = "Ana";

    using namespace std;     // em .cpp (não .h)
    vector&lt;int&gt; w;           // ok aqui
}</code></pre>

<div class="callout callout-warning">
<strong>Nunca</strong> <code>using namespace std;</code> em cabeçalhos (.h) — quem inclui herda a poluição e pode ter colisões inesperadas. Em .cpp é tolerável.
</div>
`
        },
        {
          id: 'cpp-references',
          title: '4. Referências',
          summary: 'Aliases para variáveis — mais seguro que ponteiros.',
          content: `
<h2>A referência</h2>
<pre><code>int x = 10;
int &amp;ref = x;       // ref é um alias de x (a MESMA variável)

ref = 20;
std::cout &lt;&lt; x;    // 20

// Diferenças do ponteiro:
// 1. DEVE ser inicializada ao ser criada
// 2. NÃO pode ser nula
// 3. NÃO pode ser reapontada para outra variável
// 4. Sintaxe limpa (sem * e &amp; ao usar)</code></pre>

<h2>Passagem por referência (evita cópia!)</h2>
<pre><code>// Por valor — COPIA a string inteira (caro):
void imprimir(std::string texto);

// Por referência — passa o original sem copiar:
void imprimir(const std::string&amp; texto);   // const: não muda

std::string nome = "Ana Maria da Silva Costa";
imprimir(nome);     // sem cópia, e a função garante não mexer</code></pre>

<h2>Para modificar</h2>
<pre><code>void dobrar(int &amp;n) { n *= 2; }

int x = 10;
dobrar(x);
std::cout &lt;&lt; x;    // 20</code></pre>

<div class="callout callout-tip">
<strong>Regra:</strong> <code>const T&amp;</code> para leitura, <code>T&amp;</code> para modificar, por valor (<code>T</code>) quando o objeto é pequeno (int, char). Para objetos grandes que você vai guardar, considere mover (próximas lições).
</div>
`
        },
        {
          id: 'cpp-funcoes-overload',
          title: '5. Overload, Default e auto',
          summary: 'Múltiplas assinaturas e argumentos padrão.',
          content: `
<h2>Function overloading</h2>
<pre><code>int    soma(int a, int b)         { return a + b; }
double soma(double a, double b)   { return a + b; }
int    soma(int a, int b, int c)  { return a + b + c; }

soma(2, 3);        // int/int
soma(2.5, 3.5);    // double/double
soma(1, 2, 3);     // 3 argumentos</code></pre>

<h2>Argumentos padrão</h2>
<pre><code>void logar(std::string msg, std::string nivel = "INFO") {
    std::cout &lt;&lt; "[" &lt;&lt; nivel &lt;&lt; "] " &lt;&lt; msg &lt;&lt; "\\n";
}

logar("iniciando");           // [INFO] iniciando
logar("erro!", "ERRO");       // [ERRO] erro!</code></pre>

<h2>auto e constexpr</h2>
<pre><code>auto soma(int a, int b) { return a + b; }   // deduz retorno (C++14)

auto x = 42;                  // int
auto s = std::string("Ana");  // std::string

constexpr int dobro(int x) { return x * 2; }   // avaliado em compilação
int arr[dobro(5)];            // array de tamanho 10 — em compilação!</code></pre>
`
        }
      ]
    },
    {
      id: 'cpp-poo',
      title: 'Orientação a Objetos',
      description: 'Classes, herança e polimorfismo.',
      lessons: [
        {
          id: 'cpp-classes',
          title: '1. Classes',
          summary: 'Atributos, métodos e modificadores de acesso.',
          content: `
<h2>A anatomia</h2>
<pre><code>class Carro {
private:                   // só a classe vê (encapsulamento)
    std::string modelo;
    double velocidade = 0;

public:                    // qualquer um vê
    Carro(std::string m) : modelo(m) {}   // construtor

    void acelerar(double delta) {
        velocidade += delta;
    }

    double getVelocidade() const { return velocidade; }  // const: não muda
    std::string getModelo() const { return modelo; }
};

Carro fusca("Fusca 1975");
fusca.acelerar(20);
std::cout &lt;&lt; fusca.getModelo() &lt;&lt; ": " &lt;&lt; fusca.getVelocidade() &lt;&lt; " km/h\\n";</code></pre>

<h2>Os três modificadores</h2>
<ul>
  <li><strong>public:</strong> acessível de qualquer lugar.</li>
  <li><strong>private:</strong> só a própria classe (padrão em class).</li>
  <li><strong>protected:</strong> a classe e herdeiros.</li>
</ul>

<h2>struct vs class</h2>
<pre><code>struct Ponto { int x, y; };   // membros public por padrão
class  Ponto { int x, y; };   // membros private por padrão</code></pre>

<div class="callout callout-tip">
<strong>Métodos const:</strong> marque com <code>const</code> todo método que não altera o estado — permite chamar em instâncias const e documenta a intenção.
</div>
`
        },
        {
          id: 'cpp-construtores',
          title: '2. Construtores, Destrutores e RAII',
          summary: 'O ciclo de vida do objeto gerencia recursos.',
          content: `
<h2>Construtores</h2>
<pre><code>class Conta {
    std::string titular;
    double saldo;
public:
    // Construtor default (sem args):
    Conta() : titular("Anônimo"), saldo(0) {}

    // Construtor parametrizado:
    Conta(std::string t, double s = 0) : titular(t), saldo(s) {}

    // Construtor de cópia:
    Conta(const Conta&amp; outra) : titular(outra.titular), saldo(outra.saldo) {}
};

Conta a;                      // usa default
Conta b("Ana", 100);          // usa parametrizado
Conta c = b;                  // usa cópia</code></pre>

<h2>Destrutor e RAII</h2>
<pre><code>class Arquivo {
    FILE* fp;
public:
    Arquivo(const char* caminho) {
        fp = fopen(caminho, "r");
        if (!fp) throw std::runtime_error("não abriu");
    }
    ~Arquivo() {         // destrutor: rota ao SAIR DO ESCOPO
        if (fp) fclose(fp);
    }
    // ...métodos que usam fp...
};

void processar() {
    Arquivo f("dados.txt");   // abre
    // ...usa...
}   // aqui ~Arquivo rota: fclose automático, mesmo com return/throw!</code></pre>

<p><strong>RAII</strong> (Resource Acquisition Is Initialization): o recurso é adquirido no construtor e liberado no destrutor. O compilador garante a liberação — sem leaks, mesmo com exceções.</p>
`
        },
        {
          id: 'cpp-heranca',
          title: '3. Herança',
          summary: 'Especialização e reúso.',
          content: `
<h2>Sintaxe</h2>
<pre><code>class Animal {
public:
    std::string nome;
    Animal(std::string n) : nome(n) {}
    virtual void emitirSom() const {         // virtual: permite override
        std::cout &lt;&lt; "som genérico\\n";
    }
    virtual ~Animal() = default;             // destrutor virtual: essencial!
};

class Cachorro : public Animal {             // herda publicamente
    std::string raca;
public:
    Cachorro(std::string n, std::string r) : Animal(n), raca(r) {}

    void emitirSom() const override {        // override: sobrescreve
        std::cout &lt;&lt; "Au au!\\n";
    }
};

Cachorro rex("Rex", "vira-lata");
rex.emitirSom();    // "Au au!"</code></pre>

<h2>Ponteiros da base</h2>
<pre><code>Animal* a = new Cachorro("Rex", "labrador");
a-&gt;emitirSom();     // "Au au!" — polimorfismo (precisa virtual!)

delete a;           // sem virtual no destrutor: UB!</code></pre>

<div class="callout callout-warning">
<strong>Regra absoluta:</strong> se uma classe tem <em>qualquer</em> método virtual, o destrutor também deve ser virtual — senão <code>delete</code> via ponteiro da base não chama o destrutor da filha, vazando recursos.
</div>
`
        },
        {
          id: 'cpp-polimorfismo',
          title: '4. Polimorfismo e virtual',
          summary: 'Métodos virtuais, abstract e final.',
          content: `
<h2>Polimorfismo com virtual</h2>
<pre><code>std::vector&lt;std::unique_ptr&lt;Animal&gt;&gt; zoo;
zoo.push_back(std::make_unique&lt;Cachorro&gt;("Rex", "vira"));
zoo.push_back(std::make_unique&lt;Gato&gt;("Mia"));

for (const auto&amp; a : zoo) {
    a-&gt;emitirSom();   // cada um com seu som — polimorfismo!
}</code></pre>

<h2>Classe abstrata (pure virtual)</h2>
<pre><code>class Forma {
public:
    virtual double area() const = 0;     // = 0: abstrata, sem corpo
    virtual ~Forma() = default;
};

class Circulo : public Forma {
    double r;
public:
    explicit Circulo(double raio) : r(raio) {}
    double area() const override { return 3.14159 * r * r; }
};

// Forma f;       ❌ abstrata não instancia
Circulo c(5);     // ok</code></pre>

<h2>final: proibir mais herança/override</h2>
<pre><code>class Base final {};        // ninguém herda de Base
class Derivada : public Base {
    void metodo() override final;   // Derivada pode, filhos não
};</code></pre>

<h2>Custo do virtual</h2>
<p>Cada classe polimórfica ganha uma <strong>vtable</strong> (tabela de ponteiros) e cada chamada é indireta (vtable lookup). É pequeno, mas em loops críticos, evite se não precisar.</p>
`
        }
      ]
    },
    {
      id: 'cpp-stl',
      title: 'STL — Standard Template Library',
      description: 'Contêineres, algoritmos e iteradores.',
      lessons: [
        {
          id: 'cpp-vector',
          title: '1. vector',
          summary: 'Array dinâmico — o contêiner mais usado.',
          content: `
<h2>Por que vector</h2>
<p>Arrays do C são fixos. <code>std::vector</code> cresce sozinho, sabe seu tamanho, libera memória no destrutor (RAII) e é tão rápido quanto array bruto:</p>
<pre><code>#include &lt;vector&gt;

std::vector&lt;int&gt; v;        // vazio
std::vector&lt;int&gt; v1 = {1, 2, 3};

v.push_back(10);          // adiciona no fim
v.push_back(20);
v.size();                 // 2
v[0];                     // 10 (sem checar limites)
v.at(0);                  // 10 (CHECA limites — lança out_of_range)

v.pop_back();             // remove do fim
v.empty();                // true/false
v.clear();                // esvazia

// Iteração:
for (int x : v) std::cout &lt;&lt; x &lt;&lt; "\\n";          // por valor (cópia)
for (const int&amp; x : v) std::cout &lt;&lt; x &lt;&lt; "\\n";   // por ref (rápido)

// Reserva para evitar realocações:
v.reserve(1000);          // aloca espaço pra 1000 de uma vez</code></pre>

<h2>vector 2D</h2>
<pre><code>std::vector&lt;std::vector&lt;int&gt;&gt; matriz(3, std::vector&lt;int&gt;(4, 0));
// 3 linhas × 4 colunas, tudo zero
matriz[1][2] = 5;</code></pre>

<div class="callout callout-tip">
<strong>Performance:</strong> <code>push_back</code> é O(1) amortizado. Se você sabe o tamanho, <code>reserve()</code> antes do loop elimina realocações.
</div>
`
        },
        {
          id: 'cpp-string',
          title: '2. std::string',
          summary: 'Strings modernas sem pesadelo de char*.',
          content: `
<h2>Básico</h2>
<pre><code>#include &lt;string&gt;

std::string s = "Olá";
std::string t("Mundo");

s.size();              // 3 (ou s.length())
s + " " + t;           // "Olá Mundo"
s += "!";              // s agora "Olá!"
s[0];                  // 'O'
s.substr(0, 2);        // "Ol"
s.find("lá");          // 2 (posição) ou std::string::npos
s.replace(0, 2, "OI"); // "OIá"
s.empty();             // false

// Comparação (final do strcmp):
s == "Olá";            // true
s &lt; "Z";               // true (lexicográfico)</code></pre>

<h2>Conversões</h2>
<pre><code>std::to_string(42);          // "42"
std::to_string(3.14);        // "3.140000"
std::stoi("42");             // 42 (int)
std::stod("3.14");           // 3.14 (double)

// Cuidado com stoi em string inválida:
try { std::stoi("abc"); }
catch (const std::invalid_argument&amp;) { /* ... */ }</code></pre>

<h2>std::string_view (C++17): leitura sem cópia</h2>
<pre><code>#include &lt;string_view&gt;

// Em vez de const std::string&amp; (pode implicar alocação),
// string_view é uma "fatia" não-dona — barato:
void processar(std::string_view sv);

processar("literal");       // sem alocação
processar(std::string("x")); // sem cópia
processar(s);</code></pre>
`
        },
        {
          id: 'cpp-map',
          title: '3. map, unordered_map e set',
          summary: 'Dicionários e conjuntos.',
          content: `
<h2>map: ordenado por chave</h2>
<pre><code>#include &lt;map&gt;

std::map&lt;std::string, int&gt; idades;
idades["Ana"] = 25;
idades["Bia"] = 30;
idades.insert({"Caio", 22});

idades["Ana"];            // 25
idades.count("Bia");      // 1 (existe)
idades.size();            // 3

// Iteração (ordenada por chave):
for (const auto&amp; [nome, idade] : idades) {
    std::cout &lt;&lt; nome &lt;&lt; ": " &lt;&lt; idade &lt;&lt; "\\n";
}
// Ana: 25, Bia: 30, Caio: 22 (em ordem alfabética)

idades.erase("Ana");</code></pre>

<h2>unordered_map: hash (mais rápido na média)</h2>
<pre><code>#include &lt;unordered_map&gt;

std::unordered_map&lt;std::string, int&gt; contador;
// O(1) médio para insert/find — não ordenado
for (const auto&amp; palavra : texto) {
    contador[palavra]++;     // cria com 0 se não existir
}</code></pre>

<h2>set: conjunto sem repetição</h2>
<pre><code>std::set&lt;int&gt; unicos = {3, 1, 4, 1, 5, 9, 2, 6};
// fica {1, 2, 3, 4, 5, 6, 9} — ordenado e único

unicos.insert(5);   // já existe, não muda nada
unicos.count(3);    // 1
unicos.erase(4);</code></pre>

<div class="callout callout-tip">
<strong>Escolha:</strong> <code>map</code> = precisa iterar ordenado. <code>unordered_map</code> = só busca/insere rápido (mais comum). <code>set</code> = unicidade. <code>multimap/multiset</code> = permite chaves duplicadas.
</div>
`
        },
        {
          id: 'cpp-algoritmos',
          title: '4. Algoritmos da STL',
          summary: 'sort, find, transform, count e accumulate.',
          content: `
<h2>O cabeçalho &lt;algorithm&gt;</h2>
<pre><code>#include &lt;algorithm&gt;
#include &lt;numeric&gt;       // accumulate
#include &lt;vector&gt;

std::vector&lt;int&gt; v = {5, 2, 8, 1, 9, 3};

// Ordenar (in-place):
std::sort(v.begin(), v.end());              // {1,2,3,5,8,9}
std::sort(v.begin(), v.end(), std::greater&lt;&gt;());  // decrescente

// Buscar:
std::find(v.begin(), v.end(), 8);          // iterador ou end()
std::binary_search(v.begin(), v.end(), 5); // true (precisa ordenado!)

// Contar:
std::count(v.begin(), v.end(), 3);         // 1

// Min/Max:
*std::min_element(v.begin(), v.end());     // 1
*std::max_element(v.begin(), v.end());     // 9

// Transformar (map funcional):
std::vector&lt;int&gt; dobrados(v.size());
std::transform(v.begin(), v.end(), dobrados.begin(),
               [](int x) { return x * 2; });

// Filtrar (estilo remove-erase):
v.erase(std::remove_if(v.begin(), v.end(),
                        [](int x) { return x % 2; }),
         v.end());

// Somar:
int soma = std::accumulate(v.begin(), v.end(), 0);</code></pre>

<h2>Com C++20: ranges</h2>
<pre><code>#include &lt;ranges&gt;

auto resultado = v
    | std::views::filter([](int x) { return x &gt; 3; })
    | std::views::transform([](int x) { return x * 10; });

for (int x : resultado) std::cout &lt;&lt; x &lt;&lt; " ";  // 50 80 90</code></pre>
`
        }
      ]
    },
    {
      id: 'cpp-memoria',
      title: 'Memória e Modern C++',
      description: 'Smart pointers, RAII, move semantics e lambdas.',
      lessons: [
        {
          id: 'cpp-smart-pointers',
          title: '1. Smart Pointers',
          summary: 'unique_ptr, shared_ptr e weak_ptr — chega de delete.',
          content: `
<h2>O problema do new/delete</h2>
<pre><code>// C++ antigo: você gerencia a memória.
Animal* a = new Cachorro();
// ... se esquecer delete a; → memory leak
// ... se der throw antes do delete → leak
// ... se der delete duas vezes → UB
// Em código grande: pesadelo.</code></pre>

<h2>unique_ptr: posse única (RAII)</h2>
<pre><code>#include &lt;memory&gt;

{
    std::unique_ptr&lt;Animal&gt; a = std::make_unique&lt;Cachorro&gt;("Rex", "vira");
    a-&gt;emitirSom();
}   // aqui: ~unique_ptr rota → delete automático!

// Não copiável, só movível:
std::unique_ptr&lt;Animal&gt; b = std::move(a);   // a fica nullptr</code></pre>

<h2>shared_ptr: posse compartilhada</h2>
<pre><code>// Vários ponteiros podem apontar para o mesmo; contador de refs libera ao zerar.
auto p = std::make_shared&lt;int&gt;(42);
auto q = p;                  // agora p e q compartilham
*p;   // 42
p.use_count();   // 2</code></pre>

<h2>weak_ptr: observador sem aumentar a ref</h2>
<pre><code>std::weak_ptr&lt;int&gt; w = p;
if (auto locked = w.lock()) {   // pega shared temporário
    *locked;                     // 42 — só se p ainda existir
}
// Útil para quebrar ciclos: A↔B com shared_ptr nunca seria liberado.</code></pre>

<div class="callout callout-tip">
<strong>Regra moderna:</strong> <code>make_unique</code> / <code>make_shared</code> em vez de <code>new</code>. Quase nunca escreva <code>delete</code> — smart pointers + RAII resolvem 99% dos casos de memória.
</div>
`
        },
        {
          id: 'cpp-raii',
          title: '2. RAII em Detalhe',
          summary: 'O princípio que torna C++ seguro.',
          content: `
<h2>RAII = recurso amarrado ao objeto</h2>
<p>Todo recurso (memória, arquivo, socket, lock, thread) é:</p>
<ol>
  <li>adquirido no <strong>construtor</strong> do objeto;</li>
  <li>liberado no <strong>destrutor</strong> do objeto.</li>
</ol>
<p>Como o destrutor <strong>sempre</strong> roda ao sair do escopo (mesmo com return, throw, break), o recurso é sempre liberado. Sem finally, sem try-finally, sem leaks.</p>

<h2>Exemplos da própria STL</h2>
<pre><code>// vector: aloca no ctor, libera no dtor
{
    std::vector&lt;int&gt; v(1000);
}   // libera

// std::lock_guard: lock no ctor, unlock no dtor
{
    std::lock_guard&lt;std::mutex&gt; lock(mtx);
    // seção crítica
}   // unlock garantido

// std::fstream: abre no ctor, fecha no dtor
{
    std::ifstream f("dados.txt");
    // lê...
}   // fecha</code></pre>

<h2>Implementando RAII você mesmo</h2>
<pre><code>class ConexaoBD {
    void* handle;
public:
    explicit ConexaoBD(const std::string&amp; url) {
        handle = conectar(url);   // pode throw
    }
    ~ConexaoBD() {
        if (handle) desconectar(handle);
    }

    // Copiar conexões não faz sentido — delete:
    ConexaoBD(const ConexaoBD&amp;) = delete;
    ConexaoBD&amp; operator=(const ConexaoBD&amp;) = delete;

    // Mover faz:
    ConexaoBD(ConexaoBD&amp;&amp; outra) noexcept : handle(outra.handle) {
        outra.handle = nullptr;
    }
};</code></pre>
`
        },
        {
          id: 'cpp-lambdas',
          title: '3. Lambdas',
          summary: 'Funções anônimas — a base do C++ funcional.',
          content: `
<h2>A sintaxe</h2>
<pre><code>[captura](parâmetros) -&gt; tipo_retorno { corpo }

// Sem captura, sem retorno explícito:
auto soma = [](int a, int b) { return a + b; };
soma(2, 3);   // 5

// Com auto:
std::vector&lt;int&gt; v = {3, 1, 4, 1, 5};

// Ordena decrescente:
std::sort(v.begin(), v.end(), [](int a, int b) { return a &gt; b; });

// Filtra pares:
v.erase(std::remove_if(v.begin(), v.end(),
    [](int x) { return x % 2; }), v.end());</code></pre>

<h2>Captura: o que a lambda "vê" do escopo</h2>
<pre><code>int limite = 10;
std::string sufixo = "!";

// [=] : copia TUDO por valor
auto f1 = [=](int x) { return x &gt; limite; };

// [&amp;] : captura TUDO por referência (cuidado com lifetimes!)
auto f2 = [&amp;](int x) { return std::to_string(x) + sufixo; };

// Seletiva:
auto f3 = [limite, &amp;sufixo](int x) { ... };

// [=, &amp;sufixo] : tudo por valor, sufixo por referência</code></pre>

<h2>std::function: guardar lambdas</h2>
<pre><code>#include &lt;functional&gt;

std::function&lt;int(int, int)&gt; op = [](int a, int b) { return a + b; };
op = [](int a, int b) { return a * b; };   // troca depois</code></pre>

<div class="callout callout-warning">
<strong>Lifetime:</strong> lambdas que capturam por referência não devem sobreviver ao escopo que criou — ao voltar de uma função, as referências viram dangling.
</div>
`
        },
        {
          id: 'cpp-templates',
          title: '4. Templates',
          summary: 'Código genérico em C++.',
          content: `
<h2>Function template</h2>
<pre><code>template &lt;typename T&gt;
T maximo(T a, T b) {
    return a &gt; b ? a : b;
}

maximo(3, 7);          // int
maximo(3.14, 2.71);    // double
maximo&lt;double&gt;(3, 2.5);  // força T=double (mistura de tipos)</code></pre>

<h2>Class template</h2>
<pre><code>template &lt;typename T&gt;
class Pilha {
    std::vector&lt;T&gt; dados;
public:
    void push(T v) { dados.push_back(v); }
    T pop() {
        T v = dados.back();
        dados.pop_back();
        return v;
    }
    bool empty() const { return dados.empty(); }
};

Pilha&lt;int&gt; pi;
pi.push(1); pi.push(2);

Pilha&lt;std::string&gt; ps;
ps.push("Ana");</code></pre>

<h2>Múltiplos parâmetros e default</h2>
<pre><code>template &lt;typename K, typename V = int&gt;
class MapaSimples { /* ... */ };

MapaSimples&lt;std::string&gt; m;          // V=int por padrão
MapaSimples&lt;std::string, double&gt; m2;</code></pre>

<h2>Concepts (C++20): restrições legíveis</h2>
<pre><code>template &lt;typename T&gt;
requires std::integral&lt;T&gt;
T fatorial(T n) { return n &lt;= 1 ? 1 : n * fatorial(n - 1); }

// Erro de template agora legível: "T não satisfaz integral"</code></pre>
`
        }
      ]
    },
    {
      id: 'cpp-concorrencia',
      title: 'Concorrência e C++ Moderno',
      description: 'Threads, mutex, move semantics e C++20.',
      lessons: [
        {
          id: 'cpp-threads',
          title: '1. Threads',
          summary: 'std::thread — paralelismo real.',
          content: `
<h2>Criando threads</h2>
<pre><code>#include &lt;thread&gt;
#include &lt;iostream&gt;

void tarefa(int id) {
    for (int i = 0; i &lt; 3; i++)
        std::cout &lt;&lt; "Thread " &lt;&lt; id &lt;&lt; ": " &lt;&lt; i &lt;&lt; "\\n";
}

int main() {
    std::thread t1(tarefa, 1);
    std::thread t2(tarefa, 2);

    t1.join();   // espera t1 terminar
    t2.join();   // espera t2 terminar
    // SEM join/detach: std::terminate() ao destruir thread!
}</code></pre>

<h2>join vs detach</h2>
<ul>
  <li><code>join()</code> — bloqueia até a thread terminar (espera).</li>
  <li><code>detach()</code> — solta a thread (vive por conta; cuidado com referências).</li>
</ul>

<h2>Lambdas como thread</h2>
<pre><code>std::thread t([]() {
    std::cout &lt;&lt; "rodando em thread\\n";
});
t.join();</code></pre>

<h2>hardware_concurrency</h2>
<pre><code>unsigned n = std::thread::hardware_concurrency();   // núcleos lógicos
std::cout &lt;&lt; "Use " &lt;&lt; n &lt;&lt; " threads\\n";</code></pre>

<div class="callout callout-warning">
Concorrência é poder com perigo: <strong>data race</strong> (duas threads mexendo na mesma variável sem sincronização) é comportamento indefinido. Use mutex (próxima lição).
</div>
`
        },
        {
          id: 'cpp-mutex',
          title: '2. Mutex e Locks',
          summary: 'Protegendo dados compartilhados.',
          content: `
<h2>O problema</h2>
<pre><code>int contador = 0;
// 1000 threads fazem contador++ → resultado &lt; 1000 (data race!)</code></pre>

<h2>Mutex: exclusão mútua</h2>
<pre><code>#include &lt;mutex&gt;

int contador = 0;
std::mutex mtx;

void incrementar() {
    for (int i = 0; i &lt; 1000; i++) {
        std::lock_guard&lt;std::mutex&gt; lock(mtx);   // lock no ctor
        contador++;                                  // seção crítica
    }   // unlock no dtor (RAII!) — mesmo com throw
}</code></pre>

<h2>unique_lock: mais flexível</h2>
<pre><code>std::unique_lock&lt;std::mutex&gt; lock(mtx);
// ... pode unlock() e re-lock() no meio
lock.unlock();
// trabalho sem lock
lock.lock();</code></pre>

<h2>Múltiplos mutexes sem deadlock</h2>
<pre><code>std::mutex a, b;

void transferir() {
    std::lock(a, b);   // pega os DOIS sem deadlock (C++11)
    std::lock_guard&lt;std::mutex&gt; la(a, std::adopt_lock);
    std::lock_guard&lt;std::mutex&gt; lb(b, std::adopt_lock);
    // seção crítica
}</code></pre>

<h2>Atomics: para contadores simples</h2>
<pre><code>#include &lt;atomic&gt;
std::atomic&lt;int&gt; contador{0};
contador++;   // atômico, sem precisar de mutex (mais rápido)</code></pre>
`
        },
        {
          id: 'cpp-move',
          title: '3. Move Semantics',
          summary: 'Transferir recursos sem copiar.',
          content: `
<h2>O problema da cópia cara</h2>
<pre><code>std::vector&lt;int&gt; grande(1'000'000);

std::vector&lt;int&gt; v = grande;   // CÓPIA: 1 milhão de ints copiados!
std::vector&lt;int&gt; v = std::move(grande);  // MOVE: 3 ponteiros trocados</code></pre>

<h2>rvalue reference (&amp;&amp;)</h2>
<pre><code>// &amp;&amp; significa: "recebe um temporário — pode saqueá-lo"
void consumir(std::vector&lt;int&gt;&amp;&amp; v) {
    // v é seu: rouba os ponteiros internos sem copiar
}

std::vector&lt;int&gt; temp = {1, 2, 3};
consumir(std::move(temp));    // std::move: cast para rvalue
// temp agora está em estado válido mas vazio — não use seu conteúdo</code></pre>

<h2>Construtor de move na sua classe</h2>
<pre><code>class Buffer {
    int* dados;
    size_t n;
public:
    // Move ctor: rouba os ponteiros
    Buffer(Buffer&amp;&amp; outro) noexcept
        : dados(outro.dados), n(outro.n) {
        outro.dados = nullptr;
        outro.n = 0;
    }

    Buffer&amp; operator=(Buffer&amp;&amp; outro) noexcept {
        if (this != &amp;outro) {
            delete[] dados;
            dados = outro.dados;
            n = outro.n;
            outro.dados = nullptr;
            outro.n = 0;
        }
        return *this;
    }
};</code></pre>

<div class="callout callout-tip">
<strong>std::move não move nada:</strong> é apenas um cast para rvalue. Quem realmente transfere é o construtor/operador de move do tipo. E marque move ctors <code>noexcept</code> — vector só usa move se for noexcept (senão copia, pra segurança em caso de throw).
</div>
`
        },
        {
          id: 'cpp-cpp20',
          title: '4. C++20: Concepts, Ranges e Modules',
          summary: 'O padrão mais expressivo da história do C++.',
          content: `
<h2>Concepts: restrições elegantes</h2>
<pre><code>#include &lt;concepts&gt;

template &lt;typename T&gt;
requires std::integral&lt;T&gt;
T mdc(T a, T b) { return b == 0 ? a : mdc(b, a % b); }

// Sintaxe abreviada:
template &lt;std::integral T&gt;
T mdc(T a, T b) { ... }

// Erros de template finalmente legíveis:
// "não satisfaz integral" em vez de páginas de substituição falhada</code></pre>

<h2>Ranges: pipelines funcionais</h2>
<pre><code>#include &lt;ranges&gt;
#include &lt;vector&gt;

std::vector&lt;int&gt; v = {1, 2, 3, 4, 5, 6};

auto resultado = v
    | std::views::filter([](int x) { return x % 2 == 0; })
    | std::views::transform([](int x) { return x * x; })
    | std::views::take(2);

for (int x : resultado) std::cout &lt;&lt; x &lt;&lt; " ";  // 4 16
// Lazy: nada é computado até iterar!</code></pre>

<h2>Modules: substituto do #include</h2>
<pre><code>// matematica.cppm (module interface)
export module matematica;

export int soma(int a, int b) { return a + b; }

// app.cpp
import matematica;
int main() { return soma(2, 3); }
// Compilação mais rápida, sem macros vazando, sem include guards</code></pre>

<h2>Outros highlights</h2>
<ul>
  <li><code>std::format</code> (printf moderno type-safe).</li>
  <li><code>consteval</code> (funções que SÓ rodam em compilação).</li>
  <li><code>std::span</code> (view de array, como string_view para arrays).</li>
  <li>Coroutines (<code>co_await</code>, <code>co_yield</code>).</li>
</ul>
`
        }
      ]
    }
  ]
};
