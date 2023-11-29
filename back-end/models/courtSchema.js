const mongoose= require('mongoose');



const courtSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type : String,
        required : true
    },
    price:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
})

const court=mongoose.model('court',courtSchema);
module.exports=court;