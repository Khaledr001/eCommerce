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

const catagoryRouter = express.Router();

catagoryRouter.post("/add", validateCatagory, runValidation, createCatagory);

catagoryRouter.get("/:slug", validateCatagory, runValidation, getACatagory);

catagoryRouter.get("/getall", getAllCatagory);

catagoryRouter.put("/update/:slug", updateCatagory);

catagoryRouter.delete("/delete/:slug", deleteCatagory);

module.exports = catagoryRouter;
