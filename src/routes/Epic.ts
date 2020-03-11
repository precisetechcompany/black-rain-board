import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { EpicController } from "./../controllers/EpicController";

export class EpicRouter {
  router = express.Router();
  epicController: EpicController;
  constructor(epicController: EpicController) {
    this.epicController = epicController;
  }
  public EpicRouter(app: express.Application): void {
    this.router.get('/', this.epicController.getEpic.bind(this.epicController))
    this.router.post('/', this.epicController.createEpic.bind(this.epicController))
    this.router.get('/:id', this.epicController.getEpicById.bind(this.epicController))
    this.router.put('/:id', this.epicController.updateEpic.bind(this.epicController))
    this.router.delete('/:id', this.epicController.deleteEpic.bind(this.epicController))
  }
}