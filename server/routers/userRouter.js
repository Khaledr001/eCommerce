const express = require("express");
const {
  userRegester,
  getAllUser,
  updateUser,
} = require("../controllers/userController");
const { validateUserRegistration } = require("../validations/userValidation");
const { runValidation } = require("../validations/checkValidationRules");

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateUserRegistration,
  runValidation,
  userRegester
);

userRouter.get("/allusers", getAllUser);

userRouter.put("/update/:id", updateUser);

userRouter.delete("/delete/:id", updateUser);

module.exports = userRouter;
