import { axiosInstance } from '../../config/axios';

export const userEmailAPI = {
  verificationEmail: (confirmCode) => {
    return axiosInstance.patch('/api/user-email/verification', { confirmCode });
  },

  changeEmail: (email) => {
    return axiosInstance.patch('/api/user-email/change', { email });
  },

  sendVerifyEmailCode: () => {
    return axiosInstance.patch('/api/user-email/resend-code');
  },
};
