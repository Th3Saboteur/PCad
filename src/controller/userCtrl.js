const connection = require('../database/connection'); //Importa script de conexão com o banco
const crypto = require('crypto'); //Pacote do Node

module.exports = { //Exporta lógica de negócio das rotas

    async test({}, res){
        return res.json("Salve, truta! Tudo suave em usuários..."); 
    },

    async createUser(req, res){ //Cria novo usuário
        const {nome, email, senha} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        const id = crypto.randomBytes(4).toString('hex'); //Gera arquivo de 4 bytes e transforma em string no formato hexadecimal
        await connection('users').insert({ //Insere na tabela users os dados obtidos
            id, 
            nome, 
            email,
            senha
        });
        return res.json({id}); //Responde com o id (como objeto) caso dê tudo certo
    },

    async listUsers(req, res){ //Lista todos os usuários
        const users = await connection('users').select('*'); //Seleciona todas tuplas da tabela users
        return res.json(users); //Responde com os usuários
    },

    async showUser(req, res){ //Mostra um usuário pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const user = await connection('users').where('id', id).select('*'); //Seleciona todas tuplas da tabela users
        return res.json(user); //Responde com o usuário
    },

    async updateUser(req, res){ //Atualiza um usuário pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const {nome, email, senha} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        await connection('users').where('id', id).update({ //Atualiza na tabela users os dados obtidos
            id, 
            nome,  
            email, 
            senha
        }); 
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    },

    async deleteUser(req, res){ //Deleta usuário pelo id
        const {id} = req.params;
        await connection('users').where('id', id).delete(); //Deleta o usuário da tabela
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
        //return res.status(200).send("Usuário" + id + "deletado com sucessso!"); //Responde com o status de sucesso sem contexto
    }
    
}