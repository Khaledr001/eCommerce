const mongoose = require('mongoose');

const CatagorySchema = new mongoose.Schema(
    {
        catagoryName: {
            type: String,
            required: [true, "Catagory Name is required"],
            trim: true,
            unique: true,
            minlength: [3, "Catagory Name must be at least 3 characters long"],
        },
        slug: {
            type: String,
            required: [true, "slug is required"],
            lowercase: true,
            unique: true,
        }
    },
    {
        timestamps: true
    }
);

const Catagory = mongoose.model('Catagory', CatagorySchema);

module.exports = Catagory;