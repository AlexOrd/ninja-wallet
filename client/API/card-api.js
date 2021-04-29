import { axiosInstance } from '../config/axios';

export const cardApi = {
  createCard: async (cardData) => {
    const res = await axiosInstance.post('/api/card', cardData);
    return res.data;
  },
  getAllCards: async () => {
    const res = await axiosInstance.get('/api/card');
    return res.data;
  },
  getCardById: async (cardId) => {
    const res = await axiosInstance.get(`/api/card/${cardId}`);
    return res.data;
  },
  editCard: async (cardId, cardData) => {
    const res = await axiosInstance.put(`/api/card/${cardId}`, cardData);
    return res.data;
  },
  deleteCard: async (cardId) => {
    const res = await axiosInstance.delete(`/api/card/${cardId}`);
    return res.data;
  },
};
