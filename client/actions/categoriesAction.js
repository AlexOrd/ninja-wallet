import API from '../API/API';
import {
  SET_CATEGORIES,
  SET_NEW_CATEGORY_DATA,
  CLEAR_NEW_CATEGORY_DATA,
} from '../constants/actionType';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  data: { categories },
});

export const handleNewCategoryChange = (newCategoryData, success) => ({
  type: SET_NEW_CATEGORY_DATA,
  data: { newCategoryData },
});

export const clearNewCategoryData = () => ({
  type: CLEAR_NEW_CATEGORY_DATA,
});

export const fetchCategories = (success) => async (dispatch) => {
  try {
    const res = await API.categoriesAPI.getAllCategories();
    const sortedCategoriesByDate = res.data.categories.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    dispatch(setCategories(sortedCategoriesByDate));
    success && success();
  } catch (err) {}
};

export const fetchCategoriesFilteredByDate = (from, to) => async (dispatch) => {
  try {
    const res = await API.categoriesAPI.getCategoriesByDate(from, to);

    const sortedCategoriesByDate = res.data.categories.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    dispatch(setCategories(sortedCategoriesByDate));
  } catch (err) {}
};

export const editCategoryThunk = (categoryId, newCategoryData, success) => async (dispatch) => {
  try {
    const res = await API.categoriesAPI.editCategory(categoryId, newCategoryData);
    dispatch(fetchCategories(success));
  } catch (err) {}
};

export const createCategoryThunk = (newCategoryData, success) => async (dispatch) => {
  try {
    const res = await API.categoriesAPI.createCategory(newCategoryData);

    dispatch(clearNewCategoryData());
    dispatch(fetchCategories(success));
  } catch (err) {}
};

export const deleteCategoryThunk = (categoryId, success) => async (dispatch) => {
  try {
    const res = await API.categoriesAPI.deleteCategory(categoryId);

    dispatch(fetchCategories(success));
  } catch (err) {}
};
