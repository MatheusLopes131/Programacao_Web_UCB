let itens = []



function adicionar(objeto){
        itens.push(objeto)
}

function lista(){
    return itens;
}

function remover(id){
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            itens.splice(item_cadastrado.id,1) 
        }
    })
}

function editar(id,qtd){
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.quantidade = qtd;
        }
    });
}


module.exports = { 
    adicionar,
    lista,
    remover,
    editar,
}