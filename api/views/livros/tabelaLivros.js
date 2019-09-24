  var tabela;
    var livros = [];
    let vet100 = [16, 17, 18, 19, 20, 21, 22]
    let obj = {
        liv_codigo: '',
        liv_ativoinativo: '',
        liv_dtcadastro: '',
        liv_titulo: '',
        liv_edicao: '',
        liv_isbn: '',
        liv_ano: '',
        aut_apelido: '',
        edi_nome: ''
    }

    // atribui o objeto para o array
    for (let i = 0; i < vet100.length; ++i) {
        livros[i] = Object.assign({}, obj);
        livros[i].liv_codigo = vet100[i]
        livros[i].liv_ano = 2019
    }
    //criar a tabela
    tabela = '<table class="table table-striped">'
    tabela += '<tr>' +
        ' <th>Código</th>' +
        ' <th>Ativo/Inativo</th>' +
        ' <th>Dt.Cadastro</th>' +
        ' <th>Título do livro</th>' +
        ' <th>Edição</th>' +
        ' <th>ISBN</th>' +
        ' <th>Ano</th>' +
        ' <th>Autor</th>' +
        '<th>Editora</th>' +
        '<th><a class="btn btn-success btn-block" href="/livros/novo">Novo</a></th>' +
        ' </tr>';


    function popular() {
        for (i = 0; i < vet100.length; ++i) {
            tabela += '<tr><td>' + livros[i].liv_codigo + '</td>' +
                '<td>' + livros[i].liv_ativoinativo + '</td>' +
                '<td>' + livros[i].liv_dtcadastro + '</td>' +
                '<td>' + livros[i].liv_titulo + '</td>' +
                '<td>' + livros[i].liv_edicao + '</td>' +
                '<td>' + livros[i].liv_isbn + '</td>' +
                '<td>' + livros[i].liv_ano + '</td>' +
                '<td>' + livros[i].aut_apelido + '</td>' +
                '<td>' + livros[i].edi_nome + '</td></tr>'
        }
        tabela += '</table>'
        //pega o id de um elemento no html e redenriza a tabela
        document.getElementById("tabelaLivros").innerHTML = tabela
    }
    //chama função para popular a tabela
    popular();
