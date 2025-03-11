let n1 = 5;
let n2 = 3;

let operacoes = ["soma", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operando1, operando2, operacao, resultado){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é: ${resultado}`);
    // Declaração de função //
}

let soma = n1+n2;
let sub = n1-n2;
let mult = n1*n2;
let div = n1/n2;

imprimirResultado(n1, n2, operacoes[0], soma);
imprimirResultado(n1, n2, operacoes[1], sub);
imprimirResultado(n1, n2, operacoes[2], mult);
imprimirResultado(n1, n2, operacoes[3], div);

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    // Declaração de Matriz //
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j< A[i].length; j++){
            linha += A[i][j] + " "; // usar \t para ter mais espaço //
        }
        console.log(linha);
    }
}

imprimirMatriz(matriz);

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
}; // Definição de objeto //

console.log(capitais.DF + " - " + capitais.DDD_DF);

for(chave in capitais){
    console.log(chave + "=" + capitais[chave]); 
    // define que cada key dos objetos é definido em chave e imprimido aqui //
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

let n = 2;
console.log(`VerificarParidade(${n}) = ${verificarParidade(n)}`);
n = 3;
console.log(`VerificarParidade(${n}) = ${verificarParidade(n)}`);
n = 7;
console.log(`VerificarParidade(${n}) = ${verificarParidade(n)}`);
n = 10;
console.log(`VerificarParidade(${n}) = ${verificarParidade(n)}`);