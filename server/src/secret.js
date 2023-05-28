require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDbAtlasUrl = process.env.MONGODB_ATlasUrl || 'mongodb://localhost:27017/ecommerceMernDb';

module.exports = { serverPort, mongoDbAtlasUrl };