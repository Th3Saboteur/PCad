const express = require('express'); //Importa express
const routes = express.Router(); //Extrai apenas as rotas do express
const productCtrl = require('./controller/productCtrl'); //Importa controlador para acesso ao banco (script)

routes.get('/', productCtrl.test);

routes.post('/products/create', productCtrl.createProduct); //Chama a função do controlador para a rota 

routes.get('/products/list', productCtrl.listProducts); //Chama a função do controlador para a rota    

routes.get('/products/:id', productCtrl.showProduct); //Chama a função do controlador para a rota  

routes.put('/products/:id', productCtrl.updateProduct); //Chama a função do controlador para a rota 

routes.delete('/products/:id', productCtrl.deleteProduct); //Chama a função do controlador para a rota 

module.exports = routes; //Exporta variável routes (com as rotas) para acesso externo