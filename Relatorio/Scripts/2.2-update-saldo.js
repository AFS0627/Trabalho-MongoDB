
db.Clientes.updateOne(
  { cpf: "888.568.498-01" },
  {
    $set: { tipo_cliente: "B2B" },
    $inc: { total_compras: 500 }
  }
)