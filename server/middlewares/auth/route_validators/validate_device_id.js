import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateDeviceID = (req, res, next) => {
  try {
    const { err } = validator('id')(req.body);
    if (err) return next(err);

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
