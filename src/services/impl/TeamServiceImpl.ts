import { TeamService } from "../TeamService";
import * as mongoose from 'mongoose';
var Team = mongoose.model('Team');


export class TeamServiceImpl implements TeamService {
  createTeam(team: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.create(team, (err, teamCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team Created!', data: teamCreated })
        }
      });

    })
  }

  getTeam(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.find({}, (err, team) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team fetched!', data: team })
        }
      });
    })
  }

  getTeamByID(teamId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.findById(teamId, (err, team) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team fetched!', data: team })
        }
      });

    })
  }

  updateTeam(teamId: string, team: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.findOneAndUpdate({_id: teamId},team, {new: true}, (err, teamUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team updated!', data: teamUpdated })
        }
      });

    })
  }

  deleteTeam(teamId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.remove({
        _id: teamId
      }, (err, team) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team deleted!' })
        }
      });

    })
  }
}

