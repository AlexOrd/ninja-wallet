import User from '../../models/user.model';
import { unexpectedError, authErrors } from '../../utils/auth/errors';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';
import { createJWToken } from '../../utils/auth/aux_functions/for_tokens';
import {
  setAuthHeaders,
  encryptData,
  generateRandomString,
} from '../../utils/auth/aux_functions/common';
import { tokensNames } from '../../utils/auth/constants';
import { getDeviceInfo } from '../../utils/auth/aux_functions/get_device_info';
import { telegramBot } from '../../bots/telegram_bot';
const { INCORRECT_AUTH_DATA } = authErrors;

const keyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Confirm',
          callback_data: 'confirm',
        },
      ],
      [
        {
          text: 'Deny',
          callback_data: 'deny',
        },
      ],
    ],
    one_time_keyboard: true,
  },
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return next(INCORRECT_AUTH_DATA);

    const { err: passwordVerifyError } = await authVerifiers.password(user, password);
    if (passwordVerifyError) return next(passwordVerifyError);

    const confirmCode = generateRandomString();
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

    if (user.auth.notifyAboutSignIn) {
      try {
        telegramBot.sendMessage(348781339, 'notify');
      } catch (error) {}
    }

    if (user.auth.doubleAuthenticate) {
      const callBackQueryListener = (resp) => {
        if (resp.data === 'confirm') {
          telegramBot.removeListener('callback_query', callBackQueryListener);
          telegramBot.deleteMessage(348781339, resp.message.message_id);

          return res.status(200).send({ success: true });
        }

        if (resp.data === 'deny') {
          telegramBot.removeListener('callback_query', callBackQueryListener);
          telegramBot.deleteMessage(348781339, resp.message.message_id);
          return next(authErrors.DOUBLE_AUTHENTICATED_DENIED);
        }
        telegramBot.removeListener('callback_query', callBackQueryListener);
      };

      telegramBot.addListener('callback_query', callBackQueryListener);
      telegramBot.sendMessage(348781339, 'login from some device', keyboard);
    }

    if (!user.auth.doubleAuthenticate) {
      setAuthHeaders(accessToken, refreshToken, res);
      return res.status(200).send({ success: true });
    }
  } catch (err) {
    return unexpectedError(err, next);
  }
};
