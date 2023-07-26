// importing cartmodel for making cart function
const { CartModel } = require("../models/cart.model");

// importing product model for findig price
const {ProductModel}=require("../models/product.model")

const addToCart = async (req, res) => {
  const { userId} = req.body;
  const {productId}=req.params
  try {
    
    // Fetch the product details using the productId
    const product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Get the price of the product
    const price = product.price;


    // Check if the product already exists in the cart
    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      // If cart doesn't exist, create a new cart and add the product
      cart = new CartModel({ userId, items: [{ productId, quantity:1,price }] });
    } else {
      // If cart exists, check if the product is already in the cart
      const allReadyPresentItem = cart.items.find(
        (item) => item.productId == productId
      );
      if (allReadyPresentItem) {
        // If the product exists in the cart, increase the quantity by 1
        allReadyPresentItem.quantity += 1;
      } else {
        // If the product doesn't exist in the cart, add a new cart item
        cart.items.push({ productId, quantity:1,price });
      }
    }

    // Save the cart to the database
    await cart.save();

    res.json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Getting error while adding to cart" });
  }
};

//  updating quantity for particular product by productid
const updateQuantity = async (req, res) => {
  const { userId, quantity } = req.body;
  const {productId}=req.params
  try {
      // to get the products price
      const product = await ProductModel.findById(productId);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Get the price of the product
      const price = product.price;
      const updatedPrice=quantity*price
  
    let cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart is not found" });
    }
    const updatedQuantity = cart.items.find(
      (item) => item.productId == productId
    );
    if (!updatedQuantity) {
      return res.status(404).json({ error: "Item not present  in the cart" });
    }
    
    updatedQuantity.quantity = quantity;
    updatedQuantity.price=updatedPrice
    await cart.save();
    res.json({ message: "Cart item updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Getting error while updating quantity" });
  }
};

// gettign all data from cart by userId
const getAllDataFromCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const data = await CartModel.find({ userId });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Getting error while fetching data from cart" });
  }
};

const deleteItem = async (req, res) => {
  const { userId } = req.body;
  const productId = req.params.productId;
  try {
    let cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart is not found" });
    }
   
     cart.items = cart.items.filter((ele) => {
      return ele.productId != productId;
    });


    await cart.save();
    res.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Getting error while fetching data from cart" });
  }
};

module.exports = {
  addToCart,
  updateQuantity,
  getAllDataFromCart,
  deleteItem,
};
