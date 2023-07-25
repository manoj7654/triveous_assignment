// importing express for creating productRouter
const express=require("express")

// importing product,getproduct 
const { product, getProductByCategoryId,getProductByProductId} = require("../controller/product.controller")
const productRouter=express.Router()

// creating product
productRouter.post("/add",product)

// getting product by categoryId
productRouter.get("/product/:categoryId",getProductByCategoryId)


// getting product by product id
productRouter.get("/productId/:_id",getProductByProductId)

// export
module.exports={
    productRouter
}