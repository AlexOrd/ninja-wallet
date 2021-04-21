import { ACCESS_TOKEN_STORAGE_NAME, REFRESH_TOKEN_STORAGE_NAME } from './constants';

export const saveTokensToLocaleStorage = (res) => {
  const accessToken = res.headers['access-token'];
  const refreshToken = res.headers['refresh-token'];
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

  req.headers.common['Refresh-Token'] = refreshToken;
  req.headers.common['Authorization'] = accessToken;
};
