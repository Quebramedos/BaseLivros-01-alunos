use dados20192n;
select a.*, B.aut_apelido, C.edi_nome from livros A 
left join autores B on A.aut_codigo = B.aut_codigo
left join editoras C on A.edi_codigo =C.edi_codigo;