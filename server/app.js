const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/seed/user", seedRouter);
app.use("/api/users", userRouter);

module.exports = app;
