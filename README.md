# E-Commerce API
Welcome to the documentation for the E-Commerce API! This API provides various endpoints to manage users, products, categories, carts, and orders for an E-commerce application.

## Table of Contents

* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)

  * [Installation](#installation)

  * [Running the Server](#running-the-server)

* [Authentication](#authentication)

* [Rate Limiting](#rate-limiting)

* [Endpoints](#endpoints)
  * [User Endpoints](#user-endpoints)

  * [Product Endpoints](#product-endpoints)

  * [Category Endpoints](#category-endpoints)

  * [Cart Endpoints](#cart-endpoints)

  * [Order Endpoints](#order-endpoints)

* [Models](#models)

* [Controllers](#controllers)

* [Middleware](#middleware)

* [Presentation Video](#presentation-video)

* [Deployed Link](#deployed-link)

## Getting Started
### Prerequisites

 Before running the API, ensure you have the following software installed:


* MongoDB (Make sure it's running locally or provide the database URL in the .env file)

### Installation
1. Clone this repository to your local machine:

        git clone https://github.com/manoj7654/triveous_assignment.git

2. Install the dependencies:

            cd triveous_assignment
            npm install
3. Create a .env file in the root of the project and add the following variables:

        MongoDB connection URL
        mongoUrl=your mongoUrl

        Secret key for JWT authentication
        key=your secret ky

        Port number to run the server 
        port=your port no
### Running the Server
To start the API server, use the following command:


      npm start
The server will be available at http://localhost:your port no/ 

### Authentication
The API uses JSON Web Tokens (JWT) for authentication. When a user registers or logs in successfully, a JWT token is generated and provided in the response. This token should be included in the Authorization header for secure access to protected endpoints.

### Rate Limiting
To prevent abuse and enhance security, the API implements rate limiting using the express-rate-limit middleware. This limits the number of requests from an IP address within a specific time window.

### Endpoints
The API provides the following endpoints for managing E-commerce data:

1. User Endpoints

`Create a new user account`

* method:POST
* Endpoint: /register
* Request Body:

        {
        "name": "abc",
        "email": "abc@gmail.com",
        "password": "abc"
        }

* Response Body (Success):

        {
        "message": "Account created successfully"
        }

`Login User`

* method:POST
* Endpoint: /login

* Request Body:

            {
             "email": "abc@gmail.com",
             "password": "abc"
            }
* Response Body (Success):

            {
            "token": "jwt token",
            "userId": "userId",
            "message": "Login Successfull"
            }

2. Product Endpoints

`Create a new product`

* method: POST
* Endpoint: /add

* Request Body:

            {
            "title": "Product Title",
            "description": "Product Description",
            "price": 50.99,
            "availability": true,
            "categoryId": "category_id"
            }
* Response Body (Success):

        {
        "message": "Product added successfully"
        }

`Get products by category ID`

* method: GET
* Endpoint: /product/:categoryId

* Response Body (Success):

        [
            {
                "title": "Product 1",
                "description": "Product 1 Description",
                "price": 50.99,
                "availability": true,
                "categoryId": "categoryId_1"
            },
            {
                "title": "Product 2",
                "description": "Product 2 Description",
                "price": 35.99,
                "availability": false,
                "categoryId": "categoryId_1"
            }
        ]

`Get a single product by its productId`

* method: GET
* Endpoint: /productid/:_id
* params: req.params._id
* Response Body (Success):

        {
        "title": "Product Title",
        "description": "Product Description",
        "price": 50.99,
        "availability": true,
        "categoryId": "categoryId"
        }

3. Category Endpoints

`Create a new category`

* method: POST
* Endpoint: /category

* Request Body:

        {
        "name": "Category Name"
        }
* Response Body (Success):

        {
        "message": "Category added successfully"
        }

`Get all categories`

* method: GET
* Endpoint: /allCategory

* Response Body (Success):

        [
        {
            "name": "Category 1"
        },
        {
            "name": "Category 2"
        }
        ]
4. Cart Endpoints

`Add a product to the cart`

* method: POST
* Endpoint: /cart/:productId
* Authorization : token
* userId: It wil come from token 
* productId: req.pramas.productId
* Response Body (Success):

        {
        "message": "Product added to cart successfully"
        }
`Update the quantity of a product in the cart`

* method: PATCH
* Endpoint: /update/:productId
* productId: req.params.productId
* userId: It will come form token
* Authorization: token
* Request Body:

    {
      
      "quantity": 3
    }

* Response Body (Success):

    {
      "message": "Cart item updated successfully"
    }

`Get all items in the cart for a specific user`

* method: GET
* Endpoint: /cart/:userId
* userId:req.params.userId
* Authorization: token
* Response Body (Success):

        [
          {
            "productId": "productId_1",
            "quantity": 2,
            "price": 50.99
          },
          {
            "productId": "productId_2",
            "quantity": 1,
            "price": 35.99
          }
        ]
`Remove an item from the cart`

* method: DELETE
* Endpoint: /remove/:productId
* productId: req.params.productId
* Authorization: token
* userId: It will come from token 
Response Body (Success):

    {
      "message": "Cart item deleted successfully"
    }

5. Order Endpoints

`Place a new order`

* method: POST
* Endpoint :/order/productId
* productId=req.params.productId
* Authorization: token
* Response Body (Success):

    {
      "message": "Order placed successfully"
    }

`Get order history for a user`

* method: GET
* Endpoint: order/history

Response Body (Success):

        [
          {
            "userId": "userId",
            "items": [
              {
                "productId": "productId_1",
                "quantity": 2
              },
              {
                "productId": "productId_2",
                "quantity": 1
              }
            ],
            "totalAmount": 137.97,
            "orderData": "2023-07-26T12:34:56.789Z"
          },
          {
            "userId": "userId",
            "items": [
              {
                "productId": "productId_3",
                "quantity": 1
              }
            ],
            "totalAmount": 19.99,
            "orderData": "2023-07-27T09:12:34.567Z"
          }
        ]

`Get order details for a specific order`

* method: GET
* Endpoint: /order/:orderId
* Authorization: token
* Response Body (Success):

      {
        "userId": "userId",
        "items": [
          {
            "productId": "productId_1",
            "quantity": 2
          },
          {
            "productId": "productId_2",
            "quantity": 1
          }
        ],
        "totalAmount": 137.97,
        "orderData": "2023-07-26T12:34:56.789Z"
      }
### Models
The API uses the following models to interact with the MongoDB database:

* UserModel: Represents the user schema and model.
* ProductModel: Represents the product schema and model.
* CategoryModel: Represents the category schema and model.
* CartModel: Represents the cart schema and model.
* OrderModel: Represents the order schema and model.
### Controllers
Controllers handle the business logic for each endpoint and interact with the database through the corresponding models. They are responsible for processing requests and sending responses.

* users.controller: Handles user registration and login functionality.
* product.controller: Manages product creation and retrieval.
* category.controller: Handles category creation and retrieval.
* cart.controller: Manages cart functionality, such as adding, updating, and deleting items.
* order.controller: Manages order placement and retrieval.
### Middleware
authenticate: Authentication middleware that checks the validity of the JWT token and ensures secure access to protected routes.

### Presentation Video

[Demo](https://drive.google.com/file/d/1T9q8EJG930RQVQL7G2PDmuaYdNuM654Y/view?usp=sharing)

### Deployed Link

[Live](https://e-commerce-82m5.onrender.com/)
