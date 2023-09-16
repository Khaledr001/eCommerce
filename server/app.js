const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");
const catagoryRouter = require("./routers/catagoryRouter");
const productRouter = require("./routers/productRouter");
const createError = require('http-errors');

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/seed/user", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/catagory", catagoryRouter);
app.use("/api/product", productRouter);


app.use((req, res, next) => {
    next(createError(404, "route not found"));
});

app.use((err, req, res, next) => { 
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    })
});

module.exports = app;