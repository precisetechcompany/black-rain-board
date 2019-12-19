import { Request, Response } from 'express';


export interface TeamService {
  getTeam();
  createTeam(Team: any);
  getTeamByID(id: string);
  updateTeam(id: string, Team: any);
  deleteTeam(id: string);
}