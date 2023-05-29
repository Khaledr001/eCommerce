
const User = require("../models/userModel")
const data = require("../data");

const seedUser = async (req, res, next) => {
    try {
        // deleting all existing USERS
        await User.deleteMany({});

        // creating new USERS
        const newUsers = await User.insertMany(data.users);

        // successfull response
        return res.status(201).json(newUsers);
    }
    catch(error) {
        next(error);
    }
}

module.exports = {seedUser};