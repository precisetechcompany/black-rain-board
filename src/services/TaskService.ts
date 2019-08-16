import { Request, Response } from 'express';


export interface TaskService {
  getTask();
  createTask(Task: any);
  getTaskByID(id: string);
  updateTask(id: string, Task: any);
  deleteTask(id: string);
}