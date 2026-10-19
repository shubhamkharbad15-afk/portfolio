// Centralized Error Handling Middleware

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: `Not Found - Endpoint '${req.originalUrl}' does not exist on this server`,
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.stack || err.message}`);

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      details: messages,
    });
  }

  // Handle CastError (invalid ObjectId)
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: `Resource not found with id: ${err.value}`,
    });
  }

  // Handle duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: "Duplicate field value entered",
    });
  }

  // Default internal server error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
