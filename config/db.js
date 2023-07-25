//  importing mongoose for creating connection
const mongoose=require("mongoose")

// importing dotenv for accessing data from .env file
require("dotenv").config()

// making connection from our database
const connection=mongoose.connect(process.env.mongoUrl)


// exporting connection
module.exports={
    connection
}