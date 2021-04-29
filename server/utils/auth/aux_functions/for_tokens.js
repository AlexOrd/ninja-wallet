import jwt from 'jsonwebtoken';
import { authErrors } from '../errors';
import { tokensNames } from '../constants';

export const getTokensInfo = (tokenName) => {
  const { ACCESS, REFRESH, RESTORE } = tokensNames;
  const settings = {
    [ACCESS]: {
      key: process.env.ACCESS_TOKEN_KEY,
      options: { expiresIn: `${1000 * 60 * 4}` },
    },

    [REFRESH]: {
      key: process.env.REFRESH_TOKEN_KEY,
      options: { expiresIn: '3d' },
    },

    [RESTORE]: {
      key: process.env.RESTORE_PASSWORD_KEY,
      options: { expiresIn: `${1000 * 60 * 4}` },
    },
  };

  if (!tokenName || !settings[tokenName]) {
    throw new Error('Didn`t pass token name or passed not exist name');
  }

  return settings[tokenName];
};
export const getTokensFromReq = function (req) {
  const refreshToken = req.headers['refresh-token'];
  const accessToken = req.headers.authorization;
  if (!refreshToken || !accessToken) {
    return { err: authErrors.MISSING_TOKEN, parsedTokens: {} };
  }

  return {
    err: null,
    parsedTokens: { refreshToken, accessToken },
  };
};

export const createJWToken = (payload, tokenName) => {
  const { key, options } = getTokensInfo(tokenName);
  const token = jwt.sign(payload, key, options);
  return `Bearer ${token}`;
};
