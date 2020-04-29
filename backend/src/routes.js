const express = require('express');
const PostoController = require('./controllers/PostoSaudeController');
const VacinaController = require('./controllers/VacinaController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/postos', PostoController.getAllPostos);
routes.post('/postos', PostoController.create);
routes.delete('/postos/:id', PostoController.delete);

routes.get('/vacinas', VacinaController.getAll);
routes.post('/vacinas', VacinaController.create);
routes.delete('/vacinas/:id', VacinaController.delete);

routes.get('/profile', ProfileController.getAll);


module.exports = routes

