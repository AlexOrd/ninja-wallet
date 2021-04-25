import { authErrors, unexpectedError } from '../../utils/auth/errors';
import { generateRandomNumbers } from '../../utils/auth/aux_functions/common';
import { sendEmail } from '../../utils/auth/aux_functions/for_mail';
import { findUserById } from '../../utils/auth/aux_functions/selectors';
import User from '../../models/user.model';

export const changeEmail = async (req, res, next) => {
  try {
    const { userID } = req;

    const isUsedEmail = await User.findOne({ email: req.body.email });
    if (isUsedEmail) return next(authErrors.LOGIN_ALREADY_USE);

    console.log('!!!!!')

    const { err: errFindingUser, user } = await findUserById(userID);
    if (errFindingUser) return next(errFindingUser);

    const newCodeForEmailVerification = generateRandomNumbers();
    user.email = req.body.email;
    user.isVerifiedEmail = false;
    user.auth.codeForEmailVerification.value = newCodeForEmailVerification;
    user.auth.codeForEmailVerification.emitted = new Date();
    user.save();

    const mailMessage = `Code for verification: ${newCodeForEmailVerification}`;
    const { err: errSendEmail } = await sendEmail(
      req.body.email,
      'Verification',
      mailMessage
    );
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
