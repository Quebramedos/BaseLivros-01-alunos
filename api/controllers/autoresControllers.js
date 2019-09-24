const autoresController = require('../models/autoresModels.js');

module.exports = {
  
  autoresMenu

}  

function autoresMenu(req, res) {
  res.render('autores/frm_autoresMenu.ejs', {
    title: 'Autores',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });      
}

