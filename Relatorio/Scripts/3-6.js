db.Produtos.find(
    {
        categoria:{$regex:"^Eletrônicos"

        }})