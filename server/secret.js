require('dotenv').config();



const serverPort = process.env.SERVER_PORT || 6001;
const mongoDbLocalUrl = process.env.MONGODB_LOCAL_URL;
const defaultImagePath = './public/images/users/defaultImage.png';

module.exports = {serverPort, mongoDbLocalUrl, defaultImagePath};  