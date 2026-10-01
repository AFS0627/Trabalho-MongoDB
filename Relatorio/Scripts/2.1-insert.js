db.Clientes.insertOne({
    nome: "Carlos Eduardo Silva",
    cpf: "888.568.498-01",
    data_nascimento: ISODate("1990-05-20T00:00:00Z"),
    profissao: "Engenheiro de Software",
    status_civil: "Casado(a)",
    genero: "Masculino",
    seguros: ["seguro de vida","seguro para carro"]})