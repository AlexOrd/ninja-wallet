import User from '../../models/user.model';
import {
  encryptData,
  generateRandomNumbers,
  generateRandomString,
  setAuthHeaders,
} from '../../utils/auth/aux_functions/common';
import { authErrors, unexpectedError } from '../../utils/auth/errors';
import { tokensNames } from '../../utils/auth/constants';
import { sendEmail } from '../../utils/auth/aux_functions/for_mail';
import { createJWToken } from '../../utils/auth/aux_functions/for_tokens';
import { findUserById } from '../../utils/auth/aux_functions/selectors';
import { getDeviceInfo } from '../../utils/auth/aux_functions/get_device_info';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';
import { telegramBot } from '../../bots/telegram_bot';
const { ACCESS, REFRESH } = tokensNames;
const { USER_NOT_FOUND, USER_BY_EMAIL_NOT_FOUND } = authErrors;

export const issueCredentials = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(USER_BY_EMAIL_NOT_FOUND);

    const confirmCode = generateRandomNumbers();
    const saltedConfirmCodeForToken = await encryptData(confirmCode);
    const confirmToken = createJWToken(
      { code: saltedConfirmCodeForToken, userID: user._id },
      tokensNames.RESTORE
    );

    const saltedConfirmCodeForDB = await encryptData(confirmCode); 
    user.auth.codeForPasswordChanging = saltedConfirmCodeForDB 
    user.save();

    const message = `Code for restore password: ${confirmCode}`;
    if(user.bots.telegram.chatID) {
      telegramBot.sendMessage(user.bots.telegram.chatID, message)
      return res.status(200).send({ confirmToken, success: true });
    }

    const { err: errSendEmail } = await sendEmail(req.body.email, 'Restore password', message);
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ confirmToken, success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const createNewPassword = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.tokenPayload.userID);
    if (errFindingUser) return next(errFindingUser);

    const confirmCode = generateRandomString();
    const saltedPassword = await encryptData(req.body.newPassword);

    user.auth.password = saltedPassword
    user.auth.openedOnDevices.push({
      confirmCode,
      lastLogin: new Date(),
      ...getDeviceInfo(req),
    });
    user.auth.codeForPasswordChanging = '';
    user.save();

    const lastAddedDeviceIdx = user.auth.openedOnDevices.length - 1;
    const deviceID = user.auth.openedOnDevices[lastAddedDeviceIdx]._id;

    const refreshToken = createJWToken({ confirmCode, deviceID }, REFRESH);
    const accessToken = createJWToken({ userID: user._id, deviceID }, ACCESS);

    setAuthHeaders(accessToken, refreshToken, res);
    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const reissueCredentials = async (req, res, next) => {
  try {
    const { userID } = req.tokenPayload;

    const { err: errFindingUser, user } = await findUserById(userID);
    if (errFindingUser) return errFindingUser;

    const confirmCode = generateRandomNumbers();
    const saltedConfirmCode = await encryptData(confirmCode);
    const confirmToken = createJWToken(
      { code: saltedConfirmCode, userID: user._id },
      tokensNames.RESTORE
    );

    user.auth.codeForPasswordChanging = saltedConfirmCode;
    user.save();


    const message = `Code for restore password: ${confirmCode}`;
    if(user.bots.telegram.chatID) {
      telegramBot.sendMessage(user.bots.telegram.chatID, message)
      return res.status(200).send({ confirmToken, success: true });
    }

    const { err: errSendEmail } = await sendEmail(user.email, 'Restore password', message);
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ confirmToken, success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const verifyConfirmCode = async (req, res, next) => {
  try {
    const user = await User.findById(req.tokenPayload.userID);
    if (!user) return next(USER_NOT_FOUND);

    const confirmCodes = {
      codeFromDB: user.auth.codeForPasswordChanging,
      codeFromToken: req.tokenPayload.code,
      sentCode: req.body.confirmCode,
    };

    const { err: restorePassError } = await authVerifiers.restPasswordConfirmCode(confirmCodes);
    if (restorePassError) return next(restorePassError);

    return res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
