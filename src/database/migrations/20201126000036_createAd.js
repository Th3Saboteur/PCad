
exports.up = function(knex) { //Para quando executar a migrations
    return knex.schema.createTable('ads', function (table) { //Cria a Tabela
        table.string('id').primary();
        table.string('user').notNullable();
        table.foreign('user').references('users.id');
        table.string('product').notNullable();
        table.foreign('product').references('products.id');
        table.string('info').notNullable();
        table.float('price').notNullable();
        table.string('desc');
    });
};

exports.down = function(knex) { //Para quando desfazer as modificações 
    return knex.schema.dropTable('ads'); //Deleta a tabela
};

