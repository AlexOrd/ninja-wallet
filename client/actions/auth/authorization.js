import { authAPI } from '../../API/auth';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { authFetchStatusNames } from '../../utils/auth/names';
import { AUTHORIZATION } from '../types/auth';
import { fetchStatusCreator } from '../fetch_statuses';
import { setFetchError } from '../fetch_statuses';
import { authorizationAPI } from '../../API/auth/authorization';

const { CHECK_AUTH } = authFetchStatusNames;
const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;

export const checkAuth = async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(CHECK_AUTH, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await authorizationAPI.checkAuth();
    dispatch({
      type: AUTHORIZATION,
      payload: { isAuthorized: true, isEmailError: response.data.isEmailError },
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
