import User from '../../../models/user.model';
import { authErrors, unexpectedError } from '../../../utils/auth/errors';
import { authVerifiers } from '../../../utils/auth/aux_functions/verifiers';
const { USER_NOT_FOUND } = authErrors;

export const verifyConfirmCode = async (req, res, next) => {
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
