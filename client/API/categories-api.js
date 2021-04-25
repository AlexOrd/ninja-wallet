import { axiosInstance } from '../config/axios';

export const categoriesAPI = {
  getAllCategories: async () => {
    const res = await axiosInstance.post(
      '/api/categories/get-categories-with-total-transactions-sum-by-date'
    );
    return res.data;
  },
  getCategoriesByDate: async (from, to) => {
    const res = await axiosInstance.post(
      '/api/categories/get-categories-with-total-transactions-sum-by-date',
      {
        from,
        to,
      }
    );
    return res.data;
  },
  editCategory: async (categoryId, newCategoryData) => {
    const res = await axiosInstance.put(`api/categories/${categoryId}/`, newCategoryData);
    return res.data;
  },
  createCategory: async (newCategoryData) => {
    const res = await axiosInstance.post(`api/categories/`, newCategoryData);
    return res.data;
  },
  deleteCategory: async (categoryId) => {
    const res = await axiosInstance.delete(`/api/categories/${categoryId}`);
    return res.data;
  },
};
