import Joi from '@hapi/joi';
import JoiObjectId from 'joi-objectid';
Joi.objectId = JoiObjectId(Joi);

export const auth = {
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
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().min(6).max(25).required(),
    })
    .and('email', 'password'),

  changingPassword: Joi.object()
    .keys({
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().min(6).max(25).required(),
      confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required(),
    })
    .and('oldPassword', 'newPassword', 'confirmPassword'),

  verifyingRestPassConfirmCode: Joi.object()
    .keys({
      confirmToken: Joi.string().required(),
      confirmCode: Joi.string()
        .length(6)
        .pattern(/^[0-9]*$/)
        .required(),
    })
    .and('confirmToken', 'confirmCode'),

  newPasswordCreating: Joi.object()
    .keys({
      confirmToken: Joi.string().required(),
      newPassword: Joi.string().min(6).max(25).required(),
      confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required(),
    })
    .and('confirmToken', 'newPassword', 'confirmPassword'),
};
