import Joi from '@hapi/joi';


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
    userId: Joi.string().required(),
    cardNumber: Joi.string().creditCard().required(),
    // cardNumber: Joi.string().min(16).max(16).required(),
    currency: Joi.string().required(),
    cardName: Joi.string().min(2).max(20).required(),
    balance: Joi.number().default(0).positive().required()
  })
};