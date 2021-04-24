import User from '../../models/user.model';
import { unexpectedError, authErrors } from '../../utils/auth/errors';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';
import { createJWToken } from '../../utils/auth/aux_functions/for_tokens';
import {
  setAuthHeaders,
  encryptData,
  generateRandomNumbers,
} from '../../utils/auth/aux_functions/common';
import { tokensNames } from '../../utils/auth/constants';
import { getDeviceInfo } from '../../utils/auth/aux_functions/get_device_info';
import { telegramBot } from '../../config/telegram_bot';
const { INCORRECT_AUTH_DATA } = authErrors;

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return next(INCORRECT_AUTH_DATA);

    const { err: passwordVerifyError } = await authVerifiers.password(user, password);
    if (passwordVerifyError) return next(passwordVerifyError);

    const confirmCode = generateRandomNumbers();
    user.auth.openedOnDevices.push({
      confirmCode: encryptData(confirmCode),
      lastLogin: new Date(),
      ...getDeviceInfo(req),
    });

    const lastAddedDeviceIdx = user.auth.openedOnDevices.length - 1;
    const deviceID = user.auth.openedOnDevices[lastAddedDeviceIdx]._id;

    const refreshToken = createJWToken({ confirmCode, deviceID }, tokensNames.REFRESH);
    const accessToken = createJWToken({ userID: user._id, deviceID }, tokensNames.ACCESS);
    user.save();

    if ('user.auth.notifyAboutSignIn') {
      try {
        telegramBot.sendMessage(348781339, 'login from some device');

        // telegramBot.sendMessage(user.bots.telegram.chatId, 'login from some device');
      } catch (error) {
        console.log(error)
      }
    }

    setAuthHeaders(accessToken, refreshToken, res);

    return res.status(200).send({ success: true });
  } catch (err) {
    return unexpectedError(err, next);
  }
};
