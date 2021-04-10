const { unexpectedError } = require('../../../utils/auth/errors');
const { validatorFactory } = require('../../../utils/auth/aux_functions/validator_factory');

exports.validateCredentialsIssue = (req, res, next) => {
  try {
    const { err: validateEmailError } = validatorFactory('email')(req.body);
    if (validateEmailError) return next(validateEmailError);
    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
