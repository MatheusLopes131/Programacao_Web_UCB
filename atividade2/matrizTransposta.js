let matriz = [
    [1,2],
    [3,4],
    [5,6]
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

function transporMatriz(A){
    for(let i = 0; i < A[i].length; i++){
        let linha = "";
        for(let j = 0; j < A.length; j++){
            linha += A[j][i] + " "; // usar \t para ter mais espaço //
        }

        console.log(linha);
    }
}

transporMatriz(matriz);