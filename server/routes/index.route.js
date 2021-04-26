import express from 'express';
import userRoutes from './user.route';
import profileRoutes from './profile.route';
import userPhotoRoutes from './userPhoto.route';
import authRoutes from './auth.route';
import emailRoutes from './email.route';
import transactionRoutes from './transaction.route';
import categoriesRoutes from './categories.route';
import cardRoutes from './card.route';
import monobankRoutes from './monobank.route'
import { checkAccessAndProvideUserID } from '../middlewares/auth/route_verifiers';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/user-email', checkAccessAndProvideUserID, emailRoutes);

router.use('/users', checkAccessAndProvideUserID, userRoutes);

router.use('/categories', checkAccessAndProvideUserID, categoriesRoutes);

router.use('/transactions', checkAccessAndProvideUserID, transactionRoutes);

router.use('/card', checkAccessAndProvideUserID, cardRoutes);

router.use('/profile', checkAccessAndProvideUserID, profileRoutes);

router.use('/userphoto', checkAccessAndProvideUserID, userPhotoRoutes);

router.use('/monobank', checkAccessAndProvideUserID, monobankRoutes);

export default router;
