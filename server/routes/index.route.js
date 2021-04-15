import express from 'express';
import userRoutes from './user.route';
import cardRoutes from './card.route'

const router = express.Router();

router.use('/users', userRoutes);

//mount user routes at /users
router.use('/card', cardRoutes);

router.use('/user-email', emailRoutes);
export default router;
