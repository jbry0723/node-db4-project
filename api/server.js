const express = require('express');
const recipebookRouter=require('./recipebook/recipebook-router')
const ingredientsRouter=require('./ingredients/ingredients-router')



const server = express();

server.use('/api/recipebook',recipebookRouter)
server.use('/api/ingredients',ingredientsRouter)

module.exports = server;