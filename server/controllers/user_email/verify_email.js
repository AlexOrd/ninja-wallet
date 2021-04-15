import { unexpectedError } from '../../utils/auth/errors';
import { authVerifiers } from '../../utils/auth/aux_functions/verifiers';
import { findUserById } from '../../utils/auth/aux_functions/selectors';

export const verifyEmail = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const { err: errCodeConfirm } = authVerifiers.codeForVerifyEmail(req.body.confirmCode, user);
    if (errCodeConfirm) return next(errCodeConfirm);

    user.auth.codeForEmailVerification.value = '';
    user.auth.codeForEmailVerification.emitted = '';
    user.isVerifiedEmail = true;
    user.save();

    return res.status(200).end();
  } catch (error) {
    unexpectedError(error, next);
  }
};
