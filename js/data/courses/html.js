// MonoCode — Curso Completo de HTML5
// 6 módulos • 28 lições com explicações didáticas completas

export const HTML_COURSE = {
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
        {
          id: 'html-intro',
          title: '1. O que é HTML',
          summary: 'Linguagem de marcação que estrutura a web.',
          content: `
<h2>HTML não é programação</h2>
<p>HTML (<strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage) é uma linguagem de <strong>marcação</strong>: em vez de instruções, você <em>etiqueta</em> o conteúdo para dar significado a ele. O navegador lê essas etiquetas e monta a página.</p>
<pre><code>&lt;p&gt;Este é um parágrafo.&lt;/p&gt;
&lt;!-- &lt;p&gt; abre o parágrafo, &lt;/p&gt; fecha. O conteúdo fica no meio. --&gt;</code></pre>

<h2>Anatomia de uma tag</h2>
<pre><code>&lt;a href="https://monocode.dev" target="_blank"&gt;Visite o MonoCode&lt;/a&gt;
<!-- └ tag  └ atributo="valor"            └ conteúdo          └ fecha -->

&lt;img src="foto.jpg" alt="Descrição"&gt;
<!-- tags de fecho único (void) não têm fechamento --&gt;</code></pre>

<h2>A trinca da web</h2>
<ul>
  <li><strong>HTML:</strong> estrutura e significado (o esqueleto).</li>
  <li><strong>CSS:</strong> aparência (a pele e roupa).</li>
  <li><strong>JavaScript:</strong> comportamento (os músculos).</li>
</ul>
<p>Separar as três camadas é a regra de ouro do desenvolvimento web profissional.</p>

<h2>Elementos de bloco vs linha</h2>
<pre><code>&lt;p&gt;Sou um bloco: ocupo a largura inteira.&lt;/p&gt;
&lt;span&gt;Sou inline: flui dentro do texto.&lt;/span&gt;</code></pre>
`
        },
        {
          id: 'html-estrutura',
          title: '2. Estrutura de um Documento',
          summary: 'doctype, html, head e body.',
          content: `
<h2>O esqueleto obrigatório</h2>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Minha Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá, mundo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3>O que cada linha significa</h3>
<ul>
  <li><code>&lt;!DOCTYPE html&gt;</code> — avisa ao navegador que é HTML5. Sem ele, o navegador entra em "modo de compatibilidade" com bugs antigos.</li>
  <li><code>&lt;html lang="pt-BR"&gt;</code> — idioma da página. Essencial para leitores de tela e tradutores.</li>
  <li><code>&lt;head&gt;</code> — metadados invisíveis: título da aba, codificação, links de CSS.</li>
  <li><code>&lt;body&gt;</code> — todo o conteúdo visível.</li>
</ul>

<h2>Indentação e comentários</h2>
<pre><code>&lt;body&gt;
  &lt;main&gt;
    &lt;section&gt;
      &lt;!-- indentar facilita enxergar a hierarquia --&gt;
      &lt;p&gt;Conteúdo aninhado&lt;/p&gt;
    &lt;/section&gt;
  &lt;/main&gt;
&lt;/body&gt;</code></pre>

<div class="callout callout-tip">
<strong>Atalho de mestre:</strong> no VS Code, digite <code>!</code> e aperte Tab — a estrutura completa é gerada automaticamente.
</div>
`
        },
        {
          id: 'html-head',
          title: '3. O Head e Metadados',
          summary: 'meta tags, viewport, favicon e SEO social.',
          content: `
<h2>Metadados essenciais</h2>
<pre><code>&lt;head&gt;
  &lt;!-- Codificação: sem isso os acentos quebram --&gt;
  &lt;meta charset="UTF-8"&gt;

  &lt;!-- Responsividade: obrigatório para mobile --&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

  &lt;title&gt;MonoCode — Aprenda a Programar&lt;/title&gt;
  &lt;meta name="description" content="Cursos gratuitos de programação."&gt;

  &lt;link rel="icon" href="favicon.ico"&gt;
  &lt;link rel="stylesheet" href="css/global.css"&gt;

  &lt;script src="js/main.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

<h2>Open Graph: seu cartão nas redes</h2>
<pre><code>&lt;meta property="og:title" content="MonoCode — Aprenda a Programar"&gt;
&lt;meta property="og:description" content="Cursos 100% gratuitos."&gt;
&lt;meta property="og:image" content="https://monocode.dev/capa.png"&gt;
&lt;meta property="og:url" content="https://monocode.dev"&gt;
<!-- é isso que gera o preview bonito no WhatsApp/Twitter --&gt;</code></pre>

<h2>script: onde e como carregar</h2>
<ul>
  <li><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code> no fim do <code>body</code> — clássico.</li>
  <li><code>defer</code> — baixa em paralelo, executa após o HTML (melhor opção).</li>
  <li><code>async</code> — baixa em paralelo, executa imediatamente (para scripts independentes).</li>
</ul>
`
        },
        {
          id: 'html-texto',
          title: '4. Títulos e Parágrafos',
          summary: 'h1-h6, p, br e a hierarquia correta.',
          content: `
<h2>Hierarquia de títulos</h2>
<pre><code>&lt;h1&gt;Guia de JavaScript&lt;/h1&gt;          &lt;!-- UM por página --&gt;
  &lt;h2&gt;Fundamentos&lt;/h2&gt;
    &lt;h3&gt;Variáveis&lt;/h3&gt;
    &lt;h3&gt;Funções&lt;/h3&gt;
  &lt;h2&gt;DOM&lt;/h2&gt;
    &lt;h3&gt;Seleção&lt;/h3&gt;</code></pre>
<p>Pense como um sumário de livro: <strong>nunca pule níveis</strong> (h2 → h4) e use <strong>um único h1</strong> por página — buscadores e leitores de tela navegam por essa hierarquia.</p>

<h2>Parágrafos e quebras</h2>
<pre><code>&lt;p&gt;
  Parágrafos são blocos de texto.
  espaços     e quebras de linha no código
  são ignorados pelo navegador!
&lt;/p&gt;

&lt;p&gt;Linha 1&lt;br&gt;Linha 2&lt;/p&gt;  &lt;!-- br = quebra forçada --&gt;
&lt;hr&gt;                        &lt;!-- separador temático --&gt;</code></pre>

<h2>Tags de ênfase com significado</h2>
<pre><code>&lt;strong&gt;importante&lt;/strong&gt;    &lt;!-- peso semântico --&gt;
&lt;em&gt;ênfase&lt;/em&gt;              &lt;!-- itálico semântico --&gt;
&lt;b&gt; e &lt;i&gt;                  &lt;!-- apenas visual: sem significado --&gt;</code></pre>
`
        },
        {
          id: 'html-comentarios',
          title: '5. Comentários e Entidades',
          summary: 'Anotar código e exibir caracteres especiais.',
          content: `
<h2>Comentários</h2>
<pre><code>&lt;!-- comentário de uma linha --&gt;

&lt;!--
  Comentário em bloco.
  Invisível na página, visível no código-fonte.
--&gt;

&lt;!-- &lt;p&gt;seção desativada temporariamente&lt;/p&gt; --&gt;</code></pre>
<p>Comentários documentam a intenção, desativam trechos e guiam colegas. Só não deixe senhas neles — qualquer um vê o código-fonte!</p>

<h2>Entidades HTML</h2>
<p>Caracteres reservados do HTML precisam de "apelidos":</p>
<pre><code>&lt;p&gt;5 &amp;lt; 10&lt;/p&gt;        →  5 &lt; 10
&lt;p&gt;Comercial: &amp;amp;&lt;/p&gt;    →  Comercial: &amp;
&lt;p&gt;Aspas: &amp;quot;x&amp;quot;&lt;/p&gt;     →  Aspas: "x"

&lt;p&gt;© 2026&lt;/p&gt;      →  &amp;copy; 2026  (ou digite © direto)
&lt;p&gt;&amp;nbsp;&lt;/p&gt;            →  espaço que não quebra linha</code></pre>

<h2>Tabela de sobrevivência</h2>
<ul>
  <li><code>&amp;lt;</code> = &lt; — menor que</li>
  <li><code>&amp;gt;</code> = &gt; — maior que</li>
  <li><code>&amp;amp;</code> = &amp; — e comercial</li>
  <li><code>&amp;quot;</code> = " — aspas</li>
  <li><code>&amp;nbsp;</code> — espaço inseparável</li>
</ul>
`
        }
      ]
    },
    {
      id: 'html-texto-links',
      title: 'Formatação, Listas e Links',
      description: 'Enriquecendo o conteúdo com ênfase, listas e navegação.',
      lessons: [
        {
          id: 'html-formatacao',
          title: '1. Formatação de Texto',
          summary: 'strong, em, mark, del, sub e sup.',
          content: `
<h2>Tags de significado</h2>
<pre><code>&lt;p&gt;
  &lt;strong&gt;Crucial:&lt;/strong&gt; revise antes de publicar.
  Haverá &lt;em&gt;ênfase&lt;/em&gt; no &lt;mark&gt;trecho destacado&lt;/mark&gt;.
  De &lt;del&gt;R$ 199&lt;/del&gt; por &lt;ins&gt;R$ 149&lt;/ins&gt;!
&lt;/p&gt;</code></pre>

<h2>Todos os formatadores</h2>
<ul>
  <li><code>&lt;strong&gt;</code> — importância real (negrito).</li>
  <li><code>&lt;em&gt;</code> — ênfase na leitura (itálico).</li>
  <li><code>&lt;mark&gt;</code> — destaque tipo marca-texto.</li>
  <li><code>&lt;del&gt;</code> / <code>&lt;ins&gt;</code> — removido/inserido (edições).</li>
  <li><code>&lt;small&gt;</code> — letras miúdas (avisos legais).</li>
  <li><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code> — sub/sobrescrito: H&lt;sub&gt;2&lt;/sub&gt;O, m².</li>
  <li><code>&lt;abbr title="...&gt;"</code> — siglas com explicação no hover.</li>
</ul>

<h2>Código no conteúdo</h2>
<pre><code>&lt;p&gt;Use &lt;code&gt;console.log()&lt;/code&gt; para depurar.&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;bloco de código
  com        espaços
    preservados&lt;/code&gt;&lt;/pre&gt;
&lt;p&gt;Aperte &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;K&lt;/kbd&gt; para buscar.&lt;/p&gt;</code></pre>
`
        },
        {
          id: 'html-listas',
          title: '2. Listas Ordenadas, Não Ordenadas e de Definição',
          summary: 'ul, ol, li e dl — com aninhamento.',
          content: `
<h2>Os três tipos</h2>
<pre><code>&lt;!-- Não ordenada: a ordem não importa --&gt;
&lt;ul&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;HTML&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordenada: a ordem importa (passos!) --&gt;
&lt;ol&gt;
  &lt;li&gt;Instale o Node&lt;/li&gt;
  &lt;li&gt;Rode npm install&lt;/li&gt;
  &lt;li&gt;Execute npm run dev&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Descrição: pares termo-definição --&gt;
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Linguagem de marcação&lt;/dd&gt;
&lt;/dl&gt;</code></pre>

<h2>Aninhamento</h2>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Frontend
    &lt;ul&gt;
      &lt;li&gt;HTML&lt;/li&gt;
      &lt;li&gt;CSS&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Backend&lt;/li&gt;
&lt;/ul&gt;
<!-- a lista interna fica DENTRO do li pai --&gt;</code></pre>

<h2>ol com controles</h2>
<pre><code>&lt;ol start="5"&gt;           &lt;!-- começa no 5 --&gt;
&lt;ol type="A"&gt;            &lt;!-- A, B, C... --&gt;
&lt;li value="10"&gt;texto&lt;/li&gt; &lt;!-- pula para 10 --&gt;
&lt;ol reversed&gt;            &lt;!-- contagem decrescente --&gt;</code></pre>
`
        },
        {
          id: 'html-links',
          title: '3. Links e Âncoras',
          summary: 'href, target, âncoras internas e rel.',
          content: `
<h2>O elemento mais importante da web</h2>
<pre><code>&lt;!-- Link externo --&gt;
&lt;a href="https://monocode.dev"&gt;MonoCode&lt;/a&gt;

&lt;!-- Nova aba + segurança --&gt;
&lt;a href="https://exemplo.dev" target="_blank" rel="noopener noreferrer"&gt;
  Site externo
&lt;/a&gt;

&lt;!-- Relativo: dentro do próprio site --&gt;
&lt;a href="cursos.html"&gt;Cursos&lt;/a&gt;
&lt;a href="../index.html"&gt;Home&lt;/a&gt;        &lt;!-- sobe uma pasta --&gt;
&lt;a href="#precos"&gt;Ir para preços&lt;/a&gt;    &lt;!-- âncora interna --&gt;

&lt;!-- E-mail e telefone --&gt;
&lt;a href="mailto:contato@monocode.dev"&gt;E-mail&lt;/a&gt;
&lt;a href="tel:+5511999999999"&gt;Ligar&lt;/a&gt;

&lt;!-- Download --&gt;
&lt;a href="relatorio.pdf" download&gt;Baixar PDF&lt;/a&gt;</code></pre>

<h2>Âncoras internas</h2>
<pre><code>&lt;h2 id="precos"&gt;Preços&lt;/h2&gt;
...
&lt;a href="#precos"&gt;Ver preços&lt;/a&gt;   &lt;!-- rola até o h2 --&gt;</code></pre>

<div class="callout callout-warning">
<strong>target="_blank" sem rel="noopener"</strong> é falha de segurança: a página aberta pode manipular a sua via <code>window.opener</code>. Sempre combine os dois.
</div>
`
        },
        {
          id: 'html-imagens',
          title: '4. Imagens Responsivas',
          summary: 'img, alt, srcset, picture e figures.',
          content: `
<h2>Imagem básica e correta</h2>
<pre><code>&lt;img src="foto.jpg"
     alt="Aluna programando em um notebook no laboratório"
     width="800" height="600"&gt;</code></pre>
<p><code>alt</code> descreve a imagem para leitores de tela e aparece se a imagem falhar. <code>width/height</code> reservam o espaço e evitam layout pulando durante o carregamento.</p>

<h2>srcset e sizes: a imagem certa para cada tela</h2>
<pre><code>&lt;img src="foto-800.jpg"
     srcset="foto-400.jpg 400w,
             foto-800.jpg 800w,
             foto-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Praia ao amanhecer"&gt;
<!-- o navegador escolhe o arquivo ideal sozinho --&gt;</code></pre>

<h2>picture: formatos modernos com fallback</h2>
<pre><code>&lt;picture&gt;
  &lt;source type="image/avif" srcset="foto.avif"&gt;
  &lt;source type="image/webp" srcset="foto.webp"&gt;
  &lt;img src="foto.jpg" alt="Avatar da usuária"&gt;
&lt;/picture&gt;</code></pre>

<h2>figure: imagem com legenda</h2>
<pre><code>&lt;figure&gt;
  &lt;img src="grafico.png" alt="Crescimento de 300% em 2026"&gt;
  &lt;figcaption&gt;Vendas trimestrais — dados internos&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
`
        },
        {
          id: 'html-citacoes',
          title: '5. Citações e Conteúdo Especial',
          summary: 'blockquote, q, cite, time e address.',
          content: `
<h2>Citações</h2>
<pre><code>&lt;blockquote cite="https://exemplo.dev/post"&gt;
  A simplicidade é o grau máximo de sofisticação.
  &lt;footer&gt;— &lt;cite&gt;Leonardo da Vinci&lt;/cite&gt;&lt;/footer&gt;
&lt;/blockquote&gt;

&lt;p&gt;Como diz o manual: &lt;q&gt;leia as instruções&lt;/q&gt;.&lt;/p&gt;
<!-- q adiciona aspas automaticamente --&gt;</code></pre>

<h2>Dados semânticos para máquinas</h2>
<pre><code>&lt;p&gt;Publicado em &lt;time datetime="2026-08-19"&gt;19 de agosto&lt;/time&gt;.&lt;/p&gt;
<!-- datetime em formato ISO: buscadores entendem! --&gt;

&lt;address&gt;
  Contato: &lt;a href="mailto:oi@monocode.dev"&gt;oi@monocode.dev&lt;/a&gt;
&lt;/address&gt;</code></pre>

<h2>Detalhes ocultos (accordion nativo)</h2>
<pre><code>&lt;details&gt;
  &lt;summary&gt;Como funciona o reembolso?&lt;/summary&gt;
  &lt;p&gt;Solicite em até 7 dias...&lt;/p&gt;
&lt;/details&gt;

&lt;details open&gt;   &lt;!-- open = começa expandido --&gt;
  &lt;summary&gt;Perguntas frequentes&lt;/summary&gt;
&lt;/details&gt;</code></pre>
`
        }
      ]
    },
    {
      id: 'html-midia',
      title: 'Mídia e Recursos',
      description: 'Áudio, vídeo, iframes e SVG.',
      lessons: [
        {
          id: 'html-video',
          title: '1. Vídeo',
          summary: 'A tag video, controls, poster e múltiplas fontes.',
          content: `
<h2>Vídeo nativo</h2>
<pre><code>&lt;video src="aula.mp4"
       controls
       width="640"
       poster="capa.jpg"&gt;
  Seu navegador não suporta vídeo HTML5.
&lt;/video&gt;</code></pre>

<h2>Atributos essenciais</h2>
<pre><code>&lt;video controls
       autoplay muted        &lt;!-- autoplay só funciona MUDO --&gt;
       loop                  &lt;!-- repete infinito --&gt;
       preload="metadata"    &lt;!-- carrega só cabeçalho --&gt;
       poster="capa.jpg"&gt;
  &lt;source src="aula.webm" type="video/webm"&gt;
  &lt;source src="aula.mp4" type="video/mp4"&gt;
  &lt;track src="legendas.pt.vtt" kind="subtitles" srclang="pt" default&gt;
&lt;/video&gt;</code></pre>
<ul>
  <li><code>controls</code> — mostra play/pause/volume.</li>
  <li><code>poster</code> — imagem de capa antes de dar play.</li>
  <li><code>&lt;source&gt;</code> múltiplos — o navegador usa o primeiro compatível.</li>
  <li><code>&lt;track&gt;</code> — legendas (acessibilidade!).</li>
</ul>
`
        },
        {
          id: 'html-audio',
          title: '2. Áudio',
          summary: 'A tag audio e seus controles.',
          content: `
<h2>Áudio nativo</h2>
<pre><code>&lt;audio controls&gt;
  &lt;source src="podcast.opus" type="audio/ogg"&gt;
  &lt;source src="podcast.mp3" type="audio/mpeg"&gt;
  Seu navegador não suporta áudio.
&lt;/audio&gt;

&lt;!-- minimalista: --&gt;
&lt;audio src="trilha.mp3" controls preload="none"&gt;&lt;/audio&gt;</code></pre>

<h2>Atributos</h2>
<ul>
  <li><code>controls</code> — interface de reprodução.</li>
  <li><code>autoplay muted</code> — inicia sozinho (apenas mudo).</li>
  <li><code>loop</code> — repete.</li>
  <li><code>preload="none" | "metadata" | "auto"</code> — economia de banda.</li>
</ul>
<p>Para players customizados, controle via JavaScript: <code>audio.play()</code>, <code>audio.pause()</code>, <code>audio.currentTime</code>.</p>
`
        },
        {
          id: 'html-iframe',
          title: '3. Iframes',
          summary: 'Embutir mapas, vídeos e páginas com segurança.',
          content: `
<h2>Incorporando conteúdo externo</h2>
<pre><code>&lt;iframe src="https://www.youtube.com/embed/VIDEO_ID"
        width="560" height="315"
        title="Vídeo aula de HTML"
        allowfullscreen
        loading="lazy"&gt;
&lt;/iframe&gt;</code></pre>

<h2>Segurança e atributos modernos</h2>
<pre><code>&lt;iframe src="https://app.exemplo.dev"
        title="Calculadora embutida"
        loading="lazy"        &lt;!-- carrega quando chega perto --&gt;
        referrerpolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin"&gt;
&lt;/iframe&gt;</code></pre>
<ul>
  <li><code>title</code> — acessibilidade (leitores de tela leem).</li>
  <li><code>sandbox</code> — restringe o que o conteúdo pode fazer.</li>
  <li><code>loading="lazy"</code> — não carrega até precisar.</li>
</ul>

<div class="callout callout-warning">
<strong>Só incorpore fontes confiáveis.</strong> Um iframe carrega uma página completa com seus próprios scripts. Sobre sites que oferecem embed oficial (YouTube, Maps, CodePen), use o código que eles fornecem.
</div>
`
        },
        {
          id: 'html-svg',
          title: '4. SVG Inline',
          summary: 'Gráficos vetoriais escaláveis direto no HTML.',
          content: `
<h2>SVG: nítido em qualquer zoom</h2>
<p>SVG é XML que desenha formas — perfeito para ícones e logos (sem pixels, sem borrar):</p>
<pre><code>&lt;svg width="100" height="100" viewBox="0 0 100 100"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="white" stroke-width="3" fill="none"/&gt;
&lt;/svg&gt;</code></pre>

<h2>Formas básicas</h2>
<pre><code>&lt;svg viewBox="0 0 200 100"&gt;
  &lt;rect x="10" y="10" width="80" height="80"/&gt;
  &lt;circle cx="150" cy="50" r="40"/&gt;
  &lt;line x1="0" y1="0" x2="200" y2="100" stroke="white"/&gt;
  &lt;path d="M 10 80 L 60 20 L 110 80 Z"/&gt;  &lt;!-- triângulo --&gt;
  &lt;text x="100" y="95" text-anchor="middle"&gt;SVG&lt;/text&gt;
&lt;/svg&gt;</code></pre>

<h2>Vantagens do SVG inline</h2>
<ul>
  <li>Estilizável com CSS (<code>svg { fill: white }</code>).</li>
  <li>Animável com CSS/JS.</li>
  <li>Poucos bytes para ícones.</li>
  <li>Acessível com <code>&lt;title&gt;</code> interno.</li>
</ul>
`
        }
      ]
    },
    {
      id: 'html-tabelas-formularios',
      title: 'Tabelas e Formulários',
      description: 'Dados tabulares e captura de entrada do usuário.',
      lessons: [
        {
          id: 'html-tabelas',
          title: '1. Tabelas Semânticas',
          summary: 'table, thead, tbody, th e caption.',
          content: `
<h2>Tabela completa e acessível</h2>
<pre><code>&lt;table&gt;
  &lt;caption&gt;Preços por plano&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Plano&lt;/th&gt;
      &lt;th scope="col"&gt;Preço&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Gratuito&lt;/th&gt;
      &lt;td&gt;R$ 0&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Pro&lt;/th&gt;
      &lt;td&gt;R$ 29&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;td colspan="2"&gt;Impostos inclusos&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>

<h2>Regras</h2>
<ul>
  <li><code>caption</code> — título da tabela (acessibilidade).</li>
  <li><code>scope</code> em <code>th</code> — diz se o cabeçalho é de coluna ou linha.</li>
  <li><code>colspan/rowspan</code> — células que ocupam várias posições.</li>
  <li><strong>Tabelas são para DADOS tabulares</strong> — layout com tabela é crime de guerra nos tempos modernos (use CSS!).</li>
</ul>
`
        },
        {
          id: 'html-formularios',
          title: '2. Formulários',
          summary: 'form, action, method e label.',
          content: `
<h2>A estrutura</h2>
<pre><code>&lt;form action="/api/cadastro" method="POST"&gt;
  &lt;label for="nome"&gt;Nome completo&lt;/label&gt;
  &lt;input type="text" id="nome" name="nome" required&gt;

  &lt;label for="email"&gt;E-mail&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;

  &lt;button type="submit"&gt;Criar conta&lt;/button&gt;
&lt;/form&gt;</code></pre>

<h3>Detalhes que separam amadores de profissionais</h3>
<ul>
  <li><code>label</code> + <code>for</code> apontando para o <code>id</code> do input — clicar no rótulo foca o campo e leitores de tela o anunciam.</li>
  <li><code>name</code> — é ESSA chave que chega no servidor. Sem name, o campo não é enviado!</li>
  <li><code>method</code> — GET (buscas, dados na URL) vs POST (envios sensíveis, no corpo).</li>
</ul>

<h2>Agrupando com fieldset</h2>
<pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Endereço de entrega&lt;/legend&gt;
  &lt;label for="cep"&gt;CEP&lt;/label&gt;
  &lt;input type="text" id="cep" name="cep" inputmode="numeric"&gt;
&lt;/fieldset&gt;</code></pre>
`
        },
        {
          id: 'html-inputs',
          title: '3. Inputs e seus Tipos',
          summary: 'Os 20+ tipos de input e quando usar cada um.',
          content: `
<h2>Tipos que mudam tudo</h2>
<pre><code>&lt;input type="email"&gt;      &lt;!-- teclado @ no mobile + validação --&gt;
&lt;input type="url"&gt;        &lt;!-- exige http(s):// --&gt;
&lt;input type="number" min="0" max="10" step="0.5"&gt;
&lt;input type="tel"&gt;        &lt;!-- teclado telefônico --&gt;
&lt;input type="date"&gt;       &lt;!-- calendário nativo! --&gt;
&lt;input type="time"&gt;
&lt;input type="range" min="0" max="100" value="50"&gt;
&lt;input type="color"&gt;      &lt;!-- seletor de cor --&gt;
&lt;input type="file" accept=".png,.jpg" multiple&gt;
&lt;input type="checkbox"&gt;   &lt;!-- múltipla escolha --&gt;
&lt;input type="radio" name="plano" value="pro"&gt; &lt;!-- UMA escolha --&gt;
&lt;input type="hidden" name="origem" value="landing"&gt;
&lt;input type="password"&gt;</code></pre>

<h2>Atributos universais</h2>
<pre><code>&lt;input placeholder="seu@email.com"     &lt;!-- dica dentro --&gt;
       required                        &lt;!-- obrigatório --&gt;
       maxlength="20"
       pattern="[0-9]{5}-[0-9]{3}"     &lt;!-- regex CEP --&gt;
       autocomplete="email"            &lt;!-- o navegador preenche! --&gt;
       disabled                        &lt;!-- cinza, não envia --&gt;
       readonly                        &lt;!-- só leitura, ENVIA --&gt;
       autofocus&gt;</code></pre>

<div class="callout callout-tip">
<strong>Mobile-first:</strong> o tipo certo de input troca o teclado do celular (número, @, calendário). Isso dobra a conversão de formulários em phones.
</div>
`
        },
        {
          id: 'html-select-textarea',
          title: '4. Select, Textarea e Datalist',
          summary: 'Menus, textos longos e autocompletar.',
          content: `
<h2>Select</h2>
<pre><code>&lt;label for="uf"&gt;Estado&lt;/label&gt;
&lt;select id="uf" name="uf"&gt;
  &lt;option value=""&gt;Selecione...&lt;/option&gt;
  &lt;optgroup label="Sudeste"&gt;
    &lt;option value="SP"&gt;São Paulo&lt;/option&gt;
    &lt;option value="RJ"&gt;Rio de Janeiro&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="Sul"&gt;
    &lt;option value="RS"&gt;Rio Grande do Sul&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;

&lt;!-- múltipla seleção (com Ctrl): --&gt;
&lt;select multiple size="4"&gt;...&lt;/select&gt;</code></pre>

<h2>Textarea</h2>
<pre><code>&lt;label for="bio"&gt;Biografia&lt;/label&gt;
&lt;textarea id="bio" name="bio"
          rows="4" cols="50"
          maxlength="500"
          placeholder="Conte sua história..."&gt;&lt;/textarea&gt;
<!-- valor inicial entra ENTRE as tags, não em value --&gt;</code></pre>

<h2>Datalist: input + sugestões</h2>
<pre><code>&lt;input list="linguagens" name="linguagem"&gt;
&lt;datalist id="linguagens"&gt;
  &lt;option value="JavaScript"&gt;
  &lt;option value="Python"&gt;
  &lt;option value="Rust"&gt;
&lt;/datalist&gt;
<!-- usuário pode digitar livre OU escolher uma sugestão --&gt;</code></pre>
`
        },
        {
          id: 'html-validacao',
          title: '5. Validação Nativa',
          summary: 'required, pattern e mensagens customizadas.',
          content: `
<h2>Validação sem JavaScript</h2>
<pre><code>&lt;form&gt;
  &lt;input type="email" required
         placeholder="voce@email.com"&gt;

  &lt;input type="password" required minlength="8"
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
         title="Mínimo 8 caracteres com maiúscula, minúscula e número"&gt;

  &lt;input type="number" min="18" max="120" value="25"&gt;

  &lt;input type="text" pattern="[0-9]{5}-[0-9]{3}"
         title="CEP no formato 00000-000"&gt;

  &lt;button&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>

<h2>Pseudo-classes de estado (CSS)</h2>
<pre><code>input:valid     { border-color: #666; }
input:invalid   { border-color: #fff; }
input:focus     { outline: 2px solid #fff; }
input:optional  { opacity: 0.8; }   &lt;!-- sem required --&gt;</code></pre>

<h2>Com JavaScript quando precisa</h2>
<pre><code>const form = document.querySelector("form");

form.addEventListener("submit", (e) =&gt; {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();      &lt;!-- mostra os balõezinhos nativos --&gt;
    return;
  }
  // segue o envio...
});</code></pre>

<div class="callout callout-tip">
<strong>Camadas:</strong> valide no HTML (rápido), no JS (experiência) e NO SERVIDOR (segurança — HTML e JS podem ser burlados).
</div>
`
        }
      ]
    },
    {
      id: 'html-semantica',
      title: 'Semântica e Acessibilidade',
      description: 'Tags significativas, SEO e ARIA.',
      lessons: [
        {
          id: 'html-semantic-tags',
          title: '1. Tags Semânticas',
          summary: 'header, main, section, article, aside e footer.',
          content: `
<h2>O esqueleto semântico</h2>
<pre><code>&lt;body&gt;
  &lt;header&gt;                      &lt;!-- topo do site --&gt;
    &lt;nav&gt;...menu...&lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;                        &lt;!-- conteúdo principal (UM por página) --&gt;
    &lt;article&gt;                   &lt;!-- conteúdo independente e completo --&gt;
      &lt;h1&gt;Aprenda HTML&lt;/h1&gt;
      &lt;section&gt;                 &lt;!-- agrupamento temático --&gt;
        &lt;h2&gt;Estrutura&lt;/h2&gt;
      &lt;/section&gt;
    &lt;/article&gt;

    &lt;aside&gt;                     &lt;!-- conteúdo tangencial --&gt;
      Links relacionados
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;© 2026 MonoCode&lt;/footer&gt;
&lt;/body&gt;</code></pre>

<h2>Por que semântica importa</h2>
<ul>
  <li><strong>SEO:</strong> buscadores entendem o que é importante.</li>
  <li><strong>Acessibilidade:</strong> leitores de tela pulam para main/nav direto.</li>
  <li><strong>Manutenção:</strong> código autoexplicativo.</li>
  <li><strong>div-sopa é o anti-padrão:</strong> <code>&lt;div class="header"&gt;</code> não significa nada para máquina nenhuma.</li>
</ul>
`
        },
        {
          id: 'html-nav',
          title: '2. Navegação Acessível',
          summary: 'nav, skip links e menu hamburger sem gambiarras.',
          content: `
<h2>Nav correto</h2>
<pre><code>&lt;nav aria-label="Navegação principal"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="/" aria-current="page"&gt;Início&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="cursos.html"&gt;Cursos&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;nav aria-label="Você está aqui"&gt;
  &lt;!-- pode ter vários nav na página, cada um com seu rótulo --&gt;
&lt;/nav&gt;</code></pre>

<h2>Skip link: pular direto ao conteúdo</h2>
<pre><code>&lt;body&gt;
  &lt;a href="#conteudo" class="skip-link"&gt;Pular para o conteúdo&lt;/a&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main id="conteudo"&gt;...&lt;/main&gt;
&lt;/body&gt;

&lt;style&gt;
.skip-link { position: absolute; left: -9999px; }
.skip-link:focus { left: 0; }   &lt;!-- aparece no Tab --&gt;
&lt;/style&gt;</code></pre>

<h2>Botão de menu mobile correto</h2>
<pre><code>&lt;button aria-expanded="false"
        aria-controls="menu-mobile"
        aria-label="Abrir menu"&gt;
  ☰
&lt;/button&gt;
&lt;ul id="menu-mobile" hidden&gt;...&lt;/ul&gt;
<!-- aria-expanded="true" + hidden removido quando aberto --&gt;</code></pre>
`
        },
        {
          id: 'html-acessibilidade',
          title: '3. Acessibilidade e ARIA',
          summary: 'alt, aria-label, roles e contraste.',
          content: `
<h2>ARIA: quando o HTML puro não basta</h2>
<pre><code>&lt;!-- Descrever o não-óbvio: --&gt;
&lt;button aria-label="Fechar janela"&gt;✕&lt;/button&gt;

&lt;!-- Estado dinâmico: --&gt;
&lt;button aria-expanded="true"&gt;Detalhes&lt;/button&gt;
&lt;input aria-invalid="true" aria-describedby="erro-email"&gt;
&lt;span id="erro-email" role="alert"&gt;E-mail inválido&lt;/span&gt;

&lt;!-- Região atualizada (chat, placar): --&gt;
&lt;div aria-live="polite"&gt;Novo item adicionado&lt;/div&gt;</code></pre>

<h2>Checklist de acessibilidade</h2>
<ul>
  <li>Todo <code>img</code> tem <code>alt</code> (vazio se decorativa).</li>
  <li>Todo input tem <code>label</code> associado.</li>
  <li>Contraste mínimo 4.5:1 (texto) e 3:1 (títulos grandes).</li>
  <li>Tudo navegável por teclado (Tab, Enter, Esc) — teste apertando Tab!</li>
  <li><code>lang</code> no html e títulos hierárquicos.</li>
</ul>

<div class="callout callout-warning">
<strong>Regra de ouro do ARIA:</strong> "Se você pode usar HTML nativo, use HTML nativo." <code>&lt;button&gt;</code> já é focável, responde a Enter e anuncia seu papel — um <code>&lt;div onclick&gt;</code> não é nada disso.
</div>
`
        },
        {
          id: 'html-seo',
          title: '4. SEO Técnico',
          summary: 'Meta tags, dados estruturados e performance.',
          content: `
<h2>SEO essencial</h2>
<pre><code>&lt;title&gt;MonoCode — Cursos Gratuitos de Programação&lt;/title&gt;
&lt;!-- 50-60 caracteres, palavras-chave à esquerda --&gt;

&lt;meta name="description"
      content="Aprenda JavaScript, Python e mais com exercícios interativos."/&gt;
&lt;!-- 150-160 caracteres: aparece no Google --&gt;

&lt;link rel="canonical" href="https://monocode.dev/cursos"&gt;
&lt;!-- evita conteúdo duplicado (www vs sem www) --&gt;

&lt;meta name="robots" content="index, follow"&gt;</code></pre>

<h2>Dados estruturados (rich snippets)</h2>
<pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "JavaScript do Zero",
  "provider": { "@type": "Organization", "name": "MonoCode" }
}
&lt;/script&gt;</code></pre>

<h2>Fatores de ranqueamento</h2>
<ul>
  <li><strong>Conteúdo:</strong> hierarquia de títulos correta, texto real (não tudo em imagem).</li>
  <li><strong>Performance:</strong> imagens otimizadas, <code>loading="lazy"</code>, Core Web Vitals.</li>
  <li><strong>Mobile-first:</strong> viewport + layout responsivo.</li>
  <li><strong>HTTPS</strong> — obrigatório.</li>
</ul>
`
        },
        {
          id: 'html-avancado',
          title: '5. HTML5 Avançado',
          summary: 'dialog, template, data-attributes e canvas.',
          content: `
<h2>dialog: modal nativo</h2>
<pre><code>&lt;dialog id="modal"&gt;
  &lt;h2&gt;Confirmar ação&lt;/h2&gt;
  &lt;button id="ok"&gt;Confirmar&lt;/button&gt;
&lt;/dialog&gt;

&lt;script&gt;
  const modal = document.querySelector("#modal");
  document.querySelector("#abrir").onclick = () =&gt; modal.showModal();
  modal.close();                    &lt;!-- com ::backdrop no CSS! --&gt;
&lt;/script&gt;</code></pre>

<h2>template: HTML inerte</h2>
<pre><code>&lt;template id="card-template"&gt;
  &lt;article class="card"&gt;
    &lt;h3 class="card-titulo"&gt;&lt;/h3&gt;
  &lt;/article&gt;
&lt;/template&gt;

&lt;script&gt;
  const tpl = document.querySelector("#card-template");
  const clone = tpl.content.cloneNode(true);
  clone.querySelector(".card-titulo").textContent = "Novo card";
  document.body.appendChild(clone);
&lt;/script&gt;</code></pre>

<h2>data-attributes: dados escondidos no HTML</h2>
<pre><code>&lt;button data-id="42" data-acao="excluir"&gt;Excluir&lt;/button&gt;

&lt;script&gt;
  btn.dataset.id;      &lt;!-- "42" --&gt;
  btn.dataset.acao;    &lt;!-- "excluir" --&gt;
&lt;/script&gt;</code></pre>

<h2>canvas: desenho programático</h2>
<pre><code>&lt;canvas id="tela" width="300" height="150"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const ctx = document.querySelector("#tela").getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(10, 10, 100, 80);      &lt;!-- retângulo --&gt;
  ctx.beginPath();
  ctx.arc(200, 75, 40, 0, Math.PI * 2);
  ctx.stroke();                        &lt;!-- círculo --&gt;
&lt;/script&gt;</code></pre>
`
        }
      ]
    }
  ]
};
