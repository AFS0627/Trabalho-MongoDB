db.Clientes.find(
    {genero:"Feminino"},
    {nome:1,profissao:1,_id:0}).sort
    ({nome:1})