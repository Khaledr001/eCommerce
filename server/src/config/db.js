const mongoose = require("mongoose");
const { mongoDbAtlasUrl } = require("../secret");

const connectDb = async (options = {}) => {
  try {
    await mongoose.connect(mongoDbAtlasUrl, options);
    console.log("MongoDb connection established successfully");

    mongoose.connection.on("error", (err) => {
      console.error("DB connection error: ", err);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err.toString());
  }
};

module.exports = connectDb;
