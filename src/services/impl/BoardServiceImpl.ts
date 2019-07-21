import { BoardService } from "../BoardService";
import * as mongoose from 'mongoose';
var Board = mongoose.model('Boards');


export class BoardServiceImpl implements BoardService {
  createBoard(board: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.create(board, (err, boardCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Board Created!', data: boardCreated })
        }
      });

    })
  }

  getBoards(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.find({}, (err, boards) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Boards fetched!', data: boards })
        }
      });

    })
  }

  getBoardByID(boardId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.findById(boardId, (err, board) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Board fetched!', data: board })
        }
      });

    })
  }

  updateBoard(boardId: string, board: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.findOneAndUpdate({_id: boardId}, board, {new: true}, (err, boardUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Board updated!', data: boardUpdated })
        }
      });

    })
  }

  deleteBoard(boardId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.remove({
        _id: boardId
      }, (err, board) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Board deleted!' })
        }
      });

    })
  }
}

