// importing express for creating userRouter
const express=require("express")
const userRouter=express.Router()


// importing user controller for making request
const {register, login}=require("../controller/users.controller")

/** 
 * @swagger 
 * components: 
 *   schemas: 
 *     User: 
 *       type: object 
 *       properties: 
 *         _id: 
 *           type: string 
 *           description: The auto-generated id of the user 
 *         name: 
 *           type: string 
 *           description: The user name 
 *         email: 
 *           type: string 
 *           description: The user email 
 *         password: 
 *           type: string
 *           description: Password of the user
 */ 
 
/** 
 * @swagger 
 * tags: 
 *  name: Users 
 *  description: All the API routes related to User 
 */ 
 

 

/** 
 * @swagger 
 * /register: 
 *   post: 
 *     summary: To post the details of a new user 
 *     tags: [Users] 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             $ref: '#/components/schemas/User' 
 *     responses: 
 *       200: 
 *         description: The user was successfully registered 
 *         content: 
 *           application/json: 
 *             schema: 
 *               $ref: '#/components/schemas/User' 
 *       500: 
 *         description: Some server error 
 */ 
 

// making request for regisert
userRouter.post("/register",register)

/** 
 * @swagger 
 * components: 
 *   schemas: 
 *     LoginUser: 
 *       type: object 
 *       properties: 
 *         email: 
 *           type: string 
 *           description: The user email 
 *         password: 
 *           type: string
 *           description: Password of the user
 */ 

/** 
 * @swagger 
 * /login: 
 *   post: 
 *     summary: To Login existing user  
 *     tags: [Users] 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             $ref: '#/components/schemas/LoginUser' 
 *     responses: 
 *       200: 
 *         description: The user was successfully loggedin
 *         content: 
 *           application/json: 
 *             schema: 
 *               $ref: '#/components/schemas/LoginUser' 
 *       500: 
 *         description: Getting error while loggin
 */ 
 

// making request for login
userRouter.post("/login",login)

// exporting userRouter
module.exports={
    userRouter
}