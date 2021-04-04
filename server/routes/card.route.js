import express from 'express';
import * as cardCtrl from '../controllers/card.controller';

const router = express.Router();

router.use('/create-card', cardCtrl.createCard);
router.use('/edit-card/:id', cardCtrl.editCard)
router.use('/get-cards', cardCtrl.getCards)
router.use('/get-card/:id', cardCtrl.getCardById)
router.use('/remove-card/:id', cardCtrl.removeCardById)

export default router;

