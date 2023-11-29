const mongoose = require('mongoose');

const connectDB =async ()=>{
    try{
        const connection =await mongoose.connect('mongodb://127.0.0.1:27017/DapperDash',{
            useNewUrlParser:"true",
        })
        console.log("mongoDb connected");
    }catch(error){
        console.log("error : ",error);
    }
}

module.exports=connectDB;