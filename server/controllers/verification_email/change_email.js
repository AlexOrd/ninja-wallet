const { unexpectedError } = require('../../utils/auth/errors');
const { generateRandomNumbers } = require('../../utils/auth/aux_functions/common');
const { sendEmail } = require('../../utils/auth/aux_functions/for_mail');
const { findUserById } = require('../../utils/auth/aux_functions/selectors');

exports.changeEmail = async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    const { userID } = req;
    const { err: errFindingUser, user } = await findUserById(userID);
    if (errFindingUser) return next(errFindingUser);

    const newCodeForEmailVerification = generateRandomNumbers();
    user.email = req.body.email
    user.isVerifiedEmail = false
    user.auth.codeForEmailVerification.value = newCodeForEmailVerification;
    user.auth.codeForEmailVerification.emitted = new Date();
    user.save();

    const mailMessage = `Code for verification: ${newCodeForEmailVerification}`;
    const { err: errSendEmail } = await sendEmail(
      'vitaliidrapaliuk@gmail.com',
      'Verification',
      mailMessage,
    );
    if (errSendEmail) return next(errSendEmail);

    return res.status(200).send({ success: true });
  } catch (error) {
    unexpectedError(error, next);
  }
};
