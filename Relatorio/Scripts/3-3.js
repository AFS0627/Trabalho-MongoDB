db.Clientes.find(
    {data_nascimento:{$gt:ISODate("1992-01-01")
        
    }})