const express = require('express')
const controller = require('./controller')

const userRoutes = new express.Router();

//Criar um novo usuário
userRoutes.post('/', controller.create)

module.exports = userRoutes