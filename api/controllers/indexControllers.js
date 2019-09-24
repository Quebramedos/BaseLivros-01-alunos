const inicioController = require('../models/indexModels.js');

module.exports = {
  
    loginControllers,
    indexControllers,
    loginValidar 

}  

function loginControllers(req, res) {
  res.render('inicio/login.ejs', {
    title: 'Login',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });      
}

function indexControllers(req, res) {
  res.render('inicio/index.ejs', {
    title: 'Livros',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl

  });      
}


function loginValidar(req, res) {
  res.render('inicio/index.ejs', {
    title: 'Livros',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });

}
