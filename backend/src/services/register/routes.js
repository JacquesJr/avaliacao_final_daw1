const express = require('express')
const controller = require('./controller')

const registerRoutes = new express.Router();

//Criar um novo cadastro
registerRoutes.post('/', controller.create);

//Busca por id
registerRoutes.get('/:id', controller.findOne);

//remove um cadastro
registerRoutes.delete('/:id', controller.delete);

module.exports = registerRoutes