const connection = require('../database/connection'); //Importa script de conexão com o banco
const crypto = require('crypto'); //Pacote do Node

module.exports = { //Exporta lógica de negócio das rotas

    async test({}, res){
        return res.json("Salve, truta! Tudo suave em produtos..."); 
    },

    async createProduct(req, res){ //Cria novo produto
        const {tipo, marca} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        const id = crypto.randomBytes(4).toString('hex'); //Gera arquivo de 4 bytes e transforma em string no formato hexadecimal
        await connection('products').insert({ //Insere na tabela products os dados obtidos
            id, 
            tipo, 
            marca,
        });
        return res.json({id}); //Responde com o id (como objeto) caso dê tudo certo
    },

    async listProducts(req, res){ //Lista todos os produtos
        const products = await connection('products').select('*'); //Seleciona todas tuplas da tabela products
        return res.json(products); //Responde com os produtos
    },

    async showProduct(req, res){ //Mostra um produto pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const product = await connection('products').where('id', id).select('*'); //Seleciona todas tuplas da tabela products
        return res.json(product); //Responde com o produto
    },

    async updateProduct(req, res){ //Atualiza um produto pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const {tipo, marca} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        await connection('products').where('id', id).update({ //Atualiza na tabela products os dados obtidos
            id, 
            tipo,  
            marca
        }); 
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    },

    async deleteProduct(req, res){ //Deleta produto pelo id
        const {id} = req.params;
        await connection('products').where('id', id).delete(); //Deleta o produto da tabela
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
        //return res.status(200).send("Produto " + id + "deletado com sucessso!"); //Responde com o status de sucesso sem contexto
    }
}