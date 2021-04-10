const { encryptData, generateRandomNumbers } = require('../../../utils/auth/aux_functions/common');
const { unexpectedError } = require('../../../utils/auth/errors');
const { tokensNames } = require('../../../utils/auth/constants');
const { createJWToken } = require('../../../utils/auth/aux_functions/for_tokens');
const { findUserById } = require('../../../utils/auth/aux_functions/selectors');
const { sendEmail } = require('../../../utils/auth/aux_functions/for_mail');

exports.reissueCredentials = async (req, res, next) => {
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
