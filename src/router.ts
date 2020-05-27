import express from "express";

class Router {
  router: express.Router;

  constructor() {
    this.router = express.Router();
  }
}

export default new Router();
