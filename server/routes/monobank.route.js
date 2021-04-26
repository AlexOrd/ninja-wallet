
import express from 'express';

import * as monobankCtrl from '../controllers/monobank.controller';

const router = express.Router();

router.route('/get-user-info/').get(monobankCtrl.getUserInfo);
router.route('/create-monobank-account').post(monobankCtrl.addMonobankAccountToUser);

export default router;