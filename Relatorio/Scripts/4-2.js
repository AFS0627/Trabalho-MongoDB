db.Clientes.aggregate([
  {$unwind: "$seguros"},
  {$sortByCount: "$genero"}
])