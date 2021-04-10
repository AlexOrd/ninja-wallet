const { tokensNames } = require('../../../utils/auth/constants');
const { authErrors, unexpectedError } = require('../../../utils/auth/errors');
const { setAuthHeaders } = require('../../../utils/auth/aux_functions/common');
const { getTokensFromReq } = require('../../../utils/auth/aux_functions/for_tokens');
const { updateTokens } = require('../../../utils/auth/aux_functions/update_tokens');
const { authVerifiers } = require('../../../utils/auth/aux_functions/verifiers');
const { EXPIRED_TOKEN } = authErrors;
const { verifyingAndDecodeJWT } = authVerifiers;
const { ACCESS } = tokensNames;

exports.checkAccessAndProvideUserID = async (req, res, next) => {
  try {
    const { err: parsingTokensErr, parsedTokens } = getTokensFromReq(req);
    if (parsingTokensErr) return next(parsingTokensErr);

    const { accessToken, refreshToken } = parsedTokens;

    const { err: errVerifyAccessToken, tokenPayload } = verifyingAndDecodeJWT(accessToken, ACCESS);
    if (errVerifyAccessToken && errVerifyAccessToken !== EXPIRED_TOKEN) {
      return next(errVerifyAccessToken);
    }

    if (!errVerifyAccessToken) {
      req.userID = tokenPayload.userID;
      req.deviceID = tokenPayload.deviceID;
      return next();
    }

    const isExpiredAccessToken = errVerifyAccessToken && errVerifyAccessToken === EXPIRED_TOKEN;
    if (isExpiredAccessToken) {
      const { err: errUpdatingTokens, newTokens, deviceID } = await updateTokens(
        tokenPayload.userID,
        refreshToken,
      );
      if (errUpdatingTokens) return next(errUpdatingTokens);

      const { newAccessToken, newRefreshToken } = newTokens;

      setAuthHeaders(newAccessToken, newRefreshToken, res);
      req.userID = tokenPayload.userID;
      req.deviceID = deviceID;

      return next();
    }
  } catch (error) {
    unexpectedError(error, next);
  }
};
