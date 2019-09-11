import { Request, Response } from 'express';
import { TeamService } from '../services/TeamService';

export class TeamController {
  TeamService: TeamService;

  constructor(TeamService: TeamService) {
    this.TeamService = TeamService;
  }
  public getTeam(req: Request, res: Response){
    this.TeamService.getTeam().then((response) => {
      let Team = response;
      res.status(Team ? 200 : 400)
      res.json(Team ? Team : { "errors": [{ "message": "Error getting Team" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Team.', 500));
  }

  public createTeam(req: Request, res: Response){
    this.TeamService.createTeam(req.body).then((response) => {
      let Team = response;
      res.status(Team ? 201 : 400)
      res.json(Team ? Team : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the Team.', 500));
  }

  public getTeamById(req: Request, res: Response){
    this.TeamService.getTeamByID(req.params.id).then((response) => {
      let Team = response;
      res.status(Team != null ? 200 : 400)
      res.json(Team ? Team : { "errors": [{ "message": "Team not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Team.', 500));
  }

  public updateTeam(req: Request, res: Response){
    this.TeamService.updateTeam(req.params.id, req.body).then((response) => {
      let Team = response;
      res.status(Team ? 200 : 400)
      res.json(Team ? Team : { "errors": [{ "message": "Team update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the Team.', 500));
  }

  public deleteTeam(req: Request, res: Response){
    this.TeamService.deleteTeam(req.params.id).then((response) => {
      let Team = response;
      res.status(Team ? 200 : 400)
      res.json(Team ? Team : { "errors": [{ "message": "Team not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not Team the board.', 500));
  }
  
}