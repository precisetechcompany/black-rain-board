import { Request, Response } from 'express';
import { StoryService } from '../services/StoryService';

export class StoryController {
  storyService: StoryService;

  constructor(storyService: StoryService) {
    this.storyService = storyService;
  }

  public getStory(req: Request, res: Response){
    this.storyService.getStory().then((response) => {
      let story = response;
      res.status(story ? 200 : 400)
      res.json(story ? story : { "errors": [{ "message": "Error getting story" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the story.', 500));
  }

  public createStory(req: Request, res: Response){
    this.storyService.createStory(req.body).then((response) => {
      let story = response;
      res.status(story ? 201 : 400)
      res.json(story ? story : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the story.', 500));
  }

  public getStoryById(req: Request, res: Response){
    this.storyService.getStoryByID(req.params.id).then((response) => {
      let story = response;
      res.status(story != null ? 200 : 400)
      res.json(story ? story : { "errors": [{ "message": "story not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the story.', 500));
  }

  public updateStory(req: Request, res: Response){
    this.storyService.updateStory(req.params.id, req.body).then((response) => {
      let story = response;
      res.status(story ? 200 : 400)
      res.json(story ? story : { "errors": [{ "message": "story update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the story.', 500));
  }

  public deleteStory(req: Request, res: Response){
    this.storyService.deleteStory(req.params.id).then((response) => {
      let story = response;
      res.status(story ? 200 : 400)
      res.json(story ? story : { "errors": [{ "message": "story not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not delete the story.', 500));
  }
  
}