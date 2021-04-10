const { unexpectedError } = require('../../../utils/auth/errors');
const { findUserById } = require('../../../utils/auth/aux_functions/selectors');

exports.signOutEveryDevice = async (req, res, next) => {
  try {
    const { err: findingUserErr, user } = await findUserById(req.userID);
    if (findingUserErr) return next(findingUserErr);

    user.auth.openedOnDevices = [];
    user.save();

    return res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
