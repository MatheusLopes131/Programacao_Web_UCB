const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', (req,res)=>{

    res.render('index.html');
});

app.post('agendar_consulta', (req,res)=>{
    
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' , PORT);
});