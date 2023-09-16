const express = require("express");
const { successResponse, errorResponse } = require("./responseController");

const createError = require("http-errors");
const Address = require("../models/Address");

const addAddress = async (req, res, next) => {
    try {
        const { district, subDistrict, postCode, addressLine } = req.body;
        // console.log(req.user._id);
        const addressObj = {
          district,
          subDistrict,
          postCode,
          addressLine,
          userId: req.user._id,
        };
        console.log(addressObj);
        const address = await Address(addressObj);
        await address.save();

        successResponse(res, {
            statusCode: 200,
            message: "Address created successfully",
            payload: address
        });
    } catch (error) {
        createError(500, 'Error creating address');
    }
}

// Get all address of an user from the database
const getAllAddress = async (req, res, next) => { 
    try {
        const addresses = await Address.find({});
        if (!addresses) {
          errorResponse(res, {
            statusCode: 404,
            message: "No addresses found",
          });
        } else {
          successResponse(res, {
            statusCode: 200,
            message: "User found",
            payload: { addresses },
          });
        }
    } catch (error) {
        errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong",
        });
    }
}

// Update a address Information using addressId
const updateAddress = async (req, res, next) => { 
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!address) {
      errorResponse(res, {
        statusCode: 404,
        message: "Address not found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Address updated successfully",
        payload: { address },
      });
    }
  } catch (error) {
      errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong"
      });
  }
}

// Delet an address from the database
const deleteAddress = async (req, res, next) => { 
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      errorResponse(res, {
        statusCode: 404,
        message: "Address not found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Address deleted successfully",
        payload: { address },
      });
    }
  } catch (error) {
      errorResponse(res, {
          statusCode: 500,
          message: "Something went wrong"
      });
  }
}
module.exports = { addAddress, getAllAddress, updateAddress, deleteAddress };
