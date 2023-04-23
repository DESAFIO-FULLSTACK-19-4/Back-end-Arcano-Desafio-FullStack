import { Router } from "express";

// instanciamos o Router
const routes = Router()

// importamos os Controllers
import {userCreateController,userListController} from "./controllers/users.controller";

// definimos as rotas
routes.post('/users', userCreateController)
routes.get('/users', userListController)

// e exportamos as rotas
export default routes
        