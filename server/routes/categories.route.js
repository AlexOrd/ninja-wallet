import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

import * as categoriesCtrl from '../controllers/categories.controller';

const router = express.Router();

router.route('/')
    .get(categoriesCtrl.getUserCategories)
    .post(categoriesCtrl.createCategory)


router.route('/:id')
    .put(categoriesCtrl.editCategory)
    .delete(categoriesCtrl.deleteCategory);

export default router;
