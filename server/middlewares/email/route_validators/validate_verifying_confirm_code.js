const { unexpectedError } = require('../../../utils/auth/errors');
const { validatorFactory } = require('../../../utils/auth/aux_functions/validator_factory');

exports.validateConfirmCode = (req, res, next) => {
  try {
    const { err } = validatorFactory('confirmCode')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
