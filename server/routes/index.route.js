import express from 'express';
import userRoutes from './user.route';
import categoriesRoutes from './categories.route';
import cardRoutes from './card.route'

const router = express.Router();

router.use('/users', userRoutes);

router.use('/categories', categoriesRoutes);

router.use('/card', cardRoutes);

router.use('/user-email', emailRoutes);

export default router;
