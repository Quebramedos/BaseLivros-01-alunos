var controllerEditoras = require('../controllers/editorasControllers.js');

app.get('/editoras/menuEditoras', controllerEditoras.editorasMenu);
