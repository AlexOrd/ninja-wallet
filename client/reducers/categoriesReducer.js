import {
  SET_CATEGORIES,
  SET_NEW_CATEGORY_DATA,
  CLEAR_NEW_CATEGORY_DATA,
  SET_IS_LOADING,
} from '../constants/actionType';

const initialState = {
  categories: [],
  newCategoryData: null,
  isLoading: false,
};

const sortCategoriesBySpendedSum = (categories) => {
  return [...categories.sort((a, b) => b.expensesSum - a.expensesSum)];
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, categories: sortCategoriesBySpendedSum(action.data.categories) };
    }
    case SET_NEW_CATEGORY_DATA: {
      return { ...state, newCategoryData: action.data.newCategoryData };
    }
    case CLEAR_NEW_CATEGORY_DATA: {
      return { ...state, newCategoryData: null };
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.data.isLoading };
    }
    default: {
      return state;
    }
  }
};

export default categoriesReducer;
