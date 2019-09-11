import { Request, Response } from 'express';


export interface MemberService {
  getMember();
  createMember(member: any);
  getMemberByID(id: string);
  updateMember(id: string, member: any);
  deleteMember(id: string);
}