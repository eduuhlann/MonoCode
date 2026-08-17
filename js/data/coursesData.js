// MonoCode — Base de Dados de Cursos e Lições
// Plataforma completa para aprender programação.

export const COURSES_DATA = [

// --- JavaScript ---
{
  id: 'javascript',
  name: 'JavaScript',
  language: 'JavaScript',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'Aprenda a linguagem mais popular da web, desde tipos primitivos e DOM até closures, promises e arquitetura moderna.',
  description: 'Trilha completa cobrindo fundamentos da linguagem, manipulação do navegador, programação assíncrona moderna, orientação a objetos e tópicos avançados como Event Loop e Design Patterns.',
  tags: ['Web', 'Frontend', 'Backend', 'Fullstack'],
  modules: [
    {
      id: 'js-fundamentos',
      title: 'Fundamentos',
      description: 'Bases da linguagem, tipos, operadores, estruturas de controle e funções.',
      lessons: [
        { id: 'js-intro', title: '1. Introdução ao JavaScript', summary: 'O que é JavaScript e como funciona no navegador.', content: '<p>JavaScript é a linguagem da web.</p>' },
        { id: 'js-variaveis', title: '2. Variáveis e Tipos', summary: 'Tipos de dados primitivos e estruturados.', content: '<p>Primitivos: string, number, boolean, null, undefined, symbol, bigint.</p>' },
        { id: 'js-funcoes', title: '3. Funções', summary: 'Declaração, parâmetros e retorno.', content: '<p>function soma(a, b) { return a + b; }</p>' },
        { id: 'js-objetos', title: '4. Objetos e Arrays', summary: 'Criando e manipulando objetos e arrays.', content: '<p>const obj = { nome: "João" };</p>' },
        { id: 'this-palavra', title: '5. O This', summary: 'Contexto de execução e a palavra this.', content: '<p>this referencia o objeto que está executando o código.</p>' },
      ]
    },
    {
      id: 'js-dom',
      title: 'DOM e Eventos',
      description: 'Manipulação do HTML e CSS com JavaScript.',
      lessons: [
        { id: 'js-selecao', title: '1. Seleção de Elementos', summary: 'querySelector e getElementById.', content: '<p>document.querySelector(".btn")</p>' },
        { id: 'js-eventos', title: '2. Manipuladores de Eventos', summary: 'addEventListener e eventos mouse/keyboard.', content: '<p>btn.addEventListener("click", fn)</p>' },
        { id: 'js-eventos-teclado', title: '3. Eventos de Teclado', summary: 'keyup, keydown, keypress.', content: '<p>window.addEventListener("keyup", fn)</p>' },
        { id: 'js-dom-atualizacao', title: '4. Atualizando o DOM', summary: 'innerHTML, textContent, createElement.', content: '<p>element.innerHTML = "<p>Novo</p>"</p>' },
        { id: 'js-eventos-formularios', title: '5. Formulários', summary: 'Envio e validação de formulários.', content: '<p>form.addEventListener("submit", fn)</p>' },
      ]
    },
    {
      id: 'js-assincronismo',
      title: 'Assíncronia e Promises',
      description: 'Programação assíncrona, promises e async/await.',
      lessons: [
        { id: 'js-promesas', title: '1. O que são Promises', summary: 'Estado: pending, resolved, rejected.', content: '<p>Uma promise tem três estados.</p>' },
        { id: 'js-resolved', title: '2. Consumindo Promises', summary: '.then() e .catch().', content: '<p>promise.then(fn)</p>' },
        { id: 'js-all', title: '3. Promise.all', summary: 'Executar várias promises simultaneamente.', content: '<p>Promise.all([p1, p2])</p>' },
        { id: 'js-async-await', title: '3. Async/Await', summary: 'Sintaxe assíncrona moderna.', content: '<p>async function rodar() { await fn() </p>' },
        { id: 'js-erros', title: '4. Tratamento de Erros', summary: 'try/catch e promise rejection.', content: '<p>try { await fn() } catch(e) {}</p>' },
      ]
    },
    {
      id: 'js-arrays',
      title: 'Array Methods Avançados',
      description: 'Métodos úteis para manipulação de arrays.',
      lessons: [
        { id: 'js-for-each', title: '1. forEach', summary: 'Iteração sobre arrays.', content: '[1,2,3].forEach(fn)' },
        { id: 'js-map', title: '2. map', summary: 'Criar novo array transformando cada elemento.', content: '[1,2,3].map(x => x * 2)' },
        { id: 'js-filter', title: '3. filter', summary: 'Filtrar elementos baseado em condição.', content: '[1,2,3].filter(x => x > 1)' },
        { id: 'js-reduce', title: '3. reduce', summary: 'Reduzir array a um único valor.', content: '[1,2,3].reduce((a,b) => a+b, 0)' },
        { id: 'js-every-some', title: '4. every e some', summary: 'Verificação condicional em arrays.', content: '[1,2,3].every(x => x > 0)' },
      ]
    },
    {
      id: 'js-classe',
      title: 'Programação Orientada a Objetos',
      description: 'Classes, herança e polimorfismo em JavaScript.',
      lessons: [
        { id: 'js-class-syntax', title: '1. Sintaxe de Classe', summary: 'class e construtor.', content: '<p>class Pessoa { constructor(nome) { this.nome = nome; } </p>' },
        { id: 'js-extends', title: '2. Herança (extends)', summary: 'Herança entre classes.', content: '<p>class Aluno extends Pessoa {}</p>' },
        { id: 'js-super', title: '3. super()', summary: 'Chamar construtor da classe pai.', content: '<p>super.nome = nome</p>' },
        { id: 'js-getters-setters', title: '4. Getters e Setters', summary: 'Acesso controlado a propriedades.', content: '<p>get nome() { return this._nome; }</p>' },
        { id: 'js-static', title: '5. Métodos Estáticos', summary: 'Métodos que pertencem à classe, não instância.', content: '<p>Pessoa.ola() { return "Olá"; }</p>' },
      ]
    },
  ]
},
// --- Python ---
{
  id: 'python',
  name: 'Python',
  language: 'Python',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'Linguagem de alta nível, poderosa e fácil de aprender, usada em IA, automação e dados.',
  description: 'Trilha completa cobrindo sintaxe básica, estruturas de dados, orientação a objetos, decoradores eprogramação científica com NumPy e Pandas.',
  tags: ['Ciência de Dados', 'Automação', 'IA', 'Backend'],
  modules: [
    {
      id: 'py-fundamentos',
      title: 'Fundamentos',
      description: 'Sintaxe básica, tipos de dados e operadores.',
      lessons: [
        { id: 'py-intro', title: '1. Introdução ao Python', summary: 'O que é Python e instalação.', content: '<p>Python é uma linguagem interpretada.</p>' },
        { id: 'py-variaveis', title: '2. Variáveis e Tipos', summary: 'Inteiros, floats, strings, booleans.', content: '<p>x = 10</p>' },
        { id: 'py-operadores', title: '3. Operadores Aritméticos', summary: 'Soma, subtração, multiplicação, divisão.', content: '<p>x = 5 + 3</p>' },
        { id: 'py-if-else', title: '4. Estruturas Condicionais', summary: 'if, elif e else.', content: '<p>if x > 0: ...</p>' },
        { id: 'py-laços', title: '5. Laços de Repetição', summary: 'for e while.', content: '<p>for i in range(5): ...</p>' },
      ]
    },
    {
      id: 'py-funcoes',
      title: 'Funções',
      description: 'Definição de funções, parâmetros, retornos e escopo.',
      lessons: [
        { id: 'py-def', title: '1. Funções Básicas', summary: 'def nome(parametros): return valor.', content: '<p>def soma(a, b): return a + b</p>' },
        { id: 'py-parâmetros', title: '2. Parâmetros Opcionais', summary: 'Parametros com valor padrão.', content: '<p>def soma(a, b=0): return a + b</p>' },
        { id: 'py-args-kwargs', title: '3. *args e **kwargs', summary: 'Número variável de argumentos.', content: '<p>def fn(*args, **kwargs): ...</p>' },
        { id: 'py-lambda', title: '4. Funções Lambda', summary: 'Funções anônimas de uma linha.', content: '<p>fn = lambda x: x + 1</p>' },
      ]
    },
    {
      id: 'py-orientacao-objetos',
      title: 'Orientação a Objetos',
      description: 'Classes, herança, polimorfismo e encapsulamento.',
      lessons: [
        { id: 'py-classes', title: '1. Classes Python', summary: 'class Nome: ...', content: '<p>class Pessoa: ...</p>' },
        { id: 'py-heranca', title: '2. Herança', summary: 'Herança de classes.', content: '<p>class Filha(Pai): ...</p>' },
        { id: 'polimorfismo', title: '3. Polimorfismo', summary: 'Mesmo método, comportamentos diferentes.', content: '<p>...</p>' },
        { id: 'encapsulamento', title: '4. Encapsulamento', summary: 'Privacidade com _ e propriedades.', content: '<p>@property</p>' },
      ]
    },
    {
      id: 'py-bibliotecas',
      title: 'Bibliotecas Populares',
      description: 'NumPy, Pandas, Matplotlib e Automação.',
      lessons: [
        { id: 'py-numpy', title: '1. NumPy Básico', summary: 'Vetores e matrizes.', content: '<p>import numpy as np</p>' },
        { id: 'py-pandas', title: '2. Pandas DataFrame', summary: 'Tabelas e análise de dados.', content: '<p>df = pd.read_csv(...)</p>' },
        { id: 'py-matplotlib', title: '3. Matplotlib Graficos', summary: 'Gráficos simples.', content: '<p>plt.plot([1,2,3])</p>' },
        { id: 'py-automacao', title: '4. Automação de Tarefas', summary: 'Automatizar tarefas repetitivas.', content: '<p>pyautogui</p>' },
      ]
    },
  ]
},
// --- HTML ---
{
  id: 'html',
  name: 'HTML5',
  language: 'HTML',
  level: 'Iniciante',
  levelTag: 'iniciante',
  shortDesc: 'Estrutura a base de toda página web: semântica, formulários, mídia, tabelas e acessibilidade com HTML5.',
  description: 'Trilha completa de HTML5 cobrindo a estrutura de documentos, semântica moderna, links, mídia, tabelas, formulários avançados e boas práticas de acessibilidade e SEO.',
  tags: ['Web', 'Frontend', 'Markup', 'Acessibilidade'],
  modules: [
    {
      id: 'html-fundamentos',
      title: 'Fundamentos do HTML',
      description: 'Estrutura básica de um documento e as primeiras tags.',
      lessons: [
        { id: 'html-intro', title: '1. O que é HTML', summary: 'Linguagem de marcação que estrutura a web.', content: '<p>HTML (HyperText Markup Language) não é uma linguagem de programação: é uma linguagem de marcação que descreve a estrutura do conteúdo.</p>' },
        { id: 'html-estrutura', title: '2. Estrutura de um Documento', summary: 'doctype, html, head e body.', content: '<p>Todo documento HTML começa com <code>&lt;!DOCTYPE html&gt;</code> seguido de <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> e <code>&lt;body&gt;</code>.</p>' },
        { id: 'html-head', title: '3. O Head e Metadados', summary: 'title, meta, link e o que vai no head.', content: '<p>O <code>&lt;head&gt;</code> guarda metadados como <code>&lt;title&gt;</code>, <code>&lt;meta charset&gt;</code> e o link para o CSS.</p>' },
        { id: 'html-texto', title: '4. Títulos e Parágrafos', summary: 'h1-h6, p, br e hr.', content: '<p>Títulos usam <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>. Parágrafos usam <code>&lt;p&gt;</code>.</p>' },
        { id: 'html-comentarios', title: '5. Comentários', summary: 'Documentar o código sem exibir no navegador.', content: '<p>Comentários em HTML usam <code>&lt;!-- texto --&gt;</code>.</p>' },
      ]
    },
    {
      id: 'html-texto-links',
      title: 'Formatação, Listas e Links',
      description: 'Enriquecendo o conteúdo com ênfase, listas e navegação.',
      lessons: [
        { id: 'html-formatacao', title: '1. Formatação de Texto', summary: 'strong, em, mark, del e sub.', content: '<p><code>&lt;strong&gt;</code> para importância, <code>&lt;em&gt;</code> para ênfase e <code>&lt;mark&gt;</code> para destaque.</p>' },
        { id: 'html-listas', title: '2. Listas Ordenadas e Não Ordenadas', summary: 'ul, ol e li.', content: '<p>Listas não ordenadas usam <code>&lt;ul&gt;</code> e ordenadas usam <code>&lt;ol&gt;</code>.</p>' },
        { id: 'html-links', title: '3. Links e Âncoras', summary: 'A tag a com href e target.', content: '<p><code>&lt;a href="https://..." target="_blank"&gt;Texto&lt;/a&gt;</code> cria links.</p>' },
        { id: 'html-imagens', title: '4. Imagens e Atributos', summary: 'img, src, alt e title.', content: '<p><code>&lt;img src="foto.jpg" alt="Descrição"&gt;</code>. O atributo <code>alt</code> é essencial para acessibilidade.</p>' },
        { id: 'html-citacoes', title: '5. Citações e Código', summary: 'blockquote, q, code e pre.', content: '<p><code>&lt;blockquote&gt;</code> para citações longas e <code>&lt;code&gt;</code> para trechos de código.</p>' },
      ]
    },
    {
      id: 'html-midia',
      title: 'Mídia e Recursos',
      description: 'Áudio, vídeo, iframes e recursos externos.',
      lessons: [
        { id: 'html-video', title: '1. Vídeo', summary: 'A tag video com source e controls.', content: '<p><code>&lt;video src="clip.mp4" controls&gt;&lt;/video&gt;</code> incorpora vídeo.</p>' },
        { id: 'html-audio', title: '2. Áudio', summary: 'A tag audio e seus atributos.', content: '<p><code>&lt;audio src="musica.mp3" controls&gt;&lt;/audio&gt;</code> incorpora áudio.</p>' },
        { id: 'html-iframe', title: '3. Iframes', summary: 'Embarcar outras páginas.', content: '<p><code>&lt;iframe src="https://..."&gt;&lt;/iframe&gt;</code> embarca conteúdo externo.</p>' },
        { id: 'html-svg', title: '4. SVG Inline', summary: 'Gráficos vetoriais direto no HTML.', content: '<p>SVG inline permite gráficos vetoriais escaláveis sem arquivo externo.</p>' },
      ]
    },
    {
      id: 'html-tabelas-formularios',
      title: 'Tabelas e Formulários',
      description: 'Dados tabulares e captura de entrada do usuário.',
      lessons: [
        { id: 'html-tabelas', title: '1. Tabelas', summary: 'table, tr, th e td.', content: '<p>Tabelas usam <code>&lt;table&gt;</code> com linhas <code>&lt;tr&gt;</code> e células <code>&lt;td&gt;</code>/<code>&lt;th&gt;</code>.</p>' },
        { id: 'html-formularios', title: '2. Formulários', summary: 'form, action e method.', content: '<p><code>&lt;form action="/enviar" method="post"&gt;</code> define um formulário.</p>' },
        { id: 'html-inputs', title: '3. Inputs', summary: 'text, email, password, number e mais.', content: '<p><code>&lt;input type="email"&gt;</code> valida e-mail automaticamente no navegador.</p>' },
        { id: 'html-select-textarea', title: '4. Select e Textarea', summary: 'Menus suspensos e áreas de texto.', content: '<p><code>&lt;select&gt;</code> cria menus e <code>&lt;textarea&gt;</code> áreas de texto multilinha.</p>' },
        { id: 'html-validacao', title: '5. Validação Nativa', summary: 'required, pattern e minlength.', content: '<p>Atributos como <code>required</code> e <code>pattern</code> validam entrada sem JavaScript.</p>' },
      ]
    },
    {
      id: 'html-semantica',
      title: 'Semântica e Acessibilidade',
      description: 'Tags significativas, SEO e ARIA.',
      lessons: [
        { id: 'html-semantic-tags', title: '1. Tags Semânticas', summary: 'header, main, section, article e footer.', content: '<p>Tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> e <code>&lt;footer&gt;</code> dão significado ao conteúdo.</p>' },
        { id: 'html-nav', title: '2. Navegação', summary: 'A tag nav.', content: '<p>Menus de navegação usam <code>&lt;nav&gt;</code>.</p>' },
        { id: 'html-acessibilidade', title: '3. Acessibilidade', summary: 'aria-label, role e alt.', content: '<p>Atributos ARIA como <code>aria-label</code> ajudam leitores de tela.</p>' },
        { id: 'html-seo', title: '4. SEO Básico', summary: 'Meta tags e hierarquia de títulos.', content: '<p>Uma hierarquia correta de <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> melhora o SEO.</p>' },
      ]
    },
  ]
},
// --- CSS ---
{
  id: 'css',
  name: 'CSS3',
  language: 'CSS',
  level: 'Iniciante a Intermediário',
  levelTag: 'iniciante',
  shortDesc: 'Estilize a web: seletores, box model, Flexbox, Grid, animações e layouts responsivos modernos.',
  description: 'Trilha completa de CSS3 cobrindo seletores, cores, tipografia, box model, posicionamento, Flexbox, Grid, responsividade, transições e animações.',
  tags: ['Web', 'Frontend', 'Design', 'Responsivo'],
  modules: [
    {
      id: 'css-fundamentos',
      title: 'Fundamentos do CSS',
      description: 'Como o CSS funciona e as primeiras propriedades.',
      lessons: [
        { id: 'css-intro', title: '1. O que é CSS', summary: 'Folhas de estilo em cascata.', content: '<p>CSS (Cascading Style Sheets) define a apresentação do HTML: cores, espaçamentos, fontes e layout.</p>' },
        { id: 'css-seletores', title: '2. Seletores', summary: 'Tipo, classe, id e atributo.', content: '<p>Seletores de tipo (<code>p</code>), classe (<code>.btn</code>) e id (<code>#menu</code>).</p>' },
        { id: 'css-box-model', title: '3. Box Model', summary: 'Content, padding, border e margin.', content: '<p>Todo elemento é uma caixa com content, padding, border e margin.</p>' },
        { id: 'css-cores', title: '4. Cores', summary: 'Hex, rgb, hsl e variáveis.', content: '<p>Cores em <code>#hex</code>, <code>rgb()</code> ou <code>hsl()</code>.</p>' },
        { id: 'css-unidades', title: '5. Unidades de Medida', summary: 'px, em, rem, vh e vw.', content: '<p><code>rem</code> é relativo ao root e <code>em</code> ao elemento pai; <code>vh</code>/<code>vw</code> são relativos à viewport.</p>' },
      ]
    },
    {
      id: 'css-texto',
      title: 'Tipografia e Texto',
      description: 'Fontes, espaçamento e alinhamento.',
      lessons: [
        { id: 'css-fontes', title: '1. Fontes', summary: 'font-family, size e weight.', content: '<p><code>font-family</code> define a família e <code>font-size</code> o tamanho do texto.</p>' },
        { id: 'css-google-fonts', title: '2. Fontes Externas', summary: 'Google Fonts e @font-face.', content: '<p>Importe fontes externas com <code>@import</code> ou <code>@font-face</code>.</p>' },
        { id: 'css-texto-propriedades', title: '3. Propriedades de Texto', summary: 'line-height, letter-spacing e text-align.', content: '<p><code>line-height</code> controla a altura das linhas e <code>letter-spacing</code> o espaçamento entre letras.</p>' },
        { id: 'css-bordas-sombras', title: '4. Bordas e Sombras', summary: 'border, border-radius e box-shadow.', content: '<p><code>border-radius</code> arredonda cantos e <code>box-shadow</code> adiciona profundidade.</p>' },
      ]
    },
    {
      id: 'css-layout',
      title: 'Layout e Posicionamento',
      description: 'Display, position e Flexbox.',
      lessons: [
        { id: 'css-display', title: '1. Display', summary: 'block, inline e inline-block.', content: '<p><code>display: block</code> ocupa a linha toda; <code>inline</code> flui no texto.</p>' },
        { id: 'css-position', title: '2. Position', summary: 'relative, absolute, fixed e sticky.', content: '<p><code>position: relative</code> ancora elementos <code>absolute</code>; <code>fixed</code> fixa na viewport.</p>' },
        { id: 'css-flexbox', title: '3. Flexbox', summary: 'justify-content, align-items e flex-direction.', content: '<p>Flexbox distribui espaço em uma dimensão: <code>display: flex</code> no contêiner.</p>' },
        { id: 'css-grid', title: '4. CSS Grid', summary: 'grid-template-columns e grid-gap.', content: '<p>Grid trabalha em duas dimensões: <code>grid-template-columns: 1fr 1fr</code> cria colunas.</p>' },
      ]
    },
    {
      id: 'css-responsivo',
      title: 'Responsividade',
      description: 'Media queries e padrões mobile-first.',
      lessons: [
        { id: 'css-media-queries', title: '1. Media Queries', summary: 'Breakpoints com @media.', content: '<p><code>@media (max-width: 768px)</code> aplica regras em telas menores.</p>' },
        { id: 'css-mobile-first', title: '2. Mobile First', summary: 'Base para mobile, depois aprimora.', content: '<p>Escreva primeiro o CSS mobile e use <code>min-width</code> para telas maiores.</p>' },
        { id: 'css-unidades-flexiveis', title: '3. Unidades Flexíveis', summary: '%, fr, vh, vw e clamp().', content: '<p><code>clamp(min, ideal, max)</code> cria tipografia fluida.</p>' },
      ]
    },
    {
      id: 'css-animacoes',
      title: 'Transições e Animações',
      description: 'Movimento e interação visual.',
      lessons: [
        { id: 'css-transicoes', title: '1. Transições', summary: 'transition e ease.', content: '<p><code>transition: all 0.3s ease</code> anima mudanças de propriedade.</p>' },
        { id: 'css-keyframes', title: '2. Keyframes', summary: '@keyframes e animation.', content: '<p><code>@keyframes</code> define etapas de uma animação com <code>animation</code>.</p>' },
        { id: 'css-transform', title: '3. Transform', summary: 'translate, scale e rotate.', content: '<p><code>transform: translate(10px, 0)</code> move e <code>scale(1.1)</code> aumenta.</p>' },
        { id: 'css-hover', title: '4. Estados e Hover', summary: ':hover, :focus e :active.', content: '<p>Pseudo-classes como <code>:hover</code> reagem à interação do usuário.</p>' },
      ]
    },
  ]
},
// --- TypeScript ---
{
  id: 'typescript',
  name: 'TypeScript',
  language: 'TypeScript',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'JavaScript com tipos: interfaces, generics, classes e o compilador tsc para código mais seguro.',
  description: 'Trilha completa de TypeScript cobrindo tipos básicos, inferência, interfaces, classes, generics, utilitários de tipo, configuração do compilador e integração com projetos reais.',
  tags: ['Web', 'Frontend', 'Backend', 'Tipos'],
  modules: [
    {
      id: 'ts-fundamentos',
      title: 'Fundamentos e Tipos',
      description: 'Tipos básicos, inferência e anotações.',
      lessons: [
        { id: 'ts-intro', title: '1. O que é TypeScript', summary: 'Superset tipado do JavaScript.', content: '<p>TypeScript adiciona tipos estáticos ao JavaScript e compila para JS puro.</p>' },
        { id: 'ts-instalacao', title: '2. Instalação e tsc', summary: 'npm install e o compilador.', content: '<p>Instale com <code>npm install -g typescript</code> e compile com <code>tsc</code>.</p>' },
        { id: 'ts-tipos', title: '3. Tipos Básicos', summary: 'string, number, boolean e any.', content: '<p><code>let nome: string = "Ana"</code>; tipos incluem string, number, boolean e any.</p>' },
        { id: 'ts-inferencia', title: '4. Inferência de Tipos', summary: 'O TS descobre o tipo sozinho.', content: '<p>Quando não anotado, o TypeScript infere o tipo a partir do valor inicial.</p>' },
        { id: 'ts-arrays-tuplas', title: '5. Arrays e Tuplas', summary: 'number[] e [string, number].', content: '<p><code>number[]</code> é um array de números; tuplas têm tamanho e tipos fixos.</p>' },
      ]
    },
    {
      id: 'ts-interfaces',
      title: 'Interfaces e Types',
      description: 'Modelando dados com segurança.',
      lessons: [
        { id: 'ts-interface', title: '1. Interfaces', summary: 'Descrever a forma de um objeto.', content: '<p><code>interface Usuario { nome: string; idade: number }</code> define a forma de um objeto.</p>' },
        { id: 'ts-type-alias', title: '2. Type Aliases', summary: 'type para unir e apelidar.', content: '<p><code>type ID = string | number</code> cria aliases e uniões.</p>' },
        { id: 'ts-opcionais', title: '3. Propriedades Opcionais', summary: '? e valores padrão.', content: '<p><code>email?: string</code> marca a propriedade como opcional.</p>' },
        { id: 'ts-union-literal', title: '4. Union e Literal Types', summary: 'string | number e valores exatos.', content: '<p><code>type Status = "ativo" | "inativo"</code> restringe valores possíveis.</p>' },
      ]
    },
    {
      id: 'ts-funcoes-classes',
      title: 'Funções e Classes',
      description: 'Assinaturas, genéricos e orientação a objetos.',
      lessons: [
        { id: 'ts-funcoes', title: '1. Funções Tipadas', summary: 'Parâmetros e retorno.', content: '<p><code>function soma(a: number, b: number): number</code>.</p>' },
        { id: 'ts-generics', title: '2. Generics', summary: 'Funções e tipos reutilizáveis.', content: '<p><code>function identidade&lt;T&gt;(x: T): T</code> preserva o tipo do argumento.</p>' },
        { id: 'ts-classes', title: '3. Classes', summary: 'public, private e protected.', content: '<p><code>private</code> restringe acesso dentro da classe.</p>' },
        { id: 'ts-enum', title: '4. Enums', summary: 'Conjuntos nomeados de constantes.', content: '<p><code>enum Cor { Vermelho, Verde, Azul }</code>.</p>' },
      ]
    },
    {
      id: 'ts-avancado',
      title: 'TypeScript Avançado',
      description: 'Utilitários, narrowing e config.',
      lessons: [
        { id: 'ts-utility-types', title: '1. Utility Types', summary: 'Partial, Pick e Record.', content: '<p><code>Partial&lt;T&gt;</code> torna todas as propriedades opcionais.</p>' },
        { id: 'ts-narrowing', title: '2. Type Narrowing', summary: 'typeof, instanceof e in.', content: '<p><code>typeof x === "string"</code> estreita o tipo em blocos condicionais.</p>' },
        { id: 'ts-assertions', title: '3. Type Assertions', summary: 'as e operador !.', content: '<p><code>valor as string</code> informa ao TS um tipo que você já sabe.</p>' },
        { id: 'ts-tsconfig', title: '4. Configuração (tsconfig)', summary: 'strict, target e module.', content: '<p>Ative <code>strict: true</code> no tsconfig para checagens mais rígidas.</p>' },
      ]
    },
    {
      id: 'ts-na-pratica',
      title: 'TypeScript na Prática',
      description: 'Aplicações reais e integração.',
      lessons: [
        { id: 'ts-dom', title: '1. TypeScript no DOM', summary: 'Eventos e manipulação tipada.', content: '<p>Use <code>HTMLElement</code>, <code>Event</code> e <code>HTMLInputElement</code> nos listeners.</p>' },
        { id: 'ts-react', title: '2. TypeScript com React', summary: 'Props e hooks tipados.', content: '<p><code>interface Props { nome: string }</code> tipa as props dos componentes.</p>' },
        { id: 'ts-node', title: '3. TypeScript no Backend', summary: 'Node com tipagem segura.', content: '<p>Com <code>@types/node</code> o Node ganha tipagem completa.</p>' },
        { id: 'ts-migracao', title: '4. Migrando JavaScript', summary: 'Adicionar TS gradualmente.', content: '<p>Comece com <code>allowJs: true</code> e <code>checkJs: false</code> para migrar aos poucos.</p>' },
      ]
    },
  ]
},
// --- React Native ---
{
  id: 'react-native',
  name: 'React Native',
  language: 'React Native',
  level: 'Intermediário',
  levelTag: 'intermediario',
  shortDesc: 'Desenvolva apps iOS e Android com JavaScript/React: componentes nativos, hooks, navegação e APIs do dispositivo.',
  description: 'Trilha completa de React Native cobrindo setup do ambiente, componentes core, JSX, props e estado, hooks, listas, navegação, consumo de APIs e publicação nas lojas.',
  tags: ['Mobile', 'React', 'iOS', 'Android'],
  modules: [
    {
      id: 'rn-fundamentos',
      title: 'Fundamentos do React Native',
      description: 'Conceitos base e ambiente de desenvolvimento.',
      lessons: [
        { id: 'rn-intro', title: '1. O que é React Native', summary: 'Apps nativos com JavaScript.', content: '<p>React Native compila componentes React para views nativas de iOS e Android.</p>' },
        { id: 'rn-setup', title: '2. Setup do Ambiente', summary: 'Expo e React Native CLI.', content: '<p>Expo simplifica o setup: <code>npx create-expo-app</code>.</p>' },
        { id: 'rn-componentes', title: '3. Componentes Core', summary: 'View, Text e StyleSheet.', content: '<p><code>View</code> é o contêiner, <code>Text</code> exibe texto e <code>StyleSheet.create</code> define estilos.</p>' },
        { id: 'rn-jsx', title: '4. JSX', summary: 'Sintaxe de componentes.', content: '<p>JSX permite escrever a UI como <code>&lt;Text&gt;Olá&lt;/Text&gt;</code>.</p>' },
      ]
    },
    {
      id: 'rn-estado',
      title: 'Estado e Interação',
      description: 'Hooks, props e eventos de toque.',
      lessons: [
        { id: 'rn-props', title: '1. Props', summary: 'Passar dados entre componentes.', content: '<p>Props são dados imutáveis passados de pai para filho.</p>' },
        { id: 'rn-usestate', title: '2. useState', summary: 'Estado local do componente.', content: '<p><code>const [contador, setContador] = useState(0)</code>.</p>' },
        { id: 'rn-useeffect', title: '3. useEffect', summary: 'Efeitos colaterais e ciclo de vida.', content: '<p><code>useEffect</code> executa efeitos após a renderização.</p>' },
        { id: 'rn-touch', title: '4. Toque e Gestos', summary: 'Pressable e TouchableOpacity.', content: '<p><code>Pressable</code> responde a toques com feedback visual.</p>' },
        { id: 'rn-textinput', title: '5. TextInput', summary: 'Captura de texto do usuário.', content: '<p><code>TextInput</code> é o campo de texto nativo do app.</p>' },
      ]
    },
    {
      id: 'rn-listas-navegacao',
      title: 'Listas e Navegação',
      description: 'FlatList, ScrollView e rotas.',
      lessons: [
        { id: 'rn-flatlist', title: '1. FlatList', summary: 'Listas performáticas.', content: '<p><code>FlatList</code> renderiza listas longas com renderização virtualizada.</p>' },
        { id: 'rn-scrollview', title: '2. ScrollView', summary: 'Conteúdo rolável.', content: '<p><code>ScrollView</code> rola conteúdo quando a tela é pequena.</p>' },
        { id: 'rn-navegacao', title: '3. Navegação', summary: 'React Navigation e stacks.', content: '<p>React Navigation gerencia telas com <code>createNativeStackNavigator</code>.</p>' },
        { id: 'rn-tabs', title: '4. Abas (Tabs)', summary: 'Bottom Tab Navigator.', content: '<p>Abas inferiores com <code>createBottomTabNavigator</code>.</p>' },
      ]
    },
    {
      id: 'rn-api',
      title: 'APIs e Dispositivo',
      description: 'Requisições, armazenamento e sensores.',
      lessons: [
        { id: 'rn-fetch', title: '1. Consumindo APIs', summary: 'fetch e axios.', content: '<p><code>fetch</code> busca dados: <code>const r = await fetch(url)</code>.</p>' },
        { id: 'rn-asyncstorage', title: '2. AsyncStorage', summary: 'Persistência local.', content: '<p>AsyncStorage salva dados simples no dispositivo.</p>' },
        { id: 'rn-geolocalizacao', title: '3. Geolocalização', summary: 'Expo Location.', content: '<p>Expo Location acessa a posição GPS do dispositivo.</p>' },
        { id: 'rn-camera', title: '4. Câmera e Mídia', summary: 'expo-camera e expo-image-picker.', content: '<p>expo-image-picker seleciona fotos da galeria com permissões.</p>' },
      ]
    },
    {
      id: 'rn-producao',
      title: 'Publicação e Boas Práticas',
      description: 'Performance, testes e lojas.',
      lessons: [
        { id: 'rn-performance', title: '1. Performance', summary: 'Memo, FlatList e otimização.', content: '<p>Use <code>React.memo</code> e chaves estáveis em listas para performance.</p>' },
        { id: 'rn-temas', title: '2. Temas e Dark Mode', summary: 'ThemeProvider e cores.', content: '<p>Suporte a dark mode com contextos de tema.</p>' },
        { id: 'rn-testes', title: '3. Testes', summary: 'Jest e React Native Testing Library.', content: '<p>Teste componentes com Jest e RTL.</p>' },
        { id: 'rn-publicacao', title: '4. Publicação', summary: 'Builds para App Store e Play Store.', content: '<p>Gere builds com EAS Build para publicar nas lojas.</p>' },
      ]
    },
  ]
},
// --- SQL ---
{
  id: 'sql',
  name: 'SQL',
  language: 'SQL',
  level: 'Iniciante a Intermediário',
  levelTag: 'iniciante',
  shortDesc: 'Domine bancos de dados relacionais: SELECT, filtros, agregações, JOINs, CRUD e modelagem de dados.',
  description: 'Trilha completa de SQL cobrindo consultas SELECT, filtros, ordenação, funções agregadas, GROUP BY, JOINs, CRUD, subconsultas, índices e modelagem relacional.',
  tags: ['Banco de Dados', 'Backend', 'Dados', 'Relacional'],
  modules: [
    {
      id: 'sql-fundamentos',
      title: 'Fundamentos do SQL',
      description: 'Banco de dados, tabelas e a primeira consulta.',
      lessons: [
        { id: 'sql-intro', title: '1. O que é SQL', summary: 'Linguagem de consulta relacional.', content: '<p>SQL (Structured Query Language) consulta e manipula bancos de dados relacionais.</p>' },
        { id: 'sql-select', title: '2. SELECT', summary: 'Consultando colunas.', content: '<p><code>SELECT nome, idade FROM usuarios;</code> retorna as colunas escolhidas.</p>' },
        { id: 'sql-select-distinct', title: '3. DISTINCT e Alias', summary: 'Valores únicos e apelidos.', content: '<p><code>SELECT DISTINCT cidade FROM usuarios;</code> remove duplicatas.</p>' },
        { id: 'sql-operadores', title: '4. Operadores', summary: 'Aritméticos e de comparação.', content: '<p>Operadores como <code>=</code>, <code>&gt;</code>, <code>+</code> e <code>%</code>.</p>' },
      ]
    },
    {
      id: 'sql-filtros',
      title: 'Filtros e Ordenação',
      description: 'WHERE, ORDER BY e LIMIT.',
      lessons: [
        { id: 'sql-where', title: '1. WHERE', summary: 'Filtrando linhas.', content: '<p><code>SELECT * FROM produtos WHERE preco &gt; 50;</code>.</p>' },
        { id: 'sql-and-or', title: '2. AND, OR e NOT', summary: 'Combinando condições.', content: '<p><code>WHERE idade &gt;= 18 AND cidade = "SP"</code>.</p>' },
        { id: 'sql-like', title: '3. LIKE e IN', summary: 'Padrões e listas.', content: '<p><code>WHERE nome LIKE "Jo%"</code> busca prefixos.</p>' },
        { id: 'sql-order-limit', title: '4. ORDER BY e LIMIT', summary: 'Ordenando e limitando.', content: '<p><code>ORDER BY preco DESC LIMIT 10</code> traz os 10 mais caros.</p>' },
      ]
    },
    {
      id: 'sql-agregacao',
      title: 'Funções Agregadas e GROUP BY',
      description: 'Resumindo dados com COUNT, SUM e HAVING.',
      lessons: [
        { id: 'sql-count', title: '1. COUNT, SUM e AVG', summary: 'Contagem, soma e média.', content: '<p><code>SELECT COUNT(*), AVG(preco) FROM produtos;</code>.</p>' },
        { id: 'sql-min-max', title: '2. MIN e MAX', summary: 'Valores extremos.', content: '<p><code>SELECT MAX(preco), MIN(preco) FROM produtos;</code>.</p>' },
        { id: 'sql-group-by', title: '3. GROUP BY', summary: 'Agrupando linhas.', content: '<p><code>SELECT cidade, COUNT(*) FROM usuarios GROUP BY cidade;</code>.</p>' },
        { id: 'sql-having', title: '4. HAVING', summary: 'Filtrar grupos.', content: '<p><code>HAVING COUNT(*) &gt; 10</code> filtra grupos após a agregação.</p>' },
      ]
    },
    {
      id: 'sql-joins',
      title: 'JOINs',
      description: 'Combinando tabelas relacionadas.',
      lessons: [
        { id: 'sql-join-intro', title: '1. Relações e Chaves', summary: 'PK e FK.', content: '<p>Chave primária (PK) identifica linhas; chave estrangeira (FK) liga tabelas.</p>' },
        { id: 'sql-inner-join', title: '2. INNER JOIN', summary: 'Só registros que casam.', content: '<p><code>SELECT * FROM pedidos INNER JOIN clientes ON pedidos.cliente_id = clientes.id;</code>.</p>' },
        { id: 'sql-left-join', title: '3. LEFT JOIN', summary: 'Todos da esquerda.', content: '<p>LEFT JOIN mantém todas as linhas da tabela esquerda mesmo sem correspondência.</p>' },
        { id: 'sql-join-multiplo', title: '4. JOINs Múltiplos', summary: 'Mais de duas tabelas.', content: '<p>Encadeie JOINs: <code>A JOIN B ON ... JOIN C ON ...</code>.</p>' },
      ]
    },
    {
      id: 'sql-crud-modelagem',
      title: 'CRUD e Modelagem',
      description: 'INSERT, UPDATE, DELETE e boas práticas.',
      lessons: [
        { id: 'sql-insert', title: '1. INSERT', summary: 'Inserindo dados.', content: '<p><code>INSERT INTO produtos (nome, preco) VALUES ("Teclado", 200);</code>.</p>' },
        { id: 'sql-update', title: '2. UPDATE', summary: 'Atualizando dados.', content: '<p><code>UPDATE produtos SET preco = 180 WHERE id = 1;</code>.</p>' },
        { id: 'sql-delete', title: '3. DELETE', summary: 'Removendo dados.', content: '<p><code>DELETE FROM produtos WHERE id = 1;</code> — sempre use WHERE.</p>' },
        { id: 'sql-constraints', title: '4. Constraints', summary: 'NOT NULL, UNIQUE e CHECK.', content: '<p>Constraints garantem integridade: <code>NOT NULL</code>, <code>UNIQUE</code>, <code>CHECK</code>.</p>' },
        { id: 'sql-indices', title: '5. Índices', summary: 'Acelerando consultas.', content: '<p><code>CREATE INDEX idx_email ON usuarios(email);</code> acelera buscas.</p>' },
      ]
    },
  ]
},
// --- C ---
{
  id: 'c',
  name: 'Linguagem C',
  language: 'C',
  level: 'Iniciante a Avançado',
  levelTag: 'all',
  shortDesc: 'A linguagem que criou as linguagens: ponteiros, memória, structs e programação de sistemas com C.',
  description: 'Trilha completa de C cobrindo sintaxe, tipos, controle de fluxo, funções, arrays, ponteiros, alocação dinâmica, strings, structs, arquivos e programação de baixo nível.',
  tags: ['Sistemas', 'Baixo Nível', 'Ponteiros', 'Memória'],
  modules: [
    {
      id: 'c-fundamentos',
      title: 'Fundamentos do C',
      description: 'Estrutura, tipos e entrada/saída.',
      lessons: [
        { id: 'c-intro', title: '1. O que é C', summary: 'Linguagem de sistemas compilada.', content: '<p>C é compilada, imperativa e de propósito geral — base do UNIX e de quase todas as linguagens modernas.</p>' },
        { id: 'c-estrutura', title: '2. Estrutura de um Programa', summary: 'main, includes e return.', content: '<p>Todo programa começa em <code>int main()</code> e inclui <code>stdio.h</code> para entrada/saída.</p>' },
        { id: 'c-variaveis', title: '3. Variáveis e Tipos', summary: 'int, float, char e double.', content: '<p>Tipos básicos: <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code> e <code>void</code>.</p>' },
        { id: 'c-printf', title: '4. printf e scanf', summary: 'Entrada e saída formatada.', content: '<p><code>printf("%d", idade)</code> imprime inteiros; <code>scanf</code> lê do teclado.</p>' },
        { id: 'c-operadores', title: '5. Operadores', summary: 'Aritméticos, lógicos e bit a bit.', content: '<p>C tem operadores aritméticos, relacionais, lógicos e bit a bit (<code>&amp;</code>, <code>|</code>, <code>&lt;&lt;</code>).</p>' },
      ]
    },
    {
      id: 'c-controle',
      title: 'Controle de Fluxo',
      description: 'Decisões e repetição.',
      lessons: [
        { id: 'c-if', title: '1. if, else e else if', summary: 'Decisões.', content: '<p><code>if (x &gt; 0) { ... } else { ... }</code>.</p>' },
        { id: 'c-switch', title: '2. switch', summary: 'Múltiplos casos.', content: '<p><code>switch (opcao) { case 1: ... break; }</code>.</p>' },
        { id: 'c-for', title: '3. Laço for', summary: 'Repetição com contador.', content: '<p><code>for (int i = 0; i &lt; 10; i++)</code>.</p>' },
        { id: 'c-while', title: '4. while e do-while', summary: 'Repetição condicional.', content: '<p><code>while (condicao)</code> testa antes; <code>do ... while</code> testa depois.</p>' },
      ]
    },
    {
      id: 'c-funcoes-arrays',
      title: 'Funções e Arrays',
      description: 'Modularização e coleções.',
      lessons: [
        { id: 'c-funcoes', title: '1. Funções', summary: 'Declaração, parâmetros e retorno.', content: '<p><code>int soma(int a, int b) { return a + b; }</code>.</p>' },
        { id: 'c-escopo', title: '2. Escopo e Variáveis Globais', summary: 'Local vs global.', content: '<p>Variáveis locais vivem no bloco; globais são acessíveis em todo o programa.</p>' },
        { id: 'c-arrays', title: '3. Arrays', summary: 'Coleções de mesmo tipo.', content: '<p><code>int numeros[5] = {1, 2, 3, 4, 5};</code>.</p>' },
        { id: 'c-strings', title: '4. Strings', summary: 'Arrays de char.', content: '<p>Strings em C são arrays de <code>char</code> terminados em <code>\0</code>.</p>' },
      ]
    },
    {
      id: 'c-ponteiros',
      title: 'Ponteiros e Memória',
      description: 'O coração do C: endereços e alocação.',
      lessons: [
        { id: 'c-ponteiros-intro', title: '1. O que são Ponteiros', summary: 'Variáveis que guardam endereços.', content: '<p><code>int *p = &amp;x;</code> — <code>p</code> guarda o endereço de <code>x</code>.</p>' },
        { id: 'c-dereferencia', title: '2. Dereferência', summary: 'Acessar o valor apontado.', content: '<p><code>*p = 10;</code> altera o valor no endereço apontado.</p>' },
        { id: 'c-alocacao', title: '3. malloc e free', summary: 'Alocação dinâmica.', content: '<p><code>int *p = malloc(sizeof(int));</code> — sempre libere com <code>free(p)</code>.</p>' },
        { id: 'c-ponteiros-arrays', title: '4. Ponteiros e Arrays', summary: 'Arrays decaem para ponteiros.', content: '<p><code>arr[i]</code> equivale a <code>*(arr + i)</code>.</p>' },
      ]
    },
    {
      id: 'c-structs-arquivos',
      title: 'Structs, Arquivos e Avançado',
      description: 'Tipos compostos e persistência.',
      lessons: [
        { id: 'c-structs', title: '1. Structs', summary: 'Tipos compostos.', content: '<p><code>struct Pessoa { char nome[50]; int idade; };</code>.</p>' },
        { id: 'c-typedef', title: '2. typedef', summary: 'Apelidos para tipos.', content: '<p><code>typedef struct { ... } Pessoa;</code> simplifica o uso.</p>' },
        { id: 'c-arquivos', title: '3. Arquivos', summary: 'fopen, fscanf e fprintf.', content: '<p><code>fopen("dados.txt", "r")</code> abre arquivos para leitura/escrita.</p>' },
        { id: 'c-realloc', title: '4. Memória Dinâmica Avançada', summary: 'realloc e matrizes.', content: '<p><code>realloc</code> redimensiona blocos alocados com malloc.</p>' },
      ]
    },
  ]
},
// --- C++ ---
{
  id: 'cpp',
  name: 'C++',
  language: 'C++',
  level: 'Intermediário a Avançado',
  levelTag: 'intermediario',
  shortDesc: 'C++ moderno: POO, STL, RAII, smart pointers e templates para sistemas de alta performance.',
  description: 'Trilha completa de C++ cobrindo a base da linguagem, orientação a objetos, STL, gerenciamento de memória com RAII e smart pointers, templates, lambdas e C++ moderno (11/14/17/20).',
  tags: ['Sistemas', 'Performance', 'POO', 'STL'],
  modules: [
    {
      id: 'cpp-fundamentos',
      title: 'Fundamentos do C++',
      description: 'Do C para o C++: streams e novas ferramentas.',
      lessons: [
        { id: 'cpp-intro', title: '1. O que é C++', summary: 'C com orientação a objetos.', content: '<p>C++ estende C com classes, templates, exceções e a biblioteca padrão STL.</p>' },
        { id: 'cpp-cout', title: '2. cout e cin', summary: 'Entrada/saída com streams.', content: '<p><code>std::cout &lt;&lt; "Olá"</code> e <code>std::cin &gt;&gt; x</code>.</p>' },
        { id: 'cpp-namespaces', title: '3. Namespaces e std', summary: 'Evitando colisões de nomes.', content: '<p><code>std::</code> prefixa a biblioteca padrão; evite <code>using namespace std</code> global.</p>' },
        { id: 'cpp-references', title: '4. Referências', summary: 'Aliases para variáveis.', content: '<p><code>int &amp;ref = x;</code> — referência é um alias, não um ponteiro.</p>' },
        { id: 'cpp-funcoes-overload', title: '5. Overload de Funções', summary: 'Mesmo nome, assinaturas diferentes.', content: '<p>Funções podem ser sobrecarregadas por tipo/quantidade de parâmetros.</p>' },
      ]
    },
    {
      id: 'cpp-poo',
      title: 'Orientação a Objetos',
      description: 'Classes, herança e polimorfismo.',
      lessons: [
        { id: 'cpp-classes', title: '1. Classes', summary: 'Atributos e métodos.', content: '<p><code>class Carro { public: void acelerar(); };</code>.</p>' },
        { id: 'cpp-construtores', title: '2. Construtores e Destrutores', summary: 'RAII começa aqui.', content: '<p>Construtores inicializam e destrutores liberam recursos automaticamente.</p>' },
        { id: 'cpp-heranca', title: '3. Herança', summary: 'public, protected e private.', content: '<p><code>class SUV : public Carro { ... };</code>.</p>' },
        { id: 'cpp-polimorfismo', title: '4. Polimorfismo e virtual', summary: 'Métodos virtuais.', content: '<p><code>virtual</code> habilita sobrescrita e polimorfismo em tempo de execução.</p>' },
      ]
    },
    {
      id: 'cpp-stl',
      title: 'STL — Standard Template Library',
      description: 'Contêineres, algoritmos e iteradores.',
      lessons: [
        { id: 'cpp-vector', title: '1. vector', summary: 'Array dinâmico.', content: '<p><code>std::vector&lt;int&gt; v = {1, 2, 3};</code> cresce dinamicamente.</p>' },
        { id: 'cpp-string', title: '2. std::string', summary: 'Strings modernas.', content: '<p><code>std::string s = "MonoCode";</code> com métodos como <code>s.length()</code>.</p>' },
        { id: 'cpp-map', title: '3. map e unordered_map', summary: 'Dicionários ordenados e hash.', content: '<p><code>std::map&lt;string, int&gt;</code> associa chaves a valores.</p>' },
        { id: 'cpp-algoritmos', title: '4. Algoritmos', summary: 'sort, find e transform.', content: '<p><code>std::sort(v.begin(), v.end())</code> ordena contêineres.</p>' },
      ]
    },
    {
      id: 'cpp-memoria',
      title: 'Memória e Modern C++',
      description: 'Smart pointers, move semantics e lambdas.',
      lessons: [
        { id: 'cpp-smart-pointers', title: '1. Smart Pointers', summary: 'unique_ptr e shared_ptr.', content: '<p><code>std::unique_ptr&lt;T&gt;</code> possui o objeto e libera memória automaticamente.</p>' },
        { id: 'cpp-raii', title: '2. RAII', summary: 'Recursos amarrados à vida do objeto.', content: '<p>RAII garante liberação de recursos (arquivos, locks, memória) ao sair do escopo.</p>' },
        { id: 'cpp-lambdas', title: '3. Lambdas', summary: 'Funções anônimas.', content: '<p><code>[&amp;](int x) { return x * 2; }</code>.</p>' },
        { id: 'cpp-templates', title: '4. Templates', summary: 'Código genérico.', content: '<p><code>template &lt;typename T&gt; T maximo(T a, T b)</code>.</p>' },
      ]
    },
    {
      id: 'cpp-concorrencia',
      title: 'Concorrência e Avançado',
      description: 'Threads, futures e C++ moderno.',
      lessons: [
        { id: 'cpp-threads', title: '1. Threads', summary: 'std::thread.', content: '<p><code>std::thread t(funcao);</code> executa em paralelo; use <code>t.join()</code>.</p>' },
        { id: 'cpp-mutex', title: '2. Mutex e Locks', summary: 'Protegendo dados compartilhados.', content: '<p><code>std::mutex</code> com <code>std::lock_guard</code> protege seções críticas.</p>' },
        { id: 'cpp-move', title: '3. Move Semantics', summary: 'std::move e rvalues.', content: '<p><code>std::move</code> transfere recursos sem copiar, evitando alocações.</p>' },
        { id: 'cpp-cpp20', title: '4. C++20', summary: 'Concepts, ranges e modules.', content: '<p>C++20 traz concepts, ranges e coroutines para código mais expressivo.</p>' },
      ]
    },
  ]
},
// --- C# ---
{
  id: 'csharp',
  name: 'C# (.NET)',
  language: 'C#',
  level: 'Intermediário',
  levelTag: 'intermediario',
  shortDesc: 'A linguagem da Microsoft para .NET: POO, LINQ, async/await, ASP.NET e aplicações modernas.',
  description: 'Trilha completa de C# cobrindo sintaxe moderna, orientação a objetos, coleções e LINQ, programação assíncrona com async/await, e o ecossistema .NET com ASP.NET Core.',
  tags: ['Backend', 'Microsoft', '.NET', 'POO'],
  modules: [
    {
      id: 'cs-fundamentos',
      title: 'Fundamentos do C#',
      description: 'Sintaxe, tipos e o runtime .NET.',
      lessons: [
        { id: 'cs-intro', title: '1. O que é C#', summary: 'Linguagem moderna do .NET.', content: '<p>C# é uma linguagem orientada a objetos, tipada, da plataforma .NET.</p>' },
        { id: 'cs-dotnet', title: '2. .NET e dotnet CLI', summary: 'SDK, runtime e comandos.', content: '<p><code>dotnet new console</code> cria projetos; <code>dotnet run</code> executa.</p>' },
        { id: 'cs-variaveis', title: '3. Variáveis e Tipos', summary: 'int, string, bool e var.', content: '<p><code>int idade = 25;</code> — <code>var</code> infere o tipo localmente.</p>' },
        { id: 'cs-console', title: '4. Console e Strings', summary: 'WriteLine e interpolação.', content: '<p><code>Console.WriteLine($"Olá, {nome}")</code> interpola strings.</p>' },
        { id: 'cs-nullable', title: '5. Nullable e Null Safety', summary: 'int? e operador ?.', content: '<p><code>int? x = null;</code> — <code>?. </code> acessa com segurança.</p>' },
      ]
    },
    {
      id: 'cs-poo',
      title: 'Orientação a Objetos',
      description: 'Classes, herança e interfaces.',
      lessons: [
        { id: 'cs-classes', title: '1. Classes', summary: 'Propriedades e métodos.', content: '<p><code>public class Carro { public string Marca { get; set; } }</code>.</p>' },
        { id: 'cs-propriedades', title: '2. Propriedades', summary: 'get e set.', content: '<p>Propriedades encapsulam campos com <code>{ get; set; }</code>.</p>' },
        { id: 'cs-heranca', title: '3. Herança', summary: 'Classes derivadas.', content: '<p><code>class SUV : Carro { }</code> herda membros da base.</p>' },
        { id: 'cs-interfaces', title: '4. Interfaces', summary: 'Contratos de comportamento.', content: '<p><code>interface IVeiculo { void Mover(); }</code> define um contrato.</p>' },
        { id: 'cs-abstract', title: '5. Classes Abstratas', summary: 'Modelos incompletos.', content: '<p>Classes <code>abstract</code> não podem ser instanciadas; exigem implementação de métodos abstratos.</p>' },
      ]
    },
    {
      id: 'cs-colecoes-linq',
      title: 'Coleções e LINQ',
      description: 'Listas, dicionários e consultas integradas.',
      lessons: [
        { id: 'cs-listas', title: '1. List e Dictionary', summary: 'Coleções genéricas.', content: '<p><code>List&lt;int&gt;</code> e <code>Dictionary&lt;string, int&gt;</code>.</p>' },
        { id: 'cs-linq', title: '2. LINQ', summary: 'Consultas sobre coleções.', content: '<p><code>list.Where(x =&gt; x &gt; 10).Select(x =&gt; x * 2)</code>.</p>' },
        { id: 'cs-lambda', title: '3. Lambdas e Delegates', summary: 'Funções como valores.', content: '<p><code>Func&lt;int, int&gt; dobro = x =&gt; x * 2;</code>.</p>' },
        { id: 'cs-extension', title: '4. Métodos de Extensão', summary: 'Adicionar métodos a tipos.', content: '<p>Métodos de extensão adicionam funcionalidade a tipos existentes.</p>' },
      ]
    },
    {
      id: 'cs-assincrono',
      title: 'Assíncrono e Exceções',
      description: 'async/await, Tasks e tratamento de erros.',
      lessons: [
        { id: 'cs-task', title: '1. Task e async/await', summary: 'Operações assíncronas.', content: '<p><code>async Task&lt;string&gt; Buscar() { return await httpClient.GetStringAsync(url); }</code>.</p>' },
        { id: 'cs-exceptions', title: '2. Exceções', summary: 'try, catch e finally.', content: '<p><code>try { } catch (Exception ex) { } finally { }</code>.</p>' },
        { id: 'cs-linq-io', title: '3. Trabalhando com Arquivos', summary: 'System.IO.', content: '<p><code>File.ReadAllLines("dados.txt")</code> lê arquivos.</p>' },
        { id: 'cs-testes', title: '4. Testes Unitários', summary: 'xUnit e MSTest.', content: '<p>Testes com xUnit validam comportamento: <code>[Fact]</code>.</p>' },
      ]
    },
    {
      id: 'cs-ecossistema',
      title: 'Ecossistema .NET',
      description: 'ASP.NET, EF Core e publicação.',
      lessons: [
        { id: 'cs-aspnet', title: '1. ASP.NET Core', summary: 'APIs e web com C#.', content: '<p>ASP.NET Core cria APIs: <code>dotnet new webapi</code>.</p>' },
        { id: 'cs-efcore', title: '2. EF Core', summary: 'ORM para bancos de dados.', content: '<p>Entity Framework Core mapeia classes C# para tabelas SQL.</p>' },
        { id: 'cs-injecao', title: '3. Injeção de Dependência', summary: 'DI nativo do .NET.', content: '<p>Registre serviços no contêiner e injete em construtores.</p>' },
        { id: 'cs-publicacao', title: '4. Publicação', summary: 'dotnet publish e Docker.', content: '<p><code>dotnet publish -c Release</code> gera artefatos para produção.</p>' },
      ]
    },
  ]
},
];
