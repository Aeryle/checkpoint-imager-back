const errors = require("./i18n");
const { getLanguage } = require("./utils/i18n");

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
}

const bodyValidator = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);

    next();
  } catch (error) {
    const { type, path } = error.details[0];
    error.message = errors.validation[type](path)[getLanguage(req)];

    res.status(422);

    next(error);
  }
};

module.exports = {
  notFound,
  errorHandler,
  bodyValidator,
};
