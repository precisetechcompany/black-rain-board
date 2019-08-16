import * as express from 'express'
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Config } from './config/config';
require("./models/Board");
require("./models/Task");
require("./models/User");
import { BaseRouter } from "./routes/base";
import { BoardRouter } from "./routes/board";
import { TaskRouter } from "./routes/Task";
import { UserRouter } from "./routes/User";
import BoardService = require("./services/BoardService");
import TaskService = require("./services/TaskService");
import UserService = require("./services/UserService");
import BoardServiceImpl = require("./services/impl/BoardServiceImpl");
import TaskServiceImpl = require("./services/impl/TaskServiceImpl");
import UserServiceImpl = require("./services/impl/UserServiceImpl");
import { BoardController } from "./controllers/BoardController";
import { TaskController } from "./controllers/TaskController";
import { UserController } from "./controllers/UserController";

class App {
  public express:any = express.application;
  public baseRouter;
  boardService: BoardService.BoardService = new BoardServiceImpl.BoardServiceImpl();
  taskService: TaskService.TaskService = new TaskServiceImpl.TaskServiceImpl();
  userService: UserService.UserService = new UserServiceImpl.UserServiceImpl();
  boardController : BoardController = new BoardController(this.boardService);
  taskController : TaskController = new TaskController(this.taskService);
  userController : UserController = new UserController(this.userService);
  boardRouter: BoardRouter = new BoardRouter(this.boardController);
  taskRouter: TaskRouter = new TaskRouter(this.taskController);
  userRouter: UserRouter = new UserRouter(this.userController);

  constructor () {
    this.mongoSetup();
    this.express = express();
    this.config();
    this.baseRouter = new BaseRouter();
    this.baseRouter.BaseRouter(this.express);
    this.boardRouter.BoardRouter(this.express);
    this.taskRouter.TaskRouter(this.express);
    this.userRouter.UserRouter(this.express);
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', this.baseRouter.router)
    this.express.use('/boards', this.boardRouter.router)
    this.express.use('/tasks', this.taskRouter.router)
    this.express.use('/users', this.userRouter.router)
  }

  private config(): void {
    // support application/json type post data
    this.express.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    // this.express.use(bodyParser.urlencoded({ extended: false }));
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