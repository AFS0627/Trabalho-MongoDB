db.Contas.aggregate([
  {
    $group: {
      _id: "$tipo",
      total: { $sum: 1 },
      media: { $avg: "$valor" },
      maior: { $max: "$valor" }
    }}])