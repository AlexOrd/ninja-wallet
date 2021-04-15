import Joi from '@hapi/joi';

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

  login:
    Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    }),

  card: Joi.object({
    userId: Joi.objectId().required(),
    transactionIds: Joi.array().items(Joi.objectId()),
    transactionId: Joi.objectId(),
    cardNumber: Joi.string().creditCard().required(),
    // cardNumber: Joi.string().min(16).max(16).required(),
    currency: Joi.string().required(),
    cardName: Joi
      .string()
      .min(2)
      .message('card name must contain at least 2 letter')
      .max(30)
      .message('description can not be longer than 30 letters')
      .required(),
    balance: Joi.number().default(0).positive().required()
  })
};