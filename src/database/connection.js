const knex = require('knex'); //Importa knex para fazer conexão com o banco
const config = require('../../knexfile'); //Importa arquivo de configuração do knex
//const { connect } = require('../routes'); //???

connection = knex(config.development); //Atribui ao script a seção development do arquivo de configuração

module.exports = connection; //Exporta a conexão 