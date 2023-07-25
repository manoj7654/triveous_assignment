// importing produt.model for creating category function
const { CategoryModel } = require("../models/category.model")


// creating new category
const category=async(req,res)=>{
    const {name}=req.body
    try {
        const result=new CategoryModel({name})
        await result.save()
        res.status(201).json({"message":"category added successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Unable to add category"})
    }
}


// getting all category

const getAllCategory=async(req,res)=>{

    try {
        const result=await CategoryModel.find()
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Getting error while fetching category"})
    }
}
module.exports={
    category,
    getAllCategory
}