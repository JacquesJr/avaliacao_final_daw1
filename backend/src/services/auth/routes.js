const express = require('express')
const controller = require('./controller')

const authRoutes = new express.Router()

authRoutes.post('/', controller.auth);

module.exports = authRoutes