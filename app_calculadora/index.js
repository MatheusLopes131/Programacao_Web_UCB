const calc = require('./calculadora'); // Puxa as funções de outro arquivo
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>/somar/:a/:b <a href="/somar/1/2">testar</a></p>';
    html += '<p>/subtrair/:a/:b <a href="/subtrair/1/2">testar</a></p>';
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a></p>';
    html += '<p>/dividir/:a/:b <a href="/dividir/1/2">testar</a></p>';
    res.send(html);
});

app.get('/ola/:nome', (req,res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

app.get('/somar/:a/:b', (req,res)=>{
    res.send(`O valor de a + b é , ${calc.somar(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/subtrair/:a/:b', (req,res)=>{
    res.send(`O valor de a - b é , ${calc.subtrair(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/multiplicar/:a/:b', (req,res)=>{
    res.send(`O valor de a x b é , ${calc.multiplicar(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

app.get('/dividir/:a/:b', (req,res)=>{
    res.send(`O valor de a % b é , ${calc.dividir(parseFloat(req.params.a),parseFloat(req.params.b))}!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' , PORT);
});