const express = require("express");
const { validateAddProduct } = require("../validations/productValidation");
const { runValidation } = require("../validations/checkValidationRules");
const {
  createProduct,
  getAllProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middlewares/uploadProductImage");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");

const productRouter = express.Router();

productRouter.post(
  "/add",
  isLoggedIn,
  isAdmin,
  upload.single("image"),
  validateAddProduct,
  runValidation,
  createProduct
);

productRouter.get("/getall", getAllProduct);
productRouter.get("/:id", getAProduct);
productRouter.put("/:id", isLoggedIn, isAdmin, updateProduct);
productRouter.delete("/:id", isLoggedIn, isAdmin, deleteProduct);

module.exports = productRouter;
