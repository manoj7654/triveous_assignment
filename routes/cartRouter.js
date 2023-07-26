// importing express for creating cartRouter
const express=require("express")

// importing category for making request
const { addToCart, updateQuantity, getAllDataFromCart, deleteItem } = require("../controller/cart.controller")
const cartRouter=express.Router()

/** 
 * @swagger 
 * components: 
 *   schemas: 
 *     Cart: 
 *       type: object 
 *       properties: 
 *         _id: 
 *           type: string 
 *           description: The auto-generated id of the cart 
 *         userId: 
 *           type: string 
 *           description: The userId of users
 *         parameters: 
 *           name: userId
 *           description: List of items
 
 */ 
 
/** 
 * @swagger 
 * tags: 
 *  name: Cart
 *  description: All the API routes related to Cart
 */ 

/** 
 * @swagger 
 * /add: 
 *   post: 
 *     summary: To add product into cart 
 *     tags: [Cart] 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             $ref: '#/components/schemas/Cart' 
 *     responses: 
 *       200: 
 *         description: The product added  successfully into cart
 *         content: 
 *           application/json: 
 *             schema: 
 *               $ref: '#/components/schemas/Cart' 
 *       500: 
 *         description: Some server error 
 */ 
 

// impporting middleware for secure route
const {authenticate}=require("../middleware/authentication")

// making request for creating category
cartRouter.post("/cart/:productId",authenticate,addToCart)

// making request for updating quantity
cartRouter.patch("/update/:productId",authenticate,updateQuantity)


// making request for all data
cartRouter.get("/cart/:userId",authenticate,getAllDataFromCart)

// making request for removing item from cart
cartRouter.delete("/remove/:productId",authenticate,deleteItem)


// exporting cart router
module.exports={
    cartRouter
}