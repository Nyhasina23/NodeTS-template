import  {Application, Request , Response} from "express";
import UserController from "../controllers/user.controller";
export class UserRoutes {

    private user_controller:UserController = new UserController();

    public route(app: Application){
        app.get('/user' , (req: Request , res:Response) => {
            this.user_controller.getUser(req , res);
        });
        app.post('/user' , (req: Request , res:Response) => {
            this.user_controller.createUser(req, res)
        });
        app.put('/user/:id' , (req: Request , res:Response) => {
            this.user_controller.updateUser(req, res)
        });
    }
}