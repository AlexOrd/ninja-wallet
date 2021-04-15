const express = require('express');
const router = express.Router();
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
  .post('/sign-up', validateAuthData, signUp)
  .post('/sign-in', validateAuthData, signIn)

  .delete('/sign-out', checkAccessAndProvideUserID, signOut)
  .delete('/sign-out/every-device', checkAccessAndProvideUserID, signOutEveryDevice)
  .delete('/sign-out/some-device', validateDeviceID, checkAccessAndProvideUserID, signOutSomeDevice)

  .get('/devices-with-opened-app', checkAccessAndProvideUserID, giveDevicesWithOpenedApp)
  .get('/check-authorization', checkAccessAndProvideUserID, checkAuthorization)
  .patch('/change-password', validateChangingPassword, checkAccessAndProvideUserID, changePassword)

  .post('/restore-password/get-credentials', validateCredentialsIssue, issueCredentials)
  .post('/restore-password/verify-code', validateConfirmCode, verifyCredentials, verifyConfirmCode)
  .patch(
    '/restore-password/create-password',
    validateNewPassCreating,
    verifyCredentials,
    createNewPassword
  )
  .patch('/restore-password/resend-code', verifyCredentials, reissueCredentials);

export default router;
