import { commonSettingsAPI } from '../../API/settings';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { settingsFetchStatusNames } from '../../utils/settings/names';
import { fetchStatusCreator } from '../fetch_statuses';
import { RECEIVE_ACCOUNT_SETTINGS } from '../types/settings';
import { setFetchError } from '../fetch_statuses';
const { ACCOUNT_SETTINGS } = settingsFetchStatusNames;
const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;

export const receiveAccountSettings = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('settings')(ACCOUNT_SETTINGS, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await commonSettingsAPI.getAccountSettings();
    dispatch({
      type: RECEIVE_ACCOUNT_SETTINGS,
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
