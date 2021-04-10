const User = require('../../models/user.model');
const {
  setAuthHeaders,
  generateRandomString,
  generateRandomNumbers,
  encryptData,
} = require('../../utils/auth/aux_functions/common');
const { sendEmail } = require('../../utils/auth/aux_functions/for_mail');
const { unexpectedError, authErrors } = require('../../utils/auth/errors');
const { tokensNames } = require('../../utils/auth/constants');
const { createJWToken } = require('../../utils/auth/aux_functions/for_tokens');

exports.signUp = async (req, res, next) => {
  try {
    const { email, password, deviceType } = req.body;

    const isUsedEmail = await User.findOne({ email: email });
    if (isUsedEmail) return next(authErrors.LOGIN_ALREADY_USE);

    const confirmCode = generateRandomString();
    const codeForEmailVerification = generateRandomNumbers();

    const user = new User({
      email,
      auth: {
        password: encryptData(password),
        openedOnDevices: [
          {
            confirmCode: encryptData(confirmCode),
            deviceType,
            lastLogin: new Date(),
          },
        ],
        codeForEmailVerification: {
          value: codeForEmailVerification,
          emitted: Date.now(),
        },
      },
    });
    user.save();

    const deviceID = user.auth.openedOnDevices[0]._id;

    const refreshToken = createJWToken({ confirmCode, deviceID }, tokensNames.REFRESH);
    const accessToken = createJWToken({ userID: user._id, deviceID }, tokensNames.ACCESS);

    setAuthHeaders(accessToken, refreshToken, res);

    const emailText = `It is your verification code: ${codeForEmailVerification}`;
    const { err: errSendEmail } = await sendEmail(
      'vitaliidrapaliuk@gmail.com',
      'Verification',
      emailText,
    );

    if (errSendEmail) {
      console.error(errSendEmail);
      return res.status(200).send({ isEmailError: true });
    }

    return res.status(200).send({ success: true, isEmailError: false });
  } catch (error) {
    unexpectedError(error, next);
  }
};
