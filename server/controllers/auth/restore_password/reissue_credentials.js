import { encryptData, generateRandomNumbers } from '../../../utils/auth/aux_functions/common';
import { unexpectedError } from '../../../utils/auth/errors';
import { tokensNames } from '../../../utils/auth/constants';
import { createJWToken } from '../../../utils/auth/aux_functions/for_tokens';
import { findUserById } from '../../../utils/auth/aux_functions/selectors';
import { sendEmail } from '../../../utils/auth/aux_functions/for_mail';

export const reissueCredentials = async (req, res, next) => {
  try {
    const { userID } = req.tokenPayload;

    const { err: errFindingUser, user } = await findUserById(userID);
    if (errFindingUser) return errFindingUser;

    const confirmCode = generateRandomNumbers()
    const saltedconfirmCode = encryptData(confirmCode);
    const confirmToken = createJWToken({ code: saltedconfirmCode, userID: user._id }, tokensNames.RESTORE)

    user.auth.codeForPasswordChanging = saltedconfirmCode;
    user.save();

    const emailText = `It is your verification code: ${confirmCode}`;
    const { err: errSendEmail } = await sendEmail(
      user.email,
      'Restore password',
      emailText,
    );
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ confirmToken, success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
