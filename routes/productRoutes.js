// importing express for creating productRouter
const express=require("express")

// importing product,getproduct 
const { product, getProduct } = require("../controller/product.controller")
const productRouter=express.Router()

// creating product
productRouter.post("/add",product)

// getting product by categoryId
productRouter.get("/product/:categoryId",getProduct)


// export
module.exports={
    productRouter
}