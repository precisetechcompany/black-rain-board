import { Request, Response } from 'express';
import { BoardService } from '../services/BoardService';

export class BoardController {
  boardService: BoardService;

  constructor(boardService: BoardService) {
    this.boardService = boardService;
  }

  public getBoards(req: Request, res: Response){
    this.boardService.getBoards().then((response) => {
      let boards = response;
      res.status(boards ? 200 : 400)
      res.json(boards ? boards : { "errors": [{ "message": "Error getting boards" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the boards.', 500));
  }

  public createBoard(req: Request, res: Response){
    this.boardService.createBoard(req.body).then((response) => {
      let board = response;
      res.status(board ? 201 : 400)
      res.json(board ? board : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the board.', 500));
  }

  public getBoardById(req: Request, res: Response){
    this.boardService.getBoardByID(req.params.id).then((response) => {
      let board = response;
      res.status(board != null ? 200 : 400)
      res.json(board ? board : { "errors": [{ "message": "board not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the board.', 500));
  }

  public updateBoard(req: Request, res: Response){
    this.boardService.updateBoard(req.params.id, req.body).then((response) => {
      let board = response;
      res.status(board ? 200 : 400)
      res.json(board ? board : { "errors": [{ "message": "board update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the board.', 500));
  }

  public deleteBoard(req: Request, res: Response){
    this.boardService.deleteBoard(req.params.id).then((response) => {
      let board = response;
      res.status(board ? 200 : 400)
      res.json(board ? board : { "errors": [{ "message": "board not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not delete the board.', 500));
  }
  
}