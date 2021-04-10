const { unexpectedError } = require('../../../utils/auth/errors');
const { validatorFactory } = require('../../../utils/auth/aux_functions/validator_factory');

exports.validateNewEmail = (req, res, next) => {
  try {
    const { err } = validatorFactory('email')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
