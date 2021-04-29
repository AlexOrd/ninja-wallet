import HttpStatus from 'http-status-codes';
import Category from '../models/category.model';
import { Transaction } from '../models/transaction.model';
import {
  isCategoryExists,
  isUserCategoryOwner,
  validateCategory,
} from '../utils/categories-validations';
import moment from 'moment'

export const createCategory = async (req, res) => {
  const isCategoryValidCheck = await validateCategory(req.body, req.userID);

  if (!isCategoryValidCheck.success) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isCategoryValidCheck.error,
    });
  }

  const newCategory = new Category({
    userId: req.userID,
    name: req.body.name,
    description: req.body.description,
    color: req.body.color,
  });

  try {
    const createCategory = await newCategory.save();
    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { category: createCategory._doc },
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
      data: { categories },
    });
  } catch (err) {
    console.log(err)
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const getUserCategoriesWithTotalTransactionsSum = async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.userID });
    
    const startFilterDate = moment(new Date(req.body.from), "DD/MM/YYYY")
    const endFilterDate = moment(new Date(req.body.to), "DD/MM/YYYY")
    
    const categoriesWithSum = await Promise.all(
      categories.map(async (category) => {
        const categoryTransactions = await (
          await Transaction.find({ transactionCategory: category._id })
        ).filter((transaction) => {
          if (req.body.from) {
            return req.body.to 
              ? moment(transaction.createdAt, "DD/MM/YYYY").isBetween(startFilterDate, endFilterDate) 
              : moment(transaction.createdAt, "DD/MM/YYYY").isAfter(startFilterDate) 
          }
          return true
        });

        return {
          ...category._doc,
          transactionsCount: categoryTransactions.length,
          expensesSum: categoryTransactions.reduce((totalSum, transaction) => {
            return totalSum + transaction.sum;
          }, 0),
        };
      })
    );

    res.status(HttpStatus.OK).json({
      success: true,
      data: { categories: categoriesWithSum },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const editCategory = async (req, res) => {
  const categoryFromReq = req.body;

  if (!isCategoryExists(req.params.id)) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: 'Category with this id doesn`t exists',
    });
  }

  const category = await Category.findOne({ _id: req.params.id });

  const isUserOwner = isUserCategoryOwner(category, req.userID);
  if (!isUserOwner.response) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isUserOwner.error,
    });
  }

  try {
    category.name = categoryFromReq.name;
    category.description = categoryFromReq.description;
    category.color = categoryFromReq.color;

    const editedCategory = await category.save();

    res.status(HttpStatus.OK).json({
      success: true,
      data: { category: editedCategory._doc },
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  if (!isCategoryExists(categoryId)) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: 'Category with this id doesn`t exists',
    });
  }

  const category = await Category.findOne({ _id: categoryId });

  const isUserOwner = isUserCategoryOwner(category, req.userID);

  if (!isUserOwner.response) {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      msg: isUserOwner.error,
    });
  }

  const categoryTransaction = await Transaction.find({transactionCategory: category._id})

  const transactionsForDeleteIds = categoryTransaction.map(transaction => transaction._id)

  await Transaction.deleteMany({_id: transactionsForDeleteIds})

  try {
    await Category.deleteOne({ _id: categoryId });

    res.status(HttpStatus.OK).json({
      success: true,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};
