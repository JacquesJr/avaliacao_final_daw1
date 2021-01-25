const express = require('express')
const controller = require('./controller')

const registerRoutes = new express.Router();

//Criar um novo cadastro
registerRoutes.post('/', controller.create);

//remove um cadastro
registerRoutes.delete('/', controller.delete);

module.exports = registerRoutes