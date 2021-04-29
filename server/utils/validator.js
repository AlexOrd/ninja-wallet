import Joi from "@hapi/joi"
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

  login: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
  transaction: Joi.object({
    transactionType: Joi.string().alphanum().min(3).max(30).required(),
    transactionCategory: Joi.string().alphanum().min(3).max(30).required(),
    userId: Joi.objectId(),
    cardId: Joi.objectId().required(),
    sum: Joi.number().positive().required(),
    merchantName: Joi.string().alphanum().min(3).max(30),
  }),
  updateTransaction: Joi.object({
    transactionType: Joi.string().alphanum().min(3).max(30).required(),
    transactionCategory: Joi.string().alphanum().min(3).max(30).required(),
    merchantName: Joi.string().alphanum().min(3).max(30),
  }),
  updateUser: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
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
  
  updateCategory: Joi.object({
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
  
  card: Joi.object({
    transactionIds: Joi.array().items(Joi.objectId()),
    transactionId: Joi.objectId(),
    cardNumber: Joi.string().min(16).max(16).required(),
    currency: Joi.string().required(),
    cardName: Joi.string()
      .min(2)
      .message('card name must contain at least 2 letter')
      .max(30)
      .message('description can not be longer than 30 letters')
      .required(),
    balance: Joi.number().default(0).positive().required(),
  }),
  profile: Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
  }),
  userPhoto: Joi.object({
    fileString: Joi.string().dataUri().required(),
  }),
};
