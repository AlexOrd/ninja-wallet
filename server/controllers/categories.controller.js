import HttpStatus from 'http-status-codes';
import { Category } from '../models/category.model';
import { isCategoryExists, isUserCategoryOwner, validateCategory } from '../utils/categories-validations';

export const createCategory = async (req, res) => {
  const isCategoryValidCheck = await validateCategory(req.body.category, req.userID);

  if (!isCategoryValidCheck.success) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isCategoryValidCheck.error,
    });
  }

  const newCategory = new Category({
    userId: req.userID,
    name: req.body.category.name,
    description: req.body.category.description,
    color: req.body.category.color,
  });

  try {
    const createCategory = await newCategory.save();
    res.status(HttpStatus.CREATED).json({
      success: true,
      category: createCategory._doc,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const getUserCategories = async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.userID });

    res.status(HttpStatus.OK).json({
      success: true,
      categories,
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const editCategory = async (req, res) => {
  const categoryFromReq = req.body.category

  if (!isCategoryExists(req.params.id)) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: 'Category with this id doesn`t exists'
    })
  }

  const category = await Category.findOne({_id: req.params.id})

  const isUserOwner = isUserCategoryOwner(category, req.userID)
  
  if (!isUserOwner.response) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isUserOwner.error
    })
  }

  try {
    category.name = categoryFromReq.name || category.name
    category.description = categoryFromReq.description || category.description
    category.color = categoryFromReq.color || category.color

    await category.save()

    res.status(HttpStatus.OK).json({
      success: true,
      category: createCategory._doc,
    });
  } catch (err) {
    console.log(err)
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const deleteCategory = async (req, res) => {
  const categoryId = req.params.id
  if (!isCategoryExists(categoryId)) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: 'Category with this id doesn`t exists'
    })
  }
  
  const category = await Category.findOne({_id: categoryId})

  const isUserOwner = isUserCategoryOwner(category, req.userID)
  
  if (!isUserOwner.response) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isUserOwner.error
    })
  }

  try {
    await Category.deleteOne({_id: categoryId})

    res.status(HttpStatus.OK).json({
      success: true,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
}