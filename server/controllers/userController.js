const express = require("express");
const bcrypt = require("bcrypt");
const { successResponse, errorResponse } = require("./responseController");
const User = require("../models/User");
const { defaultUserImagePath } = require("../secret");
const { createJsonToken } = require("../helper/jsonWebToken");
// const createError = requre("http-errors")

// New user registration
const userRegester = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const userExists = await User.exists(email);
    if (userExists) {
      throw createError(409, "User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const imageName = req?.file?.filename; 
    let imagePath = "";
    if (imageName) {
      imagePath = `${defaultUserImagePath}/${imageName}`;
    }
    const userObj = {
      name,
      email,
      phoneNumber,
      age: req?.body?.age,
      password: hashPassword,
      image: imagePath,
      role: req.body.role,
    };

    const user = await User(userObj);
    await user.save();

    successResponse(res, {
      statusCode: 200,
        message: "User registered successfully",
        payload: {userObj}
    });
  } catch (error) {
      errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong"
      });
  }
}

// Get all users from the database
const getAllUser = async (req, res, next) => { 
    try {
        const users = await User.find({});
        if (!users) {
            errorResponse(res, {
                statusCode: 404,
                message: "No users found"
            });
        }
        else {
            successResponse(res, {
                statusCode: 200,
                message: "User found",
                payload: { users }
            });
        }
    } catch (error) {
        errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong",
        });
    }
}

// Update a user Information using userId
const updateUser = async (req, res, next) => { 
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      errorResponse(res, {
        statusCode: 404,
        message: "User not found"
      });
    }
    else {
      successResponse(res, {
        statusCode: 200,
        message: "User updated successfully",
        payload: { user }
      });
    }
  } catch (error) {
      errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong"
      });
  }
}

// Delet an user from the database
const deleteUser = async (req, res, next) => { 
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      errorResponse(res, {
        statusCode: 404,
        message: "User not found"
      });
    }
    else {
      successResponse(res, {
        statusCode: 200,
        message: "User deleted successfully",
        payload: { user }
      });
    }
  } catch (error) {
      errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong"
      });
  }
}

module.exports = {
  userRegester,
  getAllUser,
  updateUser,
  deleteUser,
};
