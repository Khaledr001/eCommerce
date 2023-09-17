const express = require("express");
const { successResponse, errorResponse } = require("./responseController");
const createError = require("http-errors");
const Order = require("../models/Order");
const Product = require("../models/Product");
const paginator = require("../service/pagination");
const mongoose = require("mongoose");

const createOrder = async (req, res, next) => {
  try {
    let { quantity, address } = req.body;
    quantity = Number(quantity);
    const productId = req.params.id;
    const product = await Product.findById(productId);
    console.log(product);
    if (!product) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Product not found",
      });
    }
    if (product.quantity < quantity) {
      return errorResponse(res, {
        statusCode: 400,
        message: "Not enough product in stock",
      });
    }

    const totalPrice = quantity * product.price + product.shippingCost;

    const newSold = product.sold + quantity;
    const newQuantity = product.quantity - quantity;

    const orderObj = {
      userId: req.user._id,
      productId,
      quantity,
      totalPrice,
      status: "Pending",
      address,
    };
    const order = await Order(orderObj);
    await order.save();

    await Product.findByIdAndUpdate(
      productId,
      {
        sold: newSold,
        quantity: newQuantity,
      },
      {
        new: true,
      }
    );

    successResponse(res, {
      statusCode: 200,
      message:
        "Congratulations!!! your order has been successfully added to your account",
      payload: order,
    });
  } catch (error) {
    createError(500, "Error creating Order: " + error.message);
  }
};

// Get all Order from the database
const getAllOrder = async (req, res, next) => {
  try {
    const pageSize = req?.query?.pageSize ?? "10";
    const currentPage = req?.query?.currentPage ?? "1";
    const aggregator = paginator(currentPage, pageSize);
    const orders = await Order.aggregate(aggregator);
    if (!orders) {
      errorResponse(res, {
        statusCode: 404,
        message: "No order found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Orser found",
        payload: { orders },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

// get a order of an user
const getAOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      errorResponse(res, {
        statusCode: 404,
        message: "Order doesn't found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Order found",
        payload: { order },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

//Get all order of a user
const getAllMyOrder = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // pageination and find the order of the user
    const pageSize = req?.query?.pageSize ?? "10";
    const currentPage = req?.query?.currentPage ?? "1";

    const aggregator = [];
    aggregator.push({
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
      },
    });
    aggregator.push({
      $skip: (currentPage - 1) * pageSize,
    });
    aggregator.push({
      $limit: pageSize * 1,
    });

    const orders = await Order.aggregate(aggregator);

    // const orders = await Order.find({ userId });
    if (!orders) {
      errorResponse(res, {
        statusCode: 404,
        message: "Order doesn't found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Orders found",
        payload: { orders },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

module.exports = { createOrder, getAllOrder, getAOrder, getAllMyOrder };
