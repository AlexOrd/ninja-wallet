import { unexpectedError } from '../../../utils/auth/errors';
import { validate } from '../../../utils/validation/validate';

export const validateNewEmail = (req, res, next) => {
  try {
    const { err } = validate('email', 'auth')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
