
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

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
    transaction:
        Joi.object({
            transactionType: Joi.string().alphanum().min(3).max(30).required(),
            transactionCategory: Joi.string().alphanum().min(3).max(30).required(),
            userId: Joi.objectId().required(),
            accountId: Joi.objectId().required(),
            sum: Joi.number().positive().required(),
            merchantName: Joi.string().alphanum().min(3).max(30)
        }),
    updateTransaction:
        Joi.object({
            transactionType: Joi.string().alphanum().min(3).max(30).required(),
            transactionCategory: Joi.string().alphanum().min(3).max(30).required(),
            merchantName: Joi.string().alphanum().min(3).max(30)
        }),

};