db.Pedidos.aggregate([
  {
    $match: {
      status: "Entregue",
      valor_total: { $gt: 3500 }
    }},{
    $group: {
      _id: null,
      total: { $sum: 1 }
    }}])