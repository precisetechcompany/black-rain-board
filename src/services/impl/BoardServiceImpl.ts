import { BoardService } from "../BoardService";
import * as mongoose from 'mongoose';
var Board = mongoose.model('Boards');
import { getLogger } from 'log4js';
const logger = getLogger("BoardServiceImpl");
logger.level = 'info';



export class BoardServiceImpl implements BoardService {
  createBoard(board: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Board.create(board, (err, boardCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Board Created!', data: boardCreated })
            logger.info("Board Created!!");
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
            logger.info("Board fetched!!");
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
            logger.info("Board fetched!!");
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
            logger.info("Board updated!!");
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
            logger.info("Board deleted!!");
        }
      });

    })
  }
}

