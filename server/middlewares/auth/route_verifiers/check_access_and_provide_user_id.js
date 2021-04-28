import { tokensNames } from '../../../utils/auth/constants';
import { authErrors, unexpectedError } from '../../../utils/auth/errors';
import { setAuthHeaders } from '../../../utils/auth/aux_functions/common';
import { getTokensFromReq } from '../../../utils/auth/aux_functions/for_tokens';
import { updateTokens } from '../../../utils/auth/aux_functions/update_tokens';
import { authVerifiers } from '../../../utils/auth/aux_functions/verifiers';
import { findUserById, getDeviceByID } from '../../../utils/auth/aux_functions/selectors';
import { createRespErr } from '../../../utils/error_handling/create_resp_err';

const { EXPIRED_TOKEN } = authErrors;
const { verifyingAndDecodeJWT } = authVerifiers;
const { ACCESS } = tokensNames;

export const checkAccessAndProvideUserID = async (req, res, next) => {
  try {
    const { err: parsingTokensErr, parsedTokens } = getTokensFromReq(req);
    if (parsingTokensErr) return next(parsingTokensErr);


    const { err: errVerifyAccessToken, tokenPayload: accessTokenPayload } = verifyingAndDecodeJWT(
      parsedTokens.accessToken,
      ACCESS
    );
    if (errVerifyAccessToken && errVerifyAccessToken !== EXPIRED_TOKEN) {
      return next(errVerifyAccessToken);
    }

    const { userID, deviceID } = accessTokenPayload;
    const { err, user } = await findUserById(userID);
    if (err) return next(createRespErr(authErrors.SIGN_OUT_FROM_ANOTHER_DEVICE));
    
    const { err: isExitedFromAnotherDevice, deviceObject } = getDeviceByID(user, deviceID);
    if (isExitedFromAnotherDevice) return next(isExitedFromAnotherDevice);

    if (!errVerifyAccessToken) {
      req.userID = userID;
      req.deviceID = deviceID;
      return next();
    }

    const isExpiredAccessToken = errVerifyAccessToken === EXPIRED_TOKEN;
    if (isExpiredAccessToken) {
      const { err: errUpdatingTokens, newTokens } = await updateTokens(
        accessTokenPayload,
        parsedTokens.refreshToken,
        user,
        deviceObject
      );
      if (errUpdatingTokens) return next(errUpdatingTokens);

      setAuthHeaders(newTokens.newAccessToken, newTokens.newRefreshToken, res);

      req.userID = accessTokenPayload.userID;
      req.deviceID = deviceID;

      return next();
    }
  } catch (error) {
    unexpectedError(error, next);
  }
};
