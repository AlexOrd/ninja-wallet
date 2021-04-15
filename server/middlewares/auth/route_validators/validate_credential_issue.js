import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateCredentialsIssue = (req, res, next) => {
  try {
    const { err: validateEmailError } = validator('email')(req.body);
    if (validateEmailError) return next(validateEmailError);
    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
