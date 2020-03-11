import { Request, Response } from 'express';


export interface SprintService {
  getSprint();
  createSprint(sprint: any);
  getSprintByID(id: string);
  updateSprint(id: string, sprint: any);
  deleteSprint(id: string);
}