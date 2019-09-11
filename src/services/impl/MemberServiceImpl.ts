import { MemberService } from "../MemberService";
import * as mongoose from 'mongoose';
var Member = mongoose.model('Member');


export class MemberServiceImpl implements MemberService {
  createMember(member: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      Member.find()
      .select('TeamId',)
      .populate('Team','team_name')
      .exec() 
      Member.create(member, (err, memberCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Member Created!', data: memberCreated })
        }
      });

    })
  }

  getMember(): Promise<any> {
    return new Promise(function (resolve, reject) {
      Member.find()
      .select('TeamId',)
      .populate('Team','team_name')
      .exec() 
      Member.find({}, (err, member) => {
        
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Member fetched!', data: member })
        }
      });

    })
  }

  getMemberByID(memberId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Member.findById(memberId, (err, member) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Member fetched!', data: member })
        }
      });

    })
  }

  updateMember(memberId: string, member: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Member.findOneAndUpdate({_id: memberId}, member, {new: true}, (err, memberUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Member updated!', data: memberUpdated })
        }
      });

    })
  }

  deleteMember(memberId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Member.remove({
        _id: memberId
      }, (err, member) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Member deleted!' })
        }
      });

    })
  }
}

