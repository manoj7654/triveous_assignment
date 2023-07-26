// importing express for creating app
const express=require("express")
const app=express()

// importing connection for running server and connecting to database
const {connection}=require("./config/db")

// importing dotenv for accessing data from .env file
require("dotenv").config()


// importing user router 
const {userRouter}=require("./routes/userRoutes")
const { productRouter } = require("./routes/productRoutes")
const { categoryRouter } = require("./routes/categoryRoutes")
const { cartRouter } = require("./routes/cartRouter")
const { orderRouter } = require("./routes/orderRouter")


// middleware 
app.use(express.json())



// basic enpoint of this api
app.get("/",(req,res)=>{
    res.send("Home Page Of This Api")
})


// making api request
app.use("/",userRouter)
app.use("/",productRouter)
app.use("/",categoryRouter)
app.use("/",cartRouter)
app.use("/",orderRouter)


// app is listening here on specific port no
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to Database Successfully")
    } catch (error) {
        console.log("Getting error while connection to database")
    }
    console.log(`Server is listening on port no ${process.env.port}`)
})