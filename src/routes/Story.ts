import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { StoryController } from "./../controllers/StoryController";

export class StoryRouter {
  router = express.Router();
  storyController: StoryController;
  constructor(storyController: StoryController) {
    this.storyController = storyController;
  }
  public StoryRouter(app: express.Application): void {
    this.router.get('/', this.storyController.getStory.bind(this.storyController))
    this.router.post('/', this.storyController.createStory.bind(this.storyController))
    this.router.get('/:id', this.storyController.getStoryById.bind(this.storyController))
    this.router.put('/:id', this.storyController.updateStory.bind(this.storyController))
    this.router.delete('/:id', this.storyController.deleteStory.bind(this.storyController))
  }
}