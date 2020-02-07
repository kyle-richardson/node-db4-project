const express = require('express');

const db = require('./RecipeModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.getIngredients()
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' });
        });
  });


router.get('/:id/recipes', async (req, res) => {
    const {id} = req.params
    try {
        const list = await db.getRecipesForIngredient(id)
        res.status(200).json(list)
    }
    catch{
        res.status(500).json({ message: 'Failed to get list at index' })
    }
    
})

module.exports = router;