const express = require("express");
const bcrypt = require("bcrypt");
const { successResponse, errorResponse } = require("./responseController");
const User = require("../models/User");
const { createJsonWebToken } = require("../helper/jsonWebToken");
const createError = require("http-errors");

// LogIn a user
const handleLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // user exixtence is required
    const user = await User.findOne({ email }); 
    if (!user) {
      return errorResponse(res, { 
        statusCode: 404,
        message:
          "User does not exist with this email address. Please register fist",
      });
    } 

    // Compare the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) { 
      return errorResponse(res, {
        statusCode: 401,
        message: "User email or password does not match",
      });
    }
    // is User Banned?
    if (user.isBanned) {
      return errorResponse(res, {
        statusCode: 403,
        message: "You are banned please contact the administrator",
      });
    }
    // Create token and save in http-cookie
    const accessToken = createJsonWebToken(user, "2d");
    // res.cookie("accessToken", accessToken, {
    //   maxAge: 2 * 24 * 60 * 60 * 1000,
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    // });
    // console.log(accessToken);
    req.user = user;

    
    // const accessToke = req.cookies.accessToken;
    console.log("Login successful");
    // res.status(200).json(user);
    // Login user successfully 
    successResponse(res, {
      statusCode: 200,
      message: "Login successful",
      payload: {
        accessToken,
      },
    }); 
  } catch (error) { 
    createError(500, "Something went wrong");
  }
};

const handleLogOut = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");

    // Login user successfully
    successResponse(res, {
      statusCode: 200,
      message: "Logout successful",
      payload: {},
    });
  } catch (error) {
    createError(500, "Something went wrong");
  }
};

module.exports = { handleLogin, handleLogOut };
