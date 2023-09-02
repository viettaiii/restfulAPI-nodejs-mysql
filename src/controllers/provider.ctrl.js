const { StatusCodes } = require("http-status-codes");
const { createResponse } = require("../utils/createResponse");

const { Provider } = require("../database/models");
const getProviders = async (req, res) => {
  const providers = await Provider.findAll({});
  const response = createResponse({
    message: "get all providers successfully",
    status: StatusCodes.OK,
    data: providers,
  });
  res.status(response.status).json(response);
};

module.exports = { getProviders };
