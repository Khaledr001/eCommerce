const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require('express-rate-limit');
const userRouter = require("./routers/userRouter");

const app = express();


const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from ints IP. Please try again later",
});


app.use(rateLimiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);

app.use('/api/users', userRouter);

app.use((req, res, next) => {
  //   res.status(404).json({ message: "Route not found" });

  next(createError(404, "Route not found"));
});

// handle all errors
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
