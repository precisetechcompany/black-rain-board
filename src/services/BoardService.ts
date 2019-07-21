import { Request, Response } from 'express';


export interface BoardService {
  getBoards();
  createBoard(board: any);
  getBoardByID(id: string);
  updateBoard(id: string, board: any);
  deleteBoard(id: string);
}