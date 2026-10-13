db.Pedidos.aggregate([
  {
    $group: {
      _id: "$tipo_pedido",
      total: { $sum: 1 },
      media: { $avg: "$valor_total" },
      maior: { $max: "$valor_total" }
    }}])