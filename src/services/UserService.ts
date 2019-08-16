import { Request, Response } from 'express';


export interface UserService {
  getUser();
  createUser(user: any);
  getUserByID(id: string);
  updateUser(id: string, user: any);
  deleteUser(id: string);
}