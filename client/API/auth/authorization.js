import { axiosInstance } from '../../config/axios';

export const authorizationAPI = {
  checkAuth: () => {
    return axiosInstance.get('/api/auth/check-auth');
  },
};
