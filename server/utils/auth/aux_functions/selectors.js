import User from '../../../models/user.model';
import { authErrors } from '../errors';

export const findUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    return { err: authErrors.USER_NOT_FOUND, user: null };
  }

  return { err: null, user };
};

export const getDeviceByID = (user, deviceID) => {
  const deviceObject = user.auth.openedOnDevices.id(deviceID);
  if (!deviceObject) return { err: authErrors.SIGN_OUT_FROM_ANOTHER_DEVICE };

  return { deviceObject };
};
