import { Router,Request, Response } from "express";
import * as express from "express";
import { Config } from '../config/config';

export class BaseRouter {
    public router = express.Router();

    public BaseRouter(app: express.Application): void {
        
        this.router.get('/',(req: Request, res: Response) => {
            console.log("sucess")
            res.status(200).send({
                message: 'Welcome to Scrum Board API!'
            })
        })
        this.router.get('/health/',(req: Request, res: Response) => {
            console.log("sucess")
            res.status(200).send({
                message: 'Health is fine!!!!'
            })
        })
    }
}
