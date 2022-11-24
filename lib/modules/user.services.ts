import { IUser } from "./user.model";
import UserModel from './user.schema';

export default class UserService {

    public createUser(user_params: IUser, callback: any) {
        const _session = new UserModel(user_params);
        _session.save(callback);
    }

    public getUser(callback: any) {
        UserModel.find(callback);
    }

    public updateUser(query: any, user_params: IUser, callback: any) {
        UserModel.findByIdAndUpdate(query, { $set: user_params }, callback);
    }

    public deleteUser(query:any , callback:any){
        UserModel.findByIdAndDelete(query , callback);
    }

}