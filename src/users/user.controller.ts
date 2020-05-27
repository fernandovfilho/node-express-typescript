import express from "express";
import User from "./user.interface";

class UsersController {
  public path = "/user";
  public router = express.Router();

  private users: User[] = [
    {
      name: "Fernando Vargas",
      email: "fernandov.filho@gmail.com",
    },
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createAUser);
  }

  getAllUsers = (request: express.Request, response: express.Response) => {
    response.send(this.users);
  };

  createAUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;
    this.users.push(user);
    response.send(user);
  };
}

export default UsersController;
