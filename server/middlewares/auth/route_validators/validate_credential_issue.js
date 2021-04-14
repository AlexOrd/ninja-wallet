import { unexpectedError } from '../../../utils/auth/errors';
import { validate } from '../../../utils/validation/validate';

export const validateCredentialsIssue = (req, res, next) => {
  try {
    const { err: validateEmailError } = validate('email', 'auth')(req.body);
    if (validateEmailError) return next(validateEmailError);
    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
