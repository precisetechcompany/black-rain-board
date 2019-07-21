import { Request, Response } from 'express';
import { BoardService } from '../services/BoardService';

export class BoardController {
  boardService: BoardService;

  constructor(boardService: BoardService) {
    this.boardService = boardService;
  }

  public getBoards(req: Request, res: Response){

  }

  public createBoard(req: Request, res: Response){

  }

  public getBoardById(req: Request, res: Response){

  }

  public updateBoard(req: Request, res: Response){

  }

  public deleteBoard(req: Request, res: Response){

  }
  
}