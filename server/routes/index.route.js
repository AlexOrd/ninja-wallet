import express from 'express';
import userRoutes from './user.route';
import emailRoutes from './email.route';
const router = express.Router();

router.use('/users', userRoutes);
router.use('/user-email', emailRoutes);
export default router;
