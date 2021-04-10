const ResponseError = require("./response_error")

exports.authErrors = {
    EXPIRED_TOKEN: new ResponseError('EXPIRED_TOKEN', 403, 'access is expired'),
    EXPIRED_RESTORE_PASSWORD_SESSION: new ResponseError('EXPIRED_RESTORE_PASSWORD_SESSION', 403, 'session for restore password ended'),
    MISSING_TOKEN: new ResponseError('MISSING_TOKEN', 400, 'not passed access or refresh token'),
    INVALID_TOKEN: new ResponseError('INVALID_TOKEN', 403, 'invalid access token or refresh token'),
    LOGIN_ALREADY_USE: new ResponseError('LOGIN_ALREADY_USE', 406, 'this login has already use'),
    INCORRECT_AUTH_DATA: new ResponseError('INCORRECT_AUTH_DATA', 403, 'incorrect login or password'),
    INCORRECT_OLD_PASSWORD: new ResponseError('INCORRECT_OLD_PASSWORD', 403, 'incorrect old password'),
    MAIL_PROVIDER_ERROR: new ResponseError('MAIL_PROVIDER_ERROR', 500, 'problem with mail provider'),
    USER_NOT_FOUND: new ResponseError('USER_NOT_FOUND', 404, 'user not found by passed auth data'),
    INCORRECT_CONFIRMATION_CODE: new ResponseError('INCORRECT_CONFIRMATION_CODE', 403, 'confirmation code is incorrect'),
    EXPIRED_CONFIRMATION_CODE: new ResponseError('EXPIRED_CONFIRMATION_CODE', 403, 'the code for verification was expired'),
    INVALID_DATA: new ResponseError('INVALID_DATA', 403, 'passed data is invalid for this request'),
    ACCESS_DENIED: new ResponseError('ACCESS_DENIED', 403, 'access denied'),
}

exports.unexpectedError = (error, next) => {
    console.error(error)
    const responseError = new Error('UNEXPECTED_SERVER_ERROR', 500, 'unexpected server error')
    return next(responseError)
}

