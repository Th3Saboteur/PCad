const connection = require('../database/connection'); //Importa script de conexão com o banco

module.exports = { //Exporta lógica de negócio das rotas

    async test({}, res){
        return res.json("Salve, truta! Tudo suave em carrinhos..."); 
    }, 

    async createCart(req, res){ 
        const {user, ad} = req.body; 
        await connection('carts').insert({ 
            user, 
            ad
        });
        return res.status(204).send();
    },

    async listCarts(req, res){ 
        const {user} = req.params;
        const carts = await connection('carts').innerJoin('users', 'carts.user', 'users.id')
        .innerJoin('ads', 'carts.ad', 'ads.id').innerJoin('products', 'ads.product', 'products.id').
        where('carts.user', '=', user).select(
            'carts.user',
            'carts.ad',
            'users.nome as vendedor', 
            'products.tipo',
            'products.marca',
            'ads.info', 
            'ads.price', 
            'ads.desc'
        );
        return res.json(carts); 
    },

    async deleteCart(req, res){ //Deleta anúncio pelo id
        const {user, ad} = req.params;
        await connection('carts').where('user', '=', user, 'and', 'ad', '=', ad).delete(); //Deleta o anúncio da tabela
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    },

    async deleteAllCarts(req, res){ //Deleta anúncio pelo id
        const {user} = req.params;
        await connection('carts').where('user', user).delete(); //Deleta o anúncio da tabela
        return res.status(204).send(); //Responde com o status de sucesso sem contexto
    }
}