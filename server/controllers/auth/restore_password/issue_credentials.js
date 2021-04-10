const User = require('../../../models/user.model');
const { encryptData, generateRandomNumbers } = require('../../../utils/auth/aux_functions/common');
const { authErrors, unexpectedError } = require('../../../utils/auth/errors');
const { tokensNames } = require('../../../utils/auth/constants');
const { sendEmail } = require('../../../utils/auth/aux_functions/for_mail');
const { createJWToken } = require('../../../utils/auth/aux_functions/for_tokens');
const { USER_NOT_FOUND } = authErrors;

exports.issueCredentials = async (req, res, next) => {
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

    return res.status(200).send({ confirmToken });
  } catch (error) {
    unexpectedError(error, next);
  }
};
