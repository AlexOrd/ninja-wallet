import { encryptData } from '../../utils/auth/aux_functions/common';
import { findUserById } from '../../utils/auth/aux_functions/selectors';
import { unexpectedError, authErrors } from '../../utils/auth/errors';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';

export const changePassword = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const isEqualPassword = req.body.oldPassword === req.body.newPassword
    if(isEqualPassword) return next(authErrors.PASSWORDS_ARE_EQUAL)

    const { err: errVerifyingPassword } = await authVerifiers.password(user, req.body.oldPassword);
    if (errVerifyingPassword) return next(authErrors.INCORRECT_OLD_PASSWORD);

    user.auth.password = encryptData(req.body.newPassword);
    user.save();
    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};