const { encryptData } = require('../../utils/auth/aux_functions/common');
const { findUserById } = require('../../utils/auth/aux_functions/selectors');
const { unexpectedError, authErrors } = require('../../utils/auth/errors');
const { authVerifiers } = require('../../utils/auth/aux_functions/verifiers');

exports.changePassword = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const { err: errVerifyingPassword } = await authVerifiers.password(user, req.body.oldPassword);
    if (errVerifyingPassword) return next(authErrors.INCORRECT_OLD_PASSWORD);

    user.auth.password = encryptData(req.body.newPassword);
    user.save();
    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};