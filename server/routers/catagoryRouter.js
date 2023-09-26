const express = require("express");

const { runValidation } = require("../validations/checkValidationRules");
const { validateCatagory } = require("../validations/catagoryValidation");
const {
  createCatagory,
  getAllCatagory,
  getACatagory,
  updateCatagory,
  deleteCatagory,
} = require("../controllers/catagoryController");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");

const catagoryRouter = express.Router();

catagoryRouter.post("/add", isLoggedIn, isAdmin, validateCatagory, runValidation, createCatagory);

catagoryRouter.get("/getall", isLoggedIn, getAllCatagory);

catagoryRouter.get("/:slug", validateCatagory, runValidation, getACatagory);


catagoryRouter.put("/update/:slug", isLoggedIn, isAdmin, updateCatagory);

catagoryRouter.delete("/delete/:slug", isLoggedIn, isAdmin, deleteCatagory);

module.exports = catagoryRouter;
 