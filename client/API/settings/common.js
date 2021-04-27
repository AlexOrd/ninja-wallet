import { axiosInstance } from '../../config/axios';

export const commonSettingsAPI = {
  getAccountSettings: () => {
    return axiosInstance.get('/api/settings');
  },
};
