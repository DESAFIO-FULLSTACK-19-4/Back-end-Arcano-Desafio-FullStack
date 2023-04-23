import { Request, Response } from "express";

import {
  userCreateService,
  userListService,
} from "../services/userList.service";

export const userCreateController = (req: Request, res: Response) => {

  try {
        
    // acessando os dados do corpo da requisição,
    // usando desestruturação
    const {name, email} = req.body
    
    // chamando o Service que vai retornar o newUser,
    // que será inferido pelo TS como tipo IUser
    const newUser = userCreateService({name, email})
    
    // retornando 201 com JSON do newUser para o cliente
    return res.status(201).send(newUser)

} catch (err) {

    if (err instanceof Error) {

        return res.status(400).send({
            "error": err.name,
            "message": err.message
        })
    }
}
}

export const userListController = (req: Request, res: Response) => {

  try {
				
    // chamamos o Service
    // users será inferido como um array de IUsers ( IUsers[] )
    // pois o Service está retornando o array que tipamos
    const users = userListService()
    
    // retornamos 200 com a lista dos usuários (mesmo se estiver vazia)
    return res.send(users)

} catch (err) {

    if (err instanceof Error) {

        return res.status(400).send({
            "error": err.name,
            "message": err.message
        })
    }
}
}
