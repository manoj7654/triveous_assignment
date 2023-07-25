// importing mongoose for creating product model and shcemal
const mongoose=require("mongoose")


// product schema
const productSchema=mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    availability:{type:Boolean,default:true},
    categoryId:{type:"ObjectId",ref:"category",require:true}
})


// product model
const ProductModel=mongoose.model("products",productSchema)


// exporting ProductModel
module.exports={
    ProductModel
}