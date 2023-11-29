const { response } = require('express');
const COURT=require('../models/courtSchema');
const multer=require('multer');




const registerNewCourt = (req,res)=>{
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "public/vendorCourts");
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    });
    const upload = multer({ storage: fileStorage }).single("image");

        upload(req, res, (err) => {
            COURT({
                name:req.query.name,
                location:req.query.location,
                price:req.query.price,
                contact:req.query.contact,
                about:req.query.about,
                image:req?.file?.filename || "courtImage.jpg"
            }).save().then(response=>{
                res.status(200).json({message:"court registration successfull"})
            }).catch(res=>{
                res.status(403).json({message:"court registration failed"})
            })
        });
}

module.exports={registerNewCourt};