const livrosController = require('../models/livrosModels.js');
const moment = require('moment');

module.exports = {

  livrosMenu,
  livrosListar,
  livroNovo,
  livroGravar,
  livroConsultar,
  livroInativar

}

function livrosMenu(req, res) {
  res.render('livros/frm_livrosMenu.ejs', {
    title: 'Livros',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });
}

function livrosListar(req, res) {
  livrosController.listarLivros(function (err, result) {
    if (result) {
      console.log('encontrei Livros... vou tratar a data..');
      for (var i = 0; i < result.length; i++) {
        result[i].liv_dtcadastro = moment(result[i].liv_dtcadastro).format("DD/MM/YYYY")
      }

    }

    if (err) {
      throw err;
    } else {
      res.render('livros/frm_livrosListar.ejs', {
        title: 'Livros Listar',
        empresa: 'Fatec Franca - Programação Script - WEB',
        rota: req.originalUrl,
        obj_livros: result
      });
    }
  });
}

function livroNovo(req, res_livros) {
  var dados = [{
    liv_codigo: "",
    liv_dtcadastro: moment().format('DD/MM/YYYY'),
    liv_titulo: "",
    liv_edicao: "",
    liv_ano: "0",
    liv_ativoinativo: "",
    edt_codigo: "",
    aut_codigo: ""
  }];

  livrosController.listarAutores(function (err, res_autores) {

    if (err) {
      throw err;
    } else {
      livrosController.listarEditoras(function (err, res_editoras) {

        if (err) {
          throw err;
        } else {
          res_livros.render('livros/frm_livrosEditar.ejs', {
            title: 'Livros Atualizar',
            empresa: 'Fatec Franca - Programação Script - WEB',
            rota: req.originalUrl,
            obj_autores: res_autores,
            obj_editoras: res_editoras,
            obj_livros: dados

          });
        }

      });
    }
  });

}

function livroGravar(req, res_livros) {
  var dados = req.body;

  if (dados.liv_codigo == "") {
    dados.liv_codigo = null;

    dados.aut_codigo = parseInt(dados.aut_codigo);
    dados.edt_codigo = parseInt(dados.edt_codigo);
    console.log('Gravando Livros', dados);
    livrosController.gravarLivro(dados, function (err, result) {
      if (err) {
        throw err;
      } else {
        res_livros.redirect("/livros/listarLivros")
      }
    });

  } else {
    console.log('Editando Livros');
    livrosController.editarLivro(dados, function (err, result) {
      if (err) {
        throw err;
      } else {
        res_livros.redirect("/livros/listarLivros")
      }

    });
  }
}

//--------------------------------------------------------------------------------

function livroConsultar(req, res_livros) {
  var id = req.params.codigo;

  livrosController.listarUmLivro(id, function (err, result) {

    if (err) {
      throw err;
    } else {
      livrosController.listarAutores(function (err, res_autores) {
        if (err) {
          throw err;
        } else {
          livrosController.listarEditoras(function (err, res_editoras) {
            if (err) {
              throw err;
            } else {

              result.liv_dtcadastro = moment(result.liv_dtcadastro).format("DD/MM/YYYY");

              res_livros.render('livros/frm_livrosEditar.ejs', {
                title: 'Livros Editar',
                empresa: ' Fatec Franca - Programação Script - WEB ',
                rota: req.originalUrl,
                obj_autores: res_autores,
                obj_editoras: res_editoras,
                obj_livros: result

              })

            }

          });

        }

      });

    }

  });

}

//----------------------------------------------------------------------------------
function livroInativar(req, res) {
  var id = req.params.codigo;
  var p_ativo = "";

  livrosController.listarUmLivro(id, function (err, result) {
    p_ativo = result[0].liv_ativoinativo;

    if (err) {
      throw err;
    } else {
      if (p_ativo == "A") {
        p_ativo = "I";
        console.log("Livro inativo")
      } else {
        p_ativo = "A"
      }
    }
    livrosController.inativarLivro(id, p_ativo, function (err, result) {
      if (err) {
        throw err;
      } else {
        res.redirect("/livros/listarLivros");
      }
    });
  });

}