
exports.up = function(knex) {
    return knex.schema.createTable('vacinas', function (table) {
        table.increments();
        table.string('nomeVacina').notNullable();
        table.decimal('valor').notNullable();
        table.string('idadeRecomendada').notNullable();
        table.string('numeroDoses').notNullable();

        table.string('postoSaude_id').notNullable();
        table.foreign('postoSaude_id').references('id').inTable('postosSaude')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vacinas');
};
