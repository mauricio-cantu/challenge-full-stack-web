const { CustomError } = require("../utils/CustomErrors");

const handleErrors = (error, request, response, next) => {
  if (error instanceof CustomError)
    return response.status(error.getStatusCode()).json({
      status: error.getStatusCode(),
      errorCode: error.getErrorCode(),
      errorDetail: error.getErrorDetail(),
    });

  return response.status(500).json({
    status: 500,
    message: error.message,
  });
};

module.exports = handleErrors;
