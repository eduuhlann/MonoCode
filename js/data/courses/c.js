// MonoCode — Curso Completo de Linguagem C
// 6 módulos • 26 lições com explicações didáticas completas

export const C_COURSE = {
  id: 'c',
  name: 'Linguagem C',
  language: 'C',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'A linguagem que criou as linguagens: ponteiros, memória, structs e programação de sistemas com C.',
  description: 'Trilha completa de C cobrindo sintaxe, tipos, controle de fluxo, funções, arrays, ponteiros, alocação dinâmica, strings, structs, arquivos e o pré-processador.',
  tags: ['Sistemas', 'Baixo Nível', 'Ponteiros', 'Memória'],
  modules: [
    {
      id: 'c-fundamentos',
      title: 'Fundamentos do C',
      description: 'Estrutura, tipos e entrada/saída.',
      lessons: [
        {
          id: 'c-intro',
          title: '1. O que é C',
          summary: 'Linguagem de sistemas compilada — a base de tudo.',
          content: `
<h2>A linguagem-mãe</h2>
<p>C foi criada por Dennis Ritchie em 1972 para reescrever o UNIX. Hoje é a base do Linux, do Windows, do Python, do Ruby e de quase toda linguagem moderna — aprender C é entender como o computador <strong>realmente</strong> funciona.</p>

<h2>Características</h2>
<ul>
  <li><strong>Compilada:</strong> o código-fonte vira um executável nativo (rápido).</li>
  <li><strong>Tipada estaticamente:</strong> tipos verificados em compilação.</li>
  <li><strong>Baixo nível:</strong> você mexe diretamente na memória (ponteiros).</li>
  <li><strong>Pequena:</strong> só ~40 palavras-chave. O resto vem da biblioteca padrão.</li>
  <li><strong>Sem coleta de lixo:</strong> você gerencia a memória (poder e perigo).</li>
</ul>

<h2>Compilando</h2>
<pre><code># Linux: gcc ou clang
gcc programa.c -o programa
./programa

# Com avisos rigoresos (sempre use):
gcc -Wall -Wextra -o programa programa.c</code></pre>

<h2>O fluxo</h2>
<pre><code>programa.c  --[gcc]--&gt;  programa (executável)  --[./programa]--&gt;  roda</code></pre>

<div class="callout callout-tip">
<strong>C recomendação:</strong> compile sempre com <code>-Wall -Wextra</code>. Os avisos do C pegam bugs reais que virariam crash em produção.
</div>
`
        },
        {
          id: 'c-estrutura',
          title: '2. Estrutura de um Programa',
          summary: 'main, includes e return.',
          content: `
<h2>O esqueleto</h2>
<pre><code>#include &lt;stdio.h&gt;       // entrada/saída (printf, scanf)

int main(void) {
    printf("Olá, MonoCode!\\n");
    return 0;              // 0 = sucesso para o SO
}</code></pre>

<h3>Cada parte</h3>
<ul>
  <li><code>#include</code> — copia o conteúdo de um arquivo de cabeçalho (declarações de funções).</li>
  <li><code>int main(void)</code> — ponto de entrada. Tudo começa aqui.</li>
  <li><code>return 0;</code> — código de saída para o sistema operacional.</li>
</ul>

<h2>main com argumentos</h2>
<pre><code>#include &lt;stdio.h&gt;

int main(int argc, char *argv[]) {
    // argc = quantidade de argumentos
    // argv = array de strings (argv[0] é o nome do programa)
    printf("Argumentos: %d\\n", argc);
    for (int i = 0; i &lt; argc; i++) {
        printf("  argv[%d] = %s\\n", i, argv[i]);
    }
    return 0;
}
// ./prog arg1 arg2  →  argc=3, argv[0]="./prog", argv[1]="arg1", ...</code></pre>

<h2>Onde ficam as bibliotecas</h2>
<pre><code>#include &lt;stdio.h&gt;       // padrão (colchetes: busca no sistema)
#include "minha_lib.h"   // sua (aspas: busca na pasta do projeto)</code></pre>
`
        },
        {
          id: 'c-variaveis',
          title: '3. Variáveis e Tipos',
          summary: 'int, float, double, char e seus tamanhos.',
          content: `
<h2>Tipos básicos</h2>
<pre><code>int    idade = 25;          // inteiro (tipicamente 4 bytes)
float  altura = 1.68f;     // ponto flutuante (4 bytes, ~7 dígitos)
double pi = 3.14159265;    // duplo (8 bytes, ~15 dígitos)
char   inicial = 'A';      // UM caractere (aspas simples!)
char   nome[] = "Ana";     // string (array de char)

// Modificadores:
short int   s;             // menor
long int    l;             // maior
long long   ll;            // maior ainda
unsigned int u;            // só positivos (0 a 4 bilhões)</code></pre>

<h2>sizeof: tamanho em bytes</h2>
<pre><code>printf("%zu\\n", sizeof(int));     // 4 na maioria dos sistemas
printf("%zu\\n", sizeof(double));  // 8
printf("%zu\\n", sizeof(char));    // 1 (sempre, por padrão)</code></pre>

<h2>Constantes</h2>
<pre><code>#define PI 3.14159              // pré-processador (substituição textual)
const int MAX = 100;          // variável const (tem tipo)</code></pre>

<h2>Limites: &lt;limits.h&gt;</h2>
<pre><code>#include &lt;limits.h&gt;
printf("%d a %d\\n", INT_MIN, INT_MAX);   // -2147483648 a 2147483647</code></pre>

<div class="callout callout-warning">
<strong>char vs string:</strong> <code>'A'</code> é UM caractere; <code>"A"</code> é uma string (array de 2 chars: 'A' e '\\0'). Confundir os dois é erro de compilação.
</div>
`
        },
        {
          id: 'c-printf',
          title: '4. printf e scanf',
          summary: 'Entrada e saída formatada.',
          content: `
<h2>printf: escrever</h2>
<pre><code>int idade = 25;
float altura = 1.68;
char nome[] = "Ana";

printf("Olá!\\n");                       // Olá!
printf("Nome: %s\\n", nome);              // Nome: Ana
printf("Idade: %d anos\\n", idade);       // Idade: 25 anos
printf("Altura: %.2f m\\n", altura);      // Altura: 1.68 m
printf("Char: %c (ASCII %d)\\n", 'A', 'A'); // Char: A (ASCII 65)
printf("Hex: %x\\n", 255);                // Hex: ff
printf("Endereço: %p\\n", (void*)&amp;idade); // 0x7ffc...</code></pre>

<h3>Especificadores</h3>
<table>
<tr><th>Código</th><th>Tipo</th></tr>
<tr><td>%d, %i</td><td>int</td></tr>
<tr><td>%f, %lf</td><td>float / double</td></tr>
<tr><td>%c</td><td>char</td></tr>
<tr><td>%s</td><td>string (char*)</td></tr>
<tr><td>%x, %o</td><td>hex / octal</td></tr>
<tr><td>%p</td><td>ponteiro</td></tr>
<tr><td>%zu</td><td>size_t (sizeof)</td></tr>
</table>

<h2>scanf: ler</h2>
<pre><code>int n;
printf("Digite um número: ");
scanf("%d", &amp;n);              // &amp; passa o ENDEREÇO da variável
printf("Você digitou %d\\n", n);

char nome[50];
scanf("%49s", nome);          // SEM &amp; (nome já é endereço!)
scanf("%49[^\\n]", nome);      // lê até Enter (com espaços)</code></pre>

<div class="callout callout-warning">
<strong>Sempre</strong> limite o tamanho em scanf de string: <code>%49s</code> para <code>char[50]</code>. Sem limite, o usuário digita 1000 caracteres e <strong>estoura o buffer</strong> (buffer overflow — vulnerabilidade clássica).
</div>
`
        },
        {
          id: 'c-operadores',
          title: '5. Operadores e Bit a Bit',
          summary: 'Aritméticos, lógicos e operações de bits.',
          content: `
<h2>Aritméticos e lógicos</h2>
<pre><code>int a = 10, b = 3;
a + b;   // 13
a - b;   // 7
a * b;   // 30
a / b;   // 3   (divisão INTEIRA descarta o resto!)
a % b;   // 1   (módulo)
a / (float)b;  // 3.33 (cast para float antes de dividir)

a &amp;&amp; b;  // E lógico (true se ambos ≠ 0)
a || b;  // OU lógico
!a;      // NÃO lógico
a == b;  // comparação (cuidado: == não =)
a &gt; b;   // 1 (true)
a &lt;= b;  // 0 (false)</code></pre>

<h2>Bit a bit (a marca de C)</h2>
<pre><code>5 &amp; 3;    // AND    → 1   (0101 &amp; 0011 = 0001)
5 | 3;    // OR     → 7   (0101 | 0011 = 0111)
5 ^ 3;    // XOR    → 6   (0101 ^ 0011 = 0110)
~5;       // NOT    → inverte todos os bits
1 &lt;&lt; 3;   // shift esquerda → 8 (multiplica por 2³)
16 &gt;&gt; 2;  // shift direita  → 4 (divide por 2²)</code></pre>

<h3>Usos reais de bit a bit</h3>
<pre><code>// Flags compactadas em um int:
#define PERM_LER    (1 &lt;&lt; 0)   // 0001
#define PERM_ESCR   (1 &lt;&lt; 1)   // 0010
#define PERM_EXEC   (1 &lt;&lt; 2)   // 0100

int perm = PERM_LER | PERM_ESCR;   // 0011

if (perm &amp; PERM_ESCR) { /* tem permissão de escrita */ }
perm &amp;= ~PERM_ESCR;                // remove a permissão de escrita
perm |= PERM_EXEC;                  // adiciona execução</code></pre>

<h2>Incremento</h2>
<pre><code>int x = 5;
x++;    // pós-incremento (usa, depois soma)
++x;    // pré-incremento (soma, depois usa)
x += 3; // x = x + 3</code></pre>
`
        }
      ]
    },
    {
      id: 'c-controle',
      title: 'Controle de Fluxo',
      description: 'Decisões e repetição.',
      lessons: [
        {
          id: 'c-if',
          title: '1. if, else e else if',
          summary: 'Decisões em C.',
          content: `
<h2>A sintaxe</h2>
<pre><code>int nota = 7;

if (nota &gt;= 9) {
    printf("Excelente\\n");
} else if (nota &gt;= 7) {
    printf("Aprovado\\n");      // ← roda
} else {
    printf("Reprovado\\n");
}</code></pre>

<h2>O perigo da atribuição</h2>
<pre><code>// ❌ PÉSSIMO (atribui 5 a x, e como 5 ≠ 0, sempre "true"):
if (x = 5) { ... }

// ✅ COLOQUE A CONSTANTE PRIMEIRO:
if (5 == x) { ... }    // se escrever = por engano, o compilador reclama!</code></pre>

<h2>Verdadeiro e falso em C</h2>
<p>C não tem tipo bool nativo (até C99 com &lt;stdbool.h&gt;). <strong>0 é falso, qualquer outra coisa é verdadeira:</strong></p>
<pre><code>int itens = 0;
if (itens) {        // falso: itens == 0
    printf("tem itens");
} else {
    printf("vazio");
}

#include &lt;stdbool.h&gt;
bool ativo = true;
if (ativo) { ... }</code></pre>
`
        },
        {
          id: 'c-switch',
          title: '2. switch',
          summary: 'Múltiplos casos com break.',
          content: `
<h2>A sintaxe</h2>
<pre><code>int opcao = 2;

switch (opcao) {
    case 1:
        printf("Criar\\n");
        break;                  // sem break, cai no próximo caso!
    case 2:
        printf("Listar\\n");    // ← roda
        break;
    case 3:
        printf("Sair\\n");
        break;
    default:
        printf("Opção inválida\\n");
}</code></pre>

<h2>Fall-through: às vezes útil</h2>
<pre><code>switch (dia) {
    case 1: case 2: case 3: case 4: case 5:
        printf("Dia útil\\n");
        break;
    case 6: case 7:
        printf("Fim de semana\\n");
        break;
}</code></pre>

<h2>switch só com int e char</h2>
<pre><code>switch (operador) {
    case '+': return a + b;
    case '-': return a - b;
    // case "soma": ❌ strings NÃO funcionam no switch
}</code></pre>

<div class="callout callout-warning">
Esquecer o <code>break</code> é o bug mais clássico do switch — os casos "vazam" para o próximo. Em C moderno, alguns compiladores avisam com <code>-Wimplicit-fallthrough</code>.
</div>
`
        },
        {
          id: 'c-for',
          title: '3. Laço for',
          summary: 'Repetição com contador.',
          content: `
<h2>A sintaxe clássica</h2>
<pre><code>for (int i = 0; i &lt; 5; i++) {
    printf("%d\\n", i);
}
// 0 1 2 3 4

// Múltiplas variáveis:
for (int i = 0, j = 10; i &lt; j; i++, j--) {
    printf("%d %d\\n", i, j);
}

// Decrescente:
for (int i = 10; i &gt; 0; i--) {
    printf("%d ", i);
}

// Pulos:
for (int i = 0; i &lt; 100; i += 5) { ... }</code></pre>

<h2>Percorrendo arrays</h2>
<pre><code>int numeros[] = {10, 20, 30, 40, 50};
int n = sizeof(numeros) / sizeof(numeros[0]);   // tamanho do array!

for (int i = 0; i &lt; n; i++) {
    printf("%d\\n", numeros[i]);
}</code></pre>

<h2>break e continue</h2>
<pre><code>for (int i = 0; i &lt; 100; i++) {
    if (i % 2 != 0) continue;   // pula ímpares
    if (i &gt; 20) break;          // para em 22
    printf("%d ", i);
}</code></pre>
`
        },
        {
          id: 'c-while',
          title: '4. while e do-while',
          summary: 'Repetição condicional.',
          content: `
<h2>while: testa antes</h2>
<pre><code>int contador = 0;
while (contador &lt; 5) {
    printf("%d\\n", contador);
    contador++;
}
// Pode NÃO rodar nenhuma vez (se a condição já for falsa)</code></pre>

<h2>do-while: roda pelo menos uma vez</h2>
<pre><code>int opcao;
do {
    printf("1. Criar\\n2. Sair\\nEscolha: ");
    scanf("%d", &amp;opcao);
} while (opcao != 2);          // valida a entrada</code></pre>

<h2>Loop infinito intencional</h2>
<pre><code>while (1) {        // ou for (;;)
    // executa até break
    if (condicao) break;
}</code></pre>

<div class="callout callout-warning">
<strong>Loop infinito acidental:</strong> esquecer de incrementar o contador dentro do while trava o programa. Sempre garanta que algo na condição muda.
</div>
`
        }
      ]
    },
    {
      id: 'c-funcoes-arrays',
      title: 'Funções e Arrays',
      description: 'Modularização e coleções.',
      lessons: [
        {
          id: 'c-funcoes',
          title: '1. Funções',
          summary: 'Declaração, parâmetros e retorno.',
          content: `
<h2>Declaração e definição</h2>
<pre><code>// Protótipo (declaração): diz que existe, antes de main:
int soma(int a, int b);

int main(void) {
    int r = soma(3, 4);     // 7
    return 0;
}

// Definição: o corpo:
int soma(int a, int b) {
    return a + b;
}</code></pre>

<h2>Passagem por valor (padrão)</h2>
<pre><code>void dobrar(int x) {
    x = x * 2;              // modifica a CÓPIA local
}

int n = 10;
dobrar(n);
printf("%d\\n", n);         // 10 — original intacto!</code></pre>

<h2>Passagem por referência (com ponteiros)</h2>
<pre><code>void dobrar(int *x) {
    *x = (*x) * 2;          // modifica o ORIGINAL
}

int n = 10;
dobrar(&amp;n);                 // passa o endereço
printf("%d\\n", n);         // 20</code></pre>

<h2>Múltiplos retornos via ponteiros</h2>
<pre><code>void min_max(int arr[], int n, int *min, int *max) {
    *min = *max = arr[0];
    for (int i = 1; i &lt; n; i++) {
        if (arr[i] &lt; *min) *min = arr[i];
        if (arr[i] &gt; *max) *max = arr[i];
    }
}

int nums[] = {3, 1, 9, 4}, mn, mx;
min_max(nums, 4, &amp;mn, &amp;mx);   // mn=1, mx=9</code></pre>
`
        },
        {
          id: 'c-escopo',
          title: '2. Escopo e Variáveis Globais',
          summary: 'Local vs global vs static.',
          content: `
<h2>Três escopos</h2>
<pre><code>#include &lt;stdio.h&gt;

int contador = 0;          // GLOBAL: acessível em todo arquivo

void incrementar(void) {
    contador++;            // mexe na global
}

int proximo_id(void) {
    static int id = 0;     // STATIC local: persiste entre chamadas
    return ++id;           // mas SÓ visível nesta função
}

int main(void) {
    int local = 10;        // LOCAL: só existe em main
    incrementar();
    printf("%d %d\\n", contador, local);   // 1 10
    printf("%d %d %d\\n", proximo_id(), proximo_id(), proximo_id()); // 1 2 3
}</code></pre>

<h2>Quando usar cada um</h2>
<ul>
  <li><strong>Local:</strong> sempre que possível — escopo pequeno = menos bugs.</li>
  <li><strong>Static local:</strong> contadores, caches, IDs únicos sem global.</li>
  <li><strong>Global:</strong> raro. Configurações imutáveis, flags de debug. Evite ao máximo.</li>
</ul>

<h2>static em função (visibilidade de arquivo)</h2>
<pre><code>// Em um arquivo .c:
static int helper(void) { ... }
// helper SÓ é visível DENTRO deste arquivo — "privado" do módulo</code></pre>

<div class="callout callout-warning">
Globais tornam o código difícil de testar e criar bugs difíceis — qualquer função pode ter mexido nelas. Prefira passar como parâmetro.
</div>
`
        },
        {
          id: 'c-arrays',
          title: '3. Arrays',
          summary: 'Coleções de mesmo tipo, tamanho fixo.',
          content: `
<h2>Declaração e acesso</h2>
<pre><code>int notas[5] = {8, 7, 9, 6, 10};   // declara E inicializa
int zeros[100] = {0};                // todos zeros
int vazio[10];                       // sem inicialização (lixo!)

printf("%d\\n", notas[0]);            // 8 (primeiro)
printf("%d\\n", notas[4]);            // 10 (último)
notas[2] = 5;                        // modifica

// C NÃO checa limites! notas[10] compila e corrompe memória.</code></pre>

<h2>Tamanho do array</h2>
<pre><code>int arr[] = {1, 2, 3, 4, 5};
int tamanho = sizeof(arr) / sizeof(arr[0]);   // 5
// Truque: só funciona onde o array foi declarado (não em funções).</code></pre>

<h2>Arrays multidimensionais</h2>
<pre><code>int matriz[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int i = 0; i &lt; 3; i++) {
    for (int j = 0; j &lt; 3; j++) {
        printf("%d ", matriz[i][j]);
    }
    printf("\\n");
}</code></pre>

<h2>Passando array para função</h2>
<pre><code>// Array decai para ponteiro — perde o tamanho!
int soma_array(int arr[], int n) {
    int s = 0;
    for (int i = 0; i &lt; n; i++) s += arr[i];
    return s;
}

int nums[] = {1, 2, 3};
soma_array(nums, 3);     // sempre passe o tamanho junto!</code></pre>
`
        },
        {
          id: 'c-strings',
          title: '4. Strings (arrays de char)',
          summary: 'Strings terminadas em \\0 e string.h.',
          content: `
<h2>Strings em C</h2>
<p>C não tem tipo string — strings são <strong>arrays de char terminados em <code>\0</code></strong> (caractere nulo):</p>
<pre><code>char nome[] = "Ana";
// na memória: ['A', 'n', 'a', '\\0']  → 4 bytes!

char saudacao[20] = "Olá";   // 20 bytes, usa 4 (3 + \\0)
char vazio[10];               // lixo, precisa inicializar</code></pre>

<h2>&lt;string.h&gt;: a biblioteca de strings</h2>
<pre><code>#include &lt;string.h&gt;

char a[50] = "Olá, ";
char b[] = "Mundo!";

strcat(a, b);          // a = "Olá, Mundo!" (a precisa ter espaço!)
strlen(a);             // 11 (não conta o \\0)
strcpy(a, "novo");     // copia "novo" para a
strcmp(a, b);          // 0 se iguais, &lt;0 se a&lt;b, &gt;0 se a&gt;b

// Comparação sem considerar case (varia por sistema):
// strcasecmp(a, b) no Linux, _stricmp no Windows</code></pre>

<h2>Lendo strings</h2>
<pre><code>char nome[50];
fgets(nome, sizeof(nome), stdin);   // seguro (limita tamanho!)
// fgets inclui o \\n — remova:
nome[strcspn(nome, "\\n")] = '\\0';

// ❌ gets(nome) — REMOVIDO do C11: buffer overflow clássico</code></pre>

<h2>printf com strings</h2>
<pre><code>printf("Nome: %s (%zu chars)\\n", nome, strlen(nome));</code></pre>

<div class="callout callout-warning">
Cálculo de espaço em C é manual: <code>"Ana"</code> precisa de <strong>4 bytes</strong> (3 + \\0). Esquecer o \\0 final gera bugs bizarros — o programa lê até achar um \\0 na memória.
</div>
`
        }
      ]
    },
    {
      id: 'c-ponteiros',
      title: 'Ponteiros e Memória',
      description: 'O coração do C: endereços e alocação.',
      lessons: [
        {
          id: 'c-ponteiros-intro',
          title: '1. O que são Ponteiros',
          summary: 'Variáveis que guardam endereços.',
          content: `
<h2>A memória é uma rua</h2>
<p>Cada byte da memória tem um <strong>endereço</strong> (número). Uma variável comum guarda um <em>valor</em>; um <strong>ponteiro</strong> guarda um <em>endereço</em> — é como ter o CEP em vez do morador.</p>

<pre><code>int x = 42;
int *p = &amp;x;          // p guarda o endereço de x

printf("x     = %d\\n", x);      // 42 (valor)
printf("&amp;x   = %p\\n", (void*)&amp;x); // 0x7ffc... (endereço)
printf("p     = %p\\n", (void*)p);   // 0x7ffc... (mesmo endereço)
printf("*p    = %d\\n", *p);     // 42 (valor apontado)</code></pre>

<h2>Os dois operadores</h2>
<ul>
  <li><code>&amp;</code> — "endereço de": <code>&amp;x</code> dá o endereço de x.</li>
  <li><code>*</code> — "conteúdo de" (dereferência): <code>*p</code> acessa o valor no endereço.</li>
</ul>

<h2>Tipos de ponteiro importam</h2>
<pre><code>int  *pi;     // aponta para int (lê 4 bytes ao dereferenciar)
char *pc;     // aponta para char (lê 1 byte)
double *pd;   // aponta para double (lê 8 bytes)

// O tipo diz QUANTOS bytes interpretar ao fazer *p.</code></pre>

<h2>NULL: o ponteiro vazio</h2>
<pre><code>#include &lt;stddef.h&gt;
int *p = NULL;     // "não aponta para nada"

if (p != NULL) {       // sempre verifique antes de dereferenciar!
    *p = 10;
}
// *p = 10 sem checar → SEGFAULT se p for NULL</code></pre>

<div class="callout callout-tip">
<strong>Ler ponteiros em voz alta:</strong> <code>int *p</code> = "p é ponteiro para int". <code>*p = 10</code> = "o conteúdo apontado por p recebe 10". Nomear claramente acelera o aprendizado.
</div>
`
        },
        {
          id: 'c-dereferencia',
          title: '2. Dereferência e Aritmética',
          summary: 'Acessar e navegar pela memória.',
          content: `
<h2>Lendo e escrevendo via ponteiro</h2>
<pre><code>int x = 10;
int *p = &amp;x;

*p = 20;            // escreve: x agora vale 20
int y = *p + 5;     // lê: y = 25
(*p)++;             // incrementa o conteúdo: x = 21</code></pre>

<h2>Aritmética de ponteiros</h2>
<pre><code>int arr[] = {10, 20, 30, 40};
int *p = arr;        // aponta para arr[0]

printf("%d\\n", *p);      // 10
printf("%d\\n", *(p+1));  // 20 — avança sizeof(int) bytes!
printf("%d\\n", *(p+2));  // 30

p++;                  // agora aponta para arr[1]
printf("%d\\n", *p);     // 20

// p++ avança em "unidades do tipo", não em bytes.
// int* += 1 → +4 bytes. char* += 1 → +1 byte.</code></pre>

<h2>Equivalência ponteiro-array</h2>
<pre><code>int arr[] = {10, 20, 30};

// Estas três formas são equivalentes:
printf("%d\\n", arr[1]);
printf("%d\\n", *(arr + 1));
int *p = arr; printf("%d\\n", p[1]);</code></pre>

<h2>Ponteiros para ponteiros</h2>
<pre><code>int x = 5;
int *p = &amp;x;
int **pp = &amp;p;       // ponteiro para ponteiro

printf("%d\\n", **pp);   // 5 (dereferência dupla)</code></pre>
`
        },
        {
          id: 'c-alocacao',
          title: '3. malloc e free',
          summary: 'Alocação dinâmica de memória.',
          content: `
<h2>Quando alocar dinamicamente</h2>
<p>Arrays em C têm tamanho <strong>fixo em compilação</strong>. Para tamanho decidido em runtime (quantos usuários? qual arquivo?), usamos <code>malloc</code>:</p>
<pre><code>#include &lt;stdlib.h&gt;       // malloc, free

int n;
printf("Quantos itens? ");
scanf("%d", &amp;n);

int *arr = malloc(n * sizeof(int));   // pede n ints ao SO
if (arr == NULL) {                    // sempre verifique!
    fprintf(stderr, "Sem memória\\n");
    return 1;
}

for (int i = 0; i &lt; n; i++) {
    arr[i] = i * 2;
}

// ...usa arr...

free(arr);                // LIBERA — senão: memory leak!
arr = NULL;               // boa prática: evita dangling pointer</code></pre>

<h2> calloc: inicializado com zero</h2>
<pre><code>int *zeros = calloc(n, sizeof(int));   // já vem zerado</code></pre>

<h2>O ciclo de vida</h2>
<ol>
  <li><code>malloc</code> / <code>calloc</code> → pede memória ao SO.</li>
  <li>Usa.</li>
  <li><code>free</code> → devolve. <strong>Cada malloc tem que ter um free.</strong></li>
</ol>

<div class="callout callout-warning">
<strong>Erros fatais:</strong>
<ul><li><strong>Memory leak:</strong> esquecer <code>free</code> — a memória cresce até acabar.</li>
<li><strong>Double free:</strong> liberar o mesmo ponteiro duas vezes — crash.</li>
<li><strong>Use-after-free:</strong> usar <code>*p</code> depois de <code>free(p)</code> — comportamento indefinido.</li>
<li><strong>Dangling pointer:</strong> apontar para memória já liberada.</li></ul>
</div>
`
        },
        {
          id: 'c-ponteiros-arrays',
          title: '4. Ponteiros e Arrays Avançados',
          summary: 'Arrays dinâmicos, strings e ponteiros de função.',
          content: `
<h2>Realocando: crescendo um array</h2>
<pre><code>int *arr = malloc(5 * sizeof(int));
// ... encheu ...

arr = realloc(arr, 10 * sizeof(int));   // cresce para 10
// realloc pode mover o bloco; o ponteiro antigo é inválido!
// Dica segura:
int *novo = realloc(arr, 10 * sizeof(int));
if (novo) arr = novo; else { /* trata falha mantendo arr */ }</code></pre>

<h2>Array de strings (char**)</h2>
<pre><code>char *nomes[] = { "Ana", "Bia", "Caio" };
// array de 3 ponteiros, cada um para uma string literal

for (int i = 0; i &lt; 3; i++) {
    printf("%s\\n", nomes[i]);
}</code></pre>

<h2>Ponteiro de função</h2>
<pre><code>int soma(int a, int b) { return a + b; }
int sub(int a, int b)  { return a - b; }

int (*operacao)(int, int);   // ponteiro para função

operacao = soma;
printf("%d\\n", operacao(3, 4));   // 7

operacao = sub;
printf("%d\\n", operacao(3, 4));   // -1

// Útil para callbacks, estratégias, qsort:
int comparar(const void *a, const void *b) {
    return (*(int*)a) - (*(int*)b);
}
qsort(arr, n, sizeof(int), comparar);</code></pre>
`
        }
      ]
    },
    {
      id: 'c-structs-arquivos',
      title: 'Structs, Arquivos e Avançado',
      description: 'Tipos compostos, persistência e pré-processador.',
      lessons: [
        {
          id: 'c-structs',
          title: '1. Structs',
          summary: 'Tipos compostos pelo usuário.',
          content: `
<h2>Agrupando dados relacionados</h2>
<pre><code>struct Pessoa {
    char nome[50];
    int  idade;
    float altura;
};

struct Pessoa ana = { "Ana", 25, 1.68 };
printf("%s tem %d anos\\n", ana.nome, ana.idade);

// Acesso via ponteiro usa -&gt; (atalo para (*p).campo):
struct Pessoa *p = &amp;ana;
printf("%s\\n", p-&gt;nome);          // igual a (*p).nome
p-&gt;idade++;                         // aniversário!</code></pre>

<h2>Arrays de structs</h2>
<pre><code>struct Produto {
    char nome[30];
    float preco;
    int estoque;
};

struct Produto estoque[100];
strcpy(estoque[0].nome, "Teclado");
estoque[0].preco = 199.9;
estoque[0].estoque = 5;</code></pre>

<h2>Structs aninhadas</h2>
<pre><code>struct Endereco {
    char rua[50];
    char cidade[30];
};

struct Cliente {
    char nome[50];
    struct Endereco endereco;   // struct dentro de struct
};

struct Cliente c = { "Ana", { "Av. Paulista, 1000", "São Paulo" } };
printf("%s mora em %s\\n", c.nome, c.endereco.cidade);</code></pre>
`
        },
        {
          id: 'c-typedef',
          title: '2. typedef e enum',
          summary: 'Apelidos para tipos e enumerações.',
          content: `
<h2>typedef: apelidos</h2>
<pre><code>// Sem typedef: precisa escrever "struct Pessoa" toda vez
struct Pessoa p;

// Com typedef: vira um nome limpo
typedef struct {
    char nome[50];
    int idade;
} Pessoa;

Pessoa ana = { "Ana", 25 };     // sem "struct"!

// Apelidos para ponteiros ( controverso, mas útil):
typedef struct Node {
    int valor;
    struct Node *prox;
} Node;

Node *lista = malloc(sizeof(Node));
lista-&gt;valor = 10;</code></pre>

<h2>enum: conjunto de constantes</h2>
<pre><code>typedef enum {
    STATUS_PENDENTE,
    STATUS_PAGO,
    STATUS_ENVIADO,
    STATUS_ENTREGUE
} Status;

Status s = STATUS_PAGO;

switch (s) {
    case STATUS_PENDENTE: printf("Pendente\\n"); break;
    case STATUS_PAGO:     printf("Pago\\n"); break;
    // ...
}</code></pre>

<h2>typedef para funções (callbacks)</h2>
<pre><code>typedef int (*Comparador)(const void *, const void *);
Comparador cmp = comparar;
qsort(arr, n, sizeof(int), cmp);</code></pre>
`
        },
        {
          id: 'c-arquivos',
          title: '3. Arquivos',
          summary: 'fopen, fscanf, fprintf e fclose.',
          content: `
<h2>A anatomia</h2>
<pre><code>#include &lt;stdio.h&gt;

FILE *f = fopen("dados.txt", "w");   // w=escrever, r=ler, a=append
if (!f) {
    perror("Erro ao abrir");         // mensagem do sistema
    return 1;
}

fprintf(f, "Linha %d\\n", 1);         // escreve formatado
fputs("linha simples\\n", f);         // string pura
fputc('A', f);                       // um char

fclose(f);                            // sempre feche!</code></pre>

<h2>Lendo</h2>
<pre><code>FILE *f = fopen("dados.txt", "r");
if (!f) return 1;

char linha[256];
while (fgets(linha, sizeof(linha), f)) {   // lê até \\n
    printf("%s", linha);                     // linha já tem \\n
}

// Ou char por char:
int c;
while ((c = fgetc(f)) != EOF) {
    putchar(c);
}

fclose(f);</code></pre>

<h2>Binário</h2>
<pre><code>FILE *f = fopen("dados.bin", "wb");

struct Pessoa ana = { "Ana", 25 };
fwrite(&amp;ana, sizeof(struct Pessoa), 1, f);   // escreve bytes crus

fseek(f, 0, SEEK_SET);                        // volta ao início
fread(&amp;ana, sizeof(struct Pessoa), 1, f);    // lê de volta
fclose(f);</code></pre>

<div class="callout callout-warning">
<strong>Sempre</strong> verifique o retorno de <code>fopen</code> — abrir arquivo inexistente em modo "r" retorna NULL, e usar NULL como FILE* crasha o programa.
</div>
`
        },
        {
          id: 'c-preprocessador',
          title: '4. Pré-processador e Multi-arquivo',
          summary: '#define, #include, headers e make.',
          content: `
<h2>O pré-processador roda antes da compilação</h2>
<pre><code>// Constantes e macros:
#define PI 3.14159
#define MAX(a, b) ((a) &gt; (b) ? (a) : (b))   // macro com parâmetros

int x = MAX(3, 7);     // vira: ((3) &gt; (7) ? (3) : (7))

// Compilação condicional:
#define DEBUG 1
#if DEBUG
    printf("debug: x=%d\\n", x);
#endif

#ifdef LINUX
    // código específico
#endif</code></pre>

<h2>Multi-arquivo: header (.h) + implementação (.c)</h2>
<pre><code>// ---- matematica.h ----
#ifndef MATEMATICA_H        // include guard (evita redefinição)
#define MATEMATICA_H
int soma(int a, int b);
int fatorial(int n);
#endif

// ---- matematica.c ----
#include "matematica.h"
int soma(int a, int b) { return a + b; }
int fatorial(int n) { return n &lt;= 1 ? 1 : n * fatorial(n - 1); }

// ---- main.c ----
#include &lt;stdio.h&gt;
#include "matematica.h"
int main(void) {
    printf("%d\\n", soma(2, 3));
}</code></pre>

<h2>Compilando vários arquivos</h2>
<pre><code>gcc -Wall main.c matematica.c -o programa
// ou com separação de compilação (recompila só o que mudou):
gcc -c main.c       → main.o
gcc -c matematica.c → matematica.o
gcc main.o matematica.o -o programa</code></pre>

<h2>Makefile: automatizando</h2>
<pre><code>programa: main.o matematica.o
	gcc main.o matematica.o -o programa

main.o: main.c matematica.h
	gcc -c main.c

matematica.o: matematica.c matematica.h
	gcc -c matematica.c

clean:
	rm *.o programa
# uso: make / make clean</code></pre>

<div class="callout callout-tip">
<strong>Include guards</strong> (<code>#ifndef X_H / #define X_H / #endif</code>) evitam que o mesmo header seja processado duas vezes quando incluído por vários arquivos. Em C moderno, <code>#pragma once</code> faz o mesmo com uma linha.
</div>
`
        }
      ]
    }
  ]
};
