import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';
import { MemberController } from "./../controllers/MemberController";

export class MemberRouter {
  router = express.Router();
  MemberController: MemberController;
  constructor(MemberController: MemberController) {
    this.MemberController = MemberController;
  }
  public MemberRouter(app: express.Application): void {
    this.router.get('/', this.MemberController.getMember.bind(this.MemberController))
    this.router.post('/', this.MemberController.createMember.bind(this.MemberController))
    this.router.get('/:id', this.MemberController.getMemberById.bind(this.MemberController))
    this.router.put('/:id', this.MemberController.updateMember.bind(this.MemberController))
    this.router.delete('/:id', this.MemberController.deleteMember.bind(this.MemberController))
  }
}