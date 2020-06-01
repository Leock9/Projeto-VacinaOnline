exports.up = function(knex) {
    return knex.schema.createTable('postosSaude', function (table) {
        table.string('id').primary();
        table.string('nomePosto').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('logradouro').notNullable();
        table.string('CEP').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('postosSaude');
};
