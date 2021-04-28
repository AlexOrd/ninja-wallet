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
  issueCredentials,
  verifyConfirmCode,
  reissueCredentials,
  createNewPassword,
} from '../controllers/auth';

import {
  validateAuthData,
  validateCredentialsIssue,
  validateConfirmCode,
  validateNewPassCreating,
} from '../middlewares/auth/route_validators';

router
  .post('/sign-up', validateAuthData, deviceDetector, signUp)
  .post('/sign-in', validateAuthData, deviceDetector, signIn)
  .delete('/sign-out', checkAccessAndProvideUserID, signOut)

  .get('/check-auth', checkAccessAndProvideUserID, (req, res) => res.status(200).end())

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
