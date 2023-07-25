const mongoose=require("mongoose")

// category schema
const categorySchema=mongoose.Schema({
    name:{type:String,unique:true,require:true}
})

// categorymodel
const CategoryModel=mongoose.model("category",categorySchema)


// export
module.exports={
    CategoryModel
}