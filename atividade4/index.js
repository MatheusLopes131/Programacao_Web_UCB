const esto = require('./estoque'); 
const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>/adicionar/:id/:nome/:qtd <a href="/adicionar/10000/Arroz/10">testar</a></p>';
    html += '<p>/adicionar/:id/:nome/:qtd <a href="/adicionar/10001/Feijão/12">testar</a></p>';
    html += '<p>/adicionar/:id/:nome/:qtd <a href="/adicionar/10002/Farinha/5">testar</a></p>';
    html += '<p>/listar <a href="/listar">testar</a></p>';
    html += '<p>/remover/:id <a href="/remover/10000">testar</a></p>';
    html += '<p>/editar/:id/:qtd <a href="/editar/10001/20">testar</a></p>';
    res.send(html);
});

app.get('/adicionar/:id/:nome/:qtd', (req,res)=>{
    let item = {
        id:(Number(req.params.id)),
        produtos:(req.params.nome),
        quantidade:(Number(req.params.qtd))
    }
    esto.adicionar(item);
    res.send(`Produto Adicionado!!!`);
});

app.get('/listar', (req,res)=>{
    res.send(esto.lista())
});

app.get('/remover/:id', (req,res)=>{
    esto.remover(Number(req.params.id))
    res.send(`Produto Removido!!!`);
});

app.get('/editar/:id/:qtd', (req,res)=>{
    esto.editar((Number(req.params.id)),(Number(req.params.qtd)))
    res.send(`Produto Editado!!!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' , PORT);
});