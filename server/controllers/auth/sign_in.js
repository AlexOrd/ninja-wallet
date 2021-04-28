import User from '../../models/user.model';
import { unexpectedError, authErrors } from '../../utils/auth/errors';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';
import { createJWToken } from '../../utils/auth/aux_functions/for_tokens';
import { setAuthHeaders } from '../../utils/auth/aux_functions/common';
import { tokensNames } from '../../utils/auth/constants';
import { getDeviceInfo } from '../../utils/auth/aux_functions/get_device_info';
import { telegramBot } from '../../bots/telegram_bot';
import { parseDeviceInfo } from '../../utils/bot/aux_functions';
import { doubleAuthenticateMessage, messageAboutSignIn } from '../../utils/bot/messages';

const { INCORRECT_AUTH_DATA } = authErrors;

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return next(INCORRECT_AUTH_DATA);

    const { err: passwordVerifyError } = await authVerifiers.password(user, password);
    if (passwordVerifyError) return next(passwordVerifyError);

    user.auth.openedOnDevices.push({
      lastLogin: new Date(),
      ...getDeviceInfo(req),
    });

    const lastAddedDeviceIdx = user.auth.openedOnDevices.length - 1;
    const deviceID = user.auth.openedOnDevices[lastAddedDeviceIdx]._id;

    const accessToken = createJWToken({ userID: user._id, deviceID }, tokensNames.ACCESS);
    const refreshToken = createJWToken({}, tokensNames.REFRESH);
    user.save();

    const isConnectedBot = user.bots.telegram.chatID;
    if (user.auth.notifyAboutSignIn && !user.auth.doubleAuthenticate && isConnectedBot) {
      try {
        const { device, browser, platform } = parseDeviceInfo(req);
        const notification = messageAboutSignIn(device, browser, platform)
        telegramBot.sendMessage(user.bots.telegram.chatID, notification);
      } catch (error) {}
    }

    if (user.auth.doubleAuthenticate && isConnectedBot) {
      const callBackQueryListener = (resp) => {
        if (resp.data === 'confirm') {
          telegramBot.removeListener('callback_query', callBackQueryListener);
          telegramBot.deleteMessage(348781339, resp.message.message_id);

          setAuthHeaders(accessToken, refreshToken, res);
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

      const { message, keyboard } = doubleAuthenticateMessage;
      telegramBot.sendMessage(348781339, message, {
        reply_markup: {
          inline_keyboard: keyboard,
          one_time_keyboard: true,
        },
      });
    }

    if (!user.auth.doubleAuthenticate) {
      setAuthHeaders(accessToken, refreshToken, res);
      return res.status(200).send({ success: true });
    }
  } catch (err) {
    return unexpectedError(err, next);
  }
};


// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// let loadScriptPromise = function(src) {
//   return new Promise((resolve, reject) => {
//     telegramBot.addListener('callback_query')
//     loadScript(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script);
//     });
//   })
// }