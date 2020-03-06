import { Request, Response } from 'express';


export interface EpicService {
  getEpic();
  createEpic(epic: any);
  getEpicByID(id: string);
  updateEpic(id: string, epic: any);
  deleteEpic(id: string);
}