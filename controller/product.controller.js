// importing produt.model for creating product function
const {ProductModel}=require("../models/product.model")

// creating product here
const product=async(req,res)=>{
    const {title,description,availability,category}=req.body
    try {
        const result=new ProductModel({title,description,availability,category})
        await result.save()
        res.status(201).json({"message":"Product added successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Unable to add product"})
    }
}

// getting products using category
const getProduct=async(req,res)=>{
    const id=req.params.categoryId
try {
    const result=await ProductModel.find({categoryId:id})
    res.status(200).json(result)
} catch (error) {
    console.log(error)
        res.status(500).json({"message":"Getting Error while getting product"})
}
}

// export
module.exports={
    product,
    getProduct
}