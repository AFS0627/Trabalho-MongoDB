db.Clientes.aggregate([
  {
    $lookup:{
      from: "Pedidos",
      localField: "cpf",
      foreignField: "cpf_cliente",
      as: "clientes_pedidos"
    }},{
    $project:{
      _id: 0,
      data_nascimento: 0,
      genero: 0,
      profissao: 0
    }},
  {$limit: 5}
])