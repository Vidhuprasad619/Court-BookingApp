const USER = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const saltRounds = 10; //.env

const doSignup=(req,res)=>{
    try{
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                console.log(hash);
                USER({firstName:req.body.firstName.trim(),
                    lastName:req.body.lastName.trim(),
                    email:req.body.email.trim(),
                    password:hash}).save().then((response) => {
                    res.status(200).json({signup:true});
                }).catch((error) => {
                    console.log('error',error);
                });
            });
        });
    }catch(error){
        res.status(502).json({signup:false});
    }
   
}

const doLogin=async (req,res)=>{
    try{
        const user = await USER.findOne({email:req.body.email})
        console.log("user",user);
        if(user){
            bcrypt.compare(req.body.password, user.password, function(err, hashRes) {    
                if(hashRes){
                    // role 1=user
                    // role 2=vendor
                    // role 3=admin
                    const token = jwt.sign({ userId:user._id,
                        email:user.email,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        role:1 }, process.env.JWT_KEY, {
                        expiresIn: '2d'
                    })
                    user.password=undefined;
                    res.status(200).json({login:true,token:token,user:user});
                }else{
                    res.status(403).json({login:false});
                }
              });
        }
    }catch(error){
        console.log('error',error);
    }
}


module.exports={doSignup,doLogin};