const express = require('express');
const router = express.Router();
import {
  changePassword,
  customSecuritySettings,
  disconnectTelegramBot,
  getAccountSettings,
  getVerificationCodeForBot,
} from '../controllers/settings';
import { validateChangingPassword } from '../middlewares/auth/route_validators';
import { validateSecuritySettings } from '../middlewares/settings/route_validators';

router
  .get('/', getAccountSettings)
  .patch('/security', validateSecuritySettings, customSecuritySettings)
  .get('/security/bot/get-verification-code', getVerificationCodeForBot)
  .delete('/security/bot/disconnect', disconnectTelegramBot)
  .patch('/security/change-password', validateChangingPassword, changePassword);

export default router;
