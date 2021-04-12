import express from 'express';
import * as cardCtrl from '../controllers/card.controller';

const router = express.Router();

router.route('/create-card').post(cardCtrl.createCard);
router.route('/edit-card/:id').put(cardCtrl.editCard)
router.route('/get-cards').get(cardCtrl.getCards)
router.route('/get-card/:id').get(cardCtrl.getCardById)
router.route('/remove-card/:id').delete(cardCtrl.removeCardById)

export default router;

