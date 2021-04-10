const express = require('express');
const router = express.Router();
const { signIn } = require('../controllers/auth/sign_in');
const { signUp } = require('../controllers/auth/sign_up');
const { signOut } = require('../controllers/auth/sign_out/sign_out');
const { changePassword } = require('../controllers/auth/change_password');
const { validateAuthData } = require('../middlewares/auth/route_validators/validate_auth_data');
const { signOutEveryDevice } = require('../controllers/auth/sign_out/sign_out_every_device');
const { signOutSomeDevice } = require('../controllers/auth/sign_out/sign_out_some_device');
const { giveDevicesWithOpenedApp } = require('../controllers/auth/give_devices_with_opened_app');
const { createNewPassword } = require('../controllers/auth/restore_password/new_password');
const {
  verifyCredentials,
} = require('../middlewares/auth/route_verifiers/verify_rest_pass_credentials');
const { verifyConfirmCode } = require('../controllers/auth/restore_password/verify_confirm_code');
const {
  validateChangingPassword,
} = require('../middlewares/auth/route_validators/validate_changing_password');
const { issueCredentials } = require('../controllers/auth/restore_password/issue_credentials');

const {
  validateCredentialsIssue,
} = require('../middlewares/auth/route_validators/validate_credential_issue');
const {
  validateConfirmCode,
} = require('../middlewares/auth/route_validators/validate_confirm_code');
const { validateDeviceID } = require('../middlewares/auth/route_validators/validate_device_id');
const {
  validateNewPassCreating,
} = require('../middlewares/auth/route_validators/validate_new_password_creating');

const {
  checkAccessAndProvideUserID,
} = require('../middlewares/auth/route_verifiers/check_access_and_provide_user_id');

const { reissueCredentials } = require('../controllers/auth/restore_password/reissue_credentials');
const { checkAuthorization } = require('../controllers/auth/check_authorization');

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
    createNewPassword,
  )
  .patch('/restore-password/resend-code', verifyCredentials, reissueCredentials);

module.exports = router;
