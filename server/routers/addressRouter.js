const express = require("express");
const { validateUserRegistration } = require("../validations/userValidation");
const { runValidation } = require("../validations/checkValidationRules");
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middlewares/auth");
const { addAddress, getAllAddress, updateAddress, deleteAddress } = require("../controllers/addressController");

const addressRouter = express.Router();

addressRouter.post(
  "/add",
  isLoggedIn,
  addAddress
);

addressRouter.get("/all", isLoggedIn, isAdmin, getAllAddress);

addressRouter.put("/update/:id", isLoggedIn, updateAddress);

addressRouter.delete("/delete/:id", isLoggedIn, deleteAddress);

module.exports = addressRouter;
