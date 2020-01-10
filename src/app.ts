import * as express from 'express'
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Config } from './config/config';
require("./models/Board");
require("./models/Task");
require("./models/User");
require("./models/Team");
require("./models/Member");
require("./models/Sprint");
require("./models/Epic");
require("./models/Story");
import { BaseRouter } from "./routes/base";
import { BoardRouter } from "./routes/board";
import { TaskRouter } from "./routes/Task";
import {UserRouter} from "./routes/User";
import { TeamRouter } from "./routes/Team";
import { MemberRouter } from "./routes/Member";
import { SprintRouter } from "./routes/Sprint";
import { EpicRouter } from "./routes/Epic";
import { StoryRouter } from "./routes/Story";
import BoardService = require("./services/BoardService");
import TaskService = require("./services/TaskService");
import UserService = require("./services/UserService");
import TeamService = require("./services/TeamService");
import MemberService = require("./services/MemberService");
import SprintService = require("./services/SprintService");
import EpicService = require("./services/EpicService");
import StoryService = require("./services/StoryService");
import BoardServiceImpl = require("./services/impl/BoardServiceImpl");
import TaskServiceImpl = require("./services/impl/TaskServiceImpl");
import UserServiceImpl = require("./services/impl/UserServiceImpl");
import TeamServiceImpl = require("./services/impl/TeamServiceImpl");
import MemberServiceImpl = require("./services/impl/MemberServiceImpl");
import SprintServiceImpl = require("./services/impl/SprintServiceImpl");
import EpicServiceImpl = require("./services/impl/EpicServiceImpl");
import StoryServiceImpl = require("./services/impl/StoryServiceImpl");
import { BoardController } from "./controllers/BoardController";
import { TaskController } from "./controllers/TaskController";
import { UserController } from "./controllers/UserController";
import { TeamController } from "./controllers/TeamController";
import { MemberController } from "./controllers/MemberController";
import { SprintController } from "./controllers/SprintController";
import { EpicController } from "./controllers/EpicController";
import { StoryController } from "./controllers/StoryController";


class App {
  public express:any = express.application;
  public baseRouter;
  boardService: BoardService.BoardService = new BoardServiceImpl.BoardServiceImpl();
  taskService: TaskService.TaskService = new TaskServiceImpl.TaskServiceImpl();
  userService: UserService.UserService = new UserServiceImpl.UserServiceImpl();
  teamService: TeamService.TeamService = new TeamServiceImpl.TeamServiceImpl();
  memberService: MemberService.MemberService = new MemberServiceImpl.MemberServiceImpl();
  sprintService: SprintService.SprintService = new SprintServiceImpl.SprintServiceImpl();
  epicService: EpicService.EpicService = new EpicServiceImpl.EpicServiceImpl();
  storyService: StoryService.StoryService = new StoryServiceImpl.StoryServiceImpl();
  boardController : BoardController = new BoardController(this.boardService);
  taskController : TaskController = new TaskController(this.taskService);
  userController : UserController = new UserController(this.userService);
  teamController : TeamController = new TeamController(this.teamService);
  memberController : MemberController = new MemberController(this.memberService);
  sprintController : SprintController = new SprintController(this.sprintService);
  epicController : EpicController = new EpicController(this.epicService);
  storyController : StoryController = new StoryController(this.storyService);
  boardRouter: BoardRouter = new BoardRouter(this.boardController);
  taskRouter: TaskRouter = new TaskRouter(this.taskController);
  userRouter: UserRouter = new UserRouter(this.userController);
  teamRouter: TeamRouter = new TeamRouter(this.teamController);
  memberRouter: MemberRouter = new MemberRouter(this.memberController);
  sprintRouter: SprintRouter = new SprintRouter(this.sprintController);
  epicRouter: EpicRouter = new EpicRouter(this.epicController);
  storyRouter: StoryRouter = new StoryRouter(this.storyController);


  constructor () {
    this.mongoSetup();
    this.express = express();
    this.config();
    this.baseRouter = new BaseRouter();
    this.baseRouter.BaseRouter(this.express);
    this.boardRouter.BoardRouter(this.express);
    this.taskRouter.TaskRouter(this.express);
    this.userRouter.UserRouter(this.express);
    this.teamRouter.TeamRouter(this.express);
    this.memberRouter.MemberRouter(this.express);
    this.sprintRouter.SprintRouter(this.express);
    this.epicRouter.EpicRouter(this.express);
    this.storyRouter.StoryRouter(this.express);
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', this.baseRouter.router)
    this.express.use('/boards', this.boardRouter.router)
    this.express.use('/tasks', this.taskRouter.router)
    this.express.use('/users', this.userRouter.router)
    this.express.use('/teams', this.teamRouter.router)
    this.express.use('/members', this.memberRouter.router)
    this.express.use('/sprints', this.sprintRouter.router)
    this.express.use('/epics', this.epicRouter.router)
    this.express.use('/stories', this.storyRouter.router)
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