// importing express for creating app
const express=require("express")
const app=express()

// importing connection for running server and connecting to database
const {connection}=require("./config/db")

// importing dotenv for accessing data from .env file
require("dotenv").config()






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