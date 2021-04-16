import User from '../../models/user.model';
import {
  setAuthHeaders,
  generateRandomString,
  generateRandomNumbers,
  encryptData,
} from '../../utils/auth/aux_functions/common';
import { sendEmail } from '../../utils/auth/aux_functions/for_mail';
import { unexpectedError, authErrors } from '../../utils/auth/errors';
import { tokensNames } from '../../utils/auth/constants';
import { createJWToken } from '../../utils/auth/aux_functions/for_tokens';
import { getDeviceInfo } from '../../utils/auth/aux_functions/get_device_info';

export const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;

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
            lastLogin: new Date(),
            ...getDeviceInfo(req)
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
      emailText
    );

    if (errSendEmail) {
      return res.status(200).send({ success: true, isEmailError: true });
    }

    return res.status(200).send({ success: true, isEmailError: false });
  } catch (error) {
    unexpectedError(error, next);
  }
};
