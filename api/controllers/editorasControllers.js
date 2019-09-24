const editorasController = require('../models/editorasModels.js');

module.exports = {
  
  editorasMenu

}  

function editorasMenu(req, res) {
  res.render('editoras/frm_editorasMenu.ejs', {
    title: 'Editoras',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });      
}

