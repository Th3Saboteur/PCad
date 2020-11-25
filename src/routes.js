const express = require('express'); //Importa express
const routes = express.Router(); //Extrai apenas as rotas do express
const connection = require('./database/connection'); //Importa script de conexão com o banco
//const productCtrl = require('./controller/productCtrl'); //Importa controlador para acesso ao banco (script)
const crypto = require('crypto'); //Pacote do Node 

routes.get('/', (req, res)=>{
    res.send("Salve, truta! Tudo suave até aqui...");
});

routes.post('/createproduct', async(req, res)=>{
    const {tipo, marca, modelo} = req.body; //Atribui o que vem da requisição às variáveis esperadas
    const id = crypto.randomBytes(4).toString('hex'); //Gera arquivo de 4 bytes e transforma em string no formato hexadecimal
    await connection('products').insert({ //Insere na tabela products os dados obtidos
        id, 
        tipo, 
        marca, 
        modelo
    });
    //console.log(params);
    res.json({id}); //Responde com o id (como objeto) caso dê tudo certo
}); 

routes.get('/products', async(req, res)=>{
    const users = await connection('products').select('*'); //Seleciona todas tuplas da tabela products
    //console.log(params);
    res.json(users); //Responde com os usuários
}); 

// routes.get('/users', "Salve, truta");

module.exports = routes; //Exporta variável routes (com as rotas) para acesso externo