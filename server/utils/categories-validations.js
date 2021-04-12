import { Category } from '../models/category.model';

export const validateCategory = async (category, userId) => {
  if (!category.name.trim()) {
    return {
      success: false,
      error: 'Field name is required',
    };
  }

  const categoryWithTheSameName = await Category.findOne({ name: category.name, userId });

  if (categoryWithTheSameName) {
    return {
      success: false,
      error: 'Category with this name already exists',
    };
  }

  return { success: true };
};

export const isCategoryExists = async (categoryId) => {
  const isExists = await Category.findOne({ _id: categoryId });

  if (isExists) {
    return true;
  }

  return false;
};

export const isUserCategoryOwner = (category, userId) => {
  return category.userId._id.toString() === userId
    ? {
        response: true,
      }
    : {
        response: false,
        error: 'You dont have permissions for this operation',
      };
};
