
exports.up = function(knex) { //Para quando executar a migrations
    return knex.schema.createTable('products', function (table) { //Cria a Tabela
        table.string('id').primary();
        table.string('tipo').notNullable();
        table.string('marca').notNullable(); 
    });
};

exports.down = function(knex) { //Para quando desfazer as modificações 
    return knex.schema.dropTable('products'); //Deleta a tabela
};
