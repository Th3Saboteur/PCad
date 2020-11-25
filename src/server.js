const express = require('express'); //Importa framework express 
const routes = require('./routes'); //Importa script routes.js
const cors = require('cors'); //Importa API cors (gerenciamento de domínios)

const app = express(); //Inicializa aplicação usando express (sem limite de domínios)

app.use(cors()); //Inicia o cors com acesso para qualquer requisição
app.use(express.json()); //Permite que a aplicação reconheça o fomato json (nas requisições)
app.use(routes); //Deve ser depois de "app.use(express.json());" para renhecer as requisições

app.listen(3001); 