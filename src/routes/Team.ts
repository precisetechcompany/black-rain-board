import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { TeamController } from "./../controllers/TeamController";

export class TeamRouter {
  router = express.Router();
  TeamController: TeamController;
  constructor(TeamController: TeamController) {
    this.TeamController = TeamController;
  }
  public TeamRouter(app: express.Application): void {
    this.router.get('/', this.TeamController.getTeam.bind(this.TeamController))
    this.router.post('/', this.TeamController.createTeam.bind(this.TeamController))
    this.router.get('/:id', this.TeamController.getTeamById.bind(this.TeamController))
    this.router.put('/:id', this.TeamController.updateTeam.bind(this.TeamController))
    this.router.delete('/:id', this.TeamController.deleteTeam.bind(this.TeamController))
  }
}