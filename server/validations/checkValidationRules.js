const { validationResult } = require("express-validator");
const { errorResponse } = require("../controllers/responseController");
const createError = require('http-errors');

const runValidation = async (req, res, next) => {
  try {
      const errors = validationResult(req);
      console.log(errors.array());
    if (!errors.isEmpty()) {
      errorResponse(res, {
        statusCode: 422,
        message: errors.array(),
      });
    }

    return next();
  } catch (error) {
    createError(500, "Something went wrong");
  }
};

module.exports = { runValidation };
