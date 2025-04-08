let itens = []



function adicionar(objeto){
        itens.push(objeto)
}

function lista(){
    return itens;
}

function remover(posicao){
    itens.splice(posicao,1)
    itens.splice(posicao,1)
    itens.splice(posicao,1)
}

function editar(num,quant){
    let posicao = itens.indexOf(num)
    itens.splice(posicao,1,quant)
}

module.exports = { 
    adicionar,
    lista,
    remover,
    editar,
    itens
}