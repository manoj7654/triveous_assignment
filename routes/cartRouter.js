// importing express for creating cartRouter
const express=require("express")

// importing category for making request
const { addToCart, updateQuantity, getAllDataFromCart, deleteItem } = require("../controller/cart.controller")
const cartRouter=express.Router()


// impporting middleware for authenticaton
const {authenticate}=require("../middleware/authentication")

// making request for creating category
cartRouter.post("/cart",authenticate,addToCart)

// making request for updating quantity
cartRouter.patch("/update",updateQuantity)


// making request for all data
cartRouter.get("/cart/:userId",getAllDataFromCart)

// making request for removing item from cart
cartRouter.delete("/remove/:productId",deleteItem)


// exporting cart router
module.exports={
    cartRouter
}