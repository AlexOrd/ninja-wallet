import { encryptData, generateRandomNumbers, setAuthHeaders } from '../../../utils/auth/aux_functions/common';
import { unexpectedError } from '../../../utils/auth/errors';
import { tokensNames } from '../../../utils/auth/constants';
import { createJWToken } from '../../../utils/auth/aux_functions/for_tokens';
import { findUserById } from '../../../utils/auth/aux_functions/selectors';
const { ACCESS, REFRESH } = tokensNames;

export const createNewPassword = async (req, res, next) => {
  try {
    const {err: errFindingUser, user} = await findUserById(req.tokenPayload.userID);
    if (errFindingUser) return next(errFindingUser);

    const refreshTokenConfirmCode = generateRandomNumbers();

    user.auth.password = encryptData(req.body.newPassword);
    user.auth.openedOnDevices.push({
      confirmCode: encryptData(refreshTokenConfirmCode),
      lastLogin: new Date(),
      deviceType: req.body.deviceType,
    });
    user.auth.codeForPasswordChanging = '';
    user.save();

    const lastAddedDeviceIdx = user.auth.openedOnDevices.length - 1;
    const deviceID = user.auth.openedOnDevices[lastAddedDeviceIdx]._id;

    const refreshToken = createJWToken({ confirmCode: refreshTokenConfirmCode, deviceID }, REFRESH);
    const accessToken = createJWToken({ userID: user._id, deviceID }, ACCESS);

    setAuthHeaders(accessToken, refreshToken, res);
    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};