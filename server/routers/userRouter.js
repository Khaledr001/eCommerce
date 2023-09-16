const express = require("express");
const {
  userRegester,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { validateUserRegistration } = require("../validations/userValidation");
const { runValidation } = require("../validations/checkValidationRules");
const upload = require("../middlewares/uploadFile");

const userRouter = express.Router();

userRouter.post(
  "/register",
  upload.single("image"), 
  validateUserRegistration,
  runValidation,
  userRegester
);

userRouter.get("/allusers", getAllUser);

userRouter.put("/update/:id", updateUser);

userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;
