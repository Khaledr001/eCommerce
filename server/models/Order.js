const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
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
    quantity: {
      type: Number,
      required: [true, "How many products you want to purchase?"],
      default: 1,
    },
    totalPrice: {
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
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
