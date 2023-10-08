const express = require("express");
const {
  userRegester,
  getAllUser,
  updateUser,
  deleteUser,
  getAUser,
  getAUserByEmail,
} = require("../controllers/userController");
const { validateUserRegistration } = require("../validations/userValidation");
const { runValidation } = require("../validations/checkValidationRules");
const upload = require("../middlewares/uploadFile");
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.post(
  "/register",
  isLoggedOut,
  upload.single("image"), 
  validateUserRegistration,
  runValidation,
  userRegester
);

userRouter.get("/allusers", isLoggedIn, isAdmin, getAllUser);

userRouter.get("/", isLoggedIn, getAUserByEmail);

userRouter.get("/:id", isLoggedIn, getAUser);

userRouter.put("/update/:id", isLoggedIn, updateUser);

userRouter.delete("/delete/:id", isLoggedIn, isAdmin, deleteUser);

module.exports = userRouter;
