const express = require('express');

const RecipeRouter = require('./routers/RecipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;