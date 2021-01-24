const express = require('express');
const userRoutes = require('./services/user/routes');
const registerRoutes = require('./services/register/routes');
const eventRoutes = require('./services/event/routes');
const authRoutes = require('./services/auth/routes');
const middlewares = require('./middlewares');

const routes = new express.Router();

routes.use('/users', userRoutes);
routes.use('/registers', registerRoutes);
routes.use('/events', middlewares.ensureAuthenticaded, eventRoutes);
routes.use('/auth', authRoutes);

module.exports = routes;