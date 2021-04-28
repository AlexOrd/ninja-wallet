import { authVerifiers } from './verifiers';
import { createJWToken } from './for_tokens';
import { tokensNames } from '../constants';

export const updateTokens = async (accessTokenPayload, refreshToken, user, device) => {
  const { userID, deviceID } = accessTokenPayload;

  const { err: errRefreshToken } = authVerifiers.verifyingAndDecodeJWT(
    refreshToken,
    tokensNames.REFRESH
  );
  if (errRefreshToken) return { err: errRefreshToken };

  const newAccessToken = createJWToken({ deviceID, userID }, tokensNames.ACCESS);
  const newRefreshToken = createJWToken({}, tokensNames.REFRESH);
  device.lastLogin = new Date();
  user.save();

  return { err: null, newTokens: { newRefreshToken, newAccessToken } };
};
