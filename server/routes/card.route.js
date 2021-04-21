import express from 'express';

import validate from '../config/joi.validate';
import schema from '../utils/validator';
import * as cardCtrl from '../controllers/card.controller';

const router = express.Router();

router.route('/')
    .post(validate(schema.card), cardCtrl.createCard)
    .get(cardCtrl.getCards)

router.route('/:id')
    .put(cardCtrl.editCard)
    .get(cardCtrl.getCardById)
    .delete(cardCtrl.removeCardById)

export default router;

