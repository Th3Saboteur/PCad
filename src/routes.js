const express = require('express'); //Importa express
const routes = express.Router(); //Extrai apenas as rotas do express
const productCtrl = require('./controller/productCtrl'); //Importa controlador para acesso ao banco (script)
const userCtrl = require('./controller/userCtrl'); //Importa controlador para acesso ao banco (script)
const adCtrl = require('./controller/adCtrl'); //Importa controlador para acesso ao banco (script)

routes.get('/products', productCtrl.test);
routes.post('/products/create', productCtrl.createProduct); //Chama a função do controlador para a rota 
routes.get('/products/list', productCtrl.listProducts); //Chama a função do controlador para a rota    
routes.get('/products/show/:id', productCtrl.showProduct); //Chama a função do controlador para a rota  
routes.put('/products/update/:id', productCtrl.updateProduct); //Chama a função do controlador para a rota 
routes.delete('/products/delete/:id', productCtrl.deleteProduct); //Chama a função do controlador para a rota

routes.get('/users', userCtrl.test);
routes.post('/users/create', userCtrl.createUser); //Chama a função do controlador para a rota 
routes.get('/users/list', userCtrl.listUsers); //Chama a função do controlador para a rota    
routes.get('/users/show/:id', userCtrl.showUser); //Chama a função do controlador para a rota  
routes.put('/users/update/:id', userCtrl.updateUser); //Chama a função do controlador para a rota 
routes.delete('/users/delete/:id', userCtrl.deleteUser); //Chama a função do controlador para a rota

routes.get('/ads', adCtrl.test);
routes.post('/ads/create', adCtrl.createAd); //Chama a função do controlador para a rota 
routes.get('/ads/list', adCtrl.listAds); //Chama a função do controlador para a rota    
routes.get('/ads/show/:id', adCtrl.showAd); //Chama a função do controlador para a rota  
routes.put('/ads/update/:id', adCtrl.updateAd); //Chama a função do controlador para a rota 
routes.delete('/ads/delete/:id', adCtrl.deleteAd); //Chama a função do controlador para a rota

module.exports = routes; //Exporta variável routes (com as rotas) para acesso externo