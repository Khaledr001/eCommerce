const express = require("express");
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middlewares/auth");
const {
  createOrder,
  getAllOrder,
  getAOrder,
  getAllMyOrder,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/create/:id", isLoggedIn, createOrder);

orderRouter.get("/all", isLoggedIn, isAdmin, getAllOrder);
orderRouter.get("/user/all", isLoggedIn, getAllMyOrder);
orderRouter.get("/:id", isLoggedIn, getAOrder);

// orderRouter.put("/update/:id", isLoggedIn, updateAddress);

// orderRouter.delete("/delete/:id", isLoggedIn, deleteAddress);

module.exports = orderRouter;
