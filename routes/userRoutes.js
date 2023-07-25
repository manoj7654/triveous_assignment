// importing express for creating userRouter
const express=require("express")
const userRouter=express.Router()


// importing user controller for making request
const {register, login}=require("../controller/users.controller")


// making request for regisert
userRouter.post("/register",register)

// making request for login
userRouter.post("/login",login)

// exporting userRouter
module.exports={
    userRouter
}