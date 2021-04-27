import produce from 'immer';
import { commonFetchStatuses } from '../utils/auth/constants';
import { authFetchStatusNames } from '../utils/auth/names';
import { settingsFetchStatusNames } from '../utils/settings/names';
import {
  UPDATE_COMMON_FETCH_STATUS,
  UPDATE_PRIVATE_FETCH_STATUS,
  SET_FETCH_ERROR,
} from '../actions/types/common';
const { IDLE } = commonFetchStatuses;

const {
  SIGN_UP,
  SIGN_IN,
  GET_REST_PASSWORD_CREDENTIALS,
  RESEND_REST_PASSWORD_CREDENTIALS,
  VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
  CREATE_NEW_PASSWORD,
} = authFetchStatusNames;

const {
  CHANGE_PASSWORD,
  ACCOUNT_SETTINGS,
  GETTING_VERIFICATION_CODE_FOR_BOT,
  DISCONNECT_BOT,
  NOTIFY_ABOUT_SIGN_IN_ON,
  NOTIFY_ABOUT_SIGN_IN_OFF,
  DOUBLE_AUTHENTICATE_ON,
  DOUBLE_AUTHENTICATE_OFF,
  SIGN_OUT_DEVICE_DEVICE_BY_ID,
  CHANGE_EMAIL,
  RESEND_VERIFY_EMAIL_CODE,
  SEND_VERIFY_EMAIL_CODE,
  VERIFY_EMAIL,
} = settingsFetchStatusNames;

let initialState = {
  fetchError: null,
  commonFetchStatus: IDLE,
  authorization: {
    [RESEND_VERIFY_EMAIL_CODE]: IDLE,
    [SEND_VERIFY_EMAIL_CODE]: IDLE,
    [VERIFY_EMAIL]: IDLE,
    [CHANGE_EMAIL]: IDLE,
    [SIGN_UP]: IDLE,
    [SIGN_IN]: IDLE,
    [GET_REST_PASSWORD_CREDENTIALS]: IDLE,
    [RESEND_REST_PASSWORD_CREDENTIALS]: IDLE,
    [VERIFY_REST_REST_PASSWORD_CONFIRM_CODE]: IDLE,
    [CREATE_NEW_PASSWORD]: IDLE,
  },

  settings: {
    [CHANGE_EMAIL]: IDLE,
    [CHANGE_PASSWORD]: IDLE,
    [ACCOUNT_SETTINGS]: IDLE,
    [GETTING_VERIFICATION_CODE_FOR_BOT]: IDLE,
    [DISCONNECT_BOT]: IDLE,
    [NOTIFY_ABOUT_SIGN_IN_ON]: IDLE,
    [NOTIFY_ABOUT_SIGN_IN_OFF]: IDLE,
    [DOUBLE_AUTHENTICATE_ON]: IDLE,
    [DOUBLE_AUTHENTICATE_OFF]: IDLE,
    [SIGN_OUT_DEVICE_DEVICE_BY_ID]: IDLE,
    [VERIFY_EMAIL]: IDLE,
    [SEND_VERIFY_EMAIL_CODE]: IDLE,
    [RESEND_VERIFY_EMAIL_CODE]: IDLE,
  },
};

export const fetchStatusesReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_PRIVATE_FETCH_STATUS:
      const { reducerName, actionName, status } = payload;
      return produce(state, (draftState) => {
        draftState[reducerName][actionName] = status;
      });

    case UPDATE_COMMON_FETCH_STATUS:
      return {
        ...state,
        commonFetchStatus: payload.status,
      };

    case SET_FETCH_ERROR:
      return {
        ...state,
        fetchError: payload.errorName,
      };

    default:
      return state;
  }
};
