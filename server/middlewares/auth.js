const createError = require("http-errors");
const { errorResponse } = require("../controllers/responseController");
const { jwtSecretKey } = require("../secret");
const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
  try {
    // looking for access token
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      throw createError(401, "Access token not found please log in");
    }
    // verifying token
    const decoded = jwt.verify(accessToken, jwtSecretKey);
    if (!decoded) {
      throw createError(401, "Invalid access token please login again");
    }
    req.user = decoded.payload;
    // console.log(decoded.payload);
    next();
  } catch (error) {
    return next(error);
  }
};

const isLoggedOut = async (req, res, next) => {
  try {
    // looking for access token
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
      throw createError(400, "User already logged in");
    }
    next();
  } catch (error) {
    return next(error);
  }
};


const isAdmin = async(req, res, next) => { 
  try {
    const user = req?.user;
    // console.log(user);
    if (user && user.role == 'admin') {
      next();
    }
    else {
      throw createError(403, "You are not admin to access this page");
    }
  } catch (error) {
    return next(error);
  }
}

module.exports = { isLoggedIn, isLoggedOut, isAdmin };
