import { unexpectedError } from '../../../utils/auth/errors';
import { validate } from '../../../utils/validation/validate';

export const validateNewPassCreating = (req, res, next) => {
  try {
    const { err } = validate('newPasswordCreating', 'auth')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
