const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authErrors } = require('../errors');
const { getTokensInfo } = require('./for_tokens');
const {
  MISSING_TOKEN,
  INVALID_TOKEN,
  INCORRECT_AUTH_DATA,
  EXPIRED_CONFIRMATION_CODE,
  EXPIRED_TOKEN,
  INCORRECT_CONFIRMATION_CODE,
} = authErrors;

exports.authVerifiers = {
  password: async function (user, password) {
    const isCorrectPassword = await bcrypt.compare(password, user.auth.password);
    if (!isCorrectPassword) return { err: INCORRECT_AUTH_DATA };

    return { err: null };
  },

  confirmCodeForRefreshToken: async (deviceObject, confirmCode) => {
    const isEqualsCodes = await bcrypt.compare(confirmCode, deviceObject.confirmCode);
    if (!isEqualsCodes) return { err: INVALID_TOKEN };

    return { err: null };
  },

  restPasswordConfirmCode: async ({ codeFromDB, codeFromToken, sentCode }) => {
    const isEqualSentAndSavedCodes = await bcrypt.compare(sentCode, codeFromDB);
    const isEqualSentAndCodeFromToken = await bcrypt.compare(sentCode, codeFromToken);

    if (!isEqualSentAndCodeFromToken || !isEqualSentAndSavedCodes) {
      return { err: INCORRECT_CONFIRMATION_CODE };
    }

    return { err: null };
  },

  verifyingAndDecodeJWT: function (token, tokenName) {
    if (!token) return { err: MISSING_TOKEN };
    const { key } = getTokensInfo(tokenName);

    let result = { err: null, tokenPayload: undefined };
    try {
      result.tokenPayload = jwt.verify(token, key);
    } catch ({ name }) {
      if (name === 'TokenExpiredError') {
        result.tokenPayload = jwt.decode(token, key);
        result.err = EXPIRED_TOKEN;
      } else {
        result.err = INVALID_TOKEN;
      }
    }

    return result;
  },

  codeForVerifyEmail: (sendCode, user) => {
    const isCorrectCode = user.auth.codeForEmailVerification.value === sendCode;
    if (!isCorrectCode) {
      return { err: INCORRECT_CONFIRMATION_CODE };
    }

    const timeGap =
      Date.now() / 1000 - Date.parse(user.auth.codeForEmailVerification.emitted) / 1000;
    const isExpiredCode = timeGap > 1800;

    if (isExpiredCode) {
      return { err: EXPIRED_CONFIRMATION_CODE };
    }
    return { err: null };
  },
};
