const ResponseError = require('../response_error');
import validationSchemas from '../../validator';
const { authErrors } = require('../errors');

console.log('validationSchemas', validationSchemas)

exports.validatorFactory = function (schemaName) {
  return function (...authData) {
    const { error } = validationSchemas.auth[schemaName].validate(...authData);
    if (error) return getErrorResponse(error);

    return { err: null };
  };

  function getErrorResponse(error) {
    const getErrType = (err) => err && err.details[0].type;
    const getErrMessage = (err) => err && err.details[0].message;

    if (getErrType(error) === 'any.required' || getErrType(error) === 'object.and') {
      const errMessage = `passed object DOESN'T contain required field(s), ${getErrMessage(error)}`;
      return { err: new ResponseError('LACK_NEEDED_FIELD', 403, errMessage) };
    }

    if (getErrType(error) === 'object.unknown') {
      const errMessage = `passed object CONTAIN excess field(s), ${getErrMessage(error)}`;
      return { err: new ResponseError('EXCESS_FIELD', 403, errMessage) };
    }

    return { err: authErrors.INVALID_DATA };
  }
};
