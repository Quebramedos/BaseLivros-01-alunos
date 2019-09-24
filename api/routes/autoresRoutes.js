var controllerAutores = require('../controllers/autoresControllers.js');

app.get('/autores/menuAutores', controllerAutores.autoresMenu);
