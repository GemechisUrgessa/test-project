// Centralized Error Handling Middleware
const errorHandler = (error, req, res, next) => {
  // Log the error for debugging purposes
  console.error(error);
  let statusCode = 500;
  let message = "Internal Server Error";

  switch (error.name) {
    case "ValidationError":
      statusCode = 400;
      message = error.message;
      break;
    case "CastError":
      statusCode = 400;
      message = "Invalid ID format";
      break;
    case "NotFoundError":
      statusCode = 404;
      message = "Resource not found";
      break;
    case "ForbiddenError":
      statusCode = 403;
      message = "Access denied";
      break;
    case "MongoServerError":
      if (error.code === 11000) {
        statusCode = 409;
        message = "Resource already exists";
      }
      break;
    case "FieldError":
      statusCode = 400;
      message = "One or more required fields are missing";
      break;
    case "OneFieldRequiredError":
      statusCode = 400;
      message = "At least one field is required";
      break;
    default:
      break;
  }
  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
