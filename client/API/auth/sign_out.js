import { axiosInstance } from '../../config/axios';

export const signOutAPI = {
  signOut: () => {
    return axiosInstance.delete('/api/auth/sign-out');
  },

  signOutEveryDevice: () => {
    return axiosInstance.delete('/api/auth/sign-out?allDevices=true');
  },

  signOutSomeDevice: (id) => {
    return axiosInstance.delete(`/api/auth/sign-out?deviceID=${id}`);
  },
};
