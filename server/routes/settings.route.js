const express = require('express');
const router = express.Router();
import {
  customSecuritySettings,
  disconnectTelegramBot,
  getAccountSettings,
  getVerificationCodeForBot,
} from '../controllers/settings';
import { validateSecuritySettings } from '../middlewares/settings/route_validators';

router
  .get('/', getAccountSettings)
  .patch('/security', validateSecuritySettings, customSecuritySettings)
  .get('/security/bot/get-verification-code', getVerificationCodeForBot)
  .delete('/security/bot/disconnect', disconnectTelegramBot)
  
export default router;