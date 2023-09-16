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

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.single("image"),
  validateAddProduct,
  runValidation,
  createProduct
);

productRouter.get("/getall", getAllProduct);
productRouter.get("/:id", getAProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
