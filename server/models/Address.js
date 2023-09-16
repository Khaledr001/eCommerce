const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  district: {
    type: String,
    required: [true, "Please enter your district name"],
    trim: true,
    minlength: [3, "Minimun length should be 3 characters"],
    maxlength: [30, "Maximun length should be 30 characters"],
  },
  subDistrict: {
    type: String,
    required: [true, "Please enter your sub district name"],
    trim: true,
    minlength: [3, "Minimun length should be 3 characters"],
    maxlength: [30, "Maximun length should be 30 characters"],
  },
  postCode: {
    type: String,
    required: [true, "Please enter your postal code"],
    trim: true,
  },
  addressLine: {
    type: String,
    required: [true, "Please enter your district name"],
    trim: true,
    minlength: [3, "Minimun length should be 3 characters"],
  },
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please enter your user id"],
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
