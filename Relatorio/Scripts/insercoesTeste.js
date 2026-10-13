db.Clientes.insertMany([
  {
    nome: "Ana Silva",
    cpf: "11111111111",
    genero: "Feminino",
    profissao: "Professora",
    data_nascimento: ISODate("1995-05-10"),
    status_civil: "Casado(a)",
    dependentes: ["Pedro"],
    seguros: ["Vida", "Carro"]
  },
  {
    nome: "João Santos",
    cpf: "22222222222",
    genero: "Masculino",
    profissao: "Analista",
    data_nascimento: ISODate("1990-03-15"),
    status_civil: "Viúvo(a)",
    seguros: ["Vida"]
  },
  {
    nome: "Maria Souza",
    cpf: "33333333333",
    genero: "Feminino",
    profissao: "Enfermeira",
    data_nascimento: ISODate("2000-08-20"),
    status_civil: "Solteiro(a)",
    dependentes: [],
    seguros: ["Carro", "Casa"]
  },
  {
    nome: "Pedro Lima",
    cpf: "44444444444",
    genero: "Masculino",
    profissao: "Técnico",
    data_nascimento: ISODate("1998-11-02"),
    status_civil: "Casado(a)",
    seguros: ["Vida"]
  },
  {
    nome: "Carla Alves",
    cpf: "55555555555",
    genero: "Feminino",
    profissao: "Advogada",
    data_nascimento: ISODate("1988-01-12"),
    status_civil: "Viúvo(a)",
    dependentes: ["Lucas"],
    seguros: ["Casa"]
  }
])


db.Contas.insertMany([
  {
    numero_conta: "1001",
    agencia: "0001",
    tipo: "Conta salário",
    cpf: "11111111111",
    valor: 5000
  },
  {
    numero_conta: "1002",
    agencia: "0001",
    tipo: "Conta corrente",
    cpf: "22222222222",
    valor: 2500
  },
  {
    numero_conta: "1003",
    agencia: "0002",
    tipo: "Conta salário",
    cpf: "33333333333",
    valor: 4000
  },
  {
    numero_conta: "1004",
    agencia: "0002",
    tipo: "Conta poupança",
    cpf: "44444444444",
    valor: 1500
  },
  {
    numero_conta: "1005",
    agencia: "0001",
    tipo: "Conta salário",
    cpf: "55555555555",
    valor: 3500
  }
])

db.Enderecos.insertMany([
  {
    cpf: "11111111111",
    cidade: "Blumenau",
    estado: "SC",
    codigo_postal: "89010-100"
  },
  {
    cpf: "22222222222",
    cidade: "Gaspar",
    estado: "SC",
    codigo_postal: "89110-200"
  },
  {
    cpf: "33333333333",
    cidade: "São Paulo",
    estado: "SP",
    codigo_postal: "16010-300"
  },
  {
    cpf: "44444444444",
    cidade: "Bauru",
    estado: "SP",
    codigo_postal: "17010-400"
  },
  {
    cpf: "55555555555",
    cidade: "Itajaí",
    estado: "SC",
    codigo_postal: "88300-500"
  }
])