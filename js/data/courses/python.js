// MonoCode — Curso Completo de Python
// 7 módulos • 35 lições com explicações didáticas completas

export const PYTHON_COURSE = {
  id: 'python',
  name: 'Python',
  language: 'Python',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'Linguagem de alta nível, poderosa e fácil de aprender, usada em IA, automação e dados.',
  description: 'Trilha completa cobrindo sintaxe básica, estruturas de dados nativas, orientação a objetos, arquivos e exceções, e programação científica com NumPy, Pandas e automação.',
  tags: ['Ciência de Dados', 'Automação', 'IA', 'Backend'],
  modules: [
    {
      id: 'py-fundamentos',
      title: 'Fundamentos',
      description: 'Sintaxe básica, tipos de dados, operadores e controle de fluxo.',
      lessons: [
        {
          id: 'py-intro',
          title: '1. Introdução ao Python',
          summary: 'O que é Python, por que é amado e como escrever seu primeiro programa.',
          content: `
<h2>Por que Python?</h2>
<p>Python foi criado por Guido van Rossum em 1991 com uma filosofia: <strong>código legível acima de tudo</strong>. O resultado é uma linguagem que se lê quase como inglês — por isso é a favorita de iniciantes, cientistas de dados e gigantes como Google, Netflix e Spotify.</p>

<h3>Onde Python brilha</h3>
<ul>
  <li><strong>Ciência de Dados e IA:</strong> NumPy, Pandas, PyTorch e scikit-learn dominam a área.</li>
  <li><strong>Automação:</strong> scripts que organizam arquivos, preenchem planilhas e enviam e-mails.</li>
  <li><strong>Backend:</strong> Django, Flask e FastAPI servem milhões de requisições.</li>
  <li><strong>Educação:</strong> é a linguagem mais ensinada em universidades do mundo.</li>
</ul>

<h3>Características essenciais</h3>
<p>Python é <strong>interpretado</strong> (roda linha a linha, sem compilar), <strong>dinamicamente tipado</strong> (tipos verificados em tempo de execução) e usa <strong>indentação</strong> para definir blocos — em vez de chaves:</p>
<pre><code># Em Python, a INDENTAÇÃO (4 espaços) define o bloco:
idade = 20

if idade &gt;= 18:
    print("Maior de idade")    # ← pertence ao if (indentado)
    print("Acesso liberado")   # ← também
print("Fim")                   # ← fora do if (sempre roda)</code></pre>

<h3>Seu primeiro programa</h3>
<pre><code>print("Olá, MonoCode!")        # exibe texto na tela
print(2 + 2)                   # 4
print("Python", "é", "legal")  # print aceita vários valores

nome = input("Qual seu nome? ")  # lê do teclado (sempre retorna string!)
print("Bem-vindo(a),", nome)</code></pre>

<div class="callout callout-tip">
<strong>Versões:</strong> use Python 3 (o Python 2 morreu em 2020). Verifique no terminal com <code>python --version</code> ou <code>python3 --version</code>. No Windows, instale pelo site python.org marcando "Add to PATH".
</div>
`
        },
        {
          id: 'py-variaveis',
          title: '2. Variáveis e Tipos de Dados',
          summary: 'Atribuição dinâmica, tipos nativos e conversões.',
          content: `
<h2>Variáveis: rótulos para valores</h2>
<p>Em Python você não declara tipos — atribui e pronto. O tipo acompanha o <em>valor</em>, não a variável:</p>
<pre><code>nome = "Ana"         # str   (string)
idade = 25           # int   (inteiro, sem limite de tamanho!)
altura = 1.68        # float
estudante = True     # bool  (True/False com maiúscula!)
endereco = None      # NoneType — "nada" (equivalente ao null)

idade = "vinte e cinco"  # ok! a variável agora aponta para str

# Descobrindo o tipo:
type(idade)          # &lt;class 'str'&gt;</code></pre>

<h2>Strings: imutáveis e cheias de recursos</h2>
<pre><code>frase = "Python é poderoso"

len(frase)                    # 17 — comprimento
frase.upper()                 # "PYTHON É PODEROSO"
frase.lower()                 # tudo minúsculo
frase.strip()                 # remove espaços das pontas
frase.replace("poderoso", "divertido")
frase.split(" ")              # ['Python', 'é', 'poderoso']
"Python" in frase             # True — teste de inclusão
frase[0]                      # 'P' — indexação começa em 0
frase[0:6]                    # 'Python' — fatia (slice)
frase[::-1]                   # string invertida!</code></pre>

<h2>f-strings: interpolação moderna</h2>
<pre><code>nome = "Ana"
pontos = 1250.5789

print(f"{nome} tem {pontos} pontos")
print(f"Arredondado: {pontos:.2f}")       # 1250.58
print(f"Alinhado: |{nome:&gt;10}|")          # |       Ana|
print(f"Cálculo: {2 * 3}")               # expressões dentro das chaves!</code></pre>

<h2>Conversões explícitas</h2>
<pre><code>idade_texto = "25"
idade = int(idade_texto)        # str → int
altura = float("1.68")          # str → float
texto = str(42)                 # int → str

# input() SEMPRE devolve string — converta:
n = int(input("Um número: "))
print(n * 2)   # sem converter: "55" (concatenação de string!)</code></pre>

<div class="callout callout-warning">
<strong>Cuidado:</strong> <code>"3" + "4"</code> dá <code>"34"</code> (concatenação), não 7. Quando um número chega como texto (input, API, CSV), converta antes de calcular.
</div>
`
        },
        {
          id: 'py-operadores',
          title: '3. Operadores Aritméticos e Lógicos',
          summary: 'Divisões, potências, módulo e as palavras and/or/not.',
          content: `
<h2>Aritmética</h2>
<pre><code>7 + 3      # 10
7 - 3      # 4
7 * 3      # 21
7 / 3      # 2.3333... — divisão SEMPRE retorna float
7 // 3     # 2  — divisão inteira (descarta o resto)
7 % 3      # 1  — resto da divisão (módulo)
2 ** 10    # 1024 — potência (não é ^!)</code></pre>

<h3>O operador % resolve problemas reais</h3>
<pre><code># Par ou ímpar:
numero % 2 == 0    # True = par

# Rotacionar listas (índice circular):
indice = (indice + 1) % len(lista)

# Minutos → horas e minutos:
total_min = 130
print(f"{total_min // 60}h{total_min % 60}min")  # 2h10min</code></pre>

<h2>Comparações encadeadas (exclusividade pythonica)</h2>
<pre><code>idade = 25

# Em outras linguagens: idade >= 18 and idade < 65
# Em Python, escreva como na matemática:
if 18 &lt;= idade &lt; 65:
    print("Adulto em idade ativa")</code></pre>

<h2>Lógica com palavras, não símbolos</h2>
<pre><code>tem_ingresso = True
idade = 20

if idade &gt;= 18 and tem_ingresso:
    print("Pode entrar")

if idade &lt; 12 or idade &gt; 65:
    print("Meia-entrada")

if not tem_ingresso:
    print("Bloqueado")

# Operador de identidade (é o MESMO objeto?):
a = [1, 2]
b = [1, 2]
a == b     # True — mesmos valores
a is b     # False — objetos diferentes!
a is None  # a forma correta de comparar com None</code></pre>

<h2>Precedência prática</h2>
<pre><code>resultado = 2 + 3 * 4 ** 2       # 50: potência &gt; multiplicação &gt; soma
resultado = (2 + 3) * 4 ** 2     # 80: parênteses vencem sempre
# Na dúvida, use parênteses — legibilidade &gt; esperteza</code></pre>
`
        },
        {
          id: 'py-if-else',
          title: '4. Estruturas Condicionais',
          summary: 'if, elif, else e a expressão ternária.',
          content: `
<h2>Decisões pythonicas</h2>
<pre><code>nota = 7.5

if nota &gt;= 9:
    conceito = "A"
elif nota &gt;= 7:
    conceito = "B"       # ← este bloco roda
elif nota &gt;= 5:
    conceito = "C"
else:
    conceito = "D"

print(f"Conceito: {conceito}")   # B</code></pre>

<h2>Truthy e falsy</h2>
<p>Python avalia como falso: <code>None</code>, <code>False</code>, <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>()</code>, <code>set()</code>. Todo o resto é verdadeiro:</p>
<pre><code>lista = []
if not lista:                 # "se a lista está vazia"
    print("Nada para processar")

nome = ""
nome_padrao = nome or "Anônimo"   # usa o 2º se o 1º for falsy</code></pre>

<h2>Ternário (expressão condicional)</h2>
<pre><code>idade = 20
status = "maior" if idade &gt;= 18 else "menor"

# Python NÃO tem switch — use dicionário para múltiplos casos:
def operar(op, a, b):
    operacoes = {
        "soma": a + b,
        "sub": a - b,
        "mult": a * b
    }
    return operacoes.get(op, "operação inválida")</code></pre>

<h2>match-case (Python 3.10+)</h2>
<pre><code>comando = "listar"

match comando:
    case "criar":
        print("Criando...")
    case "listar":
        print("Listando...")       # ← roda
    case "sair" | "exit":          # múltiplos padrões com |
        print("Saindo...")
    case _:
        print("Comando desconhecido")</code></pre>

<div class="callout callout-tip">
<strong>Coragem pythonica:</strong> prefira <code>if itens:</code> a <code>if len(itens) &gt; 0:</code> — a comunidade valoriza esse estilo direto de expressar intenções.
</div>
`
        },
        {
          id: 'py-laços',
          title: '5. Laços de Repetição',
          summary: 'for com iteráveis, while, range, break/continue e else.',
          content: `
<h2>for: para cada item</h2>
<p>O <code>for</code> do Python percorre <strong>iteráveis</strong> diretamente — sem contador manual:</p>
<pre><code>linguagens = ["Python", "JS", "Rust"]

for linguagem in linguagens:
    print(linguagem)

# Com índice quando precisar dele:
for indice, linguagem in enumerate(linguagens):
    print(f"{indice}: {linguagem}")

# Percorrer dois iteráveis juntos:
nomes = ["Ana", "Bia"]
notas = [9, 8]
for nome, nota in zip(nomes, notas):
    print(f"{nome}: {nota}")

# range(inicio, fim_exclusivo, passo):
for i in range(5):          print(i, end=" ")  # 0 1 2 3 4
for i in range(2, 10, 2):   print(i, end=" ")  # 2 4 6 8
for i in range(10, 0, -1):  print(i, end=" ")  # contagem regressiva</code></pre>

<h2>while: enquanto a condição durar</h2>
<pre><code>senha = ""
tentativas = 0
while senha != "monocode":
    senha = input("Senha: ")
    tentativas += 1
    if tentativas &gt;= 3:
        print("Bloqueado!")
        break              # sai do laço imediatamente
else:
    # o else do while roda se saiu SEM break — raríssimo e útil!
    print("Acesso liberado")</code></pre>

<h2>break e continue</h2>
<pre><code>for numero in range(10):
    if numero % 2 != 0:
        continue          # pula para a próxima iteração
    if numero &gt; 6:
        break             # encerra o laço
    print(numero)         # 0 2 4 6</code></pre>

<h2>Compreensões de loop aninhado</h2>
<pre><code># Matriz com for aninhado:
for linha in [[1, 2], [3, 4]]:
    for valor in linha:
        print(valor)

# Dicionário em loop:
precos = {"teclado": 200, "mouse": 90}
for produto, preco in precos.items():
    print(f"{produto}: R$ {preco}")</code></pre>

<div class="callout callout-warning">
<strong>Loop infinito:</strong> todo <code>while</code> precisa de algo que mude a condição dentro do bloco. Se travar no terminal: <code>Ctrl + C</code>.
</div>
`
        },
        {
          id: 'py-fstrings-entrada',
          title: '6. Entrada, Saída e Formatação',
          summary: 'input, print avançado e f-strings completas.',
          content: `
<h2>print com todos os recursos</h2>
<pre><code># Vários valores e separador:
print("A", "B", "C", sep="-")        # A-B-C

# Sem quebra de linha:
print("carregando", end="")
print("...pronto!")                   # carregando...pronto!

# Print direto para arquivo:
with open("log.txt", "w") as f:
    print("linha registrada", file=f)</code></pre>

<h2>f-strings: o formatador definitivo</h2>
<pre><code>produto = "Teclado"
preco = 199.9
qtd = 3

# Básico:
print(f"{qtd}x {produto} = R$ {preco * qtd}")

# Formatação numérica — o que vem depois do : é mini-linguagem:
print(f"{preco:.2f}")            # 199.90 — 2 decimais
print(f"{1234567.89:,.2f}")      # 1,234,567.89 — separador de milhar
print(f"{0.156:.1%}")            # 15.6% — percentual
print(f"{42:08d}")               # 00000042 — preenchido com zeros

# Alinhamento (ótimo para tabelas):
print(f"|{'Produto':&lt;10}|{'Preço':&gt;8}|")
print(f"|{produto:&lt;10}|{preco:&gt;8.2f}|")
# |Produto   |  199.90|
# |Teclado   |  199.90|

# Bases numéricas:
print(f"{255:b}")                # 11111111 — binário
print(f"{255:x}")                # ff — hexadecimal
print(f"{255:,}")                # 255 (separador en-US)</code></pre>

<h2>Locais e moeda</h2>
<pre><code>import locale
locale.setlocale(locale.LC_ALL, "pt_BR.UTF-8")
print(locale.currency(199.9))    # R$ 199.90</code></pre>

<h2>Debug rápido com f-string</h2>
<pre><code>valor = 42
print(f"{valor = }")     # valor = 42  ← mostra nome E valor (Py 3.8+)</code></pre>
`
        }
      ]
    },
    {
      id: 'py-estruturas',
      title: 'Estruturas de Dados Nativas',
      description: 'Listas, tuplas, dicionários, sets e comprehensions.',
      lessons: [
        {
          id: 'py-listas',
          title: '1. Listas',
          summary: 'A estrutura mais versátil: mutável e ordenada.',
          content: `
<h2>Listas: arrays mutáveis</h2>
<pre><code>linguagens = ["Python", "JS", "Rust"]

# Acesso e fatias:
linguagens[0]        # "Python" (índices começam em 0)
linguagens[-1]       # "Rust" (negativo = do fim!)
linguagens[0:2]      # ["Python", "JS"] (fim exclusivo)
linguagens[::-1]     # invertida

# Mutação:
linguagens.append("Go")            # adiciona no fim
linguagens.insert(1, "C")          # insere na posição
linguagens.extend(["Java", "C#"])  # concatena outra lista
linguagens.remove("C")             # remove por VALOR (1ª ocorrência)
ultimo = linguagens.pop()          # remove e retorna o último
linguagens[0] = "Python 3"         # substitui

# Busca:
"JS" in linguagens                 # True
linguagens.index("Rust")           # posição
len(linguagens)                    # tamanho
sorted(linguagens)                 # NOVA lista ordenada
linguagens.sort()                  # ordena A PRÓPRIA (in-place)</code></pre>

<h2>Cópia vs referência</h2>
<pre><code>a = [1, 2, 3]
b = a               # MESMA lista (duas etiquetas!)
b.append(4)
print(a)            # [1, 2, 3, 4] ← mudou junto!

c = a.copy()        # ou list(a), ou a[:] — cópia rasa de verdade
c.append(5)
print(a)            # [1, 2, 3, 4] intacta</code></pre>

<h2>Operações funcionais</h2>
<pre><code>numeros = [4, 1, 3, 2]

dobrados = [n * 2 for n in numeros]       # comprehension (próxima aula!)
pares = list(filter(lambda n: n % 2 == 0, numeros))
soma = sum(numeros)                       # 10
maior, menor = max(numeros), min(numeros)</code></pre>

<div class="callout callout-tip">
<strong>Desempenho:</strong> testar <code>item in lista</code> custa O(n). Se o teste de existência é frequente com muitos itens, use um <code>set</code> (próximas lições) — teste em O(1).
</div>
`
        },
        {
          id: 'py-tuplas',
          title: '2. Tuplas e Desempacotamento',
          summary: 'Sequências imutáveis e o poder do unpacking.',
          content: `
<h2>Tuplas: listas que não mudam</h2>
<pre><code>coordenada = (10, 20)
rgb = (255, 255, 255)

coordenada[0]      # 10 — leitura ok
# coordenada[0] = 5  → TypeError! tuplas são imutáveis

# Tupla de 1 elemento (pegadinha — a vírgula é obrigatória):
unico = (42,)      # tupla
naoTupla = (42)    # só um int entre parênteses!

# Quando usar: dados fixos — dias da semana, coordenadas, retornos múltiplos</code></pre>

<h2>Desempacotamento (unpacking)</h2>
<pre><code>x, y = (10, 20)                 # x=10, y=20

# Trocar variáveis — sem variável temporária!
a, b = 1, 2
a, b = b, a                     # a=2, b=1

# Estrela captura o resto:
primeiro, *resto = [1, 2, 3, 4]     # primeiro=1, resto=[2,3,4]
*inicio, ultimo = [1, 2, 3, 4]      # inicio=[1,2,3], ultimo=4

# Desempacotar em chamada:
def area(base, altura):
    return base * altura / 2

dimensoes = (10, 4)
print(area(*dimensoes))         # 20.0 — espalha a tupla nos parâmetros</code></pre>

<h2>Retornando múltiplos valores</h2>
<pre><code>def estatisticas(numeros):
    return min(numeros), max(numeros), sum(numeros) / len(numeros)

menor, maior, media = estatisticas([4, 1, 9, 2])
# menor=1, maior=9, media=4.0 — na real a função retornou UMA tupla

# Ignorando valores com _:
menor, _, media = estatisticas([4, 1, 9, 2])   # descarta o maior</code></pre>

<h2>namedtuple: tuplas com nome</h2>
<pre><code>from collections import namedtuple

Ponto = namedtuple("Ponto", ["x", "y"])
p = Ponto(10, 20)
print(p.x, p.y)         # 10 20 — acesso por nome!
x, y = p                # e continua desempacotável</code></pre>
`
        },
        {
          id: 'py-dicionarios',
          title: '3. Dicionários',
          summary: 'Pares chave-valor: a estrutura mais poderosa do Python.',
          content: `
<h2>Dicionários: mapas de consulta</h2>
<pre><code>produto = {
    "nome": "Teclado",
    "preco": 199.9,
    "estoque": 3
}

# Acesso (chave inexistente gera KeyError):
produto["nome"]                  # "Teclado"
produto.get("preco")             # 199.9
produto.get("desconto", 0)       # 0 — padrão se não existir!

# Adicionar e alterar:
produto["categoria"] = "periféricos"
produto["preco"] = 179.9

# Remover:
del produto["estoque"]
valor = produto.pop("categoria")   # remove e retorna

# Testes:
"nome" in produto                # True — busca é por CHAVE</code></pre>

<h2>Iterando</h2>
<pre><code>alunos = {"Ana": 9, "Bia": 8, "Caio": 7}

for nome in alunos:                    # chaves
    print(nome)

for nota in alunos.values():           # só valores
    print(nota)

for nome, nota in alunos.items():      # pares (o mais útil)
    print(f"{nome}: {nota}")

# Compreensão de dicionário:
medias = {nome: nota + 0.5 for nome, nota in alunos.items()}</code></pre>

<h2>Padrões poderosos</h2>
<pre><code># setdefault: inicializa se faltar:
grupos = {}
for nome in ["Ana", "Bia", "Ana"]:
    grupos.setdefault("turma", []).append(nome)

# defaultdict: a mesma ideia, automática:
from collections import defaultdict
contador = defaultdict(int)      # int() → 0 como padrão
for letra in "banana":
    contador[letra] += 1
# {'b': 1, 'a': 3, 'n': 2}

# Mesclando dicionários (Python 3.9+):
config = { "tema": "dark", **usuario }   # usuario vence
config = padrao | usuario                # operador pipe</code></pre>

<div class="callout callout-tip">
<strong>Dicionário como switch:</strong> mapeie chaves para funções e elimine if-chains: <code>acoes = {"criar": criar, "listar": listar}</code> e depois <code>acoes.get(comando, padrao)()</code>.
</div>
`
        },
        {
          id: 'py-sets',
          title: '4. Sets (Conjuntos)',
          summary: 'Únicos, sem ordem e com operações matemáticas.',
          content: `
<h2>Sets: valores únicos</h2>
<pre><code># Criando (chaves sem pares, ou construtor):
vogais = {"a", "e", "i", "o", "u"}
letras = set("abacaxi")            # {'a', 'b', 'c', 'x', 'i'}

# Duplicatas somem na entrada — jeito rápido de deduplicar:
com_duplicatas = [1, 2, 2, 3, 3, 3]
sem_duplicatas = list(set(com_duplicatas))    # [1, 2, 3]

# set vazio NÃO é {} (isso é dict!):
vazio = set()</code></pre>

<h2>Testes ultrarrápidos</h2>
<pre><code># in em set é O(1) — em lista é O(n):
bloqueados = {"spam@x.com", "bot@y.com"}
if email in bloqueados:
    print("acesso negado")</code></pre>

<h2>Operações de conjunto</h2>
<pre><code>frontend = {"js", "css", "html"}
backend = {"python", "js", "sql"}

frontend | backend     # união: tudo
frontend & backend     # interseção: {'js'} — o comum
frontend - backend     # diferença: {'css', 'html'}
frontend ^ backend     # ou exclusivo: o que NÃO é comum

frontend.issubset(backend)        # frontend contido em backend?
frontend.issuperset({"js", "css"})</code></pre>

<h2>Aplicações do dia a dia</h2>
<pre><code># Tags comuns entre dois usuários:
interesse_comum = set(user_a["tags"]) & set(user_b["tags"])

# Permissões que um tem e outro não:
extras = set(admin_perm) - set(user_perm)

# Verificar vocabulário usado:
palavras = set(texto.lower().split())</code></pre>

<div class="callout callout-warning">
<strong>Sets não são ordenados nem indexáveis:</strong> <code>meu_set[0]</code> é erro. Precisa de ordem? Converta com <code>sorted(set(x))</code>. Precisa de índice? Use lista.
</div>
`
        },
        {
          id: 'py-comprehensions',
          title: '5. Comprehensions',
          summary: 'Construir listas, dicts e sets em uma linha expressiva.',
          content: `
<h2>List comprehension</h2>
<p>Transformar um iterável em outro sem loop manual — leia como " [<em>resultado</em> para <em>item</em> em <em>coleção</em>]":</p>
<pre><code>dobrados = [n * 2 for n in range(5)]         # [0, 2, 4, 6, 8]

# Com condição (filtro no fim):
pares = [n for n in range(10) if n % 2 == 0]

# Com condicional no resultado:
notas = [8, 4, 9, 6]
conceitos = ["aprovado" if n &gt;= 6 else "reprovado" for n in notas]

# Aninhado (achatar matriz):
matriz = [[1, 2], [3, 4]]
plano = [valor for linha in matriz for valor in linha]   # [1,2,3,4]</code></pre>

<h2>Dict e set comprehension</h2>
<pre><code>precos = {"teclado": 200, "mouse": 90}

com_desconto = {p: v * 0.9 for p, v in precos.items()}
inverso = {v: k for k, v in precos.items()}   # {200:"teclado", ...}

# Set comprehension:
iniciais = {nome[0] for nome in ["Ana", "Bia", "Caio"]}   # {'A','B','C'}</code></pre>

<h2>Comprehension vs loop: quando usar cada</h2>
<pre><code># ✅ Comprehension: transformação simples e legível
quadrados = [n ** 2 for n in numeros]

# ✅ Loop: lógica complexa, múltiplos passos ou efeitos colaterais
resultados = []
for n in numeros:
    if n &lt; 0:
        continue
    raiz = math.sqrt(n)
    if raiz.is_integer():
        resultados.append(int(raiz))</code></pre>

<h2>Generator expressions: o primo econômico</h2>
<pre><code># Mesma sintaxe com PARÊNTESES — não cria lista, calcula sob demanda:
soma_pares = sum(n for n in range(1_000_000) if n % 2 == 0)
# Mesmo resultado que a comprehension, sem alocar 500k itens na memória!

# any/all com generators:
tem_negativo = any(n &lt; 0 for n in numeros)</code></pre>

<div class="callout callout-tip">
<strong>Regra de ouro:</strong> se a comprehension não cabe em uma linha legível, volte ao loop. Elegância é legibilidade, não densidade.
</div>
`
        },
        {
          id: 'py-collections',
          title: '6. Collections e Heapq',
          summary: 'Ferramentas prontas: Counter, deque, OrderedDict e heaps.',
          content: `
<h2>Counter: contar de graça</h2>
<pre><code>from collections import Counter

votos = ["js", "py", "js", "rust", "js", "py"]
contagem = Counter(votos)
# Counter({'js': 3, 'py': 2, 'rust': 1})

contagem["js"]              # 3
contagem.most_common(2)     # [('js', 3), ('py', 2)] — top N!
contagem.update(["rust"])   # soma mais votos

# Contar palavras de um texto:
palavras = Counter("o rato roeu a roupa do rei".split())</code></pre>

<h2>deque: filas eficientes</h2>
<pre><code>from collections import deque

fila = deque(["a", "b"])
fila.append("c")          # entra no fim
fila.popleft()            # 'a' sai do início — O(1)!
# (lista.pop(0) é O(n): desloca tudo)

# Pilha (stack):
pilha = deque()
pilha.append(1)
pilha.append(2)
pilha.pop()               # 2 — último a entrar, primeiro a sair

# Buffer com tamanho máximo — o velho sai sozinho:
ultimos = deque(maxlen=3)
for i in range(5):
    ultimos.append(i)     # termina com [2, 3, 4]</code></pre>

<h2>heapq: os menores primeiro</h2>
<pre><code>import heapq

# Heap = estrutura que sempre dá o menor no topo:
numeros = [7, 2, 9, 4]
heapq.heapify(numeros)        # vira heap in-place

heapq.heappop(numeros)        # 2 (sempre o menor)
heapq.heappush(numeros, 1)    # insere mantendo a propriedade

# Os N maiores/menores sem ordenar tudo:
maiores = heapq.nlargest(2, [10, 5, 8, 3])    # [10, 8]
menores = heapq.nsmallest(2, [10, 5, 8, 3])   # [3, 5]

# Top 3 produtos por preço SEM ordenar a lista inteira:
top3 = heapq.nlargest(3, produtos, key=lambda p: p["preco"])</code></pre>

<div class="callout callout-tip">
<strong>Escolha certa:</strong> fila de processos → <code>deque</code>; contagem → <code>Counter</code>; "top N" de milhões de itens → <code>heapq.nlargest</code> (não <code>sorted()[:n]</code>).
</div>
`
        }
      ]
    },
    {
      id: 'py-funcoes',
      title: 'Funções',
      description: 'Definição, escopo, argumentos flexíveis, lambdas e decoradores.',
      lessons: [
        {
          id: 'py-def',
          title: '1. Funções Básicas e Escopo',
          summary: 'def, return, docstrings e regras de escopo.',
          content: `
<h2>Definindo funções</h2>
<pre><code>def saudar(nome):
    """Retorna uma saudação personalizada."""   # docstring: documenta!
    return f"Olá, {nome}!"

print(saudar("Ana"))       # "Olá, Ana!"

# Sem return, a função devolve None implicitamente:
def logar(mensagem):
    print("[LOG]", mensagem)

resultado = logar("teste")  # imprime, mas resultado é None</code></pre>

<h2>Escopo: LEGB</h2>
<p>Python procura nomes nesta ordem: <strong>L</strong>ocal → <strong>E</strong>nclosing (função externa) → <strong>G</strong>lobal → <strong>B</strong>uilt-in:</p>
<pre><code>total = 100              # global

def calcular():
    total = 50           # variável LOCAL nova (não altera a global!)
    print(total)         # 50

calcular()
print(total)             # 100 — intacta

# Para ALTERAR a global de dentro (evite!):
def mudar():
    global total
    total = 0</code></pre>

<h2>Retornos múltiplos</h2>
<pre><code>def min_max(numeros):
    return min(numeros), max(numeros)   # uma tupla!

menor, maior = min_max([3, 1, 4])</code></pre>

<h2>Argumentos: os 5 sabores</h2>
<pre><code>def conectar(host,               # posicional obrigatório
             porta=5432,         # padrão
             *,                  # tudo abaixo é SÓ palavra-chave
             timeout=30,
             **extras):          # kwargs extras em dict
    print(host, porta, timeout, extras)

conectar("db.site.com")
conectar("db.site.com", porta=3306, timeout=10, ssl=True)
# extras recebe {"ssl": True}</code></pre>

<div class="callout callout-warning">
<strong>Armadilha clássica:</strong> nunca use lista/dict como valor padrão — ele é criado UMA vez e compartilhado entre chamadas! Use <code>def fn(itens=None)</code> e dentro: <code>itens = itens or []</code>.
</div>
`
        },
        {
          id: 'py-parâmetros',
          title: '2. Parâmetros Opcionais e Palavras-chave',
          summary: 'Defaults, keyword args e keyword-only.',
          content: `
<h2>Valores padrão</h2>
<pre><code>def aplicar_imposto(preco, aliquota=0.08, arredondar=True):
    total = preco * (1 + aliquota)
    return round(total, 2) if arredondar else total

aplicar_imposto(100)                    # 108.0
aplicar_imposto(100, aliquota=0.15)     # 115.0 — nomeado: mais claro!
aplicar_imposto(100, arredondar=False)  # 108.00000000000001</code></pre>

<h2>Argumentos nomeados = autodocumentação</h2>
<pre><code># ❌ O que significam esses números?
criar_usuario("Ana", "ana@x.com", True, False, 3)

# ✅ Impossível errar a ordem:
criar_usuario(
    nome="Ana",
    email="ana@x.com",
    ativo=True,
    admin=False,
    tentativas_login=3
)</code></pre>

<h2>Keyword-only (após o *)</h2>
<pre><code>def transferir(conta_origem, conta_destino, *, valor, imediato=True):
    ...

transferir(123, 456, valor=500)               # ok
# transferir(123, 456, 500) → TypeError! valor DEVE ser nomeado</code></pre>

<h2>/ — positional-only (Python 3.8+)</h2>
<pre><code>def distancia(x1, y1, /, *, escala=1):
    # x1 e y1 SÓ posicionais; escala SÓ nomeada
    return ((x1 ** 2 + y1 ** 2) ** 0.5) * escala

distancia(3, 4)             # 5.0
distancia(3, 4, escala=2)   # 10.0</code></pre>
`
        },
        {
          id: 'py-args-kwargs',
          title: '3. *args e **kwargs',
          summary: 'Número arbitrário de argumentos.',
          content: `
<h2>Empacotando argumentos</h2>
<pre><code>def somar_tudo(*numeros):          # *args vira uma TUPLA
    return sum(numeros)

somar_tudo(1, 2)                   # 3
somar_tudo(5, 10, 15, 20)          # 50
somar_tudo()                       # 0

def criar_perfil(**dados):         # **kwargs vira um DICT
    for chave, valor in dados.items():
        print(f"{chave}: {valor}")

criar_perfil(nome="Ana", nivel="pro", xp=1250)</code></pre>

<h2>Desempacotando ao chamar</h2>
<pre><code>valores = [10, 20, 30]
somar_tudo(*valores)               # espalha a lista na chamada

config = {"nome": "Bia", "nivel": "iniciante"}
criar_perfil(**config)             # espalha o dict como kwargs

# Os dois juntos — padrão de wrappers/forwarding:
def logar_chamada(fn, *args, **kwargs):
    print(f"chamando {fn.__name__} com {args}, {kwargs}")
    return fn(*args, **kwargs)     # repassa tudo</code></pre>

<h2>Assinatura completa (ordem obrigatória)</h2>
<pre><code>def func(posicional, /, normal, *, so_nomeado, **kwargs):
    ...

# Ordem correta: posicional-only, normal, *args, keyword-only, **kwargs
def completa(a, b, /, c, *args, d, **kwargs):
    print(a, b, c, args, d, kwargs)

completa(1, 2, 3, 4, 5, d=6, extra=7)
# 1 2 3 (4, 5) 6 {'extra': 7}</code></pre>

<div class="callout callout-tip">
<strong>Casos reais:</strong> decorators (próximas lições), funções de conveniência como <code>print(*valores, sep=", ")</code> e APIs que repassam opções para bibliotecas internas.
</div>
`
        },
        {
          id: 'py-lambda',
          title: '4. Lambda, map e filter',
          summary: 'Funções anônimas e programação funcional.',
          content: `
<h2>Lambdas: funções de uma linha</h2>
<pre><code># lambda argumentos: expressão
dobrar = lambda x: x * 2

soma = lambda a, b: a + b

# Equivalem a:
def dobrar(x):
    return x * 2</code></pre>
<p>Por convenção, lambdas servem para usar <em>na hora</em>, como argumento — não para guardar em variável (para isso, <code>def</code> é mais legível e nomeável).</p>

<h2>O habitat natural: key functions</h2>
<pre><code>produtos = [
    {"nome": "Monitor", "preco": 900},
    {"nome": "Mouse",   "preco": 90},
    {"nome": "Teclado", "preco": 200}
]

# Ordenar por preço (crescente):
por_preco = sorted(produtos, key=lambda p: p["preco"])

# Por preço decrescente:
caros_primeiro = sorted(produtos, key=lambda p: p["preco"], reverse=True)

# Ordenar por múltiplas chaves (tupla):
ordenados = sorted(pessoas, key=lambda p: (p["sobrenome"], p["nome"]))

# max/min também aceitam key:
mais_caro = max(produtos, key=lambda p: p["preco"])</code></pre>

<h2>map e filter</h2>
<pre><code>numeros = [1, 2, 3, 4, 5]

# map: aplicar função a cada item:
dobrados = list(map(lambda n: n * 2, numeros))       # [2,4,6,8,10]

# filter: manter quem passa no teste:
pares = list(filter(lambda n: n % 2 == 0, numeros))  # [2,4]

# A versão pythonica moderna (comprehensions):
dobrados = [n * 2 for n in numeros]
pares = [n for n in numeros if n % 2 == 0]</code></pre>

<h2>functools.reduce e partial</h2>
<pre><code>from functools import reduce, partial

# reduce: acumula em um único valor:
total = reduce(lambda acc, n: acc + n, numeros, 0)   # 15

# partial: congela argumentos de uma função:
def potencia(base, expoente):
    return base ** expoente

ao_quadrado = partial(potencia, expoente=2)
ao_quadrado(5)    # 25</code></pre>
`
        },
        {
          id: 'py-decorators',
          title: '5. Decorators',
          summary: 'Envolver funções com comportamento extra.',
          content: `
<h2>O que são decorators?</h2>
<p>Decorator é uma função que <strong>recebe uma função e devolve uma versão turbinada dela</strong>. É como embrulhar um presente: o conteúdo continua lá, com uma camada extra em volta.</p>

<h2>Escrevendo o primeiro decorator</h2>
<pre><code>import time
import functools

def cronometrar(fn):
    @functools.wraps(fn)          # preserva nome/docstring da original
    def wrapper(*args, **kwargs):
        inicio = time.perf_counter()
        resultado = fn(*args, **kwargs)
        fim = time.perf_counter()
        print(f"{fn.__name__} levou {fim - inicio:.4f}s")
        return resultado
    return wrapper

@cronometrar
def processar_dados():
    time.sleep(0.2)
    return "pronto"

processar_dados()
# processar_dados levou 0.2003s
# (o @ é atalho para: processar_dados = cronometrar(processar_dados))</code></pre>

<h2>Decorator com parâmetros (3 níveis)</h2>
<pre><code>def repetir(vezes):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            for _ in range(vezes):
                resultado = fn(*args, **kwargs)
            return resultado
        return wrapper
    return decorator

@repetir(vezes=3)
def cumprimentar():
    print("Olá!")

cumprimentar()   # imprime 3x</code></pre>

<h2>Usos do mundo real</h2>
<pre><code># Cache automático de resultados:
@functools.lru_cache(maxsize=None)
def fibonacci(n):
    return n if n &lt; 2 else fibonacci(n - 1) + fibonacci(n - 2)

# Validação de acesso (estilo Flask/Django):
def exige_admin(fn):
    @functools.wraps(fn)
    def wrapper(usuario, *args, **kwargs):
        if usuario.get("papel") != "admin":
            raise PermissionError("Acesso restrito")
        return fn(usuario, *args, **kwargs)
    return wrapper

# Decorators empilháveis (de baixo para cima):
@cronometrar
@exige_admin
def apagar_usuario(admin, id):
    ...</code></pre>

<div class="callout callout-tip">
<strong>Onde você os vê:</strong> rotas do Flask (<code>@app.route</code>), testes do pytest (<code>@pytest.fixture</code>), propriedades de classe (<code>@property</code>). Dominar decorators é entender metade dos frameworks Python.
</div>
`
        },
        {
          id: 'py-geradores',
          title: '6. Geradores e yield',
          summary: 'Produzir valores sob demanda com lazy evaluation.',
          content: `
<h2>yield: pausa e retoma</h2>
<p>Uma função com <code>yield</code> vira um <strong>gerador</strong>: produz um valor, pausa, e retoma de onde parou na próxima iteração — sem manter tudo na memória:</p>
<pre><code>def contar_ate(n):
    atual = 1
    while atual &lt;= n:
        yield atual          # entrega o valor e PAUSA aqui
        atual += 1           # retoma daqui na próxima chamada

for numero in contar_ate(3):
    print(numero)            # 1 2 3</code></pre>

<h2>Por que isso importa?</h2>
<pre><code># Uma lista de 10 milhões ocupa centenas de MB na RAM:
valores = [x ** 2 for x in range(10_000_000)]

# Um gerador calcula UM valor por vez — memória constante:
def quadrados(n):
    for x in range(n):
        yield x ** 2

soma = sum(quadrados(10_000_000))   # roda tranquilo!

# Pipeline: cada etapa consome da anterior sob demanda:
linhas = (l.strip() for l in open("grande.csv"))
validas = (l for l in linhas if l and not l.startswith("#"))
colunas = (l.split(",")[0] for l in validas)
for c in colunas:
    print(c)   # processa 1 linha por vez, nunca tudo de uma vez</code></pre>

<h2>Gerador como corrotina: send</h2>
<pre><code>def acumulador():
    total = 0
    while True:
        valor = yield total    # devolve total e ESPERA um valor
        total += valor

acc = acumulador()
next(acc)              # inicializa: 0
acc.send(10)           # 10
acc.send(5)            # 15</code></pre>

<h2>yield from: delegar</h2>
<pre><code>def linhas_arquivo(nome):
    with open(nome) as f:
        yield from f          # delega cada linha

def todos_os_logs():
    yield from linhas_arquivo("app.log")
    yield from linhas_arquivo("erro.log")</code></pre>

<div class="callout callout-tip">
<strong>Regra:</strong> geradores são <strong>consumíveis</strong> — esgotam uma vez! Guarde <code>list(gen)</code> se precisar percorrer de novo. É a base de iterators, streams e das async coroutines do Python moderno.
</div>
`
        }
      ]
    },
    {
      id: 'py-orientacao-objetos',
      title: 'Orientação a Objetos',
      description: 'Classes, herança, mágicos (dunders) e dataclasses.',
      lessons: [
        {
          id: 'py-classes',
          title: '1. Classes Python',
          summary: 'class, __init__, self e métodos de instância.',
          content: `
<h2>A anatomia de uma classe</h2>
<pre><code>class Pessoa:
    especie = "Homo sapiens"        # atributo de CLASSE (compartilhado)

    def __init__(self, nome, idade):  # construtor
        self.nome = nome             # atributos de INSTÂNCIA
        self.idade = idade

    def cumprimentar(self):          # método: sempre recebe self
        return f"Olá, eu sou {self.nome}"

    def fazer_aniversario(self):
        self.idade += 1
        return self


ana = Pessoa("Ana", 25)          # __init__ roda aqui
print(ana.cumprimentar())        # "Olá, eu sou Ana"
ana.fazer_aniversario()
print(ana.idade)                 # 26</code></pre>

<h2>self: a instância atual</h2>
<p><code>self</code> é o objeto que chamou o método. É o primeiro parâmetro de todo método de instância — Python passa automaticamente:</p>
<pre><code>ana.cumprimentar()
# Python traduz para: Pessoa.cumprimentar(ana)</code></pre>

<h2>Atributos de classe vs instância</h2>
<pre><code>class Carrinho:
    desconto = 0.10                 # classe: igual para todos

    def __init__(self):
        self.itens = []             # instância: único por objeto

a, b = Carrinho(), Carrinho()
a.desconto = 0.5        # cria atributo só de "a"!
Carrinho.desconto = 0.2 # muda para TODAS as instâncias (exceto a)</code></pre>

<h2>Validando no construtor</h2>
<pre><code>class Conta:
    def __init__(self, saldo=0):
        if saldo &lt; 0:
            raise ValueError("Saldo não pode ser negativo")
        self._saldo = saldo         # _convenção: "interno, não mexa"

    def depositar(self, valor):
        if valor &lt;= 0:
            raise ValueError("Depósito deve ser positivo")
        self._saldo += valor
        return self._saldo</code></pre>
`
        },
        {
          id: 'py-heranca',
          title: '2. Herança e super()',
          summary: 'Especializar classes reaproveitando comportamento.',
          content: `
<h2>Herança em Python</h2>
<pre><code>class Animal:
    def __init__(self, nome):
        self.nome = nome

    def emitir_som(self):
        return "som genérico"

class Cachorro(Animal):            # Cachorro HERDA de Animal
    def __init__(self, nome, raca):
        super().__init__(nome)     # inicializa a parte do pai
        self.raca = raca

    def emitir_som(self):          # sobrescreve
        return "Au au!"

    def buscar(self):              # método novo
        return f"{self.nome} trouxe a bola!"

rex = Cachorro("Rex", "vira-lata")
rex.emitir_som()       # "Au au!"
rex.buscar()           # "Rex trouxe a bola!"

isinstance(rex, Cachorro)   # True
isinstance(rex, Animal)     # True — rex É um animal
issubclass(Cachorro, Animal)  # True</code></pre>

<h2>Herança múltipla e MRO</h2>
<pre><code>class Voador:
    def voar(self): return "voando"

class Nadador:
    def nadar(self): return "nadando"

class Pato(Voador, Nadador):     # herda dos dois!
    pass

p = Pato()
p.voar()    # "voando"
p.nadar()   # "nadando"

# MRO (Method Resolution Order) — ordem de busca:
Pato.__mro__     # Pato → Voador → Nadador → object</code></pre>

<h2>Mixins: composição por herança</h2>
<pre><code>class JSONMixin:
    def to_json(self):
        import json
        return json.dumps(self.__dict__)

class Produto(JSONMixin):
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

Produto("SSD", 350).to_json()   # '{"nome": "SSD", "preco": 350}'</code></pre>

<div class="callout callout-tip">
<strong>super() na herança múltipla</strong> segue o MRO — é o que faz mixins e cooperative multiple inheritance funcionarem sem duplicar inicializações.
</div>
`
        },
        {
          id: 'polimorfismo',
          title: '3. Polimorfismo e Classes Abstratas',
          summary: 'Mesma interface, comportamentos diferentes.',
          content: `
<h2>Polimorfismo natural do Python</h2>
<p>Python não exige interface declarada: basta implementar o método e objetos diferentes respondem à mesma chamada ("duck typing"):</p>
<pre><code>class PagamentoPix:
    def processar(self, valor): return f"PIX de R$ {valor}"

class PagamentoCartao:
    def processar(self, valor): return f"Cartão de R$ {valor} (+taxa)"

class PagamentoBoleto:
    def processar(self, valor): return f"Boleto de R$ {valor} (vence em 3d)"

# O loop não sabe (nem liga) qual é qual:
pagamentos = [PagamentoPix(), PagamentoCartao(), PagamentoBoleto()]
for p in pagamentos:
    print(p.processar(100))   # cada um com seu comportamento</code></pre>

<h2>Classes abstratas: contratos explícitos</h2>
<pre><code>from abc import ABC, abstractmethod

class Notificacao(ABC):              # ABC = Abstract Base Class
    @abstractmethod
    def enviar(self, mensagem):      # contrato obrigatório
        ...

    @abstractmethod
    def formato(self):
        ...

class NotificacaoEmail(Notificacao):
    def enviar(self, mensagem):
        return f"Enviando e-mail: {self.formato(mensagem)}"

    def formato(self, msg):
        return f"&lt;html&gt;&lt;body&gt;{msg}&lt;/body&gt;&lt;/html&gt;"

# Notificacao() → TypeError: classe abstrata não instancia!
n = NotificacaoEmail()
print(n.enviar("Bem-vindo!"))</code></pre>

<h2>Duck typing na prática</h2>
<pre><code># len() funciona com QUALQUER coisa que implemente __len__:
len("abc")        # 3
len([1, 2])       # 2
len({"a": 1})     # 1

# for funciona com qualquer iterável — classe própria inclusa:
class Contagem:
    def __init__(self, n): self.n = n
    def __iter__(self):
        return iter(range(1, self.n + 1))

for i in Contagem(3):
    print(i)      # 1 2 3</code></pre>
`
        },
        {
          id: 'encapsulamento',
          title: '4. Encapsulamento: Properties e Name Mangling',
          summary: 'Proteger estado com elegância pythonica.',
          content: `
<h2>O jeito Python: convenção + property</h2>
<pre><code>class Produto:
    def __init__(self, preco):
        self.preco = preco       # chama o SETTER abaixo!

    @property
    def preco(self):             # getter: acesso como atributo
        return self._preco

    @preco.setter
    def preco(self, valor):      # setter: valida na atribuição
        if not isinstance(valor, (int, float)):
            raise TypeError("Preço deve ser numérico")
        if valor &lt; 0:
            raise ValueError("Preço negativo não existe")
        self._preco = float(valor)

p = Produto(100)
print(p.preco)        # 100.0 — parece atributo, roda método!
p.preco = 150         # validação roda de novo
# p.preco = -1        # ValueError!</code></pre>

<h2>Propriedades computadas</h2>
<pre><code>class Pedido:
    def __init__(self):
        self.itens = []

    def adicionar(self, nome, preco):
        self.itens.append((nome, preco))

    @property
    def total(self):            # calculada on-the-fly
        return sum(p for _, p in self.itens)

    @property
    def quantidade(self):
        return len(self.itens)

pedido = Pedido()
pedido.adicionar("SSD", 350)
print(pedido.total)     # 350 — sempre atualizado</code></pre>

<h2>_privado, __name_mangling</h2>
<pre><code>class Cofre:
    def __init__(self):
        self._dica = "olhe embaixo"     # 1 underline: "interno" (convensão)
        self.__senha = "1234"           # 2 underlines: name mangling!

    def abrir(self, tentativa):
        return tentativa == self.__senha

c = Cofre()
c._dica        # funciona (mas você foi avisado)
# c.__senha    → AttributeError
c._Cofre__senha  # "1234" — existe, mas renomeado (nada é 100% privado)</code></pre>

<div class="callout callout-tip">
<strong>Filosofia Python:</strong> "Todos somos adultos aqui". Privacidade é por convenção (<code>_nome</code>). Use <code>__duplo</code> só para evitar colisões em herança e <code>property</code> quando precisar de validação.
</div>
`
        },
        {
          id: 'py-dunder',
          title: '5. Métodos Mágicos (Dunders)',
          summary: '__init__, __str__, __len__, __eq__ e operadores.',
          content: `
<h2>Dunders: a magia por trás da sintaxe</h2>
<p>Métodos com <code>__duplo_underscore__</code> conectam seus objetos à sintaxe da linguagem:</p>
<pre><code>class Vetor:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):              # como o DEV vê (debug, REPL)
        return f"Vetor({self.x}, {self.y})"

    def __str__(self):               # como o USUÁRIO vê (print)
        return f"({self.x}, {self.y})"

    def __eq__(self, outro):         # habilita ==
        return (self.x, self.y) == (outro.x, outro.y)

    def __add__(self, outro):        # habilita v1 + v2
        return Vetor(self.x + outro.x, self.y + outro.y)

    def __mul__(self, escalar):      # habilita v * 2
        return Vetor(self.x * escalar, self.y * escalar)

    def __len__(self):               # habilita len(v)
        return 2

    def __bool__(self):              # habilita if v:
        return self.x != 0 or self.y != 0

v1 = Vetor(2, 3)
v2 = Vetor(2, 3)

print(v1)            # (2, 3)         → __str__
print(repr(v1))      # Vetor(2, 3)    → __repr__
v1 == v2             # True           → __eq__
v1 + v2              # Vetor(4, 6)    → __add__
v1 * 3               # Vetor(6, 9)    → __mul__
len(v1)              # 2              → __len__</code></pre>

<h2>Mais dunders essenciais</h2>
<pre><code>class Colecao:
    def __init__(self, itens):
        self._itens = list(itens)

    def __getitem__(self, i):        # habilita col[i] e iteração!
        return self._itens[i]

    def __contains__(self, item):    # habilita "x in col"
        return item in self._itens

    def __call__(self, *args):       # habilita instancia(args)!
        return self._itens + list(args)

c = Colecao([1, 2, 3])
c[0]                 # 1
2 in c               # True
for item in c: ...   # funciona por causa de __getitem__!</code></pre>
`
        },
        {
          id: 'py-dataclasses',
          title: '6. Dataclasses e Typing',
          summary: 'Classes de dados sem boilerplate e type hints.',
          content: `
<h2>Dataclasses: acabou o boilerplate</h2>
<pre><code>from dataclasses import dataclass, field

@dataclass
class Produto:
    nome: str
    preco: float
    estoque: int = 0
    tags: list[str] = field(default_factory=list)  # mutável seguro!

    def preco_com_desconto(self, pct=0.1):
        return self.preco * (1 - pct)

# O @dataclass gera __init__, __repr__ e __eq__ automaticamente:
p = Produto("SSD", 350, 10)
print(p)                    # Produto(nome='SSD', preco=350.0, ...)
p == Produto("SSD", 350, 10)  # True — compara por valor!

# Substitui ~30 linhas de código manual:
# class Produto:
#     def __init__(self, nome, preco, estoque=0): ...
#     def __repr__(self): ...
#     def __eq__(self, outro): ...</code></pre>

<h2>Variações úteis</h2>
<pre><code>@dataclass(frozen=True)      # imutável (hashable, thread-safe)
class Ponto:
    x: float
    y: float

@dataclass(order=True)      # ganha &lt;, &gt;, sorted() de graça
class Prioridade:
    nivel: int
    tarefa: str = field(compare=False)  # ignora na comparação

tarefas = [Prioridade(3, "e-mail"), Prioridade(1, "bug!")]
sorted(tarefas)[0].tarefa   # "bug!"</code></pre>

<h2>Type hints: dica de tipos</h2>
<pre><code>def processar(itens: list[str], limite: int = 10) -&gt; dict[str, int]:
    """Tipos são VERIFICADOS por ferramentas (mypy), não em runtime."""
    return {i: len(i) for i in itens[:limite]}

from typing import Optional, Union

def buscar(id: int) -&gt; Optional[dict]:    # pode retornar None
    ...

# Python 3.10+: união elegante
def dobrar(valor: int | float) -&gt; int | float:
    return valor * 2</code></pre>

<div class="callout callout-tip">
<strong>Por que type hints?</strong> IDEs autocompletam melhor, o mypy pega bugs antes de rodar e a documentação fica viva. Python continua dinâmico — hints são contrato, não algema.
</div>
`
        }
      ]
    },
    {
      id: 'py-arquivos-erros',
      title: 'Arquivos, Erros e Módulos',
      description: 'Persistência, exceções, organização de projetos e ambientes.',
      lessons: [
        {
          id: 'py-arquivos',
          title: '1. Leitura e Escrita de Arquivos',
          summary: 'open, with, modos e formatos JSON/CSV.',
          content: `
<h2>O padrão with open</h2>
<pre><code># with fecha o arquivo AUTOMATICAMENTE (mesmo com erro no meio):
with open("dados.txt", "w", encoding="utf-8") as f:
    f.write("linha 1\\n")
    f.write("linha 2\\n")

with open("dados.txt", "r", encoding="utf-8") as f:
    conteudo = f.read()            # arquivo inteiro em uma string

# Modos: r=ler, w=escrever (apaga!), a=append, r+=ler+escrever
# encoding="utf-8" SEMPRE (senão acentos quebram no Windows)</code></pre>

<h2>Lendo com graça</h2>
<pre><code>with open("log.txt", encoding="utf-8") as f:
    for linha in f:                # uma linha por vez (memória constante)
        if "ERRO" in linha:
            print(linha.strip())

    f.seek(0)                      # volta ao início
    linhas = f.readlines()         # lista com todas as linhas</code></pre>

<h2>JSON: dados estruturados</h2>
<pre><code>import json

config = {"tema": "dark", "atalhos": ["ctrl+k", "esc"], "fonte": 14}

# Python → arquivo JSON:
with open("config.json", "w", encoding="utf-8") as f:
    json.dump(config, f, indent=2, ensure_ascii=False)

# Arquivo JSON → Python:
with open("config.json", encoding="utf-8") as f:
    config_lida = json.load(f)

# Strings JSON (APIs):
texto = json.dumps(config)          # dict → str
config = json.loads(texto)          # str → dict</code></pre>

<h2>CSV sem sofrer</h2>
<pre><code>import csv

# Escrever:
with open("vendas.csv", "w", newline="", encoding="utf-8") as f:
    escritor = csv.DictWriter(f, fieldnames=["produto", "valor"])
    escritor.writeheader()
    escritor.writerow({"produto": "SSD", "valor": 350})

# Ler:
with open("vendas.csv", encoding="utf-8") as f:
    for linha in csv.DictReader(f):
        print(linha["produto"], linha["valor"])</code></pre>

<div class="callout callout-tip">
<strong>Pathlib</strong> para caminhos: <code>from pathlib import Path</code> → <code>arquivos = Path("logs").glob("*.log")</code>, <code>Path("dados").mkdir(exist_ok=True)</code>. Esqueça <code>os.path.join</code>.
</div>
`
        },
        {
          id: 'py-excecoes',
          title: '2. Exceções e Validação',
          summary: 'try/except/else/finally e exceções próprias.',
          content: `
<h2>Tratamento completo</h2>
<pre><code>try:
    valor = int(entrada_usuario)     # pode lançar ValueError
    resultado = 100 / valor          # pode lançar ZeroDivisionError
except ValueError:
    print("Digite um número válido")
except ZeroDivisionError as e:
    print(f"Erro matemático: {e}")
except (KeyError, IndexError):
    print("Erro de acesso a dados")
else:
    print("Sucesso!")               # roda se NÃO houve erro
finally:
    print("Sempre executa")         # limpeza garantida</code></pre>

<h2>Exceções customizadas</h2>
<pre><code>class ErroDominio(Exception):
    """Erro de regra de negócio da aplicação."""
    def __init__(self, mensagem, codigo=None):
        super().__init__(mensagem)
        self.codigo = codigo

class SaldoInsuficiente(ErroDominio):
    pass

class Carteira:
    def __init__(self, saldo=0):
        self.saldo = saldo

    def sacar(self, valor):
        if valor &gt; self.saldo:
            raise SaldoInsuficiente(
                f"Precisa de R$ {valor - self.saldo} a mais",
                codigo="SALDO_BAIXO"
            )
        self.saldo -= valor

try:
    Carteira(50).sacar(100)
except SaldoInsuficiente as e:
    print(f"[{e.codigo}] {e}")   # [SALDO_BAIXO] Precisa de R$ 50 a mais</code></pre>

<h2>LBYL vs EAFP</h2>
<pre><code># LBYL (Look Before You Leap) — verifica antes:
if "chave" in dados and dados["chave"] &gt; 0:
    usar(dados["chave"])

# EAFP (Easier to Ask Forgiveness) — pythonico: tenta e captura:
try:
    usar(dados["chave"])
except (KeyError, TypeError):
    tratar_falta()</code></pre>

<div class="callout callout-warning">
<strong>Nunca</strong> <code>except:</code> vazio ou <code>except Exception: pass</code> — engolir erros esconde bugs. Capture <strong>exceções específicas</strong> e sempre registre ou trate.
</div>
`
        },
        {
          id: 'py-modulos-pacotes',
          title: '3. Módulos, Pacotes e pip',
          summary: 'Organizar código, requirements e ambientes virtuais.',
          content: `
<h2>Módulos: qualquer arquivo .py</h2>
<pre><code># ---- utilidades.py ----
IMPOSTO = 0.08

def formatar_preco(valor):
    return f"R$ {valor:.2f}"

# ---- app.py ----
import utilidades
print(utilidades.formatar_preco(100))

from utilidades import formatar_preco, IMPOSTO   # import seletivo
from utilidades import formatar_preco as moeda    # renomear

if __name__ == "__main__":      # só roda quando executado direto
    print("testes do módulo...")</code></pre>

<h2>Pacotes: pastas com __init__.py</h2>
<pre><code>meu_projeto/
├── app.py
├── models/
│   ├── __init__.py
│   ├── usuario.py
│   └── pedido.py
└── services/
    └── email.py

# importando:
from models.usuario import Usuario
from services.email import enviar_email</code></pre>

<h2>Bibliotecas externas: pip</h2>
<pre><code># Instalar do PyPI (o repositório oficial):
pip install requests pandas

# Versão específica:
pip install "fastapi==0.104.0"

# Congelar ambiente para reprodução exata:
pip freeze &gt; requirements.txt

# Reproduzir em outra máquina:
pip install -r requirements.txt

# Ver o que está instalado:
pip list</code></pre>

<h2>Ambientes virtuais: obrigatório</h2>
<pre><code># Cada projeto tem SUAS dependências isoladas:
python -m venv .venv

# Ativar:
source .venv/bin/activate      # Linux/Mac
.venv\\Scripts\\activate         # Windows

# Desativar:
deactivate</code></pre>

<div class="callout callout-tip">
<strong>Hábito profissional:</strong> crie o venv na pasta do projeto ANTES do primeiro <code>pip install</code>. Projeto sem venv = risco de conflito de versões entre projetos no mesmo computador.
</div>
`
        },
        {
          id: 'py-logging',
          title: '4. Logging e Debugger',
          summary: 'Logs profissionais e depuração com pdb.',
          content: `
<h2>Adeus print, olá logging</h2>
<pre><code>import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
log = logging.getLogger("monocode.app")

log.debug("detalhe técnico")              # só em desenvolvimento
log.info("usuário %s entrou", "ana")      # eventos normais
log.warning("disco 80%% cheio")           # atenção
log.error("falha ao salvar pedido %s", 42)
log.exception("bug!")                     # ERROR + stack trace completa!</code></pre>

<h2>Logs em arquivo com rotação</h2>
<pre><code>from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler("app.log", maxBytes=1_000_000, backupCount=3)
logging.basicConfig(
    handlers=[handler],
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)</code></pre>

<h2>Depurador nativo: breakpoint()</h2>
<pre><code>def calcular_preco_total(itens, cupom=None):
    subtotal = sum(i["preco"] for i in itens)
    breakpoint()                    # pausa AQUI no terminal
    # No prompt do pdb:
    # p subtotal          → imprime variável
    # p itens             → inspeciona objetos
    # n  (next)           → próxima linha
    # s  (step)           → entra na função
    # c  (continue)       → segue até o próximo breakpoint
    # q  (quit)           → sai
    return subtotal * 0.9</code></pre>

<div class="callout callout-tip">
<strong>logging vs print:</strong> print não tem nível, timestamp, destino configurável nem é desligável em produção. Troque seus prints de diagnóstico por <code>log.debug()</code> — e vire-os off com uma linha de configuração.
</div>
`
        }
      ]
    },
    {
      id: 'py-bibliotecas',
      title: 'Bibliotecas Populares',
      description: 'NumPy, Pandas, Matplotlib, requisições e automação.',
      lessons: [
        {
          id: 'py-numpy',
          title: '1. NumPy Básico',
          summary: 'Arrays vetorizados: a base da ciência de dados.',
          content: `
<h2>Por que NumPy?</h2>
<p>Listas Python são flexíveis mas lentas para matemática. Arrays NumPy são <strong>homogêneos, contíguos na memória e vetorizados</strong> — operações em C, 10-100x mais rápidas:</p>
<pre><code>import numpy as np

# Criando:
a = np.array([1, 2, 3, 4])
matriz = np.array([[1, 2], [3, 4]])
np.zeros(5)               # [0. 0. 0. 0. 0.]
np.arange(0, 10, 2)       # [0 2 4 6 8]
np.linspace(0, 1, 5)      # [0. 0.25 0.5 0.75 1. ]</code></pre>

<h2>Vetorização: sem loops</h2>
<pre><code>a = np.array([1, 2, 3, 4])

a * 2              # [2 4 6 8]       — cada elemento
a ** 2             # [1 4 9 16]
a &gt; 2              # [False False True True] — máscara booleana!
a[a &gt; 2]           # [3 4]           — filtragem pela máscara
a.mean(), a.sum(), a.std()   # estatísticas instantâneas

# Equivalente em lista pura precisaria de for/loop — muito mais lento.</code></pre>

<h2>Matrizes e eixos</h2>
<pre><code>m = np.array([[1, 2, 3],
              [4, 5, 6]])

m.shape            # (2, 3) — 2 linhas, 3 colunas
m.sum(axis=0)      # [5 7 9]   — soma das COLUNAS
m.sum(axis=1)      # [6 15]    — soma das LINHAS
m.T                # transposta
m[0, 1]            # 2 — linha 0, coluna 1
m[:, 0]            # [1 4] — toda a primeira coluna
m[m &gt; 3]           # [4 5 6]</code></pre>

<h2>Broadcasting</h2>
<pre><code>precos = np.array([100, 200, 300])
descontos = np.array([0.1, 0.2, 0.3])

precos * (1 - descontos)   # [90. 160. 210.] — elemento a elemento

# matriz + vetor: o vetor "se espalha" pelas linhas:
m + np.array([10, 20, 30])   # soma em cada linha</code></pre>

<div class="callout callout-tip">
<strong>Regra de ouro:</strong> se você escreveu um <code>for</code> sobre um array NumPy, provavelmente existe uma operação vetorizada para isso. Vectorize primeiro, otimize depois.
</div>
`
        },
        {
          id: 'py-pandas',
          title: '2. Pandas DataFrame',
          summary: 'Tabelas, filtros e agregações práticas.',
          content: `
<h2>DataFrame: sua planilha programável</h2>
<pre><code>import pandas as pd

dados = [
    {"produto": "SSD",     "categoria": "hardware", "valor": 350, "qtd": 10},
    {"produto": "Teclado", "categoria": "periférico", "valor": 200, "qtd": 5},
    {"produto": "Mouse",   "categoria": "periférico", "valor": 90,  "qtd": 20},
    {"produto": "Monitor", "categoria": "hardware",  "valor": 900, "qtd": 3},
]

df = pd.DataFrame(dados)

df.head()                 # primeiras linhas
df.shape                  # (4, 4)
df.info()                 # tipos e nulos
df.describe()             # estatísticas numéricas</code></pre>

<h2>Seleção e filtro</h2>
<pre><code># Colunas:
df["valor"]                       # Series com uma coluna
df[["produto", "valor"]]          # DataFrame com várias

# Filtros com máscaras booleanas:
caros = df[df["valor"] &gt; 100]
hw_baratos = df[(df["categoria"] == "hardware") &amp; (df["valor"] &lt; 500)]
perifericos = df.query("categoria == 'periférico'")   # sintaxe SQL-ish

# Loc/iloc:
df.loc[0, "produto"]              # por RÓTULO
df.iloc[0, 0]                     # por POSIÇÃO
df.loc[df["valor"] &gt; 100, ["produto", "valor"]]</code></pre>

<h2>Colunas novas e agregações</h2>
<pre><code># Coluna calculada:
df["total_estoque"] = df["valor"] * df["qtd"]

# Agregar por categoria (estilo GROUP BY):
resumo = df.groupby("categoria").agg(
    total=("total_estoque", "sum"),
    ticket_medio=("valor", "mean"),
    itens=("produto", "count"),
)

# Ordenar e pegar os melhores:
top = df.nlargest(2, "total_estoque")

# Aplicar função em cada valor:
df["produto_maiusculo"] = df["produto"].str.upper()

# Valores faltantes:
df["valor"].isna().sum()          # quantos nulos?
df = df.dropna(subset=["valor"])
df["valor"] = df["valor"].fillna(0)</code></pre>

<div class="callout callout-tip">
<strong>Leitura gráfica:</strong> <code>df.groupby("x")["y"].agg("...")</code> responde 80% das perguntas de dados. Combinado com <code>nlargest</code> você já tem relatórios prontos.
</div>
`
        },
        {
          id: 'py-matplotlib',
          title: '3. Matplotlib: Visualização',
          summary: 'Gráficos de linha, barra e dispersão.',
          content: `
<h2>Primeiros gráficos</h2>
<pre><code>import matplotlib.pyplot as plt

meses = ["Jan", "Fev", "Mar", "Abr"]
vendas = [120, 150, 90, 200]

# Linha:
plt.plot(meses, vendas, marker="o", linestyle="--")
plt.title("Vendas por mês")
plt.xlabel("Mês")
plt.ylabel("Unidades")
plt.grid(alpha=0.3)
plt.show()</code></pre>

<h2>Barras e dispersão</h2>
<pre><code>produtos = ["SSD", "Teclado", "Mouse"]
valores = [350, 200, 90]

plt.bar(produtos, valores, color="#333333")
plt.title("Preço por produto")
for i, v in enumerate(valores):
    plt.text(i, v + 10, str(v), ha="center")   # rótulo nas barras
plt.show()

# Dispersão: relação entre duas variáveis:
plt.scatter(df["valor"], df["qtd"])
plt.xlabel("Preço")
plt.ylabel("Quantidade")
plt.show()</code></pre>

<h2>Múltiplos gráficos e histograma</h2>
<pre><code>fig, eixos = plt.subplots(1, 2, figsize=(12, 4))

eixos[0].bar(produtos, valores)
eixos[0].set_title("Barras")

eixos[1].hist(df["valor"], bins=5)
eixos[1].set_title("Distribuição de preços")

plt.tight_layout()
plt.savefig("relatorio.png", dpi=150)   # salvar direto!
plt.show()</code></pre>

<div class="callout callout-tip">
<strong>Padrão rápido:</strong> <code>df.plot(kind="bar", x="produto", y="valor")</code> — o Pandas chama o Matplotlib por você. Explore <code>kind</code>: line, bar, hist, box, scatter.
</div>
`
        },
        {
          id: 'py-requests',
          title: '4. Requests: Consumindo APIs',
          summary: 'HTTP com a biblioteca mais querida do Python.',
          content: `
<h2>GET, POST e afins</h2>
<pre><code>import requests

# GET — buscar dados:
resposta = requests.get("https://api.exemplo.dev/produtos",
                        params={"categoria": "hardware", "limite": 5},
                        timeout=10)

resposta.status_code     # 200, 404, 500...
resposta.ok              # True se 2xx
dados = resposta.json()  # corpo JSON → dict/list

# POST — enviar dados:
novo = requests.post("https://api.exemplo.dev/produtos",
    json={"nome": "SSD", "preco": 350},     # json= serializa e seta header
    headers={"Authorization": "Bearer TOKEN"},
    timeout=10)

# PUT / DELETE:
requests.put(url, json=dados_atualizados)
requests.delete(url + "/42")</code></pre>

<h2>Tratando erros de rede</h2>
<pre><code>try:
    r = requests.get("https://api.exemplo.dev/produtos", timeout=5)
    r.raise_for_status()                 # lança exceção se 4xx/5xx
    dados = r.json()
except requests.Timeout:
    print("Servidor não respondeu em 5s")
except requests.HTTPError as e:
    print(f"Erro HTTP: {e.response.status_code}")
except requests.ConnectionError:
    print("Sem internet / servidor fora do ar")
except requests.JSONDecodeError:
    print("Resposta não é JSON válido")</code></pre>

<h2>Session: conexões reutilizáveis</h2>
<pre><code>with requests.Session() as sessao:
    sessao.headers.update({"Authorization": "Bearer TOKEN"})

    # cookies e conexão são reaproveitados — muito mais rápido:
    for id in range(1, 100):
        sessao.get(f"https://api.exemplo.dev/produtos/{id}", timeout=5)</code></pre>

<div class="callout callout-warning">
<strong>Sempre</strong> passe <code>timeout</code>. Sem ele, uma API lenta congela seu programa para sempre.
</div>
`
        },
        {
          id: 'py-automacao',
          title: '5. Automação de Tarefas',
          summary: 'pathlib, agendamento e scripts práticos.',
          content: `
<h2>Organizar arquivos com pathlib</h2>
<pre><code>from pathlib import Path
from shutil import move

pasta = Path("downloads")

# Mover cada tipo para sua pasta:
destinos = {
    ".pdf": "documentos",
    ".jpg": "imagens",
    ".mp4": "videos",
}

for arquivo in pasta.iterdir():
    if arquivo.is_file():
        destino = destinos.get(arquivo.suffix.lower())
        if destino:
            pasta_destino = pasta / destino
            pasta_destino.mkdir(exist_ok=True)
            move(arquivo, pasta_destino / arquivo.name)
            print(f"{arquivo.name} → {destino}/")</code></pre>

<h2>Renomear em massa</h2>
<pre><code>fotos = sorted(Path("fotos").glob("*.jpg"))

for indice, foto in enumerate(fotos, start=1):
    novo_nome = f"viagem_{indice:03d}{foto.suffix}"
    foto.rename(foto.parent / novo_nome)
# viagem_001.jpg, viagem_002.jpg, ...</code></pre>

<h2>Agendar com schedule</h2>
<pre><code># pip install schedule
import schedule, time

def backup():
    print("Executando backup...")

schedule.every().day.at("03:00").do(backup)
schedule.every().hour.do(checar_emails)
schedule.every(10).minutes.do(sincronizar)

while True:
    schedule.run_pending()
    time.sleep(60)</code></pre>

<h2>CLI profissional com argparse</h2>
<pre><code>import argparse

parser = argparse.ArgumentParser(description="Organizador de arquivos")
parser.add_argument("pasta", help="pasta a organizar")
parser.add_argument("--dry-run", action="store_true", help="só simula")
args = parser.parse_args()

print(f"Organizando {args.pasta} (dry-run: {args.dry_run})")
# uso: python organizar.py downloads --dry-run</code></pre>

<div class="callout callout-tip">
<strong>Ferramentas que valem estudo:</strong> <code>pyautogui</code> (controlar mouse/teclado), <code>openpyxl</code> (Excel), <code>smtplib</code> (e-mail) e <code>beautifulsoup4</code> (raspar páginas). Automação é onde Python se paga sozinho no trabalho.
</div>
`
        }
      ]
    }
  ]
};
