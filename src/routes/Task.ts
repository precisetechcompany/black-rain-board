import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { TaskController } from "./../controllers/TaskController";

export class TaskRouter {
  router = express.Router();
  TaskController: TaskController;
  constructor(TaskController: TaskController) {
    this.TaskController = TaskController;
  }
  public TaskRouter(app: express.Application): void {
    this.router.get('/', this.TaskController.getTask.bind(this.TaskController))
    this.router.post('/', this.TaskController.createTask.bind(this.TaskController))
    this.router.get('/:id', this.TaskController.getTaskById.bind(this.TaskController))
    this.router.put('/:id', this.TaskController.updateTask.bind(this.TaskController))
    this.router.delete('/:id', this.TaskController.deleteTask.bind(this.TaskController))
  }
}