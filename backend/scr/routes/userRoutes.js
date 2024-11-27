const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// Rota para criar um usuário
routes.post('/users', UserController.create);

// Rota para listar todos os usuários (opcional)
routes.get('/users', UserController.list);

module.exports = routes;
