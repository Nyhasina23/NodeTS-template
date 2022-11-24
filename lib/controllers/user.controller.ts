import { Request, Response } from "express";
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../utils/user.exception';
import { IUser } from '../modules/user.model';
import UserService from '../modules/user.services';

export default class UserController {

    private user_service: UserService = new UserService();

    public createUser(req: Request, res: Response) {

        if (req.body.username && req.body.password) {
            const user_params: IUser = {
                username: req.body.username,
                password: req.body.password
            }

            this.user_service.createUser(user_params, (err: any, user_data: IUser) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('User created', user_data, res)
                }
            });
        } else {
            insufficientParameters(res)
        }

    };

    public getUser(req: Request, res: Response) {
        this.user_service.getUser((err: any, user_data: IUser) => {
            if (err) {
                mongoError(err, res)
            } else {
                successResponse('User fetched', user_data, res)
            }
        })
    }

    public updateUser(req:Request , res:Response) {

        if(req.params.id && req.body.username && req.body.password){

            const user_params: IUser = {
                username: req.body.username,
                password: req.body.password
            }

            this.user_service.updateUser(req.params.id , user_params , (err:any, user_data:IUser) => {
                if(err) {
                    mongoError(err , res);
                }else{
                    successResponse('User updated' , user_data , res);
                }
            })
        }else{
            insufficientParameters(res);
        }

    }



}