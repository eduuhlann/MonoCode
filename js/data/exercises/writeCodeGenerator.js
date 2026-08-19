// MonoCode — Gerador de Exercícios "Escreva o Código"
// 20 templates × 50 variações = 1000 exercícios por linguagem.
// Validação: JS/Python/HTML por output real; demais por padrão no código.

const WRITE_LANGS = [
  'JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS',
  'SQL', 'C', 'C++', 'C#', 'React Native', 'Rust', 'Go',
];

// true → o editor executa de verdade e o output contém o resultado
const OUTPUT_LANGS = new Set(['JavaScript', 'Python', 'HTML']);

function validate(expected, lang) {
  if (OUTPUT_LANGS.has(lang)) {
    return (output) => output.includes(expected);
  }
  return (output, code) =>
    code.includes(expected) || code.toLowerCase().includes(expected.toLowerCase());
}

// Per-language print syntax
function printStmt(lang, text) {
  switch (lang) {
    case 'JavaScript':
    case 'TypeScript':
    case 'React Native':  return `console.log("${text}");`;
    case 'Python':         return `print("${text}")`;
    case 'C':              return `printf("${text}\\n");`;
    case 'C++':            return `std::cout << "${text}" << std::endl;`;
    case 'C#':             return `Console.WriteLine("${text}");`;
    case 'Rust':           return `println!("${text}");`;
    case 'Go':             return `fmt.Println("${text}")`;
    case 'SQL':            return `SELECT '${text}';`;
    case 'HTML':           return `<p>${text}</p>`;
    case 'CSS':            return `/* ${text} */`;
    default:               return `console.log("${text}");`;
  }
}

// Per-language function wrapper
function fnWrapper(lang, name, params, body, ret) {
  switch (lang) {
    case 'JavaScript':
    case 'TypeScript':
    case 'React Native':
      return `function ${name}(${params}) {\n  ${body}\n  return ${ret};\n}`;
    case 'Python':
      return `def ${name}(${params}):\n  ${body}\n  return ${ret}`;
    case 'C':
      return `int ${name}(${params}) {\n  ${body}\n  return ${ret};\n}`;
    case 'C++':
      return `int ${name}(${params}) {\n  ${body}\n  return ${ret};\n}`;
    case 'C#':
      return `int ${name}(${params}) {\n  ${body}\n  return ${ret};\n}`;
    case 'Rust':
      return `fn ${name}(${params}) -> i32 {\n  ${body}\n  ${ret}\n}`;
    case 'Go':
      return `func ${name}(${params}) int {\n  ${body}\n  return ${ret}\n}`;
    default:
      return `function ${name}(${params}) {\n  ${body}\n  return ${ret};\n}`;
  }
}

function comment(lang) {
  switch (lang) {
    case 'Python': return '#';
    case 'SQL':    return '--';
    case 'CSS':    return '/*';
    case 'HTML':   return '<!--';
    default:       return '//';
  }
}

// --- 20 Templates ---
// Cada template: (lang, cfg, v) => { prompt, initialCode, solutionCode, testValidation, title, difficulty, xp, explanation }

const TEMPLATES = [

// 1. Imprimir saudação
(lang, v) => {
  const nomes = ['Ana','Bia','Caio','Diego','Eva','Fábio','Gabi','Hugo','Iris','João',
    'Kelly','Leo','Mia','Nina','Otto','Pedro','Quim','Rita','Sara','Téo',
    'Uma','Vera','Wes','Xuxa','Yuri','Zara','Bruno','Carla','Danilo','Elza'];
  const nome = nomes[v % nomes.length];
  const msg = `Olá, ${nome}!`;
  return {
    title: `Imprima: "Olá, ${nome}!"`,
    difficulty: 'Iniciante', xp: 30,
    prompt: `Escreva um programa que imprima exatamente: "${msg}"`,
    initialCode: `${comment(lang)} Escreva seu código aqui:\n\n${printStmt(lang, '___')}`,
    solutionCode: printStmt(lang, msg),
    testValidation: validate(msg, lang),
    explanation: `Use a instrução de saída da linguagem (${lang === 'Python' ? 'print()' : lang === 'C' ? 'printf()' : lang === 'C++' ? 'std::cout' : lang === 'C#' ? 'Console.WriteLine()' : lang === 'Rust' ? 'println!()' : lang === 'Go' ? 'fmt.Println()' : 'console.log()'}) para exibir o texto "${msg}".`,
  };
},

// 2. Somar dois números
(lang, v) => {
  const a = (v % 47) + 3, b = (v % 31) + 7;
  const soma = a + b;
  const expected = String(soma);
  const code = lang === 'Python'
    ? `print(${a} + ${b})`
    : lang === 'C'
    ? `printf("%d\\n", ${a} + ${b});`
    : lang === 'C++'
    ? `std::cout << ${a} + ${b} << std::endl;`
    : lang === 'C#'
    ? `Console.WriteLine(${a} + ${b});`
    : lang === 'Rust'
    ? `println!("{}", ${a} + ${b});`
    : lang === 'Go'
    ? `fmt.Println(${a} + ${b})`
    : lang === 'SQL'
    ? `SELECT ${a} + ${b};`
    : lang === 'HTML'
    ? `<p>${soma}</p>`
    : `console.log(${a} + ${b});`;
  return {
    title: `Some ${a} + ${b} e imprima`,
    difficulty: 'Iniciante', xp: 30,
    prompt: `Escreva um programa que calcule ${a} + ${b} e imprima o resultado (${soma}).`,
    initialCode: `${comment(lang)} Some ${a} + ${b} e imprima:\n\n${printStmt(lang, '___')}`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `A soma de ${a} + ${b} = ${soma}. Use o operador + e a função de saída da linguagem para exibir o resultado.`,
  };
},

// 3. Par ou ímpar
(lang, v) => {
  const n = (v % 50) + 1;
  const par = n % 2 === 0;
  const expected = par ? 'par' : 'ímpar';
  const msg = par ? `${n} é par` : `${n} é ímpar`;
  const code = lang === 'Python'
    ? `print("${msg}")`
    : lang === 'HTML'
    ? `<p>${msg}</p>`
    : printStmt(lang, msg);
  return {
    title: `${n} é par ou ímpar?`,
    difficulty: 'Iniciante', xp: 35,
    prompt: `Escreva um programa que verifique se ${n} é par ou ímpar e imprima "${msg}".`,
    initialCode: `${comment(lang)} Verifique se ${n} é par ou ímpar:\n\n${comment(lang)} Use o operador % (módulo)\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${n} % 2 = ${n % 2}. Quando o resto da divisão por 2 é 0, o número é par; senão, ímpar. ${n} é ${expected}.`,
  };
},

// 4. Maior de dois números
(lang, v) => {
  const a = (v % 89) + 1, b = (v % 67) + 1;
  const maior = Math.max(a, b);
  const expected = String(maior);
  const code = lang === 'JavaScript' || lang === 'TypeScript' || lang === 'React Native'
    ? `console.log(Math.max(${a}, ${b}));`
    : lang === 'Python'
    ? `print(max(${a}, ${b}))`
    : lang === 'HTML'
    ? `<p>${maior}</p>`
    : lang === 'SQL'
    ? `SELECT GREATEST(${a}, ${b});`
    : `// if (${a} > ${b}) print ${a} else print ${b}\n${printStmt(lang, String(maior))}`;
  return {
    title: `Maior entre ${a} e ${b}`,
    difficulty: 'Iniciante', xp: 35,
    prompt: `Escreva um programa que encontre o maior entre ${a} e ${b} e imprima (${maior}).`,
    initialCode: `${comment(lang)} Encontre o maior entre ${a} e ${b}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `Entre ${a} e ${b}, o maior é ${maior}. Use ` + (lang === 'JavaScript' ? 'Math.max()' : lang === 'Python' ? 'max()' : 'um if/else') + ` para comparar.`,
  };
},

// 5. Tabuada
(lang, v) => {
  const n = (v % 10) + 2;
  const expected = `${n} x 5 = ${n * 5}`;
  const code = lang === 'Python'
    ? `for i in range(1, 11):\n    print(f"${n} x {i} =", ${n} * i)`
    : `for (let i = 1; i <= 10; i++) {\n  console.log("${n} x " + i + " =", ${n} * i);\n}`;
  return {
    title: `Tabuada do ${n}`,
    difficulty: 'Iniciante', xp: 40,
    prompt: `Escreva um programa que imprima a tabuada do ${n} (de 1 a 10).`,
    initialCode: `${comment(lang)} Tabuada do ${n} (1 a 10):\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `Use um loop de 1 a 10 multiplicando por ${n}. A linha "${n} x 5 = ${n * 5}" deve aparecer na saída.`,
  };
},

// 6. Contagem regressiva
(lang, v) => {
  const n = (v % 20) + 5;
  const expected = '1';
  const code = lang === 'Python'
    ? `for i in range(${n}, 0, -1):\n    print(i)`
    : `for (let i = ${n}; i >= 1; i--) {\n  console.log(i);\n}`;
  return {
    title: `Contagem regressiva de ${n} até 1`,
    difficulty: 'Iniciante', xp: 35,
    prompt: `Escreva um programa que conte regressivamente de ${n} até 1, imprimindo cada número.`,
    initialCode: `${comment(lang)} Conte de ${n} até 1:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `Use um loop que começa em ${n} e decrementa até 1. A saída deve incluir ${n}, ${n-1}, ..., 1.`,
  };
},

// 7. Fatorial
(lang, v) => {
  const n = (v % 10) + 1;
  let fat = 1; for (let i = 2; i <= n; i++) fat *= i;
  const expected = String(fat);
  const code = lang === 'Python'
    ? `f = 1\nfor i in range(2, ${n + 1}):\n    f *= i\nprint(f)`
    : `let f = 1;\nfor (let i = 2; i <= ${n}; i++) f *= i;\nconsole.log(f);`;
  return {
    title: `Fatorial de ${n}`,
    difficulty: 'Intermediário', xp: 50,
    prompt: `Escreva um programa que calcule o fatorial de ${n} (=${fat}) e imprima o resultado.`,
    initialCode: `${comment(lang)} Calcule ${n}! e imprima:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${n}! = ${fat}. Multiplique 1×2×3×...×${n} acumulando em uma variável. O fatorial de ${n} é ${fat}.`,
  };
},

// 8. Fibonacci
(lang, v) => {
  const n = (v % 15) + 3;
  let a = 0, b = 1;
  for (let i = 0; i < n - 1; i++) { [a, b] = [b, a + b]; }
  const expected = String(a);
  const code = lang === 'Python'
    ? `a, b = 0, 1\nfor _ in range(${n - 1}):\n    a, b = b, a + b\nprint(a)`
    : `let a = 0, b = 1;\nfor (let i = 0; i < ${n - 1}; i++) { [a, b] = [b, a + b]; }\nconsole.log(a);`;
  return {
    title: `Fibonacci nº ${n}`,
    difficulty: 'Intermediário', xp: 55,
    prompt: `Escreva um programa que calcule o ${n}º número de Fibonacci (=${a}) e imprima.`,
    initialCode: `${comment(lang)} ${n}º Fibonacci (sequência: 0, 1, 1, 2, 3, 5...):\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `A sequência de Fibonacci começa 0, 1, 1, 2, 3, 5, 8... O ${n}º número é ${a}. Use duas variáveis que trocam a cada iteração.`,
  };
},

// 9. Área do círculo
(lang, v) => {
  const r = (v % 10) + 1;
  const area = Math.round(Math.PI * r * r * 100) / 100;
  const expected = String(area);
  const code = lang === 'Python'
    ? `print(3.14159 * ${r} * ${r})`
    : `console.log(3.14159 * ${r} * ${r});`;
  return {
    title: `Área do círculo (raio ${r})`,
    difficulty: 'Iniciante', xp: 35,
    prompt: `Escreva um programa que calcule a área de um círculo de raio ${r} (use π ≈ 3.14159) e imprima.`,
    initialCode: `${comment(lang)} Área = π × r², r = ${r}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `Área = π × r² = 3.14159 × ${r}² = ${area}. Use Math.PI ou 3.14159 multiplicado pelo raio ao quadrado.`,
  };
},

// 10. Celsius → Fahrenheit
(lang, v) => {
  const c = (v % 50) - 10;
  const f = Math.round((c * 9/5 + 32) * 10) / 10;
  const expected = String(f);
  const code = lang === 'Python'
    ? `print(${c} * 9 / 5 + 32)`
    : `console.log(${c} * 9 / 5 + 32);`;
  return {
    title: `${c}°C → Fahrenheit`,
    difficulty: 'Iniciante', xp: 35,
    prompt: `Escreva um programa que converta ${c}°C para Fahrenheit (=${f}) e imprima. Fórmula: F = C × 9/5 + 32.`,
    initialCode: `${comment(lang)} Converter ${c}°C para Fahrenheit:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${c}°C = ${f}°F. A fórmula é F = C × 9/5 + 32. Substituindo: ${c} × 9/5 + 32 = ${f}.`,
  };
},

// 11. Inverter string
(lang, v) => {
  const palavras = ['casa','código','python','monitor','teclado','mouse','cable',
    'carga','tela','botão','loop','array','dados','web','node','react','vue',
    'angular','swift','kotlin','java','rust','golang','docker','linux','shell',
    'pip','npm','yarn','git','bash','zsh','fish','perl','ruby','scala','haskell',
    'elixir','closure','lambda','kernel','thread','mutex','async','await','promise',
    'buffer','cache','queue','stack'];
  const w = palavras[v % palavras.length];
  const inv = w.split('').reverse().join('');
  const code = lang === 'Python'
    ? `print("${w}"[::-1])`
    : `console.log("${w}".split("").reverse().join(""));`;
  return {
    title: `Inverta "${w}"`,
    difficulty: 'Iniciante', xp: 40,
    prompt: `Escreva um programa que inverta a string "${w}" e imprima o resultado ("${inv}").`,
    initialCode: `${comment(lang)} Inverta a string "${w}":\n\n`,
    solutionCode: code,
    testValidation: validate(inv, lang),
    explanation: `"${w}" invertido é "${inv}". ` + (lang === 'Python' ? 'Use slicing [::-1].' : 'Use split("").reverse().join("").'),
  };
},

// 12. Contar vogais
(lang, v) => {
  const palavras = ['abacaxi','programacao','javascript','computador','algoritmo',
    'biblioteca','desenvolvimento','estrutura','variavel','funcao',
    'interface','heranca','polimorfismo','encapsulamento','recursao',
    'iteracao','condicao','operador','expressao','declaracao'];
  const w = palavras[v % palavras.length];
  const vogais = (w.match(/[aeiouáéíóú]/gi) || []).length;
  const expected = String(vogais);
  const code = lang === 'Python'
    ? `v = 0\nfor c in "${w}":\n    if c in "aeiouAEIOU": v += 1\nprint(v)`
    : `let v = 0;\nfor (const c of "${w}") {\n  if ("aeiouAEIOU".includes(c)) v++;\n}\nconsole.log(v);`;
  return {
    title: `Vogais em "${w}"`,
    difficulty: 'Intermediário', xp: 45,
    prompt: `Escreva um programa que conte quantas vogais há na string "${w}" (${vogais} vogais) e imprima o resultado.`,
    initialCode: `${comment(lang)} Conte as vogais em "${w}":\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `"${w}" tem ${vogais} vogais. Percorra cada caractere e verifique se é a, e, i, o ou u.`,
  };
},

// 13. Verificar primo
(lang, v) => {
  const n = (v % 40) + 2;
  let primo = n > 1;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) { primo = false; break; }
  const expected = primo ? 'primo' : 'não primo';
  const msg = primo ? `${n} é primo` : `${n} não é primo`;
  const code = lang === 'Python'
    ? `print("${msg}")`
    : `console.log("${msg}");`;
  return {
    title: `${n} é primo?`,
    difficulty: 'Intermediário', xp: 50,
    prompt: `Escreva um programa que verifique se ${n} é primo e imprima "${msg}".`,
    initialCode: `${comment(lang)} Verifique se ${n} é primo:\n${comment(lang)} Teste divisores de 2 até √${n}\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${n} ${primo ? 'é primo (só divisível por 1 e por si mesmo)' : 'não é primo'}. Teste divisores de 2 até √${n}.`,
  };
},

// 14. Soma de 1 a N
(lang, v) => {
  const n = (v % 20) + 5;
  const soma = (n * (n + 1)) / 2;
  const expected = String(soma);
  const code = lang === 'Python'
    ? `s = 0\nfor i in range(1, ${n + 1}):\n    s += i\nprint(s)`
    : `let s = 0;\nfor (let i = 1; i <= ${n}; i++) s += i;\nconsole.log(s);`;
  return {
    title: `Soma de 1 a ${n}`,
    difficulty: 'Iniciante', xp: 40,
    prompt: `Escreva um programa que some todos os números de 1 a ${n} (=${soma}) e imprima o resultado.`,
    initialCode: `${comment(lang)} Soma de 1 a ${n}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `A soma de 1 a ${n} é ${soma} (fórmula: n×(n+1)/2 = ${n}×${n+1}/2). Use um loop acumulador ou a fórmula fechada.`,
  };
},

// 15. Tabuada do × 7
(lang, v) => {
  const n = (v % 12) + 1;
  const expected = `${n} x 7 = ${n * 7}`;
  const code = lang === 'Python'
    ? `print("${n} x 7 =", ${n} * 7)`
    : `console.log("${n} x 7 =", ${n} * 7);`;
  return {
    title: `${n} × 7 = ?`,
    difficulty: 'Iniciante', xp: 25,
    prompt: `Escreva um programa que calcule ${n} × 7 (=${n * 7}) e imprima no formato "${n} x 7 = ${n * 7}".`,
    initialCode: `${comment(lang)} Calcule ${n} × 7:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${n} × 7 = ${n * 7}. Multiplique ${n} por 7 e imprima no formato "n x 7 = resultado".`,
  };
},

// 16. MDC (GCD)
(lang, v) => {
  const a = (v % 30) + 12, b = (v % 20) + 8;
  const gcd = (x, y) => { while (y) { [x, y] = [y, x % y]; } return x; };
  const g = gcd(a, b);
  const expected = String(g);
  const code = lang === 'Python'
    ? `a, b = ${a}, ${b}\nwhile b:\n    a, b = b, a % b\nprint(a)`
    : `let a = ${a}, b = ${b};\nwhile (b) { [a, b] = [b, a % b]; }\nconsole.log(a);`;
  return {
    title: `MDC de ${a} e ${b}`,
    difficulty: 'Avançado', xp: 65,
    prompt: `Escreva um programa que calcule o MDC (Máximo Divisor Comum) de ${a} e ${b} (=${g}) usando o algoritmo de Euclides.`,
    initialCode: `${comment(lang)} MDC de ${a} e ${b} (algoritmo de Euclides):\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `O MDC de ${a} e ${b} é ${g}. O algoritmo de Euclides troca (a, b) por (b, a%b) até b=0; o resultado é o último a.`,
  };
},

// 17. Ano bissexto
(lang, v) => {
  const year = 2000 + (v % 28);
  const bis = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const expected = bis ? 'bissexto' : 'não bissexto';
  const msg = bis ? `${year} é bissexto` : `${year} não é bissexto`;
  const code = lang === 'Python'
    ? `print("${msg}")`
    : `console.log("${msg}");`;
  return {
    title: `${year} é bissexto?`,
    difficulty: 'Intermediário', xp: 45,
    prompt: `Escreva um programa que verifique se ${year} é ano bissexto e imprima "${msg}". Regra: divisível por 4, exceto por 100, a menos que por 400.`,
    initialCode: `${comment(lang)} Verifique se ${year} é bissexto:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${year} ${bis ? 'É bissexto' : 'NÃO é bissexto'}. Regra: divisível por 4 E (não por 100 OU por 400).`,
  };
},

// 18. Potência
(lang, v) => {
  const base = (v % 9) + 2, exp = (v % 6) + 2;
  const result = Math.pow(base, exp);
  const expected = String(result);
  const code = lang === 'Python'
    ? `print(${base} ** ${exp})`
    : `console.log(${base} ** ${exp});`;
  return {
    title: `${base}^${exp} = ?`,
    difficulty: 'Iniciante', xp: 30,
    prompt: `Escreva um programa que calcule ${base} elevado a ${exp} (=${result}) e imprima o resultado.`,
    initialCode: `${comment(lang)} Calcule ${base}^${exp}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${base}^${exp} = ${result}. ` + (lang === 'Python' ? 'Use o operador **.' : 'Use o operador ** ou Math.pow().'),
  };
},

// 19. Multiplicação de dois números
(lang, v) => {
  const a = (v % 13) + 3, b = (v % 17) + 4;
  const result = a * b;
  const expected = String(result);
  const code = lang === 'Python'
    ? `print(${a} * ${b})`
    : `console.log(${a} * ${b});`;
  return {
    title: `Multiplique ${a} × ${b}`,
    difficulty: 'Iniciante', xp: 25,
    prompt: `Escreva um programa que calcule ${a} × ${b} (=${result}) e imprima o resultado.`,
    initialCode: `${comment(lang)} Calcule ${a} × ${b}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${a} × ${b} = ${result}. Use o operador * para multiplicar os dois valores.`,
  };
},

// 20. Resto da divisão
(lang, v) => {
  const a = (v % 50) + 10, b = (v % 9) + 2;
  const result = a % b;
  const expected = String(result);
  const code = lang === 'Python'
    ? `print(${a} % ${b})`
    : `console.log(${a} % ${b});`;
  return {
    title: `Resto de ${a} ÷ ${b}`,
    difficulty: 'Iniciante', xp: 25,
    prompt: `Escreva um programa que calcule o resto da divisão de ${a} por ${b} (=${result}) e imprima o resultado.`,
    initialCode: `${comment(lang)} Resto de ${a} ÷ ${b}:\n\n`,
    solutionCode: code,
    testValidation: validate(expected, lang),
    explanation: `${a} % ${b} = ${result} (o resto da divisão de ${a} por ${b}). Use o operador % (módulo).`,
  };
},

]; // fim TEMPLATES

const SLUGS = {
  'JavaScript':'js','Python':'py','TypeScript':'ts','HTML':'html','CSS':'css',
  'SQL':'sql','C':'c','C++':'cpp','C#':'cs','React Native':'rn','Rust':'rs','Go':'go',
};

export const WRITE_PER_LANG = 1000;

export function generateWriteExercises(perLang = WRITE_PER_LANG) {
  const all = [];
  const variantsPerTemplate = Math.ceil(perLang / TEMPLATES.length); // 50

  for (const lang of WRITE_LANGS) {
    const slug = SLUGS[lang];
    let n = 0;
    for (let t = 0; t < TEMPLATES.length && n < perLang; t++) {
      for (let v = 0; v < variantsPerTemplate && n < perLang; v++) {
        const tpl = TEMPLATES[t];
        const ex = tpl(lang, v);
        all.push({
          id: `gen-${slug}-write-${n}`,
          title: ex.title,
          type: 'write-code',
          language: lang,
          difficulty: ex.difficulty,
          xp: ex.xp,
          prompt: ex.prompt,
          initialCode: ex.initialCode,
          solutionCode: ex.solutionCode,
          testValidation: ex.testValidation,
          explanation: ex.explanation,
        });
        n++;
      }
    }
  }
  return all;
}

export const GENERATED_WRITE_EXERCISES = generateWriteExercises();
