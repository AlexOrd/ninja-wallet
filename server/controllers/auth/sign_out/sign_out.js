import { unexpectedError } from '../../../utils/auth/errors';
import { findUserById, getDeviceByID } from '../../../utils/auth/aux_functions/selectors';

export const signOut = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const { err: errFindingDevice, deviceObject } = getDeviceByID(user, req.userID);
    if (errFindingDevice) {
      return res.status(200).send({ success: true });
    }
    deviceObject.remove();
    user.save();

    return res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
