const express = require("express");

const { runValidation } = require("../validations/checkValidationRules");
const { validateCatagory } = require("../validations/catagoryValidation");

const catagoryRouter = express.Router();

catagoryRouter.post(
  "/register",
  validateCatagory,
  runValidation,
  userRegester
);

catagoryRouter.get("/allusers", getAllUser);

catagoryRouter.put("/update/:id", updateUser);

catagoryRouter.delete("/delete/:id", updateUser);

module.exports = catagoryRouter;
