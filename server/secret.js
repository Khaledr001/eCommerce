require('dotenv').config();


const serverPort = process.env.SERVER_PORT || 6001;
const mongoDbLocalUrl = process.env.MONGODB_LOCAL_URL;
const defaultUserImagePath = './public/images/users';
const defaultProductImagePath = './public/images/products';
const fileSize = Number(process.env.FILE_SIZE) || 3145728;
const allowedFile = process.env.ALLOWED_FILE || ['jpg', 'png', 'jpeg'];
const jwtSecretKey = process.env.JWT_SECRETE_KEY; 
module.exports = {
  serverPort,
  mongoDbLocalUrl,
  defaultUserImagePath,
  defaultProductImagePath,
  fileSize,
  allowedFile,
  jwtSecretKey,
};  