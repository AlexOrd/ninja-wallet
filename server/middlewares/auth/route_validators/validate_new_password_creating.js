const { unexpectedError } = require('../../../utils/auth/errors');
const { validatorFactory } = require('../../../utils/auth/aux_functions/validator_factory');

exports.validateNewPassCreating = (req, res, next) => {
  try {
    const { err } = validatorFactory('newPasswordCreating')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
