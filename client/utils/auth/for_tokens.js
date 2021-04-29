import { fetchErrorsNames, tokensNames } from './constants';
import store from '../../store/configureStore';
import jwtDecode from 'jwt-decode';
import { getLocalStorage } from '../storageUtil';
import { AUTHORIZATION } from '../../actions/types/auth';

const { MISSING_TOKEN, INVALID_TOKEN, SIGN_OUT_FROM_ANOTHER_DEVICE } = fetchErrorsNames;
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

export const isAuthError = (err) => {
  if (
    err?.response?.data?.error === SIGN_OUT_FROM_ANOTHER_DEVICE ||
    err?.response?.data?.error === MISSING_TOKEN ||
    err?.response?.data?.error === INVALID_TOKEN
  ) {
    return true;
  }

  return false;
};

export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

export const getToken = (tokenName) => {
  return getLocalStorage(tokenName);
};

export const isAuthenticated = () => {
  const isAccessToken = getToken(ACCESS_TOKEN_STORAGE_NAME);
  const isExpiredRefreshToken = isTokenExpired(getToken(REFRESH_TOKEN_HEADERS_NAME));

  return isAccessToken && !isExpiredRefreshToken;
};
