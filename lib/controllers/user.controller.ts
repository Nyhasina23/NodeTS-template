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
        }else{
            insufficientParameters(res)
        }

    };

}