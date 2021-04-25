const express = require('express');
const router = express.Router();
import { deviceDetector } from '../middlewares/auth/device_detector';
import {
  checkAccessAndProvideUserID,
  verifyCredentials,
} from '../middlewares/auth/route_verifiers';

import {
  signUp,
  signIn,
  signOut,
  signOutSomeDevice,
  signOutEveryDevice,
  issueCredentials,
  verifyConfirmCode,
  reissueCredentials,
  createNewPassword,
  changePassword,
  checkAuthorization,
  giveDevicesWithOpenedApp,
} from '../controllers/auth';

import {
  validateAuthData,
  validateDeviceID,
  validateChangingPassword,
  validateCredentialsIssue,
  validateConfirmCode,
  validateNewPassCreating,
} from '../middlewares/auth/route_validators';



router
  .post('/sign-up',  validateAuthData, deviceDetector, signUp)
  .post('/sign-in', validateAuthData, deviceDetector, signIn)
  .delete('/sign-out', checkAccessAndProvideUserID, signOut)
  .patch('/change-password', validateChangingPassword, checkAccessAndProvideUserID, changePassword)

  .post('/restore-password/get-credentials', validateCredentialsIssue, issueCredentials)
  .post('/restore-password/verify-code', validateConfirmCode, verifyCredentials, verifyConfirmCode)
  .patch(
    '/restore-password/create-password',
    validateNewPassCreating,
    verifyCredentials,
    deviceDetector,
    createNewPassword
  )
  .patch('/restore-password/resend-code', verifyCredentials, reissueCredentials);

export default router;
