import { findUserById } from '../utils/auth/aux_functions/selectors';
import { encryptData, generateRandomNumbers } from '../utils/auth/aux_functions/common';
import { authErrors, unexpectedError } from '../utils/auth/errors';

export const customSecuritySettings = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);
    const { option, value } = req.body;
    console.log(req.body);
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
    console.log('user', user._doc);
    const isVerifiedBot = Boolean(user.bots.telegram.chatID);
    const responseObject = {
      userEmail: user.email,
      isVerifiedEmail: user.auth.isVerifiedEmail,
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
    console.log('inside right place');
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);
    if (user.bots.telegram.chatID) {
      return next(authErrors.BOT_HAS_ALREADY_VERIFIED);
    }

    const confirmCode = generateRandomNumbers();
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