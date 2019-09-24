var controllerIndex = require('../controllers/indexControllers.js');

app.get('/', controllerIndex.loginControllers);

app.get('/index', controllerIndex.indexControllers);

app.post('/inicio/validarLogin', controllerIndex.loginValidar);
