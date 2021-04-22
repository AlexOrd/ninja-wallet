import { createRespErr } from '../error_handling/create_resp_err'

export const authErrors = {
    EXPIRED_TOKEN: createRespErr('EXPIRED_TOKEN', 403, 'access is expired'),
    EXPIRED_RESTORE_PASSWORD_SESSION: createRespErr('EXPIRED_RESTORE_PASSWORD_SESSION', 403, 'session for restore password ended'),
    MISSING_TOKEN: createRespErr('MISSING_TOKEN', 400, 'not passed access or refresh token'),
    INVALID_TOKEN: createRespErr('INVALID_TOKEN', 403, 'invalid access token or refresh token'),
    LOGIN_ALREADY_USE: createRespErr('LOGIN_ALREADY_USE', 406, 'this login has already used'),
    INCORRECT_AUTH_DATA: createRespErr('INCORRECT_AUTH_DATA', 403, 'incorrect login or password'),
    INCORRECT_OLD_PASSWORD: createRespErr('INCORRECT_OLD_PASSWORD', 403, 'incorrect old password'),
    MAIL_PROVIDER_ERROR: createRespErr('MAIL_PROVIDER_ERROR', 500, 'problem with mail provider'),
    USER_NOT_FOUND: createRespErr('USER_NOT_FOUND', 404, 'user not found by passed auth data'),
    INCORRECT_CONFIRMATION_CODE: createRespErr('INCORRECT_CONFIRMATION_CODE', 403, 'confirmation code is incorrect'),
    EXPIRED_CONFIRMATION_CODE: createRespErr('EXPIRED_CONFIRMATION_CODE', 403, 'the code for verification was expired'),
    INVALID_DATA: createRespErr('INVALID_DATA', 403, 'passed data is invalid for this request'),
    ACCESS_DENIED: createRespErr('ACCESS_DENIED', 403, 'access denied'),
    USER_BY_EMAIL_NOT_FOUND: createRespErr('USER_BY_EMAIL_NOT_FOUND', 403, 'user didn`t find by passed email')
}

export const unexpectedError = (error, next) => {
    console.error(error)
    const responseError = new Error('UNEXPECTED_SERVER_ERROR', 500, 'unexpected server error')
    return next(responseError)
}

