import express from 'express';

import validate from '../config/joi.validate';
import schema from '../utils/validator';
import * as cardCtrl from '../controllers/card.controller';

const router = express.Router();

router.route('/create-card').post(validate(schema.card), cardCtrl.createCard);
router.route('/edit-card/:id').put(cardCtrl.editCard)
router.route('/get-cards').get(cardCtrl.getCards)
router.route('/get-card/:id').get(cardCtrl.getCardById)
router.route('/remove-card/:id').delete(cardCtrl.removeCardById)

export default router;

