const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
    return db('recipes');
}

function getRecipeById(recipe_id) {
    return db('recipes as r')
        .where({ id: Number(recipe_id) })
        .first()
        .then(recipe => {
            return recipe || null
        })
}
function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('ingredients as i', 'r.id', 'i.recipe_id')
        .join('measurements as m', 'i.measure_id', 'm.id')
        .select('i.id', 'r.recipe_name', 'i.quantity', 'm.measurement_name')
        .where('r.id', recipe_id)
        .then(table=> table || null)
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .select('i.id','r.recipe_name','i.step_number', 'i.step')
        .where('a.id', recipe_id)
        .orderBy('i.step_number', 'asc')
        .then(table=> table || null)
}
