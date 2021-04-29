import { authVerifiers } from './verifiers';
import { createJWToken } from './for_tokens';
import { tokensNames } from '../constants';
import { generateRandomString } from './common';
import { authErrors } from '../errors';




export const updateTokens = async (accessTokenPayload, refreshToken, user, device) => {
  const { userID, deviceID } = accessTokenPayload;

  const { err: errRefreshToken, tokenPayload } = authVerifiers.verifyingAndDecodeJWT(
    refreshToken,
    tokensNames.REFRESH
  );
  if (errRefreshToken) return { err: errRefreshToken };

  const isVerifiedConfirmCode = device.confirmCode === tokenPayload.confirmCode
  if(!isVerifiedConfirmCode) return {err: authErrors.INVALID_TOKEN}

  const confirmCode = generateRandomString();
  const newAccessToken = createJWToken({ deviceID, userID }, tokensNames.ACCESS);
  const newRefreshToken = createJWToken({ confirmCode }, tokensNames.REFRESH);
  device.lastLogin = new Date();
  device.confirmCode = confirmCode;
  user.save();

  return { err: null, newTokens: { newRefreshToken, newAccessToken } };
};
