import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { BoardController } from "./../controllers/BoardController";

export class BoardRouter {
  router = express.Router();
  boardController: BoardController;
  constructor(boardController: BoardController) {
    this.boardController = boardController;
  }
  public BoardRouter(app: express.Application): void {
    this.router.get('/boards/', this.boardController.getBoards.bind(this.boardController))
    this.router.post('/boards/', this.boardController.createBoard.bind(this.boardController))
    this.router.get('/boards/:id', this.boardController.getBoardById.bind(this.boardController))
    this.router.put('/boards/:id', this.boardController.updateBoard.bind(this.boardController))
    this.router.delete('/boards/:id', this.boardController.deleteBoard.bind(this.boardController))
  }
}
