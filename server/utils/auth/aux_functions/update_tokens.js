const { authVerifiers } = require("./verifiers");
const { getDeviceByID, findUserById } = require("./selectors");
const { generateRandomString, encryptData } = require("./common");
const { createJWToken } = require("./for_tokens");
const { tokensNames } = require("../constants");

exports.updateTokens = async (userID, refreshToken) => {
    console.log('updateTokens ----------------------------------------------------------------')
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