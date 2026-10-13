db.Pedidos.aggregate([
  {$unwind: "$itens"},
  {$sortByCount: "$itens.categoria"}
])