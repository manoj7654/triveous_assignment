// importing order model for creating order function
const { OrderModel } = require("../models/order.model");

// importing cart model for checking if cart is present or not
const { CartModel } = require("../models/cart.model");

// order
const order = async (req, res) => {
  const { productId,userId } = req.body;

  try {
    // checking cart is present or not
    let cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart is not found" });
    }

    // finding total amount of items
    let totalAmount = 0;
    for (const item of cart.items) {
      if (!item.price || isNaN(item.price)) {
        // checking here if the product price is missing or not a number
        return res
          .status(400)
          .json({ message: "Invalid price for a product in the cart" });
      }
      totalAmount += item.quantity * item.price;
    }
    // creating new order
    const newOrder = new OrderModel({ userId, items: cart.items, totalAmount });
    await newOrder.save();

    // after successfull order items should be removed from cart

    cart.items = cart.items.filter((ele) => {
      return ele.productId != productId;
    });

    await cart.save();
    res.status(201).json({ message: "Order plcaced successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Getting error while ordering something" });
  }
};

// exporting
module.exports = {
  order,
};
