/* eslint-disable curly */
/* eslint-disable newline-before-return */
import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi);
import { createRespErr } from './error_handling/create_resp_err';

const validationSchemas = {
  auth: {
    email: Joi.object().keys({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    }),

    confirmCode: Joi.object().keys({
      confirmCode: Joi.string()
        .length(6)
        .pattern(/^[0-9]*$/)
        .required(),
    }),

    id: Joi.object().keys({
      id: Joi.objectId().required(),
    }),

    authData: Joi.object()
      .keys({
        email: Joi.string().email({ tlds: { allow: false } }),
        password: Joi.string().min(6).max(25),
        deviceType: Joi.string().valid('pc', 'mob'),
      })
      .and('email', 'password', 'deviceType'),

    changingPassword: Joi.object()
      .keys({
        oldPassword: Joi.string(),
        newPassword: Joi.string().min(6).max(25),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')),
      })
      .and('oldPassword', 'newPassword', 'confirmPassword'),

    verifyingRestPassConfirmCode: Joi.object()
      .keys({
        confirmToken: Joi.string(),
        confirmCode: Joi.string()
          .length(6)
          .pattern(/^[0-9]*$/),
      })
      .and('confirmToken', 'confirmCode'),

    newPasswordCreating: Joi.object()
      .keys({
        confirmToken: Joi.string(),
        newPassword: Joi.string().min(6).max(25),
        confirmPassword: Joi.string().valid(Joi.ref('newPassword')),
        deviceType: Joi.string().valid('pc', 'mob'),
      })
      .and('confirmToken', 'newPassword', 'confirmPassword', 'deviceType'),
  },
  storeUser: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),

  updateUser: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),

  login: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};



const detectErrorType = (joiError) => {
  const getErrType = (err) => err && err.details[0].type;
  const getErrMessage = (err) => err && err.details[0].message;

  if (getErrType(joiError) === 'any.required' || getErrType(joiError) === 'object.and') {
    const errMessage = `passed object DOESN'T contain required field(s), ${getErrMessage(joiError)}`;
    return { err: new ResponseError('MISSING_REQUIRED_FIELD', 400, errMessage), joiError };
  }

  if (getErrType(joiError) === 'object.unknown') {
    const errMessage = `passed object CONTAIN excess field(s), ${getErrMessage(joiError)}`;
    return { err: createRespErr('EXCESS_FIELD', 400, errMessage), joiError };
  }

  const errMessage = `passed data is invalid, ${getErrMessage(joiError)}`;
  return { err: createRespErr('INVALID_DATA', 400, errMessage), joiError };
};



export const validate = (schemaName, subObject) => {
  return (data) => {
    if (subObject) {
      const { error } = validationSchemas[subObject][schemaName].validate(data);
      if (error) return detectErrorType(error);

      return { err: null };
    }

    const { error } = validationSchemas[schemaName].validate(data);
    if (error) return detectErrorType(error);

    return { err: null };
  };
};

// validate('login', req.body)

export default validationSchemas;
