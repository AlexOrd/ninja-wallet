import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateConfirmCode = (req, res, next) => {
  try {
    const { err } = validator('verifyingRestPassConfirmCode')(req.body);

    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
