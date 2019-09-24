var controllerLivros = require('../controllers/livrosControllers.js');

app.get('/livros/menuLivros', controllerLivros.livrosMenu);


app.get('/livros/listarLivros', controllerLivros.livrosListar);


app.get('/livros/novoLivro', controllerLivros.livroNovo);