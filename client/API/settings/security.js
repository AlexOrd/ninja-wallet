import { axiosInstance } from '../../config/axios';

export const securitySettingsAPI = {
  getAccountSettings: () => {
    return axiosInstance.get('/api/settings');
  },

  updateSecuritySettings: (option, value) => {
    return axiosInstance.patch('/api/settings/security', { option, value });
  },

  getVerificationCodeForBot: () => {
    return axiosInstance.get('/api/settings/security/bot/get-verification-code');
  },

  disconnectTelegramBot: () => {
    return axiosInstance.delete('/api/settings/security/bot/disconnect');
  },

  changePassword: (oldPassword, newPassword, confirmPassword) => {
    return axiosInstance.patch('/api/settings/security/change-password', {
      oldPassword,
      newPassword,
      confirmPassword,
    });
  },
};
