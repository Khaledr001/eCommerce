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
catagoryRouter.get("/getall", getAllCatagory);

catagoryRouter.get("/:slug", validateCatagory, runValidation, getACatagory);


catagoryRouter.put("/update/:slug", updateCatagory);

catagoryRouter.delete("/delete/:slug", deleteCatagory);

module.exports = catagoryRouter;
 