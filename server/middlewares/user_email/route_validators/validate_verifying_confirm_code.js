import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from '../../auth/route_validators/joiValidator';

export const validateConfirmCode = (req, res, next) => {
  try {
    const { err } = validator('confirmCode')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
