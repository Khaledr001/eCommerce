const mongoose = require("mongoose");
let { defaultProductImagePath } = require("../secret");
defaultProductImagePath = defaultProductImagePath + "/default.png";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Minimun length should be 3 characters"],
      maxlength: [150, "Maximun length should be 50 characters"],
    },
    slug: {
      type: String,
      required: [true, "slug is required"],
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [10, "Minimun length should be 10 characters"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Price cannot be negative",
      },
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      trim: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Quantity cannot be negative",
      },
    },
    sold: {
      type: Number,
      required: [true, "Quantity is required"],
      trim: true,
      default: 0,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Sold Quantity cannot be negative",
      },
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: [true, "Please provide a image"],
      default: defaultProductImagePath,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please provide a category"],
    },
  },

  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;