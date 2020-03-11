import { UserService } from "../UserService";
import * as mongoose from 'mongoose';
var User = mongoose.model('User');
import { getLogger } from 'log4js';
const logger = getLogger("UserServiceImpl");
logger.level = 'info';


export class UserServiceImpl implements UserService {
  createUser(user: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.create(user, (err, userCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User Created!', data: userCreated })
            logger.info("User Created!!");
        }
      });
    })
  }

  getUser(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.find({}, (err, user) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User fetched!', data: user })
            logger.info("User fetched!!");
        }
      });

    })
  }

  getUserByID(userId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.findById(userId, (err, user) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User fetched!', data: user })
            logger.info("User fetched!!");
        }
      });

    })
  }

  updateUser(userId: string, user: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.findOneAndUpdate({_id: userId}, user, {new: true}, (err, userUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User updated!', data: userUpdated })
            logger.info("User updated!!");
        }
      });

    })
  }

  deleteUser(userId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.remove({
        _id: userId
      }, (err, user) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User deleted!' })
            logger.info("User deleted!!");
        }
      });

    })
  }
}

