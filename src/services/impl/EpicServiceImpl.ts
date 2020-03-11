import { EpicService } from "../EpicService";
import * as mongoose from 'mongoose';
var Epic = mongoose.model('Epic');
import { getLogger } from 'log4js';
const logger = getLogger("EpicServiceImpl");
logger.level = 'info';


export class EpicServiceImpl implements EpicService {
  createEpic(epic: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Epic.create(epic, (err, epicCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Epic Created!', data: epicCreated })
            logger.info("Epic Created!!");
        }
      });
    })
  }

  getEpic(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Epic.find({}, (err, epic) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Epic fetched!', data: epic })
            logger.info("Epic fetched!!");
        }
      });

    })
  }

  getEpicByID(epicId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Epic.findById(epicId, (err, epic) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Epic fetched!', data: epic })
            logger.info("Epic fetched!!");
        }
      });

    })
  }

  updateEpic(epicId: string, epic: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Epic.findOneAndUpdate({_id: epicId}, epic, {new: true}, (err, epicUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Epic updated!', data: epicUpdated })
            logger.info("Epic updated!!");
        }
      });

    })
  }

  deleteEpic(epicId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Epic.remove({
        _id: epicId
      }, (err, epic) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Epic deleted!' })
            logger.info("Epic deleted!!");
        }
      });

    })
  }
}

