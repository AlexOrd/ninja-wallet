import { axiosInstance } from '../config/axios';

export const monobankApi = {
  createMonobankAccount: async (monobankData, header) => {
    const res = await axiosInstance.post('/api/monobank/create-monobank-account', monobankData, {
      headers: { 'monobank-token': header },
    });
    return res.data;
  },
  getUserInfo: async (header, handleError) => {
    try {
      const res = await axiosInstance.get('/api/monobank/get-user-info', {
        headers: { 'monobank-token': header },
      });
      return res.data;
    } catch (err) {
      console.log(err.response.statusText);
      handleError(err.response.statusText);
    }
  },
  getStatementInfo: async (monobankToken, monobankAccountId, monobankUserDataId, handleError) => {
    try {
      const res = await axiosInstance.post(
        `/api/monobank/get-statement-info`,
        {
          monobankAccountId,
          monobankUserDataId,
        },
        {
          headers: { 'monobank-token': monobankToken },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err.response.statusText);
      handleError(err.response.statusText);
    }
  },
  getMonobankUserAccounts: async (handleError) => {
    try {
      const res = await axiosInstance.get('/api/monobank/get-monobank-accounts');

      return res.data;
    } catch (err) {
      console.log(err.response.statusText);
      handleError(err.response.statusText);
    }
  },
  applyTransaction: async (monobankData, header) => {
    const res = await axiosInstance.post(
      `/api/monobank/${cardId}`,
      { headers: { 'monobank-token': header } },
      monobankData
    );
    return res.data;
  },
  dismissTransaction: async (monobankData) => {
    const res = await axiosInstance.post(
      `/api/monobank/dismiss-transaction`,
      { headers: { 'monobank-token': header } },
      monobankData
    );
    return res.data;
  },
};
