const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type : String ,
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
    role:{
        type:Number,
        default:1
    }
})

const user=mongoose.model('users',userSchema);
module.exports=user;