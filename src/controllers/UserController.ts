import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public getUser(req: Request, res: Response){
    this.userService.getUser().then((response) => {
      let user = response;
      res.status(user ? 200 : 400)
      res.json(user ? user : { "errors": [{ "message": "Error getting user" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the user.', 500));
  }

  public createUser(req: Request, res: Response){
    this.userService.createUser(req.body).then((response) => {
      let user = response;
      res.status(user ? 201 : 400)
      res.json(user ? user : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the user.', 500));
  }

  public getUserById(req: Request, res: Response){
    this.userService.getUserByID(req.params.id).then((response) => {
      let user = response;
      res.status(user != null ? 200 : 400)
      res.json(user ? user : { "errors": [{ "message": "user not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the user.', 500));
  }

  public updateUser(req: Request, res: Response){
    this.userService.updateUser(req.params.id, req.body).then((response) => {
      let user = response;
      res.status(user ? 200 : 400)
      res.json(user ? user : { "errors": [{ "message": "user update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the user.', 500));
  }

  public deleteUser(req: Request, res: Response){
    this.userService.deleteUser(req.params.id).then((response) => {
      let user = response;
      res.status(user ? 200 : 400)
      res.json(user ? user : { "errors": [{ "message": "user not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not delete the user.', 500));
  }
  
}