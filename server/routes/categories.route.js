import express from 'express';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

import * as categoriesCtrl from '../controllers/categories.controller';

const router = express.Router();

router.route('/')
    .get(categoriesCtrl.getUserCategories)
    .post(categoriesCtrl.createCategory)

router.route('/get-categories-with-total-transactions-sum-by-date')
    .post(categoriesCtrl.getUserCategoriesWithTotalTransactionsSum)

router.route('/:id')
    .put(categoriesCtrl.editCategory)
    .delete(categoriesCtrl.deleteCategory);

export default router;
