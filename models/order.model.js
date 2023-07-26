// importing mongoose for creating order schema and model
const mongoose=require("mongoose")


// order schema
const orderSchema=mongoose.Schema({
    userId:{type:"ObjectId"},
    items:[
        {
            productId:{type:"ObjectId",ref:"users",required:true},
            quantity:{type:Number,required:true}

        }
    ],
    totalAmount:{type:Number},
    orderData:{type:Date,default:Date.now}
})


// order model
const OrderModel=mongoose.model("orders",orderSchema)


// exporting ordermodel
module.exports={
    OrderModel
}