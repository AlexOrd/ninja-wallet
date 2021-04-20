import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateSignOut = (req, res, next) => {
  try {
    const { err } = validator('signOut')(req.query);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
