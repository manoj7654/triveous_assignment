// importing mongoose for creating cartSchema and model
const mongoose = require('mongoose');


// cart schema
const cartSchema = mongoose.Schema({
  userId: {
    type: "ObjectId",
    ref: 'users',
    required: true,
  },
  items: [
    {
        productId: {
            type: "ObjectId",
            ref: 'products',
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          }
    }
  ],
});

// cart model
const CartModel = mongoose.model('Cart', cartSchema);

// exporting cart 
module.exports = {CartModel};