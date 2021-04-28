import { authAPI } from '../../API/auth';
import { commonFetchStatuses } from '../../utils/auth/constants';
import { authFetchStatusNames } from '../../utils/auth/names';
import { AUTHORIZATION } from '../types/auth';
import { fetchStatusCreator } from '../fetch_statuses';
import { setFetchError } from '../fetch_statuses';

const { SIGN_UP, SIGN_IN } = authFetchStatusNames;
const { LOADING, SUCCEEDED, FAILED, IDLE } = commonFetchStatuses;

export const signUp = (email, password) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(SIGN_UP, dispatch);
  try {
    setFetchStatus(LOADING);
    const response = await authAPI.signUp(email, password);
    dispatch({
      type: AUTHORIZATION,
      payload: { isAuthorized: false, isEmailError: response.data.isEmailError },
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

export const signIn = (email, password) => async (dispatch) => {
  const setFetchStatus = fetchStatusCreator('authorization')(SIGN_IN, dispatch);
  try {
    setFetchStatus(LOADING);
    await authAPI.signIn(email, password);
    dispatch({ type: AUTHORIZATION, payload: { isAuthorized: true } });
    setFetchStatus(SUCCEEDED);
    setFetchError(null, dispatch);
  } catch ({ response }) {
    setFetchStatus(FAILED);
    setFetchError(response, dispatch);
  } finally {
    setFetchStatus(IDLE);
  }
};
