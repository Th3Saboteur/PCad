const express = require('express'); //Importa express
const routes = express.Router(); //Extrai apenas as rotas do express
const userCtrl = require('./controller/userCtrl'); //Importa controlador para acesso ao banco (script)
const adCtrl = require('./controller/adCtrl'); //Importa controlador para acesso ao banco (script)
const cartCtrl = require('./controller/cartCtrl'); //Importa controlador para acesso ao banco (script)

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
routes.get('/ads/search/:tag', adCtrl.searchAds); //Chama a função do controlador para a rota

routes.get('/carts', cartCtrl.test);
routes.post('/carts/create', cartCtrl.createCart); //Chama a função do controlador para a rota 
routes.get('/carts/list/:user', cartCtrl.listCarts); //Chama a função do controlador para a rota
routes.delete('/carts/delete/:user/:ad', cartCtrl.deleteCart); //Chama a função do controlador para a rota    
routes.delete('/carts/delete/:user', cartCtrl.deleteAllCarts); //Chama a função do controlador para a rota  

module.exports = routes; //Exporta variável routes (com as rotas) para acesso externo