import User from '../../../models/user.model';
import { encryptData, generateRandomNumbers } from '../../../utils/auth/aux_functions/common';
import { authErrors, unexpectedError } from '../../../utils/auth/errors';
import { tokensNames } from '../../../utils/auth/constants';
import { sendEmail } from '../../../utils/auth/aux_functions/for_mail';
import { createJWToken } from '../../../utils/auth/aux_functions/for_tokens';
const { USER_NOT_FOUND } = authErrors;

export const issueCredentials = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(USER_NOT_FOUND);

    const confirmCode = generateRandomNumbers();
    const saltedconfirmCode = encryptData(confirmCode);
    const confirmToken = createJWToken(
      { code: saltedconfirmCode, userID: user._id },
      tokensNames.RESTORE,
    );

    user.auth.codeForPasswordChanging = saltedconfirmCode;
    user.save();

    const emailText = `It is your confirmation code: ${confirmCode}`;
    const { err: errSendEmail } = await sendEmail(
      'vitaliidrapaliuk@gmail.com',
      'Restore password',
      emailText,
    );
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ confirmToken, success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
