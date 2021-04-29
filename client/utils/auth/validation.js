import Joi from '@hapi/joi';

export const authValidators = {
  authData: ({ email, password }) => {
    const emailSchema = Joi.string().email({ tlds: false }).required().messages({
      'string.email': '"email" must be valid email address',
      'string.empty': '"email" is not allowed to be empty',
      'any.required': '"email" is required',
    });

    const passwordSchema = Joi.string().min(8).max(25).required().messages({
      'string.min': '"password" length must be at least 8 characters long',
      'string.empty': '"password" is not allowed to be empty',
      'any.required': '"password" is required',
    });

    const errors = {
      email: emailSchema.validate(email).error?.message,
      password: passwordSchema.validate(password).error?.message,
    };

    const isErrors = errors.email || errors.password;
    return isErrors ? errors : {};
  },

  changePassword: (values) => {
    const schema = Joi.object().keys({
      oldPassword: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required',
      }),
      newPassword: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required',
      }),
      confirmPassword: Joi.string().valid(Joi.ref('newPassword')).messages({
        'any.only': 'Passwords must be equal!',
      }),
    });

    const { error } = schema.validate(values);
    const errHappenedInField = error && error.details[0].path[0];
    if (errHappenedInField === 'oldPassword') {
      return { oldPassword: error.message };
    }

    if (errHappenedInField === 'newPassword') {
      return { newPassword: error.message };
    }

    if (errHappenedInField === 'confirmPassword') {
      return { confirmPassword: error.message };
    }

    return {};
  },

  newPassword: (values) => {
    const schema = Joi.object().keys({
      newPassword: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 8 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required',
      }),
      confirmationPassword: Joi.string().valid(Joi.ref('newPassword')).messages({
        'any.only': 'Passwords must be equal!',
      }),
    });

    const { error } = schema.validate(values);

    if (error && error.details[0].path[0] === 'newPassword') {
      return { newPassword: error.message };
    }

    if (error && error.details[0].path[0] === 'confirmationPassword') {
      return { confirmationPassword: error.message };
    }

    return {};
  },

  verificationCode: ({ verifyCode }) => {
    const schema = Joi.string().min(6).max(6).required().messages({
      'string.min': '"verification code" length must be at least 6 characters long',
      'string.max': '"verification code" length must be less than 6 characters long',
      'string.empty': '"verification code" is not allowed to be empty',
      'any.required': '"verification code" is required',
    });

    const { error } = schema.validate(verifyCode);
    const errors = {};
    if (error) {
      errors.verifyCode = error.message;
    }

    return errors.verifyCode ? errors : {};
  },

  email: (values) => {
    const schema = Joi.object().keys({
      email: Joi.string().email({ tlds: false }).required().messages({
        'string.email': '"email" must be valid email address!',
        'string.empty': '"email" is not allowed to be empty',
        'any.required': '"email" is required',
      }),
    });

    const { error } = schema.validate(values);
    const errors = {};
    if (error) {
      errors.email = error.message;
    }

    return errors.email ? errors : {};
  },
};
