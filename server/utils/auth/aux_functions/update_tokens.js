import { authVerifiers } from "./verifiers";
import { getDeviceByID, findUserById } from "./selectors";
import { generateRandomString, encryptData } from "./common";
import { createJWToken } from "./for_tokens";
import { tokensNames } from "../constants";

export const updateTokens = async (userID, refreshToken) => {
    const { err: findingUserErr, user } = await findUserById(userID);
    if (findingUserErr) return { err: findingUserErr };
    const { err: errRefreshToken, tokenPayload } = authVerifiers.verifyingAndDecodeJWT(
      refreshToken,
      tokensNames.REFRESH,
    );
    if (errRefreshToken) return { err: errRefreshToken };
    const { deviceID, confirmCode } = tokenPayload;
  
    const { err: errFindingDevice, deviceObject } = getDeviceByID(user, deviceID);
    if (errFindingDevice) return { err: errFindingDevice };
  
    const { err: errVerifyConfirmCodeForRefreshTok } = await authVerifiers.confirmCodeForRefreshToken(
      deviceObject,
      confirmCode,
    );

    if (errVerifyConfirmCodeForRefreshTok) return { err: errVerifyConfirmCodeForRefreshTok };
  
    const newConfirmCode = generateRandomString();
    const newRefreshToken = createJWToken(
      { deviceID, confirmCode: newConfirmCode },
      tokensNames.REFRESH,
    );
    const newAccessToken = createJWToken({ userID }, tokensNames.ACCESS);
    deviceObject.confirmCode = encryptData(newConfirmCode);
    user.lastLogin = new Date();
  
    user.save();
  
    return { err: null, newTokens: { newRefreshToken, newAccessToken }, deviceID };
  };