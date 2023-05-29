const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImgePath } = require("../secret");

let validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: [31, "Max length of user name is 31 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowwecase: true,
    validate: [validateEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Enter minimim 6 length password"],
    set: (p) => bcrypt.hashSync(p, bcrypt.genSaltSync(10)),
  },
  image: {
    type: String,
    default: defaultImgePath,
    required: [true, 'user image is required'],

  },
  phone: {
    type: String,
    required: [true, 'user phone is required'],
    trim: true,
    
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },


}, { timestamps: true});


const User = model('users', userSchema);

module.exports = User;