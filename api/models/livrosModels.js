const banco = require('../../config/conexao.js');


module.exports = {
    listarLivros,
    listarAutores,
    listarEditoras
}

function listarLivros(callback) {
    m_sql = 'select a.*, B.aut_apelido, C.edi_nome from livros A left join autores B on A.aut_codigo = B.aut_codigo left join editoras C on A.edi_codigo= C.edi_codigo';

    banco.query(m_sql, callback);

}



function listarAutores(callback) {
    m_sql = 'select * from Autores order BY aut_apelido';

    banco.query(m_sql, callback);

}

function listarEditoras(callback) {
    m_sql = 'select * from Editoras order BY edi_nome';

    banco.query(m_sql, callback);

}