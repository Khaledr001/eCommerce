const slugify = require("slugify");
const { successResponse, errorResponse } = require("./responseController");
const Product = require("../models/Product");
const Catagory = require("../models/Catagory");
const { defaultProductImagePath } = require("../secret");
const createError = require("http-errors");
const paginator = require("../service/pagination");

// add new Product
const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, quantity, catagory } = req.body;
    const slugProduct = slugify(name);
    const slugCatagory = slugify(catagory);
    const sold = req?.body?.sold ?? 0;
    const shippingCost = req?.body?.shippingCost ?? 0;

    const imageName = req?.file?.filename;
    console.log(imageName);
    let imagePath = "";
    if (imageName) {
      imagePath = `/public/images/products/${imageName}`;
    }

    console.log(catagory);
    const catagoryObj = await Catagory.findOne({ slug: slugCatagory });
    if (!catagoryObj) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Catagory not found",  
      });
    }
    // console.log(catagoryObj);
    const ProductObj = {
      name,
      slug: slugProduct,
      description,
      price: Number(price),
      quantity: Number(quantity),
      sold: Number(sold),
      shippingCost: Number(shippingCost),
      image: imagePath,
      categoryId: catagoryObj._id,
    };
    console.log(ProductObj);

    const product = await Product(ProductObj);
    await product.save();
    console.log(product);

    successResponse(res, {
      statusCode: 200,
      message: "Product Added successfully",
      payload: { Product },
    });
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong1",
    });
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const pageSize = req?.query?.pageSize ?? "20";
    const currentPage = req?.query?.currentPage ?? "1";
    const aggregator = paginator(currentPage, pageSize);
    const products = await Product.aggregate(aggregator);
    // const products = await Product.find({});
    console.log("Product");
    if (!products) {
      errorResponse(res, {
        statusCode: 404,
        message: "No Product found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Product found",
        payload: { products },
      });
    }
  } catch (error) {
    createError(500, "Something went wrong");
  }
};

const getAProduct = async (req, res, next) => {
  try {
    const productId = req?.params?.id ?? "";
    const product = await Product.findById(productId);
    if (!product) {
      errorResponse(res, {
        statusCode: 404,
        message: "No Product found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Product found",
        payload: { product },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req?.params?.id ?? "";
    const product = await Product.findByIdAndUpdate({ _id: productId }, req.body, {
      new: true,
    });
    if (!product) {
      errorResponse(res, {
        statusCode: 404,
        message: "No Product found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Product updated",
        payload: { product },
      });
    }
  } catch (error) {
    createError(500, "Something went wrong");
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req?.params?.id ?? "";
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      errorResponse(res, {
        statusCode: 404,
        message: "No Product found",
      });
    } else {
      successResponse(res, {
        statusCode: 200,
        message: "Product deleted",
        payload: { product },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getAProduct,
  updateProduct,
  deleteProduct,
};
