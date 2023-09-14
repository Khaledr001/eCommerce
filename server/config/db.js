const mongoose = require('mongoose');
const { mongoDbLocalUrl } = require('../secret');


const connectDb = async() => {
    try {
        await mongoose.connect(mongoDbLocalUrl);
        console.log('Connected to MongoDB');
        mongoose.connection.on('error', (err) => {
            console.err("DB connection error", err);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB", error.toString());
    }
}

module.exports = connectDb; 