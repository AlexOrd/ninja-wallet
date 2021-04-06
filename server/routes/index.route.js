import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import transactionRoutes from './transaction.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);
router.use('/transactions', transactionRoutes);
// mount user routes at /users
router.use('/users', userRoutes);

export default router;
