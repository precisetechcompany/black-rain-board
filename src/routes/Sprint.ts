import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { SprintController } from "./../controllers/SprintController";

export class SprintRouter {
  router = express.Router();
  sprintController: SprintController;
  constructor(sprintController: SprintController) {
    this.sprintController = sprintController;
  }
  public SprintRouter(app: express.Application): void {
    this.router.get('/', this.sprintController.getSprint.bind(this.sprintController))
    this.router.post('/', this.sprintController.createSprint.bind(this.sprintController))
    this.router.get('/:id', this.sprintController.getSprintById.bind(this.sprintController))
    this.router.put('/:id', this.sprintController.updateSprint.bind(this.sprintController))
    this.router.delete('/:id', this.sprintController.deleteSprint.bind(this.sprintController))
  }
}