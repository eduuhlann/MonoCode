// MonoCode — Curso Completo de React Native
// 6 módulos • 26 lições com explicações didáticas completas

export const REACT_NATIVE_COURSE = {
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
        {
          id: 'rn-intro',
          title: '1. O que é React Native',
          summary: 'Apps nativos com JavaScript: como funciona a mágica.',
          content: `
<h2>Uma base, duas lojas</h2>
<p>React Native (criado pelo Meta em 2015) permite escrever apps iOS e Android com <strong>JavaScript e React</strong>. A diferença crucial para Cordova/PWA: o código React controla <strong>componentes nativos de verdade</strong> — não uma página web disfarçada.</p>

<h2>Como funciona</h2>
<pre><code>Seu código React/JS
      │
      ▼ (ponte JSI / bridge)
Componentes nativos
      │
      ├──&gt; iOS:   UIView, UILabel...
      └──&gt; Android: android.view.View...

&lt;View&gt;   → ViewGroup / UIView (container)
&lt;Text&gt;   → TextView / UILabel (texto)
&lt;Image&gt;  → ImageView (imagem)</code></pre>
<p>O resultado: interface com aparência, performance e comportamento nativos, mantendo um único codebase.</p>

<h2>Vantagens e limitações</h2>
<ul>
  <li><strong>+</strong> Um time, um código, duas plataformas.</li>
  <li><strong>+</strong> Hot reload: vê a mudança em segundos.</li>
  <li><strong>+</strong> Ecossistema npm inteiro disponível.</li>
  <li><strong>−</strong> Ajustes finos nativos às vezes exigem Swift/Kotlin.</li>
  <li><strong>−</strong> Apps com animações 3D pesadas/jogos: use nativo.</li>
</ul>

<h2>Quem usa</h2>
<p>Instagram, Discord, Shopify, Microsoft Office mobile, Expo — React Native está longe de ser "brincadeira de web dev".</p>
`
        },
        {
          id: 'rn-setup',
          title: '2. Setup do Ambiente',
          summary: 'Expo vs React Native CLI: comece em 5 minutos.',
          content: `
<h2>Expo: o caminho recomendado</h2>
<pre><code>npx create-expo-app@latest meu-app
cd meu-app
npx expo start</code></pre>
<p>Escaneie o QR Code com o app <strong>Expo Go</strong> (App Store/Play Store) e seu app roda no celular na hora — sem Android Studio, sem Xcode, sem dor.</p>

<h2>Expo vs CLI bare</h2>
<table>
<tr><th>Expo</th><th>React Native CLI (bare)</th></tr>
<tr><td>Setup zero-config</td><td>Requer Android Studio/Xcode</td></tr>
<tr><td>APIs nativas via SDK</td><td>Qualquer lib nativa</td></tr>
<tr><td>Builds na nuvem (EAS)</td><td>Builds locais</td></tr>
<tr><td>Ideal para 95% dos apps</td><td>Casos muito específicos</td></tr>
</table>

<h2>Ferramenta de desenvolvimento</h2>
<pre><code>expo start        # servidor de dev com QR code
expo start --tunnel   # acessa fora da rede local
# Atalhos no terminal: r = reload | j = abrir debugger</code></pre>

<h2>Arquivo de entrada</h2>
<pre><code>// App.tsx — ponto de partida
import { View, Text } from "react-native";

export default function App() {
  return (
    &lt;View&gt;
      &lt;Text&gt;Olá, MonoCode!&lt;/Text&gt;
    &lt;/View&gt;
  );
}</code></pre>

<div class="callout callout-tip">
<strong>Requisitos:</strong> Node.js LTS instalado e um celular (Android/iOS) com o Expo Go — ou um emulador. Comece com o dispositivo físico: mais simples e mais realista.
</div>
`
        },
        {
          id: 'rn-componentes',
          title: '3. Componentes Core',
          summary: 'View, Text, Image, Pressable e StyleSheet.',
          content: `
<h2>Os blocos de Lego</h2>
<pre><code>import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function Card() {
  return (
    &lt;View style={styles.card}&gt;
      &lt;Image
        source={{ uri: "https://site.dev/foto.png" }}
        style={styles.foto}
      /&gt;
      &lt;Text style={styles.nome}&gt;Ana&lt;/Text&gt;
      &lt;Text style={styles.cargo}&gt;Dev Mobile&lt;/Text&gt;
      &lt;Pressable style={styles.botao} onPress={() =&gt; console.log("olá!")}&gt;
        &lt;Text style={styles.botaoTexto}&gt;Seguir&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 8, backgroundColor: "#111" },
  foto: { width: 64, height: 64, borderRadius: 32 },
  nome: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  cargo: { color: "#999" },
  botao: { marginTop: 12, padding: 10, backgroundColor: "#fff", borderRadius: 4 },
  botaoTexto: { color: "#000", textAlign: "center", fontWeight: "600" }
});</code></pre>

<h2>Regras de ouro</h2>
<ul>
  <li>Todo texto DEVE estar dentro de <code>&lt;Text&gt;</code> (não existe texto solto).</li>
  <li><code>&lt;View&gt;</code> é o div do RN — por padrão usa <strong>flexbox column</strong>.</li>
  <li><code>StyleSheet.create</code> valida os estilos e é mais performático que objetos inline.</li>
  <li>Não existe herança de CSS: fontes e cores são por componente.</li>
</ul>
`
        },
        {
          id: 'rn-jsx',
          title: '4. JSX e Estilos',
          summary: 'Sintaxe, flexbox padrão e responsividade com Dimensions.',
          content: `
<h2>JSX: HTML com superpoderes</h2>
<pre><code>export default function Perfil({ nome, seguidores }) {
  const verificado = seguidores &gt; 1000;

  return (
    &lt;View style={styles.row}&gt;
      {/* expressões JavaScript entre chaves */}
      &lt;Text style={styles.nome}&gt;{nome}&lt;/Text&gt;
      {verificado &amp;&amp; &lt;Text style={styles.selo}&gt;✓&lt;/Text&gt;}
      &lt;Text&gt;
        {seguidores.toLocaleString("pt-BR")} seguidores
      &lt;/Text&gt;
    &lt;/View&gt;
  );
}</code></pre>

<h2>Flexbox é o padrão</h2>
<pre><code>const styles = StyleSheet.create({
  row: {
    flexDirection: "row",       // default é "column" no RN!
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    padding: 16
  },
  centro: {
    flex: 1,                    // ocupa o espaço disponível
    justifyContent: "center",   // centraliza vertical
    alignItems: "center"        // e horizontal
  }
});</code></pre>

<h2>Responsividade</h2>
<pre><code>import { Dimensions, useWindowDimensions } from "react-native";

// Dimensão do aparelho:
const { width, height } = Dimensions.get("window");

// Reativo a rotação de tela (hook):
const { width } = useWindowDimensions();
const colunas = width &gt; 500 ? 3 : 2;

// PixelRatio para nitidez:
import { PixelRatio } from "react-native";
const escala = PixelRatio.get(); // 1, 2, 3...</code></pre>
`
        },
        {
          id: 'rn-scrollview',
          title: '5. ScrollView vs FlatList',
          summary: 'Quando rolar tudo e quando virtualizar.',
          content: `
<h2>ScrollView: conteúdo pequeno</h2>
<pre><code>&lt;ScrollView&gt;
  {itens.map(item =&gt; (
    &lt;Text key={item.id}&gt;{item.nome}&lt;/Text&gt;
  ))}
&lt;/ScrollView&gt;</code></pre>
<p>Renderiza <strong>todos os filhos de uma vez</strong>. Ótimo para formulários e páginas — péssimo para listas de 1000 itens (memória e FPS).</p>

<h2>FlatList: listas de verdade</h2>
<pre><code>&lt;FlatList
  data={produtos}
  keyExtractor={item =&gt; item.id}
  renderItem={({ item }) =&gt; (
    &lt;Text&gt;{item.nome} — R$ {item.preco}&lt;/Text&gt;
  )}
  ListHeaderComponent={&lt;Text&gt;Catálogo&lt;/Text&gt;}
  ListEmptyComponent={&lt;Text&gt;Nada por aqui.&lt;/Text&gt;}
  onEndReached={() =&gt; carregarMais()}
  onEndReachedThreshold={0.5}
/&gt;</code></pre>
<p>FlatList <strong>virtualiza</strong>: monta só o que está na tela (+ margem) e recicla células ao rolar. Milhares de itens, memória constante.</p>

<h2>SectionList: agrupada</h2>
<pre><code>&lt;SectionList
  sections={[
    { title: "Frutas",  data: ["banana", "uva"] },
    { title: "Legumes", data: ["cenoura"] }
  ]}
  keyExtractor={(item, i) =&gt; item + i}
  renderSectionHeader={({ section }) =&gt; (
    &lt;Text style={{ fontWeight: "bold" }}&gt;{section.title}&lt;/Text&gt;
  )}
  renderItem={({ item }) =&gt; &lt;Text&gt;{item}&lt;/Text&gt;}
/&gt;</code></pre>

<div class="callout callout-tip">
<strong>Regra:</strong> até ~20 itens e conteúdo estático → ScrollView. Listas dinâmicas/paginadas → FlatList. Grupos com cabeçalho → SectionList.
</div>
`
        }
      ]
    },
    {
      id: 'rn-estado',
      title: 'Estado e Interação',
      description: 'Hooks, props e eventos de toque.',
      lessons: [
        {
          id: 'rn-props',
          title: '1. Props: dados de cima para baixo',
          summary: 'Comunicação entre componentes.',
          content: `
<h2>Props são argumentos</h2>
<pre><code>// Componente RECEBE props:
function Botao({ titulo, aoPressionar, variante = "primario" }) {
  return (
    &lt;Pressable onPress={aoPressionar} style={styles[variante]}&gt;
      &lt;Text&gt;{titulo}&lt;/Text&gt;
    &lt;/Pressable&gt;
  );
}

// Componente PAI passa os valores:
&lt;Botao
  titulo="Salvar"
  aoPressionar={() =&gt; salvar()}
  variante="secundario"
/&gt;</code></pre>

<h2>Props de estilo: children e funções</h2>
<pre><code>// children: conteúdo entre as tags
function Card({ children }) {
  return &lt;View style={styles.card}&gt;{children}&lt;/View&gt;;
}

&lt;Card&gt;
  &lt;Text&gt;Qualquer coisa aqui dentro&lt;/Text&gt;
&lt;/Card&gt;

// Render props: componente chama sua função de volta
function SeVazio({ itens, renderizarVazio, children }) {
  if (itens.length === 0) return renderizarVazio();
  return children;
}</code></pre>

<h2>TypeScript em componentes</h2>
<pre><code>interface Props {
  titulo: string;
  desabilitado?: boolean;
  aoPressionar: () =&gt; void;
}

export function Botao({ titulo, desabilitado, aoPressionar }: Props) { ... }</code></pre>

<div class="callout callout-tip">
<strong>Fluxo de dados:</strong> props descem (pai → filho), eventos sobem (via callbacks). Manter esse fluxo unidirecional é o que torna apps React previsíveis.
</div>
`
        },
        {
          id: 'rn-usestate',
          title: '2. useState',
          summary: 'Estado local e re-renderização.',
          content: `
<h2>Memória do componente</h2>
<pre><code>import { useState } from "react";

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    &lt;View&gt;
      &lt;Text&gt;Você clicou {contagem} vezes&lt;/Text&gt;
      &lt;Pressable onPress={() =&gt; setContagem(contagem + 1)}&gt;
        &lt;Text&gt;+1&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}</code></pre>
<p>Ao chamar <code>setContagem</code>, o React <strong>re-renderiza</strong> o componente com o novo valor. O estado persiste entre renderizações — mas zera se o componente desmonta.</p>

<h2>Atualizando objetos e arrays</h2>
<pre><code>const [usuario, setUsuario] = useState({ nome: "", email: "" });

// ❌ Mutação direta NÃO dispara render:
// usuario.nome = "Ana";

// ✅ Novo objeto:
setUsuario({ ...usuario, nome: "Ana" });

const [itens, setItens] = useState([]);

// Adicionar sem mutar:
setItens([...itens, novo]);
// Remover:
setItens(itens.filter(i =&gt; i.id !== id));
// Atualizar:
setItens(itens.map(i =&gt; i.id === id ? { ...i, feito: true } : i));</code></pre>

<h2>Estado baseado no anterior</h2>
<pre><code>// Atualizações em rajada usam a forma funcional:
&lt;Pressable onPress={() =&gt; setContagem(c =&gt; c + 1)}&gt;
  &lt;Text&gt;+1 (seguro)&lt;/Text&gt;
&lt;/Pressable&gt;</code></pre>
`
        },
        {
          id: 'rn-useeffect',
          title: '3. useEffect',
          summary: 'Efeitos colaterais: foco, timers e carregar dados.',
          content: `
<h2>Efeitos após a renderização</h2>
<pre><code>import { useEffect, useState } from "react";

function Perfil({ idUsuario }) {
  const [usuario, setUsuario] = useState(null);

  // Roda após TODA renderização onde idUsuario mudou:
  useEffect(() =&gt; {
    let cancelado = false;

    async function carregar() {
      const r = await fetch(\`/api/usuarios/\${idUsuario}\`);
      const dados = await r.json();
      if (!cancelado) setUsuario(dados);   // evita leak
    }
    carregar();

    // CLEANUP: roda antes do próximo efeito e ao desmontar
    return () =&gt; { cancelado = true; };
  }, [idUsuario]);   // ← array de dependências!

  if (!usuario) return &lt;Text&gt;Carregando...&lt;/Text&gt;;
  return &lt;Text&gt;{usuario.nome}&lt;/Text&gt;;
}</code></pre>

<h2>As três formas</h2>
<pre><code>// 1. Sem array: roda em TODA renderização (raro)
useEffect(() =&gt; console.log("renderizou"));

// 2. Array vazio: só uma vez (montagem)
useEffect(() =&gt; {
  const timer = setInterval(logar, 1000);
  return () =&gt; clearInterval(timer);   // limpeza!
}, []);

// 3. Com dependências: quando elas mudam
useEffect(() =&gt; titulo, [titulo]);</code></pre>

<div class="callout callout-warning">
<strong>Dependências incompletas = bugs sutis.</strong> Se o efeito usa uma variável, ela deve estar no array. A regra do ESLint <code>exhaustive-deps</code> pega isso — deixe-a ligada.
</div>
`
        },
        {
          id: 'rn-touch',
          title: '4. Toque, Gestos e Feedback',
          summary: 'Pressable, TouchableOpacity e ActivityIndicator.',
          content: `
<h2>Pressable: o moderno</h2>
<pre><code>&lt;Pressable
  onPress={() =&gt; enviar()}
  onLongPress={() =&gt; abrirMenu()}
  onPressIn={() =&gt; setSegurando(true)}
  onPressOut={() =&gt; setSegurando(false)}
  delayLongPress={400}
  style={({ pressed }) =&gt; [
    styles.botao,
    pressed &amp;&amp; { opacity: 0.7 }    // feedback visual imediato
  ]}
&gt;
  &lt;Text&gt;Enviar&lt;/Text&gt;
&lt;/Pressable&gt;</code></pre>

<h2>Estados de carregamento</h2>
<pre><code>import { ActivityIndicator } from "react-native";

function Botao({ carregando, titulo, onPress }) {
  return (
    &lt;Pressable onPress={onPress} disabled={carregando}&gt;
      {carregando ? (
        &lt;ActivityIndicator color="#fff" /&gt;
      ) : (
        &lt;Text&gt;{titulo}&lt;/Text&gt;
      )}
    &lt;/Pressable&gt;
  );
}</code></pre>

<h2>Feedback nativo</h2>
<pre><code>import { Vibration, Alert } from "react-native";

// Vibração (Android/iOS):
Vibration.vibrate(200);            // 200ms
Vibration.vibrate([0, 100, 50, 100]);  // padrão

// Alerta nativo:
Alert.alert(
  "Excluir item",
  "Esta ação não pode ser desfeita.",
  [
    { text: "Cancelar", style: "cancel" },
    { text: "Excluir", style: "destructive", onPress: excluir }
  ]
);</code></pre>
`
        },
        {
          id: 'rn-textinput',
          title: '5. TextInput e Formulários',
          summary: 'Inputs controlados, teclado e validação.',
          content: `
<h2>Input controlado</h2>
<pre><code>import { TextInput } from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    &lt;View&gt;
      &lt;TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="voce@email.com"
        keyboardType="email-address"    // teclado com @
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
      /&gt;
      &lt;TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry                 // senha: pontinhos
        textContentType="password"      // sugere do chaveiro iOS
      /&gt;
    &lt;/View&gt;
  );
}</code></pre>

<h2>Evitando o teclado-cobre-o-input</h2>
<pre><code>import { KeyboardAvoidingView, Platform } from "react-native";

&lt;KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={{ flex: 1 }}
&gt;
  {/* formulário */}
&lt;/KeyboardAvoidingView&gt;</code></pre>

<h2>Validação simples</h2>
<pre><code>const [erros, setErros] = useState({});

function validar() {
  const e = {};
  if (!email.includes("@")) e.email = "E-mail inválido";
  if (senha.length &lt; 8) e.senha = "Mínimo 8 caracteres";
  setErros(e);
  return Object.keys(e).length === 0;
}

// Exibir:
{erros.email &amp;&amp; &lt;Text style={{ color: "#f66" }}&gt;{erros.email}&lt;/Text&gt;}</code></pre>

<div class="callout callout-tip">
<strong>Teclado certo para cada campo:</strong> <code>numeric</code>, <code>phone-pad</code>, <code>email-address</code>, <code>decimal-pad</code>. Escolher bem dobra a velocidade de preenchimento.
</div>
`
        }
      ]
    },
    {
      id: 'rn-hooks-avancados',
      title: 'Hooks Avançados e Estado Global',
      description: 'Context, useReducer e hooks customizados.',
      lessons: [
        {
          id: 'rn-context',
          title: '1. Context API',
          summary: 'Tema, usuário e dados globais sem prop drilling.',
          content: `
<h2>O problema do prop drilling</h2>
<pre><code>// Passar "tema" por 5 níveis de componentes...
&lt;App tema={tema}&gt;        → &lt;Layout tema={tema}&gt;
  → &lt;Header tema={tema}&gt;  → &lt;Botao tema={tema}&gt;  😩</code></pre>

<h2>Context: dados teleportados</h2>
<pre><code>// TemaContext.tsx
import { createContext, useContext, useState } from "react";

const TemaContext = createContext(null);

export function TemaProvider({ children }) {
  const [tema, setTema] = useState("dark");

  const alternar = () =&gt; setTema(t =&gt; t === "dark" ? "light" : "dark");

  return (
    &lt;TemaContext.Provider value={{ tema, alternar }}&gt;
      {children}
    &lt;/TemaContext.Provider&gt;
  );
}

// Hook de consumo (o padrão profissional):
export function useTema() {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error("useTema precisa do TemaProvider");
  return ctx;
}</code></pre>

<h2>Consumindo em qualquer profundidade</h2>
<pre><code>// App.tsx
&lt;TemaProvider&gt;
  &lt;Layout /&gt;      {/* sem props de tema! */}
&lt;/TemaProvider&gt;

// Qualquer componente:
const { tema, alternar } = useTema();</code></pre>

<div class="callout callout-tip">
Context para dados que <strong>mudam pouco</strong> (tema, usuário logado, idioma). Para estado que muda a cada segundo (inputs, contadores), Context re-renderiza muitos consumidores — prefira bibliotecas (Zustand).
</div>
`
        },
        {
          id: 'rn-usereducer',
          title: '2. useReducer',
          summary: 'Estado complexo com transições previsíveis.',
          content: `
<h2>Quando useState não basta</h2>
<pre><code>// Carrinho com várias ações relacionadas = caso clássico:
function carrinhoReducer(estado, acao) {
  switch (acao.tipo) {
    case "adicionar":
      return { ...estado, itens: [...estado.itens, acao.item] };
    case "remover":
      return {
        ...estado,
        itens: estado.itens.filter(i =&gt; i.id !== acao.id)
      };
    case "limpar":
      return { itens: [] };
    default:
      return estado;
  }
}

function Carrinho() {
  const [estado, dispatch] = useReducer(carrinhoReducer, { itens: [] });

  return (
    &lt;View&gt;
      {estado.itens.map(item =&gt; (
        &lt;Text key={item.id}&gt;{item.nome}&lt;/Text&gt;
      ))}
      &lt;Pressable onPress={() =&gt; dispatch({ tipo: "adicionar", item: novo })}&gt;
        &lt;Text&gt;Adicionar&lt;/Text&gt;
      &lt;/Pressable&gt;
      &lt;Pressable onPress={() =&gt; dispatch({ tipo: "limpar" })}&gt;
        &lt;Text&gt;Esvaziar&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}</code></pre>

<h2>useState vs useReducer</h2>
<table>
<tr><th>useState</th><th>useReducer</th></tr>
<tr><td>Valor simples</td><td>Objeto com relações</td></tr>
<tr><td>set direto</td><td>Ações nomeadas</td></tr>
<tr><td>2-3 atualizadores</td><td>Muitas transições</td></tr>
</table>
`
        },
        {
          id: 'rn-custom-hooks',
          title: '3. Hooks Customizados',
          summary: 'Extraindo lógica reutilizável.',
          content: `
<h2>useFonts, useApi: seus próprios hooks</h2>
<pre><code>// Hook de requisição reutilizável:
function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() =&gt; {
    let cancelado = false;
    setCarregando(true);

    fetch(url)
      .then(r =&gt; r.json())
      .then(d =&gt; { if (!cancelado) setDados(d); })
      .catch(e =&gt; { if (!cancelado) setErro(e.message); })
      .finally(() =&gt; { if (!cancelado) setCarregando(false); });

    return () =&gt; { cancelado = true; };
  }, [url]);

  return { dados, carregando, erro };
}

// Uso — 3 linhas onde antes eram 20:
function Produtos() {
  const { dados, carregando, erro } = useFetch("/api/produtos");
  if (carregando) return &lt;ActivityIndicator /&gt;;
  if (erro) return &lt;Text&gt;{erro}&lt;/Text&gt;;
  return &lt;FlatList data={dados} renderItem={...} /&gt;;
}</code></pre>

<h2>useDebounce: busca fluida</h2>
<pre><code>function useDebounce(valor, atraso = 500) {
  const [valorDebounced, setValorDebounced] = useState(valor);

  useEffect(() =&gt; {
    const t = setTimeout(() =&gt; setValorDebounced(valor), atraso);
    return () =&gt; clearTimeout(t);
  }, [valor, atraso]);

  return valorDebounced;
}

// Busca só 500ms depois do usuário PARAR de digitar:
const [busca, setBusca] = useState("");
const buscaFinal = useDebounce(busca);
useEffect(() =&gt; {
  if (buscaFinal) pesquisar(buscaFinal);
}, [buscaFinal]);</code></pre>

<div class="callout callout-tip">
<strong>Regra:</strong> nome começa com <code>use</code> (o lint garante as regras de hooks). Hook bem escrito transforma 30 linhas de efeito em uma linha de uso.
</div>
`
        },
        {
          id: 'rn-zustand',
          title: '4. Estado Global com Zustand',
          summary: 'O store minimalista que a comunidade adotou.',
          content: `
<h2>O problema do Context re-renderizando tudo</h2>
<p>Context avisa TODOS os consumidores a cada mudança. Zustand permite que cada componente <strong>assine apenas o pedaço que usa</strong>:</p>

<pre><code>// npm install zustand
import { create } from "zustand";

const useLoja = create((set, get) =&gt; ({
  usuario: null,
  carrinho: [],

  entrar: (usuario) =&gt; set({ usuario }),
  adicionar: (item) =&gt;
    set(s =&gt; ({ carrinho: [...s.carrinho, item] })),
  total: () =&gt;
    get().carrinho.reduce((s, i) =&gt; s + i.preco, 0)
}));</code></pre>

<h2>Consumindo com precisão cirúrgica</h2>
<pre><code>// Seletor: só re-renderiza quando CARRINHO muda:
const carrinho = useLoja(s =&gt; s.carrinho);
const adicionar = useLoja(s =&gt; s.adicionar);

// Este componente NÃO re-renderiza quando o usuário loga:
function Carrinho() {
  const itens = useLoja(s =&gt; s.carrinho);
  return &lt;Text&gt;{itens.length} itens&lt;/Text&gt;;
}</code></pre>

<h2>Persistência</h2>
<pre><code>import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useConfig = create(
  persist(
    (set) =&gt; ({ tema: "dark", setTema: (t) =&gt; set({ tema: t }) }),
    { name: "config", storage: createJSONStorage(() =&gt; AsyncStorage) }
  )
);</code></pre>
`
        }
      ]
    },
    {
      id: 'rn-navegacao',
      title: 'Navegação',
      description: 'React Navigation: stacks, tabs e parâmetros.',
      lessons: [
        {
          id: 'rn-navegacao',
          title: '1. Stack Navigation',
          summary: 'Telas empilhadas e navegação básica.',
          content: `
<h2>React Navigation</h2>
<pre><code>// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator initialRouteName="Home"&gt;
        &lt;Stack.Screen name="Home" component={Home} /&gt;
        &lt;Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes do Produto" }}
        /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}</code></pre>

<h2>Navegando e voltando</h2>
<pre><code>import { useNavigation } from "@react-navigation/native";

function Home() {
  const nav = useNavigation();

  return (
    &lt;Pressable onPress={() =&gt; nav.navigate("Detalhes", { id: 42 })}&gt;
      &lt;Text&gt;Abrir produto 42&lt;/Text&gt;
    &lt;/Pressable&gt;
  );
}

// Voltar:
nav.goBack();
// Trocar sem poder voltar (ex.: pós-login):
nav.reset({ index: 0, routes: [{ name: "Home" }] });</code></pre>
`
        },
        {
          id: 'rn-tabs',
          title: '2. Tabs e Drawer',
          summary: 'Navegadores combinados.',
          content: `
<h2>Bottom Tabs</h2>
<pre><code>import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MinhasTabs() {
  return (
    &lt;Tab.Navigator&gt;
      &lt;Tab.Screen name="Home" component={Home} /&gt;
      &lt;Tab.Screen name="Buscar" component={Buscar} /&gt;
      &lt;Tab.Screen name="Perfil" component={Perfil} /&gt;
    &lt;/Tab.Navigator&gt;
  );
}</code></pre>

<h2>Aninhando navegadores (o padrão real)</h2>
<pre><code>// Tabs por fora, Stack por dentro de cada tab:
&lt;Stack.Navigator&gt;
  &lt;Stack.Screen name="Principal" component={MinhasTabs} /&gt;
  &lt;Stack.Screen name="Checkout" component={Checkout} /&gt;
&lt;/Stack.Navigator&gt;</code></pre>

<h2>Ícones nas tabs</h2>
<pre><code>&lt;Tab.Screen
  name="Home"
  component={Home}
  options={{
    tabBarIcon: ({ color, size }) =&gt; (
      &lt;Ionicons name="home" size={size} color={color} /&gt;
    )
  }}
/&gt;</code></pre>
`
        },
        {
          id: 'rn-parametros',
          title: '3. Parâmetros de Rota',
          summary: 'Passando dados entre telas com tipagem.',
          content: `
<h2>Enviando e recebendo</h2>
<pre><code>// Enviar:
nav.navigate("Detalhes", { id: 42, nome: "Teclado" });

// Receber:
import { useRoute } from "@react-navigation/native";

function Detalhes() {
  const route = useRoute();
  const { id, nome } = route.params;
  return &lt;Text&gt;Produto {nome} (#{id})&lt;/Text&gt;;
}</code></pre>

<h2>Tipagem completa</h2>
<pre><code>type RootStackParamList = {
  Home: undefined;                    // sem parâmetros
  Detalhes: { id: number; nome: string };
};

declare global {
  namespace ReactNavigation {
    interface ParamList extends RootStackParamList {}
  }
}

// Agora autocompleta E valida:
const route = useRoute&lt;RouteProp&lt;RootStackParamList, "Detalhes"&gt;&gt;();
route.params.id;   // number ✓</code></pre>

<h2>Padrão de dados vs parâmetros</h2>
<pre><code>// Passe apenas IDs pela rota e BUSQUE o resto:
useEffect(() =&gt; {
  fetch(\`/api/produtos/\${route.params.id}\`)
    .then(r =&gt; r.json())
    .then(setProduto);
}, [route.params.id]);
// Objetos grandes na rota são serializados (custo) e perdem sincronia.</code></pre>
`
        }
      ]
    },
    {
      id: 'rn-api',
      title: 'APIs e Dispositivo',
      description: 'Requisições, armazenamento e sensores.',
      lessons: [
        {
          id: 'rn-fetch',
          title: '1. Consumindo APIs',
          summary: 'fetch, tratamento de erros e loading states.',
          content: `
<h2>Fetch no mobile</h2>
<pre><code>async function carregarProdutos() {
  try {
    setCarregando(true);

    const resposta = await fetch("https://api.exemplo.dev/produtos", {
      headers: { Authorization: \`Bearer \${token}\` }
    });

    if (!resposta.ok) {
      throw new Error(\`HTTP \${resposta.status}\`);
    }

    const produtos = await resposta.json();
    setProdutos(produtos);
  } catch (erro) {
    setErro(erro.message);    // exibir para o usuário
  } finally {
    setCarregando(false);     // sempre desliga o loading
  }
}</code></pre>

<h2>Pull to refresh</h2>
<pre><code>&lt;FlatList
  data={produtos}
  refreshing={carregando}
  onRefresh={carregarProdutos}   // puxe para baixo = recarrega
  renderItem={renderItem}
/&gt;</code></pre>

<h2>Centralizando a API</h2>
<pre><code>// services/api.ts — uma porta de entrada:
const BASE = "https://api.exemplo.dev";

async function pedir(caminho, opcoes = {}) {
  const r = await fetch(BASE + caminho, {
    ...opcoes,
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${token}\`,
      ...opcoes.headers
    }
  });
  if (!r.ok) throw new Error(\`HTTP \${r.status}\`);
  return r.json();
}

// Componentes chamam funções semânticas:
export const api = {
  produtos: () =&gt; pedir("/produtos"),
  login: (dados) =&gt; pedir("/login", { method: "POST", body: JSON.stringify(dados) })
};</code></pre>
`
        },
        {
          id: 'rn-asyncstorage',
          title: '2. AsyncStorage',
          summary: 'Persistência local de dados simples.',
          content: `
<h2>O localStorage do mobile</h2>
<pre><code>// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Tudo é string (serializa como o localStorage):
await AsyncStorage.setItem("token", "abc123");

const dados = { tema: "dark", idioma: "pt-BR" };
await AsyncStorage.setItem("config", JSON.stringify(dados));

const lido = JSON.parse(await AsyncStorage.getItem("config") ?? "{}");

await AsyncStorage.removeItem("token");</code></pre>

<h2>Camada tipada e segura</h2>
<pre><code>async function armazenar&lt;T&gt;(chave: string, valor: T) {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    console.warn("Falha ao salvar", chave);
  }
}

async function ler&lt;T&gt;(chave: string, padrao: T): Promise&lt;T&gt; {
  try {
    const bruto = await AsyncStorage.getItem(chave);
    return bruto ? JSON.parse(bruto) : padrao;
  } catch {
    return padrao;
  }
}</code></pre>

<h2>O que guardar (e o que não)</h2>
<ul>
  <li>✅ Preferências: tema, idioma, onboarding visto.</li>
  <li>✅ Rascunhos e cache.</li>
  <li>⚠️ Tokens: prefira <code>expo-secure-store</code> (criptografado).</li>
  <li>❌ Dados sensíveis/dados grandes: backend + SQLite.</li>
</ul>
`
        },
        {
          id: 'rn-camera',
          title: '3. Câmera, Localização e Sensores',
          summary: 'APIs do dispositivo com permissões.',
          content: `
<h2>Localização</h2>
<pre><code>// npx expo install expo-location
import * as Location from "expo-location";

async function obterLocalizacao() {
  // 1. Pedir permissão (obrigatório!):
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return { erro: "Permissão de localização negada" };
  }

  // 2. Usar:
  const pos = await Location.getCurrentPositionAsync({});
  return {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  };
}</code></pre>

<h2>Câmera e galeria</h2>
<pre><code>// npx expo install expo-image-picker
import * as ImagePicker from "expo-image-picker";

async function escolherFoto() {
  const resultado = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,       // permite recortar
    quality: 0.8               // 80% — economiza upload
  });

  if (!resultado.canceled) {
    setFoto(resultado.assets[0].uri);
  }
}</code></pre>

<div class="callout callout-warning">
<strong>Permissões:</strong> sempre solicite no momento de uso (nÃO no primeiro boot), explique o porquê e trate a negação com elegância. O app não pode travar porque o usuário disse "não".
</div>
`
        },
        {
          id: 'rn-notificacoes',
          title: '4. Notificações Push',
          summary: 'Expo Notifications: local e push.',
          content: `
<h2>Notificação local</h2>
<pre><code>// npx expo install expo-notifications
import * as Notifications from "expo-notifications";

// Como exibir quando o app está aberto:
Notifications.setNotificationHandler({
  handleNotification: async () =&gt; ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

// Agendar:
await Notifications.scheduleNotificationAsync({
  content: {
    title: "Hora de praticar! 💪",
    body: "Sua sequência de estudos espera por você."
  },
  trigger: { seconds: 60 * 60 * 24 }   // amanhã
});</code></pre>

<h2>Push (via Expo Push Service)</h2>
<pre><code>// 1. Pedir permissão e registrar:
const { status } = await Notifications.requestPermissionsAsync();
const token = (await Notifications.getExpoPushTokenAsync()).data;
// 2. Envie o token ao seu backend
// 3. Backend chama https://exp.host/--/api/v2/push/send</code></pre>

<div class="callout callout-tip">
Notificações push exigem <strong>build dedicado</strong> (EAS Build) — o Expo Go não recebe push em iOS para apps publicados. Para começar, teste com notificações <em>locais</em>.
</div>
`
        }
      ]
    },
    {
      id: 'rn-producao',
      title: 'Publicação e Boas Práticas',
      description: 'Performance, testes e lojas.',
      lessons: [
        {
          id: 'rn-performance',
          title: '1. Performance',
          summary: 'Memo, FlatList e evitando renders desnecessários.',
          content: `
<h2>Render é o vilão nº 1</h2>
<p>Cada mudança de estado re-renderiza o componente <strong>e todos os filhos</strong>. Apps lentos geralmente renderizam demais:</p>

<h2>As três ferramentas</h2>
<pre><code>// 1. React.memo: pula re-render se as props não mudaram
const ProdutoCard = React.memo(function ProdutoCard({ nome, preco }) {
  return &lt;Text&gt;{nome} — {preco}&lt;/Text&gt;;
});

// 2. useCallback: função estável entre renders
const renderItem = useCallback(
  ({ item }) =&gt; &lt;ProdutoCard nome={item.nome} /&gt;,
  []
);

// 3. useMemo: cálculo pesado memorizado
const total = useMemo(
  () =&gt; itens.reduce((s, i) =&gt; s + i.preco, 0),
  [itens]
);</code></pre>

<h2>FlatList turbinada</h2>
<pre><code>&lt;FlatList
  data={itens}
  keyExtractor={item =&gt; String(item.id)}   // id ESTÁVEL, não índice!
  renderItem={renderItem}
  getItemLayout={(data, index) =&gt; (       // pula medição
    { length: 64, offset: 64 * index, index }
  )}
  initialNumToRender={12}                  // só o necessário
  windowSize={5}
/&gt;</code></pre>

<div class="callout callout-tip">
<strong>Meça antes de otimizar:</strong> o React DevTools Profiler mostra o que realmente renderiza. Memo em tudo engorda o bundle e complicam o código — memo no componente certo vale ouro.
</div>
`
        },
        {
          id: 'rn-testes',
          title: '2. Testes',
          summary: 'Jest + React Native Testing Library.',
          content: `
<h2>Teste de componente</h2>
<pre><code>// App.test.tsx
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Contador } from "./Contador";

test("incrementa ao pressionar", () =&gt; {
  render(&lt;Contador /&gt;);

  const botao = screen.getByText("+1");
  fireEvent.press(botao);

  expect(screen.getByText("Você clicou 1 vezes")).toBeTruthy();
});</code></pre>

<h2>Testando lógica/hooks</h2>
<pre><code>// Hook de cálculo puro — teste como função:
test("aplica desconto percentual", () =&gt; {
  expect(aplicarDesconto(100, 10)).toBe(90);
  expect(aplicarDesconto(100, 0)).toBe(100);
});

// Mock de API:
global.fetch = jest.fn(() =&gt;
  Promise.resolve({ ok: true, json: () =&gt; Promise.resolve([{ id: 1 }]) })
);</code></pre>

<h2>Pirâmide de testes</h2>
<ul>
  <li><strong>Unidade (muitos):</strong> funções puras, hooks, reducers — rápidos.</li>
  <li><strong>Componente (alguns):</strong> interação e render.</li>
  <li><strong>E2E (poucos):</strong> Detox/Maestro para fluxos críticos.</li>
</ul>
`
        },
        {
          id: 'rn-publicacao',
          title: '3. Build e Publicação',
          summary: 'EAS Build, lojas e atualizações OTA.',
          content: `
<h2>EAS: build na nuvem</h2>
<pre><code># Instalar EAS CLI e configurar:
npm install -g eas-cli
eas login
eas build:configure

# Build para as lojas:
eas build --platform android --profile production
eas build --platform ios --profile production

# Enviar às lojas:
eas submit --platform android    # Google Play
eas submit --platform ios        # App Store</code></pre>

<h2>Atualizações OTA (over-the-air)</h2>
<pre><code># Corrigiu um bug de JS? Envie direto, sem revisão da loja:
eas update --branch production --message "fix: crash no login"</code></pre>
<p>OTA atualiza apenas a camada JavaScript — código nativo novo exige build e revisão das lojas.</p>

<h2>Checklist pré-publicação</h2>
<ul>
  <li>Ícones e splash screens em todas as resoluções.</li>
  <li>Versão/Build number incrementados (app.json).</li>
  <li>APIs de produção apontadas (não o localhost!).</li>
  <li>Testado em telas pequenas (iPhone SE) e grandes (Tablets).</li>
  <li>Sem segredos no bundle (chaves vão no backend).</li>
  <li>Screenshots da loja e política de privacidade prontas.</li>
</ul>

<div class="callout callout-tip">
<strong>Custos:</strong> Apple Developer: US$ 99/ano. Google Play: US$ 25 uma vez. Ambos exigem conta de desenvolvedor para publicar apps de terceiros.
</div>
`
        }
      ]
    }
  ]
};
