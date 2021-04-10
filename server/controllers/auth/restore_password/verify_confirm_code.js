const User = require('../../../models/user.model');
const { authErrors, unexpectedError } = require('../../../utils/auth/errors');
const { authVerifiers } = require('../../../utils/auth/aux_functions/verifiers');
const { USER_NOT_FOUND } = authErrors;

exports.verifyConfirmCode = async (req, res, next) => {
  try {
    const user = await User.findById(req.tokenPayload.userID);
    if (!user) return next(USER_NOT_FOUND);

    const confirmCodes = {
      codeFromDB:user.auth.codeForPasswordChanging, 
      codeFromToken:req.tokenPayload.code, 
      sentCode:req.body.confirmCode
    }
    
    const { err: restorePassError } = await authVerifiers.restPasswordConfirmCode(confirmCodes);
    if (restorePassError) return next(restorePassError);

    return res.status(200).send({success: true});
  } catch (error) {
    unexpectedError(error, next);
  }
};
