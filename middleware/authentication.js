// importing jwt for generating token
const jwt=require("jsonwebtoken")

// importing dotenv for accessing data from .env file
require("dotenv").config()

// creating authentication 
const authenticate=async(req,res,next)=>{
    const token=req.authorization.token
   if(token){
    const decode=jwt.verify(token,process.env.key)
    if(decode){
        const userId=decode.userId
        req.body.userId=userId
        next()
    }else{
        res.status(401).json({"message":"Please Login Again"})
    }
   }else{
    res.status(401).json({"message":"Please Login First"})
   }
}


// exporting authenticate
module.exports={
    authenticate
}