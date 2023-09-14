require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDbAtlasUrl = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/e-commerce';


const defaultImgePath = process.env.DEFAULT_IMAGE_PATH || './public/images/users/defaultImage.png';

module.exports = { serverPort, mongoDbAtlasUrl, defaultImgePath };