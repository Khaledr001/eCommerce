const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please enter your user id"],
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Please enter your product id"],
  },
  purchaseDate: {
    type: Date,
    required: [true, "Please enter your purchase date"],
  },
  quantity: {
    type: Number,
    required: [true, "How many products you want to purchase?"],
    default: 1,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
    enum: ["Pending", "Approved", "Shipping", "Delivered"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address to deliver this product"],
    trim: true,
    minlength: [3, "Minimun length should be 3 characters"],
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
