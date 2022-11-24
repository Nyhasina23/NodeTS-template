import { IUser } from "./user.model";
import UserModel from './user.schema';

export default class UserService {

    public createUser(user_params:IUser , callback:any){
        const _session = new UserModel(user_params);
        _session.save(callback);
    }

}