db.Clientes.find(
    {tipo_cliente:"B2B"},
    {nome:1,email:1,_id:0}).sort
    ({nome:1})