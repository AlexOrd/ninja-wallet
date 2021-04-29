import { userEmailAPI } from '../../API/settings';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { settingsFetchStatusNames } from '../../utils/settings/names';
import { EMAIL_VERIFICATION } from '../types/auth';
import { UPDATE_SECURITY_SETTINGS } from '../types/settings';
import { fetchStatusCreator, setPrivateFetchStatus } from '../fetch_statuses';
import { setFetchError } from '../fetch_statuses';

const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;
const {
  VERIFY_EMAIL,
  RESEND_VERIFY_EMAIL_CODE,
  SEND_VERIFY_EMAIL_CODE,
  CHANGE_EMAIL,
} = settingsFetchStatusNames;

export const verificationEmail = (confirmCode) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(VERIFY_EMAIL, dispatch);

  try {
    setFetchStatus(LOADING);
    await userEmailAPI.verificationEmail(confirmCode);
    dispatch({ type: EMAIL_VERIFICATION, payload: { isVerification: true } });
    setPrivateFetchStatus('authorization')(VERIFY_EMAIL, dispatch)(SUCCEEDED);
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    dispatch({ type: EMAIL_VERIFICATION, payload: false });
    setPrivateFetchStatus('authorization')(VERIFY_EMAIL, dispatch)(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setPrivateFetchStatus('authorization')(VERIFY_EMAIL, dispatch)(IDLE);
    setFetchStatus(IDLE);
  }
};

export const resendVerifyEmailCode = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(RESEND_VERIFY_EMAIL_CODE, dispatch);
  try {
    setFetchStatus(LOADING);
    await userEmailAPI.sendVerifyEmailCode();
    setPrivateFetchStatus('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(SUCCEEDED);
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setPrivateFetchStatus('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
    setPrivateFetchStatus('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(IDLE);
  }
};

export const sendVerifyEmailCode = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(SEND_VERIFY_EMAIL_CODE, dispatch);
  try {
    setFetchStatus(LOADING);
    await userEmailAPI.sendVerifyEmailCode();
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const changeEmail = (newEmail) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(CHANGE_EMAIL, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await userEmailAPI.changeEmail(newEmail);
    dispatch({
      type: UPDATE_SECURITY_SETTINGS,
      payload: { option: 'userEmail', value: response.data.newEmail },
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
