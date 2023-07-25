// importing express for creating categoryRouter
const express=require("express")

// importing category for making request
const { category, getAllCategory } = require("../controller/category.controller")
const categoryRouter=express.Router()


// creating category
categoryRouter.post("/category",category)

// getting all category
categoryRouter.get("/allCategory",getAllCategory)

module.exports={
    categoryRouter
}
