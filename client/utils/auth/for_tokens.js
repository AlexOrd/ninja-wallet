import { fetchErrorsNames, tokensNames } from './constants';
import store from '../../store/configureStore';

import { AUTHORIZATION } from '../../actions/types/auth';

const { MISSING_TOKEN, INVALID_TOKEN } = fetchErrorsNames;
const {
  ACCESS_TOKEN_STORAGE_NAME,
  REFRESH_TOKEN_STORAGE_NAME,
  ACCESS_TOKEN_HEADERS_NAME,
  REFRESH_TOKEN_HEADERS_NAME,
} = tokensNames;

export const saveTokensToLocaleStorage = (res) => {
  const accessToken = res.headers[ACCESS_TOKEN_HEADERS_NAME];
  const refreshToken = res.headers[REFRESH_TOKEN_HEADERS_NAME];

  if (!accessToken || !refreshToken) {
    return;
  }
  localStorage.setItem(ACCESS_TOKEN_STORAGE_NAME, accessToken);
  localStorage.setItem(REFRESH_TOKEN_STORAGE_NAME, refreshToken);
};

export const setTokensToRequest = (req) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_NAME);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_NAME);

  if (!accessToken || !refreshToken) {
    return;
  }
  req.headers.common[REFRESH_TOKEN_HEADERS_NAME] = refreshToken;
  req.headers.common['authorization'] = accessToken;
};

export const setAuthStatus = (status) => {
  const { isAuthorized } = store.getState().authorization;
  if (isAuthorized && status) return;
  if (!isAuthorized && !status) return;

  return store.dispatch({
    type: AUTHORIZATION,
    payload: { isAuthorized: status },
  });
};

export const isAuthError = (err) => {
  if (
    err?.response?.data?.error === MISSING_TOKEN ||
    err?.response?.data?.error === INVALID_TOKEN
  ) {
    return true;
  }

  return false;
};
