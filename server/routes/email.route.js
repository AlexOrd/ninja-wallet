const express = require('express');
const router = express.Router();

import { changeEmail, verifyEmail, resendVerifyEmailCode } from '../controllers/user_email';
import { validateNewEmail, validateConfirmCode } from '../middlewares/user_email/route_validators';

router
  .patch('/change', validateNewEmail, changeEmail)
  .patch('/verification', validateConfirmCode, verifyEmail)
  .patch('/resend-code', resendVerifyEmailCode);

export default router;
