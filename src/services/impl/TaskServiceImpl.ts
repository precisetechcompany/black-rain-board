import { TaskService } from "../TaskService";
import * as mongoose from 'mongoose';
var Task = mongoose.model('Task');
import { getLogger } from 'log4js';
const logger = getLogger("TaskServiceImpl");
logger.level = 'info';



export class TaskServiceImpl implements TaskService {
  createTask(task: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Task.create(task, (err, taskCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Task Created!', data: taskCreated })
            logger.info("Task Created!!");
        }
      });

    })
  }

  getTask(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Task.find({}, (err, task) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Task fetched!', data: task })
            logger.info("Task fetched!!");
        }
      });

    })
  }

  getTaskByID(taskId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Task.findById(taskId, (err, task) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Task fetched!', data: task })
            logger.info("Task fetched!!");
        }
      });

    })
  }

  updateTask(taskId: string, task: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Task.findOneAndUpdate({_id: taskId},task, {new: true}, (err, taskUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Task updated!', data: taskUpdated })
            logger.info("Task updated!!");
        }
      });

    })
  }

  deleteTask(taskId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Task.remove({
        _id: taskId
      }, (err, task) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Task deleted!' })
            logger.info("task deleted!!");
        }
      });

    })
  }
}

