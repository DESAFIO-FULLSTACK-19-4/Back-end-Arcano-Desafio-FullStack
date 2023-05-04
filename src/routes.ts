import { Router } from "express";

const routes = Router();

import { userListController } from "./controllers/users.controller";

routes.get("/cart-history/:id", userListController);

export default routes;
