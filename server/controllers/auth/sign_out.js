import { unexpectedError } from '../../utils/auth/errors';
import { findUserById, getDeviceByID } from '../../utils/auth/aux_functions/selectors';

export const signOut = (req, res, next) => {
    try {
        const { err: errFindingUser, user } = await findUserById(req.userID);
        if (errFindingUser) return next(errFindingUser);

        const exitFromDeviceByID = req.query.deviceID
        if(exitFromDeviceByID) {
            const { deviceObject } = getDeviceByID(user, req.query.deviceID);
            deviceObject.remove();
            user.save();
            return res.status(200).send({ deviceID: req.query.deviceID, success: true });
        }

        const exitFromEveryDevice = req.query.allDevices
        if(exitFromEveryDevice) {
            user.auth.openedOnDevices = [];
            user.save();
        
            return res.status(200).send({ success: true });
        }

        
        const { deviceObject } = getDeviceByID(user, req.deviceID);
        deviceObject.remove();
        user.save();

        return res.status(200).send({ success: true });
    } catch (error) {
        unexpectedError(error, next);
    }
}