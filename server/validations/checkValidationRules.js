const { validationResult } = require("express-validator");
const { errorResponse } = require("../controllers/responseController");

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
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong1",
    });
  }
};

module.exports = { runValidation };
