const { tokensNames } = require('../../../utils/auth/constants');
const { unexpectedError, authErrors } = require('../../../utils/auth/errors');
const { authVerifiers } = require('../../../utils/auth/aux_functions/verifiers');
const { verifyingAndDecodeJWT } = authVerifiers;
const { RESTORE } = tokensNames;

exports.verifyCredentials = (req, res, next) => {
  try {
    const { err: errVerifyResToken, tokenPayload } = verifyingAndDecodeJWT(
      req.body.confirmToken,
      RESTORE,
    );
    if(errVerifyResToken === authErrors.EXPIRED_TOKEN) {
      return next(authErrors.EXPIRED_RESTORE_PASSWORD_SESSION)
    }
    if (errVerifyResToken) return next(errVerifyResToken);
    
    req.tokenPayload = tokenPayload;
    return next();

  } catch (error) {
    return unexpectedError(error, next);
  }
};
