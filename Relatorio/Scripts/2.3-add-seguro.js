db.Clientes.updateOne(
    { cpf: "888.568.498-01" },
    {
      $addToSet: {seguros: "seguro residencial"} })