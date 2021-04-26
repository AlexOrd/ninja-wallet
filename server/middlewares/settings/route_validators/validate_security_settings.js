import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateSecuritySettings = (req, res, next) => {
  try {
    const { err } = validator('customizeSecuritySettings')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
