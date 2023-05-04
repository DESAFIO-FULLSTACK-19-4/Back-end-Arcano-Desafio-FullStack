import { Request, Response } from "express";

import { userListService } from "../services/userList.service";

export const userListController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const users = await userListService(id);

    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
