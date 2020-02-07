
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128)
            .notNullable();
    })
    .createTable('measurements', tbl => {
        tbl.increments();
        tbl.string('measurement_name', 128)
            .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('item_name', 128);
        tbl.integer('quantity')
            .notNullable()
        tbl.integer('measure_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('measurements')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('step', 128)
        tbl.integer('step_number')
            .notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('measurements')
    .dropTableIfExists('recipes')
};
