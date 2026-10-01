db.Contas.insertOne({
    numero_conta: "123456-7",
    agencia: "0001",
    tipo: "Corrente",
    cpf: "888.568.498-01",
    valor: 1000
})

db.Contas.updateOne({ cpf: "888.568.498-01" },
    {$set:{
        cpf: "888.568.498-01"
        },
        $inc:{ valor: 500 }
})