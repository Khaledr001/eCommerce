const slugify = require('slugify');
const { successResponse, errorResponse } = require("./responseController");
const Catagory = require("../models/Catagory");


// add new catagory
const createCatagory = async (req, res, next) => {
  try {
      const name = req.body.name;
      const slug = slugify(name);

    const catagoryObj = {
        catagoryName: name,
        slug: slug,
    };

    const catagory = await Catagory(catagoryObj);
    await catagory.save();

    successResponse(res, {
      statusCode: 200,
      message: "User registered successfully",
      payload: { catagory },
    });
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

const getAllCatagory = async (req, res, next) => {
  try {
    const catagory = await Catagory.find({});
    if (!catagory) {
      errorResponse(res, {
        statusCode: 404,
        message: "No catagory found",
      });
    } else {
      successResponse(res, { 
        statusCode: 200,
        message: "Catagory found",
        payload: { catagory },
      });
    }
  } catch (error) {
    errorResponse(res, {
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

const getACatagory = async (req, res, next) => { 
    try {
        const slug = req.params.slug;
        const catagory = await Catagory.find({ slug });
        if (!catagory) {
            errorResponse(res, {
                statusCode: 404,
                message: "No catagory found",
            });
        } else {
            successResponse(res, {
                statusCode: 200,
                message: "Catagory found",
                payload: { catagory },
            });
        }
    } catch (error) {
        errorResponse(res, {
            statusCode: 500,
            message: "Something went wrong",
        });
    }
}

const updateCatagory = async (req, res, next) => { 
    try {
        const slug = req.params.slug;
        const name = req.body.name;
        const catagory = await Catagory.findOneAndUpdate(
          { slug },
          { $set: { catagoryName: name, slug: slugify(name) } },
          { new: true }
        );
        if (!catagory) {
            errorResponse(res, {
                statusCode: 404,
                message: "No catagory found",
            });
        } else {
            successResponse(res, {
                statusCode: 200,
                message: "Catagory updated",
                payload: { catagory },
            });
        }
    } catch (error) {
        errorResponse(res, {
            statusCode: 500,
            message: "Something went wrong",
        });
    }
}

const deleteCatagory = async (req, res, next) => {
    try {
        const slug = req.params.slug;
        const catagory = await Catagory.findOneAndDelete({ slug });
        if (!catagory) {
            errorResponse(res, {
                statusCode: 404,
                message: "No catagory found",
            });
        } else {
            successResponse(res, {
                statusCode: 200,
                message: "Catagory deleted",
                payload: { catagory },
            });
        }
    } catch (error) {
        errorResponse(res, {
            statusCode: 500,
            message: "Something went wrong",
        });
    }

}

module.exports = { createCatagory, getAllCatagory, getACatagory, updateCatagory, deleteCatagory };
