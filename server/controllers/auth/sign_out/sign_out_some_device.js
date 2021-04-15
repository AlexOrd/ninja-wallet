import { unexpectedError } from '../../../utils/auth/errors';
import { findUserById, getDeviceByID } from '../../../utils/auth/aux_functions/selectors';

export const signOutSomeDevice = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);

    const { err: errFindingDevice, deviceObject } = getDeviceByID(user, req.body.id);
    if (errFindingDevice) {
      return res.status(200).send({ deviceID: req.body.id, success: true });
    }

    deviceObject.remove();
    user.save();

    return res.status(200).send({ deviceID: req.body.id, success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
