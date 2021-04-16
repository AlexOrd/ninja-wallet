import { unexpectedError } from '../../../utils/auth/errors';
import { validator } from './joiValidator';

export const validateAuthData = (req, res, next) => {
  try {
    console.log(req.body)
    const { err, joiError } = validator('authData')(req.body);
    if (err) return next(err);

    

    return next();
  } catch (error) {
    unexpectedError(error, next);
  }
};
