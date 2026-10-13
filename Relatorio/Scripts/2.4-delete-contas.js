db.Pedidos.deleteMany({
    valor_total: {$lte: 0}})