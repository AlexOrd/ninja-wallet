import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from '../../auth/route_validators/joiValidator';

export const validateNewEmail = (req, res, next) => {
  try {
    const { err } = validator('email')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
