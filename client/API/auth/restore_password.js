import { axiosInstance } from '../../config/axios';

export const restorePasswordAPI = {
  requestVerify: (email) => {
    return axiosInstance.post('/api/auth/restore-password/get-credentials', { email });
  },

  verificationCode: (confirmToken, confirmCode) => {
    return axiosInstance.post('/api/auth/restore-password/verify-code', {
      confirmToken,
      confirmCode,
    });
  },

  createNewPassword: (confirmToken, newPassword, confirmPassword) => {
    return axiosInstance.patch('/api/auth/restore-password/create-password', {
      confirmToken,
      newPassword,
      confirmPassword,
    });
  },

  resendRestorePasswordCode: (confirmToken) => {
    return axiosInstance.patch('/api/auth/restore-password/resend-code', { confirmToken });
  },
};
