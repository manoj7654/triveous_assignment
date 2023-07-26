// importing express for creating orderRouter
const express=require("express")
const orderRouter=express.Router()

// importing order controller for making request
const { order } = require("../controller/order.controller")
const { authenticate } = require("../middleware/authentication")


// for making new order request
orderRouter.post("/order",authenticate,order)


// exporting
module.exports={
    orderRouter
}