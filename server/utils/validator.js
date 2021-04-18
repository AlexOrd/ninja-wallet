import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi);

import JoiObjectId from 'joi-objectid';
const ObjectId = JoiObjectId(Joi);

Joi.objectId = ObjectId;

export default {
  storeUser:
      Joi.object({
          first_name: Joi.string().required(),
          last_name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required()
      }),

  updateUser: Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
  }),

  login: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
  }),
  profile: Joi.object({
      firstName: Joi.string().alphanum().min(3).max(30).required(),
      lastName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
  }),
  userPhoto: Joi.object({
    fileString: Joi.string().dataUri().required(),
  }),

};