var controllerLivros = require('../controllers/livrosControllers.js');

app.get('/livros/menuLivros', controllerLivros.livrosMenu);


app.get('/livros/listarLivros', controllerLivros.livrosListar);


app.get('/livros/novoLivro', controllerLivros.livroNovo);


app.post('/livros/gravarLivro', controllerLivros.livroGravar);


app.get('/livros/consultarLivro/:codigo', controllerLivros.livroConsultar);


app.get('/livros/inativarLivro/:codigo', controllerLivros.livroInativar);