import { securitySettingsAPI } from '../../API/settings';
import { UPDATE_SECURITY_SETTINGS } from '../types/settings';
import { fetchStatusCreator } from '../fetch_statuses';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { settingsFetchStatusNames } from '../../utils/settings/names';
import { setFetchError } from '../fetch_statuses';

const { LOADING, IDLE, SUCCEEDED, FAILED } = commonFetchStatuses;
const {
  GETTING_VERIFICATION_CODE_FOR_BOT,
  DISCONNECT_BOT,
  NOTIFY_ABOUT_SIGN_IN_ON,
  NOTIFY_ABOUT_SIGN_IN_OFF,
  DOUBLE_AUTHENTICATE_ON,
  DOUBLE_AUTHENTICATE_OFF,
  CHANGE_PASSWORD,
} = settingsFetchStatusNames;

export const getVerificationCodeForBot = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(
    GETTING_VERIFICATION_CODE_FOR_BOT,
    dispatch
  );
  try {
    setFetchStatus(LOADING);
    const response = await securitySettingsAPI.getVerificationCodeForBot();
    dispatch({
      type: UPDATE_SECURITY_SETTINGS,
      payload: { option: 'confirmCodeForBot', value: response.data.confirmCode },
    });

    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const disconnectTelegramBot = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(DISCONNECT_BOT, dispatch);
  try {
    setFetchStatus(LOADING);
    await securitySettingsAPI.disconnectTelegramBot('isVerifiedBot', false);
    dispatch({
      type: UPDATE_SECURITY_SETTINGS,
      payload: { option: 'isVerifiedBot', value: false },
    });

    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const setNotifyAboutSignIn = (value) => async (dispatch) => {
  const privateFetchName = value ? NOTIFY_ABOUT_SIGN_IN_ON : NOTIFY_ABOUT_SIGN_IN_OFF;
  const setFetchStatus = fetchStatusCreator('settings')(privateFetchName, dispatch);

  try {
    setFetchStatus(LOADING);
    const response = await securitySettingsAPI.updateSecuritySettings('notifyAboutSignIn', value);
    dispatch({
      type: UPDATE_SECURITY_SETTINGS,
      payload: response.data,
    });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const setDoubleAuthenticate = (value) => async (dispatch) => {
  const privateFetchName = value ? DOUBLE_AUTHENTICATE_ON : DOUBLE_AUTHENTICATE_OFF;
  const setFetchStatus = fetchStatusCreator('settings')(privateFetchName, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await securitySettingsAPI.updateSecuritySettings('doubleAuthenticate', value);
    dispatch({
      type: UPDATE_SECURITY_SETTINGS,
      payload: response.data,
    });

    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const changePassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(CHANGE_PASSWORD, dispatch);
  try {
    setFetchStatus(LOADING);
    await securitySettingsAPI.changePassword(oldPassword, newPassword, confirmPassword);
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};
