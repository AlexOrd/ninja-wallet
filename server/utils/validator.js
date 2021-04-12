import Joi from '@hapi/joi';

import JoiObjectId from 'joi-objectid';
const ObjectId = JoiObjectId(Joi);

Joi.objectId = ObjectId;

export default {
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

  category: Joi.object({
    userId: Joi.objectId().required(),
    name: Joi.string()
      .min(1)
      .message('name must contain at least 1 letter')
      .max(30)
      .message('name can\'t be longer than 30 letters')
      .required(),
    description: Joi.string()
      .min(1)
      .message('description must contain at least 1 letter')
      .max(100)
      .message('description can\'t be longer than 100 letters'),
    color: Joi.string()
      .regex(/^#[A-Fa-f0-9]{5}/)
      .message('color shoul be provided as a hex (fro example #000000)'), // hex
  }),
};
