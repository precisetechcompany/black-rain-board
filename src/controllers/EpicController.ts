import { Request, Response } from 'express';
import { EpicService } from '../services/EpicService';

export class EpicController {
  epicService: EpicService;

  constructor(epicService: EpicService) {
    this.epicService = epicService;
  }

  public getEpic(req: Request, res: Response){
    this.epicService.getEpic().then((response) => {
      let epic = response;
      res.status(epic ? 200 : 400)
      res.json(epic ? epic : { "errors": [{ "message": "Error getting epic" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the epic.', 500));
  }

  public createEpic(req: Request, res: Response){
    this.epicService.createEpic(req.body).then((response) => {
      let epic = response;
      res.status(epic ? 201 : 400)
      res.json(epic ? epic : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the epic.', 500));
  }

  public getEpicById(req: Request, res: Response){
    this.epicService.getEpicByID(req.params.id).then((response) => {
      let epic = response;
      res.status(epic != null ? 200 : 400)
      res.json(epic ? epic : { "errors": [{ "message": "epic not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the epic.', 500));
  }

  public updateEpic(req: Request, res: Response){
    this.epicService.updateEpic(req.params.id, req.body).then((response) => {
      let epic = response;
      res.status(epic ? 200 : 400)
      res.json(epic ? epic : { "errors": [{ "message": "epic update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the epic.', 500));
  }

  public deleteEpic(req: Request, res: Response){
    this.epicService.deleteEpic(req.params.id).then((response) => {
      let epic = response;
      res.status(epic ? 200 : 400)
      res.json(epic ? epic : { "errors": [{ "message": "epic not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not delete the epic.', 500));
  }
  
}