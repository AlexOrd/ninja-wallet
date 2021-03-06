import { unexpectedError } from '../../utils/auth/errors';
import { generateRandomNumbers } from '../../utils/auth/aux_functions/common';
import { sendEmail } from '../../utils/auth/aux_functions/for_mail';
import { findUserById } from '../../utils/auth/aux_functions/selectors';

export const resendVerifyEmailCode = async (req, res, next) => {
  try {
    const { err: errFindingUser, user } = await findUserById(req.userID);
    if (errFindingUser) return next(errFindingUser);

    const newCodeForEmailVerification = generateRandomNumbers();

    user.auth.codeForEmailVerification.value = newCodeForEmailVerification;
    user.auth.codeForEmailVerification.emitted = new Date();
    user.save();

    const mailMessage = `Code for verification: ${newCodeForEmailVerification}`;
    const { err: errSendEmail } = await sendEmail(
      user.email,
      'Verification',
      mailMessage,
    );
    if (errSendEmail) {
      return next(errSendEmail);
    }

    return res.status(200).send({success: true});
  } catch (error) {
    unexpectedError(error, next);
  }
};
