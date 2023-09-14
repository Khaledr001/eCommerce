const User = require("../models/userModel");
const users = require("../models/userModel");
const createError = require("http-errors");

const getUsers = async(req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "user profile returned",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
