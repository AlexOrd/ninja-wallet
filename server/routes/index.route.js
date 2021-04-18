import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import profileRoutes from './profile.route';
import userPhotoRoutes from './userPhoto.route';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/users', userRoutes);

router.use('/profile', profileRoutes);

router.use('/userphoto', userPhotoRoutes);

export default router;