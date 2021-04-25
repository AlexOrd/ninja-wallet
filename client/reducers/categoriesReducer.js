import {
  SET_CATEGORIES,
  SET_NEW_CATEGORY_DATA,
  CLEAR_NEW_CATEGORY_DATA,
} from '../constants/actionType';

const initialState = {
  categories: [],
  newCategoryData: null,
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
    default: {
      return state;
    }
  }
};

export default categoriesReducer;
