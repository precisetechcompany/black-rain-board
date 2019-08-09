import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

export class TaskController {
  TaskService: TaskService;

  constructor(TaskService: TaskService) {
    this.TaskService = TaskService;
  }

  public getTask(req: Request, res: Response){
    this.TaskService.getTask().then((response) => {
      let Task = response;
      res.status(Task ? 200 : 400)
      res.json(Task ? Task : { "errors": [{ "message": "Error getting Task" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Task.', 500));
  }

  public createTask(req: Request, res: Response){
    this.TaskService.createTask(req.body).then((response) => {
      let Task = response;
      res.status(Task ? 201 : 400)
      res.json(Task ? Task : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the Task.', 500));
  }

  public getTaskById(req: Request, res: Response){
    this.TaskService.getTaskByID(req.params.id).then((response) => {
      let Task = response;
      res.status(Task != null ? 200 : 400)
      res.json(Task ? Task : { "errors": [{ "message": "Task not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Task.', 500));
  }

  public updateTask(req: Request, res: Response){
    this.TaskService.updateTask(req.params.id, req.body).then((response) => {
      let Task = response;
      res.status(Task ? 200 : 400)
      res.json(Task ? Task : { "errors": [{ "message": "Task update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the Task.', 500));
  }

  public deleteTask(req: Request, res: Response){
    this.TaskService.deleteTask(req.params.id).then((response) => {
      let Task = response;
      res.status(Task ? 200 : 400)
      res.json(Task ? Task : { "errors": [{ "message": "Task not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not Task the board.', 500));
  }
  
}