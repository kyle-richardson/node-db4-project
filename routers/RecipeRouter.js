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

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const recipeObj = 
        {
            recipe: await db.getRecipeById(id),
            instructions: await db.getInstructions(id),
            shoppingList: await db.getShoppingList(id)
        }
        res.status(200).json(recipeObj)
    }
    catch {
        res.status(500).json({ error: 'server error'})
    }
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params
    db.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions at index' });
        });
})

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params
    db.getShoppingList(id)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get list at index' });
        });
})

router.get('/ingredients/:id/recipes', async (req, res) => {
    const {id} = req.params
    try {
        const list = await db.getRecipesForIngredient(id)
        res.status(200).json(list)
    }
    catch{
        res.status(500).json({ message: 'Failed to get list at index' })
    }
    
})

router.get('/ingredients/', async (req, res) => {
    try {
        const list = await db.getIngredients()
        res.status(200).json(list)
    }
    catch{
        res.status(500).json({ message: 'Failed to get ingredients' })
    }
    
})

module.exports = router;