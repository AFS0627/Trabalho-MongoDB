db.Clientes.aggregate([
  {
    $lookup:{
      from: "Contas",
      localField: "cpf",
      foreignField: "cpf",
      as: "clientes_contas"
    }},{
    $project:{
      _id: 0,
      data_nascimento: 0,
      genero: 0,
      profissao: 0
    }},
  {$limit: 5}
])