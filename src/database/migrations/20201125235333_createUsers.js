
exports.up = function(knex) { //Para quando executar a migrations
    return knex.schema.createTable('users', function (table) { //Cria a Tabela
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();  
    });
};

exports.down = function(knex) { //Para quando desfazer as modificações 
    return knex.schema.dropTable('users'); //Deleta a tabela
};
