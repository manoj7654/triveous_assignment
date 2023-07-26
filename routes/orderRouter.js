// importing express for creating orderRouter
const express=require("express")
const orderRouter=express.Router()

// importing order controller for making request
const { order, orderHistory, orderDetails } = require("../controller/order.controller")

// importing authenticate for secure route
const { authenticate } = require("../middleware/authentication")


// for making new order request
orderRouter.post("/order/:productId",authenticate,order)


// for making order history request
orderRouter.get("/order/history",authenticate,orderHistory)


// for making order details for specific orderid request
orderRouter.get("/order/:_id",authenticate,orderDetails)


// exporting
module.exports={
    orderRouter
}