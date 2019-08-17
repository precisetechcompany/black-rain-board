import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { UserController } from "./../controllers/UserController";

export class UserRouter {
  router = express.Router();
  userController: UserController;
  constructor(userController: UserController) {
    this.userController = userController;
  }
  public UserRouter(app: express.Application): void {
    this.router.get('/', this.userController.getUser.bind(this.userController))
    this.router.post('/', this.userController.createUser.bind(this.userController))
    this.router.get('/:id', this.userController.getUserById.bind(this.userController))
    this.router.put('/:id', this.userController.updateUser.bind(this.userController))
    this.router.delete('/:id', this.userController.deleteUser.bind(this.userController))
  }
}