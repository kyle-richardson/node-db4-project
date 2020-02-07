exports.seed = function(knex) {
    return knex("instructions").insert([
        {
            recipe_id: 1,
            step_number: 1,
            step: "gather ingredients",
        },
        {
            recipe_id: 1,
            step_number: 2,
            step: "mix liquid ingredients in medium size bowl",
        },
        {
            recipe_id: 1,
            step_number: 3,
            step: "rest of the ******** owl",
        },
        {
            recipe_id: 2,
            step_number: 1,
            step: "hello, my name is kyle",
        },
        {
            recipe_id: 2,
            step_number: 2,
            step: "what are we doing here again?",
        },
        {
            recipe_id: 3,
            step_number: 1,
            step: "test 3.1",
        },
        {
            recipe_id: 3,
            step_number: 2,
            step: "test 3.2",
        },
        {
            recipe_id: 3,
            step_number: 3,
            step: "test 3.3",
        },
        {
            recipe_id: 3,
            step: "test 3.4",
        },

        
    ]);
};
