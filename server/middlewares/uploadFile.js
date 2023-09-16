const multer = require("multer");
const { allowedFile, fileSize, defaultUserImagePath } = require("../secret");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, defaultUserImagePath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});
// console.log(req.file.destination);

const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname);
  if (!allowedFile.includes(extname.substring(1))) {
    return cb(new Error("File type is not allowed!"), false);
  }
  return cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: fileSize },
  fileFilter,
});

module.exports = upload;
