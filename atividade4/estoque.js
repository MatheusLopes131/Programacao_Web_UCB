let id = []
let produtos = []
let quantidade = []


function adicionar(num,produto,quant){
    id.push(num)
    produtos.push(produto)
    quantidade.push(quant)
}

function lista(){
    for(let i = 0; i < id.length; i++){
        console.log(`ID = ${id[i]} / Produto = ${produtos[i]} / Quantidade = ${quantidade[i]}`)
    }
}

function remover(num){
    let posicao = id.indexOf(num)
    id.splice(posicao,1)
    produtos.splice(posicao,1)
    quantidade.splice(posicao,1)
}

function editar(num,quant){
    let posicao = id.indexOf(num)
    quantidade.splice(posicao,1,quant)
}

module.exports = { 
    adicionar,
    lista,
    remover,
    editar,
    produtos,
    id,
    quantidade
}