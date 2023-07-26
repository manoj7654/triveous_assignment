// importing mongoose for creating product model and shcemal
const mongoose=require("mongoose")


// product schema
const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number},
    availability:{type:Boolean,default:true},
    categoryId:{type:"ObjectId",ref:"category"}
})


// product model
const ProductModel=mongoose.model("products",productSchema)


// exporting ProductModel
module.exports={
    ProductModel
}