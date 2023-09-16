const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../secret");

const createJsonWebToken = (payload, expiresIn) => {
  try {
    const token = jwt.sign(
      {
        payload,
      },
      jwtSecretKey,
      { 
        expiresIn: expiresIn,
      }
    );
    return token;
  } catch (error) {
    console.log("Failed to create JWT token");
    throw new Error(error);
  }
};

module.exports = { createJsonWebToken };
