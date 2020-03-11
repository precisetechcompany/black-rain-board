import { Request, Response } from 'express';
import { SprintService } from '../services/SprintService';

export class SprintController {
  sprintService: SprintService;

  constructor(sprintService: SprintService) {
    this.sprintService = sprintService;
  }

  public getSprint(req: Request, res: Response){
    this.sprintService.getSprint().then((response) => {
      let sprint = response;
      res.status(sprint ? 200 : 400)
      res.json(sprint ? sprint : { "errors": [{ "message": "Error getting sprint" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the sprint.', 500));
  }

  public createSprint(req: Request, res: Response){
    this.sprintService.createSprint(req.body).then((response) => {
      let sprint = response;
      res.status(sprint ? 201 : 400)
      res.json(sprint ? sprint : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the sprint.', 500));
  }

  public getSprintById(req: Request, res: Response){
    this.sprintService.getSprintByID(req.params.id).then((response) => {
      let sprint = response;
      res.status(sprint != null ? 200 : 400)
      res.json(sprint ? sprint : { "errors": [{ "message": "sprint not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the sprint.', 500));
  }

  public updateSprint(req: Request, res: Response){
    this.sprintService.updateSprint(req.params.id, req.body).then((response) => {
      let sprint = response;
      res.status(sprint ? 200 : 400)
      res.json(sprint ? sprint : { "errors": [{ "message": "sprint update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the sprint.', 500));
  }

  public deleteSprint(req: Request, res: Response){
    this.sprintService.deleteSprint(req.params.id).then((response) => {
      let sprint = response;
      res.status(sprint ? 200 : 400)
      res.json(sprint ? sprint : { "errors": [{ "message": "sprint not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not delete the sprint.', 500));
  }
  
}