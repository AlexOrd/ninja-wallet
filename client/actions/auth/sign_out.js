import { signOutAPI } from '../../API/auth';
import { removeAccessTokens } from '../../utils/auth/tools';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { fetchStatusCreator, setCommonFetchStatus } from '../fetch_statuses';
import { settingsFetchStatusNames } from '../../utils/settings/names';
import { setFetchError } from '../fetch_statuses';
import {
  SIGN_OUT_SOME_DEVICE,
  SIGN_OUT_EVERY_DEVICE,
  SIGN_OUT_CURRENT_DEVICE,
} from '../types/auth';

const { SIGN_OUT_DEVICE_DEVICE_BY_ID } = settingsFetchStatusNames;
const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;

export const signOutSomeDevice = (id) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(SIGN_OUT_DEVICE_DEVICE_BY_ID, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await signOutAPI.signOutSomeDevice(id);
    dispatch({ type: SIGN_OUT_SOME_DEVICE, payload: { deviceID: response.data.deviceID } });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};

export const signOutEveryDevice = () => async (dispatch) => {
  try {
    setCommonFetchStatus(LOADING);
    await signOutAPI.signOutEveryDevice();
    dispatch({ type: SIGN_OUT_EVERY_DEVICE });
    setCommonFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setCommonFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setCommonFetchStatus(IDLE);
    removeAccessTokens();
  }
};

export const signOutCurrentDevice = () => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator(null, dispatch);

  try {
    setFetchStatus(LOADING);
    await signOutAPI.signOut();
    dispatch({ type: SIGN_OUT_CURRENT_DEVICE });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    removeAccessTokens();
    setFetchStatus(IDLE);
  }
};
