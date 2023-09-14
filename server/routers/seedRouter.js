const express = require("express");
const { seedUser } = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/add", seedUser);

module.exports = seedRouter;
