import { unexpectedError } from '../../../utils/auth/errors';
import { validate } from '../../../utils/validation/validate';

export const validateAuthData = (req, res, next) => {
  try {
    const { err } = validate('authData', 'auth')(req.body);
    console.log('err', err)
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
