const users = require("../models/userModel");
const createError = require("http-errors");

const getUsers = (req, res) => {
  try {
    // console.log(req.body.id);
    res.status(200).json({
      message: "user profile returned",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
