const express = require('express');
const { changeEmail } = require('../controllers/verification_email/change_email');
const { resendVerifyEmailCode } = require('../controllers/verification_email/resend_verify_code');
const router = express.Router();
const { verifyEmail } = require('../controllers/verification_email/verification.controller');
const { validateNewEmail } = require('../middlewares/email/route_validators/validate_new_email');
const {
  validateConfirmCode,
} = require('../middlewares/email/route_validators/validate_verifying_confirm_code');

router
  .patch('/change', validateNewEmail, changeEmail)
  .patch('/verification', validateConfirmCode, verifyEmail)
  .patch('/resend-code', resendVerifyEmailCode);
module.exports = router;
