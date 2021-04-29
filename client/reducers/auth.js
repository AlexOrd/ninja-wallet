import {
  AUTHORIZATION,
  SET_RESTORE_PASSWORD_TOKEN,
  SET_PERMISSION_FOR_CHANGE_PASSWORD,
  RESET_RESTORE_SESSION,
  SIGN_OUT_EVERY_DEVICE,
  SIGN_OUT_CURRENT_DEVICE,
} from '../actions/types/auth';

const initialState = {
  isAuthorized: false,
  isEmailError: false,
  restorePassword: {
    token: '',
    allowChangePassword: false,
  },
};

export const authReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case RESET_RESTORE_SESSION:
      return {
        ...state,
        error: null,
        restorePassword: {
          token: '',
          allowChangePassword: false,
        },
      };

    case SIGN_OUT_EVERY_DEVICE:
      return { ...initialState };

    case SIGN_OUT_CURRENT_DEVICE:
      return { ...initialState };

    case SET_RESTORE_PASSWORD_TOKEN:
      return {
        ...state,
        restorePassword: { ...state.restorePassword, token: payload.token },
      };
    case SET_PERMISSION_FOR_CHANGE_PASSWORD:
      return {
        ...state,
        restorePassword: { ...state.restorePassword, allowChangePassword: payload.isPermission },
      };

    case AUTHORIZATION:
      return {
        ...state,
        isAuthorized: action.payload.isAuthorized,
        isEmailError: action.payload.isEmailError,
      };

    default:
      return state;
  }
};
