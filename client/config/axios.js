import axios from 'axios';
import { saveTokensToLocaleStorage, setTokensToRequest } from '../utils/auth/for_tokens';

const baseURL = 'http://localhost:3000';

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (res) => {
    saveTokensToLocaleStorage(res);
    return res;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.request.use(
  (req) => {
    setTokensToRequest(req);
    return req;
  },
  (err) => Promise.reject(err)
);
