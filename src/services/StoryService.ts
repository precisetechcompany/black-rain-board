import { Request, Response } from 'express';


export interface StoryService {
  getStory();
  createStory(story: any);
  getStoryByID(id: string);
  updateStory(id: string, story: any);
  deleteStory(id: string);
}