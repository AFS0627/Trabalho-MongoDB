db.Contas.deleteMany({
    valor: {$lte: 0}})