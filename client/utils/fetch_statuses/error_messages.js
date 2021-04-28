import { fetchErrorsNames } from '../auth/constants';

const {
  EXPIRED_CONFIRMATION_CODE,
  EXPIRED_RESTORE_PASSWORD_SESSION,
  INCORRECT_AUTH_DATA,
  INCORRECT_CONFIRMATION_CODE,
  INCORRECT_OLD_PASSWORD,
  INVALID_AUTH_DATA,
  INVALID_CONFIRMATION_CODE,
  LOGIN_ALREADY_USE,
  MAIL_PROVIDER_ERROR,
  PASSWORDS_ARE_EQUAL,
  UNEXPECTED_SERVER_ERROR,
  USER_BY_EMAIL_NOT_FOUND,
  DOUBLE_AUTHENTICATED_DENIED,
  SIGN_OUT_FROM_ANOTHER_DEVICE,
  EXPIRED_TOKEN,
  MISSING_TOKEN,
  INVALID_TOKEN,
} = fetchErrorsNames;

export const errorMessages = {
  getMessages: function (errorName) {
    const foundError = this[errorName];
    if (errorName && !foundError) {
      return this[UNEXPECTED_SERVER_ERROR];
    }

    return foundError;
  },

  [USER_BY_EMAIL_NOT_FOUND]: {
    message: 'Not found user by this email',
    toolTip: 'check out email and try again',
  },
  [LOGIN_ALREADY_USE]: {
    message: 'This email has already registered',
    toolTip: 'If this email is your, you can use "forget password"',
  },

  [INCORRECT_AUTH_DATA]: {
    message: 'Passed incorrect email or password',
    toolTip: 'Check you data and try again',
  },
  [MAIL_PROVIDER_ERROR]: {
    message: 'Unfortunately, occurred mail provider error',
    toolTip: 'we are fixing it...',
  },
  [INCORRECT_CONFIRMATION_CODE]: {
    message: 'Passed confirmation code is incorrect',
    toolTip: 'Try again or click "resend code" to get new one',
  },
  [INVALID_CONFIRMATION_CODE]: {
    message: 'Passed invalid confirmation code',
    toolTip: 'Code must have 6 characters',
  },
  [EXPIRED_CONFIRMATION_CODE]: {
    message: 'Confirmation code was expired',
    toolTip: 'To get new code jus click "resend code"',
  },
  [INVALID_AUTH_DATA]: {
    message: 'You passed invalid authentication date',
    toolTip: '"email" must be a valid email, password must have 8 characters',
  },
  [UNEXPECTED_SERVER_ERROR]: {
    message: 'Our team is apologizing, we have unexpected error',
    toolTip: 'please try one more time',
  },
  [INCORRECT_OLD_PASSWORD]: {
    message: '"old password" is incorrect',
  },
  [EXPIRED_RESTORE_PASSWORD_SESSION]: {
    message: 'password recovery session ended',
    toolTip: 'session lasts 10 minutes',
  },
  [PASSWORDS_ARE_EQUAL]: {
    message: 'New password must differ from old password',
  },
  [DOUBLE_AUTHENTICATED_DENIED]: {
    message: 'Account owner did not confirm this sign in!',
  },
  [SIGN_OUT_FROM_ANOTHER_DEVICE]: {
    message: 'Account owner has exited from this device!',
  },
};
