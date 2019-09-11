import { Request, Response } from 'express';
import { MemberService } from '../services/MemberService';

export class MemberController {
  MemberService: MemberService;

  constructor(MemberService: MemberService) {
    this.MemberService = MemberService;
  }
  public getMember(req: Request, res: Response){
    this.MemberService.getMember().then((response) => {
      let Member = response;
      res.status(Member ? 200 : 400)
      res.json(Member ? Member : { "errors": [{ "message": "Error getting Member" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Member.', 500));
  }

  public createMember(req: Request, res: Response){
    this.MemberService.createMember(req.body).then((response) => {
      let Member = response;
      res.status(Member ? 201 : 400)
      res.json(Member ? Member : { "errors": [{ "message": "Unexpected/invalid Json format in request" }] }
      )
    }).catch(err => console.log(err, res, 'Could not save the Member.', 500));
  }

  public getMemberById(req: Request, res: Response){
    this.MemberService.getMemberByID(req.params.id).then((response) => {
      let Member = response;
      res.status(Member != null ? 200 : 400)
      res.json(Member ? Member : { "errors": [{ "message": "Member not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not get the Member.', 500));
  }

  public updateMember(req: Request, res: Response){
    this.MemberService.updateMember(req.params.id, req.body).then((response) => {
      let Member = response;
      res.status(Member ? 200 : 400)
      res.json(Member ? Member : { "errors": [{ "message": "Member update failed" }] }
      )
    }).catch(err => console.log(err, res, 'Could not update the Member.', 500));
  }

  public deleteMember(req: Request, res: Response){
    this.MemberService.deleteMember(req.params.id).then((response) => {
      let Member = response;
      res.status(Member ? 200 : 400)
      res.json(Member ? Member : { "errors": [{ "message": "Member not found" }] }
      )
    }).catch(err => console.log(err, res, 'Could not Member the board.', 500));
  }
  
}