import { restorePasswordAPI } from '../../API/auth';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { authFetchStatusNames } from '../../utils/auth/names';
import { fetchStatusCreator } from '../fetch_statuses';
import { setFetchError } from '../fetch_statuses';

import {
  AUTHORIZATION,
  SET_RESTORE_PASSWORD_TOKEN,
  SET_PERMISSION_FOR_CHANGE_PASSWORD,
} from '../types/auth';

const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;

const {
  GET_REST_PASSWORD_CREDENTIALS,
  VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
  CREATE_NEW_PASSWORD,
  RESEND_REST_PASSWORD_CREDENTIALS,
} = authFetchStatusNames;

export const requestVerify = (email) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(
    GET_REST_PASSWORD_CREDENTIALS,
    dispatch
  );

  try {
    setFetchStatus(LOADING);
    const response = await restorePasswordAPI.requestVerify(email);
    if (response.data.confirmToken) {
      dispatch({
        type: SET_RESTORE_PASSWORD_TOKEN,
        payload: { token: response.data.confirmToken },
      });
      setFetchStatus(SUCCEEDED);
    }
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchError(response, dispatch);
    setFetchStatus(FAILED);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const verificationCode = (confirmToken, confirmCode) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(
    VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
    dispatch
  );
  try {
    setFetchStatus(LOADING);
    await restorePasswordAPI.verificationCode(confirmToken, confirmCode);
    dispatch({ type: SET_PERMISSION_FOR_CHANGE_PASSWORD, payload: { isPermission: true } });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    dispatch({ type: SET_PERMISSION_FOR_CHANGE_PASSWORD, payload: { isPermission: false } });
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const createNewPassword = (confirmationToken, newPassword, confirmationPassword) => async (
  dispatch
) => {
  const setFetchStatus = fetchStatusCreator('authorization')(CREATE_NEW_PASSWORD, dispatch);
  try {
    setFetchStatus(LOADING);
    await restorePasswordAPI.createNewPassword(
      confirmationToken,
      newPassword,
      confirmationPassword
    );
    dispatch({ type: AUTHORIZATION, payload: { isAuthorized: true } });
    setFetchStatus(SUCCEEDED);
    dispatch({ type: SET_PERMISSION_FOR_CHANGE_PASSWORD, payload: { isPermission: false } });
    dispatch({ type: SET_RESTORE_PASSWORD_TOKEN, payload: { token: '' } });
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const resendRestorePasswordCode = (token) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(
    RESEND_REST_PASSWORD_CREDENTIALS,
    dispatch
  );
  try {
    setFetchStatus(LOADING);
    const { data } = await restorePasswordAPI.resendRestorePasswordCode(token);
    dispatch({ type: SET_RESTORE_PASSWORD_TOKEN, payload: { token: data.confirmToken } });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};
