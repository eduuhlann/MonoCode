// MonoCode — Curso Completo de CSS3
// 7 módulos • 28 lições com explicações didáticas completas

export const CSS_COURSE = {
  id: 'css',
  name: 'CSS3',
  language: 'CSS',
  level: 'Iniciante a Intermediário',
  levelTag: 'iniciante',
  shortDesc: 'Estilize a web: seletores, box model, Flexbox, Grid, animações e layouts responsivos modernos.',
  description: 'Trilha completa de CSS3 cobrindo seletores, cores, tipografia, box model, posicionamento, Flexbox, Grid, responsividade, transições, animações e recursos modernos como variáveis e :has().',
  tags: ['Web', 'Frontend', 'Design', 'Responsivo'],
  modules: [
    {
      id: 'css-fundamentos',
      title: 'Fundamentos do CSS',
      description: 'Como o CSS funciona, seletores e o box model.',
      lessons: [
        {
          id: 'css-intro',
          title: '1. O que é CSS',
          summary: 'Folhas de estilo em cascata: a linguagem do design web.',
          content: `
<h2>CSS: aparência em camadas</h2>
<p>CSS (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets) descreve a apresentação do HTML: cores, espaçamentos, tipografia, posicionamento e animação. Uma regra CSS tem esta anatomia:</p>
<pre><code>seletor {
  propriedade: valor;
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
}</code></pre>
<p>O nome "cascata" vem do mecanismo de resolução: <strong>múltiplas regras podem afetar o mesmo elemento</strong>, e o navegador decide qual vence por origem, especificidade e ordem.</p>

<h2>Três formas de incluir CSS</h2>
<pre><code>&lt;!-- 1. Externo (profissional): --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;

&lt;!-- 2. Interno (protótipos): --&gt;
&lt;style&gt; p { color: white; } &lt;/style&gt;

&lt;!-- 3. Inline (evite — sem reuso): --&gt;
&lt;p style="color: white"&gt;texto&lt;/p&gt;</code></pre>

<h2>A mentalidade certa</h2>
<ul>
  <li>CSS não é "chute": cada propriedade tem algoritmo definido.</li>
  <li>Layout quebra? 90% das vezes é <code>display</code>, <code>box model</code> ou altura/pai.</li>
  <li>Aprenda <strong>Flexbox e Grid primeiro</strong> — eles resolvem o que antigamente exigia hacks.</li>
</ul>
`
        },
        {
          id: 'css-seletores',
          title: '2. Seletores',
          summary: 'Tipo, classe, id, atributo, pseudo-classes e combinadores.',
          content: `
<h2>Seletores básicos</h2>
<pre><code>p            { }    /* todos os parágrafos */
.card        { }    /* class="card" */
#menu        { }    /* id="menu" */
*            { }    /* tudo */
a[href]      { }    /* &lt;a&gt; com href */
input[type="email"] { }
button:disabled { }</code></pre>

<h2>Combinadores</h2>
<pre><code>nav a        { }    /* TODO &lt;a&gt; DENTRO de nav (qualquer nível) */
ul &gt; li      { }    /* li FILHO DIRETO de ul */
h2 + p       { }    /* p IMEDIATAMENTE após h2 */
h2 ~ p       { }    /* TODO p irmão (depois) de h2 */</code></pre>

<h2>Pseudo-classes: estado e posição</h2>
<pre><code>a:hover          { }   /* mouse em cima */
input:focus      { }   /* focado */
li:first-child   { }   /* primeiro filho */
li:last-child    { }   /* último */
li:nth-child(2n) { }   /* pares (2, 4, 6...) */
li:not(.ativo)   { }   /* todos exceto .ativo */
tr:nth-of-type(odd) { } /* linhas zebradas */</code></pre>

<h2>Pseudo-elementos: partes do elemento</h2>
<pre><code>p::first-line   { }   /* primeira linha */
p::first-letter { }   /* capitular */
p::before       { content: "→ "; }  /* gera conteúdo antes */
p::after        { content: " ✓"; }
input::placeholder { color: #666; }</code></pre>

<div class="callout callout-tip">
<strong>Exercício mental:</strong> ao ler um seletor, traduza para o português. <code>nav &gt; ul li:not(.ativo):hover</code> = "qualquer <code>li</code> dentro de <code>ul</code> filho direto de <code>nav</code>, que não tenha a classe ativo, quando o mouse estiver em cima".
</div>
`
        },
        {
          id: 'css-especificidade',
          title: '3. Especificidade e Cascata',
          summary: 'Porque sua regra "não funciona": o duelo de prioridades.',
          content: `
<h2>Quando regras competem</h2>
<p>Ordem de desempate do navegador:</p>
<ol>
  <li><strong>Origem:</strong> estilo inline &gt; &lt;style&gt;/arquivo &gt; padrão do navegador.</li>
  <li><strong>Especificidade:</strong> quem é mais específico vence.</li>
  <li><strong>Ordem:</strong> empatou? A última regra escrita vence.</li>
</ol>

<h2>Calculando especificidade (a,b,c)</h2>
<pre><code>a = ids | b = classes/atributos/pseudo-classes | c = elementos

p                     /* (0,0,1) */
.card p               /* (0,1,1) */
#menu .ativo          /* (1,1,0) */
#menu li.ativo:hover  /* (1,2,1) ← gigante */

/* Exemplo de duelo: */
#titulo { color: white; }          /* (1,0,0) VENCE */
h1.titulo { color: gray; }         /* (0,1,1) perde, mesmo depois */</code></pre>

<h2>!important: a bomba nuclear</h2>
<pre><code>.botao { color: white !important; }  /* vence de TUDO */</code></pre>
<p>Evite! Cria guerra de <code>!important</code> e vira impossível sobrescrever depois. Reservado para utilitários de último recurso e overrides de bibliotecas de terceiros.</p>

<h2>A saúde do seu CSS</h2>
<ul>
  <li>Prefira <strong>classes</strong> — especificidade baixa e previsível.</li>
  <li>Evite IDs e seletores gigantes.</li>
  <li>Uma convenção de nomenclatura (BEM, utilitários) evita 90% das guerras.</li>
</ul>
`
        },
        {
          id: 'css-box-model',
          title: '4. Box Model',
          summary: 'Content, padding, border, margin e box-sizing.',
          content: `
<h2>Tudo é uma caixa</h2>
<p>Cada elemento é uma caixa com 4 camadas concêntricas:</p>
<pre><code>┌──────────────── margin ─────────────────┐
│  ┌────────────── border ──────────────┐  │
│  │  ┌─────────── padding ───────────┐ │  │
│  │  │         CONTENT               │ │  │
│  │  └───────────────────────────────┘ │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘</code></pre>
<pre><code>.card {
  width: 300px;          /* largura do CONTEÚDO */
  padding: 20px;         /* respiro interno */
  border: 1px solid #333;
  margin: 16px;          /* distância externa */
  /* largura REAL = 300 + 40 + 2 = 342px! */
}</code></pre>

<h2>box-sizing: o final das contas erradas</h2>
<pre><code>*, *::before, *::after {
  box-sizing: border-box;   /* a regra que salva vidas */
}

/* Agente width INCLUI padding e border: */
.card {
  width: 300px;   /* de verdade 300px. Fim da surpresa. */
  padding: 20px;
}</code></pre>

<h2>Margin collapse</h2>
<pre><code>.a { margin-bottom: 30px; }
.b { margin-top: 20px; }
/* A distância entre eles NÃO é 50px — é 30px!
   Margens verticais adjacentes se FUNDem (maior vence). */</code></pre>

<h2>Margin negativa e auto</h2>
<pre><code>.centro { margin: 0 auto; }     /* centraliza horizontal (com width) */
.overlap { margin-top: -20px; } /* sobrepõe o de cima */</code></pre>
`
        }
      ]
    },
    {
      id: 'css-unidades-cores',
      title: 'Cores, Unidades e Variáveis',
      description: 'Sistemas de cor, medidas relativas e custom properties.',
      lessons: [
        {
          id: 'css-unidades',
          title: '1. Unidades de Medida',
          summary: 'px, em, rem, %, vh, vw e quando usar cada uma.',
          content: `
<h2>Absolutas vs relativas</h2>
<pre><code>/* ABSOLUTAS — sempre iguais: */
px       /* pixel: bordas, sombras, detalhes */

/* RELATIVAS — escalam com contexto: */
em   /* relativa à fonte do ELEMENTO (herda e multiplica!) */
rem  /* relativa à fonte do ROOT (16px por padrão) — estável */
%    /* relativa ao pai */
vw / vh  /* 1% da largura/altura da viewport */
vmin / vmax  /* menor/maior dimensão da tela */</code></pre>

<h2>em vs rem: a confusão que gera bugs</h2>
<pre><code>html { font-size: 16px; }

.card {
  font-size: 1.5rem;      /* 24px — sempre do root */
  padding: 1em;           /* 24px — da PRÓPRIA fonte! */
}
  .card p {
    font-size: 0.8em;     /* 19.2px (0.8 × 24) */
    padding: 1em;         /* 19.2px, não 24! */
  }

/* REM para tamanhos e espaçamentos globais (previsível).
   EM para componentes que escalam junto com a fonte local. */</code></pre>

<h2>Viewport units na prática</h2>
<pre><code>.hero {
  min-height: 100vh;      /* seção que ocupa a tela inteira */
  padding: 5vmin;         /* respiro proporcional à tela */
}

h1 { font-size: clamp(2rem, 5vw, 4rem); }
/* mínimo 2rem | ideal 5% da tela | máximo 4rem — tipografia fluida! */</code></pre>

<div class="callout callout-tip">
<strong>Regra de bolso:</strong> tipografia e espaçamento em <code>rem</code>; larguras de componentes em <code>%</code>/<code>fr</code>; toques finos em <code>px</code>; telas cheias em <code>vh</code>.
</div>
`
        },
        {
          id: 'css-cores',
          title: '2. Cores',
          summary: 'hex, rgb, hsl e transparências.',
          content: `
<h2>As três sintaxes</h2>
<pre><code>/* HEX — compacta: */
color: #FFFFFF;     /* branco */
color: #FFF;        /* abreviado */
color: #FFFFFF80;   /* com alpha (50%) */

/* RGB — aditivo: */
color: rgb(255, 255, 255);
color: rgba(255, 255, 255, 0.5);   /* 50% transparente */

/* HSL — intuitiva (a escolha dos designers): */
color: hsl(0, 0%, 100%);
/*      │   │   └ luminosidade: 0% preto → 100% branco
        │   └ saturação: 0% cinza → 100% vibrante
        └ matiz: 0-360 (a roda de cores) */

color: hsl(210, 100%, 50%);   /* um azul */
color: hsl(210, 100%, 70%);   /* MESMO azul, mais claro */
color: hsl(210, 100%, 30%);   /* MESMO azul, mais escuro */</code></pre>

<h2>Por que HSL ganha</h2>
<p>Quer 5 variações da mesma cor? Com hex você consulta paleta; com HSL mexe em UMA variável:</p>
<pre><code>:root {
  --matiz: 210;
}
.btn-primary  { background: hsl(var(--matiz), 90%, 50%); }
.btn-primary:hover { background: hsl(var(--matiz), 90%, 40%); }
.badge-info   { background: hsl(var(--matiz), 40%, 20%); }</code></pre>

<h2>Funções de cor modernas</h2>
<pre><code>color-mix(in srgb, white 30%, blue);   /* mistura cores! */
oklch(70% 0.1 250);                     /* espaço perceptual (uniforme) */</code></pre>
`
        },
        {
          id: 'css-variaveis',
          title: '3. Custom Properties (Variáveis CSS)',
          summary: ':root, var(), temas e escopo.',
          content: `
<h2>Seu sistema de design em CSS puro</h2>
<pre><code>:root {
  /* nomes SEMÂNTICOS, não visuais: */
  --bg: #000000;
  --bg-card: #080808;
  --texto: #FFFFFF;
  --texto-suave: #A0A0A0;
  --borda: #242424;
  --espaco: 8px;
  --raio: 4px;
}

.card {
  background: var(--bg-card);
  color: var(--texto);
  border: 1px solid var(--borda);
  padding: calc(var(--espaco) * 4);   /* 32px */
  border-radius: var(--raio);
}</code></pre>

<h2>var() com fallback</h2>
<pre><code>color: var(--cor-destaque, #FFFFFF);
/* usa #FFFFFF se --cor-destaque não existir */</code></pre>

<h2>Temas: trocando variáveis por escopo</h2>
<pre><code>:root         { --bg: #000; --texto: #fff; }   /* dark (padrão) */
[data-theme="light"] {
  --bg: #fff;
  --texto: #111;
}

body {
  background: var(--bg);
  color: var(--texto);
  transition: background 0.3s;   /* troca suave! */
}</code></pre>
<pre><code>// JS troca o tema inteiro com UMA linha:
document.documentElement.dataset.theme = "light";</code></pre>

<div class="callout callout-tip">
<strong>Nomeie pelo PAPEL</strong> (<code>--cor-erro</code>, <code>--espaco-card</code>), não pelo valor (<code>--vermelho</code>). Quando o vermelho virar laranja, o nome continua fazendo sentido.
</div>
`
        }
      ]
    },
    {
      id: 'css-texto',
      title: 'Tipografia e Texto',
      description: 'Fontes, espaçamento e acabamento visual.',
      lessons: [
        {
          id: 'css-fontes',
          title: '1. Fontes',
          summary: 'font-family, size, weight e a stack ideal.',
          content: `
<h2>A declaração completa</h2>
<pre><code>body {
  font-family: "Inter", -apple-system, "Segoe UI", sans-serif;
  /*              │           │            └─ fallback genérico
                  │           └─ se não tiver Inter
                  └─ primeira opção */

  font-size: 16px;
  font-weight: 400;      /* 100-900 */
  line-height: 1.6;      /* sem unidade: proporcional à fonte */
}

h1 {
  font-weight: 800;      /* pesos modernos, não só bold */
  letter-spacing: -0.03em;  /* títulos grandes gostam de apertar */
}</code></pre>

<h2>Shorthands</h2>
<pre><code>/* font: weight size/line-height family (nesta ordem!) */
font: 700 1.25rem/1.3 "Inter", sans-serif;</code></pre>

<h2>Escala tipográfica harmônica</h2>
<pre><code>:root {
  --texto-base: 1rem;
  --texto-lg: 1.25rem;     /* ×1.25 */
  --texto-xl: 1.56rem;
  --texto-2xl: 1.95rem;
  --texto-3xl: 2.44rem;
}
/* razão fixa (1.25) = hierarquia musical, não aleatória */</code></pre>

<div class="callout callout-tip">
<strong>line-height sem unidade:</strong> <code>line-height: 1.6</code> (e não <code>160%</code>) evita herança multiplicada — filhos com fontes diferentes calculam a partir da própria altura.
</div>
`
        },
        {
          id: 'css-google-fonts',
          title: '2. Fontes Externas',
          summary: 'Google Fonts, @font-face e font-display.',
          content: `
<h2>Google Fonts</h2>
<pre><code>&lt;!-- no head (a forma recomendada): --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
&lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&amp;display=swap" rel="stylesheet"&gt;</code></pre>
<pre><code>/* no CSS: */
body { font-family: "Inter", sans-serif; }</code></pre>
<p>Carregue <strong>apenas os pesos usados</strong> (400;600;800) — cada peso é um arquivo!</p>

<h2>@font-face: fontes próprias</h2>
<pre><code>@font-face {
  font-family: "MonoCode";
  src: url("monocode.woff2") format("woff2"),
       url("monocode.woff") format("woff");
  font-weight: 400;
  font-display: swap;    /* mostra fallback e TROCA quando carregar */
}

@font-face {
  font-family: "MonoCode";
  src: url("monocode-bold.woff2") format("woff2");
  font-weight: 700;      /* mesmo nome, peso diferente */
}</code></pre>

<h2>Fontes de sistema: zero download</h2>
<pre><code>font-family: system-ui, sans-serif;
/* usa a fonte nativa do SO: instantânea e familiar */</code></pre>
`
        },
        {
          id: 'css-texto-propriedades',
          title: '3. Propriedades de Texto',
          summary: 'Alinhamento, decoração, quebras e truncamento.',
          content: `
<h2>Controle fino</h2>
<pre><code>.texto {
  text-align: justify;        /* justificado (cuidado: rios!) */
  text-align: center;

  text-decoration: underline dotted;  /* linha pontilhada */
  text-transform: uppercase;   /* CAIXA ALTA via CSS */
  letter-spacing: 0.05em;      /* espaçamento entre letras */
  word-spacing: 0.2em;

  text-indent: 2em;            /* recuo de parágrafo */
  white-space: nowrap;         /* nunca quebra linha */
  word-break: break-word;      /* quebra palavras longas (URLs) */
}</code></pre>

<h2>Ellipsis: texto truncado com ...</h2>
<pre><code>.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;    /* as 3 JUNTAS, senão não funciona */
}

/* Multilinha (2 linhas e corta): */
.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}</code></pre>

<h2>Sombra e destaque</h2>
<pre><code>h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }

.destaque {
  background: linear-gradient(transparent 60%, #333 60%);
  /* efeito marca-texto em texto */
}</code></pre>
`
        },
        {
          id: 'css-bordas-sombras',
          title: '4. Bordas, Sombras e Gradientes',
          summary: 'Acabamento profissional de superfícies.',
          content: `
<h2>Bordas</h2>
<pre><code>.card {
  border: 1px solid #333;
  border-radius: 8px;           /* cantos */
  border-radius: 50%;           /* círculo perfeito */
  outline: 2px solid #fff;      /* fora da borda, sem mexer no layout */
  outline-offset: 4px;          /* longe do elemento (foco!) */
}</code></pre>

<h2>Sombras: profundidade realista</h2>
<pre><code>/* box-shadow: x y blur spread cor */
.card {
  box-shadow: 0 1px 2px rgba(0,0,0,0.3);            /* sutil, rente */
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);          /* flutuando */
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);    /* spread negativo */
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);      /* sombra INTERNA */
}

/* Múltiplas camadas = realismo: */
.profunda {
  box-shadow:
    0 1px 1px rgba(0,0,0,0.4),
    0 2px 4px rgba(0,0,0,0.4),
    0 8px 16px rgba(0,0,0,0.4);
}</code></pre>

<h2>Gradientes</h2>
<pre><code>/* linear: direção + paradas de cor */
background: linear-gradient(135deg, #111, #333);

/* com transparência (efeito "vidro"): */
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0));

/* radial: */
background: radial-gradient(circle at 50% 0%, #222, #000);

/* cônicos (bordas animadas, gráficos de pizza): */
background: conic-gradient(#fff 25%, #333 0 50%, #fff 0 75%, #333 0);</code></pre>
`
        }
      ]
    },
    {
      id: 'css-layout',
      title: 'Layout e Posicionamento',
      description: 'Display, position, Flexbox e Grid.',
      lessons: [
        {
          id: 'css-display',
          title: '1. Display',
          summary: 'block, inline, inline-block, none e flow.',
          content: `
<h2>Os modelos de fluxo</h2>
<pre><code>/* BLOCK: largura total, quebra linha antes e depois */
div, p, h1 { display: block; }

/* INLINE: flui no texto, ignora width/height */
span, a, strong { display: inline; }

/* INLINE-BLOCK: flui na linha, MAS aceita width/height */
.botao { display: inline-block; width: 120px; height: 40px; }

/* NONE: some do layout e da tela (diferente de visibility!) */
.escondido { display: none; }

/* Visibility: invisível, mas ocupa o espaço */
.fantasma { visibility: hidden; }</code></pre>

<h2>Elementos que viram layout</h2>
<pre><code>display: flex;    /* container flexbox — 1 dimensão */
display: grid;    /* container grid — 2 dimensões */
display: contents; /* o elemento "some", filhos sobem */
display: flow-root; /* resolve colapso de margens/floots */</code></pre>

<h2>Escondendo com acessibilidade</h2>
<pre><code>.visualmente-oculto {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
/* display:none tira do leitor de tela também!
   Esta classe esconde VISUALMENTE mas continua acessível. */</code></pre>
`
        },
        {
          id: 'css-position',
          title: '2. Position',
          summary: 'relative, absolute, fixed, sticky e z-index.',
          content: `
<h2>Os cinco valores</h2>
<pre><code>/* STATIC (padrão): o fluxo normal manda. */

/* RELATIVE: desloca EM RELAÇÃO a si mesmo — o espaço original
   continua reservado (os outros nem notam). */
.caixa { position: relative; top: 10px; left: 20px; }

/* ABSOLUTE: sai do fluxo. Posiciona em relação ao ANCESTRAL
   posicionado mais próximo (relative/absolute/fixed). */
.pai { position: relative; }        /* o âncora */
.badge {
  position: absolute;
  top: 0; right: 0;                 /* colado no canto do pai */
}

/* FIXED: fixo na VIEWPORT (sobrevive ao scroll) */
.header { position: fixed; top: 0; left: 0; right: 0; }

/* STICKY: híbrido — rola normal até grudar: */
.menu {
  position: sticky;
  top: 72px;        /* gruda quando chega aqui */
}</code></pre>

<h2>A dupla dinâmica: relative + absolute</h2>
<pre><code>.card {                    /* âncora */
  position: relative;
}
.card .fechar {            /* posicionado DENTRO do card */
  position: absolute;
  top: 8px; right: 8px;
}</code></pre>

<h2>z-index e contexto de empilhamento</h2>
<pre><code>.modal { z-index: 1000; }    /* quem tem maior z, fica na frente */
/* z-index SÓ funciona em elementos posicionados (não static).
   Cuidado: z-index: 99999 não vence um contexto de empilhamento
   criado por um pai com transform/opacity/filter! */</code></pre>
`
        },
        {
          id: 'css-flexbox',
          title: '3. Flexbox Completo',
          summary: 'O layout de uma dimensão que resolve 80% dos casos.',
          content: `
<h2>O container</h2>
<pre><code>.container {
  display: flex;
  flex-direction: row;       /* row | column | row-reverse */
  justify-content: space-between;  /* EIXO PRINCIPAL */
  align-items: center;       /* EIXO CRUZADO */
  gap: 16px;                 /* espaçamento entre itens! */
  flex-wrap: wrap;           /* permite quebrar linha */
}</code></pre>

<h2>justify-content (eixo principal)</h2>
<pre><code>flex-start | center | flex-end | space-between | space-around | space-evenly

/* space-between:  item║item║item  (nas pontas)
   space-evenly:  ║item║item║item   (espaços iguais) */</code></pre>

<h2>Os itens</h2>
<pre><code>.item {
  flex-grow: 1;      /* estica para ocupar o espaço (proporção) */
  flex-shrink: 1;    /* encolhe quando falta espaço */
  flex-basis: 200px; /* tamanho inicial antes de esticar */
  flex: 1;           /* shorthand de grow:1 shrink:1 basis:0 */
  align-self: flex-end;  /* alinhamento individual no eixo cruzado */
  order: -1;         /* reordena visualmente */
}

/* O clássico layout: sidebar fixa + conteúdo fluido */
.layout { display: flex; }
.sidebar { flex: 0 0 260px; }   /* não cresce, não encolhe: 260px */
.conteudo { flex: 1; }</code></pre>

<h2>Centro perfeito (o meme resolvido)</h2>
<pre><code>.centro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}</code></pre>

<div class="callout callout-tip">
<strong>Diagnóstico rápido:</strong> eixo principal = direção do flex-direction. Alinhamentos "errados" geralmente são justify/align trocados porque o container está em column.
</div>
`
        },
        {
          id: 'css-grid',
          title: '4. CSS Grid',
          summary: 'Layout de duas dimensões: linhas, colunas e áreas.',
          content: `
<h2>O container grid</h2>
<pre><code>.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;  /* 3 colunas */
  grid-template-columns: repeat(3, 1fr); /* 3 iguais */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* ↑ o Responsive SEM media query: quantas colunas de 250px couberem */
  gap: 24px;                  /* linha E coluna */
  grid-template-rows: auto 1fr auto;
}</code></pre>

<h2>Posicionando itens</h2>
<pre><code>.item {
  grid-column: 1 / 3;      /* da linha 1 até a 3 (ocupa 2 colunas) */
  grid-column: span 2;     /* ocupa 2 colunas */
  grid-row: 2;
}</code></pre>

<h2>Grid areas: layout com cara de desenho</h2>
<pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Mobile: uma coluna só — sem touch nos filhos! */
@media (max-width: 768px) {
  .layout {
    grid-template-areas: "header" "main" "sidebar" "footer";
    grid-template-columns: 1fr;
  }
}</code></pre>

<h2>Grid ou Flexbox?</h2>
<table>
<tr><th>Flexbox</th><th>Grid</th></tr>
<tr><td>1 dimensão (linha OU coluna)</td><td>2 dimensões (linhas E colunas)</td></tr>
<tr><td>Conteúdo define o layout</td><td>Layout define o conteúdo</td></tr>
<tr><td>Menus, toolbars, barras</td><td>Páginas, galerias, dashboards</td></tr>
</table>
<p>Use os dois juntos: Grid no esqueleto da página, Flex nos componentes internos.</p>
`
        }
      ]
    },
    {
      id: 'css-responsivo',
      title: 'Responsividade',
      description: 'Media queries, mobile-first e unidades fluidas.',
      lessons: [
        {
          id: 'css-media-queries',
          title: '1. Media Queries',
          summary: 'Breakpoints, condições e features.',
          content: `
<h2>Aplicando estilos por condição</h2>
<pre><code>@media (max-width: 768px) {
  .sidebar { display: none; }
  .grid { grid-template-columns: 1fr; }
}

/* Múltiplas condições: */
@media (min-width: 768px) and (max-width: 1024px) { ... }

@media (orientation: landscape) { ... }

@media (prefers-color-scheme: light) {
  :root { --bg: #fff; --texto: #111; }   /* respeita o tema do SO! */
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }      /* acessibilidade real */
}

@media print {
  .no-print { display: none; }           /* impressão limpa */
}</code></pre>

<h2>Breakpoints: por que 768px?</h2>
<p>Breakpoints clássicos: <strong>480px</strong> (celular), <strong>768px</strong> (tablet), <strong>1024px</strong> (laptop), <strong>1440px</strong> (desktop). Mas a regra moderna é outra: <strong>adicione breakpoints onde o layout QUEBRA, não onde um dispositivo muda</strong>.</p>
`
        },
        {
          id: 'css-mobile-first',
          title: '2. Mobile First',
          summary: 'Base mobile e aprimoramento progressivo.',
          content: `
<h2>Porque começar pelo celular</h2>
<p>Mais de 60% do tráfego é mobile. A estratégia mobile-first: escreva o CSS do celular (o mais restritivo) e use <code>min-width</code> para <em>adicionar</em> complexidade:</p>
<pre><code>/* BASE = celular (sem media query): */
.grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.menu { display: none; }        /* hamburger no mobile */

/* TABLET — a partir de 768px: */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* DESKTOP — a partir de 1024px: */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  .menu { display: flex; }      /* menu completo volta */
}</code></pre>

<h2>Vantagens</h2>
<ul>
  <li>Performance: celular baixa o CSS essencial, sem overrides.</li>
  <li>Conteúdo priorizado: sem espaço para enrolação no mobile.</li>
  <li>Desktop-first com <code>max-width</code> gera cascata de "desfazer" estilos.</li>
</ul>
`
        },
        {
          id: 'css-unidades-flexiveis',
          title: '3. Tipografia e Layout Fluidos',
          summary: 'clamp, %, fr e o fim de muitos breakpoints.',
          content: `
<h2>clamp(): fluido com limites</h2>
<pre><code>h1 {
  /* min | ideal | max */
  font-size: clamp(2rem, 5vw + 0.5rem, 4rem);
  /* celular: 2rem | 1080px: ~3.2rem | 4K: 4rem */
}

.section {
  padding: clamp(1.5rem, 4vw, 4rem);
}

.container {
  width: min(1200px, 100% - 2rem);   /* nunca passa de 1200 nem encosta nas bordas */
  margin-inline: auto;               /* centraliza (escrita horizontal) */
}</code></pre>

<h2>Grid fluido sem media query</h2>
<pre><code>.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  /* 4 colunas em 1440px, 2 no tablet, 1 no celular — AUTOMÁTICO */
}</code></pre>

<h2>Imagens responsivas</h2>
<pre><code>img {
  max-width: 100%;     /* nunca estoura o pai */
  height: auto;        /* mantém proporção */
}

/* cortar sem deformar: */
.cover {
  width: 100%;
  height: 300px;
  object-fit: cover;      /* como background-size: cover */
  object-position: center;
}</code></pre>
`
        },
        {
          id: 'css-container-queries',
          title: '4. Container Queries',
          summary: 'Responsivo ao CONTAINER, não à tela — o futuro chegou.',
          content: `
<h2>O problema que elas resolvem</h2>
<p>Media queries respondem à <strong>tela</strong>. Mas um card numa sidebar estreita precisa ser compacto <em>mesmo num monitor 4K</em>. Container queries respondem ao <strong>elemento pai</strong>:</p>
<pre><code>/* O container declara-se: */
.card-wrapper {
  container-type: inline-size;    /* observa a própria largura */
  container-name: card;
}

/* Os filhos reagem ao tamanho DO CONTAINER: */
@container (min-width: 400px) {
  .card {
    display: flex;         /* lado a lado quando há espaço */
    gap: 1rem;
  }
}

@container (max-width: 399px) {
  .card {
    display: block;        /* empilhado quando aperta */
  }
}</code></pre>

<h2>O mesmo componente, comportamentos distintos</h2>
<pre><code>/* O MESMO .card: */
/* - sidebar de 300px  → versão compacta  */
/* - main de 800px     → versão completa  */
/* Sem duplicar código, sem JavaScript! */</code></pre>

<div class="callout callout-tip">
<strong>Regra prática:</strong> layout da <strong>página</strong> → media query. Componentes <strong>reutilizáveis</strong> em qualquer contexto → container query.
</div>
`
        }
      ]
    },
    {
      id: 'css-animacoes',
      title: 'Transições e Animações',
      description: 'Movimento, interação e micro-UX.',
      lessons: [
        {
          id: 'css-transicoes',
          title: '1. Transições',
          summary: 'transition, timing functions e boas propriedades.',
          content: `
<h2>Animações de estado</h2>
<pre><code>.botao {
  background: #111;
  transform: translateY(0);
  transition: background 0.2s ease, transform 0.2s ease;
}

.botao:hover {
  background: #333;
  transform: translateY(-2px);   /* sobe suavemente */
}

/* Shorthand: transition: propriedade duração curva atraso; */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;</code></pre>

<h2>Curvas de animação</h2>
<pre><code>ease        /* padrão: início suave */
ease-in     /* acelera (entrando algo pesado) */
ease-out    /* desacelera (chegando ao destino) */
linear      /* mecânico (spinners) */
cubic-bezier(0.34, 1.56, 0.64, 1)  /* overshoot "elástico" */
steps(4)    /* saltos discretos */</code></pre>

<h2>O que animar (e o que JAMAIS)</h2>
<pre><code>/* ✅ Baratos (GPU): */
transform: translate() scale() rotate();
opacity: 0.5;

/* ❌ Caros (recalculam layout inteiro): */
width, height, top, left, margin, padding</code></pre>

<div class="callout callout-warning">
<strong>Duração certa:</strong> 100-300ms para micro-interações. 500ms+ parece lag; 100ms- parece bug. E sempre respeite <code>prefers-reduced-motion</code>.
</div>
`
        },
        {
          id: 'css-keyframes',
          title: '2. Keyframes e Animation',
          summary: 'Animações completas com @keyframes.',
          content: `
<h2>@keyframes</h2>
<pre><code>@keyframes entrar {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Com percentuais (controle total): */
@keyframes pulsar {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.elemento {
  animation: entrar 0.5s ease-out;
  animation: pulsar 2s ease-in-out infinite;  /* forever */
  animation: entrar 0.5s ease-out 0.2s 2 backwards;
  /*          nome  dur curva    atraso reps  estado inicial */
}</code></pre>

<h2>Animações em sequência</h2>
<pre><code>.modal {
  animation:
    fadeIn 0.3s ease-out,
    subir 0.4s ease-out 0.1s;    /* múltiplas, com delay */
}</code></pre>

<h2>Pausar e controlar</h2>
<pre><code>.animacao:hover { animation-play-state: paused; }
.animacao.rodando { animation-play-state: running; }</code></pre>
`
        },
        {
          id: 'css-transform',
          title: '3. Transform',
          summary: 'translate, scale, rotate e 3D.',
          content: `
<h2>As funções</h2>
<pre><code>.caixa {
  transform: translate(10px, 20px);   /* move (x, y) */
  transform: translateX(50%);
  transform: scale(1.1);              /* escala */
  transform: rotate(45deg);
  transform: skew(10deg);             /* inclina */
  transform: rotate(15deg) scale(1.2) translateX(10px);
  /* ↑ combinadas: da direita para a esquerda! */
}</code></pre>

<h2>Truques com transform</h2>
<pre><code>/* Centralização total (alternativa ao flex): */
.caixa {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Ícone de menu virando X: */
.hamburguer.ativo { transform: rotate(90deg); }

/* Zoom suave em cards: */
.card img { transition: transform 0.3s; }
.card:hover img { transform: scale(1.05); }</code></pre>

<h2>3D e perspectiva</h2>
<pre><code>.cena { perspective: 800px; }        /* profundidade no pai */

.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card:hover {
  transform: rotateY(180deg);       /* flip de carta */
}</code></pre>
`
        },
        {
          id: 'css-hover',
          title: '4. Estados, Hover e Micro-interações',
          summary: ':hover, :focus-visible e feedback de UI.',
          content: `
<h2>Estados de interação</h2>
<pre><code>.botao { transition: all 0.15s; }

.botao:hover   { background: #333; }      /* mouse em cima */
.botao:active  { transform: scale(0.97);  /* SEGURANDO o clique */ }

/* foco VISÍVEL só para teclado (não para clique): */
.botao:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

/* campos de formulário: */
.input:focus { border-color: #fff; }
.input:invalid:not(:placeholder-shown) { border-color: #888; }

/* links visitados: */
a:visited { color: #999; }</code></pre>

<h2>Padrões de micro-interação</h2>
<pre><code>/* 1. Link com sublinhado animado: */
.link {
  position: relative;
  text-decoration: none;
}
.link::after {
  content: "";
  position: absolute;
  left: 0; bottom: -2px;
  width: 100%; height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s;
}
.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* 2. Tooltip só com CSS: */
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  padding: 4px 8px;
  background: #222;
  white-space: nowrap;
}</code></pre>

<div class="callout callout-tip">
<strong>Micro-UX:</strong> todo elemento clicável merece resposta &lt; 200ms. hover/active/focus visíveis = interface que "respira" sob o cursor.
</div>
`
        }
      ]
    },
    {
      id: 'css-moderno',
      title: 'CSS Moderno',
      description: 'Recursos de ponta que eliminam JavaScript desnecessário.',
      lessons: [
        {
          id: 'css-nesting',
          title: '1. Nesting Nativo',
          summary: 'Aninhamento de seletores sem Sass.',
          content: `
<h2>O aninhamento chegou ao CSS puro</h2>
<pre><code>/* Antes (20 anos de repetição): */
.card { ... }
.card .titulo { ... }
.card:hover { ... }
.card .titulo span { ... }

/* Agora — nativo em todos os navegadores modernos: */
.card {
  background: #080808;

  .titulo {              /* = .card .titulo */
    color: #fff;
    font-size: 1.25rem;

    span { color: #999; }
  }

  &:amp;:hover {          /* & = o próprio .card */
    background: #111;
    transform: translateY(-2px);
  }

  &amp;:focus-visible { outline: 2px solid #fff; }

  + .card { margin-top: 1rem; }   /* irmão seguinte que seja .card */
}</code></pre>

<div class="callout callout-tip">
<strong>Limite a 2-3 níveis.</strong> Aninhamento profundo reproduz o mesmo problema de especificidade dos seletores gigantes — agora só indentado.
</div>
`
        },
        {
          id: 'css-has-selectors',
          title: '2. :has() e Seletores Relacionais',
          summary: 'O "seletor pai" que mudou tudo.',
          content: `
<h2>:has() — estilizar PAIS</h2>
<pre><code>/* O card que CONTÉM uma imagem ganha outro layout: */
.card:has(img) {
  display: grid;
  grid-template-columns: 120px 1fr;
}

/* Formulário inválido desabilita o botão (sem JS!): */
form:invalid button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
}

/* Label do campo com erro: */
label:has(+ input:invalid) { color: #fff; }

/* Body com modal aberto — trava o scroll: */
body:has(dialog[open]) { overflow: hidden; }</code></pre>

<h2>Combinações poderosas</h2>
<pre><code>/* Item com checkbox marcado: riscado */
li:has(input:checked) span {
  text-decoration: line-through;
}

/* Menu que abre sem JS: */
details:has(summary:hover) { ... }

/* Dark mode automático com picture: */
header:has(img[src$="dark.png"]) { background: #000; }</code></pre>

<div class="callout callout-tip">
Durante anos o CSS "não conseguia olhar para cima". <code>:has()</code> resolve isso — e corta toneladas de JavaScript de troca de classes.
</div>
`
        },
        {
          id: 'css-func-matematica',
          title: '3. calc, min, max e clamp',
          summary: 'Matemática dentro do CSS.',
          content: `
<h2>As quatro funções</h2>
<pre><code>.caixa {
  /* calc: operações misturando unidades */
  width: calc(100% - 260px);              /* total menos sidebar */
  padding: calc(var(--espaco) * 2);
  height: calc(100vh - 72px);             /* tela menos navbar */

  /* min: o MENOR valor vence (teto) */
  width: min(600px, 100%);                /* 600px ou menos no celular */

  /* max: o MAIOR vence (piso) */
  font-size: max(1rem, 2vw);              /* nunca menor que 1rem */

  /* clamp: min | ideal | max */
  width: clamp(280px, 50vw, 800px);
}</code></pre>

<h2>Exemplos do mundo real</h2>
<pre><code>/* Header fixo + conteúdo compensando a altura: */
body { padding-top: calc(72px + 1rem); }

/* Espaçamento que cresce com a tela: */
section { padding-block: clamp(2rem, 6vw, 6rem); }

/* Grid com gap fluido: */
.grid { gap: clamp(1rem, 2.5vw, 2.5rem); }</code></pre>

<div class="callout callout-tip">
Dentro de <code>calc()</code>, <strong>espaços em volta dos operadores são obrigatórios</strong>: <code>calc(100%-20px)</code> é inválido, <code>calc(100% - 20px)</code> funciona.
</div>
`
        },
        {
          id: 'css-arquitetura',
          title: '4. Arquitetura e Organização',
          summary: 'BEM, utilitários e CSS escalável.',
          content: `
<h2>O problema da escala</h2>
<p>10 mil linhas de CSS sem convenção = medo de mudar qualquer coisa (o famoso "CSS de Herança").</p>

<h2>BEM: Block__Element--Modifier</h2>
<pre><code>.card {}                     /* Bloco: componente independente */
.card__titulo {}             /* Elemento: parte do bloco */
.card__acao--primaria {}     /* Modificador: variação */

&lt;article class="card card--destaque"&gt;
  &lt;h3 class="card__titulo"&gt;...&lt;/h3&gt;
  &lt;button class="card__acao card__acao--primaria"&gt;Comprar&lt;/button&gt;
&lt;/article&gt;</code></pre>

<h2>Utility-first (mentalidade Tailwind)</h2>
<pre><code>.mt-2 { margin-top: 0.5rem; }
.p-4 { padding: 1rem; }
.text-center { text-align: center; }
.flex { display: flex; }

&lt;div class="card p-4 mt-2 flex text-center"&gt;...&lt;/div&gt;</code></pre>

<h2>Checklist de CSS saudável</h2>
<ul>
  <li>Variáveis para TODO valor repetido (cores, espaços, raios).</li>
  <li>Especificidade baixa e uniforme (só classes).</li>
  <li>Componentes isolados que não vazam estilos.</li>
  <li><code>rem</code> para escala, <code>px</code> para detalhes.</li>
  <li>Mobile-first + clamp/auto-fit para menos breakpoints.</li>
  <li>Zero <code>!important</code> (ou quase).</li>
</ul>
`
        }
      ]
    }
  ]
};
