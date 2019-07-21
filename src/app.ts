import * as express from 'express'
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Config } from './config/config';
require("./models/Board");
import { BaseRouter } from "./routes/base";
import { BoardRouter } from "./routes/board";
import BoardService = require("./services/BoardService");
import BoardServiceImpl = require("./services/impl/BoardServiceImpl");
import { BoardController } from "./controllers/BoardController";

class App {
  public express;
  public baseRouter;
  boardService: BoardService.BoardService = new BoardServiceImpl.BoardServiceImpl();
  boardController : BoardController = new BoardController(this.boardService);
  boardRouter: BoardRouter = new BoardRouter(this.boardController);

  constructor () {
    this.express = express();
    this.baseRouter = new BaseRouter();
    this.baseRouter.BaseRouter(express);
    this.boardRouter.BoardRouter(express);
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', this.baseRouter.router)
    this.express.use('/boards', this.boardRouter.router)
  }

  private config(): void {
    // support application/json type post data
    express.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    express.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    let connection: mongoose.Connection;
    mongoose.Promise = global.Promise;
    var con = Config.getPropertyValue("dbUrl");
    mongoose.connect(con,{useNewUrlParser:true})
            .then(()=>{console.log('Connected to MongoDB success')})
            .catch((err) => {console.log('Connected to MongoDB failure',err)})
  }
}

export default new App().express