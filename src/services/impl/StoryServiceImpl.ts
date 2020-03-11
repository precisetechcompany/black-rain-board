import { StoryService } from "../StoryService";
import * as mongoose from 'mongoose';
var Story = mongoose.model('Story');
import { getLogger } from 'log4js';
const logger = getLogger("StoryServiceImpl");
logger.level = 'info';



export class StoryServiceImpl implements StoryService {
  createStory(story: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Story.create(story, (err, storyCreated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Story Created!', data: storyCreated })
            logger.info("Story Created!!");
        }
      });

    })
  }

  getStory(): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Story.find({}, (err, story) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Story fetched!', data: story })
            logger.info("Story fetched!!");
        }
      });

    })
  }

  getStoryByID(storyId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Story.findById(storyId, (err, story) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Story fetched!', data: story })
            logger.info("Story fetched!!");
        }
      });

    })
  }

  updateStory(storyId: string, story: any): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Story.findOneAndUpdate({_id: storyId}, story, {new: true}, (err, storyUpdated) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Story updated!', data: storyUpdated })
            logger.info("Story updated!!");
        }
      });

    })
  }

  deleteStory(storyId: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      
      Story.remove({
        _id: storyId
      }, (err, story) => {
        if (err) {
            reject(err);
        } else {
            resolve({ message: 'Story deleted!' })
            logger.info("Story deleted!!");
        }
      });

    })
  }
}

