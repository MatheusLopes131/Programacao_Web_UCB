const n = 3;
// Valor fixo não alterável

var j = 2;
var j = 3;
// Pode ser declarada várias vezes e alterada

let i = 4;
i = 6;
// Pode ser alterada várias vezes mas não declarada

console.log('Hello, World!');
console.log('N='+n);
console.log('J='+j);
console.log('I='+i);

let minhaString = "Texto String";
let minhaString2 = 'Texto String 2';
// Declarada com aspas simples ou duplas

let minhaString3 = 'Texto "String" 3';
// Usa aspas simples para tornar aspas duplas um texto

console.log(minhaString);
console.log(minhaString2);
console.log(minhaString3);

let nome = "Matheus";
let cpf = "123.456.789.00";
let telefone = "98765-4321";
let tString = `Meu nome é ${nome}. Meu cpf é ${cpf}. Telefone ${telefone}.`;
// Usar apóstrafo cria uma facilidade em colocar variáveis no texto

console.log(tString);

let x = 5.0;
x = .5;
x = 3;

console.log(typeof x);
console.log(typeof tString);
// Fala o tipo da variável

let verdadeiro = true;
let falso = false;
// Tipos boleanos

console.log(verdadeiro);
console.log(falso);

let conexao = null;
let conexao2;

console.log(conexao);
console.log(conexao2);
// Não declarar vira undefined e não Null

let y = x - n

console.log(y);
