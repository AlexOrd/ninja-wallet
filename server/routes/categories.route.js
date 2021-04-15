import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

import * as categoriesCtrl from '../controllers/categories.controller';

const router = express.Router();

router.route('/get-categories').get(categoriesCtrl.getUserCategories);

router.route('/create').post(categoriesCtrl.createCategory);

router.route('/edit/:id').put(categoriesCtrl.editCategory);

router.route('/delete/:id').delete(categoriesCtrl.deleteCategory);

export default router;
