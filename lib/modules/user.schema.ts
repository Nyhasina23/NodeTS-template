import mongoose , {Schema} from "mongoose";

const UserSchema = new Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model('users' , UserSchema)

export default UserModel;