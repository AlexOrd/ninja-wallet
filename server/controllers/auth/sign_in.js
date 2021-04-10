const User = require('../../models/user.model');
const { unexpectedError, authErrors } = require('../../utils/auth/errors');
const { authVerifiers } = require('../../utils/auth/aux_functions/verifiers');
const { createJWToken } = require('../../utils/auth/aux_functions/for_tokens');
const {
  setAuthHeaders,
  encryptData,
  generateRandomNumbers,
} = require('../../utils/auth/aux_functions/common');
const { tokensNames } = require('../../utils/auth/constants');
const { INCORRECT_AUTH_DATA } = authErrors;

exports.signIn = async (req, res, next) => {
  try {
    const { email, password, deviceType } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return next(INCORRECT_AUTH_DATA);

    const { err: passwordVerifyError } = await authVerifiers.password(user, password);
    if (passwordVerifyError) return next(passwordVerifyError);

    const confirmCode = generateRandomNumbers();
    user.auth.openedOnDevices.push({
      confirmCode: encryptData(confirmCode),
      deviceType,
      lastLogin: new Date(),
    });

    const lastAddedDeviceIdx = user.auth.openedOnDevices.length - 1;
    const deviceID = user.auth.openedOnDevices[lastAddedDeviceIdx]._id;

    const refreshToken = createJWToken({ confirmCode, deviceID }, tokensNames.REFRESH);
    const accessToken = createJWToken({ userID: user._id, deviceID }, tokensNames.ACCESS);
    user.save();

    setAuthHeaders(accessToken, refreshToken, res);

    return res.status(200).send({ success: true });
  } catch (err) {
    return unexpectedError(err, next);
  }
};
