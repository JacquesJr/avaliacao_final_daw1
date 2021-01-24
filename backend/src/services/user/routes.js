const express = require('express')
const controller = require('./controller')

const userRoutes = new express.Router();

//Criar um novo usuário
userRoutes.post('/', controller.create)

//Achar um usuário
userRoutes.get('/:id', controller.findOne)

module.exports = userRoutes