import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi)

export default {
    auth: {
        email: Joi.object().keys({
            email: Joi.string().email({tlds: {allow: false}}).required()
        }),

        confirmCode: Joi.object().keys({
            confirmCode: Joi.string().length(6).pattern(/^[0-9]*$/).required()
        }),

        id: Joi.object().keys({
            id: Joi.objectId().required()
        }),

        authData: Joi.object().keys({
            email: Joi.string().email({tlds: {allow: false}}),
            password: Joi.string().min(6).max(25),
            deviceType: Joi.string().valid('pc', 'mob')
        }).and('email', 'password', 'deviceType'),

        changingPassword: Joi.object().keys({
            oldPassword: Joi.string(),
            newPassword: Joi.string().min(6).max(25),
            confirmPassword: Joi.string().valid(Joi.ref('newPassword'))
        }).and('oldPassword', 'newPassword', 'confirmPassword'),

        verifyingRestPassConfirmCode: Joi.object().keys({
            confirmToken: Joi.string(),
            confirmCode: Joi.string().length(6).pattern(/^[0-9]*$/)
        }).and('confirmToken', 'confirmCode'),

        newPasswordCreating: Joi.object().keys({
            confirmToken: Joi.string(),
            newPassword: Joi.string().min(6).max(25),
            confirmPassword: Joi.string().valid(Joi.ref('newPassword')),
            deviceType: Joi.string().valid('pc', 'mob')
        }).and('confirmToken', 'newPassword', 'confirmPassword', 'deviceType'),
    },
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
        })

};