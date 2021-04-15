import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateNewPassCreating = (req, res, next) => {
  try {
    const { err } = validator('newPasswordCreating')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
