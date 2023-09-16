const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");
const catagoryRouter = require("./routers/catagoryRouter");
const productRouter = require("./routers/productRouter");
const createError = require('http-errors');
const authRouter = require("./routers/authRouter");
const addressRouter = require("./routers/addressRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use("/seed/user", seedRouter);
app.use("/api/users", userRouter);
app.use("/api/user/address", addressRouter)
app.use("/api/catagory", catagoryRouter);
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);

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