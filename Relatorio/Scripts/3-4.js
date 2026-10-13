db.Clientes.find(
    {status_civil:{$in:["Viúvo(a)","Casado(a)"]
        
    }})