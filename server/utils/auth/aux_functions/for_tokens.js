const jwt = require('jsonwebtoken');
const { authErrors } = require('../errors');
const { tokensNames, tokensDevKeys } = require('../constants');

const getTokensInfo = (tokenName) => {
  const { ACCESS, REFRESH, RESTORE } = tokensNames;
  const settings = {
    [ACCESS]: {
      key: process.env.ACCESS_TOKEN_KEY || tokensDevKeys.ACCESS,
      options: { expiresIn: `${1000 * 60 * 15}` },
    },

    [REFRESH]: {
      key: process.env.REFRESH_TOKEN_KEY || tokensDevKeys.REFRESH,
      options: { expiresIn: `${1000 * 60 * 60}` },
    },

    [RESTORE]: {
      key: process.env.RESTORE_PASSWORD_KEY || tokensDevKeys.RESTORE,
      options: { expiresIn: `${1000 * 60 * 10}` },
    },
  };

  if (!tokenName || !settings[tokenName]) {
    throw new Error('Didn`t pass token name or passed not exist name');
  }

  return settings[tokenName];
};

exports.getTokensFromReq = function (req) {
  const refreshToken = req.headers['refresh-token'];
  const accessToken = req.headers.authorization;
  if (!refreshToken || !accessToken) {
    return { err: authErrors .MISSING_TOKEN, parsedTokens: {} };
  }

  return { err: null, parsedTokens: { refreshToken, accessToken } };
};

exports.createJWToken = (payload, tokenName) => {
  const { key, options } = getTokensInfo(tokenName);
  const token = jwt.sign(payload, key, options);
  return token;
};


exports.getTokensInfo = getTokensInfo
