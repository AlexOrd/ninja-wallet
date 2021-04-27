import {
  EMAIL_VERIFICATION,
  SIGN_OUT_CURRENT_DEVICE,
  SIGN_OUT_EVERY_DEVICE,
  SIGN_OUT_SOME_DEVICE,
} from '../actions/types/auth';
import { RECEIVE_ACCOUNT_SETTINGS, UPDATE_SECURITY_SETTINGS } from '../actions/types/settings';

const initialState = {
  userEmail: '',
  isVerifiedEmail: false,
  notifyAboutSignIn: false,
  doubleAuthenticate: false,
  devicesListWithOpenedApp: [],
  currentDeviceID: '',
  isVerifiedBot: false,
  confirmCodeForBot: '',
};

export const settingsReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case RECEIVE_ACCOUNT_SETTINGS:
      const {
        isVerifiedEmail,
        notifyAboutSignIn,
        doubleAuthenticate,
        deviceList,
        currentDeviceID,
        isVerifiedBot,
        userEmail,
      } = payload;

      console.log('payload', payload);

      return {
        ...state,
        userEmail,
        isVerifiedEmail,
        notifyAboutSignIn,
        doubleAuthenticate,
        devicesListWithOpenedApp: [...deviceList].reverse(),
        currentDeviceID,
        isVerifiedBot,
      };

    case UPDATE_SECURITY_SETTINGS:
      return {
        ...state,
        [payload.option]: payload.value,
      };
    case EMAIL_VERIFICATION:
      return {
        ...state,
        isVerifiedEmail: action.payload.isVerification,
      };

    case SIGN_OUT_SOME_DEVICE:
      return {
        ...state,
        devicesListWithOpenedApp: state.devicesListWithOpenedApp.filter(({ _id }) => {
          return _id !== payload.deviceID;
        }),
      };

    case SIGN_OUT_EVERY_DEVICE:
      return { ...initialState };

    case SIGN_OUT_CURRENT_DEVICE:
      return { ...initialState };
    default:
      return state;
  }
};
