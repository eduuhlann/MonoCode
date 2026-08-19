// MonoCode — Curso Completo de SQL
// 7 módulos • 30 lições com explicações didáticas completas

export const SQL_COURSE = {
  id: 'sql',
  name: 'SQL',
  language: 'SQL',
  level: 'Iniciante a Intermediário',
  levelTag: 'iniciante',
  shortDesc: 'Domine bancos de dados relacionais: SELECT, filtros, agregações, JOINs, CRUD e modelagem de dados.',
  description: 'Trilha completa de SQL cobrindo consultas SELECT, filtros, ordenação, funções agregadas, GROUP BY, JOINs, CRUD, subconsultas, CTEs, window functions, transações e segurança.',
  tags: ['Banco de Dados', 'Backend', 'Dados', 'Relacional'],
  modules: [
    {
      id: 'sql-fundamentos',
      title: 'Fundamentos do SQL',
      description: 'Banco de dados, tabelas e a primeira consulta.',
      lessons: [
        {
          id: 'sql-intro',
          title: '1. O que é SQL',
          summary: 'Linguagem de consulta relacional e o modelo de tabelas.',
          content: `
<h2>Bancos relacionais</h2>
<p>Um banco relacional guarda dados em <strong>tabelas</strong> (linhas e colunas), como planilhas rigorosas. A relação entre tabelas é o que dá nome ao modelo. SQL (<strong>S</strong>tructured <strong>Q</strong>uery <strong>L</strong>anguage) é a linguagem universal para conversar com esses bancos — funciona em PostgreSQL, MySQL, SQLite, SQL Server e Oracle com pequenas variações.</p>

<h2>Tabela de exemplo</h2>
<pre><code>usuarios
┌────┬──────────┬───────────┬────────┐
│ id │ nome     │ email     │ idade  │
├────┼──────────┼───────────┼────────┤
│  1 │ Ana      │ ana@x.dev │    25  │
│  2 │ Bia      │ bia@x.dev │    30  │
│  3 │ Caio     │ caio@x.dv │    22  │
└────┴──────────┴───────────┴────────┘</code></pre>
<ul>
  <li><strong>Linha (row/registro):</strong> um usuário.</li>
  <li><strong>Coluna:</strong> um atributo.</li>
  <li><strong>Chave primária (PK):</strong> <code>id</code> identifica unicamente cada linha.</li>
</ul>

<h2>As 4 categorias de comandos</h2>
<ul>
  <li><strong>DQL</strong> — consulta: <code>SELECT</code>.</li>
  <li><strong>DML</strong> — manipulação: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.</li>
  <li><strong>DDL</strong> — definição (estrutura): <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>.</li>
  <li><strong>DCL/TCL</strong> — permissões e transações: <code>GRANT</code>, <code>BEGIN</code>, <code>COMMIT</code>.</li>
</ul>

<div class="callout callout-tip">
<strong>Para praticar:</strong> qualquer SQLite (inclusive no navegador com sql.js) serve para começar. PostgreSQL via Docker é a melhor escolha para aprendizado sério.
</div>
`
        },
        {
          id: 'sql-select',
          title: '2. SELECT',
          summary: 'Consultando colunas específicas e todas.',
          content: `
<h2>A consulta mais comum do mundo</h2>
<pre><code>-- Colunas específicas:
SELECT nome, email FROM usuarios;

-- Todas as colunas (* é útil para exploração, evite em produção):
SELECT * FROM usuarios;

-- Aliases (apelidos) nos resultados:
SELECT nome AS aluno, email AS contato FROM usuarios;

-- Expressões e funções:
SELECT nome, idade * 365 AS dias_de_vida FROM usuarios;
SELECT UPPER(nome) AS nome_maiusculo FROM usuarios;</code></pre>

<h2>LIMIT e OFFSET: paginação</h2>
<pre><code>-- Página 2 com 10 itens por página:
SELECT * FROM produtos
ORDER BY id
LIMIT 10 OFFSET 10;       -- OFFSET = (pagina - 1) * limite</code></pre>

<h2>DISTINCT: valores únicos</h2>
<pre><code>-- Quais cidades distintas existem na tabela?
SELECT DISTINCT cidade FROM usuarios;

-- Combinação única de duas colunas:
SELECT DISTINCT cidade, estado FROM usuarios;</code></pre>

<div class="callout callout-tip">
<strong>Hábito:</strong> evite <code>SELECT *</code> em código de produção — quando a tabela ganha uma coluna nova e pesada, sua query passa a trazê-la sem você perceber. Liste as colunas que precisa.
</div>
`
        },
        {
          id: 'sql-operadores',
          title: '3. Operadores e Funções',
          summary: 'Aritméticos, comparação, texto e datas.',
          content: `
<h2>Comparação e aritmética</h2>
<pre><code>SELECT * FROM produtos WHERE preco &gt; 100;
SELECT * FROM produtos WHERE preco &gt;= 100 AND preco &lt;= 500;
SELECT * FROM produtos WHERE estoque != 0;

-- Aritmética:
SELECT nome, preco, estoque, preco * estoque AS valor_total
FROM produtos;</code></pre>

<h2>Texto</h2>
<pre><code>SELECT * FROM usuarios WHERE email = 'ana@x.dev';
SELECT * FROM usuarios WHERE nome LIKE 'A%';      -- começa com A
SELECT * FROM usuarios WHERE nome LIKE '%a%';      -- contém "a"
SELECT * FROM usuarios WHERE nome LIKE '_na';      -- 2 chars terminando em "na" (Ana)

-- Concatenação (varia por banco):
SELECT nome || ' (' || email || ')' FROM usuarios;       -- Postgres/SQLite
SELECT CONCAT(nome, ' (', email, ')') FROM usuarios;     -- MySQL
SELECT nome + ' (' + email + ')' FROM usuarios;          -- SQL Server</code></pre>

<h2>Datas (padrão ISO: AAAA-MM-DD)</h2>
<pre><code>SELECT * FROM pedidos WHERE data &gt;= '2026-01-01';
SELECT * FROM pedidos WHERE data BETWEEN '2026-01-01' AND '2026-01-31';

-- Funções (variam; exemplo Postgres):
SELECT CURRENT_DATE;
SELECT NOW();
SELECT EXTRACT(YEAR FROM data) FROM pedidos;
SELECT AGE(data_nascimento) FROM usuarios;     -- idade</code></pre>

<h2>NULL: o invisível</h2>
<pre><code>-- NULL nunca é igual a nada — nem a outro NULL!
SELECT * FROM usuarios WHERE email IS NULL;
SELECT * FROM usuarios WHERE email IS NOT NULL;
-- email = NULL  ❌ não retorna nada (use IS NULL)</code></pre>
`
        },
        {
          id: 'sql-criando-tabela',
          title: '4. CREATE TABLE',
          summary: 'Criando tabelas com tipos e chaves.',
          content: `
<h2>A anatomia de uma tabela</h2>
<pre><code>CREATE TABLE produtos (
  id          SERIAL PRIMARY KEY,        -- auto-incremento (Postgres)
  nome        VARCHAR(100) NOT NULL,
  descricao   TEXT,
  preco       DECIMAL(10, 2) NOT NULL,   -- 10 dígitos, 2 decimais
  estoque     INTEGER DEFAULT 0,
  ativo       BOOLEAN DEFAULT TRUE,
  criado_em   TIMESTAMP DEFAULT NOW()
);</code></pre>

<h2>Tipos comuns</h2>
<ul>
  <li><strong>Inteiros:</strong> <code>INT</code>, <code>BIGINT</code>, <code>SMALLINT</code>.</li>
  <li><strong>Decimais:</strong> <code>DECIMAL(p,s)</code> (exato, para dinheiro!), <code>REAL</code> (aproximado).</li>
  <li><strong>Texto:</strong> <code>VARCHAR(n)</code> (com limite), <code>TEXT</code> (sem limite).</li>
  <li><strong>Tempo:</strong> <code>DATE</code>, <code>TIME</code>, <code>TIMESTAMP</code>.</li>
  <li><strong>Booleano:</strong> <code>BOOLEAN</code>.</li>
</ul>

<h2>Variações de auto-incremento</h2>
<pre><code>id INT AUTO_INCREMENT PRIMARY KEY     -- MySQL
id SERIAL PRIMARY KEY                  -- Postgres
id INTEGER PRIMARY KEY AUTOINCREMENT   -- SQLite</code></pre>

<div class="callout callout-warning">
<strong>Dinheiro:</strong> <strong>nunca</strong> use <code>FLOAT</code> para valores monetários — arredondamento binário cria erros. <code>DECIMAL(10,2)</code> é exato. 10 dígitos no total, 2 após a vírgula.
</div>
`
        }
      ]
    },
    {
      id: 'sql-filtros',
      title: 'Filtros e Ordenação',
      description: 'WHERE, ORDER BY, LIMIT e padrões.',
      lessons: [
        {
          id: 'sql-where',
          title: '1. WHERE',
          summary: 'Filtrando linhas com condições.',
          content: `
<h2>O filtro fundamental</h2>
<pre><code>SELECT * FROM produtos WHERE preco &gt; 50;
SELECT * FROM produtos WHERE categoria = 'eletrônicos';
SELECT * FROM produtos WHERE ativo = TRUE;
SELECT * FROM produtos WHERE descricao IS NOT NULL;</code></pre>

<h2>BETWEEN e IN</h2>
<pre><code>-- Intervalo inclusivo:
SELECT * FROM produtos WHERE preco BETWEEN 50 AND 200;

-- Lista de valores:
SELECT * FROM pedidos WHERE status IN ('pago', 'enviado', 'entregue');
SELECT * FROM usuarios WHERE estado IN ('SP', 'RJ', 'MG');

-- Negando IN:
WHERE status NOT IN ('cancelado', 'estornado')</code></pre>

<h2>Ordem lógica de execução</h2>
<p>Escrevemos SELECT primeiro, mas o banco executa nesta ordem — entender isso explica muitos mistérios:</p>
<pre><code>1. FROM       (de quais tabelas)
2. WHERE      (filtro de linhas)
3. GROUP BY   (agrupar)
4. HAVING     (filtro de grupos)
5. SELECT     (projeção: quais colunas)
6. ORDER BY   (ordem final)
7. LIMIT      (quantidade)</code></pre>
<p>Por isso <code>WHERE</code> não pode usar aliases do <code>SELECT</code> — eles ainda não existem nesta fase.</p>
`
        },
        {
          id: 'sql-and-or',
          title: '2. AND, OR e NOT',
          summary: 'Combinando condições com parênteses.',
          content: `
<h2>Operadores lógicos</h2>
<pre><code>-- E: ambas precisam ser verdadeiras:
SELECT * FROM produtos
WHERE categoria = 'eletrônicos' AND preco &lt; 500;

-- OU: qualquer uma:
SELECT * FROM produtos
WHERE categoria = 'livros' OR categoria = 'jogos';

-- NÃO: inverte:
SELECT * FROM produtos WHERE NOT (categoria = 'livros');</code></pre>

<h2>Precedência: parênteses salvam vidas</h2>
<pre><code>-- ❌ Ambíguo: AND vence sobre OR — pode não ser o que você quer:
WHERE ativo = TRUE AND categoria = 'livros' OR categoria = 'jogos'
-- significa: (ativo AND livros) OR jogos

-- ✅ Explícito:
WHERE ativo = TRUE AND (categoria = 'livros' OR categoria = 'jogos')</code></pre>

<h2>Refatorando com IN</h2>
<pre><code>-- Vários OR viram um IN (mais legível e mais rápido):
WHERE categoria IN ('livros', 'jogos', 'filmes')</code></pre>
`
        },
        {
          id: 'sql-like',
          title: '3. LIKE e Padrões de Texto',
          summary: 'Busca por trechos com curingas.',
          content: `
<h2>Os curingas</h2>
<pre><code>-- % : qualquer sequência (inclusive vazia)
SELECT * FROM usuarios WHERE nome LIKE 'A%';     -- Ana, Arthur, Amanda
SELECT * FROM usuarios WHERE nome LIKE '%a';     -- termina em "a"
SELECT * FROM usuarios WHERE nome LIKE '%ana%';  -- contém "ana"

-- _ : exatamente UM caractere
SELECT * FROM usuarios WHERE nome LIKE '_na';    -- Ana, Ena (3 letras)
SELECT * FROM usuarios WHERE cep LIKE '_____';   -- 5 caracteres</code></pre>

<h2>ILIKE: case-insensitive (Postgres)</h2>
<pre><code>SELECT * FROM usuarios WHERE nome ILIKE 'a%';   -- Ana, ana, ANA</code></pre>

<h2>Expressões regulares</h2>
<pre><code>-- Postgres: ~ (sensível), ~* (insensível)
SELECT * FROM usuarios WHERE email ~ '^[a-z]+@';

-- MySQL: REGEXP
SELECT * FROM usuarios WHERE email REGEXP '^[a-z]+@';</code></pre>

<div class="callout callout-warning">
<strong>Performance:</strong> <code>LIKE '%texto'</code> (curinga no início) <strong>não usa índice</strong> — o banco precisa ler a tabela inteira. Em bases grandes, prefira busca full-text (<code>tsvector</code> no Postgres) ou trigramas.
</div>
`
        },
        {
          id: 'sql-order-limit',
          title: '4. ORDER BY, LIMIT e paginação',
          summary: 'Ordenando resultados e limitando quantidade.',
          content: `
<h2>ORDER BY</h2>
<pre><code>-- Crescente (padrão):
SELECT * FROM produtos ORDER BY preco ASC;

-- Decrescente:
SELECT * FROM produtos ORDER BY preco DESC;

-- Múltiplas colunas (desempate):
SELECT * FROM produtos
ORDER BY categoria ASC, preco DESC;

-- Por posição da coluna (evite em produção):
SELECT nome, preco FROM produtos ORDER BY 2 DESC;</code></pre>

<h2>NULLs na ordenação</h2>
<pre><code>-- Por padrão NULLs vêm por último em ASC, primeiro em DESC.
-- Controle explícito (Postgres):
SELECT * FROM usuarios ORDER BY email DESC NULLS LAST;</code></pre>

<h2>Paginação com LIMIT/OFFSET</h2>
<pre><code>-- Página 3 (10 por página):
SELECT * FROM produtos ORDER BY id LIMIT 10 OFFSET 20;</code></pre>

<h2>Paginação por cursor (mais eficiente)</h2>
<pre><code>-- Em vez de OFFSET (que relê tudo), lembre do último id:
SELECT * FROM produtos
WHERE id &gt; 100         -- último id visto da página anterior
ORDER BY id
LIMIT 10;
-- Não sofre com drift quando itens são inseridos/removidos.</code></pre>
`
        }
      ]
    },
    {
      id: 'sql-agregacao',
      title: 'Funções Agregadas e GROUP BY',
      description: 'Resumindo dados com COUNT, SUM e HAVING.',
      lessons: [
        {
          id: 'sql-count',
          title: '1. COUNT, SUM, AVG',
          summary: 'Contagem, soma e média.',
          content: `
<h2>Agregações básicas</h2>
<pre><code>SELECT COUNT(*) FROM produtos;                          -- total de linhas
SELECT COUNT(*) FROM produtos WHERE estoque &gt; 0;          -- com filtro
SELECT COUNT(email) FROM usuarios;                        -- conta NÃO-NULLs
SELECT COUNT(DISTINCT categoria) FROM produtos;           -- categorias únicas

SELECT SUM(estoque) FROM produtos;                        -- total em estoque
SELECT AVG(preco) FROM produtos;                          -- preço médio
SELECT SUM(preco * estoque) AS valor_total FROM produtos; -- capital parado</code></pre>

<h2>Combinações úteis</h2>
<pre><code>-- Arredondando:
SELECT ROUND(AVG(preco), 2) FROM produtos;

-- Múltiplas agregações de uma vez:
SELECT
  COUNT(*)        AS total,
  SUM(estoque)    AS itens_estoque,
  AVG(preco)      AS ticket_medio,
  MIN(preco)      AS mais_barato,
  MAX(preco)      AS mais_caro
FROM produtos;</code></pre>

<div class="callout callout-warning">
<strong>COUNT(*) vs COUNT(coluna):</strong> <code>COUNT(*)</code> conta TODAS as linhas. <code>COUNT(email)</code> conta apenas onde email não é NULL. Escolher errado distorce relatórios.
</div>
`
        },
        {
          id: 'sql-min-max',
          title: '2. MIN, MAX e agregações com WHERE',
          summary: 'Extremos e agregações filtradas.',
          content: `
<h2>Extremos</h2>
<pre><code>SELECT MIN(preco), MAX(preco) FROM produtos;
SELECT MIN(criado_em), MAX(criado_em) FROM pedidos;  -- período de atividade

-- Com filtro:
SELECT MAX(preco) FROM produtos WHERE categoria = 'livros';</code></pre>

<h2>Onde o filtro aparece importa</h2>
<pre><code>-- Agregação de TODOS os eletrônicos:
SELECT AVG(preco) FROM produtos WHERE categoria = 'eletrônicos';

-- Agregação por categoria (uma linha por categoria):
SELECT categoria, AVG(preco)
FROM produtos
GROUP BY categoria;</code></pre>

<h2>STRING_AGG / GROUP_CONCAT: juntar textos</h2>
<pre><code>-- Postgres:
SELECT categoria, STRING_AGG(nome, ', ' ORDER BY nome)
FROM produtos GROUP BY categoria;

-- MySQL:
SELECT categoria, GROUP_CONCAT(nome ORDER BY nome SEPARATOR ', ')
FROM produtos GROUP BY categoria;</code></pre>
`
        },
        {
          id: 'sql-group-by',
          title: '3. GROUP BY',
          summary: 'Agrupando linhas por categoria.',
          content: `
<h2>Agrupamento</h2>
<pre><code>-- Vendas por vendedor:
SELECT vendedor_id, SUM(valor) AS total_vendido
FROM vendas
GROUP BY vendedor_id
ORDER BY total_vendido DESC;

-- Clientes por cidade:
SELECT cidade, COUNT(*) AS clientes
FROM usuarios
GROUP BY cidade;

-- Múltiplas dimensões:
SELECT categoria, MONTH(data) AS mes, SUM(valor) AS total
FROM vendas
GROUP BY categoria, MONTH(data);</code></pre>

<h2>A regra de ouro</h2>
<p>Quando você tem <code>GROUP BY</code>, <strong>toda coluna no SELECT deve ser:</strong></p>
<ul>
  <li>uma coluna do GROUP BY, <strong>OU</strong></li>
  <li>envolvida por uma função agregada (SUM, COUNT, ...).</li>
</ul>
<pre><code>-- ❌ nome não está no GROUP BY nem em agregação:
SELECT categoria, nome, COUNT(*) FROM produtos GROUP BY categoria;

-- ✅ correto:
SELECT categoria, COUNT(*) FROM produtos GROUP BY categoria;</code></pre>
`
        },
        {
          id: 'sql-having',
          title: '4. HAVING',
          summary: 'Filtrar grupos (depois da agregação).',
          content: `
<h2>WHERE vs HAVING</h2>
<pre><code>-- WHERE filtra LINHAS antes de agregar.
-- HAVING filtra GRUPOS depois de agregar.

-- Categorias com ticket médio acima de 200:
SELECT categoria, AVG(preco) AS ticket
FROM produtos
GROUP BY categoria
HAVING AVG(preco) &gt; 200;

-- Cidades com mais de 100 clientes:
SELECT cidade, COUNT(*) AS clientes
FROM usuarios
GROUP BY cidade
HAVING COUNT(*) &gt; 100;</code></pre>

<h2>Combinando WHERE + HAVING</h2>
<pre><code>SELECT vendedor_id, COUNT(*) AS vendas, SUM(valor) AS total
FROM vendas
WHERE data &gt;= '2026-01-01'   -- só vendas de 2026
GROUP BY vendedor_id
HAVING SUM(valor) &gt; 10000;    -- que venderam mais de 10k</code></pre>

<div class="callout callout-tip">
Lembre da ordem de execução: <code>WHERE</code> roda <em>antes</em> do GROUP BY (filtra linhas), <code>HAVING</code> roda <em>depois</em> (filtra grupos já calculados). Por isso HAVING pode usar agregações e WHERE não.
</div>
`
        }
      ]
    },
    {
      id: 'sql-joins',
      title: 'JOINs',
      description: 'Combinando tabelas relacionadas.',
      lessons: [
        {
          id: 'sql-join-intro',
          title: '1. Relações e Chaves',
          summary: 'PK, FK e como tabelas se conectam.',
          content: `
<h2>O coração do relacional</h2>
<pre><code>clientes                          pedidos
┌────┬──────┐                    ┌────┬────────────┬────────┐
│ id │ nome │                    │ id │ cliente_id │ valor  │
├────┼──────┤                    ├────┼────────────┼────────┤
│  1 │ Ana  │◄───────────────────│101 │     1      │  150   │
│  2 │ Bia  │◄───────────────────│102 │     1      │  200   │
└────┴──────┘   chave estrangeira│103 │     2      │   90   │
                 (FK) aponta     └────┴────────────┴────────┘
                 para a PK</code></pre>

<h2>Chave primária (PK)</h2>
<ul>
  <li>Identifica <strong>unicamente</strong> cada linha.</li>
  <li>Não pode ser NULL nem se repetir.</li>
  <li>Uma por tabela.</li>
</ul>

<h2>Chave estrangeira (FK)</h2>
<ul>
  <li>Aponta para a PK de outra tabela — cria a <strong>relação</strong>.</li>
  <li>Garante integridade: não dá pra inserir pedido com <code>cliente_id</code> inexistente.</li>
</ul>

<h2>Declarando FK</h2>
<pre><code>CREATE TABLE pedidos (
  id          SERIAL PRIMARY KEY,
  cliente_id  INTEGER NOT NULL REFERENCES clientes(id),
  valor       DECIMAL(10,2),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);</code></pre>
`
        },
        {
          id: 'sql-inner-join',
          title: '2. INNER JOIN',
          summary: 'Só registros que casam nas duas tabelas.',
          content: `
<h2>O JOIN mais comum</h2>
<pre><code>SELECT p.id, c.nome, p.valor
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id;
-- Só aparecem pedidos cujo cliente existe (e vice-versa).</code></pre>

<h2>Apelidos (aliases) de tabela</h2>
<pre><code>-- c, p: reduz a verbosidade. Convenção: 1-3 letras.
SELECT c.nome, p.valor
FROM clientes AS c
JOIN pedidos   AS p ON p.cliente_id = c.id;</code></pre>

<h2>JOIN com três tabelas</h2>
<pre><code>SELECT c.nome, p.valor, pr.nome AS produto
FROM pedidos p
JOIN clientes  c  ON p.cliente_id = c.id
JOIN itens     i  ON i.pedido_id  = p.id
JOIN produtos  pr ON i.produto_id = pr.id;</code></pre>

<h2>USING: quando a coluna tem o mesmo nome</h2>
<pre><code>SELECT * FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.id;
-- Equivalente (mesmo nome de coluna):
SELECT * FROM pedidos JOIN clientes USING (cliente_id);</code></pre>
`
        },
        {
          id: 'sql-left-join',
          title: '3. LEFT, RIGHT e FULL JOIN',
          summary: 'Mantendo lados mesmo sem correspondência.',
          content: `
<h2>LEFT JOIN: TODOS da esquerda</h2>
<pre><code>-- Todos os clientes, tenham ou não pedidos:
SELECT c.nome, COUNT(p.id) AS total_pedidos
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.nome;

-- Clientes SEM pedidos (NULL no lado direito):
SELECT c.nome FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
WHERE p.id IS NULL;</code></pre>

<h2>RIGHT JOIN: todos da direita</h2>
<pre><code>-- Pedidos mesmo de clientes deletados (raro — geralmente vira LEFT trocando a ordem):
SELECT * FROM pedidos p
RIGHT JOIN clientes c ON p.cliente_id = c.id;</code></pre>

<h2>FULL OUTER JOIN: todos dos dois lados</h2>
<pre><code>-- Tudo que existe em qualquer lado (casamento ou não):
SELECT c.nome, p.valor
FROM clientes c
FULL OUTER JOIN pedidos p ON p.cliente_id = c.id;</code></pre>

<h2>CROSS JOIN: produto cartesiano</h2>
<pre><code>-- Combina cada linha com cada (tabela × tabela):
SELECT s.nome, c.nome
FROM alunos s
CROSS JOIN cursos c;   -- todas as combinações possíveis</code></pre>

<div class="callout callout-tip">
<strong>Use LEFT JOIN para "encontrar o que falta":</strong> <code>LEFT JOIN ... WHERE p.id IS NULL</code> é o padrão universal para "clientes sem pedido", "produtos sem venda", "alunos sem matrícula".
</div>
`
        },
        {
          id: 'sql-join-multiplo',
          title: '4. Self-Join e JOINs Avançados',
          summary: 'Tabelas relacionadas consigo mesmas.',
          content: `
<h2>Self-join: a tabela encontra a si mesma</h2>
<pre><code>-- Funcionário e seu gerente (na mesma tabela):
SELECT f.nome AS funcionario, g.nome AS gerente
FROM funcionarios f
JOIN funcionarios g ON f.gerente_id = g.id;

-- Amizades recíprocas:
SELECT a.nome AS amigo1, b.nome AS amigo2
FROM usuarios a
JOIN amizades   am ON am.usuario_id = a.id
JOIN usuarios   b  ON am.amigo_id   = b.id;</code></pre>

<h2> JOIN com agregação: relatórios completos</h2>
<pre><code>SELECT c.nome,
       COUNT(p.id)         AS qtd_pedidos,
       COALESCE(SUM(p.valor), 0) AS total_gasto,
       MAX(p.data)         AS ultima_compra
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
ORDER BY total_gasto DESC;</code></pre>

<h2>COALESCE: substituindo NULL</h2>
<pre><code>-- Sem pedidos → SUM retorna NULL. COALESCE troca por 0:
SELECT c.nome, COALESCE(SUM(p.valor), 0) AS total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.nome;
-- Agora todo cliente tem um número, não "NULL".</code></pre>
`
        }
      ]
    },
    {
      id: 'sql-crud-modelagem',
      title: 'CRUD e Modelagem',
      description: 'INSERT, UPDATE, DELETE e boas práticas.',
      lessons: [
        {
          id: 'sql-insert',
          title: '1. INSERT',
          summary: 'Inserindo dados.',
          content: `
<h2>Inserindo uma linha</h2>
<pre><code>INSERT INTO produtos (nome, preco, estoque)
VALUES ('Teclado', 199.90, 15);</code></pre>

<h2>Múltiplas linhas de uma vez</h2>
<pre><code>INSERT INTO produtos (nome, preco, estoque) VALUES
  ('Mouse',     89.90,  20),
  ('Monitor',  899.00,   3),
  ('Webcam',   149.00,  10);</code></pre>

<h2>INSERT com RETURNING (Postgres)</h2>
<pre><code>-- Receba de volta o id gerado (auto-incremento):
INSERT INTO usuarios (nome, email)
VALUES ('Ana', 'ana@x.dev')
RETURNING id, nome, criado_em;</code></pre>

<h2>INSERT FROM SELECT</h2>
<pre><code>-- Popular uma tabela a partir de outra:
INSERT INTO clientes_vip (nome, email)
SELECT nome, email FROM clientes
WHERE total_gasto &gt; 5000;</code></pre>

<h2>Omitindo colunas</h2>
<pre><code>-- Colunas com DEFAULT ou NULLable podem ser omitidas:
INSERT INTO produtos (nome, preco) VALUES ('Cadeira', 450);
-- estoque recebe 0 (DEFAULT), ativo recebe TRUE.</code></pre>
`
        },
        {
          id: 'sql-update',
          title: '2. UPDATE',
          summary: 'Atualizando dados (com WHERE sempre!).',
          content: `
<h2>A sintaxe</h2>
<pre><code>UPDATE produtos
SET preco = 179.90, estoque = estoque - 1
WHERE id = 42;

-- SEM WHERE = TODAS as linhas recebem o novo valor 😱
-- (sempre rode SELECT antes para conferir o alvo!)</code></pre>

<h2>Update com cálculo e condição</h2>
<pre><code>-- Aumento de 10% só para eletrônicos:
UPDATE produtos
SET preco = preco * 1.10
WHERE categoria = 'eletrônicos';

-- Atualizar com base em outra tabela:
UPDATE pedidos p
SET status = 'enviado'
FROM transportadoras t
WHERE p.transportadora_id = t.id
  AND t.nome = 'Sedex';</code></pre>

<h2>Update com CASE</h2>
<pre><code>UPDATE produtos
SET preco = CASE
  WHEN categoria = 'livros'   THEN preco * 1.05
  WHEN categoria = 'eletrônicos' THEN preco * 1.10
  ELSE preco
END;</code></pre>

<div class="callout callout-warning">
<strong>Disciplina:</strong> antes de qualquer UPDATE/DELETE em produção, rode um <code>SELECT ... WHERE &lt;mesma condição&gt;</code> e confira as linhas que serão afetadas. E sempre tenha backup.
</div>
`
        },
        {
          id: 'sql-delete',
          title: '3. DELETE e TRUNCATE',
          summary: 'Removendo dados com segurança.',
          content: `
<h2>DELETE: remove linhas seletivamente</h2>
<pre><code>DELETE FROM pedidos WHERE status = 'cancelado' AND data &lt; '2025-01-01';

-- SEM WHERE = apaga TODAS as linhas (mas mantém a estrutura).</code></pre>

<h2>DELETE com JOIN</h2>
<pre><code>-- Postgres (USING):
DELETE FROM pedidos
USING clientes
WHERE pedidos.cliente_id = clientes.id
  AND clientes.ativo = FALSE;

-- MySQL:
DELETE p FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id
WHERE c.ativo = FALSE;</code></pre>

<h2>Soft delete: marcar em vez de apagar</h2>
<pre><code>-- Em vez de DELETE, preserve auditoria:
UPDATE usuarios SET deletado_em = NOW(), ativo = FALSE
WHERE id = 42;
-- Suas queries usam WHERE ativo = TRUE AND deletado_em IS NULL.</code></pre>

<h2>TRUNCATE: zera a tabela inteira</h2>
<pre><code>TRUNCATE TABLE logs;            -- muito mais rápido que DELETE *
TRUNCATE TABLE logs RESTART IDENTITY;  -- zera SERIAL também
-- Não dispara triggers, não é transacional em todos os bancos.</code></pre>
`
        },
        {
          id: 'sql-constraints',
          title: '4. Constraints e Integridade',
          summary: 'NOT NULL, UNIQUE, CHECK e FK.',
          content: `
<h2>Restrições que protegem os dados</h2>
<pre><code>CREATE TABLE usuarios (
  id       SERIAL PRIMARY KEY,
  email    VARCHAR(255) UNIQUE NOT NULL,    -- único + obrigatório
  idade    INTEGER CHECK (idade &gt;= 0 AND idade &lt; 130),
  senha    VARCHAR(60) NOT NULL,
  pais     VARCHAR(2)  DEFAULT 'BR',
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pedidos (
  id          SERIAL PRIMARY KEY,
  cliente_id  INTEGER NOT NULL REFERENCES usuarios(id)
              ON DELETE CASCADE             -- apaga pedidos ao apagar cliente
              ON UPDATE CASCADE,            -- atualiza FK se PK mudar
  valor       DECIMAL(10,2) CHECK (valor &gt; 0)
);</code></pre>

<h2>Adicionando constraint depois</h2>
<pre><code>ALTER TABLE usuarios ADD CONSTRAINT email_unico UNIQUE (email);
ALTER TABLE produtos ADD CHECK (preco &gt;= 0);
ALTER TABLE pedidos ADD FOREIGN KEY (cliente_id) REFERENCES usuarios(id);</code></pre>

<h2>Tipos de FK ao deletar</h2>
<ul>
  <li><code>CASCADE</code> — apaga em cascata (filhos somem junto).</li>
  <li><code>SET NULL</code> — FK vira NULL (se permitido).</li>
  <li><code>RESTRICT</code> — proíbe a deleção do pai.</li>
  <li><code>SET DEFAULT</code> — volta ao valor padrão.</li>
</ul>
`
        },
        {
          id: 'sql-indices',
          title: '5. Índices',
          summary: 'Acelerando consultas sem mudar a lógica.',
          content: `
<h2>Por que índices</h2>
<p>Sem índice, o banco lê a tabela inteira (full scan) para achar algo — lento em milhões de linhas. Um índice é como o índice de um livro: vai direto ao ponto.</p>
<pre><code>CREATE INDEX idx_produtos_categoria ON produtos(categoria);
CREATE INDEX idx_pedidos_data ON pedidos(data DESC);
CREATE UNIQUE INDEX idx_usuarios_email ON usuarios(email);</code></pre>

<h2>Quando criar</h2>
<ul>
  <li>Colunas usadas em <code>WHERE</code> frequente.</li>
  <li>Colunas de <code>JOIN</code> (as FKs merecem índice!).</li>
  <li>Colunas de <code>ORDER BY</code>.</li>
</ul>

<h2>Índice composto: ordem importa</h2>
<pre><code>-- Útil para filtros combinados:
CREATE INDEX idx_pedidos ON pedidos(cliente_id, data);
-- Acelera: WHERE cliente_id = 1 AND data &gt; '2026-01-01'
-- E também: WHERE cliente_id = 1 (prefixo)
-- Mas NÃO: WHERE data &gt; '2026-01-01' (data está depois)</code></pre>

<h2>Cuidados</h2>
<ul>
  <li>Cada índice deixa INSERT/UPDATE/DELETE mais lentos (índice precisa ser atualizado).</li>
  <li>Não indexe colunas com baixa seletividade (booleano, sexo).</li>
  <li>Use <code>EXPLAIN</code> para ver se o índice está sendo usado.</li>
</ul>

<h2>EXPLAIN: a lente de aumento</h2>
<pre><code>EXPLAIN SELECT * FROM pedidos WHERE cliente_id = 1;
-- Seq Scan = leu tudo (lento). Index Scan = usou índice (rápido).
EXPLAIN ANALYZE SELECT ...;   -- executa de verdade e mostra tempo</code></pre>
`
        }
      ]
    },
    {
      id: 'sql-avancado',
      title: 'Consultas Avançadas',
      description: 'Subconsultas, CTEs, window functions e EXISTS.',
      lessons: [
        {
          id: 'sql-subqueries',
          title: '1. Subconsultas',
          summary: 'Query dentro de query.',
          content: `
<h2>Subquery escalar (um valor)</h2>
<pre><code>-- Produtos acima da média de preço:
SELECT nome, preco FROM produtos
WHERE preco &gt; (SELECT AVG(preco) FROM produtos);

-- Pedido com valor máximo:
SELECT * FROM pedidos
WHERE valor = (SELECT MAX(valor) FROM pedidos);</code></pre>

<h2>Subquery com IN</h2>
<pre><code>-- Clientes que já fizeram pedidos:
SELECT * FROM clientes
WHERE id IN (SELECT DISTINCT cliente_id FROM pedidos);

-- Clientes SEM pedidos:
SELECT * FROM clientes
WHERE id NOT IN (SELECT cliente_id FROM pedidos WHERE cliente_id IS NOT NULL);</code></pre>

<h2>Subquery na cláusula FROM (tabela derivada)</h2>
<pre><code>SELECT c.cidade, c.media_cidade
FROM (
  SELECT cidade, AVG(idade) AS media_cidade
  FROM usuarios
  GROUP BY cidade
) c
WHERE c.media_cidade &gt; 30;</code></pre>

<h2>Subqueries correlacionadas</h2>
<pre><code>-- Para cada produto, mostra quantos pedidos o incluíram:
SELECT p.nome,
  (SELECT COUNT(*) FROM itens i WHERE i.produto_id = p.id) AS vezes_vendido
FROM produtos p;</code></pre>

<div class="callout callout-tip">
Subqueries correlacionadas rodam uma vez por linha — podem ser lentas. Em muitos casos, CTEs ou JOINs (próximas lições) são mais legíveis e performáticos.
</div>
`
        },
        {
          id: 'sql-cte',
          title: '2. CTEs (WITH)',
          summary: 'Consultas nomeadas e reutilizáveis.',
          content: `
<h2>Common Table Expressions</h2>
<pre><code>WITH vendas_2026 AS (
  SELECT cliente_id, SUM(valor) AS total
  FROM pedidos
  WHERE data &gt;= '2026-01-01'
  GROUP BY cliente_id
)
SELECT c.nome, v.total
FROM clientes c
JOIN vendas_2026 v ON v.cliente_id = c.id
ORDER BY v.total DESC;</code></pre>

<h2>Múltiplas CTEs encadeadas</h2>
<pre><code>WITH
  vip AS (
    SELECT cliente_id, SUM(valor) AS total
    FROM pedidos GROUP BY cliente_id
    HAVING SUM(valor) &gt; 5000
  ),
  ranking AS (
    SELECT cliente_id, RANK() OVER (ORDER BY total DESC) AS pos
    FROM vip
  )
SELECT c.nome, r.pos, v.total
FROM ranking r
JOIN vip     v ON v.cliente_id = r.cliente_id
JOIN clientes c ON c.id = r.cliente_id;</code></pre>

<h2>CTE recursiva: hierarquias</h2>
<pre><code>-- Estrutura de chefia: quem reporta a quem (até a raiz):
WITH RECURSIVE hierarquia AS (
  SELECT id, nome, gerente_id, 1 AS nivel
  FROM funcionarios WHERE gerente_id IS NULL
  UNION ALL
  SELECT f.id, f.nome, f.gerente_id, h.nivel + 1
  FROM funcionarios f
  JOIN hierarquia h ON f.gerente_id = h.id
)
SELECT * FROM hierarquia ORDER BY nivel, nome;</code></pre>
`
        },
        {
          id: 'sql-window-functions',
          title: '3. Window Functions',
          summary: 'Cálculos sobre janelas sem agrupar.',
          content: `
<h2>A diferença para GROUP BY</h2>
<p>Window functions calculam agregações <strong>mantendo cada linha</strong> — perfeitas para rankings, médias móveis e "top N por grupo":</p>
<pre><code>-- Número da linha dentro de cada categoria (ordenado por preço):
SELECT nome, categoria, preco,
       ROW_NUMBER() OVER (PARTITION BY categoria ORDER BY preco DESC) AS rank
FROM produtos;

-- O produto mais caro de cada categoria:
WITH ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY categoria ORDER BY preco DESC) AS r
  FROM produtos
)
SELECT * FROM ranked WHERE r = 1;</code></pre>

<h2>Funções de janela</h2>
<pre><code>ROW_NUMBER()    -- 1, 2, 3 (sem repetição)
RANK()          -- 1, 2, 2, 4 (empates repetem, pula o próximo)
DENSE_RANK()    -- 1, 2, 2, 3 (empates repetem, não pula)
LAG(preco, 1)   -- valor da linha ANTERIOR
LEAD(preco, 1)  -- valor da linha SEGUINTESUM(valor) OVER (ORDER BY data)  -- total acumulado
AVG(valor) OVER (ORDER BY data ROWS 6 PRECEDING)  -- média móvel 7 dias
FIRST_VALUE(nome) OVER (PARTITION BY cliente ORDER BY data)</code></pre>

<h2>Soma acumulada (running total)</h2>
<pre><code>SELECT data, valor,
       SUM(valor) OVER (ORDER BY data) AS acumulado
FROM vendas
ORDER BY data;</code></pre>
`
        },
        {
          id: 'sql-exists',
          title: '4. EXISTS e Consultas Correlacionadas',
          summary: 'Testar existência sem trazer dados.',
          content: `
<h2>EXISTS: existe ou não?</h2>
<pre><code>-- Clientes que têm pelo menos um pedido:
SELECT c.* FROM clientes c
WHERE EXISTS (
  SELECT 1 FROM pedidos p
  WHERE p.cliente_id = c.id
);

-- Clientes SEM pedidos (NOT EXISTS):
SELECT c.* FROM clientes c
WHERE NOT EXISTS (
  SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id
);</code></pre>

<h2>EXISTS vs IN</h2>
<pre><code>-- In: constrói a lista completa e testa pertinência:
WHERE id IN (SELECT cliente_id FROM pedidos)

-- Exists: para cada linha, roda a subquery e para no primeiro match:
WHERE EXISTS (SELECT 1 FROM pedidos WHERE cliente_id = c.id)</code></pre>
<p>Em geral <code>EXISTS</code> é mais rápido com subqueries grandes (para no primeiro true); <code>IN</code> é melhor com listas pequenas. O otimizador moderno costuma igualar os dois.</p>

<h2>SELECT 1: a convenção</h2>
<pre><code>-- Em EXISTS, o que vem no SELECT não importa:
SELECT 1 ...     -- convenção: leve
SELECT * ...     -- funciona igual, mas menos explícito</code></pre>
`
        }
      ]
    },
    {
      id: 'sql-transacoes',
      title: 'Transações e Segurança',
      description: 'ACID, views e proteção contra SQL injection.',
      lessons: [
        {
          id: 'sql-transacoes',
          title: '1. Transações e ACID',
          summary: 'Tudo ou nada: a base de dados confiáveis.',
          content: `
<h2>O problema</h2>
<p>Transferência bancária: debitar conta A e creditar conta B. Se cair a energia entre as duas operações, o dinheiro some. <strong>Transação</strong> garante que as duas aconteçam juntas — ou nenhuma.</p>

<pre><code>BEGIN;                                          -- inicia

UPDATE contas SET saldo = saldo - 100 WHERE id = 1;
UPDATE contas SET saldo = saldo + 100 WHERE id = 2;

COMMIT;                                          -- confirma tudo
-- ou ROLLBACK;                                  -- desfaz tudo</code></pre>

<h2>As 4 propriedades ACID</h2>
<ul>
  <li><strong>A</strong>tomicidade — tudo ou nada.</li>
  <li><strong>C</strong>onsistência — sai de um estado válido para outro válido.</li>
  <li><strong>I</strong>solamento — transações concorrentes não se atrapalham.</li>
  <li><strong>D</strong>urabilidade — depois de COMMIT, sobrevive a queda de energia.</li>
</ul>

<h2>Savepoints: rollback parcial</h2>
<pre><code>BEGIN;
INSERT INTO pedidos ...;
SAVEPOINT depois_pedido;
INSERT INTO itens ...;
-- deu erro nos itens:
ROLLBACK TO depois_pedido;   -- mantém o pedido, refaz itens
COMMIT;</code></pre>

<h2>Níveis de isolamento</h2>
<pre><code>SET TRANSACTION ISOLATION LEVEL READ COMMITTED;   -- padrão Postgres
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;       -- mais rígido (como se fosse uma fila)</code></pre>
`
        },
        {
          id: 'sql-views',
          title: '2. Views e Materialized Views',
          summary: 'Consultas salvas como tabelas virtuais.',
          content: `
<h2>VIEW: consulta nomeada</h2>
<pre><code>CREATE VIEW clientes_vip AS
SELECT c.id, c.nome, COUNT(p.id) AS pedidos, SUM(p.valor) AS total
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nome
HAVING SUM(p.valor) &gt; 5000;

-- Use como se fosse uma tabela:
SELECT * FROM clientes_vip ORDER BY total DESC;</code></pre>

<h2>Vantagens</h2>
<ul>
  <li><strong>Segurança:</strong> expor uma view sem colunas sensíveis (ex.: sem senha).</li>
  <li><strong>Reuso:</strong> query complexa vira uma "tabela" para toda a equipe.</li>
  <li><strong>Estabilidade:</strong> se as tabelas mudarem internamente, a view adapta.</li>
</ul>

<h2>MATERIALIZED VIEW: cache físico</h2>
<pre><code>CREATE MATERIALIZED VIEW relatorio_diario AS
SELECT data, COUNT(*) AS pedidos, SUM(valor) AS faturamento
FROM pedidos GROUP BY data;

-- É uma tabela real (rápida para ler), mas precisa ser atualizada:
REFRESH MATERIALIZED VIEW relatorio_diario;
REFRESH MATERIALIZED VIEW CONCURRENTLY relatorio_diario;  -- sem lock (Postgres)</code></pre>

<div class="callout callout-tip">
Use <strong>VIEW</strong> para abstrair consultas (sempre atuais); <strong>MATERIALIZED VIEW</strong> para relatórios pesados (custa caro computar, ok ter dado de algumas horas atrás).
</div>
`
        },
        {
          id: 'sql-injection',
          title: '3. SQL Injection e Parâmetros',
          summary: 'A vulnerabilidade nº 1 — e como evitá-la.',
          content: `
<h2>O ataque</h2>
<pre><code>-- Código vulnerable (concatenando string):
query = "SELECT * FROM usuarios WHERE email = '" + input + "'"

-- Usuário digita:
input = "ana@x.dev' OR '1'='1"
-- Resultado:
SELECT * FROM usuarios WHERE email = 'ana@x.dev' OR '1'='1'
-- '1'='1' é sempre verdadeiro → retorna TODOS os usuários 😱

-- Pior ainda:
input = "'; DROP TABLE usuarios; --"
-- Resultado: apaga a tabela inteira!</code></pre>

<h2>A defesa: prepared statements</h2>
<pre><code>-- NUNCA concatene. Use placeholders:
-- Node.js (pg):
const r = await client.query(
  'SELECT * FROM usuarios WHERE email = $1',
  [emailInput]    // parâmetro separado da string SQL
);

-- Python (psycopg):
cur.execute('SELECT * FROM usuarios WHERE email = %s', (emailInput,))

-- PHP (PDO):
$stmt = $pdo-&gt;prepare('SELECT * FROM usuarios WHERE email = ?');
$stmt-&gt;execute([$emailInput]);</code></pre>

<p>O banco trata o parâmetro como <strong>valor</strong>, nunca como código — impossível injetar.</p>

<h2>Outras defesas</h2>
<ul>
  <li>Princípio do menor privilégio: a conta do app não pode DROP/ALTER.</li>
  <li>Validação de entrada no backend (tipos, tamanhos, formatos).</li>
  <li>Logs de queries anômalas.</li>
  <li>ORMs (Prisma, SQLAlchemy) usam prepared statements por padrão.</li>
</ul>

<div class="callout callout-warning">
<strong>SQL injection é o bug mais antigo e ainda top-10 do OWASP.</strong> A boa notícia: a defesa é trivial — prepared statements. A regra é absoluta: <strong>nunca</strong> monte SQL com string concatenada de entrada do usuário.
</div>
`
        }
      ]
    }
  ]
};
