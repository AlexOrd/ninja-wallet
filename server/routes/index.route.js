import express from 'express';
import userRoutes from './user.route';
<<<<<<< HEAD
import profileRoutes from './profile.route';
import userPhotoRoutes from './userPhoto.route';
=======
import transactionRoutes from './transaction.route';
import categoriesRoutes from './categories.route';
import cardRoutes from './card.route';
>>>>>>> main

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/users', userRoutes);

<<<<<<< HEAD
router.use('/profile', profileRoutes);

router.use('/userphoto', userPhotoRoutes);

export default router;
=======
router.use('/categories', categoriesRoutes);

router.use('/transactions', transactionRoutes);

router.use('/card', cardRoutes);

router.use('/user-email', emailRoutes);

router.use('/users', userRoutes);

export default router;
>>>>>>> main
