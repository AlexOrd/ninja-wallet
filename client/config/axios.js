import axios from 'axios';
import store from '../store/configureStore';
import {
  isAuthError,
  saveTokensToLocaleStorage,
  setTokensToRequest,
} from '../utils/auth/for_tokens';
import { setAuthStatus } from '../actions/auth/common';
import { tokensNames } from '../utils/auth/constants';

const baseURL = 'http://localhost:3000';

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (res) => {
    saveTokensToLocaleStorage(res);
    return res;
  },

  (err) => {
    if (isAuthError(err)) {
      localStorage.removeItem(tokensNames.ACCESS_TOKEN_STORAGE_NAME);
      localStorage.removeItem(tokensNames.REFRESH_TOKEN_STORAGE_NAME);

      store.dispatch(setAuthStatus(false));
    }

    return Promise.reject(err);
  }
);

axiosInstance.interceptors.request.use(
  (req) => {
    setTokensToRequest(req);
    return req;
  },
  (err) => Promise.reject(err)
);
