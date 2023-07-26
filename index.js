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


// importing swagger for api documentation
const swaggerJSdocs=require("swagger-jsdoc")
const swaggerUI=require("swagger-ui-express")

// importing rate limiter
const rateLimit = require('express-rate-limit')
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
  

// middleware 
app.use(express.json())

// configuration of swaggerJSdocs
const option={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"E-commerce APIs",
            version:"1.0.0"
        },
        server:{
            url:`http://localhost:${process.env.port}`
        }
    },
    apis:["./routes/*.js"]
}

// open api specification
const openAPIspec=swaggerJSdocs(option)

// build the swagger UI with the help of openAPIspec
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(openAPIspec))

// basic enpoint of this api
app.get("/",(req,res)=>{
    res.send("Home Page Of This Api")
})


// making api request
app.use("/",userRouter,rateLimiter)
app.use("/",productRouter,rateLimiter)
app.use("/",categoryRouter,rateLimiter)
app.use("/",cartRouter,rateLimiter)
app.use("/",orderRouter,rateLimiter)


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