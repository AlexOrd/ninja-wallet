const ResponseError = require('./response_error');

const notFound = (req, res, next) => {
  return next(new ResponseError('NOT_FOUND', 404, 'request resource not found'));
};

module.exports = notFound;
