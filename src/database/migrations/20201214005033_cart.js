
exports.up = function(knex) {
    return knex.schema.createTable('carts', function (table) { //Cria a Tabela
        table.string('user').notNullable();
        table.string('ad').notNullable();
        table.foreign('user').references('users.id');
        table.foreign('ad').references('ad.id');
        table.primary(['user', 'ad']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('carts'); //Deleta a tabela
};
