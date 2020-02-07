const express = require('express');

const RecipeRouter = require('./routers/RecipeRouter.js');
const IngredientsRouter = require('./routers/IngredientsRouter')

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter)
server.use('/api/ingredients', IngredientsRouter)



module.exports = server;