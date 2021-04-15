import { findUserById } from '../../utils/auth/aux_functions/selectors';

export const giveDevicesWithOpenedApp = async (req, res, next) => {
  const { err: findingUserErr, user } = await findUserById(req.userID);
  if (findingUserErr) return next(findingUserErr);

  const devicesList = user.auth.openedOnDevices;
  res.status(200).send({ devicesList, currentDeviceID: req.deviceID });
};
