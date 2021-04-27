import { axiosInstance } from '../../config/axios';

export const authAPI = {
  signUp: (email, password) => {
    return axiosInstance.post('/api/auth/sign-up', { email, password });
  },

  signIn: (email, password) => {
    return axiosInstance.post('/api/auth/sign-in', { email, password });
  },
};
