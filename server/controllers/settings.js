import { findUserById } from '../utils/auth/aux_functions/selectors';
import { encryptData, generateRandomString } from '../utils/auth/aux_functions/common';
import { authErrors, unexpectedError } from '../utils/auth/errors';
import { authVerifiers } from '../utils/auth/aux_functions/verifiers';


export const changePassword = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const isEqualPassword = req.body.oldPassword === req.body.newPassword
    if(isEqualPassword) return next(authErrors.PASSWORDS_ARE_EQUAL)

    const { err: errVerifyingPassword } = await authVerifiers.password(user, req.body.oldPassword);
    if (errVerifyingPassword) return next(authErrors.INCORRECT_OLD_PASSWORD);

    user.auth.password = encryptData(req.body.newPassword);
    user.save();
    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};




export const customSecuritySettings = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);
    const { option, value } = req.body;
    user.auth[option] = value;
    user.save();

    res.status(200).send({ option, value });
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const getAccountSettings = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);
    const isVerifiedBot = Boolean(user.bots.telegram.chatID);
    const responseObject = {
      userEmail: user.email,
      isVerifiedEmail: user.isVerifiedEmail,
      notifyAboutSignIn: user.auth.notifyAboutSignIn,
      doubleAuthenticate: user.auth.doubleAuthenticate,
      deviceList: user.auth.openedOnDevices,
      currentDeviceID: req.deviceID,
      isVerifiedBot,
    };

    res.status(200).send(responseObject);
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const giveDevicesWithOpenedApp = async (req, res, next) => {
  const { err: findingUserErr, user } = await findUserById(req.userID);
  if (findingUserErr) return next(findingUserErr);

  const devicesList = user.auth.openedOnDevices;
  res.status(200).send({ devicesList, currentDeviceID: req.deviceID });
};

export const getVerificationCodeForBot = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);
    if (user.bots.telegram.chatID) {
      return next(authErrors.BOT_HAS_ALREADY_VERIFIED);
    }

    const confirmCode = generateRandomString();
    user.bots.telegram.confirmCode = confirmCode;
    user.save();

    res.status(200).send({ confirmCode });
  } catch (error) {
    unexpectedError(error, next);
  }
};

export const disconnectTelegramBot = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);

    user.bots.telegram.chatID = '';
    user.save();

    res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
