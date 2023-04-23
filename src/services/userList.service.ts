// src/services/user/userCreate.service.ts

// importamos a database (o array users)
import { users } from "../database";

// importamos as interfaces
import { IUserCreate, IUser } from "../interfaces";

// e importamos também o uuid
import { v4 as uuidv4 } from "uuid"

// a função recebendo os parametros no modelo da interface IUserCreate
export const userCreateService = ({name, email}: IUserCreate) => {

		// verificação de email já em uso por outro usuário
    const emailAlreadyExists = users.find(user => user.email === email)

		// se já está em uso, invocamos um Error nativo do JS mesmo
    if (emailAlreadyExists) {

        throw new Error("Email already exists")
    }

		// se não, criamos um novo usuário no modelo da interface IUser,
    // usando os parâmetros que vamos receber lá do controller
    const newUser: IUser = {
        id: uuidv4(),
        name,
        email,
    }
	
		// adicionando o novo usuário na database
    users.push(newUser)

		// retornamos o objeto do novo usuário de volta para o controller
    return newUser

}


export const userListService = () => {

  return users
}