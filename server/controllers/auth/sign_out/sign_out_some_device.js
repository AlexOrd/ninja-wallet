const { unexpectedError } = require('../../../utils/auth/errors');
const { findUserById, getDeviceByID } = require('../../../utils/auth/aux_functions/selectors');

exports.signOutSomeDevice = async (req, res, next) => {
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
