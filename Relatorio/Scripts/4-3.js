db.Contas.aggregate([
  {
    $match: {
      tipo: "Conta salário",
      valor: { $gt: 3500 }
    }},{
    $group: {
      _id: null,
      total: { $sum: 1 }
    }}])