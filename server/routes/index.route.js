import express from 'express';
import userRoutes from './user.route';
import transactionRoutes from './transaction.route';
import categoriesRoutes from './categories.route';
import cardRoutes from './card.route';
import authRoutes from './auth.route';
import emailRoutes from './email.route';


const router = express.Router();

router.use('/auth', authRoutes);

router.use('/users', userRoutes);

router.use('/categories', categoriesRoutes);

router.use('/transactions', transactionRoutes);

router.use('/card', cardRoutes);

router.use('/user-email', emailRoutes);



export default router;
