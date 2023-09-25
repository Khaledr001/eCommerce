// import express from 'express';
const express = require("express");
const fileRouter = express.Router();
const { uploadFile, upload } = require("../controllers/fileController.js");

fileRouter.get("/test", (req, res) => {
  res.json({
    message: "Hello file section!",
  });
});
fileRouter.post("/upload", upload.single("file"), uploadFile);


module.exports = fileRouter;
 