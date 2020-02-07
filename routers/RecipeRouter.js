const express = require('express');

const db = require('./RecipeModel.js');

//getRecipes,
// getRecipeById,
// getShoppingList,
// getInstructions,
const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
  });

router.get('/:id', (req, res) => {
    const {id} = req.params
    db.getRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe at index' });
        });
})