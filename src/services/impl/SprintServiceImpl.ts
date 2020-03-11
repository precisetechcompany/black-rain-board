import { SprintService } from "../SprintService";
import * as mongoose from 'mongoose';
var Sprint = mongoose.model('Sprint');
import { getLogger } from 'log4js';
const logger = getLogger("SprintServiceImpl");
logger.level = 'info';



export class SprintServiceImpl implements SprintService {
  createSprint(sprint: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Sprint.create(sprint, (err, sprintCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Sprint Created!', data: sprintCreated })
            logger.info("Sprint Created!!");
        }
      });

    })
  }

  getSprint(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Sprint.find({}, (err, sprint) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Sprint fetched!', data: sprint })
            logger.info("Sprint fetched!!");
        }
      });

    })
  }

  getSprintByID(sprintId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Sprint.findById(sprintId, (err, sprint) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Sprint fetched!', data: sprint })
            logger.info("Sprint fetched!!");
        }
      });

    })
  }

  updateSprint(sprintId: string, sprint: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Sprint.findOneAndUpdate({_id: sprintId}, sprint, {new: true}, (err, sprintUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Sprint updated!', data: sprintUpdated })
            logger.info("Sprint updated!!");
        }
      });

    })
  }

  deleteSprint(sprintId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Sprint.remove({
        _id: sprintId
      }, (err, sprint) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Sprint deleted!' })
            logger.info("Sprint deleted!!");
        }
      });

    })
  }
}

