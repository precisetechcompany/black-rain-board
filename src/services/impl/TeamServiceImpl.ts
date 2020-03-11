import { TeamService } from "../TeamService";
import * as mongoose from 'mongoose';
var Team = mongoose.model('Team');
import { getLogger } from 'log4js';
const logger = getLogger("TeamServiceImpl");
logger.level = 'info';


export class TeamServiceImpl implements TeamService {
  createTeam(team: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Team.create(team, (err, teamCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Team Created!', data: teamCreated })
            logger.info("Team Created!!");
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
            logger.info("Team fetched!!");
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
            logger.info("Team fetched!!");
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
            logger.info("Team updated!!");
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
            logger.info("Team deleted!!");
        }
      });

    })
  }
}

