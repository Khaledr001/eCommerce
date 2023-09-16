const { body } = require("express-validator");

const validateAddProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name should be between 3 and 50 characters long"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Name should be between 3 and 200 characters long"),

  body("price")
    .notEmpty()
    .withMessage("Product price is required")
    .isFloat({ min: 0 })
    .withMessage("Product price should be a positive number"),

  body("quantity")
    .notEmpty()
    .withMessage("Product quantity is required")
    .isInt({ min: 0 })
    .withMessage("Product quantity should be a positive number"),

  body("catagory")
    .trim()
    .notEmpty()
    .withMessage("Product Catagory is required"),
];

module.exports = { validateAddProduct };
