exports.seed = function(knex) {
    return knex("ingredients").insert([
        {
            item_name: 'brown sugar',
            quantity: 1,
            measure_id: 1,
            recipe_id: 1
        },
        {
            item_name: 'flour',
            quantity: 4,
            measure_id: 1,
            recipe_id: 1
        },
        {
            item_name: 'salt',
            quantity: 2,
            measure_id: 5,
            recipe_id: 1
        },
        {
            item_name: 'eggs',
            quantity: 2,
            measure_id: 6,
            recipe_id: 2
        },
        {
            item_name: 'flour',
            quantity: 3,
            measure_id: 1,
            recipe_id: 2
        },
        
    ]);
};
