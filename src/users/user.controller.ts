import express, { Request, Response } from "express";
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

  getAllUsers = (request: Request, response: Response) => {
    response.send(this.users);
  };

  createAUser = (request: Request, response: Response) => {
    const user: User = request.body;
    this.users.push(user);
    response.send(user);
  };
}

export default UsersController;
