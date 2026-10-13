db.Clientes.insertMany([
  {
    nome: "Carlos Silva",
    cpf: "888.568.498-01",
    email: "carlos@email.com",
    tipo_cliente: "B2B",
    empresa: "Silva Tecnologia",
    data_nascimento: ISODate("1990-05-20T00:00:00Z")
  },
  {
    nome: "Ana Souza",
    cpf: "111.222.333-44",
    email: "ana@email.com",
    tipo_cliente: "B2C",
    data_nascimento: ISODate("1998-03-15T00:00:00Z")
  },
  {
    nome: "Pedro Santos",
    cpf: "222.333.444-55",
    email: "pedro@email.com",
    tipo_cliente: "B2B",
    empresa: "Santos Comércio",
    data_nascimento: ISODate("1985-07-10T00:00:00Z")
  }
])

db.Produtos.insertMany([
  {
    nome: "Notebook",
    categoria: "Eletrônicos",
    preco: 3500,
    especificacoes: { memoria: "16GB", armazenamento: "512GB SSD" }
  },
  {
    nome: "Camiseta",
    categoria: "Vestuário",
    preco: 50,
    especificacoes: { tamanho: "M", cor: "Preta" }
  },
  {
    nome: "Celular",
    categoria: "Eletrônicos",
    preco: 2000,
    especificacoes: { memoria: "8GB", armazenamento: "256GB" }
  }
])

db.Pedidos.insertMany([
  {
    numero: 1001,
    cpf_cliente: "888.568.498-01",
    tipo_pedido: "B2B",
    status: "Entregue",
    valor_total: 5000,
    itens: [
      { produto: "Notebook", categoria: "Eletrônicos", quantidade: 1, preco: 3500 },
      { produto: "Celular", categoria: "Eletrônicos", quantidade: 1, preco: 1500 }
    ]
  },
  {
    numero: 1002,
    cpf_cliente: "111.222.333-44",
    tipo_pedido: "B2C",
    status: "Pendente",
    valor_total: 100,
    itens: [
      { produto: "Camiseta", categoria: "Vestuário", quantidade: 2, preco: 50 }
    ]
  },
  {
    numero: 1003,
    cpf_cliente: "222.333.444-55",
    tipo_pedido: "B2B",
    status: "Entregue",
    valor_total: 4000,
    itens: [
      { produto: "Notebook", categoria: "Eletrônicos", quantidade: 1, preco: 3500 },
      { produto: "Camiseta", categoria: "Vestuário", quantidade: 10, preco: 50 }
    ]
  }
])

db.Carrinhos_Sessao.insertMany([
  {
    cpf_cliente: "888.568.498-01",
    status: "Ativo",
    itens: [
      { produto: "Notebook", quantidade: 1, preco: 3500 }
    ],
    valor_total: 3500
  },
  {
    cpf_cliente: "111.222.333-44",
    status: "Ativo",
    itens: [
      { produto: "Camiseta", quantidade: 2, preco: 50 }
    ],
    valor_total: 100
  },
  {
    cpf_cliente: "222.333.444-55",
    status: "Abandonado",
    itens: [
      { produto: "Celular", quantidade: 1, preco: 2000 }
    ],
    valor_total: 2000
  }
])