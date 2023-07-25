// importing userModel for creating register and login function
const {UserModel}=require("../models/users.model")

// importing jwt for generating token
const jwt=require("jsonwebtoken")

// importing bcrypt for hashing the password
const bcrypt=require("bcrypt")

// importing dotenv for accessing data from .env file
require("dotenv").config()


// register
const register=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        if (!name  || !email  || !password) {
            return res.status(400).json({
              message: "Name, mobile,email and password are required.",
            });
          }
        const alreadyUser=await UserModel.find({email})
        if(alreadyUser.length>0){
            return res.status(400).json({"message":"User already exist"})
        }
        bcrypt.hash(password,5,async(err,secure_password)=>{
            if(err){
                console.log(err)
            }
            const user=new UserModel({name,email,password:secure_password})
            await user.save()
            res.status(201).json({"message":"Account created successfully"})
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Getting Error while creating account"})
    }
}

// login
const login=async(req,res)=>{
    const {email,password}=req.body
    try {
        if(!email ||!password){
            return res.status(401).json({"message":"Email and Password required"})
        }
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user[0]._id},process.env.key)
                    res.status(201).json({"token":token,"message":"Login Successfull"})
                }else{
                    res.status(401).json({"message":"Either email or password wrong"})
                }
            })
        }else{
            res.status(401).json({"message":"Wrong Credential"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Getting Error while loging"})
    }
}

// exporting
module.exports={
    register,
    login
}