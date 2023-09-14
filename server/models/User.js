const mongoose = require('mongoose');

const validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: [3,"Minimun length should be 3 characters"],
            maxlength: [31, "Maximun length should be 31 characters"]
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            validate: [validateEmail, 'Please enter a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: [6, 'Please enter minumum 6 length password']
        },
        phoneNo: {
            type: String,
            required: [true, 'Please enter your phone number'],
            trim: true,
        },
        image: {
            type: String,
            trim: true
        },
        isBaned: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            enum: ['admin', 'customer'],
            default: 'customer'
        }
    }
);