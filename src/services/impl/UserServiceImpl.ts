import { UserService } from "../UserService";
import * as mongoose from 'mongoose';
var User = mongoose.model('User');


export class UserServiceImpl implements UserService {
  createUser(user: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      User.create(user, (err, userCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'User Created!', data: userCreated })
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
        }
      });

    })
  }
}

