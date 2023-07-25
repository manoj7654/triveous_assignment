const mongoose=require("mongoose")

// category schema
const categorySchema=mongoose.Schema({
    name:{type:String,unique:true,required:true}
})

// categorymodel
const CategoryModel=mongoose.model("category",categorySchema)


// export
module.exports={
    CategoryModel
}