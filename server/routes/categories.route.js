import express from 'express';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

import * as categoriesCtrl from '../controllers/categories.controller';

const router = express.Router();

router.route('/get-categories').get(categoriesCtrl.getUserCategories);

router.route('/create').post(validate(schema.category), categoriesCtrl.createCategory);

router.route('/edit/:id').put(validate(schema.category), categoriesCtrl.editCategory);

router.route('/delete/:id').delete(categoriesCtrl.deleteCategory);

export default router;
