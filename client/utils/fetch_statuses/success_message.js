import { authFetchStatusNames } from '../auth/names';
import { commonFetchStatuses } from '../auth/constants';
import { settingsFetchStatusNames } from '../settings/names';
const {
  CREATE_NEW_PASSWORD,
  GET_REST_PASSWORD_CREDENTIALS,
  RESEND_REST_PASSWORD_CREDENTIALS,
  SIGN_IN,
  SIGN_UP,
  VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
  NOTIFY_ABOUT_SIGN_IN,
  DOUBLE_AUTHENTICATE,
  CHECK_AUTH,
} = authFetchStatusNames;

const {
  RESEND_VERIFY_EMAIL_CODE,
  SEND_VERIFY_EMAIL_CODE,
  CHANGE_EMAIL,
  VERIFY_EMAIL,
  CHANGE_PASSWORD,
  ACCOUNT_SETTINGS,
  NOTIFY_ABOUT_SIGN_IN_ON,
  NOTIFY_ABOUT_SIGN_IN_OFF,
  DOUBLE_AUTHENTICATE_ON,
  DOUBLE_AUTHENTICATE_OFF,
  GETTING_VERIFICATION_CODE_FOR_BOT,
  DISCONNECT_BOT,
  SIGN_OUT_DEVICE_DEVICE_BY_ID,
} = settingsFetchStatusNames;

export const successMessages = {
  getSuccessMessage: function (allFetchStatuses, reducerName) {
    let message = '';
    const privateFetchStatus = allFetchStatuses[reducerName];
    const keys = Object.keys(this.messages);
    keys.forEach((el) => {
      if (privateFetchStatus[el] === commonFetchStatuses.SUCCEEDED) {
        message = this.messages[el];
      }
    });

    return message;
  },

  messages: {
    //auth
    [CHECK_AUTH]: 'Success login to system',
    [CHANGE_EMAIL]: 'Email has changed successfully',
    [CHANGE_PASSWORD]: 'Password has changed successfully',
    [CREATE_NEW_PASSWORD]: 'Password has restored successfully',
    [GET_REST_PASSWORD_CREDENTIALS]: 'Verification code was sent to your email',
    [RESEND_REST_PASSWORD_CREDENTIALS]: 'Verification code was sent to your email repeatedly',
    [RESEND_VERIFY_EMAIL_CODE]: 'Confirmation code was sent to your email repeatedly',
    [SEND_VERIFY_EMAIL_CODE]: 'Confirmation code was sent to your email',
    [SIGN_IN]: 'Successful sign in to system',
    [SIGN_OUT_DEVICE_DEVICE_BY_ID]: 'Successfully sign out from device',
    [SIGN_UP]: 'Successful sign up to system',
    [VERIFY_EMAIL]: 'Email has verified successfully',
    [VERIFY_REST_REST_PASSWORD_CONFIRM_CODE]: 'Confirmation code was beed succeeded verified',

    //settings
    [ACCOUNT_SETTINGS]: 'Settings received successfully',
    [NOTIFY_ABOUT_SIGN_IN]: 'Notification for every new sign in turn on',
    [DOUBLE_AUTHENTICATE]: 'Double_authenticate turn on',
    [GETTING_VERIFICATION_CODE_FOR_BOT]: 'Code for bot verification received',
    [DISCONNECT_BOT]: 'Bot was disconnected from your account',
    [NOTIFY_ABOUT_SIGN_IN_ON]: 'Notification for every new sign in TURN ON',
    [NOTIFY_ABOUT_SIGN_IN_OFF]: 'Notification for every new sign in TURN OFF',
    [DOUBLE_AUTHENTICATE_ON]: 'Double authenticate TURN ON',
    [DOUBLE_AUTHENTICATE_OFF]: 'Double authenticate TURN OFF ',
  },
};
