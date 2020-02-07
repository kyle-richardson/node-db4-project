exports.seed = function(knex) {
    return knex('recipes').insert([
      {recipe_name: 'Cupcakes'},
      {recipe_name: 'Cake'},
      {recipe_name: 'Brownies'},
    ]);
  };
  