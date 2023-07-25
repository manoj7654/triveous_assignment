// exporting mongoose for creating scheam and model
const mongoose=require("mongoose")

// user schema
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

// user model
const UserModel=mongoose.model("users",userSchema)


// exporting UserModel
module.exports={
    UserModel
}