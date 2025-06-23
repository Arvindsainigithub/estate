import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photoUrl:{
        type:String,
        default:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    }
} ,{timestamps:true})

const User = mongoose.model("User",userSchema);

export default User;