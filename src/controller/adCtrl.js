const connection = require('../database/connection'); //Importa script de conexão com o banco
const crypto = require('crypto'); //Pacote do Node

module.exports = { //Exporta lógica de negócio das rotas

    async test({}, res){
        return res.json("Salve, truta! Tudo suave em anúcios..."); 
    }, 

    async createAd(req, res){ //Cria novo anúncio
        const {user, tipo, marca, info, price, desc} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        const id = crypto.randomBytes(4).toString('hex'); //Gera arquivo de 4 bytes e transforma em string no formato hexadecimal
        await connection('ads').insert({ //Insere na tabela ads os dados obtidos
            id, 
            user, 
            tipo,
            marca, 
            info, 
            price, 
            desc
        });
        return res.json({id}); //Responde com o id (como objeto) caso dê tudo certo
    },

    async listAds(req, res){ //Lista todos os anúncios
        const ads = await connection('ads').innerJoin('users', 'ads.user', 'users.id').select(
            'ads.id',
            'users.nome', 
            'ads.tipo',
            'ads.marca',
            'ads.info', 
            'ads.price', 
            'ads.desc'
        );
        return res.json(ads); //Responde com os anúncios
    },

    async showAd(req, res){ //Mostra um anúncio pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const ad = await connection('ads').where('ads.id', id).innerJoin('users', 'ads.user', 'users.id')
        .select(
            'ads.id',
            'users.nome', 
            'ads.tipo',
            'ads.marca',
            'ads.info', 
            'ads.price', 
            'ads.desc'
        ); //Seleciona tupla da tabela ads peo id 
        return res.json(ad); //Responde com o anúncio
    },

    async updateAd(req, res){ //Atualiza um anúncio pelo id
        const {id} = req.params; //Atribui ao objeto o id recebido pelo parâmetro da requisição 
        const {tipo, marca, info, price, desc} = req.body; //Atribui o que vem da requisição às variáveis esperadas
        await connection('ads').where('id', id).update({ //Atualiza na tabela ads os dados obtidos
            'tipo': tipo,
            'marca': marca,
            'info': info, 
            'price': price, 
            'desc': desc
        }); 
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    },
    
    async deleteAd(req, res){ //Deleta anúncio pelo id
        const {id} = req.params;
        await connection('ads').where('id', id).delete(); //Deleta o anúncio da tabela
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    },

    async searchAds(req, res){
        const {campo, tag} = req.params;
        const search = '%' + tag.toString() + '%'; 
        const ads = await connection('ads').innerJoin('users', 'ads.user', 'users.id').
        where(campo, 'like', search)
        .select(
            'ads.id',
            'users.nome as vendedor', 
            'ads.tipo',
            'ads.marca',
            'ads.info', 
            'ads.price', 
            'ads.desc'
        );
        //if(ads.length === 0) return res.status(404).send();
        return res.json(ads);
    },

    async newsAds(req, res){
        const ads = await connection('ads').innerJoin('users', 'ads.user', 'users.id').select(
            'ads.id',
            'users.nome', 
            'ads.tipo',
            'ads.marca',
            'ads.info', 
            'ads.price', 
            'ads.desc'
        ).limit(3);
        return res.json(ads);
    }

}