import express from "express";
import bodyParser from "body-parser";
import { UserRoutes } from "../routes/user.routes";
import { CommonRoutes } from "../routes/common.routes";
import mongoose from "mongoose";
import morgan from "morgan"
import environement from "../environement";
class App {

    public app: express.Application;
    private user_routes: UserRoutes = new UserRoutes();
    private common_routes: CommonRoutes = new CommonRoutes();
    public mongoUrl: string = 'mongodb://localhost:27017/' + environement.getDBName();

    constructor() {
        this.app = express();
        this.config();
        this.user_routes.route(this.app);
        this.common_routes.route(this.app);
        this.mongoSetup();
    }

    //Middlewares config
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
    }


    private mongoSetup() {
        mongoose.connect(this.mongoUrl).then( () =>
            console.log('MongoDB connected')
        ).catch(() => 'MongoDB connection Error');
    }

}

export default new App().app
