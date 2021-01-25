const express = require('express')
const controller = require('./controller')

const eventRoutes = new express.Router()
//Criar um novo evento
eventRoutes.post('/', controller.create)

//Busca todos os eventos
eventRoutes.get('/', controller.findAll)

//Busca todos os eventos
eventRoutes.get('/:id', controller.findByUser)

//Edita um evento
eventRoutes.put('/:id', controller.update)

//remove um evento
eventRoutes.delete('/:id', controller.delete)

module.exports = eventRoutes